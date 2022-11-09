package com.yidu.zto.service;

import com.yidu.zto.entity.Parcel;

import java.util.List;

/**
 * (Parcel)表服务接口
 *
 * @author makejava
 * @since 2021-04-21 09:51:58
 */
public interface JfgParcelService {

    /**
     * 通过ID查询单条数据
     *
     * @param parcelId 主键
     * @return 实例对象
     */
    Parcel queryById(Integer parcelId);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Parcel> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param parcel 实例对象
     * @return 实例对象
     */
    Parcel insert(Parcel parcel);

    /**
     * 修改数据
     *
     * @param parcel 实例对象
     * @return 实例对象
     */
    Parcel update(Parcel parcel);

    /**
     * 通过主键删除数据
     *
     * @param parcelId 主键
     * @return 是否成功
     */
    boolean deleteById(Integer parcelId);

}
