$(function(){
	var flagPhone=null;
	$("#phoneNum").blur(function(){
		var reg=/^\d{11}$/;
		if(reg.test($("#phoneNum").val())){
			flagPhone=true;
			$("#phone_num").html("<img src='images/keyizhuce.gif'style='display:inline-block;'/>");
		}else{
			$("#phone_num").html("手机号格式不正确");
		}	
	})
	var flagPwd=null;
	$("#phonePwd").blur(function(){
		var reg=/^\w{6,16}$/
		if(reg.test($("#phonePwd").val())){
			flagPwd=true;
			$("#phone_password").html("<img src='images/keyizhuce.gif'style='display:inline-block;'/>");
		}else{
			$("#phone_password").html("密码必须为6-16位字母与数字组合")
		}
	})
	var flagcpwd=null;
	$("#phonecpwd").blur(function(){
		var reg=/^\w{6,16}$/
		if(reg.test($("#phonecpwd").val())){
			if($("#phonePwd").val()==$("#phonecpwd").val()){
				flagcpwd=true;
				$("#phone_pwd").html("<img src='images/keyizhuce.gif'style='display:inline-block;'/>");
			}else{
				$("#phone_pwd").html("两次密码不一致");
			}
		}else{
			$("#phone_pwd").html("密码必须为6-16位字母与数字组合")
		}
	})
	$(".add_inform").click(function(){
		if(flagPhone&&flagPwd&&flagcpwd&&$(".check").is(":checked")){
//			
			$.ajax({
				type:"get",
				url:"http://127.0.0.1/HanduGroup/log_res.php",
				data:`status=register&uname=${$("#phoneNum").val()}&upwd=${$("#phonePwd").val()}`,
				success:function(res){
					switch(res){
					case "0":	alert("用户名存在");break;
					case "1": 	location.href="usercenter.html";break;
					}
				}
			});
		}
	})
	
	
	
	
	
	
	
	
//	$("#phone_register").submit(function(){
//		if(flagPhone&&flagPwd&&flagcpwd){
////			setCookie("user",{"name":$})
//			var arr=[];
//			var flag=true;
//			var _json={
//				name:$("#phoneNum").val(),
//				pwd:$("#phonePwd").val()
//			}
//			var cookInfo=getCookie("user");
//			if(cookInfo.length!=0){
//				arr=cookInfo;
//				for(var i in arr){
//					if(arr[i].name==_json.name){
//						alert("用户名已存在");
//						flag=false;
//					}
//				}	
//			}
//			if(flag){
//					arr.push(_json);
//				}
//			setCookie("user",JSON.stringify(arr));
//		}
//	})
	
					
})
