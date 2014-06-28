// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    console.log($('.page-scroll a').length);
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this),
            timer;
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        if($(window).width() < 767) {
            //console.log('window less than 767');
            clearTimeout(timer);
            timer = setTimeout(function(){$('.navbar-toggle').trigger('click');}, 1800);
        }
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// $(function() {
//     var offset = 220;
//     var duration = 500;
//     if($(window).width() < 767) {
//         $('.scroll-top').removeClass('visible-xs visble-sm').css({'display': 'none'});
//         $(window).scroll(function() {
//             if (($(this).scrollTop() < offset)) {
//                 $('.scroll-top').fadeOut(duration);
//             } else {
//                 $('.scroll-top').fadeIn(duration);
//             }
//         });
//     }
// });