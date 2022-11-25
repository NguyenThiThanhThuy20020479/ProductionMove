<?php

namespace App\Http\Controllers\Admin\Home;
use App\Models\User;
use Illuminate\Support\Facades\Crypt;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AccountController extends Controller
{
    public function index()
    {
        $name = Auth::user()->name;
        return view('admin_home.list', ['title'=>'List Account', 'row1'=>'admin']);
    }
    public function index2()
    {
        $name = Auth::user()->name;
        return view('admin_home.add', ['title'=>'Add Account']);
    }
    public static function menu(){
        $html = '';
        $user = User::all();
        foreach($user as $user){
            $html.= '
            <tr>
                <td>' . $user->id . '</td>
                <td>' .  $user->name . '</td>
                <td>' . $user->email . '</td>
                <td>' . $user->role . '</td>
            </tr>
        ';
        }
        return $html;
    }
   
    public function submit(Request $request){
        $name = $request['name'];
        $email = $request['email'];
        $password = $request['password'];
        $password = Crypt::encryptString($password);
        echo $password;
        $role = $request['role'];
        echo $name." ".$email." ".$password." ".$role;
        User::insert(
            array(
                   'name'   =>   $name,
                   'email'  =>   $email,
                   'password'=>    $password,
                   'role'   => $role
            )
       );
      return redirect()->back();
    }
}
