<?php

namespace App\Http\Controllers\ProductionBasis;

use App\Http\Controllers\Controller;
use App\Models\Producedetail;
use App\Models\Product;
use App\Models\Productionbasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImportController extends Controller
{
    //xử lý yêu cầu nhập hàng
    public function import($id, Request $request){
        $product = $request['product_code'];
        $amount = $request['amount'];
        $date = $request['date'];
        DB::table('producedetail')->insert([
                'product_code'=> $product,
                'production_address'=>$id,
                'amount'=>$amount,
                'import_date'=>$date
        ]);
    }
    public function detail($id){
        $product = Producedetail::where('production_address', $id)
        ->join('products', 'products.id','=','producedetail.product_code')
        ->join('productlines', 'productlines.id', '=', 'products.productline')
        ->select('*')
        ->orderBy('import_date', 'desc')
        ->get();
        return $product;
    }
}
