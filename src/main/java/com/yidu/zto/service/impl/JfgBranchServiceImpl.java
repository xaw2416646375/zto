package com.yidu.zto.service.impl;

import com.yidu.zto.entity.Branch;
import com.yidu.zto.dao.JfgBranchMapper;
import com.yidu.zto.service.JfgBranchService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Branch)表服务实现类
 *
 * @author makejava
 * @since 2021-05-10 10:18:29
 */
@Service
public class JfgBranchServiceImpl implements JfgBranchService {
    @Resource
    private JfgBranchMapper jfgBranchMapper;

    /**
     * 通过ID查询单条数据
     *
     * @param branchId 主键
     * @return 实例对象
     */
    @Override
    public Branch queryById(Integer branchId) {
        return this.jfgBranchMapper.queryById(branchId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Branch> queryAllByLimit(int offset, int limit) {
        return this.jfgBranchMapper.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param branch 实例对象
     * @return 实例对象
     */
    @Override
    public Branch insert(Branch branch) {
        this.jfgBranchMapper.insert(branch);
        return branch;
    }

    /**
     * 修改数据
     *
     * @param branch 实例对象
     * @return 实例对象
     */
    @Override
    public Branch update(Branch branch) {
        this.jfgBranchMapper.update(branch);
        return this.queryById(branch.getBranchId());
    }

    /**
     * 通过主键删除数据
     *
     * @param branchId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer branchId) {
        return this.jfgBranchMapper.deleteById(branchId) > 0;
    }

    @Override
    public Branch queryCity(String district) {

        return this.jfgBranchMapper.queryCity(district);
    }

    @Override
    public Branch queryCityId(String district, String city) {
        return this.jfgBranchMapper.queryCityId(district,city);
    }
}
