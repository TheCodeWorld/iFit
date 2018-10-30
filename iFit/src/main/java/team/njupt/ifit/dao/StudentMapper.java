package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.Student;
import team.njupt.ifit.pojo.dto.BatchUpdateStudentDTO;
import team.njupt.ifit.pojo.dto.StudentDTO;

import java.util.List;

@Repository
public interface StudentMapper {
    int deleteByPrimaryKey(String studentId);

    int insert(Student record);

    int insertSelective(StudentDTO studentDTO);

    Student selectByPrimaryKey(Integer id);

    int updateByStudentIdSelective(@Param("oldStudentId") String oldStudentId,@Param("studentDTO") StudentDTO studentDTO);

    int updateByStudentId(@Param("studentId") String studentId,@Param("teachClass") String teachClass);

    int selectStudentId(String studentId);

    void insertBatchStudent(@Param("studentDTOList") List<StudentDTO> studentDTOList);

    List<StudentDTO> selectStudent(@Param("currentExecutiveClass")String currentExecutiveClass,@Param("teachClass") String teachClass,@Param("year")String year,@Param("studentId")String studentId, @Param("studentName")String studentName, @Param("studentCollege")String studentCollege);

    void batchUpdateStudent(@Param("batchUpdateStudentDTOList") List<BatchUpdateStudentDTO> batchUpdateStudentDTOList);
}
