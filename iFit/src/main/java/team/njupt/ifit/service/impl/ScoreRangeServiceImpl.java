package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.dao.ExamStandardMapper;
import team.njupt.ifit.dao.ScoreRangeMapper;
import team.njupt.ifit.dao.TeachClassMapper;
import team.njupt.ifit.pojo.ScoreRange;
import team.njupt.ifit.pojo.dto.ScoreRangeDTO;
import team.njupt.ifit.service.IScoreRangeService;

import java.util.List;

/**
 * Created by lihang on 2017/9/26.
 */
@Service("iScoreRangeService")
public class ScoreRangeServiceImpl implements IScoreRangeService {
    @Autowired
    private ScoreRangeMapper scoreRangeMapper;
    @Autowired
    private ExamStandardMapper examStandardMapper;
    @Autowired
    private TeachClassMapper teachClassMapper;
    @Override
    public ServerResponse insertScoreRange(ScoreRangeDTO scoreRangeDTO, Integer modelStandardId){
        int rowResult = scoreRangeMapper.insert(modelStandardId,scoreRangeDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("新增成功！");
        }
        return ServerResponse.createByErrorMessage("新增失败！");
    }

    @Override
    public ServerResponse deleteScoreRange(Integer id){
        int standardId = scoreRangeMapper.selectStandardIdById(id);
        int modelSubjectId = examStandardMapper.selectSubjectIdById(standardId);
        int rowResult = teachClassMapper.modelSubjectIsUsed(modelSubjectId);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该标准已经被教学班使用，无法删除！");
        }
        rowResult = scoreRangeMapper.deleteByPrimaryKey(id);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("删除成功!");
        }
        return ServerResponse.createByErrorMessage("删除失败!");
    }


    @Override
    public ServerResponse updateScoreRange(ScoreRange scoreRange){
        int rowResult = scoreRangeMapper.updateByPrimaryKeySelective(scoreRange);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("更新成功！");
        }
        return ServerResponse.createByErrorMessage("更新失败！");
    }

    @Override
    public ServerResponse<List<ScoreRange>> selectScoreRange(Integer standardId){
        List<ScoreRange> scoreRangeList = scoreRangeMapper.selectAllByStandardId(standardId);
        if (scoreRangeList.size()>0){
            return ServerResponse.createBySuccess(scoreRangeList);
        }
        return ServerResponse.createByErrorMessage("查询失败！");
    }
}
