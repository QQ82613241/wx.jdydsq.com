<?php

namespace app\controller;

use app\BaseController;
use think\facade\View;

class Content extends BaseController
{
    function index() {

        View::assign([
            'title'=>'51寻狗网 - 寻狗启示',
            'content'=>'测试内容'
        ]);
        return View::fetch();
    }
}
