package team.njupt.ifit.pojo.dto;

/**
 * @author lihang
 * @date 2017/11/25.
 * @description
 */
public class BatchUpdateStudentDTO {
    private String studentId;
    private Integer classId;
    private String year;

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public Integer getClassId() {
        return classId;
    }

    public void setClassId(Integer classId) {
        this.classId = classId;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    @Override
    public String toString() {
        return "BatchUpdateStudentDTO{" +
                "studentId='" + studentId + '\'' +
                ", classId=" + classId +
                ", year='" + year + '\'' +
                '}';
    }
}
