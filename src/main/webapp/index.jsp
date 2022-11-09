<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<title>首页 - 中通快递</title>
		<meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="Description" />
		<meta content="中通快递单号查询,网点查询,投诉电话查询,在线寄件" name="Keywords" />
		<meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="searchtitle" />
		<link rel="shortcut icon" type="image/x-icon" href="img/logo.ico" media="screen" />
		<link rel="stylesheet" type="text/css" href="static/css/animate.css">
		<link rel="stylesheet" type="text/css" href="static/css/index.css">

		<%--<script type="text/javascript" src="static/js/jquery-3.5.1.js" ></script>--%>
	</head>

	<body>
	<div id="app">
		<div class="video-window">
			<div class="video-close"></div>
			<div class="video-room">
				<video id="my-video" class="video-js" controls preload="auto" width="1000" height="750" src="https://fscdn.zto.com/fs8/M04/87/06/wKhBEGAbu5yAcid-BEZmst5JA3o785.mp4"></video>
			</div>
		</div>
		<div id="header">
			<div class="header-main">
				<div class="header-left">
					<div class="logo-box">
						<img src="static/picture/logo.png" alt="logo" id="skin-logo" class="logo">
					</div>
				</div>
				<div class="header-middle">
					<ul>
						<li><span class="js-home-page">首页</span></li>
						<li class="business">
							<span>物流业务</span>
							<div class="business-menu clearboth international-add-new">
								<div class="menu-box box-1">
									<span class="menu-title sub-menu-item">国内业务</span>
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
											<a href="javascript:void(0)" class="menu-item js-business-twoHours">尊享2小时</a>
											<a href="javascript:void(0)" class="menu-item js-business-payOnDelivery">代收货款</a>
											<a href="javascript:void(0)" class="menu-item js-business-supportValue">保价</a>
											<a href="javascript:void(0)" class="menu-item js-business-stores">门店直发</a>
											<a href="javascript:void(0)" class="menu-item js-business-freshDelivery">优鲜送</a>
											<a href="javascript:void(0)" class="menu-item js-business-freightCollectExpressItem">到付件</a>
											<a href="javascript:void(0)" class="menu-item js-business-signTheBillToReturn">签单返还</a>
										</div>
										<div class="menu_list">
											<em>数字产品</em>
											<a href="javascript:void(0)" class="menu-item js-business-electronicsSurfaceSingle">电子面单</a>
											<a href="javascript:void(0)" class="menu-item js-business-privacySurfaceSingle">隐私面单</a>
											<a href="javascript:void(0)" class="menu-item js-business-cloudPrint">云打印</a>
											<a href="javascript:void(0)" class="menu-item js-business-enterpriseOrder">企业下单
												<!-- <i>hot</i> -->
											</a>
											<a href="javascript:void(0)" class="menu-item js-business-recheneinheit">统一结算
												<!-- <i>hot</i> -->
											</a>
											<a href="javascript:void(0)" class="menu-item js-zop" target="_blank" id="nav_zop">开放平台</a>
											<a href="javascript:void(0)" class="menu-item js-zpa" target="_blank" id="nav_zpa">快递管家</a>

										</div>
										<div class="menu_list">
											<em>售后宝</em>
											<a href="javascript:void(0)" class="menu-item js-business-afterSalesService">售后宝</a>
										</div>
									</div>
								</div>
								<div class="menu-box box-2">
									<span class="menu-title sub-menu-item">国际&台港澳业务</span>
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
											<a href="javascript:void(0)" class="menu-item js-business-cross">跨境业务</a>
											<a href="javascript:void(0)" class="menu-item js-business-overseas">海外转运</a>
											<a href="javascript:void(0)" class="menu-item js-business-localization">本地化落地配</a>
											<a href="javascript:void(0)" class="menu-item js-business-warehousing">仓储</a>
										</div>
									</div>
								</div>
								<div class="menu-box box-3">
									<span class="menu-title sub-menu-item">仓储业务</span>
									<div class="menu-room clearboth">
										<div class="menu_list">
											<em>仓储业务</em>
											<a href="javascript:void(0)" class="menu-item js-business-cloudChamber">关于云仓</a>
											<a href="javascript:void(0)" class="menu-item js-business-serviceProducts">产品服务</a>
											<a href="javascript:void(0)" class="menu-item js-business-serviceScope">服务范围</a>
											<a href="javascript:void(0)" class="menu-item js-business-cooperativePartner">合作伙伴</a>
										</div>
									</div>
								</div>

							</div>
						</li>
						<li>
							<span>客户服务</span>
							<div class="business-menu clearboth">
								<div class="menu-box box-11">
									<span class="menu-title sub-menu-item">寄件服务</span>
									<div class="menu-room clearboth">
										<div class="menu_list">
											<a href="javascript:void(0)" class="menu-item js-express-ship">在线寄件</a>
											<a href="https://www.ztoglobal.com/" target="_blank" class="menu-item ">国际件</a>
										</div>
									</div>
								</div>
								<div class="menu-box box-12">
									<span class="menu-title sub-menu-item">查询服务</span>
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
									<span class="menu-title sub-menu-item">客户支持</span>
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
							<span>加盟合作</span>
							<div class="business-menu clearboth">
								<div class="menu-box box-6">
									<span class="menu-title sub-menu-item">加盟合作</span>
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
						<li><span class="js-finance">金融</span></li>
						<li>
							<span class="js-goHr">招聘</span>

						</li>
						<li>
							<span>关于中通</span>
							<div class="business-menu clearboth">
								<div class="menu-box box-7">
									<span class="menu-title sub-menu-item">关于中通</span>
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
							<span>投资者关系</span>
							<div class="business-menu clearboth">
								<div class="menu-box box-14">
									<span class="menu-title sub-menu-item">投资者关系</span>
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
							<img id="skin-tel" src="static/picture/phonenumber.png" alt="全国统一热线">
						</div>
					</div>
					<input type="hidden" id="customerId" value="${customer.customerId}">
					<c:if test="${empty customer}" >
						<a  href="login.html"  class="logins">
							<img id="skin-login-icon" class="login-img" src="static/picture/login.png" alt="登录"> <span class="login-text">登录</span>
						</a>
						<a href="register.html"  class="registeres">
							<img id="skin-register-icon" class="login-img" src="static/picture/register.png" alt="注册"> <span class="login-text">注册</span>
						</a>
					</c:if>
					<c:if test="${!empty customer}">
						<div class="users" style="display: block">
							<img src="static/picture/login.png" alt="用户">
							<c:if test="${null!=customer.nickName}">
								<a href="myZto.jsp" style="cursor: pointer;">${customer.nickName}</a>
							</c:if>
							<c:if test="${null==customer.nickName}">
								<a href="myZto.jsp" style="cursor: pointer;">${customer.phone}</a>
							</c:if>
						</div>
					</c:if>
					<div class="backold">
						<a href="https://en.zto.com/" id="enBtn" class="langBtn" target="_blank" title="Switch to English version">EN</a>
					</div>
					<div class="intl">
						<a href="https://www.ztoglobal.com/" id="cnBtn" class="langBtn" target="_blank" title="Switch to intl ">intl</a>
					</div>
				</div>
			</div>
		</div>
		<div id="js-header-wrap" class="header-wrap">
			<div id="content">
				<div class="link">
					<ul>
						<li id="btn_customerService">
							<a href="javascript:;" target="_blank" id="contactUs" class="line-a line-server">
								<div class="line-server-bgimg">
									<img id="skin-float-icon-0" src="static/picture/float_icon_1.png"></div>
								<p class="link-font">
									在线客服
								</p>
							</a>
						</li>
						<li id="btn_complaintsSuggestions">
							<a href="https://my.zto.com/feedback" class="line-a complaint-suggestion js-express-suggest">
								<div class="complaint-suggestion-bgimg">
									<img id="skin-float-icon-1" src="static/picture/float_icon_2.png"></div>
								<p class="link-font">
									投诉建议
								</p>
							</a>
						</li>
						<li class="js-back-top">
							<a href="javaScript:void(0)" class="line-a back-top">
								<div class="back-top-bgimg">
									<img id="skin-float-icon-2" src="static/picture/float_icon_3.png"></div>
								<p class="link-font">
									返回顶部
								</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="wechat-popup" id="wechatPopup">
			<div class="wechat-popup-box">
				<span class="wechat-popup-close" id="wechatPopupClose"></span>
				<img src="static/picture/wechat_big.png" />
			</div>
		</div>
		<div class="wechat-hint" id="wechatHint">
			<span class="wechat-hint-close" id="wechatHintClose"></span>
			<img id="wechatHint-img" src="static/picture/wechat_small.png" />
		</div>
		<div id="content">
			<div class="index-banner">
				<div class="banner-box">
					<a href="" id="imgone" class="banner-item toZtts" style="display: inline;"><img src="static/images/wKhBD2C3KciAUdj4AAPPRetH3Ug651.jpeg"></a>
					<div class="banner-num"><span id="dotone" class="dot cur">1</span><span id="dottwo" class="dot">2</span></div>
				</div>
				<div class="content-main index-main">
					<div class="bill-search">
						<div class="bill-title">
							<h2 class="bill-title-way"><img src="static/picture/search_icon.png"><span>运单号查询</span></h2>
							<h2 class="bill-title-phone" id="indexPhoneSearch"><img
                                src="static/picture/search_phone_icon.png"><span>手机号查询</span></h2>
						</div>
						<div class="search_txt" id="tab_onlineShipping">
							<!--<input type="text" id="txtbill" class="query_txt" placeholder="在此输入单号，可同时查询10条！" onkeyup="this.value = this.value.replace(/\D/g, '')" onafterpaste="this.value=this.value.replace(/\D/g,'')" />-->
							<textarea type="text" class="hidden phone-search-input" maxlength="11" placeholder="输入手机号"></textarea>
							<textarea id="txtbill" class="query_txt" placeholder="输入1个或最多10个运单号（多个请用；隔开）" onkeyup="this.value = this.value.replace(/[\u4e00-\u9fa5_]/g, '')" onafterpaste="this.value=this.value.replace(/[\u4e00-\u9fa5_]/g, '')"></textarea>
						</div>

						<div class="search_btn" id="btn_onlineTracking">确定</div>
					</div>
					<div class="shortcut-menu">
						<a class="menu-item js-express-ship item-1" id="btn_onlineShipping">
							<div class="menu-icon">
								<img src="static/picture/index_icon1_1.png">
							</div>
							<span>在线寄件</span>
						</a>
						<a class="menu-item js-express-website item-2" id="btn_siteQuery">
							<div class="menu-icon">
								<img src="static/picture/index_icon2_1.png">
							</div>
							<span>服务网点查询</span>
						</a>
						<a class="menu-item js-express-price item-3" id="btn_offerTime">
							<div class="menu-icon">
								<img src="static/picture/index_icon3_1.png">
							</div>
							<span>运费时效查询</span>
						</a>
						<a class="menu-item js-express-complain item-4" id="btn_customerServiceSupport" href="https://kfapi.zto.com/im?channel=official" target="_blank">
							<div class="menu-icon">
								<img src="static/picture/index_icon4_1.png">
							</div>
							<span>客服支持</span>
						</a>
					</div>
				</div>
			</div>
			<div class="index-business">
				<div class="content-main index-main">
					<div class="clearSet">
						<div class="businessMenu">
							<span class="businessMenu-item checked" id="nav_business">物流业务<i></i></span>
							<span class="businessMenu-item" id="nav_E-commerceBusiness">电商业务<i></i></span>
							<span class="businessMenu-item" id="nav_warehousingBusiness">仓储业务<i></i></span>
							<!-- <span class="businessMenu-item">金融业务<i></i></span> -->
						</div>
						<div class="business-content">
							<div class="business-item show">
								<div class="item-menu">
									<span class="itemMenu-item checked">国内业务</span>
									<span class="itemMenu-item">国际&台港澳业务</span>
									<!-- <span class="itemMenu-item">仓储业务</span> -->
								</div>
								<div class="item-content">
									<div class="item-box star clearboth show" id="wuliuIconList">
										<div class="item-title labelBg-1">
											<span>明星产品推荐</span>
										</div>
										<div class="box-option js-business-privacySurfaceSingle">
											<img src="static/picture/business_icon1_1.jpg">
											<strong>隐私面单</strong>
											<em>个人信息，专业保护</em>
										</div>
										<div class="box-option js-business-freshDelivery">
											<img src="static/picture/business_icon1_2.jpg">
											<strong>优鲜送</strong>
											<em>中转派送，为您优先</em>
										</div>
										<div class="box-option js-business-cloudPrint">
											<img src="static/picture/business_icon1_3.jpg">
											<strong>云打印</strong>
											<em>轻松下单，极速打印</em>
										</div>
										<div class="box-option js-business-electronicsSurfaceSingle">
											<img src="static/picture/business_icon1_6.jpg">
											<strong>电子面单</strong>
											<em>打印结算，高效精准</em>
										</div>
										<div class="box-option js-business-payOnDelivery">
											<img src="static/picture/business_icon1_4.jpg">
											<strong>货到付款</strong>
											<em>闪电返款，周期灵活</em>
										</div>
										<div class="box-option js-business-supportValue">
											<img src="static/picture/business_icon1_5.jpg">
											<strong>保价</strong>
											<em>安全无忧，贴心保障</em>
										</div>
									</div>
									<div class="item-box star clearboth" id="gjIconList">
										<div class="item-title labelBg-1">
											<span>明星产品推荐</span>
										</div>
										<div class="box-option js-business-asia">
											<img src="static/picture/business_icon2_1_a.png">
											<strong>东南亚专线</strong>
											<em>自营网点，品质保证</em>
										</div>
										<div class="box-option js-business-cross">
											<img src="static/picture/business_icon2_2.jpg">
											<strong>跨境业务</strong>
											<em>渠道多元，价格优惠</em>
										</div>
										<!--<div class="box-option js-business-australia">-->
										<!--<img src="static/picture/business_icon2_3.jpg">-->
										<!--<strong>新澳宝</strong>-->
										<!--<em>中国直发澳洲，5-7天可达</em>-->
										<!--</div>-->
										<div class="box-option js-business-overseas">
											<img src="static/picture/business_icon2_4.jpg">
											<strong>海外转运</strong>
											<em>操作便利，性价比高</em>
										</div>
										<div class="box-option js-business-localization">
											<img src="static/picture/business_icon2_5.jpg">
											<strong>本地化落地配</strong>
											<em>一单到底，时效保证</em>
										</div>
										<div class="box-option js-business-more">
											<img src="static/picture/business_icon2_6.jpg">
											<strong>查看全部</strong>
											<em>了解更多国际快递信息</em>
										</div>
									</div>
								</div>
							</div>
							<div class="business-item">
								<div class="superiority">以休闲食品、生活用品、生鲜果蔬等为主营的电子商务平台，依托中通快递进行商品配送，实现高效配送一体化</div>
								<div class="item-content">
									<div class="item-box star clearboth show nocur" id="bussIconList">
										<div class="item-title labelBg-2">
											<span>平台优势</span>
										</div>
										<div class="box-option">
											<img src="static/picture/business_icon4_1.jpg">
											<strong>全新创客模式</strong>
											<em>创客分享消费获取佣金</em>
										</div>
										<div class="box-option">
											<img src="static/picture/business_icon4_2.jpg">
											<strong>配送一体化</strong>
											<em>依托快递行业高覆盖，配送高效</em>
										</div>
										<div class="box-option">
											<img src="static/picture/business_icon4_3.jpg">
											<strong>商品时效</strong>
											<em>原产地商家合作，确保新鲜、绿色、优质</em>
										</div>
										<div class="box-option">
											<img src="static/picture/business_icon4_4.jpg">
											<strong>推广强度</strong>
											<em>多渠道，精准定向，辐射范围广</em>
										</div>
									</div>
								</div>
							</div>
							<div class="business-item">
								<div class="item-content">
									<div class="superiority">专业的第三方物流供应链服务商，完善“互联网+物流”生态圈，降低社会物流成本。</div>
									<div class="item-content">
										<div class="item-box star clearboth show" id="cangIconList">
											<div class="item-title labelBg-3">
												<span>仓储服务特色</span>
											</div>
											<div class="box-option js-business-serviceProducts">
												<img src="static/picture/business_icon33_1.jpg">
												<strong>物流信息服务</strong>
												<em>WMS仓储管理系统、WCS自动拼箱系统...</em>
											</div>
											<div class="box-option js-business-serviceProducts">
												<img src="static/picture/business_icon33_2.jpg">
												<strong>仓储管理</strong>
												<em>入仓管理、收货清点...</em>
											</div>
											<div class="box-option js-business-serviceProducts">
												<img src="static/picture/business_icon33_3.jpg">
												<strong>方案设计</strong>
												<em>运营问题诊断、运营数据分析...</em>
											</div>
											<div class="box-option js-business-serviceProducts">
												<img src="static/picture/business_icon33_4.jpg">
												<strong>IT系统支持</strong>
												<em>订单管理系统、分仓管理系统...</em>
											</div>
											<div class="box-option js-business-serviceProducts">
												<img src="static/picture/business_icon33_5.jpg">
												<strong>物流配送服务</strong>
												<em>为企业提供干线运输、区域配送...</em>
											</div>
											<div class="box-option js-business-serviceProducts">
												<img src="static/picture/business_icon33_6.jpg">
												<strong>呼叫及售后服务</strong>
												<em>为企业提供统一的货物在途跟踪、业务咨询...</em>
											</div>
										</div>
									</div>
									<!-- <p class="storage-hint">
                            <strong>服务对象</strong>
                            <span>服务于电子商务经营中有仓储、加工、配送需求的商家，如：电子商务中平台类企业、平台内运营商家、独立B2C等；</span>
                        </p> -->
								</div>
							</div>
						</div>
					</div>
					<div class="index-title" id="advantages">
						<h3>我们的优势</h3>
						<em></em>
						<i></i>
					</div>
				</div>
			</div>
			<div class="index-advantage">
				<img class="advantage-banner" src="static/picture/advantage_banner.jpg">
				<div class="content-main index-main advantage-content">
					<span class="advantage-btn prev"></span>
					<span class="advantage-btn next"></span>
					<div class="advantage-cont">
						<div class="advantage-room clearboth">
							<div class="advantage-box show">
								<div class="advantage-title">
									<strong>雄厚的品牌实力</strong>
									<i></i>
									<em>首家同时在美国、香港两地上市的快递企业</em>
								</div>
								<div class="advantage-list clearboth">
									<div class="advantage-item">
										<img src="static/picture/advantage_1.png" alt="">
										<em>转运中心91个</em>
									</div>
									<div class="advantage-item">
										<img src="static/picture/advantage_2.png">
										<em>网络通达99%以上的区县</em>
									</div>
									<div class="advantage-item">
										<img src="static/picture/advantage_3.png">
										<em>总体客户满意度排名前3位</em>
									</div>
								</div>
								<p class="advantage-hint">* 数据截至2020年9月30日
									<p>
							</div>
							<div class="advantage-box">
								<div class="advantage-title">
									<strong>高效的自动化设备</strong>
									<i></i>
									<em>自动扫描仪、自动拍照、动态秤等省时省力更精准</em>
								</div>
								<div class="advantage-list clearboth">
									<div class="advantage-item">
										<img src="static/picture/advantage_4.png">
										<em>每天节省2小时</em>
									</div>
									<div class="advantage-item">
										<img src="static/picture/advantage_5.png">
										<em>平均节约4名员工</em>
									</div>
									<div class="advantage-item">
										<img src="static/picture/advantage_6.png">
										<em>减少误差和失误</em>
									</div>
								</div>
							</div>
							<div class="advantage-box">
								<div class="advantage-title">
									<strong>先进的技术保证</strong>
									<i></i>
									<em>智能分拣系统、视频监控系统、GPS全球定位系统等保证中通网络高速运转</em>
								</div>
								<div class="advantage-list clearboth">
									<div class="advantage-item">
										<img src="static/picture/advantage_7.png">
										<em>精准高效分拣</em>
									</div>
									<div class="advantage-item">
										<img src="static/picture/advantage_8.png">
										<em>全程安全监控</em>
									</div>
									<div class="advantage-item">
										<img src="static/picture/advantage_9.png">
										<em>实时定位信息</em>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="advantage-num">
						<span class="num-item checked"></span>
						<span class="num-item"></span>
						<span class="num-item"></span>
					</div>
				</div>
			</div>
			<div class="index-product">
				<div class="content-main index-main">
					<div class="index-title" id="successful">
						<h3>成功案例</h3>
						<em></em>
						<i></i>
					</div>
					<div class="product_list clearboth">
						<a href="case/personage.html" class="product_item" id="btn_sincereService">
							<span class="item-img">
                            <img src="static/picture/personage01.jpg">
                        </span>
							<span href="javascript:void(0)" class="item-text">
                            <span class="product_item_title">诚信服务</span>
							<em class="product_item_text">每一次信赖 都是一份感动</em>
							<i></i>
							</span>
						</a>
						<a href="case/merchant.html" class="product_item" id="btn_businessCooperation">
							<span class="item-img">
                            <img src="static/picture/personage02.jpg">
                        </span>
							<span class="item-text">
                            <span class="product_item_title">商务合作</span>
							<em class="product_item_text">助力商家成长 帮助农民致富</em>
							<i></i>
							</span>
						</a>
						<a href="case/website.html" class="product_item last" id="btn_entrepreneurialStory">
							<span class="item-img">
                            <img src="static/picture/personage03.jpg">
                        </span>
							<span class="item-text">
                            <span class="product_item_title">创业故事</span>
							<em class="product_item_text">帮助更多人创业就业 实现美好新生活</em>
							<i></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<!-- footer -->
		<div id="js-footer-wrap">
			<div id="about" class="js-footer about_index">
				<img class="footer_bg_1" src="static/picture/footer_bg.jpg">
				<div class="about-main">
					<div class="about">
						<div class="about-font">
							<ul>
								<h3>业务产品</h3>
								<span></span>
								<li>
									<a href="/business/twoHours.html">增值业务</a>
								</li>
								<li>
									<a href="/business/hongkong.html">港台件</a>
								</li>
								<li>
									<a href="/business/asia.html">国际件</a>
								</li>
								<li>
									<a href="/business/afterSalesService.html">售后服务</a>
								</li>
							</ul>
							<ul>
								<h3>客户服务</h3>
								<span></span>
								<li>
									<a href="https://my.zto.com/create">在线寄件</a>
								</li>
								<li>
									<a href="/express/expressCheck.html">运单查询</a>
								</li>
								<li>
									<a href="/express/expressWebsite.html">服务网点查询</a>
								</li>
								<li>
									<a href="/express/expressPrice.html">运费时效查询</a>
								</li>
								<li>
									<a href="/express/expressProhibited.html">违禁品查询</a>
								</li>
								<li>
									<a href="https://kfapi.zto.com/im?channel=official" target="_blank">客服支持</a>
								</li>
							</ul>
							<ul>
								<h3>关于中通</h3>
								<span></span>
								<li>
									<a href="/companyIntroduce/companyProfile.html">企业概况</a>
								</li>
								<li>
									<a href="/companyIntroduce/corporateCulture.html">企业文化</a>
								</li>

								<li>
									<a href="/companyIntroduce/responsibilityHonor.html">责任与荣誉</a>
								</li>
								<li>
									<a href="/companyIntroduce/newList.html">新闻动态</a>
								</li>
								<li>
									<a href="/companyIntroduce/contactUs.html">联系我们</a>
								</li>
							</ul>
							<ul>
								<h3>加盟合作</h3>
								<span></span>
								<li>
									<a href="/league/expressOutlets.html">网点加盟</a>
								</li>
								<li>
									<a href="/league/cooperate.html">商家合作</a>
								</li>
								<li>
									<a href="/league/supplier.html">供应商合作</a>
								</li>
								<li>
									<a href="http://supplier.zt-express.com/" class="menu-item" target="_blank">供应商门户</a>
								</li>
								<!--                        <li><a href="https://icloud.zto.com/" class="menu-item" target="_blank">短信解决方案</a></li>-->
							</ul>
							<ul>
								<h3>其他</h3>
								<span></span>
								<li>
									<a href="http://hr.zto.com/" target="_blank">人才招聘</a>
								</li>
								<li>
									<a href="http://zto.investorroom.com/" target="_blank">Investors</a>
								</li>
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
										<img src="static/picture/wechat.png" class="wechat-img detail-img" />
									</div>
								</li>
								<li id="btn_foorterWeibo">
									<a href="http://weibo.com/zto200258" target="_blank"><span class="weibo"></span></a>
								</li>
								<li id="btn_foorterQQ">
									<a><span class="qq"></span></a>
									<div class="img-box qq-box">
										<img src="static/picture/qq.png" class="qq-img detail-img" />
									</div>
								</li>
								<li id="btn_foorterAlipay">
									<a><span class="alipay"></span></a>
									<div class="img-box alipay-box">
										<img src="static/picture/alipay-1.png" class="alipay-img detail-img" />
									</div>
								</li>
								<li id="btn_footerMinPhone">
									<a><span class="min-phone"></span></a>
									<div class="img-box app-box">
										<img src="static/picture/app.png" class="app-img detail-img" />
									</div>
								</li>
								<li>
									<a href="https://kfapi.zto.com/im?channel=official" target="_blank"><span class="service"></span></a>
								</li>
							</ul>
							<div class="tel-box">
								<img src="static/picture/tel1.png" alt="全国统一客服热线" class="tel" />
								<img src="static/picture/phone1.png" alt="全国统一客服热线" class="phone1" />
								<span></span>
								<img src="static/picture/tel2.png" alt="全国统一客服热线" class="tel" />
								<img src="static/picture/phone2.png" alt="全国统一客服热线" class="phone2" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="footer" class="footer_index">
				<img class="footer_bg_2" src="static/picture/footer_bg2.jpg">
				<div class="footer-main">
					<div class="footer-left">
						<div class="logo"></div>
					</div>
					<div class="footer-middle">
						<ul>
							<li>
								<a href="/service/service.html" target="_blank" class="service-nav">快递服务协议</a>
							</li>
							<li>
								<a href="/legal&privacy/privacy.html" target="_blank">隐私政策</a>
							</li>
							<li>
								<a href="/legal&privacy/legal.html" target="_blank">法律声明</a>
							</li>
							<li>
								<a href="https://sec.zto.com/" target="_blank">安全响应中心</a>
							</li>
							<li>
								<a href="http://www.spb.gov.cn/" target="_blank">国家邮政局</a>
							</li>
							<li>
								<a href="http://www.cea.org.cn/" target="_blank" class="express-nav">快递协会</a>
							</li>
						</ul>
						<p>
							总部地址：上海市青浦区华新镇华志路1685号&nbsp;邮政编码：201708
						</p>
						<p>
							简历投递邮箱：<span>zp-hr@zto.com</span>
						</p>
					</div>
					<div class="footer-right">
						<p style="margin-bottom: 10px;">已通过ISO27001:2013 信息安全认证</p>
						<p style="margin-bottom: 10px;">
							中通版权所有&nbsp;中通快递股份有限公司&copy;版权所有&nbsp;
							<a style="margin-top: 10px;display:block;" href="http://beian.miit.gov.cn" target="_blank" class="num">沪ICP备13044869号-2</a>
						</p>
						<div class="administration">
							<div class="industry bg-img"></div>

							<div class="credit bg-img"></div>

							<div class="sincerity bg-img"></div>

							<div class="net bg-img"></div>

							<img class="bg-img" src="static/picture/aqkx_83x30.png">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="gjs/jquery-3.5.1.js" ></script>
	<script type="text/javascript" src="static/js/jquery.cookie.js"></script>
	</body>

		<script type="text/javascript">
			var time=setInterval("imagesBroadcast()",4000);
			var imgUrl=['wKhBD2C3KciAUdj4AAPPRetH3Ug651.jpeg','wKhBEGC0dJuAPnOVAA47RRKW90I512.jpeg']
			var slideIndex=0;
			function imagesBroadcast(){
				$("#imgone img").css("display","none");
				if(slideIndex==1){
					slideIndex=0;
					$("#dotone").removeClass()
					$("#dotone").addClass("dot cur")
					$("#dottwo").removeClass()
					$("#dottwo").addClass("dot")
				}else{
					$("#dotone").removeClass()
					$("#dotone").addClass("dot")
					$("#dottwo").removeClass()
					$("#dottwo").addClass("dot cur")
					slideIndex++;
				}
				$("#imgone img").attr("src","static/images/"+imgUrl[slideIndex]).fadeIn();
			}
			document.cookie = "name=value;expires=GMT_String";
			// 以函数方式
			function setcookie(name, value, days) {
				var d = new Date();
				d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
				var expires = d.toGMTString();
				document.cookie = name + "=" + value + ";expires=" + expires;
			}
			$("#btn_onlineTracking").click(function (){
				let number = $(".query_txt").val();
				// 将快递单号信息设置到cookie中
				setcookie("courierNumber",number, 1);
			});

		</script>

</html>
<script src="static/js/bundle.js"></script>
<script src="static/js/public.js"></script>
<script src="static/js/index.js"></script>
