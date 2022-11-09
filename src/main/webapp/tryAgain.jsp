<%--
  Created by IntelliJ IDEA.
  User: 15642
  Date: 2021/5/24
  Time: 10:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html class=" ">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title>zto</title>
    <link rel="shortcut icon" type="image/x-icon" href="${pageContext.request.contextPath}/img/logo.ico" media="screen" />
    <link href="${pageContext.request.contextPath}/gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/chunk-libs.fd5c6263.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/chunk-elementUI.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/chunk-elementUI.d199d944.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/app.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/app.605a3e76.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/gcss/chunk-0471.6c2bf22083d3083d6e1b.css">
    <!--地址-->
    <link  href="${pageContext.request.contextPath}/static/css/city-picker.css" rel="stylesheet"/>
    <!--個人資料-->
    <link href="${pageContext.request.contextPath}/gcss/chunk-dcc1.6c2bf22083d3083d6e1b.css" rel="stylesheet">
</head>
<body>

<div id="app">
    <div data-v-04fa0d38="" class="app-wrapper">
        <div data-v-04fa0d38="" class="header">
            <div class="header-main">
                <div>
                    <a href="" target="_blank" style="display: block;"><img src="${pageContext.request.contextPath}/gimg/logo.png" alt=""></a>
                </div>
                <ul>
                    <li>
                        <a href="${pageContext.request.contextPath}/index.jsp" >首页</a>
                    </li>
                    <li class="">
                        <a href="${pageContext.request.contextPath}/ship.jsp" id="my-topMenu-sendOrder">预约寄件</a>
                    </li>
                    <li class="">
                        <a href="${pageContext.request.contextPath}/batchShip.jsp" class="" id="my-topMenu-sendOrderBatch">批量寄件</a>
                    </li>
                    <li class="">
                        <a href="javascript:;"><span>国际件</span></a>
                    </li>
                    <li class="">
                        <a href="" class="" id="my-topMenu-help">帮助与反馈</a>
                    </li>
                    <li class="">
                        <a href="${pageContext.request.contextPath}/myZto.jsp" class="router-link-exact-active router-link-active" id="my-topMenu-userCenter">个人中心</a>
                    </li>
                </ul>
                <div class="header-right">
                    <div><span>欢迎你，<i>${customer.phone}</i></span> <span id="index-exit" class="cursor">退出</span></div>
                    <!---->
                </div>
            </div>
        </div>
        <div data-v-04fa0d38="" class="main-container">

            <!--个人资料设置-->
            <div data-v-04fa0d38="" id="gerenziliao"  class="item-main-container">
                <section data-v-7187aad4="" data-v-04fa0d38="" class="app-main">
                    <div data-v-7187aad4="" class="personal-setting-wrapper">
                        <div class="header">下单成功啦！</div>
                        <div class="s-box" style="min-height: 350px;">

                            <div align="center" style="margin-top: 100px;">
                                <div >
                                    <button id="updateMybutton" type="button" class="el-button modify el-button--primary" style="width: 260px;height: 40px;">
                                        <a href="${pageContext.request.contextPath}/ship.jsp" class="router-link-exact-active router-link-active" style="color: white;">再寄一单</a>
                                    </button>
                                    <button type="button" class="el-button el-button--default"  style="width: 260px;height: 40px;">
                                        <a href="${pageContext.request.contextPath}/index.jsp" class="router-link-exact-active router-link-active">返回首页</a>
                                    </button>
                                </div>
                            </div>


                            <!---->
                        </div>
                    </div>
                </section>
            </div>


        </div>

        <div data-v-04fa0d38="" class="customer-service-box">
            <a data-v-04fa0d38="" class="btn online-btn"><em data-v-04fa0d38=""></em> 在线客服</a>
            <a data-v-04fa0d38="" class="btn sug-btn"><em data-v-04fa0d38=""></em>投诉建议</a>
            <a data-v-04fa0d38="" class="btn top-btn"><em data-v-04fa0d38=""></em>返回顶部</a>
        </div>
        <div data-v-04fa0d38="" class="footer">
            <ul class="footer-main">
                <li>
                    <p>
                        <a href="http://www.zto.com/express/expressWebsite.html" class="gpsIcon">网点查询</a>
                        <a href="http://www.zto.com/express/expressPrice.html" class="clock">运费时效</a>
                    </p>
                    <p>
                        <a href="http://www.zto.com/business/morrow.html" class="service">产品服务</a>
                        <a href="http://www.zto.com/express/expressProhibited.html" class="forbid">禁寄物品</a>
                    </p>
                </li>
                <li>
                    <div><img src="gimg/wechat_code.jpg" alt="">
                        <p class="wx">
                            微信公众号
                        </p>
                    </div>
                    <div><img src="gimg/qq_code.jpg" alt="">
                        <p class="qq">
                            QQ公众号
                        </p>
                    </div>
                    <div><img src="gimg/alipay_code.jpg" alt="">
                        <p class="alipay">支付宝服务窗</p>
                    </div>
                    <div><img src="gimg/app_code.jpg" alt="">
                        <p class="zto">中通APP</p>
                    </div>
                </li>
                <li><img src="gimg/tel.png" alt=""></li>
            </ul>
            <div class="icp">
                <div class="sub">
                    中通快递 版权所有
                    <a href="http://beian.miit.gov.cn" target="_blank">沪ICP备13044869号-2</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;总部地址：上海市青浦区华新镇华志路1685号&nbsp;&nbsp;&nbsp;&nbsp;咨询电话：95311 &nbsp;&nbsp;
                    <a target="_blank" href="javascript:;"><img src="gimg/aqkx_83x30.png" class="bg-img"></a>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
