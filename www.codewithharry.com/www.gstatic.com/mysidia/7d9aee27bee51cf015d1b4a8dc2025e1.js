(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var n = this || self;

    function p(a, b) {
        return a.g ? a.j.slice(0, a.g.index) + b + a.j.slice(a.g.index) : a.j + b
    }

    function q(a, b) {
        return a.i && a.h || a.l ? 1 == b ? a.i ? a.h : p(a, "&dct=1") : 2 == b ? p(a, "&ri=2") : p(a, "&ri=16") : a.j
    }
    var aa = class {
        constructor({
            url: a
        }) {
            this.j = a;
            const b = /[?&]dsh=1(&|$)/.test(a);
            this.i = !b && /[?&]ae=1(&|$)/.test(a);
            this.l = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.h = c
            }
        }
    };

    function r(a) {
        return -1 != ba.indexOf(a)
    };
    var t = class {
        constructor(a, b) {
            this.g = b === ca ? a : ""
        }
    };
    t.prototype.i = !0;
    t.prototype.h = function() {
        return this.g.toString()
    };
    t.prototype.toString = function() {
        return this.g.toString()
    };

    function da(a) {
        return a instanceof t && a.constructor === t ? a.g : "type_error:SafeUrl"
    }
    var ea = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        ca = {};

    function fa(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    var ba;
    a: {
        var ha = n.navigator;
        if (ha) {
            var ia = ha.userAgent;
            if (ia) {
                ba = ia;
                break a
            }
        }
        ba = ""
    };

    function ka(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function u(a, b) {
        b instanceof t || b instanceof t || (b = "object" == typeof b && b.i ? b.h() : String(b), ea.test(b) || (b = "about:invalid#zClosurez"), b = new t(b, ca));
        a.href = da(b)
    };

    function la() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };

    function na() {
        return r("iPhone") && !r("iPod") && !r("iPad")
    };

    function oa(a) {
        oa[" "](a);
        return a
    }
    oa[" "] = function() {};
    var pa = na(),
        qa = r("iPad");
    var ra = na() || r("iPod"),
        sa = r("iPad");
    var ta = {},
        x = null;
    var ua = "function" === typeof Uint8Array;

    function va(a) {
        let b;
        if (Array.isArray(a)) {
            var c = Array(a.length);
            for (var d = 0; d < a.length; d++) b = a[d], null != b && (c[d] = "object" == typeof b ? va(b) : b);
            return c
        }
        if (ua && a instanceof Uint8Array) return new Uint8Array(a);
        c = {};
        for (d in a) b = a[d], null != b && (c[d] = "object" == typeof b ? va(b) : b);
        return c
    };

    function wa(a) {
        if (a.i) {
            if (a.j) {
                var b = a.g;
                for (d in b)
                    if (Object.prototype.hasOwnProperty.call(b, d)) {
                        var c = b[d].g;
                        c && c.m()
                    }
            }
        } else {
            a.h.length = 0;
            var d = y(a);
            d.sort();
            for (b = 0; b < d.length; b++) {
                let e = a.g[d[b]];
                (c = e.g) && c.m();
                a.h.push([e.key, e.value])
            }
            a.i = !0
        }
        return a.h
    }

    function y(a) {
        a = a.g;
        var b = [],
            c;
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b
    }

    function xa(a, b) {
        return a.j ? (b.g || (b.g = new a.j(b.value), a.isFrozen() && null(b.g)), b.g) : b.value
    }

    function ya(a, b) {
        var c = y(a);
        c.sort();
        for (var d = 0; d < c.length; d++) {
            let e = a.g[c[d]];
            b.call(void 0, xa(a, e), e.key, a)
        }
    }
    class za {
        constructor(a, b) {
            this.h = a;
            this.j = b;
            this.g = {};
            this.i = !0;
            if (0 < this.h.length) {
                for (a = 0; a < this.h.length; a++) {
                    b = this.h[a];
                    var c = b[0];
                    this.g[c.toString()] = new Aa(c, b[1])
                }
                this.i = !0
            }
        }
        isFrozen() {
            return !1
        }
        m() {
            return wa(this)
        }
        J() {
            return wa(this)
        }
        entries() {
            var a = [],
                b = y(this);
            b.sort();
            for (var c = 0; c < b.length; c++) {
                let d = this.g[b[c]];
                a.push([d.key, xa(this, d)])
            }
            return new Ba(a)
        }
        keys() {
            var a = [],
                b = y(this);
            b.sort();
            for (var c = 0; c < b.length; c++) a.push(this.g[b[c]].key);
            return new Ba(a)
        }
        values() {
            var a = [],
                b = y(this);
            b.sort();
            for (var c = 0; c < b.length; c++) a.push(xa(this, this.g[b[c]]));
            return new Ba(a)
        }
        set(a, b) {
            var c = new Aa(a);
            this.j ? (c.g = b, c.value = b.J()) : c.value = b;
            this.g[a.toString()] = c;
            this.i = !1;
            return this
        }
        get(a) {
            if (a = this.g[a.toString()]) return xa(this, a)
        }
        has(a) {
            return a.toString() in this.g
        }[Symbol.iterator]() {
            return this.entries()
        }
    }
    class Aa {
        constructor(a, b) {
            this.key = a;
            this.value = b;
            this.g = void 0
        }
    }
    class Ba {
        constructor(a) {
            this.h = 0;
            this.g = a
        }
        next() {
            return this.h < this.g.length ? {
                done: !1,
                value: this.g[this.h++]
            } : {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return this
        }
    };

    function z() {}
    let A;

    function B(a, b, c) {
        a.g = null;
        A && (b || (b = A), A = null);
        var d = a.constructor.O,
            e = a.constructor.N;
        e = d || e;
        b || (b = e ? [d] : []);
        a.j = e ? 0 : -1;
        a.h = b;
        a: {
            if (b = a.h.length)
                if (--b, d = a.h[b], !(null === d || "object" != typeof d || Array.isArray(d) || ua && d instanceof Uint8Array)) {
                    a.l = b - a.j;
                    a.i = d;
                    break a
                }
            a.l = Number.MAX_VALUE
        }
        a.u = {};
        if (c)
            for (b = 0; b < c.length; b++) d = c[b], d < a.l ? (d += a.j, a.h[d] = a.h[d] || C) : (Ca(a), a.i[d] = a.i[d] || C)
    }
    const C = [];

    function Ca(a) {
        let b = a.l + a.j;
        a.h[b] || (a.i = a.h[b] = {})
    }

    function F(a, b) {
        if (b < a.l) {
            b += a.j;
            var c = a.h[b];
            return c !== C ? c : a.h[b] = []
        }
        if (a.i) return c = a.i[b], c === C ? a.i[b] = [] : c
    }

    function G(a, b, c) {
        a = F(a, b);
        return null == a ? c : a
    }

    function J(a, b) {
        return G(a, b, "")
    }

    function K(a, b) {
        a = F(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function L(a, b, c) {
        a.g || (a.g = {});
        if (b in a.g) return a.g[b];
        let d = F(a, b);
        d || (d = [], M(a, b, d));
        c = new za(d, c);
        return a.g[b] = c
    }

    function M(a, b, c) {
        b < a.l ? a.h[b + a.j] = c : (Ca(a), a.i[b] = c);
        return a
    }

    function N(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            let d = F(a, c);
            d && (a.g[c] = new b(d))
        }
        return a.g[c]
    }

    function Da(a) {
        var b = Ha;
        a.g || (a.g = {});
        if (!a.g[7]) {
            let c = F(a, 7),
                d = [];
            for (let e = 0; e < c.length; e++) d[e] = new b(c[e]);
            a.g[7] = d
        }
        b = a.g[7];
        b == C && (b = a.g[7] = []);
        return b
    }

    function Ia(a) {
        if (a.g)
            for (var b in a.g) {
                var c = a.g[b];
                if (Array.isArray(c))
                    for (var d = 0; d < c.length; d++) c[d] && c[d].m();
                else c && c.m()
            }
    }
    z.prototype.m = function() {
        Ia(this);
        return this.h
    };
    z.prototype.J = function() {
        Ia(this);
        return this.h
    };
    z.prototype.o = ua ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b;
            void 0 === b && (b = 0);
            if (!x) {
                x = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    ta[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var k = f[g];
                        void 0 === x[k] && (x[k] = g)
                    }
                }
            }
            b = ta[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                var l = this[d],
                    h = (e = d + 1 < this.length) ? this[d + 1] : 0;
                k = (f = d + 2 < this.length) ? this[d + 2] : 0;
                g = l >> 2;
                l = (l & 3) << 4 | h >> 4;
                h = (h & 15) << 2 | k >> 6;
                k &= 63;
                f || (k = 64, e || (h = 64));
                c.push(b[g], b[l], b[h] || "", b[k] || "")
            }
            return c.join("")
        };
        try {
            return JSON.stringify(this.h && this.m(), Ja)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.h && this.m(), Ja)
    };

    function Ja(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }
    z.prototype.toString = function() {
        return this.m().toString()
    };

    function Ka(a) {
        const b = va(a.m());
        A = b;
        a = new a.constructor(b);
        A = null;
        return a
    };
    var La = class extends z {
        constructor(a) {
            super();
            B(this, a, null)
        }
    };
    var Ma = class extends z {
        constructor(a) {
            super();
            B(this, a, null)
        }
    };
    var Oa = class extends z {
            constructor(a) {
                super();
                B(this, a, Na)
            }
        },
        Ha = class extends z {
            constructor(a) {
                super();
                B(this, a, null)
            }
            s() {
                return J(this, 3)
            }
            I(a) {
                M(this, 5, a)
            }
        },
        Pa = class extends z {
            constructor(a) {
                super();
                B(this, a, null)
            }
            s() {
                return J(this, 1)
            }
            I(a) {
                M(this, 2, a)
            }
        },
        Qa = class extends z {
            constructor(a) {
                super();
                B(this, a, null)
            }
        },
        Na = [6, 7];
    var Sa = class extends z {
            constructor(a) {
                super();
                B(this, a, Ra)
            }
        },
        Ra = [17];
    var Ta = class extends z {
        constructor(a) {
            super();
            B(this, a, null)
        }
    };
    class Ua {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    var Va = {
            capture: !0
        },
        Wa = {
            passive: !0
        },
        Xa = ka(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ya(a) {
        return a ? a.passive && Xa() ? a : a.capture || !1 : !1
    }

    function O(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ya(d))
    }

    function Za(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, Ya(void 0))
    };
    var $a = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function ab(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.substr(0, c), d, a.substr(b)]
    }

    function bb(a, b) {
        return b ? a ? a + "&" + b : b : a
    }

    function cb(a, b) {
        if (!b) return a;
        a = ab(a);
        a[1] = bb(a[1], b);
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function db(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) db(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function eb(a) {
        var b = [],
            c;
        for (c in a) db(c, a[c], b);
        return b.join("&")
    }

    function fb() {
        var a = la();
        a = null != a ? "=" + encodeURIComponent(String(a)) : "";
        return cb("https://pagead2.googlesyndication.com/pagead/gen_204", "zx" + a)
    }

    function gb(a, b) {
        a = ab(a);
        var c = a[1],
            d = [];
        c && c.split("&").forEach(function(e) {
            var f = e.indexOf("=");
            b.hasOwnProperty(0 <= f ? e.substr(0, f) : e) || d.push(e)
        });
        a[1] = bb(d.join("&"), eb(b));
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };

    function ib(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    oa(a.foo);
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

    function jb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
    let kb = [];
    const lb = () => {
        const a = kb;
        kb = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var nb = a => {
            kb.push(a);
            1 == kb.length && (window.Promise ? Promise.resolve().then(lb) : window.setImmediate ? setImmediate(lb) : setTimeout(lb, 0))
        },
        ob = a => {
            var b = P;
            "complete" === b.readyState || "interactive" === b.readyState ? nb(a) : b.addEventListener("DOMContentLoaded", a)
        },
        pb = a => {
            var b = window;
            "complete" === b.document.readyState ? nb(a) : b.addEventListener("load", a)
        };

    function Q(a, b, c = null) {
        qb(a, b, c)
    }

    function qb(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        const d = a.document.createElement("img");
        if (c) {
            const e = f => {
                c && c(f);
                Za(d, "load", e);
                Za(d, "error", e)
            };
            O(d, "load", e);
            O(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    };
    let rb = 0;

    function sb(a) {
        return (a = tb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function tb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function ub(a) {
        if (!(.01 < Math.random())) {
            a = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${sb(a)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Q(b, a)
        }
    };
    var P = document,
        R = window;
    var vb = {};
    var wb = class {};
    class xb extends wb {
        constructor(a) {
            super();
            if (vb !== vb) throw Error("Bad secret");
            this.g = a
        }
        toString() {
            return this.g
        }
    }
    var yb = new xb("about:invalid#zTSz");

    function zb(a) {
        if (a instanceof wb)
            if (a instanceof xb) a = a.g;
            else throw Error("wrong type");
        else a = da(a);
        return a
    };
    class Ab {
        constructor(a) {
            this.M = a
        }
    }

    function S(a) {
        return new Ab(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Bb = new Ab(a => /^[^:]*([/?#]|$)/.test(a));
    var Cb = S("http"),
        Db = S("https"),
        Eb = S("ftp"),
        Fb = S("mailto");
    const Gb = [S("data"), Cb, Db, Fb, Eb, Bb];

    function Hb(a, b = Gb) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Ab && d.M(a)) return new xb(a)
        }
    }

    function Ib(a, b = Gb) {
        return Hb(a, b) || yb
    };
    const Nb = [Cb, Db, Fb, Eb, Bb, S("market"), S("itms"), S("intent"), S("itms-appss")];

    function Ob(a, b) {
        if (a instanceof t) return a;
        const c = Ib(a, Nb);
        c === yb && b(a);
        return new t(zb(c), ca)
    }
    var Pb = a => {
        var b = `${"http:"===R.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = eb({
                id: "unsafeurl",
                ctx: a,
                url: c
            });
            c = cb(b, c);
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };
    var Qb = !!window.google_async_iframe_id;
    let T = Qb && window.parent || window;
    var Rb = a => {
        var b = P;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    const Sb = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var Tb = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Ub = class {
            constructor(a, b) {
                this.url = a;
                this.H = !!b;
                this.depth = null
            }
        };

    function Vb(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Wb(a, b, c, d, e) {
        const f = [];
        jb(a, function(g, k) {
            (g = Xb(g, b, c, d, e)) && f.push(k + "=" + g)
        });
        return f.join(b)
    }

    function Xb(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Xb(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Wb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Yb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Zb(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = Yb(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                k = a.h[g];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let h = Wb(k[l], a.i, ",$");
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
    class $b {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function ac(a, b, c, d, e, f) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let g;
            c instanceof $b ? g = c : (g = new $b, jb(c, (l, h) => {
                var m = g,
                    v = m.j++;
                l = Vb(h, l);
                m.g.push(v);
                m.h[v] = l
            }));
            const k = Zb(g, a.h, "/pagead/gen_204?id=" + b + "&");
            k && ("undefined" !== typeof f ? Q(n, k, f) : Q(n, k))
        } catch (g) {}
    }
    class bc {
        constructor() {
            this.h = "http:" === R.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        }
    };
    let cc = null;
    var dc = () => {
            const a = n.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
        },
        ec = () => {
            const a = n.performance;
            return a && a.now ? a.now() : null
        };
    class fc {
        constructor(a, b) {
            var c = ec() || dc();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const U = n.performance,
        gc = !!(U && U.mark && U.measure && U.clearMarks),
        W = ka(() => {
            var a;
            if (a = gc) {
                var b;
                if (null === cc) {
                    cc = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (cc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = cc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function hc(a) {
        a && U && W() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class ic {
        constructor() {
            var a = X;
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = W() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new fc(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && W() && U.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (ec() || dc()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && W() && U.mark(b);
                !this.g || 2048 < this.h.length ||
                    this.h.push(a)
            }
        }
    };

    function jc(a) {
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

    function kc(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                hc(e), c = a.o(b, new Ua(f, {
                    message: jc(f)
                }), void 0, void 0)
            } catch (g) {
                a.l(217, g)
            }
            if (c) {
                let g, k;
                null == (g = window.console) || null == (k = g.error) || k.call(g, f)
            } else throw f;
        }
        return d
    }

    function lc(a, b) {
        var c = mc;
        return (...d) => kc(c, a, () => b.apply(void 0, d))
    }
    class nc {
        constructor() {
            var a = oc;
            this.i = Y;
            this.h = null;
            this.o = this.l;
            this.g = void 0 === a ? null : a;
            this.j = !1
        }
        pinger() {
            return this.i
        }
        l(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const D = new $b;
                var g = D;
                g.g.push(1);
                g.h[1] = Vb("context", a);
                b.error && b.meta && b.id || (b = new Ua(b, {
                    message: jc(b)
                }));
                if (b.msg) {
                    g = D;
                    var k = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Vb("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (H) {}
                if (d) try {
                    d(b)
                } catch (H) {}
                d = D;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = n;
                l = [];
                b = null;
                do {
                    var h = d;
                    if (ib(h)) {
                        var m =
                            h.location.href;
                        b = h.document && h.document.referrer || null
                    } else m = b, b = null;
                    l.push(new Ub(m || ""));
                    try {
                        d = h.parent
                    } catch (H) {
                        d = null
                    }
                } while (d && h != d);
                for (let H = 0, Jb = l.length - 1; H <= Jb; ++H) l[H].depth = Jb - H;
                h = n;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var v = l[m];
                        v.url || (v.url = h.location.ancestorOrigins[m - 1] || "", v.H = !0)
                    }
                var w = l;
                let ma = new Ub(n.location.href, !1);
                h = null;
                const Ea = w.length - 1;
                for (v = Ea; 0 <= v; --v) {
                    var E = w[v];
                    !h && Sb.test(E.url) && (h =
                        E);
                    if (E.url && !E.H) {
                        ma = E;
                        break
                    }
                }
                E = null;
                const Ec = w.length && w[Ea].url;
                0 != ma.depth && Ec && (E = w[Ea]);
                f = new Tb(ma, E);
                if (f.h) {
                    w = D;
                    var I = f.h.url || "";
                    w.g.push(4);
                    w.h[4] = Vb("top", I)
                }
                var Fa = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var Ga = f.g.url.match($a),
                        V = Ga[1],
                        Kb = Ga[3],
                        Lb = Ga[4];
                    I = "";
                    V && (I += V + ":");
                    Kb && (I += "//", I += Kb, Lb && (I += ":" + Lb));
                    var Mb = I
                } else Mb = "";
                V = D;
                Fa = [Fa, {
                    url: Mb
                }];
                V.g.push(5);
                V.h[5] = Fa;
                ac(this.i, e, D, this.j, c)
            } catch (D) {
                try {
                    ac(this.i, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: jc(D),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (ma) {}
            }
            return !0
        }
    };
    let Y, mc;
    if (Qb && !ib(T)) {
        let a = "." + P.domain;
        try {
            for (; 2 < a.split(".").length && !ib(T);) P.domain = a = a.substr(a.indexOf(".") + 1), T = window.parent
        } catch (b) {}
        ib(T) || (T = window)
    }
    const X = T,
        oc = new ic;
    var pc = () => {
        if (!X.google_measure_js_timing) {
            var a = oc;
            a.g = !1;
            a.h != a.i.google_js_reporting_queue && (W() && Array.prototype.forEach.call(a.h, hc, void 0), a.h.length = 0)
        }
    };
    Y = new bc;
    "number" !== typeof X.google_srt && (X.google_srt = Math.random());
    var qc = Y,
        rc = X.google_srt;
    0 <= rc && 1 >= rc && (qc.g = rc);
    mc = new nc;
    mc.h = a => {
        const b = rb;
        0 !== b && (a.jc = String(b), a.shv = sb(b))
    };
    mc.j = !0;
    "complete" == X.document.readyState ? pc() : oc.g && O(X, "load", () => {
        pc()
    });
    var sc = (a, b) => lc(a, b);
    var tc = (a, b) => {
            b = J(a, 2) || b;
            if (!b) return "";
            if (K(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            ya(L(a, 4, null), (e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        uc = (a, b) => {
            b = void 0 === b ? [] : b;
            b = 0 < b.length ? b : Rb("data-asoch-targets");
            a = L(a, 1, Oa);
            const c = [];
            for (let k = 0; k < b.length; ++k) {
                var d = b[k].getAttribute("data-asoch-targets"),
                    e = d.split(","),
                    f = !0;
                for (let l of e)
                    if (!a.has(l)) {
                        f = !1;
                        break
                    }
                if (f) {
                    f =
                        a.get(e[0]);
                    for (d = 1; d < e.length; ++d) {
                        var g = a.get(e[d]);
                        f = Ka(f).m();
                        g = g.m();
                        const l = Math.max(f.length, g.length);
                        for (let h = 0; h < l; ++h) null == f[h] && (f[h] = g[h]);
                        f = new Oa(f)
                    }
                    e = L(f, 4, null);
                    null != F(f, 5) && e.set("nb", G(f, 5, 0).toString());
                    c.push({
                        element: b[k],
                        data: f
                    })
                } else ac(Y, "gdn-asoch", {
                    type: 1,
                    data: d
                }, !0, void 0, void 0)
            }
            return c
        },
        vc = (a, b, c, d) => {
            c = tc(b, c);
            0 < c.length && (u(a, Ob(c, Pb(d))), a.target || (a.target = null != F(b, 11) ? J(b, 11) : "_top"), null != F(b, 18) && (b = N(b, La, 18), a.setAttribute("conversiondestination", J(b, 2)),
                a.setAttribute("impressiondata", J(b, 1)), a.setAttribute("reportingorigin", J(b, 3)), a.setAttribute("impressionexpiry", J(b, 4))))
        },
        wc = a => {
            var b = void 0 === b ? "" : b;
            for (const d of a) {
                a = d.data;
                var c = 0 === b.length ? !1 : d.element.matches(b);
                "A" != d.element.tagName || K(a, 1) || c || (c = d.element, vc(c, a, c.href, 609))
            }
        },
        xc = a => {
            const b = window.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && null != F(a, 8) && (a = J(N(a, Qa, 8), 4))) {
                        b.fetchAppStoreOverlay(a);
                        break
                    }
        },
        yc = (a, b) => {
            b = void 0 === b ? 500 : b;
            const c = [],
                d = [];
            for (var e of a)(a =
                e.data) && null != F(a, 12) && (d.push(N(a, Pa, 12)), c.push(N(a, Pa, 12).s()));
            e = (f, g) => {
                if (g)
                    for (const k of d) k.I(g[k.s()] || !1)
            };
            a = window.oneAfmaInstance;
            for (const f of c) a.canOpenAndroidApp(f, e, () => {}, b)
        },
        Ac = (a, b, c, d, e) => {
            if (a || !b || null == F(b, 12)) return !1;
            const f = N(b, Pa, 12).s();
            a = "";
            if (0 < Da(b).length)
                for (const g of Da(b)) a += J(g, 2) + " " + g.s() + " ";
            if (K(N(b, Pa, 12), 2)) return zc({
                    id: "gmob-apps",
                    event: "och-open-android-app-before-click",
                    deepLinks: a,
                    appId: f,
                    isDeepLinkPath: !1,
                    exptIds: e
                }), d.click(c), d.openAndroidApp(f),
                setTimeout(() => {
                    var g = {
                        id: "gmob-apps",
                        event: "och-open-android-app",
                        appId: f,
                        isDeepLinkPath: !1,
                        exptIds: e
                    };
                    Z(gb(fb(), g))
                }, 1E3), !0;
            zc({
                id: "gmob-apps",
                event: "och-open-android-app-validated-false",
                deepLinks: a,
                appId: f,
                isDeepLinkPath: !1,
                exptIds: e
            });
            return !1
        },
        Bc = (a, b, c, d, e, f) => {
            if (!c || null == F(c, 8)) return !1;
            const g = N(c, Qa, 8);
            let k = J(g, 2);
            ya(L(c, 10, null), (l, h) => {
                var m = k;
                h = encodeURIComponent(h);
                const v = encodeURIComponent(l);
                l = new RegExp("[?&]" + h + "=([^&]+)");
                const w = l.exec(m);
                console.log(w);
                h = h + "=" + v;
                k = w ? m.replace(l,
                    w[0].charAt(0) + h) : m.replace("?", "?" + h + "&")
            });
            zc({
                id: "gmob-apps",
                event: "och-try-u2-redirect",
                appId: J(g, 4) || "",
                isIos: a,
                isDeepLinkPath: !1,
                exptIds: f
            });
            c = e.openIntentOrNativeApp;
            if (a && (null == b ? 0 : K(b, 6))) c = e.openSKOverlayWithUrl;
            else if (null == b ? 0 : K(b, 1))(null == b ? 0 : K(b, 5)) ? c = l => e.openStoreOverlay(l, () => e.openSKOverlayWithUrl(k)) : c = e.openStoreOverlay;
            return e.redirectForStoreU2({
                clickUrl: d,
                trackingUrl: J(g, 3),
                finalUrl: k,
                pingFunc: e.click,
                openFunc: c
            })
        },
        Cc = (a, b) => {
            b = void 0 === b ? null : b;
            if (null !== b) {
                const c = new aa({
                    url: a
                });
                if (c.i && c.h || c.l) return b(p(c, "&act=1&ri=1")), q(c, 1)
            } else return b = new aa({
                url: a
            }), b.i && b.h || b.l ? navigator.sendBeacon ? navigator.sendBeacon(p(b, "&act=1&ri=1"), "") ? q(b, 1) : q(b, 2) : q(b, 0) : a;
            return a
        },
        zc = a => {
            Z(gb(fb(), a))
        },
        Z = (a, b) => {
            (void 0 === b || b) && R.fetch ? R.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || Q(R, a)
            }) : Q(R, a)
        };
    var Fc = class extends z {
            constructor() {
                super();
                B(this, void 0, Dc)
            }
        },
        Dc = [6];
    const Gc = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
    var Hc = () => {
        var a = window;
        return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(Gc).then(b => {
            var c = new Fc;
            c = M(c, 1, b.platform);
            c = M(c, 2, b.platformVersion);
            c = M(c, 3, b.architecture);
            c = M(c, 4, b.model);
            return M(c, 5, b.uaFullVersion)
        }) : null
    };

    function Ic(a) {
        for (const b of a)
            if ("A" == b.element.tagName) {
                a = b.element;
                const c = b.data;
                null != F(c, 2) || M(c, 2, a.href)
            }
    }

    function Jc(a, b) {
        return fa(a, c => c.element === b)
    }

    function Kc(a) {
        ob(sc(556, () => {
            new Lc(a || {})
        }))
    }

    function Mc(a, b, c, d) {
        if (!K(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (u(c, Ob(e[0], Pb(557))); !c.id;)
                if (f = "asoch-id-" + la(), !P.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            "function" === typeof window.xy && window.xy(b, c, P.body);
            "function" === typeof window.mb && window.mb(c);
            "function" === typeof window.bgz && window.bgz(f);
            "function" === typeof window.ja && window.ja(f, d ? G(d, 5, 0) : 0);
            a.i && "function" === typeof window.ss && (a.G ? window.ss(f, 1, a.i) : window.ss(a.i,
                1));
            0 < e.length && (a = 0 < a.B.length ? c.href + "&uach=" + encodeURIComponent(a.B) + e[1] : c.href + e[1], u(c, Ob(a, Pb(557))))
        }
    }
    async function Nc(a, b, c, d) {
        let e = "";
        if (window.oneAfmaInstance) {
            const f = window.oneAfmaInstance;
            e = await f.appendClickSignalsAsync(c.href) || "";
            if (a.C) {
                const {
                    modifiedUrl: g,
                    error: k
                } = await f.appendNativeAdViewSignals(e);
                k || (e = g)
            }
        }
        Oc(a, b, c, d, e)
    }

    function Oc(a, b, c, d, e) {
        const f = K(a.h, 2),
            g = f && Date.now() - a.F > a.K;
        if (window.oneAfmaInstance) {
            b.preventDefault ? b.preventDefault() : b.returnValue = !1;
            var k = window.oneAfmaInstance;
            c = K(a.h, 13) || a.j && K(a.j, 13);
            b = k.logScionEventAndAddParam(e);
            if (!Ac(a.o, d, b, k, a.u) && !Bc(a.o, a.l, d, b, k, a.u)) {
                e = c;
                c = a.o;
                var l = a.u;
                const h = K(d, 15),
                    m = !/[?&]dsh=1(&|$)/.test(b) && /[?&]ae=1(&|$)/.test(b);
                !f || !g || h && m || (b = Cc(b, k.click));
                b && b.startsWith("intent:") ? (k.openIntentOrNativeApp(b), d = {
                    id: "gmob-apps",
                    event: "och-open-intent-or-native-app",
                    appId: null != F(d, 8) && J(N(d, Qa, 8), 4) || "",
                    isIos: c,
                    isDeepLinkPath: !1,
                    exptIds: l
                }, Z(gb(fb(), d))) : e ? k.openChromeCustomTab(b) : k.openSystemBrowser(b, {
                    useFirstPackage: !0,
                    useRunningProcess: !0
                })
            }
        } else g && (d = Cc(c.href), d !== c.href && u(c, Ob(d, Pb(599))));
        g && (a.F = Date.now());
        ub(a.D)
    }
    var Lc = class {
        constructor(a) {
            this.o = ra || pa || sa || qa;
            var b = Rb("data-asoch-meta");
            if (1 !== b.length) ac(Y, "gdn-asoch", {
                type: 2,
                data: b.length
            }, !0, void 0, void 0);
            else {
                this.D = 70;
                this.h = new Sa(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.j = a["extra-meta"] ? new Sa(JSON.parse(a["extra-meta"])) : null;
                this.C = !1;
                this.l = a["ios-store-overlay-config"] ? new Ta(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.u = a["expt-ids"] || "";
                this.B = "";
                b = Hc();
                null != b && b.then(d => {
                    this.B = d.o()
                });
                this.g = uc(this.h);
                this.K =
                    Number(a["async-click-timeout"]) || 300;
                this.L = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.F = -Infinity;
                this.i = J(this.h, 5) || "";
                this.G = K(this.h, 11);
                this.j && (this.G = K(this.j, 11));
                this.A = this.v = null;
                K(this.h, 3) || (wc(this.g), M(this.h, 3, !0));
                Ic(this.g);
                !this.o && window.oneAfmaInstance && yc(this.g, this.L);
                var c;
                if (window.oneAfmaInstance && (null == (c = this.l) ? 0 : K(c, 2))) switch (a = () => {
                    const d = G(this.l, 4, 0);
                    0 < d ? n.setTimeout(() => {
                        xc(this.g)
                    }, d) : xc(this.g)
                }, G(this.l, 3, 0)) {
                    case 1:
                        window.oneAfmaInstance.runOnOnShowEvent(a);
                        break;
                    case 2:
                        pb(a);
                        break;
                    default:
                        xc(this.g)
                }
                O(P, "click", sc(557, d => {
                    a: if (!d.defaultPrevented || this.v === d) {
                        for (var e, f, g = d.target;
                            (!e || !f) && g;) {
                            f || "A" != g.tagName || (f = g);
                            var k = g.hasAttribute("data-asoch-targets");
                            !e && ("A" == g.tagName || k) && (k = k && "true" === g.getAttribute("data-asoch-is-dynamic") ? uc(this.h, [g]) : this.g, k = Jc(k, g)) && (e = k.data);
                            g = g.parentElement
                        }
                        if (g = e && !K(e, 1)) {
                            if (d.defaultPrevented) {
                                var l = f;
                                f = e;
                                if (this.v === d && this.A) {
                                    var h = new Ma(this.A);
                                    e = J(f, 9);
                                    g = "";
                                    switch (G(h, 4, 1)) {
                                        case 2:
                                            if (G(h, 2, 0)) g =
                                                "blocked_fast_click";
                                            else if (J(h, 1) || J(h, 7)) g = "blocked_border_click";
                                            break;
                                        case 3:
                                            h = P, h = h.getElementById ? h.getElementById("common_15click_anchor") : null, "function" === typeof window.copfcChm && h && (f = Ka(f), M(f, 5, 12), L(f, 4, null).set("nb", (12).toString()), (g = Jc(this.g, h)) ? g.data = f : this.g.push({
                                                element: h,
                                                data: f
                                            }), l && (Mc(this, d, l, f), M(f, 2, l.href)), window.copfcChm(d, tc(f, h.href))), g = "onepointfiveclick_first_click"
                                    }
                                    e && g && Z(e + "&label=" + g, !1);
                                    ub(this.D)
                                }
                                break a
                            }
                            k = e;
                            for (h of F(k, 6)) Z(h)
                        }
                        if (f && g) {
                            e = g ? e : null;
                            (h =
                                Jc(this.g, f)) ? h = h.data: (h = new Oa, M(h, 2, f.href), M(h, 11, f.target || "_top"), this.g.push({
                                element: f,
                                data: h
                            }));
                            vc(f, e || h, J(h, 2), 557);
                            Mc(this, d, f, e);
                            for (l of F(this.h, 17)) {
                                let m;
                                h = l;
                                g = P.body;
                                k = {};
                                "function" === typeof window.CustomEvent ? m = new CustomEvent(h, k) : (m = document.createEvent("CustomEvent"), m.initCustomEvent(h, !!k.bubbles, !!k.cancelable, k.detail));
                                g.dispatchEvent(m)
                            }
                            K(this.h, 16) || this.C ? Nc(this, d, f, e) : (l = "", window.oneAfmaInstance && (l = window.oneAfmaInstance.appendClickSignals(f.href)), Oc(this, d, f, e,
                                l))
                        }
                    }
                }), Va);
                this.i && "function" === typeof window.ss && O(P.body, "mouseover", sc(626, () => {
                    window.ss(this.i, 0)
                }), Wa);
                a = window;
                a.googqscp && "function" === typeof a.googqscp.registerCallback && a.googqscp.registerCallback((d, e) => {
                    this.v = d;
                    this.A = e
                })
            }
        }
    };
    var Pc = sc(555, a => Kc(a));
    rb = 70;
    const Qc = tb(70, document.currentScript);
    if (null == Qc) throw Error("JSC not found 70");
    const Rc = {},
        Sc = Qc.attributes;
    for (let a = Sc.length - 1; 0 <= a; a--) {
        const b = Sc[a].name;
        0 === b.indexOf("data-jcp-") && (Rc[b.substring(9)] = Sc[a].value)
    }
    Pc(Rc);
}).call(this);