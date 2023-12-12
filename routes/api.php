<?php

use App\Http\Controllers\Api\DocenteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(DocenteController::class)->group(function () {
    Route::get('/docentes', 'index');
    Route::post('/docente', 'store');
    Route::get('/docente/{id}', 'show');
    Route::put('/docente/{id}', 'update');
    Route::delete('/docente/{id}', 'destroy');
});
