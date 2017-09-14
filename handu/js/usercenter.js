$(function(){
	$(".menu>dt").click(function(){
		if($(this).children("span").hasClass("arrow")){
			$(this).next("dd").hide()
			$(this).children("span").removeClass("arrow").addClass("hid_arrow")
		}else{
			$(this).next("dd").show()
			$(this).children("span").removeClass("hid_arrow").addClass("arrow")
		}
	})
	var arr=getCookie("shoplist");
	console.log(arr)
	var html="";
	var list_num=arr.length;
	switch(list_num){
		case 0:$(".mycar_none").addClass("n0");break;
		case 1:$(".mycar_none").addClass("n1");break;
		case 2:$(".mycar_none").addClass("n2");break;
		case 3:$(".mycar_none").addClass("n3");break;
		default:$(".mycar_none").addClass("n4");break;
	}
	for(var i in arr){
		if(i<4){
		html+=`<li>
				<a href="">
					<img src="${arr[i].src}"/>
					<ul>
						<li class="name">${arr[i].name}</li>
						<li class="car_price">￥<span>${arr[i].price} </span><del>${arr[i].oldprice}</del></li>
						<li class="dif">省<span>${arr[i].oldprice-arr[i].price}</span></li>
					</ul>
				</a>
			</li>`
		}
		
	}
	$(".mycar_list").children("ul").html(html);
	var html1="";
	$.ajax({
			type:"get",
			url:"js/guesslike.json",
			success:function(res){
				for(var i in res){
					html1+=`<li>
          						<a href="">
          							<img src="images/banner/${res[i].src}"/>
          							<ul>
          								<li class="name">${res[i].name}</li>
										<li class="car_price">售价：<span>${res[i].price}</span></li>
          							</ul>
          						</a>
          					</li>`
					
				}	
				$(".content").children("ul").html(html1);
			}		
	})
	
	$(".left").click(function(){
		$(".content>ul").animate({"marginLeft":-758},2500,function(){
			$(".content>ul").css("margin-left",0);
			for(var i=0;i<4;i++){
				$(".content>ul>li").eq(0).appendTo(".content>ul")
			}
		})
	})
	$(".right").click(function(){
		for(var i=0;i<4;i++){
				$(".content>ul>li:last").prependTo($(".content>ul"))
			}
		$(".content>ul").css("margin-left",-758);
		$(".content>ul").animate({"marginLeft":0},2500)
	})
})
