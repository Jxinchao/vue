$(function(){
	$(".menu").click(function(){
		event.stopPropagation();
		$(".menus").slideDown();
		$(this).find("img").attr("src","../images/menu_active_03.png")
		$(this).find("img").css({"position":"absolute","z-index":"4","right":"50px","top":"50px"})
	})
	$(".menus div").click(function(){
		event.stopPropagation();
	})
	$(document).click(function(){
		$(".menus").slideUp();
		$(".menu").find("img").attr("src","../images/logo_05.png")
		$(".menu").find("img").css({"position":"static","z-index":"4"})
	})
})
