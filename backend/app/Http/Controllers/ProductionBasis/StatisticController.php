<?php

namespace App\Http\Controllers\ProductionBasis;

use App\Http\Controllers\Controller;
use App\Models\Producedetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Importdetail;
use App\Models\Insuarancedetail;


class StatisticController extends Controller

{
    //lượng hàng theo trạng thái:nhận về, xuất ra, sản xuất
    public function status($id, $status){
        if($status == "return"){
            $product = Insuarancedetail::where('basis_code', $id)
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 2)
            ->get();
            return response()->json($product);
        } else if($status == "export"){
            $product = Importdetail::where('basis_code', $id)
            ->join('products', 'importdetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($product);

        } else if($status == "produce"){
            $product = Producedetail::where('production_address', $id)
            ->join('products', 'producedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($product);
        }
    }
    //lượng hàng xuất theo năm
    public function statistic_by_year($id){
        $num = Producedetail::where('production_address', $id)
        ->join('productionbasis', 'productionbasis.id', '=', 'producedetail.production_address')
        ->join('products', 'products.id', '=', 'producedetail.product_code')
        ->select(DB::raw('sum(amount) as amount'))
        ->selectRaw('year(import_date) as year')
        ->groupByRaw('year(import_date)')
        ->get();
        return $num;
    }
    //lượng hàng xuất theo tháng
    public function statistic_by_month($id){
        $num = Producedetail::where('production_address', $id)
            ->join('productionbasis', 'productionbasis.id', '=', 'producedetail.production_address')
            ->join('products', 'products.id', '=', 'producedetail.product_code')
            ->select(DB::raw('sum(amount) as amount'))
            ->selectRaw('month(import_date) as month')
            ->groupByRaw('month(import_date)')
            ->get();
            return $num;
    }
}
