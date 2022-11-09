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
		<title>我的快递</title>

		<link rel="shortcut icon" type="image/x-icon" href="img/logo.ico" media="screen" />
		<link href="gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="gcss/chunk-libs.fd5c6263.css" rel="stylesheet">
		<link href="gcss/chunk-elementUI.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="gcss/chunk-elementUI.d199d944.css" rel="stylesheet">
		<link href="gcss/app.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="gcss/app.605a3e76.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="gcss/chunk-0471.6c2bf22083d3083d6e1b.css">
		<link href="static/css/chunk-43c7.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="static/css/chunk-elementUI.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<!--<link rel="stylesheet" type="text/css" href="gcss/chunk-5f22.6c2bf22083d3083d6e1b.css">-->
			<!--地址-->
		<link  href="static/css/city-picker.css" rel="stylesheet"/>
		
		
		<link rel="stylesheet" type="text/css" href="gcss/chunk-dcc1.6c2bf22083d3083d6e1b.css">

		<!--我的快遞-->
		<link href="gcss/chunk-43c7.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		
		
		<script type="text/javascript" src="gjs/jquery-3.5.1.js" ></script>
		<script type="text/javascript" src="gjs/clipboard.js" ></script>
		
		<link href="layui/css/layui.css" rel="stylesheet">
		<script type="text/javascript" src="layui/layui.js" ></script>
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
								<a href="index" >首页</a>
							</li>
							<li class="">
								<a href="ship.jsp" id="my-topMenu-sendOrder">预约寄件</a>
							</li>
							<li class="">
								<a href="batchShip.jsp" class="" id="my-topMenu-sendOrderBatch">批量寄件</a>
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
											<a href="myZto.jsp" style="cursor: pointer;color: #33a2f7;">  ${customer.nickName}</a>
										</c:if>
										<c:if test="${null==customer.nickName}">
											<a href="myZto.jsp" style="cursor: pointer;color: #33a2f7;">  ${customer.phone}</a>
										</c:if>
										<span id="index-exit" class="cursor">退出</span>
									</div>
								</c:if>
							</div>
						</div>
					</div>
				</div>
				<div data-v-04fa0d38="" class="main-container">
					<div data-v-04fa0d38="" class=".sidebar-container sidebar-container">
						<ul class="sidebar-main">
							<li class="nav-top"></li>
							<li class="nav-item"><span class=""></span>
								<a href="myZto.jsp" class="">我的中通</a>
							</li>
							<li class="nav-item selectedColor"><span class="selectedNav"></span>
								<a href="myExpress.jsp" class="router-link-exact-active router-link-active" id="leftMenu-express">我的快递</a>
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

				
					<!--我的快遞-->
					<div data-v-04fa0d38="" id="wodekuaidi" class="item-main-container">
						<section data-v-7187aad4="" data-v-04fa0d38="" class="app-main">
							<div data-v-7187aad4="" class="my-express">
								<div class="el-tabs el-tabs--top">
									<div class="el-tabs__header is-top">
										<div class="el-tabs__nav-wrap is-top">
											<div class="el-tabs__nav-scroll">
												<div role="tablist" class="el-tabs__nav is-top" style="transform: translateX(0px);">
													<div id="tab-sss" class="el-tabs__active-bar is-top" style="width: 42px; transform: translateX(0px);"></div>
													<div id="tab-first" aria-controls="pane-first" role="tab" aria-selected="true" tabindex="0" class="el-tabs__item is-top is-active">我寄的</div>
													<div id="tab-second" aria-controls="pane-second" role="tab" tabindex="-1" class="el-tabs__item is-top">我收的</div>
												</div>
											</div>
										</div>
									</div>
									<div class="el-tabs__content">
										<div role="tabpanel" id="pane-first" aria-labelledby="tab-first" class="el-tab-pane">
											<div class="search-bar"><em>下单时间：</em>
												<div class="el-date-editor el-range-editor el-input__inner date el-date-editor--daterange" id="divclear">
													<i class=" layui-icon">&#xe637;</i>
													<input id="test31" autocomplete="off" placeholder="开始日期" readonly="readonly" name="" class="el-range-input">
													<span class="el-range-separator">至</span>
													<input id="test32" autocomplete="off" placeholder="结束日期" readonly="readonly" name="" class="el-range-input">
													<i class="layui-icon" id="icondivs" style="display: none;">&#x1006;</i></div>
												<div class="el-input el-input--prefix el-input--suffix" style="width: 300px; margin-right: 110px;">
													<!----><input type="text" id="test33" autocomplete="off" placeholder="输入收件人的姓名、电话快速查找" maxlength="16" class="el-input__inner"><span class="el-input__prefix"><i class="el-input__icon layui-icon">&#xe615;</i></span>
													<!---->
													<!---->
													<!---->
												</div> <button type="button" id="selectji"  class="el-button el-button--primary"><!----><!----><span>查询</span></button> <button type="button" class="el-button el-button--success" id="selectJiDao"><!----><!----><span>导出</span></button></div>
											<div class="el-table el-table--fit el-table--striped el-table--enable-row-hover" id="out-table-send" style="width: 100%; ">
												<div class="hidden-columns">
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
												</div>
												<div class="el-table__header-wrapper">
													<table class="el-table__header" style="width: 1042px;" cellspacing="0" cellpadding="0" border="0">
														<colgroup>
															<col name="el-table_1_column_1" width="177">
															<col name="el-table_1_column_2" width="173">
															<col name="el-table_1_column_3" width="173">
															<col name="el-table_1_column_4" width="173">
															<col name="el-table_1_column_5" width="173">
															<col name="el-table_1_column_6" width="173">
															<col name="gutter" width="0">
														</colgroup>
														<thead class="has-gutter">
															<tr class="">
																<th colspan="1" rowspan="1" class="el-table_1_column_1  is-center   is-leaf">
																	<div class="cell">运单号</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_2  is-center   is-leaf">
																	<div class="cell">寄 — 收件人信息</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_3  is-center   is-leaf">
																	<div class="cell">下单时间</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_4  is-center   is-leaf">
																	<div class="cell">订单号</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_5  is-center   is-leaf">
																	<div class="cell">状态</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_6  is-center   is-leaf">
																	<div class="cell">操作</div>
																</th>
																<th class="gutter" style="width: 0px; display: none;"></th>
															</tr>
														</thead>
													</table>
												</div>
												<div class="el-table__body-wrapper is-scrolling-none">
													<table class="el-table__body" id="orderDivList" style="width: 1042px;font-size: 14px;" cellspacing="0" cellpadding="0" border="0">


													</table>
													<div class="el-table__empty-block" id="hhhhh" style="width: 1042px;"><span class="el-table__empty-text">暂无数据</span></div>
													<!---->
												</div>
												<!---->
												<!---->
												<!---->
												<!---->
												<div class="el-table__column-resize-proxy" style="display: none;"></div>
											</div>
											<div class="page">
												<div class="el-pagination is-background"><span class="el-pagination__total" id="totalOne">共 0 条</span><button type="button" disabled="disabled" class="btn-prev"><i class="el-icon layui-icon">&#xe603;</i></button>
													<ul class="el-pager">
														<li class="number active">1</li>
														<!---->
														<!---->
														<!---->
													</ul><button type="button" disabled="disabled" class="btn-next"><i class="el-icon layui-icon">&#xe602;</i></button></div>
											</div>
										</div>
										<div role="tabpanel" aria-hidden="true" id="pane-second" aria-labelledby="tab-second" class="el-tab-pane" style="display: none;">
											<div class="search-bar">
												<div class="el-input el-input--prefix el-input--suffix" style="width: 500px; margin-right: 330px;">
													<!----><input type="text" autocomplete="off" id="text34" placeholder="输入寄件人的姓名、电话、运单号快速查找" maxlength="16" class="el-input__inner"><span class="el-input__prefix"><i class="el-input__icon layui-icon">&#xe615;</i></span>
													<!---->
													<!---->
													<!---->
												</div> <button type="button" class="el-button el-button--primary" id="selectROrder"><!----><!----><span>查询</span></button> <button type="button" class="el-button el-button--success"><!----><!----><span>导出</span></button></div>
											<div class="el-table el-table--fit el-table--striped el-table--scrollable-x el-table--enable-row-hover" id="out-table-receive" style="width: 100%;">
												<div class="hidden-columns">
													<div></div>
													<div></div>
													<div></div>
													<div></div>
												</div>
												<div class="el-table__header-wrapper">
													<table class="el-table__header" style="width: 320px;" cellspacing="0" cellpadding="0" border="0">
														<colgroup>
															<col name="el-table_2_column_7" width="80">
															<col name="el-table_2_column_8" width="80">
															<col name="el-table_2_column_9" width="80">
															<col name="el-table_2_column_10" width="80">
															<col name="gutter" width="0">
														</colgroup>
														<thead class="has-gutter">
															<tr class="">
																<th colspan="1" rowspan="1" class="el-table_2_column_7  is-center   is-leaf">
																	<div class="cell">运单号</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_2_column_8  is-center   is-leaf">
																	<div class="cell">寄 — 收件人信息</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_2_column_9  is-center   is-leaf">
																	<div class="cell">状态</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_2_column_10  is-center   is-leaf">
																	<div class="cell">操作</div>
																</th>
																<th class="gutter" style="width: 0px; "></th>
															</tr>
														</thead>
													</table>
												</div>
												<div class="el-table__body-wrapper is-scrolling-left">
													<table id="orderDivListTwo" class="el-table__body" style="width: 320px;font-size: 14px;" cellspacing="0" cellpadding="0" border="0">

													</table>
													<div class="el-table__empty-block" id="jjjjj" style="width: 1042px;"><span class="el-table__empty-text">暂无数据</span></div>
													<!---->
												</div>
												<!---->
												<!---->
												<!---->
												<!---->
												<div class="el-table__column-resize-proxy" style="display: none;"></div>
											</div>
											<div class="page">
												<div class="el-pagination is-background"><span class="el-pagination__total" id="totalTwo">共 0 条</span><button type="button" disabled="disabled" class="btn-prev"><i class="el-icon layui-icon">&#xe603;</i></button>
													<ul class="el-pager">
														<li class="number active">1</li>
														<!---->
														<!---->
														<!---->
													</ul><button type="button" disabled="disabled" class="btn-next"><i class="el-icon layui-icon">&#xe602;</i></button></div>
											</div>
										</div>
									</div>
								</div>



								<div class="el-dialog__wrapper" id="orderBg" style="z-index: 2001;display:none;background-color: rgba(0,0,0,0.5)">
									<div role="dialog" aria-modal="true" aria-label="订单详情" class="el-dialog el-dialog--center" style="margin-top: 15vh; width: 500px;">
										<div class="el-dialog__header">
											<span class="el-dialog__title">订单详情</span>
											<button id="orderClose" type="button" aria-label="Close" class="el-dialog__headerbtn">
												<i class="el-dialog__close el-icon layui-icon layui-icon-close"></i>
											</button>
										</div>
										<div class="el-dialog__body">
											<div class="info-box" id="orderCon">

											</div>
										</div>
										<div class="el-dialog__footer">
											<div class="dialog-footer"><!---->
												<button type="button" class="el-button el-button--info"><!----><!----><span>删除订单</span></button>
												<button type="button" class="el-button el-button--primary"><!----><!----><span>再寄一单</span></button>
											</div>
										</div>
									</div>
								</div>






								<div class="el-dialog__wrapper" id="orderBgs" style="z-index: 2001;display: none">
									<div role="dialog" aria-modal="true" aria-label="电子底单" class="el-dialog el-dialog--center" style="margin-top: 15vh; width: 500px;">
										<div class="el-dialog__header"><span class="el-dialog__title">电子底单</span>
											<button type="button" id="orderCloses" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon layui-icon layui-icon-close"></i></button>
										</div>
										<div class="el-dialog__body" id="orderCons">

										</div>
										<div class="el-dialog__footer">
											<div class="dialog-footer">

											</div>
										</div>
									</div>
								</div>










								<div data-v-62290244="" id="exportExcelTemplate" style="display: none;" hidden="hidden"></div>
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
		$(function () {
			selectJiList();
		})


		function selectJiList(a,b,c){
			$("#orderDivList").empty()
			var queryOrdercon="<colgroup><col name=\"el-table_1_column_1\" width=\"177\">" +
					"<col name=\"el-table_1_column_2\" width=\"173\">\n" +
					"<col name=\"el-table_1_column_3\" width=\"173\">\n" +
					"<col name=\"el-table_1_column_4\" width=\"173\">\n" +
					"<col name=\"el-table_1_column_5\" width=\"173\">\n" +
					"<col name=\"el-table_1_column_6\" width=\"173\">\n" +
					"</colgroup>";
			$.ajax({
				type: "POST",
				url: "jfg/order/queryOrderSendModels?offset=1&limit=100&createDate="+a+"&createDateTwo="+b+"&sendName="+c,
				success: function(queryOrderModelList){
					if(queryOrderModelList==null||queryOrderModelList==""){
						$("#hhhhh").attr("style","width: 1042px;")
					}else{
						$("#hhhhh").attr("style","width: 1042px;display: none;")

						for (let i = 0; i <queryOrderModelList.length ; i++) {
							queryOrdercon+="<tbody ><tr class='el-table__row' style='font-size: 14px;'>"+
									"<td rowspan='1' colspan='1' class='el-table_1_column_1 is-center '>"+
									"<div class='cell'>"+queryOrderModelList[i].waybillNumber+"</div></td>"+
									"<td rowspan='1' colspan='1' class='el-table_1_column_2 is-center '>"+
									"<div class='cell'>"+queryOrderModelList[i].jiAddress.sendReceiveMan +"=>"+queryOrderModelList[i].shouAddress.sendReceiveMan+"</div></td>"+
									"<td rowspan='1' colspan='1' class='el-table_1_column_3 is-center'>"+
									"<div class='cell'>"+queryOrderModelList[i].createDate+"</div></td>"+
									"<td rowspan='1' colspan='1' class='el-table_1_column_4 is-center '>"+
									"<div class='cell'>"+queryOrderModelList[i].orderNumber+"</div></td>"+
									"<td rowspan='1' colspan='1' class='el-table_1_column_5 is-center '>"
							if (queryOrderModelList[i].orderState==0){
								queryOrdercon+="<div class='cell'>已取消</div>";
							}else if(queryOrderModelList[i].orderState==1){
								queryOrdercon+="<div class='cell'>待处理</div>";
							}else if(queryOrderModelList[i].orderState==2){
								queryOrdercon+="<div class='cell'>待揽件</div>";
							}else if(queryOrderModelList[i].orderState==3){
								queryOrdercon+="<div class='cell'>已揽件</div>";
							}else if(queryOrderModelList[i].orderState==4){
								queryOrdercon+="<div class='cell'>在途</div>";
							}else if(queryOrderModelList[i].orderState==5){
								queryOrdercon+="<div class='cell'>待派件</div>";
							}else if(queryOrderModelList[i].orderState==6){
								queryOrdercon+="<div class='cell'>已签收</div>";
							}else{
								queryOrdercon+="<div class='cell'>未知</div>";
							}
							var sps=queryOrderModelList[i].orderNumber+','+queryOrderModelList[i].orderState+','+queryOrderModelList[i].jiAddress.sendReceiveMan+','+queryOrderModelList[i].jiAddress.phone+','+queryOrderModelList[i].shouAddress.sendReceiveMan+','+queryOrderModelList[i].shouAddress.phone+','+queryOrderModelList[i].jiAddress.province+','+queryOrderModelList[i].jiAddress.city+','+queryOrderModelList[i].jiAddress.district+','+queryOrderModelList[i].jiAddress.detailAddress+','+queryOrderModelList[i].shouAddress.province+','+queryOrderModelList[i].shouAddress.city+','+queryOrderModelList[i].shouAddress.district+','+queryOrderModelList[i].shouAddress.detailAddress+','+queryOrderModelList[i].createDate;
							queryOrdercon+="</td><td rowspan='1' colspan='1' class='el-table_1_column_6 is-center '>"+
									"<div class='cell'>"+
									"<button type='button' class='el-button el-button--text' id='my-express-detail'>"+
									"<span onclick='orderDetails("+queryOrderModelList[i].orderId+")'>订单详情</span></button></div></td></tr></tbody>"
						}
						$("#orderDivList").append(queryOrdercon);
						$("#totalOne").text("共 "+queryOrderModelList.length+" 条");
					}
				}
			});
		}

		function orderDetails(id){
			$("#orderBg").attr("style","z-index: 2001;background-color: rgba(0,0,0,0.5)");
			$("#orderCon").empty()
			$.ajax({
				type: "POST",
				url: "jfg/order/queryOrderById?orderId="+id,
				success: function(queryOrderModel){
					var orderCons="<div class=\"bar\"><p>订单号："+queryOrderModel.orderNumber+"</p>";
					if (queryOrderModel.orderState==0){
						orderCons+="<p>最新状态：已取消</p></div>";
					}else if(queryOrderModel.orderState==1){
						orderCons+="<p>最新状态：待处理</p></div>";
					}else if(queryOrderModel.orderState==2){
						orderCons+="<p>最新状态：待揽件</p></div>";
					}else if(queryOrderModel.orderState==3){
						orderCons+="<p>最新状态：已揽件</p></div>";
					}else if(queryOrderModel.orderState==4){
						orderCons+="<p>最新状态：运输中</p></div>";
					}else if(queryOrderModel.orderState==5){
						orderCons+="<p>最新状态：待派件</p></div>";
					}else if(queryOrderModel.orderState==6){
						orderCons+="<p>最新状态：已签收</p></div>";
					}else{
						orderCons+="<p>最新状态：未知</p></div>";
					}
					orderCons+="<table cellspacing=\"1\" cellpadding=\"0\" border=\"1\"><tr><td>寄件</td>" +
							"<td><h3>"+queryOrderModel.jiAddress.sendReceiveMan+" "+queryOrderModel.jiAddress.phone+"</h3> <p>"+queryOrderModel.jiAddress.province+queryOrderModel.jiAddress.city+queryOrderModel.jiAddress.district+" "+queryOrderModel.jiAddress.detailAddress+"</p></td></tr><tr><td>收件</td><td><h3>"+queryOrderModel.shouAddress.sendReceiveMan+" "+queryOrderModel.shouAddress.phone+"</h3>\n" +
							"<p>"+queryOrderModel.shouAddress.province+queryOrderModel.shouAddress.city+queryOrderModel.shouAddress.district+" "+queryOrderModel.shouAddress.detailAddress+"</p></td></tr><tr><td>其他</td>\n" +
							"<td><p><i>下单时间：</i> <em>"+queryOrderModel.createDate+"</em></p></td>\n" +
							"</tr></table>"
					$("#orderCon").append(orderCons);
				}
			})
		}

		$("#orderClose").click(function(){
			$("#orderBg").attr("style","z-index: 2001;display:none;background-color: rgba(0,0,0,0.5)")
		})
		$("#orderCloses").click(function(){
			$("#orderBgs").attr("style","z-index: 2001;display:none;background-color: rgba(0,0,0,0.5)")
		})
		
		$("#tab-first").click(function() {
			$("#tab-sss").css("transform","translateX(0px)")
			$("#pane-first").attr("style","")
			$("#pane-first").removeAttr("aria-hidden")
			$("#pane-second").attr("style","display: none;")
			$("#pane-second").attr("aria-hidden","true")
			$(".is-scrolling-none").attr("style","")
			$(".el-table__body").attr("style","width: 320px;")
			$(".el-table__empty-block").attr("style","width: 1042px;")
			$(".el-table__header").attr("style","width: 320px;")
			$("#out-table-receive").attr("class","el-table el-table--fit el-table--striped el-table--scrollable-x el-table--enable-row-hover")
			selectJiList();
		})
		$("#tab-second").click(function() {
			$("#pane-first").attr("style", "display: none;")
			$("#pane-first").attr("aria-hidden", "true")
			$("#pane-second").attr("style", "")
			$("#pane-second").removeAttr("aria-hidden")
			$("#tab-sss").css("transform", "translateX(86px)")
			//$(".is-scrolling-none").attr("style", "height: 402px;")
			$(".el-table__body").attr("style", "width: 1042px;")
			$(".el-table__empty-block").attr("style", "width: 1042px;")
			$(".el-table__header").attr("style", "width: 1042px;")
			$("#out-table-receive").attr("class", "el-table el-table--fit el-table--striped el-table--enable-row-hover");

			selectShouList();
		})

		function selectShouList(a){
			$("#orderDivListTwo").empty();
			var queryOrderconTwo = "<colgroup>" +
					"<col name='el-table_2_column_7' width='80'><col name='el-table_2_column_8' width='80'>" +
					"<col name='el-table_2_column_9' width='80'>" +
					"<col name='el-table_2_column_10' width='80'></colgroup>"
			$.ajax({
				type: "POST",
				url: "jfg/order/queryOrderReceiverModels?offset=1&limit=1000&receiceName="+a,
				success: function (queryOrderModelList) {
					if (queryOrderModelList == null||queryOrderModelList=="") {
						$("#jjjjj").attr("style", "width: 1042px;")
					} else {
						$("#jjjjj").attr("style", "width: 1042px;display: none;")
						for (let i = 0; i < queryOrderModelList.length; i++) {
							queryOrderconTwo += "<tbody><tr class=\"el-table__row\" style='font-size: 14px;'>" +
									"<td rowspan=\"1\" colspan=\"1\" class=\"el-table_2_column_7 is-center \">" +
									"<div class=\"cell\">"+queryOrderModelList[i].waybillNumber+"</div></td>" +
									"<td rowspan=\"1\" colspan=\"1\" class=\"el-table_2_column_8 is-center \">" +
									"<div class=\"cell\">"+queryOrderModelList[i].jiAddress.sendReceiveMan+"=>"+queryOrderModelList[i].shouAddress.sendReceiveMan+"</div></td>" +
									"<td rowspan=\"1\" colspan=\"1\" class=\"el-table_2_column_9 is-center \">"
							if (queryOrderModelList[i].orderState==0){
								queryOrderconTwo+="<div class='cell'>已取消</div>";
							}else if(queryOrderModelList[i].orderState==1){
								queryOrderconTwo+="<div class='cell'>待处理</div>";
							}else if(queryOrderModelList[i].orderState==2){
								queryOrderconTwo+="<div class='cell'>待揽件</div>";
							}else if(queryOrderModelList[i].orderState==3){
								queryOrderconTwo+="<div class='cell'>已揽件</div>";
							}else if(queryOrderModelList[i].orderState==4){
								queryOrderconTwo+="<div class='cell'>运输中</div>";
							}else if(queryOrderModelList[i].orderState==5){
								queryOrderconTwo+="<div class='cell'>待派件</div>";
							}else if(queryOrderModelList[i].orderState==6){
								queryOrderconTwo+="<div class='cell'>已完成</div>";
							}else{
								queryOrderconTwo+="<div class='cell'>未知</div>";
							}
							queryOrderconTwo+="<td rowspan=\"1\" colspan=\"1\" class=\"el-table_2_column_10 is-center \">" +
									"<div class=\"cell\">" +
									"<button type=\"button\" class=\"el-button el-button--text\" onclick='dianzi("+queryOrderModelList[i].orderId+")'>" +
									"<span>电子底单</span></button> " +
									"<button type=\"button\" class=\"el-button el-button--text\"><span>物流轨迹</span></button></div></td></tr></tbody>"


						}

						$("#orderDivListTwo").append(queryOrderconTwo);
						$("#totalTwo").text("共 "+queryOrderModelList.length+" 条")
					}

				}

			})
		}

		function dianzi(id){
			$("#orderBgs").attr("style","z-index: 2001;background-color: rgba(0,0,0,0.5)");
			$("#orderCons").empty()
			$.ajax({
				type: "POST",
				url: "jfg/order/queryOrderById?orderId="+id,
				success: function(queryOrderModel){

					var orderCoss="<div class=\"info-box\"><div class=\"bar\">\n" +
							"<img class=\"barcode\" src=\"static/images/tiaoxinma.png\">\n" +
							"<p>"+queryOrderModel.waybillNumber+"</p>\n" +
							"</div>\n" +
							"<table cellpadding=\"0\" cellspacing=\"1\" border='1'>\n" +
							"<tr><td>寄件</td> <td><h3>"+queryOrderModel.jiAddress.sendReceiveMan+" "+queryOrderModel.jiAddress.phone+"</h3> <p>"+queryOrderModel.jiAddress.province+queryOrderModel.jiAddress.city+queryOrderModel.jiAddress.district+" "+queryOrderModel.jiAddress.detailAddress+"</p></td></tr>\n" +
							"<tr><td>收件</td> <td><h3>"+queryOrderModel.shouAddress.sendReceiveMan+" "+queryOrderModel.shouAddress.phone+"</h3> <p>"+queryOrderModel.shouAddress.province+queryOrderModel.shouAddress.city+queryOrderModel.shouAddress.district+" "+queryOrderModel.shouAddress.detailAddress+"</p></td></tr>\n" +
							"<tr><td>其他</td> <td><!----> <!----> <!----> <p><i>取件快递员：</i> <em>黄沙市场部许生</em></p> <p><i>快递员电话：</i> <em>13760651465</em></p></td></tr>\n" +
							"</table>\n" +
							"</div>";
					$("#orderCons").append(orderCoss);
				}
			})


		}
		$("#selectROrder").click(function(){
			var a=$("#text34").val();
			selectShouList(a);
		})



		$("#selectji").click(function() {
			var a=$("#test31").val();
			var b=$("#test32").val();
			var c=$("#test33").val();
			selectJiList(a,b,c);
		})
		$("#selectJiDao").click(function () {
			alert(2)
		})


		$("#tab-first").hover(
		  function () {
		    $(this).css("color","#409eff")
		  },
		  function () {
		    $(this).css("color","#000000")
		  }
		);
		
		
	layui.use(['layer','laydate'], function(){
	  var layer = layui.layer;
	  var laydate = layui.laydate;  
	  //格子主题
	  laydate.render({
	    elem: '#test31'
	    ,theme: 'grid'
	  });
	  //格子主题
	  laydate.render({
	    elem: '#test32'
	    ,theme: 'grid'
	  });
	}); 

	
	$("#divclear").hover(
	  function () {
	    $("#icondivs").attr("style","display: inline;")
	  },
	  function () {
	     $("#icondivs").attr("style","display: none;")
	  }
	);
	$("#icondivs").click(function(){
		$("#test31").val("");
		$("#test32").val("");
	})
	

	
	</script>

	<script src="static/js/city-picker.data.js"></script>
	<script src="static/js/city-picker.js"></script>
	<script src="static/js/jquery.js"></script>
</html>