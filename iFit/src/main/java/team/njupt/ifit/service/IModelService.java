package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.ExamAndModel;
import team.njupt.ifit.pojo.ModelClass;
import team.njupt.ifit.vo.SubjectVo;

import java.util.List;

/**
 * Created by lihang on 2017/9/25.
 */
public interface IModelService {
    ServerResponse insertModelClass(String modelName);
    ServerResponse deleteModelClass(String modleName);
    ServerResponse updateModelClass(ModelClass modelClass);
    ServerResponse<List<ModelClass>> selectModelClass();
    ServerResponse setModelSubject(String modelIdAndSubjectId);
    ServerResponse delModelSubject(ExamAndModel examAndModel);
    ServerResponse<List<SubjectVo>> selectOneModelSubject(String modelId);
}
