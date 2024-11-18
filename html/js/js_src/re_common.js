function isMediaScreenMaxWidth(width) {
  return window.matchMedia("(max-width: "+width+"px)").matches;
}

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


  // 검색 버튼
  $('.btn_top_search_open').on('click', function () {
    $('.btn_allmenu_close').click();
    $('.total_search').addClass('on');
    return false;
  });

  // 검색 닫기 버튼
  $('#top-close-btn').on('click', function () {
    $('.total_search').removeClass('on');
    return false;
  });

  $('.delete_term').on('click', function (e) {
    e.preventDefault();
    const $me = $(this);
    const emptyTarget = $me.attr('empty_target');
    if (emptyTarget && emptyTarget != '') {
      $(emptyTarget).val('').focus();
    }
  });

  // all menu gnb 목록 버튼
  $('.btn_allmenu_open').on('click', function () {
    $('#top-close-btn').click();

    if (isMediaScreenMaxWidth(1280)) {
      const $me = $(this);
      if ($me.hasClass('actived')) {
        $me.removeClass('actived')
      } else {
        $me.addClass('actived')
      }
    }
    $('.re_header > .re_allmenu').toggleClass('on');
  });
  $('.btn_allmenu_close').on('click', () => {
    $('.re_header > .re_allmenu').removeClass('on');
  })

  $('.re_allmenu .gnb').find('ul > li > a').filter(function () {
    return $(this).siblings('ul').length > 0;
  }).each(function (i) {
    const $me = $(this);
    //console.debug('['+(i)+']'+$me.text());
    $me.closest('li').addClass('expand');
  });

  // 메뉴 전환 및 자식 메뉴
  $('.re_allmenu .gnb li a').on('click', function (e) {
    const $me = $(this);
    const href = $me.attr('href');
    if (href != '' && href != '#') {
      return false;
    }

    if ($me.siblings('.re_gnb_depth01').length > 0) {
      const $parent = $me.parent();
      if (!$parent.hasClass('on')) {
        $me.closest('ul').find('li.on').removeClass('on');
        const subMenu = $me.siblings('ul');
        subMenu.hide();
        $parent.addClass('on');
        subMenu.fadeIn();
      }
    } else if ($me.siblings('.re_gnb_depth02, .re_gnb_depth03').length > 0) {
      const $parent = $me.parent();
      if ($parent.hasClass('on')) {
        $me.siblings('ul').slideUp(function () {
          $parent.removeClass('on');
        });
      } else {
        $me.closest('ul').find('li.on').removeClass('on').find('ul').slideUp();
        $me.siblings('ul').slideDown();
        $parent.addClass('on');
      }
    } else {
      console.warn('href is empty. target.text=' + $me.text());
    }
    return false;
  });
  
  // 유관기관 셀렉트
  const $selectBtns = $('.link_select > button');

  $selectBtns.on('click', function (e) {
    e.stopPropagation();
    const $parent = $(this).parent(); 
    if ($parent.hasClass('on')) {
      $parent.removeClass('on');
    } else {
      $('.link_select').removeClass('on');
      $parent.addClass('on');
    }
  });

  $(document).on('click', function () { // 다른영역 클릭 시 클래스 제거
    $('.link_select').removeClass('on'); 
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