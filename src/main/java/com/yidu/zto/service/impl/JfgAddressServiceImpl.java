package com.yidu.zto.service.impl;

import com.yidu.zto.dao.JfgAddressMapper;
import com.yidu.zto.entity.Address;
import com.yidu.zto.service.JfgAddressService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Address)表服务实现类
 *
 * @author makejava
 * @since 2021-04-20 21:52:53
 */
@Service
public class JfgAddressServiceImpl implements JfgAddressService {
    @Resource
        private JfgAddressMapper addressDao;

    /**
     * 通过ID查询单条数据
     *
     * @param addressId 主键
     * @return 实例对象
     */
    @Override
    public Address queryById(Integer addressId) {
        return this.addressDao.queryById(addressId);
    }

    /**
     * 查询多条数据
     *
     * @param customerId  客户id
     * @return 对象列表
     */
    @Override
    public List<Address> queryAllByLimit(Integer customerId) {
        return this.addressDao.queryAllByLimit(customerId);
    }

    /**
     * 新增数据
     *
     * @param address 实例对象
     * @return 实例对象
     */
    @Override
    public Address insert(Address address) {
        this.addressDao.insert(address);
        return address;
    }

    /**
     * 修改数据
     *
     * @param address 实例对象
     * @return 实例对象
     */
    @Override
    public Address update(Address address) {
        this.addressDao.update(address);
        return this.queryById(address.getAddressId());
    }

    /**
     * 通过主键删除数据
     *
     * @param addressId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer addressId) {
        return this.addressDao.deleteById(addressId) > 0;
    }
    /**
     * 修改数据
     *
     * @param addressId 主键
     * @param customerId 客户id
     * @return 影响行数
     */
    @Override
    public int updateDefault(Integer addressId, Integer customerId) {
        return this.addressDao.updateDefault(addressId,customerId);
    }
    /**
     * 修改数据
     * @param customerId 客户id
     * @return 影响行数
     */
    @Override
    public int updateDefaultTow(Integer customerId) {
        return this.addressDao.updateDefaultTow(customerId);
    }

    /**
     * 条件查询的总数量
     *
     * @param customerId 客户id
     * @return 影响行数
     */
    @Override
    public Integer queryAllCount(Integer customerId) {
        return this.addressDao.queryAllCount(customerId);
    }
}
