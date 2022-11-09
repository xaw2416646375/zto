package com.yidu.zto.service;

import com.yidu.zto.dao.LogisticstrackingMapper;
import com.yidu.zto.entity.Logisticstracking;
import com.yidu.zto.vo.LogisticstrackingModel;

import java.util.List;

/**
 * (Logisticstracking)表服务接口
 *
 * @author makejava
 * @since 2021-05-24 20:16:08
 */
public interface LogisticstrackingService {

    /**
     * 查询指定行数据
     *
     * @param expressNumber  快递单号
     * @return 对象列表
     */
    List<LogisticstrackingModel> queryAllByExpressNumber(String expressNumber);

}
