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
import team.njupt.ifit.pojo.ExamAndModel;
import team.njupt.ifit.pojo.ModelClass;
import team.njupt.ifit.service.IModelService;
import team.njupt.ifit.vo.SubjectVo;

import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/model")
public class ModelClassController {

    @Autowired
    private IModelService iModelService;
    /**
     * 插入模版班，需要判断防止重名
     * @param modelName
     * @return
     */
    @RequestMapping(value = "/insert_model",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertModelClass(String modelName){
        return iModelService.insertModelClass(modelName);
    }

    /**
     * 暂停使用！！！ 统一使用修改接口！
     * 删除模版班（前端给出强提示，如果该模版已经被使用则无法被删除；
     * 如果可以删除，后台级联删除关联表中的数据）
     * @param modelName
     * @return
     */
    @RequestMapping(value = "/delete_model",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse deleteModelClass(String modelName){
        return iModelService.deleteModelClass(modelName);
    }

    /**
     * 更新模版班，需要判断防止重名
     * @param modelClass
     * @return
     */
    @RequestMapping(value = "/update_model",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse updateModelClass(ModelClass modelClass){
        return iModelService.updateModelClass(modelClass);
    }

    /**
     * 查询所有模版
     * @return
     */
    @RequestMapping(value = "/select_model",method = RequestMethod.GET)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse<List<ModelClass>> selectModelClass(){
        return iModelService.selectModelClass();
    }
    /**
     * 查询某模版下所有考试科目
     * @param modelId
     * @return
     */
    @RequestMapping(value = "/select_one_model_subject",method = RequestMethod.GET)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse<List<SubjectVo>> selectModelSubject(String modelId){
        return iModelService.selectOneModelSubject(modelId);
    }

    /**
     * 设置模版班科目
     * @param modelIdAndSubjectId
     * @return
     */
    @RequestMapping(value = "/set_model_subject",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse setModelSubject(String modelIdAndSubjectId){
        return iModelService.setModelSubject(modelIdAndSubjectId);
    }

    /**
     * 删除模版班科目
     * @param examAndModel
     * @return
     */
    @RequestMapping(value = "/del_model_subject",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse delModelSubject(ExamAndModel examAndModel){
        return iModelService.delModelSubject(examAndModel);
    }
}
