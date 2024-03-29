(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa, ba = {},
        m = this || self;

    function ca(a) {
        a.pb = void 0;
        a.S = function() {
            return a.pb ? a.pb : a.pb = new a
        }
    }

    function da(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function q(a) {
        return Object.prototype.hasOwnProperty.call(a, ia) && a[ia] || (a[ia] = ++ja)
    }
    var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ja = 0;

    function ka(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function la(a, b, c) {
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

    function r(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r = ka : r = la;
        return r.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function na(a) {
        return a
    };
    var oa;

    function pa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function qa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function ra(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function sa(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function ta(a, b, c) {
        let d = c;
        qa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function ua(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function va(a, b) {
        return 0 <= pa(a, b)
    }

    function wa(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function xa(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (da(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function ya(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function za() {
        return !1
    }

    function Aa() {
        return !0
    }

    function Ba(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Ca(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Da(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };
    var Ea;

    function Fa() {
        if (void 0 === Ea) {
            var a = null,
                b = m.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    m.console && m.console.error(c.message)
                }
                Ea = a
            } else Ea = a
        }
        return Ea
    };
    var Ha = class {
        constructor(a, b) {
            this.g = b === Ga ? a : ""
        }
    };
    Ha.prototype.toString = function() {
        return this.g + ""
    };
    var Ga = {};

    function Ia(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ja(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var La = class {
        constructor(a, b) {
            this.g = b === Ka ? a : ""
        }
    };
    La.prototype.toString = function() {
        return this.g.toString()
    };
    var Ka = {};
    var Ma;
    a: {
        var Na = m.navigator;
        if (Na) {
            var Oa = Na.userAgent;
            if (Oa) {
                Ma = Oa;
                break a
            }
        }
        Ma = ""
    }

    function t(a) {
        return -1 != Ma.indexOf(a)
    };
    var Qa = class {
        constructor(a, b, c) {
            this.g = c === Pa ? a : ""
        }
    };
    Qa.prototype.toString = function() {
        return this.g.toString()
    };

    function Ra(a) {
        return a instanceof Qa && a.constructor === Qa ? a.g : "type_error:SafeHtml"
    }
    var Pa = {};

    function Sa(a) {
        const b = Fa();
        a = b ? b.createHTML(a) : a;
        return new Qa(a, null, Pa)
    }
    var Ta = new Qa(m.trustedTypes && m.trustedTypes.emptyHTML || "", 0, Pa);
    var Ua = Ca(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Ra(Ta);
        return !b.parentElement
    });

    function Va(a, b) {
        if (Ua())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Ra(b)
    }

    function Wa(a, b) {
        Va(a, b)
    }
    var Xa = /^[\w+/_-]+[=]{0,2}$/;

    function Ya(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : m.document.createElement("div");
        return a.replace(Za, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = Sa(e + " "), Va(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Za = /&([^;\s<&]+);?/g;

    function $a(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function ab(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function bb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function cb(a) {
        cb[" "](a);
        return a
    }
    cb[" "] = function() {};

    function db(a, b) {
        var c = eb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var fb = t("Opera"),
        gb = t("Trident") || t("MSIE"),
        hb = t("Edge"),
        jb = t("Gecko") && !(-1 != Ma.toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
        kb = -1 != Ma.toLowerCase().indexOf("webkit") && !t("Edge");

    function lb() {
        var a = m.document;
        return a ? a.documentMode : void 0
    }
    var mb;
    a: {
        var nb = "",
            ob = function() {
                var a = Ma;
                if (jb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (hb) return /Edge\/([\d\.]+)/.exec(a);
                if (gb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (kb) return /WebKit\/(\S+)/.exec(a);
                if (fb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ob && (nb = ob ? ob[1] : "");
        if (gb) {
            var pb = lb();
            if (null != pb && pb > parseFloat(nb)) {
                mb = String(pb);
                break a
            }
        }
        mb = nb
    }
    var qb = mb,
        eb = {};

    function rb(a) {
        return db(a, function() {
            let b = 0;
            const c = Ia(String(qb)).split("."),
                d = Ia(String(a)).split("."),
                e = Math.max(c.length, d.length);
            for (let h = 0; 0 == b && h < e; h++) {
                var f = c[h] || "",
                    g = d[h] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    b = Ja(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ja(0 == f[2].length, 0 == g[2].length) || Ja(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var sb;
    if (m.document && gb) {
        var tb = lb();
        sb = tb ? tb : parseInt(qb, 10) || void 0
    } else sb = void 0;
    var ub = sb;
    var vb = {},
        wb = null;
    var xb = "function" === typeof Uint8Array;

    function yb() {}
    let zb;

    function Ab(a, b, c) {
        a.j = null;
        zb && (b || (b = zb), zb = null);
        var d = a.constructor.Xc,
            e = a.constructor.Vc;
        e = d || e;
        b || (b = e ? [d] : []);
        a.m = e ? 0 : -1;
        a.L = b;
        a: {
            if (b = a.L.length)
                if (--b, d = a.L[b], !(null === d || "object" != typeof d || Array.isArray(d) || xb && d instanceof Uint8Array)) {
                    a.v = b - a.m;
                    a.l = d;
                    break a
                }
            a.v = Number.MAX_VALUE
        }
        a.J = {};
        if (c)
            for (b = 0; b < c.length; b++) d = c[b], d < a.v ? (d += a.m, a.L[d] = a.L[d] || Bb) : (Cb(a), a.l[d] = a.l[d] || Bb)
    }
    const Bb = [];

    function Cb(a) {
        let b = a.v + a.m;
        a.L[b] || (a.l = a.L[b] = {})
    }

    function y(a, b) {
        if (b < a.v) {
            b += a.m;
            var c = a.L[b];
            return c !== Bb ? c : a.L[b] = []
        }
        if (a.l) return c = a.l[b], c === Bb ? a.l[b] = [] : c
    }

    function Db(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function Eb(a, b, c) {
        b < a.v ? a.L[b + a.m] = c : (Cb(a), a.l[b] = c)
    }

    function Fb(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }

    function Gb(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c),
                e = [];
            for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == Bb && (b = a.j[c] = []);
        return b
    }

    function Hb(a) {
        if (a.j)
            for (var b in a.j)
                if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                    var c = a.j[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Hb(c[d]);
                    else c && Hb(c)
                }
        return a.L
    }
    yb.prototype.H = xb ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            void 0 === b && (b = 0);
            if (!wb) {
                wb = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    vb[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === wb[h] && (wb[h] = g)
                    }
                }
            }
            b = vb[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var l = this[d],
                    k = (e = d + 1 < this.length) ? this[d + 1] : 0;
                h = (f = d + 2 < this.length) ? this[d + 2] : 0;
                g =
                    l >> 2;
                l = (l & 3) << 4 | k >> 4;
                k = (k & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (k = 64));
                c.push(b[g], b[l], b[k] || "", b[h] || "")
            }
            return c.join("")
        };
        try {
            return JSON.stringify(this.L && Hb(this), Ib)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.L && Hb(this), Ib)
    };

    function Ib(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }

    function Jb(a, b) {
        zb = b = b ? JSON.parse(b) : null;
        a = new a(b);
        zb = null;
        return a
    }
    yb.prototype.toString = function() {
        return Hb(this).toString()
    };
    const Kb = a => !!a;

    function Lb() {
        var a = Mb;
        if (!(Nb || Kb)(a)) throw Error(String(a));
    };
    var Ob = document,
        Pb = window;
    class Qb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    var Rb = {
            capture: !0
        },
        Sb = Ca(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Tb(a) {
        return a ? a.passive && Sb() ? a : a.capture || !1 : !1
    }

    function z(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Tb(d)), !0) : !1
    }

    function B(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Tb(d)), !0) : !1
    };
    var Ub = gb || fb || kb;

    function Vb(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Wb(a) {
        return Vb.apply(null, arguments) / arguments.length
    };

    function E(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }

    function Xb(a, b) {
        return new E(a.x - b.x, a.y - b.y)
    }
    E.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    E.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    E.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Yb(a, b) {
        this.width = a;
        this.height = b
    }
    Yb.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Yb.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Yb.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Yb.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Zb(a) {
        return a ? new $b(ac(a)) : oa || (oa = new $b)
    }

    function bc(a) {
        a = a.document;
        a = cc(a) ? a.documentElement : a.body;
        return new Yb(a.clientWidth, a.clientHeight)
    }

    function dc(a) {
        var b = a.document,
            c = 0;
        if (b) {
            c = b.body;
            var d = b.documentElement;
            if (!d || !c) return 0;
            a = bc(a).height;
            if (cc(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                b = d.scrollHeight;
                var e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }

    function ec(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function fc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function cc(a) {
        return "CSS1Compat" == a.compatMode
    }

    function gc(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function ac(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function hc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a && 20 >= c;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function $b(a) {
        this.g = a || m.document || document
    }

    function ic(a, b) {
        return fc(a.g, b)
    }
    $b.prototype.contains = gc;

    function jc() {
        return !(t("iPad") || t("Android") && !t("Mobile") || t("Silk")) && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"))
    };
    var kc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function lc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    cb(a.foo);
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

    function mc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function oc(a, b, c) {
        if (a)
            for (const d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    }

    function pc(a) {
        const b = [];
        oc(a, function(c) {
            b.push(c)
        });
        return b
    }
    var qc = /^([0-9.]+)px$/,
        rc = /^(-?[0-9.]{1,30})$/;

    function sc(a) {
        return rc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function F(a) {
        return (a = qc.exec(a)) ? +a[1] : null
    }
    var I = (a, b) => {
            a.style.setProperty ? oc(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = tc(uc(vc(a.style.cssText), wc(b, c => c + " !important")))
        },
        uc = Object.assign || function(a, b) {
            for (let c = 1; c < arguments.length; c++) {
                const d = arguments[c];
                if (d)
                    for (let e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        },
        wc = (a, b) => {
            const c = {};
            for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        },
        xc = (a, b) => {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !==
                    b(c) && (c = ra(c.children || c.childNodes || [], d => 1 === d.nodeType), c.length && a.unshift(...c))
            }
        },
        yc = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b.call(void 0, a[e], e, a)
                }
            } else a = vc(a.style.cssText), oc(a, b, void 0)
        },
        tc = a => {
            const b = [];
            oc(a, (c, d) => {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        },
        vc = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                qa((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        zc = (a, b = () => !0) => {
            const c = {},
                d = /!\s*important/i;
            yc(a, (e, f) => {
                !d.test(e) && b(f, e) && (e += " !important");
                c[f] = e
            });
            a.style.cssText = tc(c)
        },
        Ac = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Bc = /\.proxy\.googleprod\.com(:\d+)?$/;
    const Cc = /.*domain\.test$/;
    var Dc = a => !!Ac[a] || Bc.test(a) || Cc.test(a),
        Ec = a => {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        };

    function J(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }

    function Fc(a) {
        return new J(a.top, a.right, a.bottom, a.left)
    }
    J.prototype.contains = function(a) {
        return this && a ? a instanceof J ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    J.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    J.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    J.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Gc(a, b = null) {
        Hc(a, b)
    }

    function Hc(a, b) {
        m.google_image_requests || (m.google_image_requests = []);
        const c = m.document.createElement("img");
        if (b) {
            const d = e => {
                b && b(e);
                B(c, "load", d);
                B(c, "error", d)
            };
            z(c, "load", d);
            z(c, "error", d)
        }
        c.src = a;
        m.google_image_requests.push(c)
    };
    var Ic = {};
    var Jc = class {};
    class Kc extends Jc {
        constructor(a) {
            super();
            if (Ic !== Ic) throw Error("Bad secret");
            this.g = a
        }
        toString() {
            return this.g
        }
    }
    var Lc = new Kc("about:invalid#zTSz");

    function Mc(a) {
        if (a instanceof Jc)
            if (a instanceof Kc) a = a.g;
            else throw Error("wrong type");
        else a = a instanceof La && a.constructor === La ? a.g : "type_error:SafeUrl";
        return a
    };
    class Nc {
        constructor(a) {
            this.ec = a
        }
    }

    function Oc(a) {
        return new Nc(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Pc = [Oc("data"), Oc("http"), Oc("https"), Oc("mailto"), Oc("ftp"), new Nc(a => /^[^:]*([/?#]|$)/.test(a))];

    function Qc(a, b = Pc) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Nc && d.ec(a)) return new Kc(a)
        }
    };

    function K(a, b, c) {
        if ("string" === typeof b)(b = Rc(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Rc(c, d);
                f && (c.style[f] = e)
            }
    }
    var Sc = {};

    function Rc(a, b) {
        var c = Sc[b];
        if (!c) {
            var d = ab(b);
            c = d;
            void 0 === a.style[d] && (d = (kb ? "Webkit" : jb ? "Moz" : gb ? "ms" : fb ? "O" : null) + bb(d), void 0 !== a.style[d] && (c = d));
            Sc[b] = c
        }
        return c
    }

    function Tc(a, b) {
        var c = ac(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Uc(a, b) {
        return Tc(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Vc(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Wc(a) {
        var b = ac(a),
            c = new E(0, 0);
        var d = b ? ac(b) : document;
        d = !gb || 9 <= Number(ub) || cc(Zb(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Vc(a);
        d = Zb(b).g;
        b = d.scrollingElement ? d.scrollingElement : !kb && cc(d) ? d.documentElement : d.body || d.documentElement;
        d = d.parentWindow || d.defaultView;
        b = gb && rb("10") && d.pageYOffset != b.scrollTop ? new E(b.scrollLeft, b.scrollTop) : new E(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Xc(a) {
        if (1 == a.nodeType) return a = Vc(a), new E(a.left, a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new E(a.clientX, a.clientY)
    }

    function Yc(a, b) {
        if (b instanceof Yb) {
            var c = b.height;
            b = b.width
        } else throw Error("missing height argument");
        a.style.width = Zc(b, !0);
        a.style.height = Zc(c, !0)
    }

    function Zc(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function $c(a) {
        var b = ad;
        if ("none" != Uc(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ad(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = kb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Vc(a), new Yb(a.right - a.left, a.bottom - a.top)) : new Yb(b, c)
    }

    function bd(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        if (c)
            if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
            else {
                b = a.style.left;
                var d = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = c;
                c = a.style.pixelLeft;
                a.style.left = b;
                a.runtimeStyle.left = d;
                a = +c
            }
        else a = 0;
        return a
    }

    function cd(a, b) {
        if (gb) {
            var c = bd(a, b + "Left"),
                d = bd(a, b + "Right"),
                e = bd(a, b + "Top");
            a = bd(a, b + "Bottom");
            return new J(e, d, a, c)
        }
        c = Tc(a, b + "Left");
        d = Tc(a, b + "Right");
        e = Tc(a, b + "Top");
        a = Tc(a, b + "Bottom");
        return new J(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    };
    var dd = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        ed = a => "number" === typeof a && 0 < a,
        fd = !!window.google_async_iframe_id;
    let gd = fd && window.parent || window;
    var hd = () => {
            if (fd && !lc(gd)) {
                let a = "." + Ob.domain;
                try {
                    for (; 2 < a.split(".").length && !lc(gd);) Ob.domain = a = a.substr(a.indexOf(".") + 1), gd = window.parent
                } catch (b) {}
                lc(gd) || (gd = window)
            }
            return gd
        },
        id = /(^| )adsbygoogle($| )/,
        jd = a => {
            a = a.top;
            return lc(a) ? a : null
        };
    var ld = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = kd(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        kd = a => {
            let b = "";
            dd(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        md = (a, b) => {
            switch (a) {
                case 1:
                    return ld(b, "google_ia_debug");
                case 2:
                    return ld(b, "google_bottom_anchor_debug");
                case 3:
                    return ld(b, "google_anchor_debug") || ld(b, "googleads");
                case 4:
                    return ld(b, "google_scr_debug");
                case 6:
                    return ld(b, "google_responsive_slot_debug")
            }
            return !1
        };
    var od = class extends yb {
            constructor(a) {
                super();
                Ab(this, a, nd)
            }
        },
        nd = [4];
    var pd = class extends yb {
        constructor(a) {
            super();
            Ab(this, a, null)
        }
    };
    var rd = class extends yb {
            constructor(a) {
                super();
                Ab(this, a, qd)
            }
        },
        qd = [3, 4];
    var sd = class extends yb {
        constructor(a) {
            super();
            Ab(this, a, null)
        }
    };
    var td = class extends yb {
        constructor(a) {
            super();
            Ab(this, a, null)
        }
    };
    var vd = class extends yb {
            constructor(a) {
                super();
                Ab(this, a, ud)
            }
            da() {
                return Fb(this, od, 1)
            }
            g() {
                return y(this, 2)
            }
        },
        ud = [6, 7, 9, 10, 11];
    var wd = class extends yb {
        constructor(a) {
            super();
            Ab(this, a, null)
        }
    };
    const xd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var yd = class {
            constructor(a, b) {
                this.g = a;
                this.j = b
            }
        },
        zd = class {
            constructor(a, b) {
                this.url = a;
                this.Ib = !!b;
                this.depth = null
            }
        };

    function Ad(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Bd(a, b, c, d, e) {
        const f = [];
        oc(a, function(g, h) {
            (g = Cd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Cd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Cd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Bd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Dd(a) {
        let b = 1;
        for (const c in a.j) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }

    function Ed(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = Dd(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.j[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let k = Bd(h[l], a.l, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        b += k;
                        e = a.l;
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
    class Fd {
        constructor() {
            this.l = "&";
            this.j = {};
            this.m = 0;
            this.g = []
        }
    };

    function Gd(a, b, c, d, e, f) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let g;
            c instanceof Fd ? g = c : (g = new Fd, oc(c, (l, k) => {
                var n = g,
                    p = n.m++;
                l = Ad(k, l);
                n.g.push(p);
                n.j[p] = l
            }));
            const h = Ed(g, a.j, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? Gc(h, f) : Gc(h))
        } catch (g) {}
    }
    class Hd {
        constructor() {
            this.j = "http:" === Pb.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        }
    };
    let Id = null;
    var Jd = () => {
            const a = m.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        Kd = () => {
            const a = m.performance;
            return a && a.now ? a.now() : null
        };
    class Ld {
        constructor(a, b) {
            var c = Kd() || Jd();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const Md = m.performance,
        Nd = !!(Md && Md.mark && Md.measure && Md.clearMarks),
        Od = Ca(() => {
            var a;
            if (a = Nd) {
                var b;
                if (null === Id) {
                    Id = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (Id = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Id;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Pd(a) {
        a && Md && Od() && (Md.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Md.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Qd {
        constructor() {
            var a = Rd;
            this.events = [];
            this.j = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Od() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Ld(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Md && Od() && Md.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Kd() || Jd()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Md && Od() && Md.mark(b);
                !this.g || 2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function Sd(a) {
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

    function Td(a, b, c, d) {
        let e, f;
        try {
            a.g && a.g.g ? (f = a.g.start(b.toString(), 3), e = c(), a.g.end(f)) : e = c()
        } catch (g) {
            c = !0;
            try {
                Pd(f), c = a.m(b, new Qb(g, {
                    message: Sd(g)
                }), void 0, d)
            } catch (h) {
                a.rb(217, h)
            }
            if (c) {
                let h, l;
                null == (h = window.console) || null == (l = h.error) || l.call(h, g)
            } else throw g;
        }
        return e
    }

    function L(a, b, c, d, e) {
        return (...f) => Td(a, b, () => c.apply(d, f), e)
    }
    class Ud {
        constructor() {
            var a = Vd;
            this.l = Wd;
            this.Va = null;
            this.m = this.rb;
            this.g = void 0 === a ? null : a;
            this.j = !1
        }
        rb(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const G = new Fd;
                var g = G;
                g.g.push(1);
                g.j[1] = Ad("context", a);
                b.error && b.meta && b.id || (b = new Qb(b, {
                    message: Sd(b)
                }));
                if (b.msg) {
                    g = G;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.j[2] = Ad("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.Va) try {
                    this.Va(b)
                } catch (fa) {}
                if (d) try {
                    d(b)
                } catch (fa) {}
                d = G;
                l = [l];
                d.g.push(3);
                d.j[3] = l;
                d = m;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (lc(k)) {
                        var n = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else n = b, b = null;
                    l.push(new zd(n || ""));
                    try {
                        d = k.parent
                    } catch (fa) {
                        d = null
                    }
                } while (d && k != d);
                for (let fa = 0, ib = l.length - 1; fa <= ib; ++fa) l[fa].depth = ib - fa;
                k = m;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (n = 1; n < l.length; ++n) {
                        var p = l[n];
                        p.url || (p.url = k.location.ancestorOrigins[n - 1] || "", p.Ib = !0)
                    }
                var u = l;
                let ha = new zd(m.location.href, !1);
                k = null;
                const U = u.length - 1;
                for (p = U; 0 <= p; --p) {
                    var H = u[p];
                    !k && xd.test(H.url) && (k = H);
                    if (H.url &&
                        !H.Ib) {
                        ha = H;
                        break
                    }
                }
                H = null;
                const nc = u.length && u[U].url;
                0 != ha.depth && nc && (H = u[U]);
                f = new yd(ha, H);
                if (f.j) {
                    u = G;
                    var C = f.j.url || "";
                    u.g.push(4);
                    u.j[4] = Ad("top", C)
                }
                var v = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var A = f.g.url.match(kc),
                        W = A[1],
                        D = A[3],
                        w = A[4];
                    C = "";
                    W && (C += W + ":");
                    D && (C += "//", C += D, w && (C += ":" + w));
                    var x = C
                } else x = "";
                W = G;
                v = [v, {
                    url: x
                }];
                W.g.push(5);
                W.j[5] = v;
                Gd(this.l, e, G, this.j, c)
            } catch (G) {
                try {
                    Gd(this.l, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Sd(G),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (ha) {}
            }
            return !0
        }
    };
    class Xd extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, Xd) : this.stack = Error().stack || ""
        }
    };
    let Wd, Yd;
    const Rd = hd(),
        Vd = new Qd;
    var Zd = () => {
        if (!Rd.google_measure_js_timing) {
            var a = Vd;
            a.g = !1;
            a.events != a.j.google_js_reporting_queue && (Od() && qa(a.events, Pd), a.events.length = 0)
        }
    };
    Wd = new Hd;
    "number" !== typeof Rd.google_srt && (Rd.google_srt = Math.random());
    var $d = Wd,
        ae = Rd.google_srt;
    0 <= ae && 1 >= ae && ($d.g = ae);
    Yd = new Ud;
    Yd.Va = () => {};
    Yd.j = !0;
    "complete" == Rd.document.readyState ? Zd() : Vd.g && z(Rd, "load", () => {
        Zd()
    });
    var be = (a, b, c) => Td(Yd, a, b, c),
        ce = (a, b) => L(Yd, a, b, void 0, void 0);
    var de = (a, b, c = null) => {
            const d = f => {
                let g;
                try {
                    g = JSON.parse(f.data)
                } catch (h) {
                    return
                }!g || "sth" !== g.googMsgType || c && /[:|%3A]javascript\(/i.test(f.data) && !c(g, f) || b(g, f)
            };
            z(a, "message", d);
            let e = !1;
            return () => {
                let f = !1;
                e || (e = !0, f = B(a, "message", d));
                return f
            }
        },
        ee = /^(true|false)$/i,
        fe = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && fe(a[f], b, c, d, --e)
        };

    function M(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new ge) : a.google_reactive_ads_global_state = new he;
        return a.google_reactive_ads_global_state
    }
    class he {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new ge
        }
    }
    var ge = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var ie = 728 * 1.38,
        je = a => a.innerHeight >= a.innerWidth,
        ke = a => {
            const b = N(a).clientWidth;
            a = a.innerWidth;
            return b && a ? b / a : 0
        },
        N = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        le = (a, b) => {
            const c = N(a);
            return b ? c.scrollHeight == N(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        O = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        me = a => void 0 === a.pageXOffset ? (a.document.documentElement ||
            a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        ne = a => ({
            name: a,
            hd: {
                predicate: ee,
                nullOnInvalid: !0
            }
        }),
        oe = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e = d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        pe = a => {
            const b = {
                bottom: "auto",
                clear: "none",
                display: "inline",
                "float": "none",
                height: "auto",
                left: "auto",
                margin: 0,
                "margin-bottom": 0,
                "margin-left": 0,
                "margin-right": "0",
                "margin-top": 0,
                "max-height": "none",
                "max-width": "none",
                opacity: 1,
                overflow: "visible",
                padding: 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0,
                "padding-top": 0,
                position: "static",
                right: "auto",
                top: "auto",
                "vertical-align": "baseline",
                visibility: "visible",
                width: "auto",
                "z-index": "auto"
            };
            qa(Object.keys(b), c => {
                var d = a.style[ab(c)];
                ("undefined" !== typeof d ? d : a.style[Rc(a, c)]) || K(a, c, b[c])
            });
            zc(a)
        };

    function qe(a) {
        a && "function" == typeof a.Gb && a.Gb()
    };

    function re() {
        this.H = this.H;
        this.J = this.J
    }
    re.prototype.H = !1;
    re.prototype.Gb = function() {
        this.H || (this.H = !0, this.sa())
    };

    function se(a, b) {
        te(a, ma(qe, b))
    }

    function te(a, b) {
        a.H ? b() : (a.J || (a.J = []), a.J.push(b))
    }
    re.prototype.sa = function() {
        if (this.J)
            for (; this.J.length;) this.J.shift()()
    };

    function ue(a, b, c) {
        try {
            if (!Dc(c.origin)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Qa[d]) && Td(a.B, 168, () => {
            e.call(a, b, c)
        }, f => {
            f.msg_type = d
        })
    }
    class ve extends re {
        constructor(a, b) {
            var c = Wd;
            super();
            this.g = a;
            this.B = b;
            this.Da = c;
            this.Qa = {};
            this.xc = L(this.B, 168, (d, e) => void ue(this, d, e));
            this.Qb = L(this.B, 169, (d, e) => {
                Gd(this.Da, "ras::xsf", {
                    c: e.data.substring(0, 500),
                    u: this.g.location.href.substring(0, 500)
                }, !0, .1);
                return !0
            });
            this.la = [];
            this.va(this.Qa);
            this.la.push(de(this.g, this.xc, this.Qb))
        }
        sa() {
            for (const a of this.la) a();
            this.la.length = 0;
            super.sa()
        }
    };
    class we extends ve {
        constructor(a) {
            super(a, Yd);
            this.g = a
        }
    };
    class xe {
        constructor(a) {
            this.methodName = a
        }
    }
    var ye = new xe(15),
        ze = new xe(3),
        Ae = new xe(5),
        Be = new xe(6),
        Ce = new xe(7),
        De = new xe(8),
        Ee = (a, b, c) => b[a.methodName] || c || (() => {});

    function Fe(a, b) {
        a.g = () => Ee(ze, b, () => [])(1)
    }
    class Ge {
        constructor() {
            this.g = () => []
        }
    }
    ca(Ge);
    var P = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        He = class {
            constructor(a) {
                this.g = a;
                this.defaultValue = 0
            }
        };
    var Ie = new P(313),
        Je = new P(243),
        Ke = new P(1064),
        Le = new P(1002),
        Me = new P(233),
        Ne = new P(232),
        Oe = new He(1056),
        Pe = new He(1057),
        Qe = new He(1072),
        Re = new P(227),
        Se = new P(310, !0),
        Te = new P(282),
        Ue = new P(251),
        Ve = new He(36),
        We = new P(1944),
        Xe = new P(1903),
        Ye = new P(1940),
        Ze = new P(1946),
        $e = new class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        }(9, ["facebook[.]com", "whatsapp[.]com", "youtube[.]com", "google[.]com", "/ads?/"]);
    var af = class {
        constructor() {
            const a = {};
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.v = (b, c) => null != a[b] ? a[b] : c;
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.j = () => {}
        }
    };
    ca(af);
    var Q = a => af.S().l(a.g, a.defaultValue);
    class bf {}
    ca(bf);
    var df = (a = m.ggeac || (m.ggeac = {})) => {
            Fe(Ge.S(), a);
            cf(a);
            bf.S();
            af.S().j()
        },
        cf = a => {
            const b = af.S();
            b.l = (c, d) => Ee(Ae, a, () => !1)(c, d, 1);
            b.g = (c, d) => Ee(Be, a, () => 0)(c, d, 1);
            b.v = (c, d) => Ee(Ce, a, () => "")(c, d, 1);
            b.m = (c, d) => Ee(De, a, () => [])(c, d, 1);
            b.j = () => {
                Ee(ye, a)(1)
            }
        };
    class ef {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function ff(a, b) {
        a.g.forEach((c, d) => void b(c, d, a))
    }

    function R(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new gf(d)
    }

    function hf(a, b) {
        return new gf(a.g.slice(0).sort(b))
    }

    function jf(a, b = 1) {
        a = a.g.slice(0);
        const c = new ef(b);
        ya(a, () => c.next());
        return new gf(a)
    }
    const gf = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        filter(a) {
            return new gf(ra(this.g, a))
        }
        apply(a) {
            return new gf(a(this.g.slice(0)))
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new gf(b)
        }
    };
    class kf {
        constructor(a, {
            Tb: b,
            Ic: c,
            Uc: d,
            vc: e
        }) {
            this.v = a;
            this.j = c;
            this.m = new gf(b || []);
            this.g = e;
            this.l = d
        }
    };

    function lf(a, b) {
        return void 0 !== a.g[mf(b)]
    }

    function nf(a) {
        var b = [],
            c;
        for (c in a.g) void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const S = class {
        constructor() {
            this.g = {};
            this.j = {}
        }
        set(a, b) {
            const c = mf(a);
            this.g[c] = b;
            this.j[c] = a
        }
        get(a, b) {
            a = mf(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        nb() {
            return nf(this).length
        }
    };

    function mf(a) {
        return a instanceof Object ? String(q(a)) : a + ""
    };
    var of = a => {
        var b = a.split("~").filter(c => 0 < c.length);
        a = new S;
        for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
        return a
    }, qf = a => {
        var b = pf(a);
        a = [];
        for (let c of b) b = String(c.Ea), a.push(c.za + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
        return a.join("~")
    };
    const pf = a => {
            const b = [],
                c = a.m;
            c && c.g.length && b.push({
                za: "a",
                Ea: rf(c)
            });
            null != a.j && b.push({
                za: "as",
                Ea: a.j
            });
            null != a.l && b.push({
                za: "i",
                Ea: String(a.l)
            });
            null != a.g && b.push({
                za: "rp",
                Ea: String(a.g)
            });
            b.sort(function(d, e) {
                return d.za.localeCompare(e.za)
            });
            b.unshift({
                za: "t",
                Ea: sf(a.v)
            });
            return b
        },
        sf = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        rf = a => {
            a = a.g.slice(0).map(tf);
            a = JSON.stringify(a); {
                const c = a.length;
                if (0 == c) a = 0;
                else {
                    var b = 305419896;
                    for (let d = 0; d <
                        c; d++) b ^= (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295;
                    a = 0 < b ? b : 4294967296 + b
                }
            }
            return a
        },
        tf = a => {
            const b = {};
            null != y(a, 7) && (b.q = y(a, 7));
            null != y(a, 2) && (b.o = y(a, 2));
            null != y(a, 5) && (b.p = y(a, 5));
            return b
        };
    var uf = (a, b) => {
            const c = a.id;
            if ("DIV" == a.tagName && 0 == c.indexOf("div-gpt-ad")) return !0;
            a = b.googletag;
            if (!a || "function" != typeof a.pubads) return !1;
            try {
                const d = a.pubads().getSlots();
                for (a = 0; a < d.length; a++) {
                    const e = d[a].getSlotElementId();
                    if (c == e) return !0
                }
            } catch (d) {
                Gd(Wd, "ladd_evt", {
                    ok: 0,
                    err: d.toString()
                }, !0, .1, void 0)
            }
            return !1
        },
        vf = (a, b) => {
            a = a.id;
            return !!a && !!a.indexOf && "function" === typeof a.indexOf && 0 === a.indexOf(b)
        };

    function wf(a, b) {
        return a.debugCard && a.debugCard.getAdType() === b ? a.debugCard : null
    };

    function xf(a, b) {
        for (const f of b) {
            b = a;
            var c = b.document;
            var d = f.x,
                e = f.y;
            c.hasOwnProperty("_goog_efp_called_") || (c._goog_efp_called_ = c.elementFromPoint(d, e));
            if (c = c.elementFromPoint(d, e)) {
                if (!(d = yf(c, b))) a: {
                    d = c;c = b.document;
                    for (d = d.offsetParent; d && d != c.body; d = d.offsetParent)
                        if (e = yf(d, b)) {
                            d = e;
                            break a
                        }
                    d = null
                }
                b = d || null
            } else b = null;
            if (b) return b
        }
        return null
    }
    var zf = (a, b, c) => {
        const d = [];
        for (let f = 0; 3 > f; f++)
            for (let g = 0; 3 > g; g++) {
                var e = d;
                e.push.call(e, {
                    x: g / 2 * a,
                    y: b + f / 2 * (c - b)
                })
            }
        return d
    };

    function yf(a) {
        return "fixed" !== Uc(a, "position") ? null : "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= $c(a).width && 1 >= $c(a).height ? null : a
    }
    var Af = a => {
        const b = 812 == a.screen.height && 375 == a.screen.width || 812 == a.screen.width && 375 == a.screen.height || 414 == a.screen.width && 896 == a.screen.height || 896 == a.screen.width && 414 == a.screen.height;
        return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
    };
    var Bf = (a, b) => {
        const c = a && ld(a.location, "google_anchor_debug");
        if (2 === b || c) {
            var d = zf(a.innerWidth, 0, Math.round(a.innerWidth / 320 * 50 + 15));
            if (null != xf(a, d)) {
                var e, f;
                a = {
                    c: "fixed",
                    d: c,
                    p: b,
                    url: null != (f = null == a ? void 0 : null == (e = a.location) ? void 0 : e.href) ? f : ""
                };
                Gd(Wd, "flgr::top", a, !0, void 0, void 0);
                return "bottom"
            }
            return "top"
        }
        if (e = Q(Ke)) {
            e = a.innerWidth;
            f = a.innerHeight;
            const g = Math.round(a.innerWidth / 320 * 50 + 15),
                h = zf(e, f - g, f);
            25 < g && h.push({
                x: e - 25,
                y: f - 25
            });
            e = null != xf(a, h)
        }
        if (e) {
            let g;
            a = {
                c: "fixed",
                d: c,
                p: b,
                url: null !=
                    (g = null == a ? void 0 : null == (d = a.location) ? void 0 : d.href) ? g : ""
            };
            Gd(Wd, "flgr::bottom", a, !0, void 0, void 0);
            return "top"
        }
        return "bottom"
    };
    class Cf {
        constructor() {
            this.promise = new Promise(a => {
                this.g = a
            })
        }
    };

    function Df(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.l = c;
                a.j = !!b.adTest;
                c = b.pubVars;
                ea(c) && (a.A = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.g = {};
                    for (d of b.fillMessage) a.g[d.key] = d.value
                }
                a.v = b.adWidth;
                a.m = b.adHeight;
                ed(a.v) && ed(a.m) || Gd(Wd, "rctnosize", b, !0, void 0, void 0);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.H(b)
    }
    class Ef {
        constructor() {
            this.g = this.A = this.j = this.l = null;
            this.m = this.v = 0
        }
        H() {
            return !0
        }
    };
    class Ff extends Ef {
        H(a) {
            a.hasFillMessage || (this.g = null);
            return !0
        }
    };
    var Gf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Hf = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        If = (a, b) => {
            do {
                const c = mc(a, b);
                if (c && "fixed" == c.position) return !1
            } while (a = a.parentElement);
            return !0
        },
        Jf = a => {
            let b = 0;
            for (let c in Gf) - 1 != a.indexOf(c) && (b |= Gf[c]);
            return b
        },
        Kf = (a, b, c, d, e) => {
            if (a.top != a) return jd(a) ? 3 : 16;
            if (!(488 > N(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = N(a).clientWidth;
            if (!f || (f - c) /
                f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = N(a).clientWidth; c; c = c.parentElement)
                        if ((d = mc(c, a)) && (e = F(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        Mf = (a, b, c, d) => {
            const e = Kf(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || If(c, b) ? Lf(b) ? a = !0 : (b = N(b).clientWidth, a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        Nf = (a, b, c) => {
            a = a.style;
            "rtl" == b ? Q(Ue) ? a.setProperty("margin-right", c, "important") : a.marginRight =
                c : Q(Ue) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
        };
    const Of = (a, b) => {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = mc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    };
    var Pf = (a, b) => {
        for (let c = 0; 100 > c && b.parentElement; ++c) {
            const d = b.parentElement.childNodes;
            for (let e = 0; e < d.length; ++e) {
                const f = d[e];
                if (f != b && Of(a, f)) return
            }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto"
        }
    };
    const Qf = (a, b, c) => {
        a = Hf(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Rf = (a, b) => {
            var c;
            c = (c = b.parentElement) ? (c = mc(c, a)) ? c.direction : "" : "";
            if (c) {
                b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
                b.style.borderSpacing = b.style.padding = "0";
                Nf(b, c, "0px");
                b.style.width = N(a).clientWidth + "px";
                if (0 !== Qf(a, b, c)) {
                    Nf(b, c, "0px");
                    var d = Qf(a, b, c);
                    Nf(b, c, -1 * d + "px");
                    a = Qf(a, b, c);
                    0 !== a && a !== d && Nf(b, c, d / (a - d) * d + "px")
                }
                b.style.zIndex = 30
            }
        },
        Lf = a => Q(Me) || a.location && "#bffwroe2etoq" == a.location.hash;
    var Sf = (a, b) => "relative" === a ? b : ["https://", a, b].join("");
    var Tf = class {
        constructor() {
            const a = new Cf;
            this.promise = a.promise;
            this.resolve = a.g
        }
    };

    function Uf(a = []) {
        const b = Date.now();
        return ra(a, c => 36E5 > b - c)
    }
    var Vf = a => {
        try {
            const b = a.getItem("__lsv__");
            if (!b) return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || ua(c, d => !Number.isInteger(d)) ? (a.removeItem("__lsv__"), []) : c
        } catch (b) {
            return null
        }
    };
    const Wf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        Xf = {
            IMG: " ",
            BR: "\n"
        };
    var Yf = (a, b, c, d) => {
            if (!(a.nodeName in Wf))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Xf) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(Xf[a.nodeName]);
            else
                for (a = a.firstChild; a;) Yf(a, b, c, d), a = a.nextSibling
        },
        Zf = / \xAD /g,
        $f = /\xAD/g,
        ag = /\u200B/g,
        bg = / +/g,
        cg = /^\s*/;
    var dg = (a, b, c) => {
        a.setAttribute("data-adsbygoogle-status", "reserved");
        a.className += " adsbygoogle-noablate";
        if (!c.adsbygoogle) {
            c.adsbygoogle = [];
            var d = c.document,
                e = Sf("pagead2.googlesyndication.com", "/pagead/js/adsbygoogle.js"),
                f = Fa();
            e = f ? f.createScriptURL(e) : e;
            var g = new Ha(e, Ga);
            f = e = d.createElement("script");
            f.src = g instanceof Ha && g.constructor === Ha ? g.g : "type_error:TrustedResourceUrl";
            a: {
                g = (f.ownerDocument && f.ownerDocument.defaultView || m).document;
                if (g.querySelector && (g = g.querySelector("script[nonce]")) &&
                    (g = g.nonce || g.getAttribute("nonce")) && Xa.test(g)) break a;g = ""
            }
            g && f.setAttribute("nonce", g);
            (d = d.getElementsByTagName("script")[0]) && d.parentNode && d.parentNode.insertBefore(e, d)
        }
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    };
    const eg = [1, 2];

    function fg(a, b, c) {
        const d = b.document.createElement("ins");
        d.className = "adsbygoogle";
        b.document.body.appendChild(d);
        const e = c.A || {};
        e.google_ad_client = c.l;
        e.google_ad_width = c.v;
        e.google_ad_height = c.m;
        e.google_reactive_ad_format = a.g;
        c.g && (e.google_reactive_fill_message = c.g);
        c.j && (e.google_adtest = "on");
        dg(d, e, b)
    }
    class gg {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            const c = M(a);
            if (c.wasReactiveAdConfigReceived[this.g]) return !1;
            const d = new Ff;
            if (!Df(d, b)) return !1;
            eg.forEach(e => {
                c.wasReactiveAdConfigReceived[e] = !0
            });
            fg(this, a, d);
            return !0
        }
    };
    class hg {
        constructor(a, b) {
            this.m = a;
            this.j = !1;
            this.v = b;
            this.g = L(this.v, 264, this.l, this)
        }
        start() {
            this.j || (this.j = !0, ig ? jg.call(m, this.g) : this.g(0))
        }
        stop() {
            this.j = !1
        }
        l(a) {
            this.j && (ig || (a = Date.now()), this.m(a), ig ? jg.call(m, this.g) : m.setTimeout(this.g, 17))
        }
    }
    var jg = m.requestAnimationFrame || m.webkitRequestAnimationFrame,
        ig = !!jg && !/'iPhone'/.test(m.navigator.userAgent);

    function kg(a) {
        return a * a * a
    }

    function lg(a) {
        a = 1 - a;
        return 1 - a * a * a
    }

    function mg(a) {
        a.v = !1;
        a.A.start()
    }
    class ng {
        constructor(a, b, c, d) {
            this.j = a;
            this.B = b;
            this.F = c;
            this.progress = 0;
            this.g = null;
            this.v = !1;
            this.l = [];
            this.m = null;
            this.A = new hg(r(this.G, this), d)
        }
        G(a) {
            if (this.v) this.A.stop();
            else {
                null === this.g && (this.g = a);
                this.progress = (a - this.g) / this.F;
                1 <= this.progress && (this.progress = 1);
                a = this.m ? this.m(this.progress) : this.progress;
                this.l = [];
                for (let b = 0; b < this.j.length; b++) this.l.push((this.B[b] - this.j[b]) * a + this.j[b]);
                this.D();
                1 == this.progress && (this.A.stop(), this.H())
            }
        }
        H() {}
        D() {}
        stop() {
            this.v = !0
        }
        reset(a, b,
            c) {
            this.g = null;
            this.j = a;
            this.B = b;
            this.F = c;
            this.progress = 0
        }
    };
    class og extends ng {
        constructor(a, b, c, d, e, f, g, h) {
            super([b], [c], d, f);
            this.I = a;
            this.K = e;
            this.J = g ? g : null;
            this.m = h || null
        }
        D() {
            const a = {};
            a[this.K] = this.l[0] + "px";
            K(this.I, a)
        }
        H() {
            this.J && this.J()
        }
    };

    function pg(a) {
        a.g && B(a.g, a.l, a.m, a.j)
    }
    class qg extends re {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.l = b;
            this.m = c;
            this.j = Rb;
            z(this.g, this.l, this.m, this.j);
            te(this, () => void pg(this))
        }
    }
    class rg {
        constructor() {
            this.reset()
        }
        add(a) {
            const b = Date.now();
            this.g.push({
                time: b,
                coords: a
            });
            for (a = this.j; a < this.g.length; ++a)
                if (100 <= b - this.g[a].time) delete this.g[a];
                else break;
            this.j = a;
            a >= this.g.length && this.reset()
        }
        reset() {
            this.g = [];
            this.j = 0
        }
    }

    function sg(a, b) {
        a.A && tg(a);
        a.A = !0;
        a.l = a.K();
        a.j = ug(b);
        a.g = a.j;
        a.v = new rg;
        a.v.add(a.j);
        a.F = new qg(a.m, "mousemove", r(a.V, a));
        se(a, a.F);
        a.I = new qg(a.m, "touchmove", r(a.V, a));
        se(a, a.I);
        a.D = new qg(a.m, "mouseup", r(a.Z, a));
        se(a, a.D);
        a.G = new qg(a.m, "touchend", r(a.Z, a));
        se(a, a.G)
    }

    function ug(a) {
        a = a.touches && a.touches[0] || a;
        return new E(a.clientX, a.clientY)
    }

    function tg(a) {
        a.A = !1;
        a.B = !1;
        a.l = null;
        a.j = null;
        a.g = null;
        a.v = null;
        a.F && pg(a.F);
        a.I && pg(a.I);
        a.D && pg(a.D);
        a.G && pg(a.G)
    }
    class vg extends re {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.target = b;
            this.M = c || b;
            this.B = this.A = this.N = !1;
            this.v = this.g = this.j = this.l = this.G = this.D = this.I = this.F = null;
            this.ba = new qg(this.M, "mousedown", d => {
                0 == d.button && sg(this, d)
            });
            se(this, this.ba);
            this.la = new qg(this.M, "touchstart", d => sg(this, d));
            se(this, this.la);
            this.aa = new qg(this.M, "click", d => {
                this.N ? this.N = !1 : d.stopPropagation()
            });
            se(this, this.aa)
        }
        O() {
            if (this.l && this.j && this.g) {
                var a = this.l,
                    b = Xb(this.g, this.j);
                var c = new E(a.x + b.x, a.y + b.y);
                a = this.target;
                c instanceof E ? (b = c.x, c = c.y) : (b = c, c = void 0);
                a.style.left = Zc(b, !1);
                a.style.top = Zc(c, !1)
            }
        }
        P() {}
        K() {
            var a = this.target,
                b;
            a: {
                if (Ub && !(gb && rb("9") && !rb("10") && m.SVGElement && a instanceof m.SVGElement) && (b = a.parentElement)) break a;b = a.parentNode;b = ea(b) && 1 == b.nodeType ? b : null
            }
            var c = b;
            b = Xc(a);
            c = Xc(c);
            b = new E(b.x - c.x, b.y - c.y);
            a = cd(a, "margin");
            return Xb(b, new E(a.left, a.top))
        }
        V(a) {
            if (this.A)
                if (a.preventDefault(), this.g = ug(a), this.v.add(this.g), this.B) this.O();
                else {
                    var b = this.j,
                        c = this.g;
                    a = b.x - c.x;
                    b = b.y - c.y;
                    10 <=
                        Math.sqrt(a * a + b * b) && (this.O(), this.B = !0)
                }
        }
        Z(a) {
            this.B ? (a.preventDefault(), this.g = ug(a), this.P()) : this.N = !0;
            tg(this)
        }
    };

    function wg(a, b) {
        a.g.maxZIndexListeners.push(b);
        a = pc(a.g.maxZIndexRestrictions);
        a = a.length ? Math.min.apply(null, a) : null;
        b(a)
    }
    class xg {
        constructor(a) {
            this.g = M(a).floatingAdsStacking
        }
    };

    function yg(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "18");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "12");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "18");
        a.appendChild(b)
    }

    function zg(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "12");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "18");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "18");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "12");
        a.appendChild(b)
    }

    function Ag(a, b) {
        if (!a.A && a.l) {
            var c = parseInt(a.l.style[a.g], 10),
                d = -a.B.height - (b ? 30 : 0),
                e = (c - d) / .1;
            "bottom" == a.g && Af(a.j) && Td(a.F, 405, () => Bg(a, "21px", e, "ease-in"));
            b || Cg(a, !0);
            c === d ? a.v = !b : (a.A = !0, c = new og(a.l, c, d, e, a.g, a.F, () => {
                a.A = !1;
                a.v = !b;
                b || Cg(a, !0);
                b && a.$();
                a.l.setAttribute("data-anchor-status", "dismissed")
            }, kg), a.U(), mg(c))
        }
    }

    function Dg(a, b) {
        pe(b);
        const c = {
            "background-color": "#FAFAFA",
            display: "block",
            position: "relative",
            "z-index": 1,
            height: "5px",
            "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
        };
        "top" == a.g && (c.position = "absolute", c.top = a.B.height + "px", c.width = "100%");
        I(b, c);
        const d = a.j.document.createElement("span");
        Q(Xe) ? d.appendChild(Eg(a)) : Wa(d, Sa("top" == a.g ? Fg('<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>', !0) : Fg('<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>', !1)));
        const e = f => {
            f.target === d && (f.preventDefault && f.preventDefault(), f.stopImmediatePropagation && f.stopImmediatePropagation(), f.stopPropagation && f.stopPropagation())
        };
        z(d, "click", e);
        te(a, () => B(d, "click", e));
        Gg(a, d);
        b.className = "ee";
        b.appendChild(d)
    }

    function Eg(a) {
        let b;
        let c, d;
        switch (a.g) {
            case "top":
                var e = "dropShadowBottom";
                b = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                var f = "0";
                c = "up";
                d = yg;
                break;
            case "bottom":
                e = "dropShadowTop", b = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", f = "25", c = "down", d = zg
        }
        const g = a.j.document,
            h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
        h.style.setProperty("margin", "0 0 0 0px", "important");
        h.style.setProperty("position", "absolute", "important");
        h.style.setProperty(a.g, "0", "important");
        h.style.setProperty("left", "0%", "important");
        h.style.setProperty("display", "block", "important");
        h.style.setProperty("width", "80px", "important");
        h.style.setProperty("height", "30px", "important");
        h.style.setProperty("transform", "none", "important");
        h.style.setProperty("pointer-events", "initial", "important");
        a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
        const l = g.createElementNS("http://www.w3.org/2000/svg", "filter");
        l.setAttribute("id", e);
        l.setAttribute("filterUnits",
            "userSpaceOnUse");
        l.setAttribute("color-interpolation-filters", "sRGB");
        var k = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        k.setAttribute("in", "SourceAlpha");
        k.setAttribute("result", "TransferredAlpha");
        var n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        n.setAttribute("type", "discrete");
        n.setAttribute("tableValues", "0.5");
        k.appendChild(n);
        n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        n.setAttribute("type", "discrete");
        n.setAttribute("tableValues", "0.5");
        k.appendChild(n);
        n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        n.setAttribute("type", "discrete");
        n.setAttribute("tableValues", "0.5");
        k.appendChild(n);
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        k.setAttribute("in", "TransferredAlpha");
        k.setAttribute("stdDeviation", "2");
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        k.setAttribute("dx", "0");
        k.setAttribute("dy", "0");
        k.setAttribute("result", "offsetblur");
        l.appendChild(k);
        k = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        k.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        n = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        n.setAttribute("in", "SourceGraphic");
        k.appendChild(n);
        l.appendChild(k);
        a.appendChild(l);
        h.appendChild(a);
        a = g.createElementNS("http://www.w3.org/2000/svg", "path");
        a.setAttribute("d", b);
        a.setAttribute("stroke", "#FAFAFA");
        a.setAttribute("stroke-width", "1");
        a.setAttribute("fill", "#FAFAFA");
        a.style.setProperty("filter",
            `url(#${e})`);
        h.appendChild(a);
        e = g.createElementNS("http://www.w3.org/2000/svg", "rect");
        e.setAttribute("x", "0");
        e.setAttribute("y", f);
        e.setAttribute("width", "80");
        e.setAttribute("height", "5");
        e.style.setProperty("fill", "#FAFAFA");
        h.appendChild(e);
        f = g.createElementNS("http://www.w3.org/2000/svg", "g");
        f.setAttribute("class", c);
        f.setAttribute("stroke", "#616161");
        f.setAttribute("stroke-width", "2px");
        f.setAttribute("stroke-linecap", "square");
        d(f);
        h.appendChild(f);
        return h
    }

    function Gg(a, b) {
        const c = b.getElementsByTagName("svg")[0];
        I(b, {
            display: "block",
            width: "80px",
            height: "45px",
            [a.g]: "0",
            ["left"]: "0%",
            marginLeft: "0px",
            "pointer-events": "none"
        });
        zc(c)
    }

    function Hg(a) {
        if (!a.A) {
            var b = parseInt(a.l.style[a.g], 10);
            if (b) {
                a.A = !0;
                const c = -b / .1;
                "bottom" == a.g && Af(a.j) && Td(a.F, 404, () => Bg(a, "0px", c, "ease-out"));
                Cg(a, !1);
                b = new og(a.l, b, 0, c, a.g, a.F, () => {
                    a.A = !1;
                    a.v = !1;
                    Ig(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    Cg(a, !1)
                }, lg);
                a.V();
                mg(b)
            } else a.v = !1
        }
    }

    function Fg(a, b) {
        return b ? ` 
<svg style="margin: 0 0 0 ${0}px; position: absolute; top:0; 
${"left"}:${0}%; display: block; width: 80px; 
height: 30px; transform: none;pointer-events: initial" 
xmlns="http://www.w3.org/2000/svg"> 
<defs> 
<filter id="dropShadowBottom" filterUnits="userSpaceOnUse" 
color-interpolation-filters="sRGB"> 
<feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> 
  <feFuncR type="discrete" tableValues="0.5"/> 
  <feFuncG type="discrete" tableValues="0.5"/> 
  <feFuncB type="discrete" tableValues="0.5"/> 
</feComponentTransfer> 
<feGaussianBlur in="TransferredAlpha" stdDeviation="2"/> 
<feOffset dx="0" dy="0" result="offsetblur"/> 
<feMerge> 
  <feMergeNode/> 
  <feMergeNode in="SourceGraphic"/> 
</feMerge> 
</filter> 
</defs> 
<path d="${"M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z"}" 
stroke="${"#FAFAFA"}" stroke-width="1" fill="${"#FAFAFA"}" 
style="filter:url(#dropShadowBottom)"/> 
<rect x="0" y="0" width="80" height="5" style="fill:${"#FAFAFA"}"/> 
<g class="up" stroke="${"#616161"}" stroke-width="2px" 
stroke-linecap="square">${a}</g></svg>` : ` 
 
<svg style="margin: 0 0 0 ${0}px; position: absolute; bottom:0; 
${"left"}:${0}%; display: block; width: 80px; 
height: 30px; transform: none; pointer-events: initial" 
xmlns="http://www.w3.org/2000/svg"> 
<defs> 
<filter id="dropShadowTop" filterUnits="userSpaceOnUse" 
color-interpolation-filters="sRGB"> 
<feComponentTransfer in="SourceAlpha" result="TransferredAlpha"> 
  <feFuncR type="discrete" tableValues="0.5"/> 
  <feFuncG type="discrete" tableValues="0.5"/> 
  <feFuncB type="discrete" tableValues="0.5"/> 
</feComponentTransfer> 
<feGaussianBlur in="TransferredAlpha" stdDeviation="2"/> 
<feOffset dx="0" dy="0" result="offsetblur"/> 
  <feMerge> 
  <feMergeNode/> 
<feMergeNode in="SourceGraphic"/> 
</feMerge> 
</filter> 
</defs> 
<path d="${"M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z"}" 
stroke="${"#FAFAFA"}" stroke-width="1" fill="${"#FAFAFA"}" 
style="filter:url(#dropShadowTop)"/> 
<rect x="0" y="25" width="80" height="5" style="fill:${"#FAFAFA"}"/> 
<g class="down" stroke="${"#616161"}" stroke-width="2px" 
stroke-linecap="square">${a}</g></svg>`
    }

    function Cg(a, b) {
        if (Q(Xe)) {
            const e = a.m.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
            for (var c = e, d; d = c.firstChild;) c.removeChild(d);
            switch (a.g) {
                case "top":
                    (b ? zg : yg)(e);
                    break;
                case "bottom":
                    (b ? yg : zg)(e)
            }
        } else a.m.getElementsByTagName("svg")[0].getElementsByTagName("g")[0].innerHTML = "top" == a.g ? b ? '<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>' : '<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>' : b ? '<line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>' :
            '<line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>'
    }

    function Jg(a, b, c, d) {
        Gd(a.Z, "flgr", {
            i: b,
            dc: a.v ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.G ? "1" : "0",
            expId: a.ba,
            sc: a.P ? "1" : "0",
            off: d,
            vw: N(a.j).clientWidth,
            req: a.M.src,
            tp: a.g,
            h: a.B.height,
            w: a.B.width,
            qemId: a.aa
        }, !0, 1)
    }

    function Bg(a, b, c, d) {
        K(a.M, {
            transition: c / 1E3 + "s",
            "transition-timing-function": d,
            "margin-top": b
        })
    }

    function Ig(a) {
        a.R();
        a.R = () => {}
    }

    function Kg(a, b) {
        if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
        const c = f => {
                f.preventDefault();
                a.A || (a.K = !0, a.v ? Hg(a) : Ag(a, a.G), Jg(a, "c", !a.v, 0))
            },
            d = a.m;
        z(d, "click", c);
        te(a, () => B(d, "click", c));
        K(b, {
            opacity: 1
        });
        var e = a.j.document;
        e && (a.l = b, a.ja && (a.O = new("top" == a.g ? Lg : Mg)(a, e, a.B.height, b, a.m), se(a, a.O)), e = {
            position: "fixed",
            left: "0px"
        }, e[a.g] = -a.B.height - 30 + "px", K(b, e), I(b, {
            overflow: "visible",
            background: "#FAFAFA"
        }), wg(a.la, f => {
            const g = null == a.T ? 2147483647 : a.T;
            K(b, {
                zIndex: null ==
                    f ? g : Math.min(f, g)
            })
        }), Hg(a))
    }
    class Ng extends re {
        constructor(a, b, c, d, e, f, g, h, l, k, n) {
            super();
            this.D = a;
            this.j = b;
            this.M = c;
            this.B = d;
            this.$ = f || (() => {});
            this.R = g || (() => {});
            this.F = h;
            this.Z = l;
            this.U = k;
            this.V = n;
            te(this, () => Ag(this, !0));
            this.m = b.document.createElement("ins");
            te(this, () => this.m = null);
            this.v = this.A = !1;
            this.I = 0;
            this.g = e;
            this.K = !1;
            this.l = this.O = null;
            this.N = b.innerHeight;
            this.P = "true" === this.D.scroll_detached;
            this.G = "true" === this.D.dismissable;
            this.ja = "true" === this.D.draggable || "top" != this.g;
            this.ba = this.D.expId || "";
            this.aa =
                this.D.qemId || "";
            a = parseInt(this.D.z_index_override, 10);
            this.T = isNaN(a) ? null : a;
            this.la = new xg(b);
            !this.G && m.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(() => {
                const p = this.j.innerHeight;
                if (2 > Math.abs(p - 460) || 2 > Math.abs(p - 529)) p < this.N && 2 > Math.abs(O(this.j) - this.I - 68) && (this.K = !0, this.v && Hg(this)), this.N = p
            }, 300);
            Dg(this, this.m)
        }
    }
    class Og extends vg {
        constructor(a, b, c, d, e) {
            super(b, d, e);
            this.$ = a;
            this.U = c
        }
        P() {
            var a = this.$;
            if (!a.A) {
                const b = parseInt(a.l.style[a.g], 10);
                b >= -(a.B.height / 2) ? (Hg(a), Jg(a, "d", !1, b)) : (Ag(a, a.G), Jg(a, "d", !0, b))
            }
        }
        O() {
            if (null !== this.l && null !== this.j && null !== this.g) {
                var a = this.T(this.l.y, Xb(this.g, this.j).y);
                0 < a && (a = 0);
                a < -this.U && (a = -this.U);
                var b = {};
                b[this.R()] = a + "px";
                K(this.target, b)
            }
        }
    }
    class Lg extends Og {
        K() {
            return new E(0, parseInt(this.target.style.top, 10))
        }
        T(a, b) {
            return b - a
        }
        R() {
            return "top"
        }
    }
    class Mg extends Og {
        K() {
            return new E(0, parseInt(this.target.style.bottom, 10))
        }
        T(a, b) {
            return a - b
        }
        R() {
            return "bottom"
        }
    };

    function Pg(a, b, c, d) {
        if (!a.K) {
            a.K = [];
            for (var e = a.l.parentElement; e;) {
                a.K.push(e);
                if (a.P(e)) break;
                e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
            }
        }
        e = a.K.slice();
        !c && a.P(e[e.length - 1]) && e.pop();
        let f;
        if (d)
            for (c = e.length - 1; 0 <= c; --c)(f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)(f = e[c]) && b.call(a, f, c, e)
    }
    class Qg extends re {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.g = b;
            this.K = null;
            te(this, () => this.K = null);
            this.j = c
        }
        P(a) {
            return this.j === a
        }
    };

    function Rg(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };

    function Sg(a, b, c) {
        null !== b && null !== sc(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== sc(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    };

    function Tg(a) {
        Ug(a);
        const b = a.g.innerWidth;
        a = $c(a.l).height || +a.l.height || 0;
        return new Yb(b, a)
    }

    function Vg(a) {
        if (a.R) {
            var b = a.j;
            b && (b.style.display = "none");
            Wg(a);
            a.R = !1
        }
    }

    function Xg(a) {
        const b = a.g;
        B(b, "orientationchange", a.ua);
        B(b, "resize", a.Da);
        B(b, "scroll", a.Ka);
        B(b, "touchcancel", a.La);
        B(b, "touchend", a.Na);
        B(b, "touchmove", a.Oa);
        B(b, "touchstart", a.Pa)
    }

    function Yg(a) {
        const b = a.g;
        z(b, "orientationchange", a.ua);
        z(b, "resize", a.Da);
        z(b, "scroll", a.Ka);
        z(b, "touchcancel", a.La);
        z(b, "touchend", a.Na);
        z(b, "touchmove", a.Oa);
        z(b, "touchstart", a.Pa);
        te(a, () => Xg(a))
    }

    function Zg(a, b) {
        const c = parseInt(b[$g.name], 10),
            d = 0 < c ? c : null;
        b = parseInt(b[ah.name], 10);
        const e = 0 < b ? b : null;
        null != d && (a.B.height = d);
        null != e && (a.B.width = e);
        Pg(a, f => {
            Sg(f, e, d)
        }, !1, !0);
        Sg(a.l, e, d)
    }

    function bh(a, b) {
        b = new Ng(b, a.g, a.l, a.B, a.v, () => {
            if (!a.ba) {
                a.ba = !0;
                Xg(a);
                var c = a.j;
                c && c.parentNode && c.parentNode.removeChild(c);
                Wg(a);
                c && (c.style.display = "none")
            }
        }, () => void ch(a), a.A, a.Ya, () => {}, () => {});
        se(a, b);
        return b
    }

    function ch(a) {
        a.Sa && !a.Ia && (a.Ia = !0, Td(a.A, 257, () => {
            const b = {
                    msg_type: "manual-send-view"
                },
                c = a.l.contentWindow;
            c && c.postMessage(a.g.JSON.stringify(b), "*")
        }))
    }

    function Wg(a) {
        a.T = O(a.g);
        let b;
        a.g.document.body && (b = cd(a.g.document.body, "padding"), dh(a.g.document.body, a.fb));
        "top" == a.v && b && 0 < b.top && a.g.scrollTo(0, a.T - b.top)
    }

    function eh(a) {
        if (!a.la()) return !1;
        if (!a.D && a.V) switch (a.v) {
            case "bottom":
                return a.I >= a.xb || a.va;
            case "top":
                return a.I > a.N.height + 30 - 5
        }
        return .05 > Math.abs(ke(a.g) - 1)
    }

    function fh(a) {
        const b = a.j;
        if (b && a.l.parentElement) {
            Yc(b, a.N);
            var c = a.g.innerWidth;
            N(a.g).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
            gh(a)
        }
    }

    function hh(a) {
        const b = a.j;
        if (b) {
            var c = a.m,
                d = c.j,
                e = O(d);
            10 > Math.abs(e - c.I) || (d = e + 10 + N(d).clientHeight > le(d), d = 10 > e || d, c.P || c.K || c.A || (c.v || d ? c.v && d && Hg(c) : Ag(c, !1)), c.I = e);
            c = a.m;
            e = Q(We) ? parseInt(a.g.getComputedStyle(a.l)["margin-left"], 0) : 0;
            K(c.m.getElementsByTagName("svg")[0], {
                left: e + "px"
            });
            a.R || (a.g.document.body && (c = a.g.document.body, Ug(a), e = cd(a.g.document.body, "padding"), "bottom" == a.v && (e.bottom += a.N.height + 25), dh(c, e)), b.style.display = "block", a.R = !0)
        }
    }

    function ih(a) {
        a.Ja = !0;
        if (!a.D && eh(a) && (a.Z || !a.aa)) {
            var b = a.j;
            b && (fh(a), Pg(a, c => {
                pe(c)
            }, !0), Kg(a.m, b), hh(a), a.D = !0, (a = a.l.contentWindow) && fe(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    }

    function dh(a, b) {
        a.style.paddingTop = b.top + "px";
        a.style.paddingRight = b.right + "px";
        a.style.paddingBottom = b.bottom + "px";
        a.style.paddingLeft = b.left + "px"
    }

    function gh(a) {
        Pg(a, b => {
            Yc(b, a.B);
            b.style.width = "100%"
        }, !1, !0);
        a.l.style.display = "block";
        a.l.style.margin = "0 auto";
        if (a.Ra) {
            const b = a.j;
            xc(b, c => {
                zc(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
                if ("svg" === c.nodeName) return !1
            })
        }
    }

    function Ug(a) {
        if ("bottom" !== a.v && "top" !== a.v) throw Error("Unexpected position: " + a.v);
    }

    function jh(a) {
        !a.O || a.ba || 2 <= a.G && a.M || !eh(a) ? Vg(a) : (ih(a), hh(a))
    }

    function kh(a, b) {
        if ("top" == a.v && a.O && a.m && a.D && 0 > b) {
            const c = a.N.height + 30 - 5;
            a.U < c && (a.U = Math.min(Math.floor(a.U - b), c), a.g.document.body.style.paddingTop = a.U + "px")
        }
    }
    class lh extends Qg {
        constructor(a, b, c, d) {
            var e = Wd;
            super(a, b, d);
            this.A = Yd;
            this.Ya = e;
            this.I = this.ja = this.T = 0;
            this.Qa = !1;
            this.U = 0;
            this.ba = !1;
            this.m = null;
            this.M = this.O = !1;
            this.F = null;
            this.fb = cd(b.document.body, "padding");
            this.G = 0;
            this.Ja = this.D = !1;
            this.R = !0;
            this.v = c;
            this.B = Tg(this);
            this.N = null;
            this.V = this.aa = this.Z = this.Ia = this.Ra = this.Sa = !1;
            this.xb = bc(b || window).height / 2;
            this.Fa = bc(b || window).height;
            this.Ga = dc(b);
            this.va = !1;
            Vg(this);
            this.ua = L(this.A, 266, r(this.$a, this));
            this.Da = L(this.A, 267, this.ab,
                this);
            this.Ka = L(this.A, 268, this.gb, this);
            this.La = L(this.A, 269, this.yb, this);
            this.Na = L(this.A, 270, this.zb, this);
            this.Oa = L(this.A, 271, this.Ab, this);
            this.Pa = L(this.A, 272, this.Bb, this);
            this.oa = L(this.A, 273, this.$, this);
            z(a, "load", this.oa);
            te(this, () => B(a, "load", this.oa))
        }
        $a() {
            jh(this)
        }
        ab() {
            jh(this)
        }
        gb() {
            if (this.D && this.j && this.m) {
                var a = this.m;
                a.I = O(a.j)
            }
            a = O(this.g);
            const b = a - this.T;
            kh(this, b);
            this.V && (0 < b && (this.I += b), this.va = this.Ga - a <= this.Fa, this.T = a);
            jh(this)
        }
        yb() {
            this.F = "touchcancel";
            m.setTimeout(L(this.A,
                274, () => {
                    "touchcancel" === this.F && (this.G = 0, this.M = !1, jh(this))
                }), 1E3)
        }
        zb(a) {
            if (a && a.touches) {
                this.F = "touchend";
                var b = a.touches.length;
                2 > b ? m.setTimeout(L(this.A, 256, () => {
                    "touchend" === this.F && (this.G = b, this.M = !1, jh(this))
                }), 1E3) : (this.G = b, jh(this));
                !this.D || .05 > Math.abs(ke(this.g) - 1) || Ag(this.m, !0)
            }
        }
        Ab(a) {
            if (a && a.touches) {
                this.F = "touchmove";
                this.G = a.touches.length;
                this.M = !0;
                jh(this);
                if (!this.Qa && a.touches && 0 != a.touches.length && a.touches[0]) {
                    a = a.touches[0].pageY;
                    var b = a - this.ja;
                    this.ja = a;
                    a = b
                } else a =
                    0;
                0 < a && (this.I += a);
                kh(this, a)
            }
        }
        Bb(a) {
            a && a.touches && a.touches[0] && (this.F = "touchstart", this.G = a.touches.length, this.M = !1, jh(this), this.ja = a.touches[0].pageY, this.Qa = (a = a.target) && "top" == this.v && this.O && this.m && this.m.m && 1 === a.nodeType ? gc(this.m.m, a) : !1)
        }
        $() {
            if (this.Z) return !1;
            this.Z = !0;
            B(this.l, "load", this.oa);
            if (this.aa && !this.Ja) return !1;
            jh(this);
            return !0
        }
        la() {
            return je(this.g)
        }
    }
    var ah = ne("wd"),
        $g = ne("ht"),
        mh = ne("use_manual_view"),
        nh = ne("use_important"),
        oh = ne("af_l"),
        ph = ne("wait_for_scroll"),
        qh = {
            ui: "gr",
            gvar: "ar",
            scroll_detached: "true",
            dismissable: "false"
        };

    function rh(a) {
        return a.classList ? a.classList.contains("adsbygoogle") : va(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
    };
    class sh extends lh {
        P(a) {
            return rh(a)
        }
        $() {
            if (!super.$()) return !1;
            if (md(2, this.g.location) || md(3, this.g.location)) {
                var a = M(this.g).tagSpecificState[1] || null;
                a && (a = "top" == this.v ? wf(a, 3) : wf(a, 2)) && a.displayAdLoadedContent(!this.V)
            }
            return !0
        }
        la() {
            var a = this.B.width;
            if (0 < af.S().g(Oe.g, Oe.defaultValue) && a > ie) {
                var b = this.g;
                a = this.B.width;
                var c;
                if (c = b.innerWidth >= a) b = b.innerHeight, a = 0 < af.S().g(Oe.g, Oe.defaultValue) && a > ie, c = b >= (a ? af.S().g(Pe.g, Pe.defaultValue) : 0);
                a = c
            } else a = super.la();
            return a
        }
    };

    function th(a, b) {
        if (!a.j) {
            a.j = !0;
            var c = a.l;
            const e = c.j;
            if (e && !c.m) {
                for (var d in qh) !qh.hasOwnProperty(d) || d in b || (b[d] = qh[d]);
                c.Sa = "true" === b[mh.name] || "top" === c.v || !!M(c.g).wasReactiveAdConfigReceived[2];
                c.Ra = "true" === b[nh.name];
                if (d = b[oh.name]) c.aa = "true" === d;
                c.V = "true" === b[ph.name] || "top" == c.v;
                Zg(c, b);
                c.m = bh(c, b);
                b = c.B.height + 5;
                "bottom" == c.v && Af(c.g) && (b += 20);
                c.N = new Yb(c.B.width, b);
                c.va = c.Fa >= c.Ga;
                b = c.j;
                d = c.m && c.m.m;
                b && d && ("top" == c.v ? b.appendChild(d) : b.insertBefore(d, b.firstChild));
                Yg(c);
                c.O = !0;
                e.setAttribute("data-anchor-status", "ready-to-display")
            }
            ih(a.l)
        }
    }
    class uh extends we {
        constructor(a, b) {
            super(a);
            this.l = b;
            this.j = this.m = !1
        }
        va(a) {
            a.fill = b => {
                this.j || th(this, oe(b))
            };
            a.dismiss = () => {
                if (!this.m) {
                    this.m = !0;
                    var b = this.l;
                    b.m && Ag(b.m, !0)
                }
            }
        }
    };
    var wh = class extends yb {
            constructor(a) {
                super();
                Ab(this, a, vh)
            }
        },
        vh = [1, 2, 5, 7];
    var xh = class extends yb {
        constructor(a) {
            super();
            Ab(this, a, null)
        }
    };

    function yh(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function zh(a) {
        a = sa(a, b => new J(b.top, b.right, b.bottom, b.left));
        a = Ah(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Ah(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return ta(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Fc(a[0]))
    };

    function Bh(a, b) {
        var c = N(a).clientWidth;
        var d = N(a).clientHeight;
        if ("number" !== typeof c || "number" !== typeof d) throw Error("No VP width and/or height.");
        c = new Yb(c, d);
        d = me(a);
        a = O(a);
        a = Ch(a, c.width + d, c.height + a, d);
        return (yh(b, a) ? new J(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left)) : null) || Ch(0, 0, 0, 0)
    }

    function Dh(a, b) {
        const c = me(b),
            d = O(b);
        if (a.getBoundingClientRect) return a = a.getBoundingClientRect(), Eh(a) ? Ch(a.top + d, a.right + c, a.bottom + d, a.left + c) : Ch(0, 0, 0, 0);
        b = b.document.createRange();
        b.selectNodeContents(a);
        return b.collapsed ? Ch(0, 0, 0, 0) : b.getBoundingClientRect ? (a = b.getBoundingClientRect(), Eh(a) ? Ch(a.top + d, a.right + c, a.bottom + d, a.left + c) : Ch(0, 0, 0, 0)) : Ch(0, 0, 0, 0)
    }

    function Eh(a) {
        return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left)
    }
    const Ch = (a, b, c, d) => new J(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d));

    function Fh(a, b) {
        Gh(a).forEach(b, void 0)
    }

    function Gh(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };
    const T = class {
        constructor(a) {
            this.g = new S;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return lf(this.g, a)
        }
    };
    class Hh {
        constructor(a, b) {
            this.g = a[m.Symbol.iterator]();
            this.j = b;
            this.l = 0
        }[Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.g.next();
            return {
                value: a.done ? void 0 : this.j.call(void 0, a.value, this.l++),
                done: a.done
            }
        }
    }

    function Ih(a, b) {
        return new Hh(a, b)
    };
    var Jh = "StopIteration" in m ? m.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Kh() {}
    Kh.prototype.next = function() {
        throw Jh;
    };
    Kh.prototype.ta = function() {
        return this
    };

    function Lh(a) {
        if (a instanceof Kh) return a;
        if ("function" == typeof a.ta) return a.ta(!1);
        if (da(a)) {
            var b = 0,
                c = new Kh;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Jh;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Mh(a) {
        try {
            return Lh(a).next()
        } catch (b) {
            if (b != Jh) throw b;
            return null
        }
    };

    function Nh(a) {
        if (a instanceof Oh || a instanceof Ph || a instanceof Qh) return a;
        if ("function" == typeof a.next) return new Oh(() => Rh(a));
        if ("function" == typeof a[Symbol.iterator]) return new Oh(() => a[Symbol.iterator]());
        if ("function" == typeof a.ta) return new Oh(() => Rh(a.ta()));
        throw Error("Not an iterator or iterable.");
    }
    const Rh = a => {
        if (!(a instanceof Kh)) return a;
        let b = !1;
        return {
            next() {
                let c;
                for (; !b;) try {
                    c = a.next();
                    break
                } catch (d) {
                    if (d !== Jh) throw d;
                    b = !0
                }
                return {
                    value: c,
                    done: b
                }
            }
        }
    };
    class Oh {
        constructor(a) {
            this.g = a
        }
        ta() {
            return new Ph(this.g())
        }[Symbol.iterator]() {
            return new Qh(this.g())
        }
        j() {
            return new Qh(this.g())
        }
    }
    class Ph extends Kh {
        constructor(a) {
            super();
            this.g = a
        }
        next() {
            const a = this.g.next();
            if (a.done) throw Jh;
            return a.value
        }[Symbol.iterator]() {
            return new Qh(this.g)
        }
        j() {
            return new Qh(this.g)
        }
    }
    class Qh extends Oh {
        constructor(a) {
            super(() => a);
            this.l = a
        }
        next() {
            return this.l.next()
        }
    };

    function Sh(a, b) {
        this.g = {};
        this.fa = [];
        this.j = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Sh)
                for (Th(a), c = a.fa.concat(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    aa = Sh.prototype;
    aa.nb = function() {
        return this.size
    };
    aa.has = function(a) {
        return Object.prototype.hasOwnProperty.call(this.g, a)
    };

    function Th(a) {
        if (a.size != a.fa.length) {
            for (var b = 0, c = 0; b < a.fa.length;) {
                var d = a.fa[b];
                Object.prototype.hasOwnProperty.call(a.g, d) && (a.fa[c++] = d);
                b++
            }
            a.fa.length = c
        }
        if (a.size != a.fa.length) {
            var e = {};
            for (c = b = 0; b < a.fa.length;) d = a.fa[b], Object.prototype.hasOwnProperty.call(e, d) || (a.fa[c++] = d, e[d] = 1), b++;
            a.fa.length = c
        }
    }
    aa.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.g, a) ? this.g[a] : b
    };
    aa.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.g, a) || (this.size += 1, this.fa.push(a), this.j++);
        this.g[a] = b
    };
    aa.keys = function() {
        return Nh(this.ta(!0)).j()
    };
    aa.values = function() {
        return Nh(this.ta(!1)).j()
    };
    aa.entries = function() {
        const a = this;
        return Ih(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    aa.ta = function(a) {
        Th(this);
        var b = 0,
            c = this.j,
            d = this,
            e = new Kh;
        e.next = function() {
            if (c != d.j) throw Error("The map has changed since the iterator was created");
            if (b >= d.fa.length) throw Jh;
            var f = d.fa[b++];
            return a ? f : d.g[f]
        };
        return e
    };

    function Uh(a) {
        return "transparent" == a || "rgba" == a.substring(0, 4) && (a = a.split(","), 4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1
    }

    function Vh() {
        qa(Wh, a => {
            a.D = null;
            a.B = null
        })
    }

    function Xh(a) {
        if (!a.C.ownerDocument) throw Error("Wrapped node should have an owner document.");
        return a.C.ownerDocument
    }

    function Yh(a) {
        a = Xh(a);
        return a.defaultView || a.parentWindow
    }

    function Zh(a) {
        const b = a.l.g(a.l.j);
        return b == a || b != a && gc(b.C, a.C)
    }

    function $h(a) {
        return Gh(a.C.childNodes).map(b => a.l.g(b)).filter(Ba(b => null === b))
    }

    function ai(a) {
        if (!a.g()) return null;
        const b = $h(a.g());
        a = pa(b, a);
        if (-1 == a) return null;
        for (a += 1; a < b.length; ++a)
            if (b[a].m() || b[a].I()) return b[a];
        return null
    }

    function bi(a) {
        const b = ai(a);
        return b ? b : a.g() ? bi(a.g()) : null
    }

    function ci(a, b) {
        b.push(a);
        a = $h(a);
        for (let c = 0; c < a.length; ++c) ci(a[c], b)
    }

    function fi(a) {
        var b = a.j();
        if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
            var c = me(Yh(a));
            a = O(Yh(a));
            c = -c;
            a = -a;
            c instanceof E ? (b.left += c.x, b.right += c.x, b.top += c.y, b.bottom += c.y) : (b.left += c, b.right += c, "number" === typeof a && (b.top += a, b.bottom += a))
        }
        return b
    }

    function V(a, b) {
        if (1 != a.C.nodeType) return null;
        a.v = a.v || Yh(a).getComputedStyle(a.C);
        return a.v ? a.v[b] || a.v.getPropertyValue(b) || "" : ""
    }

    function gi(a, b, c) {
        if (void 0 !== a.H[b]) return a.H[b];
        a.H[b] = hi(a, b, c);
        return a.H[b]
    }

    function ii(a) {
        if (void 0 !== a.G) return a.G;
        var b = V(a, "position");
        if ("fixed" == b || "sticky" == b) b = a;
        else {
            var c = a.g();
            b = c && "BODY" != a.C.tagName ? (c = ii(c)) || "absolute" != b && "relative" != b ? c : a : null
        }
        a.G = b;
        return a.G
    }

    function ji(a, b) {
        const c = ii(a);
        if (c && "relative" != V(c, "position"))
            if (null != b) a: {
                do {
                    const d = a.j();
                    if ((d.right - d.left) * (d.bottom - d.top) > b) {
                        b = !1;
                        break a
                    }
                    if (a == c) break;
                    a = a.g()
                } while (null !== a);b = !0
            }
        else b = !0;
        else b = !1;
        return b
    }

    function hi(a, b, c) {
        const d = V(a, "position");
        a: switch (b) {
            case 0:
                var e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-x") || "scroll" == V(a, "overflow-x");
                break a;
            case 1:
                e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-y") || "scroll" == V(a, "overflow-y");
                break a;
            default:
                throw Error("Unknown pageAxis: " + b);
        }
        switch (d) {
            case "fixed":
                if (e) return a;
                break;
            case "static":
            case "":
            case null:
                if (e && !c) return a;
                if (a.g()) return gi(a.g(), b, c);
                break;
            case "absolute":
            case "relative":
                if (e) return a;
                if (a.g()) return gi(a.g(), b, "absolute" == d);
                break;
            default:
                m.console.error("Unknown position value: " + d)
        }
        return null
    }

    function ki(a) {
        var b = a.C.scrollHeight;
        const c = a.C.clientHeight,
            d = Xh(a).createElement("div");
        d.style.width = "100%";
        d.style.height = Math.max(b, c) + 100 + "px";
        d.style.clear = "both";
        a.C.appendChild(d);
        b = a.C.scrollHeight > a.C.clientHeight && a.C.scrollHeight - b > a.C.clientHeight - c;
        a.C.removeChild(d);
        return b
    }

    function li(a) {
        return null !== a.J ? a.J : "1" != V(a, "opacity") || a.g() && !li(a.g()) ? a.J = !1 : a.J = !0
    }

    function mi(a) {
        a = a.j();
        a = new J(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0));
        return a.left < a.right && a.top < a.bottom
    }

    function ni(a) {
        return null !== a.A ? a.A : a.g() && ni(a.g()) || "0" == V(a, "opacity") || "none" == V(a, "display") || "hidden" == V(a, "visibility") || a.C.tagName && "input" == a.C.tagName.toLowerCase() && a.C.type && "hidden" == a.C.type ? a.A = !0 : a.A = !1
    }

    function oi(a, b) {
        return b(a) ? !0 : a.g() ? oi(a.g(), b) : !1
    }

    function pi(a) {
        return !oi(a, b => "hidden" == V(b, "overflow-y"))
    }

    function qi(a) {
        a = V(a, "position");
        return "absolute" == a || "relative" == a
    }

    function ri(a) {
        return a.m() && (a = parseInt(V(a, "z-index"), 10), !isNaN(a)) ? a : 0
    }

    function si(a, b) {
        return oi(a, c => !!c.C.tagName && c.C.tagName == b)
    }

    function ti(a, b) {
        return oi(a, c => {
            c = c.C;
            return !!c.id && !!c.id.match && !!c.id.match(b)
        })
    }

    function ui(a, b) {
        return oi(a, c => {
            a: {
                c = vi(c);
                for (let d = 0; d < c.length; ++d)
                    if (c[d].match(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        })
    }

    function vi(a) {
        return (a = a.C.className) && "function" === typeof a.split ? Ia(a).split(/\s+/) : []
    }

    function wi(a) {
        return "A" == a.C.tagName ? a.C.getAttribute("href") : (a = a.g()) ? wi(a) : null
    }

    function xi(a) {
        if (1 != a.C.nodeType) {
            var b = a.g();
            return b ? xi(b) : 0
        }
        const c = Xh(a).createTextNode("A");
        a.C.appendChild(c);
        b = a.l.g(c);
        if (!b) throw a.C.removeChild(c), Error("Unable to insert textnode");
        a = b.j();
        b.C.parentNode && b.C.parentNode.removeChild(b.C);
        return a.bottom - a.top
    }

    function yi(a, b) {
        if (b || null == a.F) {
            if (b && !b(a)) return 0;
            let c = 0;
            if (a.I()) c = a.C.textContent.trim().length;
            else {
                const d = $h(a);
                for (let e = 0; e < d.length; e++) c += yi(d[e], b)
            }
            b || (a.F = c);
            return c
        }
        return a.F
    }
    class zi {
        constructor(a, b) {
            this.C = a;
            this.l = b;
            this.A = this.J = this.K = this.sa = null;
            this.H = {};
            this.v = this.B = this.F = null;
            new Sh
        }
        g() {
            return this.C != this.l.j && this.C.parentNode ? this.l.g(this.C.parentNode) : null
        }
        m() {
            return 1 == this.C.nodeType
        }
        I() {
            return 3 == this.C.nodeType
        }
        j() {
            if (!this.D) {
                this.B || (this.B = Dh(this.C, Yh(this)));
                var a = Fc(this.B);
                var b = V(this, "position");
                if ("fixed" == b) a = Bh(Yh(this), a);
                else if (this.g()) {
                    var c = gi(this.g(), 0, "absolute" == b);
                    if (c) {
                        var d = c.j();
                        c = d.left;
                        d = d.right;
                        a = a.left >= d || a.right <= c ?
                            null : Ch(a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c))
                    }
                    a && (b = gi(this.g(), 1, "absolute" == b)) && (c = b.j(), b = c.top, c = c.bottom, a = a.top >= c || a.bottom <= b ? null : Ch(Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left));
                    a = a && ii(this) && "fixed" == V(ii(this), "position") ? Bh(Yh(this), a) : a || new J(0, 0, 0, 0)
                }
                this.D = a
            }
            return Fc(this.D)
        }
        ya() {
            return !mi(this) || ni(this)
        }
        qb() {
            var a = V(this, "background-color");
            if (a = a ? Uh(a) : !0) a = V(this, "background-image"), a = !(a && "none" != a);
            return a
        }
        toString() {
            switch (this.C.nodeType) {
                case 1:
                    const a =
                        this.C;
                    let b = a.tagName;
                    a.id && (b += "#" + a.id);
                    a.className && "function" === typeof a.className.split && (b += "." + a.className.split(/\s+/).join("."));
                    return b;
                case 3:
                    return "TEXT#" + this.C.textContent.substr(0, 10);
                default:
                    return "HtmlNode"
            }
        }
    }

    function Ai(a, b) {
        const c = q(b);
        var d = a.m.get(c);
        if ("boolean" === typeof d) return d;
        d = a.v && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1;
        !d && b.parentNode && b != a.j && (d = Ai(a, b.parentNode));
        a.m.set(c, d);
        return d
    }
    var Bi = class {
            constructor(a, b) {
                this.j = a;
                this.v = b;
                this.m = new S;
                this.l = new S
            }
            g(a) {
                const b = q(a),
                    c = this.l.get(b);
                if (c) return c;
                if (Ai(this, a)) return null;
                a = new zi(a, this);
                this.l.set(b, a);
                return a
            }
        },
        Wh = [];

    function Ci(a) {
        var b = [];
        Fh(a.getElementsByTagName("p"), function(c) {
            100 <= Di(c) && b.push(c)
        });
        return b
    }

    function Di(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Fh(a.childNodes, function(c) {
            b += Di(c)
        });
        return b
    }

    function Ei(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Fi(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }

    function Gi(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.m)
        } catch (g) {}
        if (!c.length) return [];
        b = wa(c);
        b = Fi(a, b);
        "number" === typeof a.j && (c = a.j, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.l) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Ci(b[d]),
                    f = a.l;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Hi = class {
        constructor(a, b, c, d) {
            this.m = a;
            this.j = b;
            this.l = c;
            this.g = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.m,
                occurrenceIndex: this.j,
                paragraphIndex: this.l,
                ignoreMode: this.g
            })
        }
    };

    function Ii(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function Ji(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Ii(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Ki(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Ii(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var Mi = (a, b, c) => {
        var d = Li(b, c);
        if (d.Ma) {
            for (c = b = d.Ma; c = d.W(c);) b = c;
            d = {
                anchor: b,
                position: d.Xa
            }
        } else d = {
            anchor: b,
            position: c
        };
        a["google-ama-order-assurance"] = 0;
        Ji(a, d.anchor, d.position)
    };

    function Li(a, b) {
        const c = e => {
                e = Ni(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Ni(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    Ma: Oi(a.previousSibling, c),
                    W: e => Oi(e.previousSibling, c),
                    Xa: 0
                };
            case 2:
                return {
                    Ma: Oi(a.lastChild, c),
                    W: e => Oi(e.previousSibling, c),
                    Xa: 0
                };
            case 3:
                return {
                    Ma: Oi(a.nextSibling, d),
                    W: e => Oi(e.nextSibling, d),
                    Xa: 3
                };
            case 1:
                return {
                    Ma: Oi(a.firstChild, d),
                    W: e => Oi(e.nextSibling, d),
                    Xa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Ni(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Oi(a, b) {
        return a && b(a) ? a : null
    };
    var Pi = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    var Qi = {
            BODY: {
                Y: [1, 2],
                ha: !1,
                ia: 2,
                ga: 4
            },
            HEADER: {
                Y: [0, 3, 1, 2],
                ha: !1,
                ia: 1,
                ga: 3
            },
            NAV: {
                Y: [0, 3],
                ha: !1,
                ia: 1,
                ga: 3
            },
            H1: {
                Y: [0],
                ha: !1,
                ia: 1,
                ga: 2
            },
            IMG: {
                Y: [0, 3],
                ha: !0,
                ia: 0,
                ga: 1
            },
            DIV: {
                Y: [0, 3, 1, 2],
                ha: !0,
                ia: 0,
                ga: 1
            },
            TABLE: {
                Y: [0, 3],
                ha: !0,
                ia: 0,
                ga: 1
            },
            TD: {
                Y: [1, 2],
                ha: !0,
                ia: 0,
                ga: 1
            },
            ASIDE: {
                Y: [0, 3, 1, 2],
                ha: !0,
                ia: 0,
                ga: 1
            },
            LI: {
                Y: [1, 2],
                ha: !0,
                ia: 0,
                ga: 1
            },
            SECTION: {
                Y: [0, 3, 1, 2],
                ha: !0,
                ia: 0,
                ga: 1
            }
        },
        Ri = a => ({
            Y: a.Y.slice(0),
            ha: a.ha,
            ia: a.ia,
            ga: a.ga
        }),
        Si = (a, b) => {
            const c = Ri(a);
            c.Y = ra(a.Y, d => b[d]);
            return c
        };
    var Ti = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        minWidth() {
            return this.v
        }
        height() {
            return this.m
        }
        g(a) {
            return 300 < a && 300 < this.m ? this.v : Math.min(1200, Math.round(a))
        }
        l(a) {
            return this.g(a) + "x" + this.height()
        }
        j() {}
    };
    var Ui = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = mc(a, b)) && e[c] && d(e[c]) || null
        },
        Vi = a => b => b.minWidth() <= a,
        Yi = (a, b, c, d) => {
            const e = a && Wi(c, b),
                f = Xi(b, d);
            return g => !(e && g.height() >= f)
        },
        Zi = a => b => b.height() <= a,
        Wi = (a, b) => {
            a = Hf(a, b);
            return (a ? a.y : 0) < N(b).clientHeight - 100
        },
        $i = (a, b) => {
            var c = Ui(b, a, "height", F);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = Ui(b, a, "height", F);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && F(b.style.height)) && (c = Math.min(c, d)),
                (d = Ui(b, a, "maxHeight", F)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const Xi = (a, b) => {
        const c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * N(a).clientHeight / 3) : 250
    };

    function aj(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = ab(d.uc);
            a[e] = d.value
        }
    }

    function bj(a, b, c) {
        var d = [];
        if (c = c && c.g()) a.Ha.className = c.join(" ");
        a = a.wa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        d.length && a.setAttribute("data-ad-channel", d.join("+"))
    }

    function cj(a, b) {
        var c = b.kb || !1;
        const d = ic(new $b(a), "DIV"),
            e = d.style;
        e.width = "100%";
        e.height = "auto";
        e.clear = c ? "both" : "none";
        c = d.style;
        c.textAlign = "center";
        b.Wa && aj(c, b.Wa);
        a = ic(new $b(a), "INS");
        c = a.style;
        c.display = "block";
        c.margin = "auto";
        c.backgroundColor = "transparent";
        b.wb && (c.marginTop = b.wb);
        b.jb && (c.marginBottom = b.jb);
        b.Ua && aj(c, b.Ua);
        d.appendChild(a);
        return {
            Ha: d,
            wa: a
        }
    };

    function dj(a, b = !1) {
        if (a.j) return a.j;
        if (b = a.D(b)) Vh(), !a.l && b && (a.l = b.j());
        return b
    }

    function ej(a) {
        return a.G.node || null
    }

    function fj(a) {
        return (a = ej(a)) && a.m() ? Ii(a.C) : !1
    }

    function gj(a) {
        return nf(a.B.g).map(b => {
            switch (b) {
                case 1:
                    return "IN ARTICLE";
                case 2:
                    return "ABOVE FOOTER";
                case 3:
                    return "ABOVE COMMENT";
                case 4:
                    return "PEDESTAL";
                case 5:
                    return "BELOW CONTENT";
                default:
                    return null
            }
        }).filter(b => null != b).join(", ")
    }
    class hj {
        constructor(a) {
            this.G = a.l;
            this.H = a.v;
            this.l = this.j = null;
            this.v = !1;
            this.B = new T(nf(a.g.g))
        }
        g() {
            return this.H
        }
        ob() {
            return this.B
        }
        J() {}
        D() {}
        F() {}
        m() {}
    }
    var ij = class {
        constructor(a, b) {
            this.l = a;
            this.v = b;
            this.g = new T;
            this.m = []
        }
        j() {}
    };

    function jj(a) {
        kj(a, !1);
        const b = a.j;
        Pg(a, c => {
            I(c, lj);
            pe(c)
        }, !0);
        a.l.setAttribute("width", "");
        a.l.setAttribute("height", "");
        K(a.l, lj);
        K(a.l, mj);
        K(b, nj);
        pe(b);
        pe(a.l)
    }

    function kj(a, b) {
        const c = a.j;
        b ? oj(a, c) : (I(c, {
            display: "none"
        }), a.m && I(a.m, {
            display: "none"
        }), a.A && (m.clearInterval(a.A), a.A = 0), pj(a))
    }

    function qj(a, b) {
        var c = a.j;
        if (!b) return !1;
        var d = ej(b);
        if (!d || !d.m()) return !1;
        d = d.C;
        if (!d) return !1;
        a.m = a.g.document.createElement("ins");
        I(a.m, {
            display: "inline-block",
            width: "100%"
        });
        var e = b.g();
        b = a.m;
        e = Pi[e];
        Q(Ie) ? Mi(b, d, e) : Ji(b, d, e);
        a.B();
        I(c, {
            position: "absolute"
        });
        kj(a, !0);
        c = a.m;
        a = a.g;
        "INS" == c.tagName && id.test(c.className) || ("IFRAME" == c.tagName || "INS" == c.tagName) && (vf(c, "google_ads_frame") || vf(c, "aswift_")) || uf(c, a) || "reserved" == c.getAttribute("__lsu_res") || c.setAttribute("__lsu_res", "reserved");
        return !0
    }

    function oj(a, b) {
        I(b, {
            display: "block"
        });
        a.A = m.setInterval(() => a.B, 250)
    }

    function pj(a) {
        null != a.D && (a.v.body.style.overflow = a.D);
        null != a.F && (a.v.documentElement.style.overflow = a.F)
    }

    function rj(a) {
        const b = a.j,
            c = a.g.innerHeight;
        I(b, {
            height: c + "px"
        });
        a.g.scrollTo(0, Wc(a.m).y);
        b && (I(b, {
            top: "0"
        }), a.m && I(a.m, {
            height: c + "px"
        }), I(b, {
            position: "fixed"
        }), a.v.body && "hidden" != a.v.body.style.overflow && (a.D = a.v.body.style.overflow, a.F = a.v.documentElement.style.overflow, a.v.body.style.overflow = "hidden", a.v.documentElement.style.overflow = "hidden"))
    }
    class sj extends Qg {
        constructor(a, b, c) {
            super(a, b, c);
            this.D = null;
            this.A = 0;
            this.F = null;
            this.G = 0;
            this.v = b.document;
            this.m = null;
            this.I = 0;
            jj(this)
        }
        B() {
            if ("hidden" != this.v.body.style.overflow && "fixed" != this.v.body.style.position) {
                var a = this.j;
                const b = this.g.innerHeight;
                if (this.I < b) {
                    const c = {
                        height: b + "px"
                    };
                    I(a, c);
                    this.m && I(this.m, c);
                    this.I = b
                }(a = this.j) && this.m && (this.G = Wc(this.m).y, a.style.top != this.G + "px" && I(a, {
                    top: this.G + "px"
                }))
            }
        }
    }
    var nj = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            display: "none !important",
            zIndex: "2147483646"
        },
        lj = {
            width: "100%",
            height: "100%",
            zIndex: "2147483646"
        },
        mj = {
            left: "0",
            position: "absolute",
            top: "0"
        };

    function tj(a, b) {
        md(4, a.location) && (a = M(a).tagSpecificState[1] || null) && (a = wf(a, 4)) && a.displayAdLoadedContent(b)
    };
    var uj = class {
            constructor(a) {
                this.A = null != a.g ? a.g : !0;
                this.v = null != a.H ? a.H : 0;
                this.m = null != a.v ? a.v : .9;
                this.j = null != a.j ? a.j : 1.05;
                this.minWidth = null != a.B ? a.B : 0;
                this.B = null != a.m ? a.m : 25;
                this.l = null != a.l ? a.l : 0;
                this.J = null != a.A ? a.A : !1;
                this.H = a.J || null;
                this.g = a.D || null
            }
        },
        vj = class {};
    class wj {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            return xj(this.l, a).contains(this.j)
        }
    };

    function xj(a, b) {
        const c = q(b),
            d = a.j.get(c);
        if (d) return d;
        b = a.g(b);
        a.j.set(c, b);
        return b
    }
    class yj {
        constructor() {
            this.j = new S
        }
    };

    function zj(a, b) {
        let c = wi(b);
        if (a.l.g(b) && null !== c) return c;
        b = $h(b);
        if (1 > b.length) return null;
        c = zj(a, b[0]);
        for (let d = 1; d < b.length; ++d)
            if (zj(a, b[d]) != c) return null;
        return c
    }
    class Aj extends yj {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new T(null !== zj(this, a) ? [1] : [])
        }
    };
    class Bj extends yj {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            a: if (3 == a.C.nodeType) var b = this.l.g(a);
                else {
                    b = !1;
                    a = $h(a);
                    for (let c of a) {
                        if ((a = V(c, "display")) && "inline" != a) {
                            b = !1;
                            break a
                        }
                        xj(this, c).contains(0) && (b = !0)
                    }
                }return new T(b ? [0] : [])
        }
    };

    function Cj(a, b) {
        return yi(b, c => !a.l.g(c))
    }
    class Dj extends yj {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.l = b;
            this.v = c
        }
        g(a) {
            if (this.m.g(a) && !this.l.g(a) && !this.v.g(a) && 50 <= Cj(this, a)) {
                var b = xi(a);
                a = a.j();
                b = a.bottom - a.top >= 2 * b || !1
            } else b = !1;
            return new T(b ? [3] : [])
        }
    };

    function Ej(a, b) {
        return a.l.g(b) ? oi(b, function(c) {
            switch (c.C.tagName) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6":
                    return !0
            }
            return !1
        }) || Fj(b) && 5 <= yi(b) ? !0 : (b = b.g()) ? xj(a, b).contains(2) : !1 : !1
    }

    function Fj(a) {
        a = vi(a);
        for (let b of a)
            if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/)) return !0;
        return !1
    }
    class Gj extends yj {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new T(Ej(this, a) ? [2] : [])
        }
    };

    function Hj(a) {
        const b = [];
        qa(a, c => {
            1 == c.C.nodeType && (Ij(c, ":before", b), Ij(c, ":after", b))
        });
        return b
    }

    function Jj(a) {
        a = V(a, "content");
        if (!a || "none" == a || /\(.*\)/.test(a)) return !1;
        /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
        return 0 < a.trim().length
    }
    class Kj extends zi {
        constructor(a, b) {
            super(a.C, a.l);
            this.M = a;
            this.N = b;
            this.v = Yh(a).getComputedStyle(a.C, this.N)
        }
        m() {
            return !1
        }
        I() {
            return !1
        }
        ya() {
            if (!Jj(this) && this.qb()) var a = !0;
            else if (!(a = this.g().ya() || ni(this) || !mi(this))) {
                a = Jj(this);
                const c = V(this, "width");
                var b = V(this, "height");
                b = a && "auto" == b || 0 < parseFloat(b);
                a = !((a && "auto" == c || 0 < parseFloat(c)) && b)
            }
            return a
        }
        g() {
            return this.M
        }
        qb() {
            const a = Uc(this.g().C, "backgroundColor"),
                b = V(this, "background-color");
            return null == b || b == a || Uh(b) || "fixed" != V(this,
                "position")
        }
        j() {
            switch (V(this, "position")) {
                case "absolute":
                    var a = this.g().j();
                    const b = a.top + parseInt(V(this, "top"), 10);
                    a = a.left + parseInt(V(this, "left"), 10);
                    let c = parseInt(V(this, "width"), 10),
                        d = parseInt(V(this, "height"), 10);
                    return new J(b, a + c, b + d, a);
                case "fixed":
                    return new J(0, parseInt(V(this, "width"), 10), parseInt(V(this, "height"), 10), 0);
                default:
                    return this.g().j()
            }
        }
    }
    const Ij = (a, b, c) => {
        if (":before" == b || ":after" == b) {
            var d = new Kj(a, b);
            if (!d.ya()) switch (c.push(d), b) {
                case ":before":
                    a.sa = d;
                    break;
                case ":after":
                    a.K = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
            }
        }
    };
    const Lj = new T("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    class Mj extends yj {
        g(a) {
            var b = a.C,
                c = Xh(a);
            if (3 == b.nodeType) {
                var d = b.data;
                c = -1 != d.indexOf("&") ? Ya(d, c) : d;
                c = /\S/.test(c)
            } else c = !1;
            (c = c || (a instanceof Kj ? Jj(a) : !1)) || (c = (b = b.tagName) && Lj.contains(b.toUpperCase()));
            a = c && !a.ya();
            return new T(a ? [6] : [])
        }
    };

    function Nj(a) {
        a.v || (a.v = new Mj);
        return a.v
    }

    function Oj(a) {
        a.j || (a.j = new Bj(new wj(Nj(a), 6)));
        return a.j
    }

    function Pj(a) {
        a.l || (a.l = new Gj(new wj(Oj(a), 0)));
        return a.l
    }
    class Qj {
        constructor() {
            this.m = this.l = this.g = this.j = this.v = null
        }
    };
    const Rj = class {
        constructor() {
            this.g = new Qj
        }
    };

    function Sj(a, b) {
        a.l.push(b);
        a.j.add(q(b))
    }

    function Tj(a) {
        return a.l.slice(0)
    }
    class Uj {
        constructor(a) {
            this.l = [];
            this.j = new T;
            a && a.forEach(b => Sj(this, b))
        }
        contains(a) {
            return this.j.contains(q(a))
        }
    };
    class Vj {
        constructor(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        }
        X() {
            return this.l
        }
    }
    const Xj = (a, b, c) => {
            b = Wj(a.sa, b, c);
            const d = new Vj(a, 0, b++);
            c.L.push(d);
            for (var e of $h(a)) b = Xj(e, b, c);
            e = new Vj(a, 1, b++);
            c.L.push(e);
            c.map.set(q(a), {
                start: d,
                end: e
            });
            return b = Wj(a.K, b, c)
        },
        Wj = (a, b, c) => {
            if (!a) return b;
            const d = new Vj(a, 0, b++),
                e = new Vj(a, 1, b++);
            c.L.push(d);
            c.L.push(e);
            c.map.set(q(a), {
                start: d,
                end: e
            });
            return b
        };

    function Yj(a) {
        if (a instanceof Kj) return !0;
        if (!a.m()) return !1;
        const b = a.C,
            c = V(a, "position");
        if ("HTML" == b.tagName || "fixed" == c || "auto" != V(a, "z-index") && ("absolute" == c || "relative" == c)) return !0;
        a = V(a, "opacity");
        return "1" != a && "" != a ? !0 : !1
    }

    function Zj(a) {
        const b = a.g.g();
        return b ? ak(a.j, b) : null
    }
    class bk {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }

    function ck(a, b, c) {
        var d = ak(a.g, b);
        a = ak(a.g, c);
        d = dk(d, a);
        if (!d) return 0;
        switch (d.hb) {
            case 0:
                return ri(b) - ri(d.cb.g);
            case 1:
                return ri(d.bb.g) - ri(c);
            case 2:
                return ri(d.bb.g) - ri(d.cb.g);
            default:
                throw Error("Unhandled adjacency.");
        }
    }
    var fk = class {
        constructor() {
            this.g = new ek
        }
    };

    function ak(a, b) {
        const c = q(b);
        var d = a.g.get(c);
        if (d) return d;
        d = b.g();
        b = !d || Yj(b) ? new bk(b, a) : ak(a, d);
        a.g.set(c, b);
        return b
    }
    var ek = class {
        constructor() {
            this.g = new S
        }
    };

    function dk(a, b) {
        if (a == b) return null;
        const c = new S;
        var d = b;
        let e;
        for (; e = Zj(d);) {
            if (a == e) return {
                bb: a,
                hb: 0,
                cb: d
            };
            c.set(q(e), d);
            d = e
        }
        for (; e = Zj(a);) {
            if (e == b) return {
                bb: a,
                hb: 1,
                cb: b
            };
            if (d = c.get(q(e))) return {
                bb: a,
                hb: 2,
                cb: d
            };
            a = e
        }
        throw Error("Contexts not in same DOM.");
    };

    function gk(a, b, c, d = []) {
        a = [].concat(a, d);
        b = new hk(b, c);
        for (let e of a) e.qb() || e.ya() || Sj(b, e);
        return b
    }
    class hk extends Uj {
        constructor(a, b) {
            super();
            this.g = a;
            this.v = b
        }
        m(a) {
            const b = a.j();
            for (let e = 0; e < Tj(this).length; ++e) {
                var c = Tj(this)[e];
                if (!Zh(c)) continue;
                var d = c.j();
                if (!yh(d, b)) continue;
                const f = ck(this.v, c, a);
                !(d = 0 < f) && (d = 0 == f && !(c != a && gc(c.C, a.C))) && (d = a, qi(c) && !qi(d) ? d = !0 : !qi(c) && qi(d) ? d = !1 : (d = this.g.map.get(q(d)), c = this.g.map.get(q(c)), d = d && c && d.end.X() < c.start.X() ? !0 : !1));
                if (d) return !0
            }
            return !1
        }
    };
    class ik {
        constructor(a, b) {
            this.jc = a;
            this.pc = b
        }
    };

    function jk(a, b) {
        let c = 0,
            d = null;
        for (let e = 0; e < Tj(a).length; ++e) {
            const f = a.g.map.get(q(Tj(a)[e]));
            f.end.X() < b && f.end.X() > c && (d = f, c = f.end.X())
        }
        return d
    }
    class kk extends Uj {
        constructor(a) {
            super(void 0);
            this.g = a
        }
    };
    const lk = class extends kk {
        constructor(a, b) {
            super(a);
            this.v = b
        }
        m(a) {
            const b = a.j(),
                c = ji(a);
            for (let d = 0; d < Tj(this).length; ++d) {
                const e = Tj(this)[d];
                if (Zh(e) && (c || !(0 < ck(this.v, a, e))) && yh(Tj(this)[d].j(), b)) return !0
            }
            return !1
        }
    };
    const mk = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.g = c
        }
    };
    const nk = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.j = a;
            this.A = b;
            this.H = c;
            this.v = d;
            this.m = e;
            this.l = f;
            this.g = g;
            this.B = h
        }
    };
    const ok = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.m = b;
            this.l = c;
            this.g = d
        }
    };
    class pk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a) return [9];
            a = a.j();
            a = a.right - a.left;
            return this.j <= a && a <= this.l ? [] : [4]
        }
    };
    const qk = class {
        constructor(a, b) {
            this.g = a;
            this.j = b || null
        }
    };

    function rk(a) {
        if (0 != a.l) throw Error("Already resolved/rejected.");
    }

    function sk(a, b) {
        rk(a);
        a.l = 1;
        a.v = b;
        tk(a.g)
    }
    var vk = class {
        constructor() {
            this.g = new uk(this);
            this.l = 0
        }
        j(a) {
            rk(this);
            this.l = 2;
            this.m = a;
            tk(this.g)
        }
    };

    function tk(a) {
        switch (a.g.l) {
            case 0:
                break;
            case 1:
                a.j && a.j(a.g.v);
                break;
            case 2:
                a.l && a.l(a.g.m);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var uk = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.j) throw Error("Then functions already set.");
            this.j = a;
            this.l = b;
            tk(this)
        }
    };

    function wk(a, b, c) {
        var d = new vk;
        a.g(new qk(function() {
            sk(d, b())
        }, c));
        return d.g
    }

    function xk(a, b, c, d) {
        a.g(new qk(function() {
            sk(b, c)
        }, d))
    }

    function yk(a, b) {
        a.g(new qk(function() {
            b.j("n")
        }, "rrej"))
    }
    var zk = class {};
    class Ak {
        constructor(a) {
            this.g = a
        }
    };

    function Bk(a, b) {
        var c = new vk;
        a.g.g(new qk(function() {
            Ck(a, b, c)
        }, "idom"));
        return c.g
    }

    function Dk(a) {
        return wk(a.g, function() {
            return new Rj
        }, "icla")
    }

    function Ek(a, b, c) {
        var d = new vk;
        Fk(a, b, new Ak(c.g)).then(function(e) {
            Gk(a, b).then(function(f) {
                Hk(a, b, e).then(function(g) {
                    sk(d, new mk(f, g, e))
                })
            })
        });
        return d.g
    }

    function Ik(a, b, c) {
        var d = new vk;
        Bk(a, b).then(function(e) {
            Dk(a).then(function(f) {
                Ek(a, e, f).then(function(g) {
                    xk(a.g, d, new ok(e, g, f, c))
                }, r(d.j, d))
            }, r(d.j, d))
        }, r(d.j, d));
        return d.g
    }

    function Ck(a, b, c) {
        var d = b.document.body;
        if (d) {
            var e = b.document.body.getBoundingClientRect().width;
            if (null == e) c.j("bw");
            else {
                var f = N(b).clientWidth,
                    g = N(b).clientHeight;
                if (null == f || null == g) c.j("vp");
                else {
                    var h = (new Bi(d, !0)).g(d);
                    if (h) {
                        var l = new fk;
                        Jk(a, h).then(function(k) {
                            Wh = k;
                            Kk(a, h).then(function(n) {
                                sk(c, new nk(b, e, f, g, h, k, n, l))
                            })
                        })
                    } else c.j("nt")
                }
            }
        } else c.j("b")
    }

    function Jk(a, b) {
        return wk(a.g, function() {
            const c = [];
            ci(b, c);
            return c
        }, "iflt")
    }

    function Kk(a, b) {
        return wk(a.g, function() {
            const c = {
                map: new S,
                L: []
            };
            Xj(b, 0, c);
            return c
        }, "intm")
    }

    function Fk(a, b, c) {
        return wk(a.g, function() {
            var d = b.l;
            const e = new lk(b.g, b.B),
                f = new wj(Nj(c.g), 6);
            for (let g of d) f.g(g) && Sj(e, g);
            return e
        }, "ivis")
    }

    function Gk(a, b) {
        return wk(a.g, function() {
            var c = Hj(b.l);
            return gk(b.l, b.g, b.B, c)
        }, "ibck")
    }

    function Hk(a, b, c) {
        return wk(a.g, function() {
            var d = b.g;
            const e = new S;
            var f = 0;
            for (var g = 0; g < d.L.length; ++g) {
                var h = d.L[g],
                    l = h.g,
                    k;
                if (k = 1 == h.j) k = V(l, "float"), k = "left" == k || "right" == k;
                k && (l = l.j().bottom, l > f && (f = l));
                e.set(q(h), f)
            }
            f = new S;
            g = Number.MAX_VALUE;
            for (h = d.L.length - 1; 0 <= h; --h) l = d.L[h], k = l.g, 0 == l.j && c.contains(k) && (k = k.j().top, k < g && (g = k)), f.set(q(l), g);
            d = new S;
            g = nf(e);
            for (h = 0; h < g.length; ++h) {
                l = e.get(g[h]);
                k = f.get(g[h]);
                if ("number" !== typeof k) throw Error("No entry in minSubsequentTopBounds for terminal UID!");
                d.set(g[h], new ik(l, k))
            }
            return d
        }, "irel")
    }
    var Lk = class {
        constructor(a) {
            this.g = a
        }
    };

    function Mk(a) {
        var b = a.length - 1,
            c = new Kh;
        c.next = function() {
            if (0 > b) throw Jh;
            return a[b--]
        };
        return c
    };
    var Nk = {
            0: !0,
            1: !0
        },
        Ok = {
            2: !0,
            3: !0
        },
        Pk = {
            3: !0
        },
        Qk = class {
            constructor(a, b, c) {
                this.l = a;
                this.j = b;
                this.g = c
            }
            W() {
                for (var a = Mh(this.j); null !== a; a = Mh(this.j)) {
                    var b = a.g;
                    if (1 != b.C.nodeType) b = null;
                    else {
                        var c = Qi[b.C.tagName];
                        c ? (a = Si(c, 0 == a.j ? Nk : 0 < $h(a.g).length ? Ok : Pk), b = {
                            node: b,
                            ib: a,
                            identifier: {}
                        }) : b = null
                    }
                    if (b && (a = b.node.j(), a = a.right - a.left, c = this.l, null == a || null == c ? 0 : a >= c * this.g.m && a <= c * this.g.j)) return a = new vk, sk(a, b), a.g
                }
                b = new vk;
                b.j("na");
                return b.g
            }
        };

    function Rk(a, b) {
        xa(a.l, b);
        return a
    }
    class Sk {
        constructor() {
            this.j = [];
            this.l = [];
            this.m = []
        }
        g(a) {
            if (a = ej(a)) {
                for (var b = 0; b < this.m.length; ++b)
                    if (si(a, this.m[b])) return [6];
                for (b = 0; b < this.j.length; ++b)
                    if (ti(a, this.j[b])) return [6];
                for (b = 0; b < this.l.length; ++b)
                    if (ui(a, this.l[b])) return [6]
            }
            return []
        }
    }
    var Tk = [/cookie/, /(^|(-|_))sticky((-|_)|$)/],
        Uk = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/],
        Vk = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/],
        Wk = [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/],
        Xk = ["A", "FORM", "BUTTON"];

    function Yk(a) {
        return b => !!(b.Ta & a)
    }
    class X extends Ti {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.Ta = c;
            this.cc = d
        }
        eb() {
            return this.Ta
        }
        j(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const Zk = cb("script");
    class $k {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, l = null, k = null, n = null, p = null) {
            this.B = a;
            this.K = b;
            this.Ta = c;
            this.j = d;
            this.G = e;
            this.g = f;
            this.l = g;
            this.J = h;
            this.D = l;
            this.m = k;
            this.v = n;
            this.F = p;
            this.I = this.H = this.A = null
        }
        size() {
            return this.K
        }
    };
    /* 
     
     Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
     
     Licensed under the Apache License, Version 2.0 (the "License"); 
     you may not use this file except in compliance with the License. 
     You may obtain a copy of the License at 
     
          http://www.apache.org/licenses/LICENSE-2.0 
     
     Unless required by applicable law or agreed to in writing, software 
     distributed under the License is distributed on an "AS-IS" BASIS, 
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
     See the License for the specific language governing permissions and 
     limitations under the License. 
    */
    const al = {
            ["image_stacked"]: 1 / 1.91,
            ["image_sidebyside"]: 1 / 3.82,
            ["mobile_banner_image_sidebyside"]: 1 / 3.82,
            ["pub_control_image_stacked"]: 1 / 1.91,
            ["pub_control_image_sidebyside"]: 1 / 3.82,
            ["pub_control_image_card_stacked"]: 1 / 1.91,
            ["pub_control_image_card_sidebyside"]: 1 / 3.74,
            ["pub_control_text"]: 0,
            ["pub_control_text_card"]: 0
        },
        bl = {
            ["image_stacked"]: 80,
            ["image_sidebyside"]: 0,
            ["mobile_banner_image_sidebyside"]: 0,
            ["pub_control_image_stacked"]: 80,
            ["pub_control_image_sidebyside"]: 0,
            ["pub_control_image_card_stacked"]: 85,
            ["pub_control_image_card_sidebyside"]: 0,
            ["pub_control_text"]: 80,
            ["pub_control_text_card"]: 80
        },
        cl = {
            ["pub_control_image_stacked"]: 100,
            ["pub_control_image_sidebyside"]: 200,
            ["pub_control_image_card_stacked"]: 150,
            ["pub_control_image_card_sidebyside"]: 250,
            ["pub_control_text"]: 100,
            ["pub_control_text_card"]: 150
        };

    function dl(a) {
        var b = 0;
        a.ra && b++;
        a.ma && b++;
        a.na && b++;
        if (3 > b) return {
            qa: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.ra.split(",");
        const c = a.na.split(",");
        a = a.ma.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            qa: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            qa: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (isNaN(f) || 0 === f) return {
                qa: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (isNaN(f) || 0 === f) return {
                qa: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            na: d,
            ma: e,
            Kb: b
        }
    }

    function el(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    class fl extends Ti {
        g(a) {
            return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
        }
    }

    function gl(a, b) {
        hl(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new $k(9, new fl(a, Math.floor(a * b.google_phwr)));
        var c = jc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * al.mobile_banner_image_sidebyside + bl.mobile_banner_image_sidebyside) + 96), a = {
            Ca: a,
            Aa: c,
            ma: 1,
            na: 12,
            ra: "mobile_banner_image_sidebyside"
        }) : (a = el(a), a = {
            Ca: a.width,
            Aa: a.height,
            ma: 1,
            na: 13,
            ra: "image_sidebyside"
        }) : (a = el(a), a = {
            Ca: a.width,
            Aa: a.height,
            ma: 4,
            na: 2,
            ra: "image_stacked"
        });
        il(b, a);
        return new $k(9, new fl(a.Ca,
            a.Aa))
    }

    function jl(a, b) {
        hl(a, b);
        var c = dl({
            na: b.google_content_recommendation_rows_num,
            ma: b.google_content_recommendation_columns_num,
            ra: b.google_content_recommendation_ui_type
        });
        if (c.qa) a = {
            Ca: 0,
            Aa: 0,
            ma: 0,
            na: 0,
            ra: "image_stacked",
            qa: c.qa
        };
        else {
            var d = 2 === c.Kb.length && 468 <= a ? 1 : 0;
            var e = c.Kb[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = cl[e];
            let g = c.ma[d];
            for (; a / g < f && 1 < g;) g--;
            f = g;
            d = c.na[d];
            c = Math.floor(((a - 8 * f - 8) / f * al[e] + bl[e]) * d + 8 * d + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    vb: "Calculated slot width is too large: " + a
                } :
                1500 < c ? {
                    width: 0,
                    height: 0,
                    vb: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
            a = a.vb ? {
                Ca: 0,
                Aa: 0,
                ma: 0,
                na: 0,
                ra: e,
                qa: a.vb
            } : {
                Ca: a.width,
                Aa: a.height,
                ma: f,
                na: d,
                ra: e
            }
        }
        if (a.qa) throw new Xd(a.qa);
        il(b, a);
        return new $k(9, new fl(a.Ca, a.Aa))
    }

    function hl(a, b) {
        if (0 >= a) throw new Xd("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function il(a, b) {
        a.google_content_recommendation_ui_type = b.ra;
        a.google_content_recommendation_columns_num = b.ma;
        a.google_content_recommendation_rows_num = b.na
    };
    class kl extends Ti {
        g() {
            return this.minWidth()
        }
        j(a, b, c) {
            Rf(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const ll = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var ml = class extends Ti {
            g() {
                return Math.min(1200, this.minWidth())
            }
        },
        nl = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f && "false" != e.google_full_width_responsive) {
                var g = Kf(b, c, a, .2, e);
                if (!0 !== g) e.gfwrnwer = g;
                else if (g = N(b).clientWidth) e.google_full_width_responsive_allowed = !0, c.parentElement && (Pf(b, c), Rf(b, c), a = g)
            }
            if (250 > a) throw new Xd("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 >
                    f) throw new Xd("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new $k(11, new Ti(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b = null;
                if (!b) throw new Xd("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new Xd("Invalid height: height=" + f);
                if (50 > f) throw new Xd("Fluid responsive ads must be at least 50px tall: height=" +
                    f);
                if (1200 < f) throw new Xd("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new $k(11, new Ti(a, f))
            }
            d = ll[f];
            if (!d) throw new Xd("Invalid data-ad-layout value: " + f);
            c = Wi(c, b);
            b = N(b).clientWidth;
            b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new $k(11, "in-article" == f ? new ml(a, b) : new Ti(a, b))
        };
    var ol = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        pl = (a, b, c) => {
            const d = a.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = a[f];
                if (b(g)) {
                    if (!c || c(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var Y = [new X(970, 90, 2), new X(728, 90, 2), new X(468, 60, 2), new X(336, 280, 1), new X(320, 100, 2), new X(320, 50, 2), new X(300, 600, 4), new X(300, 250, 1), new X(250, 250, 1), new X(234, 60, 2), new X(200, 200, 1), new X(180, 150, 1), new X(160, 600, 4), new X(125, 125, 1), new X(120, 600, 4), new X(120, 240, 4), new X(120, 120, 1, !0)],
        ql = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];
    var rl = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                ca: a,
                ea: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || "auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (488 > N(c).clientWidth && (Lf(c) || Q(Le)) && Pf(c, d), b = Mf(a, c, d, e), c = !0 !== b ? {
                ca: a,
                ea: b
            } : {
                ca: N(c).clientWidth || a,
                ea: !0
            }) : c = {
                ca: a,
                ea: 2
            };
            const {
                ca: f,
                ea: g
            } = c;
            return !0 !== g ? {
                ca: a,
                ea: g
            } : d.parentElement ? {
                ca: f,
                ea: g
            } : {
                ca: a,
                ea: g
            }
        },
        ul = (a, b, c, d, e) => {
            const {
                ca: f,
                ea: g
            } = be(247, () => rl(a, b, c, d, e));
            var h = !0 === g;
            const l =
                F(d.style.width),
                k = F(d.style.height),
                {
                    Ba: n,
                    xa: p,
                    eb: u,
                    Jb: H
                } = sl(f, b, c, d, e, h);
            h = tl(b, u);
            var C;
            const v = (C = Ui(d, c, "marginLeft", F)) ? C + "px" : "",
                A = (C = Ui(d, c, "marginRight", F)) ? C + "px" : "";
            C = Ui(d, c, "zIndex") || "";
            return new $k(h, n, u, null, H, g, p, v, A, k, l, C)
        },
        sl = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, N(c).clientWidth) ? 4 : 3 : Jf(b);
            let g;
            var h = !1;
            let l = !1;
            if (488 > N(c).clientWidth) {
                g = If(d, c);
                var k = Wi(d, c);
                h = !k && g;
                l = k && g
            }
            k = 488 > N(c).clientWidth;
            const n = [Vi(a), Yk(b)];
            Lf(c) || n.push(Yi(k, c, d, l));
            null != e.google_max_responsive_height &&
                n.push(Zi(e.google_max_responsive_height));
            const p = [v => !v.cc];
            !h && !l || Lf(c) || (h = $i(c, d), p.push(Zi(h)));
            let u = k && !f && 3 === b && vl(c) ? new X(a, Math.floor(a / 1.2), 1) : pl(ql.slice(0), ol(n), ol(p));
            if (!u) throw new Xd("No slot size for availableWidth=" + a);
            const {
                Ba: H,
                xa: C
            } = be(248, () => {
                var v;
                a: if (f) {
                    if (e.gfwrnh && (v = F(e.gfwrnh))) {
                        v = {
                            Ba: new kl(a, v),
                            xa: !0
                        };
                        break a
                    }
                    v = a / 1.2;
                    if (Lf(c)) var A = v;
                    else {
                        A = Math;
                        var W = A.min;
                        if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var D = Infinity;
                        else {
                            D = d;
                            let x = Infinity;
                            do {
                                var w = Ui(D, c, "height", F);
                                w && (x = Math.min(x, w));
                                (w = Ui(D, c, "maxHeight", F)) && (x = Math.min(x, w))
                            } while ((D = D.parentElement) && "HTML" != D.tagName);
                            D = x
                        }
                        A = W.call(A, v, D);
                        if (A < .5 * v || 100 > A) A = v
                    }
                    Q(Te) && !Wi(d, c) && (A = Math.max(A, .5 * N(c).clientHeight));
                    v = {
                        Ba: new kl(a, Math.floor(A)),
                        xa: A < v ? 102 : !0
                    }
                } else v = {
                    Ba: u,
                    xa: 100
                };
                return v
            });
            return "in-article" === e.google_ad_layout && wl(c) ? {
                Ba: xl(a, c, d, H, e),
                xa: !1,
                eb: b,
                Jb: g
            } : {
                Ba: H,
                xa: C,
                eb: b,
                Jb: g
            }
        };
    const tl = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        xl = (a, b, c, d, e) => {
            const f = e.google_ad_height || Ui(c, b, "height", F);
            b = nl(a, b, c, f, e).size();
            return b.minWidth() * b.height() > a * d.height() ? new X(b.minWidth(), b.height(), 1) : d
        },
        wl = a => Q(Re) || a.location && "#hffwroe2etoq" == a.location.hash,
        vl = a => Q(Ne) || a.location && "#affwroe2etoq" == a.location.hash;
    var yl = class extends Ti {
            g() {
                return this.minWidth()
            }
            l(a) {
                return super.l(a) + "_0ads_al"
            }
        },
        zl = [new yl(728, 15), new yl(468, 15), new yl(200, 90), new yl(180, 90), new yl(160, 90), new yl(120, 90)],
        Al = (a, b, c) => {
            var d = pl(zl, Vi(a));
            if (!d) throw new Xd("No link unit size for width=" + a + "px");
            a = Math.min(a, 1200);
            d = d.height();
            b = Math.max(d, b);
            a = (new $k(10, new yl(a, Math.min(b, 15 == d ? 90 : 250)))).size();
            b = a.minWidth();
            a = a.height();
            15 <= c && (a = c);
            return new $k(10, new yl(b, a))
        },
        Bl = (a, b, c, d) => {
            if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
            var e = Mf(a, b, c, d);
            if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
            e = N(b).clientWidth;
            if (!e) return a;
            d.google_full_width_responsive_allowed = !0;
            Rf(b, c);
            return e
        };
    var Cl = (a, b, c, d, e) => {
        var f;
        (f = N(b).clientWidth) ? 488 > N(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Rf(b, c), f = {
            ca: f,
            ea: !0
        }) : f = {
            ca: a,
            ea: 5
        } : f = {
            ca: a,
            ea: 4
        }: f = {
            ca: a,
            ea: 10
        };
        const {
            ca: g,
            ea: h
        } = f;
        if (!0 !== h || a == g) return new $k(12, new Ti(a, d), null, null, !0, h, 100);
        const {
            Ba: l,
            xa: k,
            eb: n
        } = sl(g, "auto", b, c, e, !0);
        return new $k(1, l, n, 2, !0, h, k)
    };
    const Dl = (a, b, c, d, e) => {
        const f = d.google_ad_height || Ui(c, e, "height", F);
        switch (a) {
            case 5:
                const {
                    ca: g,
                    ea: h
                } = be(247, () => rl(b, d.google_ad_format, e, c, d));
                !0 === h && b != g && Rf(e, c);
                !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                return gl(g, d);
            case 9:
                return jl(b, d);
            case 4:
                return a = Bl(b, e, c, d), Al(a, $i(e, c), f);
            case 8:
                return nl(b, e, c, f, d);
            case 10:
                return Cl(b, e, c, f, d)
        }
    };
    class El extends hj {
        constructor(a) {
            super(a);
            this.A = ""
        }
        J() {
            return 1
        }
        D(a = !1) {
            const b = ej(this);
            if (!b) return null;
            fj(this) && (this.A = b.C.style.display);
            var c = gj(this),
                d = Xh(b),
                e = cj(d, {
                    wb: "10px",
                    jb: "10px",
                    kb: this.v
                });
            e.Ha.className = "google-auto-placed";
            var f = e.wa,
                g = f.style;
            g.display = "inline-block";
            g.boxSizing = "border-box";
            g.width = "100%";
            g.height = a ? "auto" : "100px";
            g.backgroundColor = "#f60";
            g.border = "#000 solid 1px";
            c && (g = d.createElement("span"), g.style.fontSize = "small", g.appendChild(d.createTextNode(c)), f.appendChild(g));
            c = e.Ha;
            e = e.wa;
            f = this.g();
            d = b.C;
            f = Pi[f];
            Q(Ie) ? Mi(c, d, f) : Ji(c, d, f);
            if (a) try {
                this.F(e, ec())
            } catch (h) {
                e.style.height = "100px"
            }
            this.j = b.l.g(c);
            this.j || (c.parentNode.removeChild(c), fj(this) && (b.C.style.display = this.A));
            return this.j
        }
        F(a, b) {
            var c = {
                    ["google_ad_format"]: "auto"
                },
                d = 1,
                e = a.offsetWidth || (c.google_ad_resize || !1) && Ui(a, b, "width", F) || c.google_ad_width || 0;
            (Q(Se) || b.location && "#ooimne2e" == b.location.hash) && 4 === d && (c.google_ad_format = "auto", d = 1);
            var f = (f = Dl(d, e, a, c, b)) ? f : ul(e, c.google_ad_format, b, a, c);
            f.size().j(b, c, a);
            null != f.Ta && (c.google_responsive_formats = f.Ta);
            null != f.G && (c.google_safe_for_responsive_override = f.G);
            null != f.g && (!0 === f.g ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = f.g));
            null != f.l && !0 !== f.l && (c.gfwrnher = f.l);
            b = f.v || c.google_ad_width;
            null != b && (c.google_resizing_width = b);
            b = f.m || c.google_ad_height;
            null != b && (c.google_resizing_height = b);
            b = f.size().g(e);
            const g = f.size().height();
            c.google_ad_resize || (c.google_ad_width = b, c.google_ad_height =
                g, c.google_ad_format = f.size().l(e), c.google_responsive_auto_format = f.B, null != f.j && (c.armr = f.j), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === f.g && (c.gfwrnh = f.size().height() + "px"));
            null != f.J && (c.gfwroml = f.J);
            null != f.D && (c.gfwromr = f.D);
            null != f.m && (c.gfwroh = f.m);
            null != f.v && (c.gfwrow = f.v);
            null != f.F && (c.gfwroz = f.F);
            null != f.A && (c.gml = f.A);
            null != f.H && (c.gmr = f.H);
            null != f.I && (c.gzi = f.I);
            e = hd();
            e = jd(e) || e;
            ld(e.location, "google_responsive_slot_debug") && (c.ds = `outline:thick dashed ${b&& 
g?!0!==f.g||!0!==f.l?"#ffa500":"#0f0":"#f00"} !important;`);
            ld(e.location, "google_responsive_dummy_ad") && (va([1, 2, 3, 4, 5, 6, 7, 8], f.B) || 1 === f.j) && 2 !== f.j && (e = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${Zk}>window.top.postMessage('${e}', '*'); 
          </${Zk}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);
            1 != d && (c = f.size().height(), a.style.height = c + "px")
        }
        m() {
            if (this.j) {
                var a = this.j;
                a.C.parentNode && a.C.parentNode.removeChild(a.C);
                this.j = null;
                fj(this) && (ej(this).C.style.display = this.A);
                Vh()
            }
        }
    }
    var Fl = class extends ij {
        j() {
            return new El(this)
        }
    };
    new T(["comments"]);
    new T(["allcomments"]);
    new T(["post-container", "post", "type-post"]);
    var Hl = (a, b, c) => {
            const d = [];
            a.map(e => Gl(e, b, c)).forEach(e => xa(d, e));
            return d
        },
        Gl = (a, b, c) => {
            const d = a.ib.Y,
                e = a.node;
            if (!e) return [];
            const f = [];
            e.g() && va(d, 0) && f.push(0);
            va(d, 1) && f.push(1);
            va(d, 2) && (!va(d, 1) || 0 < $h(e).length) && f.push(2);
            e.g() && va(d, 3) && f.push(3);
            return f.map(g => {
                g = new Fl(a, g);
                b.forEach(g.g.add, g.g);
                g.m.push(...c);
                return g.j()
            })
        },
        Il = (a, b) => {
            a = ej(b) ? a.map.get(q(ej(b))) : void 0;
            if (!a) return -1;
            switch (b.g()) {
                case 0:
                    return a.start.X();
                case 1:
                    return a.start.X() + 1;
                case 2:
                    return a.end.X();
                case 3:
                    return a.end.X() +
                        1
            }
            return -1
        },
        Jl = (a, b) => {
            a = ej(b) ? a.map.get(q(ej(b))) : void 0;
            if (!a) return -1;
            switch (b.g()) {
                case 0:
                    return a.start.X() - .1;
                case 3:
                    return a.end.X() + .1;
                case 1:
                    return a.start.X() + .1;
                case 2:
                    return a.end.X() - .1
            }
            return -1
        };

    function Kl(a, b) {
        b && a.g.push(b);
        return a
    }

    function Ll(a, b) {
        a.j.push(b);
        return a
    }

    function Ml(a, b) {
        return wk(a.m, () => {
            const c = [];
            for (let d = 0; d < a.j.length; ++d) {
                const e = a.j[d].g(b);
                xa(c, e);
                if (0 < e.length) break
            }
            return c
        }, "flap")
    }

    function Nl(a, b) {
        return wk(a.m, () => {
            if (0 == a.g.length) var c = [];
            else {
                var d = Math.floor(Jl(a.v, b));
                if ((d = -1 != d ? d + b.J() + "|" + b.v + "|10px|10px" : null) && lf(a.l, d)) c = a.l.get(d);
                else {
                    var e = [],
                        f = dj(b);
                    try {
                        for (let g = 0; g < a.g.length; ++g)
                            if (c = a.g[g].g(f), xa(e, c), 0 < c.length) {
                                b.m();
                                break
                            }
                    } finally {
                        b.m()
                    }
                    null != d && a.l.set(d, e);
                    c = e
                }
            }
            return c
        }, "flfa")
    }

    function Ol(a, b) {
        const c = new vk;
        Ml(a, b).then(d => {
            0 < d.length ? sk(c, d) : Nl(a, b).then(e => {
                sk(c, d.concat(e))
            })
        });
        return c.g
    }
    class Pl {
        constructor(a, b) {
            this.m = a;
            this.g = [];
            this.j = [];
            this.v = b;
            this.l = new S
        }
    };
    class Ql {
        constructor(a) {
            this.j = a
        }
        g(a) {
            if (!a) return [];
            for (let b = 0; b < this.j.length; ++b)
                if (this.j[b].m(a)) return [2];
            return []
        }
    };
    class Rl {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a) return [9];
            const b = le(this.j, !0);
            return null == b ? [16] : b - a.j().bottom < this.l ? [17] : []
        }
    };
    class Sl {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            for (a = Math.floor(Jl(this.j, a)); 0 < a; a--) {
                const b = this.j.L[a];
                if (!b.g.ya()) {
                    if ((0 == b.j ? fi(b.g).top : fi(b.g).bottom) <= this.l) break;
                    return []
                }
            }
            return [10]
        }
    };

    function Tl(a, b, c) {
        return {
            top: a.g - c,
            right: a.j + a.l + b,
            bottom: a.g + c,
            left: a.j - b
        }
    }
    class Ul {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
    };
    class Vl {
        constructor(a) {
            const b = [];
            for (let c = 0; c < Tj(a).length; ++c) b.push(Tj(a)[c].j());
            this.l = b;
            this.j = new S
        }
        g(a) {
            const b = q(a);
            if (lf(this.j, b)) return this.j.get(b);
            a: {
                var c = a.j();c = new Ul(c.left, c.top + a.C.scrollHeight, a.C.scrollWidth);
                for (e of this.l) {
                    b: {
                        if (c.g >= Math.floor(e.bottom)) {
                            var d = !1;
                            break b
                        }
                        d = Math.ceil(e.left);
                        const f = c.j + c.l;d = !(Math.floor(e.right) <= c.j || f <= d)
                    }
                    if (d) {
                        var e = !0;
                        break a
                    }
                }
                e = !1
            }
            e = !e && a.C.scrollHeight > a.C.clientHeight && pi(a);
            c = a.g();
            c = !c || this.g(c);
            a = e && c ? !0 : e ? ki(a) : c && !ki(a);
            this.j.set(b, a);
            return a
        }
    };
    class Wl {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            const b = ej(a);
            if (!b) return [];
            switch (a.g()) {
                case 0:
                case 3:
                    return a = b.g(), b != this.l && a && this.j.g(a) ? [] : [14];
                case 1:
                case 2:
                    return this.j.g(b) ? [] : [14];
                default:
                    throw Error("Unhandled position.");
            }
        }
    };
    class Xl {
        constructor(a) {
            this.j = a
        }
        g(a) {
            return (a = ej(a)) && ji(a, this.j) ? [11] : []
        }
    };

    function Yl(a, b, c) {
        return yh({
            top: a.g.top - (c + 1),
            right: a.g.right + (c + 1),
            bottom: a.g.bottom + (c + 1),
            left: a.g.left - (c + 1)
        }, b.g)
    }

    function Zl(a) {
        if (!a.length) return null;
        const b = zh(a.map(c => c.g));
        a = a.reduce((c, d) => c + d.j, 0);
        return new $l(b, a)
    }
    class $l {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    };
    var cm = (a, b) => {
            var c = wa(b.document.querySelectorAll(".google-auto-placed"));
            const d = wa(b.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
                e = wa(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var f = wa(b.document.querySelectorAll("iframe[id^=google_ads_iframe]"));
            var g;
            (g = am(b)) || (g = wa(b.document.querySelectorAll("div[id^=div-gpt-ad]")));
            f = g.concat(f);
            g = wa(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
            const h = wa(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                l = wa(b.document.querySelectorAll("div.googlepublisherpluginad"));
            let k = [].concat(wa(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), wa(b.document.querySelectorAll("ins.adsbygoogle")));
            b = [];
            for (const [n, p] of [
                    [a.Pc, c],
                    [a.Hb, d],
                    [a.Sc, e],
                    [a.Qc, f],
                    [a.Tc, g],
                    [a.Oc, h],
                    [a.Rc, l]
                ]) a = p, !1 === n ? b = b.concat(a) : k = k.concat(a);
            a = bm(k);
            c = bm(b);
            a = a.slice(0);
            for (const n of c)
                for (c = 0; c < a.length; c++)(n.contains(a[c]) ||
                    a[c].contains(n)) && a.splice(c, 1);
            return a
        },
        em = a => {
            const b = am(ec(ac(a))) || [];
            return !!hc(a, c => {
                if (!ea(c) || 1 != c.nodeType) return !1;
                const d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || va(b, c) || ua(pc(dm), e => d.call(c, e))
            })
        };
    const am = a => {
            try {
                return ra(sa(a.googletag.pubads().getSlots(), b => a.document.getElementById(b.getSlotElementId())), b => null != b)
            } catch (b) {}
            return null
        },
        dm = {
            yc: "ins.adsbygoogle-ablated-ad-slot",
            Ac: "ins.adsbygoogle",
            zc: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            Bc: ".google-auto-placed",
            Cc: 'ins.adsbygoogle[data-anchor-shown="true"]',
            Dc: "iframe[id^=google_ads_iframe]",
            Fc: "div[id^=div-gpt-ad]",
            Gc: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            Hc: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            Ec: "div.googlepublisherpluginad"
        };
    var bm = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var fm = ce(453, cm);

    function gm(a, b) {
        a = hm(a);
        b = im(a, b);
        return new jm(a, b)
    }

    function km(a) {
        return a.j.map(b => b.box)
    }
    class jm {
        constructor(a, b) {
            this.j = a.slice(0);
            this.g = b.slice(0)
        }
    }

    function hm(a) {
        const b = fm({
                Hb: !1
            }, a),
            c = me(a),
            d = O(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Jc: e ? 1 : 0
            } : null
        }).filter(Ba(e => null === e))
    }

    function im(a, b) {
        return void 0 != b && 8 >= a.length ? lm(a, b) : sa(a, c => new $l(c.box, 1))
    }

    function lm(a, b) {
        a = sa(a, d => new $l(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Yl(d, a[f], b)) {
                        d = Zl([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };
    class mm {
        constructor(a, b, c) {
            this.j = fm({}, c).map(r(a.g, a)).filter(Ba(d => null === d));
            this.l = b
        }
        g(a) {
            if (!a) return [9];
            a = a.j();
            for (let d = 0; d < this.j.length; d++) {
                const e = this.j[d].j();
                var b;
                if (b = 1 < (e.bottom - e.top) * (e.right - e.left)) {
                    b = a.top;
                    var c = this.l;
                    (b = e.top - c < b && b < e.bottom + c) || (b = a.bottom, c = this.l, b = e.top - c < b && b < e.bottom + c)
                }
                if (b) return [8]
            }
            return []
        }
    };
    class nm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (fj(a)) return [];
            a = Jl(this.j.g, a);
            var b = jk(this.j, a);
            if (!b) return [];
            const c = this.l.g(b.start.g);
            b = b.end.X();
            return c && 10 >= a - b ? [5] : []
        }
    };
    const om = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
    class pm {
        g(a) {
            a = ej(a);
            if (!a) return [12];
            if (!om.includes(a.C.tagName) || a.C.id) return [];
            const b = vi(a),
                c = Xh(a);
            for (var d of b)
                if (1 == c.getElementsByClassName(d).length) return [];
            d = a.j();
            return 150 >= d.bottom - d.top ? [13] : []
        }
    };
    class qm {
        g(a) {
            return a && !a.ya() && li(a) ? [] : [3]
        }
    };

    function rm(a, b) {
        return 0 < a.g.length ? (sk(b, a.g.shift()), !0) : !1
    }
    class sm {
        constructor(a, b) {
            this.j = a;
            this.v = b;
            this.B = [];
            this.m = [];
            this.g = []
        }
        W() {
            const a = new vk;
            this.j.g(new qk(r(this.l, this, a), "p"));
            return a.g
        }
        l(a) {
            rm(this, a) || this.v.W().then(r(this.A, this, a), r(a.j, a))
        }
        A(a, b) {
            b = Hl([b], this.B, this.m);
            xa(this.g, b);
            rm(this, a) || this.j.g(new qk(r(this.l, this, a), "p"))
        }
    };
    class tm {
        constructor(a) {
            this.g = a.filter(b => fj(b));
            this.j = a.filter(b => !fj(b))
        }
        W() {
            return this.g.shift() || this.j.shift() || null
        }
    };
    class um {};

    function vm(a, b) {
        a.j.g(new qk(() => {
            const c = a.g ? a.g.W() : null;
            c ? wm(a, b, c) : a.v.W().then(r(a.A, a, b), r(a.H, a, b))
        }, "r"))
    }

    function wm(a, b, c) {
        a.m && a.m.apply(c);
        a.l ? Ol(a.l, c).then(function(d) {
            0 == d.length ? (0 < a.g.g.length || (a.g = null), xk(a.j, b, c, "rres")) : (a.B.push(new um), vm(a, b))
        }) : xk(a.j, b, c, "rres")
    }
    class xm {
        constructor(a, b, c, d) {
            this.j = a;
            this.v = b;
            this.m = c;
            this.l = d;
            this.g = null;
            this.B = []
        }
        W() {
            const a = new vk;
            vm(this, a);
            return a.g
        }
        A(a, b) {
            this.g = b;
            vm(this, a)
        }
        H(a) {
            yk(this.j, a)
        }
    };
    class ym {
        constructor(a) {
            this.g = a
        }
        W() {
            const a = new vk;
            this.g.W().then(b => {
                sk(a, new tm([b]))
            }, r(a.j, a));
            return a.g
        }
    };
    class zm {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
        apply(a) {
            var b = Il(this.g, a);
            b = this.j.get(q(this.g.L[b]));
            a.v = b.jc <= b.pc
        }
    };
    class Am {
        constructor(a) {
            this.j = a
        }
        g(a) {
            a: {
                const b = ej(a);
                if (b) {
                    switch (a.H) {
                        case 0:
                        case 3:
                            if (a = b.g()) break a;
                            throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                        case 1:
                        case 2:
                            a = b;
                            break a
                    }
                    throw Error("Un-handled ad placement position.");
                }
                a = null
            }
            return a && va(this.j, a.C) ? [18] : []
        }
    };
    var Bm = [{
        hostname: /^([a-z]+.)?m.wikihow.com$/,
        bc: "mw-mf-viewport"
    }];
    const Cm = a => {
        if (!a.location || !a.location.hostname) return [];
        var b = a.location.hostname,
            c = [];
        qa(Bm, function(d) {
            b.match(d.hostname) && (d = a.document.getElementById(d.bc)) && c.push(d)
        });
        return c
    };

    function Dm(a, b) {
        a.j.g(new qk(function() {
            if (a.g)
                if (a.l.g(a.g)) {
                    var c = a.g;
                    a.g = bi(a.g);
                    sk(b, c)
                } else {
                    a: {
                        c = a.g;
                        const d = $h(c);
                        for (let e = 0; e < d.length; ++e)
                            if (d[e].m()) {
                                c = d[e];
                                break a
                            }
                        c = bi(c)
                    }
                    a.g = c;Dm(a, b)
                }
            else b.j(null)
        }, "fpar"))
    }
    const Em = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
        W() {
            var a = new vk;
            Dm(this, a);
            return a.g
        }
    };
    class Fm {
        constructor(a) {
            this.j = a;
            this.g = []
        }
        reset() {
            const a = this.g;
            this.g = [];
            return a
        }
    };
    var Gm = {
            Y: [3],
            ha: !1,
            ia: 0,
            ga: 1
        },
        Hm = new T(["LI", "TR", "TD", "TH"]);

    function Im(a, b) {
        a.j.g(new qk(function() {
            a.v.W().then(r(a.m, a, b), r(a.l, a, b))
        }, "para"))
    }
    const Jm = class {
        constructor(a, b, c) {
            this.j = a;
            this.v = b;
            this.g = new Fm(c)
        }
        W() {
            var a = new vk;
            Im(this, a);
            return a.g
        }
        m(a, b) {
            var c = this.g;
            if (c.g.length) {
                var d = c.g[c.g.length - 1];
                var e = c.j;
                const f = e.g.map.get(q(b));
                (e = f ? jk(e, f.start.X()) : null) ? (e = e.start.g, d = d == e || d != e && gc(d.C, e.C)) : d = !0
            } else d = !0;
            d ? c.g.push(b) : c.g = [b];
            b = this.g;
            (b = 3 <= b.g.length ? b.g[b.g.length - 3 + 1] : null) && !Hm.contains(b.C.tagName) ? sk(a, {
                node: b,
                ib: Ri(Gm),
                identifier: {}
            }) : Im(this, a)
        }
        l(a) {
            a.j("na")
        }
    };
    const Km = class extends zk {
        constructor() {
            super();
            this.j = [];
            this.l = !1
        }
        g(a) {
            this.j.push(a);
            if (!this.l) {
                this.l = !0;
                try {
                    for (; 0 < this.j.length;) this.j.shift().g()
                } finally {
                    this.l = !1
                }
            }
        }
    };
    const Lm = class {
        constructor() {
            this.g = Date.now();
            this.j = Date.now()
        }
    };
    var Mm;

    function Nm() {
        var a = m.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !t("Presto") && (a = function() {
            var e = fc(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = r(function(l) {
                if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !t("Trident") && !t("MSIE")) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.Fb;
                    c.Fb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    Fb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            m.setTimeout(e, 0)
        }
    };

    function Om(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };

    function Pm() {
        var a = Qm;
        let b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.j = null), b.next = null);
        return b
    }
    class Rm {
        constructor() {
            this.j = this.g = null
        }
        add(a, b) {
            const c = Sm.get();
            c.set(a, b);
            this.j ? this.j.next = c : this.g = c;
            this.j = c
        }
    }
    var Sm = new class {
        constructor(a, b, c) {
            this.v = c;
            this.m = a;
            this.l = b;
            this.j = 0;
            this.g = null
        }
        get() {
            let a;
            0 < this.j ? (this.j--, a = this.g, this.g = a.next, a.next = null) : a = this.m();
            return a
        }
    }(() => new Tm, a => a.reset(), 100);
    class Tm {
        constructor() {
            this.next = this.g = this.j = null
        }
        set(a, b) {
            this.j = a;
            this.g = b;
            this.next = null
        }
        reset() {
            this.next = this.g = this.j = null
        }
    };
    var Um;

    function Vm() {
        if (m.Promise && m.Promise.resolve) {
            var a = m.Promise.resolve(void 0);
            Um = function() {
                a.then(Wm)
            }
        } else Um = function() {
            var b = Wm;
            "function" !== typeof m.setImmediate || m.Window && m.Window.prototype && !t("Edge") && m.Window.prototype.setImmediate == m.setImmediate ? (Mm || (Mm = Nm()), Mm(b)) : m.setImmediate(b)
        }
    }
    var Xm = !1,
        Qm = new Rm;

    function Wm() {
        for (var a; a = Pm();) {
            try {
                a.j.call(a.g)
            } catch (c) {
                Om(c)
            }
            var b = Sm;
            b.l(a);
            b.j < b.v && (b.j++, a.next = b.g, b.g = a)
        }
        Xm = !1
    };
    var Ym = class extends zk {
        constructor(a, b, c) {
            var d = new Lm;
            super();
            this.J = a;
            this.j = d;
            this.A = b || null;
            this.m = c || null;
            this.l = [];
            this.v = !1
        }
        g(a) {
            this.l.push(a);
            this.v || (a = this.H, Um || Vm(), Xm || (Um(), Xm = !0), Qm.add(a, this))
        }
        H() {
            this.A ? this.A(r(this.B, this)) : this.B()
        }
        B() {
            if (!this.v) {
                this.v = !0;
                try {
                    for (this.j.g = Date.now(); 0 < this.l.length;) {
                        var a = this.l.shift();
                        this.j.j = Date.now();
                        a.g();
                        this.m && this.m.j(Date.now() - this.j.j, a.j);
                        if (50 < Date.now() - this.j.g + 10) break
                    }
                    0 < this.l.length && this.J.setTimeout(r(this.H, this),
                        0)
                } finally {
                    this.v = !1, this.m && this.m.g(Date.now() - this.j.g)
                }
            }
        }
    };

    function Zm(a, b) {
        var c = new vk,
            d = b.J ? new Ym(a, ma(be, b.g ? "lr:apf:" + b.g : "lr:apf"), b.H) : new Km;
        d.g(new qk(function() {
            Ik(new Lk(d), a, b).then(function(e) {
                var f = e.j,
                    g = e.m,
                    h = e.l;
                a: {
                    var l = e.j,
                        k = e.g.v;
                    switch (k) {
                        case 2:
                            var n = l.m;
                            k = e.l.g;
                            k.m || (l = new wj(Oj(k), 0), k.g || (k.g = new Aj(new wj(Oj(k), 0))), k.m = new Dj(l, new wj(k.g, 1), new wj(Pj(k), 2)));
                            n = new Jm(d, new Em(d, n, new wj(k.m, 3)), e.m.g);
                            break a;
                        default:
                            n = l.A;
                            var p = l.g.L;
                            l = e.g;
                            k = 1 == k ? Mk(p) : Lh(p);
                            n = new Qk(n, k, l)
                    }
                }
                n = new ym(new sm(d, n));
                k = new zm(f.g, g.l);
                l = new Pl(d,
                    f.g);
                e.g.A && Ll(l, new Sl(f.g, f.v));
                p = Cm(f.j);
                h = Ll(Ll(Ll(Ll(l, new Am(p)), new nm(g.g, new wj(Pj(h.g), 2))), new pm), new Wl(f.m, new Vl(g.g)));
                p = new Sk;
                xa(p.j, Tk);
                p = Rk(Rk(p, Uk), Vk);
                xa(p.m, Xk);
                xa(p.j, Wk);
                h = Kl(Ll(Ll(h, Rk(p, Wk)), new Xl(f.H * f.v)), new qm);
                var u = e.g,
                    H = e.j.A;
                p = Math.max(H * u.m, u.minWidth);
                u = H * u.j;
                p = void 0 !== p ? p : 0;
                u = void 0 !== u ? u : Infinity;
                if (0 > p || 0 > u) throw Error("apf::wf");
                Kl(Kl(Kl(h, 0 >= p && Infinity === u ? null : new pk(p, u)), new mm(f.m.l, e.g.B, f.j)), new Ql([g.g, g.j]));
                0 < e.g.l && Kl(l, new Rl(f.j, e.g.l));
                xk(d,
                    c, new xm(d, n, k, l), "itres")
            }, r(c.j, c))
        }, "i"));
        return c.g
    };
    class $m {
        constructor(a) {
            this.g = a
        }
        map(a) {
            return null != this.g ? (a = a(this.g.value), a instanceof $m ? a : new $m({
                value: a
            })) : this
        }
    };

    function an(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || y(a, 3) || 0 < y(a, 4).length) {
            var c = y(a, 3),
                d = y(a, 1),
                e = y(a, 4);
            b = y(a, 2);
            var f = y(a, 5);
            a = bn(y(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Ei(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Ei(e[c]);
            b = (e = g) ? new Hi(e, b, f, a) : null
        } else b = b ? new Hi(b, y(a, 2), y(a, 5), bn(y(a, 6))) : null;
        return b
    }
    var cn = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function bn(a) {
        return null == a ? a : cn[a]
    }

    function dn(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.uc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function en(a, b) {
        var c = {};
        a && (c.wb = y(a, 1), c.jb = y(a, 2), c.kb = !!Db(a, 3));
        b && (c.Wa = dn(Gb(b, pd, 3)), c.Ua = dn(Gb(b, pd, 4)));
        return c
    }
    var fn = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        gn = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const hn = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            c = cj(d.document, this.g);
            c.wa.setAttribute("data-ad-format", "auto");
            bj(c, a, b);
            return c
        }
    };
    const jn = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            var e = 0 < Gb(this.g, rd, 9).length ? Gb(this.g, rd, 9)[0] : null,
                f = en(Fb(this.g, sd, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = ic(new $b(d), g);
                c.style.clear = f.kb ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Wa && aj(c.style, f.Wa);
                d = ic(new $b(d), "INS");
                f.Ua && aj(d.style, f.Ua);
                c.appendChild(d);
                f = {
                    Ha: c,
                    wa: d
                };
                f.wa.setAttribute("data-ad-type", "text");
                f.wa.setAttribute("data-native-settings-key",
                    e);
                bj(f, a, b);
                a = f
            } else a = null;
            return a
        }
    };
    var kn = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g() {
            return this.l
        }
    };

    function ln(a, b, c) {
        var d = a.da();
        if (!d) return null;
        var e = an(d);
        if (!e) return null;
        var f = a.g();
        f = fn[f];
        var g = void 0 === f ? null : f;
        if (null === g) return null;
        f = (f = Fb(a, sd, 3)) ? Db(f, 3) : null;
        e = new kn(e, g);
        g = y(a, 10).slice(0);
        null != y(d, 5) && g.push(1);
        d = y(a, 12);
        const h = null != y(a, 4) ? Fb(a, td, 4) : null;
        switch (y(a, 8)) {
            case 1:
                return new mn(e, new hn(en(Fb(a, sd, 3), null)), f, 0, g, h, c, b, d, a);
            case 2:
                return new mn(e, new jn(a), f, 1, g, h, c, b, d, a)
        }
        return null
    }

    function nn(a) {
        return a.m
    }

    function on(a, b, c) {
        lf(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class mn {
        constructor(a, b, c, d, e, f, g, h, l = null, k = null) {
            this.v = a;
            this.D = b;
            this.F = c;
            this.Lb = d;
            this.H = e;
            this.tb = f ? f : new td;
            this.l = g;
            this.B = h;
            this.A = l;
            this.J = k;
            this.G = [];
            this.m = !1;
            this.j = new S
        }
        g() {
            return this.v.g()
        }
        ob() {
            return this.H
        }
        X() {
            return this.B
        }
    };
    var pn = a => {
        switch (a.Lb) {
            case 0:
            case 1:
                var b = a.J;
                null == b ? a = null : (a = b.da(), null == a ? a = null : (b = b.g(), a = null == b ? null : new kf(0, {
                    Tb: [a],
                    vc: b
                })));
                return null != a ? new $m({
                    value: a
                }) : new $m(null);
            case 2:
                return new $m(null);
            default:
                return new $m(null)
        }
    };

    function qn(a) {
        return pn(a.ka).map(b => qf(b))
    }

    function rn(a) {
        a.g = a.g || qn(a);
        return a.g
    }
    var sn = class {
        constructor(a, b, c) {
            this.ka = a;
            this.j = b;
            this.pa = c;
            this.g = null
        }
        da() {
            return this.j
        }
        fill(a, b) {
            var c = this.ka;
            if (a = c.D.j(a, b, this.j, c.l)) {
                b = a.Ha;
                if (this.ka.m) throw Error("AMA:AP:AP");
                c = this.da();
                var d = this.ka.g();
                Q(Ie) ? Mi(b, c, d) : Ji(b, c, d);
                c = this.ka;
                c.m = !0;
                null != b && c.G.push(b)
            }
            return a
        }
    };

    function tn(a) {
        switch (a) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return null
        }
    };
    class un {
        constructor(a) {
            this.g = new T(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };
    var vn = ce(754, function(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h, l = Gi(g.v.j, g.l.document);
                (h = 0 < l.length ? l[0] : null) && e.push({
                    Za: g,
                    Cb: h
                })
            }
            for (f = 0; f < e.length; f++) {
                a = d;
                var k = a.push;
                var n = e[f],
                    p = n.Cb,
                    u = n.Za,
                    H = u.F,
                    C = u.l.document.createElement("div");
                C.className = "google-auto-placed";
                var v = C.style;
                v.textAlign = "center";
                v.width = "100%";
                v.height = "0px";
                v.clear = H ? "both" : "none";
                var A = C;
                try {
                    g = A;
                    h = p;
                    var W = u.g();
                    Q(Ie) ? Mi(g, h, W) : Ji(g, h, W);
                    var D = A
                } catch (U) {
                    throw Ki(A), U;
                }
                k.call(a, D)
            }
            var w =
                O(b),
                x = me(b);
            for (f = 0; f < d.length; f++) {
                b = x;
                k = w;
                var G = d[f].getBoundingClientRect(),
                    ha = e[f];
                c.push(new sn(ha.Za, ha.Cb, new Ul(G.left + b, G.top + k, G.right - G.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) Ki(d[f])
        }
        return c
    });

    function wn(a, b, c) {
        const d = Tl(c, 1, b + 1);
        return !ua(a, e => yh(e, d))
    }

    function xn(a, b, c, d, e) {
        e = e.pa;
        const f = Tl(e, 0, b),
            g = Tl(e, 0, c),
            h = Tl(e, 0, d);
        return !ua(a, l => yh(l, g) || yh(l, f) && !yh(l, h))
    }

    function yn(a, b, c, d) {
        const e = km(a);
        if (wn(e, b, d.pa)) return !0;
        if (!xn(e, b, c.mc, c.lb, d)) return !1;
        const f = new $l(Tl(d.pa, 0, 0), 1);
        a = ra(a.g, g => Yl(g, f, c.lb));
        b = ta(a, (g, h) => g + h.j, 1);
        return 0 === a.length || b > c.ic ? !1 : !0
    };
    class zn {
        constructor() {
            this.g = new S
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new T, this.g.set(a, c));
            c.add(b)
        }
    };
    var An = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function Bn(a, b) {
        const c = new zn,
            d = new T;
        b.forEach(e => {
            if (e.A()) {
                e = e.A();
                if (e.B() && e.B().da() && e.g() && e.g().da()) {
                    const g = Cn(a, e.B().da()),
                        h = Cn(a, e.g().da());
                    if (g && h)
                        for (var f of An({
                                anchor: g,
                                position: e.B().g()
                            }, {
                                anchor: h,
                                position: e.g().g()
                            })) c.set(q(f.anchor), f.position)
                }
                e.A() && e.A().da() && (f = Cn(a, e.A().da())) && c.set(q(f), e.A().g())
            } else e.B() ? Dn(a, e.B(), c) : e.g() && En(a, e.g(), d)
        });
        return new Fn(c, d)
    }
    class Fn {
        constructor(a, b) {
            this.j = a;
            this.g = b
        }
    }
    const Dn = (a, b, c) => {
            b.g() && (a = Gn(a, b.g())) && a.forEach(d => {
                d = q(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        En = (a, b, c) => {
            b.g() && (a = Gn(a, b.g())) && a.forEach(d => {
                c.add(q(d))
            })
        },
        Cn = (a, b) => (a = Gn(a, b)) && 0 < a.length ? a[0] : null,
        Gn = (a, b) => (b = an(b)) ? Gi(b, a) : null;

    function Hn(a) {
        return function(b) {
            return vn(b, a)
        }
    }

    function In(a) {
        const b = N(a).clientHeight;
        return b ? ma(Jn, b + O(a)) : za
    }

    function Kn(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return za;
        const d = km(c || gm(b));
        return e => wn(d, a, e.pa)
    }

    function Ln(a, b, c, d) {
        if (0 > a || 0 > b.mc || 0 > b.ic || 0 > b.lb) throw Error("ama::ead:nd");
        return Infinity === a ? za : e => yn(d || gm(c, b.lb), a, b, e)
    }

    function Mn(a) {
        if (!a.length) return za;
        const b = new un(a);
        return c => b.contains(c.Lb)
    }

    function Nn(a) {
        return function(b) {
            for (let c of b.ob())
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function On(a) {
        return a.length ? function(b) {
            const c = b.ob();
            return a.some(d => -1 < c.indexOf(d))
        } : Aa
    }

    function Pn(a, b) {
        if (0 >= a) return Aa;
        const c = N(b).scrollHeight - a;
        return function(d) {
            return d.pa.g <= c
        }
    }

    function Qn(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.tb, 2) || 0]
        }
    }

    function Rn(a) {
        return a.length ? b => a.includes(y(b.tb, 2) || 0) : Aa
    }

    function Sn(a) {
        return a.length ? b => a.includes(y(b.tb, 1) || 0) : Aa
    }

    function Tn(a, b) {
        const c = Bn(a, b);
        return function(d) {
            var e = d.da();
            d = gn[d.ka.g()];
            var f = q(e);
            f = c.j.g.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.g.contains(q(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.g.contains(q(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }
    const Jn = (a, b) => b.pa.g >= a,
        Un = (a, b, c) => {
            c = c.pa.l;
            return a <= c && c <= b
        };
    var Vn = qf(new kf(0, {})),
        Wn = qf(new kf(1, {}));

    function Xn(a, b, c) {
        lf(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class Yn {
        constructor() {
            this.g = new S
        }
    };
    class Zn {
        constructor(a) {
            this.j = this.g = !1;
            this.l = null;
            this.ub = a
        }
    }

    function $n(a, b) {
        var c = ao;
        const d = a.ka;
        if (!lf(c.g, d)) {
            var e = c.g,
                f = e.set;
            a = rn(a);
            a = null != a.g ? a.g.value : null;
            f.call(e, d, new Zn(null != a ? a : ""))
        }
        b(c.g.get(d))
    }

    function bo(a) {
        $n(a, b => {
            b.g = !0
        })
    }

    function co(a) {
        $n(a, b => {
            b.j = !0
        })
    }

    function eo(a, b) {
        $n(a, c => {
            c.l = b
        })
    }
    var ao = new class {
        constructor() {
            this.g = new S
        }
    };
    class fo {
        constructor(a) {
            this.j = a;
            this.g = -1
        }
    };

    function go(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function ho(a, b) {
        const c = a.m.filter(d => nf(d.mb).every(e => d.mb.get(e) === b.get(e)));
        return 0 === c.length ? (a.j.push(19), null) : c.reduce((d, e) => d.mb.nb() > e.mb.nb() ? d : e, c[0])
    }

    function io(a, b) {
        b = rn(b);
        if (null == b.g) return a.j.push(18), null;
        b = b.g.value;
        if (lf(a.g, b)) return a.g.get(b);
        var c = of (b);
        c = ho(a, c);
        a.g.set(b, c);
        return c
    }

    function jo(a, b) {
        let c;
        return (null == (c = io(a, b)) ? void 0 : c.Zc) || Number.MAX_VALUE
    };

    function ko(a) {
        return !!a.g && 0 < [...a.g.l.g()].length
    }

    function lo(a, b) {
        var c = b.pa.g,
            d = Math,
            e = d.min;
        const f = b.da(),
            g = b.ka.g();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? go(f.parentElement) : go(f));
        a = a.j;
        0 > a.g && (a.g = N(a.j).scrollHeight || 0);
        a = a.g - b.pa.g;
        a = c + (1E3 < a ? 0 : 2 * (1E3 - a));
        b.da();
        return a
    }

    function mo(a, b) {
        if (0 == b.g.length) return b;
        const c = af.S().g(Qe.g, Qe.defaultValue) || 0;
        return 0 == c && ko(a) || 0 < c && ko(a) && c < b.filter(d => {
            let e;
            d = (null == (e = io(a.g, d)) ? void 0 : e.ub) || "";
            return "" != d && !(d === Vn || d === Wn)
        }).g.length / b.g.length ? hf(b, (d, e) => jo(a.g, d) - jo(a.g, e)) : hf(b, (d, e) => lo(a, d) - lo(a, e))
    }

    function no(a, b) {
        return hf(b, (c, d) => {
            const e = c.ka.A,
                f = d.ka.A;
            var g;
            null == e || null == f ? g = null == e && null == f ? lo(a, c) - lo(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class oo {
        constructor(a) {
            this.j = new fo(a);
            this.g = null
        }
    };
    class po {
        constructor(a, b) {
            this.l = new gf(a);
            this.j = new oo(b);
            this.g = b;
            this.m = new Yn
        }
        find(a, b) {
            b = void 0 === b ? 0 : b;
            const c = a.hc ? a.hc : [0],
                d = "number" === typeof a.sb || null === a.sb ? a.sb : 0,
                e = "number" === typeof a.minWidth ? a.minWidth : 0,
                f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                g = "number" === typeof a.Nb ? a.Nb : 0,
                h = new T(a.dd || []);
            let l = this.l.filter((n, p) => !h.contains(p));
            l = R(R(R(R(R(R(R(l, Mn(c), qo(1, b)), Nn(a.Nc || []), qo(2, b)), Qn(a.Mc || []), qo(3, b)), Rn(a.ad || []), qo(4, b)), Sn(a.bd || []), qo(5, b)), On(a.$c || []), qo(6,
                b)), Ba(nn), qo(7, b));
            l = l.apply(Hn(this.g));
            ko(this.j) && ff(l, n => {
                bo(n);
                var p;
                null != (p = this.j.g) && (p = io(p, n), null != (null == p ? void 0 : p.ub) && eo(n, p.ub))
            });
            let k = l;
            null !== d && (k = a.Kc && a.Yb ? R(k, Ln(d, a.Yb, this.g, a.Sb), ro(16, b)) : R(k, Kn(d, this.g, a.Sb), ro(9, b)));
            k = R(k, ma(Un, e, f), ro(10, b));
            a.Rb && (k = R(k, Tn(this.g.document, a.Rb), ro(11, b)));
            k = R(R(k, In(this.g), ro(12, b)), Pn(g, this.g), ro(13, b));
            ko(this.j) && ff(k, n => co(n));
            k = a.fd ? no(this.j, k) : mo(this.j, k);
            a.cd && (k = jf(k, $a(this.g.location.href + this.g.localStorage.google_experiment_mod)));
            1 === c.length && Xn(this.m, c[0], {
                Lc: l.g.length,
                gd: k.g.length
            });
            return k.g.slice(0)
        }
    }
    const qo = (a, b) => c => on(c, b, a),
        ro = (a, b) => c => on(c.ka, b, a);
    var so = (a, b) => {
            var c = a.document.body;
            if (!c || !b) return Gd(Wd, "sci_evt", {
                amacerr: 1
            }, !0, .1, void 0), null;
            b = Gb(b, vd, 1);
            var d = [];
            for (let e = 0; e < b.length; e++) {
                const f = ln(b[e], e, a);
                null !== f && d.push(f)
            }
            b = new po(d, a);
            d = a.innerWidth;
            a = b.find({
                Wc: 0,
                minWidth: .85 * d,
                maxWidth: d,
                sb: 25,
                Nb: a.innerHeight
            });
            a = a.length ? a[0] : null;
            if (!a) return null;
            c = new Bi(c, !1);
            b = a.da();
            c = {
                node: c.g(b) || void 0,
                ib: void 0,
                identifier: {}
            };
            if (!c.node) throw Error("amac:n");
            b = tn(a.ka.g());
            if (null === b) throw Error("amac:p");
            return (c = (new Fl(c, b)).j()) ? {
                Za: c,
                wc: a.pa.g
            } : null
        },
        to = a => {
            var b = new vj;
            b.g = !0;
            b.v = .85;
            b.j = 1;
            b.m = 25;
            b.l = a.innerHeight;
            b.A = !0;
            return Zm(a, new uj(b))
        };

    function uo(a) {
        const b = le(a, !0),
            c = N(a).scrollWidth,
            d = N(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = O(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var n = [],
            p = [],
            u = [];
        let H = 0,
            C = 0,
            v = Infinity,
            A = Infinity,
            W = null;
        var D = cm({
            Hb: !1
        }, a);
        for (const U of D) {
            D = U.getBoundingClientRect();
            const nc = b - (D.bottom + f);
            var w = void 0,
                x = void 0;
            if (U.className && -1 != U.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                w = U.getAttribute("google_element_uid");
                x = a.google_sv_map;
                if (!w ||
                    !x || !x[w]) continue;
                a: {
                    var G = x[w];w = Number(G.google_ad_width);x = Number(G.google_ad_height);
                    if (!(0 < w && 0 < x)) {
                        b: {
                            try {
                                const fa = String(G.google_ad_format);
                                if (fa && fa.match) {
                                    const ib = fa.match(/(\d+)x(\d+)/i);
                                    if (ib) {
                                        const di = parseInt(ib[1], 10),
                                            ei = parseInt(ib[2], 10);
                                        if (0 < di && 0 < ei) {
                                            var ha = {
                                                width: di,
                                                height: ei
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (fa) {}
                            ha = null
                        }
                        G = ha;
                        if (!G) {
                            w = null;
                            break a
                        }
                        w = 0 < w ? w : G.width;x = 0 < x ? x : G.height
                    }
                    w = {
                        width: w,
                        height: x
                    }
                }
                w = (x = w) ? x.height : 0;
                x = x ? x.width : 0
            } else if (w = D.bottom - D.top, x = D.right - D.left, 1 >= w || 1 >= x) continue;
            g.push(w);
            l.push(x);
            k.push(w * x);
            U.className && -1 != U.className.indexOf("google-auto-placed") ? (C += 1, U.className && -1 != U.className.indexOf("pedestal_container") && (W = w)) : (v = Math.min(v, nc), p.push(D), H += 1, h.push(w), n.push(w * x));
            A = Math.min(A, nc);
            u.push(D)
        }
        v = Infinity === v ? null : v;
        A = Infinity === A ? null : A;
        f = vo(p);
        u = vo(u);
        h = wo(b, h);
        p = wo(b, g);
        n = wo(b * c, n);
        ha = wo(b * c, k);
        return new xo(a, {
            ac: e,
            Ob: b,
            rc: c,
            qc: d,
            Mb: H,
            Db: C,
            Eb: yo(g),
            Xb: yo(l),
            Wb: yo(k),
            oc: f,
            nc: u,
            lc: v,
            kc: A,
            $b: h,
            Zb: p,
            Vb: n,
            Ub: ha,
            tc: W
        })
    }

    function zo(a, b = 0) {
        a = uo(a);
        return ((a.g.Eb || 0) * (a.g.Mb + a.g.Db) + b) / (a.g.Ob + b)
    }

    function Ao(a, b) {
        const c = jc() && !(900 <= N(a.j).clientWidth),
            d = ra([], e => va(a.l, e)).join(",");
        return {
            wpc: "",
            su: b,
            eid: d,
            doc: a.g.ac,
            pg_h: Z(a.g.Ob),
            pg_w: Z(a.g.rc),
            pg_hs: Z(a.g.qc),
            c: Z(a.g.Mb),
            aa_c: Z(a.g.Db),
            av_h: Z(a.g.Eb),
            av_w: Z(a.g.Xb),
            av_a: Z(a.g.Wb),
            s: Z(a.g.oc),
            all_s: Z(a.g.nc),
            b: Z(a.g.lc),
            all_b: Z(a.g.kc),
            d: Z(a.g.$b),
            all_d: Z(a.g.Zb),
            ard: Z(a.g.Vb),
            all_ard: Z(a.g.Ub),
            pd_h: Z(a.g.tc),
            dt: c ? "m" : "d"
        }
    }
    class xo {
        constructor(a, b) {
            this.j = a;
            this.g = b;
            this.l = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function yo(a) {
        return Wb.apply(null, ra(a, b => 0 < b)) || null
    }

    function wo(a, b) {
        return 0 >= a ? null : Vb.apply(null, b) / a
    }

    function vo(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Z(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Bo(a, b) {
        var c;
        if (c = null != b) try {
            b.setItem("__storage_test__", "__storage_test__");
            const d = b.getItem("__storage_test__");
            b.removeItem("__storage_test__");
            c = "__storage_test__" == d
        } catch (d) {
            c = !1
        }
        b = c ? (b = Vf(b)) ? Uf(b) : null : null;
        a.g = b;
        a.g ? (a = a.g, a = !!a && 1 > a.length) : a = !1;
        return a
    }

    function Co(a, b) {
        try {
            if (!b || !Bo(a, b)) return !1;
            a.g.push(Date.now());
            const c = JSON.stringify(a.g);
            b.setItem("__lsv__", c);
            return b.getItem("__lsv__") == c
        } catch (c) {
            return !1
        }
    }
    class Do {
        constructor() {
            this.g = null
        }
    }
    ca(Do);

    function Eo() {}

    function Fo(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    var e = "";
                    for (var f = 0; f < b; f++) c.push(e), Fo(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Go(d, c), c.push(":"), Fo(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Go(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Ho = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Io = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Go(a, b) {
        b.push('"', a.replace(Io, function(c) {
            let d = Ho[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Ho[c] = d);
            return d
        }), '"')
    };

    function Jo(a, b) {
        if (a.$) Promise.resolve(!1);
        else {
            a.$ = !0;
            b = oe(b);
            a.V = "true" === b["i-fvs"];
            var c = b.i_expid;
            c && (a.M = c);
            b.qid && (a.N = b.qid);
            a.D = parseFloat(b.den_lim) || 0;
            b = parseInt(b.sti_lt, 10);
            isNaN(b) || (a.R = b);
            a.I = !0;
            if (Ko(a)) Promise.resolve(!1);
            else {
                var d = new Cf,
                    e = () => {
                        Lo(a, {
                            nip: 1,
                            ph: le(a.g, !0),
                            vh: a.g.innerHeight,
                            iplt: Date.now() - a.P,
                            ama: a.K,
                            url: a.g.location ? a.g.location.href : void 0
                        }, .1);
                        a.F.push("Could not locate a suitable placement in the content below the fold.");
                        tj(a.g, a.F);
                        d.g(!1)
                    },
                    f = (g, h) => {
                        Lo(a, {
                            iplt: Date.now() - a.P,
                            ama: a.K,
                            y: h
                        }, .01);
                        d.g(Mo(a, g))
                    };
                a.P = Date.now();
                a.K ? (b = so(a.g, a.ua)) && a.I && !Ko(a) ? f(b.Za, b.wc) : (Lo(a, {
                    amacerr: 1
                }, .1), e()) : to(a.g).then(g => {
                    if (a.I && !Ko(a)) return g.W().then(h => {
                        if (h.l) var l = h.l;
                        else h.j || (dj(h, !1), h.m()), l = h.j, !h.l && l && (h.l = l.j()), l = h.l;
                        f(h, l ? l.top : -1)
                    }, e);
                    d.g(!1)
                })
            }
        }
    }

    function Ko(a) {
        return a.V ? !1 : M(a.g).wasReactiveAdVisible[8] ? (Lo(a, {
            vigs: 1
        }, .1), !0) : !1
    }

    function Lo(a, b, c) {
        b = b || {};
        a.N && (b.qid = a.N);
        a.M && (b.eid = a.M);
        a.j && (b.tsl = Date.now() - a.j);
        a.T && (b.tslo = Date.now() - a.T, b.tl = a.ja);
        a.O.src && (b.req = a.O.src);
        Gd(Wd, "sci_evt", b, !0, c, void 0)
    }

    function Mo(a, b) {
        No(a) && Oo(a) && qj(a.l, b) && (a.j = Date.now(), Po(a), a.V ? Qo(a) : a.U.call(a.g, () => Ro(a)));
        tj(a.g, a.F);
        return !!a.j
    }

    function So(a) {
        a.G = !0;
        a.m = !1;
        kj(a.l, !1);
        a.v && (B(a.g, "orientationchange", a.v), a.v = null);
        a.A && (B(a.g, "resize", a.A), a.A = null)
    }

    function No(a) {
        const b = a.g.innerHeight;
        if (!b) return !1;
        var c = a.g;
        c = N(c).scrollWidth <= N(c).clientWidth;
        let d;
        if (!je(a.g)) return Lo(a, {
            lnd: 1
        }, .1), a.F.push("Landscape is not supported"), !1;
        if (a.D && (d = zo(a.g, b)) > a.D) return Lo(a, Object.assign({
            den: d,
            lim: a.D
        }, Ao(uo(a.g), a.g.location.hostname)), 1), a.F.push(`Insertion would cause ad density greater than ${100*a.D}%.`), !1;
        c || Lo(a, {
            Yc: 1
        }, .1);
        return !0
    }

    function Oo(a) {
        return a.Z ? !0 : Bo(Do.S(), a.aa)
    }

    function Po(a) {
        a.v = ce(519, () => {
            !a.G && a.m && Lo(a, {
                tto: Date.now() - a.j,
                por: je(a.g) ? 1 : 0
            }, .1)
        });
        z(a.g, "orientationchange", a.v);
        a.A = ce(520, () => {
            a.G || (a.l.B(), a.m && Lo(a, {
                ttre: Date.now() - a.j
            }, .1))
        });
        z(a.g, "resize", a.A)
    }

    function Qo(a) {
        if (!a.ba) {
            var b = a.O.contentWindow,
                c = b.postMessage;
            const d = [];
            Fo(new Eo, {
                msg_type: "i-view"
            }, d);
            c.call(b, d.join(""), Sf("googleads.g.doubleclick.net", ""));
            a.ba = !0
        }
    }

    function Ro(a) {
        if (!a.G)
            if (Ko(a)) So(a);
            else {
                var b = a.l.j.getBoundingClientRect().top,
                    c = a.g.innerHeight;
                a.l.B();
                .5 <= (c - b) / c && Qo(a);
                b < c && (M(a.g).wasReactiveAdVisible[9] = !0, a.Z || Co(Do.S(), a.aa), a.oa = !0);
                0 >= b ? (0 <= a.R && To(a), Lo(a, {
                    sice: !0,
                    vh: c,
                    gvto: b
                }, .1)) : a.U && a.U.call(a.g, () => Ro(a))
            }
    }

    function To(a) {
        a.T = Date.now();
        a.m = !0;
        a.ja++;
        rj(a.l);
        m.setTimeout(() => {
            if (a.m) {
                a.m = !1;
                var b = a.l;
                const c = b.j;
                I(c, {
                    top: Wc(b.m).y + "px"
                });
                I(c, {
                    position: "absolute"
                });
                pj(b)
            }
        }, Math.max(0, a.R))
    }
    class Uo extends we {
        constructor(a, b, c, d, e, f) {
            super(a);
            this.O = b;
            this.aa = f;
            this.Z = d;
            this.G = !1;
            this.M = null;
            this.V = this.I = this.$ = !1;
            this.F = [];
            this.m = !1;
            this.ja = this.T = this.j = 0;
            this.A = this.v = this.N = null;
            this.U = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
            this.ba = !1;
            this.l = new sj(b, a, e);
            this.oa = !1;
            this.P = this.R = 0;
            a = Db(c, 1);
            this.K = null == a ? !1 : a;
            this.ua = Fb(c, wh, 2);
            this.D = 0
        }
        va(a) {
            a["sti-fill"] = b => {
                Jo(this, b)
            };
            a["i-no"] =
                () => {
                    this.I = !1;
                    !this.oa && this.j && So(this)
                }
        }
    };
    class Vo extends Ef {
        constructor() {
            super();
            this.J = !1;
            this.B = null;
            this.D = !1
        }
        H(a) {
            this.J = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = Jb(wh, b)
            } catch (d) {
                c = null
            } else c = null;
            this.B = c;
            Array.isArray(a.fillMessage) && (this.D = !0);
            return !0
        }
    };
    class Wo {
        verifyAndProcessConfig(a, b, c) {
            var d = M(a);
            if (d.wasReactiveAdConfigReceived[9]) return !1;
            const e = new Vo;
            if (!Df(e, b)) return !1;
            d.wasReactiveAdConfigReceived[9] = !0;
            if (!e.j && !Bo(Do.S(), c)) return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            I(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.A || {};
            c.google_ad_client = e.l;
            c.google_ad_height = N(a).clientHeight || 0;
            c.google_ad_width = N(a).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            d = new xh;
            Eb(d, 1, e.J);
            if (e.B) {
                var f = e.B;
                d.j || (d.j = {});
                let g = f ? Hb(f) : f;
                d.j[2] = f;
                Eb(d, 2, g)
            }
            e.D && Eb(d, 3, !0);
            c.google_rasc = d.H();
            e.j && (c.google_adtest = "on");
            dg(b, c, a);
            return !0
        }
    }
    ca(Wo);
    const Xo = {
        overflow: "hidden",
        position: "fixed"
    };
    var Zo = (a, b) => {
        if (!a.body) return null;
        const c = new Yo;
        c.apply(a, b);
        return () => {
            K(a.body, {
                filter: c.g,
                webkitFilter: c.g,
                overflow: c.l,
                position: c.m,
                top: c.v
            });
            b.scrollTo(0, c.j)
        }
    };
    class Yo {
        constructor() {
            this.g = this.v = this.m = this.l = null;
            this.j = 0
        }
        apply(a, b) {
            this.l = a.body.style.overflow;
            this.m = a.body.style.position;
            this.v = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = O(b);
            K(a.body, "top", -this.j + "px");
            var c;
            (c = Q(Ze)) || (c = N(b).clientHeight, c = 1001 < N(b).clientWidth || 1001 < c);
            c || K(a.body, Xo)
        }
    };

    function $o(a, b) {
        const c = a.j;
        c && (b ? (I(c, {
            display: "block"
        }), a.m.body && !a.v && (a.v = Zo(a.m, a.g), a.v && a.A && K(a.m.body, ap)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.m.body.setAttribute("aria-hidden", "true")) : (I(c, {
            display: "none"
        }), a.v && (a.v(), a.v = null), a.m.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
    }

    function bp(a) {
        if (a = a.j) a.style.backgroundColor = "transparent"
    }

    function cp(a) {
        $o(a, !1);
        const b = a.j;
        b && (Pg(a, c => {
            I(c, dp);
            pe(c)
        }, !0), a.l.setAttribute("width", ""), a.l.setAttribute("height", ""), K(a.l, dp), K(a.l, ep), K(b, fp), Q(Ye) && K(b, {
            background: "transparent"
        }), I(b, {
            display: "none",
            position: "fixed"
        }), pe(b), pe(a.l))
    }
    class gp extends Qg {
        constructor(a, b, c) {
            super(a, b, c);
            this.A = !1;
            this.v = null;
            this.m = b.document
        }
    }
    const hp = {
            width: "100%",
            height: "100%",
            top: "auto",
            bottom: "0px"
        },
        ip = {
            "animation-name": "ggl-vgn-slideup",
            "-webkit-animation-name": "ggl-vgn-slideup",
            "animation-duration": "1s",
            "-webkit-animation-duration": "1s",
            "animation-timing-function": "ease",
            "-webkit-animation-timing-function": "ease"
        };
    var fp = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        dp = {
            width: "100vw",
            height: "100vh"
        },
        ep = {
            left: "0",
            position: "absolute",
            top: "0"
        },
        ap = {
            filter: "blur(5px)",
            webkitFilter: "blur(5px)"
        };
    class jp extends gp {
        constructor(a, b, c) {
            super(b, a, c);
            cp(this)
        }
        P(a) {
            return rh(a)
        }
    };

    function kp(a) {
        a = a.match(kc);
        const b = a[6];
        return (a[5] || "") + (b ? "?" + b : "") || "/"
    }

    function lp(a, b) {
        b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
    }

    function mp(a, b, c, d, e) {
        if (!c) return !1;
        switch (b.target) {
            case "_top":
            case "_parent":
                break;
            case "":
            case "_self":
                if (e) return !1;
                break;
            default:
                return !1
        }
        return !d || np(a, d) && kp(c) == a.m ? !1 : !0
    }

    function np(a, b) {
        return b.replace(op, "") == a.l.replace(op, "")
    }

    function pp(a, b, c) {
        if (ua(["data-google-vignette", "data-google-interstitial"], f => "false" === b.getAttribute(f) || !1)) return !1;
        const d = b.href,
            e = d && (d.match(kc)[3] || null);
        if (!mp(a, b, d, e, c)) return !1;
        a.j = !!e && np(a, e);
        return a.j || !c && !em(b) && /^https?:\/\//i.test(d) && !ua(af.S().m($e.g, $e.defaultValue), f => (new RegExp(f, "i")).test(d))
    }

    function qp(a, b) {
        if (!b || !a.g) return [];
        var c = [];
        Yf(b, c, !0, !0);
        b = c.join("");
        b = b.replace(Zf, " ").replace($f, "");
        b = b.replace(ag, "");
        b = b.replace(bg, " ");
        " " != b && (b = b.replace(cg, ""));
        if (!b) return [];
        a = b.match(a.g);
        b = [];
        for (c = 0; a && c < a.length; c++) {
            const d = a[c].toLowerCase();
            0 <= pa(b, d) || b.push(d)
        }
        return b
    }
    class rp {
        constructor(a) {
            this.g = null;
            this.l = a.match(kc)[3] || "";
            this.m = kp(a);
            this.j = !1
        }
    }
    var op = /^(www\.|m\.|mobile\.)*/i;

    function sp(a, b) {
        a.U && (b.qid = a.U);
        a.T && (b.eid = a.T);
        a.ba && (b.lnk = a.ba.substr(0, 100), a.m.j || (b.inter = "1"));
        const c = Kd();
        c && (b.ns = String(c));
        b.fs = String(Jd() - a.G);
        b.req = a.Fa.src;
        Gd(a.Da, "ia_evt", b, !0, .01)
    }

    function tp(a) {
        if (a.Z) sp(a, {
            dha: Date.now() - a.A
        }), up(a) ? a.g.history.back() : vp(a);
        else if (a.j) {
            var b = Date.now();
            a.g.addEventListener("pagehide", () => {
                sp(a, {
                    pg_hid: Date.now() - b
                })
            });
            a.P && (a.$ = !1);
            wp(a, a.j.href)
        }
    }

    function xp(a) {
        a.G && a.K && (a.O && (yp(a), zp(a)), (a = a.v.j) && a.setAttribute("data-vignette-loaded", "true"))
    }

    function up(a) {
        return -1 != a.g.location.hash.indexOf("google_vignette")
    }

    function vp(a) {
        a.A && (a.Ga = !0, a.l && (B(a.g.document, "click", a.l), a.l = null), a.F && a.F.parentNode && (a.F.parentNode.removeChild(a.F), a.F = null), a.D && a.D.parentNode && (a.D.parentNode.removeChild(a.D), a.D = null), $o(a.v, !1), a.Sa())
    }

    function wp(a, b) {
        a = a.g.location;
        b = Qc(b, Pc) || Lc;
        a.replace(Mc(b))
    }

    function Ap(a, b) {
        if (!a.G) {
            a.G = Jd();
            a.Na = "true" === b["i-fvs"];
            var c = b["i-bua"];
            if (c && a.g.navigator) {
                var d = a.g.navigator.userAgent;
                c = c.split(";");
                if (d && c)
                    for (var e = 0; e < c.length; e++)
                        if (0 <= d.indexOf(c[e])) return
            }
            if (d = b.i_expid) a.T = d;
            b.qid && (a.U = b.qid);
            "true" != b.translucent_bkg_vignette || Q(Ye) || bp(a.v);
            "true" == b.bottom_half_trans_bkg_vignette && (d = a.v, c = d.j) && (I(c, {
                width: "100%",
                height: "50%",
                top: "auto",
                bottom: "0px"
            }), K(d.l, hp));
            a.gb = "true" == b.switch_back_vignette;
            b.switch_back_vignette_animation && (a.ab = !0,
                a.fb = b.switch_back_vignette_animation);
            a.O = "true" === b.click_bubble;
            a.La = "true" === b.check_screen_change;
            d = Number(b.screen_size_threshold);
            Number.isNaN(d) || (a.ua = d);
            if ("true" == b.i_blur_bg) a: {
                d = a.v;c = d.j;
                for (e = 0; c && 25 > e; ++e) {
                    if (c.nodeName && "body" == c.nodeName.toString().toLowerCase()) break a;
                    c = c.parentElement
                }
                d.A = !0
            }
            "true" === b.iobs && a.g.IntersectionObserver && (a.aa = !0);
            if (b = b.stop_word)(b = b.split(";")) && b.length ? lp(a.m, b) : lp(a.m, null);
            a.O || (yp(a), zp(a));
            a.M = !0;
            a.R = null;
            a.Ia();
            xp(a)
        }
    }

    function Bp(a) {
        up(a) || (a.g.location.hash = "google_vignette");
        a.P = L(a.B, 526, r(a.zb, a));
        m.setTimeout(ma(z, a.g, "hashchange", a.P), 0)
    }

    function yp(a) {
        if (!a.l) {
            a.l = L(a.B, 527, d => Cp(a, d));
            var b = a.O ? {} : Rb;
            z(a.g.document, "click", a.l, b);
            var c = a.g.frames;
            for (let d = 0; d < c.length; d++) try {
                a.Ya(c[d].frameElement) || z(c[d].document, "click", a.l, b)
            } catch (e) {}
        }
    }

    function zp(a) {
        const b = a.g.document;
        1 === Rg(b) && z(b, "visibilitychange", L(a.B, 342, () => {
            if (!a.ja)
                if (1 === Rg(b)) {
                    var c = (new Date).getTime() - a.Ra;
                    a.ja = !0;
                    sp(a, {
                        vsbl: 1,
                        dur_hid: c
                    });
                    if (a.gb && a.oa()) {
                        a.A = Date.now();
                        a.Z = !0;
                        a.aa || Dp(a);
                        Bp(a);
                        bp(a.v);
                        if (a.ab) {
                            c = a.v;
                            const d = c.j;
                            if (d && "ggl-vgn-slideup" === a.fb) {
                                const e = fc(document, "STYLE");
                                e.type = "text/css";
                                e.appendChild(c.m.createTextNode("@keyframes ggl-vgn-slideup {0% { transform: translateY(100%); opacity: 0.5; }100% { transform: translateY(0); opacity: 1; }  }@-webkit-keyframes ggl-vgn-slideup { 0% { transform: translateY(100%); opacity: 0.5; } 100% { transform: translateY(0); opacity: 1; } }"));
                                I(d, ip);
                                c.m.body.appendChild(e)
                            }
                        }
                        a.$a = !0;
                        $o(a.v, !0)
                    }
                } else a.Ra = (new Date).getTime()
        }))
    }

    function Ep(a) {
        if (a.La) {
            var b = a.g.innerWidth / a.I.width - 1;
            if (0 > b && Math.abs(b) > a.ua) return !1;
            b = a.g.innerHeight / a.I.height - 1;
            return 0 > b && Math.abs(b) > a.ua ? !1 : !0
        }
        return a.I.width < a.I.height === je(a.g)
    }

    function Fp(a, b) {
        return Jd() - a.G < a.Ka && a.M && !a.Oa && !up(a) && !!a.K && (a.Na || !M(a.g).wasReactiveAdVisible[9]) && !qp(a.m, b).length && .05 > Math.abs(ke(a.g) - 1) && Ep(a)
    }

    function Gp(a, b, c) {
        a = a.g.document.createElement("link");
        a.setAttribute("rel", c);
        a.setAttribute("href", b);
        return a
    }

    function Hp(a, b) {
        for (b = b.target; b;) {
            if ("A" == b.nodeName) {
                if (pp(a.m, b, b.ownerDocument != a.g.document)) return b;
                break
            }
            b = b.parentElement
        }
        return null
    }

    function Cp(a, b) {
        if (b && !b.defaultPrevented && !a.A && !a.H && !a.j) {
            var c = Hp(a, b);
            c && (Fp(a, c) ? (a.j = c, Ec(b), b.preventDefault = () => b && (b.preventDefaultTriggered_ = !0), m.setTimeout(r(a.Ab, a, b), 0)) : Ip(a, c, !1))
        }
    }

    function Ip(a, b, c) {
        const d = a.g;
        var e = M(d);
        const f = !Ep(a);
        e = {
            zm: Number(.05 > Math.abs(ke(d) - 1)),
            sz: Number(f),
            fc: Number(a.M),
            vp: Number(up(a)),
            al: Number(!!a.K),
            fsi: Number(!!e.wasReactiveAdVisible[9]),
            ag: Number(Jd() - a.G < a.Ka)
        };
        c && (e.wsdojl = !0);
        f && (e.rs_sz = `${a.I.width}x${a.I.height}`, e.cr_sz = `${d.innerWidth}x${d.innerHeight}`);
        b = qp(a.m, b);
        b.length && (e.sw = b.join());
        a.R && (e.ts = a.R);
        sp(a, e)
    }

    function Dp(a) {
        a.Fa.contentWindow.postMessage(JSON.stringify({
            ["msg_type"]: "i-view"
        }), "*")
    }
    class Jp extends ve {
        constructor(a, b, c, d, e) {
            super(a, c);
            this.K = NaN;
            this.Fa = b;
            this.Ga = !1;
            this.j = null;
            this.Z = !1;
            this.T = null;
            this.G = NaN;
            this.Na = this.Oa = this.M = !1;
            this.$ = !0;
            this.ba = null;
            this.A = 0;
            this.l = this.F = this.D = this.U = null;
            this.P = void 0;
            this.R = null;
            this.v = d;
            this.ja = !1;
            this.Ra = 0;
            this.ab = this.gb = !1;
            this.fb = "";
            this.$a = !1;
            this.m = new rp(a.location.href);
            this.I = e;
            this.La = !1;
            this.ua = 0;
            this.Ka = af.S().g(Ve.g, Ve.defaultValue) || 864E5;
            this.aa = !1;
            this.Pb = Da(() => void sp(this, {
                tth: Date.now() - this.A,
                iswbv: this.$a
            }));
            this.O = !1
        }
        va(a) {
            a["i-adframe-load"] = () => {
                this.K || (this.K = Jd(), xp(this))
            };
            a["i-blur"] = () => {
                this.Z = !0;
                this.P && (this.$ = !0)
            };
            a["i-dismiss"] = () => {
                tp(this)
            };
            a["i-fill"] = b => {
                b = oe(b);
                Ap(this, b)
            };
            a["i-no"] = b => {
                this.M = !1;
                this.R = b.i_tslv ? b.i_tslv : null
            };
            a.i_iif = () => {
                this.Oa = !0
            }
        }
        Ia() {}
        zb() {
            this.$ && (up(this) ? (sp(this, {
                fnv: 1
            }), wp(this, this.j.href)) : (this.Pb(), vp(this)))
        }
        sa() {
            super.sa();
            up(this) && wp(this, this.j.href);
            this.l && (B(this.g.document, "click", this.l), this.l = null)
        }
        Sa() {}
        Ya() {
            return !1
        }
        Ab(a) {
            this.A || !this.j ||
                this.H || (a = a.preventDefaultTriggered_, !a && pp(this.m, this.j, this.j.ownerDocument != this.g.document) && Fp(this, this.j) ? this.oa() ? (this.A = Date.now(), M(this.g).wasReactiveAdVisible[8] = !0, this.ba = this.j.href.substr(0, 100), this.aa || Dp(this), a = this.j.href, this.F = Gp(this, a, "prerender"), this.D = Gp(this, a, "prefetch"), this.g.document.body.appendChild(this.F), this.g.document.body.appendChild(this.D), Bp(this), a = L(this.B, 528, r(this.Bb, this)), z(this.g, "pagehide", a), $o(this.v, !0), this.ja && sp(this, {
                    vsbl: 2
                })) : wp(this,
                    this.j.href) : (Ip(this, this.j, a), a ? this.j = null : wp(this, this.j.href)))
        }
        oa() {
            return !0
        }
        Bb() {
            this.Ga || sp(this, {
                ed: Date.now() - this.A
            });
            vp(this)
        }
    };

    function Kp(a, b) {
        b = b || a.g.document;
        if (!b.getElementById("vignette-style-id")) {
            var c = ic(Zb(b), "STYLE");
            c.id = "vignette-style-id";
            c.textContent = "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
            b.head.appendChild(c);
            a.N.push(c)
        }
    }

    function Lp(a, b, c) {
        let d = 0;
        for (let e = b.links.length; 0 <= e; e--) {
            const f = b.links[e];
            f && (f.classList.remove("google_vignette_inst"), pp(a.m, f, c) && !qp(a.m, f).length && (d++, f.classList.add("google_vignette_inst")))
        }
        return d
    }
    class Mp extends Jp {
        constructor(a, b, c, d, e, f) {
            super(a, b, Yd, new jp(a, b, e), d);
            this.yb = f;
            this.N = [];
            this.V = 0;
            this.Pa = ld(this.g.location, "google_ia_debug");
            this.xb = c
        }
        Sa() {
            if (this.Pa) {
                for (let b = 0; b < this.N.length; ++b) {
                    var a = this.N[b];
                    (a = a.ownerNode || a.owningElement || a) && a.parentNode && a.parentNode.removeChild(a)
                }
                this.N = [];
                this.V && m.clearInterval(this.V)
            }
        }
        Ia() {
            this.Pa && (this.Ja(), this.V = m.setInterval(r(this.Ja, this), 5E3))
        }
        Ja() {
            let a = Lp(this, this.g.document, !1);
            Kp(this);
            var b = this.g.frames;
            for (let c = 0; c < b.length; c++) try {
                a +=
                    Lp(this, b[c].document, !0), Kp(this, b[c].document)
            } catch (d) {}
            b = M(this.g).tagSpecificState[1] || null;
            null != b && (b = wf(b, 1), null != b && b.setLinksInstrumented(a))
        }
        oa() {
            return this.xb || Co(Do.S(), this.yb)
        }
        Ya(a) {
            return /aswift_[0-9]+/.test(a.id)
        }
    };
    class Np {
        verifyAndProcessConfig(a, b, c) {
            const d = M(a);
            if (d.wasReactiveAdConfigReceived[8]) return !1;
            const e = new Ef;
            if (!Df(e, b)) return !1;
            d.wasReactiveAdConfigReceived[8] = !0;
            if (!e.j && !Bo(Do.S(), c)) return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            I(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.A || {};
            c.google_ad_client = e.l;
            c.google_ad_width = e.v;
            c.google_ad_height = e.m;
            c.google_reactive_ad_format = 8;
            e.g && (c.google_reactive_fill_message = e.g);
            e.j && (c.google_adtest = "on");
            dg(b, c, a);
            return !0
        }
    }
    ca(Np);
    class Op {
        configProcessorForAdFormat(a) {
            switch (a) {
                case 1:
                case 2:
                    return new gg(a);
                case 8:
                    return Np.S();
                case 9:
                    return Wo.S();
                default:
                    return null
            }
        }
        createAdSlot(a, b, c, d, e) {
            a: {
                var f = b.google_reactive_ad_format;
                switch (f) {
                    case 1:
                    case 2:
                        e = Bf(a, f);
                        if (Q(Je) && 2 == f && "top" != e) break;
                        c = new sh(c, a, e, d);
                        a = new uh(a, c);
                        ea(b.google_reactive_fill_message) && th(a, b.google_reactive_fill_message);
                        break a;
                    case 8:
                        a = new Mp(a, c, "on" == b.google_adtest, new Yb(b.google_ad_width, b.google_ad_height), d, e);
                        ea(b.google_reactive_fill_message) &&
                            Ap(a, b.google_reactive_fill_message);
                        break a;
                    case 9:
                        f = b.google_rasc;
                        if (void 0 === f || null === f) var g = null;
                        else try {
                            g = Jb(xh, f)
                        } catch (h) {
                            Gd(Wd, "rasf_fsi_ama", {}, !0, .1, void 0), g = null
                        }
                        g = g || new xh;
                        new Uo(a, c, g, "on" == b.google_adtest, d, e)
                }
            }
        }
    };
    var Pp = a => {
        Yd.Va = b => {
            b.shv = String(a);
            b.mnvr = "";
            var c = Ge.S().g();
            m.google_ad_modifications || (m.google_ad_modifications = {});
            var d = m.google_ad_modifications;
            d.eids || (d.eids = []);
            (c = c.concat(d.eids).join(",")) && (b.eid = 50 < c.length ? c.substring(0, 50) + "T" : c)
        }
    };
    var Nb = a => "string" === typeof a;
    var Mb = "undefined" === typeof sttc ? void 0 : sttc;

    function Qp() {
        try {
            return Lb(), new wd(JSON.parse(Mb))
        } catch (a) {
            Yd.rb(838, a instanceof Error ? a : Error(String(a)), void 0, b => {
                b.jspb = String(Mb)
            })
        }
        return new wd
    };
    be(210, () => {
        var a = Qp();
        a = y(a, 2);
        Pp(null == a ? "" : a);
        df(void 0);
        a = new Op;
        m.google_llp || (m.google_llp = {});
        const b = m.google_llp;
        b[1] || (b[1] = new Tf);
        b[1].resolve(a)
    });
}).call(this, "[2019,\"r20210524\",\"\/r20190131\",null,[],null,null,\".google.co.in\"]");