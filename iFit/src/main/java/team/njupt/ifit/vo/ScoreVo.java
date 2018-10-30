package team.njupt.ifit.vo;

/**
 * Created by lihang on 2017/9/22.
 */
public class ScoreVo {
    private String studentId;
    private String studentName;
    private String grade;
    private double sumSocore;

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

    public String getStudentCollege() {
        return grade;
    }

    public void setStudentCollege(String studentCollege) {
        this.grade = grade;
    }

    public double getSumSocore() {
        return sumSocore;
    }

    public void setSumSocore(double sumSocore) {
        this.sumSocore = sumSocore;
    }
}
