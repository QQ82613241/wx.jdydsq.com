<?php

namespace app\controller;

use app\BaseController;
use think\facade\Db;
use think\facade\Session;
use think\facade\View;
use think\Request;


final class Account extends BaseController
{
    function login(Request $request)
    {


        if (request()->isPost()) {


            $account = $request->param('account');
            $password = $request->param('PASSWORD');

            $user = Db::table('aa_admin')->where('account', $account)->where('PASSWORD', $password)->find();
            if ($user != null) {

                Session::set('user', $user);

                // return Session::get('user');  

                return redirect('/home');
            } else {
                return '没有查询到';
            }
        }


        return  View::fetch();
    }


    function logout()
    {
        Session::delete('user');
        return redirect('/account/login');
    }

    function register()
    {


        return  View::fetch();
        // return '222222';
    }

    function remove()
    {
        return '222222';
    }

    function removeList()
    {
        return '222222';
    }

    function edit()
    {
        return '222222';
    }

    function list()
    {
        return '222222';
    }

    function add()
    {
        return '222222';
    }
}
