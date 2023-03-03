<?php

namespace App\Http\Controllers\Admin\Statistics;

use App\Http\Controllers\Controller;
use App\Models\Exportdetail;
use App\Models\Importdetail;
use App\Models\Insuarancedetail;

use Illuminate\Support\Facades\DB;

class AgentController extends Controller
{
    //thống kê sản phẩm theo đại lý phân phối
    public function import($id){
        if($id == 'all'){
            $product = Importdetail::
            join('products', 'importdetail.product_code', '=','products.id')
            ->select('product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($product);
        } else {
            $pro = Importdetail::where('agent_code', $id)
            ->join('products', 'importdetail.product_code', '=','products.id')
            ->select('product_name', DB::raw('sum(amount) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($pro);
        }
    }
    public function export($id){
        if($id == 'all'){
            $product = Exportdetail::join('products', 'exportdetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->get();
            return $product;
        } else {
            $pro = Exportdetail::where('agent_code', $id)
            ->join('products', 'exportdetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->get();
            return $pro;
        }
    }
    public function fault($id){
        if($id == 'all'){
            $product = Insuarancedetail::join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($product);
        } else {
            $pro = Insuarancedetail::where('agent_code', $id)
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('product_name', DB::raw('count(product_name) as amount'))
            ->groupBy('product_name')
            ->get();
            return response()->json($pro);
        }
    }
    public function fault2($id){
        if($id == 'all'){
            $product = Insuarancedetail::join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('*')
            
            ->get();
            return response()->json($product);
        } else {
            $pro = Insuarancedetail::where('agent_code', $id)
            ->join('products', 'insuarancedetail.product_code', '=', 'products.id')
            ->select('*')
        
            ->get();
            return response()->json($pro);
        }
    }
    public function all($id){
        
    }
   
}
