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
        e.exports = n(25)
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
                console.log(window.location.href, "111111111111"), 0 <= navigator.userAgent.indexOf("Mobile") && (window.location.href = ".."), zto.auth.getToken() && HrPost("auth_account_getUserLoginProvider", null, function (e) {
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
            }, handleClickHomePage: function () {
                location.href = "index"
            }, handleClickBackTop: function () {
                $("body, html").animate({scrollTop: "0"}, 200)
            }, handleClickInvestorContactHK: function () {
                location.href = "../investorHK/contact.html"
            }
        }), (new n).init()
    }, 25: function (e, i, n) {
        n(3), $(function () {
            var x = null, g = [];
            !function () {
                for (var p = zto.config.ztoAllRegionList, e = 0, i = p.length, n = []; e < i; e++) for (var t = 0, s = p[e].children ? p[e].children.length : 0; t < s; t++) {
                    var o = {}, l = p[e].children[t].text;
                    if (o.name = l, n.push(o), 0 <= l.indexOf("上海") || 0 <= l.indexOf("重庆") || 0 <= l.indexOf("北京") || 0 <= l.indexOf("天津")) for (var c = 0, a = p[e].children[t].children.length; c < a; c++) {
                        var r = {};
                        r.name = p[e].children[t].children[c].text, n.push(r)
                    }
                }
                for (var m = ["shanghai", "hebei", "shanxi", "neimenggu", "liaoning", "jilin", "heilongjiang", "jiangsu", "zhejiang", "anhui", "fujian", "jiangxi", "shandong", "henan", "hubei", "hunan", "guangdong", "guangxi", "hainan", "sichuan", "guizhou", "yunnan", "xizang", "shanxi1", "gansu", "qinghai", "ningxia", "xinjiang", "beijing", "tianjin", "chongqing", "taiwan", "aomen", "xianggang"], k = ["上海", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "北京", "天津", "重庆", "台湾", "澳门", "香港"], h = 0, d = k.length, u = []; h < d; h++) {
                    (o = {}).name = k[h], u.push(o)
                }
                var f = n, C = document.getElementById("mapSelect"), b = echarts.init(C);

                function v(e, i) {
                    console.log(e);
                    var n = {
                        tooltip: {trigger: "item", formatter: "{b}"},
                        layoutCenter: ["50%", "50%"],
                        layoutSize: 750,
                        series: [{
                            type: "map",
                            mapType: e,
                            label: {
                                normal: {show: !0, textStyle: {color: "#555"}},
                                emphasis: {show: !0, textStyle: {color: "#0090ff"}}
                            },
                            itemStyle: {
                                normal: {borderColor: "#fff", areaColor: "#ccc"},
                                emphasis: {areaColor: "#73c2ff", borderWidth: 0}
                            },
                            data: i
                        }]
                    };
                    "object" == typeof n && b.setOption(n, !0)
                }

                function y(e, i) {
                    var n = {
                        tooltip: {trigger: "item", formatter: "{b}"},
                        layoutCenter: ["50%", "50%"],
                        layoutSize: 600,
                        series: [{
                            type: "map",
                            mapType: e,
                            label: {
                                normal: {show: !0, textStyle: {color: "#555"}},
                                emphasis: {show: !0, textStyle: {color: "#0090ff"}}
                            },
                            itemStyle: {
                                normal: {borderColor: "#fff", areaColor: "#ccc"},
                                emphasis: {areaColor: "#73c2ff", borderWidth: 0}
                            },
                            data: i
                        }]
                    };
                    "object" == typeof n && b.setOption(n, !0)
                }

                v("china", u), b.on("click", function (e) {
                    if (e.data) {
                        for (var i = 0, n = k.length; i < n; i++) if (0 <= e.data.name.indexOf(k[i])) {
                            var t = m[i];
                            break
                        }
                        if (x) {
                            g = [], [];
                            for (var s = 0, o = p.length; s < o; s++) if (0 <= p[s].text.indexOf(x)) {
                                g.push(p[s].text), g.push(p[s].value);
                                for (var l = 0, c = p[s].children.length; l < c; l++) if (0 <= p[s].children[l].text.indexOf(e.data.name)) {
                                    g.push(p[s].children[l].text), g.push(p[s].children[l].value);
                                    break
                                }
                                if (0 <= x.indexOf("上海") || 0 <= x.indexOf("北京") || 0 <= x.indexOf("重庆") || 0 <= x.indexOf("天津")) for (var a = 0, r = p[s].children[0].children.length; a < r; a++) if (0 <= p[s].children[0].children[a].text.indexOf(e.data.name)) {
                                    g.push(p[s].children[0].text), g.push(p[s].children[0].value), g.push(p[s].children[0].children[a].text), g.push(p[s].children[0].children[a].value);
                                    break
                                }
                            }
                            w(g[0] + "-" + g[2] + (g[4] ? "-" + g[4] : "")), $("#backChina").html("返回" + x)
                        } else x = e.data.name, $("#backChina").show();
                        var h, d, u;
                        if (t) h = "./../js/mapSelect/" + t + ".js", d = function () {
                            y(e.data.name, f)
                        }, (u = document.createElement("script")).type = "text/javascript", u.readyState ? u.onreadystatechange = function () {
                            "loaded" !== u.readyState && "complete" !== u.readyState || (u.onreadystatechange = null, d())
                        } : u.onload = function () {
                            d()
                        }, u.src = h, document.body.appendChild(u)
                    }
                }), $("#backChina").click(function () {
                    $("#mapSelect").show(), setTimeout(function () {
                        0 <= $("#backChina").html().indexOf("全国") ? (v("china", u), x = null, $("#backChina").hide()) : (y($("#backChina").html().substring(2), f), $("#backChina").html("返回全国")), []
                    }, 100)
                })
            }(), setTimeout(function () {
                $("html,body").animate({scrollTop: 425}, 500)
            }, 500), $(".tab_menu em").click(function () {
                $(this).addClass("cur").siblings().removeClass("cur"), $(".tab_content div").eq($(this).index()).show().siblings().hide()
            }), $(".website_detail_box .close").click(function () {
                $(".website_detail_popup").hide()
            }), $(document).on("click", ".area-title", function () {
                $(this).hasClass("cur") ? ($(this).removeClass("cur"), $(this).next().removeClass("cur")) : ($(this).addClass("cur"), $(this).next().addClass("cur"))
            }), menuClick("message-menu-item", "message-box", "checked", "show");
            var e = getCookie("sites");
            if (null == e) $(".query-history").append("<i>无</i>"); else for (var i = e.split(","), n = i.length - 1; -1 < n; n--) {
                var t = i[n].split("|");
                $(".query-history").append('<em><span class="keySite" data-districtId="' + t[2] + '">' + t[0] + '</span><span class="keyAddress">' + t[1] + "</span></em>")
            }
            var p = new BMap.Map("container");
            p.centerAndZoom("上海", 10), p.enableContinuousZoom(), p.enableScrollWheelZoom(!0), p.addControl(new BMap.NavigationControl);
            var s = new BMap.LocalSearch(p);

            function w(e, i, n, t) {
                s.setSearchCompleteCallback(function (e) {
                    if (p.clearOverlays(), t && 0 < t.length) var i = {
                        provinceName: t[0] ? t[0] : "",
                        provinceId: t[1] ? t[1] : "",
                        cityName: t[2] ? t[2] : "",
                        cityId: t[3] ? t[3] : "",
                        districtName: t[4] ? t[4] : "",
                        districtId: t[4] ? t[5] : "",
                        keyword: n
                    }; else i = {
                        provinceName: g[0] ? g[0] : "",
                        provinceId: g[1] ? g[1].toString() : "",
                        cityName: g[2] ? g[2] : "",
                        cityId: g[3] ? g[3].toString() : "",
                        districtName: g[4] ? g[4] : "",
                        districtId: g[5] ? g[5].toString() : "",
                        keyword: n
                    };
                    WebsitePost("Site_SearchGroupList", JSON.stringify(i), function (e) {
                        var i = e.result ? e.result.items : [], n = 0;
                        if ($(".nearby-list").html(""), $("#mapSelect").hide(), g = [], i.length) {
                            $(".nearby-text").show().find("i").html(e.totalDisNum), $(".site-sum").show().html("共找到" + e.totalDisNum + "个快递网点");
                            for (var t = 0, s = i.length, o = "", l = ""; t < s; t++) {
                                t ? (o += '<h3 class="area-title">' + (i[t].districtName ? i[t].districtName + "-<em>" : "") + i[t].disNum + '个网点</em></h3><div class="area-list">', l += '<div class="area-title clearboth"><p>' + i[t].districtName + "-<em>" + i[t].disNum + "个网点</em></p><i></i></div><table><tr><th>网点名称</th><th>详细地址</th><th>网点经理</th><th>网点电话</th></tr>") : (o += '<h3 class="area-title cur">' + (i[t].districtName ? i[t].districtName + "-<em>" : "") + i[t].disNum + '个网点</em></h3><div class="area-list cur">', l += '<div class="area-title clearboth cur"><p>' + i[t].districtName + "-<em>" + i[t].disNum + '个网点</em></p><i></i></div><table class="cur"><tr><th>网点名称</th><th>详细地址</th><th>网点经理</th><th>网点电话</th></tr>');
                                for (var c = 0, a = i[t].list.length; c < a; c++) {
                                    n++;
                                    var r = i[t].list[c].businessPhone.split("、") ? i[t].list[c].businessPhone.split("、")[0] : i[t].list[c].businessPhone,
                                        h = i[t].list[c].cloudPhone ? i[t].list[c].cloudPhone + "<br>" + r : r;
                                    o += '<div class="nearby-item" data-code="' + i[t].list[c].code + '"><i>' + n + "</i><strong>" + i[t].list[c].fullName + "</strong><p>" + h + '</p><p class="nearby-item-address">' + i[t].list[c].address + "</p></div>", l += '<tr data-code="' + i[t].list[c].code + '"><td>' + i[t].list[c].companyName + "</td><td>" + i[t].list[c].address + "</td><td>" + i[t].list[c].master + "</td><td>" + i[t].list[c].outerPhone + "</td></tr>";
                                    var d = new BMap.Point(i[t].list[c].longitude, i[t].list[c].latitude);
                                    u(d, i[t].list[c].fullName, i[t].list[c].master, i[t].list[c].masterMobile, i[t].list[c].businessPhone, i[t].list[c].address, n, i[t].list[c].code), 0 === t && p.panTo(d)
                                }
                                o += "</div>", l += "</table>"
                            }
                            $(".nearby-list").html(o), $(".site-list-box").html(l)
                        } else ztoAlert("提示", "当前范围内无匹配网点，建议您修改查询条件试试看", "确定", "close"), $(".nearby-text i").html(0), $(".site-sum").html("共找到0个快递网点"), $(".site-list-box").html("")
                    })
                }), s.search(e, 1e3)
            }

            function u(e, i, n, t, s, o, l, c) {
                var a = new BMap.Icon("../imgs/express/website_map.png", new BMap.Size(20, 25)),
                    r = new BMap.Marker(e, {icon: a}), h = new BMap.Label(l);
                h.setStyle({
                    width: "20px",
                    height: "25px",
                    lineHeight: "20px",
                    fontSize: "11px",
                    color: "#fff",
                    backgroundImage: "none",
                    border: "none",
                    backgroundColor: "transparent",
                    textAlign: "center"
                }), r.setLabel(h), p.addOverlay(r);
                var d = '<div class="site-jump">\t                            <strong>' + i + '-中通网点</strong>\t                            <table class="site-table">\t                                <tr><th>联系人：</th><td>' + n + "</td></tr>\t                                <tr><th>联系人电话：</th><td>" + t + "</td></tr>\t                                <tr><th>网点电话：</th><td>" + s + "</td></tr>\t                                <tr><th>地址：</th><td>" + o + '</td></tr>\t                            </table>\t                            <a data-code="' + c + '" onclick="goDetail(this);" href="javascript:;">网点详情</a>\t                        </div>',
                    u = new BMap.InfoWindow(d);
                r.addEventListener("click", function () {
                    this.openInfoWindow(u)
                })
            }

            function o(e) {
                HrPost("Site_GetDetailByCode", {code: e}, function (e) {
                    if (console.log(e), e.result) {
                        $(".d-siteName").html("网点-" + e.result.name), $(".d-siteNameS em").html(e.result.name), $(".d-topCompany em").html(e.result.companyName);
                        var i = zto.auth.getToken(),
                            n = "https://kfapi.zto.com/im?channel=official&siteCode=" + e.result.code;
                        i && (n += "&token=" + i), $(".website_detail_box .header .link-box .service").attr("href", n), $(".d-adress em").html("[" + e.result.province + "-" + e.result.city + "-" + e.result.district + "]" + e.result.address), $(".d-manage em").html(e.result.masterMobile ? e.result.master + "(" + e.result.masterMobile + ")" : e.result.master), $(".d-searchTel").html("<tr><th>网点名称</th><th>查询服务</th><th>业务咨询</th><th>传真</th></tr><tr><td>" + e.result.name + "</td><td>" + e.result.outerPhone + "</td><td>" + e.result.businessPhone + "</td><td>" + e.result.fax + "</td></tr>"), $(".d-range em").html(e.result.dispatchRange), e.result.notDispatchRange && "N/A" !== e.result.notDispatchRange ? $(".d-noRange em").html(e.result.notDispatchRange) : $(".d-noRange").hide(), $(".d-business").html(""), e.result.allowTopayment && $(".d-business").append('<span class="d-pay">到付业务</span>'), e.result.allowAgentMoney && $(".d-business").append('<span class="d-collect">代收货款</span>')
                    }
                }), $(".website_detail_popup").show()
            }

            function l(e) {
                return document.getElementById(e)
            }

            s.enableAutoViewport(), $(".query").click(function () {
                if (2 <= $("#site").val().split("-").length) {
                    var e = $("#site").val().split("-"), i = (i = getAddressId(e[0], e[1], e[2])).split(","),
                        n = [e[0], i[0], e[1], i[1], e[2], i[2]];
                    w(!1, 0, $("#keyword").val(), n)
                } else ztoAlert("提示", "请输入完整的省市地址", "确定", "")
            }), document.addEventListener("keyup", function (e) {
                13 == e.keyCode && $(".query").trigger("click")
            }), $(document).on("click", ".query-history em", function () {
                var e = $(this).find(".keySite").html(), i = $(this).find(".keyAddress").html();
                $(this).find(".keySite").attr("data-districtId");
                $("#site").val(e), $("#address").val(i), $(".nearby-message").hide(), $(".site-clear").show(), w(e, 0, i)
            }), $(document).on("click", ".Page .page_item", function () {
                var e = $(this).index() - 1;
                $(this).addClass("cur").siblings().removeClass("cur"), $(".list-cont .list-box:eq(" + e + ")").addClass("show").siblings().removeClass("show")
            }), $(document).on("click", ".Page .prev", function () {
                var e = $(".Page .cur").index() - 2;
                -1 < e && ($(".Page a:eq(" + e + ")").addClass("cur").siblings().removeClass("cur"), $(".list-cont .list-box:eq(" + e + ")").addClass("show").siblings().removeClass("show"))
            }), $(document).on("click", ".Page .next", function () {
                var e = $(".Page .cur").index();
                $(".Page a:eq(" + e + ")").addClass("cur").siblings().removeClass("cur"), $(".list-cont .list-box:eq(" + e + ")").addClass("show").siblings().removeClass("show")
            }), $(".type-menu .menu-item").click(function () {
                $(".nearby-message").hide(), $(this).removeClass("show").siblings().addClass("show"), $(this).hasClass("list") ? $(".type-box.list").addClass("show").siblings().removeClass("show") : $(".type-box.map").addClass("show").siblings().removeClass("show")
            }), $(document).on("click", ".nearby-item", function () {
                o($(this).attr("data-code"))
            }), $(document).on("click", ".site-list-box tr", function () {
                var e = $(this).attr("data-code");
                e && o(e)
            }), $(".address-clear").click(function () {
                $("#address").val(""), $(this).hide()
            }), $(".site-clear").click(function () {
                $(".site").val(""), $(".website-btn").css("background", "#ccc"), $(".website-btn").attr({disabled: "disabled"}), $(this).hide()
            }), $("#address").keyup(function () {
                $(this).val() ? $(".address-clear").show() : $(".address-clear").hide()
            });
            var c, a = new BMap.Autocomplete({input: "address", location: p});
            a.addEventListener("onhighlight", function (e) {
                var i = "", n = e.fromitem.value, t = "";
                -1 < e.fromitem.index && (t = n.province + n.city + n.district + n.street + n.business), i = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + t, t = "", -1 < e.toitem.index && (t = (n = e.toitem.value).province + n.city + n.district + n.street + n.business), i += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + t, l("searchResultPanel").innerHTML = i
            }), a.addEventListener("onconfirm", function (e) {
                var i, n = e.item.value;
                c = n.province + n.city + n.district + n.street + n.business, l("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + c, (i = new BMap.LocalSearch(p, {
                    onSearchComplete: function () {
                        var e = i.getResults().getPoi(0).point;
                        (new BMap.Geocoder).getLocation(e, function (e) {
                            e.addressComponents;
                            $(".address-clear").show(), $("#backChina").show(), w(!1, 0, $("#address").val())
                        })
                    }
                })).search(c), []
            })
        })
    }
});