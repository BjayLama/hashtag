 const split = new SplitType('.txt-wrapper', {
         types: 'lines, words, chars',
      });

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: '.tb-txt-wrapper',
            start: 'top 60%',
            end: '+=70%',
            pin: false,
            scrub: 0.9,
         }
      });

      tl.to(split.chars, {
         color: '#000000',
         stagger: 0.9,
      });

      $(window).on("load", function () {
         var preload = $('.preloader');


         $('body').addClass('animated--active');
         $('body').addClass('animated--swiper--active');
      });

      /**
         Splitting
      **/
      Splitting({ by: 'lines' });
      ScrollOut({ targets: '[data-client-scroll]', once: true });

      $('.word').wrap('<span></span>');
      $('[data-client-overlay]').append('<div class="client-overlay"></div>');



      /*
         - Reviews Carousel
      */
      // Reviews Carousel
      $('.js-reviews-carousel').each(function () {
         var reviewSwiper = $(this);
         var reviewSwiper_auto_val = reviewSwiper.data('autoplay');
         var reviewSwiper_loop = reviewSwiper.data('loop');
         var reviewSwiper_auto = false;

         if (reviewSwiper_auto_val > 1) {
            reviewSwiper_auto = {
               delay: reviewSwiper_auto_val,
               disableOnInteraction: false
            };
         }

         var reviewCarousel = new Swiper(reviewSwiper[0], {
            slidesPerView: 1,
            effect: 'fade',
            loop: !!reviewSwiper_loop,
            autoplay: reviewSwiper_auto,
            spaceBetween: 50,
            pagination: false,
            navigation: {
               nextEl: '.js-reviews-carousel-next',
               prevEl: '.js-reviews-carousel-prev',
            }
         });
      });

      var swiper = new Swiper(".clientSwiper", {
         slidesPerView: 1.5,
         spaceBetween: 0,
         loop: true,
         autoplay: {
            delay: 2500,
            disableOnInteraction: false,
         },
         speed: 2000,
         breakpoints: {
            640: {
               slidesPerView: 2.5,
               spaceBetween: 0,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 0,
            },
         },

      });

