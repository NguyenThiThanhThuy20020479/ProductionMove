<?php

use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\Product\ProductlineController;
use App\Http\Controllers\Admin\Statistics\AgentController;
use App\Http\Controllers\Admin\Statistics\BasisController;
use App\Http\Controllers\Admin\Statistics\CenterController;
use App\Http\Controllers\Admin\Statistics\ProductStatusController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductionBasis\ImportController;
use App\Http\Controllers\ProductionBasis\RequestController;
use App\Models\Productline;
use Symfony\Component\Routing\RequestContext;
use Termwind\Components\Raw;
use Whoops\RunInterface;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//show tai khoan
Route::get('admin/list/users', [AccountController::class, 'allaccount']);
//show list dai ly
Route::get('admin/list/agents', [AccountController::class, 'allagents']);
//show list co so san xuat
Route::get('admin/list/basis', [AccountController::class, 'allbasis']);
//show list trung tam bao hanh
Route::get('admin/list/servicecenters', [AccountController::class, 'allcenters']);
//show danh muc dong san pham
//show san pham theo danh muc dong san pham
Route::get('admin/list/productlines/{id}', [ProductlineController::class, 'product']);
//cap tai khoan cho dai ly
Route::middleware(['checkregister'])->group(function(){
    Route::get('admin/list/basis/register/{id}', [AccountController::class, 'registerbasis']);
    Route::get('admin/list/servicecenters/register/{id}', [AccountController::class, 'registercenter']);
});
//thong ke theo trang thai san pham
Route::get('admin/statistic/product/{status}', [ProductStatusController::class, 'statistics']);

//thong ke theo dai ly ban le
Route::get('admin/agent/import/{id}', [AgentController::class, 'import']);
Route::get('admin/agent/export/{id}', [AgentController::class, 'export']);
Route::get('admin/agent/fault/{id}', [AgentController::class, 'fault']);
Route::get('admin/agent/all/{id}', [AgentController::class, 'all']);




//thong ke theo co so san xuat
//san pham da san xuat
Route::get('admin/basis/production/{id}', [BasisController::class, 'production']);
//san pham da nhap cho dai ly
Route::get('admin/basis/export/{id}',[BasisController::class, 'export']);
//san pham loi nhan ve tu trung tam bao hanh
Route::get('admin/basis/fault/{id}', [BasisController::class, 'fault']);

//thong ke theo trung tam bao hanh
Route::get('admin/center/receive/{id}', [CenterController::class, 'receive']);
Route::get('admin/center/backtoagent/{id}', [CenterController::class, 'backtoagent']);
Route::get('admin/center/backtobasis/{id}', [CenterController::class, 'backtobasis']);

//nhap lo hang moi vao kho
Route::post('basis/{id}/import', [ImportController::class, 'import']);

//xu ly yeu cau xuat san pham cho dai ly
Route::get('basis/{id}/request/all', [RequestController::class, 'allrequest']);
Route::get('basis/{id}/request/{idrequest}', [RequestController::class, 'request']);

