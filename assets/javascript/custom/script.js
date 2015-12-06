jQuery(document).foundation();

$(document).ready(function(){
    // --> Panels Verts
        $('.pad a').on('click', function(e) {
            e.preventDefault();
            $('.padOpen').fadeOut().removeClass('padOpen');
            var whichOne = $(this).next('.cover');
            whichOne.fadeIn().addClass('padOpen');
        });
        $('.pad a.closebt').on('click', function(e) {
            e.preventDefault();
            var whichOne = $(this).parent('.cover');
            whichOne.fadeOut().removeClass('padOpen');
        });

    // --> Panneaux PHOTOS
        $('.picture').on('click', function() {
            var myData = $(this).data().story;
            $(this).find('.cover').addClass('hover');
            $('.picture .cover').not('.cover.hover').stop( true, true ).animate({opacity: '.9'});
            $('html, body').animate({scrollTop: $('.pictures').offset().top});
            $('.stories').slideDown();
            if ($('.storyDown').length > 0)
            {
                $('.storyDown').slideUp("fast", function() {
                    $('#story-'+myData).slideDown().addClass('storyDown');
                }).removeClass('storyDown');
            }
            else
            {
                $('#story-'+myData).slideDown().addClass('storyDown');
            }
        }).on('mouseleave', function(){
            $('.storyDown').slideUp("fast").removeClass('storyDown');
            $('.cover.hover').removeClass('hover');
            $('.picture .cover').stop( true, true ).animate({opacity: 0});
        });

});
