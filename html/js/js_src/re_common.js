$(document).ready(function () {
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