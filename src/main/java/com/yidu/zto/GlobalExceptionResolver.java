package com.yidu.zto;

import com.alibaba.fastjson.JSON;
import com.yidu.zto.base.ResultInfo;
import com.yidu.zto.exceptions.AuthException;
import com.yidu.zto.exceptions.NoLoginException;
import com.yidu.zto.exceptions.ParamsException;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:全局异常解析器
 * @data 2021/4/13 22:27
 */
@Component
public class GlobalExceptionResolver implements HandlerExceptionResolver {

    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception e) {
        /**
         * 方法返回值类型
         *      视图
         *      json
         * 如何判断方法返回的是视图还是json
         *      约定：如果方法级别配置@RequestBody 方法响应内容为json 反之为视图
         */

        /**
         * 非法请求拦截
         *  判断是否抛出未登录异常
         *      如果抛出该异常，则要求用户登录，重定向跳转到登录页面
         */
        /*if(e instanceof NoLoginException){
            // 重定向到登录页面
            ModelAndView mv = new ModelAndView("redirect:/index");
            return mv;
        }*/
        System.err.println("用户访问" + request.getRequestURI() + " 发生错误, 错误信息:" + e.getMessage());
        ModelAndView mv = new ModelAndView("error");
        mv.addObject("code",500);
        mv.addObject("msg","系统异常，请稍后再试！");



        //判断handler是否是HandlerMethod类型
        if(handler instanceof HandlerMethod){
            //如果不是则强转
            HandlerMethod hm = (HandlerMethod) handler;
            //通过反射拿到responseBody对象
            ResponseBody responseBody = hm.getMethod().getDeclaredAnnotation(ResponseBody.class);
            if(null == responseBody){
                //说明该方法响应内容为视图
                if(e instanceof ParamsException){
                    ParamsException pe = (ParamsException) e;
                    mv.addObject("msg",pe.getMsg());
                    mv.addObject("code",pe.getCode());
                }else if(e instanceof AuthException){
                    AuthException ae = (AuthException) e;
                    // 设置异常信息
                    mv.addObject("code",ae.getCode());
                    mv.addObject("msg",ae.getMsg());
                }
                return mv;
            }else{
                //说明该方法响应内容为json
                ResultInfo resultInfo = new ResultInfo();
                resultInfo.setCode(300);
                resultInfo.setMsg("系统错误，请稍后再试...");
                if(e instanceof ParamsException){
                    ParamsException pe = (ParamsException) e;
                    resultInfo.setCode(pe.getCode());
                    resultInfo.setMsg(pe.getMsg());
                }else if(e instanceof AuthException){
                    AuthException ae = (AuthException) e;
                    // 设置异常信息
                    resultInfo .setCode(ae.getCode());
                    resultInfo.setMsg(ae.getMsg());
                }
                // 设置响应类型及编码格式（响应JSON格式的数据）
                response.setContentType("application/json;charset=UTF-8");
                response.setCharacterEncoding("utf-8");
                // 得到字符输出流
                PrintWriter pw=null;
                try {
                    // 得到输出流
                    pw = response.getWriter();
                    // 将需要返回的对象转换成JOSN格式的字符 输出数据
                    pw.write(JSON.toJSONString(resultInfo));
                    pw.flush();
                } catch (IOException ioException) {
                    ioException.printStackTrace();
                }finally {
                    // 如果对象不为空，则关闭
                    if(null!=pw){
                        pw.close();
                    }
                }
            }
        }else{
            return mv;
        }
        return null;
    }
}
