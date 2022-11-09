package com.yidu.zto.controller;

import com.yidu.zto.entity.Address;
import com.yidu.zto.entity.Customer;
import com.yidu.zto.service.AddressService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * (Address)表控制层
 *
 * @author makejava
 * @since 2021-04-21 10:51:33
 */
@Controller
public class LKAddressController {
    /**
     * 服务对象
     */
    @Resource
    private AddressService addressService;

    /**
     * 通过主键查询单条数据
     *
     * @param
     * @return 单条数据
     */
    @RequestMapping("addressselect")
    @ResponseBody
    public ModelAndView selectOne(HttpServletRequest request, HttpSession session) {
        Customer customer = (Customer) session.getAttribute("customer");
        ModelAndView modelAndView = new ModelAndView();
        int aid_cid = customer.getCustomerId();
        List<Address> lista =addressService.queryByCid(aid_cid);
        for (Address al: lista) {
            if(al.getIsDefault() == 1) {
                modelAndView.addObject("default",al.getIsDefault());
            }
            modelAndView.addObject("imgaddress",al.getAddressType());
        }
        if (lista != null){
            modelAndView.addObject("addressresult",true);
        }else{
            modelAndView.addObject("addressresult",false);
        }
        List<Address> list= (List<Address>) request.getSession().getAttribute("addresslist");
        if (list != null){
            modelAndView.addObject("addresslist",list);
        }else {
            modelAndView.addObject("addresslist",lista);
        }
        request.getSession().setAttribute("cid_01",aid_cid);
        modelAndView.setViewName("myAddress");
        return modelAndView;
    }
    @RequestMapping("addressinsert")
    @ResponseBody
    public Address insertOne(HttpServletRequest request, Address address) throws ParseException {
        int aid_cid = (int)request.getSession().getAttribute("cid_01");
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String s =simpleDateFormat.format(new Date());
        Date date =  simpleDateFormat.parse(s);
        address.setCustomerId(aid_cid);
        address.setIsDefault(0);
        address.setIsValid(0);
        address.setCreatedate(date);
        Address result=addressService.insert(address);
        return result;
    }

    @RequestMapping("aidselect")
    @ResponseBody
    public Address aidselect(HttpServletRequest request, int aid){
        Address address = addressService.queryById(aid);
        return address;
    }

    @RequestMapping("aidupdate")
    @ResponseBody
    public void aidupdate(HttpServletRequest request, Address address){
        ModelAndView modelAndView = new ModelAndView();
        int result = addressService.update(address);
    }

    @RequestMapping("aiddelete")
    public String aiddelete( int aid){
        boolean result=addressService.deleteById(aid);
        return "forward:addressselect";
    }

    @RequestMapping("isDefaultupdate")
    @ResponseBody
    public int  isDefaultupdate(HttpServletRequest request,int aid,int isdefault){
        Address address = new Address();
        address.setAddressId(aid);
        address.setIsDefault(isdefault);
        int result = addressService.update(address);
        Integer a = null;
        if (result != 0){
            address.setIsDefault(0);
            a=addressService.update_1(address);
        }
        return a;
    }

    @RequestMapping("cidselect")
    @ResponseBody
    public ModelAndView cidselect(HttpServletRequest request, HttpSession session, String namephone){
        Customer customer = (Customer) session.getAttribute("customer");
        ModelAndView modelAndView = new ModelAndView();
        String name= "%"+namephone+"%";
        String phone = "%"+namephone+"%";
        List<Address> list = addressService.namephone(customer.getCustomerId(),name,phone);
        request.getSession().setAttribute("addresslist",list);
        modelAndView.setViewName("addressselect?cid="+customer.getCustomerId());
        return modelAndView;
    }

}