$(document).ready(function() {
    // run function on initial page load
    interactions();
    variables();
 
    // run function on resize of the window
    $(window).resize(function() {
   
    });
 
    // run function on scroll
    $(window).scroll(function() {
 
    });
});
// link to mouse events https://api.jquery.com/category/events/mouse-events/
function interactions() {
    $('.jqClick').click(function(){
        $('.number4').toggleClass('moveITL');
        console.log('clicked');
    });
    $('.jqHover').click(function(){
        $('.number4').toggleClass('moveITR');
        console.log('hovered');
    });
    $('.key').click(function() {
        $('h1').toggleClass('typeMove');
    });
}
 
function variables() {
    var h1H = $('h1').height();
    var wH = $(window).height();
    console.log(h1H);
}