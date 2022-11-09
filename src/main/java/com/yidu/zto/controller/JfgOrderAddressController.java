package com.yidu.zto.controller;

import com.yidu.zto.entity.OrderAddress;
import com.yidu.zto.entity.OrderModel;
import com.yidu.zto.service.JfgOrderAddressService;
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
@RequestMapping("jfg/orderAddress")
public class JfgOrderAddressController {
    /**
     * 服务对象
     */
    @Resource
    private JfgOrderAddressService jfgOrderAddressService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public OrderAddress selectOne(Integer id) {
        return this.jfgOrderAddressService.queryById(id);
    }

    @RequestMapping("insertOrderAddress")
    @ResponseBody
    public String insertOrderAddress(OrderModel orderModel){
        jfgOrderAddressService.insert(orderModel);
        return "oks";
    }
    @RequestMapping("insertBatchOrderAddress")
    @ResponseBody
    public String insertBatchOrderAddress(OrderModel orderModel){
        //System.out.println(orderModel.toString());
        jfgOrderAddressService.insertBatch(orderModel);
        return "oks";
    }

}
