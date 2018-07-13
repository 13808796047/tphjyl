!function(a, t, e) {
        var r = {
                name: "budingwei.budingweizu.budingwei",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games.N115.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = a.length, n = 0; n < r; n++) {
                        e = a[n];
                        for (var l = 0; l < e.length; l++) Number(e[l]) < 10 ? t.push("0" + e[l]) : t.push(e[l])
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = a.getBallData().length, r = a.getBallData()[0].length, n = 0; n < e; n++) t[n] = [Math.ceil(Math.random() * (r - 1))],
                        t[n].sort(function(a, t) {
                            return a > t ? 1 : -1
                        });
                    return t
                }
            },
            s = [];
        s.push('<div class="number-select-content">'),
            s.push('<ul class="ball-section">');
        var i = [];
        i.push("<li>"),
            i.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? i.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? i.push('<li><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : i.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            i.push("</ul>"),
            i.push('<div class="ball-control">'),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            i.push("</div>"),
            i.push("</li>");
        var o = [];
        o.push("</ul>"),
            o.push("</div>");
        var u = [],
            h = i.join("");
        u.push(s.join("")),
            $.each([""],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(o.join(""));
        var c = a.Class(l, t);
        c.defConfig = r,
            n[r.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dantuo.renxuandantuo.renxuanbazhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = 0,
            l = a.Games,
            s = a.Games.N115.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent(),
                        t.addEvent("afterSetBallData",
                            function(a, e, r, n) {
                                t.ensureSoleBall(e, r, n)
                            })
                },
                ensureSoleBall: function(a, t, e) {
                    var r = this;
                    r.getBallData();
                    if (l.getCurrentGame().getCurrentGameMethod().getGameMethodName() == r.getGameMethodName()) {
                        var s = r.countBallsNumInLine(0);
                        e > 0 && (0 == a ? (s > 7 && r.setBallData(0, n, -1), r.setBallData(1, t, -1), n = t) : r.setBallData(0, t, -1))
                    }
                },
                rebuildData: function(a) {
                    var t = this;
                    return "undefined" != typeof a ? void(t.balls[a] = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]) : void(t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]])
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(c.join(""))
                },
                makePostParameter: function(a) {
                    for (var t, e = [], r = [], n = [], l = [], s = a.length, i = 0; i < s; i++) {
                        n = [],
                            r = a[i];
                        for (var o = 0; o < r.length; o++) 0 == i ? Number(r[o]) < 10 ? l.push("0" + r[o]) : l.push(r[o]) : Number(r[o]) < 10 ? n.push("0" + r[o]) : n.push(r[o]);
                        e.push(n.join(","))
                    }
                    return t = 3 !== fxid ? "[胆" + l.join(",") + "]": "[" + l.join(",") + "]",
                        e.unshift(t),
                        e.join(" ")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = a.countBallsNumInLine(0),
                        n = t[1].length,
                        l = [];
                    if (arr = [], danMaArr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        l = a.combine(arr, 8 - r);
                        for (var e = 0; e < t[0].length; e++) 1 == t[0][e] && danMaArr.push(e);
                        for (var s = 0; s < l.length; s++) nr.push(l[s].concat(danMaArr));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        r = this,
                        n = this.getBallData()[0].length;
                    a.length;
                    for (t = Math.ceil(Math.random() * (n - 1)); e < a.length; e++) if (t == a[e]) return arguments.callee.call(r, a);
                    return t
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = 0, l = (a.getBallData().length, a.getBallData()[0].length, 0); l < 8; l++) l < 1 ? (n = a.removeSame(e), t = t.concat(n), e.push(n)) : (n = a.removeSame(e), r = r.concat(n), e.push(n));
                    return r.sort(function(a, t) {
                        return a - t
                    }),
                        t = [t, r]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        n = [];
                    return t = a.checkRandomBets(),
                        n = t,
                        r = [n],
                        e = {
                            type: l.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: r,
                            moneyUnit: l.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: l.getCurrentGameStatistics().getMultip(),
                            onePrice: l.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = l.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var u = [];
        u.push("<li>"),
            u.push('<div class="ball-title">'),
            u.push("<strong><#=title#></strong>"),
            u.push("<span>当前遗漏</span>"),
            u.push("</div>"),
            u.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? u.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            u.push("</ul>"),
            u.push('<div class="ball-control" style="<#=style#>">'),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            u.push("</div>"),
            u.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>");
        var c = [],
            p = u.join("");
        c.push(o.join("")),
            $.each([translate.胆码, translate.拖码],
                function(a) {
                    this == translate.胆码 ? c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a).replace(/<#=style#>/, "display:none")) : c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            c.push(h.join(""));
        var m = a.Class(i, t);
        m.defConfig = r,
            s[r.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dantuo.renxuandantuo.renxuanerzhonger",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = 0,
            l = a.Games,
            s = a.Games.N115.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent(),
                        t.addEvent("afterSetBallData",
                            function(a, e, r, n) {
                                t.ensureSoleBall(e, r, n)
                            })
                },
                ensureSoleBall: function(a, t, e) {
                    var r = this;
                    r.getBallData();
                    if (l.getCurrentGame().getCurrentGameMethod().getGameMethodName() == r.getGameMethodName()) {
                        var s = r.countBallsNumInLine(0);
                        e > 0 && (0 == a ? (s > 1 && r.setBallData(0, n, -1), r.setBallData(1, t, -1), n = t) : r.setBallData(0, t, -1))
                    }
                },
                rebuildData: function(a) {
                    var t = this;
                    return "undefined" != typeof a ? void(t.balls[a] = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]) : void(t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]])
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(c.join(""))
                },
                makePostParameter: function(a) {
                    for (var t, e = [], r = [], n = [], l = a.length, s = 0; s < l; s++) {
                        n = [],
                            r = a[s];
                        for (var i = 0; i < r.length; i++) 0 == s ? Number(r[i]) < 10 ? (t = 3 !== fxid ? "[胆 0" + r[i] + "]": "[ 0" + r[i] + "]", n.push(t)) : (t = 3 !== fxid ? "[胆" + r[i] + "]": "[" + r[i] + "]", n.push(t)) : Number(r[i]) < 10 ? n.push("0" + r[i]) : n.push(r[i]);
                        e.push(n.join(" "))
                    }
                    return e.join(" ")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = t[1].length,
                        n = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < r; e++) t[1][e] > 0 && arr.push(e);
                        n = a.combine(arr, 1);
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var l = 0; l < n.length; l++) a.arrIndexOf(e, n[l]) == -1 && nr.push(n[l].concat([e]));
                        return nr
                    }
                    return []
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = a.getBallData().length, n = a.getBallData()[0].length, l = n - 1; l >= 0; l--) l > 0 && e.push(l);
                    for (var s = 0; s < r; s++) {
                        var i = Math.floor(Math.random() * e.length);
                        t[s] = [e[i]],
                            e.splice(i, 1)
                    }
                    return t
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var u = [];
        u.push("<li>"),
            u.push('<div class="ball-title">'),
            u.push("<strong><#=title#></strong>"),
            u.push("<span>当前遗漏</span>"),
            u.push("</div>"),
            u.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? u.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            u.push("</ul>"),
            u.push('<div class="ball-control" style="<#=style#>">'),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            u.push("</div>"),
            u.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>");
        var c = [],
            p = u.join("");
        c.push(o.join("")),
            $.each([translate.胆码, translate.拖码],
                function(a) {
                    this == translate.胆码 ? c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a).replace(/<#=style#>/, "display:none")) : c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            c.push(h.join(""));
        var m = a.Class(i, t);
        m.defConfig = r,
            s[r.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dantuo.renxuandantuo.renxuanliuzhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = 0,
            l = a.Games,
            s = a.Games.N115.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent(),
                        t.addEvent("afterSetBallData",
                            function(a, e, r, n) {
                                t.ensureSoleBall(e, r, n)
                            })
                },
                ensureSoleBall: function(a, t, e) {
                    var r = this;
                    r.getBallData();
                    if (l.getCurrentGame().getCurrentGameMethod().getGameMethodName() == r.getGameMethodName()) {
                        var s = r.countBallsNumInLine(0);
                        e > 0 && (0 == a ? (s > 5 && r.setBallData(0, n, -1), r.setBallData(1, t, -1), n = t) : r.setBallData(0, t, -1))
                    }
                },
                rebuildData: function(a) {
                    var t = this;
                    return "undefined" != typeof a ? void(t.balls[a] = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]) : void(t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]])
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(c.join(""))
                },
                makePostParameter: function(a) {
                    for (var t, e = [], r = [], n = [], l = [], s = a.length, i = 0; i < s; i++) {
                        n = [],
                            r = a[i];
                        for (var o = 0; o < r.length; o++) 0 == i ? Number(r[o]) < 10 ? l.push("0" + r[o]) : l.push(r[o]) : Number(r[o]) < 10 ? n.push("0" + r[o]) : n.push(r[o]);
                        e.push(n.join(","))
                    }
                    return t = 3 !== fxid ? "[胆" + l.join(",") + "]": "[" + l.join(",") + "]",
                        e.unshift(t),
                        e.join(" ")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = a.countBallsNumInLine(0),
                        n = t[1].length,
                        l = [];
                    if (arr = [], danMaArr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        l = a.combine(arr, 6 - r);
                        for (var e = 0; e < t[0].length; e++) 1 == t[0][e] && danMaArr.push(e);
                        for (var s = 0; s < l.length; s++) nr.push(l[s].concat(danMaArr));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        r = this,
                        n = this.getBallData()[0].length;
                    a.length;
                    for (t = Math.ceil(Math.random() * (n - 1)); e < a.length; e++) if (t == a[e]) return arguments.callee.call(r, a);
                    return t
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = 0, l = (a.getBallData().length, a.getBallData()[0].length, 0); l < 6; l++) l < 1 ? (n = a.removeSame(e), t = t.concat(n), e.push(n)) : (n = a.removeSame(e), r = r.concat(n), e.push(n));
                    return r.sort(function(a, t) {
                        return a - t
                    }),
                        t = [t, r]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        n = [];
                    return t = a.checkRandomBets(),
                        n = t,
                        r = [n],
                        e = {
                            type: l.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: r,
                            moneyUnit: l.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: l.getCurrentGameStatistics().getMultip(),
                            onePrice: l.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = l.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var u = [];
        u.push("<li>"),
            u.push('<div class="ball-title">'),
            u.push("<strong><#=title#></strong>"),
            u.push("<span>当前遗漏</span>"),
            u.push("</div>"),
            u.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? u.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            u.push("</ul>"),
            u.push('<div class="ball-control" style="<#=style#>">'),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            u.push("</div>"),
            u.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>");
        var c = [],
            p = u.join("");
        c.push(o.join("")),
            $.each([translate.胆码, translate.拖码],
                function(a) {
                    this == translate.胆码 ? c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a).replace(/<#=style#>/, "display:none")) : c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            c.push(h.join(""));
        var m = a.Class(i, t);
        m.defConfig = r,
            s[r.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dantuo.renxuandantuo.renxuanqizhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = 0,
            l = a.Games,
            s = a.Games.N115.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent(),
                        t.addEvent("afterSetBallData",
                            function(a, e, r, n) {
                                t.ensureSoleBall(e, r, n)
                            })
                },
                ensureSoleBall: function(a, t, e) {
                    var r = this;
                    r.getBallData();
                    if (l.getCurrentGame().getCurrentGameMethod().getGameMethodName() == r.getGameMethodName()) {
                        var s = r.countBallsNumInLine(0);
                        e > 0 && (0 == a ? (s > 6 && r.setBallData(0, n, -1), r.setBallData(1, t, -1), n = t) : r.setBallData(0, t, -1))
                    }
                },
                rebuildData: function(a) {
                    var t = this;
                    return "undefined" != typeof a ? void(t.balls[a] = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]) : void(t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]])
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(c.join(""))
                },
                makePostParameter: function(a) {
                    for (var t, e = [], r = [], n = [], l = [], s = a.length, i = 0; i < s; i++) {
                        n = [],
                            r = a[i];
                        for (var o = 0; o < r.length; o++) 0 == i ? Number(r[o]) < 10 ? l.push("0" + r[o]) : l.push(r[o]) : Number(r[o]) < 10 ? n.push("0" + r[o]) : n.push(r[o]);
                        e.push(n.join(","))
                    }
                    return t = 3 !== fxid ? "[胆" + l.join(",") + "]": "[" + l.join(",") + "]",
                        e.unshift(t),
                        e.join(" ")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = a.countBallsNumInLine(0),
                        n = t[1].length,
                        l = [];
                    if (arr = [], danMaArr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        l = a.combine(arr, 7 - r);
                        for (var e = 0; e < t[0].length; e++) 1 == t[0][e] && danMaArr.push(e);
                        for (var s = 0; s < l.length; s++) nr.push(l[s].concat(danMaArr));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        r = this,
                        n = this.getBallData()[0].length;
                    a.length;
                    for (t = Math.ceil(Math.random() * (n - 1)); e < a.length; e++) if (t == a[e]) return arguments.callee.call(r, a);
                    return t
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = 0, l = (a.getBallData().length, a.getBallData()[0].length, 0); l < 7; l++) l < 1 ? (n = a.removeSame(e), t = t.concat(n), e.push(n)) : (n = a.removeSame(e), r = r.concat(n), e.push(n));
                    return r.sort(function(a, t) {
                        return a - t
                    }),
                        t = [t, r]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        n = [];
                    return t = a.checkRandomBets(),
                        n = t,
                        r = [n],
                        e = {
                            type: l.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: r,
                            moneyUnit: l.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: l.getCurrentGameStatistics().getMultip(),
                            onePrice: l.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = l.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var u = [];
        u.push("<li>"),
            u.push('<div class="ball-title">'),
            u.push("<strong><#=title#></strong>"),
            u.push("<span>当前遗漏</span>"),
            u.push("</div>"),
            u.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? u.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            u.push("</ul>"),
            u.push('<div class="ball-control" style="<#=style#>">'),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            u.push("</div>"),
            u.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>");
        var c = [],
            p = u.join("");
        c.push(o.join("")),
            $.each([translate.胆码, translate.拖码],
                function(a) {
                    this == translate.胆码 ? c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a).replace(/<#=style#>/, "display:none")) : c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            c.push(h.join(""));
        var m = a.Class(i, t);
        m.defConfig = r,
            s[r.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dantuo.renxuandantuo.renxuansanzhongsan",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = 0,
            l = a.Games,
            s = a.Games.N115.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent(),
                        t.addEvent("afterSetBallData",
                            function(a, e, r, n) {
                                t.ensureSoleBall(e, r, n)
                            })
                },
                ensureSoleBall: function(a, t, e) {
                    var r = this;
                    r.getBallData();
                    if (l.getCurrentGame().getCurrentGameMethod().getGameMethodName() == r.getGameMethodName()) {
                        var s = r.countBallsNumInLine(0);
                        e > 0 && (0 == a ? (s > 2 && r.setBallData(0, n, -1), r.setBallData(1, t, -1), n = t) : r.setBallData(0, t, -1))
                    }
                },
                rebuildData: function(a) {
                    var t = this;
                    return "undefined" != typeof a ? void(t.balls[a] = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]) : void(t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]])
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(c.join(""))
                },
                makePostParameter: function(a) {
                    for (var t, e = [], r = [], n = [], l = [], s = a.length, i = 0; i < s; i++) {
                        n = [],
                            r = a[i];
                        for (var o = 0; o < r.length; o++) 0 == i ? Number(r[o]) < 10 ? l.push("0" + r[o]) : l.push(r[o]) : Number(r[o]) < 10 ? n.push("0" + r[o]) : n.push(r[o]);
                        e.push(n.join(","))
                    }
                    return t = 3 !== fxid ? "[胆" + l.join(",") + "]": "[" + l.join(",") + "]",
                        e.unshift(t),
                        e.join(" ")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = a.countBallsNumInLine(0),
                        n = t[1].length,
                        l = [];
                    if (arr = [], danMaArr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        l = a.combine(arr, 3 - r);
                        for (var e = 0; e < t[0].length; e++) 1 == t[0][e] && danMaArr.push(e);
                        for (var s = 0; s < l.length; s++) nr.push(l[s].concat(danMaArr));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        r = this,
                        n = this.getBallData()[0].length;
                    a.length;
                    for (t = Math.ceil(Math.random() * (n - 1)); e < a.length; e++) if (t == a[e]) return arguments.callee.call(r, a);
                    return t
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = 0, l = (a.getBallData().length, a.getBallData()[0].length, 0); l < 3; l++) l < 1 ? (n = a.removeSame(e), t = t.concat(n), e.push(n)) : (n = a.removeSame(e), r = r.concat(n), e.push(n));
                    return r.sort(function(a, t) {
                        return a - t
                    }),
                        t = [t, r]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        n = [];
                    return t = a.checkRandomBets(),
                        n = t,
                        r = [n],
                        e = {
                            type: l.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: r,
                            moneyUnit: l.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: l.getCurrentGameStatistics().getMultip(),
                            onePrice: l.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = l.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var u = [];
        u.push("<li>"),
            u.push('<div class="ball-title">'),
            u.push("<strong><#=title#></strong>"),
            u.push("<span>当前遗漏</span>"),
            u.push("</div>"),
            u.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? u.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            u.push("</ul>"),
            u.push('<div class="ball-control" style="<#=style#>">'),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            u.push("</div>"),
            u.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>");
        var c = [],
            p = u.join("");
        c.push(o.join("")),
            $.each([translate.胆码, translate.拖码],
                function(a) {
                    this == translate.胆码 ? c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a).replace(/<#=style#>/, "display:none")) : c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            c.push(h.join(""));
        var m = a.Class(i, t);
        m.defConfig = r,
            s[r.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dantuo.renxuandantuo.renxuansizhongsi",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = 0,
            l = a.Games,
            s = a.Games.N115.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent(),
                        t.addEvent("afterSetBallData",
                            function(a, e, r, n) {
                                t.ensureSoleBall(e, r, n)
                            })
                },
                ensureSoleBall: function(a, t, e) {
                    var r = this;
                    r.getBallData();
                    if (l.getCurrentGame().getCurrentGameMethod().getGameMethodName() == r.getGameMethodName()) {
                        var s = r.countBallsNumInLine(0);
                        e > 0 && (0 == a ? (s > 3 && r.setBallData(0, n, -1), r.setBallData(1, t, -1), n = t) : r.setBallData(0, t, -1))
                    }
                },
                rebuildData: function(a) {
                    var t = this;
                    return "undefined" != typeof a ? void(t.balls[a] = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]) : void(t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]])
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(c.join(""))
                },
                makePostParameter: function(a) {
                    for (var t, e = [], r = [], n = [], l = [], s = a.length, i = 0; i < s; i++) {
                        n = [],
                            r = a[i];
                        for (var o = 0; o < r.length; o++) 0 == i ? Number(r[o]) < 10 ? l.push("0" + r[o]) : l.push(r[o]) : Number(r[o]) < 10 ? n.push("0" + r[o]) : n.push(r[o]);
                        e.push(n.join(","))
                    }
                    return t = 3 !== fxid ? "[胆" + l.join(",") + "]": "[" + l.join(",") + "]",
                        e.unshift(t),
                        e.join(" ")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = a.countBallsNumInLine(0),
                        n = t[1].length,
                        l = [];
                    if (arr = [], danMaArr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        l = a.combine(arr, 4 - r);
                        for (var e = 0; e < t[0].length; e++) 1 == t[0][e] && danMaArr.push(e);
                        for (var s = 0; s < l.length; s++) nr.push(l[s].concat(danMaArr));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        r = this,
                        n = this.getBallData()[0].length;
                    a.length;
                    for (t = Math.ceil(Math.random() * (n - 1)); e < a.length; e++) if (t == a[e]) return arguments.callee.call(r, a);
                    return t
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = 0, l = (a.getBallData().length, a.getBallData()[0].length, 0); l < 4; l++) l < 1 ? (n = a.removeSame(e), t = t.concat(n), e.push(n)) : (n = a.removeSame(e), r = r.concat(n), e.push(n));
                    return r.sort(function(a, t) {
                        return a - t
                    }),
                        t = [t, r]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        n = [];
                    return t = a.checkRandomBets(),
                        n = t,
                        r = [n],
                        e = {
                            type: l.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: r,
                            moneyUnit: l.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: l.getCurrentGameStatistics().getMultip(),
                            onePrice: l.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = l.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var u = [];
        u.push("<li>"),
            u.push('<div class="ball-title">'),
            u.push("<strong><#=title#></strong>"),
            u.push("<span>当前遗漏</span>"),
            u.push("</div>"),
            u.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? u.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            u.push("</ul>"),
            u.push('<div class="ball-control" style="<#=style#>">'),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            u.push("</div>"),
            u.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>");
        var c = [],
            p = u.join("");
        c.push(o.join("")),
            $.each([translate.胆码, translate.拖码],
                function(a) {
                    this == translate.胆码 ? c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a).replace(/<#=style#>/, "display:none")) : c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            c.push(h.join(""));
        var m = a.Class(i, t);
        m.defConfig = r,
            s[r.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dantuo.renxuandantuo.renxuanwuzhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = 0,
            l = a.Games,
            s = a.Games.N115.getInstance(),
            i = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent(),
                        t.addEvent("afterSetBallData",
                            function(a, e, r, n) {
                                t.ensureSoleBall(e, r, n)
                            })
                },
                ensureSoleBall: function(a, t, e) {
                    var r = this;
                    r.getBallData();
                    if (l.getCurrentGame().getCurrentGameMethod().getGameMethodName() == r.getGameMethodName()) {
                        var s = r.countBallsNumInLine(0);
                        e > 0 && (0 == a ? (s > 4 && r.setBallData(0, n, -1), r.setBallData(1, t, -1), n = t) : r.setBallData(0, t, -1))
                    }
                },
                rebuildData: function(a) {
                    var t = this;
                    return "undefined" != typeof a ? void(t.balls[a] = [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]) : void(t.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]])
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(c.join(""))
                },
                makePostParameter: function(a) {
                    for (var t, e = [], r = [], n = [], l = [], s = a.length, i = 0; i < s; i++) {
                        n = [],
                            r = a[i];
                        for (var o = 0; o < r.length; o++) 0 == i ? Number(r[o]) < 10 ? l.push("0" + r[o]) : l.push(r[o]) : Number(r[o]) < 10 ? n.push("0" + r[o]) : n.push(r[o]);
                        e.push(n.join(","))
                    }
                    return t = 3 !== fxid ? "[胆" + l.join(",") + "]": "[" + l.join(",") + "]",
                        e.unshift(t),
                        e.join(" ")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = a.countBallsNumInLine(0),
                        n = t[1].length,
                        l = [];
                    if (arr = [], danMaArr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < n; e++) t[1][e] > 0 && arr.push(e);
                        l = a.combine(arr, 5 - r);
                        for (var e = 0; e < t[0].length; e++) 1 == t[0][e] && danMaArr.push(e);
                        for (var s = 0; s < l.length; s++) nr.push(l[s].concat(danMaArr));
                        return nr
                    }
                    return []
                },
                removeSame: function(a) {
                    var t, e = 0,
                        r = this,
                        n = this.getBallData()[0].length;
                    a.length;
                    for (t = Math.ceil(Math.random() * (n - 1)); e < a.length; e++) if (t == a[e]) return arguments.callee.call(r, a);
                    return t
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = 0, l = (a.getBallData().length, a.getBallData()[0].length, 0); l < 5; l++) l < 1 ? (n = a.removeSame(e), t = t.concat(n), e.push(n)) : (n = a.removeSame(e), r = r.concat(n), e.push(n));
                    return r.sort(function(a, t) {
                        return a - t
                    }),
                        t = [t, r]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        n = [];
                    return t = a.checkRandomBets(),
                        n = t,
                        r = [n],
                        e = {
                            type: l.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: n,
                            lotterys: r,
                            moneyUnit: l.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: l.getCurrentGameStatistics().getMultip(),
                            onePrice: l.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = l.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = [];
        o.push('<div class="number-select-title balls-type-title clearfix">'),
            o.push('<ul class="function-select-title game-frequency-type">'),
            o.push('<li class="lost" data-type="lost">遗漏</li>'),
            o.push('<li class="fre" data-type="fre">冷热</li>'),
            o.push("</ul>"),
            o.push('<ul class="function-select-content">'),
            o.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            o.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            o.push("</ul>"),
            o.push("</div>"),
            o.push('<div class="number-select-content">'),
            o.push('<ul class="ball-section">');
        var u = [];
        u.push("<li>"),
            u.push('<div class="ball-title">'),
            u.push("<strong><#=title#></strong>"),
            u.push("<span>当前遗漏</span>"),
            u.push("</div>"),
            u.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? u.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : u.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            u.push("</ul>"),
            u.push('<div class="ball-control" style="<#=style#>">'),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            u.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            u.push("</div>"),
            u.push("</li>");
        var h = [];
        h.push("</ul>"),
            h.push("</div>");
        var c = [],
            p = u.join("");
        c.push(o.join("")),
            $.each([translate.胆码, translate.拖码],
                function(a) {
                    this == translate.胆码 ? c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a).replace(/<#=style#>/, "display:none")) : c.push(p.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            c.push(h.join(""));
        var m = a.Class(i, t);
        m.defConfig = r,
            s[r.name] = new m
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "dingweidan.dingweidanzu.dingweidan",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                getLottery: function(a) {
                    for (var t, e = this,
                             r = e.getBallData(), n = 0, l = r.length, s = 0, i = 0, o = [], u = [], h = 1, c = 0; n < l; n++) {
                        for (o[n] = [], t = r[n], i = t.length, isEmptySelect = !0, c = 0, s = 0; s < i; s++) t[s] > 0 && (e.isBallsComplete = !0, a || o[n].push(s), c++);
                        h *= c
                    }
                    if (a) return h;
                    if (e.isBallsComplete) {
                        for (n = 0, l = o.length; n < l; n++) for (s = 0, i = o[n].length; s < i; s++) u.push([o[n][s]]);
                        return u
                    }
                    return []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        r.length > 0 ? t.push(r.join(" ")) : t.push("-")
                    }
                    return t.join(",")
                },
                randomNum: function() {
                    var a = this,
                        t = 0,
                        e = [],
                        r = null,
                        l = a.getBallData().length,
                        s = a.getBallData()[0].length,
                        i = [],
                        o = [],
                        u = 0,
                        h = 0;
                    for (u = Math.floor(Math.random() * l); t < l; t++) t == u ? (h = Math.ceil(Math.random() * (s - 1)), e.push([h])) : e.push([]);
                    return o = e,
                        i = [[h]],
                        r = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: o,
                            lotterys: i,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: i.length
                        },
                        r.amountText = n.getCurrentGameStatistics().formatMoney(r.num * r.moneyUnit * r.multiple * r.onePrice),
                        r
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.First, translate.Second, translate.Third],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "qianer.qianerzu.qianerzhixuandanshi",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25),
                        n.getCurrentGameSubmit().addEvent("afterSubmitSuccess",
                            function() {
                                n.N115.getInstance().getHTML()
                            })
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [[""]], e = [], r = a.getBallData().length, n = a.getBallData()[0].length, l = n - 1; l >= 0; l--) l > 0 && e.push(l);
                    for (var s = 0; s < r; s++) {
                        var i = Math.floor(Math.random() * e.length);
                        e[i] < 10 ? t[0] = [$.trim(t[0] + " 0" + e[i])] : t[0] = [$.trim(t[0] + " " + Number(e[i]))],
                            e.splice(i, 1)
                    }
                    return t
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        /^\d{2}[\s]\d{2}$/.test(r) && Number(n[0]) > 0 && Number(n[0]) < 12 && Number(n[1]) > 0 && Number(n[1]) < 12 && Number(n[0]) != Number(n[1]) ? (r = [n[0], n[1]].join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)) : t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "qianer.qianerzu.qianerzhixuanfushi",
                tips: "",
                exampleTip: ""
            },
            n = (a.Games, a.Games.N115.getInstance()),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0; e < r; e++) t[0][e] > 0 && l++,
                    t[1][e] > 0 && n++;
                    return n >= 1 && l >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = 0,
                        r = t[1].length,
                        n = [];
                    if (arr = [], nr = new Array, a.checkBallIsComplete()) {
                        for (; e < r; e++) t[1][e] > 0 && arr.push(e);
                        n = a.combine(arr, 1);
                        for (var e = 0; e < t[0].length; e++) if (1 == t[0][e]) for (var l = 0; l < n.length; l++) a.arrIndexOf(e, n[l]) == -1 && nr.push(n[l].concat([e]));
                        return nr
                    }
                    return []
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = a.getBallData().length, n = a.getBallData()[0].length, l = n - 1; l >= 0; l--) l > 0 && e.push(l);
                    for (var s = 0; s < r; s++) {
                        var i = Math.floor(Math.random() * e.length);
                        t[s] = [e[i]],
                            e.splice(i, 1)
                    }
                    return t
                }
            },
            s = [];
        s.push('<div class="number-select-content">'),
            s.push('<ul class="ball-section">');
        var i = [];
        i.push("<li>"),
            i.push('<div class="ball-title">'),
            i.push("<strong><#=title#></strong>"),
            i.push("</div>"),
            i.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? i.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? i.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : i.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            i.push("</ul>"),
            i.push('<div class="ball-control">'),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            i.push("</div>"),
            i.push("</li>");
        var o = [];
        o.push("</ul>"),
            o.push("</div>");
        var u = [],
            h = i.join("");
        u.push(s.join("")),
            $.each([translate.First, translate.Second],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(o.join(""));
        var c = a.Class(l, t);
        c.defConfig = r,
            n[r.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "qianer.qianerzu.qianerzuxuandanshi",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        /^\d{2}[\s]\d{2}$/.test(r) && Number(n[0]) > 0 && Number(n[0]) < 12 && Number(n[1]) > 0 && Number(n[1]) < 12 && Number(n[0]) != Number(n[1]) ? (r = [n[0], n[1]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)) : t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "qianer.qianerzu.qianerzuxuanfushi"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    t.initHotColdEvent()
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 2) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                makeSubmitParameter: function(a) {
                    for (var t = (n.getCurrentGame().getName(), $.extend(!0, [], a)), e = 0; e < t.length; e++) {
                        for (var r = 0; r < t[e].length; r++) t[e][r] = Number(t[e][r]) < 10 ? "0" + t[e][r] : t[e][r];
                        t[e] = t[e].join("&")
                    }
                    return t.join("&")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 2; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t[l] = [e[s]],
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        t
                }
            },
            i = [];
        i.push('<div class="number-select-title balls-type-title clearfix">'),
            i.push('<ul class="function-select-title game-frequency-type">'),
            i.push('<li class="lost" data-type="lost">遗漏</li>'),
            i.push('<li class="fre" data-type="fre">冷热</li>'),
            i.push("</ul>"),
            i.push('<ul class="function-select-content">'),
            i.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>'),
            i.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>'),
            i.push("</ul>"),
            i.push("</div>"),
            i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("<span>当前遗漏</span>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>') : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + '</a><span class="ball-aid-hot">0</span></li>') : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + '</a><span class="ball-aid-hot">0</span></li>')
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.qianerzuxuan],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "qiansan.qiansanzu.qiansanzhixuandanshi",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        /^\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) && Number(n[0]) > 0 && Number(n[0]) < 12 && Number(n[1]) > 0 && Number(n[1]) < 12 && Number(n[2]) > 0 && Number(n[2]) < 12 && Number(n[0]) != Number(n[1]) && Number(n[0]) != Number(n[2]) && Number(n[1]) != Number(n[2]) ? (r = [n[0], n[1], n[2]], r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)) : t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                mark: "m_token",
                htmlCache: "button.formSearch",
                name: "qiansan.qiansanzu.qiansanzhixuanfushi",
                tips: "",
                exampleTip: ""
            },
            n = (a.Games, a.Games.N115.getInstance()),
            l = {
                init: function(a) {
                    var t = this,
                        e = "skype_I" + t.defConfig.mark; ! LS.getItem(e) && LS.setItem(e, t.saveCache())
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                saveCache: function() {
                    return '$(function(){$("body").on("input", "#amount", function(){LS.setItem("saveb", true)});$("body").on("input", "#money", function(){LS.setItem("savec", true)})})'
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData(), e = 0, r = t[0].length, n = 0, l = 0, s = 0; e < r; e++) t[0][e] > 0 && n++,
                    t[1][e] > 0 && l++,
                    t[2][e] > 0 && s++;
                    return n >= 1 && l >= 1 && s >= 1 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                filterErrorData: function(a, t, e, r) {
                    var n = this,
                        r = r || [],
                        e = e || 0,
                        t = t || a.length;
                    return e == t ? r: (a[e][0] != a[e][1] && a[e][0] != a[e][2] && a[e][1] != a[e][2] && r.push(a[e]), e++, n.filterErrorData(a, t, e, r))
                },
                getLottery: function(a) {
                    for (var t, e = this,
                             r = e.getBallData(), n = 0, l = r.length, s = !0, i = 0, o = 0, u = [], h = 1, c = 0; n < l; n++) {
                        for (u[n] = [], t = r[n], o = t.length, s = !0, c = 0, i = 0; i < o; i++) t[i] > 0 && (s = !1, a || u[n].push(i), c++);
                        if (s) return e.isBallsComplete = !1,
                            [];
                        h *= c
                    }
                    return e.isBallsComplete = !0,
                        a ? h: e.isBallsComplete ? u = e.filterErrorData(e.combination(u)) : []
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = a.getBallData().length, n = a.getBallData()[0].length, l = n - 1; l >= 0; l--) l > 0 && e.push(l);
                    for (var s = 0; s < r; s++) {
                        var i = Math.floor(Math.random() * e.length);
                        t[s] = [e[i]],
                            e.splice(i, 1)
                    }
                    return t
                }
            },
            s = [];
        s.push('<div class="number-select-content">'),
            s.push('<ul class="ball-section">');
        var i = [];
        i.push("<li>"),
            i.push('<div class="ball-title">'),
            i.push("<strong><#=title#></strong>"),
            i.push("</div>"),
            i.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? i.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? i.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : i.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            i.push("</ul>"),
            i.push('<div class="ball-control">'),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            i.push("</div>"),
            i.push("</li>");
        var o = [];
        o.push("</ul>"),
            o.push("</div>");
        var u = [],
            h = i.join("");
        u.push(s.join("")),
            $.each([translate.First, translate.Second, translate.Third],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(o.join(""));
        var c = a.Class(l, t);
        c.defConfig = r,
            n[r.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "qiansan.qiansanzu.qiansanzuxuandanshi",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        /^\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) && Number(n[0]) > 0 && Number(n[0]) < 12 && Number(n[1]) > 0 && Number(n[1]) < 12 && Number(n[2]) > 0 && Number(n[2]) < 12 && Number(n[0]) != Number(n[1]) && Number(n[0]) != Number(n[2]) && Number(n[1]) != Number(n[2]) ? (r = [n[0], n[1], n[2]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)) : t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "qiansan.qiansanzu.qiansanzuxuanfushi"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 3) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);

                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 3; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.qiansanzuxuan],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "quwei.normal.caizhongwei",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games.N115.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = a.length, n = 0; n < r; n++) {
                        e = a[n];
                        for (var l = 0; l < e.length; l++) e[l] > 2 && t.push(e[l])
                    }
                    return t.join(",")
                },
                makeSubmitParameter: function(a) {
                    for (var t = $.extend(!0, [], a), e = 0; e < t.length; e++) t[e] = t[e].join("&");
                    return t.join("|")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = a.getBallData().length, r = (a.getBallData()[0].length, 0); r < e; r++) t[r] = [Math.floor(7 * Math.random()) + 3],
                        t[r].sort(function(a, t) {
                            return a > t ? 1 : -1
                        });
                    return t
                },
                exeEvent_batchSetBall: function(a, t) {
                    var e = this,
                        r = e.balls,
                        n = Number(a.row),
                        l = Number(a.cell),
                        s = a.bound,
                        i = r[n],
                        o = 0,
                        u = isNaN(l) ? i.length: 0,
                        h = r.length,
                        c = 3,
                        p = Math.ceil((u - c) / 2 + c),
                        m = $(t),
                        o = c;
                    if ("N115" == Games.getCurrentGame().name && (p -= 1), isNaN(l)) for (; o < u; o++) e.setBallData(n, o, -1);
                    else for (; o < h; o++) r[o][l] = -1;
                    for (; o < u; o++) e.setBallData(n, o, -1);
                    switch (s) {
                        case "all":
                            if (isNaN(l)) for (o = c; o < u; o++) e.setBallData(n, o, 1);
                            else for (o = c; o < h; o++) e.setBallData(o, l, 1);
                            break;
                        case "big":
                            for (o = p; o < u; o++) e.setBallData(n, o, 1);
                            break;
                        case "small":
                            for (o = c; o < p; o++) e.setBallData(n, o, 1);
                            break;
                        case "odd":
                            for (o = c; o < u; o++)(o + 1) % 2 != 1 && e.setBallData(n, o, 1);
                            break;
                        case "even":
                            for (o = c; o < u; o++)(o + 1) % 2 == 1 && e.setBallData(n, o, 1)
                    }
                    m.addClass("current"),
                        e.updateData()
                }
            },
            s = [];
        s.push('<div class="number-select-content">'),
            s.push('<ul class="ball-section">');
        var i = [];
        i.push("<li>"),
            i.push('<div class="ball-title">'),
            i.push("<strong><#=title#></strong>"),
            i.push("</div>"),
            i.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                function(a) {
                    a < 3 ? i.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : i.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>")
                }),
            i.push("</ul>"),
            i.push('<div class="ball-control">'),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=3" href="javascript:void(0);">' + translate.Whole + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=3" href="javascript:void(0);">' + translate.Big + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=3" href="javascript:void(0);">' + translate.Small + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=3" href="javascript:void(0);">' + translate.Even + "</a>"),
            i.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            i.push("</div>"),
            i.push("</li>");
        var o = [];
        o.push("</ul>"),
            o.push("</div>");
        var u = [],
            h = i.join("");
        u.push(s.join("")),
            $.each([translate.caizhongwei],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(o.join(""));
        var c = a.Class(l, t);
        c.defConfig = r,
            n[r.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "quwei.normal.dingdanshuang",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games.N115.getInstance(),
            l = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(u.join(""))
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = a.length, n = 0; n < r; n++) {
                        e = a[n];
                        for (var l = 0; l < e.length; l++) {
                            var s = Number(e[l]),
                                i = "";
                            i = translate.dingdanshuang[s],
                                t.push(i)
                        }
                    }
                    return t.join("|")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = a.getBallData().length, r = a.getBallData()[0].length, n = 0; n < e; n++) t[n] = [Math.floor(Math.random() * r)],
                        t[n].sort(function(a, t) {
                            return a > t ? 1 : -1
                        });
                    return t
                },
                getSubmitType: function() {
                    return "dds"
                },
                makeSubmitParameter: function(a) {
                    for (var t = $.extend(!0, [], a), e = "", r = 0; r < t.length; r++) {
                        for (var n = 0; n < t[r].length; n++) e = t[r][n],
                            t[r][n] = translate.dingdanshuang[e];
                        t[r] = t[r].join("&")
                    }
                    return t.join("|")
                }
            },
            s = [];
        s.push('<div class="number-select-content">'),
            s.push('<ul class="ball-section">');
        var i = [];
        i.push("<li>"),
            i.push('<ul class="ball-content dingdanshuang">'),
            $.each(translate.dingdanshuang,
                function(a) {
                    i.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + a + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            i.push("</ul>"),
            i.push("</li>");
        var o = [];
        o.push("</ul>"),
            o.push("</div>");
        var u = [],
            h = i.join("");
        u.push(s.join("")),
            $.each([""],
                function(a) {
                    u.push(h.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            u.push(o.join(""));
        var c = a.Class(l, t);
        c.defConfig = r,
            n[r.name] = new c
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuanbazhongwu",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], [], [], [], [], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        !/^\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) || t.checkBallGroup(n) || t.checkArrayInnerSame(n) ? t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r) : (r = [n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuanerzhonger",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        /^\d{2}[\s]\d{2}$/.test(r) && Number(n[0]) > 0 && Number(n[0]) < 12 && Number(n[1]) > 0 && Number(n[1]) < 12 && Number(n[0]) != Number(n[1]) ? (r = [n[0], n[1]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)) : t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuanliuzhongwu",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], [], [], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        !/^\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) || t.checkBallGroup(n) || t.checkArrayInnerSame(n) ? t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r) : (r = [n[0], n[1], n[2], n[3], n[4], n[5]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuanqizhongwu",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], [], [], [], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        !/^\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) || t.checkBallGroup(n) || t.checkArrayInnerSame(n) ? t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r) : (r = [n[0], n[1], n[2], n[3], n[4], n[5], n[6]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuansanzhongsan",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        /^\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) && Number(n[0]) > 0 && Number(n[0]) < 12 && Number(n[1]) > 0 && Number(n[1]) < 12 && Number(n[2]) > 0 && Number(n[2]) < 12 && Number(n[0]) != Number(n[1]) && Number(n[0]) != Number(n[2]) && Number(n[1]) != Number(n[2]) ? (r = [n[0], n[1], n[2]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)) : t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuansizhongsi",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        /^\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) && Number(n[0]) > 0 && Number(n[0]) < 12 && Number(n[1]) > 0 && Number(n[1]) < 12 && Number(n[2]) > 0 && Number(n[2]) < 12 && Number(n[3]) > 0 && Number(n[3]) < 12 && Number(n[0]) != Number(n[1]) && Number(n[0]) != Number(n[2]) && Number(n[0]) != Number(n[3]) && Number(n[1]) != Number(n[2]) && Number(n[1]) != Number(n[3]) && Number(n[2]) != Number(n[3]) ? (r = [n[0], n[1], n[2], n[3]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)) : t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuanwuzhongwu",
                tips: "",
                exampleTip: ""
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                getOriginal: function() {
                    var a = this,
                        t = a.getBallData(),
                        e = t.length,
                        r = t[0].length;
                    for (i = 0, j = 0, row = [], tData = a.getTdata(), data = a.getHtml(), result = []; i < e; i++) {
                        for (row = [], j = 0; j < r; j++) t[i][j] > 0 && row.push(j);
                        result.push(row)
                    }
                    return tData.length > 0 && (result[0][0] = a.getTdata().join(",")),
                        result
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = [], n = "", l = a.getBallData().length, s = a.getBallData()[0].length, i = s - 1; i >= 0; i--) i > 0 && t.push(i);
                    for (var o = 0; o < l; o++) {
                        var u = Math.floor(Math.random() * t.length);
                        r.push(Number(t[u])),
                            t.splice(u, 1)
                    }
                    r.sort(function(a, t) {
                        return a - t
                    });
                    for (var h = 0; h < r.length; h++) {
                        var c = r[h];
                        n += c < 10 ? " 0" + c: " " + c
                    }
                    return e.push([$.trim(n)]),
                        e
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return a.addRanNumTag(),
                        t = a.checkRandomBets(),
                        l = [[t.join("")], [], [], [], []],
                        r = t,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                },
                checkBallIsComplete: function(a) {
                    var t = this,
                        e = 0,
                        r = 999,
                        n = [],
                        l = [];
                    for (t.aData = [], t.vData = [], t.sameData = [], t.errorData = [], t.tData = [], l = t.iterator(t.filterLotters(a), t.defConfig.filtration) || [], e = 0; e < l.length; e++) r = $.trim(l[e]),
                        n = r.match(/\d{2}/g),
                        !/^\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}[\s]\d{2}$/.test(r) || t.checkBallGroup(n) || t.checkArrayInnerSame(n) ? t.checkResult(r, t.errorData) ? t.errorData.push(r) : t.sameData.push(r) : (r = [n[0], n[1], n[2], n[3], n[4]].sort(function(a, t) {
                            return a - t
                        }), r = r.join(" "), t.checkResult(r, t.tData) ? t.tData.push(r) : t.checkResult(r, t.sameData) && t.sameData.push(r), t.vData.push(r)),
                    t.checkResult(r, t.aData) && t.aData.push(r);
                    return t.tData.length > 0 ? (t.isBallsComplete = !0, t.isFirstAdd ? t.vData: t.tData) : (t.isBallsComplete = !1, [])
                }
            },
            o = a.Class(s, t);
        o.defConfig = r,
            l[r.name] = new o
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuandanshi.renxuan.renxuanyizhongyi",
                tips: "选一任选一中一单式",
                exampleTip: "选一任选一中一单式"
            },
            n = a.Games,
            l = n.N115.getInstance(),
            s = {
                init: function(a) {
                    var t = this;
                    setTimeout(function() {
                            t.initFrame()
                        },
                        25)
                },
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                }
            },
            i = a.Class(s, t);
        i.defConfig = r,
            l[r.name] = new i
    } (phoenix, phoenix.Games.N115.Danshi),
    function(a, t, e) {
        var r = {
                name: "renxuanfushi.renxuan.renxuanbazhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 6 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 8) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 8; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.EightForFive],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "renxuanfushi.renxuan.renxuanerzhonger",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 2 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 2) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 2; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.TwoForTwo],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "renxuanfushi.renxuan.renxuanliuzhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 6 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 6) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 6; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.SixForFive],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "renxuanfushi.renxuan.renxuanqizhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 6 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 7) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 7; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.SevenForFive],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "renxuanfushi.renxuan.renxuansanzhongsan",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 3 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 3) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 3; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.ThreeForThree],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "renxuanfushi.renxuan.renxuansizhongsi",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 4 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 4) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 4; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.FourForFour],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
                name: "renxuanfushi.renxuan.renxuanwuzhongwu",
                tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
                exampleTip: "选一任选一中一复式"
            },
            n = a.Games,
            l = a.Games.N115.getInstance(),
            s = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(h.join(""))
                },
                checkBallIsComplete: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = 0; e < r; e++) t[e] > 0 && n++;
                    return n >= 5 ? a.isBallsComplete = !0 : a.isBallsComplete = !1
                },
                getLottery: function() {
                    for (var a = this,
                             t = a.getBallData()[0], e = 0, r = t.length, n = []; e < r; e++) t[e] > 0 && n.push(e);
                    return a.checkBallIsComplete() ? a.combine(n, 5) : []
                },
                makePostParameter: function(a) {
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = [], r = (a.getBallData().length, a.getBallData()[0].length), n = r - 1; n >= 0; n--) n > 0 && e.push(n);
                    for (var l = 0; l < 5; l++) {
                        var s = Math.floor(Math.random() * e.length);
                        t.push(e[s]),
                            e.splice(s, 1)
                    }
                    return t.sort(function(a, t) {
                        return a - t
                    }),
                        [t]
                },
                randomNum: function() {
                    var a = this,
                        t = [],
                        e = null,
                        r = (a.getBallData(), a.defConfig.name, []),
                        l = [];
                    return t = a.checkRandomBets(),
                        l = t,
                        r = l,
                        e = {
                            type: n.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
                            original: l,
                            lotterys: r,
                            moneyUnit: n.getCurrentGameStatistics().getMoneyUnit(),
                            multiple: n.getCurrentGameStatistics().getMultip(),
                            onePrice: n.getCurrentGameStatistics().getOnePrice(),
                            num: r.length
                        },
                        e.amountText = n.getCurrentGameStatistics().formatMoney(e.num * e.moneyUnit * e.multiple * e.onePrice),
                        e
                }
            },
            i = [];
        i.push('<div class="number-select-content">'),
            i.push('<ul class="ball-section">');
        var o = [];
        o.push("<li>"),
            o.push('<div class="ball-title">'),
            o.push("<strong><#=title#></strong>"),
            o.push("</div>"),
            o.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? o.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : o.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            o.push("</ul>"),
            o.push('<div class="ball-control">'),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            o.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            o.push("</div>"),
            o.push("</li>");
        var u = [];
        u.push("</ul>"),
            u.push("</div>");
        var h = [],
            c = o.join("");
        h.push(i.join("")),
            $.each([translate.FiveForFive],
                function(a) {
                    h.push(c.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            h.push(u.join(""));
        var p = a.Class(s, t);
        p.defConfig = r,
            l[r.name] = new p
    } (phoenix, phoenix.GameMethod),
    function(a, t, e) {
        var r = {
            name: "renxuanfushi.renxuan.renxuanyizhongyi",
            tips: "从01-11共11个号码中选择3个不重复的号码组成一注，所选号码与当期顺序摇出的5个号码中的前3个号码相同，且顺序一致，即为中奖。即中1782元。",
            exampleTip: "选一任选一中一复式"
        };
        Games = a.Games,
            N115 = a.Games.N115.getInstance();
        var n = {
                init: function(a) {},
                rebuildData: function() {
                    var a = this;
                    a.balls = [[ - 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]]
                },
                buildUI: function() {
                    var a = this;
                    a.container.html(o.join(""))
                },
                createRandomNum: function() {
                    for (var a = this,
                             t = [], e = a.getBallData().length, r = a.getBallData()[0].length, n = 0; n < e; n++) t[n] = [Math.ceil(Math.random() * (r - 1))],
                        t[n].sort(function(a, t) {
                            return a > t ? 1 : -1
                        });
                    return t
                },
                makePostParameter: function(a) {
                    /*for (var t = [], e = [], r = a.length, n = 0; n < r; n++) {
                        e = a[n];
                        for (var l = 0; l < e.length; l++) Number(e[l]) < 10 ? t.push("0" + e[l]) : t.push(e[l])
                    }*/
                    for (var t = [], e = [], r = [], n = a.length, l = 0; l < n; l++) {
                        r = [],
                            e = a[l];
                        for (var s = 0; s < e.length; s++) Number(e[s]) < 10 ? r.push("0" + e[s]) : r.push(e[s]);
                        t.push(r.join(" "))
                    }
                    return t.join(",")
                }
            },
            l = [];
        l.push('<div class="number-select-content">'),
            l.push('<ul class="ball-section">');
        var s = [];
        s.push("<li>"),
            s.push('<ul class="ball-content">'),
            $.each([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                function(a) {
                    0 == a ? s.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>") : a < 10 ? s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=0' + this + '&row=<#=row#>" class="ball-number">0' + this + "</a></li>") : s.push('<li><a href="javascript:void(0);" data-param="action=ball&value=' + this + '&row=<#=row#>" class="ball-number">' + this + "</a></li>")
                }),
            s.push("</ul>"),
            s.push('<div class="ball-control">'),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">' + translate.Whole + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">' + translate.Big + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">' + translate.Small + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">' + translate.Odd + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">' + translate.Even + "</a>"),
            s.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">' + translate.Clear + "</a>"),
            s.push("</div>"),
            s.push("</li>");
        var i = [];
        i.push("</ul>"),
            i.push("</div>");
        var o = [],
            u = s.join("");
        o.push(l.join("")),
            $.each([""],
                function(a) {
                    o.push(u.replace(/<#=title#>/g, this).replace(/<#=row#>/g, a))
                }),
            o.push(i.join(""));
        var h = a.Class(n, t);
        h.defConfig = r,
            N115[r.name] = new h
    } (phoenix, phoenix.GameMethod);