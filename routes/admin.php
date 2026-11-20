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
    

    // Управление тарифами
    Route::resource('payments', AdminPaymentsController::class);
    
});

