$(document).ready(function() {

    //menu active
    $('a.menu').click(function() {
        $('a.menu').removeClass("active");
        $(this).addClass("active");
    });
    $(".services-choose-block button").click(function() {
        $(".other-block").hide();
        $(".services-choose-block button").removeClass("active");
        $(this).addClass("active");
    });
    $(".services-choose-block #oservices").click(function() {
        $(".other-block").show();
    });    

    $('.form-items input, .form-items textarea').focus(function() {
        $(this).closest('.form-group').addClass('focused');
    });
    $('.form-items input, .form-items textarea').blur(function() {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).parents('.form-group').removeClass('focused');
        }
    });    

    //menu shrink
    $(window).scroll(function() {
        var wscroll = $(this).scrollTop();
        if (wscroll > 50) {
            $("nav.fixed-top").addClass("shrink-nav");
        } else {
            $("nav.fixed-top").removeClass("shrink-nav");
        }
    });


});