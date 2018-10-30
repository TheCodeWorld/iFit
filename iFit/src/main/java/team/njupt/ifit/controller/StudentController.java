package team.njupt.ifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import team.njupt.ifit.annotation.Admin;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.annotation.TTeacher;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.dto.StudentDTO;
import team.njupt.ifit.service.IStudentService;
import team.njupt.ifit.util.UploadUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.FileNotFoundException;
import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private IStudentService iStudentService;

    /**
     * 行政班新增学生
     *
     * @param studentDTO
     * @return
     */
    @RequestMapping(value = "/insert_student_eclass", method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertStudentToEClass(StudentDTO studentDTO) {
        return iStudentService.insertStudent(studentDTO);
    }

    /**
     * 批量新增行政班学生
     *
     * @param file
     * @return
     */
    @RequestMapping(value = "/insert_many_student_eclass", method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertManyStudentToEClass(@RequestParam(value = "upload_student_file", required = false) MultipartFile file, HttpServletRequest request) throws FileNotFoundException {
        String path = request.getSession().getServletContext().getRealPath("uploadstu");
        //文件上传到服务器
        String targetFileName = path + "/" + UploadUtil.upload(file, path);
        return iStudentService.insertBatchStudent(targetFileName);
    }


    /**
     * 教学班新增学生(实际上是update，这个学生在行政班新增的时候就已经且必须已经存在
     * 在update的时候前端需要给出强提示，是否要删除该学生？)
     *
     * @param teachClass
     * @param studentId
     * @return
     */
    @RequestMapping(value = "/insert_student_tclass", method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse insertStudentToTClass(String teachClass, String studentId) {
        return iStudentService.insertStudentToTClass(teachClass, studentId);
    }

    /**
     * 删除行政班学生信息（删除学生，教学班该生也被删除）
     *
     * @param studentId
     * @return
     */
    @RequestMapping(value = "/delete_student", method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse deleteEClassStudent(String studentId) {
        return iStudentService.deleteEClassStudent(studentId);
    }

    /**
     * 删除/更新教学班学生信息（实践相当于update，将该学生教学班信息清空，但是该生依然存在）
     *
     * @param studentId
     * @return
     */
    @RequestMapping(value = "/delete_student_tclass", method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse deleteTClassStudent(String studentId) {
        return iStudentService.insertStudentToTClass("", studentId);
    }

    /**
     * 行政班更新学生信息
     *
     * @param oldStudentId
     * @param studentDTO
     * @return
     */
    @RequestMapping(value = "/update_student", method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse updateStudent(String oldStudentId, StudentDTO studentDTO) {
        return iStudentService.updateStudent(oldStudentId, studentDTO);
    }

    /**
     * 多维度查询学生
     *
     * @param excutiveClass
     * @param teachClass
     * @param year
     * @param studentId
     * @param studentName
     * @param studentCollege
     * @param session
     * @return
     */
    @RequestMapping(value = "/select_student", method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse<List<StudentDTO>> selectStudent(String excutiveClass, String teachClass, String year, String studentId, String studentName, String studentCollege, HttpSession session) {
        return iStudentService.selectStudent(excutiveClass, teachClass, year, studentId, studentName, studentCollege);
    }


}
