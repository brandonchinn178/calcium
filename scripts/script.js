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
    $(".next img").click(swiper.swipeNext);
    $(".food-option.none").click(function() {
        var optionCounters = $(this).parent().find(".counter");
        for (var i = 0; i < optionCounters.length; i++) {
            var optionCounter = $(optionCounters[i]);
            counter -= parseInt(optionCounter.text());
            optionCounter.remove();
        }
        swiper.swipeNext();
    });
    $(".food-option").not(".none").click(function() {
        var optionCount = $(this).find("div");
        if (optionCount.length == 0) {
            $("<div class='counter'>1</div>").prependTo(this);
            counter++;
        } else if (optionCount.text() === "3") {
            $(optionCount).remove();
            counter -= 3;
        } else {
            var next = parseInt(optionCount.text()) + 1;
            optionCount.text(next);
            counter++;
        }
    });
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