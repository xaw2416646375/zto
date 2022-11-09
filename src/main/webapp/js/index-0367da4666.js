new Vue({
	el: ".register_box",
	data: {
		agreeDialog: !1,
		isAgreeOn: !0,
		sendAuthCode: !0,
		auth_time: 0,
		mobile: "",
		code: "",
		picCode: "",
		newPwd: "",
		newPwdTwo: "",
		picVerifyCodeUrl: "",
		id: ""
	},
	mounted: function() {
		this.getPicCode()
	},
	methods: {
		register: function() {
			var e = this;
			if(!registerCheck()) return !1;
			zto.services.registerBySmsVerifyCode({
				mobile: e.mobile,
				verifyCode: e.code,
				password: e.newPwd
			}).then(function(e) {
				!0 === e.data.status ? (success_show("注册成功，快去登录吧!"), setTimeout(function() {
					window.location.href = "/pc/html/login/index.html"
				}, 2e3)) : error_show(e.data.message)
			}).catch(function() {})
		},
		getPicCode: function() {
			var t = this;
			zto.services.image({}).then(function(e) {
				!0 === e.data.status && (t.picVerifyCodeUrl = e.data.result.image, t.id = e.data.result.id)
			}).catch(function() {})
		},
		getAuthCode: function() {
			var i = this;
			if(!getRegisterCode()) return !1;
			zto.services.sendRegisterSmsVerifyCode({
				mobile: i.mobile
			}, {
				"x-captcha-id": i.id,
				"x-captcha-code": i.picCode
			}).then(function(e) {
				var t;
				!0 === e.data.status ? (i.sendAuthCode = !1, i.getPicCode(), i.auth_time = 60, t = setInterval(function() {
					i.auth_time--, i.auth_time <= 0 && (i.sendAuthCode = !0, clearInterval(t))
				}, 1e3)) : error_show(e.data.message)
			}).catch(function() {})
		},
		openAgreeDialog: function() {
			this.agreeDialog = !0
		},
		closeDialog: function() {
			this.agreeDialog = !1
		},
		toggle: function() {
			this.isAgreeOn = !this.isAgreeOn
		}
	}
});