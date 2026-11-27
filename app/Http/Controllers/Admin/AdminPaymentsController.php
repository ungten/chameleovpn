<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminPaymentsController extends Controller
{
    public function index(Request $request)
    {
        $query = Payment::with(['tariff', 'user', 'subscription'])
            ->latest();

        // Поиск
        if ($request->filled('search')) {
            $search = $request->search;

            $query->where(function ($q) use ($search) {
                $q->where('id', $search)
                    ->orWhere('external_id', 'like', "%{$search}%")
                    ->orWhereHas('user', function ($userQuery) use ($search) {
                        $userQuery->where('telegram_id', 'like', "%{$search}%")
                            ->orWhere('name', 'like', "%{$search}%");
                    });
            });
        }

        // Фильтр по статусу
        if ($request->filled('status') && $request->status !== 'all') {
            $query->where('status', $request->status);
        }

        $payments = $query->paginate(20)->withQueryString();

        return Inertia::render('Admin/Payments/Index', [
            'payments' => $payments,

            'filters' => $request->only('search', 'status'),

            'stats' => [
                'total' => Payment::count(),
                'paid' => Payment::where('status', 'succeeded')->count(),
                'pending' => Payment::where('status', 'pending')->count(),
                'cancelled' => Payment::where('status', 'cancelled')->count(),
                'revenue' => Payment::where('status', 'succeeded')->sum('amount'),
            ],
        ]);
    }

    /**
     * Изменение статуса платежа
     */
    public function updateStatus(Request $request, Payment $payment)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,succeeded,cancelled',
        ]);

        // Защита оплаченного платежа
        if (
            $payment->status === 'succeeded' &&
            $validated['status'] !== 'succeeded'
        ) {
            return back()->withErrors([
                'status' => 'Нельзя отменить оплаченный платёж.',
            ]);
        }

        $payment->update([
            'status' => $validated['status'],
            'paid_at' => $validated['status'] === 'succeeded'
                ? ($payment->paid_at ?? now())
                : $payment->paid_at,
        ]);

        return back()->with('success', 'Статус платежа обновлён.');
    }

    /**
     * Удаление платежа
     */
    public function destroy(Payment $payment)
    {
        $payment->delete();

        return back()->with('success', 'Платёж удалён.');
    }

    /**
     * Ручная выдача подписки
     */
    public function issueSubscription(Payment $payment)
    {
        DB::transaction(function () use ($payment) {

            $payment = Payment::with('tariff', 'user')
                ->lockForUpdate()
                ->findOrFail($payment->id);

            if ($payment->status !== 'succeeded') {
                abort(422, 'Платёж ещё не оплачен.');
            }

            if ($payment->subscription_id || $payment->subscription()->exists()) {
                abort(422, 'Подписка для этого платежа уже существует.');
            }

            $tariff = $payment->tariff;

            if (!$tariff) {
                abort(422, 'Тариф не найден.');
            }

            if (!$payment->user) {
                abort(422, 'Пользователь не найден.');
            }

            $subscription = Subscription::create([
                'user_id' => $payment->user_id,
                'tariff_id' => $payment->tariff_id,
                'traffic_used' => 0,
                'status' => 'active',
                'starts_at' => now(),
                'expires_at' => now()->addDays($tariff->duration_day),
            ]);

            $payment->update([
                'subscription_id' => $subscription->id,
            ]);
        });

        return back()->with('success', 'Подписка успешно создана.');
    }
}
