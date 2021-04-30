<%--
  Created by IntelliJ IDEA.
  User: 15642
  Date: 2021/4/21
  Time: 18:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class=" ">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title>个人中心</title>
    <link rel="shortcut icon" href="/zto.ico">
    <link href="${pageContext.request.contextPath}/gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/css/chunk-libs.fd5c6263.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/chunk-elementUI.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/chunk-elementUI.d199d944.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/static/css/chunk-libs.fd5c6263.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/app.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="${pageContext.request.contextPath}/gcss/app.605a3e76.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/gcss/chunk-0471.6c2bf22083d3083d6e1b.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/chunk-5f22.6c2bf22083d3083d6e1b.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/static/css/chunk-30a0.6c2bf22083d3083d6e1b.css">

    <script type="text/javascript" src="${pageContext.request.contextPath}/gjs/jquery-3.5.1.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/gjs/clipboard.js"></script>
    <link href="${pageContext.request.contextPath}/static/css/city-picker.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/layui/css/layui.css" rel="stylesheet">
    <script type="text/javascript" src="${pageContext.request.contextPath}/layui/layui.js"></script>



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
                    <a href="" target="_blank" style="display: block;"><img src="${pageContext.request.contextPath}/gimg/logo.png" alt=""></a>
                </div>
                <ul>
                    <li>
                        <a href="" target="_blank">首页</a>
                    </li>
                    <li class="selected">
                        <a href="" class="router-link-exact-active router-link-active" id="my-topMenu-sendOrder">预约寄件</a>
                    </li>
                    <li class="">
                        <a href="piliangjijian.html" class="" id="my-topMenu-sendOrderBatch">批量寄件</a>
                    </li>
                    <li class="">
                        <a href="javascript:;"><span>国际件</span></a>
                    </li>
                    <li class="">
                        <a href="" class="" id="my-topMenu-help">帮助与反馈</a>
                    </li>
                    <li class="">
                        <a href="" class="" id="my-topMenu-userCenter">个人中心</a>
                    </li>
                </ul>
                <div class="header-right">
                    <div><span>欢迎你，<i>15874685845</i></span> <span id="index-exit" class="cursor">退出</span></div>
                    <!---->
                </div>
            </div>
        </div>
        <div data-v-04fa0d38="" class="main-container">
            <div data-v-04fa0d38="" class=".sidebar-container sidebar-container" style="display: none;">
                <ul class="sidebar-main">
                    <li class="nav-top"></li>
                    <li class="nav-bottom"></li>
                </ul>
            </div>
            <div data-v-04fa0d38="" class="item-main-container">
                <section data-v-7187aad4="" data-v-04fa0d38="" class="app-main">
                    <div data-v-7187aad4="" class="create-container">
                        <!---->
                        <div class="navbar">
                            <div class="navbarLeft"><img src="${pageContext.request.contextPath}/gimg/onlineSend.png" alt=""> <span>预约寄件</span>
                                <!----><span class="prompt">（17点前下单，业务员当天收件，17点后下单次日收件）</span></div>
                            <div class="navbarRight"><span class="prompt">每天寄件超过50单，建议</span>
                                <a href="piliangjijian.html" class=""><button type="button" class="el-button el-button--primary el-button--small" id="create-batch"><!----><!----><span>批量寄件</span></button></a> <span class="prompt">效率更高</span></div>
                        </div>
                        <form class="el-form" id="myForm">
                            <div class="send">
                                <div class="sendLable">寄</div>
                                <div class="el-row" style="margin-left: -2.5px; margin-right: -2.5px;">
                                    <div class="el-col el-col-14" style="padding-left: 2.5px; padding-right: 2.5px;">
                                        <div class="el-card sendLeftCard is-always-shadow">
                                            <!---->
                                            <div class="el-card__body">
                                                <!---->
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label  class="el-form-item__label" style="width: 100px;">姓名：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="jiName" name="sendReceiveMan" autocomplete="off" maxlength="14" class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div> <button type="button" class="el-button el-button--primary el-button--small" id="create-my-address"><!----><!----><span>地址簿</span></button>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label  class="el-form-item__label" style="width: 100px;">电话：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="jiPhone" name="phone" autocomplete="off" maxlength="13" class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div> <span class="unRealName alreadyRealName" style="display: none;">已实名</span> <span class="unRealName" style="display: none;">未实名</span>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label class="el-form-item__label" style="width: 100px;">所属区域：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="jiaddress" name="province" data-toggle="city-picker" readonly="readonly"  class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label class="el-form-item__label" style="width: 100px;">详细地址：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="jiaddressx" name="detailAddress" autocomplete="off" maxlength="64" class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback el-form-item--small">
                                                    <!---->
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <p class="saveAddress"><label role="checkbox" id="create-save-address" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><input type="checkbox" name="queDing" value=0></span><span class="el-checkbox__label">保存到常用地址簿<!----></span></label> <span id="create-analysis" class="analysis">智能解析地址</span></p>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="el-col el-col-10" style="padding-left: 2.5px; padding-right: 2.5px;">
                                        <div class="el-card freight is-always-shadow">
                                            <!---->
                                            <div class="el-card__body">
                                                <!---->
                                                <div>
                                                    <p class="freightSearchTitle">运费时效查询</p>
                                                    <div class="el-input el-input-group el-input-group--prepend">
                                                        <div class="el-input-group__prepend">始发地：</div><input type="text" readonly="readonly" id="test002" data-toggle="city-picker" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <!---->
                                                    <div class="el-input el-input-group el-input-group--prepend">
                                                        <div class="el-input-group__prepend">目的地：</div><input type="text" readonly="readonly" id="test001" data-toggle="city-picker" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                    <p><button type="button" id="selectprice" class="el-button el-button--primary el-button--small"><!----><!----><span>查询</span></button></p>
                                                    <!---->
                                                    <p class="weight"><span class="weight-lable">首重</span> <span id="oneprice">0&nbsp;元/kg</span></p>
                                                    <p class="weight"><span>续重</span> <span id="twoprice">0&nbsp;元/kg</span></p>
                                                    <p class="prompt">说明：此报价为指导价仅供参考，详询中通当地营业网点。
                                                        <!---->
                                                    </p>
                                                    <!---->
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="collect">
                                <div class="collectLable">收</div>
                                <!---->
                                <div class="el-card is-always-shadow">
                                    <!---->
                                    <div class="el-card__body">
                                        <ul class="collect-main">
                                            <li class="collectConLeft">
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label class="el-form-item__label" style="width: 100px;">姓名：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="shouName" name="shouSendReceiveMan" autocomplete="off" maxlength="14" class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div> <button type="button" class="el-button el-button--primary el-button--small" id="create-receive-address"><!----><!----><span>地址簿</span></button>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label class="el-form-item__label" style="width: 100px;">电话：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="shouPhone" name="shouPhone" autocomplete="off" maxlength="13" class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label  class="el-form-item__label" style="width: 100px;">所属区域：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="shouaddress" name="shouProvince" readonly="readonly" data-toggle="city-picker" autocomplete="off" class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label class="el-form-item__label" style="width: 100px;">详细地址：</label>
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <div class="el-input el-input--small">
                                                            <!----><input type="text" id="shouaddressx" name="shouDetailAddress" autocomplete="off" maxlength="64" class="el-input__inner">
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <!---->
                                                    </div>
                                                </div>
                                                <div class="el-form-item el-form-item--feedback el-form-item--small">
                                                    <!---->
                                                    <div class="el-form-item__content" style="margin-left: 100px;">
                                                        <p class="saveAddress"><label role="checkbox" id="create-receive-save" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><input type="checkbox" name="shouQueDing" value="0"></span><span class="el-checkbox__label">保存到常用地址簿<!----></span></label> <span id="create-receive-analysis" class="analysis">智能解析地址</span></p>
                                                        <!---->
                                                        <!---->
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="line"></li>
                                            <li class="collectConRight">
                                                <div class="goodsStyle"><span class="collectTitle">物品类型：</span>
                                                    <div class="el-select el-select--small">
                                                        <!---->
                                                        <div class="el-input el-input--small el-input--suffix" id="leixing">
                                                            <!----><input type="text" readonly="readonly" autocomplete="off"  placeholder="请选择" class="el-input__inner">
                                                            <input type="hidden" id="goodsType" name="goodsType" value="0" />
                                                            <!----><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon layui-icon layui-icon-down"></i><!----><!----><!----><!----><!----></span>
                                                            <!---->
																	</span>
                                                            <!---->
                                                            <!---->
                                                        </div>
                                                        <div class="el-select-dropdown el-popper" id="xialaliebiao" style="display: none; min-width: 184.933px;">
                                                            <div class="el-scrollbar" style="">
                                                                <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
                                                                    <ul class="el-scrollbar__view el-select-dropdown__list">
                                                                        <!---->
                                                                        <li class="el-select-dropdown__item" value="0"><span>文件</span></li>
                                                                        <li class="el-select-dropdown__item" value="1"><span>数码产品</span></li>
                                                                        <li class="el-select-dropdown__item" value="2"><span>生活用品</span></li>
                                                                        <li class="el-select-dropdown__item" value="3"><span>服饰</span></li>
                                                                        <li class="el-select-dropdown__item" value="4"><span>食品</span></li>
                                                                        <li class="el-select-dropdown__item" value="5"><span>其他</span></li>
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
                                                </div>
                                                <div class="predictWeight"><span class="collectTitle">预估重量：</span>
                                                    <div role="radiogroup" class="el-radio-group" id="kg">
                                                        <label id="la1" role="radio" aria-checked="true" tabindex="0" class="el-radio is-checked">
																	<span class="el-radio__input is-checked">
																		<span class="el-radio__inner"></span>
																		<input type="radio" aria-hidden="true" checked="checked" name="weight" tabindex="-1" class="el-radio__original" value="1">
																	</span>
                                                            <span class="el-radio__label">1KG<!----></span>
                                                        </label>
                                                        <label id="la2" role="radio" tabindex="-1" class="el-radio">
																	<span class="el-radio__input">
																		<span class="el-radio__inner"></span>
																		<input type="radio" aria-hidden="true" name="weight" tabindex="-1" class="el-radio__original" value="2">
																	</span>
                                                            <span class="el-radio__label">2KG<!----></span>
                                                        </label>
                                                        <label id="la3" role="radio" tabindex="-1" class="el-radio">
																	<span class="el-radio__input">
																		<span class="el-radio__inner"></span>
																		<input type="radio" aria-hidden="true" name="weight" tabindex="-1" class="el-radio__original" value="3">
																	</span><span class="el-radio__label">3KG<!----></span>
                                                        </label>
                                                        <label id="la4" role="radio" tabindex="-1" class="el-radio">
																	<span class="el-radio__input">
																		<span class="el-radio__inner"></span>
																		<input type="radio" aria-hidden="true" name="weight" tabindex="-1" class="el-radio__original" value="other">
																	</span>
                                                            <span class="el-radio__label">
																		<span>其他</span> 
																		<div id="la4div" class="el-input-number el-input-number--small is-disabled is-controls-right">
																			<span id="lasp1" role="button" class="el-input-number__decrease is-disabled">
																				<i class="layui-icon layui-icon-down" style="font-size: 8px;"></i>
																			</span>
																			<span id="lasp2" role="button" class="el-input-number__increase">
																				<i class="layui-icon layui-icon-up" style="font-size: 8px;"></i>
																			</span>
																			<div id="la4divs" class="el-input el-input--small is-disabled">
																				
																			<!----><input type="text" disabled="disabled" autocomplete="off" max="50" min="1" class="el-input__inner" role="spinbutton" aria-valuemax="50" aria-valuemin="1" aria-valuenow="1" aria-disabled="true">

                                                                                <!----><!----><!----><!---->
																			</div>
																		</div><!---->
																	</span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="remindText"><span class="collectTitle">提醒快递员：</span>
                                                    <div>
                                                        <div id="tixing"><span class="prompt" name="1">请带纸箱</span>
                                                            <span class="prompt" name="1">需爬楼梯</span>
                                                            <span class="prompt" name="1">缺文件袋</span>
                                                            <span class="prompt" name="1">来前电话</span>
                                                            <span class="prompt" name="1">请带面单</span>
                                                            <span class="prompt" name="1">我没胶带</span>
                                                        </div>
                                                        <div class="el-textarea"><textarea autocomplete="off" id="create-remark" rows="2" maxlength="95" placeholder="请输入内容" class="el-textarea__inner" style="min-height: 27.6px;"></textarea>
                                                            <!---->
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="submit">
                                <div class="el-card is-always-shadow">
                                    <!---->
                                    <div class="el-card__body"><label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><input type="checkbox" aria-hidden="true" value="" id="tongyi"></span><span class="el-checkbox__label">同意并接受<!----></span></label>
                                        <a>"快递服务协议"</a>
                                        <a href="" target="_blank">"隐私政策"</a>
                                        <p><button type="button" id="tijiao" class="el-button el-button--primary"><!----><!----><span>立即下单</span></button></p>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="full_popup my_address_book" id="bgmax" style="display: none;">
                            <div class="gray"></div>
                            <div class="box">
                                <h2>我的地址簿</h2> <em class="close"></em>

                                <ul class="address_list" id="address_list_app">

                                   <%-- <c:forEach items="${addressList}" var="address">
                                        <li class="cb">
                                            <c:if test="${address.addressType==1}">
                                                    <i class="send-icon"></i>
                                            </c:if>
                                            <c:if test="${address.addressType==0}">
                                                <i class="receive-icon"></i>
                                            </c:if>
                                            <c:if test="${address.isDefault==1}">
                                            <span class="address_name">${address.sendReceiveMan}</span> <span class="address_phone">${address.phone}</span> <span class="i_detail">${address.province}-${address.city}-${address.district}-${address.detailAddress}</span> <em class="default" onclick="defaultAddress(${address.addressId})">默认</em></li>
                                            </c:if>
                                            <c:if test="${address.isDefault==0}">
                                                <span class="address_name">${address.sendReceiveMan}</span> <span class="address_phone">${address.phone}</span> <span class="i_detail">${address.province}-${address.city}-${address.district}-${address.detailAddress}</span> <em class="set_default_address" onclick="defaultAddress(${address.addressId})">设为默认</em></li>
                                            </c:if>
                                    </c:forEach>--%>
                                </ul>
                                <div class="page">

                                </div>
                            </div>
                        </div>




                        <div class="full_popup resolution_dialog" id="bgmin" style="display: none;"><div class="gray"></div> <div class="box"><h2>智能填写</h2> <em class="close"></em> <div class="input_textarea"><textarea placeholder="粘贴整段地址，自动识别姓名，电话和地址
  例：张思锐，13200000101，上海市青浦区某某街道001号某某大厦
  此处智能解析支持一条地址解析，如有多个收件人，请点击下方添加多个收件人进行逐条解析"></textarea></div> <div class="submit"><button type="button" class="el-button el-button--primary"><!----><!----><span>提交</span></button></div></div></div>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
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
                        <a href="" class="gpsIcon">网点查询</a>
                        <a href="" class="clock">运费时效</a>
                    </p>
                    <p>
                        <a href="" class="service">产品服务</a>
                        <a href="" class="forbid">禁寄物品</a>
                    </p>
                </li>
                <li>
                    <div><img src="${pageContext.request.contextPath}/gimg/wechat_code.jpg" alt="">
                        <p class="wx">
                            微信公众号
                        </p>
                    </div>
                    <div><img src="${pageContext.request.contextPath}/gimg/qq_code.jpg" alt="">
                        <p class="qq">
                            QQ公众号
                        </p>
                    </div>
                    <div><img src="${pageContext.request.contextPath}/gimg/alipay_code.jpg" alt="">
                        <p class="alipay">支付宝服务窗</p>
                    </div>
                    <div><img src="${pageContext.request.contextPath}/gimg/app_code.jpg" alt="">
                        <p class="zto">中通APP</p>
                    </div>
                </li>
                <li><img src="${pageContext.request.contextPath}/gimg/tel.png" alt=""></li>
            </ul>
            <div class="icp">
                <div class="sub">
                    中通快递 版权所有
                    <a href="http://beian.miit.gov.cn" target="_blank">沪ICP备13044869号-2</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;总部地址：上海市青浦区华新镇华志路1685号&nbsp;&nbsp;&nbsp;&nbsp;咨询电话：95311 &nbsp;&nbsp;
                    <a target="_blank" href="javascript:;"><img src="${pageContext.request.contextPath}/gimg/aqkx_83x30.png" class="bg-img"></a>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">




    var bg=true;

    $("#create-my-address").click(function() {
        bg=true;
        addressappen();
    })
    $("#create-receive-address").click(function() {
        bg=false;
        addressappen();
    })

    function addressappen(){
        $("#bgmax").attr("style","display: inline")
        $("#address_list_app").empty()
        $.ajax({
            type: "POST",
            url: "${pageContext.request.contextPath}/address/selectAddressAll",
            success: function(addressList){

                for (let i = 0; i <addressList.length ; i++) {
                    var divAddressNei="";
                    divAddressNei="<li class='cb' onclick='dianji(this)'>"
                    if(addressList[i].addressType==1) {
                        divAddressNei+="<i class='send-icon'></i>"
                    }else{
                        divAddressNei+="<i class='receive-icon'></i>"
                    }
                    divAddressNei+="<span class='address_name'>"+addressList[i].sendReceiveMan+
                        "</span> <span class='address_phone'>"+addressList[i].phone+
                        "</span><span class='i_detail'>"+addressList[i].province+"-"+addressList[i].city+"-"+addressList[i].district+"-"+addressList[i].detailAddress+
                        "</span> "
                    if(addressList[i].isDefault==1) {
                        divAddressNei+="<em class='default' onclick='defaultAddress("+addressList[i].addressId+")'>默认";
                    }else{
                        divAddressNei+="<em class='set_default_address' onclick='defaultAddress("+addressList[i].addressId+")'>设为默认"
                    }
                    divAddressNei+="</em></li>"
                    $("#address_list_app").append(divAddressNei);


                }
            }
        });
    }

    function defaultAddress(addId) {

        $.ajax({
            type: "POST",
            url: "${pageContext.request.contextPath}/address/updateDefault",
            data: "addressId="+addId,
            success: function(msg){
                nini.msg(msg)
                //$("#bgmax").attr("style","display: inline")
                addressappen();
            }
        });

    }



    function dianji(p){
        $("#jiaddress").citypicker();
        $("#shouaddress").citypicker();
        if(bg){
            $("#jiName").val($(p).children(".address_name").text())
            $("#jiPhone").val($(p).children(".address_phone").text())
            var address=$(p).children(".i_detail").text().split("-");

            $('#jiaddressx').val(address[3])

            $("#jiaddress").citypicker("reset");
            $("#jiaddress").citypicker("destroy");
            $("#jiaddress").citypicker({
                province: address[0],
                city: address[1],
                district: address[2]
            });
        }else{
            $("#shouName").val($(p).children(".address_name").text())
            $("#shouPhone").val($(p).children(".address_phone").text())
            var address=$(p).children(".i_detail").text().split("-");

            $('#shouaddressx').val(address[3])

            $("#shouaddress").citypicker("reset");
            $("#shouaddress").citypicker("destroy");
            $("#shouaddress").citypicker({
                province: address[0],
                city: address[1],
                district: address[2]
            });
        }
        $("#bgmax").attr("style","display: none")
    }


    $(".close").click(function() {
        $("#bgmax").attr("style","display: none")
        $("#bgmin").attr("style","display: none")
    })

    $("#create-receive-analysis,#create-analysis").click(function() {
        $("#bgmin").attr("style","display: inline")
    })
    $("#leixing").click(function() {
        $("#xialaliebiao").attr("style","display: inline")
        $("#leixing i").removeClass().addClass("el-input__icon layui-icon layui-icon-up")
    })
    $("#xialaliebiao ul li").click(function() {
        $("#xialaliebiao").attr("style","display: none")
        $("#leixing i").removeClass().addClass("el-input__icon layui-icon layui-icon-down")
        $("#leixing input").val($(this).text())
        $("#goodsType").val($(this).val())
    })
    $("#kg label").click(function() {
        $(this).removeClass().addClass("el-radio is-checked").siblings("label").removeClass().addClass("el-radio")
    })


    var i=1;
    $("#lasp2").click(function () {

        if(i<50){
            i++;
        }
        $("#la4divs input").val(i)

    })

    $('#la4divs input').bind('input propertychange', function(){

        i=$(this).val()
    })


    $("#lasp1").click(function () {

        if(i>1){
            i--;
        }
        $("#la4divs input").val(i)

    })





    $("#la1").click(function() {
        $(this).children("span").first().removeClass().addClass("el-radio__input is-checked")
        $("#la2").children("span").first().removeClass().addClass("el-radio__input")
        $("#la3").children("span").first().removeClass().addClass("el-radio__input")
        $("#la4").children("span").first().removeClass().addClass("el-radio__input")
        $("#la4div").removeClass().addClass("el-input-number el-input-number--small is-disabled is-controls-right")
        $("#lasp1").removeClass().addClass("el-input-number__decrease is-disabled")
        $("#la4divs").removeClass().addClass("el-input el-input--small is-disabled")
        $("#la4divs input").attr("disabled","disabled")
    })
    $("#la2").click(function() {
        $(this).children("span").first().removeClass().addClass("el-radio__input is-checked")
        $("#la1").children("span").first().removeClass().addClass("el-radio__input")
        $("#la3").children("span").first().removeClass().addClass("el-radio__input")
        $("#la4").children("span").first().removeClass().addClass("el-radio__input")
        $("#la4div").removeClass().addClass("el-input-number el-input-number--small is-disabled is-controls-right")
        $("#lasp1").removeClass().addClass("el-input-number__decrease is-disabled")
        $("#la4divs").removeClass().addClass("el-input el-input--small is-disabled")
        $("#la4divs input").attr("disabled","disabled")
    })
    $("#la3").click(function() {
        $(this).children("span").first().removeClass().addClass("el-radio__input is-checked")
        $("#la1").children("span").first().removeClass().addClass("el-radio__input")
        $("#la2").children("span").first().removeClass().addClass("el-radio__input")
        $("#la4").children("span").first().removeClass().addClass("el-radio__input")
        $("#la4div").removeClass().addClass("el-input-number el-input-number--small is-disabled is-controls-right")
        $("#lasp1").removeClass().addClass("el-input-number__decrease is-disabled")
        $("#la4divs").removeClass().addClass("el-input el-input--small is-disabled")
        $("#la4divs input").attr("disabled","disabled")
    })
    $("#la4").click(function() {
        $(this).children("span").first().removeClass().addClass("el-radio__input is-checked")
        $("#la2").children("span").first().removeClass().addClass("el-radio__input")
        $("#la3").children("span").first().removeClass().addClass("el-radio__input")
        $("#la1").children("span").first().removeClass().addClass("el-radio__input")
        $("#la4div").removeClass().addClass("el-input-number el-input-number--small is-controls-right")
        $("#lasp1").removeClass().addClass("el-input-number__decrease")
        $("#la4divs").removeClass().addClass("el-input el-input--small")
        $("#la4divs input").removeAttr("disabled")
        $("#la4 input").val(i)
    })


    var beizhu=""
    var lists=$("#tixing span");
    for (var i = 0; i < lists.length; i++) {
        $("#tixing span").eq(i).click(function () {
            beizhu="";
            var a=$(this).attr("name");
            if(a==1){
                $(this).removeClass().addClass("prompt selectPrompt")
                $(this).attr("name","2");

            }else{
                $(this).removeClass().addClass("prompt")
                $(this).attr("name","1");

            }
            var list=$(".selectPrompt");
            for (var k = 0; k < list.length; k++) {
                beizhu+=$(".selectPrompt").eq(k).text()+","
            }
        })
    }







    $("#create-save-address input").click(function () {
        if(this.checked){
            $("#create-save-address input").val(1)
        }else{
            $("#create-save-address input").val(0)
        }
    })
    $("#create-receive-save input").click(function () {
        if(this.checked){
            $("#create-receive-save input").val(1)
        }else{
            $("#create-receive-save input").val(0)
        }

    })
    $("#tongyi").click(function () {
        //alert(this.checked)

    })
    var nini="";
    layui.use('layer', function(){
        var layer = layui.layer;
        nini= layui.layer;
        $("#tijiao").click(function () {

            if($("#jiName").val()==""){
                layer.msg("请填写寄件人")
            }else{
                if($("#jiPhone").val()==""){
                    layer.msg("请填写寄件号码")
                }else{
                    if($("#jiaddress").val()==""){
                        layer.msg("请填写寄件地址")
                    }else{
                        if($("#jiaddressx").val()==""){
                            layer.msg("请填写详细寄件地址")
                        }else{
                            if($("#shouName").val()==""){
                                layer.msg("请填写收件人")
                            }else{
                                if($("#shouPhone").val()==""){
                                    layer.msg("请填写收件号码")
                                }else{
                                    if($("#shouaddress").val()==""){
                                        layer.msg("请填写收件地址")
                                    }else{
                                        if($("#shouaddressx").val()==""){
                                            layer.msg("请填写详细收件地址")
                                        }else{
                                            if ($("#tongyi").prop("checked")==true){
                                                if(beizhu==""||$("#create-remark").val()==""){
                                                    layer.msg("请填写商品备注")
                                                }else {
                                                    $.ajax({
                                                        type: "POST",
                                                        url: "${pageContext.request.contextPath}/orderAddress/insertOrderAddress",
                                                        data: $("#myForm").serialize()+"&remarks="+beizhu+$("#create-remark").val(),
                                                        success: function(msg){
                                                            alert( "Data Saved: " + msg );
                                                        }
                                                    });
                                                }

                                            }else{
                                                layer.msg("同意快递服务协议,隐私政策才能寄件哦！")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }


        })

        $("#selectprice").click(function() {
            if ($("#test001").val()==""||$("#test002").val()=="") {
                layer.msg('请填写地址');
            } else{


                var x=30;
                var y=10;
                var aa=parseInt(Math.random ()*(x-y+1)+y)
                var z=10;
                var m=5;
                var ab=parseInt(Math.random ()*(z-m+1)+m)
                $("#oneprice").text(aa+" 元/kg")
                $("#twoprice").text(ab+" 元/kg")


            }

        });





    });

</script>


</body>

</html>
