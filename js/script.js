/**
 * Created by Andrew on 13/10/2016.
 */
/*var newImage = function () {
    document.getElementById("indexImage").src = "img/skulls.jpg";
}
var oldImage = function () {
    document.getElementById("indexImage").src = "img/mountains.jpg";
}*/
$(document).ready(function() {
    $('#hello').click(function() {
        $(this).effect("bounce", {times:10}, 3000);
    });
});