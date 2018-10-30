package team.njupt.ifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.annotation.TTeacher;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.common.constant.UserRoleConstant;
import team.njupt.ifit.pojo.Score;
import team.njupt.ifit.pojo.User;
import team.njupt.ifit.service.IScoreService;
import team.njupt.ifit.util.CheckRole;
import team.njupt.ifit.util.UploadUtil;
import team.njupt.ifit.vo.ScoreVo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/score")
public class ScoreController {
    @Autowired
    private IScoreService iScoreService;
    /**
     * 根据学号查询学生某学年详细成绩
     * @param studentId
     * @param year
     * @param session
     * @return 该学生该学年的详细成绩
     */
    @RequestMapping(value = "/scoredetail",method = RequestMethod.POST)
    @ResponseBody
    @Login
    public ServerResponse<String> selectStudentScoreDetil(String studentId,String year,HttpSession session){
        User user = (User) session.getAttribute("user");
        if (user.getRole()== UserRoleConstant.STUDENT){
            if (user.getUsername().equals(studentId)){
                //学生学号匹配，可以查询
                return iScoreService.selectStudentScoreDetil(studentId,year);
            }
            return ServerResponse.createByErrorMessage("你只能查询自己的成绩！");
        }
        if (CheckRole.isStudent(user)) {
            return ServerResponse.createByErrorMessage("只有管理员或教师可以查询！");
        }
        return iScoreService.selectStudentScoreDetil(studentId,year);
    }

    //以下成绩查询需要按学号排序
    /**
     * 查询某行政班某学年学生成绩，并支持筛选低于/高于/等于某分数的学生
     * @param executiveClassId
     * @param year
     * @param flag 1代表=，2代表>,3代表<
     * @param score 默认为空，不填就查出该行政班所有人的成绩
     * @return
     */
    @RequestMapping(value = "/eclass_score",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse<List<ScoreVo>> selectExcutiveClassScore(String executiveClassId, String year, Integer flag,Integer score){
        return iScoreService.selectExcutiveClassScore(executiveClassId,year,flag,score);
    }

    /**
     * 查询某教学班学生成绩，并支持筛选低于/高于/等于某分数的学生
     * @param teachClassId
     * @param flag 1代表=，2代表>,3代表<
     * @param score 默认为空，不填就查出该教学班所有人的成绩
     * @return
     */
    @RequestMapping(value = "/tclass_score",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse<List<ScoreVo>> selectTeachClassScore(String teachClassId, Integer score, Integer flag){
        return iScoreService.selectTeachClassScore(teachClassId,score,flag);
    }

    /**
     * 按教学班和学期导出成绩
     * @param year
     * @param classId
     * @return
     */
    @RequestMapping(value = "/out_tclass_score",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse outTcalssExcelScore(String year, Integer classId, HttpServletResponse response){
        return iScoreService.outTcalssExcelScore(year,classId,response);
    }

    /**
     * todo 按行政班和学期导出成绩
     * @param year
     * @param className
     * @param session
     * @return
     */
    @RequestMapping(value = "/out_eclass_score",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse outEclassExcelScore(String year,String className,HttpSession session){



        return null;
    }

    /**
     * 根据关键词查询教学班名称（模糊查询）
     * @param keyYear
     * @return
     */
    @RequestMapping(value = "/likeselect",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse likeSelectTClassName(String keyYear){
        return iScoreService.likeSelectTClassName(keyYear);
    }


    /**
     * * 批量插入学生成绩
     * 需要验证总分合法性
     * @param file
     * @param request
     * @return
     */
    @RequestMapping(value = "/import_score",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse insertScore(@RequestParam(value = "upload_score_file",required = false) MultipartFile file, HttpServletRequest request){
        String path = request.getSession().getServletContext().getRealPath("uploadscore");
        //文件上传到服务器
        String targetFileName = path+"/"+ UploadUtil.upload(file,path);
        return iScoreService.insertScore(targetFileName);
    }

    /**
     * todo 批量更新学生成绩（需要验证总分合法性）
     * @param scoreList
     * @return
     */
    @RequestMapping(value = "/updatescore",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @TTeacher
    public ServerResponse updateScore(List<Score> scoreList){
        return null;
    }
}
