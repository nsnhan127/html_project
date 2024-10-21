//SLIDE FULL PAGE

if ($("#galleryImage").length) {
  $("#galleryImage").justifiedGallery({
    rowHeight: 240,
    lastRow: "nojustify",
    margins: 10,
  });
}

$(".detail-service .list-navigation .list-menu li").click(function () {
  $(".detail-service .list-navigation .list-menu li").removeClass("active");
  $(this).addClass("active");
  var op = $(this).find("a").attr("href");
  var opOffset = $(op).offset().top;

  if ($("html").hasClass("isDesktop")) {
    if ($(".p-header").hasClass("is-sticky")) {
      var headerH = $(".p-header").outerHeight();
      getValue = parseInt(opOffset - headerH * 1.3);
    } else {
      var headerH = $(".p-header").outerHeight();
      getValue = parseInt(opOffset - headerH * 1.8);
    }
  } else {
    if ($(".p-header").hasClass("is-sticky")) {
      var headerH = $(".p-header").outerHeight();
      getValue = parseInt(opOffset - headerH * 1.25);
    } else {
      var headerH = $(".p-header").outerHeight();
      getValue = parseInt(opOffset - headerH * 2.2);
    }
  }

  $("html,body").animate({ scrollTop: getValue });
  return false;
});

if ($("#tabmenu").length) {
  $(".detail-service #tabmenu ul li").click(function () {
    $(".detail-service #tabmenu ul li").removeClass("active");
    $(this).addClass("active");
    var op = $(this).find("a").attr("href");
    var opOffset = $(op).offset().top;
    var headerH = $("#tabmenu").outerHeight();
    if ($("html").hasClass("isDesktop")) {
      if ($(".p-header").hasClass("is-sticky")) {
        getValue = parseInt(opOffset - headerH * 1.3);
      } else {
        getValue = parseInt(opOffset - headerH * 1.8);
      }
    } else {
      if ($(".p-header").hasClass("is-sticky")) {
        getValue = parseInt(opOffset - headerH * 1.25);
      } else {
        getValue = parseInt(opOffset - headerH * 2.2);
      }
    }

    $("html,body").animate({ scrollTop: getValue });
    return false;
  });
}

$(document).ready(function () {
  includeHTML();

  $("#nav-fullscreen .mega-menu-link").click(function () {
    //$(".mega-submenu").removeClass("open");
    //$(".mega-menu-link").removeClass("active");

    var _li = $(this).parent();
    var _submenu = _li.find(".mega-submenu").first();
    $(this).toggleClass("active");

    if (_submenu.hasClass("open")) {
      _submenu.removeClass("open");
    } else {
      _submenu.addClass("open");
    }
  });

  $(".btn-toggle").click(function () {
    $(".btn-toggle").removeClass("btn-toggle--active");
    $(this).addClass("btn-toggle--active");
  });

  $(".more-icon").click(function () {
    var _top = $(this).parent().parent().offset().top;
    var _boxPro = $(this).parent().parent().find(".box-list");

    $("html, body").animate(
      {
        scrollTop: _top - 100,
      },
      1000
    );
    if (!_boxPro.hasClass("expand")) {
      $(".scolldown").addClass("active");
      setTimeout(function () {
        $(".scolldown").removeClass("active");
      }, 3000);
    } else {
      $(".scolldown").removeClass("active");
    }
  });

  $(".main-navigation__itemtoggle").click(function () {
    $(this).parent().toggleClass("main-navigation__item--state-active");

    if ($(this).parent().hasClass("main-navigation__item--state-active")) {
      $(this).empty().text("-");
      $(this).parent().find("ul").first().addClass("active");

      var level = $(this).parent().find("ul").first().data("depth");
      if ($("ul[data-depth='" + (level + 1) + "']").length > 0) {
        $("ul[data-depth='" + (level + 1) + "']").addClass("active");
      }
    } else {
      $(this).empty().text("+");
      $(this).parent().find("ul").first().removeClass("active");
    }
  });

  $(".icon-menu").click(function () {
    $(".function-link").addClass("active");
  });
  $(".icon-close").click(function () {
    $(".function-link").removeClass("active");
  });

  $(".icon-search").click(function () {
    $(".header_search_content").toggleClass("on");
    if ($(".header_search_content").hasClass("on")) {
      $(this).find(".zmdi-search").addClass("hidden");
      $(this).find(".zmdi-close").removeClass("hidden");
    } else {
      $(this).find(".zmdi-search").removeClass("hidden");
      $(this).find(".zmdi-close").addClass("hidden");
    }
  });

  $(".close-search").click(function () {
    $(".header_search_content").removeClass("on");
    $(".icon-search .zmdi-search").removeClass("hidden");
    $(".icon-search .zmdi-close").addClass("hidden");
  });

  $(".see-more").click(function () {
    var text = $(this).parent().find("div");
    text.toggleClass("truncated");

    if (text.hasClass("truncated")) {
      $(this).empty().text("» Show all");
      text.attr("style", "max-height: 300px;");
    } else {
      $(this).empty().text("» Show less");
      text.attr("style", "max-height: none;");
    }
  });

  $(".facet-group").click(function () {
    $(this).toggleClass("facet-group--state-active");
  });

  $(".filters-toggle").click(function () {
    $(".product-search-filters").toggleClass(
      "product-search-filters--visibility-visible"
    );

    if (
      $(".product-search-filters").hasClass(
        "product-search-filters--visibility-visible"
      )
    ) {
      $("body").css("overflow", "hidden");
    } else {
      $("body").css("overflow", "auto");
    }
  });

  $(".filter-modal-toggle").click(function () {
    $(".product-search-filters").removeClass(
      "product-search-filters--visibility-visible"
    );
    $("body").css("overflow", "auto");
  });
});

$(".slide-banner").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 9000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 845,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 620,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});

$(".slide-teachers").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 9000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        //centerMode: true,
      },
    },
    {
      breakpoint: 845,
      settings: {
        arrows: false,
        slidesToShow: 2,
        //centerMode: true,
      },
    },
    {
      breakpoint: 620,
      settings: {
        arrows: false,
        slidesToShow: 2,
        //centerMode: true,
      },
    },
  ],
});
$(".slide-2rows").slick({
  rows: 2,
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
});

$("#sliderfor").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slide-nav",
});
$("#slidenav").slick({
  dots: false,
  arrows: true,
  speed: 800,
  asNavFor: ".slide-for",
  focusOnSelect: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 845,
      settings: {
        arrows: true,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 620,
      settings: {
        arrows: true,
        slidesToShow: 2,
      },
    },
  ],
});

if ($(".date-picker").length > 0) {
  $(".date-picker").datepicker({
    autoclose: true,
    startDate: "0d",
    leftArrow: '<i class="zmdi zmdi-chevron-left"></i>',
    rightArrow: '<i class="zmdi zmdi-chevron-right"></i>',
  });
}

if ($(".date-picker-v2").length > 0) {
  $(".date-picker-v2").datepicker({
    autoclose: true,
    leftArrow: '<i class="zmdi zmdi-chevron-left"></i>',
    rightArrow: '<i class="zmdi zmdi-chevron-right"></i>',
  });
}

$("#ring-bell").click(function () {
  $(".btn-bell").toggleClass("active");
});

// var currentDate = moment();
// $("input[name='date-range']").daterangepicker({
//   singleDatePicker: true,
//   format: "DD/MM/yyyy",
//   startDate: currentDate,
//   endDate : currentDate
// }, function(start, end, label) {
// //console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
// }).on('cancel.daterangepicker', function (ev, picker) {
//   //do something
// }).on('apply.daterangepicker', function (ev, picker) {
//   //do something
// });

window.onclick = function (event) {
  if (!event.target.matches("#userBox")) {
    $(".box-side-menu").removeClass("active");
  }
  if (!event.target.matches("#ring-bell")) {
    $(".btn-bell").removeClass("active");
  }
};

if ($("#userBox").length > 0) {
  document
    .getElementById("userBox")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });
}

if ($("#ring-bell").length > 0) {
  document
    .getElementById("ring-bell")
    .addEventListener("click", function (event) {
      event.stopPropagation();
    });
}

$("input[name='paymethod']").click(function () {
  var _value = $(this).data("check");
  if (_value == 1) {
    $("#lBanks").removeClass("d-none");
  } else {
    $("#lBanks").addClass("d-none");
  }
});

function openMenu() {
  if ($(".box-search-mobile").hasClass("active")) {
    $(".box-search-mobile").removeClass("active");
    $("body").removeClass("freeze");
  } else {
    $(".box-search-mobile").addClass("active");
    $("body").addClass("freeze");
  }
}

function openMenuUser() {
  if ($(".box-side-menu").hasClass("active")) {
    $(".box-side-menu").removeClass("active");
  } else {
    $(".box-side-menu").addClass("active");
  }
}

function openFilter() {
  if ($(".cate-search-mobile").hasClass("active")) {
    $(".cate-search-mobile").removeClass("active");
    $("body").removeClass("freeze");
  } else {
    $(".cate-search-mobile").addClass("active");
    $("body").addClass("freeze");
  }
}

function setlazy(el, eff, delay) {
  el.addClass("lazyloading");
  el.attr("data-eff", eff);
  el.attr("data-delay", delay);
}
//scroll top
function page_scroll2top() {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    "1000"
  );
}
//tabmenu
var tabmenu_service = $("#tabmenu");
// sticky menu top
var menutop_sticky = $(".sticky_header");
if (menutop_sticky.length) {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      menutop_sticky.addClass("is-sticky");
    } else {
      menutop_sticky.removeClass("is-sticky");
    }

    var sidebarTop = 0;
    if ($(".section-links").length) {
      sidebarTop = $(".section-links").offset().top;
    }
    var windowScroll = $(window).scrollTop();
    var contactBox = 0;
    if ($("#lienhe").length) {
      contactBox = $("#lienhe").offset().top;
    }
    var div_height = $("#sidebar").outerHeight();
    var padding = 0;
    if ($("html").hasClass("isDesktop") || $("html").hasClass("isTablet")) {
      if (windowScroll + div_height > contactBox - 100) {
        //$("#sidebar").removeClass("fixed");
        $("#sidebar").css({
          top: (windowScroll + div_height - contactBox + padding) * -1,
        });
      } else if (windowScroll > sidebarTop - 100) {
        $("#sidebar").addClass("fixed");
        $("#sidebar").removeAttr("style");
      } else {
        $("#sidebar").removeClass("fixed");
        $("#sidebar").removeAttr("style");
      }
    }

    if (tabmenu_service.length) {
      var tabmenuTop = $("#sectionTab").offset().top;

      if (windowScroll > tabmenuTop - 100) {
        tabmenu_service.addClass("posfixed");
        $(".sticky_header").hide();
      } else {
        tabmenu_service.removeClass("posfixed");
        $(".sticky_header").show();
      }
    }
  });
}
//sub menu sticky on sroll down
function substicky(el) {
  if (el.length) {
    var offsettop = el.offset().top;
    var h_footer = $(".p-footer").height();
    var h_sec2top = $(".section_2").offset().top;
    var h_sec5 = $(".section_5").height();
    var h_el = el.height();
    var scrollHeight = $(document).height();
    $(window).scroll(function () {
      //el.css('min-height', el.height());
      if ($(window).scrollTop() > h_sec2top - 200) {
        el.addClass("poster-sticky");
        el.removeClass("turn-off");
        menutop_sticky.addClass("fade-out");
      } else {
        el.removeClass("poster-sticky");
        menutop_sticky.removeClass("fade-out");
      }
      if (
        $(window).scrollTop() >
        scrollHeight - h_footer - h_sec5 - h_el - 300
      ) {
        el.addClass("turn-off");
        menutop_sticky.removeClass("fade-out");
      }
    });
  }
}

// gọi hàm sticky sub menu
$(window).on("load", function (e) {
  var sticky_submenu = $(".poster-side");
  substicky(sticky_submenu);
});

$(".dropdown-submenu h3 .icon_drop_2").on("click", function (e) {
  //if($("body").hasClass('isMobile')){
  $(this).parent().next("ul").toggle();
  $(this).parent().parent().siblings().find("ul").fadeOut(0);
  e.stopPropagation();
  e.preventDefault();
  //}
});

var delfilter = $(".del_txt");
if (delfilter.length)
  delfilter.on("click", function () {
    $(this).parent().remove();
  });

var delall = $(".del_all_txt");
if (delall.length)
  delall.on("click", function () {
    $(this).parent().find("span").remove();
  });

$(".close_filter_tool, .done_filter_tool").on("click", function () {
  $(this).closest(".filter_tool").removeClass("active");
  $("body").removeClass("ovh");
});

$(".open_filter_tool").on("click", function () {
  $(this).closest(".filter_tool").addClass("active");
  $("body").addClass("ovh");
});

$(".btnSearch").on("click", function () {
  $(".search_btn").addClass("active");
});
$(".btn-search").on("click", function () {
  if ($(".search_btn").hasClass("active")) {
    $(".search_btn").removeClass("active");
  }
});

// var img = $("#img_01");
// img.elevateZoom();

//pass the images to Fancybox
$(".imgthumb").bind("click", function (e) {
  $(".imgthumb").removeClass("active");
  $(this).addClass("active");
  var imglink = $(this).data("imglg");
  var img = $("#img_01");
  img.attr("src", imglink);
  img.attr("data-zoom-image", imglink);

  // //Remove
  // $('.zoomContainer').remove();
  // img.removeData('elevateZoom');
  // img.removeData('zoomImage');
  //
  // //Re-create
  // //img.elevateZoom();
  // img.elevateZoom();
});
function numberOnly(input) {
  var regex = /[^0-9]/gi;
  input.value = input.value.replace(regex, "");
}

$(".chat-launcher").on("click", function () {
  $(".chat-launcher").toggleClass("active");
  $(".list-socials-corner").toggleClass("active");
  $("#shadowSocial").toggleClass("active");
});
$("#shadowSocial").click(function () {
  if ($("#shadowSocial").hasClass("active")) {
    $("#shadowSocial").removeClass("active");
  }
  if ($(".chat-launcher").hasClass("active")) {
    $(".chat-launcher").removeClass("active");
  }
  if ($(".list-socials-corner").hasClass("active")) {
    $(".list-socials-corner").removeClass("active");
  }
});

new WOW().init();

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function resizeNav() {
  // Set the nav height to fill the window
  $("#nav-fullscreen").css({ height: window.innerHeight });

  // Set the circle radius to the length of the window diagonal,
  // this way we're only making the circle as big as it needs to be.
  var radius = Math.sqrt(
    Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)
  );
  var diameter = radius * 2;
  $("#nav-overlay").width(diameter);
  $("#nav-overlay").height(diameter);
  $("#nav-overlay").css({ "margin-top": -radius, "margin-left": -radius });
}

// Set up click and window resize callbacks, then init the nav.
$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $("#nav-toggle, #nav-overlay, #nav-fullscreen").toggleClass("open");
  });

  $(".more-icon").click(function () {
    $(this).toggleClass("open");
    $(this).parent().parent().find(".box-list").toggleClass("expand");
  });

  $(window).resize(resizeNav);

  resizeNav();

  // window.setTimeout(function() {
  //    $("#nav-toggle").click();
  // }, 1000)
});
