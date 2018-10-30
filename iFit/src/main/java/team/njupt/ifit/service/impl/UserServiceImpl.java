package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.dao.UserMapper;
import team.njupt.ifit.pojo.User;
import team.njupt.ifit.service.IUserService;
import team.njupt.ifit.util.MD5Util;

/**
 * Created by lihang on 2017/9/20.
 */
@Service("iUserService")
public class UserServiceImpl implements IUserService{

    @Autowired
    private UserMapper userMapper;

    @Override
    public ServerResponse<User> login(String username, String password){
        String md5Pwd = MD5Util.MD5EncodeUtf8(password);
        User user = userMapper.selectUserByUsernameAndPasswd(username,md5Pwd);
        if (user!=null){
            user.setPassword("");
            return ServerResponse.createBySuccess("用户登陆成功",user);
        }
        return ServerResponse.createByErrorMessage("用户名或密码错误");
    }

    @Override
    public ServerResponse resetPassword(String oldpwd, String newpwd, User user) {
        String md5OldPwd = MD5Util.MD5EncodeUtf8(oldpwd);
        String rowResult = userMapper.selectPasswordByUsernameId(user.getUsername(), user.getId());
        if (!rowResult.equals(md5OldPwd)) {
            return ServerResponse.createByErrorMessage("旧密码错误");
        }
        user.setPassword(MD5Util.MD5EncodeUtf8(newpwd));
        int result = userMapper.updateByPrimaryKeySelective(user);
        if (result>0) {
            return ServerResponse.createBySuccessMessage("密码更新成功");
        }
        return ServerResponse.createByErrorMessage("密码更新失败");
    }

    @Override
    public ServerResponse manageResetPwd(String username){
        String md5Pwd = MD5Util.MD5EncodeUtf8(username);
        int rowResult = userMapper.updatePasswordByUsername(md5Pwd,username);
        if (rowResult==0){
            return ServerResponse.createByErrorMessage("重置密码错误");
        }
        return ServerResponse.createBySuccessMessage("重置密码成功");
    }
}
