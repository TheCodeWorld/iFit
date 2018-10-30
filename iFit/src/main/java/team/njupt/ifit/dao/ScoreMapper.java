package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.Score;
import team.njupt.ifit.pojo.dto.ScoreDTO;
import team.njupt.ifit.vo.ScoreVo;

import java.util.List;

@Repository
public interface ScoreMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Score record);

    int insertSelective(Score record);

    String selectByStudentIdYear(@Param("studentId") String studentId,@Param("year") String year);

    int updateByPrimaryKeySelective(Score record);

    int updateByPrimaryKey(Score record);

    List<ScoreVo> selectExcutiveClassScore(@Param("eclassname")String eclassname,@Param("year")String year,@Param("flag")Integer flag,@Param("score")Integer score);

    List<ScoreVo> selectTeachClassScore(@Param("tclassname")String tclassname,@Param("flag")Integer flag,@Param("score")Integer score);

    List<String> likeSelectTClassName(String key);

    void insertScore(@Param("scoreDTOList") List<ScoreDTO> scoreDTOList);

    int countByStudentIdYear(@Param("studentId")String studentId,@Param("year")String year);

    List<Score> selectScoreForExport(@Param("year") String year,@Param("classId") Integer classId);
}