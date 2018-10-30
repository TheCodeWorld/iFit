$(document).ready(function(){
	var username = window.localStorage.getItem("stu_name");
	
	$("#uname").html(username);
	
	//图标log
	
	$('.log').neonText({
		textColor:'white',
		textSize:'24pt',
		neonHighlight:'white',
		neonHighlightColor:'#286090',
		neonHighlightHover:'#337ab7',
		neonFontHover:'white'
	});
	
	$("#home").click(function(){
		$("#welcome_div").attr("style","display: block;");
		$("#psw").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: none;");
		$("#search_class_div").attr("style","display: none;");
	});
	$("#ch_psw_nav").click(function(){
		$("#welcome_div").attr("style","display: none;");
		$("#psw").attr("style","display: block;");
		$("#search_grades_div").attr("style","display: none;");
		$("#search_class_div").attr("style","display: none;");
	});
	$("#search_grades_nav").click(function(){
	var now = new Date();
	var year = now.getFullYear();//获取当前年份
	document.getElementById("ser_grad_opt1").innerHTML=year+"体测成绩";
	document.getElementById("ser_grad_opt2").innerHTML=year+"第一学期体育成绩";
	document.getElementById("ser_grad_opt3").innerHTML=year+"第二学期体育成绩";
	document.getElementById("ser_grad_opt4").innerHTML=(year-1)+"体测成绩";
	document.getElementById("ser_grad_opt5").innerHTML=(year-1)+"第一学期体育成绩";
	document.getElementById("ser_grad_opt6").innerHTML=(year-1)+"第二学期体育成绩";
	document.getElementById("ser_grad_opt7").innerHTML=(year-2)+"体测成绩";
	document.getElementById("ser_grad_opt8").innerHTML=(year-2)+"第一学期体育成绩";
	document.getElementById("ser_grad_opt9").innerHTML=(year-2)+"第二学期体育成绩";
		$("#welcome_div").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: block;");
		$("#psw").attr("style","display: none;");
		$("#search_class_div").attr("style","display: none;");
	});

	$("#psw2").focus(function(){
		if($("#psw1").val()==""){
			$("#psw1_tip").text("*旧密码不能为空！").css({"font-size":"12px"});	
		}
	});
	$("#psw3").focus(function(){
		if($("#psw2").val()==""){
			$("#psw2_tip").text("*新密码不能为空！").css({"font-size":"12px"});	
		}
	});
	/*
	$("#btn_Ok").click(function(){
		if($("#psw3").val()==""){
			$("#psw3_tip").text("请确认密码！").css({"font-size":"12px"});
		}else{
			var psw2 = $("#psw2").val();
			var psw3 = $("#psw3").val();
			if(psw2!=psw3){
				alert("确认密码错误！");
				return false;
			}else{
				var oldpwd = $("#psw2").val();
				var newpwd = $("#psw3").val();
				$.ajax({
					type: 'post',
					url: 'http://192.168.4.191:8080/user/resetpwd',
					data: {oldpwd:oldpwd,newpwd:newpwd},
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
				});
				alert("调过来");
			}
		}
		
	});*/
	$("#btn_Ok").click(function(){
		if($("#psw3").val()==""){
			$("#psw3_tip").text("请确认密码！").css({"font-size":"12px"});  //判断确认密码是否填写
        }else{
			var oldpwd = $("#psw1").val();
			var newpwd1 = $("#psw2").val();
			var newpwd2 = $("#psw3").val();
			if(newpwd1!=newpwd2){
				$("#psw3_tip").text("*两次密码不一致").css({"font-size":"12px"});  //校验确认密码
			}else {
                $("#psw3_tip").text("");   //校验通过，去掉提示
                $.ajax({
                    type:"POST",
                    url:"http://127.0.0.1:8080/user/resetpwd",
                    //headers: {"Content-Type":"application/json"},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    data:{oldpwd:oldpwd,newpwd:newpwd2},
                    dataType:"json",
                    crossDomain:true,
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function(data){
                        if(data.status==100){
                            swal("success");
                        }else{
                            swal(data.msg);
                        }
                    },
                    error:function(){
                        swal("连接失败");
                    }
                });
			}
		}
		/*var oldpwd = $("#psw1").val();
		var newpwd = $("#psw2").val();
		$.ajax({
			type:"POST",
			url:"http://127.0.0.1:8080/user/resetpwd",
			//headers: {"Content-Type":"application/json"},
			xhrFields: {
           			withCredentials: true
       			},
       		crossDomain: true,
			data:{oldpwd:oldpwd,newpwd:newpwd},
			dataType:"json",
			crossDomain:true,
			xhrFields: {
            	withCredentials: true
        	},
			success: function(data){
				if(data.status==100){
					alert("success");
				}else{
					alert(data.msg);
				}
			},
			error:function(){
				alert("连接失败");
			}

		});*/
		
});
		$("#loginout").click(function(){
			$.ajax({
				type:"POST",
				url:"http://127.0.0.1:8080/user/loginout",
				xhrFields: {
           			withCredentials: true
       			},
       			crossDomain: true,
				success:function(data){
					//alert(data.status);
					window.location.href="index.html";
				},
				error:function(){
					swal("连接失败");
				}
			});
		});

    $("#btn_search").click(function(){
		$("#tbody-result").empty();
        var studentId = window.localStorage.getItem("stu_name");  //获取到studentId，即用户名
        var year = parseInt($("#select_cat option:selected").val().replace(/[^0-9]/ig,""));//截取数字
        /*var year = $("#select_cat option:selected").val();  //获取到所选的查询年份*/
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/score/scoredetail",
			data:{studentId:studentId,year:year},
			dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function(data){
                if(data.status==100){

                	var json_data = $.parseJSON(data.data);
                	console.log(json_data);
                	var tbody = "";
                	$.each(json_data, function (key,value) {
						var tr = "<tr>";
						tr += "<td>" + key+"</td>";       //项目
                        tr += "<td>" + value+"</td>";     //项目成绩
                        tr += "<td>" + value+"</td>";     //得分
						tbody += tr;
                    });
					$("#table_result").children("tbody").append(tbody);
                }else{
                    swal(data.msg);
                }
            },
            error:function(){
                swal("连接失败");
            }
		});
    });

})
	

