package com.yidu.zto.service.impl;

import com.yidu.zto.dao.JfgAddressMapper;
import com.yidu.zto.dao.JfgOrderAddressMapper;
import com.yidu.zto.dao.JfgOrderMapper;
import com.yidu.zto.dao.JfgParcelMapper;
import com.yidu.zto.entity.*;
import com.yidu.zto.service.JfgOrderService;
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
@Service
public class JfgOrderServiceImpl implements JfgOrderService {
    @Resource
    private JfgOrderMapper jfgOrderMapper;
    @Resource
    private JfgOrderAddressMapper jfgOrderAddressMapper;
    @Resource
    private JfgParcelMapper jfgParcelMapper;
    @Resource
    private JfgAddressMapper jfgAddressMapper;
    /**
     * 通过ID查询单条数据
     *
     * @param orderid 主键
     * @return 实例对象
     */
    @Override
    public QueryOrderModel queryById(Integer orderid) {
        Order order = this.jfgOrderMapper.queryById(orderid);
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
        OrderAddress jiAddress = this.jfgOrderAddressMapper.queryById(order.getSendAddressid());
        //设置寄件地址对象
        orderModel.setJiAddress(jiAddress);
        //调用查询收件地址的方法
        OrderAddress shouAddress = this.jfgOrderAddressMapper.queryById(order.getReceiceAddressid());
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
        return this.jfgOrderMapper.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param order 实例对象
     * @return 实例对象
     */
    @Override
    public Order insert(Order order) {
        this.jfgOrderMapper.insert(order);
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
        this.jfgOrderMapper.update(order);
        return this.jfgOrderMapper.queryById(order.getOrderid());
    }

    /**
     * 通过主键删除数据
     *
     * @param orderid 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer orderid) {
        return this.jfgOrderMapper.deleteById(orderid) > 0;
    }

    /**
     * 根据条数查出订单
     *
     * @param customerId 客户id
     * @param size 数据条数
     * @return 是否成功
     */
    @Override
    public Order queryAllById(int customerId, int size) {
        return this.jfgOrderMapper.queryAllById(customerId);
    }

    /**
     * 查询寄件订单
     *
     * @param queryOrderField 实例对象
     * @return 对象列表
     */
    @Override
    public List<QueryOrderModel> queryAllBySendOrderModel(QueryOrderField queryOrderField, Customer customer) {
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
        queryOrderField.setCustomerId(customer.getCustomerId());
        queryOrderField.setPhone(customer.getPhone());
        //调用查询订单的方法
        List<Order> orderList=this.jfgOrderMapper.queryAllBySend(queryOrderField);
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
            OrderAddress jiAddress = this.jfgOrderAddressMapper.queryById(order.getSendAddressid());
            //设置寄件地址对象
            orderModel.setJiAddress(jiAddress);
            //调用查询收件地址的方法
            OrderAddress shouAddress = this.jfgOrderAddressMapper.queryById(order.getReceiceAddressid());
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
        List<Order> orderList=this.jfgOrderMapper.queryAllByReceiver(queryOrderField);
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
            OrderAddress jiAddress = this.jfgOrderAddressMapper.queryById(order.getSendAddressid());
            //设置寄件地址对象
            orderModel.setJiAddress(jiAddress);
            //调用查询收件地址的方法
            OrderAddress shouAddress = this.jfgOrderAddressMapper.queryById(order.getReceiceAddressid());
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
