// 头部点击事件

$('ul.navbar-right').on("click", "li", function () {
    $('li').each(function (e, i) {
        i.style.backgroundColor = "";
        i.style.borderBottom = '';
        // i.style.color='#fff';
    });
    $(this).css({
        "background": "#213044",
        "border-bottom": "2px solid #35A338"
    });

});
//全屏插件
$(function () {
    $('#fp').fullpage({
        navigation: true,
        verticalCentered: true,
        // scrollOverflow: true,
        css3: false,
        navigationColor: '#3279b1',
        paddingTop: 50,
        navigationTooltips: ['首页', '特色', '功能', '截图'],

        afterLoad: function (link, index) {

            switch (index) {
                case 1:

                    console.log(1);
                    $('.one .right').addClass('animated bounceInDown').css({
                        'animation-delay': '0.2s'
                    });
                    $('.one h2').addClass('animated bounceInLeft').css({
                        'animation-delay': '0.6s'
                    });
                    $('.one ul,button').addClass('animated  bounceInDown').css({
                        'animation-delay': '1s'
                    });

                    break;


                case  2:
                    console.log(2);
                    $('.two h2').addClass('animated  bounceInLeft').css({
                        'animation-delay': '0.2s'
                    });
                    $('.two ul').addClass('animated fadeIn').css({
                        'animation-delay': '0.8s'
                    });

                    break;

                case 3:
                    console.log(3);

                    $('.three h2').addClass('animated rotateIn');
                    $('.three .row').addClass('animated bounceInDown').css({
                        'animation-delay': '0.5s'
                    });
                    break;

            }


        }


    });
});

//轮播插件

$('.carousel').carousel({
    interval: 3000
});

//wow插件
// var wow = new WOW().init();