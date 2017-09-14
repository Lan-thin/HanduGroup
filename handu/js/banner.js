$(function(){
	$.ajax({
			type:"get",
			url:"js/banner.json",
			success:function(res){
				
				var allhtml="";
				var divhtml="";
				var onehtml="";
				for(var i in res){
					var html="";
					for(var j in res[i].list){
						var ch=res[i].list[j];
						divhtml=`<div class="prefect">
				<img src="images//banner/${res[i].src}" alt="" />
				<ul>`;
						html+=`
					<li><a href="">
						<img src="images/banner/${ch.src}" alt="" />
						<p><span>${ch.price}</span> <del>${ch.oldprice}</del><img src="images/banner/2.png" alt="" /></p>
					</a></li>`
					}
					onehtml=divhtml+html+"</ul> </div>";
					allhtml+=onehtml;
				}
				
				$(".list").html(allhtml);
			}
				
	})
	$(".banner_list").find("li").mouseenter(function(){
		$(this).find("a").animate({"width":"350px","height":"640px","margin":"0 10px"},500).find("img").animate({"opacity":0.6},500).prev("span").animate({"top":"240px"},500)	
	})
	$(".banner_list").find("li").mouseleave(function(){
		$(this).find("a").animate({"width":"372px","height":"660px","margin":"0 0"},500).find("img").animate({"opacity":1},500).prev("span").animate({"top":"-30px"},500);	
	})
//	$(".hdys_bottom").find("li").mouseenter(function(){
//		$(this).find("img").css("z-index",40);
//		$(this).find("img").animate({"width":"150px","height":"180px"},500)
//	})
//	$(".hdys_bottom").find("li").mouseleave(function(){
//		$(this).find("img").css("z-index",20);
//		$(this).find("img").animate({"width":"130px","height":"150px"},500)
//	})
})
