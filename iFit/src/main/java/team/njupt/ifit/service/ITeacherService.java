package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.dto.TeacherDTO;

import java.util.List;

/**
 * Created by lihang on 2017/9/23.
 */
public interface ITeacherService {
    ServerResponse insertTteacher(TeacherDTO teacherDTO);
    ServerResponse batchInsetTeacher(String path);
    ServerResponse deleteByTeacherId(String teacherId);
    ServerResponse updateTteacher(String teacherId,TeacherDTO teacherDTO);
    ServerResponse<List<TeacherDTO>> selectAll();
    ServerResponse<List<TeacherDTO>> selectLikeName(String name);
}
