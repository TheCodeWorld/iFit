package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.ScoreRange;
import team.njupt.ifit.pojo.SubjectAndRange;
import team.njupt.ifit.pojo.dto.ScoreRangeDTO;

import java.util.List;

@Repository
public interface ScoreRangeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(@Param("modelStandardId") Integer modelStandardId,@Param("scoreRangeDTO") ScoreRangeDTO scoreRangeDTO);

    int insertSelective(ScoreRange record);

    ScoreRange selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ScoreRange record);

    int updateByPrimaryKey(ScoreRange record);

    int deleteBySubjectId(Integer subjectId);

    int deleteByStandardId(Integer standardId);

    int selectStandardIdById(Integer id);

    List<ScoreRange> selectAllByStandardId(Integer standardId);

    List<SubjectAndRange> selectSubjectAndRange(@Param("classId") Integer classId,@Param("standardName") String standardName);
}