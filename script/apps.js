$(function () {
    $(window).on('load', function () {
        $('#preloder').fadeOut();
    })


    $(window).on('scroll', function () {
    //    $('#header').addClass(active);

    var scrollPosition =$(window).scrollTop()

    if (scrollPosition>100){
        $('#header').addClass('active')
    }else{
        $('#header').removeClass('active')
    }
        
    })
})