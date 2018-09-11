$(function(){
	$(".menu").click(function(){
		event.stopPropagation();
		$(".menus").slideDown();
		$(this).find("img").attr("src","images/menu_active_03.png")
		$(this).find("img").css({"position":"absolute","z-index":"4","right":"50px","top":"50px"})
	})
	$(".menus div").click(function(){
		event.stopPropagation();
	})
	$(document).click(function(){
		$(".menus").slideUp();
		$(".menu").find("img").attr("src","images/logo_05.png")
		$(".menu").find("img").css({"position":"static","z-index":"4"})
	})
})
$(function () {
		$('#dowebok').fullpage({
				'navigation': true,
				 anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
				 afterLoad: function(anchorLink, index){
						if(index == 2){
							$('.banner2').find('p').addClass('animated lightSpeedIn delay-4s');
							$('.banner2 .about_title').addClass('animated bounceInDown delay-4s');
							$('.banner2 a').addClass('animated bounceInUp delay-4s');
						}
						if(index == 3){
							$('.banner-wd').addClass('animated rotateInDownLeft')
						}
						if(index == 4){
							$('.banner4 img').addClass('animated flipInX')
						}
						if(index == '5'){
								$('.league-list a').addClass('animated pulse')
						}
						if(index == '6'){
								$('.banner6-left').addClass('animated rollIn')
								$('.banner6-right').addClass('animated rollIn')
						}
				},
				onLeave: function(index, direction){
							if(index == '2'){
									$('.banner2').find('p').removeClass('animated lightSpeedIn delay-4s')
									$('.banner2 .about_title').removeClass('animated bounceInDown delay-4s');
									$('.banner2 a').removeClass('animated bounceInUp delay-4s');
							}
							if(index == '3'){
								 $('.banner-wd').removeClass('animated rotateInDownLeft')
							}
							if(index == '4'){
									$('.banner4 img').removeClass('animated flipInX')
							}
							if(index == '5'){
									$('.league-list a').removeClass('animated pulse')
							}
							if(index == '6'){
									$('.banner6-left').removeClass('animated rollIn')
									$('.banner6-right').removeClass('animated rollIn')
							}
			}

		});
		// $('.banner6').on('mousemove', function(e) {
		//   var offsetX = e.clientX / window.innerWidth - 0.5,
		//       offsetY = e.clientY / window.innerHeight - 0.5;
		//   $('.banner6').css('left', -18 - 40 * offsetX).css('top', 25 - 40 * offsetY);
		//   $('.banner6').css('left', -18 + 40 * offsetX).css('top', 75 + 40 * offsetY);
		// });

});
$(function(){
	var swiper1 = new Swiper('.banner1 .swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay: 3000,
			loop:true,
			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
					swiperAnimateCache(swiper); //隐藏动画元素
					swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd: function(swiper){
				 swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			}
	});
	var swiper2 = new Swiper('.banner3 .swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay: 3000,
			loop:true,
			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
					swiperAnimateCache(swiper); //隐藏动画元素
					swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd: function(swiper){
				 swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
			}
	});
	var swiper3 = new Swiper('.banner6 .swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay: 25001111111111
	});
	var hg = $(".banner1").height();
	$(".text1").height(hg);
	var hg1 = $(".banner3").height();
	$(".banner3-text").height(hg1);
	var hg1 = $(".banner3").height();
	$(".vetically").height(hg1)
})
