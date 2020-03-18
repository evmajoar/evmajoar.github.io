$(function() {

    // Show contacts on mobile
    if ($(window).width() <= 768 || $(window).resize()) {
        // Show contacts on click
        $('.mobile-contacts__button').click(function () {
            $('.mobile-contacts__modal').fadeToggle(300);
        });

        // Sticky contacts bar on mobile
        $(window).on('scroll', function() {
            var thisPos = $(this).scrollTop(); 
            var headerHeight = $('.main-header').height();
            var headerPos = $('.main-header').offset().top;
            var barHeight = $('.mobile-contacts').height();
            var stickyCoord = Math.abs(headerPos + headerHeight - barHeight);

            if (thisPos >= stickyCoord) {
                $('.mobile-contacts').addClass('mobile-contacts--sticky');
            }
            else {
                $('.mobile-contacts').removeClass('mobile-contacts--sticky');
            }
        });
    }

    // Show modal-form on click
    $('.js-modal-form').click(function() {
        $('.modal')
            .addClass('modal--slide-down')
            .children('.modal-form')
            .addClass('modal-form--show');
    });

    // Hide modal-form on click
    $('.close, .overlay').click(function() {
        $('.modal').removeClass('modal--slide-down')

        if ($('.modal-form').hasClass('modal-form--show')) {
            $('.modal-form').removeClass('modal-form--show');
        }
        else if ($('.modal-product').hasClass('modal-product--show')) {
            $('.modal-product').removeClass('modal-product--show')
        } 
    });

    // Hide modal-form on push ESC
    $(document).keyup(function(e) {
        if (e.keyCode === 27) {

            $('.modal').removeClass('modal--slide-down')

            if ($('.modal-form').hasClass('modal-form--show')) {
                $('.modal-form').removeClass('modal-form--show');

            }
            else if ($('.modal-product').hasClass('modal-product--show')) {
                $('.modal-product').removeClass('modal-product--show')
            } 

        }
    });

    // Ajax modal load on click
    $('.js-popup-product').click(function() {

        var id = $(this).data('id');

        if (id) {
            $('.modal')
            .addClass('modal--slide-down')
            .children('.modal-product')
            .addClass('modal-product--show')
            .load('products.html' + ' .' + id);
        }
    });


    // Init validate
    $('.js-form').each(function () {
        $(this).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                tel: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }
            
            },
            submitHandler: function(form) {
                $.ajax({
                    url: "mail.php",
                    type: "POST",
                    data: $(form).serialize(),
                    success: function() {
                        window.location.href = "thanks.html";
                    }
                });
            }
        });
    });

    // Init maskinput
    $('input[type="tel"]').mask("8 (999) 999 99 99");

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBTaG93IGNvbnRhY3RzIG9uIG1vYmlsZVxyXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2OCB8fCAkKHdpbmRvdykucmVzaXplKCkpIHtcclxuICAgICAgICAvLyBTaG93IGNvbnRhY3RzIG9uIGNsaWNrXHJcbiAgICAgICAgJCgnLm1vYmlsZS1jb250YWN0c19fYnV0dG9uJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcubW9iaWxlLWNvbnRhY3RzX19tb2RhbCcpLmZhZGVUb2dnbGUoMzAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU3RpY2t5IGNvbnRhY3RzIGJhciBvbiBtb2JpbGVcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdGhpc1BvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7IFxyXG4gICAgICAgICAgICB2YXIgaGVhZGVySGVpZ2h0ID0gJCgnLm1haW4taGVhZGVyJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJQb3MgPSAkKCcubWFpbi1oZWFkZXInKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIHZhciBiYXJIZWlnaHQgPSAkKCcubW9iaWxlLWNvbnRhY3RzJykuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIHZhciBzdGlja3lDb29yZCA9IE1hdGguYWJzKGhlYWRlclBvcyArIGhlYWRlckhlaWdodCAtIGJhckhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpc1BvcyA+PSBzdGlja3lDb29yZCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vYmlsZS1jb250YWN0cycpLmFkZENsYXNzKCdtb2JpbGUtY29udGFjdHMtLXN0aWNreScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnLm1vYmlsZS1jb250YWN0cycpLnJlbW92ZUNsYXNzKCdtb2JpbGUtY29udGFjdHMtLXN0aWNreScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2hvdyBtb2RhbC1mb3JtIG9uIGNsaWNrXHJcbiAgICAkKCcuanMtbW9kYWwtZm9ybScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJy5tb2RhbCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnbW9kYWwtLXNsaWRlLWRvd24nKVxyXG4gICAgICAgICAgICAuY2hpbGRyZW4oJy5tb2RhbC1mb3JtJylcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdtb2RhbC1mb3JtLS1zaG93Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlIG1vZGFsLWZvcm0gb24gY2xpY2tcclxuICAgICQoJy5jbG9zZSwgLm92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcubW9kYWwnKS5yZW1vdmVDbGFzcygnbW9kYWwtLXNsaWRlLWRvd24nKVxyXG5cclxuICAgICAgICBpZiAoJCgnLm1vZGFsLWZvcm0nKS5oYXNDbGFzcygnbW9kYWwtZm9ybS0tc2hvdycpKSB7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1mb3JtJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWZvcm0tLXNob3cnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoJCgnLm1vZGFsLXByb2R1Y3QnKS5oYXNDbGFzcygnbW9kYWwtcHJvZHVjdC0tc2hvdycpKSB7XHJcbiAgICAgICAgICAgICQoJy5tb2RhbC1wcm9kdWN0JykucmVtb3ZlQ2xhc3MoJ21vZGFsLXByb2R1Y3QtLXNob3cnKVxyXG4gICAgICAgIH0gXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIaWRlIG1vZGFsLWZvcm0gb24gcHVzaCBFU0NcclxuICAgICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xyXG5cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykucmVtb3ZlQ2xhc3MoJ21vZGFsLS1zbGlkZS1kb3duJylcclxuXHJcbiAgICAgICAgICAgIGlmICgkKCcubW9kYWwtZm9ybScpLmhhc0NsYXNzKCdtb2RhbC1mb3JtLS1zaG93JykpIHtcclxuICAgICAgICAgICAgICAgICQoJy5tb2RhbC1mb3JtJykucmVtb3ZlQ2xhc3MoJ21vZGFsLWZvcm0tLXNob3cnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoJCgnLm1vZGFsLXByb2R1Y3QnKS5oYXNDbGFzcygnbW9kYWwtcHJvZHVjdC0tc2hvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwtcHJvZHVjdCcpLnJlbW92ZUNsYXNzKCdtb2RhbC1wcm9kdWN0LS1zaG93JylcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWpheCBtb2RhbCBsb2FkIG9uIGNsaWNrXHJcbiAgICAkKCcuanMtcG9wdXAtcHJvZHVjdCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmRhdGEoJ2lkJyk7XHJcblxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAkKCcubW9kYWwnKVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ21vZGFsLS1zbGlkZS1kb3duJylcclxuICAgICAgICAgICAgLmNoaWxkcmVuKCcubW9kYWwtcHJvZHVjdCcpXHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnbW9kYWwtcHJvZHVjdC0tc2hvdycpXHJcbiAgICAgICAgICAgIC5sb2FkKCdwcm9kdWN0cy5odG1sJyArICcgLicgKyBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIEluaXQgdmFsaWRhdGVcclxuICAgICQoJy5qcy1mb3JtJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS52YWxpZGF0ZSh7XHJcbiAgICAgICAgICAgIHJ1bGVzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAzXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbihmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJtYWlsLnBocFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6ICQoZm9ybSkuc2VyaWFsaXplKCksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJ0aGFua3MuaHRtbFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBJbml0IG1hc2tpbnB1dFxyXG4gICAgJCgnaW5wdXRbdHlwZT1cInRlbFwiXScpLm1hc2soXCI4ICg5OTkpIDk5OSA5OSA5OVwiKTtcclxuXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
