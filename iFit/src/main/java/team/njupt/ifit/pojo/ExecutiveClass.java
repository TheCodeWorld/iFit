package team.njupt.ifit.pojo;

import java.util.List;

public class ExecutiveClass {
    private Integer id;

    private String className;

    private Integer fTeacherId;

    private List<Student> studentList;

    public ExecutiveClass(Integer id, String className, Integer fTeacherId,List<Student> studentList) {
        this.id = id;
        this.className = className;
        this.fTeacherId = fTeacherId;
        this.studentList = studentList;
    }

    public ExecutiveClass() {
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

    public Integer getfTeacherId() {
        return fTeacherId;
    }

    public void setfTeacherId(Integer fTeacherId) {
        this.fTeacherId = fTeacherId;
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Student> studentList) {
        this.studentList = studentList;
    }
}