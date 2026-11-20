<?php

namespace App\Http\Controllers;

use App\Models\Tariff;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TariffController extends Controller
{
    public function index()
    {
        $tariffs = Tariff::all();
        return Inertia::render('tariffs', [
            'tariffs' => $tariffs
        ]);
    }
}
