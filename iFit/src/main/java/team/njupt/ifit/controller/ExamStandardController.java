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
import team.njupt.ifit.pojo.dto.StandardDTO;
import team.njupt.ifit.service.IStandardService;

import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/modelstandard")
public class ExamStandardController {
    @Autowired
    private IStandardService iStandardService;

    /**
     * 新增科目考试标准
     * @param modelSubjectId
     * @param modelStandardName
     * @param weight
     * @return
     */
    @RequestMapping(value = "/insert_model_standard",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertModelStandard(Integer modelSubjectId,String modelStandardName,Integer weight){
        return iStandardService.insertModelStandard(modelSubjectId,modelStandardName,weight);
    }

    /**
     * 删除考试标准模版，注意
     * 1.如果有教学班使用该标准，则无法删除
     * 2.如果可以删除，需要级联删除与此科目标准相关的得分范围
     * 3.删除需要给出强提示
     * @param modelStandardId
     * @return
     */
    @RequestMapping(value = "/delete_model_standard",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse deleteModelStandard(Integer modelStandardId){
        return iStandardService.deleteModelStandard(modelStandardId);
    }

    /**
     * 更新考试模版标准
     * @param standardDTO
     * @return
     */
    @RequestMapping(value = "/update_model_standard",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse updateModelStandard(StandardDTO standardDTO){
        return iStandardService.updateModelStandard(standardDTO);
    }

    /**
     * 查询某模版科目下面所有标准
     * @param modelSubjectId
     * @return
     */
    @RequestMapping(value = "/select_model_standard",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse<List<StandardDTO>> selectModelStandard(Integer modelSubjectId){
        return iStandardService.selectAll(modelSubjectId);
    }

}
