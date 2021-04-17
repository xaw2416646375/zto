package com.yidu.zto.service;

import com.yidu.zto.entity.Customer;

import java.util.List;

/**
 * (Customer)表服务接口
 *
 * @author makejava
 * @since 2021-04-13 09:50:18
 */
public interface CustomerService {

    /**
     * 通过ID查询单条数据
     *
     * @param customerId 主键
     * @return 实例对象
     */
    Customer queryById(Integer customerId);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Customer> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param customer 实例对象
     * @return 实例对象
     */
    void insert(Customer customer);

    /**
     * 修改数据
     *
     * @param customer 实例对象
     * @return 实例对象
     */
    Customer update(Customer customer);

    /**
     * 登录
     * @param customer
     * @return
     */
    Customer login(Customer customer);

    /**
     * 通过手机号接收验证码登录
     * @param phone
     * @return
     */
    Customer phoneLogin(String phone);
}
