package com.yidu.zto.controller;

import com.yidu.zto.entity.Customer;
import com.yidu.zto.service.CustomerService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;

@Controller
public class LKFileUporDown {
    @Resource
    private CustomerService customerService;

    @ResponseBody
    @RequestMapping("fileUpload")
    public Customer fileUpload(@RequestParam(value = "file") MultipartFile filemy, HttpServletRequest request){
        int cid =(int)request.getSession().getAttribute("cid");
        String realPath = request.getServletContext().getRealPath("/myFile");
        File filePath = new File(realPath);
        if (!filePath.exists()){
            filePath.mkdir();
        }
        String pathname = filemy.getOriginalFilename();
        File file = new File(filePath.getAbsolutePath()+"/"+pathname);
        //根据id修改头像路径
        Customer customer  = new Customer();
        customer.setCustomerId(cid);
        customer.setPhoto(pathname);
        Customer customer1=customerService.update(customer);
        try {
            filemy.transferTo(file);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return customer1;
    }

}
