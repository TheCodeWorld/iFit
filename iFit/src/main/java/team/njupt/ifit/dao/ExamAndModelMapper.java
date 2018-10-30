package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.ExamAndModel;

import java.util.List;

@Repository
public interface ExamAndModelMapper {
    int insert(ExamAndModel record);

    int insertSelective(ExamAndModel record);

    int deleteByModelName(String modelName);

    int deleteBySubjectName(String subjectName);

    void setModelClassSubject(@Param("examAndModelList") List<ExamAndModel> examAndModelList);

    int delModelClassSubject(@Param("examAndModel") ExamAndModel examAndModel);

    int countModelClassSubject(@Param("examAndModel") ExamAndModel examAndModel);
}