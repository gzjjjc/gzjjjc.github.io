$(function() {
    // 图片懒加载
    if ($('img.lazyload-image').lazyload !== undefined) {
        $('img.lazyload-image').lazyload({
            effect: 'fadeIn'
        });
    }

    $("#doc-carousel .inner-item").lazyload({
        skip_invisible: true,
    });

    $('#doc-carousel').on('slid.bs.carousel', function() {
        $("html,body").trigger("scroll");
    });

    var navbarTransClass = 'navbar-transparent';
    $(document).bind('scroll', function() {
        if ($('#doc-header-menu').hasClass('in')) {
            return;
        }
        var len = $(this).scrollTop();
        if (len >= 58) {
            $('#doc-header').removeClass(navbarTransClass);
        } else {
            $('#doc-header').addClass(navbarTransClass);
        }
    });

    $('#doc-header-menu').on('show.bs.collapse', function() {
        $('#doc-header').removeClass(navbarTransClass);
    }).on('hide.bs.collapse', function() {
        var len = $(document).scrollTop();
        if (len < 58) {
            $('#doc-header').addClass(navbarTransClass);
        }
    });

    $('#doc-header-menu .nav-link').on('click', function() {
        $('#doc-header-menu').collapse('hide');
    });
});
