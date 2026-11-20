<?php

namespace Database\Seeders;

use App\Models\Tariff;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'ungten',
            'email' => 'xavier.westswood@yandex.ru',
            'role' => 'admin',
            'password' => '$2y$12$TpaQSWvohhKPas71NdxYS.vEiqqObdSCuUjYtCgTK4XuL.ruEuNHm',
        ]);

        Tariff::factory()->create([
            'name' => 'Chameleo Start',
            'descr' => 'базовый минимум)',
            'max_devices' => 2,
            'duration_day' => 30,
            'price' => 199,
            'old_price' => 249,
        ]);
    }
}


