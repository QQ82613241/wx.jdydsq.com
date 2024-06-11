// 滚动显示顶部导航
$('.layui-icon-down').off('click').on('click', function(){
    $("#rae").css('height','auto');
    $(this).css('display','none');
    $('.layui-icon-up').css('display','block');
})
$('.layui-icon-up').off('click').on('click', function(){
    $("#rae").css('height','9.8rem');
    $(this).css('display','none');
    $('.layui-icon-down').css('display','block');
})
$(window).scroll(function () {
    var scrollTop =$(this).scrollTop();//滚动高度
    if(scrollTop > 100){
        $(".goods-header").addClass("show");
    }
    if(scrollTop < 100){
        $(".goods-header").removeClass("show")
    }
});
//内容信息导航吸顶
$(document).ready(function(){ 
var navHeight= $(".goods-header").offset().top; 
var navFix=$(".goods-header"); 
$(window).scroll(function(){ 
    if($(this).scrollTop()>navHeight){ 
        navFix.addClass("top-fixed"); 
    } 
    else{ 
        navFix.removeClass("top-fixed"); 
    } 
    }) 
})
// 放心购弹窗
var modalA = document.getElementById('modalPurchase');
var btnA = document.getElementById("myPurchase");
var spanA = document.getElementById("purchase-close");
if(btnA){
	btnA.onclick = function() {
    $("body").addClass("hide");
		modalA.style.display = "block";
	}
}
if(spanA){
	spanA.onclick = function() {
    $("body").removeClass("hide");
		modalA.style.display = "none";
	}
}
// 规格弹窗
var modalB = document.getElementById('modalSize');
var btnB = document.getElementById("mySize");
var spanB = document.getElementById("spec-close");
if(btnB){
	btnB.onclick = function() {
		$(".spe_"+product_id).show();
		$(".spe_info_"+product_id).addClass('spec-selected');
    $("body").addClass("hide");
		modalB.style.display = "block";
	}
}
spanB.onclick = function() {
  $("body").removeClass("hide");
  modalB.style.display = "none";
}
// 参数弹窗
var modalC = document.getElementById('modalArguments');
var btnC = document.getElementById("myArguments");
var spanC = document.getElementById("arguments-close");
if(btnC){
	btnC.onclick = function() {
    $("body").addClass("hide");
		modalC.style.display = "block";
	}
}
if(spanC){
	spanC.onclick = function() {
    $("body").removeClass("hide");
		modalC.style.display = "none";
	}
}
window.onclick = function(event) {
    if (event.target == modalA) {
      $("body").removeClass("hide");
      modalA.style.display = "none";
    }
    if (event.target == modalB) {
      $("body").removeClass("hide");
      modalB.style.display = "none";
    }
    if (event.target == modalC) {
      $("body").removeClass("hide");
      modalC.style.display = "none";
    }
}
//展开折叠
$(function(){
    $(".explain-title").click(function(){
        var menu_c = $(this).siblings(".explain-con");
        if(menu_c.is(":hidden")){
            menu_c.slideDown().parent("li").siblings().find(".explain-con").slideUp();
            $(this).find("img").addClass("icons-down");
        }else{
            menu_c.slideUp();
            $(this).find("img").addClass("icons-down").removeClass("icons-down");                 
        }
    });
});
//点击规格小图查看大图
function showImg(result,bigImgBox,thiselement){
    var winW = $(window).width();
    var winH = $(window).height();
    var src = thiselement.attr('src');
	//document.getElementById("bigimg");
    //创建一个新图片获取真实图片宽高
     document.getElementById("bigimg").onload = function(){
       var imgW = this.width;
       var imgH = this.height;
       var scale= imgW/imgH;
       if( imgW > winW ){
          $("#bigimg").css({width:'100%',height:'auto'});
          imgH = winW/scale;
          var h=(winH-imgH)/2;
          $(bigImgBox).css({"left":0,"top":h});
       }else{
          $("#bigimg").css({width:imgW+'px',height:imgH+'px'});
          var w=(winW-imgW)/2;
          var h=(winH-imgH)/2;
          $(bigImgBox).css({"left":w,"top":h});
       }   
       $(result).fadeIn("fast");
       $(result).click(function(){
           $(this).fadeOut("fast");
       })                            
    }
	 $("#bigimg").attr("src",src);
}
$('.imgBox').click(function(){
    var thiselement = $(this);
    showImg(".result",".bigImgBox",thiselement);
}); 
