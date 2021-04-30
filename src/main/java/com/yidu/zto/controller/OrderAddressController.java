package com.yidu.zto.controller;

import com.yidu.zto.entity.OrderAddress;
import com.yidu.zto.entity.OrderModel;
import com.yidu.zto.service.OrderAddressService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * (OrderAddress)表控制层
 *
 * @author makejava
 * @since 2021-04-20 22:27:16
 */
@Controller
@RequestMapping("orderAddress")
public class OrderAddressController {
    /**
     * 服务对象
     */
    @Resource
    private OrderAddressService orderAddressService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public OrderAddress selectOne(Integer id) {
        return this.orderAddressService.queryById(id);
    }

    @RequestMapping("insertOrderAddress")
    @ResponseBody
    public String insertOrderAddress(OrderModel orderModel){
        orderAddressService.insert(orderModel);
        return "oks";
    }


}
