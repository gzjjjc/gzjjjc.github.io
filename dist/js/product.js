$(function(){if($('[data-toggle="tooltip"]').tooltip(),""!==window.location.search){var t=window.location.search.split("=")[1];if(void 0===t)return;t=parseInt(t)-1,$("#doc-menu-detail li:eq("+t+") a").tab("show")}var c=[{name:"生态透水砖",background:"dist/image/product/1/1.png",detail:[{spec:"200x100",thick:"60"},{spec:"230x115",thick:"60"},{spec:"300x100",thick:"60"}]},{name:"环保彩砖",background:"dist/image/product/2/1.png",detail:[{spec:"230x115",thick:"45"},{spec:"230x115",thick:"50"},{spec:"230x115",thick:"60"}]},{name:"分层砖",background:"dist/image/product/3/1.png",detail:[{spec:"200x100",thick:"45"},{spec:"230x115",thick:"50"},{spec:"300x100",thick:"60"}]},{name:"导盲砖",background:"dist/image/product/4/1.png",detail:[{spec:"250x250",thick:"50"},{spec:"300x300",thick:"60"}]},{name:"环保彩砖",background:"dist/image/product/5/1.png",detail:[{spec:"150x150",thick:"50/60"},{spec:"200x200",thick:"50/60"},{spec:"300x300",thick:"50/60"},{spec:"400x400",thick:"50/60"}]},{name:"环保彩砖",background:"dist/image/product/6/1.png",detail:[{spec:"150x150",thick:"50/60"},{spec:"200x200",thick:"50/60"},{spec:"300x300",thick:"50/60"},{spec:"400x400",thick:"50/60"}]},{name:"码头砖",background:"dist/image/product/7/1.png",detail:[{spec:"225x112.5",thick:"80"},{spec:"225x112.5",thick:"10"}]},{name:"西班牙砖",background:"dist/image/product/8/1.png",detail:[{spec:"250x250",thick:"50"},{spec:"300x300",thick:"50"},{spec:"400x400",thick:"50"}]},{name:"六角护坡砖",background:"dist/image/product/9/1.png",detail:[{spec:"400x400",thick:"150"}]},{name:"六角护坡砖",background:"dist/image/product/10/1.png",detail:[{spec:"400x400",thick:"150"}]},{name:"八字植草砖",background:"dist/image/product/11/1.png",detail:[{spec:"400x400",thick:"80"}]},{name:"双八字植草砖",background:"dist/image/product/12/1.png",detail:[{spec:"400x400",thick:"80"}]},{name:"井形植草砖",background:"dist/image/product/13/1.png",detail:[{spec:"250x190",thick:"75"}]},{name:"背心植草砖",background:"dist/image/product/14/1.png",detail:[{spec:"300x300",thick:"60"},{spec:"300x300",thick:"80"},{spec:"300x300",thick:"100"}]}],i=$($("#product-template").clone().html()),e="";$.each(c,function(t,c){i.find(".product-title").html(c.name),i.find(".product-image").attr("data-original",c.background);var a="";$.each(c.detail,function(t,c){a+="<tr><td>"+c.spec+"</td><td>"+c.thick+"</td></tr>"}),i.find(".product-spec tbody").html(a),e+=i.prop("outerHTML")}),$("#all").html(e),void 0!==$("img.lazyload").lazyload&&($("img.lazyload").lazyload({effect:"fadeIn"}),$(".lazyload-background").lazyload({effect:"fadeIn"}))});