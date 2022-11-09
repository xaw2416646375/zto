package com.yidu.zto.service.impl;

import com.yidu.zto.dao.JfgOrderAddressMapper;
import com.yidu.zto.dao.JfgOrderMapper;
import com.yidu.zto.dao.LogisticstrackingMapper;
import com.yidu.zto.entity.*;
import com.yidu.zto.service.ConcernService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
/**
 * (Concern)表服务实现类
 *
 * @author makejava
 * @since 2021-04-21 10:51:33
 */
@Service
public class ConcernServiceImpl implements ConcernService {

    @Resource
    private JfgOrderMapper jfgOrderMapper;

    @Resource
    private JfgOrderAddressMapper jfgOrderAddressMapper;

    @Resource
    private LogisticstrackingMapper logisticstrackingMapper;

    /**
     * 查询猜你关心
     * @param httpSession 会话
     * @return 对象列表
     */
    @Override
    public List<Concern> queryConcern(HttpSession httpSession) {
        //从会话中取到客户信息
        Customer customer=(Customer)httpSession.getAttribute("customer");

        //创建关心对象集合
        List<Concern> concernList=new ArrayList<>();

        //根据客户id查出最近订单
        List<Order> orderList = jfgOrderMapper.queryByConcern(customer.getCustomerId());


        //循环出订单
        for (Order order : orderList) {

            //创建关心对象
            Concern concern=new Concern();
            //设置快递单号
            concern.setExpressNumber(order.getExpressnumber());
            //查询出收方地址
            OrderAddress orderReceiceAddress = jfgOrderAddressMapper.queryById(order.getReceiceAddressid());
            //设置收件地址对象
            concern.setShouAddress(orderReceiceAddress);
            //查询出寄方地址
            OrderAddress orderSendAddress = jfgOrderAddressMapper.queryById(order.getSendAddressid());
            //设置寄件地址对象
            concern.setJiAddress(orderSendAddress);
            //判断手机号是否一样
            if (orderReceiceAddress.getPhone().equals(customer.getPhone())){
                //设置我的收件
                concern.setSendOrShou("我收的");
            }
            //判断手机号是否一样
            if (orderSendAddress.getPhone().equals(customer.getPhone())){
                //设置我的寄件
                concern.setSendOrShou("我寄的");
            }
            //根据快递单号查出最新信息
            Logisticstracking logisticstracking = logisticstrackingMapper.queryByExpressNumber(order.getExpressnumber());
            if (logisticstracking==null){
                Logisticstracking logisticstracking1=new Logisticstracking();

                logisticstracking1.setMessage("暂无更新");
                logisticstracking.setUpdateDate(new Date());
                //设置信息
                concern.setLogisticstracking(logisticstracking1);
            }else {
                //设置信息
                concern.setLogisticstracking(logisticstracking);
            }

            //设置状态
            concern.setState(order.getOrderstate());
            //添加到关心集合
            concernList.add(concern);

        }
        return concernList;
    }
}
