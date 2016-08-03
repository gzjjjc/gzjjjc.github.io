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
        tableType: 'thickConsume',
        detail: [{
            spec: '100x100',
            thick: '50/60',
            consume: '100/m<sup>2</sup>'
        }, {
            spec: '115x115',
            thick: '50/60',
            consume: '75.6/m<sup>2</sup>'
        }, {
            spec: '150x150',
            thick: '50/60',
            consume: '44/m<sup>2</sup>'
        }, {
            spec: '200x200',
            thick: '50/60',
            consume: '25/m<sup>2</sup>'
        }]
    },{
        id: 1,
        type: 1,
        name: '环保透水砖',
        background: 'dist/image/product/1/2.png',
        link: '/product/1.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '200x100',
            thick: '60',
            consume: '50/m<sup>2</sup>'
        }, {
            spec: '230x115',
            thick: '60',
            consume: '37.8/m<sup>2</sup>'
        }, {
            spec: '235x125',
            thick: '60',
            consume: '32/m<sup>2</sup>'
        }, {
            spec: '300x150',
            thick: '60',
            consume: '22.2/m<sup>2</sup>'
        }]
    }, {
        id: 2,
        type: 1,
        name: '环保彩砖',
        background: 'dist/image/product/2/1.png',
        link: '/product/2.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '200x100',
            thick: '50/60',
            consume: '50/m<sup>2</sup>'
        }, {
            spec: '230x115',
            thick: '40/50/60',
            consume: '37.8/m<sup>2</sup>'
        }, {
            spec: '250x125',
            thick: '50/60',
            consume: '32/m<sup>2</sup>'
        }, {
            spec: '300x150',
            thick: '50/60',
            consume: '22.2/m<sup>2</sup>'
        }]
    }, {
        id: 5,
        type: 1,
        name: '环保彩砖',
        background: 'dist/image/product/5/1.png',
        link: '/product/5.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '100x100',
            thick: '50/60',
            consume: '100/m<sup>2</sup>'
        }, {
            spec: '115x115',
            thick: '50/60',
            consume: '75.6/m<sup>2</sup>'
        }, {
            spec: '200x200',
            thick: '50/60',
            consume: '25/m<sup>2</sup>'
        }, {
            spec: '300x300',
            thick: '50/60',
            consume: '11/m<sup>2</sup>'
        }]
    }, {
        id: 6,
        type: 1,
        name: '环保彩砖',
        background: 'dist/image/product/6/1.png',
        link: '/product/6.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '150x150',
            thick: '50/60',
            consume: '44/m<sup>2</sup>'
        },{
            spec: '200x100',
            thick: '50/60',
            consume: '50/m<sup>2</sup>'
        }, {
            spec: '230x115',
            thick: '40/50/60',
            consume: '37.8/m<sup>2</sup>'
        }, {
            spec: '250x125',
            thick: '50/60',
            consume: '32/m<sup>2</sup>'
        }]
    }, {
        id: 3,
        type: 1,
        name: '分层砖',
        background: 'dist/image/product/3/1.png',
        link: '/product/3.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '100x100',
            thick: '50/60',
            consume: '100/m<sup>2</sup>'
        }, {
            spec: '115x115',
            thick: '50/60',
            consume: '75.6/m<sup>2</sup>'
        }, {
            spec: '150x150',
            thick: '50/60',
            consume: '44/m<sup>2</sup>'
        }, {
            spec: '200x200',
            thick: '50/60',
            consume: '25/m<sup>2</sup>'
        }]
    }, {
        id: 3,
        type: 1,
        name: '分层砖',
        background: 'dist/image/product/3/2.png',
        link: '/product/3.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '200x100',
            thick: '50/60',
            consume: '50/m<sup>2</sup>'
        }, {
            spec: '230x115',
            thick: '45/50/60',
            consume: '37.8/m<sup>2</sup>'
        }, {
            spec: '250x125',
            thick: '50/60',
            consume: '32/m<sup>2</sup>'
        }, {
            spec: '300x150',
            thick: '50/60',
            consume: '22.2/m<sup>2</sup>'
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
        id: 7,
        type: 1,
        name: '码头砖',
        background: 'dist/image/product/7/1.png',
        link: '/product/7.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '225x112.5',
            thick: '10',
            consume: '39.5/m<sup>2</sup>'
        }, {
            spec: '225x112.5',
            thick: '80',
            consume: '39.5/m<sup>2</sup>'
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
        tableType: 'thickConsume',
        detail: [{
            spec: '300x300',
            thick: '150',
            consume: '11/m<sup>2</sup>'
        }, {
            spec: '400x400',
            thick: '150',
            consume: '6.25/m<sup>2</sup>'
        }]
    }, {
        id: 10,
        type: 1,
        name: '六角护坡砖',
        background: 'dist/image/product/10/1.png',
        link: '/product/10.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '300x300',
            thick: '150',
            consume: '11/m<sup>2</sup>'
        }, {
            spec: '400x400',
            thick: '150',
            consume: '6.25/m<sup>2</sup>'
        }]
    }, {
        id: 11,
        type: 1,
        name: '八字植草砖',
        background: 'dist/image/product/11/1.png',
        link: '/product/11.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '400x200',
            thick: '75',
            consume: '12.5/m<sup>2</sup>'
        }, {
            spec: '400x200',
            thick: '100',
            consume: '12.5/m<sup>2</sup>'
        }]
    }, {
        id: 12,
        type: 1,
        name: '双八字植草砖',
        background: 'dist/image/product/12/1.png',
        link: '/product/12.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '400x400',
            thick: '80',
            consume: '6.25/m<sup>2</sup>'
        }, {
            spec: '400x400',
            thick: '100',
            consume: '6.25/m<sup>2</sup>'
        }]
    }, {
        id: 49,
        type: 1,
        name: '网络植草砖',
        background: 'dist/image/product/49/1.png',
        link: '/product/49.html',
        tableType: 'thickConsume',
        detail: [{
            spec: '600x300',
            thick: '100',
            consume: '5.5/m<sup>2</sup>'
        }]
    }, {
        id: 13,
        type: 1,
        name: '井形植草砖',
        background: 'dist/image/product/13/1.png',
        link: '/product/13.html',
        tableType: 'thickPrice',
        detail: [{
            spec: '250x190',
            thick: '75',
            price: '21/m<sup>2</sup>'
        }]
    }, {
        id: 14,
        type: 1,
        name: '背心植草砖',
        background: 'dist/image/product/14/1.png',
        link: '/product/14.html',
        tableType: 'thickPrice',
        detail: [{
            spec: '300x300',
            thick: '60',
            price: '11/m<sup>2</sup>'
        }, {
            spec: '300x300',
            thick: '80',
            price: '11/m<sup>2</sup>'
        }, {
            spec: '300x300',
            thick: '100',
            price: '11/m<sup>2</sup>'
        }]
    }];
    var productTemplate = $($('#product-template').clone().html());
    var productTemplateConsume = $($('#product-template-consume').clone().html());
    var productTemplatePrice = $($('#product-template-price').clone().html());
    var productHTMLS = '';

    // type 1彩砖
    var product_caizhuan_HTMLS = '';
    $.each(product_caizhuan, function(key, data) {
        var templateObj = productTemplate;
        if (data.tableType === 'thickPrice') {
            templateObj = productTemplatePrice;
        } else if (data.tableType === 'thickConsume') {
            templateObj = productTemplateConsume;
        }
        templateObj.find('.product-title').html(data.name);
        templateObj.find('.product-image').attr('data-original', data.background);
        var details = '';
        if (data.tableType === 'thickPrice') {
            $.each(data.detail, function(key, specData) {
                details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '<td>' + (specData.price === undefined ? '' : specData.price) + '</td>' + '</tr>';
            });
            var leftTr = 4 - data.detail.length;
            if (leftTr > 0) {
                details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="3">可定制</td></tr>';
            }
        } else if (data.tableType === 'thickConsume') {
            $.each(data.detail, function(key, specData) {
                details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '<td>' + (specData.consume === undefined ? '' : specData.consume) + '</td>' + '</tr>';
            });
            var leftTr = 4 - data.detail.length;
            if (leftTr > 0) {
                details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="3">可定制</td></tr>';
            }
        } else {
            $.each(data.detail, function(key, specData) {
                details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
            });
            var leftTr = 4 - data.detail.length;
            if (leftTr > 0) {
                details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
            }
        }
        templateObj.find('.product-spec tbody').html(details);
        templateObj.find('a').attr('href', data.link);
        product_caizhuan_HTMLS += templateObj.prop('outerHTML');
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
            spec: '500x320',
            thick: '50'
        }, {
            spec: '500x400',
            thick: '60'
        }, {
            spec: '500x500',
            thick: '60'
        }]
    }, {
        id: 30,
        type: 2,
        name: '雨水盖板',
        background: 'dist/image/product/30/1.png',
        link: '/product/30.html',
        detail: [{
            spec: '500x320',
            thick: '50'
        }, {
            spec: '500x400',
            thick: '60'
        }, {
            spec: '500x500',
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
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
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
        name: '圆形雨井',
        background: 'dist/image/product/16/1.png',
        link: '/product/16.html',
        detail: [{
            spec: '600',
            thick: ''
        }, {
            spec: '700',
            thick: ''
        }, {
            spec: '800',
            thick: ''
        }]
    }, {
        id: 34,
        type: 3,
        name: '球墨检查井',
        background: 'dist/image/product/34/1.png',
        link: '/product/16.html',
        detail: [{
            spec: '450x650',
            thick: ''
        }, {
            spec: '400x600',
            thick: ''
        }, {
            spec: '500x750',
            thick: ''
        }]
    }, {
        id: 35,
        type: 3,
        name: '方形雨井',
        background: 'dist/image/product/35/1.png',
        link: '/product/16.html',
        detail: [{
            spec: '450x650',
            thick: ''
        }, {
            spec: '400x600',
            thick: ''
        }, {
            spec: '400x750',
            thick: ''
        }]
    }, {
        id: 36,
        type: 3,
        name: '树脂方形井',
        background: 'dist/image/product/36/1.png',
        link: '/product/16.html',
        detail: [{
            spec: '400x600',
            thick: ''
        }, {
            spec: '400x500',
            thick: ''
        }, {
            spec: '400x400',
            thick: ''
        }]
    }, {
        id: 37,
        type: 3,
        name: '平式入水井',
        background: 'dist/image/product/37/1.png',
        link: '/product/16.html',
        detail: [{
            spec: '300x500',
            thick: ''
        }, {
            spec: '400x500',
            thick: ''
        }, {
            spec: '400x400',
            thick: ''
        }]
    }, {
        id: 38,
        type: 3,
        name: '井梯',
        background: 'dist/image/product/38/1.png',
        link: '/product/16.html',
        detail: [{
            spec: '300x500',
            thick: ''
        }, {
            spec: '400x500',
            thick: ''
        }, {
            spec: '400x400',
            thick: ''
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
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
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
            spec: '500x600',
            thick: '200'
        }, {
            spec: '600x600',
            thick: '200'
        }, {
            spec: '500x600',
            thick: '300'
        }]
    }, {
        id: 31,
        type: 4,
        name: '防撞石',
        background: 'dist/image/product/31/1.png',
        link: '/product/31.html',
        detail: [{
            spec: '500x600',
            thick: '200'
        }, {
            spec: '600x600',
            thick: '200'
        }, {
            spec: '500x600',
            thick: '300'
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
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
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
            spec: '1000x300',
            thick: '120'
        }, {
            spec: '1000x300',
            thick: '150'
        }, {
            spec: '500x300',
            thick: '120'
        }]
    }, {
        id: 32,
        type: 5,
        name: '路侧石',
        background: 'dist/image/product/32/1.png',
        link: '/product/18.html',
        detail: [{
            spec: '500x100',
            thick: '100'
        }, {
            spec: '500x120',
            thick: '120'
        }, {
            spec: '500x300',
            thick: '150'
        }]
    }, {
        id: 33,
        type: 5,
        name: '路侧石',
        background: 'dist/image/product/33/1.png',
        link: '/product/18.html',
        detail: [{
            spec: '500x600',
            thick: '200'
        }, {
            spec: '500x500',
            thick: '200'
        }, {
            spec: '500x300',
            thick: '120'
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
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_luceshi_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#luceshi').html(product_luceshi_HTMLS);
    productHTMLS += product_luceshi_HTMLS;

    // type 6 防水材料
    var product_ganfenshajiang = [{
        id: 29,
        type: 6,
        name: '防水材料',
        background: 'dist/image/product/29/1.png',
        link: '/product/29.html',
        detail: [{ spec: '25kg/18kg', thick: '' }]
    }, {
        id: 19,
        type: 6,
        name: '瓷砖粘贴剂',
        background: 'dist/image/product/19/1.png',
        link: '/product/19.html',
        detail: [{ spec: '25kg/18kg', thick: '' }]
    }, {
        id: 20,
        type: 6,
        name: '填缝剂',
        background: 'dist/image/product/20/1.png',
        link: '/product/20.html',
        detail: [{ spec: '25kg/18kg', thick: '' }]
    }, {
        id: 21,
        type: 6,
        name: '911聚氨酯防水涂料',
        background: 'dist/image/product/21/1.png',
        link: '/product/21.html',
        detail: [{ spec: '25kg/18kg', thick: '' }]
    }, {
        id: 22,
        type: 6,
        name: 'k11防水涂料',
        background: 'dist/image/product/22/1.png',
        link: '/product/22.html',
        detail: [{ spec: '25kg/18kg', thick: '' }]
    }, {
        id: 23,
        type: 6,
        name: '多功能高效防水剂',
        background: 'dist/image/product/23/1.png',
        link: '/product/23.html',
        detail: [{ spec: '25kg/18kg', thick: '' }]
    }, {
        id: 24,
        type: 6,
        name: '外墙透明防水剂',
        background: 'dist/image/product/24/1.png',
        link: '/product/24.html',
        detail: [{ spec: '25kg/18kg', thick: '' }]
    }];
    var product_ganfenshajiang_HTMLS = '';
    $.each(product_ganfenshajiang, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
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
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
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
            spec: '500x300',
            thick: '700'
        }, {
            spec: '500x400',
            thick: '700'
        }, {
            spec: '600x400',
            thick: '700'
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
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
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
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_hunningtupaishuiguan_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#hunningtupaishuiguan').html(product_hunningtupaishuiguan_HTMLS);
    productHTMLS += product_hunningtupaishuiguan_HTMLS;

    // type 10 水泥制品
    var product_shuinizhipin = [{
        id: 39,
        type: 10,
        name: '树桩砖',
        background: 'dist/image/product/39/1.png',
        link: '/product/39.html',
        detail: [{
            spec: '1000x1000',
            thick: ''
        }, {
            spec: '1200x1200',
            thick: ''
        }]
    }, {
        id: 40,
        type: 10,
        name: '电力拼版',
        background: 'dist/image/product/40/1.png',
        link: '/product/40.html',
        detail: [{
            spec: '1000x1000',
            thick: ''
        }, {
            spec: '1200x1200',
            thick: ''
        }]
    }, {
        id: 41,
        type: 10,
        name: '水槽',
        background: 'dist/image/product/41/1.png',
        link: '/product/41.html',
        detail: [{
            spec: '1000x1000',
            thick: ''
        }, {
            spec: '1200x1200',
            thick: ''
        }]
    }, {
        id: 42,
        type: 10,
        name: '车止石',
        background: 'dist/image/product/42/1.png',
        link: '/product/42.html',
        detail: [{
            spec: '1000x1000',
            thick: ''
        }, {
            spec: '1200x1200',
            thick: ''
        }]
    }, {
        id: 43,
        type: 10,
        name: '窗花',
        background: 'dist/image/product/43/1.png',
        link: '/product/43.html',
        detail: [{
            spec: '1000x1000',
            thick: ''
        }, {
            spec: '1200x1200',
            thick: ''
        }]
    }, {
        id: 44,
        type: 10,
        name: '电缆槽',
        background: 'dist/image/product/44/1.png',
        link: '/product/44.html',
        detail: [{
            spec: '1000x1000',
            thick: ''
        }, {
            spec: '1200x1200',
            thick: ''
        }]
    }, {
        id: 45,
        type: 10,
        name: '仿花岗岩平石',
        background: 'dist/image/product/45/1.png',
        link: '/product/45.html',
        detail: [{
            spec: '1000x250',
            thick: '120'
        }, {
            spec: '500x250',
            thick: '120'
        }]
    }, {
        id: 46,
        type: 10,
        name: '仿花岗岩压条',
        background: 'dist/image/product/46/1.png',
        link: '/product/46.html',
        detail: [{
            spec: '1000x160',
            thick: '120'
        }]
    }, {
        id: 47,
        type: 10,
        name: '钢纤维井梯',
        background: 'dist/image/product/47/1.png',
        link: '/product/47.html',
        detail: [{
            spec: '300x450',
            thick: '50'
        }]
    }, {
        id: 48,
        type: 10,
        name: '树桩',
        background: 'dist/image/product/48/1.png',
        link: '/product/48.html',
        detail: [{
            spec: '25000x100',
            thick: '100'
        }, {
            spec: '1800x80',
            thick: '80'
        }, {
            spec: '20000x90',
            thick: '90'
        }]
    }];
    var product_shuinizhipin_HTMLS = '';
    $.each(product_shuinizhipin, function(key, data) {
        productTemplate.find('.product-title').html(data.name);
        productTemplate.find('.product-image').attr('data-original', data.background);
        var details = '';
        $.each(data.detail, function(key, specData) {
            details += '<tr>' + '<td>' + specData.spec + '</td>' + '<td>' + specData.thick + '</td>' + '</tr>';
        });
        var leftTr = 4 - data.detail.length;
        if (leftTr > 0) {
            details += '<tr>' + '<td rowspan="' + leftTr + '" colspan="2">可定制</td></tr>';
        }
        productTemplate.find('.product-spec tbody').html(details);
        productTemplate.find('a').attr('href', data.link);
        product_shuinizhipin_HTMLS += productTemplate.prop('outerHTML');
    });
    $('#shuinizhipin').html(product_shuinizhipin_HTMLS);
    productHTMLS += product_shuinizhipin_HTMLS;

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
