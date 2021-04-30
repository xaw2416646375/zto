package com.yidu.zto.service.impl;

import com.yidu.zto.entity.Parcel;
import com.yidu.zto.dao.ParcelMapper;
import com.yidu.zto.service.ParcelService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Parcel)表服务实现类
 *
 * @author makejava
 * @since 2021-04-21 09:51:58
 */
@Service("parcelService")
public class ParcelServiceImpl implements ParcelService {
    @Resource
    private ParcelMapper parcelMapper;

    /**
     * 通过ID查询单条数据
     *
     * @param parcelId 主键
     * @return 实例对象
     */
    @Override
    public Parcel queryById(Integer parcelId) {
        return this.parcelMapper.queryById(parcelId);
    }

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    @Override
    public List<Parcel> queryAllByLimit(int offset, int limit) {
        return this.parcelMapper.queryAllByLimit(offset, limit);
    }

    /**
     * 新增数据
     *
     * @param parcel 实例对象
     * @return 实例对象
     */
    @Override
    public Parcel insert(Parcel parcel) {
        this.parcelMapper.insert(parcel);
        return parcel;
    }

    /**
     * 修改数据
     *
     * @param parcel 实例对象
     * @return 实例对象
     */
    @Override
    public Parcel update(Parcel parcel) {
        this.parcelMapper.update(parcel);
        return this.queryById(parcel.getParcelId());
    }

    /**
     * 通过主键删除数据
     *
     * @param parcelId 主键
     * @return 是否成功
     */
    @Override
    public boolean deleteById(Integer parcelId) {
        return this.parcelMapper.deleteById(parcelId) > 0;
    }
}
