package team.njupt.ifit.pojo;

import java.util.List;

public class ExamSubject {
    private Integer id;

    private String examName;

    private List<ExamStandard> examStandardList;

    public ExamSubject(Integer id, String examName,List<ExamStandard> examStandardList) {
        this.id = id;
        this.examName = examName;
        this.examStandardList = examStandardList;
    }

    public ExamSubject() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName == null ? null : examName.trim();
    }

    public List<ExamStandard> getExamStandardList() {
        return examStandardList;
    }

    public void setExamStandardList(List<ExamStandard> examStandardList) {
        this.examStandardList = examStandardList;
    }
}