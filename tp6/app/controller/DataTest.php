<?php

namespace app\controller;

use app\BaseController;
use think\facade\Db;
use app\model\aa_admin;

final class DataTest extends BaseController
{
    function index()
    {
        // $userList =  Db::table('aa_admin')->select();

        // $userList =  Db::connect('demo')->table('aa_admin')->select();
        // $lastSql = Db::getLastSql();
        // $userList = aa_admin::select()->where('id', 1)->first();

        $userList =  Db::table('aa_admin')->where('id', 1)->find();
        // $lastSql = Db::getLastSql();
        // return $lastSql;

        return json($userList);
    }


    function lastSql()
    {
        $lastSql = Db::getLastSql();

        return $lastSql;
    }
}
