package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.dao.ExamStandardMapper;
import team.njupt.ifit.dao.ExamSubjectMapper;
import team.njupt.ifit.dao.ScoreRangeMapper;
import team.njupt.ifit.dao.TeachClassMapper;
import team.njupt.ifit.service.ISubjectService;
import team.njupt.ifit.vo.SubjectVo;

import java.util.List;

/**
 * Created by lihang on 2017/9/25.
 */
@Service("iSubjectService")
public class SubjectServiceImpl implements ISubjectService {
    @Autowired
    private ExamSubjectMapper examSubjectMapper;
    @Autowired
    private TeachClassMapper teachClassMapper;
    @Autowired
    private ExamStandardMapper examStandardMapper;
    @Autowired
    private ScoreRangeMapper scoreRangeMapper;
    @Override
    public ServerResponse insertModelSubject(String modelSubjectName){
        int rowResult = examSubjectMapper.selectBySubjectName(modelSubjectName);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该科目已经存在！");
        }
        rowResult = examSubjectMapper.insert(modelSubjectName);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("新增科目成功!");
        }
        return ServerResponse.createByErrorMessage("新增科目失败!");
    }


    @Override
    public ServerResponse deleteModelSubject(Integer id){
        int rowResult = teachClassMapper.modelSubjectIsUsed(id);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该科目已被使用，无法删除！");
        }
        rowResult = examSubjectMapper.deleteByPrimaryKey(id);
        //级联删除与此门科目相关的考试标准，同时删除考试标准下的得分范围(优先删除)。
        if (rowResult>0){
            scoreRangeMapper.deleteBySubjectId(id);
            examStandardMapper.deleteBySubjectId(id);
            return ServerResponse.createBySuccessMessage("删除成功！");
        }
        return ServerResponse.createByErrorMessage("删除失败！");

    }

    @Override
    public ServerResponse updateModelSubject(Integer subjectId, String newSubjectName){
        int rowResult = teachClassMapper.modelSubjectIsUsed(subjectId);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该科目已被使用，无法更新！");
        }
        rowResult = examSubjectMapper.countSubjectName(newSubjectName);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该科目名已经存在！");
        }
        rowResult = examSubjectMapper.updateByPrimaryKey(subjectId,newSubjectName);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("更新成功！");
        }
        return ServerResponse.createByErrorMessage("更新失败！");
    }




    @Override
    public ServerResponse<List<SubjectVo>> selectModelSubject(){
        List<SubjectVo> subjectVoList = examSubjectMapper.seletAll();
        if (subjectVoList.size()>0){
            return ServerResponse.createBySuccess(subjectVoList);
        }
        return ServerResponse.createByErrorMessage("查询失败！");
    }
}
