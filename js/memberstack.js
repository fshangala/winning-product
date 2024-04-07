(() => {
    var __webpack_modules__ = {
            602: function(e) {
                e.exports = function() {
                    "use strict";

                    function e(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) e[r] = n[r]
                        }
                        return e
                    }
                    return function t(n, r) {
                        function o(t, o, i) {
                            if ("undefined" != typeof document) {
                                "number" == typeof(i = e({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                                var a = "";
                                for (var s in i) i[s] && (a += "; " + s, !0 !== i[s] && (a += "=" + i[s].split(";")[0]));
                                return document.cookie = t + "=" + n.write(o, t) + a
                            }
                        }
                        return Object.create({
                            set: o,
                            get: function(e) {
                                if ("undefined" != typeof document && (!arguments.length || e)) {
                                    for (var t = document.cookie ? document.cookie.split("; ") : [], r = {}, o = 0; o < t.length; o++) {
                                        var i = t[o].split("="),
                                            a = i.slice(1).join("=");
                                        try {
                                            var s = decodeURIComponent(i[0]);
                                            if (r[s] = n.read(a, s), e === s) break
                                        } catch (e) {}
                                    }
                                    return e ? r[e] : r
                                }
                            },
                            remove: function(t, n) {
                                o(t, "", e({}, n, {
                                    expires: -1
                                }))
                            },
                            withAttributes: function(n) {
                                return t(this.converter, e({}, this.attributes, n))
                            },
                            withConverter: function(n) {
                                return t(e({}, this.converter, n), this.attributes)
                            }
                        }, {
                            attributes: {
                                value: Object.freeze(r)
                            },
                            converter: {
                                value: Object.freeze(n)
                            }
                        })
                    }({
                        read: function(e) {
                            return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                        },
                        write: function(e) {
                            return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                        }
                    }, {
                        path: "/"
                    })
                }()
            },
            906: function(e, t, n) {
                "use strict";
                var r = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, o, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    },
                    o = this && this.__spreadArray || function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.onAuthChange = t.unsetPersistedMember = t.updatePersistedMember = t.setPersistedMember = t.getPersistedMember = void 0;
                var i, a = n(521),
                    s = (i = new Map, {
                        subscribe: function(e, t) {
                            if ("function" == typeof t) return i.set(e, t)
                        },
                        unsubscribe: function(e) {
                            return i.delete(e)
                        },
                        notify: function(e) {
                            return o([], r(i.values()), !1).forEach((function(t) {
                                return t(e)
                            }))
                        }
                    });
                t.getPersistedMember = function() {
                    return JSON.parse(null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem("_ms-mem"))
                }, t.setPersistedMember = function(e) {
                    if (e) {
                        var t = JSON.stringify(e);
                        t && (null === localStorage || void 0 === localStorage || localStorage.setItem("_ms-mem", t)), s.notify(e)
                    }
                }, t.updatePersistedMember = function(e) {
                    if (e) {
                        var t = JSON.stringify(e);
                        t && (null === localStorage || void 0 === localStorage || localStorage.setItem("_ms-mem", t))
                    } else null === localStorage || void 0 === localStorage || localStorage.removeItem("_ms-mem"), (0, a.setMemberCookie)("", -1)
                }, t.unsetPersistedMember = function() {
                    null === localStorage || void 0 === localStorage || localStorage.removeItem("_ms-mem"), (0, a.setMemberCookie)("", -1), s.notify(null)
                }, t.onAuthChange = function(e) {
                    var t = Math.floor(1e3 * Math.random());
                    return s.subscribe(t, e), {
                        unsubscribe: function() {
                            return s.unsubscribe(t)
                        }
                    }
                }
            },
            8081: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.endpoints = void 0, t.endpoints = {
                    API: ""
                }
            },
            345: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = r(n(4839));
                t.default = {
                    init: o.default.init
                }
            },
            6362: function(e, t) {
                "use strict";
                var n, r = this && this.__extends || (n = function(e, t) {
                        return n = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, n(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function r() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                    }),
                    o = this && this.__assign || function() {
                        return o = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, o.apply(this, arguments)
                    },
                    i = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    a = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    s = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, o, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    },
                    c = this && this.__spreadArray || function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    },
                    u = this && this.__values || function(e) {
                        var t = "function" == typeof Symbol && Symbol.iterator,
                            n = t && e[t],
                            r = 0;
                        if (n) return n.call(e);
                        if (e && "number" == typeof e.length) return {
                            next: function() {
                                return e && r >= e.length && (e = void 0), {
                                    value: e && e[r++],
                                    done: !e
                                }
                            }
                        };
                        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                    };

                function l() {}
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var d, f = function(e) {
                    return e
                };

                function p(e, t) {
                    for (var n in t) e[n] = t[n];
                    return e
                }

                function m(e) {
                    return e()
                }

                function h() {
                    return Object.create(null)
                }

                function v(e) {
                    e.forEach(m)
                }

                function g(e) {
                    return "function" == typeof e
                }

                function w(e, t) {
                    return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
                }

                function y(e, t) {
                    return d || (d = document.createElement("a")), d.href = t, e === d.href
                }

                function b(e, t, n) {
                    e.$$.on_destroy.push(function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        if (null == e) return l;
                        var r = e.subscribe.apply(e, c([], s(t), !1));
                        return r.unsubscribe ? function() {
                            return r.unsubscribe()
                        } : r
                    }(t, n))
                }

                function _(e, t, n, r) {
                    return e[1] && r ? p(n.ctx.slice(), e[1](r(t))) : n.ctx
                }

                function S(e) {
                    var t = {};
                    for (var n in e) "$" !== n[0] && (t[n] = e[n]);
                    return t
                }

                function x(e, t) {
                    var n = {};
                    for (var r in t = new Set(t), e) t.has(r) || "$" === r[0] || (n[r] = e[r]);
                    return n
                }
                var $ = "undefined" != typeof window,
                    E = $ ? function() {
                        return window.performance.now()
                    } : function() {
                        return Date.now()
                    },
                    A = $ ? function(e) {
                        return requestAnimationFrame(e)
                    } : l,
                    P = new Set;

                function k(e) {
                    P.forEach((function(t) {
                        t.c(e) || (P.delete(t), t.f())
                    })), 0 !== P.size && A(k)
                }

                function C(e, t) {
                    e.appendChild(t)
                }

                function M(e, t, n) {
                    var r = L(e);
                    if (!r.getElementById(t)) {
                        var o = I("style");
                        o.id = t, o.textContent = n, T(r, o)
                    }
                }

                function L(e) {
                    if (!e) return document;
                    var t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
                    return t && t.host ? t : e.ownerDocument
                }

                function H(e) {
                    var t = I("style");
                    return T(L(e), t), t.sheet
                }

                function T(e, t) {
                    C(e.head || e, t)
                }

                function R(e, t, n) {
                    e.insertBefore(t, n || null)
                }

                function O(e) {
                    e.parentNode.removeChild(e)
                }

                function D(e, t) {
                    for (var n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
                }

                function I(e) {
                    return document.createElement(e)
                }

                function U(e) {
                    return document.createElementNS("http://www.w3.org/2000/svg", e)
                }

                function K(e) {
                    return document.createTextNode(e)
                }

                function W() {
                    return K(" ")
                }

                function N() {
                    return K("")
                }

                function B(e, t, n, r) {
                    return e.addEventListener(t, n, r),
                        function() {
                            return e.removeEventListener(t, n, r)
                        }
                }

                function J(e) {
                    return function(t) {
                        return t.preventDefault(), e.call(this, t)
                    }
                }

                function j(e) {
                    return function(t) {
                        return t.stopPropagation(), e.call(this, t)
                    }
                }

                function F(e, t, n) {
                    null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
                }

                function V(e, t) {
                    t = "" + t, e.wholeText !== t && (e.data = t)
                }

                function G(e, t) {
                    e.value = null == t ? "" : t
                }

                function z(e, t, n, r) {
                    null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "")
                }

                function q(e, t, n) {
                    e.classList[n ? "add" : "remove"](t)
                }
                var Y, Z = new Map,
                    X = 0;

                function Q(e, t, n, r, o, i, a, s) {
                    void 0 === s && (s = 0);
                    for (var c = 16.666 / r, u = "{\n", l = 0; l <= 1; l += c) {
                        var d = t + (n - t) * i(l);
                        u += 100 * l + "%{".concat(a(d, 1 - d), "}\n")
                    }
                    var f = u + "100% {".concat(a(n, 1 - n), "}\n}"),
                        p = "__svelte_".concat(function(e) {
                            for (var t = 5381, n = e.length; n--;) t = (t << 5) - t ^ e.charCodeAt(n);
                            return t >>> 0
                        }(f), "_").concat(s),
                        m = L(e),
                        h = Z.get(m) || function(e, t) {
                            var n = {
                                stylesheet: H(t),
                                rules: {}
                            };
                            return Z.set(e, n), n
                        }(m, e),
                        v = h.stylesheet,
                        g = h.rules;
                    g[p] || (g[p] = !0, v.insertRule("@keyframes ".concat(p, " ").concat(f), v.cssRules.length));
                    var w = e.style.animation || "";
                    return e.style.animation = "".concat(w ? "".concat(w, ", ") : "").concat(p, " ").concat(r, "ms linear ").concat(o, "ms 1 both"), X += 1, p
                }

                function ee(e) {
                    Y = e
                }

                function te() {
                    if (!Y) throw new Error("Function called outside component initialization");
                    return Y
                }

                function ne(e) {
                    te().$$.on_mount.push(e)
                }

                function re(e) {
                    te().$$.on_destroy.push(e)
                }
                var oe = [],
                    ie = [],
                    ae = [],
                    se = [],
                    ce = Promise.resolve(),
                    ue = !1;

                function le(e) {
                    ae.push(e)
                }

                function de(e) {
                    se.push(e)
                }
                var fe, pe = new Set,
                    me = 0;

                function he() {
                    var e = Y;
                    do {
                        for (; me < oe.length;) {
                            var t = oe[me];
                            me++, ee(t), ve(t.$$)
                        }
                        for (ee(null), oe.length = 0, me = 0; ie.length;) ie.pop()();
                        for (var n = 0; n < ae.length; n += 1) {
                            var r = ae[n];
                            pe.has(r) || (pe.add(r), r())
                        }
                        ae.length = 0
                    } while (oe.length);
                    for (; se.length;) se.pop()();
                    ue = !1, pe.clear(), ee(e)
                }

                function ve(e) {
                    if (null !== e.fragment) {
                        e.update(), v(e.before_update);
                        var t = e.dirty;
                        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(le)
                    }
                }

                function ge(e, t, n) {
                    var r, o, i, a, s, c, u;
                    e.dispatchEvent((r = "".concat(t ? "intro" : "outro").concat(n), a = void 0 !== (i = (o = {}).bubbles) && i, c = void 0 !== (s = o.cancelable) && s, (u = document.createEvent("CustomEvent")).initCustomEvent(r, a, c, undefined), u))
                }
                var we, ye = new Set;

                function be() {
                    we = {
                        r: 0,
                        c: [],
                        p: we
                    }
                }

                function _e() {
                    we.r || v(we.c), we = we.p
                }

                function Se(e, t) {
                    e && e.i && (ye.delete(e), e.i(t))
                }

                function xe(e, t, n, r) {
                    if (e && e.o) {
                        if (ye.has(e)) return;
                        ye.add(e), we.c.push((function() {
                            ye.delete(e), r && (n && e.d(1), r())
                        })), e.o(t)
                    }
                }
                var $e = {
                    duration: 0
                };

                function Ee(e, t, n, r) {
                    var o = t(e, n),
                        i = r ? 0 : 1,
                        a = null,
                        s = null,
                        c = null;

                    function u() {
                        c && function(e, t) {
                            var n = (e.style.animation || "").split(", "),
                                r = n.filter(t ? function(e) {
                                    return e.indexOf(t) < 0
                                } : function(e) {
                                    return -1 === e.indexOf("__svelte")
                                }),
                                o = n.length - r.length;
                            o && (e.style.animation = r.join(", "), (X -= o) || A((function() {
                                X || (Z.forEach((function(e) {
                                    for (var t = e.stylesheet, n = t.cssRules.length; n--;) t.deleteRule(n);
                                    e.rules = {}
                                })), Z.clear())
                            })))
                        }(e, c)
                    }

                    function d(e, t) {
                        var n = e.b - i;
                        return t *= Math.abs(n), {
                            a: i,
                            b: e.b,
                            d: n,
                            duration: t,
                            start: e.start,
                            end: e.start + t,
                            group: e.group
                        }
                    }

                    function p(t) {
                        var n, r = o || $e,
                            p = r.delay,
                            m = void 0 === p ? 0 : p,
                            h = r.duration,
                            g = void 0 === h ? 300 : h,
                            w = r.easing,
                            y = void 0 === w ? f : w,
                            b = r.tick,
                            _ = void 0 === b ? l : b,
                            S = r.css,
                            x = {
                                start: E() + m,
                                b: t
                            };
                        t || (x.group = we, we.r += 1), a || s ? s = x : (S && (u(), c = Q(e, i, t, g, m, y, S)), t && _(0, 1), a = d(x, g), le((function() {
                            return ge(e, t, "start")
                        })), n = function(t) {
                            if (s && t > s.start && (a = d(s, g), s = null, ge(e, a.b, "start"), S && (u(), c = Q(e, i, a.b, a.duration, 0, y, o.css))), a)
                                if (t >= a.end) _(i = a.b, 1 - i), ge(e, a.b, "end"), s || (a.b ? u() : --a.group.r || v(a.group.c)), a = null;
                                else if (t >= a.start) {
                                var n = t - a.start;
                                i = a.a + a.d * y(n / a.duration), _(i, 1 - i)
                            }
                            return !(!a && !s)
                        }, 0 === P.size && A(k), new Promise((function(e) {
                            P.add({
                                c: n,
                                f: e
                            })
                        })))
                    }
                    return {
                        run: function(e) {
                            g(o) ? (fe || (fe = Promise.resolve()).then((function() {
                                fe = null
                            })), fe).then((function() {
                                o = o(), p(e)
                            })) : p(e)
                        },
                        end: function() {
                            u(), a = s = null
                        }
                    }
                }

                function Ae(e, t) {
                    e.d(1), t.delete(e.key)
                }

                function Pe(e, t, n, r, o, i, a, s, c, u, l, d) {
                    for (var f = e.length, p = i.length, m = f, h = {}; m--;) h[e[m].key] = m;
                    var v = [],
                        g = new Map,
                        w = new Map;
                    for (m = p; m--;) {
                        var y = d(o, i, m),
                            b = n(y),
                            _ = a.get(b);
                        _ ? r && _.p(y, t) : (_ = u(b, y)).c(), g.set(b, v[m] = _), b in h && w.set(b, Math.abs(m - h[b]))
                    }
                    var S = new Set,
                        x = new Set;

                    function $(e) {
                        Se(e, 1), e.m(s, l), a.set(e.key, e), l = e.first, p--
                    }
                    for (; f && p;) {
                        var E = v[p - 1],
                            A = e[f - 1],
                            P = E.key,
                            k = A.key;
                        E === A ? (l = E.first, f--, p--) : g.has(k) ? !a.has(P) || S.has(P) ? $(E) : x.has(k) ? f-- : w.get(P) > w.get(k) ? (x.add(P), $(E)) : (S.add(k), f--) : (c(A, a), f--)
                    }
                    for (; f--;) A = e[f], g.has(A.key) || c(A, a);
                    for (; p;) $(v[p - 1]);
                    return v
                }

                function ke(e, t, n) {
                    var r = e.$$.props[t];
                    void 0 !== r && (e.$$.bound[r] = n, n(e.$$.ctx[r]))
                }

                function Ce(e) {
                    e && e.c()
                }

                function Me(e, t, n, r) {
                    var o = e.$$,
                        i = o.fragment,
                        a = o.on_mount,
                        u = o.on_destroy,
                        l = o.after_update;
                    i && i.m(t, n), r || le((function() {
                        var t = a.map(m).filter(g);
                        u ? u.push.apply(u, c([], s(t), !1)) : v(t), e.$$.on_mount = []
                    })), l.forEach(le)
                }

                function Le(e, t) {
                    var n = e.$$;
                    null !== n.fragment && (v(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
                }

                function He(e, t) {
                    -1 === e.$$.dirty[0] && (oe.push(e), ue || (ue = !0, ce.then(he)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
                }

                function Te(e, t, n, r, o, i, a, s) {
                    void 0 === s && (s = [-1]);
                    var c = Y;
                    ee(e);
                    var u = e.$$ = {
                        fragment: null,
                        ctx: null,
                        props: i,
                        update: l,
                        not_equal: o,
                        bound: h(),
                        on_mount: [],
                        on_destroy: [],
                        on_disconnect: [],
                        before_update: [],
                        after_update: [],
                        context: new Map(t.context || (c ? c.$$.context : [])),
                        callbacks: h(),
                        dirty: s,
                        skip_bound: !1,
                        root: t.target || c.$$.root
                    };
                    a && a(u.root);
                    var d = !1;
                    if (u.ctx = n ? n(e, t.props || {}, (function(t, n) {
                            for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                            var a = r.length ? r[0] : n;
                            return u.ctx && o(u.ctx[t], u.ctx[t] = a) && (!u.skip_bound && u.bound[t] && u.bound[t](a), d && He(e, t)), n
                        })) : [], u.update(), d = !0, v(u.before_update), u.fragment = !!r && r(u.ctx), t.target) {
                        if (t.hydrate) {
                            var f = function(e) {
                                return Array.from(e.childNodes)
                            }(t.target);
                            u.fragment && u.fragment.l(f), f.forEach(O)
                        } else u.fragment && u.fragment.c();
                        t.intro && Se(e.$$.fragment), Me(e, t.target, t.anchor, t.customElement), he()
                    }
                    ee(c)
                }
                var Re = function() {
                        function e() {}
                        return e.prototype.$destroy = function() {
                            Le(this, 1), this.$destroy = l
                        }, e.prototype.$on = function(e, t) {
                            var n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
                            return n.push(t),
                                function() {
                                    var e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                                }
                        }, e.prototype.$set = function(e) {
                            var t;
                            this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
                        }, e
                    }(),
                    Oe = [];

                function De(e, t) {
                    var n;
                    void 0 === t && (t = l);
                    var r = new Set;

                    function o(t) {
                        var o, i;
                        if (w(e, t) && (e = t, n)) {
                            var a = !Oe.length;
                            try {
                                for (var s = u(r), c = s.next(); !c.done; c = s.next()) {
                                    var l = c.value;
                                    l[1](), Oe.push(l, e)
                                }
                            } catch (e) {
                                o = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (i = s.return) && i.call(s)
                                } finally {
                                    if (o) throw o.error
                                }
                            }
                            if (a) {
                                for (var d = 0; d < Oe.length; d += 2) Oe[d][0](Oe[d + 1]);
                                Oe.length = 0
                            }
                        }
                    }
                    return {
                        set: o,
                        update: function(t) {
                            o(t(e))
                        },
                        subscribe: function(i, a) {
                            void 0 === a && (a = l);
                            var s = [i, a];
                            return r.add(s), 1 === r.size && (n = t(o) || l), i(e),
                                function() {
                                    r.delete(s), 0 === r.size && (n(), n = null)
                                }
                        }
                    }
                }
                var Ie = De({
                        initialValue: !0,
                        customFields: [],
                        isPaid: !1,
                        branding: {
                            logo: "",
                            colors: {
                                lightMode: {}
                            }
                        }
                    }),
                    Ue = De({
                        text: {}
                    }),
                    Ke = function(e) {
                        return {
                            matches: 1 & e
                        }
                    },
                    We = function(e) {
                        return {
                            matches: e[0]
                        }
                    };

                function Ne(e) {
                    var t, n = e[4].default,
                        r = function(e, t, n, r) {
                            if (e) {
                                var o = _(e, t, n, r);
                                return e[0](o)
                            }
                        }(n, e, e[3], We);
                    return {
                        c: function() {
                            r && r.c()
                        },
                        m: function(e, n) {
                            r && r.m(e, n), t = !0
                        },
                        p: function(e, o) {
                            var i = s(o, 1)[0];
                            r && r.p && (!t || 9 & i) && function(e, t, n, r, o, i) {
                                if (o) {
                                    var a = _(t, n, r, i);
                                    e.p(a, o)
                                }
                            }(r, n, e, e[3], t ? function(e, t, n, r) {
                                if (e[2] && r) {
                                    var o = e[2](r(n));
                                    if (void 0 === t.dirty) return o;
                                    if ("object" == typeof o) {
                                        for (var i = [], a = Math.max(t.dirty.length, o.length), s = 0; s < a; s += 1) i[s] = t.dirty[s] | o[s];
                                        return i
                                    }
                                    return t.dirty | o
                                }
                                return t.dirty
                            }(n, e[3], i, Ke) : function(e) {
                                if (e.ctx.length > 32) {
                                    for (var t = [], n = e.ctx.length / 32, r = 0; r < n; r++) t[r] = -1;
                                    return t
                                }
                                return -1
                            }(e[3]), We)
                        },
                        i: function(e) {
                            t || (Se(r, e), t = !0)
                        },
                        o: function(e) {
                            xe(r, e), t = !1
                        },
                        d: function(e) {
                            r && r.d(e)
                        }
                    }
                }

                function Be(e, t, n) {
                    var r, o, i = t.$$slots,
                        a = void 0 === i ? {} : i,
                        s = t.$$scope,
                        c = t.query,
                        u = !1,
                        l = !1;

                    function d() {
                        r && o && r.removeListener(o)
                    }
                    return ne((function() {
                        return n(2, u = !0),
                            function() {
                                d()
                            }
                    })), e.$$set = function(e) {
                        "query" in e && n(1, c = e.query), "$$scope" in e && n(3, s = e.$$scope)
                    }, e.$$.update = function() {
                        6 & e.$$.dirty && u && (d(), function(e) {
                            r = window.matchMedia(e), o = function(e) {
                                return n(0, l = e.matches)
                            }, r.addListener(o), n(0, l = r.matches)
                        }(c))
                    }, [l, c, u, s, a]
                }
                var Je = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Be, Ne, w, {
                            query: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function je(e) {
                    var t, n, r;
                    return {
                        c: function() {
                            t = U("svg"), n = U("path"), F(r = U("animateTransform"), "attributeName", "transform"), F(r, "attributeType", "xml"), F(r, "dur", "0.6s"), F(r, "from", "0 25 25"), F(r, "repeatCount", "indefinite"), F(r, "to", "360 25 25"), F(r, "type", "rotate"), F(n, "fill", "currentColor"), F(n, "d", "m43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"), F(t, "width", "40px"), F(t, "height", "40px"), F(t, "enable-background", "new 0 0 50 50"), z(t, "z-index", "1000000"), F(t, "version", "1.1"), F(t, "viewBox", "0 0 50 50"), F(t, "xml:space", "preserve"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, o) {
                            R(e, t, o), C(t, n), C(n, r)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var Fe = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, je, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function Ve(e) {
                    var t, n, r;
                    return n = new Fe({}), {
                        c: function() {
                            t = I("div"), Ce(n.$$.fragment), F(t, "class", "ms__loader")
                        },
                        m: function(e, o) {
                            R(e, t, o), Me(n, t, null), r = !0
                        },
                        p: l,
                        i: function(e) {
                            r || (Se(n.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n)
                        }
                    }
                }
                var Ge = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, Ve, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function ze(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "shape-rendering", "geometricPrecision"), F(n, "d", "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"), F(t, "fill", "none"), z(t, "width", "100%"), F(t, "viewBox", "0 0 14 14"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var qe = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, ze, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function Ye(e) {
                    var t, n, r, o, i, a;
                    return r = new qe({}), {
                        c: function() {
                            t = I("div"), n = I("button"), Ce(r.$$.fragment), F(t, "class", "ms-modal__close")
                        },
                        m: function(s, c) {
                            R(s, t, c), C(t, n), Me(r, n, null), o = !0, i || (a = B(n, "click", (function() {
                                g(e[0]) && e[0].apply(this, arguments)
                            })), i = !0)
                        },
                        p: function(t, n) {
                            s(n, 1)[0], e = t
                        },
                        i: function(e) {
                            o || (Se(r.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(r.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            e && O(t), Le(r), i = !1, a()
                        }
                    }
                }

                function Ze(e, t, n) {
                    var r = t.closeModal;
                    return e.$$set = function(e) {
                        "closeModal" in e && n(0, r = e.closeModal)
                    }, [r]
                }
                var Xe = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Ze, Ye, w, {
                            closeModal: 0
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Qe(e) {
                    var t, n, r, o, i, a, s;
                    return {
                        c: function() {
                            t = U("svg"), n = U("path"), r = U("path"), o = U("path"), i = U("path"), a = U("path"), s = U("path"), F(n, "d", "m259.078 190.582 16.797-39.611c7.315-20.421 26.982-34.665 49.897-34.665 13.187 0 25.344 4.817 34.6 12.818l32.818 73.118c9.656 21.709-.097 47.144-21.786 56.809-21.688 9.666-47.097-.098-56.753-21.807l-38.573-86.723-17 40.088v-.027Z"), F(n, "fill", "#2AA8FF"), F(r, "d", "m111.31 169.64 8.002-18.679c-7.22-20.585-26.82-35.345-49.866-35.345-12.678 0-24.901 4.865-34.007 12.314 6.6063-2.796 14.34-3.575 21.988-3.575 26.999 0 49.435 19.445 53.884 45.285z"), F(o, "d", "m111.31 169.64-28.66 68.126c-9.2762 21.875-34.511 32.081-56.365 22.795-21.853-9.285-32.049-34.545-22.773-56.42l31.925-76.211c6.7448-2.988 14.142-3.575 21.988-3.575 27.086 0 49.537 19.321 53.884 45.285z"), F(o, "fill", "#393939"), F(i, "d", "m197.57 115.46-39.756-89.506c-7.148-16.07-22.929-25.595-39.443-25.537-16.786-0.058576-32.766 9.7896-39.736 26.227l-43.199 101.28c9.1064-7.45 21.329-12.314 34.008-12.314 23.046 0 42.646 14.76 49.866 35.345l0.093 0.337c5.784 1.658 11.893 2.546 18.21 2.546 26.578 0 49.487-15.722 59.958-38.382z"), F(i, "fill", "#017ACE"), F(a, "d", "m197.57 115.46c-10.071 21.796-31.651 37.172-56.934 38.314-1.052 0.05-2.11 0.075-3.175 0.075-6.316 0-12.425-0.888-18.21-2.546l38.425 86.387c3.996 8.986 10.692 15.926 18.706 20.288 1.908 1.196 3.935 2.257 6.073 3.165 21.853 9.286 47.088-0.92 56.364-22.795l37.055-87.381c7.315-20.421 26.982-34.665 49.896-34.665 13.188 0 25.345 4.817 34.601 12.818l-45.994-103.17c-7.148-16.07-22.929-25.595-39.442-25.537-16.786-0.058576-32.767 9.7896-39.737 26.227l-37.628 88.816z"), F(a, "fill", "#AEDEFF"), F(s, "d", "m325.77 116.31c-22.915 0-42.379 13.795-49.694 34.216l8.919 20.052c5.873-25.763 28.931-44.989 56.481-44.989 6.67 0 12.931 1.465 18.894 3.539-9.256-8-21.413-12.818-34.6-12.818z"), F(s, "fill", "#2D91D7"), z(t, "width", "100%"), F(t, "viewBox", "0 0 397 265"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, c) {
                            R(e, t, c), C(t, n), C(t, r), C(t, o), C(t, i), C(t, a), C(t, s)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var et = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, Qe, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function tt(e) {
                    var t, n;
                    return t = new et({}), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        p: l,
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function nt(e) {
                    var t, n, r;
                    return {
                        c: function() {
                            y((t = I("img")).src, n = e[0].branding.logo) || F(t, "src", n), F(t, "alt", r = e[0].name), F(t, "data-cy", "logo")
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        p: function(e, o) {
                            1 & o && !y(t.src, n = e[0].branding.logo) && F(t, "src", n), 1 & o && r !== (r = e[0].name) && F(t, "alt", r)
                        },
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function rt(e) {
                    var t, n, r, o, i = [nt, tt],
                        a = [];

                    function c(e, t) {
                        return e[0].branding.logo ? 0 : 1
                    }
                    return n = c(e), r = a[n] = i[n](e), {
                        c: function() {
                            t = I("figure"), r.c(), F(t, "class", "ms-modal__figure")
                        },
                        m: function(e, r) {
                            R(e, t, r), a[n].m(t, null), o = !0
                        },
                        p: function(e, o) {
                            var u = s(o, 1)[0],
                                l = n;
                            (n = c(e)) === l ? a[n].p(e, u) : (be(), xe(a[l], 1, 1, (function() {
                                a[l] = null
                            })), _e(), (r = a[n]) ? r.p(e, u) : (r = a[n] = i[n](e)).c(), Se(r, 1), r.m(t, null))
                        },
                        i: function(e) {
                            o || (Se(r), o = !0)
                        },
                        o: function(e) {
                            xe(r), o = !1
                        },
                        d: function(e) {
                            e && O(t), a[n].d()
                        }
                    }
                }

                function ot(e, t, n) {
                    var r = {};
                    return Ie.subscribe((function(e) {
                        n(0, r = e)
                    })), [r]
                }
                var it = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, ot, rt, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function at(e) {
                    var t, n, r;
                    return n = new Fe({}), {
                        c: function() {
                            t = I("button"), Ce(n.$$.fragment), F(t, "class", "ms-form__button"), F(t, "type", "button"), z(t, "background-color", e[2]), t.disabled = !0
                        },
                        m: function(e, o) {
                            R(e, t, o), Me(n, t, null), r = !0
                        },
                        p: function(e, n) {
                            (!r || 4 & n) && z(t, "background-color", e[2])
                        },
                        i: function(e) {
                            r || (Se(n.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n)
                        }
                    }
                }

                function st(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = I("button"), n = K(e[0]), F(t, "class", "ms-form__button"), F(t, "type", "submit"), z(t, "background-color", e[2])
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: function(e, r) {
                            1 & r && V(n, e[0]), 4 & r && z(t, "background-color", e[2])
                        },
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function ct(e) {
                    var t, n, r, o, i = [st, at],
                        a = [];

                    function c(e, t) {
                        return e[1] ? 1 : 0
                    }
                    return n = c(e), r = a[n] = i[n](e), {
                        c: function() {
                            t = I("div"), r.c()
                        },
                        m: function(e, r) {
                            R(e, t, r), a[n].m(t, null), o = !0
                        },
                        p: function(e, o) {
                            var u = s(o, 1)[0],
                                l = n;
                            (n = c(e)) === l ? a[n].p(e, u) : (be(), xe(a[l], 1, 1, (function() {
                                a[l] = null
                            })), _e(), (r = a[n]) ? r.p(e, u) : (r = a[n] = i[n](e)).c(), Se(r, 1), r.m(t, null))
                        },
                        i: function(e) {
                            o || (Se(r), o = !0)
                        },
                        o: function(e) {
                            xe(r), o = !1
                        },
                        d: function(e) {
                            e && O(t), a[n].d()
                        }
                    }
                }

                function ut(e, t, n) {
                    var r;
                    b(e, Ie, (function(e) {
                        return n(3, r = e)
                    }));
                    var o = t.buttonText,
                        i = void 0 === o ? "Submit" : o,
                        a = t.isLoading,
                        s = void 0 !== a && a,
                        c = "rgb(41, 98, 255)";
                    return r.branding.colors.lightMode.primaryButton && (c = r.branding.colors.lightMode.primaryButton), e.$$set = function(e) {
                        "buttonText" in e && n(0, i = e.buttonText), "isLoading" in e && n(1, s = e.isLoading)
                    }, [i, s, c]
                }
                var lt = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, ut, ct, w, {
                            buttonText: 0,
                            isLoading: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function dt(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1 15h-2v-2h2v2zm0-4h-2v-6h2v6z"), F(t, "fill", "none"), F(t, "viewBox", "0 0 20 20"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var ft = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, dt, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function pt(e) {
                    var t, n, r, o, i;
                    return n = new ft({}), {
                        c: function() {
                            t = I("div"), Ce(n.$$.fragment), r = W(), o = K(e[4]), F(t, "class", "ms-form__error")
                        },
                        m: function(e, a) {
                            R(e, t, a), Me(n, t, null), C(t, r), C(t, o), i = !0
                        },
                        p: l,
                        i: function(e) {
                            i || (Se(n.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n)
                        }
                    }
                }

                function mt(e) {
                    var t, n, r, o, i, a, c, u, l = e[2] && pt(e);
                    return {
                        c: function() {
                            t = I("div"), (n = I("label")).textContent = "".concat(e[3]), r = W(), o = I("input"), i = W(), l && l.c(), F(n, "class", "ms-form__label"), F(n, "for", "eml"), F(o, "class", "ms-form__input"), F(o, "type", "email"), F(o, "placeholder", e[1]), F(o, "name", "eml"), o.required = !0, F(t, "class", "ms-form__group")
                        },
                        m: function(s, d) {
                            R(s, t, d), C(t, n), C(t, r), C(t, o), G(o, e[0]), C(t, i), l && l.m(t, null), a = !0, c || (u = [B(o, "change", e[5]), B(o, "input", e[7])], c = !0)
                        },
                        p: function(e, n) {
                            var r = s(n, 1)[0];
                            (!a || 2 & r) && F(o, "placeholder", e[1]), 1 & r && o.value !== e[0] && G(o, e[0]), e[2] ? l ? (l.p(e, r), 4 & r && Se(l, 1)) : ((l = pt(e)).c(), Se(l, 1), l.m(t, null)) : l && (be(), xe(l, 1, 1, (function() {
                                l = null
                            })), _e())
                        },
                        i: function(e) {
                            a || (Se(l), a = !0)
                        },
                        o: function(e) {
                            xe(l), a = !1
                        },
                        d: function(e) {
                            e && O(t), l && l.d(), c = !1, v(u)
                        }
                    }
                }

                function ht(e, t, n) {
                    var r;
                    b(e, Ue, (function(e) {
                        return n(8, r = e)
                    }));
                    var o = t.emailInputValid,
                        i = void 0 !== o && o,
                        a = t.emailValue,
                        s = t.placeholder,
                        c = void 0 === s ? "example@domain.com" : s,
                        u = r.text,
                        l = u.email_address || "Email Address",
                        d = !1,
                        f = u.email_error_message || "Please enter a valid email address";
                    return e.$$set = function(e) {
                        "emailInputValid" in e && n(6, i = e.emailInputValid), "emailValue" in e && n(0, a = e.emailValue), "placeholder" in e && n(1, c = e.placeholder)
                    }, [a, c, d, l, f, function(e) {
                        var t = e.target;
                        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(t.value) && e.target.value.length > 0 ? (n(6, i = !1), n(2, d = !0)) : (n(6, i = !0), n(2, d = !1))
                    }, i, function() {
                        a = this.value, n(0, a)
                    }]
                }
                var vt = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, ht, mt, w, {
                            emailInputValid: 6,
                            emailValue: 0,
                            placeholder: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function gt(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "m11 0.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"), F(t, "class", "ms-form__eye"), F(t, "fill", "none"), F(t, "viewBox", "0 0 22 16"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var wt = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, gt, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function yt(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "m11 4c2.76 0 5 2.24 5 5 0 0.65-0.13 1.26-0.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74 0.25-3.98 0.7l2.16 2.16c0.57-0.23 1.18-0.36 1.83-0.36zm-10-2.73 2.74 2.74c-1.66 1.29-2.96 3.01-3.74 4.99 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-0.3 4.38-0.84l0.42 0.42 2.93 2.92 1.27-1.27-17.73-17.73-1.27 1.27zm5.53 5.53 1.55 1.55c-0.05 0.21-0.08 0.43-0.08 0.65 0 1.66 1.34 3 3 3 0.22 0 0.44-0.03 0.65-0.08l1.55 1.55c-0.67 0.33-1.41 0.53-2.2 0.53-2.76 0-5-2.24-5-5 0-0.79 0.2-1.53 0.53-2.2zm4.31-0.78 3.15 3.15 0.02-0.16c0-1.66-1.34-3-3-3l-0.17 0.01z"), F(t, "class", "ms-form__eye-slash"), F(t, "fill", "none"), F(t, "viewBox", "0 0 22 19"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var bt = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, yt, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function _t(e) {
                    var t, n, r, o;
                    return {
                        c: function() {
                            t = I("div"), (n = I("button")).textContent = "".concat(e[8].forgot_password || "Forgot Password?"), F(n, "data-cy", "forgot-password-btn"), F(n, "class", "ms-form__button ms-form__button--text"), F(n, "tabindex", "-1"), F(n, "type", "button"), F(t, "class", "ms-form__label ms-form__label--right")
                        },
                        m: function(i, a) {
                            R(i, t, a), C(t, n), r || (o = B(n, "click", e[14]), r = !0)
                        },
                        p: l,
                        d: function(e) {
                            e && O(t), r = !1, o()
                        }
                    }
                }

                function St(e) {
                    var t, n;
                    return t = new bt({}), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function xt(e) {
                    var t, n;
                    return t = new wt({}), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function $t(e) {
                    var t, n, r, o, i;
                    return n = new ft({}), {
                        c: function() {
                            t = I("div"), Ce(n.$$.fragment), r = W(), o = K(e[9]), F(t, "class", "ms-form__error")
                        },
                        m: function(e, a) {
                            R(e, t, a), Me(n, t, null), C(t, r), C(t, o), i = !0
                        },
                        p: l,
                        i: function(e) {
                            i || (Se(n.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n)
                        }
                    }
                }

                function Et(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b = e[2] && _t(e),
                        _ = [xt, St],
                        S = [];

                    function x(e, t) {
                        return e[5] ? 1 : 0
                    }
                    p = x(e), m = S[p] = _[p](e);
                    var $ = e[6] && $t(e);
                    return {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("label"), o = K(e[3]), i = W(), b && b.c(), a = W(), c = I("div"), u = I("input"), d = W(), f = I("div"), m.c(), h = W(), $ && $.c(), F(r, "class", "ms-form__label"), F(r, "for", "psw"), F(n, "class", "ms-form__flex"), F(u, "class", "ms-form__input ms-form__input--password"), F(u, "type", e[7]), F(u, "placeholder", e[4]), u.value = l = e[0] || "", F(u, "name", "psw"), F(u, "autocomplete", "off"), u.required = !0, F(f, "class", "ms-form__show-toggle"), F(f, "id", "togglePassword"), F(c, "class", "ms-form__password-container"), F(t, "class", "ms-form__group")
                        },
                        m: function(s, l) {
                            R(s, t, l), C(t, n), C(n, r), C(r, o), C(n, i), b && b.m(n, null), C(t, a), C(t, c), C(c, u), C(c, d), C(c, f), S[p].m(f, null), C(t, h), $ && $.m(t, null), g = !0, w || (y = [B(u, "input", e[11]), B(u, "change", e[12]), B(f, "click", e[10])], w = !0)
                        },
                        p: function(e, r) {
                            var i = s(r, 1)[0];
                            (!g || 8 & i) && V(o, e[3]), e[2] ? b ? b.p(e, i) : ((b = _t(e)).c(), b.m(n, null)) : b && (b.d(1), b = null), (!g || 128 & i) && F(u, "type", e[7]), (!g || 16 & i) && F(u, "placeholder", e[4]), (!g || 1 & i && l !== (l = e[0] || "") && u.value !== l) && (u.value = l);
                            var a = p;
                            (p = x(e)) !== a && (be(), xe(S[a], 1, 1, (function() {
                                S[a] = null
                            })), _e(), (m = S[p]) || (m = S[p] = _[p](e)).c(), Se(m, 1), m.m(f, null)), e[6] ? $ ? ($.p(e, i), 64 & i && Se($, 1)) : (($ = $t(e)).c(), Se($, 1), $.m(t, null)) : $ && (be(), xe($, 1, 1, (function() {
                                $ = null
                            })), _e())
                        },
                        i: function(e) {
                            g || (Se(m), Se($), g = !0)
                        },
                        o: function(e) {
                            xe(m), xe($), g = !1
                        },
                        d: function(e) {
                            e && O(t), b && b.d(), S[p].d(), $ && $.d(), w = !1, v(y)
                        }
                    }
                }

                function At(e, t, n) {
                    var r, o;
                    b(e, Ue, (function(e) {
                        return n(15, o = e)
                    }));
                    var i = o.text,
                        a = t.showForgotPasswordLabel,
                        s = void 0 !== a && a,
                        c = t.passwordInputValid,
                        u = void 0 !== c && c,
                        l = t.passwordLabel,
                        d = void 0 === l ? i.password || "Password" : l,
                        f = t.passwordPlaceholder,
                        p = void 0 === f ? "Enter Password" : f,
                        m = t.passwordValue,
                        h = t.display,
                        v = !1,
                        g = i.password_error_message || "Minimum 8 characters required",
                        w = !1;
                    return e.$$set = function(e) {
                        "showForgotPasswordLabel" in e && n(2, s = e.showForgotPasswordLabel), "passwordInputValid" in e && n(13, u = e.passwordInputValid), "passwordLabel" in e && n(3, d = e.passwordLabel), "passwordPlaceholder" in e && n(4, p = e.passwordPlaceholder), "passwordValue" in e && n(0, m = e.passwordValue), "display" in e && n(1, h = e.display)
                    }, e.$$.update = function() {
                        32 & e.$$.dirty && n(7, r = w ? "text" : "password")
                    }, [m, h, s, d, p, w, v, r, i, g, function() {
                        n(5, w = !w)
                    }, function(e) {
                        n(0, m = e.target.value)
                    }, function(e) {
                        e.target.value.length >= 8 ? (n(13, u = !0), n(6, v = !1)) : (n(13, u = !1), n(6, v = !0))
                    }, u, function() {
                        return n(1, h = "forgot_password")
                    }]
                }
                var Pt = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, At, Et, w, {
                            showForgotPasswordLabel: 2,
                            passwordInputValid: 13,
                            passwordLabel: 3,
                            passwordPlaceholder: 4,
                            passwordValue: 0,
                            display: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function kt(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "shape-rendering", "geometricPrecision"), F(n, "d", "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm-2 16-4-4 1.41-1.41 2.59 2.58 6.59-6.59 1.41 1.42-8 8z"), F(t, "fill", "none"), F(t, "viewBox", "0 0 18 22"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var Ct = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, kt, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function Mt(e) {
                    var t, n, r, o, i;
                    return r = new Ct({}), {
                        c: function() {
                            t = I("div"), n = I("a"), Ce(r.$$.fragment), o = K(" Secured by Memberstack"), F(n, "href", "https://www.memberstack.com"), F(n, "target", "_blank"), F(t, "class", "ms-modal__footer")
                        },
                        m: function(e, a) {
                            R(e, t, a), C(t, n), Me(r, n, null), C(n, o), i = !0
                        },
                        i: function(e) {
                            i || (Se(r.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(r.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            e && O(t), Le(r)
                        }
                    }
                }

                function Lt(e) {
                    var t, n, r = !e[0].isPaid && Mt();
                    return {
                        c: function() {
                            r && r.c(), t = N()
                        },
                        m: function(e, o) {
                            r && r.m(e, o), R(e, t, o), n = !0
                        },
                        p: function(e, n) {
                            var o = s(n, 1)[0];
                            e[0].isPaid ? r && (be(), xe(r, 1, 1, (function() {
                                r = null
                            })), _e()) : r ? 1 & o && Se(r, 1) : ((r = Mt()).c(), Se(r, 1), r.m(t.parentNode, t))
                        },
                        i: function(e) {
                            n || (Se(r), n = !0)
                        },
                        o: function(e) {
                            xe(r), n = !1
                        },
                        d: function(e) {
                            r && r.d(e), e && O(t)
                        }
                    }
                }

                function Ht(e, t, n) {
                    var r;
                    return b(e, Ie, (function(e) {
                        return n(0, r = e)
                    })), [r]
                }
                var Tt = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Ht, Lt, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function Rt(e, t, n) {
                    var r = e.slice();
                    return r[19] = t[n], r
                }

                function Ot(e) {
                    var t, n;
                    return t = new Xe({
                        props: {
                            closeModal: e[1]
                        }
                    }), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        p: function(e, n) {
                            var r = {};
                            2 & n && (r.closeModal = e[1]), t.$set(r)
                        },
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function Dt(e) {
                    var t, n, r, o;
                    return {
                        c: function() {
                            t = I("div"), (n = I("button")).textContent = "".concat(e[7].dont_have_an_account || "Don't have an account?"), F(n, "class", "ms-form__button ms-form__button--text"), F(n, "type", "button"), F(t, "class", "ms-form__flex ms-form__flex--centered")
                        },
                        m: function(i, a) {
                            R(i, t, a), C(t, n), r || (o = B(n, "click", e[16]), r = !0)
                        },
                        p: l,
                        d: function(e) {
                            e && O(t), r = !1, o()
                        }
                    }
                }

                function It(e) {
                    var t, n, r, o;
                    return {
                        c: function() {
                            t = I("div"), (n = I("button")).textContent = "".concat(e[7].dont_have_an_account || "Don't have an account?"), F(n, "class", "ms-form__button ms-form__button--text"), F(n, "type", "button"), F(t, "class", "ms-form__flex ms-form__flex--centered")
                        },
                        m: function(i, a) {
                            R(i, t, a), C(t, n), r || (o = B(n, "click", e[15]), r = !0)
                        },
                        p: l,
                        d: function(e) {
                            e && O(t), r = !1, o()
                        }
                    }
                }

                function Ut(e) {
                    for (var t, n, r, o, i, a, s, c, u = e[6].authProviders, l = [], d = 0; d < u.length; d += 1) l[d] = Kt(Rt(e, u, d));
                    return {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("div"), o = W(), (i = I("div")).textContent = "".concat(e[7].or || "or"), a = W(), s = I("div"), c = W();
                            for (var u = 0; u < l.length; u += 1) l[u].c();
                            F(r, "class", "ms-modal__divider-line"), F(i, "class", "ms-modal__divider-text"), F(s, "class", "ms-modal__divider-line"), F(n, "class", "ms-modal__social-divider"), F(t, "class", "ms-modal__social")
                        },
                        m: function(e, u) {
                            R(e, t, u), C(t, n), C(n, r), C(n, o), C(n, i), C(n, a), C(n, s), C(t, c);
                            for (var d = 0; d < l.length; d += 1) l[d].m(t, null)
                        },
                        p: function(e, n) {
                            if (1216 & n) {
                                u = e[6].authProviders;
                                var r = void 0;
                                for (r = 0; r < u.length; r += 1) {
                                    var o = Rt(e, u, r);
                                    l[r] ? l[r].p(o, n) : (l[r] = Kt(o), l[r].c(), l[r].m(t, null))
                                }
                                for (; r < l.length; r += 1) l[r].d(1);
                                l.length = u.length
                            }
                        },
                        d: function(e) {
                            e && O(t), D(l, e)
                        }
                    }
                }

                function Kt(e) {
                    var t, n, r, o, i, a, s, c, u, l, d, f, p, m = (e[7].continue_with || "Continue with") + "",
                        h = e[19].name + "";

                    function v() {
                        return e[17](e[19])
                    }
                    return {
                        c: function() {
                            t = I("div"), n = I("button"), r = I("img"), a = W(), s = I("span"), c = K(m), u = W(), l = K(h), d = W(), y(r.src, o = e[19].icon) || F(r, "src", o), F(r, "alt", i = e[19].name), F(n, "class", "ms-modal__social-button"), F(n, "type", "button"), F(t, "class", "ms-modal__social-buttons")
                        },
                        m: function(e, o) {
                            R(e, t, o), C(t, n), C(n, r), C(n, a), C(n, s), C(s, c), C(s, u), C(s, l), C(t, d), f || (p = B(n, "click", v), f = !0)
                        },
                        p: function(t, n) {
                            e = t, 64 & n && !y(r.src, o = e[19].icon) && F(r, "src", o), 64 & n && i !== (i = e[19].name) && F(r, "alt", i), 64 & n && h !== (h = e[19].name + "") && V(l, h)
                        },
                        d: function(e) {
                            e && O(t), f = !1, p()
                        }
                    }
                }

                function Wt(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, v, g, w, y, b, _, S, x, $, E = (!e[2] || !e[2].hideCloseButton) && Ot(e);

                    function A(t) {
                        e[12](t)
                    }
                    o = new it({});
                    var P = {
                        placeholder: e[7].login_email_placeholder
                    };

                    function k(t) {
                        e[13](t)
                    }

                    function M(t) {
                        e[14](t)
                    }
                    void 0 !== e[4] && (P.emailInputValid = e[4]), l = new vt({
                        props: P
                    }), ie.push((function() {
                        return ke(l, "emailInputValid", A)
                    }));
                    var L = {
                        passwordPlaceholder: e[7].login_password_placeholder,
                        "||": !0,
                        showForgotPasswordLabel: !0
                    };

                    function H(e, t) {
                        return e[2] && e[2].signup && e[2].signup.plans ? It : e[8] ? Dt : void 0
                    }
                    void 0 !== e[5] && (L.passwordInputValid = e[5]), void 0 !== e[0] && (L.display = e[0]), p = new Pt({
                        props: L
                    }), ie.push((function() {
                        return ke(p, "passwordInputValid", k)
                    })), ie.push((function() {
                        return ke(p, "display", M)
                    })), g = new lt({
                        props: {
                            buttonText: e[7].login || "Log in",
                            isLoading: e[3]
                        }
                    });
                    var T = H(e),
                        D = T && T(e),
                        U = e[6].authProviders.length > 0 && Ut(e);
                    return _ = new Tt({}), {
                        c: function() {
                            t = I("div"), E && E.c(), n = W(), r = I("div"), Ce(o.$$.fragment), i = W(), (a = I("h2")).textContent = "".concat(e[7].login_to_your_account || "Login to your account"), c = W(), u = I("form"), Ce(l.$$.fragment), f = W(), Ce(p.$$.fragment), v = W(), Ce(g.$$.fragment), w = W(), D && D.c(), y = W(), U && U.c(), b = W(), Ce(_.$$.fragment), F(a, "class", "ms-modal__title"), F(u, "class", "ms-form"), F(u, "action", ""), F(u, "method", "post"), F(u, "autocomplete", "off"), F(r, "class", "ms-modal__content"), F(t, "class", "ms-modal"), F(t, "id", "LoginModal")
                        },
                        m: function(s, d) {
                            R(s, t, d), E && E.m(t, null), C(t, n), C(t, r), Me(o, r, null), C(r, i), C(r, a), C(r, c), C(r, u), Me(l, u, null), C(u, f), Me(p, u, null), C(u, v), Me(g, u, null), C(u, w), D && D.m(u, null), C(r, y), U && U.m(r, null), C(t, b), Me(_, t, null), S = !0, x || ($ = B(u, "submit", j(J(e[9]))), x = !0)
                        },
                        p: function(e, o) {
                            var i = s(o, 1)[0];
                            e[2] && e[2].hideCloseButton ? E && (be(), xe(E, 1, 1, (function() {
                                E = null
                            })), _e()) : E ? (E.p(e, i), 4 & i && Se(E, 1)) : ((E = Ot(e)).c(), Se(E, 1), E.m(t, n));
                            var a = {};
                            !d && 16 & i && (d = !0, a.emailInputValid = e[4], de((function() {
                                return d = !1
                            }))), l.$set(a);
                            var c = {};
                            !m && 32 & i && (m = !0, c.passwordInputValid = e[5], de((function() {
                                return m = !1
                            }))), !h && 1 & i && (h = !0, c.display = e[0], de((function() {
                                return h = !1
                            }))), p.$set(c);
                            var f = {};
                            8 & i && (f.isLoading = e[3]), g.$set(f), T === (T = H(e)) && D ? D.p(e, i) : (D && D.d(1), (D = T && T(e)) && (D.c(), D.m(u, null))), e[6].authProviders.length > 0 ? U ? U.p(e, i) : ((U = Ut(e)).c(), U.m(r, null)) : U && (U.d(1), U = null)
                        },
                        i: function(e) {
                            S || (Se(E), Se(o.$$.fragment, e), Se(l.$$.fragment, e), Se(p.$$.fragment, e), Se(g.$$.fragment, e), Se(_.$$.fragment, e), S = !0)
                        },
                        o: function(e) {
                            xe(E), xe(o.$$.fragment, e), xe(l.$$.fragment, e), xe(p.$$.fragment, e), xe(g.$$.fragment, e), xe(_.$$.fragment, e), S = !1
                        },
                        d: function(e) {
                            e && O(t), E && E.d(), Le(o), Le(l), Le(p), Le(g), D && D.d(), U && U.d(), Le(_), x = !1, $()
                        }
                    }
                }

                function Nt(e, t, n) {
                    var r, o;
                    b(e, Ie, (function(e) {
                        return n(6, r = e)
                    })), b(e, Ue, (function(e) {
                        return n(18, o = e)
                    }));
                    var s = t.closeModal,
                        c = t.display,
                        u = t.onSuccessLogin,
                        l = t.params,
                        d = o.text,
                        f = !1,
                        p = !1,
                        m = !1,
                        h = Boolean(window.ssoUI) && r.ssoSignupButtonURL;

                    function v(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r;
                            return a(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, window.$memberstackDom.loginWithProvider({
                                            provider: e
                                        })];
                                    case 1:
                                        return t = o.sent().data, u({
                                            type: "LOGIN",
                                            data: t
                                        }), [3, 3];
                                    case 2:
                                        return r = o.sent(), n(3, f = !1), window.$memberstackDom._showMessage(r.message, !0), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }
                    return e.$$set = function(e) {
                        "closeModal" in e && n(1, s = e.closeModal), "display" in e && n(0, c = e.display), "onSuccessLogin" in e && n(11, u = e.onSuccessLogin), "params" in e && n(2, l = e.params)
                    }, [c, s, l, f, p, m, r, d, h, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, o, i;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (t = e.target.querySelector("[name=eml]"), r = e.target.querySelector("[name=psw]"), !p || !m) return [2];
                                        n(3, f = !0), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, window.$memberstackDom.loginMemberEmailPassword({
                                            email: t.value,
                                            password: r.value
                                        }, {
                                            includeContentGroups: !0
                                        })];
                                    case 2:
                                        return o = a.sent().data, u({
                                            type: "LOGIN",
                                            data: o
                                        }), n(3, f = !1), [3, 4];
                                    case 3:
                                        return i = a.sent(), n(3, f = !1), window.$memberstackDom._showMessage(i.message, !0), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, v, u, function(e) {
                        n(4, p = e)
                    }, function(e) {
                        n(5, m = e)
                    }, function(e) {
                        n(0, c = e)
                    }, function() {
                        return n(0, c = "signup")
                    }, function() {
                        return window.location.href = h
                    }, function(e) {
                        return v(e.provider)
                    }]
                }
                var Bt = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Nt, Wt, w, {
                            closeModal: 1,
                            display: 0,
                            onSuccessLogin: 11,
                            params: 2
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Jt(e) {
                    M(e, "svelte-1w8lbd8", ".rey-was-here.svelte-1w8lbd8{display:none !important}")
                }

                function jt(e, t, n) {
                    var r = e.slice();
                    return r[19] = t[n], r
                }

                function Ft(e, t, n) {
                    var r = e.slice();
                    return r[22] = t[n], r[24] = n, r
                }

                function Vt(e) {
                    var t, n;
                    return t = new Xe({
                        props: {
                            closeModal: e[1]
                        }
                    }), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        p: function(e, n) {
                            var r = {};
                            2 & n && (r.closeModal = e[1]), t.$set(r)
                        },
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function Gt(e) {
                    var t, n, r, o, i, a, s, c, u, l = e[22].label + "";
                    return {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("label"), o = K(l), a = W(), s = I("input"), F(r, "class", "ms-form__label"), F(r, "for", i = e[22].key), F(s, "class", "ms-form__input"), F(s, "data-ms-custom-field", ""), F(s, "type", "text"), F(s, "placeholder", c = e[22].label), F(s, "name", u = e[22].key), F(n, "class", "ms-form__group"), F(t, "class", "ms-modal__custom-field-container")
                        },
                        m: function(e, i) {
                            R(e, t, i), C(t, n), C(n, r), C(r, o), C(n, a), C(n, s)
                        },
                        p: function(e, t) {
                            64 & t && l !== (l = e[22].label + "") && V(o, l), 64 & t && i !== (i = e[22].key) && F(r, "for", i), 64 & t && c !== (c = e[22].label) && F(s, "placeholder", c), 64 & t && u !== (u = e[22].key) && F(s, "name", u)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function zt(e) {
                    var t, n = !0 !== e[22].hidden && Gt(e);
                    return {
                        c: function() {
                            n && n.c(), t = N()
                        },
                        m: function(e, r) {
                            n && n.m(e, r), R(e, t, r)
                        },
                        p: function(e, r) {
                            !0 !== e[22].hidden ? n ? n.p(e, r) : ((n = Gt(e)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
                        },
                        d: function(e) {
                            n && n.d(e), e && O(t)
                        }
                    }
                }

                function qt(e) {
                    for (var t, n, r, o = e[6].authProviders, i = [], a = 0; a < o.length; a += 1) i[a] = Yt(jt(e, o, a));
                    return {
                        c: function() {
                            t = I("div"), (n = I("div")).innerHTML = '<div class="ms-modal__divider-line"></div> \n          <div class="ms-modal__divider-text">or</div> \n          <div class="ms-modal__divider-line"></div>', r = W();
                            for (var e = 0; e < i.length; e += 1) i[e].c();
                            F(n, "class", "ms-modal__social-divider"), F(t, "class", "ms-modal__social")
                        },
                        m: function(e, o) {
                            R(e, t, o), C(t, n), C(t, r);
                            for (var a = 0; a < i.length; a += 1) i[a].m(t, null)
                        },
                        p: function(e, n) {
                            if (320 & n) {
                                o = e[6].authProviders;
                                var r = void 0;
                                for (r = 0; r < o.length; r += 1) {
                                    var a = jt(e, o, r);
                                    i[r] ? i[r].p(a, n) : (i[r] = Yt(a), i[r].c(), i[r].m(t, null))
                                }
                                for (; r < i.length; r += 1) i[r].d(1);
                                i.length = o.length
                            }
                        },
                        d: function(e) {
                            e && O(t), D(i, e)
                        }
                    }
                }

                function Yt(e) {
                    var t, n, r, o, i, a, s, c, u, l, d, f, p = e[19].name + "";

                    function m() {
                        return e[13](e[19])
                    }
                    return {
                        c: function() {
                            t = I("div"), n = I("button"), r = I("img"), a = W(), s = I("span"), c = K("Continue with "), u = K(p), l = W(), y(r.src, o = e[19].icon) || F(r, "src", o), F(r, "alt", i = e[19].name), F(n, "class", "ms-modal__social-button"), F(n, "type", "button"), F(t, "class", "ms-modal__social-buttons")
                        },
                        m: function(e, o) {
                            R(e, t, o), C(t, n), C(n, r), C(n, a), C(n, s), C(s, c), C(s, u), C(t, l), d || (f = B(n, "click", m), d = !0)
                        },
                        p: function(t, n) {
                            e = t, 64 & n && !y(r.src, o = e[19].icon) && F(r, "src", o), 64 & n && i !== (i = e[19].name) && F(r, "alt", i), 64 & n && p !== (p = e[19].name + "") && V(u, p)
                        },
                        d: function(e) {
                            e && O(t), d = !1, f()
                        }
                    }
                }

                function Zt(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b, _, S, x, $, E, A, P, k, M, L, H, T = (!e[2] || !e[2].hideCloseButton) && Vt(e);
                    o = new it({});
                    for (var U = e[6].customFields, K = [], N = 0; N < U.length; N += 1) K[N] = zt(Ft(e, U, N));

                    function V(t) {
                        e[10](t)
                    }
                    var G = {};

                    function z(t) {
                        e[11](t)
                    }
                    void 0 !== e[4] && (G.emailInputValid = e[4]), d = new vt({
                        props: G
                    }), ie.push((function() {
                        return ke(d, "emailInputValid", V)
                    }));
                    var q = {};
                    void 0 !== e[5] && (q.passwordInputValid = e[5]), g = new Pt({
                        props: q
                    }), ie.push((function() {
                        return ke(g, "passwordInputValid", z)
                    })), S = new lt({
                        props: {
                            buttonText: "Sign up",
                            isLoading: e[3]
                        }
                    });
                    var Y = e[6].authProviders.length > 0 && qt(e);
                    return k = new Tt({}), {
                        c: function() {
                            t = I("div"), T && T.c(), n = W(), r = I("div"), Ce(o.$$.fragment), i = W(), (a = I("h2")).textContent = "Create an account", c = W(), u = I("form");
                            for (var e = 0; e < K.length; e += 1) K[e].c();
                            l = W(), Ce(d.$$.fragment), p = W(), (m = I("div")).innerHTML = '<label class="ms-form__label" for="Rey">Rey was here</label> \n        <input class="ms-form__input" type="text" placeholder="Rey&#39;s Favorite Color" name="Rey"/>', h = W(), Ce(g.$$.fragment), y = W(), b = I("div"), _ = W(), Ce(S.$$.fragment), x = W(), $ = I("div"), (E = I("button")).textContent = "Already have an account?", A = W(), Y && Y.c(), P = W(), Ce(k.$$.fragment), F(a, "class", "ms-modal__title"), F(m, "class", "ms-form__group rey-was-here svelte-1w8lbd8"), F(b, "id", "hcaptcha"), F(b, "class", "h-captcha"), F(E, "class", "ms-form__button ms-form__button--text ms-form__button--top-spacing"), F($, "class", "ms-form__flex ms-form__flex--centered"), F(u, "class", "ms-form"), F(u, "action", ""), F(u, "method", "post"), F(u, "autocomplete", "off"), F(r, "class", "ms-modal__content"), F(t, "class", "ms-modal"), F(t, "id", "SignupModal")
                        },
                        m: function(s, f) {
                            R(s, t, f), T && T.m(t, null), C(t, n), C(t, r), Me(o, r, null), C(r, i), C(r, a), C(r, c), C(r, u);
                            for (var v = 0; v < K.length; v += 1) K[v].m(u, null);
                            C(u, l), Me(d, u, null), C(u, p), C(u, m), C(u, h), Me(g, u, null), C(u, y), C(u, b), C(u, _), Me(S, u, null), C(u, x), C(u, $), C($, E), C(r, A), Y && Y.m(r, null), C(t, P), Me(k, t, null), M = !0, L || (H = [B(E, "click", e[12]), B(u, "submit", j(J(e[7])))], L = !0)
                        },
                        p: function(e, o) {
                            var i = s(o, 1)[0];
                            if (e[2] && e[2].hideCloseButton ? T && (be(), xe(T, 1, 1, (function() {
                                    T = null
                                })), _e()) : T ? (T.p(e, i), 4 & i && Se(T, 1)) : ((T = Vt(e)).c(), Se(T, 1), T.m(t, n)), 64 & i) {
                                U = e[6].customFields;
                                var a = void 0;
                                for (a = 0; a < U.length; a += 1) {
                                    var c = Ft(e, U, a);
                                    K[a] ? K[a].p(c, i) : (K[a] = zt(c), K[a].c(), K[a].m(u, l))
                                }
                                for (; a < K.length; a += 1) K[a].d(1);
                                K.length = U.length
                            }
                            var p = {};
                            !f && 16 & i && (f = !0, p.emailInputValid = e[4], de((function() {
                                return f = !1
                            }))), d.$set(p);
                            var m = {};
                            !w && 32 & i && (w = !0, m.passwordInputValid = e[5], de((function() {
                                return w = !1
                            }))), g.$set(m);
                            var h = {};
                            8 & i && (h.isLoading = e[3]), S.$set(h), e[6].authProviders.length > 0 ? Y ? Y.p(e, i) : ((Y = qt(e)).c(), Y.m(r, null)) : Y && (Y.d(1), Y = null)
                        },
                        i: function(e) {
                            M || (Se(T), Se(o.$$.fragment, e), Se(d.$$.fragment, e), Se(g.$$.fragment, e), Se(S.$$.fragment, e), Se(k.$$.fragment, e), M = !0)
                        },
                        o: function(e) {
                            xe(T), xe(o.$$.fragment, e), xe(d.$$.fragment, e), xe(g.$$.fragment, e), xe(S.$$.fragment, e), xe(k.$$.fragment, e), M = !1
                        },
                        d: function(e) {
                            e && O(t), T && T.d(), Le(o), D(K, e), Le(d), Le(g), Le(S), Y && Y.d(), Le(k), L = !1, v(H)
                        }
                    }
                }

                function Xt() {
                    return i(this, void 0, void 0, (function() {
                        return a(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, window.hcaptcha.execute({
                                        async: !0
                                    })];
                                case 1:
                                    return [2, e.sent().response]
                            }
                        }))
                    }))
                }

                function Qt(e, t, n) {
                    var r;
                    b(e, Ie, (function(e) {
                        return n(6, r = e)
                    }));
                    var o, s = t.closeModal,
                        c = t.display,
                        u = t.onSuccessSignup,
                        l = t.params,
                        d = !1,
                        f = !1,
                        p = !1,
                        m = r.captchaRequired;

                    function h(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r;
                            return a(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return o.trys.push([0, 2, , 3]), [4, window.$memberstackDom.signupWithProvider({
                                            provider: e
                                        })];
                                    case 1:
                                        return t = o.sent().data, u({
                                            type: "SIGNUP",
                                            data: t
                                        }), [3, 3];
                                    case 2:
                                        return r = o.sent(), n(3, d = !1), window.$memberstackDom._showMessage(r.message, !0), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }
                    return function() {
                        i(this, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return m ? [4, window.$memberstackDom._captchaReady] : [3, 2];
                                    case 1:
                                        e.sent(), o = window.hcaptcha.render("hcaptcha", {
                                            sitekey: "838711f9-0e30-48e9-89e6-8f1ec4b79705",
                                            theme: "light"
                                        }), e.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        }))
                    }(), e.$$set = function(e) {
                        "closeModal" in e && n(1, s = e.closeModal), "display" in e && n(0, c = e.display), "onSuccessSignup" in e && n(9, u = e.onSuccessSignup), "params" in e && n(2, l = e.params)
                    }, [c, s, l, d, f, p, r, function(e) {
                        var t;
                        return i(this, void 0, void 0, (function() {
                            var r, i, s, c, h, v, g;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return r = e.target.querySelector("[type=email]"), i = e.target.querySelector("[type=password]"), s = {}, Array.from(e.target.querySelectorAll("[data-ms-custom-field]")).map((function(e) {
                                            s[e.getAttribute("name")] = e.value
                                        })).length, f && p ? (n(3, d = !0), e.target.querySelector("[name=Rey]").value ? (e.target.reset(), n(3, d = !1), [2]) : m ? [4, window.$memberstackDom._captchaReady] : [3, 5]) : [2];
                                    case 1:
                                        if (a.sent(), c = window.hcaptcha.getResponse(o)) return [3, 5];
                                        a.label = 2;
                                    case 2:
                                        return a.trys.push([2, 4, , 5]), [4, Xt()];
                                    case 3:
                                        return c = a.sent(), [3, 5];
                                    case 4:
                                        return a.sent(), n(3, d = !1), [2];
                                    case 5:
                                        return a.trys.push([5, 7, , 8]), h = ((null === (t = null == l ? void 0 : l.signup) || void 0 === t ? void 0 : t.plans) || []).map((function(e) {
                                            return {
                                                planId: e
                                            }
                                        })), [4, window.$memberstackDom.signupMemberEmailPassword({
                                            email: r.value,
                                            password: i.value,
                                            plans: h,
                                            customFields: s,
                                            captchaToken: c
                                        }, {
                                            includeContentGroups: !0
                                        })];
                                    case 6:
                                        return v = a.sent().data, u({
                                            type: "SIGNUP",
                                            data: v
                                        }), n(3, d = !1), [3, 8];
                                    case 7:
                                        return g = a.sent(), n(3, d = !1), window.$memberstackDom._showMessage(g.message, !0), m && window.hcaptcha && window.hcaptcha.reset(o), [3, 8];
                                    case 8:
                                        return [2]
                                }
                            }))
                        }))
                    }, h, u, function(e) {
                        n(4, f = e)
                    }, function(e) {
                        n(5, p = e)
                    }, function() {
                        return n(0, c = "login")
                    }, function(e) {
                        return h(e.provider)
                    }]
                }
                var en = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Qt, Zt, w, {
                            closeModal: 1,
                            display: 0,
                            onSuccessSignup: 9,
                            params: 2
                        }, Jt), n
                    }
                    return r(t, e), t
                }(Re);

                function tn(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"), F(t, "fill", "none"), F(t, "viewBox", "0 0 8 12"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var nn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, tn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function rn(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b, _, S, x, $, E, A, P;

                    function k(t) {
                        e[7](t)
                    }
                    o = new nn({}), c = new it({});
                    var M = {
                        placeholder: e[3].reset_email_placeholder
                    };
                    return void 0 !== e[1] && (M.emailInputValid = e[1]), h = new vt({
                        props: M
                    }), ie.push((function() {
                        return ke(h, "emailInputValid", k)
                    })), y = new lt({
                        props: {
                            buttonText: e[3].reset || "Send Link",
                            isLoading: e[2]
                        }
                    }), $ = new Tt({}), {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("button"), Ce(o.$$.fragment), i = W(), a = I("div"), Ce(c.$$.fragment), u = W(), (l = I("h2")).textContent = "".concat(e[3].reset_your_password || "Reset your password"), d = W(), (f = I("p")).textContent = "".concat(e[3].reset_instructions || "We’ll email you a secure link to reset the password for your account."), p = W(), m = I("form"), Ce(h.$$.fragment), w = W(), Ce(y.$$.fragment), b = W(), _ = I("div"), (S = I("div")).textContent = "".concat(e[3].reset_already_have_code || "I already have a code"), x = W(), Ce($.$$.fragment), F(n, "data-cy", "back-btn"), F(n, "class", "ms-modal__back"), F(l, "class", "ms-modal__title ms-modal__title--sub-text"), F(f, "class", "ms-modal__text"), F(S, "class", "ms-form__link"), F(_, "class", "ms-form__flex ms-form__flex--centered"), F(m, "class", "ms-form"), F(m, "action", ""), F(m, "method", "post"), F(m, "autocomplete", "off"), F(a, "class", "ms-modal__content"), F(t, "class", "ms-modal"), F(t, "id", "PasswordResetModal")
                        },
                        m: function(s, v) {
                            R(s, t, v), C(t, n), C(n, r), Me(o, r, null), C(t, i), C(t, a), Me(c, a, null), C(a, u), C(a, l), C(a, d), C(a, f), C(a, p), C(a, m), Me(h, m, null), C(m, w), Me(y, m, null), C(m, b), C(m, _), C(_, S), C(t, x), Me($, t, null), E = !0, A || (P = [B(r, "click", e[6]), B(S, "click", e[8]), B(m, "submit", j(J(e[4])))], A = !0)
                        },
                        p: function(e, t) {
                            var n = s(t, 1)[0],
                                r = {};
                            !g && 2 & n && (g = !0, r.emailInputValid = e[1], de((function() {
                                return g = !1
                            }))), h.$set(r);
                            var o = {};
                            4 & n && (o.isLoading = e[2]), y.$set(o)
                        },
                        i: function(e) {
                            E || (Se(o.$$.fragment, e), Se(c.$$.fragment, e), Se(h.$$.fragment, e), Se(y.$$.fragment, e), Se($.$$.fragment, e), E = !0)
                        },
                        o: function(e) {
                            xe(o.$$.fragment, e), xe(c.$$.fragment, e), xe(h.$$.fragment, e), xe(y.$$.fragment, e), xe($.$$.fragment, e), E = !1
                        },
                        d: function(e) {
                            e && O(t), Le(o), Le(c), Le(h), Le(y), Le($), A = !1, v(P)
                        }
                    }
                }

                function on(e, t, n) {
                    var r;
                    b(e, Ue, (function(e) {
                        return n(9, r = e)
                    }));
                    var o = r.text,
                        s = t.closeModal,
                        c = t.display,
                        u = !1,
                        l = !1;
                    return e.$$set = function(e) {
                        "closeModal" in e && n(5, s = e.closeModal), "display" in e && n(0, c = e.display)
                    }, [c, u, l, o, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r;
                            return a(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (t = e.target[0], !u) return [2];
                                        n(2, l = !0), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, window.$memberstackDom.sendMemberResetPasswordEmail({
                                            email: t.value
                                        })];
                                    case 2:
                                        return o.sent(), n(0, c = "reset_password"), [3, 4];
                                    case 3:
                                        return r = o.sent(), console.log(r), n(2, l = !1), r.message && window.$memberstackDom._showMessage(r.message, !1), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, s, function() {
                        return n(0, c = "login")
                    }, function(e) {
                        n(1, u = e)
                    }, function() {
                        return n(0, c = "reset_password")
                    }]
                }
                var an = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, on, rn, w, {
                            closeModal: 5,
                            display: 0
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function sn(e) {
                    var t, n, r, o;
                    return n = new ft({}), {
                        c: function() {
                            t = I("div"), Ce(n.$$.fragment), r = K(" Please enter a valid code"), F(t, "class", "ms-form__error")
                        },
                        m: function(e, i) {
                            R(e, t, i), Me(n, t, null), C(t, r), o = !0
                        },
                        i: function(e) {
                            o || (Se(n.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n)
                        }
                    }
                }

                function cn(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b, _, S, x, $, E, A, P, k, M, L;
                    o = new nn({}), a = new Xe({
                        props: {
                            closeModal: e[1]
                        }
                    }), l = new it({});
                    var H = !e[3] && sn();

                    function T(t) {
                        e[9](t)
                    }
                    var D = {
                        passwordPlaceholder: e[5].reset_password_placeholder,
                        passwordLabel: e[5].password || "Password"
                    };
                    return void 0 !== e[4] && (D.passwordInputValid = e[4]), S = new Pt({
                        props: D
                    }), ie.push((function() {
                        return ke(S, "passwordInputValid", T)
                    })), E = new lt({
                        props: {
                            buttonText: e[5].reset_confirm_reset || "Confirm & Reset",
                            isLoading: e[2]
                        }
                    }), P = new Tt({}), {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("button"), Ce(o.$$.fragment), i = W(), Ce(a.$$.fragment), c = W(), u = I("div"), Ce(l.$$.fragment), d = W(), (f = I("h2")).textContent = "".concat(e[5].reset_your_password || "Reset your password"), p = W(), m = I("form"), h = I("div"), (g = I("label")).textContent = "".concat(e[5].reset_enter_code || "Enter your 6-digit code"), w = W(), (y = I("fieldset")).innerHTML = '<input name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input name="token" class="ms-form__input ms-form__input--token" required=""/> \n          <input name="token" class="ms-form__input ms-form__input--token"/>', b = W(), H && H.c(), _ = W(), Ce(S.$$.fragment), $ = W(), Ce(E.$$.fragment), A = W(), Ce(P.$$.fragment), F(n, "class", "ms-modal__back"), F(f, "class", "ms-modal__title"), F(g, "class", "ms-form__label"), F(g, "for", "token-fieldset"), F(y, "class", "ms-form__fieldset"), F(y, "name", "token-fieldset"), F(h, "class", "ms-form__group"), F(m, "class", "ms-form"), F(m, "action", ""), F(m, "method", "post"), F(m, "autocomplete", "off"), F(u, "class", "ms-modal__content"), F(t, "class", "ms-modal"), F(t, "id", "PasswordTokenModal")
                        },
                        m: function(s, v) {
                            R(s, t, v), C(t, n), C(n, r), Me(o, r, null), C(t, i), Me(a, t, null), C(t, c), C(t, u), Me(l, u, null), C(u, d), C(u, f), C(u, p), C(u, m), C(m, h), C(h, g), C(h, w), C(h, y), C(h, b), H && H.m(h, null), C(m, _), Me(S, m, null), C(m, $), Me(E, m, null), C(t, A), Me(P, t, null), k = !0, M || (L = [B(r, "click", e[8]), B(m, "submit", j(J(e[6])))], M = !0)
                        },
                        p: function(e, t) {
                            var n = s(t, 1)[0],
                                r = {};
                            2 & n && (r.closeModal = e[1]), a.$set(r), e[3] ? H && (be(), xe(H, 1, 1, (function() {
                                H = null
                            })), _e()) : H ? 8 & n && Se(H, 1) : ((H = sn()).c(), Se(H, 1), H.m(h, null));
                            var o = {};
                            !x && 16 & n && (x = !0, o.passwordInputValid = e[4], de((function() {
                                return x = !1
                            }))), S.$set(o);
                            var i = {};
                            4 & n && (i.isLoading = e[2]), E.$set(i)
                        },
                        i: function(e) {
                            k || (Se(o.$$.fragment, e), Se(a.$$.fragment, e), Se(l.$$.fragment, e), Se(H), Se(S.$$.fragment, e), Se(E.$$.fragment, e), Se(P.$$.fragment, e), k = !0)
                        },
                        o: function(e) {
                            xe(o.$$.fragment, e), xe(a.$$.fragment, e), xe(l.$$.fragment, e), xe(H), xe(S.$$.fragment, e), xe(E.$$.fragment, e), xe(P.$$.fragment, e), k = !1
                        },
                        d: function(e) {
                            e && O(t), Le(o), Le(a), Le(l), H && H.d(), Le(S), Le(E), Le(P), M = !1, v(L)
                        }
                    }
                }

                function un(e, t, n) {
                    var r;
                    b(e, Ue, (function(e) {
                        return n(10, r = e)
                    }));
                    var o = r.text,
                        u = t.closeModal,
                        l = t.display,
                        d = t.onSuccessPasswordReset,
                        f = !1,
                        p = !0,
                        m = !0;
                    return ne((function() {
                        var e = c([], s(document.querySelectorAll("input.ms-form__input--token")), !1);
                        e.forEach((function(t, n) {
                            t.addEventListener("keydown", (function(t) {
                                8 === t.keyCode && "" === t.target.value && e[Math.max(0, n - 1)].focus()
                            })), t.addEventListener("input", (function(t) {
                                var r = s(t.target.value),
                                    o = r[0],
                                    i = r.slice(1);
                                t.target.value = null != o ? o : "";
                                var a = n === e.length - 1;
                                void 0 !== o && !a && (e[n + 1].focus(), e[n + 1].value = i.join(""), e[n + 1].dispatchEvent(new Event("input")))
                            }))
                        }))
                    })), e.$$set = function(e) {
                        "closeModal" in e && n(1, u = e.closeModal), "display" in e && n(0, l = e.display), "onSuccessPasswordReset" in e && n(7, d = e.onSuccessPasswordReset)
                    }, [l, u, f, p, m, o, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, o, i;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (t = e.target[7], u = c([], s(document.querySelectorAll("input.ms-form__input--token")), !1).some((function(e) {
                                                return !e.value
                                            })), n(3, p = !u), u) return [2];
                                        r = c([], s(document.getElementsByName("token")), !1).filter((function(e) {
                                            return e.name
                                        })).map((function(e) {
                                            return e.value
                                        })).join(""), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), n(2, f = !0), [4, window.$memberstackDom.resetMemberPassword({
                                            token: r,
                                            newPassword: t.value
                                        })];
                                    case 2:
                                        return o = a.sent()._internalUseOnly.message, window.$memberstackDom._showMessage(o, !1), d({
                                            type: "PASSWORD_RESET",
                                            data: {}
                                        }), n(2, f = !1), n(0, l = "reset_password_success"), [3, 4];
                                    case 3:
                                        return i = a.sent(), n(2, f = !1), console.log(i), i.message && window.$memberstackDom._showMessage(i.message, !0), [3, 4];
                                    case 4:
                                        return [2]
                                }
                                var u
                            }))
                        }))
                    }, d, function() {
                        return n(0, l = "forgot_password")
                    }, function(e) {
                        n(4, m = e)
                    }]
                }
                var ln = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, un, cn, w, {
                            closeModal: 1,
                            display: 0,
                            onSuccessPasswordReset: 7
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function dn(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h;
                    return o = new Xe({
                        props: {
                            closeModal: e[0]
                        }
                    }), c = new it({}), m = new Tt({}), {
                        c: function() {
                            t = I("div"), n = I("div"), r = W(), Ce(o.$$.fragment), i = W(), a = I("div"), Ce(c.$$.fragment), u = W(), (l = I("h2")).textContent = "Success!", d = W(), (f = I("p")).innerHTML = "Your password has been reset. <br/>\n      Please login with your new credentials.", p = W(), Ce(m.$$.fragment), F(n, "data-cy", "back-btn"), F(n, "class", "ms-modal__back"), F(l, "class", "ms-modal__title ms-modal__title--sub-text"), F(f, "class", "ms-modal__text"), F(a, "class", "ms-modal__content"), F(t, "class", "ms-modal"), F(t, "id", "PasswordSuccessModal")
                        },
                        m: function(e, s) {
                            R(e, t, s), C(t, n), C(t, r), Me(o, t, null), C(t, i), C(t, a), Me(c, a, null), C(a, u), C(a, l), C(a, d), C(a, f), C(t, p), Me(m, t, null), h = !0
                        },
                        p: function(e, t) {
                            var n = {};
                            1 & s(t, 1)[0] && (n.closeModal = e[0]), o.$set(n)
                        },
                        i: function(e) {
                            h || (Se(o.$$.fragment, e), Se(c.$$.fragment, e), Se(m.$$.fragment, e), h = !0)
                        },
                        o: function(e) {
                            xe(o.$$.fragment, e), xe(c.$$.fragment, e), xe(m.$$.fragment, e), h = !1
                        },
                        d: function(e) {
                            e && O(t), Le(o), Le(c), Le(m)
                        }
                    }
                }

                function fn(e, t, n) {
                    var r = t.closeModal;
                    return e.$$set = function(e) {
                        "closeModal" in e && n(0, r = e.closeModal)
                    }, [r]
                }
                var pn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, fn, dn, w, {
                            closeModal: 0
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function mn(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "d", "m8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"), F(n, "fill", "currentColor"), F(t, "fill", "none"), F(t, "viewBox", "0 0 16 16"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var hn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, mn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function vn(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "d", "m9 0-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm0 10.99h7c-0.53 4.12-3.28 7.79-7 8.94v-8.93h-7v-5.7l7-3.11v8.8z"), F(n, "fill", "currentColor"), F(t, "fill", "none"), F(t, "viewBox", "0 0 18 22"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var gn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, vn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function wn(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"), F(t, "fill", "none"), F(t, "viewBox", "0 0 18 18"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var yn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, wn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function bn(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "d", "M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"), F(n, "fill", "currentColor"), F(t, "width", "16"), F(t, "height", "16"), F(t, "viewBox", "0 0 16 16"), F(t, "fill", "none"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var _n = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, bn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function Sn(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"), F(t, "fill", "none"), F(t, "xmlns", "http://www.w3.org/2000/svg"), F(t, "viewBox", "3 2 19 20")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var xn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, Sn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function $n(e) {
                    var t, n, r, o, i, a;
                    return n = new hn({}), {
                        c: function() {
                            t = I("button"), Ce(n.$$.fragment), r = K(" Profile"), F(t, "data-cy", "profile-btn"), F(t, "class", "ms-modal__profile-option"), q(t, "ms-modal__profile-option--active", "profile" === e[0])
                        },
                        m: function(s, c) {
                            R(s, t, c), Me(n, t, null), C(t, r), o = !0, i || (a = B(t, "click", e[7]), i = !0)
                        },
                        p: function(e, n) {
                            1 & n && q(t, "ms-modal__profile-option--active", "profile" === e[0])
                        },
                        i: function(e) {
                            o || (Se(n.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n), i = !1, a()
                        }
                    }
                }

                function En(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m = e[3](),
                        h = !e[1] && $n(e);
                    r = new gn({});
                    var g = m && function(e) {
                        var t, n, r, o, i, a;
                        return n = new xn({}), {
                            c: function() {
                                t = I("button"), Ce(n.$$.fragment), r = K(" Plans"), F(t, "data-cy", "plans-btn"), F(t, "class", "ms-modal__profile-option"), q(t, "ms-modal__profile-option--active", "plans" === e[0])
                            },
                            m: function(s, c) {
                                R(s, t, c), Me(n, t, null), C(t, r), o = !0, i || (a = B(t, "click", e[9]), i = !0)
                            },
                            p: function(e, n) {
                                1 & n && q(t, "ms-modal__profile-option--active", "plans" === e[0])
                            },
                            i: function(e) {
                                o || (Se(n.$$.fragment, e), o = !0)
                            },
                            o: function(e) {
                                xe(n.$$.fragment, e), o = !1
                            },
                            d: function(e) {
                                e && O(t), Le(n), i = !1, a()
                            }
                        }
                    }(e);
                    return u = new _n({}), {
                        c: function() {
                            h && h.c(), t = W(), n = I("button"), Ce(r.$$.fragment), o = K(" Security"), i = W(), g && g.c(), a = W(), c = I("button"), Ce(u.$$.fragment), l = K(" Logout"), F(n, "data-cy", "security-btn"), F(n, "class", "ms-modal__profile-option"), q(n, "ms-modal__profile-option--active", "security" === e[0] || "changePassword" === e[0]), F(c, "data-cy", "logout-btn"), F(c, "class", "ms-modal__profile-option")
                        },
                        m: function(s, m) {
                            h && h.m(s, m), R(s, t, m), R(s, n, m), Me(r, n, null), C(n, o), R(s, i, m), g && g.m(s, m), R(s, a, m), R(s, c, m), Me(u, c, null), C(c, l), d = !0, f || (p = [B(n, "click", e[8]), B(c, "click", e[2])], f = !0)
                        },
                        p: function(e, r) {
                            var o = s(r, 1)[0];
                            e[1] ? h && (be(), xe(h, 1, 1, (function() {
                                h = null
                            })), _e()) : h ? (h.p(e, o), 2 & o && Se(h, 1)) : ((h = $n(e)).c(), Se(h, 1), h.m(t.parentNode, t)), 1 & o && q(n, "ms-modal__profile-option--active", "security" === e[0] || "changePassword" === e[0]), m && g.p(e, o)
                        },
                        i: function(e) {
                            d || (Se(h), Se(r.$$.fragment, e), Se(g), Se(u.$$.fragment, e), d = !0)
                        },
                        o: function(e) {
                            xe(h), xe(r.$$.fragment, e), xe(g), xe(u.$$.fragment, e), d = !1
                        },
                        d: function(e) {
                            h && h.d(e), e && O(t), e && O(n), Le(r), e && O(i), g && g.d(e), e && O(a), e && O(c), Le(u), f = !1, v(p)
                        }
                    }
                }

                function An(e, t, n) {
                    var r = t.member,
                        o = t.onSuccessLogout,
                        s = t.displayProfile,
                        c = t.profileLoader,
                        u = t.hideProfileSection,
                        l = Ie.subscribe((function(e) {
                            if (!e.initialValue) {
                                var t = document.getElementById("msOverlay"),
                                    n = document.createElement("style"),
                                    r = e.branding.colors.lightMode.primaryButton,
                                    o = ".ms-modal__profile-option:hover { color: ".concat(r, ";} .ms-modal__profile-option--active { color: ").concat(r, ";} .ms-modal__save-button { background: ").concat(r, ";} .ms-modal__save-button:disabled { background: ").concat(r, ";}");
                                n.appendChild(document.createTextNode(o)), t.appendChild(n)
                            }
                        }));
                    return re((function() {
                        l()
                    })), e.$$set = function(e) {
                        "member" in e && n(4, r = e.member), "onSuccessLogout" in e && n(5, o = e.onSuccessLogout), "displayProfile" in e && n(0, s = e.displayProfile), "profileLoader" in e && n(6, c = e.profileLoader), "hideProfileSection" in e && n(1, u = e.hideProfileSection)
                    }, [s, u, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var e, t, n, r;
                            return a(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, window.$memberstackDom.logout()];
                                    case 1:
                                        return e = i.sent(), t = e.data, n = e.internalUseOnly.message, window.$memberstackDom._showMessage(n, !1), o({
                                            type: "LOGOUT",
                                            data: t
                                        }), [3, 3];
                                    case 2:
                                        return r = i.sent(), window.$memberstackDom._showMessage(r.message, !0), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, function() {
                        return r.stripeCustomerId || r.planConnections.some((function(e) {
                            return "FREE" === e.type
                        }))
                    }, r, o, c, function() {
                        return n(0, s = "profile")
                    }, function() {
                        return n(0, s = "security")
                    }, function() {
                        return n(0, s = "plans")
                    }]
                }
                var Pn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, An, En, w, {
                            member: 4,
                            onSuccessLogout: 5,
                            displayProfile: 0,
                            profileLoader: 6,
                            hideProfileSection: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function kn(e, t, n) {
                    var r = e.slice();
                    return r[5] = t[n], r[6] = t, r[7] = n, r
                }

                function Cn(e) {
                    var t, n, r, o, i, a, s, c, u, l, d, f, p = e[5].label + "";

                    function m() {
                        e[4].call(s, e[5])
                    }
                    return {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("label"), o = K(p), a = W(), s = I("input"), l = W(), F(r, "class", "ms-form__label"), F(r, "for", i = e[5].key), F(s, "class", "ms-form__input"), F(s, "type", "text"), F(s, "placeholder", c = e[5].label), F(s, "name", u = e[5].key), F(n, "class", "ms-form__group"), F(t, "class", "ms-modal__custom-field-container")
                        },
                        m: function(i, c) {
                            R(i, t, c), C(t, n), C(n, r), C(r, o), C(n, a), C(n, s), G(s, e[0].customFields[e[5].key]), C(t, l), d || (f = B(s, "input", m), d = !0)
                        },
                        p: function(t, n) {
                            e = t, 2 & n && p !== (p = e[5].label + "") && V(o, p), 2 & n && i !== (i = e[5].key) && F(r, "for", i), 2 & n && c !== (c = e[5].label) && F(s, "placeholder", c), 2 & n && u !== (u = e[5].key) && F(s, "name", u), 3 & n && s.value !== e[0].customFields[e[5].key] && G(s, e[0].customFields[e[5].key])
                        },
                        d: function(e) {
                            e && O(t), d = !1, f()
                        }
                    }
                }

                function Mn(e) {
                    var t, n = !0 !== e[5].hidden && Cn(e);
                    return {
                        c: function() {
                            n && n.c(), t = N()
                        },
                        m: function(e, r) {
                            n && n.m(e, r), R(e, t, r)
                        },
                        p: function(e, r) {
                            !0 !== e[5].hidden ? n ? n.p(e, r) : ((n = Cn(e)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
                        },
                        d: function(e) {
                            n && n.d(e), e && O(t)
                        }
                    }
                }

                function Ln(e) {
                    for (var t, n, r, o, i, a, c, u, d, f = e[1], p = [], m = 0; m < f.length; m += 1) p[m] = Mn(kn(e, f, m));
                    return {
                        c: function() {
                            t = I("div"), (n = I("h2")).textContent = "Profile Information", r = W(), o = I("div"), (i = I("button")).textContent = "Save", a = W(), c = I("form");
                            for (var e = 0; e < p.length; e += 1) p[e].c();
                            F(n, "class", "ms-modal__title ms-modal__title--profile"), F(i, "class", "ms-modal__save-button"), F(o, "class", "ms-modal__action-container"), F(t, "class", "ms-modal__title-container"), F(c, "class", "ms-form"), F(c, "action", ""), F(c, "method", "post"), F(c, "autocomplete", "off")
                        },
                        m: function(s, l) {
                            R(s, t, l), C(t, n), C(t, r), C(t, o), C(o, i), R(s, a, l), R(s, c, l);
                            for (var f = 0; f < p.length; f += 1) p[f].m(c, null);
                            u || (d = [B(i, "click", e[2]), B(c, "submit", j(J(e[2])))], u = !0)
                        },
                        p: function(e, t) {
                            var n = s(t, 1)[0];
                            if (3 & n) {
                                f = e[1];
                                var r = void 0;
                                for (r = 0; r < f.length; r += 1) {
                                    var o = kn(e, f, r);
                                    p[r] ? p[r].p(o, n) : (p[r] = Mn(o), p[r].c(), p[r].m(c, null))
                                }
                                for (; r < p.length; r += 1) p[r].d(1);
                                p.length = f.length
                            }
                        },
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t), e && O(a), e && O(c), D(p, e), u = !1, v(d)
                        }
                    }
                }

                function Hn(e, t, n) {
                    var r = t.customFields,
                        o = t.member,
                        s = t.profileLoader;
                    return e.$$set = function(e) {
                        "customFields" in e && n(1, r = e.customFields), "member" in e && n(0, o = e.member), "profileLoader" in e && n(3, s = e.profileLoader)
                    }, [o, r, function(e) {
                        return i(this, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n(3, s = !0), [4, window.$memberstackDom.updateMember({
                                            customFields: o.customFields
                                        })];
                                    case 1:
                                        return e.sent(), n(3, s = !1), [2]
                                }
                            }))
                        }))
                    }, s, function(e) {
                        o.customFields[e.key] = this.value, n(0, o)
                    }]
                }
                var Tn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Hn, Ln, w, {
                            customFields: 1,
                            member: 0,
                            profileLoader: 3
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Rn(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "m14 7h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 0.9-2 2v10c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2zm-9-2c0-1.66 1.34-3 3-3s3 1.34 3 3v2h-6v-2zm9 14h-12v-10h12v10zm-6-3c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2z"), F(t, "fill", "none"), F(t, "viewBox", "0 0 16 21"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var On = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, Rn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function Dn(e, t, n) {
                    var r = e.slice();
                    return r[16] = t[n], r
                }

                function In(e) {
                    var t;
                    return {
                        c: function() {
                            t = K("Change Password")
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function Un(e) {
                    var t;
                    return {
                        c: function() {
                            t = K("Set Password")
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function Kn(e) {
                    for (var t, n, r, o = [], i = new Map, a = e[4].authProviders, s = function(e) {
                            return e[16].provider
                        }, c = 0; c < a.length; c += 1) {
                        var u = Dn(e, a, c),
                            l = s(u);
                        i.set(l, o[c] = Bn(l, u))
                    }
                    return {
                        c: function() {
                            (t = I("p")).textContent = "Connect Additional Accounts", n = W(), r = I("div");
                            for (var e = 0; e < o.length; e += 1) o[e].c();
                            F(t, "class", "ms-form__label"), F(r, "class", "ms-modal__social")
                        },
                        m: function(e, i) {
                            R(e, t, i), R(e, n, i), R(e, r, i);
                            for (var a = 0; a < o.length; a += 1) o[a].m(r, null)
                        },
                        p: function(e, t) {
                            210 & t && (a = e[4].authProviders, o = Pe(o, t, s, 1, e, a, i, r, Ae, Bn, null, Dn))
                        },
                        d: function(e) {
                            e && O(t), e && O(n), e && O(r);
                            for (var i = 0; i < o.length; i += 1) o[i].d()
                        }
                    }
                }

                function Wn(e) {
                    var t, n, r, o, i, a, s, c, u, l, d = e[16].name + "";

                    function f() {
                        return e[14](e[16])
                    }
                    return {
                        c: function() {
                            t = I("button"), n = I("img"), i = W(), a = I("span"), s = K("Connect with "), c = K(d), y(n.src, r = e[16].icon) || F(n, "src", r), F(n, "alt", o = e[16].name), F(t, "class", "ms-modal__social-button"), F(t, "type", "button")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n), C(t, i), C(t, a), C(a, s), C(a, c), u || (l = B(t, "click", f), u = !0)
                        },
                        p: function(t, i) {
                            e = t, 16 & i && !y(n.src, r = e[16].icon) && F(n, "src", r), 16 & i && o !== (o = e[16].name) && F(n, "alt", o), 16 & i && d !== (d = e[16].name + "") && V(c, d)
                        },
                        d: function(e) {
                            e && O(t), u = !1, l()
                        }
                    }
                }

                function Nn(e) {
                    var t, n, r, o, i, a, s, c, u, l, d = e[16].name + "";

                    function f() {
                        return e[13](e[16])
                    }
                    return {
                        c: function() {
                            t = I("button"), n = I("img"), i = W(), a = I("span"), s = K("Disconnect "), c = K(d), y(n.src, r = e[16].icon) || F(n, "src", r), F(n, "alt", o = e[16].name), F(t, "class", "ms-modal__social-button"), z(t, "background-color", "#F6F6F6"), F(t, "type", "button")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n), C(t, i), C(t, a), C(a, s), C(a, c), u || (l = B(t, "click", f), u = !0)
                        },
                        p: function(t, i) {
                            e = t, 16 & i && !y(n.src, r = e[16].icon) && F(n, "src", r), 16 & i && o !== (o = e[16].name) && F(n, "alt", o), 16 & i && d !== (d = e[16].name + "") && V(c, d)
                        },
                        d: function(e) {
                            e && O(t), u = !1, l()
                        }
                    }
                }

                function Bn(e, t) {
                    var n, r, o;

                    function i() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return t[9].apply(t, c([t[16]], s(e), !1))
                    }

                    function a(e, t) {
                        return 18 & t && (r = null), null == r && (r = !!e[1].auth.providers.some(i)), r ? Nn : Wn
                    }
                    var u = a(t, -1),
                        l = u(t);
                    return {
                        key: e,
                        first: null,
                        c: function() {
                            n = I("div"), l.c(), o = W(), F(n, "class", "ms-modal__social-buttons"), this.first = n
                        },
                        m: function(e, t) {
                            R(e, n, t), l.m(n, null), C(n, o)
                        },
                        p: function(e, r) {
                            u === (u = a(t = e, r)) && l ? l.p(t, r) : (l.d(1), (l = u(t)) && (l.c(), l.m(n, o)))
                        },
                        d: function(e) {
                            e && O(n), l.d()
                        }
                    }
                }

                function Jn(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b, _, S, x, $, E, A;

                    function P(t) {
                        e[10](t)
                    }

                    function k(t) {
                        e[11](t)
                    }
                    var M = {};

                    function L(e, t) {
                        return e[1].auth.hasPassword ? In : Un
                    }
                    void 0 !== e[3] && (M.emailInputValid = e[3]), void 0 !== e[2] && (M.emailValue = e[2]), d = new vt({
                        props: M
                    }), ie.push((function() {
                        return ke(d, "emailInputValid", P)
                    })), ie.push((function() {
                        return ke(d, "emailValue", k)
                    })), b = new On({});
                    var H = L(e),
                        T = H(e),
                        D = e[4].authProviders.length > 0 && Kn(e);
                    return {
                        c: function() {
                            t = I("div"), (n = I("h2")).textContent = "Security", r = W(), o = I("div"), i = I("button"), a = K("Save"), u = W(), l = I("form"), Ce(d.$$.fragment), m = W(), h = I("div"), (g = I("label")).textContent = "Password", w = W(), y = I("button"), Ce(b.$$.fragment), _ = W(), T.c(), S = W(), D && D.c(), x = N(), F(n, "class", "ms-modal__title ms-modal__title--profile"), F(i, "class", "ms-modal__save-button"), i.disabled = c = !e[3], F(o, "class", "ms-modal__action-container"), F(t, "class", "ms-modal__title-container"), F(l, "class", "ms-form"), F(l, "action", ""), F(l, "method", "post"), F(l, "autocomplete", "off"), F(g, "class", "ms-form__label"), F(g, "for", "setPassword"), F(y, "data-cy", "change-password-btn"), F(y, "class", "ms-modal__outline-button"), F(y, "name", "setPassword"), F(h, "class", "ms-form__group")
                        },
                        m: function(s, c) {
                            R(s, t, c), C(t, n), C(t, r), C(t, o), C(o, i), C(i, a), R(s, u, c), R(s, l, c), Me(d, l, null), R(s, m, c), R(s, h, c), C(h, g), C(h, w), C(h, y), Me(b, y, null), C(y, _), T.m(y, null), R(s, S, c), D && D.m(s, c), R(s, x, c), $ = !0, E || (A = [B(i, "click", e[5]), B(l, "submit", j(J(e[5]))), B(y, "click", e[12])], E = !0)
                        },
                        p: function(e, t) {
                            var n = s(t, 1)[0];
                            (!$ || 8 & n && c !== (c = !e[3])) && (i.disabled = c);
                            var r = {};
                            !f && 8 & n && (f = !0, r.emailInputValid = e[3], de((function() {
                                return f = !1
                            }))), !p && 4 & n && (p = !0, r.emailValue = e[2], de((function() {
                                return p = !1
                            }))), d.$set(r), H !== (H = L(e)) && (T.d(1), (T = H(e)) && (T.c(), T.m(y, null))), e[4].authProviders.length > 0 ? D ? D.p(e, n) : ((D = Kn(e)).c(), D.m(x.parentNode, x)) : D && (D.d(1), D = null)
                        },
                        i: function(e) {
                            $ || (Se(d.$$.fragment, e), Se(b.$$.fragment, e), $ = !0)
                        },
                        o: function(e) {
                            xe(d.$$.fragment, e), xe(b.$$.fragment, e), $ = !1
                        },
                        d: function(e) {
                            e && O(t), e && O(u), e && O(l), Le(d), e && O(m), e && O(h), Le(b), T.d(), e && O(S), D && D.d(e), e && O(x), E = !1, v(A)
                        }
                    }
                }

                function jn(e, t, n) {
                    var r;
                    b(e, Ie, (function(e) {
                        return n(4, r = e)
                    }));
                    var s = t.displayProfile,
                        c = t.member,
                        u = t.emailValue,
                        l = t.profileLoader;
                    r.authProviders.sort((function(e, t) {
                        return m(e) === m(t) ? e.order - t.order : m(e) ? -1 : 1
                    }));
                    var d = !1;

                    function f(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, i, s;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        n(8, l = !0), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, window.$memberstackDom.disconnectProvider({
                                            provider: e
                                        })];
                                    case 2:
                                        return t = a.sent(), r = t.data, i = t._internalUseOnly.message, n(1, c = o(o({}, c), {
                                            auth: o(o({}, c.auth), {
                                                providers: r.providers
                                            })
                                        })), window.$memberstackDom._showMessage(i, !1), n(8, l = !1), [3, 4];
                                    case 3:
                                        return s = a.sent(), window.$memberstackDom._showMessage(s.message, !0), n(8, l = !1), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }

                    function p(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r;
                            return a(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        console.log("connect", e), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, window.$memberstackDom.connectProvider({
                                            provider: e
                                        })];
                                    case 2:
                                        return t = i.sent().data, n(1, c = o(o({}, c), {
                                            auth: o(o({}, c.auth), {
                                                providers: t.providers
                                            })
                                        })), window.$memberstackDom._showMessage(t.message, !1), [3, 4];
                                    case 3:
                                        return r = i.sent(), window.$memberstackDom._showMessage(r.message, !0), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }

                    function m(e) {
                        return c.auth.providers.some((function(t) {
                            return t.provider === e.provider
                        }))
                    }
                    return e.$$set = function(e) {
                        "displayProfile" in e && n(0, s = e.displayProfile), "member" in e && n(1, c = e.member), "emailValue" in e && n(2, u = e.emailValue), "profileLoader" in e && n(8, l = e.profileLoader)
                    }, [s, c, u, d, r, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var e, t;
                            return a(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!d || !u) return [2];
                                        n(8, l = !0), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, window.$memberstackDom.updateMemberAuth({
                                            email: u
                                        })];
                                    case 2:
                                        return e = r.sent()._internalUseOnly.message, window.$memberstackDom._showMessage(e, !1), n(8, l = !1), [3, 4];
                                    case 3:
                                        return t = r.sent(), window.$memberstackDom._showMessage(t.message, !0), n(8, l = !1), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, f, p, l, function(e, t) {
                        return t.provider === e.provider
                    }, function(e) {
                        n(3, d = e)
                    }, function(e) {
                        n(2, u = e)
                    }, function() {
                        return n(0, s = "changePassword")
                    }, function(e) {
                        return f(e.provider)
                    }, function(e) {
                        return p(e.provider)
                    }]
                }
                var Fn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, jn, Jn, w, {
                            displayProfile: 0,
                            member: 1,
                            emailValue: 2,
                            profileLoader: 8
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Vn(e) {
                    var t;
                    return {
                        c: function() {
                            t = K("Change Password")
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function Gn(e) {
                    var t;
                    return {
                        c: function() {
                            t = K("Set Password")
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function zn(e) {
                    var t, n, r, o;

                    function i(t) {
                        e[11](t)
                    }

                    function a(t) {
                        e[12](t)
                    }
                    var s = {
                        passwordLabel: "Current Password",
                        passwordPlaceholder: "Enter a strong password"
                    };
                    return void 0 !== e[2] && (s.passwordValue = e[2]), void 0 !== e[5] && (s.passwordInputValid = e[5]), t = new Pt({
                        props: s
                    }), ie.push((function() {
                        return ke(t, "passwordValue", i)
                    })), ie.push((function() {
                        return ke(t, "passwordInputValid", a)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), o = !0
                        },
                        p: function(e, o) {
                            var i = {};
                            !n && 4 & o && (n = !0, i.passwordValue = e[2], de((function() {
                                return n = !1
                            }))), !r && 32 & o && (r = !0, i.passwordInputValid = e[5], de((function() {
                                return r = !1
                            }))), t.$set(i)
                        },
                        i: function(e) {
                            o || (Se(t.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function qn(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b, _, S, x, $, E, A, P;

                    function k(e, t) {
                        return e[1].auth.hasPassword ? Vn : Gn
                    }
                    i = new nn({});
                    var M = k(e),
                        L = M(e),
                        H = e[1].auth.hasPassword && zn(e);

                    function T(t) {
                        e[13](t)
                    }

                    function D(t) {
                        e[14](t)
                    }
                    var U = {
                        passwordLabel: "New Password",
                        passwordPlaceholder: "Enter a strong password"
                    };

                    function N(t) {
                        e[15](t)
                    }

                    function V(t) {
                        e[16](t)
                    }
                    void 0 !== e[3] && (U.passwordValue = e[3]), void 0 !== e[6] && (U.passwordInputValid = e[6]), w = new Pt({
                        props: U
                    }), ie.push((function() {
                        return ke(w, "passwordValue", T)
                    })), ie.push((function() {
                        return ke(w, "passwordInputValid", D)
                    }));
                    var G = {
                        passwordLabel: "Confirm New Password",
                        passwordPlaceholder: "Enter a strong password"
                    };
                    return void 0 !== e[4] && (G.passwordValue = e[4]), void 0 !== e[7] && (G.passwordInputValid = e[7]), S = new Pt({
                        props: G
                    }), ie.push((function() {
                        return ke(S, "passwordValue", N)
                    })), ie.push((function() {
                        return ke(S, "passwordInputValid", V)
                    })), {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("div"), o = I("button"), Ce(i.$$.fragment), a = W(), c = I("h2"), L.c(), u = W(), l = I("div"), d = I("button"), f = K("Save"), m = W(), h = I("form"), H && H.c(), g = W(), Ce(w.$$.fragment), _ = W(), Ce(S.$$.fragment), F(r, "class", "ms-modal__profile-back"), F(c, "class", "ms-modal__title ms-modal__title--profile"), F(n, "class", "ms-modal__title-group"), F(d, "class", "ms-modal__save-button"), d.disabled = p = e[1].auth.hasPassword && !e[5] || !e[6] || !e[7], F(l, "class", "ms-modal__action-container"), F(t, "class", "ms-modal__title-container"), F(h, "class", "ms-form"), F(h, "action", ""), F(h, "method", "post"), F(h, "autocomplete", "off")
                        },
                        m: function(s, p) {
                            R(s, t, p), C(t, n), C(n, r), C(r, o), Me(i, o, null), C(n, a), C(n, c), L.m(c, null), C(t, u), C(t, l), C(l, d), C(d, f), R(s, m, p), R(s, h, p), H && H.m(h, null), C(h, g), Me(w, h, null), C(h, _), Me(S, h, null), E = !0, A || (P = [B(o, "click", e[10]), B(d, "click", e[8]), B(h, "submit", j(J(e[8])))], A = !0)
                        },
                        p: function(e, t) {
                            var n = s(t, 1)[0];
                            M !== (M = k(e)) && (L.d(1), (L = M(e)) && (L.c(), L.m(c, null))), (!E || 226 & n && p !== (p = e[1].auth.hasPassword && !e[5] || !e[6] || !e[7])) && (d.disabled = p), e[1].auth.hasPassword ? H ? (H.p(e, n), 2 & n && Se(H, 1)) : ((H = zn(e)).c(), Se(H, 1), H.m(h, g)) : H && (be(), xe(H, 1, 1, (function() {
                                H = null
                            })), _e());
                            var r = {};
                            !y && 8 & n && (y = !0, r.passwordValue = e[3], de((function() {
                                return y = !1
                            }))), !b && 64 & n && (b = !0, r.passwordInputValid = e[6], de((function() {
                                return b = !1
                            }))), w.$set(r);
                            var o = {};
                            !x && 16 & n && (x = !0, o.passwordValue = e[4], de((function() {
                                return x = !1
                            }))), !$ && 128 & n && ($ = !0, o.passwordInputValid = e[7], de((function() {
                                return $ = !1
                            }))), S.$set(o)
                        },
                        i: function(e) {
                            E || (Se(i.$$.fragment, e), Se(H), Se(w.$$.fragment, e), Se(S.$$.fragment, e), E = !0)
                        },
                        o: function(e) {
                            xe(i.$$.fragment, e), xe(H), xe(w.$$.fragment, e), xe(S.$$.fragment, e), E = !1
                        },
                        d: function(e) {
                            e && O(t), Le(i), L.d(), e && O(m), e && O(h), H && H.d(), Le(w), Le(S), A = !1, v(P)
                        }
                    }
                }

                function Yn(e, t, n) {
                    var r = t.displayProfile,
                        o = t.profileLoader,
                        s = t.member,
                        c = "",
                        u = "",
                        l = "",
                        d = !1,
                        f = !1,
                        p = !1;
                    return e.$$set = function(e) {
                        "displayProfile" in e && n(0, r = e.displayProfile), "profileLoader" in e && n(9, o = e.profileLoader), "member" in e && n(1, s = e.member)
                    }, [r, s, c, u, l, d, f, p, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var e, t, r;
                            return a(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (s.auth.hasPassword && !d && !f && !p) return [2];
                                        if (!s.auth.hasPassword && !f && !p) return [2];
                                        n(9, o = !0), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 6, , 7]), e = void 0, s.auth.hasPassword ? [4, window.$memberstackDom.updateMemberAuth({
                                            oldPassword: c,
                                            newPassword: u
                                        })] : [3, 3];
                                    case 2:
                                        return t = i.sent()._internalUseOnly.message, e = t, [3, 5];
                                    case 3:
                                        return [4, window.$memberstackDom.setPassword({
                                            password: u
                                        })];
                                    case 4:
                                        t = i.sent()._internalUseOnly.message, n(1, s.auth.hasPassword = !0, s), e = t, i.label = 5;
                                    case 5:
                                        return window.$memberstackDom._showMessage(e, !1), n(2, c = ""), n(3, u = ""), n(4, l = ""), n(9, o = !1), [3, 7];
                                    case 6:
                                        return r = i.sent(), window.$memberstackDom._showMessage(r.message, !0), n(9, o = !1), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }, o, function() {
                        return n(0, r = "security")
                    }, function(e) {
                        n(2, c = e)
                    }, function(e) {
                        n(5, d = e)
                    }, function(e) {
                        n(3, u = e)
                    }, function(e) {
                        n(6, f = e)
                    }, function(e) {
                        n(4, l = e)
                    }, function(e) {
                        n(7, p = e)
                    }]
                }
                var Zn = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Yn, qn, w, {
                            displayProfile: 0,
                            profileLoader: 9,
                            member: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Xn(e, t) {
                    var n = void 0 === t ? {} : t,
                        r = n.delay,
                        o = void 0 === r ? 0 : r,
                        i = n.duration,
                        a = void 0 === i ? 400 : i,
                        s = n.easing,
                        c = void 0 === s ? f : s,
                        u = +getComputedStyle(e).opacity;
                    return {
                        delay: o,
                        duration: a,
                        easing: c,
                        css: function(e) {
                            return "opacity: ".concat(e * u)
                        }
                    }
                }

                function Qn(e) {
                    var t, n, r, o;
                    return n = new Fe({}), {
                        c: function() {
                            t = I("div"), Ce(n.$$.fragment), F(t, "class", "ms__profile__loader")
                        },
                        m: function(e, r) {
                            R(e, t, r), Me(n, t, null), o = !0
                        },
                        p: l,
                        i: function(e) {
                            o || (Se(n.$$.fragment, e), le((function() {
                                r || (r = Ee(t, Xn, {}, !0)), r.run(1)
                            })), o = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), r || (r = Ee(t, Xn, {}, !1)), r.run(0), o = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n), e && r && r.end()
                        }
                    }
                }
                var er = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, Qn, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function tr(e) {
                    var t, n, r, o, i, a, c, u, l, d, f = e[2];
                    f && (n = new f({}));
                    var p = e[1];
                    return p && (a = new p({})), {
                        c: function() {
                            t = I("button"), n && Ce(n.$$.fragment), r = W(), o = K(e[0]), i = W(), a && Ce(a.$$.fragment), F(t, "class", c = "ms-modal__regular-button " + (e[5].class || "")), z(t, "background", e[4])
                        },
                        m: function(s, c) {
                            R(s, t, c), n && Me(n, t, null), C(t, r), C(t, o), C(t, i), a && Me(a, t, null), u = !0, l || (d = B(t, "click", (function() {
                                g(e[3]) && e[3].apply(this, arguments)
                            })), l = !0)
                        },
                        p: function(i, l) {
                            var d = s(l, 1)[0];
                            if (f !== (f = (e = i)[2])) {
                                if (n) {
                                    be();
                                    var m = n;
                                    xe(m.$$.fragment, 1, 0, (function() {
                                        Le(m, 1)
                                    })), _e()
                                }
                                f ? (Ce((n = new f({})).$$.fragment), Se(n.$$.fragment, 1), Me(n, t, r)) : n = null
                            }
                            if ((!u || 1 & d) && V(o, e[0]), p !== (p = e[1])) {
                                if (a) {
                                    be();
                                    var h = a;
                                    xe(h.$$.fragment, 1, 0, (function() {
                                        Le(h, 1)
                                    })), _e()
                                }
                                p ? (Ce((a = new p({})).$$.fragment), Se(a.$$.fragment, 1), Me(a, t, null)) : a = null
                            }(!u || 32 & d && c !== (c = "ms-modal__regular-button " + (e[5].class || ""))) && F(t, "class", c), (!u || 16 & d) && z(t, "background", e[4])
                        },
                        i: function(e) {
                            u || (n && Se(n.$$.fragment, e), a && Se(a.$$.fragment, e), u = !0)
                        },
                        o: function(e) {
                            n && xe(n.$$.fragment, e), a && xe(a.$$.fragment, e), u = !1
                        },
                        d: function(e) {
                            e && O(t), n && Le(n), a && Le(a), l = !1, d()
                        }
                    }
                }

                function nr(e, t, n) {
                    var r, o = ["buttonText", "buttonRightIcon", "buttonLeftIcon", "onClick"],
                        i = x(t, o);
                    b(e, Ie, (function(e) {
                        return n(6, r = e)
                    }));
                    var a = t.buttonText,
                        s = void 0 === a ? "Submit" : a,
                        c = t.buttonRightIcon,
                        u = void 0 === c ? null : c,
                        l = t.buttonLeftIcon,
                        d = void 0 === l ? null : l,
                        f = t.onClick,
                        m = void 0 === f ? function() {} : f,
                        h = "rgb(41, 98, 255)";
                    return r.branding.colors.lightMode.primaryButton && (h = r.branding.colors.lightMode.primaryButton), e.$$set = function(e) {
                        t = p(p({}, t), S(e)), n(5, i = x(t, o)), "buttonText" in e && n(0, s = e.buttonText), "buttonRightIcon" in e && n(1, u = e.buttonRightIcon), "buttonLeftIcon" in e && n(2, d = e.buttonLeftIcon), "onClick" in e && n(3, m = e.onClick)
                    }, [s, u, d, m, h, i]
                }
                var rr = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, nr, tr, w, {
                            buttonText: 0,
                            buttonRightIcon: 1,
                            buttonLeftIcon: 2,
                            onClick: 3
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function or(e) {
                    var t, n, r, o, i;
                    return {
                        c: function() {
                            t = I("button"), n = K(e[0]), F(t, "class", r = "ms-modal__text-button " + e[3].class), z(t, "color", e[2])
                        },
                        m: function(r, a) {
                            R(r, t, a), C(t, n), o || (i = B(t, "click", (function() {
                                g(e[1]) && e[1].apply(this, arguments)
                            })), o = !0)
                        },
                        p: function(o, i) {
                            var a = s(i, 1)[0];
                            e = o, 1 & a && V(n, e[0]), 8 & a && r !== (r = "ms-modal__text-button " + e[3].class) && F(t, "class", r), 4 & a && z(t, "color", e[2])
                        },
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t), o = !1, i()
                        }
                    }
                }

                function ir(e, t, n) {
                    var r, o = ["buttonText", "onClick"],
                        i = x(t, o);
                    b(e, Ie, (function(e) {
                        return n(4, r = e)
                    }));
                    var a = t.buttonText,
                        s = void 0 === a ? "Submit" : a,
                        c = t.onClick,
                        u = void 0 === c ? function() {} : c,
                        l = "rgb(41, 98, 255)";
                    return r.branding.colors.lightMode.primaryButton && (l = r.branding.colors.lightMode.primaryButton), e.$$set = function(e) {
                        t = p(p({}, t), S(e)), n(3, i = x(t, o)), "buttonText" in e && n(0, s = e.buttonText), "onClick" in e && n(1, u = e.onClick)
                    }, [s, u, l, i]
                }
                var ar = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, ir, or, w, {
                            buttonText: 0,
                            onClick: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function sr(e, t, n) {
                    var r = e.slice();
                    return r[8] = t[n], r[10] = n, r
                }

                function cr(e) {
                    var t, n, r;
                    return n = new rr({
                        props: {
                            onClick: e[3],
                            class: "ms-modal__regular-button--margin-right ms-modal__regular-button--left-icon",
                            buttonText: "Manage Subscriptions",
                            buttonLeftIcon: yn
                        }
                    }), {
                        c: function() {
                            t = I("div"), Ce(n.$$.fragment), z(t, "display", "flex"), z(t, "flex-wrap", "wrap")
                        },
                        m: function(e, o) {
                            R(e, t, o), Me(n, t, null), r = !0
                        },
                        p: l,
                        i: function(e) {
                            r || (Se(n.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n)
                        }
                    }
                }

                function ur(e) {
                    for (var t, n, r, o, i = e[1], a = [], s = 0; s < i.length; s += 1) a[s] = lr(sr(e, i, s));
                    var c = function(e) {
                        return xe(a[e], 1, 1, (function() {
                            a[e] = null
                        }))
                    };
                    return {
                        c: function() {
                            (t = I("h3")).textContent = "Free Plans", n = W();
                            for (var e = 0; e < a.length; e += 1) a[e].c();
                            r = N(), z(t, "font-size", "18px")
                        },
                        m: function(e, i) {
                            R(e, t, i), R(e, n, i);
                            for (var s = 0; s < a.length; s += 1) a[s].m(e, i);
                            R(e, r, i), o = !0
                        },
                        p: function(e, t) {
                            if (22 & t) {
                                i = e[1];
                                var n = void 0;
                                for (n = 0; n < i.length; n += 1) {
                                    var o = sr(e, i, n);
                                    a[n] ? (a[n].p(o, t), Se(a[n], 1)) : (a[n] = lr(o), a[n].c(), Se(a[n], 1), a[n].m(r.parentNode, r))
                                }
                                for (be(), n = i.length; n < a.length; n += 1) c(n);
                                _e()
                            }
                        },
                        i: function(e) {
                            if (!o) {
                                for (var t = 0; t < i.length; t += 1) Se(a[t]);
                                o = !0
                            }
                        },
                        o: function(e) {
                            a = a.filter(Boolean);
                            for (var t = 0; t < a.length; t += 1) xe(a[t]);
                            o = !1
                        },
                        d: function(e) {
                            e && O(t), e && O(n), D(a, e), e && O(r)
                        }
                    }
                }

                function lr(e) {
                    var t, n, r, o, i, a, u, l, d = e[2].plans.find(f).name + "";

                    function f() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return e[6].apply(e, c([e[8]], s(t), !1))
                    }

                    function p() {
                        return e[7](e[8])
                    }
                    return a = new ar({
                        props: {
                            buttonText: "Remove",
                            onClick: p
                        }
                    }), {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("b"), o = K(d), i = W(), Ce(a.$$.fragment), u = W(), F(t, "class", "ms-modal__card")
                        },
                        m: function(e, s) {
                            R(e, t, s), C(t, n), C(n, r), C(r, o), C(t, i), Me(a, t, null), C(t, u), l = !0
                        },
                        p: function(t, n) {
                            e = t, (!l || 6 & n) && d !== (d = e[2].plans.find(f).name + "") && V(o, d);
                            var r = {};
                            2 & n && (r.onClick = p), a.$set(r)
                        },
                        i: function(e) {
                            l || (Se(a.$$.fragment, e), l = !0)
                        },
                        o: function(e) {
                            xe(a.$$.fragment, e), l = !1
                        },
                        d: function(e) {
                            e && O(t), Le(a)
                        }
                    }
                }

                function dr(e) {
                    var t;
                    return {
                        c: function() {
                            (t = I("div")).textContent = "You currently have no plans."
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function fr(e) {
                    var t, n, r, o, i, a, c = e[0].stripeCustomerId && cr(e),
                        u = e[1].length > 0 && ur(e),
                        l = !e[0].stripeCustomerId && 0 === e[1].length && dr();
                    return {
                        c: function() {
                            (t = I("div")).innerHTML = '<h2 class="ms-modal__title ms-modal__title--profile">Plans</h2>', n = W(), c && c.c(), r = W(), u && u.c(), o = W(), l && l.c(), i = N(), F(t, "class", "ms-modal__title-container")
                        },
                        m: function(e, s) {
                            R(e, t, s), R(e, n, s), c && c.m(e, s), R(e, r, s), u && u.m(e, s), R(e, o, s), l && l.m(e, s), R(e, i, s), a = !0
                        },
                        p: function(e, t) {
                            var n = s(t, 1)[0];
                            e[0].stripeCustomerId ? c ? (c.p(e, n), 1 & n && Se(c, 1)) : ((c = cr(e)).c(), Se(c, 1), c.m(r.parentNode, r)) : c && (be(), xe(c, 1, 1, (function() {
                                c = null
                            })), _e()), e[1].length > 0 ? u ? (u.p(e, n), 2 & n && Se(u, 1)) : ((u = ur(e)).c(), Se(u, 1), u.m(o.parentNode, o)) : u && (be(), xe(u, 1, 1, (function() {
                                u = null
                            })), _e()), e[0].stripeCustomerId || 0 !== e[1].length ? l && (l.d(1), l = null) : l || ((l = dr()).c(), l.m(i.parentNode, i))
                        },
                        i: function(e) {
                            a || (Se(c), Se(u), a = !0)
                        },
                        o: function(e) {
                            xe(c), xe(u), a = !1
                        },
                        d: function(e) {
                            e && O(t), e && O(n), c && c.d(e), e && O(r), u && u.d(e), e && O(o), l && l.d(e), e && O(i)
                        }
                    }
                }

                function pr(e, t, n) {
                    var r, o;
                    b(e, Ie, (function(e) {
                        return n(2, o = e)
                    }));
                    var s = t.profileLoader,
                        c = t.member;

                    function u(e) {
                        return i(this, void 0, void 0, (function() {
                            var t;
                            return a(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        n(5, s = !0), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, 4, 5]), [4, window.$memberstackDom.removePlan({
                                            planId: e
                                        })];
                                    case 2:
                                        return r.sent(), n(0, c.planConnections = c.planConnections.filter((function(t) {
                                            return t.planId !== e
                                        })), c), [3, 5];
                                    case 3:
                                        return t = r.sent(), console.log(t), window.$memberstackDom._showMessage(t.message, !0), [3, 5];
                                    case 4:
                                        return n(5, s = !1), [7];
                                    case 5:
                                        return [2]
                                }
                            }))
                        }))
                    }
                    return e.$$set = function(e) {
                        "profileLoader" in e && n(5, s = e.profileLoader), "member" in e && n(0, c = e.member)
                    }, e.$$.update = function() {
                        1 & e.$$.dirty && n(1, r = c.planConnections.filter((function(e) {
                            return "FREE" === e.type
                        })))
                    }, [c, r, o, function(e) {
                        return i(this, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n(5, s = !0), [4, window.$memberstackDom.launchStripeCustomerPortal({
                                            priceIds: [],
                                            autoRedirect: !0
                                        })];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    }, u, s, function(e, t) {
                        return t.id === e.planId
                    }, function(e) {
                        return u(e.planId)
                    }]
                }
                var mr = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, pr, fr, w, {
                            profileLoader: 5,
                            member: 0
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function hr(e) {
                    var t, n;
                    return t = new er({}), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function vr(e) {
                    var t, n, r, o;

                    function i(t) {
                        e[18](t)
                    }

                    function a(t) {
                        e[19](t)
                    }
                    var s = {};
                    return void 0 !== e[1] && (s.member = e[1]), void 0 !== e[5] && (s.profileLoader = e[5]), t = new mr({
                        props: s
                    }), ie.push((function() {
                        return ke(t, "member", i)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", a)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), o = !0
                        },
                        p: function(e, o) {
                            var i = {};
                            !n && 2 & o && (n = !0, i.member = e[1], de((function() {
                                return n = !1
                            }))), !r && 32 & o && (r = !0, i.profileLoader = e[5], de((function() {
                                return r = !1
                            }))), t.$set(i)
                        },
                        i: function(e) {
                            o || (Se(t.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function gr(e) {
                    var t, n, r, o, i;

                    function a(t) {
                        e[15](t)
                    }

                    function s(t) {
                        e[16](t)
                    }

                    function c(t) {
                        e[17](t)
                    }
                    var u = {};
                    return void 0 !== e[0] && (u.displayProfile = e[0]), void 0 !== e[5] && (u.profileLoader = e[5]), void 0 !== e[1] && (u.member = e[1]), t = new Zn({
                        props: u
                    }), ie.push((function() {
                        return ke(t, "displayProfile", a)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", s)
                    })), ie.push((function() {
                        return ke(t, "member", c)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), i = !0
                        },
                        p: function(e, i) {
                            var a = {};
                            !n && 1 & i && (n = !0, a.displayProfile = e[0], de((function() {
                                return n = !1
                            }))), !r && 32 & i && (r = !0, a.profileLoader = e[5], de((function() {
                                return r = !1
                            }))), !o && 2 & i && (o = !0, a.member = e[1], de((function() {
                                return o = !1
                            }))), t.$set(a)
                        },
                        i: function(e) {
                            i || (Se(t.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function wr(e) {
                    var t, n, r, o, i;

                    function a(t) {
                        e[12](t)
                    }

                    function s(t) {
                        e[13](t)
                    }

                    function c(t) {
                        e[14](t)
                    }
                    var u = {};
                    return void 0 !== e[0] && (u.displayProfile = e[0]), void 0 !== e[5] && (u.profileLoader = e[5]), void 0 !== e[1] && (u.member = e[1]), t = new Fn({
                        props: u
                    }), ie.push((function() {
                        return ke(t, "displayProfile", a)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", s)
                    })), ie.push((function() {
                        return ke(t, "member", c)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), i = !0
                        },
                        p: function(e, i) {
                            var a = {};
                            !n && 1 & i && (n = !0, a.displayProfile = e[0], de((function() {
                                return n = !1
                            }))), !r && 32 & i && (r = !0, a.profileLoader = e[5], de((function() {
                                return r = !1
                            }))), !o && 2 & i && (o = !0, a.member = e[1], de((function() {
                                return o = !1
                            }))), t.$set(a)
                        },
                        i: function(e) {
                            i || (Se(t.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function yr(e) {
                    var t, n, r, o;

                    function i(t) {
                        e[10](t)
                    }

                    function a(t) {
                        e[11](t)
                    }
                    var s = {
                        customFields: e[6].customFields
                    };
                    return void 0 !== e[1] && (s.member = e[1]), void 0 !== e[5] && (s.profileLoader = e[5]), t = new Tn({
                        props: s
                    }), ie.push((function() {
                        return ke(t, "member", i)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", a)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), o = !0
                        },
                        p: function(e, o) {
                            var i = {};
                            64 & o && (i.customFields = e[6].customFields), !n && 2 & o && (n = !0, i.member = e[1], de((function() {
                                return n = !1
                            }))), !r && 32 & o && (r = !0, i.profileLoader = e[5], de((function() {
                                return r = !1
                            }))), t.$set(i)
                        },
                        i: function(e) {
                            o || (Se(t.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function br(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, v, g, w, y, b, _, S, x = e[1].auth.email + "";

                    function $(t) {
                        e[7](t)
                    }

                    function E(t) {
                        e[8](t)
                    }

                    function A(t) {
                        e[9](t)
                    }
                    a = new Xe({
                        props: {
                            closeModal: e[3]
                        }
                    });
                    var P = {
                        onSuccessLogout: e[2],
                        hideProfileSection: e[4]
                    };
                    void 0 !== e[1] && (P.member = e[1]), void 0 !== e[0] && (P.displayProfile = e[0]), void 0 !== e[5] && (P.profileLoader = e[5]), d = new Pn({
                        props: P
                    }), ie.push((function() {
                        return ke(d, "member", $)
                    })), ie.push((function() {
                        return ke(d, "displayProfile", E)
                    })), ie.push((function() {
                        return ke(d, "profileLoader", A)
                    }));
                    var k = e[5] && hr(),
                        M = [yr, wr, gr, vr],
                        L = [];

                    function H(e, t) {
                        return "profile" === e[0] ? 0 : "security" === e[0] ? 1 : "changePassword" === e[0] ? 2 : "plans" === e[0] ? 3 : -1
                    }
                    return ~(w = H(e)) && (y = L[w] = M[w](e)), _ = new Tt({}), {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("div"), o = K(x), i = W(), Ce(a.$$.fragment), c = W(), u = I("div"), l = I("div"), Ce(d.$$.fragment), h = W(), v = I("div"), k && k.c(), g = W(), y && y.c(), b = W(), Ce(_.$$.fragment), F(n, "class", "ms-modal__header"), F(l, "class", "ms-modal__content-left"), F(v, "class", "ms-modal__content-right"), F(u, "class", "ms-modal__content ms-modal__content--profile"), F(t, "class", "ms-modal ms-modal--profile"), F(t, "id", "ProfileModal")
                        },
                        m: function(e, s) {
                            R(e, t, s), C(t, n), C(n, r), C(r, o), C(n, i), Me(a, n, null), C(t, c), C(t, u), C(u, l), Me(d, l, null), C(u, h), C(u, v), k && k.m(v, null), C(v, g), ~w && L[w].m(v, null), C(t, b), Me(_, t, null), S = !0
                        },
                        p: function(e, t) {
                            var n = s(t, 1)[0];
                            (!S || 2 & n) && x !== (x = e[1].auth.email + "") && V(o, x);
                            var r = {};
                            8 & n && (r.closeModal = e[3]), a.$set(r);
                            var i = {};
                            4 & n && (i.onSuccessLogout = e[2]), 16 & n && (i.hideProfileSection = e[4]), !f && 2 & n && (f = !0, i.member = e[1], de((function() {
                                return f = !1
                            }))), !p && 1 & n && (p = !0, i.displayProfile = e[0], de((function() {
                                return p = !1
                            }))), !m && 32 & n && (m = !0, i.profileLoader = e[5], de((function() {
                                return m = !1
                            }))), d.$set(i), e[5] ? k ? 32 & n && Se(k, 1) : ((k = hr()).c(), Se(k, 1), k.m(v, g)) : k && (be(), xe(k, 1, 1, (function() {
                                k = null
                            })), _e());
                            var c = w;
                            (w = H(e)) === c ? ~w && L[w].p(e, n) : (y && (be(), xe(L[c], 1, 1, (function() {
                                L[c] = null
                            })), _e()), ~w ? ((y = L[w]) ? y.p(e, n) : (y = L[w] = M[w](e)).c(), Se(y, 1), y.m(v, null)) : y = null)
                        },
                        i: function(e) {
                            S || (Se(a.$$.fragment, e), Se(d.$$.fragment, e), Se(k), Se(y), Se(_.$$.fragment, e), S = !0)
                        },
                        o: function(e) {
                            xe(a.$$.fragment, e), xe(d.$$.fragment, e), xe(k), xe(y), xe(_.$$.fragment, e), S = !1
                        },
                        d: function(e) {
                            e && O(t), Le(a), Le(d), k && k.d(), ~w && L[w].d(), Le(_)
                        }
                    }
                }

                function _r(e, t, n) {
                    var r;
                    b(e, Ie, (function(e) {
                        return n(6, r = e)
                    }));
                    var o = t.onSuccessLogout,
                        i = t.closeModal,
                        a = t.displayProfile,
                        s = void 0 === a ? "profile" : a,
                        c = t.member,
                        u = !1,
                        l = !1;
                    return r.customFields.filter((function(e) {
                        return !e.hidden
                    })).length || (s = "security", u = !0), e.$$set = function(e) {
                        "onSuccessLogout" in e && n(2, o = e.onSuccessLogout), "closeModal" in e && n(3, i = e.closeModal), "displayProfile" in e && n(0, s = e.displayProfile), "member" in e && n(1, c = e.member)
                    }, [s, c, o, i, u, l, r, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(0, s = e)
                    }, function(e) {
                        n(5, l = e)
                    }, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(5, l = e)
                    }, function(e) {
                        n(0, s = e)
                    }, function(e) {
                        n(5, l = e)
                    }, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(0, s = e)
                    }, function(e) {
                        n(5, l = e)
                    }, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(5, l = e)
                    }]
                }
                var Sr = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, _r, br, w, {
                            onSuccessLogout: 2,
                            closeModal: 3,
                            displayProfile: 0,
                            member: 1
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function xr(e) {
                    var t, n;
                    return {
                        c: function() {
                            t = U("svg"), F(n = U("path"), "fill", "currentColor"), F(n, "d", "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"), F(t, "fill", "none"), F(t, "transform", "rotate(180)"), F(t, "viewBox", "0 0 8 12"), F(t, "xmlns", "http://www.w3.org/2000/svg")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n)
                        },
                        p: l,
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }
                var $r = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, null, xr, w, {}), n
                    }
                    return r(t, e), t
                }(Re);

                function Er(e) {
                    var t, n, r, o, i, a, s, c, u;
                    return r = new hn({}), a = new $r({}), {
                        c: function() {
                            t = I("button"), n = I("div"), Ce(r.$$.fragment), o = K(" Profile"), i = W(), Ce(a.$$.fragment), F(t, "class", "ms-modal__profile-option"), q(t, "ms-modal__profile-option--active", "profile" === e[0])
                        },
                        m: function(l, d) {
                            R(l, t, d), C(t, n), Me(r, n, null), C(n, o), C(t, i), Me(a, t, null), s = !0, c || (u = B(t, "click", e[7]), c = !0)
                        },
                        p: function(e, n) {
                            1 & n && q(t, "ms-modal__profile-option--active", "profile" === e[0])
                        },
                        i: function(e) {
                            s || (Se(r.$$.fragment, e), Se(a.$$.fragment, e), s = !0)
                        },
                        o: function(e) {
                            xe(r.$$.fragment, e), xe(a.$$.fragment, e), s = !1
                        },
                        d: function(e) {
                            e && O(t), Le(r), Le(a), c = !1, u()
                        }
                    }
                }

                function Ar(e) {
                    var t, n, r, o, i, a, s, c, u;
                    return r = new yn({}), a = new $r({}), {
                        c: function() {
                            t = I("button"), n = I("div"), Ce(r.$$.fragment), o = K(" Billing Portal"), i = W(), Ce(a.$$.fragment), F(t, "class", "ms-modal__profile-option")
                        },
                        m: function(l, d) {
                            R(l, t, d), C(t, n), Me(r, n, null), C(n, o), C(t, i), Me(a, t, null), s = !0, c || (u = B(t, "click", e[4]), c = !0)
                        },
                        p: l,
                        i: function(e) {
                            s || (Se(r.$$.fragment, e), Se(a.$$.fragment, e), s = !0)
                        },
                        o: function(e) {
                            xe(r.$$.fragment, e), xe(a.$$.fragment, e), s = !1
                        },
                        d: function(e) {
                            e && O(t), Le(r), Le(a), c = !1, u()
                        }
                    }
                }

                function Pr(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b, _, S = !e[2] && Er(e);
                    i = new gn({}), u = new $r({});
                    var x = e[1].stripeCustomerId && Ar(e);
                    return m = new _n({}), w = new $r({}), {
                        c: function() {
                            t = I("div"), S && S.c(), n = W(), r = I("button"), o = I("div"), Ce(i.$$.fragment), a = K(" Security"), c = W(), Ce(u.$$.fragment), l = W(), x && x.c(), d = W(), f = I("button"), p = I("div"), Ce(m.$$.fragment), h = K(" Logout"), g = W(), Ce(w.$$.fragment), F(r, "class", "ms-modal__profile-option"), q(r, "ms-modal__profile-option--active", "security" === e[0] || "changePassword" === e[0]), F(f, "class", "ms-modal__profile-option"), F(t, "class", "ms-modal__mobile-profile-nav")
                        },
                        m: function(s, v) {
                            R(s, t, v), S && S.m(t, null), C(t, n), C(t, r), C(r, o), Me(i, o, null), C(o, a), C(r, c), Me(u, r, null), C(t, l), x && x.m(t, null), C(t, d), C(t, f), C(f, p), Me(m, p, null), C(p, h), C(f, g), Me(w, f, null), y = !0, b || (_ = [B(r, "click", e[8]), B(f, "click", e[3])], b = !0)
                        },
                        p: function(e, o) {
                            var i = s(o, 1)[0];
                            e[2] ? S && (be(), xe(S, 1, 1, (function() {
                                S = null
                            })), _e()) : S ? (S.p(e, i), 4 & i && Se(S, 1)) : ((S = Er(e)).c(), Se(S, 1), S.m(t, n)), 1 & i && q(r, "ms-modal__profile-option--active", "security" === e[0] || "changePassword" === e[0]), e[1].stripeCustomerId ? x ? (x.p(e, i), 2 & i && Se(x, 1)) : ((x = Ar(e)).c(), Se(x, 1), x.m(t, d)) : x && (be(), xe(x, 1, 1, (function() {
                                x = null
                            })), _e())
                        },
                        i: function(e) {
                            y || (Se(S), Se(i.$$.fragment, e), Se(u.$$.fragment, e), Se(x), Se(m.$$.fragment, e), Se(w.$$.fragment, e), y = !0)
                        },
                        o: function(e) {
                            xe(S), xe(i.$$.fragment, e), xe(u.$$.fragment, e), xe(x), xe(m.$$.fragment, e), xe(w.$$.fragment, e), y = !1
                        },
                        d: function(e) {
                            e && O(t), S && S.d(), Le(i), Le(u), x && x.d(), Le(m), Le(w), b = !1, v(_)
                        }
                    }
                }

                function kr(e, t, n) {
                    var r = t.member,
                        o = t.onSuccessLogout,
                        s = t.displayProfile,
                        c = t.profileLoader,
                        u = t.hideProfileSection,
                        l = Ie.subscribe((function(e) {
                            if (!e.initialValue) {
                                var t = document.getElementById("msOverlay"),
                                    n = document.createElement("style"),
                                    r = e.branding.colors.lightMode.primaryButton,
                                    o = ".ms-modal__profile-option:hover { color: ".concat(r, ";} .ms-modal__profile-option--active { color: ").concat(r, ";} .ms-modal__save-button { background: ").concat(r, ";} .ms-modal__save-button:disabled { background: ").concat(r, ";}");
                                n.appendChild(document.createTextNode(o)), t.appendChild(n)
                            }
                        }));
                    return re((function() {
                        l()
                    })), e.$$set = function(e) {
                        "member" in e && n(1, r = e.member), "onSuccessLogout" in e && n(6, o = e.onSuccessLogout), "displayProfile" in e && n(0, s = e.displayProfile), "profileLoader" in e && n(5, c = e.profileLoader), "hideProfileSection" in e && n(2, u = e.hideProfileSection)
                    }, [s, r, u, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var e, t, n, r;
                            return a(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, window.$memberstackDom.logout()];
                                    case 1:
                                        return e = i.sent(), t = e.data, n = e._internalUseOnly.message, window.$memberstackDom._showMessage(n, !1), o({
                                            type: "LOGOUT",
                                            data: t
                                        }), [3, 3];
                                    case 2:
                                        return r = i.sent(), window.$memberstackDom._showMessage(r.message, !0), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }, function(e) {
                        return i(this, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n(5, c = !0), [4, window.$memberstackDom.launchStripeCustomerPortal({
                                            priceIds: [],
                                            autoRedirect: !0
                                        })];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    }, c, o, function() {
                        return n(0, s = "profile")
                    }, function() {
                        return n(0, s = "security")
                    }]
                }
                var Cr = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, kr, Pr, w, {
                            member: 1,
                            onSuccessLogout: 6,
                            displayProfile: 0,
                            profileLoader: 5,
                            hideProfileSection: 2
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Mr(e, t, n) {
                    var r = e.slice();
                    return r[5] = t[n], r[6] = t, r[7] = n, r
                }

                function Lr(e) {
                    var t, n, r, o, i, a, s, c, u, l, d, f, p = e[5].label + "";

                    function m() {
                        e[4].call(s, e[5])
                    }
                    return {
                        c: function() {
                            t = I("div"), n = I("div"), r = I("label"), o = K(p), a = W(), s = I("input"), l = W(), F(r, "class", "ms-form__label"), F(r, "for", i = e[5].key), F(s, "class", "ms-form__input"), F(s, "type", "text"), F(s, "placeholder", c = e[5].label), F(s, "name", u = e[5].key), F(n, "class", "ms-form__group"), F(t, "class", "ms-modal__custom-field-container")
                        },
                        m: function(i, c) {
                            R(i, t, c), C(t, n), C(n, r), C(r, o), C(n, a), C(n, s), G(s, e[0].customFields[e[5].key]), C(t, l), d || (f = B(s, "input", m), d = !0)
                        },
                        p: function(t, n) {
                            e = t, 2 & n && p !== (p = e[5].label + "") && V(o, p), 2 & n && i !== (i = e[5].key) && F(r, "for", i), 2 & n && c !== (c = e[5].label) && F(s, "placeholder", c), 2 & n && u !== (u = e[5].key) && F(s, "name", u), 3 & n && s.value !== e[0].customFields[e[5].key] && G(s, e[0].customFields[e[5].key])
                        },
                        d: function(e) {
                            e && O(t), d = !1, f()
                        }
                    }
                }

                function Hr(e) {
                    var t, n = !0 !== e[5].hidden && Lr(e);
                    return {
                        c: function() {
                            n && n.c(), t = N()
                        },
                        m: function(e, r) {
                            n && n.m(e, r), R(e, t, r)
                        },
                        p: function(e, r) {
                            !0 !== e[5].hidden ? n ? n.p(e, r) : ((n = Lr(e)).c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
                        },
                        d: function(e) {
                            n && n.d(e), e && O(t)
                        }
                    }
                }

                function Tr(e) {
                    for (var t, n, r, o, i, a, c = e[1], u = [], d = 0; d < c.length; d += 1) u[d] = Hr(Mr(e, c, d));
                    return {
                        c: function() {
                            t = I("form");
                            for (var e = 0; e < u.length; e += 1) u[e].c();
                            n = W(), r = I("div"), (o = I("button")).textContent = "Save", F(t, "class", "ms-form"), F(t, "action", ""), F(t, "method", "post"), F(t, "autocomplete", "off"), F(o, "class", "ms-modal__save-button ms-modal__save-button--large"), F(r, "class", "ms-modal__action-container")
                        },
                        m: function(s, c) {
                            R(s, t, c);
                            for (var l = 0; l < u.length; l += 1) u[l].m(t, null);
                            R(s, n, c), R(s, r, c), C(r, o), i || (a = [B(t, "submit", j(J(e[2]))), B(o, "click", e[2])], i = !0)
                        },
                        p: function(e, n) {
                            var r = s(n, 1)[0];
                            if (3 & r) {
                                c = e[1];
                                var o = void 0;
                                for (o = 0; o < c.length; o += 1) {
                                    var i = Mr(e, c, o);
                                    u[o] ? u[o].p(i, r) : (u[o] = Hr(i), u[o].c(), u[o].m(t, null))
                                }
                                for (; o < u.length; o += 1) u[o].d(1);
                                u.length = c.length
                            }
                        },
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t), D(u, e), e && O(n), e && O(r), i = !1, v(a)
                        }
                    }
                }

                function Rr(e, t, n) {
                    var r = t.customFields,
                        o = t.member,
                        s = t.profileLoader;
                    return e.$$set = function(e) {
                        "customFields" in e && n(1, r = e.customFields), "member" in e && n(0, o = e.member), "profileLoader" in e && n(3, s = e.profileLoader)
                    }, [o, r, function(e) {
                        return i(this, void 0, void 0, (function() {
                            return a(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n(3, s = !0), [4, window.$memberstackDom.updateMember({
                                            customFields: o.customFields
                                        })];
                                    case 1:
                                        return e.sent(), n(3, s = !1), [2]
                                }
                            }))
                        }))
                    }, s, function(e) {
                        o.customFields[e.key] = this.value, n(0, o)
                    }]
                }
                var Or = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, Rr, Tr, w, {
                            customFields: 1,
                            member: 0,
                            profileLoader: 3
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Dr(e, t, n) {
                    var r = e.slice();
                    return r[16] = t[n], r
                }

                function Ir(e) {
                    var t;
                    return {
                        c: function() {
                            t = K("Change Password")
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function Ur(e) {
                    var t;
                    return {
                        c: function() {
                            t = K("Set Password")
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function Kr(e) {
                    for (var t, n, r, o = [], i = new Map, a = e[4].authProviders, s = function(e) {
                            return e[16].provider
                        }, c = 0; c < a.length; c += 1) {
                        var u = Dr(e, a, c),
                            l = s(u);
                        i.set(l, o[c] = Br(l, u))
                    }
                    return {
                        c: function() {
                            (t = I("p")).textContent = "Connect Additional Accounts", n = W(), r = I("div");
                            for (var e = 0; e < o.length; e += 1) o[e].c();
                            F(t, "class", "ms-form__label"), F(r, "class", "ms-modal__social")
                        },
                        m: function(e, i) {
                            R(e, t, i), R(e, n, i), R(e, r, i);
                            for (var a = 0; a < o.length; a += 1) o[a].m(r, null)
                        },
                        p: function(e, t) {
                            210 & t && (a = e[4].authProviders, o = Pe(o, t, s, 1, e, a, i, r, Ae, Br, null, Dr))
                        },
                        d: function(e) {
                            e && O(t), e && O(n), e && O(r);
                            for (var i = 0; i < o.length; i += 1) o[i].d()
                        }
                    }
                }

                function Wr(e) {
                    var t, n, r, o, i, a, s, c, u, l, d = e[16].name + "";

                    function f() {
                        return e[14](e[16])
                    }
                    return {
                        c: function() {
                            t = I("button"), n = I("img"), i = W(), a = I("span"), s = K("Connect with "), c = K(d), y(n.src, r = e[16].icon) || F(n, "src", r), F(n, "alt", o = e[16].name), F(t, "class", "ms-modal__social-button"), F(t, "type", "button")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n), C(t, i), C(t, a), C(a, s), C(a, c), u || (l = B(t, "click", f), u = !0)
                        },
                        p: function(t, i) {
                            e = t, 16 & i && !y(n.src, r = e[16].icon) && F(n, "src", r), 16 & i && o !== (o = e[16].name) && F(n, "alt", o), 16 & i && d !== (d = e[16].name + "") && V(c, d)
                        },
                        d: function(e) {
                            e && O(t), u = !1, l()
                        }
                    }
                }

                function Nr(e) {
                    var t, n, r, o, i, a, s, c, u, l, d = e[16].name + "";

                    function f() {
                        return e[13](e[16])
                    }
                    return {
                        c: function() {
                            t = I("button"), n = I("img"), i = W(), a = I("span"), s = K("Disconnect "), c = K(d), y(n.src, r = e[16].icon) || F(n, "src", r), F(n, "alt", o = e[16].name), F(t, "class", "ms-modal__social-button"), z(t, "background-color", "#F6F6F6"), F(t, "type", "button")
                        },
                        m: function(e, r) {
                            R(e, t, r), C(t, n), C(t, i), C(t, a), C(a, s), C(a, c), u || (l = B(t, "click", f), u = !0)
                        },
                        p: function(t, i) {
                            e = t, 16 & i && !y(n.src, r = e[16].icon) && F(n, "src", r), 16 & i && o !== (o = e[16].name) && F(n, "alt", o), 16 & i && d !== (d = e[16].name + "") && V(c, d)
                        },
                        d: function(e) {
                            e && O(t), u = !1, l()
                        }
                    }
                }

                function Br(e, t) {
                    var n, r, o;

                    function i() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return t[9].apply(t, c([t[16]], s(e), !1))
                    }

                    function a(e, t) {
                        return 18 & t && (r = null), null == r && (r = !!e[1].auth.providers.some(i)), r ? Nr : Wr
                    }
                    var u = a(t, -1),
                        l = u(t);
                    return {
                        key: e,
                        first: null,
                        c: function() {
                            n = I("div"), l.c(), o = W(), F(n, "class", "ms-modal__social-buttons"), this.first = n
                        },
                        m: function(e, t) {
                            R(e, n, t), l.m(n, null), C(n, o)
                        },
                        p: function(e, r) {
                            u === (u = a(t = e, r)) && l ? l.p(t, r) : (l.d(1), (l = u(t)) && (l.c(), l.m(n, o)))
                        },
                        d: function(e) {
                            e && O(n), l.d()
                        }
                    }
                }

                function Jr(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b, _, S;

                    function x(t) {
                        e[10](t)
                    }

                    function $(t) {
                        e[11](t)
                    }
                    var E = {};

                    function A(e, t) {
                        return e[1].auth.hasPassword ? Ir : Ur
                    }
                    void 0 !== e[3] && (E.emailInputValid = e[3]), void 0 !== e[2] && (E.emailValue = e[2]), n = new vt({
                        props: E
                    }), ie.push((function() {
                        return ke(n, "emailInputValid", x)
                    })), ie.push((function() {
                        return ke(n, "emailValue", $)
                    })), d = new On({});
                    var P = A(e),
                        k = P(e),
                        M = e[4].authProviders.length > 0 && Kr(e);
                    return {
                        c: function() {
                            t = I("form"), Ce(n.$$.fragment), i = W(), a = I("div"), (c = I("label")).textContent = "Password", u = W(), l = I("button"), Ce(d.$$.fragment), f = W(), k.c(), p = W(), M && M.c(), m = W(), h = I("div"), g = I("button"), w = K("Save"), F(t, "class", "ms-form"), F(t, "action", ""), F(t, "method", "post"), F(t, "autocomplete", "off"), F(c, "class", "ms-form__label"), F(c, "for", "setPassword"), F(l, "class", "ms-modal__outline-button ms-modal__outline-button--mobile"), F(l, "name", "setPassword"), F(a, "class", "ms-form__group"), F(g, "class", "ms-modal__save-button ms-modal__save-button--large"), g.disabled = y = !e[3], F(h, "class", "ms-modal__action-container")
                        },
                        m: function(r, o) {
                            R(r, t, o), Me(n, t, null), R(r, i, o), R(r, a, o), C(a, c), C(a, u), C(a, l), Me(d, l, null), C(l, f), k.m(l, null), R(r, p, o), M && M.m(r, o), R(r, m, o), R(r, h, o), C(h, g), C(g, w), b = !0, _ || (S = [B(t, "submit", j(J(e[5]))), B(l, "click", e[12]), B(g, "click", e[5])], _ = !0)
                        },
                        p: function(e, t) {
                            var i = s(t, 1)[0],
                                a = {};
                            !r && 8 & i && (r = !0, a.emailInputValid = e[3], de((function() {
                                return r = !1
                            }))), !o && 4 & i && (o = !0, a.emailValue = e[2], de((function() {
                                return o = !1
                            }))), n.$set(a), P !== (P = A(e)) && (k.d(1), (k = P(e)) && (k.c(), k.m(l, null))), e[4].authProviders.length > 0 ? M ? M.p(e, i) : ((M = Kr(e)).c(), M.m(m.parentNode, m)) : M && (M.d(1), M = null), (!b || 8 & i && y !== (y = !e[3])) && (g.disabled = y)
                        },
                        i: function(e) {
                            b || (Se(n.$$.fragment, e), Se(d.$$.fragment, e), b = !0)
                        },
                        o: function(e) {
                            xe(n.$$.fragment, e), xe(d.$$.fragment, e), b = !1
                        },
                        d: function(e) {
                            e && O(t), Le(n), e && O(i), e && O(a), Le(d), k.d(), e && O(p), M && M.d(e), e && O(m), e && O(h), _ = !1, v(S)
                        }
                    }
                }

                function jr(e, t, n) {
                    var r;
                    b(e, Ie, (function(e) {
                        return n(4, r = e)
                    }));
                    var s = t.displayProfile,
                        c = t.member,
                        u = t.emailValue,
                        l = t.profileLoader;
                    r.authProviders.sort((function(e, t) {
                        return m(e) === m(t) ? e.order - t.order : m(e) ? -1 : 1
                    }));
                    var d = !1;

                    function f(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r, i, s;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        n(8, l = !0), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, window.$memberstackDom.disconnectProvider({
                                            provider: e
                                        })];
                                    case 2:
                                        return t = a.sent(), r = t.data, i = t._internalUseOnly.message, n(1, c = o(o({}, c), {
                                            auth: o(o({}, c.auth), {
                                                providers: r.providers
                                            })
                                        })), window.$memberstackDom._showMessage(i, !1), n(8, l = !1), [3, 4];
                                    case 3:
                                        return s = a.sent(), window.$memberstackDom._showMessage(s.message, !0), n(8, l = !1), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }

                    function p(e) {
                        return i(this, void 0, void 0, (function() {
                            var t, r;
                            return a(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        console.log("connect", e), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, window.$memberstackDom.connectProvider({
                                            provider: e
                                        })];
                                    case 2:
                                        return t = i.sent().data, n(1, c = o(o({}, c), {
                                            auth: o(o({}, c.auth), {
                                                providers: t.providers
                                            })
                                        })), window.$memberstackDom._showMessage(t.message, !1), [3, 4];
                                    case 3:
                                        return r = i.sent(), window.$memberstackDom._showMessage(r.message, !0), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }

                    function m(e) {
                        return c.auth.providers.some((function(t) {
                            return t.provider === e.provider
                        }))
                    }
                    return e.$$set = function(e) {
                        "displayProfile" in e && n(0, s = e.displayProfile), "member" in e && n(1, c = e.member), "emailValue" in e && n(2, u = e.emailValue), "profileLoader" in e && n(8, l = e.profileLoader)
                    }, [s, c, u, d, r, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var e, t;
                            return a(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!d || !u) return [2];
                                        n(8, l = !0), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, window.$memberstackDom.updateMemberAuth({
                                            email: u
                                        })];
                                    case 2:
                                        return e = r.sent()._internalUseOnly.message, window.$memberstackDom._showMessage(e, !1), n(8, l = !1), [3, 4];
                                    case 3:
                                        return t = r.sent(), window.$memberstackDom._showMessage(t.message, !0), n(8, l = !1), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, f, p, l, function(e, t) {
                        return t.provider === e.provider
                    }, function(e) {
                        n(3, d = e)
                    }, function(e) {
                        n(2, u = e)
                    }, function() {
                        return n(0, s = "changePassword")
                    }, function(e) {
                        return f(e.provider)
                    }, function(e) {
                        return p(e.provider)
                    }]
                }
                var Fr = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, jr, Jr, w, {
                            displayProfile: 0,
                            member: 1,
                            emailValue: 2,
                            profileLoader: 8
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Vr(e) {
                    var t, n, r, o;

                    function i(t) {
                        e[9](t)
                    }

                    function a(t) {
                        e[10](t)
                    }
                    var s = {
                        passwordLabel: "Current Password",
                        passwordPlaceholder: "Enter a strong password"
                    };
                    return void 0 !== e[1] && (s.passwordValue = e[1]), void 0 !== e[4] && (s.passwordInputValid = e[4]), t = new Pt({
                        props: s
                    }), ie.push((function() {
                        return ke(t, "passwordValue", i)
                    })), ie.push((function() {
                        return ke(t, "passwordInputValid", a)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), o = !0
                        },
                        p: function(e, o) {
                            var i = {};
                            !n && 2 & o && (n = !0, i.passwordValue = e[1], de((function() {
                                return n = !1
                            }))), !r && 16 & o && (r = !0, i.passwordInputValid = e[4], de((function() {
                                return r = !1
                            }))), t.$set(i)
                        },
                        i: function(e) {
                            o || (Se(t.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function Gr(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, g, w, y, b = e[0].auth.hasPassword && Vr(e);

                    function _(t) {
                        e[11](t)
                    }

                    function S(t) {
                        e[12](t)
                    }
                    var x = {
                        passwordLabel: "New Password",
                        passwordPlaceholder: "Enter a strong password"
                    };

                    function $(t) {
                        e[13](t)
                    }

                    function E(t) {
                        e[14](t)
                    }
                    void 0 !== e[2] && (x.passwordValue = e[2]), void 0 !== e[5] && (x.passwordInputValid = e[5]), r = new Pt({
                        props: x
                    }), ie.push((function() {
                        return ke(r, "passwordValue", _)
                    })), ie.push((function() {
                        return ke(r, "passwordInputValid", S)
                    }));
                    var A = {
                        passwordLabel: "Confirm New Password",
                        passwordPlaceholder: "Enter a strong password"
                    };
                    return void 0 !== e[3] && (A.passwordValue = e[3]), void 0 !== e[6] && (A.passwordInputValid = e[6]), c = new Pt({
                        props: A
                    }), ie.push((function() {
                        return ke(c, "passwordValue", $)
                    })), ie.push((function() {
                        return ke(c, "passwordInputValid", E)
                    })), {
                        c: function() {
                            t = I("form"), b && b.c(), n = W(), Ce(r.$$.fragment), a = W(), Ce(c.$$.fragment), d = W(), f = I("div"), p = I("button"), m = K("Save"), F(t, "class", "ms-form"), F(t, "action", ""), F(t, "method", "post"), F(t, "autocomplete", "off"), F(p, "class", "ms-modal__save-button ms-modal__save-button--large"), p.disabled = h = e[0].auth.hasPassword && !e[4] || !e[5] || !e[6], F(f, "class", "ms-modal__action-container")
                        },
                        m: function(o, i) {
                            R(o, t, i), b && b.m(t, null), C(t, n), Me(r, t, null), C(t, a), Me(c, t, null), R(o, d, i), R(o, f, i), C(f, p), C(p, m), g = !0, w || (y = [B(t, "submit", j(J(e[7]))), B(p, "click", e[7])], w = !0)
                        },
                        p: function(e, a) {
                            var d = s(a, 1)[0];
                            e[0].auth.hasPassword ? b ? (b.p(e, d), 1 & d && Se(b, 1)) : ((b = Vr(e)).c(), Se(b, 1), b.m(t, n)) : b && (be(), xe(b, 1, 1, (function() {
                                b = null
                            })), _e());
                            var f = {};
                            !o && 4 & d && (o = !0, f.passwordValue = e[2], de((function() {
                                return o = !1
                            }))), !i && 32 & d && (i = !0, f.passwordInputValid = e[5], de((function() {
                                return i = !1
                            }))), r.$set(f);
                            var m = {};
                            !u && 8 & d && (u = !0, m.passwordValue = e[3], de((function() {
                                return u = !1
                            }))), !l && 64 & d && (l = !0, m.passwordInputValid = e[6], de((function() {
                                return l = !1
                            }))), c.$set(m), (!g || 113 & d && h !== (h = e[0].auth.hasPassword && !e[4] || !e[5] || !e[6])) && (p.disabled = h)
                        },
                        i: function(e) {
                            g || (Se(b), Se(r.$$.fragment, e), Se(c.$$.fragment, e), g = !0)
                        },
                        o: function(e) {
                            xe(b), xe(r.$$.fragment, e), xe(c.$$.fragment, e), g = !1
                        },
                        d: function(e) {
                            e && O(t), b && b.d(), Le(r), Le(c), e && O(d), e && O(f), w = !1, v(y)
                        }
                    }
                }

                function zr(e, t, n) {
                    var r = t.profileLoader,
                        o = t.member,
                        s = "",
                        c = "",
                        u = "",
                        l = !1,
                        d = !1,
                        f = !1;
                    return e.$$set = function(e) {
                        "profileLoader" in e && n(8, r = e.profileLoader), "member" in e && n(0, o = e.member)
                    }, [o, s, c, u, l, d, f, function(e) {
                        return i(this, void 0, void 0, (function() {
                            var e, t, i;
                            return a(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (o.auth.hasPassword && !l && !d && !f) return [2];
                                        if (!o.auth.hasPassword && !d && !f) return [2];
                                        n(8, r = !0), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 6, , 7]), e = void 0, o.auth.hasPassword ? [4, window.$memberstackDom.updateMemberAuth({
                                            oldPassword: s,
                                            newPassword: c
                                        })] : [3, 3];
                                    case 2:
                                        return t = a.sent()._internalUseOnly.message, e = t, [3, 5];
                                    case 3:
                                        return [4, window.$memberstackDom.setPassword({
                                            password: c
                                        })];
                                    case 4:
                                        t = a.sent()._internalUseOnly.message, n(0, o.auth.hasPassword = !0, o), e = t, a.label = 5;
                                    case 5:
                                        return window.$memberstackDom._showMessage(e, !1), n(1, s = ""), n(2, c = ""), n(3, u = ""), n(8, r = !1), [3, 7];
                                    case 6:
                                        return i = a.sent(), window.$memberstackDom._showMessage(i.message, !0), n(8, r = !1), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }, r, function(e) {
                        n(1, s = e)
                    }, function(e) {
                        n(4, l = e)
                    }, function(e) {
                        n(2, c = e)
                    }, function(e) {
                        n(5, d = e)
                    }, function(e) {
                        n(3, u = e)
                    }, function(e) {
                        n(6, f = e)
                    }]
                }
                var qr = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, zr, Gr, w, {
                            profileLoader: 8,
                            member: 0
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function Yr(e) {
                    var t, n, r, o, i, a;
                    return r = new nn({}), {
                        c: function() {
                            t = I("div"), n = I("button"), Ce(r.$$.fragment), F(t, "class", "ms-modal__profile-back--mobile")
                        },
                        m: function(s, c) {
                            R(s, t, c), C(t, n), Me(r, n, null), o = !0, i || (a = B(n, "click", e[8]), i = !0)
                        },
                        p: l,
                        i: function(e) {
                            o || (Se(r.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(r.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            e && O(t), Le(r), i = !1, a()
                        }
                    }
                }

                function Zr(e) {
                    var t, n;
                    return t = new et({}), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        p: l,
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function Xr(e) {
                    var t, n, r;
                    return {
                        c: function() {
                            y((t = I("img")).src, n = e[7].branding.logo) || F(t, "src", n), F(t, "alt", r = e[7].name)
                        },
                        m: function(e, n) {
                            R(e, t, n)
                        },
                        p: function(e, o) {
                            128 & o && !y(t.src, n = e[7].branding.logo) && F(t, "src", n), 128 & o && r !== (r = e[7].name) && F(t, "alt", r)
                        },
                        i: l,
                        o: l,
                        d: function(e) {
                            e && O(t)
                        }
                    }
                }

                function Qr(e) {
                    var t, n;
                    return t = new er({}), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function eo(e) {
                    var t, n, r, o, i;

                    function a(t) {
                        e[17](t)
                    }

                    function s(t) {
                        e[18](t)
                    }

                    function c(t) {
                        e[19](t)
                    }
                    var u = {};
                    return void 0 !== e[0] && (u.displayProfile = e[0]), void 0 !== e[6] && (u.profileLoader = e[6]), void 0 !== e[1] && (u.member = e[1]), t = new qr({
                        props: u
                    }), ie.push((function() {
                        return ke(t, "displayProfile", a)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", s)
                    })), ie.push((function() {
                        return ke(t, "member", c)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), i = !0
                        },
                        p: function(e, i) {
                            var a = {};
                            !n && 1 & i && (n = !0, a.displayProfile = e[0], de((function() {
                                return n = !1
                            }))), !r && 64 & i && (r = !0, a.profileLoader = e[6], de((function() {
                                return r = !1
                            }))), !o && 2 & i && (o = !0, a.member = e[1], de((function() {
                                return o = !1
                            }))), t.$set(a)
                        },
                        i: function(e) {
                            i || (Se(t.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function to(e) {
                    var t, n, r, o, i;

                    function a(t) {
                        e[14](t)
                    }

                    function s(t) {
                        e[15](t)
                    }

                    function c(t) {
                        e[16](t)
                    }
                    var u = {};
                    return void 0 !== e[0] && (u.displayProfile = e[0]), void 0 !== e[6] && (u.profileLoader = e[6]), void 0 !== e[1] && (u.member = e[1]), t = new Fr({
                        props: u
                    }), ie.push((function() {
                        return ke(t, "displayProfile", a)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", s)
                    })), ie.push((function() {
                        return ke(t, "member", c)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), i = !0
                        },
                        p: function(e, i) {
                            var a = {};
                            !n && 1 & i && (n = !0, a.displayProfile = e[0], de((function() {
                                return n = !1
                            }))), !r && 64 & i && (r = !0, a.profileLoader = e[6], de((function() {
                                return r = !1
                            }))), !o && 2 & i && (o = !0, a.member = e[1], de((function() {
                                return o = !1
                            }))), t.$set(a)
                        },
                        i: function(e) {
                            i || (Se(t.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function no(e) {
                    var t, n, r, o;

                    function i(t) {
                        e[12](t)
                    }

                    function a(t) {
                        e[13](t)
                    }
                    var s = {
                        customFields: e[7].customFields
                    };
                    return void 0 !== e[1] && (s.member = e[1]), void 0 !== e[6] && (s.profileLoader = e[6]), t = new Or({
                        props: s
                    }), ie.push((function() {
                        return ke(t, "member", i)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", a)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), o = !0
                        },
                        p: function(e, o) {
                            var i = {};
                            128 & o && (i.customFields = e[7].customFields), !n && 2 & o && (n = !0, i.member = e[1], de((function() {
                                return n = !1
                            }))), !r && 64 & o && (r = !0, i.profileLoader = e[6], de((function() {
                                return r = !1
                            }))), t.$set(i)
                        },
                        i: function(e) {
                            o || (Se(t.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function ro(e) {
                    var t, n, r, o, i;

                    function a(t) {
                        e[9](t)
                    }

                    function s(t) {
                        e[10](t)
                    }

                    function c(t) {
                        e[11](t)
                    }
                    var u = {
                        onSuccessLogout: e[3],
                        hideProfileSection: e[5]
                    };
                    return void 0 !== e[1] && (u.member = e[1]), void 0 !== e[0] && (u.displayProfile = e[0]), void 0 !== e[6] && (u.profileLoader = e[6]), t = new Cr({
                        props: u
                    }), ie.push((function() {
                        return ke(t, "member", a)
                    })), ie.push((function() {
                        return ke(t, "displayProfile", s)
                    })), ie.push((function() {
                        return ke(t, "profileLoader", c)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), i = !0
                        },
                        p: function(e, i) {
                            var a = {};
                            8 & i && (a.onSuccessLogout = e[3]), 32 & i && (a.hideProfileSection = e[5]), !n && 2 & i && (n = !0, a.member = e[1], de((function() {
                                return n = !1
                            }))), !r && 1 & i && (r = !0, a.displayProfile = e[0], de((function() {
                                return r = !1
                            }))), !o && 64 & i && (o = !0, a.profileLoader = e[6], de((function() {
                                return o = !1
                            }))), t.$set(a)
                        },
                        i: function(e) {
                            i || (Se(t.$$.fragment, e), i = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), i = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function oo(e) {
                    var t, n, r, o, i, a, c, u, l, d, f, p, m, h, v, g, w, y, b, _, S, x, $ = ("profile" === e[0] || "changePassword" === e[0] || "security" === e[0]) && Yr(e),
                        E = [Xr, Zr],
                        A = [];

                    function P(e, t) {
                        return e[7].branding.logo ? 0 : 1
                    }
                    a = P(e), c = A[a] = E[a](e), m = new Xe({
                        props: {
                            closeModal: e[4]
                        }
                    });
                    var k = e[6] && Qr(),
                        M = [ro, no, to, eo],
                        L = [];

                    function H(e, t) {
                        return "profile-nav" === e[0] ? 0 : "profile" === e[0] ? 1 : "security" === e[0] ? 2 : "changePassword" === e[0] ? 3 : -1
                    }
                    return ~(y = H(e)) && (b = L[y] = M[y](e)), S = new Tt({}), {
                        c: function() {
                            t = I("div"), n = I("div"), $ && $.c(), r = W(), o = I("div"), i = I("figure"), c.c(), u = W(), l = I("div"), d = I("b"), f = K(e[2]), p = W(), Ce(m.$$.fragment), h = W(), v = I("div"), g = I("div"), k && k.c(), w = W(), b && b.c(), _ = W(), Ce(S.$$.fragment), F(i, "class", "ms-modal__figure ms-modal__figure--mobile"), F(o, "class", "ms-modal__header--center"), F(n, "class", "ms-modal__header--mobile"), F(g, "class", "ms-modal__content--mobile"), F(v, "class", "ms-modal__content ms-modal__content--profile"), F(t, "class", "ms-modal ms-modal--profile"), F(t, "id", "MobileProfileModal")
                        },
                        m: function(e, s) {
                            R(e, t, s), C(t, n), $ && $.m(n, null), C(n, r), C(n, o), C(o, i), A[a].m(i, null), C(o, u), C(o, l), C(l, d), C(d, f), C(n, p), Me(m, n, null), C(t, h), C(t, v), C(v, g), k && k.m(g, null), C(g, w), ~y && L[y].m(g, null), C(t, _), Me(S, t, null), x = !0
                        },
                        p: function(e, t) {
                            var o = s(t, 1)[0];
                            "profile" === e[0] || "changePassword" === e[0] || "security" === e[0] ? $ ? ($.p(e, o), 1 & o && Se($, 1)) : (($ = Yr(e)).c(), Se($, 1), $.m(n, r)) : $ && (be(), xe($, 1, 1, (function() {
                                $ = null
                            })), _e());
                            var u = a;
                            (a = P(e)) === u ? A[a].p(e, o) : (be(), xe(A[u], 1, 1, (function() {
                                A[u] = null
                            })), _e(), (c = A[a]) ? c.p(e, o) : (c = A[a] = E[a](e)).c(), Se(c, 1), c.m(i, null)), (!x || 4 & o) && V(f, e[2]);
                            var l = {};
                            16 & o && (l.closeModal = e[4]), m.$set(l), e[6] ? k ? 64 & o && Se(k, 1) : ((k = Qr()).c(), Se(k, 1), k.m(g, w)) : k && (be(), xe(k, 1, 1, (function() {
                                k = null
                            })), _e());
                            var d = y;
                            (y = H(e)) === d ? ~y && L[y].p(e, o) : (b && (be(), xe(L[d], 1, 1, (function() {
                                L[d] = null
                            })), _e()), ~y ? ((b = L[y]) ? b.p(e, o) : (b = L[y] = M[y](e)).c(), Se(b, 1), b.m(g, null)) : b = null)
                        },
                        i: function(e) {
                            x || (Se($), Se(c), Se(m.$$.fragment, e), Se(k), Se(b), Se(S.$$.fragment, e), x = !0)
                        },
                        o: function(e) {
                            xe($), xe(c), xe(m.$$.fragment, e), xe(k), xe(b), xe(S.$$.fragment, e), x = !1
                        },
                        d: function(e) {
                            e && O(t), $ && $.d(), A[a].d(), Le(m), k && k.d(), ~y && L[y].d(), Le(S)
                        }
                    }
                }

                function io(e, t, n) {
                    var r;
                    b(e, Ie, (function(e) {
                        return n(7, r = e)
                    }));
                    var o = t.onSuccessLogout,
                        i = t.closeModal,
                        a = t.displayProfile,
                        s = void 0 === a ? "profile-nav" : a,
                        c = t.member,
                        u = t.profileTitle,
                        l = void 0 === u ? c.auth.email : u,
                        d = !1,
                        f = !1;
                    return r.customFields.filter((function(e) {
                        return !e.hidden
                    })).length || (s = "security", d = !0), e.$$set = function(e) {
                        "onSuccessLogout" in e && n(3, o = e.onSuccessLogout), "closeModal" in e && n(4, i = e.closeModal), "displayProfile" in e && n(0, s = e.displayProfile), "member" in e && n(1, c = e.member), "profileTitle" in e && n(2, l = e.profileTitle)
                    }, e.$$.update = function() {
                        3 & e.$$.dirty && ("profile-nav" === s ? n(2, l = c.auth.email) : "profile" === s ? n(2, l = "My Profile") : "security" === s ? n(2, l = "Security") : "changePassword" === s && (c.auth.hasPassword ? n(2, l = "Change Password") : n(2, l = "Set Password")))
                    }, [s, c, l, o, i, d, f, r, function() {
                        return n(0, s = "profile-nav")
                    }, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(0, s = e)
                    }, function(e) {
                        n(6, f = e)
                    }, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(6, f = e)
                    }, function(e) {
                        n(0, s = e)
                    }, function(e) {
                        n(6, f = e)
                    }, function(e) {
                        n(1, c = e)
                    }, function(e) {
                        n(0, s = e)
                    }, function(e) {
                        n(6, f = e)
                    }, function(e) {
                        n(1, c = e)
                    }]
                }
                var ao = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, io, oo, w, {
                            onSuccessLogout: 3,
                            closeModal: 4,
                            displayProfile: 0,
                            member: 1,
                            profileTitle: 2
                        }), n
                    }
                    return r(t, e), t
                }(Re);

                function so(e) {
                    M(e, "svelte-bbv5du", '@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");.svelte-bbv5du{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#msOverlay.svelte-bbv5du{position:fixed;display:flex;justify-content:center;align-items:center;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.5);z-index:99999;overflow:scroll;font-family:"Plus Jakarta Sans", sans-serif;padding:5vh 5vw}.--hide{display:none}.--flex-h-center{display:flex;align-items:center}.ms__loader{position:relative;z-index:10000000}#msLoader path{fill:#007ace}.ms__profile__loader{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:rgb(255 255 255 / 75%)}.ms-modal{box-sizing:border-box;margin:auto;min-width:0;position:relative;outline:none;background:white;border-radius:16px;box-shadow:2px 2px 12px rgb(0 0 0 / 10%);width:360px;color:rgb(10, 10, 10)}.ms-modal--profile{width:700px}.ms-modal__close{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;right:16px;z-index:10;line-height:0}.ms-modal__close button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__close button:hover{color:#0a0a0a}.ms-modal__back{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__back button{appearance:none;padding:0;outline:none;width:12px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__back button:hover, .ms-modal__profile-back button:hover{color:#0a0a0a}.ms-modal__back svg{height:12px}.ms-modal__profile-back button{appearance:none;padding:5px;margin-right:6px;outline:none;width:25px;height:25px;border:0;background:transparent;cursor:pointer;color:#5c5c5c;display:flex;align-items:stretch;justify-content:center}.ms-modal__profile-back--mobile{box-sizing:border-box;margin:0;min-width:0;position:absolute;top:16px;left:16px;z-index:10;line-height:0}.ms-modal__profile-back--mobile button{appearance:none;padding:0;outline:none;height:11px;width:7px;border:0;background:transparent;cursor:pointer;color:#5c5c5c}.ms-modal__profile-back--mobile button:hover{color:#0a0a0a}.ms-modal__header{display:flex;align-items:center;padding:12px}.ms-modal__header--mobile{display:flex;padding:42px 42px 16px 42px;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__header--center{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center;align-items:center}.ms-modal__content{padding:28px 28px 20px;width:100%;box-sizing:border-box;margin:0 auto}.ms-modal__content--profile{padding:0;display:flex;flex-wrap:wrap;align-content:stretch;align-items:stretch;border-top:1px solid #DDDDDD}.ms-modal__content-left{display:flex;flex-direction:column;align-items:flex-start;padding:20px;border-right:1px solid #DDDDDD;min-width:160px}.ms-modal__content-right{padding:20px;flex-grow:1;height:55vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__content--mobile{padding:12px;flex-grow:1;height:42vh;min-height:300px;overflow-y:auto;position:relative;transition:height 0.3s ease-in-out}.ms-modal__mobile-profile-nav{display:flex;flex-direction:column;align-content:center;align-items:stretch;flex-wrap:nowrap}.ms-modal__mobile-profile-nav button{display:flex;flex-direction:row;align-content:center;align-items:center;flex-wrap:nowrap;justify-content:space-between;padding:12px;width:100%;margin-bottom:10px}.ms-modal__figure{margin:8px auto;display:flex;position:relative;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;flex-shrink:0;line-height:1}.ms-modal__figure--profile{width:24px;height:24px;padding:0px;margin:0px 8px 0px 0px}.ms-modal__figure--mobile{margin:0px 0px 8px 0px}.ms-modal__figure img, .ms-modal__figure svg{width:auto;height:100%;max-height:42px;text-align:center;object-fit:cover;color:transparent}.ms-modal__title-container{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px}.ms-modal__title{margin-bottom:36px;margin-top:0;text-align:center;font-size:24px;line-height:32px;font-weight:700}.ms-modal__title--profile{margin-bottom:0px}.ms-modal__title-group{display:flex;align-items:center}.ms-modal__title--sub-text{margin-bottom:8px}.ms-modal__text{font-weight:500;font-size:16px;line-height:28px;text-align:center;margin:0 0 20px 0}.ms-modal__regular-button{color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__regular-button svg{height:16px;margin-left:6px}.ms-modal__regular-button--left-icon svg{margin-right:6px;margin-left:0px}.ms-modal__regular-button--right-icon svg{margin-left:6px;margin-right:0px}.ms-modal__regular-button--margin-right{margin-right:12px}.ms-modal__text-button{color:#fff;background-color:transparent;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer;display:flex;align-items:center}.ms-modal__card{box-shadow:0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0px 2px 2px rgba(0,0,0,0.04);padding:12px;display:flex;flex-direction:row;margin-bottom:12px;border:1px solid rgb(221, 221, 221);border-radius:10px;box-sizing:border-box;width:100%;cursor:default;background:rgb(255, 255, 255);align-items:center;justify-content:space-between}.ms-form{width:100%}.ms-form__group{margin-bottom:20px}.ms-form__flex{display:flex;justify-content:space-between;align-content:center}.ms-form__flex--centered{justify-content:center}.ms-form__label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:24px;font-weight:700;text-align:left}.ms-form__fieldset{display:flex;justify-content:space-between;padding:0;border:none}.ms-form__input{box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;font-size:16px;font-weight:400;padding:15px;width:100%}.ms-form__password-container{display:flex;justify-content:space-between;align-content:center;box-sizing:border-box;margin:0px;border:1px solid rgb(201, 201, 201);border-radius:6px;width:100%}.ms-form__password-container:focus-within{border:1px solid rgb(0, 68, 252);outline:rgb(0, 68, 252) solid 1px}.ms-form__password-container:focus-within input{outline:none;border-color:rgb(201, 201, 201);box-shadow:none}.ms-form__input--password{border:none}.ms-form__input--token{font-weight:500;font-size:24.19px;line-height:32px;text-align:center;color:#000000;padding:9px;max-width:42px}.ms-form__show-toggle{cursor:pointer;background:transparent;border-radius:0px 6px 6px 0px;padding:0px 8px;display:flex;align-items:center}.ms-form__eye{display:block;width:22px}.ms-form__eye-slash{display:block;width:22px}.ms-form__error{font-weight:500;font-size:12px;line-height:16px;color:#e40023;margin-top:4px;display:flex;align-items:baseline}.ms-form__error svg{width:10px;height:10px;margin-right:5px}.ms-form__label--right a{color:rgb(10, 10, 10) !important;text-decoration:none;font-weight:400}.ms-form__button{border-radius:6px;font-weight:700;font-size:16px;padding-left:22px;padding-right:22px;height:52px;border:none;display:block;width:100%;background-color:rgb(41, 98, 255);color:#fff;transition:background-color 0.5s ease;cursor:pointer}.ms-form__button:hover{background-color:#0745ff}.ms-form__button:disabled{background-color:#96C0FE;color:#fff;pointer-events:none;display:flex;justify-content:center;align-items:center}.ms-form__button--text{background-color:transparent;padding:0px;height:auto;margin-bottom:0px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500;color:#0A0A0A;opacity:0.8}.ms-form__button--text:hover{background-color:transparent}.ms-form__button--top-spacing{margin-top:10px}#msFormLoader path{fill:#fff}a.ms-form__link, div.ms-form__link{margin-top:8px;font-weight:500;font-size:14px;line-height:24px;color:rgb(10, 10, 10) !important;text-decoration:none;opacity:0.8;cursor:pointer}.ms-modal__cancel-button{background:#F6F6F6;color:#828282;padding:8px;margin-right:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button{background:#2962FF;color:#fff;padding:8px;border-radius:4px;border:none;font-weight:700;font-size:14px;line-height:16px;cursor:pointer}.ms-modal__save-button:disabled{background:#80a1fc;color:#fff;cursor:default}.ms-modal__save-button--large{padding:12px;font-weight:700;font-size:14px;line-height:16px;width:100%}.ms-modal__outline-button{background:#fff;color:#0A0A0A;font-weight:700;font-size:14px;line-height:16px;padding:12px;margin-right:8px;border-radius:4px;border:1px solid #DDDDDD;cursor:pointer}.ms-modal__outline-button svg{height:14px;margin-right:6px}.ms-modal__outline-button--mobile{width:100%}.ms-modal__button-label{margin-bottom:4px;margin-top:0px;font-size:14px;line-height:28px;font-weight:500}.ms-modal__profile-option{cursor:pointer;margin-bottom:20px;font-weight:500;font-size:16px;line-height:28px;background:transparent;border:none;padding:0px}.ms-modal__profile-option svg{height:14px;margin-right:8px}.ms-modal__profile-option:hover{color:#2962FF}.ms-modal__profile-option--active{color:#2962FF}.ms-modal__social-button{display:flex;align-items:center;justify-content:center;width:100%;height:52px;border-radius:6px;font-weight:700;font-size:16px;line-height:28px;color:#0A0A0A;background:none;border:1px solid #C9C9C9;cursor:pointer;margin-bottom:8px}.ms-modal__social-button img{height:16px;margin-right:8px}.ms-modal__social-button[disabled]{background:#F6F6F6}.ms-modal__social-divider{display:flex;align-items:center;margin:20px 0px}.ms-modal__divider-line{text-align:center;background:#dddddd;height:1px;width:100%}.ms-modal__divider-text{padding:0px 4px}.ms-modal__footer{text-align:center;width:100%;box-sizing:border-box;margin:0;min-width:0;background:#f6f6f6;padding-top:10px;padding-bottom:10px;border-bottom-left-radius:16px;border-bottom-right-radius:16px;border-top:1px solid;border-top-color:#dddddd;font-size:12px;line-height:16px;font-weight:500}.ms-modal__footer a{color:rgb(10, 10, 10);text-decoration:none;display:flex;justify-content:center;align-items:center}.ms-modal__footer svg{height:12px;width:12px;margin-right:5.5px}')
                }

                function co(e) {
                    var t, n;
                    return t = new Je({
                        props: {
                            query: "(max-width: 520px)",
                            $$slots: {
                                default: [wo, function(e) {
                                    return {
                                        21: e.matches
                                    }
                                }, function(e) {
                                    return e.matches ? 2097152 : 0
                                }]
                            },
                            $$scope: {
                                ctx: e
                            }
                        }
                    }), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        p: function(e, n) {
                            var r = {};
                            6291469 & n && (r.$$scope = {
                                dirty: n,
                                ctx: e
                            }), t.$set(r)
                        },
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function uo(e) {
                    var t, n, r;

                    function o(t) {
                        e[14](t)
                    }
                    var i = {
                        closeModal: e[5]
                    };
                    return void 0 !== e[0] && (i.display = e[0]), t = new pn({
                        props: i
                    }), ie.push((function() {
                        return ke(t, "display", o)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), r = !0
                        },
                        p: function(e, r) {
                            var o = {};
                            !n && 1 & r && (n = !0, o.display = e[0], de((function() {
                                return n = !1
                            }))), t.$set(o)
                        },
                        i: function(e) {
                            r || (Se(t.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function lo(e) {
                    var t, n, r;

                    function o(t) {
                        e[13](t)
                    }
                    var i = {
                        closeModal: e[5],
                        onSuccessPasswordReset: e[2]
                    };
                    return void 0 !== e[0] && (i.display = e[0]), t = new ln({
                        props: i
                    }), ie.push((function() {
                        return ke(t, "display", o)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), r = !0
                        },
                        p: function(e, r) {
                            var o = {};
                            4 & r && (o.onSuccessPasswordReset = e[2]), !n && 1 & r && (n = !0, o.display = e[0], de((function() {
                                return n = !1
                            }))), t.$set(o)
                        },
                        i: function(e) {
                            r || (Se(t.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function fo(e) {
                    var t, n, r;

                    function o(t) {
                        e[12](t)
                    }
                    var i = {
                        closeModal: e[5]
                    };
                    return void 0 !== e[0] && (i.display = e[0]), t = new an({
                        props: i
                    }), ie.push((function() {
                        return ke(t, "display", o)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), r = !0
                        },
                        p: function(e, r) {
                            var o = {};
                            !n && 1 & r && (n = !0, o.display = e[0], de((function() {
                                return n = !1
                            }))), t.$set(o)
                        },
                        i: function(e) {
                            r || (Se(t.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function po(e) {
                    var t, n, r, o;

                    function i(t) {
                        e[10](t)
                    }

                    function a(t) {
                        e[11](t)
                    }
                    var s = {
                        closeModal: e[5],
                        onSuccessSignup: e[2]
                    };
                    return void 0 !== e[0] && (s.display = e[0]), void 0 !== e[1] && (s.params = e[1]), t = new en({
                        props: s
                    }), ie.push((function() {
                        return ke(t, "display", i)
                    })), ie.push((function() {
                        return ke(t, "params", a)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), o = !0
                        },
                        p: function(e, o) {
                            var i = {};
                            4 & o && (i.onSuccessSignup = e[2]), !n && 1 & o && (n = !0, i.display = e[0], de((function() {
                                return n = !1
                            }))), !r && 2 & o && (r = !0, i.params = e[1], de((function() {
                                return r = !1
                            }))), t.$set(i)
                        },
                        i: function(e) {
                            o || (Se(t.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function mo(e) {
                    var t, n, r, o;

                    function i(t) {
                        e[8](t)
                    }

                    function a(t) {
                        e[9](t)
                    }
                    var s = {
                        closeModal: e[5],
                        onSuccessLogin: e[2]
                    };
                    return void 0 !== e[0] && (s.display = e[0]), void 0 !== e[1] && (s.params = e[1]), t = new Bt({
                        props: s
                    }), ie.push((function() {
                        return ke(t, "display", i)
                    })), ie.push((function() {
                        return ke(t, "params", a)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), o = !0
                        },
                        p: function(e, o) {
                            var i = {};
                            4 & o && (i.onSuccessLogin = e[2]), !n && 1 & o && (n = !0, i.display = e[0], de((function() {
                                return n = !1
                            }))), !r && 2 & o && (r = !0, i.params = e[1], de((function() {
                                return r = !1
                            }))), t.$set(i)
                        },
                        i: function(e) {
                            o || (Se(t.$$.fragment, e), o = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), o = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function ho(e) {
                    var t, n;
                    return t = new Ge({}), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, r) {
                            Me(t, e, r), n = !0
                        },
                        p: l,
                        i: function(e) {
                            n || (Se(t.$$.fragment, e), n = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), n = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function vo(e) {
                    var t, n, r;

                    function o(t) {
                        e[16](t)
                    }
                    var i = {
                        closeModal: e[5],
                        onSuccessLogout: e[2],
                        member: e[3]
                    };
                    return void 0 !== e[0] && (i.display = e[0]), t = new Sr({
                        props: i
                    }), ie.push((function() {
                        return ke(t, "display", o)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), r = !0
                        },
                        p: function(e, r) {
                            var o = {};
                            4 & r && (o.onSuccessLogout = e[2]), 8 & r && (o.member = e[3]), !n && 1 & r && (n = !0, o.display = e[0], de((function() {
                                return n = !1
                            }))), t.$set(o)
                        },
                        i: function(e) {
                            r || (Se(t.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function go(e) {
                    var t, n, r;

                    function o(t) {
                        e[15](t)
                    }
                    var i = {
                        closeModal: e[5],
                        onSuccessLogout: e[2],
                        member: e[3]
                    };
                    return void 0 !== e[0] && (i.display = e[0]), t = new ao({
                        props: i
                    }), ie.push((function() {
                        return ke(t, "display", o)
                    })), {
                        c: function() {
                            Ce(t.$$.fragment)
                        },
                        m: function(e, n) {
                            Me(t, e, n), r = !0
                        },
                        p: function(e, r) {
                            var o = {};
                            4 & r && (o.onSuccessLogout = e[2]), 8 & r && (o.member = e[3]), !n && 1 & r && (n = !0, o.display = e[0], de((function() {
                                return n = !1
                            }))), t.$set(o)
                        },
                        i: function(e) {
                            r || (Se(t.$$.fragment, e), r = !0)
                        },
                        o: function(e) {
                            xe(t.$$.fragment, e), r = !1
                        },
                        d: function(e) {
                            Le(t, e)
                        }
                    }
                }

                function wo(e) {
                    var t, n, r, o, i = [go, vo],
                        a = [];

                    function s(e, t) {
                        return e[21] ? 0 : 1
                    }
                    return t = s(e), n = a[t] = i[t](e), {
                        c: function() {
                            n.c(), r = N()
                        },
                        m: function(e, n) {
                            a[t].m(e, n), R(e, r, n), o = !0
                        },
                        p: function(e, o) {
                            var c = t;
                            (t = s(e)) === c ? a[t].p(e, o) : (be(), xe(a[c], 1, 1, (function() {
                                a[c] = null
                            })), _e(), (n = a[t]) ? n.p(e, o) : (n = a[t] = i[t](e)).c(), Se(n, 1), n.m(r.parentNode, r))
                        },
                        i: function(e) {
                            o || (Se(n), o = !0)
                        },
                        o: function(e) {
                            xe(n), o = !1
                        },
                        d: function(e) {
                            a[t].d(e), e && O(r)
                        }
                    }
                }

                function yo(e) {
                    var t, n, r, o, i = [ho, mo, po, fo, lo, uo, co],
                        a = [];

                    function c(e, t) {
                        return e[4] ? 0 : "login" === e[0] ? 1 : "signup" === e[0] ? 2 : "forgot_password" === e[0] ? 3 : "reset_password" === e[0] ? 4 : "reset_password_success" === e[0] ? 5 : "profile" === e[0] ? 6 : -1
                    }
                    return ~(n = c(e)) && (r = a[n] = i[n](e)), {
                        c: function() {
                            t = I("main"), r && r.c(), F(t, "id", "msOverlay"), F(t, "class", "svelte-bbv5du")
                        },
                        m: function(e, r) {
                            R(e, t, r), ~n && a[n].m(t, null), o = !0
                        },
                        p: function(e, o) {
                            var u = s(o, 1)[0],
                                l = n;
                            (n = c(e)) === l ? ~n && a[n].p(e, u) : (r && (be(), xe(a[l], 1, 1, (function() {
                                a[l] = null
                            })), _e()), ~n ? ((r = a[n]) ? r.p(e, u) : (r = a[n] = i[n](e)).c(), Se(r, 1), r.m(t, null)) : r = null)
                        },
                        i: function(e) {
                            o || (Se(r), o = !0)
                        },
                        o: function(e) {
                            xe(r), o = !1
                        },
                        d: function(e) {
                            e && O(t), ~n && a[n].d()
                        }
                    }
                }

                function bo(e, t, n) {
                    var r, o, s = this,
                        c = t.display,
                        u = void 0 === c ? "login" : c,
                        l = t.onSuccess,
                        d = t.params,
                        f = !0,
                        p = "profile" === u;

                    function m(e) {
                        Ie.update((function() {
                            return e
                        })), Ue.set({
                            text: e.ssoText || {}
                        })
                    }

                    function h() {
                        n(6, f = !0), l({
                            type: "CLOSED"
                        }), document.querySelector("#msOverlay").remove()
                    }
                    return ne((function() {
                        ! function() {
                            i(this, void 0, void 0, (function() {
                                return a(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return d && d.app ? (m(d.app), [3, 3]) : [3, 1];
                                        case 1:
                                            return console.log("No app specified - request it"), [4, i(s, void 0, void 0, (function() {
                                                return a(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, window.$memberstackDom.getApp()];
                                                        case 1:
                                                            return m(e.sent().data), [2]
                                                    }
                                                }))
                                            }))];
                                        case 2:
                                            e.sent(), e.label = 3;
                                        case 3:
                                            return n(6, f = !1), n(4, r = !1), [2]
                                    }
                                }))
                            }))
                        }(), "profile" === u && i(s, void 0, void 0, (function() {
                            var e;
                            return a(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, window.$memberstackDom.getCurrentMember()];
                                    case 1:
                                        if (e = t.sent().data, n(7, p = !1), n(3, o = e), "profile" === u && !e) throw h(), new Error("Member not logged in");
                                        return [2]
                                }
                            }))
                        }))
                    })), e.$$set = function(e) {
                        "display" in e && n(0, u = e.display), "onSuccess" in e && n(2, l = e.onSuccess), "params" in e && n(1, d = e.params)
                    }, e.$$.update = function() {
                        192 & e.$$.dirty && n(4, r = f || p)
                    }, [u, d, l, o, r, h, f, p, function(e) {
                        n(0, u = e)
                    }, function(e) {
                        n(1, d = e)
                    }, function(e) {
                        n(0, u = e)
                    }, function(e) {
                        n(1, d = e)
                    }, function(e) {
                        n(0, u = e)
                    }, function(e) {
                        n(0, u = e)
                    }, function(e) {
                        n(0, u = e)
                    }, function(e) {
                        n(0, u = e)
                    }, function(e) {
                        n(0, u = e)
                    }]
                }
                var _o = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return Te(n, t, bo, yo, w, {
                            display: 0,
                            onSuccess: 2,
                            params: 1
                        }, so), n
                    }
                    return r(t, e), t
                }(Re);
                t.default = _o
            },
            76: function(e, t, n) {
                "use strict";
                var r = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    o = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    i = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.hideModal = t.openModal = t.handleRedirect = t.hideLoader = t.showLoader = t.showMessage = t.initDefaultMessageBox = void 0;
                var a, s = n(8810),
                    c = i(n(6362));
                t.initDefaultMessageBox = function() {
                    function e() {
                        (0, s.initCSS)(), (0, s.addSuccessBox)(), (0, s.addErrorBox)()
                    }
                    "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", (function(t) {
                        e()
                    }))
                }, t.showMessage = function(e, n) {
                    var r;
                    document.querySelector("[data-ms-message='success']") || (0, t.initDefaultMessageBox)();
                    var o = (r = n ? document.querySelector("[data-ms-message='error']") : document.querySelector("[data-ms-message='success']")).querySelector("[data-ms-message-text]");
                    o && (o.innerHTML = e), r.style.display = "block";
                    var i = r.querySelector("[data-ms-message-close]");
                    null == i || i.addEventListener("click", (function() {
                        r.style.display = "none"
                    })), setTimeout((function() {
                        r.style.display = "none"
                    }), 7e3)
                }, t.showLoader = function(e) {
                    if (e) e.style.display = "block";
                    else {
                        var t = document.createElement("style");
                        t.appendChild(document.createTextNode(".ms__loader { width: 100%; height: 100%; overflow: hidden; position: fixed; top: 0; left: 0; display: flex; justify-content: center; align-items: center; z-index: 10000000; } #msLoader path { fill: #007ace; }")), document.head.appendChild(t);
                        var n = document.createElement("div");
                        n.setAttribute("data-ms-loader", "true"), n.innerHTML = '<?xml version="1.0"?><div class="ms__loader"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="msLoader" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background: new 0 0 50 50; z-index:1000000" xml:space="preserve"><path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"/></path></svg></div>', "loading" !== document.readyState ? document.body.appendChild(n) : document.addEventListener("DOMContentLoaded", (function(e) {
                            document.body.appendChild(n)
                        }))
                    }
                }, t.hideLoader = function(e) {
                    var t;
                    e ? e.style.display = "none" : null === (t = document.querySelector("[data-ms-loader]")) || void 0 === t || t.remove()
                }, t.handleRedirect = function(e, t) {
                    return t ? window.location.href = t : e && window.location.pathname !== e ? window.location.href = e : void 0
                }, t.openModal = function(e, t) {
                    return void 0 === t && (t = {}), r(void 0, void 0, void 0, (function() {
                        var n, r;
                        return o(this, (function(o) {
                            return r = new Promise((function(e) {
                                n = e
                            })), a = new c.default({
                                target: document.body,
                                props: {
                                    display: e.toLowerCase(),
                                    params: t,
                                    onSuccess: n
                                }
                            }), [2, r]
                        }))
                    }))
                }, t.hideModal = function() {
                    var e;
                    null == a || a.$destroy(), (0, t.hideLoader)(), null === (e = document.querySelector("#msOverlay")) || void 0 === e || e.remove()
                }
            },
            4839: function(e, t, n) {
                "use strict";
                var r = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    o = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(76),
                    a = n(521),
                    s = n(6638),
                    c = n(906),
                    u = new Promise((function(e) {
                        window._hcaptchaReady = e
                    })),
                    l = {
                        openModal: i.openModal,
                        hideModal: i.hideModal,
                        _hideLoader: i.hideLoader,
                        _showLoader: i.showLoader,
                        _showMessage: i.showMessage,
                        getMemberCookie: a.getMemberCookie,
                        onAuthChange: c.onAuthChange,
                        _captchaReady: u
                    };
                t.default = {
                    init: function(e) {
                        return function(e) {
                            var t = (0, s.initRequest)({
                                    publicKey: e.publicKey,
                                    appId: e.appId,
                                    sessionDurationDays: e.sessionDurationDays,
                                    token: (0, a.getMemberCookie)()
                                }),
                                n = Object.assign(l, t);
                            return "undefined" != typeof window && (window.$memberstackDom = n),
                                function() {
                                    r(this, void 0, void 0, (function() {
                                        var e;
                                        return o(this, (function(t) {
                                            return (e = document.createElement("script")).src = "https://js.hcaptcha.com/1/api.js?render=explicit&onload=_hcaptchaReady", e.async = !0, e.defer = !0, document.head.appendChild(e), [2]
                                        }))
                                    }))
                                }(), n
                        }(e)
                    }
                }
            },
            6638: function(e, t, n) {
                "use strict";
                var r = this && this.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    o = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    i = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initRequest = void 0;
                var a, s, c, u = n(2087),
                    l = n(2087),
                    d = n(4893),
                    f = n(906),
                    p = n(521),
                    m = n(8081),
                    h = function(e) {
                        return r({}, (null == e ? void 0 : e.token) && {
                            Authorization: "Bearer ".concat(e.token)
                        })
                    },
                    v = function(e) {
                        var t, n = e.data,
                            r = e.origin;
                        console.log({
                            origin: r
                        }), console.log({
                            data: n
                        }), ["https://client-testing.ngrok.io", "", "https://dev-client.memberstack.com"].includes(r) && ((null === (t = null == n ? void 0 : n.data) || void 0 === t ? void 0 : t.member) && ((0, f.setPersistedMember)(n.data.member), (0, p.setMemberCookie)(n.data.tokens.accessToken, a)), (null == n ? void 0 : n.error) && c(n.error), s(n))
                    },
                    g = null,
                    w = null,
                    y = function(e, t) {
                        return o(void 0, void 0, void 0, (function() {
                            var n, r, o, a, u, l, d, f;
                            return i(this, (function(i) {
                                return window.removeEventListener("message", v), n = void 0 !== window.screenLeft ? window.screenLeft : window.screenX, r = void 0 !== window.screenTop ? window.screenTop : window.screenY, o = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, u = o / window.screen.availWidth, l = (o - 600) / 2 / u + n, d = (a - 700) / 2 / u + r, f = "toolbar=no, menubar=no, width=".concat(600 / u, ", height=").concat(700 / u, ", top=").concat(d, ", left=").concat(l), null === g || g.closed ? g = window.open(e, t, f) : w !== e ? (g = window.open(e, t, f)).focus() : g.focus(), window.addEventListener("message", (function(e) {
                                    return v(e)
                                }), !1), w = e, window.addEventListener("beforeunload", (function() {
                                    null == g || g.close()
                                })), [2, new Promise((function(e, t) {
                                    s = e, c = t
                                }))]
                            }))
                        }))
                    };
                t.initRequest = function(e) {
                    var t = e.publicKey,
                        n = e.appId,
                        s = e.token,
                        c = e.customEndpoint,
                        v = e.sessionDurationDays,
                        g = (0, u.createRequestHandler)({
                            publicKey: t,
                            token: s,
                            customEndpoint: c,
                            appId: n
                        }).sendRequest;
                    return a = v, {
                        signupWithProvider: function(e) {
                            return o(this, void 0, void 0, (function() {
                                var t, r, o;
                                return i(this, (function(i) {
                                    return t = encodeURIComponent(e.customFields ? JSON.stringify(e.customFields) : "{}"), r = encodeURIComponent(e.plans ? JSON.stringify(e.plans) : "[]"), o = new URLSearchParams({
                                        provider: e.provider,
                                        customFields: t,
                                        plans: r,
                                        appId: n,
                                        origin: window.location.hostname
                                    }), [2, y("".concat(m.endpoints.API, "/auth-provider/signup?").concat(o), "signup")]
                                }))
                            }))
                        },
                        loginWithProvider: function(e) {
                            return o(this, void 0, void 0, (function() {
                                var t;
                                return i(this, (function(r) {
                                    return t = new URLSearchParams({
                                        provider: e.provider,
                                        appId: n,
                                        origin: window.location.hostname
                                    }), [2, y("".concat(m.endpoints.API, "/auth-provider/login?").concat(t), "login")]
                                }))
                            }))
                        },
                        connectProvider: function(e) {
                            return o(this, void 0, void 0, (function() {
                                var t;
                                return i(this, (function(r) {
                                    return t = new URLSearchParams({
                                        provider: e.provider,
                                        appId: n,
                                        member: (0, p.getMemberCookie)(),
                                        origin: window.location.hostname
                                    }), [2, y("".concat(m.endpoints.API, "/auth-provider/connect?").concat(t), "connect")]
                                }))
                            }))
                        },
                        disconnectProvider: function(e) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/member/disconnect-provider",
                                        data: {
                                            provider: e.provider
                                        }
                                    })]
                                }))
                            }))
                        },
                        getAppAndMember: function(e) {
                            return o(this, void 0, void 0, (function() {
                                var e;
                                return i(this, (function(t) {
                                    return e = new URLSearchParams({
                                        includeSSOText: null === window || void 0 === window ? void 0 : window.ssoUI
                                    }), [2, g({
                                        method: l.HttpMethod.GET,
                                        url: "/app-member?".concat(e)
                                    })]
                                }))
                            }))
                        },
                        getApp: function() {
                            return o(this, void 0, void 0, (function() {
                                var e;
                                return i(this, (function(t) {
                                    return e = new URLSearchParams({
                                        includeSSOText: null === window || void 0 === window ? void 0 : window.ssoUI
                                    }), [2, g({
                                        method: l.HttpMethod.GET,
                                        url: "/app?".concat(e)
                                    })]
                                }))
                            }))
                        },
                        loginMemberEmailPassword: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                var n;

                                const postData = new FormData();
								postData.append('email', e.email);
								postData.append('password', e.password);

                                const $rememberMe = $('[name="remember_me"]').prop('checked');

                                if ($rememberMe) {
                                    postData.append('remember_me', $rememberMe);
                                }

                                return i(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, g({
                                                method: l.HttpMethod.POST,
                                                url: "/login",
                                                data: postData
                                            })];
                                        case 1:
                                            return n = r.sent(), [2, n]
                                    }
                                }))
                            }))
                        },
                        loginMemberAuthProvider: function(e) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/auth/login-provider",
                                        data: {
                                            code: e.code,
                                            provider: e.provider
                                        }
                                    })]
                                }))
                            }))
                        },
                        getPlan: function(e) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, g({
                                        method: l.HttpMethod.GET,
                                        url: "/app/plans/".concat(e.planId)
                                    })]
                                }))
                            }))
                        },
                        getPlans: function() {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, g({
                                                method: l.HttpMethod.GET,
                                                url: "/app"
                                            })];
                                        case 1:
                                            return [2, {
                                                data: e.sent().data.plans
                                            }]
                                    }
                                }))
                            }))
                        },
                        getRestrictedUrlGroups: function() {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, g({
                                                method: l.HttpMethod.GET,
                                                url: "/app"
                                            })];
                                        case 1:
                                            return [2, {
                                                data: e.sent().data.contentGroups
                                            }]
                                    }
                                }))
                            }))
                        },
                        getCurrentMember: function(e) {
                            return o(this, void 0, void 0, (function() {
                                var t;
                                return i(this, (function(n) {
                                    return t = g({
                                            method: l.HttpMethod.GET,
                                            url: "/member?".concat(Math.floor(1e3 + 9e3 * Math.random())),
                                            headers: h(e)
                                        }),
                                        function() {
                                            o(this, void 0, void 0, (function() {
                                                var e;
                                                return i(this, (function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, t];
                                                        case 1:
                                                            return e = n.sent(), (0, f.updatePersistedMember)(e.data), [2]
                                                    }
                                                }))
                                            }))
                                        }(), !0 === (null == e ? void 0 : e.useCache) ? [2, {
                                            data: (0, f.getPersistedMember)()
                                        }] : [2, t]
                                }))
                            }))
                        },
                        getMemberJSON: function(e) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, g({
                                        method: l.HttpMethod.GET,
                                        url: "/member/json",
                                        headers: h(e)
                                    })]
                                }))
                            }))
                        },
                        updateMemberJSON: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(n) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/member/json",
                                        data: {
                                            json: e.json
                                        },
                                        headers: h(t)
                                    })]
                                }))
                            }))
                        },
                        addPlan: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(n) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/member/plans/add",
                                        data: {
                                            planId: e.planId
                                        },
                                        headers: h(t)
                                    })]
                                }))
                            }))
                        },
                        purchasePlansWithCheckout: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                function n(e) {
                                    var t = window.location.href,
                                        n = e;
                                    return n && (t = 0 === n.indexOf("http://") || 0 === n.indexOf("https://") ? n : window.location.origin + n), t
                                }
                                var r, o, a;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return r = e.successUrl ? n(e.successUrl) : void 0, o = n(e.cancelUrl), [4, g({
                                                method: l.HttpMethod.POST,
                                                url: "/member/plans/create-checkout-session",
                                                data: {
                                                    priceId: e.priceId,
                                                    success_url: r,
                                                    cancel_url: o,
                                                    origin_url: window.location.href
                                                },
                                                headers: h(t)
                                            })];
                                        case 1:
                                            return a = i.sent(), !1 === e.autoRedirect ? [2, a] : (window.location.href = a.data.url, [2])
                                    }
                                }))
                            }))
                        },
                        launchStripeCustomerPortal: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                var n, r;
                                return i(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return n = (null == e ? void 0 : e.returnUrl) ? function(e) {
                                                var t = window.location.href,
                                                    n = e;
                                                return n && (t = 0 === n.indexOf("http://") || 0 === n.indexOf("https://") ? n : window.location.origin + n), t
                                            }(e.returnUrl) : void 0, [4, g({
                                                method: l.HttpMethod.POST,
                                                url: "/member/create-billing-portal-session",
                                                data: {
                                                    return_url: n,
                                                    origin_url: window.location.href,
                                                    priceIds: e.priceIds,
                                                    configuration: e.configuration
                                                },
                                                headers: h(t)
                                            })];
                                        case 1:
                                            return r = o.sent(), !1 === (null == e ? void 0 : e.autoRedirect) ? [2, r] : (window.location.href = r.data.url, [2])
                                    }
                                }))
                            }))
                        },
                        removePlan: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(n) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/member/plans/remove",
                                        data: {
                                            planId: e.planId
                                        },
                                        headers: h(t)
                                    })]
                                }))
                            }))
                        },
                        updateMember: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(n) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/member",
                                        data: r({}, e.customFields && {
                                            customFields: e.customFields
                                        }),
                                        headers: h(t)
                                    })]
                                }))
                            }))
                        },
                        updateMemberAuth: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(n) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/member-auth",
                                        data: r(r(r({}, e.email && {
                                            email: e.email
                                        }), e.oldPassword && {
                                            oldPassword: e.oldPassword
                                        }), e.newPassword && {
                                            newPassword: e.newPassword
                                        }),
                                        headers: h(t)
                                    })]
                                }))
                            }))
                        },
                        setPassword: function(e, t) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(n) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/member/set-password",
                                        data: {
                                            password: e.password
                                        },
                                        headers: h(t)
                                    })]
                                }))
                            }))
                        },
                        signupMemberEmailPassword: function(e, t) {
                            var n, a;
                            return o(this, void 0, void 0, (function() {
                                var o;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, g({
                                                method: l.HttpMethod.POST,
                                                url: "/auth/signup",
                                                data: r(r(r({
                                                    email: e.email,
                                                    password: e.password,
                                                    customFields: e.customFields,
                                                    metaData: e.metaData,
                                                    plans: e.plans,
                                                    captchaToken: e.captchaToken
                                                }, e.payment && {
                                                    payment: {
                                                        stripe: {
                                                            paymentMethodId: e.payment.stripe.paymentMethodId
                                                        }
                                                    }
                                                }), {
                                                    origin_domain: window.location.origin,
                                                    options: t
                                                }), (null === (n = window.Rewardful) || void 0 === n ? void 0 : n.referral) && {
                                                    rewardfulData: {
                                                        referral: window.Rewardful.referral,
                                                        coupon: null === (a = window.Rewardful.coupon) || void 0 === a ? void 0 : a.id
                                                    }
                                                })
                                            })];
                                        case 1:
                                            return o = i.sent(), (0, f.setPersistedMember)(o.data.member), (0, p.setMemberCookie)(o.data.tokens.accessToken, v), [2, o]
                                    }
                                }))
                            }))
                        },
                        sendMemberVerificationEmail: function() {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(e) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/auth/send-email-verification",
                                        data: {
                                            origin_domain: window.location.origin
                                        }
                                    })]
                                }))
                            }))
                        },
                        sendMemberResetPasswordEmail: function(e) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/auth/send-reset-password-email",
                                        data: {
                                            email: e.email
                                        }
                                    })]
                                }))
                            }))
                        },
                        resetMemberPassword: function(e) {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(t) {
                                    return [2, g({
                                        method: l.HttpMethod.POST,
                                        url: "/auth/reset-password",
                                        data: {
                                            token: e.token,
                                            newPassword: e.newPassword
                                        }
                                    })]
                                }))
                            }))
                        },
                        logout: function(e) {
                            return o(this, void 0, void 0, (function() {
                                var t;
                                return i(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, g({
                                                method: l.HttpMethod.POST,
                                                url: "/member/logout",
                                                headers: h(e)
                                            })];
                                        case 1:
                                            return t = n.sent(), (0, f.unsetPersistedMember)(), [2, t]
                                    }
                                }))
                            }))
                        },
                        decodeToken: function(e) {
                            var t = e.token;
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(e) {
                                    return [2, (0, d.decodeJwt)(t)]
                                }))
                            }))
                        }
                    }
                }
            },
            2087: function(e, t, n) {
                "use strict";
                var r = this && this.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    o = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    i = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    a = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.createRequestHandler = t.HttpHeaders = t.HttpMethod = void 0;
                var s, c, u = a(n(933)),
                    l = n(8081),
                    d = n(521);
                (c = t.HttpMethod || (t.HttpMethod = {})).POST = "POST", c.GET = "GET",
                    function(e) {
                        e.AUTHORIZATION = "Authorization", e.API_KEY = "X-API-Key", e.APP_ID = "X-APP-ID", e.API_VERSION = "X-API-Version", e.USER_AGENT = "X-User-Agent"
                    }(s = t.HttpHeaders || (t.HttpHeaders = {})), t.createRequestHandler = function(e) {
                        var t = e.publicKey,
                            n = e.appId,
                            a = (e.token, e.customEndpoint);
                        return {
                            sendRequest: function(e, c) {
                                return o(void 0, void 0, void 0, (function() {
                                    var o, f, p, m, h, v, g, w, y, b, _, S, x, $, E, A, P;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return i.trys.push([0, 2, , 3]), o = e.url, f = (0, d.getMemberCookie)(), p = [null === (_ = null === (b = e.headers) || void 0 === b ? void 0 : b.Authorization) || void 0 === _ ? void 0 : _.replace("Bearer ", ""), f, null == c ? void 0 : c.token].find((function(e) {
                                                    return e
                                                })), m = "".concat(a || l.endpoints.API).concat(o), [4, (0, u.default)(r(r({}, e), {
                                                    url: m,
                                                    headers: r(r(r(r({}, p && {
                                                        authorization: "Bearer ".concat(p)
                                                    }), t && (g = {}, g[s.API_KEY] = t, g)), n && (w = {}, w[s.APP_ID] = n, w)), (y = {}, y[s.USER_AGENT] = "@memberstack/client@1.2.0", y)),
                                                    withCredentials: !0
                                                }))];
                                            case 1:
                                                if (h = i.sent(), (null === (S = null == h ? void 0 : h.headers) || void 0 === S ? void 0 : S["ms-mid"]) && h.headers["ms-mid"], null === (x = null == h ? void 0 : h.data) || void 0 === x ? void 0 : x.error) {
                                                    if ("JsonWebTokenError" === h.data.error.name) throw {
                                                        code: "client/invalid-token",
                                                        message: "An invalid token has been provided. Please make sure the token is valid."
                                                    };
                                                    throw null === ($ = h.data) || void 0 === $ ? void 0 : $.error
                                                }
                                                return [2, null == h ? void 0 : h.data];
                                            case 2:
                                                if (!(v = i.sent()).response) throw v;
                                                throw (null === (A = null === (E = v.response) || void 0 === E ? void 0 : E.data) || void 0 === A ? void 0 : A.error) || (null === (P = v.response) || void 0 === P ? void 0 : P.data);
                                            case 3:
                                                return [2]
                                        }
                                    }))
                                }))
                            }
                        }
                    }
            },
            521: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getMemberCookie = t.setMemberCookie = void 0;
                var o = r(n(602)),
                    i = "_ms-mid";
                t.setMemberCookie = function(e, t) {
                    o.default.set(i, e, {
                        expires: t && Number(t) || 14,
                        sameSite: "strict"
                    })
                }, t.getMemberCookie = function() {
                    return o.default.get(i)
                }
            },
            8810: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initCSS = t.addErrorBox = t.addSuccessBox = void 0, "undefined" != typeof window && ((n = document.createElement("div")).setAttribute("id", "ms-status-close"), n.setAttribute("data-ms-message-close", ""), n.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/></svg>'), t.addSuccessBox = function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", "ms-status-icon"), e.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#62d37f"/><path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm4.59-12.42L8 12.17 5.41 9.59 4 11l4 4 8-8-1.41-1.42Z" fill="#fff"/></svg>';
                    var t = '<div data-ms-message class="ms-error-message">\n\t\t'.concat(e.outerHTML, '\n\t\t<div id="ms-message" data-ms-message-text></div>\n\t\t').concat(n.outerHTML, "\n\t\t</div>"),
                        r = document.createElement("div");
                    r.setAttribute("data-ms-message", "success"), r.innerHTML = t, r.style.display = "none", document.body.appendChild(r)
                }, t.addErrorBox = function() {
                    var e = document.createElement("div");
                    e.setAttribute("id", "ms-status-icon"), e.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#E40023"/></svg>';
                    var t = '<div data-ms-message class="ms-error-message">\n\t\t'.concat(e.outerHTML, '\n\t\t<div id="ms-message" data-ms-message-text></div>\n\t\t').concat(n.outerHTML, "\n\t\t</div>"),
                        r = document.createElement("div");
                    r.setAttribute("data-ms-message", "error"), r.innerHTML = t, r.style.display = "none", document.body.appendChild(r)
                }, t.initCSS = function() {
                    var e = document.createElement("style");
                    e.setAttribute("data-ms-style", ""), e.appendChild(document.createTextNode("\n\t\t@keyframes fadeIn {\n\t\t\t0% {\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t\t100% {\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t\t.ms-error-message { \n\t\t\t\tposition: fixed;\n\t\t\t\tleft: 50%;\n\t\t\t\tbottom: 3%;\n\t\t\t\ttransform: translate(-50%, -50%);\n\t\t\t\tmargin: 0 auto;\n\t\t\t\tz-index: 10000000; \n\t\t\t\tdisplay: flex; \n\t\t\t\talign-items: center;\n\t\t\t\tpadding: 12px 16px;\n\t\t\t\tborder-radius: 8px; \n\t\t\t\tbackground-color: #0A0A0A; \n\t\t\t\tcolor: #fff; \n\t\t\t\tfont-size: 16.8px; \n\t\t\t\tline-height: 28px; \n\t\t\t\tfont-weight: 500; \n\t\t\t\ttransform-origin: center;\n\t\t\t\tanimation: fadeIn 0.2s ease-in;\n\t\t\t\t-webkit-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-moz-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-o-animation: fadeIn 0.2s ease-in;\n\t\t\t\t-ms-animation: fadeIn 0.2s ease-in;\n\t\t\t}\n\t\t\t#ms-status-icon {\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t\t\tmargin-right: 12px;\n\t\t\t\t}\n\t\t\t\t#ms-status-close {\n\t\t\t\t\tmargin-left: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t\t#ms-status-close svg {\n\t\t\t\t\t\theight: 12px;\n\t\t\t\t\t}")), document.head.appendChild(e)
                }
            },
            933: (e, t, n) => {
                e.exports = n(1660)
            },
            809: (e, t, n) => {
                "use strict";
                var r = n(4976),
                    o = n(5104),
                    i = n(8410),
                    a = n(4694),
                    s = n(3585),
                    c = n(6986),
                    u = n(8315),
                    l = n(5783),
                    d = n(643),
                    f = n(8404),
                    p = n(2024);
                e.exports = function(e) {
                    return new Promise((function(t, n) {
                        var m, h = e.data,
                            v = e.headers,
                            g = e.responseType;

                        function w() {
                            e.cancelToken && e.cancelToken.unsubscribe(m), e.signal && e.signal.removeEventListener("abort", m)
                        }
                        r.isFormData(h) && r.isStandardBrowserEnv() && delete v["Content-Type"];
                        var y = new XMLHttpRequest;
                        if (e.auth) {
                            var b = e.auth.username || "",
                                _ = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            v.Authorization = "Basic " + btoa(b + ":" + _)
                        }
                        var S = s(e.baseURL, e.url);

                        function x() {
                            if (y) {
                                var r = "getAllResponseHeaders" in y ? c(y.getAllResponseHeaders()) : null,
                                    i = {
                                        data: g && "text" !== g && "json" !== g ? y.response : y.responseText,
                                        status: y.status,
                                        statusText: y.statusText,
                                        headers: r,
                                        config: e,
                                        request: y
                                    };
                                o((function(e) {
                                    t(e), w()
                                }), (function(e) {
                                    n(e), w()
                                }), i), y = null
                            }
                        }
                        if (y.open(e.method.toUpperCase(), a(S, e.params, e.paramsSerializer), !0), y.timeout = e.timeout, "onloadend" in y ? y.onloadend = x : y.onreadystatechange = function() {
                                y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(x)
                            }, y.onabort = function() {
                                y && (n(new d("Request aborted", d.ECONNABORTED, e, y)), y = null)
                            }, y.onerror = function() {
                                n(new d("Network Error", d.ERR_NETWORK, e, y, y)), y = null
                            }, y.ontimeout = function() {
                                var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                    r = e.transitional || l;
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new d(t, r.clarifyTimeoutError ? d.ETIMEDOUT : d.ECONNABORTED, e, y)), y = null
                            }, r.isStandardBrowserEnv()) {
                            var $ = (e.withCredentials || u(S)) && e.xsrfCookieName ? i.read(e.xsrfCookieName) : void 0;
                            $ && (v[e.xsrfHeaderName] = $)
                        }
                        "setRequestHeader" in y && r.forEach(v, (function(e, t) {
                            void 0 === h && "content-type" === t.toLowerCase() ? delete v[t] : y.setRequestHeader(t, e)
                        })), r.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials), g && "json" !== g && (y.responseType = e.responseType), "function" == typeof e.onDownloadProgress && y.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && y.upload && y.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (m = function(e) {
                            y && (n(!e || e && e.type ? new f : e), y.abort(), y = null)
                        }, e.cancelToken && e.cancelToken.subscribe(m), e.signal && (e.signal.aborted ? m() : e.signal.addEventListener("abort", m))), h || (h = null);
                        var E = p(S);
                        E && -1 === ["http", "https", "file"].indexOf(E) ? n(new d("Unsupported protocol " + E + ":", d.ERR_BAD_REQUEST, e)) : y.send(h)
                    }))
                }
            },
            1660: (e, t, n) => {
                "use strict";
                var r = n(4976),
                    o = n(4811),
                    i = n(2588),
                    a = n(8392),
                    s = function e(t) {
                        var n = new i(t),
                            s = o(i.prototype.request, n);
                        return r.extend(s, i.prototype, n), r.extend(s, n), s.create = function(n) {
                            return e(a(t, n))
                        }, s
                    }(n(8432));
                s.Axios = i, s.CanceledError = n(8404), s.CancelToken = n(5803), s.isCancel = n(3327), s.VERSION = n(9521).version, s.toFormData = n(985), s.AxiosError = n(643), s.Cancel = s.CanceledError, s.all = function(e) {
                    return Promise.all(e)
                }, s.spread = n(281), s.isAxiosError = n(7973), e.exports = s, e.exports.default = s
            },
            5803: (e, t, n) => {
                "use strict";
                var r = n(8404);

                function o(e) {
                    if ("function" != typeof e) throw new TypeError("executor must be a function.");
                    var t;
                    this.promise = new Promise((function(e) {
                        t = e
                    }));
                    var n = this;
                    this.promise.then((function(e) {
                        if (n._listeners) {
                            var t, r = n._listeners.length;
                            for (t = 0; t < r; t++) n._listeners[t](e);
                            n._listeners = null
                        }
                    })), this.promise.then = function(e) {
                        var t, r = new Promise((function(e) {
                            n.subscribe(e), t = e
                        })).then(e);
                        return r.cancel = function() {
                            n.unsubscribe(t)
                        }, r
                    }, e((function(e) {
                        n.reason || (n.reason = new r(e), t(n.reason))
                    }))
                }
                o.prototype.throwIfRequested = function() {
                    if (this.reason) throw this.reason
                }, o.prototype.subscribe = function(e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }, o.prototype.unsubscribe = function(e) {
                    if (this._listeners) {
                        var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                    }
                }, o.source = function() {
                    var e;
                    return {
                        token: new o((function(t) {
                            e = t
                        })),
                        cancel: e
                    }
                }, e.exports = o
            },
            8404: (e, t, n) => {
                "use strict";
                var r = n(643);

                function o(e) {
                    r.call(this, null == e ? "canceled" : e, r.ERR_CANCELED), this.name = "CanceledError"
                }
                n(4976).inherits(o, r, {
                    __CANCEL__: !0
                }), e.exports = o
            },
            3327: e => {
                "use strict";
                e.exports = function(e) {
                    return !(!e || !e.__CANCEL__)
                }
            },
            2588: (e, t, n) => {
                "use strict";
                var r = n(4976),
                    o = n(4694),
                    i = n(4124),
                    a = n(835),
                    s = n(8392),
                    c = n(3585),
                    u = n(8012),
                    l = u.validators;

                function d(e) {
                    this.defaults = e, this.interceptors = {
                        request: new i,
                        response: new i
                    }
                }
                d.prototype.request = function(e, t) {
                    "string" == typeof e ? (t = t || {}).url = e : t = e || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                    var n = t.transitional;
                    void 0 !== n && u.assertOptions(n, {
                        silentJSONParsing: l.transitional(l.boolean),
                        forcedJSONParsing: l.transitional(l.boolean),
                        clarifyTimeoutError: l.transitional(l.boolean)
                    }, !1);
                    var r = [],
                        o = !0;
                    this.interceptors.request.forEach((function(e) {
                        "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected))
                    }));
                    var i, c = [];
                    if (this.interceptors.response.forEach((function(e) {
                            c.push(e.fulfilled, e.rejected)
                        })), !o) {
                        var d = [a, void 0];
                        for (Array.prototype.unshift.apply(d, r), d = d.concat(c), i = Promise.resolve(t); d.length;) i = i.then(d.shift(), d.shift());
                        return i
                    }
                    for (var f = t; r.length;) {
                        var p = r.shift(),
                            m = r.shift();
                        try {
                            f = p(f)
                        } catch (e) {
                            m(e);
                            break
                        }
                    }
                    try {
                        i = a(f)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    for (; c.length;) i = i.then(c.shift(), c.shift());
                    return i
                }, d.prototype.getUri = function(e) {
                    e = s(this.defaults, e);
                    var t = c(e.baseURL, e.url);
                    return o(t, e.params, e.paramsSerializer)
                }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                    d.prototype[e] = function(t, n) {
                        return this.request(s(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }))
                    }
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    function t(t) {
                        return function(n, r, o) {
                            return this.request(s(o || {}, {
                                method: e,
                                headers: t ? {
                                    "Content-Type": "multipart/form-data"
                                } : {},
                                url: n,
                                data: r
                            }))
                        }
                    }
                    d.prototype[e] = t(), d.prototype[e + "Form"] = t(!0)
                })), e.exports = d
            },
            643: (e, t, n) => {
                "use strict";
                var r = n(4976);

                function o(e, t, n, r, o) {
                    Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
                }
                r.inherits(o, Error, {
                    toJSON: function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: this.config,
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        }
                    }
                });
                var i = o.prototype,
                    a = {};
                ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach((function(e) {
                    a[e] = {
                        value: e
                    }
                })), Object.defineProperties(o, a), Object.defineProperty(i, "isAxiosError", {
                    value: !0
                }), o.from = function(e, t, n, a, s, c) {
                    var u = Object.create(i);
                    return r.toFlatObject(e, u, (function(e) {
                        return e !== Error.prototype
                    })), o.call(u, e.message, t, n, a, s), u.name = e.name, c && Object.assign(u, c), u
                }, e.exports = o
            },
            4124: (e, t, n) => {
                "use strict";
                var r = n(4976);

                function o() {
                    this.handlers = []
                }
                o.prototype.use = function(e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }, o.prototype.eject = function(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, o.prototype.forEach = function(e) {
                    r.forEach(this.handlers, (function(t) {
                        null !== t && e(t)
                    }))
                }, e.exports = o
            },
            3585: (e, t, n) => {
                "use strict";
                var r = n(2649),
                    o = n(6129);
                e.exports = function(e, t) {
                    return e && !r(t) ? o(e, t) : t
                }
            },
            835: (e, t, n) => {
                "use strict";
                var r = n(4976),
                    o = n(8915),
                    i = n(3327),
                    a = n(8432),
                    s = n(8404);

                function c(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new s
                }
                e.exports = function(e) {
                    return c(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                        delete e.headers[t]
                    })), (e.adapter || a.adapter)(e).then((function(t) {
                        return c(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t
                    }), (function(t) {
                        return i(t) || (c(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                    }))
                }
            },
            8392: (e, t, n) => {
                "use strict";
                var r = n(4976);
                e.exports = function(e, t) {
                    t = t || {};
                    var n = {};

                    function o(e, t) {
                        return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                    }

                    function i(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(e[n], t[n])
                    }

                    function a(e) {
                        if (!r.isUndefined(t[e])) return o(void 0, t[e])
                    }

                    function s(n) {
                        return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(void 0, t[n])
                    }

                    function c(n) {
                        return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0
                    }
                    var u = {
                        url: a,
                        method: a,
                        data: a,
                        baseURL: s,
                        transformRequest: s,
                        transformResponse: s,
                        paramsSerializer: s,
                        timeout: s,
                        timeoutMessage: s,
                        withCredentials: s,
                        adapter: s,
                        responseType: s,
                        xsrfCookieName: s,
                        xsrfHeaderName: s,
                        onUploadProgress: s,
                        onDownloadProgress: s,
                        decompress: s,
                        maxContentLength: s,
                        maxBodyLength: s,
                        beforeRedirect: s,
                        transport: s,
                        httpAgent: s,
                        httpsAgent: s,
                        cancelToken: s,
                        socketPath: s,
                        responseEncoding: s,
                        validateStatus: c
                    };
                    return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                        var t = u[e] || i,
                            o = t(e);
                        r.isUndefined(o) && t !== c || (n[e] = o)
                    })), n
                }
            },
            5104: (e, t, n) => {
                "use strict";
                var r = n(643);
                e.exports = function(e, t, n) {
                    var o = n.config.validateStatus;
                    n.status && o && !o(n.status) ? t(new r("Request failed with status code " + n.status, [r.ERR_BAD_REQUEST, r.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                }
            },
            8915: (e, t, n) => {
                "use strict";
                var r = n(4976),
                    o = n(8432);
                e.exports = function(e, t, n) {
                    var i = this || o;
                    return r.forEach(n, (function(n) {
                        e = n.call(i, e, t)
                    })), e
                }
            },
            8432: (e, t, n) => {
                "use strict";
                var r = n(4976),
                    o = n(9642),
                    i = n(643),
                    a = n(5783),
                    s = n(985),
                    c = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function u(e, t) {
                    !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }
                var l, d = {
                    transitional: a,
                    adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (l = n(809)), l),
                    transformRequest: [function(e, t) {
                        if (o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)) return e;
                        if (r.isArrayBufferView(e)) return e.buffer;
                        if (r.isURLSearchParams(e)) return u(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
                        var n, i = r.isObject(e),
                            a = t && t["Content-Type"];
                        if ((n = r.isFileList(e)) || i && "multipart/form-data" === a) {
                            var c = this.env && this.env.FormData;
                            return s(n ? {
                                "files[]": e
                            } : e, c && new c)
                        }
                        return i || "application/json" === a ? (u(t, "application/json"), function(e, t, n) {
                            if (r.isString(e)) try {
                                return (0, JSON.parse)(e), r.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (0, JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function(e) {
                        var t = this.transitional || d.transitional,
                            n = t && t.silentJSONParsing,
                            o = t && t.forcedJSONParsing,
                            a = !n && "json" === this.responseType;
                        if (a || o && r.isString(e) && e.length) try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (a) {
                                if ("SyntaxError" === e.name) throw i.from(e, i.ERR_BAD_RESPONSE, this, null, this.response);
                                throw e
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: n(3623)
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                r.forEach(["delete", "get", "head"], (function(e) {
                    d.headers[e] = {}
                })), r.forEach(["post", "put", "patch"], (function(e) {
                    d.headers[e] = r.merge(c)
                })), e.exports = d
            },
            5783: e => {
                "use strict";
                e.exports = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                }
            },
            9521: e => {
                e.exports = {
                    version: "0.27.2"
                }
            },
            4811: e => {
                "use strict";
                e.exports = function(e, t) {
                    return function() {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            },
            4694: (e, t, n) => {
                "use strict";
                var r = n(4976);

                function o(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }
                e.exports = function(e, t, n) {
                    if (!t) return e;
                    var i;
                    if (n) i = n(t);
                    else if (r.isURLSearchParams(t)) i = t.toString();
                    else {
                        var a = [];
                        r.forEach(t, (function(e, t) {
                            null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                                r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
                            })))
                        })), i = a.join("&")
                    }
                    if (i) {
                        var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                    }
                    return e
                }
            },
            6129: e => {
                "use strict";
                e.exports = function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }
            },
            8410: (e, t, n) => {
                "use strict";
                var r = n(4976);
                e.exports = r.isStandardBrowserEnv() ? {
                    write: function(e, t, n, o, i, a) {
                        var s = [];
                        s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
                    },
                    read: function(e) {
                        var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                }
            },
            2649: e => {
                "use strict";
                e.exports = function(e) {
                    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
                }
            },
            7973: (e, t, n) => {
                "use strict";
                var r = n(4976);
                e.exports = function(e) {
                    return r.isObject(e) && !0 === e.isAxiosError
                }
            },
            8315: (e, t, n) => {
                "use strict";
                var r = n(4976);
                e.exports = r.isStandardBrowserEnv() ? function() {
                    var e, t = /(msie|trident)/i.test(navigator.userAgent),
                        n = document.createElement("a");

                    function o(e) {
                        var r = e;
                        return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                            href: n.href,
                            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                            host: n.host,
                            search: n.search ? n.search.replace(/^\?/, "") : "",
                            hash: n.hash ? n.hash.replace(/^#/, "") : "",
                            hostname: n.hostname,
                            port: n.port,
                            pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                        }
                    }
                    return e = o(window.location.href),
                        function(t) {
                            var n = r.isString(t) ? o(t) : t;
                            return n.protocol === e.protocol && n.host === e.host
                        }
                }() : function() {
                    return !0
                }
            },
            9642: (e, t, n) => {
                "use strict";
                var r = n(4976);
                e.exports = function(e, t) {
                    r.forEach(e, (function(n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    }))
                }
            },
            3623: e => {
                e.exports = null
            },
            6986: (e, t, n) => {
                "use strict";
                var r = n(4976),
                    o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
                e.exports = function(e) {
                    var t, n, i, a = {};
                    return e ? (r.forEach(e.split("\n"), (function(e) {
                        if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                            if (a[t] && o.indexOf(t) >= 0) return;
                            a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
                        }
                    })), a) : a
                }
            },
            2024: e => {
                "use strict";
                e.exports = function(e) {
                    var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                    return t && t[1] || ""
                }
            },
            281: e => {
                "use strict";
                e.exports = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }
            },
            985: (e, t, n) => {
                "use strict";
                var r = n(4976);
                e.exports = function(e, t) {
                    t = t || new FormData;
                    var n = [];

                    function o(e) {
                        return null === e ? "" : r.isDate(e) ? e.toISOString() : r.isArrayBuffer(e) || r.isTypedArray(e) ? "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                    }
                    return function e(i, a) {
                        if (r.isPlainObject(i) || r.isArray(i)) {
                            if (-1 !== n.indexOf(i)) throw Error("Circular reference detected in " + a);
                            n.push(i), r.forEach(i, (function(n, i) {
                                if (!r.isUndefined(n)) {
                                    var s, c = a ? a + "." + i : i;
                                    if (n && !a && "object" == typeof n)
                                        if (r.endsWith(i, "{}")) n = JSON.stringify(n);
                                        else if (r.endsWith(i, "[]") && (s = r.toArray(n))) return void s.forEach((function(e) {
                                        !r.isUndefined(e) && t.append(c, o(e))
                                    }));
                                    e(n, c)
                                }
                            })), n.pop()
                        } else t.append(a, o(i))
                    }(e), t
                }
            },
            8012: (e, t, n) => {
                "use strict";
                var r = n(9521).version,
                    o = n(643),
                    i = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                    i[e] = function(n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                var a = {};
                i.transitional = function(e, t, n) {
                    function i(e, t) {
                        return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }
                    return function(n, r, s) {
                        if (!1 === e) throw new o(i(r, " has been removed" + (t ? " in " + t : "")), o.ERR_DEPRECATED);
                        return t && !a[r] && (a[r] = !0, console.warn(i(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, s)
                    }
                }, e.exports = {
                    assertOptions: function(e, t, n) {
                        if ("object" != typeof e) throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
                        for (var r = Object.keys(e), i = r.length; i-- > 0;) {
                            var a = r[i],
                                s = t[a];
                            if (s) {
                                var c = e[a],
                                    u = void 0 === c || s(c, a, e);
                                if (!0 !== u) throw new o("option " + a + " must be " + u, o.ERR_BAD_OPTION_VALUE)
                            } else if (!0 !== n) throw new o("Unknown option " + a, o.ERR_BAD_OPTION)
                        }
                    },
                    validators: i
                }
            },
            4976: (e, t, n) => {
                "use strict";
                var r, o = n(4811),
                    i = Object.prototype.toString,
                    a = (r = Object.create(null), function(e) {
                        var t = i.call(e);
                        return r[t] || (r[t] = t.slice(8, -1).toLowerCase())
                    });

                function s(e) {
                    return e = e.toLowerCase(),
                        function(t) {
                            return a(t) === e
                        }
                }

                function c(e) {
                    return Array.isArray(e)
                }

                function u(e) {
                    return void 0 === e
                }
                var l = s("ArrayBuffer");

                function d(e) {
                    return null !== e && "object" == typeof e
                }

                function f(e) {
                    if ("object" !== a(e)) return !1;
                    var t = Object.getPrototypeOf(e);
                    return null === t || t === Object.prototype
                }
                var p = s("Date"),
                    m = s("File"),
                    h = s("Blob"),
                    v = s("FileList");

                function g(e) {
                    return "[object Function]" === i.call(e)
                }
                var w = s("URLSearchParams");

                function y(e, t) {
                    if (null != e)
                        if ("object" != typeof e && (e = [e]), c(e))
                            for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                        else
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
                }
                var b, _ = (b = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array), function(e) {
                    return b && e instanceof b
                });
                e.exports = {
                    isArray: c,
                    isArrayBuffer: l,
                    isBuffer: function(e) {
                        return null !== e && !u(e) && null !== e.constructor && !u(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                    },
                    isFormData: function(e) {
                        var t = "[object FormData]";
                        return e && ("function" == typeof FormData && e instanceof FormData || i.call(e) === t || g(e.toString) && e.toString() === t)
                    },
                    isArrayBufferView: function(e) {
                        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && l(e.buffer)
                    },
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isNumber: function(e) {
                        return "number" == typeof e
                    },
                    isObject: d,
                    isPlainObject: f,
                    isUndefined: u,
                    isDate: p,
                    isFile: m,
                    isBlob: h,
                    isFunction: g,
                    isStream: function(e) {
                        return d(e) && g(e.pipe)
                    },
                    isURLSearchParams: w,
                    isStandardBrowserEnv: function() {
                        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                    },
                    forEach: y,
                    merge: function e() {
                        var t = {};

                        function n(n, r) {
                            f(t[r]) && f(n) ? t[r] = e(t[r], n) : f(n) ? t[r] = e({}, n) : c(n) ? t[r] = n.slice() : t[r] = n
                        }
                        for (var r = 0, o = arguments.length; r < o; r++) y(arguments[r], n);
                        return t
                    },
                    extend: function(e, t, n) {
                        return y(t, (function(t, r) {
                            e[r] = n && "function" == typeof t ? o(t, n) : t
                        })), e
                    },
                    trim: function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    },
                    stripBOM: function(e) {
                        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                    },
                    inherits: function(e, t, n, r) {
                        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n)
                    },
                    toFlatObject: function(e, t, n) {
                        var r, o, i, a = {};
                        t = t || {};
                        do {
                            for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0;) a[i = r[o]] || (t[i] = e[i], a[i] = !0);
                            e = Object.getPrototypeOf(e)
                        } while (e && (!n || n(e, t)) && e !== Object.prototype);
                        return t
                    },
                    kindOf: a,
                    kindOfTest: s,
                    endsWith: function(e, t, n) {
                        e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                        var r = e.indexOf(t, n);
                        return -1 !== r && r === n
                    },
                    toArray: function(e) {
                        if (!e) return null;
                        var t = e.length;
                        if (u(t)) return null;
                        for (var n = new Array(t); t-- > 0;) n[t] = e[t];
                        return n
                    },
                    isTypedArray: _,
                    isFileList: v
                }
            },
            6465: function(e, t, n) {
                "use strict";
                var r = this && this.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    o = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    i = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    a = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initLogoutButtons = t.initSignupButtons = t.initLaunchCheckoutButtons = t.initRemoveSelectedPriceButtons = t.initPlanRemoveButtons = t.initUpdatePlanButtons = t.initForgotPasswordModalButtons = t.initProfileModalButtons = t.initSignupModalButtons = t.initLoginModalButtons = t.initOpenCustomerPortalButtons = t.initLoginRedirectButtons = t.resendVerificationEmail = void 0;
                var s = n(2037),
                    c = a(n(4913)),
                    u = a(n(3826)),
                    l = n(5928);
                t.resendVerificationEmail = function() {
                    var e = Array.from(document.querySelectorAll(s.buttons.sendVerificationEmail));
                    u.default.getCachedMember() && e.map((function(e) {
                        e.addEventListener("click", (function(e) {
                            return o(void 0, void 0, void 0, (function() {
                                var t, n;
                                return i(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            e.preventDefault(), e.stopPropagation(), (0, l.showLoader)(), r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 3, 4, 5]), [4, (0, c.default.methods.sendMemberVerificationEmail)()];
                                        case 2:
                                            return t = r.sent()._internalUseOnly.message, c.default.methods._showMessage(t, !1), [3, 5];
                                        case 3:
                                            return n = r.sent(), console.log(n), [3, 5];
                                        case 4:
                                            return (0, l.hideLoader)(), [7];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initLoginRedirectButtons = function() {
                    var e = Array.from(document.querySelectorAll(s.buttons.loginRedirect));
                    u.default.getCachedMember() && e.map((function(e) {
                        e.addEventListener("click", (function(e) {
                            return o(void 0, void 0, void 0, (function() {
                                var t;
                                return i(this, (function(n) {
                                    return e.preventDefault(), e.stopPropagation(), t = u.default.getCachedMember().loginRedirect, window.location.href = t, [2]
                                }))
                            }))
                        }))
                    }))
                }, t.initOpenCustomerPortalButtons = function() {
                    Array.from(document.querySelectorAll(s.buttons.customerPortal)).map((function(e) {
                        e.addEventListener("click", (function(e) {
                            return o(void 0, void 0, void 0, (function() {
                                var t;
                                return i(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return e.preventDefault(), e.stopPropagation(), (0, l.showLoader)(), t = window._memberstackPortalConfig, [4, c.default.methods.launchStripeCustomerPortal({
                                                configuration: t || void 0
                                            })];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initLoginModalButtons = function() {
                    Array.from(document.querySelectorAll(s.buttons.login)).map((function(e) {
                        e.addEventListener("click", (function() {
                            return o(void 0, void 0, void 0, (function() {
                                var e, t, n, r, o, a, s;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return n = (t = c.default.methods).openModal, r = ["LOGIN"], s = {}, [4, c.default.getApp()];
                                        case 1:
                                            return [4, n.apply(t, r.concat([(s.app = i.sent(), s)]))];
                                        case 2:
                                            if ("LOGIN" !== (e = i.sent()).type && "SIGNUP" !== e.type) return [3, 8];
                                            if (u.default.setMember(e.data.member), c.default.mergeApp({
                                                    contentGroups: e.data.contentGroups
                                                }), o = c.default.selectedPrice, "SIGNUP" !== e.type || !o) return [3, 7];
                                            i.label = 3;
                                        case 3:
                                            return i.trys.push([3, 5, , 6]), (0, l.showLoader)(), [4, (0, l.launchCheckout)(o)];
                                        case 4:
                                            return i.sent(), [3, 6];
                                        case 5:
                                            return a = i.sent(), c.default.methods._hideLoader(), c.default.methods._showMessage(a, !0), [3, 6];
                                        case 6:
                                            return [2];
                                        case 7:
                                            (0, l.handleRedirect)(e.data.redirect || e.data.member.loginRedirect, null), c.default.methods.hideModal(), i.label = 8;
                                        case 8:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initSignupModalButtons = function() {
                    Array.from(document.querySelectorAll(s.buttons.signup)).map((function(e) {
                        e.addEventListener("click", (function() {
                            return o(void 0, void 0, void 0, (function() {
                                var t, n, o, a, s, d, f, p;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return t = c.default.selectedPlan || e.getAttribute("data-ms-plan:add"), a = (o = c.default.methods).openModal, s = ["SIGNUP"], p = {}, [4, c.default.getApp()];
                                        case 1:
                                            return [4, a.apply(o, s.concat([r.apply(void 0, [(p.app = i.sent(), p), t && {
                                                signup: {
                                                    plans: [t]
                                                }
                                            }])]))];
                                        case 2:
                                            return "LOGIN" !== (n = i.sent()).type && "SIGNUP" !== n.type || (u.default.setMember(n.data.member), c.default.mergeApp({
                                                contentGroups: n.data.contentGroups
                                            })), "LOGIN" !== n.type ? [3, 3] : ((0, l.handleRedirect)(n.data.redirect, null), [3, 9]);
                                        case 3:
                                            if ("SIGNUP" !== n.type) return [3, 9];
                                            if (!(d = c.default.selectedPrice)) return [3, 8];
                                            i.label = 4;
                                        case 4:
                                            return i.trys.push([4, 6, , 7]), (0, l.showLoader)(), [4, (0, l.launchCheckout)(d)];
                                        case 5:
                                            return i.sent(), [3, 7];
                                        case 6:
                                            return f = i.sent(), c.default.methods._hideLoader(), c.default.methods._showMessage(f, !0), [3, 7];
                                        case 7:
                                            return [3, 9];
                                        case 8:
                                            (0, l.handleRedirect)(n.data.redirect, null), i.label = 9;
                                        case 9:
                                            return c.default.methods.hideModal(), [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initProfileModalButtons = function() {
                    Array.from(document.querySelectorAll(s.buttons.profile)).map((function(e) {
                        e.addEventListener("click", (function() {
                            return o(void 0, void 0, void 0, (function() {
                                var e, t, n, r, o;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return n = (t = c.default.methods).openModal, r = ["PROFILE"], o = {}, [4, c.default.getApp()];
                                        case 1:
                                            return [4, n.apply(t, r.concat([(o.app = i.sent(), o)]))];
                                        case 2:
                                            if ("LOGOUT" === (e = i.sent()).type) {
                                                if (u.default.purgeCache(), e.data.redirect && window.location.pathname !== e.data.redirect) return [2, window.location.href = e.data.redirect];
                                                c.default.methods._showMessage(e.data.message, !1), setTimeout((function() {
                                                    window.location.reload()
                                                }), 2e3)
                                            }
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initForgotPasswordModalButtons = function() {
                    Array.from(document.querySelectorAll(s.buttons.forgotPassword)).map((function(e) {
                        e.addEventListener("click", (function() {
                            return o(void 0, void 0, void 0, (function() {
                                var e, t, n, r;
                                return i(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return t = (e = c.default.methods).openModal, n = ["FORGOT_PASSWORD"], r = {}, [4, c.default.getApp()];
                                        case 1:
                                            return t.apply(e, n.concat([(r.app = o.sent(), r)])), [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initUpdatePlanButtons = function() {
                    Array.from(document.querySelectorAll("[data-ms-price\\:update]")).map((function(e) {
                        e.addEventListener("click", (function(t) {
                            return o(void 0, void 0, void 0, (function() {
                                var n, r, o, a, s;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return n = e.getAttribute("data-ms-price:update").split(",").filter(Boolean), r = n[0], (o = u.default.getCachedMember()) ? (t.preventDefault(), t.stopPropagation(), a = o.planConnections.some((function(e) {
                                                return "SUBSCRIPTION" === e.type && "CANCELED" !== e.status
                                            })), (0, l.showLoader)(), a ? [3, 2] : [4, (0, l.launchCheckout)(r)]) : [2, c.default.setPrice(r)];
                                        case 1:
                                            return [2, i.sent()];
                                        case 2:
                                            return i.trys.push([2, 4, , 5]), [4, c.default.methods.launchStripeCustomerPortal({
                                                priceIds: n
                                            })];
                                        case 3:
                                            return i.sent(), [3, 5];
                                        case 4:
                                            return s = i.sent(), (0, l.hideLoader)(), c.default.methods._showMessage(s, !0), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initPlanRemoveButtons = function() {
                    Array.from(document.querySelectorAll("[data-ms-plan\\:remove]")).map((function(e) {
                        e.addEventListener("click", (function(t) {
                            return o(void 0, void 0, void 0, (function() {
                                var n, r, o;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            t.preventDefault(), t.stopPropagation(), (0, l.showLoader)(), n = e.getAttribute("data-ms-plan:remove"), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, (0, c.default.methods.removePlan)({
                                                planId: n
                                            })];
                                        case 2:
                                            return r = i.sent()._internalUseOnly.message, (0, l.hideLoader)(), c.default.methods._showMessage(r, !1), setTimeout((function() {
                                                window.location.reload()
                                            }), 2e3), [3, 4];
                                        case 3:
                                            return o = i.sent(), (0, l.hideLoader)(), c.default.methods._showMessage(o.message, !0), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initRemoveSelectedPriceButtons = function() {
                    return o(void 0, void 0, void 0, (function() {
                        return i(this, (function(e) {
                            return Array.from(document.querySelectorAll("[data-ms-price\\:remove='all']")).map((function(e) {
                                e.addEventListener("click", (function(e) {
                                    c.default.clearPrice()
                                }))
                            })), [2]
                        }))
                    }))
                }, t.initLaunchCheckoutButtons = function() {
                    Array.from(document.querySelectorAll("[data-ms-price\\:add]")).map((function(e) {
                        e.addEventListener("click", (function(t) {
                            return o(void 0, void 0, void 0, (function() {
                                var n;
                                return i(this, (function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return n = e.getAttribute("data-ms-price:add"), u.default.getCachedMember() ? (t.preventDefault(), t.stopPropagation(), (0, l.showLoader)(), [4, (0, l.launchCheckout)(n)]) : [2, c.default.setPrice(n)];
                                        case 1:
                                            return r.sent(), (0, l.hideLoader)(), [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initSignupButtons = function() {
                    Array.from(document.querySelectorAll("[data-ms-plan\\:add]")).map((function(e) {
                        e.addEventListener("click", (function(t) {
                            return o(void 0, void 0, void 0, (function() {
                                var n, o, a, s, d, f;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            if (n = e.getAttribute("data-ms-plan:add"), o = e.getAttribute("data-ms-success-message"), !u.default.getCachedMember()) return [2, c.default.setPlan(n)];
                                            t.preventDefault(), t.stopPropagation(), (0, l.showLoader)(), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, (0, c.default.methods.addPlan)({
                                                planId: n
                                            })];
                                        case 2:
                                            return a = i.sent(), s = a.data, d = a._internalUseOnly.message, c.default.mergeApp(r({}, s.app)), u.default.mergeMember(r({}, s.member)), (0, l.hideLoader)(), s.redirect && window.location.pathname !== s.redirect ? [2, window.location.href = s.redirect] : (c.default.methods._showMessage(o || d, !1), setTimeout((function() {
                                                window.location.reload()
                                            }), 2e3), [3, 4]);
                                        case 3:
                                            return f = i.sent(), (0, l.hideLoader)(), c.default.methods._showMessage(f.message, !0), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initLogoutButtons = function() {
                    document.querySelectorAll(s.buttons.logout).forEach((function(e) {
                        e.addEventListener("click", (function(e) {
                            return o(void 0, void 0, void 0, (function() {
                                var t, n, r;
                                return i(this, (function(o) {
                                    switch (o.label) {
                                        case 0:
                                            return e.preventDefault(), e.stopPropagation(), (0, l.showLoader)(), [4, (0, c.default.methods.logout)()];
                                        case 1:
                                            return t = o.sent(), n = t.data, r = t._internalUseOnly.message, u.default.purgeCache(), [4, c.default.refetchAppMember()];
                                        case 2:
                                            return o.sent(), (0, l.hideLoader)(), n.redirect && window.location.pathname !== n.redirect ? [2, window.location.href = n.redirect] : (c.default.methods._showMessage(r, !1), setTimeout((function() {
                                                window.location.reload()
                                            }), 2e3), [2])
                                    }
                                }))
                            }))
                        }))
                    }))
                }
            },
            2037: function(e, t) {
                "use strict";
                var n = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, o, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    },
                    r = this && this.__spreadArray || function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.MemberAttrs = t.NonMemberAttrs = t.content = t.forms = t.buttons = void 0;
                var o = {
                    logout: ["[data-ms-action='logout']"],
                    login: ["[data-ms-modal='login']"],
                    signup: ["[data-ms-modal='signup']"],
                    forgotPassword: ["[data-ms-modal='forgot-password']"],
                    profile: ["[data-ms-modal='profile']"],
                    loginRedirect: ["[data-ms-action='login-redirect']"],
                    customerPortal: ["[data-ms-action='customer-portal']"],
                    sendVerificationEmail: ["[data-ms-action='resend-verification-email']"]
                };
                t.buttons = {
                    logout: o.logout.join(","),
                    login: o.login.join(","),
                    signup: o.signup.join(","),
                    forgotPassword: o.forgotPassword.join(","),
                    profile: o.profile.join(","),
                    loginRedirect: o.loginRedirect.join(","),
                    customerPortal: o.customerPortal.join(","),
                    sendVerificationEmail: o.sendVerificationEmail.join(",")
                }, t.forms = {
                    profile: ["[data-ms-form='profile']"],
                    email: ["[data-ms-form='email']"],
                    password: ["[data-ms-form='password']"]
                }, t.content = {
                    members: ["[data-ms-content='!members']"],
                    nonMembers: ["[data-ms-content='verified']", "[data-ms-content='!verified']", "[data-ms-content='is-trialing']", "[data-ms-content='members']", "[data-ms-content='free-plans']", "[data-ms-content='paid-plans']", "[data-ms-content='no-plans']", "[data-ms-plan\\:remove]", "[data-ms-action=customer-portal]"]
                }, t.NonMemberAttrs = r(r(r(r(r(r(r(r([], n(t.content.nonMembers), !1), n(t.forms.profile), !1), n(t.forms.email), !1), n(t.forms.password), !1), n(o.logout), !1), n(o.loginRedirect), !1), n(o.profile), !1), n(o.sendVerificationEmail), !1), t.MemberAttrs = r([], n(t.content.members), !1)
            },
            2169: function(e, t, n) {
                "use strict";
                var r = this && this.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    o = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    i = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    a = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.initChangePasswordForms = t.initUpdateEmailForms = t.initProfileForms = t.initResetPasswordForm = t.initForgotPasswordForm = t.initLoginForms = t.initConnectAuthProviderForms = t.initSignupForms = t.initCaptcha = t.initLoginAuthProviderButtons = t.initSignupAuthProviderButtons = void 0;
                var s = a(n(4913)),
                    c = a(n(3826)),
                    u = n(5928);

                function l(e) {
                    return (0, u.getElements)('[data-ms-form="'.concat(e, '"]'))
                }
                t.initSignupAuthProviderButtons = function(e, t) {
                    var n = Array.from(e.querySelectorAll("[data-ms-auth-provider]"));
                    n && n.map((function(n) {
                        (0, u.hideAuthDisconnectButtons)(n), n.addEventListener("click", (function(r) {
                            return o(void 0, void 0, void 0, (function() {
                                var o, a, c, l, d, f;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            r.preventDefault(), o = n.getAttribute("data-ms-auth-provider"), a = (0, u.getSignupFormPlans)(e), c = (0, u.getFormCustomFields)(e), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 5, , 6]), [4, s.default.methods.signupWithProvider({
                                                provider: o,
                                                customFields: c,
                                                plans: a
                                            })];
                                        case 2:
                                            return l = i.sent().data, s.default.mergeApp({
                                                contentGroups: l.contentGroups
                                            }), (d = s.default.selectedPrice) ? ((0, u.showLoader)(), [4, (0, u.launchCheckout)(d)]) : [3, 4];
                                        case 3:
                                            return [2, i.sent()];
                                        case 4:
                                            return (0, u.handleRedirect)(l.redirect, t) || (s.default.methods._showMessage(l.message, !1), setTimeout((function() {
                                                window.location.reload()
                                            }), 2e3)), [3, 6];
                                        case 5:
                                            return f = i.sent(), console.log(f), f.message && s.default.methods._showMessage(f.message, !0), [3, 6];
                                        case 6:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initLoginAuthProviderButtons = function(e) {
                    var t = Array.from(e.querySelectorAll("[data-ms-auth-provider]"));
                    t && t.map((function(e) {
                        (0, u.hideAuthDisconnectButtons)(e), e.addEventListener("click", (function(t) {
                            return o(void 0, void 0, void 0, (function() {
                                var n, r, o;
                                return i(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            t.preventDefault(), n = e.getAttribute("data-ms-auth-provider"), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, , 4]), [4, s.default.methods.loginWithProvider({
                                                provider: n
                                            })];
                                        case 2:
                                            return r = i.sent().data, s.default.mergeApp({
                                                contentGroups: r.contentGroups
                                            }), (0, u.handleRedirect)(r.member.loginRedirect, void 0) || (s.default.methods._showMessage(r.message, !1), setTimeout((function() {
                                                window.location.reload()
                                            }), 2e3)), [3, 4];
                                        case 3:
                                            return o = i.sent(), console.log(o), o.message && s.default.methods._showMessage(o.message, !0), [3, 4];
                                        case 4:
                                            return [2]
                                    }
                                }))
                            }))
                        }))
                    }))
                }, t.initCaptcha = function(e) {
                    return o(void 0, void 0, void 0, (function() {
                        var t, n;
                        return i(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return (t = e.querySelector("[data-ms-hcaptcha]")) ? [4, s.default.methods._captchaReady] : [3, 2];
                                case 1:
                                    return r.sent(), n = t.getAttribute("data-ms-hcaptcha"), t.setAttribute("id", "ms-captcha"), [2, window.hcaptcha.render("ms-captcha", {
                                        sitekey: "838711f9-0e30-48e9-89e6-8f1ec4b79705",
                                        theme: n
                                    })];
                                case 2:
                                    return [2, !1]
                            }
                        }))
                    }))
                }, t.initSignupForms = function() {
                    var e = l("signup");
                    e && e.map((function(e) {
                        ! function(e) {
                            var n = this,
                                r = e.getAttribute("redirect");
                            (0, t.initSignupAuthProviderButtons)(e, r);
                            var a = (0, t.initCaptcha)(e),
                                l = e.querySelector("[data-ms-member='email']"),
                                d = e.querySelector("[data-ms-member='password']");

                            function f() {
                                return o(this, void 0, void 0, (function() {
                                    return i(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, window.hcaptcha.execute({
                                                    async: !0
                                                })];
                                            case 1:
                                                return [2, e.sent().response]
                                        }
                                    }))
                                }))
                            }
                            l.type = "email", d.type = "password", e.addEventListener("submit", (function(t) {
                                return o(n, void 0, void 0, (function() {
                                    var n, o, p, m, h, v, g, w;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t.preventDefault(), t.stopPropagation(), n = (0, u.getSignupFormPlans)(e), o = (0, u.getFormCustomFields)(e), (0, u.showLoader)(), [4, a];
                                            case 1:
                                                if (!i.sent()) return [3, 5];
                                                if (p = window.hcaptcha.getResponse()) return [3, 5];
                                                i.label = 2;
                                            case 2:
                                                return i.trys.push([2, 4, , 5]), [4, f()];
                                            case 3:
                                                return p = i.sent(), [3, 5];
                                            case 4:
                                                return i.sent(), (0, u.hideLoader)(), [2];
                                            case 5:
                                                return i.trys.push([5, 9, , 10]), [4, (0, s.default.methods.signupMemberEmailPassword)({
                                                    email: l.value,
                                                    password: d.value,
                                                    customFields: o,
                                                    plans: n,
                                                    captchaToken: p
                                                }, {
                                                    includeContentGroups: !0
                                                })];
                                            case 6:
                                                return m = i.sent(), h = m.data, v = m._internalUseOnly.message, c.default.setMember(h.member), s.default.mergeApp({
                                                    contentGroups: h.contentGroups
                                                }), (g = s.default.selectedPrice) ? [4, (0, u.launchCheckout)(g)] : [3, 8];
                                            case 7:
                                                return [2, i.sent()];
                                            case 8:
                                                return (0, u.handleRedirect)(h.redirect, r) || ((0, u.hideLoader)(), s.default.methods._showMessage(v, !1), setTimeout((function() {
                                                    window.location.reload()
                                                }), 2e3)), [3, 10];
                                            case 9:
                                                return w = i.sent(), console.log(w), (0, u.hideLoader)(),
                                                    function() {
                                                        if (window.hcaptcha) try {
                                                            window.hcaptcha.reset()
                                                        } catch (e) {}
                                                    }(), w.message && s.default.methods._showMessage(w.message, !0), [3, 10];
                                            case 10:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }, t.initConnectAuthProviderForms = function() {
                    var e = Array.from(document.querySelectorAll("[data-ms-auth='manage-providers']"));
                    e && e.map((function(e) {
                        ! function(e) {
                            var t = this;
                            Array.from(e.querySelectorAll("[data-ms-auth-provider]")).map((function(e) {
                                function n(t) {
                                    var n, r = (null === (n = t.auth) || void 0 === n ? void 0 : n.providers) || [],
                                        o = e.querySelector("[data-ms-auth-connected-text]");
                                    if (o) {
                                        var i = o.getAttribute("data-ms-original-text"),
                                            a = o.getAttribute("data-ms-auth-connected-text");
                                        a && r.some((function(t) {
                                            return t.provider === e.getAttribute("data-ms-auth-provider")
                                        })) ? (i || o.setAttribute("data-ms-original-text", o.innerHTML), o.innerHTML = a) : i && (o.innerHTML = i)
                                    }
                                }

                                function a(e, t) {
                                    var n = e.auth;
                                    c.default.mergeMember({
                                        auth: r(r({}, n), {
                                            providers: t.providers
                                        })
                                    })
                                }
                                var l = c.default.getCachedMember(),
                                    d = function(t) {
                                        var n, r;
                                        return null === (r = null === (n = null == t ? void 0 : t.auth) || void 0 === n ? void 0 : n.providers) || void 0 === r ? void 0 : r.some((function(t) {
                                            return t.provider === e.getAttribute("data-ms-auth-provider")
                                        }))
                                    }(l),
                                    f = Boolean(e.querySelector("[data-ms-auth-disconnect]"));
                                d || (0, u.hideAuthDisconnectButtons)(e), l && n(l), e.addEventListener("click", (function(r) {
                                    return o(t, void 0, void 0, (function() {
                                        var t, o, l, p, m, h;
                                        return i(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return r.preventDefault(), r.stopPropagation(), t = e.getAttribute("data-ms-auth-provider"), o = c.default.getCachedMember(), f && d ? [4, (0, s.default.methods.disconnectProvider)({
                                                        provider: t
                                                    })] : [3, 2];
                                                case 1:
                                                    return l = i.sent(), m = l.data, p = l._internalUseOnly.message, a(o, m), n(c.default.getCachedMember()), d = !1, (0, u.hideAuthDisconnectButtons)(e), [2, s.default.methods._showMessage(p, !1)];
                                                case 2:
                                                    return i.trys.push([2, 4, , 5]), [4, s.default.methods.connectProvider({
                                                        provider: t
                                                    })];
                                                case 3:
                                                    return m = i.sent().data, a(o, m), n(c.default.getCachedMember()), d = !0, (0, u.showAuthDisconnectButtons)(e), [2, s.default.methods._showMessage(m.message, !1)];
                                                case 4:
                                                    return (h = i.sent()).message && s.default.methods._showMessage(h.message, !0), [3, 5];
                                                case 5:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }, t.initLoginForms = function() {
                    var e = l("login");
                    e && e.map((function(e) {
                        ! function(e) {
                            var n = this;
                            (0, t.initLoginAuthProviderButtons)(e);
                            var r = e.querySelector("[data-ms-member='email']"),
                                a = e.querySelector("[data-ms-member='password']");
                            r.type = "email", a.type = "password", e.addEventListener("submit", (function(t) {
                                return o(n, void 0, void 0, (function() {
                                    var n, o, l, d, f;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                t.preventDefault(), t.stopPropagation(), (0, u.showLoader)(), i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, (0, s.default.methods.loginMemberEmailPassword)({
                                                    email: r.value,
                                                    password: a.value
                                                }, {
                                                    includeContentGroups: !0,
                                                    isWebflow: !0
                                                })];
                                            case 2:
                                                return n = i.sent(), o = n.data, l = n.message, s.default.mergeApp({
                                                    contentGroups: o.contentGroups
                                                }), d = e.getAttribute("redirect"), (0, u.handleRedirect)(o.member.loginRedirect, d) || ((0, u.hideLoader)(), s.default.methods._showMessage(l, 1), setTimeout((function() { // enable login message !!!!
                                                    window.location.reload()
                                                }), 2e3)), [3, 4];
                                            case 3:
                                            	let icon = 0;
                                            	let showingmessage;
                                            	if(n.success) {
                                            		showingmessage = "Successfully logged in."
                                            		icon = 0;
                                            		window.location.href = '/dashboard';
                                            	} else {
                                            		showingmessage = n.message;
                                            		icon = !0;
                                            	}
                                                return f = i.sent(), console.log(f), (0, u.hideLoader)(), f.message && s.default.methods._showMessage(showingmessage, icon), [3, 4]; // trigger error message here
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }, t.initForgotPasswordForm = function() {
                    var e = l("forgot-password");
                    e && e.map((function(e) {
                        ! function(e) {
                            var t = this,
                                n = e.querySelector("[data-ms-member='email']");
                            e.addEventListener("submit", (function(r) {
                                return o(t, void 0, void 0, (function() {
                                    var t;
                                    return i(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                r.preventDefault(), r.stopPropagation(), (0, u.showLoader)(), o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 3, , 4]), [4, (0, s.default.methods.sendMemberResetPasswordEmail)({
                                                    email: n.value
                                                })];
                                            case 2:
                                                return o.sent(), window.location.href = e.getAttribute("redirect"), (0, u.hideLoader)(), [3, 4];
                                            case 3:
                                                return t = o.sent(), console.log(t), (0, u.hideLoader)(), t.message && s.default.methods._showMessage(t.message, !1), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }, t.initResetPasswordForm = function() {
                    var e = l("reset-password");
                    e && e.map((function(e) {
                        ! function(e) {
                            var t = this,
                                n = e.querySelector("[data-ms-member='token']"),
                                r = e.querySelector("[data-ms-member='password']");
                            e.addEventListener("submit", (function(a) {
                                return o(t, void 0, void 0, (function() {
                                    var t;
                                    return i(this, (function(o) {
                                        switch (o.label) {
                                            case 0:
                                                a.preventDefault(), a.stopPropagation(), (0, u.showLoader)(), o.label = 1;
                                            case 1:
                                                return o.trys.push([1, 3, , 4]), [4, s.default.methods.resetMemberPassword({
                                                    token: n.value,
                                                    newPassword: r.value
                                                })];
                                            case 2:
                                                return o.sent(), window.location.href = e.getAttribute("redirect"), (0, u.hideLoader)(), [3, 4];
                                            case 3:
                                                return t = o.sent(), console.log(t), (0, u.hideLoader)(), t.message && s.default.methods._showMessage(t.message, !0), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }, t.initProfileForms = function() {
                    var e = l("profile");
                    e && e.map((function(e) {
                        ! function(e) {
                            var t = this;
                            e.addEventListener("submit", (function(n) {
                                return o(t, void 0, void 0, (function() {
                                    var t, r, o, a, l, d;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                n.preventDefault(), n.stopPropagation(), (0, u.showLoader)(), t = (0, u.getFormCustomFields)(e), i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, (0, s.default.methods.updateMember)({
                                                    customFields: t
                                                })];
                                            case 2:
                                                return r = i.sent(), o = r.data, a = r._internalUseOnly.message, c.default.setMember(o), (0, u.personalizeText)(o), (0, u.hideLoader)(), (l = e.getAttribute("redirect")) ? window.location.href = l : s.default.methods._showMessage(a, !1), [3, 4];
                                            case 3:
                                                return d = i.sent(), console.log(d), (0, u.hideLoader)(), d.message && s.default.methods._showMessage(d.message, !0), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }, t.initUpdateEmailForms = function() {
                    var e = l("email");
                    e && e.map((function(e) {
                        ! function(e) {
                            var t = this,
                                n = e.querySelector("input[data-ms-member='email']");
                            e.addEventListener("submit", (function(e) {
                                return o(t, void 0, void 0, (function() {
                                    var t, r, o, a;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                e.preventDefault(), e.stopPropagation(), (0, u.showLoader)(), i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 3, , 4]), [4, (0, s.default.methods.updateMemberAuth)({
                                                    email: n.value
                                                })];
                                            case 2:
                                                return t = i.sent(), r = t.data, o = t._internalUseOnly.message, c.default.setMember(r), (0, u.personalizeText)(r), (0, u.hideLoader)(), s.default.methods._showMessage(o, !1), [3, 4];
                                            case 3:
                                                return a = i.sent(), console.log(a), (0, u.hideLoader)(), a.message && s.default.methods._showMessage(a.message, !0), [3, 4];
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }, t.initChangePasswordForms = function() {
                    var e = l("password");
                    e && e.map((function(e) {
                        ! function(e) {
                            var t = this,
                                n = e.querySelector("[data-ms-member='current-password']"),
                                a = e.querySelector("[data-ms-member='new-password']");
                            n && (n.type = "password"), a && (a.type = "password"), e.addEventListener("submit", (function(e) {
                                return o(t, void 0, void 0, (function() {
                                    var t, o, l, d, f;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                e.preventDefault(), e.stopPropagation(), (0, u.showLoader)(), i.label = 1;
                                            case 1:
                                                return i.trys.push([1, 6, , 7]), t = void 0, (o = c.default.getCachedMember()).auth.hasPassword ? [4, (0, s.default.methods.updateMemberAuth)({
                                                    oldPassword: n.value,
                                                    newPassword: a.value
                                                })] : [3, 3];
                                            case 2:
                                                return l = i.sent()._internalUseOnly.message, t = l, [3, 5];
                                            case 3:
                                                return [4, (0, s.default.methods.setPassword)({
                                                    password: a.value
                                                })];
                                            case 4:
                                                l = i.sent()._internalUseOnly.message, t = l, d = o.auth, c.default.mergeMember({
                                                    auth: r(r({}, d), {
                                                        hasPassword: !0
                                                    })
                                                }), i.label = 5;
                                            case 5:
                                                return (0, u.hideLoader)(), s.default.methods._showMessage(t, !1), n && (n.value = ""), a && (a.value = ""), [3, 7];
                                            case 6:
                                                return f = i.sent(), console.log(f), (0, u.hideLoader)(), f.message && s.default.methods._showMessage(f.message, !0), [3, 7];
                                            case 7:
                                                return [2]
                                        }
                                    }))
                                }))
                            }))
                        }(e)
                    }))
                }
            },
            7637: function(e, t, n) {
                "use strict";
                var r = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    o = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    i = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, o, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    },
                    a = this && this.__spreadArray || function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    },
                    s = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.protectPages = t.removeContent = t.initCSS = t.getHiddenElements = void 0;
                var c = n(2037),
                    u = n(5473),
                    l = s(n(4913)),
                    d = s(n(3826)),
                    f = n(5928);
                t.getHiddenElements = function() {
                    var e = l.default.getRestrictedGroupsCache(),
                        t = d.default.getCachedMember(),
                        n = [],
                        r = t ? c.MemberAttrs : c.NonMemberAttrs;
                    n.push.apply(n, a([], i(r), !1));
                    var o = (0, f.getDynamicContent)(t);
                    if (n.push.apply(n, a([], i(o), !1)), e) {
                        var s = e.map((function(e) {
                            var t = e.key,
                                n = e.activeMemberHasAccess;
                            return Boolean(n) ? "[data-ms-content='!".concat(t, "']") : "[data-ms-content='".concat(t, "']")
                        }));
                        n = n.concat.apply(n, a([], i(s), !1))
                    }
                    return n
                }, t.initCSS = function() {
                    var e, n = (e = (0, t.getHiddenElements)(), "".concat(e, " {display: none !important;}")),
                        r = "".concat(n),
                        o = document.createElement("style");
                    o.appendChild(document.createTextNode(r)), document.head.appendChild(o)
                }, t.removeContent = function() {
                    return r(void 0, void 0, void 0, (function() {
                        return o(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return l.default.getRestrictedGroupsCache() ? [3, 2] : [4, l.default.initialAppMemberRefetch()];
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    return (0, t.getHiddenElements)().map((function(e) {
                                        return (0, f.getElements)(e)
                                    })).flat().map((function(e) {
                                        (0, f.removeElement)(e)
                                    })), [2]
                            }
                        }))
                    }))
                }, t.protectPages = function() {
                    return r(void 0, void 0, void 0, (function() {
                        function e(e) {
                            return r(this, void 0, void 0, (function() {
                                var t, r;
                                return o(this, (function(o) {
                                    return (0, u.loggerEnabled)() && console.time("checkPageAccess"), t = e.find((function(e) {
                                        return e.urls.find((function(e) {
                                            var t = e.filter,
                                                r = e.url;
                                            return "STARTS" === t ? n.startsWith(r) : n === r
                                        }))
                                    })), (0, u.loggerEnabled)() && console.timeEnd("checkPageAccess"), console.timeEnd("initMemberstack"), t && (t.activeMemberHasAccess || (r = t.redirect.startsWith("/") ? t.redirect : "/".concat(t.redirect), (0, u.logger)("redirecting to", r), window.location.replace(r))), [2]
                                }))
                            }))
                        }
                        var t, n, i, a;
                        return o(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return (0, u.logger)("protectPages"), t = new URL(window.location.href), n = t.pathname.replace(/^\/+/g, ""), i = l.default.getRestrictedGroupsCache(), (0, u.logger)("protected pages groupsCached", i), i && !l.default.forceRefetch && e(i), [4, l.default.getApp()];
                                case 1:
                                    return a = r.sent(), (0, u.logger)("protected pages awaited app", a), (null == a ? void 0 : a.contentGroups) && e(a.contentGroups), [2]
                            }
                        }))
                    }))
                }
            },
            5473: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.loggerEnabled = t.logger = void 0, t.logger = function(e, t) {
                    window.localStorage.getItem("ms_debug") && (t ? console.log(e, t) : console.log(e))
                }, t.loggerEnabled = function() {
                    return !!window.localStorage.getItem("ms_debug")
                }
            },
            4913: function(e, t, n) {
                "use strict";
                var r, o, i = this && this.__assign || function() {
                        return i = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, i.apply(this, arguments)
                    },
                    a = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    s = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    c = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setMemberCookie = void 0;
                var u = c(n(345)),
                    l = c(n(602));
                t.setMemberCookie = function(e, t) {
                    l.default.set("_ms-mid", e, {
                        expires: t && Number(t) || 3,
                        sameSite: "strict"
                    })
                };
                var d, f = n(9882),
                    p = n(5473),
                    m = null === (r = document.querySelector("[data-memberstack-key]")) || void 0 === r ? void 0 : r.getAttribute("data-memberstack-key"),
                    h = null === (o = document.querySelector("[data-memberstack-app]")) || void 0 === o ? void 0 : o.getAttribute("data-memberstack-app"),
                    v = null === window || void 0 === window ? void 0 : window.ms_session_duration_days,
                    g = u.default.init({
                        publicKey: m,
                        appId: h,
                        sessionDurationDays: v
                    }),
                    w = function() {
                        function e() {
                            var e = window.localStorage.getItem("ms_groups");
                            this.restrictedGroups = e ? JSON.parse(e) : null;
                            var t = new URLSearchParams(window.location.search);
                            this.forceRefetch = Boolean(t.get("forceRefetch")), this.methods = g, this._selectedPlan = window.sessionStorage.getItem("ms_plan"), this._selectedPrice = window.sessionStorage.getItem("ms_price"), this.initialAppMemberRefetch()
                        }
                        return e.prototype.setPlan = function(e) {
                            this._selectedPlan = e, window.sessionStorage.setItem("ms_plan", e), this.clearPrice()
                        }, e.prototype.setPrice = function(e) {
                            this._selectedPrice = e, window.sessionStorage.setItem("ms_price", e), this.clearPlan()
                        }, e.prototype.clearPrice = function() {
                            window.sessionStorage.removeItem("ms_price")
                        }, e.prototype.clearPlan = function() {
                            window.sessionStorage.removeItem("ms_plan")
                        }, Object.defineProperty(e.prototype, "selectedPlan", {
                            get: function() {
                                return this._selectedPlan
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "selectedPrice", {
                            get: function() {
                                return this._selectedPrice
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.getApp = function() {
                            return a(this, void 0, void 0, (function() {
                                return s(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.initialAppMemberRefetch()];
                                        case 1:
                                            return [2, e.sent().app]
                                    }
                                }))
                            }))
                        }, e.prototype.refetchAppMember = function() {
                            return a(this, void 0, void 0, (function() {
                                var e;
                                return s(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return (0, p.logger)("refetchAppMember"), [4, this.methods.getAppAndMember()];
                                        case 1:
                                            return e = t.sent().data, this.restrictedGroups = e.app.contentGroups, this.app = e.app, this.mode = e.app.mode, window.localStorage.setItem("ms_groups", JSON.stringify(this.restrictedGroups)), (0, p.logger)("refetchAppMember DONE"), "sandbox" === this.mode && (0, f.showTestModeLabel)(), [2, e]
                                    }
                                }))
                            }))
                        }, e.prototype.mergeApp = function(e) {
                            return a(this, void 0, void 0, (function() {
                                return s(this, (function(t) {
                                    return this.app = i(i({}, this.app), e), this.restrictedGroups = this.app.contentGroups, window.localStorage.setItem("ms_groups", JSON.stringify(this.restrictedGroups)), [2]
                                }))
                            }))
                        }, e.prototype.initialAppMemberRefetch = function() {
                            return (0, p.logger)("initialAppMemberRefetch"), d || (d = this.refetchAppMember()), d
                        }, e.prototype.getRestrictedGroupsCache = function() {
                            return this.restrictedGroups
                        }, e
                    }(),
                    y = new w;
                t.default = y
            },
            3826: function(e, t, n) {
                "use strict";
                var r = this && this.__assign || function() {
                        return r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }, r.apply(this, arguments)
                    },
                    o = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    i = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    a = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = a(n(4913)),
                    c = new(function() {
                        function e() {
                            var e = new URLSearchParams(window.location.search).get("member"),
                                t = window.localStorage.getItem("_ms-mem");
                            this.member = t ? JSON.parse(t) : null, e && (this.mergeMember(JSON.parse(e)), window.history.replaceState({}, "", "".concat(window.location.pathname))), this.initialRefetch()
                        }
                        return e.prototype.initialRefetch = function() {
                            return o(this, void 0, void 0, (function() {
                                var e;
                                return i(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, s.default.initialAppMemberRefetch()];
                                        case 1:
                                            return e = t.sent(), this.member = e.member, this.member ? this.saveCache() : this.purgeCache(), [2, this.member]
                                    }
                                }))
                            }))
                        }, e.prototype.getMember = function() {
                            return o(this, void 0, void 0, (function() {
                                return i(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return this.member ? [2, this.member] : [4, this.initialRefetch()];
                                        case 1:
                                            return [2, e.sent()]
                                    }
                                }))
                            }))
                        }, e.prototype.getCachedMember = function() {
                            return this.member
                        }, e.prototype.setMember = function(e) {
                            this.member = e, this.saveCache()
                        }, e.prototype.mergeMember = function(e) {
                            this.member = r(r({}, this.member), e), this.saveCache()
                        }, e.prototype.saveCache = function() {
                            var e = JSON.stringify(this.member);
                            e && window.localStorage.setItem("_ms-mem", e)
                        }, e.prototype.purgeCache = function() {
                            window.localStorage.removeItem("login_redirect"), window.localStorage.removeItem("_ms-mem")
                        }, e
                    }());
                t.default = c
            },
            5928: function(__unused_webpack_module, exports, __webpack_require__) {
                "use strict";
                var __awaiter = this && this.__awaiter || function(e, t, n, r) {
                        return new(n || (n = Promise))((function(o, i) {
                            function a(e) {
                                try {
                                    c(r.next(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function s(e) {
                                try {
                                    c(r.throw(e))
                                } catch (e) {
                                    i(e)
                                }
                            }

                            function c(e) {
                                var t;
                                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                    e(t)
                                }))).then(a, s)
                            }
                            c((r = r.apply(e, t || [])).next())
                        }))
                    },
                    __generator = this && this.__generator || function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function s(i) {
                            return function(s) {
                                return function(i) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, s])
                            }
                        }
                    },
                    __read = this && this.__read || function(e, t) {
                        var n = "function" == typeof Symbol && e[Symbol.iterator];
                        if (!n) return e;
                        var r, o, i = n.call(e),
                            a = [];
                        try {
                            for (;
                                (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
                        } catch (e) {
                            o = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (n = i.return) && n.call(i)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    },
                    __spreadArray = this && this.__spreadArray || function(e, t, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                        return e.concat(r || Array.prototype.slice.call(t))
                    },
                    __importDefault = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                }), exports.showAuthDisconnectButtons = exports.hideAuthDisconnectButtons = exports.getSignupFormPlans = exports.getFormCustomFields = exports.handleRedirect = exports.getRemovePlansToHide = exports.getDynamicContent = exports.getElements = exports.removeElement = exports.initMemberText = exports.personalizeText = exports.hideLoader = exports.showLoader = exports.launchCheckout = exports.initMessageBoxes = exports.initLoader = exports.getRestrictedUrlGroups = void 0;
                var memberstack_1 = __importDefault(__webpack_require__(4913)),
                    member_1 = __importDefault(__webpack_require__(3826)),
                    urlGroups, getRestrictedUrlGroups = function() {
                        return __awaiter(void 0, void 0, void 0, (function() {
                            var e;
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return urlGroups ? [3, 2] : [4, memberstack_1.default.methods.getRestrictedUrlGroups()];
                                    case 1:
                                        e = t.sent().data, urlGroups = e, t.label = 2;
                                    case 2:
                                        return [2, urlGroups]
                                }
                            }))
                        }))
                    },
                    loader;
                exports.getRestrictedUrlGroups = getRestrictedUrlGroups;
                var initLoader = function() {
                    loader = document.querySelector("[data-ms-loader]")
                };
                exports.initLoader = initLoader;
                var initMessageBoxes = function() {
                    document.querySelector("[data-ms-message='success']") && (document.querySelector("[data-ms-message='success']").style.display = "none"), document.querySelector("[data-ms-message='error']") && (document.querySelector("[data-ms-message='error']").style.display = "none")
                };
                exports.initMessageBoxes = initMessageBoxes;
                var launchCheckout = function(e) {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return n.trys.push([0, 2, , 3]), [4, memberstack_1.default.methods.purchasePlansWithCheckout({
                                        priceId: e
                                    })];
                                case 1:
                                    return n.sent(), [3, 3];
                                case 2:
                                    return t = n.sent(), (0, exports.hideLoader)(), memberstack_1.default.methods._showMessage(t.message, !0), [3, 3];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                };
                exports.launchCheckout = launchCheckout;
                var showLoader = function() {
                    memberstack_1.default.methods._showLoader(loader)
                };
                exports.showLoader = showLoader;
                var hideLoader = function() {
                    memberstack_1.default.methods._hideLoader(loader)
                };
                exports.hideLoader = hideLoader;
                var personalizeText = function(data) {
                    data.customFields || (data.customFields = {}), data.customFields.id = data.id;
                    var memberText = Array.from(document.querySelectorAll("[data-ms-member]"));
                    memberText.map((function(e) {
                        var t, n, r = e.getAttribute("data-ms-member"),
                            o = data.customFields[r];
                        if (!["signup-date"].includes(r))
                            if (e.children.length > 0 && e.querySelectorAll("[type=checkbox][data-ms-value]").length > 0) Array.from(e.querySelectorAll("[type=checkbox][data-ms-value]")).map((function(e) {
                                var t, n = e.getAttribute("data-ms-value"),
                                    r = (null == o ? void 0 : o.split(",")) || [];
                                e.checked = !!r.includes(n);
                                var i = (null === (t = e.previousElementSibling) || void 0 === t ? void 0 : t.classList.contains("w-checkbox-input--inputType-custom")) ? e.previousElementSibling : null;
                                i && (r.includes(n) ? i.classList.add("w--redirected-checked") : i.classList.remove("w--redirected-checked"))
                            }));
                            else if ("SELECT" !== e.tagName)
                            if ("INPUT" !== e.tagName || "checkbox" !== e.type && "radio" !== e.type) {
                                var i = "email" === r ? data.auth.email : data.customFields[r];
                                i && (e.innerHTML = i, e.value = i, e.src = i)
                            } else {
                                var a = e;
                                switch (a.type) {
                                    case "checkbox":
                                        var s = !0 === o || "true" === o;
                                        a.checked = !!s;
                                        var c = (null === (t = a.previousElementSibling) || void 0 === t ? void 0 : t.classList.contains("w-checkbox-input--inputType-custom")) ? a.previousElementSibling : null;
                                        c && (s ? c.classList.add("w--redirected-checked") : c.classList.remove("w--redirected-checked"));
                                        break;
                                    case "radio":
                                        if (o && o === a.value) {
                                            a.checked = !0;
                                            var u = (null === (n = a.previousElementSibling) || void 0 === n ? void 0 : n.classList.contains("w-form-formradioinput--inputType-custom")) ? a.previousElementSibling : null;
                                            u && (a.checked ? u.classList.add("w--redirected-checked") : u.classList.remove("w--redirected-checked"))
                                        }
                                }
                            }
                        else e.value = o
                    }));
                    var signupDateText = Array.from(document.querySelectorAll("[data-ms-member^='signup-date']"));
                    signupDateText.map((function(el) {
                        var dateSelector = el.getAttribute("data-ms-member"),
                            dateFunction = dateSelector.split(".")[1],
                            date = dateFunction ? eval("new Date(data.createdAt).".concat(dateFunction)) : new Date(data.createdAt).toDateString();
                        el.innerHTML = date
                    }))
                };
                exports.personalizeText = personalizeText;
                var initMemberText = function() {
                    return __awaiter(void 0, void 0, void 0, (function() {
                        var e, t;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, member_1.default.getMember()];
                                case 1:
                                    return (e = n.sent()) && (0, exports.personalizeText)(e), [4, member_1.default.initialRefetch()];
                                case 2:
                                    return (t = n.sent()) ? ((0, exports.personalizeText)(t), [2]) : [2]
                            }
                        }))
                    }))
                };
                exports.initMemberText = initMemberText;
                var removeElement = function(e) {
                    try {
                        e.remove()
                    } catch (t) {
                        e.parentNode.removeChild(e)
                    }
                };
                exports.removeElement = removeElement;
                var getElements = function(e) {
                    return Array.from(document.querySelectorAll(e))
                };
                exports.getElements = getElements;
                var getDynamicContent = function(e) {
                    var t, n = [];
                    return e && (e.planConnections.some((function(e) {
                        return "FREE" === e.type
                    })) ? n.push("[data-ms-content='!free-plans']") : n.push("[data-ms-content='free-plans']"), e.planConnections.some((function(e) {
                        return "FREE" !== e.type && "CANCELED" !== e.status
                    })) ? n.push("[data-ms-content='!paid-plans']") : n.push("[data-ms-content='paid-plans']"), e.planConnections.filter((function(e) {
                        return "CANCELED" !== e.status
                    })).length > 0 ? n.push("[data-ms-content='no-plans']") : n.push("[data-ms-content='!no-plans']"), e.planConnections.some((function(e) {
                        return "TRIALING" === e.status
                    })) ? n.push("[data-ms-content='!is-trialing']") : n.push("[data-ms-content='is-trialing']"), e.verified ? n.push("[data-ms-content='!verified']", "[data-ms-action='resend-verification-email']") : n.push("[data-ms-content='verified']"), (null === (t = e.auth) || void 0 === t ? void 0 : t.hasPassword) ? n.push("[data-ms-content='!has-password']") : n.push("[data-ms-content='has-password']"), e.stripeCustomerId || n.push("[data-ms-action='customer-portal']"), n.push.apply(n, __spreadArray([], __read((0, exports.getRemovePlansToHide)()), !1))), n
                };
                exports.getDynamicContent = getDynamicContent;
                var getRemovePlansToHide = function() {
                    var e = Array.from(document.querySelectorAll("[data-ms-plan\\:remove]"));
                    if (e) return e.map((function(e) {
                        var t, n = e.getAttribute("data-ms-plan:remove");
                        return (null === (t = member_1.default.getCachedMember()) || void 0 === t ? void 0 : t.planConnections.some((function(e) {
                            return e.planId === n && "CANCELED" !== e.status
                        }))) ? void 0 : "[data-ms-plan\\:remove=".concat(n, "]")
                    }))
                };
                exports.getRemovePlansToHide = getRemovePlansToHide;
                var handleRedirect = function(e, t) {
                    return t ? window.location.href = t : e && window.location.pathname !== e ? window.location.href = e : void 0
                };
                exports.handleRedirect = handleRedirect;
                var getFormCustomFields = function(e) {
                    var t = {},
                        n = Array.from(e.querySelectorAll("[data-ms-member]")).filter((function(e) {
                            var t = e.getAttribute("data-ms-member");
                            return "email" !== t && "password" !== t
                        })),
                        r = n.filter((function(e) {
                            return ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || "SELECT" === e.tagName) && "checkbox" !== e.type && "radio" !== e.type
                        })),
                        o = n.filter((function(e) {
                            return "INPUT" === e.tagName && "checkbox" === e.type
                        })),
                        i = n.filter((function(e) {
                            return "INPUT" === e.tagName && "radio" === e.type
                        })),
                        a = n.filter((function(e) {
                            return "DIV" === e.tagName
                        }));
                    r.map((function(e) {
                        var n = e.getAttribute("data-ms-member");
                        t[n] = e.value
                    })), o.map((function(e) {
                        var n = e.getAttribute("data-ms-member");
                        t[n] = e.checked.toString()
                    }));
                    var s = i.reduce((function(e, t) {
                        return (e[t.getAttribute("data-ms-member")] = e[t.getAttribute("data-ms-member")] || []).push(t), e
                    }), {});
                    return Object.keys(s).map((function(e) {
                        var n = (s[e] || []).find((function(e) {
                            return !0 === e.checked
                        }));
                        n && (t[e] = n.value)
                    })), a.map((function(e) {
                        var n = e.getAttribute("data-ms-member"),
                            r = Array.from(e.querySelectorAll("[data-ms-value]")).filter((function(e) {
                                return !0 === e.checked
                            })).map((function(e) {
                                return e.getAttribute("data-ms-value")
                            }));
                        t[n] = r.join(",")
                    })), t
                };
                exports.getFormCustomFields = getFormCustomFields;
                var getSignupFormPlans = function(e) {
                    var t = [],
                        n = e.getAttribute("data-ms-plan") || e.getAttribute("data-ms-plan:add") || e.getAttribute("data-ms-plan:update");
                    return n ? "no-plan" !== n && (t = null == n ? void 0 : n.split(",").map((function(e) {
                        return {
                            planId: e
                        }
                    }))) : memberstack_1.default.selectedPlan && (t = [{
                        planId: memberstack_1.default.selectedPlan
                    }]), t
                };
                exports.getSignupFormPlans = getSignupFormPlans;
                var hideAuthDisconnectButtons = function(e) {
                    var t = Array.from(e.querySelectorAll("[data-ms-auth-disconnect]")).map((function(e) {
                        e.style.display = "none"
                    }));
                    return Boolean(t.length > 0)
                };
                exports.hideAuthDisconnectButtons = hideAuthDisconnectButtons;
                var showAuthDisconnectButtons = function(e) {
                    Array.from(e.querySelectorAll("[data-ms-auth-disconnect]")).map((function(e) {
                        e.style.removeProperty("display")
                    }))
                };
                exports.showAuthDisconnectButtons = showAuthDisconnectButtons
            },
            9882: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.showTestModeLabel = void 0, t.showTestModeLabel = function() {
                    var e = "ms-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                        t = 0,
                        n = function() {
                            var t = ".ms-test-label, .".concat(e, " { z-index: 2000000; position: fixed; left: 0%; top: auto; right: 0%; bottom: 10px; width: 89px; margin-right: auto; margin-left: auto; padding: 4px 6px; -webkit-box-flex: 0; -webkit-flex: 0 0 auto; -ms-flex: 0 0 auto; flex: 0 0 auto; border: 1px solid #e4d2fd; border-radius: 4px; background-color: #f6f0fd; color: #6200ea; font-size: 14px; font-weight: 500; text-align: center; letter-spacing: -0.01em; }"),
                                n = document.createElement("style");
                            n.appendChild(document.createTextNode(t)), document.head.appendChild(n);
                            var r = '<div class="ms-test-label '.concat(e, '" data-ms-test-mode-label style="display: block !important; pointer-events: none !important;">Test Mode</div>'),
                                o = document.createElement("div");
                            o.innerHTML = r, document.body.appendChild(o)
                        };
                    n(), setInterval((function() {
                        var r = document.querySelector(".".concat(e)),
                            o = document.querySelectorAll(".ms-test-label");
                        r.innerHTML = "Test Mode", (!r || o.length >= 3) && (++t >= 3 && (window.location.href = "https://www.memberstack.com/pricing"), e = "ms-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), n())
                    }), 5e3)
                }
            },
            4893: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    CompactEncrypt: () => Qe,
                    CompactSign: () => tt,
                    EmbeddedJWK: () => ut,
                    EncryptJWT: () => at,
                    FlattenedEncrypt: () => Ue,
                    FlattenedSign: () => et,
                    GeneralEncrypt: () => We,
                    GeneralSign: () => rt,
                    SignJWT: () => it,
                    UnsecuredJWT: () => vt,
                    base64url: () => o,
                    calculateJwkThumbprint: () => ct,
                    compactDecrypt: () => Le,
                    compactVerify: () => je,
                    createLocalJWKSet: () => pt,
                    createRemoteJWKSet: () => ht,
                    decodeJwt: () => bt,
                    decodeProtectedHeader: () => yt,
                    errors: () => r,
                    exportJWK: () => Oe,
                    exportPKCS8: () => Re,
                    exportSPKI: () => Te,
                    flattenedDecrypt: () => Me,
                    flattenedVerify: () => Je,
                    generalDecrypt: () => He,
                    generalVerify: () => Fe,
                    generateKeyPair: () => St,
                    generateSecret: () => xt,
                    importJWK: () => Ee,
                    importPKCS8: () => $e,
                    importSPKI: () => Se,
                    importX509: () => xe,
                    jwtDecrypt: () => Xe,
                    jwtVerify: () => Ze
                });
                var r = {};
                n.r(r), n.d(r, {
                    JOSEAlgNotAllowed: () => x,
                    JOSEError: () => b,
                    JOSENotSupported: () => $,
                    JWEDecryptionFailed: () => E,
                    JWEInvalid: () => A,
                    JWKInvalid: () => C,
                    JWKSInvalid: () => M,
                    JWKSMultipleMatchingKeys: () => H,
                    JWKSNoMatchingKey: () => L,
                    JWKSTimeout: () => T,
                    JWSInvalid: () => P,
                    JWSSignatureVerificationFailed: () => R,
                    JWTClaimValidationFailed: () => _,
                    JWTExpired: () => S,
                    JWTInvalid: () => k
                });
                var o = {};
                n.r(o), n.d(o, {
                    decode: () => wt,
                    encode: () => gt
                });
                const i = crypto,
                    a = e => e instanceof CryptoKey,
                    s = async (e, t) => {
                        const n = `SHA-${e.slice(-3)}`;
                        return new Uint8Array(await i.subtle.digest(n, t))
                    }, c = new TextEncoder, u = new TextDecoder, l = 2 ** 32;

                function d(...e) {
                    const t = e.reduce(((e, {
                            length: t
                        }) => e + t), 0),
                        n = new Uint8Array(t);
                    let r = 0;
                    return e.forEach((e => {
                        n.set(e, r), r += e.length
                    })), n
                }

                function f(e, t, n) {
                    if (t < 0 || t >= l) throw new RangeError(`value must be >= 0 and <= 4294967295. Received ${t}`);
                    e.set([t >>> 24, t >>> 16, t >>> 8, 255 & t], n)
                }

                function p(e) {
                    const t = Math.floor(e / l),
                        n = e % l,
                        r = new Uint8Array(8);
                    return f(r, t, 0), f(r, n, 4), r
                }

                function m(e) {
                    const t = new Uint8Array(4);
                    return f(t, e), t
                }

                function h(e) {
                    return d(m(e.length), e)
                }
                const v = e => {
                        let t = e;
                        "string" == typeof t && (t = c.encode(t));
                        const n = [];
                        for (let e = 0; e < t.length; e += 32768) n.push(String.fromCharCode.apply(null, t.subarray(e, e + 32768)));
                        return btoa(n.join(""))
                    },
                    g = e => v(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"),
                    w = e => {
                        const t = atob(e),
                            n = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
                        return n
                    },
                    y = e => {
                        let t = e;
                        t instanceof Uint8Array && (t = u.decode(t)), t = t.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
                        try {
                            return w(t)
                        } catch (e) {
                            throw new TypeError("The input to be decoded is not correctly encoded.")
                        }
                    };
                class b extends Error {
                    constructor(e) {
                        var t;
                        super(e), this.code = "ERR_JOSE_GENERIC", this.name = this.constructor.name, null === (t = Error.captureStackTrace) || void 0 === t || t.call(Error, this, this.constructor)
                    }
                    static get code() {
                        return "ERR_JOSE_GENERIC"
                    }
                }
                class _ extends b {
                    constructor(e, t = "unspecified", n = "unspecified") {
                        super(e), this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED", this.claim = t, this.reason = n
                    }
                    static get code() {
                        return "ERR_JWT_CLAIM_VALIDATION_FAILED"
                    }
                }
                class S extends b {
                    constructor(e, t = "unspecified", n = "unspecified") {
                        super(e), this.code = "ERR_JWT_EXPIRED", this.claim = t, this.reason = n
                    }
                    static get code() {
                        return "ERR_JWT_EXPIRED"
                    }
                }
                class x extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JOSE_ALG_NOT_ALLOWED"
                    }
                    static get code() {
                        return "ERR_JOSE_ALG_NOT_ALLOWED"
                    }
                }
                class $ extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JOSE_NOT_SUPPORTED"
                    }
                    static get code() {
                        return "ERR_JOSE_NOT_SUPPORTED"
                    }
                }
                class E extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWE_DECRYPTION_FAILED", this.message = "decryption operation failed"
                    }
                    static get code() {
                        return "ERR_JWE_DECRYPTION_FAILED"
                    }
                }
                class A extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWE_INVALID"
                    }
                    static get code() {
                        return "ERR_JWE_INVALID"
                    }
                }
                class P extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWS_INVALID"
                    }
                    static get code() {
                        return "ERR_JWS_INVALID"
                    }
                }
                class k extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWT_INVALID"
                    }
                    static get code() {
                        return "ERR_JWT_INVALID"
                    }
                }
                class C extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWK_INVALID"
                    }
                    static get code() {
                        return "ERR_JWK_INVALID"
                    }
                }
                class M extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWKS_INVALID"
                    }
                    static get code() {
                        return "ERR_JWKS_INVALID"
                    }
                }
                class L extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWKS_NO_MATCHING_KEY", this.message = "no applicable key found in the JSON Web Key Set"
                    }
                    static get code() {
                        return "ERR_JWKS_NO_MATCHING_KEY"
                    }
                }
                class H extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS", this.message = "multiple matching keys found in the JSON Web Key Set"
                    }
                    static get code() {
                        return "ERR_JWKS_MULTIPLE_MATCHING_KEYS"
                    }
                }
                class T extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWKS_TIMEOUT", this.message = "request timed out"
                    }
                    static get code() {
                        return "ERR_JWKS_TIMEOUT"
                    }
                }
                class R extends b {
                    constructor() {
                        super(...arguments), this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED", this.message = "signature verification failed"
                    }
                    static get code() {
                        return "ERR_JWS_SIGNATURE_VERIFICATION_FAILED"
                    }
                }
                const O = i.getRandomValues.bind(i);

                function D(e) {
                    switch (e) {
                        case "A128GCM":
                        case "A128GCMKW":
                        case "A192GCM":
                        case "A192GCMKW":
                        case "A256GCM":
                        case "A256GCMKW":
                            return 96;
                        case "A128CBC-HS256":
                        case "A192CBC-HS384":
                        case "A256CBC-HS512":
                            return 128;
                        default:
                            throw new $(`Unsupported JWE Algorithm: ${e}`)
                    }
                }
                const I = e => O(new Uint8Array(D(e) >> 3)),
                    U = (e, t) => {
                        if (t.length << 3 !== D(e)) throw new A("Invalid Initialization Vector length")
                    },
                    K = (e, t) => {
                        if (e.length << 3 !== t) throw new A("Invalid Content Encryption Key length")
                    };

                function W() {
                    return "function" == typeof WebSocketPair
                }

                function N() {
                    try {
                        return void 0 !== process.versions.node
                    } catch (e) {
                        return !1
                    }
                }

                function B(e, t = "algorithm.name") {
                    return new TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)
                }

                function J(e, t) {
                    return e.name === t
                }

                function j(e) {
                    return parseInt(e.name.slice(4), 10)
                }

                function F(e, t) {
                    if (t.length && !t.some((t => e.usages.includes(t)))) {
                        let e = "CryptoKey does not support this operation, its usages must include ";
                        if (t.length > 2) {
                            const n = t.pop();
                            e += `one of ${t.join(", ")}, or ${n}.`
                        } else 2 === t.length ? e += `one of ${t[0]} or ${t[1]}.` : e += `${t[0]}.`;
                        throw new TypeError(e)
                    }
                }

                function V(e, t, ...n) {
                    switch (t) {
                        case "A128GCM":
                        case "A192GCM":
                        case "A256GCM": {
                            if (!J(e.algorithm, "AES-GCM")) throw B("AES-GCM");
                            const n = parseInt(t.slice(1, 4), 10);
                            if (e.algorithm.length !== n) throw B(n, "algorithm.length");
                            break
                        }
                        case "A128KW":
                        case "A192KW":
                        case "A256KW": {
                            if (!J(e.algorithm, "AES-KW")) throw B("AES-KW");
                            const n = parseInt(t.slice(1, 4), 10);
                            if (e.algorithm.length !== n) throw B(n, "algorithm.length");
                            break
                        }
                        case "ECDH":
                            if (!J(e.algorithm, "ECDH")) throw B("ECDH");
                            break;
                        case "PBES2-HS256+A128KW":
                        case "PBES2-HS384+A192KW":
                        case "PBES2-HS512+A256KW":
                            if (!J(e.algorithm, "PBKDF2")) throw B("PBKDF2");
                            break;
                        case "RSA-OAEP":
                        case "RSA-OAEP-256":
                        case "RSA-OAEP-384":
                        case "RSA-OAEP-512": {
                            if (!J(e.algorithm, "RSA-OAEP")) throw B("RSA-OAEP");
                            const n = parseInt(t.slice(9), 10) || 1;
                            if (j(e.algorithm.hash) !== n) throw B(`SHA-${n}`, "algorithm.hash");
                            break
                        }
                        default:
                            throw new TypeError("CryptoKey does not support this operation")
                    }
                    F(e, n)
                }
                const G = (e, ...t) => {
                        let n = "Key must be ";
                        if (t.length > 2) {
                            const e = t.pop();
                            n += `one of type ${t.join(", ")}, or ${e}.`
                        } else 2 === t.length ? n += `one of type ${t[0]} or ${t[1]}.` : n += `of type ${t[0]}.`;
                        return null == e ? n += ` Received ${e}` : "function" == typeof e && e.name ? n += ` Received function ${e.name}` : "object" == typeof e && null != e && e.constructor && e.constructor.name && (n += ` Received an instance of ${e.constructor.name}`), n
                    },
                    z = e => a(e),
                    q = ["CryptoKey"],
                    Y = async (e, t, n, r, o, s) => {
                        if (!(a(t) || t instanceof Uint8Array)) throw new TypeError(G(t, ...q, "Uint8Array"));
                        switch (U(e, r), e) {
                            case "A128CBC-HS256":
                            case "A192CBC-HS384":
                            case "A256CBC-HS512":
                                return t instanceof Uint8Array && K(t, parseInt(e.slice(-3), 10)), async function(e, t, n, r, o, a) {
                                    if (!(t instanceof Uint8Array)) throw new TypeError(G(t, "Uint8Array"));
                                    const s = parseInt(e.slice(1, 4), 10),
                                        c = await i.subtle.importKey("raw", t.subarray(s >> 3), "AES-CBC", !1, ["decrypt"]),
                                        u = await i.subtle.importKey("raw", t.subarray(0, s >> 3), {
                                            hash: "SHA-" + (s << 1),
                                            name: "HMAC"
                                        }, !1, ["sign"]),
                                        l = d(a, r, n, p(a.length << 3)),
                                        f = new Uint8Array((await i.subtle.sign("HMAC", u, l)).slice(0, s >> 3));
                                    let m, h;
                                    try {
                                        m = ((e, t) => {
                                            if (!(e instanceof Uint8Array)) throw new TypeError("First argument must be a buffer");
                                            if (!(t instanceof Uint8Array)) throw new TypeError("Second argument must be a buffer");
                                            if (e.length !== t.length) throw new TypeError("Input buffers must have the same length");
                                            const n = e.length;
                                            let r = 0,
                                                o = -1;
                                            for (; ++o < n;) r |= e[o] ^ t[o];
                                            return 0 === r
                                        })(o, f)
                                    } catch (e) {}
                                    if (!m) throw new E;
                                    try {
                                        h = new Uint8Array(await i.subtle.decrypt({
                                            iv: r,
                                            name: "AES-CBC"
                                        }, c, n))
                                    } catch (e) {}
                                    if (!h) throw new E;
                                    return h
                                }(e, t, n, r, o, s);
                            case "A128GCM":
                            case "A192GCM":
                            case "A256GCM":
                                return t instanceof Uint8Array && K(t, parseInt(e.slice(1, 4), 10)), async function(e, t, n, r, o, a) {
                                    let s;
                                    t instanceof Uint8Array ? s = await i.subtle.importKey("raw", t, "AES-GCM", !1, ["decrypt"]) : (V(t, e, "decrypt"), s = t);
                                    try {
                                        return new Uint8Array(await i.subtle.decrypt({
                                            additionalData: a,
                                            iv: r,
                                            name: "AES-GCM",
                                            tagLength: 128
                                        }, s, d(n, o)))
                                    } catch (e) {
                                        throw new E
                                    }
                                }(e, t, n, r, o, s);
                            default:
                                throw new $("Unsupported JWE Content Encryption Algorithm")
                        }
                    }, Z = async () => {
                        throw new $('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `inflateRaw` decrypt option to provide Inflate Raw implementation.')
                    }, X = async () => {
                        throw new $('JWE "zip" (Compression Algorithm) Header Parameter is not supported by your javascript runtime. You need to use the `deflateRaw` encrypt option to provide Deflate Raw implementation.')
                    }, Q = (...e) => {
                        const t = e.filter(Boolean);
                        if (0 === t.length || 1 === t.length) return !0;
                        let n;
                        for (const e of t) {
                            const t = Object.keys(e);
                            if (n && 0 !== n.size)
                                for (const e of t) {
                                    if (n.has(e)) return !1;
                                    n.add(e)
                                } else n = new Set(t)
                        }
                        return !0
                    };

                function ee(e) {
                    if ("object" != typeof(t = e) || null === t || "[object Object]" !== Object.prototype.toString.call(e)) return !1;
                    var t;
                    if (null === Object.getPrototypeOf(e)) return !0;
                    let n = e;
                    for (; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
                    return Object.getPrototypeOf(e) === n
                }
                const te = [{
                    hash: "SHA-256",
                    name: "HMAC"
                }, !0, ["sign"]];

                function ne(e, t) {
                    if (e.algorithm.length !== parseInt(t.slice(1, 4), 10)) throw new TypeError(`Invalid key size for alg: ${t}`)
                }

                function re(e, t, n) {
                    if (a(e)) return V(e, t, n), e;
                    if (e instanceof Uint8Array) return i.subtle.importKey("raw", e, "AES-KW", !0, [n]);
                    throw new TypeError(G(e, ...q, "Uint8Array"))
                }
                const oe = async (e, t, n) => {
                    const r = await re(t, e, "wrapKey");
                    ne(r, e);
                    const o = await i.subtle.importKey("raw", n, ...te);
                    return new Uint8Array(await i.subtle.wrapKey("raw", o, r, "AES-KW"))
                }, ie = async (e, t, n) => {
                    const r = await re(t, e, "unwrapKey");
                    ne(r, e);
                    const o = await i.subtle.unwrapKey("raw", n, r, "AES-KW", ...te);
                    return new Uint8Array(await i.subtle.exportKey("raw", o))
                };
                async function ae(e, t, n, r, o = new Uint8Array(0), u = new Uint8Array(0)) {
                    if (!a(e)) throw new TypeError(G(e, ...q));
                    if (V(e, "ECDH"), !a(t)) throw new TypeError(G(t, ...q));
                    V(t, "ECDH", "deriveBits");
                    const l = d(h(c.encode(n)), h(o), h(u), m(r));
                    return async function(e, t, n) {
                        const r = Math.ceil((t >> 3) / 32),
                            o = new Uint8Array(32 * r);
                        for (let t = 0; t < r; t++) {
                            const r = new Uint8Array(4 + e.length + n.length);
                            r.set(m(t + 1)), r.set(e, 4), r.set(n, 4 + e.length), o.set(await s("sha256", r), 32 * t)
                        }
                        return o.slice(0, t >> 3)
                    }(new Uint8Array(await i.subtle.deriveBits({
                        name: "ECDH",
                        public: e
                    }, t, Math.ceil(parseInt(t.algorithm.namedCurve.slice(-3), 10) / 8) << 3)), r, l)
                }

                function se(e) {
                    if (!a(e)) throw new TypeError(G(e, ...q));
                    return ["P-256", "P-384", "P-521"].includes(e.algorithm.namedCurve)
                }
                async function ce(e, t, n, r) {
                    ! function(e) {
                        if (!(e instanceof Uint8Array) || e.length < 8) throw new A("PBES2 Salt Input must be 8 or more octets")
                    }(e);
                    const o = function(e, t) {
                            return d(c.encode(e), new Uint8Array([0]), t)
                        }(t, e),
                        s = parseInt(t.slice(13, 16), 10),
                        u = {
                            hash: `SHA-${t.slice(8,11)}`,
                            iterations: n,
                            name: "PBKDF2",
                            salt: o
                        },
                        l = {
                            length: s,
                            name: "AES-KW"
                        },
                        f = await
                    function(e, t) {
                        if (e instanceof Uint8Array) return i.subtle.importKey("raw", e, "PBKDF2", !1, ["deriveBits"]);
                        if (a(e)) return V(e, t, "deriveBits", "deriveKey"), e;
                        throw new TypeError(G(e, ...q, "Uint8Array"))
                    }(r, t);
                    if (f.usages.includes("deriveBits")) return new Uint8Array(await i.subtle.deriveBits(u, f, s));
                    if (f.usages.includes("deriveKey")) return i.subtle.deriveKey(u, f, l, !1, ["wrapKey", "unwrapKey"]);
                    throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"')
                }

                function ue(e) {
                    switch (e) {
                        case "RSA-OAEP":
                        case "RSA-OAEP-256":
                        case "RSA-OAEP-384":
                        case "RSA-OAEP-512":
                            return "RSA-OAEP";
                        default:
                            throw new $(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                    }
                }
                const le = (e, t) => {
                    if (e.startsWith("RS") || e.startsWith("PS")) {
                        const {
                            modulusLength: n
                        } = t.algorithm;
                        if ("number" != typeof n || n < 2048) throw new TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)
                    }
                };

                function de(e) {
                    switch (e) {
                        case "A128GCM":
                            return 128;
                        case "A192GCM":
                            return 192;
                        case "A256GCM":
                        case "A128CBC-HS256":
                            return 256;
                        case "A192CBC-HS384":
                            return 384;
                        case "A256CBC-HS512":
                            return 512;
                        default:
                            throw new $(`Unsupported JWE Algorithm: ${e}`)
                    }
                }
                const fe = e => O(new Uint8Array(de(e) >> 3)),
                    pe = (e, t) => `-----BEGIN ${t}-----\n${(e.match(/.{1,64}/g)||[]).join("\n")}\n-----END ${t}-----`,
                    me = async (e, t, n) => {
                        if (!a(n)) throw new TypeError(G(n, ...q));
                        if (!n.extractable) throw new TypeError("CryptoKey is not extractable");
                        if (n.type !== e) throw new TypeError(`key is not a ${e} key`);
                        return pe(v(new Uint8Array(await i.subtle.exportKey(t, n))), `${e.toUpperCase()} KEY`)
                    }, he = (e, t, n = 0) => {
                        0 === n && (t.unshift(t.length), t.unshift(6));
                        let r = e.indexOf(t[0], n);
                        if (-1 === r) return !1;
                        const o = e.subarray(r, r + t.length);
                        return o.length === t.length && (o.every(((e, n) => e === t[n])) || he(e, t, r + 1))
                    }, ve = e => {
                        switch (!0) {
                            case he(e, [42, 134, 72, 206, 61, 3, 1, 7]):
                                return "P-256";
                            case he(e, [43, 129, 4, 0, 34]):
                                return "P-384";
                            case he(e, [43, 129, 4, 0, 35]):
                                return "P-521";
                            case (W() || N()) && he(e, [43, 101, 112]):
                                return "Ed25519";
                            case N() && he(e, [43, 101, 113]):
                                return "Ed448";
                            default:
                                throw new $("Invalid or unsupported EC Key Curve or OKP Key Sub Type")
                        }
                    }, ge = async (e, t, n, r, o) => {
                        var a;
                        let s, c;
                        const u = new Uint8Array(atob(n.replace(e, "")).split("").map((e => e.charCodeAt(0)))),
                            l = "spki" === t;
                        switch (r) {
                            case "PS256":
                            case "PS384":
                            case "PS512":
                                s = {
                                    name: "RSA-PSS",
                                    hash: `SHA-${r.slice(-3)}`
                                }, c = l ? ["verify"] : ["sign"];
                                break;
                            case "RS256":
                            case "RS384":
                            case "RS512":
                                s = {
                                    name: "RSASSA-PKCS1-v1_5",
                                    hash: `SHA-${r.slice(-3)}`
                                }, c = l ? ["verify"] : ["sign"];
                                break;
                            case "RSA-OAEP":
                            case "RSA-OAEP-256":
                            case "RSA-OAEP-384":
                            case "RSA-OAEP-512":
                                s = {
                                    name: "RSA-OAEP",
                                    hash: `SHA-${parseInt(r.slice(-3),10)||1}`
                                }, c = l ? ["encrypt", "wrapKey"] : ["decrypt", "unwrapKey"];
                                break;
                            case "ES256":
                                s = {
                                    name: "ECDSA",
                                    namedCurve: "P-256"
                                }, c = l ? ["verify"] : ["sign"];
                                break;
                            case "ES384":
                                s = {
                                    name: "ECDSA",
                                    namedCurve: "P-384"
                                }, c = l ? ["verify"] : ["sign"];
                                break;
                            case "ES512":
                                s = {
                                    name: "ECDSA",
                                    namedCurve: "P-521"
                                }, c = l ? ["verify"] : ["sign"];
                                break;
                            case "ECDH-ES":
                            case "ECDH-ES+A128KW":
                            case "ECDH-ES+A192KW":
                            case "ECDH-ES+A256KW":
                                s = {
                                    name: "ECDH",
                                    namedCurve: ve(u)
                                }, c = l ? [] : ["deriveBits"];
                                break;
                            case (W() || N()) && "EdDSA":
                                const e = ve(u).toUpperCase();
                                s = {
                                    name: `NODE-${e}`,
                                    namedCurve: `NODE-${e}`
                                }, c = l ? ["verify"] : ["sign"];
                                break;
                            default:
                                throw new $('Invalid or unsupported "alg" (Algorithm) value')
                        }
                        return i.subtle.importKey(t, u, s, null !== (a = null == o ? void 0 : o.extractable) && void 0 !== a && a, c)
                    }, we = (e, t, n) => ge(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g, "spki", e, t, n), ye = async e => {
                        var t, n;
                        const {
                            algorithm: r,
                            keyUsages: o
                        } = function(e) {
                            let t, n;
                            switch (e.kty) {
                                case "oct":
                                    switch (e.alg) {
                                        case "HS256":
                                        case "HS384":
                                        case "HS512":
                                            t = {
                                                name: "HMAC",
                                                hash: `SHA-${e.alg.slice(-3)}`
                                            }, n = ["sign", "verify"];
                                            break;
                                        case "A128CBC-HS256":
                                        case "A192CBC-HS384":
                                        case "A256CBC-HS512":
                                            throw new $(`${e.alg} keys cannot be imported as CryptoKey instances`);
                                        case "A128GCM":
                                        case "A192GCM":
                                        case "A256GCM":
                                        case "A128GCMKW":
                                        case "A192GCMKW":
                                        case "A256GCMKW":
                                            t = {
                                                name: "AES-GCM"
                                            }, n = ["encrypt", "decrypt"];
                                            break;
                                        case "A128KW":
                                        case "A192KW":
                                        case "A256KW":
                                            t = {
                                                name: "AES-KW"
                                            }, n = ["wrapKey", "unwrapKey"];
                                            break;
                                        case "PBES2-HS256+A128KW":
                                        case "PBES2-HS384+A192KW":
                                        case "PBES2-HS512+A256KW":
                                            t = {
                                                name: "PBKDF2"
                                            }, n = ["deriveBits"];
                                            break;
                                        default:
                                            throw new $('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                    }
                                    break;
                                case "RSA":
                                    switch (e.alg) {
                                        case "PS256":
                                        case "PS384":
                                        case "PS512":
                                            t = {
                                                name: "RSA-PSS",
                                                hash: `SHA-${e.alg.slice(-3)}`
                                            }, n = e.d ? ["sign"] : ["verify"];
                                            break;
                                        case "RS256":
                                        case "RS384":
                                        case "RS512":
                                            t = {
                                                name: "RSASSA-PKCS1-v1_5",
                                                hash: `SHA-${e.alg.slice(-3)}`
                                            }, n = e.d ? ["sign"] : ["verify"];
                                            break;
                                        case "RSA-OAEP":
                                        case "RSA-OAEP-256":
                                        case "RSA-OAEP-384":
                                        case "RSA-OAEP-512":
                                            t = {
                                                name: "RSA-OAEP",
                                                hash: `SHA-${parseInt(e.alg.slice(-3),10)||1}`
                                            }, n = e.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
                                            break;
                                        default:
                                            throw new $('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                    }
                                    break;
                                case "EC":
                                    switch (e.alg) {
                                        case "ES256":
                                            t = {
                                                name: "ECDSA",
                                                namedCurve: "P-256"
                                            }, n = e.d ? ["sign"] : ["verify"];
                                            break;
                                        case "ES384":
                                            t = {
                                                name: "ECDSA",
                                                namedCurve: "P-384"
                                            }, n = e.d ? ["sign"] : ["verify"];
                                            break;
                                        case "ES512":
                                            t = {
                                                name: "ECDSA",
                                                namedCurve: "P-521"
                                            }, n = e.d ? ["sign"] : ["verify"];
                                            break;
                                        case "ECDH-ES":
                                        case "ECDH-ES+A128KW":
                                        case "ECDH-ES+A192KW":
                                        case "ECDH-ES+A256KW":
                                            t = {
                                                name: "ECDH",
                                                namedCurve: e.crv
                                            }, n = e.d ? ["deriveBits"] : [];
                                            break;
                                        default:
                                            throw new $('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                                    }
                                    break;
                                case (W() || N()) && "OKP":
                                    if ("EdDSA" !== e.alg) throw new $('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
                                    switch (e.crv) {
                                        case "Ed25519":
                                            t = {
                                                name: "NODE-ED25519",
                                                namedCurve: "NODE-ED25519"
                                            }, n = e.d ? ["sign"] : ["verify"];
                                            break;
                                        case N() && "Ed448":
                                            t = {
                                                name: "NODE-ED448",
                                                namedCurve: "NODE-ED448"
                                            }, n = e.d ? ["sign"] : ["verify"];
                                            break;
                                        default:
                                            throw new $('Invalid or unsupported JWK "crv" (Subtype of Key Pair) Parameter value')
                                    }
                                    break;
                                default:
                                    throw new $('Invalid or unsupported JWK "kty" (Key Type) Parameter value')
                            }
                            return {
                                algorithm: t,
                                keyUsages: n
                            }
                        }(e), a = [r, null !== (t = e.ext) && void 0 !== t && t, null !== (n = e.key_ops) && void 0 !== n ? n : o];
                        if ("PBKDF2" === r.name) return i.subtle.importKey("raw", y(e.k), ...a);
                        const s = {
                            ...e
                        };
                        return delete s.alg, i.subtle.importKey("jwk", s, ...a)
                    };

                function be(e) {
                    let t = [],
                        n = 0;
                    for (; n < e.length;) {
                        let r = _e(e.subarray(n));
                        t.push(r), n += r.byteLength
                    }
                    return t
                }

                function _e(e) {
                    let t = 0,
                        n = 31 & e[0];
                    if (t++, 31 === n) {
                        for (n = 0; e[t] >= 128;) n = 128 * n + e[t] - 128, t++;
                        n = 128 * n + e[t] - 128, t++
                    }
                    let r = 0;
                    if (e[t] < 128) r = e[t], t++;
                    else {
                        let n = 127 & e[t];
                        t++, r = 0;
                        for (let o = 0; o < n; o++) r = 256 * r + e[t], t++
                    }
                    if (128 === r) {
                        for (r = 0; 0 !== e[t + r] || 0 !== e[t + r + 1];) r++;
                        const n = t + r + 2;
                        return {
                            byteLength: n,
                            contents: e.subarray(t, t + r),
                            raw: e.subarray(0, n)
                        }
                    }
                    const o = t + r;
                    return {
                        byteLength: o,
                        contents: e.subarray(t, o),
                        raw: e.subarray(0, o)
                    }
                }
                async function Se(e, t, n) {
                    if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PUBLIC KEY-----")) throw new TypeError('"spki" must be SPKI formatted string');
                    return we(e, t, n)
                }
                async function xe(e, t, n) {
                    if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN CERTIFICATE-----")) throw new TypeError('"x509" must be X.509 formatted string');
                    const r = function(e) {
                        const t = e.replace(/(?:-----(?:BEGIN|END) CERTIFICATE-----|\s)/g, ""),
                            n = w(t);
                        return pe(function(e) {
                            const t = be(be(_e(e).contents)[0].contents);
                            return v(t[160 === t[0].raw[0] ? 6 : 5].raw)
                        }(n), "PUBLIC KEY")
                    }(e);
                    return we(r, t, n)
                }
                async function $e(e, t, n) {
                    if ("string" != typeof e || 0 !== e.indexOf("-----BEGIN PRIVATE KEY-----")) throw new TypeError('"pkcs8" must be PCKS8 formatted string');
                    return ((e, t, n) => ge(/(?:-----(?:BEGIN|END) PRIVATE KEY-----|\s)/g, "pkcs8", e, t, n))(e, t, n)
                }
                async function Ee(e, t, n) {
                    if (!ee(e)) throw new TypeError("JWK must be an object");
                    if (t || (t = e.alg), "string" != typeof t || !t) throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
                    switch (e.kty) {
                        case "oct":
                            if ("string" != typeof e.k || !e.k) throw new TypeError('missing "k" (Key Value) Parameter value');
                            return null != n || (n = !0 !== e.ext), n ? ye({
                                ...e,
                                alg: t,
                                ext: !1
                            }) : y(e.k);
                        case "RSA":
                            if (void 0 !== e.oth) throw new $('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
                        case "EC":
                        case "OKP":
                            return ye({
                                ...e,
                                alg: t
                            });
                        default:
                            throw new $('Unsupported "kty" (Key Type) Parameter value')
                    }
                }
                const Ae = (e, t, n) => {
                        e.startsWith("HS") || "dir" === e || e.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(e) ? (e => {
                            if (!(e instanceof Uint8Array)) {
                                if (!z(e)) throw new TypeError(G(e, ...q, "Uint8Array"));
                                if ("secret" !== e.type) throw new TypeError(`${q.join(" or ")} instances for symmetric algorithms must be of type "secret"`)
                            }
                        })(t) : ((e, t) => {
                            if (!z(e)) throw new TypeError(G(e, ...q));
                            if ("secret" === e.type) throw new TypeError(`${q.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);
                            if ("sign" === t && "public" === e.type) throw new TypeError(`${q.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);
                            if ("decrypt" === t && "public" === e.type) throw new TypeError(`${q.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);
                            if (e.algorithm && "verify" === t && "private" === e.type) throw new TypeError(`${q.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);
                            if (e.algorithm && "encrypt" === t && "private" === e.type) throw new TypeError(`${q.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`)
                        })(t, n)
                    },
                    Pe = async (e, t, n, r, o) => {
                        if (!(a(n) || n instanceof Uint8Array)) throw new TypeError(G(n, ...q, "Uint8Array"));
                        switch (U(e, r), e) {
                            case "A128CBC-HS256":
                            case "A192CBC-HS384":
                            case "A256CBC-HS512":
                                return n instanceof Uint8Array && K(n, parseInt(e.slice(-3), 10)), async function(e, t, n, r, o) {
                                    if (!(n instanceof Uint8Array)) throw new TypeError(G(n, "Uint8Array"));
                                    const a = parseInt(e.slice(1, 4), 10),
                                        s = await i.subtle.importKey("raw", n.subarray(a >> 3), "AES-CBC", !1, ["encrypt"]),
                                        c = await i.subtle.importKey("raw", n.subarray(0, a >> 3), {
                                            hash: "SHA-" + (a << 1),
                                            name: "HMAC"
                                        }, !1, ["sign"]),
                                        u = new Uint8Array(await i.subtle.encrypt({
                                            iv: r,
                                            name: "AES-CBC"
                                        }, s, t)),
                                        l = d(o, r, u, p(o.length << 3));
                                    return {
                                        ciphertext: u,
                                        tag: new Uint8Array((await i.subtle.sign("HMAC", c, l)).slice(0, a >> 3))
                                    }
                                }(e, t, n, r, o);
                            case "A128GCM":
                            case "A192GCM":
                            case "A256GCM":
                                return n instanceof Uint8Array && K(n, parseInt(e.slice(1, 4), 10)), async function(e, t, n, r, o) {
                                    let a;
                                    n instanceof Uint8Array ? a = await i.subtle.importKey("raw", n, "AES-GCM", !1, ["encrypt"]) : (V(n, e, "encrypt"), a = n);
                                    const s = new Uint8Array(await i.subtle.encrypt({
                                            additionalData: o,
                                            iv: r,
                                            name: "AES-GCM",
                                            tagLength: 128
                                        }, a, t)),
                                        c = s.slice(-16);
                                    return {
                                        ciphertext: s.slice(0, -16),
                                        tag: c
                                    }
                                }(e, t, n, r, o);
                            default:
                                throw new $("Unsupported JWE Content Encryption Algorithm")
                        }
                    }, ke = function(e, t, n, r, o) {
                        if (void 0 !== o.crit && void 0 === r.crit) throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');
                        if (!r || void 0 === r.crit) return new Set;
                        if (!Array.isArray(r.crit) || 0 === r.crit.length || r.crit.some((e => "string" != typeof e || 0 === e.length))) throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
                        let i;
                        i = void 0 !== n ? new Map([...Object.entries(n), ...t.entries()]) : t;
                        for (const t of r.crit) {
                            if (!i.has(t)) throw new $(`Extension Header Parameter "${t}" is not recognized`);
                            if (void 0 === o[t]) throw new e(`Extension Header Parameter "${t}" is missing`);
                            if (i.get(t) && void 0 === r[t]) throw new e(`Extension Header Parameter "${t}" MUST be integrity protected`)
                        }
                        return new Set(r.crit)
                    }, Ce = (e, t) => {
                        if (void 0 !== t && (!Array.isArray(t) || t.some((e => "string" != typeof e)))) throw new TypeError(`"${e}" option must be an array of strings`);
                        if (t) return new Set(t)
                    };
                async function Me(e, t, n) {
                    var r;
                    if (!ee(e)) throw new A("Flattened JWE must be an object");
                    if (void 0 === e.protected && void 0 === e.header && void 0 === e.unprotected) throw new A("JOSE Header missing");
                    if ("string" != typeof e.iv) throw new A("JWE Initialization Vector missing or incorrect type");
                    if ("string" != typeof e.ciphertext) throw new A("JWE Ciphertext missing or incorrect type");
                    if ("string" != typeof e.tag) throw new A("JWE Authentication Tag missing or incorrect type");
                    if (void 0 !== e.protected && "string" != typeof e.protected) throw new A("JWE Protected Header incorrect type");
                    if (void 0 !== e.encrypted_key && "string" != typeof e.encrypted_key) throw new A("JWE Encrypted Key incorrect type");
                    if (void 0 !== e.aad && "string" != typeof e.aad) throw new A("JWE AAD incorrect type");
                    if (void 0 !== e.header && !ee(e.header)) throw new A("JWE Shared Unprotected Header incorrect type");
                    if (void 0 !== e.unprotected && !ee(e.unprotected)) throw new A("JWE Per-Recipient Unprotected Header incorrect type");
                    let o;
                    if (e.protected) {
                        const t = y(e.protected);
                        try {
                            o = JSON.parse(u.decode(t))
                        } catch (e) {
                            throw new A("JWE Protected Header is invalid")
                        }
                    }
                    if (!Q(o, e.header, e.unprotected)) throw new A("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
                    const s = {
                        ...o,
                        ...e.header,
                        ...e.unprotected
                    };
                    if (ke(A, new Map, null == n ? void 0 : n.crit, o, s), void 0 !== s.zip) {
                        if (!o || !o.zip) throw new A('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                        if ("DEF" !== s.zip) throw new $('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
                    }
                    const {
                        alg: l,
                        enc: f
                    } = s;
                    if ("string" != typeof l || !l) throw new A("missing JWE Algorithm (alg) in JWE Header");
                    if ("string" != typeof f || !f) throw new A("missing JWE Encryption Algorithm (enc) in JWE Header");
                    const p = n && Ce("keyManagementAlgorithms", n.keyManagementAlgorithms),
                        m = n && Ce("contentEncryptionAlgorithms", n.contentEncryptionAlgorithms);
                    if (p && !p.has(l)) throw new x('"alg" (Algorithm) Header Parameter not allowed');
                    if (m && !m.has(f)) throw new x('"enc" (Encryption Algorithm) Header Parameter not allowed');
                    let h;
                    void 0 !== e.encrypted_key && (h = y(e.encrypted_key));
                    let v, g = !1;
                    "function" == typeof t && (t = await t(o, e), g = !0);
                    try {
                        v = await async function(e, t, n, r) {
                            switch (Ae(e, t, "decrypt"), e) {
                                case "dir":
                                    if (void 0 !== n) throw new A("Encountered unexpected JWE Encrypted Key");
                                    return t;
                                case "ECDH-ES":
                                    if (void 0 !== n) throw new A("Encountered unexpected JWE Encrypted Key");
                                case "ECDH-ES+A128KW":
                                case "ECDH-ES+A192KW":
                                case "ECDH-ES+A256KW": {
                                    if (!ee(r.epk)) throw new A('JOSE Header "epk" (Ephemeral Public Key) missing or invalid');
                                    if (!se(t)) throw new $("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                                    const o = await Ee(r.epk, e);
                                    let i, a;
                                    if (void 0 !== r.apu) {
                                        if ("string" != typeof r.apu) throw new A('JOSE Header "apu" (Agreement PartyUInfo) invalid');
                                        i = y(r.apu)
                                    }
                                    if (void 0 !== r.apv) {
                                        if ("string" != typeof r.apv) throw new A('JOSE Header "apv" (Agreement PartyVInfo) invalid');
                                        a = y(r.apv)
                                    }
                                    const s = await ae(o, t, "ECDH-ES" === e ? r.enc : e, "ECDH-ES" === e ? de(r.enc) : parseInt(e.slice(-5, -2), 10), i, a);
                                    if ("ECDH-ES" === e) return s;
                                    if (void 0 === n) throw new A("JWE Encrypted Key missing");
                                    return ie(e.slice(-6), s, n)
                                }
                                case "RSA1_5":
                                case "RSA-OAEP":
                                case "RSA-OAEP-256":
                                case "RSA-OAEP-384":
                                case "RSA-OAEP-512":
                                    if (void 0 === n) throw new A("JWE Encrypted Key missing");
                                    return (async (e, t, n) => {
                                        if (!a(t)) throw new TypeError(G(t, ...q));
                                        if (V(t, e, "decrypt", "unwrapKey"), le(e, t), t.usages.includes("decrypt")) return new Uint8Array(await i.subtle.decrypt(ue(e), t, n));
                                        if (t.usages.includes("unwrapKey")) {
                                            const r = await i.subtle.unwrapKey("raw", n, t, ue(e), ...te);
                                            return new Uint8Array(await i.subtle.exportKey("raw", r))
                                        }
                                        throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation')
                                    })(e, t, n);
                                case "PBES2-HS256+A128KW":
                                case "PBES2-HS384+A192KW":
                                case "PBES2-HS512+A256KW":
                                    if (void 0 === n) throw new A("JWE Encrypted Key missing");
                                    if ("number" != typeof r.p2c) throw new A('JOSE Header "p2c" (PBES2 Count) missing or invalid');
                                    if ("string" != typeof r.p2s) throw new A('JOSE Header "p2s" (PBES2 Salt) missing or invalid');
                                    return (async (e, t, n, r, o) => {
                                        const i = await ce(o, e, r, t);
                                        return ie(e.slice(-6), i, n)
                                    })(e, t, n, r.p2c, y(r.p2s));
                                case "A128KW":
                                case "A192KW":
                                case "A256KW":
                                    if (void 0 === n) throw new A("JWE Encrypted Key missing");
                                    return ie(e, t, n);
                                case "A128GCMKW":
                                case "A192GCMKW":
                                case "A256GCMKW":
                                    if (void 0 === n) throw new A("JWE Encrypted Key missing");
                                    if ("string" != typeof r.iv) throw new A('JOSE Header "iv" (Initialization Vector) missing or invalid');
                                    if ("string" != typeof r.tag) throw new A('JOSE Header "tag" (Authentication Tag) missing or invalid');
                                    return async function(e, t, n, r, o) {
                                        const i = e.slice(0, 7);
                                        return Y(i, t, n, r, o, new Uint8Array(0))
                                    }(e, t, n, y(r.iv), y(r.tag));
                                default:
                                    throw new $('Invalid or unsupported "alg" (JWE Algorithm) header value')
                            }
                        }(l, t, h, s)
                    } catch (e) {
                        if (e instanceof TypeError) throw e;
                        v = fe(f)
                    }
                    const w = y(e.iv),
                        b = y(e.tag),
                        _ = c.encode(null !== (r = e.protected) && void 0 !== r ? r : "");
                    let S;
                    S = void 0 !== e.aad ? d(_, c.encode("."), c.encode(e.aad)) : _;
                    let E = await Y(f, v, y(e.ciphertext), w, b, S);
                    "DEF" === s.zip && (E = await ((null == n ? void 0 : n.inflateRaw) || Z)(E));
                    const P = {
                        plaintext: E
                    };
                    return void 0 !== e.protected && (P.protectedHeader = o), void 0 !== e.aad && (P.additionalAuthenticatedData = y(e.aad)), void 0 !== e.unprotected && (P.sharedUnprotectedHeader = e.unprotected), void 0 !== e.header && (P.unprotectedHeader = e.header), g ? {
                        ...P,
                        key: t
                    } : P
                }
                async function Le(e, t, n) {
                    if (e instanceof Uint8Array && (e = u.decode(e)), "string" != typeof e) throw new A("Compact JWE must be a string or Uint8Array");
                    const {
                        0: r,
                        1: o,
                        2: i,
                        3: a,
                        4: s,
                        length: c
                    } = e.split(".");
                    if (5 !== c) throw new A("Invalid Compact JWE");
                    const l = await Me({
                            ciphertext: a,
                            iv: i || void 0,
                            protected: r || void 0,
                            tag: s || void 0,
                            encrypted_key: o || void 0
                        }, t, n),
                        d = {
                            plaintext: l.plaintext,
                            protectedHeader: l.protectedHeader
                        };
                    return "function" == typeof t ? {
                        ...d,
                        key: l.key
                    } : d
                }
                async function He(e, t, n) {
                    if (!ee(e)) throw new A("General JWE must be an object");
                    if (!Array.isArray(e.recipients) || !e.recipients.every(ee)) throw new A("JWE Recipients missing or incorrect type");
                    if (!e.recipients.length) throw new A("JWE Recipients has no members");
                    for (const r of e.recipients) try {
                        return await Me({
                            aad: e.aad,
                            ciphertext: e.ciphertext,
                            encrypted_key: r.encrypted_key,
                            header: r.header,
                            iv: e.iv,
                            protected: e.protected,
                            tag: e.tag,
                            unprotected: e.unprotected
                        }, t, n)
                    } catch (e) {}
                    throw new E
                }
                async function Te(e) {
                    return (e => me("public", "spki", e))(e)
                }
                async function Re(e) {
                    return (e => me("private", "pkcs8", e))(e)
                }
                async function Oe(e) {
                    return (async e => {
                        if (e instanceof Uint8Array) return {
                            kty: "oct",
                            k: g(e)
                        };
                        if (!a(e)) throw new TypeError(G(e, ...q, "Uint8Array"));
                        if (!e.extractable) throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
                        const {
                            ext: t,
                            key_ops: n,
                            alg: r,
                            use: o,
                            ...s
                        } = await i.subtle.exportKey("jwk", e);
                        return s
                    })(e)
                }
                const De = async function(e, t, n, r, o = {}) {
                    let s, c, u;
                    switch (Ae(e, n, "encrypt"), e) {
                        case "dir":
                            u = n;
                            break;
                        case "ECDH-ES":
                        case "ECDH-ES+A128KW":
                        case "ECDH-ES+A192KW":
                        case "ECDH-ES+A256KW": {
                            if (!se(n)) throw new $("ECDH with the provided key is not allowed or not supported by your javascript runtime");
                            const {
                                apu: l,
                                apv: d
                            } = o;
                            let {
                                epk: f
                            } = o;
                            f || (f = (await async function(e) {
                                if (!a(e)) throw new TypeError(G(e, ...q));
                                return i.subtle.generateKey(e.algorithm, !0, ["deriveBits"])
                            }(n)).privateKey);
                            const {
                                x: p,
                                y: m,
                                crv: h,
                                kty: v
                            } = await Oe(f), w = await ae(n, f, "ECDH-ES" === e ? t : e, "ECDH-ES" === e ? de(t) : parseInt(e.slice(-5, -2), 10), l, d);
                            if (c = {
                                    epk: {
                                        x: p,
                                        crv: h,
                                        kty: v
                                    }
                                }, "EC" === v && (c.epk.y = m), l && (c.apu = g(l)), d && (c.apv = g(d)), "ECDH-ES" === e) {
                                u = w;
                                break
                            }
                            u = r || fe(t);
                            const y = e.slice(-6);
                            s = await oe(y, w, u);
                            break
                        }
                        case "RSA1_5":
                        case "RSA-OAEP":
                        case "RSA-OAEP-256":
                        case "RSA-OAEP-384":
                        case "RSA-OAEP-512":
                            u = r || fe(t), s = await (async (e, t, n) => {
                                if (!a(t)) throw new TypeError(G(t, ...q));
                                if (V(t, e, "encrypt", "wrapKey"), le(e, t), t.usages.includes("encrypt")) return new Uint8Array(await i.subtle.encrypt(ue(e), t, n));
                                if (t.usages.includes("wrapKey")) {
                                    const r = await i.subtle.importKey("raw", n, ...te);
                                    return new Uint8Array(await i.subtle.wrapKey("raw", r, t, ue(e)))
                                }
                                throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation')
                            })(e, n, u);
                            break;
                        case "PBES2-HS256+A128KW":
                        case "PBES2-HS384+A192KW":
                        case "PBES2-HS512+A256KW": {
                            u = r || fe(t);
                            const {
                                p2c: i,
                                p2s: a
                            } = o;
                            ({
                                encryptedKey: s,
                                ...c
                            } = await (async (e, t, n, r = 2048, o = O(new Uint8Array(16))) => {
                                const i = await ce(o, e, r, t);
                                return {
                                    encryptedKey: await oe(e.slice(-6), i, n),
                                    p2c: r,
                                    p2s: g(o)
                                }
                            })(e, n, u, i, a));
                            break
                        }
                        case "A128KW":
                        case "A192KW":
                        case "A256KW":
                            u = r || fe(t), s = await oe(e, n, u);
                            break;
                        case "A128GCMKW":
                        case "A192GCMKW":
                        case "A256GCMKW": {
                            u = r || fe(t);
                            const {
                                iv: i
                            } = o;
                            ({
                                encryptedKey: s,
                                ...c
                            } = await async function(e, t, n, r) {
                                const o = e.slice(0, 7);
                                r || (r = I(o));
                                const {
                                    ciphertext: i,
                                    tag: a
                                } = await Pe(o, n, t, r, new Uint8Array(0));
                                return {
                                    encryptedKey: i,
                                    iv: g(r),
                                    tag: g(a)
                                }
                            }(e, n, u, i));
                            break
                        }
                        default:
                            throw new $('Invalid or unsupported "alg" (JWE Algorithm) header value')
                    }
                    return {
                        cek: u,
                        encryptedKey: s,
                        parameters: c
                    }
                }, Ie = Symbol();
                class Ue {
                    constructor(e) {
                        if (!(e instanceof Uint8Array)) throw new TypeError("plaintext must be an instance of Uint8Array");
                        this._plaintext = e
                    }
                    setKeyManagementParameters(e) {
                        if (this._keyManagementParameters) throw new TypeError("setKeyManagementParameters can only be called once");
                        return this._keyManagementParameters = e, this
                    }
                    setProtectedHeader(e) {
                        if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                        return this._protectedHeader = e, this
                    }
                    setSharedUnprotectedHeader(e) {
                        if (this._sharedUnprotectedHeader) throw new TypeError("setSharedUnprotectedHeader can only be called once");
                        return this._sharedUnprotectedHeader = e, this
                    }
                    setUnprotectedHeader(e) {
                        if (this._unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                        return this._unprotectedHeader = e, this
                    }
                    setAdditionalAuthenticatedData(e) {
                        return this._aad = e, this
                    }
                    setContentEncryptionKey(e) {
                        if (this._cek) throw new TypeError("setContentEncryptionKey can only be called once");
                        return this._cek = e, this
                    }
                    setInitializationVector(e) {
                        if (this._iv) throw new TypeError("setInitializationVector can only be called once");
                        return this._iv = e, this
                    }
                    async encrypt(e, t) {
                        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) throw new A("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
                        if (!Q(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) throw new A("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                        const n = {
                            ...this._protectedHeader,
                            ...this._unprotectedHeader,
                            ...this._sharedUnprotectedHeader
                        };
                        if (ke(A, new Map, null == t ? void 0 : t.crit, this._protectedHeader, n), void 0 !== n.zip) {
                            if (!this._protectedHeader || !this._protectedHeader.zip) throw new A('JWE "zip" (Compression Algorithm) Header MUST be integrity protected');
                            if ("DEF" !== n.zip) throw new $('Unsupported JWE "zip" (Compression Algorithm) Header Parameter value')
                        }
                        const {
                            alg: r,
                            enc: o
                        } = n;
                        if ("string" != typeof r || !r) throw new A('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                        if ("string" != typeof o || !o) throw new A('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                        let i, a, s, l, f, p, m;
                        if ("dir" === r) {
                            if (this._cek) throw new TypeError("setContentEncryptionKey cannot be called when using Direct Encryption")
                        } else if ("ECDH-ES" === r && this._cek) throw new TypeError("setContentEncryptionKey cannot be called when using Direct Key Agreement"); {
                            let n;
                            ({
                                cek: a,
                                encryptedKey: i,
                                parameters: n
                            } = await De(r, o, e, this._cek, this._keyManagementParameters)), n && (t && Ie in t ? this._unprotectedHeader ? this._unprotectedHeader = {
                                ...this._unprotectedHeader,
                                ...n
                            } : this.setUnprotectedHeader(n) : this._protectedHeader ? this._protectedHeader = {
                                ...this._protectedHeader,
                                ...n
                            } : this.setProtectedHeader(n))
                        }
                        if (this._iv || (this._iv = I(o)), l = this._protectedHeader ? c.encode(g(JSON.stringify(this._protectedHeader))) : c.encode(""), this._aad ? (f = g(this._aad), s = d(l, c.encode("."), c.encode(f))) : s = l, "DEF" === n.zip) {
                            const e = await ((null == t ? void 0 : t.deflateRaw) || X)(this._plaintext);
                            ({
                                ciphertext: p,
                                tag: m
                            } = await Pe(o, e, a, this._iv, s))
                        } else({
                            ciphertext: p,
                            tag: m
                        } = await Pe(o, this._plaintext, a, this._iv, s));
                        const h = {
                            ciphertext: g(p),
                            iv: g(this._iv),
                            tag: g(m)
                        };
                        return i && (h.encrypted_key = g(i)), f && (h.aad = f), this._protectedHeader && (h.protected = u.decode(l)), this._sharedUnprotectedHeader && (h.unprotected = this._sharedUnprotectedHeader), this._unprotectedHeader && (h.header = this._unprotectedHeader), h
                    }
                }
                class Ke {
                    constructor(e, t, n) {
                        this.parent = e, this.key = t, this.options = n
                    }
                    setUnprotectedHeader(e) {
                        if (this.unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                        return this.unprotectedHeader = e, this
                    }
                    addRecipient(...e) {
                        return this.parent.addRecipient(...e)
                    }
                    encrypt(...e) {
                        return this.parent.encrypt(...e)
                    }
                    done() {
                        return this.parent
                    }
                }
                class We {
                    constructor(e) {
                        this._recipients = [], this._plaintext = e
                    }
                    addRecipient(e, t) {
                        const n = new Ke(this, e, {
                            crit: null == t ? void 0 : t.crit
                        });
                        return this._recipients.push(n), n
                    }
                    setProtectedHeader(e) {
                        if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                        return this._protectedHeader = e, this
                    }
                    setSharedUnprotectedHeader(e) {
                        if (this._unprotectedHeader) throw new TypeError("setSharedUnprotectedHeader can only be called once");
                        return this._unprotectedHeader = e, this
                    }
                    setAdditionalAuthenticatedData(e) {
                        return this._aad = e, this
                    }
                    async encrypt(e) {
                        var t, n, r;
                        if (!this._recipients.length) throw new A("at least one recipient must be added");
                        if (e = {
                                deflateRaw: null == e ? void 0 : e.deflateRaw
                            }, 1 === this._recipients.length) {
                            const [t] = this._recipients, n = await new Ue(this._plaintext).setAdditionalAuthenticatedData(this._aad).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(t.unprotectedHeader).encrypt(t.key, {
                                ...t.options,
                                ...e
                            });
                            let r = {
                                ciphertext: n.ciphertext,
                                iv: n.iv,
                                recipients: [{}],
                                tag: n.tag
                            };
                            return n.aad && (r.aad = n.aad), n.protected && (r.protected = n.protected), n.unprotected && (r.unprotected = n.unprotected), n.encrypted_key && (r.recipients[0].encrypted_key = n.encrypted_key), n.header && (r.recipients[0].header = n.header), r
                        }
                        let o;
                        for (let e = 0; e < this._recipients.length; e++) {
                            const t = this._recipients[e];
                            if (!Q(this._protectedHeader, this._unprotectedHeader, t.unprotectedHeader)) throw new A("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
                            const n = {
                                    ...this._protectedHeader,
                                    ...this._unprotectedHeader,
                                    ...t.unprotectedHeader
                                },
                                {
                                    alg: r
                                } = n;
                            if ("string" != typeof r || !r) throw new A('JWE "alg" (Algorithm) Header Parameter missing or invalid');
                            if ("dir" === r || "ECDH-ES" === r) throw new A('"dir" and "ECDH-ES" alg may only be used with a single recipient');
                            if ("string" != typeof n.enc || !n.enc) throw new A('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
                            if (o) {
                                if (o !== n.enc) throw new A('JWE "enc" (Encryption Algorithm) Header Parameter must be the same for all recipients')
                            } else o = n.enc;
                            if (ke(A, new Map, t.options.crit, this._protectedHeader, n), !(void 0 === n.zip || this._protectedHeader && this._protectedHeader.zip)) throw new A('JWE "zip" (Compression Algorithm) Header MUST be integrity protected')
                        }
                        const i = fe(o);
                        let a = {
                            ciphertext: "",
                            iv: "",
                            recipients: [],
                            tag: ""
                        };
                        for (let s = 0; s < this._recipients.length; s++) {
                            const c = this._recipients[s],
                                u = {};
                            a.recipients.push(u);
                            const l = {
                                ...this._protectedHeader,
                                ...this._unprotectedHeader,
                                ...c.unprotectedHeader
                            }.alg.startsWith("PBES2") ? 2048 + s : void 0;
                            if (0 === s) {
                                const t = await new Ue(this._plaintext).setAdditionalAuthenticatedData(this._aad).setContentEncryptionKey(i).setProtectedHeader(this._protectedHeader).setSharedUnprotectedHeader(this._unprotectedHeader).setUnprotectedHeader(c.unprotectedHeader).setKeyManagementParameters({
                                    p2c: l
                                }).encrypt(c.key, {
                                    ...c.options,
                                    ...e,
                                    [Ie]: !0
                                });
                                a.ciphertext = t.ciphertext, a.iv = t.iv, a.tag = t.tag, t.aad && (a.aad = t.aad), t.protected && (a.protected = t.protected), t.unprotected && (a.unprotected = t.unprotected), u.encrypted_key = t.encrypted_key, t.header && (u.header = t.header);
                                continue
                            }
                            const {
                                encryptedKey: d,
                                parameters: f
                            } = await De((null === (t = c.unprotectedHeader) || void 0 === t ? void 0 : t.alg) || (null === (n = this._protectedHeader) || void 0 === n ? void 0 : n.alg) || (null === (r = this._unprotectedHeader) || void 0 === r ? void 0 : r.alg), o, c.key, i, {
                                p2c: l
                            });
                            u.encrypted_key = g(d), (c.unprotectedHeader || f) && (u.header = {
                                ...c.unprotectedHeader,
                                ...f
                            })
                        }
                        return a
                    }
                }

                function Ne(e, t) {
                    const n = `SHA-${e.slice(-3)}`;
                    switch (e) {
                        case "HS256":
                        case "HS384":
                        case "HS512":
                            return {
                                hash: n, name: "HMAC"
                            };
                        case "PS256":
                        case "PS384":
                        case "PS512":
                            return {
                                hash: n, name: "RSA-PSS", saltLength: e.slice(-3) >> 3
                            };
                        case "RS256":
                        case "RS384":
                        case "RS512":
                            return {
                                hash: n, name: "RSASSA-PKCS1-v1_5"
                            };
                        case "ES256":
                        case "ES384":
                        case "ES512":
                            return {
                                hash: n, name: "ECDSA", namedCurve: t.namedCurve
                            };
                        case (W() || N()) && "EdDSA":
                            const {
                                namedCurve: r
                            } = t;
                            return {
                                name: r, namedCurve: r
                            };
                        default:
                            throw new $(`alg ${e} is not supported either by JOSE or your javascript runtime`)
                    }
                }

                function Be(e, t, n) {
                    if (a(t)) return function(e, t, ...n) {
                        switch (t) {
                            case "HS256":
                            case "HS384":
                            case "HS512": {
                                if (!J(e.algorithm, "HMAC")) throw B("HMAC");
                                const n = parseInt(t.slice(2), 10);
                                if (j(e.algorithm.hash) !== n) throw B(`SHA-${n}`, "algorithm.hash");
                                break
                            }
                            case "RS256":
                            case "RS384":
                            case "RS512": {
                                if (!J(e.algorithm, "RSASSA-PKCS1-v1_5")) throw B("RSASSA-PKCS1-v1_5");
                                const n = parseInt(t.slice(2), 10);
                                if (j(e.algorithm.hash) !== n) throw B(`SHA-${n}`, "algorithm.hash");
                                break
                            }
                            case "PS256":
                            case "PS384":
                            case "PS512": {
                                if (!J(e.algorithm, "RSA-PSS")) throw B("RSA-PSS");
                                const n = parseInt(t.slice(2), 10);
                                if (j(e.algorithm.hash) !== n) throw B(`SHA-${n}`, "algorithm.hash");
                                break
                            }
                            case N() && "EdDSA":
                                if ("NODE-ED25519" !== e.algorithm.name && "NODE-ED448" !== e.algorithm.name) throw B("NODE-ED25519 or NODE-ED448");
                                break;
                            case W() && "EdDSA":
                                if (!J(e.algorithm, "NODE-ED25519")) throw B("NODE-ED25519");
                                break;
                            case "ES256":
                            case "ES384":
                            case "ES512": {
                                if (!J(e.algorithm, "ECDSA")) throw B("ECDSA");
                                const n = function(e) {
                                    switch (e) {
                                        case "ES256":
                                            return "P-256";
                                        case "ES384":
                                            return "P-384";
                                        case "ES512":
                                            return "P-521";
                                        default:
                                            throw new Error("unreachable")
                                    }
                                }(t);
                                if (e.algorithm.namedCurve !== n) throw B(n, "algorithm.namedCurve");
                                break
                            }
                            default:
                                throw new TypeError("CryptoKey does not support this operation")
                        }
                        F(e, n)
                    }(t, e, n), t;
                    if (t instanceof Uint8Array) {
                        if (!e.startsWith("HS")) throw new TypeError(G(t, ...q));
                        return i.subtle.importKey("raw", t, {
                            hash: `SHA-${e.slice(-3)}`,
                            name: "HMAC"
                        }, !1, [n])
                    }
                    throw new TypeError(G(t, ...q, "Uint8Array"))
                }
                async function Je(e, t, n) {
                    var r;
                    if (!ee(e)) throw new P("Flattened JWS must be an object");
                    if (void 0 === e.protected && void 0 === e.header) throw new P('Flattened JWS must have either of the "protected" or "header" members');
                    if (void 0 !== e.protected && "string" != typeof e.protected) throw new P("JWS Protected Header incorrect type");
                    if (void 0 === e.payload) throw new P("JWS Payload missing");
                    if ("string" != typeof e.signature) throw new P("JWS Signature missing or incorrect type");
                    if (void 0 !== e.header && !ee(e.header)) throw new P("JWS Unprotected Header incorrect type");
                    let o = {};
                    if (e.protected) {
                        const t = y(e.protected);
                        try {
                            o = JSON.parse(u.decode(t))
                        } catch (e) {
                            throw new P("JWS Protected Header is invalid")
                        }
                    }
                    if (!Q(o, e.header)) throw new P("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                    const a = {
                        ...o,
                        ...e.header
                    };
                    let s = !0;
                    if (ke(P, new Map([
                            ["b64", !0]
                        ]), null == n ? void 0 : n.crit, o, a).has("b64") && (s = o.b64, "boolean" != typeof s)) throw new P('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                    const {
                        alg: l
                    } = a;
                    if ("string" != typeof l || !l) throw new P('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                    const f = n && Ce("algorithms", n.algorithms);
                    if (f && !f.has(l)) throw new x('"alg" (Algorithm) Header Parameter not allowed');
                    if (s) {
                        if ("string" != typeof e.payload) throw new P("JWS Payload must be a string")
                    } else if ("string" != typeof e.payload && !(e.payload instanceof Uint8Array)) throw new P("JWS Payload must be a string or an Uint8Array instance");
                    let p = !1;
                    "function" == typeof t && (t = await t(o, e), p = !0), Ae(l, t, "verify");
                    const m = d(c.encode(null !== (r = e.protected) && void 0 !== r ? r : ""), c.encode("."), "string" == typeof e.payload ? c.encode(e.payload) : e.payload),
                        h = y(e.signature);
                    if (!await (async (e, t, n, r) => {
                            const o = await Be(e, t, "verify");
                            le(e, o);
                            const a = Ne(e, o.algorithm);
                            try {
                                return await i.subtle.verify(a, o, n, r)
                            } catch (e) {
                                return !1
                            }
                        })(l, t, h, m)) throw new R;
                    let v;
                    v = s ? y(e.payload) : "string" == typeof e.payload ? c.encode(e.payload) : e.payload;
                    const g = {
                        payload: v
                    };
                    return void 0 !== e.protected && (g.protectedHeader = o), void 0 !== e.header && (g.unprotectedHeader = e.header), p ? {
                        ...g,
                        key: t
                    } : g
                }
                async function je(e, t, n) {
                    if (e instanceof Uint8Array && (e = u.decode(e)), "string" != typeof e) throw new P("Compact JWS must be a string or Uint8Array");
                    const {
                        0: r,
                        1: o,
                        2: i,
                        length: a
                    } = e.split(".");
                    if (3 !== a) throw new P("Invalid Compact JWS");
                    const s = await Je({
                            payload: o,
                            protected: r,
                            signature: i
                        }, t, n),
                        c = {
                            payload: s.payload,
                            protectedHeader: s.protectedHeader
                        };
                    return "function" == typeof t ? {
                        ...c,
                        key: s.key
                    } : c
                }
                async function Fe(e, t, n) {
                    if (!ee(e)) throw new P("General JWS must be an object");
                    if (!Array.isArray(e.signatures) || !e.signatures.every(ee)) throw new P("JWS Signatures missing or incorrect type");
                    for (const r of e.signatures) try {
                        return await Je({
                            header: r.header,
                            payload: e.payload,
                            protected: r.protected,
                            signature: r.signature
                        }, t, n)
                    } catch (e) {}
                    throw new R
                }
                const Ve = e => Math.floor(e.getTime() / 1e3),
                    Ge = /^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i,
                    ze = e => {
                        const t = Ge.exec(e);
                        if (!t) throw new TypeError("Invalid time period format");
                        const n = parseFloat(t[1]);
                        switch (t[2].toLowerCase()) {
                            case "sec":
                            case "secs":
                            case "second":
                            case "seconds":
                            case "s":
                                return Math.round(n);
                            case "minute":
                            case "minutes":
                            case "min":
                            case "mins":
                            case "m":
                                return Math.round(60 * n);
                            case "hour":
                            case "hours":
                            case "hr":
                            case "hrs":
                            case "h":
                                return Math.round(3600 * n);
                            case "day":
                            case "days":
                            case "d":
                                return Math.round(86400 * n);
                            case "week":
                            case "weeks":
                            case "w":
                                return Math.round(604800 * n);
                            default:
                                return Math.round(31557600 * n)
                        }
                    },
                    qe = e => e.toLowerCase().replace(/^application\//, ""),
                    Ye = (e, t, n = {}) => {
                        const {
                            typ: r
                        } = n;
                        if (r && ("string" != typeof e.typ || qe(e.typ) !== qe(r))) throw new _('unexpected "typ" JWT header value', "typ", "check_failed");
                        let o;
                        try {
                            o = JSON.parse(u.decode(t))
                        } catch (e) {}
                        if (!ee(o)) throw new k("JWT Claims Set must be a top-level JSON object");
                        const {
                            issuer: i
                        } = n;
                        if (i && !(Array.isArray(i) ? i : [i]).includes(o.iss)) throw new _('unexpected "iss" claim value', "iss", "check_failed");
                        const {
                            subject: a
                        } = n;
                        if (a && o.sub !== a) throw new _('unexpected "sub" claim value', "sub", "check_failed");
                        const {
                            audience: s
                        } = n;
                        if (s && (l = "string" == typeof s ? [s] : s, !("string" == typeof(c = o.aud) ? l.includes(c) : Array.isArray(c) && l.some(Set.prototype.has.bind(new Set(c)))))) throw new _('unexpected "aud" claim value', "aud", "check_failed");
                        var c, l;
                        let d;
                        switch (typeof n.clockTolerance) {
                            case "string":
                                d = ze(n.clockTolerance);
                                break;
                            case "number":
                                d = n.clockTolerance;
                                break;
                            case "undefined":
                                d = 0;
                                break;
                            default:
                                throw new TypeError("Invalid clockTolerance option type")
                        }
                        const {
                            currentDate: f
                        } = n, p = Ve(f || new Date);
                        if ((void 0 !== o.iat || n.maxTokenAge) && "number" != typeof o.iat) throw new _('"iat" claim must be a number', "iat", "invalid");
                        if (void 0 !== o.nbf) {
                            if ("number" != typeof o.nbf) throw new _('"nbf" claim must be a number', "nbf", "invalid");
                            if (o.nbf > p + d) throw new _('"nbf" claim timestamp check failed', "nbf", "check_failed")
                        }
                        if (void 0 !== o.exp) {
                            if ("number" != typeof o.exp) throw new _('"exp" claim must be a number', "exp", "invalid");
                            if (o.exp <= p - d) throw new S('"exp" claim timestamp check failed', "exp", "check_failed")
                        }
                        if (n.maxTokenAge) {
                            const e = p - o.iat;
                            if (e - d > ("number" == typeof n.maxTokenAge ? n.maxTokenAge : ze(n.maxTokenAge))) throw new S('"iat" claim timestamp check failed (too far in the past)', "iat", "check_failed");
                            if (e < 0 - d) throw new _('"iat" claim timestamp check failed (it should be in the past)', "iat", "check_failed")
                        }
                        return o
                    };
                async function Ze(e, t, n) {
                    var r;
                    const o = await je(e, t, n);
                    if ((null === (r = o.protectedHeader.crit) || void 0 === r ? void 0 : r.includes("b64")) && !1 === o.protectedHeader.b64) throw new k("JWTs MUST NOT use unencoded payload");
                    const i = {
                        payload: Ye(o.protectedHeader, o.payload, n),
                        protectedHeader: o.protectedHeader
                    };
                    return "function" == typeof t ? {
                        ...i,
                        key: o.key
                    } : i
                }
                async function Xe(e, t, n) {
                    const r = await Le(e, t, n),
                        o = Ye(r.protectedHeader, r.plaintext, n),
                        {
                            protectedHeader: i
                        } = r;
                    if (void 0 !== i.iss && i.iss !== o.iss) throw new _('replicated "iss" claim header parameter mismatch', "iss", "mismatch");
                    if (void 0 !== i.sub && i.sub !== o.sub) throw new _('replicated "sub" claim header parameter mismatch', "sub", "mismatch");
                    if (void 0 !== i.aud && JSON.stringify(i.aud) !== JSON.stringify(o.aud)) throw new _('replicated "aud" claim header parameter mismatch', "aud", "mismatch");
                    const a = {
                        payload: o,
                        protectedHeader: i
                    };
                    return "function" == typeof t ? {
                        ...a,
                        key: r.key
                    } : a
                }
                class Qe {
                    constructor(e) {
                        this._flattened = new Ue(e)
                    }
                    setContentEncryptionKey(e) {
                        return this._flattened.setContentEncryptionKey(e), this
                    }
                    setInitializationVector(e) {
                        return this._flattened.setInitializationVector(e), this
                    }
                    setProtectedHeader(e) {
                        return this._flattened.setProtectedHeader(e), this
                    }
                    setKeyManagementParameters(e) {
                        return this._flattened.setKeyManagementParameters(e), this
                    }
                    async encrypt(e, t) {
                        const n = await this._flattened.encrypt(e, t);
                        return [n.protected, n.encrypted_key, n.iv, n.ciphertext, n.tag].join(".")
                    }
                }
                class et {
                    constructor(e) {
                        if (!(e instanceof Uint8Array)) throw new TypeError("payload must be an instance of Uint8Array");
                        this._payload = e
                    }
                    setProtectedHeader(e) {
                        if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                        return this._protectedHeader = e, this
                    }
                    setUnprotectedHeader(e) {
                        if (this._unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                        return this._unprotectedHeader = e, this
                    }
                    async sign(e, t) {
                        if (!this._protectedHeader && !this._unprotectedHeader) throw new P("either setProtectedHeader or setUnprotectedHeader must be called before #sign()");
                        if (!Q(this._protectedHeader, this._unprotectedHeader)) throw new P("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");
                        const n = {
                            ...this._protectedHeader,
                            ...this._unprotectedHeader
                        };
                        let r = !0;
                        if (ke(P, new Map([
                                ["b64", !0]
                            ]), null == t ? void 0 : t.crit, this._protectedHeader, n).has("b64") && (r = this._protectedHeader.b64, "boolean" != typeof r)) throw new P('The "b64" (base64url-encode payload) Header Parameter must be a boolean');
                        const {
                            alg: o
                        } = n;
                        if ("string" != typeof o || !o) throw new P('JWS "alg" (Algorithm) Header Parameter missing or invalid');
                        Ae(o, e, "sign");
                        let a, s = this._payload;
                        r && (s = c.encode(g(s))), a = this._protectedHeader ? c.encode(g(JSON.stringify(this._protectedHeader))) : c.encode("");
                        const l = d(a, c.encode("."), s),
                            f = await (async (e, t, n) => {
                                const r = await Be(e, t, "sign");
                                le(e, r);
                                const o = await i.subtle.sign(Ne(e, r.algorithm), r, n);
                                return new Uint8Array(o)
                            })(o, e, l),
                            p = {
                                signature: g(f),
                                payload: ""
                            };
                        return r && (p.payload = u.decode(s)), this._unprotectedHeader && (p.header = this._unprotectedHeader), this._protectedHeader && (p.protected = u.decode(a)), p
                    }
                }
                class tt {
                    constructor(e) {
                        this._flattened = new et(e)
                    }
                    setProtectedHeader(e) {
                        return this._flattened.setProtectedHeader(e), this
                    }
                    async sign(e, t) {
                        const n = await this._flattened.sign(e, t);
                        if (void 0 === n.payload) throw new TypeError("use the flattened module for creating JWS with b64: false");
                        return `${n.protected}.${n.payload}.${n.signature}`
                    }
                }
                class nt {
                    constructor(e, t, n) {
                        this.parent = e, this.key = t, this.options = n
                    }
                    setProtectedHeader(e) {
                        if (this.protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                        return this.protectedHeader = e, this
                    }
                    setUnprotectedHeader(e) {
                        if (this.unprotectedHeader) throw new TypeError("setUnprotectedHeader can only be called once");
                        return this.unprotectedHeader = e, this
                    }
                    addSignature(...e) {
                        return this.parent.addSignature(...e)
                    }
                    sign(...e) {
                        return this.parent.sign(...e)
                    }
                    done() {
                        return this.parent
                    }
                }
                class rt {
                    constructor(e) {
                        this._signatures = [], this._payload = e
                    }
                    addSignature(e, t) {
                        const n = new nt(this, e, t);
                        return this._signatures.push(n), n
                    }
                    async sign() {
                        if (!this._signatures.length) throw new P("at least one signature must be added");
                        const e = {
                            signatures: [],
                            payload: ""
                        };
                        for (let t = 0; t < this._signatures.length; t++) {
                            const n = this._signatures[t],
                                r = new et(this._payload);
                            r.setProtectedHeader(n.protectedHeader), r.setUnprotectedHeader(n.unprotectedHeader);
                            const {
                                payload: o,
                                ...i
                            } = await r.sign(n.key, n.options);
                            if (0 === t) e.payload = o;
                            else if (e.payload !== o) throw new P("inconsistent use of JWS Unencoded Payload Option (RFC7797)");
                            e.signatures.push(i)
                        }
                        return e
                    }
                }
                class ot {
                    constructor(e) {
                        if (!ee(e)) throw new TypeError("JWT Claims Set MUST be an object");
                        this._payload = e
                    }
                    setIssuer(e) {
                        return this._payload = {
                            ...this._payload,
                            iss: e
                        }, this
                    }
                    setSubject(e) {
                        return this._payload = {
                            ...this._payload,
                            sub: e
                        }, this
                    }
                    setAudience(e) {
                        return this._payload = {
                            ...this._payload,
                            aud: e
                        }, this
                    }
                    setJti(e) {
                        return this._payload = {
                            ...this._payload,
                            jti: e
                        }, this
                    }
                    setNotBefore(e) {
                        return this._payload = "number" == typeof e ? {
                            ...this._payload,
                            nbf: e
                        } : {
                            ...this._payload,
                            nbf: Ve(new Date) + ze(e)
                        }, this
                    }
                    setExpirationTime(e) {
                        return this._payload = "number" == typeof e ? {
                            ...this._payload,
                            exp: e
                        } : {
                            ...this._payload,
                            exp: Ve(new Date) + ze(e)
                        }, this
                    }
                    setIssuedAt(e) {
                        return this._payload = void 0 === e ? {
                            ...this._payload,
                            iat: Ve(new Date)
                        } : {
                            ...this._payload,
                            iat: e
                        }, this
                    }
                }
                class it extends ot {
                    setProtectedHeader(e) {
                        return this._protectedHeader = e, this
                    }
                    async sign(e, t) {
                        var n;
                        const r = new tt(c.encode(JSON.stringify(this._payload)));
                        if (r.setProtectedHeader(this._protectedHeader), Array.isArray(null === (n = this._protectedHeader) || void 0 === n ? void 0 : n.crit) && this._protectedHeader.crit.includes("b64") && !1 === this._protectedHeader.b64) throw new k("JWTs MUST NOT use unencoded payload");
                        return r.sign(e, t)
                    }
                }
                class at extends ot {
                    setProtectedHeader(e) {
                        if (this._protectedHeader) throw new TypeError("setProtectedHeader can only be called once");
                        return this._protectedHeader = e, this
                    }
                    setKeyManagementParameters(e) {
                        if (this._keyManagementParameters) throw new TypeError("setKeyManagementParameters can only be called once");
                        return this._keyManagementParameters = e, this
                    }
                    setContentEncryptionKey(e) {
                        if (this._cek) throw new TypeError("setContentEncryptionKey can only be called once");
                        return this._cek = e, this
                    }
                    setInitializationVector(e) {
                        if (this._iv) throw new TypeError("setInitializationVector can only be called once");
                        return this._iv = e, this
                    }
                    replicateIssuerAsHeader() {
                        return this._replicateIssuerAsHeader = !0, this
                    }
                    replicateSubjectAsHeader() {
                        return this._replicateSubjectAsHeader = !0, this
                    }
                    replicateAudienceAsHeader() {
                        return this._replicateAudienceAsHeader = !0, this
                    }
                    async encrypt(e, t) {
                        const n = new Qe(c.encode(JSON.stringify(this._payload)));
                        return this._replicateIssuerAsHeader && (this._protectedHeader = {
                            ...this._protectedHeader,
                            iss: this._payload.iss
                        }), this._replicateSubjectAsHeader && (this._protectedHeader = {
                            ...this._protectedHeader,
                            sub: this._payload.sub
                        }), this._replicateAudienceAsHeader && (this._protectedHeader = {
                            ...this._protectedHeader,
                            aud: this._payload.aud
                        }), n.setProtectedHeader(this._protectedHeader), this._iv && n.setInitializationVector(this._iv), this._cek && n.setContentEncryptionKey(this._cek), this._keyManagementParameters && n.setKeyManagementParameters(this._keyManagementParameters), n.encrypt(e, t)
                    }
                }
                const st = (e, t) => {
                    if ("string" != typeof e || !e) throw new C(`${t} missing or invalid`)
                };
                async function ct(e, t = "sha256") {
                    if (!ee(e)) throw new TypeError("JWK must be an object");
                    if ("sha256" !== t && "sha384" !== t && "sha512" !== t) throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
                    let n;
                    switch (e.kty) {
                        case "EC":
                            st(e.crv, '"crv" (Curve) Parameter'), st(e.x, '"x" (X Coordinate) Parameter'), st(e.y, '"y" (Y Coordinate) Parameter'), n = {
                                crv: e.crv,
                                kty: e.kty,
                                x: e.x,
                                y: e.y
                            };
                            break;
                        case "OKP":
                            st(e.crv, '"crv" (Subtype of Key Pair) Parameter'), st(e.x, '"x" (Public Key) Parameter'), n = {
                                crv: e.crv,
                                kty: e.kty,
                                x: e.x
                            };
                            break;
                        case "RSA":
                            st(e.e, '"e" (Exponent) Parameter'), st(e.n, '"n" (Modulus) Parameter'), n = {
                                e: e.e,
                                kty: e.kty,
                                n: e.n
                            };
                            break;
                        case "oct":
                            st(e.k, '"k" (Key Value) Parameter'), n = {
                                k: e.k,
                                kty: e.kty
                            };
                            break;
                        default:
                            throw new $('"kty" (Key Type) Parameter missing or unsupported')
                    }
                    const r = c.encode(JSON.stringify(n));
                    return g(await s(t, r))
                }
                async function ut(e, t) {
                    const n = {
                        ...e,
                        ...t.header
                    };
                    if (!ee(n.jwk)) throw new P('"jwk" (JSON Web Key) Header Parameter must be a JSON object');
                    const r = await Ee({
                        ...n.jwk,
                        ext: !0
                    }, n.alg, !0);
                    if (r instanceof Uint8Array || "public" !== r.type) throw new P('"jwk" (JSON Web Key) Header Parameter must be a public key');
                    return r
                }

                function lt(e) {
                    return e && "object" == typeof e && Array.isArray(e.keys) && e.keys.every(dt)
                }

                function dt(e) {
                    return ee(e)
                }
                class ft {
                    constructor(e) {
                        if (this._cached = new WeakMap, !lt(e)) throw new M("JSON Web Key Set malformed");
                        var t;
                        this._jwks = (t = e, "function" == typeof structuredClone ? structuredClone(t) : JSON.parse(JSON.stringify(t)))
                    }
                    async getKey(e, t) {
                        const {
                            alg: n,
                            kid: r
                        } = {
                            ...e,
                            ...t.header
                        }, o = function(e) {
                            switch ("string" == typeof e && e.slice(0, 2)) {
                                case "RS":
                                case "PS":
                                    return "RSA";
                                case "ES":
                                    return "EC";
                                case "Ed":
                                    return "OKP";
                                default:
                                    throw new $('Unsupported "alg" value for a JSON Web Key Set')
                            }
                        }(n), i = this._jwks.keys.filter((e => {
                            let t = o === e.kty;
                            if (t && "string" == typeof r && (t = r === e.kid), t && "string" == typeof e.alg && (t = n === e.alg), t && "string" == typeof e.use && (t = "sig" === e.use), t && Array.isArray(e.key_ops) && (t = e.key_ops.includes("verify")), t && "EdDSA" === n && (t = "Ed25519" === e.crv || "Ed448" === e.crv), t) switch (n) {
                                case "ES256":
                                    t = "P-256" === e.crv;
                                    break;
                                case "ES256K":
                                    t = "secp256k1" === e.crv;
                                    break;
                                case "ES384":
                                    t = "P-384" === e.crv;
                                    break;
                                case "ES512":
                                    t = "P-521" === e.crv
                            }
                            return t
                        })), {
                            0: a,
                            length: s
                        } = i;
                        if (0 === s) throw new L;
                        if (1 !== s) throw new H;
                        const c = this._cached.get(a) || this._cached.set(a, {}).get(a);
                        if (void 0 === c[n]) {
                            const e = await Ee({
                                ...a,
                                ext: !0
                            }, n);
                            if (e instanceof Uint8Array || "public" !== e.type) throw new M("JSON Web Key Set members must be public keys");
                            c[n] = e
                        }
                        return c[n]
                    }
                }

                function pt(e) {
                    return ft.prototype.getKey.bind(new ft(e))
                }
                class mt extends ft {
                    constructor(e, t) {
                        if (super({
                                keys: []
                            }), this._jwks = void 0, !(e instanceof URL)) throw new TypeError("url must be an instance of URL");
                        this._url = new URL(e.href), this._options = {
                            agent: null == t ? void 0 : t.agent,
                            headers: null == t ? void 0 : t.headers
                        }, this._timeoutDuration = "number" == typeof(null == t ? void 0 : t.timeoutDuration) ? null == t ? void 0 : t.timeoutDuration : 5e3, this._cooldownDuration = "number" == typeof(null == t ? void 0 : t.cooldownDuration) ? null == t ? void 0 : t.cooldownDuration : 3e4, this._cacheMaxAge = "number" == typeof(null == t ? void 0 : t.cacheMaxAge) ? null == t ? void 0 : t.cacheMaxAge : 6e5
                    }
                    coolingDown() {
                        return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cooldownDuration
                    }
                    fresh() {
                        return "number" == typeof this._jwksTimestamp && Date.now() < this._jwksTimestamp + this._cacheMaxAge
                    }
                    async getKey(e, t) {
                        this._jwks && this.fresh() || await this.reload();
                        try {
                            return await super.getKey(e, t)
                        } catch (n) {
                            if (n instanceof L && !1 === this.coolingDown()) return await this.reload(), super.getKey(e, t);
                            throw n
                        }
                    }
                    async reload() {
                        if (this._pendingFetch && W()) return new Promise((e => {
                            const t = () => {
                                void 0 === this._pendingFetch ? e() : setTimeout(t, 5)
                            };
                            t()
                        }));
                        this._pendingFetch || (this._pendingFetch = (async (e, t, n) => {
                            let r, o, i = !1;
                            "function" == typeof AbortController && (r = new AbortController, o = setTimeout((() => {
                                i = !0, r.abort()
                            }), t));
                            const a = await fetch(e.href, {
                                signal: r ? r.signal : void 0,
                                redirect: "manual",
                                headers: n.headers
                            }).catch((e => {
                                if (i) throw new T;
                                throw e
                            }));
                            if (void 0 !== o && clearTimeout(o), 200 !== a.status) throw new b("Expected 200 OK from the JSON Web Key Set HTTP response");
                            try {
                                return await a.json()
                            } catch (e) {
                                throw new b("Failed to parse the JSON Web Key Set HTTP response as JSON")
                            }
                        })(this._url, this._timeoutDuration, this._options).then((e => {
                            if (!lt(e)) throw new M("JSON Web Key Set malformed");
                            this._jwks = {
                                keys: e.keys
                            }, this._jwksTimestamp = Date.now(), this._pendingFetch = void 0
                        })).catch((e => {
                            throw this._pendingFetch = void 0, e
                        }))), await this._pendingFetch
                    }
                }

                function ht(e, t) {
                    return mt.prototype.getKey.bind(new mt(e, t))
                }
                class vt extends ot {
                    encode() {
                        return `${g(JSON.stringify({alg:"none"}))}.${g(JSON.stringify(this._payload))}.`
                    }
                    static decode(e, t) {
                        if ("string" != typeof e) throw new k("Unsecured JWT must be a string");
                        const {
                            0: n,
                            1: r,
                            2: o,
                            length: i
                        } = e.split(".");
                        if (3 !== i || "" !== o) throw new k("Invalid Unsecured JWT");
                        let a;
                        try {
                            if (a = JSON.parse(u.decode(y(n))), "none" !== a.alg) throw new Error
                        } catch (e) {
                            throw new k("Invalid Unsecured JWT")
                        }
                        return {
                            payload: Ye(a, y(r), t),
                            header: a
                        }
                    }
                }
                const gt = g,
                    wt = y;

                function yt(e) {
                    let t;
                    if ("string" == typeof e) {
                        const n = e.split(".");
                        3 !== n.length && 5 !== n.length || ([t] = n)
                    } else if ("object" == typeof e && e) {
                        if (!("protected" in e)) throw new TypeError("Token does not contain a Protected Header");
                        t = e.protected
                    }
                    try {
                        if ("string" != typeof t || !t) throw new Error;
                        const e = JSON.parse(u.decode(wt(t)));
                        if (!ee(e)) throw new Error;
                        return e
                    } catch (e) {
                        throw new TypeError("Invalid Token or Protected Header formatting")
                    }
                }

                function bt(e) {
                    if ("string" != typeof e) throw new k("JWTs must use Compact JWS serialization, JWT must be a string");
                    const {
                        1: t,
                        length: n
                    } = e.split(".");
                    if (5 === n) throw new k("Only JWTs using Compact JWS serialization can be decoded");
                    if (3 !== n) throw new k("Invalid JWT");
                    if (!t) throw new k("JWTs must contain a payload");
                    let r, o;
                    try {
                        r = wt(t)
                    } catch (e) {
                        throw new k("Failed to parse the base64url encoded payload")
                    }
                    try {
                        o = JSON.parse(u.decode(r))
                    } catch (e) {
                        throw new k("Failed to parse the decoded payload as JSON")
                    }
                    if (!ee(o)) throw new k("Invalid JWT Claims Set");
                    return o
                }

                function _t(e) {
                    var t;
                    const n = null !== (t = null == e ? void 0 : e.modulusLength) && void 0 !== t ? t : 2048;
                    if ("number" != typeof n || n < 2048) throw new $("Invalid or unsupported modulusLength option provided, 2048 bits or larger keys must be used");
                    return n
                }
                async function St(e, t) {
                    return async function(e, t) {
                        var n, r;
                        let o, a;
                        switch (e) {
                            case "PS256":
                            case "PS384":
                            case "PS512":
                                o = {
                                    name: "RSA-PSS",
                                    hash: `SHA-${e.slice(-3)}`,
                                    publicExponent: new Uint8Array([1, 0, 1]),
                                    modulusLength: _t(t)
                                }, a = ["sign", "verify"];
                                break;
                            case "RS256":
                            case "RS384":
                            case "RS512":
                                o = {
                                    name: "RSASSA-PKCS1-v1_5",
                                    hash: `SHA-${e.slice(-3)}`,
                                    publicExponent: new Uint8Array([1, 0, 1]),
                                    modulusLength: _t(t)
                                }, a = ["sign", "verify"];
                                break;
                            case "RSA-OAEP":
                            case "RSA-OAEP-256":
                            case "RSA-OAEP-384":
                            case "RSA-OAEP-512":
                                o = {
                                    name: "RSA-OAEP",
                                    hash: `SHA-${parseInt(e.slice(-3),10)||1}`,
                                    publicExponent: new Uint8Array([1, 0, 1]),
                                    modulusLength: _t(t)
                                }, a = ["decrypt", "unwrapKey", "encrypt", "wrapKey"];
                                break;
                            case "ES256":
                                o = {
                                    name: "ECDSA",
                                    namedCurve: "P-256"
                                }, a = ["sign", "verify"];
                                break;
                            case "ES384":
                                o = {
                                    name: "ECDSA",
                                    namedCurve: "P-384"
                                }, a = ["sign", "verify"];
                                break;
                            case "ES512":
                                o = {
                                    name: "ECDSA",
                                    namedCurve: "P-521"
                                }, a = ["sign", "verify"];
                                break;
                            case (W() || N()) && "EdDSA":
                                switch (null == t ? void 0 : t.crv) {
                                    case void 0:
                                    case "Ed25519":
                                        o = {
                                            name: "NODE-ED25519",
                                            namedCurve: "NODE-ED25519"
                                        }, a = ["sign", "verify"];
                                        break;
                                    case N() && "Ed448":
                                        o = {
                                            name: "NODE-ED448",
                                            namedCurve: "NODE-ED448"
                                        }, a = ["sign", "verify"];
                                        break;
                                    default:
                                        throw new $("Invalid or unsupported crv option provided, supported values are Ed25519 and Ed448")
                                }
                                break;
                            case "ECDH-ES":
                            case "ECDH-ES+A128KW":
                            case "ECDH-ES+A192KW":
                            case "ECDH-ES+A256KW":
                                o = {
                                    name: "ECDH",
                                    namedCurve: null !== (n = null == t ? void 0 : t.crv) && void 0 !== n ? n : "P-256"
                                }, a = ["deriveKey", "deriveBits"];
                                break;
                            default:
                                throw new $('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                        }
                        return i.subtle.generateKey(o, null !== (r = null == t ? void 0 : t.extractable) && void 0 !== r && r, a)
                    }(e, t)
                }
                async function xt(e, t) {
                    return async function(e, t) {
                        var n;
                        let r, o, a;
                        switch (e) {
                            case "HS256":
                            case "HS384":
                            case "HS512":
                                r = parseInt(e.slice(-3), 10), o = {
                                    name: "HMAC",
                                    hash: `SHA-${r}`,
                                    length: r
                                }, a = ["sign", "verify"];
                                break;
                            case "A128CBC-HS256":
                            case "A192CBC-HS384":
                            case "A256CBC-HS512":
                                return r = parseInt(e.slice(-3), 10), O(new Uint8Array(r >> 3));
                            case "A128KW":
                            case "A192KW":
                            case "A256KW":
                                r = parseInt(e.slice(1, 4), 10), o = {
                                    name: "AES-KW",
                                    length: r
                                }, a = ["wrapKey", "unwrapKey"];
                                break;
                            case "A128GCMKW":
                            case "A192GCMKW":
                            case "A256GCMKW":
                            case "A128GCM":
                            case "A192GCM":
                            case "A256GCM":
                                r = parseInt(e.slice(1, 4), 10), o = {
                                    name: "AES-GCM",
                                    length: r
                                }, a = ["encrypt", "decrypt"];
                                break;
                            default:
                                throw new $('Invalid or unsupported JWK "alg" (Algorithm) Parameter value')
                        }
                        return i.subtle.generateKey(o, null !== (n = null == t ? void 0 : t.extractable) && void 0 !== n && n, a)
                    }(e, t)
                }
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports
    }
    __webpack_require__.d = (e, t) => {
        for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        __webpack_require__(4913), __webpack_require__(3826);
        var e = __webpack_require__(2169),
            t = __webpack_require__(6465),
            n = __webpack_require__(5928),
            r = __webpack_require__(7637);

        function o() {
            (0, r.removeContent)(), (0, n.initMemberText)(), (0, n.initLoader)(), (0, n.initMessageBoxes)(), (0, e.initLoginForms)(), (0, e.initSignupForms)(), (0, e.initForgotPasswordForm)(), (0, e.initResetPasswordForm)(), (0, e.initProfileForms)(), (0, e.initUpdateEmailForms)(), (0, e.initChangePasswordForms)(), (0, e.initConnectAuthProviderForms)(), (0, t.initOpenCustomerPortalButtons)(), (0, t.initLoginRedirectButtons)(), (0, t.initLoginModalButtons)(), (0, t.initSignupModalButtons)(), (0, t.initForgotPasswordModalButtons)(), (0, t.initProfileModalButtons)(), (0, t.initSignupButtons)(), (0, t.initLogoutButtons)(), (0, t.initLaunchCheckoutButtons)(), (0, t.initUpdatePlanButtons)(), (0, t.initPlanRemoveButtons)(), (0, t.initRemoveSelectedPriceButtons)(), (0, t.resendVerificationEmail)()
        }(0, r.protectPages)(), (0, r.initCSS)(), "loading" !== document.readyState ? o() : document.addEventListener("DOMContentLoaded", (function(e) {
            o()
        }))
    })()
})();