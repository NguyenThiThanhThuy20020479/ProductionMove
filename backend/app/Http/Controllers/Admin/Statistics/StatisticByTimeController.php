<?php

namespace App\Http\Controllers\Admin\Statistics;

use App\Http\Controllers\Controller;
use App\Models\Exportdetail;
use Illuminate\Http\Request;
use App\Models\Producedetail;
use Illuminate\Support\Facades\DB;
use App\Models\Insuarancedetail;
class StatisticByTimeController extends Controller
{
    //thống kê theo trạng thái và theo tháng, quí, năm
    public function times($status, $time){
        if($time == "year"){
            if($status == 'produce'){
                $num = Producedetail::join('products', 'products.id', '=', 'producedetail.product_code')
                ->select(DB::raw('sum(amount) as amount'))
                ->selectRaw('year(import_date) as year')
                ->groupByRaw('year(import_date)')
                ->get();
            return $num;
            } else if($status == "fault"){
                $num = Insuarancedetail::join('products', 'products.id', '=', 'insuarancedetail.product_code')
                ->select(DB::raw('count(product_name) as amount'))
                ->selectRaw('year(request_date) as year')
                ->groupByRaw('year(request_date)')
                ->get();
                return $num;
            } else if($status == "sold"){
                $num = Exportdetail::join('products', 'products.id', '=', 'exportdetail.product_code')
                ->select(DB::raw('count(product_name) as amount'))
                ->selectRaw('year(export_date) as year')
                ->groupByRaw('year(export_date)')
                ->get();
                return $num;
            }
        } else if($time == "month") {
            if($status == 'produce'){
                $num = Producedetail::join('products', 'products.id', '=', 'producedetail.product_code')
                ->select(DB::raw('sum(amount) as amount'))
                ->selectRaw('month(import_date) as month')
                ->groupByRaw('month(import_date)')
                ->get();
            return $num;
            } else if($status == "fault"){
                $num = Insuarancedetail::join('products', 'products.id', '=', 'insuarancedetail.product_code')
                ->select(DB::raw('count(product_name) as amount'))
                ->selectRaw('month(request_date) as month')
                ->groupByRaw('month(request_date)')
                ->get();
                return $num;
            } else if($status == "sold"){
                $num = Exportdetail::join('products', 'products.id', '=', 'exportdetail.product_code')
                ->select(DB::raw('count(product_name) as amount'))
                ->selectRaw('month(export_date) as month')
                ->groupByRaw('month(export_date)')
                ->get();
                return $num;
            }
        }
    }
}
