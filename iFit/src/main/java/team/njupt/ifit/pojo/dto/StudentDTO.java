package team.njupt.ifit.pojo.dto;

/**
 * Created by lihang on 2017/9/22.
 */
public class StudentDTO {
    private String studentId;

    private String studentName;

    private String studentSex;

    private String studentCollege;

    private String currentExecutiveClass;

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

    public String getStudentSex() {
        return studentSex;
    }

    public void setStudentSex(String studentSex) {
        this.studentSex = studentSex;
    }

    public String getStudentCollege() {
        return studentCollege;
    }

    public void setStudentCollege(String studentCollege) {
        this.studentCollege = studentCollege;
    }

    public String getCurrentExecutiveClass() {
        return currentExecutiveClass;
    }

    public void setCurrentExecutiveClass(String currentExecutiveClass) {
        this.currentExecutiveClass = currentExecutiveClass;
    }

    @Override
    public String toString() {
        return "StudentDTO{" +
                "studentId='" + studentId + '\'' +
                ", studentName='" + studentName + '\'' +
                ", studentSex='" + studentSex + '\'' +
                ", studentCollege='" + studentCollege + '\'' +
                ", currentExecutiveClass='" + currentExecutiveClass + '\'' +
                '}';
    }
}
