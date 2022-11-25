<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(){
        return view('login.form');
     }
     public function submit(Request $request){   
         if(Auth::attempt(['email'=>$request->input('email'), 
         'password'=>$request->input('password'),
         'role'=>'Ban điều hành'], $request->input('remember'))){
             echo "true";
             return redirect()->route('admin');
         }
         return redirect()->back();
     }
}