package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.vo.SubjectVo;

import java.util.List;

/**
 * Created by lihang on 2017/9/25.
 */
public interface ISubjectService {
    ServerResponse insertModelSubject(String modelSubjectName);
    ServerResponse deleteModelSubject(Integer id);
    ServerResponse updateModelSubject(Integer subjectId,String newSubjectName);
    ServerResponse<List<SubjectVo>> selectModelSubject();
}
