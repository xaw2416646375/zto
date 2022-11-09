package com.yidu.zto.dao;

import com.yidu.zto.entity.Order;
import com.yidu.zto.entity.QueryOrderField;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Order)表数据库访问层
 *
 * @author makejava
 * @since 2021-04-21 09:04:52
 */
@Mapper
public interface JfgOrderMapper {

    /**
     * 通过ID查询单条数据
     *
     * @param orderid 主键
     * @return 实例对象
     */
    Order queryById(Integer orderid);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Order> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param order 实例对象
     * @return 对象列表
     */
    List<Order> queryAll(Order order);

    /**
     * 新增数据
     *
     * @param order 实例对象
     * @return 影响行数
     */
    int insert(Order order);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Order> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Order> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Order> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Order> entities);

    /**
     * 修改数据
     *
     * @param order 实例对象
     * @return 影响行数
     */
    int update(Order order);

    /**
     * 通过主键删除数据
     *
     * @param orderid 主键
     * @return 影响行数
     */
    int deleteById(Integer orderid);

    /**
     * 查询指定行数据
     *
     * @param customerId 客户id
     * @return 对象列表
     */
    Order queryAllById(int customerId);

    /**
     * 查询寄件订单
     *
     * @param queryOrderField 实例对象
     * @return 对象列表
     */
    List<Order> queryAllBySend(QueryOrderField queryOrderField);

    /**
     * 查询收件订单
     *
     * @param queryOrderField 实例对象
     * @return 对象列表
     */
    List<Order> queryAllByReceiver(QueryOrderField queryOrderField);
}

