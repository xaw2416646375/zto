"use strict";

function menuClick(e, t, n, a) {
	$("." + e).click(function() {
		var e = $(this).index();
		$(this).addClass(n).siblings().removeClass(n), $("." + t + ":eq(" + e + ")").addClass(a).siblings().removeClass(a)
	})
}
self != top && (top.location = self.location);
var zto = zto || {};
zto.config = zto.config || {};
var currentHots = window.location.host;
 zto.utils = zto.utils || {},
	function() {
		zto.utils.$c = function(e) {
			return "." === e.substr(0, 1) ? document.getElementsByClassName(e.substr(1, e.length - 1))[0] : document.getElementById(e.substr(1, e.length - 1))
		};
		var a = function() {
				return(65536 * (1 + Math.random()) | 0).toString(16).substring(1)
			},
			i = function(e) {
				var t = a() + a() + a() + a() + a() + a() + a() + a(),
					n = {
						stateId: t,
						fromUrl: e
					};
				return sessionStorage.setItem(t, JSON.stringify(n)), t
			};
		zto.utils.getSsoState = function(e) {
			var t = sessionStorage.getItem(e);
			if(t) {
				var n = JSON.parse(t);
				return n.stateId === e ? n : null
			}
			return null
		}, zto.utils.redirectSso = function(e) {
			var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
				n = i(e),
				a = location.origin + zto.config.AUTH_CALLBACK,
				o = zto.config.AUTH_SSO_URL + "?clientId=" + zto.config.AUTH_CLIENTID + "&redirectUri=" + a + "&requireUserBind=" + t + "&state=" + n;
			window.location = o
		}, zto.utils.goUrl = function(e) {
			var t = location.origin + zto.config.AUTH_CALLBACK + "?" + e;
			window.location = t
		}, zto.utils.setCookieValue = function(e, t, n, a, o) {
			var i = encodeURIComponent(e) + "=";
			t && (i += encodeURIComponent(t)), n && (i = i + "; expires=" + n.toUTCString()), a && (i = i + "; path=" + a), o && (i = i + ";domain=" + o), document.cookie = i
		}, zto.utils.getCookieValue = function(e) {
			for(var t = document.cookie.split("; "), n = 0; n < t.length; n++)
				if(t[n]) {
					var a = t[n].split("=");
					if(2 == a.length && decodeURIComponent(a[0]) === e) return decodeURIComponent(a[1] || "")
				}
			return null
		}, zto.utils.deleteCookie = function(e, t) {
			var n = encodeURIComponent(e) + "=";
			n = n + "; expires=" + new Date((new Date).getTime() - 864e5).toUTCString(), t && (n = n + "; path=" + t), document.cookie = n
		}, zto.utils.decodeURI = function(e) {
			return filterXSS(e)
		}, zto.utils.getQueryString = function(e) {
			var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
				n = zto.utils.decodeURI(window.location.search).substr(1).match(t);
			return null != n ? unescape(n[2]) : null
		}
	}(), zto.client = zto.client || {}, zto.client.code = {}, zto.client.code.wechatMp = "wechatMp", zto.client.code.alipayFuwu = "alipayFuwu", zto.client.code.qqMp = "qqMp", zto.client.code.androidApp = "androidApp", zto.client.code.iosApp = "iosApp", zto.client.code.wap = "wap", zto.client.code.pc = "pc", zto.client.agent = {}, zto.client.agent.wechatMp = "MicroMessenger", zto.client.agent.alipayFuwu = "AlipayClient", zto.client.agent.qqMp = "QQ/", zto.client.agent.androidApp = "ZtoAndroid", zto.client.agent.iosApp = "ZtoIos", zto.client.agent.wap = "Mobile", zto.client.getClientCode = function() {
		var e = navigator.userAgent;
		return 0 <= e.indexOf(zto.client.agent.wechatMp) ? zto.client.code.wechatMp : 0 <= e.indexOf(zto.client.agent.alipayFuwu) ? zto.client.code.alipayFuwu : 0 <= e.indexOf(zto.client.agent.qqMp) ? zto.client.code.qqMp : 0 <= e.indexOf(zto.client.agent.androidApp) ? zto.client.code.androidApp : 0 <= e.indexOf(zto.client.agent.iosApp) ? zto.client.code.iosApp : 0 <= e.indexOf(zto.client.agent.wap) ? zto.client.code.wap : zto.client.code.pc
	}, zto.auth = zto.auth || {},
	function() {
		zto.auth.tokenCookieName = "OFFICIAL_TOKEN", zto.auth.getTokenInfoByToken = function(e) {
			try {
				if(!e) return {};
				var t = e.match(/\..+\./);
				if(!t || t.length <= 0) return {};
				t = t[0].replace(/\./g, "");
				var n = window.atob(t);
				return JSON.parse(n)
			} catch(e) {
				return {}
			}
		}, zto.auth.getTokenInfo = function() {
			var e = zto.auth.getToken();
			return zto.auth.getTokenInfoByToken(e)
		}, zto.auth.setToken = function(e) {
			zto.utils.setCookieValue(zto.auth.tokenCookieName, e, null, "/", zto.config.domain)
		}, zto.auth.getToken = function(e) {
			return zto.utils.getCookieValue(zto.auth.tokenCookieName)
		}, zto.auth.deleteToken = function() {
			zto.utils.deleteCookie(zto.auth.tokenCookieName, "/", zto.config.domain)
		}, zto.auth.isAuth = function(e) {
			null == e && (e = !0);
			var t = zto.auth.getTokenInfo();
			if(!t) return !1;
			if(!t.exp) return !1;
			var n = (new Date).getTime();
			return !((1e12 <= t.exp ? t.exp : 1e3 * t.exp) - 6e5 <= n) && !(e && !t.userId)
		};
		window.location.search.split("=")[1]
	}();
var sendToTimeArr = [];

function sendToTime(e) {
	HrPost("getBillArrivalTime", {
		billCode: e
	}, function(e) {
		if(e.result.status) {
			var t = {};
			t.billCode = e.result.billCode, t.time = e.result.extimaterDate, sendToTimeArr.push(t)
		}
		return sendToTimeArr
	})
}
function cutOut(e) {
	if(e) {
		return e.replace(/(\d{4})/g, "$1 ").replace(/\s*$/, "")
	}
}

function expressCheck(e) {
	(ztoIsLogin = zto.auth.isAuth()) ? secVerifyCallback(e): showVerification(e)
}

function addDynamicJS() {
	var e = "";
	e = "test" === zto.config.env ? "https://q-test.zto.cn/gw/" : "https://q.zto.com/gw/";
	var t = document.createElement("link");
	t.type = "text/css", t.rel = "stylesheet", t.href = e + "skin.css";
	var n = document.getElementsByTagName("head")[0];
	document.createElement("style");
	n.insertBefore(t, n.lastChild);
	var a = document.createElement("script");
	a.setAttribute("type", "text/javascript"), a.src = e + "skin.js", document.body.appendChild(a)
}

function showVerification(e) {
	imgVerifyCode(e, "create")
}

function verificationShow(e) {
	$("#verificationBox").remove(), $(document).off("click", "#verificationSubmit"), $("body").append('<div class="alert" id="verificationBox">                            <span class="verification-close" id="verificationClose"></span>                            <strong class="alert-title">请输入验证码</strong>                            <div class="alert-box">                                <input type="text" id="verificationTxt" class="verification-txt">                                <img class="verification-img" id="verificationImg" data-id="" src="" onclick="imgVerifyCode(' + e + ')" >                            </div>                            <div class="verification-error" id="verificationError"></div>                            <em class="verification-btn" id="verificationSubmit">确定</em>                        </div>'), $("#verificationBox").addClass("show").css("margin-top", "-" + ($(".alert").height() / 2 + 40) + "px"), $("#verificationTxt").focus(), $(document).on("click", "#verificationSubmit", function() {
		$("#verificationTxt").val() ? verificationSubmit(e) : $("#verificationError").html("验证码不能为空")
	}), $(document).on("click", "#verificationClose", function() {
		$("#verificationBox").remove()
	})
}

function verificationSubmit(e) {
	secVerifyCallback(e, $("#verificationTxt").val(), $("#verificationImg").attr("data-id"))
}

function imgVerifyCode(t, n) {
	$.ajax({
		type: "post",
		url: zto.config.image_serviceUrl + "/captcha/image",
		headers: {
			"x-token": zto.auth.getToken(),
			"x-clientCode": zto.client.getClientCode()
		},
		cache: !1,
		crossDomain: 1 == !document.all
	}).done(function(e) {
		if(e.status) "create" == n && verificationShow(t), $("#verificationImg").attr("src", e.result.image), $("#verificationImg").attr("data-id", e.result.id);
		else {
			console.log("数据请求失败"), ztoAlert("提示", e.message, "确定", ""), $("#verificationBox").remove()
		}
	}).fail(function(e) {
		console.log("数据请求失败", e), $("#verificationBox").remove();
		console.log("errr", "0", "验证码服务不可用"), secVerifyCallback(t, "errr", "0")
	})
}

function secVerifyCallback(a, e, t) {
	$(".result-list").empty(), checkPostCode("listOrderBillDetail", JSON.stringify({
		codes: checkParamsPack(a)
	}), !1, function(e) {
		if(console.log(e.result, "查件详情"), e.status) {
			if(e.result) {
				$(".result-list").empty(), $("#verificationBox").remove(), $(".search_btn").removeClass("notclick");
				for(var t = 0; t < e.result.details.length; t++) {
					var n = !1;
					0 == t && (n = !0), checkFunc(e.result.details[t], n, a)
				}
			}
		} else switch(e.statusCode) {
			case "E0401":
				$("#verificationBox").length <= 0 && showVerification(a);
				break;
			case "E0402":
				imgVerifyCode(a), $("#verificationTxt").val(""), $("#verificationError").html("验证码错误，请重新填写"), $("#verificationTxt").focus();
				break;
			case "E0403":
			case "E0100":
				$("#verificationBox") && 0 < $("#verificationBox").length && $("#verificationBox").remove(), ztoAlert("提示", e.message, "确定", "");
				break;
			default:
				$("#verificationBox") && 0 < $("#verificationBox").length && $("#verificationBox").remove()
		}
	}, function(e) {
		console.log(res, "接口调用失败"), $("#verificationBox").remove(), "E0401" == e.statusCode && showVerification(a)
	}, "", {
		code: e,
		id: t
	})
}

function noticeShow(e, t) {
	var n = [],
		a = validateCity(e.orderDetail.sender.city, e.orderDetail.sender.county),
		o = validateCity(e.orderDetail.receiver.city, e.orderDetail.receiver.county);
	n.push(a && o), n.length === t.length && (n.includes(!0) ? $("#expressNotice").css({
		visibility: "visible",
		"margin-top": "-20px"
	}) : $("#expressNotice").css({
		visibility: "hidden",
		"margin-top": "-57px"
	}))
}

function checkParamsPack(e) {
	for(var t = [], n = 0; n < e.length; n++) t.push({
		billCode: e[n]
	});
	return t
}

function checkFunc(e, t, n) {
	var a = e.billDetail.billCode;
	if(e.billDetail.billTraces) {
		var o = e.billDetail,
			i = keyWordsSwitch(o.billStatusShow, o.arrivalTimeDesc),
			s = o,
			c = i.status,
			r = i.statusNum,
			l = i.telClass,
			d = i.telName,
			u = (i.time, "");
		u += returnDomHeader(s, c, r);
		for(var p = 0, m = s.billTraces.length; p < m; p++) {
			var f = s.billTraces[p].scanDate;
			u += returnDomPath(p, s, d, l, ztoIsLogin), u += returnDomPathForScanType(s.billTraces[p]), u += '<p class="branch-time">' + f + "</p>", e.orderDetail ? u += returnDomProblem(e.orderDetail, s.billTraces[p], ztoIsLogin) + "</div>" : u += "</div>"
		}
		u += returnDomHandle(ztoIsLogin);
		var h = $(u);
		ztoIsLogin && e.orderDetail && (e.orderDetail.owner.isReceiver || e.orderDetail.owner.isSender ? h.find(".goway").attr("class", "goway go-complain") : h.find(".goway").attr("class", "goway go-complain no-complain"), h.find(".goway").text("投诉"), $(".result-list").on("click", ".go-complain", function() {
			window.open(zto.config.centerceUrl_complain, "_blank")
		})), $(".result-list").append(h), ztoIsLogin ? (e.orderDetail && (e.orderDetail.owner.isReceiver || e.orderDetail.owner.isSender ? (h.find(".way").attr("class", "way e-waybill"), h.find(".way").text("电子底单"), h.find(".goway").attr("class", "goway go-complain")) : h.find(".goway").attr("class", "goway go-complain no-complain"), h.find(".goway").text("投诉"), $(".result-list").on("click", ".go-complain", function() {
			window.open(zto.config.centerceUrl_complain, "_blank")
		})), $(".result-item:eq(0)").find(".branch-item").addClass("show")) : (h.find(".goway").attr("class", "goway go-complain no-complain2"), h.find(".goway").text("投诉"), $(".result-list").on("click", ".go-complain", function() {
			window.open(zto.config.centerceUrl_complain, "_blank")
		}), $(document).on("click", ".go_login_btn", function() {
			window._hmt && window._hmt.push(["_trackEvent", "跳转登录", "click"]), zto.utils.redirectSso("", !0)
		}), $(".result-item").find(".branch-item").addClass("show")), $(".result-item:eq(0)").find(".result-add").addClass("hide").find("span").html("收起内容"), codeCookie(a, c), t && HrPost("waybillMiniQrCodeCreate", {
			billCode: a
		}, function(e) {
			e.status && $("#subscribeQrCode").attr("src", e.result).show()
		})
	} else ztoIsLogin ? $(".result-list").append('<div class="result-item">                                              <div class="result-top">                                                  <strong class="numbers"><em>运单号:</em><span>' + a + '</span></strong>                                              </div>                                              <div class="result-message">没有运单信息</div><br><br>                                            </div>') : 0 === $(".result-item").length ? ($(".result-list").append('<div class="result-item">                                                  <div class="result-top">                                                      <strong class="numbers"><em>运单号:</em><span>' + a + '</span></strong></div><div class="result-message">没有运单信息</div><br><br><br><br><div class="go_login"><input  type="button" class="go_login_btn" value="登录"> <p>登录后查看完整物流信息</p> </div></div>'), $(document).on("click", ".go_login_btn", function() {
		window._hmt && window._hmt.push(["_trackEvent", "跳转登录", "click"]), zto.utils.redirectSso("", !0)
	})) : $(".result-list").append('<div class="result-item">                                                  <div class="result-top">                                                      <strong class="numbers"><em>运单号:</em><span>' + a + '</span></strong>                                                  </div>                                                  <div class="result-message">没有运单信息</div>                                                </div>');
	e.orderDetail && noticeShow(e, n)
}

function returnDomHeader(e, t, n) {
	return '<div class="result-item"><div class="result-top"><strong class="numbers"><em>运单号:</em><span>' + cutOut(e.billCode) + '</span><i class="sendTime"></i></strong><div class="result-static static-' + n + '"><em class="static-text">' + t + '</em></div></div><div class="branch-list">'
}

function returnDomPath(e, t, n, a, o) {
	var i = "";
	return 0 == e ? (i += '<div class="branch-item first"><div class="branch-circle">最新</div><div class="branch-line"></div>', "联系派件员" == n ? "派件" === t.billTraces[e].scanTypeDesc && (i += '<span data-order="' + t.billCode + '" class="branch-contact ' + a + '" id="btn_telCourier" data-tel="' + (t.billTraces[e].operateUserPhone || "") + '">' + n + "</span>") : i += '<span data-order="' + t.billCode + '" class="branch-contact ' + a + '">' + n + "</span>", o ? (i += '<a href="javascript:;" class="map-link" >切换地图</a>', i += '<a href="javascript:;" onclick="jumpService(' + t.billCode + ')" class="service-link" target="_blank">在线客服</a>') : i += '<a href="javascript:;" onclick="jumpService(' + t.billCode + ')" class="service-link no-service-link" target="_blank">在线客服</a>', i += '<a href="javascript:;" class="way" data-code="' + t.billCode + '"></a>', i += '<a href="javascript:;" class="goway" data-code="' + t.billCode + '"></a>') : e == t.billTraces.length - 1 ? i += '<div class="branch-item last"><div class="branch-circle"><em></em></div><div class="branch-line"></div>' : i += '<div class="branch-item"><div class="branch-circle"><em></em></div><div class="branch-line"></div>', i
}

function returnDomPathArrivalTime(e) {
	"已签收" !== $wayBillHtml.find(".static-text").text() && "已送达" !== $wayBillHtml.find(".static-text").text() || $wayBillHtml.find(".sendTime").html(" "), e.orderDetail && (e.orderDetail.arrivalTimeDesc && "已签收" != $wayBillHtml.find(".static-text").text() && "已送达" != $wayBillHtml.find(".static-text").text() ? $wayBillHtml.find(".sendTime").html(e.orderDetail.arrivalTimeDesc) : $wayBillHtml.find(".sendTime").html(""))
}

function returnDomHandle(e) {
	var t = "";
	return e ? t += '<span class="result-add"><span>展开更多</span><i></i></span>                            </div>                        </div>' : 0 === $(".result-item").length ? (t += "</div> ", t += '<div class="go_login"><input  type="button" class="go_login_btn" value="登录"> <p>登录后查看完整物流信息</p> </div></div>') : t += '<span class="result-add "><span>展开更多</span><i></i></span>                                </div>                            </div>', t
}

function validateCity(e, t) {
	for(var n = ["南京市", "镇江市", "扬州市", "常州市", "苏州市", "无锡市", "南通市", "泰州市", "盐城市", "杭州市", "嘉兴市", "湖州市", "绍兴市", "宁波市", "金华市", "台州市", "上海市", "合肥市", "芜湖市", "滁州市", "马鞍山市", "铜陵市", "池州市", "舟山市", "安庆市", "宣城市"], a = ["嵊泗县", "岱山县", "普陀区", "石台县", "岳西县", "怀宁县", "绩溪县", "太湖县"], o = [], i = [], s = !1, c = 0; c < n.length; c++) o.push(n[c] === e);
	if(o.includes(!0)) {
		for(c = 0; c < a.length; c++) i.push(a[c] === t);
		s = !i.includes(!0)
	} else s = !1;
	return s
}

function returnDomPathForScanType(e) {
	var t = "";
	switch(e.scanTypeDesc) {
		case "签收":
			console.log("签收", e.scanSite.phone);
			var n = null;
			n = 1 <= (i = (o = e.scanSite.phone) ? o.split(/_|、|；|,|，/) : []).length ? i[0] : "95311", t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                    <span>快件已在 <em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em> 签收，签收人：<em class="color">' + (e.signMan ? e.signMan : "") + '</em>，如有疑问请电联：<a href="tel:' + (e.operateUserPhone ? e.operateUserPhone : "") + '">（' + (e.operateUserPhone ? e.operateUserPhone : "") + '）</a>，投诉电话：<a href="tel:' + n + '">（' + n + "）</a>，您的快递已经妥投，如果您对我们的服务感到满意，请给个五星好评，鼓励一下我们【请在评价快递员处帮忙点亮五颗星星哦~】</span></p>";
			break;
		case "第三方签收":
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                    <span>快件已投递 <em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em>，如有问题请电联 <a href="tel:' + (e.operateUserPhone ? e.operateUserPhone : "") + '">（' + (e.operateUserPhone ? e.operateUserPhone : "") + "）</a> 感谢使用中通快递，期待再次为您服务！</span></p>";
			break;
		case "退件签收":
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                    <span>快件已在 <em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em> 被 <em class="color">' + (e.scanTypeDesc ? e.scanTypeDesc : "") + '</em>，签收人：<em class="color">' + (e.signMan ? e.signMan : "") + "</em>，感谢使用中通快递，期待再次为您服务！</span></p>";
			break;
		case "派件":
			if(e.pieCount <= 1) {
				t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                          <span><em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em><a class="color" href="tel:' + (e.scanSite.phone ? e.scanSite.phone : "") + '">（' + (e.scanSite.phone ? e.scanSite.phone : "") + '）</a> 的业务员 <em class="color">' + (e.operateUser ? e.operateUser : "") + '</em><a class="operateUserPhone" href="tel:' + (e.operateUserPhone ? e.operateUserPhone : "") + '">（' + (e.operateUserPhone ? e.operateUserPhone : "") + "）</a> 正在派件【95720为中通快递员外呼专属号码，请放心接听】</span></p>";
				break
			}
			if(1 < e.pieCount) {
				t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                          <span>快件已到达 <em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em><a class="color" href="tel:' + (e.scanSite.phone ? e.scanSite.phone : "") + '">（' + (e.scanSite.phone ? e.scanSite.phone : "") + '）</a> 业务员<em class="color">' + (e.operateUser ? e.operateUser : "") + '</em><a class="operateUserPhone" href="tel:' + (e.operateUserPhone ? e.operateUserPhone : "") + '">[' + (e.operateUserPhone ? e.operateUserPhone : "") + ']</a> 正在第<em class="color">' + (e.pieCount ? e.pieCount : "") + "</em>次派件【95720为中通快递员外呼专属号码，请放心接听】</span></p>";
				break
			}
		case "退件":
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                  <span>快件已被 <em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + "</em> 退回或发往新的地址</span></p>";
			break;
		case "问题件":
			n = null;
			n = 1 <= (i = (o = e.scanSite.phone) ? o.split(/_|、|；|,|，/) : []).length ? "(" + i[0] + ")" : "";
			var a = e.scanSite.name;
			"中转部" === a.substr(a.length - 3) && (n = ""), t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                  <span><em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em><a href="tel:' + n + '">' + n + '</a> 的业务员 ，<em class="color">' + (e.operateUser ? e.operateUser : "") + '</em>已进行<em class="color">' + (e.scanTypeDesc ? e.scanTypeDesc : "") + '</em>上报，原因：<em class="color">' + (e.problemDesc ? e.problemDesc : "") + "</em></span></p>";
			break;
		case "到件":
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                  <span>快件已经到达 <em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + "</em></span></p>";
			break;
		case "发件":
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                  <span>快件离开 <em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em> 已发往 <em class="color">' + (e.preOrNextSite ? e.preOrNextSite.name : "【】") + "</em></span></p>";
			break;
		case "收件":
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em>                                  <span><em class="color">' + (e.scanSite.name ? "【" + e.scanSite.name + "】" : "") + '</em><a class="color" href="tel:' + e.scanSite.phone + '">（' + e.scanSite.phone + '）</a> 的业务员 <em class="color">' + e.operateUser + '</em><a href="tel:' + (e.operateUserPhone || "") + '">（' + (e.operateUserPhone || "-") + "）</a> 已揽收</span></p>";
			break;
		case "ARRIVAL":
			t += '<p class="branch-text"><span>您的快递已经投递至 <em class="color">【' + e.scanSite.name + "】，电话：" + e.scanSite.phone + "</em>" + (e.scanSite.address ? "，地址：" + e.scanSite.address : "") + '，请及时领取。如有疑问请电联：<a  href="tel:' + e.operateUserPhone + '">' + (e.operateUserPhone ? e.operateUserPhone : "") + '</a>，投诉电话：<a  href="tel:95311">95311</a>，中通快递很高兴为您服务！</span></p>';
			break;
		case "SIGNED":
			var o, i;
			n = null;
			n = 1 <= (i = (o = e.scanSite.phone) ? o.split(/_|、|；|,|，/) : []).length ? i[0] : "", t += '<p class="branch-text"><span>您的快递已签收，签收人' + (e.signMan ? '<em class="color">【' + e.signMan + "】</em>" : "") + "在" + (e.scanSite.name ? '<em class="color">【' + e.scanSite.name + "】</em>" : "") + (e.scanSite.address ? '(<em class="color"> ' + e.scanSite.address + " </em>)" : "") + '领取，如有疑问请电联：<a href="tel:' + e.operateUserPhone + '">(' + (e.operateUserPhone ? e.operateUserPhone : "") + (n ? "/" + n : "") + ')</a>，投诉电话：<a href="tel:95311">95311</a>，如果您对我们的服务感到满意，请给个五星好评，鼓励一下我们【请在评价快递员处帮忙点亮五颗星星哦~】</span></p>';
			break;
		case "国际处理":
			if("" == e.scanSite.city) {
				t += '<p class="branch-text"><em class="color">' + e.operateUser + '</em>进行处理：<em class="color">' + e.optReasonEn + "</em></span></p>";
				break
			}
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em><em class="color">' + e.operateUser + '</em>进行处理：<em class="color">' + e.optReasonEn + "</em></span></p>";
			break;
		case "国际出入库":
			if("" == e.scanSite.city) {
				t += '<p class="branch-text"><em class="color">' + e.operateUser + '</em>进行处理：<em class="color">' + e.optReasonEn + "</em></span></p>";
				break
			}
			t += '<p class="branch-text"><em class="city">' + (e.scanSite.city ? "【" + e.scanSite.city + "】" : "") + '</em><em class="color">' + e.scanSite.name + '</em>的<em class="color">' + e.operateUser + '</em>进行处理：<em class="color">' + e.optReasonEn + "</em></span></p>";
			break;
		default:
			t += '<p class="branch-text"><span>' + e.desc + "</span></p>"
	}
	return t
}

function returnDomProblem(e, t, n) {
	var a = "";
	if(n && e.owner.isReceiver && 12 === t.scanTypeCode) switch(t.problemShowType) {
		case 10:
			a += '<div id="btnProblem1" class="branch-btn btn-problem">预约派送<text class="problemId">' + t.problemId + "</text></div>";
			break;
		case 11:
			a += '<div id="btnProblem2" class="btn-problem"><text class="icon"></text>已处理，<text class="branch-btn">查看详情</text><text class="problemId">' + t.problemId + "</text></div>";
			break;
		case 20:
			a += '<div id="btnProblem3" class="branch-btn btn-problem-back">异常信息不真实？去反馈<text class="problemId">' + t.problemId + '</text> <text class="pro-billCode" >' + e.billCode + "</text></div>";
			break;
		case 21:
			a += '<div class="branch-btn-text">异常信息不真实？已反馈</div>';
			break;
		default:
			a = ""
	}
	return a
}

function keyWordsSwitch(e, t) {
	var n = {
		status: "",
		statusNum: null,
		telName: "",
		telClass: "",
		time: ""
	};
	switch(n.status = e) {
		case "已收件":
			n.statusNum = 1, n.telClass = "telWebsite", n.telName = "联系网点", n.time = "用时" + t;
			break;
		case "运输中":
			n.statusNum = 2, n.telClass = "telWebsite", n.telName = "联系网点";
			break;
		case "派件中":
			n.statusNum = 3, n.telClass = "telCourier", n.telName = "联系派件员";
			break;
		case "已送达":
		case "已签收":
			n.statusNum = 4, n.telClass = "graded", n.telName = "满意度评分"
	}
	return n
}
addDynamicJS();
var billInfoList = [],
	ztoIsLogin = zto.auth.isAuth();

function codeCookie(e, t) {
	var n = 0,
		a = getCookie("codes");
	if(null == a || null == a) setCookie("codes", e + "-" + t), "无" != $(".lately-record i").html() && ($(".lately-record").removeClass("not"), $(".record-arrow").after('<em class="record-item"><span>' + e + "</span><i></i></em>")), $(".lately-record i").html(e.split(",").length);
	else {
		for(var o = a.split(","), i = 0; i < o.length; i++) {
			e != o[i].split("-")[0] && n++
		}
		if(n == o.length) {
			10 <= o.length && (o.shift(), $(".record-item").last().remove()), $(".record-arrow").after('<em class="record-item"><span>' + e + "</span><i></i></em>"), o.push(e + "-" + t), setCookie("codes", o.join(","));
			var s;
			(s = Number(e.split(",").length) + Number($(".lately-record i").html())) < 11 && $(".lately-record i").html(s)
		}
	}
}

function HrPost(e, t, n, a, o) {
	if(o = $.isFunction(a) ? o || "json" : null == a ? "json" : a, n && $.isFunction(n) && (a = n, n = !1), n) {
		$("body").append('<div class="ajaxLoading"><div class="loader">加载中...</div></div>'), $(".ajaxLoading").show(), n = !1
	}
	t && t.HEADERS ? $.ajax({
		type: "post",
		url: zto.config.serviceUrl + "/" + e,
		headers: {
			"x-token": zto.auth.getToken(),
			"x-clientCode": zto.client.getClientCode(),
			"x-captcha-id": t.HEADERS.id,
			"x-captcha-code": t.HEADERS.code,
			"x-event-type": t.HEADERS.eventType
		},
		data: t,
		cache: !1,
		crossDomain: 1 == !document.all
	}).done(function(e) {
		n || $(".ajaxLoading").hide(), null != e && "" != e && a && $.isFunction(a) && a(e)
	}) : $.ajax({
		type: "post",
		url: zto.config.serviceUrl + "/" + e,
		headers: {
			"x-token": zto.auth.getToken(),
			"x-clientCode": zto.client.getClientCode()
		},
		data: t,
		cache: !1,
		crossDomain: 1 == !document.all
	}).done(function(e) {
		n || $(".ajaxLoading").hide(), null != e && "" != e && a && ($.isFunction(a) ? a(e) : console.log("callBack is not a function"))
	})
}

function HrPostCode(e, t, n, a, o) {
	if(o = $.isFunction(a) ? o || "json" : null == a ? "json" : a, n && $.isFunction(n) && (a = n, n = !1), n) {
		$("body").append('<div class="ajaxLoading"><div class="loader">加载中...</div></div>'), $(".ajaxLoading").show(), n = !1
	}
	$.ajax({
		type: "post",
		url: zto.config.serviceUrl + "/" + e,
		headers: {
			"x-token": null,
			"x-clientCode": zto.client.getClientCode(),
			"x-captcha-id": t.HEADERS.id,
			"x-captcha-code": t.HEADERS.code
		},
		data: t,
		cache: !1,
		crossDomain: 1 == !document.all
	}).done(function(e) {
		n || $(".ajaxLoading").hide(), null != e && "" != e && a && ($.isFunction(a) ? a(e) : console.log("callBack is not a function"))
	}).fail(function(e) {
		console.log("数据请求失败")
	})
}

function checkPostCode(e, t, n, a, o, i, s) {
	if(i = $.isFunction(a) ? i || "json" : null == a ? "json" : a, n && $.isFunction(n) && (a = n, n = !1), n) {
		$("body").append('<div class="ajaxLoading"><div class="loader">加载中...</div></div>'), $(".ajaxLoading").show(), n = !1
	}
	$.ajax({
		type: "post",
		url: zto.config.serviceUrl + "/" + e,
		headers: {
			"x-token": zto.auth.getToken(),
			"x-clientCode": zto.client.getClientCode(),
			"x-captcha-id": s.id,
			"x-captcha-code": s.code
		},
		data: t,
		cache: !1,
		contentType: "application/json",
		crossDomain: 1 == !document.all
	}).done(function(e) {
		n || $(".ajaxLoading").hide(), null != e && "" != e && a && ($.isFunction(a) ? a(e) : console.log("callBack_one is not a function"))
	}).fail(function(e) {
		console.log("数据请求失败"), o && ($.isFunction(o) ? o(e) : console.log("callBack_two is not a function"))
	})
}

function WebsitePost(e, t, n, a, o) {
	if(o = $.isFunction(a) ? o || "json" : null == a ? "json" : a, n && $.isFunction(n) && (a = n, n = !1), n) {
		$("body").append('<div class="ajaxLoading"><div class="loader">加载中...</div></div>'), $(".ajaxLoading").show(), n = !1
	}
	$.ajax({
		type: "post",
		url: zto.config.serviceUrl + "/" + e,
		headers: {
			"x-token": zto.auth.getToken(),
			"x-clientCode": zto.client.getClientCode()
		},
		data: t,
		cache: !1,
		contentType: "application/json",
		crossDomain: 1 == !document.all
	}).done(function(e) {
		n || $(".ajaxLoading").hide(), null != e && "" != e && a && ($.isFunction(a) ? a(e) : console.log("callBack is not a function"))
	}).fail(function(e) {
		console.log("数据请求失败")
	})
}

function CPost(e, t, n, a, o, i) {
	if(i = $.isFunction(a) ? i || "json" : null == a ? "json" : a, n && $.isFunction(n) && (a = n, n = !1), n) {
		$("body").append('<div class="ajaxLoading"><div class="loader">加载中...</div></div>'), $(".ajaxLoading").show(), n = !1
	}
	$.ajax({
		type: "post",
		url: zto.config.serviceUrl + "/" + e,
		headers: {
			"x-token": zto.auth.getToken(),
			"x-clientCode": zto.client.getClientCode()
		},
		data: t,
		cache: !1,
		crossDomain: 1 == !document.all
	}).done(function(e) {
		n || $(".ajaxLoading").hide(), null != e && "" != e && a && ($.isFunction(a) ? a(e) : console.log("callBack is not a function"))
	}).fail(function(e) {
		o(e)
	})
}

function ImgRunOpcity_html5(t, n, a, o, i, s, c, r) {
	var l = $(t + " " + n).size(),
		e = 0;
	for(e = 0; e < l; e++) $("" + a).append("<span class='" + o + "'>" + (e + 1) + "</span>");

	function c(e) {
		$(t + " " + n).removeClass("run"), $(t + " " + n).eq(e).addClass("run"), $(a + " ." + o).removeClass("cur"), $(a + " ." + o).eq(e).addClass("cur")
	}
	i = null, $(t + " " + n).eq(0).addClass("run"), $(a + " ." + o).eq(0).addClass("cur"), $(a + " ." + o).each(function(e) {
		$(this).click(function() {
			s(e), c(e)
		})
	}), s = function(e) {
		clearInterval(i), i = setInterval(function() {
			c(++e < l ? e : e = 0)
		}, r), $("" + t).hover(function() {
			clearInterval(i)
		}, function() {
			clearInterval(i), i = setInterval(function() {
				c(++e < l ? e : e = 0)
			}, r)
		})
	}, 1 < l ? s(0) : ($(t + " " + n).eq(0).addClass("run"), $(a).hide())
}

function ImgRunOpcity(t, n, a, o, i, s, c, r) {
	var l = $(t + " " + n).size(),
		e = 0;
	for(e = 0; e < l; e++) $("" + a).append("<span class='" + o + "'>" + (e + 1) + "</span>");

	function c(e) {
		$(t + " " + n).fadeOut(200), $(t + " " + n).eq(e).fadeIn(400), $(a + " ." + o).removeClass("cur"), $(a + " ." + o).eq(e).addClass("cur")
	}
	i = null, $(t + " " + n).eq(0).show(), $(a + " ." + o).eq(0).addClass("cur"), $(a + " ." + o).each(function(e) {
		$(this).click(function() {
			s(e), c(e)
		})
	}), s = function(e) {
		clearInterval(i), i = setInterval(function() {
			c(++e < l ? e : e = 0)
		}, r), $("" + t).hover(function() {
			clearInterval(i)
		}, function() {
			clearInterval(i), i = setInterval(function() {
				c(++e < l ? e : e = 0)
			}, r)
		})
	}, 1 < l ? s(0) : ($(t + " " + n).eq(0).fadeIn(500), $(a).hide())
}

function GetQueryString(e) {
	var t = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
		n = zto.utils.decodeURI(window.location.search).substr(1).match(t);
	return null != n ? unescape(n[2]) : null
}

function getCookie(e) {
	var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
	return(t = document.cookie.match(n)) ? unescape(t[2]) : null
}

function delCookie(e) {
	var t = new Date;
	t.setTime(t.getTime() - 1);
	var n = getCookie(e);
	null != n && (document.cookie = e + "=" + n + ";expires=" + t.toGMTString() + "; path=/")
}

function setCookie(e, t) {
	var n = new Date;
	n.setTime(n.getTime() + 2592e6), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString() + "; path=/"
}

function setCookieWeek(e, t) {
	var n = new Date;
	n.setTime(n.getTime() + 6048e5), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString() + "; path=/"
}

function setCookieDay(e, t) {
	var n = new Date;
	n.setTime(n.getTime() + 864e5), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString() + "; path=/"
}

function ztoAlert(e, t, n, a) {
	var o = traditionalError(t);
	$("body").append('<div class="alert">                            <span class="alert-close"></span>                            <strong class="alert-title">' + e + '</strong>                            <div class="alert-text">                                <p>' + o + '</p>                            </div>                            <em class="alert-btn ' + a + '">' + n + "</em>                        </div>"), $(".alert").addClass("show").css("margin-top", "-" + ($(".alert").height() / 2 + 40) + "px")
}

function traditionalError(e) {
	var t = e;
	if(-1 < location.pathname.indexOf("investorHK"))
		if(console.log("转换为繁体"), -1 < e.indexOf("不能为空")) t = e.replace("不能为空", "不能為空");
		else switch(e) {
			case "请求超时":
				t = "請求超時";
				break;
			case "服务暂不可用":
				t = "服務暫不可用";
				break;
			case "发生错误":
				t = "發生錯誤";
				break;
			case "登录状态已过期，请重新登录":
				t = "登錄狀態已過期，請重新登錄";
				break;
			case "无法获取用户信息":
				t = "無法獲取用戶信息";
				break;
			case "系统内部错误":
				t = "系統內部錯誤";
				break;
			case "时间戳非法":
				t = "時間戳非法";
				break;
			case "线程达到阈值":
				t = "線程達到閾值"
		}
	return t
}
billInfoList = [{
	billCode: "776687777"
}, {
	billCode: "47392749347329"
}, {
	billCode: "424242342342",
	info: {
		sendName: "fdfs",
		sendPro: "上海"
	}
}], $(document).on("click", ".alert-close,.alert-btn", function() {
	$(".alert").remove()
}), $(document).on("click", ".toLogin", function() {
	$(this).parent().data("code");
	location.href = zto.config.centerceUrl
});
var data = [];

function getAddressId(e, t, n) {
	for(var a = null, o = null, i = null, s = 0, c = data.length; s < c; s++)
		if(e && ~e.indexOf(data[s].text)) {
			a = data[s].value;
			for(var r = 0, l = data[s].children.length; r < l; r++)
				if(t && ~t.indexOf(data[s].children[r].text)) {
					o = data[s].children[r].value;
					for(var d = 0, u = data[s].children[r].children.length; d < u; d++)
						if(n && ~n.indexOf(data[s].children[r].children[d].text)) {
							i = data[s].children[r].children[d].value;
							break
						}
					break
				}
			break
		}
	return a + "," + o + "," + i
}

function aaa() {
	var n = "";
	HrPost("DoubleGen_GetList", function(e) {
		for(var t = 0; t < e.resultResponse.items.length; t++) n += '<li><div><a href="/companyIntroduce/innovationDetails?id=7d679289-6b91-420c-9375-305564988c10"><img src="' + e.resultResponse.items[t].imagesUrl + '" alt="推荐人物"></a></div><h1><a href="/companyIntroduce/innovationDetails?id=7d679289-6b91-420c-9375-305564988c10">' + e.resultResponse.items[t].figureName + ":" + e.resultResponse.items[t].figureMotto + "</a></h1><span>" + e.resultResponse.items[t].figureArea + "</span></li>";
		$(".new-recommend").append(n)
	})
}

function jumpService(e) {
	var t = zto.auth.getToken(),
		n = "https://kfapi.zto.com/im?channel=official";
	e && (n += "&billCode=" + e), t && (n += "&token=" + t), window.open(n)
}

function pubService() {
	var e = zto.auth.getToken(),
		t = "https://kfapi.zto.com/im?channel=official";
	e && (t += "&token=" + e), $("#contactUs").attr("href", t)
}

function getRegionData(t) {
	var e = sessionStorage.getItem("allRegionData");
	e ? (zto.config.ztoAllRegionList = JSON.parse(e), t(JSON.parse(e))) : $.ajax({
		type: "POST",
		url: zto.config.serviceUrl + "/get_basearea",
		dataType: "json",
		success: function(e) {
			sessionStorage.setItem("allRegionData", JSON.stringify(e.result)), zto.config.ztoAllRegionList = e.result, t(e.result)
		}
	})
}
getRegionData(function(e) {
	data = e
}), pubService();