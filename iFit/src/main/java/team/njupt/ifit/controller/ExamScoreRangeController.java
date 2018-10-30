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
import team.njupt.ifit.pojo.ScoreRange;
import team.njupt.ifit.pojo.dto.ScoreRangeDTO;
import team.njupt.ifit.service.IScoreRangeService;

import java.util.List;

/**
 * Created by lihang on 2017/9/22.
 */
@CrossOrigin()
@Controller
@RequestMapping("/scorerange")
public class ExamScoreRangeController {

    @Autowired
    private IScoreRangeService iScoreRangeService;
    /**
     * 新增得分范围
     * @param scoreRangeDTO
     * @param modelStandardId
     * @return
     */
    @RequestMapping(value = "/insert_model_range",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse insertScoreRange(ScoreRangeDTO scoreRangeDTO,Integer modelStandardId){
        return iScoreRangeService.insertScoreRange(scoreRangeDTO,modelStandardId);
    }

    /**
     * 删除得分范围，给出强提示，若已被使用则无法删除
     * @param id
     * @return
     */
    @RequestMapping(value = "/delete_model_range",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse deleteScoreRange(Integer id){
        return iScoreRangeService.deleteScoreRange(id);
    }

    /**
     * 更新得分范围
     * @param scoreRange;
     * @return
     */
    @RequestMapping(value = "/update_model_range",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse updateScoreRange(ScoreRange scoreRange){
        return iScoreRangeService.updateScoreRange(scoreRange);
    }

    /**
     * 查询某标准下所有得分范围
     * @param modelStandardId
     * @return
     */
    @RequestMapping(value = "/select_model_range",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<List<ScoreRange>> selectScoreRange(Integer modelStandardId){
        return iScoreRangeService.selectScoreRange(modelStandardId);
    }

}
