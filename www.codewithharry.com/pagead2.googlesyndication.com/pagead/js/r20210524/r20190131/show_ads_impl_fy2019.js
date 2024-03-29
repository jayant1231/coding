(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        r = this || self;

    function ba() {}

    function ca(a) {
        a.Fb = void 0;
        a.V = function() {
            return a.Fb ? a.Fb : a.Fb = new a
        }
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ja)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
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

    function ma(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma = ka : ma = la;
        return ma.apply(null, arguments)
    }

    function na(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function oa() {
        return Date.now()
    }

    function pa(a, b) {
        a = a.split(".");
        var c = r;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function qa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.zh = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.rh = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ra(a) {
        return a
    };

    function sa(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, sa);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    qa(sa, Error);
    sa.prototype.name = "CustomError";
    var ta;

    function ua(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        sa.call(this, c + a[d])
    }
    qa(ua, sa);
    ua.prototype.name = "AssertionError";

    function va(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function wa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function ya(a, b) {
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

    function za(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Aa(a, b, c) {
        let d = c;
        wa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ba(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ca(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    }

    function Da(a, b) {
        return 0 <= va(a, b)
    }

    function Ea(a, b) {
        b = va(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Fa(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ga(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ha(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Ia(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = Ia.apply(null, Ha(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function Ja(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Ka() {
        return !1
    }

    function La() {
        return !0
    }

    function Ma(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function Na(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Oa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Pa(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function Qa(a, b) {
        let c = 0;
        return function(d) {
            r.clearTimeout(c);
            const e = arguments;
            c = r.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function Ra(a, b) {
        function c() {
            e = r.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };

    function Sa(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ta(a) {
        var b = Ua;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Va(a) {
        let b = 0;
        for (const c in a) b++
    }

    function Wa(a, b) {
        return null !== a && b in a
    }

    function Xa(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Ya = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Za(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Ya.length; f++) c = Ya[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var $a = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var ab;

    function bb() {
        if (void 0 === ab) {
            var a = null,
                b = r.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ra,
                        createScript: ra,
                        createScriptURL: ra
                    })
                } catch (c) {
                    r.console && r.console.error(c.message)
                }
                ab = a
            } else ab = a
        }
        return ab
    };

    function db(a, b) {
        this.l = a === eb && b || "";
        this.B = fb
    }
    db.prototype.ga = !0;
    db.prototype.j = function() {
        return this.l
    };

    function gb(a) {
        return a instanceof db && a.constructor === db && a.B === fb ? a.l : "type_error:Const"
    }

    function hb(a) {
        return new db(eb, a)
    }
    var fb = {},
        eb = {};
    var jb = class {
        constructor(a, b) {
            this.B = b === ib ? a : ""
        }
    };
    jb.prototype.ga = !0;
    jb.prototype.j = function() {
        return this.B.toString()
    };
    jb.prototype.A = !0;
    jb.prototype.l = function() {
        return 1
    };

    function kb(a, b) {
        a = lb.exec(mb(a).toString());
        var c = a[3] || "";
        return nb(a[1] + ob("?", a[2] || "", b) + ob("#", c, void 0))
    }
    jb.prototype.toString = function() {
        return this.B + ""
    };

    function mb(a) {
        return a instanceof jb && a.constructor === jb ? a.B : "type_error:TrustedResourceUrl"
    }

    function pb(a, b) {
        var c = gb(a);
        if (!qb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(rb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof db ? gb(d) : encodeURIComponent(String(d))
        });
        return nb(a)
    }
    var rb = /%{(\w+)}/g,
        qb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        lb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        ib = {};

    function nb(a) {
        const b = bb();
        a = b ? b.createScriptURL(a) : a;
        return new jb(a, ib)
    }

    function ob(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };

    function sb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function tb(a, b) {
        if (b) a = a.replace(ub, "&amp;").replace(vb, "&lt;").replace(wb, "&gt;").replace(xb, "&quot;").replace(yb, "&#39;").replace(zb, "&#0;");
        else {
            if (!Ab.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ub, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(vb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(wb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(xb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(yb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(zb, "&#0;"))
        }
        return a
    }
    var ub = /&/g,
        vb = /</g,
        wb = />/g,
        xb = /"/g,
        yb = /'/g,
        zb = /\x00/g,
        Ab = /[\x00&<>"']/;

    function Bb(a, b) {
        let c = 0;
        a = sb(String(a)).split(".");
        b = sb(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Cb(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Cb(0 == e[2].length, 0 == f[2].length) || Cb(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Cb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var Eb = class {
        constructor(a, b) {
            this.B = b === Db ? a : ""
        }
    };
    Eb.prototype.ga = !0;
    Eb.prototype.j = function() {
        return this.B.toString()
    };
    Eb.prototype.A = !0;
    Eb.prototype.l = function() {
        return 1
    };
    Eb.prototype.toString = function() {
        return this.B.toString()
    };

    function Fb(a) {
        return a instanceof Eb && a.constructor === Eb ? a.B : "type_error:SafeUrl"
    }
    var Gb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        Hb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function Ib(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(Hb);
        return b && Gb.test(b[1]) ? new Eb(a, Db) : null
    }
    var Jb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Kb(a) {
        if (a instanceof Eb) return a;
        a = "object" == typeof a && a.ga ? a.j() : String(a);
        return Jb.test(a) ? new Eb(a, Db) : Ib(a)
    }

    function Lb(a, b) {
        if (a instanceof Eb) return a;
        a = "object" == typeof a && a.ga ? a.j() : String(a);
        if (b && /^data:/i.test(a) && (b = Ib(a) || Mb, b.j() == a)) return b;
        Jb.test(a) || (a = "about:invalid#zClosurez");
        return new Eb(a, Db)
    }
    var Db = {},
        Mb = new Eb("about:invalid#zClosurez", Db);
    var Ob = class {
        constructor(a, b) {
            this.l = b === Nb ? a : ""
        }
    };
    Ob.prototype.ga = !0;
    Ob.prototype.j = function() {
        return this.l
    };
    Ob.prototype.toString = function() {
        return this.l.toString()
    };
    var Nb = {},
        Pb = new Ob("", Nb);

    function Qb(a) {
        if (a instanceof Eb) return 'url("' + Fb(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof db) a = gb(a);
        else {
            a = String(a);
            var b = a.replace(Rb, "$1").replace(Rb, "$1").replace(Sb, "url");
            if (Tb.test(b)) {
                if (b = !Ub.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Vb(a)
                }
                a = b ? Wb(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new ua("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function Vb(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    var Tb = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        Sb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        Rb = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Ub = /\/\*/;

    function Wb(a) {
        return a.replace(Sb, function(b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                f = h;
                return k
            });
            b = (Kb(d) || Mb).j();
            return c + f + b + f + e
        })
    };
    var Xb;
    a: {
        var Yb = r.navigator;
        if (Yb) {
            var Zb = Yb.userAgent;
            if (Zb) {
                Xb = Zb;
                break a
            }
        }
        Xb = ""
    }

    function t(a) {
        return -1 != Xb.indexOf(a)
    }

    function $b(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function ac() {
        return t("Opera")
    }

    function bc() {
        return t("Trident") || t("MSIE")
    }

    function cc() {
        return t("Firefox") || t("FxiOS")
    }

    function dc() {
        return t("Safari") && !(ec() || t("Coast") || ac() || t("Edge") || t("Edg/") || t("OPR") || cc() || t("Silk") || t("Android"))
    }

    function ec() {
        return (t("Chrome") || t("CriOS")) && !t("Edge")
    }

    function fc() {
        function a(e) {
            const f = Ca(e, d);
            return c[0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f]] || ""
        }
        var b = Xb;
        if (bc()) return gc(b);
        b = $b(b);
        var c = {};
        wa(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = na(Wa, c);
        return ac() ? a(["Version", "Opera"]) : t("Edge") ? a(["Edge"]) : t("Edg/") ? a(["Edg"]) : ec() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    }

    function gc(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };
    var ic = class {
        constructor(a, b, c) {
            this.B = c === hc ? a : "";
            this.C = b
        }
    };
    ic.prototype.A = !0;
    ic.prototype.l = function() {
        return this.C
    };
    ic.prototype.ga = !0;
    ic.prototype.j = function() {
        return this.B.toString()
    };
    ic.prototype.toString = function() {
        return this.B.toString()
    };

    function jc(a) {
        return a instanceof ic && a.constructor === ic ? a.B : "type_error:SafeHtml"
    }

    function kc(a) {
        if (a instanceof ic) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.A && (c = a.l());
        return lc(tb(b && a.ga ? a.j() : String(a)), c)
    }
    var mc = /^[a-zA-Z0-9-]+$/,
        nc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        oc = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };

    function pc(a) {
        function b(f) {
            Array.isArray(f) ? wa(f, b) : (f = kc(f), e.push(jc(f).toString()), f = f.l(), 0 == d ? d = f : 0 != f && d != f && (d = null))
        }
        var c = kc(qc),
            d = c.l(),
            e = [];
        wa(a, b);
        return lc(e.join(jc(c).toString()), d)
    }

    function rc(a) {
        return pc(Array.prototype.slice.call(arguments))
    }
    var hc = {};

    function lc(a, b) {
        const c = bb();
        a = c ? c.createHTML(a) : a;
        return new ic(a, b, hc)
    }
    var sc = lc("<!DOCTYPE html>", 0),
        qc = new ic(r.trustedTypes && r.trustedTypes.emptyHTML || "", 0, hc);
    var tc = Oa(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = jc(qc);
        return !b.parentElement
    });

    function uc(a, b) {
        if (tc())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = jc(b)
    }

    function vc(a, b) {
        b = b instanceof Eb ? b : Lb(b, /^data:image\//i.test(b));
        a.src = Fb(b)
    }

    function wc(a, b) {
        a.src = mb(b);
        (b = xc(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    }
    var yc = /^[\w+/_-]+[=]{0,2}$/;

    function xc(a) {
        a = (a || r).document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && yc.test(a) ? a : "" : ""
    };

    function zc(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : r.document.createElement("div");
        return a.replace(Ac, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = lc(e + " ", null), uc(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Ac = /&([^;\s<&]+);?/g;

    function Bc(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Cc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Dc(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Ec(a) {
        Ec[" "](a);
        return a
    }
    Ec[" "] = ba;

    function Fc(a, b) {
        try {
            return Ec(a[b]), !0
        } catch (c) {}
        return !1
    }

    function Gc(a, b) {
        var c = Hc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ic = ac(),
        Jc = bc(),
        Kc = t("Edge"),
        Lc = Kc || Jc,
        Mc = t("Gecko") && !(-1 != Xb.toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
        Nc = -1 != Xb.toLowerCase().indexOf("webkit") && !t("Edge");

    function Oc() {
        var a = r.document;
        return a ? a.documentMode : void 0
    }
    var Pc;
    a: {
        var Qc = "",
            Rc = function() {
                var a = Xb;
                if (Mc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Kc) return /Edge\/([\d\.]+)/.exec(a);
                if (Jc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Nc) return /WebKit\/(\S+)/.exec(a);
                if (Ic) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Rc && (Qc = Rc ? Rc[1] : "");
        if (Jc) {
            var Sc = Oc();
            if (null != Sc && Sc > parseFloat(Qc)) {
                Pc = String(Sc);
                break a
            }
        }
        Pc = Qc
    }
    var Tc = Pc,
        Hc = {};

    function Uc(a) {
        return Gc(a, function() {
            return 0 <= Bb(Tc, a)
        })
    }
    var Vc;
    if (r.document && Jc) {
        var Wc = Oc();
        Vc = Wc ? Wc : parseInt(Tc, 10) || void 0
    } else Vc = void 0;
    var Xc = Vc;
    var Yc = {},
        Zc = null;

    function $c(a, b) {
        void 0 === b && (b = 0);
        if (!Zc) {
            Zc = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Yc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Zc[h] && (Zc[h] = g)
                }
            }
        }
        b = Yc[b];
        c = [];
        for (d = 0; d < a.length; d += 3) {
            var k = a[d],
                l = (e = d + 1 < a.length) ? a[d + 1] : 0;
            h = (f = d + 2 < a.length) ? a[d + 2] : 0;
            g = k >> 2;
            k = (k & 3) << 4 | l >> 4;
            l = (l & 15) << 2 | h >> 6;
            h &= 63;
            f || (h = 64, e || (l = 64));
            c.push(b[g], b[k], b[l] || "", b[h] || "")
        }
        return c.join("")
    }

    function ad(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return $c(b, 3)
    };
    var bd = "function" === typeof Uint8Array;

    function cd(a) {
        let b;
        if (Array.isArray(a)) {
            var c = Array(a.length);
            for (var d = 0; d < a.length; d++) b = a[d], null != b && (c[d] = "object" == typeof b ? cd(b) : b);
            return c
        }
        if (bd && a instanceof Uint8Array) return new Uint8Array(a);
        c = {};
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (b = a[d], null != b && (c[d] = "object" == typeof b ? cd(b) : b));
        return c
    };

    function w() {}
    let dd;

    function x(a, b, c, d) {
        a.j = null;
        dd && (b || (b = dd), dd = null);
        var e = a.constructor.messageId,
            f = a.constructor.uh;
        f = e || f;
        b || (b = f ? [e] : []);
        a.C = f ? 0 : -1;
        a.A = b;
        a: {
            if (b = a.A.length)
                if (--b, e = a.A[b], !(null === e || "object" != typeof e || Array.isArray(e) || bd && e instanceof Uint8Array)) {
                    a.D = b - a.C;
                    a.B = e;
                    break a
                }
            a.D = Number.MAX_VALUE
        }
        a.H = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.D ? (e += a.C, a.A[e] = a.A[e] || ed) : (fd(a), a.B[e] = a.B[e] || ed);
        if (d && d.length)
            for (e = 0; e < d.length; e++) {
                {
                    let g = f = void 0;
                    c = a;
                    b = d[e];
                    for (let h = 0; h < b.length; h++) {
                        let k =
                            b[h],
                            l = y(c, k);
                        null != l && (g = k, f = l, z(c, k, void 0))
                    }
                    g && z(c, g, f)
                }
            }
    }
    const ed = [];

    function fd(a) {
        let b = a.D + a.C;
        a.A[b] || (a.B = a.A[b] = {})
    }

    function y(a, b) {
        if (b < a.D) {
            b += a.C;
            var c = a.A[b];
            return c !== ed ? c : a.A[b] = []
        }
        if (a.B) return c = a.B[b], c === ed ? a.B[b] = [] : c
    }

    function C(a, b) {
        return null != y(a, b)
    }

    function gd(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function F(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function hd(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function H(a, b) {
        return hd(a, b, "")
    }

    function id(a, b, c = !1) {
        a = F(a, b);
        return null == a ? c : a
    }

    function z(a, b, c) {
        b < a.D ? a.A[b + a.C] = c : (fd(a), a.B[b] = c);
        return a
    }

    function jd(a, b) {
        return kd(a, b, 1, 0)
    }

    function kd(a, b, c, d) {
        c !== d ? z(a, b, c) : b < a.D ? a.A[b + a.C] = null : (fd(a), delete a.B[b]);
        return a
    }

    function J(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    }

    function K(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            let d = y(a, c),
                e = [];
            for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        b = a.j[c];
        b == ed && (b = a.j[c] = []);
        return b
    }

    function ld(a, b, c) {
        a.j || (a.j = {});
        let d = c ? md(c) : c;
        a.j[b] = c;
        z(a, b, d)
    }

    function md(a) {
        if (a.j)
            for (var b in a.j)
                if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                    var c = a.j[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && md(c[d]);
                    else c && md(c)
                }
        return a.A
    }
    w.prototype.F = bd ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return $c(this)
        };
        try {
            return JSON.stringify(this.A && md(this), nd)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.A && md(this), nd)
    };

    function nd(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    }

    function od(a, b) {
        dd = b = b ? JSON.parse(b) : null;
        a = new a(b);
        dd = null;
        return a
    };

    function pd(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (l) {
                    e(l)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (l) {
                    e(l)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(l) {
                    l(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };
    var qd = hb("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var rd = {};

    function sd() {
        if (rd !== rd) throw Error("Bad secret");
    };

    function td() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    let vd;

    function wd() {
        var a, b;
        void 0 === vd && (vd = null !== (b = null === (a = td()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: c => c,
            createScript: c => c,
            createScriptURL: c => c
        })) && void 0 !== b ? b : null);
        return vd
    };
    var xd = class {};
    class yd extends xd {
        constructor(a) {
            super();
            sd();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    };
    var zd = class {};
    class Ad extends zd {
        constructor(a) {
            super();
            sd();
            this.j = a
        }
        toString() {
            return this.j
        }
    }
    var Bd = new Ad("about:invalid#zTSz");
    var Cd = class {};
    class Dd extends Cd {
        constructor(a) {
            super();
            sd();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Ed(a) {
        var b;
        const c = null === (b = wd()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Dd(null !== c && void 0 !== c ? c : a)
    };

    function Fd(a) {
        if (a instanceof Cd) {
            var b;
            if (null === (b = td()) || void 0 === b || !b.isScriptURL(a))
                if (a instanceof Dd) a = a.j;
                else throw Error("wrong type");
        } else a = mb(a);
        return a
    }

    function Gd(a) {
        if (a instanceof zd)
            if (a instanceof Ad) a = a.j;
            else throw Error("wrong type");
        else a = Fb(a);
        return a
    };

    function Hd(a, b) {
        a.src = Fd(b);
        var c;
        b = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        (c = (b = null === (c = b.querySelector) || void 0 === c ? void 0 : c.call(b, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", c)
    };
    var Id = {
            passive: !0
        },
        Jd = Oa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                r.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Kd(a) {
        return a ? a.passive && Jd() ? a : a.capture || !1 : !1
    }

    function L(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Kd(d)), !0) : !1
    }

    function Ld(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Kd(d)), !0) : !1
    };

    function Md(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                var g;
                f.onload = null;
                f.onerror = null;
                null === (g = f.parentElement) || void 0 === g ? void 0 : g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            Hd(f, a);
            "complete" !== b.document.readyState ? L(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };

    function Nd(a) {
        return pd(this, function*() {
            var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.xa}`;
            let c = void 0;
            try {
                c = yield Od(b)
            } catch (f) {}
            if (c) {
                b = a.Ga || c.sodar_query_id;
                var d = void 0 === c.rc_enable ? "n" : c.rc_enable,
                    e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                if (b && c.bg_hash_basename && c.bg_binary) return {
                    context: a.A,
                    $c: c.bg_hash_basename,
                    Zc: c.bg_binary,
                    ud: a.j + "_" + a.l,
                    Ga: b,
                    xa: a.xa,
                    jb: d,
                    rb: e
                }
            }
        })
    }
    let Od = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });

    function Pd(a) {
        pd(this, function*() {
            const b = yield Nd(a);
            if (b) {
                var c = window,
                    d = c.GoogleGcLKhOms;
                d && "function" === typeof d.push || (d = c.GoogleGcLKhOms = []);
                d.push({
                    ["_ctx_"]: b.context,
                    ["_bgv_"]: b.$c,
                    ["_bgp_"]: b.Zc,
                    ["_li_"]: b.ud,
                    ["_jk_"]: b.Ga,
                    ["_st_"]: b.xa,
                    ["_rc_"]: b.jb,
                    ["_dl_"]: b.rb
                });
                if (d = c.GoogleDX5YKUSk) c.GoogleDX5YKUSk = void 0, d[1]();
                c = pb(qd, {
                    basename: "sodar2"
                });
                Md(c)
            }
            return b
        })
    };

    function Qd(a, b) {
        return kd(a, 1, b, "")
    }

    function Rd(a, b) {
        return kd(a, 3, b, "")
    }
    var Sd = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };

    function Td(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            default:
                return "unk"
        }
    }
    var Ud = class {
            constructor(a) {
                this.j = a.j;
                this.l = a.l;
                this.A = a.A;
                this.Ga = a.Ga;
                this.$ = a.M();
                this.xa = a.xa;
                this.jb = a.jb;
                this.rb = a.rb
            }
        },
        Vd = class {
            constructor(a, b, c) {
                this.j = a;
                this.l = b;
                this.A = c;
                this.$ = window;
                this.xa = "env";
                this.jb = "n";
                this.rb = "0"
            }
            M() {
                return this.$
            }
        };
    var Xd = class extends w {
            constructor(a) {
                super();
                x(this, a, Wd, null)
            }
        },
        Wd = [2, 3];
    var Yd = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Zd = {
        be: "google_adtest",
        fe: "google_ad_client",
        ge: "google_ad_format",
        ie: "google_ad_height",
        we: "google_ad_width",
        me: "google_ad_layout",
        ne: "google_ad_layout_key",
        pe: "google_ad_output",
        qe: "google_ad_region",
        te: "google_ad_slot",
        ue: "google_ad_type",
        ve: "google_ad_url",
        xe: "google_allow_expandable_ads",
        Le: "google_analytics_domain_name",
        Me: "google_analytics_uacct",
        $e: "google_container_id",
        lf: "google_gl",
        Gf: "google_enable_ose",
        Of: "google_full_width_responsive",
        Eg: "google_rl_filtering",
        Dg: "google_rl_mode",
        Fg: "google_rt",
        Cg: "google_rl_dest_url",
        qg: "google_max_radlink_len",
        vg: "google_num_radlinks",
        wg: "google_num_radlinks_per_unit",
        ee: "google_ad_channel",
        pg: "google_max_num_ads",
        rg: "google_max_responsive_height",
        Ve: "google_color_border",
        Ff: "google_enable_content_recommendations",
        hf: "google_content_recommendation_ui_type",
        gf: "google_source_type",
        ff: "google_content_recommendation_rows_num",
        ef: "google_content_recommendation_columns_num",
        df: "google_content_recommendation_ad_positions",
        jf: "google_content_recommendation_use_square_imgs",
        Xe: "google_color_link",
        We: "google_color_line",
        Ze: "google_color_url",
        ce: "google_ad_block",
        se: "google_ad_section",
        de: "google_ad_callback",
        Se: "google_captcha_token",
        Ye: "google_color_text",
        Je: "google_alternate_ad_url",
        le: "google_ad_host_tier_id",
        Te: "google_city",
        je: "google_ad_host",
        ke: "google_ad_host_channel",
        Ke: "google_alternate_color",
        Ue: "google_color_bg",
        Hf: "google_encoding",
        Mf: "google_font_face",
        pf: "google_cust_ch",
        sf: "google_cust_job",
        rf: "google_cust_interests",
        qf: "google_cust_id",
        tf: "google_cust_u_url",
        Qf: "google_hints",
        eg: "google_image_size",
        sg: "google_mtl",
        jh: "google_cpm",
        cf: "google_contents",
        ug: "google_native_settings_key",
        kf: "google_country",
        $g: "google_targeting",
        Nf: "google_font_size",
        wf: "google_disable_video_autoplay",
        ph: "google_video_product_type",
        oh: "google_video_doc_id",
        mh: "google_cust_gender",
        Wg: "google_cust_lh",
        Vg: "google_cust_l",
        ih: "google_tfs",
        tg: "google_native_ad_template",
        jg: "google_kw",
        Xg: "google_tag_for_child_directed_treatment",
        Yg: "google_tag_for_under_age_of_consent",
        Hg: "google_region",
        nf: "google_cust_criteria",
        re: "google_safe",
        mf: "google_ctr_threshold",
        Ig: "google_resizing_allowed",
        Kg: "google_resizing_width",
        Jg: "google_resizing_height",
        lh: "google_cust_age",
        LANGUAGE: "google_language",
        kg: "google_kw_type",
        Bg: "google_pucrd",
        Ag: "google_page_url",
        Zg: "google_tag_partner",
        Og: "google_restrict_data_processing",
        Zd: "google_adbreak_test",
        he: "google_ad_frequency_hint",
        $d: "google_admob_interstitial_slot",
        ae: "google_admob_rewarded_slot"
    };
    var $d = a => {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        },
        ae = a => {
            a = $d(a);
            a.eids || (a.eids = []);
            return a.eids
        },
        be = (a, b) => {
            a = $d(a);
            a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
            const c = !a.processed_sra_frame_pingbacks[b];
            a.processed_sra_frame_pingbacks[b] = !0;
            return c
        };
    var de = class extends w {
            constructor(a) {
                super();
                x(this, a, ce, null)
            }
        },
        ee = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        ge = class extends w {
            constructor(a) {
                super();
                x(this, a, fe, null)
            }
        },
        ce = [2],
        fe = [2];
    class he {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    var ie = Jc && !Uc("9");

    function je(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function ke(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function le(a) {
        return ke.apply(null, arguments) / arguments.length
    };

    function me(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    me.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    me.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    me.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function ne(a, b) {
        this.width = a;
        this.height = b
    }
    ne.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    ne.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ne.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ne.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function oe(a) {
        return a ? new pe(qe(a)) : ta || (ta = new pe)
    }

    function re(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new ne(a.clientWidth, a.clientHeight)
    }

    function se(a) {
        var b = a.scrollingElement ? a.scrollingElement : Nc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return Jc && Uc("10") && a.pageYOffset != b.scrollTop ? new me(b.scrollLeft, b.scrollTop) : new me(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function te(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function ue(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ve(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function qe(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var we = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        xe = {
            IMG: " ",
            BR: "\n"
        };

    function ye(a) {
        if (ie && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            ze(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        ie || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function ze(a, b, c) {
        if (!(a.nodeName in we))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in xe) b.push(xe[a.nodeName]);
        else
            for (a = a.firstChild; a;) ze(a, b, c), a = a.nextSibling
    }

    function Ae(a, b, c, d) {
        if (!b && !c) return null;
        var e = b ? String(b).toUpperCase() : null;
        return Be(a, function(f) {
            return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && Da(f.className.split(/\s+/), c))
        }, d)
    }

    function Be(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    }

    function pe(a) {
        this.j = a || r.document || document
    }

    function Ce(a, b) {
        return ue(a.j, b)
    }
    pe.prototype.M = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    pe.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    pe.prototype.l = ve;

    function De() {
        return !(t("iPad") || t("Android") && !t("Mobile") || t("Silk")) && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile"))
    };
    var Ee = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Fe(a) {
        try {
            return !!a && null != a.location.href && Fc(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Je(a, b, c, d) {
        d = d || r;
        c && (d = Ke(d));
        for (c = 0; d && 40 > c++ && (!b && !Fe(d) || !a(d));) d = Ke(d)
    }

    function Ke(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function Le(a, b) {
        const c = a.createElement("script");
        wc(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Me(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Ne(a, b) {
        if (!Oe()) {
            let c = Math.random();
            if (c < b) return c = Pe(r), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Pe(a) {
        if (!a.crypto) return Math.random();
        try {
            const b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Qe(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Re(a) {
        const b = [];
        Qe(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Se(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Oe = Oa(() => Ba(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Te) || 1E-4 > Math.random()),
        Ue = (a, b) => {
            let c = -1;
            try {
                a && (c = parseInt(a.getItem(b), 10))
            } catch (d) {
                return null
            }
            return 0 <= c && 1E3 > c ? c : null
        };
    const Te = a => -1 != Xb.indexOf(a);
    var Ve = /^([0-9.]+)px$/,
        We = /^(-?[0-9.]{1,30})$/;

    function Xe(a, b) {
        return We.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    }

    function Ye(a) {
        return /^true$/.test(a)
    }

    function Ze(a) {
        return (a = Ve.exec(a)) ? +a[1] : null
    }

    function $e() {
        var a = r.document.URL;
        if (!a) return "";
        const b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var af = {
        ye: "allow-forms",
        ze: "allow-modals",
        Ae: "allow-orientation-lock",
        Be: "allow-pointer-lock",
        Ce: "allow-popups",
        De: "allow-popups-to-escape-sandbox",
        Ee: "allow-presentation",
        Fe: "allow-same-origin",
        Ge: "allow-scripts",
        He: "allow-top-navigation",
        Ie: "allow-top-navigation-by-user-activation"
    };
    const bf = Oa(() => Re(af));

    function cf() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = bf();
        return a.length ? ya(b, c => !Da(a, c)) : b
    }

    function df() {
        const a = ue(document, "IFRAME"),
            b = {};
        wa(bf(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var ef = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        ff = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (ef(a, b)) return a;
                if (!(a = Ke(a))) break
            }
            return null
        },
        M = (a, b) => {
            a.style.setProperty ? Qe(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            }) : a.style.cssText = gf(hf(jf(a.style.cssText), kf(b, c => c + " !important")))
        },
        hf = Object.assign || function(a, b) {
            for (let c = 1; c < arguments.length; c++) {
                const d = arguments[c];
                if (d)
                    for (let e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
            }
            return a
        },
        kf = (a, b) => {
            const c = {};
            for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
            return c
        },
        gf = a => {
            const b = [];
            Qe(a, (c, d) => {
                null != c && "" !== c && b.push(d + ":" + c)
            });
            return b.length ? b.join(";") + ";" : ""
        },
        jf = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                wa((a || "").split(/\s*;\s*/), d => {
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
        lf = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        mf = /\.proxy\.googleprod\.com(:\d+)?$/;
    const nf = /.*domain\.test$/;
    var of = a => !!lf[a] || mf.test(a) || nf.test(a), pf = (a, b) => {
        b = Ca(a, b);
        if (0 <= b) {
            const c = a[b];
            Array.prototype.splice.call(a, b, 1);
            return c
        }
        return null
    }, qf = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.ca(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.ca(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function rf(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || ve(h, b))) {
                        for (const k of d) k.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Je(f => {
            if (!f.parent || !Fe(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let l = 0; l < g.length; l++) try {
                a: {
                    var h = g[l];
                    try {
                        var k = h.contentWindow || (h.contentDocument ? te(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    k =
                    null
                }
                if (k == f) {
                    rf(f.parent, g[l], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var sf = (a, b) => {
            rf(te(qe(a)), a, b)
        },
        tf = (a, b) => {
            const c = document.createElement("div");
            c.id = a;
            c.textContent = b;
            M(c, {
                height: "24px",
                "line-height": "24px",
                "text-align": "center",
                "vertical-align": "middle",
                color: "white",
                "background-color": "black",
                margin: "0",
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "11px",
                "letter-spacing": "0.08em"
            });
            return c
        },
        uf = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function vf(a, b, c = null) {
        wf(a, b, c)
    }

    function wf(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        const d = a.document.createElement("img");
        if (c) {
            const e = f => {
                c && c(f);
                Ld(d, "load", e);
                Ld(d, "error", e)
            };
            L(d, "load", e);
            L(d, "error", e)
        }
        d.src = b;
        a.google_image_requests.push(d)
    }
    var yf = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gfp_cw_status";
            Qe(a, (c, d) => {
                c && (b += `&${d}=${encodeURIComponent(c)}`)
            });
            xf(b)
        },
        xf = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : vf(b, a)
        };
    var zf = document,
        N = window;

    function Af(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    Af.prototype.getHeight = function() {
        return this.bottom - this.top
    };

    function Bf(a) {
        return new Af(a.top, a.right, a.bottom, a.left)
    }
    Af.prototype.contains = function(a) {
        return this && a ? a instanceof Af ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function Cf(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    Af.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    Af.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    Af.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Df(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ef(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new Df(c, e, d - c, a - e)
        }
        return null
    }

    function Ff(a, b) {
        var c = Ef(a, b);
        if (!c || !c.height || !c.width) return [new Df(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new Df(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new Df(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new Df(a.left, d, b.left - a.left, e));
        h < f && c.push(new Df(h, d, f - h, e));
        return c
    }
    Df.prototype.contains = function(a) {
        return a instanceof me ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    Df.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Df.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Df.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Gf = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Hf(a = r) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function If() {
        const a = Hf();
        return a && a.initialIntersection
    }

    function Jf() {
        const a = If();
        return a && ea(a.rootBounds) ? new ne(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Kf(a) {
        return (a = a || Hf()) ? Fe(a.master) ? a.master : null : null
    }

    function Lf(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Ea(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Le(a.document, g ? pb(hb("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : nb(gb(hb("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, L(a, "message", f), d = () => {
            Ld(a, "message", f)
        });
        return e
    };

    function Mf(a, b, c) {
        if (!Array.isArray(a) || !Array.isArray(a.raw) || !b && 1 !== a.length) throw new TypeError(c);
    };
    class Nf {
        constructor(a) {
            this.td = a
        }
    }

    function Of(a) {
        return new Nf(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Pf = [Of("data"), Of("http"), Of("https"), Of("mailto"), Of("ftp"), new Nf(a => /^[^:]*([/?#]|$)/.test(a))];

    function Qf(a, b = Pf) {
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Nf && d.td(a)) return new Ad(a)
        }
    }

    function Rf(a) {
        return Qf(a, Pf) || Bd
    };

    function Sf(a) {
        Tf();
        return nb(a)
    }
    var Tf = ba;

    function Uf(a, b, c) {
        if ("string" === typeof b)(b = Vf(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Vf(c, d);
                f && (c.style[f] = e)
            }
    }
    var Wf = {};

    function Vf(a, b) {
        var c = Wf[b];
        if (!c) {
            var d = Cc(b);
            c = d;
            void 0 === a.style[d] && (d = (Nc ? "Webkit" : Mc ? "Moz" : Jc ? "ms" : Ic ? "O" : null) + Dc(d), void 0 !== a.style[d] && (c = d));
            Wf[b] = c
        }
        return c
    }

    function Xf(a, b) {
        var c = qe(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Yf(a, b) {
        return Xf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Zf(a) {
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

    function $f(a) {
        var b = qe(a),
            c = new me(0, 0);
        var d = b ? qe(b) : document;
        d = !Jc || 9 <= Number(Xc) || "CSS1Compat" == oe(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Zf(a);
        b = se(oe(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function ag(a) {
        var b = bg;
        if ("none" != Yf(a, "display")) return b(a);
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

    function bg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Nc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Zf(a), new ne(a.right - a.left, a.bottom - a.top)) : new ne(b, c)
    }

    function cg(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function dg(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? cg(a, b) : 0
    }
    var eg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function fg(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in eg ? eg[b] : cg(a, b)
    };
    var gg = (a, b) => {
            if (a)
                for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        hg = a => !(!a || !a.call) && "function" === typeof a,
        ig = a => "number" === typeof a && 0 < a,
        jg = () => {
            var a = O();
            "google_onload_fired" in a || (a.google_onload_fired = !1, L(a, "load", () => {
                a.google_onload_fired = !0
            }))
        },
        lg = (a, b) => {
            a = kg(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        kg = a => Object.entries(mg(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        mg = a => {
            const b = {};
            gg(a,
                (c, d) => {
                    if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
                });
            return b
        },
        ng = () => {
            try {
                return N.history.length
            } catch (a) {
                return 0
            }
        },
        og = a => {
            a = Kf(Hf(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        pg = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        qg = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = ng();
            a.u_java = !!N.navigator && "unknown" !== typeof N.navigator.javaEnabled && !!N.navigator.javaEnabled && N.navigator.javaEnabled();
            N.screen && (a.u_h = N.screen.height, a.u_w = N.screen.width, a.u_ah =
                N.screen.availHeight, a.u_aw = N.screen.availWidth, a.u_cd = N.screen.colorDepth);
            N.navigator && N.navigator.plugins && (a.u_nplug = N.navigator.plugins.length);
            N.navigator && N.navigator.mimeTypes && (a.u_nmime = N.navigator.mimeTypes.length)
        },
        rg = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        sg = !!window.google_async_iframe_id;
    let tg = sg && window.parent || window;
    var O = () => {
            if (sg && !Fe(tg)) {
                let a = "." + zf.domain;
                try {
                    for (; 2 < a.split(".").length && !Fe(tg);) zf.domain = a = a.substr(a.indexOf(".") + 1), tg = window.parent
                } catch (b) {}
                Fe(tg) || (tg = window)
            }
            return tg
        },
        ug = /(^| )adsbygoogle($| )/,
        vg = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        wg = () => {
            var a;
            let b;
            const c = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/,
                    ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (bc()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g,
                        ".")
                }
            }
            return "0"
        },
        xg = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        yg = a => {
            a = a.top;
            return Fe(a) ? a : null
        },
        zg = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        Ag = (a, b) => a.source !== b.contentWindow &&
        a.source.parent !== b.contentWindow ? !1 : !0;
    const Bg = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;
    var Cg = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        Dg = class {
            constructor(a, b, c) {
                this.url = a;
                this.$ = b;
                this.dc = !!c;
                this.depth = null
            }
        };

    function Eg(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Fg(a, b, c, d, e) {
        const f = [];
        Qe(a, function(g, h) {
            (g = Gg(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Gg(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Gg(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Fg(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Hg(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Ig(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        let d = Hg(a) - c.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        c = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                let l = Fg(h[k], a.A, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.A;
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
    class Jg {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function P(a, b, c, d, e, f) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let g;
            c instanceof Jg ? g = c : (g = new Jg, Qe(c, (k, l) => {
                var m = g,
                    n = m.B++;
                k = Eg(l, k);
                m.j.push(n);
                m.l[n] = k
            }));
            const h = Ig(g, a.l, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" !== typeof f ? vf(r, h, f) : vf(r, h))
        } catch (g) {}
    }
    class Kg {
        constructor() {
            this.l = "http:" === N.location.protocol ? "http:" : "https:";
            this.j = Math.random()
        }
    };
    let Lg = null;

    function Mg() {
        if (null === Lg) {
            Lg = "";
            try {
                let a = "";
                try {
                    a = r.top.location.hash
                } catch (b) {
                    a = r.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Lg = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Lg
    };
    var Ng = () => {
            const a = r.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : oa()
        },
        Og = () => {
            const a = r.performance;
            return a && a.now ? a.now() : null
        };
    class Pg {
        constructor(a, b) {
            var c = Og() || Ng();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const Qg = r.performance,
        Rg = !!(Qg && Qg.mark && Qg.measure && Qg.clearMarks),
        Sg = Oa(() => {
            var a;
            if (a = Rg) a = Mg(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Tg(a) {
        a && Qg && Sg() && (Qg.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Qg.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Ug(a) {
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (Sg() && wa(a.events, Tg), a.events.length = 0)
    }

    function Vg(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Tg(c), e;
        }
        a.end(c);
        return d
    }
    class Wg {
        constructor(a) {
            this.events = [];
            this.l = a || r;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Sg() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Pg(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Qg && Sg() && Qg.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Og() || Ng()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Qg && Sg() && Qg.mark(b);
                !this.j ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function Xg(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Yg(a.stack, b));
        return b
    }

    function Yg(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }

    function Zg(a, b) {
        a.j = b
    }

    function $g(a, b, c, d) {
        let e, f;
        try {
            a.l && a.l.j ? (f = a.l.start(b.toString(), 3), e = c(), a.l.end(f)) : e = c()
        } catch (g) {
            c = !0;
            try {
                Tg(f), c = a.C(b, new he(g, {
                    message: Xg(g)
                }), void 0, d)
            } catch (h) {
                a.ca(217, h)
            }
            if (c) {
                let h, k;
                null == (h = window.console) || null == (k = h.error) || k.call(h, g)
            } else throw g;
        }
        return e
    }

    function ah(a, b, c, d, e) {
        return (...f) => $g(a, b, () => c.apply(d, f), e)
    }
    class bh {
        constructor() {
            var a = ch;
            this.B = Q;
            this.j = null;
            this.C = this.ca;
            this.l = void 0 === a ? null : a;
            this.A = !1
        }
        ca(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const D = new Jg;
                var g = D;
                g.j.push(1);
                g.l[1] = Eg("context", a);
                b.error && b.meta && b.id || (b = new he(b, {
                    message: Xg(b)
                }));
                if (b.msg) {
                    g = D;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = Eg("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.j) try {
                    this.j(b)
                } catch (T) {}
                if (d) try {
                    d(b)
                } catch (T) {}
                d = D;
                k = [k];
                d.j.push(3);
                d.l[3] = k;
                d = r;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Fe(l)) {
                        var m = l.location.href;
                        b = l.document &&
                            l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new Dg(m || "", l));
                    try {
                        d = l.parent
                    } catch (T) {
                        d = null
                    }
                } while (d && l != d);
                for (let T = 0, ia = k.length - 1; T <= ia; ++T) k[T].depth = ia - T;
                l = r;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var n = k[m];
                        n.url || (n.url = l.location.ancestorOrigins[m - 1] || "", n.dc = !0)
                    }
                var p = k;
                let da = new Dg(r.location.href, r, !1);
                l = null;
                const cb = p.length - 1;
                for (n = cb; 0 <= n; --n) {
                    var q = p[n];
                    !l && Bg.test(q.url) && (l = q);
                    if (q.url && !q.dc) {
                        da = q;
                        break
                    }
                }
                q = null;
                const xa = p.length && p[cb].url;
                0 != da.depth && xa && (q = p[cb]);
                f = new Cg(da, q);
                if (f.l) {
                    p = D;
                    var u = f.l.url || "";
                    p.j.push(4);
                    p.l[4] = Eg("top", u)
                }
                var v = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var A = f.j.url.match(Ee),
                        E = A[1],
                        G = A[3],
                        I = A[4];
                    u = "";
                    E && (u += E + ":");
                    G && (u += "//", u += G, I && (u += ":" + I));
                    var B = u
                } else B = "";
                E = D;
                v = [v, {
                    url: B
                }];
                E.j.push(5);
                E.l[5] = v;
                P(this.B, e, D, this.A, c)
            } catch (D) {
                try {
                    P(this.B, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Xg(D),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (da) {}
            }
            return !0
        }
    };
    let Q, dh;
    const eh = O(),
        ch = new Wg(eh);
    Q = new Kg;
    "number" !== typeof eh.google_srt && (eh.google_srt = Math.random());
    var fh = Q,
        gh = eh.google_srt;
    0 <= gh && 1 >= gh && (fh.j = gh);
    dh = new bh;
    dh.j = () => {};
    dh.A = !0;
    "complete" == eh.document.readyState ? eh.google_measure_js_timing || Ug(ch) : ch.j && L(eh, "load", () => {
        eh.google_measure_js_timing || Ug(ch)
    });
    var hh = (a, b) => $g(dh, a, b, void 0),
        R = (a, b, c) => ah(dh, a, b, c, void 0),
        ih = (a, b, c, d) => {
            P(Q, a, b, !0, c, d)
        };
    class jh {
        constructor() {
            this.l = !1;
            this.j = 0
        }
    }

    function kh(a, b, c, d, e, f, g) {
        for (let I = 0; I < b.childNodes.length; I++) {
            var h = b.childNodes[I];
            if (h.nodeType === Node.TEXT_NODE && "" !== h.textContent) {
                a: {
                    var k = a;
                    var l = d,
                        m = e,
                        n = h.textContent,
                        p = c,
                        q = f,
                        u = g,
                        v = [];
                    let B = 0;
                    for (;;) {
                        var A = n.length;
                        let D = null;
                        var E = "";
                        for (const da of K(p, ge, 2))
                            for (const cb of K(da, ee, 2)) {
                                const xa = H(cb, 1);
                                for (var G = B; G < n.length;) {
                                    G = n.indexOf(xa, G);
                                    if (-1 === G) break;
                                    if (G > A || G === A && null !== D && xa.length < D.length) break;
                                    if (q.j + lh(n.substr(B, G - B)) >= hd(p, 5, 0)) {
                                        A = G;
                                        D = xa;
                                        E = H(da, 1);
                                        break
                                    }
                                    G += 1
                                }
                            }
                        if (null ===
                            D) {
                            if (0 === B) {
                                q.j += lh(n);
                                k = null;
                                break a
                            }
                            B < n.length && (l = n.substr(B), v.push(k.document.createTextNode(l)), q.j += lh(l));
                            k = v;
                            break a
                        }
                        A > B && v.push(k.document.createTextNode(n.substr(B, A - B)));
                        v.push(mh(k, E, l, H(p, 1), D, m));
                        q.j = 0;
                        B = A + D.length;
                        A = u;
                        A.l++;
                        A.j.add(E)
                    }
                }
                if (k) {
                    for (const B of k) b.insertBefore(B, h);
                    b.removeChild(h);
                    I += k.length - 1;
                    if (!f.l) a: {
                        h = a;q = b;v = H(c, 3);f.l = !0;k = h.document.createElement("P");k.className = "google-adfil-skip";k.appendChild(h.document.createTextNode(v));k.style.backgroundColor = "#eee";
                        for (v = q; v;) {
                            b: switch (v.tagName) {
                                case "DIV":
                                case "DL":
                                case "P":
                                case "UL":
                                case "OL":
                                case "TABLE":
                                    q = !0;
                                    break b;
                                default:
                                    q = !1
                            }
                            if (q) {
                                v.parentNode && v.parentNode.insertBefore(k, v.nextSibling);
                                break a
                            }
                            v = v.parentElement
                        }
                        h.document.body.appendChild(k)
                    }
                }
            }
            else {
                a: if (k = h, k.nodeType !== Node.ELEMENT_NODE || k.classList.contains("google-adfil-skip")) k = !1;
                    else switch (k.tagName) {
                        case "A":
                        case "IFRAME":
                        case "BUTTON":
                        case "CANVAS":
                        case "CODE":
                        case "EMBED":
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "OBJECT":
                        case "PRE":
                        case "SAMP":
                        case "SCRIPT":
                        case "SELECT":
                        case "SUB":
                        case "SUPER":
                        case "SVG":
                        case "TEXTAREA":
                        case "VIDEO":
                            k = !1;
                            break a;
                        default:
                            k = !0
                    }
                k && kh(a, h, c, d, e, f, g)
            }
        }
    }

    function mh(a, b, c, d, e, f) {
        const g = Rf("https://www.google.com/search?psb=1&tbm=shop" + `&q=${encodeURIComponent(`"${b}"`)}` + `&utm_source=${encodeURIComponent(c)}` + "&utm_medium=web-affiliate" + `&utm_campaign=${encodeURIComponent(d)}` + `&utm_term=${encodeURIComponent(e)}` + "&utm_content=textlink"),
            h = a.document.createElement("A");
        h.appendChild(a.document.createTextNode(e));
        h.href = Gd(g);
        h.style.setProperty("webkitTextDecoration", h.style.textDecoration = "underline dotted currentcolor");
        const k = a.performance.now();
        h.addEventListener("click", l => {
            ih("adfil-clk", {
                wp: c,
                c: f,
                e: d,
                m: e,
                q: b,
                v: Math.round(a.performance.now() - k)
            }, 1, () => {
                a.location.href = Gd(g)
            });
            l.preventDefault();
            return !1
        });
        return h
    }

    function lh(a) {
        a = a.trim();
        return "" === a ? 0 : a.split(/\s+/).length
    };
    var nh = class {
        constructor() {
            this.l = 0;
            this.j = new Set;
            this.A = 0
        }
    };
    const oh = a => !!a;

    function ph(a) {
        if (!(qh || oh)(a)) throw Error(String(a));
    };
    var Ua = {
        Gg: 0,
        If: 1,
        Jf: 2,
        Pf: 8,
        Rg: 9,
        ng: 10,
        og: 11,
        Ng: 16,
        vf: 17,
        uf: 24,
        lg: 25,
        Oe: 26,
        Ne: 27,
        Cc: 30,
        gg: 32,
        ig: 40
    };
    var rh = {
            Pe: "google_ads_preview",
            xf: "google_mc_lab",
            Lf: "google_anchor_debug",
            Kf: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            fg: "google_scr_debug",
            hg: "google_ia_debug_allow_onclick",
            zg: "googleads",
            Cc: "google_pedestal_debug",
            Sg: "google_shoppable_images_debug",
            Tg: "google_shoppable_images_cookie",
            Ug: "google_shoppable_images_forced",
            Dc: "google_responsive_slot_debug",
            Mg: "google_responsive_slot_preview",
            Lg: "google_responsive_dummy_ad"
        },
        sh = {
            ["google_bottom_anchor_debug"]: 1,
            ["google_anchor_debug"]: 2,
            ["google_ia_debug"]: 8,
            ["google_scr_debug"]: 9,
            ["googleads"]: 2,
            ["google_pedestal_debug"]: 30
        };
    var th = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Qg: 4,
        Dc: 6
    };
    var vh = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = uh(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        uh = a => {
            let b = "";
            gg(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        wh = () => {
            var a = r.location;
            let b = !1;
            gg(rh, c => {
                vh(a, c) && (b = !0)
            });
            return b
        },
        xh = (a, b) => {
            switch (a) {
                case 1:
                    return vh(b, "google_ia_debug");
                case 2:
                    return vh(b, "google_bottom_anchor_debug");
                case 3:
                    return vh(b, "google_anchor_debug") || vh(b, "googleads");
                case 4:
                    return vh(b, "google_scr_debug");
                case 6:
                    return vh(b,
                        "google_responsive_slot_debug")
            }
            return !1
        };

    function yh(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var zh = class {
            constructor() {
                this.j = null;
                this.l = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                const a = b => this.j ? Se(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[4] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        Ah;
    var Ch = class extends w {
            constructor(a) {
                super();
                x(this, a, Bh, null)
            }
        },
        Bh = [4];
    var Dh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Fh = class extends w {
            constructor(a) {
                super();
                x(this, a, Eh, null)
            }
        },
        Eh = [3, 4];
    var Gh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
        T() {
            return J(this, Ch, 1)
        }
        l() {
            return y(this, 2)
        }
    };
    var Hh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function Ih() {
        var a = new Jh;
        return z(a, 2, 1)
    }
    var Jh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Lh = class extends w {
            constructor(a) {
                super();
                x(this, a, Kh, null)
            }
            T() {
                return J(this, Ch, 1)
            }
            l() {
                return y(this, 2)
            }
        },
        Kh = [6, 7, 9, 10, 11];
    var Nh = class extends w {
            constructor(a) {
                super();
                x(this, a, Mh, null)
            }
        },
        Mh = [4];
    var Oh = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Ph = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function Qh(a, ...b) {
        Mf(a, !0, "trustedResourceUrl is a template literal tag function and can only be called as such (e.g. trustedResourceUrl`/somepath.js`)");
        if (0 === b.length) return Ed(a[0]);
        var c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("The origin contains unsupported characters.");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("The top-level domain must start with a letter.");
            d = !0
        } else d = !1;
        if (d = !d) {
            if (/^\//.test(c))
                if ("/" === c || 1 < c.length && "/" !== c[1] && "\\" !== c[1]) d = !0;
                else throw Error("The path start in the url is invalid.");
            else d = !1;
            d = !d
        }
        if (d) {
            if (/^about:blank/.test(c)) {
                if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
                c = !0
            } else c = !1;
            d = !c
        }
        if (d) throw Error("Trying to interpolate expressions in an unsupported url format.");
        c = [a[0]];
        for (d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Ed(c.join(""))
    }

    function Rh() {
        var a;
        var b = Sh;
        var c;
        if (null === (c = td()) || void 0 === c || !c.isScript(b))
            if (b instanceof yd) b = b.j;
            else throw Error("wrong type");
        b = (null === (a = td()) || void 0 === a ? 0 : a.isScript(b)) ? TrustedScript.prototype.toString.apply(b) : b;
        return Ed(URL.createObjectURL(new Blob([b], {
            type: "text/javascript"
        })))
    };
    var Th = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    var Uh = class {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.pubWin = b;
            this.G = c;
            this.A = d;
            this.F = e;
            this.C = b.document.getElementById(this.G.google_async_iframe_id + "_anchor");
            this.D = b.document.getElementById(this.G.google_async_iframe_id + "_expand");
            this.H = -1;
            this.l = 0;
            this.J = this.L = null;
            this.N = this.I = 0;
            this.B = [];
            this.Ca = this.K = ""
        }
    };
    var Vh = (a, b, c) => {
        a.l |= 2;
        return b[c % b.length]
    };
    var Wh = class {
            constructor() {
                var a = {
                    notify: /^expandable-xpc-ready$/
                };
                this.j = this.l = null;
                "function" === typeof a ? this.j = a : this.l = a
            }
            getVerifier(a) {
                return this.l ? this.l[a] : null
            }
            getSchema(a) {
                return this.j ? this.j(a) : null
            }
            doesReturnAnotherSchema() {
                return this.j ? !0 : !1
            }
        },
        Xh = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            L(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Ld(a, "message", e));
                return g
            }
        },
        Yh = (a, b, c, d = null) => {
            const e = Xh(a, b, Ma(c, () => e()), d);
            return e
        },
        Zh = class extends Error {
            constructor() {
                super()
            }
        },
        $h = (a, b, c, d, e) => {
            if (Array.isArray(a)) {
                var f = a;
                for (var g = 0; g < a.length; g++) a[g] = $h(a[g], b, c, d, e)
            } else if (ea(a)) {
                if (b.doesReturnAnotherSchema())
                    if (f = b.getSchema(a)) {
                        if (b = f, b.doesReturnAnotherSchema()) return $h(a, b, c, d, e)
                    } else throw new Zh;
                f = {};
                for (g in a)
                    if (Object.prototype.hasOwnProperty.call(a, g)) {
                        d = b.getVerifier(g);
                        c = a[g];
                        var h = b;
                        if (d) {
                            const k = d.predicate || d;
                            if ("function" === typeof k) {
                                h = k(c);
                                if (!h) {
                                    if (!d || !d.nullOnInvalid) throw new Zh;
                                    e && (e[g] = !0);
                                    f[g] = null;
                                    continue
                                }
                                if (h instanceof Wh) d = null;
                                else {
                                    f[g] = c;
                                    continue
                                }
                            }
                        } else if (!ea(c)) continue;
                        f[g] = $h(c, h, g, d, e)
                    }
            } else if (f = a, b = d ? d.predicate || d : void 0, b instanceof RegExp && !b.test("string" === typeof a || void 0 == a ? a : String(a)) || "function" === typeof b && !b(a)) {
                if (!d || !d.nullOnInvalid) throw new Zh;
                e && (e[c] = !0);
                f = null
            }
            return f
        },
        bi = (a, b) => {
            var c = ai;
            return Xh(a, "ct", (d, e) => {
                try {
                    const f = $h(d, c, null, null, null);
                    b(f, e)
                } catch (f) {
                    if (!(f instanceof Zh)) throw f;
                }
            })
        },
        ci = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && ci(a[f], b, c, d, --e)
        };
    var di = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        ei = {
            [1]: 1,
            [2]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function fi(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new gi) : a.google_reactive_ads_global_state = new hi;
        return a.google_reactive_ads_global_state
    }
    class hi {
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
            this.floatingAdsStacking = new gi
        }
    }
    var gi = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var ii = 728 * 1.38,
        ji = (a, b = 420) => (a = S(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        ki = a => {
            var b = S(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        mi = a => Math.max(0, li(a, !0) - S(a).clientHeight),
        S = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        li = (a, b) => {
            const c = S(a);
            return b ? c.scrollHeight == S(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        oi = (a, b) => ni(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        pi = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        qi = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        ri = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        si = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        ti = (a, b, c, d, e) => {
            P(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        ni = a => 26 === a || 27 === a || 40 === a;

    function ui() {
        this.N = this.N;
        this.W = this.W
    }
    ui.prototype.N = !1;
    ui.prototype.Ya = function() {
        this.N || (this.N = !0, this.B())
    };
    ui.prototype.B = function() {
        if (this.W)
            for (; this.W.length;) this.W.shift()()
    };

    function vi(a, b, c) {
        try {
            if (! of (c.origin)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Oa[d]) && $g(a.da, 168, () => {
            e.call(a, b, c)
        }, f => {
            f.msg_type = d
        })
    }
    class wi extends ui {
        constructor(a) {
            var b = Q;
            super();
            this.j = a;
            this.da = dh;
            this.Ec = b;
            this.Oa = {};
            this.Bc = ah(this.da, 168, (c, d) => void vi(this, c, d));
            this.Xc = ah(this.da, 169, (c, d) => ti(this.j, "ras::xsf", this.Ec, c, d));
            this.na = [];
            this.L(this.Oa);
            this.na.push(Xh(this.j, "sth", this.Bc, this.Xc))
        }
        B() {
            for (const a of this.na) a();
            this.na.length = 0;
            super.B()
        }
    };
    class xi extends wi {
        constructor(a) {
            super(a);
            this.j = a
        }
    };

    function yi(a) {
        try {
            const b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Sa(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    class zi extends xi {
        constructor(a, b) {
            super(a);
            this.l = b;
            this.A = () => {};
            L(this.l, "load", this.A)
        }
        B() {
            this.l && Ld(this.l, "load", this.A);
            super.B();
            this.l = null
        }
        L(a) {
            a["adsense-labs"] = b => {
                if (b = si(b).settings) try {
                    var c = new Xd(JSON.parse(b));
                    if (C(c, 1)) {
                        var d = this.j,
                            e = y(c, 1) || "";
                        const f = yi(d);
                        null !== c && (f[e] = md(c));
                        try {
                            d.localStorage.setItem("google_adsense_settings", JSON.stringify(f))
                        } catch (g) {}
                    }
                } catch (f) {}
            }
        }
    };
    class Ai {
        constructor(a) {
            this.methodName = a
        }
    }
    var Bi = new Ai(15),
        Ci = new Ai(2),
        Di = new Ai(3),
        Ei = new Ai(5),
        Fi = new Ai(6),
        Gi = new Ai(7),
        Hi = new Ai(8),
        Ii = new Ai(14),
        Ji = (a, b, c) => b[a.methodName] || c || (() => {});
    var Ki = (a = r) => a.ggeac || (a.ggeac = {});

    function Li(a, b) {
        a.j = c => {
            Ji(Ci, b, () => [])(c, 1)
        };
        a.l = () => Ji(Di, b, () => [])(1)
    }
    class Mi {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    }
    ca(Mi);
    var U = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Ni = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var Oi = new U(236),
        Pi = new U(383, !0),
        Qi = new U(1043),
        Ri = new Ni(1032),
        Si = new Ni(1044),
        Ti = new Ni(1017, -1),
        Ui = new U(316),
        Vi = new U(1021, !0),
        Wi = new U(334),
        Xi = new Ni(54),
        Yi = new U(1004),
        Zi = new U(313),
        $i = new Ni(66, -1),
        aj = new Ni(65, -1),
        bj = new U(369),
        cj = new U(368),
        dj = new Ni(1067),
        ej = new U(348),
        fj = new U(265),
        gj = new U(1071),
        hj = new U(260),
        ij = new U(233),
        jj = new Ni(29, 2),
        kj = new Ni(30, 3),
        lj = new Ni(1056),
        mj = new Ni(1057),
        nj = new Ni(1072),
        oj = new U(1073),
        pj = new U(290),
        qj = new U(190),
        rj = new Ni(1068),
        sj = new U(1069),
        tj = new U(1036, !0),
        uj = new U(1063),
        vj = new U(154),
        wj = new U(1045),
        xj = new U(1074),
        yj = new U(251),
        zj = new U(1031),
        Aj = new Ni(1066),
        Bj = new U(83),
        Cj = new U(360245598),
        Dj = new U(1936, !0),
        Ej = new Ni(1927),
        Fj = new U(1931, !0),
        Gj = new U(77),
        Hj = new U(78),
        Ij = new U(309),
        Jj = new U(373442741),
        Kj = new U(80),
        Lj = new U(76),
        Mj = new U(81),
        Nj = new U(84),
        Oj = new U(3655606),
        Pj = new U(188),
        Qj = new Ni(1935);
    var Rj = class {
        constructor() {
            const a = {};
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.B = (b, c) => null != a[b] ? a[b] : c;
            this.C = (b, c) => null != a[b] ? a[b] : c;
            this.j = () => {}
        }
    };
    ca(Rj);
    var V = a => Rj.V().l(a.j, a.defaultValue),
        Sj = a => Rj.V().A(a.j, a.defaultValue);
    class Tj {
        constructor() {
            this.j = () => {}
        }
    }
    ca(Tj);
    var Vj = (a = Ki()) => {
            Li(Mi.V(), a);
            Uj(a);
            Tj.V().j = Ji(Ii, a);
            Rj.V().j()
        },
        Uj = a => {
            const b = Rj.V();
            b.l = (c, d) => Ji(Ei, a, () => !1)(c, d, 1);
            b.A = (c, d) => Ji(Fi, a, () => 0)(c, d, 1);
            b.B = (c, d) => Ji(Gi, a, () => "")(c, d, 1);
            b.C = (c, d) => Ji(Hi, a, () => [])(c, d, 1);
            b.j = () => {
                Ji(Bi, a)(1)
            }
        };
    var Wj = a => {
        const b = Mi.V().l();
        a = ae(a);
        return b.concat(a).join(",")
    };
    var Xj = (a, b) => {
        const c = $e();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(r.document.location.protocol), "//", encodeURIComponent(r.document.location.host)].join("")
    };
    nb(gb(hb("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var ai = new Wh;

    function Yj(a, b, c, d) { of (d.origin) && "expandable-xpc-ready" == c.notify && Zj(a, b)
    }

    function Zj(a, b) {
        var c = a.Eb;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Vb,
            f: a.Hd,
            g: a.Qc,
            h: a.sd,
            i: void 0
        });
        r.setTimeout(R(220, vg(na(function(d) {
            Le(c.document, Sf(d))
        }, b))), 0)
    };

    function ak(a, b = r) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new me(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function bk(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };
    var ck = (a, b = !1) => {
            try {
                return b ? (new ne(a.innerWidth, a.innerHeight)).round() : re(a || window).round()
            } catch (c) {
                return new ne(-12245933, -12245933)
            }
        },
        dk = (a, b) => {
            var c;
            var d;
            c = (d = (d = Hf()) && (c = d.initialLayoutRect) && "number" === typeof c.top && "number" === typeof c.left && "number" === typeof c.width && "number" === typeof c.height ? new Df(c.left, c.top, c.width, c.height) : null) ? new me(d.left, d.top) : (c = If()) && ea(c.rootBounds) ? new me(c.rootBounds.left + c.boundingClientRect.left, c.rootBounds.top + c.boundingClientRect.top) : null;
            if (c) return c;
            try {
                var e = new me(0, 0),
                    f = te(qe(b));
                if (Fc(f, "parent")) {
                    do {
                        if (f == a) var g = $f(b);
                        else {
                            var h = Zf(b);
                            g = new me(h.left, h.top)
                        }
                        c = g;
                        e.x += c.x;
                        e.y += c.y
                    } while (f && f != a && f != f.parent && (b = f.frameElement) && (f = f.parent))
                }
                return e
            } catch (k) {
                return dh.ca(888, k), new me(-12245933, -12245933)
            }
        };
    var fk = class extends w {
            constructor() {
                super();
                x(this, void 0, ek, null)
            }
        },
        ek = [15];
    var gk = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    var hk = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    let ik = null,
        jk = null;
    var kk = () => {
            if (null != ik) return ik;
            ik = !1;
            try {
                const a = yg(r);
                a && -1 !== a.location.hash.indexOf("google_logging") && (ik = !0);
                r.localStorage.getItem("google_logging") && (ik = !0)
            } catch (a) {}
            return ik
        },
        lk = () => {
            if (null != jk) return jk;
            jk = !1;
            try {
                const a = yg(r);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || r.localStorage.getItem("auto_ads_logging")) jk = !0
            } catch (a) {}
            return jk
        },
        mk = (a, b = []) => {
            let c = !1;
            r.google_logging_queue || (c = !0, r.google_logging_queue = []);
            r.google_logging_queue.push([a, b]);
            c && kk() && Le(r.document,
                nb(gb(hb("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    nb(gb(hb("https://pagead2.googlesyndication.com/pagead/osd.js")));

    function nk() {
        var a = ok,
            b = pk;
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (d) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            let d;
            !0 === c ? d = 2 : !1 !== c && (d = Ne([0], a), null == d && ((d = Ne([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };

    function qk(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function rk(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function sk(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    const tk = new Wg(O());
    var uk = () => {
        const a = O();
        a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Ug(tk))
    };
    (() => {
        const a = O();
        a && a.document && ("complete" == a.document.readyState ? uk() : tk.j && L(a, "load", () => {
            uk()
        }))
    })();
    var wk = () => {
            var a = vk;
            const b = O() || r;
            return b.google_osd_loaded ? !1 : (Le(b.document, a), b.google_osd_loaded = !0)
        },
        xk = (a, b, c) => {
            a && (c ? L(a, "load", b) : Ld(a, "load", b))
        },
        yk = () => {
            const a = (O() || r).google_osd_amcb;
            return "function" === typeof a ? a : null
        },
        zk = nb(gb(hb("https://www.googletagservices.com/activeview/js/current/osd.js")));

    function Ak() {
        const a = O(),
            b = a.__google_ad_urls;
        if (!b) return a.__google_ad_urls = new Bk(a);
        try {
            if (0 <= b.getOseId()) return b
        } catch (c) {}
        try {
            return a.__google_ad_urls = new Bk(a, b)
        } catch (c) {
            return a.__google_ad_urls = new Bk(a)
        }
    }
    class Bk {
        constructor(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.A = b ? b.A : "";
            this.j = b && b.j ? b.j : [];
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].B = !0
        }
        getNewBlocks(a, b) {
            let c = this.j.length;
            for (let d = 0; d < c; d++) {
                let e = this.j[d];
                !e.A && e.j && (e.A = !0, a(e.j, e.D, e.J, e.l, void 0, e.B, e.F, e.I, e.H))
            }
            b && ((O() || r).google_osd_amcb = a)
        }
        setupOse(a) {
            if (this.getOseId()) return this.getOseId();
            let b = nk();
            if (!b) return 0;
            this.l = b;
            this.A = String(a || 0);
            return this.getOseId()
        }
        getOseId() {
            return window && Math.random && navigator ? this.l : -1
        }
        getCorrelator() {
            return this.A
        }
        numBlocks() {
            return this.j.length
        }
        registerAdBlock(a,
            b, c, d, e, f, g = () => {}) {
            c = yk();
            e = Ng() || -1;
            f = r.pageYOffset;
            0 <= f || (f = -1);
            c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Ck(a, b, d, g, e, f), this.j.push(g), xk(d, g.C, !0), vk || (vf(r, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om" + `&rs=${b}` + `&req=${a}`), vk = zk), wk() && jg())
        }
        unloadAdBlock(a, b, c = !1) {
            b = O();
            void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
            c && (c = pf(this.j, d => d.j == a)) && xk(a, c.C, !1)
        }
    }
    var vk = null,
        pk = 0,
        ok = 0,
        Ck = class {
            constructor(a, b, c, d = ba, e = -1, f = -1) {
                this.D = a;
                this.J = b;
                this.j = c;
                this.B = this.A = this.l = !1;
                this.F = d;
                this.I = e;
                this.H = f;
                this.C = () => this.l = !0
            }
        };
    window.Goog_AdSense_getAdAdapterInstance = Ak;
    pa("Goog_AdSense_OsdAdapter", Bk);

    function Dk() {
        let a = O();
        const b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new Ek
    }
    class Ek {
        getNewBlocks() {}
        setupOse() {}
        getOseId() {
            return -1
        }
        getCorrelator() {
            return ""
        }
        numBlocks() {
            return 0
        }
        registerAdBlock() {}
        unloadAdBlock() {}
    };
    let Fk = null;
    var Gk = (a, b) => {
            let c = 0,
                d = a,
                e = 0;
            for (; a && a != a.parent;)
                if (a = a.parent, e++, Fe(a)) d = a, c = e;
                else if (b) break;
            return {
                $: d,
                level: c
            }
        },
        Hk = () => {
            Fk || (Fk = Gk(r, !0).$);
            return Fk
        };
    var Ik = (a, b, c, d) => {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (a && a.top == a) return !1;
            const e = b.documentElement;
            if (c && d) {
                let f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Jk = (a, b) => {
            gg(a, (c, d) => {
                b[d] = c
            })
        },
        Kk = a => {
            let b = a.location.href;
            if (a == a.top) return {
                url: b,
                kb: !0
            };
            let c = !1;
            const d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                kb: c
            }
        },
        Lk = () => {
            var a = O();
            if (a == a.top) return 0;
            for (; a && a != a.top && Fe(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var Mk = a => {
            a = a.google_reactive_ad_format;
            return Ta(a) ? "" + a : null
        },
        Nk = a => !!Mk(a) || null != a.google_pgb_reactive,
        Ok = a => {
            a = Mk(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    const Pk = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        Qk = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var Sk = class extends w {
            constructor(a) {
                super();
                x(this, a, Rk, null)
            }
        },
        Tk = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Uk = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Rk = [3];
    var Wk = class extends w {
            constructor(a) {
                super();
                x(this, a, Vk, null)
            }
        },
        Vk = [2];
    var Xk = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var Zk = class extends w {
            constructor(a) {
                super();
                x(this, a, Yk, null)
            }
        },
        Yk = [1];
    var al = class extends w {
            constructor(a) {
                super();
                x(this, a, null, $k)
            }
        },
        bl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        cl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        dl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        $k = [
            [1, 2, 3]
        ];
    var fl = class extends w {
            constructor(a) {
                super();
                x(this, a, el, null)
            }
        },
        gl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        el = [1];
    var il = class extends w {
            constructor(a) {
                super();
                x(this, a, hl, null)
            }
        },
        kl = class extends w {
            constructor(a) {
                super();
                x(this, a, jl, null)
            }
        },
        ll = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        nl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, ml)
            }
        },
        pl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, ol)
            }
        },
        ql = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        hl = [1],
        jl = [1],
        ml = [
            [1, 2]
        ],
        ol = [
            [1, 2]
        ];

    function rl(a) {
        return J(a, sl, 13)
    }

    function tl(a) {
        return J(a, ul, 15)
    }
    var wl = class extends w {
            constructor(a) {
                super();
                x(this, a, vl, null)
            }
        },
        xl = class extends w {
            constructor() {
                super();
                x(this, void 0, null, null)
            }
        },
        yl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Al = class extends w {
            constructor(a) {
                super();
                x(this, a, zl, null)
            }
        },
        Bl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Cl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        sl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Dl = class extends w {
            constructor(a) {
                super();
                x(this,
                    a, null, null)
            }
        },
        ul = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        El = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Fl = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        vl = [1, 2, 5, 7],
        zl = [2, 5, 6, 11];
    var Gl = (a, b) => {
        a = y(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const Il = (a, b) => {
            a = Qk(Pk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Se(a),
                d = Hl(a);
            return b.find(e => {
                const f = C(e, 7) ? y(J(e, Bl, 7), 1) : y(e, 1);
                e = C(e, 7) ? y(J(e, Bl, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        Hl = a => {
            const b = {};
            for (;;) {
                b[Se(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    class Jl {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function Kl(a, b) {
        a.j.forEach((c, d) => void b(c, d, a))
    }

    function Ll(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Ml(d)
    }

    function Nl(a, b = 1) {
        a = a.j.slice(0);
        const c = new Jl(b);
        Ja(a, () => c.next());
        return new Ml(a)
    }
    const Ml = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        filter(a) {
            return new Ml(ya(this.j, a))
        }
        apply(a) {
            return new Ml(a(this.j.slice(0)))
        }
        sort(a) {
            return new Ml(this.j.slice(0).sort(a))
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Ml(b)
        }
    };
    class Ol {
        constructor(a, {
            Tb: b,
            Ic: c,
            qd: d,
            uc: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Ml(b || []);
            this.l = e;
            this.j = d
        }
    };

    function Pl(a, b) {
        return void 0 !== a.j[Ql(b)]
    }

    function Rl(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Sl(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Tl = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Ql(a);
            this.j[c] = b;
            this.l[c] = a
        }
        get(a, b) {
            a = Ql(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ea() {
            return Rl(this).length
        }
    };

    function Ql(a) {
        return a instanceof Object ? String(fa(a)) : a + ""
    };
    var Ul = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Tl;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Wl = a => {
            var b = Vl(a);
            a = [];
            for (let c of b) b = String(c.Aa), a.push(c.la + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Vl = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                la: "a",
                Aa: Xl(c)
            });
            null != a.A && b.push({
                la: "as",
                Aa: a.A
            });
            null != a.j && b.push({
                la: "i",
                Aa: String(a.j)
            });
            null != a.l && b.push({
                la: "rp",
                Aa: String(a.l)
            });
            b.sort(function(d, e) {
                return d.la.localeCompare(e.la)
            });
            b.unshift({
                la: "t",
                Aa: Yl(a.C)
            });
            return b
        },
        Yl = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Xl = a => {
            a = a.j.slice(0).map(Zl);
            a = JSON.stringify(a);
            return Se(a)
        },
        Zl = a => {
            const b = {};
            null != y(a, 7) && (b.q = y(a, 7));
            null !=
                y(a, 2) && (b.o = y(a, 2));
            null != y(a, 5) && (b.p = y(a, 5));
            return b
        };

    function $l(a) {
        const b = [].slice.call(arguments).filter(Na(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Wb || []);
            d = Object.assign(d, e.Fa())
        });
        return new am(c, d)
    }

    function bm(a) {
        switch (a) {
            case 1:
                return new am(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new am(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new am(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new am(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function cm(a) {
        return null == a ? null : new am(null, {
            google_placement_id: Wl(a)
        })
    }
    class am {
        constructor(a, b) {
            this.Wb = a;
            this.j = b
        }
        Fa() {
            return this.j
        }
    };
    const dm = {
        ["google_ad_channel"]: !0,
        ["google_ad_host"]: !0
    };
    var em = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            P(Q, "ama", b, !0, .01, void 0)
        },
        fm = a => {
            const b = {};
            Qe(dm, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    var gm = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                em(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            em(a, {
                lserr: 1
            })
        }
    };
    var hm = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };

    function im(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.Qa = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                ea(c) && (a.G = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                ig(a.B) && ig(a.l) || P(Q, "rctnosize", b, !0, void 0, void 0);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.H(b)
    }
    class jm {
        constructor() {
            this.D = this.G = this.A = this.Qa = null;
            this.l = this.B = 0
        }
        H() {
            return !0
        }
    };
    class km extends jm {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.F = !1
        }
        H(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = od(wl, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.F = !0);
            return !0
        }
    };
    var nm = (a, b) => {
        const c = new lm(a, b);
        return () => mm(c)
    };

    function mm(a) {
        if (a.j) return !1;
        if (null == a.l) return om(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return om(a), !0;
        pm(a, b);
        return !0
    }

    function om(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function pm(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            om(a)
        }, b)
    }
    class lm {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function qm(a, b) {
        a.D ? b(a.A) : a.l.push(b)
    }

    function rm(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class sm {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.F = nm(a, () => {
                if (null != this.C) {
                    var b = li(this.j, !0) - this.C;
                    1E3 < b && rm(this, b)
                }
            });
            this.B = null
        }
        P(a, b) {
            null == a ? (this.C = a = li(this.j, !0), this.j.addEventListener("scroll", this.F), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.P(void 0, b)
            }, a)
        }
        Ya() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.F);
            this.l = [];
            this.A = null
        }
    };
    const tm = class {
        constructor(a) {
            this.j = new Tl;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        contains(a) {
            return Pl(this.j, a)
        }
    };
    var um = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function vm(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? od(um, b) : null
        } catch (b) {
            return null
        }
    }

    function wm(a, b) {
        if (void 0 !== a.zb) {
            let c = vm(b);
            c || (c = new um);
            void 0 !== a.zb && z(c, 2, a.zb);
            z(c, 1, oa() + 864E5);
            a = c.F();
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = vm(b)) && y(a, 1) < oa()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function xm(a, b, c = !1) {
        a.l.push(b);
        c && b(a.j)
    }

    function ym(a, b) {
        a.j = b;
        wa(a.l, c => {
            c(a.j)
        })
    }

    function zm(a, b) {
        xm(b, c => ym(a, c), !0)
    }
    class Am {
        constructor(a) {
            this.j = a;
            this.l = []
        }
        map(a) {
            const b = new Am(a(this.j));
            xm(this, c => ym(b, a(c)));
            return b
        }
    };
    const Bm = ["-webkit-text-fill-color"];

    function Cm(a) {
        if (Lc) {
            {
                const c = Me(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Dm(a)
                } else a = Em()
            }
        } else a = Em();
        return a
    }
    var Em = () => {
        const a = {
            all: "initial"
        };
        wa(Bm, b => {
            a[b] = "unset"
        });
        return a
    };

    function Dm(a) {
        wa(Bm, b => {
            delete a[b]
        });
        return a
    };

    function Fm(a, b) {
        const c = a.document.createElement("img");
        Gm(a, c);
        vc(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        M(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Hm(a, b) {
        const c = b.document.createElement("button");
        Gm(b, c);
        M(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Im(a, b, c) {
        const d = b.document.createElement("img");
        vc(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        Gm(b, d);
        M(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Jm(a) {
        const b = a.document.createElement("ins");
        Gm(a, b);
        M(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Km {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new Am(!1)
        }
        $a(a, b, c, d) {
            const e = Fm(a, d),
                f = Fm(a),
                g = Hm(this, a),
                h = Im(this, a, c);
            a = Jm(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            xm(this.j, k => {
                M(e, {
                    display: k ? "none" : "inline"
                });
                M(f, {
                    display: k ? "inline" : "none"
                });
                k ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        cc() {
            return 40
        }
        lc() {
            ym(this.j, !1);
            return 0
        }
        mc() {
            ym(this.j, !0)
        }
    }

    function Gm(a, b) {
        M(b, Cm(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Lm(a, b) {
        const c = b.document.createElement("button");
        Mm(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        M(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function Nm(a, b, c, d) {
        const e = b.document.createElement("div");
        M(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        M(f, Cm(b));
        M(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (M(e, {
                    "flex-direction": "row"
                }), a.j && M(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), M(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                M(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (M(e, {
                border: "0",
                "flex-direction": "column"
            }), M(f, {
                "margin-left": "0",
                "text-align": "center"
            }), M(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && M(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Mm(a, b, c) {
        M(c, Cm(b));
        M(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.F,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.H,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class Om {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.H = c;
            this.l = d;
            this.F = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        $a(a) {
            const b = a.document.createElement("div");
            Mm(this, a, b);
            M(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                vc(c, this.B);
                Mm(this, a, c);
                M(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Mm(this, a, c);
            M(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Lm(this, a);
            c.appendChild(b);
            return this.A ? Nm(this, a, c, this.A) : c
        }
    };

    function Pm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Qm(a) {
        a = za(a, b => new Af(b.top, b.right, b.bottom, b.left));
        a = Rm(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Rm(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Aa(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, Bf(a[0]))
    };

    function Sm(a, b, c) {
        return {
            top: a.j - c,
            right: a.A + a.l + b,
            bottom: a.j + c,
            left: a.A - b
        }
    }
    class Tm {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Um(a) {
        return new Vm({
            value: a
        }, null)
    }

    function Wm(a) {
        return null != a.j ? a.j.value : null
    }

    function Xm(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class Vm {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof Vm ? a : Um(a)) : this
        }
    };
    var Ym = (a, b) => {
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
        Zm = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = !!a.rss || 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b.top == b
        },
        $m = (a, b, c) => {
            a = a.style;
            "rtl" == b ? V(yj) ? a.setProperty("margin-right", c, "important") :
                a.marginRight = c : V(yj) ? a.setProperty("margin-left", c, "important") : a.marginLeft = c
        };
    const an = (a, b, c) => {
        a = Ym(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var bn = (a, b) => {
            b = b.parentElement;
            return b ? (a = Me(b, a)) ? a.direction : "" : ""
        },
        cn = (a, b, c) => {
            if (0 === an(a, b, c)) return !1;
            $m(b, c, "0px");
            const d = an(a, b, c);
            $m(b, c, -1 * d + "px");
            a = an(a, b, c);
            0 !== a && a !== d && $m(b, c, d / (a - d) * d + "px");
            return !0
        };

    function dn(a, b) {
        en(a).forEach(b, void 0)
    }

    function en(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function fn(a) {
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
    }

    function gn(a) {
        return en(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function hn(a, b) {
        a = Ce(new pe(a), "DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function jn(a, b, c) {
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
        fn(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function kn(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            fn(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var mn = (a, b, c, d = 0) => {
            var e = ln(b, c, d);
            if (e.P) {
                for (c = b = e.P; c = e.bb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.ob
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            jn(a, e.anchor, e.position)
        },
        nn = (a, b, c, d = 0) => {
            V(Zi) ? mn(a, b, c, d) : jn(a, b, c)
        };

    function ln(a, b, c) {
        const d = f => {
                f = on(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = on(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    P: pn(a.previousSibling, d),
                    bb: f => pn(f.previousSibling, d),
                    ob: 0
                };
            case 2:
                return {
                    P: pn(a.lastChild, d),
                    bb: f => pn(f.previousSibling, d),
                    ob: 0
                };
            case 3:
                return {
                    P: pn(a.nextSibling, e),
                    bb: f => pn(f.nextSibling, e),
                    ob: 3
                };
            case 1:
                return {
                    P: pn(a.firstChild, e),
                    bb: f => pn(f.nextSibling, e),
                    ob: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function on(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function pn(a, b) {
        return a && b(a) ? a : null
    };

    function qn(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Cc(d.Kb);
            a[e] = d.value
        }
    }

    function rn(a, b, c, d, e, f) {
        a = tn(a, e);
        a.Y.setAttribute("data-ad-format", d ? d : "auto");
        un(a, b, c, f);
        return a
    }

    function vn(a, b, c = null) {
        a = tn(a, {});
        un(a, b, null, c);
        return a
    }

    function un(a, b, c, d) {
        var e = [];
        if (d = d && d.Wb) a.sa.className = d.join(" ");
        a = a.Y;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function tn(a, b) {
        var c = hn(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.nb && qn(d, b.nb);
        a = Ce(new pe(a), "INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.Rb && (d.marginTop = b.Rb);
        b.wb && (d.marginBottom = b.wb);
        b.ya && qn(d, b.ya);
        c.appendChild(a);
        return {
            sa: c,
            Y: a
        }
    }

    function wn(a, b, c) {
        b.setAttribute("data-adsbygoogle-status", "reserved");
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Fa();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function xn(a) {
        var b = gn(a.document);
        wa(b, function(c) {
            var d = yn(a, c),
                e;
            if (e = d) e = Ym(c, a), e = !((e ? e.y : 0) < S(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), wn(a, c))
        })
    }

    function yn(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in Zd) a[Zd[c]] && (b[Zd[c]] = a[Zd[c]]);
        return b
    };

    function zn(a) {
        var b = [];
        dn(a.getElementsByTagName("p"), function(c) {
            100 <= An(c) && b.push(c)
        });
        return b
    }

    function An(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        dn(a.childNodes, function(c) {
            b += An(c)
        });
        return b
    }

    function Bn(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Cn(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function Dn(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.B)
        } catch (g) {}
        if (!c.length) return [];
        b = Ga(c);
        b = Cn(a, b);
        "number" === typeof a.l && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.A) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = zn(b[d]),
                    f = a.A;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const En = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function Fn(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || y(a, 3) || 0 < y(a, 4).length) {
            var c = y(a, 3),
                d = y(a, 1),
                e = y(a, 4);
            b = y(a, 2);
            var f = y(a, 5);
            a = Gn(y(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Bn(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Bn(e[c]);
            b = (e = g) ? new En(e, b, f, a) : null
        } else b = b ? new En(b, y(a, 2), y(a, 5), Gn(y(a, 6))) : null;
        return b
    }
    var Hn = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Gn(a) {
        return null == a ? a : Hn[a]
    }

    function In(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.Kb = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Jn(a, b) {
        var c = {};
        a && (c.Rb = y(a, 1), c.wb = y(a, 2), c.clearBoth = !!F(a, 3));
        b && (c.nb = In(K(b, Dh, 3)), c.ya = In(K(b, Dh, 4)));
        return c
    }
    var Kn = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Ln = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const Mn = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return rn(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    const Nn = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < K(this.j, Fh, 9).length ? K(this.j, Fh, 9)[0] : null,
                f = Jn(J(this.j, Hh, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = Ce(new pe(d), g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.nb && qn(c.style, f.nb);
                d = Ce(new pe(d), "INS");
                f.ya && qn(d.style, f.ya);
                c.appendChild(d);
                f = {
                    sa: c,
                    Y: d
                };
                f.Y.setAttribute("data-ad-type", "text");
                f.Y.setAttribute("data-native-settings-key",
                    e);
                un(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < K(this.j, Fh, 9).length ? K(this.j, Fh, 9)[0] : null;
            if (!a) return null;
            a = K(a, Dh, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10)) return parseInt(y(c, 2), 10)
            }
            return null
        }
    };
    var On = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        Kb: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    ya: g
                }
            } else c = {};
            a = rn(d.document, a, f, e, c, b);
            a.Y.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        Fa() {
            return this.j
        }
    };
    class Pn {
        constructor(a) {
            this.l = a
        }
        j() {
            return new am([], {
                ["google_ad_type"]: this.l,
                ["google_reactive_ad_format"]: 26,
                ["google_ad_format"]: "fluid"
            })
        }
    };
    var Qn = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = Dn(this.B, a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Rn(a, b, c, d) {
        var e = a.T();
        if (!e) return null;
        var f = Fn(e);
        if (!f) return null;
        var g = a.l();
        g = Kn[g];
        var h = void 0 === g ? null : g;
        if (null === h) return null;
        g = (g = J(a, Hh, 3)) ? F(g, 3) : null;
        f = new Qn(f, h);
        h = y(a, 10).slice(0);
        C(e, 5) && h.push(1);
        var k = d ? d : {};
        d = y(a, 12);
        e = C(a, 4) ? J(a, Jh, 4) : null;
        switch (y(a, 8)) {
            case 1:
                return k = k.Yc || null, new Sn(f, new Mn(Jn(J(a, Hh, 3), null)), k, g, 0, h, e, c, b, d, a);
            case 2:
                return new Sn(f, new Nn(a), k.rd || new Pn("text"), g, 1, h, e, c, b, d, a)
        }
        return null
    }

    function Tn(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = Rn(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }

    function Un(a) {
        return a.B
    }

    function Vn(a) {
        return a.D instanceof On ? a.D.Fa() : null
    }

    function Wn(a, b, c) {
        Pl(a.K, b) || a.K.set(b, []);
        a.K.get(b).push(c)
    }

    function Xn(a) {
        return hn(a.j.document, a.I || !1)
    }

    function Yn(a) {
        return a.D.A(a.j)
    }

    function Zn(a, b = null, c = null) {
        return new Sn(a.H, b || a.D, c || a.L, a.I, a.ua, a.Hb, a.Ia, a.j, a.W, a.F, a.A, a.C, a.N)
    }
    class Sn {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.H = a;
            this.D = b;
            this.L = c;
            this.I = d;
            this.ua = e;
            this.Hb = f;
            this.Ia = g ? g : new Jh;
            this.j = h;
            this.W = k;
            this.F = l;
            this.A = m;
            this.C = n;
            this.N = p;
            this.J = [];
            this.B = !1;
            this.K = new Tl
        }
        M() {
            return this.j
        }
        l() {
            return this.H.l()
        }
    };
    var $n = a => (null == a ? 0 : a.google_ad_slot) ? Um(new Ol(1, {
            Ic: a.google_ad_slot
        })) : new Vm(null, Error("Missing dimension when creating placement id")),
        bo = a => {
            switch (a.ua) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.T(), null == a ? a = null : (b = b.l(), a = null == b ? null : new Ol(0, {
                        Tb: [a],
                        uc: b
                    })));
                    return null != a ? Um(a) : new Vm(null, Error("Missing dimension when creating placement id"));
                case 2:
                    return a = ao(a), null != a ? Um(a) : new Vm(null, Error("Missing dimension when creating placement id"));
                default:
                    return new Vm(null, Error("Invalid type: " +
                        a.ua))
            }
        };
    const ao = a => {
        if (null == a || null == a.C) return null;
        const b = J(a.C, Ch, 1),
            c = J(a.C, Ch, 2);
        if (null == b || null == c) return null;
        const d = a.N;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new Ol(0, {
            Tb: [b, c],
            qd: d,
            uc: Ln[a]
        })
    };

    function co(a) {
        const b = Vn(a.O);
        return (b ? $n(b) : bo(a.O)).map(c => Wl(c))
    }

    function eo(a) {
        a.j = a.j || co(a);
        return a.j
    }

    function fo(a, b) {
        if (a.O.B) throw Error("AMA:AP:AP");
        nn(b, a.T(), a.O.l());
        a = a.O;
        a.B = !0;
        null != b && a.J.push(b)
    }
    var go = class {
        constructor(a, b, c) {
            this.O = a;
            this.l = b;
            this.U = c;
            this.j = null
        }
        T() {
            return this.l
        }
        fill(a, b) {
            var c = this.O;
            (a = c.D.l(a, b, this.l, c.j)) && fo(this, a.sa);
            return a
        }
    };
    var ho = R(754, function(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.H.j(g.j);
                h && e.push({
                    oc: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++) {
                a = d;
                var k = a.push;
                var l = e[f],
                    m = l.anchorElement,
                    n = l.oc,
                    p = n.I,
                    q = n.j.document.createElement("div");
                q.className = "google-auto-placed";
                var u = q.style;
                u.textAlign = "center";
                u.width = "100%";
                u.height = "0px";
                u.clear = p ? "both" : "none";
                var v = q;
                try {
                    nn(v, m, n.l());
                    var A = v
                } catch (D) {
                    throw kn(v), D;
                }
                k.call(a, A)
            }
            var E = qi(b),
                G = ri(b);
            for (f = 0; f < d.length; f++) {
                b = G;
                k = E;
                var I =
                    d[f].getBoundingClientRect(),
                    B = e[f];
                c.push(new go(B.oc, B.anchorElement, new Tm(I.left + b, I.top + k, I.right - I.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) kn(d[f])
        }
        return c
    });
    var io = (a, b) => {
        b = b.filter(c => 5 == y(J(c, Jh, 4), 1) && 1 == y(c, 8));
        b = Tn(b, a);
        a = ho(b, a);
        a.sort((c, d) => d.U.j - c.U.j);
        return a[0] || null
    };
    var lo = (a, b, c, d = null, e) => {
            let f = 0;
            try {
                f = e ? f | (a.innerHeight >= e ? 0 : 1024) : f | (a.innerHeight >= a.innerWidth ? 0 : 8), f |= ji(a, c), f |= ki(a)
            } catch (g) {
                f |= 32
            }
            switch (b) {
                case 2:
                    jo(a, d) && (f |= 16777216);
                    break;
                case 1:
                    ko(a, d) && (f |= 16777216)
            }
            return f
        },
        jo = (a, b = null) => {
            const c = mo(a.innerWidth, 0, Math.round(a.innerWidth / 320 * 50 + 15));
            return no(a, c, b)
        },
        ko = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.round(a.innerWidth / 320 * 50 + 15),
                f = mo(c, d - e, d);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return no(a, f, b)
        },
        po = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = mo(c, e - b, e);
                f = oo(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        no = (a, b, c = null) => null != oo(a, b, c);

    function oo(a, b, c = null) {
        for (const d of b)
            if (b = qo(a, d, c)) return b;
        return null
    }

    function qo(a, b, c = null) {
        var d = a.document;
        var e = b.x;
        b = b.y;
        d.hasOwnProperty("_goog_efp_called_") || (d._goog_efp_called_ = d.elementFromPoint(e, b));
        return (d = d.elementFromPoint(e, b)) ? ro(d, a, c) || so(d, a, c) || null : null
    }

    function so(a, b, c = null) {
        const d = b.document;
        for (a = a.offsetParent; a && a != d.body; a = a.offsetParent) {
            const e = ro(a, b, c);
            if (e) return e
        }
        return null
    }
    var mo = (a, b, c) => {
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

    function ro(a, b, c = null) {
        if ("fixed" !== Yf(a, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= ag(a).width && 1 >= ag(a).height ? !0 : !1;
        c && P(c, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: d
        }, !0, 1);
        return d ? null : a
    };

    function to(a) {
        if (a.I) {
            const b = qi(a.j);
            if (b > a.l + 100 || b < a.l - 100) uo(a), a.l = mi(a.j)
        }
        a.J && a.j.clearTimeout(a.J);
        a.J = a.j.setTimeout(() => vo(a), 200)
    }

    function vo(a) {
        var b = mi(a.j);
        a.l && a.l > b && (a.l = b);
        b = qi(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), wo(a))
    }

    function xo(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function uo(a) {
        a.I = !1;
        const b = a.D.lc();
        switch (b) {
            case 0:
                ym(a.C, a.F);
                break;
            case 1:
                a.A && (M(a.A, {
                    display: "none"
                }), ym(a.C, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function wo(a) {
        a.A || (a.A = yo(a));
        M(a.A, {
            display: "block"
        });
        a.I = !0;
        a.D.mc();
        ym(a.C, a.F)
    }

    function yo(a) {
        var b = po(a.j, a.D.cc() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        M(c, Cm(a.j));
        M(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.F = a.D.$a(a.j, () => a.B(), () => {
            xo(a);
            uo(a)
        }, () => {
            xo(a);
            wo(a)
        });
        c.appendChild(a.F);
        a.K && (c.className = a.K);
        a.j.document.body.appendChild(c);
        return c
    }
    class zo {
        constructor(a, b, c) {
            this.j = a;
            this.D = b;
            this.F = null;
            this.C = new Am(null);
            this.K = c || null;
            this.A = null;
            this.I = !1;
            this.l = 0;
            this.J = null;
            this.L = () => to(this)
        }
        P() {
            this.j.addEventListener("scroll", this.L);
            this.l = mi(this.j);
            vo(this)
        }
        B() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            xo(this);
            ym(this.C, null)
        }
        H() {
            return this.C
        }
    };

    function Ao(a) {
        const b = Xn(a.A.O),
            c = a.D.$a(a.F, () => a.B());
        b.appendChild(c);
        a.C && (b.className = a.C);
        return {
            hd: b,
            dd: c
        }
    }
    class Bo {
        constructor(a, b, c, d) {
            this.F = a;
            this.A = b;
            this.D = c;
            this.C = d || null;
            this.j = null;
            this.l = new Am(null)
        }
        P() {
            const a = Ao(this);
            this.j = a.hd;
            fo(this.A, this.j);
            ym(this.l, a.dd)
        }
        B() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            ym(this.l, null)
        }
        H() {
            return this.l
        }
    };

    function Co(a) {
        ym(a.F, 0);
        null != a.A && (a.A.B(), a.A = null);
        null != a.l && (a.l.B(), a.l = null)
    }

    function Do(a) {
        a.l = new zo(a.D, a.K, a.I);
        a.l.P();
        zm(a.C, a.l.H());
        ym(a.F, 2)
    }
    class Eo {
        constructor(a, b, c, d, e) {
            this.D = a;
            this.J = b;
            this.L = c;
            this.K = d;
            this.I = e;
            this.F = new Am(0);
            this.C = new Am(null);
            this.l = this.A = this.j = null
        }
        P() {
            this.J ? (this.A = new Bo(this.D, this.J, this.L, this.I), this.A.P(), zm(this.C, this.A.H()), ym(this.F, 1), null == this.j && (this.j = new sm(this.D), this.j.P(2E3)), qm(this.j, () => {
                Co(this);
                Do(this)
            })) : Do(this)
        }
        B() {
            Co(this);
            this.j && (this.j.Ya(), this.j = null)
        }
        H() {
            return this.C
        }
    };
    var Fo = (a, b, c, d, e) => {
        a = new Eo(a, io(a, e), new Om(b, d, "#FFF", "#4A4A4A", "normal"), new Km(b, c, d), "google-dns-link-placeholder");
        a.P();
        return a
    };
    var Go = a => a.googlefc = a.googlefc || {},
        Ho = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function Io(a) {
        const b = Jo(a);
        wa(a.j.maxZIndexListeners, c => c(b))
    }

    function Jo(a) {
        a = Re(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class Ko {
        constructor(a) {
            this.j = fi(a).floatingAdsStacking
        }
    }

    function Lo(a) {
        if (null == a.j) {
            var b = a.l;
            const c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483643;
            Io(b);
            a.j = c
        }
    }

    function Mo(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Io(b);
            a.j = null
        }
    }
    class No {
        constructor(a) {
            this.l = a;
            this.j = null
        }
    };

    function Oo(a) {
        var b = Ho(a.j);
        if (Po(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = Fo(a.j, c, b, () => Qo(a), a.B))
        }
    }

    function Ro(a) {
        const b = Go(a.j);
        Ho(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => Oo(a)
        })
    }

    function Qo(a) {
        Lo(a.A);
        Ho(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.B(), a.l = null);
            Mo(a.A)
        })
    }
    class So {
        constructor(a, b, c) {
            this.j = a;
            this.A = new No(b);
            this.B = c;
            this.l = null
        }
    }

    function Po(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function To(a) {
        const b = a.document.createElement("ins");
        Uo(a, b);
        M(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function Vo(a, b, c, d) {
        const e = a.document.createElement("img");
        vc(e, b);
        d && e.setAttribute("aria-label", d);
        Uo(a, e);
        M(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function Wo(a, b) {
        const c = b.document.createElement("span");
        Uo(b, c);
        M(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function Xo(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        M(c, Cm(b));
        M(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function Yo(a) {
        const b = a.document.createElement("div");
        M(b, Cm(a));
        M(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class Zo {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new Am(!1)
        }
        $a(a, b, c, d) {
            c = To(a);
            const e = Vo(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = Vo(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = Wo(this, a),
                h = Vo(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            M(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = Xo(this, a);
            a = Yo(a);
            a.appendChild(c);
            a.appendChild(k);
            xm(this.j, l => {
                M(e, {
                    display: l ? "none" : "inline"
                });
                M(f, {
                    display: l ? "inline" : "none"
                });
                l ? (M(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), M(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), M(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (M(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), M(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), M(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        cc() {
            return 71
        }
        lc() {
            ym(this.j, !1);
            return 0
        }
        mc() {
            ym(this.j, !0)
        }
    }

    function Uo(a, b) {
        M(b, Cm(a));
        M(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function $o(a) {
        ap(a.l, b => {
            var c = a.B,
                d = b.Qd,
                e = b.cd,
                f = b.Rc;
            b = b.showRevocationMessage;
            (new Eo(c, io(c, a.A), new Om(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new Zo(d, e, f, b), "google-revocation-link-placeholder")).P()
        }, () => {
            Mo(a.j)
        })
    }
    class bp {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = new No(b);
            this.A = c;
            this.l = d
        }
    };
    var cp = a => {
        if (!a || !C(a, 1)) return !1;
        a = y(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function dp(a) {
        if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            cp(a.l) && (b = new bp(a.j, a.C, a.B || K(a.l, Lh, 4), a.A), Lo(b.j), $o(b), b = !0);
            var c;
            a: if ((c = a.l) && C(c, 3)) switch (c = y(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (Ro(new So(a.j, a.C, a.B || K(a.l, Lh, 4))), b = !0);
            b && (a.A.start(), a.j.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class ep {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.C = d;
            this.B = e || null
        }
    };
    var fp = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Ce(a, "SCRIPT");
                h.async = !0;
                Hd(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? fp(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        gp = (a, b, c = () => {}, d = () => {}) => {
            fp(oe(a), b, 0, !1, c, d)
        };
    var hp = (a = null) => {
        a = a || r;
        return a.googlefc || (a.googlefc = {})
    };
    var ip = {
        ag: 0,
        $f: 1,
        Xf: 2,
        Sf: 3,
        Yf: 4,
        Tf: 5,
        Zf: 6,
        Vf: 7,
        Wf: 8,
        Rf: 9,
        Uf: 10
    };
    var jp = {
        cg: 0,
        dg: 1,
        bg: 2
    };
    Va(ip);
    Va(jp);
    var kp = (a, b) => {
        const c = a.document,
            d = oe(a),
            e = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const f = Ce(d, "IFRAME");
                        f.style.display = "none";
                        f.style.width = "0px";
                        f.style.height = "0px";
                        f.style.border = "none";
                        f.style.zIndex = "-1000";
                        f.style.left = "-1000px";
                        f.style.top = "-1000px";
                        f.name = b;
                        c.body.appendChild(f)
                    } else a.setTimeout(e, 5)
            };
        e()
    };
    const lp = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function mp(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = lp(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    }

    function np(a) {
        if (a.l) return a.l;
        a.l = ff(a.j, "__tcfapiLocator");
        return a.l
    }

    function op(a) {
        return "function" === typeof a.j.__tcfapi || null != np(a)
    }

    function pp(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (np(a)) {
            qp(a);
            const e = ++a.F;
            a.D[e] = c;
            a.l && a.l.postMessage({
                ["__tcfapiCall"]: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function rp(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = Pa(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        pp(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = lp(c), mp(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), pp(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
        })
    }

    function sp(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = Pa(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        pp(a, "addEventListener", (f, g) => {
            e && (clearTimeout(e), e = 0);
            g && (c = f);
            c.internalErrorState = lp(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || mp(c)) pp(a, "removeEventListener", null, c.listenerId), d()
        })
    }

    function tp(a) {
        return new Promise(b => {
            sp(a, b)
        })
    }

    function qp(a) {
        a.A || (a.A = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.D[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, L(a.j, "message", a.A))
    }
    class up extends ui {
        constructor(a, b = 500) {
            super();
            this.j = a;
            this.l = null;
            this.D = {};
            this.F = 0;
            this.C = b;
            this.A = null
        }
        B() {
            this.D = {};
            this.A && (Ld(this.j, "message", this.A), delete this.A);
            delete this.D;
            delete this.j;
            delete this.l;
            super.B()
        }
        addEventListener(a) {
            let b = {};
            const c = Pa(() => a(b));
            let d = 0; - 1 !== this.C && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.C));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = lp(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                    g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                pp(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && pp(this, "removeEventListener", null, a.listenerId)
        }
    };

    function ap(a, b, c) {
        const d = hp(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = hp(a.j),
                    f = new up(a.j);
                op(f) && rp(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Qd: e.getDefaultConsentRevocationText(),
                        cd: e.getDefaultConsentRevocationCloseText(),
                        Rc: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function vp(a) {
        const b = pb(hb("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        gp(a.j, b, () => {}, () => null)
    }
    class wp {
        constructor(a, b) {
            this.j = a;
            oe(this.j);
            this.l = b
        }
        start() {
            try {
                kp(this.j, "googlefcPresent"), vp(this)
            } catch (a) {}
        }
    };
    var xp = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class yp {
        constructor(a) {
            this.j = new tm(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };
    var zp = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= ji(a, 1E4)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Ap = a => {
            if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
            a = Math.min(a, 600);
            return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
        };
    var Bp = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return rn(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return Ap(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    class Cp {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Ap(a);
            return new am(["ap_container"], {
                ["google_reactive_ad_format"]: 27,
                ["google_responsive_auto_format"]: 16,
                ["google_max_num_ads"]: 1,
                ["google_ad_type"]: this.l,
                ["google_ad_format"]: a + "x" + b,
                ["google_ad_width"]: a,
                ["google_ad_height"]: b
            })
        }
    };
    var Dp = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const Ep = {
        TABLE: {
            Ba: new yp([1, 2])
        },
        THEAD: {
            Ba: new yp([0, 3, 1, 2])
        },
        TBODY: {
            Ba: new yp([0, 3, 1, 2])
        },
        TR: {
            Ba: new yp([0, 3, 1, 2])
        },
        TD: {
            Ba: new yp([0, 3])
        }
    };

    function Fp(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = va(e, f), 0 > c || b.push(new Gp(a, [f], c, f, 3, ye(f).trim(), d));
        return b
    }

    function Hp(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                a: {
                    var m = l;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const p = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == p || "inline-block" == p ? null : m
                }
                m ? (d.length && k && e.push(new Gp(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = ye(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new Gp(a, d, h, b, 2, k, c));
        return e
    }

    function Ip(a, b) {
        return a.j - b.j
    }
    class Gp {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.Wa = b.slice(0);
            this.j = c;
            this.sb = d;
            this.tb = e;
            this.B = f;
            this.l = g
        }
        M() {
            return this.l
        }
    };

    function Jp(a) {
        return Fa(a.C ? Hp(a.j, a.A, a.l) : [], a.B ? Fp(a.j, a.B, a.A, a.l) : []).filter(b => {
            var c = b.sb.tagName;
            c ? (c = Ep[c.toUpperCase()], b = null != c && c.Ba.contains(b.tb)) : b = !1;
            return !b
        })
    }
    class Kp {
        constructor(a, b, c) {
            this.A = a;
            this.B = b.Va;
            this.C = b.$b;
            this.j = b.articleStructure;
            this.l = c
        }
    };
    const Lp = new tm("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    const Mp = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? zc(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Lp.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Mp(a, b[c])) return !0
        }
        return !1
    };

    function Np(a, b) {
        if (!b) return !1;
        const c = fa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = Np(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function Op(a, b) {
        return Ba(b.Wa, c => Np(a, c))
    }
    class Pp {
        constructor(a) {
            this.j = new Tl;
            this.l = a
        }
    };
    class Qp {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var Sp = (a, {
            th: b = !1,
            vh: c = 3,
            Td: d = null
        } = {}) => {
            a = Jp(a);
            return Rp(a, b, c, d)
        },
        Rp = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(Ip);
            a = [];
            b = new Qp(b, d);
            for (const l of e) {
                d = b;
                e = {
                    pb: l,
                    hb: 51 > l.B.length ? !1 : null != d.A ? !Op(d.A, l) : !0
                };
                if (d.B || e.hb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].pb;
                        b: {
                            var g = f.M();
                            var h = f.Wa[f.Wa.length - 1];f = e.pb.Wa[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var k = h.parentElement;
                            const m = f.parentElement;
                            if (k && m && k == m) {
                                k = 0;
                                for (h = h.nextSibling; 10 >
                                    k && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (Mp(g, h)) break;
                                    h = h.nextSibling;
                                    k++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.hb && d.l.push(e.pb)) : (d.j = [e], d.l = e.hb ? [e.pb] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].hb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var Up = (a, b) => {
            a = Tp(a, b);
            const c = new Pp(b);
            return xp(a, d => Sp(d, {
                Td: c
            }))
        },
        Tp = (a, b) => {
            const c = new Tl;
            a.forEach(d => {
                var e = Fn(J(d, Ch, 1));
                if (e) {
                    const f = e.toString();
                    Pl(c, f) || c.set(f, {
                        articleStructure: d,
                        Pc: e,
                        Va: null,
                        $b: !1
                    });
                    e = c.get(f);
                    (d = (d = J(d, Ch, 2)) ? y(d, 7) : null) ? e.Va = e.Va ? e.Va + "," + d : d: e.$b = !0
                }
            });
            return Sl(c).map(d => {
                const e = Dn(d.Pc, b.document);
                return e.length ? new Kp(e[0], d, b) : null
            }).filter(d => null != d)
        };
    var Vp = (a, b, c) => {
        const d = J(a, fl, 6);
        if (!d) return [];
        c = Up(K(d, gl, 1), c);
        return (a = tl(a)) && F(a, 11) ? c.map(e => {
            const f = Ih();
            return new Sn(new Dp(e.sb, e.tb), new Mn({
                clearBoth: !0
            }), null, !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        }) : c.map(e => {
            const f = Ih();
            return new Sn(new Dp(e.sb, e.tb), new Bp, new Cp(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var Wp = !Jc && !dc();

    function Xp(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (Wp && a.dataset) {
            if (!(!t("Android") || ec() || cc() || ac() || t("Silk") || "adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var Yp = (a, b, c) => {
            if (!b) return null;
            const d = ue(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = S(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        $p = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, De() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), Zp(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        Zp = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == Xp(a[b])) return !0;
            return !1
        };
    var aq = (a, b) => {
        var c = 0;
        try {
            c |= a != a.top ? 512 : 0;
            var d = Math.min(a.screen.width || 0, a.screen.height || 0);
            c |= d ? 320 > d ? 8192 : 0 : 2048;
            var e;
            if (e = a.navigator) {
                var f = a.navigator.userAgent;
                e = /Firefox/.test(f) || /Android 2/.test(f) || /iPhone OS [34]_/.test(f) || /Windows Phone (?:OS )?[67]/.test(f)
            }
            c |= e ? 1048576 : 0
        } catch (g) {
            c |= 32
        }
        c |= 0;
        e = Math.max(Sj(lj), ii);
        f = Q;
        d = a.innerWidth;
        d = 0 < Sj(lj) && d > ii;
        return a = c | lo(a, b, e, f, d ? Sj(mj) : 0)
    };
    class bq {
        constructor() {
            this.promise = new Promise(a => {
                this.j = a
            })
        }
    };

    function cq(a) {
        var b;
        if (!(b = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var c = "__storage_test__" == d
            } catch (d) {
                c = !1
            }
            b = !c
        }
        return b ? null : (a = dq(a)) ? eq(a) : null
    }

    function eq(a = []) {
        const b = Date.now();
        return ya(a, c => 36E5 > b - c)
    }
    var dq = a => {
        try {
            const b = a.getItem("__lsv__");
            if (!b) return [];
            let c;
            try {
                c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || Ba(c, d => !Number.isInteger(d)) ? (a.removeItem("__lsv__"), []) : c
        } catch (b) {
            return null
        }
    };
    var fq = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= ki(a);
            d |= ji(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = cq(c);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728)
        } catch (g) {
            d |= 32
        }
        return d
    };

    function gq(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        xh(4, a.location) && (a = fi(a).tagSpecificState[1] || null) && (a = a.debugCard && 4 === a.debugCard.getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    const hq = {
            1: "0.5vp",
            2: "300px"
        },
        iq = {
            1: 700,
            2: 1200
        },
        jq = {
            [1]: {
                zc: "3vp",
                Pb: "1vp",
                yc: "0.3vp"
            },
            [2]: {
                zc: "900px",
                Pb: "300px",
                yc: "90px"
            }
        };

    function kq(a) {
        const b = lq(a);
        return mq(b, S(a).clientHeight || iq[b])
    }
    class nq {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function oq(a, b) {
        for (let c of a)
            if (y(c, 1) == b) return c;
        return null
    }

    function pq(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = y(d, 1);
            const e = qq(y(d, 2), b),
                f = qq(y(d, 3), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Ob: {
                    mb: e,
                    ka: f
                }
            })
        }
        return c
    }

    function rq(a, b) {
        const c = qq(y(a, 2), b),
            d = qq(y(a, 5), b);
        if (null === c) return null;
        const e = y(a, 4);
        if (null == e) return null;
        var f = K(a, Tk, 3);
        f = pq(f, b);
        if (null === f) return null;
        const g = J(a, Uk, 7);
        b = g ? sq(g, b) : void 0;
        return new nq(c, d, f, e, gd(a, 6), b)
    }

    function mq(a, b) {
        a = qq(hq[a], b);
        return new nq(null === a ? Infinity : a, null, [], 3, null)
    }

    function qq(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function lq(a) {
        a = 900 <= S(a).clientWidth;
        return De() && !a ? 1 : 2
    }

    function tq(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            Ob: {
                mb: 2 * a,
                ka: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            Ob: {
                mb: 3 * a,
                ka: 3 * b
            }
        }]
    }

    function sq(a, b) {
        const c = qq(y(a, 2), b) || 0,
            d = y(a, 3) || 1;
        a = qq(y(a, 1), b) || 0;
        return {
            kc: c,
            jc: d,
            za: a
        }
    };

    function uq(a, b, c) {
        return Pm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function vq(a) {
        if (!a.length) return null;
        const b = Qm(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new wq(b, a)
    }
    class wq {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };
    var Cq = (a, b) => {
        const c = Ga(b.document.querySelectorAll(".google-auto-placed")),
            d = xq(b),
            e = yq(b),
            f = zq(b),
            g = Aq(b),
            h = Ga(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = Ga(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let l = [].concat(Ga(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ga(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [m, n] of [
                [a.eb, c],
                [a.ta, d],
                [a.pd, e],
                [a.fb, f],
                [a.gb, g],
                [a.md, h],
                [a.od, k]
            ]) a = n, !1 === m ? b = b.concat(a) :
            l = l.concat(a);
        a = Bq(l);
        b = Bq(b);
        a = a.slice(0);
        for (const m of b)
            for (b = 0; b < a.length; b++)(m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return a
    };
    const Dq = a => {
            try {
                return ya(za(a.googletag.pubads().getSlots(), b => a.document.getElementById(b.getSlotElementId())), b => null != b)
            } catch (b) {}
            return null
        },
        xq = a => Ga(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
        yq = a => Ga(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        zq = a => (Dq(a) || Ga(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ga(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        Aq = a => Ga(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var Bq = a => {
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
    var Eq = R(453, Cq),
        Fq = R(454, (a, b) => {
            const c = Ga(b.document.querySelectorAll(".google-auto-placed")),
                d = xq(b),
                e = yq(b),
                f = zq(b),
                g = Aq(b),
                h = Ga(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
            b = Ga(b.document.querySelectorAll("div.googlepublisherpluginad"));
            return Bq([].concat(!0 === a.eb ? c : [], !0 === a.ta ? d : [], !0 === a.pd ? e : [], !0 === a.fb ? f : [], !0 === a.gb ? g : [], !0 === a.md ? h : [], !0 === a.od ? b : []))
        });

    function Gq(a, b, c) {
        const d = Hq(a);
        b = Iq(d, b, c);
        return new Jq(a, d, b)
    }

    function Kq(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function Lq(a) {
        return a.j.map(b => b.box)
    }

    function Mq(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class Jq {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function Hq(a) {
        const b = Eq({
                ta: !1
            }, a),
            c = ri(a),
            d = qi(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || Kq(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                qh: e ? 1 : 0
            } : null
        }).filter(Na(e => null === e))
    }

    function Iq(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? Nq(a, b) : za(a, d => new wq(d.box, 1))
    }

    function Nq(a, b) {
        a = za(a, d => new wq(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (uq(d, a[f], b)) {
                        d = vq([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function Oq(a) {
        return new am(["pedestal_container"], {
            ["google_reactive_ad_format"]: 30,
            ["google_phwr"]: 2.189,
            ["google_ad_width"]: Math.floor(a),
            ["google_ad_format"]: "autorelaxed",
            ["google_full_width_responsive"]: !0,
            ["google_enable_content_recommendations"]: !0,
            ["google_content_recommendation_ui_type"]: "pedestal"
        })
    }
    class Pq {
        j(a) {
            return Oq(Math.floor(a.l))
        }
    };
    var Qq = {};

    function Rq(a, b, c) {
        let d = Sq(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.Ha && d.Ha.length;) {
            const h = d.Ha.shift();
            var g = Yn(h.O);
            const k = h.U.j,
                l = !!c.l.Ja || !!c.l.Ka || Tq(c.A.j) || !!c.l.Yb || k > e;
            g = !g || g <= d.Ua;
            if (l && g && Uq(c, h, {
                    hc: d.Ua
                })) {
                e = k;
                if (d.Sa.j.length + 1 >= f) return !0;
                d = Sq(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    var Sq = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = Gq(b.M(), f.j ? f.j.za : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = S(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - Mq(f)) : e = void 0;
        a = null == e || 50 <= e ? Vq(b, f, {
            types: a
        }, c) : null;
        return {
            Sa: f,
            Ua: e,
            Ha: a
        }
    };
    Qq[2] = na(function(a, b) {
        a = Vq(b, Gq(b.M()), {
            types: a,
            pa: kq(b.M())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Uq(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Qq[5] = na(Rq, [0], 5);
    Qq[3] = function(a) {
        if (!a.B) return !1;
        var b = Vq(a, Gq(a.M()), {
            types: [0],
            pa: kq(a.M())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Uq(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    var Wq = a => {
            var b;
            a.l.Ac ? b = new nq(0, null, [], 3, null) : b = kq(a.M());
            return {
                types: [0],
                pa: b
            }
        },
        Yq = a => {
            var b = a.M().document.body.getBoundingClientRect().width;
            b = Oq(b);
            var c = a.j;
            var d = c.document.body,
                e = Yp(c, d, null);
            if (e) c = e;
            else {
                if (c.document.body) {
                    e = Math.floor(c.document.body.getBoundingClientRect().width);
                    for (var f = [{
                            element: c.document.body,
                            depth: 0,
                            height: 0
                        }], g = -1, h = null; 0 < f.length;) {
                        const l = f.pop(),
                            m = l.element;
                        var k = l.height;
                        0 < l.depth && k > g && (g = k, h = m);
                        if (5 > l.depth)
                            for (let n = 0; n < m.children.length; n++) {
                                const p =
                                    m.children[n];
                                k = e;
                                const q = p.getBoundingClientRect().width;
                                (null == q || null == k ? 0 : q >= .9 * k && q <= 1.01 * k) && f.push({
                                    element: p,
                                    depth: l.depth + 1,
                                    height: p.getBoundingClientRect().height
                                })
                            }
                    }
                    e = h
                } else e = null;
                c = e ? Yp(c, e.parentNode || d, e) : null
            }
            c && (b = $l(a.I, b), d = rn(a.j.document, a.F, null, null, {}, b)) && (nn(d.sa, c, 2, 256), Xq(a, d, b))
        },
        $q = (a, b) => {
            var c = Wq(a);
            c.Nb = [5];
            c = Vq(a, Gq(a.M()), c, 8);
            Zq(a, c.reverse(), b)
        },
        Zq = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.U), Uq(a, d, {
                        Hc: b
                    })) return !0;
            return !1
        };
    Qq[8] = function(a) {
        var b = a.M().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Qq[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.ib()) return !0;
        b = Wq(a);
        b.Mb = [2, 4, 5];
        b = Vq(a, Gq(a.M()), b, 8);
        const c = new Pq;
        if (Zq(a, b, c)) return !0;
        if (a.l.Zb) switch (a.l.nc || 0) {
            case 1:
                $q(a, c);
                break;
            default:
                Yq(a)
        }
        return !0
    };
    Qq[6] = na(Rq, [2], 6);
    Qq[7] = na(Rq, [1], 7);
    Qq[9] = function(a) {
        const b = Sq([0, 2], a, 9);
        if (!b || !b.Ha) return a.C.push(17), gq(a.M()), a.B;
        for (var c of b.Ha) {
            var d = c;
            var e = a.l.Bb || null;
            null == e ? d = null : (e = Zn(d.O, new ar, new br(e, a.M())), d = new go(e, d.T(), d.U));
            if (d && !(Yn(d.O) > b.Ua) && Uq(a, d, {
                    hc: b.Ua,
                    bd: !0
                })) return a = d.O.J, c = c.O, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        gq(a.M());
        return a.B
    };
    class ar {
        l(a, b, c, d) {
            return vn(d.document, a, b)
        }
        A(a) {
            return S(a).clientHeight || 0
        }
    };
    var cr = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= ji(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var dr = (a, b) => "relative" === a ? b : ["https://", a, b].join("");
    var er = class {
        constructor() {
            const a = new bq;
            this.promise = a.promise;
            this.resolve = a.j
        }
    };

    function fr(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new er, c && c());
        return b[a]
    }

    function gr(a, b, c) {
        return fr(a, b, function() {
            Le(b.document, c)
        }).promise
    };
    var hr = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        ir = (a, b, c) => {
            let d = 0;
            try {
                d |= ji(a, 2500);
                if (V(Ij)) {
                    const g = S(a).clientHeight;
                    d |= g ? 320 > g ? -2147483648 : 0 : 1073741824
                }
                d |= ki(a);
                var e;
                if (e = b) {
                    var f = cq(c);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };
    const jr = {
        [27]: 512,
        [26]: 128
    };
    var kr = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === aq(a, c);
                case 8:
                    return b = !("on" === b.google_adtest || vh(a.location, "google_ia_debug")), 0 == (hr(a) | ir(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || vh(a.location, "google_scr_debug")), !fq(a, b, d);
                case 30:
                    return 0 == $p(a);
                case 26:
                    return 0 == cr(a);
                case 27:
                    return 0 === zp(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        lr = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return aq(a, c);
                case 8:
                    return b = !("on" === b.google_adtest || vh(a.location,
                        "google_ia_debug")), hr(a) | ir(a, b, d);
                case 9:
                    return fq(a, !("on" === b.google_adtest || vh(a.location, "google_scr_debug")), d);
                case 16:
                    return Zm(b, a) ? 0 : 8388608;
                case 30:
                    return $p(a);
                case 26:
                    return cr(a);
                case 27:
                    return zp(a);
                default:
                    return 32
            }
        },
        mr = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!Ta(d)) return !1;
            a = yg(a);
            if (!a || !kr(a, b, d, c)) return !1;
            b = fi(a);
            if (oi(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        nr = a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config &&
                Nk(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        or = a => {
            if (!a.hash) return null;
            let b = null;
            gg(rh, c => {
                !b && vh(a, c) && (b = sh[c])
            });
            return b
        },
        qr = a => {
            const b = a.j;
            if (!b.document.getElementById("goog_info_card")) {
                var c = fi(b).tagSpecificState[1] || null;
                c && gg(th, d => {
                    !c.debugCardRequested && xh(d, b.location) && (c.debugCardRequested = !0, pr(b, a.F.ed, e => {
                        c.debugCard = e.createDebugCard(d, b, a.G)
                    }))
                })
            }
        },
        sr = (a, b, c) => {
            if (!b) return null;
            const d = fi(b);
            let e = 0;
            gg(Ua, f => {
                const g = jr[f];
                g && 0 === rr(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |=
                256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        tr = (a, b, c) => {
            const d = [];
            gg(Ua, e => {
                const f = rr(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        ur = a => {
            const b = [],
                c = {};
            gg(a, (d, e) => {
                if ((e = di[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        vr = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        rr = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = fi(b),
                g = oi(f, c);
            if (a.google_reactive_ad_format == c || g) e |=
                64;
            let h = !1;
            gg(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === l && (h = !0)
            });
            h && or(b.location) !== c && (e |= 128);
            return e | lr(b, a, c, d)
        },
        wr = (a, b) => {
            if (a) {
                var c = fi(a),
                    d = {};
                gg(b, (e, f) => {
                    (f = di[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                gg(Ua, e => {
                    d[ei[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        xr = (a, b, c) => {
            b = R(b, c);
            return gr(1, O(), nb(Fd(a).toString())).then(b)
        },
        pr = (a, b, c) => {
            c = R(212, c);
            gr(3, a, nb(Fd(b).toString())).then(c)
        };
    const yr = a => {
        a.adsbygoogle || (a.adsbygoogle = [], Le(a.document, Sf(dr("pagead2.googlesyndication.com", "/pagead/js/adsbygoogle.js"))))
    };
    var zr = (a, b) => {
        L(a, "load", () => {
            yr(a);
            a.adsbygoogle.push(b)
        })
    };
    class br {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.G || {};
            c.google_ad_client = a.Qa;
            c.google_ad_height = S(b).clientHeight || 0;
            c.google_ad_width = S(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new hm;
            z(b, 1, a.C);
            a.j && ld(b, 2, a.j);
            a.F && z(b, 3, !0);
            c.google_rasc = b.F();
            a.A && (c.google_adtest = "on");
            return new am(["fsi_container"], c)
        }
    };

    function Ar(a, b, c) {
        const d = Sm(c, 1, b + 1);
        return !Ba(a, e => Pm(e, d))
    }

    function Br(a, b, c, d, e) {
        e = e.U;
        const f = Sm(e, 0, b),
            g = Sm(e, 0, c),
            h = Sm(e, 0, d);
        return !Ba(a, k => Pm(k, g) || Pm(k, f) && !Pm(k, h))
    }

    function Cr(a, b, c, d) {
        const e = Lq(a);
        if (Ar(e, b, d.U)) return !0;
        if (!Br(e, b, c.kc, c.za, d)) return !1;
        const f = new wq(Sm(d.U, 0, 0), 1);
        a = ya(a.B, g => uq(g, f, c.za));
        b = Aa(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.jc ? !1 : !0
    };
    class Dr {
        constructor() {
            this.j = new Tl
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new tm, this.j.set(a, c));
            c.add(b)
        }
    };
    var Er = (a, b) => {
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

    function Fr(a, b) {
        const c = new Dr,
            d = new tm;
        b.forEach(e => {
            if (J(e, bl, 1)) {
                e = J(e, bl, 1);
                if (J(e, Gh, 1) && J(e, Gh, 1).T() && J(e, Gh, 2) && J(e, Gh, 2).T()) {
                    const g = Gr(a, J(e, Gh, 1).T()),
                        h = Gr(a, J(e, Gh, 2).T());
                    if (g && h)
                        for (var f of Er({
                                anchor: g,
                                position: J(e, Gh, 1).l()
                            }, {
                                anchor: h,
                                position: J(e, Gh, 2).l()
                            })) c.set(fa(f.anchor), f.position)
                }
                J(e, Gh, 3) && J(e, Gh, 3).T() && (f = Gr(a, J(e, Gh, 3).T())) && c.set(fa(f), J(e, Gh, 3).l())
            } else J(e, cl, 2) ? Hr(a, J(e, cl, 2), c) : J(e, dl, 3) && Ir(a, J(e, dl, 3), d)
        });
        return new Jr(c, d)
    }
    class Jr {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Hr = (a, b, c) => {
            J(b, Ch, 1) && (a = Kr(a, J(b, Ch, 1))) && a.forEach(d => {
                d = fa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Ir = (a, b, c) => {
            J(b, Ch, 1) && (a = Kr(a, J(b, Ch, 1))) && a.forEach(d => {
                c.add(fa(d))
            })
        },
        Gr = (a, b) => (a = Kr(a, b)) && 0 < a.length ? a[0] : null,
        Kr = (a, b) => (b = Fn(b)) ? Dn(b, a) : null;

    function Lr(a) {
        return function(b) {
            return ho(b, a)
        }
    }

    function Mr(a) {
        const b = S(a).clientHeight;
        return b ? na(Nr, b + qi(a)) : Ka
    }

    function Or(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return Ka;
        const d = Lq(c || Gq(b));
        return e => Ar(d, a, e.U)
    }

    function Pr(a, b, c, d) {
        if (0 > a || 0 > b.kc || 0 > b.jc || 0 > b.za) throw Error("ama::ead:nd");
        return Infinity === a ? Ka : e => Cr(d || Gq(c, b.za), a, b, e)
    }

    function Qr(a) {
        if (!a.length) return Ka;
        const b = new yp(a);
        return c => b.contains(c.ua)
    }

    function Rr(a) {
        return function(b) {
            for (let c of b.Hb)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Sr(a) {
        return a.length ? function(b) {
            const c = b.Hb;
            return a.some(d => -1 < c.indexOf(d))
        } : La
    }

    function Tr(a, b) {
        if (0 >= a) return La;
        const c = S(b).scrollHeight - a;
        return function(d) {
            return d.U.j <= c
        }
    }

    function Ur(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.Ia, 2) || 0]
        }
    }

    function Vr(a) {
        return a.length ? b => a.includes(y(b.Ia, 2) || 0) : La
    }

    function Wr(a) {
        return a.length ? b => a.includes(y(b.Ia, 1) || 0) : La
    }

    function Xr(a, b) {
        const c = Fr(a, b);
        return function(d) {
            var e = d.T();
            d = Ln[d.O.l()];
            var f = fa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(fa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(fa(e))) {
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
    const Nr = (a, b) => b.U.j >= a,
        Yr = (a, b, c) => {
            c = c.U.l;
            return a <= c && c <= b
        };
    var Zr = Wl(new Ol(0, {})),
        $r = Wl(new Ol(1, {})),
        as = a => a === Zr || a === $r;

    function bs(a, b, c) {
        Pl(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class cs {
        constructor() {
            this.j = new Tl
        }
    };

    function ds(a, b) {
        a.F.wpc = b;
        return a
    }

    function es(a, b) {
        for (var c = 0; c < b.length; c++) a.ba(b[c]);
        return a
    }

    function fs(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class gs {
        constructor(a) {
            this.F = {};
            this.F.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.H = 0
        }
        ba(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = Xa(this.F);
            0 < this.H && (b.t = this.H);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && Yg(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function hs(a, b) {
        b && (a.l.apv = y(b, 4), C(b, 23) && (a.l.sat = "" + y(J(b, yl, 23), 1)));
        return a
    }

    function is(a, b) {
        a.l.afm = b.join(",");
        return a
    }
    class js extends gs {
        constructor(a) {
            super(a);
            this.l = {}
        }
        B(a) {
            try {
                this.l.su = a.location.hostname
            } catch (b) {
                this.l.su = "_ex"
            }
            a = super.B(a);
            Za(a, this.l);
            return a
        }
    }

    function ks(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function ls(a, b) {
        a.j.op = ms(b)
    }

    function ns(a, b, c) {
        30 >= c.length ? a.j[b] = os(c) : (a.j[b] = os(c.slice(0, 30)), a.j[b + "_c"] = c.length.toString())
    }

    function ps(a, b, c) {
        ns(a, "fap", b);
        a.j.fad = ms(c)
    }

    function qs(a, b, c) {
        ns(a, "fmp", b);
        a.j.fmd = ms(c)
    }

    function rs(a, b, c) {
        ns(a, "vap", b);
        a.j.vad = ms(c)
    }

    function ss(a, b, c) {
        ns(a, "vmp", b);
        a.j.vmd = ms(c)
    }

    function ts(a, b, c) {
        ns(a, "pap", b);
        a.j.pad = ms(c)
    }

    function us(a, b, c) {
        ns(a, "pmp", b);
        a.j.pmd = ms(c)
    }
    var vs = class extends js {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.j = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.j);
            return a
        }
    };

    function os(a) {
        return a.map(b => b.toString()).join("~")
    }

    function ms(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    class ws {
        constructor(a) {
            this.j = this.A = this.l = !1;
            this.B = null;
            this.wa = a
        }
    }

    function xs(a, b) {
        var c = ys;
        const d = a.O;
        if (!Pl(c.j, d)) {
            let e;
            c.j.set(d, new ws(null != (e = Wm(eo(a))) ? e : ""))
        }
        b(c.j.get(d))
    }

    function zs(a) {
        xs(a, b => {
            b.l = !0
        })
    }

    function As(a) {
        xs(a, b => {
            b.A = !0
        })
    }

    function Bs(a) {
        xs(a, b => {
            b.j = !0
        })
    }

    function Cs(a, b) {
        xs(a, c => {
            c.B = b
        })
    }

    function Ds(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) {
            let g;
            if (as(null != (g = f.B) ? g : "")) ++e;
            else {
                let h;
                b = a.l.get(null != (h = f.B) ? h : "", -1);
                d.push(b)
            }
        }
        return {
            list: d.sort((f, g) => f - g),
            va: e
        }
    }

    function Es(a, b) {
        ls(b, a.l.Ea());
        var c = Sl(a.j).filter(f => 0 === (f.wa.startsWith(Zr) ? 0 : 1));
        const d = Sl(a.j).filter(f => 1 === (f.wa.startsWith(Zr) ? 0 : 1));
        var e = Ds(a, f => f.l, c);
        ps(b, e.list, e.va);
        e = Ds(a, f => f.l, d);
        qs(b, e.list, e.va);
        e = Ds(a, f => f.A, c);
        rs(b, e.list, e.va);
        e = Ds(a, f => f.A, d);
        ss(b, e.list, e.va);
        c = Ds(a, f => f.j, c);
        ts(b, c.list, c.va);
        a = Ds(a, f => f.j, d);
        us(b, a.list, a.va)
    }
    var ys = new class {
        constructor() {
            this.C = null;
            this.F = this.D = !1;
            this.A = null;
            this.I = this.H = !1;
            this.B = null;
            this.l = new Tl;
            this.j = new Tl
        }
    };
    class Fs {
        constructor(a = 0) {
            this.j = a
        }
    };
    class Gs {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function Hs(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function Is(a, b) {
        const c = a.B.filter(d => Rl(d.Xa).every(e => d.Xa.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.Xa.Ea() > e.Xa.Ea() ? d : e, c[0])
    }

    function Js(a, b) {
        b = eo(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Pl(a.A, b)) return a.A.get(b);
        var c = Ul(b);
        c = Is(a, c);
        a.A.set(b, c);
        return c
    }

    function Ks(a, b) {
        let c;
        return (null == (c = Js(a, b)) ? void 0 : c.Id) || Number.MAX_VALUE
    }
    var Ls = class {
        constructor(a) {
            this.j = a;
            this.A = new Tl;
            let b;
            this.B = ((null == (b = J(a, kl, 2)) ? void 0 : K(b, ll, 1)) || []).map(c => {
                const d = Ul(H(c, 1)),
                    e = hd(c, 2, 0);
                return {
                    Xa: d,
                    Id: e,
                    wa: H(c, 1)
                }
            });
            this.l = []
        }
    };

    function Tq(a) {
        return !!a.j && 0 < [...y(a.j.j, 1)].length
    }

    function Ms(a, b) {
        var c = b.U.j,
            d = Math,
            e = d.min;
        const f = b.T(),
            g = b.O.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? Hs(f.parentElement) : Hs(f));
        d = a.A;
        0 > d.j && (d.j = S(d.l).scrollHeight || 0);
        d = d.j - b.U.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.T();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function Ns(a, b) {
        if (0 == b.j.length) return b;
        const c = Sj(nj) || 0;
        return 0 == c && Tq(a) || 0 < c && Tq(a) && c < b.filter(d => {
            let e;
            d = (null == (e = Js(a.j, d)) ? void 0 : e.wa) || "";
            return "" != d && !(d === Zr || d === $r)
        }).j.length / b.j.length ? b.sort((d, e) => Ks(a.j, d) - Ks(a.j, e)) : b.sort((d, e) => Ms(a, d) - Ms(a, e))
    }

    function Os(a, b) {
        return b.sort((c, d) => {
            const e = c.O.F,
                f = d.O.F;
            var g;
            null == e || null == f ? g = null == e && null == f ? Ms(a, c) - Ms(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class Ps {
        constructor(a, b = 0, c = null) {
            this.A = new Gs(a);
            this.l = new Fs(b);
            this.j = c && new Ls(c)
        }
    };
    class Qs {
        constructor(a, b, c, d) {
            this.A = new Ml(a);
            this.j = new Ps(b, void 0 === c ? 0 : c, void 0 === d ? null : d);
            this.l = b;
            this.B = new cs
        }
        find(a, b) {
            b = void 0 === b ? 0 : b;
            const c = a.ec ? a.ec : [0],
                d = "number" === typeof a.Ib || null === a.Ib ? a.Ib : 0,
                e = "number" === typeof a.minWidth ? a.minWidth : 0,
                f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                g = "number" === typeof a.ka ? a.ka : 0,
                h = new tm(a.Ud || []);
            let k = this.A.filter((m, n) => !h.contains(n));
            k = Ll(Ll(Ll(Ll(Ll(Ll(Ll(k, Qr(c), Rs(1, b)), Rr(a.Da || []), Rs(2, b)), Ur(a.Ab || []), Rs(3, b)), Vr(a.wh || []), Rs(4,
                b)), Wr(a.Nb || []), Rs(5, b)), Sr(a.Mb || []), Rs(6, b)), Na(Un), Rs(7, b));
            k = k.apply(Lr(this.l));
            Tq(this.j) && Kl(k, m => {
                zs(m);
                var n;
                null != (n = this.j.j) && (n = Js(n, m), null != (null == n ? void 0 : n.wa) && Cs(m, n.wa))
            });
            let l = k;
            null !== d && (l = a.Ta && a.Xb ? Ll(l, Pr(d, a.Xb, this.l, a.Sa), Ss(16, b)) : Ll(l, Or(d, this.l, a.Sa), Ss(9, b)));
            l = Ll(l, na(Yr, e, f), Ss(10, b));
            a.Ra && (l = Ll(l, Xr(this.l.document, a.Ra), Ss(11, b)));
            l = Ll(Ll(l, Mr(this.l), Ss(12, b)), Tr(g, this.l), Ss(13, b));
            Tq(this.j) && Kl(l, m => As(m));
            l = a.Ka ? Os(this.j, l) : Ns(this.j, l);
            a.Ja && (l = Nl(l,
                Bc(this.l.location.href + this.l.localStorage.google_experiment_mod)));
            1 === c.length && bs(this.B, c[0], {
                Tc: k.j.length,
                Wd: l.j.length
            });
            return l.j.slice(0)
        }
    }
    const Rs = (a, b) => c => Wn(c, b, a),
        Ss = (a, b) => c => Wn(c.O, b, a);

    function Ts(a, b) {
        if (!a) return !1;
        a = Me(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Us(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Vs(a) {
        return !!a.nextSibling || !!a.parentNode && Vs(a.parentNode)
    };

    function Ws(a) {
        const b = li(a, !0),
            c = S(a).scrollWidth,
            d = S(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = qi(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let q = 0,
            u = 0,
            v = Infinity,
            A = Infinity,
            E = null;
        var G = Cq({
            ta: !1
        }, a);
        for (var I of G) {
            G = I.getBoundingClientRect();
            const da = b - (G.bottom + f);
            var B = void 0,
                D = void 0;
            if (I.className && -1 != I.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                B = I.getAttribute("google_element_uid");
                D = a.google_sv_map;
                if (!B ||
                    !D || !D[B]) continue;
                B = (D = zg(D[B])) ? D.height : 0;
                D = D ? D.width : 0
            } else if (B = G.bottom - G.top, D = G.right - G.left, 1 >= B || 1 >= D) continue;
            g.push(B);
            k.push(D);
            l.push(B * D);
            I.className && -1 != I.className.indexOf("google-auto-placed") ? (u += 1, I.className && -1 != I.className.indexOf("pedestal_container") && (E = B)) : (v = Math.min(v, da), n.push(G), q += 1, h.push(B), m.push(B * D));
            A = Math.min(A, da);
            p.push(G)
        }
        v = Infinity === v ? null : v;
        A = Infinity === A ? null : A;
        f = Xs(n);
        p = Xs(p);
        h = Ys(b, h);
        n = Ys(b, g);
        m = Ys(b * c, m);
        I = Ys(b * c, l);
        return new Zs(a, {
            gd: e,
            Jb: b,
            Dd: c,
            Cd: d,
            vd: q,
            Sc: u,
            Vc: $s(g),
            Wc: $s(k),
            Uc: $s(l),
            Ad: f,
            zd: p,
            yd: v,
            xd: A,
            yb: h,
            xb: n,
            Oc: m,
            Nc: I,
            Ed: E
        })
    }

    function at(a, b, c, d) {
        const e = De() && !(900 <= S(a.l).clientWidth);
        d = ya(d, f => Da(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.gd,
            pg_h: bt(a.j.Jb),
            pg_w: bt(a.j.Dd),
            pg_hs: bt(a.j.Cd),
            c: bt(a.j.vd),
            aa_c: bt(a.j.Sc),
            av_h: bt(a.j.Vc),
            av_w: bt(a.j.Wc),
            av_a: bt(a.j.Uc),
            s: bt(a.j.Ad),
            all_s: bt(a.j.zd),
            b: bt(a.j.yd),
            all_b: bt(a.j.xd),
            d: bt(a.j.yb),
            all_d: bt(a.j.xb),
            ard: bt(a.j.Oc),
            all_ard: bt(a.j.Nc),
            pd_h: bt(a.j.Ed),
            dt: e ? "m" : "d"
        }
    }
    class Zs {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function $s(a) {
        return le.apply(null, ya(a, b => 0 < b)) || null
    }

    function Ys(a, b) {
        return 0 >= a ? null : ke.apply(null, b) / a
    }

    function Xs(a) {
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

    function bt(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function ct(a, b) {
        b = (S(b).clientHeight || 0) - qi(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            Kq(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function dt(a) {
        const b = {};
        var c = Eq({
            ta: !1,
            eb: !1,
            fb: !1,
            gb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Kq);
        b.Jc = c.length;
        c = Fq({
            fb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Kq);
        b.jd = c.length;
        c = Fq({
            gb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Kq);
        b.Bd = c.length;
        c = Fq({
            eb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(Kq);
        b.Mc = c.length;
        c = (S(a).clientHeight || 0) - qi(a);
        c = Eq({
            ta: !1
        }, a).map(d => d.getBoundingClientRect()).filter(Kq).filter(ma(et, null, c));
        b.Kc = c.length;
        a = Ws(a);
        c = null != a.j.yb ? a.j.yb :
            null;
        null != c && (b.wd = c);
        a = null != a.j.xb ? a.j.xb : null;
        null != a && (b.Lc = a);
        return b
    }

    function Uq(a, b, {
        hc: c,
        Hc: d,
        bd: e
    } = {}) {
        const f = b.O;
        if (f.B) return !1;
        var g = b.T(),
            h = f.l(),
            k = a.B;
        a: {
            var l = a.j;
            switch (h) {
                case 0:
                    l = Ts(Us(g), l);
                    break a;
                case 3:
                    l = Ts(g, l);
                    break a;
                case 2:
                    var m = g.lastChild;
                    l = Ts(m ? 1 == m.nodeType ? m : Us(m) : null, l);
                    break a
            }
            l = !1
        }
        if (k = !l && !(!k && 2 == h && !Vs(g))) g = 1 == h || 2 == h ? g : g.parentNode, k = !(g && !fn(g) && 0 >= g.offsetWidth);
        if (!k) return !1;
        c = null == c ? null : new am(null, {
            google_max_responsive_height: c
        });
        g = bm(y(f.Ia, 2) || 0);
        h = f.F;
        h = null == h ? null : new am(null, {
            google_ml_rank: h
        });
        k = ft(a, f);
        d = $l(a.I, f.L ?
            f.L.j(b.U) : null, c, d || null, g, h, k);
        c = b.fill(a.F, d);
        if (e) {
            if (c) {
                e = c.Y;
                g = e.style.width;
                e.style.width = "100%";
                h = e.offsetWidth;
                e.style.width = g;
                e = h;
                g = a.j;
                h = c.Y;
                k = d && d.Fa() || {};
                if (g.top != g) l = yg(g) ? 3 : 16;
                else if (488 > S(g).clientWidth)
                    if (g.innerHeight >= g.innerWidth)
                        if (l = S(g).clientWidth, !l || .3 < (l - e) / l) l = 6;
                        else {
                            if (l = "true" != k.google_full_width_responsive) c: {
                                m = h.parentElement;
                                for (l = S(g).clientWidth; m; m = m.parentElement) {
                                    const n = Me(m, g);
                                    if (!n) continue;
                                    const p = Ze(n.width);
                                    if (p && !(p >= l) && "visible" != n.overflow) {
                                        l = !0;
                                        break c
                                    }
                                }
                                l = !1
                            }
                            l = l ? 7 : !0
                        }
                else l = 5;
                else l = 4;
                if (!0 !== l) e = l;
                else {
                    if (!(k = "true" == k.google_full_width_responsive)) b: {
                        do
                            if ((k = Me(h, g)) && "fixed" == k.position) {
                                k = !1;
                                break b
                            }
                        while (h = h.parentElement);
                        k = !0
                    }
                    k ? V(ij) || g.location && "#bffwroe2etoq" == g.location.hash ? e = !0 : (g = S(g).clientWidth, e = g - e, e = g && 0 <= e ? !0 : g ? -10 > e ? 11 : 0 > e ? 14 : 12 : 10) : e = 9
                }
                if (e) {
                    e = a.j;
                    g = c.Y;
                    if (h = bn(e, g)) g.style.border = g.style.borderStyle = g.style.outline = g.style.outlineStyle = g.style.transition = "none", g.style.borderSpacing = g.style.padding = "0", $m(g, h, "0px"),
                        g.style.width = S(e).clientWidth + "px", cn(e, g, h), g.style.zIndex = 30;
                    e = !0
                } else kn(c.sa), e = !1
            } else e = !1;
            e = !e
        }
        if (e || !Xq(a, c, d)) return !1;
        mk(9, [f.F, f.ua]);
        Tq(a.A.j) && Bs(b);
        return !0
    }

    function Vq(a, b, c, d) {
        const e = c.pa ? c.pa : a.D;
        var f = {
            mb: e.A,
            ka: e.C
        };
        for (let g of e.D) g.adCount <= b.j.length && (f = g.Ob);
        return a.A.find({
            Ud: gt(a),
            ec: c.types,
            Ib: f.mb,
            Sa: b,
            Da: a.N,
            ka: f.ka || void 0,
            Ja: !!a.l.Ja,
            Ka: !!a.l.Ka,
            Mb: c.Mb,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            Ab: a.L,
            Ra: a.K,
            Nb: c.Nb,
            Ta: !!a.l.Ta,
            Xb: e.j
        }, d)
    }

    function ht(a) {
        return a.H ? a.H : a.H = a.j.google_ama_state
    }

    function gt(a) {
        if (V(Yi)) return [];
        const b = ht(a);
        return null == b || null == b.placed ? [] : b.placed.map(c => c.index).filter(c => 0 <= c && c < a.A.A.j.length)
    }

    function ft(a, b) {
        return Wm(Xm(bo(b).map(cm), () => {
            a.C.push(18)
        }))
    }

    function Xq(a, b, c) {
        if (!b) return !1;
        try {
            wn(a.j, b.Y, c)
        } catch (d) {
            return kn(b.sa), a.C.push(6), !1
        }
        return !0
    }
    class it {
        constructor(a, b, c, d, e = {}) {
            this.A = a;
            this.F = b;
            this.j = c;
            this.D = d.pa;
            this.N = d.Da || [];
            this.I = d.kd || null;
            this.L = d.Ab || [];
            this.K = d.Ra || [];
            this.l = e;
            this.B = !1;
            this.J = [];
            this.C = [];
            this.H = void 0
        }
        M() {
            return this.j
        }
        ba(a) {
            this.J.push(a)
        }
        Gb() {
            return !!this.l.wc
        }
        ib() {
            return !Zp(this.j)
        }
    }
    const et = (a, b) => b.top <= a;

    function jt(a, b, c, d, e) {
        this.qa = a;
        this.ja = b;
        this.La = c;
        this.j = d;
        this.l = e
    };
    var kt = (a, b, {
        ib: c = !1,
        Gb: d = !1,
        Rd: e = !1
    } = {}) => {
        const f = [];
        e && f.push(9); - 1 < b.indexOf(3) && f.push(6); - 1 < b.indexOf(4) && !d && c && f.push(8); - 1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3)); - 1 < b.indexOf(2) && f.push(7); - 1 < b.indexOf(4) && d && c && f.push(8);
        return f
    };
    class lt {
        constructor(a, b) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = Ea(this.l, 1);
            this.j = b
        }
    };

    function mt(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var ot = class {
        constructor() {
            this.l = new nt(this);
            this.j = 0
        }
    };

    function pt(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var nt = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            pt(this)
        }
    };
    const qt = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class rt {
        j() {
            return new am([], {
                ["google_reactive_ad_format"]: 40,
                ["google_tag_origin"]: "qs"
            })
        }
    };
    class st {
        j() {
            return new am(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function tt(a) {
        return gn(a.j.document).map(b => {
            const c = new Dp(b, 3);
            b = new On(yn(a.j, b));
            return new Sn(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class ut {
        constructor(a) {
            var b = new st;
            this.j = a;
            this.l = b || null
        }
    };
    const vt = {
        Rb: "10px",
        wb: "10px"
    };

    function wt(a) {
        return en(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Sn(new Dp(b, 1), new Mn(vt), a.l, !1, 0, [], null, a.j, null))
    }
    class xt {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function yt(a, b) {
        a = a.getBoundingClientRect();
        return new zt(a.top + qi(b), a.bottom - a.top)
    }

    function At(a) {
        return new zt(Math.round(a.ma), Math.round(a.j))
    }
    class zt {
        constructor(a, b) {
            this.ma = a;
            this.j = b
        }
        getHeight() {
            return this.j
        }
    };

    function Bt(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function Ct(a) {
        return ht(a.A) && ht(a.A).placed || []
    }

    function Dt(a) {
        return Ct(a).map(b => At(yt(b.element, a.j)))
    }

    function Et(a) {
        return Ct(a).map(b => b.index)
    }

    function Ft(a, b) {
        const c = b.O;
        return !a.D && c.A && C(c.A, 8) && 1 == y(c.A, 8) ? [] : c.B ? (c.J || []).map(d => At(yt(d, a.j))) : [At(new zt(b.U.j, 0))]
    }

    function Gt(a) {
        a.sort((e, f) => e.ma - f.ma);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.ma;
            d = d.ma + d.j;
            f <= c ? c = Math.max(c, d) : (b.push(new zt(c, f - c)), c = d)
        }
        return b
    }

    function Ht(a, b) {
        const c = [];
        let d = 0;
        for (const e of Rl(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.F && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(e + "G" + f.map(g => g.ma + "~" + g.getHeight()).join("G"));
            d += f.length;
            if (!a.F && d >= a.l) break
        }
        return c
    }
    var It = class {
        constructor(a, b, c) {
            this.H = -1 == c.Cb;
            this.B = c.Cb;
            this.I = -1 == c.Za;
            this.C = c.Za;
            this.F = -1 == c.lb;
            this.l = c.lb;
            this.D = c.nd;
            this.A = b;
            this.j = a
        }
    };
    var Jt = {
            ea: "ama_success",
            Z: .1
        },
        Kt = {
            ea: "ama_failure",
            Z: .1
        },
        Lt = {
            ea: "ama_inf_scr",
            Z: .1
        },
        Mt = {
            ea: "ama_inf_scr",
            Z: .1
        },
        Nt = {
            ea: "ama_coverage",
            Z: .1
        },
        Ot = {
            ea: "ama_inf_scr",
            Z: 1
        },
        Pt = {
            ea: "ama_opt",
            Z: .1
        };

    function Qt(a, b, c) {
        a = c.B(a.j);
        0 < b.Z && (a.r = b.Z, P(Q, b.ea, a, !0, b.Z, void 0))
    }
    var Rt = class {
        constructor(a) {
            this.j = a
        }
    };

    function St(a) {
        a.F.forEach(b => {
            switch (b) {
                case 0:
                    Tt(a);
                    break;
                case 2:
                    if (b = J(a.j, Nh, 18)) {
                        const c = a.X || new wp(a.l, a.D);
                        dp(new ep(a.l, c, b, new Ko(a.l), K(a.j, Lh, 1)))
                    }
            }
        })
    }

    function Tt(a) {
        Ut(a) && Vt(a, "p", Wt(a));
        if (rl(a.j) && 1 === y(rl(a.j), 1)) {
            var b = J(rl(a.j), Dl, 6);
            b && 2 === y(b, 1) && xn(a.l)
        }
        b = a.A.Gd;
        a: {
            var c = a.l;
            var d = lq(c);c = S(c).clientHeight || iq[d];
            var e = oq(K(b, Sk, 2), d);
            if (e && (e = rq(e, c))) {
                d = e;
                break a
            }
            d = mq(d, c)
        }
        if (a.A.R && C(a.A.R, 10) && (c = gd(J(a.A.R, Cl, 10), 1), null !== c && void 0 !== c)) {
            var f = a.l;
            d = c;
            c = lq(f);
            e = S(f).clientHeight || iq[c];
            var g = void 0;
            b && (g = (g = (g = oq(K(b, Sk, 2), c)) ? J(g, Uk, 7) : void 0) ? sq(g, e) : void 0);
            var h = lq(f);
            f = S(f).clientHeight || iq[h];
            const T = qq(jq[h].Pb, f);
            f = null ===
                T ? mq(h, f) : new nq(T, T, tq(T, T, 8), 8, .3, g);
            g = qq(jq[c].zc, e);
            h = qq(jq[c].Pb, e);
            e = qq(jq[c].yc, e);
            c = f.A;
            g && e && h && void 0 !== d && (c = .5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
            d = c;
            d = new nq(c, d, tq(c, d, f.l), f.l, f.B, f.j)
        }
        if (C(a.j, 26)) {
            c = J(a.j, Fl, 26);
            e = a.l;
            g = F(c, 2);
            c = J(c, Sk, 1);
            f = S(e).clientHeight || iq[lq(e)];
            var k;
            e = null != (k = qq(null == c ? void 0 : y(c, 2), f)) ? k : d.A;
            var l;
            k = null != (l = qq(null == c ? void 0 : y(c, 5), f)) ? l : d.C;
            var m;
            l = g ? [] : null != (m = pq(null == c ? void 0 : K(c, Tk, 3), f)) ? m : d.D;
            var n;
            m = null != (n = null == c ? void 0 : y(c, 4)) ? n : d.l;
            var p;
            n = null != (p = null == c ? void 0 : gd(c, 6)) ? p : d.B;
            var q;
            p = null != (q = (null == c ? 0 : C(c, 7)) ? sq(J(c, Uk, 7), f) : null) ? q : d.j;
            d = new nq(e, k, l, m, n, p)
        }
        q = a.A.R ? y(a.A.R, 6) : [];
        p = a.A.R ? K(a.A.R, al, 5) : [];
        var u;
        m = a.j;
        k = K(m, Lh, 1);
        l = a.A.R && Gl(a.A.R, 1) ? "text_image" : "text";
        c = new rt;
        n = Tn(k, a.l, {
            Yc: c,
            rd: new Pn(l)
        });
        k.length != n.length && a.K.push(13);
        n = n.concat(wt(new xt(a.l, c)));
        k = 0;
        c = V(bj);
        e = !1;
        rl(m) && 1 === y(rl(m), 1) && (f = J(rl(m), Dl, 6)) && (k = y(f, 2) || 0, 1 === y(f, 1) && (e = !0));
        var v, A;
        f = (null == (u = J(m, il, 24)) ? void 0 : null == (v = J(u, nl, 3)) ? void 0 :
            null == (A = J(v, pl, 3)) ? void 0 : J(A, ql, 2)) || !1;
        if (c || e || f) u = tt(new ut(a.l)), n = n.concat(u), ys.H = !0, ys.B = u.length;
        n = n.concat(Vp(m, l, a.l));
        u = J(m, il, 24);
        u = new Qs(n, a.l, k, u);
        v = a.D;
        A = a.l;
        q = {
            pa: d,
            kd: a.W,
            Da: a.A.Da,
            Ab: q,
            Ra: p
        };
        n = V(cj);
        tl(a.j) ? (p = tl(a.j), n = n || id(p, 14, !1), m = id(p, 2, !1), l = id(p, 3, !1), k = id(p, 4, !1), d = id(p, 5, !1), c = id(p, 6, !1), e = gd(p, 8), p = {
            Ja: n,
            Ka: m,
            Yb: l,
            Ac: k,
            Zb: d,
            wc: c,
            Fd: null == e ? 0 : e,
            nc: y(p, 10),
            Ta: Xt(a),
            Bb: a.L
        }) : p = {
            Ja: n,
            Ka: !1,
            Yb: !1,
            Ac: !1,
            Zb: !1,
            wc: !1,
            Fd: 0,
            nc: 0,
            Ta: Xt(a),
            Bb: a.L
        };
        a.B = new it(u, v, A, q, p);
        u = a.A.R ?
            y(a.A.R, 2) : [];
        v = y(b, 1);
        b = a.B;
        u = kt(v, u, {
            ib: b.ib(),
            Gb: b.Gb(),
            Rd: !!b.l.Bb
        });
        b = new lt(u, b);
        a.H = b;
        u = a.H;
        b = new ot;
        for (u.j.B = !0; 0 < u.l.length;) v = u, (A = Qq[u.l[0]]) ? v = A(v.j) : (v.j.ba(12), v = !0), v || u.j.ba(5), u.l.shift();
        try {
            var E = u.j.A.A.filter(Un).j.length,
                G = u.j.J.slice(0),
                I = u.j,
                B = [...I.C],
                D = I.A.j;
            var da = Tq(D) ? [...D.j.l] : [];
            var cb = [...B, ...da];
            var xa = new qt(new jt(E, G, cb, u.j.A.A.j.length, u.j.A.B.j));
            mt(b);
            b.j = 1;
            b.B = xa;
            pt(b.l)
        } catch (T) {
            E = T, mt(b), b.j = 2, b.A = E, pt(b.l)
        }
        b.l.then(ma(a.da, a), ma(a.N, a))
    }

    function Xt(a) {
        return a.A.R && C(a.A.R, 10) ? .5 <= (gd(J(a.A.R, Cl, 10), 1) || 0) : !0
    }

    function Yt(a, b) {
        for (var c = es(es(new js(b.qa), b.ja), a.K), d = b.La, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.l.ppos = b.pc;
        c.l.eatf = b.vb;
        c.l.reatf = b.cb;
        c.l.a = a.H.B.slice(0).join(",");
        a = ds(is(hs(c, a.j), a.F), a.D);
        if (c = b.ub) a.l.as_count = c.Jc, a.l.d_count = c.jd, a.l.ng_count = c.Bd, a.l.am_count = c.Mc, a.l.atf_count = c.Kc, a.l.mdns = ks(c.wd), a.l.alldns = ks(c.Lc);
        c = b.qb;
        null != c && (a.l.allp = c);
        if (c = b.ld) {
            d = [];
            for (var h of Rl(c)) 0 < c.get(h).length && (e = c.get(h)[0], d.push("(" + [h, e.Tc, e.Wd].join() + ")"));
            a.l.fd = d.join(",")
        }
        h = b.Jb;
        null != h && (a.l.pgh = h);
        void 0 !== b.exception && fs(a, b.exception).ba(1);
        return a
    }

    function Zt(a, b) {
        var c = Yt(a, b);
        Qt(a.C, 0 < b.ja.length || 0 < a.K.length || void 0 !== b.exception ? 0 < a.J ? Mt : Kt : 0 < a.J ? Lt : Jt, c);
        if (J(a.j, il, 24)) {
            b = a.B.A.j.j;
            ys.C = [...y(b.j, 1)];
            var d;
            let k;
            ys.F = !!(null == (d = J(b.j, nl, 3)) ? 0 : null == (k = J(d, pl, 3)) ? 0 : J(k, ql, 2));
            d = new Tl;
            var e;
            let l;
            for (const n of null != (l = null == (e = J(b.j, kl, 2)) ? void 0 : K(e, ll, 1)) ? l : []) d.set(H(n, 1), hd(n, 2, 0));
            ys.l = d;
            e = ht(a.B);
            var f;
            ys.A = !!(null == e ? 0 : null == (f = e.optimization) ? 0 : f.ablationFromStorage);
            var g;
            if (null == e ? 0 : null == (g = e.optimization) ? 0 : g.ablatingThisPageview) ys.D = !0;
            let m;
            ys.I = !!(null == e ? 0 : null == (m = e.optimization) ? 0 : m.availableAbg);
            var h;
            f = ys;
            c = new vs(c);
            f.C ? (g = null != (h = f.C) ? h : [], c.j.sl = g.join("~"), c.j.ab = ms(f.D), c.j.rr = ms(f.H), c.j.oab = ms(f.F), null != f.A && (c.j.sab = ms(f.A)), c.j.ls = ms(f.I), ls(c, f.l.Ea()), null != f.B && (c.j.rp = ms(f.B)), Es(f, c)) : (h = "irr".replace(/~/g, ""), c.j.e = c.j.e ? c.j.e + ("~" + h) : h);
            h = c;
            Qt(a.C, Pt, h)
        }
    }

    function $t(a) {
        return rl(a.j) && 1 === y(rl(a.j), 1) ? !(J(rl(a.j), Dl, 6) && 1 <= (y(J(rl(a.j), Dl, 6), 3) || 0)) : !1
    }

    function au(a) {
        if ($t(a)) {
            a = a.B;
            var b = Fq({
                fb: !0,
                gb: !0
            }, a.j);
            a = 0 < ct(b, a.j)
        } else a = a.B.j, b = Eq({
            ta: !1,
            eb: !1
        }, a), a = 0 < ct(b, a);
        return a
    }

    function bu(a) {
        if (Ut(a)) {
            var b = Wt(a);
            a.I.P(null == b ? void 0 : b, () => {
                Vt(a, "s", b)
            });
            qm(a.I, c => {
                Vt(a, "d", Wt(a), c);
                a.I.Ya();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = tl(d)) ? 0 : id(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = tl(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.F) ? 0 : h.includes(0)) a.J++, Tt(a), Vt(a, "r", Wt(a), c)
                    } catch (h) {
                        Vt(a, "f", Wt(a), c), Qt(a.C, Mt, fs(is(hs(ds(new js(0), a.D), a.j), a.F).ba(1), h))
                    }
                }
            })
        }
    }

    function cu(a, b, c) {
        {
            var d = ht(a.B),
                e = b.j;
            const f = e.j;
            let g = e.qa,
                h = e.ja.slice(),
                k = e.La.slice(),
                l = b.exception;
            d ? (d.numAutoAdsPlaced ? g += d.numAutoAdsPlaced : a.H.A && k.push(13), void 0 !== d.exception && (l = d.exception), c = {
                qa: g,
                qb: f,
                ja: e.ja.slice(),
                La: k,
                exception: l,
                cb: c,
                vb: !!d.eatf
            }) : (k.push(12), a.H.A && k.push(13), c = {
                qa: g,
                qb: f,
                ja: h,
                La: k,
                exception: l,
                cb: c,
                vb: !1
            })
        }
        c.ub = dt(a.B.j);
        if (b = b.j.l) c.ld = b;
        c.Jb = S(a.l).scrollHeight;
        if (lk()) {
            d = a.B.A.A.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.K;
                for (const g of Rl(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.H.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.ua,
                    placed: f.B,
                    placementProto: f.A ? md(f.A) : null,
                    articleStructure: f.C ? md(f.C) : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            mk(14, [{
                placementIdentifiers: b
            }, a.B.F, c.ub])
        }
        return c
    }

    function du(a, b) {
        a = a.B.j;
        a = a.googleSimulationState = a.googleSimulationState || {};
        a.amaConfigPlacementCount = b.qb;
        a.numAutoAdsPlaced = b.qa;
        a.hasAtfAd = b.cb;
        void 0 !== b.exception && (a.exception = b.exception)
    }

    function Vt(a, b, c, d) {
        a = {
            r: b,
            pg_h: S(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (a.pg_hd = d);
        P(Q, Ot.ea, a, !0, Ot.Z, void 0)
    }

    function Ut(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = tl(b)) ? void 0 : id(c, 18, !1)) ? d : !1
    }

    function Wt(a) {
        let b = null;
        tl(a.j) && C(tl(a.j), 19) && (b = y(tl(a.j), 19));
        return b
    }
    class eu {
        constructor(a, b, c, d, e, f, g, h, k, l) {
            this.l = a;
            this.C = b;
            this.D = c;
            this.j = d;
            this.A = e;
            this.F = f;
            this.W = g || null;
            this.K = [];
            this.X = h;
            this.I = k;
            this.L = l;
            this.J = 0
        }
        da(a) {
            try {
                const b = au(this) || $t(this) ? au(this) : void 0;
                wm({
                    zb: b
                }, this.l);
                bu(this);
                const c = cu(this, a, au(this));
                C(this.j, 25) && F(J(this.j, El, 25), 1) && du(this, c);
                Zt(this, c);
                R(753, () => {
                    if (V(Wi) && null != this.B) {
                        var d = this.l;
                        var e = this.B;
                        var f = {
                                Cb: Sj(aj),
                                Za: Sj($i),
                                lb: Sj(Xi),
                                nd: V(Vi)
                            },
                            g = Bt(f.Cb, "gapsMeasurementWindow") || Bt(f.Za, "gapsPerMeasurementWindow") ||
                            Bt(f.lb, "maxGapsToReport");
                        e = null != g ? new Vm(null, Error(g)) : -1 == f.Za && -1 == f.lb ? new Vm(null, Error("ShouldHaveLimits")) : Um(new It(d, e, f));
                        d = Xa(c);
                        if (null != e.j) {
                            e = e.j.value;
                            f = ho(e.A.A.A.j.slice(0), e.j);
                            g = Dt(e);
                            var h = new tm(Et(e));
                            for (var k = 0; k < f.length; ++k)
                                if (!h.contains(k)) {
                                    var l = Ft(e, f[k]);
                                    g.push(...l)
                                }
                            g.push(new zt(0, 0));
                            g.push(At(new zt(S(e.j).scrollHeight, 0)));
                            f = Gt(g);
                            g = new Tl;
                            for (h = 0; h < f.length; ++h) k = f[h], l = e.H ? 0 : Math.floor(k.ma / e.B), Pl(g, l) || g.set(l, []), g.get(l).push(k);
                            f = Ht(e, g);
                            d.pc = `M${e.l}H${e.B}C${e.C}B${Number(!!e.D)}W${f.join("W")}`
                        } else d.pc =
                            "E" + e.l.message;
                        d = Yt(this, d);
                        Qt(this.C, Nt, d)
                    }
                })()
            } catch (b) {
                this.N(b)
            }
        }
        N(a) {
            Zt(this, {
                qa: 0,
                qb: void 0,
                ja: [],
                La: [],
                exception: a,
                cb: void 0,
                vb: void 0,
                ub: void 0
            })
        }
    };
    var fu = (a, b, c, d, e = null) => {
        try {
            var f = a.localStorage
        } catch (m) {
            f = null
        }
        if (f) {
            if (V(Ui)) var g = null;
            else try {
                g = f.getItem("google_ama_config")
            } catch (m) {
                g = null
            }
            try {
                var h = g ? od(wl, g) : null
            } catch (m) {
                h = null
            }
            g = h
        } else g = null;
        a: {
            if (d) try {
                var k = od(wl, d);
                break a
            } catch (m) {
                em(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            k = null
        }
        if (d = k) {
            k = new xl;
            ld(d, 3, k);
            g = tl(d) && y(tl(d), 13) ? y(tl(d), 13) : 1;
            z(k, 1, Date.now() + 864E5 * g);
            dd = k = cd(md(d));
            k = new d.constructor(k);
            dd = null;
            tl(d) && (g = new ul, h = id(tl(d), 12, !1), g = z(g, 12, h), h = id(tl(d), 15, !1), g = z(g, 15, h), ld(k, 15, g));
            g = K(k, Lh, 1);
            for (h = 0; h < g.length; h++) z(g[h], 11, []);
            ld(k, 22, void 0);
            if (V(Ui)) gm(a);
            else try {
                a.localStorage.setItem("google_ama_config", k.F())
            } catch (m) {
                em(a, {
                    lserr: 1
                })
            }
            k = Il(a, K(d, Al, 7));
            a: {
                if (k && (g = y(k, 3), h = J(d, Zk, 9), g && h)) {
                    b: {
                        h = K(h, Xk, 1);
                        for (l of h)
                            if (y(l, 1) == g) {
                                var l = J(l, Wk, 2) || null;
                                break b
                            }
                        l = null
                    }
                    if (l) break a
                }
                l = J(d, Wk, 8) || new Wk
            }
            l = {
                Gd: l
            };
            k && (l.R = k);
            k && Gl(k, 3) && (l.Da = [1]);
            if (7 == c.google_pgb_reactive && (k = l.R, !k || !F(k, 8))) return !1;
            if (be(a, 2))
                if (mk(5, [md(d)]), k = fm(c), c = (c = l.R) && y(c, 4) || "", k.google_package =
                    c, k = new am(["google-auto-placed"], k), c = new Rt(a), k = void 0 === k ? null : k, g = new sm(a), e = void 0 === e ? null : e, h = null, k = void 0 === k ? null : k, h = void 0 === h ? null : h, g = void 0 === g ? null : g, e = void 0 === e ? null : e, b)
                    if (d) {
                        f = [];
                        J(d, Nh, 18) && f.push(2);
                        l.R && f.push(0);
                        try {
                            St(new eu(a, c, b, d, l, f, k, h, g, e))
                        } catch (m) {
                            lk() && mk(15, [m]), Qt(c, Kt, fs(is(hs(ds(new js(0), b), d), f).ba(1), m))
                        }
                    } else Qt(c, Kt, ds(new js(0), b).ba(8));
            else Qt(c, Kt, (new js(0)).ba(9));
            return !0
        }
        g && (em(a, {
            cfg: 1,
            cl: 1
        }), gm(a));
        return !1
    };
    var gu = a => "number" === typeof a.google_reactive_sra_index,
        lu = (a, b, c) => {
            const d = b.j || b.pubWin,
                e = b.G;
            e.google_reactive_plat = tr(d, e, c);
            var f = ur(a);
            f && (e.google_reactive_plaf = f);
            (f = vr(a)) && (e.google_reactive_fba = f);
            hu(a, e);
            f = or(b.pubWin.location);
            iu(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            Jf() || ck(b.pubWin.top);
            f = R(429, (h, k) => ju(b, d, e.google_ad_client, a, h, k, c));
            const g = R(430, na(ti, b.pubWin, 431, Q));
            Yh(b.pubWin, "rsrai", f, g);
            fi(d).wasReactiveTagRequestSent = !0;
            ku(b, a)
        };
    const ku = (a, b) => {
        const c = a.G,
            d = ea(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = R(353, (f, g) => {
            var h = a.pubWin,
                k = c.google_ad_client;
            return of(g.origin) ? fu(h, k, d, f.config) : !1
        });
        const e = R(353, na(ti, a.pubWin, 353, Q));
        Yh(a.pubWin, "apcnf", b, e)
    };
    var ju = (a, b, c, d, e, f, g) => {
            if (! of (f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!be(b, 1)) return !0;
            f && mk(6, [f]);
            e = e.amaConfig;
            const h = [],
                k = [],
                l = fi(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const p = f[n],
                    q = p.adFormat;
                l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
                if (!p.noCreative) {
                    p.google_reactive_sra_index = n;
                    if (9 === q && e) {
                        p.pubVars = Object.assign(p.pubVars || {}, mu(d, p));
                        const u = new km;
                        if (im(u, p)) {
                            m = u;
                            continue
                        }
                    }
                    h.push(p);
                    k.push(q)
                }
            }
            h.length && (ih("rasra::pm", {
                rt: k.join(","),
                c
            }, .1), xr(a.F.qc, 522, n => {
                nu(h, b, c, n, d, g)
            }));
            e && fu(b, c, d, e, m);
            return !0
        },
        mu = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            ea(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        nu = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const k = a[h],
                    l = k.adFormat,
                    m = k.adKey,
                    n = d.configProcessorForAdFormat(l);
                l && n && m ? (k.pubVars = mu(e, k), delete k.google_reactive_sra_index, g.push(l), hh(466, () => n.verifyAndProcessConfig(b, k, f))) : ih("rasra::ivc", {
                    af: l,
                    ak: m,
                    c
                }, .1)
            }
            ih("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        hu = (a, b) => {
            const c = [];
            let d = !1;
            gg(di, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    ea(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = di[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        iu = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    Ec("script");
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
    var ou = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function pu() {
        var a = O(),
            b = Hf(a);
        if (b) return (b = b || Hf()) ? (a = b.pageViewId, b = b.clientId, "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null, +a;
        a = Gk(a, !1).$;
        (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
        return b
    }

    function qu() {
        if (ru) return ru;
        const a = Kf() || O(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? ru = b : a.google_persistent_state_async = ru = new su
    }

    function tu(a) {
        return uu[a] || "google_ps_" + a
    }

    function X(a, b, c) {
        b = tu(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function vu(a, b) {
        var c = X(a, b, 0) + 1;
        return a.S[tu(b)] = c
    }

    function wu() {
        var a = qu();
        return X(a, 20, {})
    }

    function xu() {
        var a = qu();
        return X(a, 28, [])
    }
    class su {
        constructor() {
            this.S = {}
        }
    }
    var ru = null;
    const uu = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function yu(a, b) {
        if (!Zm(b, a)) return () => {};
        a = zu(b, a);
        if (!a) return () => {};
        const c = xu();
        b = Xa(b);
        const d = {
            Lb: a,
            G: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Ea(c, d)
    }

    function zu(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !ug.test(a.className);) a = a.parentElement;
        return a
    }

    function Au(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                k = a.childNodes[g];
            var c = k.style,
                d = h,
                e = ["width", "height"];
            for (let l = 0; l < e.length; l++) {
                const m = "google_ad_" + e[l];
                if (!d.hasOwnProperty(m)) {
                    var f = Ze(c[e[l]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return k
        }
        return null
    }

    function Bu(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function Cu(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 0 : 90;
        if (a.j != c) {
            a.j = c;
            a = xu();
            for (const d of a)
                if (d.Lb.offsetWidth != d.offsetWidth || d.G.google_full_width_responsive_allowed) d.offsetWidth = d.Lb.offsetWidth, hh(467, () => {
                    var e = d.Lb,
                        f = d.G;
                    const g = Au(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    O().google_spfd(e, f, b);
                    const h = Au(e, f);
                    !h && g && 1 == e.childNodes.length ? (Bu(g, !1), V(wj) ? f.rss = 1 : (f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize"), e.setAttribute("data-adsbygoogle-status", "reserved"), e.className += " adsbygoogle-noablate", yr(b), b.adsbygoogle.push({
                        element: e,
                        params: f
                    })) : h && g ? h != g && (Bu(g, !1), Bu(h, !0)) : P(Q, "auto_size_refresh", {
                        context: "showOrHideElm",
                        url: b.location.href,
                        nodes: e.childNodes.length
                    }, !0, void 0, void 0)
                })
        }
    }
    class Du {
        constructor() {
            this.j = null
        }
        P(a) {
            const b = qu();
            X(b, 27, !1) || (b.S[tu(27)] = !0, this.j = a.innerHeight >= a.innerWidth ? 0 : 90, L(a, "resize", () => Cu(this, a)))
        }
    }
    ca(Du);
    var Eu = (a, b) => {
        Zg(a, c => {
            c.shv = String(b);
            c.mnvr = "";
            const d = Wj(r);
            d && (c.eid = 50 < d.length ? d.substring(0, 50) + "T" : d)
        })
    };
    var Fu = class {
        constructor(a, b, c) {
            this.B = a;
            this.A = b;
            this.j = c;
            this.l = null;
            this.C = this.D = 0
        }
        F() {
            10 <= ++this.D && r.clearInterval(this.l);
            var a = bn(this.B, this.A);
            a = cn(this.B, this.A, a);
            const b = Ym(this.A, this.B);
            null != b && 0 === b.x || r.clearInterval(this.l);
            a && (this.C++, a = {
                aligns: this.C,
                attempt: this.D,
                client: this.j.google_ad_client,
                eoffs: null != b ? b.x : null,
                eids: Wj(this.j),
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, P(Q, "rspv:al", a, !0, .01, void 0))
        }
    };

    function Gu(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Hu(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Gu(a) && hg(a.nq) && hg(a.nqa) && hg(a.al) && hg(a.rl)
    }

    function Iu(a) {
        const b = R(189, ma(a.N, a));
        a.l.setTimeout(b, 0)
    }
    class Ju {
        constructor(a) {
            this.B = [];
            this.l = a || window;
            this.j = 0;
            this.A = null;
            this.H = 0
        }
        I(a, b) {
            0 != this.j || 0 != this.B.length || b && b != window ? this.C(a, b) : (this.j = 2, this.F(new Ku(a, window)))
        }
        C(a, b) {
            this.B.push(new Ku(a, b || this.l));
            Iu(this)
        }
        K(a) {
            this.j = 1;
            if (a) {
                const b = R(188, ma(this.D, this, !0));
                this.A = this.l.setTimeout(b, a)
            }
        }
        D(a) {
            a && ++this.H;
            1 == this.j && (null != this.A && (this.l.clearTimeout(this.A), this.A = null), this.j = 0);
            Iu(this)
        }
        L() {
            return !(!window || !Array)
        }
        J() {
            return this.H
        }
        N() {
            if (0 == this.j && this.B.length) {
                const a =
                    this.B.shift();
                this.j = 2;
                const b = R(190, ma(this.F, this, a));
                a.$.setTimeout(b, 0);
                Iu(this)
            }
        }
        F(a) {
            this.j = 0;
            a.j()
        }
    }
    var Lu;
    Ju.prototype.nq = Ju.prototype.I;
    Ju.prototype.nqa = Ju.prototype.C;
    Ju.prototype.al = Ju.prototype.K;
    Ju.prototype.rl = Ju.prototype.D;
    Ju.prototype.sz = Ju.prototype.L;
    Ju.prototype.tc = Ju.prototype.J;
    var Ku = class {
        constructor(a, b) {
            this.j = a;
            this.$ = b
        }
    };
    var qh = a => "string" === typeof a;
    var Mu = "undefined" === typeof sttc ? void 0 : sttc;

    function Nu(a) {
        try {
            return ph(a), new Ph(JSON.parse(a))
        } catch (b) {
            dh.ca(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
                c.jspb = String(a)
            })
        }
        return new Ph
    };
    let Ou = (new Date).getTime();

    function Pu(a) {
        this.j = a || {
            cookie: ""
        }
    }
    Pu.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.xh, g = c.Sd || !1, f = c.domain || void 0, e = c.path || void 0, d = c.ic);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Pu.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = sb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    Pu.prototype.Ea = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };

    function Qu(a, b = window) {
        if (F(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function Ru(a) {
        return V(Jj) && !a.navigator.cookieEnabled ? !1 : "null" !== a.origin
    }

    function Su(a, b) {
        return F(a, 5) && Ru(b) ? b.document.cookie : null
    }

    function Tu(a, b, c) {
        b = Su(b, c);
        return null === b ? null : (new Pu({
            cookie: b
        })).get(a) || ""
    };

    function Uu(a, b) {
        return Tu("__gads", b, a.j)
    }
    var Vu = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function Wu(a) {
        return a.some(b => 6 === b.state)
    }

    function Xu(a, b) {
        a = a.filter(c => 6 === c.state).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        b && 0 < Object.keys(b).length && (a.additionalSigningData = ad(JSON.stringify(b)));
        return a
    };
    var Yu = R(215, a => {
            const b = a.google_sa_queue,
                c = b.shift();
            a.google_sa_impl || ih("shimpl", {
                t: "no_fn"
            });
            "function" === typeof c && hh(216, c);
            b.length && a.setTimeout(() => Yu(a), 0)
        }),
        Zu = a => {
            const b = ue(document, "IFRAME");
            gg(a, (c, d) => {
                null != c && b.setAttribute(d, c)
            });
            return b
        },
        $u = a => {
            const b = ["<iframe"];
            gg(a, (c, d) => {
                if (null != c) {
                    var e = b.push;
                    c = tb(c, void 0);
                    e.call(b, " " + d + '="' + c + '"')
                }
            });
            b.push("></iframe>");
            return b.join("")
        },
        av = (a, b, c, d) => {
            null != b && (a.width = String(b));
            null != c && (a.height = String(c));
            a.frameborder = "0";
            a.src = d;
            a.marginwidth = "0";
            a.marginheight = "0";
            a.vspace = "0";
            a.hspace = "0";
            a.allowtransparency = "true";
            a.scrolling = "no";
            a.allowfullscreen = "true"
        },
        bv = (a, b) => {
            const c = new XMLHttpRequest;
            try {
                c.open("GET", a)
            } catch (d) {
                throw Error("Error opening XHR: " + d);
            }
            return new Promise(d => {
                const e = () => {
                    c.readyState != XMLHttpRequest.DONE || 300 <= c.status || d(b(c.responseText))
                };
                c.onreadystatechange = e;
                c.onload = e;
                c.onerror = () => {
                    throw Error("XHR error: " + a);
                };
                c.send()
            })
        },
        cv = a => bv(a, b => b.includes('"_cookies_":') ? JSON.parse(b) :
            b);

    function dv(a, b, c, d) {
        return R(629, e => {
            if ("string" === typeof e) {
                if ("[]" === e) return Promise.resolve();
                e = od(Yd, e);
                V(zj) && z(e, 4, d)
            } else {
                delete a._gfp_s_;
                if (!e) throw Error("Invalid JSONP response");
                e = e._cookies_;
                if (!e) return Promise.resolve();
                var f = e[0];
                if (!f) throw Error("Invalid JSONP response");
                var g = f._value_,
                    h = f._expires_;
                e = f._path_;
                f = f._domain_;
                if ("string" !== typeof g || "number" !== typeof h || "string" !== typeof e) throw Error("Invalid JSONP response");
                var k = new Yd;
                g = z(k, 1, g);
                h = z(g, 2, h);
                e = z(h, 3, e);
                if (V(zj)) z(e, 4,
                    d);
                else {
                    if ("string" !== typeof f) throw Error("Invalid JSONP response");
                    z(e, 4, f)
                }
            }
            f = {
                ic: y(e, 2) - c.j.Date.now() / 1E3,
                path: y(e, 3),
                domain: y(e, 4),
                Sd: !1
            };
            h = y(e, 1);
            g = c.j;
            F(b, 5) && Ru(g) && (new Pu(g.document)).set("__gads", h, f);
            F(b, 5) && .01 > c.j.Math.random() && (f = Uu(c, b), yf({
                domain: y(e, 4),
                host: c.j.location.host,
                success: f === y(e, 1) ? "1" : "0"
            }));
            return Promise.resolve()
        })
    }

    function ev(a, b, c) {
        let d = void 0;
        if (V(zj)) {
            a: {
                var e = c.location.host;
                if (c.navigator.cookieEnabled && e.includes(".")) {
                    e = e.replace(/:\d+$/, "");
                    e = e.split(".");
                    for (let h = 2; h <= e.length; h++) {
                        const k = e.slice(e.length - h).join(".");
                        var f = {
                                domain: k
                            },
                            g = c;
                        F(b, 5) && Ru(g) && (new Pu(g.document)).set("gadsTest", "test", f);
                        if ("test" === Tu("gadsTest", b, c)) {
                            e = k;
                            break a
                        }
                    }
                }
                e = null
            }
            e && (d = dv(c, b, a, e))
        }
        else {
            if (0 === a.l) {
                if (Uu(a, b)) e = !0;
                else if (e = a.j, F(b, 5) && Ru(e) && (new Pu(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" ===
                    Tu("GoogleAdServingTest", b, a.j)) f = a.j, F(b, 5) && Ru(f) && (f = new Pu(f.document), f.get("GoogleAdServingTest"), f.set("GoogleAdServingTest", "", {
                    ic: 0,
                    path: void 0,
                    domain: void 0
                }));
                a.l = e ? 2 : 1
            }
            2 === a.l && (d = dv(c, b, a))
        }
        c._gfp_p_ = !0;
        return d
    }

    function fv(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        const e = Uu(b, a) || "";
        e && (d.cookie = e);
        const f = kb(nb(gb(hb("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = ev(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            Le(c.document, f)
        }) : Promise.resolve()
    }

    function gv(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        var d = new Vu(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : V(Qi) ? (c = `${"https://partner.googleadservices.com/gampad/cookie.js"}?domain=${b.location.hostname}&client=${c}`, (e = Uu(d, a) || "") && (c += `&cookie=${e}`), (b = ev(d, a, b)) ? cv(c).then(b) : Promise.resolve()) :
                fv(a, d, b, c)
        } else Promise.resolve();
        a = Uu(d, a) || "";
        Ah || (Ah = new zh);
        d = Ah;
        yh(d, a);
        a = d.l;
        Tj.V().j(a);
        Mi.V().j(17)
    };
    var iv = a => {
            const b = {};
            b.dtd = hv((new Date).getTime(), Ou);
            return lg(b, a)
        },
        hv = (a, b, c = 1E5) => {
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    var kv = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => jv(e));
        return Yh(a, "adpnt", (f, g) => {
            var h;
            if (pi(g, c.contentWindow)) {
                f = si(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    var k;
                    if (V(Oj)) {
                        null !== (h = a.googletag) && void 0 !== h ? h : a.googletag = {};
                        var l = null !== (k = a.googletag.queryIds) && void 0 !== k ? k : [];
                        l.push(f);
                        500 < l.length && l.shift();
                        a.googletag.queryIds = l
                    }
                } catch (m) {}
                e.dataset.adStatus && P(Q, "adsense_late_fill", {
                    status: e.dataset.adStatus
                }, !0, void 0, void 0);
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function jv(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };
    var lv = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };

    function mv(a, b) {
        const c = a.pubWin.document.getElementById(a.G.google_async_iframe_id + "_expand");
        return c ? new nv(a, b, c) : null
    }

    function ov(a) {
        a.A = a.D;
        a.H.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.F.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        pv(a)
    }

    function qv(a, b) {
        (a.l.contentWindow || a.l.contentWindow).postMessage(JSON.stringify({
            ["msg_type"]: "expand-on-scroll-result",
            ["eos_success"]: !0,
            ["eos_amount"]: b,
            googMsgType: "sth"
        }), "*")
    }

    function pv(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.F.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.F.setAttribute("height", a.A);
        a.F.style.height = a.A + "px";
        a.C.style.height = a.A + "px";
        a.H.style.height = a.A + "px"
    }

    function rv(a, b) {
        b = Xe(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.J = $f(a.H).y;
        a.I = qi(a.j);
        if (a.J + a.A < a.I) return "2";
        if (a.J > li(a.j) - a.j.innerHeight) return "3";
        b = a.I;
        a.l.setAttribute("height", a.D);
        a.l.style.height = a.D + "px";
        a.F.style.overflow = "hidden";
        a.H.style.position = "relative";
        a.H.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.F.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.J, a.A);
        Uf(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        Uf(a.l, {
            clip: b
        });
        Uf(a.F, {
            clip: b
        });
        return "0"
    }

    function sv(a, b = {}) {
        a.X && (b.eid = a.X);
        b.qid = a.ha;
        P(Q, "eoscrl", b, !0, lv(String(a.Ma)), void 0)
    }
    class nv extends xi {
        constructor(a, b, c) {
            super(a.j);
            this.l = b;
            this.F = c.firstElementChild;
            this.C = c;
            this.H = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.A = parseInt(this.C.style.height, 10);
            this.X = null;
            this.Pa = this.Na = !1;
            this.ha = "";
            this.aa = this.I = this.D = 0;
            this.Gc = this.A / 5;
            this.J = $f(this.H).y;
            this.Ma = null;
            this.Fc = Ra(R(651, () => {
                this.J = $f(this.H).y;
                var d = this.I;
                this.I = qi(this.j);
                this.A < this.D ? (d = this.I - d, 0 < d && (this.aa += d, this.aa >= this.Gc ? (ov(this),
                    qv(this, this.D)) : (this.A = Math.min(this.D, this.A + d), qv(this, d), pv(this)))) : Ld(this.j, "scroll", this.K)
            }), this);
            this.K = () => {
                var d = this.Fc;
                N.requestAnimationFrame ? N.requestAnimationFrame(d) : d()
            }
        }
        L(a) {
            a["expand-on-scroll"] = (b, c) => {
                Ag(c, this.l) && (b = si(b), this.X = b.i_expid, this.ha = b.qid, this.Ma = b.gen204_fraction, this.Na || (this.Na = !0, b = rv(this, b), "0" === b && L(this.j, "scroll", this.K, Id), c.source.postMessage(JSON.stringify({
                        ["msg_type"]: "expand-on-scroll-result",
                        ["eos_success"]: "0" === b,
                        googMsgType: "sth"
                    }), "*"),
                    sv(this, {
                        err: b
                    })))
            };
            a["expand-on-scroll-force-expand"] = (b, c) => {
                Ag(c, this.l) && !this.Pa && (this.Pa = !0, ov(this), Ld(this.j, "scroll", this.K))
            }
        }
        B() {
            this.K && Ld(this.j, "scroll", this.K, Id);
            super.B()
        }
    };

    function tv(a) {
        const b = a.A.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    class uv extends ui {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.D = b;
            this.A = c;
            this.F = 0;
            this.A && (this.C = tv(this), this.I = Qa(this.H, this), this.j = R(433, () => {
                var d = this.I;
                N.requestAnimationFrame ? N.requestAnimationFrame(d) : d()
            }), L(this.l, "scroll", this.j, Id))
        }
        H() {
            const a = tv(this);
            if (a && !this.C) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.D.contentWindow;
                c && (ci(c, "ig", b, "*", 2), 10 <= ++this.F && this.j && Ld(this.l, "scroll", this.j, Id))
            }
            this.C = a
        }
    };
    class vv extends xi {
        constructor(a, b) {
            a.j && super(a.j);
            this.l = b;
            this.C = a.D;
            this.A = a.C
        }
        L(a) {
            a.interscroller = (b, c) => {
                if (Ag(c, this.l) && (c = si(b), b = c.i_h, c = c.i_f, null != b && "" !== b && null != c && "" !== c)) {
                    if (!this.C || !this.A) throw Error("intscrl_no_ins");
                    this.C.style.position = "relative";
                    M(this.A, {
                        position: "absolute",
                        clip: "rect(0, auto, auto, 0)"
                    });
                    var d = this.A.firstElementChild;
                    d && d.id == this.l.id && M(d, {
                        position: "fixed"
                    });
                    d = Xe(Yf(this.A, "zIndex").toString(), 0) + 1;
                    b = tf(this.l.id + "_header", b);
                    M(b, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("afterbegin", b);
                    b = tf(this.l.id + "_footer", c);
                    M(b, {
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("beforeend", b)
                }
            }
        }
    };
    const wv = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function xv(a, b) {
        const c = a.pubWin.document.getElementById(a.G.google_async_iframe_id + "_anchor");
        return c ? new yv(a, b, c) : null
    }

    function zv(a, b) {
        if (!a.ha) return "1";
        b = Xe(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "2";
        a.C = $f(a.A).y;
        b = a.j.innerHeight;
        if (a.C + a.X < b) return "4";
        if (a.C > li(a.j) - b) return "3";
        a.A.setAttribute("height", a.D);
        a.A.style.height = a.D + "px";
        Uf(a.l, wv);
        a.l.style.height = a.D + "px";
        a.K.style.position = "relative";
        a.aa();
        return "0"
    }

    function Av(a, b = {}) {
        a.F && (b.eid = a.F);
        b.qid = a.H;
        P(Q, "pscrl", b, !0, lv(String(a.I)), void 0)
    }
    class yv extends xi {
        constructor(a, b, c) {
            a.j && super(a.j);
            this.A = b;
            this.l = c;
            this.K = this.l.parentElement;
            this.X = parseInt(this.l.style.height, 10);
            this.F = null;
            this.J = !1;
            this.H = "";
            this.D = 0;
            this.C = $f(this.A).y;
            this.I = null;
            this.ha = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame;
            this.aa = R(636, () => {
                this.ha.call(this.j, this.aa);
                var d = this.j.innerHeight,
                    e = qi(this.j);
                this.C = $f(this.K).y;
                e + d > this.C ? (e = e + d - this.C, d = Math.min(e,
                    this.X), e = this.D - e, e = Math.max(0, e), 0 >= e ? Uf(this.l, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : Uf(this.l, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }), Uf(this.l, {
                    clip: "rect(" + e + "px, " + this.A.width + "px, " + (e + d) + "px, 0px)"
                })) : Uf(this.l, {
                    clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)"
                })
            })
        }
        L(a) {
            a["parallax-scroll"] = (b, c) => {
                b = si(b);
                this.F = b.i_expid;
                this.H = b.qid;
                this.I = b.gen204_fraction;
                !this.J && Ag(c, this.A) && (this.J = !0, b = zv(this, b), c.source.postMessage(JSON.stringify({
                    ["msg_type"]: "parallax-scroll-result",
                    ["ps_success"]: "0" === b,
                    googMsgType: "sth"
                }), "*"), Av(this, {
                    err: b
                }))
            }
        }
    };

    function Bv(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = re(a.j.M() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = Cv(a, b, c, a.j.j.elementsFromPoint(je(c.left + c.width / 2, c.left, c.right - 1), je(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = Cv(a, b, c, a.j.j.elementsFromPoint(je(c.left + c.width / 2, c.left, c.right - 1), je(c.top + 2, c.top, c.bottom - 1)), 2, e.ia),
            g = Cv(a, b, c, a.j.j.elementsFromPoint(je(c.left + 2, c.left, c.right - 1), je(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ia, ...f.ia]);
        const h = Cv(a, b, c, a.j.j.elementsFromPoint(je(c.right - 1 - 2, c.left, c.right - 1), je(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ia, ...f.ia, ...g.ia]);
        var k = Dv(a, b, c),
            l = n => Da(a.A, n.overlapType) && Da(a.B, n.overlapDepth) && Da(a.l, n.overlapDetectionPoint);
        e = ya([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = ya(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = se(a.j.j);
        const m = new Df(c.left, c.top, c.width, c.height);
        e = [...za(e, n => new Df(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...Ia(za(l, n => Ff(m, n.elementRect))), ...ya(Ff(m, new Df(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? Ev(m, e) : Fv(c, e)
        }
    }

    function Gv(a, b) {
        const c = a.j.M(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new Wg,
                                        m = Vg(l, () => Bv(a, k));
                                    m && (l.events.length && (m.executionTime = Math.round(Number(l.events[0].duration))), h.disconnect(), e(m))
                                }, Hv);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function Cv(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            ia: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const p = d[n];
            if (p === b) continue;
            if (Da(f, p)) continue;
            h.push(p);
            const q = p.getBoundingClientRect();
            if (a.j.contains(p, b)) {
                g.push(Iv(a, c, p, q, 1, e));
                continue
            }
            if (a.j.contains(b, p)) {
                g.push(Iv(a, c, p, q, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b,
                    m = p;
                const A = k.j.l(l, m);
                if (!A) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: E,
                    ra: G
                } = Jv(k, l, A, m) || {},
                {
                    suspectAncestor: I,
                    ra: B
                } = Jv(k, m, A, l) || {};k = E && G && I && B ? G <= B ? {
                    suspectAncestor: E,
                    overlapType: Kv[G]
                } : {
                    suspectAncestor: I,
                    overlapType: Lv[B]
                } : E && G ? {
                    suspectAncestor: E,
                    overlapType: Kv[G]
                } : I && B ? {
                    suspectAncestor: I,
                    overlapType: Lv[B]
                } : null
            }
            const {
                suspectAncestor: u,
                overlapType: v
            } = k || {};
            u && v ? g.push(Iv(a, c, p, q, v, e, u)) : g.push(Iv(a, c, p, q, 9, e))
        }
        return {
            entries: g,
            ia: h
        }
    }

    function Dv(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Me(b, a.j.M());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(Iv(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(Iv(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(Iv(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function Ev(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Ef(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Fv(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function Iv(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Da(a.A, e) && Da(a.l, f)) {
            b = new Af(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = Mv(a, c)) && Cf(b, a)) c = 4;
            else {
                a = Nv(c, d);
                if (Jc) {
                    e = dg(c, "paddingLeft");
                    f = dg(c, "paddingRight");
                    var k = dg(c, "paddingTop"),
                        l = dg(c, "paddingBottom");
                    e = new Af(k, f, l, e)
                } else e = Xf(c, "paddingLeft"), f = Xf(c, "paddingRight"), k = Xf(c, "paddingTop"), l = Xf(c, "paddingBottom"), e = new Af(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                Cf(b, new Af(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = Nv(c, d), c = Cf(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function Jv(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.M();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Me(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    ra: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    ra: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    ra: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = Ov(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        ra: 4
                    }
                }
            }
        }
        return (a = Ov(a, e, b)) ? {
                suspectAncestor: a,
                ra: 5
            } :
            null
    }

    function Ov(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Me(f, a.j.M());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function Mv(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new Af(a.top, a.right, a.bottom, a.left)
    }

    function Nv(a, b) {
        if (!Jc || 9 <= Number(Xc)) {
            var c = Xf(a, "borderLeftWidth");
            d = Xf(a, "borderRightWidth");
            e = Xf(a, "borderTopWidth");
            a = Xf(a, "borderBottomWidth");
            c = new Af(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = fg(a, "borderLeft");
            var d = fg(a, "borderRight"),
                e = fg(a, "borderTop");
            a = fg(a, "borderBottom");
            c = new Af(e, d, a, c)
        }
        return new Af(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class Pv {
        constructor(a, b = Qv) {
            this.j = oe(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const Kv = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        Lv = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    ya(Re({
        Df: 1,
        Ef: 2,
        bh: 3,
        eh: 4,
        gh: 5,
        zf: 6,
        Af: 7,
        Cf: 8,
        xg: 9,
        fh: 10,
        Bf: 11,
        ah: 12,
        yf: 13
    }), a => !Da([1, 2], a));
    Re({
        Qe: 1,
        yg: 2,
        bf: 3,
        hh: 4
    });
    const Qv = Re({
            Re: 1,
            kh: 2,
            mg: 3,
            Pg: 4
        }),
        Hv = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function Rv(a, b) {
        Array.isArray(b) || (b = [b]);
        b = za(b, function(c) {
            return "string" === typeof c ? c : c.Kb + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Uf(a, "transition", b.join(","))
    }
    var Sv = Oa(function() {
        if (Jc) return Uc("10.0");
        var a = ue(document, "DIV"),
            b = Nc ? "-webkit" : Mc ? "-moz" : Jc ? "-ms" : Ic ? "-o" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!mc.test("div")) throw Error("");
        if ("DIV" in oc) throw Error("");
        c = null;
        var d = "";
        if (b)
            for (l in b)
                if (Object.prototype.hasOwnProperty.call(b, l)) {
                    if (!mc.test(l)) throw Error("");
                    var e = b[l];
                    if (null != e) {
                        var f = l;
                        var g = e;
                        if (g instanceof db) g = gb(g);
                        else if ("style" == f.toLowerCase()) {
                            e = void 0;
                            if (!ea(g)) throw Error("");
                            if (!(g instanceof Ob)) {
                                var h = "";
                                for (e in g)
                                    if (Object.prototype.hasOwnProperty.call(g, e)) {
                                        if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                        var k = g[e];
                                        null != k && (k = Array.isArray(k) ? za(k, Qb).join(" ") : Qb(k), h += e + ":" + k + ";")
                                    }
                                g = h ? new Ob(h, Nb) : Pb
                            }
                            g = g instanceof Ob && g.constructor === Ob ? g.l : "type_error:SafeStyle"
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in nc)
                                if (g instanceof jb) g = mb(g).toString();
                                else if (g instanceof Eb) g = Fb(g);
                            else if ("string" === typeof g) g =
                                (Kb(g) || Mb).j();
                            else throw Error("");
                        }
                        g.ga && (g = g.j());
                        f = f + '="' + tb(String(g)) + '"';
                        d += " " + f
                    }
                }
        var l = "<div" + d;
        d = void 0;
        null == d ? d = [] : Array.isArray(d) || (d = [d]);
        !0 === $a.div ? l += ">" : (c = rc(d), l += ">" + jc(c).toString() + "</div>", c = c.l());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = lc(l, c);
        uc(a, b);
        a = a.firstChild;
        b = a.style[Cc("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Vf(a, "transition")] || "")
    });

    function Tv(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function Uv(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function Vv(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function Wv(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(Xv, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function Yv(a) {
        var b = Wv(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var Zv = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function $v(a) {
        let b = a.X;
        a.J = function() {};
        aw(a, a.I, b);
        let c = a.I.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Me(c, b)
            } catch (g) {
                Vv(a.j, "c")
            }
            const f = bw(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.W = !0);
            if (d && !f && cw(e)) {
                Uv(a.j, "l");
                a.K = c;
                break
            }
            d = d && f;
            if (e && dw(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.Oa) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Fe(b)) {
                        Uv(a.j, "c");
                        break
                    }
                } catch (g) {
                    Uv(a.j,
                        "c");
                    break
                }
            }
        }
        a.H && a.B && ew(a);
        return a.j
    }

    function fw(a) {
        function b() {
            gw(c, f, g);
            if (h && !k && !g) {
                const l = function(m) {
                    for (let n = 0; n < m.length; n++) Uf(h, m[n], "0px")
                };
                l(hw);
                l(iw)
            }
        }
        const c = a.I;
        c.style.overflow = a.Na ? "visible" : "hidden";
        a.H && (a.K ? (Rv(c, jw), Rv(a.K, jw)) : Rv(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.N && (c.style.opacity = a.N);
        const d = null != a.F && null != a.A && (a.na || a.A > a.F) ? a.A : null,
            e = null != a.D && null != a.l && (a.na || a.l > a.D) ? a.l : null;
        if (a.L) {
            const l = a.L.length;
            for (let m = 0; m < l; m++) gw(a.L[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.K,
            k = a.W;
        a.H ? r.setTimeout(b, 1E3) : b()
    }

    function kw(a) {
        if (a.B && !a.ha || null == a.A && null == a.l && null == a.N && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        $v(a);
        a.B = b;
        if (!b || null != a.da && !Wv(a.j, a.da, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.F = null, a.D = null);
        if (null == a.F && null !== a.A || null == a.D && null !== a.l) a.H = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        fw(a);
        return $v(a)
    }

    function dw(a, b) {
        let c = !1;
        "none" == b.display && (Uv(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || Uv(a.j, "v");
        "hidden" == b.overflow && Uv(a.j, "o");
        "absolute" == b.position ? (Uv(a.j, "a"), c = !0) : "fixed" == b.position && (Uv(a.j, "f"), c = !0);
        return c
    }

    function aw(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = lw(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && Tv(a.j, 0, "o"), d & 4 && Tv(a.j, 1, "o"));
        return !(d & 1)
    }

    function bw(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (A) {
            Vv(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Xe(f),
            h = c.getAttribute("height"),
            k = Xe(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = aw(a, c, b);
        var n = d && d.width,
            p = d && d.height,
            q = e && e.width,
            u = e && e.height,
            v = Ze(n) == a.F && Ze(p) == a.D;
        n = v ? n : q;
        u = v ? p : u;
        q = Ze(n);
        v = Ze(u);
        g = null !== a.F && (null !== q && a.F >= q || null !== g && a.F >= g);
        v = null !== a.D && (null !== v && a.D >= v || null !== k && a.D >= k);
        k = !m && cw(d);
        v = m || v || k || !(f || n || d && (!mw(String(d.minWidth)) || !nw(String(d.maxWidth))));
        l = m || g || k || l || !(h || u || d && (!mw(String(d.minHeight)) || !nw(String(d.maxHeight))));
        ow(a, 0, v, c, "width", f, a.F, a.A);
        pw(a, 0, "d", v, e, d, "width", n, a.F, a.A);
        pw(a, 0, "m", v, e, d, "minWidth", e && e.minWidth, a.F, a.A);
        pw(a, 0, "M", v, e, d, "maxWidth", e && e.maxWidth, a.F, a.A);
        if (a.Pa) {
            c = /^html|body$/i.test(c.nodeName);
            p = Ze(p);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && p && Math.round(p) !== a.l) && !(f = !h) && (f = p, f = (V(hj) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.B && !c && f) c = !(a.Ma && d && (V(fj) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round(Ze(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"), d && !mw(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !nw(String(d.maxHeight)) && a.l && Math.round(p) < a.l && e.setProperty("max-height", "none", "important"))
        } else ow(a, 1, l, c, "height", h, a.D, a.l), pw(a, 1, "d", l, e, d, "height", u, a.D, a.l), pw(a, 1, "m", l, e, d, "minHeight", e && e.minHeight,
            a.D, a.l), pw(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
        return m
    }

    function ew(a) {
        function b() {
            if (0 < c) {
                var l = Me(e, d) || {};
                const m = Ze(l.width);
                l = Ze(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else r.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.X,
            e = a.I,
            f = a.A,
            g = a.l,
            h = a.J;
        let k;
        r.setTimeout(function() {
            k = r.setInterval(b, 16)
        }, 990)
    }

    function lw(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Me(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function ow(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Xe(f);
                null == f && (Vv(a.j, "n"), Tv(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.H) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, k - n);
                                l && l(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else Tv(a.j, b, "d")
        }
    }

    function pw(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? mw(f) : nw(f)) || (f = Ze(f), null == f ? Uv(a.j, "p") : null != k && Uv(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? mw(h) : nw(h)) return;
                h = Ze(h);
                null == h && (Vv(a.j, "p"), Tv(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.H) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.J;
                            a.J = function(p, q) {
                                p == b && (e[g] = m - q + "px");
                                n && n(p, q)
                            }
                        } else e[g] = l + "px"
                } else Tv(a.j, b, c)
        }
    }
    var uw = class {
        constructor(a, b, c, d, e, f, g) {
            this.Oa = a;
            this.L = c;
            this.I = b;
            this.X = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new qw(this.I);
            this.B = g;
            this.ha = rw(this.C, d.Qb, d.height, d.xc);
            this.F = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = sw(d.width);
            this.l = sw(d.height);
            this.N = this.B ? sw(d.opacity) : null;
            this.da =
                d.check;
            this.H = "animate" == d.Qb && !tw(this.C, this.l, this.aa) && Sv();
            this.Na = !!d.Sb;
            this.j = new Zv;
            tw(this.C, this.l, this.aa) && Uv(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && Uv(this.j, "b");
            this.K = this.J = null;
            this.W = !1;
            this.na = !!d.Pd;
            this.Pa = !!d.vc;
            this.aa = !!d.xc;
            this.Ma = d.Qa
        }
    };

    function tw(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, sw(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var qw = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow),
                d;
            if (d = c) d = Fe(c.top) ? c.top : null;
            c = d;
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || r;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement :
                c.document.body).clientHeight;
            b = b && qk(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function rw(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return tw(a, c, d)
        }
    }

    function cw(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function vw(a, b, c, d) {
        return kw(new uw(a, b, d, c, null, null, !0))
    }
    var ww = new Zv("s", ""),
        Xv = /[lonvafrbpEe]/g;

    function nw(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function mw(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function gw(a, b, c) {
        null !== b && null !== Xe(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Xe(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var hw = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        iw = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let xw = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        yw = hw;
    for (let a = 0; a < yw.length; a++) xw += ", " + yw[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    yw = iw;
    for (let a = 0; a < yw.length; a++) xw += ", " + yw[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var jw = xw;

    function sw(a) {
        return "string" === typeof a ? Xe(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function zw(a, b, c, d, e, f, g, h, k, l) {
        const m = O();
        if (!a.l || !m) return l.err = "2", Aw(a, l, null), !1;
        if ("no_rsz" === f) return l.err = "7", Aw(a, l, null), !0;
        const n = new qw(a.l);
        if (!n.j) return l.err = "3", Aw(a, l, null), !1;
        var p = n.boundingClientRect ? n.boundingClientRect.right - n.boundingClientRect.left : null;
        null != p && (l.w = p);
        p = n.getHeight();
        null != p && (l.h = p);
        if (rw(n, f, d, k)) {
            var q = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
            p = q ? [a.l] : null;
            q = q || a.l;
            const u = V(vj);
            b = vw(m, q, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                Qb: f,
                Sb: g,
                Pd: h,
                vc: u,
                xc: k
            }, p);
            l.r_cui && Ye(l.r_cui.toString()) && M(q, {
                height: (null === d ? 0 : d - 48) + "px",
                top: "24px"
            });
            null != c && (l.nw = c);
            null != d && (l.nh = d);
            l.rsz = b.toString();
            l.abl = Yv(b);
            l.frsz = ("force" === f).toString();
            l.err = "0";
            Aw(a, l, n);
            Ba(Mi.V().l(), v => Da([248427477, 248427478], v)) && a.j === m && Gv(new Pv(a.j, void 0), q).then(v => {
                mk(8, [v]);
                return v
            }).then(v => {
                P(Q, "resize-ovlp", {
                    adf: a.A,
                    eid: a.F,
                    io: Number(v.isOverlappingOrOutsideViewport),
                    oa: v.overlappedArea.toFixed(2),
                    qid: l.qid || "",
                    slot: a.H,
                    url: a.I,
                    vp: v.viewportSize.width +
                        "x" + v.viewportSize.height
                }, !0, 1, void 0)
            }).catch(v => {
                P(Q, "resize-ovlp-err", {
                    err: v.message
                }, !0, 1, void 0)
            });
            return !0
        }
        l.err = "1";
        Aw(a, l, n);
        return !1
    }

    function Bw(a, b, c) {
        const d = {
            scrl: qi(a.j || O()),
            adk: a.D,
            adf: a.A,
            fmt: a.C
        };
        b && (d.str = tw(b, Xe(c.r_nh), Ye(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        gg(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function Aw(a, b, c) {
        const d = lv(String(b.gen204_fraction));
        b = Bw(a, c, b);
        b.url = a.j.document.URL;
        P(Q, "resize", b, !0, d, void 0)
    }
    class Cw extends xi {
        constructor(a, b, c) {
            super(a);
            this.l = b;
            this.D = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.F = Wj(c);
            this.H = String(c.google_ad_slot || "");
            this.I = String(c.google_page_url || "")
        }
        L(a) {
            a["ablate-me"] = (b, c) => {
                pi(c, this.l.contentWindow) && (P(Q, "lgcabl", {}, !0, void 0, void 0), b = si(b), c = b.clp_btf_only, zw(this, null, null, 0, 0, "animate" === b["collapse-after-close"] ? "animate" : "1" === c ? "safe" : "force", !1, !0, !1, b))
            };
            a["resize-me"] =
                (b, c) => {
                    if (pi(c, this.l.contentWindow)) {
                        b = si(b);
                        var d = b.r_chk;
                        if (null == d || "" === d) {
                            var e = Xe(b.r_nw),
                                f = Xe(b.r_nh),
                                g = Xe(b.r_no);
                            null != g || 0 !== e && 0 !== f || (g = 0);
                            var h = b.r_str;
                            h = h ? h : null;
                            e = zw(this, d, e, f, g, h, Ye(b.r_ao), Ye(b.r_ifr), Ye(b.r_cab), b);
                            d = {
                                msg_type: "resize-result"
                            };
                            d.r_str = h;
                            d.r_status = e;
                            c = c.source;
                            d.googMsgType = "sth";
                            c.postMessage(JSON.stringify(d), "*");
                            this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                        }
                    }
                }
        }
        B() {
            super.B();
            this.l = null
        }
    };
    var Dw = {
        ["google_ad_block"]: "ad_block",
        ["google_ad_client"]: "client",
        ["google_ad_output"]: "output",
        ["google_ad_callback"]: "callback",
        ["google_ad_height"]: "h",
        ["google_ad_resize"]: "twa",
        ["google_ad_slot"]: "slotname",
        ["google_ad_unit_key"]: "adk",
        ["google_ad_dom_fingerprint"]: "adf",
        ["google_placement_id"]: "pi",
        ["google_ad_width"]: "w",
        ["google_captcha_token"]: "captok",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_ctr_threshold"]: "ctr_t",
        ["google_cust_criteria"]: "cust_params",
        ["gfwrnwer"]: "fwrn",
        ["gfwrnher"]: "fwrnh",
        ["google_image_size"]: "image_size",
        ["google_last_modified_time"]: "lmt",
        ["google_loeid"]: "loeid",
        ["google_max_num_ads"]: "num_ads",
        ["google_max_radlink_len"]: "max_radlink_len",
        ["google_mtl"]: "mtl",
        ["google_native_settings_key"]: "nsk",
        ["google_enable_content_recommendations"]: "ecr",
        ["google_num_radlinks"]: "num_radlinks",
        ["google_num_radlinks_per_unit"]: "num_radlinks_per_unit",
        ["google_pucrd"]: "pucrd",
        ["google_reactive_plaf"]: "plaf",
        ["google_reactive_plat"]: "plat",
        ["google_reactive_fba"]: "fba",
        ["google_reactive_sra_channels"]: "plach",
        ["google_responsive_auto_format"]: "rafmt",
        ["armr"]: "armr",
        ["google_rl_dest_url"]: "rl_dest_url",
        ["google_rl_filtering"]: "rl_filtering",
        ["google_rl_mode"]: "rl_mode",
        ["google_rt"]: "rt",
        ["google_video_play_muted"]: "vpmute",
        ["google_source_type"]: "src_type",
        ["google_restrict_data_processing"]: "rdp",
        ["google_tag_for_child_directed_treatment"]: "tfcd",
        ["google_tag_for_under_age_of_consent"]: "tfua",
        ["google_tag_origin"]: "to",
        ["google_ad_semantic_area"]: "sem",
        ["google_tfs"]: "tfs",
        ["google_package"]: "pwprc",
        ["google_tag_partner"]: "tp",
        ["fra"]: "fpla",
        ["google_ml_rank"]: "mlr",
        ["google_apsail"]: "psa",
        ["google_ad_channel"]: "channel",
        ["google_ad_type"]: "ad_type",
        ["google_ad_format"]: "format",
        ["google_color_bg"]: "color_bg",
        ["google_color_border"]: "color_border",
        ["google_color_link"]: "color_link",
        ["google_color_text"]: "color_text",
        ["google_color_url"]: "color_url",
        ["google_page_url"]: "url",
        ["google_allow_expandable_ads"]: "ea",
        ["google_ad_section"]: "region",
        ["google_cpm"]: "cpm",
        ["google_encoding"]: "oe",
        ["google_safe"]: "adsafe",
        ["google_flash_version"]: "flash",
        ["google_font_face"]: "f",
        ["google_font_size"]: "fs",
        ["google_hints"]: "hints",
        ["google_ad_host"]: "host",
        ["google_ad_host_channel"]: "h_ch",
        ["google_ad_host_tier_id"]: "ht_id",
        ["google_kw_type"]: "kw_type",
        ["google_kw"]: "kw",
        ["google_contents"]: "contents",
        ["google_targeting"]: "targeting",
        ["google_adtest"]: "adtest",
        ["google_alternate_color"]: "alt_color",
        ["google_alternate_ad_url"]: "alternate_ad_url",
        ["google_cust_age"]: "cust_age",
        ["google_cust_ch"]: "cust_ch",
        ["google_cust_gender"]: "cust_gender",
        ["google_cust_interests"]: "cust_interests",
        ["google_cust_job"]: "cust_job",
        ["google_cust_l"]: "cust_l",
        ["google_cust_lh"]: "cust_lh",
        ["google_cust_u_url"]: "cust_u_url",
        ["google_cust_id"]: "cust_id",
        ["google_language"]: "hl",
        ["google_city"]: "gcs",
        ["google_country"]: "gl",
        ["google_region"]: "gr",
        ["google_content_recommendation_ad_positions"]: "ad_pos",
        ["google_content_recommendation_columns_num"]: "cr_col",
        ["google_content_recommendation_rows_num"]: "cr_row",
        ["google_content_recommendation_ui_type"]: "crui",
        ["google_content_recommendation_use_square_imgs"]: "cr_sq_img",
        ["google_color_line"]: "color_line",
        ["google_disable_video_autoplay"]: "disable_video_autoplay",
        ["google_full_width_responsive_allowed"]: "fwr",
        ["google_full_width_responsive"]: "fwrattr",
        ["efwr"]: "efwr",
        ["google_pgb_reactive"]: "pra",
        ["google_resizing_allowed"]: "rs",
        ["google_resizing_height"]: "rh",
        ["google_resizing_width"]: "rw",
        ["rpe"]: "rpe",
        ["google_responsive_formats"]: "resp_fmts",
        ["google_safe_for_responsive_override"]: "sfro",
        ["google_video_doc_id"]: "video_doc_id",
        ["google_video_product_type"]: "video_product_type",
        ["google_webgl_support"]: "wgl"
    };
    let Ew = navigator;
    var Fw = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Gw = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Fw(a.toLowerCase())
        };
    const Hw = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Iw = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        Jw = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    const Kw = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const Lw = /^blogger$/,
        Mw = /^wordpress(.|\s|$)/i,
        Nw = /^joomla!/i,
        Ow = /^drupal/i,
        Pw = /\/wp-content\//,
        Qw = /\/wp-content\/plugins\/advanced-ads/,
        Rw = /\/wp-content\/themes\/genesis/,
        Sw = /\/wp-content\/plugins\/genesis/;
    var Tw = a => {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (Qw.test(e)) return 5;
                if (Sw.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), Rw.test(e) || Sw.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (Lw.test(f)) return 1;
                if (Mw.test(f)) return 2;
                if (Nw.test(f)) return 3;
                if (Ow.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), Pw.test(d))) return 2;
        return 0
    };

    function Uw(a) {
        -1 == a.l && (a.l = Aa(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class Vw {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    var Ww = () => {
        const a = new Vw;
        r.SVGElement && r.document.createElementNS && a.set(0);
        const b = df();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        r.crypto && r.crypto.subtle && a.set(3);
        r.TextDecoder && r.TextEncoder && a.set(4);
        return Uw(a)
    };

    function Xw(a, b, c) {
        const d = a.createElement("link");
        try {
            d.rel = "preload", d.href = b instanceof jb ? mb(b).toString() : b instanceof Eb ? Fb(b) : Fb(Lb(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    const Yw = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Zw = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;
    let $w = () => r,
        ax = r;
    const bx = a => {
        a = "https://" + `adservice${a}/adsid/integrator.${"js"}`;
        const b = [`domain=${encodeURIComponent(r.location.hostname)}`];
        Y[3] >= oa() && b.push(`adsid=${encodeURIComponent(Y[1])}`);
        return a + "?" + b.join("&")
    };
    let Y, Z;
    const cx = () => {
        ax = $w();
        Y = ax.googleToken = ax.googleToken || {};
        var a = oa();
        Y[1] && Y[3] > a && 0 < Y[2] || (Y[1] = "", Y[2] = -1, Y[3] = -1, Y[4] = "", Y[6] = "");
        Z = ax.googleIMState = ax.googleIMState || {};
        a = Z[1];
        Yw.test(a) && !Zw.test(a) || (Z[1] = ".google.com");
        Array.isArray(Z[5]) || (Z[5] = []);
        "boolean" !== typeof Z[6] && (Z[6] = !1);
        Array.isArray(Z[7]) || (Z[7] = []);
        "number" !== typeof Z[8] && (Z[8] = 0)
    };
    var dx = a => {
        cx();
        Yw.test(a) && !Zw.test(a) && (Z[1] = a)
    };
    const ex = {
            Db: () => 0 < Z[8],
            Ld: () => {
                Z[8]++
            },
            Md: () => {
                0 < Z[8] && Z[8]--
            },
            Nd: () => {
                Z[8] = 0
            },
            yh: () => !1,
            ac: () => Z[5],
            Ub: a => {
                try {
                    a()
                } catch (b) {
                    r.setTimeout(() => {
                        throw b;
                    }, 0)
                }
            },
            sc: () => {
                if (!ex.Db()) {
                    var a = r.document,
                        b = e => {
                            e = bx(e);
                            a: {
                                try {
                                    var f = xc(void 0);
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Xw(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = () => r.processGoogleToken({}, 2);
                            e = Sf(e);
                            wc(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), ex.Ld()
                            } catch (g) {}
                        },
                        c = Z[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    var d = {
                        ["newToken"]: "FBT"
                    };
                    r.setTimeout(() => r.processGoogleToken(d, 1), 1E3)
                }
            }
        },
        fx = a => {
            cx();
            const b = ax.googleToken[5] || 0;
            a && (0 != b || Y[3] >= oa() ? ex.Ub(a) : (ex.ac().push(a), ex.sc()));
            Y[3] >= oa() && Y[2] >= oa() || ex.sc()
        };
    var hx = a => {
        r.processGoogleToken = r.processGoogleToken || ((b, c) => gx(b, c));
        fx(a)
    };
    const gx = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        cx();
        1 == b ? ex.Nd() : ex.Md();
        var h = ax.googleToken = ax.googleToken || {},
            k = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !ex.Db() && (!(Y[3] >= oa()) || "NT" == Y[1]);
        var l = !(Y[3] >= oa()) && 0 != b;
        if (k || d || l) d = oa(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && vf(r, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, cx();
        if (k || !ex.Db()) {
            b = ex.ac();
            for (c = 0; c < b.length; c++) ex.Ub(b[c]);
            b.length = 0
        }
    };
    const ix = /[+, ]/;
    var lx = (a, b, c) => {
            const d = a.G;
            var e = O().document,
                f = {},
                g = O(),
                h;
            var k = Gk(O(), !1).$;
            var l = Kk(k);
            var m = h = Ik(O(), e, d.google_ad_width, d.google_ad_height);
            l = l.kb;
            var n = O();
            n = n.top == n ? 0 : Fe(n.top) ? 1 : 2;
            let p = 4;
            m || 1 != n ? m || 2 != n ? m && 1 == n ? p = 7 : m && 2 == n && (p = 8) : p = 6 : p = 5;
            l && (p |= 16);
            m = "" + p;
            l = Lk();
            n = !!d.google_page_url;
            f.google_iframing = m;
            0 != l && (f.google_iframing_environment = l);
            if (!n && "ad.yieldmanager.com" == e.domain) {
                for (m = e.URL.substring(e.URL.lastIndexOf("http")); - 1 < m.indexOf("%");) try {
                    m = decodeURIComponent(m)
                } catch (u) {
                    break
                }
                d.google_page_url = m;
                n = !!m
            }
            n ? (f.google_page_url = d.google_page_url, f.google_page_location = (h ? e.referrer : e.URL) || "EMPTY") : (h && Fe(g.top) && e.referrer && g.top.document.referrer === e.referrer ? f.google_page_url = g.top.document.URL : f.google_page_url = h ? e.referrer : e.URL, f.google_page_location = null);
            if (e.URL === f.google_page_url) try {
                var q = Math.round(Date.parse(e.lastModified) / 1E3) || null
            } catch (u) {
                q = null
            } else q = null;
            f.google_last_modified_time = q;
            e = k == k.top ? k.document.referrer : (e = Hf()) && e.referrer || "";
            f.google_referrer_url = e;
            Jk(f, d);
            f =
                d.google_page_location || d.google_page_url;
            "EMPTY" == f && (f = d.google_page_url);
            f ? (f = f.toString(), 0 == f.indexOf("http://") ? f = f.substring(7, f.length) : 0 == f.indexOf("https://") && (f = f.substring(8, f.length)), e = f.indexOf("/"), -1 == e && (e = f.length), f = f.substring(0, e).split("."), e = !1, 3 <= f.length && (e = f[f.length - 3] in Kw), 2 <= f.length && (e = e || f[f.length - 2] in Kw), f = e) : f = !1;
            f = f ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
            b = jx(a, c, b);
            c = a.G;
            e = c.google_ad_channel;
            g = "/pagead/ads?";
            "ca-pub-6219811747049371" ===
            c.google_ad_client && kx.test(e) && (g = "/pagead/lopri?");
            c = dr(f, g);
            a = id(a.A, 9) && d.google_debug_params ? d.google_debug_params : "";
            a = lg(b, c + a);
            return d.google_ad_url = a
        },
        mx = a => encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + kg({
            ["adk"]: a.google_ad_unit_key,
            ["client"]: a.google_ad_client,
            ["fa"]: a.google_reactive_ad_format
        }),
        nx = a => {
            try {
                if (a.parentNode) return a.parentNode
            } catch (c) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    const c = te(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && Fe(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b =
                null
            }
            else b = null;
            return b
        },
        ox = (a, b) => {
            b.eid = Wj(a.pubWin);
            const c = a.G.google_loeid;
            "string" === typeof c && (a.l |= 4096, b.loeid = c)
        },
        px = (a, b) => {
            a = (a = yg(a.pubWin)) && a.document ? ak(a.document, a) : new me(-12245933, -12245933);
            b.scr_x = Math.round(a.x);
            b.scr_y = Math.round(a.y)
        };
    const qx = a => {
        try {
            const b = r.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    };
    var rx = a => {
        const b = Mg();
        b && (a.debug_experiment_id = b);
        a.creatives = qx(/\b(?:creatives)=([\d,]+)/);
        a.adgroups = qx(/\b(?:adgroups)=([\d,]+)/);
        a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
    };

    function sx(a, b, c, d) {
        const e = a.G;
        var f = a.pubWin,
            g = a.j,
            h = Hk();
        c.ref = e.google_referrer_url;
        c.loc = e.google_page_location;
        var k;
        (k = Hf(f)) && ea(k.data) && "string" === typeof k.data.type ? (k = k.data.type.toLowerCase(), k = "doubleclick" == k || "adsense" == k ? null : k) : k = null;
        k && (c.apn = k.substr(0, 10));
        h = 0 < Sj(Si) && a.Ca ? {
            url: a.Ca,
            kb: !0
        } : Kk(h);
        c.url || c.loc || !h.url || (c.url = h.url, h.kb || (c.usrc = 1));
        k = e.google_trust_token_additional_signing_data || {};
        k.url = c.url;
        e.google_trust_token_additional_signing_data = k;
        h.url != (c.loc || c.url) &&
            (c.top = h.url);
        Lu && Gu(Lu) ? h = Lu : (h = Hk(), k = h.google_jobrunner, h = Hu(k) ? Lu = k : h.google_jobrunner = Lu = new Ju(h));
        (h = hg(h.tc) ? h.tc() : null) && (c.jtc = h);
        0 <= a.H && (c.eae = a.H);
        d = g ? Qu(d, g) : null;
        (d = sr(e, g, d)) && (c.fc = d);
        if (!xg(e)) {
            d = a.pubWin.document;
            h = "";
            if (d.documentMode && (k = Ce(new pe(d), "IFRAME"), k.frameBorder = "0", k.style.height = 0, k.style.width = 0, k.style.position = "absolute", d.body)) {
                d.body.appendChild(k);
                try {
                    var l = k.contentWindow.document;
                    l.open();
                    l.write(jc(sc));
                    l.close();
                    h += l.documentMode
                } catch (W) {}
                d.body.removeChild(k)
            }
            c.docm =
                h
        }
        let m, n, p, q, u, v, A, E, G, I;
        try {
            m = f.screenX, n = f.screenY
        } catch (W) {}
        try {
            p = f.outerWidth, q = f.outerHeight
        } catch (W) {}
        try {
            u = f.innerWidth, v = f.innerHeight
        } catch (W) {}
        try {
            A = f.screenLeft, E = f.screenTop
        } catch (W) {}
        try {
            u = f.innerWidth, v = f.innerHeight
        } catch (W) {}
        try {
            G = f.screen.availWidth, I = f.screen.availTop
        } catch (W) {}
        c.brdim = [A, E, m, n, G, I, p, q, u, v].join();
        l = 0;
        void 0 === r.postMessage && (l |= 1);
        0 < l && (c.osd = l);
        c.vis = qk(f.document);
        b && (b = Nk(e) ? ww : kw(new uw(f, b, null, {
                width: 0,
                height: 0
            }, e.google_ad_width, e.google_ad_height, !1)),
            c.rsz = b.toString(), c.abl = Yv(b));
        if (!Nk(e) && (b = zg(e))) {
            f = 0;
            a: {
                try {
                    {
                        var B = e.google_async_iframe_id;
                        const W = O().document;
                        if (B) var D = W.getElementById(B);
                        else {
                            var da = W.getElementsByTagName("script"),
                                cb = da[da.length - 1];
                            D = cb && cb.parentNode || null
                        }
                    }
                    if (B = D) {
                        D = [];
                        da = 0;
                        for (var xa = Date.now(); 100 >= ++da && 50 > Date.now() - xa && (B = nx(B));) 1 === B.nodeType && D.push(B);
                        var T = D;
                        b: {
                            for (xa = 0; xa < T.length; xa++) {
                                c: {
                                    var ia = T[xa];
                                    try {
                                        if (ia.parentNode && 0 < ia.offsetWidth && 0 < ia.offsetHeight && ia.style && "none" !== ia.style.display && "hidden" !==
                                            ia.style.visibility && (!ia.style.opacity || 0 !== Number(ia.style.opacity))) {
                                            const W = ia.getBoundingClientRect();
                                            var Ge = 0 < W.right && 0 < W.bottom;
                                            break c
                                        }
                                    } catch (W) {}
                                    Ge = !1
                                }
                                if (!Ge) {
                                    var He = !1;
                                    break b
                                }
                            }
                            He = !0
                        }
                        if (He) {
                            b: {
                                const W = Date.now();He = /^html|body$/i;Ge = /^fixed/i;
                                for (ia = 0; ia < T.length && 50 > Date.now() - W; ia++) {
                                    const Ie = T[ia];
                                    if (!He.test(Ie.tagName) && Ge.test(Ie.style.position || Yf(Ie, "position"))) {
                                        var ud = Ie;
                                        break b
                                    }
                                }
                                ud = null
                            }
                            break a
                        }
                    }
                } catch (W) {}
                ud = null
            }
            ud && ud.offsetWidth * ud.offsetHeight <= 4 * b.width * b.height && (f = 1);
            c.pfx = f
        }
        a: {
            if (.05 > Math.random() && g) try {
                const W = g.document.getElementsByTagName("head")[0];
                var sn = W ? Tw(W) : 0;
                break a
            } catch (W) {}
            sn = 0
        }
        g = sn;
        0 !== g && (c.cms = g);
        e.google_lrv !== H(a.A, 2) && (c.alvm = e.google_lrv || "none")
    }
    var tx = (a, b) => {
            let c = 0;
            a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Je(() => {
                c++;
                return !1
            }, !0, !0, a);
            c && (b.nhd = c)
        },
        ux = (a, b) => {
            const c = X(b, 8, {});
            b = X(b, 9, {});
            const d = a.google_ad_section,
                e = a.google_ad_format;
            a = a.google_ad_slot;
            e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
        },
        vx = (a, b, c) => {
            const d = a.G;
            var e = a.G;
            b.dt = Ou;
            e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
            e = O();
            a: {
                var f = O();
                try {
                    var g = f.performance;
                    if (g && g.timing && g.now) {
                        var h = g.timing.navigationStart +
                            Math.round(g.now()) - g.timing.domLoading;
                        break a
                    }
                } catch (D) {}
                h = null
            }(e = h ? hv(h, e.Date.now() - Ou, 1E6) : null) && (b.bdt = e);
            b.idt = hv(a.N, Ou);
            e = a.G;
            b.shv = H(a.A, 2);
            b.cbv = H(a.A, 3);
            "sa" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
            /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
            if (e = Hf(a.pubWin)) {
                b.is_amp = 1;
                h = e || Hf();
                b.amp_v = h && h.mode ? +h.mode.version || null : null;
                if ((e = e || Hf()) && e.container) {
                    e = e.container.split(",");
                    h = [];
                    for (g = 0; g < e.length; g++) h.push(Gf[e[g]] || "x");
                    e =
                        h.join()
                } else e = null;
                e && (b.act = e)
            }
            O() == window.top && (b.abxe = 1);
            if ("_gfp_a_" in a.pubWin) {
                e = a.pubWin._gfp_a_;
                if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
                e && (e = Uu(new Vu(a.pubWin), c)) && (b.cookie = e)
            }
            e = qu();
            g = X(e, 8, {});
            h = d.google_ad_section;
            g[h] && (b.prev_fmts = g[h]);
            g = X(e, 9, {});
            g[h] && (b.prev_slotnames = g[h].toLowerCase());
            ux(d, e);
            h = X(e, 15, 0);
            0 < h && (b.nras = String(h));
            b.correlator = X(e, 7, pu());
            V(Bj) && (b.rume = 1);
            if (d.google_ad_channel) {
                h = X(e, 10, {});
                g = "";
                f = d.google_ad_channel.split(ix);
                for (var k = 0; k < f.length; k++) {
                    var l = f[k];
                    h[l] ? g += l + "+" : h[l] = !0
                }
                b.pv_ch = g
            }
            if (d.google_ad_host_channel) {
                g = X(e, 11, []);
                f = d.google_ad_host_channel.split("|");
                e = -1;
                h = [];
                for (k = 0; k < f.length; k++) {
                    l = f[k].split(ix);
                    g[k] || (g[k] = {});
                    var m = "";
                    for (var n = 0; n < l.length; n++) {
                        var p = l[n];
                        "" !== p && (g[k][p] ? m += "+" + p : g[k][p] = !0)
                    }
                    m = m.slice(1);
                    h[k] = m;
                    "" !== m && (e = k)
                }
                g = "";
                if (-1 < e) {
                    for (f = 0; f < e; f++) g += h[f] + "|";
                    g += h[e]
                }
                b.pv_h_ch = g
            }
            b.frm = d.google_iframing;
            b.ife = d.google_iframing_environment;
            e = d.google_ad_client;
            try {
                var q = Hk(),
                    u = q.google_prev_clients;
                u || (u = q.google_prev_clients = {});
                if (e in u) var v = 1;
                else u[e] = !0, v = 2
            } catch (D) {
                v = 0
            }
            b.pv = v;
            q = a.pubWin.document;
            v = a.G;
            e = Su(c, a.pubWin) || "";
            c = q.domain;
            f = a.pubWin.screen;
            k = q.referrer;
            m = ng();
            if (Hf()) var A = O().gaGlobal || {};
            else {
                h = Math.round((new Date).getTime() / 1E3);
                g = v.google_analytics_domain_name;
                c = "undefined" == typeof g ? Gw("auto", c) : Gw(g, c);
                n = -1 < e.indexOf("__utma=" + c + ".");
                l = -1 < e.indexOf("__utmb=" + c);
                (q = (Kf() || O()).gaGlobal) || (q = {}, (Kf() || O()).gaGlobal = q);
                u = !1;
                if (n) {
                    var E = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                    l ? q.sid = E[3] : q.sid || (q.sid = h + "");
                    q.vid = E[0] + "." + E[1];
                    q.from_cookie = !0
                } else {
                    q.sid || (q.sid = h + "");
                    if (!q.vid) {
                        u = !0;
                        l = Math.round(2147483647 * Math.random());
                        n = Ew.appName;
                        p = Ew.version;
                        var G = Ew.language ? Ew.language : Ew.browserLanguage,
                            I = Ew.platform,
                            B = Ew.userAgent;
                        try {
                            E = Ew.javaEnabled()
                        } catch (D) {
                            E = !1
                        }
                        E = [n, p, G, I, B, E ? 1 : 0].join("");
                        f ? E += f.width + "x" + f.height + f.colorDepth : r.java && r.java.awt && (f = r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), E += f.screen.width + "x" + f.screen.height);
                        E = E + e + (k || "");
                        for (f = E.length; 0 <
                            m;) E += m-- ^ f++;
                        q.vid = (l ^ Fw(E) & 2147483647) + "." + h
                    }
                    q.from_cookie = !1
                }
                if (!q.cid) {
                    b: for (h = g, E = 999, h && (h = 0 == h.indexOf(".") ? h.substr(1) : h, E = h.split(".").length), h = 999, e = e.split(";"), g = 0; g < e.length; g++)
                        if (f = Hw.exec(e[g]) || Iw.exec(e[g]) || Jw.exec(e[g])) {
                            k = f[1] || 0;
                            if (k == E) {
                                A = f[2];
                                break b
                            }
                            k < h && (h = k, A = f[2])
                        }u && A && -1 != A.search(/^\d+\.\d+$/) ? (q.vid = A, q.from_cookie = !0) : A != q.vid && (q.cid = A)
                }
                q.dh = c;
                q.hid || (q.hid = Math.round(2147483647 * Math.random()));
                A = q
            }
            b.ga_vid = A.vid;
            b.ga_sid = A.sid;
            b.ga_hid = A.hid;
            b.ga_fc = A.from_cookie;
            b.ga_cid = A.cid;
            b.ga_wpids = v.google_analytics_uacct;
            tx(a.pubWin, b);
            (a = d.google_ad_layout) && 0 <= ou[a] && (b.rplot = ou[a])
        };
    const wx = (a, b) => {
        a = a.J;
        var c;
        (c = null == a ? 0 : F(a, 6)) || (c = qu(), c = X(c, 26, void 0));
        c && (b.npa = 1);
        a && (C(a, 3) && (b.gdpr = F(a, 3) ? "1" : "0"), (c = y(a, 1)) && (b.us_privacy = c), (c = y(a, 2)) && (b.gdpr_consent = c), (c = y(a, 4)) && (b.addtl_consent = c), (a = y(a, 7)) && (b.tcfe = a))
    };
    var xx = (a, b) => {
            const c = a.G;
            wx(a, b);
            gg(Dw, (d, e) => {
                b[d] = c[e]
            });
            Nk(c) && (a = Mk(c), b.fa = a);
            b.pi || null == c.google_ad_slot || (a = $n(c), null != a.j && (a = Wl(a.j.value), b.pi = a))
        },
        yx = (a, b) => {
            var c = Jf() || ck(a.pubWin.top);
            c && (b.biw = c.width, b.bih = c.height);
            c = a.pubWin;
            c.top != c && (a = ck(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
        },
        zx = (a, b) => {
            var c = a.pubWin;
            null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = ck(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Se(a.join(""))) : a = 0;
            0 !== a && (b.ifk = a)
        },
        Ax = (a, b) => {
            (a = wu()[a.G.google_ad_client]) && (b.psts = a.join())
        },
        Bx = (a, b, c) => {
            a = Qu(c, a.pubWin);
            a = Ue(a, "goog_pem_mod");
            b.pem = a
        },
        Cx = (a, b) => {
            (a = a.pubWin.google_user_agent_client_hint) && (b.uach = ad(a))
        },
        Dx = (a, b) => {
            (a = a.pubWin.google_trust_token_operation_status) && 0 < a.length && (b.tt_state = ad(JSON.stringify(a)))
        },
        Ex = (a, b) => {
            if (a = a.pubWin.google_floc) b.floc_id = a.id, b.floc_ver = a.version
        },
        Fx = (a, b) => {
            try {
                const d = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
                if (d) {
                    var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
                    0 <= c && (b.wsm = c + 1)
                }
            } catch (d) {}
        },
        jx = (a, b, c) => {
            const d = {};
            xx(a, d);
            cx();
            d.adsid = Y[1];
            cx();
            d.pucrd = Y[6];
            Cx(a, d);
            Dx(a, d);
            Ex(a, d);
            vx(a, d, c);
            qg(d);
            b && hh(889, () => {
                if (V(xj) && null == a.j) d.adx = -12245933, d.ady = -12245933;
                else {
                    var e = dk(a.j, b);
                    d.adx && -12245933 != d.adx && d.ady && -12245933 != d.ady || (d.adx = Math.round(e.x), d.ady = Math.round(e.y));
                    bk(b) || (d.adx = -12245933, d.ady = -12245933, a.l |= 32768)
                }
            });
            yx(a, d);
            zx(a, d);
            px(a, d);
            ox(a, d);
            a.I && (d.oid = a.I);
            Ax(a, d);
            d.pvsid =
                qf(a.pubWin, dh);
            Bx(a, d, c);
            Fx(a, d);
            a.K && (d.scar = a.K);
            sx(a, b, d, c);
            d.fu = a.l;
            d.bc = Ww();
            cx();
            d.jar = Y[4];
            id(a.A, 9) && rx(d);
            kk() && (d.atl = !0);
            d.rc = a.G.rss;
            return d
        };
    const kx = /YtLoPri/;
    var Gx = class extends w {
        constructor() {
            super();
            x(this, void 0, null, null)
        }
    };
    class Hx {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };
    Va(ip);
    Va(jp);
    var Ix = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Jx = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        },
        Kx = class extends w {
            constructor(a) {
                super();
                x(this, a, null, null)
            }
        };
    const Lx = a => {
            a = (a = (new Pu(a)).get("FCCDCF", "")) ? a : null;
            try {
                return a ? od(Ix, a) : null
            } catch (b) {
                return null
            }
        },
        Mx = a => (a = Lx(a)) ? J(a, Jx, 4) : null;

    function Nx(a) {
        a.__uspapi || a.frames.__uspapiLocator || (a = new Ox(a), Px(a))
    }

    function Px(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", kp(a.j, "__uspapiLocator"), pa("__uspapi", (...b) => Qx(a, ...b)))
    }

    function Qx(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }
    class Ox {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = Lx(this.l)) ? J(a, Kx, 5) || null : null) ? y(a, 2) : null;
            (a = Mx(this.l)) && C(a, 1) && y(a, 1);
            (a = Mx(this.l)) && C(a, 2) && y(a, 2)
        }
    };

    function Rx(a, b, c, d) {
        var e, f, g, h, k, l, m;
        const n = new bq;
        let p = "";
        const q = u => {
            try {
                const v = "object" === typeof u.data ? u.data : JSON.parse(u.data);
                p === v.paw_id && (Ld(a, "message", q), n.j(d(v)))
            } catch (v) {}
        };
        return "function" === typeof(null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (L(a, "message", q), p = c(a.gmaSdk), n.promise) : "function" === typeof(null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || "function" ===
            typeof(null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (p = String(Math.floor(2147483647 * Pe(a))), L(a, "message", q), b(a.webkit.messageHandlers, p), n.promise) : null
    }

    function Sx(a) {
        return Rx(a, (b, c) => {
            var d;
            return void(null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function Tx(a) {
        if (a.j) return a.j;
        a.j = ff(a.l, "__uspapiLocator");
        return a.j
    }

    function Ux(a) {
        var b;
        return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != Tx(a)
    }

    function Vx(a, b) {
        var c, d;
        if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi))(null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)("getUSPData", 1, b);
        else if (Tx(a)) {
            Wx(a);
            const e = ++a.D;
            a.C[e] = b;
            a.j && a.j.postMessage({
                ["__uspapiCall"]: {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                }
            }, "*")
        }
    }

    function Xx(a, b) {
        let c = {};
        if (Ux(a)) {
            var d = Pa(() => b(c));
            Vx(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function Wx(a) {
        a.A || (a.A = b => {
            var c;
            try {
                let e = {};
                "string" === typeof b.data ? e = JSON.parse(b.data) : e = b.data;
                var d = e.__uspapiReturn;
                null === (c = a.C) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, L(a.l, "message", a.A))
    }
    var Yx = class extends ui {
        constructor(a) {
            super();
            this.l = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.A = null
        }
        B() {
            this.C = {};
            this.A && (Ld(this.l, "message", this.A), delete this.A);
            delete this.C;
            delete this.l;
            delete this.j;
            super.B()
        }
    };
    var Zx = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var ay = class extends w {
            constructor(a) {
                super();
                x(this, a, $x, null)
            }
        },
        $x = [1, 2];
    var by = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };
    var cy = class extends w {
        constructor(a) {
            super();
            x(this, a, null, null)
        }
    };

    function dy(a) {
        a.A || (a.A = b => {
            try {
                const c = od(cy, b.data.__fciReturn);
                (0, a.C[y(c, 1)])(c)
            } catch (c) {}
        }, L(a.j, "message", a.A))
    }

    function ey(a, b, c) {
        if (a.l)
            if (a.l === a.j) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, d => {
                c(od(cy, d))
            });
            else {
                dy(a);
                const d = a.D++;
                a.C[d] = c;
                a.l.postMessage({
                    ["__fciCall"]: {
                        command: b,
                        callId: d
                    }
                }, "*")
            }
    }

    function fy(a, b) {
        return new Promise(c => {
            ey(a, b, c)
        })
    }
    var gy = class extends ui {
            constructor(a) {
                super();
                this.j = a;
                this.A = this.l = null;
                this.C = {};
                this.D = 0;
                this.l || (this.j.googlefc ? this.l = this.j : this.l = ff(this.j, "googlefcPresent"))
            }
        },
        hy = (a, b, c, d) => {
            if (!b) return Promise.resolve(null);
            const e = J(b, Zx, 3);
            b = J(b, by, 2);
            return e && b && 1 === y(b, 1) && 2 === y(e, 1) ? fy(a, "getM25Consent").then(f => {
                var g = J(f, ay, 4);
                if (g) {
                    if (f = d, c) {
                        const h = y(g, 1);
                        h && h.includes(c) && (f = !1);
                        (g = y(g, 2)) && g.includes(c) && (f = !0)
                    }
                } else f = null;
                return f
            }) : Promise.resolve(null)
        };
    const iy = (a, b) => {
        try {
            var c = Td(hd(b, 2, 0)),
                d = H(b, 3);
            a: switch (hd(b, 4, 0)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Vd(c, d, e),
                g = H(b, 1);
            f.Ga = g;
            f.$ = a;
            Pd(new Ud(f))
        } catch (h) {}
    };

    function jy(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? iy(a, b) : L(a, "load", () => void iy(a, b)))
    };

    function ky(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function ly(a) {
        const b = /^https?:\/\/[^/#?]+\/?$/;
        return !!a && !b.test(a)
    }

    function my(a) {
        if (a === a.top || Fe(a.top)) return Promise.resolve({
            status: 4
        });
        const b = ky(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && ly(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new bq;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.j({
                Ca: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var Sh = (function(a) {
        Mf(a, !1, "safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;");
        var b;
        a = a[0];
        var c = null === (b = wd()) || void 0 === b ? void 0 : b.createScript(a);
        return new yd(null !== c && void 0 !== c ? c : a)
    })
    `onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)`;
    var oy = async (a, b, c) => {
            const d = c.vars,
                e = new Uh(yg(c.pubWin), c.pubWin, d, a, b);
            e.N = Date.now();
            mk(1, [e.G]);
            e.C || ih("noins", {
                info: d.dninfo,
                ifmid: d.google_async_iframe_id
            });
            try {
                await ny(e)
            } catch (f) {
                if (!dh.ca(159, f, void 0, void 0)) throw f;
            }
            hh(639, () => {
                {
                    var f = e.G;
                    const h = e.j;
                    if (h && 1 === f.google_responsive_auto_format && !0 === f.google_full_width_responsive_allowed) {
                        var g;
                        (g = (g = h.document.getElementById(f.google_async_iframe_id)) ? Ae(g, "INS", "adsbygoogle") : null) ? (f = new Fu(h, g, f), f.l = r.setInterval(ma(f.F, f), 500),
                            f.F(), f = !0) : f = !1
                    } else f = !1
                }
                return f
            });
            hh(160, () => {
                const f = Hk().google_jobrunner;
                Hu(f) && f.rl()
            });
            V(gj) && hh(898, () => {
                a: {
                    var f = c.pubWin.top;
                    try {
                        if (!f.document.body) {
                            var g = void 0;
                            break a
                        }
                    } catch (p) {
                        g = void 0;
                        break a
                    }
                    g = c.vars.google_ad_client;
                    var h, k, l = null === (k = null === (h = f.location) || void 0 === h ? void 0 : h.hash) || void 0 === k ? void 0 : k.match(/\bgoog_cpmi=([^&]*)/);
                    if (l) {
                        h = decodeURIComponent(l[1]);
                        try {
                            var m = new de(JSON.parse(h))
                        } catch (p) {
                            m = null
                        }
                    } else m = null;
                    if (m = m || J(a, de, 11))
                        if (h = f.document.body, !h.hasAttribute("data-google-affiliate-annotated")) {
                            h.setAttribute("data-google-affiliate-annotated",
                                "1");
                            h = f.localStorage;
                            k = Ue(h, "google_experiment_mod55");
                            if (null === k) {
                                k = Oe() ? null : Math.floor(1E3 * Pe(f));
                                if (l = null != k && h) b: {
                                    var n = String(k);
                                    try {
                                        if (h) {
                                            h.setItem("google_experiment_mod55", n);
                                            l = n;
                                            break b
                                        }
                                    } catch (p) {}
                                    l = null
                                }
                                h = l ? k : null
                            } else h = k;
                            h = null === h ? null : Se(`${f.location.host}#${h}`) % 20;
                            null !== h && (l = f.performance.now(), k = new nh, n = lh(f.document.body.innerText), k.A = n, n >= hd(m, 4, 0) && kh(f, f.document.body, m, g, h, new jh, k), f = f.performance.now() - l, m = H(m, 1), P(Q, "adfil-imp", {
                                wp: g,
                                c: h,
                                e: m,
                                n: k.l,
                                t: k.j.size,
                                w: k.A,
                                x: Math.round(f)
                            }, !0, 1, void 0))
                        }
                    g = void 0
                }
                return g
            })
        },
        ny = a => {
            if (/_sdo/.test(a.G.google_ad_format)) return Promise.resolve();
            var b = qu(),
                c = X(b, 22, !1);
            c || (b.S[tu(22)] = !0);
            c || (Mi.V().j(13), Mi.V().j(11), b = ae(a.G), (c = H(a.A, 10)) && b.push(c));
            b = qu();
            (c = X(b, 23, !1)) || (b.S[tu(23)] = !0);
            if (!c) {
                c = J(a.A, Oh, 5) || new Oh;
                b = id(a.A, 6);
                b = new Hx(a.pubWin, a.G.google_ad_client, c, b);
                c = V(tj);
                b.l = c;
                const e = J(b.C, Nh, 1);
                if (b.l) {
                    c = b.j;
                    if (b.B && !cp(e)) {
                        var d = new Gx;
                        d = z(d, 1, 1)
                    } else d = null;
                    if (d) {
                        d = d.F();
                        try {
                            c.localStorage.setItem("google_auto_fc_cmp_setting",
                                d)
                        } catch (f) {}
                    }
                }
                e && dp(new ep(b.j, new wp(b.j, b.A), e, new Ko(b.j)))
            }
            b = !Hf() && !ac();
            return !b || b && !py(a) ? qy(a) : Promise.resolve()
        };
    const ry = (a, b, c) => {
        c = void 0 === c ? !1 : c;
        b = dk(a.j, b);
        const d = Jf() || ck(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = ak(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    };

    function py(a) {
        return sy(a) || ty(a)
    }

    function sy(a) {
        const b = a.G;
        if (!b.google_pause_ad_requests) return !1;
        const c = r.setTimeout(() => {
                P(Q, "abg:cmppar", {
                    client: a.G.google_ad_client,
                    url: a.G.google_page_url
                }, !0, void 0, void 0)
            }, 1E4),
            d = R(450, () => {
                b.google_pause_ad_requests = !1;
                r.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                py(a) || qy(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function ty(a) {
        const b = a.pubWin.document,
            c = uy();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.C,
            e = rk(b);
        if (!d || !e) return !1;
        if (!sk(b)) return vy(a, c.visible, d);
        const f = 3 === qk(b);
        if (ry(a, d) <= c.hidden && !f) return !1;
        let g = R(332, () => {
            !sk(b) && g && (Ld(b, e, g), vy(a, c.visible, d) || qy(a), g = null)
        });
        return L(b, e, g)
    }
    async function wy() {
        if (!bc() && !t("Edge")) {
            var a = Sj(dj),
                b = Sj(Aj);
            if (!(0 >= b)) {
                var c = Rh(),
                    d = new Worker(Fd(c), void 0);
                c = new Promise(f => {
                    d.addEventListener("message", g => {
                        0 <= g.data ? f() : d.postMessage({
                            a
                        })
                    })
                });
                var e = performance.now();
                await Promise.race([c, uf(b, "timeout")]).then(f => {
                    "timeout" === f ? P(Q, "adsense_td_worker_timeout", {
                        wait_ms: a,
                        timeout_ms: b
                    }, !0, void 0, void 0) : P(Q, "adsense_td_worker_time", {
                        wait_ms: Math.round(performance.now() - e),
                        timeout_ms: b
                    }, !0, void 0, void 0)
                })
            }
        }
    }

    function uy() {
        const a = {
            hidden: 0,
            visible: Sj(kj) || 4
        };
        if (!r.IntersectionObserver || V(ej)) a.visible = -1;
        if (De()) {
            const b = Sj(jj) || 1;
            a.visible *= b
        }
        return a
    }

    function vy(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.G;
        if (!ni(d.google_reactive_ad_format) && (Nk(d) || d.google_reactive_ads_config) || !bk(c) || ry(a, c) <= b) return !1;
        var e = qu();
        const f = X(e, 8, {});
        e = X(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        a.L = new r.IntersectionObserver((h, k) => {
            wa(h, l => {
                0 >= l.intersectionRatio || (k.unobserve(l.target), hh(294, () => {
                    qy(a)
                }))
            })
        }, {
            rootMargin: 100 * b + "%"
        });
        a.L.observe(c);
        return !0
    }
    var qy = async a => {
            hh(326, () => {
                if (1 === pg(a.G)) {
                    var c = V(Pj),
                        d = c || V(Nj),
                        e = O();
                    if (d && e === e.top) {
                        var f = new gk;
                        d = new hk;
                        var g = qf(a.pubWin);
                        kd(f, 1, g, 0);
                        g = Wj(a.pubWin);
                        kd(f, 5, g, "");
                        jd(f, 2);
                        ld(d, 1, f);
                        f = new fk;
                        f = kd(f, 10, !0, !1);
                        g = V(Gj);
                        f = kd(f, 8, g, !1);
                        g = V(Hj);
                        f = kd(f, 9, g, !1);
                        g = V(Lj);
                        f = kd(f, 7, g, !1);
                        g = V(Kj);
                        f = kd(f, 13, g, !1);
                        g = V(Mj);
                        f = kd(f, 14, g, !1);
                        ld(d, 2, f);
                        e.google_rum_config = md(d);
                        c = id(a.A, 9) && c ? a.F.Jd : a.F.Kd;
                        Le(e.document, nb(Fd(c).toString()))
                    } else Ug(ch)
                }
            });
            try {
                await xy(a)
            } catch (c) {
                dh.ca(827, c, void 0, void 0)
            }
            a.G.google_ad_channel =
                yy(a, a.G.google_ad_channel);
            a.G.google_tag_partner = zy(a, a.G.google_tag_partner);
            Ay(a);
            const b = a.G.google_start_time;
            "number" === typeof b && (Ou = b, a.G.google_start_time = null);
            hh(161, () => {
                const c = a.G;
                null == c.google_ad_output && (c.google_ad_output = "html");
                if (null != c.google_ad_client) {
                    var d;
                    (d = String(c.google_ad_client)) ? (d = d.toLowerCase()) && "ca-" != d.substring(0, 3) && (d = "ca-" + d): d = "";
                    c.google_ad_client = d
                }
                null != c.google_ad_slot && (c.google_ad_slot = String(c.google_ad_slot));
                if (null == c.google_flash_version) {
                    try {
                        var e =
                            wg()
                    } catch (f) {
                        e = "0"
                    }
                    c.google_flash_version = e
                }
                c.google_webgl_support = !!N.WebGLRenderingContext;
                c.google_ad_section = c.google_ad_section || c.google_ad_region || "";
                c.google_country = c.google_country || c.google_gl || "";
                e = (new Date).getTime();
                Array.isArray(c.google_color_bg) && (c.google_color_bg = Vh(a, c.google_color_bg, e));
                Array.isArray(c.google_color_text) && (c.google_color_text = Vh(a, c.google_color_text, e));
                Array.isArray(c.google_color_link) && (c.google_color_link = Vh(a, c.google_color_link, e));
                Array.isArray(c.google_color_url) &&
                    (c.google_color_url = Vh(a, c.google_color_url, e));
                Array.isArray(c.google_color_border) && (c.google_color_border = Vh(a, c.google_color_border, e));
                Array.isArray(c.google_color_line) && (c.google_color_line = Vh(a, c.google_color_line, e))
            });
            By(a);
            Nk(a.G) && (wh() && (a.G.google_adtest = a.G.google_adtest || "on"), a.G.google_pgb_reactive = a.G.google_pgb_reactive || 3);
            Cy(a.j);
            return Dy(a)
        },
        By = a => {
            a.j && (qr(a), or(a.j.location) && zr(a.j, {
                enable_page_level_ads: {
                    ["pltais"]: !0
                },
                google_ad_client: a.G.google_ad_client
            }))
        },
        yy = (a, b) =>
        (b ? [b] : []).concat($d(a.G).ad_channels || []).join("+"),
        zy = (a, b) => (b ? [b] : []).concat($d(a.G).tag_partners || []).join("+"),
        Gy = (a, b, c, d) => {
            const e = d.C;
            if (!e) throw Error("no_ins");
            c.src = iv(a);
            const f = d.pubWin.document,
                g = O() == window.top;
            let h = null;
            if (!ac() || V(uj)) {
                const k = Ce(new pe(f), "IFRAME");
                gg(c, (l, m) => {
                    null != l && k.setAttribute(m, l)
                });
                g && d.B.push(Lf(d.pubWin, k));
                Ey(e, k);
                h = Promise.resolve(k)
            } else c = $u(c), g && (Lf(d.pubWin), r.setTimeout(R(222, () => {
                const k = f.getElementById(b);
                k ? d.B.push(Lf(d.pubWin, k)) : P(Q,
                    "inabox:no-iframe", {
                        adUrl: a
                    }, !0, void 0, void 0)
            }), 0)), Fy(e, c);
            V(Oi) && r.setTimeout(R(644, () => {
                sf(f.getElementById(b), () => {
                    r.setTimeout(() => {
                        for (const k of d.B) k();
                        d.B.length = 0
                    }, 200)
                })
            }), 0);
            return h
        },
        Hy = (a, b, c) => {
            if (!a.j) return ih("jserror", {
                context: "ac_crai"
            }), null;
            const d = a.C;
            return 9 == a.G.google_reactive_ad_format && a.D && Ae(a.D, null, "fsi_container", void 0) ? (d.appendChild(b), Promise.resolve(b)) : xr(a.F.qc, 525, e => {
                a.C.appendChild(b);
                const f = Qu(c, a.pubWin);
                e.createAdSlot(a.j, a.G, b, a.D.parentElement, f);
                return b
            })
        };

    function Iy(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        jy(a.pubWin, Rd(jd(jd(Qd(new Sd, String(qf(a.pubWin))), 4), 2), H(a.A, 2)));
        const f = "string" === typeof b ? a.pubWin.document.getElementById(b) : b;
        if (f) {
            var g = a.j;
            a.G.google_acr && a.G.google_acr(f);
            L(f, "load", () => {
                f && f.setAttribute("data-load-complete", !0);
                if ((a.G.ovlp || V(qj)) && g && g === a.pubWin && f) {
                    const h = a.D;
                    h && Jy(g, a, h, f)
                }
            });
            e = h => {
                h && a.B.push(() => h.Ya())
            };
            Ky(a, f);
            !g || Nk(a.G) && !Ok(a.G) || (e(new vv(a, f)), e(new Cw(g, f, a.G)), e(xv(a, f)), e(mv(a, f)), e(g.IntersectionObserver ? null :
                new uv(g, f, a.C)));
            g && (e(new zi(g, f)), a.B.push(yu(g, a.G)), Du.V().P(g), a.B.push(kv(g, a.D, f)));
            V(oj) || Ly(a, c, f);
            f && f.setAttribute("data-google-container-id", d);
            e = a.G.iaaso;
            if (null != e && f) {
                const h = a.D,
                    k = h.parentElement;
                (k && ug.test(k.className) ? k : h).setAttribute("data-auto-ad-size", e)
            }
            f && (e = a.D) && (e.setAttribute("tabindex", "0"), e.setAttribute("title", "Advertisement"), e.setAttribute("aria-label", "Advertisement"));
            My(a)
        } else e ? ih("jserror", {
            context: "ac::nfrm",
            url: c
        }) : (e = R(162, () => Iy(a, b, c, d, !0)), r.setTimeout(e,
            0))
    }
    var Ky = (a, b) => {
        const c = a.pubWin,
            d = a.G.google_ad_client,
            e = wu();
        let f = null;
        const g = Xh(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        })
    };
    const My = a => {
            const b = Hf(a.pubWin);
            if (b)
                if ("AMP-STICKY-AD" === b.container) {
                    const c = e => {
                            "fill_sticky" === e.data && b.renderStart && b.renderStart()
                        },
                        d = R(616, c, this);
                    L(a.pubWin, "message", d);
                    a.B.push(() => {
                        Ld(a.pubWin, "message", c)
                    })
                } else b.renderStart && b.renderStart()
        },
        Jy = (a, b, c, d) => {
            Gv(new Pv(a, void 0), c).then(e => {
                mk(8, [e]);
                return e
            }).then(e => {
                const f = c.parentElement;
                (f && ug.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
                return e
            }).then(e => {
                const f = b.G.armr ||
                    "",
                    g = e.executionTime || "",
                    h = null == b.G.iaaso ? "" : Number(b.G.iaaso),
                    k = Number(e.isOverlappingOrOutsideViewport),
                    l = za(e.entries, A => `${A.overlapType}:${A.overlapDepth}:${A.overlapDetectionPoint}`),
                    m = e.overlappedArea.toFixed(2),
                    n = d.dataset.googleQueryId || "",
                    p = m * e.targetRect.width * e.targetRect.height,
                    q = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                    u = rg(e.target),
                    v = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
                e = e.viewportSize.width + "x" + e.viewportSize.height;
                ih("ovlp", {
                    adf: b.G.google_ad_dom_fingerprint,
                    armr: f,
                    client: b.G.google_ad_client,
                    eid: Wj(b.G),
                    et: g,
                    fwrattr: b.G.google_full_width_responsive,
                    iaaso: h,
                    io: k,
                    saldr: b.G.google_loader_used,
                    oa: m,
                    oe: l.join(","),
                    qid: n,
                    rafmt: b.G.google_responsive_auto_format,
                    roa: p,
                    slot: b.G.google_ad_slot,
                    sp: q,
                    tgt: u,
                    tr: v,
                    url: b.G.google_page_url,
                    vp: e
                }, 1)
            }).catch(e => {
                mk(8, ["Error:", e.message, c]);
                P(Q, "ovlp-err", {
                    err: e.message
                }, !0, 1, void 0)
            })
        };

    function Ny(a, b) {
        if (V(Fj)) {
            let c;
            if (null == (c = a.pubWin.document.featurePolicy) ? 0 : c.features().includes("conversion-measurement")) b.allow = "conversion-measurement 'src'"
        }
    }
    var Oy = a => {
            var b = t("Edge") ? 4E3 : 8100;
            var c = a;
            c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
            if (c !== a) {
                b -= 8;
                let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
                P(Q, "trn", {
                    ol: a.length,
                    tr: -1 === d ? "" : a.substring(d + 1),
                    url: a
                }, !0, .01, void 0)
            }
            return c
        },
        Py = (a, b, c) => {
            const d = a.G.google_async_iframe_id;
            var e = b,
                f = 0 === a.H;
            b = a.G;
            const g = b.google_async_iframe_id,
                h = b.google_ad_width,
                k = b.google_ad_height;
            var l = gu(b),
                m = {
                    id: g,
                    name: g
                };
            V(sj) && l || (m.style = "left:0;position:absolute;top:0;border:0;" +
                `width:${h}px;` + `height:${k}px;`);
            var n = df();
            if (n = !(!n["allow-top-navigation-by-user-activation"] || !n["allow-popups-to-escape-sandbox"])) {
                var p = e;
                if (e = "fsb=" + encodeURIComponent("1")) {
                    var q = p.indexOf("#");
                    0 > q && (q = p.length);
                    var u = p.indexOf("?");
                    if (0 > u || u > q) {
                        u = q;
                        var v = ""
                    } else v = p.substring(u + 1, q);
                    p = [p.substr(0, u), v, p.substr(q)];
                    q = p[1];
                    p[1] = e ? q ? q + "&" + e : e : q;
                    e = p[0] + (p[1] ? "?" + p[1] : "") + p[2]
                } else e = p;
                p = cf().join(" ");
                m.sandbox = p
            }
            q = e;
            e = Oy(e);
            u = f ? e.replace(/&ea=[^&]*/, "") + "&ea=0" : e;
            av(m, h, k, V(sj) && l ? e : iv(u));
            p = "";
            if (f) {
                p = 10;
                for (u = ""; 0 < p--;) u += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
                p = u;
                e = Xj(e, p);
                Xj(q, p)
            } else e = u;
            b.dash && (m.srcdoc = b.dash);
            q = a.pubWin.google_trust_token_operation_status;
            u = b.google_trust_token_additional_signing_data;
            q && Wu(q) && (q = Xu(q, u)) && (m.trustToken = JSON.stringify(q));
            Ny(a, m);
            if (l) a: {
                l = e;u = m;
                if (V(sj)) u.name = "";
                else {
                    u = a.G;
                    m = u.google_ad_width;
                    q = u.google_ad_height;
                    u = u.google_reactive_sra_index;
                    if (!m || !q || null == u) {
                        c = null;
                        break a
                    }
                    u = {
                        id: a.G.google_async_iframe_id,
                        name: ""
                    };
                    n && (n = u, v = cf().join(" "), n.sandbox = v);
                    Ny(a, u);
                    av(u, m, q, l)
                }
                n = Zu(u);c = Hy(a, n, c)
            }
            else c = Gy(e, g, m, a);
            f && (f = a.F.Xd.toString(), b = {
                id: g,
                url: e,
                width: h,
                height: k,
                Vb: p,
                Hd: a.pubWin,
                Qc: g,
                sh: "google_expandable_ad_slot" + pg(b),
                sd: f,
                Eb: a.pubWin
            }, b = !b.id || !b.url || 0 >= b.width || 0 >= b.height || !b.Vb || !b.Eb ? void 0 : bi(b.Eb, na(Yj, b, f)), b && a.B.push(b));
            return c || d
        },
        Ly = (a, b, c) => {
            const d = !bc() || 0 <= Bb(fc(), 11) ? Ak() : Dk();
            d.getOseId() && (O().Goog_AdSense_getAdAdapterInstance = Ak, d.registerAdBlock(b,
                1, "", c), a.B.push(() => {
                d.unloadAdBlock(c, !1, !0)
            }))
        };
    const Ty = async (a, b) => {
            var c = a.G,
                d = a.pubWin,
                e = a.J;
            const f = Qu(e, a.pubWin);
            if (!F(e, 5) && V(Pi)) return Promise.resolve();
            F(e, 5) && gv(e, a.pubWin, a.G.google_ad_client);
            var g = a.G.google_reactive_ads_config;
            if (g) {
                wr(a.j, g);
                const k = Qu(e);
                lu(g, a, k);
                g = g.page_level_pubvars;
                ea(g) && Za(a.G, g)
            }
            await wy();
            F(e, 5) && await Qy(a.G);
            const h = Sj(Qj);
            g = d.google_trust_token_operation_promise;
            0 < h && g && await Promise.race([g, new Promise(k => void setTimeout(() => k(), h))]);
            g = "";
            gu(c) ? (g = a.F.Yd.toString() + "#" + mx(c), ux(c, qu()), Ry(c)) : (5 ==
                c.google_pgb_reactive && c.google_reactive_ads_config || !nr(c) || mr(d, c, f)) && Ry(c) && (g = lx(a, e, b));
            mk(2, [c, g]);
            if (!g) return Promise.resolve();
            c.google_async_iframe_id || og(d);
            d = pg(c);
            c = r.window === r.window.top ? "a!" + d.toString(36) : `${d.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^oa()).toString(36)}`;
            b = b ? 0 < ry(a, b, !0) : !1;
            d = {
                ["ifi"]: d,
                ["uci"]: c
            };
            b && (b = qu(), d.btvi = X(b, 21, 1), vu(b, 21));
            g = lg(d, g);
            e = Py(a, g, e);
            g = Oy(g);
            Sy(a, a.C);
            e = await e;
            try {
                Iy(a,
                    e, g, c)
            } catch (k) {
                dh.ca(223, k, void 0, void 0)
            }
        },
        Qy = a => "aa" !== a.google_loader_used && "sa" !== a.google_loader_used || !(dc() ? 0 <= Bb(fc(), 11) : cc() && 0 <= Bb(fc(), 65)) ? (hx(null), Promise.resolve()) : new Promise(b => {
            hx(b.bind(null, !0))
        }),
        Uy = a => {
            const b = new Yx(a);
            return new Promise(c => {
                Xx(b, d => {
                    d && "string" === typeof d.uspString ? c(d.uspString) : c()
                })
            })
        },
        Vy = a => {
            let b = Sj(Ti);
            0 > b && (b = -1);
            a = new up(a, b);
            return op(a) ? tp(a) : Promise.resolve()
        },
        Wy = a => {
            var b = ef(r.top, "googlefcPresent");
            r.googlefc && !b && P(Q, "adsense_fc_has_namespace_but_no_iframes", {
                publisherId: a
            }, !0, 1, void 0)
        },
        Xy = (a, b) => {
            const c = b.Vd,
                d = b.uspString;
            b = b.Od;
            const e = new Th;
            if (c) {
                if (mp(c))
                    if (!1 !== c.gdprApplies && "tcunavailable" !== c.tcString && void 0 !== c.gdprApplies && "string" === typeof c.tcString && c.tcString.length) {
                        b: {
                            if (c.publisher && c.publisher.restrictions) {
                                var f = c.publisher.restrictions["1"];
                                if (void 0 !== f) {
                                    f = f["755"];
                                    break b
                                }
                            }
                            f = void 0
                        }
                        0 === f ? f = !1 : c.purpose && c.vendor ? (f = c.vendor.consents, (f = !(!f || !f["755"])) && c.purposeOneTreatment && ("DE" === c.publisherCC || V(Dj) && "CH" === c.publisherCC) ?
                            f = !0 : f && (f = c.purpose.consents, f = !(!f || !f["1"]))) : f = !0
                    }
                else f = !0;
                else f = !1;
                f = z(e, 5, f);
                f = z(f, 2, c.tcString);
                f = z(f, 4, c.addtlConsent || "");
                z(f, 7, c.internalErrorState);
                void 0 !== c.gdprApplies && z(e, 3, c.gdprApplies)
            } else z(e, 5, !0);
            d && z(e, 1, d);
            null !== b && z(e, 6, b);
            a.J = e
        },
        Yy = a => {
            var b = Sj(Ri);
            return 0 >= b ? Promise.resolve() : Promise.race([hh(809, () => Sx(a)), uf(b)])
        },
        Zy = a => {
            var b = Sj(Si);
            if (0 >= b) return Promise.resolve();
            const c = Ng();
            return Promise.race([hh(832, () => my(a)), uf(b)]).then(d => {
                let e;
                var f = {
                    etus: null != (e = null ==
                        d ? void 0 : d.status) ? e : 100,
                    sig: Ng() - c,
                    tms: b
                };
                P(Q, "afc_etu", f, !0, void 0, void 0);
                return null == d ? void 0 : d.Ca
            })
        };
    async function $y(a, b) {
        $w = O;
        dx(H(a.A, 8));
        Nx(a.pubWin);
        Wy(a.G.google_ad_client);
        var c = new gy(a.pubWin),
            d = await (c.l ? fy(c, "loaded") : Promise.resolve());
        c = [Vy(a.pubWin), Uy(a.pubWin), hy(c, d, a.G.google_ad_client, id(a.A, 6))];
        c = await Promise.all(c);
        Xy(a, {
            Vd: c[0],
            uspString: c[1],
            Od: c[2]
        });
        c = Yy(a.pubWin);
        d = hh(868, () => Zy(a.pubWin));
        a.K = await c || "";
        a.Ca = await d || "";
        await Ty(a, b)
    }
    var Dy = a => {
        var b = a.G.google_ad_width,
            c = a.G.google_ad_height,
            d = a.pubWin.document,
            e = a.G;
        let f = 0;
        try {
            !1 === e.google_allow_expandable_ads && (f |= 1);
            if (!d.body || isNaN(e.google_ad_height) || isNaN(e.google_ad_width) || !/^http/.test(d.location.protocol)) f |= 2;
            a: {
                e = navigator;
                const h = e.userAgent,
                    k = e.platform,
                    l = /WebKit\/(\d+)/,
                    m = /rv:(\d+\.\d+)/,
                    n = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(h)) {
                    const p = (l.exec(h) || [0, 0])[1],
                        q = (m.exec(h) || [0, 0])[1];
                    if (/Win/.test(k) && /Trident/.test(h) &&
                        11 <= d.documentMode || !p && "Gecko" === e.product && 27 <= q && !n.test(h) || 536 <= p) {
                        var g = !0;
                        break a
                    }
                }
                g = !1
            }
            g || (f |= 4)
        } catch (h) {
            f |= 8
        }
        d = f;
        Ik(a.pubWin, a.pubWin.document, b, c) && (d |= 2);
        a.H = d;
        0 === a.H || (a.G.google_allow_expandable_ads = !1);
        Hk() != a.pubWin && (a.l |= 4);
        3 === qk(a.pubWin.document) && (a.l |= 32);
        if (b = a.j) b = a.j, b = !(S(b).scrollWidth <= S(b).clientWidth);
        b && (a.l |= 1024);
        a.pubWin.Prototype && a.pubWin.Prototype.Version && (a.l |= 16384);
        a.G.google_loader_features_used && (a.l |= a.G.google_loader_features_used);
        V(oj) ? a.I = 2 : (b = Sj(rj),
            vk = zk, pk = .02, ok = b, b = !bc() || 0 <= Bb(fc(), 11) ? Ak() : Dk(), c = qu(), a.I = b.setupOse(X(c, 7, pu())));
        return $y(a, a.G.google_async_iframe_id ? a.C : null)
    };

    function Ey(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }

    function Fy(a, b) {
        a.style.visibility = "visible";
        Tf();
        b = lc(b, null);
        uc(a, b)
    }
    var Ry = a => {
            const b = qu(),
                c = a.google_ad_section;
            Nk(a) && vu(b, 15);
            if (xg(a)) {
                if (100 < vu(b, 5)) return !1
            } else if (100 < vu(b, 6) - X(b, 15, 0) && "" == c) return !1;
            return !0
        },
        Sy = (a, b) => {
            b && a.G.rpe && vw(a.pubWin, b, {
                height: a.G.google_ad_height,
                Qb: "force",
                Sb: !0,
                vc: !0,
                Qa: a.G.google_ad_client
            })
        },
        Ay = a => {
            const b = a.j;
            if (b && !$d(b).ads_density_stats_processed && !Hf(b) && ($d(b).ads_density_stats_processed = !0, V(pj) || .01 > Pe(b))) {
                const c = () => {
                    if (b) {
                        var d = at(Ws(b), a.G.google_ad_client, b.location.hostname, Wj(a.G).split(","));
                        P(Q, "ama_stats",
                            d, !0, 1, void 0)
                    }
                };
                "complete" === b.document.readyState ? r.setTimeout(c, 1E3) : L(b, "load", () => {
                    r.setTimeout(c, 1E3)
                })
            }
        },
        Cy = a => {
            a && !$d(a).host_pinged_back && ($d(a).host_pinged_back = !0, P(Q, "abg_host", {
                host: a.location.host
            }, !0, .01, void 0))
        },
        xy = async a => {
            const b = a.pubWin.document;
            if ("function" === typeof b.interestCohort && V(Cj)) {
                const c = Sj(Ej),
                    d = await Promise.race([(async () => {
                        const e = performance.now(),
                            f = await b.interestCohort();
                        P(Q, "flocapi", {
                            time: performance.now() - e
                        }, !0, 1, void 0);
                        return f
                    })(), new Promise(e => void setTimeout(() =>
                        e(), c))]);
                d && (a.pubWin.google_floc = d)
            }
        };
    ((a, b, c) => {
        hh(843, () => {
            var d = r.google_sl_win || r;
            if (!d.google_sa_impl) {
                var e = Nu(a);
                Eu(dh, H(e, 2));
                mk(16, [3, md(e)]);
                var f = c(b, e);
                d.google_sa_impl = async g => {
                    await oy(e, f, g)
                };
                Vj(Ki(d));
                d.google_process_slots && d.google_process_slots();
                d = (r.Prototype || {}).Version;
                null != d && ih("prtpjs", {
                    version: d
                })
            }
        })
    })(Mu, "", function(a, b) {
        const c = 2012 < hd(b, 1, 0) ? `_fy${hd(b,1,0)}` : "";
        H(b, 3);
        const d = H(b, 3).replace(/^\//, ""),
            e = H(b, 2);
        return {
            Kd: Qh `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum${c}.js`,
            Jd: Qh `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/rum_debug${c}.js`,
            qc: a ? Qh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js` : Qh `https://pagead2.googlesyndication.com/pagead/js/${H(b,2)}/${d}/reactive_library${c}.js`,
            ed: a ? Qh `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js` : Qh `https://pagead2.googlesyndication.com/pagead/js/${H(b,2)}/${d}/debug_card_library${c}.js`,
            Xd: Qh `https://pagead2.googlesyndication.com/pagead/js/${e}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Yd: Qh `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`
        }
    });
}).call(this, "[2019,\"r20210524\",\"\/r20190131\",null,[],null,null,\".google.co.in\"]");