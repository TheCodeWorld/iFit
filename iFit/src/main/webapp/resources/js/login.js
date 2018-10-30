$(document).ready(function(){
					$("#password0").click(function(){
					
					if($("#c_password").attr("type")=="password"){
					
					$("#password0").removeClass().addClass("input-group-addon glyphicon glyphicon-eye-open");
					$("#c_password").attr("type","text");
					}
					else 
					{	
						$("#password0").removeClass().addClass("input-group-addon glyphicon glyphicon-eye-close");
						$("#c_password").attr("type","password");
					}
				});
				
				//判断用户名
				$("#v_name").keyup(function(){
					var name=$("#v_name").val();
					if(name.length==0){
						$("#t_name").removeClass().addClass("col-lg-12 name_tip");
						$("#t_name span").text("*请输入用户名!");
					}
				});
				$("#v_name").blur(function(){
					var name=$("#v_name").val();
					if(name.length==0){
						$("#t_name").removeClass().addClass("col-lg-12 name_tip");
						$("#t_name span").text("*请输入用户名!");
					}	
				});
				
				//判断密码
				$("#c_password").keyup(function(){
					var pass=$("#c_password").val();
					if(pass.length==0){
						$("#t_password").removeClass().addClass("col-lg-12 password_tip");
						$("#t_password span").text("*请输入密码!");
					}
				});
				$("#c_password").blur(function(){
					var pass=$("#c_password").val();
					if(pass.length==0){
						$("#t_password").removeClass().addClass("col-lg-12 password_tip");
						$("#t_password span").text("*请输入密码!");
					}
					
				});
				//前后端交互
				$("#send").click(function(){
					var username=$("#v_name").val();
					var pwd=$("#c_password").val();
					$.ajax({
						 type: 'POST',
						 url: 'http://127.0.0.1:8080/user/login',
						 data: {username:username,pwd:pwd},
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
						 dataType: "json", 
	 					 success: function(data){
	 					 	//console.log(data.status);
	 					 	if(data.status==100){           
	 					 		if(data.data.role==0){
		 					 		var uname = data.data.username;
		 					 		window.localStorage.setItem("admin_name",uname);
		 					 		window.location.href="admin.html";		 					 			
	 					 		}else if(data.data.role==1){
	 					 			var uname = data.data.username;
		 					 		window.localStorage.setItem("Ttea_name",uname);
		 					 		window.location.href="Tteacher.html";
	 					 		}else if(data.data.role==2){
	 					 			var uname = data.data.username;
		 					 		window.localStorage.setItem("Ftea_name",uname);
		 					 		window.location.href="Fteacher.html";
	 					 		}else if(data.data.role==3){
	 					 			var uname = data.data.username;
		 					 		window.localStorage.setItem("stu_name",uname);
		 					 		window.location.href="Student.html";	
	 					 		}
	 					 	}else{
	 					 		swal(data.msg);
	 					 	}
	 					 },
	 					 error: function(){
	 					 	swal("连接失败");
	 					 }					 
					});
				});	
				/*
				$("#send").click(function(){
					var username=$("#v_name").val();
					var pwd=$("#c_password").val();
					$.ajax({
						 type: 'POST',
						 url: 'http://192.168.4.191:8080/user/resetpwd',					 
						 data: {oldpwd:username,newpwd:pwd},
						 dataType: "json", 
	 					 success: function(data){
	 					 	//console.log(data.status);
	 					 	if(data.status==100){           
	 					 		alert("success");
	 					 	}else{
	 					 		alert(data.msg);
	 					 	}
	 					 },
	 					 error: function(){
	 					 	alert("连接失败");
	 					 }
	 				})
				});*/
			
				
});