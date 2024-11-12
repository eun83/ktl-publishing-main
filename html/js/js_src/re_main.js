$(document).ready(function () {

  // board tap
  $('.board_wrap [control-area]').click(function(){
    const button = $(this);
    const control_area_id = button.attr('control-area');
    if(control_area_id == ''){
      return false;
    }
    if(!button.hasClass('on')){
      const board_wrap = button.closest('.board_wrap');
      const control_area = $('#'+control_area_id);
      
      board_wrap.find('.board_tap button.on').removeClass('on');
      board_wrap.find('.board_part.on').removeClass('on');

      button.addClass('on');
      control_area.addClass('on');

      
    } 
    return false;
    
  });

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
    prevArrow: $('.banner_notice > .right_tit > .slider_control > .btn_prev'),
    nextArrow: $('.banner_notice > .right_tit > .slider_control > .btn_next'),
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
    prevArrow: $('.banner_news > .right_tit > .slider_control > .btn_prev'),
    nextArrow: $('.banner_news > .right_tit > .slider_control > .btn_next'),
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