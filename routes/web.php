<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Home\AccountController;
use App\Http\Controllers\Admin\Home\ProductController;
use App\Http\Controllers\Admin\MainController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
Route::get('/', function () {
    return view('welcome');
})->name('welcome');
Route::get('admin/user/login', [LoginController::class, 'index'])->name('login');
Route::post('admin/user/login/submit', [LoginController::class, 'submit']);
Route::middleware(['auth'])->group(function(){
    Route::get('admin/main', [MainController::class, 'index']);
    Route::get('admin', [MainController::class, 'index'])->name('admin');
    Route::get('admin/menu/add',[AccountController::class, 'index2']);
    Route::get('admin/menu/list', [AccountController::class, 'index']);
    Route::get('admin/menu/productline', [ProductController::class, 'index']);
    Route::get('admin/menu/productline/sedans', [ProductController::class, 'showdetail']);
});
Route::post('admin/menu/add/submit',[AccountController::class, 'submit']);
Route::get('admin/menu/logout', [LogoutController::class, 'logout']);

