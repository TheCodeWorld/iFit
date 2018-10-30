package team.njupt.ifit.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import team.njupt.ifit.annotation.Admin;
import team.njupt.ifit.annotation.Login;
import team.njupt.ifit.annotation.TTeacher;
import team.njupt.ifit.common.ServerResponse;
import team.njupt.ifit.common.constant.UserRoleConstant;
import team.njupt.ifit.pojo.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.lang.annotation.Annotation;
import java.lang.reflect.Method;

/**
 * @author lihang
 * @date 2017/12/16.
 * @description 使用aop实现登陆/鉴权
 */
@Aspect
@Component
public class AuthHandle {

    private static final String NEED_LOGIN = "请先登录";
    private static final String TEACHER_AND_ADMIN = "只有教师或管理员有权操作！";
    private static final String NEED_ADMIN = "只有管理员有权操作！";

    @Pointcut(value = "execution(public * team.njupt.ifit.controller..*.*(..))")
    public void start(){
    }

    @Around("start()")
    public ServerResponse access(ProceedingJoinPoint joinPoint){
        User user = getUser();
        MethodSignature joinPointObject = (MethodSignature) joinPoint.getSignature();
        Method method = joinPointObject.getMethod();
        if (hasAnnotationOnMethod(method,Login.class)){
            if (user == null){
                return ServerResponse.createByErrorMessage(NEED_LOGIN);
            }
        }
        if (hasAnnotationOnMethod(method,TTeacher.class)){
            if (!(user.getRole() == UserRoleConstant.TTEACHER||user.getRole() == UserRoleConstant.ADMIN)){
                return ServerResponse.createByErrorMessage(TEACHER_AND_ADMIN);
            }
        }
        if (hasAnnotationOnMethod(method,Admin.class)){
            if (user.getRole() != UserRoleConstant.ADMIN){
                return ServerResponse.createByErrorMessage(NEED_ADMIN);
            }
        }
        Object o = null;
        try {
            o = joinPoint.proceed();
        } catch (Throwable throwable) {
            throwable.printStackTrace();
        }
        return (ServerResponse) o;
    }

    /**
     * 从session中获取当前用户
     * @return
     */
    private User getUser(){
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) requestAttributes;
        HttpServletRequest request = servletRequestAttributes.getRequest();
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute("user");
        return user;
    }

    /**
     * 判断某方法上是否含有某注解
     * @param method
     * @param annotationClazz
     * @return boolean
     */
    private boolean hasAnnotationOnMethod(Method method,Class annotationClazz){
        Annotation a = method.getAnnotation(annotationClazz);
        if (a == null){
            return false;
        }
        return true;
    }

}
