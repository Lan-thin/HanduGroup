$(function(){
		$.ajax({
			type:"get",
			url:"js/goods.json",
			success:function(res){
				var html="";
				for(var i in res.new.list){
					var ch=res.new.list[i];
					html+=`<li class="new_box"><a href="">
							<img src="images/goods/${ch.src}" alt="" />
							<ul >
								<li class="good_name"> ${ch.name}</li>
								<li><span class="new_price">${ch.price}</span> 
								<span class="old_price">${ch.oldprice}</span>
								</li>
							</ul>
						</a>
						</li>`
				}
				$(".good_new").find("ul").html(html);
			}
		})
		$.ajax({
			type:"get",
			url:"js/goods.json",
			success:function(res){
				var html="";
				for(var i in res.hot.list){
					var ch=res.hot.list[i];
					html+=`<li class="new_box"><a href="">
							<img src="images/goods/${ch.src}" alt="" />
							<ul >
								<li class="good_name"> ${ch.name}</li>
								<li><span class="new_price">${ch.price}</span> 
								<span class="old_price">${ch.oldprice}</span>
								</li>
							</ul>
						</a>
						</li>`
				}
				$(".good_hot").find("ul").html(html);
			}
		})
//		放大镜
	$(".detail_top_left>ul").find("li").click(function(){
		$(this).css("border-color","#C80A28").siblings().css("border-color","#fff");
		$("#good_small").find("img").eq($(this).index()).css("z-index",1).siblings().css("z-index",0);
	})
	$("#good_small img").mouseover(function(){
		$("#good_big").show();
		$("#mask").show();
		var index=$(this).index();
		$("#good_big img").eq(index).css("z-index",1).siblings().css("z-index",0);
		$("#mask").mousemove(function(e){
			var e=e||event
			var disx=e.pageX-$("#good_small").offset().left-$(this).width()/2;
 			var disy=e.pageY-$("#good_small").offset().top-$(this).height()/2;
			var maxLeft=$("#good_small").width()-$(this).width();
 			var maxTop=$("#good_small").height()-$(this).height();
 			x=disx<0?0:(disx>maxLeft?maxLeft:disx);
 			y=disy<0?0:(disy>maxTop?maxTop:disy);
 			$(this).css({"left":x,"top":y});
 			var bigLeft=x*800/480;
 			var bigTop=y*800/480;
 			$("#good_big>img").eq(index).css({"left":-bigLeft,"top":-bigTop})
		})
	})
	$("#good_small img").mouseout(function(){
		$("#good_big").hide();
		$("#mask").hide();
	})
//	$(".good_detail_buy>ul").find(".size").children("li").click(function(){
//		$(this).addClass("select").siblings().removeClass("select");
//	})
	
	$("#size>li").click(function(){
			
			if($(this).attr("class")=="select"){
				$(this).removeClass("select")
			}else{
				$(this).addClass("select").siblings().removeClass("select");
			}
	})
	$("#color>li").click(function(){
		if($(this).attr("class")=="select"){
				$(this).removeClass("select")
			}else{
				$(this).addClass("select").siblings().removeClass("select");
			}
	})
	var flagCheck=false;
	$(".size>li").click(function(){
		$("#size>li").each(function(index,ele){
			
			if($(this).hasClass("select")){
				flagCheck=true;
				$("#select_size").html($(this).html());
				return false;
			}else{
				
				flagCheck=false;
				$("#select_size").html("");
			}
		})
		$("#color>li").each(function(index,ele){
			if($(this).hasClass("select")){
				flagCheck=true;
				$("#select_color").html($(this).html());
				return false;
			}else{
				$("#select_color").html("");
			}
		})
		if(flagCheck){
			$("#select_type").html("你已经选择");
		}else{
			$("#select_type").html("你未选择");
		}
	})
	$("#subtract").click(function(){
		var num=$("#num").val();
		num--;
		if(num<1){
			num=1
		}
		$("#num").val(num)
	})
	$("#add").click(function(){
		var num=$("#num").val();
		num++;
		$("#num").val(num)
	})
	$(".addCar").click(function(){
		if($("#select_size").html().length!=0&&$("#select_color").html().length!=0){
			var arr=[];
			var flag=true;
			
			var _json={
				brand:"HSTYLE女装",
				src:$("#small_img").find("img").eq(0).attr("src"),
				code:$(".code").html(),
				name:$("#name").html(),
				oldprice:$("#oldprice").html(),
				price:$("#price").html(),
				color:$("#select_color").html(),
				size:$("#select_size").html(),
				num:$("#num").val(),
				active:$("#active").html()		
			}
			console.log(_json.name)
			var cookInfo=getCookie("shoplist");
			if(cookInfo.length!=0){
				arr=cookInfo;
				for(var i in arr){
					if(arr[i].code==_json.code&&arr[i].color==_json.color&&arr[i].size==_json.size){
						arr[i].num=parseInt(arr[i].num+_json.num);
						flag=false;
					}
				}	
			}
			if(flag){
					arr.push(_json);
				}
			setCookie("shoplist",JSON.stringify(arr));
			
		}
		location.href="shopcar.html";
	})
})