package team.njupt.ifit.annotation;

import java.lang.annotation.*;

/**
 * @author lihang
 * @date 2017/12/16.
 * @description
 */
// 本注解只能用在方法上
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Login {
}
