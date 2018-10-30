package team.njupt.ifit.pojo;

import java.util.List;

/**
 * @author lihang
 * @date 2017/12/1.
 * @description
 */
public class SubjectAndRange {
    private String name;
    private List<ScoreRange> scoreList;
    private Integer weight;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<ScoreRange> getScoreList() {
        return scoreList;
    }

    public void setScoreList(List<ScoreRange> scoreList) {
        this.scoreList = scoreList;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }
}
