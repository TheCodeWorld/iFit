package team.njupt.ifit.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.common.constant.TeachClassConstant;
import team.njupt.ifit.dao.ModelClassMapper;
import team.njupt.ifit.dao.StudentMapper;
import team.njupt.ifit.dao.TeachClassMapper;
import team.njupt.ifit.dao.TteacherMapper;
import team.njupt.ifit.pojo.ModelClass;
import team.njupt.ifit.pojo.dto.BatchUpdateStudentDTO;
import team.njupt.ifit.pojo.dto.TeachClassDTO;
import team.njupt.ifit.pojo.dto.TeacherDTO;
import team.njupt.ifit.service.ITeachClassService;
import team.njupt.ifit.util.ExcelUtil;
import team.njupt.ifit.vo.SubjectVo;
import team.njupt.ifit.vo.TeachClassVo;

import java.io.FileNotFoundException;
import java.util.*;

/**
 * Created by lihang on 2017/9/26.
 */
@Service("iTeachClassService")
public class TeachClassServiceImpl implements ITeachClassService{
    @Autowired
    private TeachClassMapper teachClassMapper;
    @Autowired
    private TteacherMapper tteacherMapper;
    @Autowired
    private ModelClassMapper modelMapper;
    @Autowired
    private StudentMapper studentMapper;

    @Override
    public ServerResponse insertTeachClass(TeachClassDTO teachClassDTO){
        int rowResult = teachClassMapper.countTeachClassName(teachClassDTO.getClassName());
        if (rowResult>0){
            return ServerResponse.createByErrorMessage("班级名称重复！");
        }
        teachClassDTO.setTeacherClassId(UUID.randomUUID()+"-"+TeachClassConstant.TICE);
        rowResult = teachClassMapper.insert(teachClassDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("新增成功！");
        }
        return ServerResponse.createByErrorMessage("新增失败！");
    }

    @Override
    public ServerResponse updateClassTeacher(Integer teachClassId, TeachClassDTO teachClassDTO){
        int rowResult = teachClassMapper.updateByPrimaryKeySelective(teachClassId,teachClassDTO);
        if (rowResult>0){
            return ServerResponse.createBySuccessMessage("更新成功!");
        }
        return ServerResponse.createByErrorMessage("更新失败！");
    }
    @Override
    public ServerResponse<List<TeachClassVo>> selectTClass(String year, String teacherName){
        List<TeachClassVo> teachClassVoList = teachClassMapper.selectByYearTeacherName(year,teacherName);
        if (teachClassVoList.size()>0){
            return ServerResponse.createBySuccess(teachClassVoList);
        }
        return ServerResponse.createByErrorMessage("没有符合该条件的班级！");
    }

    @Override
    public ServerResponse<List<TeachClassVo>> selectMyTClass(String year, String teacherId){
        List<TeachClassVo> teachClassVoList = teachClassMapper.selectMyTClass(year,teacherId);
        if (teachClassVoList.size()>0){
            return ServerResponse.createBySuccess(teachClassVoList);
        }
        return ServerResponse.createByErrorMessage("没有符合该条件的班级！");
    }

    @Override
    public ServerResponse<List<SubjectVo>> selectTClassSubject(String tclassId) {
        List<SubjectVo> subjectVoList = teachClassMapper.selectTClassSubject(tclassId);
        if (subjectVoList.size()>0){
            return ServerResponse.createBySuccess(subjectVoList);
        }
        return ServerResponse.createByErrorMessage("没有符合该条件的查询结果！");
    }

    @Override
    public ServerResponse batchInsertTeachClass(String path) {
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
        //3.文件去重后插入教学班
        List<TeachClassDTO> teachClassDTOList = makeTClassList(dataList);
        teachClassMapper.insertBatchTClass(teachClassDTOList);

        //4.根据教学班中的学生更新学生表
        List<BatchUpdateStudentDTO> batchStudentList= makeUpdateStudent(dataList);
        studentMapper.batchUpdateStudent(batchStudentList);
        return ServerResponse.createBySuccessMessage("导入成功");
    }

    /**
     * 组装插入的教学班list
     * @param dataList
     * @return
     */
    private List<TeachClassDTO> makeTClassList(List<List<String>> dataList){
        List<TeachClassDTO> teachClassDTOList = new ArrayList<TeachClassDTO>();
        Map<String,Integer> teacherMap = getTeacherNameAndId();
        Map<String,Integer> modelMap = getModelNameAndId();
        TeachClassDTO teachClassDTO = new TeachClassDTO();
        String teacherClassId = dataList.get(1).get(0);
        teachClassDTO.setTeacherClassId(teacherClassId);
        String className = dataList.get(1).get(1)
                +"-"+dataList.get(1).get(2)
                +"-"+dataList.get(1).get(3);
        teachClassDTO.setClassName(className);
        teachClassDTO.setClassTeacherId(teacherMap.get(dataList.get(1).get(2)));
        teachClassDTO.setModelClassId(modelMap.get(dataList.get(1).get(1)));
        teachClassDTO.setSchoolYear(dataList.get(1).get(5));
        teachClassDTO.setStandard(dataList.get(1).get(4));
        teachClassDTOList.add(teachClassDTO);
        for (int i = 2;i<dataList.size();i++){
            teacherClassId = dataList.get(i).get(0);
            for (TeachClassDTO t:teachClassDTOList){
                if (!teacherClassId.equals(t.getTeacherClassId())){
                    teachClassDTO.setTeacherClassId(teacherClassId);
                    String className2 = dataList.get(i).get(1)
                            +"-"+dataList.get(i).get(2)
                            +"-"+dataList.get(i).get(3);
                    teachClassDTO.setClassName(className2);
                    teachClassDTO.setClassTeacherId(teacherMap.get(dataList.get(i).get(2)));
                    teachClassDTO.setModelClassId(modelMap.get(dataList.get(i).get(1)));
                    teachClassDTO.setSchoolYear(dataList.get(i).get(5));
                    teachClassDTO.setStandard(dataList.get(i).get(4));
                    teachClassDTOList.add(teachClassDTO);
                }
            }
        }
        return teachClassDTOList;
    }

    /**
     * 组装要更新的学生信息list
     * @param dataList
     * @return
     */
    private List<BatchUpdateStudentDTO> makeUpdateStudent(List<List<String>> dataList){
        List<BatchUpdateStudentDTO> batchUpdateList = new ArrayList<BatchUpdateStudentDTO>();
        Map<String,Integer> map = getTeachClassNameAndId();
        for (int i = 1;i<dataList.size();i++){
            BatchUpdateStudentDTO b = new BatchUpdateStudentDTO();
            String className = dataList.get(i).get(1)
                    +"-"+dataList.get(i).get(2)
                    +"-"+dataList.get(i).get(3);
            b.setClassId(map.get(className));
            b.setStudentId(dataList.get(i).get(6));
            b.setYear(dataList.get(i).get(5));
            batchUpdateList.add(b);
        }
        return batchUpdateList;
    }

    /**
     * 查询体育教师的姓名和id
     * @return map
     */
    private Map<String,Integer> getTeacherNameAndId(){
        Map<String,Integer> map = new HashMap<String, Integer>();
        List<TeacherDTO> teacherDTOList = tteacherMapper.selectAll();
        for (TeacherDTO t:teacherDTOList) {
            map.put(t.getTeacherName(),t.getId());
        }
        return map;
    }

    /**
     * 查询模版班的名称和id
     * @return map
     */
    private Map<String,Integer> getModelNameAndId(){
        Map<String,Integer> map = new HashMap<String, Integer>();
        List<ModelClass> modelClassList = modelMapper.selectModelClass();
        for (ModelClass m:modelClassList) {
            map.put(m.getModelName(),m.getId());
        }
        return map;
    }


    /**
     * 查询教学班名称和id
     * @return
     */
    private Map<String,Integer> getTeachClassNameAndId(){
        Map<String,Integer> map = new HashMap<String, Integer>();
        List<TeachClassVo> teachClassList = teachClassMapper.selectByYearTeacherName(null,null);
        for (TeachClassVo t:teachClassList) {
            map.put(t.getClassName(),t.getClassId());
        }
        return map;
    }
}
