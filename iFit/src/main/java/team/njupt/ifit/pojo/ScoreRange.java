package team.njupt.ifit.pojo;

public class ScoreRange {
    private Integer id;

    private Integer min;

    private Integer max;

    private Integer score;

    public ScoreRange(Integer id, Integer min, Integer max, Integer score) {
        this.id = id;
        this.min = min;
        this.max = max;
        this.score = score;
    }

    public ScoreRange() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

}