package team.njupt.ifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import team.njupt.ifit.annotation.Admin;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.service.ISubjectService;
import team.njupt.ifit.vo.SubjectVo;

import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/modelsubject")
public class ExamSubjectController {

    @Autowired
    private ISubjectService iSubjectService;
    /**
     * 新增考试模版科目,需要判断防止重名
     * @param modelSubjectName
     * @return
     */
    @RequestMapping(value = "/insert_model_subject",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertModelSubject(String modelSubjectName){
        return iSubjectService.insertModelSubject(modelSubjectName);
    }

    /**
     * 删除考试模版科目，注意：
     * 1.如果有教学班使用该科目作为考试，则无法删除
     * 2.如果可以删除，需要级联删除与此门科目相关的考试标准，同时删除考试标准下的得分范围。
     * 3.删除需要给出强提示
     * @param modelSubjectId
     * @return
     */
    @RequestMapping(value = "/delete_model_subject",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse deleteModelSubject(Integer modelSubjectId){
        return iSubjectService.deleteModelSubject(modelSubjectId);
    }

    /**
     * 更新模版考试科目，需要判断防止重名
     * @param subjectId
     * @param newSubjectName
     * @return
     */
    @RequestMapping(value = "/update_model_subject",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse updateModelSubject(Integer subjectId,String newSubjectName){
        return iSubjectService.updateModelSubject(subjectId,newSubjectName);
    }

    /**
     * 查询考试模版科目
     * @return
     */
    @RequestMapping(value = "/select_model_subject",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse<List<SubjectVo>> selectModelSubject(){
        return iSubjectService.selectModelSubject();
    }


}
