package team.njupt.ifit.service;

import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.pojo.dto.StandardDTO;

import java.util.List;

/**
 * Created by lihang on 2017/9/26.
 */
public interface IStandardService {
    ServerResponse insertModelStandard(Integer modelSubjectId, String modelStandardName, Integer weight);
    ServerResponse deleteModelStandard(Integer modelStandardId);
    ServerResponse updateModelStandard(StandardDTO standardDTO);
    ServerResponse<List<StandardDTO>> selectAll(Integer modelSubjectId);
}
