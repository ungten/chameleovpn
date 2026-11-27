<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tariff;
use App\Models\Payment;
use Str;
use Inertia\Inertia;
class PaymentController extends Controller
{

    public function show()
    {
        $payments = Payment::with('tariff')
            ->where('user_id', '=',auth()->id())
            ->latest()
            ->get();

        return Inertia::render('payments', [
            'payments' => $payments,
        ]);
    }
    public function create(Request $request)
    {
        $validated = $request->validate([
            'tariff_id' => ['required', 'exists:tariffs,id'],
        ]);

        $tariff = Tariff::findOrFail($validated['tariff_id']);

        // здесь нужно будет на базе api платёжной системы создавать платёжку, ид платёжки, сслыка на оплату
        // ид платёжки = external_id
        // ссылка платёжки  = payment_url
        // редирект на payment_url - target blank

        $payment = Payment::create([
            'external_id' => Str::random(5),
            'user_id' => auth()->id(),
            'tariff_id' => $tariff->id,
            'amount' => $tariff->price,
            'status' => 'pending',
            // 'payment_url' => $payment_url_from_payment_system
        ]);

        // создалась платёжка и происходит переход к моим платёжкам


        return redirect()->route('payments.show');
    }
}
