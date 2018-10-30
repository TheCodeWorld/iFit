package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.dao.TteacherMapper;
import team.njupt.ifit.pojo.dto.TeacherDTO;
import team.njupt.ifit.service.ITeacherService;
import team.njupt.ifit.util.ExcelUtil;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by lihang on 2017/9/23.
 */
@Service("iTeacherService")
public class TeacherServieImpl implements ITeacherService{
    @Autowired
    private TteacherMapper tteacherMapper;
    @Override
    public ServerResponse insertTteacher(TeacherDTO teacherDTO){
        int rowResult = tteacherMapper.selectTeacherId(teacherDTO.getTeacherId());
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("教工:"+teacherDTO.getTeacherId()+"已经存在！");
        }
        rowResult = tteacherMapper.insert(teacherDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccess("教师新增成功！");
        }
        return ServerResponse.createByErrorMessage("插入失败！");
    }

    @Override
    public ServerResponse batchInsetTeacher(String path){
        //1.判断文件合法性
        if(!path.matches("^.+\\.(?i)((xls)|(xlsx))$")){
            return ServerResponse.createByErrorMessage("请传入excel文件");
        }
        List<List<String>> dataList = null;
        //2.读取excel文件内容
        try {
            dataList = ExcelUtil.importExcel(path);
        } catch (FileNotFoundException e) {
            return ServerResponse.createByErrorMessage("未找到指定文件");
        }
        //3.组装教师信息并插入
        List<TeacherDTO> teacherDTOList = makeTeacherDTOList(dataList);
        for (TeacherDTO teacherDTO : teacherDTOList){
            int rowResult = tteacherMapper.selectTeacherId(teacherDTO.getTeacherId());
            if (rowResult>0){
                return ServerResponse.createByErrorMessage("教工:"+teacherDTO.getTeacherId()+"已经存在!");
            }
        }
        tteacherMapper.batchInset(teacherDTOList);
        return ServerResponse.createBySuccess("教师导入成功！");
    }

    @Override
    public ServerResponse deleteByTeacherId(String teacherId){
        int rowResult = tteacherMapper.deleteByTeacherId(teacherId);
        if (rowResult>0){
            return ServerResponse.createBySuccess("教师删除成功！");
        }
        return ServerResponse.createByErrorMessage("删除失败！");
    }
    @Override
    public ServerResponse updateTteacher(String teacherId, TeacherDTO teacherDTO){
        int rowResult = tteacherMapper.selectTeacherId(teacherDTO.getTeacherId());
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("教工:"+teacherDTO.getTeacherId()+"已经存在!");
        }
        rowResult = tteacherMapper.updateByTeacherId(teacherId,teacherDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccess("教师修改成功！");
        }
        return ServerResponse.createByErrorMessage("信息修改失败！");
    }

    @Override
    public ServerResponse<List<TeacherDTO>> selectAll(){
        List<TeacherDTO> teacherDTOList = tteacherMapper.selectAll();
        return ServerResponse.createBySuccess(teacherDTOList);
    }

    @Override
    public ServerResponse<List<TeacherDTO>> selectLikeName(String name){
        List<TeacherDTO> teacherDTOList = tteacherMapper.selectLikeName(name);
        if (teacherDTOList.size()>0){
            return ServerResponse.createBySuccess(teacherDTOList);
        }
        return ServerResponse.createByErrorMessage("没有符合条件的老师");
    }

    private List<TeacherDTO> makeTeacherDTOList(List<List<String>> dataList){
        List<TeacherDTO> teacherDTOList = new ArrayList<TeacherDTO>();
        for (int i = 1;i<dataList.size();i++){
            TeacherDTO teacherDTO = new TeacherDTO();
            teacherDTO.setTeacherId(dataList.get(i).get(0));
            teacherDTO.setTeacherName(dataList.get(i).get(1));
            teacherDTO.setTeacherSex(dataList.get(i).get(2));
            teacherDTOList.add(teacherDTO);
        }
        return teacherDTOList;
    }
}
