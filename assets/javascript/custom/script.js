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
});
