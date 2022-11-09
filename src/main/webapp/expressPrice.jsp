<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="Description"/>
    <meta content="中通快递单号查询,网点查询,投诉电话查询,在线寄件" name="Keywords"/>
    <meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="searchtitle"/>
    <meta http-equiv="Pragma" content="no-cache"/>
    <meta http-equiv="Cache-Control" content="no-cache"/>
    <meta http-equiv="Expires" content="0"/>
    <title>运费时效 - 中通快递</title>
    <link rel="stylesheet" type="text/css" href="123css/expressPrice.css">
    <link rel="shortcut icon" type="image/x-icon" href="img/logo.ico" media="screen" />
    <link rel="stylesheet" href="layui/css/modules/laydate/default/laydate.css" media="all">
    <link  href="static/css/city-picker-one.css" rel="stylesheet"/>
</head>

<body>
<scirpt src="js/tingyun-rum.js?v=e21304b160"></scirpt>
<script type="text/javascript" src="static/js/jquery.js" ></script>
<script type="text/javascript" src="static/js/city-picker.data.js" ></script>
<script type="text/javascript" src="static/js/city-picker-one.js" ></script>
<link href="layui/css/layui.css" rel="stylesheet">
<script type="text/javascript" src="layui/layui.js" ></script>
<div id="header">
    <div class="header-main">
        <div class="header-left">
            <div class="logo-box">
                <img src="img/logo.png" alt="logo" class="logo">
            </div>

        </div>
        <div class="header-middle">
            <ul>
                <li><span  
                        class="js-home-page" >首页</span></li>
                <li class="business">
                    <span >物流业务</span>
                    <div class="business-menu clearboth international-add-new">
                        <div class="menu-box box-1">
                            <span class="menu-title">国内业务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <em>时效件</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-today">当天件</a>
									<a href="javascript:void(0)" class="menu-item js-business-rick">次晨达</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-morrow">次日达</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-onAlternateDays">隔日达</a>
                                </div>
                                <div class="menu_list">
                                    <em>增值业务</em>
                                    <a  href="javascript:void(0)" class="menu-item js-business-twoHours">尊享2小时</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-payOnDelivery">代收货款</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-supportValue">保价</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-stores">门店直发</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-freshDelivery">优鲜送</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-freightCollectExpressItem">到付件</a>
                                    <a  href="javascript:void(0)" class="menu-item js-business-signTheBillToReturn">签单返还</a>
                                </div>
                                <div class="menu_list">
                                    <em>数字产品</em>
                                    <a href="javascript:void(0)"
                                        class="menu-item js-business-electronicsSurfaceSingle">电子面单</a>
                                    <a href="javascript:void(0)"
                                        class="menu-item js-business-privacySurfaceSingle">隐私面单</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-cloudPrint">云打印</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-enterpriseOrder">企业下单
                                        <!-- <i>hot</i> -->
                                    </a>
                                    <a href="javascript:void(0)" class="menu-item js-business-recheneinheit">统一结算
                                        <!-- <i>hot</i> -->
                                    </a>
                                    <a href="javascript:void(0)" class="menu-item js-zop" target="_blank"
                                        id="nav_zop">开放平台</a>
                                    <a href="javascript:void(0)" class="menu-item js-zpa" target="_blank"
                                        id="nav_zpa">快递管家</a>

                                </div>
                                <div class="menu_list">
                                    <em>售后宝</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-afterSalesService">售后宝</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-2">
                            <span class="menu-title">国际&台港澳业务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <em>港台件</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-hongkong">香港专线</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-taiwan">台湾专线</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-hongkongDhl">香港DHL</a>
                                </div>
                                <div class="menu_list">
                                    <em>国际件</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-asia">东南亚自营运输网络</a>
                                    <a href="javascript:void(0)"class="menu-item js-business-cross">跨境业务</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-overseas">海外转运</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-localization">本地化落地配</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-warehousing">仓储</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-3">
                            <span class="menu-title">仓储业务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <em>仓储业务</em>
                                    <a href="javascript:void(0)" class="menu-item js-business-cloudChamber">关于云仓</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-serviceProducts">产品服务</a>
                                    <a href="javascript:void(0)" class="menu-item js-business-serviceScope">服务范围</a>
                                    <a href="javascript:void(0)"
                                        class="menu-item js-business-cooperativePartner">合作伙伴</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-4">
                            <span class="menu-title">冷链业务</span>
                        </div>
                    </div>
                </li>
                <li>
                    <span  class="active-nav" >客户服务</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-11">
                            <span class="menu-title">寄件服务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-express-ship">在线寄件</a>
                                    <a href="https://www.ztoglobal.com/" target="_blank" class="menu-item ">国际件</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-12">
                            <span class="menu-title">查询服务</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list long_one">
                                    <a href="javascript:void(0)" class="menu-item js-express-check">查件（物流追踪）</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-website">服务网点查询</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-price">运费时效查询</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-prohibited">违禁品查询</a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-box box-13">
                            <span class="menu-title">客户支持</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list long_one">
                                    <!--<a href="javascript:void(0)" class="menu-item js-express-complain">客户投诉电话</a>-->
                                    <a href="javascript:void(0)" class="menu-item js-express-questions">常见问题</a>
                                    <a href="javascript:void(0)" class="menu-item js-express-suggest">投诉建议</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span >加盟合作</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-6">
                            <span class="menu-title">加盟合作</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-express-outlets">加盟快递网点</a>
                                    <a href="javascript:void(0)" class="menu-item js-cooperate">商家合作</a>
                                    <a href="javascript:void(0)" class="menu-item js-supplier">供应商合作</a>
                                    <a href="http://supplier.zt-express.com/" class="menu-item" target="_blank">供应商门户</a>
                                    <a href="https://icloud.zto.com/#/welcome" class="menu-item" target="_blank">短信解决方案</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><span  
                        class="js-finance" >金融</span></li>
                <li>
                    <span  class="js-goHr">招聘</span>
<!--                    <div class="business-menu clearboth">-->
<!--                        <div class="menu-box box-9">-->
<!--                            <span class="menu-title">招聘</span>-->
<!--                            <div class="menu-room clearboth">-->
<!--                                <div class="menu_list">-->
<!--                                    <a href="http://hr.zto.com/index.html" class="menu-item" target="_blank">投递简历</a>-->
<!--                                    <a href="http://hr.zto.com/social/index.html" class="menu-item"-->
<!--                                        target="_blank">社会招聘</a>-->
<!--                                    <a href="http://hr.zto.com/school/index.html" class="menu-item"-->
<!--                                        target="_blank">校园招聘</a>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </li>
                <li>
                    <span >关于中通</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-7">
                            <span class="menu-title">关于中通</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list long_one">
                                    <em>企业介绍</em>
                                    <a href="javascript:void(0)" class="menu-item js-company-profile">企业概述</a>
                                    <a href="javascript:void(0)" class="menu-item js-corporate-development">中通大事记</a>
                                    <a href="javascript:void(0)" class="menu-item js-leadership-concern">领导关怀</a>
                                </div>
                                <div class="menu_list long_one">
                                    <em>企业文化</em>
                                    <a href="javascript:void(0)" class="menu-item js-corporate-culture">文化理念</a>
                                   
                                    <a href="javascript:void(0)" class="menu-item js-story">中通故事</a>
                                    
                                </div>
                                <div class="menu_list long_one">
                                    <em>企业展示</em>
                                    <a href="javascript:void(0)" class="menu-item js-enterprise-video">企业视频</a>
                                    <a href="javascript:void(0)" class="menu-item js-responsibility-honor">责任荣誉</a>
                                    <a href="javascript:void(0)" class="menu-item js-charity">中通公益</a>
                                </div>
                                <div class="menu_list long_one">
                                    <em>新闻动态</em>
                                    <a href="javascript:void(0)" class="menu-item js-new-list">公司动态</a>
                                    <a href="javascript:void(0)" class="menu-item js-industry-new">行业新闻</a>
                                </div>
                                <div class="menu_list long_one">
                                    <em>联系我们</em>
                                    <a href="javascript:void(0)" class="nav-item js-contact-us">联系我们</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <span >投资者关系</span>
                    <div class="business-menu clearboth">
                        <div class="menu-box box-14">
                            <span class="menu-title">投资者关系</span>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-investor-cn-index">投资者关系</a>
                                </div>
                            </div>
                            <div class="menu-room clearboth hktzz">
                                <div class="menu_list">
                                    <a href="javascript:void(0)" class="menu-item js-investor-hk-index">投資者關係</a>
                                </div>
                            </div>
                            <div class="menu-room clearboth">
                                <div class="menu_list">
                                    <a href="http://zto.investorroom.com/" class="menu-item" target="_blank">Investors</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="header-right">
            <div class="phone-number">
                <div class="phone-number-box">
                    <img src="js_01/phoneNumber.png" alt="全国统一热线">
                </div>
            </div>
            <c:if test="${empty customer}" >
                <a  href="login.html"  class="login">
                    <img id="skin-login-icon" style="top:2px;" class="login-img" src="static/picture/login.png" alt="登录"> <span class="login-text">登录</span>
                </a>
                <a href="register.html"  class="registere">
                    <img id="skin-register-icon" class="login-img" src="static/picture/register.png" alt="注册"> <span class="login-text">注册</span>
                </a>
            </c:if>
            <c:if test="${!empty customer}">
                <div class="users" style="position: absolute;top: 32px;
                                            right: 80px;
                                            padding-right: 10px;
                                            font-size: 12px;
                                            font-family: '宋体';
                                            color: #5e5e5e;
                                            border-right: 1px solid #eaeaea;">
                    <img src="static/picture/login.png" style="top:2px;" alt="用户">
                    <c:if test="${null!=customer.nickName}">
                        <a href="myZto.jsp" style="cursor: pointer;color: #25a4bb;">${customer.nickName}</a>
                    </c:if>
                    <c:if test="${null==customer.nickName}">
                        <a href="myZto.jsp" style="cursor: pointer;color: #25a4bb;">${customer.phone}</a>
                    </c:if>
                </div>
            </c:if>
            <div class="backold">
                <a href="https://en.zto.com/" target="_blank" title="Switch to English version">EN</a>
            </div>
            <div class="intl">
                <a href="https://www.ztoglobal.com/" target="_blank" title="Switch to intl ">intl</a>
            </div>
        </div>
    </div>
</div> <div id="js-header-wrap" class="header-wrap">
<div id="content">
	<div class="link">
		<ul>
			<li id="btn_customerService">
				<a href="javascript:;" target="_blank" id="contactUs" class="line-server">
					<div class="line-server-bgimg"></div>
					<p class="link-font">
						在线客服
					</p>	
				</a>
			</li>
			<li id="btn_complaintsSuggestions">
				<a href="https://my.zto.com/feedback"  class="complaint-suggestion js-express-suggest">
					<div class="complaint-suggestion-bgimg"></div>
					<p class="link-font">
						投诉建议	
					</p>	
				</a>
			</li>
			<li class="js-back-top">
				<a href="javaScript:void(0)" class="back-top">
					<div class="back-top-bgimg"></div>
					<p class="link-font">
						返回顶部
					</p>	
				</a>
			</li>
		</ul>
	</div>
</div>
</div>
<div id="banner">
    <div class="banner_box">
        <img src="js_01/express_banner.jpg">
    </div>
</div>
<div id="content">
    <div class="content-main">
        <div class="nav-zto js-nav-fixed">
            <div class="nav-zto-room">
                <h1>客户服务</h1>
                <ul>
                    <li>
                        <div class="nav-zto-font">
                <span class="nav-item js-express-ship">寄件服务
                  <i></i>
                </span>
                        </div>
                    </li>
                    <li>
                        <div class="nav-zto-font show">
                <span class="nav-item">查询服务
                  <i></i>
                </span>
                            <div class="nav-zto-menu">
                                <span class="menu-item js-express-check">查件（物流追踪）</span>
                                <span class="menu-item js-express-website">服务网点查询</span>
                                <span class="menu-item checked">运费时效查询</span>
                                <span class="menu-item js-express-prohibited">违禁品查询</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="nav-zto-font">
                <span class="nav-item">客服支持
                  <i></i>
                </span>
                            <div class="nav-zto-menu">
                                <!--<span class="menu-item js-express-complain">客户投诉电话</span>-->
                                <span class="menu-item js-express-questions">常见问题</span>
                                <span class="menu-item js-express-suggest">投诉建议</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <i class="jag"></i>
            </div>
        </div>
        <div class="express-cont overall price">
            <h2 class="express-title exPrice">运费时效查询</h2>

            <div class="price-cont">

                <form class="price-form" id="priceForm" style="width: 800px">
                    <div>
                        <span>初始地：</span>
                    </div>
                    <div>
                       <!-- <input type="text" data-toggle="city-picker"   name="start" readonly
                               placeholder="请选择省市区"
                               value=""/>-->
                        <div class="layui-form">
                            <div class="layui-form-item" id="area-picker">
                                <div class="layui-input-inline" style="width: 150px;">
                                    <select id="form_21" name="province" class="province-selector"  lay-filter="province-1">
                                        <option value="">请选择省</option>
                                    </select>
                                </div>
                                <div class="layui-input-inline" style="width: 150px;">
                                    <select id="form_22" name="city" class="city-selector"  lay-filter="city-1">
                                        <option value="">请选择市</option>
                                    </select>
                                </div>
                                <div class="layui-input-inline" style="width: 150px;">
                                    <select id="form_23" name="county" class="county-selector"  lay-filter="county-1">
                                        <option value="">请选择区</option>
                                    </select>
                                </div>

                            </div>
                            <div id="yz05" style="color: red;font-size: 11px;display: none">a</div>
                        </div>

                    </div>
                    <div>
                        <span>目的地：</span>
                    </div>
                    <div>
                        <div class="layui-form">
                            <div class="layui-form-item" id="area-picker_01">
                                <div class="layui-input-inline" style="width: 150px;">
                                    <select id="form_31" name="province1" class="province-selector"  lay-filter="province-2">
                                        <option value="">请选择省</option>
                                    </select>
                                </div>
                                <div class="layui-input-inline" style="width: 150px;">
                                    <select id="form_32" name="city1" class="city-selector"  lay-filter="city-2">
                                        <option value="">请选择市</option>
                                    </select>
                                </div>
                                <div class="layui-input-inline" style="width: 150px;">
                                    <select id="form_33" name="county1" class="county-selector"  lay-filter="county-2">
                                        <option value="">请选择区</option>
                                    </select>
                                </div>

                            </div>
                            <div id="yz06" style="color: red;font-size: 11px;display: none">a</div>
                        </div>
                    </div>
                    <div class="price-txtbox">
                        <span>重量：</span>
                        <input type="text" class="price-txt weight" id="weight" name="weight" value="1"
                               onkeyup="this.value=this.value.replace(/[^\d.]/g,'')"
                               onafterpaste="this.value=this.value.replace(/[^\d.]/g,'')"/>
                        <em class="weight-unit">KG</em>
                    </div>
                    <div class="price-txtbox">
                        <span>寄件时间：</span>
                        <input type="text" class="layui-input" id="test1" placeholder="yyyy-MM-dd" style="border: white;padding-top: 10px;"/>
                        <i class=" time-input-icon weight-unit" style=" cursor: pointer;"/>
                    </div>
                    <input  type="button" class="price-btn" data-type="0" value="查询"/>
                </form>
            </div>

            <div id="jj" class="price-result" style="display: none">
                <div class="result-item">
                    <div class="product-type">产品类型</div>
                    <div class="product-weight">实际计费重量</div>
                    <div class="product-time">预估送达时间</div>
                    <div class="product-price">预估费用</div>
                    <div class="operatione"></div>
                </div>
                <div class="result-item result-item-list">
                    <div class="product-type">
                        <span class="item-number">
                        标准快递
                        </span>

                    </div>
                    <div class="product-weight">
                        <span class="item-number">
                                <i id="resultWeight">0</i>
                                <em>KG</em>
                              </span>
                    </div>
                    <div class="product-time">
                            <span class="item-number">
                        <i id="product-time">暂无数据</i>
                        </span>
                    </div>
                    <div class="product-price">
                        <span class="item-number">
                                <i id="resultPrice" class="resultPriceClass">0</i>
                                <em>元</em>
                              </span></div>
                    <div class="operatione"><a id="jijian" class="ship_a js-express-ship">在线寄件</a></div>
                </div>

            </div>
            <div class="price-hint" id="123" style="display: none">
            <strong>说明</strong>
            <p class="newYearTip"><span class="newYearTip-text">注：春节期间寄快递将额外收取一定服务费，详见春节活动</span> ></p>
            <p>尊享定时取服务价格以选择服务时公示为准。</p>
            <p>此报价重量是按1进位处理。</p>
            <p class="p_text"><span>此报价为指导价仅供参考，详情请咨询中通当地营业网点</span>
                <a class="js-express-website">[网点分布]</a>。</p>
            <p class="gray">注：轻抛货的计费重量按货物长×高×宽（CM）÷6000计算。
                <br/>不规则货物，包括圆锥、圆柱状物体按长方体计算，为长、宽、高三个方向的最大尺寸相乘。计算结果仅供参考！</p>
            </div>
        </div>
    </div>
</div>
<div id="js-footer-wrap">
  <div id="about" class="js-footer">
    <div class="about-main">
      <div class="about">
        <div class="about-font">
          <ul>
            <h3>业务产品</h3>
            <span></span>
            <li><a href="/business/twoHours.html">增值业务</a></li>
            <li><a href="/business/hongkong.html">港台件</a></li>
            <li><a href="/business/asia.html">国际件</a></li>
            <li><a href="/business/afterSalesService.html">售后服务</a></li>
          </ul>
          <ul>
            <h3>客户服务</h3>
            <span></span>
            <li><a href="https://my.zto.com/create">在线寄件</a></li>
            <li><a href="/express/expressCheck.html">运单查询</a></li>
            <li><a href="/express/expressWebsite.html">服务网点查询</a></li>
            <li><a href="/express/expressPrice.html">运费时效查询</a></li>
            <li><a href="/express/expressProhibited.html">违禁品查询</a></li>
            <li><a href="https://kfapi.zto.com/im?channel=official"  target="_blank">客服支持</a></li>
          </ul>
          <ul>
            <h3>关于中通</h3>
            <span></span>
            <li><a href="/companyIntroduce/companyProfile.html">企业概况</a></li>
            <li><a href="/companyIntroduce/corporateCulture.html">企业文化</a></li>
            
            <li><a href="/companyIntroduce/responsibilityHonor.html">责任与荣誉</a></li>
            <li><a href="/companyIntroduce/newList.html">新闻动态</a></li>
            <li><a href="/companyIntroduce/contactUs.html">联系我们</a></li>
          </ul>
          <ul>
            <h3>加盟合作</h3>
            <span></span>
            <li><a href="/league/expressOutlets.html">网点加盟</a></li>
            <li><a href="/league/cooperate.html">商家合作</a></li>
            <li><a href="/league/supplier.html">供应商合作</a></li>
            <li><a href="http://supplier.zt-express.com/" class="menu-item" target="_blank">供应商门户</a></li>
            <li><a href="https://icloud.zto.com/#/welcome" class="menu-item" target="_blank">短信解决方案</a></li>
          </ul>
          <ul>
            <h3>其他</h3>
            <span></span>
            <li><a href="http://hr.zto.com/" target="_blank">人才招聘</a></li>
            <li><a href="http://zto.investorroom.com/" target="_blank">Investors</a></li>
            <!-- <li><a href="javascript:viod(0)" target="_blank">英文</a></li> -->
          </ul>
        </div>
        <div class="about-img">
          <h3>关于我们</h3>
          <span></span>
          <ul class="friendLink">
            <li id="btn_foorterWechat">
              <a><span class="wechat"></span></a>
              <div class="img-box wechat-box">
                <img src="js_01/wechat.png" class="wechat-img detail-img" />
              </div>
            </li>
            <li id="btn_foorterWeibo">
              <a href="http://weibo.com/zto200258" target="_blank"><span class="weibo"></span></a>
            </li>
            <li id="btn_foorterQQ">
              <a><span class="qq"></span></a>
              <div class="img-box qq-box">
                <img src="js_01/qq.png" class="qq-img detail-img" />
              </div>
            </li>
            <li id="btn_foorterAlipay">
              <a><span class="alipay"></span></a>
              <div class="img-box alipay-box">
                <img src="js_01/alipay-1.png" class="alipay-img detail-img" />
              </div>
            </li>
            <li id="btn_footerMinPhone">
              <a><span class="min-phone"></span></a>
              <div class="img-box app-box">
                <img src="js_01/app.png" class="app-img detail-img" />

              </div>
            </li>
            <li>
              <a href="https://kfapi.zto.com/im?channel=official" target="_blank"><span class="service"></span></a>
            </li>
          </ul>
          <div class="tel-box">
            <img src="js_01/tel1.png" alt="全国统一客服热线" class="tel" />
            <img src="js_01/phone1.png" alt="全国统一客服热线" class="phone1" />
            <span></span>
            <img src="js_01/tel2.png" alt="全国统一客服热线" class="tel" />
            <img src="js_01/phone2.png" alt="全国统一客服热线" class="phone2" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="footer">
    <div class="footer-main">
      <div class="footer-left">
        <div class="logo"></div>
      </div>
      <div class="footer-middle">
        <ul>
          <li><a href="/service/service.html" target="_blank" class="service-nav">快递服务协议</a></li>
          <li><a href="/legal&privacy/privacy.html" target="_blank">隐私政策</a></li>
          <li><a href="/legal&privacy/legal.html" target="_blank">法律声明</a></li>
          <li><a href="https://sec.zto.com/" target="_blank">安全响应中心</a></li>
          <li><a href="http://www.spb.gov.cn/" target="_blank">国家邮政局</a></li>
          <li><a href="http://www.cea.org.cn/" target="_blank" class="express-nav">快递协会</a></li>
        </ul>
        <p>
          总部地址：上海市青浦区华新镇华志路1685号&nbsp;邮政编码：201708
        </p>
        <p>简历投递邮箱：<span>zp-hr@zto.com</span></p>
      </div>
      <div class="footer-right">
        <p style="line-height: 1.5; margin-bottom:6px">
          已通过ISO27001:2013 信息安全认证<br/>
          中通版权所有&nbsp;中通快递股份有限公司&copy;版权所有&nbsp;<br /><a href="http://beian.miit.gov.cn" target="_blank" class="num">沪ICP备13044869号-2</a>
        </p>
        <div class="administration">
          <div class="industry bg-img-cursor"></div>
          <div class="credit bg-img-cursor"></div>
          <div class="sincerity bg-img-cursor"></div>
          <div class="net bg-img-cursor"></div>

          <img class="bg-img-cursor" src="https://static.anquan.org/static/outer/image/aqkx_83x30.png" />
        </div>
      </div>
    </div>
  </div>
</div>

</body>
<script>
    $("#jijian").click(function () {
        var address_01 = $("#form_21").val()+"-"+$("#form_22").val()+"-"+$("#form_23").val()
        var address_02 = $("#form_31").val()+"-"+$("#form_32").val()+"-"+$("#form_33").val()
        var test1=$("#test1").val()
        var  protime =$("#product-time").val()
        var weight =$("#weight").val()
        var resultprice =$("#resultPrice").text();
        alert("初始地："+address_01+"--目的地："+address_02+"--寄件时间:"+test1+"--预计到达时间："+protime+"--重量："+weight+"--金额："+resultprice);
    })
    $(".price-btn").click(function () {
        var address_01 = $("#form_21").val()+"-"+$("#form_22").val()+"-"+$("#form_23").val()
        var address_02 = $("#form_31").val()+"-"+$("#form_32").val()+"-"+$("#form_33").val()
        var a = new Array();
        var b = new Array();
        var time01 = new Array();
        var time02 = new Array();
        var time1 = "01,03,05,07,08,10,12,"
        time01 = time1.split(",");
        var time2 = "04,06,09,11"
        time02 = time2.split(",");
        a =$("#test1").val().split(" ");
        b =a[0].split("-");
        var c = 0;
        $("#resultWeight").text($("#weight").val());
        var price =0;
        if($("#form_21").val() == $("#form_31").val()){
            price= $("#weight").val()*6+10
            $("#product-time").text(a[0])
        }else{
            /*var timeabc = new Array();
            timeabc =b[1].split("");*/
            var abc = parseInt(b[1]);
            var abce = parseInt(b[2]);
            price= $("#weight").val()*10+4
            for(var i = 0 ; i<time01.length; i++){
                if(b[1] == time01[i] && b[2] == 31){
                    $("#product-time").text(b[0]+"-"+(abc+1)+"-"+"1")
                    c = 1;
                }
            }
            for(var j = 0 ; j<time02.length; j++){
                if(b[j] == time02[j] && b[2] == 30){
                    $("#product-time").text(b[0]+"-"+(abc+1)+"-"+"1")
                    c=2 ;
                }
            }
            if(b[1] == "02" && b[2] == 28){
                $("#product-time").text(b[0]+"-"+(abc+1)+"-"+"1")
                c =3 ;
            }
            if(c == 0){
                $("#product-time").text(b[0]+"-"+b[1]+"-"+(abce+1))
            }
        }
        $("#resultPrice").text(price);
        $("#123").show();
        $(".price-result").show();
    })
</script>
<script type="text/javascript">
    //配置插件目录
    layui.config({
        base: './mods/'
        , version: '1.0'
    });
    //一般直接写在一个js文件中
    layui.use(['layer', 'form', 'laydate','layarea'], function () {
        var layer = layui.layer
            , form = layui.form
            , layarea = layui.layarea;
        var laydate = layui.laydate;

        layarea.render({
            elem: '#area-picker',
            change: function (res) {
                //选择结果
                console.log(res);
            }
        });
        layarea.render({
            elem: '#area-picker_01',
            change: function (res) {
                //选择结果
                console.log(res);
            }
        });
        //常规用法
        laydate.render({
            elem: '#test1'
            ,type: 'datetime'
        });

    });
</script>
</html>
<script src="123js/bundle.js"></script>
<script src="https://libs.zto.cn/lib/jquery-validate/1.14.0/jquery.validate.min.js?v=a7b0833ed3"></script>
<script src="layui/lay/modules/laydate.js"></script>
<script src="123js/public.js"></script>
<!-- <script src="./../js/prov.js?v=4df278eb6a"></script> -->
<!-- <script src="https://libs.zto.cn/dynamicdata/allregion.js"></script> -->
<!-- <script src="https://libs.zto.cn/dynamicdata/allRegion-gat.js"></script> -->
<script src="123js/citySetComplain.js"></script>
<!-- <script src="https://libs.zto.cn/dynamicdata/allcountry.js"></script> -->
<!-- <script src="./../js/citySetPrice.js?v=bbf650f2ca"></script> -->
<script src="123js/expressPrice.js"></script>
<script src="static/js/jquery.js"></script>