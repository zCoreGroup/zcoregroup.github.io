(function($) {
    'use strict';

    $('.slider-activator').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
        cssEase: 'linear'
    });

    //counter initiator
    $('.count').rCounter({
        duration: 40
    });

    var win = $(window);
    win.on("load", function() {
        //isotope masonry activation
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            getSortData: {
                name: '.name',
                category: '[data-category]'
            },
            // layout mode options
            masonry: {
                columnWidth: '.grid-item'
            }

        });

        //for menu active class
        $('.pofo-cat button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // filter items on button click
        $('.pofo-cat').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    });

    //portfolio magnific popup
    $('.portfolio-wrapper .overlay a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },

    })

    //blog video magnific popup
    $('.mfp-iframe').magnificPopup({
        type: 'iframe'
    });

    $('.list-blog-item .play-btn a').magnificPopup({
        type: 'iframe'
    });

    //back to top button
    $(".back-to-top a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // for one page scroll
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click", function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 10)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

})(jQuery);