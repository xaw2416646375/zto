package com.yidu.zto.service.impl;

import com.yidu.zto.dao.AddressMapper;
import com.yidu.zto.dao.OrderAddressMapper;
import com.yidu.zto.dao.OrderMapper;
import com.yidu.zto.dao.ParcelMapper;
import com.yidu.zto.entity.*;
import com.yidu.zto.service.OrderService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * (Order)表服务实现类
 *
 * @author makejava
 * @since 2021-04-23 14:59:47
 */
@Service("orderService")
public class OrderServiceImpl implements OrderService {
    @Resource
    private OrderMapper orderMapper;
    @Resource
    private OrderAddressMapper orderAddressMapper;
    @Resource
    private ParcelMapper parcelMapper;
    @Resource
    private AddressMapper addressMapper;
    /**
     * 通过ID查询单条数据
     *
     * @param orderid 主键
     * @return 实例对象
     */
    @Override
    public QueryOrderModel queryById(Integer orderid) {
        Order order = this.orderMapper.queryById(orderid);
        //创建订单模型对象
        QueryOrderModel orderModel=new QueryOrderModel();
        //设置订单id
        orderModel.setOrderId(order.getOrderid());
        //设置运单号
        orderModel.setWaybillNumber(order.getExpressnumber());
        //设置下单时间
        orderModel.setCreateDate(order.getCreatedate());
        //设置订单号
        orderModel.setOrderNumber(order.getOrdernumber());
        //设置状态
        orderModel.setOrderState(order.getOrderstate());
        //调用查询寄件地址的方法
        OrderAddress jiAddress = this.orderAddressMapper.queryById(order.getSendAddressid());
        //设置寄件地址对象
        orderModel.setJiAddress(jiAddress);
        //调用查询收件地址的方法
        OrderAddress shouAddress = this.orderAddressMapper.queryById(order.getReceiceAddressid());
        //设置收件地址对象
        orderModel.setShouAddress(shouAddress);
        //设置快递员名字
        orderModel.setCourierName("");
        //设置快递员电话号码
        orderModel.setCourierName("");


        return orderModel;
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Order> queryAllByLimit(int offset, int limit) {
        return this.orderMapper.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param order 实例对象
     * @return 实例对象
     */
    @Override
    public Order insert(Order order) {
        this.orderMapper.insert(order);
        return order;
    }

    /**
     * 修改数据
     *
     * @param order 实例对象
     * @return 实例对象
     */
    @Override
    public Order update(Order order) {
        this.orderMapper.update(order);
        return this.orderMapper.queryById(order.getOrderid());
    }

    /**
     * 通过主键删除数据
     *
     * @param orderid 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer orderid) {
        return this.orderMapper.deleteById(orderid) > 0;
    }

    /**
     * 根据条数查出订单
     *
     * @param customerId 客户id
     * @param size 数据条数
     * @return 是否成功
     */
    @Override
    public List<Order> queryAllById(int customerId, int size) {
        return this.orderMapper.queryAllById(customerId,size);
    }

    /**
     * 查询寄件订单
     *
     * @param queryOrderField 实例对象
     * @return 对象列表
     */
    @Override
    public List<QueryOrderModel> queryAllBySendOrderModel(QueryOrderField queryOrderField) {
        //如果开始时间未定义或者等于""赋值为null
        if (queryOrderField.getCreateDate().equals("undefined")||queryOrderField.getCreateDate().equals("")){
            queryOrderField.setCreateDate(null);
        }
        //如果结束时间未定义或者等于""赋值为null
        if (queryOrderField.getCreateDateTwo().equals("undefined")||queryOrderField.getCreateDateTwo().equals("")){
            queryOrderField.setCreateDateTwo(null);
        }
        //如果寄件号码或者名字未定义赋值为null
        if (queryOrderField.getSendName().equals("undefined")){
            queryOrderField.setSendName(null);
        }
        queryOrderField.setCustomerId(1);
        queryOrderField.setPhone("15874685845");
        //调用查询订单的方法
        List<Order> orderList=this.orderMapper.queryAllBySend(queryOrderField);
        //创建订单模型集合
        List<QueryOrderModel> orderModelList=new ArrayList<>();
        //循环取出订单信息
        for (Order order : orderList) {
            //创建订单模型对象
            QueryOrderModel orderModel=new QueryOrderModel();
            //设置订单id
            orderModel.setOrderId(order.getOrderid());
            //设置运单号
            orderModel.setWaybillNumber(order.getExpressnumber());
            //设置下单时间
            orderModel.setCreateDate(order.getCreatedate());
            //设置订单号
            orderModel.setOrderNumber(order.getOrdernumber());
            //设置状态
            orderModel.setOrderState(order.getOrderstate());
            //调用查询寄件地址的方法
            OrderAddress jiAddress = this.orderAddressMapper.queryById(order.getSendAddressid());
            //设置寄件地址对象
            orderModel.setJiAddress(jiAddress);
            //调用查询收件地址的方法
            OrderAddress shouAddress = this.orderAddressMapper.queryById(order.getReceiceAddressid());
            //设置收件地址对象
            orderModel.setShouAddress(shouAddress);
            //设置快递员名字
            orderModel.setCourierName("");
            //设置快递员电话号码
            orderModel.setCourierName("");
            //添加到订单模型集合
            orderModelList.add(orderModel);
        }

        return orderModelList;
    }

    @Override
    public List<QueryOrderModel> queryAllByReceiverOrderModel(QueryOrderField queryOrderField) {
        //如果开始时间未定义或者等于""赋值为null
        if (queryOrderField.getReceiceName().equals("undefined")||queryOrderField.getReceiceName().equals("")){
            queryOrderField.setReceiceName(null);
        }
        //调用查询订单的方法
        List<Order> orderList=this.orderMapper.queryAllByReceiver(queryOrderField);
        //创建订单模型集合
        List<QueryOrderModel> orderModelList=new ArrayList<>();
        //循环取出订单信息
        for (Order order : orderList) {
            //创建订单模型对象
            QueryOrderModel orderModel=new QueryOrderModel();
            //设置订单id
            orderModel.setOrderId(order.getOrderid());
            //设置运单号
            orderModel.setWaybillNumber(order.getExpressnumber());
            //设置下单时间
            orderModel.setCreateDate(order.getCreatedate());
            //设置订单号
            orderModel.setOrderNumber(order.getOrdernumber());
            //设置状态
            orderModel.setOrderState(order.getOrderstate());
            //调用查询寄件地址的方法
            OrderAddress jiAddress = this.orderAddressMapper.queryById(order.getSendAddressid());
            //设置寄件地址对象
            orderModel.setJiAddress(jiAddress);
            //调用查询收件地址的方法
            OrderAddress shouAddress = this.orderAddressMapper.queryById(order.getReceiceAddressid());
            //设置收件地址对象
            orderModel.setShouAddress(shouAddress);
            //设置快递员名字
            orderModel.setCourierName("");
            //设置快递员电话号码
            orderModel.setCourierName("");
            //添加到订单模型集合
            orderModelList.add(orderModel);
        }

        return orderModelList;
    }


}
