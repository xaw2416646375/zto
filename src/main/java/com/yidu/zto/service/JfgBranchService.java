package com.yidu.zto.service;

import com.yidu.zto.entity.Branch;

import java.util.List;

/**
 * (Branch)表服务接口
 *
 * @author makejava
 * @since 2021-05-10 10:18:29
 */
public interface JfgBranchService {

    /**
     * 通过ID查询单条数据
     *
     * @param branchId 主键
     * @return 实例对象
     */
    Branch queryById(Integer branchId);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Branch> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param branch 实例对象
     * @return 实例对象
     */
    Branch insert(Branch branch);

    /**
     * 修改数据
     *
     * @param branch 实例对象
     * @return 实例对象
     */
    Branch update(Branch branch);

    /**
     * 通过主键删除数据
     *
     * @param branchId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer branchId);

    /**
     * 查询出区上的市
     *
     * @param district 区
     * @return 网点对象
     */
    Branch queryCity(String district);

    /**
     * 查询区级Id
     *
     * @param district 区
     * @param city 市
     * @return 网点对象
     */
    Branch queryCityId(String district,String city);
}
