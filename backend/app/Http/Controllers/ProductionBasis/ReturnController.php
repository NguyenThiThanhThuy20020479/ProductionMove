<?php

namespace App\Http\Controllers\ProductionBasis;

use App\Http\Controllers\Controller;
use App\Models\Insuarancedetail;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReturnController extends Controller
{
    
    public function return1($id){
        $product = Insuarancedetail::where('basis_code', $id)
        ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
        ->selectRaw('product_name', DB::raw('count(product_name) as amount'))
        ->groupBy('product_name')
        ->whereIn('status', 2)
        ->get();
        return response()->json($product);
    }
    //thống kê các sản phẩm được trả về
    public function return2($id, $status){
        //theo dong san pham
        if($status == 'productline'){
            $product = Product::
            join('insuarancedetail', 'insuarancedetail.product_code', '=', 'products.id')
            ->join('productlines', 'productlines.id', '=', 'products.productline')
            ->select ('productline_name', DB::raw('count(productline_name) as amount'))
            ->groupBy('productline_name')
            ->where('insuarancedetail.status', 2)
            ->where('insuarancedetail.basis_code', $id)
            ->get();
            return response()->json($product);
        }
        //theo co so san xuat
        else if($status == 'basis'){
                $product = Product::
                join('insuarancedetail', 'insuarancedetail.product_code', '=', 'products.id')
                ->join('productlines', 'productlines.id', '=', 'products.productline')
                ->select ('product_name','productline_name', DB::raw('count(product_name) as amount'))
                ->groupBy('product_name')
                ->where('insuarancedetail.status', 2)
                ->where('insuarancedetail.basis_code', $id)
                ->get();
                return response()->json($product); 
        } 
        //theo dai ly 
        else if($status == 'agent'){
            $product = Product::
            join('insuarancedetail', 'insuarancedetail.product_code', '=', 'products.id')
            ->join('productlines', 'productlines.id', '=', 'products.productline')
            ->join('agents', 'agents.id', '=', 'insuarancedetail.agent_code')
            ->select ('agents.name as agent', DB::raw('count(agents.name) as amount'))
            ->groupBy('agents.name')
            ->where('insuarancedetail.status', 2)
            ->where('insuarancedetail.basis_code', $id)
            ->get();
            return response()->json($product); 
        }
    }
}
