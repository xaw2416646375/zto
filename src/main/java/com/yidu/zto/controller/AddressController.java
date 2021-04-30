package com.yidu.zto.controller;

import com.yidu.zto.entity.Address;
import com.yidu.zto.service.AddressService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * (Address)表控制层
 *
 * @author makejava
 * @since 2021-04-20 22:12:40
 */
@Controller
@RequestMapping("address")
public class AddressController {
    /**
     * 服务对象
     */
    @Resource
    private AddressService addressService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    @ResponseBody
    public Address selectOne(Integer id) {
        return this.addressService.queryById(id);
    }


    @RequestMapping("selectAddressAll")
    @ResponseBody
    public List<Address> selectAddressAll( HttpServletRequest request){
        List<Address> addresses = this.addressService.queryAllByLimit(1);
        //Integer count = this.addressService.queryAllCount(1);
        //request.getSession().setAttribute("addressList",addresses);
        //request.getSession().setAttribute("addressListCount",count);
        return addresses;
    }

    @RequestMapping("updateDefault")
    @ResponseBody
    public String updateDefault(Integer addressId){
        //System.currentTimeMillis();
        this.addressService.updateDefaultTow(1);
        this.addressService.updateDefault(addressId,1);
        return "设置成功";
    }


}
