package com.yidu.zto.test;

import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/**
 * @author XiongAiWen
 * @version 1.0
 * @description:
 * @data 2021/3/29 14:25
 */
public class AddressTest {

    public static void main(String[] args) {
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
        // data参数是个json格式的字符串  建议使用函数或方法去生成
        /*bodys.put("data", "{
                "text":"浙江省绍兴市诸暨市浣东街道西子公寓北区电话：13905857430  衣服  食物 ",
                "multimode":false
    }");*/
        bodys.put("data","{text:浙江省绍兴市诸暨市浣东街道西子公寓北区电话：13905857430  衣服  食物,multimode:false}");

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
            System.out.println(response.toString());

            //获取response的body
            System.out.println(EntityUtils.toString(response.getEntity()));
        } catch (Exception e) {
            e.printStackTrace();
        }
}

    // 计算md5
    public static String getMD5(String plainText, int length) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");//获取MD5实例
            md.update(plainText.getBytes());//此处传入要加密的byte类型值
            byte[] digest = md.digest();//此处得到的是md5加密后的byte类型值

            /*
               下边的运算就是自己添加的一些二次小加密，记住这个千万不能弄错乱，
                   否则在解密的时候，你会发现值不对的（举例：在注册的时候加密方式是一种，
                在我们登录的时候是不是还需要加密它的密码然后和数据库的进行比对，但是
            最后我们发现，明明密码对啊，就是打不到预期效果，这时候你就要想一下，你是否
             有改动前后的加密方式）
            */
            int i;
            StringBuilder sb = new StringBuilder();
            for (int offset = 0; offset < digest.length; offset++) {
                i = digest[offset];
                if (i < 0)
                    i += 256;
                if (i < 16)
                    sb.append(0);
                sb.append(Integer.toHexString(i));//通过Integer.toHexString方法把值变为16进制
            }
            return sb.toString().substring(0, length);//从下标0开始，length目的是截取多少长度的值
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
}
