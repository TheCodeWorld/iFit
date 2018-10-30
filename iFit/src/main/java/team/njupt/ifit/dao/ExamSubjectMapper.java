package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.ExamSubject;
import team.njupt.ifit.vo.SubjectVo;

import java.util.List;

@Repository
public interface ExamSubjectMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(String subjectName);

    int insertSelective(ExamSubject record);

    int selectBySubjectName(String subjectName);

    int updateByPrimaryKeySelective(ExamSubject record);

    int updateByPrimaryKey(@Param("subjectId") Integer subjectId, @Param("newSubjectName")String newSubjectName);

    List<SubjectVo> seletAll();

    int countSubjectName(String subjectName);
}