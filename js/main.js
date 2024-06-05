/**
 * Created by llairen on 2017/3/9.
 * author    : Mike
 * e-mail    : zhanmengle@163.com
 */
;$(function () {

    var $main_ad            = $('#main_ad'),
        $item               = $main_ad.find('.item');

    function resizeScrollImage() {

        var screenWidth = $(window).width();
        var bool = screenWidth > 768;

        $item.each(function (i, v) {

            var imgUrl = bool ? $(v).data('img-lg') : $(v).data('img-sm');

            $(v).css('backgroundImage','url("'+imgUrl+'")');

            if (bool) {
                $(v).empty();
            } else {
                $(v).html('<img src="' + imgUrl + '" alt=""/>');
            }
        })
    }

    $(window).on('resize', resizeScrollImage).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();


    /* 小屏tab 滑动功能*/
    var $product            = $('#product'),
        $nav_tabs           = $('.nav-tabs'),
        $presentation       = $nav_tabs.find('li');

    var widthScreen = $(window).width();

    var width = 0;
    $presentation.each(function (i, v) {
        width += $(v).width();
    });

    if (width > widthScreen) {
        $nav_tabs.css({
            'width' : width
        }).parent().css('overflow-x' , 'scroll');
    }


    /*模拟用户排队 */
    var $buy_1 = $('.buy_1');
    var $buy_2 = $('.buy_2');

    setInterval(function () {
        var num = parseInt($buy_1.text());
        num++;
        $buy_1.html(num);
    }, 1000*10);

    setInterval(function () {
        var num = parseInt($buy_2.text());
        num++;
        $buy_2.html(num);
    }, 5000)

    /*------百叶窗 滑动效果----*/
    var $news            = $('#news'),
        $news_tab_pane   = $news.find('.tab-pane'),
        $news_tab_div    = $news_tab_pane.find('div');

    var $nav_pills_li    = $('.nav-pills').find('li');

    var $news_tittle     = $news.find('.news-tittle');


    var timer = null;

    $nav_pills_li.on('click', function () {
       var text = $(this).find('a').data('tittle');
        $news_tittle.text(text);
    });
    
    
    function toMoveShow(num) {

        var obj = $news_tab_pane.eq(num);
        var now =0;
        var time1 = null;
        var oBtn = true;

        var $div = obj.find('div');
        timer = setInterval(function () {
            toChange();
            console.log(111);
        },2000);
        
        function toChange() {
            time1 = setInterval(function () {
                if (now == $div.length) {
                    clearInterval(time1);
                    now = 0;
                    oBtn =! oBtn;
                } else if (oBtn) {
                    $div.eq(now).animate({
                        top: -30
                    });
                    now++;
                } else {
                    $div.eq(now).animate({
                        top: 0
                    });
                    now++;
                }
            }, 100)
        }

        
    }


    toMoveShow(0);

    
    // function toMoveShow(obj) {
    //     var now = 0;
    //     var oBtn = true;
    //     var timer = null;
    //     var $div = obj.find('div');
    //
    //     setInterval(function () {
    //         toChange();
    //     }, 4000);
    //
    //
    //     function toChange() {
    //         timer = setInterval(function () {
    //             if (now == $div.length) {
    //                 clearInterval(timer);
    //                 now = 0;
    //                 oBtn=!oBtn;
    //             } else if (oBtn) {
    //                 $div.eq(now).animate({
    //                     top: -30
    //                 });
    //                 now++;
    //             } else {
    //
    //                 $div.eq(now).animate({
    //                     top: 0
    //                 });
    //                 now++;
    //             }
    //         }, 100)
    //
    //     }
    // }

});