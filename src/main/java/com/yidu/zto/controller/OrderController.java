package com.yidu.zto.controller;

import com.yidu.zto.entity.Order;
import com.yidu.zto.entity.QueryOrderField;
import com.yidu.zto.entity.QueryOrderModel;
import com.yidu.zto.service.OrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Order)表控制层
 *
 * @author makejava
 * @since 2021-04-23 14:59:47
 */
@Controller
@RequestMapping("order")
public class OrderController {
    /**
     * 服务对象
     */
    @Resource
    private OrderService orderService;

    /**
     * 通过主键查询单条数据
     *
     * @param orderId 订单id
     * @return 单条数据
     */
    @RequestMapping("queryOrderById")
    @ResponseBody
    public QueryOrderModel queryOrderById(Integer orderId) {
        return this.orderService.queryById(orderId);
    }

    /**
     * 查询寄件订单页
     * @return 订单集合
     */
    @RequestMapping("queryOrderSendModels")
    @ResponseBody
    public List<QueryOrderModel> queryOrderSendModels(QueryOrderField queryOrderField){

        System.out.println("queryOrderField = " + queryOrderField.toString());
        List<QueryOrderModel> queryOrderModelList=this.orderService.queryAllBySendOrderModel(queryOrderField);

        for (QueryOrderModel orderModel : queryOrderModelList) {
            System.out.println("sss:"+orderModel.toString());
        }
        return queryOrderModelList;
    }

    /**
     * 查询收件订单页
     * @return 订单集合
     */
    @RequestMapping("queryOrderReceiverModels")
    @ResponseBody
    public List<QueryOrderModel> queryOrderReceiverModels(QueryOrderField queryOrderField){
        queryOrderField.setCustomerId(1);
        queryOrderField.setPhone("15874685845");
        List<QueryOrderModel> queryOrderModelList=this.orderService.queryAllByReceiverOrderModel(queryOrderField);

        for (QueryOrderModel orderModel : queryOrderModelList) {
            System.out.println(orderModel.toString());
        }
        return queryOrderModelList;
    }

}
