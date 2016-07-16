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
    script.src = "https://api.map.baidu.com/api?v=2.0&ak=kDn0ouEREmENRD9oTrmV4W27AjadqnWl&s=1&callback=init";
    document.body.appendChild(script);
    window.mapScriptIsAdded = true;
}

function init() {
    var map = new BMap.Map("doc-about-map", { minZoom: 12, maxZoom: 19 }); // 创建Map实例
    var point = new BMap.Point(113.398315, 23.136928); // 创建点坐标
    map.setCurrentCity("广州"); // 设置地图显示的城市 此项是必须设置的
    map.centerAndZoom(point, 17);
    map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL })); //添加放大缩小控件
    var opts = { offset: new BMap.Size(48, 16) }
    map.addControl(new BMap.MapTypeControl(opts)); //添加地图类型控件
    // map.enableScrollWheelZoom(); //启用滚轮放大缩小
    map.disableDragging();
    var maker = new BMap.Marker(point);
    map.addOverlay(maker);
    // 将标注添加到地图中
    //创建信息窗口
    var opts = {
        width: 160,
        // 信息窗口宽度
        height: 32,
        // 信息窗口高度
        title: '广州市坚记建材有限公司',
        // 信息窗口标题
        enableAutoPan: true //自动平移
    };
    var infoWindow = new BMap.InfoWindow('联系电话：13503032349', opts);
    maker.addEventListener('click', function () {
        map.openInfoWindow(infoWindow, point);
    });
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', true, true);
    maker.dispatchEvent(evt);
}
