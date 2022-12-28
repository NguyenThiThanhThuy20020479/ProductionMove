<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Agent;
use App\Models\Productionbasi;
use App\Models\Servicecenter;
use App\Models\User;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    //tat ca cac tk da cap
    public function allaccount(){   
        $user = User::all();
        return response()->json($user);
    }
    //tat ca cac dai ly
    public function allagents(){
        $agent = Agent::all();
        return response()->json($agent);
    }
    //tat ca cac co so san xuat
    public function allbasis(){
        $basis = Productionbasi::all();
        return response()->json($basis);
    }
    //tat ca cac trung tam bao hanh
    public function allcenters(){
        $center = Servicecenter::all();
        return $center;
    }
    //them tai khoan cho dai ky phan phoi
    public function registeragent(Request $request, $id){
        $iden = Agent::find($id);
        $iden->status = 1;
        $iden->save();
        $validator = Validator::make($request->all(),
            [
            'name' => 'required',
            'email' => 'required',
            'password' =>'required|min:8',
            'c_password' => 'required|same:password'
        ]);

        if($validator->fails()){
            $response = [
                "success"=>false,
                "message"=> $validator->errors()
            ];
            return response()->json($response, 400);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        
       
        $success['token']= $user->createToken('Myapp')->plainTextToken;
        $success['name'] = $user->name;
        $response = [
            "success"=>true,
            "data"=>$success,
            "message"=>"Thanh Cong"
        ];
        return response()->json($response, 400);
    }    

   

           
    
    

    //them tai khoan cho co so san xuat
    public function registerbasis(Request $request, $id){
        $iden = Productionbasi::all();
        foreach($iden as $iden){
            if($id == $iden->id ){
                if($iden->status == 1){
                    return "already exist";
                } else {
                    $iden->status = 1;
                    $iden->save();
                    $name = $iden->name;
                    $email = $request['email'];
                    $password = $request['password'];
                    $role = "Co so san xuat";
                    DB::table('users')->insert([
                        'name'=> $name,
                        'email'=>$email,
                        'password'=>Hash::make($password),
                        'role'=>$role
                    ]);
                    return "have not register yet";
                } 
            } 
        }
    }
    //them tai khoan cho trung tam bao hanh
    public function registercenter(Request $request, $id){
        $iden = Agent::all();
        foreach($iden as $iden){
            if($id == $iden->id ){
                if($iden->status == 1){
                    return "already exist";
                } else {
                    $iden->status = 1;
                    $iden->save();
                    $name = $iden->name;
                    $email = $request['email'];
                    $password = $request['password'];
                    $role = "Trung tam bao hanh";
                    DB::table('users')->insert([
                        'name'=> $name,
                        'email'=>$email,
                        'password'=>Hash::make($password),
                        'role'=>$role
                    ]);
                    return "have not register yet";
                } 
            } 
        }
    }
}
