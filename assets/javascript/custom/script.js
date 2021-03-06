jQuery(document).foundation();

$(document).ready(function(){
    // --> Stack Hash !
        var myHash = window.location.hash;
        if ( (myHash != "") && ($(myHash).offset().top != undefined) )
        {
            var myOffset = (Foundation.utils.is_small_only()) ? 190 : 95 ;
            $('body,html').animate({scrollTop: $(myHash).offset().top - myOffset});
        }
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
            $('.cover.hover').removeClass('hover').css({opacity: 0});
            $(this).find('.cover').css({opacity: 0});
            $(this).find('.cover').addClass('hover');
            $('.picture .cover').not('.cover.hover').stop( true, true ).animate({opacity: '.7'});
            var myTop = $('.pictures').offset().top + 350;
            if (Foundation.utils.is_small_only())
            {
                $('.stories').slideDown();
                if ($('.storyDown').length > 0)
                {
                    $('.storyDown').slideUp("fast", function() {
                        $('#story-'+myData+'-mini').slideDown().addClass('storyDown');
                    }).removeClass('storyDown');
                }
                else
                {
                    $('#story-'+myData+'-mini').slideDown().addClass('storyDown');
                }
            }
            else
            {
                $('html, body').animate({scrollTop: myTop});
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
            }


        }).on('mouseleave', function(){
            if (Foundation.utils.is_small_only())
            {
                $('.storyDown').slideUp("fast").removeClass('storyDown');
                $('.cover.hover').removeClass('hover');
                $('.picture .cover').stop( true, true ).animate({opacity: 0});
            }
        });
        $('.storyZone').on('mouseleave', function() {
            $('.storyDown').slideUp("fast").removeClass('storyDown');
            $('.cover.hover').removeClass('hover');
            $('.picture .cover').stop( true, true ).animate({opacity: 0});
        });

    // --> Animation Panel
    var myDelay = (Foundation.utils.is_small_only()) ? 3 : 0 ;
        var tl = new TimelineLite();
        tl.to($('.coverme'), 5, {opacity:1, delay: myDelay} )
        .from($('.line-one'), .5, {opacity:0, top: '-50'})
        .from($('.theten'), 1, {opacity: 0, scale: 0})
        .from($('.line-two'), .5, {opacity:0, left: '-100'})
        .from($('.line-three'), .5, {opacity:0, right: '-100'})
        .from($('.line-four'), .5, {opacity:0, bottom: '-100'})
        .from($('.line-five'), .5, {opacity:0, bottom: '-100'})
        .from($('.buttondonpanel'), .5, {scale:0})
        .from($('.myplus'), .5, {opacity:0, bottom: -100})
        .from($('.creditscover'), .5, {opacity:0, bottom: -100});

    // --> Woopra Stuff
        $('.wopra').on('click', function() {
            var myAction = $(this).data().action;
            var myWoopra = $(this).data().woopra;
            woopra.track('interaction', { category: myWoopra, action: myAction, value:0,url: document.location.href, title: document.title});
        });
        $('.myplus').on('click', function() {
            var myTop = $('.pad-verts').offset().top - 80;
            $('html, body').animate({scrollTop: myTop});
        });

});
