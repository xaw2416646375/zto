package com.yidu.zto.config;

import com.yidu.zto.interceptor.NoLoginInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:使拦截器生效
 * @data 2021/3/27 23:14
 */
@Configuration // 配置类
public class MvcConfig extends WebMvcConfigurerAdapter {
    @Bean // 将方法的返回值交给IOC维护
    public NoLoginInterceptor noLoginInterceptor(){
        
        return new NoLoginInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //设置需要拦截的资源及放行资源
        registry.addInterceptor(noLoginInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/css/**","/picture/**", "/img/**","/images/**", "/js/**","/lib/**", "/index","/user_login");
    }
}
