package team.njupt.ifit.pojo.dto;

/**
 * Created by lihang on 2017/9/22.
 */
public class TeachClassDTO {
    private String teacherClassId;
    private String className;
    private String schoolYear;
    private Integer classTeacherId;
    private Integer modelClassId;
    private String standard;

    public String getTeacherClassId() {
        return teacherClassId;
    }

    public void setTeacherClassId(String teacherClassId) {
        this.teacherClassId = teacherClassId;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Integer getClassTeacherId() {
        return classTeacherId;
    }

    public void setClassTeacherId(Integer classTeacherId) {
        this.classTeacherId = classTeacherId;
    }

    public Integer getModelClassId() {
        return modelClassId;
    }

    public void setModelClassId(Integer modelClassId) {
        this.modelClassId = modelClassId;
    }

    public String getStandard() {
        return standard;
    }

    public void setStandard(String standard) {
        this.standard = standard;
    }

    @Override
    public String toString() {
        return "TeachClassDTO{" +
                "teacherClassId='" + teacherClassId + '\'' +
                ", className='" + className + '\'' +
                ", schoolYear='" + schoolYear + '\'' +
                ", classTeacherId=" + classTeacherId +
                ", modelClassId=" + modelClassId +
                ", standard='" + standard + '\'' +
                '}';
    }
}
