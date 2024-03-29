(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var k = this || self;

    function m(a) {
        return a
    };

    function aa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var p;
    var q = class {
        constructor(a, b) {
            this.g = b === ba ? a : ""
        }
    };
    q.prototype.toString = function() {
        return this.g + ""
    };
    var ba = {};

    function ca() {
        if (void 0 === p) {
            var a = null;
            var b = k.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: m,
                        createScript: m,
                        createScriptURL: m
                    })
                } catch (c) {
                    k.console && k.console.error(c.message)
                }
                p = a
            } else p = a
        }
        a = (a = p) ? a.createScriptURL("https://pagead2.googlesyndication.com/pagead/js/r20210524/r20110914/abg_survey.js") : "https://pagead2.googlesyndication.com/pagead/js/r20210524/r20110914/abg_survey.js";
        return new q(a, ba)
    };
    (class {
        constructor(a, b) {
            this.g = b === da ? a : ""
        }
    }).prototype.toString = function() {
        return this.g.toString()
    };
    var da = {};
    var ea = /^[\w+/_-]+[=]{0,2}$/;

    function t(a) {
        t[" "](a);
        return a
    }
    t[" "] = function() {};
    var fa = "function" === typeof Uint8Array;

    function ka() {}
    let u;

    function la(a, b, c) {
        a.i = null;
        u && (b || (b = u), u = null);
        var d = a.constructor.W,
            e = a.constructor.V;
        e = d || e;
        b || (b = e ? [d] : []);
        a.j = e ? 0 : -1;
        a.g = b;
        a: {
            if (b = a.g.length)
                if (--b, d = a.g[b], !(null === d || "object" != typeof d || Array.isArray(d) || fa && d instanceof Uint8Array)) {
                    a.l = b - a.j;
                    a.h = d;
                    break a
                }
            a.l = Number.MAX_VALUE
        }
        a.m = {};
        if (c)
            for (b = 0; b < c.length; b++) d = c[b], d < a.l ? (d += a.j, a.g[d] = a.g[d] || v) : (e = a.l + a.j, a.g[e] || (a.h = a.g[e] = {}), a.h[d] = a.h[d] || v)
    }
    const v = [];

    function w(a, b) {
        if (b < a.l) {
            b += a.j;
            var c = a.g[b];
            return c !== v ? c : a.g[b] = []
        }
        if (a.h) return c = a.h[b], c === v ? a.h[b] = [] : c
    }

    function A(a, b) {
        a = w(a, b);
        return null == a ? 0 : a
    }

    function B(a, b) {
        a = w(a, b);
        return null == a ? "" : a
    }

    function F(a, b) {
        a = w(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function ma(a) {
        var b = na;
        a.i || (a.i = {});
        if (!a.i[1]) {
            let c = w(a, 1);
            c && (a.i[1] = new b(c))
        }
        return a.i[1]
    };
    var na = class extends ka {
            constructor(a) {
                super();
                la(this, a, oa)
            }
        },
        oa = [28];
    var qa = class extends ka {
            constructor(a) {
                super();
                la(this, a, pa)
            }
        },
        pa = [21];
    class ra {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    var sa = {
            passive: !0
        },
        ta = aa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                k.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function G(a, b, c, d) {
        if (a.addEventListener) {
            var e = a.addEventListener;
            d = d ? d.passive && ta() ? d : d.capture || !1 : !1;
            e.call(a, b, c, d)
        }
    };

    function H(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function ua(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : va(b, a)[0] || null);
        return a || null
    }

    function va(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) {
                var g = a.className,
                    n;
                if (n = "function" == typeof g.split) n = 0 <= Array.prototype.indexOf.call(g.split(/\s+/), b, void 0);
                n && (f[d++] = a)
            }
            f.length = d;
            return f
        }
        return e
    }

    function wa(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var xa = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function I(a) {
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

    function ya(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };

    function za(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        const c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    let Aa = 0;

    function Ba(a) {
        return (a = Ca(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function Ca(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function Da() {
        if (!(.01 < Math.random())) {
            var a = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${Ba(60)}&sample=${.01}`,
                b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : za(b, a)
        }
    };
    var J = document,
        K = window;

    function Ea(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function Fa(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : Ea(a).match(/\S+/g) || [], b = 0 <= Array.prototype.indexOf.call(a, b, void 0));
        return b
    }

    function M(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!Fa(a, b)) {
            var c = Ea(a);
            b = c + (0 < c.length ? " " + b : b);
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    class Ga {
        constructor(a) {
            this.g = (this.serializedAttributionData = a) ? new qa(a) : null;
            this.isMutableImpression = null != w(this.g, 1) && !!F(ma(this.g), 33);
            B(this.g, 30);
            this.S = !!F(this.g, 11);
            this.hasUserFeedbackData = !!this.g && null != w(this.g, 1);
            this.K = !!F(this.g, 4);
            this.N = !!F(this.g, 6);
            this.J = !!F(this.g, 13);
            A(this.g, 8);
            this.creativeIndexSuffix = 1 < A(this.g, 8) ? A(this.g, 7).toString() : "";
            this.T = !!F(this.g, 17);
            this.P = !!F(this.g, 18);
            this.I = !!F(this.g, 14);
            this.enableMultiplexThirdPartyAttribution = !!F(this.g, 32);
            this.B = !!F(this.g, 15);
            this.U = !!F(this.g, 31);
            this.O = 1 == F(this.g, 9);
            this.openAttributionInline = 1 == F(this.g, 10);
            this.isMobileDevice = !!F(this.g, 12);
            this.R = null;
            this.M = (a = J.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
            (this.D = "" !== this.creativeIndexSuffix) && void 0 === K.goog_multislot_cache && (K.goog_multislot_cache = {});
            if (this.D && !this.M) {
                if (a = K.goog_multislot_cache.hd, void 0 === a) {
                    a = !1;
                    var b = J.querySelector("[data-dim]");
                    if (b)
                        if (b = b.getBoundingClientRect(), 150 <= b.right - b.left && 150 <= b.bottom -
                            b.top) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.C = a;
            this.u = H("abgcp" + this.creativeIndexSuffix);
            this.s = H("abgc" + this.creativeIndexSuffix);
            this.h = H("abgs" + this.creativeIndexSuffix);
            H("abgl" + this.creativeIndexSuffix);
            this.o = H("abgb" + this.creativeIndexSuffix);
            this.A = H("abgac" + this.creativeIndexSuffix);
            H("mute_panel" + this.creativeIndexSuffix);
            this.v = ua("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.v && !!this.I && !ua("goog_delegate_disabled") && !this.B;
            if (this.h) a: {
                a = this.h;b = "A";c = a.childNodes;
                for (let d = 0; d < c.length; d++) {
                    const e = c.item(d);
                    if ("undefined" != typeof e.tagName && e.tagName.toUpperCase() == b) {
                        a = e;
                        break a
                    }
                }
            }
            else a = null;
            this.j = a;
            this.l = this.isDelegateAttributionActive ? this.v : H("cbb" + this.creativeIndexSuffix);
            this.L = this.C ? "0" === this.creativeIndexSuffix : !0;
            this.enableDelegateDismissableMenu = !!this.l && Fa(this.l, "goog_dismissable_menu");
            this.m = null;
            this.F = 0;
            this.i = this.isDelegateAttributionActive ? this.v : this.N && this.u ? this.u : this.s;
            this.H = !!F(this.g, 19);
            this.adbadgeEnabled = !!F(this.g, 24);
            this.enableNativeJakeUi = !!F(this.g, 27)
        }
    };
    class La {
        constructor(a, b, c) {
            if (!a) throw Error("bad conv util ctor args");
            this.h = a;
            this.g = c
        }
    };
    var Ma = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Na = !!window.google_async_iframe_id;
    let N = Na && window.parent || window;
    var O = (a, b) => {
        a && Ma(b, (c, d) => {
            a.style[d] = c
        })
    };
    const Oa = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var Pa = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Qa = class {
            constructor(a, b) {
                this.url = a;
                this.G = !!b;
                this.depth = null
            }
        };

    function P(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Ra(a, b, c, d, e) {
        const f = [];
        ya(a, function(g, n) {
            (g = Sa(g, b, c, d, e)) && f.push(n + "=" + g)
        });
        return f.join(b)
    }

    function Sa(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Sa(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ra(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ta(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Ua(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = Ta(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                n = a.h[g];
            for (let l = 0; l < n.length; l++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let h = Ra(n[l], a.i, ",$");
                if (h) {
                    h = e + h;
                    if (d >= h.length) {
                        d -= h.length;
                        b += h;
                        e = a.i;
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
    class Va {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Wa(a, b, c, d, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Va ? f = c : (f = new Va, ya(c, (n, l) => {
                var h = f,
                    r = h.j++;
                n = P(l, n);
                h.g.push(r);
                h.h[r] = n
            }));
            const g = Ua(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && za(k, g)
        } catch (f) {}
    }
    class Xa {
        constructor() {
            this.h = "http:" === K.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        }
    };
    let Q = null;
    var Ya = () => {
            const a = k.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        Za = () => {
            const a = k.performance;
            return a && a.now ? a.now() : null
        };
    class $a {
        constructor(a, b) {
            var c = Za() || Ya();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const R = k.performance,
        ab = !!(R && R.mark && R.measure && R.clearMarks),
        S = aa(() => {
            var a;
            if (a = ab) {
                var b;
                if (null === Q) {
                    Q = "";
                    try {
                        a = "";
                        try {
                            a = k.top.location.hash
                        } catch (c) {
                            a = k.location.hash
                        }
                        a && (Q = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Q;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function bb(a) {
        a && R && S() && (R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class cb {
        constructor() {
            var a = T;
            this.h = [];
            this.i = a || k;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = S() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new $a(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            R && S() && R.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Za() || Ya()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                R && S() && R.mark(b);
                !this.g || 2048 < this.h.length ||
                    this.h.push(a)
            }
        }
    };

    function db(a) {
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

    function eb(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                bb(e), c = a.m(b, new ra(f, {
                    message: db(f)
                }), void 0, void 0)
            } catch (g) {
                a.j(217, g)
            }
            if (c) {
                let g, n;
                null == (g = window.console) || null == (n = g.error) || n.call(g, f)
            } else throw f;
        }
        return d
    }

    function fb(a, b) {
        var c = U;
        return (...d) => eb(c, a, () => b.apply(void 0, d))
    }
    class gb {
        constructor() {
            var a = hb;
            this.l = ib;
            this.h = null;
            this.m = this.j;
            this.g = void 0 === a ? null : a;
            this.i = !1
        }
        j(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const x = new Va;
                var g = x;
                g.g.push(1);
                g.h[1] = P("context", a);
                b.error && b.meta && b.id || (b = new ra(b, {
                    message: db(b)
                }));
                if (b.msg) {
                    g = x;
                    var n = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = P("msg", n)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (C) {}
                if (d) try {
                    d(b)
                } catch (C) {}
                d = x;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = k;
                l = [];
                b = null;
                do {
                    var h = d;
                    if (I(h)) {
                        var r = h.location.href;
                        b = h.document &&
                            h.document.referrer || null
                    } else r = b, b = null;
                    l.push(new Qa(r || ""));
                    try {
                        d = h.parent
                    } catch (C) {
                        d = null
                    }
                } while (d && h != d);
                for (let C = 0, Ha = l.length - 1; C <= Ha; ++C) l[C].depth = Ha - C;
                h = k;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == l.length - 1)
                    for (r = 1; r < l.length; ++r) {
                        var D = l[r];
                        D.url || (D.url = h.location.ancestorOrigins[r - 1] || "", D.G = !0)
                    }
                var y = l;
                let V = new Qa(k.location.href, !1);
                h = null;
                const ha = y.length - 1;
                for (D = ha; 0 <= D; --D) {
                    var z = y[D];
                    !h && Oa.test(z.url) && (h = z);
                    if (z.url && !z.G) {
                        V = z;
                        break
                    }
                }
                z =
                    null;
                const qb = y.length && y[ha].url;
                0 != V.depth && qb && (z = y[ha]);
                f = new Pa(V, z);
                if (f.h) {
                    y = x;
                    var E = f.h.url || "";
                    y.g.push(4);
                    y.h[4] = P("top", E)
                }
                var ia = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var ja = f.g.url.match(xa),
                        L = ja[1],
                        Ia = ja[3],
                        Ja = ja[4];
                    E = "";
                    L && (E += L + ":");
                    Ia && (E += "//", E += Ia, Ja && (E += ":" + Ja));
                    var Ka = E
                } else Ka = "";
                L = x;
                ia = [ia, {
                    url: Ka
                }];
                L.g.push(5);
                L.h[5] = ia;
                Wa(this.l, e, x, this.i, c)
            } catch (x) {
                try {
                    Wa(this.l, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: db(x),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (V) {}
            }
            return !0
        }
    };
    let ib, U;
    if (Na && !I(N)) {
        let a = "." + J.domain;
        try {
            for (; 2 < a.split(".").length && !I(N);) J.domain = a = a.substr(a.indexOf(".") + 1), N = window.parent
        } catch (b) {}
        I(N) || (N = window)
    }
    const T = N,
        hb = new cb;
    var jb = () => {
        if (!T.google_measure_js_timing) {
            var a = hb;
            a.g = !1;
            a.h != a.i.google_js_reporting_queue && (S() && Array.prototype.forEach.call(a.h, bb, void 0), a.h.length = 0)
        }
    };
    ib = new Xa;
    "number" !== typeof T.google_srt && (T.google_srt = Math.random());
    var kb = ib,
        lb = T.google_srt;
    0 <= lb && 1 >= lb && (kb.g = lb);
    U = new gb;
    U.h = a => {
        const b = Aa;
        0 !== b && (a.jc = String(b), a.shv = Ba(b))
    };
    U.i = !0;
    "complete" == T.document.readyState ? jb() : hb.g && G(T, "load", () => {
        jb()
    });
    var W = (a, b) => fb(a, b);

    function mb(a) {
        if (a.g.j && a.g.P) {
            const b = ma(a.g.g);
            b && null != w(b, 5) && null != w(b, 6) && (a.i = new La(B(b, 5), B(b, 6), B(b, 19)));
            G(a.g.j, "click", W(452, () => {
                if (!a.j && (a.j = !0, a.i)) {
                    var c = a.i;
                    let d = c.h + "&label=closebutton_whythisad_click";
                    d += "&label_instance=1";
                    c.g && (d += "&cid=" + c.g);
                    za(window, d)
                }
            }))
        }
    }

    function nb(a) {
        if (a.g.S) G(a.g.i, "click", W(365, b => {
            const c = K.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) G(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.l && G(a.g.l, "click", () => a.h()), a.g.U && a.g.h && G(a.g.h, "click", () => a.h())), a.g.K) ob(a);
        else {
            G(a.g.i, "mouseover", W(367, () => ob(a)));
            G(a.g.i, "mouseout", W(369, () => pb(a, 500)));
            G(a.g.i, "touchstart", W(368, () => ob(a)), sa);
            const b = W(370,
                () => pb(a, 4E3));
            G(a.g.i, "mouseup", b);
            G(a.g.i, "touchend", b);
            G(a.g.i, "touchcancel", b);
            a.g.j && G(a.g.j, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function ob(a) {
        window.clearTimeout(a.g.m);
        a.g.m = null;
        a.g.h && "block" == a.g.h.style.display || (a.g.F = Date.now(), a.g.o && a.g.h && (a.g.o.style.display = "none", a.g.h.style.display = "block"))
    }

    function pb(a, b) {
        window.clearTimeout(a.g.m);
        a.g.m = window.setTimeout(() => rb(a), b)
    }

    function sb(a) {
        const b = a.g.A;
        b.style.display = "block";
        a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            M(b, "abgacfo")
        })
    }

    function rb(a) {
        window.clearTimeout(a.g.m);
        a.g.m = null;
        a.g.o && a.g.h && (a.g.o.style.display = "block", a.g.h.style.display = "none")
    }
    class tb {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.T || (this.j = !1, this.i = null, !this.g.C || this.g.adbadgeEnabled || this.g.L ? mb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (O(this.g.o, a), O(this.g.h, a), O(this.g.u, b), O(this.g.s, b)) : O(this.g.s, a)), nb(this), this.g.enableNativeJakeUi && M(this.g.A, "abgnac"), this.g.isDelegateAttributionActive ? (M(document.body, "goog_delegate_active"), M(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.l && wa(this.g.l), setTimeout(() => {
                M(document.body,
                    "jar")
            }, this.g.J ? 750 : 100)), this.g.B && M(document.body, "goog_delegate_disabled"), this.g.H && K.addEventListener("load", () => this.h()))
        }
        preventDefault(a) {
            if (this.g.h && "block" == this.g.h.style.display && 500 > Date.now() - this.g.F) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.g.openAttributionInline) {
                var b = this.g.j.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b), a.preventDefault ?
                    a.preventDefault() : a.returnValue = !1)
            } else this.g.O && (b = this.g.j.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function ub(a) {
        if (!a.g && (a.g = !0, K.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = a.h;
            if (!a) throw Error("bad attrdata");
            a = new Ga(a);
            new b(a)
        }
    }
    class vb {
        constructor(a) {
            var b = wb;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            ua("goog_delegate_deferred") ? void 0 !== K.goog_delegate_deferred_token ? ub(this) : (a = () => {
                ub(this)
            }, K.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : ub(this)
        }
    };
    var xb = (a = []) => {
        k.google_logging_queue || (k.google_logging_queue = []);
        k.google_logging_queue.push([11, a])
    };
    class yb {
        constructor() {
            this.promise = new Promise(a => {
                this.g = a
            })
        }
    };
    var zb = class {
        constructor() {
            const a = new yb;
            this.promise = a.promise;
            this.resolve = a.g
        }
    };

    function Ab(a, b) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        a[5] || (a[5] = new zb, b && b());
        return a[5]
    }

    function Bb() {
        var a = window,
            b = ca();
        return Ab(a, function() {
            var c = a.document;
            const d = c.createElement("script");
            d.src = b instanceof q && b.constructor === q ? b.g : "type_error:TrustedResourceUrl";
            a: {
                var e = (d.ownerDocument && d.ownerDocument.defaultView || k).document;
                if (e.querySelector && (e = e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && ea.test(e)) break a;e = ""
            }
            e && d.setAttribute("nonce", e);
            (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function Cb(a) {
        eb(U, 373, () => {
            rb(a.h);
            sb(a.h)
        });
        Bb().then(b => {
            b.createAttributionCard(a.g);
            a.g.R = b;
            b.expandAttributionCard()
        });
        Da()
    }
    class wb {
        constructor(a) {
            this.g = a;
            this.h = new tb(this.g, W(359, () => Cb(this)))
        }
    };
    Aa = 60;

    function Db(a) {
        xb([a]);
        new vb(a)
    }
    var X = ["buildAttribution"],
        Y = k;
    X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
    for (var Z; X.length && (Z = X.shift());) X.length || void 0 === Db ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = Db;
}).call(this);