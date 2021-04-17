! function(t) {
	var o = {};

	function n(e) {
		if(o[e]) return o[e].exports;
		var i = o[e] = {
			exports: {},
			id: e,
			loaded: !1
		};
		return t[e].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
	}
	n.m = t, n.c = o, n.p = "", n(0)
}({
	0: function(e, i, t) {
		e.exports = t(26)
	},
	3: function(e, i) {
		function t() {}
		$.extend(t.prototype, {
			init: function() {
				this.fixed(), this.footerLoad(), this.handleClickSucc(), this.login(), this.HKswitch()
			},
			HKswitch: function() {
				HrPost("getApolloConfig", {
					keys: ["isShowInvestorsTC"]
				}, function(e) {
					e && ("false" === e.result.isShowInvestorsTC ? ($(".oldC").css("display", "block"), $(".newC").css("display", "none")) : ($(".oldC").css("display", "none"), $(".newC").css("display", "block")))
				})
			},
			footerLoad: function() {
				$("#js-footer-wrap").on("mouseenter", ".friendLink a", function() {
					$(this).next().css({
						display: "block"
					}), $(this).find("span").addClass("actived")
				}).on("mouseout", ".friendLink a", function() {
					$(this).next().css({
						display: "none"
					}), $(this).find("span").removeClass("actived")
				})
			},
			login: function() {
				//console.log(window.location.href, "111111111111"), 0 <= navigator.userAgent.indexOf("Mobile") && (window.location.href = "https://m.zto.com/"), zto.auth.getToken() && HrPost("auth_account_getUserLoginProvider", null, function(e) {
					var i, t, o;
					e.status && (e.result.mobile && (i = "userMobile", t = e.result.mobile, (o = new Date).setTime(o.getTime() + 198e5), document.cookie = i + "=" + escape(t) + ";expires=" + o.toGMTString() + "; path=/"), $(".login,.registere").hide(), $(".header-right").append('<div class="user">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="../imgs/login.png" alt="用户"><a href="' + zto.config.centerceUrl + '" data-phone="' + e.result.mobile + '">' + e.result.mobile + "</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>"), $(".user").show())
				//})
			},
			fixed: function() {
				if(0 < $(".js-nav-fixed").size()) {
					var o = $(".js-nav-fixed"),
						n = $(".content-main").offset().top;
					$(document).on("scroll", function() {
						var e = $(document).scrollTop();
						if(n < e) {
							o.css("top", e - n + "px");
							var i = o.offset().top - n,
								t = $(".content-main").height() - o.height();
							t <= i ? o.css("top", t + "px") : o.css("top", e - n + "px")
						} else o.css({
							position: "absolute",
							top: "0px"
						})
					})
				}
			},
			handleClickSucc: function() {
				$(".nav-item").bind("click", $.proxy(this.handleCliclNav, this)), $(document).on("click", ".js-back-top", $.proxy(this.handleClickBackTop, this)), $(".js-job").bind("click", $.proxy(this.handleClickJob, this)), $(".js-finance").bind("click", $.proxy(this.handleClickFinance, this)), $(".js-goHr").bind("click", $.proxy(this.handleClickJob, this)), $(".js-investor-relations").bind("click", $.proxy(this.handleClickInvestorRelations, this)), $(".js-join").bind("click", $.proxy(this.handleClickCooperation, this)), $(".js-about").bind("click", $.proxy(this.handleClickAbout, this)), $(".js-home-page").bind("click", $.proxy(this.handleClickHomePage, this)), $(".js-express-check").bind("click", $.proxy(this.handleClickExpressCheck, this)), $(".js-express-website").bind("click", $.proxy(this.handleClickExpressWebsite, this)), $(".js-express-price").bind("click", $.proxy(this.handleClickExpressPrice, this)), $(".js-express-prohibited").bind("click", $.proxy(this.handleClickExpressProhibited, this)), $(".js-express-questions").bind("click", $.proxy(this.handleClickExpressQuestions, this)), $(".js-express-suggest").bind("click", $.proxy(this.handleClickExpressSuggest, this)), $(".js-business,.js-business-morrow").bind("click", $.proxy(this.handleClickBusinessMorrow, this)), $(".js-business-onAlternateDays").bind("click", $.proxy(this.handleClickBusinessOnAlternateDays, this)), $(".js-business-triduum").bind("click", $.proxy(this.handleClickBusinessTriduum, this)), $(".js-business-privacySurfaceSingle").bind("click", $.proxy(this.handleClickBusinessPrivacySurfaceSingle, this)), $(".js-business-freshDelivery").bind("click", $.proxy(this.handleClickBusinessFreshDelivery, this)), $(".js-business-recheneinheit").bind("click", $.proxy(this.handleClickBusinessRecheneinheit, this)), $(".js-business-enterpriseOrder").bind("click", $.proxy(this.handleClickBusinessEnterpriseOrder, this)), $(".js-business-cloudPrint").bind("click", $.proxy(this.handleClickBusinessCloudPrint, this)), $(".js-business-theDoorToTake").bind("click", $.proxy(this.handleClickBusinessTheDoorToTake, this)), $(".js-business-generationOfPickup").bind("click", $.proxy(this.handleClickBusinessGenerationOfPickup, this)), $(".js-business-payOnDelivery").bind("click", $.proxy(this.handleClickBusinessPayOnDelivery, this)), $(".js-business-freightCollectExpressItem").bind("click", $.proxy(this.handleClickBusinessFreightCollectExpressItem, this)), $(".js-business-signTheBillToReturn").bind("click", $.proxy(this.handleClickBusinessSignTheBillToReturn, this)), $(".js-business-supportValue").bind("click", $.proxy(this.handleClickBusinessSupportValue, this)), $(".js-business-afterSalesService").bind("click", $.proxy(this.handleClickBusinessAfterSalesService, this)), $(".js-business-hongkong").bind("click", $.proxy(this.handleClickBusinessHongkong, this)), $(".js-business-hongkongDhl").bind("click", $.proxy(this.handleClickBusinessHongkongDhl, this)), $(".js-business-taiwan").bind("click", $.proxy(this.handleClickBusinessTaiwan, this)), $(".js-business-more").bind("click", $.proxy(this.handleClickMore, this)), $(".js-business-europe").bind("click", $.proxy(this.handleClickBusinessEurope, this)), $(".js-business-switzerlandTwo").bind("click", $.proxy(this.handleClickBusinessSwitzerlandTwo, this)), $(".js-business-cloudPrint").bind("click", $.proxy(this.handleClickBusinessCloudPrint, this)), $(".js-case-personage").bind("click", $.proxy(this.handleClickCasePersonage, this)), $(".js-case-merchant").bind("click", $.proxy(this.handleClickCaseMerchant, this)), $(".js-case-website").bind("click", $.proxy(this.handleClickCaseWebsite, this)), $(".js-case-detail_01").bind("click", $.proxy(this.handleClickCaseDetail_01, this)), $(".js-legal-statement").bind("click", $.proxy(this.handleClickLegalStatement, this)), $(".js-privacy-protection").bind("click", $.proxy(this.handleClickPrivacyProtection, this)), $(".js-cookie-protection").bind("click", $.proxy(this.handleClickCookieProtection, this)), $(".js-express-ship").bind("click", $.proxy(this.expressShip, this)), $(".logo-box").bind("click", $.proxy(this.toIndex, this)), $(".js-contact-us").bind("click", $.proxy(this.handleClickContactUs, this)), $(".js-company-profile").bind("click", $.proxy(this.handleClickCompanyProfile, this)), $(".js-enterprise-video").bind("click", $.proxy(this.handleClickEnterpriseVideo, this)), $(".js-leadership-concern").bind("click", $.proxy(this.handleClickLeadershipConcern, this)), $(".js-corporate-development").bind("click", $.proxy(this.handleClickCorporateDevelopment, this)), $(".js-corporate-culture").bind("click", $.proxy(this.handleClickCorporateCulture, this)), $(".js-responsibility-honor").bind("click", $.proxy(this.handleClickResponsibilityHonor, this)), $(".js-charity").bind("click", $.proxy(this.handleClickCharity, this)), $(".js-new-list").bind("click", $.proxy(this.handleClickNewList, this)), $(".js-one-day").bind("click", $.proxy(this.handleClickOneDay, this)), $(".js-story").bind("click", $.proxy(this.handleClickStory, this)), $(".js-innovation").bind("click", $.proxy(this.handleClickInnovation, this)), $(".js-industry-new").bind("click", $.proxy(this.handleClickIndustryNews, this)), $(".js-express-outlets").bind("click", $.proxy(this.handleClickExpressOutlets, this)), $(".js-cooperate").bind("click", $.proxy(this.handleClickBusiness, this)), $(".js-supplier").bind("click", $.proxy(this.handleClicksupplier, this)), $(".js-case").bind("click", $.proxy(this.handleBotton, this)), $(".js-zpa").bind("click", $.proxy(this.handleClickZpaHome, this)), $(".js-zop").bind("click", $.proxy(this.handleClickZopHome, this)), $(".js-supermarket").bind("click", $.proxy(this.handleClickSupermarket, this)), $(".js-business-cloudChamber").bind("click", $.proxy(this.handleClickCloudChamber, this)), $(".js-business-serviceProducts").bind("click", $.proxy(this.handleClickServiceProducts, this)), $(".js-business-serviceScope").bind("click", $.proxy(this.handleClickServiceScope, this)), $(".js-business-cooperativePartner").bind("click", $.proxy(this.handleClickCooperativePartner, this)), $(".js-business-electronicsSurfaceSingle").bind("click", $.proxy(this.handleClickElectronicsSurfaceSingle, this)), $(".js-investor-cn-index").bind("click", $.proxy(this.handleClickInvestorIndexCN, this)), $(".js-investor-cn-performance").bind("click", $.proxy(this.handleClickInvestorPerformanceCN, this)), $(".js-investor-cn-announcement-hk").bind("click", $.proxy(this.handleClickInvestorAnnouncementHkCN, this)), $(".js-investor-cn-announcement-am").bind("click", $.proxy(this.handleClickInvestorAnnouncementAmCN, this)), $(".js-investor-cn-directors").bind("click", $.proxy(this.handleClickInvestorDirectorsCN, this)), $(".js-investor-cn-committee").bind("click", $.proxy(this.handleClickInvestorCommitteeCN, this)), $(".js-investor-cn-govern").bind("click", $.proxy(this.handleClickInvestorGovernCN, this)), $(".js-investor-cn-management").bind("click", $.proxy(this.handleClickInvestorManagementCN, this)), $(".js-investor-cn-american").bind("click", $.proxy(this.handleClickInvestorAmericanCN, this)), $(".js-investor-cn-hongkong").bind("click", $.proxy(this.handleClickInvestorHongkongCN, this)), $(".js-investor-cn-log").bind("click", $.proxy(this.handleClickInvestorLogCN, this)), $(".js-investor-cn-contact").bind("click", $.proxy(this.handleClickInvestorContactCN, this)), $(".js-investor-hk-index").bind("click", $.proxy(this.handleClickInvestorIndexHK, this)), $(".js-investor-hk-performance").bind("click", $.proxy(this.handleClickInvestorPerformanceHK, this)), $(".js-investor-hk-announcement-hk").bind("click", $.proxy(this.handleClickInvestorAnnouncementHkHK, this)), $(".js-investor-hk-announcement-am").bind("click", $.proxy(this.handleClickInvestorAnnouncementAmHK, this)), $(".js-investor-hk-directors").bind("click", $.proxy(this.handleClickInvestorDirectorsHK, this)), $(".js-investor-hk-committee").bind("click", $.proxy(this.handleClickInvestorCommitteeHK, this)), $(".js-investor-hk-govern").bind("click", $.proxy(this.handleClickInvestorGovernHK, this)), $(".js-investor-hk-management").bind("click", $.proxy(this.handleClickInvestorManagementHK, this)), $(".js-investor-hk-american").bind("click", $.proxy(this.handleClickInvestorAmericanHK, this)), $(".js-investor-hk-hongkong").bind("click", $.proxy(this.handleClickInvestorHongkongHK, this)), $(".js-investor-hk-log").bind("click", $.proxy(this.handleClickInvestorLogHK, this)), $(".js-investor-hk-contact").bind("click", $.proxy(this.handleClickInvestorContactHK, this)), $(".js-report-financial").bind("click", $.proxy(this.handleClickFinancial, this)), $(".js-report-notice").bind("click", $.proxy(this.handleClickNotice, this)), $(".js-stock-price").bind("click", $.proxy(this.handleClickStockPrice, this)), $(".js-report-investor-relations").bind("click", $.proxy(this.handleClickReportInvestorRelations, this)), $(".js-report-social-responsibility").bind("click", $.proxy(this.handleClickSocialResponsibility, this)), $(".js-business-today").bind("click", $.proxy(this.handleClickToday, this)), $(".js-business-rick").bind("click", $.proxy(this.handleClickRick, this)), $(".js-business-asia").bind("click", $.proxy(this.handleClickAsia, this)), $(".js-business-cross").bind("click", $.proxy(this.handleClickCross, this)), $(".js-business-overseas").bind("click", $.proxy(this.handleClickOverseas, this)), $(".js-business-localization").bind("click", $.proxy(this.handleClickLocalization, this)), $(".js-business-warehousing").bind("click", $.proxy(this.handleClickWarehousing, this)), $(".js-business-twoHours").bind("click", $.proxy(this.handleClickTwoHours, this)), $(".js-business-stores").bind("click", $.proxy(this.handleClickStores, this)), $(".header-middle ul li").hover(function() {
					var e = $(this).index();
					$(".business-menu").removeClass("index-1"), $(".business-menu").removeClass("index-2"), $(".business-menu").removeClass("index-3"), $(".business-menu").removeClass("index-4"), $(".business-menu").removeClass("index-5"), $(this).find(".business-menu").addClass("index-" + e).show()
				}, function() {
					$(this).find(".business-menu").hide()
				}), $(".siteTxt").click(function(e) {
					SelCity(this, e)
				}), $(".stateTxt").click(function(e) {
					SelState(this, e)
				}), $(".registere").click(function() {
					location.href = "https://my.zto.com"
				}), $(".login").click(function() {
					console.log(zto.config.centerceUrl);
					window.location.host;
					window.open(zto.config.centerceUrl, "_blank")
				})
			},
			handleCliclNav: function(e) {
				var i = $(e.target).parent();
				0 < i.find(".nav-zto-menu").length && (console.log("thisp"), i.hasClass("show") ? i.removeClass("show") : i.addClass("show")), console.log($(".nav-zto").height(), $(".business-content").height()), $(".nav-zto").height() > $(".business-content").height() - 50 ? $(".business-content").css("height", $(".nav-zto").height() + "px") : $(".business-content").css("height", "auto");
				var t = $(".js-nav-fixed"),
					o = $(".content-main").offset().top,
					n = $(document).scrollTop();
				if(o < n) {
					t.css("top", n - o + "px");
					var s = t.offset().top - o,
						l = $(".content-main").height() - t.height();
					l <= s ? t.css("top", l + "px") : t.css("top", n - o + "px")
				} else t.css({
					position: "absolute",
					top: "0px"
				})
			},
			handleClickHomePage: function() {
				location.href = "../index.html"
			},
			handleClickBackTop: function() {
				$("body, html").animate({
					scrollTop: "0"
				}, 200)
			},
			handleClickAbout: function() {
				location.href = "../companyIntroduce/companyProfile.html"
			},
			handleClickJob: function() {
				window.open("http://hr.zto.com")
			},
			handleClickFinance: function() {
				window.open("https://www.ztofinance.com/")
			},
			gohrclick: function() {
				window.open("http://www.hotjob.cn/wt/ZTO/web/index?brandCode=1")
			},
			handleClickInvestorRelations: function() {
				window.open("http://zto.investorroom.com/")
			},
			handleClickCooperation: function() {
				location.href = "../league/expressOutlets.html"
			},
			handleClickExpressCheck: function() {
				location.href = "../express/expressCheck.html"
			},
			handleClickExpressWebsite: function() {
				location.href = "../express/expressWebsite.html"
			},
			handleClickExpressPrice: function() {
				location.href = "../express/expressPrice.html"
			},
			handleClickExpressProhibited: function() {
				location.href = "../express/expressProhibited.html"
			},
			handleClickExpressComplain: function() {
				location.href = "../express/expressComplain.html"
			},
			handleClickExpressQuestions: function() {
				location.href = "https://my.zto.com/faq"
			},
			handleClickExpressSuggest: function() {
				location.href = "https://my.zto.com/feedback"
			},
			handleClickBusinessMorrow: function() {
				location.href = "../business/morrow.html"
			},
			handleClickBusinessOnAlternateDays: function() {
				location.href = "../business/onAlternateDays.html"
			},
			handleClickBusinessTriduum: function() {
				location.href = "../business/triduum.html"
			},
			handleClickBusinessPrivacySurfaceSingle: function() {
				location.href = "../business/privacySurfaceSingle.html"
			},
			handleClickBusinessFreshDelivery: function() {
				location.href = "../business/freshDelivery.html"
			},
			handleClickBusinessRecheneinheit: function() {
				location.href = "../business/recheneinheit.html"
			},
			handleClickBusinessEnterpriseOrder: function() {
				location.href = "../business/enterpriseOrder.html"
			},
			handleClickBusinessCloudPrint: function() {
				location.href = "../business/cloudPrint.html"
			},
			handleClickBusinessTheDoorToTake: function() {
				location.href = "../business/theDoorToTake.html"
			},
			handleClickBusinessGenerationOfPickup: function() {
				location.href = "../business/generationOfPickup.html"
			},
			handleClickBusinessPayOnDelivery: function() {
				location.href = "../business/payOnDelivery.html"
			},
			handleClickBusinessFreightCollectExpressItem: function() {
				location.href = "../business/freightCollectExpressItem.html"
			},
			handleClickBusinessSignTheBillToReturn: function() {
				location.href = "../business/signTheBillToReturn.html"
			},
			handleClickBusinessSupportValue: function() {
				location.href = "../business/supportValue.html"
			},
			handleClickBusinessAfterSalesService: function() {
				location.href = "../business/afterSalesService.html"
			},
			handleClickBusinessHongkong: function() {
				location.href = "../business/hongkong.html"
			},
			handleClickBusinessHongkongDhl: function() {
				location.href = "../business/hongkongDhl.html"
			},
			handleClickBusinessTaiwan: function() {
				location.href = "../business/taiwan.html"
			},
			handleClickMore: function() {
				window.open("https://www.ztoglobal.com/")
			},
			handleClickBusinessEurope: function() {
				location.href = "../business/europe.html"
			},
			handleClickBusinessCloudPrint: function() {
				location.href = "../business/cloudPrint.html"
			},
			handleClickCasePersonage: function() {
				location.href = "../case/personage.html"
			},
			handleClickCaseMerchant: function() {
				location.href = "../case/merchant.html"
			},
			handleClickCaseWebsite: function() {
				location.href = "../case/website.html"
			},
			handleClickCaseDetail_01: function() {
				location.href = "../case/caseDetail_01.html"
			},
			handleClickLegalStatement: function() {
				location.href = "../legal&privacy/legal.html"
			},
			handleClickPrivacyProtection: function() {
				location.href = "../legal&privacy/privacy.html"
			},
			handleClickCookieProtection: function() {
				location.href = "../legal&privacy/cookie.html"
			},
			toIndex: function() {
				location.href = "../index.html"
			},
			handleClickContactUs: function() {
				location.href = "../companyIntroduce/contactUs.html"
			},
			handleClickCompanyProfile: function() {
				location.href = "../companyIntroduce/companyProfile.html"
			},
			handleClickEnterpriseVideo: function() {
				location.href = "../companyIntroduce/enterpriseVideo.html"
			},
			handleClickCharity: function() {
				location.href = "../companyIntroduce/charityProgram.html"
			},
			handleClickNewList: function() {
				location.href = "../companyIntroduce/newList.html"
			},
			handleClickLeadershipConcern: function() {
				location.href = "../companyIntroduce/leadershipConcern.html"
			},
			handleClickCorporateDevelopment: function() {
				location.href = "../companyIntroduce/corporateDevelopment.html"
			},
			handleClickCorporateCulture: function() {
				location.href = "../companyIntroduce/corporateCulture.html"
			},
			handleClickResponsibilityHonor: function() {
				location.href = "../companyIntroduce/responsibilityHonor.html"
			},
			handleClickOneDay: function() {
				location.href = "../companyIntroduce/oneDay.html"
			},
			handleClickStory: function() {
				location.href = "../companyIntroduce/story.html"
			},
			handleClickInnovation: function() {
				location.href = "../companyIntroduce/innovation.html"
			},
			handleClickIndustryNews: function() {
				location.href = "../companyIntroduce/industryNews.html"
			},
			handleClickExpressOutlets: function() {
				location.href = "../league/expressOutlets.html"
			},
			handleClickBusiness: function() {
				location.href = "../league/cooperate.html"
			},
			handleClicksupplier: function() {
				location.href = "../league/supplier.html"
			},
			handleBotton: function() {
				location.href = "../case/merchant.html"
			},
			handleClickZpaHome: function() {
				window.open("https://zpa.zto.com")
			},
			handleClickZopHome: function() {
				window.open("https://open.zto.com/")
			},
			handleClickSupermarket: function() {
				window.open("https://wjsso.zto.com/oauth2/authorize?appid=zt-oNKHuI_ViWtkBdmbiIk1w&redirect_uri=http%3a%2f%2fwj.zto.com%2fAccount%2fAuthorize&response_type=code&scope=userinfo&state=3eb79d2915844534a23f4c3ff1c3cedb")
			},
			handleClickCloudChamber: function() {
				location.href = "../business/cloudChamber.html"
			},
			handleClickServiceProducts: function() {
				location.href = "../business/serviceProducts.html"
			},
			handleClickServiceScope: function() {
				location.href = "../business/serviceScope.html"
			},
			handleClickCooperativePartner: function() {
				location.href = "../business/cooperativePartner.html"
			},
			handleClickElectronicsSurfaceSingle: function() {
				location.href = "../business/electronicsSurfaceSingle.html"
			},
			expressShip: function() {
				/*在线寄件*/
				console.log(zto.config);
				var e = "http://localhost:8080/zto/ship.html";
				window.open(e)
			},
			handleClickInvestorNew: function() {
				location.href = "../investorRelations/newsInformation.html"
			},
			handleClickInvestorReport: function() {
				location.href = "../investorRelations/periodicReport.html"
			},
			handleClickInvestorCorporate: function() {
				location.href = "../investorRelations/corporateGovernance.html"
			},
			handleClickInvestorEmail: function() {
				location.href = "../investorRelations/mailSubscriptions.html"
			},
			handleClickInvestorVedio: function() {
				location.href = "../investorRelations/companyVedio.html"
			},
			handleClickInvestorLiaison: function() {
				location.href = "../investorRelations/investorLiaison.html"
			},
			handleClickFinancial: function() {
				location.href = "../investorRelations/periodicReport.html?checkedId=0"
			},
			handleClickNotice: function() {
				location.href = "../investorRelations/periodicReport.html?checkedId=1"
			},
			handleClickReportInvestorRelations: function() {
				location.href = "../investorRelations/periodicReport.html?checkedId=2"
			},
			handleClickSocialResponsibility: function() {
				location.href = "../investorRelations/periodicReport.html?checkedId=3"
			},
			handleClickStockPrice: function() {
				location.href = "../investorRelations/stockPrice.html"
			},
			handleClickToday: function() {
				location.href = "../business/today.html"
			},
			handleClickRick: function() {
				location.href = "../business/rick.html"
			},
			handleClickAsia: function() {
				location.href = "../business/asia.html"
			},
			handleClickCross: function() {
				location.href = "../business/cross.html"
			},
			handleClickOverseas: function() {
				location.href = "../business/overseas.html"
			},
			handleClickLocalization: function() {
				location.href = "../business/localization.html"
			},
			handleClickWarehousing: function() {
				location.href = "../business/warehousing.html"
			},
			handleClickTwoHours: function() {
				location.href = "../business/twoHours.html"
			},
			handleClickStores: function() {
				location.href = "../business/stores.html"
			},
			handleClickInvestorIndexCN: function() {
				location.href = "../investorCN/index.html"
			},
			handleClickInvestorPerformanceCN: function() {
				location.href = "../investorCN/performance.html"
			},
			handleClickInvestorAnnouncementHkCN: function() {
				location.href = "../investorCN/announcementhk.html"
			},
			handleClickInvestorAnnouncementAmCN: function() {
				location.href = "../investorCN/announcementam.html"
			},
			handleClickInvestorDirectorsCN: function() {
				location.href = "../investorCN/directors.html"
			},
			handleClickInvestorCommitteeCN: function() {
				location.href = "../investorCN/committee.html"
			},
			handleClickInvestorGovernCN: function() {
				location.href = "../investorCN/govern.html"
			},
			handleClickInvestorManagementCN: function() {
				location.href = "../investorCN/management.html"
			},
			handleClickInvestorAmericanCN: function() {
				location.href = "../investorCN/american.html"
			},
			handleClickInvestorHongkongCN: function() {
				location.href = "../investorCN/hongkong.html"
			},
			handleClickInvestorLogCN: function() {
				location.href = "../investorCN/log.html"
			},
			handleClickInvestorContactCN: function() {
				location.href = "../investorCN/contact.html"
			},
			handleClickInvestorIndexHK: function() {
				location.href = "../investorHK/index.html"
			},
			handleClickInvestorPerformanceHK: function() {
				location.href = "../investorHK/performance.html"
			},
			handleClickInvestorAnnouncementHkHK: function() {
				location.href = "../investorHK/announcementhk.html"
			},
			handleClickInvestorAnnouncementAmHK: function() {
				location.href = "../investorHK/announcementam.html"
			},
			handleClickInvestorDirectorsHK: function() {
				location.href = "../investorHK/directors.html"
			},
			handleClickInvestorCommitteeHK: function() {
				location.href = "../investorHK/committee.html"
			},
			handleClickInvestorGovernHK: function() {
				location.href = "../investorHK/govern.html"
			},
			handleClickInvestorManagementHK: function() {
				location.href = "../investorHK/management.html"
			},
			handleClickInvestorAmericanHK: function() {
				location.href = "../investorHK/american.html"
			},
			handleClickInvestorHongkongHK: function() {
				location.href = "../investorHK/hongkong.html"
			},
			handleClickInvestorLogHK: function() {
				location.href = "../investorHK/log.html"
			},
			handleClickInvestorContactHK: function() {
				location.href = "../investorHK/contact.html"
			}
		}), (new t).init()
	},
	26: function(e, i, t) {
		t(3);
		var l = [];

		function c(i, t, o, n) {
			$("." + i).click(function() {
				var e = $(this).index();
				$(this).addClass(o).siblings().removeClass(o), "businessMenu-item" === i && (l.columnTitleColor1 && $(this).css("color", l.columnTitleColor1).siblings().css("color", "grey"), l.columnTitleBorder1 && ($(this).css("border-bottom", "2px solid " + l.columnTitleBorder1).siblings().css("border-bottom", "none"), $(this).find("i").css("border-bottom", "4px solid " + l.columnTitleBorder1))), "itemMenu-item" === i && (l.tabSelectedTextColor && $(this).css("color", l.tabSelectedTextColor).siblings().css("color", "grey"), l.tabSelectedBgColor && $(this).css("background", l.tabSelectedBgColor).siblings().css("background", "none")), "newsMenu-item" === i && l.listTabColor && ($(this).css("border-top", "2px solid " + l.listTabColor).siblings().css("border-top", "none"), $(this).find("i").css("border-top", "4px solid " + l.listTabColor), $(this).siblings().find("i").css("border-top", "none")), $("." + t + ":eq(" + e + ")").addClass(n).siblings().removeClass(n)
			})
		}

		function r() {
			var e, i, t = "";
			if($(".bill-title-way").hasClass("bill-title-selected"))
				if(0 < $(".ex_item").size()) {
					for(var o = 0, n = $(".ex_item").length; o < n; o++) t += o == n - 1 ? $(".ex_item:eq(" + o + ")").find("span").html() : $(".ex_item:eq(" + o + ")").find("span").html() + ",";
					window.location.href = "express/expressCheck.html", a(t.split(","))
				} else "" != $(".query_txt").val() && ztoAlert("提示", "运单号错误！", "确定", "close");
			else e = $(".phone-search-input").val(), i = function(e) {
				e ? ztoAlert("提示", e, "确定", "") : window.location.href = "express/expressCheck.html?phoneBill=" + $(".phone-search-input").val()
			}, e ? 0 <= e.indexOf(" ") ? i && i("手机号不能含有空格") : /^1\d{10}$/.test(e) || /^[0,4]\d{2,3}-?\d{7,8}$/.test(e) ? i && i() : i && i("手机号格式不正确") : i && i("手机号不能为空")
		}

		function a(e) {
			sessionStorage.removeItem("billCode"), sessionStorage.setItem("billCode", JSON.stringify(e))
		}

		function h(e, i, t, o, n) {
			for(var s = 0; s < e.length; s++)
				for(var l = 0; l < $(i).length; l++) l + 1 === e[s].subIndex && ("src" === n ? e[s].icon && $(i).eq(l).find(o).attr("src", e[s].icon) : e[s].icon && $(i).eq(l).find(o).css("background", "url(" + e[s].icon + ") no-repeat"))
		}

		function d(e, i) {
			var t = new Date;
			t.setTime(t.getTime() + 432e5), document.cookie = e + "=" + escape(i) + ";expires=" + t.toGMTString() + "; path=/"
		}

		function u(e) {
			var i, t = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
			return(i = document.cookie.match(t)) ? unescape(i[2]) : null
		}
		$(function() {
			HrPost("getCurrentTheme", {
				channel: "201",
				mobile: u("userMobile")
			}, function(e) {
				var i;
				console.log(e, "123"), e.status && e.result.detail && (console.log(e.result.detail, "皮肤数据"), l = JSON.parse(e.result.detail), console.log(l, "、、、、、、、、"), (i = l).qrCode && $("#wechatHint-img").attr("src", i.qrCode), i.flotBgColor && $(".line-a").css("background", i.flotBgColor), i.flotColor && $(".link-font").css("color", i.flotColor), h(i.flotIconList, ".link ul li", ".link-font", "img", "src"), i.navImage && $("#header").css("background", "url(" + i.navImage + ") no-repeat center top"), i.logo && $("#skin-logo").attr("src", i.logo), i.tel && $("#skin-tel").attr("src", i.tel), i.cnBgColor && $("#cnBtn").css("background", i.cnBgColor), i.enBgColor && $("#enBtn").css("background", i.enBgColor), i.cnTextColor && $("#cnBtn").css("color", i.cnTextColor), i.enTextColor && $("#enBtn").css("color", i.enTextColor), h(i.accountIcon, ".header-right", ".login-text", ".login-img", "src"), i.navColor && $(".header-middle li span").css("color", i.navColor), i.navSelectedColor && $(".header-middle li span").hover(function() {
					$(this).css("color", i.navSelectedColor)
				}, function() {
					$(this).css("color", i.navColor)
				}), $(".header-middle li").hover(function() {
					$(this).css("border-bottom", "2px solid " + i.navSelectedColor)
				}, function() {
					$(this).css("border", "none")
				}), i.subNavColor && $(".menu-title").css("color", i.subNavColor), h(i.navList, ".menu-box", ".sub-menu-item", ".sub-menu-item", "background"), i.searchColumnBgColor && $(".bill-search").css("background", i.searchColumnBgColor), $(".shortcut-menu").css("background", i.searchColumnBgColor), i.searchBtnBgColor && $("#btn_onlineTracking").css("background", i.searchBtnBgColor), h(i.searchIconList, ".bill-title h2", "span", "img", "src"), h(i.menuList, ".shortcut-menu .menu-item", "span", "img", "src"), i.mainTitleColor1 && $(".box-option string").css("color", i.mainTitleColor1), i.subTitleColor1 && $(".box-option span").css("color", i.subTitleColor1), i.columnTitleColor1 && $(".businessMenu-item.checked").css("color", i.columnTitleColor1), i.columnTitleBorder1 && $(".businessMenu-item.checked").css("border-bottom", "2px solid " + i.columnTitleBorder1), i.columnTitleBorder1 && $(".businessMenu-item.checked i").css("border-bottom", "4px solid " + i.columnTitleBorder1), i.tabSelectedTextColor && $(".itemMenu-item.checked").css("color", i.tabSelectedTextColor), i.tabSelectedBgColor && $(".itemMenu-item.checked").css("background", i.tabSelectedBgColor), i.markIconList[0].icon && $(".labelBg-1").css("background", "url(" + i.markIconList[0].icon + ") no-repeat center top"), i.markIconList[1].icon && $(".labelBg-2").css("background", "url(" + i.markIconList[1].icon + ") no-repeat center top"), i.markIconList[2].icon && $(".labelBg-3").css("background", "url(" + i.markIconList[2].icon + ") no-repeat center top"), h(i.menuList, ".shortcut-menu .menu-item", "span", "img", "src"), h(i.wuliuIconList, "#wuliuIconList .box-option", "strong", "img", "src"), h(i.gjIconList, "#gjIconList .box-option", "strong", "img", "src"), h(i.bussIconList, "#bussIconList .box-option", "strong", "img", "src"), h(i.cangIconList, "#cangIconList .box-option", "strong", "img", "src"), i.columnTitleColor2 && $("#advantages h3").css("color", i.columnTitleColor2), i.columnTitleBorder2 && $("#advantages em").css("background", i.columnTitleBorder2), $("#advantages i").css("border-bottom", "4px solid " + i.columnTitleBorder2), i.youshiTitleColor && $(".advantage-title strong").css("color", i.youshiTitleColor), $(".advantage-title i").css("background", i.youshiTitleColor), $(".advantage-item em").css("color", i.youshiTitleColor), i.youshiTextColor && $(".advantage-title em").css("color", i.youshiTextColor), $(".advantage-hint").css("color", i.youshiTextColor), i.youshiBg && $(".advantage-banner").attr("src", i.youshiBg), h(i.youshiIconList, ".advantage-item", "em", "img", "src"), i.columnTitleColor3 && $("#successful h3").css("color", i.columnTitleColor3), i.columnTitleBorder3 && $("#successful em").css("background", i.columnTitleBorder3), $("#successful i").css("border-bottom", "4px solid " + i.columnTitleBorder3), i.cardBgColor && $(".product_item").hover(function() {
					$(this).find(".item-text").css("background", i.cardBgColor)
				}, function() {
					$(this).find(".item-text").css("background", "none")
				}), i.cardShadowColor && $(".product_item").hover(function() {
					$(this).find(".item-text").css("box-shadow", "0 0 30px " + i.cardShadowColor)
				}, function() {
					$(this).find(".item-text").css("box-shadow", "0 0 30px #e5e9f8")
				}), i.cardTitleColor && $(".product_item").hover(function() {
					$(this).find(".product_item_title").css("color", i.cardTitleColor)
				}, function() {
					$(this).find(".product_item_title").css("color", "#27252f")
				}), i.cardTextColor && $(".product_item").hover(function() {
					$(this).find(".product_item_text").css("color", i.cardTextColor)
				}, function() {
					$(this).find(".product_item_text").css("color", "#96949d")
				}), i.columnTitleColor4 && $("#newstatus h3").css("color", i.columnTitleColor4), i.columnTitleBorder4 && $("#newstatus em").css("background", i.columnTitleBorder4), $("#newstatus i").css("border-bottom", "4px solid " + i.columnTitleBorder4), i.listTabColor && $(".newsMenu-item.checked").css("border-top", "2px solid " + i.listTabColor), $(".newsMenu-item.checked i").css("border-top", "4px solid " + i.listTabColor), i.listTextColor && $(".news-item").hover(function() {
					$(this).find("span").css("color", i.listTextColor), $(this).find("em").css("color", i.listTextColor)
				}, function() {
					$(this).find("span").css("color", "#737373"), $(this).find("em").css("color", "silver")
				}), i.footerMainTitleColor && $(".about-font h3").css("color", i.footerMainTitleColor), $(".about-img h3").css("color", i.footerMainTitleColor), i.footerMainTitleBorder && $(".about-font span").css("background", i.footerMainTitleBorder), $(".about-img span").css("color", i.footerMainTitleBorder), i.footerSubTitleColor && $(".about-font a").css("color", i.footerSubTitleColor), i.footerSubTitleColor && i.footerSubTitleSelectedColor && $(".about-font a").hover(function() {
					$(this).css("color", i.footerSubTitleSelectedColor)
				}, function() {
					$(this).css("color", i.footerSubTitleColor)
				}), i.footerBg1 && $(".footer_bg_1").attr("src", i.footerBg1), i.footerBg2 && $(".footer_bg_2").attr("src", i.footerBg2))
			}), HrPost("getApolloConfig", {}, function(e) {
				if(e) {
					var i = e.result.serverTime,
						t = new Date(e.result.springCallStart.replace(/-/g, "/")).getTime(),
						o = new Date(e.result.springCallEnd.replace(/-/g, "/")).getTime(),
						n = u("videoSwitch");
					console.log(i, t, o, n, "时间"), t < i && i < o && (null == n || "" == n || null == n) ? (console.log("video"), l = u("videoSwitch"), console.log(l, "videoSwitch"), null == l || "" == l || null == l ? ($(".video-window").css("display", "block"), $("#my-video")[0].play(), d("videoSwitch", "false")) : $(".video-window").css("display", "none")) : (console.log("wechat"), s = u("wechatSwitch"), console.log(s, "wechatSwitch"), null == s || "" == s || null == s ? ($("#wechatPopup").css("display", "block"), setTimeout(function() {
						$("#wechatPopup").addClass("hide"), setCookieWeek("wechatSwitch", "false"), setTimeout(function() {
							$("#wechatPopup").css("display", "none"), $("#wechatHint").css("display", "block")
						}, 400)
					}, 5e3)) : $("#wechatHint").css("display", "block"))
				}
				var s, l
			}), $(".video-close").click(function() {
				$(".video-window").hide(), $("#my-video")[0].pause(), d("videoSwitch", "false")
			}), HrPost("BannerPicture_GetList", {
				bannerType: 1
			}, function(e) {
				var i = "",
					t = e.result.items;
				for(var o in t) null != t[o].bannerUrl ? i += '<a href="' + t[o].bannerUrl + '" target="_blank" class="banner-item toZtts"><img src="' + t[o].bannerPic + '"></a>' : i += '<a href="javascript:void(0)" class="banner-item"><img src="' + t[o].bannerPic + '"></a>';
				i += '<div class="banner-num"></div>', $(".banner-box").html(i), ImgRunOpcity(".banner-box", ".banner-item", ".banner-num", "dot", "int1", "run1", "change1", 5e3)
			}), window.onload = function() {
				localStorage.getItem("cookie_policy") || $(".cookie_box").removeClass("cookie_none")
			}, $(".cookie_agree").click(function() {
				$(".cookie_box").addClass("cookie_none"), localStorage.setItem("cookie_policy", !0)
			});
			var e = u("codes");
			if(null == e) $(".search-record em").html("无");
			else {
				var i = e.split(","),
					t = i[i.length - 1].split("-");
				$(".search-record .s-code").html(t[0]), $(".search-record .s-state").html("【" + t[1] + "】")
			}
			HrPost("News_GetSideList", {}, function(e) {
				if(e && null != e.result) {
					for(var i = e.result.items, t = "", o = 0; o < i.length; o++) t += '<a href="./companyIntroduce/newsListDetail.html?id=' + i[o].id + '" class="newsSpecial-item">\t                                <img src="' + i[o].imageUrl + '">\t                                <strong>' + i[o].title + "</strong>\t                                <p>" + i[o].content + "</p>\t                                <i></i>\t                            </a>";
					$(".news-special").html(t)
				}
			}), HrPost("News_GetList", {
				category: "公司动态",
				pageSize: 6,
				pageIndex: 1
			}, function(e) {
				for(var i = e.result.items, t = "", o = 0, n = i.length; o < n; o++) {
					var s = i[o].inputTime.replace("T", " ").substr(0, 10);
					t += '<a class="news-item clearboth" href="./companyIntroduce/newsListDetail.html?id=' + i[o].id + '">\t                        <span>' + i[o].title + "</span>\t                        <em>" + s + "</em>\t                    </a>"
				}
				$(".news-list.company").html(t), l.listTextColor && $(".news-item").hover(function() {
					$(this).find("span").css("color", l.listTextColor), $(this).find("em").css("color", l.listTextColor)
				}, function() {
					$(this).find("span").css("color", "#737373"), $(this).find("em").css("color", "silver")
				})
			}), HrPost("News_GetList", {
				category: "行业新闻",
				pageSize: 6,
				pageIndex: 1
			}, function(e) {
				for(var i = e.result.items, t = "", o = 0, n = i.length; o < n; o++) {
					var s = i[o].inputTime.replace("T", " ").substr(0, 10);
					t += '<a class="news-item clearboth" href="./companyIntroduce/industryNewsDetail.html?id=' + i[o].id + '">\t                        <span>' + i[o].title + "</span>\t                        <em>" + s + "</em>\t                    </a>"
				}
				$(".news-list.industry").html(t)
			}), $(".query_txt").focus(function() {
				$(".bill-search").addClass("show"), $(".bill-title-way").addClass("bill-title-selected"), l.searchTabColor && $(".bill-title-way.bill-title-selected").css("color", l.searchTabColor), l.searchBgColor && $(".bill-search").css("background", l.searchBgColor), $(".bill-title-phone").css("color", "#fff")
			}), $(".bill-title-way").click(function() {
				$(".bill-search").addClass("show"), $(".query_txt").val(""), $(this).addClass("bill-title-selected"), l.searchTabColor && $(".bill-title-way.bill-title-selected").css("color", l.searchTabColor), l.searchBgColor && $(".bill-search").css("background", l.searchBgColor), $(".bill-title-phone").removeClass("bill-title-selected"), $(".bill-title-phone").css("color", "#fff"), $(".phone-search-input").addClass("hidden"), $(".query_txt").removeClass("hidden")
			}), $(".bill-title-phone").click(function() {
				$(".phone-search-input").val(""), $(".bill-search").addClass("show"), $(this).addClass("bill-title-selected"), l.searchTabColor && $(".bill-title-phone.bill-title-selected").css("color", l.searchTabColor), l.searchBgColor && $(".bill-search").css("background", l.searchBgColor), $(".bill-title-way").removeClass("bill-title-selected"), $(".bill-title-way").css("color", "#fff"), $(".query_txt").addClass("hidden"), $(".phone-search-input").removeClass("hidden")
			}), $("#tab_onlineShipping").click(function() {
				$(".bill-search").addClass("show"), l.searchBgColor && $(".bill-search").css("background", l.searchBgColor)
			}), $(document).click(function(e) {
				var i = $(".bill-search");
				i.is(e.target) || 0 !== i.has(e.target).length || (i.removeClass("show"), l.searchColumnBgColor ? $(".bill-search").css("background", l.searchColumnBgColor) : $(".bill-search").css("background", "#303f5f"))
			}), $(".query_txt").keyup(function() {
				var e = $(this),
					i = e.val().replace(/\,|\，|\;|\；|\s+/g, ","),
					t = (i.length, $(".ex_item").size());
				if(t < 10) {
					var o = i.split(",");
					if(1 < o.length)
						for(var n = 0; n < o.length; n++)
							if(12 <= o[n].length && o[n].length <= 16) {
								if(13 == o[n].length);
								else if(t < 10) {
									for(var s = 0, l = 0; l < t; l++) o[n] != $(".ex_item:eq(" + l + ") span").html() && s++;
									s == t ? (10 <= n ? ztoAlert("提示", "单次查询数量最多为10条！", "确定", "") : e.before('<div class="ex_item">\t                                            <span>' + o[n] + "</span>\t                                            <i></i>\t                                        </div>"), e.val("").attr("placeholder", ""), n === o.length - 1 && (o = "", e.val("").attr("placeholder", ""), e.blur())) : ztoAlert("提示", "您输入的订单号重复啦！", "确定", "queryToText")
								}
							} else 16 < o[n].length || e.val("").attr("placeholder", "在此输入单号")
				} else e.val("").attr("placeholder", ""), e.blur(), ztoAlert("提示", "单次查询数量最多为10条！", "确定", "")
			}), $(".query_txt").keydown(function(e) {
				var i, t, o = $(this),
					n = (i = o.val()).length;
				8 == e.keyCode && ("" != (i = o.val()) && null != i && " " != i || $(".ex_item").last().remove());
				if(13 == e.keyCode)
					if($(".ex_item").size() < 1) 12 <= n && n <= 16 ? 13 == n ? (o.val("").attr("placeholder", "在此输入单号"), ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", "")) : (t = $(".ex_item").size()) < 10 ? (o.before('<div class="ex_item">\t                                    <span>' + i + "</span>\t                                    <i></i>\t                                </div>"), o.blur(), o.val("").attr("placeholder", ""), r()) : ztoAlert("提示", "单次查询数量最多为10条！", "确定", "") : ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", "");
					else if(12 <= n && n <= 16)
					if(13 == n) o.val("").attr("placeholder", ""), ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", "");
					else if((t = $(".ex_item").size()) < 10) {
					for(var s = 0, l = 0; l < t; l++) i != $(".ex_item:eq(" + l + ") span").html() && s++;
					s == t ? (o.before('<div class="ex_item">\t                                    <span>' + i + "</span>\t                                    <i></i>\t                                </div>"), o.blur(), o.val("").attr("placeholder", "")) : ztoAlert("提示", "您输入的订单号重复啦！", "确定", "queryToText")
				} else ztoAlert("提示", "单次查询数量最多为10条！", "确定", "");
				else r()
			}), $(document).on("dblclick", ".ex_item span", function(e) {
				e.stopPropagation(), e.preventDefault();
				var i = $(this).html(),
					t = $(this).parent();
				t.addClass("ex_item_edit"), $(this).parent().html('<input type="text" id="input" value="' + i + '">'), setTimeout(function() {
					t.children().focus()
				}, 50)
			}), $(document).on("blur", ".ex_item input", function() {
				var e = $(this).val(),
					i = $(this).parent();
				if(12 <= e.length && e.length <= 16)
					if(13 == e.length) $(this).parent().remove(), ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", "");
					else {
						for(var t = $(".ex_item").size(), o = 0, n = 0; n < t; n++) e != $(".ex_item:eq(" + n + ") span").html() && o++;
						o == t ? ($(this).parent().html("<span>" + e + "</span><i></i>"), i.removeClass("ex_item_edit")) : (ztoAlert("提示", "您输入的订单号重复啦,请重新输入！", "确定", "queryToText"), $(this).parent().remove())
					}
				else ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", ""), $(this).parent().remove()
			}), $(document).on("click", ".ex_item i", function() {
				$(this).parent().remove()
			}), $(".search_btn").click(function() {
				if($(".bill-title-way").hasClass("bill-title-selected")) {
					var e = $(".query_txt").val(),
						i = e.length;
					if($(".ex_item").size() < 1) 12 <= i && i <= 16 ? 13 == i ? ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", "") : ($(".query_txt").before('<div class="ex_item">\t                                            <span>' + e + "</span>\t                                            <i></i>\t                                        </div>"), $(".query_txt").blur(), $(".query_txt").val("").attr("placeholder", ""), r()) : ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", "");
					else if(12 <= i && i <= 16)
						if(13 == i) ztoAlert("提示", "请输入正确单号，多个单号请用“分号”隔开！", "确定", "");
						else {
							var t = $(".ex_item").size();
							if(t < 10) {
								for(var o = 0, n = 0; n < t; n++) e != $(".ex_item:eq(" + n + ") span").html() && o++;
								o == t ? ($(".query_txt").before('<div class="ex_item">\t                                        <span>' + e + "</span>\t                                        <i></i>\t                                    </div>"), $(".query_txt").blur(), $(".query_txt").val("").attr("placeholder", ""), r()) : ztoAlert("提示", "您输入的订单号重复啦！", "确定", "queryToText")
							} else ztoAlert("提示", "单次查询数量最多为10条！", "确定", "")
						}
					else r()
				} else r()
			}), $(document).on("click", ".search-record em", function() {
				var e = $(".s-code").html();
				null != e && (window.location.href = "express/expressCheck.html", a(e.split(",")))
			});
			var o = 0,
				n = setInterval(function() {
					2 < ++o && (o = 0), o < 0 && (o = 2), $(".itemMenu-item:eq(" + o + ")").addClass("checked").siblings().removeClass("checked"), l.tabSelectedTextColor && $(".itemMenu-item:eq(" + o + ")").css("color", l.tabSelectedTextColor).siblings().css("color", "grey"), l.tabSelectedBgColor && $(".itemMenu-item:eq(" + o + ")").css("background", l.tabSelectedBgColor).siblings().css("background", "none"), $(".item-box:eq(" + o + ")").addClass("show").siblings().removeClass("show")
				}, 5e3);
			$(".clearSet").hover(function() {
				clearInterval(n)
			}, function() {
				n = setInterval(function() {
					2 < ++o && (o = 0), o < 0 && (o = 2), $(".itemMenu-item:eq(" + o + ")").addClass("checked").siblings().removeClass("checked"), l.tabSelectedTextColor && $(".itemMenu-item:eq(" + o + ")").css("color", l.tabSelectedTextColor).siblings().css("color", "grey"), l.tabSelectedBgColor && $(".itemMenu-item:eq(" + o + ")").css("background", l.tabSelectedBgColor).siblings().css("background", "none"), $(".item-box:eq(" + o + ")").addClass("show").siblings().removeClass("show")
				}, 5e3)
			}), $(".itemMenu-item").click(function() {
				var e = $(this).index();
				o = e
			});
			var s = 0;
			$(".advantage-btn").click(function() {
				$(this).hasClass("next") ? s < 2 ? s++ : s = 0 : 0 < s ? s-- : s = 2, $(".advantage-room").stop(!1, !1).animate({
					left: "-" + 1200 * s + "px"
				}, 300), $(".advantage-num .num-item:eq(" + s + ")").addClass("checked").siblings().removeClass("checked")
			}), $(".advantage-num .num-item").click(function() {
				var e = $(this).index();
				s = e, $(this).addClass("checked").siblings().removeClass("checked"), $(".advantage-room").stop(!1, !1).animate({
					left: "-" + 1200 * e + "px"
				}, 300)
			}), $("#wechatPopupClose").click(function() {
				setCookieWeek("wechatSwitch", "false"), $("#wechatPopup").addClass("hide"), setTimeout(function() {
					$("#wechatPopup").css("display", "none"), $("#wechatHint").css("display", "block")
				}, 400)
			}), $("#wechatHintClose").click(function() {
				$("#wechatHint").css("display", "none")
			}), c("businessMenu-item", "business-item", "checked", "show"), c("itemMenu-item", "item-box", "checked", "show"), c("newsMenu-item", "news-list", "checked", "show")
		})
	}
});