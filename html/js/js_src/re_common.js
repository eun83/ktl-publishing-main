$(document).ready(function () {
  // web
  $('.re_gnb > .inner_wrap > .flex_wrap > .gnb > li').on('mouseover click', function () {
    $('.re_gnb').addClass('on');

    // return false;
  });
  $('.re_gnb > .inner_wrap > .flex_wrap > .gnb > li').mouseleave(function () {
    $('.re_gnb').removeClass('on');
  });


  const menuItems = document.querySelectorAll('.re_gnb > .inner_wrap > .flex_wrap > .gnb > li');

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
      this.classList.add('on');
    });

    item.addEventListener('mouseleave', function () {
      this.classList.remove('on');
    });

    item.addEventListener('click', function () {
      this.classList.add('on');
    });
  });




  
  // top_banner
  $('.top_banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: false,
    prevArrow: $('.top_banner_prev'),
    nextArrow: $('.top_banner_next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }
    ]
  });

});