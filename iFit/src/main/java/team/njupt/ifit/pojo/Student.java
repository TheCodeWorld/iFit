package team.njupt.ifit.pojo;

public class Student {
    private Integer id;

    private String studentId;

    private String studentName;

    private String studentSex;

    private String studentCollege;

    public Student(Integer id, String studentId, String studentName, String studentSex, String studentCollege) {
        this.id = id;
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentSex = studentSex;
        this.studentCollege = studentCollege;
    }

    public Student() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId == null ? null : studentId.trim();
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName == null ? null : studentName.trim();
    }

    public String getStudentSex() {
        return studentSex;
    }

    public void setStudentSex(String studentSex) {
        this.studentSex = studentSex == null ? null : studentSex.trim();
    }

    public String getStudentCollege() {
        return studentCollege;
    }

    public void setStudentCollege(String studentCollege) {
        this.studentCollege = studentCollege == null ? null : studentCollege.trim();
    }
}