$(function(){
	$(".list_type").find("a").attr("href","javascript:void(0);");
	$(".list_type>dl").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	$(".list_type h3").click(function(){
		$(this).parent().addClass("on").siblings().removeClass("on");
		$(this).next("ul").show().parent().siblings().find("ul").hide();
	})
	var index=1;
	var pagenum=40;
	showList();
	function showList(){
		$.ajax({
		type:"get",
		url:"js/goodlist.json",
		success:function(res){
			var str="";
			
			for(var i=(index-1)*pagenum;i<index*pagenum;i++){
				if(i<res.length){
					str+=`<li>
							<a href="">
								<img src="images/goods/${res[i].src}" alt="" />
								<img src="images/goods/${res[i].src}" class="small_img"/>
								<p class="good_price"><span>${res[i].price}</span><del>${res[i].oldprice}</del></p>
								<p class="good_name">${res[i].name}</p>
								<p class="other">
									<span>
									<em style="color:  #b57c5b;;">${res[i].sell}</em><br />月销量									
									</span>
									<span style="border-right: none;"><em style="color: #38b;">${res[i].evaluate}</em><br />评价</span>
								</p>
							</a>	
						</li>`;
				}
			}
			$(".list_all>ul").html(str);
			
				pageTotle=Math.ceil(res.length/pagenum);
				var page="";
				for(var j=1;j<=pageTotle;j++){
					page+=`<a href="javascript:void(0)">${j}</a>`;
				
				}
				$(".page_num").html(page)
				$(".page_num").children("a").eq(index-1).addClass("strong");
			}

		});
	}
	
	$(".page_num").on("click","a",function(){
		index=$(this).html();
		showList();
	})
	$(".next").click(function(){
		index++;
		if(index>pageTotle){
			index=pageTotle;
		}
		
		showList();
	})
	
	
})

