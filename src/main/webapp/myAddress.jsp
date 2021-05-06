<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2021/4/23
  Time: 8:56
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
    <title>个人中心</title>
    <link href="axui-v1.0.2-20210211/css/ax.css" rel="stylesheet" type="text/css" >
    <link href="axui-v1.0.2-20210211/css/ax-response.css" rel="stylesheet" type="text/css" >
    <link rel="shortcut icon" href="gimg/index.ico">
    <link href="gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="gcss/chunk-libs.fd5c6263.css" rel="stylesheet">
    <link href="gcss/chunk-elementUI.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="gcss/chunk-elementUI.d199d944.css" rel="stylesheet">
    <link href="gcss/app.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="gcss/app.605a3e76.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="gcss/chunk-0471.6c2bf22083d3083d6e1b.css">


    <!--<link rel="stylesheet" type="text/css" href="gcss/chunk-5f22.6c2bf22083d3083d6e1b.css">-->
    <!--地址-->
    <link  href="static/css/city-picker.css" rel="stylesheet"/>


    <link rel="stylesheet" type="text/css" href="gcss/chunk-dcc1.6c2bf22083d3083d6e1b.css">

    <!--我的地址-->
    <link href="gcss/chunk-0471.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="gcss/chunk-9a82.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <script type="text/javascript" src="gjs/jquery-3.5.1.js" ></script>
    <script type="text/javascript" src="gjs/clipboard.js" ></script>

    <link href="layui/css/layui.css" rel="stylesheet">
    <script type="text/javascript" src="layui/layui.js" ></script>

    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/jquery.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/city-picker.data.js" ></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/city-picker.js" ></script>
</head>
<body>

<div id="app">
    <div data-v-04fa0d38="" class="app-wrapper">
        <div data-v-04fa0d38="" class="header">
            <div class="header-main">
                <div>
                    <a href="" target="_blank" style="display: block;"><img src="gimg/logo.png" alt=""></a>
                </div>
                <ul>
                    <li>
                        <a href="index.html" >首页</a>
                    </li>
                    <li class="">
                        <a href="jijian.html" id="my-topMenu-sendOrder">预约寄件</a>
                    </li>
                    <li class="">
                        <a href="/batch-create" class="" id="my-topMenu-sendOrderBatch">批量寄件</a>
                    </li>
                    <li class="">
                        <a href="javascript:;"><span>国际件</span></a>
                    </li>
                    <li class="">
                        <a href="/help" class="" id="my-topMenu-help">帮助与反馈</a>
                    </li>
                    <li class="selected">
                        <a href="/my-zto" class="router-link-exact-active router-link-active" id="my-topMenu-userCenter">个人中心</a>
                    </li>
                </ul>
                <div class="header-right">
                    <div><span>欢迎你，<i>15874685845</i></span> <span id="index-exit" class="cursor">退出</span></div>
                    <!---->
                </div>
            </div>
        </div>
        <div data-v-04fa0d38="" class="main-container">
            <div data-v-04fa0d38="" class=".sidebar-container sidebar-container">
                <ul class="sidebar-main">
                    <li class="nav-top"></li>
                    <li class="nav-item"><span class=""></span>
                        <a href="woDeZhongTon.jsp" class="">我的中通</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="woDeKuaiDi.html" class="" id="leftMenu-express">我的快递</a>
                    </li>
                    <li class="nav-item selectedColor"><span class="selectedNav"></span>
                        <a href="addressselect" class="router-link-exact-active router-link-active" id="leftMenu-address">我的地址簿</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="select01" class="">个人资料设置</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="javascript:void(0);" class="">账户绑定</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="javascript:void(0);" class="">消息订阅设置</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="javascript:void(0);" class="">实名信息</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="javascript:void(0);" class="">月度账单</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="javascript:void(0);" class="">电子面单管理</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="javascript:void(0);" class="">专属业务员</a>
                    </li>
                    <li class="nav-bottom"></li>
                </ul>
            </div>

            <!--我的地址-->
            <div data-v-04fa0d38="" id="wodeaddress" class="item-main-container">
                <section data-v-7187aad4="" data-v-04fa0d38="" class="app-main">
                    <div data-v-7187aad4="" class="address-container">
                        <div class="search-cont">
                            <div class="address-input el-input">
                                <!----><input id="namephone" type="text" autocomplete="off" placeholder="可输入姓名/电话进行查询" class="el-input__inner">
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                            </div> <button id="selectnamep" type="button" class="el-button address-s-btn el-button--primary"><!----><!----><span>查询</span></button> <button type="button" class="el-button address-s-btn address-a-btn el-button--primary" id="addAddressButton"><!----><!----><span>新增</span></button></div>
                        <div class="table-cont">
                            <div class="el-table a-list el-table--fit el-table--enable-row-hover">
                                <div class="hidden-columns">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div class="el-table__header-wrapper">
                                    <table class="el-table__header" style="width: 1022px" cellspacing="0" cellpadding="0" border="0">
                                        <colgroup>
                                            <col name="el-table_3_column_10" width="70">
                                            <col name="el-table_3_column_11" width="144">
                                            <col name="el-table_3_column_12" width="134">
                                            <col name="el-table_3_column_13" width="225">
                                            <col name="el-table_3_column_14" width="225">
                                            <col name="el-table_3_column_15" width="214">
                                            <col name="gutter" width="0">
                                        </colgroup>
                                        <thead class="has-gutter">
                                        <tr class="">
                                            <th colspan="1" rowspan="1" class="el-table_3_column_10     is-leaf">
                                                <div class="cell">状态</div>
                                            </th>
                                            <th colspan="1" rowspan="1" class="el-table_3_column_11     is-leaf">
                                                <div class="cell">姓名</div>
                                            </th>
                                            <th colspan="1" rowspan="1" class="el-table_3_column_12     is-leaf">
                                                <div class="cell">电话</div>
                                            </th>
                                            <th colspan="1" rowspan="1" class="el-table_3_column_13     is-leaf">
                                                <div class="cell">区域</div>
                                            </th>
                                            <th colspan="1" rowspan="1" class="el-table_3_column_14     is-leaf">
                                                <div class="cell">详细地址</div>
                                            </th>
                                            <th colspan="1" rowspan="1" class="el-table_3_column_15     is-leaf">
                                                <div class="cell">操作</div>
                                            </th>
                                            <th class="gutter" style="width: 0px; display: none;"></th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="el-table__body-wrapper is-scrolling-none">
                                    <table  class="el-table__body" style="width: 1022px;" cellspacing="0" cellpadding="0" border="0">
                                        <colgroup>
                                            <col width="70">
                                            <col width="144">
                                            <col width="134">
                                            <col width="225">
                                            <col width="225">
                                            <col width="214">
                                        </colgroup>
                                        <tbody  id="addresstbody">
                                        <!---->
                                            <c:forEach  var="list" items="${addresslist}">
                                                <tr  class="">
                                                    <th style="font-weight:normal;background: white;font-size: 14px" class="el-table_3_column_10  is-leaf">
                                                        <div class="cell" style="margin-left: -25px;overflow: hidden;"><img id="imgid${list.addressId}" style="height: 33px;" src=""></div>
                                                    </th>
                                                    <th style="font-weight:normal;background: white;font-size: 14px" class="el-table_3_column_11  is-leaf">
                                                        <div class="cell" style="margin-left: -25px;overflow: hidden;">${list.sendReceiveMan}</div>
                                                    </th>
                                                    <th style="font-weight:normal;background: white;font-size: 14px"  class="el-table_3_column_12 is-leaf">
                                                        <div class="cell">${list.phone}</div>
                                                    </th>
                                                    <th style="font-weight:normal;background: white;font-size: 14px"  class="el-table_3_column_13 is-leaf">
                                                        <div class="cell">${list.province}-${list.city}-${list.district}</div>
                                                    </th>
                                                    <th style="font-weight:normal;background: white;font-size: 14px"  class="el-table_3_column_14 is-leaf">
                                                        <div class="cell">${list.detailAddress}</div>
                                                    </th>
                                                    <th style="font-weight:normal;background: white;font-size: 14px"  class="el-table_3_column_15 is-leaf">
                                                        <span onclick="updateaddress(${list.addressId})" id="updateaddress_01"><a style="color: #0d95e8" >编辑</a></span>&nbsp;&nbsp;&nbsp;
                                                        <span><a style="color: #0d95e8" href="aiddelete?aid=${list.addressId}&cid=${list.customerId}">删除</a></span>&nbsp;&nbsp;&nbsp;
                                                        <span class="ax-radius-xxl" style="width: 62px;height: 22px" id="updateisDefault${list.addressId}"><a style="width: 62px;height: 22px;color: #0d95e8;" id="uisdefault${list.addressId}" style="padding:5px;color: #0d95e8">设为默认</a></span>
                                                    </th>
                                                </tr>
                                            </c:forEach>
                                        </tbody>
                                    </table>
                                   <div id="tbodynull" class="el-table__empty-block" style="width: 1022px;height: auto;"><span class="el-table__empty-text"><p class="no-data">暂无数据</p></span></div>
                                    <!---->
                                </div>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <div class="el-table__column-resize-proxy" style="display: none;"></div>
                            </div>
                        </div>
                        <!--新增地址-->
                        <div class="el-dialog__wrapper edit-address-dialog" id="addwindow" style="z-index: 2021;display: none;">
                            <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh;">
                                <div class="el-dialog__header">
                                    <div class="dialog-title">
                                       <span id="insertupdate"> 新增地址</span>
                                        <span id="insertX" class="close-btn"></span></div>
                                    <!---->
                                </div>
                                <div class="el-dialog__body">
                                    <form class="el-form">
                                        <div class="el-form-item is-required"><label class="el-form-item__label" style="width: 80px;">姓名</label>
                                            <div class="el-form-item__content" style="margin-left: 80px;">
                                                <div class="el-input">
                                                    <!----><input type="text" autocomplete="off" maxlength="16" id="sendReceiveMan" name="sendReceiveMan" placeholder="请填写姓名，16个字以内" class="el-input__inner">

                                                </div>
                                                <!---->
                                            </div>
                                        </div>
                                        <div class="el-form-item is-required"><label  class="el-form-item__label" style="width: 80px;">手机号</label>
                                            <div class="el-form-item__content" style="margin-left: 80px;">
                                                <div class="el-input">
                                                    <!----><input type="text" autocomplete="off" name="phone" id="phone" placeholder="请填写电话" maxlength="11" class="el-input__inner">

                                                </div>
                                                <!---->
                                            </div>
                                        </div>
                                        <div class="el-form-item is-required"><label class="el-form-item__label" style="width: 80px;">所属区域</label>
                                            <div class="el-form-item__content" style="margin-left: 80px;margin-top: -37px;">
                                                <div class="el-input">
                                                    <!---->
                                                    <input type="text" data-toggle="city-picker" readonly="readonly" id="addressInput" autocomplete="off" placeholder="请选择省市区" class="el-input__inner">
                                                </div>
                                                <!---->
                                                <!---->
                                            </div>
                                        </div>
                                        <div class="el-form-item is-required"><label class="el-form-item__label" style="width: 80px;">详细地址</label>
                                            <div class="el-form-item__content" style="margin-left: 80px;">
                                                <div class="el-input">
                                                    <!----><input type="text" autocomplete="off" maxlength="64" id="detailAddress" name="detailAddress"  placeholder="请输入详细地址（至少包含4个汉字）" class="el-input__inner">

                                                </div>
                                                <!---->
                                            </div>
                                        </div>
                                        <div class="el-form-item is-required"><label for="addressType" class="el-form-item__label" style="width: 80px;">地址类型</label>
                                            <div class="el-form-item__content" style="margin-left: 80px;">
                                                <div class="el-select">
                                                    <!---->
                                                    <div class="el-input el-input--suffix" id="xzaddress">
                                                        <!----><input id="addressType" type="text" readonly="readonly" name="addressType" autocomplete="off" placeholder="请选择" class="el-input__inner">
                                                        <!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i id="xzaddressicon" class="el-select__caret el-input__icon layui-icon layui-icon-down"></i><!----><!----><!----><!----><!----></span>
                                                        <!---->
																</span>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <div class="el-select-dropdown el-popper" id="xzaddressul" style="display: none; min-width: 195.6px;">
                                                        <div class="el-scrollbar" style="">
                                                            <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                                <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                    <!---->
                                                                    <li class="el-select-dropdown__item"><span>寄件地址</span></li>
                                                                    <li class="el-select-dropdown__item"><span>收件地址</span></li>
                                                                </ul>
                                                            </div>
                                                            <div class="el-scrollbar__bar is-horizontal">
                                                                <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                                                            </div>
                                                            <div class="el-scrollbar__bar is-vertical">
                                                                <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
                                                            </div>
                                                        </div>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <!---->
                                            </div>
                                        </div>
                                    </form>
                                    <span style="display: none" id="updateasid"></span>
                                    <span style="display: none" id="updatecsid"></span>
                                    <div class="auto-ansysic"><textarea id="detailAddress_01" placeholder="例：张思锐,13200000101,上海市青浦区某某街道001号某某大厦"></textarea> <span class="btn-an">点击解析</span></div>
                                </div>
                                <div class="el-dialog__footer">
                                    <div class="dialog-footer"><button name="buttonui" id="updatebutton" type="button" class="el-button e-edit-btn el-button--primary"><!----><!----><span>添加</span></button></div>
                                    <div class="dialog-footer"><button name="buttonui" id="insertbutton" type="button" class="el-button e-edit-btn el-button--primary"><!----><!----><span>添加</span></button></div>
                                </div>
                            </div>
                        </div>
                        <!--新增结束-->
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
<script type="text/javascript">
    <c:forEach  var="list" items="${addresslist}">
        $("#updateisDefault${list.addressId}").click(function () {
            var cid = ${list.customerId}
            var aid = ${list.addressId}
            var isdefault =  1;
                $.ajax({
                    type: 'POST',
                    url: 'isDefaultupdate',
                    data: "aid="+aid+"&isdefault="+isdefault+"&cid="+cid,
                    success: function(msg){
                        alert("更新成功！");
                        window.location.reload();
                    }
                });

        })
    </c:forEach>
    $("#selectnamep").click(function () {
        var namephone=$("#namephone").val();
        var cid = ${cid_01}
            $.ajax({
                type: 'POST',
                url: 'cidselect',
                data: "cid="+cid+"&namephone="+namephone,
                success: function(msg){
                    window.location.reload();
                }
            });
    })
    function updateaddress(aid){
        $("#insertbutton").hide();
        $("#updatebutton").show();
        $("#insertupdate").text("修改地址");
        $("#updatebutton").text("修改");
        $("#addwindow").attr("style","z-index: 2021;background-color: rgba(0,0,0,0.5);");
        $.ajax({
            type: 'POST',
            url: 'aidselect',
            data: "aid="+aid,
            success: function(msg){
                $("#updatecsid").text(msg.customerId)
                $("#sendReceiveMan").val(msg.sendReceiveMan);
                $("#phone").val(msg.phone);
                $("#addressInput").citypicker();
                $("#addressInput").citypicker("reset");
                $("#addressInput").citypicker("destroy");
                $("#addressInput").citypicker({
                    province: msg.province,
                    city: msg.city,
                    district: msg.district
                });
                var addressarry = new Array();
                addressarry =msg.detailAddress.split("-");
                $("#detailAddress").val(addressarry[0]);
                if(msg.addressType == 0){
                    $("#xzaddress input").val("收件地址");
                }else{
                    $("#xzaddress input").val("寄件地址");
                }
                //$("#detailAddress_01").text(addressarry[1]);
            }
        });
        $("#updateasid").text(aid);
    }

    $("#insertX").click(function () {
        $("#insertupdate").text("新增地址");
        $("#sendReceiveMan").val("");
        $("#phone").val("");
        $("#detailAddress").val("");
        $("#detailAddress_01").text("");
        $("#xzaddress input").val("");
        $("#addressInput").citypicker();
        $("#addressInput").citypicker("reset");
        $("#addressInput").citypicker("destroy");
        $("#addressInput").citypicker({
            province: "",
            city: "",
            district: ""
        });
    })
    $("#updatebutton").click(function () {
        var address_01 = new Array();
        address_01 =$("#addressInput").val().split("/");
        var address1 = "";

        if ($("#addressType").val() == "寄件地址"){
            address1 = 1;
        }else if($("#addressType").val() == "收件地址"){
            address1 = 0;
        }
        var address001 = $("#detailAddress").val();
        var aid = $("#updateasid").text();
        var cid = $("#updatecsid").text();
        $.ajax({
            type: 'POST',
            url: 'aidupdate',
            data: "addressId="+aid+"&customerId="+cid+"&sendReceiveMan="+$("#sendReceiveMan").val()+"&phone="+$("#phone").val() +"&province="+ address_01[0] +"&city="+address_01[1]
                +"&district="+address_01[2]+"&detailAddress="+address001 +"&addressType="+address1 ,
            success: function(msg){
                $("#sendReceiveMan").val("");
                $("#phone").val("");
                $("#detailAddress").val("");
                $("#detailAddress_01").text("");
                window.location.reload();
            }
        });
        $("#insertupdate").text("新增地址");
        $("#addwindow").attr("style","z-index: 2021;display: none;");
    })
    <c:forEach  var="list" items="${addresslist}">
        var isdefault =${list.isDefault};
        if (isdefault == 1){
            $("#updateisDefault${list.addressId}").css("background","#0d95e8");
            $("#uisdefault${list.addressId}").text("默认")
            $("#uisdefault${list.addressId}").css("color","white")
        }

        var addresstype =${list.addressType};
        if (addresstype == 0){
            $("#imgid${list.addressId}").attr("src","img/receive-iocn.png");
        }else{
            $("#imgid${list.addressId}").attr("src","img/send-iocn.png");
        }
    </c:forEach>

    if(${addressresult}){
        $("#tbodynull").hide()
    }else{
        $("#tbodynull").show()
    }

    $("#insertbutton").click(function () {
        var address_01 = new Array();
        address_01 =$("#addressInput").val().split("/");
        $("#sendReceiveMan").val();
        $("#phone").val();
        var addresstype =$("#addressType").val();
        var address1 = "";
        if (addresstype == "寄件地址"){
            address1 = 1;
        }else if(addresstype == "收件地址"){
            address1 = 0;
        }
        var address001 = $("#detailAddress").val();
        setTimeout(function () {
            $.ajax({
                type: 'POST',
                url: 'addressinsert',
                data: "sendReceiveMan="+$("#sendReceiveMan").val()+"&phone="+$("#phone").val() +"&province="+ address_01[0] +"&city="+address_01[1]
                    +"&district="+address_01[2]+"&detailAddress="+address001 +"&addressType="+address1 ,
                success: function(msg){
                    if(msg.addressId != null){
                        alert("新增成功！");
                        window.location.reload();
                    }
                }
            });
        },0)
        $("#addwindow").attr("style","z-index: 2021;display: none;")
    })
    $("#addAddressButton").click(function(){
        $("#updatebutton").hide();
        $("#insertbutton").show();
        $("#addwindow").attr("style","z-index: 2021;background-color: rgba(0,0,0,0.5);")
    })
    $(".close-btn").click(function(){
        $("#addwindow").attr("style","z-index: 2021;display: none;")
    })

    $("#xzaddress").click(function(){
        $("#xzaddressul").attr("style","min-width: 195.6px;");
        $("#xzaddressicon").removeClass().addClass("el-select__caret el-input__icon layui-icon layui-icon-up")
    })

    $("#xzaddressul ul li").click(function(){
        $("#xzaddressul").attr("style","display: none; min-width: 195.6px;");
        $("#xzaddressicon").removeClass().addClass("el-select__caret el-input__icon layui-icon layui-icon-down")
        $("#xzaddress input").val($(this).text());
    })



</script>

</html>
