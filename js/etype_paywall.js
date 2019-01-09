(function ($) {
    "use strict";
    Drupal.behaviors.etype_paywall = {
        attach: function (context, settings) {

            var setCookie = function(name,value,days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days*24*60*60*1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "")  + expires + "; path=/";
            };
            var getCookie = function(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(";");
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0) === " ") {c = c.substring(1,c.length);}
                    if (c.indexOf(nameEQ) === 0) {return c.substring(nameEQ.length,c.length);}
                }
                return null;
            };
            var eraseCookie = function(name) {
                document.cookie = name+"=; Max-Age=-99999999;";
            };

            var cookie = getCookie("ppkcookie");
            console.log(cookie);
            setCookie("ppkcookie","1",7);

        }
    };
})(jQuery);