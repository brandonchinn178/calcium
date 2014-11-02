var page = 0;
var slideAnimations = [];
var counter = 0;

$(document).ready(function() {
    var swiper = $(".swiper-container").swiper({
        mode:"vertical",
        mousewheelControl:true,
        onSlideNext: function() {
            if (page == swiper.slides.length - 1) {
                return;
            }
            page++;
            if (slideAnimations[page]) {
                slideAnimations[page]();
            }
        },
        onSlidePrev: function() {
            page--;
            if (slideAnimations[page]) {
                slideAnimations[page]();
            }
        }
    });

    // toggle first slide's animation
    slideAnimations[0]();

    // set-up actions here
    $("#start-button").click(swiper.swipeNext);
    $(".next").click(swiper.swipeNext);
});

slideAnimations[0] = function() {
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

slideAnimations[1] = function() {
    $(".dairy .food-option").click(function() {
        var counter = $(this).find("p")[0];
        if (counter === undefined) {
            counter = $("<p>1</p>").css({borderRadius:"2em"});
            $(this).append(counter);
        } else if (counter.text() === "3") {
            $(counter).remove();
        }
    });
}