<?php

use App\Http\Controllers\PaymentController;
use App\Http\Controllers\TariffController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Models\Tariff;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Route::has('register'),
        'isAuth' => auth()->check(),
    ]);
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        $tariffs = Tariff::all();
        return Inertia::render('dashboard', [
            'tariffs' => $tariffs,
        ]);
    })->name('dashboard');


    Route::get('tariffs', [TariffController::class, 'index'])->name('tariffs.index');

    // Платёжки
    Route::post('payments', [PaymentController::class, 'create'])
        ->name('payments.create');

    Route::get('payments', [PaymentController::class, 'show'])->name('payments.show');

    

});






require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

require __DIR__ . '/admin.php';