<?php

declare(strict_types=1);

namespace app\middleware;

use think\facade\Session;
use think\middleware\SessionInit;

class CheckLogin
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {        

        if (Session::has('user')) {
            return $next($request);
        }

     

        return redirect('/account/login');     
 
       
    }
}
