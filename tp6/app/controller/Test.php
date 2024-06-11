<?php

namespace app\controller;

use app\BaseController;
use think\facade\View;

class TEST extends BaseController
{
    function ceshi    ($name="yangqingfu",$age=30) {
        return '你好，'.$name.'，您今年'.$age.'岁。';
    }

    function hunbianceshi    ($name="yangqingfu",$age=30) {


        require 'hunbian/hunbian.php';
    }


    function show(){
        // View::assign('name','Mr Yang');
        View::assign([
            'name'=>'yangxiansheng',
            'age'=>30
        ]);
        return View::fetch();
    }
}
