(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var h = this || self;

    function aa() {}

    function ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ca(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function n(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = ba : n = ca;
        return n.apply(null, arguments)
    }

    function ha(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.G = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.I = function(d, e, k) {
            for (var g = Array(arguments.length - 2), f = 2; f < arguments.length; f++) g[f - 2] = arguments[f];
            return b.prototype[e].apply(d, g)
        }
    };

    function p(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };

    function ia(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var r = class {
        constructor(a, b) {
            this.g = b === q ? a : ""
        }
    };
    r.prototype.i = !0;
    r.prototype.h = function() {
        return this.g.toString()
    };
    r.prototype.toString = function() {
        return this.g.toString()
    };

    function ja(a) {
        return a instanceof r && a.constructor === r ? a.g : "type_error:SafeUrl"
    }
    var ka = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        q = {};

    function t(a) {
        t[" "](a);
        return a
    }
    t[" "] = aa;
    var la = "function" === typeof Uint8Array;

    function u() {}
    let x;

    function y(a, b, c) {
        a.g = null;
        x && (b || (b = x), x = null);
        var d = a.constructor.K,
            e = a.constructor.J;
        e = d || e;
        b || (b = e ? [d] : []);
        a.j = e ? 0 : -1;
        a.h = b;
        a: {
            if (b = a.h.length)
                if (--b, d = a.h[b], !(null === d || "object" != typeof d || Array.isArray(d) || la && d instanceof Uint8Array)) {
                    a.l = b - a.j;
                    a.i = d;
                    break a
                }
            a.l = Number.MAX_VALUE
        }
        a.o = {};
        if (c)
            for (b = 0; b < c.length; b++) d = c[b], d < a.l ? (d += a.j, a.h[d] = a.h[d] || A) : (e = a.l + a.j, a.h[e] || (a.i = a.h[e] = {}), a.i[d] = a.i[d] || A)
    }
    const A = [];

    function B(a, b) {
        if (b < a.l) {
            b += a.j;
            var c = a.h[b];
            return c !== A ? c : a.h[b] = []
        }
        if (a.i) return c = a.i[b], c === A ? a.i[b] = [] : c
    }

    function C(a, b, c) {
        a = B(a, b);
        return null == a ? c : a
    }

    function D(a, b) {
        a = B(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function ma(a) {
        var b = na;
        a.g || (a.g = {});
        if (!a.g[1]) {
            let c = B(a, 1);
            c && (a.g[1] = new b(c))
        }
        return a.g[1]
    }

    function oa(a) {
        var b = pa;
        a.g || (a.g = {});
        if (!a.g[1]) {
            var c = B(a, 1);
            let d = [];
            for (let e = 0; e < c.length; e++) d[e] = new b(c[e]);
            a.g[1] = d
        }
        b = a.g[1];
        b == A && (b = a.g[1] = []);
        return b
    }

    function F(a) {
        if (a.g)
            for (var b in a.g) {
                var c = a.g[b];
                if (Array.isArray(c))
                    for (var d = 0; d < c.length; d++) c[d] && F(c[d]);
                else c && F(c)
            }
        return a.h
    }
    u.prototype.toString = function() {
        return F(this).toString()
    };
    var na = class extends u {
            constructor(a) {
                super();
                y(this, a, qa)
            }
        },
        pa = class extends u {
            constructor(a) {
                super();
                y(this, a, null)
            }
        },
        qa = [1];
    var ra = class extends u {
        constructor(a) {
            super();
            y(this, a, null)
        }
    };
    var sa = {
            capture: !0
        },
        ta = {
            passive: !0
        },
        ua = ia(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                h.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function G(a, b, c, d) {
        if (a.addEventListener) {
            var e = a.addEventListener;
            d = d ? d.passive && ua() ? d : d.capture || !1 : !1;
            e.call(a, b, c, d)
        }
    };

    function va(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) va(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function H() {
        var a = I;
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    t(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }
    let J = [];
    const wa = () => {
        const a = J;
        J = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var xa = a => {
        var b = K;
        "complete" === b.readyState || "interactive" === b.readyState ? (J.push(a), 1 == J.length && (window.Promise ? Promise.resolve().then(wa) : window.setImmediate ? setImmediate(wa) : setTimeout(wa, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function ya(a = null) {
        return a && "23" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="23"]')
    }

    function za() {
        if (!(.01 < Math.random())) {
            var a = ya(document.currentScript);
            a = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${23}&version=${a&&a.getAttribute("data-jc-version")||"unknown"}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : (b.google_image_requests || (b.google_image_requests = []), c = b.document.createElement("img"), c.src = a, b.google_image_requests.push(c))
        }
    };
    var K = document,
        L = window;
    var Aa = {};
    var Ba = class {};
    class Ca extends Ba {
        constructor(a) {
            super();
            if (Aa !== Aa) throw Error("Bad secret");
            this.g = a
        }
        toString() {
            return this.g
        }
    }
    var Da = new Ca("about:invalid#zTSz");

    function Ea(a) {
        if (a instanceof Ba)
            if (a instanceof Ca) a = a.g;
            else throw Error("wrong type");
        else a = ja(a);
        return a
    };
    class Fa {
        constructor(a) {
            this.F = a
        }
    }

    function M(a) {
        return new Fa(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Ga = new Fa(a => /^[^:]*([/?#]|$)/.test(a));
    var Ha = M("http"),
        Ia = M("https"),
        Ja = M("ftp"),
        Ka = M("mailto");
    const La = [M("data"), Ha, Ia, Ka, Ja, Ga];

    function Ma(a = La) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Fa && c.F("#")) return new Ca("#")
        }
    }

    function Na(a = La) {
        return Ma(a) || Da
    };
    const Oa = [Ha, Ia, Ka, Ja, Ga, M("market"), M("itms"), M("intent"), M("itms-appss")];
    var Pa = () => {
        var a = `${"http:"===L.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) va(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                0 > b && (b = a.length);
                c = a.indexOf("?");
                if (0 > c || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.substr(0, c), e, a.substr(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var Qa = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Ra = !!window.google_async_iframe_id;
    let I = Ra && window.parent || window;
    var Sa = () => {
            var a = K;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        Ta = (a, b) => {
            a && Qa(b, (c, d) => {
                a.style[d] = c
            })
        },
        Ua = a => {
            var b = K.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };
    var Va = (a = []) => {
        h.google_logging_queue || (h.google_logging_queue = []);
        h.google_logging_queue.push([12, a])
    };
    let N = null;
    var Wa = () => {
            const a = h.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        Xa = () => {
            const a = h.performance;
            return a && a.now ? a.now() : null
        };
    class Ya {
        constructor(a, b) {
            var c = Xa() || Wa();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const O = h.performance,
        Za = !!(O && O.mark && O.measure && O.clearMarks),
        P = ia(() => {
            var a;
            if (a = Za) {
                var b;
                if (null === N) {
                    N = "";
                    try {
                        a = "";
                        try {
                            a = h.top.location.hash
                        } catch (c) {
                            a = h.location.hash
                        }
                        a && (N = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = N;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function $a(a) {
        a && O && P() && (O.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), O.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class ab {
        constructor() {
            var a = U;
            this.g = [];
            this.i = a || h;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = P() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new Ya(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            O && P() && O.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (Xa() || Wa()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                O && P() && O.mark(b);
                !this.h || 2048 < this.g.length ||
                    this.g.push(a)
            }
        }
    };
    if (Ra && !H()) {
        let a = "." + K.domain;
        try {
            for (; 2 < a.split(".").length && !H();) K.domain = a = a.substr(a.indexOf(".") + 1), I = window.parent
        } catch (b) {}
        H() || (I = window)
    }
    const U = I,
        V = new ab;
    var bb = () => {
        U.google_measure_js_timing || (V.h = !1, V.g != V.i.google_js_reporting_queue && (P() && p(V.g, $a), V.g.length = 0))
    };
    "number" !== typeof U.google_srt && (U.google_srt = Math.random());
    "complete" == U.document.readyState ? bb() : V.h && G(U, "load", () => {
        bb()
    });
    var cb = a => {
        G(L, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "ig" !== c.googMsgType || a(c, b)
        })
    };

    function W() {
        this.h = this.h;
        this.i = this.i
    }
    W.prototype.h = !1;

    function db(a) {
        a.h || (a.h = !0, a.j())
    }
    W.prototype.j = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };

    function X(a, b, c) {
        W.call(this);
        this.l = a;
        this.B = b || 0;
        this.o = c;
        this.u = n(this.A, this)
    }
    ha(X, W);
    X.prototype.g = 0;
    X.prototype.j = function() {
        X.G.j.call(this);
        0 != this.g && h.clearTimeout(this.g);
        this.g = 0;
        delete this.l;
        delete this.o
    };
    X.prototype.start = function(a) {
        0 != this.g && h.clearTimeout(this.g);
        this.g = 0;
        var b = this.u;
        a = void 0 !== a ? a : this.B;
        if ("function" !== typeof b)
            if (b && "function" == typeof b.handleEvent) b = n(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.g = 2147483647 < Number(a) ? -1 : h.setTimeout(b, a || 0)
    };
    X.prototype.A = function() {
        this.g = 0;
        this.l && this.l.call(this.o)
    };
    const eb = {
            display: "inline-block",
            position: "absolute"
        },
        fb = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function gb(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 === a.length && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function hb(a, b, c = 2147483647) {
        const d = K.createElement("div");
        Ta(d, Object.assign(Object.assign(Object.assign({}, eb), {
            "z-index": String(c)
        }), b));
        D(a.data, 10) && G(d, "click", aa);
        if (D(a.data, 11)) {
            a = b = K.createElement("a");
            c = Pa();
            const e = Na(Oa);
            e === Da && c("#");
            c = new r(Ea(e), q);
            c instanceof r || c instanceof r || (c = "object" == typeof c && c.i ? c.h() : String(c), ka.test(c) || (c = "about:invalid#zClosurez"), c = new r(c, q));
            a.href = ja(c);
            b.appendChild(d);
            return b
        }
        return d
    }

    function ib(a, b) {
        var c, d, e, k, g = window;
        switch (C(b.m, 5, 1)) {
            case 2:
                null === (d = null === (c = g.AFMA_Communicator) || void 0 === c ? void 0 : c.addEventListener) || void 0 === d ? void 0 : d.call(c, "onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                G(L, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                G(K, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                cb(f => {
                    f.rr && Z(a, b)
                });
                break;
            case 9:
                "IntersectionObserver" in L && (g = new IntersectionObserver(f => {
                    for (const l of f)
                        if (0 < l.intersectionRatio) {
                            Z(a, b);
                            break
                        }
                }), g.observe(K.body), a.H.push(g));
                break;
            case 11:
                null ===
                    (k = null === (e = g.AFMA_Communicator) || void 0 === e ? void 0 : e.addEventListener) || void 0 === k ? void 0 : k.call(e, "onAdVisibilityChanged", () => {
                        Z(a, b)
                    })
        }
    }

    function jb(a, b) {
        b = gb(b);
        const c = C(a.data, 9, 0);
        a.i = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => hb(a, d, 9019))
    }

    function kb(a) {
        var b = 0;
        for (const d of a.B) {
            const e = d.m,
                k = a.u[C(e, 5, 1)];
            d.s || void 0 === k || (b = Math.max(b, k + C(e, 2, 0)))
        }
        a.j && db(a.j);
        b -= Date.now();
        const c = a.g;
        0 < b ? (Y(c, !0), a.j = new X(() => {
            Y(c, !1)
        }, b), a.j.start()) : Y(c, !1)
    }

    function Z(a, b) {
        if (!b.s) {
            var c = C(b.m, 5, 1);
            a.u[c] = Date.now();
            D(b.m, 9) && (a.B.push(b), kb(a))
        }
    };
    window.googqscp = new class {
        constructor() {
            this.i = [];
            this.j = this.g = null;
            this.B = [];
            this.data = null;
            this.A = [];
            this.h = [];
            this.o = [];
            this.u = {};
            this.H = [];
            this.l = null
        }
        init(a) {
            Va([a]);
            this.data = new ra(a);
            a = ma(this.data);
            p(oa(a), e => {
                this.o.push({
                    C: 0,
                    s: !1,
                    D: 0,
                    m: e,
                    v: -1
                })
            });
            this.h = Sa();
            let b = !1;
            a = this.h.length;
            for (let e = 0; e < a; ++e) {
                var c = new na(JSON.parse(this.h[e].getAttribute("data-ifc") || "[]"));
                p(oa(c), k => {
                    this.o.push({
                        C: 0,
                        s: !1,
                        D: 0,
                        m: k,
                        v: e
                    });
                    1 === C(k, 4, 1) && (b = !0)
                })
            }
            a = !1;
            for (var d of this.o) c = d.m, 0 < C(c, 2, 0) && 0 < C(c,
                5, 1) ? (!this.g && D(c, 9) && (this.g = hb(this, fb)), ib(this, d)) : C(c, 1, "") && D(c, 9) && jb(this, C(c, 1, "")), C(c, 1, "") && (a = !0);
            d = [];
            this.g && d.push(this.g);
            !b && d.push(...this.i);
            K.body && Ua(d);
            D(this.data, 13) && xa(() => {
                const e = K.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let g = 0; g < e.length; ++g) {
                    var k = (k = e[g]) ? L.getComputedStyle(k).getPropertyValue("position") : void 0;
                    "absolute" === k && Y(e[g], !1)
                }
            });
            G(K, "click", e => {
                if (!1 === e.isTrusted && D(this.data, 15)) e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopImmediatePropagation(),
                    za();
                else {
                    var k = -1,
                        g = [];
                    for (const v of this.o) {
                        var f = v.v,
                            l = -1 !== f;
                        if (!(C(v.m, 3, 0) <= k || v.s || l && !1 === g[f])) {
                            var m = !l || g[f] || this.h[f].contains(e.target);
                            l && m && (g[f] = !0);
                            if (f = m)
                                if (f = e, m = v, l = m.m, 0 < C(l, 2, 0) && 0 < C(l, 5, 1)) f = this.u[C(l, 5, 1)], f = void 0 !== f && Date.now() < f + C(l, 2, 0);
                                else if (C(l, 1, "")) {
                                {
                                    l = (0 <= m.v ? this.h[m.v] : K.body).getBoundingClientRect();
                                    var E = Number;
                                    var z = (z = K.body) ? L.getComputedStyle(z).getPropertyValue("zoom") : void 0;
                                    E = E(z || "1");
                                    const [lb, mb] = [f.clientX, f.clientY], [Q, R, da, ea] = [lb / E - l.left, mb /
                                        E - l.top, l.width, l.height
                                    ];
                                    if (!(0 < da && 0 < ea) || isNaN(Q) || isNaN(R) || 0 > Q || 0 > R) f = !1;
                                    else {
                                        m = gb(C(m.m, 1, ""));
                                        z = !(Q >= m.left && da - Q > m.right && R >= m.top && ea - R > m.bottom);
                                        if (this.l && D(this.data, 12) && 300 > f.timeStamp - this.l.timeStamp) {
                                            f = this.l.changedTouches[0];
                                            const [S, T] = [f.clientX / E - l.left, f.clientY / E - l.top];
                                            !isNaN(S) && !isNaN(T) && 0 <= S && 0 <= T && (z = z || !(S >= m.left && da - S > m.right && T >= m.top && ea - T > m.bottom))
                                        }
                                        f = z
                                    }
                                }
                            } else f = !0;
                            if (f) {
                                var w = v;
                                k = C(v.m, 3, 0)
                            }
                        }
                    }
                    if (w) switch (k = w.m, C(k, 4, 1)) {
                        case 2:
                        case 3:
                            e.preventDefault ? e.preventDefault() :
                                e.returnValue = !1;
                            g = Date.now();
                            500 < g - w.D && (w.D = g, ++w.C);
                            g = w.m;
                            if (C(g, 8, 0) && w.C >= C(g, 8, 0))
                                if (w.s = !0, this.g && 0 < C(g, 2, 0)) kb(this);
                                else if (0 < this.i.length && C(g, 1, ""))
                                for (var fa of this.i) Y(fa, !1);
                            za();
                            fa = F(k);
                            for (const v of this.A) v(e, fa)
                    }
                }
            }, sa);
            a && D(this.data, 12) && G(K, "touchend", e => {
                this.l = e
            }, ta)
        }
        registerCallback(a) {
            this.A.push(a)
        }
    };
}).call(this);