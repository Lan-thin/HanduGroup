$(function(){
	var arr=getCookie("shoplist");
	var html="";
	var lihtml="";
	var divhtml="";
	var num=0;
	var totle_price=0;
	if(arr.length==0){
		html=`				<div class="car_none">
					<img src="images/shopcar/gouwuc.png"/>
					<p>您的购物车内没有商品，请挑选心仪的商品吧！</p>
					<span><a href="">去挑选喜欢的商品</a></span>
				</div>`
	}else{
		for(var i in arr){
			num+=parseInt(arr[i].num);
			oneprice=Number(arr[i].price)*num;
			totle_price+=oneprice;
			lihtml+=`<li>
						<h3>品牌：${arr[i].brand}</h3>
						<ul class="car_good">
							<li class="car_good_detail">
								<a href=""><img src="${arr[i].src}"/></a>
								<div class="car_good_name">
									<a href="">${arr[i].name}</a>
									<p>颜色:<span class="good_color">${arr[i].color}</span>尺码:<span class="good_size">${arr[i].size}</span></p>
								</div>
							</li>
							<li class="car_good_price">
								<div>
									<del>¥${arr[i].oldprice}</del><br />
									¥<span>${arr[i].price}</span>
								</div>
								
							</li>
							<li class="car_good_number">
								<span id="car_subtract">
									-
								</span>
								<input type="text" value="${arr[i].num}"/>
								<span id="car_increase">
									+
								</span>
							</li>
							<li class="car_good_money">
								¥${totle_price}
							</li>
							<li class="car_good_del">
								<div class="del_middle">
									<a href="">移入收藏夹</a><br />
									<a href="javascript:void(0)" class="del">删除</a>
								</div>
							</li>
							<li class="car_good_other">
								<a href="">${arr[i].active}</a>
							</li>
						</ul>
					</li>`
		}
		divhtml=`<div class="car_bottom">
					<div class="car_bottom_right">
						<table>
		             		<tr>
			                	<td><span id="goods_allnum" style=" color: #C80A28;">${num}</span>件商品</td>
			                	<td class="td_totle">总计：</td>
			              	    <td id="total_Price" class="td_price">¥${totle_price}</td>
		             		</tr>
		              		<tr>	
			                    <td colspan="2">满立减：</td>
			                	<td id="total_fanxian">- ￥0.00</td>
		              		</tr>
		              		 <tr>	
			                    <td colspan="2">税费：</td>
			                	<td id="total_fanxian">- ￥0.00 </td>
		              		</tr>
		            	</table>
					</div>
				</div>
				<div class="car_totle">
					<p id="price_totle">
						购物金额总计： <span>¥${totle_price}</span>
					</p>
				</div>`
		html=`<ul class="car_goods">`+lihtml+"</ul>"+divhtml
	}
	
	$(".car_list").append(html);
	$("#car_subtract").click(function(){
		
		var number=$(this).next("input").val();
		var num=0;
		var num_all=0;
		number--;
		if(number<1){
			number=1;
		}
		$(this).next("input").val(number);
		var money=number*$(this).parent().prev().find("span").html();
		$(this).parent().next().html(money);
		
		var name=$(this).parent().parent().find(".car_good_name>a").html();
		var color=$(this).parent().parent().find(".good_color").html();
		var size=$(this).parent().parent().find(".good_size").html();
		for(var i in arr){
			if(arr[i].name==name&&arr[i].color==color&&arr[i].size==size){
				
				arr[i].num--;
				setCookie("shoplist",JSON.stringify(arr));
			}
			num+=arr[i].num;
			num_all+=arr[i].num*arr[i].price
		}
		$("#goods_allnum").html(num);
		$("#total_Price").html(num_all);
		$("#price_totle>span").html(num_all);
		
	})
	$("#car_increase").click(function(){
		
		var number=$(this).prev().val();
		var num=0;
		var num_all=0
		number++;
		$(this).prev().val(number);
		var money=number*$(this).parent().prev().find("span").html()
		$(this).parent().next().html(money);
		var name=$(this).parent().parent().find(".car_good_name>a").html();
		var color=$(this).parent().parent().find(".good_color").html();
		var size=$(this).parent().parent().find(".good_size").html();
		for(var i in arr){
			if(arr[i].name==name&&arr[i].color==color&&arr[i].size==size){
				
				arr[i].num++;
				setCookie("shoplist",JSON.stringify(arr));
			}
			num+=arr[i].num;
			num_all+=arr[i].num*arr[i].price
		}
		$("#goods_allnum").html(num);
		$("#total_Price").html(num_all);
		$("#price_totle>span").html(num_all);
	})
	var html1="";
	var html2="";
	$.ajax({
			type:"get",
			url:"js/visit.json",
			success:function(res){
				for(var i in res){
					if(i<5){
					html1+=`<li><a href=""><img src="images/banner/${res[i].src}" alt="" />
					<p>${res[i].name}</p><span class="price">${res[i].price}</span></a></li>
					`;
					}
				}	
				$(".visited").html(html1);
			}		
	})
	$.ajax({
			type:"get",
			url:"js/collect.json",
			success:function(res){
				for(var i in res){
					console.log(i)
					if(i<5){
					html2+=`<li><a href=""><img src="images/banner/${res[i].src}" alt="" />
					<p>${res[i].name}</p><span class="price">${res[i].price}</span></a></li>
					`;
					}
				}	
				$(".collected").html(html2);
			}		
	})
	$(".visit").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".visited").show().siblings().hide();
	})
	$(".collect").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".collected").show().siblings().hide();
	})
	$(".car_list").on("click",".del",function(){
		var name=$(this).parent().parent().siblings().filter(".car_good_detail").find(".car_good_name").children("a").html();
		var color=$(this).parent().parent().siblings().filter(".car_good_detail").find(".good_color").html();
		var size=$(this).parent().parent().siblings().filter(".car_good_detail").find(".good_size").html();
		var num=0;
		var totleprice=0;
		for(var i in arr){
			if(arr[i].name==name&&arr[i].color==color&&arr[i].size==size){
				arr.splice(i,1);
				setCookie("shoplist",JSON.stringify(arr));
				$(this).parent().parent().parent().remove();
			}
		}
		for(var i in arr){
			num+=arr[i].num;
			totleprice+=arr[i].num*arr[i].price;
		}
		$("#goods_allnum").html(num);
		$("#total_Price").html(totleprice);
		$("#price_totle>span").html(totleprice);
	})
})
