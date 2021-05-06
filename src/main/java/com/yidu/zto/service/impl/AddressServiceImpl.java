package com.yidu.zto.service.impl;

import com.yidu.zto.dao.AddressMapper;
import com.yidu.zto.entity.Address;
import com.yidu.zto.service.AddressService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Address)表服务实现类
 *
 * @author makejava
 * @since 2021-04-21 10:51:33
 */
@Service("addressService")
public class AddressServiceImpl implements AddressService {
    @Resource
    private AddressMapper addressMapper;


    @Override
    public List<Address> namephone(Integer customerId, String name, String phone) {
        return this.addressMapper.namephone(customerId,name,phone);
    }

    @Override
    public int update_1(Address address) {
        return this.addressMapper.update_1(address);
    }

    @Override
    public List<Address> queryByCid(Integer customerId) {
        return this.addressMapper.queryByCid(customerId);
    }

    /**
     * 通过ID查询单条数据
     *
     * @param addressId 主键
     * @return 实例对象
     */
    @Override
    public Address queryById(Integer addressId) {
        return this.addressMapper.queryById(addressId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    @Override
    public List<Address> queryAllByLimit(int offset, int limit) {
        return this.addressMapper.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param address 实例对象
     * @return 实例对象
     */
    @Override
    public Address insert(Address address) {
        this.addressMapper.insert(address);
        return address;
    }

    /**
     * 修改数据
     *
     * @param address 实例对象
     * @return 实例对象
     */
    @Override
    public int  update(Address address) {
        return this.addressMapper.update(address);
    }

    /**
     * 通过主键删除数据
     *
     * @param addressId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer addressId) {
        return this.addressMapper.deleteById(addressId) > 0;
    }
}