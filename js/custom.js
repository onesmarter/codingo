$(document).ready(function() {

    //menu active
    $('a.menu').click(function() {
        $('a.menu').removeClass("active");
        $(this).addClass("active");
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