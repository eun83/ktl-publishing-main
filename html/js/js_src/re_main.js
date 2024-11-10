$(document).ready(function () {

  // visual
  $('.visual_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    vertical: false,
    prevArrow: $('.visual > .slider_control > .btn_prev'),
    nextArrow: $('.visual > .slider_control > .btn_next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }
    ]
  });

  // banner notice
  $('.banner_notice > .banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    vertical: false,
    prevArrow: $('.banner_notice > .banner_tit > .slider_control > .btn_prev'),
    nextArrow: $('.banner_notice > .banner_tit > .slider_control > .btn_next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }
    ]
  });

  // banner news
  $('.banner_news > .banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    vertical: false,
    prevArrow: $('.banner_news > .banner_tit > .slider_control > .btn_prev'),
    nextArrow: $('.banner_news > .banner_tit > .slider_control > .btn_next'),
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