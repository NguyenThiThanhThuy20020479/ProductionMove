<?php

namespace App\Http\Controllers\Admin\Statistics;

use App\Http\Controllers\Controller;
use App\Models\Importdetail;
use App\Models\Producedetail;
use App\Models\Insuarancedetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BasisController extends Controller
{
    //sản phẩm đã sản xuất theo từng cơ sở hoặc tất cả các cơ sở
    public function production($id){
        if($id == 'all'){
            $product = Producedetail::join('products', 'producedetail.product_code', '=', 'products.id')
            ->join("productlines", 'productlines.id', '=', 'products.productline')
            ->select('product_name', DB::raw('sum(amount) as amount'), 'productline_name')
            ->groupBy('product_name')
            ->get();
            return response()->json($product);
        } else {
            $product = Producedetail::where('production_address', $id)
            ->join('products', 'producedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($product);
        }
    }

    //sản phẩm đã nhập cho đại lí phân phối theo từng hoặc tát cả cơ sở
    public function export($id){
        if($id == 'all'){
            $product = Importdetail::join('products', 'importdetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($product);
        } else{
            $product = Importdetail::where('basis_code', $id)
            ->join('products', 'importdetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($product);
        }
    }

    //sản phẩm lỗi bị trả về của tất cả hoặc từng đại lí
    public function fault($id){
        if($id == 'all'){
            $product = Insuarancedetail::join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 2)
            ->get();
            return response()->json($product);
        } else {
            $product = Insuarancedetail::where('basis_code', $id)
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->where('status', 2)
            ->get();
            return response()->json($product);
        }
    }
}
