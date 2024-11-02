
/*drop toggle*/
function dropToggle() {
    var dropBtn = $('.drop .drop-btn');
    dropBtn.on('click',function(){
        $(this).toggleClass('on');
        $(this).closest('.drop').siblings().find('.drop-btn').removeClass('on');
        $(this).closest('.drop').siblings().find('.drop-list').slideUp();
        $(this).closest('.drop').find('.drop-list').slideToggle('fast');
    });
}
dropToggle();

/*main tab*/
function mainTab() {
    var tabBtn = $('.main-tab-nav li a');
    tabBtn.on('click',function(e){
        e.preventDefault();
        var tabCon = $(this).attr('href');
        $(tabCon).attr('tabindex',0).focus();

        $(this).parent().siblings().removeClass('on');
        $(this).parent().addClass('on');
        $(this).closest('.main-tab').find('.main-tab-con > div').removeClass('on');
        $(tabCon).addClass('on');
        $('.main-tab .slick-slider').slick('refresh');
    });
}
mainTab();

$(function(){
    //상단 검색
    $(".all_menu .btn-search").click(function(){
        if($(".search-form_wrap").css("display") === "block"){
            $(".search-form_wrap").stop().fadeOut();
        }else{
            $(".search-form_wrap").stop().fadeIn();
        }
    });

   // 모바일 전체메뉴 클릭시
   $(".open_all_menu").click(function(){
      $(".main").addClass("on");
   });
   $(".close_all_menu").click(function(){
      $(".main").removeClass("on");
   });
});

//모달창
$(function(){
   $(".btn-modal-pop").on("click", function(){

      var btn_id = $(this).attr('id');

      $('.'+btn_id).attr("tabindex", "0").show().focus();
         $('.'+btn_id).before('<div class="pop-bg"></div>');
         $('.'+btn_id).fadeIn();
      $(".btn-pop-close, .modal_close").click(function(){
         $('.'+btn_id).removeAttr("tabindex").hide();
         $('.pop-bg').remove();
         $(".btn-modal-pop#"+btn_id).focus();
      });
      $(".btn-pop-close").focus(function(){
         $('.'+btn_id).append("<a href='javascript:void(0);' class='linkAppend'>팝업닫기</a>");
         $(".linkAppend").focus(   function(){
            $('.'+btn_id).attr("tabindex", "0").focus();
            $(".linkAppend").remove();
         });
      });
   });
});
 
 
/* 기존꺼 */
/* 이메일 팝업 */
$(window).resize(function(){
	/* mGnb_control */
	var emailW = $('.email_popup');
	emailW.css('margin-left',emailW.innerWidth()/-2);
});
$(window).trigger("resize");



$(".email_open").click(function(){
	$(".email_popup").show();

	return false;
});
$(".email_close").click(function(){
	$(".email_popup").hide();
	return false;
});

/* sitemap */
var $sitemap_btn = $(".sitemap_btn"),
	$sitemap_box = $(".sitemap_box");
$sitemap_btn.click(function(){
	black_bg_over();
	$sitemap_box.stop().fadeIn();
});
$(".sitemap_close").click(function(){
	$sitemap_box.stop().fadeOut(function(){
		black_bg_leave();
	});
	$sitemap_btn.focus();
});