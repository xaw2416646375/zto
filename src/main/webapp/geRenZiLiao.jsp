<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2021/4/23
  Time: 8:43
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
    <link href="gcss/chunk-libs.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="gcss/chunk-libs.fd5c6263.css" rel="stylesheet">
    <link href="gcss/chunk-elementUI.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="gcss/chunk-elementUI.d199d944.css" rel="stylesheet">
    <link href="gcss/app.6c2bf22083d3083d6e1b.css" rel="stylesheet">
    <link href="gcss/app.605a3e76.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="gcss/chunk-0471.6c2bf22083d3083d6e1b.css">
    <link rel="shortcut icon" type="image/x-icon" href="img/logo.ico" media="screen" />
    <!--<link rel="stylesheet" type="text/css" href="gcss/chunk-5f22.6c2bf22083d3083d6e1b.css">-->
    <!--地址-->
    <link  href="static/css/city-picker.css" rel="stylesheet"/>


    <link rel="stylesheet" type="text/css" href="gcss/chunk-dcc1.6c2bf22083d3083d6e1b.css">
    <!--個人資料-->
    <link href="gcss/chunk-dcc1.6c2bf22083d3083d6e1b.css" rel="stylesheet">

    <script type="text/javascript" src="gjs/jquery-3.5.1.js" ></script>
    <script type="text/javascript" src="gjs/clipboard.js" ></script>

    <link href="layui/css/layui.css" rel="stylesheet">
    <script type="text/javascript" src="layui/layui.js" ></script>
</head>
<body>
<input type="hidden" id="customerId" value="${customer.customerId}">
<div id="app">
    <div data-v-04fa0d38="" class="app-wrapper">
        <div data-v-04fa0d38="" class="header">
            <div class="header-main">
                <div>
                    <a href="" target="_blank" style="display: block;"><img src="gimg/logo.png" alt=""></a>
                </div>
                <ul>
                    <li>
                        <a href="index">首页</a>
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
                    <!---->
                </div>
            </div>
        </div>
        <div data-v-04fa0d38="" class="main-container">
            <div data-v-04fa0d38="" class=".sidebar-container sidebar-container">
                <ul class="sidebar-main">
                    <li class="nav-top"></li>
                    <li class="nav-item "><span class=""></span>
                        <a href="myZto.jsp" class="">我的中通</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="woDeKuaiDi.jsp" class="" id="leftMenu-express">我的快递</a>
                    </li>
                    <li class="nav-item"><span class=""></span>
                        <a href="addressselect" class="" id="leftMenu-address">我的地址簿</a>
                    </li>
                    <li class="nav-item selectedColor"><span class="selectedNav"></span>
                        <a href="select01" class="router-link-exact-active router-link-active">个人资料设置</a>
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


            <!--个人资料设置-->
            <div data-v-04fa0d38="" id="gerenziliao"  class="item-main-container">
                <section data-v-7187aad4="" data-v-04fa0d38="" class="app-main">
                    <div data-v-7187aad4="" class="personal-setting-wrapper">
                        <div class="header">个人资料设置</div>
                        <div class="s-box">
                            <div class="aside"><span class="head-pic" id="head-picsss">
                                <c:if test="${null!=photo}">
                                    <img id="img_01" src="myFile/${photo}" alt="头像">
                                </c:if>
                                <c:if test="${null==photo}">
                                    <img id="img_01" src="gimg/t.png" alt="头像">
                                </c:if>
                                <%--<img id="img_01" src="myFile/${photo}">--%>
                            </span>
                            </div>
                            <div  class="amain" id="amain12"></div>
                            <div class="amain" id="123">
                                <c:if test="${null!=nickname}">
                                    <p ><span>昵称:</span><span id="nc">${nickname}</span></p>
                                </c:if>
                                <c:if test="${null==nickname}">
                                    <p ><span>昵称:</span><span id="nc">无</span></p>
                                </c:if>
                                <c:if test="${null!=truename}">
                                    <p ><span>真实姓名:</span><span id="nm">${truename}</span></p>
                                </c:if>
                                <c:if test="${null==truename}">
                                    <p ><span>真实姓名:</span><span id="nm">无</span></p>
                                </c:if>
                                <c:if test="${null!=brithday}">
                                    <p ><span>生日:</span><span  id="dt">${brithday}</span></p>
                                </c:if>
                                <c:if test="${null==brithday}">
                                    <p ><span>生日:</span><span  id="dt">无</span></p>
                                </c:if>
                                <c:if test="${null!=address}">
                                    <p ><span>省市区:</span><span id="ad" style="width: 255px">${address}</span></p>
                                </c:if>
                                <c:if test="${null==address}">
                                    <p ><span>省市区:</span><span id="ad" style="width: 255px">无</span></p>
                                </c:if>
                                <c:if test="${null!=baddress}">
                                    <p ><span>详细地址:</span><span id="ad01" style="width: 255px">${baddress}</span></p>
                                </c:if>
                                <c:if test="${null==baddress}">
                                    <p ><span>详细地址:</span><span id="ad01" style="width: 255px">无</span></p>
                                </c:if>
                                <button id="updateMybutton" type="button" class="el-button modify el-button--primary"><!----><!----><span>修改</span></button>
                            </div>
                            <!---->
                        </div>
                        <div class="el-dialog__wrapper cropper-wrapper" style="display: none;">
                            <div role="dialog" aria-modal="true" aria-label="dialog" class="el-dialog" style="margin-top: 15vh; width: 50%;">
                                <div class="el-dialog__header"><span class="el-dialog__title"></span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div>
                                <!---->
                                <div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--default"><!----><!----><span>取 消</span></button> <button type="button" class="el-button el-button--primary"><!----><!----><span>确 定</span></button></span>
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
    $("#updateMybutton").click(function(){
        $("#head-picsss").append("<input type='file' id='img' onchange='show(this.files)'><i>上传头像</i>");
        $("#123").hide();
        $("#amain12").append($("#updateMyfrom").text());
        var cid = $("#customerId").val();
        //修改修改页面中input placeholder 属性
        $.ajax({
            type: 'POST',
            url: 'selectOne',
            data: "customerid="+cid ,
            success: function(msg) {
                $("#form_1").attr("value", msg.nickName);
                $("#form_2").attr("value", msg.trueName);
                var sex = msg.sex;
                if (msg.sex == '男') {
                    $("#form_11").attr("checked", true);
                } else {
                    $("#form_12").attr("checked", true);
                }
                var bval = new Array();
                bval = msg.birthday.split("T");
                $("#test33").attr("value",bval[0]);

                var addval = new Array();
                var addv = new Array();
                addval = msg.address.split("-")
                $("#form_21").attr("data-value", addval[0]);
                $("#form_22").attr("data-value", addval[1]);
                addv = addval[2].split(";");
                $("#form_23").attr("data-value", addv[0]);
                $("#form_3").attr("value", addv[1]);
                layui.use(['layer', 'form', 'layarea'], function () {
                    var layer = layui.layer
                        , form = layui.form
                        , layarea = layui.layarea;

                    layarea.render({
                        elem: '#area-picker',
                        data: {
                            province: addval[0],
                            city: addval[1],
                            county: addv[0],
                        },
                        change: function (res) {
                            //选择结果
                            console.log(res);
                        }
                    });

                });
            }
        });
    })
</script>

<script type="text/html" id="updateMyfrom">
    <form id="form_01" class="el-form">

        <div class="el-form-item is-required"><label for="nickname" class="el-form-item__label" style="width: 80px;">昵称</label>
            <div class="el-form-item__content" style="margin-left: 80px;">
                <div class="el-input">
                    <!----><input id="form_1" type="text" autocomplete="off" placeholder="请填写昵称" maxlength="16" class="el-input__inner">
                    <!----><div id="yz01" style="color: red;font-size: 11px;display: none"></div>
                    <!---->
                    <!---->
                    <!---->
                </div>
                <!---->
            </div>
        </div>
        <div class="el-form-item is-required"><label for="realName" class="el-form-item__label" style="width: 80px;">真实姓名</label>
            <div class="el-form-item__content" style="margin-left: 80px;">
                <div class="el-input">
                    <!----><input id="form_2" type="text" autocomplete="off" placeholder="与身份证保持一致" maxlength="16" class="el-input__inner">
                    <!----><div id="yz02" style="color: red;font-size: 11px;display: none">a</div>
                    <!---->
                    <!---->
                    <!---->
                </div>
                <!---->
            </div>
        </div>
        <div class="el-form-item is-required">
            <label for="gender" class="el-form-item__label" style="width: 80px;">性别</label>
            <div class="el-form-item__content" style="margin-left: 80px;">
                <div role="radiogroup" class="el-radio-group" style="margin-top: 13px">
                    <label id="updateNan" role="radio" tabindex="0" class="el-radio">
								<span id="updateNans1" class="el-radio__input">
									<input id="form_11" name="sexnn" type="radio" aria-hidden="true" tabindex="-1"  value="男" >
								</span>
                        <span class="el-radio__label">男</span>
                    </label>
                    <label id="updatenv" role="radio" tabindex="-1" class="el-radio">
								<span id="updateNvs1" class="el-radio__input">
									<input id="form_12" name="sexnn" type="radio" aria-hidden="true" tabindex="-1"  value="女">
								</span>
                        <span class="el-radio__label">女</span>
                    </label>
                </div>
                <!---->
            </div>
        </div>
        <div class="el-form-item is-required"><label for="birthday" class="el-form-item__label" style="width: 80px;">生日</label>
            <div class="el-form-item__content" style="margin-left: 80px;">
                <div class="el-date-editor birth el-input el-input--prefix el-input--suffix el-date-editor--date" >
                    <!----><input value="" id="test33" type="text" readonly="readonly" autocomplete="off" name="" placeholder="年-月-日" class="el-input__inner"><span class="el-input__prefix"><i class="el-input__icon layui-icon layui-icon-date"></i><!----></span><span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i><!----><!----><!----><!----></span>
                    <!---->
							</span>
                    <!---->
                    <!---->
                </div>
                <!----><div id="yz04" style="color: red;font-size: 11px;display: none">a</div>
            </div>

        </div>
        <div class="el-form-item is-required"><label for="area" class="el-form-item__label" style="width: 80px;">省市区</label>
            <div class="el-form-item__content" style="margin-left: 80px;width: 500px;">
                <div class="el-input">
                    <!--<input type="text" readonly="readonly" data-toggle="city-picker" autocomplete="off" placeholder="请选择省市区" class="el-input__inner">-->
                    <!---->
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
                    <!---->
                </div>
                <!---->
                <!---->
            </div>
        </div>

        <div class="el-form-item is-required"><label for="homeAddress" class="el-form-item__label" style="width: 80px;">详细地址</label>
            <div class="el-form-item__content" style="margin-left: 80px;">
                <div class="el-input">
                    <!----><input id="form_3" type="text" autocomplete="off" placeholder="请填写详细地址" maxlength="64" class="el-input__inner">
                    <!----><div id="yz06" style="color: red;font-size: 11px;display: none">a</div>
                    <!---->
                    <!---->
                    <!---->
                </div>
                <!---->
            </div>
        </div>
        <div class="el-form-item">
            <!---->
            <div class="el-form-item__content" style="margin-left: 80px;"><button id="submit_1" type="button" class="el-button el-button--primary"><!----><!----><span>提交</span></button>
                <!---->
            </div>
        </div>
    </form>


    <script type="text/javascript">
        var cid = $("#customerId").val();
        function update_01() {
            $.ajax({
                type: 'POST',
                url: 'selectOne',
                data: "customerid="+cid ,
                success: function(msg) {
                    $("#nc").attr("value", msg.nickName);
                    $("#nm").attr("value", msg.trueName);
                    var bval = new Array();
                    bval = msg.birthday.split("T");
                    $("#dt").attr("value",bval[0]);


                    var addv = new Array();
                    addv = msg.address.split(";");
                    $("#ad").attr("data-value", addval[0]);
                    $("#ad01").attr("data-value", addval[1]);
                }

            });
        }
        function show(f) {
            var str = "";
            for (var i = 0; i < f.length; i++) {
                var reader = new FileReader();
                reader.readAsDataURL(f[i]);
                reader.onload = function (e) {
                    str += "<img  id='img_01' src='" + e.target.result + "'/>";
                    $("#img_01")[0].outerHTML = str;
                }
            }
        }
        let sexs = "男";
        $("input[name='sexnn']").click(function (){
           $(this).attr("checked","checked");
            sexs=$(this).val();
        });
        layui.use(['table','form'], function() {
            var layer = layui.layer;
            var $ = layui.$;
        $("#submit_1").on("click",function () {

            if($("#form_1").val()==""){
                $("#yz01").text("请输入昵称");
                $("#yz01").show();
            }else{
                $("#yz01").hide();
            }
            if($("#form_2").val()==""){
                $("#yz02").text("真实姓名不能为空");
                $("#yz02").show();
            }else{
                $("#yz02").hide();
            }
            if($("#test33").val()==""){
                $("#yz04").text("出生日期不能为空");
                $("#yz04").show();
            }else{
                $("#yz04").hide();
            }
            if($("#form_3").val()==""){
                $("#yz06").text("详细地址不能为空");
                $("#yz06").show();
            }else{
                $("#yz06").hide();
            }
            var customer = "customerId="+$("#customerId").val()+"&nickName="+$("#form_1").val() +"&trueName="+ $("#form_2").val() +"&sex="+$("input[name='sexnn']").val()
                +"&birthday="+$("#test33").val()+"&address="+$("#form_21").val() +"-"+$("#form_22").val() +"-"+$("#form_23").val() +";"+$("#form_3").val() ;
            /*拼接用户输入的各项值*/
            /*var str = "1"+","+$("#form_1").val() +","+ $("#form_2").val() +","+$("input[name='sexnn']").val() +","
                    +$("#test33").val()+","+$("#form_21").val() +"-"+$("#form_22").val() +"-"+$("#form_23").val() +";"+$("#form_3").val() ;*/

            if($("#form_1").val() !="" && $("#form_2").val() !="" && $("#test33").val() !="" && $("#form_3").val()!="" ){
                $.ajax({
                    type: 'POST',
                    url: 'update_user',
                    data: "customerId="+$("#customerId").val()+"&nickName="+$("#form_1").val() +"&trueName="+ $("#form_2").val() +"&sex="+sexs
                        +"&birthday="+$("#test33").val()+"&address="+$("#form_21").val() +"-"+$("#form_22").val() +"-"+$("#form_23").val() +";"+$("#form_3").val() ,
                    success: function(msg){
                        $('.phone').text(msg.phone);
                        $('#nc').text(msg.nickName);
                        $("#nm").text(msg.trueName);
                        var dateval = new Array();
                        dateval = msg.birthday.split("T");
                        $("#dt").text(dateval[0]);
                        var ads =new Array();
                        ads=msg.address.split(";");
                        $("#ad").text(ads[0]);
                        $("#ad01").text(ads[1]);
                    }
                });
                var cid =$("#customerId").val();
                var formdata = new FormData();
                var imgdata=$("#img")[0].files[0];
                formdata.append("file", imgdata); //加入文件对象
                var fileimg = "";
                $.ajax({
                    type: 'POST',
                    url: 'fileUpload',
                    data: formdata,
                    cache: false,//上传文件无需缓存
                    processData: false,//用于对data参数进行序列化处理 这里必须false
                    contentType: false,
                    success: function(msg){
                        fileimg = msg.photo;
                        $("#head-picsss").html("<img id='img001' src='gimg/t.png'>");
                        $("#img_wode").attr("src","myFile/"+fileimg);
                        $("#img001").attr("src","myFile/"+fileimg);
                    }
                });
                $("#amain12").text("");
                layer.msg("修改成功！");
                $("#123").show();
            }
        });
        });
        $("#updateNan").click(function(){

            $(this).removeClass().addClass("el-radio is-checked");
            $(this).attr("aria-checked","true");
            $("#updateNan #updateNans1").removeClass().addClass("el-radio__input is-checked");

            $("#updatenv").removeClass().addClass("el-radio");
            $("#updatenv").removeAttr("aria-checked");
            $("#updatenv #updateNvs1").removeClass().addClass("el-radio__input");

        })
        $("#updatenv").click(function(){
            $(this).removeClass().addClass("el-radio is-checked");
            $(this).attr("aria-checked","true");
            $("#updatenv #updateNvs1").removeClass().addClass("el-radio__input is-checked");

            $("#updateNan").removeClass().addClass("el-radio");
            $("#updateNan").removeAttr("aria-checked");
            $("#updateNan #updateNans1").removeClass().addClass("el-radio__input");
        })


        layui.use('laydate', function(){
            var laydate = layui.laydate;
            //格子主题
            laydate.render({
                elem: '#test33'
                ,theme: 'grid'
            });
        });




        //配置插件目录
        layui.config({
            base: './mods/'
            , version: '1.0'
        });
        //一般直接写在一个js文件中
        layui.use(['layer', 'form', 'layarea'], function () {
            var layer = layui.layer
                , form = layui.form
                , layarea = layui.layarea;

            layarea.render({
                elem: '#area-picker',
                change: function (res) {
                    //选择结果
                    console.log(res);
                }
            });
        });
</script>

</script>
<script src="static/js/city-picker.data.js"></script>
<script src="static/js/city-picker.js"></script>
<script src="static/js/jquery.js"></script>
</html>
