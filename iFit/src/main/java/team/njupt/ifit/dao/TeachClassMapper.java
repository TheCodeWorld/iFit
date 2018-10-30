package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.TeachClass;
import team.njupt.ifit.pojo.dto.TeachClassDTO;
import team.njupt.ifit.vo.SubjectVo;
import team.njupt.ifit.vo.TeachClassVo;

import java.util.List;

@Repository
public interface TeachClassMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TeachClassDTO teachClassDTO);

    int insertSelective(TeachClass record);

    TeachClass selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(@Param("teachClassId") Integer teachClassId, @Param("teachClassDTO")TeachClassDTO teachClassDTO);

    int updateByPrimaryKey(TeachClass record);

    int selectModelClassUsed(String modelClassName);

    int modelClassIsUsed(Integer modelId);

    int modelSubjectIsUsed(Integer subjectId);

    int countTeachClassName(String className);

    List<TeachClassVo> selectByYearTeacherName(@Param("year") String year, @Param("teacherName") String teacherName);

    List<TeachClassVo> selectMyTClass(@Param("year") String year, @Param("teacherId") String teacherId);

    List<SubjectVo> selectTClassSubject(String tclassId);

    void insertBatchTClass(@Param("teachClassDTOList") List<TeachClassDTO> teachClassDTOList);
}