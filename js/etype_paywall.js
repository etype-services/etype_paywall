(function ($) {
    "use strict";
    Drupal.behaviors.etype_paywall = {
        attach: function (context, settings) {

            let paywall_replace = function(value) {
                let block = $("block-etype-paywall-etype-paywall-info");
                let html = block.html();
                let replaced = html.replace("#limit", Drupal.settings.etype_paywall.limit).replace("#number", value);
                console.log(replaced);
                block.html(replaced);
            };

            let setCookie = function(name,value,days) {
                let expires = "";
                if (days) {
                    let date = new Date();
                    date.setTime(date.getTime() + (days*24*60*60*1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "")  + expires + "; path=/";
            };

            let getCookie = function(name) {
                let nameEQ = name + "=";
                let ca = document.cookie.split(";");
                for(let i=0;i < ca.length;i++) {
                    let c = ca[i];
                    while (c.charAt(0) === " ") {c = c.substring(1,c.length);}
                    if (c.indexOf(nameEQ) === 0) {return c.substring(nameEQ.length,c.length);}
                }
                return null;
            };

            let eraseCookie = function(name) {
                document.cookie = name+"=; Max-Age=-99999999;";
            };

            if (Drupal.settings.etype_paywall.erase === 1) {
                eraseCookie("ppkcookie");
            } else {
                //console.log(Drupal.settings.etype_paywall.limit);
                let cookie = getCookie("ppkcookie");
                let value = parseInt(cookie);
                if (Number.isNaN(value)) {
                    value = 1;
                    paywall_replace(value);
                } else {
                    paywall_replace(value);
                    if (value >= Drupal.settings.etype_paywall.limit) {
                        $("#block-etype-paywall-etype-paywall").css("display", "block");
                        $('html, body').css({
                            overflow: 'hidden',
                            height: '100%'
                        });
                        $("#block-system-main").css("display", "none");
                    } else {
                        value++;
                    }
                }
                setCookie("ppkcookie", value, Drupal.settings.etype_paywall.duration);
            }
        }
    };
})(jQuery);