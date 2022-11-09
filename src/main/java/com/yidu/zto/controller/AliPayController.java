package com.yidu.zto.controller;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.yidu.zto.entity.Order;
import com.yidu.zto.entity.Parcel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class AliPayController {
    String APP_ID ="2021000117647529"; //商家id
    //私钥
    String APP_PRIVATE_KEY = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCal+8FtR2gTRO5K5b3OE9oGpQ/xUxlH/WFQX/a4h8W/k+dHyU2yrsUf0ASwOWXQj2mNlKwa6Eqc/zm0/wdYDfPQh/lC6dZ7tkqt07VRXz7mLDtM9laX6pA3ETt7VtPBnBcyxqVmizTNBmn5uZwG90hbXTwd0ErDyHYnIcHZe/t13/13qE+EJ3dxpQLP3mULuiq6kH6CkbimZZ/Y13V2s9YNwSoyveRfiicUw8Cuk+GQIzZeExnxrW4Xsubbrvz3z2TBAJvmE+BACnccQE1xQ5sf0gYHedoZIGbAcZ34sp9qJbLnDOU9JMNFBhZwT+EkfywkMTL34A4mZqH84Whfol3AgMBAAECggEBAJbea5/wT0dfsT3m8l+2DpiUR9WsYI/YDq3LbFFal+jCq0O1X4YHd2fbf9ZNdkKVnMCXBz+w6goaQ9epTcQFYLHd4G6RXvL/i+SKHF86f2yyaQg0r4vpDKhbztE78P5AVGvasskJO3GqyNb5Gi6Sos26moMKfwjcrbVNnOF1dB9xycJJZNUBmtSvzBUm9g+e/cTSvLGy/qgIiDKsazOKx2EY7ZHvs9iW8Zdlkj6Q8UR2Gy2+mJ6oO5AVBTSR6cDSppyIYAT6VrpZM5+/D6LydTeL+ruaRglvVIZ4I2qttiMPe/EJnOMOdqrL2L0aXVnw9nOzEwTsbDpqi36clnij6dECgYEAy7LkCfZ0Hthd5Aq3xNCLfLNyYb5YO8fytCwQlWecKmCYDYCrYgi/gU1Omjp/bn7Id2Z6HBgV2H1ee4AM8cL0sercUeKVM/tC9oAO5jNUZ3y2UeXU00ayQcNUQMVYoCB9COanNEtkaN2OcXPVY5RT6rapOxxC9luMFN2MHsuJxCMCgYEAwklavNCUVufX0DgrogFtPJOJYqUgO/jZVQ9ZKeMCaMCTWuw5FOurpfp6LtDQnCV3nvS+M4Y+Rq6y5Z9qics7WlLhDp16PiymHRQVxRbQI1qyyTl+gdQq/ib1jdHJpuHwU9Bs4lqLfabAEXG6iXWHVzobxOzEDkyODgnbtKhtwJ0CgYEAv6OgyQK1wqM6yiWPOLoe0QYeUXj7l9qIKxvdykH8+R2BUArCsmuah/KMRatNYk4jGbounanHO7LPJg+VngoVniFggCVUy9/S4wgdfFPET8xT1v8MWG0Fnbs/0+QWeie2mp4tppRbdhEjRvd8RcAxpvuMgVEYaqA8TREWF47UINMCgYB5hyzs4oOHgOor4pbYdZAAzkCnpaZuHRDE9h7N5qPBJoSF4TErducdoXoAAroakg0rLugyjowx5mEc5QTdQHTV4PXKEJNAhOk7Uy7y43w6QSeIWyBY0YA7Dd+XYFyEuNt9cehKBl0usbl+r+cAyLVpyH1KRte0IgrRmTUG4jwUuQKBgByhCMGUReoPayCp3Sgp0acGXAW22MsR/60k8y+9cEPMIl83ep1t/xoGmoT1l8EAFFzYt5vnRmycibi6tLUzoDNOkiOJg05nyPuc5ner63nfH6JeUWSpRL+Y0ppYw32tfVE4ifqoe2aG20mUdY3KJpfYaPGHJhMTHh2hcRbyccZz";
    //公钥
    String ALIPAY_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmpfvBbUdoE0TuSuW9zhPaBqUP8VMZR/1hUF/2uIfFv5PnR8lNsq7FH9AEsDll0I9pjZSsGuhKnP85tP8HWA3z0If5QunWe7ZKrdO1UV8+5iw7TPZWl+qQNxE7e1bTwZwXMsalZos0zQZp+bmcBvdIW108HdBKw8h2JyHB2Xv7dd/9d6hPhCd3caUCz95lC7oqupB+gpG4pmWf2Nd1drPWDcEqMr3kX4onFMPArpPhkCM2XhMZ8a1uF7Lm2678989kwQCb5hPgQAp3HEBNcUObH9IGB3naGSBmwHGd+LKfaiWy5wzlPSTDRQYWcE/hJH8sJDEy9+AOJmah/OFoX6JdwIDAQAB";
    // 签名方式
    String SIGN_TYPE = "RSA2";
    // 字符编码格式
    String CHARSET = "UTF-8";
    String FORMAT = "json";
    // 支付宝网关，这是沙箱的网关
    String URL = "https://openapi.alipaydev.com/gateway.do";
    @RequestMapping("aliPayDo")
    public   void   doPost (HttpServletRequest httpRequest, HttpServletResponse httpResponse)   throws ServletException, IOException {
        //Order order=(Order)httpRequest.getSession().getAttribute("orderOne");
        Parcel parcel=(Parcel) httpRequest.getSession().getAttribute("parcelOne");
        String parcelName="快递运费";
        AlipayClient alipayClient =  new DefaultAlipayClient( URL , APP_ID, APP_PRIVATE_KEY, FORMAT, CHARSET, ALIPAY_PUBLIC_KEY, SIGN_TYPE);  //获得初始化的AlipayClient
        AlipayTradePagePayRequest alipayRequest =  new  AlipayTradePagePayRequest(); //创建API对应的request
        alipayRequest.setReturnUrl( "http://localhost:8080/zto/jfg/order/updateOrderPay" );
        alipayRequest.setNotifyUrl( "http://localhost:8080/zto/alipay/sss.html" ); //在公共参数中设置回跳和通知地址
        alipayRequest.setBizContent( "{"  +
                "    \"out_trade_no\":\""+parcel.getParcelId()+"\","  +
                "    \"product_code\":\"FAST_INSTANT_TRADE_PAY\","  +
                "    \"total_amount\":"+parcel.getEstimatePrice()+","  +
                "    \"subject\":\""+parcelName+"\","  +
                "    \"body\":\""+parcelName+"\","  +
                "    \"passback_params\":\"merchantBizType%3d3C%26merchantBizNo%3d2016010101111\","  +
                "    \"extend_params\":{"  +
                "    \"sys_service_provider_id\":\"2088511833207846\""  +
                "    }" +
                "  }" ); //填充业务参数
        String form= "" ;
        try  {
            form = alipayClient.pageExecute(alipayRequest).getBody();  //调用SDK生成表单
        }  catch  (AlipayApiException e) {
            e.printStackTrace();
        }
        httpResponse.setContentType( "text/html;charset="  + CHARSET);
        httpResponse.getWriter().write(form); //直接将完整的表单html输出到页面
        httpResponse.getWriter().flush();
        httpResponse.getWriter().close();
    }
}
