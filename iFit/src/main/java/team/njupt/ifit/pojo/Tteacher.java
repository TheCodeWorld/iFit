package team.njupt.ifit.pojo;

import java.util.List;

public class Tteacher {
    private Integer id;

    private String tTeacherName;

    private String tTeacherId;

    private String tTeacherSex;

    private List<TeachClass> teachClassList;

    public Tteacher(Integer id, String tTeacherName, String tTeacherId,String tTeacherSex,List<TeachClass> teachClassList) {
        this.id = id;
        this.tTeacherName = tTeacherName;
        this.tTeacherId = tTeacherId;
        this.teachClassList = teachClassList;
        this.tTeacherSex = tTeacherSex;
    }

    public Tteacher() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String gettTeacherName() {
        return tTeacherName;
    }

    public void settTeacherName(String tTeacherName) {
        this.tTeacherName = tTeacherName == null ? null : tTeacherName.trim();
    }

    public String gettTeacherId() {
        return tTeacherId;
    }

    public void settTeacherId(String tTeacherId) {
        this.tTeacherId = tTeacherId == null ? null : tTeacherId.trim();
    }

    public String gettTeacherSex() {
        return tTeacherSex;
    }

    public void settTeacherSex(String tTeacherSex) {
        this.tTeacherSex = tTeacherSex;
    }

    public List<TeachClass> getTeachClassList() {
        return teachClassList;
    }

    public void setTeachClassList(List<TeachClass> teachClassList) {
        this.teachClassList = teachClassList;
    }
}