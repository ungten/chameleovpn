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
            'descr' => 'Всё необходимое для комфортного и безопасного интернета каждый день.',
            'max_devices' => 2,
            'duration_day' => 30,
            'price' => 199,
            'old_price' => 249,
        ]);

        Tariff::factory()->create([
            'name' => 'Chameleo Pro',
            'descr' => 'Больше устройств, больше возможностей и свободы на 3 месяца.',
            'max_devices' => 5,
            'duration_day' => 90,
            'price' => 449,
            'old_price' => 599,
        ]);

        Tariff::factory()->create([
            'name' => 'Chameleo Year',
            'descr' => 'Год без забот о продлении. Максимальная выгода и свобода подключения.',
            'max_devices' => 10,
            'duration_day' => 365,
            'price' => 1990,
            'old_price' => 3490,
        ]);
    }
}


