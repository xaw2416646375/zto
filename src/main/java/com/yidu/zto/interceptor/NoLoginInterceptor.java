package com.yidu.zto.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:拦截器
 * @data 2021/3/27 23:01
 */
public class NoLoginInterceptor extends HandlerInterceptorAdapter {
   /* @Autowired //连续两次忘记写自动注入注解  气哭了 血的教训
    private UserService userService;*/
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        /**
         * 获取cookie 解析用户id
         *     用户id存在 并且数据库在存在对应记录 请求合法 反之 非法请求
         *//*
        int userId = LoginUserUtil.releaseUserIdFromCookie(request);
        if(userId == 0 || null == userService.queryById(userId)){
            throw new NoLoginException();
        }*/
        return super.preHandle(request, response, handler);
    }
}
