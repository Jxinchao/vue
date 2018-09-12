$(function () {
    $('#dowebok').fullpage({
        'navigation': true,
        afterLoad: function(anchorLink, index){
            if(index == 2){
              $('.two_bootom img:eq(0)').addClass('animated bounceInLeft');
              $('.two_bootom img:eq(2)').addClass('animated bounceInLeft');
              $('.two_bootom img:eq(1)').addClass('animated bounceInRight');
              $('.two_bootom img:eq(3)').addClass('animated bounceInRight');
              $(".two .rec").addClass('rectangle')
            }
            if(index == 3){
              $(".three .rec").addClass('rectangle');
              $(".three .recs").addClass('rectangles');
              $(".three p:eq(0)").addClass('animated bounceInDown')
              $(".three li:eq(0)").addClass('animated bounceInLeft')
              $(".three li:eq(1)").addClass('animated bounceInRight')
            }
           if(index == 4){
             $('.four p').addClass('animated fadeInLeftBig');
             $('.four div').addClass('animated fadeInLeftBig')
           }
           if(index == '5'){
              $('.five div').addClass('animated bounceIn')
           }
            // if(index == '6'){
            //     $('.banner6-left').addClass('animated rollIn')
            //     $('.banner6-right').addClass('animated rollIn')
            // }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $(".two .rec").removeClass('rectangle');
                $('.two_bootom img:eq(0)').removeClass('animated bounceInLeft');
                $('.two_bootom img:eq(2)').removeClass('animated bounceInLeft');
                $('.two_bootom img:eq(1)').removeClass('animated bounceInRight');
                $('.two_bootom img:eq(3)').removeClass('animated bounceInRight');
            }
            if(index == '3'){
               $(".three .rec").removeClass('rectangle');
               $(".three .recs").removeClass('rectangles');
               $(".three p:eq(0)").removeClass('animated bounceInDown')
               $(".three li:eq(0)").removeClass('animated bounceInLeft')
               $(".three li:eq(1)").removeClass('animated bounceInRight')
            }
           if(index == '4'){
               $('.four p').removeClass('animated fadeInLeftBig');
         	   $('.four div').removeClass('animated fadeInLeftBig')
           }
           if(index == '5'){
               $('.five div').removeClass('animated bounceIn');
           }
      }
    });
});
