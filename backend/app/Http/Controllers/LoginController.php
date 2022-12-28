<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SebastianBergmann\Type\TrueType;

class LoginController extends Controller
{
    public function login(Request $request){   
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            /** @var \App\Models\MyUserModel $user **/
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->plainTextToken; 
            $success['name'] =  $user->name;
            $response = [
                "success"=>true,
                "data"=>$success,
                "message"=>"Thanh Cong"
            ];
            return response()->json($response, 200);
        } 
        else{ 
            $response = [
                "success"=>false,
                "message"=>"Ten dang nhap hoac mat khau khong chinh xac"
            ];
            return response()->json($response, 200);
        } 
    }
}
