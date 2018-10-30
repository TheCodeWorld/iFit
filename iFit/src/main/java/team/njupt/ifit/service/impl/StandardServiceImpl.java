package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.dao.ExamStandardMapper;
import team.njupt.ifit.dao.ScoreRangeMapper;
import team.njupt.ifit.dao.TeachClassMapper;
import team.njupt.ifit.pojo.dto.StandardDTO;
import team.njupt.ifit.service.IStandardService;

import java.util.List;

/**
 * Created by lihang on 2017/9/26.
 */
@Service("iStandardService")
public class StandardServiceImpl implements IStandardService {
    @Autowired
    private ExamStandardMapper examStandardMapper;
    @Autowired
    private TeachClassMapper teachClassMapper;
    @Autowired
    private ScoreRangeMapper scoreRangeMapper;
    @Override
    public ServerResponse insertModelStandard(Integer modelSubjectId, String modelStandardName, Integer weight){
        int rowResult = examStandardMapper.countModelStandardName(modelStandardName,modelSubjectId);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该标准已经存在！");
        }
        rowResult = examStandardMapper.insert(modelSubjectId,modelStandardName,weight);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("新增成功");
        }
        return ServerResponse.createByErrorMessage("新增失败");
    }
    @Override
    public ServerResponse deleteModelStandard(Integer modelStandardId){
        int modelSubjectId = examStandardMapper.selectSubjectIdById(modelStandardId);
        int rowResult = teachClassMapper.modelSubjectIsUsed(modelSubjectId);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该标准已经被教学班使用，无法删除！");
        }
        //删除标准，同时级联删除该标准下的得分范围
        rowResult = teachClassMapper.deleteByPrimaryKey(modelStandardId);
        if (rowResult>0){
            scoreRangeMapper.deleteByStandardId(modelStandardId);
            return ServerResponse.createBySuccessMessage("删除成功！");
        }
        return ServerResponse.createByErrorMessage("删除失败");
    }

    @Override
    public ServerResponse updateModelStandard(StandardDTO standardDTO){
        int subjectId = examStandardMapper.selectSubjectIdById(standardDTO.getId());
        int rowResult = examStandardMapper.countModelStandardName(standardDTO.getModelStandardName(),subjectId);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该标准已经存在！");
        }
        rowResult = examStandardMapper.updateByPrimaryKeySelective(standardDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("更新成功");
        }
        return ServerResponse.createByErrorMessage("更新失败");
    }

    @Override
    public ServerResponse<List<StandardDTO>> selectAll(Integer modelSubjectId){
        List<StandardDTO> standardDTOList = examStandardMapper.selectAllBySubjectId(modelSubjectId);
        if (standardDTOList.size()>0){
            return ServerResponse.createBySuccess(standardDTOList);
        }
        return ServerResponse.createByErrorMessage("没有符合的内容！");
    }
}
