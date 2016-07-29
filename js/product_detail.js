$(function() {
    // 图片懒加载
    if ($('img.lazyload').lazyload !== undefined) {
        $('img.lazyload').lazyload({
            effect: 'fadeIn'
        });
        $('.lazyload-background').lazyload({
            effect: 'fadeIn'
        });
    }
    $('[data-toggle="tooltip"]').tooltip();

    $(".carousel .inner-item").lazyload({
        skip_invisible: true,
        effect: 'fadeIn'
    });

    $('.carousel').on('slid.bs.carousel', function() {
        $("html,body").trigger("scroll");
    });
});
