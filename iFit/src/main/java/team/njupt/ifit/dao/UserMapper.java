package team.njupt.ifit.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import team.njupt.ifit.pojo.User;

import java.util.List;

@Repository
public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User selectUserByUsernameAndPasswd(@Param("username") String username,@Param("password") String password);

    String selectPasswordByUsernameId(@Param("username")String username,@Param("userId")Integer userId);

    int updatePasswordByUsername(@Param("newPassword")String newPassword,@Param("username")String username);

    void insertUserBatch(@Param("userList")List<User> userList);

}