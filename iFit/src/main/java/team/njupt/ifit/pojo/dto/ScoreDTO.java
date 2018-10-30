package team.njupt.ifit.pojo.dto;

/**
 * @author lihang
 * @date 2017/12/1.
 * @description
 */
public class ScoreDTO {
    private Integer classId;

    private String studentId;

    private String studentName;

    private String jsonScore;

    private String year;

    private Double sumScore;

    private String grade;

    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getJsonScore() {
        return jsonScore;
    }

    public void setJsonScore(String jsonScore) {
        this.jsonScore = jsonScore;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Double getSumScore() {
        return sumScore;
    }

    public void setSumScore(Double sumScore) {
        this.sumScore = sumScore;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "ScoreDTO{" +
                "classId=" + classId +
                ", studentId='" + studentId + '\'' +
                ", studentName='" + studentName + '\'' +
                ", jsonScore='" + jsonScore + '\'' +
                ", year='" + year + '\'' +
                ", sumScore=" + sumScore +
                ", grade='" + grade + '\'' +
                '}';
    }
}
