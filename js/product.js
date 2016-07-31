$(function() {
    $('[data-toggle="tooltip"]').tooltip();

    // 计算选中的tab
    if (window.location.search !== '') {
        var id = window.location.search.split('=')[1];
        if (id === undefined) {
            return;
        }
        id = parseInt(id);
        $('#doc-menu-detail li:eq(' + id + ') a').tab('show');
    }


    var product_caizhuan = [{
        id: 1,
        type: 1,
        name: '生态透水砖',
        background: 'dist/image/product/1/1.png',
        link: '/product/1.html',
        detail: [{
            spec: '200x100',
            thick: '60'
        }, {
            spec: '230x115',
            thick: '60'
        }, {
            spec: '300x100',
            thick: '60'
        }]
    }, {
        id: 2,
        type: 1,
        name: '环保彩砖',
        background: 'dist/image/product/2/1.png',
        link: '/product/2.html',
        detail: [{
            spec: '230x115',
            thick: '45'
        }, {
            spec: '230x115',
            thick: '50'
        }, {
            spec: '230x115',
            thick: '60'
        }]
    }, {
        id: 3,
        type: 1,
        name: '分层砖',
        background: 'dist/image/product/3/1.png',
        link: '/product/3.html',
        detail: [{
            spec: '200x100',
            thick: '45'
        }, {
            spec: '230x115',
            thick: '50'
        }, {
            spec: '300x100',
            thick: '60'
        }]
    }, {
        id: 4,
        type: 1,
        name: '导盲砖',
        background: 'dist/image/product/4/1.png',
        link: '/product/4.html',
        detail: [{
            spec: '250x250',
            thick: '50'
        }, {
            spec: '300x300',
            thick: '60'
        }]
    }, {
        id: 5,
        type: 1,
        name: '环保彩砖',
        background: 'dist/image/product/5/1.png',
        link: '/product/5.html',
        detail: [{
            spec: '150x150',
            thick: '50/60'
        }, {
            spec: '200x200',
            thick: '50/60'
        }, {
            spec: '300x300',
            thick: '50/60'
        }, {
            spec: '400x400',
            thick: '50/60'
        }]
    }, {
        id: 6,
        type: 1,
        name: '环保彩砖',
        background: 'dist/image/product/6/1.png',
        link: '/product/6.html',
        detail: [{
            spec: '150x150',
            thick: '50/60'
        }, {
            spec: '200x200',
            thick: '50/60'
        }, {
            spec: '300x300',
            thick: '50/60'
        }, {
            spec: '400x400',
            thick: '50/60'
        }]
    }, {
        id: 7,
        type: 1,
        name: '码头砖',
        background: 'dist/image/product/7/1.png',
        link: '/product/7.html',
        detail: [{
            spec: '225x112.5',
            thick: '80'
        }, {
            spec: '225x112.5',
            thick: '10'
        }]
    }, {
        id: 8,
        type: 1,
        name: '西班牙砖',
        background: 'dist/image/product/8/1.png',
        link: '/product/8.html',
        detail: [{
            spec: '250x250',
            thick: '50'
        }, {
            spec: '300x300',
            thick: '50'
        }, {
            spec: '400x400',
            thick: '50'
        }]
    }, {
        id: 9,
        type: 1,
        name: '六角护坡砖',
        background: 'dist/image/product/9/1.png',
        link: '/product/9.html',
        detail: [{
            spec: '400x400',
            thick: '150'
        }]
    }, {
        id: 10,
        type: 1,
        name: '六角护坡砖',
        background: 'dist/image/product/10/1.png',
        link: '/product/10.html',
        detail: [{
            spec: '400x400',
            thick: '150'
        }]
    }, {
        id: 11,
        type: 1,
        name: '八字植草砖',
        background: 'dist/image/product/11/1.png',
        link: '/product/11.html',
        detail: [{
            spec: '400x400',
            thick: '80'
        }]
    }, {
        id: 12,
        type: 1,
        name: '双八字植草砖',
        background: 'dist/image/product/12/1.png',
        link: '/product/12.html',
        detail: [{
            spec: '400x400',
            thick: '80'
        }]
    }, {
        id: 13,
        type: 1,
        name: '井形植草砖',
        background: 'dist/image/product/13/1.png',
        link: '/product/13.html',
        detail: [{
            spec: '250x190',
            thick: '75'
        }]
    }, {
        id: 14,
        type: 1,
        name: '背心植草砖',
        background: 'dist/image/product/14/1.png',
        link: '/product/14.html',
        detail: [{
            spec: '300x300',
            thick: '60'
        }, {
            spec: '300x300',
            thick: '80'
        }, {
            spec: '300x300',
            thick: '100'
        }]
    }];
    var productTemplate = $($('#product-template').clone().html());
    var productHTMLS = '';

    // type 1彩砖
    var product_caizhuan_HTMLS = '';
    $.each(product_caizhuan, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_caizhuan_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#caizhuan').html(product_caizhuan_HTMLS);
    productHTMLS += product_caizhuan_HTMLS;


    // type 2 水泥盖板
    var product_shuinigaiban = [{
        id: 15,
        type: 2,
        name: '水泥盖板',
        background: 'dist/image/product/15/1.png',
        link: '/product/15.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_shuinigaiban_HTMLS = '';
    $.each(product_shuinigaiban, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_shuinigaiban_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#shuinigaiban').html(product_shuinigaiban_HTMLS);
    productHTMLS += product_shuinigaiban_HTMLS;

    // type 3 沙井盖
    var product_shajinggai = [{
        id: 16,
        type: 3,
        name: '沙井盖',
        background: 'dist/image/product/16/1.png',
        link: '/product/16.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_shajinggai_HTMLS = '';
    $.each(product_shajinggai, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_shajinggai_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#shajinggai').html(product_shajinggai_HTMLS);
    productHTMLS += product_shajinggai_HTMLS;

    // type 4 防撞隔离墩
    var product_fangzhuanggelidun = [{
        id: 17,
        type: 4,
        name: '防撞隔离墩',
        background: 'dist/image/product/17/1.png',
        link: '/product/17.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_fangzhuanggelidun_HTMLS = '';
    $.each(product_fangzhuanggelidun, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_fangzhuanggelidun_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#fangzhuanggelidun').html(product_fangzhuanggelidun_HTMLS);
    productHTMLS += product_fangzhuanggelidun_HTMLS;

    // type 5 路侧石
    var product_luceshi = [{
        id: 18,
        type: 5,
        name: '路侧石',
        background: 'dist/image/product/18/1.png',
        link: '/product/18.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_luceshi_HTMLS = '';
    $.each(product_luceshi, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_luceshi_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#luceshi').html(product_luceshi_HTMLS);
    productHTMLS += product_luceshi_HTMLS;

    // type 6 干粉砂浆
    var product_ganfenshajiang = [{
        id: 19,
        type: 6,
        name: '瓷砖粘贴剂',
        background: 'dist/image/product/19/1.png',
        link: '/product/19.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }, {
        id: 20,
        type: 6,
        name: '填缝剂',
        background: 'dist/image/product/20/1.png',
        link: '/product/20.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }, {
        id: 21,
        type: 6,
        name: '911聚氨酯防水涂料',
        background: 'dist/image/product/21/1.png',
        link: '/product/21.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }, {
        id: 22,
        type: 6,
        name: 'k11防水涂料',
        background: 'dist/image/product/22/1.png',
        link: '/product/22.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }, {
        id: 23,
        type: 6,
        name: '多功能高效防水剂',
        background: 'dist/image/product/23/1.png',
        link: '/product/23.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }, {
        id: 24,
        type: 6,
        name: '外墙透明防水剂',
        background: 'dist/image/product/24/1.png',
        link: '/product/24.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_ganfenshajiang_HTMLS = '';
    $.each(product_ganfenshajiang, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_ganfenshajiang_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#ganfenshajiang').html(product_ganfenshajiang_HTMLS);
    productHTMLS += product_ganfenshajiang_HTMLS;

    // type 7 隔热板
    var product_gereban = [{
        id: 25,
        type: 7,
        name: '隔热砖',
        background: 'dist/image/product/25/1.png',
        link: '/product/25.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }, {
        id: 26,
        type: 7,
        name: 'PRPS复合隔热板',
        background: 'dist/image/product/26/1.png',
        link: '/product/26.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_gereban_HTMLS = '';
    $.each(product_gereban, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_gereban_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#gereban').html(product_gereban_HTMLS);
    productHTMLS += product_gereban_HTMLS;

    // type 8 花岗岩石材
    var product_huagangyanshicai = [{
        id: 27,
        type: 8,
        name: '花岗岩石材',
        background: 'dist/image/product/27/1.png',
        link: '/product/27.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_huagangyanshicai_HTMLS = '';
    $.each(product_huagangyanshicai, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_huagangyanshicai_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#huagangyanshicai').html(product_huagangyanshicai_HTMLS);
    productHTMLS += product_huagangyanshicai_HTMLS;

    // type 9 混凝土排水管
    var product_hunningtupaishuiguan = [{
        id: 28,
        type: 9,
        name: '混凝土排水管',
        background: 'dist/image/product/28/1.png',
        link: '/product/28.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_hunningtupaishuiguan_HTMLS = '';
    $.each(product_hunningtupaishuiguan, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_hunningtupaishuiguan_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#hunningtupaishuiguan').html(product_hunningtupaishuiguan_HTMLS);
    productHTMLS += product_hunningtupaishuiguan_HTMLS;

    // type 10 防水材料
    var product_fangshuicailiao = [{
        id: 29,
        type: 10,
        name: '防水材料',
        background: 'dist/image/product/29/1.png',
        link: '/product/29.html',
        detail: [{
            spec: '300x200',
            thick: '30'
        }, {
            spec: '300x200',
            thick: '50'
        }, {
            spec: '300x200',
            thick: '60'
        }]
    }];
    var product_fangshuicailiao_HTMLS = '';
    $.each(product_fangshuicailiao, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_fangshuicailiao_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#fangshuicailiao').html(product_fangshuicailiao_HTMLS);
    productHTMLS += product_fangshuicailiao_HTMLS;

    // 全部产品
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
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $(window).trigger('scroll');
    });
});
