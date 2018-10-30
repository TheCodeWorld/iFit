package test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import team.njupt.ifit.dao.UserMapper;
import team.njupt.ifit.pojo.User;
import team.njupt.ifit.util.MD5Util;

/**
 * Created by lihang on 2017/9/20.
 */
public class UserDaoTest extends BaseTest{
    @Autowired
    private UserMapper userMapper;

    @Test
    public void testInsert(){
        User user = new User();
        user.setUsername("006");
        String md5pwd = MD5Util.MD5EncodeUtf8("006");
        user.setPassword(md5pwd);
        user.setRole(1);
        userMapper.insert(user);
    }
}
