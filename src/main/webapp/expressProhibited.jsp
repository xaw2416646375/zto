<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<!-- saved from url=(0050)https://www.zto.com/express/expressProhibited.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="Description">
	<meta content="中通快递单号查询,网点查询,投诉电话查询,在线寄件" name="Keywords">
	<meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="searchtitle">
<!--<script>var _hmt = _hmt || [];(function() {  var hm = document.createElement("script");  hm.src = "https://hm.baidu.com/hm.js?53a93979e64ab8e76c06653f6830c385";  var s = document.getElementsByTagName("script")[0];   s.parentNode.insertBefore(hm, s);})();</script>-->
	<title>违禁品查询 - 中通快递</title>
	<link rel="stylesheet" type="text/css" href="./违禁品查询 - 中通快递_files/expressProhibited.css">
	<link rel="shortcut icon" type="image/x-icon" href="https://www.zto.com/imgs/logo.ico" media="screen"><link type="text/css" rel="stylesheet" href="./违禁品查询 - 中通快递_files/skin.css">
	<style>
		.logins, .registeres {
			height: 14px;
			font-size: 12px;
			font-family: "宋体";
			cursor: pointer;
			position: absolute;
			color: #5e5e5e;
			border-right: 1px solid #eaeaea
		}

		.logins {
			top: 32px;
			right: 145px;
			width: 39px
		}

		.logins img {
			position: absolute;
			top: -1px;
			left: -17px
		}

		.registeres {
			top: 32px;
			right: 80px;
			width: 54px
		}

	</style>
</head>

<body style="">
	<scirpt src="../js/tingyun-rum.js?v=e21304b160"></scirpt>
<div id="header">
    <div class="header-main">
        <div class="header-left">
            <div class="logo-box">
                <img src="./违禁品查询 - 中通快递_files/logo.png" alt="logo" class="logo">
            </div>

        </div>
        <div class="header-middle">
            <ul>
                <li><span class="js-home-page">首页</span></li>
                <li class="business">
                    <span>物流业务</span>
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
                            <span class="menu-title">国际&amp;台港澳业务</span>
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
                            <span class="menu-title">仓储业务</span>
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
                        <div class="menu-box box-4">
                            <span class="menu-title">冷链业务</span>
                        </div>
                    </div>
                </li>
                <li>
                    <span class="active-nav">客户服务</span>
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
                    <span>加盟合作</span>
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
                <li><span class="js-finance">金融</span></li>
                <li>
                    <span class="js-goHr">招聘</span>
                </li>
                <li>
                    <span>关于中通</span>
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
                    <span>投资者关系</span>
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
                    <img src="./违禁品查询 - 中通快递_files/phoneNumber.png" alt="全国统一热线">
                </div>
            </div>
			<c:if test="${empty customer}" >
				<a  href="login.html"  class="logins" style="">
					<img id="skin-login-icon" style="top:2px;" class="login-img" src="static/picture/login.png" alt="登录"> <span class="login-text">登录</span>
				</a>
				<a href="register.html"  class="registeres">
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
</div>

	<div id="js-header-wrap" class="header-wrap">
<div id="content">
	<div class="link">
		<ul>
			<li id="btn_customerService">
				<a href="https://kfapi.zto.com/im?channel=official" target="_blank" id="contactUs" class="line-server">
					<div class="line-server-bgimg"></div>
					<p class="link-font">
						在线客服
					</p>	
				</a>
			</li>
			<li id="btn_complaintsSuggestions">
				<a href="https://my.zto.com/feedback" class="complaint-suggestion js-express-suggest">
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
			<img src="./违禁品查询 - 中通快递_files/express_banner.jpg">
		</div>
	</div>
	<div id="content">
		<div class="content-main">
			<div class="nav-zto js-nav-fixed" style="position: absolute; top: 0px;">
				<div class="nav-zto-bgimg"></div>
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
									<span class="menu-item js-express-check" id="queryParcel">查件（物流追踪）</span>
									<span class="menu-item js-express-website" id="queryBranch">服务网点查询</span>
									<span class="menu-item js-express-price" id="queryPrice">运费时效查询</span>
									<span class="menu-item  checked">违禁品查询</span>
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
			<div class="express-cont overall prohibited">
				<h2 class="express-title exProhibited">违禁品查询</h2>
				<div class="prohibited-top">
					<div class="prohibited-menu clearboth">
						<span class="prohibited-menu-item checked">境内禁运物品</span>
						<span class="prohibited-menu-item">跨境禁运物品</span>
					</div>
					<div class="prohibited-search-box">
						<form name="searchkey">
							<input type="text" id="key" class="prohibited-search-txt" placeholder="请输入违禁品名称关键字">
							<input type="button" id="search" class="prohibited-search-btn" value="">
						</form>
					</div>
				</div>
				<div class="prohibited-room">
					<div class="prohibited-box show">
						<p class="prohibited-hint">为维护社会公共安全、社会和谐稳定，维护国家利益，保障人民生命财产安全，防止禁寄物品进入寄递渠道，必须严格执行各项操作规范，严禁收寄、递运各类禁寄物品。</p>
						<p class="m25">禁寄物品是指国家法律、法规禁止寄递的物品，主要包括：</p>
						<div class="prohibited-item item-1">
							<i></i>
							<strong>枪支（含仿制品、主要零部件）弹药</strong>
							<p>1．枪支（含仿制品、主要零部件）：如枪支、子弹、炸弹、信号弹、火药等。</p>
							<p>2．弹药（含仿制品）：如子弹、炸弹、手榴弹、火箭弹、照明弹、燃烧弹、烟幕（雾）弹、信号弹、催泪弹、毒气弹、地雷、手雷、炮弹、火药等。</p>
							<p>3．各类管制器具：如匕首、弹簧刀（跳刀）、单刃、双刃、三棱尖刀、弩、电击器等。</p>
						</div>
						<div class="prohibited-item item-2">
							<i></i>
							<strong>易燃易爆物品</strong>
							<p>1．各类易燃液体：如汽油、柴油、桐油、油漆、酒精、松香油、乙醚等。</p>
							<p>2．各类爆炸物品：如雷管、炸药、导火索、黑火药、引火线、烟花爆竹、推进剂、硝化棉等。</p>
							<p>3．各类易燃固体、自燃物质、遇水易燃物质：如硫磺、闪光粉、固体酒精、黄磷、白磷、钛粉、金属钠、碳化钙、氰化钾、氰化钠等。</p>
						</div>
						<div class="prohibited-item item-3">
							<i></i>
							<strong>化学危险品</strong>
							<p>1．各类氧化剂和过氧化物：如高锰酸盐、高氯酸盐、氧化氢、过氧化钠、过氧化钾、过氧化铅、氯酸盐、硝酸盐、双氧水等。</p>
							<p>2．各类压缩和液化气体及其容器：如甲、乙、丁烷、液化石油天然气、一氧化碳、一氧化氮、压缩氧气、氦气等。</p>
							<p>3．各类放射性物质：如铀、钴、镭、钚等。</p>
							<p>4．各类腐蚀性物质：如硫酸、硝酸、盐酸、蓄电池、氢氧化钠、氢氧化钾等。</p>
						</div>
						<div class="prohibited-item item-4">
							<i></i>
							<strong>毒品</strong>
							<p>各类毒品及吸毒工具、非正当用途麻醉药品和精神药品、非正当用途的易制毒化学品：如冰壶、冰毒、海洛因、大麻、可卡因、麻黄素、甲苯、丙酮、胡椒醛、黄樟素、黄樟油等。</p>
						</div>
						<div class="prohibited-item item-5">
							<i></i>
							<strong>各类生化制品、传染性、感染性物质</strong>
							<p>如病菌、炭疽、寄生虫、排泄物、医疗废弃物、尸骨、动物器官、肢体等。</p>
						</div>
						<div class="prohibited-item item-6">
							<i></i>
							<strong>各类非法伪造、侵权物品</strong>
							<p>1．各类非法伪造物品：如伪造或者变造的货币、证件、公章等。</p>
							<p>2．各类非法出版物、印刷品、音像制品等宣传品：如含有反动、煽动民族仇恨、破坏国家统一、破坏社会稳定、宣扬邪教、宗教极端思想、淫秽等内容的图书、刊物、图片、照片、音像制品等。</p>
							<p>3．各类侵犯知识产权和假冒伪劣物品：如侵犯专利权、著作权的图书、音像制品、假冒伪劣的食品、药品、电子产品、化妆品等。</p>
						</div>
						<div class="prohibited-item item-7">
							<i></i>
							<strong>各类间谍专用器材</strong>
							<p>如暗藏式窃听器材、突发式收发报机、一次性密码本、密写工具、用于获取情报的电子监听和截收器材等。</p>
						</div>
						<div class="prohibited-item item-8">
							<i></i>
							<strong>各类濒危野生动物及其制品</strong>
							<p>如象牙、虎骨、犀牛角及其制品等。</p>
						</div>
						<div class="prohibited-item item-9">
							<i></i>
							<strong>各类禁止进出境物品</strong>
							<p>如有碍人畜健康的、来自疫区的以及其他能传播疾病的食品、药品或者其他物品；内容涉及国家秘密的文件、资料及其他物品。</p>
						</div>
						<div class="prohibited-item item-10 last">
							<i></i>
							<strong>其他物品</strong>
							<p>《危险化学品目录》《民用爆炸物品品名表》《易制爆危险化学品名录》《易制毒化学品的分类和品种目录》《中华人民共和国禁止进出境物品表》载明的物品和《人间传染的病原微生物名录》载明的第一、二类病原微生物等，以及法律、行政法规、国务院和国务院有关部门规定禁止寄递的其他物品。</p>
						</div>
					</div>
					<div class="prohibited-box">
						<!-- <p class="prohibited-hint">1．遵守《中华人民共和国禁止进出境物品表》实施细则；</p>
						<p class="prohibited-hint">2．不寄运寄达国家（地区）法律所规定的禁运物品；</p>
						<p class="prohibited-hint">3．不寄运航空公司禁止承运的物品；</p>
						<p class="prohibited-hint">4．参考《全球速卖通禁限售商品目录》内所有限制的十四类所有商品，所述列表所有商品不提供快运。</p> -->
						<p class="prohibited-hint">我们非常重视合法性和安全性问题，因此将拒绝接受以上所列明的有害或非法物品。如果这些物品被我们在派送中发现，我们将送还发货人或者自行处置。发货人有可能面临指控。请参考我们的条款。</p>
						<div class="prohibited-item item-1">
							<i></i>
							<strong>枪支（含仿制品、主要零部件）弹药</strong>
							<p>1．枪支（含仿制品、主要零部件）：如枪支、子弹、炸弹、信号弹、火药等。</p>
							<p>2．弹药（含仿制品）：如子弹、炸弹、手榴弹、火箭弹、照明弹、燃烧弹、烟幕（雾）弹、信号弹、催泪弹、毒气弹、地雷、手雷、炮弹、火药等。</p>
							<p>3．各类管制器具：如匕首、弹簧刀（跳刀）、单刃、双刃、三棱尖刀、弩、电击器等。</p>
						</div>
						<div class="prohibited-item item-2">
							<i></i>
							<strong>易燃易爆物品</strong>
							<p>1．各类易燃液体：如汽油、柴油、桐油、油漆、酒精、松香油、乙醚等。</p>
							<p>2．各类爆炸物品：如雷管、炸药、导火索、黑火药、引火线、烟花爆竹、推进剂、硝化棉等。</p>
							<p>3．各类易燃固体、自燃物质、遇水易燃物质：如硫磺、闪光粉、固体酒精、黄磷、白磷、钛粉、金属钠、碳化钙、氰化钾、氰化钠等。</p>
						</div>
						<div class="prohibited-item item-3">
							<i></i>
							<strong>化学危险品</strong>
							<p>1．各类氧化剂和过氧化物：如高锰酸盐、高氯酸盐、氧化氢、过氧化钠、过氧化钾、过氧化铅、氯酸盐、硝酸盐、双氧水等。</p>
							<p>2．各类压缩和液化气体及其容器：如甲、乙、丁烷、液化石油天然气、一氧化碳、一氧化氮、压缩氧气、氦气等。</p>
							<p>3．各类放射性物质：如铀、钴、镭、钚等。</p>
							<p>4．各类腐蚀性物质：如硫酸、硝酸、盐酸、蓄电池、氢氧化钠、氢氧化钾等。</p>
						</div>
						<div class="prohibited-item item-4">
							<i></i>
							<strong>毒品</strong>
							<p>各类毒品及吸毒工具、非正当用途麻醉药品和精神药品、非正当用途的易制毒化学品：如冰壶、冰毒、海洛因、大麻、可卡因、麻黄素、甲苯、丙酮、胡椒醛、黄樟素、黄樟油等。</p>
						</div>
						<div class="prohibited-item item-5">
							<i></i>
							<strong>各类生化制品、传染性、感染性物质</strong>
							<p>如病菌、炭疽、寄生虫、排泄物、医疗废弃物、尸骨、动物器官、肢体等。</p>
						</div>
						<div class="prohibited-item item-6">
							<i></i>
							<strong>各类非法伪造、侵权物品</strong>
							<p>1．各类非法伪造物品：如伪造或者变造的货币、证件、公章等。</p>
							<p>2．各类非法出版物、印刷品、音像制品等宣传品：如含有反动、煽动民族仇恨、破坏国家统一、破坏社会稳定、宣扬邪教、宗教极端思想、淫秽等内容的图书、刊物、图片、照片、音像制品等。</p>
							<p>3．各类侵犯知识产权和假冒伪劣物品：如侵犯专利权、著作权的图书、音像制品、假冒伪劣的食品、药品、电子产品、化妆品、等。</p>
						</div>
						<div class="prohibited-item item-7">
							<i></i>
							<strong>各类间谍专用器材</strong>
							<p>如暗藏式窃听器材、突发式收发报机、一次性密码本、密写工具、用于获取情报的电子监听和截收器材等。</p>
						</div>
						<div class="prohibited-item item-8">
							<i></i>
							<strong>各类濒危野生动物及其制品</strong>
							<p>如象牙、虎骨、犀牛角及其制品等。</p>
						</div>
						<div class="prohibited-item item-9">
							<i></i>
							<strong>各类禁止进出境物品</strong>
							<p>如有碍人畜健康的、来自疫区的以及其他能传播疾病的食品、药品或者其他物品；内容涉及国家秘密的文件、资料及其他物品。</p>
						</div>
						<div class="prohibited-item item-11">
							<i></i>
							<strong>普通禁运品</strong>
							<p>1、烟草类(香烟、烟叶、烟丝、雪茄、茶叶）。</p>
							<p>2、普通邮票、邮册；赌博设备、器具。</p>
							<p>3、特殊贵重物品类（钻石、金银、硬币、现金、玉器、铂金、珠宝、首饰、、毛皮、名字画等）</p>
							<p>4、涉及金融的卡类与票证类（信用卡、银行卡、金融卡、充值卡）、车票、支票、非现金票证、空白的旅行票证、有价证劵、信用证货物、世界各国发行的任何类型的流通货币不论金额大小等）。</p>
							<p>5、用于装饰香水的树木部分，例如花束、花环以及圣诞树；原木（未经加工的木材）。</p>
							<p>6、石棉、气囊、气压泵、潜水泵、砖头、音响、干电池、蓄电池、非纯电池类用电池作动力源的电子产品（MP3、MP4、其他电子播放器、电动剃须刀、钟表等物品）</p>
							<p>7、一切桶装液体、稠状货物：如化学试剂、饮料、面粉或者其他液体和粉末状类的物品、流体、半流体或膏状物。包括有：爽肤水、沐浴露、洗发水、润肤露、粉底、隐型眼睛（液体浸泡）、洗衣皂、牙膏等、香水、喷雾杀虫剂、空气清新剂等一切的液体类。</p>
							<p>8、文件类含核销单、海运/空运提单等同类型的重要文件拒接。</p>
						</div>
						<div class="prohibited-item item-12 last">
							<i></i>
							<strong>食品类</strong>
							<p>1.任何液体状或粉末状的食品，包括各种调味料如：酱油、醋、各种油、调味包、鸡精、味精、各种辣椒酱、番茄酱等，及巧克力、月饼、粽子或者其他保持周期较短的食品、任何蛋类食品及带蛋黄的其他产品、榴莲、椰肉干等。</p>
							<p>2.肉类和奶制品：包括所有新鲜的，烹调过的或者干的肉，例如牛肉、羊肉、猪肉或者鸡肉，以及含有这些肉类的产品，例如肉饼，咖喱，火腿，干肉，含有肉的方便面，肉球，腌肉，熏肠或加工过的肠，酱或者肉酱。活的蜗牛/螺，死了但仍在壳中的蜗牛/螺以及田螺也在禁运范围之内。</p>
							<p>3.蔬菜和植物，包括种子，用于种植的鳞茎、球茎、块茎、根茎，幼苗；</p>
						</div>
						<div class="prohibited-item item-10 last">
							<i></i>
							<strong>其他物品</strong>
							<p>《危险化学品目录》《民用爆炸物品品名表》《易制爆危险化学品名录》《易制毒化学品的分类和品种目录》《中华人民共和国禁止进出境物品表》载明的物品和《人间传染的病原微生物名录》载明的第一、二类病原微生物等，以及法律、行政法规、国务院和国务院有关部门规定禁止寄递的其他物品。</p>
						</div>
					</div>
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
            <li><a href="https://www.zto.com/business/twoHours.html">增值业务</a></li>
            <li><a href="https://www.zto.com/business/hongkong.html">港台件</a></li>
            <li><a href="https://www.zto.com/business/asia.html">国际件</a></li>
            <li><a href="https://www.zto.com/business/afterSalesService.html">售后服务</a></li>
          </ul>
          <ul>
            <h3>客户服务</h3>
            <span></span>
            <li><a href="https://my.zto.com/create">在线寄件</a></li>
            <li><a href="https://www.zto.com/express/expressCheck.html">运单查询</a></li>
            <li><a href="https://www.zto.com/express/expressWebsite.html">服务网点查询</a></li>
            <li><a href="https://www.zto.com/express/expressPrice.html">运费时效查询</a></li>
            <li><a href="https://www.zto.com/express/expressProhibited.html">违禁品查询</a></li>
            <li><a href="https://kfapi.zto.com/im?channel=official" target="_blank">客服支持</a></li>
          </ul>
          <ul>
            <h3>关于中通</h3>
            <span></span>
            <li><a href="https://www.zto.com/companyIntroduce/companyProfile.html">企业概况</a></li>
            <li><a href="https://www.zto.com/companyIntroduce/corporateCulture.html">企业文化</a></li>
            
            <li><a href="https://www.zto.com/companyIntroduce/responsibilityHonor.html">责任与荣誉</a></li>
            <li><a href="https://www.zto.com/companyIntroduce/newList.html">新闻动态</a></li>
            <li><a href="https://www.zto.com/companyIntroduce/contactUs.html">联系我们</a></li>
          </ul>
          <ul>
            <h3>加盟合作</h3>
            <span></span>
            <li><a href="https://www.zto.com/league/expressOutlets.html">网点加盟</a></li>
            <li><a href="https://www.zto.com/league/cooperate.html">商家合作</a></li>
            <li><a href="https://www.zto.com/league/supplier.html">供应商合作</a></li>
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
                <img src="./违禁品查询 - 中通快递_files/wechat.png" class="wechat-img detail-img">
              </div>
            </li>
            <li id="btn_foorterWeibo">
              <a href="http://weibo.com/zto200258" target="_blank"><span class="weibo"></span></a>
            </li>
            <li id="btn_foorterQQ">
              <a><span class="qq"></span></a>
              <div class="img-box qq-box">
                <img src="./违禁品查询 - 中通快递_files/qq.png" class="qq-img detail-img">
              </div>
            </li>
            <li id="btn_foorterAlipay">
              <a><span class="alipay"></span></a>
              <div class="img-box alipay-box">
                <img src="./违禁品查询 - 中通快递_files/alipay-1.png" class="alipay-img detail-img">
              </div>
            </li>
            <li id="btn_footerMinPhone">
              <a><span class="min-phone"></span></a>
              <div class="img-box app-box">
                <img src="./违禁品查询 - 中通快递_files/app.png" class="app-img detail-img">

              </div>
            </li>
            <li>
              <a href="https://kfapi.zto.com/im?channel=official" target="_blank"><span class="service"></span></a>
            </li>
          </ul>
          <div class="tel-box">
            <img src="./违禁品查询 - 中通快递_files/tel1.png" alt="全国统一客服热线" class="tel">
            <img src="./违禁品查询 - 中通快递_files/phone1.png" alt="全国统一客服热线" class="phone1">
            <span></span>
            <img src="./违禁品查询 - 中通快递_files/tel2.png" alt="全国统一客服热线" class="tel">
            <img src="./违禁品查询 - 中通快递_files/phone2.png" alt="全国统一客服热线" class="phone2">
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
          <li><a href="https://www.zto.com/service/service.html" target="_blank" class="service-nav">快递服务协议</a></li>
          <li><a href="https://www.zto.com/legal&amp;privacy/privacy.html" target="_blank">隐私政策</a></li>
          <li><a href="https://www.zto.com/legal&amp;privacy/legal.html" target="_blank">法律声明</a></li>
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
          已通过ISO27001:2013 信息安全认证<br>
          中通版权所有&nbsp;中通快递股份有限公司©版权所有&nbsp;<br><a href="http://beian.miit.gov.cn/" target="_blank" class="num">沪ICP备13044869号-2</a>
        </p>
        <div class="administration">
          <div class="industry bg-img-cursor"></div>
          <div class="credit bg-img-cursor"></div>
          <div class="sincerity bg-img-cursor"></div>
          <div class="net bg-img-cursor"></div>

          <img class="bg-img-cursor" src="./违禁品查询 - 中通快递_files/aqkx_83x30.png">
        </div>
      </div>
    </div>
  </div>
</div>




<script language="javascript" type="text/javascript" src="./违禁品查询 - 中通快递_files/bundle.js"></script>
<script language="javascript" type="text/javascript" src="./违禁品查询 - 中通快递_files/public.js"></script><script type="text/javascript" src="./违禁品查询 - 中通快递_files/skin.js"></script>
<script language="javascript" type="text/javascript" src="./违禁品查询 - 中通快递_files/expressProhibited.js"></script>
<script language="javascript" type="text/javascript" src="./违禁品查询 - 中通快递_files/jquery-3.5.1.js"></script>
<script type="text/javascript">
	$(".js-home-page").click(function (){
		window.location.href="http://localhost:8080/zto/index";
	});
	$("#queryParcel").click(function (){
		window.location.href="expressCheck.jsp";
	});
	$("#queryBranch").click(function (){
		window.location.href="queryMap";
	});
	$("#queryPrice").click(function (){
		window.location.href="expressPrice.jsp";
	});
</script>
</body>
</html>