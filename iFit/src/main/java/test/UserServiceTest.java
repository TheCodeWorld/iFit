package test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.service.IUserService;

/**
 * Created by lihang on 2017/9/20.
 */
public class UserServiceTest extends BaseTest{
    @Autowired
    private IUserService iUserService;

    @Test
    public void testUserLogin(){
        ServerResponse serverResponse = iUserService.login("admin","admi");
        System.out.println(serverResponse);
    }
}
