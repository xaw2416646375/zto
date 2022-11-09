package com.yidu.zto.dao;

import com.yidu.zto.entity.Branch;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Branch)表数据库访问层
 *
 * @author makejava
 * @since 2021-05-10 10:18:29
 */
@Mapper
public interface JfgBranchMapper {

    /**
     * 通过ID查询单条数据
     *
     * @param branchId 主键
     * @return 实例对象
     */
    Branch queryById(Integer branchId);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Branch> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param branch 实例对象
     * @return 对象列表
     */
    List<Branch> queryAll(Branch branch);

    /**
     * 新增数据
     *
     * @param branch 实例对象
     * @return 影响行数
     */
    int insert(Branch branch);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Branch> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Branch> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Branch> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Branch> entities);

    /**
     * 修改数据
     *
     * @param branch 实例对象
     * @return 影响行数
     */
    int update(Branch branch);

    /**
     * 通过主键删除数据
     *
     * @param branchId 主键
     * @return 影响行数
     */
    int deleteById(Integer branchId);

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

