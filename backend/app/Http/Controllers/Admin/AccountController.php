<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Agent;
use App\Models\Productionbasi;
use App\Models\Servicecenter;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
class AccountController extends Controller
{
    //tất cả các tài khoản đã cấp
    public function allaccount(){   
        $user = User::all();
        return response()->json($user);
    }
    //tất cả các đại lí
    public function allagents(){
        $agent = Agent::all();
        return response()->json($agent);
    }
    //tất cả các cơ sở sản xuất
    public function allbasis(){
        $basis = Productionbasi::all();
        return response()->json($basis);
    }
    //tất cả các trung tâm bảo hành
    public function allcenters(){
        $center = Servicecenter::all();
        return $center;
    }
    //cấp tài khoản cho đại lý, cơ sở sản xuất và trung tâm bảo hành
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
    //thêm tài khoản cho cơ sở sản xuất
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
    //thêm tài khoản cho trung tâm bảo hành
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
