$(function() {

    var $modal = $('.modal');
    var $modalForm = $('.modal__form');
    var $modalProduct = $('.modal__product');
    var $sliderP = $('#sliderP');
    var $sliderR = $('#sliderR');
    var $mainContent = $('.main-content');
    var $window = $(window);

    // Quotes tab
    var qMc = $mainContent.children('section').attr('id');
    $('.' + qMc + '__tab-button').click(function () {
        var ebThis = $(this); var eb = ebThis.attr('data-id'); var evAct = qMc + '__tab-button--active';
        ebThis.addClass(evAct).siblings().removeClass(evAct).parent().next().children($('.' + qMc + '__list'))
            .each(function () {
                var elThis = $(this); var el = elThis.attr('id'); var elActive = qMc + '__list--active';
                eb === el ? elThis.addClass(elActive).siblings().removeClass(elActive) : elThis.removeClass(elActive);
            });
    });

    // Product images tab
    var mProd = 'm-product'; var mpAct = mProd + '__item--active'; var mProdF = $('.' + mProd + '__item').children('img').first().clone();
    $(document).ready() ? $('.' + mProd + '__figure:empty').html(mProdF) : false;
    $('.' + mProd + '__item').click(function () {
        var mpThis = $(this); var mpImgSrc = mpThis.children('img').clone();
        mpThis.addClass(mpAct).siblings().removeClass(mpAct).closest($('.' + mProd + '__list')).prev().html(mpImgSrc);
    });

    // Show Product on click
    var prod = 'product';
    $('.' + prod + '__slide').each(function () {
        var pThis = $(this); var pThisButton = pThis.find('.' + prod + '__button');
        pThisButton.click(function () {
            var pThisAttr = $(this).attr('data-id');
            $modalProduct.children('.' + mProd + '__prod').each(function () {
                var ttt = $(this).attr('id');
                pThisAttr === ttt ? $(this).fadeIn(200).css('display', 'flex').parent().fadeIn(200).parent().fadeIn(200).css('display', 'flex') : false;
            });

        });
    });

    // Product tab
    $('.' + mProd + '__tab-btn').click(function () {
        var ptThis = $(this); var pt = ptThis.attr('data-class'); var ptAct = mProd + '__tab-btn--active';
        ptThis.addClass(ptAct).siblings().removeClass(ptAct).closest('.' + mProd + '__body').children('.' + mProd + '__body-cont')
            .each(function () {
                var ptcThis = $(this); var ptcActive = mProd + '__body-cont--active';
                ptcThis.hasClass(pt) ? ptcThis.addClass(ptcActive).siblings().removeClass(ptcActive) : ptcThis.removeClass(ptcActive);
            }).parent().siblings('.' + mProd + '__gallery').children('.' + mProd + '__gallery-cont')
            .each(function () {
                var ptgThis = $(this); var ptgActive = mProd + '__gallery-cont--active';
                ptgThis.hasClass(pt) ? ptgThis.addClass(ptgActive).siblings().removeClass(ptgActive) : ptgThis.removeClass(ptgActive);
            });
    });

    if ($window.resize() || $window.width() < 800) {
        // Show header contacts on click
        var cont = 'contacts';
        $('.' + cont + '__title-button--header').click(function () {
            $('.' + cont + '__container--header').fadeToggle(200);
        });

        // Show footer contacts on click
        $('.' + cont + '__title-button--footer').click(function () {
            $('.' + cont + '__list--footer').fadeToggle(200);
        });

        // Show/hide desc prod in modal
        $('.' + mProd +'__more-btn').click(function () {
            $(this).siblings('.' + mProd +'__description').toggleClass(mProd +'__description--full');
        });
    }

    // Move to first section of main content
    $('.main-header__link-more').click(function () {
        var firstSection = $mainContent.children().first(); var top = firstSection.offset().top;
        $('body, html').stop().animate({scrollTop: top}, 600);
    });

    // Show modal form on click
    $('.contacts__call-button--header, .contacts__call-button--footer, .with-us__button').click(function () {
        $modal.fadeIn(200).css('display', 'flex').find($modalForm).fadeIn(200).find('input').filter('input[type=\'text\']').focus();
    });

    if ($window.width() < 799) {
        $('.' + mProd + '__order').click(function () {
            var prodTitle = $(this).siblings('.' + mProd + '__body-cont').find('h2').text();
            $modalProduct.hide().siblings($modalForm).fadeIn(200).find('input').filter('input[type=\'text\']').focus().parent().siblings().filter('input[type=\'hidden\']').val(prodTitle);
        });
    }
    else {
        $('.' + mProd + '__order').click(function () {
            var prodTitle = $(this).closest('.' + mProd + '__gallery').next().find('h2').text();
            $modalProduct.hide().siblings($modalForm).fadeIn(200).find('input').filter('input[type=\'text\']').focus().parent().siblings().filter('input[type=\'hidden\']').val(prodTitle);

        });
    }

    // Hide modal form on click
    $('.modal__close-button').click(function () {
        $(this).parent().fadeOut(200).parent().fadeOut(200);
    });

    $('.overlay').click(function () {
        $(this).prev().find($('.' + mProd + '__prod')).fadeOut(200).parent().fadeOut(200).closest($modal).find($modalForm).fadeOut(200).parent().fadeOut(200);
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
        appendArrows: $('.equipment__arrows'),
        prevArrow: '<button class="equipment__prev" type="button">Назад</button>',
        nextArrow: '<button class="equipment__next" type="button">Вперед</button>',
        dots: false,
        responsive: [
            {
                breakpoint: 799,
                settings: 'unslick'
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

    var sl = $('#sliderR .slick-dots').children();
    sl.length <= 1 && $(window).width() > 1279 ? sl.css('display', 'none') : false

});