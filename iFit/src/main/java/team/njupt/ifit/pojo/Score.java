package team.njupt.ifit.pojo;

public class Score {
    private Integer id;

    private String studentId;

    private String studentName;

    private String jsonScore;

    private String year;

    private Double sumScore;

    public Score(Integer id, String studentId,String studentName, String jsonScore,String year, Double sumScore) {
        this.id = id;
        this.studentId = studentId;
        this.jsonScore = jsonScore;
        this.studentName = studentName;
        this.year = year;
        this.sumScore = sumScore;
    }

    public Score() {
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
        this.studentId = studentId;
    }

    public String getJsonScore() {
        return jsonScore;
    }

    public void setJsonScore(String jsonScore) {
        this.jsonScore = jsonScore == null ? null : jsonScore.trim();
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year == null ? null : year.trim();
    }

    public Double getSumScore() {
        return sumScore;
    }

    public void setSumScore(Double sumScore) {
        this.sumScore = sumScore;
    }
}