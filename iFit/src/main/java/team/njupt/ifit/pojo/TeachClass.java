package team.njupt.ifit.pojo;

import java.util.List;

public class TeachClass {
    private Integer id;

    private String className;

    private String schoolYear;

    private String modelClassId;

    private List<Score> scoreList;

    private List<Student> studentList;

    public TeachClass(Integer id, String className,  String schoolYear, String modelClassId,List<Score> scoreList,List<Student> studentList) {
        this.id = id;
        this.className = className;
        this.schoolYear = schoolYear;
        this.modelClassId = modelClassId;
        this.scoreList = scoreList;
        this.studentList = studentList;
    }

    public TeachClass() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className == null ? null : className.trim();
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear == null ? null : schoolYear.trim();
    }

    public String getModelClassId() {
        return modelClassId;
    }

    public void setModelClassId(String modelClassId) {
        this.modelClassId = modelClassId;
    }

    public List<Score> getScoreList() {
        return scoreList;
    }

    public void setScoreList(List<Score> scoreList) {
        this.scoreList = scoreList;
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Student> studentList) {
        this.studentList = studentList;
    }
}