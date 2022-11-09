package com.yidu.zto.controller;

import com.yidu.zto.entity.Branch;
import com.yidu.zto.entity.BranchAndUserinfo;
import com.yidu.zto.entity.Coordinate;
import com.yidu.zto.service.BranchService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * (Branch)表控制层
 *
 * @author makejava
 * @since 2021-05-10 09:06:51
 */
@Controller
public class BranchController {
    /**
     * 服务对象
     */
    @Resource
    private BranchService branchService;

    /**
     * 查询出所有的地图(动态)坐标
     *
     * @param
     * @return 所有数据
     */
    @ResponseBody
    @RequestMapping("selectOne")
    public ModelAndView selectOne(HttpServletRequest request) {
        ModelAndView modelAndView = new ModelAndView();
        List<BranchAndUserinfo> branchList =  branchService.queryselect();
        int count = 0;
        List<Coordinate> coordinateList = new ArrayList<>();
        for (BranchAndUserinfo bl:
             branchList) {
           count++;
           String [] coor = bl.getCoordinate().split(",");
           Coordinate coordinate = new Coordinate();
           coordinate.setCount(count);
           coordinate.setLongitude(coor[0]);
           coordinate.setLatitude(coor[1]);
            coordinate.setBranch_id(bl.getBranch_id());
           String [] address_01 = bl.getBranch_address().split("-");
           String address_02 = address_01[1]+address_01[2]+address_01[3];
           coordinate.setBranch_address(address_02);
           bl.setBranch_address(address_02);
           coordinate.setBranch_number(bl.getBranch_number());
           coordinate.setBranch_phone(bl.getBranch_phone());
           coordinate.setBranch_type(bl.getBranch_type());
           coordinate.setParent_number(bl.getParent_number());
           coordinate.setUsername(bl.getUsername());
           coordinate.setUserpass(bl.getUserpass());
           coordinate.setCompellation(bl.getCompellation());
           coordinate.setIs_valid(bl.getIs_valid());
           coordinate.setPhoto(bl.getPhoto());
           coordinateList.add(coordinate);
        }
        request.getSession().setAttribute("count",count);
        request.getSession().setAttribute("branchList",branchList);
        request.getSession().setAttribute("coordinateList",coordinateList);
        modelAndView.setViewName("zto_expressWebsite.jsp");
        return modelAndView;
    }

    @ResponseBody
    @RequestMapping("selectBranch")
    public ModelAndView selectBranch(HttpServletRequest request) {
        List<Branch> list =  branchService.selectBranch();
        System.out.println("list="+list.toString());
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("branch.jsp");
        modelAndView.addObject("listbranch_01",list);
        return modelAndView;
    }
}