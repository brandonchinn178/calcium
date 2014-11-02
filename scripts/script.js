var page = 0;
var slideAnimations = [];
var counter = {};
var CALCIUM_AMOUNTS = {
    toast: 50,
    milk: 300,
    fruit: 150,
    cereal: 300,
    cheese: 200,
    almond: 100,
    sardine: 400,
    tofu: 400,
    broccoli: 35,
    spinach: 100,
    lettuce: 75
};

$(document).ready(function() {
    var swiper = $(".swiper-container").swiper({
        mode: "vertical",
        mousewheelControl: true,
        speed: 600,
        onSlideNext: function() {
            if (page == swiper.slides.length - 1) {
                return;
            } else if (page == 3) {
                makeFinish();
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

    // set-up actions here
    $("#start-button").click(swiper.swipeNext);
    $(".next img").click(function() {
        if (page == 3) {
            makeFinish();
        }
        swiper.swipeNext();
    });
    $(".food-option.none").click(function() {
        var optionCounters = $(this).parent().find(".counter");
        for (var i = 0; i < optionCounters.length; i++) {
            var optionCounter = $(optionCounters[i]);
            counter[optionCounter.attr("id")] = 0;
            optionCounter.remove();
        }
        swiper.swipeNext();
    });
    $(".food-option").not(".none").click(function() {
        var optionCount = $(this).find("div");
        var id = $(this).attr("id");
        if (optionCount.length == 0) {
            $("<div class='counter'>1</div>").prependTo(this);
            counter[id] = 1;
        } else if (counter[id] == 3) {
            optionCount.remove();
            counter[id] = 0;
        } else {
            optionCount.text(++counter[id]);
        }
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

    function makeFinish() {
        var total = 0;
        var foods = Object.keys(counter);
        for (var i = 0; i < foods.length; i++) {
            total += CALCIUM_AMOUNTS[foods] * counter[foods];
        }
        if (total >= 1300) {
            var slide = swiper.createSlide("<div class='text'><img src='images/fulfilled.png'></div>\
                <div class='skeleton'><img src='images/100p.png'></div>\
                <div class='next'><a href='rule.html'><img src='images/fullfilled-learn-more.png'></a></div>",
                "swiper-slide fulfilled");
            slide.append();
        } else {
            swiper.swipeTo(5);
            page = 5;
        }
    };

    // toggle first slide's animation
    slideAnimations[0]();
});