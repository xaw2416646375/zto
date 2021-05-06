package com.yidu.zto.service.impl;

import com.yidu.zto.entity.Customer;
import com.yidu.zto.dao.CustomerMapper;
import com.yidu.zto.service.CustomerService;
import com.yidu.zto.utils.AssertUtil;
import com.yidu.zto.utils.PhoneUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * (Customer)表服务实现类
 *
 * @author makejava
 * @since 2021-04-13 09:50:18
 */
@Service
public class CustomerServiceImpl implements CustomerService {
    @Resource
    private CustomerMapper customerMapper;

    @Override
    public List<HashMap<String, Object>> queryCbyId(Integer customerId) {
        return customerMapper.queryCbyId(customerId);
    }

    /**
     * 通过ID查询单条数据
     *
     * @param customerId 主键
     * @return 实例对象
     */
    @Override
    public Customer queryById(Integer customerId) {
        return this.customerMapper.queryById(customerId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Customer> queryAllByLimit(int offset, int limit) {
        return this.customerMapper.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param customer 实例对象
     * @return 实例对象
     */
    @Override
    public void insert(Customer customer) {
        //1.参数校验 跟登录的一样所以直接调用登录的
        checkLoginParams(customer.getPhone(),customer.getPassword());
        //2.校验手机号格式
        AssertUtil.isTrue(!PhoneUtil.isMobile(customer.getPhone()),"手机号格式不正确！");
        //3.判断手机号是否被使用
        AssertUtil.isTrue(null!=customerMapper.queryCustomerByPhone(customer.getPhone()),"手机号已被使用！");
        //4.默认值设置
        customer.setIsValid(1);
        customer.setCreateDate(new Date());
        AssertUtil.isTrue(customerMapper.insert(customer)<1,"注册失败！");
    }

    /**
     * 修改数据
     *
     * @param customer 实例对象
     * @return 实例对象
     */
    @Override
    public Customer update(Customer customer) {
        this.customerMapper.update(customer);
        return this.queryById(customer.getCustomerId());
    }

    @Override
    public Customer login(Customer customer) {
        // 1.参数校验 手机号 密码 非空
        checkLoginParams(customer.getPhone(),customer.getPassword());
        //2.调用根据手机号查询密码是否正确的方法
        Customer customers = customerMapper.queryCustomerByPhone(customer.getPhone());
        //校验用户是否存在
        AssertUtil.isTrue(null==customers,"账号不存在或已冻结！");
        //校验密码的正确性
        AssertUtil.isTrue(!customer.getPassword().equals(customers.getPassword()),"密码错误！");
        //密码正确返回客户对象
        return customers;
    }

    @Override
    public Customer phoneLogin(String phone) {
        //1.校验手机号非空
        AssertUtil.isTrue(StringUtils.isBlank(phone),"手机号不能为空！");
        //2.调用根据手机号查询客户对象的方法
        Customer customer = customerMapper.queryCustomerByPhone(phone);
        //校验客户是否存在
        AssertUtil.isTrue(null==customer,"账号不存在或已冻结！");
        return customer;
    }

    private void checkLoginParams(String phone, String password) {
        AssertUtil.isTrue(StringUtils.isBlank(phone),"手机号不能为空！");
        AssertUtil.isTrue(StringUtils.isBlank(password),"密码不能为空！");
    }


}
