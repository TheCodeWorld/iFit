package team.njupt.ifit.dao;

import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.Fteacher;
@Repository
public interface FteacherMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Fteacher record);

    int insertSelective(Fteacher record);

    Fteacher selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Fteacher record);

    int updateByPrimaryKey(Fteacher record);
}