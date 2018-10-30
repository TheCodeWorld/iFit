package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.ExamStandard;
import team.njupt.ifit.pojo.dto.StandardDTO;

import java.util.List;

@Repository
public interface ExamStandardMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(@Param("modelSubjectId") Integer modelSubjectId,@Param("modelStandardName") String modelStandardName,@Param("weight") Integer weight);

    int insertSelective(ExamStandard record);

    ExamStandard selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StandardDTO standardDTO);

    int updateByPrimaryKey(ExamStandard record);

    int deleteBySubjectId(Integer subjectId);

    int countModelStandardName(@Param("modelStandardName") String modelStandardName,@Param("subjectId") Integer subjectId);

    List<StandardDTO> selectAllBySubjectId(Integer modelSubjectId);

    int selectSubjectIdById(Integer id);
}