<?php

use App\Http\Controllers\Admin\AdminPaymentsController;
use App\Http\Controllers\Admin\AdminTariffsController;
use App\Http\Controllers\ImageUploadController;
use App\Http\Middleware\AdminCheckMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Course;
use App\Models\Module;
use App\Models\Lesson;
use App\Models\User;

Route::middleware(['auth', AdminCheckMiddleware::class])->prefix('admin')->name('admin.')->group(function () {

    // Управление тарифами
    Route::resource('tariffs', AdminTariffsController::class);



    Route::resource('payments', AdminPaymentsController::class)
        ->only(['index', 'destroy']);

    Route::patch('/payments/{payment}/status', [AdminPaymentsController::class, 'updateStatus'])
        ->name('payments.status');

    Route::post('/payments/{payment}/issue-subscription', [AdminPaymentsController::class, 'issueSubscription'])
        ->name('payments.issue-subscription');
});

