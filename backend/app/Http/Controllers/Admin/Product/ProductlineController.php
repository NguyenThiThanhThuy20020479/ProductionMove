<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Productline;
use Illuminate\Http\Request;
use Illuminate\Support\Js;
use Illuminate\Support\Facades\DB;

class ProductlineController extends Controller
{
    public function allproductline(){
        $productline = Productline::all();
        return response()->json($productline);
    }
    public function product($id){
        $products = DB::table('products')
                ->where('productline', '=', $id)
                ->get();
        return response()->json($products);
    }
}
