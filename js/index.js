$(function() {
    // 图片懒加载
    if ($('img.lazyload').lazyload !== undefined) {
        $('img.lazyload').lazyload({
            effect: 'fadeIn'
        });
    }

    $("#doc-carousel .inner-item").lazyload({
        skip_invisible: true,
        effect: 'fadeIn'
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


    $(window).on('activate.bs.scrollspy', function(e, target) {
        if (target.relatedTarget === '#doc-about' || target.relatedTarget === '#doc-product') {
            loadJScript();
        }
    });
    window.mapScriptIsAdded = false;
});

function loadJScript() {
    if (window.mapScriptIsAdded) {
        return;
    }
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://api.map.baidu.com/api?v=2.0&ak=kDn0ouEREmENRD9oTrmV4W27AjadqnWl&callback=init";
    document.body.appendChild(script);
    window.mapScriptIsAdded = true;
}

function init() {
    var map = new BMap.Map("doc-about-map", { minZoom: 12, maxZoom: 19 }); // 创建Map实例
    var point = new BMap.Point(113.398315, 23.136928); // 创建点坐标
    map.setCurrentCity("广州"); // 设置地图显示的城市 此项是必须设置的
    map.centerAndZoom(point, 17);
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL })); //添加放大缩小控件
    map.enableScrollWheelZoom(); //启用滚轮放大缩小
}
