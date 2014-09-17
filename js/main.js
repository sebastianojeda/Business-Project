
//All of this code goes to my hamburger.//
(function(){
    var $mainWrapper = $("#main-wrapper");

    $('.menu-icon').click(function(){
        $(this).toggleClass('active');
        $mainWrapper.toggleClass('active');
    });


})();

//Smooth Scrolling

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 12000);
    return false;
});