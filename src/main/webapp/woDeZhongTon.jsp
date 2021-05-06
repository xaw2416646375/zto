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
		
		<script type="text/javascript" src="gjs/jquery-3.5.1.js" ></script>
		<script type="text/javascript" src="gjs/clipboard.js" ></script>
		
		<link href="layui/css/layui.css" rel="stylesheet">
		<script type="text/javascript" src="layui/layui.js" ></script>
		<style>
			.logins, .registeres {
				height: 14px;
				font-size: 12px;
				font-family: "宋体";
				cursor: pointer;
				position: absolute;
				color: #5e5e5e;
				border-right: 1px solid #eaeaea;
			}
			.login-text {
				display: inline-block;
				vertical-align: middle;
			}
			.logins {
				top: 32px;
				right: 246px;
				width: 39px
			}
			.registeres {
				top: 32px;
				right: 159px;
				width: 54px
			}
			.users {
				position: absolute;
				top: 32px;
				right: 80px;
				display: none;
				padding-right: 10px;
				font-size: 12px;
				color: #5e5e5e;
			}
			#skin-login-icon,#skin-register-icon{
				position: absolute;
				top: -1px;
				left: -17px;
			}
		</style>
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
							<div>
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
										<%--<img src="static/picture/login.png" alt="用户">--%>
										欢迎你，
										<c:if test="${null!=customer.nickName}">
											<a href="woDeZhongTon.jsp" style="cursor: pointer;color: #33a2f7;">  ${customer.nickName}</a>
										</c:if>
										<c:if test="${null==customer.nickName}">
											<a href="woDeZhongTon.jsp" style="cursor: pointer;color: #33a2f7;">  ${customer.phone}</a>
										</c:if>
										<span id="index-exit" class="cursor">退出</span>
									</div>
								</c:if>

							</div>
							<!---->
						</div>
					</div>
				</div>
				<div data-v-04fa0d38="" class="main-container">
					<div data-v-04fa0d38="" class=".sidebar-container sidebar-container">
						<ul class="sidebar-main">
							<li class="nav-top"></li>
							<li class="nav-item selectedColor"><span class="selectedNav"></span>
								<a href="woDeZhongTon.jsp" class="router-link-exact-active router-link-active">我的中通</a>
							</li>
							<li class="nav-item"><span class=""></span>
								<a href="woDeKuaiDi.html" class="" id="leftMenu-express">我的快递</a>
							</li>
							<li class="nav-item"><span class=""></span>
								<a href="addressselect" class="" id="leftMenu-address">我的地址簿</a>
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

					<!--我的中通-->
					<div data-v-04fa0d38="" id="wodezhongtong" class="item-main-container" style="display: block;">
						<section data-v-7187aad4="" data-v-04fa0d38="" class="app-main">
							<div data-v-7187aad4="" class="home-wrapper">
								<div class="home-main">
									<div class="personal-show">
										<c:if test="${null!=customer.photo}">
											<img src="myFile/${customer.photo}" alt="头像" class="header-pic">
										</c:if>
										<c:if test="${null==customer.photo}">
											<img src="gimg/t.png" alt="头像" class="header-pic">
										</c:if>
										<div class="info">
											<p class="hello">尊敬的会员，您好！</p>
											<c:if test="${null!=customer.nickName}">
												<p class="phone">${customer.nickName}</p>
											</c:if>
											<c:if test="${null==customer.nickName}">
												<p class="phone">${customer.phone}</p>
											</c:if>
										</div>
									</div>
									<div class="guess">猜你最关心</div>
									<!--如果没有数据显示-->
									<!--<div class="no-data">暂无数据</div>-->
									<!--有数据显示两条-->
									<div class="list-cont">
										<div class="my-list"><span class="type">我收的</span>
											<div class="bill-box">
												<p class="item">运单号:78176304775990</p> <span class="copy" data-clipboard-text="78176304775990">复制</span></div>
											<div class="from-to"><span class="from">吴**【揭阳市】</span> <span class="arrow"></span> <span class="from to">蒋**【长沙市】</span></div>
											<p class="item">最新状态:快件已在 【长沙南二环】 签收, 签收人: 菜鸟, 如有疑问请电联:（18670868941）, 投诉电话:（0731-89560723）, 您的快递已经妥投。风里来雨里去, 只为客官您满意。上有老下有小, 赏个好评好不好？【请在评价快递员处帮忙点亮五颗星星哦~】</p>
											<p class="item ">更新时间:2021-03-12 12:22:10</p>
											<div class="side-btn">
												<div class="cont">
													<p class="status sending">已签收</p>
													<p class="o">评价快递员</p>
													<p class="o">一键退换货</p>
												</div>
											</div>
										</div>
										<div class="my-list"><span class="type">我收的</span>
											<div class="bill-box">
												<p class="item">运单号:78176298236890</p> <span class="copy" data-clipboard-text="78176298236890">复制</span></div>
											<div class="from-to"><span class="from">张****【沧州市】</span> <span class="arrow"></span> <span class="from to">蒋**【长沙市】</span></div>
											<p class="item">最新状态:快件已在 【长沙南二环】 签收, 签收人: 菜鸟, 如有疑问请电联:（18670868941）, 投诉电话:（0731-89560723）, 您的快递已经妥投。风里来雨里去, 只为客官您满意。上有老下有小, 赏个好评好不好？【请在评价快递员处帮忙点亮五颗星星哦~】</p>
											<p class="item ">更新时间:2021-03-12 12:22:10</p>
											<div class="side-btn">
												<div class="cont">
													<p class="status sending">已签收</p>
													<p class="o">评价快递员</p>
													<p class="o">一键退换货</p>
												</div>
											</div>
										</div>
									</div>
									
									<!--点击查看更多-->
									<p id="my-index-getAllData" class="check-all">查看全部记录</p>
									
									<div class="el-dialog__wrapper" style="display: none;">
										<div role="dialog" aria-modal="true" aria-label="我要催派" class="el-dialog" style="margin-top: 15vh; width: 500px;">
											<div class="el-dialog__header"><span class="el-dialog__title">我要催派</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div>
											<!---->
											<div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--primary"><!----><!----><span>确 定</span></button>
												</span>
											</div>
										</div>
									</div>
									<div class="el-dialog__wrapper contact-express-pop" style="display: none;">
										<div role="dialog" aria-modal="true" aria-label="联系快递员" class="el-dialog" style="margin-top: 15vh; width: 500px;">
											<div class="el-dialog__header"><span class="el-dialog__title">联系快递员</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div>
											<!---->
											<div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--primary"><!----><!----><span>拨打</span></button>
												</span>
											</div>
										</div>
									</div>
									<div class="el-dialog__wrapper my-r-d" style="display: none;">
										<div role="dialog" aria-modal="true" aria-label="订单详情" class="el-dialog" style="margin-top: 15vh; width: 650px;">
											<div class="el-dialog__header"><span class="el-dialog__title">订单详情</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div>
											<!---->
											<div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--primary"><!----><!----><span>确 定</span></button>
												</span>
											</div>
										</div>
									</div>
									<!---->
									<div class="home-aside">
										<div class="handle-btn">
											<div class="check-cont">
												<p>运单查询</p>
												<div class="textarea-box"> <textarea placeholder="输入1个或最多10个运单号（多个请用；隔开）"></textarea></div>
												<div class="btn-box"><span id="my-index-checkBill" class="check-btn">查询</span>
													<div id="my-index-checkHistory" class="detail">
														<p class="recent">最近查询记录</p>
														<p>暂无</p>
													</div>
												</div>
											</div>
											<a id="my-index-prescBtn" href="http://www.zto.com/express/expressPrice.html" class="btn-list f">运费时效查询</a>
											<a id="my-index-siteBtn" href="http://www.zto.com/express/expressWebsite.html" class="btn-list">服务网点查询</a>
											<a href="/create" class="btn-list" id="my-index-sendOrderBtn">预约寄件</a>
										</div>
										<div class="code-cont">
											<p>实时获取物流信息</p> <img src="gimg/code.png" alt="微信二维码">
											<p>打开微信扫描上方二维码，关注微信公众号，即可实时获取运单推送</p>
										</div>
									</div>
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
	<script type="text/javascript">
		
		$("#tab-first").hover(
		  function () {
		    $(this).css("color","#409eff")
		  },
		  function () {
		    $(this).css("color","#000000")
		  }
		);
	var clipboard = new ClipboardJS('.copy');
	layui.use(['layer','laydate'], function(){
	  var layer = layui.layer;
	  var laydate = layui.laydate;
	      clipboard.on('success', function (e) {
	      	layer.msg('复制成功！');
	        console.log(e);
	      });
	
	      clipboard.on('error', function (e) {
	      	layer.msg('复制失败');
	        console.log(e);
	      });
	});
</script>
	<script src="static/js/city-picker.data.js"></script>
	<script src="static/js/city-picker.js"></script>
	<script src="static/js/jquery.js"></script>
</html>