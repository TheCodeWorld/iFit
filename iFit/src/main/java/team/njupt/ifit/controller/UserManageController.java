package team.njupt.ifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import team.njupt.ifit.annotation.Admin;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.service.IUserService;

/**
 * Created by lihang on 2017/9/20.
 */
@CrossOrigin()
@Controller
@RequestMapping("/manage")
public class UserManageController {
    @Autowired
    private IUserService iUserService;

    /**
     * 管理员重置密码
     * @param username
     * @return
     */
    @RequestMapping(value = "/resetpwd",method = RequestMethod.POST)
    @ResponseBody
    @Login
    @Admin
    public ServerResponse resetPassword(String username){
        return iUserService.manageResetPwd(username);
    }


}
