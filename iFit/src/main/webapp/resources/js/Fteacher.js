$(document).ready(function(){
	var username = window.localStorage.getItem("Ftea_name");
	$("#uname").html(username);
	
	//标志
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
		if($(".add_li").css("display")=="block"){
			$(".add_li").slideUp();
		}
	});
	$("#ch_psw_nav").click(function(){
		$("#welcome_div").attr("style","display: none;");
		$("#psw").attr("style","display: block;");
		$("#search_grades_div").attr("style","display: none;");
		$("#search_class_div").attr("style","display: none;");
		if($(".add_li").css("display")=="block"){
			$(".add_li").slideUp();
		}		
	});
	$("#search_grades_nav").click(function(){
		if($(".add_li").css("display")=="none"){
		$(".add_li").slideDown();
		}
		else
		{
		$(".add_li").slideUp();
		}
	});
	$("#search_grades_nav1").click(function(){
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
	$("#search_grades_nav2").click(function(){
		var now = new Date();
		var year = now.getFullYear();//获取当前年份
		document.getElementById("ser_class_opt1").innerHTML=year+"体测成绩";
		document.getElementById("ser_class_opt2").innerHTML=year+"第一学期体育成绩";
		document.getElementById("ser_class_opt3").innerHTML=year+"第二学期体育成绩";
		document.getElementById("ser_class_opt4").innerHTML=(year-1)+"体测成绩";
		document.getElementById("ser_class_opt5").innerHTML=(year-1)+"第一学期体育成绩";
		document.getElementById("ser_class_opt6").innerHTML=(year-1)+"第二学期体育成绩";
		document.getElementById("ser_class_opt7").innerHTML=(year-2)+"体测成绩";
		document.getElementById("ser_class_opt8").innerHTML=(year-2)+"第一学期体育成绩";
		document.getElementById("ser_class_opt9").innerHTML=(year-2)+"第二学期体育成绩";
		$("#welcome_div").attr("style","display: none;");
		$("#psw").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: none;");
		$("#search_class_div").attr("style","display: block;");
	});
	/*$("#psw1").blur(function(){

		if(!$(this).val().match(/([w]){6,12}$/)){
			if(!$(this).val()){
				//旧密码必须不为空，且为6-12位数字、英文、下划线
				$("#psw1_tip").text("*旧密码不能为空！").css({"font-size":"11px"});
			}else{
				$("#psw1_tip").text("*旧密码只能为6-12位的数字、英文、下划线！").css({"font-size":"11px"});
			}
			
		}
	});*/
	/*$("#psw2").blur(function(){
		if(!$(this).val().match(/([w]){6,12}$/)){
			if(!$(this).val()){
				//新密码必须不为空，且为6-12位数字、英文、下划线
				$("#psw2_tip").text("*新密码不能为空！").css({"font-size":"12px"});
			}else{
				$("#psw2_tip").text("*新密码只能为6-12位的数字、英文、下划线！").css({"font-size":"12px"});	
			}
		}
	});*/
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
	
	$("#btn_Ok").click(function(){
		if($("#psw3").val()==""){
			$("#psw3_tip").text("*请确认密码！").css({"font-size":"12px"});	
		}else{
			var oldpwd = $("#psw1").val();
			var newpwd1= $("#psw2").val();
			var newpwd2= $("#psw3").val();
			if(newpwd1!=newpwd2){
				$("#psw3_tip").text("*两次密码不一致").css({"font-size":"12px"});
				return false;
			}else{
				$("#psw3_tip").text("");
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
    $("#ser_stu_score").click(function () {
        $("#tbody-result").empty();  //清空表格
        var studentId = $("#studentId").val();
        var year = parseInt($("#select_cat option:selected").val().replace(/[^0-9]/ig,""));//截取数字
        if(studentId==""){
            swal("请输入学号");
        }else {
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
                        $.each(json_data, function (index,content) {
                            var tr = "<tr>";
                            tr += "<td>" + content.first_game+"</td>";       //项目
                            tr += "<td>" + content.first_game+"</td>";     //项目成绩
                            tr += "<td>" + content.second_game+"</td>";     //得分
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
        }
    });
    //查询筛选学生成绩
	$("#search_score").click(function () {
		var executiveClassId = $("#executiveClass").val();  //获取用户填写的行政班级号
		var year = parseInt($("#search_score_select option:selected").val().replace(/[^0-9]/ig,""));//截取年份数字
		window.localStorage.setItem("excu_year",year);
		var flag = $("#flag").val();
		if(flag=="<"){
			flag = 3;
		}else if(flag==">"){
			flag = 2;
		}else if(flag=="="){
			flag = 1;
		}
		var score = parseInt($("#filter").val());
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/score/eclass_score",
            data:{executiveClassId:executiveClassId,year:year,flag:flag,score:score},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function(data){
                if(data.status==100){
                    var tbody = "";
                    $.each(data.data, function (index,content) {
                        var tr = "<tr>";
                        tr += "<td>" + content.studentId+"</td>";       //项目
                        tr += "<td>" + content.studentName+"</td>";     //项目成绩
                        tr += "<td>" + content.sumSocore+"</td>";     //得分
						tr += "<td><button class=\"exeu_score\">查看详情</button></td></tr>";
                        tbody += tr;
                    });
                    $("#table_score").children("tbody").append(tbody);
                }else{
                    swal(data.msg);
                }
            },
            error:function(){
                swal("连接失败");
            }
        });
    });
    //表格中的查看详情
    $("#tbody_score").on("click",".exeu_score",function (event) {
        $("#tbody_detail").empty();  //清空表格
        var tr = $(this).parent().parent();  //获取buton所在行
        var studentId = tr.children().eq(0).text();  //获取该行的第一个td中的内容:学生学号
        var year = window.localStorage.getItem("excu_year");
        $("#look_detail_modal").modal({backdrop: 'static', keyboard: false});
        $("#look_detail_modal").modal("show");
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
                    $.each(json_data, function (index,content) {
                        var tr = "<tr>";
                        tr += "<td>" + index+"</td>";       //项目
                        tr += "<td>" + content+"</td>";     //项目成绩
                        tr += "<td>" + content+"</td></tr>";     //得分
                        tbody += tr;
                    });
                    $("#table_detail").children("tbody").append(tbody);
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