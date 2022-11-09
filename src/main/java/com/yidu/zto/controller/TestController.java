package com.yidu.zto.controller;

import com.alibaba.fastjson.JSONObject;
import com.yidu.zto.entity.Data;
import com.yidu.zto.utils.Layui;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:
 * @data 2021/4/6 14:26
 */
@Controller
public class TestController {


    @ResponseBody
    @RequestMapping("fileUpload")
    public void fileUpload(MultipartFile file, HttpServletRequest request,Integer page,Integer limit){
        //1.创建上传的文件夹
        String realPath = request.getServletContext().getRealPath("/myFile");
        System.out.println("realPath = " + realPath);
        File filePath=new File(realPath);
        if(!filePath.exists()){
            //如果文件夹不存在则创建
            filePath.mkdir();
            System.out.println("创建成功！"+filePath.getAbsolutePath());
        }
        //2.得到文件名
        String fileName = file.getOriginalFilename();
        System.out.println("fileName = " + fileName);
        //3.根据地址与文件名创建空的文件
        File copyFile=new File(filePath.getAbsoluteFile()+"/"+fileName);
        try {
            //4.将用户传过来的文件复制到指定文件
            file.transferTo(copyFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @ResponseBody
    @RequestMapping("testData")
    public Layui testData(HttpServletRequest request){
        //找到文件
        String path = request.getServletContext().getRealPath("/myFile")+"\\"+"中通快递批量下单模板.xlsx";
        //创建读取流
        FileInputStream fileInputStream = null;
        try {
            fileInputStream = new FileInputStream(path);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        //创建excel处理对象
        Workbook workbook = null;
        //判断版本号 2003
        if(path.endsWith("xls")){
            try {
                workbook = new HSSFWorkbook(fileInputStream);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }else{
            try {
                workbook = new XSSFWorkbook(fileInputStream);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        //取出表格
        Sheet t285 = workbook.getSheet("下单模板");
        //取出表格头部，根据下标得到第一行
        Row row = t285.getRow(0);
        //取出表格内容
        row.getCell(1).setCellType(CellType.STRING);
        row.getCell(7).setCellType(CellType.STRING);
        String tName = row.getCell(0).getStringCellValue();
        String tphone= row.getCell(1).getStringCellValue();
        String tprovince= row.getCell(2).getStringCellValue();
        String tcity = row.getCell(3).getStringCellValue();
        String tdistrict = row.getCell(4).getStringCellValue();
        String tdetailAddress = row.getCell(5).getStringCellValue();
        String tgoodsName = row.getCell(6).getStringCellValue();
        String tweight= row.getCell(7).getStringCellValue();
        System.out.println(tName + "\t" + tphone + "\t" + tprovince + "\t"+ tcity + "\t" + tdistrict + "\t"+ tdetailAddress + "\t"+ tgoodsName + "\t"+ tweight);
        //得到当前表格的总行数
        int lastRowNum = t285.getLastRowNum();
        List<Data> list = new ArrayList<>();
        //循环取出数据
        for (int i = 1; i <= lastRowNum; i++) {
            //注：根据每列的数据类型取出对应的值
            Row cells = t285.getRow(i);
            cells.getCell(1).setCellType(CellType.STRING);
            cells.getCell(7).setCellType(CellType.STRING);
            String name = cells.getCell(0).getStringCellValue();
            String phone = cells.getCell(1).getStringCellValue();
            String province = cells.getCell(2).getStringCellValue();
            String city = cells.getCell(3).getStringCellValue();
            String district = cells.getCell(4).getStringCellValue();
            String detailAddress = cells.getCell(5).getStringCellValue();
            String goodsName = cells.getCell(6).getStringCellValue();
            String weight =  cells.getCell(7).getStringCellValue();
            Data data = new Data(name,phone,province,city,district,detailAddress,goodsName,weight);
            list.add(data);
            //打印数据（将数据封装到对象集合，然后调用数据库新增的方法）
            System.out.println(name + "\t" + phone + "\t" + city + "\t" + district + "\t"+ detailAddress + "\t"+ goodsName + "\t"+ weight);
        }
        //关闭资源
        try {
            fileInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Layui.data(10,list);
    }

    @RequestMapping("getData")
    @ResponseBody
    public String getData(String data){
        System.out.println("data = " + data);
        List<Data> list = JSONObject.parseArray(data, Data.class);
        for (Data data1 : list) {

            System.out.println("data1 = " + data1);
        }
        return "成功！";
    }
}
