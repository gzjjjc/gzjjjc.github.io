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
