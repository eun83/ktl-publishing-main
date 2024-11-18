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

  // sns tap
  $('.sns_wrap [control-area]').click(function(){
    const button = $(this);
    const control_area_id = button.attr('control-area');
    if(control_area_id == ''){
      return false;
    }
    if(!button.hasClass('on')){
      const sns_wrap = button.closest('.sns_wrap');
      const control_area = $('#'+control_area_id);
      
      sns_wrap.find('.tap_sns button.on').removeClass('on');
      sns_wrap.find('.sns_part.on').removeClass('on');

      button.addClass('on');
      control_area.addClass('on');
      
    } 
    return false;
    
  });

  // visual
  $('.visual_slider').on('init', function(_event, slick){
    slick.$slider.siblings('.slider_control').find('.pagination .page_total').text(String(slick.slideCount).padStart(2, '0'));
    slick.$slider.siblings('.slider_control').find('.btn_current').click(function(){
      const $me = $(this);
      const target = $me.find('.icon_play,.icon_stop');
      if(target.hasClass('icon_play')){
        target.removeClass('icon_play').addClass('icon_stop');
        slick.$slider.slick('slickPause'); // 슬라이더 중지
      } else {
        target.removeClass('icon_stop').addClass('icon_play');
        slick.$slider.slick('slickPlay'); // 슬라이더 시작
      }
      return false;
    });
  }).slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
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
  }).on('afterChange', function (event, slick, currentSlide) {
    slick.$slider.siblings('.slider_control').find('.pagination .page_current').text(String(currentSlide+1).padStart(2, '0'));
    //slick.$slider.siblings('.slider_control').find('.pagination .page_total').text(String(slick.slideCount).padStart(2, '0'));
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

  // promotion
  $('.archive_list > .promotion > .promotion_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    vertical: false,
    prevArrow: $('.archive_list > .promotion > .sub_title > .slider_control > .btn_prev'),
    nextArrow: $('.archive_list > .promotion > .sub_title > .slider_control > .btn_next'),
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