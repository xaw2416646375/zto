package com.yidu.zto.service;

import com.yidu.zto.entity.Address;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Address)表服务接口
 *
 * @author makejava
 * @since 2021-04-20 21:52:49
 */
public interface AddressService {

    /**
     * 通过ID查询单条数据
     *
     * @param addressId 主键
     * @return 实例对象
     */
    Address queryById(Integer addressId);

    /**
     * 查询多条数据
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
     * @return 实例对象
     */
    Address insert(Address address);

    /**
     * 修改数据
     *
     * @param address 实例对象
     * @return 实例对象
     */
    Address update(Address address);

    /**
     * 通过主键删除数据
     *
     * @param addressId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer addressId);
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
}
