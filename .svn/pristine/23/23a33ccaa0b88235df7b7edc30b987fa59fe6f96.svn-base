!
    function(t, e, a, n) {
        var r, l = {
                mainPanel: "#J-trace-panel",
                advancedTypeHas: ["fanbei", "yingli", "yinglilv"],
                dataRowHeader: '<tr><th style="width:125px;" class="text-center">序号</th><th><input data-action="checkedAll" type="checkbox"  checked="checked"/> 追号期次</th><th>倍数</th><th>金额</th><th>预计开奖时间</th></tr>',
                dataRowTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> 倍</td><td>&yen; <span class="trace-row-money"><#=money#></span> 元</td><td><span class="trace-row-time"><#=publishTime#></span></td></tr>',
                dataRowYingliHeader: '<tr><th class="text-center">序号</th><th><input data-action="checkedAll" type="checkbox" /> 追号期次</th><th>倍数</th><th>金额</th><th>奖金</th><th>预期盈利金额</th><th>预期盈利率</th></tr>',
                dataRowYingliTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> 倍</td><td>&yen; <span class="trace-row-money"><#=money#></span> 元</td><td>&yen; <span class="trace-row-userGroupMoney"><#=userGroupMoney#></span> 元</td><td>&yen; <span class="trace-row-winTotalAmount"><#=winTotalAmout#></span> 元</td><td><span class="trace-row-yinglilv"><#=yinglilv#></span>%</td></tr>'
            },
            o = t.Games,
            s = function(t, e, a) {
                var t = "" + t,
                    a = a || 1e9;
                return t = t.replace(/[^\d]/g, ""),
                    t = "" == t ? e: Number(t) > a ? a: t,
                    Number(t)
            },
            u = function(t) {
                return t = t.replace(/[^\d]/g, ""),
                    Number(t)
            },
            c = {
                init: function(t) {
                    var e = this;
                    o.setCurrentGameTrace(e),
                        e.panel = $(t.mainPanel),
                        e.TraceTab = null,
                        e.TraceAdvancedTab = null,
                        e.NormalSelectTimesTab = null,
                        e.isOpenPanel = !1,
                        e.orderData = null,
                        e.traceType = "normal",
                        e.times = 0,
                        e.traceStartNumber = "",
                        e.currentTraceNumber = "",
                        e.advancedType = t.advancedTypeHas[0],
                        e.typeTypeType = "a",
                        e.initEvent(),
                        e.setCurrentTraceNumber(),
                        this.defConfig = $.extend(this.defConfig, {
                            dataRowHeader: '<tr><th style="width:125px;" class="text-center">' + translate.Serial + '</th><th><input data-action="checkedAll" type="checkbox"  checked="checked"/> ' + translate.ChasingPeriod + "</th><th>" + translate.Multiple + "</th><th>" + translate.Amount + "</th><th>" + translate.ExpectedLotteryTime + "</th></tr>",
                            dataRowTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> ' + translate.MsgMultiple + '</td><td>&yen; <span class="trace-row-money"><#=money#></span> ' + translate.MsgDollar + '</td><td><span class="trace-row-time"><#=publishTime#></span></td></tr>',
                            dataRowYingliHeader: '<tr><th class="text-center">' + translate.Serial + '</th><th><input data-action="checkedAll" type="checkbox" /> ' + translate.ChasingPeriod + "</th><th>" + translate.Multiple + "</th><th>" + translate.Amount + "</th><th>" + translate.Bonus + "</th><th>" + translate.ExpectedProfitAmount + "</th><th>" + translate.ExpectedRate + "</th></tr>",
                            dataRowYingliTemplate: '<tr><td class="text-center"><#=No#></td><td><input data-action="checkedRow" class="trace-row-checked" type="checkbox" checked="checked"> <span class="trace-row-number"><#=traceNumber#></span></td><td><input class="trace-row-multiple" value="<#=multiple#>" type="text" style="width:30px;text-align:center;"> ' + translate.MsgMultiple + '</td><td>&yen; <span class="trace-row-money"><#=money#></span> ' + translate.MsgDollar + '</td><td>&yen; <span class="trace-row-userGroupMoney"><#=userGroupMoney#></span> ' + translate.MsgDollar + '</td><td>&yen; <span class="trace-row-winTotalAmount"><#=winTotalAmout#></span> ' + translate.MsgDollar + '</td><td><span class="trace-row-yinglilv"><#=yinglilv#></span>%</td></tr>'
                        }),
                        o.getCurrentGame().addEvent("changeDynamicConfig",
                            function(t, a) { (a.lastballs || a.lastnumber) && (e.buildStartNumberSelectDom(), e.updateTableNumber())
                            })
                },
                setAdvancedType: function(t) {
                    "[object Number]" == Object.prototype.toString.call(t) ? this.advancedType = this.getAdvancedTypeBuIndex(t) : this.advancedType = t
                },
                getAdvancedType: function() {
                    return this.advancedType
                },
                getAdvancedTypeBuIndex: function(t) {
                    var e = this,
                        a = e.defConfig.advancedTypeHas,
                        n = a.length;
                    return t < n ? a[t] : ""
                },
                initEvent: function() {
                    var e = this;
                    $("#J-trace-switch").click(function() {
                        if (this.checked) {
                            var t = o.getCurrentGameOrder().getTotal().amount,
                                e = o.getCurrentGameMessage();
                            if (t <= 0) return e.show({
                                type: "mustChoose",
                                msg: translate.SelectOne,
                                data: {
                                    tplData: {
                                        msg: translate.SelectOne
                                    }
                                }
                            }),
                                void($("#J-trace-switch").get(0).checked = !1);
                            o.getCurrentGameTrace().show(),
                                $("#J-trace-iswintimesstop").get(0).checked = !0,
                            $("#isWinStop") && $("#isWinStop").remove(),
                                $("#J-trace-iswintimesstop").before("<span id='isWinStop' class='bet-tips' style='position:relative;right:10px;line-height: 20px;opacity:0;font-weight:900'>中奖即停<i></i></span>").siblings().fadeTo(500, 1)
                        } else o.getCurrentGameTrace().hide()
                    }),
                        e.TraceTab = TraceTab = new t.Tab({
                            par: "#J-trace-panel",
                            triggers: ".chase-tab-t",
                            panels: ".chase-tab-content",
                            currPanelClass: "chase-tab-content-current",
                            eventType: "click"
                        }),
                        TraceTab.addEvent("afterSwitch",
                            function(t, a) {
                                var n = ["normal", "advanced"];
                                a < n.length && e.setTraceType(n[a]),
                                    e.updateStatistics()
                            }),
                        e.TraceAdvancedTab = TraceAdvancedTab = new t.Tab({
                            par: "#J-trace-advanced-type-panel",
                            triggers: ".tab-title li",
                            panels: ".tab-content li",
                            eventType: "click"
                        }),
                        TraceAdvancedTab.addEvent("afterSwitch",
                            function(t, a) {
                                var n = this.getPanel(a).find(".trace-advanced-type-switch");
                                e.setAdvancedType(a),
                                    n.each(function() {
                                        if (this.checked) return e.setTypeTypeType($(this).parent().attr("data-type")),
                                            !1
                                    })
                            });
                    var a = new t.Hover({
                        triggers: "#J-trace-iswintimesstop-hover",
                        panels: "#chase-stop-tip-1",
                        currPanelClass: "chase-stop-tip-current",
                        hoverDelayOut: 300
                    });
                    $("#chase-stop-tip-1").mouseleave(function() {
                        a.hide()
                    });
                    var n = new t.Hover({
                        triggers: "#J-trace-iswinstop-hover",
                        panels: "#chase-stop-tip-2",
                        currPanelClass: "chase-stop-tip-current",
                        hoverDelayOut: 300
                    });
                    $("#chase-stop-tip-2").mouseleave(function() {
                        n.hide()
                    }),
                        $("#J-chase-stop-switch-1").click(function(t) {
                            t.preventDefault(),
                                $("#J-trace-iswintimesstop-panel").hide(),
                                $("#J-trace-iswinstop-panel").show(),
                                $("#J-trace-iswintimesstop").get(0).checked = !1,
                                $("#J-trace-iswinstop").get(0).checked = !0,
                                $("#J-trace-iswinstop-money").removeAttr("disabled"),
                                $("#J-trace-iswintimesstop-times").attr("disabled", "disabled")
                        }),
                        $("#J-chase-stop-switch-2").click(function(t) {
                            t.preventDefault(),
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
                            var t = $("#J-trace-iswintimesstop-times");
                            this.checked ? t.attr("disabled", !1).focus() : t.attr("disabled", "disabled")
                        }),
                        $("#J-trace-iswinstop").click(function() {
                            var t = $("#J-trace-iswinstop-money");
                            this.checked ? t.attr("disabled", !1).focus() : t.attr("disabled", "disabled")
                        }),
                        $("#J-trace-normal-times").keyup(function() {
                            var t, a = o.getCurrentGame().getDynamicConfig().tracemaxtimes,
                                n = "" + this.value,
                                r = $("#J-function-select-tab").find(".function-select-title li"),
                                i = "current";
                            n = n.replace(/[^\d]/g, ""),
                                n = "" == n ? 1 : Number(n) > a ? a: n,
                                this.value = n,
                                t = Number(n),
                            t > 0 && t <= 20 && t % 5 == 0 && r.removeClass(i).eq(t / 5 - 1).addClass(i),
                                e.buildDetail()
                        }),
                        e.NormalSelectTimesTab = new t.Tab({
                            par: "#J-function-select-tab",
                            triggers: ".function-select-title li",
                            panels: ".function-select-panel li",
                            eventType: "click",
                            index: 1
                        }),
                        e.NormalSelectTimesTab.addEvent("beforeSwitch",
                            function(t, e) {
                                var a = this;
                                a.par.find("li").removeClass("current")
                            }),
                        e.NormalSelectTimesTab.addEvent("afterSwitch",
                            function(t, a) {
                                var n = this,
                                    r = parseInt(n.getTrigger(a).text());
                                $("#J-trace-normal-times").val(r),
                                    e.buildDetail()
                            }),
                        e.normalSelectMultiple = new t.Select({
                            realDom: "#J-trace-normal-multiple",
                            isInput: !0,
                            expands: {
                                inputEvent: function() {
                                    var t = this;
                                    t.getInput().keyup(function(e) {
                                        var a = this.value,
                                            n = 99999;
                                        this.value = this.value.replace(/[^\d]/g, ""),
                                            a = Number(this.value),
                                        a < 1 && (this.value = 1),
                                        a > n && (this.value = n),
                                            t.setValue(this.value)
                                    })
                                }
                            }
                        }),
                        e.normalSelectMultiple.addEvent("change",
                            function(t, a, n) {
                                var r = e.getOrderData().amount,
                                    i = Number(a),
                                    l = 9999999,
                                    s = o.getCurrentGameMessage(),
                                    u = "";
                                i > l ? (u = o.getCurrentGame().getGameConfig().getInstance().getTitleByName(maxObj.gameMethod).join("-"), s.show({
                                    confirmIsShow: !0,
                                    mask: !0,
                                    msg: "",
                                    tpl: '<div class="pop-waring"><i class="ico-waring &lt;#=icon-class#&gt;"></i><h4 class="pop-text"><#=msg#></h4></div>',
                                    data: {
                                        tplData: {
                                            msg: translate.MaxErrorMsg[0] + "<b>[" + u + "]</b> " + translate.MaxErrorMsg[1]
                                        }
                                    },
                                    confirmFun: function() {
                                        a = l,
                                            e.normalSelectMultiple.setValue(a),
                                            s.hide(),
                                            e.getTable().find(".trace-row-multiple").val(a),
                                            e.getTable().find(".trace-row-money").each(function() {
                                                var t = $(this);
                                                Number(t.parent().parent().find(".trace-row-multiple").val());
                                                t.html(e.formatMoney(r * Number(a)))
                                            }),
                                            e.updateStatistics()
                                    }
                                })) : (e.getTable().find(".trace-row-multiple").val(a), e.getTable().find(".trace-row-money").each(function() {
                                    var t = $(this);
                                    Number(t.parent().parent().find(".trace-row-multiple").val());
                                    t.html(e.formatMoney(r * Number(a)))
                                }), e.updateStatistics())
                            }),
                        e.panel.find(".chase-table").keyup(function(t) {
                            var a = $(t.target),
                                n = e.getOrderData().amount;
                            if (a.hasClass("trace-row-multiple")) {
                                var r = Number(u(a.val())),
                                    i = e.getRowTableType(),
                                    l = Number(o.getCurrentGameOrder().getOrderMaxMultiple().maxnum);
                                0 == r ? (a.val(a.val().replace(/^0/g, "")), e.updateStatistics()) : r > l ? a.val(l) : (a.parent().parent().find(".trace-row-money").html(e.formatMoney(n * r)), a.val(r), "trace_advanced_yingli_a" != i && "trace_advanced_yingli_b" != i && "trace_advanced_yinglilv_a" != i && "trace_advanced_yinglilv_b" != i || e.rebuildYinglilvRows(), e.updateStatistics())
                            }
                        }).on("blur", ".trace-row-multiple",
                            function(t) {
                                var a = $(t.target);
                                a.val(s(a.val(), 1, o.getCurrentGameOrder().getOrderMaxMultiple().maxnum)),
                                    e.updateStatistics()
                            }),
                        setTimeout(function() {
                                e.buildStartNumberSelectDom()
                            },
                            10),
                        $("#J-trace-advanced-times").keyup(function() {
                            this.value = s(this.value, 10, Number($("#J-trace-number-max").text()))
                        }),
                        $("#J-trace-advance-multiple").keyup(function(t) {
                            var e = $(t.target),
                                a = Number(u(e.val())),
                                n = Number(o.getCurrentGameOrder().getOrderMaxMultiple().maxnum);
                            0 == a ? e.val(e.val().replace(/^0/g, "")) : a > n ? e.val(n) : e.val(a)
                        }).blur(function() {
                            this.value = s(this.value, 1, o.getCurrentGameOrder().getOrderMaxMultiple().maxnum)
                        }),
                        e.panel.find(".trace-advanced-type-switch").click(function() {
                            var t, a = $(this),
                                n = a.parent(),
                                r = n.parent().children();
                            r.each(function(i) {
                                t = r.get(i),
                                    n.get(0) != t ? $(t).find('input[type="text"]').attr("disabled", "disabled") : ($(t).find('input[type="text"]').attr("disabled", !1).eq(0).focus(), e.setTypeTypeType(n.attr("data-type"))),
                                    a.parent().hasClass("trace-input-multiple") ? this.value = s(this.value, 1, o.getCurrentGameOrder().getOrderMaxMultiple().maxnum) : this.value = s(this.value, 1, 99999999)
                            })
                        }),
                        $("#J-trace-advanced-type-panel").on("keyup", "input[type=text]",
                            function(t) {
                                var e = $(t.target);
                                e.hasClass("trace-input-multiple") ? this.value = s(this.value, 1, o.getCurrentGameOrder().getOrderMaxMultiple().maxnum) : this.value = s(this.value, 1, 99999999)
                            }),
                        $("#J-trace-builddetail").click(function() {
                            e.confirmSetting()
                        }),
                        e.panel.find(".chase-table").click(function(t) {
                            var a, n = $(t.target),
                                r = $.trim(n.attr("data-action")),
                                i = !0;
                            if (r && "" != r) switch (r) {
                                case "checkedAll":
                                    i = !!n.get(0).checked,
                                        a = e.getRowTableType(),
                                        e.getTable().find(".trace-row-checked").each(function() {
                                            this.checked = i
                                        }),
                                    "trace_advanced_yingli_a" != a && "trace_advanced_yingli_b" != a && "trace_advanced_yinglilv_a" != a && "trace_advanced_yinglilv_b" != a || e.rebuildYinglilvRows(),
                                        e.updateStatistics();
                                    break;
                                case "checkedRow":
                                    n.size() > 0 && (a = e.getRowTableType(), "trace_advanced_yingli_a" != a && "trace_advanced_yingli_b" != a && "trace_advanced_yinglilv_a" != a && "trace_advanced_yinglilv_b" != a || e.rebuildYinglilvRows(), e.updateStatistics())
                            }
                        })
                },
                buildStartNumberSelectDom: function() {
                    var e, a = this,
                        n = o.getCurrentGame().getDynamicConfig().gamenumbers,
                        r = n.length,
                        i = 0,
                        l = [],
                        s = o.getCurrentGame().getCurrentNumber(),
                        u = "(" + translate["当前期"] + ")",
                        c = u,
                        h = "";
                    for (a.traceStartNumberSelect && a.traceStartNumberSelect.getValue && (e = a.traceStartNumberSelect.getValue()); i < r; i++) c = s == n[i].number ? u: "",
                        h = a.traceStartNumberSelect && n[i].number == e ? ' selected="selected" ': "",
                        l.push('<option value="' + n[i].number + '" ' + h + " >" + n[i].number + c + "</option>");
                    $("#J-traceStartNumber").html(l.join("")),
                        $("#J-trace-number-max").text(r),
                    a.traceStartNumberSelect && a.traceStartNumberSelect.dom.remove(),
                        a.traceStartNumberSelect = new t.Select({
                            realDom: "#J-traceStartNumber",
                            cls: "chase-trace-startNumber-select"
                        }),
                        a.traceStartNumberSelect.addEvent("change",
                            function(t, e, n) {
                                a.setTraceStartNumber(e)
                            })
                },
                updateTableNumber: function() {
                    var t, e, a, n, r, i, l, s, u = this,
                        c = o.getCurrentGame().getDynamicConfig().gamenumbers,
                        h = c.length,
                        m = o.getCurrentGame().getCurrentNumber(),
                        d = "",
                        p = "",
                        g = '<span class="icon-period-current"></span>';
                    h > 0 && (t = u.getNormalRowTable().find("tr"), e = u.getAdvancedRowTable().find("tr"), l = u.getStartNumberIndexByNumber(a), t.each(function(t) {
                        return 0 == t || (n = $(this), r = n.find(".trace-row-number"), i = n.find(".trace-row-time"), multipleDom = n.find(".trace-row-multiple"), a = r.text().replace(/[^\d]/g, ""), s = n.find(".text-center"), n.find(".trace-row-multiple").removeAttr("disabled"), void(l + 1 < h && (d = c[l + 1].number == m ? g: "", r.html(c[l + 1].number + d), multipleDom.text("1"), i.text(c[l + 1].time), s.html("").html(t), p = r.text().substr(0, 6), l++)))
                    }), l = u.getStartNumberIndexByNumber(a), e.each(function(t) {
                        return 0 == t || (n = $(this), r = n.find(".trace-row-number"), i = n.find(".trace-row-time"), multipleDom = n.find(".trace-row-multiple"), a = r.text().replace(/[^\d]/g, ""), s = n.find(".text-center"), n.find(".trace-row-multiple").removeAttr("disabled"), void(l + 1 < h && (d = c[l + 1].number == m ? g: "", r.html(c[l + 1].number + d), multipleDom.text("1"), i.text(c[l + 1].time), s.html("").html(t), p = r.text().substr(0, 6), l++)))
                    }))
                },
                rebuildYinglilvRows: function() {
                    var t = this,
                        e = t.getRowTable().find("tr"),
                        a = t.getOrderData(),
                        n = t.getWinMoney(),
                        r = null,
                        i = null,
                        l = null,
                        o = 1,
                        s = null,
                        u = 0,
                        c = null,
                        h = null,
                        m = null,
                        d = -1;
                    costAmount = 0,
                        e.each(function(e) {
                            e > 0 && (r = $(this), i = r.find(".trace-row-checked"), i.size() > 0 && i.get(0).checked && (l = r.find(".trace-row-multiple"), o = Number(l.val()) || 1, s = r.find(".trace-row-money"), u = Number(s.text().replace(",", "")), c = r.find(".trace-row-userGroupMoney"), h = r.find(".trace-row-winTotalAmount"), m = r.find(".trace-row-yinglilv"), costAmount += a.amount * o, s.text(t.formatMoney(a.amount * o)), c.text(t.formatMoney(n * o)), h.text(t.formatMoney(n * o - costAmount)), d = (n * o - costAmount) / costAmount * 100, m.text(Number(d).toFixed(2))))
                        })
                },
                isOpen: function() {
                    return this.isOpenPanel
                },
                setTypeTypeType: function(t) {
                    this.typeTypeType = t
                },
                getTypeTypeType: function() {
                    return this.typeTypeType
                },
                getIsWinStop: function() {
                    var t = $("#J-trace-iswintimesstop"),
                        e = $("#J-trace-iswinstop");
                    return t.prop("checked") ? 1 : e.prop("checked") ? 2 : 0
                },
                getTraceWinStopValue: function() {
                    var t = this,
                        e = t.getIsWinStop();
                    return 1 == e ? Number($("#J-trace-iswintimesstop-times").val()) : 2 == e ? Number($("#J-trace-iswinstop-money").val()) : -1
                },
                updateStatistics: function() {
                    var t = this,
                        e = t.getResultData();
                    $("#J-trace-statistics-times").html(e.times),
                        $("#J-trace-statistics-lotterys-num").html(e.lotterysNum),
                        $("#J-trace-statistics-amount").html(t.formatMoney(e.amount))
                },
                getResultData: function() {
                    var t, e, a, n, r, i = this,
                        l = i.getOrderData(),
                        s = i.getRowTable().find("tr"),
                        u = 0,
                        c = 0,
                        h = 0,
                        m = [],
                        d = {
                            times: 0,
                            lotterysNum: 0,
                            amount: 0,
                            orderData: l,
                            traceData: [],
                            traceType: i.getTraceType()
                        },
                        p = "",
                        g = o.getCurrentGame().getDynamicConfig().gamenumbers;
                    return s.each(function(o) {
                        t = $(this),
                            e = t.find(".trace-row-checked"),
                            tracenumber = t.find(".trace-row-number"),
                            traceNo = t.find(".text-center"),
                        0 != o && traceNo.html("").html(o),
                            e.size() > 0 && e.get(0).checked ? (a = e.parent(), r = i.getStartNumberIndexByNumber(a.find(".trace-row-number").text()), r = r == -1 ? 0 : r, n = g[r].issueCode, t.find(".trace-row-multiple").removeAttr("disabled"), "0" == t.find(".trace-row-multiple").val() && (t.find(".trace-row-multiple").val("1"), t.find(".trace-row-money").text(i.formatMoney(1 * l.amount))), m.push({
                                traceNumber: a.find(".trace-row-number").text(),
                                issueCode: n,
                                multiple: Number(a.parent().find(".trace-row-multiple").val())
                            }), u++, h += 1e3 * Number(t.find(".trace-row-money").text().replace(/,/g, ""))) : (t.find(".trace-row-money").text("0"), t.find(".trace-row-multiple").val("0"), t.find(".trace-row-multiple").attr("disabled", "disabled").css("border", "1px solid #CECECE")),
                            p = tracenumber.text().substr(0, 6)
                    }),
                    l && (c = u * l.count, d = {
                        times: u,
                        lotterysNum: c,
                        amount: Number(h) / 1e3,
                        orderData: l,
                        traceData: m,
                        traceType: i.getTraceType()
                    }),
                        d
                },
                updateOrder: function(t) {
                    var e = this,
                        a = o.getCurrentGameOrder().getTotal(),
                        n = e.getRowTableType(),
                        r = o.getCurrentGameOrder().getOrderMaxMultiple(),
                        i = r.maxnum,
                        l = Number(e.normalSelectMultiple.getValue()),
                        s = Number($("#J-trace-advance-multiple").val());
                    e.setOrderData(a),
                    l > i && e.normalSelectMultiple.setValue(i),
                    s > i && $("#J-trace-advance-multiple").val(i),
                    t || "trace_advanced_fanbei_a" != n && "trace_advanced_fanbei_b" != n && "trace_advanced_yingli_a" != n && "trace_advanced_yingli_b" != n && "trace_advanced_yinglilv_a" != n && "trace_advanced_yinglilv_b" != n || o.getCurrentGameMessage().show({
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
                        e.getAdvancedRowTable().html(""),
                        e.updateDetail(a.amount),
                        e.updateStatistics()
                },
                updateDetail: function(t) {
                    var e, a = this,
                        n = a.getTable().find("tr"),
                        r = null,
                        i = a.getRowTableType();
                    "trace_advanced_yingli_a" == i || "trace_advanced_yingli_b" == i || "trace_advanced_yinglilv_a" == i || "trace_advanced_yinglilv_b" == i ? a.rebuildYinglilvRows() : (e = a.getAdvancedRowTable().attr("data-type"), "trace_advanced_fanbei_a" != e && "trace_advanced_fanbei_b" != e || (n = a.getAdvancedTable().find("tr"), n.each(function() {
                        r = $(this),
                            rowMoney = r.find(".trace-row-money"),
                            rowMultiple = Number(r.find(".trace-row-multiple").val()),
                            rowMoney.text(a.formatMoney(rowMultiple * t))
                    }))),
                        n = a.getNormalTable().find("tr"),
                        n.each(function() {
                            r = $(this),
                                rowMoney = r.find(".trace-row-money"),
                                rowMultiple = Number(r.find(".trace-row-multiple").val()),
                                rowMoney.text(a.formatMoney(rowMultiple * t))
                        })
                },
                getWinMoney: function() {
                    for (var t = this,
                             e = t.getOrderData().orders, a = 0, n = e.length, r = 0; a < n; a++) r += t.getPlayGroupMoneyByGameMethodName(e[a].type) * e[a].moneyUnit;
                    return r
                },
                confirmSetting: function() {
                    var t = this;
                    t.setOrderData(o.getCurrentGameOrder().getTotal()),
                        t.buildDetail()
                },
                isSameGameMethod: function() {
                    var t = this,
                        e = t.getOrderData().orders,
                        a = "",
                        n = -1;
                    for (i = 0, len = e.length; i < len; i++) {
                        if ("" != a) {
                            if (a != e[i].type) return ! 1
                        } else a = e[i].type;
                        if (n != -1) {
                            if (n != e[i].moneyUnit) return ! 1
                        } else n = e[i].moneyUnit
                    }
                    return ! 0
                },
                getSameGameMethodName: function() {
                    var t = this,
                        e = t.getOrderData().orders;
                    if (e.length > 0) return e[0].type
                },
                getSameGameMoneyUnti: function() {
                    var t = this,
                        e = t.getOrderData().orders;
                    if (e.length > 0) return e[0].moneyUnit
                },
                setOrderData: function(t) {
                    this.orderData = t
                },
                getOrderData: function() {
                    return null == this.orderData ? {
                        count: 0,
                        amount: 0,
                        orders: []
                    }: this.orderData
                },
                getStartNumberIndexByNumber: function(t) {
                    for (var e = o.getCurrentGame().getDynamicConfig().gamenumbers, a = e.length, n = 0; n < a; n++) if (e[n].number == t) return n;
                    return - 1
                },
                getStartNumberByIndex: function(t) {
                    var e = o.getCurrentGame().getDynamicConfig().gamenumbers;
                    return e.length > t ? e[t] : {}
                },
                buildDetail: function() {
                    var t = this,
                        e = t.getTraceType(),
                        a = o.getCurrentGameMessage();
                    return t.setOrderData(o.getCurrentGameOrder().getTotal()),
                        orderAmount = t.getOrderData().amount,
                        "normal" != e && orderAmount <= 0 ? void a.show({
                            type: "mustChoose",
                            msg: translate.SelectOne,
                            data: {
                                tplData: {
                                    msg: translate.SelectOne
                                }
                            }
                        }) : ($.isFunction(t["trace_" + e]) && t["trace_" + e].call(t), void t.updateStatistics())
                },
                trace_normal: function() {
                    var t, e, a, n = this,
                        r = n.defConfig,
                        i = r.dataRowTemplate,
                        l = [],
                        s = (n.getTraceType(), n.getTimes()),
                        u = n.getMultiple(),
                        c = (o.getCurrentGameOrder().getOrderMaxMultiple().maxnum, 0),
                        h = 0,
                        m = o.getCurrentGame().getCurrentNumber(),
                        d = '<span class="icon-period-current"></span>',
                        p = "",
                        g = n.traceStartNumberSelect.getValue();
                    o.getCurrentGame().getDynamicConfig().gamenumbers.length;
                    for (n.setOrderData(o.getCurrentGameOrder().getTotal()), c = n.getOrderData().amount, l.push(r.dataRowHeader), t = n.getStartNumberIndexByNumber(g), h = t, s += h; h < s; h++) e = n.getStartNumberByIndex(h),
                        p = e.number,
                    p == m && (p += d),
                    e.number && (a = {
                        No: h + 1,
                        traceNumber: p,
                        multiple: u,
                        money: n.formatMoney(c * u),
                        publishTime: e.time
                    },
                        l.push(n.formatRow(i, a)));
                    n.getRowTable().html(l.join("")),
                        n.getRowTable().attr("data-type", "trace_normal")
                },
                trace_advanced: function() {
                    var t = this,
                        e = t.getTraceType(),
                        a = t.getAdvancedType(),
                        n = t.getTypeTypeType(),
                        r = "trace_" + e + "_" + a + "_" + n;
                    return t.isSameGameMethod() || "yingli" != a && "yinglilv" != a ? ($.isFunction(t[r]) && t[r](), void t.getRowTable().attr("data-type", r)) : void o.getCurrentGameMessage().show({
                        type: "mustChoose",
                        msg: "",
                        data: {
                            tplData: {
                                msg: translate.SamePlay
                            }
                        }
                    })
                },
                trace_advanced_fanbei_a: function(t) {
                    var e, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        l = [],
                        s = r.getTimes(),
                        u = o.getCurrentGameOrder().getOrderMaxMultiple(),
                        c = t || u.maxnum,
                        h = o.getCurrentGame().getGameConfig().getInstance().getTitleByName(u.gameMethod).join("-"),
                        m = Number($("#J-trace-advanced-fanbei-a-jiange").val()),
                        d = r.getMultiple(),
                        p = d,
                        g = Number($("#J-trace-advanced-fanbei-a-multiple").val()),
                        f = 0,
                        v = m,
                        b = o.getCurrentGame().getCurrentNumber(),
                        y = '<span class="icon-period-current"></span>',
                        w = "",
                        C = r.traceStartNumberSelect.getValue(),
                        S = (o.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        B = "";
                    for (l.push(r.defConfig.dataRowHeader), e = r.getStartNumberIndexByNumber(C), f = e, s += f, a = r.getStartNumberByIndex(f); f < s; f++) {
                        if (v <= 0 && (v = m, p *= g), v--, p > c && (o.getCurrentGameMessage().show({
                                type: "normal",
                                closeText: translate.Comfirm,
                                closeFun: function() {
                                    r.trace_advanced_fanbei_a(c),
                                        this.hide()
                                },
                                data: {
                                    tplData: {
                                        msg: translate.MaxMultipleMsg[0] + "<b>[" + h + "]</b>" + translate.MaxMultipleMsg[1]
                                    }
                                }
                            }), !t)) return;
                        if (p = p > c ? c: p, a = r.getStartNumberByIndex(f), !a.number) break;
                        w = a.number,
                        w == b && (w += y),
                            B = f + 1,
                            n = {
                                No: B,
                                traceNumber: w,
                                multiple: p,
                                money: r.formatMoney(orderAmount * p),
                                publishTime: a.time
                            },
                            S = w.substr(0, 6),
                            l.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(l.join(""))
                },
                trace_advanced_fanbei_b: function() {
                    var t, e, a, n = this,
                        r = n.defConfig.dataRowTemplate,
                        i = [],
                        l = n.getTimes(),
                        s = o.getCurrentGameOrder().getOrderMaxMultiple().maxnum,
                        u = (Number($("#J-trace-advanced-fanbei-a-jiange").val()), n.getMultiple(), 1),
                        c = (Number($("#J-trace-advanced-fanbei-a-multiple").val()), 0),
                        h = Number($("#J-trace-advanced-fanbei-b-num").val()),
                        m = Number($("#J-trace-advance-multiple").val()),
                        d = Number($("#J-trace-advanced-fanbei-b-multiple").val()),
                        p = o.getCurrentGame().getCurrentNumber(),
                        g = '<span class="icon-period-current"></span>',
                        f = "",
                        v = n.traceStartNumberSelect.getValue(),
                        b = (o.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        y = "";
                    for (i.push(n.defConfig.dataRowHeader), t = n.getStartNumberIndexByNumber(v), c = t, l += c, e = n.getStartNumberByIndex(c); c < l && (u = c < h + t ? m > s ? s: m: d > s ? s: d, e = n.getStartNumberByIndex(c), e.number); c++) f = e.number,
                    f == p && (f += g),
                        y = c + 1,
                        a = {
                            No: y,
                            traceNumber: f,
                            multiple: u,
                            money: n.formatMoney(orderAmount * u),
                            publishTime: e.time
                        },
                        b = f.substr(0, 6),
                        i.push(n.formatRow(r, a));
                    n.getRowTable().html(i.join(""))
                },
                trace_advanced_yingli_a: function(t) {
                    var e, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        l = [],
                        s = r.getTimes(),
                        u = o.getCurrentGameOrder().getOrderMaxMultiple(),
                        c = t || u.maxnum,
                        h = o.getCurrentGame().getGameConfig().getInstance().getTitleByName(u.gameMethod).join("-"),
                        m = r.getMultiple(),
                        d = 0,
                        p = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yingli-a-money").val())),
                        g = r.getSameGameMoneyUnti(),
                        f = r.getWinMoney(),
                        v = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        b = r.getOrderData().orders,
                        y = 0,
                        w = 0,
                        C = 0,
                        S = 0,
                        B = o.getCurrentGame().getCurrentNumber(),
                        M = '<span class="icon-period-current"></span>',
                        G = "",
                        N = r.traceStartNumberSelect.getValue(),
                        D = (o.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        T = "";
                    for (l.push(r.defConfig.dataRowYingliHeader), e = r.getStartNumberIndexByNumber(N), d = e, s += d, a = r.getStartNumberByIndex(d); d < s; d++) {
                        if (y = 0, C = 0, v = 1, $.each(b,
                                function(t) {
                                    var e = this,
                                        a = e.num,
                                        n = e.onePrice,
                                        r = e.multiple,
                                        i = a * r * n * g,
                                        l = f * r;
                                    C += l,
                                        y += i
                                }), v = r.getMultipleByMoney(f, p, y, w, m), v < 0) return void o.getCurrentGameMessage().show({
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
                        if (v > c) {
                            if (o.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yingli_a(c),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[0] + "<b>[" + h + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !t) return;
                            v = t
                        }
                        if (y *= v, w += y, C = f * v - w, S = C / w, a = r.getStartNumberByIndex(d), !a.number) break;
                        G = a.number,
                        G == B && (G += M),
                            T = d + 1,
                            n = {
                                No: T,
                                traceNumber: G,
                                multiple: v,
                                money: r.formatMoney(y),
                                userGroupMoney: r.formatMoney(f * v),
                                winTotalAmout: r.formatMoney(C),
                                yinglilv: Number(100 * S).toFixed(2)
                            },
                            D = G.substr(0, 6),
                            l.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(l.join(""))
                },
                trace_advanced_yingli_b: function(t) {
                    var e, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        l = [],
                        s = r.getTimes(),
                        u = o.getCurrentGameOrder().getOrderMaxMultiple(),
                        c = t || u.maxnum,
                        h = o.getCurrentGame().getGameConfig().getInstance().getTitleByName(u.gameMethod).join("-"),
                        m = r.getMultiple(),
                        d = 0,
                        p = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yingli-b-num").val())),
                        g = Number($("#J-trace-advanced-yingli-b-money1").val()),
                        f = Number($("#J-trace-advanced-yingli-b-money2").val()),
                        v = r.getSameGameMoneyUnti(),
                        b = r.getWinMoney(),
                        y = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        w = r.getOrderData().orders,
                        C = 0,
                        S = 0,
                        B = 0,
                        M = 0,
                        G = o.getCurrentGame().getCurrentNumber(),
                        N = '<span class="icon-period-current"></span>',
                        D = "",
                        T = r.traceStartNumberSelect.getValue(),
                        j = (o.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        x = "";
                    for (l.push(r.defConfig.dataRowYingliHeader), e = r.getStartNumberIndexByNumber(T), d = e, s += d, a = r.getStartNumberByIndex(d); d < s; d++) {
                        if (d + 1 > p + e && (g = f), C = 0, B = 0, y = 1, $.each(w,
                                function(t) {
                                    var e = this,
                                        a = e.num,
                                        n = e.onePrice,
                                        r = e.multiple,
                                        i = a * r * n * v,
                                        l = b * r;
                                    B += l,
                                        C += i
                                }), y = r.getMultipleByMoney(b, g, C, S, m), y < 0) return void o.getCurrentGameMessage().show({
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
                        if (y > c) {
                            if (o.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yingli_b(c),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[2] + "<b>[" + h + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !t) return;
                            y = t
                        }
                        if (C *= y, S += C, B = b * y - S, M = B / S, a = r.getStartNumberByIndex(d), !a.number) break;
                        D = a.number,
                        D == G && (D += N),
                            x = d + 1,
                            n = {
                                No: x,
                                traceNumber: D,
                                multiple: y,
                                money: r.formatMoney(C),
                                userGroupMoney: r.formatMoney(b * y),
                                winTotalAmout: r.formatMoney(B),
                                yinglilv: Number(100 * M).toFixed(2)
                            },
                            j = D.substr(0, 6),
                            l.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(l.join(""))
                },
                trace_advanced_yinglilv_a: function(t) {
                    var e, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        l = [],
                        s = r.getTimes(),
                        u = o.getCurrentGameOrder().getOrderMaxMultiple(),
                        c = t || u.maxnum,
                        h = o.getCurrentGame().getGameConfig().getInstance().getTitleByName(u.gameMethod).join("-"),
                        m = r.getMultiple(),
                        d = 0,
                        p = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yinglilv-a").val()) / 100),
                        g = r.getSameGameMoneyUnti(),
                        f = r.getWinMoney(),
                        v = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        b = r.getOrderData().orders,
                        y = 0,
                        w = 0,
                        C = 0,
                        S = o.getCurrentGame().getCurrentNumber(),
                        B = '<span class="icon-period-current"></span>',
                        M = "",
                        G = r.traceStartNumberSelect.getValue(),
                        N = (o.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        D = "";
                    for (l.push(r.defConfig.dataRowYingliHeader), e = r.getStartNumberIndexByNumber(G), d = e, s += d, a = r.getStartNumberByIndex(d); d < s; d++) {
                        if (y = 0, C = 0, v = 1, $.each(b,
                                function(t) {
                                    var e = this,
                                        a = e.num,
                                        n = e.onePrice,
                                        r = e.multiple,
                                        i = a * r * n * g,
                                        l = f * r;
                                    C += l,
                                        y += i
                                }), v = r.getMultipleByYinglilv(p, f, y, w, m), v < 0) return void o.getCurrentGameMessage().show({
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
                        if (v > c) {
                            if (o.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yinglilv_a(c),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[2] + "<b>[" + h + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !t) return;
                            v = t
                        }
                        if (y *= v, w += y, C = f * v - w, a = r.getStartNumberByIndex(d), !a.number) break;
                        M = a.number,
                        M == S && (M += B),
                            D = d + 1,
                            n = {
                                No: D,
                                traceNumber: M,
                                multiple: v,
                                money: r.formatMoney(y),
                                userGroupMoney: r.formatMoney(f * v),
                                winTotalAmout: r.formatMoney(C),
                                yinglilv: Number(C / w * 100).toFixed(2)
                            },
                            l.push(r.formatRow(i, n))
                    }
                    N = M.substr(0, 6),
                        r.getRowTable().html(l.join(""))
                },
                trace_advanced_yinglilv_b: function(t) {
                    var e, a, n, r = this,
                        i = r.defConfig.dataRowTemplate,
                        l = [],
                        s = r.getTimes(),
                        u = o.getCurrentGameOrder().getOrderMaxMultiple(),
                        c = t || u.maxnum,
                        h = o.getCurrentGame().getGameConfig().getInstance().getTitleByName(u.gameMethod).join("-"),
                        m = r.getMultiple(),
                        d = 0,
                        p = (r.getSameGameMethodName(), Number($("#J-trace-advanced-yinglilv-b-num").val())),
                        g = Number($("#J-trace-advanced-yingli-b-yinglilv1").val()) / 100,
                        f = Number($("#J-trace-advanced-yingli-b-yinglilv2").val()) / 100,
                        v = 0,
                        b = r.getSameGameMoneyUnti(),
                        y = r.getWinMoney(),
                        w = 1,
                        i = r.defConfig.dataRowYingliTemplate,
                        C = r.getOrderData().orders,
                        S = 0,
                        B = 0,
                        M = 0,
                        G = o.getCurrentGame().getCurrentNumber(),
                        N = '<span class="icon-period-current"></span>',
                        D = "",
                        T = r.traceStartNumberSelect.getValue(),
                        j = (o.getCurrentGame().getDynamicConfig().gamenumbers.length, ""),
                        x = "";
                    for (l.push(r.defConfig.dataRowYingliHeader), e = r.getStartNumberIndexByNumber(T), d = e, s += d, a = r.getStartNumberByIndex(d); d < s; d++) {
                        if (S = 0, M = 0, w = 1, $.each(C,
                                function(t) {
                                    var e = this,
                                        a = e.num,
                                        n = e.onePrice,
                                        r = e.multiple,
                                        i = a * r * n * b,
                                        l = a * y * r;
                                    M += l,
                                        S += i
                                }), v = d < p + e ? g: f, w = r.getMultipleByYinglilv(v, y, S, B, m), w < 0) return void o.getCurrentGameMessage().show({
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
                        if (w > c) {
                            if (o.getCurrentGameMessage().show({
                                    type: "normal",
                                    closeText: translate.Comfirm,
                                    closeFun: function() {
                                        r.trace_advanced_yinglilv_a(c),
                                            r.updateStatistics(),
                                            this.hide()
                                    },
                                    data: {
                                        tplData: {
                                            msg: translate.MaxMultipleMsg[2] + "<b>[" + h + "]</b>" + translate.MaxMultipleMsg[1]
                                        }
                                    }
                                }), !t) return;
                            w = t
                        }
                        if (S *= w, B += S, M = y * w - B, a = r.getStartNumberByIndex(d), !a.number) break;
                        D = a.number,
                        D == G && (D += N),
                            x = d + 1,
                            n = {
                                No: x,
                                traceNumber: D,
                                multiple: w,
                                money: r.formatMoney(S),
                                userGroupMoney: r.formatMoney(y * w),
                                winTotalAmout: r.formatMoney(M),
                                yinglilv: Number(M / B * 100).toFixed(2)
                            },
                            j = D.substr(0, 6),
                            l.push(r.formatRow(i, n))
                    }
                    r.getRowTable().html(l.join(""))
                },
                getMultipleByYinglilv: function(t, e, a, n, r) {
                    for (var i = r || 1,
                             l = 1e5; i < l; i++) if ((e * i - a * i - n) / (a * i + n) >= t) return i;
                    return - 1
                },
                getMultipleByMoney: function(t, e, a, n, r) {
                    for (var i = r || 1,
                             l = 1e5; i < l; i++) if (t * i - n - a * i > e) return i;
                    return - 1
                },
                getPlayGroupMoneyByGameMethodName: function(t) {
                    return Number(o.getCurrentGame().getDynamicConfig().gamelimit[0][t].usergroupmoney)
                },
                formatRow: function(t, e) {
                    var a, n, r = e;
                    for (a in r) r.hasOwnProperty(a) && (n = RegExp("<#=" + a + "#>", "g"), t = t.replace(n, r[a]));
                    return t
                },
                formatMoney: function(t) {
                    var t = Number(t),
                        e = /(-?\d+)(^\d{3}\.)/;
                    for (t = Number.prototype.toFixed ? t.toFixed(4) : Math.round(100 * t) / 100, t = "" + t; e.test(t);) t = t.replace(e, "$1,$2");
                    return t
                },
                getAdvancedTable: function() {
                    var t = this;
                    return t._advancedTable || (t._advancedTable = $("#J-trace-table-advanced"))
                },
                getAdvancedRowTable: function() {
                    var t = this;
                    return t._advancedTableContainer || (t._advancedTableContainer = $("#J-trace-table-advanced-body"))
                },
                getNormalTable: function() {
                    var t = this;
                    return t._table || (t._table = $("#J-trace-table"))
                },
                getNormalRowTable: function() {
                    var t = this;
                    return t._tableContainer || (t._tableContainer = $("#J-trace-table-body"))
                },
                getTable: function() {
                    var t = this;
                    return t.isAdvanced() ? t._advancedTable || (t._advancedTable = $("#J-trace-table-advanced")) : t._table || (t._table = $("#J-trace-table"))
                },
                getRowTable: function() {
                    var t = this;
                    return t.isAdvanced() ? t._advancedTableContainer || (t._advancedTableContainer = $("#J-trace-table-advanced-body")) : t._tableContainer || (t._tableContainer = $("#J-trace-table-body"))
                },
                setCurrentTraceNumber: function(t) {
                    var e = this;
                    e.currentTraceNumber = t;
                },
                getCurrentTraceNumber: function() {
                    return me.currentTraceNumber
                },
                setTraceStartNumber: function(t) {
                    var e = this;
                    e.traceStartNumber = t
                },
                getTraceStartNumber: function() {
                    return me.traceStartNumber
                },
                getMultiple: function() {
                    var t = this;
                    return t.isAdvanced() ? t.getAdvancedMultiple() : t.getNormalMultiple()
                },
                getNormalMultiple: function() {
                    return Number(this.normalSelectMultiple.getValue())
                },
                getAdvancedMultiple: function() {
                    return Number($("#J-trace-advance-multiple").val())
                },
                setIsWinStop: function(t) {
                    this.isWinStop = !!t
                },
                getTimes: function() {
                    var t = this;
                    return t.isAdvanced() ? t.getAdvancedTimes() : Number($("#J-trace-normal-times").val())
                },
                getAdvancedTimes: function() {
                    return Number($("#J-trace-advanced-times").val())
                },
                isAdvanced: function() {
                    var t = this;
                    return "advanced" == t.traceType
                },
                setTraceType: function(t) {
                    var e = this;
                    t != e.traceType && (t = t ? t: "normal", e.traceType = t)
                },
                getTraceType: function() {
                    return this.traceType
                },
                getRowTableType: function() {
                    var t = this;
                    return t.getRowTable().attr("data-type")
                },
                emptyRowTable: function() {
                    var t = this;
                    $("#J-trace-table-body").html(""),
                        $("#J-trace-table-advanced-body").html(""),
                        t.updateStatistics()
                },
                show: function() {
                    var t = this;
                    o.getCurrentGameOrder().editMultiples(1),
                        t.setOrderData(o.getCurrentGameOrder().getTotal()),
                        $(".amount").hide(),
                        o.getCurrentGameStatistics().getMultipleDom().hide(),
                        o.getCurrentGameStatistics().getMultipleTextDom().show(),
                        t.panel.show(),
                        t.isOpenPanel = !0,
                        t.buildDetail()
                },
                hide: function() {
                    var t = this;
                    o.getCurrentGameOrder().restoreMultiples(),
                        $(".amount").show(),
                        o.getCurrentGameStatistics().getMultipleDom().show(),
                        o.getCurrentGameStatistics().getMultipleTextDom().hide(),
                        t.panel.hide(),
                        t.isOpenPanel = !1,
                        t.reSetTab(),
                        t.emptyRowTable(),
                        $("#J-trace-switch").get(0).checked = !1
                },
                reSetTab: function() {
                    var t = this,
                        e = t.TraceTab,
                        a = t.TraceAdvancedTab,
                        n = t.NormalSelectTimesTab;
                    e.triggers.removeClass(e.defConfig.currClass),
                        e.triggers.eq(0).addClass(e.defConfig.currClass),
                        e.panels.removeClass(e.defConfig.currPanelClass),
                        e.panels.eq(0).addClass(e.defConfig.currPanelClass),
                        e.index = 0,
                        a.triggers.removeClass(a.defConfig.currClass),
                        a.triggers.eq(0).addClass(a.defConfig.currClass),
                        a.panels.removeClass(a.defConfig.currPanelClass),
                        a.panels.eq(0).addClass(a.defConfig.currPanelClass),
                        a.index = 0,
                        n.index = 1,
                        $("#J-trace-normal-times").val(10),
                        $("#J-function-select-tab .function-select-title li").removeClass("current").eq(1).addClass("current"),
                        t.normalSelectMultiple.setValue(1),
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
                        t.setTraceType("normal"),
                        t.advancedType = t.defConfig.advancedTypeHas[0],
                        t.typeTypeType = "a",
                        $("#J-trace-advanced-type-panel").find('input[type="radio"]').each(function(t) {
                            if ((t + 1) % 2 != 0) {
                                var e, a = $(this),
                                    n = a.parent(),
                                    r = n.parent().children();
                                this.checked = !0,
                                    r.each(function(t) {
                                        e = r.get(t),
                                            n.get(0) != e ? $(e).find('input[type="text"]').attr("disabled", "disabled") : $(e).find('input[type="text"]').attr("disabled", !1)
                                    })
                            }
                        })
                }
            },
            h = t.Class(c, a);
        h.defConfig = l,
            h.getInstance = function(t) {
                return r || (r = new h(t))
            },
            t[e] = h
    } (phoenix, "GameTrace", phoenix.Event),
    function(t, e, a) {
        var n = {
                name: "budingwei.buding.housan"
            },
            r = (t.Games, t.Games.SSCBJPK10.getInstance()),
            i = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(u.join(""))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                checkBallIsComplete: function() {
                    for (var t = this,
                             e = t.getBallData()[0], a = 0, n = e.length, r = 0; a < n; a++) e[a] > 0 && r++;
                    return r >= 1 ? t.isBallsComplete = !0 : t.isBallsComplete = !1
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            l = [];
        l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? o.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            c = o.join("");
        u.push(l.join("")),
            $.each([translate.后三],
                function(t) {
                    u.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            u.push(s.join(""));
        var h = t.Class(i, e);
        h.defConfig = n,
            r[n.name] = new h
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "budingwei.buding.qiansanpk"
            },
            r = (t.Games, t.Games.SSCBJPK10.getInstance()),
            i = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(u.join(""))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            l = [];
        l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? o.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            c = o.join("");
        u.push(l.join("")),
            $.each([translate.前三],
                function(t) {
                    u.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            u.push(s.join(""));
        var h = t.Class(i, e);
        h.defConfig = n,
            r[n.name] = new h
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "caichehao.caiche.dingweidan"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = []; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = n + 1 + "-" + (t[n][e] + 1)
                            }),
                        e = e.concat(r.join("&"));
                    return e.join("|")
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 10 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名, translate.第五名, translate.第六名, translate.第七名, translate.第八名, translate.第九名, translate.第十名],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "caipaiwei.caipai.guanyajun"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    r.length;
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                filterErrorData: function(t, e, a, n) {
                    var r = this,
                        n = n || [],
                        a = a || 0,
                        e = e || t.length;
                    return a == e ? n: (t[a][0] != t[a][1] && n.push(t[a]), a++, r.filterErrorData(t, e, a, n))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], c = 1, h = 0; r < i; r++) {
                        for (u[r] = [], e = n[r], s = e.length, l = !0, h = 0, o = 0; o < s; o++) e[o] > 0 && (l = !1, t || u[r].push(o), h++);
                        if (l) return a.isBallsComplete = !1,
                            [];
                        c *= h
                    }
                    return a.isBallsComplete = !0,
                        t ? c: a.isBallsComplete ? u = a.filterErrorData(a.combination(u)) : []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    for (e = t.checkRandomBets(); 0 == t.filterErrorData(t.combination(e));) e = t.checkRandomBets();
                    return i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 1 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1];
                    return e = t.filterErrorData(e)
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "qianer.qianers.qiansanzudanshi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {
                    var e = this;
                    setTimeout(function() {
                            e.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return t.addRanNumTag(),
                        e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                checkSingleNum: function(t) {
                    var e = this,
                        a = !0;
                    return 3 == t.length && (!e.checkRepeat(t) && ($.each(t,
                            function() {
                                if (!e.defConfig.checkNum.test(this) || Number(this) < 1 || Number(this) > 10) return a = !1,
                                    !1
                            }), a))
                }
            },
            o = t.Class(l, e);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSCBJPK10.Danshi),
    function(t, e, a) {
        var n = {
                name: "caipaiwei.caipai.pk10qiansidanshi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {
                    var e = this;
                    setTimeout(function() {
                            e.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    for (t.addRanNumTag(), e = t.checkRandomBets(); 0 == t.filterErrorData(t.combination(e));) e = t.checkRandomBets();
                    return i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                checkSingleNum: function(t) {
                    var e = this,
                        a = !0;
                    return 4 == t.length && (!e.checkRepeat(t) && ($.each(t,
                            function() {
                                if (!e.defConfig.checkNum.test(this) || Number(this) < 1 || Number(this) > 10) return a = !1,
                                    !1
                            }), a))
                }
            },
            o = t.Class(l, e);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSCBJPK10.Danshi),
    function(t, e, a) {
        var n = {
                name: "caipaiwei.caipai.pk10qianwudanshi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {
                    var e = this;
                    setTimeout(function() {
                            e.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return t.addRanNumTag(),
                        e = t.checkRandomBets(),
                        i = [[e.join(",")], [], []],
                        n = t.combination(e),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                checkSingleNum: function(t) {
                    var e = this,
                        a = !0;
                    return 5 == t.length && (!e.checkRepeat(t) && ($.each(t,
                            function() {
                                if (!e.defConfig.checkNum.test(this) || Number(this) < 1 || Number(this) > 10) return a = !1,
                                    !1
                            }), a))
                }
            },
            o = t.Class(l, e);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSCBJPK10.Danshi),
    function(t, e, a) {
        var n = {
                name: "caipaiwei.caipai.qiansanpk"
            },
            r = t.Games,
            i = t.Games.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                editSubmitData: function(t) {
                    for (var e, a, n = t.ball.split("|"), r = 0, i = n.length, l = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    r.length;
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                filterErrorData: function(t) {
                    var e, a = [],
                        n = 0,
                        r = t.length,
                        i = 0,
                        l = {},
                        o = !1;
                    for (n = 0; n < r; n++) {
                        for (l = {},
                                 o = !1, i = 0, e = t[n].length; i < e; i++) l["" + t[n][i]] && (o = !0),
                            l["" + t[n][i]] = !0;
                        o || a.push(t[n])
                    }
                    return a
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], c = 1, h = 0; r < i; r++) {
                        for (u[r] = [], e = n[r], s = e.length, l = !0, h = 0, o = 0; o < s; o++) e[o] > 0 && (l = !1, t || u[r].push(o), h++);
                        if (l) return a.isBallsComplete = !1,
                            [];
                        c *= h
                    }
                    return a.isBallsComplete = !0,
                        t ? c: a.isBallsComplete ? u = a.filterErrorData(a.combination(u)) : []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    for (t.addRanNumTag(), e = t.checkRandomBets(); 0 == t.filterErrorData(t.combination(e));) e = t.checkRandomBets();
                    return i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 1 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1];
                    return e
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
            name: "caipaiwei.caipai.qiansipk"
        };
        Games = t.Games,
            SSCBJPK10 = t.Games.SSCBJPK10.getInstance();
        var r = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(s.join(""))
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    r.length;
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                filterErrorData: function(t) {
                    var e, a = [],
                        n = 0,
                        r = t.length,
                        i = 0,
                        l = {},
                        o = !1;
                    for (n = 0; n < r; n++) {
                        for (l = {},
                                 o = !1, i = 0, e = t[n].length; i < e; i++) l["" + t[n][i]] && (o = !0),
                            l["" + t[n][i]] = !0;
                        o || a.push(t[n])
                    }
                    return a
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], c = 1, h = 0; r < i; r++) {
                        for (u[r] = [], e = n[r], s = e.length, l = !0, h = 0, o = 0; o < s; o++) e[o] > 0 && (l = !1, t || u[r].push(o), h++);
                        if (l) return a.isBallsComplete = !1,
                            [];
                        c *= h
                    }
                    return a.isBallsComplete = !0,
                        t ? c: a.isBallsComplete ? u = a.filterErrorData(a.combination(u)) : []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        r = [];
                    for (chkArray = [], e = t.checkRandomBets(); 0 == t.filterErrorData(t.combination(e));) e = t.checkRandomBets();
                    return r = e,
                        n = t.combination(r),
                        a = {
                            type: Games.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: r,
                            lotterys: n,
                            moneyUnit: Games.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: Games.getCurrentGameStatistics().getMultip(),
                            onePrice: Games.getCurrentGameStatistics().getOnePrice(),
                            num: 1 * n.length
                        },
                        a.amountText = Games.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1];
                    return e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var l = [];
        l.push("<li>"),
            l.push('<div class="ball-title">'),
            l.push("<strong><#=title#></strong>"),
            l.push("</div>"),
            l.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? l.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : l.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            l.push("</ul>"),
            l.push('<div class="ball-control">'),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            l.push("</div>"),
            l.push("</li>");
        var o = [];
        o.push("</ul>"),
            o.push("</div>");
        var s = [],
            u = l.join("");
        s.push(i.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名],
                function(t) {
                    s.push(u.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            s.push(o.join(""));
        var c = t.Class(r, e);
        c.defConfig = n,
            SSCBJPK10[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
            name: "caipaiwei.caipai.qianwu"
        };
        Games = t.Games,
            SSCBJPK10 = t.Games.SSCBJPK10.getInstance();
        var r = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(s.join(""))
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    r.length;
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                filterErrorData: function(t) {
                    var e, a = [],
                        n = 0,
                        r = t.length,
                        i = 0,
                        l = {},
                        o = !1;
                    for (n = 0; n < r; n++) {
                        for (l = {},
                                 o = !1, i = 0, e = t[n].length; i < e; i++) l["" + t[n][i]] && (o = !0),
                            l["" + t[n][i]] = !0;
                        o || a.push(t[n])
                    }
                    return a
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], c = 1, h = 0; r < i; r++) {
                        for (u[r] = [], e = n[r], s = e.length, l = !0, h = 0, o = 0; o < s; o++) e[o] > 0 && (l = !1, t || u[r].push(o), h++);
                        if (l) return a.isBallsComplete = !1,
                            [];
                        c *= h
                    }
                    return a.isBallsComplete = !0,
                        t ? c: a.isBallsComplete ? u = a.filterErrorData(a.combination(u)) : []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        r = [];
                    for (t.addRanNumTag(), e = t.checkRandomBets(); 0 == t.filterErrorData(t.combination(e));) e = t.checkRandomBets();
                    return r = e,
                        n = t.combination(r),
                        a = {
                            type: Games.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: r,
                            lotterys: n,
                            moneyUnit: Games.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: Games.getCurrentGameStatistics().getMultip(),
                            onePrice: Games.getCurrentGameStatistics().getOnePrice(),
                            num: 1 * n.length
                        },
                        a.amountText = Games.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var l = [];
        l.push("<li>"),
            l.push('<div class="ball-title">'),
            l.push("<strong><#=title#></strong>"),
            l.push("</div>"),
            l.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? l.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : l.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            l.push("</ul>"),
            l.push('<div class="ball-control">'),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            l.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            l.push("</div>"),
            l.push("</li>");
        var o = [];
        o.push("</ul>"),
            o.push("</div>");
        var s = [],
            u = l.join("");
        s.push(i.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名, translate.第五名],
                function(t) {
                    s.push(u.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            s.push(o.join(""));
        var c = t.Class(r, e);
        c.defConfig = n,
            SSCBJPK10[n.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "daxiaodanshuang.daxiaodanshuangs.daxiaodanshuangzu"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(u.join(""));
                },
                makePostParameter: function(t) {
                    for (var e = [], a = t.length, n = 0, r = [], i = ["大", "小", "单", "双"]; n < a; n++) r = [],
                        0 == t[n].length ? r[j] = " - ": $.each(t[n],
                            function(e) {
                                r[e] = i[Number(t[n][e])]
                            }),
                        e = e.concat(r.join(" "));
                    return e.join(",")
                },
                makeSubmitParameter: function(t) {
                    return this.formatViewBalls(t)
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = [], i = ["大", "小", "单", "双"]; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = i[Number(t[n][e])]
                            }),
                        e = e.concat(r.join("&"));
                    return e.join("|")
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n)];
                    return e
                },
                getSubmitType: function() {
                    return "dxds"
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 10 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                }
            },
            o = [];
        o.push('<div class="number-select-content clearfix">'),
            o.push('<ul class="ball-section ball-section-pk10-daxiaodanshuang">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([translate.Big, translate.Small, translate.Odds, translate.Evens],
                function(t) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + t + '&row=<#=row#>" class="ball-number">' + this + "</a>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [],
            c = s.join("");
        u.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名, translate.第五名],
                function(t) {
                    u.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            u.push("</ul>");
        var o = [];
        o.push('<ul class="ball-section ball-section-pk10-liangmianpan-rate_daccording">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([translate.Big, translate.Small, translate.Odds, translate.Evens],
                function(t) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + t + '&row=<#=row#>" class="ball-number">' + this + "</a>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>"),
            c = s.join(""),
            u.push(o.join("")),
            $.each([translate.第六名, translate.第七名, translate.第八名, translate.第九名, translate.第十名],
                function(t) {
                    u.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t + 5))
                });
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "dingweidan.dingweidans.dingweidanliudaoshi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                makePostParameter: function(data, order){
                    var me = this,
                        result = [],
                        data = order['original'],
                        i = 0;
                    for (; i < data.length; i++) {
                        var kdata = data[i];
                        if(kdata.length==0){
                            result.push('-');
                        }else{
                            saveArray = [];
                            for(var k=0; k< kdata.length;k++){
                                if(Number(kdata[k]) < 10){
                                    saveArray.push('0' + kdata[k]);
                                }else{
                                    saveArray.push(kdata[k]);
                                }
                            }
                            result = result.concat(saveArray.join(' '));
                        }

                    }
                    return result.join(' , ');
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = []; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = n + 1 + "-" + (t[n][e] + 1)
                            }),
                        e = e.concat(r.join("&"));
                    return e.join("|")
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 10 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.第六名, translate.第七名, translate.第八名, translate.第九名, translate.第十名],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "dingweidan.dingweidans.dingweidanyidaowu"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                makePostParameter: function(data, order){
                    var me = this,
                        result = [],
                        data = order['original'],
                        i = 0;
                    for (; i < data.length; i++) {
                        var kdata = data[i];
                        if(kdata.length==0){
                            result.push('-');
                        }else{
                            saveArray = [];
                            for(var k=0; k< kdata.length;k++){
                                if(Number(kdata[k]) < 10){
                                    saveArray.push('0' + kdata[k]);
                                }else{
                                    saveArray.push(kdata[k]);
                                }
                            }

                            result = result.concat(saveArray.join(' '));
                        }

                    }
                    return result.join(' , ');
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = []; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = n + 1 + "-" + (t[n][e] + 1)
                            }),
                        e = e.concat(r.join("&"));
                    return e.join("|")
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 10 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名, translate.第五名],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "dingweidan.dingweidans.dingweidanyidaoshi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                makePostParameter:function(data, order){
                    var me = this,
                        result = [],
                        data = order['original'],
                        i = 0;
                    for (; i < data.length; i++) {
                        var kdata = data[i];
                        if(kdata.length==0){
                            result.push('-');
                        }else{
                            saveArray = [];
                            for(var k=0; k< kdata.length;k++){
                                if(Number(kdata[k]) < 10){
                                    saveArray.push('0' + kdata[k]);
                                }else{
                                    saveArray.push(kdata[k]);
                                }
                            }

                            result = result.concat(saveArray.join(' '));
                        }

                    }
                    return result.join(' , ');
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = []; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = n + 1 + "-" + (t[n][e] + 1)
                            }),
                        e = e.concat(r.join("&"));
                    return e.join("|")
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 10 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名, translate.第五名, translate.第六名, translate.第七名, translate.第八名, translate.第九名, translate.第十名],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "liangmianpan.liangmian.dragonwithtiger"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    n.fireEvent("beforeSetBallData", t, e, a),
                    t != e && (r[t][e] = a),
                        n.fireEvent("afterSetBallData", t, e, a)
                },
                makePostParameter: function(t) {
                    return this.formatViewBalls(t)
                },
                makeSubmitParameter: function(t) {
                    return this.formatViewBalls(t)
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = []; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = n + 1 + "-" + (t[n][e] + 1)
                            }),
                        e = e.concat(r.join(" "));
                    return e.join(",")
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n)];
                    return e
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                randomNum: function() {
                    var t = this,
                        e = 0,
                        a = [],
                        n = null,
                        i = t.getBallData().length,
                        l = t.getBallData()[0].length,
                        o = [],
                        s = [],
                        u = 0,
                        c = 0;
                    for (u = Math.floor(Math.random() * i); e < i; e++) e == u ? (c = Math.floor(Math.random() * l), a.push([c])) : a.push([]);
                    return s = a,
                        o = [[c]],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: s,
                            lotterys: o,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: o.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section ball-section-pk10-liangmianpan-dragonwithtiger">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(t) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number <#=class' + t + '#>"><#=column#>' + translate.龙 + Number(this + 1) + translate.虎 + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名, translate.第五名, translate.第六名, translate.第七名, translate.第八名, translate.第九名, translate.第十名],
                function(t) {
                    c.push(h.replace("<#=class" + t + "#>", "ball-number-space").replace(/<#=column#>/g, t + 1).replace(/<#=class\d#>/, "").replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "liangmianpan.liangmian.guanyahezhi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                makePostParameter: function(t) {
                    return this.formatViewBalls(t)
                },
                makeSubmitParameter: function(t) {
                    return this.formatViewBalls(t)
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = [], i = ["大", "小", "单", "双"]; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = i[Number(t[n][e])]
                            }),
                        e = e.concat(r.join(" "));
                    return e.join(",")
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n)];
                    return e
                },
                getSubmitType: function() {
                    return "dxds"
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([translate.Big, translate.Small, translate.Odds, translate.Evens],
                function(t) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + t + '&row=<#=row#>" class="ball-number">' + this + "</a>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">全</a>'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>'),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠亚和],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "liangmianpan.liangmian.rate_daccording"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1], [ - 1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(u.join(""))
                },
                makePostParameter: function(t) {
                    return this.formatViewBalls(t)
                },
                makeSubmitParameter: function(t) {
                    return this.formatViewBalls(t)
                },
                formatViewBalls: function(t) {
                    for (var e = [], a = t.length, n = 0, r = [], i = ["大", "小", "单", "双"]; n < a; n++) r = [],
                        $.each(t[n],
                            function(e) {
                                r[e] = i[Number(t[n][e])]
                            }),
                        e = e.concat(r.join(" "));
                    return e.join(",")
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n)];
                    return e
                },
                getSubmitType: function() {
                    return "dxds"
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 10 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                }
            },
            o = [];
        o.push('<div class="number-select-content clearfix">'),
            o.push('<ul class="ball-section ball-section-pk10-liangmianpan-rate_daccording">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([translate.Big, translate.Small, translate.Odds, translate.Evens],
                function(t) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + t + '&row=<#=row#>" class="ball-number">' + this + "</a>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [],
            c = s.join("");
        u.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名, translate.第四名, translate.第五名],
                function(t) {
                    u.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            u.push("</ul>");
        var o = [];
        o.push('<ul class="ball-section ball-section-pk10-liangmianpan-rate_daccording">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([translate.Big, translate.Small, translate.Odds, translate.Evens],
                function(t) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + t + '&row=<#=row#>" class="ball-number">' + this + "</a>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>"),
            c = s.join(""),
            u.push(o.join("")),
            $.each([translate.第六名, translate.第七名, translate.第八名, translate.第九名, translate.第十名],
                function(t) {
                    u.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t + 5))
                });
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "qianer.qianers.qianerdanshi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {
                    var e = this;
                    setTimeout(function() {
                            e.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return t.addRanNumTag(),
                        e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                checkSingleNum: function(t) {
                    var e = this,
                        a = !0;
                    return 2 == t.length && (!e.checkRepeat(t) && ($.each(t,
                            function() {
                                if (!e.defConfig.checkNum.test(this) || Number(this) < 1 || Number(this) > 10) return a = !1,
                                    !1
                            }), a))
                }
            },
            o = t.Class(l, e);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSCBJPK10.Danshi),
    function(t, e, a) {
        var n = {
                name: "qianer.qianers.qianerfushi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                makePostParameter: function(data, order){
                    var me = this,
                        result = [],
                        data = order['original'],
                        i = 0;
                    for (; i < data.length; i++) {
                        var kdata = data[i];
                        saveArray = [];
                        for(var k=0; k< kdata.length;k++){
                            if(Number(kdata[k]) < 10){
                                saveArray.push('0' + kdata[k]);
                            }else{
                                saveArray.push(kdata[k]);
                            }
                        }

                        result = result.concat(saveArray.join(' '));
                    }
                    return result.join(' , ');
                }/*function(t, e) {
                    for (; i < data.length; i++) {
                        var kdata = data[i];
                        saveArray = [];
                        for(var k=0; k< kdata.length;k++){
                            if(Number(kdata[k]) < 10){
                                saveArray.push('0' + kdata[k]);
                            }else{
                                saveArray.push(kdata[k]);
                            }
                        }

                        result = result.concat(saveArray.join(' '));
                    }
                    for (var a = [], t = e.original, n = 0; n < t.length; n++) a = a.concat(t[n].join(" "));
                    return a.join(" , ")
                }*/,
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    r.length;
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                filterErrorData: function(t, e, a, n) {
                    var r = this,
                        n = n || [],
                        a = a || 0,
                        e = e || t.length;
                    return a == e ? n: (t[a][0] != t[a][1] && n.push(t[a]), a++, r.filterErrorData(t, e, a, n))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], c = 1, h = 0; r < i; r++) {
                        for (u[r] = [], e = n[r], s = e.length, l = !0, h = 0, o = 0; o < s; o++) e[o] > 0 && (l = !1, t || u[r].push(o), h++);
                        if (l) return a.isBallsComplete = !1,
                            [];
                        c *= h
                    }
                    return a.isBallsComplete = !0,
                        t ? c: a.isBallsComplete ? u = a.filterErrorData(a.combination(u)) : []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    for (e = t.checkRandomBets(); 0 == t.filterErrorData(t.combination(e));) e = t.checkRandomBets();
                    return i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 1 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1];
                    return e = t.filterErrorData(e)
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "qiansanzu.qiansanzus.qiansanzudanshi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {
                    var e = this;
                    setTimeout(function() {
                            e.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    return t.addRanNumTag(),
                        e = t.checkRandomBets(),
                        i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                checkSingleNum: function(t) {
                    var e = this,
                        a = !0;
                    return 3 == t.length && (!e.checkRepeat(t) && ($.each(t,
                            function() {
                                if (!e.defConfig.checkNum.test(this) || Number(this) < 1 || Number(this) > 10) return a = !1,
                                    !1
                            }), a))
                }
            },
            o = t.Class(l, e);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.SSCBJPK10.Danshi),
    function(t, e, a) {
        var n = {
                name: "qiansanzu.qiansanzus.qiansanzufushi"
            },
            r = t.Games,
            i = t.Games.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                makePostParameter: function(data, order){
                    var me = this,
                        result = [],
                        data = order['original'],
                        i = 0;
                    for (; i < data.length; i++) {
                        var kdata = data[i];
                        saveArray = [];
                        for(var k=0; k< kdata.length;k++){
                            if(Number(kdata[k]) < 10){
                                saveArray.push('0' + kdata[k]);
                            }else{
                                saveArray.push(kdata[k]);
                            }
                        }

                        result = result.concat(saveArray.join(' '));
                    }
                    return result.join(' , ');
                },
                editSubmitData: function(t) {
                    for (var e, a, n = t.ball.split("|"), r = 0, i = n.length, l = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    r.length;
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                filterErrorData: function(t) {
                    var e, a = [],
                        n = 0,
                        r = t.length,
                        i = 0,
                        l = {},
                        o = !1;
                    for (n = 0; n < r; n++) {
                        for (l = {},
                                 o = !1, i = 0, e = t[n].length; i < e; i++) l["" + t[n][i]] && (o = !0),
                            l["" + t[n][i]] = !0;
                        o || a.push(t[n])
                    }
                    return a
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = !0, o = 0, s = 0, u = [], c = 1, h = 0; r < i; r++) {
                        for (u[r] = [], e = n[r], s = e.length, l = !0, h = 0, o = 0; o < s; o++) e[o] > 0 && (l = !1, t || u[r].push(o), h++);
                        if (l) return a.isBallsComplete = !1,
                            [];
                        c *= h
                    }
                    return a.isBallsComplete = !0,
                        t ? c: a.isBallsComplete ? u = a.filterErrorData(a.combination(u)) : []
                },
                randomNum: function() {
                    var t = this,
                        e = [],
                        a = null,
                        n = (t.getBallData(), t.defConfig.name, []),
                        i = [];
                    for (t.addRanNumTag(), e = t.checkRandomBets(); 0 == t.filterErrorData(t.combination(e));) e = t.checkRandomBets();
                    return i = e,
                        n = t.combination(i),
                        a = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: 1 * n.length
                        },
                        a.amountText = r.getCurrentGameStatistics().formatMoney(a.num * a.moneyUnit * a.multiple * a.onePrice),
                        a
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1];
                    return e
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? s.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠军, translate.亚军, translate.第三名],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "qianyi.qianyis.qianyifushi"
            },
            r = (t.Games, t.Games.SSCBJPK10.getInstance()),
            i = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(u.join(""))
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                checkBallIsComplete: function() {
                    for (var t = this,
                             e = t.getBallData()[0], a = 0, n = e.length, r = 0; a < n; a++) e[a] > 0 && r++;
                    return r >= 1 ? t.isBallsComplete = !0 : t.isBallsComplete = !1
                },
                makePostParameter: function(t, e) {
                    //for (var a = [], t = e.original, n = 0; n < t.length; n++) a = a.concat(t[n].join(" "));
                    for (var a = [], t = e.original, n = 0; n < t.length; n++) {
                        saveArray = [];
                        for(var k=0; k< t[n].length;k++){
                            if(Number(t[n][k]) < 10){
                                saveArray.push('0' + t[n][k]);
                            }else{
                                saveArray.push(t[n][k]);
                            }
                        }
                        a = a.concat(saveArray.join(' '));
                    }
                    return a.join(" , ")
                },
                editSubmitData: function(t) {
                    var e, a, n = t.ball.split("|"),
                        r = 0,
                        i = n.length,
                        l = 0;
                    for (r = 0; r < i; r++) {
                        for (a = n[r].split("-"), e = a.length, l = 0; l < e; l++)"" != a[l] && (a[l] = Number(a[l]) - 1);
                        n[r] = a.join("")
                    }
                    t.ball = n.join("|")
                },
                setBallData: function(t, e, a) {
                    var n = this,
                        r = n.getBallData();
                    0 != e && (n.fireEvent("beforeSetBallData", t, e, a), t >= 0 && t < r.length && e >= 0 && (r[t][e] = a), n.fireEvent("afterSetBallData", t, e, a))
                },
                createRandomNum: function() {
                    for (var t = this,
                             e = [], a = t.getBallData().length, n = t.getBallData()[0].length - 1, r = 0; r < a; r++) e[r] = [Math.floor(Math.random() * n) + 1],
                        e[r].sort(function(t, e) {
                            return t > e ? 1 : -1
                        });
                    return e
                }
            },
            l = [];
        l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                function(t) {
                    0 == t ? o.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : o.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var s = [];
        s.push("</ul>"),
            s.push("</div>");
        var u = [],
            c = o.join("");
        u.push(l.join("")),
            $.each([translate.冠军],
                function(t) {
                    u.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            u.push(s.join(""));
        var h = t.Class(i, e);
        h.defConfig = n,
            r[n.name] = new h
    } (phoenix, phoenix.GameMethod),
    function(t, e, a) {
        var n = {
                name: "zhixuanhezhi.hezhi.guanyahezhi"
            },
            r = t.Games,
            i = r.SSCBJPK10.getInstance(),
            l = {
                init: function(t) {},
                rebuildData: function() {
                    var t = this;
                    t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var t = this;
                    t.container.html(c.join(""))
                },
                makePostParameter: function(t, e) {
                    for (var a = [], t = e.original, n = 0; n < t.length; n++) a = a.concat(t[n].join("-"));
                    return a.join("|")
                },
                getLottery: function(t) {
                    for (var e, a = this,
                             n = a.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], c = 1, h = 0; r < i; r++) {
                        for (s[r] = [], e = n[r], o = e.length, isEmptySelect = !0, h = 0, l = 0; l < o; l++) e[l] > 0 && (a.isBallsComplete = !0, t || s[r].push(l), h++);
                        c *= h
                    }
                    if (t) return c;
                    if (a.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                mathResult: function(t, e, a) {
                    var n, r, i = [],
                        l = [],
                        o = {},
                        s = "",
                        u = function(t, e) {
                            return t - e
                        };
                    for (n = e; n <= a; n++) for (r = e; r <= a; r++) n + r == t && (l = [n, r], s = l.sort(u).join(","), o[s] || n == r || (i.push([n, r]), o[s] = !0));
                    return i
                },
                removeSameOne: function(t, e) {
                    var a, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = e.length, a = Math.floor(Math.random() * i + 1); n < e.length; n++) if (a == e[n]) return arguments.callee.call(r, t, e);
                    return a
                },
                removeSame: function(t) {
                    var e, a = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * r); a < t.length; a++) if (e == t[a]) return arguments.callee.call(n, t);
                    return e
                },
                randomNum: function() {
                    for (var t, e = this,
                             a = 0,
                             n = [], i = [], l = (e.getBallData()[0].length, []); a < 1; a++) t = e.removeSame(l),
                        n = n.concat(t),
                        l.push(t);
                    return t < 3 ? e.randomNum() : (n.sort(function(t, e) {
                        return t - e
                    }), i.push([n[0]]), original = [[i[0][0]]], order = {
                        type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                        original: original,
                        lotterys: i,
                        moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                        multiple: r.getCurrentGameStatistics().getMultip(),
                        onePrice: r.getCurrentGameStatistics().getOnePrice(),
                        num: i.length
                    },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice), order)
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<div class="ball-title">'),
            s.push("<strong><#=title#></strong>"),
            s.push("</div>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                function(t) {
                    t < 3 ? s.push('<li style="display:none"><a href="javascript:void(0);" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push("</div>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var c = [],
            h = s.join("");
        c.push(o.join("")),
            $.each([translate.冠亚和],
                function(t) {
                    c.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, t))
                }),
            c.push(u.join(""));
        var m = t.Class(l, e);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod);