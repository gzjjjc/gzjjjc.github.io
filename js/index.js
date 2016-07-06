$(function(){
    // 图片懒加载
    if ($('img.lazyload-image').lazyload !== undefined) {
        $('img.lazyload-image').lazyload({
            effect: 'fadeIn'
        });
    }
});