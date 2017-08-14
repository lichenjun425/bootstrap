// 头部点击事件

$('ul.navbar-right').on("click","li",function () {
    $('li').each(function (e,i) {
         i.style.backgroundColor="";
         i.style.borderBottom='';
         // i.style.color='#fff';
    });
    $(this).css({
        "background":"#213044",
        "border-bottom":"2px solid #35A338"
    });

});
//全屏插件
$(function(){
    $('#fp').fullpage({
        navigation:true,
        verticalCentered:true
    });
});

//轮播插件

$('.carousel').carousel({
    interval: 3000
});