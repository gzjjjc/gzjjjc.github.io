$(function(){if($('[data-toggle="tooltip"]').tooltip(),""!==window.location.search){var o=window.location.search.split("=")[1];if(void 0===o)return;o=parseInt(o),$("#doc-menu-detail li:eq("+o+") a").tab("show")}void 0!==$("img.lazyload").lazyload&&($("img.lazyload").lazyload({effect:"fadeIn"}),$(".lazyload-background").lazyload({effect:"fadeIn"})),$('a[data-toggle="tab"]').on("shown.bs.tab",function(o){$(window).trigger("scroll")}),$("#emf-form").on("submit",function(o){o.preventDefault();var a=$("#element_0").val().trim();if(""===a)return void window.alert("请输入您的邮箱");var t=$("#element_1").val().trim();return""===t?void window.alert("请输入您想咨询的业务或反馈建议"):void(window.location="http://mail.xnote.pub/send/index?fc=gzjjjc&f="+a+"&m="+t)})});