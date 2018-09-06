/**
 * Created by jmh on 2018/9/5.
 */
/*
*
* 轮播图
*
* */

// dom
var $banner = $(".sn-banner");
var width = $banner.width();

// 自动轮播
var index = 1;
var ulAnimate = function () {
    index++;
    // 动画
    $(".sn-banner ul:first-child").animate({transform: "translate("+ -index*width +"px)"},200, function () {
        // 动画执行后回调
        if(index >= 9) { // 左滑 下一张 index 1 to 9
            index = 1;
        }else if(index <= 0) { // 右滑 上一张 index 8 to 0
            index = 8;
        }
        $(".sn-banner ul:first-child").css({transform:"translate("+ -index*width +"px)"});
        // 点 动画
        $("ul:last-child").children().removeClass("now").eq(index-1).addClass("now");
    });
}
var timer = setInterval(function () {
    ulAnimate();
},5000);
$('.sn-banner ul:first-child').bind("touchmove", function(e) {
    e.preventDefault();
});
// touch
$(".sn-banner ul:first-child").on("swipeLeft", function () {
    ulAnimate();
});
$(".sn-banner ul:first-child").on("swipeRight", function () {
    index--;
    // 动画
    $(".sn-banner ul:first-child").animate({transform: "translate("+ -index*width +"px)"},200, function () {
        // 动画执行后回调
        if(index >= 9) { // 左滑 下一张 index 1 to 9
            index = 1;
        }else if(index <= 0) { // 右滑 上一张 index 8 to 0
            index = 8;
        }
        $(".sn-banner ul:first-child").css({transform:"translate("+ -index*width +"px)"});
        // 点 动画
        $("ul:last-child").children().removeClass("now").eq(index-1).addClass("now");
    });
});
