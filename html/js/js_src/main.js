$(document).ready(function () {
  // 슬라이드 0번
  $('#header_slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: false,
    prevArrow: $('.slick-prev00'),
    nextArrow: $('.slick-next00'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        }
      }
    ]
  });
  // 슬라이드 1번
  $('#slide01').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: false,
    prevArrow: $('.slick-prev01'),
    nextArrow: $('.slick-next01'),
    appendDots: $('.slick-dots01'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        }
      }
    ]
  });
  // 섹션1 슬라이드 재생,정지
  $('.section01 .slick_pause').click(function () {
    $(this).hide();
    $('.section01 .slick_play').show();
    $('#slide01').slick('slickPause');
  });
  $('.section01 .slick_play').click(function () {
    $(this).hide();
    $('.section01 .slick_pause').show();
    $('#slide01').slick('slickPlay');
  });
  // 섹션2 슬라이드
  $('#slide02').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: false,
    appendDots: $('.slick-dots02'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        }
      }
    ]
  })
  // 탭 메뉴
  $('#slide02').on('init', function(event, slick) {
    $(this).parents('.section02').find('.dots_box').find('.page').append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
    $('.current').text(slick.currentSlide + 1);
    $('.total').text(slick.slideCount);
  });
  // 섹션2 슬라이드 재생,정지
  $('.section02 .slick_pause').click(function () {
    $(this).hide();
    $('.section02 .slick_play').show();
    $('#slide02').slick('slickPause');
  });
  $('.section02 .slick_play').click(function () {
    $(this).hide();
    $('.section02 .slick_pause').show();
    $('#slide02').slick('slickPlay');
  });
  $('#slide02').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.current').text(nextSlide + 1);
  });
  // 섹션3 슬라이드: SNS 채널 슬라이드 안먹히는 현상으로 main.jsp 내에 function으로 반영함.
  /*
  $('#slide03').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    vertical: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $('.slick-prev03'),
    nextArrow: $('.slick-next03'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        slidesToShow: 1,
        }
      }
    ]
  })
  */
  // 섹션4 슬라이드
  $('#slide04').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    vertical: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: $('.slick-prev04'),
    nextArrow: $('.slick-next04'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
        slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        slidesToShow: 1,
        }
      }
    ]
  })
   // 섹션5 탭
  $('.section05 .tab_title').click(function () {
    $('.section05 .tab_area >ul >li').removeClass('active');
    $(this).parent().addClass('active');
    $('.section05 .slide_area').slick('setPosition');
  });
  $('.section05 .rep .tab_title').click(function(){
    $('.section05 .slide_wrap').css("display","none");
    $('.section05 .slide_wrap.slide05').css("display","block");
    $('.section05 .slide_area').slick('setPosition');
  });
  $('.section05 .etc .tab_title').click(function(){
    $('.section05 .slide_wrap').css("display","none");
    $('.section05 .slide_wrap.slide06').css("display","block");
    $('.section05 .slide_area').slick('setPosition');
  });
  // 섹션5 슬라이더01
  $('#slide05').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    vertical: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    prevArrow: $('.slick-prev05'),
    nextArrow: $('.slick-next05'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
        slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        slidesToShow: 1,
        }
      }
    ]
  })
  // 섹션5 슬라이더02
  $('#slide06').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    vertical: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: $('.slick-prev06'),
    nextArrow: $('.slick-next06'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
        slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        slidesToShow: 1,
        }
      }
    ]
  })
// 섹션6 슬라이더01
  $('#slide07').slick({
    variableWidth: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    vertical: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    focusOnSelect:true,
    prevArrow: $('.slick-prev07'),
    nextArrow: $('.slick-next07'),
    asNavFor: '#slide07_1',
    responsive: [
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        }
      }
    ]
  })
// 섹션6 슬라이더02
  $('#slide07_1').slick({
    variableWidth: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    vertical: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    focusOnSelect:false,
    asNavFor: '#slide07',
    responsive: [
      {
        breakpoint: 768,
        settings: {
        autoplay: false,
        }
      }
    ]
  })


  // 푸터 슬라이더
  $('#slide08').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    vertical: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.slick-prev08'),
    nextArrow: $('.slick-next08'),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
        slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
        variableWidth: true,
        slidesToShow: 2,
        autoplay: false,
        }
      }
    ]
  })
  // 푸터 슬라이더 재생, 정지
  $('.ft_top .slick_pause').click(function () {
    $(this).hide();
    $('.ft_top .slick_play').show();
    $('#slide08').slick('slickPause');
  });
  $('.ft_top .slick_play').click(function () {
    $(this).hide();
    $('.ft_top .slick_pause').show();
    $('#slide08').slick('slickPlay');
  });

});