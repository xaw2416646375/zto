<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="Description" />
  <meta content="中通快递单号查询,网点查询,投诉电话查询,在线寄件" name="Keywords" />
  <meta content="中通快递官网为您提供中通快递单号(运单)跟踪查询,投诉电话查询,运费报价查询,中通营业网点查询,在线下单(寄件)等服务,全国统一客服热线：95311" name="searchtitle" />
  <script>
    var _hmt = _hmt || []
      ; (function () {
        var hm = document.createElement('script')
        hm.src = 'https://hm.baidu.com/hm.js?53a93979e64ab8e76c06653f6830c385'
        var s = document.getElementsByTagName('script')[0]
        s.parentNode.insertBefore(hm, s)
      })()
  </script>
  <title>查件 - 中通快递</title>
  <link rel="stylesheet" type="text/css" href="static/css/expresscheck.css" />
    <link rel="shortcut icon" type="image/x-icon" href="img/logo.ico" media="screen" />
    <link href="layui/css/layui.css" rel="stylesheet">
    <script type="text/javascript" src="layui/layui.js"></script>
</head>

<body>
  <scirpt src="../js/tingyun-rum.js?v=e21304b160"></scirpt>
<div id="header">
    <div class="header-main">
        <div class="header-left">
            <div class="logo-box">
                <img src="static/picture/logo.png" alt="logo" class="logo">
            </div>

        </div>
        <div class="header-middle">
            <ul>
                <li><span class="js-home-page" >首页</span></li>
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
                    <img src="static/picture/phonenumber.png" alt="全国统一热线">
                </div>
            </div>
            <input type="hidden" id="customerId" value="${customer.customerId}">
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
</div>
  <!-- 我就是一个分隔符 -->
  <div id="js-header-wrap" class="header-wrap">
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
      <img src="static/picture/express_banner.jpg" />
    </div>
  </div>
  <div id="content">
    <div class="content-main">
      <div class="nav-zto js-nav-fixed">
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
                  <span class="menu-item checked">查件（物流追踪）</span>
                  <span class="menu-item js-express-website" id="queryBranch">服务网点查询</span>
                  <span class="menu-item js-express-price" id="queryPrice"> 运费时效查询</span>
                  <span class="menu-item js-express-prohibited" id="queryProhibited">违禁品查询</span>
                </div>
              </div>
            </li>
            <li>
              <div class="nav-zto-font">
                <span class="nav-item">客服支持
                  <i></i>
                </span>
                <div class="nav-zto-menu">
                  <span class="menu-item js-express-questions">常见问题</span>
                  <span class="menu-item js-express-suggest">投诉建议</span>
                </div>
              </div>
            </li>
          </ul>
          <i class="jag"></i>
        </div>
      </div>
      <div class="express-cont">
        <!-- start 陈海霞 -->
        <div id="expressNotice" class="express-notice">
          <div class="notice-cont-box">
            <div class="notice-horn"></div>
            <div class="notice-cont">
              <marquee id="noticeCont" direction="left" behavior="scroll" onMouseOut="this.start()"
                onMouseOver="this.stop()">
                中通快递面向收件用户承诺长三角核心城市次日达，超承诺时效24小时以上，可通过官方服务（在线客服、热线电话等）获得相应补偿，详见服务标准
              </marquee>
            </div>
            <div id="btnViewDetail" class="btn-detail">查看详情</div>
          </div>
          <div id="btnCloseNotice" class="btn-close"></div>
        </div>
        <!-- end 陈海霞 -->
        <div class="express-title-box">
          <h2 class="express-title exCheck selectedExCheck wayExpress">运单号查询</h2>
         <!-- <h2 class="express-title exCheck phoneExpress">手机号查询</h2>-->
        </div>

        <!-- 运单查询模块 -->
        <div class="wayExpressBox">
          <div class="search_txt">
            <div class="inputItem">
              <textarea id="txtbill" class="query_txt" placeholder="请输入运单号"></textarea>
            </div>
            <div class="inputGray"></div>
          </div>

            <style>
                #btnSearchs{
                    display: block;
                    width: 140px;
                    line-height: 40px;
                    color: #fff;
                    background: #33a2f7;
                    border: 0;
                    font-family: microsoft yahei;
                    border-radius: 4px;
                    cursor: pointer;
                }
            </style>
          <div class="search_box">
            <input id="btnSearchs" type="button"  value="查询" />
            <!--<span class="lately-record">最近查询记录（<i></i>）</span>-->
            <div class="record">
              <i class="record-arrow"></i>
            </div>
          </div>
          <div class="result-list"></div>
        </div>

        <!-- 手机号查询模块 -->
        <div class="phoneExpressBox hidden">
          <div class="inputBox">
            <span>手机号：</span>
            <input type="text" class="phoneInput" placeholder="请输入手机号" />
          </div>
          <div class="inputBox">
            <div>
              <span>图形验证码：</span>
              <input type="text" class="picValidateCode" id="picValidateCode" placeholder="请输入图形验证码" />
              <img src="" class="picValidate" id="picValidate" />
            </div>
          </div>
          <div class="inputBox">
            <div>
              <span>验证码：</span>
              <input type="text" class="validateInput" placeholder="请输入验证码" />
            </div>
            <input type="button" class="validateInputBtn" value="获取验证码" />
          </div>
          <input type="button" id="phoneSearchBtn" class="submitLogin" value="查询" />
        </div>
      </div>
      <div class="express-code">
        <strong class="express-title code">单号订阅</strong>
        <div class="code-cont">
          <p class="code-hint">想要实时追踪此运单状态？扫码订阅，仅需一步!</p>
          <img src="static/picture/code_wechat.jpg" id="subscribeQrCode" />
          <p>打开微信或支付宝扫描上方二维码即可订阅成功</p>
        </div>
      </div>
    </div>
  </div>
  <div class="jump">
    <div class="jump-box" data-order="">
      <span class="jump-close"></span>
      <div class="jump-cont grade">
        <div class="jump-top">
          <span class="order-code">单号：
            <em>680000000001</em>
          </span>
          <span class="order-state">已签收</span>
        </div>
        <div class="grade-box">
          <span class="grade-title">时效评分：</span>
          <div class="grade-list">
            <span class="star star-1"></span>
            <span class="star star-2"></span>
            <span class="star star-3"></span>
            <span class="star star-4"></span>
            <span class="star star-5"></span>
          </div>
        </div>
        <div class="grade-box">
          <span class="grade-title">服务态度：</span>
          <div class="grade-list">
            <span class="star star-1"></span>
            <span class="star star-2"></span>
            <span class="star star-3"></span>
            <span class="star star-4"></span>
            <span class="star star-5"></span>
          </div>
        </div>
        <textarea class="suggest-box" placeholder="如果您有任何意见或者奇思妙想，请一定告诉我们"></textarea>
        <span class="jump-btn gradeok">确定</span>
      </div>
      <div class="jump-cont contact">
        <div class="jump-top">
          <strong class="jump-title title_phone">联系派件员</strong>
        </div>
        <div class="contact-box">
          <div class="contact-title">
            <strong>免费电话咨询</strong>
            <p>请输入您的手机，点击“免费呼叫”按钮，就可以免费联系派件员！</p>
          </div>
          <div class="contact-form">
            <span>我的手机:</span>
            <form id="phoneForm">
              <input type="text" class="contact-txt" autocomplete="off" maxlength="11" name="phone1" id="phone1"
                onkeyup="this.value = this.value.replace(/\D/g, '')"
                onafterpaste="this.value=this.value.replace(/\D/g,'')" />
              <input type="submit" class="contact-btn" id="phone-call" value="免费呼叫" />
            </form>
          </div>
          <div class="courier-phone">
            <span>派件员手机</span>
            <em>13013139123</em>
          </div>
        </div>
        <div class="contact-box last">
          <div class="contact-title title_message">
            <strong>免费短信催件</strong>
            <p>请输入您的手机，点击“免费短信”按钮，就可以免费联系派件员！</p>
          </div>
          <div class="contact-form">
            <span>我的手机:</span>
            <form id="messageForm">
              <input type="text" class="contact-txt" maxlength="11" name="phone2" id="phone2"
                onkeyup="this.value = this.value.replace(/\D/g, '')"
                onafterpaste="this.value=this.value.replace(/\D/g,'')" />
              <input type="submit" class="contact-btn" id="message-call" value="免费短信" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- start 陈海霞 2020-5-18 -->
  <div id="deliveryMask" class="delivery">
    <div id="deliveryModal" class="delivery-modal">
      <img id="btnCloseModal" class="btn-close" src="static/picture/btn-close.png" />
      <div class="modal-title">
        <img class="modal-title-icon" src="static/picture/icon.png" />
        <div class="modal-title-text">预约派送</div>
      </div>
      <div class="modal-cont">
        <div class="modal-cont-block">
          <div class="block-title">订单信息</div>
          <div class="block-cont">
            <div class="text flex-center">
              <div class="text-title">运单号：</div>
              <div id="orderBillCode" class="text-value">-</div>
            </div>

            <div class="flex-box">
              <div class="cont-half">
                <div class="text flex-center">
                  <div class="text-title">收件人：</div>
                  <div id="orderReceiveName" class="text-value">-</div>
                </div>
              </div>
              <div class="cont-half">
                <div class="text flex-center">
                  <div class="text-title">联系方式：</div>
                  <div id="orderProblemReplyMobile" class="text-value">-</div>
                </div>
              </div>
            </div>
            <div class="text">
              <div class="text-title">地址：</div>
              <div id="orderReceiveAddress" class="text-value text-address">-</div>
            </div>
            <div class="flex-top">
              <div class="cont-half">
                <div class="text flex-center">
                  <div class="text-title">异常信息：</div>
                  <div id="orderProblemReason" class="text-value">-</div>
                </div>
              </div>
              <div class="cont-half">
                <div id="checkBtnBlock" class="text">
                  <div class="text-title">是否真实：</div>
                  <div id="checkedBtn" class="text-value flex-box">
                    <div class="flex-item">
                      <img id="btnIcon" class="flex-item-icon" src="static/picture/icon1-1.png" />
                      <div id="btnText" class="flex-item-text">真实</div>
                    </div>
                  </div>
                  <div id="noCheckBtn" class="text-value flex-box">
                    <div id="clickIcon1" class="flex-item">
                      <img class="flex-item-icon" src="static/picture/icon1-1.png" />
                      <div class="flex-item-text">真实</div>
                    </div>
                    <div id="clickIcon2" class="flex-item">
                      <img class="flex-item-icon" src="static/picture/icon2-1.png" />
                      <div class="flex-item-text">不确定</div>
                    </div>
                    <div id="clickIcon3" class="flex-item">
                      <img class="flex-item-icon" src="static/picture/icon3-1.png" />
                      <div class="flex-item-text">不真实</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-cont-block">
          <div id="blockCont" class="block-left">
            <div class="block-title">请选择处理方式</div>
            <div class="block-cont">
              <div id="clickDeal1" class="text flex-center">
                <div class="text-icon"></div>
                <div class="text-value">更改收件人信息</div>
              </div>
              <div id="clickDeal2" class="text flex-center">
                <div class="text-icon"></div>
                <div class="text-value">放入自提柜/代收点</div>
              </div>
              <div id="clickDeal3" class="text flex-center">
                <div class="text-icon"></div>
                <div class="text-value">更改派送时间</div>
              </div>
            </div>
          </div>
          <div id="hasBlockCont">
            <div class="block-title">处理方式</div>
            <div style="margin-bottom: 40px;">
              <div id="hasBlockContTitle" class="has-block-cont-title"></div>
              <div id="hasBlockContInfo" class="has-block-cont-info"></div>
            </div>
          </div>

          <div id="deliveryInfo" class="block-right">
            <div class="block-right-title">更改收件人信息</div>
            <div class="line">
              <div class="line-title">姓名：</div>
              <input id="inputInfo" class="line-input" maxlength="14" value="" placeholder="请输入姓名" />
              <div class="err-msg">名字不能为空</div>
            </div>
            <div class="line">
              <div class="line-title">电话：</div>
              <input id="inputTel" class="line-input" maxlength="15" type="text" value="" placeholder="请输入电话" />
              <div class="err-msg">电话不能为空</div>
            </div>
          </div>
          <div id="deliveryTime" class="block-right">
            <div class="block-right-title">期望派送时间<div class="title-tip">如需预约其他时间派送请联系快递员</div>
            </div>
            <div id="deliveryTimeList"></div>
          </div>
        </div>
      </div>
      <div id="modalFooter" class="modal-footer">
        <div class="btn">提交</div>
        <div id="btnCancelModal" class="btn btn-cancel">取消</div>
      </div>
    </div>

    <div id="deliveryConfirm" class="delivery-confirm">
      <div class="confirm-content">“已与客户预约派件”情况不真实，我要反馈</div>
      <div class="confirm-footer">
        <div id="btnConfirm" class="btn btn-submit">确认</div>
        <div id="btnCancelConfirm" class="btn btn-cancel">取消</div>
      </div>
    </div>

    <div id="deliveryDialog" class="delivery-dialog">
      <img class="dialog-icon" src="static/picture/icon-success.png" />
      <div class="dialog-content">
        <div class="">
          <div class="dialog-title">提交成功</div>
          <div class="dialog-cont">尊敬的用户，我们会抓紧处理您的反馈，给您带来的不便，敬请谅解！</div>
        </div>
        <div class="dialog-footer">
          <div id="btnView" class="btn btn-submit">查看详情</div>
          <div id="btnClose" class="btn btn-cancel">关闭</div>
        </div>
      </div>
    </div>

    <div id="deliveryTip" class="delivery-tip">
      <img src="static/picture/icon-warn.png" />
      <div class="tip-text">运单已签收，无需回复</div>
    </div>
  </div>


  <!-- end 陈海霞 2020-5-18 -->

  <div id="embed-captcha"></div>
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
            <li><a href="expressCheck.jsp">运单查询</a></li>
            <li><a href="/express/expressWebsite.html">服务网点查询</a></li>
            <li><a href="/express/expressPrice.jsp">运费时效查询</a></li>
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

          <img class="bg-img-cursor" src="static/picture/aqkx_83x30.png" />
        </div>
      </div>
    </div>
  </div>
</div>
  <script type="text/javascript" src="gjs/jquery-3.5.1.js" ></script>
  <script type="text/javascript" src="static/js/jquery.cookie.js"></script>
 <!-- <script src="static/js/bundle.js"></script>
  <script src="static/js/jquery.validate.min.js"></script>
  <script src="static/js/public.js"></script>
  <script src="static/js/expresscheck.js"></script>
  <script src="static/js/jsbarcode.js"></script>-->
</body>
<script type="text/javascript">
    $(".js-home-page").click(function (){
        window.location.href="http://localhost:8080/zto/index";
    });
    $(function (){
        if ($.cookie("courierNumber")!=null){
            $("#txtbill").val($.cookie("courierNumber"));
            $(".result-list").empty();
            $.ajax({
                type: "POST",
                url: "logs/selectLog",
                data: "expressNumber=" + $.cookie("courierNumber"),
                success: function (logList) {
                    $.removeCookie("courierNumber",{domain:"localhost",path:"/zto"});
                    if (logList==""){
                        $(".result-list").append("暂无信息！");
                    }else {
                        let log ="";
                        for (let i = 0; i < logList.length; i++) {
                            if (i==0){
                                log = "<div class=\"result-item\">\n" +
                                    "<div class=\"result-top\"><strong class=\"numbers\"><em>运单号:</em><span>"+$("#txtbill").val()+"</span><i class=\"sendTime\"></i></strong>\n";
                                if(logList[i].orderState==3){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">已揽件</em></div>"
                                }else if(logList[i].orderState==4){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">运输中</em></div>"
                                }else if(logList[i].orderState==5){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">待派件</em></div>"
                                }else if(logList[i].orderState==6){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">已签收</em></div>"
                                }

                                log +="</div>\n" +
                                    "<div class=\"branch-list\">\n" +
                                    "<div class=\"branch-item first show\">\n" +
                                    "<div class=\"branch-circle\">最新</div>\n" +
                                    "<div class=\"branch-line\"></div><span data-order=\"75600036257351\" class=\"branch-contact graded\">满意度评分</span>\n" +
                                    "<a href=\"javascript:;\" class=\"map-link\">切换地图</a>\n" +
                                    "<a href=\"javascript:;\" onclick=\"jumpService(75600036257351)\" class=\"service-link\" target=\"_blank\">在线客服</a>\n" +
                                    "<p class=\"branch-text\"><span>" + logList[i].message + "</span></p>\n" +
                                    "<p class=\"branch-time\">" + logList[i].updateDate + "</p>\n" +
                                    "</div>";
                            }else{
                                log += "<div class=\"branch-item show\">\n" +
                                    "<div class=\"branch-circle\"><em></em></div>\n" +
                                    "<div class=\"branch-line\"></div>\n" +
                                    "<p class=\"branch-text\"><span>" + logList[i].message + "</span></p>\n" +
                                    "<p class=\"branch-time\">" + logList[i].updateDate + "</p>\n" +
                                    "</div>";
                            }
                        }
                        log += "\t</div>\n" +
                            "</div>"

                        $(".result-list").append(log);

                    }

                }
            })
        }
    });
    $("#queryBranch").click(function (){
        window.location.href="queryMap";
    });
    $("#queryPrice").click(function (){
        window.location.href="expressPrice.jsp";
    });
    $("#queryProhibited").click(function (){
        window.location.href="expressProhibited.jsp";
    });
    $("#btnSearchs").click(function () {
        if($("#txtbill").val()==""){
            layui.use('layer', function(){
                var layer = layui.layer;
                layer.msg("运单号不能为空！")
            })
        }else {
            $(".result-list").empty();
            $.ajax({
                type: "POST",
                url: "logs/selectLog",
                data: "expressNumber=" + $("#txtbill").val(),
                success: function (logList) {
                    if (logList==""){
                        $(".result-list").append("暂无信息！");
                    }else {
                        let log ="";
                        for (let i = 0; i < logList.length; i++) {
                            if (i==0){
                                log = "<div class=\"result-item\">\n" +
                                    "<div class=\"result-top\"><strong class=\"numbers\"><em>运单号:</em><span>"+$("#txtbill").val()+"</span><i class=\"sendTime\"></i></strong>\n";
                                if(logList[i].orderState==3){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">已揽件</em></div>"
                                }else if(logList[i].orderState==4){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">运输中</em></div>"
                                }else if(logList[i].orderState==5){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">待派件</em></div>"
                                }else if(logList[i].orderState==6){
                                    log +="<div class=\"result-static static-4\"><em class=\"static-text\">已签收</em></div>"
                                }

                                log +="</div>\n" +
                                    "<div class=\"branch-list\">\n" +
                                    "<div class=\"branch-item first show\">\n" +
                                    "<div class=\"branch-circle\">最新</div>\n" +
                                    "<div class=\"branch-line\"></div><span data-order=\"75600036257351\" class=\"branch-contact graded\">满意度评分</span>\n" +
                                    "<a href=\"javascript:;\" class=\"map-link\">切换地图</a>\n" +
                                    "<a href=\"javascript:;\" onclick=\"jumpService(75600036257351)\" class=\"service-link\" target=\"_blank\">在线客服</a>\n" +
                                    "<p class=\"branch-text\"><span>" + logList[i].message + "</span></p>\n" +
                                    "<p class=\"branch-time\">" + logList[i].updateDate + "</p>\n" +
                                    "</div>";
                            }else{
                                log += "<div class=\"branch-item show\">\n" +
                                    "<div class=\"branch-circle\"><em></em></div>\n" +
                                    "<div class=\"branch-line\"></div>\n" +
                                    "<p class=\"branch-text\"><span>" + logList[i].message + "</span></p>\n" +
                                    "<p class=\"branch-time\">" + logList[i].updateDate + "</p>\n" +
                                    "</div>";
                            }
                        }
                        log += "\t</div>\n" +
                            "</div>"

                        $(".result-list").append(log);

                    }

                }
            })
        }
    });

</script>
</html>