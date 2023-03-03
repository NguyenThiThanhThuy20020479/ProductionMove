<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Statistics\CenterController;
use App\Http\Controllers\Admin\Statistics\AgentController;
use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\Product\ProductController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\Admin\Product\ProductlineController;
use App\Http\Controllers\Admin\Statistics\ProductStatusController;
use App\Http\Controllers\Admin\Statistics\BasisController;
use App\Http\Controllers\Admin\Statistics\StatisticByTimeController;
use App\Http\Controllers\Agent\AgentImportController;
use App\Http\Controllers\ProductionBasis\ImportController;
use App\Http\Controllers\ProductionBasis\ReturnController;
use App\Http\Controllers\ProductionBasis\StatisticController;
use App\Http\Controllers\ProductionBasis\RequestController;

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
/*----- ----------------API-----------------------------------*/
Route::post('admin/list/agents/register/{id}', [AccountController::class, 'registeragent']);
Route::post('login', [LoginController::class, 'login']);
Route::get('products',[ProductController::class, 'products']);
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

/*----thống kê theo cơ sở sản xuất------*/
//sản phẩm đã sản xuất
Route::get('admin/basis/production/{id}', [BasisController::class, 'production']);
//sản phẩm cấp cho đại lý
Route::get('admin/basis/export/{id}',[BasisController::class, 'export']);
//sản phẩm lỗi trả về
Route::get('admin/basis/fault/{id}', [BasisController::class, 'fault']);

/*------thống kê theo đại lý phân phối---------*/
//Lượng nhập từ cơ sở sản xuất
Route::get('admin/agent/import/{id}', [AgentController::class, 'import']);
//lượng bán ra
Route::get('admin/agent/export/{id}', [AgentController::class, 'export']);
//lượng lỗi
Route::get('admin/agent/fault/{id}', [AgentController::class, 'fault']);
Route::get('admin/agent/fault2/{id}', [AgentController::class, 'fault2']);
Route::get('admin/agent/all/{id}', [AgentController::class, 'all']);

/*------thống kê theo trung tâm bảo hành--------*/
//lượng hàng lỗi nhận về
Route::get('admin/center/receive/{id}', [CenterController::class, 'receive']);
//lượng hàng lỗi sửa xong
Route::get('admin/center/backtoagent/{id}', [CenterController::class, 'backtoagent']);
//lượng hàng lỗi không sửa được
Route::get('admin/center/backtobasis/{id}', [CenterController::class, 'backtobasis']);

/*-----------thống kê theo thời gian----------------*/
Route::get('admin/statistictime/{status}/{time}', [StatisticByTimeController::class, 'times']);


//nhập lô hàng mới sản xuất vào kho
Route::post('basis/{id}/import', [ImportController::class, 'import']);
Route::get('basis/{id}/import/all', [ImportController::class, 'detail']);
//xử lý yêu cầu nhập từ đại lý
Route::get('basis/{id}/request/all', [RequestController::class, 'allrequest']);
Route::post('basis/{id}/request/{idrequest}', [RequestController::class, 'request']);

//các sản phẩm lỗi nhận về từ trung tâm bảo hành
Route::get('basis/{id}/return', [ReturnController::class, 'return1']);
//tỉ lệ sản phẩm lỗi theo trạng thái: dòng sản phẩm, cơ sở sản xuất, đại lý phân phổi
Route::get('basis/{id}/return/{status}', [ReturnController::class, 'return2']);

//báo cáo sản phẩm theo trạng thái: nhận về, xuất ra, sản xuất
Route::get('basis/{id}/statistic/{status}', [StatisticController::class, 'status']);
//thống kê lượng sản phẩm xuất ra theo: năm
Route::get('basis/{id}/statistictime/year', [StatisticController::class, 'statistic_by_year' ]);
//thống kê lượng sản phẩm xuất ra theo: tháng
Route::get('basis/{id}/statistictime/month', [StatisticController::class, 'statistic_by_month' ]);
//tạo yêu cầu nhập hàng từ cơ sở sản xuất
Route::get('agent/{id}/import1', [AgentImportController::class, 'import_from_basis']);
//nhận hàng từ khách hàng
Route::get('agent/{id}/import2', [AgentImportController::class, 'import_from_customer']);
Route::get('agent/fake', [AgentImportController::class, 'fake']);
Route::get('agent/fake1', [AgentImportController::class, 'fake1']);




