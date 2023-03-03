<?php

namespace App\Http\Controllers\Agent;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Importdetail;
use Illuminate\Support\Facades\DB;
use App\Models\Insuarancedetail;
class AgentImportController extends Controller
{
    public function import_from_basis($id){
        $pro = Importdetail::where('agent_code', $id)
        ->join('products', 'importdetail.product_code', '=','products.id')
        ->join('productionbasis', 'productionbasis.id', '=', 'importdetail.basis_code')
        ->select('product_name','amount', 'name','request_at')
        ->get();
        return response()->json($pro);

    }
    public function fake(){
        $product = Insuarancedetail::join('products', 'products.id', '=', 'insuarancedetail.product_code')
        ->where('status', 1)
        ->select('*')->get();
        return $product;
    }
    public function fake1(){
        $product = Insuarancedetail::join('products', 'products.id', '=', 'insuarancedetail.product_code')
        ->where('basis_code', 2)
        ->select('*')->get();
        return $product;
    }
}
