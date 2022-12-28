<?php

namespace App\Http\Controllers\ProductionBasis;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Productionbasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImportController extends Controller
{
    public function import($id, Request $request){
        $product = $request['product_name'];
        $amount = $request['amount'];
        $date = $request['date'];
        DB::table('producedetail')->insert([
                'product_code'=> $product,
                'production_address'=>$id,
                'amount'=>$amount,
                'import_date'=>$date
        ]);
    }
}
