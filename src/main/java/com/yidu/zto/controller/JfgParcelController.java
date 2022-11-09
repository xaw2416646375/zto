package com.yidu.zto.controller;

import com.yidu.zto.entity.Parcel;
import com.yidu.zto.service.JfgParcelService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * (Parcel)表控制层
 *
 * @author makejava
 * @since 2021-04-21 09:51:58
 */
@RestController
@RequestMapping("jfg/parcel")
public class JfgParcelController {
    /**
     * 服务对象
     */
    @Resource
    private JfgParcelService parcelService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Parcel selectOne(Integer id) {
        return this.parcelService.queryById(id);
    }

}
