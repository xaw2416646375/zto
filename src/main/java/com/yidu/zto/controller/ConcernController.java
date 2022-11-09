package com.yidu.zto.controller;


import com.yidu.zto.entity.Concern;
import com.yidu.zto.service.ConcernService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * 猜你关心
 */
@Controller
public class ConcernController {

    /**
     * 服务对象
     */
    @Resource
    private ConcernService concernService;

    @RequestMapping("queryConcern")
    @ResponseBody
    public List<Concern> queryConcern(HttpSession httpSession){
        //调用查询关心的方法
        List<Concern> concerns = concernService.queryConcern(httpSession);
        return concerns;
    }


}
