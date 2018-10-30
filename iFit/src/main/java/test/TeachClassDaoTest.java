package test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import team.njupt.ifit.dao.TeachClassMapper;
import team.njupt.ifit.vo.TeachClassVo;

import java.util.List;

/**
 * Created by lihang on 2017/9/26.
 */
public class TeachClassDaoTest extends BaseTest {
    @Autowired
    private TeachClassMapper teachClassMapper;

    @Test
    public void test(){
        List<TeachClassVo> teachClassVos = teachClassMapper.selectByYearTeacherName("","李航");
        for (TeachClassVo teachClassVo : teachClassVos){
            System.out.println(teachClassVo.getClassName());
        }
    }

    @Test
    public void testMy(){
        List<TeachClassVo> teachClassVos= teachClassMapper.selectMyTClass("","000");
        for (TeachClassVo teachClassVo : teachClassVos){
            System.out.println(teachClassVo.getClassName());
        }
    }
}
