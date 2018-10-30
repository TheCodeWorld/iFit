package team.njupt.ifit.service.impl;

import com.alibaba.fastjson.JSON;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.common.constant.ScoreConstant;
import team.njupt.ifit.dao.ScoreMapper;
import team.njupt.ifit.dao.ScoreRangeMapper;
import team.njupt.ifit.dao.TeachClassMapper;
import team.njupt.ifit.pojo.Score;
import team.njupt.ifit.pojo.ScoreRange;
import team.njupt.ifit.pojo.SubjectAndRange;
import team.njupt.ifit.pojo.dto.ScoreDTO;
import team.njupt.ifit.service.IScoreService;
import team.njupt.ifit.util.ExcelUtil;
import team.njupt.ifit.vo.ScoreVo;
import team.njupt.ifit.vo.TeachClassVo;

import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lihang on 2017/9/25.
 */
@Service("iScoreService")
public class ScoreServiceImpl implements IScoreService {
    @Autowired
    private ScoreMapper scoreMapper;
    @Autowired
    private ScoreRangeMapper scoreRangeMapper;
    @Autowired
    private TeachClassMapper teachClassMapper;

    @Override
    public ServerResponse<String> selectStudentScoreDetil(String studentId, String year){
        String scoreDetail = scoreMapper.selectByStudentIdYear(studentId,year);
        if ("".equals(scoreDetail)||scoreDetail==null){
            return ServerResponse.createByErrorMessage("成绩不存在");
        }
        return ServerResponse.createBySuccess(scoreDetail);
    }

    @Override
    public ServerResponse<List<ScoreVo>> selectExcutiveClassScore(String executiveClassId, String year, Integer flag, Integer score){
        List<ScoreVo> scoreVoList = scoreMapper.selectExcutiveClassScore(executiveClassId,year,flag,score);
        if (scoreVoList.size()>0){
            return ServerResponse.createBySuccess(scoreVoList);
        }
        return ServerResponse.createByErrorMessage("没有符合条件的查询结果！");
    }

    @Override
    public ServerResponse<List<ScoreVo>> selectTeachClassScore(String teachClassId, Integer score, Integer flag){
        List<ScoreVo> scoreVoList = scoreMapper.selectTeachClassScore(teachClassId,flag,score);
        if (scoreVoList.size()>0){
            return ServerResponse.createBySuccess(scoreVoList);
        }
        return ServerResponse.createByErrorMessage("没有符合条件的查询结果！");
    }

    @Override
    public ServerResponse<List<String>> likeSelectTClassName(String key){
        List<String> list = scoreMapper.likeSelectTClassName(key);
        if (list.size()>0){
            return ServerResponse.createBySuccess(list);
        }
        return ServerResponse.createByErrorMessage("没有符合条件的查询结果！");
    }

    @Override
    public ServerResponse insertScore(String path){
        if(!path.matches("^.+\\.(?i)((xls)|(xlsx))$")){
            return ServerResponse.createByErrorMessage("请传入excel文件");
        }
        List<List<String>> dataList = null;
        try {
            dataList = ExcelUtil.importExcel(path);
        } catch (FileNotFoundException e) {
            return ServerResponse.createByErrorMessage("未找到指定文件");
        }
        //组装要插入数据库的ScoreDTOList
        List<ScoreDTO> scoreDTOList = makeScoreDTO(dataList);
        for (ScoreDTO score:scoreDTOList){
            int rowResult = scoreMapper.countByStudentIdYear(score.getStudentId(),score.getYear());
            if (rowResult>0){
                return ServerResponse.createByErrorMessage("学号为："+score.getStudentId()+"的学生该学年成绩已经存在！");
            }
        }
        //插入成绩
        scoreMapper.insertScore(scoreDTOList);
        return ServerResponse.createBySuccess("导入学生成绩成功！");
    }


    @Override
    public ServerResponse outTcalssExcelScore(String year, Integer classId, HttpServletResponse response) {
        //1.根据条件查询出成绩
        List<Score> scoreList = scoreMapper.selectScoreForExport(year,classId);
        //2.组装导出格式,导出
        ExcelUtil.exportSocre(scoreList,response);
        return ServerResponse.createBySuccess();
    }

    /**
     * 组装导入的成绩列表
     * @param classId
     * @param standard
     * @return
     */
    private Map<String,SubjectAndRange> makeScoreList(Integer classId,String standard){
        Map<String,SubjectAndRange> map = new HashMap<String, SubjectAndRange>();
        List<SubjectAndRange> subjectAndRangeList = scoreRangeMapper.selectSubjectAndRange(classId,standard);
        for (SubjectAndRange s:subjectAndRangeList) {
            map.put(s.getName(),s);
        }
        return map;
    }

    /**
     * 组装要插入数据库的ScoreDTOList
     * @param dataList
     * @return
     */
    private List<ScoreDTO> makeScoreDTO(List<List<String>> dataList){
        List<ScoreDTO> scoreDTOList = new ArrayList<ScoreDTO>();
        Map<String,Integer> classIdAndNameMap = getTeachClassNameAndId();
        for (int i = 1;i<dataList.size();i++){
            ScoreDTO scoreDTO = new ScoreDTO();
            scoreDTO.setStudentId(dataList.get(i).get(0));
            scoreDTO.setStudentName(dataList.get(i).get(1));
            Integer classId = classIdAndNameMap.get(dataList.get(i).get(2));
            scoreDTO.setClassId(classId);
            scoreDTO.setYear(dataList.get(i).get(3));
            String standard = dataList.get(i).get(4);
            Map<String,String> jsonMap = new HashMap<String, String>();
            for (int j = 5;j<dataList.get(0).size();j++){
                jsonMap.put(dataList.get(0).get(j),dataList.get(i).get(j));
            }
            Map sumScoreMap = getSumScore(classId,standard,jsonMap);
            Double sumScore = (Double)sumScoreMap.get("sumScore");
            jsonMap.put("备注", (String) sumScoreMap.get("msg"));
            String grade;
            if (sumScore<60){
                grade = ScoreConstant.NOT_PASS;
            }else if (sumScore>85){
                grade = ScoreConstant.GOOD;
            }else {
                grade = ScoreConstant.PASS;
            }
            scoreDTO.setGrade(grade);
            String jsonScore = JSON.toJSONString(jsonMap);
            scoreDTO.setJsonScore(jsonScore);
            scoreDTO.setSumScore(sumScore);
            scoreDTOList.add(scoreDTO);
        }
        return scoreDTOList;
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

    /**
     * 计算总分
     * 早操次数直接转换为一个科目，也有相应的得分范围,
     * 但是低于最低次数直接视为59分，高于的部分直接加分
     * @param jsonMap
     * @return
     */
    private Map getSumScore(Integer classId,String standard,Map<String,String> jsonMap){
        Map map = new HashMap();
        Double sumScore = Double.valueOf(0);
        String msg;
        Map<String,SubjectAndRange> rangeMap = makeScoreList(classId,standard);
        //如果有免测，直接得分
        if (jsonMap.containsKey(ScoreConstant.MIANCE)){
            if (jsonMap.get(ScoreConstant.MIANCE).equals(ScoreConstant.MIANCE_60)){
                map.put("sumScore",Double.valueOf(60));
                msg = "免测60";
                map.put("msg",msg);
                return map;
            }
            if (jsonMap.get(ScoreConstant.MIANCE).equals(ScoreConstant.MIANCE_80)){
                map.put("sumScore",Double.valueOf(80));
                msg = "免测80";
                map.put("msg",msg);
                return map;
            }
        }
        for (Map.Entry<String, String> entry : jsonMap.entrySet()) {
            //如果有加分，直接加在总分上
            if (entry.getKey().equals(ScoreConstant.JIAFEN)||entry.getKey().equals(ScoreConstant.MIANCE)){
                //加分最多加5分
                if (Double.valueOf(entry.getValue())>5){
                    sumScore += 5;
                }
                sumScore += Double.valueOf(entry.getValue());
            }
            if (entry.getKey().equals(ScoreConstant.ZAOCAO)){
                //如果早操次数不达标，直接59分
                if (Integer.valueOf(entry.getValue())<ScoreConstant.ZAOCAO_DOWN){
                    map.put("sumScore",Double.valueOf(59));
                    msg = "晨练次数不达标";
                    map.put("msg",msg);
                    return map;
                }else {
                    SubjectAndRange subjectAndRange = rangeMap.get(entry.getKey());
                    for (ScoreRange scoreRange:subjectAndRange.getScoreList()){
                        if (Double.valueOf(entry.getValue())<scoreRange.getMax()
                                &&Double.valueOf(entry.getValue())>=scoreRange.getMin()){
                            sumScore += scoreRange.getScore()*(subjectAndRange.getWeight()/100);
                        }
                    }
                }
            }
            SubjectAndRange subjectAndRange = rangeMap.get(entry.getKey());
            for (ScoreRange scoreRange:subjectAndRange.getScoreList()){
                if (Double.valueOf(entry.getValue())<scoreRange.getMax()
                        &&Double.valueOf(entry.getValue())>=scoreRange.getMin()){
                    sumScore += scoreRange.getScore()*(subjectAndRange.getWeight()/100);
                }
            }
        }
        if (sumScore > ScoreConstant.MANFEN){
            map.put("sumScore",100);
        }else if (sumScore < ScoreConstant.JIGE){
            map.put("sumScore",sumScore);
            msg = "早操及格但体育成绩不及格";
            map.put("msg",msg);
        }else {
            map.put("sumScore",sumScore);
            msg = "成绩合格";
            map.put("msg",msg);
        }
        return map;
    }
}
