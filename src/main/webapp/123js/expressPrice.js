!function (n) {
    var t = {};

    function s(e) {
        if (t[e]) return t[e].exports;
        var i = t[e] = {exports: {}, id: e, loaded: !1};
        return n[e].call(i.exports, i, i.exports, s), i.loaded = !0, i.exports
    }

    s.m = n, s.c = t, s.p = "", s(0)
}({
    0: function (e, i, n) {
        e.exports = n(21)
    }, 3: function (e, i) {
        function n() {
        }

        $.extend(n.prototype, {
            init: function () {
                this.fixed(), this.footerLoad(), this.handleClickSucc(), this.login(), this.HKswitch()
            }, HKswitch: function () {
                HrPost("getApolloConfig", {keys: ["isShowInvestorsTC"]}, function (e) {
                    e && ("false" === e.result.isShowInvestorsTC ? ($(".oldC").css("display", "block"), $(".newC").css("display", "none")) : ($(".oldC").css("display", "none"), $(".newC").css("display", "block")))
                })
            }, footerLoad: function () {
                $("#js-footer-wrap").on("mouseenter", ".friendLink a", function () {
                    $(this).next().css({display: "block"}), $(this).find("span").addClass("actived")
                }).on("mouseout", ".friendLink a", function () {
                    $(this).next().css({display: "none"}), $(this).find("span").removeClass("actived")
                })
            }, login: function () {
                console.log(window.location.href, "111111111111"), 0 <= navigator.userAgent.indexOf("Mobile") && (window.location.href = "https://m.zto.com/"), zto.auth.getToken() && HrPost("auth_account_getUserLoginProvider", null, function (e) {
                    var i, n, t;
                    e.status && (e.result.mobile && (i = "userMobile", n = e.result.mobile, (t = new Date).setTime(t.getTime() + 198e5), document.cookie = i + "=" + escape(n) + ";expires=" + t.toGMTString() + "; path=/"), $(".login,.registere").hide(), $(".header-right").append('<div class="user">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="../imgs/login.png" alt="用户"><a href="' + zto.config.centerceUrl + '" data-phone="' + e.result.mobile + '">' + e.result.mobile + "</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>"), $(".user").show())
                })
            }, fixed: function () {
                if (0 < $(".js-nav-fixed").size()) {
                    var t = $(".js-nav-fixed"), s = $(".content-main").offset().top;
                    $(document).on("scroll", function () {
                        var e = $(document).scrollTop();
                        if (s < e) {
                            t.css("top", e - s + "px");
                            var i = t.offset().top - s, n = $(".content-main").height() - t.height();
                            n <= i ? t.css("top", n + "px") : t.css("top", e - s + "px")
                        } else t.css({position: "absolute", top: "0px"})
                    })
                }
            }, handleClickSucc: function () {
                $(".nav-item").bind("click", $.proxy(this.handleCliclNav, this)), $(document).on("click", ".js-back-top", $.proxy(this.handleClickBackTop, this)), $(".js-job").bind("click", $.proxy(this.handleClickJob, this)), $(".js-finance").bind("click", $.proxy(this.handleClickFinance, this)), $(".js-goHr").bind("click", $.proxy(this.handleClickJob, this)), $(".js-investor-relations").bind("click", $.proxy(this.handleClickInvestorRelations, this)), $(".js-join").bind("click", $.proxy(this.handleClickCooperation, this)), $(".js-about").bind("click", $.proxy(this.handleClickAbout, this)), $(".js-home-page").bind("click", $.proxy(this.handleClickHomePage, this)), $(".js-express-check").bind("click", $.proxy(this.handleClickExpressCheck, this)), $(".js-express-website").bind("click", $.proxy(this.handleClickExpressWebsite, this)), $(".js-express-price").bind("click", $.proxy(this.handleClickExpressPrice, this)), $(".js-express-prohibited").bind("click", $.proxy(this.handleClickExpressProhibited, this)), $(".js-express-questions").bind("click", $.proxy(this.handleClickExpressQuestions, this)), $(".js-express-suggest").bind("click", $.proxy(this.handleClickExpressSuggest, this)), $(".js-business,.js-business-morrow").bind("click", $.proxy(this.handleClickBusinessMorrow, this)), $(".js-business-onAlternateDays").bind("click", $.proxy(this.handleClickBusinessOnAlternateDays, this)), $(".js-business-triduum").bind("click", $.proxy(this.handleClickBusinessTriduum, this)), $(".js-business-privacySurfaceSingle").bind("click", $.proxy(this.handleClickBusinessPrivacySurfaceSingle, this)), $(".js-business-freshDelivery").bind("click", $.proxy(this.handleClickBusinessFreshDelivery, this)), $(".js-business-recheneinheit").bind("click", $.proxy(this.handleClickBusinessRecheneinheit, this)), $(".js-business-enterpriseOrder").bind("click", $.proxy(this.handleClickBusinessEnterpriseOrder, this)), $(".js-business-cloudPrint").bind("click", $.proxy(this.handleClickBusinessCloudPrint, this)), $(".js-business-theDoorToTake").bind("click", $.proxy(this.handleClickBusinessTheDoorToTake, this)), $(".js-business-generationOfPickup").bind("click", $.proxy(this.handleClickBusinessGenerationOfPickup, this)), $(".js-business-payOnDelivery").bind("click", $.proxy(this.handleClickBusinessPayOnDelivery, this)), $(".js-business-freightCollectExpressItem").bind("click", $.proxy(this.handleClickBusinessFreightCollectExpressItem, this)), $(".js-business-signTheBillToReturn").bind("click", $.proxy(this.handleClickBusinessSignTheBillToReturn, this)), $(".js-business-supportValue").bind("click", $.proxy(this.handleClickBusinessSupportValue, this)), $(".js-business-afterSalesService").bind("click", $.proxy(this.handleClickBusinessAfterSalesService, this)), $(".js-business-hongkong").bind("click", $.proxy(this.handleClickBusinessHongkong, this)), $(".js-business-hongkongDhl").bind("click", $.proxy(this.handleClickBusinessHongkongDhl, this)), $(".js-business-taiwan").bind("click", $.proxy(this.handleClickBusinessTaiwan, this)), $(".js-business-more").bind("click", $.proxy(this.handleClickMore, this)), $(".js-business-europe").bind("click", $.proxy(this.handleClickBusinessEurope, this)), $(".js-business-switzerlandTwo").bind("click", $.proxy(this.handleClickBusinessSwitzerlandTwo, this)), $(".js-business-cloudPrint").bind("click", $.proxy(this.handleClickBusinessCloudPrint, this)), $(".js-case-personage").bind("click", $.proxy(this.handleClickCasePersonage, this)), $(".js-case-merchant").bind("click", $.proxy(this.handleClickCaseMerchant, this)), $(".js-case-website").bind("click", $.proxy(this.handleClickCaseWebsite, this)), $(".js-case-detail_01").bind("click", $.proxy(this.handleClickCaseDetail_01, this)), $(".js-legal-statement").bind("click", $.proxy(this.handleClickLegalStatement, this)), $(".js-privacy-protection").bind("click", $.proxy(this.handleClickPrivacyProtection, this)), $(".js-cookie-protection").bind("click", $.proxy(this.handleClickCookieProtection, this)), $(".js-express-ship").bind("click", $.proxy(this.expressShip, this)), $(".logo-box").bind("click", $.proxy(this.toIndex, this)), $(".js-contact-us").bind("click", $.proxy(this.handleClickContactUs, this)), $(".js-company-profile").bind("click", $.proxy(this.handleClickCompanyProfile, this)), $(".js-enterprise-video").bind("click", $.proxy(this.handleClickEnterpriseVideo, this)), $(".js-leadership-concern").bind("click", $.proxy(this.handleClickLeadershipConcern, this)), $(".js-corporate-development").bind("click", $.proxy(this.handleClickCorporateDevelopment, this)), $(".js-corporate-culture").bind("click", $.proxy(this.handleClickCorporateCulture, this)), $(".js-responsibility-honor").bind("click", $.proxy(this.handleClickResponsibilityHonor, this)), $(".js-charity").bind("click", $.proxy(this.handleClickCharity, this)), $(".js-new-list").bind("click", $.proxy(this.handleClickNewList, this)), $(".js-one-day").bind("click", $.proxy(this.handleClickOneDay, this)), $(".js-story").bind("click", $.proxy(this.handleClickStory, this)), $(".js-innovation").bind("click", $.proxy(this.handleClickInnovation, this)), $(".js-industry-new").bind("click", $.proxy(this.handleClickIndustryNews, this)), $(".js-express-outlets").bind("click", $.proxy(this.handleClickExpressOutlets, this)), $(".js-cooperate").bind("click", $.proxy(this.handleClickBusiness, this)), $(".js-supplier").bind("click", $.proxy(this.handleClicksupplier, this)), $(".js-case").bind("click", $.proxy(this.handleBotton, this)), $(".js-zpa").bind("click", $.proxy(this.handleClickZpaHome, this)), $(".js-zop").bind("click", $.proxy(this.handleClickZopHome, this)), $(".js-supermarket").bind("click", $.proxy(this.handleClickSupermarket, this)), $(".js-business-cloudChamber").bind("click", $.proxy(this.handleClickCloudChamber, this)), $(".js-business-serviceProducts").bind("click", $.proxy(this.handleClickServiceProducts, this)), $(".js-business-serviceScope").bind("click", $.proxy(this.handleClickServiceScope, this)), $(".js-business-cooperativePartner").bind("click", $.proxy(this.handleClickCooperativePartner, this)), $(".js-business-electronicsSurfaceSingle").bind("click", $.proxy(this.handleClickElectronicsSurfaceSingle, this)), $(".js-investor-cn-index").bind("click", $.proxy(this.handleClickInvestorIndexCN, this)), $(".js-investor-cn-performance").bind("click", $.proxy(this.handleClickInvestorPerformanceCN, this)), $(".js-investor-cn-announcement-hk").bind("click", $.proxy(this.handleClickInvestorAnnouncementHkCN, this)), $(".js-investor-cn-announcement-am").bind("click", $.proxy(this.handleClickInvestorAnnouncementAmCN, this)), $(".js-investor-cn-directors").bind("click", $.proxy(this.handleClickInvestorDirectorsCN, this)), $(".js-investor-cn-committee").bind("click", $.proxy(this.handleClickInvestorCommitteeCN, this)), $(".js-investor-cn-govern").bind("click", $.proxy(this.handleClickInvestorGovernCN, this)), $(".js-investor-cn-management").bind("click", $.proxy(this.handleClickInvestorManagementCN, this)), $(".js-investor-cn-american").bind("click", $.proxy(this.handleClickInvestorAmericanCN, this)), $(".js-investor-cn-hongkong").bind("click", $.proxy(this.handleClickInvestorHongkongCN, this)), $(".js-investor-cn-log").bind("click", $.proxy(this.handleClickInvestorLogCN, this)), $(".js-investor-cn-contact").bind("click", $.proxy(this.handleClickInvestorContactCN, this)), $(".js-investor-hk-index").bind("click", $.proxy(this.handleClickInvestorIndexHK, this)), $(".js-investor-hk-performance").bind("click", $.proxy(this.handleClickInvestorPerformanceHK, this)), $(".js-investor-hk-announcement-hk").bind("click", $.proxy(this.handleClickInvestorAnnouncementHkHK, this)), $(".js-investor-hk-announcement-am").bind("click", $.proxy(this.handleClickInvestorAnnouncementAmHK, this)), $(".js-investor-hk-directors").bind("click", $.proxy(this.handleClickInvestorDirectorsHK, this)), $(".js-investor-hk-committee").bind("click", $.proxy(this.handleClickInvestorCommitteeHK, this)), $(".js-investor-hk-govern").bind("click", $.proxy(this.handleClickInvestorGovernHK, this)), $(".js-investor-hk-management").bind("click", $.proxy(this.handleClickInvestorManagementHK, this)), $(".js-investor-hk-american").bind("click", $.proxy(this.handleClickInvestorAmericanHK, this)), $(".js-investor-hk-hongkong").bind("click", $.proxy(this.handleClickInvestorHongkongHK, this)), $(".js-investor-hk-log").bind("click", $.proxy(this.handleClickInvestorLogHK, this)), $(".js-investor-hk-contact").bind("click", $.proxy(this.handleClickInvestorContactHK, this)), $(".js-report-financial").bind("click", $.proxy(this.handleClickFinancial, this)), $(".js-report-notice").bind("click", $.proxy(this.handleClickNotice, this)), $(".js-stock-price").bind("click", $.proxy(this.handleClickStockPrice, this)), $(".js-report-investor-relations").bind("click", $.proxy(this.handleClickReportInvestorRelations, this)), $(".js-report-social-responsibility").bind("click", $.proxy(this.handleClickSocialResponsibility, this)), $(".js-business-today").bind("click", $.proxy(this.handleClickToday, this)),$(".js-business-rick").bind("click", $.proxy(this.handleClickRick, this)),$(".js-business-asia").bind("click", $.proxy(this.handleClickAsia, this)),$(".js-business-cross").bind("click", $.proxy(this.handleClickCross, this)),$(".js-business-overseas").bind("click", $.proxy(this.handleClickOverseas, this)),$(".js-business-localization").bind("click", $.proxy(this.handleClickLocalization, this)),$(".js-business-warehousing").bind("click", $.proxy(this.handleClickWarehousing, this)),$(".js-business-twoHours").bind("click", $.proxy(this.handleClickTwoHours, this)),$(".js-business-stores").bind("click", $.proxy(this.handleClickStores, this)),$(".header-middle ul li").hover(function () {
                    var e = $(this).index();
                    $(".business-menu").removeClass("index-1"), $(".business-menu").removeClass("index-2"), $(".business-menu").removeClass("index-3"), $(".business-menu").removeClass("index-4"), $(".business-menu").removeClass("index-5"), $(this).find(".business-menu").addClass("index-" + e).show()
                }, function () {
                    $(this).find(".business-menu").hide()
                }),$(".siteTxt").click(function (e) {
                    SelCity(this, e)
                }),$(".stateTxt").click(function (e) {
                    SelState(this, e)
                }),$(".registere").click(function () {
                    location.href = "https://my.zto.com"
                }),$(".login").click(function () {
                    console.log(zto.config.centerceUrl);
                    window.location.host;
                    window.open(zto.config.centerceUrl, "_blank")
                })
            }, handleCliclNav: function (e) {
                var i = $(e.target).parent();
                0 < i.find(".nav-zto-menu").length && (console.log("thisp"), i.hasClass("show") ? i.removeClass("show") : i.addClass("show")), console.log($(".nav-zto").height(), $(".business-content").height()), $(".nav-zto").height() > $(".business-content").height() - 50 ? $(".business-content").css("height", $(".nav-zto").height() + "px") : $(".business-content").css("height", "auto");
                var n = $(".js-nav-fixed"), t = $(".content-main").offset().top, s = $(document).scrollTop();
                if (t < s) {
                    n.css("top", s - t + "px");
                    var o = n.offset().top - t, l = $(".content-main").height() - n.height();
                    l <= o ? n.css("top", l + "px") : n.css("top", s - t + "px")
                } else n.css({position: "absolute", top: "0px"})
            },handleClickInvestorContactHK: function () {
                location.href = "../investorHK/contact.html"
            }
        }), (new n).init()
    }, 21: function (e, i, n) {
        n(3);
        var t, s = {isShowSpring: null, springUrl: "", springMsg: {springUrl: ""}};
        $(function () {
            HrPost("getApolloConfig", {}, function (e) {
                e && (console.log(e, ";123"), e.result.isShowSpring && (s.isShowSpring = e.result.isShowSpring, "yes" === t && "true" === s.isShowSpring && ($(".newYearTip").show(), $(".newYearTip-text").html(e.result.springMsg[7].msg))), e.result.springUrl && (s.springUrl = e.result.springUrl), e.result.springMsg && (s.springMsg = JSON.parse(e.result.springMsg)))
            }), s.isShowSpring && "true" !== s.isShowSpring || HrPost("checkSpringFestivalBusinessDate", {}, function (e) {
                e && "yes" == (t = e.result ? "yes" : "no") && "true" === s.isShowSpring && ($(".newYearTip").show(), $(".newYearTip-text").html(s.springMsg[7].msg))
            }), $(".newYearTip") && $(".newYearTip").click(function () {
                window.open(s.springUrl)
            });
            var e = (new Date).getTime();
            laydate.render({
                elem: "#time",
                type: "datetime",
                theme: "#00a0e9",
                min: "2020-7-1 9:30:00",
                value: new Date(e),
                eventElem: ".time-input-icon",
                trigger: "click"
            }), $("#priceForm").validate({
                debug: !0, submitHandler: function () {
                    if (2 === $("#start").val().split("-").length && 2 === $("#end").val().split("-").length) {
                        var n, e = !1, i = !1;
                        if (console.log("" != $("#weight").val()), "" != $("#weight").val() && (e = !0), "" != $("#long").val() && "" != $("#width").val() && "" != $("#height").val() && (i = !0), 1 == e || 1 == i) {
                            var t, s, o, l, c, r, h, a, d, u, p, k;
                            $(".volume-box label").remove(), $(".price-txtbox:eq(2)").find("label").remove();
                            var m = $("#start").val().split("-"), C = $("#end").val().split("-");
                            "昆明市" === m[1] ? ($(".p_text span").html("昆明市长水国际机场内寄件服务不参考官网指导报价，具体以网点门店公示报价为准"), $(".p_text span").addClass("textColor")) : ($(".p_text span").html("此报价为指导价仅供参考，详情请咨询中通当地营业网点"), $(".p_text span").removeClass("textColor")), t = m[0], o = m[1], c = C[0], h = C[1], u = $("#time").val(), p = Math.ceil($("#weight").val());
                            var f = getAddressId(t, o).split(",");
                            s = f[0], l = f[1];
                            var v = getAddressId(c, h).split(",");
                            if (r = v[0], a = v[1], 1 == i) {
                                var b = $("#long").val(), x = $("#width").val(), g = $("#height").val();
                                d = p < (k = Math.ceil(b * x * g / 6e3)) ? k : p
                            } else d = p;
                            switch ($(".price-btn").attr("data-type")) {
                                case"0":
                                    HrPost("getPriceTimeWithDate", {
                                        sendProvince: t,
                                        sendProvinceId: s,
                                        sendCity: o,
                                        sendCityId: l,
                                        receiveProvince: c,
                                        receiveProvinceId: r,
                                        receiveCityId: a,
                                        receiveCity: h,
                                        weight: d,
                                        sendDate: u
                                    }, function (e) {
                                        if (e.status) {
                                            if (null != e.result) {
                                                var i = e.result;
                                                $("#resultWeight").html(i.weight), $("#product-time").html(i.time ? i.time.split(" ")[0] : "暂无数据"), $("#resultPrice").html(i.price && i.price.replace("元", "")), $(".item-number em").show(), $(".price-result").show(), $(".price-hint").show()
                                            }
                                        } else ztoAlert("提示", e.message, "确定", "close"), $("#resultWeight").html(0), $("#resultTime").html(0), $("#resultPrice").html(0)
                                    });
                                    break;
                                case"1":
                                    break;
                                case"2":
                                    n = d, HrPost("PriceAndHour_GetInternational", {
                                        sendProvince: t,
                                        destinationCountry: c,
                                        weight: n
                                    }, function (e) {
                                        if (e) if (null != e.result) {
                                            var i = e.result;
                                            $("#resultWeight").html(n), $("#resultTime").html(i.displayHour && i.displayHour.replace("天", "")), $("#resultPrice").html(i.priceDisplay && i.priceDisplay.replace("元", "")), $(".item-number em").show()
                                        } else ztoAlert("提示", "没有查询到报价,当前产品线路规划中,敬请期待！", "确定", "close")
                                    })
                            }
                            $(".price-result").addClass("show")
                        } else {
                            var y = "", w = "", j = "";
                            0 == e && 0 == i && ("" == $("#long").val() && "" == $("#width").val() && "" == $("#height").val() || ("" == $("#long").val() && (y = "长"), "" == $("#width").val() && (w = "宽"), "" == $("#height").val() && (j = "高"), $(".price-txtbox:eq(2) label").remove(), $(".volume-box label").remove(), $(".volume-box").append("<label>请填写" + y + w + j + "</label>")), "" == $("#long").val() && "" == $("#width").val() && "" == $("#height").val() && ($(".price-txtbox:eq(2)").find("label").remove(), $(".price-txtbox:eq(2)").append('<label style="display:block; width:100%;">请填写重量</label>')))
                        }
                    } else ztoAlert("提示", "始发地或目的地省市数据填写不完整", "确定", "")
                }
            }), $("#start").rules("add", {
                required: !0,
                messages: {required: "请选择您的始发地"}
            }), $("#end").rules("add", {
                required: !0,
                messages: {required: "请选择您的目标地"}
            }), $("#time").rules("add", {
                required: !0,
                messages: {required: "请选择寄件日期"}
            }), $(".price-volume p em").click(function () {
                $(".volume-box").hasClass("show") ? $(".volume-box").removeClass("show") : $(".volume-box").addClass("show")
            }), $(".weight").keyup(function () {
                var e = parseInt($(this).val());
                50 < e && (ztoAlert("提示", "最大重量为50KG,最小重量为1KG", "确定", "close"), $(this).blur(), $(this).val("50")), e < 1 && $(this).val("1")
            }), $(".volume-txt").keyup(function () {
                var e = parseInt($(this).val());
                100 < e && (ztoAlert("提示", "长宽高最大不能超过100cm", "确定", "close"), $(this).blur(), $(this).val("100")), 0 == e && (ztoAlert("提示", "长宽高最小不能小于1cm", "确定", "close"), $(this).blur(), $(this).val("1"));
                var i = parseInt($("#long").val()), n = parseInt($("#width").val()), t = parseInt($("#height").val());
                0 < i && 0 < n && 0 < t && (volumeWeight = Math.ceil(i * n * t / 6e3), 50 < volumeWeight && (ztoAlert("提示", "轻抛货物重量不超过50KG,计算公式:(长*宽*高)÷6000", "确定", "close"), $(this).blur(), $(this).val("")))
            }), $(".num-btn").click(function () {
                var e;
                e = "" == $(".weight").val() ? 0 : parseInt($(".weight").val()), $(this).hasClass("add") ? 50 < ++e && (e = 50) : --e <= 0 && (e = 1), $(".weight").val(e)
            })
        })
    }
});