package team.njupt.ifit.pojo;

public class ExamAndModel {
    private Integer examSubjectId;

    private Integer modelClassId;

    public ExamAndModel(Integer examSubjectId, Integer modelClassId) {
        this.examSubjectId = examSubjectId;
        this.modelClassId = modelClassId;
    }

    public ExamAndModel() {
        super();
    }

    public Integer getExamSubjectId() {
        return examSubjectId;
    }

    public void setExamSubjectId(Integer examSubjectId) {
        this.examSubjectId = examSubjectId;
    }

    public Integer getModelClassId() {
        return modelClassId;
    }

    public void setModelClassId(Integer modelClassId) {
        this.modelClassId = modelClassId;
    }
}