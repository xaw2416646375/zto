package com.yidu.zto.controller;

import com.yidu.zto.base.ResultInfo;
import com.yidu.zto.entity.Customer;
import com.yidu.zto.service.CustomerService;
import com.yidu.zto.utils.ImageVerificationCodeUtils;
import com.yidu.zto.utils.verifyCodeUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * (Customer)表控制层
 *
 * @author makejava
 * @since 2021-04-13 09:50:20
 */
@Controller
@RequestMapping("customer")
public class CustomerController {
    /**
     * 服务对象
     */
    @Resource
    private CustomerService customerService;

    /**
     * 通过主键查询单条数据
     *
     * @param customerId 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    @ResponseBody
    public Customer selectOne(Integer customerId) {
        Customer customer = this.customerService.queryById(customerId);
        System.out.println("customer = " + customer);
        return customer ;
    }


    @RequestMapping("login")
    @ResponseBody
    public ResultInfo login(HttpServletRequest request,Customer customer){
        Customer cus = customerService.login(customer);
        //将信息存入session
        request.getSession().setAttribute("customer",cus);
        ResultInfo resultInfo = new ResultInfo();
        resultInfo.setMsg("登录成功！");
        resultInfo.setCode(200);
        return resultInfo;
    }


    @RequestMapping("phone_login")
    @ResponseBody
    public ResultInfo phoneLogin(HttpServletRequest request,String phone){
        //调用service中根据手机号验证码登录的方法
        Customer customer = customerService.phoneLogin(phone);
        //将信息存入session
        request.getSession().setAttribute("customer",customer);
        ResultInfo resultInfo = new ResultInfo();
        resultInfo.setMsg("登录成功！");
        resultInfo.setCode(200);
        return resultInfo;
    }

    @RequestMapping("register")
    @ResponseBody
    public ResultInfo register(Customer customer){
        ResultInfo  resultInfo = new ResultInfo();
        customerService.insert(customer);
        resultInfo.setMsg("注册成功！");
        resultInfo.setCode(200);
        return resultInfo;
    }

    /**
     * 得到验证码图片
     * @param request
     * @param response
     */
    @RequestMapping("getVerifyCodeImg")
    @ResponseBody
    public void getVerifyCodeImg(HttpServletRequest request, HttpServletResponse response) throws IOException {
         /*
         1.生成验证码
         2.把验证码上的文本存在session中
         3.把验证码图片发送给客户端
         */
        //用我们的验证码类，生成验证码类对象
        ImageVerificationCodeUtils ivc = new ImageVerificationCodeUtils();
        //获取验证码图片
        BufferedImage image = ivc.getImage();
        //将验证码的文本存在session中
        request.getSession().setAttribute("text", ivc.getText());
        //将验证码图片响应给客户端
        ivc.output(image, response.getOutputStream());
    }

    /**
     * 检查图片验证码是否正确
     * @return
     */
    @ResponseBody
    @RequestMapping("checkImgVerifyCode")
    public String checkVerifyCode(HttpServletRequest request, HttpServletResponse response, String verificationCode){
        try {
            //设置编码
            request.setCharacterEncoding("utf-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        //从session中获取真正的验证码
        String session_vcode=(String) request.getSession().getAttribute("text");
        //使用equalsIgnoreCase判断忽略大小写
        if(session_vcode.equalsIgnoreCase(verificationCode)){
            return "true";
        }
        return "false";
    }
    @ResponseBody
    @RequestMapping("getPhoneVerifyCode")
    public int getPhoneVerifyCode(String mobile){
        verifyCodeUtils verifyCodeUtils = new verifyCodeUtils();
        int phoneVerifyCode = 0;
        try {
            phoneVerifyCode = verifyCodeUtils.getVerifyCode(mobile);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return phoneVerifyCode;
    }

}
