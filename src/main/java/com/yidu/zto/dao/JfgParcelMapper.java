package com.yidu.zto.dao;

import com.yidu.zto.entity.Parcel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Parcel)表数据库访问层
 *
 * @author makejava
 * @since 2021-04-21 09:51:58
 */
@Mapper
public interface JfgParcelMapper {

    /**
     * 通过ID查询单条数据
     *
     * @param parcelId 主键
     * @return 实例对象
     */
    Parcel queryById(Integer parcelId);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Parcel> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param parcel 实例对象
     * @return 对象列表
     */
    List<Parcel> queryAll(Parcel parcel);

    /**
     * 新增数据
     *
     * @param parcel 实例对象
     * @return 影响行数
     */
    int insert(Parcel parcel);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Parcel> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Parcel> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Parcel> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Parcel> entities);

    /**
     * 修改数据
     *
     * @param parcel 实例对象
     * @return 影响行数
     */
    int update(Parcel parcel);

    /**
     * 通过主键删除数据
     *
     * @param parcelId 主键
     * @return 影响行数
     */
    int deleteById(Integer parcelId);

}

