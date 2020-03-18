$(function() {
  //menu fixed on scroll
  var navPos, winPos, navHeight;

  function refreshVar() {
    // navPos = $('nav').offset().top;
    navPos = $(".main-header").outerHeight(true) / 2;
    // console.log("navPos", navPos);
    navHeight = $(".main-header__bar").outerHeight(true);
    // console.log("navHeight", navHeight);
  }
  refreshVar();

  $('<div class="main-header__bar--clone"></div>')
    .insertBefore(".main-header__bar")
    .css("height", navHeight)
    .hide();

  $(window).scroll(function() {
    winPos = $(window).scrollTop();
    // console.log("winPos", winPos);
    if (winPos >= navPos) {
      $(".main-header__bar").addClass("main-header__bar--fixed");
      $(".main-header__bar--clone").show();
    } else {
      $(".main-header__bar").removeClass("main-header__bar--fixed");
      $(".main-header__bar--clone").hide();
    }
  });
  //menu fixed on scroll end

  function popupCall() {
    $(".plc_popup").each(function() {
      var fancyPathHref = $(this).attr("href");
      //      console.log(fancyPathHref);

      $(this).fancybox({
        src: fancyPathHref,
        type: "inline"
      });
    });
  }
  popupCall();

  $(".plc_popup").on("click", function() {
    setTimeout(popupCall, 200);
  });

  var $form = $("form");

  //	E-mail Ajax Send
  $form.each(function() {
    //    var $this = $(this);
    $(this).validate({
      ignore: ":hidden:not(:checkbox)", //РїСЂРѕРІРµСЂСЏСЋ СЃРєСЂС‹С‚С‹Рµ РїРѕР»СЏ, РїРѕ РґРµС„РѕР»С‚Сѓ СЃРєСЂС‹С‚С‹Рµ РїРѕР»СЏ РЅРµ РІР°Р»РёРґРёСЂСѓСЋС‚СЃСЏ
      errorPlacement: function(error, element) {
        if (element.is(":checkbox")) {
          //alert('validating')
          element.parents(".form__group--checkbox").append(error);
        } else {
          error.insertAfter(element);
        }
      },

      // rules: {
      // 	phone: {
      // 		required: true,
      // 		minlength: 6,
      // 		number: true
      // 	}
      // },

      submitHandler: function(form) {
        var formData = new FormData(form);
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: formData,
          contentType: false,
          //          dataType: "json",
          processData: false,
          beforeSend: function() {
            $(form)
              .find("button")
              .attr("disabled", true);
            console.log("before send");
          }
        })
          .done(function() {
            $(form)
              .find("button")
              .attr("disabled", false);
            $(form).trigger("reset");
            $.fancybox.close();
            $(".overlay").trigger("click");
            $(".modal").fadeOut(200);

            $.fancybox.open({
              src: "#thanks",
              type: "inline"
            });

            var curFomrName = $(form)
              .find('input[name="РўРµРјР° РїРёСЃСЊРјР°"]')
              .val();
            //          console.log('curFomrName',curFomrName);
            if (curFomrName == "Arnavi Integral 3") {
              gtag("event", "send", { event_category: "form_arnavi_3" });
              ym(51485320, "reachGoal", "form_send_arnavi3");
            } else if (curFomrName == "Arnavi 5") {
              gtag("event", "send", { event_category: "form_arnavi_5" });
              ym(51485320, "reachGoal", "form_send_arnavi5");
            } else if (curFomrName == "Teltonika FMA-202") {
              gtag("event", "send", { event_category: "form_telt_202" });
              ym(51485320, "reachGoal", "form_send_telt202");
            } else if (curFomrName == "Teltonika FMB-900") {
              gtag("event", "send", { event_category: "form_telt_900" });
              ym(51485320, "reachGoal", "form_send_telt900");
            } else if (curFomrName == "Teltonika TMT-250") {
              gtag("event", "send", { event_category: "form_telt_250" });
              ym(51485320, "reachGoal", "form_send_telt250");
            } else if (curFomrName == "РЎРёРіРЅР°Р» S-2551") {
              gtag("event", "send", { event_category: "form_signal_2551" });
              ym(51485320, "reachGoal", "form_send_signal_2551");
            } else if (curFomrName == "РЎРјР°СЂС‚ S-2333A") {
              gtag("event", "send", { event_category: "form_s2333A" });
              ym(51485320, "reachGoal", "form_send_s-2333A");
            } else if (curFomrName == "РЎРјР°СЂС‚-2430") {
              gtag("event", "send", { event_category: "form_s2430" });
              ym(51485320, "reachGoal", "form_send_s-2430");
            } else if (curFomrName == "РђРІС‚РѕР¤РѕРЅ РђР»СЊС„Р°-РњР°СЏРє") {
              gtag("event", "send", { event_category: "form_send_alfa" });
              ym(51485320, "reachGoal", "form_send_alfa");
            } else if (
              curFomrName == "РђРІС‚РѕР¤РѕРЅ РђР»СЊС„Р°-РњР°СЏРє 2XL"
            ) {
              gtag("event", "send", { event_category: "form_send_alfa_2xl" });
              ym(51485320, "reachGoal", "form_send_alfa_2xl");
            } else if (
              curFomrName ==
              "РџРµСЂРІС‹Р№ Р±Р»РѕРє - РќР°С‡РЅРёС‚Рµ РєРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ СЃРІРѕР№ С‚СЂР°РЅСЃРїРѕСЂС‚ СѓР¶Рµ СЃРµРіРѕРґРЅСЏ!"
            ) {
              gtag("event", "send", { event_category: "form_first_block" });
              ym(51485320, "reachGoal", "form_first_block");
            } else if (
              curFomrName ==
              "Р‘Р»РѕРє РЎ РЅР°РјРё Р»РµРіРєРѕ - РќР°С‡РЅРёС‚Рµ РєРѕРЅС‚СЂРѕР»РёСЂРѕРІР°С‚СЊ СЃРІРѕР№ С‚СЂР°РЅСЃРїРѕСЂС‚ СѓР¶Рµ СЃРµРіРѕРґРЅСЏ!"
            ) {
              gtag("event", "send", { event_category: "form_ease_with_us" });
              ym(51485320, "reachGoal", "form_ease_with_us");
            } else if (
              curFomrName ==
              "Р—Р°РїРёС€РёС‚РµСЃСЊ РЅР° Р±РµСЃРїР»Р°С‚РЅС‹Р№ С‚РµСЃС‚-РґСЂР°Р№РІ"
            ) {
              gtag("event", "send", { event_category: "form_free_test_drive" });
              ym(51485320, "reachGoal", "form_free_test_drive");
            }

            //window.location.href = "thanks.html";
            console.log("done");
          })
          .fail(function() {
            alert("Error, email not sent !");
            console.log("error");
          });
      }
    });
  });

  $(".main-header__button-watch").on("click", function(event) {
    event.preventDefault();
    var top = $("#prdsh").offset().top;
    $("body,html").animate({ scrollTop: top }, 600);
  });

  var $modal = $(".modal");
  var $modalForm = $(".modal__form");
  var $modalProduct = $(".modal__product");
  var $sliderP = $("#sliderP");
  var $sliderR = $("#sliderR");
  var $mainContent = $(".main-content");
  var $window = $(window);

  // Quotes tab
  var qMc = $mainContent.children("section").attr("id");
  $("." + qMc + "__tab-button").click(function() {
    var ebThis = $(this);
    var eb = ebThis.attr("data-id");
    var evAct = qMc + "__tab-button--active";
    ebThis
      .addClass(evAct)
      .siblings()
      .removeClass(evAct)
      .parent()
      .next()
      .children($("." + qMc + "__list"))
      .each(function() {
        var elThis = $(this);
        var el = elThis.attr("id");
        var elActive = qMc + "__list--active";
        eb === el
          ? elThis
              .addClass(elActive)
              .siblings()
              .removeClass(elActive)
          : elThis.removeClass(elActive);
      });
  });

  // Product images tab
  var mProd = "m-product";
  var mpAct = mProd + "__item--active";
  var mProdF = $("." + mProd + "__item")
    .children("img")
    .first()
    .clone();
  $(document).ready() ? $("." + mProd + "__figure:empty").html(mProdF) : false;
  $("." + mProd + "__item").click(function() {
    var mpThis = $(this);
    var mpImgSrc = mpThis.children("img").clone();
    mpThis
      .addClass(mpAct)
      .siblings()
      .removeClass(mpAct)
      .closest($("." + mProd + "__list"))
      .prev()
      .html(mpImgSrc);
  });

  // Show Product on click
  var prod = "product";
  $("." + prod + "__slide").each(function() {
    var pThis = $(this);
    var pThisButton = pThis.find("." + prod + "__button");
    pThisButton.click(function() {
      var pThisAttr = $(this).attr("data-id");
      $modalProduct.children("." + mProd + "__prod").each(function() {
        var ttt = $(this).attr("id");
        pThisAttr === ttt
          ? $(this)
              .fadeIn(200)
              .css("display", "flex")
              .parent()
              .fadeIn(200)
              .parent()
              .fadeIn(200)
              .css("display", "flex")
          : false;
      });
    });
  });

  // Product tab
  $("." + mProd + "__tab-btn").click(function() {
    var ptThis = $(this);
    var pt = ptThis.attr("data-class");
    var ptAct = mProd + "__tab-btn--active";
    ptThis
      .addClass(ptAct)
      .siblings()
      .removeClass(ptAct)
      .closest("." + mProd + "__body")
      .children("." + mProd + "__body-cont")
      .each(function() {
        var ptcThis = $(this);
        var ptcActive = mProd + "__body-cont--active";
        ptcThis.hasClass(pt)
          ? ptcThis
              .addClass(ptcActive)
              .siblings()
              .removeClass(ptcActive)
          : ptcThis.removeClass(ptcActive);
      })
      .parent()
      .siblings("." + mProd + "__gallery")
      .children("." + mProd + "__gallery-cont")
      .each(function() {
        var ptgThis = $(this);
        var ptgActive = mProd + "__gallery-cont--active";
        ptgThis.hasClass(pt)
          ? ptgThis
              .addClass(ptgActive)
              .siblings()
              .removeClass(ptgActive)
          : ptgThis.removeClass(ptgActive);
      });
  });

  if ($window.resize() || $window.width() < 800) {
    // Show header contacts on click
    var cont = "contacts";
    $("." + cont + "__title-button--header").click(function() {
      $("." + cont + "__container--header").fadeToggle(200);
    });

    // Show footer contacts on click
    $("." + cont + "__title-button--footer").click(function() {
      $("." + cont + "__list--footer").fadeToggle(200);
    });

    // Show/hide desc prod in modal
    $("." + mProd + "__more-btn").click(function() {
      $(this)
        .siblings("." + mProd + "__description")
        .toggleClass(mProd + "__description--full");
    });
  }

  if ($window.width() < 800) {
    //    $('.contacts__container--header').fadeToggle(200);

    $(document).mouseup(function(e) {
      if (
        $(".contacts__container--header").is(":visible") &&
        $(e.target).closest(".contacts__container--header").length == 0
      ) {
        $(".contacts__container--header").fadeToggle(200);
      }
    });
  }

  // Move to first section of main content
  $(".main-header__link-more").click(function() {
    var firstSection = $mainContent.children().first();
    var top = firstSection.offset().top;
    $("body, html")
      .stop()
      .animate({ scrollTop: top }, 600);
  });

  // Show modal form on click
  $(
    ".contacts__call-button--header, .contacts__call-button--footer, .with-us__button, .main-header__button-order"
  ).click(function() {
    $modal
      .fadeIn(200)
      .css("display", "flex")
      .find($modalForm)
      .fadeIn(200)
      .find("input")
      .filter("input[type='text']")
      .focus();
  });

  $(".main-header__button-order").on("click", function() {
    var thcst = $(this).data("csubj");
    console.log("thcst", thcst);
    $(".modal__form .form__form")
      .find("input[type='hidden']")
      .val(thcst);
  });
  $(".modal__form .form__form")
    .find("input[type='hidden']")
    .val($(".main-header__button-order").data("csubj"));

  if ($window.width() < 799) {
    $("." + mProd + "__order").click(function() {
      //      var prodTitle = $(this).siblings('.' + mProd + '__body-cont').find('h2').text();
      var prodTitle = $(this)
        .parents(".m-product__body")
        .find(".m-product__body-cont--active h2")
        .text();

      $modalProduct
        .hide()
        .siblings($modalForm)
        .fadeIn(200)
        .find("input")
        .filter("input[type='text']")
        .focus()
        .parent()
        .siblings()
        .filter("input[type='hidden']")
        .val(prodTitle);
    });
  } else {
    $("." + mProd + "__order").click(function() {
      var prodTitle = $(this)
        .closest("." + mProd + "__gallery")
        .next()
        .find(".m-product__body-cont--active h2")
        .text();
      $modalProduct
        .hide()
        .siblings($modalForm)
        .fadeIn(200)
        .find("input")
        .filter("input[type='text']")
        .focus()
        .parent()
        .siblings()
        .filter("input[type='hidden']")
        .val(prodTitle);
    });
  }

  // mProd = 'm-product'
  $(".overlay").click(function() {
    $(this)
      .prev()
      .find($("." + mProd + "__prod"))
      .fadeOut(200)
      .parent()
      .fadeOut(200)
      .closest($modal)
      .find($modalForm)
      .fadeOut(200)
      .parent()
      .fadeOut(200);

    //РїСЂРё Р·Р°РєСЂС‹С‚РёРё РїРѕРїР°РїРєР° РїРѕРєР°Р·С‹РІР°СЋ РїРµСЂРІС‹Р№ СЌР»РµРјРµРЅС‚
    $(".m-product__prod").each(function() {
      $(this)
        .children(".m-product__gallery")
        .find(".m-product__gallery-cont")
        .removeClass("m-product__gallery-cont--active")
        .eq(0)
        .addClass("m-product__gallery-cont--active");

      $(this)
        .children(".m-product__body")
        .find(".m-product__body-cont")
        .removeClass("m-product__body-cont--active")
        .eq(0)
        .addClass("m-product__body-cont--active");

      $(this)
        .find(".m-product__tab .m-product__tab-btn")
        .removeClass("m-product__tab-btn--active")
        .eq(0)
        .addClass("m-product__tab-btn--active");
    });
  });

  // Hide modal form on click
  $(".modal__close-button").click(function() {
    $(".overlay").trigger("click");
  });

  // // Hide modal form on push ESC
  // $(document).keyup(function (e) {
  //   if (e.keyCode === 27) {
  //     $modal.fadeOut(200).children().not('.overlay').fadeOut(200);
  //   }
  // });

  // Mask input
  $('input[type="tel"]').mask("8 (999) 999 99 99");

  // Product slider
  $sliderP.slick({
    mobileFirst: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $(".equipment__arrows"),
    prevArrow:
      '<button class="equipment__prev" type="button">РќР°Р·Р°Рґ</button>',
    nextArrow:
      '<button class="equipment__next" type="button">Р’РїРµСЂРµРґ</button>',
    dots: false,
    responsive: [
      {
        breakpoint: 799,
        settings: "unslick"
      }
    ]
  });

  // Reviews slider
  $sliderR.slick({
    mobileFirst: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  var sl = $("#sliderR .slick-dots").children();
  sl.length <= 1 && $(window).width() > 1279
    ? sl.css("display", "none")
    : false;
});
