package com.yidu.zto.controller;

import com.yidu.zto.entity.Customer;
import com.yidu.zto.entity.Order;
import com.yidu.zto.entity.QueryOrderField;
import com.yidu.zto.entity.QueryOrderModel;
import com.yidu.zto.service.JfgOrderService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * (Order)表控制层
 *
 * @author makejava
 * @since 2021-04-23 14:59:47
 */
@Controller
@RequestMapping("jfg/order")
public class JfgOrderController {
    /**
     * 服务对象
     */
    @Resource
    private JfgOrderService jfgOrderService;

    /**
     * 通过主键查询单条数据
     *
     * @param orderId 订单id
     * @return 单条数据
     */
    @RequestMapping("queryOrderById")
    @ResponseBody
    public QueryOrderModel queryOrderById(Integer orderId) {
        return this.jfgOrderService.queryById(orderId);
    }

    /**
     * 查询寄件订单页
     * @return 订单集合
     */
    @RequestMapping("queryOrderSendModels")
    @ResponseBody
    public List<QueryOrderModel> queryOrderSendModels(QueryOrderField queryOrderField,HttpSession session){
        Customer customer = (Customer) session.getAttribute("customer");
        List<QueryOrderModel> queryOrderModelList=this.jfgOrderService.queryAllBySendOrderModel(queryOrderField,customer);

        return queryOrderModelList;
    }

    /**
     * 查询收件订单页
     * @return 订单集合
     */
    @RequestMapping("queryOrderReceiverModels")
    @ResponseBody
    public List<QueryOrderModel> queryOrderReceiverModels(QueryOrderField queryOrderField, HttpSession session){
        Customer customer = (Customer) session.getAttribute("customer");
        queryOrderField.setCustomerId(customer.getCustomerId());
        queryOrderField.setPhone(customer.getPhone());
        List<QueryOrderModel> queryOrderModelList=this.jfgOrderService.queryAllByReceiverOrderModel(queryOrderField);
        return queryOrderModelList;
    }

    /**
     * 修改支付方式
     * @return 页面
     */
    @RequestMapping("updateOrderPay")
    public String updateOrderPay(HttpServletRequest httpServletRequest){
        //取到会话订单
        Order order=(Order)httpServletRequest.getSession().getAttribute("orderOne");
        if (null!=order) {
            System.out.println("order.getCustomerId() = " + order.getCustomerId());
            //创建订单对象
            Order order1 = new Order();
            //设置id
            order1.setOrderid(order.getOrderid());
            //设置订单支付方式
            order1.setPayWay(1);
            //调用修改的方法
            jfgOrderService.update(order1);
        }
        //取到会话订单
        List<Order> orderList=(List<Order>)httpServletRequest.getSession().getAttribute("orderLists");
        if (null!=orderList){
            for (Order orders : orderList) {
                //创建订单对象
                Order order2=new Order();
                //设置id
                order2.setOrderid(orders.getOrderid());
                //设置订单支付方式
                order2.setPayWay(1);
                //调用修改的方法
                jfgOrderService.update(order2);
            }
        }

        return "tryAgain";
    }

}
