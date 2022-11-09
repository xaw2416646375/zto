package com.yidu.zto.dao;

import com.yidu.zto.entity.Logisticstracking;
import com.yidu.zto.vo.LogisticstrackingModel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Logisticstracking)表数据库访问层
 *
 * @author makejava
 * @since 2021-05-24 20:16:08
 */
@Mapper
public interface LogisticstrackingMapper {

    /**
     * 查询指定行数据
     *
     * @param expressNumber  快递单号
     * @return 对象列表
     */
    List<LogisticstrackingModel> queryAllByExpressNumber(String expressNumber);

    /**
     * 查询指定行数据
     *
     * @param expressNumber  快递单号
     * @return 对象
     */
    Logisticstracking queryByExpressNumber(String expressNumber);

}

