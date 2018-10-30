package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.vo.ScoreVo;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by lihang on 2017/9/25.
 */
public interface IScoreService {
    ServerResponse<String> selectStudentScoreDetil(String studentId, String year);
    ServerResponse<List<ScoreVo>> selectExcutiveClassScore(String executiveClassId, String year, Integer flag, Integer score);
    ServerResponse<List<ScoreVo>> selectTeachClassScore(String teachClassId, Integer score, Integer flag);
    ServerResponse<List<String>> likeSelectTClassName(String key);
    ServerResponse insertScore(String path);
    ServerResponse outTcalssExcelScore(String year, Integer classId, HttpServletResponse response);
}
