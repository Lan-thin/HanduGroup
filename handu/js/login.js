$(function(){
	createCode();
	function createCode() {
            code = "";
            var codeLength = 4; //验证码的长度
            var checkCode = $(".code_yzm");
            var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
            for (var i = 0; i < codeLength; i++) 
            {
                var charNum = Math.floor(Math.random() * 52);
                code += codeChars[charNum];
            }
            $(".code_yzm").html(code)
        }
	$(".code_yzm").click(function(){
		createCode()
	})
	$(".login_btn").click(function(){
		console.log(getCookie("user"))
//		var arr=getCookie("user");
//		for(var i in arr){
//			if(arr[i].name==$("#login_name").val()&&arr[i].pwd==$("#login_pwd").val()){
//				alert("登录成功");
//				break;
//			}
//		}
		$.ajax({
				type:"get",
				url:"http://127.0.0.1/HanduGroup/log_res.php",
				data:`status=login&dname=${$("#login_name").val()}&dpwd=${$("#login_pwd").val()}`,
				success:function(res){
					alert(res)
					switch(res){
					case "0":	alert("用户名不存在");break;
					case "1": 	location.href="index.html";break;
					}
				}
			});
	})
})
