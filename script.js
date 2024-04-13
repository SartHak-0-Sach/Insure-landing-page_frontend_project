if (window.matchMedia('(max-width: 767px)').matches) {
    $('.dropdown-content').hide();
}
$(document).ready(function () {

    // jQuery methods go here...

    $('.dropbtn').click(function () {

        $('.dropdown-content').slideToggle(800, function () {
            if ($('.dropbtn').attr('src') == 'images/icon-hamburger.svg')
                $(".dropbtn").attr("src", "images/icon-close.svg");
            else if ($('.dropbtn').attr('src') == 'images/icon-close.svg')
                $(".dropbtn").attr("src", "images/icon-hamburger.svg");


        });
    })

    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.dropdown-content').removeAttr('style');
        }
    });

});