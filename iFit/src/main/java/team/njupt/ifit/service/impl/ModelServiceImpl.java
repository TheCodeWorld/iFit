package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.dao.ExamAndModelMapper;
import team.njupt.ifit.dao.ModelClassMapper;
import team.njupt.ifit.dao.TeachClassMapper;
import team.njupt.ifit.pojo.ExamAndModel;
import team.njupt.ifit.pojo.ModelClass;
import team.njupt.ifit.service.IModelService;
import team.njupt.ifit.vo.SubjectVo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lihang on 2017/9/25.
 */
@Service("iModelService")
public class ModelServiceImpl implements IModelService {
    @Autowired
    private ModelClassMapper modelClassMapper;
    @Autowired
    private TeachClassMapper teachClassMapper;
    @Autowired
    private ExamAndModelMapper examAndModelMapper;

    @Override
    public ServerResponse insertModelClass(String modelName){
        int rowResult = modelClassMapper.selectByModelName(modelName);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该模版名已经存在！");
        }
        rowResult= modelClassMapper.insert(modelName);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("增加模版班级成功！");
        }
        return ServerResponse.createByErrorMessage("新增模版班级失败！");
    }

    @Override
    public ServerResponse deleteModelClass(String modleName){
        int rowResult = teachClassMapper.selectModelClassUsed(modleName);
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该模版已经被使用，无法删除！");
        }
        rowResult = modelClassMapper.deleteByModelName(modleName);
        //级联删除关联表数据
        examAndModelMapper.deleteByModelName(modleName);
        return ServerResponse.createBySuccessMessage("删除成功！");
    }

    @Override
    public ServerResponse updateModelClass(ModelClass modelClass){
        int rowResult = teachClassMapper.modelClassIsUsed(modelClass.getId());
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该模版已经被使用，无法更新！");
        }
        rowResult = modelClassMapper.selectByModelName(modelClass.getModelName());
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("该模版名已经存在，无法更新！");
        }
        rowResult = modelClassMapper.updateByPrimaryKey(modelClass);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("更新成功");
        }
        return ServerResponse.createByErrorMessage("更新失败");
    }

    @Override
    public ServerResponse<List<ModelClass>> selectModelClass(){
        List<ModelClass> modelClassList = modelClassMapper.selectModelClass();
        if (modelClassList.size()>0){
            return ServerResponse.createBySuccess(modelClassList);
        }
        return ServerResponse.createByErrorMessage("查询失败");
    }

    @Override
    public ServerResponse<List<SubjectVo>> selectOneModelSubject(String modelId) {
        List<SubjectVo> modelSubjectVoList = modelClassMapper.selectOneModelSubject(modelId);
        if (modelSubjectVoList.size()>0){
            return ServerResponse.createBySuccess(modelSubjectVoList);
        }
        return ServerResponse.createByErrorMessage("没有符合该条件的结果");
    }

    @Override
    public ServerResponse setModelSubject(String modelIdAndSubjectId){
        List<ExamAndModel> examAndModelList = new ArrayList<ExamAndModel>();
        String[] arr = modelIdAndSubjectId.split(",");
        for (int i = 1;i<=arr.length-1;i++){
            ExamAndModel examAndModel = new ExamAndModel();
            examAndModel.setExamSubjectId(Integer.parseInt(arr[i]));
            examAndModel.setModelClassId(Integer.parseInt(arr[0]));
            examAndModelList.add(examAndModel);
        }
        for (ExamAndModel examAndModel : examAndModelList){
            int result = examAndModelMapper.countModelClassSubject(examAndModel);
            if (result>0){
                return ServerResponse.createByErrorMessage("该模版下此科目已经存在！");
            }
        }
        examAndModelMapper.setModelClassSubject(examAndModelList);
        return ServerResponse.createBySuccessMessage("该模版的科目设置成功");
    }

    @Override
    public ServerResponse delModelSubject(ExamAndModel examAndModel){
        int rowResult = examAndModelMapper.delModelClassSubject(examAndModel);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("删除成功！");
        }
        return ServerResponse.createByErrorMessage("删除失败！");
    }
}
