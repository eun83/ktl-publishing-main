$(function(){
	//전체메뉴
	$(".all_menu .open_all_menu").click(function(){
		$(".all_menu_wrap").stop().fadeIn();
	});
	$(".all_menu .close_all_menu").click(function(){
		$(".all_menu_wrap").stop().fadeOut();
	});

	//반응형 gnb
	if($(window).width() < 1240){
		menuMobile();
	}else{
		menuWeb();
	}
	
	$(window).resize(function() {
		if($(window).width() < 1240){
			menuMobile();
		}else{
			menuWeb();
		}
	});

	//gnb
	$(".gnb_depth1_item").on("mouseover focusin", function () {
	$('.gnb_depth1_item').removeClass("active");
	$('.gnb_depth1_item .gnb_depth2').not($
			(this).children('.gnb_depth2')).hide();

	$(".header_inner_gnb").addClass("active");
			$(this).addClass("active");
			$(this).children(".gnb_depth2").show();
		});
		$(".header__inner").on("mouseleave", function () {
			$(".header_inner_gnb").removeClass("active");
			//$(".gnb_depth1_item").removeClass("active");
			$(".gnb_depth1_item .gnb_depth2").hide();
		});
	});



function menuWeb() {
	$(".all_depth2").show();
}

function menuMobile() {
	$(".all_depth2").hide();
	$(".all_depth1_item .depth1").click(function(){
		if($(this).next(".all_depth2").css("display") === "block"){
			return false;
		}
		$(".all_depth2").slideUp();
		$(this).next(".all_depth2").slideDown();
	});
}