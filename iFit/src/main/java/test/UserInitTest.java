package test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import team.njupt.ifit.dao.UserMapper;
import team.njupt.ifit.pojo.User;
import team.njupt.ifit.util.MD5Util;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lihang on 2017/9/20.
 */
public class UserInitTest extends BaseTest {
    @Autowired
    private UserMapper userMapper;

    @Test
    public void testBatch() {
        List<String> stringList = new ArrayList<String>();
        stringList.add("fudaoyuan1");
        stringList.add("fudaoyuan2");
        //stringList.add("test3");
        List<User> userList = new ArrayList<User>();
        if (stringList.size() > 0) {
            for (String str : stringList) {
                User user = new User();
                user.setUsername(str);
                user.setPassword(MD5Util.MD5EncodeUtf8(str));
                user.setRole(2);
                userList.add(user);
            }
        }
        userMapper.insertUserBatch(userList);
    }
}
