package team.njupt.ifit.pojo.dto;

/**
 * Created by lihang on 2017/9/26.
 */
public class TeachVoDTO {
    private String teacherName;
    private Integer teacherId;

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public Integer getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Integer teacherId) {
        this.teacherId = teacherId;
    }

    @Override
    public String toString() {
        return "TeachVoDTO{" +
                "teacherName='" + teacherName + '\'' +
                ", teacherId=" + teacherId +
                '}';
    }
}
