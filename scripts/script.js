$(document).ready(function() {
    var swiper = $(".swiper-container").swiper({
        mode:"vertical",
        mousewheelControl:true
    });


    // code here
    var scale = 1.1;
    $("img").hover(function() {
        var height = $(this).height();
        var width = $(this).width();
        $(this).animate({
            width: width * scale,
            height: height * scale
        });
    }, function() {
        var height = $(this).height();
        var width = $(this).width();
        $(this).animate({
            width: width / scale,
            height: height / scale
        });
    });
});