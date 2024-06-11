<?php

namespace app\controller;

use app\BaseController;
use app\middleware\CheckLogin;
use think\facade\Session;
use think\facade\View;
use think\middleware\SessionInit;

class Home extends BaseController
{

    protected $middleware = ['checkLogin'];

    function index()
    {
        echo         Session::get('user')['account'];
        return View::fetch();
    }
}
