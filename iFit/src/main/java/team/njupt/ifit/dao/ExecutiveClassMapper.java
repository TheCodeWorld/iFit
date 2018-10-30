package team.njupt.ifit.dao;

import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.ExecutiveClass;
@Repository
public interface ExecutiveClassMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ExecutiveClass record);

    int insertSelective(ExecutiveClass record);

    ExecutiveClass selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ExecutiveClass record);

    int updateByPrimaryKey(ExecutiveClass record);
}