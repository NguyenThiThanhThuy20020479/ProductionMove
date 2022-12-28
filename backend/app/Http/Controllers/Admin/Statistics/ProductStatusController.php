<?php

namespace App\Http\Controllers\Admin\Statistics;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductStatusController extends Controller
{
    public function statistics($status){
        //lượng hàng đã sản xuất
        if($status == "produce"){
            $products = DB::table('producedetail')
            ->join('products', 'producedetail.product_code', '=', 'products.id')
            ->select('products.product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($products);
        } 

        //lượng hàng đang được bảo hành
        else if($status == "insuarance0"){
            $product = DB::table('insuarancedetail')
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->join('agents', 'insuarancedetail.agent_code', '=', 'agents.id')
            ->join('productionbasis', 'insuarancedetail.basis_code', '=', 'productionbasis.id')
            ->join('servicecenters', 'insuarancedetail.service_center_code', '=', 'servicecenters.id')
            ->select('products.product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('insuarancedetail.status', 0)
            ->get();
            return response()->json($product);
        } 
        //lượng hàng đã được bảo hành xong
        else if($status == "insuarance1"){
             $product = DB::table('insuarancedetail')
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->join('agents', 'insuarancedetail.agent_code', '=', 'agents.id')
            ->join('productionbasis', 'insuarancedetail.basis_code', '=', 'productionbasis.id')
            ->join('servicecenters', 'insuarancedetail.service_center_code', '=', 'servicecenters.id')
            ->select('products.product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('insuarancedetail.status', 1)
            ->get();
            return response()->json($product);
        }
        //lượng hàng không thể bảo hành được
        else if($status == "insuarance1"){
            $product = DB::table('insuarancedetail')
           ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
           ->join('agents', 'insuarancedetail.agent_code', '=', 'agents.id')
           ->join('productionbasis', 'insuarancedetail.basis_code', '=', 'productionbasis.id')
           ->join('servicecenters', 'insuarancedetail.service_center_code', '=', 'servicecenters.id')
           ->select('products.product_name', DB::raw('count(product_name) as amount'))
           ->groupBy('product_name')
           ->where('insuarancedetail.status', 2)
           ->get();
           return response()->json($product);
        }
        //lượng hàng bán ra
        else if($status == "sold"){
            $product = DB::table('exportdetail')
            ->join('products', 'exportdetail.product_code', '=', 'products.id')
            ->select('products.product_name',  DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
           ->where('exportdetail.status', 0)
            ->get();
            return response()->json($product);
        }
        //lượng hàng đổi cho khách
        else if($status == "exchange"){
            $product = DB::table('exportdetail')
            ->join('products', 'exportdetail.product_code', '=', 'products.id')
            ->select('products.product_name',  DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
           ->where('exportdetail.status', 1)
            ->get();
            return response()->json($product);
        }
    }
}
