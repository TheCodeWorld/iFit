package team.njupt.ifit.dao;

import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.ModelClass;
import team.njupt.ifit.vo.SubjectVo;

import java.util.List;

@Repository
public interface ModelClassMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(String modelName);

    int insertSelective(ModelClass record);

    int selectByModelName(String modelName);

    int updateByPrimaryKeySelective(ModelClass record);

    int updateByPrimaryKey(ModelClass record);

    int deleteByModelName(String modelClassName);

    List<ModelClass> selectModelClass();

    List<SubjectVo> selectOneModelSubject(String modelId);
}