package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.dto.StudentDTO;

import java.io.FileNotFoundException;
import java.util.List;

/**
 * Created by lihang on 2017/9/23.
 */
public interface IStudentService {
    ServerResponse insertStudent(StudentDTO studentDTO);
    ServerResponse insertBatchStudent(String path) throws FileNotFoundException;
    ServerResponse insertStudentToTClass(String teachClass,String studentId);
    ServerResponse deleteEClassStudent(String studentId);
    ServerResponse updateStudent(String oldStudentId,StudentDTO studentDTO);
    ServerResponse<List<StudentDTO>> selectStudent(String excutiveClass,String teachClass,String year, String studentId, String studentName, String studentCollege);
}
