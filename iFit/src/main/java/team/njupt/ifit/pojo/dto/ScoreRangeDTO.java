package team.njupt.ifit.pojo.dto;

/**
 * Created by lihang on 2017/9/22.
 */
public class ScoreRangeDTO {

    private Integer min;

    private Integer max;

    private Integer score;

    public Integer getMin() {
        return min;
    }

    public void setMin(Integer min) {
        this.min = min;
    }

    public Integer getMax() {
        return max;
    }

    public void setMax(Integer max) {
        this.max = max;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return "ScoreRangeDTO{" +
                "min=" + min +
                ", max=" + max +
                ", score=" + score +
                '}';
    }
}
