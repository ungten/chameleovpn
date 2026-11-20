<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Tariff extends Model
{
    /** @use HasFactory<\Database\Factories\TariffFactory> */
    use HasFactory;
    use SoftDeletes;


    protected $fillable = [
        'name',
        'descr',
        'max_devices',
        'duration_day',
        'price',
        'old_price',
    ];

    
}
