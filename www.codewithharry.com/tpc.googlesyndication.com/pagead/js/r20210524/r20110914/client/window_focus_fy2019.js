(function() {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    (class {
        constructor(a, b) {
            this.i = b === f ? a : ""
        }
    }).prototype.toString = function() {
        return this.i.toString()
    };
    var f = {};

    function g(a, b, e) {
        a.addEventListener && a.addEventListener(b, e, !1)
    };

    function h(a, b, e) {
        if (Array.isArray(b))
            for (var c = 0; c < b.length; c++) h(a, String(b[c]), e);
        else null != b && e.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function k(a, b, e = null) {
        l(a, b, e)
    }

    function l(a, b, e) {
        a.google_image_requests || (a.google_image_requests = []);
        const c = a.document.createElement("img");
        if (e) {
            const d = x => {
                e && e(x);
                c.removeEventListener && c.removeEventListener("load", d, !1);
                c.removeEventListener && c.removeEventListener("error", d, !1)
            };
            g(c, "load", d);
            g(c, "error", d)
        }
        c.src = b;
        a.google_image_requests.push(c)
    };

    function m(a = null) {
        return a && "22" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="22"]')
    };
    var n = document,
        p = window;

    function q(a) {
        return "undefined" !== typeof a
    }

    function r(a) {
        g(n, a.h, () => {
            if (n[a.g]) a.i && (a.i = !1, a.j = Date.now(), t(a, 0));
            else {
                if (-1 !== a.j) {
                    const b = Date.now() - a.j;
                    0 < b && (a.j = -1, t(a, 1, b))
                }
                t(a, 3)
            }
        })
    }

    function u(a) {
        g(p, "click", b => {
            a.handleClick(b)
        })
    }

    function t(a, b, e = 0) {
        var c = {
            gqid: a.m,
            qqid: a.o
        };
        0 === b && (c["return"] = 0);
        1 === b && (c["return"] = 1, c.timeDelta = e);
        2 === b && (c.bgload = 1);
        3 === b && (c.fg = 1);
        b = [];
        for (var d in c) h(d, c[d], b);
        k(p, a.l + "&label=window_focus&" + b.join("&"), void 0);
        if (!(.01 < Math.random())) {
            a = m(document.currentScript);
            a = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${22}&version=${a&&a.getAttribute("data-jc-version")||"unknown"}&sample=${.01}`;
            c = window;
            if (d = c.navigator) d = c.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ?
                !0 : !1;
            d && c.navigator.sendBeacon ? c.navigator.sendBeacon(a) : k(c, a)
        }
    }
    var w = class {
        constructor() {
            var a = v["gws-id"],
                b = v["qem-id"];
            this.l = v.url;
            this.m = a;
            this.o = b;
            this.i = !1;
            a = q(n.hidden) ? {
                g: "hidden",
                h: "visibilitychange"
            } : q(n.mozHidden) ? {
                g: "mozHidden",
                h: "mozvisibilitychange"
            } : q(n.msHidden) ? {
                g: "msHidden",
                h: "msvisibilitychange"
            } : q(n.webkitHidden) ? {
                g: "webkitHidden",
                h: "webkitvisibilitychange"
            } : {
                g: "hidden",
                h: "visibilitychange"
            };
            this.g = a.g;
            this.h = a.h;
            this.j = -1;
            n[this.g] && t(this, 2);
            r(this);
            u(this)
        }
        handleClick() {
            this.i = !0;
            p.setTimeout(() => {
                this.i = !1
            }, 5E3)
        }
    };
    const y = m(document.currentScript);
    if (null == y) throw Error("JSC not found 22");
    var v;
    const z = {},
        A = y.attributes;
    for (let a = A.length - 1; 0 <= a; a--) {
        const b = A[a].name;
        0 === b.indexOf("data-jcp-") && (z[b.substring(9)] = A[a].value)
    }
    v = z;
    window.window_focus_for_click = new w;
}).call(this);