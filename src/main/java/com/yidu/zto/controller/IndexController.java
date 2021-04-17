package com.yidu.zto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:
 * @data 2021/4/14 15:30
 */

@Controller
public class IndexController {

    @RequestMapping("index")
    public String index(){
        return "index";
    }
}
