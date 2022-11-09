package com.yidu.zto.controller;

import com.yidu.zto.dao.JfgOrderMapper;
import com.yidu.zto.dao.JfgParcelMapper;
import com.yidu.zto.entity.*;
import com.yidu.zto.service.JfgOrderAddressService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

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
     * 服务对象
     */
    @Resource
    private JfgOrderMapper jfgOrderMapper;
    /**
     * 服务对象
     */
    @Resource
    private JfgParcelMapper jfgParcelMapper;
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

    /**
     * 新增订单，地址
     * @param orderModel 订单模型对象
     * @param session 会话
     * @return 支付
     */
    @RequestMapping("insertOrderAddress")
    @ResponseBody
    public String insertOrderAddress(OrderModel orderModel, HttpSession session){
        //从会话中取到客户id
        Customer customer = (Customer) session.getAttribute("customer");
        //调用新增的方法
        int index=jfgOrderAddressService.insert(orderModel,customer.getCustomerId());

        //查出订单的消息装入集合
        Order orderOne = this.jfgOrderMapper.queryAllById(customer.getCustomerId());
        //将订单存入会话
        session.setAttribute("orderOne",orderOne);
        //调用查询包裹的方法
        Parcel parcelOne=jfgParcelMapper.queryByOrderId(orderOne.getOrderid());
        //将包裹存入会话
        session.setAttribute("parcelOne",parcelOne);
        return "aliPayDo";
    }
    @RequestMapping("insertBatchOrderAddress")
    @ResponseBody
    public String insertBatchOrderAddress(OrderModel orderModel,HttpSession session){
        Customer customer = (Customer) session.getAttribute("customer");
        jfgOrderAddressService.insertBatch(orderModel,customer.getCustomerId(),session);
       /* //查出订单的消息装入集合
        Order orderOne = this.jfgOrderMapper.queryAllById(customer.getCustomerId());
        //将订单存入会话
        session.setAttribute("orderOne",orderOne);*/
        return "aliPayDo";
    }

}
