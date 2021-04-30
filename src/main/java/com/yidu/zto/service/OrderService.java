package com.yidu.zto.service;

import com.yidu.zto.entity.Order;
import com.yidu.zto.entity.QueryOrderField;
import com.yidu.zto.entity.QueryOrderModel;

import java.util.List;

/**
 * (Order)表服务接口
 *
 * @author makejava
 * @since 2021-04-23 14:59:46
 */
public interface OrderService {

    /**
     * 通过ID查询单条数据
     *
     * @param orderid 主键
     * @return 实例对象
     */
    QueryOrderModel queryById(Integer orderid);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Order> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param order 实例对象
     * @return 实例对象
     */
    Order insert(Order order);

    /**
     * 修改数据
     *
     * @param order 实例对象
     * @return 实例对象
     */
    Order update(Order order);

    /**
     * 通过主键删除数据
     *
     * @param orderid 主键
     * @return 是否成功
     */
    boolean deleteById(Integer orderid);

    /**
     * 查询指定行数据
     *
     * @param customerId 客户id
     * @param size  查询条数
     * @return 对象列表
     */
    List<Order> queryAllById(int customerId,int size);

    /**
     * 查询出我的寄件数据
     *
     * @param queryOrderField 实例对象
     * @return 对象列表
     */
    List<QueryOrderModel> queryAllBySendOrderModel(QueryOrderField queryOrderField);
    /**
     * 查询出我的收件数据
     *
     * @param queryOrderField 实例对象
     * @return 对象列表
     */
    List<QueryOrderModel> queryAllByReceiverOrderModel(QueryOrderField queryOrderField);
}
