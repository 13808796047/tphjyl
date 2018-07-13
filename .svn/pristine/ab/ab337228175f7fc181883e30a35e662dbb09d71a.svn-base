!
    function(a, t, e) {
        var n = {
                name: "budingwei.budingweizu.budingwei"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 1) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                createRandomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = [];
                    for (a.getBallData().length, a.getBallData()[0].length; t < 1; t++) num = a.removeSame(n),
                        e = e.concat(num),
                        n.push(num);
                    return e.sort(function(a, t) {
                        return a - t
                    }),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e.push([t[0]]),
                        original = [[e[0][0]]],
                        order = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: original,
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        order.amountText = r.getCurrentGameStatistics().formatMoney(order.num * order.moneyUnit * order.multiple * order.onePrice),
                        order
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "dingweidan.dingweidanzu.dingweidan",
                tips: "一星定位胆复式玩法提示",
                exampleTip: "一星定位胆玩复式范例"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                getLottery: function(a) {
                    for (var t, e = this,
                             n = e.getBallData(), r = 0, i = n.length, l = 0, o = 0, s = [], u = [], h = 1, c = 0; r < i; r++) {
                        for (s[r] = [], t = n[r], o = t.length, isEmptySelect = !0, c = 0, l = 0; l < o; l++) t[l] > 0 && (e.isBallsComplete = !0, a || s[r].push(l), c++);
                        h *= c
                    }
                    if (a) return h;
                    if (e.isBallsComplete) {
                        for (r = 0, i = s.length; r < i; r++) for (l = 0, o = s[r].length; l < o; l++) u.push([s[r][l]]);
                        return u
                    }
                    return []
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) a[t].length < 1 ? n.push("-") : n.push(a[t].join(""));
                    return n.join(",")
                },
                createRandomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        n = a.getBallData().length,
                        r = a.getBallData()[0].length,
                        i = 0;
                    for (a.numCell = 0, i = Math.floor(Math.random() * n); t < n; t++) t == i ? (numCell = Math.floor(Math.random() * r), e.push([numCell])) : e.push([]);
                    return e
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders);
                    if (i = e.createRandomNum(), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var o = 0; o < l.length; o++) if (l[o].type == e.defConfig.name) {
                        var s = l[o].original.join(",");
                        a[s] = s
                    }
                    return a[i.join(",")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        n = (a.getBallData().length, a.getBallData()[0].length, []),
                        i = [];
                    return t = a.checkRandomBets(),
                        i = t,
                        n = [[a.numCell]],
                        e = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: n,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: n.length
                        },
                        e.amountText = r.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
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
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.houerzhixuan",
                tips: "后二直选复式玩法提示",
                exampleTip: "后二直选复式范例"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    var t = 0,
                        e = a.length,
                        n = [];
                    for (n/*.push("-")*/; t < e; t++) n.push(a[t].join(""));
                    return n.join(",")
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
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Ten, translate.Dollar],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.houerzhixuandanshi",
                tips: "后二直选单式玩法提示",
                exampleTip: "后二直选单式弹出层22提示"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.FC3D.Danshi),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.houerzuxuan",
                tips: "后二组选复式玩法提示",
                exampleTip: "后二组选复式范例"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join());
                    return n.join(",")
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [],
                        s = 0;
                    for (n = 0; n < r; n++) e[n] > 0 && (s++, l.push(n));
                    return s > 1 && (i = !1),
                        i ? (t.isBallsComplete = !1, []) : (t.isBallsComplete = !0, o = t.combine(l, 2))
                },
                createRandomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData().length,
                        a.getBallData()[0].length;
                    return t.push(a.removeSame(e)),
                        e.push(t),
                        t.push(a.removeSame(e)),
                        t.sort(function(a, t) {
                            return a - t
                        }),
                        t
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders);
                    if (i = e.createRandomNum(), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var o = 0; o < l.length; o++) if (l[o].type == e.defConfig.name) {
                        var s = l[o].original.join("").replace(/,/g, "");
                        a[s] = s
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e = [[t[0], t[1]]],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.houerzuxuandanshi",
                tips: "后二组选单式玩法提示",
                exampleTip: "后二组选单式弹出层1111提示"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = "",
                        r = [];
                    if (t.isFirstAdd) for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               r = t.iterator(t.filterLotters(a)) || []; e < r.length; e++) {
                        var i, n;
                        i = r[e].split("").sort(function(a, t) {
                            return a - t
                        }),
                            n = i.join(""),
                            t.defConfig.checkNum.test(n) && n.length == t.balls.length && !t.checkNumSameIndex(n, 2) ? (t.vDataBack[n] ? t.sameData.push(i) : t.tData.push(i), t.vDataBack[n] = i, t.vData.push(i)) : (t.errorDataBack[n] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[n] = i),
                            t.aDataBack[n] ? "": t.aData.push(i),
                            t.aDataBack[n] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                createRandomNum: function() {
                    var a = this,
                        t = 0,
                        e = [];
                    for (a.getBallData().length, a.getBallData()[0].length; t < 2; t++) {
                        var n = a.removeSameNum(e);
                        e.push(n)
                    }
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData().length, a.getBallData()[0].length, a.defConfig.name, []);
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [t.join("").split("")],
                        e.push(t),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.FC3D.Danshi),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.qianerzhixuan",
                tips: "后二直选复式玩法提示",
                exampleTip: "后二直选复式范例"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join(""));
                    return /*n.push("-"),*/ n.join(",")
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
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Hundred, translate.Ten],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.qianerzhixuandanshi",
                tips: "后二直选单式玩法提示",
                exampleTip: "后二直选单式弹出层22提示"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.FC3D.Danshi),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.qianerzuxuan",
                tips: "后二组选复式玩法提示",
                exampleTip: "后二组选复式范例"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = 0,
                             e = a.length,
                             n = []; t < e; t++) n.push(a[t].join());
                    return n.join(",")
                },
                getLottery: function(a) {
                    var t = this,
                        e = t.getBallData()[0],
                        n = 0,
                        r = e.length,
                        i = !0,
                        l = [],
                        o = [],
                        s = 0;
                    for (n = 0; n < r; n++) e[n] > 0 && (s++, l.push(n));
                    return s > 1 && (i = !1),
                        i ? (t.isBallsComplete = !1, []) : (t.isBallsComplete = !0, o = t.combine(l, 2))
                },
                createRandomNum: function() {
                    var a = this,
                        t = [],
                        e = [];
                    a.getBallData().length,
                        a.getBallData()[0].length;
                    return t.push(a.removeSame(e)),
                        e.push(t),
                        t.push(a.removeSame(e)),
                        t.sort(function(a, t) {
                            return a - t
                        }),
                        t
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length, r.getCurrentGameOrder().getTotal().orders);
                    if (i = e.createRandomNum(), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var o = 0; o < l.length; o++) if (l[o].type == e.defConfig.name) {
                        var s = l[o].original.join("").replace(/,/g, "");
                        a[s] = s
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData()[0].length;
                    return t = a.checkRandomBets(),
                        e = [[t[0], t[1]]],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "erxing.erxingzu.qianerzuxuandanshi",
                tips: "后二组选单式玩法提示",
                exampleTip: "后二组选单式弹出层1111提示",
                exampleText: "58<br />35<br />69"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = "",
                        r = [];
                    if (t.isFirstAdd) for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               r = t.iterator(t.filterLotters(a)) || []; e < r.length; e++) {
                        var i, n;
                        i = r[e].split("").sort(function(a, t) {
                            return a - t
                        }),
                            n = i.join(""),
                            t.defConfig.checkNum.test(n) && n.length == t.balls.length && !t.checkNumSameIndex(n, 2) ? (t.vDataBack[n] ? t.sameData.push(i) : t.tData.push(i), t.vDataBack[n] = i, t.vData.push(i)) : (t.errorDataBack[n] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[n] = i),
                            t.aDataBack[n] ? "": t.aData.push(i),
                            t.aDataBack[n] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                createRandomNum: function() {
                    var a = this,
                        t = 0,
                        e = [];
                    for (a.getBallData().length, a.getBallData()[0].length; t < 2; t++) {
                        var n = a.removeSameNum(e);
                        e.push(n)
                    }
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = (a.getBallData(), a.getBallData().length, a.getBallData()[0].length, a.defConfig.name, []);
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [t.join("").split("")],
                        e.push(t),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.FC3D.Danshi),
    function(a, t, e) {
        var n = {
                name: "sanxing.zhixuan.danshi",
                tips: "五星直选单式玩法提示",
                exampleTip: "这是单式弹出层提示"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.FC3D.Danshi),
    function(a, t, e) {
        var n = {
                name: "sanxing.zhixuan.fushi",
                tips: "五星直选复式玩法提示",
                exampleTip: "五星直选复式范例"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
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
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([translate.Hundred, translate.Ten, translate.Dollar],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sanxing.zhixuan.hezhi"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) n + r + i == a && l.push([n, r, i]);
                    return l
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t[0] = a.checkRandomBets(),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">&nbsp;</span></li>')
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sanxing.zuxuan.hunhezuxuan",
                UIContainer: "#J-balls-main-panel"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                checkNumSameIndex: function(a, t) {
                    for (var e, n = this,
                             r = a.length > 0 ? a: [], i = 0; i < r.length; i++) if (n.arrIndexOf(r[i], r) == t) {
                        e = !0;
                        break
                    }
                    return e || !1
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        n = [];
                    if (t.isFirstAdd) for (t.aData = [], t.sameData = [], t.errorData = [], t.tData = [], t.vData = [], t.vDataBack = {},
                                               t.aDataBack = {},
                                               t.tDataBack = {},
                                               t.sameDataBack = {},
                                               t.errorDataBack = {},
                                               n = t.iterator(t.filterLotters(a)) || []; e < n.length; e++) {
                        var r, i = "";
                        i = n[e].split("").sort(function(a, t) {
                            return a - t
                        }),
                            r = i.join(""),
                            t.defConfig.checkNum.test(r) && r.length == t.balls.length && !t.checkNumSameIndex(r, 3) ? (t.vDataBack[r] ? t.sameData.push(i) : t.tData.push(i), t.vDataBack[r] = i, t.vData.push(i)) : (t.errorDataBack[r] ? t.sameData.push(i) : t.errorData.push(i), t.errorDataBack[r] = i),
                            t.aDataBack[r] ? "": t.aData.push(i),
                            t.aDataBack[r] = i
                    }
                    return t.vData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData.length > 0 ? t.tData: []) : (t.isBallsComplete = !1, [])
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = 0,
                             e = [], n = a.getBallData().length, r = a.getBallData()[0].length; t < n; t++) 2 == t ? e[t] = a.removeSameNum(e) : e[t] = Math.floor(Math.random() * r);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null,
                        i = [];
                    a.getBallData(),
                        a.getBallData().length,
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        i = [[t.join(",")], [], []],
                        e.push(t),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: i,
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = a.Class(l, t);
        o.defConfig = n,
            i[n.name] = new o
    } (phoenix, phoenix.Games.FC3D.Danshi),
    function(a, t, e) {
        var n = {
                name: "sanxing.zuxuan.zuliu"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join(",")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = []; e < n; e++) t[e] > 0 && r.push(e);
                    return a.checkBallIsComplete() ? a.combine(r, 3) : []
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = (a.getBallData().length, a.getBallData()[0].length, 0); e < 3; e++) t[e] = [a.removeSame(t)];
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        t
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = [t],
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sanxing.zuxuan.zusan"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(""));
                    return t.join("")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, n = t[0].length, r = 0; e < n; e++) t[0][e] > 0 && r++;
                    return r >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        n = t[0].length,
                        r = [],
                        i = [],
                        l = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[0][e] > 0 && arr.push(e);
                        for (var o = 0; o < arr.length; o++) i = [],
                            r = arr.concat(),
                            i.push([[arr[o], arr[o]].join("")]),
                            r.splice(o, 1),
                            i.push(r),
                            l = l.concat(a.combination(i));
                        for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                        return l
                    }
                    return []
                },
                getLotteryOriginal: function(a) {
                    for (var t = a,
                             e = this,
                             n = e.getBallData(), r = (n[0].length, []), i = [], l = [], o = 0; o < t.length; o++) i = [],
                        r = t.concat(),
                        i.push([[t[o], t[o]].join("")]),
                        r.splice(o, 1),
                        i.push(r),
                        l = l.concat(e.combination(i));
                    for (var s = 0; s < l.length; s++) l[s] = l[s].join("").split("");
                    return l
                },
                removeSame: function(a) {
                    var t, e = 0,
                        n = this,
                        r = this.getBallData()[0].length;
                    for (len = a.length, t = Math.floor(Math.random() * r); e < a.length; e++) if (t == a[e]) return arguments.callee.call(n, a);
                    return t
                },
                createRandomNum: function() {
                    var a = this,
                        t = 0,
                        e = [];
                    for (a.getBallData().length, a.getBallData()[0].length; t < 2; t++) e[t] = a.removeSame(e);
                    return e.sort(function(a, t) {
                        return a > t ? 1 : -1
                    }),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = a.getLotteryOriginal(t),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
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
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var n = {
                name: "sanxing.zuxuan.zuxuanhezhi"
            },
            r = a.Games,
            i = r.FC3D.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = 0; e < n; e++) t[e] > 0 && r++;
                    return r >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                makePostParameter: function(a) {
                    for (var t = [], e = a.length, n = 0; n < e; n++) t = t.concat(a[n].join(","));
                    return t.join("")
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, n = t.length, r = [], i = []; e < n; e++) t[e] > 0 && r.push(e);
                    if (a.checkBallIsComplete()) {
                        for (var l = 0; l < r.length; l++) i = i.concat(a.mathResult(r[l], 0, 9));
                        return i
                    }
                    return []
                },
                removeSame: function(a, t) {
                    var e, n = 0,
                        r = this,
                        i = this.getBallData()[0].length;
                    for (len = t.length, e = Math.floor(Math.random() * i + 1); n < t.length; n++) if (e == t[n]) return arguments.callee.call(r, a, t);
                    return e
                },
                checkResult: function(a, t) {
                    for (var e = t.length - 1; e >= 0; e--) if (t[e].join("") == a) return ! 1;
                    return ! 0
                },
                mathResult: function(a, t, e) {
                    var n, r, i, l = this,
                        o = [],
                        s = [];
                    for (n = t; n <= e; n++) for (r = t; r <= e; r++) for (i = t; i <= e; i++) if (n + r + i == a && 3 != l.arrIndexOf(n, [n, r, i])) {
                        var u = [n, r, i].sort(function(a, t) {
                            return a - t
                        });
                        l.checkResult(u.join(""), s) && (s.push(u), o.push([n, r, i]))
                    }
                    return o
                },
                originalData: function(a) {
                    for (var t = this,
                             e = [], n = 0; n < a.length; n++) for (var r = 0; r < a[n].length; r++) e[r] = e[r] || [],
                    t.arrIndexOf(a[n][r], e[r]) || e[r].push(a[n][r]);
                    return e
                },
                checkRandomBets: function(a, t) {
                    var e = this,
                        n = "undefined" == typeof a,
                        a = a || {},
                        i = [],
                        t = t || 0,
                        l = (e.getBallData().length, e.getBallData()[0].length),
                        o = r.getCurrentGameOrder().getTotal().orders;
                    if (i[0] = Math.ceil(Math.random() * (l - 1)), Number(t) > Number(e.getRandomBetsNum())) return i;
                    if (n) for (var s = 0; s < o.length; s++) if (o[s].type == e.defConfig.name) {
                        var u = o[s].original.join("");
                        a[u] = u
                    }
                    return a[i.join("")] ? (t++, arguments.callee.call(e, a, t)) : i
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = [],
                        n = null;
                    a.getBallData(),
                        a.getBallData()[0].length,
                        a.defConfig.name;
                    return t = a.checkRandomBets(),
                        e = a.mathResult(t[0], 0, 9),
                        n = {
                            type: r.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: [t],
                            lotterys: e,
                            moneyUnit: r.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: r.getCurrentGameStatistics().getMultip(),
                            onePrice: r.getCurrentGameStatistics().getOnePrice(),
                            num: e.length
                        },
                        n.amountText = r.getCurrentGameStatistics().formatMoney(n.num * n.moneyUnit * n.multiple * n.onePrice),
                        n
                }
            },
            o = [];
        o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                function(a) {
                    0 == a ? s.push('<li style="display:none"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = s.join("");
        h.push(o.join("")),
            $.each([""],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var m = a.Class(l, t);
        m.defConfig = n,
            i[n.name] = new m
    } (phoenix, phoenix.GameMethod);