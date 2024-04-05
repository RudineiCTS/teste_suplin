<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('faixa', function (Blueprint $table) {
            // $table->unsignedInteger('album_id');

            // $table->foreign('album_id')->references('id')->on('album');

            $table->foreignId('album_id')->constrained('album');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('faixa', function (Blueprint $table) {
            $table->foreignId('album_id')->constrained('albums')->onDelete('cascade');
        });
    }
};
