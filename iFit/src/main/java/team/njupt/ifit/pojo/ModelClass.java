package team.njupt.ifit.pojo;

public class ModelClass {
    private Integer id;

    private String modelName;

    public ModelClass(Integer id, String modelName) {
        this.id = id;
        this.modelName = modelName;
    }

    public ModelClass() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModelName() {
        return modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName == null ? null : modelName.trim();
    }
}