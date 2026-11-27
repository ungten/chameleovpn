<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->onDelete('cascade');

            $table->foreignId('tariff_id')
                ->constrained()
                ->onDelete('cascade');

            $table->decimal('amount', 10, 2);

            $table->string('external_id')->unique();

            $table->string('payment_url')->nullable();

            $table->enum('status', [
                'pending',
                'succeeded',
                'cancelled'
            ])->default('pending');

            $table->timestamp('paid_at')->nullable();

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
