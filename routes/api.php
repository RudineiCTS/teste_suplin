<?php

use App\Http\Controllers\api\AlbumController;
use App\Http\Controllers\api\FaixaController;
use Illuminate\Support\Facades\Route;

Route::get('/api/album', [AlbumController::class, 'index']);
Route::post('/api/album', [AlbumController::class, 'store']);
Route::get('/api/find/album', [AlbumController::class, 'searchByName']);
Route::delete('/api/album/{id}', [AlbumController::class, 'destroy']);


Route::post('/api/faixa', [FaixaController::class, 'store']);
Route::delete('/api/faixa/{id}', [FaixaController::class, 'destroy']);
Route::get('/api/faixa', [FaixaController::class, 'index']);
Route::get('/api/find/faixa', [FaixaController::class, 'searchByName']);
