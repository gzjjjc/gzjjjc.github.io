$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    // 计算选中的tab
    if (window.location.search !== '') {
        var id = window.location.search.split('=')[1];
        if (id === undefined) {
            return;
        }
        id = parseInt(id) - 1;
        $('#doc-menu-detail li:eq(' + id + ') a').tab('show');
    }


    var products = [{ name: '生态透水砖', background: 'dist/image/product/1/1.png', detail: [{ spec: '200x100', thick: '60' }, { spec: '230x115', thick: '60' }, { spec: '300x100', thick: '60' }] }, { name: '环保彩砖', background: 'dist/image/product/2/1.png', detail: [{ spec: '230x115', thick: '45' }, { spec: '230x115', thick: '50' }, { spec: '230x115', thick: '60' }] }, { name: '分层砖', background: 'dist/image/product/3/1.png', detail: [{ spec: '200x100', thick: '45' }, { spec: '230x115', thick: '50' }, { spec: '300x100', thick: '60' }] }, { name: '导盲砖', background: 'dist/image/product/4/1.png', detail: [{ spec: '250x250', thick: '50' }, { spec: '300x300', thick: '60' }] }, { name: '环保彩砖', background: 'dist/image/product/5/1.png', detail: [{ spec: '150x150', thick: '50/60' }, { spec: '200x200', thick: '50/60' }, { spec: '300x300', thick: '50/60' }, { spec: '400x400', thick: '50/60' }] }, { name: '环保彩砖', background: 'dist/image/product/6/1.png', detail: [{ spec: '150x150', thick: '50/60' }, { spec: '200x200', thick: '50/60' }, { spec: '300x300', thick: '50/60' }, { spec: '400x400', thick: '50/60' }] }, { name: '码头砖', background: 'dist/image/product/7/1.png', detail: [{ spec: '225x112.5', thick: '80' }, { spec: '225x112.5', thick: '10' }] }, { name: '西班牙砖', background: 'dist/image/product/8/1.png', detail: [{ spec: '250x250', thick: '50' }, { spec: '300x300', thick: '50' }, { spec: '400x400', thick: '50' }] }, { name: '六角护坡砖', background: 'dist/image/product/9/1.png', detail: [{ spec: '400x400', thick: '150' }] }, { name: '六角护坡砖', background: 'dist/image/product/10/1.png', detail: [{ spec: '400x400', thick: '150' }] }, { name: '八字植草砖', background: 'dist/image/product/11/1.png', detail: [{ spec: '400x400', thick: '80' }] }, { name: '双八字植草砖', background: 'dist/image/product/12/1.png', detail: [{ spec: '400x400', thick: '80' }] }, { name: '井形植草砖', background: 'dist/image/product/13/1.png', detail: [{ spec: '250x190', thick: '75' }] }, { name: '背心植草砖', background: 'dist/image/product/14/1.png', detail: [{ spec: '300x300', thick: '60' }, { spec: '300x300', thick: '80' }, { spec: '300x300', thick: '100' }] }];
    var productTemplate = $($('#product-template').clone().html());
    var productHTMLS = '';
    $.each(products, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productHTMLS += productTemplate.prop('outerHTML');
    });
    $('#all').html(productHTMLS);
    // 图片懒加载
    if ($('img.lazyload').lazyload !== undefined) {
        $('img.lazyload').lazyload({
            effect: 'fadeIn'
        });
        $('.lazyload-background').lazyload({
            effect: 'fadeIn'
        });
    }
});
