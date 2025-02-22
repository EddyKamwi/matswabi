<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('', function () { return view('home');})->name('home');
Route::get('/choir', function () { return view('services.choir');});
Route::get('/documentation', function () { return view('services.documentation');});
Route::get('/gps-locator', function () { return view('services.gps');});
Route::get('/live-streaming', function () { return view('services.live');});
Route::get('/catering', function () { return view('services.catering');});
Route::get('/transport', function () { return view('services.transport');});


require __DIR__ . '/auth.php';
