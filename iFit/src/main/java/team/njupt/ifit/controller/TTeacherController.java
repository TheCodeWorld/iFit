package team.njupt.ifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import team.njupt.ifit.annotation.Admin;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.dto.TeacherDTO;
import team.njupt.ifit.service.ITeacherService;
import team.njupt.ifit.util.UploadUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/teacher")
public class TTeacherController {

    @Autowired
    private ITeacherService iTeacherService;

    /**
     * 新增教师
     * @param teacherDTO
     * @return
     */
    @RequestMapping(value = "/insert_teacher",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertTteacher(TeacherDTO teacherDTO){
        return iTeacherService.insertTteacher(teacherDTO);
    }

    /**
     * 批量导入体育教师
     * @param file
     * @param request
     * @return
     */
    @RequestMapping(value = "/insert_many_teacher",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertManyTteacher(@RequestParam(value = "upload_teacher_file",required = false) MultipartFile file, HttpServletRequest request){
        String path = request.getSession().getServletContext().getRealPath("uploadtclass");
        //文件上传到服务器
        String targetFileName = path+"/"+ UploadUtil.upload(file,path);
        return iTeacherService.batchInsetTeacher(targetFileName);
    }

    /**
     * 删除教师
     * @param teacherId
     * @return
     */
    @RequestMapping(value = "/delete_teacher",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse deleteTteacher(String teacherId){
        return iTeacherService.deleteByTeacherId(teacherId);
    }

    /**
     * 修改教师信息
     * @param oldTeacherId 需要修改的老师工号
     * @param teacherDTO
     * @return
     */
    @RequestMapping(value = "/update_teacher",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse updateTteacher(String oldTeacherId,TeacherDTO teacherDTO){
        return iTeacherService.updateTteacher(oldTeacherId,teacherDTO);
    }

    /**
     * 查询所有教师信息
     * @return
     */
    @RequestMapping(value = "/select_teacher",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse<List<TeacherDTO>> selectTteacher(){
        return iTeacherService.selectAll();
    }

    /**
     * 模糊查询
     * @param name
     * @return
     */
    @RequestMapping(value = "/like_select_teacher",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse<List<TeacherDTO>> selectLikeName(String name){
        return iTeacherService.selectLikeName(name);
    }
}
