var language;
var browserLang;
var is_set_lang = "Lang";
$(document).ready(function () {
  // cookies
  browserLang = window.navigator.userLanguage || window.navigator.language;

  if (parseInt(getCookie(is_set_lang)) != 1) {
    doCookieSetup(is_set_lang, 1);

    if (browserLang == "pt") {
      window.location.href = "../pt/index.html";
    } else if (browserLang == "zh-TW") {
      // window.location.href = "index.html";
      $("body").show();
    } else if (browserLang == "en") {
      window.location.href = "../index.html";
    }
  } else {
    $("body").show();
  }

  // lang
  $(".lang").on("click", function (e) {
    e.stopPropagation();
    if ($(this).hasClass("active") != true) {
      $(this).addClass("active");
      $(".lang_box").fadeIn(300);
    } else {
      $(this).removeClass("active");
      $(".lang_box").fadeOut(300);
    }
  });

  $(".nav_lang").on("click", function (e) {
    e.stopPropagation();
    if ($(this).hasClass("menu_active") != true) {
      $(this).addClass("menu_active");
      $(".nav_lang_box").fadeIn(300);
    } else {
      $(this).removeClass("menu_active");
      $(".nav_lang_box").fadeOut(300);
    }
  });

  $("body, .lang_box span, .lang_box a").on("click", function (e) {
    e.stopPropagation();
    if ($(".lang").hasClass("active") == true) {
      $(".lang").removeClass("active");
      $(".lang_box").fadeOut(300);
    }
  });
});

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}
function doCookieSetup(name, value) {
  var expires = new Date();
  //有效時間保存 2 天 2*24*60*60*1000
  expires.setTime(expires.getTime() + 604800000);
  document.cookie =
    name +
    "=" +
    escape(value) +
    ";expires=" +
    expires.toGMTString() +
    "; path=/";
}
