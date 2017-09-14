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
	$(".list_title>input").click(function(){
		$(".list_all").find("input").prop("checked",$(".list_title>input").prop("checked"));
	})
	
	
})
