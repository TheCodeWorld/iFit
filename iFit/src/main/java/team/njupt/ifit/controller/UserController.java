package team.njupt.ifit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.User;
import team.njupt.ifit.service.IUserService;

import javax.servlet.http.HttpSession;

/**
 * Created by lihang on 2017/9/20.
 */
@CrossOrigin()
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService iUserService;

    /**
     * 用户登陆
     * @param session
     * @param username
     * @param pwd
     * @return
     */
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    @ResponseBody
    public ServerResponse<User> login(HttpSession session, @RequestParam("username") String username, @RequestParam("pwd")String pwd){
        ServerResponse<User> serverResponse = iUserService.login(username,pwd);
        if (serverResponse.isSuccess()){
            session.setAttribute("user",serverResponse.getData());
            return serverResponse;
        }
        return ServerResponse.createByErrorMessage("用户名或密码错误");
    }

    /**
     * 退出
     * @param session
     * @return
     */
    @RequestMapping(value = "/loginout")
    @ResponseBody
    public ServerResponse loginOut(HttpSession session){
        User user = (User)session.getAttribute("user");
        if (user!=null){
            //如果用户已经登陆，清除session信息
            session.removeAttribute("user");
            return ServerResponse.createBySuccessMessage("退出成功");
        }
        return ServerResponse.createBySuccessMessage("退出成功");
    }

    /**
     * 修改密码
     * @param oldpwd
     * @param newpwd
     * @param session
     * @return
     */
    @RequestMapping(value = "/resetpwd",method = RequestMethod.POST)
    @ResponseBody
    @Login
    public ServerResponse resetPassword(@RequestParam("oldpwd")String oldpwd,@RequestParam("newpwd")String newpwd,HttpSession session){
        User user = (User) session.getAttribute("user");
        return iUserService.resetPassword(oldpwd,newpwd,user);
    }

}
