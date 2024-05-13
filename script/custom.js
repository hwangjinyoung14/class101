$(function(){
  /* Include Files */
    /* Mega Navigation : Mobile & PC Width Check */
    $(window).resize(function(){
      if($(window).innerWidth() > 767) {
        $('.trigger').click(function(){
          $(this).toggleClass('active');
          $('.mega-navi').stop().slideToggle(300);
        })
        $('section').click(function(){
          $('.mega-navi').stop().slideUp(300);
        });
      }

      else if($(window).innerWidth() < 767) {
        $('.trigger').click(function(){
          $('.mega-navi').animate({'left': 0}, 300);
        });
        $('section, .btn-mega-navi-close').click(function(){
          $('.mega-navi').animate({'left': -300}, 300);
        });
      }
    }).resize();

    /* Mega Navi */
    $('.mega-navi-item b').click(function(){
      $('.mega-navi-item-wrap').slideUp(200);
      $(this).next().stop().slideDown(200);
      $(this).parent().siblings().children('b').removeClass('active');
    })

    /* Footer LNB */
    $('.link-item-title').click(function(){
      $(this).next().stop().slideToggle(200);
    })
    /* Company Info Trigger */
    $('.company-info-trigger').click(function(){
      $('address').toggle();
    })

    /* Header Login Modal */
    $('.btn-login, .login-member a').click(function(){
      $('.member-login-overlay').fadeIn();
      $('body').addClass('active');
    });
    $('.member-login .btn-modal-close').click(function(){
      $('.member-login-overlay').fadeOut();
      $('body').removeClass('active');
    });

    /* After Login Header UI */
    $('.btn-member-primary').click(function(){
      $('.member-login-overlay').fadeOut();
      $('.user-alarm').show();
      $('.login-register-buttons').hide();
      $('body').removeClass('active');
    })

  /* The Final Countdown */
  $("#early-bird-countdown")
  .countdown("2023/11/01", function(event) {
    $(this).html(
      event.strftime('<b>종료까지</b> %D일 <em>%H</em>:<em>%M</em>:<em>%S</em> 남음')
    );
  });

  /* Front Event Banner */
  $('.close-buttons a').click(function(){
    $('.front-event-banner').fadeOut();
  });

  /* Front Slider */
  $('.front-slider-items').slick({
    infinite: true,
    arrows: false, 
    dots: false, 
    autoplay: true, 
    autoplaySpeed: 3000,
    fade: false, 
    speed: 300,
    pauseOnHover: true 
  });

  /* Focus Class Slider */
  $('.focus-class-items').slick({
    slidesToShow: 4, // 최초에 보이는 개수
    slidesToScroll: 2, // 슬라이드할 때 몇개씩 슬라이드할지 개수
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: false,
          arrows: false
        }
      }
    ]
  });

});
