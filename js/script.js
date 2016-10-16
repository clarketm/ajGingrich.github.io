/**
 * Created by Andrew on 13/10/2016.
 */

/*	Slideshow	*/
var $clips = $(".clip"),
    clipIndex = 0,
    numClips = $clips.length,
    sliderSpeed = 5000,
    sliderEffect = 1000,

    fadeOutCurrent = function() {
        $($clips[clipIndex++ % numClips]).fadeOut(sliderEffect, function() {
            $(this).removeClass("currentClip");
        });
    },

    fadeInNext = function () {
        $($clips[clipIndex % numClips]).fadeIn(sliderEffect, function () {
            $(this).addClass("currentClip");
        });
    },

    initSlider = function () {
        setInterval(function() {
            fadeOutCurrent();
            fadeInNext();
        }, sliderSpeed);
    };


/* DOM ready*/
$(function(){
    $('#hello').click(function() {
        $(this).effect("bounce", {distance: 40, times:10}, 3000);
    });
    initSlider()
});