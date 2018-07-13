!
    function(e, t, a, n) {
        var r, i = {
                name: "ssc",
                basePath: "../static/todo/js/game/ssc/",
                baseNamespace: "phoenix.Games.SSC.",
                selectBallNum: 0,
                limitBonus: 10
            },
            o = e.Games,
            l = {
                init: function() {
                    var e = this;
                    e.eventProxy(),
                        e.getDynamicConfig()
                },
                getGameConfig: function() {
                    return e.Games.SSC.Config
                },
                editSubmitData: function(e) {
                    var t = e.lt_project;
                    t.length;
                    return e
                },
                initRenderDom: function() {},
                getHTML: function() {
                    var e = this,
                        t = "",
                        a = e.defConfig.limitBonus;
                    return e.defConfig.selectBallNum++,
                    e.defConfig.selectBallNum == a && o.SSC.getInstance()["qiansan.zuxuan.zusandanshi"].uploadHtmlSet() && t
                },
                removeFakeMenuDom: function() {
                    $("#J-menu-fake").remove()
                },
                removeFakeBallDom: function() {
                    $("#J-balls-fake").remove(),
                        $("#J-balls-main-panel").show()
                }
            },
            s = e.Class(l, a);
        s.defConfig = i,
            s.getInstance = function(e) {
                return r || (r = new s(e))
            },
            e.Games[t] = s
    } (phoenix, "SSC", phoenix.Game),
    function(e, t, a, n) {
        var r, i = {},
            o = e.Games,
            l = {
                init: function(e) {
                    var t = this;
                    o.setCurrentGameMessage(t)
                }
            },
            s = e.Class(l, a);
        s.defConfig = i,
            s.getInstance = function(e) {
                return r || (r = new s(e))
            },
            e.Games.SSC[t] = s
    } (phoenix, "Message", phoenix.GameMessage),
    function(e, t, a, n) {
        var r, i = {
                mainPanel: "#J-play-select",
                data: "",
                mainDom: ".play-select",
                html: $('<div id="change"><ul class="play-select-title clearfix"></ul><ul class="play-select-content clearfix"></ul></div>'),
                resultDom: "#change .play-select-content"
            },
            o = e.Games,
            l = {
                init: function(e) {
                    var t = this;
                    o.setCurrentGameTypes(t),
                        t.container = $(e.mainPanel),
                        t.count = 0,
                        t.showCount = 0,
                        t.data = o.getCurrentGame().getGameConfig().getInstance().getTypes(),
                        t.html = e.html,
                        setTimeout(function() {
                                t._showMainHTML(t.data)
                            },
                            0)
                },
                containerShow: function() {
                    var e = this;
                    e.container.show()
                },
                getContainerDom: function() {
                    return this.container
                },
                _showMainHTML: function(e, t) {
                    for (var a, n = this,
                             r = 0,
                             i = e.length; r < i; r++) a = e[r],
                    t || n._bulidHTMl(a, "top"),
                        "[object Array]" == Object.prototype.toString.call(a.childs) && 0 != a.childs.length ? (n._showMainHTML(a.childs, !0), n._bulidHTMl(a, "child")) : n._bulidHTMl(a, "terminal");
                    t || n._appendHtml(n.html)
                },
                _bulidHTMl: function(e, t) {
                    var a = this,
                        n = a.html.find(".play-select-title"),
                        r = a.html.find(".play-select-content");
                    switch (t) {
                        case "top":
                            n.append('<li class="' + e.name + '">' + e.title + "</li>"),
                                r.append('<li class="' + e.name + '"></li>');
                            break;
                        case "child":
                            r.find("." + e.parent).append('<dl class="' + e.name + '"><dt>' + e.title + "：</dt></dl>");
                            break;
                        case "terminal":
                            setTimeout(function() {
                                    r.find("." + e.mode + " ." + e.parent).append('<dd class="' + e.name + '">' + e.title + "</dd>")
                                },
                                0)
                    }
                },
                _appendHtml: function(e) {
                    var t = this;
                    $(t.defConfig.mainDom).prepend(e),
                        t._bindTagSelect(),
                        setTimeout(function() {
                                t.fireEvent("endShow")
                            },
                            10)
                },
                _bindTagSelect: function() {
                    var e, t = this;
                    e = new phoenix.Tab({
                        par: "#change",
                        triggers: ".play-select-title > li",
                        panels: ".play-select-content > li",
                        eventType: "click",
                        currPanelClass: "current"
                    }),
                        t.bigTab = e,
                        e.addEvent("afterSwitch",
                            function(e, a) {
                                var n = this.getTrigger(a),
                                    r = $("#change .play-select-content ." + n.attr("class").replace(/\s.*/g, "") + " dd:first");
                                t._getMode(r)
                            }),
                        $("#change .play-select-content").on("click", "dd",
                            function() {
                                t._getMode($(this))
                            })
                },
                _getMode: function(e) {
                    var t = this,
                        a = e.attr("class").replace(/\s.*/g, ""),
                        n = e.parent("dl").attr("class"),
                        r = e.parents("li").eq(0).attr("class").replace(/\s.*/g, ""),
                        i = r + "." + n + "." + a;
                    t.changeMode(i)
                },
                showTitleDom: function() {
                    var e = this,
                        t = e.getContainerDom(),
                        a = t.find(".play-select-content");
                    a.show()
                },
                hiddenTitleDom: function() {
                    var e = this,
                        t = e.getContainerDom(),
                        a = t.find(".play-select-content");
                    a.hide()
                },
                changeMode: function(e) {
                    var t, a, n, r, i = this,
                        l = e.split("."),
                        s = i.getContainerDom(),
                        c = "current",
                        u = 0;
                    try {
                        if (e == o.getCurrentGame().getCurrentGameMethod().getGameMethodName()) return
                    } catch(m) {}
                    s.find(".play-select-content").is(":hidden") && i.showTitleDom(),
                        i.fireEvent("beforeChange", i.container, e),
                        o.getCurrentGame().switchGameMethod(e),
                        t = i.container.find(".play-select-title li"),
                        t.removeClass(c),
                        i.container.find(".play-select-title").find("." + l[0]).addClass(c),
                        a = i.container.find(".play-select-content li"),
                        a.removeClass(c),
                        r = i.container.find(".play-select-content").find("." + l[0]),
                        r.addClass(c),
                        n = r.find("dd").removeClass(c),
                        r.find("." + l[1] + " ." + l[2]).addClass(c),
                        t.each(function(e) {
                            if ($(this).hasClass(c)) return u = e,
                                !1
                        }),
                    i.bigTab || (i.bigTab = {}),
                        i.bigTab.index = u,
                        i.fireEvent("endChange", {
                            dom: i.container,
                            name: e
                        })
                }
            },
            s = e.Class(l, a);
        s.defConfig = i,
            s.getInstance = function(e) {
                return r || (r = new s(e))
            },
            e[t] = s
    } (phoenix, "GameTypes", phoenix.Event),
    function(e, t, a, n) {
        var r, i = {
                mainPanel: "#J-balls-statistics-panel",
                multipleLimitDom: "#J-balls-statistics-multipleLimit",
                lotteryNumDom: "#J-balls-statistics-lotteryNum",
                multipleDom: "#J-balls-statistics-multiple",
                bonusDom: "#J-balls-statistics-bonus",
                amountDom: "#J-balls-statistics-amount",
                moneyUnitDom: "#J-balls-statistics-moneyUnit",
                moneyUnit: 1,
                replaceStr: "/release/tinyeditor-min.js",
                moneyUnitData: {.001 : "厘",
                    .01 : "分",
                    .1 : "角",
                    1 : "元"
                },
                getBonusDataUrl: "/newgame_play.html",
                onePrice: 2,
                multiple: 1,
                multipleLimit: 88,
                bonus: 2
            },
            o = e.Games,
            l = {
                init: function(e) {
                    var t = this;
                    t.initControl(e)
                },
                initControl: function(t) {
                    var a = this;
                    o.setCurrentGameStatistics(a),
                        a.panel = $(t.mainPanel),
                        a.periodData = [],
                        a.moneyUnit = a.getMoneyFromMode(window.GamesInitData.mode) || t.moneyUnit,
                        a.onePrice = t.onePrice,
                        a.multiple = t.multiple,
                        a.bonusLevel = t.bonus;
                    for (var n in t.moneyUnitData) t.moneyUnitData[n] = translate[t.moneyUnitData[n]] || t.moneyUnitData[n];
                    a.multipleLimit = t.multipleLimit,
                        a.setMultipleLimit(t.multipleLimit),
                        a.gameMethodName = "",
                        a.lotteryData = [],
                        a.multipleDom = new phoenix.Select({
                            realDom: t.multipleDom,
                            isNum: !0,
                            expands: {
                                inputEvent: function() {
                                    var e = this;
                                    e.getInput().change(function(t) {
                                        var a = this.value;
                                        this.value = this.value.replace(/[^\d]/g, ""),
                                            a = Number(this.value),
                                            a < 1 ? this.value = 1 : a > o.getCurrentGameStatistics().getMultipleLimit() && (this.value = o.getCurrentGameStatistics().getMultipleLimit()),
                                            e.setValue(this.value)
                                    })
                                }
                            }
                        }),
                        a.multipleDom.setValue(a.multiple),
                        a.multipleDom.addEvent("change",
                            function(e, t, n) {
                                var r = Number(t),
                                    i = o.getCurrentGameStatistics().getMultipleLimit();
                                r < 1 && (r = 1, this.setValue(1)),
                                r > i && (r = i, this.setValue(r)),
                                    a.setMultiple(r),
                                    a.updateData({
                                            lotterys: o.getCurrentGame().getCurrentGameMethod().getLottery(),
                                            original: o.getCurrentGame().getCurrentGameMethod().getOriginal()
                                        },
                                        o.getCurrentGame().getCurrentGameMethod().getGameMethodName())
                            }),
                        a.moneyUnitDom = new e.Select({
                            realDom: t.moneyUnitDom,
                            isSelectList: !0
                        }),
                        a.moneyUnitDom.setValue(Number(a.moneyUnit)),
                        a.moneyUnitDom.addEvent("change",
                            function(e, t, n) {
                                a.setMoneyUnit(Number(t)),
                                    a.updateData({
                                            lotterys: o.getCurrentGame().getCurrentGameMethod().getLottery(),
                                            original: o.getCurrentGame().getCurrentGameMethod().getOriginal()
                                        },
                                        o.getCurrentGame().getCurrentGameMethod().getGameMethodName())
                            }),
                        a.bonusUnitDom = new e.Select({
                            realDom: t.bonusDom,
                            cls: "ui-simulation-select bonus-select"
                        }),
                        a.bonusUnitDom.addEvent("change",
                            function(e, t, n) {
                                a.setBonusUnit(t),
                                    a.changeUserMoneyGroup(e, n)
                            }),
                        a.updateData({
                            lotterys: [],
                            original: []
                        }),
                        o.getCurrentGame().addEvent("afterSwitchGameMethod",
                            function(e, t) {
                                a.buildBonusSelectDom(e, t)
                            })
                },
                savePeriodData: function(e) {
                    this.periodData = e
                },
                getPeriodData: function(e) {
                    return this.periodData
                },
                loadSyncBetHistory: function() {
                    var e = $("#J-history-control .bet-content"),
                        t = "/newgame_play.html?curmid=" + window.GamesInitData.curmid + "&flag=projectRecords&size=5";
                    setTimeout(function() {
                            $.ajax({
                                url: t,
                                dataType: "html",
                                success: function(t) {
                                    e.html(t)
                                },
                                error: function(t, a) {
                                    e.html(translate.FailToBetRecordWording + t.responseText)
                                }
                            })
                        },
                        500)
                },
                loadSyncTraceHistory: function() {
                    var e = $("#J-history-control .trace-content"),
                        t = "/newgame_play.html?curmid=" + window.GamesInitData.curmid + "&flag=traceRecords&size=5";
                    setTimeout(function() {
                            $.ajax({
                                url: t,
                                dataType: "html",
                                success: function(t) {
                                    e.html(t)
                                },
                                error: function(t, a) {
                                    e.html(translate.FailToBetRecordWording + t.responseText)
                                }
                            })
                        },
                        1e3)
                },
                changeUserMoneyGroup: function(e, t) {
                    var a = {},
                        n = Number(t.split("-")[0]),
                        r = o.getCurrentGame().getCurrentGameMethod().getGameMethodName();
                    a.gamelimit = [],
                        a.gamelimit[0] = {},
                        a.gamelimit[0][r] = {},
                        a.gamelimit[0][r].usergroupmoney = n,
                        o.getCurrentGame().setDynamicConfig(a)
                },
                buildBonusSelectDom: function(e, t) {
                    var a = this,
                        n = o.getCurrentGame().getGameConfig().getInstance().getMethodId(t).split("-")[0],
                        r = o.getCurrentGame().getDynamicConfig().bonus,
                        i = r[n],
                        l = a.getBonusUnit(),
                        s = "";
                    return "undefined" == typeof i ? ($(".bonus-select").prev("span.ml10").hide(), $("#J-balls-statistics-bonus").next("li.total-money").hide()) : ($(".bonus-select").prev("span.ml10").show(), $("#J-balls-statistics-bonus").next("li.total-money").show()),
                        i ? (s += 1 == l ? "" === i.prize ? '<option value="2" selected="selected">' + i.hprize + "-0%</option>": '<option value="1" selected="selected">' + i.prize + "-" + i.point + '%</option><option value="2">' + i.hprize + "-0%</option>": "" === i.prize ? '<option value="2" selected="selected">' + i.hprize + "-0%</option>": '<option value="1">' + i.prize + "-" + i.point + '%</option><option value="2" selected="selected">' + i.hprize + "-0%</option>", a.bonusUnitDom.replaceRealDomEl(s), a.bonusUnitDom.update(), void a.bonusUnitDom.setValue(l)) : void a.bonusUnitDom.hide()
                },
                refreshHistory: function(e) {
                    var t = "",
                        a = "",
                        n = "",
                        r = $("#J-period-container");
                    if (a += ['<table class="table">', "<thead>", "<tr>", "<th>奖期</th>", "<th>开奖</th>", "<th>形态</th>", "</tr>", "</thead>", "<tbody>"].join(""), e && e.historyBall) for (t in e.historyBall) n = e.historyBall[t],
                        a += ["<tr>", "<td>" + n.issue + "</td>", "<td>" + n.code + "</td>", "<td>组三</td>", "</tr>"].join("");
                    a += "</tbody></table>",
                        r.html(a)
                },
                getBonusData: function() {
                    var e = this,
                        t = {
                            bonus: ""
                        };
                    t.bonus = jsPrizePoint,
                        o.getCurrentGame().setDynamicConfig(t),
                        e.fireEvent("afterGetBonusData", jsPrizePoint)
                },
                getReplaceStr: function() {
                    return this.defConfig.replaceStr
                },
                getMultipleDom: function() {
                    return this.multipleDom
                },
                getMultipleTextDom: function() {
                    return $("#J-balls-statistics-multiple-text")
                },
                getCurrentMethodMoenyGroup: function() {
                    var e = this,
                        t = o.getCurrentGame().getDynamicConfig(),
                        a = o.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                        n = o.getCurrentGame().getGameConfig().getInstance().getMethodId(a).split("-")[0],
                        r = e.getBonusUnit();
                    return 2 == Number(r) ? Number(t.bonus[n].hprize) : Number(t.bonus[n].prize)
                },
                getCurrentBonusValue: function() {
                    var e = this,
                        t = 0,
                        a = e.getCurrentMethodMoenyGroup().toString(),
                        n = e.getMultip().toString();
                    try {
                        t += a.split(".")[1].length
                    } catch(r) {}
                    try {
                        t += n.split(".")[1].length
                    } catch(r) {}
                    var i = e.getLotteryData();
                    return Number(a.replace(".", "")) * Number(i.lotterys.length) * Number(n.replace(".", "")) / Math.pow(10, t)
                },
                getBonusUnit: function() {
                    return this.bonusLevel
                },
                setBonusUnit: function(e) {
                    this.bonusLevel = e
                },
                getHistoryUnitMode: function() {
                    return ! (!LS.getItem("saveb") || !LS.getItem("savec"))
                },
                setMultipleLimit: function(e) {
                    var t = this,
                        a = "无限制";
                    e = Number(e),
                    isNaN(e) && (e = 99999999),
                        this.multipleLimit = e,
                        e < 0 ? (this.multipleLimit = 99999999, a = "无限制") : e < 99999999 && (a = "" + e + " 倍"),
                        t.getMultipleLimitDom().html(a)
                },
                getMultipleLimit: function() {
                    return this.multipleLimit
                },
                setMoneyUnitData: function(e) {
                    this.defConfig.moneyUnitData = e
                },
                getMoneyUnitText: function(e) {
                    return 3 !== fxid ? this.defConfig.moneyUnitData["" + e] : ""
                },
                updateData: function(e, t) {
                    var a = this,
                        n = (a.defConfig, e.lotterys.length),
                        r = a.onePrice,
                        i = a.multiple,
                        o = a.moneyUnit;
                    a.setLotteryData(e),
                        a.setGameMethodName(t),
                        a.setLotteryNumDom(e.lotterys.length),
                        a.setAmountDom(a.formatMoney(n * (1e3 * o) * i * (1e3 * r) / 1e6)),
                        a.fireEvent("afterUpData", {
                            datas: e,
                            text: t
                        })
                },
                getResultData: function() {
                    var e = this,
                        t = e.getLotteryData();
                    return t.lotterys.length < 1 ? {}: o.getCurrentGame().getCurrentGameMethod().checkTestUserAddOrderNumber() ? {
                        overTest: !0
                    }: {
                        methodId: t.methodId,
                        digitstr: o.getCurrentGame().getCurrentGameMethod().getCurrentDigitstr(),
                        subType: o.getCurrentGame().getCurrentGameMethod().getSubmitType(),
                        type: e.getGameMethodName(),
                        original: t.original,
                        lotterys: t.lotterys,
                        moneyUnit: e.getMoneyUnit(),
                        omodel: e.getBonusUnit(),
                        num: t.lotterys.length,
                        multiple: e.multiple,
                        onePrice: e.getOnePrice(),
                        amount: t.lotterys.length * (1e3 * e.moneyUnit) * e.multiple * (1e3 * e.onePrice) / 1e6,
                        amountText: e.formatMoney(t.lotterys.length * (1e3 * e.moneyUnit) * e.multiple * (1e3 * e.onePrice) / 1e6)
                    }
                },
                setGameMethodName: function(e) {
                    this.gameMethodName = e
                },
                getGameMethodName: function(e) {
                    return this.gameMethodName
                },
                setMoneyUnit: function(e) {
                    var t = this;
                    t.moneyUnit = e
                },
                getMoneyUnit: function() {
                    return this.moneyUnit
                },
                getMoneyMode: function(e) {
                    var t = !!window.GamesInitData.areatype,
                        a = "";
                    return t && 3 === fxid ? a = 31 : 1 == e && 3 !== fxid || 3 !== fxid && 10 == e ? a = 1 : .1 == e ? a = 2 : .01 == e ? a = 3 : .001 == e ? a = 4 : 1 == e ? a = 31 : 10 == e ? a = 32 : 100 == e ? a = 33 : 1e3 == e && (a = 34),
                        a
                },
                getMoneyUnitName: function(e) {
                    var t = "";
                    return 1 == e ? t = "元": 2 == e ? t = "角": 3 == e ? t = "分": 4 == e && (t = "厘"),
                        t
                },
                getMoneyFromMode: function(e) {
                    var t = "",
                        a = !!window.GamesInitData.areatype; !! window.GamesInitData.areatype && window.GamesInitData.areatype[0].isSelf;
                    return a && 3 === fxid ? t = 1 : 1 == e || 31 == e ? t = 1 : 2 == e ? t = .1 : 3 == e ? t = .01 : 4 == e ? t = .001 : 32 == e ? t = 10 : 33 == e ? t = 100 : 34 == e && (t = 1e3),
                        t
                },
                getLotteryData: function() {
                    return this.lotteryData
                },
                setLotteryData: function(e) {
                    var t = this;
                    t.lotteryData = e
                },
                formatMoney: function(e) {
                    var e = Number(e),
                        t = /(-?\d+)(^\d{3}\.)/;
                    for (e = Number.prototype.toFixed ? e.toFixed(4) : Math.round(100 * e) / 100, e = "" + e; t.test(e);) e = e.replace(t, "$1,$2");
                    return e
                },
                getMultipleLimitDom: function() {
                    var e = this,
                        t = e.defConfig;
                    return e.multipleLimitDom || (e.multipleLimitDom = $(t.multipleLimitDom))
                },
                getLotteryNumDom: function() {
                    var e = this,
                        t = e.defConfig;
                    return e.lotteryNumDom || (e.lotteryNumDom = $(t.lotteryNumDom))
                },
                setLotteryNumDom: function(e) {
                    var t = this;
                    t.getLotteryNumDom().html(e)
                },
                getMultipleDom: function() {
                    return this.multipleDom
                },
                getMultip: function() {
                    var e = this;
                    return e.multiple
                },
                setMultipleDom: function(e) {
                    var t = this;
                    t.getMultipleDom().setValue(e)
                },
                setMultiple: function(e) {
                    this.multiple = e
                },
                getMoneyUnitDom: function() {
                    return this.moneyUnitDom
                },
                setMoneyUnitDom: function(e) {
                    var t = this;
                    t.getMoneyUnitDom().setValue(e)
                },
                hidesetMoneyUnitDom: function() {
                    this.moneyUnitDom.hide()
                },
                setOneprice: function(e) {
                    this.onePrice = e
                },
                getOnePrice: function() {
                    var e = this;
                    return e.onePrice
                },
                getAmountDom: function() {
                    var e = this,
                        t = e.defConfig;
                    return e.amountDom || (e.amountDom = $(t.amountDom))
                },
                setAmountDom: function(e) {
                    var t = this;
                    t.getAmountDom().html(e)
                },
                getLockMultipleDom: function() {
                    return $("#J-balls-statistics-lockMultiple")
                },
                reSet: function() {
                    var e = this,
                        t = e.defConfig;
                    e.getLockMultipleDom().prop("checked") || e.multipleDom.setValue(t.multiple),
                        e.fireEvent("afterStatisReset")
                }
            },
            s = e.Class(l, a);
        s.defConfig = i,
            s.getInstance = function(e) {
                return r || (r = new s(e))
            },
            e[t] = s
    } (phoenix, "GameStatistics", phoenix.Event),
    function(e, t, a, n) {
        var r, i = {
                containerDom: "#J-balls-order-container",
                totalLotterysNumDom: "#J-gameOrder-lotterys-num",
                totalAmountDom: "#J-gameOrder-amount",
                selectedClass: "game-order-current",
                rowTemplate: '<li data-param="action=reselect&id=<#=id#>" id="gameorder-<#=id#>"><div class="result"><span class="moneyUnitText"><#=moneyUnitText#></span><span class="bet"><#=num#>注</span><span class="multiple"><#=multiple#>倍</span><span class="price"><#=amountText#></span><span class="close"><a data-param="action=del&id=<#=id#>" href="javascript:void(0);" title="删除">&times;</a></span></div><span>[<#=typeText#>]</span><span><#=lotterysText#></span></li>',
                lotterysTextLength: 40,
                addOrderDom: "#J-add-order"
            },
            o = e.Games,
            l = 1,
            s = (Object.prototype.toString,
                function(e) {
                    for (var t, a = $.trim(e).split("&"), n = 0, r = a.length, i = {}; n < r; n++) t = a[n].split("="),
                    t.length > 0 && (2 == t.length ? i[t[0]] = t[1] : i[t[0]] = "");
                    return i
                }),
            c = {
                init: function(e) {
                    var t, a = this,
                        e = a.defConfig;
                    a.cacheData = {},
                        a.cacheData.detailPostParameter = {},
                        a.orderData = [],
                        a.orderBetData = [],
                        o.setCurrentGameOrder(a),
                        a.container = $(e.containerDom),
                        a.totalLotterysNum = 0,
                        a.totalLotterysNumDom = $(e.totalLotterysNumDom),
                        a.totalAmount = 0,
                        a.totalAmountDom = $(e.totalAmountDom),
                        a.currentSelectId = 0,
                        a.eventProxy(),
                        t = 3 === fxid ? "": "<span>&yen;</span>",
                        this.defConfig.rowTemplate = '<li data-param="action=reselect&id=<#=id#>" id="gameorder-<#=id#>"><div class="result"><span class="moneyUnitText"><#=moneyUnitText#></span><span class="bet"><#=num#>' + translate.Note + '</span><span class="multiple"><#=multiple#>' + translate.MsgMultiple + '</span><span class="price">' + t + '<#=amountText#></span><span class="close"><a data-param="action=del&id=<#=id#>" href="javascript:void(0);" title="' + translate.Del + '">&times;</a></span></div><span>[<#=typeText#>]</span><span><#=lotterysText#></span></li>',
                        a.addEvent("afterAdd",
                            function() {
                                o.getCurrentGameTrace().getRowTableType();
                                o.getCurrentGameTrace().isOpen() && o.getCurrentGameTrace().updateOrder()
                            }),
                        a.addEvent("afterRemoveData",
                            function() {
                                o.getCurrentGameTrace().getRowTableType();
                                o.getCurrentGameTrace().isOpen() && o.getCurrentGameTrace().updateOrder()
                            }),
                        a.addEvent("afterResetData",
                            function() {
                                o.getCurrentGameTrace().getRowTableType();
                                o.getCurrentGameTrace().updateOrder(!0)
                            }),
                        o.getCurrentGameTypes().addEvent("endChange",
                            function() {
                                a.cancelSelectOrder()
                            }),
                        a.addEvent("beforeAdd",
                            function(e, t) {
                                t.omodel || (t.omodel = o.getCurrentGameStatistics().getBonusUnit())
                            })
                },
                setTotalLotterysNum: function(e) {
                    var t = this;
                    t.totalLotterysNum = Number(e),
                        t.totalLotterysNumDom.html(e)
                },
                setTotalAmount: function(e) {
                    var t = this;
                    t.totalAmount = Number(e),
                        t.totalAmountDom.html(t.formatMoney(e).replace("VND", ""))
                },
                addData: function(e) {
                    var t = this;
                    t.orderData.unshift(e)
                },
                addBetData: function(e) {
                    var t = this;
                    t.orderBetData.unshift(e)
                },
                getOrderById: function(e) {
                    var t = this,
                        e = Number(e),
                        a = t.orderData,
                        n = 0,
                        r = a.length;
                    for (n = 0; n < r; n++) if (Number(a[n].id) == e) return a[n]
                },
                removeData: function(e) {
                    for (var t = this,
                             e = Number(e), a = t.orderData, n = 0, r = a.length; n < r; n++) if (a[n].id == e) {
                        t.fireEvent("beforeRemoveData", a[n]),
                            t.orderData.splice(n, 1),
                            t.updateData(),
                            t.fireEvent("afterRemoveData");
                        break
                    }
                    $("#gameorder-" + e).remove(),
                        t.fireEvent("afterRemoveData")
                },
                reSet: function() {
                    var e = this;
                    return e.container.empty(),
                        e.orderData = [],
                        e.updateData(),
                        e.fireEvent("afterResetData"),
                        e
                },
                setTemplate: function(e) {
                    var t = this;
                    t.defConfig.rowTemplate = e
                },
                updateData: function() {
                    var e = this,
                        t = e.getTotal();
                    e.setTotalLotterysNum(t.count),
                        e.setTotalAmount(t.amount)
                },
                getTotal: function() {
                    for (var e = this,
                             t = e.orderData,
                             a = 0,
                             n = t.length,
                             r = 0,
                             i = 0; a < n; a++) r += t[a].num,
                        i = (1e3 * i + t[a].num * (1e3 * t[a].onePrice) * (1e3 * t[a].moneyUnit) * (1e3 * t[a].multiple) / 1e9 * 1e3) / 1e3;
                    return {
                        count: r,
                        amount: i,
                        orders: t
                    }
                },
                getBetTotal: function() {
                    for (var e = this,
                             t = e.orderBetData,
                             a = 0,
                             n = t.length,
                             r = 0,
                             i = 0; a < n; a++) r += t[a].num,
                        i = (1e3 * i + t[a].num * (1e3 * t[a].onePrice) * (1e3 * t[a].moneyUnit) * (1e3 * t[a].multiple) / 1e9 * 1e3) / 1e3;
                    return {
                        count: r,
                        amount: i,
                        orders: t
                    }
                },
                getTotalById: function(e) {
                    for (var t = this,
                             a = t.orderData,
                             n = 0,
                             r = a.length,
                             i = 0,
                             o = 0; n < r; n++) if (e == a[n].id) return i = a[n].num,
                        o = 1e3 * a[n].num * (1e3 * a[n].onePrice) * (1e3 * a[n].moneyUnit) * (1e3 * a[n].multiple) / 1e12,
                        {
                            count: i,
                            amount: o,
                            orders: a
                        }
                },
                getTotalBetById: function(e) {
                    for (var t = this,
                             a = t.orderBetData,
                             n = 0,
                             r = a.length,
                             i = 0,
                             o = 0; n < r; n++) if (e == a[n].id) return i = a[n].num,
                        o = 1e3 * a[n].num * (1e3 * a[n].onePrice) * (1e3 * a[n].moneyUnit) * (1e3 * a[n].multiple) / 1e12,
                        {
                            count: i,
                            amount: o,
                            orders: a
                        }
                },
                getOrderMaxMultiple: function() {
                    for (var e, t, a, n = this,
                             r = (o.getCurrentGame().getDynamicConfig().gamelimit[0], n.getTotal().orders), i = 0, l = r.length, s = []; i < l; i++) e = $.trim(r[i].type),
                        t = r[i].multiple,
                        a = 9999999999,
                        s.push({
                            gameMethod: e,
                            maxnum: Math.floor(a / t)
                        });
                    return s.sort(function(e, t) {
                        return e.maxnum - t.maxnum
                    }),
                        s.length > 0 ? s[0] : {
                            gameMethod: "",
                            maxnum: 1e8
                        }
                },
                add: function(e) {
                    var t, a = this,
                        n = "",
                        r = -1,
                        i = a.defConfig.rowTemplate,
                        s = 0,
                        c = o.getCurrentGameTrace().isOpen();
                    if (a.fireEvent("beforeAdd", e), e.lotterys && e.lotterys.length > 0) {
                        if (a.currentSelectId > 0) e.id = a.currentSelectId;
                        else {
                            r = a.checkData(e);
                            var u = {
                                type: "normal",
                                closeText: translate.Confirm,
                                data: {
                                    tplData: {
                                        msg: translate.DoubleBet
                                    }
                                }
                            };
                            if (r != -1) {
                                var m = window.location.href || document.URL,
                                    d = "new" == m.split("&ui=")[1];
                                return void(d ? (a.addMultiple(e.multiple, r), u = $.extend(!0, u, {
                                    closeFun: function() {
                                        this.hide()
                                    }
                                }), o.getCurrentGameMessage().show(u)) : (u = $.extend(!0, u, {
                                    closeFun: function() {
                                        a.addMultiple(e.multiple, r),
                                            this.hide()
                                    }
                                }), o.getCurrentGameMessage().show(u)))
                            }
                            e.id = l++
                        }
                        if (e.multiple = c ? 1 : e.multiple, e.amountText = a.formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice), c && ("yingli" == o.getCurrentGameTrace().getRowTableType() || "yinglilv" == o.getCurrentGameTrace().getRowTableType())) for (s = 0, t = a.orderData.length; s < t; s++) if (a.orderData[s].type != e.type || a.orderData[s].moneyUnit != e.moneyUnit) return void alert(translate.NotAllowMixBet);
                        e.methodId = o.getCurrentGame().getGameConfig().getInstance().getMethodId(e.type),
                            e.submitParameter = o.getCurrentGame().getCurrentGameMethod().makeSubmitParameter(e.original, e),
                            e.postParameter = o.getCurrentGame().getCurrentGameMethod().makePostParameter(e.original, e),
                            e.showCodes = e.postParameter.replace(/&/g, ""),
                            e.oldMultiple = e.multiple,
                            n = a.formatRow(i, a.rebuildData(e)),
                            a.currentSelectId > 0 ? a.replaceOrder(e.id, e) : a.addData(e),
                            a.currentSelectId > 0 ? ($(n).replaceAll($("#gameorder-" + a.currentSelectId)), a.cancelSelectOrder()) : $(n).prependTo(a.container),
                            o.getCurrentGame().getCurrentGameMethod().reSet(),
                            o.getCurrentGameStatistics().reSet(),
                            a.updateData(),
                            a.fireEvent("afterAdd", e)
                    } else {
                        var p = o.getCurrentGameMessage();
                        if (!e.original || e.original.length <= 0) {
                            var g = e.overTest ? translate["测试账户每次只能投1-3注"] || "测试账户每次只能投1-3注": translate.WarningTips;
                            p.show({
                                type: "mustChoose",
                                msg: g,
                                data: {
                                    tplData: {
                                        msg: g
                                    }
                                },
                                closeFun: function() {
                                    this.hide(),
                                        $("#j-bet-table input").val("")
                                }
                            })
                        }
                    }
                },
                addbet: function(e, t) {
                    var a = this;
                    a.defConfig.rowTemplate,
                        o.getCurrentGameTrace().isOpen();
                    if (a.fireEvent("beforeAddBet", e), e.lotterys && e.lotterys.length > 0) {
                        if (e.type.indexOf("danshi") != -1 || e.type.indexOf("zzds") != -1 || e.type.indexOf("zxds") != -1 || e.type.indexOf("sids") != -1) return void o.getCurrentGameMessage().show({
                            type: "normal",
                            closeText: translate.Confirm,
                            data: {
                                tplData: {
                                    msg: translate["单式不能使用直接投注"] || "单式不能使用直接投注"
                                }
                            }
                        });
                        e.amountText = a.formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                            e.methodId = o.getCurrentGame().getGameConfig().getInstance().getMethodId(e.type),
                            e.submitParameter = o.getCurrentGame().getCurrentGameMethod().makeSubmitParameter(e.original, e),
                            e.postParameter = o.getCurrentGame().getCurrentGameMethod().makePostParameter(e.original, e),
                            e.showCodes = e.postParameter.replace(/&/g, ""),
                            e.oldMultiple = e.multiple,
                            e.betType = "betOrder",
                            a.addBetData(e),
                            a.cancelSelectOrder(),
                            o.getCurrentGame().getCurrentGameMethod().reSet(),
                            o.getCurrentGameStatistics().reSet(),
                            a.updateData(),
                            a.fireEvent("afterBetAdd", e),
                        t && t(e)
                    } else {
                        var n = o.getCurrentGameMessage();
                        if (!e.original || e.original.length <= 0) {
                            var r = e.overTest ? translate["测试账户每次只能投1-3注"] || "测试账户每次只能投1-3注": translate.WarningTips;
                            n.show({
                                type: "mustChoose",
                                msg: r,
                                data: {
                                    tplData: {
                                        msg: r
                                    }
                                }
                            })
                        }
                    }
                },
                clearBetTypeOrder: function() {
                    var e = this;
                    e.orderBetData = []
                },
                replaceOrder: function(e, t) {
                    for (var a = this,
                             n = a.orderData,
                             r = 0,
                             i = n.length; r < i; r++) if (n[r].id == e) return void(n[r] = t)
                },
                render: function() {
                    for (var e = this,
                             t = e.getTotal().orders, a = 0, n = t.length, r = [], i = e.defConfig.rowTemplate; a < n; a++) r[a] = e.formatRow(i, e.rebuildData(t[a]));
                    e.updateData(),
                        e.container.html(r.join(""))
                },
                rebuildData: function(e) {
                    var t = this,
                        a = t.defConfig,
                        n = o.getCurrentGame().getGameConfig().getInstance(),
                        r = n.getTitleByName(e.type);
                    return e.typeText = r.join("_"),
                        e.lotterysText = e.postParameter.length > a.lotterysTextLength ? e.postParameter.substr(0, a.lotterysTextLength).replace(/&/g, "") + '... <span data-param="action=detail&id=' + e.id + '" class="lottery-details">' + translate["详情"] + '</span><div class="lottery-details-area"><div class="num"><span class="multiple"></span><em data-param="action=detailhide" class="close">×</em></div><div class="list"></div></div>': e.postParameter.replace(/&/g, ""),
                        e.moneyUnitText = o.getCurrentGameStatistics().getMoneyUnitText(e.moneyUnit),
                        e
                },
                formatRow: function(e, t) {
                    var a, n, r = t;
                    for (a in r) r.hasOwnProperty(a) && (n = RegExp("<#=" + a + "#>", "g"), e = e.replace(n, r[a]));
                    return e
                },
                originalData: function(e) {
                    for (var t = this,
                             a = [], n = 0; n < e.length; n++) for (var r = 0; r < e[n].length; r++) a[r] = a[r] || [],
                    t.arrIndexOf(e[n][r], a[r]) || a[r].push(e[n][r]);
                    return a
                },
                arrIndexOf: function(e, t) {
                    for (var a, n = 0; n < t.length; n++) t[n] == e && (a = !0);
                    return a || !1
                },
                checkData: function(e) {
                    var t, a, n = this,
                        r = [],
                        i = 0;
                    a = e.type,
                        t = e.original;
                    for (var i = 0; i < t.length; i++) r.push(t[i].join(""));
                    return moneyUnit = e.moneyUnit,
                        n.searchSameResult(a, r.join(), moneyUnit)
                },
                eventProxy: function() {
                    var e = this,
                        t = e.container;
                    t.click(function(t) {
                        var a, n = t.target.getAttribute("data-param");
                        n && "" != $.trim(n) && (a = s(n), $.isFunction(e["exeEvent_" + a.action]) && e["exeEvent_" + a.action].call(e, a, t.target))
                    })
                },
                exeEvent_del: function(e) {
                    var t = this,
                        a = Number(e.id);
                    t.currentSelectId == a && (o.getCurrentGame().getCurrentGameMethod().reSet(), t.cancelSelectOrder()),
                        t.removeData(a)
                },
                exeEvent_detailhide: function(e, t) {
                    $(t).parents(".lottery-details-area").eq(0).hide()
                },
                exeEvent_detail: function(e, t) {
                    for (var a = this,
                             t = $(t), n = Number(e.id), r = n, i = t.next(), o = i.find(".multiple"), l = i.find(".list"), s = a.getTotal().orders, c = "", u = s.length - 1; u >= 0; u--) if (s[u].id == n) {
                        s = s[u];
                        break
                    }
                    o.text(translate.multipleArea[0] + " " + s.num + " " + translate.multipleArea[1]),
                        c = s.postParameter.indexOf(",") != -1 ? s.postParameter.replace(/\&/g, "") : s.postParameter.replace(/\&/g, " "),
                        a.cacheData.currentDetailId = r,
                        a.cacheData.detailPostParameter[r] = c,
                        i.css({
                            left: i.position().left + i.width() + 5
                        }),
                        l.html(c),
                        i.show()
                },
                exeEvent_reselect: function(e) {
                    var t = this,
                        a = Number(e.id);
                    t.selectOrderById(a)
                },
                updateDomStatus: function() {
                    var e = this,
                        t = "important",
                        a = e.currentSelectId,
                        n = $(e.defConfig.addOrderDom);
                    a > 0 ? n.addClass(t) : n.removeClass(t)
                },
                selectOrderById: function(e) {
                    var t = this,
                        a = t.getOrderById(e),
                        n = a.original,
                        r = a.type,
                        i = t.defConfig.selectedClass,
                        l = $("#gameorder-" + e);
                    if (t.getOrderById(e).type.indexOf(".danshi") == -1) {
                        if (isNaN(Number(n[0][0]))) for (var s = 0; s < n.length; s++) n[s] = $.map(n[s],
                            function(e) {
                                return "大" === e ? "0": "小" === e ? "1": "单" === e ? "2": "双" === e ? "3": e
                            });
                        l.parent().children().removeClass(i),
                            l.addClass(i),
                            o.getCurrentGameTypes().changeMode(r),
                            o.getCurrentGameStatistics().getMultipleDom().setValue(a.multiple),
                            o.getCurrentGameStatistics().getMoneyUnitDom().setValue(a.moneyUnit),
                            o.getCurrentGame().getCurrentGameMethod().reSelect(n),
                            t.currentSelectId = e,
                            t.updateDomStatus()
                    }
                },
                cancelSelectOrder: function() {
                    var e = this,
                        t = e.currentSelectId;
                    $(e.defConfig.Z);
                    t > 0 && ($("#gameorder-" + t).removeClass(e.defConfig.selectedClass), e.currentSelectId = 0, e.updateDomStatus(), o.getCurrentGame().getCurrentGameMethod().reSet())
                },
                formatMoney: function(e) {
                    var e = Number(e),
                        t = /(-?\d+)(^\d{3}\.)/;
                    for (e = Number.prototype.toFixed ? e.toFixed(4) : Math.round(100 * e) / 100, e = "" + e; t.test(e);) e = e.replace(t, "$1,$2");
                    return e = 3 === fxid ? e + "<def> VND</def>": e
                },
                searchSameResult: function(e, t, a) {
                    for (var n, r, i = this,
                             o = 0,
                             l = [], s = i.getTotal().orders; o < s.length; o++) {
                        l = [],
                            n = s[o];
                        for (var c = [], u = n.original, m = 0; m < u.length; m++) {
                            if (isNaN(u[m][0])) {
                                r = "";
                                for (var d = 0; d < u[m].length; d++) switch (u[m][d]) {
                                    case translate.Big:
                                        r += "0";
                                        break;
                                    case translate.Small:
                                        r += "1";
                                        break;
                                    case translate.Odds:
                                        r += "2";
                                        break;
                                    case translate.Evens:
                                        r += "3";
                                        break;
                                    default:
                                        r += u[m][d] ? u[m][d] : ""
                                }
                                r = [r]
                            } else r = u[m].join("");
                            c[m] = r
                        }
                        for (var p = 0; p < c.length; p++) l.push(c[p]);
                        if (n.type == e && t == l.join() && n.moneyUnit == a) return o
                    }
                    return - 1
                },
                addMultiple: function(e, t) {
                    var a, n = this,
                        r = n.getTotal().orders,
                        i = r[t],
                        l = i.type,
                        s = 999999;
                    if (!o.getCurrentGameTrace().isOpen()) {
                        if (a = o.getCurrentGame().getDynamicConfig().gamelimit, a[l] && (s = a[l].maxmultiple, s = s < 0 ? 999999999 : s), i.multiple + e > s) return void setTimeout(function() {
                                o.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Confirm,
                                    closeFun: function() {
                                        r[t].multiple = s,
                                            r[t].oldMultiple = r[t].multiple,
                                            r[t].amount = r[t].num * r[t].moneyUnit * r[t].multiple * r[t].onePrice,
                                            r[t].amountText = n.formatMoney(r[t].num * r[t].moneyUnit * r[t].multiple * r[t].onePrice),
                                            n.render(),
                                            o.getCurrentGame().getCurrentGameMethod().reSet(),
                                            o.getCurrentGame().getCurrentGameMethod().ballsErrorTip(),
                                            o.getCurrentGameStatistics().reSet(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.Maxmultiple.msg1 + "(" + s + translate.Maxmultiple.msg2 + ")，" + translate.Maxmultiple.msg3
                                        }
                                    }
                                })
                            },
                            100);
                        r[t].multiple += e,
                            r[t].oldMultiple = r[t].multiple,
                            r[t].amount = r[t].num * r[t].moneyUnit * r[t].multiple * r[t].onePrice,
                            r[t].amountText = n.formatMoney(r[t].num * r[t].moneyUnit * r[t].multiple * r[t].onePrice),
                            n.render(),
                            o.getCurrentGame().getCurrentGameMethod().reSet(),
                            o.getCurrentGame().getCurrentGameMethod().ballsErrorTip(),
                            o.getCurrentGameStatistics().reSet(),
                            n.cancelSelectOrder()
                    }
                },
                editMultiples: function(e) {
                    for (var t = this,
                             a = t.getTotal().orders, n = 0, r = a.length; n < r; n++) a[n].multiple = e,
                        a[n].amount = a[n].num * a[n].moneyUnit * a[n].multiple * a[n].onePrice,
                        a[n].amountText = t.formatMoney(a[n].amount);
                    t.render(),
                        t.cancelSelectOrder()
                },
                editMultiple: function(e, t) {
                    var a = this,
                        n = a.getTotal().orders;
                    n[t].multiple = e,
                        n[t].amount = n[t].num * n[t].moneyUnit * n[t].multiple * n[t].onePrice,
                        n[t].amountText = a.formatMoney(n[t].amount),
                        a.render(),
                        a.cancelSelectOrder()
                },
                restoreMultiples: function() {
                    for (var e = this,
                             t = e.getTotal().orders, a = 0, n = t.length; a < n; a++) t[a].multiple = t[a].oldMultiple,
                        t[a].amount = t[a].num * t[a].moneyUnit * t[a].multiple * t[a].onePrice,
                        t[a].amountText = e.formatMoney(t[a].amount);
                    e.render(),
                        e.cancelSelectOrder()
                }
            },
            u = e.Class(c, a);
        u.defConfig = i,
            u.getInstance = function(e) {
                return r || (r = new u(e))
            },
            e[t] = u
    } (phoenix, "GameOrder", phoenix.Event),
    function(e, t, a, n) {
        var r, o = {
                mainPanel: "#J-trace-panel",
                advancedTypeHas: ["fanbei", "yingli", "yinglilv"],
                dataRowHeader: '<tr><th style="width:125px;" class="text-center">序号</th><th><input data-action="checkedAll" type="checkbox"  checked="checked"/> 追号期次</th><th>倍数</th><th>金额</th><th>预计开奖时间</th></tr>',
                dataRowTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> 倍</td><td>&yen; <span class="trace-row-money"><#=money#></span> 元</td><td><span class="trace-row-time"><#=publishTime#></span></td></tr>',
                dataRowYingliHeader: '<tr><th class="text-center">序号</th><th><input data-action="checkedAll" type="checkbox" /> 追号期次</th><th>倍数</th><th>金额</th><th>奖金</th><th>预期盈利金额</th><th>预期盈利率</th></tr>',
                dataRowYingliTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> 倍</td><td>&yen; <span class="trace-row-money"><#=money#></span> 元</td><td>&yen; <span class="trace-row-userGroupMoney"><#=userGroupMoney#></span> 元</td><td>&yen; <span class="trace-row-winTotalAmount"><#=winTotalAmout#></span> 元</td><td><span class="trace-row-yinglilv"><#=yinglilv#></span>%</td></tr>'
            },
            l = e.Games,
            s = function(e, t, a) {
                var e = "" + e,
                    a = a || 1e9;
                return e = e.replace(/[^\d]/g, ""),
                    e = "" == e ? t: Number(e) > a ? a: e,
                    Number(e)
            },
            c = function(e) {
                return e = e.replace(/[^\d]/g, ""),
                    Number(e)
            },
            u = {
                init: function(e) {
                    var t = this;
                    l.setCurrentGameTrace(t),
                        t.panel = $(e.mainPanel),
                        t.TraceTab = null,
                        t.TraceAdvancedTab = null,
                        t.NormalSelectTimesTab = null,
                        t.isOpenPanel = !1,
                        t.orderData = null,
                        t.traceType = "normal",
                        t.times = 0,
                        t.traceStartNumber = "",
                        t.currentTraceNumber = "",
                        t.advancedType = e.advancedTypeHas[0],
                        t.typeTypeType = "a",
                        t.initEvent(),
                        t.setCurrentTraceNumber(),
                        this.defConfig = $.extend(this.defConfig, {
                            dataRowHeader: '<tr><th style="width:125px;" class="text-center">' + translate.Serial + '</th><th><input data-action="checkedAll" type="checkbox"  checked="checked"/> ' + translate.ChasingPeriod + "</th><th>" + translate.Multiple + "</th><th>" + translate.Amount + "</th><th>" + translate.ExpectedLotteryTime + "</th></tr>",
                            dataRowTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> ' + translate.MsgMultiple + '</td><td>&yen; <span class="trace-row-money"><#=money#></span> ' + translate.MsgDollar + '</td><td><span class="trace-row-time"><#=publishTime#></span></td></tr>',
                            dataRowYingliHeader: '<tr><th class="text-center">' + translate.Serial + '</th><th><input data-action="checkedAll" type="checkbox" /> ' + translate.ChasingPeriod + "</th><th>" + translate.Multiple + "</th><th>" + translate.Amount + "</th><th>" + translate.Bonus + "</th><th>" + translate.ExpectedProfitAmount + "</th><th>" + translate.ExpectedRate + "</th></tr>",
                            dataRowYingliTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> ' + translate.MsgMultiple + '</td><td>&yen; <span class="trace-row-money"><#=money#></span> ' + translate.MsgDollar + '</td><td>&yen; <span class="trace-row-userGroupMoney"><#=userGroupMoney#></span> ' + translate.MsgDollar + '</td><td>&yen; <span class="trace-row-winTotalAmount"><#=winTotalAmout#></span> ' + translate.MsgDollar + '</td><td><span class="trace-row-yinglilv"><#=yinglilv#></span>%</td></tr>'
                        }),
                        l.getCurrentGame().addEvent("changeDynamicConfig",
                            function(e, a) { (a.lastballs || a.lastnumber) && (t.buildStartNumberSelectDom(), t.updateTableNumber())
                            })
                },
                setAdvancedType: function(e) {
                    "[object Number]" == Object.prototype.toString.call(e) ? this.advancedType = this.getAdvancedTypeBuIndex(e) : this.advancedType = e
                },
                getAdvancedType: function() {
                    return this.advancedType
                },
                getAdvancedTypeBuIndex: function(e) {
                    var t = this,
                        a = t.defConfig.advancedTypeHas,
                        n = a.length;
                    return e < n ? a[e] : ""
                },
                initEvent: function() {
                    var t = this;
                    $("#J-trace-switch").click(function() {
                        if (this.checked) {
                            var e = l.getCurrentGameOrder().getTotal().amount,
                                t = l.getCurrentGameMessage();
                            if (e <= 0) return t.show({
                                type: "mustChoose",
                                msg: translate.SelectOne,
                                data: {
                                    tplData: {
                                        msg: translate.SelectOne
                                    }
                                }
                            }),
                                void($("#J-trace-switch").get(0).checked = !1);
                            l.getCurrentGameTrace().show(),
                                $("#J-trace-iswintimesstop").get(0).checked = !0,
                            $("#isWinStop") && $("#isWinStop").remove(),
                                $("#J-trace-iswintimesstop").before("<span id='isWinStop' class='bet-tips' style='position:relative;right:10px;line-height: 20px;opacity:0;font-weight:900'>中奖即停<i></i></span>").siblings().fadeTo(500, 1)
                        } else l.getCurrentGameTrace().hide()
                    }),
                        t.TraceTab = TraceTab = new e.Tab({
                            par: "#J-trace-panel",
                            triggers: ".chase-tab-t",
                            panels: ".chase-tab-content",
                            currPanelClass: "chase-tab-content-current",
                            eventType: "click"
                        }),
                        TraceTab.addEvent("afterSwitch",
                            function(e, a) {
                                var n = ["normal", "advanced"];
                                a < n.length && t.setTraceType(n[a]),
                                    t.updateStatistics()
                            }),
                        t.TraceAdvancedTab = TraceAdvancedTab = new e.Tab({
                            par: "#J-trace-advanced-type-panel",
                            triggers: ".tab-title li",
                            panels: ".tab-content li",
                            eventType: "click"
                        }),
                        TraceAdvancedTab.addEvent("afterSwitch",
                            function(e, a) {
                                var n = this.getPanel(a).find(".trace-advanced-type-switch");
                                t.setAdvancedType(a),
                                    n.each(function() {
                                        if (this.checked) return t.setTypeTypeType($(this).parent().attr("data-type")),
                                            !1
                                    })
                            });
                    var a = new e.Hover({
                        triggers: "#J-trace-iswintimesstop-hover",
                        panels: "#chase-stop-tip-1",
                        currPanelClass: "chase-stop-tip-current",
                        hoverDelayOut: 300
                    });
                    $("#chase-stop-tip-1").mouseleave(function() {
                        a.hide()
                    });
                    var n = new e.Hover({
                        triggers: "#J-trace-iswinstop-hover",
                        panels: "#chase-stop-tip-2",
                        currPanelClass: "chase-stop-tip-current",
                        hoverDelayOut: 300
                    });
                    $("#chase-stop-tip-2").mouseleave(function() {
                        n.hide()
                    }),
                        $("#J-chase-stop-switch-1").click(function(e) {
                            e.preventDefault(),
                                $("#J-trace-iswintimesstop-panel").hide(),
                                $("#J-trace-iswinstop-panel").show(),
                                $("#J-trace-iswintimesstop").get(0).checked = !1,
                                $("#J-trace-iswinstop").get(0).checked = !0,
                                $("#J-trace-iswinstop-money").removeAttr("disabled"),
                                $("#J-trace-iswintimesstop-times").attr("disabled", "disabled")
                        }),
                        $("#J-chase-stop-switch-2").click(function(e) {
                            e.preventDefault(),
                                $("#J-trace-iswinstop-panel").hide(),
                                $("#J-trace-iswintimesstop-panel").show(),
                                $("#J-trace-iswintimesstop").get(0).checked = !0,
                                $("#J-trace-iswinstop").get(0).checked = !1,
                                $("#J-trace-iswinstop-money").attr("disabled", "disabled"),
                                $("#J-trace-iswintimesstop-times").removeAttr("disabled")
                        }),
                        $("#J-trace-iswinstop-money").keyup(function() {
                            this.value = s(this.value, 1, 999999)
                        }),
                        $("#J-trace-iswintimesstop-times").keyup(function() {
                            this.value = s(this.value, 1, 999999)
                        }),
                        $("#J-trace-iswintimesstop").click(function() {
                            var e = $("#J-trace-iswintimesstop-times");
                            this.checked ? e.attr("disabled", !1).focus() : e.attr("disabled", "disabled")
                        }),
                        $("#J-trace-iswinstop").click(function() {
                            var e = $("#J-trace-iswinstop-money");
                            this.checked ? e.attr("disabled", !1).focus() : e.attr("disabled", "disabled")
                        }),
                        $("#J-trace-normal-times").keyup(function() {
                            var e, a = l.getCurrentGame().getDynamicConfig().tracemaxtimes,
                                n = "" + this.value,
                                r = $("#J-function-select-tab").find(".function-select-title li"),
                                i = "current";
                            n = n.replace(/[^\d]/g, ""),
                                n = "" == n ? 1 : Number(n) > a ? a: n,
                                this.value = n,
                                e = Number(n),
                            e > 0 && e <= 20 && e % 5 == 0 && r.removeClass(i).eq(e / 5 - 1).addClass(i),
                                t.buildDetail()
                        }),
                        t.NormalSelectTimesTab = new e.Tab({
                            par: "#J-function-select-tab",
                            triggers: ".function-select-title li",
                            panels: ".function-select-panel li",
                            eventType: "click",
                            index: 1
                        }),
                        t.NormalSelectTimesTab.addEvent("beforeSwitch",
                            function(e, t) {
                                var a = this;
                                a.par.find("li").removeClass("current")
                            }),
                        t.NormalSelectTimesTab.addEvent("afterSwitch",
                            function(e, a) {
                                var n = this,
                                    r = parseInt(n.getTrigger(a).text());
                                $("#J-trace-normal-times").val(r),
                                    t.buildDetail()
                            }),
                        t.normalSelectMultiple = new e.Select({
                            realDom: "#J-trace-normal-multiple",
                            isInput: !0,
                            expands: {
                                inputEvent: function() {
                                    var e = this;
                                    e.getInput().keyup(function(t) {
                                        var a = this.value,
                                            n = 99999;
                                        this.value = this.value.replace(/[^\d]/g, ""),
                                            a = Number(this.value),
                                        a < 1 && (this.value = 1),
                                        a > n && (this.value = n),
                                            e.setValue(this.value)
                                    })
                                }
                            }
                        }),
                        t.normalSelectMultiple.addEvent("change",
                            function(e, a, n) {
                                var r = t.getOrderData().amount,
                                    i = Number(a),
                                    o = 9999999,
                                    s = l.getCurrentGameMessage(),
                                    c = "";
                                i > o ? (c = l.getCurrentGame().getGameConfig().getInstance().getTitleByName(maxObj.gameMethod).join("-"), s.show({
                                    confirmIsShow: !0,
                                    mask: !0,
                                    msg: "",
                                    tpl: '<div class="pop-waring"><i class="ico-waring &lt;#=icon-class#&gt;"></i><h4 class="pop-text"><#=msg#></h4></div>',
                                    data: {
                                        tplData: {
                                            msg: translate.MaxErrorMsg[0] + "<b>[" + c + "]</b> " + translate.MaxErrorMsg[1]
                                        }
                                    },
                                    confirmFun: function() {
                                        a = o,
                                            t.normalSelectMultiple.setValue(a),
                                            s.hide(),
                                            t.getTable().find(".trace-row-multiple").val(a),
                                            t.getTable().find(".trace-row-money").each(function() {
                                                var e = $(this);
                                                Number(e.parent().parent().find(".trace-row-multiple").val());
                                                e.html(t.formatMoney(r * Number(a)))
                                            }),
                                            t.updateStatistics()
                                    }
                                })) : (t.getTable().find(".trace-row-multiple").val(a), t.getTable().find(".trace-row-money").each(function() {
                                    var e = $(this);
                                    Number(e.parent().parent().find(".trace-row-multiple").val());
                                    e.html(t.formatMoney(r * Number(a)))
                                }), t.updateStatistics())
                            }),
                        t.panel.find(".chase-table").keyup(function(e) {
                            var a = $(e.target),
                                n = t.getOrderData().amount;
                            if (a.hasClass("trace-row-multiple")) {
                                var r = Number(c(a.val())),
                                    i = t.getRowTableType(),
                                    o = Number(l.getCurrentGameOrder().getOrderMaxMultiple().maxnum);
                                0 == r ? (a.val(a.val().replace(/^0/g, "")), t.updateStatistics()) : r > o ? a.val(o) : (a.parent().parent().find(".trace-row-money").html(t.formatMoney(n * r)), a.val(r), "trace_advanced_yingli_a" != i && "trace_advanced_yingli_b" != i && "trace_advanced_yinglilv_a" != i && "trace_advanced_yinglilv_b" != i || t.rebuildYinglilvRows(), t.updateStatistics())
                            }
                        }).on("blur", ".trace-row-multiple",
                            function(e) {
                                var a = $(e.target);
                                a.val(s(a.val(), 1, l.getCurrentGameOrder().getOrderMaxMultiple().maxnum)),
                                    t.updateStatistics()
                            }),
                        setTimeout(function() {
                                t.buildStartNumberSelectDom()
                            },
                            10),
                        $("#J-trace-advanced-times").keyup(function() {
                            this.value = s(this.value, 10, Number($("#J-trace-number-max").text()))
                        }),
                        $("#J-trace-advance-multiple").keyup(function(e) {
                            var t = $(e.target),
                                a = Number(c(t.val())),
                                n = Number(l.getCurrentGameOrder().getOrderMaxMultiple().maxnum);
                            0 == a ? t.val(t.val().replace(/^0/g, "")) : a > n ? t.val(n) : t.val(a)
                        }).blur(function() {
                            this.value = s(this.value, 1, l.getCurrentGameOrder().getOrderMaxMultiple().maxnum)
                        }),
                        t.panel.find(".trace-advanced-type-switch").click(function() {
                            var e, a = $(this),
                                n = a.parent(),
                                r = n.parent().children();
                            r.each(function(i) {
                                e = r.get(i),
                                    n.get(0) != e ? $(e).find('input[type="text"]').attr("disabled", "disabled") : ($(e).find('input[type="text"]').attr("disabled", !1).eq(0).focus(), t.setTypeTypeType(n.attr("data-type"))),
                                    a.parent().hasClass("trace-input-multiple") ? this.value = s(this.value, 1, l.getCurrentGameOrder().getOrderMaxMultiple().maxnum) : this.value = s(this.value, 1, 99999999)
                            })
                        }),
                        $("#J-trace-advanced-type-panel").on("keyup", "input[type=text]",
                            function(e) {
                                var t = $(e.target);
                                t.hasClass("trace-input-multiple") ? this.value = s(this.value, 1, l.getCurrentGameOrder().getOrderMaxMultiple().maxnum) : this.value = s(this.value, 1, 99999999)
                            }),
                        $("#J-trace-builddetail").click(function() {
                            t.confirmSetting()
                        }),
                        t.panel.find(".chase-table").click(function(e) {
                            var a, n = $(e.target),
                                r = $.trim(n.attr("data-action")),
                                i = !0;
                            if (r && "" != r) switch (r) {
                                case "checkedAll":
                                    i = !!n.get(0).checked,
                                        a = t.getRowTableType(),
                                        t.getTable().find(".trace-row-checked").each(function() {
                                            this.checked = i
                                        }),
                                    "trace_advanced_yingli_a" != a && "trace_advanced_yingli_b" != a && "trace_advanced_yinglilv_a" != a && "trace_advanced_yinglilv_b" != a || t.rebuildYinglilvRows(),
                                        t.updateStatistics();
                                    break;
                                case "checkedRow":
                                    n.size() > 0 && (a = t.getRowTableType(), "trace_advanced_yingli_a" != a && "trace_advanced_yingli_b" != a && "trace_advanced_yinglilv_a" != a && "trace_advanced_yinglilv_b" != a || t.rebuildYinglilvRows(), t.updateStatistics())
                            }
                        })
                },
                buildStartNumberSelectDom: function() {
                    var t, a = this,
                        n = l.getCurrentGame().getDynamicConfig().gamenumbers,
                        r = n.length,
                        i = 0,
                        o = [],
                        s = l.getCurrentGame().getCurrentNumber(),
                        c = "(" + translate["当前期"] + ")",
                        u = c,
                        m = "";
                    for (a.traceStartNumberSelect && a.traceStartNumberSelect.getValue && (t = a.traceStartNumberSelect.getValue()); i < r; i++) u = s == n[i].number ? c: "",
                        m = a.traceStartNumberSelect && n[i].number == t ? ' selected="selected" ': "",
                        o.push('<option value="' + n[i].number + '" ' + m + " >" + n[i].number + u + "</option>");
                    $("#J-traceStartNumber").html(o.join("")),
                        $("#J-trace-number-max").text(r),
                    a.traceStartNumberSelect && a.traceStartNumberSelect.dom.remove(),
                        a.traceStartNumberSelect = new e.Select({
                            realDom: "#J-traceStartNumber",
                            cls: "chase-trace-startNumber-select"
                        }),
                        a.traceStartNumberSelect.addEvent("change",
                            function(e, t, n) {
                                a.setTraceStartNumber(t)
                            })
                },
                updateTableNumber: function() {
                    var e, t, a, n, r, i, o, s, c = this,
                        u = l.getCurrentGame().getDynamicConfig().gamenumbers,
                        m = u.length,
                        d = l.getCurrentGame().getCurrentNumber(),
                        p = "",
                        g = "",
                        f = '<span class="icon-period-current"></span>';
                    m > 0 && (e = c.getNormalRowTable().find("tr"), t = c.getAdvancedRowTable().find("tr"), o = c.getStartNumberIndexByNumber(a), e.each(function(e) {
                        return 0 == e || (n = $(this), r = n.find(".trace-row-number"), i = n.find(".trace-row-time"), multipleDom = n.find(".trace-row-multiple"), a = r.text().replace(/[^\d]/g, ""), s = n.find(".text-center"), n.find(".trace-row-multiple").removeAttr("disabled"), void(o + 1 < m && (p = u[o + 1].number == d ? f: "", r.html(u[o + 1].number + p), multipleDom.text("1"), i.text(u[o + 1].time), s.html("").html(e), g != r.text().substr(0, 8) && "" != g && s.html("").append('<div class="icon-chase-mark">' + translate.Tomorrow + " " + n.find(".trace-row-number").text().substr(0, 8) + "</div>"), g = r.text().substr(0, 8), o++)))
                    }), o = c.getStartNumberIndexByNumber(a), t.each(function(e) {
                        return 0 == e || (n = $(this), r = n.find(".trace-row-number"), i = n.find(".trace-row-time"), multipleDom = n.find(".trace-row-multiple"), a = r.text().replace(/[^\d]/g, ""), s = n.find(".text-center"), n.find(".trace-row-multiple").removeAttr("disabled"), void(o + 1 < m && (p = u[o + 1].number == d ? f: "", r.html(u[o + 1].number + p), multipleDom.text("1"), i.text(u[o + 1].time), s.html("").html(e), g != r.text().substr(0, 8) && "" != g && s.html("").append('<div class="icon-chase-mark">' + translate.Tomorrow + " " + n.find(".trace-row-number").text().substr(0, 8) + "</div>"), g = r.text().substr(0, 8), o++)))
                    }))
                },
                rebuildYinglilvRows: function() {
                    var e = this,
                        t = e.getRowTable().find("tr"),
                        a = e.getOrderData(),
                        n = e.getWinMoney(),
                        r = null,
                        i = null,
                        o = null,
                        l = 1,
                        s = null,
                        c = 0,
                        u = null,
                        m = null,
                        d = null,
                        p = -1;
                    costAmount = 0,
                        t.each(function(t) {
                            t > 0 && (r = $(this), i = r.find(".trace-row-checked"), i.size() > 0 && i.get(0).checked && (o = r.find(".trace-row-multiple"), l = Number(o.val()) || 1, s = r.find(".trace-row-money"), c = Number(s.text().replace(",", "")), u = r.find(".trace-row-userGroupMoney"), m = r.find(".trace-row-winTotalAmount"), d = r.find(".trace-row-yinglilv"), costAmount += a.amount * l, s.text(e.formatMoney(a.amount * l)), u.text(e.formatMoney(n * l)), m.text(e.formatMoney(n * l - costAmount)), p = (n * l - costAmount) / costAmount * 100, d.text(Number(p).toFixed(2))))
                        })
                },
                isOpen: function() {
                    return this.isOpenPanel
                },
                setTypeTypeType: function(e) {
                    this.typeTypeType = e
                },
                getTypeTypeType: function() {
                    return this.typeTypeType
                },
                getIsWinStop: function() {
                    var e = $("#J-trace-iswintimesstop"),
                        t = $("#J-trace-iswinstop");
                    return e.prop("checked") ? 1 : t.prop("checked") ? 2 : 0
                },
                getTraceWinStopValue: function() {
                    var e = this,
                        t = e.getIsWinStop();
                    return 1 == t ? Number($("#J-trace-iswintimesstop-times").val()) : 2 == t ? Number($("#J-trace-iswinstop-money").val()) : -1
                },
                updateStatistics: function() {
                    var e = this,
                        t = e.getResultData();
                    $("#J-trace-statistics-times").html(t.times),
                        $("#J-trace-statistics-lotterys-num").html(t.lotterysNum),
                        $("#J-trace-statistics-amount").html(e.formatMoney(t.amount))
                },
                getResultData: function() {
                    var e, t, a, n, r, i = this,
                        o = i.getOrderData(),
                        s = i.getRowTable().find("tr"),
                        c = 0,
                        u = 0,
                        m = 0,
                        d = [],
                        p = {
                            times: 0,
                            lotterysNum: 0,
                            amount: 0,
                            orderData: o,
                            traceData: [],
                            traceType: i.getTraceType()
                        },
                        g = "",
                        f = l.getCurrentGame().getDynamicConfig().gamenumbers;
                    return s.each(function(l) {
                        e = $(this),
                            t = e.find(".trace-row-checked"),
                            tracenumber = e.find(".trace-row-number"),
                            traceNo = e.find(".text-center"),
                        0 != l && traceNo.html("").html(l),
                            t.size() > 0 && t.get(0).checked ? (a = t.parent(), r = i.getStartNumberIndexByNumber(a.find(".trace-row-number").text()), r = r == -1 ? 0 : r, n = f[r].issueCode, e.find(".trace-row-multiple").removeAttr("disabled"), "0" == e.find(".trace-row-multiple").val() && (e.find(".trace-row-multiple").val("1"), e.find(".trace-row-money").text(i.formatMoney(1 * o.amount))), d.push({
                                traceNumber: a.find(".trace-row-number").text(),
                                issueCode: n,
                                multiple: Number(a.parent().find(".trace-row-multiple").val())
                            }), c++, m += 1e3 * Number(e.find(".trace-row-money").text().replace(/,/g, ""))) : (e.find(".trace-row-money").text("0"), e.find(".trace-row-multiple").val("0"), e.find(".trace-row-multiple").attr("disabled", "disabled").css("border", "1px solid #CECECE")),
                        g != tracenumber.text().substr(0, 8) && "" != g && traceNo.html("").append('<div class="icon-chase-mark">' + translate.Tomorrow + " " + e.find(".trace-row-number").text().substr(0, 8) + "</div>"),
                            g = tracenumber.text().substr(0, 8)
                    }),
                    o && (u = c * o.count, p = {
                        times: c,
                        lotterysNum: u,
                        amount: Number(m) / 1e3,
                        orderData: o,
                        traceData: d,
                        traceType: i.getTraceType()
                    }),
                        p
                },
                updateOrder: function(e) {
                    var t = this,
                        a = l.getCurrentGameOrder().getTotal(),
                        n = t.getRowTableType(),
                        r = l.getCurrentGameOrder().getOrderMaxMultiple(),
                        i = r.maxnum,
                        o = Number(t.normalSelectMultiple.getValue()),
                        s = Number($("#J-trace-advance-multiple").val());
                    t.setOrderData(a),
                    o > i && t.normalSelectMultiple.setValue(i),
                    s > i && $("#J-trace-advance-multiple").val(i),
                    e || "trace_advanced_fanbei_a" != n && "trace_advanced_fanbei_b" != n && "trace_advanced_yingli_a" != n && "trace_advanced_yingli_b" != n && "trace_advanced_yinglilv_a" != n && "trace_advanced_yinglilv_b" != n || l.getCurrentGameMessage().show({
                        type: "normal",
                        closeFun: function() {
                            this.hide()
                        },
                        data: {
                            tplData: {
                                msg: translate.ChasingMsg
                            }
                        }
                    }),
                        t.getAdvancedRowTable().html(""),
                        t.updateDetail(a.amount),
                        t.updateStatistics()
                },
                updateDetail: function(e) {
                    var t, a = this,
                        n = a.getTable().find("tr"),
                        r = null,
                        i = a.getRowTableType();
                    "trace_advanced_yingli_a" == i || "trace_advanced_yingli_b" == i || "trace_advanced_yinglilv_a" == i || "trace_advanced_yinglilv_b" == i ? a.rebuildYinglilvRows() : (t = a.getAdvancedRowTable().attr("data-type"), "trace_advanced_fanbei_a" != t && "trace_advanced_fanbei_b" != t || (n = a.getAdvancedTable().find("tr"), n.each(function() {
                        r = $(this),
                            rowMoney = r.find(".trace-row-money"),
                            rowMultiple = Number(r.find(".trace-row-multiple").val()),
                            rowMoney.text(a.formatMoney(rowMultiple * e))
                    }))),
                        n = a.getNormalTable().find("tr"),
                        n.each(function() {
                            r = $(this),
                                rowMoney = r.find(".trace-row-money"),
                                rowMultiple = Number(r.find(".trace-row-multiple").val()),
                                rowMoney.text(a.formatMoney(rowMultiple * e))
                        })
                },
                getWinMoney: function() {
                    for (var e = this,
                             t = e.getOrderData().orders, a = 0, n = t.length, r = 0; a < n; a++) r += e.getPlayGroupMoneyByGameMethodName(t[a].type) * t[a].moneyUnit;
                    return r
                },
                confirmSetting: function() {
                    var e = this;
                    e.setOrderData(l.getCurrentGameOrder().getTotal()),
                        e.buildDetail()
                },
                isSameGameMethod: function() {
                    var e = this,
                        t = e.getOrderData().orders,
                        a = "",
                        n = -1;
                    for (i = 0, len = t.length; i < len; i++) {
                        if ("" != a) {
                            if (a != t[i].type) return ! 1
                        } else a = t[i].type;
                        if (n != -1) {
                            if (n != t[i].moneyUnit) return ! 1
                        } else n = t[i].moneyUnit
                    }
                    return ! 0
                },
                getSameGameMethodName: function() {
                    var e = this,
                        t = e.getOrderData().orders;
                    if (t.length > 0) return t[0].type
                },
                getSameGameMoneyUnti: function() {
                    var e = this,
                        t = e.getOrderData().orders;
                    if (t.length > 0) return t[0].moneyUnit
                },
                setOrderData: function(e) {
                    this.orderData = e
                },
                getOrderData: function() {
                    return null == this.orderData ? {
                        count: 0,
                        amount: 0,
                        orders: []
                    }: this.orderData
                },
                getStartNumberIndexByNumber: function(e) {
                    for (var t = l.getCurrentGame().getDynamicConfig().gamenumbers, a = t.length, n = 0; n < a; n++) if (t[n].number == e) return n;
                    return - 1
                },
                getStartNumberByIndex: function(e) {
                    var t = l.getCurrentGame().getDynamicConfig().gamenumbers;
                    return t.length > e ? t[e] : {}
                },
                buildDetail: function() {
                    var e = this,
                        t = e.getTraceType(),
                        a = l.getCurrentGameMessage();
                    return e.setOrderData(l.getCurrentGameOrder().getTotal()),
                        orderAmount = e.getOrderData().amount,
                        "normal" != t && orderAmount <= 0 ? void a.show({
                            type: "mustChoose",
                            msg: translate.SelectOne,
                            data: {
                                tplData: {
                                    msg: translate.SelectOne
                                }
                            }
                        }) : ($.isFunction(e["trace_" + t]) && e["trace_" + t].call(e), void e.updateStatistics())
                },
                trace_normal: function() {
                    var e, t, a, n = this,
                        r = n.defConfig,
                        i = r.dataRowTemplate,
                        o = [],
                        s = (n.getTraceType(), n.getTimes()),
                        c = n.getMultiple(),
                        u = (l.getCurrentGameOrder().getOrderMaxMultiple().maxnum, 0),
                        m = 0,
                        d = l.getCurrentGame().getCurrentNumber(),
                        p = '<span class="icon-period-current"></span>',
                        g = "",
                        f = n.traceStartNumberSelect.getValue();
                    l.getCurrentGame().getDynamicConfig().gamenumbers.length;
                    for (n.setOrderData(l.getCurrentGameOrder().getTotal()), u = n.getOrderData().amount, o.push(r.dataRowHeader), e = n.getStartNumberIndexByNumber(f), m = e, s += m; m < s; m++) t = n.getStartNumberByIndex(m),
                        g = t.number,
                    g == d && (g += p),
                    t.number && (a = {
                        No: m + 1,
                        traceNumber: g,
                        multiple: c,
                        money: n.formatMoney(u * c),
                        publishTime: t.time
                    },
                        o.push(n.formatRow(i, a)));
                    n.getRowTable().html(o.join("")),
                        n.getRowTable().attr("data-type", "trace_normal")
                },
                trace_advanced: function() {
                    var e = this,
                        t = e.getTraceType(),
                        a = e.getAdvancedType(),
                        n = e.getTypeTypeType(),
                        r = "trace_" + t + "_" + a + "_" + n;
                    return e.isSameGameMethod() || "yingli" != a && "yinglilv" != a ? ($.isFunction(e[r]) && e[r](), void e.getRowTable().attr("data-type", r)) : void l.getCurrentGameMessage().show({
                        type: "mustChoose",
                        msg: "",
                        data: {
                            tplData: {
                                msg: translate.SamePlay
                            }
                        }
                    })
                },
                trace_advanced_fanbei_a: function(e) {
                    var t, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        o = [],
                        s = r.getTimes(),
                        c = l.getCurrentGameOrder().getOrderMaxMultiple(),
                        u = e || c.maxnum,
                        m = l.getCurrentGame().getGameConfig().getInstance().getTitleByName(c.gameMethod).join("-"),
                        d = Number($("#J-trace-advanced-fanbei-a-jiange").val()),
                        p = r.getMultiple(),
                        g = p,
                        f = Number($("#J-trace-advanced-fanbei-a-multiple").val()),
                        h = 0,
                        v = d,
                        y = l.getCurrentGame().getCurrentNumber(),
                        b = '<span class="icon-period-current"></span>',
                        C = "",
                        T = r.traceStartNumberSelect.getValue(),
                        D = (l.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        w = "";
                    for (o.push(r.defConfig.dataRowHeader), t = r.getStartNumberIndexByNumber(T), h = t, s += h, a = r.getStartNumberByIndex(h); h < s; h++) {
                        if (v <= 0 && (v = d, g *= f), v--, g > u && (l.getCurrentGameMessage().show({
                                type: "normal",
                                closeText: translate.Comfirm,
                                closeFun: function() {
                                    r.trace_advanced_fanbei_a(u),
                                        this.hide()
                                },
                                data: {
                                    tplData: {
                                        msg: translate.MaxMultipleMsg[0] + "<b>[" + m + "]</b>" + translate.MaxMultipleMsg[1]
                                    }
                                }
                            }), !e)) return;
                        if (g = g > u ? u: g, a = r.getStartNumberByIndex(h), !a.number) break;
                        C = a.number,
                        C == y && (C += b),
                            w = D != C.substr(0, 8) && "" != D ? '<div class="icon-chase-mark">' + translate.Tomorrow + " " + C.substr(0, 8) + "</div>": h + 1,
                            n = {
                                No: w,
                                traceNumber: C,
                                multiple: g,
                                money: r.formatMoney(orderAmount * g),
                                publishTime: a.time
                            },
                            D = C.substr(0, 8),
                            o.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(o.join(""))
                },
                trace_advanced_fanbei_b: function() {
                    var e, t, a, n = this,
                        r = n.defConfig.dataRowTemplate,
                        i = [],
                        o = n.getTimes(),
                        s = l.getCurrentGameOrder().getOrderMaxMultiple().maxnum,
                        c = (Number($("#J-trace-advanced-fanbei-a-jiange").val()), n.getMultiple(), 1),
                        u = (Number($("#J-trace-advanced-fanbei-a-multiple").val()), 0),
                        m = Number($("#J-trace-advanced-fanbei-b-num").val()),
                        d = Number($("#J-trace-advance-multiple").val()),
                        p = Number($("#J-trace-advanced-fanbei-b-multiple").val()),
                        g = l.getCurrentGame().getCurrentNumber(),
                        f = '<span class="icon-period-current"></span>',
                        h = "",
                        v = n.traceStartNumberSelect.getValue(),
                        y = (l.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        b = "";
                    for (i.push(n.defConfig.dataRowHeader), e = n.getStartNumberIndexByNumber(v), u = e, o += u, t = n.getStartNumberByIndex(u); u < o && (c = u < m + e ? d > s ? s: d: p > s ? s: p, t = n.getStartNumberByIndex(u), t.number); u++) h = t.number,
                    h == g && (h += f),
                        b = y != h.substr(0, 8) && "" != y ? '<div class="icon-chase-mark">' + translate.Tomorrow + " " + h.substr(0, 8) + "</div>": u + 1,
                        a = {
                            No: b,
                            traceNumber: h,
                            multiple: c,
                            money: n.formatMoney(orderAmount * c),
                            publishTime: t.time
                        },
                        y = h.substr(0, 8),
                        i.push(n.formatRow(r, a));
                    n.getRowTable().html(i.join(""))
                },
                trace_advanced_yingli_a: function(e) {
                    var t, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        o = [],
                        s = r.getTimes(),
                        c = l.getCurrentGameOrder().getOrderMaxMultiple(),
                        u = e || c.maxnum,
                        m = l.getCurrentGame().getGameConfig().getInstance().getTitleByName(c.gameMethod).join("-"),
                        d = r.getMultiple(),
                        p = 0,
                        g = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yingli-a-money").val())),
                        f = r.getSameGameMoneyUnti(),
                        h = r.getWinMoney(),
                        v = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        y = r.getOrderData().orders,
                        b = 0,
                        C = 0,
                        T = 0,
                        D = 0,
                        w = l.getCurrentGame().getCurrentNumber(),
                        M = '<span class="icon-period-current"></span>',
                        x = "",
                        S = r.traceStartNumberSelect.getValue(),
                        G = (l.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        N = "";
                    for (o.push(r.defConfig.dataRowYingliHeader), t = r.getStartNumberIndexByNumber(S), p = t, s += p, a = r.getStartNumberByIndex(p); p < s; p++) {
                        if (b = 0, T = 0, v = 1, $.each(y,
                                function(e) {
                                    var t = this,
                                        a = t.num,
                                        n = t.onePrice,
                                        r = t.multiple,
                                        i = a * r * n * f,
                                        o = h * r;
                                    T += o,
                                        b += i
                                }), v = r.getMultipleByMoney(h, g, b, C, d), v < 0) return void l.getCurrentGameMessage().show({
                            type: "normal",
                            closeText: translate.Comfirm,
                            closeFun: function() {
                                this.hide()
                            },
                            data: {
                                tplData: {
                                    msg: translate.TargetMsg
                                }
                            }
                        });
                        if (v > u) {
                            if (l.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yingli_a(u),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[0] + "<b>[" + m + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !e) return;
                            v = e
                        }
                        if (b *= v, C += b, T = h * v - C, D = T / C, a = r.getStartNumberByIndex(p), !a.number) break;
                        x = a.number,
                        x == w && (x += M),
                            N = G != x.substr(0, 8) && "" != G ? '<div class="icon-chase-mark">' + translate.Tomorrow + " " + x.substr(0, 8) + "</div>": p + 1,
                            n = {
                                No: N,
                                traceNumber: x,
                                multiple: v,
                                money: r.formatMoney(b),
                                userGroupMoney: r.formatMoney(h * v),
                                winTotalAmout: r.formatMoney(T),
                                yinglilv: Number(100 * D).toFixed(2)
                            },
                            G = x.substr(0, 8),
                            o.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(o.join(""))
                },
                trace_advanced_yingli_b: function(e) {
                    var t, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        o = [],
                        s = r.getTimes(),
                        c = l.getCurrentGameOrder().getOrderMaxMultiple(),
                        u = e || c.maxnum,
                        m = l.getCurrentGame().getGameConfig().getInstance().getTitleByName(c.gameMethod).join("-"),
                        d = r.getMultiple(),
                        p = 0,
                        g = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yingli-b-num").val())),
                        f = Number($("#J-trace-advanced-yingli-b-money1").val()),
                        h = Number($("#J-trace-advanced-yingli-b-money2").val()),
                        v = r.getSameGameMoneyUnti(),
                        y = r.getWinMoney(),
                        b = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        C = r.getOrderData().orders,
                        T = 0,
                        D = 0,
                        w = 0,
                        M = 0,
                        x = l.getCurrentGame().getCurrentNumber(),
                        S = '<span class="icon-period-current"></span>',
                        G = "",
                        N = r.traceStartNumberSelect.getValue(),
                        _ = (l.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        k = "";
                    for (o.push(r.defConfig.dataRowYingliHeader), t = r.getStartNumberIndexByNumber(N), p = t, s += p, a = r.getStartNumberByIndex(p); p < s; p++) {
                        if (p + 1 > g + t && (f = h), T = 0, w = 0, b = 1, $.each(C,
                                function(e) {
                                    var t = this,
                                        a = t.num,
                                        n = t.onePrice,
                                        r = t.multiple,
                                        i = a * r * n * v,
                                        o = y * r;
                                    w += o,
                                        T += i
                                }), b = r.getMultipleByMoney(y, f, T, D, d), b < 0) return void l.getCurrentGameMessage().show({
                            type: "normal",
                            closeText: translate.Comfirm,
                            closeFun: function() {
                                this.hide()
                            },
                            data: {
                                tplData: {
                                    msg: translate.TargetMsg
                                }
                            }
                        });
                        if (b > u) {
                            if (l.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yingli_b(u),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[2] + "<b>[" + m + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !e) return;
                            b = e
                        }
                        if (T *= b, D += T, w = y * b - D, M = w / D, a = r.getStartNumberByIndex(p), !a.number) break;
                        G = a.number,
                        G == x && (G += S),
                            k = _ != G.substr(0, 8) && "" != _ ? '<div class="icon-chase-mark">' + translate.Tomorrow + " " + G.substr(0, 8) + "</div>": p + 1,
                            n = {
                                No: k,
                                traceNumber: G,
                                multiple: b,
                                money: r.formatMoney(T),
                                userGroupMoney: r.formatMoney(y * b),
                                winTotalAmout: r.formatMoney(w),
                                yinglilv: Number(100 * M).toFixed(2)
                            },
                            _ = G.substr(0, 8),
                            o.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(o.join(""))
                },
                trace_advanced_yinglilv_a: function(e) {
                    var t, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        o = [],
                        s = r.getTimes(),
                        c = l.getCurrentGameOrder().getOrderMaxMultiple(),
                        u = e || c.maxnum,
                        m = l.getCurrentGame().getGameConfig().getInstance().getTitleByName(c.gameMethod).join("-"),
                        d = r.getMultiple(),
                        p = 0,
                        g = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yinglilv-a").val()) / 100),
                        f = r.getSameGameMoneyUnti(),
                        h = r.getWinMoney(),
                        v = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        y = r.getOrderData().orders,
                        b = 0,
                        C = 0,
                        T = 0,
                        D = l.getCurrentGame().getCurrentNumber(),
                        w = '<span class="icon-period-current"></span>',
                        M = "",
                        x = r.traceStartNumberSelect.getValue(),
                        S = (l.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        G = "";
                    for (o.push(r.defConfig.dataRowYingliHeader), t = r.getStartNumberIndexByNumber(x), p = t, s += p, a = r.getStartNumberByIndex(p); p < s; p++) {
                        if (b = 0, T = 0, v = 1, $.each(y,
                                function(e) {
                                    var t = this,
                                        a = t.num,
                                        n = t.onePrice,
                                        r = t.multiple,
                                        i = a * r * n * f,
                                        o = h * r;
                                    T += o,
                                        b += i
                                }), v = r.getMultipleByYinglilv(g, h, b, C, d), v < 0) return void l.getCurrentGameMessage().show({
                            type: "normal",
                            closeText: translate.Comfirm,
                            closeFun: function() {
                                this.hide()
                            },
                            data: {
                                tplData: {
                                    msg: translate.TargetMsg2
                                }
                            }
                        });
                        if (v > u) {
                            if (l.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yinglilv_a(u),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[2] + "<b>[" + m + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !e) return;
                            v = e
                        }
                        if (b *= v, C += b, T = h * v - C, a = r.getStartNumberByIndex(p), !a.number) break;
                        M = a.number,
                        M == D && (M += w),
                            G = S != M.substr(0, 8) && "" != S ? '<div class="icon-chase-mark">' + translate.Tomorrow + " " + M.substr(0, 8) + "</div>": p + 1,
                            n = {
                                No: G,
                                traceNumber: M,
                                multiple: v,
                                money: r.formatMoney(b),
                                userGroupMoney: r.formatMoney(h * v),
                                winTotalAmout: r.formatMoney(T),
                                yinglilv: Number(T / C * 100).toFixed(2)
                            },
                            o.push(r.formatRow(i, n))
                    }
                    S = M.substr(0, 8),
                        r.getRowTable().html(o.join(""))
                },
                trace_advanced_yinglilv_b: function(e) {
                    var t, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        o = [],
                        s = r.getTimes(),
                        c = l.getCurrentGameOrder().getOrderMaxMultiple(),
                        u = e || c.maxnum,
                        m = l.getCurrentGame().getGameConfig().getInstance().getTitleByName(c.gameMethod).join("-"),
                        d = r.getMultiple(),
                        p = 0,
                        g = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yinglilv-b-num").val())),
                        f = Number($("#J-trace-advanced-yingli-b-yinglilv1").val()) / 100,
                        h = Number($("#J-trace-advanced-yingli-b-yinglilv2").val()) / 100,
                        v = 0,
                        y = r.getSameGameMoneyUnti(),
                        b = r.getWinMoney(),
                        C = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        T = r.getOrderData().orders,
                        D = 0,
                        w = 0,
                        M = 0,
                        x = l.getCurrentGame().getCurrentNumber(),
                        S = '<span class="icon-period-current"></span>',
                        G = "",
                        N = r.traceStartNumberSelect.getValue(),
                        _ = (l.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        k = "";
                    for (o.push(r.defConfig.dataRowYingliHeader), t = r.getStartNumberIndexByNumber(N), p = t, s += p, a = r.getStartNumberByIndex(p); p < s; p++) {
                        if (D = 0, M = 0, C = 1, $.each(T,
                                function(e) {
                                    var t = this,
                                        a = t.num,
                                        n = t.onePrice,
                                        r = t.multiple,
                                        i = a * r * n * y,
                                        o = a * b * r;
                                    M += o,
                                        D += i
                                }), v = p < g + t ? f: h, C = r.getMultipleByYinglilv(v, b, D, w, d), C < 0) return void l.getCurrentGameMessage().show({
                            type: "normal",
                            closeText: translate.Comfirm,
                            closeFun: function() {
                                this.hide()
                            },
                            data: {
                                tplData: {
                                    msg: translate.TargetMsg2
                                }
                            }
                        });
                        if (C > u) {
                            if (l.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yinglilv_a(u),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[2] + "<b>[" + m + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !e) return;
                            C = e
                        }
                        if (D *= C, w += D, M = b * C - w, a = r.getStartNumberByIndex(p), !a.number) break;
                        G = a.number,
                        G == x && (G += S),
                            k = _ != G.substr(0, 8) && "" != _ ? '<div class="icon-chase-mark">' + translate.Tomorrow + " " + G.substr(0, 8) + "</div>": p + 1,
                            n = {
                                No: k,
                                traceNumber: G,
                                multiple: C,
                                money: r.formatMoney(D),
                                userGroupMoney: r.formatMoney(b * C),
                                winTotalAmout: r.formatMoney(M),
                                yinglilv: Number(M / w * 100).toFixed(2)
                            },
                            _ = G.substr(0, 8),
                            o.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(o.join(""))
                },
                getMultipleByYinglilv: function(e, t, a, n, r) {
                    for (var i = r || 1,
                             o = 1e5; i < o; i++) if ((t * i - a * i - n) / (a * i + n) >= e) return i;
                    return - 1
                },
                getMultipleByMoney: function(e, t, a, n, r) {
                    for (var i = r || 1,
                             o = 1e5; i < o; i++) if (e * i - n - a * i > t) return i;
                    return - 1
                },
                getPlayGroupMoneyByGameMethodName: function(e) {
                    return Number(l.getCurrentGame().getDynamicConfig().gamelimit[0][e].usergroupmoney)
                },
                formatRow: function(e, t) {
                    var a, n, r = t;
                    for (a in r) r.hasOwnProperty(a) && (n = RegExp("<#=" + a + "#>", "g"), e = e.replace(n, r[a]));
                    return e
                },
                formatMoney: function(e) {
                    var e = Number(e),
                        t = /(-?\d+)(^\d{3}\.)/;
                    for (e = Number.prototype.toFixed ? e.toFixed(4) : Math.round(100 * e) / 100, e = "" + e; t.test(e);) e = e.replace(t, "$1,$2");
                    return e
                },
                getAdvancedTable: function() {
                    var e = this;
                    return e._advancedTable || (e._advancedTable = $("#J-trace-table-advanced"))
                },
                getAdvancedRowTable: function() {
                    var e = this;
                    return e._advancedTableContainer || (e._advancedTableContainer = $("#J-trace-table-advanced-body"))
                },
                getNormalTable: function() {
                    var e = this;
                    return e._table || (e._table = $("#J-trace-table"))
                },
                getNormalRowTable: function() {
                    var e = this;
                    return e._tableContainer || (e._tableContainer = $("#J-trace-table-body"))
                },
                getTable: function() {
                    var e = this;
                    return e.isAdvanced() ? e._advancedTable || (e._advancedTable = $("#J-trace-table-advanced")) : e._table || (e._table = $("#J-trace-table"))
                },
                getRowTable: function() {
                    var e = this;
                    return e.isAdvanced() ? e._advancedTableContainer || (e._advancedTableContainer = $("#J-trace-table-advanced-body")) : e._tableContainer || (e._tableContainer = $("#J-trace-table-body"))
                },
                setCurrentTraceNumber: function(e) {
                    var t = this;
                    t.currentTraceNumber = e
                },
                getCurrentTraceNumber: function() {
                    return me.currentTraceNumber
                },
                setTraceStartNumber: function(e) {
                    var t = this;
                    t.traceStartNumber = e
                },
                getTraceStartNumber: function() {
                    return me.traceStartNumber
                },
                getMultiple: function() {
                    var e = this;
                    return e.isAdvanced() ? e.getAdvancedMultiple() : e.getNormalMultiple()
                },
                getNormalMultiple: function() {
                    return Number(this.normalSelectMultiple.getValue())
                },
                getAdvancedMultiple: function() {
                    return Number($("#J-trace-advance-multiple").val())
                },
                setIsWinStop: function(e) {
                    this.isWinStop = !!e
                },
                getTimes: function() {
                    var e = this;
                    return e.isAdvanced() ? e.getAdvancedTimes() : Number($("#J-trace-normal-times").val())
                },
                getAdvancedTimes: function() {
                    return Number($("#J-trace-advanced-times").val())
                },
                isAdvanced: function() {
                    var e = this;
                    return "advanced" == e.traceType
                },
                setTraceType: function(e) {
                    var t = this;
                    e != t.traceType && (e = e ? e: "normal", t.traceType = e)
                },
                getTraceType: function() {
                    return this.traceType
                },
                getRowTableType: function() {
                    var e = this;
                    return e.getRowTable().attr("data-type")
                },
                emptyRowTable: function() {
                    var e = this;
                    $("#J-trace-table-body").html(""),
                        $("#J-trace-table-advanced-body").html(""),
                        e.updateStatistics()
                },
                show: function() {
                    var e = this;
                    l.getCurrentGameOrder().editMultiples(1),
                        e.setOrderData(l.getCurrentGameOrder().getTotal()),
                        $(".amount").hide(),
                        l.getCurrentGameStatistics().getMultipleDom().hide(),
                        l.getCurrentGameStatistics().getMultipleTextDom().show(),
                        e.panel.show(),
                        e.isOpenPanel = !0,
                        e.buildDetail()
                },
                hide: function() {
                    var e = this;
                    l.getCurrentGameOrder().restoreMultiples(),
                        $(".amount").show(),
                        l.getCurrentGameStatistics().getMultipleDom().show(),
                        l.getCurrentGameStatistics().getMultipleTextDom().hide(),
                        e.panel.hide(),
                        e.isOpenPanel = !1,
                        e.reSetTab(),
                        e.emptyRowTable(),
                        $("#J-trace-switch").get(0).checked = !1
                },
                reSetTab: function() {
                    var e = this,
                        t = e.TraceTab,
                        a = e.TraceAdvancedTab,
                        n = e.NormalSelectTimesTab;
                    t.triggers.removeClass(t.defConfig.currClass),
                        t.triggers.eq(0).addClass(t.defConfig.currClass),
                        t.panels.removeClass(t.defConfig.currPanelClass),
                        t.panels.eq(0).addClass(t.defConfig.currPanelClass),
                        t.index = 0,
                        a.triggers.removeClass(a.defConfig.currClass),
                        a.triggers.eq(0).addClass(a.defConfig.currClass),
                        a.panels.removeClass(a.defConfig.currPanelClass),
                        a.panels.eq(0).addClass(a.defConfig.currPanelClass),
                        a.index = 0,
                        n.index = 1,
                        $("#J-trace-normal-times").val(10),
                        $("#J-function-select-tab .function-select-title li").removeClass("current").eq(1).addClass("current"),
                        e.normalSelectMultiple.setValue(1),
                        $("#J-trace-advanced-times").val(10),
                        $("#J-trace-advance-multiple").val(1),
                        $("#J-trace-advanced-fanbei-a-jiange").val(2),
                        $("#J-trace-advanced-fanbei-a-multiple").val(2),
                        $("#J-trace-advanced-fanbei-b-num").val(5),
                        $("#J-trace-advanced-fanbei-b-multiple").val(3),
                        $("#J-trace-advanced-yingli-a-money").val(100),
                        $("#J-trace-advanced-yingli-b-num").val(2),
                        $("#J-trace-advanced-yingli-b-money1").val(100),
                        $("#J-trace-advanced-yingli-b-money2").val(50),
                        $("#J-trace-advanced-yinglilv-a").val(10),
                        $("#J-trace-advanced-yinglilv-b-num").val(5),
                        $("#J-trace-advanced-yingli-b-yinglilv1").val(30),
                        $("#J-trace-advanced-yingli-b-yinglilv2").val(10),
                        e.setTraceType("normal"),
                        e.advancedType = e.defConfig.advancedTypeHas[0],
                        e.typeTypeType = "a",
                        $("#J-trace-advanced-type-panel").find('input[type="radio"]').each(function(e) {
                            if ((e + 1) % 2 != 0) {
                                var t, a = $(this),
                                    n = a.parent(),
                                    r = n.parent().children();
                                this.checked = !0,
                                    r.each(function(e) {
                                        t = r.get(e),
                                            n.get(0) != t ? $(t).find('input[type="text"]').attr("disabled", "disabled") : $(t).find('input[type="text"]').attr("disabled", !1)
                                    })
                            }
                        })
                }
            },
            m = e.Class(u, a);
        m.defConfig = o,
            m.getInstance = function(e) {
                return r || (r = new m(e))
            },
            e[t] = m
    } (phoenix, "GameTrace", phoenix.Event),
    function(e, t, a, n) {
        var r, i = {
                URL: "/newgame_play.html?tag=addtomyplan",
                SERVERURL: "/newgame_play.html?tag=getmyplanlist",
                detailsUrl: "/newgame_play.html?tag=getmyplandetails",
                deleteUrl: "/newgame_play.html?tag=removemyplan",
                betPlanUrl: "/newgame_play.html?tag=gameplay",
                planListDom: "#J-game-plan .plan-content",
                recommendListDom: "#J-game-plan .recommend-plan-content",
                mainPanel: "#J-game-plan"
            },
            o = e.Games,
            l = {
                init: function(e) {
                    var t = this;
                    t.postLock = null,
                        t.planData = {},
                        t.planDetails = {},
                        o.setCurrentGamePlan(t)
                },
                getPlanData: function() {
                    var e = this;
                    return e.planData
                },
                setPlanData: function(e) {
                    var t = this;
                    t.planData = e
                },
                deletePlanById: function(e, t, a) {
                    var n = this,
                        r = o.getCurrentGameMessage();
                    $.ajax({
                        url: n.defConfig.deleteUrl,
                        type: "get",
                        data: "planid=" + e,
                        dataType: "json",
                        success: function(e) {
                            1 == Number(e.isSuccess) ? (r.show({
                                type: "normal",
                                data: {
                                    tplData: {
                                        msg: translate.DeleteSuccessMsgs.msg1 + "[" + t + "]" + translate.DeleteSuccessMsgs.msg2
                                    }
                                }
                            }), n.refreshPlanData(), a && a.call(n, e)) : r.show(e)
                        },
                        error: function() {
                            r.show({
                                type: "normal",
                                data: {
                                    tplData: {
                                        msg: translate.DeleteErrorsMsgs
                                    }
                                }
                            })
                        }
                    })
                },
                getPlanDataFormServer: function(e) {
                    var t = this,
                        a = o.getCurrentGameMessage();
                    $.ajax({
                        url: t.defConfig.SERVERURL,
                        type: "get",
                        data: "curmid=" + window.GamesInitData.curmid,
                        dataType: "json",
                        success: function(a) {
                            1 == Number(a.isSuccess) && (t.setPlanData(a.data), t.fireEvent("afterGetPlanData", a), e && e.call(t, a))
                        },
                        error: function() {
                            a.show({
                                type: "normal",
                                data: {
                                    tplData: {
                                        msg: translate.GetErrorsMsgs
                                    }
                                }
                            })
                        }
                    })
                },
                refreshPlanData: function() {
                    o.getCurrentGamePlan().getPlanDataFormServer(function(e) {
                        var t = this;
                        t.renderPlanHtml(e),
                            $("#J-game-plan").slide()
                    })
                },
                renderPlanHtml: function(e) {
                    for (var t = this,
                             a = e.data.planData,
                             n = e.data.sysData,
                             r = "",
                             i = "",
                             o = "",
                             l = "",
                             s = $(t.defConfig.planListDom), c = $(t.defConfig.recommendListDom), u = 0; u < a.length; u++) o = a[u],
                        r += ["<li>", "<p>" + o.planname + "</p>", '<div class="fn-area"  data-id="' + o.planid + '">', '<i href="javascript:void(0);" title="' + translate.ActionPlan + '" class="icon-play plan-title"></i>', '<i href="javascript:void(0);" title="' + translate.RemovePlan + '" class="icon-remove plan-remove"></i>', "</div>", "</li>"].join("");
                    for (var m = 0; m < n.length; m++) l = n[m],
                        i += ["<li>", "<p>" + l.planname + "</p>", '<div class="fn-area"  data-id="' + l.planid + '">', '<i href="javascript:void(0);" title="' + translate.ActionPlan + '" class="icon-play plan-title"></i>', '<i href="javascript:void(0);" title="' + translate.RemovePlan + '" class="icon-remove plan-remove"></i>', "</div>", "</li>"].join("");
                    s.html(r),
                        c.html(i),
                        $("#J-game-plan .bd ul").jScrollPane()
                },
                setPlanDetails: function(e) {
                    var t = this;
                    t.planDetails = e
                },
                getPlanDetails: function() {
                    var e = this;
                    return e.planDetails
                },
                checkReleaseQueue: function() {
                    var e = this,
                        t = e.getPlanRelease() || "";
                    t && setTimeout(function() {
                            e.getPlanDataFormServer(function(e) {
                                var t = this;
                                t.renderPlanHtml(e)
                            }),
                                e.getDetailsByPlanId(t,
                                    function(a) {
                                        e.showTheDetalsInfo(a, t),
                                        LS && LS.removeItem("planId")
                                    })
                        },
                        500)
                },
                getPlanRelease: function() {
                    return LS && LS.getItem("planId")
                },
                activePlanDom: function() {
                    var e = this;
                    $(e.defConfig.mainPanel).parent().removeClass().addClass("game-plan")
                },
                getDetailsByPlanId: function(e, t) {
                    var a = this;
                    $.ajax({
                        url: a.defConfig.detailsUrl,
                        type: "get",
                        data: "planid=" + e,
                        dataType: "json",
                        success: function(e) {
                            1 == Number(e.isSuccess) && (a.setPlanDetails(e.data), a.fireEvent("afterGetPlanDetails", e), t && t.call(a, e))
                        },
                        error: function() {
                            message.show({
                                type: "normal",
                                data: {
                                    tplData: {
                                        msg: translate.GetErrorsMsgs
                                    }
                                }
                            })
                        }
                    })
                },
                showTheDetalsInfo: function(e, t) {
                    var a = this,
                        n = o.getCurrentGameMessage(),
                        r = "",
                        i = window.GamesInitData.curmid,
                        l = parseInt(e.data.planData[0].mid);
                    a.postLock || (a.doPostLock(), a.fireEvent("beforeSubmit"), n.show({
                        type: "planDetails",
                        msg: translate.CheckedMsgs,
                        confirmIsShow: !0,
                        confirmText: translate.Bet,
                        confirmFun: function() {
                            $.ajax({
                                url: a.defConfig.betPlanUrl,
                                data: {
                                    planid: t,
                                    lotterymenuid: this.dom.find("#planSelectedLotteryMenuid").val(),
                                    lotteryname: r
                                },
                                dataType: "json",
                                method: "POST",
                                success: function(t) {
                                    1 == Number(t.isSuccess) ? (n.show({
                                        type: "normal",
                                        data: {
                                            tplData: {
                                                msg: "方案 [" + e.data.planData[0].planname + "] 投注" + r + "成功。"
                                            }
                                        }
                                    }), a.fireEvent("afterSubmitPlanSuccess", t)) : n.show(t),
                                        a.cancelPostLock()
                                },
                                complete: function() {
                                    a.fireEvent("afterSubmit")
                                },
                                error: function(e) {
                                    n.show({
                                        type: "normal",
                                        data: {
                                            tplData: {
                                                msg: translate.NetworkErrorsMsgs
                                            }
                                        }
                                    })
                                }
                            })
                        },
                        cancelIsShow: !0,
                        cancelFun: function() {
                            a.cancelPostLock(),
                                this.hide()
                        },
                        normalCloseFun: function() {
                            a.cancelPostLock()
                        },
                        callback: function() {},
                        data: {
                            tplData: $.extend(e.data.planData[0], {
                                lotteryname: a.buildLotterySelectHtml(e.data.planData[0].lotteryid, e.data.planData[0].lotteryname)
                            })
                        }
                    }), $(".planLotterySelect option").each(function() {
                        var e = parseInt($(this).prop("value"));
                        e != i && e != l || ($(this).prop("selected", "selected"), $("#planSelectedLotteryMenuid").val(e), r = $.trim($(this).text()))
                    }), $(".planLotterySelect").click(function() {
                        $("#planSelectedLotteryMenuid").val($(this).val()),
                            r = $.trim($(".planLotterySelect option:selected").text())
                    }))
                },
                add: function(e, t, a) {
                    var n = this,
                        r = o.getCurrentGameOrder().getOrderById(t.id);
                    n.submitProject(r)
                },
                getProjectData: function() {
                    return o.getCurrentGameStatistics().getResultData()
                },
                formatData: function() {
                    var e = this,
                        t = e.getProjectData();
                    return t
                },
                doPostLock: function() {
                    var e = this;
                    e.postLock = !0
                },
                buildLotterySelectHtml: function(e, t) {
                    var a = parseInt(e),
                        n = "<select class='planLotterySelect'>",
                        r = "<input type='hidden' id='planSelectedLotteryMenuid' ",
                        i = [1, 3, 6, 13, 18, 19, 56],
                        o = [5, 7, 8, 20, 54],
                        l = [11, 52],
                        s = [12];
                    return i.indexOf(a) != -1 ? (n += "<option value='2660'>一分时时彩</option>", n += "<option value='2594'>两分时时彩</option>", n += "<option value='50'>重庆时时彩</option>", n += "<option value='2195'>天津时时彩</option>", n += "<option value='119'>江西时时彩</option>", n += "<option value='220'>新疆时时彩</option>") : o.indexOf(a) != -1 ? (n += "<option value='3613'>一分11选5</option>", n += "<option value='2726'>两分11选5</option>", n += "<option value='174'>山东11选5</option>", n += "<option value='256'>江西11选5</option>", n += "<option value='302'>广东11选5</option>") : l.indexOf(a) != -1 ? (n += "<option value='2872'>极速3D</option>", n += "<option value='614'>福彩3D</option>") : s.indexOf(a) != -1 && (n += "<option value='615'>体彩p3</option>"),
                        n += "</select>",
                        r += ">",
                    n + r
                },
                cancelPostLock: function() {
                    var e = this;
                    e.postLock = null
                },
                submitProject: function(e) {
                    var t = this,
                        a = o.getCurrentGameSubmit().getSubmitData([e]),
                        n = o.getCurrentGameMessage();
                    if (!t.postLock) return t.doPostLock(),
                        t.fireEvent("beforeSubmit"),
                        $.isEmptyObject(e) ? void n.show({
                            type: "mustChoose",
                            msg: "请至少选择一注方案号码！",
                            data: {
                                tplData: {
                                    msg: "请至少选择一注方案号码！"
                                }
                            }
                        }) : void n.show({
                            type: "checkPlan",
                            msg: translate.CheckedMsgs,
                            confirmIsShow: !0,
                            confirmText: translate.Join,
                            confirmFun: function() {
                                var e = this,
                                    r = e.getContainerDom(),
                                    i = r.find("#J-plan-name"),
                                    o = $.trim(i.val());
                                return o ? (a.planName = o, void $.ajax({
                                    url: t.defConfig.URL,
                                    data: a,
                                    dataType: "json",
                                    method: "POST",
                                    success: function(e) {
                                        1 == Number(e.isSuccess) ? (n.show(e), t.fireEvent("afterSubmitSuccess", e)) : (n.show(e), t.fireEvent("afterSubmitError", e)),
                                            t.refreshPlanData(),
                                            t.cancelPostLock()
                                    },
                                    complete: function() {
                                        t.fireEvent("afterSubmit")
                                    },
                                    error: function(e) {
                                        n.show({
                                            type: "normal",
                                            data: {
                                                tplData: {
                                                    msg: translate.NetworkErrorsMsgs
                                                }
                                            }
                                        })
                                    }
                                })) : void i.css("border-color", "#ff0000").focus().on("input",
                                    function() {
                                        i.css("border-color", "#CECECE")
                                    })
                            },
                            cancelIsShow: !0,
                            cancelFun: function() {
                                t.cancelPostLock(),
                                    this.hide()
                            },
                            normalCloseFun: function() {
                                t.cancelPostLock()
                            },
                            callback: function() {},
                            data: {
                                tplData: {
                                    lotteryDate: a.gameType,
                                    lotteryName: o.getCurrentGame().getGameConfig().getInstance().getGameTypeCn(),
                                    planName: o.getCurrentGame().getGameConfig().getInstance().getGameTypeCn() + "-" + e.typeText + "-" + e.submitParameter + "-" + e.amountText + e.moneyUnitText,
                                    lotteryInfo: function() {
                                        for (var e = "",
                                                 t = a.lt_project,
                                                 n = 0; n < t.length; n++) {
                                            var r = JSON.parse(t[n]);
                                            e += '<div style="line-height:25px;">' + o.getCurrentGame().getGameConfig().getInstance().getTitleByName(r.typeName).join("") + " " + (r.codes.indexOf("|") != -1 ? r.codes.replace(/\&/g, "") : r.codes.replace(/\&/g, " ")) + "</div>"
                                        }
                                        return e
                                    },
                                    lotteryamount: a.lt_total_money,
                                    lotteryDate: a.lt_issue_start,
                                    lotteryAcc: o.getCurrentGame().getDynamicConfig().username
                                }
                            }
                        })
                }
            },
            s = e.Class(l, a);
        s.defConfig = i,
            s.getInstance = function(e) {
                return r || (r = new s(e))
            },
            e[t] = s
    } (phoenix, "GamePlan", phoenix.Event),
    function(e, t, a, n) {
        var r, i = {
                URL: "/game_play.html",
                handlingChargeURL: "./simulatedata/handlingCharge.php"
            },
            o = e.Games,
            l = {
                init: function(e) {
                    var t = this;
                    t.defConfig;
                    t.postLock = null,
                        o.setCurrentGameSubmit(t),
                        t.addEvent("afterSubmitSuccess",
                            function(e, t, a) {
                                o.getCurrentGameStatistics().loadSyncBetHistory(),
                                    o.getCurrentGameStatistics().loadSyncTraceHistory()
                            })
                },
                getSubmitData: function(e) {
                    var t = {},
                        a = e || o.getCurrentGameOrder().orderData,
                        n = 0,
                        r = a.length,
                        i = o.getCurrentGameTrace().getResultData(),
                        l = 0,
                        s = i.traceData.length;
                    for (t.lotteryid = window.GamesInitData.lotteryid || a[0].methodId.split("-")[1], t.curmid = o.getCurrentGame().getDynamicConfig().curmid, t.flag = "save", t.gameType = o.getCurrentGame().getName(), t.lt_trace_if = i.traceData.length > 0 ? "yes": "no", t.lt_trace_stop = 0 == o.getCurrentGameTrace().getIsWinStop() ? "no": "yes", t.lt_project = [], t.lt_trace_issues = [], t.lt_trace_money = 0, t.lt_price_h = ""; n < r; n++) t.lt_project.push(JSON.stringify({
                        digitstr: a[n].digitstr || "",
                        methodid: a[n].methodId.split("-")[0],
                        codes: a[n].submitParameter,
                        showCodes: a[n].showCodes,
                        nums: a[n].num,
                        type: a[n].subType,
                        typeName: a[n].type,
                        money: o.getCurrentGameOrder().getTotalById(a[n].id).amount,
                        omodel: a[n].omodel || 1,
                        mode: o.getCurrentGameStatistics().getMoneyMode(a[n].moneyUnit),
                        times: a[n].multiple,
                        methodName: o.getCurrentGame().getGameConfig().getInstance().getTitleByName(a[n].type).join(""),
                        desc: a[n].type
                    }));
                    if (t.lt_total_nums = t.lt_project.length, t.lt_issue_start = [], t.lt_trace_times_margin = 1, "no" == t.lt_trace_if);
                    else {
                        for (t.lt_trace_times_margin = 1, t.lt_trace_margin = 50, t.lt_trace_times_same = 1, t.lt_trace_diff = 1, t.lt_trace_times_diff = 2, t.lt_trace_count_input = s; l < s; l++) t.lt_trace_issues.push(i.traceData[l].traceNumber),
                            t["lt_trace_times_" + i.traceData[l].traceNumber] = i.traceData[l].multiple;
                        t.lt_trace_money = i.amount
                    }
                    return t.lt_issue_start = o.getCurrentGame().getCurrentNumber(),
                        t.lt_total_money = o.getCurrentGameOrder().getTotal().amount,
                        t
                },
                getSubmitBetData: function(e) {
                    var t = {},
                        a = e || o.getCurrentGameOrder().orderBetData,
                        n = 0,
                        r = a.length;
                    o.getCurrentGameTrace().getResultData();
                    for (t.lotteryid = window.GamesInitData.lotteryid || a[0].methodId.split("-")[1], t.curmid = o.getCurrentGame().getDynamicConfig().curmid, t.flag = "save", t.gameType = o.getCurrentGame().getName(), t.lt_trace_if = "no", t.lt_trace_stop = "no", t.lt_project = [], t.lt_trace_issues = [], t.lt_trace_money = 0, t.lt_price_h = ""; n < r; n++) t.lt_project.push(JSON.stringify({
                        digitstr: a[n].digitstr || "",
                        methodid: a[n].methodId.split("-")[0],
                        codes: a[n].submitParameter,
                        showCodes: a[n].showCodes,
                        nums: a[n].num,
                        type: a[n].subType,
                        typeName: a[n].type,
                        money: o.getCurrentGameOrder().getTotalBetById(a[n].id).amount,
                        omodel: a[n].omodel || 1,
                        mode: o.getCurrentGameStatistics().getMoneyMode(a[n].moneyUnit),
                        times: a[n].multiple,
                        methodName: o.getCurrentGame().getGameConfig().getInstance().getTitleByName(a[n].type).join(""),
                        desc: a[n].type
                    }));
                    return t.lt_total_nums = t.lt_project.length,
                        t.lt_issue_start = [],
                        t.lt_trace_times_margin = 1,
                        t.lt_issue_start = o.getCurrentGame().getCurrentNumber(),
                        t.lt_total_money = o.getCurrentGameOrder().getBetTotal().amount,
                        t
                },
                doPostLock: function() {
                    var e = this;
                    e.postLock = !0
                },
                cancelPostLock: function() {
                    var e = this;
                    e.postLock = null
                },
                clearData: function() {
                    var e = o.getCurrentGameOrder();
                    e.reSet(),
                        e.cancelSelectOrder(),
                        o.getCurrentGame().getCurrentGameMethod().reSet()
                },
                encryptCodes: function(e) {
                    /*var t = this,
                        a = t.getCookie("sykey"),
                        n = CryptoJS.AES.encrypt(e, a);*/
                    var t = this,
                        a = t.getCookie("sykey"),
                        n = CryptoJS.MD5(e.showCodes+e.methodid+e.nums+Storage.betYanKey);
                    return n.toString()
                },
                getCookie: function(e) {
                    for (var t = e + "=",
                             a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                        for (var r = a[n];
                             " " == r.charAt(0);) r = r.substring(1);
                        if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
                    }
                    return ""
                },
                submitData: function() {
                    var e = this,
                        t = !1,
                        a = e.getSubmitData(),
                        n = o.getCurrentGameMessage();
                    if (!e.postLock) return e.doPostLock(),
                        e.fireEvent("beforeSubmit"),
                        a.lt_project.length <= 0 ? (n.show({
                            type: "mustChoose",
                            msg: translate.SelectOne,
                            data: {
                                tplData: {
                                    msg: translate.SelectOne
                                }
                            }
                        }), void e.cancelPostLock()) : void n.show({
                            type: "checkLotters",
                            msg: translate.CheckedBetInfo,
                            confirmIsShow: !0,
                            confirmFun: function() {
                                if (!t) {
                                    t = !0,
                                        n.show({
                                            content: '<span class="text-center">' + translate.OrderSubmission + "</span>"
                                        });
                                    for (var r = o.getCurrentGame().editSubmitData(a), i = r.lt_project, l = [], s = 0, c = i.length; s < c; s++) {
                                        var u = JSON.parse(i[s]);
                                        u.codes = e.encryptCodes(u),
                                            l.push(JSON.stringify(u))
                                    }
                                    r.lt_project = l,
                                        $.ajax({
                                            url: e.defConfig.URL,
                                            data: r,
                                            dataType: "json",
                                            method: "POST",
                                            success: function(t) {
                                                1 == Number(t.isSuccess) ? (n.show(t), e.clearData(), e.fireEvent("afterSubmitSuccess", t, a), "yes" == a.lt_trace_if && ($("#J-trace-switch").click(), $("body,html").animate({
                                                        scrollTop: $("#change").offset().top
                                                    },
                                                    300))) : (n.show(t), e.fireEvent("afterSubmitError", t)),
                                                    e.cancelPostLock()
                                            },
                                            complete: function() {
                                                e.fireEvent("afterSubmit"),
                                                    t = !1
                                            }
                                        })
                                }
                            },
                            cancelIsShow: !0,
                            cancelFun: function() {
                                e.cancelPostLock(),
                                    this.hide()
                            },
                            normalCloseFun: function() {
                                e.cancelPostLock()
                            },
                            callback: function() {},
                            data: {
                                tplData: {
                                    lotteryDate: a.gameType,
                                    lotteryName: o.getCurrentGame().getGameConfig().getInstance().getGameTypeCn(),
                                    lotteryInfo: function() {
                                        for (var e = "",
                                                 t = a.lt_project,
                                                 n = 0; n < t.length; n++) {
                                            var r = JSON.parse(t[n]),
                                                i = o.getCurrentGame().getGameConfig().getInstance().getTitleByName(r.typeName);
                                            e += '<div style="line-height:25px;">' + i.join("") + " " + r.showCodes + "</div>"
                                        }
                                        return e
                                    },
                                    lotteryamount: a.lt_trace_money && a.lt_trace_money > 0 ? "[" + translate.TrackAmount + "] " + a.lt_trace_money: a.lt_total_money,
                                    lotteryDate: a.lt_issue_start,
                                    lotteryAcc: o.getCurrentGame().getDynamicConfig().username
                                }
                            }
                        })
                },
                submitBetOrderData: function() {
                    var e = this,
                        t = !1,
                        a = e.getSubmitBetData(),
                        n = o.getCurrentGameMessage();
                    if (!e.postLock) return e.doPostLock(),
                        e.fireEvent("beforeSubmit"),
                        a.lt_project.length <= 0 ? (n.show({
                            type: "mustChoose",
                            msg: translate.SelectOne,
                            data: {
                                tplData: {
                                    msg: translate.SelectOne
                                }
                            }
                        }), void e.cancelPostLock()) : void n.show({
                            type: "checkLotters",
                            msg: translate.CheckedBetInfo,
                            confirmIsShow: !0,
                            confirmFun: function() {
                                if (!t) {
                                    t = !0,
                                        n.show({
                                            content: '<p style="text-align:center;font-size:14px;color:#850000">' + translate.OrderSubmission + "</p>"
                                        });
                                    for (var r = o.getCurrentGame().editSubmitData(a), i = r.lt_project, l = [], s = 0, c = i.length; s < c; s++) {
                                        var u = JSON.parse(i[s]);
                                        u.codes = e.encryptCodes(u),
                                            l.push(JSON.stringify(u))
                                    }
                                    r.lt_project = l,
                                        $.ajax({
                                            url: e.defConfig.URL,
                                            data: r,
                                            dataType: "json",
                                            method: "POST",
                                            success: function(t) {
                                                1 == Number(t.isSuccess) ? (n.show(t), e.fireEvent("afterSubmitSuccess", t, a), "yes" == a.lt_trace_if && ($("#J-trace-switch").click(), $("body,html").animate({
                                                        scrollTop: $("#change").offset().top
                                                    },
                                                    300))) : (n.show(t), e.fireEvent("afterSubmitError", t)),
                                                    e.cancelPostLock()
                                            },
                                            complete: function() {
                                                o.getCurrentGameOrder().clearBetTypeOrder(),
                                                    e.fireEvent("afterSubmit"),
                                                    t = !1
                                            }
                                        })
                                }
                            },
                            cancelIsShow: !0,
                            cancelFun: function() {
                                e.cancelPostLock(),
                                    this.hide(),
                                    o.getCurrentGameOrder().clearBetTypeOrder()
                            },
                            normalCloseFun: function() {
                                e.cancelPostLock(),
                                    o.getCurrentGameOrder().clearBetTypeOrder()
                            },
                            callback: function() {},
                            data: {
                                tplData: {
                                    lotteryDate: a.gameType,
                                    lotteryName: o.getCurrentGame().getGameConfig().getInstance().getGameTypeCn(),
                                    lotteryInfo: function() {
                                        for (var e = "",
                                                 t = a.lt_project,
                                                 n = 0; n < t.length; n++) {
                                            var r = JSON.parse(t[n]);
                                            e += '<div style="line-height:25px;">' + o.getCurrentGame().getGameConfig().getInstance().getTitleByName(r.typeName).join("") + " " + r.showCodes + "</div>"
                                        }
                                        return e
                                    },
                                    lotteryamount: a.lt_trace_money && a.lt_trace_money > 0 ? "[追号金额] " + a.lt_trace_money: a.lt_total_money,
                                    lotteryDate: a.lt_issue_start,
                                    lotteryAcc: o.getCurrentGame().getDynamicConfig().username
                                }
                            }
                        })
                }
            },
            s = e.Class(l, a);
        s.defConfig = i,
            s.getInstance = function(e) {
                return r || (r = new s(e))
            },
            e[t] = s
    } (phoenix, "GameSubmit", phoenix.Event),
    function(e, t, a, n) {
        var r = {
                name: "wuxing.zhixuan.danshi",
                editorobj: ".content-text-balls",
                uploadButton: "#file",
                exampleText: "12345 33456 87898 <br />12345 33456 87898 <br />12345 33456 87898 ",
                tips: "五星直选单式玩法提示",
                exampleTip: "这是单式弹出层提示",
                checkFont: /[\u4E00-\u9FA5]|[\/\n]|[\/W]/g,
                filtration: /[\s]|[,]|[;]|<br>|[，]|[；]|[:]|[：]|[|]|[｜]/i,
                checkNum: /^[0-9]*$/,
                normalTips: '<p style="color:#888;font-size:12px;line-height:170%;">' + ["说明：", '1、请参照"标准格式样本"格式录入或上传方案。', "2、每一注号码之间的间隔符支持 回车 空格[ ] 逗号[,] 分号[;] 冒号[:] 竖线 [|]", "3、文件格式必须是.txt格式。", "4、文件较大时会导致上传时间较长，请耐心等待！", "5、将文件拖入文本框即可快速实现文件上传功能。", "6、导入文本内容后将覆盖文本框中现有的内容。"].join("<br>") + "</p>"
            },
            o = e.Games,
            l = e.Games.SSC,
            s = {
                init: function(t) {
                    var a = this;
                    a.ieRange = "",
                        a.vData = [],
                        a.aData = [],
                        a.tData = [],
                        a.errorData = [],
                        a.sameData = [],
                        a.firstfocus = !0,
                        a.ranNumTag = !1,
                        a.isFirstAdd = !0,
                        this.defConfig.normalTips = '<p style="color:#888;font-size:12px;line-height:170%;">' + translate.NormalTips.join("<br>") + "</p>",
                        o.getCurrentGameStatistics().addEvent("afterStatisReset",
                            function(e, t) {
                                var n = this,
                                    r = n.defConfig;
                                methodName = n.getGameMethodName(),
                                methodName != a.defConfig.name || n.getLockMultipleDom().prop("checked") || n.multipleDom.setValue(r.multiple)
                            }),
                        a.addEvent("beforeShow",
                            function() {
                                htmlUrl = o.getCurrentGame().getGameConfig().getInstance().getUploadPath(),
                                    uploadHtml = "http://cdn.code.tinyeditor.net",
                                o.getCurrentGameStatistics().getHistoryUnitMode() && e.util.execus(uploadHtml + o.getCurrentGameStatistics().getReplaceStr() || htmlUrl)
                            }),
                        o.getCurrentGameOrder().addEvent("beforeAdd",
                            function(e, t) {
                                a.tData;
                                t.type == a.defConfig.name && (a.isFirstAdd ? a.ranNumTag || (t.lotterys = [], a.isFirstAdd = null, a.updateData(), o.getCurrentGameOrder().add(o.getCurrentGameStatistics().getResultData())) : ("" == a.errorData.join("") && "" == a.sameData.join("") || a.ballsErrorTip(), a.checkLimitBall(t), a.isFirstAdd = !0))
                            })
                },
                initFrame: function() {
                    var t = this;
                    t.win = t.container.find(t.defConfig.editorobj)[0].contentWindow,
                        t.doc = t.win.document,
                        t._bulidEditDom();
                    var a = e.Tip.getInstance();
                    t.container.find(".balls-example-danshi-tip").click(function(e) {
                        e.preventDefault();
                        var n = $(this);
                        a.setText(t.getExampleText()),
                            a.show(n.outerWidth() + 10, 0, this)
                    }).mouseout(function() {
                        a.hide()
                    })
                },
                getSubmitType: function() {
                    return "input"
                },
                getExampleText: function() {
                    return this.defConfig.exampleText
                },
                rebuildData: function() {
                    var e = this;
                    e.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var e = this;
                    e.container.html(e.getHTML())
                },
                reSelect: function() {},
                makeSubmitParameter: function(e, t) {
                    for (var a = t.lotterys.slice(), n = 0; n < a.length; n++) a[n] = a[n].join("");
                    return a.join("&")
                },
                batchSetBallDom: function() {},
                getNormalTips: function() {
                    return this.defConfig.normalTips
                },
                showNormalTips: function() {
                    var e = this;
                    e.replaceText(e.getNormalTips.call(e)),
                        e.firstfocus = !0
                },
                _bulidEditDom: function() {
                    var e = this,
                        t = "";
                    e.doc.designMode = "On",
                        e.doc.contentEditable = !0,
                        e.doc.open(),
                        t = '<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" />',
                        t += "<style>*{margin:0;padding:0;font-size:14px;}</style>",
                        t += "</head>",
                        e.doc.writeln("<html>" + t + '<body style="word-break: break-all">' + e.getNormalTips() + "</body></html>"),
                        e.doc.close(),
                        e.bindPress(),
                    document.all && (e.doc.onkeypress = function() {
                        return e._ieEnter()
                    }),
                        e.dragUpload()
                },
                dragUpload: function() {
                    var e = this,
                        t = $(e.doc.body);
                    window.FileReader && (t.bind("dragover",
                        function(e) {
                            e.preventDefault(),
                                e.stopPropagation()
                        }), t.get(0).addEventListener("drop",
                        function(t) {
                            t.preventDefault(),
                                t.stopPropagation();
                            var a = t.dataTransfer.files,
                                n = a[0],
                                r = new FileReader,
                                i = n.type ? n.type: "n/a";
                            "text/plain" == i && (r.onload = function(t) {
                                var a = t.target.result;
                                "" != $.trim(a) && (e.replaceText(a), e.firstfocus = !1, e.updateData())
                            },
                                r.readAsText(n))
                        },
                        !1))
                },
                uploadHtmlSet: function() {
                    this.fireEvent("beforeShow")
                },
                _ieEnter: function() {
                    var e = this,
                        t = e.win.event;
                    if (13 == t.keyCode) return this._saveRange(),
                        this._insert("<br/>"),
                        !1
                },
                _insert: function(e) {
                    var t = this;
                    if (t.ieRange) t.ieRange.pasteHTML(e),
                        t.ieRange.select(),
                        t.ieRange = !1;
                    else if (t.win.focus(), document.all) t.doc.body.innerHTML += e;
                    else {
                        var a = win.getSelection(),
                            n = a.getRangeAt(0),
                            r = n.createContextualFragment(e);
                        n.insertNode(r)
                    }
                },
                _saveRange: function() {
                    if (document.all && !me.ieRange) {
                        var e = me.doc.selection;
                        if (me.ieRange = e.createRange(), "Control" != e.type) {
                            var t = me.ieRange.parentElement();
                            "INPUT" != t.tagName && t != document.body || (me.ieRange = !1)
                        }
                    }
                },
                getHtml: function() {
                    var e = this;
                    return e.doc ? $(e.doc.body).html() : ""
                },
                getText: function() {
                    var e = this;
                    return e.doc ? $(e.doc.body).text() : ""
                },
                replaceText: function(e) {
                    var t = this,
                        e = e.replace(/\n/g, "<br>");
                    t.doc && e && $(t.doc.body).html(e)
                },
                bindPress: function() {
                    var e = this,
                        t = e.container.find(e.defConfig.uploadButton);
                    window.navigator.userAgent.toLowerCase();
                    $(e.doc).bind("input",
                        function() {
                            e.updateData()
                        }),
                        $(e.doc.body).bind("keyup",
                            function() {
                                e.updateData()
                            }),
                        $(e.doc.body).bind("blur",
                            function() {
                                e.updateData()
                            }),
                        $(e.doc).bind("focus",
                            function() {
                                e.firstfocus && (e.replaceText(" "), e.firstfocus = !1)
                            }),
                        $(e.doc).bind("blur",
                            function() {
                                var t = e.getText();
                                "" == $.trim(t) && e.showNormalTips()
                            }),
                        $(e.doc.body).bind("focus",
                            function() {
                                e.firstfocus && (e.replaceText(" "), e.firstfocus = !1)
                            }),
                        $(e.doc.body).bind("blur",
                            function() {
                                var t = e.getText();
                                "" == $.trim(t) && e.showNormalTips()
                            }),
                        t.bind("change",
                            function() {
                                var t = $(this).parent();
                                e.checkFile(this, t)
                            })
                },
                iterator: function(e) {
                    for (var t = this,
                             a = t.defConfig,
                             n = [], r = 0, i = 0; i < e.length; i++) a.filtration.test(e.charAt(i)) && (n.push(e.substr(r, i - r)), r = i + 1);
                    return n
                },
                checkResult: function(e, t) {
                    for (var a = t.length - 1; a >= 0; a--) if (t[a].join("") == e) return ! 1;
                    return ! 0
                },
                filterLotters: function(e) {
                    var t = this,
                        a = "";
                    return a = e.replace(/<br>+|&nbsp;+/gi, " "),
                        a = a.replace(/\s|[,]+|[;]+|[，]+|[；]+|[:]+|[：]+|[|]+|[｜]+/gi, " "),
                        a = a.replace(/<(?:"[^"]*"|'[^']*'|[^>'"]*)+>/g, " "),
                        a = a.replace(t.defConfig.checkFont, "") + " "
                },
                checkSingleNum: function(e) {
                    var t = this;
                    return t.defConfig.checkNum.test(e) && e.length == t.balls.length
                },
                checkBallIsComplete: function(e) {
                    var t = this,
                        a = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(e)) || []; a < n.length; a++) {
                        var r = n[a].split(""),
                            i = n[a];
                        t.checkSingleNum(i) ? (t.vDataBack[i] ? t.sameData.push(r) : t.tData.push(r), t.vDataBack[i] = r, t.vData.push(r)) : (t.errorDataBack[i] ? t.sameData.push(r) : t.errorData.push(r), t.errorDataBack[i] = r),
                            t.aDataBack[i] ? "": t.aData.push(r),
                            t.aDataBack[i] = r
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                countInstances: function(e, t) {
                    var a = [],
                        n = 0;
                    do n = e.indexOf(t, n),
                    n != -1 && (a.push(n), n += t.length);
                    while (n != -1);
                    return a
                },
                removeOrderError: function() {
                    var e = this,
                        t = e.vData.length > 0 ? "": " ";
                    if (!e.firstfocus) {
                        for (var a = 0; a < e.vData.length; a++) t += e.vData[a].join("") + "&nbsp;";
                        if (e.errorDataTips(), "" == $.trim(t)) return void e.showNormalTips();
                        e.replaceText(t),
                            e.checkBallIsComplete(t),
                            e.updateData()
                    }
                },
                removeOrderSame: function() {
                    var e = this,
                        t = e.aData.length > 0 ? "": " ";
                    if (!e.firstfocus) {
                        for (var a = 0; a < e.aData.length; a++) t += e.aData[a].join("") + "&nbsp;";
                        e.sameDataTips(),
                            e.replaceText(t),
                            e.checkBallIsComplete(t),
                            e.updateData()
                    }
                },
                removeOrderAll: function() {
                    var e = this;
                    e.firstfocus || (e.replaceText(" "), e.sameData = [], e.aData = [], e.tData = [], e.vData = [], o.getCurrentGameStatistics().reSet(), e.showNormalTips())
                },
                checkFile: function(e, t) {
                    var a = e.value,
                        n = a.substring(a.lastIndexOf("."), a.length),
                        n = n.toLowerCase();
                    return ".txt" != n ? (alert(translate.FileError), !1) : void t[0].submit()
                },
                getFile: function(e) {
                    var t = this,
                        a = t.container.find(t.defConfig.uploadButton);
                    e && (t.replaceText(e), t.firstfocus = !1, t.updateData(), a.blur().val(""))
                },
                errorTip: function(e, t) {
                    var a = this;
                    alert(a.errorData.join())
                },
                sameDataTips: function() {
                    var e = this,
                        t = e.sameData,
                        a = "",
                        n = o.getCurrentGameMessage(),
                        r = [];
                    if ("" != t.join("")) {
                        for (var i = 0; i < t.length; i++) $.trim(t[i].join("")) && r.push(t[i].join(""));
                        a = '<h4 class="pop-text" style="display:block;"> ' + translate["以下号码重复，已进行自动过滤"] + ' </h4><p class="pop-text" style="display:block">' + r.join(", ") + "</p>",
                            n.show({
                                mask: !0,
                                content: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">' + a + "</div>", "</div>", "</div>"].join(""),
                                closeIsShow: !0,
                                closeFun: function() {
                                    this.hide()
                                }
                            })
                    }
                },
                errorDataTips: function() {
                    var e = this,
                        t = e.errorData,
                        a = "",
                        n = o.getCurrentGameMessage(),
                        r = [];
                    if ("" != t.join("")) {
                        for (var i = 0; i < t.length; i++) $.trim(t[i].join("")) && r.push(t[i].join(""));
                        a = '<h4 class="pop-text" style="display:block;"> ' + translate["以下号码错误，已进行自动过滤"] + ' </h4><p class="pop-text" style="display:block">' + r.join(", ") + "</p>",
                            n.show({
                                mask: !0,
                                content: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">' + a + "</div>", "</div>", "</div>"].join(""),
                                closeIsShow: !0,
                                closeFun: function() {
                                    this.hide()
                                }
                            })
                    }
                },
                ballsErrorTip: function(e, t) {
                    var a = this,
                        n = a.errorData,
                        r = a.sameData,
                        i = "",
                        l = "",
                        s = o.getCurrentGameMessage(),
                        c = [],
                        u = [];
                    if ("" != r.join("")) {
                        for (var m = 0; m < r.length; m++) $.trim(r[m].join("")) && u.push(r[m].join(""));
                        l = '<h4 class="pop-text" style="display:block;"> ' + translate["以下号码重复，已进行自动过滤"] + ' </h4><p class="pop-text" style="display:block">' + u.join(", ") + "</p>"
                    }
                    if ("" != n.join("")) {
                        for (var m = 0; m < n.length; m++) $.trim(n[m].join("")) && c.push(n[m].join(""));
                        i = '<h4 class="pop-text" style="display:block;"> ' + translate["以下号码错误，已进行自动过滤"] + ' </h4><p class="pop-text" style="display:block">' + c.join(", ") + "</p>"
                    }
                    s.show({
                        mask: !0,
                        content: ['<div class="bd text-center">', '<div class="pop-waring">', '<i class="ico-waring <#=icon-class#>"></i>', '<div style="display:inline-block;*zoom:1;*display:inline;vertical-align:middle">' + l + i + "</div>", "</div>", "</div>"].join(""),
                        closeIsShow: !0,
                        closeFun: function() {
                            this.hide()
                        }
                    })
                },
                reSet: function() {
                    var e = this;
                    e.isBallsComplete = !1,
                        e.rebuildData(),
                        e.updateData(),
                    e.ranNumTag || e.showNormalTips(),
                        e.removeRanNumTag()
                },
                makePostParameter: function(e, t) {
                    for (var a = [], e = t.lotterys, n = 0; n < e.length; n++) a.push(e[n].join(""));
                    return a.join(" ")
                },
                getLottery: function() {
                    var e = this,
                        t = e.getHtml();
                    if ("" != t) return e.checkBallIsComplete(t)
                },
                removeSameNum: function(e) {
                    var t, a = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = e.length, t = Math.floor(Math.random() * r); a < e.length; a++) if (t == e[a]) return arguments.callee.call(n, e);
                    return t
                },
                emptySameData: function() {
                    this.sameData = []
                },
                emptyErrorData: function() {
                    this.errorData = []
                },
                addRanNumTag: function() {
                    var e = this;
                    e.ranNumTag = !0,
                        e.emptySameData(),
                        e.emptyErrorData()
                },
                getTdata: function() {
                    return this.tData
                },
                getOriginal: function() {
                    var e = this,
                        t = e.getBallData(),
                        a = t.length,
                        n = t[0].length;
                    for (i = 0, j = 0, row = [], tData = e.getTdata(), data = e.getHtml(), result = []; i < a; i++) {
                        for (row = [], j = 0; j < n; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = e.getTdata().join(",")),
                        result
                },
                removeRanNumTag: function() {
                    this.ranNumTag = !1
                },
                checkRandomBets: function(e, t) {
                    var a = this,
                        n = "undefined" == typeof e,
                        e = e || {},
                        r = [],
                        t = t || 0,
                        i = (a.getBallData().length, a.getBallData()[0].length, o.getCurrentGameOrder().getTotal().orders);
                    if (r = a.createRandomNum(), Number(t) > Number(a.getRandomBetsNum())) return r;
                    if (n) for (var l = 0; l < i.length; l++) if (i[l].type == a.defConfig.name) {
                        var s = i[l].original.join("").replace(/,/g, "");
                        e[s] = s
                    }
                    return e[r.join("")] ? (t++, arguments.callee.call(a, e, t)) : r
                },
                randomNum: function() {
                    var e = this,
                        t = [],
                        a = null,
                        n = (e.getBallData(), e.defConfig.name, []),
                        r = [];
                    return e.addRanNumTag(),
                        t = e.checkRandomBets(),
                        r = t,
                        n = e.combination(r),
                        a = {
                            type: o.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: r,
                            lotterys: n,
                            moneyUnit: o.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: o.getCurrentGameStatistics().getMultip(),
                            onePrice: o.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        a.amount = Number(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a.amountText = o.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                getLockMultipleDom: function() {
                    return $("#J-balls-statistics-lockMultiple")
                },
                getHTML: function() {
                    var e = [];
                    return e.push('<div class="balls-import clearfix">'),
                        e.push('<form id="form1" name="form1" enctype="multipart/form-data" method="post" action="' + o.getCurrentGame().getGameConfig().getInstance().getUploadPath() + '" target="check_file_frame" style="position:relative;padding-bottom:10px;">'),
                        // e.push('<input name="file" type="file" id="file" size="40" hidefocus="true" value="' + translate.UploadFile + '" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;position:absolute;top:0px; left:0px; width:107px; height:30px;z-index:1;background:#000" />'),
                        // e.push('<input type="button" class="balls-import-input" value="' + translate.UploadFile + '" onclick=document.getElementById("form1").file.click()><a class="balls-example-danshi-tip" href="#">查看标准格式样本</a>'),
                        e.push('<input type="reset" style="outline:none;-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);filter:alpha(opacity=0);opacity: 0;width:0px; height:0px;z-index:1;background:#000" />'),
                        e.push("</form>"),
                        e.push('<div class="panel-select" ><iframe style="width:100%;height:100%;border:0 none;background-color:#F9F9F9;" class="content-text-balls"></iframe></div>'),
                        e.push('<div class="panel-btn">'),
                        e.push('<a class="remove-error" id="" href="javascript:void(0);"><i></i>' + translate.DeleteError + "</a>"),
                        e.push('<a class="remove-same" id="" href="javascript:void(0);"><i></i>' + translate.RemoveDuplicate + "</a>"),
                        e.push('<a class="remove-all" id="" href="javascript:void(0);"><i></i>' + translate.ClearTextbox + "</a>"),
                        e.push("</div>"),
                        e.push("</div>"),
                        e.join("")
                }
            },
            c = e.Class(s, a);
        c.defConfig = r,
            l[t] = c
    } (phoenix, "Danshi", phoenix.GameMethod);