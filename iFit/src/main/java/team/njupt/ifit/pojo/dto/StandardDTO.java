package team.njupt.ifit.pojo.dto;

/**
 * Created by lihang on 2017/9/26.
 */
public class StandardDTO {
    private Integer id;
    private String modelStandardName;
    private Integer weight;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getModelStandardName() {
        return modelStandardName;
    }

    public void setModelStandardName(String modelStandardName) {
        this.modelStandardName = modelStandardName;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "StandardDTO{" +
                "id=" + id +
                ", modelStandardName='" + modelStandardName + '\'' +
                ", weight=" + weight +
                '}';
    }
}
