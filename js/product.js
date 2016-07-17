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

    var ajaxRequest = function(url, params, method, successcallback, errorcallback, obj) {
        var defaultErrorHandler = function(error, obj) {
            console.log(error);
        };

        if (method === null || method === '') {
            method = 'get';
        }
        if (obj !== undefined) {
            if (obj.attr('disabled') !== undefined) {
                return false;
            }
            obj.attr('disabled', true);
        }
        $.ajax({
            url: url,
            data: params,
            type: method,
            cache: false,
            dataType: 'json',
            success: function(data) {
                if (obj !== undefined) {
                    obj.removeAttr('disabled');
                }
                if (typeof successcallback == 'function') {
                    successcallback(data, obj);
                } else {
                    window.location.reload();
                }
            },
            error: function(error) {
                if (obj !== undefined) {
                    obj.removeAttr('disabled');
                }
                if (typeof errorcallback == 'function') {
                    errorcallback(error, obj, defaultErrorHandler);
                } else {
                    defaultErrorHandler(error, obj);
                }
            }
        });
    };

    ajaxRequest('/data/product.json', params, 'post', function(data) {
        toggleLoading(false);
        window.location.href = '/Home/BookPage/index?hotel=' + window.currentHotel;
    }, function(error, obj, defaultErrorHandler) {
        toggleLoading(false);
        defaultErrorHandler(error, obj);
    }, submitBtn);
});
