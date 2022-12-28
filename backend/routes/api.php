<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Statistics\CenterController;
use App\Http\Controllers\Admin\Statistics\AgentController;
use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Admin\Product\ProductlineController;
use App\Http\Controllers\Admin\Statistics\ProductStatusController;
use App\Http\Controllers\Admin\Statistics\BasisController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('admin/list/agents/register/{id}', [AccountController::class, 'registeragent']);
Route::post('login', [LoginController::class, 'login']);
//show tất cả tài khoản
Route::get('admin/list/users', [AccountController::class, 'allaccount']);
//show tất cả các đại lí
Route::get('admin/list/agents', [AccountController::class, 'allagents']);
//show tất cả cơ sở sản xuất
Route::get('admin/list/basis', [AccountController::class, 'allbasis']);
//show tất cả trung tâm bảo hành
Route::get('admin/list/servicecenters', [AccountController::class, 'allcenters']);
//show danh mục dòng sản phẩm
Route::get('admin/list/productlines', [ProductlineController::class, 'allproductline']);
//show sản phẩm theo danh mục dòng sản phẩm
Route::get('admin/list/productlines/{id}', [ProductlineController::class, 'product']);
//thống kê sản phẩm theo trạng thái
Route::get('admin/statistic/product/{status}', [ProductStatusController::class, 'statistics']);

//thống kê theo cơ sở sản xuất
//sản phẩm đã sản xuất
Route::get('admin/basis/production/{id}', [BasisController::class, 'production']);
//sản phẩm cấp cho đại lý
Route::get('admin/basis/export/{id}',[BasisController::class, 'export']);
//sản phẩm lỗi trả về
Route::get('admin/basis/fault/{id}', [BasisController::class, 'fault']);

//thống kê theo đại lý phân phối
//Lượng nhập từ cơ sở sản xuất
Route::get('admin/agent/import/{id}', [AgentController::class, 'import']);
//lượng bán ra
Route::get('admin/agent/export/{id}', [AgentController::class, 'export']);
//lượng lỗi
Route::get('admin/agent/fault/{id}', [AgentController::class, 'fault']);

Route::get('admin/agent/all/{id}', [AgentController::class, 'all']);

//thống kê theo trung tâm bảo hành
//lượng hàng lỗi nhận về
Route::get('admin/center/receive/{id}', [CenterController::class, 'receive']);
//lượng hàng lỗi sửa xong
Route::get('admin/center/backtoagent/{id}', [CenterController::class, 'backtoagent']);
//lượng hàng lỗi không sửa được
Route::get('admin/center/backtobasis/{id}', [CenterController::class, 'backtobasis']);

