package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.User;

/**
 * Created by lihang on 2017/9/20.
 */
public interface IUserService {
    ServerResponse login(String username, String password);
    ServerResponse resetPassword(String oldpwd,String newpwd,User user);
    ServerResponse manageResetPwd(String username);
}
