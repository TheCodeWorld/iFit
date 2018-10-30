package team.njupt.ifit.util;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.common.constant.UserRoleConstant;
import team.njupt.ifit.pojo.User;

import javax.servlet.http.HttpSession;

/**
 * Created by lihang on 2017/9/20.
 * 判断权限，已经改用AOP实现
 */
public class CheckRole {
    public static boolean isAdmin(User user){
        if (user.getRole()!= UserRoleConstant.ADMIN){
            return false;
        }
        return true;
    }
    public static boolean isStudent(User user){
        if (user.getRole()!= UserRoleConstant.STUDENT){
            return false;
        }
        return true;
    }
    public static boolean isTteacher(User user){
        if (user.getRole()!= UserRoleConstant.TTEACHER){
            return false;
        }
        return true;
    }

    public static ServerResponse isAdminAndLogin(HttpSession session){
        User user = (User) session.getAttribute("user");
        if (user==null){
            return ServerResponse.createByErrorMessage("请先登陆");
        }
        if (!CheckRole.isAdmin(user)){
            return ServerResponse.createByErrorMessage("你不是管理员！");
        }
        return ServerResponse.createBySuccess();
    }
}
