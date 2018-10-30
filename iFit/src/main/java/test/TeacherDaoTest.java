package test;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import team.njupt.ifit.dao.TteacherMapper;
import team.njupt.ifit.pojo.dto.TeacherDTO;
import team.njupt.ifit.service.ITeacherService;

import java.util.List;

/**
 * Created by lihang on 2017/9/23.
 */
public class TeacherDaoTest extends BaseTest {
    @Autowired
    private TteacherMapper tteacherMapper;
    @Autowired
    private ITeacherService iTeacherService;

    //@Test
    public void insertTest(){
        TeacherDTO teacherDTO = new TeacherDTO();
        teacherDTO.setTeacherId("23333");
        teacherDTO.setTeacherName("不想写代码");
        teacherDTO.setTeacherSex("不男不女");
        tteacherMapper.insert(teacherDTO);
    }

    @Test
    public void selectTest(){
        System.out.println(tteacherMapper.selectTeacherId("23333"));
    }

//    @Test
//    public void batchInsetTest(){
//        TeacherDTO teacherDTO1 = new TeacherDTO();
//        teacherDTO1.setTeacherId("005");
//        teacherDTO1.setTeacherName("不想写代码");
//        teacherDTO1.setTeacherSex("不男不女");
//        TeacherDTO teacherDTO2 = new TeacherDTO();
//        teacherDTO2.setTeacherId("006");
//        teacherDTO2.setTeacherName("不想写代码");
//        teacherDTO2.setTeacherSex("不男不女");
//        TeacherDTO teacherDTO3 = new TeacherDTO();
//        teacherDTO3.setTeacherId("003");
//        teacherDTO3.setTeacherName("不想写代码");
//        teacherDTO3.setTeacherSex("不男不女");
//        List<TeacherDTO> teacherDTOs = new ArrayList<TeacherDTO>();
//        teacherDTOs.add(teacherDTO1);
//        teacherDTOs.add(teacherDTO2);
//        teacherDTOs.add(teacherDTO3);
//        ServerResponse serverResponse = iTeacherService.batchInsetTeacher(teacherDTOs);
//        System.out.println(serverResponse);
//    }

    @Test
    public void deleteByTeacherId(){
        iTeacherService.deleteByTeacherId("002");
    }

    @Test
    public void testUpdate(){
        TeacherDTO teacherDTO = new TeacherDTO();
        teacherDTO.setTeacherId("233");
        teacherDTO.setTeacherName("不想写代码啊");
        teacherDTO.setTeacherSex("不男不女");
        iTeacherService.updateTteacher("23333",teacherDTO);
    }

    @Test
    public void testSelectAll(){
        List<TeacherDTO> teacherDTOList = iTeacherService.selectAll().getData();
        for (TeacherDTO teacherDTO:teacherDTOList){
            System.out.println(teacherDTO.toString());
        }
    }
}
