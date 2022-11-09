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
		<link rel="shortcut icon" type="image/x-icon" href="img/logo.ico" media="screen" />
		<link href="gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="gcss/chunk-libs.fd5c6263.css" rel="stylesheet">
		<link href="gcss/chunk-elementUI.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="gcss/chunk-elementUI.d199d944.css" rel="stylesheet">
		<link href="gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="gcss/chunk-libs.fd5c6263.css" rel="stylesheet">
		<link href="gcss/app.6c2bf22083d3083d6e1b.css" rel="stylesheet">
		<link href="gcss/app.605a3e76.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="static/css/chunk-5f22.6c2bf22083d3083d6e1b.css">
		<link rel="stylesheet" type="text/css" href="static/css/chunk-30a0.6c2bf22083d3083d6e1b.css">
		<link rel="stylesheet" type="text/css" href="static/css/chunk-8fdb.6c2bf22083d3083d6e1b.css">
		<script type="text/javascript" src="gjs/jquery-3.5.1.js"></script>
		<script type="text/javascript" src="gjs/clipboard.js"></script>
		<link href="static/css/city-picker.css" rel="stylesheet" />
		<link href="layui/css/layui.css" rel="stylesheet">
		<script type="text/javascript" src="layui/layui.js"></script>
		<script type="text/javascript" src="static/js/jquery.js" ></script>
        <script type="text/javascript" src="static/js/city-picker.data.js" ></script>
        <script type="text/javascript" src="static/js/city-picker.js" ></script>
	</head>

	<body>
		<div id="app">
			<div data-v-04fa0d38="" class="app-wrapper">
				<div data-v-04fa0d38="" class="header">
					<div class="header-main">
						<div>
							<a href="" style="display: block;"><img src="gimg/logo.png" alt=""></a>
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
								<a href="" class="" id="my-topMenu-help">帮助与反馈</a>
							</li>
							<li class="">
								<a href="myZto.jsp" class="" id="my-topMenu-userCenter">个人中心</a>
							</li>
						</ul>
						<div class="header-right">
							<div>
						<c:if test="${null!=customer.nickName}">
								<span>欢迎你，<i>${customer.nickName}</i>
                        </c:if>
                        <c:if test="${null==customer.nickName}">
                            <span>欢迎你，<i>${customer.nickName}</i>
                        </c:if>
                    	</span> <span id="index-exit" class="cursor">退出</span></div>
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
							<div data-v-7187aad4="" class="batch-create-container">
								<!---->
								<div class="navbar">
									<div class="navbarLeft"><img src="gimg/onlineSend.png" alt=""> <span>批量寄件</span> <span class="prompt">（17点前下单，业务员当天收件，17点后下单次日收件）</span></div>
									<div class="navbarRight"><span class="prompt">单独寄件，可以使用</span>
										<a href="jijian.html" class=""><button type="button" class="el-button el-button--primary el-button--small"><!----><!----><span>预约寄件</span></button></a>
									</div>
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
														<div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label for="sendData.name" class="el-form-item__label" style="width: 100px;">姓名：</label>
															<div class="el-form-item__content" style="margin-left: 100px;">
																<div class="el-input el-input--small">
																	<!----><input type="text" id="jiName" autocomplete="off" name="sendReceiveMan" maxlength="14" class="el-input__inner">
																	<!---->
																	<!---->
																	<!---->
																	<!---->
																</div> <button type="button" id="addAddressButton" class="el-button el-button--primary el-button--small"><!----><!----><span>地址簿</span></button>
																<!---->
															</div>
														</div>
														<div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label for="sendData.phone" class="el-form-item__label" style="width: 100px;">电话：</label>
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
														<div class="el-form-item el-form-item--feedback is-required el-form-item--small"><label  class="el-form-item__label" style="width: 100px;">所属区域：</label>
															<div class="el-form-item__content" style="margin-left: 100px;">
																<div class="el-input el-input--small">
																	<!----><input type="text" id="jiaddress" name="province" data-toggle="city-picker" readonly="readonly" autocomplete="off" class="el-input__inner">
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
																<p class="saveAddress"><label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><input type="checkbox" name="queDing" id="inputsss" value="0"></span><span class="el-checkbox__label">保存到常用地址簿<!----></span></label> <span class="analysis">智能解析地址</span></p>
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
																<div class="el-input-group__prepend">始发地：</div><input type="text" id="test002" data-toggle="city-picker" readonly="readonly" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
																<!---->
																<!---->
																<!---->
																<!---->
															</div>
															<!---->
															<div class="el-input el-input-group el-input-group--prepend">
																<div class="el-input-group__prepend">目的地：</div><input type="text" id="test001" data-toggle="city-picker" readonly="readonly" autocomplete="off" placeholder="请输入内容" class="el-input__inner">
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
								</form>

								<div class="full_popup my_address_book" id="bgmax" style="display: none;">
									<div class="gray"></div>
									<div class="box">
										<h2>我的地址簿</h2> <em class="close"></em>

										<ul class="address_list" id="address_list_app">

											<!---->
										</ul>
										<div class="page">
											<div class="el-pagination is-background"><button type="button" disabled="disabled" class="btn-prev"><i class="el-icon layui-icon layui-icon-left"></i></button>
												<ul class="el-pager">
													<li class="number active">1</li>
													<!---->
													<!---->
													<!---->
												</ul><button type="button" disabled="disabled" class="btn-next"><i class="el-icon layui-icon layui-icon-right"></i></button></div>
										</div>
									</div>
								</div>

								<div class="full_popup resolution_dialog" id="bgmin" style="display: none;">
									<div class="gray"></div>
									<div class="box">
										<h2>智能填写</h2> <em class="close"></em>
										<div class="input_textarea"><textarea placeholder="粘贴整段地址，自动识别姓名，电话和地址                                                                      例：张思锐，13200000101，上海市青浦区某某街道001号某某大厦"></textarea></div>
										<div class="submit"><button type="button" class="el-button el-button--primary"><!----><!----><span>提交</span></button></div>
									</div>
								</div>

								<div class="collect">
									<div class="collectLable">收</div>
									<div class="el-card is-always-shadow">
										<!---->
										<div class="el-card__body">
											<div class="collectTitle">
												<div class="collectTitleLeft">
													<div class="upload">
														<div tabindex="0" class="el-upload el-upload--text"><button type="button" class="el-button el-button--danger el-button--small" id="batch-file-picker">
															<!----><!----><span>选取文件</span>
														</button><%--<input type="file" name="file" id="filesss" accept=".xls,.xlsx" class="el-upload__input">--%>
															<form action="fileUpload" id="uploadForm" method="post" enctype="multipart/form-data">
																<input type="file" id="excelData" accept=".xls,.xlsx" name="file"  class="el-upload__input"/>
															</form>
														</div>
														<ul class="el-upload-list el-upload-list--text"></ul>
													</div>
												</div>
												<div class="collectTitleRight">
													<a id="batch-download-temp" href="static/fonts/中通快递批量下单模板.xlsx" download="中通快递批量下单模板" title="中通快递批量下单模板" class="download">下载模板</a>
													<div class="el-tooltip uploadHelp item" aria-describedby="el-tooltip-7450" tabindex="0">上传帮助</div>
												</div>
											</div>
											<div class="tablePrompt clearboth">
												已成功上传的收件人列表：
												<!---->
											</div>
											<div class="el-table el-table--fit el-table--enable-row-hover" style="width: 100%;">
												<div class="hidden-columns">
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
													<div></div>
												</div>
												<div class="el-table__header-wrapper">
													<table class="el-table__header" style="width: 1077px;" cellspacing="0" cellpadding="0" border="0">
														<colgroup>
															<col name="el-table_1_column_1" width="100">
															<col name="el-table_1_column_2" width="110">
															<col name="el-table_1_column_3" width="83">
															<col name="el-table_1_column_4" width="83">
															<col name="el-table_1_column_5" width="83">
															<col name="el-table_1_column_6" width="200">
															<col name="el-table_1_column_7" width="150">
															<col name="el-table_1_column_8" width="150">
															<col name="el-table_1_column_9" width="98">
															<col name="gutter" width="0">
														</colgroup>
														<thead class="has-gutter">
															<tr class="">
																<%--<th colspan="1" rowspan="1" class="el-table_1_column_2  is-center   is-leaf">
																	<div class="cell">编号</div>
																</th>--%>
																<th colspan="1" rowspan="1" class="el-table_1_column_1  is-center   is-leaf">
																	<div class="cell">收件人姓名</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_2  is-center   is-leaf">
																	<div class="cell">收件人手机</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_3  is-center   is-leaf">
																	<div class="cell">省</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_4  is-center   is-leaf">
																	<div class="cell">市</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_5  is-center   is-leaf">
																	<div class="cell">区（县）</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_6  is-center   is-leaf">
																	<div class="cell">详细地址</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_7  is-center   is-leaf">
																	<div class="cell">物品名称（限16字）</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_8  is-center   is-leaf">
																	<div class="cell">重量（默认1KG）</div>
																</th>
																<th colspan="1" rowspan="1" class="el-table_1_column_9  is-center   is-leaf">
																	<div class="cell">操作</div>
																</th>
																<th class="gutter" style="width: 0px; display: none;"></th>
															</tr>
														</thead>
													</table>
												</div>
												<div class="el-table__body-wrapper is-scrolling-none">
													<table class="el-table__body" style="width: 1077px;" cellspacing="0" cellpadding="0" border="0">
														<colgroup>
															<col name="el-table_1_column_1" width="50">
															<col name="el-table_1_column_2" width="50">
															<col name="el-table_1_column_3" width="110">
															<col name="el-table_1_column_4" width="120">
															<col name="el-table_1_column_5" width="120">
															<col name="el-table_1_column_6" width="97">
															<col name="el-table_1_column_7" width="97">
															<col name="el-table_1_column_8" width="97">
															<col name="el-table_1_column_9" width="70">
														</colgroup>
														<tbody>
															<!---->
														</tbody>
													</table>
													<div class="el-table__empty-block" style="width: 1077px;">
														<table class="layui-table" id="test"  lay-data="test" lay-filter="test"></table>
														<script type="text/html" id="barDemo" style="text-align: center">
															<a class="layui-btn layui-btn-danger layui-btn-xs" tyle="text-align: center" lay-event="del">删除</a>
														</script>
														<%--<span class="el-table__empty-text">暂无数据</span>--%>
													</div>
													<!---->
												</div>
												<!---->
												<!---->
												<!---->
												<!---->
												<div class="el-table__column-resize-proxy" style="display: none;"></div>
											</div>
										</div>
									</div>
								</div>
								<div class="submit">
									<div class="el-card is-always-shadow">
										<!---->
										<div class="el-card__body"><label role="checkbox" class="el-checkbox"><span aria-checked="mixed" class="el-checkbox__input"><input type="checkbox" id="tongyi" value=""></span><span class="el-checkbox__label">同意并接受<!----></span></label>
											<a>"快递服务协议"</a>
											<a href="https://www.zto.com/legal&amp;privacy/privacy.html" target="_blank">"隐私政策"</a>
											<p><button type="button" id="sub" class="el-button el-button--primary"><!----><!----><span>立即下单</span></button></p>
										</div>
									</div>
								</div>
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
		<script>
			var msgQuan;
			layui.use(['table','form'], function(){
				var table = layui.table;
				var form = layui.form;
				var layer = layui.layer;
				msgQuan= layui.layer;
				var $ = layui.$;
				$("#excelData").on("input",function(){
					var formData = new FormData($('#uploadForm')[0]);
					$.ajax({
						type: 'post',
						url: "test/fileUpload", //上传文件的请求路径必须是绝对路径
						data: formData,
						cache: false,
						processData: false,
						contentType: false,
						success:function (data) {
							/*table.reload('testReload', {
                                url: 'testData'
                                ,where: {} //设定异步数据接口的额外参数
                                //,height: 300
                            });*/
							var tableIns = table.render({
								elem: '#test'
								, url: 'test/testData'
								, title: '用户数据表'
								, cols: [[
									{field: 'name', title: '收件人',fixed: 'center', align: 'center',width: 80,templet:function(d){
											return '<div style = "text-align:center">'+d.name+'</div>'
										}}
									, {field: 'phone', title: '收件人手机',fixed: 'center', align: 'center',minWidth: 125,templet:function(d){
											return '<div style = "text-align:center">'+d.phone+'</div>'
										}}
									, {field: 'province', title: '省',fixed: 'center', align: 'center',width: 80,templet:function(d){
											return '<div style = "text-align:center">'+d.province+'</div>'
										}}
									, {field: 'city', title: '市',fixed: 'center', align: 'center',width: 80 ,templet:function(d){
											return '<div style = "text-align:center">'+d.city+'</div>'
										}}
									, {field: 'district', title: '区',fixed: 'center', align: 'center',width: 80,templet:function(d){
											return '<div style = "text-align:center">'+d.district+'</div>'
										}}
									, {field: 'detailAddress', title: '详细地址',fixed: 'center', align: 'center',minWidth: 200,templet:function(d){
											return '<div style = "text-align:center">'+d.detailAddress+'</div>'
										}}
									, {field: 'goodsName', title: '物品名',fixed: 'center', align: 'center',minWidth: 100,templet:function(d){
											return '<div style = "text-align:center">'+d.goodsName+'</div>'
										}}
									, {field: 'weight', title: '重量',fixed: 'center', align: 'center',minWidth: 100,templet:function(d){
											return '<div style = "text-align:center">'+d.weight+'</div>'
										}}
									,{title:'操作',templet:'#barDemo', align:'right', style:"text-align: center;", minWidth:150}
								]]
								, id: 'testReload'

							});
							$('.layui-table-header').hide();//表头隐藏的样式
							$(".layui-table-col-special").attr("text-align","center");
							layer.msg("上传成功！");
						}
					});

				});

				/**
				 * 监听行工具栏
				 */
				table.on('tool(test)', function (data) {
					if (data.event == "del") { // 更新客户信息
						layer.confirm('确定要删除这条数据吗？',{icon:3, title:"提示"},function (index) {
							// 关闭确认框
							layer.close(index);
							layer.msg("删除成功！");
							data.del();
						});
					}
				});
				/*立即下单按钮*/
				$("#sub").click(function () {

					if($("#jiName").val()==""){
						msgQuan.msg("请填写寄件人名字")
					}else {
						if($("#jiPhone").val()==""){
							msgQuan.msg("请填写手机号码")
						}else {
							if($("#jiaddress").val()==""){
								msgQuan.msg("请填写地址")
							}else {
								if($("#jiaddressx").val()==""){
									msgQuan.msg("请填写详细地址")
								}else {
									if ($("#tongyi").prop("checked")==true){

										if($("#excelData").val()!=""){
											var data1 = new Array();
											var datas = layui.table.cache["testReload"];
											console.log(datas);
											console.log(datas[0].name);
											for (let i = 0; i < datas.length; i++) {
												var con = {};
												con["name"] = datas[i].name;
												con["phone"] = datas[i].phone;
												con["province"] = datas[i].province;
												con["city"] = datas[i].city;
												con["district"] = datas[i].district;
												con["detailAddress"] = datas[i].detailAddress;
												con["goodsName"] = datas[i].goodsName;
												con["weight"] = datas[i].weight;
												data1[i] = con;
											}
											var json = JSON.stringify(data1);
											console.log("json="+json);
											$.ajax({
												type:"post",
												traditional: true,
												url:"${pageContext.request.contextPath}/jfg/orderAddress/insertBatchOrderAddress",
												dataType: 'text',
												data:$("#myForm").serialize()+"&data="+json,
												success:function (msg) {
													window.location.href="${pageContext.request.contextPath}/"+msg;
												}
											});
										}else{
											msgQuan.msg("请选取文件！")
										}


									}else{
										msgQuan.msg("同意快递服务协议,隐私政策才能寄件哦！")
									}
								}
							}
						}
					}
					//console.log("data-----"+JSON.stringify(table.cache));
				});

			});

		</script>

		<script type="text/javascript">
			$("#addAddressButton").click(function() {
				addressappen();

			})

			function addressappen(){
				$("#bgmax").attr("style", "display: inline");


				$("#address_list_app").empty()
				$.ajax({
					type: "POST",
					url: "${pageContext.request.contextPath}/jfg/address/selectAddressAll",
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
					url: "${pageContext.request.contextPath}/jfg/address/updateDefault",
					data: "addressId="+addId,
					success: function(msg){
						nini.msg(msg)
						//$("#bgmax").attr("style","display: inline")
						addressappen();
					}
				});

			}


		
			function dianji(){

				$("#jiaddress").citypicker();
				$(".address_list li").click(function() {
					$("#jiName").val($(this).children(".address_name").text())
					$("#jiPhone").val($(this).children(".address_phone").text())
					var address=$(this).children(".i_detail").text().split("-");
					$('#jiaddressx').val(address[3])
					$("#jiaddress").citypicker("reset");
		            $("#jiaddress").citypicker("destroy");
		            $("#jiaddress").citypicker({
		              province: address[0],
		              city: address[1],
		              district: address[2]
					})
		            $("#bgmax").attr("style","display: none");
		          
				});
			};
			
			
			
			
		
			 
			  $("#test001").bind("input propertychange",function(event){
				　　console.log($("#test001").val())
				});
  
			$('#city-picker-selector').on('choose-district.citypicker', function(event, tagert, values) {
				   console.log(values);
			});
			
			
			
			
			$(".analysis").click(function() {
				$("#bgmin").attr("style", "display: inline")
			})
			$(".close").click(function() {
				$("#bgmax").attr("style", "display: none")
				$("#bgmin").attr("style", "display: none")
			})
			$("#inputsss").click(function() {
				alert(this.checked)
			})
			$("#batch-file-picker").click(function() {
				$("#excelData").click()
			})
			
			var nini;
			
			layui.use('layer', function(){
				$(".layui-table-view").attr("border-style","none");
			  var layer = layui.layer;
			  nini = layui.layer;
			  $("#selectprice").click(function() {
					if ($("#test001").val()==""||$("#test002").val()=="") {
						layer.msg('请填写地址');
					} else{
						var a=$("#test001").val().split("/")
						var b=$("#test002").val().split("/")
						if (a[0]==b[0]){
							$("#oneprice").text("10 元/kg")
							$("#twoprice").text("6 元/kg")
						}else {
							$("#oneprice").text("15 元/kg")
							$("#twoprice").text("8 元/kg")
						}
					}

				});
			});
		</script>
	</body>

</html>