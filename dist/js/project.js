$(function(){if(void 0!==$("img.lazyload").lazyload&&($("img.lazyload").lazyload({effect:"fadeIn"}),$(".lazyload-background").lazyload({effect:"fadeIn"})),$('[data-toggle="tooltip"]').tooltip(),$(".carousel .inner-item").lazyload({skip_invisible:!0,effect:"fadeIn"}),$(".carousel").on("slid.bs.carousel",function(){$("html,body").trigger("scroll")}),$('#doc-menu-detail a[data-toggle="tab"]').on("shown.bs.tab",function(a){$(".carousel .inner-item").lazyload({effect:"fadeIn"}),$(".lazyload-background").lazyload({effect:"fadeIn"})}),""!==window.location.search){var a=window.location.search.split("=")[1];if(void 0===a)return;a=parseInt(a)-1,$("#doc-menu-detail li:eq("+a+") a").tab("show")}var o=new WOW({boxClass:"animCss"});o.init()});