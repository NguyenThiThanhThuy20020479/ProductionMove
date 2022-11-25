<?php

namespace App\Http\Controllers\Admin\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return view('admin_home.productline', ['title'=>'Danh mục dòng sản phẩm']);
    }
    public static function showdetail(){

    }
}
