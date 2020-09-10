$(function(){
    $("#myCarousel").hover(function() {
        $("#myCarousel>a span").css('display', 'block');
    }, function() {
       $("#myCarousel>a span").css('display', 'none');
    });
})