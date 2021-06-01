(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var h = this || self;

    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
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
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = aa : n = ba;
        return n.apply(null, arguments)
    };

    function ca(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    (class {
        constructor(a, b) {
            this.g = b === ha ? a : ""
        }
    }).prototype.toString = function() {
        return this.g.toString()
    };
    var ha = {};

    function p(a) {
        p[" "](a);
        return a
    }
    p[" "] = function() {};
    var ia = "function" === typeof Uint8Array;

    function ja() {}
    let q;
    const ka = [];

    function t(a, b) {
        if (b < a.m) {
            b += a.l;
            var c = a.g[b];
            return c !== ka ? c : a.g[b] = []
        }
        if (a.i) return c = a.i[b], c === ka ? a.i[b] = [] : c
    }

    function v(a, b, c) {
        a = t(a, b);
        return null == a ? c : a
    }

    function z(a, b) {
        a = t(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function la(a) {
        a = t(a, 13);
        a = null == a ? a : +a;
        return null == a ? 0 : a
    }

    function A(a) {
        if (a.j)
            for (var b in a.j) {
                var c = a.j[b];
                if (Array.isArray(c))
                    for (var d = 0; d < c.length; d++) c[d] && A(c[d]);
                else c && A(c)
            }
        return a.g
    }

    function ma(a) {
        var b = na;
        q = a = a ? JSON.parse(a) : null;
        b = new b(a);
        q = null;
        return b
    }
    ja.prototype.toString = function() {
        return A(this).toString()
    };
    var na = class extends ja {
        constructor(a) {
            super();
            this.j = null;
            q && (a || (a = q), q = null);
            var b = this.constructor.messageId,
                c = this.constructor.T;
            c = b || c;
            a || (a = c ? [b] : []);
            this.l = c ? 0 : -1;
            this.g = a;
            a: {
                if (a = this.g.length)
                    if (--a, b = this.g[a], !(null === b || "object" != typeof b || Array.isArray(b) || ia && b instanceof Uint8Array)) {
                        this.m = a - this.l;
                        this.i = b;
                        break a
                    }
                this.m = Number.MAX_VALUE
            }
        }
    };

    function oa(a = window) {
        return a
    };
    var pa = document,
        D = window;
    class qa {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };

    function E(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function F(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    var ra = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function G(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    p(a.foo);
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

    function sa(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    let H = [];
    const I = () => {
        const a = H;
        H = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var ta = a => {
            H.push(a);
            1 == H.length && (window.Promise ? Promise.resolve().then(I) : window.setImmediate ? setImmediate(I) : setTimeout(I, 0))
        },
        J = (a, b) => {
            "complete" === a.readyState || "interactive" === a.readyState ? ta(b) : a.addEventListener("DOMContentLoaded", b)
        },
        ua = (a, b) => {
            "complete" === a.document.readyState ? ta(b) : a.addEventListener("load", b)
        };

    function K(a, b, c = null) {
        va(a, b, c)
    }

    function va(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        const d = a.document.createElement("img");
        if (c) {
            const e = f => {
                c && c(f);
                F(d, "load", e);
                F(d, "error", e)
            };
            E(d, "load", e);
            E(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    };
    let wa = 0;

    function xa(a) {
        return (a = ya(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function ya(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function za() {
        if (!(.01 < Math.random())) {
            var a = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${24}&version=${xa(24)}&sample=${.01}`,
                b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : K(b, a)
        }
    };
    var Aa = a => a.innerHeight >= a.innerWidth ? 0 : 90,
        Ba = !!window.google_async_iframe_id;
    let L = Ba && window.parent || window;
    const Ca = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var Da = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        Ia = class {
            constructor(a, b) {
                this.url = a;
                this.R = !!b;
                this.depth = null
            }
        };

    function N(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ja(a, b, c, d, e) {
        const f = [];
        sa(a, function(g, l) {
            (g = Ka(g, b, c, d, e)) && f.push(l + "=" + g)
        });
        return f.join(b)
    }

    function Ka(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Ka(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ja(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function La(a) {
        let b = 1;
        for (const c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    }

    function Ma(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = La(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                l = a.i[g];
            for (let m = 0; m < l.length; m++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let k = Ja(l[m], a.j, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        b += k;
                        e = a.j;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }
    class O {
        constructor() {
            this.j = "&";
            this.i = {};
            this.l = 0;
            this.g = []
        }
    };

    function P(a, b, c, d, e, f) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let g;
            c instanceof O ? g = c : (g = new O, sa(c, (m, k) => {
                var r = g,
                    u = r.l++;
                m = N(k, m);
                r.g.push(u);
                r.i[u] = m
            }));
            const l = Ma(g, a.i, "/pagead/gen_204?id=" + b + "&");
            l && ("undefined" !== typeof f ? K(h, l, f) : K(h, l))
        } catch (g) {}
    }
    class Na {
        constructor() {
            this.i = "http:" === D.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        }
    };
    let Q = null;
    var Oa = () => {
            const a = h.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        Pa = () => {
            const a = h.performance;
            return a && a.now ? a.now() : null
        };
    class Qa {
        constructor(a, b) {
            var c = Pa() || Oa();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const R = h.performance,
        Ra = !!(R && R.mark && R.measure && R.clearMarks),
        T = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = Ra) {
                var b;
                if (null === Q) {
                    Q = "";
                    try {
                        a = "";
                        try {
                            a = h.top.location.hash
                        } catch (c) {
                            a = h.location.hash
                        }
                        a && (Q = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Q;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Sa(a) {
        a && R && T() && (R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Ta {
        constructor() {
            var a = U;
            this.events = [];
            this.i = a || h;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = T() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Qa(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            R && T() && R.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Pa() || Oa()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                R && T() && R.mark(b);
                !this.g ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function Ua(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                let c;
                for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (c) {}
        }
        return b
    }

    function Va(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                Sa(e), c = a.m(b, new qa(f, {
                    message: Ua(f)
                }), void 0, void 0)
            } catch (g) {
                a.J(217, g)
            }
            if (c) {
                let g, l;
                null == (g = window.console) || null == (l = g.error) || l.call(g, f)
            } else throw f;
        }
        return d
    }

    function Wa(a, b) {
        var c = V;
        return (...d) => Va(c, a, () => b.apply(void 0, d))
    }
    class Xa {
        constructor() {
            var a = Ya;
            this.j = W;
            this.i = null;
            this.m = this.J;
            this.g = void 0 === a ? null : a;
            this.l = !1
        }
        pinger() {
            return this.j
        }
        J(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const w = new O;
                var g = w;
                g.g.push(1);
                g.i[1] = N("context", a);
                b.error && b.meta && b.id || (b = new qa(b, {
                    message: Ua(b)
                }));
                if (b.msg) {
                    g = w;
                    var l = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = N("msg", l)
                }
                var m = b.meta || {};
                b = m;
                if (this.i) try {
                    this.i(b)
                } catch (B) {}
                if (d) try {
                    d(b)
                } catch (B) {}
                d = w;
                m = [m];
                d.g.push(3);
                d.i[3] = m;
                d = h;
                m = [];
                b = null;
                do {
                    var k = d;
                    if (G(k)) {
                        var r = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else r = b, b = null;
                    m.push(new Ia(r || ""));
                    try {
                        d = k.parent
                    } catch (B) {
                        d = null
                    }
                } while (d && k != d);
                for (let B = 0, Ea = m.length - 1; B <= Ea; ++B) m[B].depth = Ea - B;
                k = h;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == m.length - 1)
                    for (r = 1; r < m.length; ++r) {
                        var u = m[r];
                        u.url || (u.url = k.location.ancestorOrigins[r - 1] || "", u.R = !0)
                    }
                var x = m;
                let S = new Ia(h.location.href, !1);
                k = null;
                const da = x.length - 1;
                for (u = da; 0 <= u; --u) {
                    var y = x[u];
                    !k && Ca.test(y.url) && (k = y);
                    if (y.url && !y.R) {
                        S =
                            y;
                        break
                    }
                }
                y = null;
                const pb = x.length && x[da].url;
                0 != S.depth && pb && (y = x[da]);
                f = new Da(S, y);
                if (f.i) {
                    x = w;
                    var C = f.i.url || "";
                    x.g.push(4);
                    x.i[4] = N("top", C)
                }
                var ea = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var fa = f.g.url.match(ra),
                        M = fa[1],
                        Fa = fa[3],
                        Ga = fa[4];
                    C = "";
                    M && (C += M + ":");
                    Fa && (C += "//", C += Fa, Ga && (C += ":" + Ga));
                    var Ha = C
                } else Ha = "";
                M = w;
                ea = [ea, {
                    url: Ha
                }];
                M.g.push(5);
                M.i[5] = ea;
                P(this.j, e, w, this.l, c)
            } catch (w) {
                try {
                    P(this.j, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ua(w),
                        url: f && f.g.url
                    }, this.l, c)
                } catch (S) {}
            }
            return !0
        }
    };
    let W, V;
    if (Ba && !G(L)) {
        let a = "." + pa.domain;
        try {
            for (; 2 < a.split(".").length && !G(L);) pa.domain = a = a.substr(a.indexOf(".") + 1), L = window.parent
        } catch (b) {}
        G(L) || (L = window)
    }
    const U = L,
        Ya = new Ta;
    var Za = () => {
        if (!U.google_measure_js_timing) {
            var a = Ya;
            a.g = !1;
            a.events != a.i.google_js_reporting_queue && (T() && ca(a.events, Sa), a.events.length = 0)
        }
    };
    W = new Na;
    "number" !== typeof U.google_srt && (U.google_srt = Math.random());
    var $a = W,
        ab = U.google_srt;
    0 <= ab && 1 >= ab && ($a.g = ab);
    V = new Xa;
    V.i = a => {
        const b = wa;
        0 !== b && (a.jc = String(b), a.shv = xa(b))
    };
    V.l = !0;
    "complete" == U.document.readyState ? Za() : Ya.g && E(U, "load", () => {
        Za()
    });
    var X = (a, b) => Wa(a, b);

    function bb(a, b, c) {
        a.parent.postMessage(b, "*");
        c || a.parent.parent === a.parent || a.parent.parent.postMessage(b, "*")
    }

    function Y(a, b, c, d = {}) {
        d.msg_type = b;
        d.googMsgType = "sth";
        bb(a, JSON.stringify(d), c)
    }

    function cb(a) {
        if (a.C || z(a.i, 2)) return !0;
        let b = !0;
        const c = db(a);
        c && (b = 36E5 <= c);
        if (b) try {
            a.g.localStorage.removeItem("LAST_INTERSTITIAL_TIME")
        } catch (d) {}
        return b
    }

    function Z(a, b, c) {
        v(a.i, 3, "") && (b.qid = v(a.i, 3, ""));
        v(a.i, 10, "") && (b.eid = v(a.i, 10, ""));
        b.req = D.location.href;
        P(W, a.L(), b, !0, c, void 0)
    }

    function db(a) {
        try {
            const b = +a.g.localStorage.getItem("LAST_INTERSTITIAL_TIME"),
                c = Date.now();
            if (b && b < c) return c - b
        } catch (b) {}
        return null
    }
    class eb {
        constructor(a, b) {
            this.g = D;
            this.j = a;
            this.o = !1;
            this.u = null;
            this.m = 0;
            this.i = b;
            this.C = z(this.i, 11) || 10 === v(this.i, 12, 0) || 11 === v(this.i, 12, 0)
        }
        L() {}
        F() {
            if (this.o = cb(this)) this.G(), v(this.i, 1, "") && bb(this.g, v(this.i, 1, ""), z(this.i, 19))
        }
        s() {
            if (!this.m) {
                this.u && F(this.g, "storage", this.u);
                var a = this.m = Date.now();
                if (!z(this.i, 2) && !this.C) try {
                    this.g.localStorage.setItem("LAST_INTERSTITIAL_TIME", "" + a)
                } catch (b) {}
                this.P();
                this.j && (a = this.g.document.createEvent("Event"), a.initEvent("i-creative-view", !0, !1), this.j.dispatchEvent(a), a = this.g.document.createEvent("Event"), a.initEvent("onshow", !0, !1), this.g.dispatchEvent(a))
            }
        }
        G() {
            this.g.IntersectionObserver && .01 < la(this.i) ? (new this.g.IntersectionObserver((b, c) => {
                b.forEach(d => {
                    if (!(0 >= d.intersectionRatio)) {
                        this.s();
                        for (const e of this.j.document.getElementsByClassName("GoogleActiveViewElement")) e.removeAttribute("data-google-av-dm");
                        c.disconnect()
                    }
                })
            }, {
                threshold: la(this.i)
            })).observe(this.g.document.documentElement) : E(this.g, "message", X(262, b => {
                a: {
                    if (b &&
                        (this.g.parent == b.source || this.g.parent.parent == b.source)) {
                        var c = {};
                        try {
                            c = this.g.JSON.parse(b.data)
                        } catch (d) {
                            b = void 0;
                            break a
                        }
                        "i-view" == (c && c.msg_type) && this.o && this.s()
                    }
                    b = void 0
                }
                return b
            }));
            this.C || (this.u = X(263, () => {
                this.o = cb(this);
                if (!this.o) {
                    var b = {
                        ["i_tslv"]: db(this)
                    };
                    Y(this.g, "i-no", z(this.i, 19), b)
                }
            }), E(this.g, "storage", this.u));
            const a = () => {
                Y(this.g, "i-adframe-load", z(this.i, 19))
            };
            switch (v(this.i, 17, 0)) {
                case 0:
                    ua(this.g, a);
                    break;
                case 1:
                    Promise.all([new Promise(b => J(this.g.document, b)), new Promise(b =>
                        J(this.j.document, b))]).then(() => a());
                    break;
                case 2:
                    a()
            }
        }
        P(a) {
            let b;
            try {
                const c = oa(this.j);
                c.vv ? c.vv() : b = !0
            } catch (c) {
                V.J(533, c, void 0, void 0);
                return
            }
            a = a || 1;
            b ? (Z(this, {
                vf: a
            }), 3 <= a || this.g.setTimeout(n(eb.prototype.P, this, a + 1), 3E3)) : 1 < a && Z(this, {
                vs: a
            })
        }
    };

    function fb(a) {
        window.parent.postMessage(JSON.stringify({
            type: "rewarded",
            message: a
        }), "*")
    };
    var gb = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };

    function hb(a, b, c) {
        a = {
            context: "iaf::itf",
            req: D.location.href,
            db: a ? 1 : 0,
            ls: b ? 1 : 0,
            eid: v(c, 10, ""),
            qid: v(c, 3, ""),
            rtype: v(c, 12, 0)
        };
        P(W, "jserror", a, !0, void 0, void 0)
    }

    function ib(a, b) {
        jb(a, b) && (a.l.style.background = "rgba(255,255,255, .8)", h.setTimeout(() => {
            a.l.style.background = "transparent";
            a.dismiss(2)
        }, 750))
    }

    function kb(a, b) {
        let c;
        b.some(d => "intervention" === d.type && "HeavyAdIntervention" === (null == (c = d.body) ? void 0 : c.id)) && (Z(a, {
            hai: "1"
        }, 1), a.m ? a.dismiss(8) : Y(a.g, "i_iif", z(a.i, 19)))
    }

    function lb(a) {
        var b = a.l.getBoundingClientRect(),
            c = b.bottom,
            d = b.right;
        const e = gb(a.g).clientHeight,
            f = gb(a.g).clientWidth,
            g = Math.floor(c - e),
            l = Math.floor(d - f);
        if (0 <= g || 5 < l) c -= b.top, d -= b.left, b = a.g, Z(a, {
            dhb: g >= c ? 1 : 0,
            dhr: l >= d ? 1 : 0,
            h: e,
            w: f,
            bh: c,
            bw: d,
            opb: g,
            opr: l,
            pt: b.innerHeight >= b.innerWidth ? 1 : 0,
            req: a.g.location.href
        })
    }

    function mb(a) {
        const b = X(259, n(function() {
            Y(this.g, "i-blur", z(this.i, 19));
            F(this.g, "blur", b)
        }, a));
        E(a.g, "blur", b)
    }

    function nb(a, b) {
        var c = {};
        z(a.i, 15) ? (fb("canceled"), fb("closed")) : Y(a.g, b, z(a.i, 19), c)
    }

    function ob(a, b) {
        const c = a.g.document.getElementById("creative");
        a.g.goog_vignette_survey && (a.g.goog_vignette_survey.display(c, () => {
            a.dismiss(3)
        }, () => {}, 1), b && b.stopPropagation())
    }

    function qb(a) {
        !1 === a.A && a.enableDismissListeners();
        a.O && E(a.O, "click", X(261, c => ob(a, c)));
        const b = a.g.document.getElementById("abgc");
        b && E(b, "click", X(830, c => {
            c && c.stopPropagation()
        }))
    }

    function rb(a) {
        E(a.g, "resize", () => {
            const b = Aa(a.g);
            a.D ? (a.D = !1, a.I = 90 === b) : (a.I ? 0 === b : 90 === b) && a.dismiss(4)
        })
    }

    function sb(a) {
        var b = X(617, c => {
            var d = a.l,
                e = document.activeElement;
            2 == v(a.i, 5, 0) && (e = a.j.document.activeElement);
            (27 === c.which || 13 === c.which && e === d) && a.dismiss(5);
            if (9 === c.which) {
                d = tb(a);
                e = Array.prototype.indexOf.call(d, e, void 0);
                d = ub.length;
                const f = tb(a);
                c.shiftKey && 0 === e ? (c.preventDefault(), f[d - 1].focus()) : c.shiftKey || e !== d - 1 || (c.preventDefault(), f[0].focus())
            }
        });
        E(a.g, "keydown", b);
        2 === v(a.i, 5, 0) && E(a.j, "keydown", b);
        b = tb(a).filter((c, d) => {
            c || Z(a, {
                missingFocusableChild: 1,
                index: d
            });
            return !!c
        });
        ca(b,
            (c, d) => {
                c.setAttribute("tabindex", d + 1)
            });
        b.length && b[0].focus()
    }

    function tb(a) {
        return 2 === v(a.i, 5, 0) ? vb.map(b => a.j.document.getElementById(b)) : ub.map(b => document.getElementById(b))
    }

    function jb(a, b) {
        if (!b) return !0;
        if ((b.preventDefault ? b.defaultPrevented : !1 === b.returnValue) || b.target && b.target.ownerDocument == a.j.document) return !1;
        for (a = b.target; a;) {
            if ("creative" == a.id) return !1;
            a = a.parentElement
        }
        return !0
    }
    class wb extends eb {
        constructor(a, b, c, d) {
            super(a, d);
            this.l = b;
            this.O = c;
            this.K = 0;
            this.N = X(260, e => {
                this.dismiss(1);
                e && e.stopPropagation()
            });
            this.M = e => ib(this, e);
            this.H = [];
            this.B = [];
            this.D = this.I = this.A = !1;
            this.v = null
        }
        F() {
            super.F();
            (this.v = this.g.ReportingObserver ? new this.g.ReportingObserver((a, b) => {
                kb(this, a) && b.disconnect()
            }, {
                buffered: !0
            }) : null) && E(this.g, "unload", () => {
                kb(this, this.v.takeRecords());
                this.v.disconnect()
            })
        }
        L() {
            return "ia_evt"
        }
        addViewListener(a) {
            a = Wa(483, a);
            this.m ? a() : this.H.push(a)
        }
        addDismissListener(a) {
            this.B.push(Wa(484,
                a))
        }
        disableDismissListeners() {
            this.A = !0;
            F(this.l, "click", this.N);
            F(this.g.document, "click", this.M)
        }
        enableDismissListeners() {
            this.A = !1;
            E(this.l, "click", this.N);
            E(this.g.document, "click", this.M)
        }
        dismiss(a) {
            document.body.setAttribute("aria-hidden", "true");
            Z(this, {
                ttd: Date.now() - this.m,
                req: D.location.href,
                pda: this.K,
                ds: a
            });
            this.K++ || mb(this);
            let b = 0;
            for (let d = 0; d < this.B.length; d++) b = Math.max(b, this.B[d]());
            b = Math.min(b, 1E3);
            let c = "i-dismiss";
            6 === a ? c = "r-dismiss-before-reward" : 7 === a && (c = "r-dismiss-after-reward");
            0 === b ? nb(this, c) : h.setTimeout(() => nb(this, c), b)
        }
        G() {
            super.G();
            z(this.i, 18) && qb(this)
        }
        s() {
            super.s();
            this.I = 90 === Aa(this.g);
            this.D = 0 === this.g.innerWidth && 0 === this.g.innerHeight;
            this.l.setAttribute("aria-label", v(this.i, 7, ""));
            z(this.i, 18) || qb(this);
            rb(this);
            Va(V, 772, () => sb(this));
            lb(this);
            for (let a = 0; a < this.H.length; a++) this.H[a]();
            za()
        }
    }
    var ub = ["dismiss-button", "creative"],
        vb = ["dismiss-button", "creative-content"];
    wa = 24;
    const xb = ya(24, document.currentScript);
    if (null == xb) throw Error("JSC not found 24");
    const yb = {},
        zb = xb.attributes;
    for (let a = zb.length - 1; 0 <= a; a--) {
        const b = zb[a].name;
        0 === b.indexOf("data-jcp-") && (yb[b.substring(9)] = zb[a].value)
    }
    (function(a) {
        const b = ma(a.config);
        a = X(258, () => {
            {
                var c = document.getElementById("ad_iframe").contentWindow;
                var d = D.document;
                const e = c.document,
                    f = v(b, 5, 0),
                    g = 0 === f || 2 === f ? e.getElementById(v(b, 6, "")) : d.getElementById(v(b, 6, ""));
                d = 0 === f ? e.getElementById(v(b, 8, "")) : d.getElementById(v(b, 8, ""));
                let l;
                try {
                    l = !!D.localStorage
                } catch (m) {}
                g ? (l || hb(g, l, b), c = new wb(c, g, d, b), c.F()) : (hb(g, l, b), Y(D, "i_iif", z(b, 19)), c = null)
            }
            return window.interstitialAdFrame = c
        });
        if (0 === v(b, 5, 0) || 2 === v(b, 5, 0) || z(b, 16)) {
            const c = document.getElementById("ad_iframe");
            null != c.contentDocument ? J(c.contentDocument, a) : document.getElementById("ad_iframe").addEventListener("load", a)
        } else a()
    })(yb);
}).call(this);