package com.yidu.zto.service;

import com.yidu.zto.entity.Address;

import java.util.List;

/**
 * (Address)表服务接口
 *
 * @author makejava
 * @since 2021-04-21 10:51:33
 */
public interface AddressService {
    List<Address> namephone(Integer customerId, String name, String phone);

    int update_1(Address address);

    List<Address> queryByCid(Integer customerId);
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
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    List<Address> queryAllByLimit(int offset, int limit);

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
    int update(Address address);

    /**
     * 通过主键删除数据
     *
     * @param addressId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer addressId);

}