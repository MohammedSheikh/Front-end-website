$(document).ready(function() {

          /* Sticky Nav bar */

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

        /* Navigation scroll */

          $('.js--scroll-to-plans').click(function () {
             $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 3000);
          });

          $('.js--scroll-to-start').click(function () {
             $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 2000);
          });


          $('.js--how-it-works').click(function () {
             $('html, body').animate({scrollTop: $('.js--section-works-step').offset().top}, 2000);
          });

          $('.js--location').click(function () {
             $('html, body').animate({scrollTop: $('.js--located-cities').offset().top}, 2000);
          });

          $('.js--sign-up').click(function () {
             $('html, body').animate({scrollTop: $('.js--sign-me-up').offset().top}, 2000);
          });


    });
