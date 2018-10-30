package team.njupt.ifit.pojo;

public class Fteacher {
    private Integer id;

    private String fTeacherName;

    private String fTeacherId;

    public Fteacher(Integer id, String fTeacherName, String fTeacherId) {
        this.id = id;
        this.fTeacherName = fTeacherName;
        this.fTeacherId = fTeacherId;
    }

    public Fteacher() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getfTeacherName() {
        return fTeacherName;
    }

    public void setfTeacherName(String fTeacherName) {
        this.fTeacherName = fTeacherName == null ? null : fTeacherName.trim();
    }

    public String getfTeacherId() {
        return fTeacherId;
    }

    public void setfTeacherId(String fTeacherId) {
        this.fTeacherId = fTeacherId == null ? null : fTeacherId.trim();
    }
}