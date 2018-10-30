package team.njupt.ifit.util;

import org.springframework.beans.factory.annotation.Autowired;
import team.njupt.ifit.dao.UserMapper;
import team.njupt.ifit.pojo.User;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lihang on 2017/9/20.
 */
public class UserInit {
    @Autowired
    private UserMapper userMapper;
    public void initUser(List<String> stringList,Integer role){
        List<User> userList = new ArrayList<User>();
        if (stringList.size()>0){
            for (String str : stringList){
                User user = new User();
                user.setUsername(str);
                user.setPassword(MD5Util.MD5EncodeUtf8(str));
                user.setRole(role);
                userList.add(user);
            }
            userMapper.insertUserBatch(userList);
        }
    }
//    public static void main(String[] args) {
//        List<String> stringList = new ArrayList<String>();
//        stringList.add("test1");
//        stringList.add("test2");
//        stringList.add("test3");
//        UserInit userInit = new UserInit();
//        userInit.initUser(stringList);
//    }
}
