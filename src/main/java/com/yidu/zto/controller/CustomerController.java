package com.yidu.zto.controller;

import com.yidu.zto.base.ResultInfo;
import com.yidu.zto.entity.Customer;
import com.yidu.zto.service.CustomerService;
import com.yidu.zto.utils.CookieUtil;
import com.yidu.zto.utils.ImageVerificationCodeUtils;
import com.yidu.zto.utils.verifyCodeUtils;
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
        return customer ;
    }

    /**
     * 客户登录
     * @param request 请求
     * @param customer 客户对象
     * @return 登录结果
     */
    @RequestMapping("login")
    @ResponseBody
    public ResultInfo login(HttpServletRequest request,Customer customer){
        //调用客户业务逻辑层中登录的方法
        Customer cus = customerService.login(customer);
        //new一个结果信息对象
        ResultInfo resultInfo = new ResultInfo();
        //判断客户状态是否为1 1为正常状态
        if (cus.getIsValid()==1){
            //将客户对象存入session
            request.getSession().setAttribute("customer",cus);
            //设置msg
            resultInfo.setMsg("登录成功！");
            //设置code
            resultInfo.setCode(200);
            //判断客户状态是否为2 2为冻结状态
        }else if (cus.getIsValid()==2){
            //设置msg
            resultInfo.setMsg("账号已冻结，请联系网站管理员！");
            //设置code
            resultInfo.setCode(300);
        }
        //返回结果信息对象
        return resultInfo;
    }

    /**
     * 手机号登录
     * @param request 请求对象
     * @param phone 手机号
     * @return 结果信息对象
     */
    @RequestMapping("phone_login")
    @ResponseBody
    public ResultInfo phoneLogin(HttpServletRequest request,String phone){
        //调用客户service中根据手机号验证码登录的方法
        Customer customer = customerService.phoneLogin(phone);
        //new一个结果信息对象
        ResultInfo resultInfo = new ResultInfo();
        //判断客户状态是否为1 1为正常状态
        if (customer.getIsValid()==1){
            //将客户对象存入session
            request.getSession().setAttribute("customer",customer);
            //设置msg
            resultInfo.setMsg("登录成功！");
            //设置code
            resultInfo.setCode(200);
            //判断客户状态是否为2 2为冻结状态
        }else if (customer.getIsValid()==2){
            //设置msg
            resultInfo.setMsg("账号已冻结，请联系网站管理员！");
            //设置code
            resultInfo.setCode(300);
        }
        //返回结果信息对象
        return resultInfo;
    }

    /**
     * 客户注册
     * @param customer 客户对象
     * @return 结果信息对象
     */
    @RequestMapping("register")
    @ResponseBody
    public ResultInfo register(Customer customer){
        //new一个结果信息对象
        ResultInfo  resultInfo = new ResultInfo();
        //调用客户业务逻辑层中新增的方法
        customerService.insert(customer);
        //设置msg
        resultInfo.setMsg("注册成功！");
        //设置code
        resultInfo.setCode(200);
        //返回结果信息对象
        return resultInfo;
    }

    /**
     * 得到验证码图片
     * @param request 请求对象
     * @param response 响应对象
     */
    @RequestMapping("getVerifyCodeImg")
    @ResponseBody
    public void getVerifyCodeImg(HttpServletRequest request, HttpServletResponse response) throws IOException {
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
    public String checkVerifyCode(HttpServletRequest request,  String verificationCode){
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

    /**
     * 得到手机验证码
     * @param mobile 手机号
     * @param response 响应对象
     * @return 手机验证码
     */
    @ResponseBody
    @RequestMapping("getPhoneVerifyCode")
    public int getPhoneVerifyCode(String mobile,HttpServletResponse response){
        //new一个验证码工具类
        verifyCodeUtils verifyCodeUtils = new verifyCodeUtils();
        //申明一个整型变量存放手机验证码
        int phoneVerifyCode = 0;
        try {
            //调用得到验证码的方法赋值给验证码变量
            phoneVerifyCode = verifyCodeUtils.getVerifyCode(mobile);
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        //将手机号存入cookie
        CookieUtil.setCookie("phone",mobile,"",response);
        //返回手机验证码
        return phoneVerifyCode;
    }



}
