$(document).ready(function(){
	var username = window.localStorage.getItem("Ttea_name");
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
	
	
	$("#class_manage_nav").click(function(){  
		if($("#add_li2").css("display")=="none"){
			$("#add_li2").slideDown();
		}
		else
		{
			$("#add_li2").slideUp();
		}
		if($("#add_li1").css("display")=="block"){
			$("#add_li1").slideUp();
		}
	});

	$("#search_grades_nav").click(function(){ 
		
		if($("#add_li1").css("display")=="none"){
			$("#add_li1").slideDown();
		}
		else
		{
			$("#add_li1").slideUp();
		}
		if($("#add_li2").css("display")=="block"){
			$("#add_li2").slideUp();
		}
	});
	$("#stu_manage").click(function(){   //学生成绩查询
        $("#tbody-result").empty();
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
		$("#button").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: block;");
		$("#psw").attr("style","display: none;");
		$("#class_stu_mana").attr("style","display: none;");
		$("#class_grad_sear").attr("style","display: none;");
		$("#grade_in").attr("style","display: none;");
        $(".score_in_banner").attr("style","display: none;");
        $("#ser_score").attr("style","display: none;");
	});
	$("#stu_manage_nav").click(function(){ //教学班学生管理
        $("#tbody_class_stu_mana").empty();
        $("#table_class_stu_mana").children("thead").empty();
        $("#my_tclass").modal({backdrop: 'static', keyboard: false});
        $("#my_tclass").modal("show");
		$("#welcome_div").attr("style","display: none;");
		$("#button").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: none;");
		$("#psw").attr("style","display: none;");
		$("#class_stu_mana").attr("style","display: block;");
		$("#class_grad_sear").attr("style","display: none;");
		$("#grade_in").attr("style","display: none;");
        $(".score_in_banner").attr("style","display: none;");
        $("#ser_score").attr("style","display: none;");
	});
	$("#gra_search_nav").click(function(){ //教学班成绩查询
        $("#tbody_tclass_score").empty();
        $("#table_class_stu_score").children("thead").empty();
        $("#my_tclass_score").modal({backdrop: 'static', keyboard: false});
        $("#my_tclass_score").modal("show");
		$("#welcome_div").attr("style","display: none;");
		$("#button").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: none;");
		$("#psw").attr("style","display: none;");
		$("#class_stu_mana").attr("style","display: none;");
		$("#class_grad_sear").attr("style","display: block;");
		$("#grade_in").attr("style","display: none;");
        $(".score_in_banner").attr("style","display: none;");
        $("#ser_score").attr("style","display: none;");
	});	
	$("#gra_in_nav").click(function(){ //教学班成绩录入
        $("#tbody_scorein").empty();
        $("#table_scorein").children("thead").empty();
        $("#my_tclass_scorein").modal({backdrop: 'static', keyboard: false});
        $("#my_tclass_scorein").modal("show");
		$("#welcome_div").attr("style","display: none;");
		$("#button").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: none;");
		$("#ch_psw_div").attr("style","display: none;");
		$("#class_stu_mana").attr("style","display: none;");
		$("#class_grad_sear").attr("style","display: none;");
		$("#grade_in").attr("style","display: block;");
		$(".score_in_banner").attr("style","display: none;");
        $("#ser_score").attr("style","display: none;");
	});
	$("#home").click(function(){ //教学班学生管理
		$("#welcome_div").attr("style","display: block;");
		$("#button").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: none;");
		$("#psw").attr("style","display: none;");
		$("#class_stu_mana").attr("style","display: none;");
		$("#class_grad_sear").attr("style","display: none;");
		$("#grade_in").attr("style","display: none;");
        $(".score_in_banner").attr("style","display: none;");
        $("#ser_score").attr("style","display: none;");
		if($("#add_li1").css("display")=="block"){
			$("#add_li1").slideUp();
		}
		if($("#add_li2").css("display")=="block"){
			$("#add_li2").slideUp();
		}
	});
	$("#ch_psw_nav").click(function(){ //教学班学生管理
		$("#psw").attr("style","display: block;");
		$("#welcome_div").attr("style","display: none;");
		$("#button").attr("style","display: none;");
		$("#search_grades_div").attr("style","display: none;");
		$("#class_stu_mana").attr("style","display: none;");
		$("#class_grad_sear").attr("style","display: none;");
		$("#grade_in").attr("style","display: none;");
        $(".score_in_banner").attr("style","display: none;");
        $("#ser_score").attr("style","display: none;");
		if($("#add_li1").css("display")=="block"){
			$("#add_li1").slideUp();
		}
		if($("#add_li2").css("display")=="block"){
			$("#add_li2").slideUp();
		}
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
            var newpwd1 = $("#psw2").val();
            var newpwd2 = $("#psw3").val();
			if(newpwd1!=newpwd2){
				$("#psw3_tip").text("*两次密码不一致").css({"font-size":"12px"});
				return false;
			}else{
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
                            //alert("success");
                            swal("干得漂亮！", "","success");
                        }else{
                            alert(data.msg);
                        }
                    },
                    error:function(){
                        //alert("连接失败");
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
                            tr += "<td>" + index+"</td>";       //项目
                            tr += "<td>" + content+"</td>";     //项目成绩
                            tr += "<td>" + content+"</td>";     //得分
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
    $("#btn_add_stu").click(function () {
		$("#add_stu").attr("style","display: none;");
    });

    $("#select_year").change(function () {
        var year = parseInt($("#select_year option:selected").val().replace(/[^0-9]/ig,""));
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/teachclass/select_my_tclass",
            data:{year:year},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
			success:function (data) {
				if(data.status==100){
					$("#select_class").empty();
					jQuery.each(data.data,function(i,item){  //data.data是个list遍历
						$("#select_class").append("<option>"+data.data[i].className+"</option>");
						$("#select_class").append("<span style='display: none'>"+data.data[i].classId+"</span>");
					});

				}else {
                    $("#select_class").append("<option>没有符合该条件的班级</option>");   //查询不到，下拉框置空
				}
            },
			error:function () {
				swal("连接失败");
            }
		});
    });

	//教学班学生管理，学年和教学班选择
    $("#submit_myclass").click(function () {
    	var year = parseInt($("#select_year option:selected").val().replace(/[^0-9]/ig,""));  //查询条件：学年
        var teachClass = $("#select_class").find("option:selected").next("span:hidden").text(); //查询条件：获取所选教学班的id
        var teachClass_name = $("#select_class").find("option:selected").text();
        window.localStorage.setItem("tclass_no",teachClass);  //将选择教学班的id存入本地
        window.localStorage.setItem("tclass_year",year);      //将选择的学年存入本地
        window.localStorage.setItem("tclass_name",teachClass_name);    //选择教学班的名称
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/student/select_student",
            data:{year:year,teachClass:teachClass},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {
                if(data.status==100){
                    $('#my_tclass').modal('hide');   //让模态框消失
					console.log(data.data);
                    $("#tbody_class_stu_mana").empty();
                    $("#table_class_stu_mana").children("thead").empty();
					var tbody = "";
					$.each(data.data,function (index,content){
						var tr = "<tr>";
						tr += "<td>" + content.studentId+"</td>";
                        tr += "<td>" + content.studentName+"</td>";
                        tr += "<td>" + content.studentSex+"</td>";
                        tr += "<td>" + content.studentCollege+"</td>";
                        tr += "<td>" + content.currentExecutiveClass+"</td>";
                        tr += "<td><button class=\"delete_stu\">删除</button></td>";
                        tbody += tr;
					});
                    $("#button").attr("style","display: block;");
                    var th = "<tr class=\"info\"><th>学号</th><th>姓名</th><th>性别</th><th>学院</th><th>行政班级</th><th>操作</th></tr>";
                    $("#table_class_stu_mana").children("thead").append(th);
                    $("#table_class_stu_mana").children("tbody").append(tbody);
                }else {
                    swal(data.msg);
                    $('#my_tclass').modal('hide');
                }
            },
            error:function () {
                swal("连接失败");
            }
		});

    });

    //表格中，点击删除，强提示
    $("#tbody_class_stu_mana").on("click",".delete_stu",function (event) {
        /*$("#dele_stu_prompt").modal({backdrop: 'static', keyboard: false});
        $("#dele_stu_prompt").modal("show");*/
        var tr = $(this).parent().parent();  //获取buton所在行
        var studentId = tr.children().eq(0).text();  //获取该行的第一个td中的内容
        var year = window.localStorage.getItem("tclass_year");
        var teachClass = window.localStorage.getItem("tclass_no");
        swal({
            title:"确定删除吗？",
            text:"你将无法恢复该学生!",
            type:"warning",
                showCancelButton:true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "确定删除！",
                closeOnConfirm: false
        },
        function () {
            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:8080/student/delete_student_tclass",
                data:{studentId:studentId},
                dataType:"json",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success:function (data) {
                    if(data.status==100){
                        /*tr.remove();   //删除button所在行*/
                        //****************删除学生后，更新表格
                        $.ajax({
                            type:"POST",
                            url:"http://127.0.0.1:8080/student/select_student",
                            data:{year:year,teachClass:teachClass},
                            dataType:"json",
                            xhrFields: {
                                withCredentials: true
                            },
                            crossDomain: true,
                            success:function (data) {
                                if(data.status==100){
                                    $('#add_stu').modal('hide');   //让模态框消失
                                    console.log(data.data);
                                    $("#tbody_class_stu_mana").empty();
                                    var tbody = "";
                                    $.each(data.data,function (index,content){
                                        var tr = "<tr>";
                                        tr += "<td>" + content.studentId+"</td>";
                                        tr += "<td>" + content.studentName+"</td>";
                                        tr += "<td>" + content.studentSex+"</td>";
                                        tr += "<td>" + content.studentCollege+"</td>";
                                        tr += "<td>" + content.currentExecutiveClass+"</td>";
                                        tr += "<td><button class=\"delete_stu\">删除</button></td>";
                                        tbody += tr;
                                    });
                                    $("#table_class_stu_mana").children("tbody").append(tbody);
                                }else {
                                    swal(data.msg);
                                }
                            },
                            error:function () {
                                swal("连接失败");
                            }
                        });
                    }else {
                        swal(data.msg);
                    }
                },
                error:function () {
                    swal("连接失败");
                }
            });
            swal("删除！", "你的虚拟文件已经被删除。", "success");

        });
  /*      var tr = $(this).parent().parent();  //获取buton所在行
        var studentId = tr.children().eq(0).text();  //获取该行的第一个td中的内容
        window.localStorage.setItem("stuId_from_deleprompt",studentId);*/
    });

    //确定删除的强提示，删除学生
    $("#submit_dele_stu_prompt").click(function () {
		/*var tr = $(this).parent().parent();  //获取buton所在行
		var studentId = tr.children().eq(0).text();  //获取该行的第一个td中的内容*/
        $('#dele_stu_prompt').modal('hide');
		var studentId=window.localStorage.getItem("stuId_from_deleprompt");
        var year = window.localStorage.getItem("tclass_year");
        var teachClass = window.localStorage.getItem("tclass_no");
		$.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/student/delete_student_tclass",
            data:{studentId:studentId},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
			success:function (data) {
				if(data.status==100){
                    /*tr.remove();   //删除button所在行*/
                    //****************删除学生后，更新表格
                    $.ajax({
                        type:"POST",
                        url:"http://127.0.0.1:8080/student/select_student",
                        data:{year:year,teachClass:teachClass},
                        dataType:"json",
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success:function (data) {
                            if(data.status==100){
                                $('#add_stu').modal('hide');   //让模态框消失
                                console.log(data.data);
                                $("#tbody_class_stu_mana").empty();
                                var tbody = "";
                                $.each(data.data,function (index,content){
                                    var tr = "<tr>";
                                    tr += "<td>" + content.studentId+"</td>";
                                    tr += "<td>" + content.studentName+"</td>";
                                    tr += "<td>" + content.studentSex+"</td>";
                                    tr += "<td>" + content.studentCollege+"</td>";
                                    tr += "<td>" + content.currentExecutiveClass+"</td>";
                                    tr += "<td><button class=\"delete_stu\">删除</button></td>";
                                    tbody += tr;
                                });
                                $("#table_class_stu_mana").children("tbody").append(tbody);
                            }else {
                                swal(data.msg);
                            }
                        },
                        error:function () {
                            swal("连接失败");
                        }
                    });
				}else {
					swal(data.msg);
				}
            },
			error:function () {
				swal("连接失败");
            }
		});
    });
    //增加学生
    $("#submit_add_stu").click(function () {
        //var teachClass =$("#add_stu_sclass").val();     //教学班号
        //var teachClass = $("#add_stu_sclass").find("option:selected").next("span:hidden").text();
        var teachClass = window.localStorage.getItem("tclass_no");
        var year = window.localStorage.getItem("tclass_year");  //选择的学年
		var studentId = $("#add_stu_sno").val();
		$.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/student/insert_student_tclass",
            data:{teachClass:teachClass,studentId:studentId},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
			success:function (data) {
				if(data.status==100){
					swal("成功！");
					//***********更新表格
                    $.ajax({
                        type:"POST",
                        url:"http://127.0.0.1:8080/student/select_student",
                        data:{year:year,teachClass:teachClass},
                        dataType:"json",
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success:function (data) {
                            if(data.status==100){
                                $('#add_stu').modal('hide');   //让模态框消失
                                console.log(data.data);
                                $("#tbody_class_stu_mana").empty();
                                var tbody = "";
                                $.each(data.data,function (index,content){
                                    var tr = "<tr>";
                                    tr += "<td>" + content.studentId+"</td>";
                                    tr += "<td>" + content.studentName+"</td>";
                                    tr += "<td>" + content.studentSex+"</td>";
                                    tr += "<td>" + content.studentCollege+"</td>";
                                    tr += "<td>" + content.currentExecutiveClass+"</td>";
                                    tr += "<td><button class=\"delete_stu\">删除</button></td>";
                                    tbody += tr;
                                });
                                $("#table_class_stu_mana").children("tbody").append(tbody);
                            }else {
                                swal(data.msg);
                                //$('#my_tclass').modal('hide');
                            }
                        },
                        error:function () {
                            swal("连接失败");
                        }
                    });
				}else {
					swal(data.msg);
				}
            },
			error:function () {
				swal("连接失败");
            }
		});


    });

    //新增学生按钮事件
    $("#btn_add_stu").click(function () {
        if(window.localStorage.getItem("tclass_no")){
            $("#add_stu").modal({backdrop: 'static', keyboard: false});
            $("#add_stu").modal("show");
            var tclass_name= window.localStorage.getItem("tclass_name");
            $("#add_stu_sclass").val(tclass_name);
        }else {
            $("#my_tclass").modal({backdrop: 'static', keyboard: false});
            $("#my_tclass").modal("show");
        }
    });

    $("#cancel_select_class").click(function () {
        window.localStorage.removeItem("tclass_year");
        window.localStorage.removeItem("tclass_no");
        $('#my_tclass').modal('hide');
    });
    $("#cancel_select_class_score").click(function () {
        window.localStorage.removeItem("tclass_year_score");
        window.localStorage.removeItem("tclass_no_score");
        $('#my_tclass_score').modal('hide');
    });
    $("#cancel_select_class_scorein").click(function () {
        window.localStorage.removeItem("tclass_year_scorein");
        window.localStorage.removeItem("tclass_no_scorein");
        $('#my_tclass_scorein').modal('hide');
    });

    $("#cancel_select_class_game").click(function () {
        window.localStorage.removeItem("game_name");
        $('#my_tclass_game').modal('hide');
    });

    $("#dele_stu_prompt_cancel").click(function () {
        $('#dele_stu_prompt').modal('hide');
    });
    $("#select_year_score").change(function () {
        var year = parseInt($("#select_year_score option:selected").val().replace(/[^0-9]/ig,""));
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/teachclass/select_my_tclass",
            data:{year:year},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {
                if(data.status==100){
                    $("#select_class_score").empty();
                    jQuery.each(data.data,function(i,item){  //data.data是个list遍历
                        $("#select_class_score").append("<option>"+data.data[i].className+"</option>");
                        $("#select_class_score").append("<span style='display: none'>"+data.data[i].classId+"</span>");
                    });

                }else {
                    $("#select_class_score").append("<option>没有符合该条件的班级</option>");   //查询不到，下拉框置空
                }
            },
            error:function () {
                swal("连接失败");
            }
        });
    });

    //成绩录入，select的change事件
    $("#select_year_scorein").change(function () {
        var year = parseInt($("#select_year_scorein option:selected").val().replace(/[^0-9]/ig,""));
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/teachclass/select_my_tclass",
            data:{year:year},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {
                if(data.status==100){
                    $("#select_class_scorein").empty();
                    jQuery.each(data.data,function(i,item){  //data.data是个list遍历
                        $("#select_class_scorein").append("<option>"+data.data[i].className+"</option>");
                        $("#select_class_scorein").append("<span style='display: none'>"+data.data[i].classId+"</span>");
                    });

                }else {
                    $("#select_class_scorein").empty();
                    $("#select_class_scorein").append("<option>没有符合该条件的班级</option>");   //查询不到，下拉框置空
                }
            },
            error:function () {
                swal("连接失败");
            }
        });
    });

    //教学班成绩查询，确定教学班和学年
    $("#submit_myclass_score").click(function () {
        var year = parseInt($("#select_year_score option:selected").val().replace(/[^0-9]/ig,""));  //查询条件：学年
        var teachClass = $("#select_class_score").find("option:selected").next("span:hidden").text();
        window.localStorage.setItem("tclass_no_score",teachClass);  //将选择的学年存入本地
        window.localStorage.setItem("tclass_year_score",year);      //将选择教学班的id存入本地
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/score/tclass_score",
            data:{teachClassId:teachClass,year:year},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {
                if(data.status==100){
                    $('#my_tclass_score').modal('hide');   //让模态框消失
                    $("#ser_score").attr("style","display: block;");
                    console.log(data.data);
                    $("#tbody_tclass_score").empty();
                    var tbody = "";
                    $.each(data.data,function (index,content){
                        var tr = "<tr>";
                        tr += "<td>" + content.studentId+"</td>";
                        tr += "<td>" + content.studentName+"</td>";
                        tr += "<td>" + content.sumSocore+"</td>";
                        tr += "<td>" + content.studentCollege+"</td>";
                        tr += "<td><button class=\"look_detail\">查看详情</button></td>";
                        tbody += tr;
                    });
                    var th = "<tr class=\"info\"><th><font size=\"4\">学号</font></th><th><font size=\"4\">姓名</font></th><th><font size=\"4\">总分</font></th><th><font size=\"4\">等级</font></th><th><font size=\"4\">操作</font></th></tr>";
                    $("#table_class_stu_score").children("tbody").append(tbody);
                    $("#table_class_stu_score").children("thead").append(th);
                }else {
                    $("#tbody_tclass_score").empty();
                    swal(data.msg);
                    $('#my_tclass_score').modal('hide');  //模态框消失
                }
            },
            error:function () {
                swal("连接失败");
            }
        });
    });

    //教学班成绩分类查询
    $("#ser_tscore_btn").click(function () {
        var studentId = $("#ser_tscore_studentId").val();
        var flag = $("#flag").val();
        if(flag=="<"){
            flag = 3;
        }else if(flag==">"){
            flag = 2;
        }else if(flag=="="){
            flag = 1;
        }
            var score = $("#filter").val();
            var teachClassId = window.localStorage.getItem("tclass_no_score");
            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:8080/score/tclass_score",
                data:{teachClassId:teachClassId,score:score,flag:flag},
                dataType:"json",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function(data){
                    if(data.status==100){
                        $("#tbody_tclass_score").empty();
                        var tbody = "";
                        $.each(data.data, function (index,content) {
                            var tr = "<tr>";
                            tr += "<td>" + content.studentId+"</td>";
                            tr += "<td>" + content.studentName+"</td>";
                            tr += "<td>" + content.sumSocore+"</td>";
                            tr += "<td>" + content.studentCollege+"</td>";
                            tr += "<td><button class=\"look_detail\">查看详情</button></td></tr>";
                            tbody += tr;
                        });
                        $("#table_class_stu_score").children("tbody").append(tbody);
                    }else{
                        swal(data.msg);
                    }
                },
                error:function(){
                    swal("连接失败");
                }
            });

    });

    //查询教学班成绩,查询所有
    $("#ser_alltscore_btn").click(function () {
        var teachClassId = window.localStorage.getItem("tclass_no_score");
        var year = window.localStorage.getItem("tclass_year_score");
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/score/tclass_score",
            data:{teachClassId:teachClassId,year:year},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {
                if(data.status==100){
                    $("#ser_score").attr("style","display: block;");
                    $("#tbody_tclass_score").empty();
                    var tbody = "";
                    $.each(data.data,function (index,content){
                        var tr = "<tr>";
                        tr += "<td>" + content.studentId+"</td>";
                        tr += "<td>" + content.studentName+"</td>";
                        tr += "<td>" + content.sumSocore+"</td>";
                        tr += "<td>" + content.studentCollege+"</td>";
                        tr += "<td><button class=\"look_detail\">查看详情</button></td>";
                        tbody += tr;
                    });
                    $("#table_class_stu_score").children("tbody").append(tbody);
                }else {
                    $("#tbody_tclass_score").empty();
                    swal(data.msg);
                    $('#my_tclass_score').modal('hide');  //模态框消失
                }
            },
            error:function () {
                swal("连接失败");
            }
        });
    });

    //表格中的查看详情
    $("#tbody_tclass_score").on("click",".look_detail",function (event) {
        $("#tbody_detail").empty();  //清空表格
        var tr = $(this).parent().parent();  //获取buton所在行
        var studentId = tr.children().eq(0).text();  //获取该行的第一个td中的内容:学生学号
        var year = window.localStorage.getItem("tclass_year_score");
        //window.localStorage.setItem("look_detail_stuId",studentId);  //把学号放入localStorage
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
                    var tbody = "";
                    $.each(json_data, function (index,content) {
                        var tr = "<tr>";
                        tr += "<td>" + index+"</td>";       //项目
                        tr += "<td>" + content+"</td>";     //项目成绩
                        tr += "<td>" + content+"</td>";     //得分
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
    //成绩录入，确定好学年和班级
    $("#submit_myclass_scorein").click(function () {
        var year = parseInt($("#select_year_scorein option:selected").val().replace(/[^0-9]/ig,""));  //查询条件：学年
        var teachClass = $("#select_class_scorein").find("option:selected").next("span:hidden").text(); //查询条件：获取所选教学班的id
        var teachClass_name = $("#select_class_scorein").find("option:selected").text();   //查询条件：获取所选教学班的班名
        window.localStorage.setItem("tclass_no_scorein",teachClass);  //将选择的学年存入本地
        window.localStorage.setItem("tclass_year_scorein",year);      //将选择教学班的id存入本地
        //window.localStorage.setItem("tclass_name_scorein",teachClass_name);    //将教学班的名称存入本地
        $("#grade_in").attr("style","display:block");
        $(".score_in_banner").attr("style","display:block");
        $("#tclass_name_scorein_h2").text(teachClass_name+"——录入成绩");
        $('#my_tclass_scorein').modal('hide');   //让模态框消失
        $("#table_scorein").attr("style","display:block");
        $("#thead_scorein").empty();   //重置表头
        $("#tbody_scorein").empty();   //重置表体
        var thead = "<tr class=\"info\"><th>学号</th><th>姓名</th>";
        //动态生成表头，即查询某教学班考试科目
        $.ajax({
           type:"POST",
           url:"http://127.0.0.1:8080/teachclass/select_tclass_subject",
            data:{tclassId:teachClass},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {    //查询某教学班的考试科目
               if(data.status==100){
                   $.each(data.data, function (index,content) {  //构造表头
                       thead += "<th>" + content.examName+"</th>";       //项目
                   });
                   thead+="<th>总分</th></tr>"
                   $("#thead_scorein").append(thead);
               }else {
                   swal(data.msg);
               }
            },
            error:function () {
                swal("连接失败");
            }
        });
        //动态生成表中内容，查询某教学班的学生
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/student/select_student",
            data:{year:year,teachClass:teachClass},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {
                if(data.status==100){
                    var tbody = "";
                    var tr = "<tr>";
                    $.each(data.data,function (index,content){
                        tr += "<td>" + content.studentId+"</td>";
                        tr += "<td>" + content.studentName+"</td></tr>";
                    });
                    tbody+=tr;
                    $("#table_scorein").children("tbody").append(tbody);
                    //给每个tr增加input
                    $("#tbody_scorein").find("tr").each(function () {
                        var len = $("#thead_scorein").find("th").length;
                        var tds="";
                        for(var i=0;i<len-2;i++){
                            tds += "<td><input type=\"text\" class=\"form-control\" style=\"width:110px;margin-left: 20px\"></td>";
                        }
                        $(this).append(tds);
                    });
                }else {
                    swal(data.msg);
                    $('#my_tclass_scorein').modal('hide');
                    $("#grade_in").attr("style","display: none;");
                    $(".score_in_banner").attr("style","display: none;");
                }
            },
            error:function () {
                swal("连接失败");
            }
        });
    });
    $(":radio").click(function () {
        var direc = $("input[name='choose_direc']:checked").val();  //radio的值
        var year = window.localStorage.getItem("tclass_year_scorein");
        var teachClass = window.localStorage.getItem("tclass_no_scorein");
        if(direc=="right"){
            $("#tbody_scorein").empty();  //重置表格中的内容
            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:8080/student/select_student",
                data:{year:year,teachClass:teachClass},
                dataType:"json",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success:function (data) {
                    if(data.status==100){
                        var tbody = "";
                        var tr = "<tr>";
                        $.each(data.data,function (index,content){
                            tr += "<td>" + content.studentId+"</td>";
                            tr += "<td>" + content.studentName+"</td></tr>";
                        });
                        tbody+=tr;
                        $("#table_scorein").children("tbody").append(tbody);
                        //给每个tr增加input
                        $("#tbody_scorein").find("tr").each(function () {
                            var len = $("#thead_scorein").find("th").length;
                            var tds="";
                            for(var i=0;i<len-2;i++){     //各行的同一列中的input的indextab设置为同一个，将按布局位置从上到下
                                tds += "<td><input type=\"text\" class=\"form-control\" style=\"width:110px;margin-left: 20px\"></td>";
                            }
                            $(this).append(tds);
                        });
                    }else {
                        swal(data.msg);
                        $('#my_tclass_scorein').modal('hide');
                        $("#grade_in").attr("style","display: none;");
                        $(".score_in_banner").attr("style","display: none;");
                    }
                },
                error:function () {
                    swal("连接失败");
                }
            });
        }else if(direc=="bellow"){     //tab向下跳转
            $("#tbody_scorein").empty();  //重置表格中的内容
            $.ajax({
                type:"POST",
                url:"http://127.0.0.1:8080/student/select_student",
                data:{year:year,teachClass:teachClass},
                dataType:"json",
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success:function (data) {
                    if(data.status==100){
                        var tbody = "";
                        var tr = "<tr>";
                        $.each(data.data,function (index,content){
                            tr += "<td>" + content.studentId+"</td>";
                            tr += "<td>" + content.studentName+"</td></tr>";
                        });
                        tbody+=tr;
                        $("#table_scorein").children("tbody").append(tbody);
                        //给每个tr增加input
                        $("#tbody_scorein").find("tr").each(function () {
                            var len = $("#thead_scorein").find("th").length;
                            var tds="";
                            for(var i=0;i<len-2;i++){     //各行的同一列中的input的indextab设置为同一个，将按布局位置从上到下
                                var j =i+1;
                                tds += "<td><input tabindex='"+j+"' type=\"text\" class=\"form-control\" style=\"width:110px;margin-left: 20px\"></td>";
                            }
                            $(this).append(tds);
                        });
                    }else {
                        swal(data.msg);
                        $('#my_tclass_scorein').modal('hide');
                        $("#grade_in").attr("style","display: none;");
                        $(".score_in_banner").attr("style","display: none;");
                    }
                },
                error:function () {
                    swal("连接失败");
                }
            });
        }
    });
    //选择好打分项目进入打分系统
    $("#tbody_game").on("click",".score_game",function (event) {
        var tr = $(this).parent().parent();  //获取buton所在行
        var game_name = tr.children().eq(0).text();  //获取该行的第一个td中的内容:项目名
        window.localStorage.setItem("game_name",game_name);  //所选的打分的项目名称存入缓存
        var teachClass = window.localStorage.getItem("tclass_no_scorein");
        console.log(teachClass);
        var year = window.localStorage.getItem("tclass_year_scorein");
        console.log(year);
        $("#my_tclass_game").modal("hide");
        $.ajax({
            type:"POST",
            url:"http://127.0.0.1:8080/student/select_student",
            data:{year:year,teachClass:teachClass},
            dataType:"json",
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success:function (data) {
                if(data.status==100){
                    $("#table_scorein").children("tbody").empty();
                    var tbody = "";
                    var tr = "<tr>";
                    $.each(data.data,function (index,content){
                        tr += "<td>" + content.studentId+"</td>";
                        tr += "<td>" + content.studentName+"</td>";
                        tr += "</tr>"
                    });
                    tbody += tr;
                    $("#table_scorein").children("tbody").append(tbody);
                    //给每个tr增加input
                    $("#tbody_scorein").find("tr").each(function () {
                        var tds="";
                        tds += "<td>"+window.localStorage.getItem("game_name")+"</td>";
                        tds += "<td><input type=\"text\" class=\"form-control\" style='width: 90px;'></td>";
                        $(this).append(tds);
                    });
                }else {
                    swal(data.msg);
                    $('#my_tclass_scorein').modal('hide');
                }
            },
            error:function () {
                swal("连接失败");
            }
        });
    });
})
