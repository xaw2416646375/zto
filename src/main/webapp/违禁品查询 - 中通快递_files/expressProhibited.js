!function (e) {
    var t = {};

    function s(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {exports: {}, id: i, loaded: !1};
        return e[i].call(n.exports, n, n.exports, s), n.loaded = !0, n.exports
    }

    s.m = e, s.c = t, s.p = "", s(0)
}({
    0: function (i, n, e) {
        i.exports = e(22)
    }, 3: function (i, n) {
        function e() {
        }

        $.extend(e.prototype, {
            init: function () {
                this.fixed(), this.footerLoad(), this.handleClickSucc(), this.login(), this.HKswitch()
            }, HKswitch: function () {
                HrPost("getApolloConfig", {keys: ["isShowInvestorsTC"]}, function (i) {
                    i && ("false" === i.result.isShowInvestorsTC ? ($(".oldC").css("display", "block"), $(".newC").css("display", "none")) : ($(".oldC").css("display", "none"), $(".newC").css("display", "block")))
                })
            }, footerLoad: function () {
                $("#js-footer-wrap").on("mouseenter", ".friendLink a", function () {
                    $(this).next().css({display: "block"}), $(this).find("span").addClass("actived")
                }).on("mouseout", ".friendLink a", function () {
                    $(this).next().css({display: "none"}), $(this).find("span").removeClass("actived")
                })
            }, login: function () {
                console.log(window.location.href, "111111111111"), 0 <= navigator.userAgent.indexOf("Mobile") && (window.location.href = "https://m.zto.com/"), zto.auth.getToken() && HrPost("auth_account_getUserLoginProvider", null, function (i) {
                    var n, e, t;
                    i.status && (i.result.mobile && (n = "userMobile", e = i.result.mobile, (t = new Date).setTime(t.getTime() + 198e5), document.cookie = n + "=" + escape(e) + ";expires=" + t.toGMTString() + "; path=/"), $(".login,.registere").hide(), $(".header-right").append('<div class="user">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="../imgs/login.png" alt="用户"><a href="' + zto.config.centerceUrl + '" data-phone="' + i.result.mobile + '">' + i.result.mobile + "</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>"), $(".user").show())
                })
            }, fixed: function () {
                if (0 < $(".js-nav-fixed").size()) {
                    var t = $(".js-nav-fixed"), s = $(".content-main").offset().top;
                    $(document).on("scroll", function () {
                        var i = $(document).scrollTop();
                        if (s < i) {
                            t.css("top", i - s + "px");
                            var n = t.offset().top - s, e = $(".content-main").height() - t.height();
                            e <= n ? t.css("top", e + "px") : t.css("top", i - s + "px")
                        } else t.css({position: "absolute", top: "0px"})
                    })
                }
            }, handleClickSucc: function () {
                $(".nav-item").bind("click", $.proxy(this.handleCliclNav, this)), $(document).on("click", ".js-back-top", $.proxy(this.handleClickBackTop, this)), $(".js-job").bind("click", $.proxy(this.handleClickJob, this)), $(".js-finance").bind("click", $.proxy(this.handleClickFinance, this)), $(".js-goHr").bind("click", $.proxy(this.handleClickJob, this)), $(".js-investor-relations").bind("click", $.proxy(this.handleClickInvestorRelations, this)), $(".js-join").bind("click", $.proxy(this.handleClickCooperation, this)), $(".js-about").bind("click", $.proxy(this.handleClickAbout, this)), $(".js-home-page").bind("click", $.proxy(this.handleClickHomePage, this)), $(".js-express-check").bind("click", $.proxy(this.handleClickExpressCheck, this)), $(".js-express-website").bind("click", $.proxy(this.handleClickExpressWebsite, this)), $(".js-express-price").bind("click", $.proxy(this.handleClickExpressPrice, this)), $(".js-express-prohibited").bind("click", $.proxy(this.handleClickExpressProhibited, this)), $(".js-express-questions").bind("click", $.proxy(this.handleClickExpressQuestions, this)), $(".js-express-suggest").bind("click", $.proxy(this.handleClickExpressSuggest, this)), $(".js-business,.js-business-morrow").bind("click", $.proxy(this.handleClickBusinessMorrow, this)), $(".js-business-onAlternateDays").bind("click", $.proxy(this.handleClickBusinessOnAlternateDays, this)), $(".js-business-triduum").bind("click", $.proxy(this.handleClickBusinessTriduum, this)), $(".js-business-privacySurfaceSingle").bind("click", $.proxy(this.handleClickBusinessPrivacySurfaceSingle, this)), $(".js-business-freshDelivery").bind("click", $.proxy(this.handleClickBusinessFreshDelivery, this)), $(".js-business-recheneinheit").bind("click", $.proxy(this.handleClickBusinessRecheneinheit, this)), $(".js-business-enterpriseOrder").bind("click", $.proxy(this.handleClickBusinessEnterpriseOrder, this)), $(".js-business-cloudPrint").bind("click", $.proxy(this.handleClickBusinessCloudPrint, this)), $(".js-business-theDoorToTake").bind("click", $.proxy(this.handleClickBusinessTheDoorToTake, this)), $(".js-business-generationOfPickup").bind("click", $.proxy(this.handleClickBusinessGenerationOfPickup, this)), $(".js-business-payOnDelivery").bind("click", $.proxy(this.handleClickBusinessPayOnDelivery, this)), $(".js-business-freightCollectExpressItem").bind("click", $.proxy(this.handleClickBusinessFreightCollectExpressItem, this)), $(".js-business-signTheBillToReturn").bind("click", $.proxy(this.handleClickBusinessSignTheBillToReturn, this)), $(".js-business-supportValue").bind("click", $.proxy(this.handleClickBusinessSupportValue, this)), $(".js-business-afterSalesService").bind("click", $.proxy(this.handleClickBusinessAfterSalesService, this)), $(".js-business-hongkong").bind("click", $.proxy(this.handleClickBusinessHongkong, this)), $(".js-business-hongkongDhl").bind("click", $.proxy(this.handleClickBusinessHongkongDhl, this)), $(".js-business-taiwan").bind("click", $.proxy(this.handleClickBusinessTaiwan, this)), $(".js-business-more").bind("click", $.proxy(this.handleClickMore, this)), $(".js-business-europe").bind("click", $.proxy(this.handleClickBusinessEurope, this)), $(".js-business-switzerlandTwo").bind("click", $.proxy(this.handleClickBusinessSwitzerlandTwo, this)), $(".js-business-cloudPrint").bind("click", $.proxy(this.handleClickBusinessCloudPrint, this)), $(".js-case-personage").bind("click", $.proxy(this.handleClickCasePersonage, this)), $(".js-case-merchant").bind("click", $.proxy(this.handleClickCaseMerchant, this)), $(".js-case-website").bind("click", $.proxy(this.handleClickCaseWebsite, this)), $(".js-case-detail_01").bind("click", $.proxy(this.handleClickCaseDetail_01, this)), $(".js-legal-statement").bind("click", $.proxy(this.handleClickLegalStatement, this)), $(".js-privacy-protection").bind("click", $.proxy(this.handleClickPrivacyProtection, this)), $(".js-cookie-protection").bind("click", $.proxy(this.handleClickCookieProtection, this)), $(".js-express-ship").bind("click", $.proxy(this.expressShip, this)), $(".logo-box").bind("click", $.proxy(this.toIndex, this)), $(".js-contact-us").bind("click", $.proxy(this.handleClickContactUs, this)), $(".js-company-profile").bind("click", $.proxy(this.handleClickCompanyProfile, this)), $(".js-enterprise-video").bind("click", $.proxy(this.handleClickEnterpriseVideo, this)), $(".js-leadership-concern").bind("click", $.proxy(this.handleClickLeadershipConcern, this)), $(".js-corporate-development").bind("click", $.proxy(this.handleClickCorporateDevelopment, this)), $(".js-corporate-culture").bind("click", $.proxy(this.handleClickCorporateCulture, this)), $(".js-responsibility-honor").bind("click", $.proxy(this.handleClickResponsibilityHonor, this)), $(".js-charity").bind("click", $.proxy(this.handleClickCharity, this)), $(".js-new-list").bind("click", $.proxy(this.handleClickNewList, this)), $(".js-one-day").bind("click", $.proxy(this.handleClickOneDay, this)), $(".js-story").bind("click", $.proxy(this.handleClickStory, this)), $(".js-innovation").bind("click", $.proxy(this.handleClickInnovation, this)), $(".js-industry-new").bind("click", $.proxy(this.handleClickIndustryNews, this)), $(".js-express-outlets").bind("click", $.proxy(this.handleClickExpressOutlets, this)), $(".js-cooperate").bind("click", $.proxy(this.handleClickBusiness, this)), $(".js-supplier").bind("click", $.proxy(this.handleClicksupplier, this)), $(".js-case").bind("click", $.proxy(this.handleBotton, this)), $(".js-zpa").bind("click", $.proxy(this.handleClickZpaHome, this)), $(".js-zop").bind("click", $.proxy(this.handleClickZopHome, this)), $(".js-supermarket").bind("click", $.proxy(this.handleClickSupermarket, this)), $(".js-business-cloudChamber").bind("click", $.proxy(this.handleClickCloudChamber, this)), $(".js-business-serviceProducts").bind("click", $.proxy(this.handleClickServiceProducts, this)), $(".js-business-serviceScope").bind("click", $.proxy(this.handleClickServiceScope, this)), $(".js-business-cooperativePartner").bind("click", $.proxy(this.handleClickCooperativePartner, this)), $(".js-business-electronicsSurfaceSingle").bind("click", $.proxy(this.handleClickElectronicsSurfaceSingle, this)), $(".js-investor-cn-index").bind("click", $.proxy(this.handleClickInvestorIndexCN, this)), $(".js-investor-cn-performance").bind("click", $.proxy(this.handleClickInvestorPerformanceCN, this)), $(".js-investor-cn-announcement-hk").bind("click", $.proxy(this.handleClickInvestorAnnouncementHkCN, this)), $(".js-investor-cn-announcement-am").bind("click", $.proxy(this.handleClickInvestorAnnouncementAmCN, this)), $(".js-investor-cn-directors").bind("click", $.proxy(this.handleClickInvestorDirectorsCN, this)), $(".js-investor-cn-committee").bind("click", $.proxy(this.handleClickInvestorCommitteeCN, this)), $(".js-investor-cn-govern").bind("click", $.proxy(this.handleClickInvestorGovernCN, this)), $(".js-investor-cn-management").bind("click", $.proxy(this.handleClickInvestorManagementCN, this)), $(".js-investor-cn-american").bind("click", $.proxy(this.handleClickInvestorAmericanCN, this)), $(".js-investor-cn-hongkong").bind("click", $.proxy(this.handleClickInvestorHongkongCN, this)), $(".js-investor-cn-log").bind("click", $.proxy(this.handleClickInvestorLogCN, this)), $(".js-investor-cn-contact").bind("click", $.proxy(this.handleClickInvestorContactCN, this)), $(".js-investor-hk-index").bind("click", $.proxy(this.handleClickInvestorIndexHK, this)), $(".js-investor-hk-performance").bind("click", $.proxy(this.handleClickInvestorPerformanceHK, this)), $(".js-investor-hk-announcement-hk").bind("click", $.proxy(this.handleClickInvestorAnnouncementHkHK, this)), $(".js-investor-hk-announcement-am").bind("click", $.proxy(this.handleClickInvestorAnnouncementAmHK, this)), $(".js-investor-hk-directors").bind("click", $.proxy(this.handleClickInvestorDirectorsHK, this)), $(".js-investor-hk-committee").bind("click", $.proxy(this.handleClickInvestorCommitteeHK, this)), $(".js-investor-hk-govern").bind("click", $.proxy(this.handleClickInvestorGovernHK, this)), $(".js-investor-hk-management").bind("click", $.proxy(this.handleClickInvestorManagementHK, this)), $(".js-investor-hk-american").bind("click", $.proxy(this.handleClickInvestorAmericanHK, this)), $(".js-investor-hk-hongkong").bind("click", $.proxy(this.handleClickInvestorHongkongHK, this)), $(".js-investor-hk-log").bind("click", $.proxy(this.handleClickInvestorLogHK, this)), $(".js-investor-hk-contact").bind("click", $.proxy(this.handleClickInvestorContactHK, this)), $(".js-report-financial").bind("click", $.proxy(this.handleClickFinancial, this)), $(".js-report-notice").bind("click", $.proxy(this.handleClickNotice, this)), $(".js-stock-price").bind("click", $.proxy(this.handleClickStockPrice, this)), $(".js-report-investor-relations").bind("click", $.proxy(this.handleClickReportInvestorRelations, this)), $(".js-report-social-responsibility").bind("click", $.proxy(this.handleClickSocialResponsibility, this)), $(".js-business-today").bind("click", $.proxy(this.handleClickToday, this)),$(".js-business-rick").bind("click", $.proxy(this.handleClickRick, this)),$(".js-business-asia").bind("click", $.proxy(this.handleClickAsia, this)),$(".js-business-cross").bind("click", $.proxy(this.handleClickCross, this)),$(".js-business-overseas").bind("click", $.proxy(this.handleClickOverseas, this)),$(".js-business-localization").bind("click", $.proxy(this.handleClickLocalization, this)),$(".js-business-warehousing").bind("click", $.proxy(this.handleClickWarehousing, this)),$(".js-business-twoHours").bind("click", $.proxy(this.handleClickTwoHours, this)),$(".js-business-stores").bind("click", $.proxy(this.handleClickStores, this)),$(".header-middle ul li").hover(function () {
                    var i = $(this).index();
                    $(".business-menu").removeClass("index-1"), $(".business-menu").removeClass("index-2"), $(".business-menu").removeClass("index-3"), $(".business-menu").removeClass("index-4"), $(".business-menu").removeClass("index-5"), $(this).find(".business-menu").addClass("index-" + i).show()
                }, function () {
                    $(this).find(".business-menu").hide()
                }),$(".siteTxt").click(function (i) {
                    SelCity(this, i)
                }),$(".stateTxt").click(function (i) {
                    SelState(this, i)
                }),$(".registere").click(function () {
                    location.href = "https://my.zto.com"
                }),$(".login").click(function () {
                    console.log(zto.config.centerceUrl);
                    window.location.host;
                    window.open(zto.config.centerceUrl, "_blank")
                })
            }, handleCliclNav: function (i) {
                var n = $(i.target).parent();
                0 < n.find(".nav-zto-menu").length && (console.log("thisp"), n.hasClass("show") ? n.removeClass("show") : n.addClass("show")), console.log($(".nav-zto").height(), $(".business-content").height()), $(".nav-zto").height() > $(".business-content").height() - 50 ? $(".business-content").css("height", $(".nav-zto").height() + "px") : $(".business-content").css("height", "auto");
                var e = $(".js-nav-fixed"), t = $(".content-main").offset().top, s = $(document).scrollTop();
                if (t < s) {
                    e.css("top", s - t + "px");
                    var o = e.offset().top - t, c = $(".content-main").height() - e.height();
                    c <= o ? e.css("top", c + "px") : e.css("top", s - t + "px")
                } else e.css({position: "absolute", top: "0px"})
            }, handleClickHomePage: function () {
                location.href = "../index.html"
            }, handleClickBackTop: function () {
                $("body, html").animate({scrollTop: "0"}, 200)
            }, handleClickAbout: function () {
                location.href = "../companyIntroduce/companyProfile.html"
            }, handleClickJob: function () {
                window.open("http://hr.zto.com")
            }, handleClickFinance: function () {
                window.open("https://www.ztofinance.com/")
            }, gohrclick: function () {
                window.open("http://www.hotjob.cn/wt/ZTO/web/index?brandCode=1")
            }, handleClickInvestorRelations: function () {
                window.open("http://zto.investorroom.com/")
            }, handleClickCooperation: function () {
                location.href = "../league/expressOutlets.html"
            }, handleClickExpressCheck: function () {
                location.href = "../express/expressCheck.html"
            }, handleClickExpressWebsite: function () {
                location.href = "../express/expressWebsite.html"
            }, handleClickExpressPrice: function () {
                location.href = "../express/expressPrice.html"
            }, handleClickExpressProhibited: function () {
                location.href = "../express/expressProhibited.html"
            }, handleClickExpressComplain: function () {
                location.href = "../express/expressComplain.html"
            }, handleClickExpressQuestions: function () {
                location.href = "https://my.zto.com/faq"
            }, handleClickExpressSuggest: function () {
                location.href = "https://my.zto.com/feedback"
            }, handleClickBusinessMorrow: function () {
                location.href = "../business/morrow.html"
            }, handleClickBusinessOnAlternateDays: function () {
                location.href = "../business/onAlternateDays.html"
            }, handleClickBusinessTriduum: function () {
                location.href = "../business/triduum.html"
            }, handleClickBusinessPrivacySurfaceSingle: function () {
                location.href = "../business/privacySurfaceSingle.html"
            }, handleClickBusinessFreshDelivery: function () {
                location.href = "../business/freshDelivery.html"
            }, handleClickBusinessRecheneinheit: function () {
                location.href = "../business/recheneinheit.html"
            }, handleClickBusinessEnterpriseOrder: function () {
                location.href = "../business/enterpriseOrder.html"
            }, handleClickBusinessCloudPrint: function () {
                location.href = "../business/cloudPrint.html"
            }, handleClickBusinessTheDoorToTake: function () {
                location.href = "../business/theDoorToTake.html"
            }, handleClickBusinessGenerationOfPickup: function () {
                location.href = "../business/generationOfPickup.html"
            }, handleClickBusinessPayOnDelivery: function () {
                location.href = "../business/payOnDelivery.html"
            }, handleClickBusinessFreightCollectExpressItem: function () {
                location.href = "../business/freightCollectExpressItem.html"
            }, handleClickBusinessSignTheBillToReturn: function () {
                location.href = "../business/signTheBillToReturn.html"
            }, handleClickBusinessSupportValue: function () {
                location.href = "../business/supportValue.html"
            }, handleClickBusinessAfterSalesService: function () {
                location.href = "../business/afterSalesService.html"
            }, handleClickBusinessHongkong: function () {
                location.href = "../business/hongkong.html"
            }, handleClickBusinessHongkongDhl: function () {
                location.href = "../business/hongkongDhl.html"
            }, handleClickBusinessTaiwan: function () {
                location.href = "../business/taiwan.html"
            }, handleClickMore: function () {
                window.open("https://www.ztoglobal.com/")
            }, handleClickBusinessEurope: function () {
                location.href = "../business/europe.html"
            }, handleClickBusinessCloudPrint: function () {
                location.href = "../business/cloudPrint.html"
            }, handleClickCasePersonage: function () {
                location.href = "../case/personage.html"
            }, handleClickCaseMerchant: function () {
                location.href = "../case/merchant.html"
            }, handleClickCaseWebsite: function () {
                location.href = "../case/website.html"
            }, handleClickCaseDetail_01: function () {
                location.href = "../case/caseDetail_01.html"
            }, handleClickLegalStatement: function () {
                location.href = "../legal&privacy/legal.html"
            }, handleClickPrivacyProtection: function () {
                location.href = "../legal&privacy/privacy.html"
            }, handleClickCookieProtection: function () {
                location.href = "../legal&privacy/cookie.html"
            }, toIndex: function () {
                location.href = "../index.html"
            }, handleClickContactUs: function () {
                location.href = "../companyIntroduce/contactUs.html"
            }, handleClickCompanyProfile: function () {
                location.href = "../companyIntroduce/companyProfile.html"
            }, handleClickEnterpriseVideo: function () {
                location.href = "../companyIntroduce/enterpriseVideo.html"
            }, handleClickCharity: function () {
                location.href = "../companyIntroduce/charityProgram.html"
            }, handleClickNewList: function () {
                location.href = "../companyIntroduce/newList.html"
            }, handleClickLeadershipConcern: function () {
                location.href = "../companyIntroduce/leadershipConcern.html"
            }, handleClickCorporateDevelopment: function () {
                location.href = "../companyIntroduce/corporateDevelopment.html"
            }, handleClickCorporateCulture: function () {
                location.href = "../companyIntroduce/corporateCulture.html"
            }, handleClickResponsibilityHonor: function () {
                location.href = "../companyIntroduce/responsibilityHonor.html"
            }, handleClickOneDay: function () {
                location.href = "../companyIntroduce/oneDay.html"
            }, handleClickStory: function () {
                location.href = "../companyIntroduce/story.html"
            }, handleClickInnovation: function () {
                location.href = "../companyIntroduce/innovation.html"
            }, handleClickIndustryNews: function () {
                location.href = "../companyIntroduce/industryNews.html"
            }, handleClickExpressOutlets: function () {
                location.href = "../league/expressOutlets.html"
            }, handleClickBusiness: function () {
                location.href = "../league/cooperate.html"
            }, handleClicksupplier: function () {
                location.href = "../league/supplier.html"
            }, handleBotton: function () {
                location.href = "../case/merchant.html"
            }, handleClickZpaHome: function () {
                window.open("https://zpa.zto.com")
            }, handleClickZopHome: function () {
                window.open("https://open.zto.com/")
            }, handleClickSupermarket: function () {
                window.open("https://wjsso.zto.com/oauth2/authorize?appid=zt-oNKHuI_ViWtkBdmbiIk1w&redirect_uri=http%3a%2f%2fwj.zto.com%2fAccount%2fAuthorize&response_type=code&scope=userinfo&state=3eb79d2915844534a23f4c3ff1c3cedb")
            }, handleClickCloudChamber: function () {
                location.href = "../business/cloudChamber.html"
            }, handleClickServiceProducts: function () {
                location.href = "../business/serviceProducts.html"
            }, handleClickServiceScope: function () {
                location.href = "../business/serviceScope.html"
            }, handleClickCooperativePartner: function () {
                location.href = "../business/cooperativePartner.html"
            }, handleClickElectronicsSurfaceSingle: function () {
                location.href = "../business/electronicsSurfaceSingle.html"
            }, expressShip: function () {
                console.log(zto.config);
                var i = zto.config.centerceUrl + "/create";
                window.open(i)
            }, handleClickInvestorNew: function () {
                location.href = "../investorRelations/newsInformation.html"
            }, handleClickInvestorReport: function () {
                location.href = "../investorRelations/periodicReport.html"
            }, handleClickInvestorCorporate: function () {
                location.href = "../investorRelations/corporateGovernance.html"
            }, handleClickInvestorEmail: function () {
                location.href = "../investorRelations/mailSubscriptions.html"
            }, handleClickInvestorVedio: function () {
                location.href = "../investorRelations/companyVedio.html"
            }, handleClickInvestorLiaison: function () {
                location.href = "../investorRelations/investorLiaison.html"
            }, handleClickFinancial: function () {
                location.href = "../investorRelations/periodicReport.html?checkedId=0"
            }, handleClickNotice: function () {
                location.href = "../investorRelations/periodicReport.html?checkedId=1"
            }, handleClickReportInvestorRelations: function () {
                location.href = "../investorRelations/periodicReport.html?checkedId=2"
            }, handleClickSocialResponsibility: function () {
                location.href = "../investorRelations/periodicReport.html?checkedId=3"
            }, handleClickStockPrice: function () {
                location.href = "../investorRelations/stockPrice.html"
            }, handleClickToday: function () {
                location.href = "../business/today.html"
            }, handleClickRick: function () {
                location.href = "../business/rick.html"
            }, handleClickAsia: function () {
                location.href = "../business/asia.html"
            }, handleClickCross: function () {
                location.href = "../business/cross.html"
            }, handleClickOverseas: function () {
                location.href = "../business/overseas.html"
            }, handleClickLocalization: function () {
                location.href = "../business/localization.html"
            }, handleClickWarehousing: function () {
                location.href = "../business/warehousing.html"
            }, handleClickTwoHours: function () {
                location.href = "../business/twoHours.html"
            }, handleClickStores: function () {
                location.href = "../business/stores.html"
            }, handleClickInvestorIndexCN: function () {
                location.href = "../investorCN/index.html"
            }, handleClickInvestorPerformanceCN: function () {
                location.href = "../investorCN/performance.html"
            }, handleClickInvestorAnnouncementHkCN: function () {
                location.href = "../investorCN/announcementhk.html"
            }, handleClickInvestorAnnouncementAmCN: function () {
                location.href = "../investorCN/announcementam.html"
            }, handleClickInvestorDirectorsCN: function () {
                location.href = "../investorCN/directors.html"
            }, handleClickInvestorCommitteeCN: function () {
                location.href = "../investorCN/committee.html"
            }, handleClickInvestorGovernCN: function () {
                location.href = "../investorCN/govern.html"
            }, handleClickInvestorManagementCN: function () {
                location.href = "../investorCN/management.html"
            }, handleClickInvestorAmericanCN: function () {
                location.href = "../investorCN/american.html"
            }, handleClickInvestorHongkongCN: function () {
                location.href = "../investorCN/hongkong.html"
            }, handleClickInvestorLogCN: function () {
                location.href = "../investorCN/log.html"
            }, handleClickInvestorContactCN: function () {
                location.href = "../investorCN/contact.html"
            }, handleClickInvestorIndexHK: function () {
                location.href = "../investorHK/index.html"
            }, handleClickInvestorPerformanceHK: function () {
                location.href = "../investorHK/performance.html"
            }, handleClickInvestorAnnouncementHkHK: function () {
                location.href = "../investorHK/announcementhk.html"
            }, handleClickInvestorAnnouncementAmHK: function () {
                location.href = "../investorHK/announcementam.html"
            }, handleClickInvestorDirectorsHK: function () {
                location.href = "../investorHK/directors.html"
            }, handleClickInvestorCommitteeHK: function () {
                location.href = "../investorHK/committee.html"
            }, handleClickInvestorGovernHK: function () {
                location.href = "../investorHK/govern.html"
            }, handleClickInvestorManagementHK: function () {
                location.href = "../investorHK/management.html"
            }, handleClickInvestorAmericanHK: function () {
                location.href = "../investorHK/american.html"
            }, handleClickInvestorHongkongHK: function () {
                location.href = "../investorHK/hongkong.html"
            }, handleClickInvestorLogHK: function () {
                location.href = "../investorHK/log.html"
            }, handleClickInvestorContactHK: function () {
                location.href = "../investorHK/contact.html"
            }
        }), (new e).init()
    }, 22: function (i, n, e) {
        function s() {
            $(".prohibited-room").each(function () {
                $(this).find(".highlight").each(function () {
                    $(this).replaceWith($(this).html())
                })
            });
            var e = $("#key").val(), t = new RegExp(e, "g");
            "" != e.trim() && ($(".prohibited-room").each(function (i) {
                var n = $(this).html().replace(t, '<font class="highlight">' + e + '<a name="y_' + i + '"></a></font>');
                $(this).html(n)
            }), $(".highlight").size() <= 0 && ztoAlert("提示", "没有搜索到相关记录！", "确定", "reback"), window.location.href = "#y_0")
        }

        e(3), $(function () {
            var n, e, t;
            n = "prohibited-box", e = "checked", t = "show", $("." + "prohibited-menu-item").click(function () {
                var i = $(this).index();
                $(this).addClass(e).siblings().removeClass(e), $("." + n + ":eq(" + i + ")").addClass(t).siblings().removeClass(t)
            }), $("#search").click(function () {
                s()
            }), $("#key").keydown(function () {
                13 == event.keyCode && s()
            })
        })
    }
});