package team.njupt.ifit.pojo;

import java.util.List;

public class ExamStandard {
    private Integer id;

    private String examStandardName;

    private Integer weight;

    private List<ScoreRange> scoreRangeList;

    public ExamStandard(Integer id, String examStandardName,  Integer weight,List<ScoreRange> scoreRangeList) {
        this.id = id;
        this.examStandardName = examStandardName;
        this.weight = weight;
        this.scoreRangeList = scoreRangeList;
    }

    public ExamStandard() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getExamStandardName() {
        return examStandardName;
    }

    public void setExamStandardName(String examStandardName) {
        this.examStandardName = examStandardName == null ? null : examStandardName.trim();
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public List<ScoreRange> getScoreRangeList() {
        return scoreRangeList;
    }

    public void setScoreRangeList(List<ScoreRange> scoreRangeList) {
        this.scoreRangeList = scoreRangeList;
    }
}