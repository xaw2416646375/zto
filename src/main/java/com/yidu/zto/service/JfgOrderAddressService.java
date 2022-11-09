package com.yidu.zto.service;

import com.yidu.zto.entity.OrderAddress;
import com.yidu.zto.entity.OrderModel;

import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * (OrderAddress)表服务接口
 *
 * @author makejava
 * @since 2021-04-20 22:27:16
 */
public interface JfgOrderAddressService {

    /**
     * 通过ID查询单条数据
     *
     * @param orderAddressId 主键
     * @return 实例对象
     */
    OrderAddress queryById(Integer orderAddressId);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<OrderAddress> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param orderModel 实例对象
     * @return 实例对象
     */
    int insert(OrderModel orderModel,Integer customerId);

    /**
     * 批量新增数据
     *
     * @param orderModel 实例对象
     * @return 实例对象
     */
    int insertBatch (OrderModel orderModel, Integer customerId, HttpSession session);

    /**
     * 修改数据
     *
     * @param orderAddress 实例对象
     * @return 实例对象
     */
    OrderAddress update(OrderAddress orderAddress);

    /**
     * 通过主键删除数据
     *
     * @param orderAddressId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer orderAddressId);
}
