<?php

namespace App\Http\Controllers\Admin\Statistics;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Insuarancedetail;
use Illuminate\Support\Facades\DB;
class CenterController extends Controller
{
    //sản phẩm nhận về
    public function receive($id){
        if($id == 'all'){
            $product = Insuarancedetail::join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 0)
            ->get();
            return response()->json($product);
        } else{
            $product = Insuarancedetail::where('insuarancedetail.service_center_code', $id)
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 0)
            ->get();
            return response()->json($product);
        }
    }
    //sản phẩm bảo hành xong
    public function backtoagent($id){
        if($id == 'all'){
            $product = Insuarancedetail::join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 0)
            ->get();
            return response()->json($product);
        } else{
            $product = Insuarancedetail::where('insuarancedetail.service_center_code', $id)
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 1)
            ->get();
            return response()->json($product);
        }

    }
    //sản phẩm không bảo hành được, trả về
    public function backtobasis($id){
        if($id == 'all'){
            $product = Insuarancedetail::join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 0)
            ->get();
            return response()->json($product);
        } else{
            $product = Insuarancedetail::where('insuarancedetail.service_center_code', $id)
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 2)
            ->get();
            return response()->json($product);
        }
    }
}
