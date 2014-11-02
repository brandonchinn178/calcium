// current page
var PAGE = 1;
var slideAnimations = [];

$(document).ready(function() {
    var swiper = $(".swiper-container").swiper({
        mode:"vertical",
        mousewheelControl:true,
        onSlideNext: function() {
            PAGE++;
            if (slideAnimations[PAGE]) {
                slideAnimations[PAGE]();
            }
        },
        onSlidePrev: function() {
            PAGE--;
            if (slideAnimations[PAGE]) {
                slideAnimations[PAGE]();
            }
        }
    });

    // toggle first slide's animation
    slideAnimations[1]();

    // set-up items here
    $("#start-button").click(swiper.swipeNext);
});

slideAnimations[1] = function() {
    $("#milk-bottle")
        .hide()
        .delay(400)
        .show("drop", {
            direction: "up",
            easing: "easeInQuad"
        })
        .effect("shake", {
            direction: "down",
            times: 2,
            duration: 700
        });
};
