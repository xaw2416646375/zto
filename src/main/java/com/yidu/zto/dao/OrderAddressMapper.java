package com.yidu.zto.dao;

import com.yidu.zto.entity.Order;
import com.yidu.zto.entity.OrderAddress;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (OrderAddress)表数据库访问层
 *
 * @author makejava
 * @since 2021-04-20 22:27:15
 */
@Mapper
public interface OrderAddressMapper {

    /**
     * 通过ID查询单条数据
     *
     * @param orderAddressId 主键
     * @return 实例对象
     */
    OrderAddress queryById(Integer orderAddressId);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<OrderAddress> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param orderAddress 实例对象
     * @return 对象列表
     */
    List<OrderAddress> queryAll(OrderAddress orderAddress);

    /**
     * 新增数据
     *
     * @param orderAddress 实例对象
     * @return 影响行数
     */
    int insert(OrderAddress orderAddress);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<OrderAddress> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<OrderAddress> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<OrderAddress> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<OrderAddress> entities);

    /**
     * 修改数据
     *
     * @param orderAddress 实例对象
     * @return 影响行数
     */
    int update(OrderAddress orderAddress);

    /**
     * 通过主键删除数据
     *
     * @param orderAddressId 主键
     * @return 影响行数
     */
    int deleteById(Integer orderAddressId);
    /**
     * 查询单条数据
     *
     * @param orderAddress 实例对象
     * @return 实例对象
     */
    OrderAddress queryByEx(OrderAddress orderAddress);

    /**
     * 查询指定行数据
     *
     * @param customerId 客户id
     * @param size  查询1条数
     * @return 实例对象
     */
    OrderAddress queryAllById(int customerId, int size);
}

