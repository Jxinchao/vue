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
// 返回顶部
$(function(){
	$('.return-top').fadeOut(0);
	//为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））
	$(window).scroll(function(){
		 //创建一个变量存储当前窗口下移的高度
		var scroTop = $(window).scrollTop();
		//判断当前窗口滚动高度
		//如果大于100，则显示顶部元素，否则隐藏顶部元素

		if(scroTop>100){
			$('.return-top').fadeIn(500);
			$('.return-top img').attr('src','../images/topactive_03.gif');
		}else{
			$('.return-top').fadeOut(500);
			$('.return-top img').attr('src','../images/top_03.gif');
		}
	});

	//为返回顶部元素添加点击事件
	$('.return-top').click(function(){
		//将当前窗口的内容区滚动高度改为0，即顶部
		$("html,body").animate({scrollTop:0},"fast");
	});
})
