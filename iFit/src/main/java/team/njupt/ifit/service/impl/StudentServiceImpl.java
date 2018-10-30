package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.dao.StudentMapper;
import team.njupt.ifit.dao.UserMapper;
import team.njupt.ifit.pojo.User;
import team.njupt.ifit.pojo.dto.StudentDTO;
import team.njupt.ifit.service.IStudentService;
import team.njupt.ifit.util.ExcelUtil;
import team.njupt.ifit.util.MD5Util;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by lihang on 2017/9/23.
 */
@Service("iStudentService")
public class StudentServiceImpl implements IStudentService{
    @Autowired
    private StudentMapper studentMapper;
    @Autowired
    private UserMapper userMapper;

    @Override
    public ServerResponse insertStudent(StudentDTO studentDTO){
        int rowResult = studentMapper.selectStudentId(studentDTO.getStudentId());
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("学号为："+studentDTO.getStudentId()+"的学生已经存在！");
        }
        rowResult = studentMapper.insertSelective(studentDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccess("新增学生成功");
        }
        return ServerResponse.createByErrorMessage("新增学生失败");
    }

    @Override
    @Transactional
    public ServerResponse insertBatchStudent(String path) {
        if(!path.matches("^.+\\.(?i)((xls)|(xlsx))$")){
            return ServerResponse.createByErrorMessage("请传入excel文件");
        }
        List<List<String>> dataList = null;
        try {
            dataList = ExcelUtil.importExcel(path);
        } catch (FileNotFoundException e) {
            return ServerResponse.createByErrorMessage("未找到指定文件");
        }
        //1.导入学生
        List<StudentDTO> studentDTOList = makeStudentDTO(dataList);
        for (StudentDTO studentDTO : studentDTOList){
            int rowResult = studentMapper.selectStudentId(studentDTO.getStudentId());
            if (rowResult>0){
                return ServerResponse.createByErrorMessage("学号为："+studentDTO.getStudentId()+"的学生已经存在！");
            }
        }
        studentMapper.insertBatchStudent(studentDTOList);
        //2.把学生添加到用户表
        List<User> userList = makeUser(dataList);
        userMapper.insertUserBatch(userList);
        return ServerResponse.createBySuccess("导入学生成功");
    }

    /**
     * 组装批量导入的学生
     */
    private List<StudentDTO> makeStudentDTO(List<List<String>> dataList){
        List<StudentDTO> studentDTOList = new ArrayList<StudentDTO>();
        for (int i = 1;i<dataList.size();i++){
            StudentDTO studentDTO = new StudentDTO();
            studentDTO.setStudentId(dataList.get(i).get(0));
            studentDTO.setStudentName(dataList.get(i).get(1));
            studentDTO.setStudentSex(dataList.get(i).get(2));
            studentDTO.setStudentCollege(dataList.get(i).get(3));
            studentDTO.setCurrentExecutiveClass(dataList.get(i).get(4));
            studentDTOList.add(studentDTO);
        }
        return studentDTOList;
    }

    /**
     * 组装导入的学生用户
     * @param dataList
     * @return
     */
    private List<User> makeUser(List<List<String>> dataList){
        List<User> userList = new ArrayList<User>();
        for (int i = 1;i<dataList.size();i++){
            User user = new User();
            String username = dataList.get(i).get(0);
            user.setUsername(username);
            user.setPassword(MD5Util.MD5EncodeUtf8(username));
            user.setRole(3);
            userList.add(user);
        }
        return userList;
    }

    @Override
    public ServerResponse insertStudentToTClass(String teachClass, String studentId){
        int rowResult = studentMapper.selectStudentId(studentId);
        if (rowResult==0){
            return ServerResponse.createByErrorMessage("学号为："+studentId+"的学生不存在！");
        }
        rowResult = studentMapper.updateByStudentId(studentId,teachClass);
        if (rowResult>0){
            return ServerResponse.createBySuccess("成功！");
        }
        return ServerResponse.createByErrorMessage("失败！");
    }

    @Override
    public ServerResponse deleteEClassStudent(String studentId){
        int rowResult = studentMapper.deleteByPrimaryKey(studentId);
        if (rowResult>0){
            return ServerResponse.createBySuccess("删除学生成功！");
        }
        return ServerResponse.createByErrorMessage("删除学生失败！");
    }

    @Override
    public ServerResponse updateStudent(String oldStudentId, StudentDTO studentDTO){
        int rowResult = studentMapper.updateByStudentIdSelective(oldStudentId,studentDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccess("编辑信息成功！");
        }
        return ServerResponse.createByErrorMessage("编辑信息失败！");
    }

    @Override
    public ServerResponse<List<StudentDTO>> selectStudent(String excutiveClass,String teachClass,String year, String studentId, String studentName, String studentCollege){
        List<StudentDTO> studentDTOList = studentMapper.selectStudent(excutiveClass,teachClass,year,studentId,studentName,studentCollege);
        if (studentDTOList.size()>0){
            return ServerResponse.createBySuccess("查询成功！",studentDTOList);
        }
        return ServerResponse.createByErrorMessage("没有符合该条件的学生！");
    }
}
