package com.yidu.zto.controller;

import com.alibaba.fastjson.JSONObject;
import com.yidu.zto.entity.Data;
import com.yidu.zto.test.AddressTest;
import com.yidu.zto.test.HttpUtils;
import com.yidu.zto.utils.Layui;
import com.yidu.zto.vo.AddressBean;
import com.yidu.zto.vo.Address_01;
import com.yidu.zto.vo.Addressjson;
import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.*;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:
 * @data 2021/4/6 14:26
 */
@Controller
@RequestMapping("test")
public class TestController {


    @ResponseBody
    @RequestMapping("/testController")
    public AddressBean testController(@RequestBody JSONObject data) {
        //System.out.println("data = " + data);
        String host = "http://kop.kuaidihelp.com";
        String path = "/api";
        String requestMethod = "POST";
        Map<String, String> headers = new HashMap<String, String>();
        //根据API的要求，定义相对应的Content-Type
        headers.put("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        Map<String, String> querys = new HashMap<String, String>();
        Map<String, String> bodys = new HashMap<String, String>();

        String appId = "108937";
        String method = "cloud.address.resolve";
        // 当前时间戳
        String ts = new Date().getTime() + "";
        String appKey = "bee2d32362ae51004a682bad12a6826b4efe3fb5";

        // 计算签名
        String signStr = appId + method + ts + appKey;
        String sign = AddressTest.getMD5(signStr, 32);

        bodys.put("app_id", appId);
        bodys.put("method", method);
        bodys.put("ts", ts);
        bodys.put("sign", sign);

        //bodys.put("data","{text:浙江省绍兴市诸暨市浣东街道西子公寓北区电话：13905857430  衣服  食物,multimode:false}");
        //System.out.println("json=="+ JSONObject.toJSONString(data));
        AddressBean addressBean = new AddressBean();
        bodys.put("data", JSONObject.toJSONString(data));
        try {
            /**
             * 重要提示如下:
             * HttpUtils请从
             * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java
             * 下载
             *
             * 相应的依赖请参照
             * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml
             */
            HttpResponse response = HttpUtils.doPost(host, path, requestMethod, headers, querys, bodys);
            //获取response的body
            /* System.out.println(EntityUtils.toString(response.getEntity()));*/
            Addressjson addressjson= JSONObject.parseObject(EntityUtils.toString(response.getEntity()),Addressjson.class);
            //n("1="+addressjson.getCode()+"2="+addressjson.getUid());
            List<Address_01> al = addressjson.getData();
            for (Address_01 ali:
                    al) {
                addressBean.setMobile(ali.getMobile());
                addressBean.setName(ali.getName());
                addressBean.setProvince_name(ali.getProvince_name());
                addressBean.setProvince_shortname(ali.getProvince_shortname());
                addressBean.setCity_name(ali.getCity_name());
                addressBean.setCity_shortname(ali.getCity_shortname());
                addressBean.setCounty_name(ali.getCounty_name());
                addressBean.setCounty_shortname(ali.getCounty_shortname());
                addressBean.setDetail(ali.getDetail());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        //System.out.println("省="+addressBean.getProvince_name());
        return addressBean;
    }

    @ResponseBody
    @RequestMapping("fileUpload")
    public void fileUpload(MultipartFile file, HttpServletRequest request,Integer page,Integer limit){
        //1.创建上传的文件夹
        String realPath = request.getServletContext().getRealPath("/myFile");
        //System.out.println("realPath = " + realPath);
        File filePath=new File(realPath);
        if(!filePath.exists()){
            //如果文件夹不存在则创建
            filePath.mkdir();
           //System.out.println("创建成功！"+filePath.getAbsolutePath());
        }
        //2.得到文件名
        String fileName = file.getOriginalFilename();
        //System.out.println("fileName = " + fileName);
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
        String path = request.getServletContext().getRealPath("/myFile")+"/"+"中通快递批量下单模板.xlsx";
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
        //System.out.println(tName + "\t" + tphone + "\t" + tprovince + "\t"+ tcity + "\t" + tdistrict + "\t"+ tdetailAddress + "\t"+ tgoodsName + "\t"+ tweight);
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
            //System.out.println(name + "\t" + phone + "\t" + city + "\t" + district + "\t"+ detailAddress + "\t"+ goodsName + "\t"+ weight);
        }
        //关闭资源
        try {
            fileInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return Layui.data(10,list);
    }
}
