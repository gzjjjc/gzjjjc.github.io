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


    $('#doc-menu-detail a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $(".carousel .inner-item").lazyload();
    });

    // 计算选中的tab
    if (window.location.search !== '') {
        var id = window.location.search.split('=')[1];
        if (id === undefined) {
            return;
        }
        id = parseInt(id) - 1;
        $('#doc-menu-detail li:eq(' + id + ') a').tab('show');
    }
});
