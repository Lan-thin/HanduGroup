$(function(){
	var time=setInterval(autoPlay,2000);
	var index=0;
	function autoPlay(){
		index++;
		if(index==3){
			index=0;
		}
		$(".index_banner>ul").find("li").eq(index).addClass("on").siblings().removeClass("on");
		$(".content").eq(index).fadeIn(1000).siblings().filter("div").fadeOut(1000);
	}
	$("ul li").mouseover(function(){
		clearInterval( time);
		index = $(this).index() - 1;
		autoPlay();
	})
	$("ul li").mouseout(function(){
		time = setInterval(autoPlay,2000);
	})
	$(".hd_compy_left").find("li").mouseover(function(){
		$(this).find("img").eq(0).hide().end().eq(1).show();
	})
	$(".hd_compy_left").find("li").mouseout(function(){
		$(this).find("img").eq(1).hide().end().eq(0).show();
	})
	$(".right_title li").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		$(".right_content>div").eq($(this).index()).show().siblings().hide();
	})
	var _index=0;
	var timer=setInterval(autoUl,3000)
	
	function autoUl(){
		_index++
		if(_index==5){
			_index=0;
		}
		$(".good_type").find("li").eq(_index).addClass("hover").siblings().removeClass("hover");
		$(".list_ul").find("ul").eq(_index).fadeIn(1500).siblings().fadeOut(1500)	
	}
	$(".good_type li").mouseover(function(){
		clearInterval(timer);
		_index = $(this).index() - 1;
		autoUl()
	})
	$(".right_hot>ul").children("li").mouseover(function(){
		$(this).find("h2").hide().siblings().show().end().end().siblings().children("ul").hide().siblings().show();
//		$(this).find("h2").hide().siblings().show();
	})
	$(".right_hot>ul").children("li").mouseout(function(){
		$(this).find("ul").show().siblings().hide();
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>780){
			$(".top").slideDown(1000)
		}else{
			$(".top").slideUp(1000);
		}
	})
})
