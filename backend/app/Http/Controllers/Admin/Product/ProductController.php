<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;

class ProductController extends Controller
{
    public function products(){
        $product = Product::all();
        return $product;
    }
}
