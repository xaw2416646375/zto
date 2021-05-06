package com.yidu.zto.controller;

import com.yidu.zto.entity.Customer;
import com.yidu.zto.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:
 * @data 2021/4/28 23:40
 */
@Controller
public class LKCustomerController {
    @Autowired
    CustomerService customerService;

    /*李楷代码*/
    /**
     * 通过主键查询单条数据
     *
     * @param
     * @return 单条数据
     */
    @ResponseBody
    @RequestMapping("update_user")
    public Customer update_user(Customer customer, HttpServletRequest request) throws ParseException {
        Customer customer1=customerService.update(customer);
        return customer1;
    }

    @ResponseBody
    @RequestMapping("selectOne")
    public Customer selectOne(int customerid,HttpServletRequest request) {
        Customer customer=customerService.queryById(customerid);
        request.getSession().setAttribute("cid",customer.getCustomerId());
        return customer;
    }
    @ResponseBody
    @RequestMapping("select01")
    public ModelAndView select(HttpSession session, HttpServletRequest request) {
        Customer customers = (Customer) session.getAttribute("customer");
        ModelAndView modelAndView = new ModelAndView();
        Customer customer=customerService.queryById(customers.getCustomerId());
        request.getSession().setAttribute("cid_01",customer.getCustomerId());
        modelAndView.setViewName("geRenZiLiao");
        modelAndView.addObject("customerid_01",customer.getCustomerId());
        modelAndView.addObject("nickname",customer.getNickName());
        modelAndView.addObject("truename",customer.getTrueName());
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if(null!=customers.getBirthday()){
            String dateString = formatter.format(customer.getBirthday());
            String [] brithday = dateString.split(" ");
            modelAndView.addObject("brithday",brithday[0]);
        }
        if(null!=customers.getAddress()){
            String [] address = customer.getAddress().split(";");
            modelAndView.addObject("address",address[0]);
            modelAndView.addObject("baddress",address[1]);
        }
        if (customer.getPhoto() != null){
            modelAndView.addObject("photo",customer.getPhoto());
        }
        return modelAndView;
    }
}
