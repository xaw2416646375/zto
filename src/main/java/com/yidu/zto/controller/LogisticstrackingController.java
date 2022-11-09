package com.yidu.zto.controller;

import com.yidu.zto.service.LogisticstrackingService;
import com.yidu.zto.vo.LogisticstrackingModel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;

/**
 * (Logisticstracking)表控制层
 *
 * @author makejava
 * @since 2021-05-24 20:16:09
 */
@Controller
@RequestMapping("logs")
public class LogisticstrackingController {
    /**
     * 服务对象
     */
    @Resource
    private LogisticstrackingService logisticstrackingService;

    /**
     * 通过主键查询单条数据
     *
     * @param expressNumber 快递单号
     * @return 对象集合
     */
    @RequestMapping("selectLog")
    @ResponseBody
    public List<LogisticstrackingModel> selectLogisticstracking(String expressNumber) {
        List<LogisticstrackingModel> logList=this.logisticstrackingService.queryAllByExpressNumber(expressNumber);
        if (logList!=null){
            return  logList;
        }
        return  null;
    }

}
