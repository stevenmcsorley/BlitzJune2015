
$( document ).ready(function() {
    $('.carousel, .outsideCaptions').carousel({
        interval: 3000
    })
    $('#outsideCaptions').carousel({
            interval: 3000
        })
    });



$( document ).ready(function() {
$("#boxOne").inViewport(function(px){
    if(px) $(this).addClass("triggerBoxOne") ;
});
$("#boxTwo").inViewport(function(px){
    if(px) $(this).addClass("triggerBoxTwo") ;
});
$("#boxThree").inViewport(function(px){
    if(px) $(this).addClass("triggerBoxThree") ;
});
$("#boxFour").inViewport(function(px){
    if(px) $(this).addClass("triggerBoxFour") ;
});

$(".featureBlockOne").inViewport(function(px){
    if(px) $(this).addClass("triggerBoxFeatOne") ;
});

$(".featureBlockTwo").inViewport(function(px){
    if(px) $(this).addClass("triggerBoxFeatTwo") ;
});

$(".featureBlockThree").inViewport(function(px){
    if(px) $(this).addClass("triggerBoxFeatThree") ;
});
});



$( document ).ready(function() {
  $(".nav li a").hover(function () {
    $(this).children(".nav li a span").toggleClass("onHover");
 });
});
