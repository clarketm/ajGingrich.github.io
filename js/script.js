/**
 * Created by Andrew on 13/10/2016.
 */

$(document).ready(function() {
    $('#hello').click(function() {
        $(this).effect("bounce", {distance: 40, times:10}, 3000);
    });
});

/*	Slideshow	*/

var numClips = $("#sliderMain .clip").length;
var clipCount = 0;
var sliderSpeed = 5000;
var sliderEffect = 1000;

$(document).ready(function(){
    setInterval(function() {
        $("#sliderMain .currentClip").fadeOut(sliderEffect).removeClass("currentClip");
        $("#sliderMain .clip:eq("+clipCount+")").fadeIn(sliderEffect).addClass("currentClip");
        clipCount++;
        if(clipCount == numClips){
            clipCount = 0;
        }
    },
        sliderSpeed);
});









