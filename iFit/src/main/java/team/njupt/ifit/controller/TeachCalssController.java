package team.njupt.ifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import team.njupt.ifit.annotation.Admin;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.annotation.TTeacher;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.User;
import team.njupt.ifit.pojo.dto.TeachClassDTO;
import team.njupt.ifit.service.ITeachClassService;
import team.njupt.ifit.util.UploadUtil;
import team.njupt.ifit.vo.SubjectVo;
import team.njupt.ifit.vo.TeachClassVo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/teachclass")
public class TeachCalssController {
    @Autowired
    private ITeachClassService iTeachClassService;

    /**
     * 新增教学班
     * @param teachClassDTO
     * @return
     */
    @RequestMapping(value = "/insert_tclass",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertTeachClass(TeachClassDTO teachClassDTO){
        return iTeachClassService.insertTeachClass(teachClassDTO);
    }

    /**
     * 导入教学班excel,
     * 在此同时根据名单中的学生信息更新了学生表的教学班字段
     * @param file
     * @return
     */
    @RequestMapping(value = "/batch_insert_tclass",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse batchInsertTeachClass(@RequestParam(value = "upload_tclass_file",required = false) MultipartFile file,HttpServletRequest request){
        String path = request.getSession().getServletContext().getRealPath("uploadtclass");
        //文件上传到服务器
        String targetFileName = path+"/"+ UploadUtil.upload(file,path);
        return iTeachClassService.batchInsertTeachClass(targetFileName);
    }

    /**
     * 删除教学班（弃用，只提供更新）
     * @param teachClassId
     * @param session
     * @return
     */
    @RequestMapping(value = "/delete_tclass",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse deleteTeachClass(Integer teachClassId, HttpSession session){
        return null;
    }

    /**
     * 更新教学班信息
     * @param teachClassId
     * @param teachClassDTO
     * @return
     */
    @RequestMapping(value = "/update_tclass_teacher",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse updateClassTeacher(Integer teachClassId,TeachClassDTO teachClassDTO){
        return iTeachClassService.updateClassTeacher(teachClassId,teachClassDTO);
    }

    /**
     * 两个维度查询教学班
     * @param year
     * @param teacherName
     * @return
     */
    @RequestMapping(value = "/select_tclass",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse<List<TeachClassVo>> selectTClass(String year, String teacherName){
        return iTeachClassService.selectTClass(year,teacherName);
    }

    /**
     * 查询我的（某教师）教学班
     * @param year
     * @param session
     * @return
     */
    @RequestMapping(value = "/select_my_tclass",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse<List<TeachClassVo>> selectMyTClass(String year,HttpSession session){
        User user = (User) session.getAttribute("user");
        return iTeachClassService.selectMyTClass(year,user.getUsername());
    }

    /**
     * 根据教学班id查询当前班级的考试科目
     * @param tclassId
     * @return
     */
    @RequestMapping(value = "/select_tclass_subject",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse<List<SubjectVo>> selectTClassSubject(String tclassId){
        return iTeachClassService.selectTClassSubject(tclassId);
    }
}
