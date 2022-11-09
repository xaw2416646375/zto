package com.yidu.zto.controller;

import com.yidu.zto.entity.Address;
import com.yidu.zto.entity.Customer;
import com.yidu.zto.service.JfgAddressService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * (Address)表控制层
 *
 * @author makejava
 * @since 2021-04-20 22:12:40
 */
@Controller
@RequestMapping("jfg/address")
public class JfgAddressController {
    /**
     * 服务对象
     */
    @Resource
    private JfgAddressService addressServices;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    @ResponseBody
    public Address selectOne(Integer id) {
        return this.addressServices.queryById(id);
    }


    @RequestMapping("selectAddressAll")
    @ResponseBody
    public List<Address> selectAddressAll(HttpServletRequest request, HttpSession session) {
        Customer customer = (Customer) session.getAttribute("customer");
        List<Address> addresses = this.addressServices.queryAllByLimit(customer.getCustomerId());
        return addresses;
    }

    @RequestMapping("updateDefault")
    @ResponseBody
    public String updateDefault(Integer addressId,HttpSession session){
        //System.currentTimeMillis();
        Customer customer = (Customer) session.getAttribute("customer");
        this.addressServices.updateDefaultTow(customer.getCustomerId());
        this.addressServices.updateDefault(addressId,customer.getCustomerId());
        return "设置成功";
    }


}
