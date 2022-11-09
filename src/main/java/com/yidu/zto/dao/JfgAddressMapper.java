package com.yidu.zto.dao;

import com.yidu.zto.entity.Address;
import com.yidu.zto.entity.OrderAddress;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Address)表数据库访问层
 *
 * @author makejava
 * @since 2021-04-20 21:22:05
 */
@Mapper
public interface JfgAddressMapper {

    /**
     * 通过ID查询单条数据
     *
     * @param addressId 主键
     * @return 实例对象
     */
    Address queryById(Integer addressId);

    /**
     * 查询指定行数据
     *
     * @param customerId 客户id
     * @return 对象列表
     */
    List<Address> queryAllByLimit(Integer customerId);
    /**
     * 条件查询的总数量
     *
     * @param customerId 客户id
     * @return 影响行数
     */
    Integer queryAllCount(Integer customerId);

    /**
     * 新增数据
     *
     * @param address 实例对象
     * @return 影响行数
     */
    int insert(Address address);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Address> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Address> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Address> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Address> entities);

    /**
     * 修改数据
     *
     * @param address 实例对象
     * @return 影响行数
     */
    int update(Address address);

    /**
     * 通过主键删除数据
     *
     * @param addressId 主键
     * @return 影响行数
     */
    int deleteById(Integer addressId);


    /**
     * 修改数据
     *
     * @param addressId 主键
     * @param customerId 客户id
     * @return 影响行数
     */
    int updateDefault(Integer addressId,Integer customerId);
    /**
     * 修改数据
     * @param customerId 客户id
     * @return 影响行数
     */
    int updateDefaultTow(Integer customerId);
    /**
     * 查询单条数据
     *
     * @param address 实例对象
     * @return 实例对象
     */
    Address queryByEx(Address address);
}

