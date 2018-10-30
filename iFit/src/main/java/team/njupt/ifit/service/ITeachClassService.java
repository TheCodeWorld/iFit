package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.dto.TeachClassDTO;
import team.njupt.ifit.vo.SubjectVo;
import team.njupt.ifit.vo.TeachClassVo;

import java.util.List;

/**
 * Created by lihang on 2017/9/26.
 */
public interface ITeachClassService {
    ServerResponse insertTeachClass(TeachClassDTO teachClassDTO);
    ServerResponse updateClassTeacher(Integer teachClassId,TeachClassDTO teachClassDTO);
    ServerResponse<List<TeachClassVo>> selectTClass(String year, String teacherName);
    ServerResponse<List<TeachClassVo>> selectMyTClass(String year,String teacherId);

    ServerResponse<List<SubjectVo>> selectTClassSubject(String tclassId);

    ServerResponse batchInsertTeachClass(String path);
}
