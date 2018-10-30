$(document).ready(function(){
    //SweetAlert
    swal.setDefaults({ confirmButtonColor: "#286090" });
    //测试
    var ss_name=window.localStorage.getItem("admin_name");
    $("#user span").text(ss_name);

    //账号管理菜单栏
	$("#account_m").click(function(){
		if($(this).siblings(".add_li").css("display")=="none"){
			$(this).siblings(".add_li").slideDown();
			$(this).parent().siblings("div").children(".add_li").css("display","none");
		}
	else
	{
		$(this).siblings(".add_li").slideUp();
	}
	});
	
	$("#account_next").click(function(){
		if($(".list_last").css("display")=="none"){
			$(".list_last").slideDown();
			$("#plus_minus").removeClass().addClass("glyphicon glyphicon-minus");
		}
		else{
			$(".list_last").slideUp();
			$("#plus_minus").removeClass().addClass("glyphicon glyphicon-plus");
		}
	});
	
	

	
	//成绩管理菜单栏
	$("#exam").click(function(){
		if($(this).siblings(".add_li").css("display")=="none"){
			$(this).siblings(".add_li").slideDown();
			$(this).parent().siblings("div").children(".add_li").css("display","none");
		}
		else{
			$(this).siblings(".add_li").slideUp();
		}
	});
	
	
	//教学班管理菜单栏
	$("#learn").click(function(){
		if($(this).siblings(".add_li").css("display")=="none"){
			$(this).siblings(".add_li").slideDown();
			$(this).parent().siblings("div").children(".add_li").css("display","none");
		}
		else{
			$(this).siblings(".add_li").slideUp();
		}
	});

	//考试科目模板管理菜单栏
	$("#design").click(function(){
		if($(this).siblings(".add_li").css("display")=="none"){
			$(this).siblings(".add_li").slideDown();
			$(this).parent().siblings("div").children(".add_li").css("display","none");
		}
		else{
			$(this).siblings(".add_li").slideUp();
		}
	});
	
	
	//补考管理菜单栏
	$("#reset").click(function(){

		if($(this).siblings(".add_li").css("display")=="none"){
			$(this).siblings(".add_li").slideDown();
			$(this).parent().siblings("div").children(".add_li").css("display","none");

		}
		else{
			$(this).siblings(".add_li").slideUp();
		}
	});	
	
	//标志
	$('.log').neonText({
		textColor:'white',
		textSize:'24pt',
		neonHighlight:'white',
		neonHighlightColor:'#286090',
		neonHighlightHover:'#337ab7',
		neonFontHover:'white'
	});
	
	$("#education").click(function(){
            $(this).button('loading').delay(1000).queue(function() {
            	$(this).button('reset');
            });        
    });
    
   	$("#polity").click(function(){
            $(this).button('loading').delay(1000).queue(function() {
            	$(this).button('reset');
            });        
    });
    
    
    
    //连接页面
	$("#home").click(function(){
    	$("#admin_home").siblings("div").css("display","none");
    	$("#admin_home").css("display","block");
	});
    
    $("#2").click(function(){
    	$("#search_student").siblings("div").css("display","none");
    	$("#search_student").css("display","block");
    });
    
   	$("#3").click(function(){
    	$("#search_teacher").siblings("div").css("display","none");
    	$("#search_teacher").css("display","block");
    });
    
    $("#4").click(function(){
    	$("#set_student").siblings("div").css("display","none");
    	$("#set_student").css("display","block");
    });
    $("#5").click(function(){
    	$("#set_teacher").siblings("div").css("display","none");
    	$("#set_teacher").css("display","block");
    });
    
    //修改密码
	$("#change_password").click(function(){
		$("#admin_cpassword").siblings("div").css("display","none");
		$("#admin_cpassword").css("display","block");
	});

    $("#6").click(function(){
		$("#score").siblings("div").css("display","none");
		$("#score").css("display","block");
    });

    $("#7").click(function(){
		$("#polity_score").siblings("div").css("display","none");
		$("#polity_score").css("display","block");
    });

    $("#8").click(function(){
		$("#education_score").siblings("div").css("display","none");
		$("#education_score").css("display","block");
    });
    
    $("#9").click(function(){
		$("#export").siblings("div").css("display","none");
		$("#export").css("display","block");
    });
    $("#10").click(function(){
		$("#tclass_search").siblings("div").css("display","none");
		$("#tclass_search").css("display","block");
    });
    $("#11").click(function(){
		$("#tclass_student").siblings("div").css("display","none");
		$("#tclass_student").css("display","block");
    });
    $("#12").click(function(){
		$("#tclass_addscore").siblings("div").css("display","none");
		$("#tclass_addscore").css("display","block");
    });
    $("#13").click(function(){
		$("#tclass_add").siblings("div").css("display","none");
		$("#tclass_add").css("display","block");

        $("#save_add_tclass_update").attr("disabled","false");
        $("#save_add_tclass").removeAttr("disabled");
		//初始化教师
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teacher/select_teacher',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<option>" + data.data[i].teacherName +"</option>"+
                            "<option style='display: none;'>" + data.data[i].id +"</option>"

                    }
                    $("#select_teacher").html(HTML_CODE);

                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("初始化失败");
            }
        });
        //初始化课程类型
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8080/model/select_model',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<option>" + data.data[i].modelName +"</option>"+
                            "<option style='display: none;'>" + data.data[i].id +"</option>"
                    }
                    $("#select_tclass").html(HTML_CODE);

                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("初始化失败");
            }
        });
    });
    $("#NEW13").click(function(){
        $("#add_ModelClass").siblings("div").css("display","none");
        $("#add_ModelClass").css("display","block");

        //显示所有模板类型
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8080/model/select_model',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                        for(var i=0;i<data.data.length;i++) {
                            HTML_CODE+=
                                "<option>" + data.data[i].modelName +"</option>"+
                                "<option style='display: none;'>" + data.data[i].id +"</option>"
                        }
                        $("#select_ModelClass").html(HTML_CODE);

                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"初始化失败",
                      type:"error"});
            }
        });

        //显示所有考试模板科目
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelsubject/select_model_subject',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<option>" + data.data[i].examName +"</option>"+
                            "<option style='display: none;'>" + data.data[i].id +"</option>"
                    }
                    $("#select_ModelSuject").html(HTML_CODE);

                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"初始化失败",
                      type:"error"});
            }
        });

    });
    //显示所有模板类型
    function SHOW_MODELCLASS_SELECT() {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8080/model/select_model',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<option>" + data.data[i].modelName +"</option>"+
                            "<option style='display: none;'>" + data.data[i].id +"</option>"
                    }
                    $("#select_ModelClass").html(HTML_CODE);

                }else{
                    swal({title:data.msg,
                        type:"error"});
                }
            },
            error: function(){
                swal({title:"初始化失败",
                    type:"error"});
            }
        });
    }
    $("#14").click(function(){
		$("#add").siblings("div").css("display","none");
		$("#add").css("display","block");

		//显示所有考试模板科目
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelsubject/select_model_subject',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].examName + "</td>"+
                            "<td><input type=\"button\" value=\"设置考试标准\" class=\"btn btn-default\" onclick='set_ExamS(this);'/>&nbsp;&nbsp;" +
                            "<input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#update_NewExamSubject\" onclick='save_ExamS(this);'/>&nbsp;&nbsp;" +
                            "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\"  onclick='del_ExamS(this);'/></td></tr>"
                    }
                    $("#exam_subject_detail").html(HTML_CODE);

                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("初始化失败");
            }
        });
    });
    $("#15").click(function(){
		$("#set").siblings("div").css("display","none");
		$("#set").css("display","block");
    });
    $("#16").click(function(){
		$("#set_score").siblings("div").css("display","none");
		$("#set_score").css("display","block");
    });
    $("#17").click(function(){
		swal("待确定!");
    });


    //Ajax请求
    //退出
    $("#exit").click(function(){
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/user/loginout',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    window.location.href="index.html";
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    });

    //修改密码
    $("#OK_Password").click(function(){
        var old_password=$("#old_password").val();
        var new_password=$("#new_password").val();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/user/resetpwd',
            data: {oldpwd:old_password,newpwd:new_password},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    alert(data.msg);
                }else{
                    swal({title:data.msg,
                          confirmButtonColor:"#286090",
                          imageUrl: "/resources/images/error.png" });
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    });

    //查询学生信息
    $("#search_btn").click(function(){
        var student_class=$("#search_student_class").val();
        var studentId=$("#search_student_ID").val();
        var studentName=$("#search_student_name").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/student/select_student',
            data: {excutiveClass:student_class,studentId:studentId,studentName:studentName},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                        "<tr><td>" + data.data[i].studentId + "</td>" +
                        "<td>" + data.data[i].studentName + "</td>" +
                        "<td>" + data.data[i].studentSex + "</td>" +
                        "<td>" + data.data[i].studentCollege + "</td>" +
                        "<td>" + data.data[i].currentExecutiveClass + "</td>" +
                        "<td><button class=\"btn btn-default\" onclick=\"e_student(this);\">编辑</button>&nbsp;&nbsp;" +
                        "<button class=\"btn btn-primary\" onclick=\"r_password();\">重置密码</button>&nbsp;&nbsp;" +
                        "<button class=\"btn btn-danger\" onclick='d_student(this);'>删除</button></td></tr>"
                    }
                    $("#search_content").html(HTML_CODE);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    });
	//显示所有学生
	function Show_Allstudent_In() {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/student/select_student',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].studentId + "</td>" +
                            "<td>" + data.data[i].studentName + "</td>" +
                            "<td>" + data.data[i].studentSex + "</td>" +
                            "<td>" + data.data[i].studentCollege + "</td>" +
                            "<td>" + data.data[i].currentExecutiveClass + "</td>" +
                            "<td><button class=\"btn btn-default\" onclick=\"e_student(this);\">编辑</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-primary\" onclick=\"r_password();\">重置密码</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-danger\" onclick='d_student(this);'>删除</button></td></tr>"
                    }
                    $("#search_content").html(HTML_CODE);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });

    }
    //新增学生
    $("#btn_add_student").click(function(){
        var studentId=$("#add_student_ID").val();
        var studentName=$("#add_student_NAME").val();
        var studentSex=$("#add_student_SEX").val();
        var studentWork=$("#add_student_WORK").val();
        var studentClass=$("#add_student_CLASS").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/student/insert_student_eclass',
            data: {studentId:studentId,studentName:studentName,studentSex:studentSex,studentCollege:studentWork,currentExecutiveClass:studentClass},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    Show_Allstudent_In();
					$("#add_student input").val("");
					$("#add_student").modal('hide');
					swal({title:data.data,
                          type:"success"});
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    });


    //查询教师信息
    $("#search_teacher_btn").click(function(){
        var teacherId=$("#search_teacher_id").val();
        var teacherName=$("#search_teacher_name").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teacher/like_select_teacher',
            data: {name:teacherName},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].teacherId + "</td>" +
                            "<td>" + data.data[i].teacherName + "</td>" +
                            "<td>" + data.data[i].teacherSex + "</td>" +
                            "<td><button class=\"btn btn-default\" onclick=\"e_teacher(this);\">编辑</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-primary\" onclick=\"r_password();\">重置密码</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-danger\" onclick='d_teacher(this);'>删除</button></td></tr>"
                    }
                    $("#search_teacher_content").html(HTML_CODE);
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal("连接失败");
            }
        });
    });
    //显示所有教工
    function Show_AllTeacher_In() {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teacher/select_teacher',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].teacherId + "</td>" +
                            "<td>" + data.data[i].teacherName + "</td>" +
                            "<td>" + data.data[i].teacherSex + "</td>" +
                            "<td><button class=\"btn btn-default\" onclick=\"e_teacher(this);\">编辑</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-primary\" onclick=\"r_password();\">重置密码</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-danger\" onclick='d_teacher(this);'>删除</button></td></tr>"
                    }
                    $("#search_teacher_content").html(HTML_CODE);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    }
    //新增教工
    $("#btn_add_teacher").click(function(){
        var teacherId=$("#add_teacher_ID").val();
        var teacherName=$("#add_teacher_NAME").val();
        var teacherSex=$("#add_teacher_SEX").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teacher/insert_teacher',
            data: {teacherId:teacherId,teacherName:teacherName,teacherSex:teacherSex},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    Show_AllTeacher_In();
                    $("#add_teacher input").val("");
                    $("#add_teacher").modal('hide');
                    swal({title:data.data,
                          type:"success"});
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
	//显示所有教工信息
    $("#search_allteacher_btn").click(function(){

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teacher/select_teacher',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].teacherId + "</td>" +
                            "<td>" + data.data[i].teacherName + "</td>" +
                            "<td>" + data.data[i].teacherSex + "</td>" +
                            "<td><button class=\"btn btn-default\" onclick=\"e_teacher(this);\">编辑</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-primary\" onclick=\"r_password();\">重置密码</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-danger\" onclick='d_teacher(this);'>删除</button></td></tr>"
                    }
                    $("#search_teacher_content").html(HTML_CODE);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    });

    //编辑学生
    $("#save_update_student").click(function(){
        var studentOId=$("#update_student_OID").val();
        var studentNId=$("#update_student_NID").val();
        var studentNAME=$("#update_student_NAME").val();
        var studentSEX=$("#update_student_SEX").val();
        var studentWORK=$("#update_student_WORK").val();
        var studentClass=$("#update_student_CLASS").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/student/update_student',
            data: {oldStudentId:studentOId,studentId:studentNId,studentName:studentNAME,studentSex:studentSEX,studentCollege:studentWORK,currentExecutiveClass:studentClass},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#save_edit_student input").val("");
                    $("#search_student").siblings("div").css("display","none");
                    $("#search_student").css("display","block");
                    Show_Allstudent_In();
                    swal({title:data.data,
                          type:"success"});
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                    type:"error"});
            }
        });
    });
    //退出编辑学生界面
    $("#update_student_exit").click(function(){
        $("#search_student").siblings("div").css("display","none");
        $("#search_student").css("display","block");
    });

    //编辑教工
    $("#save_update_teacher").click(function(){
        var teacherOId=$("#update_teacher_OID").val();
        var teacherNId=$("#update_teacher_NID").val();
        var teacherNAME=$("#update_teacher_NAME").val();
        var teacherSEX=$("#update_teacher_SEX").val();


        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teacher/update_teacher',
            data: {oldTeacherId:teacherOId,teacherId:teacherNId,teacherName:teacherNAME,teacherSex:teacherSEX},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#save_edit_teacher input").val("");
                    $("#search_teacher").siblings("div").css("display","none");
                    $("#search_teacher").css("display","block");
                    Show_AllTeacher_In();
                    swal({title:data.data,
                          type:"success"});
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
    //退出编辑教工界面
    $("#update_teacher_exit").click(function(){
        $("#search_teacher").siblings("div").css("display","none");
        $("#search_teacher").css("display","block");
    });

    //学生查询成绩
    $("#student_search_score").click(function(){
        var scoreOId=$("#search_score_id").val();
        var year="2016";

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/score/scoredetail',
            data: {studentId:scoreOId,year:year},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var jsondata=$.parseJSON(data.data);
                    // alert(jsondata.身高);
                    // alert(data.msg);
                    var HTML_CODE="";
                    $.each(jsondata,function (key,value) {
                        HTML_CODE+="<tr><td>"+key+"</td>"+
                                       "<td>"+value+"</td>"+
                                       "<td>100</td></tr>"});
                    $("#score_detail").html(HTML_CODE);

                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });

    //行政班成绩查询
    $("#polity_search_btn").click(function(){
        var p_class=$("#polity_class").val();

        var year="2016";
        var limit=$("#score_limit").find("option:selected").val();
        var flag;
        switch (limit){
            case "=":
                flag="1";
                break;
            case ">":
                flag="2";
                break;
            case "<":
                flag="3";
                break;
        }

        var sc=$("#score_range").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/score/eclass_score',
            data: {executiveClassId:p_class,year:year,flag:flag,score:sc},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].studentId + "</td>" +
                            "<td>" + data.data[i].studentName + "</td>" +
                            "<td>" + data.data[i].sumSocore + "</td>"+
                            "<td>" + data.data[i].studentCollege + "</td></tr>"
                    }
                    $("#polity_score_table").html(HTML_CODE);

                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
    //教学班成绩查询
    $("#teachclass_search_btn").click(function(){
        var t_class=$("#teach_class").val();
        var limit=$("#teach_class_select").find("option:selected").val();
        var flag;
        switch (limit){
            case "=":
                flag="1";
                break;
            case ">":
                flag="2";
                break;
            case "<":
                flag="3";
                break;
        }

        var sc=$("#teach_class_score").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/score/tclass_score',
            data: {teachClassId:t_class,flag:flag,score:sc},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].studentId + "</td>" +
                            "<td>" + data.data[i].studentName + "</td>" +
                            "<td>" + data.data[i].sumSocore + "</td>"+
                            "<td>" + data.data[i].studentCollege+"</td>"+
                            "<td><input type=\"button\" value=\"查看详情\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#v_detail\" onclick='show_detail(this);'/></td></tr>"
                    }
                    $("#teacher_score_detail").html(HTML_CODE);

                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
    //导出体侧成绩

    //教学班查询
    $("#teacher_class_search_btn").click(function(){

        var teacherName=$("#teacher_name").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teachclass/select_tclass',
            data: {teacherName:teacherName},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + "<span style='display: none;'>"+data.data[i].classId+"</span>"+data.data[i].className + "</td>" +
                            "<td>" + data.data[i].teacherName + "</td>" +
                            "<td><button class=\"btn btn-default\" onclick=\"manege_student(this);\">学生管理</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick=\"dao_grade(this);\">导入成绩</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick='write_grade(this);'>录入成绩</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick='search_grade(this);'>查询成绩</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick='download_grade(this);'>成绩下载</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-primary\" onclick='edit_tclass(this);'>编辑教学班</button>&nbsp;&nbsp;" +
                            "</td></tr>"
                    }
                    $("#show_teachclass").html(HTML_CODE);
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });

    });

    //根据任课教师姓名显示相应教学班
    function show_tclass_in(teacherName) {
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teachclass/select_tclass',
            data: {teacherName:teacherName},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + "<span style='display: none;'>"+data.data[i].classId+"</span>"+data.data[i].className + "</td>" +
                            "<td>" + data.data[i].teacherName + "</td>" +
                            "<td><button class=\"btn btn-default\" onclick=\"manege_student(this);\">学生管理</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick=\"dao_grade(this);\">导入成绩</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick='write_grade(this);'>录入成绩</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick='search_grade(this);'>查询成绩</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-default\" onclick='download_grade(this);'>成绩下载</button>&nbsp;&nbsp;" +
                            "<button class=\"btn btn-primary\" onclick='edit_tclass(this);'>编辑教学班</button>&nbsp;&nbsp;" +
                            "</td></tr>"
                    }
                    $("#show_teachclass").html(HTML_CODE);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    }
    //教学班学生管理
    $("#search_teach_class_btn").click(function (){
        var teachClassId=$("#teach_class_student").val();
        $("#add_tclass_student_ClassID").val(teachClassId);
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/student/select_student',
            data: {teachClass:teachClassId},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].studentId + "</td>" +
                            "<td>" + data.data[i].studentName + "</td>" +
                            "<td><button class=\"btn btn-danger\" onclick=\"del_student(this);\">删除</button></td></tr>"

                    }
                    $("#show_teach_class_student").html(HTML_CODE);
                }else{

                    $("#show_teach_class_student").html("<tr class=\"active\"><td colspan=\"3\">暂没有相关数据</td></tr>");
                    swal({title:data.msg,
                          type:"error"});

                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
    //显示所有相应教学班学生
    function show_tclass_student_in(){
        var teachClassId=$("#add_tclass_student_ClassID").val();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/student/select_student',
            data: {teachClass:teachClassId},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td>" + data.data[i].studentId + "</td>" +
                            "<td>" + data.data[i].studentName + "</td>" +
                            "<td><button class=\"btn btn-danger\" onclick=\"del_student(this);\">删除</button></td></tr>"

                    }
                    $("#show_teach_class_student").html(HTML_CODE);
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    }
    //教学班新增学生
    $("#btn_add_tclass_student").click(function (){
        var teachClassId=$("#add_tclass_student_ClassID").val();
        var studentID=$("#add_tclass_student_ID").val();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/student/insert_student_tclass',
            data: {teachClass:teachClassId,studentId:studentID},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    show_tclass_student_in();
                    $("#add_tclass_student input").val("");
                    $("#add_tclass_student").modal('hide');
                    swal({title:data.data,
                          type:"success"});
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
    //教学班成绩录入
    //新增教学班
    $("#save_add_tclass").click(function (){
        var tclass=$("#add_tclass").val();//班级名
        var year=$("#add_tclass_year").val();//年份
        var teacher_Name=$("#select_teacher").find("option:selected").val();//任课教师姓名
        var teacher_Id=$("#select_teacher").find("option:selected").next().val();//任课教师ID
        var tclass_Id=$("#select_tclass").find("option:selected").next().val();//课程类型ID
        var grade=$("#grade").find("option:selected").val();//标准
        // alert(tclass+year+teacher_Id+tclass_Id+grade);

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teachclass/insert_tclass',
            data: {className:tclass,schoolYear:year,classTeacherId:teacher_Id,modelClassId:tclass_Id,standard:grade},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#save_edit_tclass input").val("");
                    $("#tclass_search").siblings("div").css("display","none");
                    $("#tclass_search").css("display","block");
                    show_tclass_in(teacher_Name);
                    swal({title:data.msg,
                          type:"success"});
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"链接失败",
                      type:"error"});
            }
        });
    });
    //编辑教学班
    $("#save_add_tclass_update").click(function (){
        var tclass_ID=$("#add_tclass_ID").val();//班级编号
        var tclass=$("#add_tclass").val();//班级名
        var year=$("#add_tclass_year").val();//年份
        var teacher_Name=$("#select_teacher").find("option:selected").val();//任课教师姓名
        var teacher_Id=$("#select_teacher").find("option:selected").next().val();//任课教师ID
        var tclass_Id=$("#select_tclass").find("option:selected").next().val();//课程类型ID
        var grade=$("#grade").find("option:selected").val();//标准
        // alert(tclass_ID+tclass+year+teacher_Id+tclass_Id+grade);

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/teachclass/update_tclass_teacher',
            data: {teachClassId:tclass_ID,className:tclass,schoolYear:year,classTeacherId:teacher_Id,modelClassId:tclass_Id,standard:grade},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#save_edit_tclass input").val("");
                    $("#tclass_search").siblings("div").css("display","none");
                    $("#tclass_search").css("display","block");
                    show_tclass_in(teacher_Name);
                    swal({title:data.msg,
                          type:"success"});
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
    function show_ExamSubject_in(){
        //显示所有考试模板科目
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelsubject/select_model_subject',
            data: {},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].examName + "</td>"+
                            "<td><input type=\"button\" value=\"设置考试标准\" class=\"btn btn-default\" onclick='set_ExamS(this);'/>&nbsp;&nbsp;" +
                            "<input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#update_NewExamSubject\" onclick='save_ExamS(this);' />&nbsp;&nbsp;" +
                            "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='del_ExamS(this);'/></td></tr>"
                    }
                    $("#exam_subject_detail").html(HTML_CODE);

                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("初始化失败");
            }
        });

    }
    //设置模板类型
    $("#search_ModelClass").click(function(){
        var ModelClass=$("#select_ModelClass").find("option:selected").val();//课程类型
        // var ModelClass_Id=$("#select_ModelClass").find("option:selected").next().val();//课程类型ID
        var ModelClass_Id=$("#select_ModelClass").find("option:selected").next().val();//课程类型ID
        //显示模板类型
        var HTML_CODE1=
                "<tr><td><span style='display: none;'>"+ModelClass_Id+"</span>"+ModelClass+ "</td>"+
                "<td><input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#update_ModelClass\" onclick='save_ModelClass(this);'/>&nbsp;&nbsp;" +
                "</td></tr>"
        $("#ModelClass_subject").html(HTML_CODE1);


        //显示相应考试模板科目
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8080/model/select_one_model_subject',
            data: {modelId:ModelClass_Id},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].examName + "</td>"+
                            "<td><input type=\"button\" value=\"删除\" class=\"btn btn-danger\"  onclick='del_ModelClass_ExamS(this);'/></td></tr>"
                    }
                    $("#ModelClass_subject_detail").html(HTML_CODE);
                    $("#SHOW_BTN").css("display","block");

                }else{
                    swal({title:data.msg,
                        type:"error"});
                    $("#ModelClass_subject_detail").html("<tr class=\"active\"><td colspan=\"2\">暂没有相关数据</td></tr>");

                }
            },
            error: function(){
                swal({title:"连接失败",
                    type:"error"});
            }
        });

    });
    //显示相应模板科目
    function show_ModelClass_Subject_in() {
        var ModelClass_Id=$("#select_ModelClass").find("option:selected").next().val();//课程类型ID
        //显示相应考试模板科目
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8080/model/select_one_model_subject',
            data: {modelId:ModelClass_Id},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].examName + "</td>"+
                            "<td><input type=\"button\" value=\"删除\" class=\"btn btn-danger\"  onclick='del_ModelClass_ExamS(this);'/></td></tr>"
                    }
                    $("#ModelClass_subject_detail").html(HTML_CODE);


                }else{
                    swal({title:data.msg,
                        type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                    type:"error"});
            }
        });
    }
    //添加模板类型
    $("#add_NewModelClass_BTN").click(function(){
        var modelName=$("#ModelClass_Name").val();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/model/insert_model',
            data: {modelName:modelName},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    //显示
                    SHOW_MODELCLASS_SELECT();

                    $("#add_NewModelClass input").val("");
                    $("#add_NewModelClass").modal('hide');
                    swal({title:data.msg,
                        type:"success"});

                }else{
                    $("#add_NewModelClass input").val("");
                    swal({title:data.msg,
                        type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                    type:"error"});
            }
        });
    });
    //更新模板类型
    $("#update_NewModelClass_BTN").click(function(){
        var id=$("#update_ModelClass_ID").val();
        var modelName=$("#update_ModelClass_Name").val();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/model/update_model',
            data: {id:id,modelName:modelName},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    //显示
                    SHOW_MODELCLASS_SELECT();
                    //显示模板类型
                    var HTML_CODE1=
                        "<tr><td><span style='display: none;'>"+id+"</span>"+modelName+ "</td>"+
                        "<td><input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#update_ModelClass\" onclick='save_ModelClass(this);'/></td></tr>"
                    $("#ModelClass_subject").html(HTML_CODE1);

                    $("#update_ModelClass input").val("");
                    $("#update_ModelClass").modal('hide');
                    swal({title:data.msg,
                        type:"success"});

                }else{
                    $("#add_NewModelClass input").val("");
                    swal({title:data.msg,
                        type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                    type:"error"});
            }
        });
    });
    //添加模板科目
    $("#add_NewExamSubject_BTN").click(function(){
        var ModelClass_Id=$("#select_ModelClass").find("option:selected").next().val();//课程类型ID
        var ID_ModelS=$("#select_ModelSuject").find("option:selected").next().val();//模板科目ID
        var modelIdAndSubjectId=ModelClass_Id+","+ID_ModelS;
        // alert(modelIdAndSubjectId);
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/model/set_model_subject',
            data: {modelIdAndSubjectId:modelIdAndSubjectId},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    //显示
                    show_ModelClass_Subject_in();
                    swal({title:data.msg,
                          type:"success"});
                    $("#add_NewModelSubject").modal('hide');
                }else{
                    swal({title:data.msg,
                          type:"error"});
                }
            },
            error: function(){
                swal({title:"连接失败",
                      type:"error"});
            }
        });
    });
    //设置模板科目
    $("#btn_add_NewExamSubject").click(function(){
        var add_NewExamSubject_Name=$("#add_NewExamSubject_Name").val();//获取考试科目名称
        //显示所有考试模板科目
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelsubject/insert_model_subject',
            data: {modelSubjectName:add_NewExamSubject_Name},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#add_NewExamSubject input").val("");
                    $("#add_NewExamSubject").modal('hide');
                    show_ExamSubject_in();
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("初始化失败");
            }
        });
    });

    //更新考试科目
    $("#btn_update_NewExamSubject").click(function(){
        var ID=$("#update_NewExamSubject_Id").val();
        var NAME=$("#update_NewExamSubject_Name").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelsubject/update_model_subject',
            data: {subjectId:ID,newSubjectName:NAME},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#update_NewExamSubject input").val("");
                    $("#update_NewExamSubject").modal('hide');
                    show_ExamSubject_in();
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });

    });
    //返回
    $("#btn_BACK").click(function(){
        $("#add").siblings("div").css("display","none");
        $("#add").css("display","block");
    });
    //显示相应模板的考试标准
    function show_Standard() {
        var show_id=$("#ES_ID").val();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelstandard/select_model_standard',
            data: {modelSubjectId:show_id},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].modelStandardName + "</td>"+
                            "<td><input type=\"button\" value=\"修改标准\" class=\"btn btn-default\" onclick='C_ExamS(this);'/>&nbsp;&nbsp;" +
                            "<input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Standard_NewExamSubject\" onclick='E_ExamS(this);'/>&nbsp;&nbsp;" +
                            "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='D_ExamS(this);'/></td></tr>"
                    }
                    $("#Exam_Standard").html(HTML_CODE);

                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("初始化失败");
            }
        });
    }
    //新增考试标准
    $("#btn_add_NewStandard").click(function(){
        var modelSubjectId=$("#ES_ID").val();
        var modelStandardName=$("#add_NewStandard_Name").val();
        var weight=$("#add_NewStandard_W").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelstandard/insert_model_standard',
            data: {modelSubjectId:modelSubjectId,modelStandardName:modelStandardName,weight:weight},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#add_NewStandard input").val("");
                    $("#add_NewStandard").modal('hide');
                    show_Standard();
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("请准确填写权重的数据格式");
            }
        });

    });

    //更新考试标准
    $("#btn_Standard_NewExamSubject").click(function(){
        var ID=$("#Standard_NewExamSubject_Id").val();
        var NAME=$("#Standard_NewExamSubject_Name").val();
        var WE=$("#Standard_NewExamSubject_W").val();


        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/modelstandard/update_model_standard',
            data: {id:ID,modelStandardName:NAME,weight:WE},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#Standard_NewExamSubject input").val("");
                    $("#Standard_NewExamSubject").modal('hide');
                    show_Standard();
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("请准确填写权重的数据格式");
            }
        });
    });
    //显示得分范围
    function show_SCORE_IN() {
        var show_id=$("#Standard_modelStandardId").val();
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/scorerange/select_model_range',
            data: {modelStandardId:show_id},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    var HTML_CODE="";
                    for(var i=0;i<data.data.length;i++) {
                        HTML_CODE+=
                            "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+
                            data.data[i].min+"</td>"+"<td>"+data.data[i].max+"</td>"+"<td>"+data.data[i].score+"</td>"+
                            "<td><input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modal_set_score\" onclick='E_Standard(this);'/>&nbsp;&nbsp;" +
                            "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='D_Standard(this);'/></td></tr>"
                    }
                    $("#Standard_Set_Score").html(HTML_CODE);

                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });

    }

    //新增得分范围
    $("#btn_add_NewScore").click(function (){
        var modelStandardId=$("#Standard_modelStandardId").val();
        var MIN=$("#SET_SCORE_MIN").val();
        var MAX=$("#SET_SCORE_MAX").val();
        var SCORE=$("#SET_SCORE_SCORE").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/scorerange/insert_model_range',
            data: {min:MIN,max:MAX,score:SCORE,modelStandardId:modelStandardId},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#add_NewStandard_score input").val("");
                    $("#add_NewStandard_score").modal('hide');
                    show_SCORE_IN();
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });

    });
    //更新得分范围
    $("#btn_update_SetScore").click(function (){

        var ID=$("#limit_score_ID").val();
        var MIN=$("#SET_SCORE_MIN2").val();
        var MAX=$("#SET_SCORE_MAX2").val();
        var SCORE=$("#SET_SCORE_SCORE2").val();

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8080/scorerange/update_model_range',
            data: {id:ID,min:MIN,max:MAX,score:SCORE},
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: "json",
            success: function(data){
                if(data.status==100){
                    $("#modal_set_score input").val("");
                    $("#modal_set_score").modal('hide');
                    show_SCORE_IN();
                    alert(data.msg);
                }else{
                    alert(data.msg);
                }
            },
            error: function(){
                alert("连接失败");
            }
        });
    });
    //返回模板标准
    $("#back_to_standard").click(function(){
        $("#set").siblings("div").css("display","none");
        $("#set").css("display","block");
    });

    
});
//显示所有学生信息
function Show_Allstudent() {
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/student/select_student',
        data: {},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td>" + data.data[i].studentId + "</td>" +
                        "<td>" + data.data[i].studentName + "</td>" +
                        "<td>" + data.data[i].studentSex + "</td>" +
                        "<td>" + data.data[i].studentCollege + "</td>" +
                        "<td>" + data.data[i].currentExecutiveClass + "</td>" +
                        "<td><button class=\"btn btn-default\" onclick=\"e_student(this);\">编辑</button>&nbsp;&nbsp;" +
                        "<button class=\"btn btn-primary\" onclick=\"r_password();\">重置密码</button>&nbsp;&nbsp;" +
                        "<button class=\"btn btn-danger\" onclick='d_student(this);'>删除</button></td></tr>"
                }
                $("#search_content").html(HTML_CODE);
            }else{
                alert(data.msg);
            }
        },
        error: function(){
            alert("连接失败");
        }
    });
}
//显示所有教工信息
function Show_AllTeacher() {
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/teacher/select_teacher',
        data: {},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td>" + data.data[i].teacherId + "</td>" +
                        "<td>" + data.data[i].teacherName + "</td>" +
                        "<td>" + data.data[i].teacherSex + "</td>" +
                        "<td><button class=\"btn btn-default\" onclick=\"e_teacher(this);\">编辑</button>&nbsp;&nbsp;" +
                        "<button class=\"btn btn-primary\" onclick=\"r_password();\">重置密码</button>&nbsp;&nbsp;" +
                        "<button class=\"btn btn-danger\" onclick='d_teacher(this);'>删除</button></td></tr>"
                }
                $("#search_teacher_content").html(HTML_CODE);
            }else{
                alert(data.msg);
            }
        },
        error: function(){
            alert("连接失败");
        }
    });
}
//编辑学生函数
function e_student(e){
    $("#set_student").siblings("div").css("display","none");
    $("#set_student").css("display","block");
    var Old_ID=$(e).parent().parent().children().eq(0).text();
    $("#update_student_OID").val(Old_ID);

}
//编辑教工
function e_teacher(e){
    $("#set_teacher").siblings("div").css("display","none");
    $("#set_teacher").css("display","block");
    var Old_ID_teacher=$(e).parent().parent().children().eq(0).text();
    $("#update_teacher_OID").val(Old_ID_teacher);
}
//重置密码函数
function r_password() {
    alert("成功");
}
//删除学生函数
function d_student(e) {
    //测试
    // $("#search_content").find("tr:eq(0)").find("td:eq(0)").css("color","red");
    var ID_STUDENT=$(e).parent().parent().children().eq(0).text();
    swal({
            title: "确定删除吗？",
            showCancelButton: true,
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false,
            imageUrl: "/resources/images/delete_tip.png"
        },
        function(isConfirm){
            if (isConfirm) {
                //Ajax请求
                $.ajax({
                    type: 'POST',
                    url: 'http://127.0.0.1:8080/student/delete_student',
                    data: {studentId:ID_STUDENT},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.status==100){
                            Show_Allstudent();
                            swal({title:"删除！",
                                text:data.data,
                                type:"success"
                            });
                        }else{
                            swal(data.data);
                        }
                    },
                    error: function(){
                        swal("连接失败");
                    }
                });

            } else {
                swal({title:"取消！",
                      text:"删除学生操作已取消!",
                      imageUrl: "/resources/images/cancel.png" });
            }
        });
}
function d_teacher(e) {
    var ID_TEACHER=$(e).parent().parent().children().eq(0).text();
    // alert(ID_TEACHER);
    swal({
            title: "确定删除吗？",
            showCancelButton: true,
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false,
            imageUrl: "/resources/images/delete_tip.png"
        },
        function(isConfirm){
            if (isConfirm) {
                //Ajax请求
                $.ajax({
                    type: 'POST',
                    url: 'http://127.0.0.1:8080/teacher/delete_teacher',
                    data: {teacherId:ID_TEACHER},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.status==100){
                            Show_AllTeacher();
                            swal({title:"删除！",
                                text:data.data,
                                type:"success"
                            });
                        }else{
                            swal(data.data);
                        }
                    },
                    error: function(){
                        swal("连接失败");
                    }
                });

            } else {
                swal({title:"取消！",
                    text:"删除教工操作已取消!",
                    imageUrl: "/resources/images/cancel.png" });
            }
        });
}

function show_detail(e) {
    var show_id=$(e).parent().parent().children().eq(0).text();

    var year="2016";

    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/score/scoredetail',
        data: {studentId:show_id,year:year},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var jsondata=$.parseJSON(data.data);
                // alert(jsondata.身高);
                // alert(data.msg);
                var HTML_CODE="";
                $.each(jsondata,function (key,value) {
                    HTML_CODE+="<tr><td>"+key+"</td>"+
                        "<td>"+value+"</td></tr>"
                });
                $("#show_detail_modal").html(HTML_CODE);

            }else{
                alert(data.msg);
            }
        },
        error: function(){
            alert("连接失败");
        }
    });

}

//学生管理
function manege_student(e) {
    $("#tclass_student").siblings("div").css("display","none");
    $("#tclass_student").css("display","block");
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();
    $("#teach_class_student").val(show_id);
    $("#add_tclass_student_ClassID").val(show_id);
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/student/select_student',
        data: {teachClass:show_id},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td>" + data.data[i].studentId + "</td>" +
                        "<td>" + data.data[i].studentName + "</td>" +
                        "<td><button class=\"btn btn-danger\" onclick=\"del_student(this);\">删除</button></td></tr>"

                }
                $("#show_teach_class_student").html(HTML_CODE);
            }else{
                //查询记录为空
                $("#show_teach_class_student").html("<tr class=\"active\"><td colspan=\"3\">暂没有相关数据</td></tr>");
                swal({title:data.msg,
                      type:"error"});
            }
        },
        error: function(){
            swal({title:"连接失败",
                  type:"error"});
        }
    });


}
//导入成绩
function dao_grade(e) {
    alert("成功");

}
//录入成绩
function write_grade(e) {
    alert("成功");
}
//查询成绩
function search_grade(e) {
    alert("成功");
}
//成绩下载
function download_grade(e) {
    alert("成功");
}
//编辑教学班
function edit_tclass(e) {
    $("#tclass_add").siblings("div").css("display","none");
    $("#tclass_add").css("display","block");
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();//教学班号
    $("#add_tclass_ID").val(show_id);
    var tclass_Name=$(e).parent().parent().children().eq(0).text();//班级名称
    //正则表达式
    tclass_Name=tclass_Name.replace(show_id,"");
    $("#add_tclass").val(tclass_Name);

    $("#save_add_tclass").attr("disabled","false");
    $("#save_add_tclass_update").removeAttr("disabled");

    //初始化教师
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/teacher/select_teacher',
        data: {},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<option>" + data.data[i].teacherName +"</option>"+
                        "<option style='display: none;'>" + data.data[i].id +"</option>"

                }
                $("#select_teacher").html(HTML_CODE);

            }else{
                swal({title:data.msg,
                      type:"error"});
            }
        },
        error: function(){
            swal({title:"初始化失败",
                  type:"error"});
        }
    });
    //初始化课程类型
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8080/model/select_model',
        data: {},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<option>" + data.data[i].modelName +"</option>"+
                        "<option style='display: none;'>" + data.data[i].id +"</option>"
                }
                $("#select_tclass").html(HTML_CODE);

            }else{
                swal({title:data.msg,
                      type:"error"});
            }
        },
        error: function(){
            swal({title:"初始化失败",
                  type:"error"});
        }
    });
}


//教学班删除学生
function del_student(e) {
    var ID_STUDENT=$(e).parent().parent().children().eq(0).text();
    swal({
            title: "确定删除吗？",
            showCancelButton: true,
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false,
            imageUrl: "/resources/images/delete_tip.png"
        },
        function(isConfirm){
            if (isConfirm) {
                //Ajax请求
                $.ajax({
                    type: 'POST',
                    url: 'http://127.0.0.1:8080/student/delete_student_tclass',
                    data: {studentId:ID_STUDENT},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.status==100){
                            show_teachclass_student();
                            swal({title:"删除！",
                                text:data.data,
                                type:"success"
                            });
                        }else{
                            swal({
                                title:data.data,
                                type:"error"
                            });
                        }
                    },
                    error: function(){
                        swal({
                            title:"连接失败",
                            type:"error"
                        });
                    }
                });
            } else {
                swal({title:"取消！",
                    text:"删除学生操作已取消!",
                    imageUrl: "/resources/images/cancel.png" });
            }
        });

}
//显示相应教学班的学生
function show_teachclass_student() {
    var teachClassId=$("#teach_class_student").val();
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/student/select_student',
        data: {teachClass:teachClassId},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td>" + data.data[i].studentId + "</td>" +
                        "<td>" + data.data[i].studentName + "</td>" +
                        "<td><button class=\"btn btn-danger\" onclick=\"del_student(this);\">删除</button></td></tr>"

                }
                $("#show_teach_class_student").html(HTML_CODE);
            }else{
                $("#show_teach_class_student").html("<tr class=\"active\"><td colspan=\"3\">暂没有相关数据</td></tr>");
                swal({
                    title:data.data,
                    type:"error"
                });
            }
        },
        error: function(){
            swal({
                title:"连接失败",
                type:"error"
            });
        }
    });
}
//设置考试模板
function set_ExamS(e) {
    $("#set").siblings("div").css("display","none");
    $("#set").css("display","block");
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();//考试科目编号
    $("#ES_ID").val(show_id);
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/modelstandard/select_model_standard',
        data: {modelSubjectId:show_id},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].modelStandardName + "</td>"+
                        "<td><input type=\"button\" value=\"修改标准\" class=\"btn btn-default\" onclick='C_ExamS(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Standard_NewExamSubject\" onclick='E_ExamS(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='D_ExamS(this);'/></td></tr>"
                }
                $("#Exam_Standard").html(HTML_CODE);

            }else{
                var Clear_CODE="<tr class=\"active\"> <td colspan=\"2\">暂没有相关数据</td></tr>";
                $("#Exam_Standard").html(Clear_CODE);

            }
        },
        error: function(){
            swal({
                title:"初始化失败",
                type:"error"
            });
        }
    });

}
//编辑
function save_ExamS(e) {
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();//考试科目编号
    var show_name=$(e).parent().parent().children().eq(0).text();
    show_name=show_name.replace(show_id,"");
    $("#update_NewExamSubject_Id").val(show_id);
    $("#update_NewExamSubject_Name").val(show_name);
}
//显示所有考试科目out
function show_ExamSubject_out() {
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/modelsubject/select_model_subject',
        data: {},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].examName + "</td>"+
                        "<td><input type=\"button\" value=\"设置考试标准\" class=\"btn btn-default\" onclick='set_ExamS(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#update_NewExamSubject\" onclick='save_ExamS(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='del_ExamS(this);'/></td></tr>"
                }
                $("#exam_subject_detail").html(HTML_CODE);

            }else{
                alert(data.msg);
            }
        },
        error: function(){
            alert("初始化失败");
        }
    });
}
//删除考试科目
function del_ExamS(e) {
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();//考试科目编号
    swal({
            title: "确定删除吗？",
            showCancelButton: true,
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false,
            imageUrl: "/resources/images/delete_tip.png"
        },
        function(isConfirm){
            if (isConfirm) {
                //Ajax请求
                $.ajax({
                    type: 'POST',
                    url: 'http://127.0.0.1:8080/modelsubject/delete_model_subject',
                    data: {modelSubjectId:show_id},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.status==100){
                            show_ExamSubject_out();
                            swal({title:"删除！",
                                text:data.msg,
                                type:"success"
                            });
                        }else{
                            swal({title:data.msg,
                                type:"error"
                            });
                        }
                    },
                    error: function(){
                        swal({title:"连接失败",
                            type:"error"
                        });
                    }
                });
            } else {
                swal({title:"取消！",
                    text:"删除操作已取消!",
                    imageUrl: "/resources/images/cancel.png" });
            }
        });

}
//显示相应模板标准
function show_Standard_out() {
    var show_id=$("#ES_ID").val();
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/modelstandard/select_model_standard',
        data: {modelSubjectId:show_id},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].modelStandardName + "</td>"+
                        "<td><input type=\"button\" value=\"修改标准\" class=\"btn btn-default\" onclick='C_ExamS(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Standard_NewExamSubject\" onclick='E_ExamS(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='D_ExamS(this);'/></td></tr>"
                }
                $("#Exam_Standard").html(HTML_CODE);

            }else{
                alert(data.msg);
            }
        },
        error: function(){
            alert("初始化失败");
        }
    });
}
//修改标准
function C_ExamS(e) {
    $("#set_score").siblings("div").css("display","none");
    $("#set_score").css("display","block");

    var show_id=$(e).parent().parent().children().eq(0).find("span").text();
    $("#Standard_modelStandardId").val(show_id);
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/scorerange/select_model_range',
        data: {modelStandardId:show_id},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+
                        data.data[i].min+"</td>"+"<td>"+data.data[i].max+"</td>"+"<td>"+data.data[i].score+"</td>"+
                        "<td><input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modal_set_score\" onclick='E_Standard(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='D_Standard(this);'/></td></tr>"
                }
                $("#Standard_Set_Score").html(HTML_CODE);

            }else{
                var Clear_CODE="<tr class=\"active\"> <td colspan=\"4\">暂没有相关数据</td></tr>";
                $("#Standard_Set_Score").html(Clear_CODE);

                swal({title:data.msg,
                      type:"error"
                });

            }
        },
        error: function(){
            swal({title:"连接失败",
                type:"error"
            });
        }
    });
}

//显示得分范围
function show_SCORE_OUT() {
    var show_id=$("#Standard_modelStandardId").val();
    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:8080/scorerange/select_model_range',
        data: {modelStandardId:show_id},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+
                        data.data[i].min+"</td>"+"<td>"+data.data[i].max+"</td>"+"<td>"+data.data[i].score+"</td>"+
                        "<td><input type=\"button\" value=\"编辑\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modal_set_score\" onclick='E_Standard(this);'/>&nbsp;&nbsp;" +
                        "<input type=\"button\" value=\"删除\" class=\"btn btn-danger\" onclick='D_Standard(this);'/></td></tr>"
                }
                $("#Standard_Set_Score").html(HTML_CODE);

            }else{
                alert(data.msg);
            }
        },
        error: function(){
            alert("连接失败");
        }
    });
    
}
//编辑标准
function E_ExamS(e) {
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();
    var standard_Name=$(e).parent().parent().children().eq(0).text();
    standard_Name=standard_Name.replace(show_id,"");

    $("#Standard_NewExamSubject_Id").val(show_id);
    $("#Standard_NewExamSubject_Name").val(standard_Name);
}

//删除标准
function D_ExamS(e) {
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();

    swal({
            title: "确定删除吗？",
            showCancelButton: true,
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false,
            imageUrl: "/resources/images/delete_tip.png"
        },
        function(isConfirm){
            if (isConfirm) {
                //Ajax请求
                $.ajax({
                    type: 'POST',
                    url: 'http://127.0.0.1:8080/modelstandard/delete_model_standard',
                    data: {modelStandardId:show_id},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.status==100){
                            show_Standard_out();
                            swal({title:"删除！",
                                text:data.msg,
                                type:"success"
                            });
                        }else{
                            swal({title:data.msg,
                                type:"error"
                            });
                        }
                    },
                    error: function(){
                        swal({title:"连接失败",
                            type:"error"
                        });
                    }
                });
            } else {
                swal({title:"取消！",
                    text:"删除操作已取消!",
                    imageUrl: "/resources/images/cancel.png" });
            }
        });

}
//编辑
function E_Standard(e) {
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();
    var MIN=$(e).parent().parent().children().eq(0).text();
    MIN=MIN.replace(show_id,"");
    var MAX=$(e).parent().parent().children().eq(1).text();
    var SCORE=$(e).parent().parent().children().eq(2).text();

    $("#limit_score_ID").val(show_id);
    $("#SET_SCORE_MIN2").val(MIN);
    $("#SET_SCORE_MAX2").val(MAX);
    $("#SET_SCORE_SCORE2").val(SCORE);

}

//删除得分范围
function D_Standard(e) {
    var ID=$(e).parent().parent().children().eq(0).find("span").text();
    // alert(ID);
    swal({
            title: "确定删除吗？",
            showCancelButton: true,
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false,
            imageUrl: "/resources/images/delete_tip.png"
        },
        function(isConfirm){
            if (isConfirm) {
                //Ajax请求
                $.ajax({
                    type: 'POST',
                    url: 'http://127.0.0.1:8080/scorerange/delete_model_range',
                    data: {id:ID},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.status==100){

                            show_SCORE_OUT();
                            swal({title:"删除！",
                                text:data.msg,
                                type:"success"
                            });
                        }else{
                            swal({title:data.msg,
                                type:"error"
                            });
                        }
                    },
                    error: function(){
                        swal({title:"连接失败",
                            type:"error"
                        });
                    }
                });
            } else {
                swal({title:"取消！",
                    text:"删除操作已取消!",
                    imageUrl: "/resources/images/cancel.png" });
            }
        });

}

// function set_ModelClass(e) {
// }
//编辑模板类型
function save_ModelClass(e) {
    var show_id=$(e).parent().parent().children().eq(0).find("span").text();//模板类型号
    $("#update_ModelClass_ID").val(show_id);
    var ModelClass_Name=$(e).parent().parent().children().eq(0).text();//模板类型名称
    //正则表达式
    ModelClass_Name=ModelClass_Name.replace(show_id,"");
    $("#update_ModelClass_Name").val(ModelClass_Name);
    // alert(show_id+ModelClass_Name);
}
//删除模板类型
// function del_ModelClass(e) {
//
// }
//删除模板类型中的模板科目
function del_ModelClass_ExamS(e) {
    var ModelClass_Id=$("#select_ModelClass").find("option:selected").next().val();//课程类型ID
    var ID_ModelS=$(e).parent().parent().children().eq(0).find("span").text();//模板科目ID
    swal({
            title: "确定删除吗？",
            showCancelButton: true,
            confirmButtonText: "确定删除！",
            cancelButtonText: "取消删除！",
            closeOnConfirm: false,
            closeOnCancel: false,
            imageUrl: "/resources/images/delete_tip.png"
        },
        function(isConfirm){
            if (isConfirm) {
                //Ajax请求
                $.ajax({
                    type: 'POST',
                    url: 'http://127.0.0.1:8080/model/del_model_subject',
                    data: {examSubjectId:ID_ModelS,modelClassId:ModelClass_Id},
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    dataType: "json",
                    success: function(data){
                        if(data.status==100){
                            //显示
                            show_ModelClass_Subject();
                            swal({title:"删除！",
                                text:data.data,
                                type:"success"
                            });
                        }else{
                            swal(data.data);
                        }
                    },
                    error: function(){
                        swal("连接失败");
                    }
                });

            } else {
                swal({title:"取消！",
                    text:"删除模板科目已取消!",
                    imageUrl: "/resources/images/cancel.png" });
            }
        });
}
function show_ModelClass_Subject() {
    var ModelClass_Id=$("#select_ModelClass").find("option:selected").next().val();//课程类型ID
    //显示相应考试模板科目
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8080/model/select_one_model_subject',
        data: {modelId:ModelClass_Id},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: "json",
        success: function(data){
            if(data.status==100){
                var HTML_CODE="";
                for(var i=0;i<data.data.length;i++) {
                    HTML_CODE+=
                        "<tr><td><span style='display: none;'>"+data.data[i].id+"</span>"+data.data[i].examName + "</td>"+
                        "<td><input type=\"button\" value=\"删除\" class=\"btn btn-danger\"  onclick='del_ModelClass_ExamS(this);'/></td></tr>"
                }
                $("#ModelClass_subject_detail").html(HTML_CODE);
                $("#SHOW_BTN").css("display","block");

            }else{
                swal({title:data.msg,
                    type:"error"});
                $("#ModelClass_subject_detail").html("<tr class=\"active\"><td colspan=\"2\">暂没有相关数据</td></tr>");
                $("#SHOW_BTN").css("display","none");
            }
        },
        error: function(){
            swal({title:"连接失败",
                type:"error"});
        }
    });
}