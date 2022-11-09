package com.yidu.zto.service.impl;

import com.yidu.zto.entity.Branch;
import com.yidu.zto.dao.BranchDao;
import com.yidu.zto.entity.BranchAndUserinfo;
import com.yidu.zto.service.BranchService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Branch)表服务实现类
 *
 * @author makejava
 * @since 2021-05-10 09:06:51
 */
@Service("branchService")
public class BranchServiceImpl implements BranchService {
    @Resource
    private BranchDao branchDao;

    @Override
    public List<Branch> selectBranch() {
        return this.branchDao.selectBranch();
    }

    @Override
    public List<BranchAndUserinfo> queryselect() {
        return this.branchDao.queryselect();
    }

    /**
     * 通过ID查询单条数据
     *
     * @param branchId 主键
     * @return 实例对象
     */
    @Override
    public Branch queryById(Integer branchId) {
        return this.branchDao.queryById(branchId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit 查询条数
     * @return 对象列表
     */
    @Override
    public List<Branch> queryAllByLimit(int offset, int limit) {
        return this.branchDao.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param branch 实例对象
     * @return 实例对象
     */
    @Override
    public Branch insert(Branch branch) {
        this.branchDao.insert(branch);
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
        this.branchDao.update(branch);
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
        return this.branchDao.deleteById(branchId) > 0;
    }
}