package com.yidu.zto.service.impl;

import com.yidu.zto.entity.Logisticstracking;
import com.yidu.zto.dao.LogisticstrackingMapper;
import com.yidu.zto.service.LogisticstrackingService;
import com.yidu.zto.vo.LogisticstrackingModel;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Logisticstracking)表服务实现类
 *
 * @author makejava
 * @since 2021-05-24 20:16:09
 */
@Service
public class LogisticstrackingServiceImpl implements LogisticstrackingService {
    @Resource
    private LogisticstrackingMapper logisticstrackingMapper;

    /**
     * 查询指定行数据
     *
     * @param expressNumber  快递单号
     * @return 对象列表
     */
    @Override
    public List<LogisticstrackingModel> queryAllByExpressNumber(String expressNumber) {
        return this.logisticstrackingMapper.queryAllByExpressNumber(expressNumber);
    }
}
