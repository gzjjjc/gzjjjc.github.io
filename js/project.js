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
        $(".carousel .inner-item").lazyload({
            effect: 'fadeIn'
        });
        $('.lazyload-background').lazyload({
            effect: 'fadeIn'
        });
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
    
    var wow = new WOW({
        boxClass: 'animCss',
    });
    wow.init();

    $('#emf-form').on('submit', function(e) {
        e.preventDefault();
        var from = $('#element_0').val().trim();
        if (from === '') {
            window.alert('请输入您的邮箱');
            return;
        }
        var message = $('#element_1').val().trim();
        if (message === '') {
            window.alert('请输入您想咨询的业务或反馈建议');
            return;
        }
        window.location = 'http://mail.xnote.pub/send/index?fc=gzjjjc&f=' + from + '&m=' + message;
    });
});
