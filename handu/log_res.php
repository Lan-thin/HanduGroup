<?php
	header("content-type:text/html;charset=utf-8");
	$status=$_GET["status"];
	$db=mysql_connect("localhost","root","root");
	mysql_select_db("handugroup",$db);
	mysql_query("set names utf8");
	if($status=="register"){
		$uname=$_GET["uname"];
		$upwd=$_GET["upwd"];
		$sql_select="select * from user where uname='$uname'";
		$res = mysql_query($sql_select);
		$arr = mysql_fetch_array( $res );
		if($arr){
			echo "0";//用户名存在
		}else{
			$sql="insert into user(uname, upwd) value ('$uname','$upwd')";
			$result=mysql_query($sql);
			if ($result){
				echo "1";//注册成功
			}
		}	
	}else{
		$dname=$_GET["dname"];
		$dpwd=$_GET["dpwd"];
		$sql = "select * from user where uname='$dname'and upwd='$dpwd'";
		$res = mysql_query($sql);
		$num=mysql_num_rows($res);
		if($num){
			echo "1";//登录成功
		}else{
			echo "0";//用户名不存在
		}
		
	}
?>