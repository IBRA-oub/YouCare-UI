<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () { return view('welcome');});

Route::get('/login', function () { return view('auth/login');});

Route::get('/register', function () { return view('auth/register');});

// _____________________benevole____________________


Route::get('/benevole/all-annonce', function () { return view('benevole/all-annonce-benevole');});
Route::get('/benevole/reservation', function () { return view('benevole/reservation');});


// ________________________organisateur______________

Route::get('/organisateur/all-annonce', function () { return view('organisateur/all-annonce-organisateur');});
Route::get('/organisateur/edite-annonce/{id}', function () { return view('organisateur/edite-annonce');});
Route::get('/organisateur/reservation', function () { return view('organisateur/reservation');});