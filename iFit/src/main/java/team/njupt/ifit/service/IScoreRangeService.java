package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.ScoreRange;
import team.njupt.ifit.pojo.dto.ScoreRangeDTO;

import java.util.List;

/**
 * Created by lihang on 2017/9/26.
 */
public interface IScoreRangeService {
    ServerResponse insertScoreRange(ScoreRangeDTO scoreRangeDTO, Integer modelStandardId);
    ServerResponse deleteScoreRange(Integer id);
    ServerResponse updateScoreRange(ScoreRange scoreRange);
    ServerResponse<List<ScoreRange>> selectScoreRange(Integer standardId);
}
