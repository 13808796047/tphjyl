/** build:2017/5/11 1494466054955 **/
!
function(e, t) {
    function n(e) {
        var t = e.length,
        n = le.type(e);
        return ! le.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function i(e) {
        var t = ve[e] = {};
        return le.each(e.match(ue) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function o(e, n, i, o) {
        if (le.acceptData(e)) {
            var r, a, s = le.expando,
            l = "string" == typeof n,
            c = e.nodeType,
            u = c ? le.cache: e,
            d = c ? e[s] : e[s] && s;
            if (d && u[d] && (o || u[d].data) || !l || i !== t) return d || (c ? e[s] = d = Z.pop() || le.guid++:d = s),
            u[d] || (u[d] = {},
            c || (u[d].toJSON = le.noop)),
            "object" != typeof n && "function" != typeof n || (o ? u[d] = le.extend(u[d], n) : u[d].data = le.extend(u[d].data, n)),
            r = u[d],
            o || (r.data || (r.data = {}), r = r.data),
            i !== t && (r[le.camelCase(n)] = i),
            l ? null == (a = r[n]) && (a = r[le.camelCase(n)]) : a = r,
            a
        }
    }
    function r(e, t, n) {
        if (le.acceptData(e)) {
            var i, o, r, a = e.nodeType,
            l = a ? le.cache: e,
            c = a ? e[le.expando] : le.expando;
            if (l[c]) {
                if (t && (r = n ? l[c] : l[c].data)) {
                    le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in r ? t = [t] : (t = le.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; i < o; i++) delete r[t[i]];
                    if (! (n ? s: le.isEmptyObject)(r)) return
                } (n || (delete l[c].data, s(l[c]))) && (a ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
            }
        }
    }
    function a(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var o = "data-" + n.replace(ye, "-$1").toLowerCase();
            if ("string" == typeof(i = e.getAttribute(o))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null: +i + "" === i ? +i: be.test(i) ? le.parseJSON(i) : i)
                } catch(e) {}
                le.data(e, n, i)
            } else i = t
        }
        return i
    }
    function s(e) {
        var t;
        for (t in e) if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function l() {
        return ! 0
    }
    function c() {
        return ! 1
    }
    function u(e, t) {
        do {
            e = e[t]
        } while ( e && 1 !== e . nodeType );
        return e
    }
    function d(e, t, n) {
        if (t = t || 0, le.isFunction(t)) return le.grep(e,
        function(e, i) {
            return !! t.call(e, i, e) === n
        });
        if (t.nodeType) return le.grep(e,
        function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var i = le.grep(e,
            function(e) {
                return 1 === e.nodeType
            });
            if (Le.test(t)) return le.filter(t, i, !n);
            t = le.filter(t, i)
        }
        return le.grep(e,
        function(e) {
            return le.inArray(e, t) >= 0 === n
        })
    }
    function f(e) {
        var t = He.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function p(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }
    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
        e
    }
    function g(e) {
        var t = Ge.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) le._data(n, "globalEval", !t || le._data(t[i], "globalEval"))
    }
    function v(e, t) {
        if (1 === t.nodeType && le.hasData(e)) {
            var n, i, o, r = le._data(e),
            a = le._data(t, r),
            s = r.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s) for (i = 0, o = s[n].length; i < o; i++) le.event.add(t, n, s[n][i])
            }
            a.data && (a.data = le.extend({},
            a.data))
        }
    }
    function b(e, t) {
        var n, i, o;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                o = le._data(t);
                for (i in o.events) le.removeEvent(t, i, o.handle);
                t.removeAttribute(le.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Xe.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function y(e, n) {
        var i, o, r = 0,
        a = typeof e.getElementsByTagName !== X ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== X ? e.querySelectorAll(n || "*") : t;
        if (!a) for (a = [], i = e.childNodes || e; null != (o = i[r]); r++) ! n || le.nodeName(o, n) ? a.push(o) : le.merge(a, y(o, n));
        return n === t || n && le.nodeName(e, n) ? le.merge([e], a) : a
    }
    function x(e) {
        Xe.test(e.type) && (e.defaultChecked = e.checked)
    }
    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = gt.length; o--;) if ((t = gt[o] + n) in e) return t;
        return i
    }
    function C(e, t) {
        return e = t || e,
        "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
    }
    function T(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; a < s; a++) i = e[a],
        i.style && (r[a] = le._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && C(i) && (r[a] = le._data(i, "olddisplay", A(i.nodeName)))) : r[a] || (o = C(i), (n && "none" !== n || !o) && le._data(i, "olddisplay", o ? n: le.css(i, "display"))));
        for (a = 0; a < s; a++) i = e[a],
        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "": "none"));
        return e
    }
    function k(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function S(e, t, n, i, o) {
        for (var r = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; r < 4; r += 2)"margin" === n && (a += le.css(e, n + ht[r], !0, o)),
        i ? ("content" === n && (a -= le.css(e, "padding" + ht[r], !0, o)), "margin" !== n && (a -= le.css(e, "border" + ht[r] + "Width", !0, o))) : (a += le.css(e, "padding" + ht[r], !0, o), "padding" !== n && (a += le.css(e, "border" + ht[r] + "Width", !0, o)));
        return a
    }
    function E(e, t, n) {
        var i = !0,
        o = "width" === t ? e.offsetWidth: e.offsetHeight,
        r = tt(e),
        a = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = nt(e, t, r), (o < 0 || null == o) && (o = e.style[t]), ct.test(o)) return o;
            i = a && (le.support.boxSizingReliable || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + S(e, t, n || (a ? "border": "content"), i, r) + "px"
    }
    function A(e) {
        var t = Y,
        n = dt[e];
        return n || (n = D(e, t), "none" !== n && n || (et = (et || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (et[0].contentWindow || et[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = D(e, t), et.detach()), dt[e] = n),
        n
    }
    function D(e, t) {
        var n = le(t.createElement(e)).appendTo(t.body),
        i = le.css(n[0], "display");
        return n.remove(),
        i
    }
    function N(e, t, n, i) {
        var o;
        if (le.isArray(t)) le.each(t,
        function(t, o) {
            n || mt.test(e) ? i(e, o) : N(e + "[" + ("object" == typeof o ? t: "") + "]", o, n, i)
        });
        else if (n || "object" !== le.type(t)) i(e, t);
        else for (o in t) N(e + "[" + o + "]", t[o], n, i)
    }
    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
            r = t.toLowerCase().match(ue) || [];
            if (le.isFunction(n)) for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function j(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0,
            le.each(e[s] || [],
            function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }),
            l
        }
        var r = {},
        a = e === Pt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }
    function O(e, n) {
        var i, o, r = le.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== t && ((r[o] ? e: i || (i = {}))[o] = n[o]);
        return i && le.extend(!0, e, i),
        e
    }
    function R(e, n, i) {
        var o, r, a, s, l = e.contents,
        c = e.dataTypes,
        u = e.responseFields;
        for (s in u) s in i && (n[u[s]] = i[s]);
        for (;
        "*" === c[0];) c.shift(),
        r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
        if (r) for (s in l) if (l[s] && l[s].test(r)) {
            c.unshift(s);
            break
        }
        if (c[0] in i) a = c[0];
        else {
            for (s in i) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                o || (o = s)
            }
            a = a || o
        }
        if (a) return a !== c[0] && c.unshift(a),
        i[a]
    }
    function q(e, t) {
        var n, i, o, r, a = {},
        s = 0,
        l = e.dataTypes.slice(),
        c = l[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1]) for (o in e.converters) a[o.toLowerCase()] = e.converters[o];
        for (; i = l[++s];) if ("*" !== i) {
            if ("*" !== c && c !== i) {
                if (! (o = a[c + " " + i] || a["* " + i])) for (n in a) if (r = n.split(" "), r[1] === i && (o = a[c + " " + r[0]] || a["* " + r[0]])) {
                    o === !0 ? o = a[n] : a[n] !== !0 && (i = r[0], l.splice(s--, 0, i));
                    break
                }
                if (o !== !0) if (o && e.throws) t = o(t);
                else try {
                    t = o(t)
                } catch(e) {
                    return {
                        state: "parsererror",
                        error: o ? e: "No conversion from " + c + " to " + i
                    }
                }
            }
            c = i
        }
        return {
            state: "success",
            data: t
        }
    }
    function F() {
        try {
            return new e.XMLHttpRequest
        } catch(e) {}
    }
    function L() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(e) {}
    }
    function I() {
        return setTimeout(function() {
            Mt = t
        }),
        Mt = le.now()
    }
    function M(e, t) {
        le.each(t,
        function(t, n) {
            for (var i = (Vt[t] || []).concat(Vt["*"]), o = 0, r = i.length; o < r; o++) if (i[o].call(e, t, n)) return
        })
    }
    function H(e, t, n) {
        var i, o, r = 0,
        a = Bt.length,
        s = le.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (o) return ! 1;
            for (var t = Mt || I(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
            return s.notifyWith(e, [c, r, n]),
            r < 1 && l ? n: (s.resolveWith(e, [c]), !1)
        },
        c = s.promise({
            elem: e,
            props: le.extend({},
            t),
            opts: le.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Mt || I(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0,
                i = t ? c.tweens.length: 0;
                if (o) return this;
                for (o = !0; n < i; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                this
            }
        }),
        u = c.props;
        for (z(u, c.opts.specialEasing); r < a; r++) if (i = Bt[r].call(c, e, u, c.opts)) return i;
        return M(c, u),
        le.isFunction(c.opts.start) && c.opts.start.call(e, c),
        le.fx.timer(le.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function z(e, t) {
        var n, i, o, r, a;
        for (o in e) if (i = le.camelCase(o), r = t[i], n = e[o], le.isArray(n) && (r = n[1], n = e[o] = n[0]), o !== i && (e[i] = n, delete e[o]), (a = le.cssHooks[i]) && "expand" in a) {
            n = a.expand(n),
            delete e[i];
            for (o in n) o in e || (e[o] = n[o], t[o] = r)
        } else t[i] = r
    }
    function W(e, t, n) {
        var i, o, r, a, s, l, c, u, d, f = this,
        p = e.style,
        h = {},
        g = [],
        m = e.nodeType && C(e);
        n.queue || (u = le._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
            u.unqueued || d()
        }), u.unqueued++, f.always(function() {
            f.always(function() {
                u.unqueued--,
                le.queue(e, "fx").length || u.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden", le.support.shrinkWrapBlocks || f.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (o in t) if (a = t[o], zt.exec(a)) {
            if (delete t[o], l = l || "toggle" === a, a === (m ? "hide": "show")) continue;
            g.push(o)
        }
        if (r = g.length) {
            s = le._data(e, "fxshow") || le._data(e, "fxshow", {}),
            "hidden" in s && (m = s.hidden),
            l && (s.hidden = !m),
            m ? le(e).show() : f.done(function() {
                le(e).hide()
            }),
            f.done(function() {
                var t;
                le._removeData(e, "fxshow");
                for (t in h) le.style(e, t, h[t])
            });
            for (o = 0; o < r; o++) i = g[o],
            c = f.createTween(i, m ? s[i] : 0),
            h[i] = s[i] || le.style(e, i),
            i in s || (s[i] = c.start, m && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function _(e, t, n, i, o) {
        return new _.prototype.init(e, t, n, i, o)
    }
    function B(e, t) {
        var n, i = {
            height: e
        },
        o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) n = ht[o],
        i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function V(e) {
        return le.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var $, U, X = typeof t,
    Y = e.document,
    Q = e.location,
    G = e.jQuery,
    J = e.$,
    K = {},
    Z = [],
    ee = "1.9.1",
    te = Z.concat,
    ne = Z.push,
    ie = Z.slice,
    oe = Z.indexOf,
    re = K.toString,
    ae = K.hasOwnProperty,
    se = ee.trim,
    le = function(e, t) {
        return new le.fn.init(e, t, U)
    },
    ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ue = /\S+/g,
    de = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    pe = /^[\],:{}\s]*$/,
    he = function(e, t) {
        return t.toUpperCase()
    },
    ge = function(e) { (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (me(), le.ready())
    },
    me = function() {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", ge, !1), e.removeEventListener("load", ge, !1)) : (Y.detachEvent("onreadystatechange", ge), e.detachEvent("onload", ge))
    };
    le.fn = le.prototype = {
        jquery: ee,
        constructor: le,
        init: function(e, n, i) {
            var o, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (! (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : de.exec(e)) || !o[1] && n) return ! n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (o[1]) {
                    if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n: Y, !0)), fe.test(o[1]) && le.isPlainObject(n)) for (o in n) le.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                if ((r = Y.getElementById(o[2])) && r.parentNode) {
                    if (r.id !== o[2]) return i.find(e);
                    this.length = 1,
                    this[0] = r
                }
                return this.context = Y,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = le.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return le.each(this, e, t)
        },
        ready: function(e) {
            return le.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (e < 0 ? t: 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(le.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: ne,
        sort: [].sort,
        splice: [].splice
    },
    le.fn.init.prototype = le.fn,
    le.extend = le.fn.extend = function() {
        var e, n, i, o, r, a, s = arguments[0] || {},
        l = 1,
        c = arguments.length,
        u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[1] || {},
        l = 2), "object" == typeof s || le.isFunction(s) || (s = {}), c === l && (s = this, --l); l < c; l++) if (null != (r = arguments[l])) for (o in r) e = s[o],
        i = r[o],
        s !== i && (u && i && (le.isPlainObject(i) || (n = le.isArray(i))) ? (n ? (n = !1, a = e && le.isArray(e) ? e: []) : a = e && le.isPlainObject(e) ? e: {},
        s[o] = le.extend(u, a, i)) : i !== t && (s[o] = i));
        return s
    },
    le.extend({
        noConflict: function(t) {
            return e.$ === le && (e.$ = J),
            t && e.jQuery === le && (e.jQuery = G),
            le
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? le.readyWait++:le.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--le.readyWait: !le.isReady) {
                if (!Y.body) return setTimeout(le.ready);
                le.isReady = !0,
                e !== !0 && --le.readyWait > 0 || ($.resolveWith(Y, [le]), le.fn.trigger && le(Y).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === le.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === le.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[re.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !ae.call(e, "constructor") && !ae.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(e) {
                return ! 1
            }
            var n;
            for (n in e);
            return n === t || ae.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || Y;
            var i = fe.exec(e),
            o = !n && [];
            return i ? [t.createElement(i[1])] : (i = le.buildFragment([e], t, o), o && le(o).remove(), le.merge([], i.childNodes))
        },
        parseJSON: function(t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t: "string" == typeof t && (t = le.trim(t)) && pe.test(t.replace(/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "@").replace(/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")) ? new Function("return " + t)() : void le.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var i, o;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch(e) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n),
            i
        },
        noop: function() {},
        globalEval: function(t) {
            t && le.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, he)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o = 0,
            r = e.length,
            a = n(e);
            if (i) {
                if (a) for (; o < r && t.apply(e[o], i) !== !1; o++);
                else for (o in e) if (t.apply(e[o], i) === !1) break
            } else if (a) for (; o < r && t.call(e[o], o, e[o]) !== !1; o++);
            else for (o in e) if (t.call(e[o], o, e[o]) === !1) break;
            return e
        },
        trim: se && !se.call("\ufeff ") ?
        function(e) {
            return null == e ? "": se.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? le.merge(i, "string" == typeof e ? [e] : e) : ne.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (oe) return oe.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n: 0; n < i; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var i = n.length,
            o = e.length,
            r = 0;
            if ("number" == typeof i) for (; r < i; r++) e[o++] = n[r];
            else for (; n[r] !== t;) e[o++] = n[r++];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            var i, o = [],
            r = 0,
            a = e.length;
            for (n = !!n; r < a; r++) i = !!t(e[r], r),
            n !== i && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r = 0,
            a = e.length,
            s = n(e),
            l = [];
            if (s) for (; r < a; r++) null != (o = t(e[r], r, i)) && (l[l.length] = o);
            else for (r in e) null != (o = t(e[r], r, i)) && (l[l.length] = o);
            return te.apply([], l)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, o, r;
            return "string" == typeof n && (r = e[n], n = e, e = r),
            le.isFunction(e) ? (i = ie.call(arguments, 2), o = function() {
                return e.apply(n || this, i.concat(ie.call(arguments)))
            },
            o.guid = e.guid = e.guid || le.guid++, o) : t
        },
        access: function(e, n, i, o, r, a, s) {
            var l = 0,
            c = e.length,
            u = null == i;
            if ("object" === le.type(i)) {
                r = !0;
                for (l in i) le.access(e, n, l, i[l], !0, a, s)
            } else if (o !== t && (r = !0, le.isFunction(o) || (s = !0), u && (s ? (n.call(e, o), n = null) : (u = n, n = function(e, t, n) {
                return u.call(le(e), n)
            })), n)) for (; l < c; l++) n(e[l], i, s ? o: o.call(e[l], l, n(e[l], i)));
            return r ? e: u ? n.call(e) : c ? n(e[0], i) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    le.ready.promise = function(t) {
        if (!$) if ($ = le.Deferred(), "complete" === Y.readyState) setTimeout(le.ready);
        else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", ge, !1),
        e.addEventListener("load", ge, !1);
        else {
            Y.attachEvent("onreadystatechange", ge),
            e.attachEvent("onload", ge);
            var n = !1;
            try {
                n = null == e.frameElement && Y.documentElement
            } catch(e) {}
            n && n.doScroll &&
            function e() {
                if (!le.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(t) {
                        return setTimeout(e, 50)
                    }
                    me(),
                    le.ready()
                }
            } ()
        }
        return $.promise(t)
    },
    le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }),
    U = le(Y);
    var ve = {};
    le.Callbacks = function(e) {
        e = "string" == typeof e ? ve[e] || i(e) : le.extend({},
        e);
        var n, o, r, a, s, l, c = [],
        u = !e.once && [],
        d = function(t) {
            for (o = e.memory && t, r = !0, s = l || 0, l = 0, a = c.length, n = !0; c && s < a; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                o = !1;
                break
            }
            n = !1,
            c && (u ? u.length && d(u.shift()) : o ? c = [] : f.disable())
        },
        f = {
            add: function() {
                if (c) {
                    var t = c.length; !
                    function t(n) {
                        le.each(n,
                        function(n, i) {
                            var o = le.type(i);
                            "function" === o ? e.unique && f.has(i) || c.push(i) : i && i.length && "string" !== o && t(i)
                        })
                    } (arguments),
                    n ? a = c.length: o && (l = t, d(o))
                }
                return this
            },
            remove: function() {
                return c && le.each(arguments,
                function(e, t) {
                    for (var i; (i = le.inArray(t, c, i)) > -1;) c.splice(i, 1),
                    n && (i <= a && a--, i <= s && s--)
                }),
                this
            },
            has: function(e) {
                return e ? le.inArray(e, c) > -1 : !(!c || !c.length)
            },
            empty: function() {
                return c = [],
                this
            },
            disable: function() {
                return c = u = o = t,
                this
            },
            disabled: function() {
                return ! c
            },
            lock: function() {
                return u = t,
                o || f.disable(),
                this
            },
            locked: function() {
                return ! u
            },
            fireWith: function(e, t) {
                return t = t || [],
                t = [e, t.slice ? t.slice() : t],
                !c || r && !u || (n ? u.push(t) : d(t)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! r
            }
        };
        return f
    },
    le.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return le.Deferred(function(n) {
                        le.each(t,
                        function(t, r) {
                            var a = r[0],
                            s = le.isFunction(e[t]) && e[t];
                            o[r[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? le.extend(e, i) : i
                }
            },
            o = {};
            return i.pipe = i.then,
            le.each(t,
            function(e, r) {
                var a = r[2],
                s = r[3];
                i[r[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i: this, arguments),
                    this
                },
                o[r[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, n, i, o = 0,
            r = ie.call(arguments),
            a = r.length,
            s = 1 !== a || e && le.isFunction(e.promise) ? a: 0,
            l = 1 === s ? e: le.Deferred(),
            c = function(e, n, i) {
                return function(o) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? ie.call(arguments) : o,
                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) r[o] && le.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
            return s || l.resolveWith(i, r),
            l.promise()
        }
    }),
    le.support = function() {
        var t, n, i, o, r, a, s, l, c, u, d = Y.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
        r = Y.createElement("select"),
        s = r.appendChild(Y.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        t = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: !!o.value,
            optSelected: s.selected,
            enctype: !!Y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === Y.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        r.disabled = !0,
        t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch(e) {
            t.deleteExpando = !1
        }
        o = Y.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        a = Y.createDocumentFragment(),
        a.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (u in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(l = "on" + u, "t"),
        t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
        return d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip,
        le(function() {
            var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            a = Y.getElementsByTagName("body")[0];
            a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, i = d.appendChild(Y.createElement("div")), i.style.cssText = d.style.cssText = r, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== X && (d.innerHTML = "", d.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = o = i = null)
        }),
        n = r = a = s = i = o = null,
        t
    } ();
    var be = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    ye = /([A-Z])/g;
    le.extend({
        cache: {},
        expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !! (e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando]) && !s(e)
        },
        data: function(e, t, n) {
            return o(e, t, n)
        },
        removeData: function(e, t) {
            return r(e, t)
        },
        _data: function(e, t, n) {
            return o(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return r(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
            var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    le.fn.extend({
        data: function(e, n) {
            var i, o, r = this[0],
            s = 0,
            l = null;
            if (e === t) {
                if (this.length && (l = le.data(r), 1 === r.nodeType && !le._data(r, "parsedAttrs"))) {
                    for (i = r.attributes; s < i.length; s++) o = i[s].name,
                    o.indexOf("data-") || (o = le.camelCase(o.slice(5)), a(r, o, l[o]));
                    le._data(r, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof e ? this.each(function() {
                le.data(this, e)
            }) : le.access(this,
            function(n) {
                return n === t ? r ? a(r, e, le.data(r, e)) : null: void this.each(function() {
                    le.data(this, e, n)
                })
            },
            null, n, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                le.removeData(this, e)
            })
        }
    }),
    le.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue",
            i = le._data(e, t),
            n && (!i || le.isArray(n) ? i = le._data(e, t, le.makeArray(n)) : i.push(n)),
            i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = le.queue(e, t),
            i = n.length,
            o = n.shift(),
            r = le._queueHooks(e, t),
            a = function() {
                le.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), i--),
            r.cur = o,
            o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return le._data(e, n) || le._data(e, n, {
                empty: le.Callbacks("once memory").add(function() {
                    le._removeData(e, t + "queue"),
                    le._removeData(e, n)
                })
            })
        }
    }),
    le.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--),
            arguments.length < i ? le.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = le.queue(this, e, n);
                le._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                le.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = le.fx ? le.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var i, o = 1,
            r = le.Deferred(),
            a = this,
            s = this.length,
            l = function() {--o || r.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(i = le._data(a[s], e + "queueHooks")) && i.empty && (o++, i.empty.add(l));
            return l(),
            r.promise(n)
        }
    });
    var xe, we, Ce = /[\t\r\n]/g,
    Te = /^(?:input|select|textarea|button|object)$/i,
    ke = /^(?:a|area)$/i,
    Se = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Ee = /^(?:checked|selected)$/i,
    Ae = le.support.getSetAttribute,
    De = le.support.input;
    le.fn.extend({
        attr: function(e, t) {
            return le.access(this, le.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                le.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return le.access(this, le.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = le.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(e) {}
            })
        },
        addClass: function(e) {
            var t, n, i, o, r, a = 0,
            s = this.length,
            l = "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ue) || []; a < s; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : " ")) {
                for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                n.className = le.trim(i)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, a = 0,
            s = this.length,
            l = 0 === arguments.length || "string" == typeof e && e;
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ue) || []; a < s; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : "")) {
                for (r = 0; o = t[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                n.className = e ? le.trim(i) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
            i = "boolean" == typeof t;
            return le.isFunction(e) ? this.each(function(n) {
                le(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) for (var o, r = 0,
                a = le(this), s = t, l = e.match(ue) || []; o = l[r++];) s = i ? s: !a.hasClass(o),
                a[s ? "addClass": "removeClass"](o);
                else n !== X && "boolean" !== n || (this.className && le._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": le._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            i = this.length; n < i; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ce, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, i, o, r = this[0];
            return arguments.length ? (o = le.isFunction(e), this.each(function(n) {
                var r, a = le(this);
                1 === this.nodeType && (r = o ? e.call(this, n, a.val()) : e, null == r ? r = "": "number" == typeof r ? r += "": le.isArray(r) && (r = le.map(r,
                function(e) {
                    return null == e ? "": e + ""
                })), (i = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, r, "value") !== t || (this.value = r))
            })) : r ? (i = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (n = i.get(r, "value")) !== t ? n: (n = r.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "": n)) : void 0
        }
    }),
    le.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return ! t || t.specified ? e.value: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options,
                    o = e.selectedIndex,
                    r = "select-one" === e.type || o < 0,
                    a = r ? null: [], s = r ? o + 1 : i.length, l = o < 0 ? s: r ? o: 0; l < s; l++) if (n = i[l], (n.selected || l === o) && (le.support.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                        if (t = le(n).val(), r) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    var n = le.makeArray(t);
                    return le(e).find("option").each(function() {
                        this.selected = le.inArray(le(this).val(), n) >= 0
                    }),
                    n.length || (e.selectedIndex = -1),
                    n
                }
            }
        },
        attr: function(e, n, i) {
            var o, r, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === X ? le.prop(e, n, i) : (r = 1 !== s || !le.isXMLDoc(e), r && (n = n.toLowerCase(), o = le.attrHooks[n] || (Se.test(n) ? we: xe)), i === t ? o && r && "get" in o && null !== (a = o.get(e, n)) ? a: (typeof e.getAttribute !== X && (a = e.getAttribute(n)), null == a ? t: a) : null !== i ? o && r && "set" in o && (a = o.set(e, i, n)) !== t ? a: (e.setAttribute(n, i + ""), i) : void le.removeAttr(e, n))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
            r = t && t.match(ue);
            if (r && 1 === e.nodeType) for (; n = r[o++];) i = le.propFix[n] || n,
            Se.test(n) ? !Ae && Ee.test(n) ? e[le.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : le.attr(e, n, ""),
            e.removeAttribute(Ae ? n: i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var o, r, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !le.isXMLDoc(e),
            a && (n = le.propFix[n] || n, r = le.propHooks[n]),
            i !== t ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o: e[n] = i: r && "get" in r && null !== (o = r.get(e, n)) ? o: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Te.test(e.nodeName) || ke.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }),
    we = {
        get: function(e, n) {
            var i = le.prop(e, n),
            o = "boolean" == typeof i && e.getAttribute(n),
            r = "boolean" == typeof i ? De && Ae ? null != o: Ee.test(n) ? e[le.camelCase("default-" + n)] : !!o: e.getAttributeNode(n);
            return r && r.value !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            return t === !1 ? le.removeAttr(e, n) : De && Ae || !Ee.test(n) ? e.setAttribute(!Ae && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    De && Ae || (le.attrHooks.value = {
        get: function(e, n) {
            var i = e.getAttributeNode(n);
            return le.nodeName(e, "input") ? e.defaultValue: i && i.specified ? i.value: t
        },
        set: function(e, t, n) {
            return le.nodeName(e, "input") ? void(e.defaultValue = t) : xe && xe.set(e, t, n)
        }
    }),
    Ae || (xe = le.valHooks.button = {
        get: function(e, n) {
            var i = e.getAttributeNode(n);
            return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value: i.specified) ? i.value: t
        },
        set: function(e, n, i) {
            var o = e.getAttributeNode(i);
            return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(i)),
            o.value = n += "",
            "value" === i || n === e.getAttribute(i) ? n: t
        }
    },
    le.attrHooks.contenteditable = {
        get: xe.get,
        set: function(e, t, n) {
            xe.set(e, "" !== t && t, n)
        }
    },
    le.each(["width", "height"],
    function(e, t) {
        le.attrHooks[t] = le.extend(le.attrHooks[t], {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"),
                n
            }
        })
    })),
    le.support.hrefNormalized || (le.each(["href", "src", "width", "height"],
    function(e, n) {
        le.attrHooks[n] = le.extend(le.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null == i ? t: i
            }
        })
    }), le.each(["href", "src"],
    function(e, t) {
        le.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    })),
    le.support.style || (le.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    })),
    le.support.enctype || (le.propFix.enctype = "encoding"),
    le.support.checkOn || le.each(["radio", "checkbox"],
    function() {
        le.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            }
        }
    }),
    le.each(["radio", "checkbox"],
    function() {
        le.valHooks[this] = le.extend(le.valHooks[this], {
            set: function(e, t) {
                if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) >= 0
            }
        })
    });
    var Ne = /^(?:input|select|textarea)$/i,
    Pe = /^key/,
    je = /^(?:mouse|contextmenu)|click/,
    Oe = /^(?:focusinfocus|focusoutblur)$/,
    Re = /^([^.]*)(?:\.(.+)|)$/;
    le.event = {
        global: {},
        add: function(e, n, i, o, r) {
            var a, s, l, c, u, d, f, p, h, g, m, v = le._data(e);
            if (v) {
                for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = le.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                    return typeof le === X || e && le.event.triggered === e.type ? t: le.event.dispatch.apply(d.elem, arguments)
                },
                d.elem = e), n = (n || "").match(ue) || [""], l = n.length; l--;) a = Re.exec(n[l]) || [],
                h = m = a[1],
                g = (a[2] || "").split(".").sort(),
                u = le.event.special[h] || {},
                h = (r ? u.delegateType: u.bindType) || h,
                u = le.event.special[h] || {},
                f = le.extend({
                    type: h,
                    origType: m,
                    data: o,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && le.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                },
                c),
                (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, u.setup && u.setup.call(e, o, g, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))),
                u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)),
                r ? p.splice(p.delegateCount++, 0, f) : p.push(f),
                le.event.global[h] = !0;
                e = null
            }
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, f, p, h, g, m = le.hasData(e) && le._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(ue) || [""], c = t.length; c--;) if (s = Re.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (d = le.event.special[p] || {},
                    p = (i ? d.delegateType: d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = f.length; r--;) a = f[r],
                    !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(r, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                    l && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || le.removeEvent(e, p, m.handle), delete u[p])
                } else for (p in u) le.event.remove(e, p + t[c], n, i, !0);
                le.isEmptyObject(u) && (delete m.handle, le._removeData(e, "events"))
            }
        },
        trigger: function(n, i, o, r) {
            var a, s, l, c, u, d, f, p = [o || Y],
            h = ae.call(n, "type") ? n.type: n,
            g = ae.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = d = o = o || Y, 3 !== o.nodeType && 8 !== o.nodeType && !Oe.test(h + le.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[le.expando] ? n: new le.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), i = null == i ? [n] : le.makeArray(i, [n]), u = le.event.special[h] || {},
            r || !u.trigger || u.trigger.apply(o, i) !== !1)) {
                if (!r && !u.noBubble && !le.isWindow(o)) {
                    for (c = u.delegateType || h, Oe.test(c + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l),
                    d = l;
                    d === (o.ownerDocument || Y) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (f = 0; (l = p[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? c: u.bindType || h,
                a = (le._data(l, "events") || {})[n.type] && le._data(l, "handle"),
                a && a.apply(l, i),
                (a = s && l[s]) && le.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
                if (n.type = h, !r && !n.isDefaultPrevented() && (!u._default || u._default.apply(o.ownerDocument, i) === !1) && ("click" !== h || !le.nodeName(o, "a")) && le.acceptData(o) && s && o[h] && !le.isWindow(o)) {
                    d = o[s],
                    d && (o[s] = null),
                    le.event.triggered = h;
                    try {
                        o[h]()
                    } catch(e) {}
                    le.event.triggered = t,
                    d && (o[s] = d)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = le.event.fix(e);
            var n, i, o, r, a, s = [],
            l = ie.call(arguments),
            c = (le._data(this, "events") || {})[e.type] || [],
            u = le.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = le.event.handlers.call(this, e, c), n = 0; (r = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, a = 0; (o = r.handlers[a++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, (i = ((le.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var i, o, r, a, s = [],
            l = n.delegateCount,
            c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                for (r = [], a = 0; a < l; a++) o = n[a],
                i = o.selector + " ",
                r[i] === t && (r[i] = o.needsContext ? le(i, this).index(c) >= 0 : le.find(i, this, null, [c]).length),
                r[i] && r.push(o);
                r.length && s.push({
                    elem: c,
                    handlers: r
                })
            }
            return l < n.length && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[le.expando]) return e;
            var t, n, i, o = e.type,
            r = e,
            a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = je.test(o) ? this.mouseHooks: Pe.test(o) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, e = new le.Event(r), t = i.length; t--;) n = i[t],
            e[n] = r[n];
            return e.target || (e.target = r.srcElement || Y),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            a.filter ? a.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, o, r, a = n.button,
                s = n.fromElement;
                return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || Y, r = o.documentElement, i = o.body, e.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement: s),
                e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    if (le.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                    !1
                }
            },
            focus: {
                trigger: function() {
                    if (this !== Y.activeElement && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Y.activeElement && this.blur) return this.blur(),
                    !1
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = le.extend(new le.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? le.event.trigger(o, null, t) : le.event.dispatch.call(t, o),
            o.isDefaultPrevented() && n.preventDefault()
        }
    },
    le.removeEvent = Y.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === X && (e[i] = null), e.detachEvent(i, n))
    },
    le.Event = function(e, t) {
        return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l: c) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), void(this[le.expando] = !0)) : new le.Event(e, t)
    },
    le.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l,
            this.stopPropagation()
        }
    },
    le.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        le.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                o = e.relatedTarget,
                r = e.handleObj;
                return o && (o === i || le.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    le.support.submitBubbles || (le.event.special.submit = {
        setup: function() {
            return ! le.nodeName(this, "form") && void le.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                i = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form: t;
                i && !le._data(i, "submitBubbles") && (le.event.add(i, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), le._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ! le.nodeName(this, "form") && void le.event.remove(this, "._submit")
        }
    }),
    le.support.changeBubbles || (le.event.special.change = {
        setup: function() {
            return Ne.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (le.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), le.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                le.event.simulate("change", this, e, !0)
            })), !1) : void le.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Ne.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                }), le._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return le.event.remove(this, "._change"),
            !Ne.test(this.nodeName)
        }
    }),
    le.support.focusinBubbles || le.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        i = function(e) {
            le.event.simulate(t, e.target, le.event.fix(e), !0)
        };
        le.event.special[t] = {
            setup: function() {
                0 == n++&&Y.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 == --n && Y.removeEventListener(e, i, !0)
            }
        }
    }),
    le.fn.extend({
        on: function(e, n, i, o, r) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (a in e) this.on(a, n, i, e[a], r);
                return this
            }
            if (null == i && null == o ? (o = n, i = n = t) : null == o && ("string" == typeof n ? (o = i, i = t) : (o = i, i = n, n = t)), o === !1) o = c;
            else if (!o) return this;
            return 1 === r && (s = o, o = function(e) {
                return le().off(e),
                s.apply(this, arguments)
            },
            o.guid = s.guid || (s.guid = le.guid++)),
            this.each(function() {
                le.event.add(this, e, o, i, n)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, n, i) {
            var o, r;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj,
            le(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace: o.origType, o.selector, o.handler),
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, n, e[r]);
                return this
            }
            return n !== !1 && "function" != typeof n || (i = n, n = t),
            i === !1 && (i = c),
            this.each(function() {
                le.event.remove(this, e, i, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                le.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return le.event.trigger(e, t, n, !0)
        }
    }),
    function(e, t) {
        function n(e) {
            return de.test(e + "")
        }
        function i() {
            var e, t = [];
            return e = function(n, i) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()],
                e[n] = i
            }
        }
        function o(e) {
            return e[I] = !0,
            e
        }
        function r(e) {
            var t = N.createElement("div");
            try {
                return e(t)
            } catch(e) {
                return ! 1
            } finally {
                t = null
            }
        }
        function a(e, t, n, i) {
            var o, r, a, s, l, d, f, p, h, g;
            if ((t ? t.ownerDocument || t: M) !== N && D(t), t = t || N, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (s = t.nodeType) && 9 !== s) return [];
            if (!j && !i) {
                if (o = fe.exec(e)) if (a = o[1]) {
                    if (9 === s) {
                        if (! (r = t.getElementById(a)) || !r.parentNode) return n;
                        if (r.id === a) return n.push(r),
                        n
                    } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && F(t, r) && r.id === a) return n.push(r),
                    n
                } else {
                    if (o[2]) return Q.apply(n, G.call(t.getElementsByTagName(e), 0)),
                    n;
                    if ((a = o[3]) && H.getByClassName && t.getElementsByClassName) return Q.apply(n, G.call(t.getElementsByClassName(a), 0)),
                    n
                }
                if (H.qsa && !O.test(e)) {
                    if (f = !0, p = I, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (d = c(e), (f = t.getAttribute("id")) ? p = f.replace(ge, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = d.length; l--;) d[l] = p + u(d[l]);
                        h = ue.test(e) && t.parentNode || t,
                        g = d.join(",")
                    }
                    if (g) try {
                        return Q.apply(n, G.call(h.querySelectorAll(g), 0)),
                        n
                    } catch(e) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return b(e.replace(ie, "$1"), t, n, i)
        }
        function s(e, t) {
            var n = t && e,
            i = n && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function l(e) {
            return o(function(t) {
                return t = +t,
                o(function(n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function c(e, t) {
            var n, i, o, r, s, l, c, u = B[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (s = e, l = [], c = C.preFilter; s;) {
                n && !(i = oe.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])),
                n = !1,
                (i = re.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(ie, " ")
                }), s = s.slice(n.length));
                for (r in C.filter) ! (i = ce[r].exec(s)) || c[r] && !(i = c[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length: s ? a.error(e) : B(e, l).slice(0)
        }
        function u(e) {
            for (var t = 0,
            n = e.length,
            i = ""; t < n; t++) i += e[t].value;
            return i
        }
        function d(e, t, n) {
            var i = t.dir,
            o = n && "parentNode" === i,
            r = W++;
            return t.first ?
            function(t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
            }: function(t, n, a) {
                var s, l, c, u = z + " " + r;
                if (a) {
                    for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, a)) return ! 0
                } else for (; t = t[i];) if (1 === t.nodeType || o) if (c = t[I] || (t[I] = {}), (l = c[i]) && l[0] === u) {
                    if ((s = l[1]) === !0 || s === w) return s === !0
                } else if (l = c[i] = [u], l[1] = e(t, n, a) || w, l[1] === !0) return ! 0
            }
        }
        function f(e) {
            return e.length > 1 ?
            function(t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return ! 1;
                return ! 0
            }: e[0]
        }
        function p(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(r = e[s]) && (n && !n(r, i, o) || (a.push(r), c && t.push(s)));
            return a
        }
        function h(e, t, n, i, r, a) {
            return i && !i[I] && (i = h(i)),
            r && !r[I] && (r = h(r, a)),
            o(function(o, a, s, l) {
                var c, u, d, f = [],
                h = [],
                g = a.length,
                m = o || v(t || "*", s.nodeType ? [s] : s, []),
                b = !e || !o && t ? m: p(m, f, e, s, l),
                y = n ? r || (o ? e: g || i) ? [] : a: b;
                if (n && n(b, y, s, l), i) for (c = p(y, h), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[h[u]] = !(b[h[u]] = d));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
                            r(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(d = y[u]) && (c = r ? J.call(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                    }
                } else y = p(y === a ? y.splice(g, y.length) : y),
                r ? r(null, a, y, l) : Q.apply(a, y)
            })
        }
        function g(e) {
            for (var t, n, i, o = e.length,
            r = C.relative[e[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = d(function(e) {
                return e === t
            },
            a, !0), c = d(function(e) {
                return J.call(t, e) > -1
            },
            a, !0), p = [function(e, n, i) {
                return ! r && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
            }]; s < o; s++) if (n = C.relative[e[s].type]) p = [d(f(p), n)];
            else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                    for (i = ++s; i < o && !C.relative[e[i].type]; i++);
                    return h(s > 1 && f(p), s > 1 && u(e.slice(0, s - 1)).replace(ie, "$1"), n, s < i && g(e.slice(s, i)), i < o && g(e = e.slice(i)), i < o && u(e))
                }
                p.push(n)
            }
            return f(p)
        }
        function m(e, t) {
            var n = 0,
            i = t.length > 0,
            r = e.length > 0,
            s = function(o, s, l, c, u) {
                var d, f, h, g = [],
                m = 0,
                v = "0",
                b = o && [],
                y = null != u,
                x = A,
                T = o || r && C.find.TAG("*", u && s.parentNode || s),
                k = z += null == x ? 1 : Math.random() || .1;
                for (y && (A = s !== N && s, w = n); null != (d = T[v]); v++) {
                    if (r && d) {
                        for (f = 0; h = e[f++];) if (h(d, s, l)) {
                            c.push(d);
                            break
                        }
                        y && (z = k, w = ++n)
                    }
                    i && ((d = !h && d) && m--, o && b.push(d))
                }
                if (m += v, i && v !== m) {
                    for (f = 0; h = t[f++];) h(b, g, s, l);
                    if (o) {
                        if (m > 0) for (; v--;) b[v] || g[v] || (g[v] = Y.call(c));
                        g = p(g)
                    }
                    Q.apply(c, g),
                    y && !o && g.length > 0 && m + t.length > 1 && a.uniqueSort(c)
                }
                return y && (z = k, A = x),
                b
            };
            return i ? o(s) : s
        }
        function v(e, t, n) {
            for (var i = 0,
            o = t.length; i < o; i++) a(e, t[i], n);
            return n
        }
        function b(e, t, n, i) {
            var o, r, a, s, l, d = c(e);
            if (!i && 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === t.nodeType && !j && C.relative[r[1].type]) {
                    if (! (t = C.find.ID(a.matches[0].replace(me, ve), t)[0])) return n;
                    e = e.slice(r.shift().value.length)
                }
                for (o = ce.needsContext.test(e) ? 0 : r.length; o--&&(a = r[o], !C.relative[s = a.type]);) if ((l = C.find[s]) && (i = l(a.matches[0].replace(me, ve), ue.test(r[0].type) && t.parentNode || t))) {
                    if (r.splice(o, 1), !(e = i.length && u(r))) return Q.apply(n, G.call(i, 0)),
                    n;
                    break
                }
            }
            return S(e, d)(i, t, j, n, ue.test(e)),
            n
        }
        function y() {}
        var x, w, C, T, k, S, E, A, D, N, P, j, O, R, q, F, L, I = "sizzle" + -new Date,
        M = e.document,
        H = {},
        z = 0,
        W = 0,
        _ = i(),
        B = i(),
        V = i(),
        $ = typeof t,
        U = 1 << 31,
        X = [],
        Y = X.pop,
        Q = X.push,
        G = X.slice,
        J = X.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; t < n; t++) if (this[t] === e) return t;
            return - 1
        },
        K = "[\\x20\\t\\r\\n\\f]",
        Z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ee = Z.replace("w", "w#"),
        te = "\\[" + K + "*(" + Z + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ee + ")|)|)" + K + "*\\]",
        ne = ":(" + Z + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + te.replace(3, 8) + ")*)|.*)\\)|)",
        ie = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        oe = new RegExp("^" + K + "*," + K + "*"),
        re = new RegExp("^" + K + "*([\\x20\\t\\r\\n\\f>+~])" + K + "*"),
        ae = new RegExp(ne),
        se = new RegExp("^" + ee + "$"),
        ce = {
            ID: new RegExp("^#(" + Z + ")"),
            CLASS: new RegExp("^\\.(" + Z + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + Z + ")['\"]?\\]"),
            TAG: new RegExp("^(" + Z.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + te),
            PSEUDO: new RegExp("^" + ne),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        },
        ue = /[\x20\t\r\n\f]*[+~]/,
        de = /^[^{]+\{\s*\[native code/,
        fe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        pe = /^(?:input|select|textarea|button)$/i,
        he = /^h\d$/i,
        ge = /'|\\/g,
        me = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        ve = function(e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t: n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            G.call(M.documentElement.childNodes, 0)[0].nodeType
        } catch(e) {
            G = function(e) {
                for (var t, n = []; t = this[e++];) n.push(t);
                return n
            }
        }
        k = a.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        D = a.setDocument = function(e) {
            var i = e ? e.ownerDocument || e: M;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, P = i.documentElement, j = k(i), H.tagNameNoComments = r(function(e) {
                return e.appendChild(i.createComment("")),
                !e.getElementsByTagName("*").length
            }), H.attributes = r(function(e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), H.getByClassName = r(function(e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length)
            }), H.getByName = r(function(e) {
                e.id = I + 0,
                e.innerHTML = "<a name='" + I + "'></a><div name='" + I + "'></div>",
                P.insertBefore(e, P.firstChild);
                var t = i.getElementsByName && i.getElementsByName(I).length === 2 + i.getElementsByName(I + 0).length;
                return H.getIdNotName = !i.getElementById(I),
                P.removeChild(e),
                t
            }), C.attrHandle = r(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                e.firstChild && typeof e.firstChild.getAttribute !== $ && "#" === e.firstChild.getAttribute("href")
            }) ? {}: {
                href: function(e) {
                    return e.getAttribute("href", 2)
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            H.getIdNotName ? (C.find.ID = function(e, t) {
                if (typeof t.getElementById !== $ && !j) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(me, ve);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function(e, n) {
                if (typeof n.getElementById !== $ && !j) {
                    var i = n.getElementById(e);
                    return i ? i.id === e || typeof i.getAttributeNode !== $ && i.getAttributeNode("id").value === e ? [i] : t: []
                }
            },
            C.filter.ID = function(e) {
                var t = e.replace(me, ve);
                return function(e) {
                    var n = typeof e.getAttributeNode !== $ && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = H.tagNameNoComments ?
            function(e, t) {
                if (typeof t.getElementsByTagName !== $) return t.getElementsByTagName(e)
            }: function(e, t) {
                var n, i = [],
                o = 0,
                r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            },
            C.find.NAME = H.getByName &&
            function(e, t) {
                if (typeof t.getElementsByName !== $) return t.getElementsByName(name)
            },
            C.find.CLASS = H.getByClassName &&
            function(e, t) {
                if (typeof t.getElementsByClassName !== $ && !j) return t.getElementsByClassName(e)
            },
            R = [], O = [":focus"], (H.qsa = n(i.querySelectorAll)) && (r(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || O.push("\\[" + K + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                e.querySelectorAll(":checked").length || O.push(":checked")
            }), r(function(e) {
                e.innerHTML = "<input type='hidden' i=''/>",
                e.querySelectorAll("[i^='']").length && O.push("[*^$]=" + K + "*(?:\"\"|'')"),
                e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                O.push(",.*:")
            })), (H.matchesSelector = n(q = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                H.disconnectedMatch = q.call(e, "div"),
                q.call(e, "[s!='']:x"),
                R.push("!=", ne)
            }), O = new RegExp(O.join("|")), R = new RegExp(R.join("|")), F = n(P.contains) || P.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            L = P.compareDocumentPosition ?
            function(e, t) {
                var n;
                return e === t ? (E = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || F(M, e) ? -1 : t === i || F(M, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, t) {
                var n, o = 0,
                r = e.parentNode,
                a = t.parentNode,
                l = [e],
                c = [t];
                if (e === t) return E = !0,
                0;
                if (!r || !a) return e === i ? -1 : t === i ? 1 : r ? -1 : a ? 1 : 0;
                if (r === a) return s(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? s(l[o], c[o]) : l[o] === M ? -1 : c[o] === M ? 1 : 0
            },
            E = !1, [0, 0].sort(L), H.detectDuplicates = E, N) : N
        },
        a.matches = function(e, t) {
            return a(e, null, null, t)
        },
        a.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== N && D(e), t = t.replace(/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, "='$1']"), H.matchesSelector && !j && (!R || !R.test(t)) && !O.test(t)) try {
                var n = q.call(e, t);
                if (n || H.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch(e) {}
            return a(t, N, null, [e]).length > 0
        },
        a.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && D(e),
            F(e, t)
        },
        a.attr = function(e, t) {
            var n;
            return (e.ownerDocument || e) !== N && D(e),
            j || (t = t.toLowerCase()),
            (n = C.attrHandle[t]) ? n(e) : j || H.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t: n && n.specified ? n.value: null
        },
        a.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        a.uniqueSort = function(e) {
            var t, n = [],
            i = 1,
            o = 0;
            if (E = !H.detectDuplicates, e.sort(L), E) {
                for (; t = e[i]; i++) t === e[i - 1] && (o = n.push(i));
                for (; o--;) e.splice(n[o], 1)
            }
            return e
        },
        T = a.getText = function(e) {
            var t, n = "",
            i = 0,
            o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i]; i++) n += T(t);
            return n
        },
        C = a.selectors = {
            cacheLength: 50,
            createPseudo: o,
            match: ce,
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(me, ve),
                    e[3] = (e[4] || e[5] || "").replace(me, ve),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return ce.CHILD.test(e[0]) ? null: (e[4] ? e[2] = e[4] : n && ae.test(n) && (t = c(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: (e = e.replace(me, ve).toLowerCase(),
                    function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + K + ")" + e + "(" + K + "|$)")) && _(e,
                    function(e) {
                        return t.test(e.className || typeof e.getAttribute !== $ && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var o = a.attr(i, e);
                        return null == o ? "!=" === t: !t || (o += "", "=" === t ? o === n: "!=" === t ? o !== n: "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice( - n.length) === n: "~=" === t ? (" " + o + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === i && 0 === o ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var c, u, d, f, p, h, g = r !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        b = !l && !s;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && b) {
                                for (u = m[I] || (m[I] = {}), c = u[e] || [], p = c[0] === z && c[1], f = c[0] === z && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                                    u[e] = [z, p, f];
                                    break
                                }
                            } else if (b && (c = (t[I] || (t[I] = {}))[e]) && c[0] === z) f = c[1];
                            else for (; (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++f || (b && ((d[I] || (d[I] = {}))[e] = [z, f]), d !== t)););
                            return (f -= o) === i || f % i == 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return i[I] ? i(t) : i.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                        for (var o, r = i(e, t), a = r.length; a--;) o = J.call(e, r[a]),
                        e[o] = !(n[o] = r[a])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: o(function(e) {
                    var t = [],
                    n = [],
                    i = S(e.replace(ie, "$1"));
                    return i[I] ? o(function(e, t, n, o) {
                        for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, o, r) {
                        return t[0] = e,
                        i(t, null, r, n),
                        !n.pop()
                    }
                }),
                has: o(function(e) {
                    return function(t) {
                        return a(e, t).length > 0
                    }
                }),
                contains: o(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: o(function(e) {
                    return se.test(e || "") || a.error("unsupported lang: " + e),
                    e = e.replace(me, ve).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = j ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === P
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! C.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t: n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t: n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t: n; ++i < t;) e.push(i);
                    return e
                })
            }
        };
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[x] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        } (x);
        for (x in {
            submit: !0,
            reset: !0
        }) C.pseudos[x] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        } (x);
        S = a.compile = function(e, t) {
            var n, i = [],
            o = [],
            r = V[e + " "];
            if (!r) {
                for (t || (t = c(e)), n = t.length; n--;) r = g(t[n]),
                r[I] ? i.push(r) : o.push(r);
                r = V(e, m(o, i))
            }
            return r
        },
        C.pseudos.nth = C.pseudos.eq,
        C.filters = y.prototype = C.pseudos,
        C.setFilters = new y,
        D(),
        a.attr = le.attr,
        le.find = a,
        le.expr = a.selectors,
        le.expr[":"] = le.expr.pseudos,
        le.unique = a.uniqueSort,
        le.text = a.getText,
        le.isXMLDoc = a.isXML,
        le.contains = a.contains
    } (e);
    var qe = /Until$/,
    Fe = /^(?:parents|prev(?:Until|All))/,
    Le = /^.[^:#\[\.,]*$/,
    Ie = le.expr.match.needsContext,
    Me = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    le.fn.extend({
        find: function(e) {
            var t, n, i, o = this.length;
            if ("string" != typeof e) return i = this,
            this.pushStack(le(e).filter(function() {
                for (t = 0; t < o; t++) if (le.contains(i[t], this)) return ! 0
            }));
            for (n = [], t = 0; t < o; t++) le.find(e, this[t], n);
            return n = this.pushStack(o > 1 ? le.unique(n) : n),
            n.selector = (this.selector ? this.selector + " ": "") + e,
            n
        },
        has: function(e) {
            var t, n = le(e, this),
            i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++) if (le.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(d(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(d(this, e, !0))
        },
        is: function(e) {
            return !! e && ("string" == typeof e ? Ie.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, i = 0,
            o = this.length,
            r = [], a = Ie.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i < o; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : le.find.matchesSelector(n, e)) {
                    r.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(r.length > 1 ? le.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
            i = le.merge(this.get(), n);
            return this.pushStack(le.unique(i))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    le.fn.andSelf = le.fn.addBack,
    le.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return le.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return le.dir(e, "parentNode", n)
        },
        next: function(e) {
            return u(e, "nextSibling")
        },
        prev: function(e) {
            return u(e, "previousSibling")
        },
        nextAll: function(e) {
            return le.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return le.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return le.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return le.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return le.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return le.sibling(e.firstChild)
        },
        contents: function(e) {
            return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: le.merge([], e.childNodes)
        }
    },
    function(e, t) {
        le.fn[e] = function(n, i) {
            var o = le.map(this, t, n);
            return qe.test(e) || (i = n),
            i && "string" == typeof i && (o = le.filter(i, o)),
            o = this.length > 1 && !Me[e] ? le.unique(o) : o,
            this.length > 1 && Fe.test(e) && (o = o.reverse()),
            this.pushStack(o)
        }
    }),
    le.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"),
            1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var o = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !le(r).is(i));) 1 === r.nodeType && o.push(r),
            r = r[n];
            return o
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var He = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ze = new RegExp("<(?:" + He + ")[\\s/>]", "i"),
    We = /^\s+/,
    _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Be = /<([\w:]+)/,
    Ve = /<tbody/i,
    $e = /<|&#?\w+;/,
    Ue = /<(?:script|style|link)/i,
    Xe = /^(?:checkbox|radio)$/i,
    Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Qe = /^$|\/(?:java|ecma)script/i,
    Ge = /^true\/(.*)/,
    Je = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Ke = f(Y),
    Ze = Ke.appendChild(Y.createElement("div"));
    Je.optgroup = Je.option,
    Je.tbody = Je.tfoot = Je.colgroup = Je.caption = Je.thead,
    Je.th = Je.td,
    le.fn.extend({
        text: function(e) {
            return le.access(this,
            function(e) {
                return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            },
            null, e, arguments.length)
        },
        wrapAll: function(e) {
            if (le.isFunction(e)) return this.each(function(t) {
                le(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return le.isFunction(e) ? this.each(function(t) {
                le(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = le(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = le.isFunction(e);
            return this.each(function(n) {
                le(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)(!e || le.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || le.cleanData(y(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && m(y(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && le.cleanData(y(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && le.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return le.clone(this, e, t)
            })
        },
        html: function(e) {
            return le.access(this,
            function(e) {
                var n = this[0] || {},
                i = 0,
                o = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(/ jQuery\d+="(?:null|\d+)"/g, "") : t;
                if ("string" == typeof e && !Ue.test(e) && (le.support.htmlSerialize || !ze.test(e)) && (le.support.leadingWhitespace || !We.test(e)) && !Je[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(_e, "<$1></$2>");
                    try {
                        for (; i < o; i++) n = this[i] || {},
                        1 === n.nodeType && (le.cleanData(y(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(e) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function(e) {
            return le.isFunction(e) || "string" == typeof e || (e = le(e).not(this).detach()),
            this.domManip([e], !0,
            function(e) {
                var t = this.nextSibling,
                n = this.parentNode;
                n && (le(this).remove(), n.insertBefore(e, t))
            })
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            e = te.apply([], e);
            var o, r, a, s, l, c, u = 0,
            d = this.length,
            f = this,
            m = d - 1,
            v = e[0],
            b = le.isFunction(v);
            if (b || !(d <= 1 || "string" != typeof v || le.support.checkClone) && Ye.test(v)) return this.each(function(o) {
                var r = f.eq(o);
                b && (e[0] = v.call(this, o, n ? r.html() : t)),
                r.domManip(e, n, i)
            });
            if (d && (c = le.buildFragment(e, this[0].ownerDocument, !1, this), o = c.firstChild, 1 === c.childNodes.length && (c = o), o)) {
                for (n = n && le.nodeName(o, "tr"), s = le.map(y(c, "script"), h), a = s.length; u < d; u++) r = c,
                u !== m && (r = le.clone(r, !0, !0), a && le.merge(s, y(r, "script"))),
                i.call(n && le.nodeName(this[u], "table") ? p(this[u], "tbody") : this[u], r, u);
                if (a) for (l = s[s.length - 1].ownerDocument, le.map(s, g), u = 0; u < a; u++) r = s[u],
                Qe.test(r.type || "") && !le._data(r, "globalEval") && le.contains(l, r) && (r.src ? le.ajax({
                    url: r.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0
                }) : le.globalEval((r.text || r.textContent || r.innerHTML || "").replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")));
                c = o = null
            }
            return this
        }
    }),
    le.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        le.fn[e] = function(e) {
            for (var n, i = 0,
            o = [], r = le(e), a = r.length - 1; i <= a; i++) n = i === a ? this: this.clone(!0),
            le(r[i])[t](n),
            ne.apply(o, n.get());
            return this.pushStack(o)
        }
    }),
    le.extend({
        clone: function(e, t, n) {
            var i, o, r, a, s, l = le.contains(e.ownerDocument, e);
            if (le.support.html5Clone || le.isXMLDoc(e) || !ze.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ze.innerHTML = e.outerHTML, Ze.removeChild(r = Ze.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e))) for (i = y(r), s = y(e), a = 0; null != (o = s[a]); ++a) i[a] && b(o, i[a]);
            if (t) if (n) for (s = s || y(e), i = i || y(r), a = 0; null != (o = s[a]); a++) v(o, i[a]);
            else v(e, r);
            return i = y(r, "script"),
            i.length > 0 && m(i, !l && y(e, "script")),
            i = s = o = null,
            r
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, a, s, l, c, u, d = e.length,
            p = f(t), h = [], g = 0; g < d; g++) if ((r = e[g]) || 0 === r) if ("object" === le.type(r)) le.merge(h, r.nodeType ? [r] : r);
            else if ($e.test(r)) {
                for (s = s || p.appendChild(t.createElement("div")), l = (Be.exec(r) || ["", ""])[1].toLowerCase(), u = Je[l] || Je._default, s.innerHTML = u[1] + r.replace(_e, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                if (!le.support.leadingWhitespace && We.test(r) && h.push(t.createTextNode(We.exec(r)[0])), !le.support.tbody) for (r = "table" !== l || Ve.test(r) ? "<table>" !== u[1] || Ve.test(r) ? 0 : s: s.firstChild, o = r && r.childNodes.length; o--;) le.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (le.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = p.lastChild
            } else h.push(t.createTextNode(r));
            for (s && p.removeChild(s), le.support.appendChecked || le.grep(y(h, "input"), x), g = 0; r = h[g++];) if ((!i || le.inArray(r, i) === -1) && (a = le.contains(r.ownerDocument, r), s = y(p.appendChild(r), "script"), a && m(s), n)) for (o = 0; r = s[o++];) Qe.test(r.type || "") && n.push(r);
            return s = null,
            p
        },
        cleanData: function(e, t) {
            for (var n, i, o, r, a = 0,
            s = le.expando,
            l = le.cache,
            c = le.support.deleteExpando,
            u = le.event.special; null != (n = e[a]); a++) if ((t || le.acceptData(n)) && (o = n[s], r = o && l[o])) {
                if (r.events) for (i in r.events) u[i] ? le.event.remove(n, i) : le.removeEvent(n, i, r.handle);
                l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s) : n[s] = null, Z.push(o))
            }
        }
    });
    var et, tt, nt, it = /alpha\([^)]*\)/i,
    ot = /opacity\s*=\s*([^)]*)/,
    rt = /^(top|right|bottom|left)$/,
    at = /^(none|table(?!-c[ea]).+)/,
    st = /^margin/,
    lt = new RegExp("^(" + ce + ")(.*)$", "i"),
    ct = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
    ut = new RegExp("^([+-])=(" + ce + ")", "i"),
    dt = {
        BODY: "block"
    },
    ft = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    pt = {
        letterSpacing: 0,
        fontWeight: 400
    },
    ht = ["Top", "Right", "Bottom", "Left"],
    gt = ["Webkit", "O", "Moz", "ms"];
    le.fn.extend({
        css: function(e, n) {
            return le.access(this,
            function(e, n, i) {
                var o, r, a = {},
                s = 0;
                if (le.isArray(n)) {
                    for (r = tt(e), o = n.length; s < o; s++) a[n[s]] = le.css(e, n[s], !1, r);
                    return a
                }
                return i !== t ? le.style(e, n, i) : le.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() { (t ? e: C(this)) ? le(this).show() : le(this).hide()
            })
        }
    }),
    le.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nt(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: le.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, i, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, l = le.camelCase(n),
                c = e.style;
                if (n = le.cssProps[l] || (le.cssProps[l] = w(c, l)), s = le.cssHooks[n] || le.cssHooks[l], i === t) return s && "get" in s && (r = s.get(e, !1, o)) !== t ? r: c[n];
                if (a = typeof i, "string" === a && (r = ut.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(le.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || le.cssNumber[l] || (i += "px"), le.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(e, i, o)) === t))) try {
                    c[n] = i
                } catch(e) {}
            }
        },
        css: function(e, n, i, o) {
            var r, a, s, l = le.camelCase(n);
            return n = le.cssProps[l] || (le.cssProps[l] = w(e.style, l)),
            s = le.cssHooks[n] || le.cssHooks[l],
            s && "get" in s && (a = s.get(e, !0, i)),
            a === t && (a = nt(e, n, o)),
            "normal" === a && n in pt && (a = pt[n]),
            "" === i || i ? (r = parseFloat(a), i === !0 || le.isNumeric(r) ? r || 0 : a) : a
        },
        swap: function(e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r],
            e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
        }
    }),
    e.getComputedStyle ? (tt = function(t) {
        return e.getComputedStyle(t, null)
    },
    nt = function(e, n, i) {
        var o, r, a, s = i || tt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        c = e.style;
        return s && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, n)), ct.test(l) && st.test(n) && (o = c.width, r = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = o, c.minWidth = r, c.maxWidth = a)),
        l
    }) : Y.documentElement.currentStyle && (tt = function(e) {
        return e.currentStyle
    },
    nt = function(e, n, i) {
        var o, r, a, s = i || tt(e),
        l = s ? s[n] : t,
        c = e.style;
        return null == l && c && c[n] && (l = c[n]),
        ct.test(l) && !rt.test(n) && (o = c.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em": l, l = c.pixelLeft + "px", c.left = o, a && (r.left = a)),
        "" === l ? "auto": l
    }),
    le.each(["height", "width"],
    function(e, t) {
        le.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return 0 === e.offsetWidth && at.test(le.css(e, "display")) ? le.swap(e, ft,
                function() {
                    return E(e, t, i)
                }) : E(e, t, i)
            },
            set: function(e, n, i) {
                var o = i && tt(e);
                return k(e, n, i ? S(e, t, i, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    le.support.opacity || (le.cssHooks.opacity = {
        get: function(e, t) {
            return ot.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            i = e.currentStyle,
            o = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            r = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === le.trim(r.replace(it, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = it.test(r) ? r.replace(it, o) : r + " " + o)
        }
    }),
    le(function() {
        le.support.reliableMarginRight || (le.cssHooks.marginRight = {
            get: function(e, t) {
                if (t) return le.swap(e, {
                    display: "inline-block"
                },
                nt, [e, "marginRight"])
            }
        }),
        !le.support.pixelPosition && le.fn.position && le.each(["top", "left"],
        function(e, t) {
            le.cssHooks[t] = {
                get: function(e, n) {
                    if (n) return n = nt(e, t),
                    ct.test(n) ? le(e).position()[t] + "px": n
                }
            }
        })
    }),
    le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
    },
    le.expr.filters.visible = function(e) {
        return ! le.expr.filters.hidden(e)
    }),
    le.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        le.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0,
                o = {},
                r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ht[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        st.test(e) || (le.cssHooks[e + t].set = k)
    });
    var mt = /\[\]$/,
    vt = /^(?:submit|button|image|reset|file)$/i,
    bt = /^(?:input|select|textarea|keygen)/i;
    le.fn.extend({
        serialize: function() {
            return le.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = le.prop(this, "elements");
                return e ? le.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !le(this).is(":disabled") && bt.test(this.nodeName) && !vt.test(e) && (this.checked || !Xe.test(e))
            }).map(function(e, t) {
                var n = le(this).val();
                return null == n ? null: le.isArray(n) ? le.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }),
    le.param = function(e, n) {
        var i, o = [],
        r = function(e, t) {
            t = le.isFunction(t) ? t() : null == t ? "": t,
            o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e,
        function() {
            r(this.name, this.value)
        });
        else for (i in e) N(i, e[i], n, r);
        return o.join("&").replace(/%20/g, "+")
    },
    le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        le.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    le.fn.hover = function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var yt, xt, wt = le.now(),
    Ct = /\?/,
    Tt = /([?&])_=[^&]*/,
    kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    St = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Et = /^(?:GET|HEAD)$/,
    At = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    Dt = le.fn.load,
    Nt = {},
    Pt = {},
    jt = "*/".concat("*");
    try {
        xt = Q.href
    } catch(e) {
        xt = Y.createElement("a"),
        xt.href = "",
        xt = xt.href
    }
    yt = At.exec(xt.toLowerCase()) || [],
    le.fn.load = function(e, n, i) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
        var o, r, a, s = this,
        l = e.indexOf(" ");
        return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)),
        le.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && le.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            r = arguments,
            s.html(o ? le("<div>").append(le.parseHTML(e)).find(o) : e)
        }).complete(i &&
        function(e, t) {
            s.each(i, r || [e.responseText, t, e])
        }),
        this
    },
    le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        le.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    le.each(["get", "post"],
    function(e, n) {
        le[n] = function(e, i, o, r) {
            return le.isFunction(i) && (r = r || o, o = i, i = t),
            le.ajax({
                url: e,
                type: n,
                dataType: r,
                data: i,
                success: o
            })
        }
    }),
    le.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt,
            type: "GET",
            isLocal: St.test(yt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": le.parseJSON,
                "text xml": le.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? O(O(e, le.ajaxSettings), t) : O(le.ajaxSettings, e)
        },
        ajaxPrefilter: P(Nt),
        ajaxTransport: P(Pt),
        ajax: function(e, n) {
            function i(e, n, i, o) {
                var r, d, b, y, w, T = n;
                2 !== x && (x = 2, l && clearTimeout(l), u = t, s = o || "", C.readyState = e > 0 ? 4 : 0, i && (y = R(f, C, i)), e >= 200 && e < 300 || 304 === e ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (le.lastModified[a] = w), (w = C.getResponseHeader("etag")) && (le.etag[a] = w)), 204 === e ? (r = !0, T = "nocontent") : 304 === e ? (r = !0, T = "notmodified") : (r = q(f, y), T = r.state, d = r.data, b = r.error, r = !b)) : (b = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || T) + "", r ? g.resolveWith(p, [d, T, C]) : g.rejectWith(p, [C, T, b]), C.statusCode(v), v = t, c && h.trigger(r ? "ajaxSuccess": "ajaxError", [C, f, r ? d: b]), m.fireWith(p, [C, T]), c && (h.trigger("ajaxComplete", [C, f]), --le.active || le.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var o, r, a, s, l, c, u, d, f = le.ajaxSetup({},
            n),
            p = f.context || f,
            h = f.context && (p.nodeType || p.jquery) ? le(p) : le.event,
            g = le.Deferred(),
            m = le.Callbacks("once memory"),
            v = f.statusCode || {},
            b = {},
            y = {},
            x = 0,
            w = "canceled",
            C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!d) for (d = {}; t = kt.exec(s);) d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e, b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (x < 2) for (t in e) v[t] = [v[t], e[t]];
                    else C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    i(0, t),
                    this
                }
            };
            if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || xt) + "").replace(/#.*$/, "").replace(/^\/\//, yt[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = le.trim(f.dataType || "*").toLowerCase().match(ue) || [""], null == f.crossDomain && (o = At.exec(f.url.toLowerCase()), f.crossDomain = !(!o || o[1] === yt[1] && o[2] === yt[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == (yt[3] || ("http:" === yt[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = le.param(f.data, f.traditional)), j(Nt, f, n, C), 2 === x) return C;
            c = f.global,
            c && 0 == le.active++&&le.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !Et.test(f.type),
            a = f.url,
            f.hasContent || (f.data && (a = f.url += (Ct.test(a) ? "&": "?") + f.data, delete f.data), f.cache === !1 && (f.url = Tt.test(a) ? a.replace(Tt, "$1_=" + wt++) : a + (Ct.test(a) ? "&": "?") + "_=" + wt++)),
            f.ifModified && (le.lastModified[a] && C.setRequestHeader("If-Modified-Since", le.lastModified[a]), le.etag[a] && C.setRequestHeader("If-None-Match", le.etag[a])),
            (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", f.contentType),
            C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + jt + "; q=0.01": "") : f.accepts["*"]);
            for (r in f.headers) C.setRequestHeader(r, f.headers[r]);
            if (f.beforeSend && (f.beforeSend.call(p, C, f) === !1 || 2 === x)) return C.abort();
            w = "abort";
            for (r in {
                success: 1,
                error: 1,
                complete: 1
            }) C[r](f[r]);
            if (u = j(Pt, f, n, C)) {
                C.readyState = 1,
                c && h.trigger("ajaxSend", [C, f]),
                f.async && f.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout")
                },
                f.timeout));
                try {
                    x = 1,
                    u.send(b, i)
                } catch(e) {
                    if (! (x < 2)) throw e;
                    i( - 1, e)
                }
            } else i( - 1, "No Transport");
            return C
        },
        getScript: function(e, n) {
            return le.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return le.get(e, t, n, "json")
        }
    }),
    le.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return le.globalEval(e),
                e
            }
        }
    }),
    le.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    le.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, i = Y.head || le("head")[0] || Y.documentElement;
            return {
                send: function(t, o) {
                    n = Y.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
                    },
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Ot = [],
    Rt = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ot.pop() || le.expando + "_" + wt++;
            return this[e] = !0,
            e
        }
    }),
    le.ajaxPrefilter("json jsonp",
    function(n, i, o) {
        var r, a, s, l = n.jsonp !== !1 && (Rt.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(n.data) && "data");
        if (l || "jsonp" === n.dataTypes[0]) return r = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(Rt, "$1" + r) : n.jsonp !== !1 && (n.url += (Ct.test(n.url) ? "&": "?") + n.jsonp + "=" + r),
        n.converters["script json"] = function() {
            return s || le.error(r + " was not called"),
            s[0]
        },
        n.dataTypes[0] = "json",
        a = e[r],
        e[r] = function() {
            s = arguments
        },
        o.always(function() {
            e[r] = a,
            n[r] && (n.jsonpCallback = i.jsonpCallback, Ot.push(r)),
            s && le.isFunction(a) && a(s[0]),
            s = a = t
        }),
        "script"
    });
    var qt, Ft, Lt = 0,
    It = e.ActiveXObject &&
    function() {
        var e;
        for (e in qt) qt[e](t, !0)
    };
    le.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && F() || L()
    }: F,
    Ft = le.ajaxSettings.xhr(),
    le.support.cors = !!Ft && "withCredentials" in Ft,
    (Ft = le.support.ajax = !!Ft) && le.ajaxTransport(function(n) {
        if (!n.crossDomain || le.support.cors) {
            var i;
            return {
                send: function(o, r) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o) l.setRequestHeader(s, o[s])
                    } catch(e) {}
                    l.send(n.hasContent && n.data || null),
                    i = function(e, o) {
                        var s, c, u, d;
                        try {
                            if (i && (o || 4 === l.readyState)) if (i = t, a && (l.onreadystatechange = le.noop, It && delete qt[a]), o) 4 !== l.readyState && l.abort();
                            else {
                                d = {},
                                s = l.status,
                                c = l.getAllResponseHeaders(),
                                "string" == typeof l.responseText && (d.text = l.responseText);
                                try {
                                    u = l.statusText
                                } catch(e) {
                                    u = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                            }
                        } catch(e) {
                            o || r( - 1, e)
                        }
                        d && r(s, u, d, c)
                    },
                    n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Lt, It && (qt || (qt = {},
                    le(e).unload(It)), qt[a] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(t, !0)
                }
            }
        }
    });
    var Mt, Ht, zt = /^(?:toggle|show|hide)$/,
    Wt = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
    _t = /queueHooks$/,
    Bt = [W],
    Vt = {
        "*": [function(e, t) {
            var n, i, o = this.createTween(e, t),
            r = Wt.exec(t),
            a = o.cur(),
            s = +a || 0,
            l = 1,
            c = 20;
            if (r) {
                if (n = +r[2], "px" !== (i = r[3] || (le.cssNumber[e] ? "": "px")) && s) {
                    s = le.css(o.elem, e, !0) || n || 1;
                    do {
                        l = l || ".5", s /= l, le.style(o.elem, e, s + i)
                    } while ( l !== ( l = o . cur () / a) && 1 !== l && --c)
                }
                o.unit = i,
                o.start = s,
                o.end = r[1] ? s + (r[1] + 1) * n: n
            }
            return o
        }]
    };
    le.Animation = le.extend(H, {
        tweener: function(e, t) {
            le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0,
            o = e.length; i < o; i++) n = e[i],
            Vt[n] = Vt[n] || [],
            Vt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Bt.unshift(e) : Bt.push(e)
        }
    }),
    le.Tween = _,
    _.prototype = {
        constructor: _,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (le.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = _.propHooks[this.prop];
            return e && e.get ? e.get(this) : _.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _.propHooks[this.prop];
            return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : _.propHooks._default.set(this),
            this
        }
    },
    _.prototype.init.prototype = _.prototype,
    _.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    _.propHooks.scrollTop = _.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    le.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = le.fn[t];
        le.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, i, o)
        }
    }),
    le.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = le.isEmptyObject(e),
            r = le.speed(t, n, i),
            a = function() {
                var t = H(this, le.extend({},
                e), r);
                a.finish = function() {
                    t.stop(!0)
                },
                (o || le._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, n, i) {
            var o = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                r = le.timers,
                a = le._data(this);
                if (n) a[n] && a[n].stop && o(a[n]);
                else for (n in a) a[n] && a[n].stop && _t.test(n) && o(a[n]);
                for (n = r.length; n--;) r[n].elem !== this || null != e && r[n].queue !== e || (r[n].anim.stop(i), t = !1, r.splice(n, 1)); ! t && i || le.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = le._data(this),
                i = n[e + "queue"],
                o = n[e + "queueHooks"],
                r = le.timers,
                a = i ? i.length: 0;
                for (n.finish = !0, le.queue(this, e, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    le.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        le.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    le.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? le.extend({},
        e) : {
            complete: n || !n && t || le.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !le.isFunction(t) && t
        };
        return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default,
        null != i.queue && i.queue !== !0 || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            le.isFunction(i.old) && i.old.call(this),
            i.queue && le.dequeue(this, i.queue)
        },
        i
    },
    le.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    le.timers = [],
    le.fx = _.prototype.init,
    le.fx.tick = function() {
        var e, n = le.timers,
        i = 0;
        for (Mt = le.now(); i < n.length; i++)(e = n[i])() || n[i] !== e || n.splice(i--, 1);
        n.length || le.fx.stop(),
        Mt = t
    },
    le.fx.timer = function(e) {
        e() && le.timers.push(e) && le.fx.start()
    },
    le.fx.interval = 13,
    le.fx.start = function() {
        Ht || (Ht = setInterval(le.fx.tick, le.fx.interval))
    },
    le.fx.stop = function() {
        clearInterval(Ht),
        Ht = null
    },
    le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    le.fx.step = {},
    le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
        return le.grep(le.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    le.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            le.offset.setOffset(this, e, t)
        });
        var n, i, o = {
            top: 0,
            left: 0
        },
        r = this[0],
        a = r && r.ownerDocument;
        return a ? (n = a.documentElement, le.contains(n, r) ? (typeof r.getBoundingClientRect !== X && (o = r.getBoundingClientRect()), i = V(a), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o) : void 0
    },
    le.offset = {
        setOffset: function(e, t, n) {
            var i = le.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var o, r, a = le(e),
            s = a.offset(),
            l = le.css(e, "top"),
            c = le.css(e, "left"),
            u = ("absolute" === i || "fixed" === i) && le.inArray("auto", [l, c]) > -1,
            d = {},
            f = {};
            u ? (f = a.position(), o = f.top, r = f.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0),
            le.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (d.top = t.top - s.top + o),
            null != t.left && (d.left = t.left - s.left + r),
            "using" in t ? t.using.call(e, d) : a.css(d)
        }
    },
    le.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
                return "fixed" === le.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - le.css(i, "marginTop", !0),
                    left: t.left - n.left - le.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Y.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
                return e || Y.documentElement
            })
        }
    }),
    le.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var i = /Y/.test(n);
        le.fn[e] = function(o) {
            return le.access(this,
            function(e, o, r) {
                var a = V(e);
                return r === t ? a ? n in a ? a[n] : a.document.documentElement[o] : e[o] : void(a ? a.scrollTo(i ? le(a).scrollLeft() : r, i ? r: le(a).scrollTop()) : e[o] = r)
            },
            e, o, arguments.length, null)
        }
    }),
    le.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        le.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(i, o) {
            le.fn[o] = function(o, r) {
                var a = arguments.length && (i || "boolean" != typeof o),
                s = i || (o === !0 || r === !0 ? "margin": "border");
                return le.access(this,
                function(n, i, o) {
                    var r;
                    return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : o === t ? le.css(n, i, s) : le.style(n, i, o, s)
                },
                n, a ? o: t, a, null)
            }
        })
    }),
    e.jQuery = e.$ = le,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
    function() {
        return le
    })
} (window),
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    function n(e) {
        var t = e.length,
        n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function i(e, t, n) {
        if (Z.isFunction(t)) return Z.grep(e,
        function(e, i) {
            return !! t.call(e, i, e) !== n
        });
        if (t.nodeType) return Z.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (oe.test(t)) return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e,
        function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function r(e) {
        var t = ue[e] = {};
        return Z.each(e.match(ce) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1),
        e.removeEventListener("load", a, !1),
        Z.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {},
        0, {
            get: function() {
                return {}
            }
        }),
        this.expando = Z.expando + s.uid++
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(me, "-$1").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: ge.test(n) ? Z.parseJSON(n) : n)
            } catch(e) {}
            he.set(e, t, n)
        } else n = void 0;
        return n
    }
    function c() {
        return ! 0
    }
    function u() {
        return ! 1
    }
    function d() {
        try {
            return J.activeElement
        } catch(e) {}
    }
    function f(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function h(e) {
        var t = Oe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        for (var n = 0,
        i = e.length; i > n; n++) pe.set(e[n], "globalEval", !t || pe.get(t[n], "globalEval"))
    }
    function m(e, t) {
        var n, i, o, r, a, s, l, c;
        if (1 === t.nodeType) {
            if (pe.hasData(e) && (r = pe.access(e), a = pe.set(t, r), c = r.events)) {
                delete a.handle,
                a.events = {};
                for (o in c) for (n = 0, i = c[o].length; i > n; n++) Z.event.add(t, o, c[o][n])
            }
            he.hasData(e) && (s = he.access(e), l = Z.extend({},
            s), he.set(t, l))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function b(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && xe.test(e.type) ? t.checked = e.checked: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function y(t, n) {
        var i, o = Z(n.createElement(t)).appendTo(n.body),
        r = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(o[0])) ? i.display: Z.css(o[0], "display");
        return o.detach(),
        r
    }
    function x(e) {
        var t = J,
        n = Fe[e];
        return n || (n = y(e, t), "none" !== n && n || (qe = (qe || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qe[0].contentDocument, t.write(), t.close(), n = y(e, t), qe.detach()), Fe[e] = n),
        n
    }
    function w(e, t, n) {
        var i, o, r, a, s = e.style;
        return n = n || Me(e),
        n && (a = n.getPropertyValue(t) || n[t]),
        n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Ie.test(a) && Le.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)),
        void 0 !== a ? a + "": a
    }
    function C(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    }
    function T(e, t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, o = Ve.length; o--;) if ((t = Ve[o] + n) in e) return t;
        return i
    }
    function k(e, t, n) {
        var i = ze.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function S(e, t, n, i, o) {
        for (var r = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2)"margin" === n && (a += Z.css(e, n + be[r], !0, o)),
        i ? ("content" === n && (a -= Z.css(e, "padding" + be[r], !0, o)), "margin" !== n && (a -= Z.css(e, "border" + be[r] + "Width", !0, o))) : (a += Z.css(e, "padding" + be[r], !0, o), "padding" !== n && (a += Z.css(e, "border" + be[r] + "Width", !0, o)));
        return a
    }
    function E(e, t, n) {
        var i = !0,
        o = "width" === t ? e.offsetWidth: e.offsetHeight,
        r = Me(e),
        a = "border-box" === Z.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = w(e, t, r), (0 > o || null == o) && (o = e.style[t]), Ie.test(o)) return o;
            i = a && (G.boxSizingReliable() || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + S(e, t, n || (a ? "border": "content"), i, r) + "px"
    }
    function A(e, t) {
        for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a],
        i.style && (r[a] = pe.get(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && ye(i) && (r[a] = pe.access(i, "olddisplay", x(i.nodeName)))) : (o = ye(i), "none" === n && o || pe.set(i, "olddisplay", o ? n: Z.css(i, "display"))));
        for (a = 0; s > a; a++) i = e[a],
        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "": "none"));
        return e
    }
    function D(e, t, n, i, o) {
        return new D.prototype.init(e, t, n, i, o)
    }
    function N() {
        return setTimeout(function() {
            $e = void 0
        }),
        $e = Z.now()
    }
    function P(e, t) {
        var n, i = 0,
        o = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = be[i],
        o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function j(e, t, n) {
        for (var i, o = (Je[t] || []).concat(Je["*"]), r = 0, a = o.length; a > r; r++) if (i = o[r].call(n, t, e)) return i
    }
    function O(e, t, n) {
        var i, o, r, a, s, l, c, u = this,
        d = {},
        f = e.style,
        p = e.nodeType && ye(e),
        h = pe.get(e, "fxshow");
        n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--,
                Z.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = Z.css(e, "display"), "inline" === ("none" === c ? pe.get(e, "olddisplay") || x(e.nodeName) : c) && "none" === Z.css(e, "float") && (f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden", u.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in t) if (o = t[i], Xe.exec(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (p ? "hide": "show")) {
                if ("show" !== o || !h || void 0 === h[i]) continue;
                p = !0
            }
            d[i] = h && h[i] || Z.style(e, i)
        } else c = void 0;
        if (Z.isEmptyObject(d))"inline" === ("none" === c ? x(e.nodeName) : c) && (f.display = c);
        else {
            h ? "hidden" in h && (p = h.hidden) : h = pe.access(e, "fxshow", {}),
            r && (h.hidden = !p),
            p ? Z(e).show() : u.done(function() {
                Z(e).hide()
            }),
            u.done(function() {
                var t;
                pe.remove(e, "fxshow");
                for (t in d) Z.style(e, t, d[t])
            });
            for (i in d) a = j(p ? h[i] : 0, i, u),
            i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function R(e, t) {
        var n, i, o, r, a;
        for (n in e) if (i = Z.camelCase(n), o = t[i], r = e[n], Z.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = Z.cssHooks[i]) && "expand" in a) {
            r = a.expand(r),
            delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o)
        } else t[i] = o
    }
    function q(e, t, n) {
        var i, o, r = 0,
        a = Ge.length,
        s = Z.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (o) return ! 1;
            for (var t = $e || N(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
            return s.notifyWith(e, [c, r, n]),
            1 > r && l ? n: (s.resolveWith(e, [c]), !1)
        },
        c = s.promise({
            elem: e,
            props: Z.extend({},
            t),
            opts: Z.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: $e || N(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = Z.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0,
                i = t ? c.tweens.length: 0;
                if (o) return this;
                for (o = !0; i > n; n++) c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                this
            }
        }),
        u = c.props;
        for (R(u, c.opts.specialEasing); a > r; r++) if (i = Ge[r].call(c, e, u, c.opts)) return i;
        return Z.map(u, j, c),
        Z.isFunction(c.opts.start) && c.opts.start.call(e, c),
        Z.fx.timer(Z.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
            r = t.toLowerCase().match(ce) || [];
            if (Z.isFunction(n)) for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function L(e, t, n, i) {
        function o(s) {
            var l;
            return r[s] = !0,
            Z.each(e[s] || [],
            function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }),
            l
        }
        var r = {},
        a = e === ut;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }
    function I(e, t) {
        var n, i, o = Z.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e: i || (i = {}))[n] = t[n]);
        return i && Z.extend(!0, e, i),
        e
    }
    function M(e, t, n) {
        for (var i, o, r, a, s = e.contents,
        l = e.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (o in s) if (s[o] && s[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }
    function H(e, t, n, i) {
        var o, r, a, s, l, c = {},
        u = e.dataTypes.slice();
        if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
        for (r = u.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
            if (! (a = c[l + " " + r] || c["* " + r])) for (o in c) if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
                break
            }
            if (a !== !0) if (a && e.throws) t = a(t);
            else try {
                t = a(t)
            } catch(e) {
                return {
                    state: "parsererror",
                    error: a ? e: "No conversion from " + l + " to " + r
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function z(e, t, n, i) {
        var o;
        if (Z.isArray(t)) Z.each(t,
        function(t, o) {
            n || ht.test(e) ? i(e, o) : z(e + "[" + ("object" == typeof o ? t: "") + "]", o, n, i)
        });
        else if (n || "object" !== Z.type(t)) i(e, t);
        else for (o in t) z(e + "[" + o + "]", t[o], n, i)
    }
    function W(e) {
        return Z.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
    }
    var _ = [],
    B = _.slice,
    V = _.concat,
    $ = _.push,
    U = _.indexOf,
    X = {},
    Y = X.toString,
    Q = X.hasOwnProperty,
    G = {},
    J = e.document,
    K = "2.1.3",
    Z = function(e, t) {
        return new Z.fn.init(e, t)
    },
    ee = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return B.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(B.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: $,
        sort: _.sort,
        splice: _.splice
    },
    Z.extend = Z.fn.extend = function() {
        var e, t, n, i, o, r, a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[s] || {},
        s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t],
        i = e[t],
        a !== i && (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, r = n && Z.isArray(n) ? n: []) : r = n && Z.isPlainObject(n) ? n: {},
        a[t] = Z.extend(c, r, i)) : void 0 !== i && (a[t] = i));
        return a
    },
    Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return ! Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !Q.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? X[Y.call(e)] || "object": typeof e
        },
        globalEval: function(e) {
            var t, n = eval; (e = Z.trim(e)) && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, ee)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var o = 0,
            r = e.length,
            a = n(e);
            if (i) {
                if (a) for (; r > o && t.apply(e[o], i) !== !1; o++);
                else for (o in e) if (t.apply(e[o], i) === !1) break
            } else if (a) for (; r > o && t.call(e[o], o, e[o]) !== !1; o++);
            else for (o in e) if (t.call(e[o], o, e[o]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Z.merge(i, "string" == typeof e ? [e] : e) : $.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length,
            i = 0,
            o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, a = !n; r > o; o++) ! t(e[o], o) !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, i) {
            var o, r = 0,
            a = e.length,
            s = n(e),
            l = [];
            if (s) for (; a > r; r++) null != (o = t(e[r], r, i)) && l.push(o);
            else for (r in e) null != (o = t(e[r], r, i)) && l.push(o);
            return V.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n),
            Z.isFunction(e) ? (i = B.call(arguments, 2), o = function() {
                return e.apply(t || this, i.concat(B.call(arguments)))
            },
            o.guid = e.guid = e.guid || Z.guid++, o) : void 0
        },
        now: Date.now,
        support: G
    }),
    Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        X["[object " + t + "]"] = t.toLowerCase()
    });
    var te = function(e) {
        function t(e, t, n, i) {
            var o, r, a, s, c, d, f, p, h, g;
            if ((t ? t.ownerDocument || t: M) !== P && N(t), t = t || P, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!i && O) {
                if (11 !== s && (o = me.exec(e))) if (a = o[1]) {
                    if (9 === s) {
                        if (! (r = t.getElementById(a)) || !r.parentNode) return n;
                        if (r.id === a) return n.push(r),
                        n
                    } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && L(t, r) && r.id === a) return n.push(r),
                    n
                } else {
                    if (o[2]) return G.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((a = o[3]) && y.getElementsByClassName) return G.apply(n, t.getElementsByClassName(a)),
                    n
                }
                if (y.qsa && (!R || !R.test(e))) {
                    if (p = f = I, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (d = T(e), (f = t.getAttribute("id")) ? p = f.replace(be, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = d.length; c--;) d[c] = p + u(d[c]);
                        h = ve.test(e) && l(t.parentNode) || t,
                        g = d.join(",")
                    }
                    if (g) try {
                        return G.apply(n, h.querySelectorAll(g)),
                        n
                    } catch(e) {} finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ae, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[I] = !0,
            e
        }
        function o(e) {
            var t = P.createElement("div");
            try {
                return !! e(t)
            } catch(e) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function r(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
        }
        function a(e, t) {
            var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || $) - (~e.sourceIndex || $);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function s(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function u(e) {
            for (var t = 0,
            n = e.length,
            i = ""; n > t; t++) i += e[t].value;
            return i
        }
        function d(e, t, n) {
            var i = t.dir,
            o = n && "parentNode" === i,
            r = z++;
            return t.first ?
            function(t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
            }: function(t, n, a) {
                var s, l, c = [H, r];
                if (a) {
                    for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, a)) return ! 0
                } else for (; t = t[i];) if (1 === t.nodeType || o) {
                    if (l = t[I] || (t[I] = {}), (s = l[i]) && s[0] === H && s[1] === r) return c[2] = s[2];
                    if (l[i] = c, c[2] = e(t, n, a)) return ! 0
                }
            }
        }
        function f(e) {
            return e.length > 1 ?
            function(t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return ! 1;
                return ! 0
            }: e[0]
        }
        function p(e, n, i) {
            for (var o = 0,
            r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }
        function h(e, t, n, i, o) {
            for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
            return a
        }
        function g(e, t, n, o, r, a) {
            return o && !o[I] && (o = g(o)),
            r && !r[I] && (r = g(r, a)),
            i(function(i, a, s, l) {
                var c, u, d, f = [],
                g = [],
                m = a.length,
                v = i || p(t || "*", s.nodeType ? [s] : s, []),
                b = !e || !i && t ? v: h(v, f, e, s, l),
                y = n ? r || (i ? e: m || o) ? [] : a: b;
                if (n && n(b, y, s, l), o) for (c = h(y, g), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[g[u]] = !(b[g[u]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(b[u] = d);
                            r(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(d = y[u]) && (c = r ? K(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else y = h(y === a ? y.splice(m, y.length) : y),
                r ? r(null, a, y, l) : G.apply(a, y)
            })
        }
        function m(e) {
            for (var t, n, i, o = e.length,
            r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = d(function(e) {
                return e === t
            },
            a, !0), c = d(function(e) {
                return K(t, e) > -1
            },
            a, !0), p = [function(e, n, i) {
                var o = !r && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null,
                o
            }]; o > s; s++) if (n = x.relative[e[s].type]) p = [d(f(p), n)];
            else {
                if (n = x.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                    for (i = ++s; o > i && !x.relative[e[i].type]; i++);
                    return g(s > 1 && f(p), s > 1 && u(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*": ""
                    })).replace(ae, "$1"), n, i > s && m(e.slice(s, i)), o > i && m(e = e.slice(i)), o > i && u(e))
                }
                p.push(n)
            }
            return f(p)
        }
        function v(e, n) {
            var o = n.length > 0,
            r = e.length > 0,
            a = function(i, a, s, l, c) {
                var u, d, f, p = 0,
                g = "0",
                m = i && [],
                v = [],
                b = E,
                y = i || r && x.find.TAG("*", c),
                w = H += null == b ? 1 : Math.random() || .1,
                C = y.length;
                for (c && (E = a !== P && a); g !== C && null != (u = y[g]); g++) {
                    if (r && u) {
                        for (d = 0; f = e[d++];) if (f(u, a, s)) {
                            l.push(u);
                            break
                        }
                        c && (H = w)
                    }
                    o && ((u = !f && u) && p--, i && m.push(u))
                }
                if (p += g, o && g !== p) {
                    for (d = 0; f = n[d++];) f(m, v, a, s);
                    if (i) {
                        if (p > 0) for (; g--;) m[g] || v[g] || (v[g] = Y.call(l));
                        v = h(v)
                    }
                    G.apply(l, v),
                    c && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return c && (H = w, E = b),
                m
            };
            return o ? i(a) : a
        }
        var b, y, x, w, C, T, k, S, E, A, D, N, P, j, O, R, q, F, L, I = "sizzle" + 1 * new Date,
        M = e.document,
        H = 0,
        z = 0,
        W = n(),
        _ = n(),
        B = n(),
        V = function(e, t) {
            return e === t && (D = !0),
            0
        },
        $ = 1 << 31,
        U = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Q = X.push,
        G = X.push,
        J = X.slice,
        K = function(e, t) {
            for (var n = 0,
            i = e.length; i > n; n++) if (e[n] === t) return n;
            return - 1
        },
        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ne = te.replace("w", "w#"),
        ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]",
        oe = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
        re = new RegExp(ee + "+", "g"),
        ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        se = new RegExp("^" + ee + "*," + ee + "*"),
        le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        ue = new RegExp(oe),
        de = new RegExp("^" + ne + "$"),
        fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        },
        pe = /^(?:input|select|textarea|button)$/i,
        he = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ve = /[+~]/,
        be = /'|\\/g,
        ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        xe = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        we = function() {
            N()
        };
        try {
            G.apply(X = J.call(M.childNodes), M.childNodes),
            X[M.childNodes.length].nodeType
        } catch(e) {
            G = {
                apply: X.length ?
                function(e, t) {
                    Q.apply(e, J.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        y = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        N = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e: M;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, j = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), O = !C(i), y.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), y.getElementsByTagName = o(function(e) {
                return e.appendChild(i.createComment("")),
                !e.getElementsByTagName("*").length
            }), y.getElementsByClassName = ge.test(i.getElementsByClassName), y.getById = o(function(e) {
                return j.appendChild(e).id = I,
                !i.getElementsByName || !i.getElementsByName(I).length
            }), y.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            x.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = y.getElementsByTagName ?
            function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var n, i = [],
                o = 0,
                r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            },
            x.find.CLASS = y.getElementsByClassName &&
            function(e, t) {
                return O ? t.getElementsByClassName(e) : void 0
            },
            q = [], R = [], (y.qsa = ge.test(i.querySelectorAll)) && (o(function(e) {
                j.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || R.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + I + "-]").length || R.push("~="),
                e.querySelectorAll(":checked").length || R.push(":checked"),
                e.querySelectorAll("a#" + I + "+*").length || R.push(".#.+[+~]")
            }), o(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && R.push("name" + ee + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || R.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                R.push(",.*:")
            })), (y.matchesSelector = ge.test(F = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && o(function(e) {
                y.disconnectedMatch = F.call(e, "div"),
                F.call(e, "[s!='']:x"),
                q.push("!=", oe)
            }), R = R.length && new RegExp(R.join("|")), q = q.length && new RegExp(q.join("|")), t = ge.test(j.compareDocumentPosition), L = t || ge.test(j.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            V = t ?
            function(e, t) {
                if (e === t) return D = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === M && L(M, e) ? -1 : t === i || t.ownerDocument === M && L(M, t) ? 1 : A ? K(A, e) - K(A, t) : 0 : 4 & n ? -1 : 1)
            }: function(e, t) {
                if (e === t) return D = !0,
                0;
                var n, o = 0,
                r = e.parentNode,
                s = t.parentNode,
                l = [e],
                c = [t];
                if (!r || !s) return e === i ? -1 : t === i ? 1 : r ? -1 : s ? 1 : A ? K(A, e) - K(A, t) : 0;
                if (r === s) return a(e, t);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? a(l[o], c[o]) : l[o] === M ? -1 : c[o] === M ? 1 : 0
            },
            i) : P
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== P && N(e), n = n.replace(ce, "='$1']"), !(!y.matchesSelector || !O || q && q.test(n) || R && R.test(n))) try {
                var i = F.call(e, n);
                if (i || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch(e) {}
            return t(n, P, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && N(e),
            L(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== P && N(e);
            var n = x.attrHandle[t.toLowerCase()],
            i = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i: y.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            i = 0,
            o = 0;
            if (D = !y.detectDuplicates, A = !y.sortStable && e.slice(0), e.sort(V), D) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return A = null,
            e
        },
        w = t.getText = function(e) {
            var t, n = "",
            i = 0,
            o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += w(t);
            return n
        },
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && ue.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, xe).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n: !n || (r += "", "=" === n ? r === i: "!=" === n ? r !== i: "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice( - i.length) === i: "~=" === n ? (" " + r.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === i && 0 === o ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var c, u, d, f, p, h, g = r !== a ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        b = !l && !s;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [a ? m.firstChild: m.lastChild], a && b) {
                                for (u = m[I] || (m[I] = {}), c = u[e] || [], p = c[0] === H && c[1], f = c[0] === H && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                                    u[e] = [H, p, f];
                                    break
                                }
                            } else if (b && (c = (t[I] || (t[I] = {}))[e]) && c[0] === H) f = c[1];
                            else for (; (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++f || (b && ((d[I] || (d[I] = {}))[e] = [H, f]), d !== t)););
                            return (f -= o) === i || f % i == 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[I] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), a = o.length; a--;) i = K(e, o[a]),
                        e[i] = !(t[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, o)
                    }) : r
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                    n = [],
                    o = k(e.replace(ae, "$1"));
                    return o[I] ? i(function(e, t, n, i) {
                        for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, i, r) {
                        return t[0] = e,
                        o(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ye, xe),
                    function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ye, xe).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = O ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while (( t = t . parentNode ) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! x.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var i = 0 > n ? n + t: n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var i = 0 > n ? n + t: n; ++i < t;) e.push(i);
                    return e
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        } (b);
        for (b in {
            submit: !0,
            reset: !0
        }) x.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        } (b);
        return c.prototype = x.filters = x.pseudos,
        x.setFilters = new c,
        T = t.tokenize = function(e, n) {
            var i, o, r, a, s, l, c, u = _[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], c = x.preFilter; s;) { (!i || (o = se.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])),
                i = !1,
                (o = le.exec(s)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), s = s.slice(i.length));
                for (a in x.filter) ! (o = fe[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: a,
                    matches: o
                }), s = s.slice(i.length));
                if (!i) break
            }
            return n ? s.length: s ? t.error(e) : _(e, l).slice(0)
        },
        k = t.compile = function(e, t) {
            var n, i = [],
            o = [],
            r = B[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--;) r = m(t[n]),
                r[I] ? i.push(r) : o.push(r);
                r = B(e, v(o, i)),
                r.selector = e
            }
            return r
        },
        S = t.select = function(e, t, n, i) {
            var o, r, a, s, c, d = "function" == typeof e && e,
            f = !i && T(e = d.selector || e);
            if (n = n || [], 1 === f.length) {
                if (r = f[0] = f[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && y.getById && 9 === t.nodeType && O && x.relative[r[1].type]) {
                    if (! (t = (x.find.ID(a.matches[0].replace(ye, xe), t) || [])[0])) return n;
                    d && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o--&&(a = r[o], !x.relative[s = a.type]);) if ((c = x.find[s]) && (i = c(a.matches[0].replace(ye, xe), ve.test(r[0].type) && l(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = i.length && u(r))) return G.apply(n, i),
                    n;
                    break
                }
            }
            return (d || k(e, f))(i, t, !O, n, ve.test(e) && l(t.parentNode) || t),
            n
        },
        y.sortStable = I.split("").sort(V).join("") === I,
        y.detectDuplicates = !!D,
        N(),
        y.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        y.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || r("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(Z,
        function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
        }),
        t
    } (e);
    Z.find = te,
    Z.expr = te.selectors,
    Z.expr[":"] = Z.expr.pseudos,
    Z.unique = te.uniqueSort,
    Z.text = te.getText,
    Z.isXMLDoc = te.isXML,
    Z.contains = te.contains;
    var ne = Z.expr.match.needsContext,
    ie = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    oe = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? Z.find.matchesSelector(i, e) ? [i] : [] : Z.find.matches(e, Z.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    Z.fn.extend({
        find: function(e) {
            var t, n = this.length,
            i = [],
            o = this;
            if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
                for (t = 0; n > t; t++) if (Z.contains(o[t], this)) return ! 0
            }));
            for (t = 0; n > t; t++) Z.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? Z.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + e: e,
            i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !! i(this, "string" == typeof e && ne.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var re, ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (Z.fn.init = function(e, t) {
        var n, i;
        if (!e) return this;
        if ("string" == typeof e) {
            if (! (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ae.exec(e)) || !n[1] && t) return ! t || t.jquery ? (t || re).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t: J, !0)), ie.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = J.getElementById(n[2]),
            i && i.parentNode && (this.length = 1, this[0] = i),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? void 0 !== re.ready ? re.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
    }).prototype = Z.fn,
    re = Z(J);
    var se = /^(?:parents|prev(?:Until|All))/,
    le = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Z.extend({
        dir: function(e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (o && Z(e).is(n)) break;
                i.push(e)
            }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    Z.fn.extend({
        has: function(e) {
            var t = Z(e, this),
            n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0,
            o = this.length,
            r = [], a = ne.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? Z.unique(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    },
    function(e, t) {
        Z.fn[e] = function(n, i) {
            var o = Z.map(this, t, n);
            return "Until" !== e.slice( - 5) && (i = n),
            i && "string" == typeof i && (o = Z.filter(i, o)),
            this.length > 1 && (le[e] || Z.unique(o), se.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var ce = /\S+/g,
    ue = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? ue[e] || r(e) : Z.extend({},
        e);
        var t, n, i, o, a, s, l = [],
        c = !e.once && [],
        u = function(r) {
            for (t = e.memory && r, n = !0, s = o || 0, o = 0, a = l.length, i = !0; l && a > s; s++) if (l[s].apply(r[0], r[1]) === !1 && e.stopOnFalse) {
                t = !1;
                break
            }
            i = !1,
            l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
        },
        d = {
            add: function() {
                if (l) {
                    var n = l.length; !
                    function t(n) {
                        Z.each(n,
                        function(n, i) {
                            var o = Z.type(i);
                            "function" === o ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== o && t(i)
                        })
                    } (arguments),
                    i ? a = l.length: t && (o = n, u(t))
                }
                return this
            },
            remove: function() {
                return l && Z.each(arguments,
                function(e, t) {
                    for (var n; (n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1),
                    i && (a >= n && a--, s >= n && s--)
                }),
                this
            },
            has: function(e) {
                return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                a = 0,
                this
            },
            disable: function() {
                return l = c = t = void 0,
                this
            },
            disabled: function() {
                return ! l
            },
            lock: function() {
                return c = void 0,
                t || d.disable(),
                this
            },
            locked: function() {
                return ! c
            },
            fireWith: function(e, t) {
                return ! l || n && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? c.push(t) : u(t)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! n
            }
        };
        return d
    },
    Z.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return Z.Deferred(function(n) {
                        Z.each(t,
                        function(t, r) {
                            var a = Z.isFunction(e[t]) && e[t];
                            o[r[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? Z.extend(e, i) : i
                }
            },
            o = {};
            return i.pipe = i.then,
            Z.each(t,
            function(e, r) {
                var a = r[2],
                s = r[3];
                i[r[1]] = a.add,
                s && a.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i: this, arguments),
                    this
                },
                o[r[0] + "With"] = a.fireWith
            }),
            i.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            var t, n, i, o = 0,
            r = B.call(arguments),
            a = r.length,
            s = 1 !== a || e && Z.isFunction(e.promise) ? a: 0,
            l = 1 === s ? e: Z.Deferred(),
            c = function(e, n, i) {
                return function(o) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? B.call(arguments) : o,
                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && Z.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
            return s || l.resolveWith(i, r),
            l.promise()
        }
    });
    var de;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e),
        this
    },
    Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++:Z.ready(!0)
        },
        ready: function(e) { (e === !0 ? --Z.readyWait: Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (de.resolveWith(J, [Z]), Z.fn.triggerHandler && (Z(J).triggerHandler("ready"), Z(J).off("ready"))))
        }
    }),
    Z.ready.promise = function(t) {
        return de || (de = Z.Deferred(), "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))),
        de.promise(t)
    },
    Z.ready.promise();
    var fe = Z.access = function(e, t, n, i, o, r, a) {
        var s = 0,
        l = e.length,
        c = null == n;
        if ("object" === Z.type(n)) {
            o = !0;
            for (s in n) Z.access(e, t, s, n[s], !0, r, a)
        } else if (void 0 !== i && (o = !0, Z.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
            return c.call(Z(e), n)
        })), t)) for (; l > s; s++) t(e[s], n, a ? i: i.call(e[s], s, t(e[s], n)));
        return o ? e: c ? t.call(e) : l ? t(e[0], n) : r
    };
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    },
    s.uid = 1,
    s.accepts = Z.acceptData,
    s.prototype = {
        key: function(e) {
            if (!s.accepts(e)) return 0;
            var t = {},
            n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch(i) {
                    t[this.expando] = n,
                    Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var i, o = this.key(e),
            r = this.cache[o];
            if ("string" == typeof t) r[t] = n;
            else if (Z.isEmptyObject(r)) Z.extend(this.cache[o], t);
            else for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n: n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i: this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n: t)
        },
        remove: function(e, t) {
            var n, i, o, r = this.key(e),
            a = this.cache[r];
            if (void 0 === t) this.cache[r] = {};
            else {
                Z.isArray(t) ? i = t.concat(t.map(Z.camelCase)) : (o = Z.camelCase(t), t in a ? i = [t, o] : (i = o, i = i in a ? [i] : i.match(ce) || [])),
                n = i.length;
                for (; n--;) delete a[i[n]]
            }
        },
        hasData: function(e) {
            return ! Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var pe = new s,
    he = new s,
    ge = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    me = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return he.hasData(e) || pe.hasData(e)
        },
        data: function(e, t, n) {
            return he.access(e, t, n)
        },
        removeData: function(e, t) {
            he.remove(e, t)
        },
        _data: function(e, t, n) {
            return pe.access(e, t, n)
        },
        _removeData: function(e, t) {
            pe.remove(e, t)
        }
    }),
    Z.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
            a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = he.get(r), 1 === r.nodeType && !pe.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(r, i, o[i])));
                    pe.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                he.set(this, e)
            }) : fe(this,
            function(t) {
                var n, i = Z.camelCase(e);
                if (r && void 0 === t) {
                    if (void 0 !== (n = he.get(r, e))) return n;
                    if (void 0 !== (n = he.get(r, i))) return n;
                    if (void 0 !== (n = l(r, i, void 0))) return n
                } else this.each(function() {
                    var n = he.get(this, i);
                    he.set(this, i, t),
                    -1 !== e.indexOf("-") && void 0 !== n && he.set(this, e, t)
                })
            },
            null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                he.remove(this, e)
            })
        }
    }),
    Z.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = pe.get(e, t), n && (!i || Z.isArray(n) ? i = pe.access(e, t, Z.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t),
            i = n.length,
            o = n.shift(),
            r = Z._queueHooks(e, t),
            a = function() {
                Z.dequeue(e, t)
            };
            "inprogress" === o && (o = n.shift(), i--),
            o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)),
            !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return pe.get(e, n) || pe.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    pe.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
            o = Z.Deferred(),
            r = this,
            a = this.length,
            s = function() {--i || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = pe.get(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
            return s(),
            o.promise(t)
        }
    });
    var ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    be = ["Top", "Right", "Bottom", "Left"],
    ye = function(e, t) {
        return e = t || e,
        "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    },
    xe = /^(?:checkbox|radio)$/i; !
    function() {
        var e = J.createDocumentFragment(),
        t = e.appendChild(J.createElement("div")),
        n = J.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    } ();
    var we = "undefined";
    G.focusinBubbles = "onfocusin" in e;
    var Ce = /^key/,
    Te = /^(?:mouse|pointer|contextmenu)|click/,
    ke = /^(?:focusinfocus|focusoutblur)$/,
    Se = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, f, p, h, g, m = pe.get(e);
            if (m) for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = Z.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                return typeof Z !== we && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(ce) || [""], c = t.length; c--;) s = Se.exec(t[c]) || [],
            p = g = s[1],
            h = (s[2] || "").split(".").sort(),
            p && (d = Z.event.special[p] || {},
            p = (o ? d.delegateType: d.bindType) || p, d = Z.event.special[p] || {},
            u = Z.extend({
                type: p,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && Z.expr.match.needsContext.test(o),
                namespace: h.join(".")
            },
            r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && d.setup.call(e, i, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), Z.event.global[p] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, a, s, l, c, u, d, f, p, h, g, m = pe.hasData(e) && pe.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(ce) || [""], c = t.length; c--;) if (s = Se.exec(t[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (d = Z.event.special[p] || {},
                    p = (i ? d.delegateType: d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) u = f[r],
                    !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                    a && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, p, m.handle), delete l[p])
                } else for (p in l) Z.event.remove(e, p + t[c], n, i, !0);
                Z.isEmptyObject(l) && (delete m.handle, pe.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, o) {
            var r, a, s, l, c, u, d, f = [i || J],
            p = Q.call(t, "type") ? t.type: t,
            h = Q.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || J, 3 !== i.nodeType && 8 !== i.nodeType && !ke.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Z.expando] ? t: new Z.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : Z.makeArray(n, [t]), d = Z.event.special[p] || {},
            o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                if (!o && !d.noBubble && !Z.isWindow(i)) {
                    for (l = d.delegateType || p, ke.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a),
                    s = a;
                    s === (i.ownerDocument || J) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0; (a = f[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l: d.bindType || p,
                u = (pe.get(a, "events") || {})[t.type] && pe.get(a, "handle"),
                u && u.apply(a, n),
                (u = c && a[c]) && u.apply && Z.acceptData(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
                return t.type = p,
                o || t.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Z.acceptData(i) || c && Z.isFunction(i[p]) && !Z.isWindow(i) && (s = i[c], s && (i[c] = null), Z.event.triggered = p, i[p](), Z.event.triggered = void 0, s && (i[c] = s)),
                t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, i, o, r, a = [],
            s = B.call(arguments),
            l = (pe.get(this, "events") || {})[e.type] || [],
            c = Z.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = Z.event.handlers.call(this, e, l), t = 0; (o = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (i = ((Z.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, s)) && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, a = [],
            s = t.delegateCount,
            l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
                for (i = [], n = 0; s > n; n++) r = t[n],
                o = r.selector + " ",
                void 0 === i[o] && (i[o] = r.needsContext ? Z(o, this).index(l) >= 0 : Z.find(o, this, null, [l]).length),
                i[o] && i.push(r);
                i.length && a.push({
                    elem: l,
                    handlers: i
                })
            }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[Z.expando]) return e;
            var t, n, i, o = e.type,
            r = e,
            a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = Te.test(o) ? this.mouseHooks: Ce.test(o) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(r), t = i.length; t--;) n = i[t],
            e[n] = r[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, r) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== d() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === d() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var o = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Z.event.trigger(o, null, t) : Z.event.dispatch.call(t, o),
            o.isDefaultPrevented() && n.preventDefault()
        }
    },
    Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    },
    Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? c: u) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
    },
    Z.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                o = e.relatedTarget,
                r = e.handleObj;
                return (!o || o !== i && !Z.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    G.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                o = pe.access(i, t);
                o || i.addEventListener(e, n, !0),
                pe.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                o = pe.access(i, t) - 1;
                o ? pe.access(i, t, o) : (i.removeEventListener(e, n, !0), pe.remove(i, t))
            }
        }
    }),
    Z.fn.extend({
        on: function(e, t, n, i, o) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (a in e) this.on(a, t, n, e[a], o);
                return this
            }
            if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (r = i, i = function(e) {
                return Z().off(e),
                r.apply(this, arguments)
            },
            i.guid = r.guid || (r.guid = Z.guid++)),
            this.each(function() {
                Z.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            Z(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
            n === !1 && (n = u),
            this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Z.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ae = /<([\w:]+)/,
    De = /<|&#?\w+;/,
    Ne = /<(?:script|style|link)/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^$|\/(?:java|ecma)script/i,
    Oe = /^true\/(.*)/,
    Re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Re.optgroup = Re.option,
    Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead,
    Re.th = Re.td,
    Z.extend({
        clone: function(e, t, n) {
            var i, o, r, a, s = e.cloneNode(!0),
            l = Z.contains(e.ownerDocument, e);
            if (! (G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (a = v(s), r = v(e), i = 0, o = r.length; o > i; i++) b(r[i], a[i]);
            if (t) if (n) for (r = r || v(e), a = a || v(s), i = 0, o = r.length; o > i; i++) m(r[i], a[i]);
            else m(e, s);
            return a = v(s, "script"),
            a.length > 0 && g(a, !l && v(e, "script")),
            s
        },
        buildFragment: function(e, t, n, i) {
            for (var o, r, a, s, l, c, u = t.createDocumentFragment(), d = [], f = 0, p = e.length; p > f; f++) if ((o = e[f]) || 0 === o) if ("object" === Z.type(o)) Z.merge(d, o.nodeType ? [o] : o);
            else if (De.test(o)) {
                for (r = r || u.appendChild(t.createElement("div")), a = (Ae.exec(o) || ["", ""])[1].toLowerCase(), s = Re[a] || Re._default, r.innerHTML = s[1] + o.replace(Ee, "<$1></$2>") + s[2], c = s[0]; c--;) r = r.lastChild;
                Z.merge(d, r.childNodes),
                r = u.firstChild,
                r.textContent = ""
            } else d.push(t.createTextNode(o));
            for (u.textContent = "", f = 0; o = d[f++];) if ((!i || -1 === Z.inArray(o, i)) && (l = Z.contains(o.ownerDocument, o), r = v(u.appendChild(o), "script"), l && g(r), n)) for (c = 0; o = r[c++];) je.test(o.type || "") && n.push(o);
            return u
        },
        cleanData: function(e) {
            for (var t, n, i, o, r = Z.event.special,
            a = 0; void 0 !== (n = e[a]); a++) {
                if (Z.acceptData(n) && (o = n[pe.expando]) && (t = pe.cache[o])) {
                    if (t.events) for (i in t.events) r[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, t.handle);
                    pe.cache[o] && delete pe.cache[o]
                }
                delete he.cache[n[he.expando]]
            }
        }
    }),
    Z.fn.extend({
        text: function(e) {
            return fe(this,
            function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    f(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? Z.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || Z.cleanData(v(n)),
            n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return fe(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !Re[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ee, "<$1></$2>");
                    try {
                        for (; i > n; n++) t = this[n] || {},
                        1 === t.nodeType && (Z.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(e) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments,
            function(t) {
                e = this.parentNode,
                Z.cleanData(v(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = V.apply([], e);
            var n, i, o, r, a, s, l = 0,
            c = this.length,
            u = this,
            d = c - 1,
            f = e[0],
            g = Z.isFunction(f);
            if (g || c > 1 && "string" == typeof f && !G.checkClone && Pe.test(f)) return this.each(function(n) {
                var i = u.eq(n);
                g && (e[0] = f.call(this, n, i.html())),
                i.domManip(e, t)
            });
            if (c && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                for (o = Z.map(v(n, "script"), p), r = o.length; c > l; l++) a = n,
                l !== d && (a = Z.clone(a, !0, !0), r && Z.merge(o, v(a, "script"))),
                t.call(this[l], a, l);
                if (r) for (s = o[o.length - 1].ownerDocument, Z.map(o, h), l = 0; r > l; l++) a = o[l],
                je.test(a.type || "") && !pe.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")))
            }
            return this
        }
    }),
    Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, i = [], o = Z(e), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this: this.clone(!0),
            Z(o[a])[t](n),
            $.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var qe, Fe = {},
    Le = /^margin/,
    Ie = new RegExp("^(" + ve + ")(?!px)[a-z%]+$", "i"),
    Me = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }; !
    function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            a.innerHTML = "",
            o.appendChild(r);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top,
            i = "4px" === t.width,
            o.removeChild(r)
        }
        var n, i, o = J.documentElement,
        r = J.createElement("div"),
        a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(a), e.getComputedStyle && Z.extend(G, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == i && t(),
                i
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                o.appendChild(r),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                o.removeChild(r),
                a.removeChild(n),
                t
            }
        }))
    } (),
    Z.swap = function(e, t, n, i) {
        var o, r, a = {};
        for (r in t) a[r] = e.style[r],
        e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = a[r];
        return o
    };
    var He = /^(none|table(?!-c[ea]).+)/,
    ze = new RegExp("^(" + ve + ")(.*)$", "i"),
    We = new RegExp("^([+-])=(" + ve + ")", "i"),
    _e = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Be = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Ve = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a, s = Z.camelCase(t),
                l = e.style;
                return t = Z.cssProps[s] || (Z.cssProps[s] = T(l, s)),
                a = Z.cssHooks[t] || Z.cssHooks[s],
                void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o: l[t] : (r = typeof n, "string" === r && (o = We.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(Z.css(e, t)), r = "number"), void(null != n && n === n && ("number" !== r || Z.cssNumber[s] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var o, r, a, s = Z.camelCase(t);
            return t = Z.cssProps[s] || (Z.cssProps[s] = T(e.style, s)),
            a = Z.cssHooks[t] || Z.cssHooks[s],
            a && "get" in a && (o = a.get(e, !0, n)),
            void 0 === o && (o = w(e, t, i)),
            "normal" === o && t in Be && (o = Be[t]),
            "" === n || n ? (r = parseFloat(o), n === !0 || Z.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    Z.each(["height", "width"],
    function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? He.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, _e,
                function() {
                    return E(e, t, i)
                }) : E(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var o = i && Me(e);
                return k(e, n, i ? S(e, t, i, "border-box" === Z.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    Z.cssHooks.marginRight = C(G.reliableMarginRight,
    function(e, t) {
        return t ? Z.swap(e, {
            display: "inline-block"
        },
        w, [e, "marginRight"]) : void 0
    }),
    Z.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0,
                o = {},
                r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + be[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        },
        Le.test(e) || (Z.cssHooks[e + t].set = k)
    }),
    Z.fn.extend({
        css: function(e, t) {
            return fe(this,
            function(e, t, n) {
                var i, o, r = {},
                a = 0;
                if (Z.isArray(t)) {
                    for (i = Me(e), o = t.length; o > a; a++) r[t[a]] = Z.css(e, t[a], !1, i);
                    return r
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ye(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }),
    Z.Tween = D,
    D.prototype = {
        constructor: D,
        init: function(e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (Z.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.pos = t = this.options.duration ? Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : D.propHooks._default.set(this),
            this
        }
    },
    D.prototype.init.prototype = D.prototype,
    D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    Z.fx = D.prototype.init,
    Z.fx.step = {};
    var $e, Ue, Xe = /^(?:toggle|show|hide)$/,
    Ye = new RegExp("^(?:([+-])=|)(" + ve + ")([a-z%]*)$", "i"),
    Qe = /queueHooks$/,
    Ge = [O],
    Je = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            i = n.cur(),
            o = Ye.exec(t),
            r = o && o[3] || (Z.cssNumber[e] ? "": "px"),
            a = (Z.cssNumber[e] || "px" !== r && +i) && Ye.exec(Z.css(n.elem, e)),
            s = 1,
            l = 20;
            if (a && a[3] !== r) {
                r = r || a[3],
                o = o || [],
                a = +i || 1;
                do {
                    s = s || ".5", a /= s, Z.style(n.elem, e, a + r)
                } while ( s !== ( s = n . cur () / i) && 1 !== s && --l)
            }
            return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]),
            n
        }]
    };
    Z.Animation = Z.extend(q, {
        tweener: function(e, t) {
            Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0,
            o = e.length; o > i; i++) n = e[i],
            Je[n] = Je[n] || [],
            Je[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Ge.unshift(e) : Ge.push(e)
        }
    }),
    Z.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? Z.extend({},
        e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            Z.isFunction(i.old) && i.old.call(this),
            i.queue && Z.dequeue(this, i.queue)
        },
        i
    },
    Z.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ye).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = Z.isEmptyObject(e),
            r = Z.speed(t, n, i),
            a = function() {
                var t = q(this, Z.extend({},
                e), r); (o || pe.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                o = null != e && e + "queueHooks",
                r = Z.timers,
                a = pe.get(this);
                if (o) a[o] && a[o].stop && i(a[o]);
                else for (o in a) a[o] && a[o].stop && Qe.test(o) && i(a[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1)); (t || !n) && Z.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = pe.get(this),
                i = n[e + "queue"],
                o = n[e + "queueHooks"],
                r = Z.timers,
                a = i ? i.length: 0;
                for (n.finish = !0, Z.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    Z.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, i, o)
        }
    }),
    Z.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        Z.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    Z.timers = [],
    Z.fx.tick = function() {
        var e, t = 0,
        n = Z.timers;
        for ($e = Z.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(),
        $e = void 0
    },
    Z.fx.timer = function(e) {
        Z.timers.push(e),
        e() ? Z.fx.start() : Z.timers.pop()
    },
    Z.fx.interval = 13,
    Z.fx.start = function() {
        Ue || (Ue = setInterval(Z.fx.tick, Z.fx.interval))
    },
    Z.fx.stop = function() {
        clearInterval(Ue),
        Ue = null
    },
    Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Z.fn.delay = function(e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e: e,
        t = t || "fx",
        this.queue(t,
        function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    },
    function() {
        var e = J.createElement("input"),
        t = J.createElement("select"),
        n = t.appendChild(J.createElement("option"));
        e.type = "checkbox",
        G.checkOn = "" !== e.value,
        G.optSelected = n.selected,
        t.disabled = !0,
        G.optDisabled = !n.disabled,
        e = J.createElement("input"),
        e.value = "t",
        e.type = "radio",
        G.radioValue = "t" === e.value
    } ();
    var Ke, Ze = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return fe(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }),
    Z.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === we ? Z.prop(e, t, n) : (1 === r && Z.isXMLDoc(e) || (t = t.toLowerCase(), i = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? Ke: void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o: (o = Z.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o: (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, o = 0,
            r = t && t.match(ce);
            if (r && 1 === e.nodeType) for (; n = r[o++];) i = Z.propFix[n] || n,
            Z.expr.match.bool.test(n) && (e[i] = !1),
            e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!G.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    Ke = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    Z.each(Z.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = Ze[t] || Z.find.attr;
        Ze[t] = function(e, t, i) {
            var o, r;
            return i || (r = Ze[t], Ze[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, Ze[t] = r),
            o
        }
    });
    var et = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return fe(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }),
    Z.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, o, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !Z.isXMLDoc(e),
            r && (t = Z.propFix[t] || t, o = Z.propHooks[t]),
            void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i: e[t] = n: o && "get" in o && null !== (i = o.get(e, t)) ? i: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || et.test(e.nodeName) || e.href ? e.tabIndex: -1
                }
            }
        }
    }),
    G.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var tt = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, a, s = "string" == typeof e && e,
            l = 0,
            c = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || "").match(ce) || []; c > l; l++) if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(tt, " ") : " ")) {
                for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                a = Z.trim(i),
                n.className !== a && (n.className = a)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, a, s = 0 === arguments.length || "string" == typeof e && e,
            l = 0,
            c = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (s) for (t = (e || "").match(ce) || []; c > l; l++) if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(tt, " ") : "")) {
                for (r = 0; o = t[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                a = e ? Z.trim(i) : "",
                n.className !== a && (n.className = a)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ?
            function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }: function() {
                if ("string" === n) for (var t, i = 0,
                o = Z(this), r = e.match(ce) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(n === we || "boolean" === n) && (this.className && pe.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "": pe.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(tt, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        }
    });
    Z.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = Z.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, Z(this).val()) : e, null == o ? o = "": "number" == typeof o ? o += "": Z.isArray(o) && (o = Z.map(o,
                function(e) {
                    return null == e ? "": e + ""
                })), (t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = Z.valHooks[o.type] || Z.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n: (n = o.value, "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "": n)) : void 0
        }
    }),
    Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t: Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options,
                    o = e.selectedIndex,
                    r = "select-one" === e.type || 0 > o,
                    a = r ? null: [], s = r ? o + 1 : i.length, l = 0 > o ? s: r ? o: 0; s > l; l++) if (n = i[l], !(!n.selected && l !== o || (G.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Z(n).val(), r) return t;
                        a.push(t)
                    }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options,
                    r = Z.makeArray(t), a = o.length; a--;) i = o[a],
                    (i.selected = Z.inArray(i.value, r) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    Z.each(["radio", "checkbox"],
    function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
            }
        },
        G.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    }),
    Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var nt = Z.now(),
    it = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    },
    Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new DOMParser,
            t = n.parseFromString(e, "text/xml")
        } catch(e) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e),
        t
    };
    var ot = /([?&])_=[^&]*/,
    rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    at = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    st = /^(?:GET|HEAD)$/,
    lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    ct = {},
    ut = {},
    dt = "*/".concat("*"),
    ft = e.location.href,
    pt = lt.exec(ft.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft,
            type: "GET",
            isLocal: at.test(pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": dt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, Z.ajaxSettings), t) : I(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(ct),
        ajaxTransport: F(ut),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var l, u, v, b, x, C = t;
                2 !== y && (y = 2, s && clearTimeout(s), i = void 0, r = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (b = M(d, w, n)), b = H(d, b, w, l), l ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (Z.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (Z.etag[o] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent": 304 === e ? C = "notmodified": (C = b.state, u = b.data, v = b.error, l = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", l ? h.resolveWith(f, [u, C, w]) : h.rejectWith(f, [w, C, v]), w.statusCode(m), m = void 0, c && p.trigger(l ? "ajaxSuccess": "ajaxError", [w, d, l ? u: v]), g.fireWith(f, [w, C]), c && (p.trigger("ajaxComplete", [w, d]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var i, o, r, a, s, l, c, u, d = Z.ajaxSetup({},
            t),
            f = d.context || d,
            p = d.context && (f.nodeType || f.jquery) ? Z(f) : Z.event,
            h = Z.Deferred(),
            g = Z.Callbacks("once memory"),
            m = d.statusCode || {},
            v = {},
            b = {},
            y = 0,
            x = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === y) {
                        if (!a) for (a = {}; t = rt.exec(r);) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === y ? r: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return y || (e = b[n] = b[n] || e, v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return y || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > y) for (t in e) m[t] = [m[t], e[t]];
                    else w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return i && i.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || ft) + "").replace(/#.*$/, "").replace(/^\/\//, pt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(ce) || [""], null == d.crossDomain && (l = lt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === pt[1] && l[2] === pt[2] && (l[3] || ("http:" === l[1] ? "80": "443")) === (pt[3] || ("http:" === pt[1] ? "80": "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), L(ct, d, t, w), 2 === y) return w;
            c = Z.event && d.global,
            c && 0 == Z.active++&&Z.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !st.test(d.type),
            o = d.url,
            d.hasContent || (d.data && (o = d.url += (it.test(o) ? "&": "?") + d.data, delete d.data), d.cache === !1 && (d.url = ot.test(o) ? o.replace(ot, "$1_=" + nt++) : o + (it.test(o) ? "&": "?") + "_=" + nt++)),
            d.ifModified && (Z.lastModified[o] && w.setRequestHeader("If-Modified-Since", Z.lastModified[o]), Z.etag[o] && w.setRequestHeader("If-None-Match", Z.etag[o])),
            (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + dt + "; q=0.01": "") : d.accepts["*"]);
            for (u in d.headers) w.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(f, w, d) === !1 || 2 === y)) return w.abort();
            x = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) w[u](d[u]);
            if (i = L(ut, d, t, w)) {
                w.readyState = 1,
                c && p.trigger("ajaxSend", [w, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                },
                d.timeout));
                try {
                    y = 1,
                    i.send(v, n)
                } catch(e) {
                    if (! (2 > y)) throw e;
                    n( - 1, e)
                }
            } else n( - 1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }),
    Z.each(["get", "post"],
    function(e, t) {
        Z[t] = function(e, n, i, o) {
            return Z.isFunction(n) && (o = o || i, i = n, n = void 0),
            Z.ajax({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            })
        }
    }),
    Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    },
    Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(Z.isFunction(e) ?
            function(t) {
                Z(this).wrapInner(e.call(this, t))
            }: function() {
                var t = Z(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    },
    Z.expr.filters.visible = function(e) {
        return ! Z.expr.filters.hidden(e)
    };
    var ht = /\[\]$/,
    gt = /^(?:submit|button|image|reset|file)$/i,
    mt = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, i = [],
        o = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "": t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e,
        function() {
            o(this.name, this.value)
        });
        else for (n in e) z(n, e[n], t, o);
        return i.join("&").replace(/%20/g, "+")
    },
    Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && mt.test(this.nodeName) && !gt.test(e) && (this.checked || !xe.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null: Z.isArray(n) ? Z.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }),
    Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch(e) {}
    };
    var vt = 0,
    bt = {},
    yt = {
        0 : 200,
        1223 : 204
    },
    xt = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload",
    function() {
        for (var e in bt) bt[e]()
    }),
    G.cors = !!xt && "withCredentials" in xt,
    G.ajax = xt = !!xt,
    Z.ajaxTransport(function(e) {
        var t;
        return G.cors || xt && !e.crossDomain ? {
            send: function(n, i) {
                var o, r = e.xhr(),
                a = ++vt;
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) r[o] = e.xhrFields[o];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (o in n) r.setRequestHeader(o, n[o]);
                t = function(e) {
                    return function() {
                        t && (delete bt[a], t = r.onload = r.onerror = null, "abort" === e ? r.abort() : "error" === e ? i(r.status, r.statusText) : i(yt[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        }: void 0, r.getAllResponseHeaders()))
                    }
                },
                r.onload = t(),
                r.onerror = t("error"),
                t = bt[a] = t("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch(e) {
                    if (t) throw e
                }
            },
            abort: function() {
                t && t()
            }
        }: void 0
    }),
    Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e),
                e
            }
        }
    }),
    Z.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    Z.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var wt = [],
    Ct = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = wt.pop() || Z.expando + "_" + nt++;
            return this[e] = !0,
            e
        }
    }),
    Z.ajaxPrefilter("json jsonp",
    function(t, n, i) {
        var o, r, a, s = t.jsonp !== !1 && (Ct.test(t.url) ? "url": "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ct.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ct, "$1" + o) : t.jsonp !== !1 && (t.url += (it.test(t.url) ? "&": "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return a || Z.error(o + " was not called"),
            a[0]
        },
        t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            a = arguments
        },
        i.always(function() {
            e[o] = r,
            t[o] && (t.jsonpCallback = n.jsonpCallback, wt.push(o)),
            a && Z.isFunction(r) && r(a[0]),
            a = r = void 0
        }), "script") : void 0
    }),
    Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || J;
        var i = ie.exec(e),
        o = !n && [];
        return i ? [t.createElement(i[1])] : (i = Z.buildFragment([e], t, o), o && o.length && Z(o).remove(), Z.merge([], i.childNodes))
    };
    var Tt = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Tt) return Tt.apply(this, arguments);
        var i, o, r, a = this,
        s = e.indexOf(" ");
        return s >= 0 && (i = Z.trim(e.slice(s)), e = e.slice(0, s)),
        Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
        a.length > 0 && Z.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            a.html(i ? Z("<div>").append(Z.parseHTML(e)).find(i) : e)
        }).complete(n &&
        function(e, t) {
            a.each(n, r || [e.responseText, t, e])
        }),
        this
    },
    Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers,
        function(t) {
            return e === t.elem
        }).length
    };
    var kt = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, a, s, l, c, u = Z.css(e, "position"),
            d = Z(e),
            f = {};
            "static" === u && (e.style.position = "relative"),
            s = d.offset(),
            r = Z.css(e, "top"),
            l = Z.css(e, "left"),
            c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1,
            c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0),
            Z.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, f) : d.css(f)
        }
    },
    Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
            o = {
                top: 0,
                left: 0
            },
            r = i && i.ownerDocument;
            return r ? (t = r.documentElement, Z.contains(t, i) ? (typeof i.getBoundingClientRect !== we && (o = i.getBoundingClientRect()), n = W(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (i = e.offset()), i.top += Z.css(e[0], "borderTopWidth", !0), i.left += Z.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - i.top - Z.css(n, "marginTop", !0),
                    left: t.left - i.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || kt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
                return e || kt
            })
        }
    }),
    Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(t, n) {
        var i = "pageYOffset" === n;
        Z.fn[t] = function(o) {
            return fe(this,
            function(t, o, r) {
                var a = W(t);
                return void 0 === r ? a ? a[n] : t[o] : void(a ? a.scrollTo(i ? e.pageXOffset: r, i ? r: e.pageYOffset) : t[o] = r)
            },
            t, o, arguments.length, null)
        }
    }),
    Z.each(["top", "left"],
    function(e, t) {
        Z.cssHooks[t] = C(G.pixelPosition,
        function(e, n) {
            return n ? (n = w(e, t), Ie.test(n) ? Z(e).position()[t] + "px": n) : void 0
        })
    }),
    Z.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, i) {
            Z.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                a = n || (i === !0 || o === !0 ? "margin": "border");
                return fe(this,
                function(t, n, i) {
                    var o;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Z.css(t, n, a) : Z.style(t, n, i, a)
                },
                t, r ? i: void 0, r, null)
            }
        })
    }),
    Z.fn.size = function() {
        return this.length
    },
    Z.fn.andSelf = Z.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return Z
    });
    var St = e.jQuery,
    Et = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Et),
        t && e.jQuery === Z && (e.jQuery = St),
        Z
    },
    typeof t === we && (e.jQuery = e.$ = Z),
    Z
}),
function(e, t, n, i) {
    "use strict";
    function o(e, t, n) {
        return setTimeout(u(e, n), t)
    }
    function r(e, t, n) {
        return !! Array.isArray(e) && (a(e, n[t], n), !0)
    }
    function a(e, t, n) {
        var o;
        if (e) if (e.forEach) e.forEach(t, n);
        else if (e.length !== i) for (o = 0; o < e.length;) t.call(n, e[o], o, e),
        o++;
        else for (o in e) e.hasOwnProperty(o) && t.call(n, e[o], o, e)
    }
    function s(e, t, n) {
        for (var o = Object.keys(t), r = 0; r < o.length;)(!n || n && e[o[r]] === i) && (e[o[r]] = t[o[r]]),
        r++;
        return e
    }
    function l(e, t) {
        return s(e, t, !0)
    }
    function c(e, t, n) {
        var i, o = t.prototype;
        i = e.prototype = Object.create(o),
        i.constructor = e,
        i._super = o,
        n && s(i, n)
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function d(e, t) {
        return typeof e == ue ? e.apply(t ? t[0] || i: i, t) : e
    }
    function f(e, t) {
        return e === i ? t: e
    }
    function p(e, t, n) {
        a(v(t),
        function(t) {
            e.addEventListener(t, n, !1)
        })
    }
    function h(e, t, n) {
        a(v(t),
        function(t) {
            e.removeEventListener(t, n, !1)
        })
    }
    function g(e, t) {
        for (; e;) {
            if (e == t) return ! 0;
            e = e.parentNode
        }
        return ! 1
    }
    function m(e, t) {
        return e.indexOf(t) > -1
    }
    function v(e) {
        return e.trim().split(/\s+/g)
    }
    function b(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length;) {
            if (n && e[i][n] == t || !n && e[i] === t) return i;
            i++
        }
        return - 1
    }
    function y(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function x(e, t, n) {
        for (var i = [], o = [], r = 0; r < e.length;) {
            var a = t ? e[r][t] : e[r];
            b(o, a) < 0 && i.push(e[r]),
            o[r] = a,
            r++
        }
        return n && (i = t ? i.sort(function(e, n) {
            return e[t] > n[t]
        }) : i.sort()),
        i
    }
    function w(e, t) {
        for (var n, o, r = t[0].toUpperCase() + t.slice(1), a = 0; a < le.length;) {
            if (n = le[a], (o = n ? n + r: t) in e) return o;
            a++
        }
        return i
    }
    function C() {
        return he++
    }
    function T(e) {
        var t = e.ownerDocument;
        return t.defaultView || t.parentWindow
    }
    function k(e, t) {
        var n = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            d(e.options.enable, [e]) && n.handler(t)
        },
        this.init()
    }
    function S(e) {
        var t = e.options.inputClass;
        return new(t ? t: ve ? H: be ? _: me ? V: M)(e, E)
    }
    function E(e, t, n) {
        var i = n.pointers.length,
        o = n.changedPointers.length,
        r = t & Ce && i - o == 0,
        a = t & (ke | Se) && i - o == 0;
        n.isFirst = !!r,
        n.isFinal = !!a,
        r && (e.session = {}),
        n.eventType = t,
        A(e, n),
        e.emit("hammer.input", n),
        e.recognize(n),
        e.session.prevInput = n
    }
    function A(e, t) {
        var n = e.session,
        i = t.pointers,
        o = i.length;
        n.firstInput || (n.firstInput = P(t)),
        o > 1 && !n.firstMultiple ? n.firstMultiple = P(t) : 1 === o && (n.firstMultiple = !1);
        var r = n.firstInput,
        a = n.firstMultiple,
        s = a ? a.center: r.center,
        l = t.center = j(i);
        t.timeStamp = pe(),
        t.deltaTime = t.timeStamp - r.timeStamp,
        t.angle = F(s, l),
        t.distance = q(s, l),
        D(n, t),
        t.offsetDirection = R(t.deltaX, t.deltaY),
        t.scale = a ? I(a.pointers, i) : 1,
        t.rotation = a ? L(a.pointers, i) : 0,
        N(n, t);
        var c = e.element;
        g(t.srcEvent.target, c) && (c = t.srcEvent.target),
        t.target = c
    }
    function D(e, t) {
        var n = t.center,
        i = e.offsetDelta || {},
        o = e.prevDelta || {},
        r = e.prevInput || {}; (t.eventType === Ce || r.eventType === ke) && (o = e.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        },
        i = e.offsetDelta = {
            x: n.x,
            y: n.y
        }),
        t.deltaX = o.x + (n.x - i.x),
        t.deltaY = o.y + (n.y - i.y)
    }
    function N(e, t) {
        var n, o, r, a, s = e.lastInterval || t,
        l = t.timeStamp - s.timeStamp;
        if (t.eventType != Se && (l > we || s.velocity === i)) {
            var c = s.deltaX - t.deltaX,
            u = s.deltaY - t.deltaY,
            d = O(l, c, u);
            o = d.x,
            r = d.y,
            n = fe(d.x) > fe(d.y) ? d.x: d.y,
            a = R(c, u),
            e.lastInterval = t
        } else n = s.velocity,
        o = s.velocityX,
        r = s.velocityY,
        a = s.direction;
        t.velocity = n,
        t.velocityX = o,
        t.velocityY = r,
        t.direction = a
    }
    function P(e) {
        for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
            clientX: de(e.pointers[n].clientX),
            clientY: de(e.pointers[n].clientY)
        },
        n++;
        return {
            timeStamp: pe(),
            pointers: t,
            center: j(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function j(e) {
        var t = e.length;
        if (1 === t) return {
            x: de(e[0].clientX),
            y: de(e[0].clientY)
        };
        for (var n = 0,
        i = 0,
        o = 0; t > o;) n += e[o].clientX,
        i += e[o].clientY,
        o++;
        return {
            x: de(n / t),
            y: de(i / t)
        }
    }
    function O(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }
    function R(e, t) {
        return e === t ? Ee: fe(e) >= fe(t) ? e > 0 ? Ae: De: t > 0 ? Ne: Pe
    }
    function q(e, t, n) {
        n || (n = qe);
        var i = t[n[0]] - e[n[0]],
        o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o)
    }
    function F(e, t, n) {
        n || (n = qe);
        var i = t[n[0]] - e[n[0]],
        o = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(o, i) / Math.PI
    }
    function L(e, t) {
        return F(t[1], t[0], Fe) - F(e[1], e[0], Fe)
    }
    function I(e, t) {
        return q(t[0], t[1], Fe) / q(e[0], e[1], Fe)
    }
    function M() {
        this.evEl = Ie,
        this.evWin = Me,
        this.allow = !0,
        this.pressed = !1,
        k.apply(this, arguments)
    }
    function H() {
        this.evEl = We,
        this.evWin = _e,
        k.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function z() {
        this.evTarget = Ve,
        this.evWin = $e,
        this.started = !1,
        k.apply(this, arguments)
    }
    function W(e, t) {
        var n = y(e.touches),
        i = y(e.changedTouches);
        return t & (ke | Se) && (n = x(n.concat(i), "identifier", !0)),
        [n, i]
    }
    function _() {
        this.evTarget = Xe,
        this.targetIds = {},
        k.apply(this, arguments)
    }
    function B(e, t) {
        var n = y(e.touches),
        i = this.targetIds;
        if (t & (Ce | Te) && 1 === n.length) return i[n[0].identifier] = !0,
        [n, n];
        var o, r, a = y(e.changedTouches),
        s = [],
        l = this.target;
        if (r = n.filter(function(e) {
            return g(e.target, l)
        }), t === Ce) for (o = 0; o < r.length;) i[r[o].identifier] = !0,
        o++;
        for (o = 0; o < a.length;) i[a[o].identifier] && s.push(a[o]),
        t & (ke | Se) && delete i[a[o].identifier],
        o++;
        return s.length ? [x(r.concat(s), "identifier", !0), s] : void 0
    }
    function V() {
        k.apply(this, arguments);
        var e = u(this.handler, this);
        this.touch = new _(this.manager, e),
        this.mouse = new M(this.manager, e)
    }
    function $(e, t) {
        this.manager = e,
        this.set(t)
    }
    function U(e) {
        if (m(e, Ze)) return Ze;
        var t = m(e, et),
        n = m(e, tt);
        return t && n ? et + " " + tt: t || n ? t ? et: tt: m(e, Ke) ? Ke: Je
    }
    function X(e) {
        this.id = C(),
        this.manager = null,
        this.options = l(e || {},
        this.defaults),
        this.options.enable = f(this.options.enable, !0),
        this.state = nt,
        this.simultaneous = {},
        this.requireFail = []
    }
    function Y(e) {
        return e & st ? "cancel": e & rt ? "end": e & ot ? "move": e & it ? "start": ""
    }
    function Q(e) {
        return e == Pe ? "down": e == Ne ? "up": e == Ae ? "left": e == De ? "right": ""
    }
    function G(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }
    function J() {
        X.apply(this, arguments)
    }
    function K() {
        J.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function Z() {
        J.apply(this, arguments)
    }
    function ee() {
        X.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function te() {
        J.apply(this, arguments)
    }
    function ne() {
        J.apply(this, arguments)
    }
    function ie() {
        X.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function oe(e, t) {
        return t = t || {},
        t.recognizers = f(t.recognizers, oe.defaults.preset),
        new re(e, t)
    }
    function re(e, t) {
        t = t || {},
        this.options = l(t, oe.defaults),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.element = e,
        this.input = S(this),
        this.touchAction = new $(this, this.options.touchAction),
        ae(this, !0),
        a(t.recognizers,
        function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        },
        this)
    }
    function ae(e, t) {
        var n = e.element;
        a(e.options.cssProps,
        function(e, i) {
            n.style[w(n.style, i)] = t ? e: ""
        })
    }
    function se(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0),
        i.gesture = n,
        n.target.dispatchEvent(i)
    }
    var le = ["", "webkit", "moz", "MS", "ms", "o"],
    ce = t.createElement("div"),
    ue = "function",
    de = Math.round,
    fe = Math.abs,
    pe = Date.now,
    he = 1,
    ge = /mobile|tablet|ip(ad|hone|od)|android/i,
    me = "ontouchstart" in e,
    ve = w(e, "PointerEvent") !== i,
    be = me && ge.test(navigator.userAgent),
    ye = "touch",
    xe = "mouse",
    we = 25,
    Ce = 1,
    Te = 2,
    ke = 4,
    Se = 8,
    Ee = 1,
    Ae = 2,
    De = 4,
    Ne = 8,
    Pe = 16,
    je = Ae | De,
    Oe = Ne | Pe,
    Re = je | Oe,
    qe = ["x", "y"],
    Fe = ["clientX", "clientY"];
    k.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler),
            this.evTarget && p(this.target, this.evTarget, this.domHandler),
            this.evWin && p(T(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler),
            this.evTarget && h(this.target, this.evTarget, this.domHandler),
            this.evWin && h(T(this.element), this.evWin, this.domHandler)
        }
    };
    var Le = {
        mousedown: Ce,
        mousemove: Te,
        mouseup: ke
    },
    Ie = "mousedown",
    Me = "mousemove mouseup";
    c(M, k, {
        handler: function(e) {
            var t = Le[e.type];
            t & Ce && 0 === e.button && (this.pressed = !0),
            t & Te && 1 !== e.which && (t = ke),
            this.pressed && this.allow && (t & ke && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: xe,
                srcEvent: e
            }))
        }
    });
    var He = {
        pointerdown: Ce,
        pointermove: Te,
        pointerup: ke,
        pointercancel: Se,
        pointerout: Se
    },
    ze = {
        2 : ye,
        3 : "pen",
        4 : xe,
        5 : "kinect"
    },
    We = "pointerdown",
    _e = "pointermove pointerup pointercancel";
    e.MSPointerEvent && (We = "MSPointerDown", _e = "MSPointerMove MSPointerUp MSPointerCancel"),
    c(H, k, {
        handler: function(e) {
            var t = this.store,
            n = !1,
            i = e.type.toLowerCase().replace("ms", ""),
            o = He[i],
            r = ze[e.pointerType] || e.pointerType,
            a = r == ye,
            s = b(t, e.pointerId, "pointerId");
            o & Ce && (0 === e.button || a) ? 0 > s && (t.push(e), s = t.length - 1) : o & (ke | Se) && (n = !0),
            0 > s || (t[s] = e, this.callback(this.manager, o, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
            }), n && t.splice(s, 1))
        }
    });
    var Be = {
        touchstart: Ce,
        touchmove: Te,
        touchend: ke,
        touchcancel: Se
    },
    Ve = "touchstart",
    $e = "touchstart touchmove touchend touchcancel";
    c(z, k, {
        handler: function(e) {
            var t = Be[e.type];
            if (t === Ce && (this.started = !0), this.started) {
                var n = W.call(this, e, t);
                t & (ke | Se) && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: ye,
                    srcEvent: e
                })
            }
        }
    });
    var Ue = {
        touchstart: Ce,
        touchmove: Te,
        touchend: ke,
        touchcancel: Se
    },
    Xe = "touchstart touchmove touchend touchcancel";
    c(_, k, {
        handler: function(e) {
            var t = Ue[e.type],
            n = B.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: ye,
                srcEvent: e
            })
        }
    }),
    c(V, k, {
        handler: function(e, t, n) {
            var i = n.pointerType == ye,
            o = n.pointerType == xe;
            if (i) this.mouse.allow = !1;
            else if (o && !this.mouse.allow) return;
            t & (ke | Se) && (this.mouse.allow = !0),
            this.callback(e, t, n)
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Ye = w(ce.style, "touchAction"),
    Qe = Ye !== i,
    Ge = "compute",
    Je = "auto",
    Ke = "manipulation",
    Ze = "none",
    et = "pan-x",
    tt = "pan-y";
    $.prototype = {
        set: function(e) {
            e == Ge && (e = this.compute()),
            Qe && (this.manager.element.style[Ye] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return a(this.manager.recognizers,
            function(t) {
                d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }),
            U(e.join(" "))
        },
        preventDefaults: function(e) {
            if (!Qe) {
                var t = e.srcEvent,
                n = e.offsetDirection;
                if (this.manager.session.prevented) return void t.preventDefault();
                var i = this.actions,
                o = m(i, Ze),
                r = m(i, tt),
                a = m(i, et);
                return o || r && n & je || a && n & Oe ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var nt = 1,
    it = 2,
    ot = 4,
    rt = 8,
    at = rt,
    st = 16;
    X.prototype = {
        defaults: {},
        set: function(e) {
            return s(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (r(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return e = G(e, this),
            t[e.id] || (t[e.id] = e, e.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(e) {
            return r(e, "dropRecognizeWith", this) ? this: (e = G(e, this), delete this.simultaneous[e.id], this)
        },
        requireFailure: function(e) {
            if (r(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return e = G(e, this),
            -1 === b(t, e) && (t.push(e), e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (r(e, "dropRequireFailure", this)) return this;
            e = G(e, this);
            var t = b(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !! this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                n.manager.emit(n.options.event + (t ? Y(i) : ""), e)
            }
            var n = this,
            i = this.state;
            rt > i && t(!0),
            t(),
            i >= rt && t(!0)
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void(this.state = 32)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
                if (! (this.requireFail[e].state & (32 | nt))) return ! 1;
                e++
            }
            return ! 0
        },
        recognize: function(e) {
            var t = s({},
            e);
            return d(this.options.enable, [this, t]) ? (this.state & (at | st | 32) && (this.state = nt), this.state = this.process(t), void(this.state & (it | ot | rt | st) && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    },
    c(J, X, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state,
            n = e.eventType,
            i = t & (it | ot),
            o = this.attrTest(e);
            return i && (n & Se || !o) ? t | st: i || o ? n & ke ? t | rt: t & it ? t | ot: it: 32
        }
    }),
    c(K, J, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Re
        },
        getTouchAction: function() {
            var e = this.options.direction,
            t = [];
            return e & je && t.push(tt),
            e & Oe && t.push(et),
            t
        },
        directionTest: function(e) {
            var t = this.options,
            n = !0,
            i = e.distance,
            o = e.direction,
            r = e.deltaX,
            a = e.deltaY;
            return o & t.direction || (t.direction & je ? (o = 0 === r ? Ee: 0 > r ? Ae: De, n = r != this.pX, i = Math.abs(e.deltaX)) : (o = 0 === a ? Ee: 0 > a ? Ne: Pe, n = a != this.pY, i = Math.abs(e.deltaY))),
            e.direction = o,
            n && i > t.threshold && o & t.direction
        },
        attrTest: function(e) {
            return J.prototype.attrTest.call(this, e) && (this.state & it || !(this.state & it) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = Q(e.direction);
            t && this.manager.emit(this.options.event + t, e),
            this._super.emit.call(this, e)
        }
    }),
    c(Z, J, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ze]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & it)
        },
        emit: function(e) {
            if (this._super.emit.call(this, e), 1 !== e.scale) {
                var t = e.scale < 1 ? "in": "out";
                this.manager.emit(this.options.event + t, e)
            }
        }
    }),
    c(ee, X, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Je]
        },
        process: function(e) {
            var t = this.options,
            n = e.pointers.length === t.pointers,
            i = e.distance < t.threshold,
            r = e.deltaTime > t.time;
            if (this._input = e, !i || !n || e.eventType & (ke | Se) && !r) this.reset();
            else if (e.eventType & Ce) this.reset(),
            this._timer = o(function() {
                this.state = at,
                this.tryEmit()
            },
            t.time, this);
            else if (e.eventType & ke) return at;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === at && (e && e.eventType & ke ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = pe(), this.manager.emit(this.options.event, this._input)))
        }
    }),
    c(te, J, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ze]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & it)
        }
    }),
    c(ne, J, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: je | Oe,
            pointers: 1
        },
        getTouchAction: function() {
            return K.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (je | Oe) ? t = e.velocity: n & je ? t = e.velocityX: n & Oe && (t = e.velocityY),
            this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && fe(t) > this.options.velocity && e.eventType & ke
        },
        emit: function(e) {
            var t = Q(e.direction);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    c(ie, X, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Ke]
        },
        process: function(e) {
            var t = this.options,
            n = e.pointers.length === t.pointers,
            i = e.distance < t.threshold,
            r = e.deltaTime < t.time;
            if (this.reset(), e.eventType & Ce && 0 === this.count) return this.failTimeout();
            if (i && r && n) {
                if (e.eventType != ke) return this.failTimeout();
                var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
                s = !this.pCenter || q(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp,
                this.pCenter = e.center,
                s && a ? this.count += 1 : this.count = 1,
                this._input = e;
                if (0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = o(function() {
                    this.state = at,
                    this.tryEmit()
                },
                t.interval, this), it) : at
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = o(function() {
                this.state = 32
            },
            this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == at && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }),
    oe.VERSION = "2.0.4",
    oe.defaults = {
        domEvents: !1,
        touchAction: Ge,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[te, {
            enable: !1
        }], [Z, {
            enable: !1
        },
        ["rotate"]], [ne, {
            direction: je
        }], [K, {
            direction: je
        },
        ["swipe"]], [ie], [ie, {
            event: "doubletap",
            taps: 2
        },
        ["tap"]], [ee]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    re.prototype = {
        set: function(e) {
            return s(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers,
                o = t.curRecognizer; (!o || o && o.state & at) && (o = t.curRecognizer = null);
                for (var r = 0; r < i.length;) n = i[r],
                2 === t.stopped || o && n != o && !n.canRecognizeWith(o) ? n.reset() : n.recognize(e),
                !o && n.state & (it | ot | rt) && (o = t.curRecognizer = n),
                r++
            }
        },
        get: function(e) {
            if (e instanceof X) return e;
            for (var t = this.recognizers,
            n = 0; n < t.length; n++) if (t[n].options.event == e) return t[n];
            return null
        },
        add: function(e) {
            if (r(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            e.manager = this,
            this.touchAction.update(),
            e
        },
        remove: function(e) {
            if (r(e, "remove", this)) return this;
            var t = this.recognizers;
            return e = this.get(e),
            t.splice(b(t, e), 1),
            this.touchAction.update(),
            this
        },
        on: function(e, t) {
            var n = this.handlers;
            return a(v(e),
            function(e) {
                n[e] = n[e] || [],
                n[e].push(t)
            }),
            this
        },
        off: function(e, t) {
            var n = this.handlers;
            return a(v(e),
            function(e) {
                t ? n[e].splice(b(n[e], t), 1) : delete n[e]
            }),
            this
        },
        emit: function(e, t) {
            this.options.domEvents && se(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e,
                t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                };
                for (var i = 0; i < n.length;) n[i](t),
                i++
            }
        },
        destroy: function() {
            this.element && ae(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    s(oe, {
        INPUT_START: Ce,
        INPUT_MOVE: Te,
        INPUT_END: ke,
        INPUT_CANCEL: Se,
        STATE_POSSIBLE: nt,
        STATE_BEGAN: it,
        STATE_CHANGED: ot,
        STATE_ENDED: rt,
        STATE_RECOGNIZED: at,
        STATE_CANCELLED: st,
        STATE_FAILED: 32,
        DIRECTION_NONE: Ee,
        DIRECTION_LEFT: Ae,
        DIRECTION_RIGHT: De,
        DIRECTION_UP: Ne,
        DIRECTION_DOWN: Pe,
        DIRECTION_HORIZONTAL: je,
        DIRECTION_VERTICAL: Oe,
        DIRECTION_ALL: Re,
        Manager: re,
        Input: k,
        TouchAction: $,
        TouchInput: _,
        MouseInput: M,
        PointerEventInput: H,
        TouchMouseInput: V,
        SingleTouchInput: z,
        Recognizer: X,
        AttrRecognizer: J,
        Tap: ie,
        Pan: K,
        Swipe: ne,
        Pinch: Z,
        Rotate: te,
        Press: ee,
        on: p,
        off: h,
        each: a,
        merge: l,
        extend: s,
        inherit: c,
        bindFn: u,
        prefixed: w
    }),
    typeof define == ue && define.amd ? define(function() {
        return oe
    }) : "undefined" != typeof module && module.exports ? module.exports = oe: e.Hammer = oe
} (window, document, "Hammer"),
function(e, t, n, i) {
    e.site = e.fn.site = function(i) {
        var o, r, a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1),
        d = e.isPlainObject(i) ? e.extend(!0, {},
        e.site.settings, i) : e.extend({},
        e.site.settings),
        f = d.namespace,
        p = d.error,
        h = "module-" + f,
        g = e(n),
        m = g,
        v = this,
        b = m.data(h);
        return o = {
            initialize: function() {
                o.instantiate()
            },
            instantiate: function() {
                o.verbose("Storing instance of site", o),
                b = o,
                m.data(h, o)
            },
            normalize: function() {
                o.fix.console(),
                o.fix.requestAnimationFrame()
            },
            fix: {
                console: function() {
                    o.debug("Normalizing window.console"),
                    void 0 !== console && void 0 !== console.log || (o.verbose("Console not available, normalizing events"), o.disable.console()),
                    void 0 !== console.group && void 0 !== console.groupEnd && void 0 !== console.groupCollapsed || (o.verbose("Console group not available, normalizing events"), t.console.group = function() {},
                    t.console.groupEnd = function() {},
                    t.console.groupCollapsed = function() {}),
                    void 0 === console.markTimeline && (o.verbose("Mark timeline not available, normalizing events"), t.console.markTimeline = function() {})
                },
                consoleClear: function() {
                    o.debug("Disabling programmatic console clearing"),
                    t.console.clear = function() {}
                },
                requestAnimationFrame: function() {
                    o.debug("Normalizing requestAnimationFrame"),
                    void 0 === t.requestAnimationFrame && (o.debug("RequestAnimationFrame not available, normalizing event"), t.requestAnimationFrame = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame ||
                    function(e) {
                        setTimeout(e, 0)
                    })
                }
            },
            moduleExists: function(t) {
                return void 0 !== e.fn[t] && void 0 !== e.fn[t].settings
            },
            enabled: {
                modules: function(t) {
                    var n = [];
                    return t = t || d.modules,
                    e.each(t,
                    function(e, t) {
                        o.moduleExists(t) && n.push(t)
                    }),
                    n
                }
            },
            disabled: {
                modules: function(t) {
                    var n = [];
                    return t = t || d.modules,
                    e.each(t,
                    function(e, t) {
                        o.moduleExists(t) || n.push(t)
                    }),
                    n
                }
            },
            change: {
                setting: function(t, n, i, r) {
                    i = "string" == typeof i ? "all" === i ? d.modules: [i] : i || d.modules,
                    r = void 0 === r || r,
                    e.each(i,
                    function(i, a) {
                        var s, l = !o.moduleExists(a) || (e.fn[a].settings.namespace || !1);
                        o.moduleExists(a) && (o.verbose("Changing default setting", t, n, a), e.fn[a].settings[t] = n, r && l && (s = e(":data(module-" + l + ")"), s.length > 0 && (o.verbose("Modifying existing settings", s), s[a]("setting", t, n))))
                    })
                },
                settings: function(t, n, i) {
                    n = "string" == typeof n ? [n] : n || d.modules,
                    i = void 0 === i || i,
                    e.each(n,
                    function(n, r) {
                        var a;
                        o.moduleExists(r) && (o.verbose("Changing default setting", t, r), e.extend(!0, e.fn[r].settings, t), i && f && (a = e(":data(module-" + f + ")"), a.length > 0 && (o.verbose("Modifying existing settings", a), a[r]("setting", t))))
                    })
                }
            },
            enable: {
                console: function() {
                    o.console(!0)
                },
                debug: function(e, t) {
                    e = e || d.modules,
                    o.debug("Enabling debug for modules", e),
                    o.change.setting("debug", !0, e, t)
                },
                verbose: function(e, t) {
                    e = e || d.modules,
                    o.debug("Enabling verbose debug for modules", e),
                    o.change.setting("verbose", !0, e, t)
                }
            },
            disable: {
                console: function() {
                    o.console(!1)
                },
                debug: function(e, t) {
                    e = e || d.modules,
                    o.debug("Disabling debug for modules", e),
                    o.change.setting("debug", !1, e, t)
                },
                verbose: function(e, t) {
                    e = e || d.modules,
                    o.debug("Disabling verbose debug for modules", e),
                    o.change.setting("verbose", !1, e, t)
                }
            },
            console: function(e) {
                if (e) {
                    if (void 0 === b.cache.console) return void o.error(p.console);
                    o.debug("Restoring console function"),
                    t.console = b.cache.console
                } else o.debug("Disabling console function"),
                b.cache.console = t.console,
                t.console = {
                    clear: function() {},
                    error: function() {},
                    group: function() {},
                    groupCollapsed: function() {},
                    groupEnd: function() {},
                    info: function() {},
                    log: function() {},
                    markTimeline: function() {},
                    warn: function() {}
                }
            },
            destroy: function() {
                o.verbose("Destroying previous site for", m),
                m.removeData(h)
            },
            cache: {},
            setting: function(t, n) {
                if (e.isPlainObject(t)) e.extend(!0, d, t);
                else {
                    if (void 0 === n) return d[t];
                    d[t] = n
                }
            },
            internal: function(t, n) {
                if (e.isPlainObject(t)) e.extend(!0, o, t);
                else {
                    if (void 0 === n) return o[t];
                    o[t] = n
                }
            },
            debug: function() {
                d.debug && (d.performance ? o.performance.log(arguments) : (o.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), o.debug.apply(console, arguments)))
            },
            verbose: function() {
                d.verbose && d.debug && (d.performance ? o.performance.log(arguments) : (o.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), o.verbose.apply(console, arguments)))
            },
            error: function() {
                o.error = Function.prototype.bind.call(console.error, console, d.name + ":"),
                o.error.apply(console, arguments)
            },
            performance: {
                log: function(e) {
                    var t, n, i;
                    d.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                        Element: v,
                        Name: e[0],
                        Arguments: [].slice.call(e, 1) || "",
                        "Execution Time": n
                    })),
                    clearTimeout(o.performance.timer),
                    o.performance.timer = setTimeout(o.performance.display, 500)
                },
                display: function() {
                    var t = d.name + ":",
                    n = 0;
                    a = !1,
                    clearTimeout(o.performance.timer),
                    e.each(s,
                    function(e, t) {
                        n += t["Execution Time"]
                    }),
                    t += " " + n + "ms",
                    (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                    function(e, t) {
                        console.log(t.Name + ": " + t["Execution Time"] + "ms")
                    }), console.groupEnd()),
                    s = []
                }
            },
            invoke: function(t, n, i) {
                var a, s, l, c = b;
                return n = n || u,
                i = v || i,
                "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t,
                function(n, i) {
                    var r = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                    if (e.isPlainObject(c[r]) && n != a) c = c[r];
                    else {
                        if (void 0 !== c[r]) return s = c[r],
                        !1;
                        if (!e.isPlainObject(c[i]) || n == a) return void 0 !== c[i] ? (s = c[i], !1) : (o.error(p.method, t), !1);
                        c = c[i]
                    }
                })),
                e.isFunction(s) ? l = s.apply(i, n) : void 0 !== s && (l = s),
                e.isArray(r) ? r.push(l) : void 0 !== r ? r = [r, l] : void 0 !== l && (r = l),
                s
            }
        },
        c ? (void 0 === b && o.initialize(), o.invoke(l)) : (void 0 !== b && o.destroy(), o.initialize()),
        void 0 !== r ? r: this
    },
    e.site.settings = {
        name: "Site",
        namespace: "site",
        error: {
            console: "Console cannot be restored, most likely it was overwritten outside of module",
            method: "The method you called is not defined."
        },
        debug: !1,
        verbose: !1,
        performance: !0,
        modules: ["accordion", "api", "checkbox", "dimmer", "dropdown", "embed", "form", "modal", "nag", "popup", "rating", "shape", "sidebar", "state", "sticky", "tab", "transition", "visit", "visibility"],
        siteNamespace: "site",
        namespaceStub: {
            cache: {},
            config: {},
            sections: {},
            section: {},
            utilities: {}
        }
    },
    e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !! e.data(n, t)
            }
        }) : function(t, n, i) {
            return !! e.data(t, i[3])
        }
    })
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.form = function(t) {
        var i, o = e(this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = arguments[1],
        u = "string" == typeof l,
        d = [].slice.call(arguments, 1);
        return o.each(function() {
            var f, p, h, g, m, v, b, y, x, w, C, T, k, S, E, A, D, N, P = e(this),
            j = this,
            O = [],
            R = !1;
            N = {
                initialize: function() {
                    N.get.settings(),
                    u ? (void 0 === D && N.instantiate(), N.invoke(l)) : (N.verbose("Initializing form validation", P, y), N.bindEvents(), N.set.defaults(), N.instantiate())
                },
                instantiate: function() {
                    N.verbose("Storing instance of module", N),
                    D = N,
                    P.data(E, N)
                },
                destroy: function() {
                    N.verbose("Destroying previous module", D),
                    N.removeEvents(),
                    P.removeData(E)
                },
                refresh: function() {
                    N.verbose("Refreshing selector cache"),
                    f = P.find(C.field),
                    p = P.find(C.group),
                    h = P.find(C.message),
                    g = P.find(C.prompt),
                    m = P.find(C.submit),
                    v = P.find(C.clear),
                    b = P.find(C.reset)
                },
                submit: function() {
                    N.verbose("Submitting form", P),
                    P.submit()
                },
                attachEvents: function(t, n) {
                    n = n || "submit",
                    e(t).on("click" + A,
                    function(e) {
                        N[n](),
                        e.preventDefault()
                    })
                },
                bindEvents: function() {
                    N.verbose("Attaching form events"),
                    P.on("submit" + A, N.validate.form).on("blur" + A, C.field, N.event.field.blur).on("click" + A, C.submit, N.submit).on("click" + A, C.reset, N.reset).on("click" + A, C.clear, N.clear),
                    y.keyboardShortcuts && P.on("keydown" + A, C.field, N.event.field.keydown),
                    f.each(function() {
                        var t = e(this),
                        n = t.prop("type"),
                        i = N.get.changeEvent(n, t);
                        e(this).on(i + A, N.event.field.change)
                    })
                },
                clear: function() {
                    f.each(function() {
                        var t = e(this),
                        n = t.parent(),
                        i = t.closest(p),
                        o = i.find(C.prompt),
                        r = t.data(w.defaultValue) || "",
                        a = n.is(C.uiCheckbox),
                        s = n.is(C.uiDropdown);
                        i.hasClass(T.error) && (N.verbose("Resetting error on field", i), i.removeClass(T.error), o.remove()),
                        s ? (N.verbose("Resetting dropdown value", n, r), n.dropdown("clear")) : a ? t.prop("checked", !1) : (N.verbose("Resetting field value", t, r), t.val(""))
                    })
                },
                reset: function() {
                    f.each(function() {
                        var t = e(this),
                        n = t.parent(),
                        i = t.closest(p),
                        o = i.find(C.prompt),
                        r = t.data(w.defaultValue),
                        a = n.is(C.uiCheckbox),
                        s = n.is(C.uiDropdown),
                        l = i.hasClass(T.error);
                        void 0 !== r && (l && (N.verbose("Resetting error on field", i), i.removeClass(T.error), o.remove()), s ? (N.verbose("Resetting dropdown value", n, r), n.dropdown("restore defaults")) : a ? (N.verbose("Resetting checkbox value", n, r), t.prop("checked", r)) : (N.verbose("Resetting field value", t, r), t.val(r)))
                    })
                },
                is: {
                    bracketedRule: function(e) {
                        return e.type && e.type.match(y.regExp.bracket)
                    },
                    valid: function() {
                        var t = !0;
                        return N.verbose("Checking if form is valid"),
                        e.each(x,
                        function(e, n) {
                            N.validate.field(n, e) || (t = !1)
                        }),
                        t
                    }
                },
                removeEvents: function() {
                    P.off(A),
                    f.off(A),
                    m.off(A),
                    f.off(A)
                },
                event: {
                    field: {
                        keydown: function(t) {
                            var n = e(this),
                            i = t.which,
                            o = {
                                enter: 13,
                                escape: 27
                            };
                            i == o.escape && (N.verbose("Escape key pressed blurring field"), n.blur()),
                            !t.ctrlKey && i == o.enter && n.is(C.input) && n.not(C.checkbox).length > 0 && (R || (n.one("keyup" + A, N.event.field.keyup), N.submit(), N.debug("Enter pressed on input submitting form")), R = !0)
                        },
                        keyup: function() {
                            R = !1
                        },
                        blur: function(t) {
                            var n = e(this),
                            i = n.closest(p),
                            o = N.get.validation(n);
                            i.hasClass(T.error) ? (N.debug("Revalidating field", n, o), N.validate.form.call(N, t, !0)) : "blur" != y.on && "change" != y.on || N.validate.field(o)
                        },
                        change: function(t) {
                            var n = e(this),
                            i = n.closest(p); ("change" == y.on || i.hasClass(T.error) && y.revalidate) && (clearTimeout(N.timer), N.timer = setTimeout(function() {
                                N.debug("Revalidating field", n, N.get.validation(n)),
                                N.validate.form.call(N, t, !0)
                            },
                            y.delay))
                        }
                    }
                },
                get: {
                    ancillaryValue: function(e) {
                        return ! (!e.type || !N.is.bracketedRule(e)) && e.type.match(y.regExp.bracket)[1] + ""
                    },
                    ruleName: function(e) {
                        return N.is.bracketedRule(e) ? e.type.replace(e.type.match(y.regExp.bracket)[0], "") : e.type
                    },
                    changeEvent: function(e, t) {
                        return "checkbox" == e || "radio" == e || "hidden" == e || t.is("select") ? "change": N.get.inputEvent()
                    },
                    inputEvent: function() {
                        return void 0 !== n.createElement("input").oninput ? "input": void 0 !== n.createElement("input").onpropertychange ? "propertychange": "keyup"
                    },
                    prompt: function(e, t) {
                        var n, i, o, r = N.get.ruleName(e),
                        a = N.get.ancillaryValue(e),
                        s = e.prompt || y.prompt[r] || y.text.unspecifiedRule,
                        l = s.search("{value}") !== -1,
                        c = s.search("{name}") !== -1;
                        return (c || l) && (i = N.get.field(t.identifier)),
                        l && (s = s.replace("{value}", i.val())),
                        c && (n = i.closest(C.group).find("label").eq(0), o = 1 == n.size() ? n.text() : i.prop("placeholder") || y.text.unspecifiedField, s = s.replace("{name}", o)),
                        s = s.replace("{identifier}", t.identifier),
                        s = s.replace("{ruleValue}", a),
                        e.prompt || N.verbose("Using default validation prompt for type", s, r),
                        s
                    },
                    settings: function() {
                        if (e.isPlainObject(t)) {
                            var n, i = Object.keys(t),
                            o = i.length > 0 && (void 0 !== t[i[0]].identifier && void 0 !== t[i[0]].rules);
                            o ? (y = e.extend(!0, {},
                            e.fn.form.settings, c), x = e.extend({},
                            e.fn.form.settings.defaults, t), N.error(y.error.oldSyntax, j), N.verbose("Extending settings from legacy parameters", x, y)) : (t.fields && (n = Object.keys(t.fields), ("string" == typeof t.fields[n[0]] || e.isArray(t.fields[n[0]])) && e.each(t.fields,
                            function(n, i) {
                                "string" == typeof i && (i = [i]),
                                t.fields[n] = {
                                    rules: []
                                },
                                e.each(i,
                                function(e, i) {
                                    t.fields[n].rules.push({
                                        type: i
                                    })
                                })
                            })), y = e.extend(!0, {},
                            e.fn.form.settings, t), x = e.extend({},
                            e.fn.form.settings.defaults, y.fields), N.verbose("Extending settings", x, y))
                        } else y = e.fn.form.settings,
                        x = e.fn.form.settings.defaults,
                        N.verbose("Using default form validation", x, y);
                        S = y.namespace,
                        w = y.metadata,
                        C = y.selector,
                        T = y.className,
                        k = y.error,
                        E = "module-" + S,
                        A = "." + S,
                        D = P.data(E),
                        N.refresh()
                    },
                    field: function(t) {
                        return N.verbose("Finding field with identifier", t),
                        f.filter("#" + t).length > 0 ? f.filter("#" + t) : f.filter('[name="' + t + '"]').length > 0 ? f.filter('[name="' + t + '"]') : f.filter('[name="' + t + '[]"]').length > 0 ? f.filter('[name="' + t + '[]"]') : f.filter("[data-" + w.validate + '="' + t + '"]').length > 0 ? f.filter("[data-" + w.validate + '="' + t + '"]') : e("<input/>")
                    },
                    fields: function(t) {
                        var n = e();
                        return e.each(t,
                        function(e, t) {
                            n = n.add(N.get.field(t))
                        }),
                        n
                    },
                    validation: function(t) {
                        var n, i;
                        return !! x && (e.each(x,
                        function(e, o) {
                            i = o.identifier || e,
                            N.get.field(i)[0] == t[0] && (o.identifier = i, n = o)
                        }), n || !1)
                    },
                    value: function(e) {
                        var t, n = [];
                        return n.push(e),
                        t = N.get.values.call(j, n),
                        t[e]
                    },
                    values: function(t) {
                        var n = e.isArray(t) ? N.get.fields(t) : f,
                        i = {};
                        return n.each(function(t, n) {
                            var o = e(n),
                            r = (o.prop("type"), o.prop("name")),
                            a = o.val(),
                            s = o.is(C.checkbox),
                            l = o.is(C.radio),
                            c = r.indexOf("[]") !== -1,
                            u = !!s && o.is(":checked");
                            r && (c ? (r = r.replace("[]", ""), i[r] || (i[r] = []), s ? u ? i[r].push(a || !0) : i[r].push(!1) : i[r].push(a)) : l ? u && (i[r] = a) : i[r] = s ? !!u && (a || !0) : a)
                        }),
                        i
                    }
                },
                has: {
                    field: function(e) {
                        return N.verbose("Checking for existence of a field with identifier", e),
                        "string" != typeof e && N.error(k.identifier, e),
                        f.filter("#" + e).length > 0 || (f.filter('[name="' + e + '"]').length > 0 || f.filter("[data-" + w.validate + '="' + e + '"]').length > 0)
                    }
                },
                add: {
                    prompt: function(t, n) {
                        var i = N.get.field(t),
                        o = i.closest(p),
                        r = o.children(C.prompt),
                        a = 0 !== r.length;
                        n = "string" == typeof n ? [n] : n,
                        N.verbose("Adding field error state", t),
                        o.addClass(T.error),
                        y.inline && (a || (r = y.templates.prompt(n), r.appendTo(o)), r.html(n[0]), a ? N.verbose("Inline errors are disabled, no inline error added", t) : y.transition && void 0 !== e.fn.transition && P.transition("is supported") ? (N.verbose("Displaying error with css transition", y.transition), r.transition(y.transition + " in", y.duration)) : (N.verbose("Displaying error with fallback javascript animation"), r.fadeIn(y.duration)))
                    },
                    errors: function(e) {
                        N.debug("Adding form error messages", e),
                        N.set.error(),
                        h.html(y.templates.error(e))
                    }
                },
                remove: {
                    prompt: function(t) {
                        var n = N.get.field(t),
                        i = n.closest(p),
                        o = i.children(C.prompt);
                        i.removeClass(T.error),
                        y.inline && o.is(":visible") && (N.verbose("Removing prompt for field", t), y.transition && void 0 !== e.fn.transition && P.transition("is supported") ? o.transition(y.transition + " out", y.duration,
                        function() {
                            o.remove()
                        }) : o.fadeOut(y.duration,
                        function() {
                            o.remove()
                        }))
                    }
                },
                set: {
                    success: function() {
                        P.removeClass(T.error).addClass(T.success)
                    },
                    defaults: function() {
                        f.each(function() {
                            var t = e(this),
                            n = t.filter(C.checkbox).length > 0,
                            i = n ? t.is(":checked") : t.val();
                            t.data(w.defaultValue, i)
                        })
                    },
                    error: function() {
                        P.removeClass(T.success).addClass(T.error)
                    },
                    value: function(e, t) {
                        var n = {};
                        return n[e] = t,
                        N.set.values.call(j, n)
                    },
                    values: function(t) {
                        e.isEmptyObject(t) || e.each(t,
                        function(t, n) {
                            var i, o = N.get.field(t),
                            r = o.parent(),
                            a = e.isArray(n),
                            s = r.is(C.uiCheckbox),
                            l = r.is(C.uiDropdown),
                            c = o.is(C.radio) && s,
                            u = o.length > 0;
                            u && (a && s ? (N.verbose("Selecting multiple", n, o), r.checkbox("uncheck"), e.each(n,
                            function(e, t) {
                                i = o.filter('[value="' + t + '"]'),
                                r = i.parent(),
                                i.length > 0 && r.checkbox("check")
                            })) : c ? (N.verbose("Selecting radio value", n, o), o.filter('[value="' + n + '"]').parent(C.uiCheckbox).checkbox("check")) : s ? (N.verbose("Setting checkbox value", n, r), n === !0 ? r.checkbox("check") : r.checkbox("uncheck")) : l ? (N.verbose("Setting dropdown value", n, r), r.dropdown("set selected", n)) : (N.verbose("Setting field value", n, o), o.val(n)))
                        })
                    }
                },
                validate: {
                    form: function(e, t) {
                        var n = N.get.values();
                        if (R) return ! 1;
                        if (O = [], N.is.valid()) {
                            if (N.debug("Form has no validation errors, submitting"), N.set.success(), t !== !0) return y.onSuccess.call(j, e, n)
                        } else if (N.debug("Form has errors"), N.set.error(), y.inline || N.add.errors(O), void 0 !== P.data("moduleApi") && e.stopImmediatePropagation(), t !== !0) return y.onFailure.call(j, O, n)
                    },
                    field: function(t, n) {
                        var i = t.identifier || n,
                        o = N.get.field(i),
                        r = !0,
                        a = [];
                        return t.identifier || (N.debug("Using field name as identifier", i), t.identifier = i),
                        o.prop("disabled") ? (N.debug("Field is disabled. Skipping", i), r = !0) : t.optional && "" === e.trim(o.val()) ? (N.debug("Field is optional and empty. Skipping", i), r = !0) : void 0 !== t.rules && e.each(t.rules,
                        function(e, n) {
                            N.has.field(i) && !N.validate.rule(t, n) && (N.debug("Field is invalid", i, n.type), a.push(N.get.prompt(n, t)), r = !1)
                        }),
                        r ? (N.remove.prompt(i, a), y.onValid.call(o), !0) : (O = O.concat(a), N.add.prompt(i, a), y.onInvalid.call(o, a), !1)
                    },
                    rule: function(t, n) {
                        var i = N.get.field(t.identifier),
                        o = (n.type, i.val()),
                        r = N.get.ancillaryValue(n),
                        a = N.get.ruleName(n),
                        s = y.rules[a];
                        return e.isFunction(s) ? (o = void 0 === o || "" === o || null === o ? "": e.trim(o + ""), s.call(i, o, r)) : void N.error(k.noRule, a)
                    }
                },
                setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, y, t);
                    else {
                        if (void 0 === n) return y[t];
                        y[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, N, t);
                    else {
                        if (void 0 === n) return N[t];
                        N[t] = n
                    }
                },
                debug: function() {
                    y.debug && (y.performance ? N.performance.log(arguments) : (N.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), N.debug.apply(console, arguments)))
                },
                verbose: function() {
                    y.verbose && y.debug && (y.performance ? N.performance.log(arguments) : (N.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), N.verbose.apply(console, arguments)))
                },
                error: function() {
                    N.error = Function.prototype.bind.call(console.error, console, y.name + ":"),
                    N.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        y.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: j,
                            "Execution Time": n
                        })),
                        clearTimeout(N.performance.timer),
                        N.performance.timer = setTimeout(N.performance.display, 500)
                    },
                    display: function() {
                        var t = y.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(N.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = D;
                    return n = n || d,
                    o = j || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            N.initialize()
        }),
        void 0 !== i ? i: this
    },
    e.fn.form.settings = {
        name: "Form",
        namespace: "form",
        debug: !1,
        verbose: !1,
        performance: !0,
        fields: !1,
        keyboardShortcuts: !0,
        on: "submit",
        inline: !1,
        delay: 200,
        revalidate: !0,
        transition: "scale",
        duration: 200,
        onValid: function() {},
        onInvalid: function() {},
        onSuccess: function() {
            return ! 0
        },
        onFailure: function() {
            return ! 1
        },
        metadata: {
            defaultValue: "default",
            validate: "validate"
        },
        regExp: {
            bracket: /\[(.*)\]/i,
            decimal: /^\-?\d*(\.\d+)?$/,
            email: "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
            escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
            flags: /^\/(.*)\/(.*)?/,
            integer: /^\-?\d+$/,
            number: /^\-?\d*(\.\d+)?$/,
            url: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
        },
        text: {
            unspecifiedRule: "Please enter a valid value",
            unspecifiedField: "This field"
        },
        prompt: {
            empty: "{name} must have a value",
            checked: "{name} must be checked",
            email: "{name} must be a valid e-mail",
            url: "{name} must be a valid url",
            regExp: "{name} is not formatted correctly",
            integer: "{name} must be an integer",
            decimal: "{name} must be a decimal number",
            number: "{name} must be set to a number",
            is: '{name} must be "{ruleValue}"',
            isExactly: '{name} must be exactly "{ruleValue}"',
            not: '{name} cannot be set to "{ruleValue}"',
            notExactly: '{name} cannot be set to exactly "{ruleValue}"',
            contain: '{name} cannot contain "{ruleValue}"',
            containExactly: '{name} cannot contain exactly "{ruleValue}"',
            doesntContain: '{name} must contain  "{ruleValue}"',
            doesntContainExactly: '{name} must contain exactly "{ruleValue}"',
            minLength: "{name} must be at least {ruleValue} characters",
            length: "{name} must be at least {ruleValue} characters",
            exactLength: "{name} must be exactly {ruleValue} characters",
            maxLength: "{name} cannot be longer than {ruleValue} characters",
            match: "{name} must match {ruleValue} field",
            different: "{name} must have a different value than {ruleValue} field",
            creditCard: "{name} must be a valid credit card number",
            minCount: "{name} must have at least {ruleValue} choices",
            exactCount: "{name} must have exactly {ruleValue} choices",
            maxCount: "{name} must have {ruleValue} or less choices"
        },
        selector: {
            checkbox: 'input[type="checkbox"], input[type="radio"]',
            clear: ".clear",
            field: "input, textarea, select",
            group: ".field",
            input: "input",
            message: ".error.message",
            prompt: ".prompt.label",
            radio: 'input[type="radio"]',
            reset: '.reset:not([type="reset"])',
            submit: '.submit:not([type="submit"])',
            uiCheckbox: ".ui.checkbox",
            uiDropdown: ".ui.dropdown"
        },
        className: {
            error: "error",
            label: "ui prompt label",
            pressed: "down",
            success: "success"
        },
        error: {
            identifier: "You must specify a string identifier for each field",
            method: "The method you called is not defined.",
            noRule: "There is no rule matching the one you specified",
            oldSyntax: "Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."
        },
        templates: {
            error: function(t) {
                var n = '<ul class="list">';
                return e.each(t,
                function(e, t) {
                    n += "<li>" + t + "</li>"
                }),
                n += "</ul>",
                e(n)
            },
            prompt: function(t) {
                return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])
            }
        },
        rules: {
            empty: function(t) {
                return ! (void 0 === t || "" === t || e.isArray(t) && 0 === t.length)
            },
            checked: function() {
                return e(this).filter(":checked").length > 0
            },
            email: function(t) {
                return new RegExp(e.fn.form.settings.regExp.email, "i").test(t)
            },
            url: function(t) {
                return e.fn.form.settings.regExp.url.test(t)
            },
            regExp: function(t, n) {
                var i, o = n.match(e.fn.form.settings.regExp.flags);
                return o && (n = o.length >= 2 ? o[1] : n, i = o.length >= 3 ? o[2] : ""),
                t.match(new RegExp(n, i))
            },
            integer: function(t, n) {
                var i, o, r, a = e.fn.form.settings.regExp.integer;
                return void 0 === n || "" === n || ".." === n || (n.indexOf("..") == -1 ? a.test(n) && (i = o = n - 0) : (r = n.split("..", 2), a.test(r[0]) && (i = r[0] - 0), a.test(r[1]) && (o = r[1] - 0))),
                a.test(t) && (void 0 === i || t >= i) && (void 0 === o || t <= o)
            },
            decimal: function(t) {
                return e.fn.form.settings.regExp.decimal.test(t)
            },
            number: function(t) {
                return e.fn.form.settings.regExp.number.test(t)
            },
            is: function(e, t) {
                return t = "string" == typeof t ? t.toLowerCase() : t,
                (e = "string" == typeof e ? e.toLowerCase() : e) == t
            },
            isExactly: function(e, t) {
                return e == t
            },
            not: function(e, t) {
                return e = "string" == typeof e ? e.toLowerCase() : e,
                t = "string" == typeof t ? t.toLowerCase() : t,
                e != t
            },
            notExactly: function(e, t) {
                return e != t
            },
            contains: function(t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"),
                t.search(new RegExp(n, "i")) !== -1
            },
            containsExactly: function(t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"),
                t.search(new RegExp(n)) !== -1
            },
            doesntContain: function(t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"),
                t.search(new RegExp(n, "i")) === -1
            },
            doesntContainExactly: function(t, n) {
                return n = n.replace(e.fn.form.settings.regExp.escape, "\\$&"),
                t.search(new RegExp(n)) === -1
            },
            minLength: function(e, t) {
                return void 0 !== e && e.length >= t
            },
            length: function(e, t) {
                return void 0 !== e && e.length >= t
            },
            exactLength: function(e, t) {
                return void 0 !== e && e.length == t
            },
            maxLength: function(e, t) {
                return void 0 !== e && e.length <= t
            },
            match: function(t, n) {
                var i;
                e(this);
                return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')),
                void 0 !== i && t.toString() == i.toString()
            },
            different: function(t, n) {
                var i;
                e(this);
                return e('[data-validate="' + n + '"]').length > 0 ? i = e('[data-validate="' + n + '"]').val() : e("#" + n).length > 0 ? i = e("#" + n).val() : e('[name="' + n + '"]').length > 0 ? i = e('[name="' + n + '"]').val() : e('[name="' + n + '[]"]').length > 0 && (i = e('[name="' + n + '[]"]')),
                void 0 !== i && t.toString() !== i.toString()
            },
            creditCard: function(t, n) {
                var i, o, r = {
                    visa: {
                        pattern: /^4/,
                        length: [16]
                    },
                    amex: {
                        pattern: /^3[47]/,
                        length: [15]
                    },
                    mastercard: {
                        pattern: /^5[1-5]/,
                        length: [16]
                    },
                    discover: {
                        pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
                        length: [16]
                    },
                    unionPay: {
                        pattern: /^(62|88)/,
                        length: [16, 17, 18, 19]
                    },
                    jcb: {
                        pattern: /^35(2[89]|[3-8][0-9])/,
                        length: [16]
                    },
                    maestro: {
                        pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
                        length: [12, 13, 14, 15, 16, 17, 18, 19]
                    },
                    dinersClub: {
                        pattern: /^(30[0-5]|^36)/,
                        length: [14]
                    },
                    laser: {
                        pattern: /^(6304|670[69]|6771)/,
                        length: [16, 17, 18, 19]
                    },
                    visaElectron: {
                        pattern: /^(4026|417500|4508|4844|491(3|7))/,
                        length: [16]
                    }
                },
                a = {},
                s = !1,
                l = "string" == typeof n && n.split(",");
                if ("string" == typeof t && 0 !== t.length) {
                    if (l && (e.each(l,
                    function(n, i) { (o = r[i]) && (a = {
                            length: e.inArray(t.length, o.length) !== -1,
                            pattern: t.search(o.pattern) !== -1
                        },
                        a.length && a.pattern && (s = !0))
                    }), !s)) return ! 1;
                    if (i = {
                        number: e.inArray(t.length, r.unionPay.length) !== -1,
                        pattern: t.search(r.unionPay.pattern) !== -1
                    },
                    i.number && i.pattern) return ! 0;
                    for (var c = t.length,
                    u = 0,
                    d = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]], f = 0; c--;) f += d[u][parseInt(t.charAt(c), 10)],
                    u ^= 1;
                    return f % 10 == 0 && f > 0
                }
            },
            minCount: function(e, t) {
                return 0 == t || (1 == t ? "" !== e: e.split(",").length >= t)
            },
            exactCount: function(e, t) {
                return 0 == t ? "" === e: 1 == t ? "" !== e && e.search(",") === -1 : e.split(",").length == t
            },
            maxCount: function(e, t) {
                return 0 != t && (1 == t ? e.search(",") === -1 : e.split(",").length <= t)
            }
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.accordion = function(n) {
        var i, o = e(this),
        r = (new Date).getTime(),
        a = [],
        s = arguments[0],
        l = "string" == typeof s,
        c = [].slice.call(arguments, 1);
        t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
        return o.each(function() {
            var u, d, f = e.isPlainObject(n) ? e.extend(!0, {},
            e.fn.accordion.settings, n) : e.extend({},
            e.fn.accordion.settings),
            p = f.className,
            h = f.namespace,
            g = f.selector,
            m = f.error,
            v = "." + h,
            b = "module-" + h,
            y = o.selector || "",
            x = e(this),
            w = x.find(g.title),
            C = x.find(g.content),
            T = this,
            k = x.data(b);
            d = {
                initialize: function() {
                    d.debug("Initializing", x),
                    d.bind.events(),
                    f.observeChanges && d.observeChanges(),
                    d.instantiate()
                },
                instantiate: function() {
                    k = d,
                    x.data(b, d)
                },
                destroy: function() {
                    d.debug("Destroying previous instance", x),
                    x.off(v).removeData(b)
                },
                refresh: function() {
                    w = x.find(g.title),
                    C = x.find(g.content)
                },
                observeChanges: function() {
                    "MutationObserver" in t && (u = new MutationObserver(function(e) {
                        d.debug("DOM tree modified, updating selector cache"),
                        d.refresh()
                    }), u.observe(T, {
                        childList: !0,
                        subtree: !0
                    }), d.debug("Setting up mutation observer", u))
                },
                bind: {
                    events: function() {
                        d.debug("Binding delegated events"),
                        x.on(f.on + v, g.trigger, d.event.click)
                    }
                },
                event: {
                    click: function() {
                        d.toggle.call(this)
                    }
                },
                toggle: function(t) {
                    var n = void 0 !== t ? "number" == typeof t ? w.eq(t) : e(t).closest(g.title) : e(this).closest(g.title),
                    i = n.next(C),
                    o = i.hasClass(p.animating),
                    r = i.hasClass(p.active),
                    a = r && !o,
                    s = !r && o;
                    d.debug("Toggling visibility of content", n),
                    a || s ? f.collapsible ? d.close.call(n) : d.debug("Cannot close accordion content collapsing is disabled") : d.open.call(n)
                },
                open: function(t) {
                    var n = void 0 !== t ? "number" == typeof t ? w.eq(t) : e(t).closest(g.title) : e(this).closest(g.title),
                    i = n.next(C),
                    o = i.hasClass(p.animating);
                    if (i.hasClass(p.active) || o) return void d.debug("Accordion already open, skipping", i);
                    d.debug("Opening accordion content", n),
                    f.onOpening.call(i),
                    f.exclusive && d.closeOthers.call(n),
                    n.addClass(p.active),
                    i.stop(!0, !0).addClass(p.animating),
                    f.animateChildren && (void 0 !== e.fn.transition && x.transition("is supported") ? i.children().transition({
                        animation: "fade in",
                        queue: !1,
                        useFailSafe: !0,
                        debug: f.debug,
                        verbose: f.verbose,
                        duration: f.duration
                    }) : i.children().stop(!0, !0).animate({
                        opacity: 1
                    },
                    f.duration, d.resetOpacity)),
                    i.slideDown(f.duration, f.easing,
                    function() {
                        i.removeClass(p.animating).addClass(p.active),
                        d.reset.display.call(this),
                        f.onOpen.call(this),
                        f.onChange.call(this)
                    })
                },
                close: function(t) {
                    var n = void 0 !== t ? "number" == typeof t ? w.eq(t) : e(t).closest(g.title) : e(this).closest(g.title),
                    i = n.next(C),
                    o = i.hasClass(p.animating),
                    r = i.hasClass(p.active),
                    a = !r && o,
                    s = r && o; ! r && !a || s || (d.debug("Closing accordion content", i), f.onClosing.call(i), n.removeClass(p.active), i.stop(!0, !0).addClass(p.animating), f.animateChildren && (void 0 !== e.fn.transition && x.transition("is supported") ? i.children().transition({
                        animation: "fade out",
                        queue: !1,
                        useFailSafe: !0,
                        debug: f.debug,
                        verbose: f.verbose,
                        duration: f.duration
                    }) : i.children().stop(!0, !0).animate({
                        opacity: 0
                    },
                    f.duration, d.resetOpacity)), i.slideUp(f.duration, f.easing,
                    function() {
                        i.removeClass(p.animating).removeClass(p.active),
                        d.reset.display.call(this),
                        f.onClose.call(this),
                        f.onChange.call(this)
                    }))
                },
                closeOthers: function(t) {
                    var n, i, o, r = void 0 !== t ? w.eq(t) : e(this).closest(g.title),
                    a = r.parents(g.content).prev(g.title),
                    s = r.closest(g.accordion),
                    l = g.title + "." + p.active + ":visible",
                    c = g.content + "." + p.active + ":visible";
                    f.closeNested ? (n = s.find(l).not(a), o = n.next(C)) : (n = s.find(l).not(a), i = s.find(c).find(l).not(a), n = n.not(i), o = n.next(C)),
                    n.length > 0 && (d.debug("Exclusive enabled, closing other content", n), n.removeClass(p.active), o.removeClass(p.animating).stop(!0, !0), f.animateChildren && (void 0 !== e.fn.transition && x.transition("is supported") ? o.children().transition({
                        animation: "fade out",
                        useFailSafe: !0,
                        debug: f.debug,
                        verbose: f.verbose,
                        duration: f.duration
                    }) : o.children().stop(!0, !0).animate({
                        opacity: 0
                    },
                    f.duration, d.resetOpacity)), o.slideUp(f.duration, f.easing,
                    function() {
                        e(this).removeClass(p.active),
                        d.reset.display.call(this)
                    }))
                },
                reset: {
                    display: function() {
                        d.verbose("Removing inline display from element", this),
                        e(this).css("display", ""),
                        "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                    },
                    opacity: function() {
                        d.verbose("Removing inline opacity from element", this),
                        e(this).css("opacity", ""),
                        "" === e(this).attr("style") && e(this).attr("style", "").removeAttr("style")
                    }
                },
                setting: function(t, n) {
                    if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (void 0 === n) return f[t];
                        f[t] = n
                    }
                },
                internal: function(t, n) {
                    if (d.debug("Changing internal", t, n), void 0 === n) return d[t];
                    e.isPlainObject(t) ? e.extend(!0, d, t) : d[t] = n
                },
                debug: function() {
                    f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                },
                verbose: function() {
                    f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                },
                error: function() {
                    d.error = Function.prototype.bind.call(console.error, console, f.name + ":"),
                    d.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        f.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, a.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: T,
                            "Execution Time": n
                        })),
                        clearTimeout(d.performance.timer),
                        d.performance.timer = setTimeout(d.performance.display, 500)
                    },
                    display: function() {
                        var t = f.name + ":",
                        n = 0;
                        r = !1,
                        clearTimeout(d.performance.timer),
                        e.each(a,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        y && (t += " '" + y + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        a = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = k;
                    return n = n || c,
                    o = T || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (d.error(m.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            l ? (void 0 === k && d.initialize(), d.invoke(s)) : (void 0 !== k && k.invoke("destroy"), d.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.accordion.settings = {
        name: "Accordion",
        namespace: "accordion",
        debug: !1,
        verbose: !1,
        performance: !0,
        on: "click",
        observeChanges: !0,
        exclusive: !0,
        collapsible: !0,
        closeNested: !1,
        animateChildren: !0,
        duration: 350,
        easing: "easeOutQuad",
        onOpening: function() {},
        onOpen: function() {},
        onClosing: function() {},
        onClose: function() {},
        onChange: function() {},
        error: {
            method: "The method you called is not defined"
        },
        className: {
            active: "active",
            animating: "animating"
        },
        selector: {
            accordion: ".accordion",
            title: ".title",
            trigger: ".title",
            content: ".content"
        }
    },
    e.extend(e.easing, {
        easeOutQuad: function(e, t, n, i, o) {
            return - i * (t /= o) * (t - 2) + n
        }
    })
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.checkbox = function(n) {
        var i, o = e(this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);
        return o.each(function() {
            var o, d, f = e.extend(!0, {},
            e.fn.checkbox.settings, n),
            p = f.className,
            h = f.namespace,
            g = f.selector,
            m = f.error,
            v = "." + h,
            b = "module-" + h,
            y = e(this),
            x = e(this).children(g.label),
            w = e(this).children(g.input),
            C = w[0],
            T = !1,
            k = !1,
            S = y.data(b),
            E = this;
            d = {
                initialize: function() {
                    d.verbose("Initializing checkbox", f),
                    d.create.label(),
                    d.bind.events(),
                    d.set.tabbable(),
                    d.hide.input(),
                    d.observeChanges(),
                    d.instantiate(),
                    d.setup()
                },
                instantiate: function() {
                    d.verbose("Storing instance of module", d),
                    S = d,
                    y.data(b, d)
                },
                destroy: function() {
                    d.verbose("Destroying module"),
                    d.unbind.events(),
                    d.show.input(),
                    y.removeData(b)
                },
                fix: {
                    reference: function() {
                        y.is(g.input) && (d.debug("Behavior called on <input> adjusting invoked element"), y = y.closest(g.checkbox), d.refresh())
                    }
                },
                setup: function() {
                    d.set.initialLoad(),
                    d.is.indeterminate() ? (d.debug("Initial value is indeterminate"), d.indeterminate()) : d.is.checked() ? (d.debug("Initial value is checked"), d.check()) : (d.debug("Initial value is unchecked"), d.uncheck()),
                    d.remove.initialLoad()
                },
                refresh: function() {
                    x = y.children(g.label),
                    w = y.children(g.input),
                    C = w[0]
                },
                hide: {
                    input: function() {
                        d.verbose("Modfying <input> z-index to be unselectable"),
                        w.addClass(p.hidden)
                    }
                },
                show: {
                    input: function() {
                        d.verbose("Modfying <input> z-index to be selectable"),
                        w.removeClass(p.hidden)
                    }
                },
                observeChanges: function() {
                    "MutationObserver" in t && (o = new MutationObserver(function(e) {
                        d.debug("DOM tree modified, updating selector cache"),
                        d.refresh()
                    }), o.observe(E, {
                        childList: !0,
                        subtree: !0
                    }), d.debug("Setting up mutation observer", o))
                },
                attachEvents: function(t, n) {
                    var i = e(t);
                    n = e.isFunction(d[n]) ? d[n] : d.toggle,
                    i.length > 0 ? (d.debug("Attaching checkbox events to element", t, n), i.on("click" + v, n)) : d.error(m.notFound)
                },
                event: {
                    click: function(t) {
                        var n = e(t.target);
                        return n.is(g.input) ? void d.verbose("Using default check action on initialized checkbox") : n.is(g.link) ? void d.debug("Clicking link inside checkbox, skipping toggle") : (d.toggle(), w.focus(), void t.preventDefault())
                    },
                    keydown: function(e) {
                        var t = e.which,
                        n = {
                            enter: 13,
                            space: 32,
                            escape: 27
                        };
                        t == n.escape ? (d.verbose("Escape key pressed blurring field"), w.blur(), k = !0) : e.ctrlKey || t != n.space && t != n.enter ? k = !1 : (d.verbose("Enter/space key pressed, toggling checkbox"), d.toggle(), k = !0)
                    },
                    keyup: function(e) {
                        k && e.preventDefault()
                    }
                },
                check: function() {
                    d.should.allowCheck() && (d.debug("Checking checkbox", w), d.set.checked(), d.should.ignoreCallbacks() || (f.onChecked.call(C), f.onChange.call(C)))
                },
                uncheck: function() {
                    d.should.allowUncheck() && (d.debug("Unchecking checkbox"), d.set.unchecked(), d.should.ignoreCallbacks() || (f.onUnchecked.call(C), f.onChange.call(C)))
                },
                indeterminate: function() {
                    if (d.should.allowIndeterminate()) return void d.debug("Checkbox is already indeterminate");
                    d.debug("Making checkbox indeterminate"),
                    d.set.indeterminate(),
                    d.should.ignoreCallbacks() || (f.onIndeterminate.call(C), f.onChange.call(C))
                },
                determinate: function() {
                    if (d.should.allowDeterminate()) return void d.debug("Checkbox is already determinate");
                    d.debug("Making checkbox determinate"),
                    d.set.determinate(),
                    d.should.ignoreCallbacks() || (f.onDeterminate.call(C), f.onChange.call(C))
                },
                enable: function() {
                    if (d.is.enabled()) return void d.debug("Checkbox is already enabled");
                    d.debug("Enabling checkbox"),
                    d.set.enabled(),
                    f.onEnable.call(C)
                },
                disable: function() {
                    if (d.is.disabled()) return void d.debug("Checkbox is already disabled");
                    d.debug("Disabling checkbox"),
                    d.set.disabled(),
                    f.onDisable.call(C)
                },
                get: {
                    radios: function() {
                        return e('input[name="' + d.get.name() + '"]').closest(g.checkbox)
                    },
                    otherRadios: function() {
                        return d.get.radios().not(y)
                    },
                    name: function() {
                        return w.attr("name")
                    }
                },
                is: {
                    initialLoad: function() {
                        return T
                    },
                    radio: function() {
                        return w.hasClass(p.radio) || "radio" == w.attr("type")
                    },
                    indeterminate: function() {
                        return void 0 !== w.prop("indeterminate") && w.prop("indeterminate")
                    },
                    checked: function() {
                        return void 0 !== w.prop("checked") && w.prop("checked")
                    },
                    disabled: function() {
                        return void 0 !== w.prop("disabled") && w.prop("disabled")
                    },
                    enabled: function() {
                        return ! d.is.disabled()
                    },
                    determinate: function() {
                        return ! d.is.indeterminate()
                    },
                    unchecked: function() {
                        return ! d.is.checked()
                    }
                },
                should: {
                    allowCheck: function() {
                        return d.is.determinate() && d.is.checked() && !d.should.forceCallbacks() ? (d.debug("Should not allow check, checkbox is already checked"), !1) : f.beforeChecked.apply(C) !== !1 || (d.debug("Should not allow check, beforeChecked cancelled"), !1)
                    },
                    allowUncheck: function() {
                        return d.is.determinate() && d.is.unchecked() && !d.should.forceCallbacks() ? (d.debug("Should not allow uncheck, checkbox is already unchecked"), !1) : f.beforeUnchecked.apply(C) !== !1 || (d.debug("Should not allow uncheck, beforeUnchecked cancelled"), !1)
                    },
                    allowIndeterminate: function() {
                        return d.is.indeterminate() && !d.should.forceCallbacks() ? (d.debug("Should not allow indeterminate, checkbox is already indeterminate"), !1) : f.beforeIndeterminate.apply(C) !== !1 || (d.debug("Should not allow indeterminate, beforeIndeterminate cancelled"), !1)
                    },
                    allowDeterminate: function() {
                        return d.is.determinate() && !d.should.forceCallbacks() ? (d.debug("Should not allow determinate, checkbox is already determinate"), !1) : f.beforeDeterminate.apply(C) !== !1 || (d.debug("Should not allow determinate, beforeDeterminate cancelled"), !1)
                    },
                    forceCallbacks: function() {
                        return d.is.initialLoad() && f.fireOnInit
                    },
                    ignoreCallbacks: function() {
                        return T && !f.fireOnInit
                    }
                },
                can: {
                    change: function() {
                        return ! (y.hasClass(p.disabled) || y.hasClass(p.readOnly) || w.prop("disabled") || w.prop("readonly"))
                    },
                    uncheck: function() {
                        return "boolean" == typeof f.uncheckable ? f.uncheckable: !d.is.radio()
                    }
                },
                set: {
                    initialLoad: function() {
                        T = !0
                    },
                    checked: function() {
                        if (d.verbose("Setting class to checked"), y.removeClass(p.indeterminate).addClass(p.checked), d.is.radio() && d.uncheckOthers(), !d.is.indeterminate() && d.is.checked()) return void d.debug("Input is already checked, skipping input property change");
                        d.verbose("Setting state to checked", C),
                        w.prop("indeterminate", !1).prop("checked", !0),
                        d.trigger.change()
                    },
                    unchecked: function() {
                        if (d.verbose("Removing checked class"), y.removeClass(p.indeterminate).removeClass(p.checked), !d.is.indeterminate() && d.is.unchecked()) return void d.debug("Input is already unchecked");
                        d.debug("Setting state to unchecked"),
                        w.prop("indeterminate", !1).prop("checked", !1),
                        d.trigger.change()
                    },
                    indeterminate: function() {
                        if (d.verbose("Setting class to indeterminate"), y.addClass(p.indeterminate), d.is.indeterminate()) return void d.debug("Input is already indeterminate, skipping input property change");
                        d.debug("Setting state to indeterminate"),
                        w.prop("indeterminate", !0),
                        d.trigger.change()
                    },
                    determinate: function() {
                        if (d.verbose("Removing indeterminate class"), y.removeClass(p.indeterminate), d.is.determinate()) return void d.debug("Input is already determinate, skipping input property change");
                        d.debug("Setting state to determinate"),
                        w.prop("indeterminate", !1)
                    },
                    disabled: function() {
                        if (d.verbose("Setting class to disabled"), y.addClass(p.disabled), d.is.disabled()) return void d.debug("Input is already disabled, skipping input property change");
                        d.debug("Setting state to disabled"),
                        w.prop("disabled", "disabled"),
                        d.trigger.change()
                    },
                    enabled: function() {
                        if (d.verbose("Removing disabled class"), y.removeClass(p.disabled), d.is.enabled()) return void d.debug("Input is already enabled, skipping input property change");
                        d.debug("Setting state to enabled"),
                        w.prop("disabled", !1),
                        d.trigger.change()
                    },
                    tabbable: function() {
                        d.verbose("Adding tabindex to checkbox"),
                        void 0 === w.attr("tabindex") && w.attr("tabindex", 0)
                    }
                },
                remove: {
                    initialLoad: function() {
                        T = !1
                    }
                },
                trigger: {
                    change: function() {
                        d.verbose("Triggering change event from programmatic change"),
                        w.trigger("change")
                    }
                },
                create: {
                    label: function() {
                        w.prevAll(g.label).length > 0 ? (w.prev(g.label).detach().insertAfter(w), d.debug("Moving existing label", x)) : d.has.label() || (x = e("<label>").insertAfter(w), d.debug("Creating label", x))
                    }
                },
                has: {
                    label: function() {
                        return x.length > 0
                    }
                },
                bind: {
                    events: function() {
                        d.verbose("Attaching checkbox events"),
                        y.on("click" + v, d.event.click).on("keydown" + v, g.input, d.event.keydown).on("keyup" + v, g.input, d.event.keyup)
                    }
                },
                unbind: {
                    events: function() {
                        d.debug("Removing events"),
                        y.off(v)
                    }
                },
                uncheckOthers: function() {
                    var e = d.get.otherRadios();
                    d.debug("Unchecking other radios", e),
                    e.removeClass(p.checked)
                },
                toggle: function() {
                    if (!d.can.change()) return void(d.is.radio() || d.debug("Checkbox is read-only or disabled, ignoring toggle"));
                    d.is.indeterminate() || d.is.unchecked() ? (d.debug("Currently unchecked"), d.check()) : d.is.checked() && d.can.uncheck() && (d.debug("Currently checked"), d.uncheck())
                },
                setting: function(t, n) {
                    if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (void 0 === n) return f[t];
                        f[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (void 0 === n) return d[t];
                        d[t] = n
                    }
                },
                debug: function() {
                    f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                },
                verbose: function() {
                    f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                },
                error: function() {
                    d.error = Function.prototype.bind.call(console.error, console, f.name + ":"),
                    d.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: E,
                            "Execution Time": n
                        })),
                        clearTimeout(d.performance.timer),
                        d.performance.timer = setTimeout(d.performance.display, 500)
                    },
                    display: function() {
                        var t = f.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(d.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = S;
                    return n = n || u,
                    o = E || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (d.error(m.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            c ? (void 0 === S && d.initialize(), d.invoke(l)) : (void 0 !== S && S.invoke("destroy"), d.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.checkbox.settings = {
        name: "Checkbox",
        namespace: "checkbox",
        debug: !1,
        verbose: !0,
        performance: !0,
        uncheckable: "auto",
        fireOnInit: !1,
        onChange: function() {},
        beforeChecked: function() {},
        beforeUnchecked: function() {},
        beforeDeterminate: function() {},
        beforeIndeterminate: function() {},
        onChecked: function() {},
        onUnchecked: function() {},
        onDeterminate: function() {},
        onIndeterminate: function() {},
        onEnabled: function() {},
        onDisabled: function() {},
        className: {
            checked: "checked",
            indeterminate: "indeterminate",
            disabled: "disabled",
            hidden: "hidden",
            radio: "radio",
            readOnly: "read-only"
        },
        error: {
            method: "The method you called is not defined"
        },
        selector: {
            checkbox: ".ui.checkbox",
            label: "label, .box",
            input: 'input[type="checkbox"], input[type="radio"]',
            link: "a[href]"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.dimmer = function(t) {
        var i, o = e(this),
        r = (new Date).getTime(),
        a = [],
        s = arguments[0],
        l = "string" == typeof s,
        c = [].slice.call(arguments, 1);
        return o.each(function() {
            var u, d, f, p = e.isPlainObject(t) ? e.extend(!0, {},
            e.fn.dimmer.settings, t) : e.extend({},
            e.fn.dimmer.settings),
            h = p.selector,
            g = p.namespace,
            m = p.className,
            v = p.error,
            b = "." + g,
            y = "module-" + g,
            x = o.selector || "",
            w = "ontouchstart" in n.documentElement ? "touchstart": "click",
            C = e(this),
            T = this,
            k = C.data(y);
            f = {
                preinitialize: function() {
                    f.is.dimmer() ? (d = C.parent(), u = C) : (d = C, u = f.has.dimmer() ? p.dimmerName ? d.find(h.dimmer).filter("." + p.dimmerName) : d.find(h.dimmer) : f.create())
                },
                initialize: function() {
                    f.debug("Initializing dimmer", p),
                    f.bind.events(),
                    f.set.dimmable(),
                    f.instantiate()
                },
                instantiate: function() {
                    f.verbose("Storing instance of module", f),
                    k = f,
                    C.data(y, k)
                },
                destroy: function() {
                    f.verbose("Destroying previous module", u),
                    f.unbind.events(),
                    f.remove.variation(),
                    d.off(b)
                },
                bind: {
                    events: function() {
                        "hover" == p.on ? d.on("mouseenter" + b, f.show).on("mouseleave" + b, f.hide) : "click" == p.on && d.on(w + b, f.toggle),
                        f.is.page() && (f.debug("Setting as a page dimmer", d), f.set.pageDimmer()),
                        f.is.closable() && (f.verbose("Adding dimmer close event", u), d.on(w + b, h.dimmer, f.event.click))
                    }
                },
                unbind: {
                    events: function() {
                        C.removeData(y)
                    }
                },
                event: {
                    click: function(t) {
                        f.verbose("Determining if event occured on dimmer", t),
                        (0 === u.find(t.target).length || e(t.target).is(h.content)) && (f.hide(), t.stopImmediatePropagation())
                    }
                },
                addContent: function(t) {
                    var n = e(t);
                    f.debug("Add content to dimmer", n),
                    n.parent()[0] !== u[0] && n.detach().appendTo(u)
                },
                create: function() {
                    var t = e(p.template.dimmer());
                    return p.variation && (f.debug("Creating dimmer with variation", p.variation), t.addClass(p.variation)),
                    p.dimmerName && (f.debug("Creating named dimmer", p.dimmerName), t.addClass(p.dimmerName)),
                    t.appendTo(d),
                    t
                },
                show: function(t) {
                    t = e.isFunction(t) ? t: function() {},
                    f.debug("Showing dimmer", u, p),
                    f.is.dimmed() && !f.is.animating() || !f.is.enabled() ? f.debug("Dimmer is already shown or disabled") : (f.animate.show(t), p.onShow.call(T), p.onChange.call(T))
                },
                hide: function(t) {
                    t = e.isFunction(t) ? t: function() {},
                    f.is.dimmed() || f.is.animating() ? (f.debug("Hiding dimmer", u), f.animate.hide(t), p.onHide.call(T), p.onChange.call(T)) : f.debug("Dimmer is not visible")
                },
                toggle: function() {
                    f.verbose("Toggling dimmer visibility", u),
                    f.is.dimmed() ? f.hide() : f.show()
                },
                animate: {
                    show: function(t) {
                        t = e.isFunction(t) ? t: function() {},
                        p.useCSS && void 0 !== e.fn.transition && u.transition("is supported") ? ("auto" !== p.opacity && f.set.opacity(), u.transition({
                            animation: p.transition + " in",
                            queue: !1,
                            duration: f.get.duration(),
                            useFailSafe: !0,
                            onStart: function() {
                                f.set.dimmed()
                            },
                            onComplete: function() {
                                f.set.active(),
                                t()
                            }
                        })) : (f.verbose("Showing dimmer animation with javascript"), f.set.dimmed(), "auto" == p.opacity && (p.opacity = .8), u.stop().css({
                            opacity: 0,
                            width: "100%",
                            height: "100%"
                        }).fadeTo(f.get.duration(), p.opacity,
                        function() {
                            u.removeAttr("style"),
                            f.set.active(),
                            t()
                        }))
                    },
                    hide: function(t) {
                        t = e.isFunction(t) ? t: function() {},
                        p.useCSS && void 0 !== e.fn.transition && u.transition("is supported") ? (f.verbose("Hiding dimmer with css"), u.transition({
                            animation: p.transition + " out",
                            queue: !1,
                            duration: f.get.duration(),
                            useFailSafe: !0,
                            onStart: function() {
                                f.remove.dimmed()
                            },
                            onComplete: function() {
                                f.remove.active(),
                                t()
                            }
                        })) : (f.verbose("Hiding dimmer with javascript"), f.remove.dimmed(), u.stop().fadeOut(f.get.duration(),
                        function() {
                            f.remove.active(),
                            u.removeAttr("style"),
                            t()
                        }))
                    }
                },
                get: {
                    dimmer: function() {
                        return u
                    },
                    duration: function() {
                        return "object" == typeof p.duration ? f.is.active() ? p.duration.hide: p.duration.show: p.duration
                    }
                },
                has: {
                    dimmer: function() {
                        return p.dimmerName ? C.find(h.dimmer).filter("." + p.dimmerName).length > 0 : C.find(h.dimmer).length > 0
                    }
                },
                is: {
                    active: function() {
                        return u.hasClass(m.active)
                    },
                    animating: function() {
                        return u.is(":animated") || u.hasClass(m.animating)
                    },
                    closable: function() {
                        return "auto" == p.closable ? "hover" != p.on: p.closable
                    },
                    dimmer: function() {
                        return C.hasClass(m.dimmer)
                    },
                    dimmable: function() {
                        return C.hasClass(m.dimmable)
                    },
                    dimmed: function() {
                        return d.hasClass(m.dimmed)
                    },
                    disabled: function() {
                        return d.hasClass(m.disabled)
                    },
                    enabled: function() {
                        return ! f.is.disabled()
                    },
                    page: function() {
                        return d.is("body")
                    },
                    pageDimmer: function() {
                        return u.hasClass(m.pageDimmer)
                    }
                },
                can: {
                    show: function() {
                        return ! u.hasClass(m.disabled)
                    }
                },
                set: {
                    opacity: function(e) {
                        var t = u.css("background-color"),
                        n = t.split(","),
                        i = n && 4 == n.length;
                        e = p.opacity || e,
                        i ? (n[3] = e + ")", t = n.join(",")) : t = "rgba(0, 0, 0, " + e + ")",
                        f.debug("Setting opacity to", e),
                        u.css("background-color", t)
                    },
                    active: function() {
                        u.addClass(m.active)
                    },
                    dimmable: function() {
                        d.addClass(m.dimmable)
                    },
                    dimmed: function() {
                        d.addClass(m.dimmed)
                    },
                    pageDimmer: function() {
                        u.addClass(m.pageDimmer)
                    },
                    disabled: function() {
                        u.addClass(m.disabled)
                    },
                    variation: function(e) { (e = e || p.variation) && u.addClass(e)
                    }
                },
                remove: {
                    active: function() {
                        u.removeClass(m.active)
                    },
                    dimmed: function() {
                        d.removeClass(m.dimmed)
                    },
                    disabled: function() {
                        u.removeClass(m.disabled)
                    },
                    variation: function(e) { (e = e || p.variation) && u.removeClass(e)
                    }
                },
                setting: function(t, n) {
                    if (f.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                        if (void 0 === n) return p[t];
                        p[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (void 0 === n) return f[t];
                        f[t] = n
                    }
                },
                debug: function() {
                    p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)))
                },
                verbose: function() {
                    p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)))
                },
                error: function() {
                    f.error = Function.prototype.bind.call(console.error, console, p.name + ":"),
                    f.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        p.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, a.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: T,
                            "Execution Time": n
                        })),
                        clearTimeout(f.performance.timer),
                        f.performance.timer = setTimeout(f.performance.display, 500)
                    },
                    display: function() {
                        var t = p.name + ":",
                        n = 0;
                        r = !1,
                        clearTimeout(f.performance.timer),
                        e.each(a,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        x && (t += " '" + x + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group || void 0 !== console.table) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        a = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = k;
                    return n = n || c,
                    o = T || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (f.error(v.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            f.preinitialize(),
            l ? (void 0 === k && f.initialize(), f.invoke(s)) : (void 0 !== k && k.invoke("destroy"), f.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.dimmer.settings = {
        name: "Dimmer",
        namespace: "dimmer",
        debug: !1,
        verbose: !1,
        performance: !0,
        dimmerName: !1,
        variation: !1,
        closable: "auto",
        useCSS: !0,
        transition: "fade",
        on: !1,
        opacity: "auto",
        duration: {
            show: 500,
            hide: 500
        },
        onChange: function() {},
        onShow: function() {},
        onHide: function() {},
        error: {
            method: "The method you called is not defined."
        },
        className: {
            active: "active",
            animating: "animating",
            dimmable: "dimmable",
            dimmed: "dimmed",
            dimmer: "dimmer",
            disabled: "disabled",
            hide: "hide",
            pageDimmer: "page",
            show: "show"
        },
        selector: {
            dimmer: "> .ui.dimmer",
            content: ".ui.dimmer > .content, .ui.dimmer > .content > .center"
        },
        template: {
            dimmer: function() {
                return e("<div />").attr("class", "ui dimmer")
            }
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.dropdown = function(i) {
        var o, r = e(this),
        a = e(n),
        s = r.selector || "",
        l = "ontouchstart" in n.documentElement,
        c = (new Date).getTime(),
        u = [],
        d = arguments[0],
        f = "string" == typeof d,
        p = [].slice.call(arguments, 1);
        return r.each(function(h) {
            var g, m, v, b, y, x, w, C = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.dropdown.settings, i) : e.extend({},
            e.fn.dropdown.settings),
            T = C.className,
            k = C.message,
            S = C.fields,
            E = C.metadata,
            A = C.namespace,
            D = C.regExp,
            N = C.selector,
            P = C.error,
            j = C.templates,
            O = "." + A,
            R = "module-" + A,
            q = e(this),
            F = e(C.context),
            L = q.find(N.text),
            I = q.find(N.search),
            M = q.find(N.input),
            H = q.find(N.icon),
            z = q.prev().find(N.text).length > 0 ? q.prev().find(N.text) : q.prev(),
            W = q.children(N.menu),
            _ = W.find(N.item),
            B = !1,
            V = !1,
            $ = !1,
            U = this,
            X = q.data(R);
            w = {
                initialize: function() {
                    w.debug("Initializing dropdown", C),
                    w.is.alreadySetup() ? w.setup.reference() : (w.setup.layout(), w.refreshData(), w.save.defaults(), w.restore.selected(), w.create.id(), w.bind.events(), w.observeChanges(), w.instantiate())
                },
                instantiate: function() {
                    w.verbose("Storing instance of dropdown", w),
                    X = w,
                    q.data(R, w)
                },
                destroy: function() {
                    w.verbose("Destroying previous dropdown", q),
                    w.remove.tabbable(),
                    q.off(O).removeData(R),
                    W.off(O),
                    a.off(v),
                    y && y.disconnect(),
                    x && x.disconnect()
                },
                observeChanges: function() {
                    "MutationObserver" in t && (y = new MutationObserver(function(e) {
                        w.debug("<select> modified, recreating menu"),
                        w.setup.select()
                    }), x = new MutationObserver(function(e) {
                        w.debug("Menu modified, updating selector cache"),
                        w.refresh()
                    }), w.has.input() && y.observe(M[0], {
                        childList: !0,
                        subtree: !0
                    }), w.has.menu() && x.observe(W[0], {
                        childList: !0,
                        subtree: !0
                    }), w.debug("Setting up mutation observer", y, x))
                },
                create: {
                    id: function() {
                        b = (Math.random().toString(16) + "000000000").substr(2, 8),
                        v = "." + b,
                        w.verbose("Creating unique id for element", b)
                    },
                    userChoice: function(t) {
                        var n, i, o;
                        return !! (t = t || w.get.userValues()) && (t = e.isArray(t) ? t: [t], e.each(t,
                        function(t, r) {
                            w.get.item(r) === !1 && (o = C.templates.addition(w.add.variables(k.addResult, r)), i = e("<div />").html(o).attr("data-" + E.value, r).attr("data-" + E.text, r).addClass(T.addition).addClass(T.item), n = void 0 === n ? i: n.add(i), w.verbose("Creating user choices for value", r, i))
                        }), n)
                    },
                    userLabels: function(t) {
                        var n = w.get.userValues();
                        n && (w.debug("Adding user labels", n), e.each(n,
                        function(e, t) {
                            w.verbose("Adding custom user value"),
                            w.add.label(t, t)
                        }))
                    },
                    menu: function() {
                        W = e("<div />").addClass(T.menu).appendTo(q)
                    }
                },
                search: function(e) {
                    e = void 0 !== e ? e: w.get.query(),
                    w.verbose("Searching for query", e),
                    w.filter(e)
                },
                select: {
                    firstUnfiltered: function() {
                        w.verbose("Selecting first non-filtered element"),
                        w.remove.selectedItem(),
                        _.not(N.unselectable).eq(0).addClass(T.selected)
                    },
                    nextAvailable: function(e) {
                        e = e.eq(0);
                        var t = e.nextAll(N.item).not(N.unselectable).eq(0),
                        n = e.prevAll(N.item).not(N.unselectable).eq(0);
                        t.length > 0 ? (w.verbose("Moving selection to", t), t.addClass(T.selected)) : (w.verbose("Moving selection to", n), n.addClass(T.selected))
                    }
                },
                setup: {
                    api: function() {
                        var e = {
                            debug: C.debug,
                            on: !1
                        };
                        w.verbose("First request, initializing API"),
                        q.api(e)
                    },
                    layout: function() {
                        q.is("select") && (w.setup.select(), w.setup.returnedObject()),
                        w.has.menu() || w.create.menu(),
                        w.is.search() && !w.has.search() && (w.verbose("Adding search input"), I = e("<input />").addClass(T.search).insertBefore(L)),
                        C.allowTab && w.set.tabbable()
                    },
                    select: function() {
                        var t = w.get.selectValues();
                        w.debug("Dropdown initialized on a select", t),
                        q.is("select") && (M = q),
                        M.parent(N.dropdown).length > 0 ? (w.debug("UI dropdown already exists. Creating dropdown menu only"), q = M.closest(N.dropdown), w.has.menu() || w.create.menu(), W = q.children(N.menu), w.setup.menu(t)) : (w.debug("Creating entire dropdown from select"), q = e("<div />").attr("class", M.attr("class")).addClass(T.selection).addClass(T.dropdown).html(j.dropdown(t)).insertBefore(M), M.hasClass(T.multiple) && M.prop("multiple") === !1 && (w.error(P.missingMultiple), M.prop("multiple", !0)), M.is("[multiple]") && w.set.multiple(), M.prop("disabled") && (w.debug("Disabling dropdown"), q.addClass(T.disabled)), M.removeAttr("class").detach().prependTo(q)),
                        w.refresh()
                    },
                    menu: function(e) {
                        W.html(j.menu(e, S)),
                        _ = W.find(N.item)
                    },
                    reference: function() {
                        w.debug("Dropdown behavior was called on select, replacing with closest dropdown"),
                        q = q.parent(N.dropdown),
                        w.refresh(),
                        w.setup.returnedObject(),
                        f && (X = w, w.invoke(d))
                    },
                    returnedObject: function() {
                        var e = r.slice(0, h),
                        t = r.slice(h + 1);
                        r = e.add(q).add(t)
                    }
                },
                refresh: function() {
                    w.refreshSelectors(),
                    w.refreshData()
                },
                refreshSelectors: function() {
                    w.verbose("Refreshing selector cache"),
                    L = q.find(N.text),
                    I = q.find(N.search),
                    M = q.find(N.input),
                    H = q.find(N.icon),
                    z = q.prev().find(N.text).length > 0 ? q.prev().find(N.text) : q.prev(),
                    W = q.children(N.menu),
                    _ = W.find(N.item)
                },
                refreshData: function() {
                    w.verbose("Refreshing cached metadata"),
                    _.removeData(E.text).removeData(E.value),
                    q.removeData(E.defaultText).removeData(E.defaultValue).removeData(E.placeholderText)
                },
                toggle: function() {
                    w.verbose("Toggling menu visibility"),
                    w.is.active() ? w.hide() : w.show()
                },
                show: function(t) {
                    if (t = e.isFunction(t) ? t: function() {},
                    w.can.show() && !w.is.active()) {
                        if (w.debug("Showing dropdown"), w.is.multiple() && !w.has.search() && w.is.allFiltered()) return ! 0;
                        w.has.message() && !w.has.maxSelections() && w.remove.message(),
                        C.onShow.call(U) !== !1 && w.animate.show(function() {
                            w.can.click() && w.bind.intent(),
                            w.set.visible(),
                            t.call(U)
                        })
                    }
                },
                hide: function(t) {
                    t = e.isFunction(t) ? t: function() {},
                    w.is.active() && (w.debug("Hiding dropdown"), C.onHide.call(U) !== !1 && w.animate.hide(function() {
                        w.remove.visible(),
                        t.call(U)
                    }))
                },
                hideOthers: function() {
                    w.verbose("Finding other dropdowns to hide"),
                    r.not(q).has(N.menu + "." + T.visible).dropdown("hide")
                },
                hideMenu: function() {
                    w.verbose("Hiding menu  instantaneously"),
                    w.remove.active(),
                    w.remove.visible(),
                    W.transition("hide")
                },
                hideSubMenus: function() {
                    var e = W.children(N.item).find(N.menu);
                    w.verbose("Hiding sub menus", e),
                    e.transition("hide")
                },
                bind: {
                    events: function() {
                        l && w.bind.touchEvents(),
                        w.bind.keyboardEvents(),
                        w.bind.inputEvents(),
                        w.bind.mouseEvents()
                    },
                    touchEvents: function() {
                        w.debug("Touch device detected binding additional touch events"),
                        w.is.searchSelection() || w.is.single() && q.on("touchstart" + O, w.event.test.toggle),
                        W.on("touchstart" + O, N.item, w.event.item.mouseenter)
                    },
                    keyboardEvents: function() {
                        w.verbose("Binding keyboard events"),
                        q.on("keydown" + O, w.event.keydown),
                        w.has.search() && q.on(w.get.inputEvent() + O, N.search, w.event.input),
                        w.is.multiple() && a.on("keydown" + v, w.event.document.keydown)
                    },
                    inputEvents: function() {
                        w.verbose("Binding input change events"),
                        q.on("change" + O, N.input, w.event.change)
                    },
                    mouseEvents: function() {
                        w.verbose("Binding mouse events"),
                        w.is.multiple() && q.on("click" + O, N.label, w.event.label.click).on("click" + O, N.remove, w.event.remove.click),
                        w.is.searchSelection() ? (q.on("mousedown" + O, N.menu, w.event.menu.mousedown).on("mouseup" + O, N.menu, w.event.menu.mouseup).on("click" + O, N.icon, w.event.icon.click).on("click" + O, N.search, w.show).on("focus" + O, N.search, w.event.search.focus).on("blur" + O, N.search, w.event.search.blur).on("click" + O, N.text, w.event.text.focus), w.is.multiple() && q.on("click" + O, w.event.click)) : ("click" == C.on ? q.on("click" + O, N.icon, w.event.icon.click).on("click" + O, w.event.test.toggle) : "hover" == C.on ? q.on("mouseenter" + O, w.delay.show).on("mouseleave" + O, w.delay.hide) : q.on(C.on + O, w.toggle), q.on("mousedown" + O, w.event.mousedown).on("mouseup" + O, w.event.mouseup).on("focus" + O, w.event.focus).on("blur" + O, w.event.blur)),
                        W.on("mouseenter" + O, N.item, w.event.item.mouseenter).on("mouseleave" + O, N.item, w.event.item.mouseleave).on("click" + O, N.item, w.event.item.click)
                    },
                    intent: function() {
                        w.verbose("Binding hide intent event to document"),
                        l && a.on("touchstart" + v, w.event.test.touch).on("touchmove" + v, w.event.test.touch),
                        a.on("click" + v, w.event.test.hide)
                    }
                },
                unbind: {
                    intent: function() {
                        w.verbose("Removing hide intent event from document"),
                        l && a.off("touchstart" + v).off("touchmove" + v),
                        a.off("click" + v)
                    }
                },
                filter: function(e) {
                    var t = void 0 !== e ? e: w.get.query(),
                    n = function() {
                        w.is.multiple() && w.filterActive(),
                        w.select.firstUnfiltered(),
                        w.has.allResultsFiltered() ? C.onNoResults.call(U, t) ? C.allowAdditions || (w.verbose("All items filtered, showing message", t), w.add.message(k.noResults)) : (w.verbose("All items filtered, hiding dropdown", t), w.hideMenu()) : w.remove.message(),
                        C.allowAdditions && w.add.userSuggestion(e),
                        w.is.searchSelection() && w.can.show() && w.is.focusedOnSearch() && w.show()
                    };
                    C.useLabels && w.has.maxSelections() || (C.apiSettings ? w.can.useAPI() ? w.queryRemote(t,
                    function() {
                        n()
                    }) : w.error(P.noAPI) : (w.filterItems(t), n()))
                },
                queryRemote: function(t, n) {
                    var i = {
                        errorDuration: !1,
                        throttle: C.throttle,
                        urlData: {
                            query: t
                        },
                        onError: function() {
                            w.add.message(k.serverError),
                            n()
                        },
                        onFailure: function() {
                            w.add.message(k.serverError),
                            n()
                        },
                        onSuccess: function(e) {
                            w.remove.message(),
                            w.setup.menu({
                                values: e.results
                            }),
                            n()
                        }
                    };
                    q.api("get request") || w.setup.api(),
                    i = e.extend(!0, {},
                    i, C.apiSettings),
                    q.api("setting", i).api("query")
                },
                filterItems: function(t) {
                    var n = void 0 !== t ? t: w.get.query(),
                    i = e(),
                    o = w.escape.regExp(n),
                    r = new RegExp("^" + o, "igm");
                    w.has.query() ? (w.verbose("Searching for matching values", n), _.each(function() {
                        var t, o, a = e(this);
                        if ("both" == C.match || "text" == C.match) {
                            if (t = String(w.get.choiceText(a, !1)), t.search(r) !== -1) return i = i.add(a),
                            !0;
                            if (C.fullTextSearch && w.fuzzySearch(n, t)) return i = i.add(a),
                            !0
                        }
                        if ("both" == C.match || "value" == C.match) {
                            if (o = String(w.get.choiceValue(a, t)), o.search(r) !== -1) return i = i.add(a),
                            !0;
                            if (C.fullTextSearch && w.fuzzySearch(n, o)) return i = i.add(a),
                            !0
                        }
                    })) : i = _,
                    w.debug("Showing only matched items", n),
                    w.remove.filteredItem(),
                    _.not(i).addClass(T.filtered)
                },
                fuzzySearch: function(e, t) {
                    var n = t.length,
                    i = e.length;
                    if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return ! 1;
                    if (i === n) return e === t;
                    e: for (var o = 0,
                    r = 0; o < i; o++) {
                        for (var a = e.charCodeAt(o); r < n;) if (t.charCodeAt(r++) === a) continue e;
                        return ! 1
                    }
                    return ! 0
                },
                filterActive: function() {
                    C.useLabels && _.filter("." + T.active).addClass(T.filtered)
                },
                focusSearch: function() {
                    w.is.search() && !w.is.focusedOnSearch() && I[0].focus()
                },
                forceSelection: function() {
                    var e = _.not(T.filtered).filter("." + T.selected).eq(0),
                    t = _.not(T.filtered).filter("." + T.active).eq(0),
                    n = e.length > 0 ? e: t;
                    n.size() > 0 && w.has.query() ? (w.debug("Forcing partial selection to selected item", n), w.event.item.click.call(n)) : w.hide()
                },
                event: {
                    change: function() {
                        $ || (w.debug("Input changed, updating selection"), w.set.selected())
                    },
                    focus: function() {
                        C.showOnFocus && !B && w.is.hidden() && !m && w.show()
                    },
                    click: function(t) {
                        e(t.target).is(q) && !w.is.focusedOnSearch() && w.focusSearch()
                    },
                    blur: function(e) {
                        m = n.activeElement === this,
                        B || m || (w.remove.activeLabel(), w.hide())
                    },
                    mousedown: function() {
                        B = !0
                    },
                    mouseup: function() {
                        B = !1
                    },
                    search: {
                        focus: function() {
                            B = !0,
                            w.is.multiple() && w.remove.activeLabel(),
                            C.showOnFocus && w.show()
                        },
                        blur: function(e) {
                            m = n.activeElement === this,
                            V || m ? m && C.forceSelection && w.forceSelection() : w.is.multiple() ? (w.remove.activeLabel(), w.hide()) : C.forceSelection ? w.forceSelection() : w.hide()
                        }
                    },
                    icon: {
                        click: function(e) {
                            w.toggle(),
                            e.stopPropagation()
                        }
                    },
                    text: {
                        focus: function(e) {
                            B = !0,
                            w.focusSearch()
                        }
                    },
                    input: function(e) { (w.is.multiple() || w.is.searchSelection()) && w.set.filtered(),
                        clearTimeout(w.timer),
                        w.timer = setTimeout(w.search, C.delay.search)
                    },
                    label: {
                        click: function(t) {
                            var n = e(this),
                            i = q.find(N.label),
                            o = i.filter("." + T.active),
                            r = n.nextAll("." + T.active),
                            a = n.prevAll("." + T.active),
                            s = r.length > 0 ? n.nextUntil(r).add(o).add(n) : n.prevUntil(a).add(o).add(n);
                            t.shiftKey ? (o.removeClass(T.active), s.addClass(T.active)) : t.ctrlKey ? n.toggleClass(T.active) : (o.removeClass(T.active), n.addClass(T.active)),
                            C.onLabelSelect.apply(this, i.filter("." + T.active))
                        }
                    },
                    remove: {
                        click: function() {
                            var t = e(this).parent();
                            t.hasClass(T.active) ? w.remove.activeLabels() : w.remove.activeLabels(t)
                        }
                    },
                    test: {
                        toggle: function(e) {
                            var t = w.is.multiple() ? w.show: w.toggle;
                            w.determine.eventOnElement(e, t) && e.preventDefault()
                        },
                        touch: function(e) {
                            w.determine.eventOnElement(e,
                            function() {
                                "touchstart" == e.type ? w.timer = setTimeout(function() {
                                    w.hide()
                                },
                                C.delay.touch) : "touchmove" == e.type && clearTimeout(w.timer)
                            }),
                            e.stopPropagation()
                        },
                        hide: function(e) {
                            w.determine.eventInModule(e, w.hide)
                        }
                    },
                    menu: {
                        mousedown: function() {
                            V = !0
                        },
                        mouseup: function() {
                            V = !1
                        }
                    },
                    item: {
                        mouseenter: function(t) {
                            var n = e(this).children(N.menu),
                            i = e(this).siblings(N.item).children(N.menu);
                            n.length > 0 && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function() {
                                w.verbose("Showing sub-menu", n),
                                e.each(i,
                                function() {
                                    w.animate.hide(!1, e(this))
                                }),
                                w.animate.show(!1, n)
                            },
                            C.delay.show), t.preventDefault())
                        },
                        mouseleave: function(t) {
                            var n = e(this).children(N.menu);
                            n.length > 0 && (clearTimeout(w.itemTimer), w.itemTimer = setTimeout(function() {
                                w.verbose("Hiding sub-menu", n),
                                w.animate.hide(!1, n)
                            },
                            C.delay.hide))
                        },
                        touchend: function() {},
                        click: function(t) {
                            var n = e(this),
                            i = e(t ? t.target: ""),
                            o = n.find(N.menu),
                            r = w.get.choiceText(n),
                            a = w.get.choiceValue(n, r),
                            s = o.length > 0;
                            o.find(i).length > 0 || s && !C.allowCategorySelection || (C.useLabels || (w.remove.filteredItem(), w.remove.searchTerm(), w.set.scrollPosition(n)), w.determine.selectAction.call(this, r, a))
                        }
                    },
                    document: {
                        keydown: function(e) {
                            var t = e.which,
                            n = w.get.shortcutKeys();
                            if (w.is.inObject(t, n)) {
                                var i = q.find(N.label),
                                o = i.filter("." + T.active),
                                r = (o.data(E.value), i.index(o)),
                                a = i.length,
                                s = o.length > 0,
                                l = o.length > 1,
                                c = 0 === r,
                                u = r + 1 == a,
                                d = w.is.searchSelection(),
                                f = w.is.focusedOnSearch(),
                                p = w.is.focused(),
                                h = f && 0 === w.get.caretPosition();
                                if (d && !s && !f) return;
                                t == n.leftArrow ? !p && !h || s ? s && (e.shiftKey ? w.verbose("Adding previous label to selection") : (w.verbose("Selecting previous label"), i.removeClass(T.active)), c && !l ? o.addClass(T.active) : o.prev(N.siblingLabel).addClass(T.active).end(), e.preventDefault()) : (w.verbose("Selecting previous label"), i.last().addClass(T.active)) : t == n.rightArrow ? (p && !s && i.first().addClass(T.active), s && (e.shiftKey ? w.verbose("Adding next label to selection") : (w.verbose("Selecting next label"), i.removeClass(T.active)), u ? d ? f ? i.removeClass(T.active) : w.focusSearch() : l ? o.next(N.siblingLabel).addClass(T.active) : o.addClass(T.active) : o.next(N.siblingLabel).addClass(T.active), e.preventDefault())) : t == n.deleteKey || t == n.backspace ? s ? (w.verbose("Removing active labels"), u && d && !f && w.focusSearch(), o.last().next(N.siblingLabel).addClass(T.active), w.remove.activeLabels(o), e.preventDefault()) : h && !s && t == n.backspace && (w.verbose("Removing last label on input backspace"), o = i.last().addClass(T.active), w.remove.activeLabels(o)) : o.removeClass(T.active)
                            }
                        }
                    },
                    keydown: function(e) {
                        var t = e.which,
                        n = w.get.shortcutKeys();
                        if (w.is.inObject(t, n)) {
                            var i, o = _.not(N.unselectable).filter("." + T.selected).eq(0),
                            r = W.children("." + T.active).eq(0),
                            a = o.length > 0 ? o: r,
                            s = a.length > 0 ? a.siblings(":not(." + T.filtered + ")").andSelf() : W.children(":not(." + T.filtered + ")"),
                            l = a.children(N.menu),
                            c = a.closest(N.menu),
                            u = c.hasClass(T.visible) || c.hasClass(T.animating) || c.parent(N.menu).length > 0,
                            d = l.length > 0,
                            f = a.length > 0,
                            p = a.not(N.unselectable).length > 0,
                            h = t == n.delimiter && C.allowAdditions && w.is.multiple();
                            if (w.is.visible()) {
                                if ((t == n.enter || h) && (t == n.enter && f && d && !C.allowCategorySelection ? (w.verbose("Pressed enter on unselectable category, opening sub menu"), t = n.rightArrow) : p && (w.verbose("Selecting item from keyboard shortcut", a), w.event.item.click.call(a, e), w.is.searchSelection() && w.remove.searchTerm()), e.preventDefault()), t == n.leftArrow && c[0] !== W[0] && (w.verbose("Left key pressed, closing sub-menu"), w.animate.hide(!1, c), a.removeClass(T.selected), c.closest(N.item).addClass(T.selected), e.preventDefault()), t == n.rightArrow && d && (w.verbose("Right key pressed, opening sub-menu"), w.animate.show(!1, l), a.removeClass(T.selected), l.find(N.item).eq(0).addClass(T.selected), e.preventDefault()), t == n.upArrow) {
                                    if (i = f && u ? a.prevAll(N.item + ":not(" + N.unselectable + ")").eq(0) : _.eq(0), s.index(i) < 0) return w.verbose("Up key pressed but reached top of current menu"),
                                    void e.preventDefault();
                                    w.verbose("Up key pressed, changing active item"),
                                    a.removeClass(T.selected),
                                    i.addClass(T.selected),
                                    w.set.scrollPosition(i),
                                    e.preventDefault()
                                }
                                if (t == n.downArrow) {
                                    if (i = f && u ? i = a.nextAll(N.item + ":not(" + N.unselectable + ")").eq(0) : _.eq(0), 0 === i.length) return w.verbose("Down key pressed but reached bottom of current menu"),
                                    void e.preventDefault();
                                    w.verbose("Down key pressed, changing active item"),
                                    _.removeClass(T.selected),
                                    i.addClass(T.selected),
                                    w.set.scrollPosition(i),
                                    e.preventDefault()
                                }
                                t == n.pageUp && (w.scrollPage("up"), e.preventDefault()),
                                t == n.pageDown && (w.scrollPage("down"), e.preventDefault()),
                                t == n.escape && (w.verbose("Escape key pressed, closing dropdown"), w.hide())
                            } else h && e.preventDefault(),
                            t == n.downArrow && (w.verbose("Down key pressed, showing dropdown"), w.show(), e.preventDefault())
                        } else w.is.selection() && !w.is.search() && w.set.selectedLetter(String.fromCharCode(t))
                    }
                },
                determine: {
                    selectAction: function(t, n) {
                        w.verbose("Determining action", C.action),
                        e.isFunction(w.action[C.action]) ? (w.verbose("Triggering preset action", C.action, t, n), w.action[C.action].call(this, t, n)) : e.isFunction(C.action) ? (w.verbose("Triggering user action", C.action, t, n), C.action.call(this, t, n)) : w.error(P.action, C.action)
                    },
                    eventInModule: function(t, i) {
                        var o = e(t.target),
                        r = o.closest(n.documentElement).length > 0,
                        a = o.closest(q).length > 0;
                        return i = e.isFunction(i) ? i: function() {},
                        r && !a ? (w.verbose("Triggering event", i), i(), !0) : (w.verbose("Event occurred in dropdown, canceling callback"), !1)
                    },
                    eventOnElement: function(t, n) {
                        var i = e(t.target),
                        o = i.closest(N.siblingLabel),
                        r = 0 === q.find(o).length,
                        a = 0 === i.closest(W).length;
                        return n = e.isFunction(n) ? n: function() {},
                        r && a ? (w.verbose("Triggering event", n), n(), !0) : (w.verbose("Event occurred in dropdown menu, canceling callback"), !1)
                    }
                },
                action: {
                    nothing: function() {},
                    activate: function(t, n) {
                        if (n = void 0 !== n ? n: t, w.can.activate(e(this))) {
                            if (w.set.selected(n, e(this)), w.is.multiple() && !w.is.allFiltered()) return;
                            w.hideAndClear()
                        }
                    },
                    select: function(e, t) {
                        w.action.activate.call(this)
                    },
                    combo: function(t, n) {
                        n = void 0 !== n ? n: t,
                        w.set.selected(n, e(this)),
                        w.hideAndClear()
                    },
                    hide: function(e, t) {
                        w.set.value(t),
                        w.hideAndClear()
                    }
                },
                get: {
                    id: function() {
                        return b
                    },
                    defaultText: function() {
                        return q.data(E.defaultText)
                    },
                    defaultValue: function() {
                        return q.data(E.defaultValue)
                    },
                    placeholderText: function() {
                        return q.data(E.placeholderText) || ""
                    },
                    text: function() {
                        return L.text()
                    },
                    query: function() {
                        return e.trim(I.val())
                    },
                    searchWidth: function(e) {
                        return e * C.glyphWidth + "em"
                    },
                    selectionCount: function() {
                        var t = w.get.values();
                        return w.is.multiple() ? e.isArray(t) ? t.length: 0 : "" !== w.get.value() ? 1 : 0
                    },
                    transition: function(e) {
                        return "auto" == C.transition ? w.is.upward(e) ? "slide up": "slide down": C.transition
                    },
                    userValues: function() {
                        var t = w.get.values();
                        return !! t && (t = e.isArray(t) ? t: [t], e.grep(t,
                        function(e) {
                            return w.get.item(e) === !1
                        }))
                    },
                    uniqueArray: function(t) {
                        return e.grep(t,
                        function(n, i) {
                            return e.inArray(n, t) === i
                        })
                    },
                    caretPosition: function() {
                        var e, t, i = I.get(0);
                        return "selectionStart" in i ? i.selectionStart: n.selection ? (i.focus(), e = n.selection.createRange(), t = e.text.length, e.moveStart("character", -i.value.length), e.text.length - t) : void 0
                    },
                    shortcutKeys: function() {
                        return {
                            backspace: 8,
                            delimiter: 188,
                            deleteKey: 46,
                            enter: 13,
                            escape: 27,
                            pageUp: 33,
                            pageDown: 34,
                            leftArrow: 37,
                            upArrow: 38,
                            rightArrow: 39,
                            downArrow: 40
                        }
                    },
                    value: function() {
                        var t = M.length > 0 ? M.val() : q.data(E.value);
                        return e.isArray(t) && 1 === t.length && "" === t[0] ? "": t
                    },
                    values: function() {
                        var e = w.get.value();
                        return "" === e ? "": !w.has.selectInput() && w.is.multiple() ? "string" == typeof e ? e.split(C.delimiter) : "": e
                    },
                    remoteValues: function() {
                        var t = w.get.values(),
                        n = !1;
                        return t && ("string" == typeof t && (t = [t]), n = {},
                        e.each(t,
                        function(e, t) {
                            var i = w.read.remoteData(t);
                            w.verbose("Restoring value from session data", i, t),
                            n[t] = i ? i: t
                        })),
                        n
                    },
                    choiceText: function(t, n) {
                        if (n = void 0 !== n ? n: C.preserveHTML, t) return t.find(N.menu).length > 0 && (w.verbose("Retreiving text of element with sub-menu"), t = t.clone(), t.find(N.menu).remove(), t.find(N.menuIcon).remove()),
                        void 0 !== t.data(E.text) ? t.data(E.text) : n ? e.trim(t.html()) : e.trim(t.text())
                    },
                    choiceValue: function(t, n) {
                        return n = n || w.get.choiceText(t),
                        !!t && (void 0 !== t.data(E.value) ? String(t.data(E.value)) : "string" == typeof n ? e.trim(n.toLowerCase()) : String(n))
                    },
                    inputEvent: function() {
                        var e = I[0];
                        return !! e && (void 0 !== e.oninput ? "input": void 0 !== e.onpropertychange ? "propertychange": "keyup")
                    },
                    selectValues: function() {
                        var t = {};
                        return t.values = [],
                        q.find("option").each(function() {
                            var n = e(this),
                            i = n.html(),
                            o = n.attr("disabled"),
                            r = void 0 !== n.attr("value") ? n.attr("value") : i;
                            "auto" === C.placeholder && "" === r ? t.placeholder = i: t.values.push({
                                name: i,
                                value: r,
                                disabled: o
                            })
                        }),
                        C.placeholder && "auto" !== C.placeholder && (w.debug("Setting placeholder value to", C.placeholder), t.placeholder = C.placeholder),
                        C.sortSelect ? (t.values.sort(function(e, t) {
                            return e.name > t.name ? 1 : -1
                        }), w.debug("Retrieved and sorted values from select", t)) : w.debug("Retreived values from select", t),
                        t
                    },
                    activeItem: function() {
                        return _.filter("." + T.active)
                    },
                    selectedItem: function() {
                        var e = _.not(N.unselectable).filter("." + T.selected);
                        return e.length > 0 ? e: _.eq(0)
                    },
                    itemWithAdditions: function(e) {
                        var t = w.get.item(e),
                        n = w.create.userChoice(e);
                        return n && n.length > 0 && (t = t.length > 0 ? t.add(n) : n),
                        t
                    },
                    item: function(t, n) {
                        var i, o, r = !1;
                        return t = void 0 !== t ? t: void 0 !== w.get.values() ? w.get.values() : w.get.text(),
                        i = o ? t.length > 0 : void 0 !== t && null !== t,
                        o = w.is.multiple() && e.isArray(t),
                        n = "" === t || 0 === t || (n || !1),
                        i && _.each(function() {
                            var i = e(this),
                            a = w.get.choiceText(i),
                            s = w.get.choiceValue(i, a);
                            if (null !== s && void 0 !== s) if (o) e.inArray(String(s), t) === -1 && e.inArray(a, t) === -1 || (r = r ? r.add(i) : i);
                            else if (n) {
                                if (w.verbose("Ambiguous dropdown value using strict type check", i, t), s === t || a === t) return r = i,
                                !0
                            } else if (String(s) == String(t) || a == t) return w.verbose("Found select item by value", s, t),
                            r = i,
                            !0
                        }),
                        r
                    }
                },
                check: {
                    maxSelections: function(e) {
                        return ! C.maxSelections || (e = void 0 !== e ? e: w.get.selectionCount(), e >= C.maxSelections ? (w.debug("Maximum selection count reached"), C.useLabels && (_.addClass(T.filtered), w.add.message(k.maxSelections)), !0) : (w.verbose("No longer at maximum selection count"), w.remove.message(), w.remove.filteredItem(), w.is.searchSelection() && w.filterItems(), !1))
                    }
                },
                restore: {
                    defaults: function() {
                        w.clear(),
                        w.restore.defaultText(),
                        w.restore.defaultValue()
                    },
                    defaultText: function() {
                        var e = w.get.defaultText();
                        e === w.get.placeholderText ? (w.debug("Restoring default placeholder text", e), w.set.placeholderText(e)) : (w.debug("Restoring default text", e), w.set.text(e))
                    },
                    defaultValue: function() {
                        var e = w.get.defaultValue();
                        void 0 !== e && (w.debug("Restoring default value", e), "" !== e ? (w.set.value(e), w.set.selected()) : (w.remove.activeItem(), w.remove.selectedItem()))
                    },
                    labels: function() {
                        C.allowAdditions && (C.useLabels || (w.error(P.labels), C.useLabels = !0), w.debug("Restoring selected values"), w.create.userLabels()),
                        w.check.maxSelections()
                    },
                    selected: function() {
                        w.restore.values(),
                        w.is.multiple() ? (w.debug("Restoring previously selected values and labels"), w.restore.labels()) : w.debug("Restoring previously selected values")
                    },
                    values: function() {
                        w.set.initialLoad(),
                        C.apiSettings ? C.saveRemoteData ? w.restore.remoteValues() : w.clearValue() : w.set.selected(),
                        w.remove.initialLoad()
                    },
                    remoteValues: function() {
                        var t = w.get.remoteValues();
                        w.debug("Recreating selected from session data", t),
                        t && (w.is.single() ? e.each(t,
                        function(e, t) {
                            w.set.text(t)
                        }) : e.each(t,
                        function(e, t) {
                            w.add.label(e, t)
                        }))
                    }
                },
                read: {
                    remoteData: function(e) {
                        var n;
                        return void 0 === t.Storage ? void w.error(P.noStorage) : void 0 !== (n = sessionStorage.getItem(e)) && n
                    }
                },
                save: {
                    defaults: function() {
                        w.save.defaultText(),
                        w.save.placeholderText(),
                        w.save.defaultValue()
                    },
                    defaultValue: function() {
                        var e = w.get.value();
                        w.verbose("Saving default value as", e),
                        q.data(E.defaultValue, e)
                    },
                    defaultText: function() {
                        var e = w.get.text();
                        w.verbose("Saving default text as", e),
                        q.data(E.defaultText, e)
                    },
                    placeholderText: function() {
                        var e;
                        C.placeholder !== !1 && L.hasClass(T.placeholder) && (e = w.get.text(), w.verbose("Saving placeholder text as", e), q.data(E.placeholderText, e))
                    },
                    remoteData: function(e, n) {
                        if (void 0 === t.Storage) return void w.error(P.noStorage);
                        w.verbose("Saving remote data to session storage", n, e),
                        sessionStorage.setItem(n, e)
                    }
                },
                clear: function() {
                    w.is.multiple() ? w.remove.labels() : (w.remove.activeItem(), w.remove.selectedItem()),
                    w.set.placeholderText(),
                    w.clearValue()
                },
                clearValue: function() {
                    w.set.value("")
                },
                scrollPage: function(e, t) {
                    var n, i, o, r = t || w.get.selectedItem(),
                    a = r.closest(N.menu),
                    s = a.outerHeight(),
                    l = a.scrollTop(),
                    c = _.eq(0).outerHeight(),
                    u = Math.floor(s / c),
                    d = (a.prop("scrollHeight"), "up" == e ? l - c * u: l + c * u),
                    f = _.not(N.unselectable);
                    o = "up" == e ? f.index(r) - u: f.index(r) + u,
                    n = "up" == e ? o >= 0 : o < f.length,
                    i = n ? f.eq(o) : "up" == e ? f.first() : f.last(),
                    i.length > 0 && (w.debug("Scrolling page", e, i), r.removeClass(T.selected), i.addClass(T.selected), a.scrollTop(d))
                },
                set: {
                    filtered: function() {
                        var e = w.is.multiple(),
                        t = w.is.searchSelection(),
                        n = e && t,
                        i = t ? w.get.query() : "",
                        o = "string" == typeof i && i.length > 0,
                        r = w.get.searchWidth(i.length),
                        a = "" !== i;
                        e && o && (w.verbose("Adjusting input width", r, C.glyphWidth), I.css("width", r)),
                        o || n && a ? (w.verbose("Hiding placeholder text"), L.addClass(T.filtered)) : (!e || n && !a) && (w.verbose("Showing placeholder text"), L.removeClass(T.filtered))
                    },
                    loading: function() {
                        q.addClass(T.loading)
                    },
                    placeholderText: function(e) {
                        e = e || w.get.placeholderText(),
                        w.debug("Setting placeholder text", e),
                        w.set.text(e),
                        L.addClass(T.placeholder)
                    },
                    tabbable: function() {
                        w.has.search() ? (w.debug("Added tabindex to searchable dropdown"), I.val("").attr("tabindex", 0), W.attr("tabindex", -1)) : (w.debug("Added tabindex to dropdown"), q.attr("tabindex") || (q.attr("tabindex", 0), W.attr("tabindex", -1)))
                    },
                    initialLoad: function() {
                        w.verbose("Setting initial load"),
                        g = !0
                    },
                    activeItem: function(e) {
                        C.allowAdditions && e.filter(N.addition).length > 0 ? e.addClass(T.filtered) : e.addClass(T.active)
                    },
                    scrollPosition: function(e, t) {
                        var n, i, o, r, a, s, l, c, u;
                        e = e || w.get.selectedItem(),
                        n = e.closest(N.menu),
                        i = e && e.length > 0,
                        t = void 0 !== t && t,
                        e && n.length > 0 && i && (r = e.position().top, n.addClass(T.loading), s = n.scrollTop(), a = n.offset().top, r = e.offset().top, o = s - a + r, t || (l = n.height(), u = s + l < o + 5, c = o - 5 < s), w.debug("Scrolling to active item", o), (t || c || u) && n.scrollTop(o), n.removeClass(T.loading))
                    },
                    text: function(e) {
                        "select" !== C.action && ("combo" == C.action ? (w.debug("Changing combo button text", e, z), C.preserveHTML ? z.html(e) : z.text(e)) : (e !== w.get.placeholderText() && L.removeClass(T.placeholder), w.debug("Changing text", e, L), L.removeClass(T.filtered), C.preserveHTML ? L.html(e) : L.text(e)))
                    },
                    selectedLetter: function(t) {
                        var n, i = _.filter("." + T.selected),
                        o = i.length > 0 && w.has.firstLetter(i, t),
                        r = !1;
                        o && (n = i.nextAll(_).eq(0), w.has.firstLetter(n, t) && (r = n)),
                        r || _.each(function() {
                            if (w.has.firstLetter(e(this), t)) return r = e(this),
                            !1
                        }),
                        r && (w.verbose("Scrolling to next value with letter", t), w.set.scrollPosition(r), i.removeClass(T.selected), r.addClass(T.selected))
                    },
                    direction: function(e) {
                        "auto" == C.direction ? w.is.onScreen(e) ? w.remove.upward(e) : w.set.upward(e) : "upward" == C.direction && w.set.upward(e)
                    },
                    upward: function(e) { (e || q).addClass(T.upward)
                    },
                    value: function(e, t, n) {
                        var i = M.length > 0,
                        o = (w.has.value(e), w.get.values()),
                        r = void 0 !== e ? String(e) : e;
                        if (i) {
                            if (r == o && (w.verbose("Skipping value update already same value", e, o), !w.is.initialLoad())) return;
                            w.is.single() && w.has.selectInput() && w.can.extendSelect() && (w.debug("Adding user option", e), w.add.optionValue(e)),
                            w.debug("Updating input value", e, o),
                            $ = !0,
                            M.val(e),
                            C.fireOnInit === !1 && w.is.initialLoad() ? w.debug("Input native change event ignored on initial load") : M.trigger("change"),
                            $ = !1
                        } else w.verbose("Storing value in metadata", e, M),
                        e !== o && q.data(E.value, r);
                        C.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", C.onChange) : C.onChange.call(U, e, t, n)
                    },
                    active: function() {
                        q.addClass(T.active)
                    },
                    multiple: function() {
                        q.addClass(T.multiple)
                    },
                    visible: function() {
                        q.addClass(T.visible)
                    },
                    exactly: function(e, t) {
                        w.debug("Setting selected to exact values"),
                        w.clear(),
                        w.set.selected(e, t)
                    },
                    selected: function(t, n) {
                        var i = w.is.multiple(); (n = C.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t)) && (w.debug("Setting selected menu item to", n), w.is.single() ? (w.remove.activeItem(), w.remove.selectedItem()) : C.useLabels && w.remove.selectedItem(), n.each(function() {
                            var t = e(this),
                            o = w.get.choiceText(t),
                            r = w.get.choiceValue(t, o),
                            a = t.hasClass(T.filtered),
                            s = t.hasClass(T.active),
                            l = t.hasClass(T.addition),
                            c = i && 1 == n.length;
                            i ? !s || l ? (C.apiSettings && C.saveRemoteData && w.save.remoteData(o, r), C.useLabels ? (w.add.value(r, o, t), w.add.label(r, o, c), w.set.activeItem(t), w.filterActive(), w.select.nextAvailable(n)) : (w.add.value(r, o, t), w.set.text(w.add.variables(k.count)), w.set.activeItem(t))) : a || (w.debug("Selected active value, removing label"), w.remove.selected(r)) : (C.apiSettings && C.saveRemoteData && w.save.remoteData(o, r), w.set.text(o), w.set.value(r, o, t), t.addClass(T.active).addClass(T.selected))
                        }))
                    }
                },
                add: {
                    label: function(t, n, i) {
                        var o, r = w.is.searchSelection() ? I: L;
                        if (o = e("<a />").addClass(T.label).attr("data-value", t).html(j.label(t, n)), o = C.onLabelCreate.call(o, t, n), w.has.label(t)) return void w.debug("Label already exists, skipping", t);
                        C.label.variation && o.addClass(C.label.variation),
                        i === !0 ? (w.debug("Animating in label", o), o.addClass(T.hidden).insertBefore(r).transition(C.label.transition, C.label.duration)) : (w.debug("Adding selection label", o), o.insertBefore(r))
                    },
                    message: function(t) {
                        var n = W.children(N.message),
                        i = C.templates.message(w.add.variables(t));
                        n.length > 0 ? n.html(i) : n = e("<div/>").html(i).addClass(T.message).appendTo(W)
                    },
                    optionValue: function(t) {
                        M.find('option[value="' + t + '"]').length > 0 || (y && (y.disconnect(), w.verbose("Temporarily disconnecting mutation observer", t)), w.is.single() && (w.verbose("Removing previous user addition"), M.find("option." + T.addition).remove()), e("<option/>").prop("value", t).addClass(T.addition).html(t).appendTo(M), w.verbose("Adding user addition as an <option>", t), y && y.observe(M[0], {
                            childList: !0,
                            subtree: !0
                        }))
                    },
                    userSuggestion: function(e) {
                        var t, n = W.children(N.addition),
                        i = w.get.item(e),
                        o = i && i.not(N.addition).length,
                        r = n.length > 0;
                        if (!C.useLabels || !w.has.maxSelections()) {
                            if ("" === e || o) return void n.remove();
                            _.removeClass(T.selected),
                            r ? (t = C.templates.addition(w.add.variables(k.addResult, e)), n.html(t).attr("data-" + E.value, e).attr("data-" + E.text, e).removeClass(T.filtered).addClass(T.selected), w.verbose("Replacing user suggestion with new value", n)) : (n = w.create.userChoice(e), n.prependTo(W).addClass(T.selected), w.verbose("Adding item choice to menu corresponding with user choice addition", n))
                        }
                    },
                    variables: function(e, t) {
                        var n, i, o = e.search("{count}") !== -1,
                        r = e.search("{maxCount}") !== -1,
                        a = e.search("{term}") !== -1;
                        return w.verbose("Adding templated variables to message", e),
                        o && (n = w.get.selectionCount(), e = e.replace("{count}", n)),
                        r && (n = w.get.selectionCount(), e = e.replace("{maxCount}", C.maxSelections)),
                        a && (i = t || w.get.query(), e = e.replace("{term}", i)),
                        e
                    },
                    value: function(t, n, i) {
                        var o, r = w.get.values();
                        if ("" === t) return void w.debug("Cannot select blank values from multiselect");
                        e.isArray(r) ? (o = r.concat([t]), o = w.get.uniqueArray(o)) : o = [t],
                        w.has.selectInput() ? w.can.extendSelect() && (w.debug("Adding value to select", t, o, M), w.add.optionValue(t)) : (o = o.join(C.delimiter), w.debug("Setting hidden input to delimited value", o, M)),
                        C.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("Skipping onadd callback on initial load", C.onAdd) : C.onAdd.call(U, t, n, i),
                        w.set.value(o, t, n, i),
                        w.check.maxSelections()
                    }
                },
                remove: {
                    active: function() {
                        q.removeClass(T.active)
                    },
                    activeLabel: function() {
                        q.find(N.label).removeClass(T.active)
                    },
                    loading: function() {
                        q.removeClass(T.loading)
                    },
                    initialLoad: function() {
                        g = !1
                    },
                    upward: function(e) { (e || q).removeClass(T.upward)
                    },
                    visible: function() {
                        q.removeClass(T.visible)
                    },
                    activeItem: function() {
                        _.removeClass(T.active)
                    },
                    filteredItem: function() {
                        C.useLabels && w.has.maxSelections() || (C.useLabels && w.is.multiple() ? _.not("." + T.active).removeClass(T.filtered) : _.removeClass(T.filtered))
                    },
                    optionValue: function(e) {
                        var t = M.find('option[value="' + e + '"]');
                        t.length > 0 && t.hasClass(T.addition) && (y && (y.disconnect(), w.verbose("Temporarily disconnecting mutation observer", e)), t.remove(), w.verbose("Removing user addition as an <option>", e), y && y.observe(M[0], {
                            childList: !0,
                            subtree: !0
                        }))
                    },
                    message: function() {
                        W.children(N.message).remove()
                    },
                    searchTerm: function() {
                        w.verbose("Cleared search term"),
                        I.val(""),
                        w.set.filtered()
                    },
                    selected: function(t, n) {
                        if (! (n = C.allowAdditions ? n || w.get.itemWithAdditions(t) : n || w.get.item(t))) return ! 1;
                        n.each(function() {
                            var t = e(this),
                            n = w.get.choiceText(t),
                            i = w.get.choiceValue(t, n);
                            w.is.multiple() ? C.useLabels ? (w.remove.value(i, n, t), w.remove.label(i)) : (w.remove.value(i, n, t), 0 === w.get.selectionCount() ? w.set.placeholderText() : w.set.text(w.add.variables(k.count))) : w.remove.value(i, n, t),
                            t.removeClass(T.filtered).removeClass(T.active),
                            C.useLabels && t.removeClass(T.selected)
                        })
                    },
                    selectedItem: function() {
                        _.removeClass(T.selected)
                    },
                    value: function(e, t, n) {
                        var i, o = w.get.values();
                        w.has.selectInput() ? (w.verbose("Input is <select> removing selected option", e), i = w.remove.arrayValue(e, o), w.remove.optionValue(e)) : (w.verbose("Removing from delimited values", e), i = w.remove.arrayValue(e, o), i = i.join(C.delimiter)),
                        C.fireOnInit === !1 && w.is.initialLoad() ? w.verbose("No callback on initial load", C.onRemove) : C.onRemove.call(U, e, t, n),
                        w.set.value(i, t, n),
                        w.check.maxSelections()
                    },
                    arrayValue: function(t, n) {
                        return e.isArray(n) || (n = [n]),
                        n = e.grep(n,
                        function(e) {
                            return t != e
                        }),
                        w.verbose("Removed value from delimited string", t, n),
                        n
                    },
                    label: function(e, t) {
                        var n = q.find(N.label),
                        i = n.filter('[data-value="' + e + '"]');
                        w.verbose("Removing label", i),
                        i.remove()
                    },
                    activeLabels: function(e) {
                        e = e || q.find(N.label).filter("." + T.active),
                        w.verbose("Removing active label selections", e),
                        w.remove.labels(e)
                    },
                    labels: function(t) {
                        t = t || q.find(N.label),
                        w.verbose("Removing labels", t),
                        t.each(function() {
                            var t = e(this).data(E.value),
                            n = void 0 !== t ? String(t) : t;
                            w.is.userValue(n) ? (w.remove.value(n), w.remove.label(n)) : w.remove.selected(n)
                        })
                    },
                    tabbable: function() {
                        w.has.search() ? (w.debug("Searchable dropdown initialized"), I.attr("tabindex", "-1"), W.attr("tabindex", "-1")) : (w.debug("Simple selection dropdown initialized"), q.attr("tabindex", "-1"), W.attr("tabindex", "-1"))
                    }
                },
                has: {
                    search: function() {
                        return I.length > 0
                    },
                    selectInput: function() {
                        return M.is("select")
                    },
                    firstLetter: function(e, t) {
                        var n, i;
                        return ! (!e || 0 === e.length || "string" != typeof t) && (n = w.get.choiceText(e, !1), t = t.toLowerCase(), i = String(n).charAt(0).toLowerCase(), t == i)
                    },
                    input: function() {
                        return M.length > 0
                    },
                    items: function() {
                        return _.length > 0
                    },
                    menu: function() {
                        return W.length > 0
                    },
                    message: function() {
                        return 0 !== W.children(N.message).length
                    },
                    label: function(e) {
                        return q.find(N.label).filter('[data-value="' + e + '"]').length > 0
                    },
                    maxSelections: function() {
                        return C.maxSelections && w.get.selectionCount() >= C.maxSelections
                    },
                    allResultsFiltered: function() {
                        return _.filter(N.unselectable).length === _.length
                    },
                    query: function() {
                        return "" !== w.get.query()
                    },
                    value: function(t) {
                        var n = w.get.values();
                        return !! (e.isArray(n) ? n && e.inArray(t, n) !== -1 : n == t)
                    }
                },
                is: {
                    active: function() {
                        return q.hasClass(T.active)
                    },
                    alreadySetup: function() {
                        return q.is("select") && q.parent(N.dropdown).length > 0 && 0 === q.prev().length
                    },
                    animating: function(e) {
                        return e ? e.transition && e.transition("is animating") : W.transition && W.transition("is animating")
                    },
                    disabled: function() {
                        return q.hasClass(T.disabled)
                    },
                    focused: function() {
                        return n.activeElement === q[0]
                    },
                    focusedOnSearch: function() {
                        return n.activeElement === I[0]
                    },
                    allFiltered: function() {
                        return (w.is.multiple() || w.has.search()) && !w.has.message() && w.has.allResultsFiltered()
                    },
                    hidden: function(e) {
                        return ! w.is.visible(e)
                    },
                    initialLoad: function() {
                        return g
                    },
                    onScreen: function(e) {
                        var t, n = e || W,
                        i = !0,
                        o = {};
                        return n.addClass(T.loading),
                        t = {
                            context: {
                                scrollTop: F.scrollTop(),
                                height: F.outerHeight()
                            },
                            menu: {
                                offset: n.offset(),
                                height: n.outerHeight()
                            }
                        },
                        o = {
                            above: t.context.scrollTop <= t.menu.offset.top - t.menu.height,
                            below: t.context.scrollTop + t.context.height >= t.menu.offset.top + t.menu.height
                        },
                        o.below ? (w.verbose("Dropdown can fit in context downward", o), i = !0) : o.below || o.above ? (w.verbose("Dropdown cannot fit below, opening upward", o), i = !1) : (w.verbose("Dropdown cannot fit in either direction, favoring downward", o), i = !0),
                        n.removeClass(T.loading),
                        i
                    },
                    inObject: function(t, n) {
                        var i = !1;
                        return e.each(n,
                        function(e, n) {
                            if (n == t) return i = !0,
                            !0
                        }),
                        i
                    },
                    multiple: function() {
                        return q.hasClass(T.multiple)
                    },
                    single: function() {
                        return ! w.is.multiple()
                    },
                    selectMutation: function(t) {
                        var n = !1;
                        return e.each(t,
                        function(t, i) {
                            if (i.target && e(i.target).is("select")) return n = !0,
                            !0
                        }),
                        n
                    },
                    search: function() {
                        return q.hasClass(T.search)
                    },
                    searchSelection: function() {
                        return w.has.search() && 1 === I.parent(N.dropdown).length
                    },
                    selection: function() {
                        return q.hasClass(T.selection)
                    },
                    userValue: function(t) {
                        return e.inArray(t, w.get.userValues()) !== -1
                    },
                    upward: function(e) {
                        return (e || q).hasClass(T.upward)
                    },
                    visible: function(e) {
                        return e ? e.hasClass(T.visible) : W.hasClass(T.visible)
                    }
                },
                can: {
                    activate: function(e) {
                        return !! C.useLabels || (!w.has.maxSelections() || !(!w.has.maxSelections() || !e.hasClass(T.active)))
                    },
                    click: function() {
                        return l || "click" == C.on
                    },
                    extendSelect: function() {
                        return C.allowAdditions || C.apiSettings
                    },
                    show: function() {
                        return ! w.is.disabled() && (w.has.items() || w.has.message())
                    },
                    useAPI: function() {
                        return void 0 !== e.fn.api
                    }
                },
                animate: {
                    show: function(t, n) {
                        var i, o = n || W,
                        r = n ?
                        function() {}: function() {
                            w.hideSubMenus(),
                            w.hideOthers(),
                            w.set.active()
                        };
                        t = e.isFunction(t) ? t: function() {},
                        w.verbose("Doing menu show animation", o),
                        w.set.direction(n),
                        i = w.get.transition(n),
                        w.is.selection() && w.set.scrollPosition(w.get.selectedItem(), !0),
                        (w.is.hidden(o) || w.is.animating(o)) && ("none" == i ? (r(), o.transition("show"), t.call(U)) : void 0 !== e.fn.transition && q.transition("is supported") ? o.transition({
                            animation: i + " in",
                            debug: C.debug,
                            verbose: C.verbose,
                            duration: C.duration,
                            queue: !0,
                            onStart: r,
                            onComplete: function() {
                                t.call(U)
                            }
                        }) : w.error(P.noTransition, i))
                    },
                    hide: function(t, n) {
                        var i = n || W,
                        o = (n ? C.duration: C.duration, n ?
                        function() {}: function() {
                            w.can.click() && w.unbind.intent(),
                            w.remove.active()
                        }),
                        r = w.get.transition(n);
                        t = e.isFunction(t) ? t: function() {},
                        (w.is.visible(i) || w.is.animating(i)) && (w.verbose("Doing menu hide animation", i), "none" == r ? (o(), i.transition("hide"), t.call(U)) : void 0 !== e.fn.transition && q.transition("is supported") ? i.transition({
                            animation: r + " out",
                            duration: C.duration,
                            debug: C.debug,
                            verbose: C.verbose,
                            queue: !0,
                            onStart: o,
                            onComplete: function() {
                                "auto" == C.direction && w.remove.upward(n),
                                t.call(U)
                            }
                        }) : w.error(P.transition))
                    }
                },
                hideAndClear: function() {
                    w.remove.searchTerm(),
                    w.has.maxSelections() || (w.has.search() ? w.hide(function() {
                        w.remove.filteredItem()
                    }) : w.hide())
                },
                delay: {
                    show: function() {
                        w.verbose("Delaying show event to ensure user intent"),
                        clearTimeout(w.timer),
                        w.timer = setTimeout(w.show, C.delay.show)
                    },
                    hide: function() {
                        w.verbose("Delaying hide event to ensure user intent"),
                        clearTimeout(w.timer),
                        w.timer = setTimeout(w.hide, C.delay.hide)
                    }
                },
                escape: {
                    regExp: function(e) {
                        return e = String(e),
                        e.replace(D.escape, "\\$&")
                    }
                },
                setting: function(t, n) {
                    if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, C, t);
                    else {
                        if (void 0 === n) return C[t];
                        C[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, w, t);
                    else {
                        if (void 0 === n) return w[t];
                        w[t] = n
                    }
                },
                debug: function() {
                    C.debug && (C.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), w.debug.apply(console, arguments)))
                },
                verbose: function() {
                    C.verbose && C.debug && (C.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), w.verbose.apply(console, arguments)))
                },
                error: function() {
                    w.error = Function.prototype.bind.call(console.error, console, C.name + ":"),
                    w.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        C.performance && (t = (new Date).getTime(), i = c || t, n = t - i, c = t, u.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: U,
                            "Execution Time": n
                        })),
                        clearTimeout(w.performance.timer),
                        w.performance.timer = setTimeout(w.performance.display, 500)
                    },
                    display: function() {
                        var t = C.name + ":",
                        n = 0;
                        c = !1,
                        clearTimeout(w.performance.timer),
                        e.each(u,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        s && (t += " '" + s + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && u.length > 0 && (console.groupCollapsed(t), console.table ? console.table(u) : e.each(u,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        u = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = X;
                    return n = n || p,
                    i = U || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (w.error(P.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            f ? (void 0 === X && w.initialize(), w.invoke(d)) : (void 0 !== X && X.invoke("destroy"), w.initialize())
        }),
        void 0 !== o ? o: r
    },
    e.fn.dropdown.settings = {
        debug: !1,
        verbose: !1,
        performance: !0,
        on: "click",
        action: "activate",
        apiSettings: !1,
        saveRemoteData: !0,
        throttle: 200,
        context: t,
        direction: "auto",
        keepOnScreen: !0,
        match: "both",
        fullTextSearch: !1,
        placeholder: "auto",
        preserveHTML: !0,
        sortSelect: !1,
        forceSelection: !0,
        allowAdditions: !1,
        maxSelections: !1,
        useLabels: !0,
        delimiter: ",",
        showOnFocus: !0,
        allowTab: !0,
        allowCategorySelection: !1,
        fireOnInit: !1,
        transition: "auto",
        duration: 200,
        glyphWidth: 1.0714,
        label: {
            transition: "scale",
            duration: 200,
            variation: !1
        },
        delay: {
            hide: 300,
            show: 200,
            search: 20,
            touch: 50
        },
        onChange: function(e, t, n) {},
        onAdd: function(e, t, n) {},
        onRemove: function(e, t, n) {},
        onLabelSelect: function(e) {},
        onLabelCreate: function(t, n) {
            return e(this)
        },
        onNoResults: function(e) {
            return ! 0
        },
        onShow: function() {},
        onHide: function() {},
        name: "Dropdown",
        namespace: "dropdown",
        message: {
            addResult: "Add <b>{term}</b>",
            count: "{count} selected",
            maxSelections: "Max {maxCount} selections",
            noResults: "No results found.",
            serverError: "There was an error contacting the server"
        },
        error: {
            action: "You called a dropdown action that was not defined",
            alreadySetup: "Once a select has been initialized behaviors must be called on the created ui dropdown",
            labels: "Allowing user additions currently requires the use of labels.",
            missingMultiple: "<select> requires multiple property to be set to correctly preserve multiple values",
            method: "The method you called is not defined.",
            noAPI: "The API module is required to load resources remotely",
            noStorage: "Saving remote data requires session storage",
            noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"
        },
        regExp: {
            escape: /[-[\]{}()*+?.,\\^$|#\s]/g
        },
        metadata: {
            defaultText: "defaultText",
            defaultValue: "defaultValue",
            placeholderText: "placeholder",
            text: "text",
            value: "value"
        },
        fields: {
            values: "values",
            name: "name",
            value: "value"
        },
        selector: {
            addition: ".addition",
            dropdown: ".ui.dropdown",
            icon: "> .dropdown.icon",
            input: '> input[type="hidden"], > select',
            item: ".item",
            label: "> .label",
            remove: "> .label > .delete.icon",
            siblingLabel: ".label",
            menu: ".menu",
            message: ".message",
            menuIcon: ".dropdown.icon",
            search: "input.search, .menu > .search > input",
            text: "> .text:not(.icon)",
            unselectable: ".disabled, .filtered"
        },
        className: {
            active: "active",
            addition: "addition",
            animating: "animating",
            disabled: "disabled",
            dropdown: "ui dropdown",
            filtered: "filtered",
            hidden: "hidden transition",
            item: "item",
            label: "ui label",
            loading: "loading",
            menu: "menu",
            message: "message",
            multiple: "multiple",
            placeholder: "default",
            search: "search",
            selected: "selected",
            selection: "selection",
            upward: "upward",
            visible: "visible"
        }
    },
    e.fn.dropdown.settings.templates = {
        dropdown: function(t) {
            var n = t.placeholder || !1,
            i = (t.values, "");
            return i += '<i class="dropdown icon"></i>',
            i += t.placeholder ? '<div class="default text">' + n + "</div>": '<div class="text"></div>',
            i += '<div class="menu">',
            e.each(t.values,
            function(e, t) {
                i += t.disabled ? '<div class="disabled item" data-value="' + t.value + '">' + t.name + "</div>": '<div class="item" data-value="' + t.value + '">' + t.name + "</div>"
            }),
            i += "</div>"
        },
        menu: function(t, n) {
            var i = (t.values, "");
            return e.each(t[n.values],
            function(e, t) {
                i += '<div class="item" data-value="' + t[n.value] + '">' + t[n.name] + "</div>"
            }),
            i
        },
        label: function(e, t) {
            return t + '<i class="delete icon"></i>'
        },
        message: function(e) {
            return e
        },
        addition: function(e) {
            return e
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.embed = function(n) {
        var i, o = e(this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);
        return o.each(function() {
            var d, f = e.isPlainObject(n) ? e.extend(!0, {},
            e.fn.embed.settings, n) : e.extend({},
            e.fn.embed.settings),
            p = f.selector,
            h = f.className,
            g = f.sources,
            m = f.error,
            v = f.metadata,
            b = f.namespace,
            y = f.templates,
            x = "." + b,
            w = "module-" + b,
            C = (e(t), e(this)),
            T = C.find(p.placeholder),
            k = C.find(p.icon),
            S = C.find(p.embed),
            E = this,
            A = C.data(w);
            d = {
                initialize: function() {
                    d.debug("Initializing embed"),
                    d.determine.autoplay(),
                    d.create(),
                    d.bind.events(),
                    d.instantiate()
                },
                instantiate: function() {
                    d.verbose("Storing instance of module", d),
                    A = d,
                    C.data(w, d)
                },
                destroy: function() {
                    d.verbose("Destroying previous instance of embed"),
                    d.reset(),
                    C.removeData(w).off(x)
                },
                refresh: function() {
                    d.verbose("Refreshing selector cache"),
                    T = C.find(p.placeholder),
                    k = C.find(p.icon),
                    S = C.find(p.embed)
                },
                bind: {
                    events: function() {
                        d.has.placeholder() && (d.debug("Adding placeholder events"), C.on("click" + x, p.placeholder, d.createAndShow).on("click" + x, p.icon, d.createAndShow))
                    }
                },
                create: function() {
                    d.get.placeholder() ? d.createPlaceholder() : d.createAndShow()
                },
                createPlaceholder: function(e) {
                    var t = d.get.icon(),
                    n = d.get.url();
                    d.generate.embed(n);
                    e = e || d.get.placeholder(),
                    C.html(y.placeholder(e, t)),
                    d.debug("Creating placeholder for embed", e, t)
                },
                createEmbed: function(t) {
                    d.refresh(),
                    t = t || d.get.url(),
                    S = e("<div/>").addClass(h.embed).html(d.generate.embed(t)).appendTo(C),
                    f.onCreate.call(E, t),
                    d.debug("Creating embed object", S)
                },
                createAndShow: function() {
                    d.createEmbed(),
                    d.show()
                },
                change: function(e, t, n) {
                    d.debug("Changing video to ", e, t, n),
                    C.data(v.source, e).data(v.id, t).data(v.url, n),
                    d.create()
                },
                reset: function() {
                    d.debug("Clearing embed and showing placeholder"),
                    d.remove.active(),
                    d.remove.embed(),
                    d.showPlaceholder(),
                    f.onReset.call(E)
                },
                show: function() {
                    d.debug("Showing embed"),
                    d.set.active(),
                    f.onDisplay.call(E)
                },
                hide: function() {
                    d.debug("Hiding embed"),
                    d.showPlaceholder()
                },
                showPlaceholder: function() {
                    d.debug("Showing placeholder image"),
                    d.remove.active(),
                    f.onPlaceholderDisplay.call(E)
                },
                get: {
                    id: function() {
                        return f.id || C.data(v.id)
                    },
                    placeholder: function() {
                        return f.placeholder || C.data(v.placeholder)
                    },
                    icon: function() {
                        return f.icon ? f.icon: void 0 !== C.data(v.icon) ? C.data(v.icon) : d.determine.icon()
                    },
                    source: function(e) {
                        return f.source ? f.source: void 0 !== C.data(v.source) ? C.data(v.source) : d.determine.source()
                    },
                    type: function() {
                        var e = d.get.source();
                        return void 0 !== g[e] && g[e].type
                    },
                    url: function() {
                        return f.url ? f.url: void 0 !== C.data(v.url) ? C.data(v.url) : d.determine.url()
                    }
                },
                determine: {
                    autoplay: function() {
                        d.should.autoplay() && (f.autoplay = !0)
                    },
                    source: function(t) {
                        var n = !1;
                        return t = t || d.get.url(),
                        t && e.each(g,
                        function(e, i) {
                            if (t.search(i.domain) !== -1) return n = e,
                            !1
                        }),
                        n
                    },
                    icon: function() {
                        var e = d.get.source();
                        return void 0 !== g[e] && g[e].icon
                    },
                    url: function() {
                        var e, t = f.id || C.data(v.id),
                        n = f.source || C.data(v.source);
                        return e = void 0 !== g[n] && g[n].url.replace("{id}", t),
                        e && C.data(v.url, e),
                        e
                    }
                },
                set: {
                    active: function() {
                        C.addClass(h.active)
                    }
                },
                remove: {
                    active: function() {
                        C.removeClass(h.active)
                    },
                    embed: function() {
                        S.empty()
                    }
                },
                encode: {
                    parameters: function(e) {
                        var t, n = [];
                        for (t in e) n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                        return n.join("&amp;")
                    }
                },
                generate: {
                    embed: function(e) {
                        d.debug("Generating embed html");
                        var t, n, i = d.get.source();
                        return e = d.get.url(e),
                        e ? (n = d.generate.parameters(i), t = y.iframe(e, n)) : d.error(m.noURL, C),
                        t
                    },
                    parameters: function(t, n) {
                        var i = g[t] && void 0 !== g[t].parameters ? g[t].parameters(f) : {};
                        return n = n || f.parameters,
                        n && (i = e.extend({},
                        i, n)),
                        i = f.onEmbed(i),
                        d.encode.parameters(i)
                    }
                },
                has: {
                    placeholder: function() {
                        return f.placeholder || C.data(v.placeholder)
                    }
                },
                should: {
                    autoplay: function() {
                        return "auto" === f.autoplay ? f.placeholder || void 0 !== C.data(v.placeholder) : f.autoplay
                    }
                },
                is: {
                    video: function() {
                        return "video" == d.get.type()
                    }
                },
                setting: function(t, n) {
                    if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (void 0 === n) return f[t];
                        f[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (void 0 === n) return d[t];
                        d[t] = n
                    }
                },
                debug: function() {
                    f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                },
                verbose: function() {
                    f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                },
                error: function() {
                    d.error = Function.prototype.bind.call(console.error, console, f.name + ":"),
                    d.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: E,
                            "Execution Time": n
                        })),
                        clearTimeout(d.performance.timer),
                        d.performance.timer = setTimeout(d.performance.display, 500)
                    },
                    display: function() {
                        var t = f.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(d.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = A;
                    return n = n || u,
                    o = E || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (d.error(m.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            c ? (void 0 === A && d.initialize(), d.invoke(l)) : (void 0 !== A && A.invoke("destroy"), d.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.embed.settings = {
        name: "Embed",
        namespace: "embed",
        debug: !1,
        verbose: !1,
        performance: !0,
        icon: !1,
        source: !1,
        url: !1,
        id: !1,
        autoplay: "auto",
        color: "#444444",
        hd: !0,
        brandedUI: !1,
        parameters: !1,
        onDisplay: function() {},
        onPlaceholderDisplay: function() {},
        onReset: function() {},
        onCreate: function(e) {},
        onEmbed: function(e) {
            return e
        },
        metadata: {
            id: "id",
            icon: "icon",
            placeholder: "placeholder",
            source: "source",
            url: "url"
        },
        error: {
            noURL: "No URL specified",
            method: "The method you called is not defined"
        },
        className: {
            active: "active",
            embed: "embed"
        },
        selector: {
            embed: ".embed",
            placeholder: ".placeholder",
            icon: ".icon"
        },
        sources: {
            youtube: {
                name: "youtube",
                type: "video",
                icon: "video play",
                domain: "youtube.com",
                url: "//www.youtube.com/embed/{id}",
                parameters: function(e) {
                    return {
                        autohide: !e.brandedUI,
                        autoplay: e.autoplay,
                        color: e.colors || void 0,
                        hq: e.hd,
                        jsapi: e.api,
                        modestbranding: !e.brandedUI
                    }
                }
            },
            vimeo: {
                name: "vimeo",
                type: "video",
                icon: "video play",
                domain: "vimeo.com",
                url: "//player.vimeo.com/video/{id}",
                parameters: function(e) {
                    return {
                        api: e.api,
                        autoplay: e.autoplay,
                        byline: e.brandedUI,
                        color: e.colors || void 0,
                        portrait: e.brandedUI,
                        title: e.brandedUI
                    }
                }
            }
        },
        templates: {
            iframe: function(e, t) {
                return '<iframe src="' + e + "?" + t + '" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            },
            placeholder: function(e, t) {
                var n = "";
                return t && (n += '<i class="' + t + ' icon"></i>'),
                e && (n += '<img class="placeholder" src="' + e + '">'),
                n
            }
        },
        api: !0,
        onPause: function() {},
        onPlay: function() {},
        onStop: function() {}
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.modal = function(i) {
        var o, r = e(this),
        a = e(t),
        s = e(n),
        l = e("body"),
        c = r.selector || "",
        u = (new Date).getTime(),
        d = [],
        f = arguments[0],
        p = "string" == typeof f,
        h = [].slice.call(arguments, 1),
        g = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame ||
        function(e) {
            setTimeout(e, 0)
        };
        return r.each(function() {
            var r, m, v, b, y, x, w, C, T, k = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.modal.settings, i) : e.extend({},
            e.fn.modal.settings),
            S = k.selector,
            E = k.className,
            A = k.namespace,
            D = k.error,
            N = "." + A,
            P = "module-" + A,
            j = e(this),
            O = e(k.context),
            R = j.find(S.close),
            q = this,
            F = j.data(P);
            T = {
                initialize: function() {
                    T.verbose("Initializing dimmer", O),
                    T.create.id(),
                    T.create.dimmer(),
                    T.refreshModals(),
                    T.bind.events(),
                    k.observeChanges && T.observeChanges(),
                    T.instantiate()
                },
                instantiate: function() {
                    T.verbose("Storing instance of modal"),
                    F = T,
                    j.data(P, F)
                },
                create: {
                    dimmer: function() {
                        var t = {
                            debug: k.debug,
                            dimmerName: "modals",
                            duration: {
                                show: k.duration,
                                hide: k.duration
                            }
                        },
                        n = e.extend(!0, t, k.dimmerSettings);
                        if (k.inverted && (n.variation = void 0 !== n.variation ? n.variation + " inverted": "inverted"), void 0 === e.fn.dimmer) return void T.error(D.dimmer);
                        T.debug("Creating dimmer with settings", n),
                        b = O.dimmer(n),
                        k.detachable ? (T.verbose("Modal is detachable, moving content into dimmer"), b.dimmer("add content", j)) : T.set.undetached(),
                        k.blurring && b.addClass(E.blurring),
                        y = b.dimmer("get dimmer")
                    },
                    id: function() {
                        w = (Math.random().toString(16) + "000000000").substr(2, 8),
                        x = "." + w,
                        T.verbose("Creating unique id for element", w)
                    }
                },
                destroy: function() {
                    T.verbose("Destroying previous modal"),
                    j.removeData(P).off(N),
                    a.off(x),
                    R.off(N),
                    O.dimmer("destroy")
                },
                observeChanges: function() {
                    "MutationObserver" in t && (C = new MutationObserver(function(e) {
                        T.debug("DOM tree modified, refreshing"),
                        T.refresh()
                    }), C.observe(q, {
                        childList: !0,
                        subtree: !0
                    }), T.debug("Setting up mutation observer", C))
                },
                refresh: function() {
                    T.remove.scrolling(),
                    T.cacheSizes(),
                    T.set.screenHeight(),
                    T.set.type(),
                    T.set.position()
                },
                refreshModals: function() {
                    m = j.siblings(S.modal),
                    r = m.add(j)
                },
                attachEvents: function(t, n) {
                    var i = e(t);
                    n = e.isFunction(T[n]) ? T[n] : T.toggle,
                    i.length > 0 ? (T.debug("Attaching modal events to element", t, n), i.off(N).on("click" + N, n)) : T.error(D.notFound, t)
                },
                bind: {
                    events: function() {
                        T.verbose("Attaching events"),
                        j.on("click" + N, S.close, T.event.close).on("click" + N, S.approve, T.event.approve).on("click" + N, S.deny, T.event.deny),
                        a.on("resize" + x, T.event.resize)
                    }
                },
                get: {
                    id: function() {
                        return (Math.random().toString(16) + "000000000").substr(2, 8)
                    }
                },
                event: {
                    approve: function() {
                        if (k.onApprove.call(q, e(this)) === !1) return void T.verbose("Approve callback returned false cancelling hide");
                        T.hide()
                    },
                    deny: function() {
                        if (k.onDeny.call(q, e(this)) === !1) return void T.verbose("Deny callback returned false cancelling hide");
                        T.hide()
                    },
                    close: function() {
                        T.hide()
                    },
                    click: function(t) {
                        var i = e(t.target),
                        o = i.closest(S.modal).length > 0,
                        r = e.contains(n.documentElement, t.target); ! o && r && (T.debug("Dimmer clicked, hiding all modals"), T.is.active() && (T.remove.clickaway(), k.allowMultiple ? T.hide() : T.hideAll()))
                    },
                    debounce: function(e, t) {
                        clearTimeout(T.timer),
                        T.timer = setTimeout(e, t)
                    },
                    keyboard: function(e) {
                        27 == e.which && (k.closable ? (T.debug("Escape key pressed hiding modal"), T.hide()) : T.debug("Escape key pressed, but closable is set to false"), e.preventDefault())
                    },
                    resize: function() {
                        b.dimmer("is active") && g(T.refresh)
                    }
                },
                toggle: function() {
                    T.is.active() || T.is.animating() ? T.hide() : T.show()
                },
                show: function(t) {
                    t = e.isFunction(t) ? t: function() {},
                    T.refreshModals(),
                    T.showModal(t)
                },
                hide: function(t) {
                    t = e.isFunction(t) ? t: function() {},
                    T.refreshModals(),
                    T.hideModal(t)
                },
                showModal: function(t) {
                    t = e.isFunction(t) ? t: function() {},
                    T.is.animating() || !T.is.active() ? (T.showDimmer(), T.cacheSizes(), T.set.position(), T.set.screenHeight(), T.set.type(), T.set.clickaway(), !k.allowMultiple && T.others.active() ? T.hideOthers(T.showModal) : (k.onShow.call(q), k.transition && void 0 !== e.fn.transition && j.transition("is supported") ? (T.debug("Showing modal with css animations"), j.transition({
                        debug: k.debug,
                        animation: k.transition + " in",
                        queue: k.queue,
                        duration: k.duration,
                        useFailSafe: !0,
                        onComplete: function() {
                            k.onVisible.apply(q),
                            T.add.keyboardShortcuts(),
                            T.save.focus(),
                            T.set.active(),
                            k.autofocus && T.set.autofocus(),
                            t()
                        }
                    })) : T.error(D.noTransition))) : T.debug("Modal is already visible")
                },
                hideModal: function(t, n) {
                    t = e.isFunction(t) ? t: function() {},
                    T.debug("Hiding modal"),
                    k.onHide.call(q),
                    (T.is.animating() || T.is.active()) && (k.transition && void 0 !== e.fn.transition && j.transition("is supported") ? (T.remove.active(), j.transition({
                        debug: k.debug,
                        animation: k.transition + " out",
                        queue: k.queue,
                        duration: k.duration,
                        useFailSafe: !0,
                        onStart: function() {
                            T.others.active() || n || T.hideDimmer(),
                            T.remove.keyboardShortcuts()
                        },
                        onComplete: function() {
                            k.onHidden.call(q),
                            T.restore.focus(),
                            t()
                        }
                    })) : T.error(D.noTransition))
                },
                showDimmer: function() {
                    b.dimmer("is animating") || !b.dimmer("is active") ? (T.debug("Showing dimmer"), b.dimmer("show")) : T.debug("Dimmer already visible")
                },
                hideDimmer: function() {
                    if (!b.dimmer("is animating") && !b.dimmer("is active")) return void T.debug("Dimmer is not visible cannot hide");
                    b.dimmer("hide",
                    function() {
                        T.remove.clickaway(),
                        T.remove.screenHeight()
                    })
                },
                hideAll: function(t) {
                    var n = r.filter("." + E.active + ", ." + E.animating);
                    t = e.isFunction(t) ? t: function() {},
                    n.length > 0 && (T.debug("Hiding all visible modals"), T.hideDimmer(), n.modal("hide modal", t))
                },
                hideOthers: function(t) {
                    var n = m.filter("." + E.active + ", ." + E.animating);
                    t = e.isFunction(t) ? t: function() {},
                    n.length > 0 && (T.debug("Hiding other modals", m), n.modal("hide modal", t, !0))
                },
                others: {
                    active: function() {
                        return m.filter("." + E.active).length > 0
                    },
                    animating: function() {
                        return m.filter("." + E.animating).length > 0
                    }
                },
                add: {
                    keyboardShortcuts: function() {
                        T.verbose("Adding keyboard shortcuts"),
                        s.on("keyup" + N, T.event.keyboard)
                    }
                },
                save: {
                    focus: function() {
                        v = e(n.activeElement).blur()
                    }
                },
                restore: {
                    focus: function() {
                        v && v.length > 0 && v.focus()
                    }
                },
                remove: {
                    active: function() {
                        j.removeClass(E.active)
                    },
                    clickaway: function() {
                        k.closable && y.off("click" + x)
                    },
                    bodyStyle: function() {
                        "" === l.attr("style") && (T.verbose("Removing style attribute"), l.removeAttr("style"))
                    },
                    screenHeight: function() {
                        T.debug("Removing page height"),
                        l.css("height", "")
                    },
                    keyboardShortcuts: function() {
                        T.verbose("Removing keyboard shortcuts"),
                        s.off("keyup" + N)
                    },
                    scrolling: function() {
                        b.removeClass(E.scrolling),
                        j.removeClass(E.scrolling)
                    }
                },
                cacheSizes: function() {
                    var i = j.outerHeight();
                    void 0 !== T.cache && 0 === i || (T.cache = {
                        pageHeight: e(n).outerHeight(),
                        height: i + k.offset,
                        contextHeight: "body" == k.context ? e(t).height() : b.height()
                    }),
                    T.debug("Caching modal and container sizes", T.cache)
                },
                can: {
                    fit: function() {
                        return T.cache.height + 2 * k.padding < T.cache.contextHeight
                    }
                },
                is: {
                    active: function() {
                        return j.hasClass(E.active)
                    },
                    animating: function() {
                        return j.transition("is supported") ? j.transition("is animating") : j.is(":visible")
                    },
                    scrolling: function() {
                        return b.hasClass(E.scrolling)
                    },
                    modernBrowser: function() {
                        return ! (t.ActiveXObject || "ActiveXObject" in t)
                    }
                },
                set: {
                    autofocus: function() {
                        var e = j.find(":input").filter(":visible"),
                        t = e.filter("[autofocus]"),
                        n = t.length > 0 ? t.first() : e.first();
                        n.length > 0 && n.focus()
                    },
                    clickaway: function() {
                        k.closable && y.on("click" + x, T.event.click)
                    },
                    screenHeight: function() {
                        T.can.fit() ? l.css("height", "") : (T.debug("Modal is taller than page content, resizing page height"), l.css("height", T.cache.height + 2 * k.padding))
                    },
                    active: function() {
                        j.addClass(E.active)
                    },
                    scrolling: function() {
                        b.addClass(E.scrolling),
                        j.addClass(E.scrolling)
                    },
                    type: function() {
                        T.can.fit() ? (T.verbose("Modal fits on screen"), T.others.active() || T.others.animating() || T.remove.scrolling()) : (T.verbose("Modal cannot fit on screen setting to scrolling"), T.set.scrolling())
                    },
                    position: function() {
                        T.verbose("Centering modal on page", T.cache),
                        T.can.fit() ? j.css({
                            top: "",
                            marginTop: -(T.cache.height / 2)
                        }) : j.css({
                            marginTop: "",
                            top: s.scrollTop()
                        })
                    },
                    undetached: function() {
                        b.addClass(E.undetached)
                    }
                },
                setting: function(t, n) {
                    if (T.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, k, t);
                    else {
                        if (void 0 === n) return k[t];
                        k[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, T, t);
                    else {
                        if (void 0 === n) return T[t];
                        T[t] = n
                    }
                },
                debug: function() {
                    k.debug && (k.performance ? T.performance.log(arguments) : (T.debug = Function.prototype.bind.call(console.info, console, k.name + ":"), T.debug.apply(console, arguments)))
                },
                verbose: function() {
                    k.verbose && k.debug && (k.performance ? T.performance.log(arguments) : (T.verbose = Function.prototype.bind.call(console.info, console, k.name + ":"), T.verbose.apply(console, arguments)))
                },
                error: function() {
                    T.error = Function.prototype.bind.call(console.error, console, k.name + ":"),
                    T.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        k.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: q,
                            "Execution Time": n
                        })),
                        clearTimeout(T.performance.timer),
                        T.performance.timer = setTimeout(T.performance.display, 500)
                    },
                    display: function() {
                        var t = k.name + ":",
                        n = 0;
                        u = !1,
                        clearTimeout(T.performance.timer),
                        e.each(d,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        c && (t += " '" + c + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        d = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = F;
                    return n = n || h,
                    i = q || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            p ? (void 0 === F && T.initialize(), T.invoke(f)) : (void 0 !== F && F.invoke("destroy"), T.initialize())
        }),
        void 0 !== o ? o: this
    },
    e.fn.modal.settings = {
        name: "Modal",
        namespace: "modal",
        debug: !1,
        verbose: !1,
        performance: !0,
        observeChanges: !1,
        allowMultiple: !1,
        detachable: !0,
        closable: !0,
        autofocus: !0,
        inverted: !1,
        blurring: !1,
        dimmerSettings: {
            closable: !1,
            useCSS: !0
        },
        context: "body",
        queue: !1,
        duration: 500,
        offset: 0,
        transition: "scale",
        padding: 50,
        onShow: function() {},
        onVisible: function() {},
        onHide: function() {},
        onHidden: function() {},
        onApprove: function() {
            return ! 0
        },
        onDeny: function() {
            return ! 0
        },
        selector: {
            close: "> .close",
            approve: ".actions .positive, .actions .approve, .actions .ok",
            deny: ".actions .negative, .actions .deny, .actions .cancel",
            modal: ".ui.modal"
        },
        error: {
            dimmer: "UI Dimmer, a required component is not included in this page",
            method: "The method you called is not defined.",
            notFound: "The element you specified could not be found"
        },
        className: {
            active: "active",
            animating: "animating",
            blurring: "blurring",
            scrolling: "scrolling",
            undetached: "undetached"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.nag = function(n) {
        var i, o = e(this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);
        return o.each(function() {
            var o, d = e.isPlainObject(n) ? e.extend(!0, {},
            e.fn.nag.settings, n) : e.extend({},
            e.fn.nag.settings),
            f = (d.className, d.selector),
            p = d.error,
            h = d.namespace,
            g = "." + h,
            m = h + "-module",
            v = e(this),
            b = (v.find(f.close), e(d.context ? d.context: "body")),
            y = this,
            x = v.data(m);
            t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
            o = {
                initialize: function() {
                    o.verbose("Initializing element"),
                    v.on("click" + g, f.close, o.dismiss).data(m, o),
                    d.detachable && v.parent()[0] !== b[0] && v.detach().prependTo(b),
                    d.displayTime > 0 && setTimeout(o.hide, d.displayTime),
                    o.show()
                },
                destroy: function() {
                    o.verbose("Destroying instance"),
                    v.removeData(m).off(g)
                },
                show: function() {
                    o.should.show() && !v.is(":visible") && (o.debug("Showing nag", d.animation.show), "fade" == d.animation.show ? v.fadeIn(d.duration, d.easing) : v.slideDown(d.duration, d.easing))
                },
                hide: function() {
                    o.debug("Showing nag", d.animation.hide),
                    "fade" == d.animation.show ? v.fadeIn(d.duration, d.easing) : v.slideUp(d.duration, d.easing)
                },
                onHide: function() {
                    o.debug("Removing nag", d.animation.hide),
                    v.remove(),
                    d.onHide && d.onHide()
                },
                dismiss: function(e) {
                    d.storageMethod && o.storage.set(d.key, d.value),
                    o.hide(),
                    e.stopImmediatePropagation(),
                    e.preventDefault()
                },
                should: {
                    show: function() {
                        return d.persist ? (o.debug("Persistent nag is set, can show nag"), !0) : o.storage.get(d.key) != d.value.toString() ? (o.debug("Stored value is not set, can show nag", o.storage.get(d.key)), !0) : (o.debug("Stored value is set, cannot show nag", o.storage.get(d.key)), !1)
                    }
                },
                get: {
                    storageOptions: function() {
                        var e = {};
                        return d.expires && (e.expires = d.expires),
                        d.domain && (e.domain = d.domain),
                        d.path && (e.path = d.path),
                        e
                    }
                },
                clear: function() {
                    o.storage.remove(d.key)
                },
                storage: {
                    set: function(n, i) {
                        var r = o.get.storageOptions();
                        if ("localstorage" == d.storageMethod && void 0 !== t.localStorage) t.localStorage.setItem(n, i),
                        o.debug("Value stored using local storage", n, i);
                        else if ("sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage) t.sessionStorage.setItem(n, i),
                        o.debug("Value stored using session storage", n, i);
                        else {
                            if (void 0 === e.cookie) return void o.error(p.noCookieStorage);
                            e.cookie(n, i, r),
                            o.debug("Value stored using cookie", n, i, r)
                        }
                    },
                    get: function(n, i) {
                        var r;
                        return "localstorage" == d.storageMethod && void 0 !== t.localStorage ? r = t.localStorage.getItem(n) : "sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage ? r = t.sessionStorage.getItem(n) : void 0 !== e.cookie ? r = e.cookie(n) : o.error(p.noCookieStorage),
                        "undefined" != r && "null" != r && void 0 !== r && null !== r || (r = void 0),
                        r
                    },
                    remove: function(n) {
                        var i = o.get.storageOptions();
                        "localstorage" == d.storageMethod && void 0 !== t.localStorage ? t.localStorage.removeItem(n) : "sessionstorage" == d.storageMethod && void 0 !== t.sessionStorage ? t.sessionStorage.removeItem(n) : void 0 !== e.cookie ? e.removeCookie(n, i) : o.error(p.noStorage)
                    }
                },
                setting: function(t, n) {
                    if (o.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (void 0 === n) return d[t];
                        d[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, o, t);
                    else {
                        if (void 0 === n) return o[t];
                        o[t] = n
                    }
                },
                debug: function() {
                    d.debug && (d.performance ? o.performance.log(arguments) : (o.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), o.debug.apply(console, arguments)))
                },
                verbose: function() {
                    d.verbose && d.debug && (d.performance ? o.performance.log(arguments) : (o.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), o.verbose.apply(console, arguments)))
                },
                error: function() {
                    o.error = Function.prototype.bind.call(console.error, console, d.name + ":"),
                    o.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        d.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: y,
                            "Execution Time": n
                        })),
                        clearTimeout(o.performance.timer),
                        o.performance.timer = setTimeout(o.performance.display, 500)
                    },
                    display: function() {
                        var t = d.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(o.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, r) {
                    var a, s, l, c = x;
                    return n = n || u,
                    r = y || r,
                    "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t,
                    function(n, i) {
                        var r = n != a ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(c[r]) && n != a) c = c[r];
                        else {
                            if (void 0 !== c[r]) return s = c[r],
                            !1;
                            if (!e.isPlainObject(c[i]) || n == a) return void 0 !== c[i] ? (s = c[i], !1) : (o.error(p.method, t), !1);
                            c = c[i]
                        }
                    })),
                    e.isFunction(s) ? l = s.apply(r, n) : void 0 !== s && (l = s),
                    e.isArray(i) ? i.push(l) : void 0 !== i ? i = [i, l] : void 0 !== l && (i = l),
                    s
                }
            },
            c ? (void 0 === x && o.initialize(), o.invoke(l)) : (void 0 !== x && x.invoke("destroy"), o.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.nag.settings = {
        name: "Nag",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "Nag",
        persist: !1,
        displayTime: 0,
        animation: {
            show: "slide",
            hide: "slide"
        },
        context: !1,
        detachable: !1,
        expires: 30,
        domain: !1,
        path: "/",
        storageMethod: "cookie",
        key: "nag",
        value: "dismiss",
        error: {
            noCookieStorage: "$.cookie is not included. A storage solution is required.",
            noStorage: "Neither $.cookie or store is defined. A storage solution is required for storing state",
            method: "The method you called is not defined."
        },
        className: {
            bottom: "bottom",
            fixed: "fixed"
        },
        selector: {
            close: ".close.icon"
        },
        speed: 500,
        easing: "easeOutQuad",
        onHide: function() {}
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.popup = function(i) {
        var o, r = e(this),
        a = e(n),
        s = e(t),
        l = e("body"),
        c = r.selector || "",
        u = (new Date).getTime(),
        d = [],
        f = arguments[0],
        p = "string" == typeof f,
        h = [].slice.call(arguments, 1);
        return r.each(function() {
            var n, r, g, m, v, b = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.popup.settings, i) : e.extend({},
            e.fn.popup.settings),
            y = b.selector,
            x = b.className,
            w = b.error,
            C = b.metadata,
            T = b.namespace,
            k = "." + b.namespace,
            S = "module-" + T,
            E = e(this),
            A = e(b.context),
            D = b.target ? e(b.target) : E,
            N = 0,
            P = !1,
            j = !1,
            O = this,
            R = E.data(S);
            v = {
                initialize: function() {
                    v.debug("Initializing", E),
                    v.createID(),
                    v.bind.events(),
                    !v.exists() && b.preserve && v.create(),
                    v.instantiate()
                },
                instantiate: function() {
                    v.verbose("Storing instance", v),
                    R = v,
                    E.data(S, R)
                },
                refresh: function() {
                    b.popup ? n = e(b.popup).eq(0) : b.inline && (n = D.nextAll(y.popup).eq(0), b.popup = n),
                    b.popup ? (n.addClass(x.loading), r = v.get.offsetParent(), n.removeClass(x.loading), b.movePopup && v.has.popup() && v.get.offsetParent(n)[0] !== r[0] && (v.debug("Moving popup to the same offset parent as activating element"), n.detach().appendTo(r))) : r = b.inline ? v.get.offsetParent(D) : v.has.popup() ? v.get.offsetParent(n) : l,
                    r.is("html") && r[0] !== l[0] && (v.debug("Setting page as offset parent"), r = l),
                    v.get.variation() && v.set.variation()
                },
                reposition: function() {
                    v.refresh(),
                    v.set.position()
                },
                destroy: function() {
                    v.debug("Destroying previous module"),
                    n && !b.preserve && v.removePopup(),
                    clearTimeout(v.hideTimer),
                    clearTimeout(v.showTimer),
                    s.off(g),
                    E.off(k).removeData(S)
                },
                event: {
                    start: function(t) {
                        var n = e.isPlainObject(b.delay) ? b.delay.show: b.delay;
                        clearTimeout(v.hideTimer),
                        j || (v.showTimer = setTimeout(v.show, n))
                    },
                    end: function() {
                        var t = e.isPlainObject(b.delay) ? b.delay.hide: b.delay;
                        clearTimeout(v.showTimer),
                        v.hideTimer = setTimeout(v.hide, t)
                    },
                    touchstart: function(e) {
                        j = !0,
                        v.show()
                    },
                    resize: function() {
                        v.is.visible() && v.set.position()
                    },
                    hideGracefully: function(t) {
                        t && 0 === e(t.target).closest(y.popup).length ? (v.debug("Click occurred outside popup hiding popup"), v.hide()) : v.debug("Click was inside popup, keeping popup open")
                    }
                },
                create: function() {
                    var t = v.get.html(),
                    i = v.get.title(),
                    o = v.get.content();
                    t || o || i ? (v.debug("Creating pop-up html"), t || (t = b.templates.popup({
                        title: i,
                        content: o
                    })), n = e("<div/>").addClass(x.popup).data(C.activator, E).html(t), b.inline ? (v.verbose("Inserting popup element inline", n), n.insertAfter(E)) : (v.verbose("Appending popup element to body", n), n.appendTo(A)), v.refresh(), v.set.variation(), b.hoverable && v.bind.popup(), b.onCreate.call(n, O)) : 0 !== D.next(y.popup).length ? (v.verbose("Pre-existing popup found"), b.inline = !0, b.popups = D.next(y.popup).data(C.activator, E), v.refresh(), b.hoverable && v.bind.popup()) : b.popup ? (e(b.popup).data(C.activator, E), v.verbose("Used popup specified in settings"), v.refresh(), b.hoverable && v.bind.popup()) : v.debug("No content specified skipping display", O)
                },
                createID: function() {
                    m = (Math.random().toString(16) + "000000000").substr(2, 8),
                    g = "." + m,
                    v.verbose("Creating unique id for element", m)
                },
                toggle: function() {
                    v.debug("Toggling pop-up"),
                    v.is.hidden() ? (v.debug("Popup is hidden, showing pop-up"), v.unbind.close(), v.show()) : (v.debug("Popup is visible, hiding pop-up"), v.hide())
                },
                show: function(e) {
                    if (e = e ||
                    function() {},
                    v.debug("Showing pop-up", b.transition), v.is.hidden() && (!v.is.active() || !v.is.dropdown())) {
                        if (v.exists() || v.create(), b.onShow.call(n, O) === !1) return void v.debug("onShow callback returned false, cancelling popup animation");
                        b.preserve || b.popup || v.refresh(),
                        n && v.set.position() && (v.save.conditions(), b.exclusive && v.hideAll(), v.animate.show(e))
                    }
                },
                hide: function(e) {
                    if (e = e ||
                    function() {},
                    v.is.visible() || v.is.animating()) {
                        if (b.onHide.call(n, O) === !1) return void v.debug("onHide callback returned false, cancelling popup animation");
                        v.remove.visible(),
                        v.unbind.close(),
                        v.restore.conditions(),
                        v.animate.hide(e)
                    }
                },
                hideAll: function() {
                    e(y.popup).filter("." + x.visible).each(function() {
                        e(this).data(C.activator).popup("hide")
                    })
                },
                exists: function() {
                    return !! n && (b.inline || b.popup ? v.has.popup() : n.closest(A).length >= 1)
                },
                removePopup: function() {
                    v.has.popup() && !b.popup && (v.debug("Removing popup", n), n.remove(), n = void 0, b.onRemove.call(n, O))
                },
                save: {
                    conditions: function() {
                        v.cache = {
                            title: E.attr("title")
                        },
                        v.cache.title && E.removeAttr("title"),
                        v.verbose("Saving original attributes", v.cache.title)
                    }
                },
                restore: {
                    conditions: function() {
                        return v.cache && v.cache.title && (E.attr("title", v.cache.title), v.verbose("Restoring original attributes", v.cache.title)),
                        !0
                    }
                },
                animate: {
                    show: function(t) {
                        t = e.isFunction(t) ? t: function() {},
                        b.transition && void 0 !== e.fn.transition && E.transition("is supported") ? (v.set.visible(), n.transition({
                            animation: b.transition + " in",
                            queue: !1,
                            debug: b.debug,
                            verbose: b.verbose,
                            duration: b.duration,
                            onComplete: function() {
                                v.bind.close(),
                                t.call(n, O),
                                b.onVisible.call(n, O)
                            }
                        })) : v.error(w.noTransition)
                    },
                    hide: function(t) {
                        if (t = e.isFunction(t) ? t: function() {},
                        v.debug("Hiding pop-up"), b.onHide.call(n, O) === !1) return void v.debug("onHide callback returned false, cancelling popup animation");
                        b.transition && void 0 !== e.fn.transition && E.transition("is supported") ? n.transition({
                            animation: b.transition + " out",
                            queue: !1,
                            duration: b.duration,
                            debug: b.debug,
                            verbose: b.verbose,
                            onComplete: function() {
                                v.reset(),
                                t.call(n, O),
                                b.onHidden.call(n, O)
                            }
                        }) : v.error(w.noTransition)
                    }
                },
                get: {
                    html: function() {
                        return E.removeData(C.html),
                        E.data(C.html) || b.html
                    },
                    title: function() {
                        return E.removeData(C.title),
                        E.data(C.title) || b.title
                    },
                    content: function() {
                        return E.removeData(C.content),
                        E.data(C.content) || E.attr("title") || b.content
                    },
                    variation: function() {
                        return E.removeData(C.variation),
                        E.data(C.variation) || b.variation
                    },
                    popupOffset: function() {
                        return n.offset()
                    },
                    calculations: function() {
                        var e, i = D[0],
                        o = b.inline || b.popup ? D.position() : D.offset(),
                        a = {};
                        return a = {
                            target: {
                                element: D[0],
                                width: D.outerWidth(),
                                height: D.outerHeight(),
                                top: o.top,
                                left: o.left,
                                margin: {}
                            },
                            popup: {
                                width: n.outerWidth(),
                                height: n.outerHeight()
                            },
                            parent: {
                                width: r.outerWidth(),
                                height: r.outerHeight()
                            },
                            screen: {
                                scroll: {
                                    top: s.scrollTop(),
                                    left: s.scrollLeft()
                                },
                                width: s.width(),
                                height: s.height()
                            }
                        },
                        b.setFluidWidth && v.is.fluid() && (a.container = {
                            width: n.parent().outerWidth()
                        },
                        a.popup.width = a.container.width),
                        a.target.margin.top = b.inline ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-top"), 10) : 0,
                        a.target.margin.left = b.inline ? v.is.rtl() ? parseInt(t.getComputedStyle(i).getPropertyValue("margin-right"), 10) : parseInt(t.getComputedStyle(i).getPropertyValue("margin-left"), 10) : 0,
                        e = a.screen,
                        a.boundary = {
                            top: e.scroll.top,
                            bottom: e.scroll.top + e.height,
                            left: e.scroll.left,
                            right: e.scroll.left + e.width
                        },
                        a
                    },
                    id: function() {
                        return m
                    },
                    startEvent: function() {
                        return "hover" == b.on ? "mouseenter": "focus" == b.on && "focus"
                    },
                    scrollEvent: function() {
                        return "scroll"
                    },
                    endEvent: function() {
                        return "hover" == b.on ? "mouseleave": "focus" == b.on && "blur"
                    },
                    distanceFromBoundary: function(e, t) {
                        var n, i, o = {};
                        return e = e || v.get.offset(),
                        t = t || v.get.calculations(),
                        n = t.popup,
                        i = t.boundary,
                        e && (o = {
                            top: e.top - i.top,
                            left: e.left - i.left,
                            right: i.right - (e.left + n.width),
                            bottom: i.bottom - (e.top + n.height)
                        },
                        v.verbose("Distance from boundaries determined", e, o)),
                        o
                    },
                    offsetParent: function(t) {
                        var n = void 0 !== t ? t[0] : E[0],
                        i = n.parentNode,
                        o = e(i);
                        if (i) for (var r = "none" === o.css("transform"), a = "static" === o.css("position"), s = o.is("html"); i && !s && a && r;) i = i.parentNode,
                        o = e(i),
                        r = "none" === o.css("transform"),
                        a = "static" === o.css("position"),
                        s = o.is("html");
                        return o && o.length > 0 ? o: e()
                    },
                    positions: function() {
                        return {
                            "top left": !1,
                            "top center": !1,
                            "top right": !1,
                            "bottom left": !1,
                            "bottom center": !1,
                            "bottom right": !1,
                            "left center": !1,
                            "right center": !1
                        }
                    },
                    nextPosition: function(e) {
                        var t = e.split(" "),
                        n = t[0],
                        i = t[1],
                        o = {
                            top: "bottom",
                            bottom: "top",
                            left: "right",
                            right: "left"
                        },
                        r = {
                            left: "center",
                            center: "right",
                            right: "left"
                        },
                        a = {
                            "top left": "top center",
                            "top center": "top right",
                            "top right": "right center",
                            "right center": "bottom right",
                            "bottom right": "bottom center",
                            "bottom center": "bottom left",
                            "bottom left": "left center",
                            "left center": "top left"
                        },
                        s = "top" == n || "bottom" == n,
                        l = !1,
                        c = !1,
                        u = !1;
                        return P || (v.verbose("All available positions available"), P = v.get.positions()),
                        v.debug("Recording last position tried", e),
                        P[e] = !0,
                        "opposite" === b.prefer && (u = [o[n], i], u = u.join(" "), l = P[u] === !0, v.debug("Trying opposite strategy", u)),
                        "adjacent" === b.prefer && s && (u = [n, r[i]], u = u.join(" "), c = P[u] === !0, v.debug("Trying adjacent strategy", u)),
                        (c || l) && (v.debug("Using backup position", u), u = a[e]),
                        u
                    }
                },
                set: {
                    position: function(e, t) {
                        if (0 === D.length || 0 === n.length) return void v.error(w.notFound);
                        var i, o, r, a, s, l, c, u;
                        if (t = t || v.get.calculations(), e = e || E.data(C.position) || b.position, i = E.data(C.offset) || b.offset, o = b.distanceAway, r = t.target, a = t.popup, s = t.parent, 0 === r.width && 0 === r.height) return v.debug("Popup target is hidden, no action taken"),
                        !1;
                        switch (b.inline && (v.debug("Adding margin to calculation", r.margin), "left center" == e || "right center" == e ? (i += r.margin.top, o += -r.margin.left) : "top left" == e || "top center" == e || "top right" == e ? (i += r.margin.left, o -= r.margin.top) : (i += r.margin.left, o += r.margin.top)), v.debug("Determining popup position from calculations", e, t), v.is.rtl() && (e = e.replace(/left|right/g,
                        function(e) {
                            return "left" == e ? "right": "left"
                        }), v.debug("RTL: Popup position updated", e)), N == b.maxSearchDepth && "string" == typeof b.lastResort && (e = b.lastResort), e) {
                        case "top left":
                            l = {
                                top: "auto",
                                bottom: s.height - r.top + o,
                                left: r.left + i,
                                right: "auto"
                            };
                            break;
                        case "top center":
                            l = {
                                bottom: s.height - r.top + o,
                                left: r.left + r.width / 2 - a.width / 2 + i,
                                top: "auto",
                                right: "auto"
                            };
                            break;
                        case "top right":
                            l = {
                                bottom: s.height - r.top + o,
                                right: s.width - r.left - r.width - i,
                                top: "auto",
                                left: "auto"
                            };
                            break;
                        case "left center":
                            l = {
                                top: r.top + r.height / 2 - a.height / 2 + i,
                                right: s.width - r.left + o,
                                left: "auto",
                                bottom: "auto"
                            };
                            break;
                        case "right center":
                            l = {
                                top: r.top + r.height / 2 - a.height / 2 + i,
                                left: r.left + r.width + o,
                                bottom: "auto",
                                right: "auto"
                            };
                            break;
                        case "bottom left":
                            l = {
                                top: r.top + r.height + o,
                                left: r.left + i,
                                bottom: "auto",
                                right: "auto"
                            };
                            break;
                        case "bottom center":
                            l = {
                                top: r.top + r.height + o,
                                left: r.left + r.width / 2 - a.width / 2 + i,
                                bottom: "auto",
                                right: "auto"
                            };
                            break;
                        case "bottom right":
                            l = {
                                top: r.top + r.height + o,
                                right: s.width - r.left - r.width - i,
                                left: "auto",
                                bottom: "auto"
                            }
                        }
                        if (void 0 === l && v.error(w.invalidPosition, e), v.debug("Calculated popup positioning values", l), n.css(l).removeClass(x.position).addClass(e).addClass(x.loading), c = v.get.popupOffset(), u = v.get.distanceFromBoundary(c, t), v.is.offstage(u, e)) {
                            if (v.debug("Position is outside viewport", e), N < b.maxSearchDepth) return N++,
                            e = v.get.nextPosition(e),
                            v.debug("Trying new position", e),
                            !!n && v.set.position(e, t);
                            if (!b.lastResort) return v.debug("Popup could not find a position to display", n),
                            v.error(w.cannotPlace, O),
                            v.remove.attempts(),
                            v.remove.loading(),
                            v.reset(),
                            !1;
                            v.debug("No position found, showing with last position")
                        }
                        return v.debug("Position is on stage", e),
                        v.remove.attempts(),
                        v.remove.loading(),
                        b.setFluidWidth && v.is.fluid() && v.set.fluidWidth(t),
                        !0
                    },
                    fluidWidth: function(e) {
                        e = e || v.get.calculations(),
                        v.debug("Automatically setting element width to parent width", e.parent.width),
                        n.css("width", e.container.width)
                    },
                    variation: function(e) { (e = e || v.get.variation()) && v.has.popup() && (v.verbose("Adding variation to popup", e), n.addClass(e))
                    },
                    visible: function() {
                        E.addClass(x.visible)
                    }
                },
                remove: {
                    loading: function() {
                        n.removeClass(x.loading)
                    },
                    variation: function(e) { (e = e || v.get.variation()) && (v.verbose("Removing variation", e), n.removeClass(e))
                    },
                    visible: function() {
                        E.removeClass(x.visible)
                    },
                    attempts: function() {
                        v.verbose("Resetting all searched positions"),
                        N = 0,
                        P = !1
                    }
                },
                bind: {
                    events: function() {
                        v.debug("Binding popup events to module"),
                        "click" == b.on && E.on("click" + k, v.toggle),
                        "hover" == b.on && E.on("touchstart" + k, v.event.touchstart),
                        v.get.startEvent() && E.on(v.get.startEvent() + k, v.event.start).on(v.get.endEvent() + k, v.event.end),
                        b.target && v.debug("Target set to element", D),
                        s.on("resize" + g, v.event.resize)
                    },
                    popup: function() {
                        v.verbose("Allowing hover events on popup to prevent closing"),
                        n && v.has.popup() && n.on("mouseenter" + k, v.event.start).on("mouseleave" + k, v.event.end)
                    },
                    close: function() { (b.hideOnScroll === !0 || "auto" == b.hideOnScroll && "click" != b.on) && (a.one(v.get.scrollEvent() + g, v.event.hideGracefully), A.one(v.get.scrollEvent() + g, v.event.hideGracefully)),
                        "hover" == b.on && j && (v.verbose("Binding popup close event to document"), a.on("touchstart" + g,
                        function(e) {
                            v.verbose("Touched away from popup"),
                            v.event.hideGracefully.call(O, e)
                        })),
                        "click" == b.on && b.closable && (v.verbose("Binding popup close event to document"), a.on("click" + g,
                        function(e) {
                            v.verbose("Clicked away from popup"),
                            v.event.hideGracefully.call(O, e)
                        }))
                    }
                },
                unbind: {
                    close: function() { (b.hideOnScroll === !0 || "auto" == b.hideOnScroll && "click" != b.on) && (a.off("scroll" + g, v.hide), A.off("scroll" + g, v.hide)),
                        "hover" == b.on && j && (a.off("touchstart" + g), j = !1),
                        "click" == b.on && b.closable && (v.verbose("Removing close event from document"), a.off("click" + g))
                    }
                },
                has: {
                    popup: function() {
                        return n && n.length > 0
                    }
                },
                is: {
                    offstage: function(t, n) {
                        var i = [];
                        return e.each(t,
                        function(e, t) {
                            t < -b.jitter && (v.debug("Position exceeds allowable distance from edge", e, t, n), i.push(e))
                        }),
                        i.length > 0
                    },
                    active: function() {
                        return E.hasClass(x.active)
                    },
                    animating: function() {
                        return n && n.hasClass(x.animating)
                    },
                    fluid: function() {
                        return n && n.hasClass(x.fluid)
                    },
                    visible: function() {
                        return n && n.hasClass(x.visible)
                    },
                    dropdown: function() {
                        return E.hasClass(x.dropdown)
                    },
                    hidden: function() {
                        return ! v.is.visible()
                    },
                    rtl: function() {
                        return "rtl" == E.css("direction")
                    }
                },
                reset: function() {
                    v.remove.visible(),
                    b.preserve ? void 0 !== e.fn.transition && n.transition("remove transition") : v.removePopup()
                },
                setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, b, t);
                    else {
                        if (void 0 === n) return b[t];
                        b[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, v, t);
                    else {
                        if (void 0 === n) return v[t];
                        v[t] = n
                    }
                },
                debug: function() {
                    b.debug && (b.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, b.name + ":"), v.debug.apply(console, arguments)))
                },
                verbose: function() {
                    b.verbose && b.debug && (b.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, b.name + ":"), v.verbose.apply(console, arguments)))
                },
                error: function() {
                    v.error = Function.prototype.bind.call(console.error, console, b.name + ":"),
                    v.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        b.performance && (t = (new Date).getTime(), i = u || t, n = t - i, u = t, d.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: O,
                            "Execution Time": n
                        })),
                        clearTimeout(v.performance.timer),
                        v.performance.timer = setTimeout(v.performance.display, 500)
                    },
                    display: function() {
                        var t = b.name + ":",
                        n = 0;
                        u = !1,
                        clearTimeout(v.performance.timer),
                        e.each(d,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        c && (t += " '" + c + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && d.length > 0 && (console.groupCollapsed(t), console.table ? console.table(d) : e.each(d,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        d = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = R;
                    return n = n || h,
                    i = O || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            p ? (void 0 === R && v.initialize(), v.invoke(f)) : (void 0 !== R && R.invoke("destroy"), v.initialize())
        }),
        void 0 !== o ? o: this
    },
    e.fn.popup.settings = {
        name: "Popup",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "popup",
        onCreate: function() {},
        onRemove: function() {},
        onShow: function() {},
        onVisible: function() {},
        onHide: function() {},
        onHidden: function() {},
        on: "hover",
        addTouchEvents: !0,
        position: "top left",
        variation: "",
        movePopup: !0,
        target: !1,
        popup: !1,
        inline: !1,
        preserve: !1,
        hoverable: !1,
        content: !1,
        html: !1,
        title: !1,
        closable: !0,
        hideOnScroll: "auto",
        exclusive: !1,
        context: "body",
        prefer: "opposite",
        lastResort: !1,
        delay: {
            show: 50,
            hide: 70
        },
        setFluidWidth: !0,
        duration: 200,
        transition: "scale",
        distanceAway: 0,
        jitter: 2,
        offset: 0,
        maxSearchDepth: 15,
        error: {
            invalidPosition: "The position you specified is not a valid position",
            cannotPlace: "Popup does not fit within the boundaries of the viewport",
            method: "The method you called is not defined.",
            noTransition: "This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",
            notFound: "The target or popup you specified does not exist on the page"
        },
        metadata: {
            activator: "activator",
            content: "content",
            html: "html",
            offset: "offset",
            position: "position",
            title: "title",
            variation: "variation"
        },
        className: {
            active: "active",
            animating: "animating",
            dropdown: "dropdown",
            fluid: "fluid",
            loading: "loading",
            popup: "ui popup",
            position: "top left center bottom right",
            visible: "visible"
        },
        selector: {
            popup: ".ui.popup"
        },
        templates: {
            escape: function(e) {
                var t = /[&<>"'`]/,
                n = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                i = function(e) {
                    return n[e]
                };
                return t.test(e) ? e.replace(/[&<>"'`]/g, i) : e
            },
            popup: function(t) {
                var n = "",
                i = e.fn.popup.settings.templates.escape;
                return void 0 !== typeof t && (void 0 !== typeof t.title && t.title && (t.title = i(t.title), n += '<div class="header">' + t.title + "</div>"), void 0 !== typeof t.content && t.content && (t.content = i(t.content), n += '<div class="content">' + t.content + "</div>")),
                n
            }
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.progress = function(t) {
        var i, o = e(this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);
        return o.each(function() {
            var o, d, f = e.isPlainObject(t) ? e.extend(!0, {},
            e.fn.progress.settings, t) : e.extend({},
            e.fn.progress.settings),
            p = f.className,
            h = f.metadata,
            g = f.namespace,
            m = f.selector,
            v = f.error,
            b = "." + g,
            y = "module-" + g,
            x = e(this),
            w = e(this).find(m.bar),
            C = e(this).find(m.progress),
            T = e(this).find(m.label),
            k = this,
            S = x.data(y),
            E = !1;
            d = {
                initialize: function() {
                    d.debug("Initializing progress bar", f),
                    d.set.duration(),
                    d.set.transitionEvent(),
                    d.read.metadata(),
                    d.read.settings(),
                    d.instantiate()
                },
                instantiate: function() {
                    d.verbose("Storing instance of progress", d),
                    S = d,
                    x.data(y, d)
                },
                destroy: function() {
                    d.verbose("Destroying previous progress for", x),
                    clearInterval(S.interval),
                    d.remove.state(),
                    x.removeData(y),
                    S = void 0
                },
                reset: function() {
                    d.set.percent(0)
                },
                complete: function() { (void 0 === d.percent || d.percent < 100) && d.set.percent(100)
                },
                read: {
                    metadata: function() {
                        var e = {
                            percent: x.data(h.percent),
                            total: x.data(h.total),
                            value: x.data(h.value)
                        };
                        e.percent && (d.debug("Current percent value set from metadata", e.percent), d.set.percent(e.percent)),
                        e.total && (d.debug("Total value set from metadata", e.total), d.set.total(e.total)),
                        e.value && (d.debug("Current value set from metadata", e.value), d.set.value(e.value), d.set.progress(e.value))
                    },
                    settings: function() {
                        f.total !== !1 && (d.debug("Current total set in settings", f.total), d.set.total(f.total)),
                        f.value !== !1 && (d.debug("Current value set in settings", f.value), d.set.value(f.value), d.set.progress(d.value)),
                        f.percent !== !1 && (d.debug("Current percent set in settings", f.percent), d.set.percent(f.percent))
                    }
                },
                increment: function(e) {
                    var t, n, i;
                    d.has.total() ? (n = d.get.value(), e = e || 1, i = n + e, t = d.get.total(), d.debug("Incrementing value", n, i, t), i > t && (d.debug("Value cannot increment above total", t), i = t)) : (n = d.get.percent(), e = e || d.get.randomValue(), i = n + e, t = 100, d.debug("Incrementing percentage by", n, i), i > t && (d.debug("Value cannot increment above 100 percent"), i = t)),
                    d.set.progress(i)
                },
                decrement: function(e) {
                    var t, n, i = d.get.total();
                    i ? (t = d.get.value(), e = e || 1, n = t - e, d.debug("Decrementing value by", e, t)) : (t = d.get.percent(), e = e || d.get.randomValue(), n = t - e, d.debug("Decrementing percentage by", e, t)),
                    n < 0 && (d.debug("Value cannot decrement below 0"), n = 0),
                    d.set.progress(n)
                },
                has: {
                    total: function() {
                        return d.get.total() !== !1
                    }
                },
                get: {
                    text: function(e) {
                        var t = d.value || 0,
                        n = d.total || 0,
                        i = E ? d.get.displayPercent() : d.percent || 0,
                        o = d.total > 0 ? n - t: 100 - i;
                        return e = e || "",
                        e = e.replace("{value}", t).replace("{total}", n).replace("{left}", o).replace("{percent}", i),
                        d.debug("Adding variables to progress bar text", e),
                        e
                    },
                    randomValue: function() {
                        return d.debug("Generating random increment percentage"),
                        Math.floor(Math.random() * f.random.max + f.random.min)
                    },
                    numericValue: function(e) {
                        return "string" == typeof e ? "" !== e.replace(/[^\d.]/g, "") && +e.replace(/[^\d.]/g, "") : e
                    },
                    transitionEnd: function() {
                        var e, t = n.createElement("element"),
                        i = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                        for (e in i) if (void 0 !== t.style[e]) return i[e]
                    },
                    displayPercent: function() {
                        var e = w.width(),
                        t = x.width(),
                        n = parseInt(w.css("min-width"), 10),
                        i = e > n ? e / t * 100 : d.percent;
                        return f.precision > 0 ? Math.round(i * (10 * f.precision)) / (10 * f.precision) : Math.round(i)
                    },
                    percent: function() {
                        return d.percent || 0
                    },
                    value: function() {
                        return d.value || 0
                    },
                    total: function() {
                        return d.total || !1
                    }
                },
                is: {
                    success: function() {
                        return x.hasClass(p.success)
                    },
                    warning: function() {
                        return x.hasClass(p.warning)
                    },
                    error: function() {
                        return x.hasClass(p.error)
                    },
                    active: function() {
                        return x.hasClass(p.active)
                    },
                    visible: function() {
                        return x.is(":visible")
                    }
                },
                remove: {
                    state: function() {
                        d.verbose("Removing stored state"),
                        delete d.total,
                        delete d.percent,
                        delete d.value
                    },
                    active: function() {
                        d.verbose("Removing active state"),
                        x.removeClass(p.active)
                    },
                    success: function() {
                        d.verbose("Removing success state"),
                        x.removeClass(p.success)
                    },
                    warning: function() {
                        d.verbose("Removing warning state"),
                        x.removeClass(p.warning)
                    },
                    error: function() {
                        d.verbose("Removing error state"),
                        x.removeClass(p.error)
                    }
                },
                set: {
                    barWidth: function(e) {
                        e > 100 ? d.error(v.tooHigh, e) : e < 0 ? d.error(v.tooLow, e) : (w.css("width", e + "%"), x.attr("data-percent", parseInt(e, 10)))
                    },
                    duration: function(e) {
                        e = e || f.duration,
                        e = "number" == typeof e ? e + "ms": e,
                        d.verbose("Setting progress bar transition duration", e),
                        w.css({
                            "transition-duration": e
                        })
                    },
                    percent: function(e) {
                        e = "string" == typeof e ? +e.replace("%", "") : e,
                        e = f.precision > 0 ? Math.round(e * (10 * f.precision)) / (10 * f.precision) : Math.round(e),
                        d.percent = e,
                        d.has.total() || (d.value = f.precision > 0 ? Math.round(e / 100 * d.total * (10 * f.precision)) / (10 * f.precision) : Math.round(e / 100 * d.total * 10) / 10, f.limitValues && (d.value = d.value > 100 ? 100 : d.value < 0 ? 0 : d.value)),
                        d.set.barWidth(e),
                        d.set.labelInterval(),
                        d.set.labels(),
                        f.onChange.call(k, e, d.value, d.total)
                    },
                    labelInterval: function() {
                        var e = function() {
                            d.verbose("Bar finished animating, removing continuous label updates"),
                            clearInterval(d.interval),
                            E = !1,
                            d.set.labels()
                        };
                        clearInterval(d.interval),
                        w.one(o + b, e),
                        d.timer = setTimeout(e, f.duration + 100),
                        E = !0,
                        d.interval = setInterval(d.set.labels, f.framerate)
                    },
                    labels: function() {
                        d.verbose("Setting both bar progress and outer label text"),
                        d.set.barLabel(),
                        d.set.state()
                    },
                    label: function(e) { (e = e || "") && (e = d.get.text(e), d.debug("Setting label to text", e), T.text(e))
                    },
                    state: function(e) {
                        e = void 0 !== e ? e: d.percent,
                        100 === e ? !f.autoSuccess || d.is.warning() || d.is.error() ? (d.verbose("Reached 100% removing active state"), d.remove.active()) : (d.set.success(), d.debug("Automatically triggering success at 100%")) : e > 0 ? (d.verbose("Adjusting active progress bar label", e), d.set.active()) : (d.remove.active(), d.set.label(f.text.active))
                    },
                    barLabel: function(e) {
                        void 0 !== e ? C.text(d.get.text(e)) : "ratio" == f.label && d.total ? (d.debug("Adding ratio to bar label"), C.text(d.get.text(f.text.ratio))) : "percent" == f.label && (d.debug("Adding percentage to bar label"), C.text(d.get.text(f.text.percent)))
                    },
                    active: function(e) {
                        e = e || f.text.active,
                        d.debug("Setting active state"),
                        f.showActivity && !d.is.active() && x.addClass(p.active),
                        d.remove.warning(),
                        d.remove.error(),
                        d.remove.success(),
                        e && d.set.label(e),
                        f.onActive.call(k, d.value, d.total)
                    },
                    success: function(e) {
                        e = e || f.text.success,
                        d.debug("Setting success state"),
                        x.addClass(p.success),
                        d.remove.active(),
                        d.remove.warning(),
                        d.remove.error(),
                        d.complete(),
                        e && d.set.label(e),
                        f.onSuccess.call(k, d.total)
                    },
                    warning: function(e) {
                        e = e || f.text.warning,
                        d.debug("Setting warning state"),
                        x.addClass(p.warning),
                        d.remove.active(),
                        d.remove.success(),
                        d.remove.error(),
                        d.complete(),
                        e && d.set.label(e),
                        f.onWarning.call(k, d.value, d.total)
                    },
                    error: function(e) {
                        e = e || f.text.error,
                        d.debug("Setting error state"),
                        x.addClass(p.error),
                        d.remove.active(),
                        d.remove.success(),
                        d.remove.warning(),
                        d.complete(),
                        e && d.set.label(e),
                        f.onError.call(k, d.value, d.total)
                    },
                    transitionEvent: function() {
                        o = d.get.transitionEnd()
                    },
                    total: function(e) {
                        d.total = e
                    },
                    value: function(e) {
                        d.value = e
                    },
                    progress: function(e) {
                        var t, n = d.get.numericValue(e);
                        n === !1 && d.error(v.nonNumeric, e),
                        d.has.total() ? (d.set.value(n), t = n / d.total * 100, d.debug("Calculating percent complete from total", t), d.set.percent(t)) : (t = n, d.debug("Setting value to exact percentage value", t), d.set.percent(t))
                    }
                },
                setting: function(t, n) {
                    if (d.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (void 0 === n) return f[t];
                        f[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (void 0 === n) return d[t];
                        d[t] = n
                    }
                },
                debug: function() {
                    f.debug && (f.performance ? d.performance.log(arguments) : (d.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), d.debug.apply(console, arguments)))
                },
                verbose: function() {
                    f.verbose && f.debug && (f.performance ? d.performance.log(arguments) : (d.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), d.verbose.apply(console, arguments)))
                },
                error: function() {
                    d.error = Function.prototype.bind.call(console.error, console, f.name + ":"),
                    d.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: k,
                            "Execution Time": n
                        })),
                        clearTimeout(d.performance.timer),
                        d.performance.timer = setTimeout(d.performance.display, 500)
                    },
                    display: function() {
                        var t = f.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(d.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = S;
                    return n = n || u,
                    o = k || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (d.error(v.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            c ? (void 0 === S && d.initialize(), d.invoke(l)) : (void 0 !== S && S.invoke("destroy"), d.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.progress.settings = {
        name: "Progress",
        namespace: "progress",
        debug: !1,
        verbose: !1,
        performance: !0,
        random: {
            min: 2,
            max: 5
        },
        duration: 300,
        autoSuccess: !0,
        showActivity: !0,
        limitValues: !0,
        label: "percent",
        precision: 0,
        framerate: 1e3 / 30,
        percent: !1,
        total: !1,
        value: !1,
        onChange: function(e, t, n) {},
        onSuccess: function(e) {},
        onActive: function(e, t) {},
        onError: function(e, t) {},
        onWarning: function(e, t) {},
        error: {
            method: "The method you called is not defined.",
            nonNumeric: "Progress value is non numeric",
            tooHigh: "Value specified is above 100%",
            tooLow: "Value specified is below 0%"
        },
        regExp: {
            variable: /\{\$*[A-z0-9]+\}/g
        },
        metadata: {
            percent: "percent",
            total: "total",
            value: "value"
        },
        selector: {
            bar: "> .bar",
            label: "> .label",
            progress: ".bar > .progress"
        },
        text: {
            active: !1,
            error: !1,
            success: !1,
            warning: !1,
            percent: "{percent}%",
            ratio: "{value} of {total}"
        },
        className: {
            active: "active",
            error: "error",
            success: "success",
            warning: "warning"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.rating = function(t) {
        var n, i = e(this),
        o = i.selector || "",
        r = (new Date).getTime(),
        a = [],
        s = arguments[0],
        l = "string" == typeof s,
        c = [].slice.call(arguments, 1);
        return i.each(function() {
            var u, d = e.isPlainObject(t) ? e.extend(!0, {},
            e.fn.rating.settings, t) : e.extend({},
            e.fn.rating.settings),
            f = d.namespace,
            p = d.className,
            h = d.metadata,
            g = d.selector,
            m = (d.error, "." + f),
            v = "module-" + f,
            b = this,
            y = e(this).data(v),
            x = e(this),
            w = x.find(g.icon);
            u = {
                initialize: function() {
                    u.verbose("Initializing rating module", d),
                    0 === w.length && u.setup.layout(),
                    d.interactive ? u.enable() : u.disable(),
                    u.set.rating(u.get.initialRating()),
                    u.instantiate()
                },
                instantiate: function() {
                    u.verbose("Instantiating module", d),
                    y = u,
                    x.data(v, u)
                },
                destroy: function() {
                    u.verbose("Destroying previous instance", y),
                    u.remove.events(),
                    x.removeData(v)
                },
                refresh: function() {
                    w = x.find(g.icon)
                },
                setup: {
                    layout: function() {
                        var t = u.get.maxRating(),
                        n = e.fn.rating.settings.templates.icon(t);
                        u.debug("Generating icon html dynamically"),
                        x.html(n),
                        u.refresh()
                    }
                },
                event: {
                    mouseenter: function() {
                        var t = e(this);
                        t.nextAll().removeClass(p.selected),
                        x.addClass(p.selected),
                        t.addClass(p.selected).prevAll().addClass(p.selected)
                    },
                    mouseleave: function() {
                        x.removeClass(p.selected),
                        w.removeClass(p.selected)
                    },
                    click: function() {
                        var t = e(this),
                        n = u.get.rating(),
                        i = w.index(t) + 1; ("auto" == d.clearable ? 1 === w.length: d.clearable) && n == i ? u.clearRating() : u.set.rating(i)
                    }
                },
                clearRating: function() {
                    u.debug("Clearing current rating"),
                    u.set.rating(0)
                },
                bind: {
                    events: function() {
                        u.verbose("Binding events"),
                        x.on("mouseenter" + m, g.icon, u.event.mouseenter).on("mouseleave" + m, g.icon, u.event.mouseleave).on("click" + m, g.icon, u.event.click)
                    }
                },
                remove: {
                    events: function() {
                        u.verbose("Removing events"),
                        x.off(m)
                    }
                },
                enable: function() {
                    u.debug("Setting rating to interactive mode"),
                    u.bind.events(),
                    x.removeClass(p.disabled)
                },
                disable: function() {
                    u.debug("Setting rating to read-only mode"),
                    u.remove.events(),
                    x.addClass(p.disabled)
                },
                get: {
                    initialRating: function() {
                        return void 0 !== x.data(h.rating) ? (x.removeData(h.rating), x.data(h.rating)) : d.initialRating
                    },
                    maxRating: function() {
                        return void 0 !== x.data(h.maxRating) ? (x.removeData(h.maxRating), x.data(h.maxRating)) : d.maxRating
                    },
                    rating: function() {
                        var e = w.filter("." + p.active).length;
                        return u.verbose("Current rating retrieved", e),
                        e
                    }
                },
                set: {
                    rating: function(e) {
                        var t = e - 1 >= 0 ? e - 1 : 0,
                        n = w.eq(t);
                        x.removeClass(p.selected),
                        w.removeClass(p.selected).removeClass(p.active),
                        e > 0 && (u.verbose("Setting current rating to", e), n.prevAll().andSelf().addClass(p.active)),
                        d.onRate.call(b, e)
                    }
                },
                setting: function(t, n) {
                    if (u.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (void 0 === n) return d[t];
                        d[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, u, t);
                    else {
                        if (void 0 === n) return u[t];
                        u[t] = n
                    }
                },
                debug: function() {
                    d.debug && (d.performance ? u.performance.log(arguments) : (u.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), u.debug.apply(console, arguments)))
                },
                verbose: function() {
                    d.verbose && d.debug && (d.performance ? u.performance.log(arguments) : (u.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), u.verbose.apply(console, arguments)))
                },
                error: function() {
                    u.error = Function.prototype.bind.call(console.error, console, d.name + ":"),
                    u.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        d.performance && (t = (new Date).getTime(), i = r || t, n = t - i, r = t, a.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: b,
                            "Execution Time": n
                        })),
                        clearTimeout(u.performance.timer),
                        u.performance.timer = setTimeout(u.performance.display, 500)
                    },
                    display: function() {
                        var t = d.name + ":",
                        n = 0;
                        r = !1,
                        clearTimeout(u.performance.timer),
                        e.each(a,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        o && (t += " '" + o + "'"),
                        i.length > 1 && (t += " (" + i.length + ")"),
                        (void 0 !== console.group || void 0 !== console.table) && a.length > 0 && (console.groupCollapsed(t), console.table ? console.table(a) : e.each(a,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        a = []
                    }
                },
                invoke: function(t, i, o) {
                    var r, a, s, l = y;
                    return i = i || c,
                    o = b || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, i) : void 0 !== a && (s = a),
                    e.isArray(n) ? n.push(s) : void 0 !== n ? n = [n, s] : void 0 !== s && (n = s),
                    a
                }
            },
            l ? (void 0 === y && u.initialize(), u.invoke(s)) : (void 0 !== y && y.invoke("destroy"), u.initialize())
        }),
        void 0 !== n ? n: this
    },
    e.fn.rating.settings = {
        name: "Rating",
        namespace: "rating",
        debug: !1,
        verbose: !1,
        performance: !0,
        initialRating: 0,
        interactive: !0,
        maxRating: 4,
        clearable: "auto",
        onRate: function(e) {},
        error: {
            method: "The method you called is not defined",
            noMaximum: "No maximum rating specified. Cannot generate HTML automatically"
        },
        metadata: {
            rating: "rating",
            maxRating: "maxRating"
        },
        className: {
            active: "active",
            disabled: "disabled",
            selected: "selected",
            loading: "loading"
        },
        selector: {
            icon: ".icon"
        },
        templates: {
            icon: function(e) {
                for (var t = 1,
                n = ""; t <= e;) n += '<i class="icon"></i>',
                t++;
                return n
            }
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.search = function(i) {
        var o, r = e(this),
        a = r.selector || "",
        s = (new Date).getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);
        return e(this).each(function() {
            var f, p = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.search.settings, i) : e.extend({},
            e.fn.search.settings),
            h = p.className,
            g = p.metadata,
            m = p.regExp,
            v = p.fields,
            b = p.selector,
            y = p.error,
            x = p.namespace,
            w = "." + x,
            C = x + "-module",
            T = e(this),
            k = T.find(b.prompt),
            S = T.find(b.searchButton),
            E = T.find(b.results),
            A = (T.find(b.result), T.find(b.category), this),
            D = T.data(C);
            f = {
                initialize: function() {
                    f.verbose("Initializing module"),
                    f.determine.searchFields(),
                    f.bind.events(),
                    f.set.type(),
                    f.create.results(),
                    f.instantiate()
                },
                instantiate: function() {
                    f.verbose("Storing instance of module", f),
                    D = f,
                    T.data(C, f)
                },
                destroy: function() {
                    f.verbose("Destroying instance"),
                    T.off(w).removeData(C)
                },
                bind: {
                    events: function() {
                        f.verbose("Binding events to search"),
                        p.automatic && (T.on(f.get.inputEvent() + w, b.prompt, f.event.input), k.attr("autocomplete", "off")),
                        T.on("focus" + w, b.prompt, f.event.focus).on("blur" + w, b.prompt, f.event.blur).on("keydown" + w, b.prompt, f.handleKeyboard).on("click" + w, b.searchButton, f.query).on("mousedown" + w, b.results, f.event.result.mousedown).on("mouseup" + w, b.results, f.event.result.mouseup).on("click" + w, b.result, f.event.result.click)
                    }
                },
                determine: {
                    searchFields: function() {
                        i && void 0 !== i.searchFields && (p.searchFields = i.searchFields)
                    }
                },
                event: {
                    input: function() {
                        clearTimeout(f.timer),
                        f.timer = setTimeout(f.query, p.searchDelay)
                    },
                    focus: function() {
                        f.set.focus(),
                        f.has.minimumCharacters() && (f.query(), f.can.show() && f.showResults())
                    },
                    blur: function(e) {
                        n.activeElement === this || f.resultsClicked || (f.cancel.query(), f.remove.focus(), f.timer = setTimeout(f.hideResults, p.hideDelay))
                    },
                    result: {
                        mousedown: function() {
                            f.resultsClicked = !0
                        },
                        mouseup: function() {
                            f.resultsClicked = !1
                        },
                        click: function(n) {
                            f.debug("Search result selected");
                            var i = e(this),
                            o = i.find(b.title).eq(0),
                            r = i.find("a[href]").eq(0),
                            a = r.attr("href") || !1,
                            s = r.attr("target") || !1,
                            l = (o.html(), o.length > 0 && o.text()),
                            c = f.get.results(),
                            u = i.data(g.result) || f.get.result(l, c);
                            if (e.isFunction(p.onSelect) && p.onSelect.call(A, u, c) === !1) return void f.debug("Custom onSelect callback cancelled default select action");
                            f.hideResults(),
                            l && f.set.value(l),
                            a && (f.verbose("Opening search link found in result", r), "_blank" == s || n.ctrlKey ? t.open(a) : t.location.href = a)
                        }
                    }
                },
                handleKeyboard: function(e) {
                    var t, n = T.find(b.result),
                    i = T.find(b.category),
                    o = n.index(n.filter("." + h.active)),
                    r = n.length,
                    a = e.which,
                    s = {
                        backspace: 8,
                        enter: 13,
                        escape: 27,
                        upArrow: 38,
                        downArrow: 40
                    };
                    if (a == s.escape && (f.verbose("Escape key pressed, blurring search field"), k.trigger("blur")), f.is.visible()) if (a == s.enter) {
                        if (f.verbose("Enter key pressed, selecting active result"), n.filter("." + h.active).length > 0) return f.event.result.click.call(n.filter("." + h.active), e),
                        e.preventDefault(),
                        !1
                    } else a == s.upArrow ? (f.verbose("Up key pressed, changing active result"), t = o - 1 < 0 ? o: o - 1, i.removeClass(h.active), n.removeClass(h.active).eq(t).addClass(h.active).closest(i).addClass(h.active), e.preventDefault()) : a == s.downArrow && (f.verbose("Down key pressed, changing active result"), t = o + 1 >= r ? o: o + 1, i.removeClass(h.active), n.removeClass(h.active).eq(t).addClass(h.active).closest(i).addClass(h.active), e.preventDefault());
                    else a == s.enter && (f.verbose("Enter key pressed, executing query"), f.query(), f.set.buttonPressed(), k.one("keyup", f.remove.buttonFocus))
                },
                setup: {
                    api: function() {
                        var e = {
                            debug: p.debug,
                            on: !1,
                            cache: "local",
                            action: "search",
                            onError: f.error
                        };
                        f.verbose("First request, initializing API"),
                        T.api(e)
                    }
                },
                can: {
                    useAPI: function() {
                        return void 0 !== e.fn.api
                    },
                    show: function() {
                        return f.is.focused() && !f.is.visible() && !f.is.empty()
                    },
                    transition: function() {
                        return p.transition && void 0 !== e.fn.transition && T.transition("is supported")
                    }
                },
                is: {
                    empty: function() {
                        return "" === E.html()
                    },
                    visible: function() {
                        return E.filter(":visible").length > 0
                    },
                    focused: function() {
                        return k.filter(":focus").length > 0
                    }
                },
                get: {
                    inputEvent: function() {
                        var e = k[0];
                        return void 0 !== e && void 0 !== e.oninput ? "input": void 0 !== e && void 0 !== e.onpropertychange ? "propertychange": "keyup"
                    },
                    value: function() {
                        return k.val()
                    },
                    results: function() {
                        return T.data(g.results)
                    },
                    result: function(t, n) {
                        var i = ["title", "id"],
                        o = !1;
                        return t = void 0 !== t ? t: f.get.value(),
                        n = void 0 !== n ? n: f.get.results(),
                        "category" === p.type ? (f.debug("Finding result that matches", t), e.each(n,
                        function(n, r) {
                            if (e.isArray(r.results) && (o = f.search.object(t, r.results, i)[0])) return ! 1
                        })) : (f.debug("Finding result in results object", t), o = f.search.object(t, n, i)[0]),
                        o || !1
                    }
                },
                set: {
                    focus: function() {
                        T.addClass(h.focus)
                    },
                    loading: function() {
                        T.addClass(h.loading)
                    },
                    value: function(e) {
                        f.verbose("Setting search input value", e),
                        k.val(e)
                    },
                    type: function(e) {
                        e = e || p.type,
                        "category" == p.type && T.addClass(p.type)
                    },
                    buttonPressed: function() {
                        S.addClass(h.pressed)
                    }
                },
                remove: {
                    loading: function() {
                        T.removeClass(h.loading)
                    },
                    focus: function() {
                        T.removeClass(h.focus)
                    },
                    buttonPressed: function() {
                        S.removeClass(h.pressed)
                    }
                },
                query: function() {
                    var t = f.get.value(),
                    n = f.read.cache(t);
                    f.has.minimumCharacters() ? n ? (f.debug("Reading result from cache", t), f.save.results(n.results), f.addResults(n.html), f.inject.id(n.results)) : (f.debug("Querying for", t), e.isPlainObject(p.source) || e.isArray(p.source) ? f.search.local(t) : f.can.useAPI() ? f.search.remote(t) : f.error(y.source), p.onSearchQuery.call(A, t)) : f.hideResults()
                },
                search: {
                    local: function(e) {
                        var t, n = f.search.object(e, p.content);
                        f.set.loading(),
                        f.save.results(n),
                        f.debug("Returned local search results", n),
                        t = f.generateResults({
                            results: n
                        }),
                        f.remove.loading(),
                        f.addResults(t),
                        f.inject.id(n),
                        f.write.cache(e, {
                            html: t,
                            results: n
                        })
                    },
                    remote: function(t) {
                        var n = {
                            onSuccess: function(e) {
                                f.parse.response.call(A, e, t)
                            },
                            onFailure: function() {
                                f.displayMessage(y.serverError)
                            },
                            urlData: {
                                query: t
                            }
                        };
                        T.api("get request") || f.setup.api(),
                        e.extend(!0, n, p.apiSettings),
                        f.debug("Executing search", n),
                        f.cancel.query(),
                        T.api("setting", n).api("query")
                    },
                    object: function(t, n, i) {
                        var o = [],
                        r = [],
                        a = t.toString().replace(m.escape, "\\$&"),
                        s = new RegExp(m.beginsWith + a, "i"),
                        l = function(t, n) {
                            var i = e.inArray(n, o) == -1,
                            a = e.inArray(n, r) == -1;
                            i && a && t.push(n)
                        };
                        return n = n || p.source,
                        i = void 0 !== i ? i: p.searchFields,
                        e.isArray(i) || (i = [i]),
                        void 0 === n || n === !1 ? (f.error(y.source), []) : (e.each(i,
                        function(i, a) {
                            e.each(n,
                            function(e, n) {
                                "string" == typeof n[a] && (n[a].search(s) !== -1 ? l(o, n) : p.searchFullText && f.fuzzySearch(t, n[a]) && l(r, n))
                            })
                        }), e.merge(o, r))
                    }
                },
                fuzzySearch: function(e, t) {
                    var n = t.length,
                    i = e.length;
                    if ("string" != typeof e) return ! 1;
                    if (e = e.toLowerCase(), t = t.toLowerCase(), i > n) return ! 1;
                    if (i === n) return e === t;
                    e: for (var o = 0,
                    r = 0; o < i; o++) {
                        for (var a = e.charCodeAt(o); r < n;) if (t.charCodeAt(r++) === a) continue e;
                        return ! 1
                    }
                    return ! 0
                },
                parse: {
                    response: function(e, t) {
                        var n = f.generateResults(e);
                        f.verbose("Parsing server response", e),
                        void 0 !== e && void 0 !== t && void 0 !== e[v.results] && (f.addResults(n), f.inject.id(e[v.results]), f.write.cache(t, {
                            html: n,
                            results: e[v.results]
                        }), f.save.results(e[v.results]))
                    }
                },
                cancel: {
                    query: function() {
                        f.can.useAPI() && T.api("abort")
                    }
                },
                has: {
                    minimumCharacters: function() {
                        return f.get.value().length >= p.minCharacters
                    }
                },
                clear: {
                    cache: function(e) {
                        var t = T.data(g.cache);
                        e ? e && t && t[e] && (f.debug("Removing value from cache", e), delete t[e], T.data(g.cache, t)) : (f.debug("Clearing cache", e), T.removeData(g.cache))
                    }
                },
                read: {
                    cache: function(e) {
                        var t = T.data(g.cache);
                        return !! p.cache && (f.verbose("Checking cache for generated html for query", e), "object" == typeof t && void 0 !== t[e] && t[e])
                    }
                },
                create: {
                    id: function(e, t) {
                        var n, i, o = e + 1;
                        return void 0 !== t ? (n = String.fromCharCode(97 + t), i = n + o, f.verbose("Creating category result id", i)) : (i = o, f.verbose("Creating result id", i)),
                        i
                    },
                    results: function() {
                        0 === E.length && (E = e("<div />").addClass(h.results).appendTo(T))
                    }
                },
                inject: {
                    result: function(e, t, n) {
                        f.verbose("Injecting result into results");
                        var i = void 0 !== n ? E.children().eq(n).children(b.result).eq(t) : E.children(b.result).eq(t);
                        f.verbose("Injecting results metadata", i),
                        i.data(g.result, e)
                    },
                    id: function(t) {
                        f.debug("Injecting unique ids into results");
                        var n = 0,
                        i = 0;
                        return "category" === p.type ? e.each(t,
                        function(t, o) {
                            i = 0,
                            e.each(o.results,
                            function(e, t) {
                                var r = o.results[e];
                                void 0 === r.id && (r.id = f.create.id(i, n)),
                                f.inject.result(r, i, n),
                                i++
                            }),
                            n++
                        }) : e.each(t,
                        function(e, n) {
                            var o = t[e];
                            void 0 === o.id && (o.id = f.create.id(i)),
                            f.inject.result(o, i),
                            i++
                        }),
                        t
                    }
                },
                save: {
                    results: function(e) {
                        f.verbose("Saving current search results to metadata", e),
                        T.data(g.results, e)
                    }
                },
                write: {
                    cache: function(e, t) {
                        var n = void 0 !== T.data(g.cache) ? T.data(g.cache) : {};
                        p.cache && (f.verbose("Writing generated html to cache", e, t), n[e] = t, T.data(g.cache, n))
                    }
                },
                addResults: function(t) {
                    if (e.isFunction(p.onResultsAdd) && p.onResultsAdd.call(E, t) === !1) return f.debug("onResultsAdd callback cancelled default action"),
                    !1;
                    E.html(t),
                    f.can.show() && f.showResults()
                },
                showResults: function() {
                    f.is.visible() || (f.can.transition() ? (f.debug("Showing results with css animations"), E.transition({
                        animation: p.transition + " in",
                        debug: p.debug,
                        verbose: p.verbose,
                        duration: p.duration,
                        queue: !0
                    })) : (f.debug("Showing results with javascript"), E.stop().fadeIn(p.duration, p.easing)), p.onResultsOpen.call(E))
                },
                hideResults: function() {
                    f.is.visible() && (f.can.transition() ? (f.debug("Hiding results with css animations"), E.transition({
                        animation: p.transition + " out",
                        debug: p.debug,
                        verbose: p.verbose,
                        duration: p.duration,
                        queue: !0
                    })) : (f.debug("Hiding results with javascript"), E.stop().fadeOut(p.duration, p.easing)), p.onResultsClose.call(E))
                },
                generateResults: function(t) {
                    f.debug("Generating html from response", t);
                    var n = p.templates[p.type],
                    i = e.isPlainObject(t[v.results]) && !e.isEmptyObject(t[v.results]),
                    o = e.isArray(t[v.results]) && t[v.results].length > 0,
                    r = "";
                    return i || o ? (p.maxResults > 0 && (i ? "standard" == p.type && f.error(y.maxResults) : t[v.results] = t[v.results].slice(0, p.maxResults)), e.isFunction(n) ? r = n(t, v) : f.error(y.noTemplate, !1)) : r = f.displayMessage(y.noResults, "empty"),
                    p.onResults.call(A, t),
                    r
                },
                displayMessage: function(e, t) {
                    return t = t || "standard",
                    f.debug("Displaying message", e, t),
                    f.addResults(p.templates.message(e, t)),
                    p.templates.message(e, t)
                },
                setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                        if (void 0 === n) return p[t];
                        p[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (void 0 === n) return f[t];
                        f[t] = n
                    }
                },
                debug: function() {
                    p.debug && (p.performance ? f.performance.log(arguments) : (f.debug = Function.prototype.bind.call(console.info, console, p.name + ":"), f.debug.apply(console, arguments)))
                },
                verbose: function() {
                    p.verbose && p.debug && (p.performance ? f.performance.log(arguments) : (f.verbose = Function.prototype.bind.call(console.info, console, p.name + ":"), f.verbose.apply(console, arguments)))
                },
                error: function() {
                    f.error = Function.prototype.bind.call(console.error, console, p.name + ":"),
                    f.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        p.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: A,
                            "Execution Time": n
                        })),
                        clearTimeout(f.performance.timer),
                        f.performance.timer = setTimeout(f.performance.display, 500)
                    },
                    display: function() {
                        var t = p.name + ":",
                        n = 0;
                        s = !1,
                        clearTimeout(f.performance.timer),
                        e.each(l,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        a && (t += " '" + a + "'"),
                        r.length > 1 && (t += " (" + r.length + ")"),
                        (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        l = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = D;
                    return n = n || d,
                    i = A || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            u ? (void 0 === D && f.initialize(), f.invoke(c)) : (void 0 !== D && D.invoke("destroy"), f.initialize())
        }),
        void 0 !== o ? o: this
    },
    e.fn.search.settings = {
        name: "Search",
        namespace: "search",
        debug: !1,
        verbose: !1,
        performance: !0,
        type: "standard",
        minCharacters: 1,
        apiSettings: !1,
        source: !1,
        searchFields: ["title", "description"],
        displayField: "",
        searchFullText: !0,
        automatic: !0,
        hideDelay: 0,
        searchDelay: 200,
        maxResults: 7,
        cache: !0,
        transition: "scale",
        duration: 200,
        easing: "easeOutExpo",
        onSelect: !1,
        onResultsAdd: !1,
        onSearchQuery: function(e) {},
        onResults: function(e) {},
        onResultsOpen: function() {},
        onResultsClose: function() {},
        className: {
            active: "active",
            empty: "empty",
            focus: "focus",
            loading: "loading",
            results: "results",
            pressed: "down"
        },
        error: {
            source: "Cannot search. No source used, and Semantic API module was not included",
            noResults: "Your search returned no results",
            logging: "Error in debug logging, exiting.",
            noEndpoint: "No search endpoint was specified",
            noTemplate: "A valid template name was not specified.",
            serverError: "There was an issue querying the server.",
            maxResults: "Results must be an array to use maxResults setting",
            method: "The method you called is not defined."
        },
        metadata: {
            cache: "cache",
            results: "results",
            result: "result"
        },
        regExp: {
            escape: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
            beginsWith: "(?:s|^)"
        },
        fields: {
            categories: "results",
            categoryName: "name",
            categoryResults: "results",
            description: "description",
            image: "image",
            price: "price",
            results: "results",
            title: "title",
            action: "action",
            actionText: "text",
            actionURL: "url"
        },
        selector: {
            prompt: ".prompt",
            searchButton: ".search.button",
            results: ".results",
            category: ".category",
            result: ".result",
            title: ".title, .name"
        },
        templates: {
            escape: function(e) {
                var t = /[&<>"'`]/,
                n = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                },
                i = function(e) {
                    return n[e]
                };
                return t.test(e) ? e.replace(/[&<>"'`]/g, i) : e
            },
            message: function(e, t) {
                var n = "";
                return void 0 !== e && void 0 !== t && (n += '<div class="message ' + t + '">', n += "empty" == t ? '<div class="header">No Results</div class="header"><div class="description">' + e + '</div class="description">': ' <div class="description">' + e + "</div>", n += "</div>"),
                n
            },
            category: function(t, n) {
                var i = "";
                e.fn.search.settings.templates.escape;
                return void 0 !== t[n.categoryResults] && (e.each(t[n.categoryResults],
                function(o, r) {
                    void 0 !== r[n.results] && r.results.length > 0 && (i += '<div class="category">', void 0 !== r[n.categoryName] && (i += '<div class="name">' + r[n.categoryName] + "</div>"), e.each(r.results,
                    function(e, o) {
                        i += t[n.url] ? '<a class="result" href="' + t[n.url] + '">': '<a class="result">',
                        void 0 !== o[n.image] && (i += '<div class="image"> <img src="' + o[n.image] + '"></div>'),
                        i += '<div class="content">',
                        void 0 !== o[n.price] && (i += '<div class="price">' + o[n.price] + "</div>"),
                        void 0 !== o[n.title] && (i += '<div class="title">' + o[n.title] + "</div>"),
                        void 0 !== o[n.description] && (i += '<div class="description">' + o[n.description] + "</div>"),
                        i += "</div>",
                        i += "</a>"
                    }), i += "</div>")
                }), t[n.action] && (i += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), i)
            },
            standard: function(t, n) {
                var i = "";
                return void 0 !== t[n.results] && (e.each(t[n.results],
                function(e, o) {
                    i += t[n.url] ? '<a class="result" href="' + t[n.url] + '">': '<a class="result">',
                    void 0 !== o[n.image] && (i += '<div class="image"> <img src="' + o[n.image] + '"></div>'),
                    i += '<div class="content">',
                    void 0 !== o[n.price] && (i += '<div class="price">' + o[n.price] + "</div>"),
                    void 0 !== o[n.title] && (i += '<div class="title">' + o[n.title] + "</div>"),
                    void 0 !== o[n.description] && (i += '<div class="description">' + o[n.description] + "</div>"),
                    i += "</div>",
                    i += "</a>"
                }), t[n.action] && (i += '<a href="' + t[n.action][n.actionURL] + '" class="action">' + t[n.action][n.actionText] + "</a>"), i)
            }
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.shape = function(i) {
        var o, r = e(this),
        a = (e("body"), (new Date).getTime()),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1),
        d = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame ||
        function(e) {
            setTimeout(e, 0)
        };
        return r.each(function() {
            var t, f, p, h = r.selector || "",
            g = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.shape.settings, i) : e.extend({},
            e.fn.shape.settings),
            m = g.namespace,
            v = g.selector,
            b = g.error,
            y = g.className,
            x = "." + m,
            w = "module-" + m,
            C = e(this),
            T = C.find(v.sides),
            k = C.find(v.side),
            S = !1,
            E = this,
            A = C.data(w);
            p = {
                initialize: function() {
                    p.verbose("Initializing module for", E),
                    p.set.defaultSide(),
                    p.instantiate()
                },
                instantiate: function() {
                    p.verbose("Storing instance of module", p),
                    A = p,
                    C.data(w, A)
                },
                destroy: function() {
                    p.verbose("Destroying previous module for", E),
                    C.removeData(w).off(x)
                },
                refresh: function() {
                    p.verbose("Refreshing selector cache for", E),
                    C = e(E),
                    T = e(this).find(v.shape),
                    k = e(this).find(v.side)
                },
                repaint: function() {
                    p.verbose("Forcing repaint event");
                    var e = T[0] || n.createElement("div");
                    e.offsetWidth
                },
                animate: function(e, n) {
                    p.verbose("Animating box with properties", e),
                    n = n ||
                    function(e) {
                        p.verbose("Executing animation callback"),
                        void 0 !== e && e.stopPropagation(),
                        p.reset(),
                        p.set.active()
                    },
                    g.beforeChange.call(f[0]),
                    p.get.transitionEvent() ? (p.verbose("Starting CSS animation"), C.addClass(y.animating), T.css(e).one(p.get.transitionEvent(), n), p.set.duration(g.duration), d(function() {
                        C.addClass(y.animating),
                        t.addClass(y.hidden)
                    })) : n()
                },
                queue: function(e) {
                    p.debug("Queueing animation of", e),
                    T.one(p.get.transitionEvent(),
                    function() {
                        p.debug("Executing queued animation"),
                        setTimeout(function() {
                            C.shape(e)
                        },
                        0)
                    })
                },
                reset: function() {
                    p.verbose("Animating states reset"),
                    C.removeClass(y.animating).attr("style", "").removeAttr("style"),
                    T.attr("style", "").removeAttr("style"),
                    k.attr("style", "").removeAttr("style").removeClass(y.hidden),
                    f.removeClass(y.animating).attr("style", "").removeAttr("style")
                },
                is: {
                    complete: function() {
                        return k.filter("." + y.active)[0] == f[0]
                    },
                    animating: function() {
                        return C.hasClass(y.animating)
                    }
                },
                set: {
                    defaultSide: function() {
                        t = C.find("." + g.className.active),
                        f = t.next(v.side).length > 0 ? t.next(v.side) : C.find(v.side).first(),
                        S = !1,
                        p.verbose("Active side set to", t),
                        p.verbose("Next side set to", f)
                    },
                    duration: function(e) {
                        e = e || g.duration,
                        e = "number" == typeof e ? e + "ms": e,
                        p.verbose("Setting animation duration", e),
                        (g.duration || 0 === g.duration) && T.add(k).css({
                            "-webkit-transition-duration": e,
                            "-moz-transition-duration": e,
                            "-ms-transition-duration": e,
                            "-o-transition-duration": e,
                            "transition-duration": e
                        })
                    },
                    currentStageSize: function() {
                        var e = C.find("." + g.className.active),
                        t = e.outerWidth(!0),
                        n = e.outerHeight(!0);
                        C.css({
                            width: t,
                            height: n
                        })
                    },
                    stageSize: function() {
                        var e = C.clone().addClass(y.loading),
                        t = e.find("." + g.className.active),
                        n = S ? e.find(v.side).eq(S) : t.next(v.side).length > 0 ? t.next(v.side) : e.find(v.side).first(),
                        i = {};
                        p.set.currentStageSize(),
                        t.removeClass(y.active),
                        n.addClass(y.active),
                        e.insertAfter(C),
                        i = {
                            width: n.outerWidth(!0),
                            height: n.outerHeight(!0)
                        },
                        e.remove(),
                        C.css(i),
                        p.verbose("Resizing stage to fit new content", i)
                    },
                    nextSide: function(e) {
                        S = e,
                        f = k.filter(e),
                        S = k.index(f),
                        0 === f.length && (p.set.defaultSide(), p.error(b.side)),
                        p.verbose("Next side manually set to", f)
                    },
                    active: function() {
                        p.verbose("Setting new side to active", f),
                        k.removeClass(y.active),
                        f.addClass(y.active),
                        g.onChange.call(f[0]),
                        p.set.defaultSide()
                    }
                },
                flip: {
                    up: function() {
                        if (p.is.complete() && !p.is.animating() && !g.allowRepeats) return void p.debug("Side already visible", f);
                        p.is.animating() ? p.queue("flip up") : (p.debug("Flipping up", f), p.set.stageSize(), p.stage.above(), p.animate(p.get.transform.up()))
                    },
                    down: function() {
                        if (p.is.complete() && !p.is.animating() && !g.allowRepeats) return void p.debug("Side already visible", f);
                        p.is.animating() ? p.queue("flip down") : (p.debug("Flipping down", f), p.set.stageSize(), p.stage.below(), p.animate(p.get.transform.down()))
                    },
                    left: function() {
                        if (p.is.complete() && !p.is.animating() && !g.allowRepeats) return void p.debug("Side already visible", f);
                        p.is.animating() ? p.queue("flip left") : (p.debug("Flipping left", f), p.set.stageSize(), p.stage.left(), p.animate(p.get.transform.left()))
                    },
                    right: function() {
                        if (p.is.complete() && !p.is.animating() && !g.allowRepeats) return void p.debug("Side already visible", f);
                        p.is.animating() ? p.queue("flip right") : (p.debug("Flipping right", f), p.set.stageSize(), p.stage.right(), p.animate(p.get.transform.right()))
                    },
                    over: function() {
                        if (p.is.complete() && !p.is.animating() && !g.allowRepeats) return void p.debug("Side already visible", f);
                        p.is.animating() ? p.queue("flip over") : (p.debug("Flipping over", f), p.set.stageSize(), p.stage.behind(), p.animate(p.get.transform.over()))
                    },
                    back: function() {
                        if (p.is.complete() && !p.is.animating() && !g.allowRepeats) return void p.debug("Side already visible", f);
                        p.is.animating() ? p.queue("flip back") : (p.debug("Flipping back", f), p.set.stageSize(), p.stage.behind(), p.animate(p.get.transform.back()))
                    }
                },
                get: {
                    transform: {
                        up: function() {
                            var e = {
                                y: -((t.outerHeight(!0) - f.outerHeight(!0)) / 2),
                                z: -(t.outerHeight(!0) / 2)
                            };
                            return {
                                transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(-90deg)"
                            }
                        },
                        down: function() {
                            var e = {
                                y: -((t.outerHeight(!0) - f.outerHeight(!0)) / 2),
                                z: -(t.outerHeight(!0) / 2)
                            };
                            return {
                                transform: "translateY(" + e.y + "px) translateZ(" + e.z + "px) rotateX(90deg)"
                            }
                        },
                        left: function() {
                            var e = {
                                x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2),
                                z: -(t.outerWidth(!0) / 2)
                            };
                            return {
                                transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(90deg)"
                            }
                        },
                        right: function() {
                            var e = {
                                x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2),
                                z: -(t.outerWidth(!0) / 2)
                            };
                            return {
                                transform: "translateX(" + e.x + "px) translateZ(" + e.z + "px) rotateY(-90deg)"
                            }
                        },
                        over: function() {
                            return {
                                transform: "translateX(" + {
                                    x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2)
                                }.x + "px) rotateY(180deg)"
                            }
                        },
                        back: function() {
                            return {
                                transform: "translateX(" + {
                                    x: -((t.outerWidth(!0) - f.outerWidth(!0)) / 2)
                                }.x + "px) rotateY(-180deg)"
                            }
                        }
                    },
                    transitionEvent: function() {
                        var e, t = n.createElement("element"),
                        i = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                        for (e in i) if (void 0 !== t.style[e]) return i[e]
                    },
                    nextSide: function() {
                        return t.next(v.side).length > 0 ? t.next(v.side) : C.find(v.side).first()
                    }
                },
                stage: {
                    above: function() {
                        var e = {
                            origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2,
                            depth: {
                                active: f.outerHeight(!0) / 2,
                                next: t.outerHeight(!0) / 2
                            }
                        };
                        p.verbose("Setting the initial animation position as above", f, e),
                        T.css({
                            transform: "translateZ(-" + e.depth.active + "px)"
                        }),
                        t.css({
                            transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                            top: e.origin + "px",
                            transform: "rotateX(90deg) translateZ(" + e.depth.next + "px)"
                        })
                    },
                    below: function() {
                        var e = {
                            origin: (t.outerHeight(!0) - f.outerHeight(!0)) / 2,
                            depth: {
                                active: f.outerHeight(!0) / 2,
                                next: t.outerHeight(!0) / 2
                            }
                        };
                        p.verbose("Setting the initial animation position as below", f, e),
                        T.css({
                            transform: "translateZ(-" + e.depth.active + "px)"
                        }),
                        t.css({
                            transform: "rotateY(0deg) translateZ(" + e.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                            top: e.origin + "px",
                            transform: "rotateX(-90deg) translateZ(" + e.depth.next + "px)"
                        })
                    },
                    left: function() {
                        var e = {
                            active: t.outerWidth(!0),
                            next: f.outerWidth(!0)
                        },
                        n = {
                            origin: (e.active - e.next) / 2,
                            depth: {
                                active: e.next / 2,
                                next: e.active / 2
                            }
                        };
                        p.verbose("Setting the initial animation position as left", f, n),
                        T.css({
                            transform: "translateZ(-" + n.depth.active + "px)"
                        }),
                        t.css({
                            transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                            left: n.origin + "px",
                            transform: "rotateY(-90deg) translateZ(" + n.depth.next + "px)"
                        })
                    },
                    right: function() {
                        var e = {
                            active: t.outerWidth(!0),
                            next: f.outerWidth(!0)
                        },
                        n = {
                            origin: (e.active - e.next) / 2,
                            depth: {
                                active: e.next / 2,
                                next: e.active / 2
                            }
                        };
                        p.verbose("Setting the initial animation position as left", f, n),
                        T.css({
                            transform: "translateZ(-" + n.depth.active + "px)"
                        }),
                        t.css({
                            transform: "rotateY(0deg) translateZ(" + n.depth.active + "px)"
                        }),
                        f.addClass(y.animating).css({
                            left: n.origin + "px",
                            transform: "rotateY(90deg) translateZ(" + n.depth.next + "px)"
                        })
                    },
                    behind: function() {
                        var e = {
                            active: t.outerWidth(!0),
                            next: f.outerWidth(!0)
                        },
                        n = {
                            origin: (e.active - e.next) / 2,
                            depth: {
                                active: e.next / 2,
                                next: e.active / 2
                            }
                        };
                        p.verbose("Setting the initial animation position as behind", f, n),
                        t.css({
                            transform: "rotateY(0deg)"
                        }),
                        f.addClass(y.animating).css({
                            left: n.origin + "px",
                            transform: "rotateY(-180deg)"
                        })
                    }
                },
                setting: function(t, n) {
                    if (p.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                    else {
                        if (void 0 === n) return g[t];
                        g[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                        if (void 0 === n) return p[t];
                        p[t] = n
                    }
                },
                debug: function() {
                    g.debug && (g.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), p.debug.apply(console, arguments)))
                },
                verbose: function() {
                    g.verbose && g.debug && (g.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), p.verbose.apply(console, arguments)))
                },
                error: function() {
                    p.error = Function.prototype.bind.call(console.error, console, g.name + ":"),
                    p.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        g.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: E,
                            "Execution Time": n
                        })),
                        clearTimeout(p.performance.timer),
                        p.performance.timer = setTimeout(p.performance.display, 500)
                    },
                    display: function() {
                        var t = g.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(p.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        h && (t += " '" + h + "'"),
                        r.length > 1 && (t += " (" + r.length + ")"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = A;
                    return n = n || u,
                    i = E || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            c ? (void 0 === A && p.initialize(), p.invoke(l)) : (void 0 !== A && A.invoke("destroy"), p.initialize())
        }),
        void 0 !== o ? o: this
    },
    e.fn.shape.settings = {
        name: "Shape",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "shape",
        beforeChange: function() {},
        onChange: function() {},
        allowRepeats: !1,
        duration: !1,
        error: {
            side: "You tried to switch to a side that does not exist.",
            method: "The method you called is not defined"
        },
        className: {
            animating: "animating",
            hidden: "hidden",
            loading: "loading",
            active: "active"
        },
        selector: {
            sides: ".sides",
            side: ".side"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.sidebar = function(i) {
        var o, r = e(this),
        a = e(t),
        s = e(n),
        l = e("html"),
        c = e("head"),
        u = r.selector || "",
        d = (new Date).getTime(),
        f = [],
        p = arguments[0],
        h = "string" == typeof p,
        g = [].slice.call(arguments, 1),
        m = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame ||
        function(e) {
            setTimeout(e, 0)
        };
        return r.each(function() {
            var r, v, b, y, x, w, C = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.sidebar.settings, i) : e.extend({},
            e.fn.sidebar.settings),
            T = C.selector,
            k = C.className,
            S = C.namespace,
            E = C.regExp,
            A = C.error,
            D = "." + S,
            N = "module-" + S,
            P = e(this),
            j = e(C.context),
            O = P.children(T.sidebar),
            R = j.children(T.fixed),
            q = j.children(T.pusher),
            F = this,
            L = P.data(N);
            w = {
                initialize: function() {
                    w.debug("Initializing sidebar", i),
                    w.create.id(),
                    x = w.get.transitionEvent(),
                    w.is.ios() && w.set.ios(),
                    C.delaySetup ? m(w.setup.layout) : w.setup.layout(),
                    m(function() {
                        w.setup.cache()
                    }),
                    w.instantiate()
                },
                instantiate: function() {
                    w.verbose("Storing instance of module", w),
                    L = w,
                    P.data(N, w)
                },
                create: {
                    id: function() {
                        b = (Math.random().toString(16) + "000000000").substr(2, 8),
                        v = "." + b,
                        w.verbose("Creating unique id for element", b)
                    }
                },
                destroy: function() {
                    w.verbose("Destroying previous module for", P),
                    P.off(D).removeData(N),
                    w.is.ios() && w.remove.ios(),
                    j.off(v),
                    a.off(v),
                    s.off(v)
                },
                event: {
                    clickaway: function(e) {
                        var t = q.find(e.target).length > 0 || q.is(e.target),
                        n = j.is(e.target);
                        t && (w.verbose("User clicked on dimmed page"), w.hide()),
                        n && (w.verbose("User clicked on dimmable context (scaled out page)"), w.hide())
                    },
                    touch: function(e) {},
                    containScroll: function(e) {
                        F.scrollTop <= 0 && (F.scrollTop = 1),
                        F.scrollTop + F.offsetHeight >= F.scrollHeight && (F.scrollTop = F.scrollHeight - F.offsetHeight - 1)
                    },
                    scroll: function(t) {
                        0 === e(t.target).closest(T.sidebar).length && t.preventDefault()
                    }
                },
                bind: {
                    clickaway: function() {
                        w.verbose("Adding clickaway events to context", j),
                        C.closable && j.on("click" + v, w.event.clickaway).on("touchend" + v, w.event.clickaway)
                    },
                    scrollLock: function() {
                        C.scrollLock && (w.debug("Disabling page scroll"), a.on("DOMMouseScroll" + v, w.event.scroll)),
                        w.verbose("Adding events to contain sidebar scroll"),
                        s.on("touchmove" + v, w.event.touch),
                        P.on("scroll" + D, w.event.containScroll)
                    }
                },
                unbind: {
                    clickaway: function() {
                        w.verbose("Removing clickaway events from context", j),
                        j.off(v)
                    },
                    scrollLock: function() {
                        w.verbose("Removing scroll lock from page"),
                        s.off(v),
                        a.off(v),
                        P.off("scroll" + D)
                    }
                },
                add: {
                    inlineCSS: function() {
                        var t, n = w.cache.width || P.outerWidth(),
                        i = w.cache.height || P.outerHeight(),
                        o = w.is.rtl(),
                        a = w.get.direction(),
                        s = {
                            left: n,
                            right: -n,
                            top: i,
                            bottom: -i
                        };
                        o && (w.verbose("RTL detected, flipping widths"), s.left = -n, s.right = n),
                        t = "<style>",
                        "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " .ui.visible." + a + ".sidebar ~ .fixed, .ui.visible." + a + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"),
                        w.is.ie() && ("left" === a || "right" === a ? (w.debug("Adding CSS rules for animation distance", n), t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[a] + "px, 0, 0);           transform: translate3d(" + s[a] + "px, 0, 0); }") : "top" !== a && "bottom" != a || (t += " body.pushable > .ui.visible." + a + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[a] + "px, 0);           transform: translate3d(0, " + s[a] + "px, 0); }"), t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),
                        t += "</style>",
                        r = e(t).appendTo(c),
                        w.debug("Adding sizing css to head", r)
                    }
                },
                refresh: function() {
                    w.verbose("Refreshing selector cache"),
                    j = e(C.context),
                    O = j.children(T.sidebar),
                    q = j.children(T.pusher),
                    R = j.children(T.fixed),
                    w.clear.cache()
                },
                refreshSidebars: function() {
                    w.verbose("Refreshing other sidebars"),
                    O = j.children(T.sidebar)
                },
                repaint: function() {
                    w.verbose("Forcing repaint event"),
                    F.style.display = "none";
                    F.offsetHeight;
                    F.scrollTop = F.scrollTop,
                    F.style.display = ""
                },
                setup: {
                    cache: function() {
                        w.cache = {
                            width: P.outerWidth(),
                            height: P.outerHeight(),
                            rtl: "rtl" == P.css("direction")
                        }
                    },
                    layout: function() {
                        0 === j.children(T.pusher).length && (w.debug("Adding wrapper element for sidebar"), w.error(A.pusher), q = e('<div class="pusher" />'), j.children().not(T.omitted).not(O).wrapAll(q), w.refresh()),
                        0 !== P.nextAll(T.pusher).length && P.nextAll(T.pusher)[0] === q[0] || (w.debug("Moved sidebar to correct parent element"), w.error(A.movedSidebar, F), P.detach().prependTo(j), w.refresh()),
                        w.clear.cache(),
                        w.set.pushable(),
                        w.set.direction()
                    }
                },
                attachEvents: function(t, n) {
                    var i = e(t);
                    n = e.isFunction(w[n]) ? w[n] : w.toggle,
                    i.length > 0 ? (w.debug("Attaching sidebar events to element", t, n), i.on("click" + D, n)) : w.error(A.notFound, t)
                },
                show: function(t) {
                    if (t = e.isFunction(t) ? t: function() {},
                    w.is.hidden()) {
                        if (w.refreshSidebars(), C.overlay && (w.error(A.overlay), C.transition = "overlay"), w.refresh(), w.othersActive()) if (w.debug("Other sidebars currently visible"), C.exclusive) {
                            if ("overlay" != C.transition) return void w.hideOthers(w.show);
                            w.hideOthers()
                        } else C.transition = "overlay";
                        w.pushPage(function() {
                            t.call(F),
                            C.onShow.call(F)
                        }),
                        C.onChange.call(F),
                        C.onVisible.call(F)
                    } else w.debug("Sidebar is already visible")
                },
                hide: function(t) {
                    t = e.isFunction(t) ? t: function() {},
                    (w.is.visible() || w.is.animating()) && (w.debug("Hiding sidebar", t), w.refreshSidebars(), w.pullPage(function() {
                        t.call(F),
                        C.onHidden.call(F)
                    }), C.onChange.call(F), C.onHide.call(F))
                },
                othersAnimating: function() {
                    return O.not(P).filter("." + k.animating).length > 0
                },
                othersVisible: function() {
                    return O.not(P).filter("." + k.visible).length > 0
                },
                othersActive: function() {
                    return w.othersVisible() || w.othersAnimating()
                },
                hideOthers: function(e) {
                    var t = O.not(P).filter("." + k.visible),
                    n = t.length,
                    i = 0;
                    e = e ||
                    function() {},
                    t.sidebar("hide",
                    function() {++i == n && e()
                    })
                },
                toggle: function() {
                    w.verbose("Determining toggled direction"),
                    w.is.hidden() ? w.show() : w.hide()
                },
                pushPage: function(t) {
                    var n, i, o, r = w.get.transition(),
                    a = "overlay" === r || w.othersActive() ? P: q;
                    t = e.isFunction(t) ? t: function() {},
                    "scale down" == C.transition && w.scrollToTop(),
                    w.set.transition(r),
                    w.repaint(),
                    n = function() {
                        w.bind.clickaway(),
                        w.add.inlineCSS(),
                        w.set.animating(),
                        w.set.visible()
                    },
                    i = function() {
                        w.set.dimmed()
                    },
                    o = function(e) {
                        e.target == a[0] && (a.off(x + v, o), w.remove.animating(), w.bind.scrollLock(), t.call(F))
                    },
                    a.off(x + v),
                    a.on(x + v, o),
                    m(n),
                    C.dimPage && !w.othersVisible() && m(i)
                },
                pullPage: function(t) {
                    var n, i, o = w.get.transition(),
                    r = "overlay" == o || w.othersActive() ? P: q;
                    t = e.isFunction(t) ? t: function() {},
                    w.verbose("Removing context push state", w.get.direction()),
                    w.unbind.clickaway(),
                    w.unbind.scrollLock(),
                    n = function() {
                        w.set.transition(o),
                        w.set.animating(),
                        w.remove.visible(),
                        C.dimPage && !w.othersVisible() && q.removeClass(k.dimmed)
                    },
                    i = function(e) {
                        e.target == r[0] && (r.off(x + v, i), w.remove.animating(), w.remove.transition(), w.remove.inlineCSS(), ("scale down" == o || C.returnScroll && w.is.mobile()) && w.scrollBack(), t.call(F))
                    },
                    r.off(x + v),
                    r.on(x + v, i),
                    m(n)
                },
                scrollToTop: function() {
                    w.verbose("Scrolling to top of page to avoid animation issues"),
                    y = e(t).scrollTop(),
                    P.scrollTop(0),
                    t.scrollTo(0, 0)
                },
                scrollBack: function() {
                    w.verbose("Scrolling back to original page position"),
                    t.scrollTo(0, y)
                },
                clear: {
                    cache: function() {
                        w.verbose("Clearing cached dimensions"),
                        w.cache = {}
                    }
                },
                set: {
                    ios: function() {
                        l.addClass(k.ios)
                    },
                    pushed: function() {
                        j.addClass(k.pushed)
                    },
                    pushable: function() {
                        j.addClass(k.pushable)
                    },
                    dimmed: function() {
                        q.addClass(k.dimmed)
                    },
                    active: function() {
                        P.addClass(k.active)
                    },
                    animating: function() {
                        P.addClass(k.animating)
                    },
                    transition: function(e) {
                        e = e || w.get.transition(),
                        P.addClass(e)
                    },
                    direction: function(e) {
                        e = e || w.get.direction(),
                        P.addClass(k[e])
                    },
                    visible: function() {
                        P.addClass(k.visible)
                    },
                    overlay: function() {
                        P.addClass(k.overlay)
                    }
                },
                remove: {
                    inlineCSS: function() {
                        w.debug("Removing inline css styles", r),
                        r && r.length > 0 && r.remove()
                    },
                    ios: function() {
                        l.removeClass(k.ios)
                    },
                    pushed: function() {
                        j.removeClass(k.pushed)
                    },
                    pushable: function() {
                        j.removeClass(k.pushable)
                    },
                    active: function() {
                        P.removeClass(k.active)
                    },
                    animating: function() {
                        P.removeClass(k.animating)
                    },
                    transition: function(e) {
                        e = e || w.get.transition(),
                        P.removeClass(e)
                    },
                    direction: function(e) {
                        e = e || w.get.direction(),
                        P.removeClass(k[e])
                    },
                    visible: function() {
                        P.removeClass(k.visible)
                    },
                    overlay: function() {
                        P.removeClass(k.overlay)
                    }
                },
                get: {
                    direction: function() {
                        return P.hasClass(k.top) ? k.top: P.hasClass(k.right) ? k.right: P.hasClass(k.bottom) ? k.bottom: k.left
                    },
                    transition: function() {
                        var e, t = w.get.direction();
                        return e = w.is.mobile() ? "auto" == C.mobileTransition ? C.defaultTransition.mobile[t] : C.mobileTransition: "auto" == C.transition ? C.defaultTransition.computer[t] : C.transition,
                        w.verbose("Determined transition", e),
                        e
                    },
                    transitionEvent: function() {
                        var e, t = n.createElement("element"),
                        i = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd"
                        };
                        for (e in i) if (void 0 !== t.style[e]) return i[e]
                    }
                },
                is: {
                    ie: function() {
                        var e = !t.ActiveXObject && "ActiveXObject" in t,
                        n = "ActiveXObject" in t;
                        return e || n
                    },
                    ios: function() {
                        var e = navigator.userAgent,
                        t = e.match(E.ios),
                        n = e.match(E.mobileChrome);
                        return ! (!t || n) && (w.verbose("Browser was found to be iOS", e), !0)
                    },
                    mobile: function() {
                        var e = navigator.userAgent;
                        return e.match(E.mobile) ? (w.verbose("Browser was found to be mobile", e), !0) : (w.verbose("Browser is not mobile, using regular transition", e), !1)
                    },
                    hidden: function() {
                        return ! w.is.visible()
                    },
                    visible: function() {
                        return P.hasClass(k.visible)
                    },
                    open: function() {
                        return w.is.visible()
                    },
                    closed: function() {
                        return w.is.hidden()
                    },
                    vertical: function() {
                        return P.hasClass(k.top)
                    },
                    animating: function() {
                        return j.hasClass(k.animating)
                    },
                    rtl: function() {
                        return void 0 === w.cache.rtl && (w.cache.rtl = "rtl" == P.css("direction")),
                        w.cache.rtl
                    }
                },
                setting: function(t, n) {
                    if (w.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, C, t);
                    else {
                        if (void 0 === n) return C[t];
                        C[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, w, t);
                    else {
                        if (void 0 === n) return w[t];
                        w[t] = n
                    }
                },
                debug: function() {
                    C.debug && (C.performance ? w.performance.log(arguments) : (w.debug = Function.prototype.bind.call(console.info, console, C.name + ":"), w.debug.apply(console, arguments)))
                },
                verbose: function() {
                    C.verbose && C.debug && (C.performance ? w.performance.log(arguments) : (w.verbose = Function.prototype.bind.call(console.info, console, C.name + ":"), w.verbose.apply(console, arguments)))
                },
                error: function() {
                    w.error = Function.prototype.bind.call(console.error, console, C.name + ":"),
                    w.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        C.performance && (t = (new Date).getTime(), i = d || t, n = t - i, d = t, f.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: F,
                            "Execution Time": n
                        })),
                        clearTimeout(w.performance.timer),
                        w.performance.timer = setTimeout(w.performance.display, 500)
                    },
                    display: function() {
                        var t = C.name + ":",
                        n = 0;
                        d = !1,
                        clearTimeout(w.performance.timer),
                        e.each(f,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        u && (t += " '" + u + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && f.length > 0 && (console.groupCollapsed(t), console.table ? console.table(f) : e.each(f,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        f = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = L;
                    return n = n || g,
                    i = F || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (w.error(A.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            h ? (void 0 === L && w.initialize(), w.invoke(p)) : (void 0 !== L && w.invoke("destroy"), w.initialize())
        }),
        void 0 !== o ? o: this
    },
    e.fn.sidebar.settings = {
        name: "Sidebar",
        namespace: "sidebar",
        debug: !1,
        verbose: !1,
        performance: !0,
        transition: "auto",
        mobileTransition: "auto",
        defaultTransition: {
            computer: {
                left: "uncover",
                right: "uncover",
                top: "overlay",
                bottom: "overlay"
            },
            mobile: {
                left: "uncover",
                right: "uncover",
                top: "overlay",
                bottom: "overlay"
            }
        },
        context: "body",
        exclusive: !1,
        closable: !0,
        dimPage: !0,
        scrollLock: !1,
        returnScroll: !1,
        delaySetup: !1,
        duration: 500,
        onChange: function() {},
        onShow: function() {},
        onHide: function() {},
        onHidden: function() {},
        onVisible: function() {},
        className: {
            active: "active",
            animating: "animating",
            dimmed: "dimmed",
            ios: "ios",
            pushable: "pushable",
            pushed: "pushed",
            right: "right",
            top: "top",
            left: "left",
            bottom: "bottom",
            visible: "visible"
        },
        selector: {
            fixed: ".fixed",
            omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
            pusher: ".pusher",
            sidebar: ".ui.sidebar"
        },
        regExp: {
            ios: /(iPad|iPhone|iPod)/g,
            mobileChrome: /(CriOS)/g,
            mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
        },
        error: {
            method: "The method you called is not defined.",
            pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
            movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
            overlay: "The overlay setting is no longer supported, use animation: overlay",
            notFound: "There were no elements that matched the specified selector"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.sticky = function(n) {
        var i, o = e(this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);
        return o.each(function() {
            var o, d, f, p, h = e.isPlainObject(n) ? e.extend(!0, {},
            e.fn.sticky.settings, n) : e.extend({},
            e.fn.sticky.settings),
            g = h.className,
            m = h.namespace,
            v = h.error,
            b = "." + m,
            y = "module-" + m,
            x = e(this),
            w = e(t),
            C = e(h.scrollContext),
            T = (x.selector, x.data(y)),
            k = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame ||
            function(e) {
                setTimeout(e, 0)
            },
            S = this;
            p = {
                initialize: function() {
                    p.determineContainer(),
                    p.determineContext(),
                    p.verbose("Initializing sticky", h, o),
                    p.save.positions(),
                    p.checkErrors(),
                    p.bind.events(),
                    h.observeChanges && p.observeChanges(),
                    p.instantiate()
                },
                instantiate: function() {
                    p.verbose("Storing instance of module", p),
                    T = p,
                    x.data(y, p)
                },
                destroy: function() {
                    p.verbose("Destroying previous instance"),
                    p.reset(),
                    f && f.disconnect(),
                    w.off("load" + b, p.event.load).off("resize" + b, p.event.resize),
                    C.off("scrollchange" + b, p.event.scrollchange),
                    x.removeData(y)
                },
                observeChanges: function() {
                    var e = d[0];
                    "MutationObserver" in t && (f = new MutationObserver(function(e) {
                        clearTimeout(p.timer),
                        p.timer = setTimeout(function() {
                            p.verbose("DOM tree modified, updating sticky menu", e),
                            p.refresh()
                        },
                        100)
                    }), f.observe(S, {
                        childList: !0,
                        subtree: !0
                    }), f.observe(e, {
                        childList: !0,
                        subtree: !0
                    }), p.debug("Setting up mutation observer", f))
                },
                determineContainer: function() {
                    o = x.offsetParent()
                },
                determineContext: function() {
                    if (d = h.context ? e(h.context) : o, 0 === d.length) return void p.error(v.invalidContext, h.context, x)
                },
                checkErrors: function() {
                    if (p.is.hidden() && p.error(v.visible, x), p.cache.element.height > p.cache.context.height) return p.reset(),
                    void p.error(v.elementSize, x)
                },
                bind: {
                    events: function() {
                        w.on("load" + b, p.event.load).on("resize" + b, p.event.resize),
                        C.off("scroll" + b).on("scroll" + b, p.event.scroll).on("scrollchange" + b, p.event.scrollchange)
                    }
                },
                event: {
                    load: function() {
                        p.verbose("Page contents finished loading"),
                        k(p.refresh)
                    },
                    resize: function() {
                        p.verbose("Window resized"),
                        k(p.refresh)
                    },
                    scroll: function() {
                        k(function() {
                            C.triggerHandler("scrollchange" + b, C.scrollTop())
                        })
                    },
                    scrollchange: function(e, t) {
                        p.stick(t),
                        h.onScroll.call(S)
                    }
                },
                refresh: function(e) {
                    p.reset(),
                    h.context || p.determineContext(),
                    e && p.determineContainer(),
                    p.save.positions(),
                    p.stick(),
                    h.onReposition.call(S)
                },
                supports: {
                    sticky: function() {
                        var t = e("<div/>");
                        t[0];
                        return t.addClass(g.supported),
                        t.css("position").match("sticky")
                    }
                },
                save: {
                    lastScroll: function(e) {
                        p.lastScroll = e
                    },
                    elementScroll: function(e) {
                        p.elementScroll = e
                    },
                    positions: function() {
                        var e = {
                            height: w.height()
                        },
                        t = {
                            margin: {
                                top: parseInt(x.css("margin-top"), 10),
                                bottom: parseInt(x.css("margin-bottom"), 10)
                            },
                            offset: x.offset(),
                            width: x.outerWidth(),
                            height: x.outerHeight()
                        },
                        n = {
                            offset: d.offset(),
                            height: d.outerHeight()
                        };
                        o.outerHeight();
                        p.cache = {
                            fits: t.height < e.height,
                            window: {
                                height: e.height
                            },
                            element: {
                                margin: t.margin,
                                top: t.offset.top - t.margin.top,
                                left: t.offset.left,
                                width: t.width,
                                height: t.height,
                                bottom: t.offset.top + t.height
                            },
                            context: {
                                top: n.offset.top,
                                height: n.height,
                                bottom: n.offset.top + n.height
                            }
                        },
                        p.set.containerSize(),
                        p.set.size(),
                        p.stick(),
                        p.debug("Caching element positions", p.cache)
                    }
                },
                get: {
                    direction: function(e) {
                        var t = "down";
                        return e = e || C.scrollTop(),
                        void 0 !== p.lastScroll && (p.lastScroll < e ? t = "down": p.lastScroll > e && (t = "up")),
                        t
                    },
                    scrollChange: function(e) {
                        return e = e || C.scrollTop(),
                        p.lastScroll ? e - p.lastScroll: 0
                    },
                    currentElementScroll: function() {
                        return p.elementScroll ? p.elementScroll: p.is.top() ? Math.abs(parseInt(x.css("top"), 10)) || 0 : Math.abs(parseInt(x.css("bottom"), 10)) || 0
                    },
                    elementScroll: function(e) {
                        e = e || C.scrollTop();
                        var t = p.cache.element,
                        n = p.cache.window,
                        i = p.get.scrollChange(e),
                        o = t.height - n.height + h.offset,
                        r = p.get.currentElementScroll(),
                        a = r + i;
                        return r = p.cache.fits || a < 0 ? 0 : a > o ? o: a
                    }
                },
                remove: {
                    lastScroll: function() {
                        delete p.lastScroll
                    },
                    elementScroll: function(e) {
                        delete p.elementScroll
                    },
                    offset: function() {
                        x.css("margin-top", "")
                    }
                },
                set: {
                    offset: function() {
                        p.verbose("Setting offset on element", h.offset),
                        x.css("margin-top", h.offset)
                    },
                    containerSize: function() {
                        var e = o.get(0).tagName;
                        "HTML" === e || "body" == e ? p.determineContainer() : Math.abs(o.outerHeight() - p.cache.context.height) > h.jitter && (p.debug("Context has padding, specifying exact height for container", p.cache.context.height), o.css({
                            height: p.cache.context.height
                        }))
                    },
                    minimumSize: function() {
                        var e = p.cache.element;
                        o.css("min-height", e.height)
                    },
                    scroll: function(e) {
                        p.debug("Setting scroll on element", e),
                        p.elementScroll != e && (p.is.top() && x.css("bottom", "").css("top", -e), p.is.bottom() && x.css("top", "").css("bottom", e))
                    },
                    size: function() {
                        0 !== p.cache.element.height && 0 !== p.cache.element.width && (S.style.setProperty("width", p.cache.element.width + "px", "important"), S.style.setProperty("height", p.cache.element.height + "px", "important"))
                    }
                },
                is: {
                    top: function() {
                        return x.hasClass(g.top)
                    },
                    bottom: function() {
                        return x.hasClass(g.bottom)
                    },
                    initialPosition: function() {
                        return ! p.is.fixed() && !p.is.bound()
                    },
                    hidden: function() {
                        return ! x.is(":visible")
                    },
                    bound: function() {
                        return x.hasClass(g.bound)
                    },
                    fixed: function() {
                        return x.hasClass(g.fixed)
                    }
                },
                stick: function(e) {
                    var t = e || C.scrollTop(),
                    n = p.cache,
                    i = n.fits,
                    o = n.element,
                    r = n.window,
                    a = n.context,
                    s = p.is.bottom() && h.pushing ? h.bottomOffset: h.offset,
                    e = {
                        top: t + s,
                        bottom: t + s + r.height
                    },
                    l = (p.get.direction(e.top), i ? 0 : p.get.elementScroll(e.top)),
                    c = !i;
                    0 !== o.height && (p.is.initialPosition() ? e.top >= a.bottom ? (p.debug("Initial element position is bottom of container"), p.bindBottom()) : e.top > o.top && (o.height + e.top - l >= a.bottom ? (p.debug("Initial element position is bottom of container"), p.bindBottom()) : (p.debug("Initial element position is fixed"), p.fixTop())) : p.is.fixed() ? p.is.top() ? e.top <= o.top ? (p.debug("Fixed element reached top of container"), p.setInitialPosition()) : o.height + e.top - l >= a.bottom ? (p.debug("Fixed element reached bottom of container"), p.bindBottom()) : c && (p.set.scroll(l), p.save.lastScroll(e.top), p.save.elementScroll(l)) : p.is.bottom() && (e.bottom - o.height <= o.top ? (p.debug("Bottom fixed rail has reached top of container"), p.setInitialPosition()) : e.bottom >= a.bottom ? (p.debug("Bottom fixed rail has reached bottom of container"), p.bindBottom()) : c && (p.set.scroll(l), p.save.lastScroll(e.top), p.save.elementScroll(l))) : p.is.bottom() && (h.pushing ? p.is.bound() && e.bottom <= a.bottom && (p.debug("Fixing bottom attached element to bottom of browser."), p.fixBottom()) : p.is.bound() && e.top <= a.bottom - o.height && (p.debug("Fixing bottom attached element to top of browser."), p.fixTop())))
                },
                bindTop: function() {
                    p.debug("Binding element to top of parent container"),
                    p.remove.offset(),
                    x.css({
                        left: "",
                        top: "",
                        marginBottom: ""
                    }).removeClass(g.fixed).removeClass(g.bottom).addClass(g.bound).addClass(g.top),
                    h.onTop.call(S),
                    h.onUnstick.call(S)
                },
                bindBottom: function() {
                    p.debug("Binding element to bottom of parent container"),
                    p.remove.offset(),
                    x.css({
                        left: "",
                        top: ""
                    }).removeClass(g.fixed).removeClass(g.top).addClass(g.bound).addClass(g.bottom),
                    h.onBottom.call(S),
                    h.onUnstick.call(S)
                },
                setInitialPosition: function() {
                    p.debug("Returning to initial position"),
                    p.unfix(),
                    p.unbind()
                },
                fixTop: function() {
                    p.debug("Fixing element to top of page"),
                    p.set.minimumSize(),
                    p.set.offset(),
                    x.css({
                        left: p.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                    }).removeClass(g.bound).removeClass(g.bottom).addClass(g.fixed).addClass(g.top),
                    h.onStick.call(S)
                },
                fixBottom: function() {
                    p.debug("Sticking element to bottom of page"),
                    p.set.minimumSize(),
                    p.set.offset(),
                    x.css({
                        left: p.cache.element.left,
                        bottom: "",
                        marginBottom: ""
                    }).removeClass(g.bound).removeClass(g.top).addClass(g.fixed).addClass(g.bottom),
                    h.onStick.call(S)
                },
                unbind: function() {
                    p.is.bound() && (p.debug("Removing container bound position on element"), p.remove.offset(), x.removeClass(g.bound).removeClass(g.top).removeClass(g.bottom))
                },
                unfix: function() {
                    p.is.fixed() && (p.debug("Removing fixed position on element"), p.remove.offset(), x.removeClass(g.fixed).removeClass(g.top).removeClass(g.bottom), h.onUnstick.call(S))
                },
                reset: function() {
                    p.debug("Reseting elements position"),
                    p.unbind(),
                    p.unfix(),
                    p.resetCSS(),
                    p.remove.offset(),
                    p.remove.lastScroll()
                },
                resetCSS: function() {
                    x.css({
                        width: "",
                        height: ""
                    }),
                    o.css({
                        height: ""
                    })
                },
                setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, h, t);
                    else {
                        if (void 0 === n) return h[t];
                        h[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                        if (void 0 === n) return p[t];
                        p[t] = n
                    }
                },
                debug: function() {
                    h.debug && (h.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), p.debug.apply(console, arguments)))
                },
                verbose: function() {
                    h.verbose && h.debug && (h.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), p.verbose.apply(console, arguments)))
                },
                error: function() {
                    p.error = Function.prototype.bind.call(console.error, console, h.name + ":"),
                    p.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        h.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: S,
                            "Execution Time": n
                        })),
                        clearTimeout(p.performance.timer),
                        p.performance.timer = setTimeout(p.performance.display, 0)
                    },
                    display: function() {
                        var t = h.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(p.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = T;
                    return n = n || u,
                    o = S || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            c ? (void 0 === T && p.initialize(), p.invoke(l)) : (void 0 !== T && T.invoke("destroy"), p.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.sticky.settings = {
        name: "Sticky",
        namespace: "sticky",
        debug: !1,
        verbose: !0,
        performance: !0,
        pushing: !1,
        context: !1,
        scrollContext: t,
        offset: 0,
        bottomOffset: 0,
        jitter: 5,
        observeChanges: !1,
        onReposition: function() {},
        onScroll: function() {},
        onStick: function() {},
        onUnstick: function() {},
        onTop: function() {},
        onBottom: function() {},
        error: {
            container: "Sticky element must be inside a relative container",
            visible: "Element is hidden, you must call refresh after element becomes visible",
            method: "The method you called is not defined.",
            invalidContext: "Context specified does not exist",
            elementSize: "Sticky element is larger than its container, cannot create sticky."
        },
        className: {
            bound: "bound",
            fixed: "fixed",
            supported: "native",
            top: "top",
            bottom: "bottom"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.tab = function(i) {
        var o, r = e(e.isFunction(this) ? t: this),
        a = r.selector || "",
        s = (new Date).getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1),
        f = !1;
        return r.each(function() {
            var p, h, g, m, v, b, y = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.tab.settings, i) : e.extend({},
            e.fn.tab.settings),
            x = y.className,
            w = y.metadata,
            C = y.selector,
            T = y.error,
            k = "." + y.namespace,
            S = "module-" + y.namespace,
            E = e(this),
            A = {},
            D = !0,
            N = 0,
            P = this,
            j = E.data(S);
            v = {
                initialize: function() {
                    v.debug("Initializing tab menu item", E),
                    v.fix.callbacks(),
                    v.determineTabs(),
                    v.debug("Determining tabs", y.context, h),
                    y.auto && v.set.auto(),
                    v.bind.events(),
                    y.history && !f && (v.initializeHistory(), f = !0),
                    v.instantiate()
                },
                instantiate: function() {
                    v.verbose("Storing instance of module", v),
                    j = v,
                    E.data(S, v)
                },
                destroy: function() {
                    v.debug("Destroying tabs", E),
                    E.removeData(S).off(k)
                },
                bind: {
                    events: function() {
                        e.isWindow(P) || (v.debug("Attaching tab activation events to element", E), E.on("click" + k, v.event.click))
                    }
                },
                determineTabs: function() {
                    var t;
                    "parent" === y.context ? (E.closest(C.ui).length > 0 ? (t = E.closest(C.ui), v.verbose("Using closest UI element as parent", t)) : t = E, p = t.parent(), v.verbose("Determined parent element for creating context", p)) : y.context ? (p = e(y.context), v.verbose("Using selector for tab context", y.context, p)) : p = e("body"),
                    y.childrenOnly ? (h = p.children(C.tabs), v.debug("Searching tab context children for tabs", p, h)) : (h = p.find(C.tabs), v.debug("Searching tab context for tabs", p, h))
                },
                fix: {
                    callbacks: function() {
                        e.isPlainObject(i) && (i.onTabLoad || i.onTabInit) && (i.onTabLoad && (i.onLoad = i.onTabLoad, delete i.onTabLoad, v.error(T.legacyLoad, i.onLoad)), i.onTabInit && (i.onFirstLoad = i.onTabInit, delete i.onTabInit, v.error(T.legacyInit, i.onFirstLoad)), y = e.extend(!0, {},
                        e.fn.tab.settings, i))
                    }
                },
                initializeHistory: function() {
                    if (v.debug("Initializing page state"), void 0 === e.address) return v.error(T.state),
                    !1;
                    if ("state" == y.historyType) {
                        if (v.debug("Using HTML5 to manage state"), y.path === !1) return v.error(T.path),
                        !1;
                        e.address.history(!0).state(y.path)
                    }
                    e.address.bind("change", v.event.history.change)
                },
                event: {
                    click: function(t) {
                        var n = e(this).data(w.tab);
                        void 0 !== n ? (y.history ? (v.verbose("Updating page state", t), e.address.value(n)) : (v.verbose("Changing tab", t), v.changeTab(n)), t.preventDefault()) : v.debug("No tab specified")
                    },
                    history: {
                        change: function(t) {
                            var n = t.pathNames.join("/") || v.get.initialPath(),
                            i = y.templates.determineTitle(n) || !1;
                            v.performance.display(),
                            v.debug("History change event", n, t),
                            b = t,
                            void 0 !== n && v.changeTab(n),
                            i && e.address.title(i)
                        }
                    }
                },
                refresh: function() {
                    g && (v.debug("Refreshing tab", g), v.changeTab(g))
                },
                cache: {
                    read: function(e) {
                        return void 0 !== e && A[e]
                    },
                    add: function(e, t) {
                        e = e || g,
                        v.debug("Adding cached content for", e),
                        A[e] = t
                    },
                    remove: function(e) {
                        e = e || g,
                        v.debug("Removing cached content for", e),
                        delete A[e]
                    }
                },
                set: {
                    auto: function() {
                        var t = "string" == typeof y.path ? y.path.replace(/\/$/, "") + "/{$tab}": "/{$tab}";
                        v.verbose("Setting up automatic tab retrieval from server", t),
                        e.isPlainObject(y.apiSettings) ? y.apiSettings.url = t: y.apiSettings = {
                            url: t
                        }
                    },
                    loading: function(e) {
                        var t = v.get.tabElement(e);
                        t.hasClass(x.loading) || (v.verbose("Setting loading state for", t), t.addClass(x.loading).siblings(h).removeClass(x.active + " " + x.loading), t.length > 0 && y.onRequest.call(t[0], e))
                    },
                    state: function(t) {
                        e.address.value(t)
                    }
                },
                changeTab: function(n) {
                    var i = t.history && t.history.pushState,
                    o = i && y.ignoreFirstLoad && D,
                    r = y.auto || e.isPlainObject(y.apiSettings),
                    a = r && !o ? v.utilities.pathToArray(n) : v.get.defaultPathArray(n);
                    n = v.utilities.arrayToPath(a),
                    e.each(a,
                    function(t, i) {
                        var s, l, c, u, d = a.slice(0, t + 1),
                        f = v.utilities.arrayToPath(d),
                        h = v.is.tab(f),
                        C = t + 1 == a.length,
                        k = v.get.tabElement(f);
                        if (v.verbose("Looking for tab", i), h) {
                            if (v.verbose("Tab was found", i), g = f, m = v.utilities.filterArray(a, d), C ? u = !0 : (l = a.slice(0, t + 2), c = v.utilities.arrayToPath(l), (u = !v.is.tab(c)) && v.verbose("Tab parameters found", l)), u && r) return o ? (v.debug("Ignoring remote content on first tab load", f), D = !1, v.cache.add(n, k.html()), v.activate.all(f), y.onFirstLoad.call(k[0], f, m, b), y.onLoad.call(k[0], f, m, b)) : (v.activate.navigation(f), v.fetch.content(f, n)),
                            !1;
                            v.debug("Opened local tab", f),
                            v.activate.all(f),
                            v.cache.read(f) || (v.cache.add(f, !0), v.debug("First time tab loaded calling tab init"), y.onFirstLoad.call(k[0], f, m, b)),
                            y.onLoad.call(k[0], f, m, b)
                        } else {
                            if (n.search("/") != -1 || "" === n) return v.error(T.missingTab, E, p, f),
                            !1;
                            if (s = e("#" + n + ', a[name="' + n + '"]'), f = s.closest("[data-tab]").data(w.tab), k = v.get.tabElement(f), s && s.length > 0 && f) return v.debug("Anchor link used, opening parent tab", k, s),
                            k.hasClass(x.active) || setTimeout(function() {
                                v.scrollTo(s)
                            },
                            0),
                            v.activate.all(f),
                            v.cache.read(f) || (v.cache.add(f, !0), v.debug("First time tab loaded calling tab init"), y.onFirstLoad.call(k[0], f, m, b)),
                            y.onLoad.call(k[0], f, m, b),
                            !1
                        }
                    })
                },
                scrollTo: function(t) {
                    var i = !!(t && t.length > 0) && t.offset().top;
                    i !== !1 && (v.debug("Forcing scroll to an in-page link in a hidden tab", i, t), e(n).scrollTop(i))
                },
                update: {
                    content: function(e, t, n) {
                        var i = v.get.tabElement(e),
                        o = i[0];
                        n = void 0 !== n ? n: y.evaluateScripts,
                        n ? (v.debug("Updating HTML and evaluating inline scripts", e, t), i.html(t)) : (v.debug("Updating HTML", e, t), o.innerHTML = t)
                    }
                },
                fetch: {
                    content: function(t, n) {
                        var i, o, r = v.get.tabElement(t),
                        a = {
                            dataType: "html",
                            encodeParameters: !1,
                            on: "now",
                            cache: y.alwaysRefresh,
                            headers: {
                                "X-Remote": !0
                            },
                            onSuccess: function(e) {
                                v.cache.add(n, e),
                                v.update.content(t, e),
                                t == g ? (v.debug("Content loaded", t), v.activate.tab(t)) : v.debug("Content loaded in background", t),
                                y.onFirstLoad.call(r[0], t, m, b),
                                y.onLoad.call(r[0], t, m, b)
                            },
                            urlData: {
                                tab: n
                            }
                        },
                        s = r.api("get request") || !1,
                        l = s && "pending" === s.state();
                        n = n || t,
                        o = v.cache.read(n),
                        y.cache && o ? (v.activate.tab(t), v.debug("Adding cached content", n), "once" == y.evaluateScripts ? v.update.content(t, o, !1) : v.update.content(t, o), y.onLoad.call(r[0], t, m, b)) : l ? (v.set.loading(t), v.debug("Content is already loading", n)) : void 0 !== e.api ? (i = e.extend(!0, {},
                        y.apiSettings, a), v.debug("Retrieving remote content", n, i), v.set.loading(t), r.api(i)) : v.error(T.api)
                    }
                },
                activate: {
                    all: function(e) {
                        v.activate.tab(e),
                        v.activate.navigation(e)
                    },
                    tab: function(e) {
                        var t = v.get.tabElement(e),
                        n = t.hasClass(x.active);
                        v.verbose("Showing tab content for", t),
                        n || (t.addClass(x.active).siblings(h).removeClass(x.active + " " + x.loading), t.length > 0 && y.onVisible.call(t[0], e))
                    },
                    navigation: function(e) {
                        var t = v.get.navElement(e),
                        n = t.hasClass(x.active);
                        v.verbose("Activating tab navigation for", t, e),
                        n || t.addClass(x.active).siblings(r).removeClass(x.active + " " + x.loading)
                    }
                },
                deactivate: {
                    all: function() {
                        v.deactivate.navigation(),
                        v.deactivate.tabs()
                    },
                    navigation: function() {
                        r.removeClass(x.active)
                    },
                    tabs: function() {
                        h.removeClass(x.active + " " + x.loading)
                    }
                },
                is: {
                    tab: function(e) {
                        return void 0 !== e && v.get.tabElement(e).length > 0
                    }
                },
                get: {
                    initialPath: function() {
                        return r.eq(0).data(w.tab) || h.eq(0).data(w.tab)
                    },
                    path: function() {
                        return e.address.value()
                    },
                    defaultPathArray: function(e) {
                        return v.utilities.pathToArray(v.get.defaultPath(e))
                    },
                    defaultPath: function(e) {
                        var t = r.filter("[data-" + w.tab + '^="' + e + '/"]').eq(0),
                        n = t.data(w.tab) || !1;
                        if (n) {
                            if (v.debug("Found default tab", n), N < y.maxDepth) return N++,
                            v.get.defaultPath(n);
                            v.error(T.recursion)
                        } else v.debug("No default tabs found for", e, h);
                        return N = 0,
                        e
                    },
                    navElement: function(e) {
                        return e = e || g,
                        r.filter("[data-" + w.tab + '="' + e + '"]')
                    },
                    tabElement: function(e) {
                        var t, n, i, o;
                        return e = e || g,
                        i = v.utilities.pathToArray(e),
                        o = v.utilities.last(i),
                        t = h.filter("[data-" + w.tab + '="' + e + '"]'),
                        n = h.filter("[data-" + w.tab + '="' + o + '"]'),
                        t.length > 0 ? t: n
                    },
                    tab: function() {
                        return g
                    }
                },
                utilities: {
                    filterArray: function(t, n) {
                        return e.grep(t,
                        function(t) {
                            return e.inArray(t, n) == -1
                        })
                    },
                    last: function(t) {
                        return !! e.isArray(t) && t[t.length - 1]
                    },
                    pathToArray: function(e) {
                        return void 0 === e && (e = g),
                        "string" == typeof e ? e.split("/") : [e]
                    },
                    arrayToPath: function(t) {
                        return !! e.isArray(t) && t.join("/")
                    }
                },
                setting: function(t, n) {
                    if (v.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, y, t);
                    else {
                        if (void 0 === n) return y[t];
                        y[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, v, t);
                    else {
                        if (void 0 === n) return v[t];
                        v[t] = n
                    }
                },
                debug: function() {
                    y.debug && (y.performance ? v.performance.log(arguments) : (v.debug = Function.prototype.bind.call(console.info, console, y.name + ":"), v.debug.apply(console, arguments)))
                },
                verbose: function() {
                    y.verbose && y.debug && (y.performance ? v.performance.log(arguments) : (v.verbose = Function.prototype.bind.call(console.info, console, y.name + ":"), v.verbose.apply(console, arguments)))
                },
                error: function() {
                    v.error = Function.prototype.bind.call(console.error, console, y.name + ":"),
                    v.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        y.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: P,
                            "Execution Time": n
                        })),
                        clearTimeout(v.performance.timer),
                        v.performance.timer = setTimeout(v.performance.display, 500)
                    },
                    display: function() {
                        var t = y.name + ":",
                        n = 0;
                        s = !1,
                        clearTimeout(v.performance.timer),
                        e.each(l,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        a && (t += " '" + a + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        l = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = j;
                    return n = n || d,
                    i = P || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (v.error(T.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            u ? (void 0 === j && v.initialize(), v.invoke(c)) : (void 0 !== j && j.invoke("destroy"), v.initialize())
        }),
        void 0 !== o ? o: this
    },
    e.tab = function() {
        e(t).tab.apply(this, arguments)
    },
    e.fn.tab.settings = {
        name: "Tab",
        namespace: "tab",
        debug: !1,
        verbose: !1,
        performance: !0,
        auto: !1,
        history: !1,
        historyType: "hash",
        path: !1,
        context: !1,
        childrenOnly: !1,
        maxDepth: 25,
        alwaysRefresh: !1,
        cache: !0,
        ignoreFirstLoad: !1,
        apiSettings: !1,
        evaluateScripts: "once",
        onFirstLoad: function(e, t, n) {},
        onLoad: function(e, t, n) {},
        onVisible: function(e, t, n) {},
        onRequest: function(e, t, n) {},
        templates: {
            determineTitle: function(e) {}
        },
        error: {
            api: "You attempted to load content without API module",
            method: "The method you called is not defined",
            missingTab: "Activated tab cannot be found. Tabs are case-sensitive.",
            noContent: "The tab you specified is missing a content url.",
            path: "History enabled, but no path was specified",
            recursion: "Max recursive depth reached",
            legacyInit: "onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
            legacyLoad: "onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",
            state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
        },
        metadata: {
            tab: "tab",
            loaded: "loaded",
            promise: "promise"
        },
        className: {
            loading: "loading",
            active: "active"
        },
        selector: {
            tabs: ".ui.tab",
            ui: ".ui"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.transition = function() {
        var i, o = e(this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments,
        c = l[0],
        u = [].slice.call(arguments, 1),
        d = "string" == typeof c;
        t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame;
        return o.each(function(t) {
            var f, p, h, g, m, v, b, y, x, w = e(this),
            C = this;
            x = {
                initialize: function() {
                    f = x.get.settings.apply(C, l),
                    g = f.className,
                    h = f.error,
                    m = f.metadata,
                    y = "." + f.namespace,
                    b = "module-" + f.namespace,
                    p = w.data(b) || x,
                    v = x.get.animationEndEvent(),
                    d && (d = x.invoke(c)),
                    d === !1 && (x.verbose("Converted arguments into settings object", f), f.interval ? x.delay(f.animate) : x.animate(), x.instantiate())
                },
                instantiate: function() {
                    x.verbose("Storing instance of module", x),
                    p = x,
                    w.data(b, p)
                },
                destroy: function() {
                    x.verbose("Destroying previous module for", C),
                    w.removeData(b)
                },
                refresh: function() {
                    x.verbose("Refreshing display type on next animation"),
                    delete x.displayType
                },
                forceRepaint: function() {
                    x.verbose("Forcing element repaint");
                    var e = w.parent(),
                    t = w.next();
                    0 === t.length ? w.detach().appendTo(e) : w.detach().insertBefore(t)
                },
                repaint: function() {
                    x.verbose("Repainting element");
                    C.offsetWidth
                },
                delay: function(e) {
                    var n, i, r = x.get.animationDirection();
                    r || (r = x.can.transition() ? x.get.direction() : "static"),
                    e = void 0 !== e ? e: f.interval,
                    n = "auto" == f.reverse && r == g.outward,
                    i = n || 1 == f.reverse ? (o.length - t) * f.interval: t * f.interval,
                    x.debug("Delaying animation by", i),
                    setTimeout(x.animate, i)
                },
                animate: function(e) {
                    if (f = e || f, !x.is.supported()) return x.error(h.support),
                    !1;
                    if (x.debug("Preparing animation", f.animation), x.is.animating()) {
                        if (f.queue) return ! f.allowRepeats && x.has.direction() && x.is.occurring() && x.queuing !== !0 ? x.debug("Animation is currently occurring, preventing queueing same animation", f.animation) : x.queue(f.animation),
                        !1;
                        if (!f.allowRepeats && x.is.occurring()) return x.debug("Animation is already occurring, will not execute repeated animation", f.animation),
                        !1;
                        x.debug("New animation started, completing previous early", f.animation),
                        p.complete()
                    }
                    x.can.animate() ? x.set.animating(f.animation) : x.error(h.noAnimation, f.animation, C)
                },
                reset: function() {
                    x.debug("Resetting animation to beginning conditions"),
                    x.remove.animationCallbacks(),
                    x.restore.conditions(),
                    x.remove.animating()
                },
                queue: function(e) {
                    x.debug("Queueing animation of", e),
                    x.queuing = !0,
                    w.one(v + ".queue" + y,
                    function() {
                        x.queuing = !1,
                        x.repaint(),
                        x.animate.apply(this, f)
                    })
                },
                complete: function(e) {
                    x.debug("Animation complete", f.animation),
                    x.remove.completeCallback(),
                    x.remove.failSafe(),
                    x.is.looping() || (x.is.outward() ? (x.verbose("Animation is outward, hiding element"), x.restore.conditions(), x.hide()) : x.is.inward() ? (x.verbose("Animation is outward, showing element"), x.restore.conditions(), x.show()) : x.restore.conditions())
                },
                force: {
                    visible: function() {
                        var e = w.attr("style"),
                        t = x.get.userStyle(),
                        n = x.get.displayType(),
                        i = t + "display: " + n + " !important;",
                        o = w.css("display"),
                        r = void 0 === e || "" === e;
                        o !== n ? (x.verbose("Overriding default display to show element", n), w.attr("style", i)) : r && w.removeAttr("style")
                    },
                    hidden: function() {
                        var e = w.attr("style"),
                        t = w.css("display"),
                        n = void 0 === e || "" === e;
                        "none" === t || x.is.hidden() ? n && w.removeAttr("style") : (x.verbose("Overriding default display to hide element"), w.css("display", "none"))
                    }
                },
                has: {
                    direction: function(t) {
                        var n = !1;
                        return t = t || f.animation,
                        "string" == typeof t && (t = t.split(" "), e.each(t,
                        function(e, t) {
                            t !== g.inward && t !== g.outward || (n = !0)
                        })),
                        n
                    },
                    inlineDisplay: function() {
                        var t = w.attr("style") || "";
                        return e.isArray(t.match(/display.*?;/, ""))
                    }
                },
                set: {
                    animating: function(e) {
                        var t;
                        x.remove.completeCallback(),
                        e = e || f.animation,
                        t = x.get.animationClass(e),
                        x.save.animation(t),
                        x.force.visible(),
                        x.remove.hidden(),
                        x.remove.direction(),
                        x.start.animation(t)
                    },
                    duration: function(e, t) {
                        t = t || f.duration,
                        ((t = "number" == typeof t ? t + "ms": t) || 0 === t) && (x.verbose("Setting animation duration", t), w.css({
                            "animation-duration": t
                        }))
                    },
                    direction: function(e) {
                        e = e || x.get.direction(),
                        e == g.inward ? x.set.inward() : x.set.outward()
                    },
                    looping: function() {
                        x.debug("Transition set to loop"),
                        w.addClass(g.looping)
                    },
                    hidden: function() {
                        w.addClass(g.transition).addClass(g.hidden)
                    },
                    inward: function() {
                        x.debug("Setting direction to inward"),
                        w.removeClass(g.outward).addClass(g.inward)
                    },
                    outward: function() {
                        x.debug("Setting direction to outward"),
                        w.removeClass(g.inward).addClass(g.outward)
                    },
                    visible: function() {
                        w.addClass(g.transition).addClass(g.visible)
                    }
                },
                start: {
                    animation: function(e) {
                        e = e || x.get.animationClass(),
                        x.debug("Starting tween", e),
                        w.addClass(e).one(v + ".complete" + y, x.complete),
                        f.useFailSafe && x.add.failSafe(),
                        x.set.duration(f.duration),
                        f.onStart.call(C)
                    }
                },
                save: {
                    animation: function(e) {
                        x.cache || (x.cache = {}),
                        x.cache.animation = e
                    },
                    displayType: function(e) {
                        "none" !== e && w.data(m.displayType, e)
                    },
                    transitionExists: function(t, n) {
                        e.fn.transition.exists[t] = n,
                        x.verbose("Saving existence of transition", t, n)
                    }
                },
                restore: {
                    conditions: function() {
                        var e = x.get.currentAnimation();
                        e && (w.removeClass(e), x.verbose("Removing animation class", x.cache)),
                        x.remove.duration()
                    }
                },
                add: {
                    failSafe: function() {
                        var e = x.get.duration();
                        x.timer = setTimeout(function() {
                            w.triggerHandler(v)
                        },
                        e + f.failSafeDelay),
                        x.verbose("Adding fail safe timer", x.timer)
                    }
                },
                remove: {
                    animating: function() {
                        w.removeClass(g.animating)
                    },
                    animationCallbacks: function() {
                        x.remove.queueCallback(),
                        x.remove.completeCallback()
                    },
                    queueCallback: function() {
                        w.off(".queue" + y)
                    },
                    completeCallback: function() {
                        w.off(".complete" + y)
                    },
                    display: function() {
                        w.css("display", "")
                    },
                    direction: function() {
                        w.removeClass(g.inward).removeClass(g.outward)
                    },
                    duration: function() {
                        w.css("animation-duration", "")
                    },
                    failSafe: function() {
                        x.verbose("Removing fail safe timer", x.timer),
                        x.timer && clearTimeout(x.timer)
                    },
                    hidden: function() {
                        w.removeClass(g.hidden)
                    },
                    visible: function() {
                        w.removeClass(g.visible)
                    },
                    looping: function() {
                        x.debug("Transitions are no longer looping"),
                        x.is.looping() && (x.reset(), w.removeClass(g.looping))
                    },
                    transition: function() {
                        w.removeClass(g.visible).removeClass(g.hidden)
                    }
                },
                get: {
                    settings: function(t, n, i) {
                        return "object" == typeof t ? e.extend(!0, {},
                        e.fn.transition.settings, t) : "function" == typeof i ? e.extend({},
                        e.fn.transition.settings, {
                            animation: t,
                            onComplete: i,
                            duration: n
                        }) : "string" == typeof n || "number" == typeof n ? e.extend({},
                        e.fn.transition.settings, {
                            animation: t,
                            duration: n
                        }) : "object" == typeof n ? e.extend({},
                        e.fn.transition.settings, n, {
                            animation: t
                        }) : "function" == typeof n ? e.extend({},
                        e.fn.transition.settings, {
                            animation: t,
                            onComplete: n
                        }) : e.extend({},
                        e.fn.transition.settings, {
                            animation: t
                        })
                    },
                    animationClass: function(e) {
                        var t = e || f.animation,
                        n = x.can.transition() && !x.has.direction() ? x.get.direction() + " ": "";
                        return g.animating + " " + g.transition + " " + n + t
                    },
                    currentAnimation: function() {
                        return ! (!x.cache || void 0 === x.cache.animation) && x.cache.animation
                    },
                    currentDirection: function() {
                        return x.is.inward() ? g.inward: g.outward
                    },
                    direction: function() {
                        return x.is.hidden() || !x.is.visible() ? g.inward: g.outward
                    },
                    animationDirection: function(t) {
                        var n;
                        return t = t || f.animation,
                        "string" == typeof t && (t = t.split(" "), e.each(t,
                        function(e, t) {
                            t === g.inward ? n = g.inward: t === g.outward && (n = g.outward)
                        })),
                        !!n && n
                    },
                    duration: function(e) {
                        return e = e || f.duration,
                        e === !1 && (e = w.css("animation-duration") || 0),
                        "string" == typeof e ? e.indexOf("ms") > -1 ? parseFloat(e) : 1e3 * parseFloat(e) : e
                    },
                    displayType: function() {
                        return f.displayType ? f.displayType: (void 0 === w.data(m.displayType) && x.can.transition(!0), w.data(m.displayType))
                    },
                    userStyle: function(e) {
                        return e = e || w.attr("style") || "",
                        e.replace(/display.*?;/, "")
                    },
                    transitionExists: function(t) {
                        return e.fn.transition.exists[t]
                    },
                    animationStartEvent: function() {
                        var e, t = n.createElement("div"),
                        i = {
                            animation: "animationstart",
                            OAnimation: "oAnimationStart",
                            MozAnimation: "mozAnimationStart",
                            WebkitAnimation: "webkitAnimationStart"
                        };
                        for (e in i) if (void 0 !== t.style[e]) return i[e];
                        return ! 1
                    },
                    animationEndEvent: function() {
                        var e, t = n.createElement("div"),
                        i = {
                            animation: "animationend",
                            OAnimation: "oAnimationEnd",
                            MozAnimation: "mozAnimationEnd",
                            WebkitAnimation: "webkitAnimationEnd"
                        };
                        for (e in i) if (void 0 !== t.style[e]) return i[e];
                        return ! 1
                    }
                },
                can: {
                    transition: function(t) {
                        var n, i, o, r, a, s, l, c = f.animation,
                        u = x.get.transitionExists(c);
                        if (void 0 === u || t) {
                            if (x.verbose("Determining whether animation exists"), n = w.attr("class"), i = w.prop("tagName"), o = e("<" + i + " />").addClass(n).insertAfter(w), r = o.addClass(c).removeClass(g.inward).removeClass(g.outward).addClass(g.animating).addClass(g.transition).css("animationName"), a = o.addClass(g.inward).css("animationName"), l = o.attr("class", n).removeAttr("style").removeClass(g.hidden).removeClass(g.visible).show().css("display"), x.verbose("Determining final display state", l), x.save.displayType(l), o.remove(), r != a) x.debug("Direction exists for animation", c),
                            s = !0;
                            else {
                                if ("none" == r || !r) return void x.debug("No animation defined in css", c);
                                x.debug("Static animation found", c, l),
                                s = !1
                            }
                            x.save.transitionExists(c, s)
                        }
                        return void 0 !== u ? u: s
                    },
                    animate: function() {
                        return void 0 !== x.can.transition()
                    }
                },
                is: {
                    animating: function() {
                        return w.hasClass(g.animating)
                    },
                    inward: function() {
                        return w.hasClass(g.inward)
                    },
                    outward: function() {
                        return w.hasClass(g.outward)
                    },
                    looping: function() {
                        return w.hasClass(g.looping)
                    },
                    occurring: function(e) {
                        return e = e || f.animation,
                        e = "." + e.replace(" ", "."),
                        w.filter(e).length > 0
                    },
                    visible: function() {
                        return w.is(":visible")
                    },
                    hidden: function() {
                        return "hidden" === w.css("visibility")
                    },
                    supported: function() {
                        return v !== !1
                    }
                },
                hide: function() {
                    x.verbose("Hiding element"),
                    x.is.animating() && x.reset(),
                    C.blur(),
                    x.remove.display(),
                    x.remove.visible(),
                    x.set.hidden(),
                    x.force.hidden(),
                    f.onHide.call(C),
                    f.onComplete.call(C)
                },
                show: function(e) {
                    x.verbose("Showing element", e),
                    x.remove.hidden(),
                    x.set.visible(),
                    x.force.visible(),
                    f.onShow.call(C),
                    f.onComplete.call(C)
                },
                toggle: function() {
                    x.is.visible() ? x.hide() : x.show()
                },
                stop: function() {
                    x.debug("Stopping current animation"),
                    w.triggerHandler(v)
                },
                stopAll: function() {
                    x.debug("Stopping all animation"),
                    x.remove.queueCallback(),
                    w.triggerHandler(v)
                },
                clear: {
                    queue: function() {
                        x.debug("Clearing animation queue"),
                        x.remove.queueCallback()
                    }
                },
                enable: function() {
                    x.verbose("Starting animation"),
                    w.removeClass(g.disabled)
                },
                disable: function() {
                    x.debug("Stopping animation"),
                    w.addClass(g.disabled)
                },
                setting: function(t, n) {
                    if (x.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, f, t);
                    else {
                        if (void 0 === n) return f[t];
                        f[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, x, t);
                    else {
                        if (void 0 === n) return x[t];
                        x[t] = n
                    }
                },
                debug: function() {
                    f.debug && (f.performance ? x.performance.log(arguments) : (x.debug = Function.prototype.bind.call(console.info, console, f.name + ":"), x.debug.apply(console, arguments)))
                },
                verbose: function() {
                    f.verbose && f.debug && (f.performance ? x.performance.log(arguments) : (x.verbose = Function.prototype.bind.call(console.info, console, f.name + ":"), x.verbose.apply(console, arguments)))
                },
                error: function() {
                    x.error = Function.prototype.bind.call(console.error, console, f.name + ":"),
                    x.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        f.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: C,
                            "Execution Time": n
                        })),
                        clearTimeout(x.performance.timer),
                        x.performance.timer = setTimeout(x.performance.display, 500)
                    },
                    display: function() {
                        var t = f.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(x.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        o.length > 1 && (t += " (" + o.length + ")"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = p;
                    return n = n || u,
                    o = C || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] && (a = l[i], !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    void 0 !== a && a
                }
            },
            x.initialize()
        }),
        void 0 !== i ? i: this
    },
    e.fn.transition.exists = {},
    e.fn.transition.settings = {
        name: "Transition",
        debug: !1,
        verbose: !1,
        performance: !0,
        namespace: "transition",
        interval: 0,
        reverse: "auto",
        onStart: function() {},
        onComplete: function() {},
        onShow: function() {},
        onHide: function() {},
        useFailSafe: !0,
        failSafeDelay: 100,
        allowRepeats: !1,
        displayType: !1,
        animation: "fade",
        duration: !1,
        queue: !0,
        metadata: {
            displayType: "display"
        },
        className: {
            animating: "animating",
            disabled: "disabled",
            hidden: "hidden",
            inward: "in",
            loading: "loading",
            looping: "looping",
            outward: "out",
            transition: "transition",
            visible: "visible"
        },
        error: {
            noAnimation: "There is no css animation matching the one you specified. Please make sure your css is vendor prefixed, and you have included transition css.",
            repeated: "That animation is already occurring, cancelling repeated animation",
            method: "The method you called is not defined",
            support: "This browser does not support CSS animations"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.api = e.fn.api = function(n) {
        var i, o = e(e.isFunction(this) ? t: this),
        r = o.selector || "",
        a = (new Date).getTime(),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);
        return o.each(function() {
            var o, d, f, p, h, g = e.isPlainObject(n) ? e.extend(!0, {},
            e.fn.api.settings, n) : e.extend({},
            e.fn.api.settings),
            m = g.namespace,
            v = g.metadata,
            b = g.selector,
            y = g.error,
            x = g.className,
            w = "." + m,
            C = "module-" + m,
            T = e(this),
            k = T.closest(b.form),
            S = g.stateContext ? e(g.stateContext) : T,
            E = this,
            A = S[0],
            D = T.data(C);
            h = {
                initialize: function() {
                    c || h.bind.events(),
                    h.instantiate()
                },
                instantiate: function() {
                    h.verbose("Storing instance of module", h),
                    D = h,
                    T.data(C, D)
                },
                destroy: function() {
                    h.verbose("Destroying previous module for", E),
                    T.removeData(C).off(w)
                },
                bind: {
                    events: function() {
                        var e = h.get.event();
                        e ? (h.verbose("Attaching API events to element", e), T.on(e + w, h.event.trigger)) : "now" == g.on && (h.debug("Querying API endpoint immediately"), h.query())
                    }
                },
                decode: {
                    json: function(e) {
                        if (void 0 !== e && "string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch(e) {}
                        return e
                    }
                },
                read: {
                    cachedResponse: function(e) {
                        var n;
                        return void 0 === t.Storage ? void h.error(y.noStorage) : (n = sessionStorage.getItem(e), h.debug("Using cached response", e, n), n = h.decode.json(n), !1)
                    }
                },
                write: {
                    cachedResponse: function(n, i) {
                        return i && "" === i ? void h.debug("Response empty, not caching", i) : void 0 === t.Storage ? void h.error(y.noStorage) : (e.isPlainObject(i) && (i = JSON.stringify(i)), sessionStorage.setItem(n, i), void h.verbose("Storing cached response for url", n, i))
                    }
                },
                query: function() {
                    if (h.is.disabled()) return void h.debug("Element is disabled API request aborted");
                    if (h.is.loading()) {
                        if (!g.interruptRequests) return void h.debug("Cancelling request, previous request is still pending");
                        h.debug("Interrupting previous request"),
                        h.abort()
                    }
                    if (g.defaultData && e.extend(!0, g.urlData, h.get.defaultData()), g.serializeForm && (g.data = h.add.formData(g.data)), (d = h.get.settings()) === !1) return h.cancelled = !0,
                    void h.error(y.beforeSend);
                    if (h.cancelled = !1, !(f = h.get.templatedURL()) && !h.is.mocked()) return void h.error(y.missingURL);
                    if ((f = h.add.urlData(f)) || h.is.mocked()) {
                        if (o = e.extend(!0, {},
                        g, {
                            type: g.method || g.type,
                            data: void 0,
                            url: g.base + f,
                            beforeSend: g.beforeXHR,
                            success: function() {},
                            failure: function() {},
                            complete: function() {}
                        }), h.debug("Querying URL", o.url), h.verbose("Using AJAX settings", o), "local" === g.cache && h.read.cachedResponse(f)) return h.debug("Response returned from local cache"),
                        h.request = h.create.request(),
                        void h.request.resolveWith(A, [h.read.cachedResponse(f)]);
                        g.throttle ? g.throttleFirstRequest || h.timer ? (h.debug("Throttling request", g.throttle), clearTimeout(h.timer), h.timer = setTimeout(function() {
                            h.timer && delete h.timer,
                            h.debug("Sending throttled request", void 0, o.method),
                            h.send.request()
                        },
                        g.throttle)) : (h.debug("Sending request", void 0, o.method), h.send.request(), h.timer = setTimeout(function() {},
                        g.throttle)) : (h.debug("Sending request", void 0, o.method), h.send.request())
                    }
                },
                should: {
                    removeError: function() {
                        return g.hideError === !0 || "auto" === g.hideError && !h.is.form()
                    }
                },
                is: {
                    disabled: function() {
                        return T.filter(b.disabled).length > 0
                    },
                    form: function() {
                        return T.is("form") || S.is("form")
                    },
                    mocked: function() {
                        return g.mockResponse || g.mockResponseAsync
                    },
                    input: function() {
                        return T.is("input")
                    },
                    loading: function() {
                        return h.request && "pending" == h.request.state()
                    },
                    abortedRequest: function(e) {
                        return e && void 0 !== e.readyState && 0 === e.readyState ? (h.verbose("XHR request determined to be aborted"), !0) : (h.verbose("XHR request was not aborted"), !1)
                    },
                    validResponse: function(t) {
                        return "json" !== g.dataType && "jsonp" !== g.dataType || !e.isFunction(g.successTest) ? (h.verbose("Response is not JSON, skipping validation", g.successTest, t), !0) : (h.debug("Checking JSON returned success", g.successTest, t), g.successTest(t) ? (h.debug("Response passed success test", t), !0) : (h.debug("Response failed success test", t), !1))
                    }
                },
                was: {
                    cancelled: function() {
                        return h.cancelled || !1
                    },
                    succesful: function() {
                        return h.request && "resolved" == h.request.state()
                    },
                    failure: function() {
                        return h.request && "rejected" == h.request.state()
                    },
                    complete: function() {
                        return h.request && ("resolved" == h.request.state() || "rejected" == h.request.state())
                    }
                },
                add: {
                    urlData: function(t, n) {
                        var i, o;
                        return t && (i = t.match(g.regExp.required), o = t.match(g.regExp.optional), n = n || g.urlData, i && (h.debug("Looking for required URL variables", i), e.each(i,
                        function(i, o) {
                            var r = o.indexOf("$") !== -1 ? o.substr(2, o.length - 3) : o.substr(1, o.length - 2),
                            a = e.isPlainObject(n) && void 0 !== n[r] ? n[r] : void 0 !== T.data(r) ? T.data(r) : void 0 !== S.data(r) ? S.data(r) : n[r];
                            if (void 0 === a) return h.error(y.requiredParameter, r, t),
                            t = !1,
                            !1;
                            h.verbose("Found required variable", r, a),
                            a = g.encodeParameters ? h.get.urlEncodedValue(a) : a,
                            t = t.replace(o, a)
                        })), o && (h.debug("Looking for optional URL variables", i), e.each(o,
                        function(i, o) {
                            var r = o.indexOf("$") !== -1 ? o.substr(3, o.length - 4) : o.substr(2, o.length - 3),
                            a = e.isPlainObject(n) && void 0 !== n[r] ? n[r] : void 0 !== T.data(r) ? T.data(r) : void 0 !== S.data(r) ? S.data(r) : n[r];
                            void 0 !== a ? (h.verbose("Optional variable Found", r, a), t = t.replace(o, a)) : (h.verbose("Optional variable not found", r), t = t.indexOf("/" + o) !== -1 ? t.replace("/" + o, "") : t.replace(o, ""))
                        }))),
                        t
                    },
                    formData: function(t) {
                        var n, i = void 0 !== e.fn.serializeObject,
                        o = i ? k.serializeObject() : k.serialize();
                        return t = t || g.data,
                        n = e.isPlainObject(t),
                        n ? i ? (h.debug("Extending existing data with form data", t, o), t = e.extend(!0, {},
                        t, o)) : (h.error(y.missingSerialize), h.debug("Cant extend data. Replacing data with form data", t, o), t = o) : (h.debug("Adding form data", o), t = o),
                        t
                    }
                },
                send: {
                    request: function() {
                        h.set.loading(),
                        h.request = h.create.request(),
                        h.is.mocked() ? h.mockedXHR = h.create.mockedXHR() : h.xhr = h.create.xhr(),
                        g.onRequest.call(A, h.request, h.xhr)
                    }
                },
                event: {
                    trigger: function(e) {
                        h.query(),
                        "submit" != e.type && "click" != e.type || e.preventDefault()
                    },
                    xhr: {
                        always: function() {},
                        done: function(t, n, i) {
                            var o = this,
                            r = (new Date).getTime() - p,
                            a = g.loadingDuration - r,
                            s = !!e.isFunction(g.onResponse) && g.onResponse.call(o, e.extend(!0, {},
                            t));
                            a = a > 0 ? a: 0,
                            s && (h.debug("Modified API response in onResponse callback", g.onResponse, s, t), t = s),
                            a > 0 && h.debug("Response completed early delaying state change by", a),
                            setTimeout(function() {
                                h.is.validResponse(t) ? h.request.resolveWith(o, [t, i]) : h.request.rejectWith(o, [i, "invalid"])
                            },
                            a)
                        },
                        fail: function(e, t, n) {
                            var i = this,
                            o = (new Date).getTime() - p,
                            r = g.loadingDuration - o;
                            r = r > 0 ? r: 0,
                            r > 0 && h.debug("Response completed early delaying state change by", r),
                            setTimeout(function() {
                                h.is.abortedRequest(e) ? h.request.rejectWith(i, [e, "aborted", n]) : h.request.rejectWith(i, [e, "error", t, n])
                            },
                            r)
                        }
                    },
                    request: {
                        done: function(e, t) {
                            h.debug("Successful API Response", e),
                            "local" === g.cache && f && (h.write.cachedResponse(f, e), h.debug("Saving server response locally", h.cache)),
                            g.onSuccess.call(A, e, T, t)
                        },
                        complete: function(e, t) {
                            var n, i;
                            h.was.succesful() ? (i = e, n = t) : (n = e, i = h.get.responseFromXHR(n)),
                            h.remove.loading(),
                            g.onComplete.call(A, i, T, n)
                        },
                        fail: function(e, t, n) {
                            var i = h.get.responseFromXHR(e),
                            r = h.get.errorFromRequest(i, t, n);
                            "aborted" == t ? (h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)", t, n), g.onAbort.call(A, t, T, e)) : "invalid" == t ? h.debug("JSON did not pass success test. A server-side error has most likely occurred", i) : "error" == t && void 0 !== e && (h.debug("XHR produced a server error", t, n), 200 != e.status && void 0 !== n && "" !== n && h.error(y.statusMessage + n, o.url), g.onError.call(A, r, T, e)),
                            g.errorDuration && "aborted" !== t && (h.debug("Adding error state"), h.set.error(), h.should.removeError() && setTimeout(h.remove.error, g.errorDuration)),
                            h.debug("API Request failed", r, e),
                            g.onFailure.call(A, i, T, e)
                        }
                    }
                },
                create: {
                    request: function() {
                        return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail)
                    },
                    mockedXHR: function() {
                        var t, n, i;
                        return i = e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail),
                        g.mockResponse ? (e.isFunction(g.mockResponse) ? (h.debug("Using mocked callback returning response", g.mockResponse), n = g.mockResponse.call(A, g)) : (h.debug("Using specified response", g.mockResponse), n = g.mockResponse), i.resolveWith(A, [n, !1, {
                            responseText: n
                        }])) : e.isFunction(g.mockResponseAsync) && (t = function(e) {
                            h.debug("Async callback returned response", e),
                            e ? i.resolveWith(A, [e, !1, {
                                responseText: e
                            }]) : i.rejectWith(A, [{
                                responseText: e
                            },
                            !1, !1])
                        },
                        h.debug("Using async mocked response", g.mockResponseAsync), g.mockResponseAsync.call(A, g, t)),
                        i
                    },
                    xhr: function() {
                        var t;
                        return t = e.ajax(o).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail),
                        h.verbose("Created server request", t),
                        t
                    }
                },
                set: {
                    error: function() {
                        h.verbose("Adding error state to element", S),
                        S.addClass(x.error)
                    },
                    loading: function() {
                        h.verbose("Adding loading state to element", S),
                        S.addClass(x.loading),
                        p = (new Date).getTime()
                    }
                },
                remove: {
                    error: function() {
                        h.verbose("Removing error state from element", S),
                        S.removeClass(x.error)
                    },
                    loading: function() {
                        h.verbose("Removing loading state from element", S),
                        S.removeClass(x.loading)
                    }
                },
                get: {
                    responseFromXHR: function(t) {
                        return !! e.isPlainObject(t) && ("json" == g.dataType || "jsonp" == g.dataType ? h.decode.json(t.responseText) : t.responseText)
                    },
                    errorFromRequest: function(t, n, i) {
                        return e.isPlainObject(t) && void 0 !== t.error ? t.error: void 0 !== g.error[n] ? g.error[n] : i
                    },
                    request: function() {
                        return h.request || !1
                    },
                    xhr: function() {
                        return h.xhr || !1
                    },
                    settings: function() {
                        var e;
                        return e = g.beforeSend.call(A, g),
                        e && (void 0 !== e.success && (h.debug("Legacy success callback detected", e), h.error(y.legacyParameters, e.success), e.onSuccess = e.success), void 0 !== e.failure && (h.debug("Legacy failure callback detected", e), h.error(y.legacyParameters, e.failure), e.onFailure = e.failure), void 0 !== e.complete && (h.debug("Legacy complete callback detected", e), h.error(y.legacyParameters, e.complete), e.onComplete = e.complete)),
                        void 0 === e && h.error(y.noReturnedValue),
                        void 0 !== e ? e: g
                    },
                    urlEncodedValue: function(e) {
                        var n = t.decodeURIComponent(e),
                        i = t.encodeURIComponent(e);
                        return n !== e ? (h.debug("URL value is already encoded, avoiding double encoding", e), e) : (h.verbose("Encoding value using encodeURIComponent", e, i), i)
                    },
                    defaultData: function() {
                        var t = {};
                        return e.isWindow(E) || (h.is.input() ? t.value = T.val() : h.is.form() && (t.text = T.text())),
                        t
                    },
                    event: function() {
                        return e.isWindow(E) || "now" == g.on ? (h.debug("API called without element, no events attached"), !1) : "auto" == g.on ? T.is("input") ? void 0 !== E.oninput ? "input": void 0 !== E.onpropertychange ? "propertychange": "keyup": T.is("form") ? "submit": "click": g.on
                    },
                    templatedURL: function(e) {
                        if (e = e || T.data(v.action) || g.action || !1, f = T.data(v.url) || g.url || !1) return h.debug("Using specified url", f),
                        f;
                        if (e) {
                            if (h.debug("Looking up url for action", e, g.api), void 0 === g.api[e] && !h.is.mocked()) return void h.error(y.missingAction, g.action, g.api);
                            f = g.api[e]
                        } else h.is.form() && (f = T.attr("action") || S.attr("action") || !1, h.debug("No url or action specified, defaulting to form action", f));
                        return f
                    }
                },
                abort: function() {
                    var e = h.get.xhr();
                    e && "resolved" !== e.state() && (h.debug("Cancelling API request"), e.abort())
                },
                reset: function() {
                    h.remove.error(),
                    h.remove.loading()
                },
                setting: function(t, n) {
                    if (h.debug("Changing setting", t, n), e.isPlainObject(t)) e.extend(!0, g, t);
                    else {
                        if (void 0 === n) return g[t];
                        g[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, h, t);
                    else {
                        if (void 0 === n) return h[t];
                        h[t] = n
                    }
                },
                debug: function() {
                    g.debug && (g.performance ? h.performance.log(arguments) : (h.debug = Function.prototype.bind.call(console.info, console, g.name + ":"), h.debug.apply(console, arguments)))
                },
                verbose: function() {
                    g.verbose && g.debug && (g.performance ? h.performance.log(arguments) : (h.verbose = Function.prototype.bind.call(console.info, console, g.name + ":"), h.verbose.apply(console, arguments)))
                },
                error: function() {
                    h.error = Function.prototype.bind.call(console.error, console, g.name + ":"),
                    h.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        g.performance && (t = (new Date).getTime(), i = a || t, n = t - i, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            "Execution Time": n
                        })),
                        clearTimeout(h.performance.timer),
                        h.performance.timer = setTimeout(h.performance.display, 500)
                    },
                    display: function() {
                        var t = g.name + ":",
                        n = 0;
                        a = !1,
                        clearTimeout(h.performance.timer),
                        e.each(s,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        r && (t += " '" + r + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, n, o) {
                    var r, a, s, l = D;
                    return n = n || u,
                    o = E || o,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (h.error(y.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(o, n) : void 0 !== a && (s = a),
                    e.isArray(i) ? i.push(s) : void 0 !== i ? i = [i, s] : void 0 !== s && (i = s),
                    a
                }
            },
            c ? (void 0 === D && h.initialize(), h.invoke(l)) : (void 0 !== D && D.invoke("destroy"), h.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.api.settings = {
        name: "API",
        namespace: "api",
        debug: !1,
        verbose: !1,
        performance: !0,
        api: {},
        cache: !0,
        interruptRequests: !0,
        on: "auto",
        stateContext: !1,
        loadingDuration: 0,
        hideError: "auto",
        errorDuration: 2e3,
        encodeParameters: !0,
        action: !1,
        url: !1,
        base: "",
        urlData: {},
        defaultData: !0,
        serializeForm: !1,
        throttle: 0,
        throttleFirstRequest: !0,
        method: "get",
        data: {},
        dataType: "json",
        mockResponse: !1,
        mockResponseAsync: !1,
        beforeSend: function(e) {
            return e
        },
        beforeXHR: function(e) {},
        onRequest: function(e, t) {},
        onResponse: !1,
        onSuccess: function(e, t) {},
        onComplete: function(e, t) {},
        onFailure: function(e, t) {},
        onError: function(e, t) {},
        onAbort: function(e, t) {},
        successTest: !1,
        error: {
            beforeSend: "The before send function has aborted the request",
            error: "There was an error with your request",
            exitConditions: "API Request Aborted. Exit conditions met",
            JSONParse: "JSON could not be parsed during error handling",
            legacyParameters: "You are using legacy API success callback names",
            method: "The method you called is not defined",
            missingAction: "API action used but no url was defined",
            missingSerialize: "jquery-serialize-object is required to add form data to an existing data object",
            missingURL: "No URL specified for api event",
            noReturnedValue: "The beforeSend callback must return a settings object, beforeSend ignored.",
            noStorage: "Caching responses locally requires session storage",
            parseError: "There was an error parsing your request",
            requiredParameter: "Missing a required URL parameter: ",
            statusMessage: "Server gave an error: ",
            timeout: "Your request timed out"
        },
        regExp: {
            required: /\{\$*[A-z0-9]+\}/g,
            optional: /\{\/\$*[A-z0-9]+\}/g
        },
        className: {
            loading: "loading",
            error: "error"
        },
        selector: {
            disabled: ".disabled",
            form: "form"
        },
        metadata: {
            action: "action",
            url: "url"
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.state = function(t) {
        var i, o = e(this),
        r = o.selector || "",
        a = (n.documentElement, (new Date).getTime()),
        s = [],
        l = arguments[0],
        c = "string" == typeof l,
        u = [].slice.call(arguments, 1);
        return o.each(function() {
            var n, d = e.isPlainObject(t) ? e.extend(!0, {},
            e.fn.state.settings, t) : e.extend({},
            e.fn.state.settings),
            f = d.error,
            p = d.metadata,
            h = d.className,
            g = d.namespace,
            m = d.states,
            v = d.text,
            b = "." + g,
            y = g + "-module",
            x = e(this),
            w = this,
            C = x.data(y);
            n = {
                initialize: function() {
                    n.verbose("Initializing module"),
                    d.automatic && n.add.defaults(),
                    d.context && "" !== r ? e(d.context).on(r, "mouseenter" + b, n.change.text).on(r, "mouseleave" + b, n.reset.text).on(r, "click" + b, n.toggle.state) : x.on("mouseenter" + b, n.change.text).on("mouseleave" + b, n.reset.text).on("click" + b, n.toggle.state),
                    n.instantiate()
                },
                instantiate: function() {
                    n.verbose("Storing instance of module", n),
                    C = n,
                    x.data(y, n)
                },
                destroy: function() {
                    n.verbose("Destroying previous module", C),
                    x.off(b).removeData(y)
                },
                refresh: function() {
                    n.verbose("Refreshing selector cache"),
                    x = e(w)
                },
                add: {
                    defaults: function() {
                        var i = t && e.isPlainObject(t.states) ? t.states: {};
                        e.each(d.defaults,
                        function(t, o) {
                            void 0 !== n.is[t] && n.is[t]() && (n.verbose("Adding default states", t, w), e.extend(d.states, o, i))
                        })
                    }
                },
                is: {
                    active: function() {
                        return x.hasClass(h.active)
                    },
                    loading: function() {
                        return x.hasClass(h.loading)
                    },
                    inactive: function() {
                        return ! x.hasClass(h.active)
                    },
                    state: function(e) {
                        return void 0 !== h[e] && x.hasClass(h[e])
                    },
                    enabled: function() {
                        return ! x.is(d.filter.active)
                    },
                    disabled: function() {
                        return x.is(d.filter.active)
                    },
                    textEnabled: function() {
                        return ! x.is(d.filter.text)
                    },
                    button: function() {
                        return x.is(".button:not(a, .submit)")
                    },
                    input: function() {
                        return x.is("input")
                    },
                    progress: function() {
                        return x.is(".ui.progress")
                    }
                },
                allow: function(e) {
                    n.debug("Now allowing state", e),
                    m[e] = !0
                },
                disallow: function(e) {
                    n.debug("No longer allowing", e),
                    m[e] = !1
                },
                allows: function(e) {
                    return m[e] || !1
                },
                enable: function() {
                    x.removeClass(h.disabled)
                },
                disable: function() {
                    x.addClass(h.disabled)
                },
                setState: function(e) {
                    n.allows(e) && x.addClass(h[e])
                },
                removeState: function(e) {
                    n.allows(e) && x.removeClass(h[e])
                },
                toggle: {
                    state: function() {
                        var t;
                        if (n.allows("active") && n.is.enabled()) {
                            if (n.refresh(), void 0 !== e.fn.api) if (t = x.api("get request"), x.api("was cancelled")) n.debug("API Request cancelled by beforesend"),
                            d.activateTest = function() {
                                return ! 1
                            },
                            d.deactivateTest = function() {
                                return ! 1
                            };
                            else if (t) return void n.listenTo(t);
                            n.change.state()
                        }
                    }
                },
                listenTo: function(t) {
                    n.debug("API request detected, waiting for state signal", t),
                    t && (v.loading && n.update.text(v.loading), e.when(t).then(function() {
                        "resolved" == t.state() ? (n.debug("API request succeeded"), d.activateTest = function() {
                            return ! 0
                        },
                        d.deactivateTest = function() {
                            return ! 0
                        }) : (n.debug("API request failed"), d.activateTest = function() {
                            return ! 1
                        },
                        d.deactivateTest = function() {
                            return ! 1
                        }),
                        n.change.state()
                    }))
                },
                change: {
                    state: function() {
                        n.debug("Determining state change direction"),
                        n.is.inactive() ? n.activate() : n.deactivate(),
                        d.sync && n.sync(),
                        d.onChange.call(w)
                    },
                    text: function() {
                        n.is.textEnabled() && (n.is.disabled() ? (n.verbose("Changing text to disabled text", v.hover), n.update.text(v.disabled)) : n.is.active() ? v.hover ? (n.verbose("Changing text to hover text", v.hover), n.update.text(v.hover)) : v.deactivate && (n.verbose("Changing text to deactivating text", v.deactivate), n.update.text(v.deactivate)) : v.hover ? (n.verbose("Changing text to hover text", v.hover), n.update.text(v.hover)) : v.activate && (n.verbose("Changing text to activating text", v.activate), n.update.text(v.activate)))
                    }
                },
                activate: function() {
                    d.activateTest.call(w) && (n.debug("Setting state to active"), x.addClass(h.active), n.update.text(v.active), d.onActivate.call(w))
                },
                deactivate: function() {
                    d.deactivateTest.call(w) && (n.debug("Setting state to inactive"), x.removeClass(h.active), n.update.text(v.inactive), d.onDeactivate.call(w))
                },
                sync: function() {
                    n.verbose("Syncing other buttons to current state"),
                    n.is.active() ? o.not(x).state("activate") : o.not(x).state("deactivate")
                },
                get: {
                    text: function() {
                        return d.selector.text ? x.find(d.selector.text).text() : x.html()
                    },
                    textFor: function(e) {
                        return v[e] || !1
                    }
                },
                flash: {
                    text: function(e, t, i) {
                        var o = n.get.text();
                        n.debug("Flashing text message", e, t),
                        e = e || d.text.flash,
                        t = t || d.flashDuration,
                        i = i ||
                        function() {},
                        n.update.text(e),
                        setTimeout(function() {
                            n.update.text(o),
                            i.call(w)
                        },
                        t)
                    }
                },
                reset: {
                    text: function() {
                        var e = v.active || x.data(p.storedText),
                        t = v.inactive || x.data(p.storedText);
                        n.is.textEnabled() && (n.is.active() && e ? (n.verbose("Resetting active text", e), n.update.text(e)) : t && (n.verbose("Resetting inactive text", e), n.update.text(t)))
                    }
                },
                update: {
                    text: function(e) {
                        var t = n.get.text();
                        e && e !== t ? (n.debug("Updating text", e), d.selector.text ? x.data(p.storedText, e).find(d.selector.text).text(e) : x.data(p.storedText, e).html(e)) : n.debug("Text is already set, ignoring update", e)
                    }
                },
                setting: function(t, i) {
                    if (n.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, d, t);
                    else {
                        if (void 0 === i) return d[t];
                        d[t] = i
                    }
                },
                internal: function(t, i) {
                    if (e.isPlainObject(t)) e.extend(!0, n, t);
                    else {
                        if (void 0 === i) return n[t];
                        n[t] = i
                    }
                },
                debug: function() {
                    d.debug && (d.performance ? n.performance.log(arguments) : (n.debug = Function.prototype.bind.call(console.info, console, d.name + ":"), n.debug.apply(console, arguments)))
                },
                verbose: function() {
                    d.verbose && d.debug && (d.performance ? n.performance.log(arguments) : (n.verbose = Function.prototype.bind.call(console.info, console, d.name + ":"), n.verbose.apply(console, arguments)))
                },
                error: function() {
                    n.error = Function.prototype.bind.call(console.error, console, d.name + ":"),
                    n.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, i, o;
                        d.performance && (t = (new Date).getTime(), o = a || t, i = t - o, a = t, s.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: w,
                            "Execution Time": i
                        })),
                        clearTimeout(n.performance.timer),
                        n.performance.timer = setTimeout(n.performance.display, 500)
                    },
                    display: function() {
                        var t = d.name + ":",
                        i = 0;
                        a = !1,
                        clearTimeout(n.performance.timer),
                        e.each(s,
                        function(e, t) {
                            i += t["Execution Time"]
                        }),
                        t += " " + i + "ms",
                        r && (t += " '" + r + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && s.length > 0 && (console.groupCollapsed(t), console.table ? console.table(s) : e.each(s,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        s = []
                    }
                },
                invoke: function(t, o, r) {
                    var a, s, l, c = C;
                    return o = o || u,
                    r = w || r,
                    "string" == typeof t && void 0 !== c && (t = t.split(/[\. ]/), a = t.length - 1, e.each(t,
                    function(i, o) {
                        var r = i != a ? o + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
                        if (e.isPlainObject(c[r]) && i != a) c = c[r];
                        else {
                            if (void 0 !== c[r]) return s = c[r],
                            !1;
                            if (!e.isPlainObject(c[o]) || i == a) return void 0 !== c[o] ? (s = c[o], !1) : (n.error(f.method, t), !1);
                            c = c[o]
                        }
                    })),
                    e.isFunction(s) ? l = s.apply(r, o) : void 0 !== s && (l = s),
                    e.isArray(i) ? i.push(l) : void 0 !== i ? i = [i, l] : void 0 !== l && (i = l),
                    s
                }
            },
            c ? (void 0 === C && n.initialize(), n.invoke(l)) : (void 0 !== C && C.invoke("destroy"), n.initialize())
        }),
        void 0 !== i ? i: this
    },
    e.fn.state.settings = {
        name: "State",
        debug: !1,
        verbose: !1,
        namespace: "state",
        performance: !0,
        onActivate: function() {},
        onDeactivate: function() {},
        onChange: function() {},
        activateTest: function() {
            return ! 0
        },
        deactivateTest: function() {
            return ! 0
        },
        automatic: !0,
        sync: !1,
        flashDuration: 1e3,
        filter: {
            text: ".loading, .disabled",
            active: ".disabled"
        },
        context: !1,
        error: {
            beforeSend: "The before send function has cancelled state change",
            method: "The method you called is not defined."
        },
        metadata: {
            promise: "promise",
            storedText: "stored-text"
        },
        className: {
            active: "active",
            disabled: "disabled",
            error: "error",
            loading: "loading",
            success: "success",
            warning: "warning"
        },
        selector: {
            text: !1
        },
        defaults: {
            input: {
                disabled: !0,
                loading: !0,
                active: !0
            },
            button: {
                disabled: !0,
                loading: !0,
                active: !0
            },
            progress: {
                active: !0,
                success: !0,
                warning: !0,
                error: !0
            }
        },
        states: {
            active: !0,
            disabled: !0,
            error: !0,
            loading: !0,
            success: !0,
            warning: !0
        },
        text: {
            disabled: !1,
            flash: !1,
            hover: !1,
            active: !1,
            inactive: !1,
            activate: !1,
            deactivate: !1
        }
    }
} (jQuery, window, document),
function(e, t, n, i) {
    "use strict";
    e.fn.visibility = function(i) {
        var o, r = e(this),
        a = r.selector || "",
        s = (new Date).getTime(),
        l = [],
        c = arguments[0],
        u = "string" == typeof c,
        d = [].slice.call(arguments, 1);
        return r.each(function() {
            var r, f, p, h = e.isPlainObject(i) ? e.extend(!0, {},
            e.fn.visibility.settings, i) : e.extend({},
            e.fn.visibility.settings),
            g = h.className,
            m = h.namespace,
            v = h.error,
            b = h.metadata,
            y = "." + m,
            x = "module-" + m,
            w = e(t),
            C = e(this),
            T = e(h.context),
            k = (C.selector, C.data(x)),
            S = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame ||
            function(e) {
                setTimeout(e, 0)
            },
            E = this,
            A = !1;
            p = {
                initialize: function() {
                    p.debug("Initializing", h),
                    p.setup.cache(),
                    p.should.trackChanges() && ("image" == h.type && p.setup.image(), "fixed" == h.type && p.setup.fixed(), h.observeChanges && p.observeChanges(), p.bind.events()),
                    p.save.position(),
                    p.is.visible() || p.error(v.visible, C),
                    h.initialCheck && p.checkVisibility(),
                    p.instantiate()
                },
                instantiate: function() {
                    p.debug("Storing instance", p),
                    C.data(x, p),
                    k = p
                },
                destroy: function() {
                    p.verbose("Destroying previous module"),
                    f && f.disconnect(),
                    w.off("load" + y, p.event.load).off("resize" + y, p.event.resize),
                    T.off("scrollchange" + y, p.event.scrollchange),
                    C.off(y).removeData(x)
                },
                observeChanges: function() {
                    "MutationObserver" in t && (f = new MutationObserver(function(e) {
                        p.verbose("DOM tree modified, updating visibility calculations"),
                        p.timer = setTimeout(function() {
                            p.verbose("DOM tree modified, updating sticky menu"),
                            p.refresh()
                        },
                        100)
                    }), f.observe(E, {
                        childList: !0,
                        subtree: !0
                    }), p.debug("Setting up mutation observer", f))
                },
                bind: {
                    events: function() {
                        p.verbose("Binding visibility events to scroll and resize"),
                        h.refreshOnLoad && w.on("load" + y, p.event.load),
                        w.on("resize" + y, p.event.resize),
                        T.off("scroll" + y).on("scroll" + y, p.event.scroll).on("scrollchange" + y, p.event.scrollchange)
                    }
                },
                event: {
                    resize: function() {
                        p.debug("Window resized"),
                        h.refreshOnResize && S(p.refresh)
                    },
                    load: function() {
                        p.debug("Page finished loading"),
                        S(p.refresh)
                    },
                    scroll: function() {
                        h.throttle ? (clearTimeout(p.timer), p.timer = setTimeout(function() {
                            T.triggerHandler("scrollchange" + y, [T.scrollTop()])
                        },
                        h.throttle)) : S(function() {
                            T.triggerHandler("scrollchange" + y, [T.scrollTop()])
                        })
                    },
                    scrollchange: function(e, t) {
                        p.checkVisibility(t)
                    }
                },
                precache: function(t, i) {
                    t instanceof Array || (t = [t]);
                    for (var o = t.length,
                    r = 0,
                    a = [], s = n.createElement("img"), l = function() {++r >= t.length && e.isFunction(i) && i()
                    }; o--;) s = n.createElement("img"),
                    s.onload = l,
                    s.onerror = l,
                    s.src = t[o],
                    a.push(s)
                },
                enableCallbacks: function() {
                    p.debug("Allowing callbacks to occur"),
                    A = !1
                },
                disableCallbacks: function() {
                    p.debug("Disabling all callbacks temporarily"),
                    A = !0
                },
                should: {
                    trackChanges: function() {
                        return u ? (p.debug("One time query, no need to bind events"), !1) : (p.debug("Callbacks being attached"), !0)
                    }
                },
                setup: {
                    cache: function() {
                        p.cache = {
                            occurred: {},
                            screen: {},
                            element: {}
                        }
                    },
                    image: function() {
                        var e = C.data(b.src);
                        e && (p.verbose("Lazy loading image", e), h.once = !0, h.observeChanges = !1, h.onOnScreen = function() {
                            p.debug("Image on screen", E),
                            p.precache(e,
                            function() {
                                p.set.image(e)
                            })
                        })
                    },
                    fixed: function() {
                        p.debug("Setting up fixed"),
                        h.once = !1,
                        h.observeChanges = !1,
                        h.initialCheck = !0,
                        h.refreshOnLoad = !0,
                        i.transition || (h.transition = !1),
                        p.create.placeholder(),
                        p.debug("Added placeholder", r),
                        h.onTopPassed = function() {
                            p.debug("Element passed, adding fixed position", C),
                            p.show.placeholder(),
                            p.set.fixed(),
                            h.transition && void 0 !== e.fn.transition && C.transition(h.transition, h.duration)
                        },
                        h.onTopPassedReverse = function() {
                            p.debug("Element returned to position, removing fixed", C),
                            p.hide.placeholder(),
                            p.remove.fixed()
                        }
                    }
                },
                create: {
                    placeholder: function() {
                        p.verbose("Creating fixed position placeholder"),
                        r = C.clone(!1).css("display", "none").addClass(g.placeholder).insertAfter(C)
                    }
                },
                show: {
                    placeholder: function() {
                        p.verbose("Showing placeholder"),
                        r.css("display", "block").css("visibility", "hidden")
                    }
                },
                hide: {
                    placeholder: function() {
                        p.verbose("Hiding placeholder"),
                        r.css("display", "none").css("visibility", "")
                    }
                },
                set: {
                    fixed: function() {
                        p.verbose("Setting element to fixed position"),
                        C.addClass(g.fixed).css({
                            position: "fixed",
                            top: h.offset + "px",
                            left: "auto",
                            zIndex: "1"
                        })
                    },
                    image: function(t) {
                        C.attr("src", t),
                        h.transition ? void 0 !== e.fn.transition ? C.transition(h.transition, h.duration) : C.fadeIn(h.duration) : C.show()
                    }
                },
                is: {
                    onScreen: function() {
                        return p.get.elementCalculations().onScreen
                    },
                    offScreen: function() {
                        return p.get.elementCalculations().offScreen
                    },
                    visible: function() {
                        return ! (!p.cache || !p.cache.element) && !(0 === p.cache.element.width && 0 === p.cache.element.offset.top)
                    }
                },
                refresh: function() {
                    p.debug("Refreshing constants (width/height)"),
                    "fixed" == h.type && (p.remove.fixed(), p.remove.occurred()),
                    p.reset(),
                    p.save.position(),
                    h.checkOnRefresh && p.checkVisibility(),
                    h.onRefresh.call(E)
                },
                reset: function() {
                    p.verbose("Reseting all cached values"),
                    e.isPlainObject(p.cache) && (p.cache.screen = {},
                    p.cache.element = {})
                },
                checkVisibility: function(e) {
                    p.verbose("Checking visibility of element", p.cache.element),
                    !A && p.is.visible() && (p.save.scroll(e), p.save.calculations(), p.passed(), p.passingReverse(), p.topVisibleReverse(), p.bottomVisibleReverse(), p.topPassedReverse(), p.bottomPassedReverse(), p.onScreen(), p.offScreen(), p.passing(), p.topVisible(), p.bottomVisible(), p.topPassed(), p.bottomPassed(), h.onUpdate && h.onUpdate.call(E, p.get.elementCalculations()))
                },
                passed: function(t, n) {
                    var i = p.get.elementCalculations();
                    if (t && n) h.onPassed[t] = n;
                    else {
                        if (void 0 !== t) return p.get.pixelsPassed(t) > i.pixelsPassed;
                        i.passing && e.each(h.onPassed,
                        function(e, t) {
                            i.bottomVisible || i.pixelsPassed > p.get.pixelsPassed(e) ? p.execute(t, e) : h.once || p.remove.occurred(t)
                        })
                    }
                },
                onScreen: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onOnScreen;
                    if (e && (p.debug("Adding callback for onScreen", e), h.onOnScreen = e), t.onScreen ? p.execute(n, "onScreen") : h.once || p.remove.occurred("onScreen"), void 0 !== e) return t.onOnScreen
                },
                offScreen: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onOffScreen;
                    if (e && (p.debug("Adding callback for offScreen", e), h.onOffScreen = e), t.offScreen ? p.execute(n, "offScreen") : h.once || p.remove.occurred("offScreen"), void 0 !== e) return t.onOffScreen
                },
                passing: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onPassing;
                    if (e && (p.debug("Adding callback for passing", e), h.onPassing = e), t.passing ? p.execute(n, "passing") : h.once || p.remove.occurred("passing"), void 0 !== e) return t.passing
                },
                topVisible: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onTopVisible;
                    if (e && (p.debug("Adding callback for top visible", e), h.onTopVisible = e), t.topVisible ? p.execute(n, "topVisible") : h.once || p.remove.occurred("topVisible"), void 0 === e) return t.topVisible
                },
                bottomVisible: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onBottomVisible;
                    if (e && (p.debug("Adding callback for bottom visible", e), h.onBottomVisible = e), t.bottomVisible ? p.execute(n, "bottomVisible") : h.once || p.remove.occurred("bottomVisible"), void 0 === e) return t.bottomVisible
                },
                topPassed: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onTopPassed;
                    if (e && (p.debug("Adding callback for top passed", e), h.onTopPassed = e), t.topPassed ? p.execute(n, "topPassed") : h.once || p.remove.occurred("topPassed"), void 0 === e) return t.topPassed
                },
                bottomPassed: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onBottomPassed;
                    if (e && (p.debug("Adding callback for bottom passed", e), h.onBottomPassed = e), t.bottomPassed ? p.execute(n, "bottomPassed") : h.once || p.remove.occurred("bottomPassed"), void 0 === e) return t.bottomPassed
                },
                passingReverse: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onPassingReverse;
                    if (e && (p.debug("Adding callback for passing reverse", e), h.onPassingReverse = e), t.passing ? h.once || p.remove.occurred("passingReverse") : p.get.occurred("passing") && p.execute(n, "passingReverse"), void 0 !== e) return ! t.passing
                },
                topVisibleReverse: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onTopVisibleReverse;
                    if (e && (p.debug("Adding callback for top visible reverse", e), h.onTopVisibleReverse = e), t.topVisible ? h.once || p.remove.occurred("topVisibleReverse") : p.get.occurred("topVisible") && p.execute(n, "topVisibleReverse"), void 0 === e) return ! t.topVisible
                },
                bottomVisibleReverse: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onBottomVisibleReverse;
                    if (e && (p.debug("Adding callback for bottom visible reverse", e), h.onBottomVisibleReverse = e), t.bottomVisible ? h.once || p.remove.occurred("bottomVisibleReverse") : p.get.occurred("bottomVisible") && p.execute(n, "bottomVisibleReverse"), void 0 === e) return ! t.bottomVisible
                },
                topPassedReverse: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onTopPassedReverse;
                    if (e && (p.debug("Adding callback for top passed reverse", e), h.onTopPassedReverse = e), t.topPassed ? h.once || p.remove.occurred("topPassedReverse") : p.get.occurred("topPassed") && p.execute(n, "topPassedReverse"), void 0 === e) return ! t.onTopPassed
                },
                bottomPassedReverse: function(e) {
                    var t = p.get.elementCalculations(),
                    n = e || h.onBottomPassedReverse;
                    if (e && (p.debug("Adding callback for bottom passed reverse", e), h.onBottomPassedReverse = e), t.bottomPassed ? h.once || p.remove.occurred("bottomPassedReverse") : p.get.occurred("bottomPassed") && p.execute(n, "bottomPassedReverse"), void 0 === e) return ! t.bottomPassed
                },
                execute: function(e, t) {
                    var n = p.get.elementCalculations(),
                    i = p.get.screenCalculations();
                    e = e || !1,
                    e && (h.continuous ? (p.debug("Callback being called continuously", t, n), e.call(E, n, i)) : p.get.occurred(t) || (p.debug("Conditions met", t, n), e.call(E, n, i))),
                    p.save.occurred(t)
                },
                remove: {
                    fixed: function() {
                        p.debug("Removing fixed position"),
                        C.removeClass(g.fixed).css({
                            position: "",
                            top: "",
                            left: "",
                            zIndex: ""
                        })
                    },
                    occurred: function(e) {
                        if (e) {
                            var t = p.cache.occurred;
                            void 0 !== t[e] && t[e] === !0 && (p.debug("Callback can now be called again", e), p.cache.occurred[e] = !1)
                        } else p.cache.occurred = {}
                    }
                },
                save: {
                    calculations: function() {
                        p.verbose("Saving all calculations necessary to determine positioning"),
                        p.save.direction(),
                        p.save.screenCalculations(),
                        p.save.elementCalculations()
                    },
                    occurred: function(e) {
                        e && (void 0 !== p.cache.occurred[e] && p.cache.occurred[e] === !0 || (p.verbose("Saving callback occurred", e), p.cache.occurred[e] = !0))
                    },
                    scroll: function(e) {
                        e = e + h.offset || T.scrollTop() + h.offset,
                        p.cache.scroll = e
                    },
                    direction: function() {
                        var e, t = p.get.scroll(),
                        n = p.get.lastScroll();
                        return e = t > n && n ? "down": t < n && n ? "up": "static",
                        p.cache.direction = e,
                        p.cache.direction
                    },
                    elementPosition: function() {
                        var e = p.cache.element,
                        t = p.get.screenSize();
                        return p.verbose("Saving element position"),
                        e.fits = e.height < t.height,
                        e.offset = C.offset(),
                        e.width = C.outerWidth(),
                        e.height = C.outerHeight(),
                        p.cache.element = e,
                        e
                    },
                    elementCalculations: function() {
                        var e = p.get.screenCalculations(),
                        t = p.get.elementPosition();
                        return h.includeMargin ? (t.margin = {},
                        t.margin.top = parseInt(C.css("margin-top"), 10), t.margin.bottom = parseInt(C.css("margin-bottom"), 10), t.top = t.offset.top - t.margin.top, t.bottom = t.offset.top + t.height + t.margin.bottom) : (t.top = t.offset.top, t.bottom = t.offset.top + t.height),
                        t.topVisible = e.bottom >= t.top,
                        t.topPassed = e.top >= t.top,
                        t.bottomVisible = e.bottom >= t.bottom,
                        t.bottomPassed = e.top >= t.bottom,
                        t.pixelsPassed = 0,
                        t.percentagePassed = 0,
                        t.onScreen = t.topVisible && !t.bottomPassed,
                        t.passing = t.topPassed && !t.bottomPassed,
                        t.offScreen = !t.onScreen,
                        t.passing && (t.pixelsPassed = e.top - t.top, t.percentagePassed = (e.top - t.top) / t.height),
                        p.cache.element = t,
                        p.verbose("Updated element calculations", t),
                        t
                    },
                    screenCalculations: function() {
                        var e = p.get.scroll();
                        return p.save.direction(),
                        p.cache.screen.top = e,
                        p.cache.screen.bottom = e + p.cache.screen.height,
                        p.cache.screen
                    },
                    screenSize: function() {
                        p.verbose("Saving window position"),
                        p.cache.screen = {
                            height: T.height()
                        }
                    },
                    position: function() {
                        p.save.screenSize(),
                        p.save.elementPosition()
                    }
                },
                get: {
                    pixelsPassed: function(e) {
                        var t = p.get.elementCalculations();
                        return e.search("%") > -1 ? t.height * (parseInt(e, 10) / 100) : parseInt(e, 10)
                    },
                    occurred: function(e) {
                        return void 0 !== p.cache.occurred && (p.cache.occurred[e] || !1)
                    },
                    direction: function() {
                        return void 0 === p.cache.direction && p.save.direction(),
                        p.cache.direction
                    },
                    elementPosition: function() {
                        return void 0 === p.cache.element && p.save.elementPosition(),
                        p.cache.element
                    },
                    elementCalculations: function() {
                        return void 0 === p.cache.element && p.save.elementCalculations(),
                        p.cache.element
                    },
                    screenCalculations: function() {
                        return void 0 === p.cache.screen && p.save.screenCalculations(),
                        p.cache.screen
                    },
                    screenSize: function() {
                        return void 0 === p.cache.screen && p.save.screenSize(),
                        p.cache.screen
                    },
                    scroll: function() {
                        return void 0 === p.cache.scroll && p.save.scroll(),
                        p.cache.scroll
                    },
                    lastScroll: function() {
                        return void 0 === p.cache.screen ? (p.debug("First scroll event, no last scroll could be found"), !1) : p.cache.screen.top
                    }
                },
                setting: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, h, t);
                    else {
                        if (void 0 === n) return h[t];
                        h[t] = n
                    }
                },
                internal: function(t, n) {
                    if (e.isPlainObject(t)) e.extend(!0, p, t);
                    else {
                        if (void 0 === n) return p[t];
                        p[t] = n
                    }
                },
                debug: function() {
                    h.debug && (h.performance ? p.performance.log(arguments) : (p.debug = Function.prototype.bind.call(console.info, console, h.name + ":"), p.debug.apply(console, arguments)))
                },
                verbose: function() {
                    h.verbose && h.debug && (h.performance ? p.performance.log(arguments) : (p.verbose = Function.prototype.bind.call(console.info, console, h.name + ":"), p.verbose.apply(console, arguments)))
                },
                error: function() {
                    p.error = Function.prototype.bind.call(console.error, console, h.name + ":"),
                    p.error.apply(console, arguments)
                },
                performance: {
                    log: function(e) {
                        var t, n, i;
                        h.performance && (t = (new Date).getTime(), i = s || t, n = t - i, s = t, l.push({
                            Name: e[0],
                            Arguments: [].slice.call(e, 1) || "",
                            Element: E,
                            "Execution Time": n
                        })),
                        clearTimeout(p.performance.timer),
                        p.performance.timer = setTimeout(p.performance.display, 500)
                    },
                    display: function() {
                        var t = h.name + ":",
                        n = 0;
                        s = !1,
                        clearTimeout(p.performance.timer),
                        e.each(l,
                        function(e, t) {
                            n += t["Execution Time"]
                        }),
                        t += " " + n + "ms",
                        a && (t += " '" + a + "'"),
                        (void 0 !== console.group || void 0 !== console.table) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l,
                        function(e, t) {
                            console.log(t.Name + ": " + t["Execution Time"] + "ms")
                        }), console.groupEnd()),
                        l = []
                    }
                },
                invoke: function(t, n, i) {
                    var r, a, s, l = k;
                    return n = n || d,
                    i = E || i,
                    "string" == typeof t && void 0 !== l && (t = t.split(/[\. ]/), r = t.length - 1, e.each(t,
                    function(n, i) {
                        var o = n != r ? i + t[n + 1].charAt(0).toUpperCase() + t[n + 1].slice(1) : t;
                        if (e.isPlainObject(l[o]) && n != r) l = l[o];
                        else {
                            if (void 0 !== l[o]) return a = l[o],
                            !1;
                            if (!e.isPlainObject(l[i]) || n == r) return void 0 !== l[i] ? (a = l[i], !1) : (p.error(v.method, t), !1);
                            l = l[i]
                        }
                    })),
                    e.isFunction(a) ? s = a.apply(i, n) : void 0 !== a && (s = a),
                    e.isArray(o) ? o.push(s) : void 0 !== o ? o = [o, s] : void 0 !== s && (o = s),
                    a
                }
            },
            u ? (void 0 === k && p.initialize(), k.save.scroll(), k.save.calculations(), p.invoke(c)) : (void 0 !== k && k.invoke("destroy"), p.initialize())
        }),
        void 0 !== o ? o: this
    },
    e.fn.visibility.settings = {
        name: "Visibility",
        namespace: "visibility",
        debug: !1,
        verbose: !1,
        performance: !0,
        observeChanges: !0,
        initialCheck: !0,
        refreshOnLoad: !0,
        refreshOnResize: !0,
        checkOnRefresh: !0,
        once: !0,
        continuous: !1,
        offset: 0,
        includeMargin: !1,
        context: t,
        throttle: !1,
        type: !1,
        transition: "fade in",
        duration: 1e3,
        onPassed: {},
        onOnScreen: !1,
        onOffScreen: !1,
        onPassing: !1,
        onTopVisible: !1,
        onBottomVisible: !1,
        onTopPassed: !1,
        onBottomPassed: !1,
        onPassingReverse: !1,
        onTopVisibleReverse: !1,
        onBottomVisibleReverse: !1,
        onTopPassedReverse: !1,
        onBottomPassedReverse: !1,
        onUpdate: !1,
        onRefresh: function() {},
        metadata: {
            src: "src"
        },
        className: {
            fixed: "fixed",
            placeholder: "placeholder"
        },
        error: {
            method: "The method you called is not defined.",
            visible: "Element is hidden, you must call refresh after element becomes visible"
        }
    }
} (jQuery, window, document),
function(e, t, n) {
    "use strict"; !
    function e(t, n, i) {
        function o(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var u = n[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports,
                function(e) {
                    var n = t[a][1][e];
                    return o(n ? n: e)
                },
                u, u.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var r = "function" == typeof require && require,
        a = 0; a < i.length; a++) o(i[a]);
        return o
    } ({
        1 : [function(i) {
            var o, r, a, s, l = function(e) {
                return e && e.__esModule ? e: {
                default:
                    e
                }
            },
            c = i("./modules/handle-dom"),
            u = i("./modules/utils"),
            d = i("./modules/handle-swal-dom"),
            f = i("./modules/handle-click"),
            p = i("./modules/handle-key"),
            h = l(p),
            g = i("./modules/default-params"),
            m = l(g),
            v = i("./modules/set-params"),
            b = l(v);
            a = s = function() {
                function i(e) {
                    var t = a;
                    return t[e] === n ? m.
                default[e]:
                    t[e]
                }
                var a = arguments[0];
                if (c.addClass(t.body, "stop-scrolling"), d.resetInput(), a === n) return u.logStr("SweetAlert expects at least 1 attribute!"),
                !1;
                var l = u.extend({},
                m.
            default);
                switch (typeof a) {
                case "string":
                    l.title = a,
                    l.text = arguments[1] || "",
                    l.type = arguments[2] || "";
                    break;
                case "object":
                    if (a.title === n) return u.logStr('Missing "title" argument!'),
                    !1;
                    l.title = a.title;
                    for (var p in m.
                default) l[p] = i(p);
                    l.confirmButtonText = l.showCancelButton ? "Confirm": m.
                default.confirmButtonText,
                    l.confirmButtonText = i("confirmButtonText"),
                    l.doneFunction = arguments[1] || null;
                    break;
                default:
                    return u.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof a),
                    !1
                }
                b.
            default(l),
                d.fixVerticalPosition(),
                d.openModal(arguments[1]);
                for (var g = d.getModal(), v = g.querySelectorAll("button"), y = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], x = function(e) {
                    return f.handleButton(e, l, g)
                },
                w = 0; w < v.length; w++) for (var C = 0; C < y.length; C++) {
                    var T = y[C];
                    v[w][T] = x
                }
                d.getOverlay().onclick = x,
                o = e.onkeydown;
                var k = function(e) {
                    return h.
                default(e, l, g)
                };
                e.onkeydown = k,
                e.onfocus = function() {
                    setTimeout(function() {
                        r !== n && (r.focus(), r = n)
                    },
                    0)
                },
                s.enableButtons()
            },
            a.setDefaults = s.setDefaults = function(e) {
                if (!e) throw new Error("userParams is required");
                if ("object" != typeof e) throw new Error("userParams has to be a object");
                u.extend(m.
            default, e)
            },
            a.close = s.close = function() {
                var i = d.getModal();
                c.fadeOut(d.getOverlay(), 5),
                c.fadeOut(i, 5),
                c.removeClass(i, "showSweetAlert"),
                c.addClass(i, "hideSweetAlert"),
                c.removeClass(i, "visible");
                var a = i.querySelector(".sa-icon.sa-success");
                c.removeClass(a, "animate"),
                c.removeClass(a.querySelector(".sa-tip"), "animateSuccessTip"),
                c.removeClass(a.querySelector(".sa-long"), "animateSuccessLong");
                var s = i.querySelector(".sa-icon.sa-error");
                c.removeClass(s, "animateErrorIcon"),
                c.removeClass(s.querySelector(".sa-x-mark"), "animateXMark");
                var l = i.querySelector(".sa-icon.sa-warning");
                return c.removeClass(l, "pulseWarning"),
                c.removeClass(l.querySelector(".sa-body"), "pulseWarningIns"),
                c.removeClass(l.querySelector(".sa-dot"), "pulseWarningIns"),
                setTimeout(function() {
                    var e = i.getAttribute("data-custom-class");
                    c.removeClass(i, e)
                },
                300),
                c.removeClass(t.body, "stop-scrolling"),
                e.onkeydown = o,
                e.previousActiveElement && e.previousActiveElement.focus(),
                r = n,
                clearTimeout(i.timeout),
                !0
            },
            a.showInputError = s.showInputError = function(e) {
                var t = d.getModal(),
                n = t.querySelector(".sa-input-error");
                c.addClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                c.addClass(i, "show"),
                i.querySelector("p").innerHTML = e,
                setTimeout(function() {
                    a.enableButtons()
                },
                1),
                t.querySelector("input").focus()
            },
            a.resetInputError = s.resetInputError = function(e) {
                if (e && 13 === e.keyCode) return ! 1;
                var t = d.getModal(),
                n = t.querySelector(".sa-input-error");
                c.removeClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                c.removeClass(i, "show")
            },
            a.disableButtons = s.disableButtons = function() {
                var e = d.getModal(),
                t = e.querySelector("button.confirm"),
                n = e.querySelector("button.cancel");
                t.disabled = !0,
                n.disabled = !0
            },
            a.enableButtons = s.enableButtons = function() {
                var e = d.getModal(),
                t = e.querySelector("button.confirm"),
                n = e.querySelector("button.cancel");
                t.disabled = !1,
                n.disabled = !1
            },
            void 0 !== e ? e.sweetAlert = e.swal = a: u.logStr("SweetAlert is a frontend module!")
        },
        {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var i = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n.
        default = i,
            t.exports = n.
        default
        },
        {}],
        3 : [function(t, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = t("./utils"),
            r = (t("./handle-swal-dom"), t("./handle-dom")),
            a = function(t, n, i) {
                function a(e) {
                    h && n.confirmButtonColor && (p.style.backgroundColor = e)
                }
                var c, u, d, f = t || e.event,
                p = f.target || f.srcElement,
                h = -1 !== p.className.indexOf("confirm"),
                g = -1 !== p.className.indexOf("sweet-overlay"),
                m = r.hasClass(i, "visible"),
                v = n.doneFunction && "true" === i.getAttribute("data-has-done-function");
                switch (h && n.confirmButtonColor && (c = n.confirmButtonColor, u = o.colorLuminance(c, -.04), d = o.colorLuminance(c, -.14)), f.type) {
                case "mouseover":
                    a(u);
                    break;
                case "mouseout":
                    a(c);
                    break;
                case "mousedown":
                    a(d);
                    break;
                case "mouseup":
                    a(u);
                    break;
                case "focus":
                    var b = i.querySelector("button.confirm"),
                    y = i.querySelector("button.cancel");
                    h ? y.style.boxShadow = "none": b.style.boxShadow = "none";
                    break;
                case "click":
                    var x = i === p,
                    w = r.isDescendant(i, p);
                    if (!x && !w && m && !n.allowOutsideClick) break;
                    h && v && m ? s(i, n) : v && m || g ? l(i, n) : r.isDescendant(i, p) && "BUTTON" === p.tagName && sweetAlert.close()
                }
            },
            s = function(e, t) {
                var n = !0;
                r.hasClass(e, "show-input") && ((n = e.querySelector("input").value) || (n = "")),
                t.doneFunction(n),
                t.closeOnConfirm && sweetAlert.close(),
                t.showLoaderOnConfirm && sweetAlert.disableButtons()
            },
            l = function(e, t) {
                var n = String(t.doneFunction).replace(/\s/g, "");
                "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10) && t.doneFunction(!1),
                t.closeOnCancel && sweetAlert.close()
            };
            i.
        default = {
                handleButton: a,
                handleConfirm: s,
                handleCancel: l
            },
            n.exports = i.
        default
        },
        {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4 : [function(n, i, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function(e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            },
            a = function(e, t) {
                r(e, t) || (e.className += " " + t)
            },
            s = function(e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (r(e, t)) {
                    for (; n.indexOf(" " + t + " ") >= 0;) n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "")
                }
            },
            l = function(e) {
                var n = t.createElement("div");
                return n.appendChild(t.createTextNode(e)),
                n.innerHTML
            },
            c = function(e) {
                e.style.opacity = "",
                e.style.display = "block"
            },
            u = function(e) {
                if (e && !e.length) return c(e);
                for (var t = 0; t < e.length; ++t) c(e[t])
            },
            d = function(e) {
                e.style.opacity = "",
                e.style.display = "none"
            },
            f = function(e) {
                if (e && !e.length) return d(e);
                for (var t = 0; t < e.length; ++t) d(e[t])
            },
            p = function(e, t) {
                for (var n = t.parentNode; null !== n;) {
                    if (n === e) return ! 0;
                    n = n.parentNode
                }
                return ! 1
            },
            h = function(e) {
                e.style.left = "-9999px",
                e.style.display = "block";
                var t, n = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding),
                e.style.left = "",
                e.style.display = "none",
                "-" + parseInt((n + t) / 2) + "px"
            },
            g = function(e, t) {
                if ( + e.style.opacity < 1) {
                    t = t || 16,
                    e.style.opacity = 0,
                    e.style.display = "block";
                    var n = +new Date,
                    i = function(e) {
                        function t() {
                            return e.apply(this, arguments)
                        }
                        return t.toString = function() {
                            return e.toString()
                        },
                        t
                    } (function() {
                        e.style.opacity = +e.style.opacity + (new Date - n) / 100,
                        n = +new Date,
                        +e.style.opacity < 1 && setTimeout(i, t)
                    });
                    i()
                }
                e.style.display = "block"
            },
            m = function(e, t) {
                t = t || 16,
                e.style.opacity = 1;
                var n = +new Date,
                i = function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    },
                    t
                } (function() {
                    e.style.opacity = +e.style.opacity - (new Date - n) / 100,
                    n = +new Date,
                    +e.style.opacity > 0 ? setTimeout(i, t) : e.style.display = "none"
                });
                i()
            },
            v = function(n) {
                if ("function" == typeof MouseEvent) {
                    var i = new MouseEvent("click", {
                        view: e,
                        bubbles: !1,
                        cancelable: !0
                    });
                    n.dispatchEvent(i)
                } else if (t.createEvent) {
                    var o = t.createEvent("MouseEvents");
                    o.initEvent("click", !1, !1),
                    n.dispatchEvent(o)
                } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
            },
            b = function(t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
            };
            o.hasClass = r,
            o.addClass = a,
            o.removeClass = s,
            o.escapeHtml = l,
            o._show = c,
            o.show = u,
            o._hide = d,
            o.hide = f,
            o.isDescendant = p,
            o.getTopMargin = h,
            o.fadeIn = g,
            o.fadeOut = m,
            o.fireClick = v,
            o.stopEventPropagation = b
        },
        {}],
        5 : [function(t, i, o) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = t("./handle-dom"),
            a = t("./handle-swal-dom"),
            s = function(t, i, o) {
                var s = t || e.event,
                l = s.keyCode || s.which,
                c = o.querySelector("button.confirm"),
                u = o.querySelector("button.cancel"),
                d = o.querySelectorAll("button[tabindex]");
                if ( - 1 !== [9, 13, 32, 27].indexOf(l)) {
                    for (var f = s.target || s.srcElement,
                    p = -1,
                    h = 0; h < d.length; h++) if (f === d[h]) {
                        p = h;
                        break
                    }
                    9 === l ? (f = -1 === p ? c: p === d.length - 1 ? d[0] : d[p + 1], r.stopEventPropagation(s), f.focus(), i.confirmButtonColor && a.setFocusStyle(f, i.confirmButtonColor)) : 13 === l ? ("INPUT" === f.tagName && (f = c, c.focus()), f = -1 === p ? c: n) : 27 === l && i.allowEscapeKey === !0 ? (f = u, r.fireClick(f, s)) : f = n
                }
            };
            o.
        default = s,
            i.exports = o.
        default
        },
        {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6 : [function(n, i, o) {
            var r = function(e) {
                return e && e.__esModule ? e: {
                default:
                    e
                }
            };
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var a = n("./utils"),
            s = n("./handle-dom"),
            l = n("./default-params"),
            c = r(l),
            u = n("./injected-html"),
            d = r(u),
            f = function() {
                var e = t.createElement("div");
                for (e.innerHTML = d.
            default; e.firstChild;) t.body.appendChild(e.firstChild)
            },
            p = function(e) {
                function t() {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                },
                t
            } (function() {
                var e = t.querySelector(".sweet-alert");
                return e || (f(), e = p()),
                e
            }),
            h = function() {
                var e = p();
                return e ? e.querySelector("input") : void 0
            },
            g = function() {
                return t.querySelector(".sweet-overlay")
            },
            m = function(e, t) {
                var n = a.hexToRgb(t);
                e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
            },
            v = function(n) {
                var i = p();
                s.fadeIn(g(), 10),
                s.show(i),
                s.addClass(i, "showSweetAlert"),
                s.removeClass(i, "hideSweetAlert"),
                e.previousActiveElement = t.activeElement,
                i.querySelector("button.confirm").focus(),
                setTimeout(function() {
                    s.addClass(i, "visible")
                },
                500);
                var o = i.getAttribute("data-timer");
                if ("null" !== o && "" !== o) {
                    var r = n;
                    i.timeout = setTimeout(function() { (r || null) && "true" === i.getAttribute("data-has-done-function") ? r(null) : sweetAlert.close()
                    },
                    o)
                }
            },
            b = function() {
                var e = p(),
                t = h();
                s.removeClass(e, "show-input"),
                t.value = c.
            default.inputValue,
                t.setAttribute("type", c.
            default.inputType),
                t.setAttribute("placeholder", c.
            default.inputPlaceholder),
                y()
            },
            y = function(e) {
                if (e && 13 === e.keyCode) return ! 1;
                var t = p(),
                n = t.querySelector(".sa-input-error");
                s.removeClass(n, "show");
                var i = t.querySelector(".sa-error-container");
                s.removeClass(i, "show")
            },
            x = function() {
                p().style.marginTop = s.getTopMargin(p())
            };
            o.sweetAlertInitialize = f,
            o.getModal = p,
            o.getOverlay = g,
            o.getInput = h,
            o.setFocusStyle = m,
            o.openModal = v,
            o.resetInput = b,
            o.resetInputError = y,
            o.fixVerticalPosition = x
        },
        {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            n.
        default = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>',
            t.exports = n.
        default
        },
        {}],
        8 : [function(e, t, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = e("./utils"),
            r = e("./handle-swal-dom"),
            a = e("./handle-dom"),
            s = ["error", "warning", "info", "success", "input", "prompt"],
            l = function(e) {
                var t = r.getModal(),
                i = t.querySelector("h2"),
                l = t.querySelector("p"),
                c = t.querySelector("button.cancel"),
                u = t.querySelector("button.confirm");
                if (i.innerHTML = e.html ? e.title: a.escapeHtml(e.title).split("\n").join("<br>"), l.innerHTML = e.html ? e.text: a.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && a.show(l), e.customClass) a.addClass(t, e.customClass),
                t.setAttribute("data-custom-class", e.customClass);
                else {
                    var d = t.getAttribute("data-custom-class");
                    a.removeClass(t, d),
                    t.setAttribute("data-custom-class", "")
                }
                if (a.hide(t.querySelectorAll(".sa-icon")), e.type && !o.isIE8()) {
                    var f = function() {
                        for (var i = !1,
                        o = 0; o < s.length; o++) if (e.type === s[o]) {
                            i = !0;
                            break
                        }
                        if (!i) return logStr("Unknown alert type: " + e.type),
                        {
                            v: !1
                        };
                        var l = ["success", "error", "warning", "info"],
                        c = n; - 1 !== l.indexOf(e.type) && (c = t.querySelector(".sa-icon.sa-" + e.type), a.show(c));
                        var u = r.getInput();
                        switch (e.type) {
                        case "success":
                            a.addClass(c, "animate"),
                            a.addClass(c.querySelector(".sa-tip"), "animateSuccessTip"),
                            a.addClass(c.querySelector(".sa-long"), "animateSuccessLong");
                            break;
                        case "error":
                            a.addClass(c, "animateErrorIcon"),
                            a.addClass(c.querySelector(".sa-x-mark"), "animateXMark");
                            break;
                        case "warning":
                            a.addClass(c, "pulseWarning"),
                            a.addClass(c.querySelector(".sa-body"), "pulseWarningIns"),
                            a.addClass(c.querySelector(".sa-dot"), "pulseWarningIns");
                            break;
                        case "input":
                        case "prompt":
                            u.setAttribute("type", e.inputType),
                            u.value = e.inputValue,
                            u.setAttribute("placeholder", e.inputPlaceholder),
                            a.addClass(t, "show-input"),
                            setTimeout(function() {
                                u.focus(),
                                u.addEventListener("keyup", swal.resetInputError)
                            },
                            400)
                        }
                    } ();
                    if ("object" == typeof f) return f.v
                }
                if (e.imageUrl) {
                    var p = t.querySelector(".sa-icon.sa-custom");
                    p.style.backgroundImage = "url(" + e.imageUrl + ")",
                    a.show(p);
                    var h = 80,
                    g = 80;
                    if (e.imageSize) {
                        var m = e.imageSize.toString().split("x"),
                        v = m[0],
                        b = m[1];
                        v && b ? (h = v, g = b) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                    }
                    p.setAttribute("style", p.getAttribute("style") + "width:" + h + "px; height:" + g + "px")
                }
                t.setAttribute("data-has-cancel-button", e.showCancelButton),
                e.showCancelButton ? c.style.display = "inline-block": a.hide(c),
                t.setAttribute("data-has-confirm-button", e.showConfirmButton),
                e.showConfirmButton ? u.style.display = "inline-block": a.hide(u),
                e.cancelButtonText && (c.innerHTML = a.escapeHtml(e.cancelButtonText)),
                e.confirmButtonText && (u.innerHTML = a.escapeHtml(e.confirmButtonText)),
                e.confirmButtonColor && (u.style.backgroundColor = e.confirmButtonColor, u.style.borderLeftColor = e.confirmLoadingButtonColor, u.style.borderRightColor = e.confirmLoadingButtonColor, r.setFocusStyle(u, e.confirmButtonColor)),
                t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                var y = !!e.doneFunction;
                t.setAttribute("data-has-done-function", y),
                e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"),
                t.setAttribute("data-timer", e.timer)
            };
            i.
        default = l,
            t.exports = i.
        default
        },
        {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9 : [function(t, n, i) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            },
            r = function(e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
            },
            a = function() {
                return e.attachEvent && !e.addEventListener
            },
            s = function(t) {
                e.console && e.console.log("SweetAlert: " + t)
            },
            l = function(e, t) {
                e = String(e).replace(/[^0-9a-f]/gi, ""),
                e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                t = t || 0;
                var n, i, o = "#";
                for (i = 0; 3 > i; i++) n = parseInt(e.substr(2 * i, 2), 16),
                n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16),
                o += ("00" + n).substr(n.length);
                return o
            };
            i.extend = o,
            i.hexToRgb = r,
            i.isIE8 = a,
            i.logStr = s,
            i.colorLuminance = l
        },
        {}]
    },
    {},
    [1]),
    "function" == typeof define && define.amd ? define(function() {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
} (window, document),
function() {
    "use strict";
    function e(t, i) {
        var o;
        if (i = i || {},
        this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = i.touchBoundary || 10, this.layer = t, this.tapDelay = i.tapDelay || 200, this.tapTimeout = i.tapTimeout || 700, !e.notNeeded(t)) {
            for (var r = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, s = 0, l = r.length; s < l; s++) a[r[s]] = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            } (a[r[s]], a);
            n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)),
            t.addEventListener("click", this.onClick, !0),
            t.addEventListener("touchstart", this.onTouchStart, !1),
            t.addEventListener("touchmove", this.onTouchMove, !1),
            t.addEventListener("touchend", this.onTouchEnd, !1),
            t.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation || (t.removeEventListener = function(e, n, i) {
                var o = Node.prototype.removeEventListener;
                "click" === e ? o.call(t, e, n.hijacked || n, i) : o.call(t, e, n, i)
            },
            t.addEventListener = function(e, n, i) {
                var o = Node.prototype.addEventListener;
                "click" === e ? o.call(t, e, n.hijacked || (n.hijacked = function(e) {
                    e.propagationStopped || n(e)
                }), i) : o.call(t, e, n, i)
            }),
            "function" == typeof t.onclick && (o = t.onclick, t.addEventListener("click",
            function(e) {
                o(e)
            },
            !1), t.onclick = null)
        }
    }
    var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
    n = navigator.userAgent.indexOf("Android") > 0 && !t,
    i = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
    o = i && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    r = i && /OS [6-7]_\d/.test(navigator.userAgent),
    a = navigator.userAgent.indexOf("BB10") > 0;
    e.prototype.needsClick = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled) return ! 0;
            break;
        case "input":
            if (i && "file" === e.type || e.disabled) return ! 0;
            break;
        case "label":
        case "iframe":
        case "video":
            return ! 0
        }
        return /\bneedsclick\b/.test(e.className)
    },
    e.prototype.needsFocus = function(e) {
        switch (e.nodeName.toLowerCase()) {
        case "textarea":
            return ! 0;
        case "select":
            return ! n;
        case "input":
            switch (e.type) {
            case "button":
            case "checkbox":
            case "file":
            case "image":
            case "radio":
            case "submit":
                return ! 1
            }
            return ! e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
        }
    },
    e.prototype.sendClick = function(e, t) {
        var n, i;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(),
        i = t.changedTouches[0],
        n = document.createEvent("MouseEvents"),
        n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
        n.forwardedTouchEvent = !0,
        e.dispatchEvent(n)
    },
    e.prototype.determineEventType = function(e) {
        return n && "select" === e.tagName.toLowerCase() ? "mousedown": "click"
    },
    e.prototype.focus = function(e) {
        var t, n = ["time", "month", "number", "email"];
        i && e.setSelectionRange && 0 !== e.type.indexOf("date") && n.indexOf(e.type) === -1 ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    },
    e.prototype.updateScrollParent = function(e) {
        var t, n;
        if (! (t = e.fastClickScrollParent) || !t.contains(e)) {
            n = e;
            do {
                if (n.scrollHeight > n.offsetHeight) {
                    t = n,
                    e.fastClickScrollParent = n;
                    break
                }
                n = n.parentElement
            } while ( n )
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    },
    e.prototype.getTargetElementFromEventTarget = function(e) {
        return e.nodeType === Node.TEXT_NODE ? e.parentNode: e
    },
    e.prototype.onTouchStart = function(e) {
        var t, n, r;
        if (e.targetTouches.length > 1) return ! 0;
        if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
            if (r = window.getSelection(), r.rangeCount && !r.isCollapsed) return ! 0;
            if (!o) {
                if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(),
                !1;
                this.lastTouchIdentifier = n.identifier,
                this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0,
        this.trackingClickStart = e.timeStamp,
        this.targetElement = t,
        this.touchStartX = n.pageX,
        this.touchStartY = n.pageY,
        e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
        !0
    },
    e.prototype.touchHasMoved = function(e) {
        var t = e.changedTouches[0],
        n = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
    },
    e.prototype.onTouchMove = function(e) {
        return ! this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
    },
    e.prototype.findControl = function(e) {
        return void 0 !== e.control ? e.control: e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    },
    e.prototype.onTouchEnd = function(e) {
        var t, a, s, l, c, u = this.targetElement;
        if (!this.trackingClick) return ! 0;
        if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0,
        !0;
        if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return ! 0;
        if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, a = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, r && (c = e.changedTouches[0], u = document.elementFromPoint(c.pageX - window.pageXOffset, c.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (s = u.tagName.toLowerCase())) {
            if (t = this.findControl(u)) {
                if (this.focus(u), n) return ! 1;
                u = t
            }
        } else if (this.needsFocus(u)) return e.timeStamp - a > 100 || i && window.top !== window && "input" === s ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, e), o && "select" === s || (this.targetElement = null, e.preventDefault()), !1);
        return ! (!i || o || !(l = u.fastClickScrollParent) || l.fastClickLastScrollTop === l.scrollTop) || (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1)
    },
    e.prototype.onTouchCancel = function() {
        this.trackingClick = !1,
        this.targetElement = null
    },
    e.prototype.onMouse = function(e) {
        return ! this.targetElement || ( !! e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
    },
    e.prototype.onClick = function(e) {
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
    },
    e.prototype.destroy = function() {
        var e = this.layer;
        n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)),
        e.removeEventListener("click", this.onClick, !0),
        e.removeEventListener("touchstart", this.onTouchStart, !1),
        e.removeEventListener("touchmove", this.onTouchMove, !1),
        e.removeEventListener("touchend", this.onTouchEnd, !1),
        e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    },
    e.notNeeded = function(e) {
        var t, i, o;
        if (void 0 === window.ontouchstart) return ! 0;
        if (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!n) return ! 0;
            if (t = document.querySelector("meta[name=viewport]")) {
                if (t.content.indexOf("user-scalable=no") !== -1) return ! 0;
                if (i > 31 && document.documentElement.scrollWidth <= window.outerWidth) return ! 0
            }
        }
        if (a && (o = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), o[1] >= 10 && o[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
            if (t.content.indexOf("user-scalable=no") !== -1) return ! 0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return ! 0
        }
        return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || ( !! ( + (/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (t = document.querySelector("meta[name=viewport]")) && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
    },
    e.attach = function(t, n) {
        return new e(t, n)
    },
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
        return e
    }) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e
} (),
function(e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
} (function(e) {
    function t(r, a, l, f) {
        function p() {
            return t._.node("div", t._.node("div", t._.node("div", t._.node("div", A.component.nodes(C.open), k.box), k.wrap), k.frame), k.holder, 'tabindex="-1"')
        }
        function h() {
            S.data(a, A).addClass(k.input).val(S.data("value") ? A.get("select", T.format) : r.value),
            T.editable || S.on("focus." + C.id + " click." + C.id,
            function(e) {
                e.preventDefault(),
                A.open()
            }).on("keydown." + C.id, x),
            o(r, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: r.id + "_root"
            })
        }
        function g() {
            o(A.$root[0], "hidden", !0)
        }
        function m() {
            A.$holder.on({
                keydown: x,
                "focus.toOpen": y,
                blur: function() {
                    S.removeClass(k.target)
                },
                focusin: function(e) {
                    A.$root.removeClass(k.focused),
                    e.stopPropagation()
                },
                "mousedown click": function(t) {
                    var n = t.target;
                    n != A.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), A.$holder[0].focus()))
                }
            }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]",
            function() {
                var t = e(this),
                n = t.data(),
                i = t.hasClass(k.navDisabled) || t.hasClass(k.disabled),
                o = s();
                o = o && (o.type || o.href),
                (i || o && !e.contains(A.$root[0], o)) && A.$holder[0].focus(),
                !i && n.nav ? A.set("highlight", A.component.item.highlight, {
                    nav: n.nav
                }) : !i && "pick" in n ? (A.set("select", n.pick), T.closeOnSelect && A.close(!0)) : n.clear ? (A.clear(), T.closeOnClear && A.close(!0)) : n.close && A.close(!0)
            })
        }
        function v() {
            var t;
            T.hiddenName === !0 ? (t = r.name, r.name = "") : (t = ["string" == typeof T.hiddenPrefix ? T.hiddenPrefix: "", "string" == typeof T.hiddenSuffix ? T.hiddenSuffix: "_submit"], t = t[0] + r.name + t[1]),
            A._hidden = e('<input type=hidden name="' + t + '"' + (S.data("value") || r.value ? ' value="' + A.get("select", T.formatSubmit) + '"': "") + ">")[0],
            S.on("change." + C.id,
            function() {
                A._hidden.value = r.value ? A.get("select", T.formatSubmit) : ""
            })
        }
        function b() {
            w && d ? A.$holder.find("." + k.frame).one("transitionend",
            function() {
                A.$holder[0].focus()
            }) : A.$holder[0].focus()
        }
        function y(e) {
            e.stopPropagation(),
            S.addClass(k.target),
            A.$root.addClass(k.focused),
            A.open()
        }
        function x(e) {
            var t = e.keyCode,
            n = /^(8|46)$/.test(t);
            return 27 == t ? (A.close(!0), !1) : void((32 == t || n || !C.open && A.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? A.clear().close() : A.open()))
        }
        if (!r) return t;
        var w = !1,
        C = {
            id: r.id || "P" + Math.abs(~~ (Math.random() * new Date))
        },
        T = l ? e.extend(!0, {},
        l.defaults, f) : f || {},
        k = e.extend({},
        t.klasses(), T.klass),
        S = e(r),
        E = function() {
            return this.start()
        },
        A = E.prototype = {
            constructor: E,
            $node: S,
            start: function() {
                return C && C.start ? A: (C.methods = {},
                C.start = !0, C.open = !1, C.type = r.type, r.autofocus = r == s(), r.readOnly = !T.editable, r.id = r.id || C.id, "text" != r.type && (r.type = "text"), A.component = new l(A, T), A.$root = e('<div class="' + k.picker + '" id="' + r.id + '_root" />'), g(), A.$holder = e(p()).appendTo(A.$root), m(), T.formatSubmit && v(), h(), T.containerHidden ? e(T.containerHidden).append(A._hidden) : S.after(A._hidden), T.container ? e(T.container).append(A.$root) : S.after(A.$root), A.on({
                    start: A.component.onStart,
                    render: A.component.onRender,
                    stop: A.component.onStop,
                    open: A.component.onOpen,
                    close: A.component.onClose,
                    set: A.component.onSet
                }).on({
                    start: T.onStart,
                    render: T.onRender,
                    stop: T.onStop,
                    open: T.onOpen,
                    close: T.onClose,
                    set: T.onSet
                }), w = n(A.$holder[0]), r.autofocus && A.open(), A.trigger("start").trigger("render"))
            },
            render: function(t) {
                return t ? (A.$holder = e(p()), m(), A.$root.html(A.$holder)) : A.$root.find("." + k.box).html(A.component.nodes(C.open)),
                A.trigger("render")
            },
            stop: function() {
                return C.start ? (A.close(), A._hidden && A._hidden.parentNode.removeChild(A._hidden), A.$root.remove(), S.removeClass(k.input).removeData(a), setTimeout(function() {
                    S.off("." + C.id)
                },
                0), r.type = C.type, r.readOnly = !1, A.trigger("stop"), C.methods = {},
                C.start = !1, A) : A
            },
            open: function(n) {
                return C.open ? A: (S.addClass(k.active), o(r, "expanded", !0), setTimeout(function() {
                    A.$root.addClass(k.opened),
                    o(A.$root[0], "hidden", !1)
                },
                0), n !== !1 && (C.open = !0, w && u.css("overflow", "hidden").css("padding-right", "+=" + i()), b(), c.on("click." + C.id + " focusin." + C.id,
                function(e) {
                    var t = e.target;
                    t != r && t != document && 3 != e.which && A.close(t === A.$holder[0])
                }).on("keydown." + C.id,
                function(n) {
                    var i = n.keyCode,
                    o = A.component.key[i],
                    r = n.target;
                    27 == i ? A.close(!0) : r != A.$holder[0] || !o && 13 != i ? e.contains(A.$root[0], r) && 13 == i && (n.preventDefault(), r.click()) : (n.preventDefault(), o ? t._.trigger(A.component.key.go, A, [t._.trigger(o)]) : A.$root.find("." + k.highlighted).hasClass(k.disabled) || (A.set("select", A.component.item.highlight), T.closeOnSelect && A.close(!0)))
                })), A.trigger("open"))
            },
            close: function(e) {
                return e && (T.editable ? r.focus() : (A.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                    A.$holder.on("focus.toOpen", y)
                },
                0))),
                S.removeClass(k.active),
                o(r, "expanded", !1),
                setTimeout(function() {
                    A.$root.removeClass(k.opened + " " + k.focused),
                    o(A.$root[0], "hidden", !0)
                },
                0),
                C.open ? (C.open = !1, w && u.css("overflow", "").css("padding-right", "-=" + i()), c.off("." + C.id), A.trigger("close")) : A
            },
            clear: function(e) {
                return A.set("clear", null, e)
            },
            set: function(t, n, i) {
                var o, r, a = e.isPlainObject(t),
                s = a ? t: {};
                if (i = a && e.isPlainObject(n) ? n: i || {},
                t) {
                    a || (s[t] = n);
                    for (o in s) r = s[o],
                    o in A.component.item && (void 0 === r && (r = null), A.component.set(o, r, i)),
                    ("select" == o || "clear" == o) && S.val("clear" == o ? "": A.get(o, T.format)).trigger("change");
                    A.render()
                }
                return i.muted ? A: A.trigger("set", s)
            },
            get: function(e, n) {
                if (e = e || "value", null != C[e]) return C[e];
                if ("valueSubmit" == e) {
                    if (A._hidden) return A._hidden.value;
                    e = "value"
                }
                if ("value" == e) return r.value;
                if (e in A.component.item) {
                    if ("string" == typeof n) {
                        var i = A.component.get(e);
                        return i ? t._.trigger(A.component.formats.toString, A.component, [n, i]) : ""
                    }
                    return A.component.get(e)
                }
            },
            on: function(t, n, i) {
                var o, r, a = e.isPlainObject(t),
                s = a ? t: {};
                if (t) {
                    a || (s[t] = n);
                    for (o in s) r = s[o],
                    i && (o = "_" + o),
                    C.methods[o] = C.methods[o] || [],
                    C.methods[o].push(r)
                }
                return A
            },
            off: function() {
                var e, t, n = arguments;
                for (e = 0, namesCount = n.length; e < namesCount; e += 1)(t = n[e]) in C.methods && delete C.methods[t];
                return A
            },
            trigger: function(e, n) {
                var i = function(e) {
                    var i = C.methods[e];
                    i && i.map(function(e) {
                        t._.trigger(e, A, [n])
                    })
                };
                return i("_" + e),
                i(e),
                A
            }
        };
        return new E
    }
    function n(e) {
        var t, n = "position";
        return e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]),
        "fixed" == t
    }
    function i() {
        if (u.height() <= l.height()) return 0;
        var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
        n = t[0].offsetWidth;
        t.css("overflow", "scroll");
        var i = e('<div style="width:100%" />').appendTo(t),
        o = i[0].offsetWidth;
        return t.remove(),
        n - o
    }
    function o(t, n, i) {
        if (e.isPlainObject(n)) for (var o in n) r(t, o, n[o]);
        else r(t, n, i)
    }
    function r(e, t, n) {
        e.setAttribute(("role" == t ? "": "aria-") + t, n)
    }
    function a(t, n) {
        e.isPlainObject(t) || (t = {
            attribute: n
        }),
        n = "";
        for (var i in t) {
            var o = ("role" == i ? "": "aria-") + i;
            n += null == t[i] ? "": o + '="' + t[i] + '"'
        }
        return n
    }
    function s() {
        try {
            return document.activeElement
        } catch(e) {}
    }
    var l = e(window),
    c = e(document),
    u = e(document.documentElement),
    d = null != document.documentElement.style.transition;
    return t.klasses = function(e) {
        return e = e || "picker",
        {
            picker: e,
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    },
    t._ = {
        group: function(e) {
            for (var n, i = "",
            o = t._.trigger(e.min, e); o <= t._.trigger(e.max, e, [o]); o += e.i) n = t._.trigger(e.item, e, [o]),
            i += t._.node(e.node, n[0], n[1], n[2]);
            return i
        },
        node: function(t, n, i, o) {
            return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"': "", o = o ? " " + o: "", "<" + t + i + o + ">" + n + "</" + t + ">") : ""
        },
        lead: function(e) {
            return (10 > e ? "0": "") + e
        },
        trigger: function(e, t, n) {
            return "function" == typeof e ? e.apply(t, n || []) : e
        },
        digits: function(e) {
            return /\d/.test(e[1]) ? 2 : 1
        },
        isDate: function(e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        },
        isInteger: function(e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
        },
        ariaAttr: a
    },
    t.extend = function(n, i) {
        e.fn[n] = function(o, r) {
            var a = this.data(n);
            return "picker" == o ? a: a && "string" == typeof o ? t._.trigger(a[o], a, [r]) : this.each(function() {
                e(this).data(n) || new t(this, n, i, o)
            })
        },
        e.fn[n].defaults = i.defaults
    },
    t
}),
function(e) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
} (function(e, t) {
    function n(e, t) {
        var n = this,
        i = e.$node[0],
        o = i.value,
        r = e.$node.data("value"),
        a = r || o,
        s = r ? t.formatSubmit: t.format,
        l = function() {
            return i.currentStyle ? "rtl" == i.currentStyle.direction: "rtl" == getComputedStyle(e.$root[0]).direction
        };
        n.settings = t,
        n.$node = e.$node,
        n.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        },
        n.item = {},
        n.item.clear = null,
        n.item.disable = (t.disable || []).slice(0),
        n.item.enable = -
        function(e) {
            return e[0] === !0 ? e.shift() : -1
        } (n.item.disable),
        n.set("min", t.min).set("max", t.max).set("now"),
        a ? n.set("select", a, {
            format: s,
            defaultValue: !0
        }) : n.set("select", null).set("highlight", n.item.now),
        n.key = {
            40 : 7,
            38 : -7,
            39 : function() {
                return l() ? -1 : 1
            },
            37 : function() {
                return l() ? 1 : -1
            },
            go: function(e) {
                var t = n.item.highlight,
                i = new Date(t.year, t.month, t.date + e);
                n.set("highlight", i, {
                    interval: e
                }),
                this.render()
            }
        },
        e.on("render",
        function() {
            e.$root.find("." + t.klass.selectMonth).on("change",
            function() {
                var n = this.value;
                n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }),
            e.$root.find("." + t.klass.selectYear).on("change",
            function() {
                var n = this.value;
                n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        },
        1).on("open",
        function() {
            var i = "";
            n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"),
            e.$root.find("button" + i + ", select").attr("disabled", !1)
        },
        1).on("close",
        function() {
            e.$root.find("button, select").attr("disabled", !0)
        },
        1)
    }
    var i = e._;
    n.prototype.set = function(e, t, n) {
        var i = this,
        o = i.item;
        return null === t ? ("clear" == e && (e = "select"), o[e] = t, i) : (o["enable" == e ? "disable": "flip" == e ? "enable": e] = i.queue[e].split(" ").map(function(o) {
            return t = i[o](e, t, n)
        }).pop(), "select" == e ? i.set("highlight", o.select, n) : "highlight" == e ? i.set("view", o.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
    },
    n.prototype.get = function(e) {
        return this.item[e]
    },
    n.prototype.create = function(e, n, o) {
        var r, a = this;
        return n = void 0 === n ? e: n,
        n == -(1 / 0) || n == 1 / 0 ? r = n: t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj: t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n: a.create().obj) : n = i.isInteger(n) || i.isDate(n) ? a.normalize(new Date(n), o) : a.now(e, n, o),
        {
            year: r || n.getFullYear(),
            month: r || n.getMonth(),
            date: r || n.getDate(),
            day: r || n.getDay(),
            obj: r || n,
            pick: r || n.getTime()
        }
    },
    n.prototype.createRange = function(e, n) {
        var o = this,
        r = function(e) {
            return e === !0 || t.isArray(e) || i.isDate(e) ? o.create(e) : e
        };
        return i.isInteger(e) || (e = r(e)),
        i.isInteger(n) || (n = r(n)),
        i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]),
        {
            from: r(e),
            to: r(n)
        }
    },
    n.prototype.withinRange = function(e, t) {
        return e = this.createRange(e.from, e.to),
        t.pick >= e.from.pick && t.pick <= e.to.pick
    },
    n.prototype.overlapRanges = function(e, t) {
        var n = this;
        return e = n.createRange(e.from, e.to),
        t = n.createRange(t.from, t.to),
        n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
    },
    n.prototype.now = function(e, t, n) {
        return t = new Date,
        n && n.rel && t.setDate(t.getDate() + n.rel),
        this.normalize(t, n)
    },
    n.prototype.navigate = function(e, n, i) {
        var o, r, a, s, l = t.isArray(n),
        c = t.isPlainObject(n),
        u = this.item.view;
        if (l || c) {
            for (c ? (r = n.year, a = n.month, s = n.date) : (r = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (r = u.year, a = u.month), o = new Date(r, a + (i && i.nav ? i.nav: 0), 1), r = o.getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
            n = [r, a, s]
        }
        return n
    },
    n.prototype.normalize = function(e) {
        return e.setHours(0, 0, 0, 0),
        e
    },
    n.prototype.measure = function(e, t) {
        var n = this;
        return t ? "string" == typeof t ? t = n.parse(e, t) : i.isInteger(t) && (t = n.now(e, t, {
            rel: t
        })) : t = "min" == e ? -(1 / 0) : 1 / 0,
        t
    },
    n.prototype.viewset = function(e, t) {
        return this.create([t.year, t.month, 1])
    },
    n.prototype.validate = function(e, n, o) {
        var r, a, s, l, c = this,
        u = n,
        d = o && o.interval ? o.interval: 1,
        f = -1 === c.item.enable,
        p = c.item.min,
        h = c.item.max,
        g = f && c.item.disable.filter(function(e) {
            if (t.isArray(e)) {
                var o = c.create(e).pick;
                o < n.pick ? r = !0 : o > n.pick && (a = !0)
            }
            return i.isInteger(e)
        }).length;
        if ((!o || !o.nav && !o.defaultValue) && (!f && c.disabled(n) || f && c.disabled(n) && (g || r || a) || !f && (n.pick <= p.pick || n.pick >= h.pick))) for (f && !g && (!a && d > 0 || !r && 0 > d) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= p.pick ? (s = !0, d = 1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : -1)])) : n.pick >= h.pick && (l = !0, d = -1, n = c.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : 1)])), !s || !l);) n = c.create([n.year, n.month, n.date + d]);
        return n
    },
    n.prototype.disabled = function(e) {
        var n = this,
        o = n.item.disable.filter(function(o) {
            return i.isInteger(o) ? e.day === (n.settings.firstDay ? o: o - 1) % 7 : t.isArray(o) || i.isDate(o) ? e.pick === n.create(o).pick: t.isPlainObject(o) ? n.withinRange(o, e) : void 0
        });
        return o = o.length && !o.filter(function(e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length,
        -1 === n.item.enable ? !o: o || e.pick < n.item.min.pick || e.pick > n.item.max.pick
    },
    n.prototype.parse = function(e, t, n) {
        var o = this,
        r = {};
        return t && "string" == typeof t ? (n && n.format || (n = n || {},
        n.format = o.settings.format), o.formats.toArray(n.format).map(function(e) {
            var n = o.formats[e],
            a = n ? i.trigger(n, o, [t, r]) : e.replace(/^!/, "").length;
            n && (r[e] = t.substr(0, a)),
            t = t.substr(a)
        }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
    },
    n.prototype.formats = function() {
        function e(e, t, n) {
            var i = e.match(/[^\x00-\x7F]+|\w+/)[0];
            return n.mm || n.m || (n.m = t.indexOf(i) + 1),
            i.length
        }
        function t(e) {
            return e.match(/\w+/)[0].length
        }
        return {
            d: function(e, t) {
                return e ? i.digits(e) : t.date
            },
            dd: function(e, t) {
                return e ? 2 : i.lead(t.date)
            },
            ddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysShort[n.day]
            },
            dddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysFull[n.day]
            },
            m: function(e, t) {
                return e ? i.digits(e) : t.month + 1
            },
            mm: function(e, t) {
                return e ? 2 : i.lead(t.month + 1)
            },
            mmm: function(t, n) {
                var i = this.settings.monthsShort;
                return t ? e(t, i, n) : i[n.month]
            },
            mmmm: function(t, n) {
                var i = this.settings.monthsFull;
                return t ? e(t, i, n) : i[n.month]
            },
            yy: function(e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            },
            yyyy: function(e, t) {
                return e ? 4 : t.year
            },
            toArray: function(e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(e, t) {
                var n = this;
                return n.formats.toArray(e).map(function(e) {
                    return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    } (),
    n.prototype.isDateExact = function(e, n) {
        var o = this;
        return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n: (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? o.create(e).pick === o.create(n).pick: !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (o.isDateExact(e.from, n.from) && o.isDateExact(e.to, n.to))
    },
    n.prototype.isDateOverlap = function(e, n) {
        var o = this,
        r = o.settings.firstDay ? 1 : 0;
        return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + r) === o.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + r) === o.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && o.overlapRanges(e, n)
    },
    n.prototype.flipEnable = function(e) {
        var t = this.item;
        t.enable = e || ( - 1 == t.enable ? 1 : -1)
    },
    n.prototype.deactivate = function(e, n) {
        var o = this,
        r = o.item.disable.slice(0);
        return "flip" == n ? o.flipEnable() : n === !1 ? (o.flipEnable(1), r = []) : n === !0 ? (o.flipEnable( - 1), r = []) : n.map(function(e) {
            for (var n, a = 0; a < r.length; a += 1) if (o.isDateExact(e, r[a])) {
                n = !0;
                break
            }
            n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
        }),
        r
    },
    n.prototype.activate = function(e, n) {
        var o = this,
        r = o.item.disable,
        a = r.length;
        return "flip" == n ? o.flipEnable() : n === !0 ? (o.flipEnable(1), r = []) : n === !1 ? (o.flipEnable( - 1), r = []) : n.map(function(e) {
            var n, s, l, c;
            for (l = 0; a > l; l += 1) {
                if (s = r[l], o.isDateExact(s, e)) {
                    n = r[l] = null,
                    c = !0;
                    break
                }
                if (o.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e, n[3] || n.push("inverted")) : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (n) for (l = 0; a > l; l += 1) if (o.isDateExact(r[l], e)) {
                r[l] = null;
                break
            }
            if (c) for (l = 0; a > l; l += 1) if (o.isDateOverlap(r[l], e)) {
                r[l] = null;
                break
            }
            n && r.push(n)
        }),
        r.filter(function(e) {
            return null != e
        })
    },
    n.prototype.nodes = function(e) {
        var t = this,
        n = t.settings,
        o = t.item,
        r = o.now,
        a = o.select,
        s = o.highlight,
        l = o.view,
        c = o.disable,
        u = o.min,
        d = o.max,
        f = function(e, t) {
            return n.firstDay && (e.push(e.shift()), t.push(t.shift())),
            i.node("thead", i.node("tr", i.group({
                min: 0,
                max: 6,
                i: 1,
                node: "th",
                item: function(i) {
                    return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
                }
            })))
        } ((n.showWeekdaysFull ? n.weekdaysFull: n.weekdaysShort).slice(0), n.weekdaysFull.slice(0)),
        p = function(e) {
            return i.node("div", " ", n.klass["nav" + (e ? "Next": "Prev")] + (e && l.year >= d.year && l.month >= d.month || !e && l.year <= u.year && l.month <= u.month ? " " + n.klass.navDisabled: ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
                role: "button",
                controls: t.$node[0].id + "_table"
            }) + ' title="' + (e ? n.labelMonthNext: n.labelMonthPrev) + '"')
        },
        h = function() {
            var o = n.showMonthsShort ? n.monthsShort: n.monthsFull;
            return n.selectMonths ? i.node("select", i.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(e) {
                    return [o[e], 0, "value=" + e + (l.month == e ? " selected": "") + (l.year == u.year && e < u.month || l.year == d.year && e > d.month ? " disabled": "")]
                }
            }), n.klass.selectMonth, (e ? "": "disabled") + " " + i.ariaAttr({
                controls: t.$node[0].id + "_table"
            }) + ' title="' + n.labelMonthSelect + '"') : i.node("div", o[l.month], n.klass.month)
        },
        g = function() {
            var o = l.year,
            r = n.selectYears === !0 ? 5 : ~~ (n.selectYears / 2);
            if (r) {
                var a = u.year,
                s = d.year,
                c = o - r,
                f = o + r;
                if (a > c && (f += a - c, c = a), f > s) {
                    var p = c - a,
                    h = f - s;
                    c -= p > h ? h: p,
                    f = s
                }
                return i.node("select", i.group({
                    min: c,
                    max: f,
                    i: 1,
                    node: "option",
                    item: function(e) {
                        return [e, 0, "value=" + e + (o == e ? " selected": "")]
                    }
                }), n.klass.selectYear, (e ? "": "disabled") + " " + i.ariaAttr({
                    controls: t.$node[0].id + "_table"
                }) + ' title="' + n.labelYearSelect + '"')
            }
            return i.node("div", o, n.klass.year)
        };
        return i.node("div", (n.selectYears ? g() + h() : h() + g()) + p() + p(1), n.klass.header) + i.node("table", f + i.node("tbody", i.group({
            min: 0,
            max: 5,
            i: 1,
            node: "tr",
            item: function(e) {
                var o = n.firstDay && 0 === t.create([l.year, l.month, 1]).day ? -7 : 0;
                return [i.group({
                    min: 7 * e - l.day + o + 1,
                    max: function() {
                        return this.min + 7 - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(e) {
                        e = t.create([l.year, l.month, e + (n.firstDay ? 1 : 0)]);
                        var o = a && a.pick == e.pick,
                        f = s && s.pick == e.pick,
                        p = c && t.disabled(e) || e.pick < u.pick || e.pick > d.pick,
                        h = i.trigger(t.formats.toString, t, [n.format, e]);
                        return [i.node("div", e.date,
                        function(t) {
                            return t.push(l.month == e.month ? n.klass.infocus: n.klass.outfocus),
                            r.pick == e.pick && t.push(n.klass.now),
                            o && t.push(n.klass.selected),
                            f && t.push(n.klass.highlighted),
                            p && t.push(n.klass.disabled),
                            t.join(" ")
                        } ([n.klass.day]), "data-pick=" + e.pick + " " + i.ariaAttr({
                            role: "gridcell",
                            label: h,
                            selected: !(!o || t.$node.val() !== h) || null,
                            activedescendant: !!f || null,
                            disabled: !!p || null
                        })), "", i.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + i.ariaAttr({
            role: "grid",
            controls: t.$node[0].id,
            readonly: !0
        })) + i.node("div", i.node("button", n.today, n.klass.buttonToday, "type=button data-pick=" + r.pick + (e && !t.disabled(r) ? "": " disabled") + " " + i.ariaAttr({
            controls: t.$node[0].id
        })) + i.node("button", n.clear, n.klass.buttonClear, "type=button data-clear=1" + (e ? "": " disabled") + " " + i.ariaAttr({
            controls: t.$node[0].id
        })) + i.node("button", n.close, n.klass.buttonClose, "type=button data-close=true " + (e ? "": " disabled") + " " + i.ariaAttr({
            controls: t.$node[0].id
        })), n.klass.footer)
    },
    n.defaults = function(e) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: e + "table",
                header: e + "header",
                navPrev: e + "nav--prev",
                navNext: e + "nav--next",
                navDisabled: e + "nav--disabled",
                month: e + "month",
                year: e + "year",
                selectMonth: e + "select--month",
                selectYear: e + "select--year",
                weekdays: e + "weekday",
                day: e + "day",
                disabled: e + "day--disabled",
                selected: e + "day--selected",
                highlighted: e + "day--highlighted",
                now: e + "day--today",
                infocus: e + "day--infocus",
                outfocus: e + "day--outfocus",
                footer: e + "footer",
                buttonClear: e + "button--clear",
                buttonToday: e + "button--today",
                buttonClose: e + "button--close"
            }
        }
    } (e.klasses().picker + "__"),
    e.extend("pickadate", n)
}),
jQuery.extend(jQuery.fn.pickadate.defaults, {
    monthsFull: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    weekdaysFull: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"],
    today: "今日",
    clear: "清除",
    close: "关闭",
    firstDay: 1,
    format: "yyyy 年 mm 月 dd 日",
    formatSubmit: "yyyy/mm/dd"
}),
function(e) {
    var t = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        slideZIndex: 50,
        wrapperClass: "bx-wrapper",
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        ariaLive: !0,
        ariaHidden: !0,
        keyboardEnabled: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        stopAutoOnClick: !1,
        autoHover: !1,
        autoDelay: 0,
        autoSlideForOnePage: !1,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        shrinkItems: !1,
        onSliderLoad: function() {
            return ! 0
        },
        onSlideBefore: function() {
            return ! 0
        },
        onSlideAfter: function() {
            return ! 0
        },
        onSlideNext: function() {
            return ! 0
        },
        onSlidePrev: function() {
            return ! 0
        },
        onSliderResize: function() {
            return ! 0
        }
    };
    e.fn.bxSlider = function(n) {
        if (0 === this.length) return this;
        if (this.length > 1) return this.each(function() {
            e(this).bxSlider(n)
        }),
        this;
        var o = {},
        r = this,
        a = e(window).width(),
        s = e(window).height();
        if (!e(r).data("bxSlider")) {
            var l = function() {
                e(r).data("bxSlider") || (o.settings = e.extend({},
                t, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                    index: o.settings.startSlide
                },
                o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {},
                o.interval = null, o.animProp = "vertical" === o.settings.mode ? "top": "left", o.usingCSS = o.settings.useCSS && "fade" !== o.settings.mode &&
                function() {
                    for (var e = document.createElement("div"), t = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], n = 0; n < t.length; n++) if (void 0 !== e.style[t[n]]) return o.cssPrefix = t[n].replace("Perspective", "").toLowerCase(),
                    o.animProp = "-" + o.cssPrefix + "-transform",
                    !0;
                    return ! 1
                } (), "vertical" === o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function() {
                    e(this).data("origStyle", e(this).attr("style"))
                }), c())
            },
            c = function() {
                var t = o.children.eq(o.settings.startSlide);
                r.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'),
                o.viewport = r.parent(),
                o.settings.ariaLive && !o.settings.ticker && o.viewport.attr("aria-live", "polite"),
                o.loader = e('<div class="bx-loading" />'),
                o.viewport.prepend(o.loader),
                r.css({
                    width: "horizontal" === o.settings.mode ? 1e3 * o.children.length + 215 + "%": "auto",
                    position: "relative"
                }),
                o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"),
                o.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }),
                o.viewport.parent().css({
                    maxWidth: p()
                }),
                o.children.css({
                    float: "horizontal" === o.settings.mode ? "left": "none",
                    listStyle: "none",
                    position: "relative"
                }),
                o.children.css("width", h()),
                "horizontal" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin),
                "vertical" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin),
                "fade" === o.settings.mode && (o.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), o.children.eq(o.settings.startSlide).css({
                    zIndex: o.settings.slideZIndex,
                    display: "block"
                })),
                o.controls.el = e('<div class="bx-controls" />'),
                o.settings.captions && k(),
                o.active.last = o.settings.startSlide === m() - 1,
                o.settings.video && r.fitVids(),
                ("all" === o.settings.preloadImages || o.settings.ticker) && (t = o.children),
                o.settings.ticker ? o.settings.pager = !1 : (o.settings.controls && C(), o.settings.auto && o.settings.autoControls && T(), o.settings.pager && w(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)),
                u(t, d)
            },
            u = function(t, n) {
                var i = t.find('img:not([src=""]), iframe').length,
                o = 0;
                if (0 === i) return void n();
                t.find('img:not([src=""]), iframe').each(function() {
                    e(this).one("load error",
                    function() {++o === i && n()
                    }).each(function() {
                        this.complete && e(this).trigger("load")
                    })
                })
            },
            d = function() {
                if (o.settings.infiniteLoop && "fade" !== o.settings.mode && !o.settings.ticker) {
                    var t = "vertical" === o.settings.mode ? o.settings.minSlides: o.settings.maxSlides,
                    n = o.children.slice(0, t).clone(!0).addClass("bx-clone"),
                    i = o.children.slice( - t).clone(!0).addClass("bx-clone");
                    o.settings.ariaHidden && (n.attr("aria-hidden", !0), i.attr("aria-hidden", !0)),
                    r.append(n).prepend(i)
                }
                o.loader.remove(),
                b(),
                "vertical" === o.settings.mode && (o.settings.adaptiveHeight = !0),
                o.viewport.height(f()),
                r.redrawSlider(),
                o.settings.onSliderLoad.call(r, o.active.index),
                o.initialized = !0,
                o.settings.responsive && e(window).bind("resize", V),
                o.settings.auto && o.settings.autoStart && (m() > 1 || o.settings.autoSlideForOnePage) && q(),
                o.settings.ticker && F(),
                o.settings.pager && P(o.settings.startSlide),
                o.settings.controls && R(),
                o.settings.touchEnabled && !o.settings.ticker && H(),
                o.settings.keyboardEnabled && !o.settings.ticker && e(document).keydown(M)
            },
            f = function() {
                var t = 0,
                n = e();
                if ("vertical" === o.settings.mode || o.settings.adaptiveHeight) if (o.carousel) {
                    var r = 1 === o.settings.moveSlides ? o.active.index: o.active.index * v();
                    for (n = o.children.eq(r), i = 1; i <= o.settings.maxSlides - 1; i++) n = r + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(r + i))
                } else n = o.children.eq(o.active.index);
                else n = o.children;
                return "vertical" === o.settings.mode ? (n.each(function(n) {
                    t += e(this).outerHeight()
                }), o.settings.slideMargin > 0 && (t += o.settings.slideMargin * (o.settings.minSlides - 1))) : t = Math.max.apply(Math, n.map(function() {
                    return e(this).outerHeight(!1)
                }).get()),
                "border-box" === o.viewport.css("box-sizing") ? t += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" === o.viewport.css("box-sizing") && (t += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))),
                t
            },
            p = function() {
                var e = "100%";
                return o.settings.slideWidth > 0 && (e = "horizontal" === o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin: o.settings.slideWidth),
                e
            },
            h = function() {
                var e = o.settings.slideWidth,
                t = o.viewport.width();
                if (0 === o.settings.slideWidth || o.settings.slideWidth > t && !o.carousel || "vertical" === o.settings.mode) e = t;
                else if (o.settings.maxSlides > 1 && "horizontal" === o.settings.mode) {
                    if (t > o.maxThreshold) return e;
                    t < o.minThreshold ? e = (t - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides: o.settings.shrinkItems && (e = Math.floor((t + o.settings.slideMargin) / Math.ceil((t + o.settings.slideMargin) / (e + o.settings.slideMargin)) - o.settings.slideMargin))
                }
                return e
            },
            g = function() {
                var e = 1,
                t = null;
                return "horizontal" === o.settings.mode && o.settings.slideWidth > 0 ? o.viewport.width() < o.minThreshold ? e = o.settings.minSlides: o.viewport.width() > o.maxThreshold ? e = o.settings.maxSlides: (t = o.children.first().width() + o.settings.slideMargin, e = Math.floor((o.viewport.width() + o.settings.slideMargin) / t)) : "vertical" === o.settings.mode && (e = o.settings.minSlides),
                e
            },
            m = function() {
                var e = 0,
                t = 0,
                n = 0;
                if (o.settings.moveSlides > 0) if (o.settings.infiniteLoop) e = Math.ceil(o.children.length / v());
                else for (; t < o.children.length;)++e,
                t = n + g(),
                n += o.settings.moveSlides <= g() ? o.settings.moveSlides: g();
                else e = Math.ceil(o.children.length / g());
                return e
            },
            v = function() {
                return o.settings.moveSlides > 0 && o.settings.moveSlides <= g() ? o.settings.moveSlides: g()
            },
            b = function() {
                var e, t, n;
                o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop ? "horizontal" === o.settings.mode ? (t = o.children.last(), e = t.position(), y( - (e.left - (o.viewport.width() - t.outerWidth())), "reset", 0)) : "vertical" === o.settings.mode && (n = o.children.length - o.settings.minSlides, e = o.children.eq(n).position(), y( - e.top, "reset", 0)) : (e = o.children.eq(o.active.index * v()).position(), o.active.index === m() - 1 && (o.active.last = !0), void 0 !== e && ("horizontal" === o.settings.mode ? y( - e.left, "reset", 0) : "vertical" === o.settings.mode && y( - e.top, "reset", 0)))
            },
            y = function(t, n, i, a) {
                var s, l;
                o.usingCSS ? (l = "vertical" === o.settings.mode ? "translate3d(0, " + t + "px, 0)": "translate3d(" + t + "px, 0, 0)", r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" === n ? (r.css(o.animProp, l), 0 !== i ? r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                function(t) {
                    e(t.target).is(r) && (r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), j())
                }) : j()) : "reset" === n ? r.css(o.animProp, l) : "ticker" === n && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, l), 0 !== i ? r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
                function(t) {
                    e(t.target).is(r) && (r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), y(a.resetValue, "reset", 0), L())
                }) : (y(a.resetValue, "reset", 0), L()))) : (s = {},
                s[o.animProp] = t, "slide" === n ? r.animate(s, i, o.settings.easing,
                function() {
                    j()
                }) : "reset" === n ? r.css(o.animProp, t) : "ticker" === n && r.animate(s, i, "linear",
                function() {
                    y(a.resetValue, "reset", 0),
                    L()
                }))
            },
            x = function() {
                for (var t = "",
                n = "",
                i = m(), r = 0; r < i; r++) n = "",
                o.settings.buildPager && e.isFunction(o.settings.buildPager) || o.settings.pagerCustom ? (n = o.settings.buildPager(r), o.pagerEl.addClass("bx-custom-pager")) : (n = r + 1, o.pagerEl.addClass("bx-default-pager")),
                t += '<div class="bx-pager-item"><a href="" data-slide-index="' + r + '" class="bx-pager-link">' + n + "</a></div>";
                o.pagerEl.html(t)
            },
            w = function() {
                o.settings.pagerCustom ? o.pagerEl = e(o.settings.pagerCustom) : (o.pagerEl = e('<div class="bx-pager" />'), o.settings.pagerSelector ? e(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), x()),
                o.pagerEl.on("click touchend", "a", N)
            },
            C = function() {
                o.controls.next = e('<a class="bx-next" href="">' + o.settings.nextText + "</a>"),
                o.controls.prev = e('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"),
                o.controls.next.bind("click touchend", S),
                o.controls.prev.bind("click touchend", E),
                o.settings.nextSelector && e(o.settings.nextSelector).append(o.controls.next),
                o.settings.prevSelector && e(o.settings.prevSelector).append(o.controls.prev),
                o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = e('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
            },
            T = function() {
                o.controls.start = e('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"),
                o.controls.stop = e('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"),
                o.controls.autoEl = e('<div class="bx-controls-auto" />'),
                o.controls.autoEl.on("click", ".bx-start", A),
                o.controls.autoEl.on("click", ".bx-stop", D),
                o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop),
                o.settings.autoControlsSelector ? e(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),
                O(o.settings.autoStart ? "stop": "start")
            },
            k = function() {
                o.children.each(function(t) {
                    var n = e(this).find("img:first").attr("title");
                    void 0 !== n && ("" + n).length && e(this).append('<div class="bx-caption"><span>' + n + "</span></div>")
                })
            },
            S = function(e) {
                e.preventDefault(),
                o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), r.goToNextSlide())
            },
            E = function(e) {
                e.preventDefault(),
                o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), r.goToPrevSlide())
            },
            A = function(e) {
                r.startAuto(),
                e.preventDefault()
            },
            D = function(e) {
                r.stopAuto(),
                e.preventDefault()
            },
            N = function(t) {
                var n, i;
                t.preventDefault(),
                o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && r.stopAuto(), n = e(t.currentTarget), void 0 !== n.attr("data-slide-index") && (i = parseInt(n.attr("data-slide-index"))) !== o.active.index && r.goToSlide(i))
            },
            P = function(t) {
                var n = o.children.length;
                if ("short" === o.settings.pagerType) return o.settings.maxSlides > 1 && (n = Math.ceil(o.children.length / o.settings.maxSlides)),
                void o.pagerEl.html(t + 1 + o.settings.pagerShortSeparator + n);
                o.pagerEl.find("a").removeClass("active"),
                o.pagerEl.each(function(n, i) {
                    e(i).find("a").eq(t).addClass("active")
                })
            },
            j = function() {
                if (o.settings.infiniteLoop) {
                    var e = "";
                    0 === o.active.index ? e = o.children.eq(0).position() : o.active.index === m() - 1 && o.carousel ? e = o.children.eq((m() - 1) * v()).position() : o.active.index === o.children.length - 1 && (e = o.children.eq(o.children.length - 1).position()),
                    e && ("horizontal" === o.settings.mode ? y( - e.left, "reset", 0) : "vertical" === o.settings.mode && y( - e.top, "reset", 0))
                }
                o.working = !1,
                o.settings.onSlideAfter.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index)
            },
            O = function(e) {
                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[e]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + e + ")").addClass("active"))
            },
            R = function() {
                1 === m() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 === o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index === m() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
            },
            q = function() {
                if (o.settings.autoDelay > 0) {
                    setTimeout(r.startAuto, o.settings.autoDelay)
                } else r.startAuto(),
                e(window).focus(function() {
                    r.startAuto()
                }).blur(function() {
                    r.stopAuto()
                });
                o.settings.autoHover && r.hover(function() {
                    o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                },
                function() {
                    o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                })
            },
            F = function() {
                var t, n, i, a, s, l, c, u, d = 0;
                "next" === o.settings.autoDirection ? r.append(o.children.clone().addClass("bx-clone")) : (r.prepend(o.children.clone().addClass("bx-clone")), t = o.children.first().position(), d = "horizontal" === o.settings.mode ? -t.left: -t.top),
                y(d, "reset", 0),
                o.settings.pager = !1,
                o.settings.controls = !1,
                o.settings.autoControls = !1,
                o.settings.tickerHover && (o.usingCSS ? (a = "horizontal" === o.settings.mode ? 4 : 5, o.viewport.hover(function() {
                    n = r.css("-" + o.cssPrefix + "-transform"),
                    i = parseFloat(n.split(",")[a]),
                    y(i, "reset", 0)
                },
                function() {
                    u = 0,
                    o.children.each(function(t) {
                        u += "horizontal" === o.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                    }),
                    s = o.settings.speed / u,
                    l = "horizontal" === o.settings.mode ? "left": "top",
                    c = s * (u - Math.abs(parseInt(i))),
                    L(c)
                })) : o.viewport.hover(function() {
                    r.stop()
                },
                function() {
                    u = 0,
                    o.children.each(function(t) {
                        u += "horizontal" === o.settings.mode ? e(this).outerWidth(!0) : e(this).outerHeight(!0)
                    }),
                    s = o.settings.speed / u,
                    l = "horizontal" === o.settings.mode ? "left": "top",
                    c = s * (u - Math.abs(parseInt(r.css(l)))),
                    L(c)
                })),
                L()
            },
            L = function(e) {
                var t, n, i, a = e ? e: o.settings.speed,
                s = {
                    left: 0,
                    top: 0
                },
                l = {
                    left: 0,
                    top: 0
                };
                "next" === o.settings.autoDirection ? s = r.find(".bx-clone").first().position() : l = o.children.first().position(),
                t = "horizontal" === o.settings.mode ? -s.left: -s.top,
                n = "horizontal" === o.settings.mode ? -l.left: -l.top,
                i = {
                    resetValue: n
                },
                y(t, "ticker", a, i)
            },
            I = function(t) {
                var n = e(window),
                i = {
                    top: n.scrollTop(),
                    left: n.scrollLeft()
                },
                o = t.offset();
                return i.right = i.left + n.width(),
                i.bottom = i.top + n.height(),
                o.right = o.left + t.outerWidth(),
                o.bottom = o.top + t.outerHeight(),
                !(i.right < o.left || i.left > o.right || i.bottom < o.top || i.top > o.bottom)
            },
            M = function(e) {
                var t = document.activeElement.tagName.toLowerCase();
                if (null == new RegExp(t, ["i"]).exec("input|textarea") && I(r)) {
                    if (39 === e.keyCode) return S(e),
                    !1;
                    if (37 === e.keyCode) return E(e),
                    !1
                }
            },
            H = function() {
                o.touch = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                },
                o.viewport.bind("touchstart MSPointerDown pointerdown", z),
                o.viewport.on("click", ".bxslider a",
                function(e) {
                    o.viewport.hasClass("click-disabled") && (e.preventDefault(), o.viewport.removeClass("click-disabled"))
                })
            },
            z = function(e) {
                if (o.controls.el.addClass("disabled"), e.stopPropagation(), o.working) e.preventDefault(),
                o.controls.el.removeClass("disabled");
                else {
                    o.touch.originalPos = r.position();
                    var t = e.originalEvent,
                    n = void 0 !== t.changedTouches ? t.changedTouches: [t];
                    if ("function" == typeof PointerEvent && void 0 === t.pointerId) return;
                    o.touch.start.x = n[0].pageX,
                    o.touch.start.y = n[0].pageY,
                    o.viewport.get(0).setPointerCapture && (o.pointerId = t.pointerId, o.viewport.get(0).setPointerCapture(o.pointerId)),
                    o.viewport.bind("touchmove MSPointerMove pointermove", _),
                    o.viewport.bind("touchend MSPointerUp pointerup", B),
                    o.viewport.bind("MSPointerCancel pointercancel", W)
                }
            },
            W = function(e) {
                y(o.touch.originalPos.left, "reset", 0),
                o.controls.el.removeClass("disabled"),
                o.viewport.unbind("MSPointerCancel pointercancel", W),
                o.viewport.unbind("touchmove MSPointerMove pointermove", _),
                o.viewport.unbind("touchend MSPointerUp pointerup", B),
                o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
            },
            _ = function(e) {
                var t = e.originalEvent,
                n = void 0 !== t.changedTouches ? t.changedTouches: [t],
                i = Math.abs(n[0].pageX - o.touch.start.x),
                r = Math.abs(n[0].pageY - o.touch.start.y),
                a = 0,
                s = 0;
                e.stopPropagation(),
                3 * i > r && o.settings.preventDefaultSwipeX ? e.preventDefault() : 3 * r > i && o.settings.preventDefaultSwipeY && e.preventDefault(),
                "fade" !== o.settings.mode && o.settings.oneToOneTouch && ("horizontal" === o.settings.mode ? (s = n[0].pageX - o.touch.start.x, a = o.touch.originalPos.left + s) : (s = n[0].pageY - o.touch.start.y, a = o.touch.originalPos.top + s), y(a, "reset", 0))
            },
            B = function(e) {
                o.viewport.unbind("touchmove MSPointerMove pointermove", _),
                o.controls.el.removeClass("disabled");
                var t = e.originalEvent,
                n = void 0 !== t.changedTouches ? t.changedTouches: [t],
                i = 0,
                a = 0;
                o.touch.end.x = n[0].pageX,
                o.touch.end.y = n[0].pageY,
                e.stopPropagation(),
                "fade" === o.settings.mode ? (a = Math.abs(o.touch.start.x - o.touch.end.x)) >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : ("horizontal" === o.settings.mode ? (a = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (a = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 === o.active.index && a > 0 || o.active.last && a < 0) ? y(i, "reset", 200) : Math.abs(a) >= o.settings.swipeThreshold ? (a < 0 ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : y(i, "reset", 200)),
                o.viewport.unbind("touchend MSPointerUp pointerup", B),
                o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId)
            },
            V = function(t) {
                if (o.initialized) if (o.working) window.setTimeout(V, 10);
                else {
                    var n = e(window).width(),
                    i = e(window).height();
                    a === n && s === i || (a = n, s = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
                }
            },
            $ = function(e) {
                var t = g();
                o.settings.ariaHidden && !o.settings.ticker && (o.children.attr("aria-hidden", "true"), o.children.slice(e, e + t).attr("aria-hidden", "false"))
            },
            U = function(e) {
                return e < 0 ? o.settings.infiniteLoop ? m() - 1 : o.active.index: e >= m() ? o.settings.infiniteLoop ? 0 : o.active.index: e
            };
            return r.goToSlide = function(t, n) {
                var i, a, s, l, c = !0,
                u = 0,
                d = {
                    left: 0,
                    top: 0
                },
                p = null;
                if (o.oldIndex = o.active.index, o.active.index = U(t), !o.working && o.active.index !== o.oldIndex) {
                    if (o.working = !0, void 0 !== (c = o.settings.onSlideBefore.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index)) && !c) return o.active.index = o.oldIndex,
                    void(o.working = !1);
                    "next" === n ? o.settings.onSlideNext.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1) : "prev" === n && (o.settings.onSlidePrev.call(r, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (c = !1)),
                    o.active.last = o.active.index >= m() - 1,
                    (o.settings.pager || o.settings.pagerCustom) && P(o.active.index),
                    o.settings.controls && R(),
                    "fade" === o.settings.mode ? (o.settings.adaptiveHeight && o.viewport.height() !== f() && o.viewport.animate({
                        height: f()
                    },
                    o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                        zIndex: 0
                    }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed,
                    function() {
                        e(this).css("zIndex", o.settings.slideZIndex),
                        j()
                    })) : (o.settings.adaptiveHeight && o.viewport.height() !== f() && o.viewport.animate({
                        height: f()
                    },
                    o.settings.adaptiveHeightSpeed), !o.settings.infiniteLoop && o.carousel && o.active.last ? "horizontal" === o.settings.mode ? (p = o.children.eq(o.children.length - 1), d = p.position(), u = o.viewport.width() - p.outerWidth()) : (i = o.children.length - o.settings.minSlides, d = o.children.eq(i).position()) : o.carousel && o.active.last && "prev" === n ? (a = 1 === o.settings.moveSlides ? o.settings.maxSlides - v() : (m() - 1) * v() - (o.children.length - o.settings.maxSlides), p = r.children(".bx-clone").eq(a), d = p.position()) : "next" === n && 0 === o.active.index ? (d = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1) : t >= 0 && (l = t * parseInt(v()), d = o.children.eq(l).position()), void 0 !== d ? (s = "horizontal" === o.settings.mode ? -(d.left - u) : -d.top, y(s, "slide", o.settings.speed)) : o.working = !1),
                    o.settings.ariaHidden && $(o.active.index * v())
                }
            },
            r.goToNextSlide = function() {
                if (o.settings.infiniteLoop || !o.active.last) {
                    var e = parseInt(o.active.index) + 1;
                    r.goToSlide(e, "next")
                }
            },
            r.goToPrevSlide = function() {
                if (o.settings.infiniteLoop || 0 !== o.active.index) {
                    var e = parseInt(o.active.index) - 1;
                    r.goToSlide(e, "prev")
                }
            },
            r.startAuto = function(e) {
                o.interval || (o.interval = setInterval(function() {
                    "next" === o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
                },
                o.settings.pause), o.settings.autoControls && e !== !0 && O("stop"))
            },
            r.stopAuto = function(e) {
                o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && e !== !0 && O("start"))
            },
            r.getCurrentSlide = function() {
                return o.active.index
            },
            r.getCurrentSlideElement = function() {
                return o.children.eq(o.active.index)
            },
            r.getSlideElement = function(e) {
                return o.children.eq(e)
            },
            r.getSlideCount = function() {
                return o.children.length
            },
            r.isWorking = function() {
                return o.working
            },
            r.redrawSlider = function() {
                o.children.add(r.find(".bx-clone")).outerWidth(h()),
                o.viewport.css("height", f()),
                o.settings.ticker || b(),
                o.active.last && (o.active.index = m() - 1),
                o.active.index >= m() && (o.active.last = !0),
                o.settings.pager && !o.settings.pagerCustom && (x(), P(o.active.index)),
                o.settings.ariaHidden && $(o.active.index * v())
            },
            r.destroySlider = function() {
                o.initialized && (o.initialized = !1, e(".bx-clone", this).remove(), o.children.each(function() {
                    void 0 !== e(this).data("origStyle") ? e(this).attr("style", e(this).data("origStyle")) : e(this).removeAttr("style")
                }), void 0 !== e(this).data("origStyle") ? this.attr("style", e(this).data("origStyle")) : e(this).removeAttr("style"), e(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && !o.settings.pagerCustom && o.pagerEl.remove(), e(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && e(window).unbind("resize", V), o.settings.keyboardEnabled && e(document).unbind("keydown", M), e(this).removeData("bxSlider"))
            },
            r.reloadSlider = function(t) {
                void 0 !== t && (n = t),
                r.destroySlider(),
                l(),
                e(r).data("bxSlider", this)
            },
            l(),
            e(r).data("bxSlider", this),
            this
        }
    }
} (jQuery);