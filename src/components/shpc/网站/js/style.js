/**
 * Created by Administrator on 2016/10/16.
 */
$(function () {
    $(".nav-user").hover(function () {
        $(this).css("background-color", "#0D929E");
        $(".user-list").show();
        $(".user-list li").hover(function () {
            $(this).siblings().css("background-color", "#0D929E")
            $(this).css("background-color", "#0D828D")
        })
    }, function () {
        $(this).css("background-color", "#0EA6B2");
        $(".user-list").hide();
    });
    $(".nav-news").hover(function () {
        $(this).css("background-color", "#0D929E");
        $(".new-list").show()
    }, function () {
        $(this).css("background-color", "#0EA6B2");
        $(".new-list").hide();
    })
    $(".nav-help").hover(function () {
        $(this).css("background-color", "#0D929E");
        $(".help-list").show();
        $(".help-list li").hover(function () {
            $(this).siblings().css("background-color", "#0D929E")
            $(this).css("background-color", "#0D828D")
        })
    }, function () {
        $(this).css("background-color", "#0EA6B2");
        $(".help-list").hide();
    });
    //左侧侧边栏选中效果
    $('.lf-pd').click(function () {
        var display = $(this).children().next().css('display');

        if (display == 'none') {
            $('.lf-con').css('display', 'none');
            $(this).children().next().css('display', 'block');
            $('.lf-pd').removeClass('lf-pd-active');
            $(this).addClass('lf-pd-active');
        } else {
            $(this).children().next().css('display', 'none');
        }
    })
    $(".sl-tx").unbind("mouseover");
    $(".sl-tx").unbind("mouseout");
    $(".last-bg").unbind("mouseover");
    $(".last-bg").unbind("mouseout");

    $(".nv-lf").click(function () {
        if ($(this).hasClass("aa")) {
            $(this).removeClass("aa");
            wd = parseInt($(".nav-lf").width());
            $(".nav-lf").css("width", "60px");
            $(".content").css("padding-left", "60px");
            $(".lf-tx").hide();
            $(".lf-down").hide();
            $(".lf-con").css("position", "absolute");
            $(".lf-con").css("width", "170px");
            $(".lf-con").css("left", "55px");
            $(".last").css("display", "block");
            $(".lf-con").css("top", "54px");
            $(".last-bg").css("display", "block");
            $(".lf2").css("top", "108px")
            $(".lf3").css("top", "162px")
            $(".lf4").css("top", "216px")
            $(".lf5").css("top", "270px")
            $(".lf6").css("top", "324px")
            $(".lf7").css("top", "378px")

            $(".lf-pd").mouseover(function () {
                $(this).siblings().css("background", "#E8E8E8");
                $(this).css("background", "#C1C1C1")
                $(this).find(".lf-con").show();
            }).mouseout(function () {
                $(this).find(".lf-con").hide()
            });

        } else {
            $(this).addClass("aa");
            $(".content").css("padding-left", "170px");
            $(".nav-lf").css("width", "170px");
            $(".lf-tx").show();
            $(".lf-down").show();
            $(".lf-con").css("position", "relative");
            $(".lf-con").css("width", "170px");
            $(".lf-con").css("left", "0px");
            $(".last-bg").css("display", "none");
            $(".lf-con").css("top", "0px");
            $(".nav-lf").unbind("hover");
            $(".lf-pd").unbind("mouseover");
            $(".lf-pd").unbind("mouseout");
        }
        if($(".nav-lf").width() <100){
            $(".lf-con").hide();
        }
    });
    var heg = $(document).height();
    var navhg = $(".navbar").height();
    var list = heg - navhg;
    if ($(document).width() < 1379) {
        var heg = $(document).height();
        var navhg = $(".navbar").height();
        var list = heg - navhg - 300;
        $(".content").css("height", "600px");
        $(".content").css("overflow-y", "auto");
    }
//商品列表选择

    $(".sel-con").click(function () {

        if ($(this).hasClass("add")) {
            $(this).removeClass("add");
            $(this).parent().find(".sel-list").show();
            $(this).parent().siblings().find(".sel-list").hide();
            $(this).parent().siblings().find(".sel-con").addClass("add")
        } else {
            $(this).addClass("add");
            $(this).parent().find(".sel-list").hide()

        };
    });
    $(".sel-tx11").click(function () {
        var tx = $(this).children().html();
        $(this).parent().parent().parent().find(".sel-tx-lf").html(tx);
        $(".sel-list").hide();
       $(this).parent().parent().parent().find(".sel-con").addClass("add")
    });
    $(".fm-st").click(function(){
        $(".sel-list").hide();
        $(".sel-con").addClass("add")
    })
    $(".op").click(function () {
        $(".sel-list").hide()
        if ($(".re-con").css("display") == "none") {
            $(".re-con").show();
        } else {
            $(".re-con").hide();
        }
    });
    $(".re-show").hover(function () {
        if ($(".re-show-list").css("display") == "none") {
            $(".re-show-list").show();
        }
    }, function () {
        if ($(".re-show-list").css("display") == "block") {
            $(".re-show-list").hide();
        }
    })


//    当前类型是否选中
    $(".re-sh1 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-img").show();
        }else{
            $(".tb-img").hide();
        }
    });
    $(".re-sh2 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-name").show();
        }else{
            $(".tb-name").hide();
        }
    });
    $(".re-sh3 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-gg").show();
        }else{
            $(".tb-gg").hide();
        }
    });
    $(".re-sh4 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-bm").show();
        }else{
            $(".tb-bm").hide();
        }
    });
    $(".re-sh5 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-tx").show();
        }else{
            $(".tb-tx").hide();
        }
    });
    $(".re-sh6 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-nm").show();
        }else{
            $(".tb-nm").hide();
        }
    });
    $(".re-sh7 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-pp").show();
        }else{
            $(".tb-pp").hide();
        }
    });
    $(".re-sh8 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-ly").show();
        }else{
            $(".tb-ly").hide();
        }
    });
    $(".re-sh9 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-xs").show();
        }else{
            $(".tb-xs").hide();
        }
    });
    $(".re-sh10 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-qd").show();
        }else{
            $(".tb-qd").hide();
        }
    });
    $(".re-sh12 input").click(function () {
        if ($(".re-sh1 input").is(":checked")) {
            $(".tb-cz").show();
        }else{
            $(".tb-cz").hide();
        }
    });
    $(".checkAll").click(function(){
        if($(this).is(":checked")){
           $(this).parents().find(".ace").prop("checked",true);
        }else{
            $(this).parents().find(".ace").prop("checked",false);

        }
    })
//    底部翻页
    var wd = $(".nav-bot").width();
    var lf = $(".bot-lf").width();
    var rt = $(".bot-rt").width();

    var wd1 = wd - lf - rt - 20;
    $(".bot-con").css("width", wd1);
    $(".bot-list").css("width", "582px");
//    点击选择


//    新增商品
    $(".ad-con").click(function () {
        $(this).parent().parent().parent().siblings().find(".ad-lt").hide();
        $(this).parent().parent().parent().siblings().find(".ad-con").addClass("add")
        if($(this).hasClass("add")){
            $(this).removeClass("add");
            $(this).parent().find(".ad-lt").show();
            $(this).parent().parent().parent().find(".ad-text").show();
        }else{
            $(this).addClass("add");
            $(this).parent().find(".ad-lt").hide();
        }
    });
    $(".sel-tx11").click(function(){
        var tx = $(this).children().html();
        $(this).parent().parent().parent().find(".ad-tx-lf").html(tx);
        $(this).parent().parent().hide()
        $(this).parent().parent().parent().find(".ad-con").addClass("add")

    })

    $(".ad-tx-rt").click(function () {
        $(this).parent().find(".ad-tx-lf").html("请选择类目");
        $(this).hide()
    });
//    按钮切换
    $(".check").click(function () {
        if ($(this).hasClass("ck-add")) {
            $(this).removeClass("ck-add");
            $(this).css("background", "url(../img/checkBg.png) no-repeat");
            $(this).css("background-size", "auto 22px");
            $(this).css("background-position", "right 0");
            $(this).css("width", "62px");
            $(this).css("height", "22px");
            $(".ad-sn").hide();
            $(".new-add").hide();

        } else {
            $(this).addClass("ck-add");
            $(this).css("background", "url(../img/checkBg.png) no-repeat");
            $(this).css("background-size", "auto 22px");
            $(this).css("background-position", "left 0");
            $(this).css("width", "62px");
            $(this).css("height", "22px");
            $(".ad-sn").show();
            $(".new-add").show();
        }

    });

//    新增规格值
    $(".ad-text").click(function () {
        $(this).next().show()
    });
    $(".ad-qx").click(function () {
        $(this).parent().hide()
    });
    $(document).on("click", ".ad-sn-list", function () {

    })
    $(".ad-qd").bind("click",function () {

        var con = $(this).parent().find(".ad-ipt").val();
        $(".ad-gz").append("" +
            "<li class='ad-lt-con'>" +
            "<span class='ad-con-tx'>" +
            "</span>" +
            "<span class='ad-dt'>x</span>" +
            "</li>")
    });
    $(".ad-sn-list").bind("click",function () {
        $(".ad-ap").append('' +
            '<div class="ad-bg">' +
            ' <div class="ad-sel add"> ' +
            '<div class="ad-con"> ' +
            '<span class="ad-tx1 sel-cl1">' +
            ' <div class="ad-tx-lf">' +
            ' <div class="ad-tx-lf">请选择品牌</div> ' +
            '<div class="ad-tx-rt"></div> ' +
            '</div>' +
            ' </span>' +
            ' <span class="ad-tx2">' +
            '<img src="../img/sl-down.png" class="sel-img" alt=""/>' +
            '</span> ' +
            '</div> ' +
            '<div class="ad-lt">' +
            ' <div class="sel-search">' +
            ' <input type="text"/> ' +
            '</div>' +
            ' <ul>' +
            ' <li class="sel-tx11">' +
            '<a>﹂(11无类目)</a>' +
            '</li>' +
            ' <li class="sel-tx11">' +
            '<a>﹂(1无类目)</a>' +
            '</li> <li class="sel-tx11">' +
            '<a>﹂(1无类目)</a>' +
            '</li>' +
            ' <li class="sel-tx11">' +
            '<a>﹂(1无类目)</a>' +
            '</li>' +
            ' </ul>' +
            ' </div>' +
            ' </div>' +
            '<div class="ad-del">x</div> ' +
            '</div>')
    });

//    品牌js
    $(".ad-add").click(function () {
        $(this).parent().parent().find(".ad-new1").show();
        $(this).parent().css("margin-top", "5px");
        $(this).parent().prev().css("margin-top", "5px")
    });
    $(".ad-qx1").click(function () {
        $(this).parent().hide();
        $(this).parent().css("margin-top", "5px");
    });
    $(".ad-qd1").click(function () {
        $(this).parent().hide();
        $(this).parent().css("margin-top", "5px");
    });
//    规格删除按钮
    $(".ad-del").click(function () {
        $(this).parent().hide()
    });

//    添加会员
    $(".ad-pr-tx").click(function () {
        $(".ad-pr-con ul").show();
    });
    $(".as-list").click(function () {
        var html = $(this).html();
        $(this).parent().parent().find(".ad-pr-tx").html(html);
        $(".ad-ls ul").hide()
    });
    $(".ad-yr-con").click(function () {
        $(this).parent().find(".year").show()
    });
    $(".as-list1").click(function () {
        var html = $(this).html();
        $(this).parent().parent().find(".ad-yr-con").html(html);
        $(".year").hide()
    })
    $(".ad-yr-moon").click(function () {
        $(this).parent().find(".moon").show()
    });
    $(".as-list2").click(function () {
        var html = $(this).html();
        $(this).parent().parent().find(".ad-yr-moon").html(html);
        $(".moon").hide()
    })
    $(".ad-yr-day").click(function () {
        $(this).parent().find(".day").show()
    });
    $(".as-list3").click(function () {
        var html = $(this).html();
        $(this).parent().parent().find(".ad-yr-day").html(html);
        $(".day").hide()
    });
    $(".new-cl").click(function () {
        $(this).children().show();
    })
    $(".ne-qd").click(function () {
        $(this).children().hide();

    });
    $(".ne-qx").click(function () {
        $(".ne-qx").hide()
    });
//    登陆动画
    var ddLoginCenter = function () {
        var contObj = $(".dd-login-main");
        var winH = $(window).height();
        var contH = contObj.outerHeight();
        var footH = $(".dd-footer").outerHeight();

        if (winH > contH + footH) {
            $(".dd-login-wrap").height(winH - footH - 2)
            contObj.css({
                marginTop: (winH - contH - footH) / 2
            })
        } else {
            $("body").addClass("login-main-big")
        }
    }
    ddLoginCenter();

    $(".dd-log-lf").click(function () {
        $(".dd-number").show();
        $(".dd-iphone").hide();
        $(".dd-log-lf").addClass("dd-log-br")
        $(".dd-log-rt").removeClass("dd-log-br")
    });
    $(".dd-log-rt").click(function () {
        $(".dd-number").hide();
        $(".dd-iphone").show();
        $(".dd-log-rt").addClass("dd-log-br")
        $(".dd-log-lf").removeClass("dd-log-br")
    });

    $(".ur-btn").click(function () {
        $(".ur-fm").hide();
        $(".ur-ret").show();
    })
    $(".ug-btn").click(function () {
        $(".ug-fm").hide();
        $(".ug-zc").show();
    });
//    首页选择弹框
    var wid = $(document).width();
    var hg = $(document).height();
    $(".id-alert").css("width", wid);
    $(".id-alert").css("height", hg);
    var con = $(".id-at-con").width();
    var jl = (wid - con) / 2;
    if ($(document).width() > 1366) {
        $(".id-at-con").css("margin-left", jl)
        $(".id-at-con").css("margin-top", "200px");
        $(".id-at-con1").css("margin-left", jl)
        $(".id-at-con1").css("margin-top", "200px");
        $(".id-at-con2").css("margin-left", jl)
        $(".id-at-con2").css("margin-top", "200px");
    } else {
        $(".id-at-con").css("margin-left", jl)
        $(".id-at-con").css("margin-top", "35px");
        $(".id-at-con1").css("margin-left", jl)
        $(".id-at-con1").css("margin-top", "35px");
        $(".id-at-con2").css("margin-left", jl)
        $(".id-at-con2").css("margin-top", "35px");
    }


    $(".id-at-btn1").click(function () {
        $(".id-at-con").hide();
        $(".id-at-con1").show();
    });
    $(".id-at-btn2").click(function () {
        $(".id-at-con1").hide();
        $(".id-at-con2").show();
    });
    $(".back1").click(function () {
        $(".id-at-con1").hide();
        $(".id-at-con").show();
    });
    $(".back2").click(function () {
        $(".id-at-con2").hide();
        $(".id-at-con1").show();
    });
    $(".id-at-btn3").click(function () {
        $(".id-alert").hide()
    });
    $(".id-at-sl").click(function () {
        $(this).siblings().children().removeClass("id-shop-bg");
        $(this).children().addClass("id-shop-bg");
    });
    //选择行业click效果
    $(".id-at-list").click(function () {
        $(this).siblings().addClass("id-at-bg");
        $(this).siblings().find(".id-img-sh").show();
        $(this).siblings().find(".id-img-hd").hide();
        $(this).removeClass("id-at-bg");
        if ($(this).index() == 0) {
            $(this).addClass("id-at-bg1");
        };
        if ($(this).index() == 1) {
            $(this).addClass("id-at-bg2");
        };
        if ($(this).index() == 2) {
            $(this).addClass("id-at-bg3");
        };
        if ($(this).index() == 3) {
            $(this).addClass("id-at-bg4");
        };
        if ($(this).index() == 4) {
            $(this).addClass("id-at-bg5");
        };
        if ($(this).index() == 5) {
            $(this).addClass("id-at-bg6");
        };
        if ($(this).index() == 6) {
            $(this).addClass("id-at-bg7");
        };
        if ($(this).index() == 7) {
            $(this).addClass("id-at-bg8");
        };
        if ($(this).index() == 8) {
            $(this).addClass("id-at-bg9");
        };
        if ($(this).index() == 9) {
            $(this).addClass("id-at-bg10");
        };
        if ($(this).index() == 10) {
            $(this).addClass("id-at-bg11");
        };
        if ($(this).index() == 11) {
            $(this).addClass("id-at-bg12");
        };
        $(this).find(".id-img-sh").hide();
        $(this).find(".id-img-hd").show();
    });
//    选择行业hover效果
    $(".id-at-list").hover(function () {
        $(this).addClass("id-at-hv");
    }, function () {
        $(this).addClass("id-at-hv");

    })
//    代客下单
    $(".or-st-con").click(function () {
        if ($(this).hasClass("add")) {
            $(this).removeClass("add")
            $(".or-list").show();
        } else {
            $(this).addClass("add")
            $(".or-list").hide();
        }
    });
    $(".or-lt-con").click(function () {
        var tx = $(this).html();
        $(this).parent().parent().find(".or-st-con").html(tx);
    });
    $(document).ready(function () {
        $(".box").orso({
            boxl: ".box_l",//左边大盒子
            boxr: ".box_r",//右边大盒子
            boxlrX: "li",//移动小盒子
            boxon: "choose",//点击添加属性
            idclass: true,//添加的属性是否为class//true=class; false=id;
            boxlan: "#left",//单个向左移动按钮
            boxran: "#right",//单个向右移动按钮
            boxalllan: "#allleft",//批量向左移动按钮
            boxallran: "#allright",//批量向右移动按钮
        })
    });
    ;
    (function ($) {
        $.fn.orso = function (opints) {
            var preset = {
                boxl: null,
                boxr: null,
                boxlrX: null,
                boxon: null,
                idclass: true,
                boxlan: null,
                boxran: null,
                boxalllan: null,
                boxallran: null,
            };
            var outside = $.extend(true, preset, opints);
            if (outside.idclass) {
                idclass = "."
            } else {
                idclass = "#"
            }
            ;
            $(this).find(outside.boxlrX).on("click", function () {
                $(this).addClass(outside.boxon).siblings().removeClass(outside.boxon)
            });
            $(outside.boxl).mouseover(function () {
                $(outside.boxl).find(outside.boxlrX).on("dblclick", function () {
                    $(this).appendTo(outside.boxr).siblings().removeClass(outside.boxon);
                });
            });
            $(outside.boxr).mouseover(function () {
                $(outside.boxr).find(outside.boxlrX).on("dblclick", function () {
                    $(this).appendTo(outside.boxl).siblings().removeClass(outside.boxon);
                });
            });
            function left() {
                var isno = $(outside.boxr).find(outside.boxlrX).hasClass(outside.boxon);
                var find = $(outside.boxr).children(idclass + outside.boxon);
                if (isno) {
                    find.appendTo(outside.boxl).siblings().removeClass(outside.boxon);
                } else {
                    alert("请选择一个！");
                }
                ;
            };
            function right() {
                var isno = $(outside.boxl).find(outside.boxlrX).hasClass(outside.boxon);
                var find = $(outside.boxl).children(idclass + outside.boxon);
                if (isno) {
                    find.appendTo(outside.boxr).siblings().removeClass(outside.boxon);
                } else {
                    alert("请选择一个！");
                }
                ;
            };
            function top() {
                var isno = $(outside.boxr).find(outside.boxlrX).hasClass(outside.boxon);
                var index = $(outside.boxr).children(idclass + outside.boxon).index();
                var top = $(outside.boxr).children(outside.boxlrx).eq(index);
                if (isno) {
                    if (index > 0) {
                        $(outside.boxr).children(outside.boxlrx).eq(index - 1).before(top);
                    } else {
                        alert("已经是第一个了！！")
                    }
                    ;
                } else {
                    alert("请选择一个！");
                }
                ;
            };
            function bottom() {
                var isno = $(outside.boxr).find(outside.boxlrX).hasClass(outside.boxon);
                var len = $(outside.boxr).children(outside.boxlrX).length;
                var index = $(outside.boxr).children(idclass + outside.boxon).index();
                var top = $(outside.boxr).children(outside.boxlrx).eq(index);
                if (isno) {
                    if (index + 1 < len) {
                        $(outside.boxr).children(outside.boxlrx).eq(index + 1).after(top);
                    } else {
                        alert("已经是最后一个了！！")
                    }
                    ;
                } else {
                    alert("请选择一个！");
                }
                ;
            };
            $(outside.boxlan).on("click", function () {
                left();
            });
            $(outside.boxran).on("click", function () {
                right();
            });

            function allleft() {
                $(outside.boxr).find(outside.boxlrX).appendTo(outside.boxl);
            };
            function allright() {
                $(outside.boxl).find(outside.boxlrX).appendTo(outside.boxr);
            };
            function alltop() {
                var isno = $(outside.boxr).find(outside.boxlrX).hasClass(outside.boxon);
                var index = $(outside.boxr).children(idclass + outside.boxon).index();
                var top = $(outside.boxr).children(outside.boxlrx).eq(index);
                if (isno) {
                    if (index > 0) {
                        $(outside.boxr).prepend(top);
                    } else {
                        alert("当前已经是首个了！！")
                    }
                    ;
                } else {
                    alert("请选择一个！");
                }
            };
            function allbottom() {
                var isno = $(outside.boxr).find(outside.boxlrX).hasClass(outside.boxon);
                var len = $(outside.boxr).children(outside.boxlrX).length;
                var index = $(outside.boxr).children(idclass + outside.boxon).index();
                var top = $(outside.boxr).children(outside.boxlrx).eq(index);
                if (isno) {
                    if (index + 1 < len) {
                        $(outside.boxr).append(top);
                    } else {
                        alert("当前已经是最后了！！")
                    }
                    ;
                } else {
                    alert("请选择一个！");
                }
                ;
            };
            $(outside.boxalllan).on("click", function () {
                allleft();
            });
            $(outside.boxallran).on("click", function () {
                allright();
            });
        };
    })(jQuery);


//    存取cookie
    function SetCookie(side, value) {
        var Days = 30;
        var exp = new Date();    //new Date("December 31, 9998");
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ';expires=' + exp.toGMTString() + ';path=/' + ';domaim=http://localhost:63342/' + ':secure';
    }
    function getCookie(name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) return unescape(arr[2]);
        return null;

    }

    function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

});