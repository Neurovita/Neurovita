$(function() {
    var open = false
    $('.navmenu a, .emptyLi').on('touchstart', function(event) {
        if (open) {
            open = false
            $('.navmenu').css({
                'overflow': 'hidden',
                'margin-top': '0'
            })
            $(window).scrollTop($('#' + $(this).attr('href').slice(1)).offset().top)
        }
        else {
            open = true
            $('.navmenu').css({
                'overflow': 'visible',
                'margin-top': '-3em'
            })
            return false
        }
    })
});
