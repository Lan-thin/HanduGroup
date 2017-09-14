$(function(){
	var html="";
	var arr=getCookie("shoplist");
	var totle_money=0;
	var totle_num=0
	for(var i in arr){
		totle_money+=arr[i].num*arr[i].price;
		totle_num+=parseInt(arr[i].num);
		html+=`<li>
							<div class="image_pic"><a href=""><img src="${arr[i].src}"/></a></div>
							<div class="goods_name">
								<a href="">${arr[i].name}</a><br />
								<a href="" style="color: #C80A28;" class="active">${arr[i].active}</a>
							</div>
							<div class="goods_cs">
								颜色:<span>${arr[i].color}</span>尺码:<span>${arr[i].size}</span>
							</div>
							<div class="goods_price">
								<del>￥${arr[i].oldprice}</del><br />
								<span>￥${arr[i].price}</span>
							</div>
							<div class="goods_num">
								<span>${arr[i].num}</span>
							</div>
							<div class="goods_tot">
								<span>￥${arr[i].num*arr[i].price}</span>
							</div>
						</li>`
	}
	$(".goods_li").html(html);
	$("#order_num").html(totle_num);
	$("#order_totalPrice").html(totle_money);
	$("#order_totalAmount").html(totle_money);
	$("#pay_money").html(totle_money);
})
