<?php

namespace App\Http\Controllers\ProductionBasis;

use App\Http\Controllers\Controller;
use App\Models\Importdetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RequestController extends Controller
{
    public function allrequest($id){
        $request = Importdetail::where('basis_code', $id)
        ->join('products', 'importdetail.product_code', '=','products.id')
        ->join('agents', 'importdetail.agent_code', '=', 'agents.id')
        ->select('importdetail.id','product_name', 'amount', 'name as agent_name','importdetail.request_at', 'importdetail.updated_at','importdetail.status_code as status')
    
        ->get();
        return response()->json($request);
    }
    //xử lý yêu cầu nhập hàng
    public function request($id, $idrequest){
        $request = Importdetail::find($idrequest);
        $request->status_code = 1;
        $request->updated_at = now();
        $request->save();
    }
}
