function simpleSlider(){

    var sliderActive = $("#slider .sliderActive");
    var sliderNext = sliderActive.next().length ? sliderActive.next() : $("#slider li:first");
    sliderNext.addClass("sliderActive").fadeIn();
    sliderActive.removeClass("sliderActive").fadeOut();
}
$(function(){
    $("#slider li:first").fadeIn();
    setInterval( "simpleSlider()", 6000 );
});