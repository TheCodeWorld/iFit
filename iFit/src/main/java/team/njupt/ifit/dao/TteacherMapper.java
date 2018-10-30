package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.Tteacher;
import team.njupt.ifit.pojo.dto.TeacherDTO;

import java.util.List;

@Repository
public interface TteacherMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TeacherDTO teacherDTO);

    int insertSelective(Tteacher record);

    Tteacher selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Tteacher record);

    int updateByTeacherId(@Param("teacherID") String teacherID,@Param("teacherDTO") TeacherDTO teacherDTO);

    void batchInset(@Param("teacherDTOList") List<TeacherDTO> teacherDTOList);

    int selectTeacherId(String teacherId);

    int deleteByTeacherId(String teacherId);

    List<TeacherDTO> selectAll();

    List<TeacherDTO> selectLikeName(String name);

}