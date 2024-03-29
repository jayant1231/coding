/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m, aa = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    },
    ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    },
    ca = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    },
    da = ca(this),
    ea = function(a, b) {
        if (b) a: {
            var c = da;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
ea("Symbol", function(a) {
    if (a) return a;
    var b = function(f, g) {
        this.ue = f;
        ba(this, "description", {
            configurable: !0,
            writable: !0,
            value: g
        })
    };
    b.prototype.toString = function() {
        return this.ue
    };
    var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
        d = 0,
        e = function(f) {
            if (this instanceof e) throw new TypeError("Symbol is not a constructor");
            return new b(c + (f || "") + "_" + d++, f)
        };
    return e
});
ea("Symbol.iterator", function(a) {
    if (a) return a;
    a = Symbol("Symbol.iterator");
    for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
        var d = da[b[c]];
        "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return fa(aa(this))
            }
        })
    }
    return a
});
var fa = function(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    },
    n = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    },
    ha = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    },
    ia = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    },
    ja;
if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
else {
    var ka;
    a: {
        var la = {
                a: !0
            },
            ma = {};
        try {
            ma.__proto__ = la;
            ka = ma.a;
            break a
        } catch (a) {}
        ka = !1
    }
    ja = ka ? function(a, b) {
        a.__proto__ = b;
        if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
        return a
    } : null
}
var na = ja,
    t = function(a, b) {
        a.prototype = ia(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.ja = b.prototype
    },
    oa = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
ea("WeakMap", function(a) {
    function b() {}

    function c(k) {
        var l = typeof k;
        return "object" === l && null !== k || "function" === l
    }

    function d(k) {
        if (!oa(k, f)) {
            var l = new b;
            ba(k, f, {
                value: l
            })
        }
    }

    function e(k) {
        var l = Object[k];
        l && (Object[k] = function(r) {
            if (r instanceof b) return r;
            Object.isExtensible(r) && d(r);
            return l(r)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}),
                    l = Object.seal({}),
                    r = new a([
                        [k, 2],
                        [l, 3]
                    ]);
                if (2 != r.get(k) || 3 != r.get(l)) return !1;
                r.delete(k);
                r.set(l, 4);
                return !r.has(k) && 4 == r.get(l)
            } catch (q) {
                return !1
            }
        }()) return a;
    var f = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var g = 0,
        h = function(k) {
            this.Wa = (g += Math.random() + 1).toString();
            if (k) {
                k = n(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
    h.prototype.set = function(k, l) {
        if (!c(k)) throw Error("Invalid WeakMap key");
        d(k);
        if (!oa(k, f)) throw Error("WeakMap key fail: " + k);
        k[f][this.Wa] = l;
        return this
    };
    h.prototype.get = function(k) {
        return c(k) && oa(k, f) ? k[f][this.Wa] : void 0
    };
    h.prototype.has = function(k) {
        return c(k) && oa(k, f) && oa(k[f],
            this.Wa)
    };
    h.prototype.delete = function(k) {
        return c(k) && oa(k, f) && oa(k[f], this.Wa) ? delete k[f][this.Wa] : !1
    };
    return h
});
ea("Map", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    k = new a(n([
                        [h, "s"]
                    ]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size) return !1;
                var l = k.entries(),
                    r = l.next();
                if (r.done || r.value[0] != h || "s" != r.value[1]) return !1;
                r = l.next();
                return r.done || 4 != r.value[0].x || "t" != r.value[1] || !l.next().done ? !1 : !0
            } catch (q) {
                return !1
            }
        }()) return a;
    var b = new WeakMap,
        c = function(h) {
            this.Qa = {};
            this.da =
                f();
            this.size = 0;
            if (h) {
                h = n(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        };
    c.prototype.set = function(h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.Qa[l.id] = []);
        l.D ? l.D.value = k : (l.D = {
            next: this.da,
            ea: this.da.ea,
            head: this.da,
            key: h,
            value: k
        }, l.list.push(l.D), this.da.ea.next = l.D, this.da.ea = l.D, this.size++);
        return this
    };
    c.prototype.delete = function(h) {
        h = d(this, h);
        return h.D && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.Qa[h.id], h.D.ea.next = h.D.next, h.D.next.ea = h.D.ea,
            h.D.head = null, this.size--, !0) : !1
    };
    c.prototype.clear = function() {
        this.Qa = {};
        this.da = this.da.ea = f();
        this.size = 0
    };
    c.prototype.has = function(h) {
        return !!d(this, h).D
    };
    c.prototype.get = function(h) {
        return (h = d(this, h).D) && h.value
    };
    c.prototype.entries = function() {
        return e(this, function(h) {
            return [h.key, h.value]
        })
    };
    c.prototype.keys = function() {
        return e(this, function(h) {
            return h.key
        })
    };
    c.prototype.values = function() {
        return e(this, function(h) {
            return h.value
        })
    };
    c.prototype.forEach = function(h, k) {
        for (var l = this.entries(),
                r; !(r = l.next()).done;) r = r.value, h.call(k, r[1], r[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
            var r = h.Qa[l];
            if (r && oa(h.Qa, l))
                for (h = 0; h < r.length; h++) {
                    var q = r[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: r,
                        index: h,
                        D: q
                    }
                }
            return {
                id: l,
                list: r,
                index: -1,
                D: void 0
            }
        },
        e = function(h, k) {
            var l = h.da;
            return fa(function() {
                if (l) {
                    for (; l.head != h.da;) l = l.ea;
                    for (; l.next != l.head;) return l =
                        l.next, {
                            done: !1,
                            value: k(l)
                        };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        },
        f = function() {
            var h = {};
            return h.ea = h.next = h.head = h
        },
        g = 0;
    return c
});
var pa = function(a, b) {
    a instanceof String && (a += "");
    var c = 0,
        d = !1,
        e = {
            next: function() {
                if (!d && c < a.length) {
                    var f = c++;
                    return {
                        value: b(f, a[f]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
    e[Symbol.iterator] = function() {
        return e
    };
    return e
};
ea("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return pa(this, function(b) {
            return b
        })
    }
});
ea("Array.prototype.values", function(a) {
    return a ? a : function() {
        return pa(this, function(b, c) {
            return c
        })
    }
});
ea("Set", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({
                        x: 4
                    }),
                    d = new a(n([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size) return !1;
                var e = d.entries(),
                    f = e.next();
                if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                f = e.next();
                return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
            } catch (g) {
                return !1
            }
        }()) return a;
    var b = function(c) {
        this.o = new Map;
        if (c) {
            c =
                n(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
        this.size = this.o.size
    };
    b.prototype.add = function(c) {
        c = 0 === c ? 0 : c;
        this.o.set(c, c);
        this.size = this.o.size;
        return this
    };
    b.prototype.delete = function(c) {
        c = this.o.delete(c);
        this.size = this.o.size;
        return c
    };
    b.prototype.clear = function() {
        this.o.clear();
        this.size = 0
    };
    b.prototype.has = function(c) {
        return this.o.has(c)
    };
    b.prototype.entries = function() {
        return this.o.entries()
    };
    b.prototype.values = function() {
        return this.o.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
        var e = this;
        this.o.forEach(function(f) {
            return c.call(d, f, f, e)
        })
    };
    return b
});
ea("Promise", function(a) {
    function b() {
        this.ga = null
    }

    function c(g) {
        return g instanceof e ? g : new e(function(h) {
            h(g)
        })
    }
    if (a) return a;
    b.prototype.fd = function(g) {
        if (null == this.ga) {
            this.ga = [];
            var h = this;
            this.gd(function() {
                h.df()
            })
        }
        this.ga.push(g)
    };
    var d = da.setTimeout;
    b.prototype.gd = function(g) {
        d(g, 0)
    };
    b.prototype.df = function() {
        for (; this.ga && this.ga.length;) {
            var g = this.ga;
            this.ga = [];
            for (var h = 0; h < g.length; ++h) {
                var k = g[h];
                g[h] = null;
                try {
                    k()
                } catch (l) {
                    this.Ge(l)
                }
            }
        }
        this.ga = null
    };
    b.prototype.Ge = function(g) {
        this.gd(function() {
            throw g;
        })
    };
    var e = function(g) {
        this.Ja = 0;
        this.hb = void 0;
        this.Ea = [];
        this.Od = !1;
        var h = this.nc();
        try {
            g(h.resolve, h.reject)
        } catch (k) {
            h.reject(k)
        }
    };
    e.prototype.nc = function() {
        function g(l) {
            return function(r) {
                k || (k = !0, l.call(h, r))
            }
        }
        var h = this,
            k = !1;
        return {
            resolve: g(this.Xf),
            reject: g(this.Mc)
        }
    };
    e.prototype.Xf = function(g) {
        if (g === this) this.Mc(new TypeError("A Promise cannot resolve to itself"));
        else if (g instanceof e) this.ig(g);
        else {
            a: switch (typeof g) {
                case "object":
                    var h = null != g;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
            }
            h ? this.Wf(g) : this.Ad(g)
        }
    };
    e.prototype.Wf = function(g) {
        var h = void 0;
        try {
            h = g.then
        } catch (k) {
            this.Mc(k);
            return
        }
        "function" == typeof h ? this.jg(h, g) : this.Ad(g)
    };
    e.prototype.Mc = function(g) {
        this.qe(2, g)
    };
    e.prototype.Ad = function(g) {
        this.qe(1, g)
    };
    e.prototype.qe = function(g, h) {
        if (0 != this.Ja) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.Ja);
        this.Ja = g;
        this.hb = h;
        2 === this.Ja && this.$f();
        this.ef()
    };
    e.prototype.$f = function() {
        var g = this;
        d(function() {
            if (g.Mf()) {
                var h = da.console;
                "undefined" !== typeof h && h.error(g.hb)
            }
        }, 1)
    };
    e.prototype.Mf = function() {
        if (this.Od) return !1;
        var g = da.CustomEvent,
            h = da.Event,
            k = da.dispatchEvent;
        if ("undefined" === typeof k) return !0;
        "function" === typeof g ? g = new g("unhandledrejection", {
            cancelable: !0
        }) : "function" === typeof h ? g = new h("unhandledrejection", {
            cancelable: !0
        }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
        g.promise = this;
        g.reason = this.hb;
        return k(g)
    };
    e.prototype.ef = function() {
        if (null != this.Ea) {
            for (var g =
                    0; g < this.Ea.length; ++g) f.fd(this.Ea[g]);
            this.Ea = null
        }
    };
    var f = new b;
    e.prototype.ig = function(g) {
        var h = this.nc();
        g.vb(h.resolve, h.reject)
    };
    e.prototype.jg = function(g, h) {
        var k = this.nc();
        try {
            g.call(h, k.resolve, k.reject)
        } catch (l) {
            k.reject(l)
        }
    };
    e.prototype.then = function(g, h) {
        function k(w, p) {
            return "function" == typeof w ? function(y) {
                try {
                    l(w(y))
                } catch (u) {
                    r(u)
                }
            } : p
        }
        var l, r, q = new e(function(w, p) {
            l = w;
            r = p
        });
        this.vb(k(g, l), k(h, r));
        return q
    };
    e.prototype.catch = function(g) {
        return this.then(void 0, g)
    };
    e.prototype.vb = function(g,
        h) {
        function k() {
            switch (l.Ja) {
                case 1:
                    g(l.hb);
                    break;
                case 2:
                    h(l.hb);
                    break;
                default:
                    throw Error("Unexpected state: " + l.Ja);
            }
        }
        var l = this;
        null == this.Ea ? f.fd(k) : this.Ea.push(k);
        this.Od = !0
    };
    e.resolve = c;
    e.reject = function(g) {
        return new e(function(h, k) {
            k(g)
        })
    };
    e.race = function(g) {
        return new e(function(h, k) {
            for (var l = n(g), r = l.next(); !r.done; r = l.next()) c(r.value).vb(h, k)
        })
    };
    e.all = function(g) {
        var h = n(g),
            k = h.next();
        return k.done ? c([]) : new e(function(l, r) {
            function q(y) {
                return function(u) {
                    w[y] = u;
                    p--;
                    0 == p && l(w)
                }
            }
            var w = [],
                p = 0;
            do w.push(void 0), p++, c(k.value).vb(q(w.length - 1), r), k = h.next(); while (!k.done)
        })
    };
    return e
});
ea("Array.prototype.entries", function(a) {
    return a ? a : function() {
        return pa(this, function(b, c) {
            return [b, c]
        })
    }
});
var qa = qa || {},
    v = this || self,
    ra = function() {},
    sa = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    },
    ta = function(a) {
        var b = sa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    },
    va = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    },
    wa = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    },
    xa = function(a, b, c) {
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
    },
    x = function(a, b, c) {
        x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa : xa;
        return x.apply(null, arguments)
    },
    ya = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    },
    z = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.ja = b.prototype;
        a.prototype = new c;
        a.prototype.constructor =
            a;
        a.wg = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    },
    za = function(a) {
        return a
    };

function Aa(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, Aa);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
}
z(Aa, Error);
Aa.prototype.name = "CustomError";
var Ba = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    Aa.call(this, c + a[d])
};
z(Ba, Aa);
Ba.prototype.name = "AssertionError";
var Ca = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Ba("" + e, f || []);
    },
    A = function(a, b, c) {
        a || Ca("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    Da = function(a, b) {
        throw new Ba("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    Ea = function(a, b, c) {
        "string" !== typeof a && Ca("Expected string but got %s: %s.", [sa(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    Fa = function(a, b, c) {
        Array.isArray(a) || Ca("Expected array but got %s: %s.", [sa(a), a], b, Array.prototype.slice.call(arguments, 2))
    },
    Ha = function(a, b, c, d) {
        a instanceof b || Ca("Expected instanceof %s but got %s.", [Ga(b), Ga(a)], c, Array.prototype.slice.call(arguments, 3))
    },
    Ga = function(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
var Ia = Array.prototype.indexOf ? function(a, b) {
        A(null != a.length);
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Ja = Array.prototype.forEach ? function(a, b, c) {
        A(null != a.length);
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Ka = Array.prototype.map ?
    function(a, b) {
        A(null != a.length);
        return Array.prototype.map.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    };

function La(a, b) {
    a: {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) {
                b = e;
                break a
            }
        b = -1
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
}

function Ma(a, b) {
    b = Ia(a, b);
    var c;
    if (c = 0 <= b) A(null != a.length), Array.prototype.splice.call(a, b, 1);
    return c
};
var Na = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
    }
    return b
};
var Oa = function(a) {
        if (va(a)) try {
            return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
        } catch (b) {
            return "<object could not be stringified>"
        } else return void 0 === a ? "undefined" : null === a ? "null" : typeof a
    },
    Pa = function(a) {
        try {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c || v;
            if (c.Element && c.Location) return c
        } catch (d) {}
        return null
    };
var Qa = function(a) {
    var b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
    }
};

function Ra(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a)) return !0;
    return !1
}

function Sa(a, b) {
    return null !== a && b in a
}
var Ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ua(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Ta.length; f++) c = Ta[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var Va;
var Ya = function(a, b) {
    this.Uc = a === Wa && b || "";
    this.Ce = Xa
};
Ya.prototype.Eb = !0;
Ya.prototype.Va = function() {
    return this.Uc
};
Ya.prototype.toString = function() {
    return "Const{" + this.Uc + "}"
};
var Za = function(a) {
        if (a instanceof Ya && a.constructor === Ya && a.Ce === Xa) return a.Uc;
        Da("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    },
    Xa = {},
    Wa = {};
var $a = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    ab = /&/g,
    bb = /</g,
    cb = />/g,
    db = /"/g,
    eb = /'/g,
    fb = /\x00/g,
    gb = /[\x00&<>"']/,
    ib = function(a, b) {
        var c = 0;
        a = $a(String(a)).split(".");
        b = $a(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = hb(0 == f[1].length ? 0 : parseInt(f[1],
                    10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || hb(0 == f[2].length, 0 == g[2].length) || hb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    },
    hb = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
var kb = function(a, b) {
    this.Lc = b === jb ? a : ""
};
m = kb.prototype;
m.Eb = !0;
m.Va = function() {
    return this.Lc.toString()
};
m.Id = !0;
m.uc = function() {
    return 1
};
m.toString = function() {
    return this.Lc.toString()
};
var lb = function(a) {
        if (a instanceof kb && a.constructor === kb) return a.Lc;
        Da("expected object of type SafeUrl, got '" + a + "' of type " + sa(a));
        return "type_error:SafeUrl"
    },
    mb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
    nb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    ob = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    qb = function(a, b) {
        if (a instanceof kb) return a;
        a = "object" == typeof a && a.Eb ? a.Va() : String(a);
        if (b && /^data:/i.test(a)) {
            b = String(a);
            b = b.replace(/(%0A|%0D)/g, "");
            var c = b.match(nb);
            b = (c && mb.test(c[1]) ? new kb(b, jb) : null) || pb;
            if (b.Va() == a) return b
        }
        A(ob.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez");
        return new kb(a, jb)
    },
    jb = {},
    pb = new kb("about:invalid#zClosurez", jb);
var rb;
a: {
    var sb = v.navigator;
    if (sb) {
        var tb = sb.userAgent;
        if (tb) {
            rb = tb;
            break a
        }
    }
    rb = ""
}
var B = function(a) {
        return -1 != rb.indexOf(a)
    },
    ub = function(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
var vb = function() {
        return B("Opera")
    },
    wb = function() {
        return B("Trident") || B("MSIE")
    },
    xb = function() {
        return B("Firefox") || B("FxiOS")
    },
    zb = function() {
        return B("Safari") && !(yb() || B("Coast") || vb() || B("Edge") || B("Edg/") || B("OPR") || xb() || B("Silk") || B("Android"))
    },
    yb = function() {
        return (B("Chrome") || B("CriOS")) && !B("Edge")
    },
    Bb = function() {
        function a(e) {
            e = La(e, d);
            return c[e] || ""
        }
        var b = rb;
        if (wb()) return Ab(b);
        b = ub(b);
        var c = {};
        Ja(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = ya(Sa, c);
        return vb() ? a(["Version", "Opera"]) : B("Edge") ?
            a(["Edge"]) : B("Edg/") ? a(["Edg"]) : yb() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
    },
    Ab = function(a) {
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
var Db = function(a, b, c) {
    this.Kc = c === Cb ? a : "";
    this.Ye = b
};
m = Db.prototype;
m.Id = !0;
m.uc = function() {
    return this.Ye
};
m.Eb = !0;
m.Va = function() {
    return this.Kc.toString()
};
m.toString = function() {
    return this.Kc.toString()
};
var Eb = function(a) {
        if (a instanceof Db && a.constructor === Db) return a.Kc;
        Da("expected object of type SafeHtml, got '" + a + "' of type " + sa(a));
        return "type_error:SafeHtml"
    },
    Gb = function(a) {
        if (a instanceof Db) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Id && (c = a.uc());
        a = b && a.Eb ? a.Va() : String(a);
        gb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ab, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(bb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(cb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(db, "&quot;")), -1 != a.indexOf("'") &&
            (a = a.replace(eb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(fb, "&#0;")));
        return Fb(a, c)
    },
    Cb = {},
    Fb = function(a, b) {
        if (void 0 === Va) {
            var c = null;
            var d = v.trustedTypes;
            if (d && d.createPolicy) try {
                c = d.createPolicy("goog#html", {
                    createHTML: za,
                    createScript: za,
                    createScriptURL: za
                })
            } catch (e) {
                v.console && v.console.error(e.message)
            }
            Va = c
        }
        a = (c = Va) ? c.createHTML(a) : a;
        return new Db(a, b, Cb)
    },
    Hb = new Db(v.trustedTypes && v.trustedTypes.emptyHTML || "", 0, Cb);
var Ib = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = Eb(Hb);
        return !b.parentElement
    }),
    Jb = function(a) {
        var b = document.location,
            c = Pa(b);
        c && (!b || !(b instanceof c.Location) && b instanceof c.Element) && Da("Argument is not a Location (or a non-Element mock); got: %s",
            Oa(b));
        a = a instanceof kb ? a : qb(a);
        b.href = lb(a)
    };
var Kb = function() {
        return B("iPhone") && !B("iPod") && !B("iPad")
    },
    Lb = function() {
        var a = rb,
            b = "";
        B("Windows") ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : Kb() || B("iPad") || B("iPod") ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : B("Macintosh") ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : -1 != rb.toLowerCase().indexOf("kaios") ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : B("Android") ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) &&
            a[1]) : B("CrOS") && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
        return 0 <= ib(b || "", 12)
    };
var Mb = function(a) {
    Mb[" "](a);
    return a
};
Mb[" "] = ra;
var Ob = function(a, b) {
    var c = Nb;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
};
var Pb = vb(),
    Qb = wb(),
    Rb = B("Edge"),
    Sb = B("Gecko") && !(-1 != rb.toLowerCase().indexOf("webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
    Tb = -1 != rb.toLowerCase().indexOf("webkit") && !B("Edge"),
    Ub;
a: {
    var Vb = "",
        Wb = function() {
            var a = rb;
            if (Sb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Rb) return /Edge\/([\d\.]+)/.exec(a);
            if (Qb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Tb) return /WebKit\/(\S+)/.exec(a);
            if (Pb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();Wb && (Vb = Wb ? Wb[1] : "");
    if (Qb) {
        var Xb, Yb = v.document;
        Xb = Yb ? Yb.documentMode : void 0;
        if (null != Xb && Xb > parseFloat(Vb)) {
            Ub = String(Xb);
            break a
        }
    }
    Ub = Vb
}
var Zb = Ub,
    Nb = {},
    $b = function(a) {
        return Ob(a, function() {
            return 0 <= ib(Zb, a)
        })
    };
var ac = xb(),
    bc = yb(),
    cc = zb() && !(Kb() || B("iPad") || B("iPod"));
var dc = {},
    ec = null,
    fc = function(a, b) {
        A(ta(a), "encodeByteArray takes an array as a parameter");
        void 0 === b && (b = 0);
        if (!ec) {
            ec = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                dc[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g],
                        k = ec[h];
                    void 0 === k ? ec[h] = g : A(k === g)
                }
            }
        }
        b = dc[b];
        c = [];
        for (d = 0; d < a.length; d += 3) {
            k = a[d];
            var l = (e = d + 1 < a.length) ? a[d + 1] : 0;
            h = (f = d + 2 < a.length) ? a[d + 2] : 0;
            g = k >> 2;
            k = (k & 3) << 4 | l >> 4;
            l = (l &
                15) << 2 | h >> 6;
            h &= 63;
            f || (h = 64, e || (l = 64));
            c.push(b[g], b[k], b[l] || "", b[h] || "")
        }
        return c.join("")
    };
var gc = function() {
    this.blockSize = -1
};
var hc = function(a, b, c) {
    this.blockSize = -1;
    this.R = a;
    this.blockSize = c || a.blockSize || 16;
    this.Sd = Array(this.blockSize);
    this.Gc = Array(this.blockSize);
    a = b;
    a.length > this.blockSize && (this.R.update(a), a = this.R.digest(), this.R.reset());
    for (c = 0; c < this.blockSize; c++) b = c < a.length ? a[c] : 0, this.Sd[c] = b ^ 92, this.Gc[c] = b ^ 54;
    this.R.update(this.Gc)
};
z(hc, gc);
hc.prototype.reset = function() {
    this.R.reset();
    this.R.update(this.Gc)
};
hc.prototype.update = function(a, b) {
    this.R.update(a, b)
};
hc.prototype.digest = function() {
    var a = this.R.digest();
    this.R.reset();
    this.R.update(this.Sd);
    this.R.update(a);
    return this.R.digest()
};
var jc = function() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.B = Array(4);
    this.Je = Array(this.blockSize);
    this.Vb = this.Oa = 0;
    this.reset()
};
z(jc, gc);
jc.prototype.reset = function() {
    this.B[0] = 1732584193;
    this.B[1] = 4023233417;
    this.B[2] = 2562383102;
    this.B[3] = 271733878;
    this.Vb = this.Oa = 0
};
var kc = function(a, b, c) {
    c || (c = 0);
    var d = Array(16);
    if ("string" === typeof b)
        for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
    else
        for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
    b = a.B[0];
    c = a.B[1];
    e = a.B[2];
    var f = a.B[3];
    var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>>
        15);
    g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    f = b + (g << 12 & 4294967295 |
        g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
    b = c + (g << 7 & 4294967295 | g >>> 25);
    g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    f = b + (g << 12 & 4294967295 | g >>> 20);
    g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
    e = f + (g << 17 & 4294967295 | g >>> 15);
    g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
    c = e + (g << 22 & 4294967295 | g >>> 10);
    g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    b = c + (g <<
        5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
    c =
        e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    b = c + (g << 5 & 4294967295 | g >>> 27);
    g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
    f = b + (g << 9 & 4294967295 | g >>> 23);
    g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
    e = f + (g << 14 & 4294967295 | g >>> 18);
    g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
    c = e + (g << 20 & 4294967295 | g >>> 12);
    g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    f = b + (g << 11 & 4294967295 |
        g >>> 21);
    g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
    b = c + (g << 4 & 4294967295 | g >>> 28);
    g = f + (b ^ c ^ e) + d[12] +
        3873151461 & 4294967295;
    f = b + (g << 11 & 4294967295 | g >>> 21);
    g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
    e = f + (g << 16 & 4294967295 | g >>> 16);
    g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
    c = e + (g << 23 & 4294967295 | g >>> 9);
    g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
        4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
        4294967295;
    c = e + (g << 21 & 4294967295 | g >>> 11);
    g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
    b = c + (g << 6 & 4294967295 | g >>> 26);
    g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
    f = b + (g << 10 & 4294967295 | g >>> 22);
    g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
    e = f + (g << 15 & 4294967295 | g >>> 17);
    g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
    a.B[0] = a.B[0] + b & 4294967295;
    a.B[1] = a.B[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
    a.B[2] = a.B[2] + e & 4294967295;
    a.B[3] = a.B[3] + f & 4294967295
};
jc.prototype.update = function(a, b) {
    void 0 === b && (b = a.length);
    for (var c = b - this.blockSize, d = this.Je, e = this.Oa, f = 0; f < b;) {
        if (0 == e)
            for (; f <= c;) kc(this, a, f), f += this.blockSize;
        if ("string" === typeof a)
            for (; f < b;) {
                if (d[e++] = a.charCodeAt(f++), e == this.blockSize) {
                    kc(this, d);
                    e = 0;
                    break
                }
            } else
                for (; f < b;)
                    if (d[e++] = a[f++], e == this.blockSize) {
                        kc(this, d);
                        e = 0;
                        break
                    }
    }
    this.Oa = e;
    this.Vb += b
};
jc.prototype.digest = function() {
    var a = Array((56 > this.Oa ? this.blockSize : 2 * this.blockSize) - this.Oa);
    a[0] = 128;
    for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
    var c = 8 * this.Vb;
    for (b = a.length - 8; b < a.length; ++b) a[b] = c & 255, c /= 256;
    this.update(a);
    a = Array(16);
    for (b = c = 0; 4 > b; ++b)
        for (var d = 0; 32 > d; d += 8) a[c++] = this.B[b] >>> d & 255;
    return a
};
var lc = function(a, b) {
    this.Qe = a[v.Symbol.iterator]();
    this.Hf = b;
    this.Lf = 0
};
lc.prototype[Symbol.iterator] = function() {
    return this
};
lc.prototype.next = function() {
    var a = this.Qe.next();
    return {
        value: a.done ? void 0 : this.Hf.call(void 0, a.value, this.Lf++),
        done: a.done
    }
};
var mc = function(a, b) {
    return new lc(a, b)
};
var nc = function(a, b) {
    return a + Math.random() * (b - a)
};
var oc = "StopIteration" in v ? v.StopIteration : {
        message: "StopIteration",
        stack: ""
    },
    pc = function() {};
pc.prototype.next = function() {
    throw oc;
};
pc.prototype.sa = function() {
    return this
};
var uc = function(a) {
        if (a instanceof qc || a instanceof rc || a instanceof sc) return a;
        if ("function" == typeof a.next) return new qc(function() {
            return tc(a)
        });
        if ("function" == typeof a[Symbol.iterator]) return new qc(function() {
            return a[Symbol.iterator]()
        });
        if ("function" == typeof a.sa) return new qc(function() {
            return tc(a.sa())
        });
        throw Error("Not an iterator or iterable.");
    },
    tc = function(a) {
        if (!(a instanceof pc)) return a;
        var b = !1;
        return {
            next: function() {
                for (var c; !b;) try {
                    c = a.next();
                    break
                } catch (d) {
                    if (d !== oc) throw d;
                    b = !0
                }
                return {
                    value: c,
                    done: b
                }
            }
        }
    },
    qc = function(a) {
        this.rc = a
    };
qc.prototype.sa = function() {
    return new rc(this.rc())
};
qc.prototype[Symbol.iterator] = function() {
    return new sc(this.rc())
};
qc.prototype.Vc = function() {
    return new sc(this.rc())
};
var rc = function(a) {
    this.Xa = a
};
t(rc, pc);
rc.prototype.next = function() {
    var a = this.Xa.next();
    if (a.done) throw oc;
    return a.value
};
rc.prototype[Symbol.iterator] = function() {
    return new sc(this.Xa)
};
rc.prototype.Vc = function() {
    return new sc(this.Xa)
};
var sc = function(a) {
    qc.call(this, function() {
        return a
    });
    this.Xa = a
};
t(sc, qc);
sc.prototype.next = function() {
    return this.Xa.next()
};
var vc = function(a, b) {
    this.o = {};
    this.v = [];
    this.rb = this.size = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.addAll(a)
};
m = vc.prototype;
m.Da = function() {
    wc(this);
    for (var a = [], b = 0; b < this.v.length; b++) a.push(this.o[this.v[b]]);
    return a
};
m.na = function() {
    wc(this);
    return this.v.concat()
};
m.rd = function(a) {
    return this.has(a)
};
m.has = function(a) {
    return xc(this.o, a)
};
m.Ld = function() {
    return 0 == this.size
};
m.clear = function() {
    this.o = {};
    this.rb = this.size = this.v.length = 0
};
m.remove = function(a) {
    return this.delete(a)
};
m.delete = function(a) {
    return xc(this.o, a) ? (delete this.o[a], --this.size, this.rb++, this.v.length > 2 * this.size && wc(this), !0) : !1
};
var wc = function(a) {
    if (a.size != a.v.length) {
        for (var b = 0, c = 0; b < a.v.length;) {
            var d = a.v[b];
            xc(a.o, d) && (a.v[c++] = d);
            b++
        }
        a.v.length = c
    }
    if (a.size != a.v.length) {
        var e = {};
        for (c = b = 0; b < a.v.length;) d = a.v[b], xc(e, d) || (a.v[c++] = d, e[d] = 1), b++;
        a.v.length = c
    }
};
m = vc.prototype;
m.get = function(a, b) {
    return xc(this.o, a) ? this.o[a] : b
};
m.set = function(a, b) {
    xc(this.o, a) || (this.size += 1, this.v.push(a), this.rb++);
    this.o[a] = b
};
m.addAll = function(a) {
    if (a instanceof vc)
        for (var b = a.na(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
    else
        for (b in a) this.set(b, a[b])
};
m.forEach = function(a, b) {
    for (var c = this.na(), d = 0; d < c.length; d++) {
        var e = c[d],
            f = this.get(e);
        a.call(b, f, e, this)
    }
};
m.clone = function() {
    return new vc(this)
};
m.keys = function() {
    return uc(this.sa(!0)).Vc()
};
m.values = function() {
    return uc(this.sa(!1)).Vc()
};
m.entries = function() {
    var a = this;
    return mc(this.keys(), function(b) {
        return [b, a.get(b)]
    })
};
m.sa = function(a) {
    wc(this);
    var b = 0,
        c = this.rb,
        d = this,
        e = new pc;
    e.next = function() {
        if (c != d.rb) throw Error("The map has changed since the iterator was created");
        if (b >= d.v.length) throw oc;
        var f = d.v[b++];
        return a ? f : d.o[f]
    };
    return e
};
var xc = function(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
var yc = function(a) {
        if (a.Da && "function" == typeof a.Da) return a.Da();
        if ("string" === typeof a) return a.split("");
        if (ta(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    },
    zc = function(a, b) {
        if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
        else if (ta(a) || "string" === typeof a) Ja(a, b, void 0);
        else {
            if (a.na && "function" == typeof a.na) var c = a.na();
            else if (a.Da && "function" == typeof a.Da) c = void 0;
            else if (ta(a) || "string" === typeof a) {
                c = [];
                for (var d = a.length,
                        e = 0; e < d; e++) c.push(e)
            } else
                for (e in c = [], d = 0, a) c[d++] = e;
            d = yc(a);
            e = d.length;
            for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        }
    };
var Ac = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
    Bc = function(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.substr(0, d), e, a.substr(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    },
    Cc = function(a, b, c) {
        Ea(a);
        if (Array.isArray(b)) {
            Fa(b);
            for (var d = 0; d < b.length; d++) Cc(a, String(b[d]), c)
        } else null != b && c.push(a + ("" ===
            b ? "" : "=" + encodeURIComponent(String(b))))
    },
    Dc = function(a, b) {
        A(0 == Math.max(a.length - (b || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
        var c = [];
        for (b = b || 0; b < a.length; b += 2) Cc(a[b], a[b + 1], c);
        return c.join("&")
    },
    Ec = function(a, b) {
        var c = 2 == arguments.length ? Dc(arguments[1], 0) : Dc(arguments, 1);
        return Bc(a, c)
    },
    Fc = function(a, b, c) {
        c = null != c ? "=" + encodeURIComponent(String(c)) : "";
        return Bc(a, b + c)
    },
    Gc = function(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 ==
                f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    },
    Hc = /#|$/,
    Ic = /[?&]($|#)/,
    Jc = function(a, b) {
        for (var c = a.search(Hc), d = 0, e, f = []; 0 <= (e = Gc(a, d, b, c));) f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
        f.push(a.substr(d));
        return f.join("").replace(Ic, "$1")
    },
    Kc = function(a) {
        return Fc(Jc(document.location.href, "hl"), "hl", a)
    };
var Lc = {
        Eg: !0
    },
    Mc = function() {
        throw Error("Do not instantiate directly");
    };
Mc.prototype.mc = null;
Mc.prototype.toString = function() {
    return this.content
};
var Nc = function() {
    Mc.call(this)
};
z(Nc, Mc);
Nc.prototype.xa = Lc;
var Oc = function(a) {
    var b = null != a && a.xa === Lc;
    b && A(a.constructor === Nc);
    return b
};
var Pc = Object.freeze || function(a) {
    return a
};
var Qc = function(a) {
        if (null != a) switch (a.mc) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    },
    Tc = function(a) {
        return Oc(a) ? a : a instanceof Db ? C(Eb(a).toString(), a.uc()) : C(String(String(a)).replace(Rc, Sc), Qc(a))
    },
    C = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.mc = d);
            return c
        }
    }(Nc),
    E = {},
    F = function(a) {
        if (Oc(a)) {
            var b = String;
            a = String(a.content).replace(Uc, "").replace(Vc, "&lt;");
            b = b(a).replace(Wc, Sc)
        } else b = String(a).replace(Rc,
            Sc);
        return b
    },
    Xc = function(a, b) {
        a || (a = b instanceof Function ? b.displayName || b.name || "unknown type name" : b instanceof Object ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : null === b ? "null" : typeof b, Da("expected @param origin of type string, but got " + a + "."))
    },
    Yc = {},
    Zc = function() {
        A(Yc === Yc, "found an incorrect call marker, was an internal function called from the top level?")
    },
    $c = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    },
    Sc = function(a) {
        return $c[a]
    },
    Rc = /[\x00\x22\x26\x27\x3c\x3e]/g,
    Wc = /[\x00\x22\x27\x3c\x3e]/g,
    Uc = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Vc = /</g;
var ad = function(a) {
    var b = document;
    return "string" === typeof a ? b.getElementById(a) : a
};
var cd = function(a, b, c, d) {
        c = b(c || bd, d);
        if (va(c))
            if (c instanceof Mc) {
                if (c.xa !== Lc) throw Error("Sanitized content was not of kind HTML.");
                b = c.toString();
                c = c.mc;
                d = new Ya(Wa, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
                Ea(Za(d), "must provide justification");
                A(!/^[\s\xa0]*$/.test(Za(d)), "must provide non-empty justification");
                b = Fb(b, c || null)
            } else Da("Soy template output is unsafe for use as HTML: " + c), b = Gb("zSoyz");
        else b = Gb(String(c));
        a = A(a);
        if (Ib())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Eb(b)
    },
    bd = {};
var dd = function(a) {
        if (E["oauth2.gsi.soy.common.dialogHeader"]) return E["oauth2.gsi.soy.common.dialogHeader"](null, a);
        var b = '<div class="' + F("dialog-header") + '"><div class="' + F("google-icon") + '">';
        a = E["oauth2.gsi.soy.common.googleIcon"] ? E["oauth2.gsi.soy.common.googleIcon"](null, a) : C('<svg class="' + F("icon") + '" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/><path fill="none" d="M2 2h44v44H2z"/></svg>');
        return C(b + a + "</div><p>Continue with Google</p></div>")
    },
    ed = function(a) {
        if (E["oauth2.gsi.soy.common.dialogFooter"]) var b = E["oauth2.gsi.soy.common.dialogFooter"](null, a);
        else {
            b = C;
            var c = '<div class="' + F("dialog-footer") + '">';
            if (E["oauth2.gsi.soy.common.languageSelector"]) var d = E["oauth2.gsi.soy.common.languageSelector"](null, a);
            else {
                var e = a.oc;
                d = a.languages;
                var f = '<div id="language_selector" class="' + F("language-selector") + '"><div class="' + F("language-selected") + '">';
                if ((e instanceof Mc ? e.content : e) &&
                    (d instanceof Mc ? d.content : d)) {
                    for (var g = "", h = d.length, k = 0; k < h; k++) {
                        var l = d[k],
                            r = l.code;
                        g += (r && e && r.Af && e.Af ? r.xa !== e.xa ? 0 : r.toString() === e.toString() : r instanceof Mc && e instanceof Mc ? r.xa != e.xa ? 0 : r.toString() == e.toString() : r == e) ? "" + l.displayName : ""
                    }
                    f += "<div>" + Tc(g) + "</div>"
                }
                f += '<div class="' + F("chevron") + '"></div></div><div id="language_list" class="' + F("language-list") + '">';
                if (d)
                    for (e = d.length, g = 0; g < e; g++) h = d[g], f += '<div class="' + F("language-option") + '" data-languagecode="' + F(h.code) + '">' + Tc(h.displayName) +
                        "</div>";
                d = C(f + "</div></div>")
            }
            c += d;
            E["oauth2.gsi.soy.common.footerMenu"] ? a = E["oauth2.gsi.soy.common.footerMenu"](null, a) : (a = '<ul class="' + F("footer-menu") + '"><li class="' + F("menu-item") + '"><a class="' + F("menu-content") + '" href="#">', a = a + 'Help</a></li><li class="' + (F("menu-item") + '"><a class="' + F("menu-content") + '" href="#">'), a = a + 'Privacy</a></li><li class="' + (F("menu-item") + '"><a class="' + F("menu-content") + '" href="#">'), a = C(a + "Terms</a></li></ul>"));
            b = b(c + a + "</div>")
        }
        return b
    };
var fd = function(a, b) {
    var c = a.origin;
    Zc();
    if (E["oauth2.gsi.soy.itp.newgrant.dialog"]) b = E["oauth2.gsi.soy.itp.newgrant.dialog"]({
        origin: c
    }, b);
    else {
        Xc("string" === typeof c, c);
        a = C;
        var d = '<div class="' + F("dialog-container dialog-modal") + '"><div class="' + F("dialog inflated-dialog") + '"><div class="' + F("dialog-body") + '">' + dd(b) + '<div class="' + F("dialog-content") + '">';
        if (E["oauth2.gsi.soy.itp.newgrant.title"]) var e = E["oauth2.gsi.soy.itp.newgrant.title"](null, b);
        else e = '<h1 class="' + F("title") + '">', e = C(e + "You'll need to give Safari permission to continue</h1>");
        d += e;
        Zc();
        E["oauth2.gsi.soy.itp.newgrant.consentForm"] ? c = E["oauth2.gsi.soy.itp.newgrant.consentForm"]({
            origin: c
        }, b) : (Xc("string" === typeof c, c), e = '<div class="' + F("consent-form") + '"><p class="' + F("consent-text") + '">', c = "In order to continue with your Google Account, Safari will ask if it's ok for Google to use cookies on " + (Tc(c) + "."), c = C(e + c + "</p></div>"));
        c = d + c;
        E["oauth2.gsi.soy.itp.newgrant.buttonGroup"] ? d = E["oauth2.gsi.soy.itp.newgrant.buttonGroup"](null, b) : (d = '<div class="' + F("button-group") +
            '"><div class="' + F("button button-cancel") + '" id="confirm_no">', d = d + 'Cancel</div><div class="' + (F("button button-confirm") + '" id="confirm_yes">'), d = C(d + "Continue</div></div>"));
        b = a(c + d + "</div></div>" + ed(b) + "</div></div>")
    }
    return b
};
var gd = function(a, b) {
    var c = a.origin;
    Zc();
    if (E["oauth2.gsi.soy.itp.regrant.dialog"]) b = E["oauth2.gsi.soy.itp.regrant.dialog"]({
        origin: c
    }, b);
    else {
        Xc("string" === typeof c, c);
        a = C;
        var d = '<div class="' + F("dialog-container dialog-modal") + '"><div class="' + F("dialog") + '"><div class="' + F("dialog-body") + '">' + dd(b) + '<div class="' + F("dialog-content") + '">';
        Zc();
        if (E["oauth2.gsi.soy.itp.regrant.title"]) var e = E["oauth2.gsi.soy.itp.regrant.title"]({
            origin: c
        }, b);
        else Xc("string" === typeof c, c), e = '<h1 class="' + F("title") +
            '">', c = "Do you still want Safari to let Google use cookies on " + (Tc(c) + "?"), e = C(e + c + "</h1>");
        d += e;
        E["oauth2.gsi.soy.itp.regrant.buttonGroup"] ? e = E["oauth2.gsi.soy.itp.regrant.buttonGroup"](null, b) : (e = '<div class="' + F("button-group button-group-high") + '"><div class="' + F("button button-cancel") + '" id="confirm_no">', e = e + 'No thanks</div><div class="' + (F("button button-confirm") + '" id="confirm_yes">'), e = C(e + "Yes</div></div>"));
        b = a(d + e + "</div></div>" + ed(b) + "</div></div>")
    }
    return b
};
var hd = function() {
    if (!v.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
        b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
    try {
        v.addEventListener("test", ra, b), v.removeEventListener("test", ra, b)
    } catch (c) {}
    return a
}();

function id(a) {
    a && "function" == typeof a.U && a.U()
};
var jd = function() {
    this.Ba = this.Ba;
    this.qa = this.qa
};
jd.prototype.Ba = !1;
jd.prototype.U = function() {
    this.Ba || (this.Ba = !0, this.ca())
};
var kd = function(a, b) {
    a.Ba ? b() : (a.qa || (a.qa = []), a.qa.push(b))
};
jd.prototype.ca = function() {
    if (this.qa)
        for (; this.qa.length;) this.qa.shift()()
};
var ld = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.bb = !1
};
ld.prototype.stopPropagation = function() {
    this.bb = !0
};
ld.prototype.preventDefault = function() {
    this.defaultPrevented = !0
};
var md;
md = Tb ? "webkitTransitionEnd" : Pb ? "otransitionend" : "transitionend";
var nd = function(a, b) {
    ld.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.Sa = null;
    a && this.W(a, b)
};
z(nd, ld);
var od = Pc({
    2: "touch",
    3: "pen",
    4: "mouse"
});
nd.prototype.W = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) {
        if (Sb) {
            a: {
                try {
                    Mb(b.nodeName);
                    var e = !0;
                    break a
                } catch (f) {}
                e = !1
            }
            e || (b = null)
        }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
        d.screenY || 0) : (this.offsetX = Tb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = Tb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : od[a.pointerType] || "";
    this.state = a.state;
    this.Sa = a;
    a.defaultPrevented && nd.ja.preventDefault.call(this)
};
nd.prototype.stopPropagation = function() {
    nd.ja.stopPropagation.call(this);
    this.Sa.stopPropagation ? this.Sa.stopPropagation() : this.Sa.cancelBubble = !0
};
nd.prototype.preventDefault = function() {
    nd.ja.preventDefault.call(this);
    var a = this.Sa;
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
};
var pd = "closure_listenable_" + (1E6 * Math.random() | 0);
var qd = 0;
var rd = function(a, b, c, d, e) {
        this.listener = a;
        this.Qb = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.l = e;
        this.key = ++qd;
        this.gb = this.ub = !1
    },
    sd = function(a) {
        a.gb = !0;
        a.listener = null;
        a.Qb = null;
        a.src = null;
        a.l = null
    };
var td = function(a) {
    this.src = a;
    this.F = {};
    this.nb = 0
};
td.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.F[f];
    a || (a = this.F[f] = [], this.nb++);
    var g = ud(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ub = !1)) : (b = new rd(b, this.src, f, !!d, e), b.ub = c, a.push(b));
    return b
};
td.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.F)) return !1;
    var e = this.F[a];
    b = ud(e, b, c, d);
    return -1 < b ? (sd(e[b]), A(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.F[a], this.nb--), !0) : !1
};
var vd = function(a, b) {
    var c = b.type;
    c in a.F && Ma(a.F[c], b) && (sd(b), 0 == a.F[c].length && (delete a.F[c], a.nb--))
};
td.prototype.vc = function(a, b, c, d) {
    a = this.F[a.toString()];
    var e = -1;
    a && (e = ud(a, b, c, d));
    return -1 < e ? a[e] : null
};
td.prototype.hasListener = function(a, b) {
    var c = void 0 !== a,
        d = c ? a.toString() : "",
        e = void 0 !== b;
    return Ra(this.F, function(f) {
        for (var g = 0; g < f.length; ++g)
            if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
        return !1
    })
};
var ud = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.gb && f.listener == b && f.capture == !!c && f.l == d) return e
    }
    return -1
};
var wd = "closure_lm_" + (1E6 * Math.random() | 0),
    xd = {},
    yd = 0,
    Ad = function(a, b, c, d, e) {
        if (d && d.once) return zd(a, b, c, d, e);
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) Ad(a, b[f], c, d, e);
            return null
        }
        c = Bd(c);
        return a && a[pd] ? a.S(b, c, va(d) ? !!d.capture : !!d, e) : Cd(a, b, c, !1, d, e)
    },
    Cd = function(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = va(e) ? !!e.capture : !!e,
            h = Dd(a);
        h || (a[wd] = h = new td(a));
        c = h.add(b, c, d, g, f);
        if (c.Qb) return c;
        d = Ed();
        c.Qb = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) hd || (e = g), void 0 === e &&
            (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Fd(b.toString()), d);
        else if (a.addListener && a.removeListener) A("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        yd++;
        return c
    },
    Ed = function() {
        var a = Gd,
            b = function(c) {
                return a.call(b.src, b.listener, c)
            };
        return b
    },
    zd = function(a, b, c, d, e) {
        if (Array.isArray(b)) {
            for (var f = 0; f < b.length; f++) zd(a, b[f], c, d, e);
            return null
        }
        c = Bd(c);
        return a && a[pd] ?
            a.P.add(String(b), c, !0, va(d) ? !!d.capture : !!d, e) : Cd(a, b, c, !0, d, e)
    },
    Hd = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Hd(a, b[f], c, d, e);
        else d = va(d) ? !!d.capture : !!d, c = Bd(c), a && a[pd] ? a.ob(b, c, d, e) : a && (a = Dd(a)) && (b = a.vc(b, c, d, e)) && Id(b)
    },
    Id = function(a) {
        if ("number" !== typeof a && a && !a.gb) {
            var b = a.src;
            if (b && b[pd]) vd(b.P, a);
            else {
                var c = a.type,
                    d = a.Qb;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Fd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                yd--;
                (c = Dd(b)) ? (vd(c, a), 0 == c.nb && (c.src = null, b[wd] = null)) : sd(a)
            }
        }
    },
    Fd = function(a) {
        return a in xd ? xd[a] : xd[a] = "on" + a
    },
    Gd = function(a, b) {
        if (a.gb) a = !0;
        else {
            b = new nd(b, this);
            var c = a.listener,
                d = a.l || a.src;
            a.ub && Id(a);
            a = c.call(d, b)
        }
        return a
    },
    Dd = function(a) {
        a = a[wd];
        return a instanceof td ? a : null
    },
    Jd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    Bd = function(a) {
        A(a, "Listener can not be null.");
        if ("function" === typeof a) return a;
        A(a.handleEvent, "An object listener must have handleEvent method.");
        a[Jd] || (a[Jd] =
            function(b) {
                return a.handleEvent(b)
            });
        return a[Jd]
    };
var Kd = function() {
    this.Kb = new Set;
    this.wd = !1
};
Kd.prototype.S = function(a, b, c) {
    a = Ad(a, b, c);
    this.Kb.add(a);
    return a
};
Kd.prototype.ob = function(a) {
    Id(a);
    this.Kb.delete(a)
};
Kd.prototype.U = function() {
    this.wd || (this.Kb.forEach(function(a) {
        Id(a)
    }), this.Kb.clear(), this.wd = !0)
};
var Ld = function() {
    Kd.call(this);
    this.xb = null;
    this.lc = !1
};
t(Ld, Kd);
var Md = function(a, b) {
    if (a.xb) throw Error("Component already rendered.");
    a.lc = !1;
    a.xb = b
};
Ld.prototype.U = function() {
    if (!this.lc) {
        Kd.prototype.U.call(this);
        for (var a = this.xb, b; b = a.firstChild;) a.removeChild(b);
        this.xb = null;
        this.lc = !0
    }
};
var Nd = function() {
    Kd.call(this);
    this.ia = this.Sb = this.Rb = null;
    this.he = this.Vd = !1
};
t(Nd, Kd);
Nd.prototype.register = function(a, b) {
    var c = this;
    if (this.he) throw Error("LanguageSelectorModel is already registered.");
    this.he = !0;
    this.Sb = a;
    this.ia = b;
    this.Ud = this.S(this.Sb, "click", function() {
        return Od(c)
    })
};
var Od = function(a) {
        a.ia.style.visibility = "visible";
        a.ia.style.opacity = 1;
        a.ob(a.Ud);
        a.Ef = a.S(document, "mouseup", function(b) {
            return Pd(a, b)
        })
    },
    Pd = function(a, b) {
        a.Rb = b.target.getAttribute("data-languagecode");
        if (null != a.Rb || b.target != a.ia) a.ob(a.Ef), a.Df = a.S(a.ia, md, function() {
            return Qd(a)
        }), a.ia.style.opacity = 0
    },
    Qd = function(a) {
        a.ob(a.Df);
        a.ia.style.visibility = "hidden";
        a.Ud = a.S(a.Sb, "click", function() {
            return Od(a)
        });
        if (null != a.Rb) {
            var b = Kc(a.Rb);
            Jb(b)
        }
    };
Nd.prototype.U = function() {
    this.Vd || (Kd.prototype.U.call(this), this.ia = this.Sb = null, this.Vd = !0)
};
var Rd = function(a) {
    var b = a.origin,
        c = a.oc;
    a = a.languages;
    Ld.call(this);
    this.j = b;
    this.td = c;
    this.Wd = a;
    this.Rd = !1
};
t(Rd, Ld);
Rd.prototype.Tf = function(a, b, c) {
    Md(this, a);
    cd(a, fd, {
        origin: this.j
    }, {
        oc: this.td,
        languages: this.Wd
    });
    a = ad("confirm_yes");
    this.S(a, "click", function() {
        (void 0 == document.hasStorageAccess ? Promise.resolve() : document.requestStorageAccess()).then(function() {
            return b()
        }, function() {
            return c()
        })
    });
    a = ad("confirm_no");
    this.S(a, "click", function() {
        return c()
    });
    Sd(this)
};
Rd.prototype.Uf = function(a, b, c) {
    Md(this, a);
    cd(a, gd, {
        origin: this.j
    }, {
        oc: this.td,
        languages: this.Wd
    });
    a = ad("confirm_yes");
    this.S(a, "click", function() {
        return b()
    });
    a = ad("confirm_no");
    this.S(a, "click", function() {
        return c()
    });
    Sd(this)
};
var Sd = function(a) {
    void 0 == a.Ib && (a.Ib = new Nd);
    var b = ad("language_selector"),
        c = ad("language_list");
    a.Ib.register(b, c)
};
Rd.prototype.U = function() {
    this.Rd || (Ld.prototype.U.call(this), void 0 != this.Ib && this.Ib.U(), this.Rd = !0)
};
var Td, Ud, Vd = void 0,
    Wd = function(a) {
        try {
            return v.JSON.parse.call(v.JSON, a)
        } catch (b) {
            return !1
        }
    },
    Xd = function(a) {
        return Object.prototype.toString.call(a)
    },
    Yd = Xd(0),
    Zd = Xd(new Date(0)),
    $d = Xd(!0),
    ae = Xd(""),
    be = Xd({}),
    ce = Xd([]),
    de = function(a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = Xd(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                    "toJSON") || (e !== ce || a.constructor !== Array && a.constructor !== Object) && (e !== be || a.constructor !== Array && a.constructor !== Object) && e !== ae && e !== Yd && e !== $d && e !== Zd)) return de(a.toJSON.call(a), c);
            if (null == a) b[b.length] = "null";
            else if (e === Yd) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
            else if (e === $d) b[b.length] = String(!!Number(a));
            else {
                if (e === Zd) return de(a.toISOString.call(a), c);
                if (e === ce && Xd(a.length) === Yd) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f) f &&
                        (b[b.length] = ","), b[b.length] = de(a[f], c) || "null";
                    b[b.length] = "]"
                } else if (e == ae && Xd(a.length) === Yd) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a) Object.prototype.hasOwnProperty.call(a,
                        f) && (e = de(a[f], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = de(f), b[b.length] = ":", b[b.length] = e));
                    b[b.length] = "}"
                } else return
            }
            return b.join("")
        }
    },
    ee = /[\0-\x07\x0b\x0e-\x1f]/,
    fe = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
    ge = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
    he = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
    ie = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
    je = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
    ke = /[ \t\n\r]+/g,
    le = /[^"]:/,
    me = /""/g,
    ne = /true|false|null/g,
    oe = /00/,
    pe = /[\{]([^0\}]|0[^:])/,
    qe = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
    re = /[^\[,:][\[\{]/,
    se = /^(\{|\}|\[|\]|,|:|0)+/,
    te = /\u2028/g,
    ue = /\u2029/g,
    ve = function(a) {
        a = String(a);
        if (ee.test(a) || fe.test(a) || ge.test(a) || he.test(a)) return !1;
        var b = a.replace(ie, '""');
        b = b.replace(je, "0");
        b = b.replace(ke, "");
        if (le.test(b)) return !1;
        b = b.replace(me, "0");
        b = b.replace(ne, "0");
        if (oe.test(b) || pe.test(b) || qe.test(b) || re.test(b) || !b || (b = b.replace(se, ""))) return !1;
        a = a.replace(te, "\\u2028").replace(ue,
            "\\u2029");
        b = void 0;
        try {
            b = Vd ? [Wd(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 === b.length ? b[0] : !1
    },
    we = function() {
        var a = ((v.document || {}).scripts || []).length;
        if ((void 0 === Td || void 0 === Vd || Ud !== a) && -1 !== Ud) {
            Td = Vd = !1;
            Ud = -1;
            try {
                try {
                    Vd = !!v.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === v.JSON.stringify.call(v.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === Wd("true") && 3 === Wd('[{"a":3}]')[0].a
                } catch (b) {}
                Td = Vd &&
                    !Wd("[00]") && !Wd('"\u0007"') && !Wd('"\\0"') && !Wd('"\\v"')
            } finally {
                Ud = a
            }
        }
    },
    xe = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
    ye = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T",
            String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"
        ].join("")
    };
Date.prototype.toISOString = xe ? ye : Date.prototype.toISOString;
var ze, Ae = !1,
    G = function(a) {
        try {
            Ae && window.console && window.console.log && window.console.log(a)
        } catch (b) {}
    },
    Be = function(a, b) {
        if (!a) return -1;
        if (a.indexOf) return a.indexOf(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b) return c;
        return -1
    },
    H = function(a, b) {
        function c() {}
        if (!a) throw "Child class cannot be empty.";
        if (!b) throw "Parent class cannot be empty.";
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    },
    Ce = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    },
    De = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (null === d || void 0 === d) d = "";
                b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
        return b.join("&")
    },
    Ee = function(a) {
        var b = window.location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        b = decodeURIComponent(b);
        b = a.exec(b);
        return null == b ? "" : b[1].replace(/\+/g, " ")
    },
    Fe = function(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1);
        else if (a.attachEvent) a.attachEvent("on" + b, c);
        else throw "Add event handler for " + b + " failed.";
    },
    Ge = function(a,
        b) {
        a = (a || "").split(" ");
        b = (b || "").split(" ");
        for (var c = 0; c < b.length; c++)
            if (b[c] && 0 > Be(a, b[c])) return !1;
        return !0
    },
    He = function() {
        if ("undefined" != typeof ze) return ze;
        a: {
            try {
                if (window.localStorage) {
                    var a = window.localStorage;
                    break a
                }
            } catch (b) {}
            a = void 0
        }
        if (!a) return ze = !1;
        try {
            a.setItem("test", "test"), a.removeItem("test"), ze = !0
        } catch (b) {
            ze = !1
        }
        return ze
    },
    Ie = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
    },
    Je = function() {
        return Object.hasOwnProperty.call(window,
            "ActiveXObject") && !window.ActiveXObject
    },
    Ke = function() {
        var a = navigator.userAgent.toLowerCase();
        return 0 > a.indexOf("edge/") && (-1 < a.indexOf("chrome/") || -1 < a.indexOf("crios/"))
    },
    Le = function() {
        var a = navigator.userAgent,
            b;
        if (b = !!a && -1 != a.indexOf("CriOS")) b = -1, (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1), b = 48 > b;
        return b
    },
    Me = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android")
    },
    I = window.JSON,
    Ne = function(a) {
        this.Yc = a || [];
        this.T = {}
    };
Ne.prototype.addEventListener = function(a, b) {
    if (!(0 <= Be(this.Yc, a))) throw "Unrecognized event type: " + a;
    if (!Ce(b)) throw "The listener for event '" + a + "' is not a function.";
    this.T[a] || (this.T[a] = []);
    0 > Be(this.T[a], b) && this.T[a].push(b)
};
Ne.prototype.removeEventListener = function(a, b) {
    if (!(0 <= Be(this.Yc, a))) throw "Unrecognized event type: " + a;
    Ce(b) && this.T[a] && this.T[a].length && (b = Be(this.T[a], b), 0 <= b && this.T[a].splice(b, 1))
};
Ne.prototype.dispatchEvent = function(a) {
    var b = a.type;
    if (!(b && 0 <= Be(this.Yc, b))) throw "Failed to dispatch unrecognized event type: " + b;
    if (this.T[b] && this.T[b].length)
        for (var c = 0, d = this.T[b].length; c < d; c++) this.T[b][c](a)
};
I = {
    parse: function(a) {
        a = "[" + String(a) + "]"; - 1 === Ud ? a = !1 : (we(), a = (Td ? Wd : ve)(a));
        if (!1 === a || 1 !== a.length) throw new SyntaxError("JSON parsing failed.");
        return a[0]
    },
    stringify: function(a) {
        -1 !== Ud ? (we(), a = Vd ? v.JSON.stringify.call(v.JSON, a) : de(a)) : a = void 0;
        return a
    }
};
var Oe = function(a) {
    this.md = a
};
var Pe = function(a, b, c) {
    this.Za = a;
    this.Oe = b;
    this.Cb = c || [];
    this.va = new Map
};
m = Pe.prototype;
m.eg = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.va.set(this.Ed(c), [new Oe(a)])
};
m.Bd = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    b = this.Ed(b);
    return this.va.has(b) ? this.va.get(b) : void 0
};
m.mf = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return (b = this.Bd(b)) && b.length ? b[0] : void 0
};
m.clear = function() {
    this.va.clear()
};
m.Ed = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    return b ? b.join(",") : "key"
};
var Qe = function(a, b) {
    Pe.call(this, a, 3, b)
};
t(Qe, Pe);
Qe.prototype.Jd = function(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
    this.Gb(1, b)
};
Qe.prototype.Gb = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    d = 0;
    var e = this.mf(c);
    e && (d = e.md);
    this.eg(d + a, c)
};
var J = function() {
    jd.call(this);
    this.P = new td(this);
    this.De = this;
    this.Jc = null
};
z(J, jd);
J.prototype[pd] = !0;
m = J.prototype;
m.addEventListener = function(a, b, c, d) {
    Ad(this, a, b, c, d)
};
m.removeEventListener = function(a, b, c, d) {
    Hd(this, a, b, c, d)
};
m.dispatchEvent = function(a) {
    Re(this);
    var b = this.Jc;
    if (b) {
        var c = [];
        for (var d = 1; b; b = b.Jc) c.push(b), A(1E3 > ++d, "infinite loop")
    }
    b = this.De;
    d = a.type || a;
    if ("string" === typeof a) a = new ld(a, b);
    else if (a instanceof ld) a.target = a.target || b;
    else {
        var e = a;
        a = new ld(d, b);
        Ua(a, e)
    }
    e = !0;
    if (c)
        for (var f = c.length - 1; !a.bb && 0 <= f; f--) {
            var g = a.currentTarget = c[f];
            e = Se(g, d, !0, a) && e
        }
    a.bb || (g = a.currentTarget = b, e = Se(g, d, !0, a) && e, a.bb || (e = Se(g, d, !1, a) && e));
    if (c)
        for (f = 0; !a.bb && f < c.length; f++) g = a.currentTarget = c[f], e = Se(g, d, !1, a) &&
            e;
    return e
};
m.ca = function() {
    J.ja.ca.call(this);
    if (this.P) {
        var a = this.P,
            b = 0,
            c;
        for (c in a.F) {
            for (var d = a.F[c], e = 0; e < d.length; e++) ++b, sd(d[e]);
            delete a.F[c];
            a.nb--
        }
    }
    this.Jc = null
};
m.S = function(a, b, c, d) {
    Re(this);
    return this.P.add(String(a), b, !1, c, d)
};
m.ob = function(a, b, c, d) {
    this.P.remove(String(a), b, c, d)
};
var Se = function(a, b, c, d) {
    b = a.P.F[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.gb && g.capture == c) {
            var h = g.listener,
                k = g.l || g.src;
            g.ub && vd(a.P, g);
            e = !1 !== h.call(k, d) && e
        }
    }
    return e && !d.defaultPrevented
};
J.prototype.vc = function(a, b, c, d) {
    return this.P.vc(String(a), b, c, d)
};
J.prototype.hasListener = function(a, b) {
    return this.P.hasListener(void 0 !== a ? String(a) : void 0, b)
};
var Re = function(a) {
    A(a.P, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
};
var Te = function(a, b) {
    J.call(this);
    this.Hb = a || 1;
    this.mb = b || v;
    this.hd = x(this.qg, this);
    this.Zd = Date.now()
};
z(Te, J);
m = Te.prototype;
m.enabled = !1;
m.G = null;
m.setInterval = function(a) {
    this.Hb = a;
    this.G && this.enabled ? (this.stop(), this.start()) : this.G && this.stop()
};
m.qg = function() {
    if (this.enabled) {
        var a = Date.now() - this.Zd;
        0 < a && a < .8 * this.Hb ? this.G = this.mb.setTimeout(this.hd, this.Hb - a) : (this.G && (this.mb.clearTimeout(this.G), this.G = null), this.dispatchEvent("tick"), this.enabled && (this.stop(), this.start()))
    }
};
m.start = function() {
    this.enabled = !0;
    this.G || (this.G = this.mb.setTimeout(this.hd, this.Hb), this.Zd = Date.now())
};
m.stop = function() {
    this.enabled = !1;
    this.G && (this.mb.clearTimeout(this.G), this.G = null)
};
m.ca = function() {
    Te.ja.ca.call(this);
    this.stop();
    delete this.mb
};
var Ue = function(a, b, c) {
    if ("function" === typeof a) c && (a = x(a, c));
    else if (a && "function" == typeof a.handleEvent) a = x(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : v.setTimeout(a, b || 0)
};
var Ve = function(a) {
    this.og = a;
    this.Nb = new Map;
    this.Ze = new Set;
    this.Ec = 0;
    this.zf = 100;
    this.lf = 3E4;
    this.Ua = new Te(this.lf);
    this.Ua.S("tick", this.Qc, !1, this);
    this.ag = !1
};
m = Ve.prototype;
m.Qc = function() {
    var a = this.Nb.values();
    a = [].concat(a instanceof Array ? a : ha(n(a))).filter(function(b) {
        return b.va.size
    });
    a.length && this.og.flush(a, this.ag);
    We(a);
    this.Ec = 0;
    this.Ua.enabled && this.Ua.stop()
};
m.Ee = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.Nb.has(a) || this.Nb.set(a, new Qe(a, c))
};
m.wc = function(a) {
    return this.Ze.has(a) ? void 0 : this.Nb.get(a)
};
m.Jd = function(a, b) {
    for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
    this.Gb.apply(this, [a, 1].concat(c instanceof Array ? c : ha(n(c))))
};
m.Gb = function(a, b, c) {
    for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
    (e = this.wc(a)) && e instanceof Qe && (e.Gb(b, d), this.Mb(), this.Ec++, this.Ec >= this.zf && this.Qc())
};
m.Mb = function() {
    this.Ua.enabled || this.Ua.start()
};
var We = function(a) {
    for (var b = 0; b < a.length; b++) a[b].clear()
};
var Xe = function(a) {
    this.Za = "/client_streamz/google_sign_in_web_client/idpiframe/cookie_blocked_count";
    this.Tc = a;
    this.Tc.Ee(this.Za, {
        yd: 3,
        xd: "browser"
    }, {
        yd: 3,
        xd: "browser_version"
    })
};
Xe.prototype.Bc = function(a, b) {
    this.Tc.Jd(this.Za, a, b)
};
Xe.prototype.wc = function() {
    return this.Tc.wc(this.Za)
};
var Ye = "function" === typeof Uint8Array;

function Ze(a) {
    if (Array.isArray(a)) {
        for (var b = Array(a.length), c = 0; c < a.length; c++) {
            var d = a[c];
            null != d && (b[c] = "object" == typeof d ? Ze(A(d)) : d)
        }
        return b
    }
    if (Ye && a instanceof Uint8Array) return new Uint8Array(a);
    b = {};
    for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Ze(A(d)) : d);
    return b
};
var K = function() {
        Ha(this, K, "The message constructor should only be used by subclasses");
        A(this.constructor !== K, "Message is an abstract class and cannot be directly constructed")
    },
    $e, L = function(a, b, c, d, e) {
        a.i = null;
        $e && (b || (b = $e), $e = null);
        var f = a.constructor.Cg,
            g = a.constructor.Ag;
        g = f || g;
        b || (b = g ? [f] : []);
        a.ta = g ? 0 : -1;
        a.O = b;
        a: {
            f = a.O.length;b = -1;
            if (f && (b = f - 1, f = a.O[b], !(null === f || "object" != typeof f || Array.isArray(f) || Ye && f instanceof Uint8Array))) {
                a.Ga = b - a.ta;
                a.H = f;
                break a
            } - 1 < c ? (a.Ga = Math.max(c, b + 1 - a.ta),
                a.H = null) : a.Ga = Number.MAX_VALUE
        }
        a.zg = {};
        if (d)
            for (c = 0; c < d.length; c++) b = d[c], b < a.Ga ? (b += a.ta, a.O[b] = a.O[b] || af) : (bf(a), a.H[b] = a.H[b] || af);
        if (e && e.length)
            for (d = 0; d < e.length; d++) cf(a, e[d])
    },
    af = Object.freeze ? Object.freeze([]) : [],
    bf = function(a) {
        var b = a.Ga + a.ta;
        a.O[b] || (a.H = a.O[b] = {})
    },
    df = function(a, b) {
        if (b < a.Ga) {
            b += a.ta;
            var c = a.O[b];
            return c !== af ? c : a.O[b] = []
        }
        if (a.H) return c = a.H[b], c === af ? a.H[b] = [] : c
    },
    ef = function(a, b) {
        a = df(a, 1);
        return null == a ? b : a
    },
    M = function(a, b, c) {
        b < a.Ga ? a.O[b + a.ta] = c : (bf(a), a.H[b] = c);
        return a
    },
    ff = function(a, b, c, d) {
        (c = cf(a, c)) && c !== b && void 0 !== d && (a.i && c in a.i && (a.i[c] = void 0), M(a, c, void 0));
        M(a, b, d)
    },
    cf = function(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = df(a, f);
            null != g && (c = f, d = g, M(a, f, void 0))
        }
        return c ? (M(a, c, d), c) : 0
    },
    gf = function(a, b, c) {
        a.i || (a.i = {});
        if (!a.i[c]) {
            var d = df(a, c);
            d && (a.i[c] = new b(d))
        }
        return a.i[c]
    },
    jf = function(a, b, c) {
        a.i || (a.i = {});
        var d = c ? hf(c) : c;
        a.i[b] = c;
        return M(a, b, d)
    },
    kf = function(a, b, c) {
        a.i || (a.i = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = hf(c[e]);
        a.i[b] = c;
        return M(a, b, d)
    },
    hf = function(a) {
        if (a.i)
            for (var b in a.i) {
                var c = a.i[b];
                if (Array.isArray(c))
                    for (var d = 0; d < c.length; d++) c[d] && hf(c[d]);
                else c && hf(c)
            }
        return a.O
    };
K.prototype.Ha = Ye ? function() {
    var a = Uint8Array.prototype.toJSON;
    Uint8Array.prototype.toJSON = function() {
        return fc(this)
    };
    try {
        return JSON.stringify(this.O && hf(this), lf)
    } finally {
        Uint8Array.prototype.toJSON = a
    }
} : function() {
    return JSON.stringify(this.O && hf(this), lf)
};
var lf = function(a, b) {
    return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
};
K.prototype.toString = function() {
    return hf(this).toString()
};
K.prototype.getExtension = function(a) {
    bf(this);
    this.i || (this.i = {});
    var b = a.kf;
    return a.Bf ? a.yb ? (this.i[b] || (this.i[b] = Ka(this.H[b] || [], function(c) {
        return new a.yb(c)
    })), this.i[b]) : this.H[b] = this.H[b] || [] : a.yb ? (!this.i[b] && this.H[b] && (this.i[b] = new a.yb(this.H[b])), this.i[b]) : this.H[b]
};
K.prototype.clone = function() {
    var a = Ze(hf(this));
    $e = a;
    a = new this.constructor(a);
    $e = null;
    return a
};
var nf = function(a) {
    K.call(this);
    L(this, a, -1, mf, null)
};
t(nf, K);
var mf = [2];
var of = function(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !==
        c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};

function pf() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        r = l = 0
    }

    function b(q) {
        for (var w = g, p = 0; 64 > p; p += 4) w[p / 4] = q[p] << 24 | q[p + 1] << 16 | q[p + 2] << 8 | q[p + 3];
        for (p = 16; 80 > p; p++) q = w[p - 3] ^ w[p - 8] ^ w[p - 14] ^ w[p - 16], w[p] = (q << 1 | q >>> 31) & 4294967295;
        q = e[0];
        var y = e[1],
            u = e[2],
            D = e[3],
            Y = e[4];
        for (p = 0; 80 > p; p++) {
            if (40 > p)
                if (20 > p) {
                    var V = D ^ y & (u ^ D);
                    var ua = 1518500249
                } else V = y ^ u ^ D, ua = 1859775393;
            else 60 > p ? (V = y & u | D & (y | u), ua = 2400959708) : (V = y ^ u ^ D, ua = 3395469782);
            V = ((q << 5 | q >>> 27) & 4294967295) +
                V + Y + ua + w[p] & 4294967295;
            Y = D;
            D = u;
            u = (y << 30 | y >>> 2) & 4294967295;
            y = q;
            q = V
        }
        e[0] = e[0] + q & 4294967295;
        e[1] = e[1] + y & 4294967295;
        e[2] = e[2] + u & 4294967295;
        e[3] = e[3] + D & 4294967295;
        e[4] = e[4] + Y & 4294967295
    }

    function c(q, w) {
        if ("string" === typeof q) {
            q = unescape(encodeURIComponent(q));
            for (var p = [], y = 0, u = q.length; y < u; ++y) p.push(q.charCodeAt(y));
            q = p
        }
        w || (w = q.length);
        p = 0;
        if (0 == l)
            for (; p + 64 < w;) b(q.slice(p, p + 64)), p += 64, r += 64;
        for (; p < w;)
            if (f[l++] = q[p++], r++, 64 == l)
                for (l = 0, b(f); p + 64 < w;) b(q.slice(p, p + 64)), p += 64, r += 64
    }

    function d() {
        var q = [],
            w = 8 * r;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var p = 63; 56 <= p; p--) f[p] = w & 255, w >>>= 8;
        b(f);
        for (p = w = 0; 5 > p; p++)
            for (var y = 24; 0 <= y; y -= 8) q[w++] = e[p] >> y & 255;
        return q
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, r;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        Xe: function() {
            for (var q = d(), w = "", p = 0; p < q.length; p++) w += "0123456789ABCDEF".charAt(Math.floor(q[p] / 16)) + "0123456789ABCDEF".charAt(q[p] % 16);
            return w
        }
    }
};
var rf = function(a, b, c) {
        var d = String(v.location.href);
        return d && a && b ? [b, qf( of (d), a, c || null)].join(" ") : null
    },
    qf = function(a, b, c) {
        var d = [],
            e = [];
        if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], Ja(d, function(h) {
            e.push(h)
        }), sf(e.join(" "));
        var f = [],
            g = [];
        Ja(c, function(h) {
            g.push(h.key);
            f.push(h.value)
        });
        c = Math.floor((new Date).getTime() / 1E3);
        e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
        Ja(d, function(h) {
            e.push(h)
        });
        a = sf(e.join(" "));
        a = [c, a];
        0 == g.length || a.push(g.join(""));
        return a.join("_")
    },
    sf = function(a) {
        var b =
            pf();
        b.update(a);
        return b.Xe().toLowerCase()
    };
var tf = {};
var uf = function() {
    this.Bb = document || {
        cookie: ""
    }
};
m = uf.prototype;
m.isEnabled = function() {
    if (!v.navigator.cookieEnabled) return !1;
    if (!this.Ld()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        ae: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
m.set = function(a, b, c) {
    var d = !1;
    if ("object" === typeof c) {
        var e = c.Dg;
        d = c.Fg || !1;
        var f = c.domain || void 0;
        var g = c.path || void 0;
        var h = c.ae
    }
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === h && (h = -1);
    this.Bb.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
};
m.get = function(a, b) {
    for (var c = a + "=", d = (this.Bb.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
        f = $a(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
m.remove = function(a, b, c) {
    var d = this.rd(a);
    this.set(a, "", {
        ae: 0,
        path: b,
        domain: c
    });
    return d
};
m.na = function() {
    return vf(this).keys
};
m.Da = function() {
    return vf(this).values
};
m.Ld = function() {
    return !this.Bb.cookie
};
m.rd = function(a) {
    return void 0 !== this.get(a)
};
m.clear = function() {
    for (var a = vf(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
};
var vf = function(a) {
    a = (a.Bb.cookie || "").split(";");
    for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = $a(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return {
        keys: b,
        values: c
    }
};
var wf = function(a) {
        return !!tf.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
    },
    xf = function(a, b, c, d) {
        (a = v[a]) || (a = (new uf).get(b));
        return a ? rf(a, c, d) : null
    },
    yf = function(a, b) {
        b = void 0 === b ? !1 : b;
        var c = of (String(v.location.href)),
            d = [];
        var e = b;
        e = void 0 === e ? !1 : e;
        var f = v.__SAPISID || v.__APISID || v.__3PSAPISID || v.__OVERRIDE_SID;
        wf(e) && (f = f || v.__1PSAPISID);
        if (f) e = !0;
        else {
            var g = new uf;
            f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID");
            wf(e) && (f = f || g.get("__Secure-1PAPISID"));
            e = !!f
        }
        e && (e = (c =
            0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ? v.__SAPISID : v.__APISID, e || (e = new uf, e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? rf(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && wf(b) && ((b = xf("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = xf("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
        return 0 == d.length ? null : d.join(" ")
    };
var Af = function(a) {
    K.call(this);
    L(this, a, -1, zf, null)
};
t(Af, K);
var Cf = function(a) {
    K.call(this);
    L(this, a, -1, Bf, null)
};
t(Cf, K);
var Ef = function(a) {
    K.call(this);
    L(this, a, -1, null, Df)
};
t(Ef, K);
var Gf = function(a) {
    K.call(this);
    L(this, a, -1, null, Ff)
};
t(Gf, K);
var zf = [3, 6, 4],
    Bf = [1],
    Df = [
        [1, 2, 3]
    ],
    Ff = [
        [1, 2, 3]
    ];
var If = function(a) {
    K.call(this);
    L(this, a, -1, Hf, null)
};
t(If, K);
var Hf = [1];
var Jf = function(a, b) {
    this.name = a;
    this.value = b
};
Jf.prototype.toString = function() {
    return this.name
};
var Kf = new Jf("OFF", Infinity),
    Lf = new Jf("SEVERE", 1E3),
    Mf = new Jf("WARNING", 900),
    Nf = new Jf("INFO", 800),
    Of = new Jf("CONFIG", 700),
    Pf = new Jf("FINE", 500),
    Qf = function() {
        this.wb = 0;
        this.clear()
    },
    Rf;
Qf.prototype.clear = function() {
    this.jd = Array(this.wb);
    this.sd = -1;
    this.Md = !1
};
var Sf = function(a, b, c) {
    this.reset(a || Kf, b, c, void 0, void 0)
};
Sf.prototype.reset = function() {};
var Tf = function(a, b) {
        this.level = null;
        this.vf = [];
        this.parent = (void 0 === b ? null : b) || null;
        this.children = [];
        this.$d = {
            xc: function() {
                return a
            }
        }
    },
    Uf = function(a) {
        if (a.level) return a.level;
        if (a.parent) return Uf(a.parent);
        Da("Root logger has no level set.");
        return Kf
    },
    Vf = function(a, b) {
        for (; a;) a.vf.forEach(function(c) {
            c(b)
        }), a = a.parent
    },
    Wf = function() {
        this.entries = {};
        var a = new Tf("");
        a.level = Of;
        this.entries[""] = a
    },
    Xf, Yf = function(a, b, c) {
        var d = a.entries[b];
        if (d) return void 0 !== c && (d.level = c), d;
        d = Yf(a, b.substr(0,
            b.lastIndexOf(".")));
        var e = new Tf(b, d);
        a.entries[b] = e;
        d.children.push(e);
        void 0 !== c && (e.level = c);
        return e
    },
    Zf = function() {
        Xf || (Xf = new Wf);
        return Xf
    },
    $f = function(a, b, c) {
        var d;
        if (d = a)
            if (d = a && b) {
                d = b.value;
                var e = a ? Uf(Yf(Zf(), a.xc())) : Kf;
                d = d >= e.value
            }
        if (d) {
            b = b || Kf;
            d = Yf(Zf(), a.xc());
            "function" === typeof c && (c = c());
            Rf || (Rf = new Qf);
            e = Rf;
            a = a.xc();
            if (0 < e.wb) {
                var f = (e.sd + 1) % e.wb;
                e.sd = f;
                e.Md ? (e = e.jd[f], e.reset(b, c, a), a = e) : (e.Md = f == e.wb - 1, a = e.jd[f] = new Sf(b, c, a))
            } else a = new Sf(b, c, a);
            Vf(d, a)
        }
    },
    ag = function(a, b) {
        a &&
            $f(a, Nf, b)
    },
    N = function(a, b) {
        a && $f(a, Pf, b)
    };
var bg = function(a) {
    A(0 < a, "Initial value must be greater than zero.");
    A(3E5 >= a, "Max value should be at least as large as initial value.");
    A(!0, "Randomness factor should be between 0 and 1.");
    this.Kd = a;
    this.be = 3E5;
    this.Pa = this.ya = a;
    this.ge = .1;
    this.Ie = 2
};
bg.prototype.reset = function() {
    this.Pa = this.ya = this.Kd
};
var cg = function() {};
cg.prototype.ld = null;
var eg = function(a) {
    var b;
    (b = a.ld) || (b = {}, dg(a) && (b[0] = !0, b[1] = !0), b = a.ld = b);
    return b
};
var fg, gg = function() {};
z(gg, cg);
var hg = function(a) {
        return (a = dg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    },
    dg = function(a) {
        if (!a.Hd && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.Hd = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.Hd
    };
fg = new gg;
var O = function(a) {
    J.call(this);
    this.headers = new vc;
    this.Zb = a || null;
    this.fa = !1;
    this.Yb = this.g = null;
    this.Ya = this.Yd = this.Jb = "";
    this.pa = this.Ac = this.Fb = this.qc = !1;
    this.Ka = 0;
    this.Ub = null;
    this.ie = "";
    this.Xb = this.Rf = this.sb = !1;
    this.Xc = null
};
z(O, J);
O.prototype.m = Yf(Zf(), "goog.net.XhrIo", void 0).$d;
var ig = /^https?$/i,
    jg = ["POST", "PUT"],
    kg = [],
    lg = function(a, b, c, d, e, f, g) {
        var h = new O;
        kg.push(h);
        b && h.S("complete", b);
        h.P.add("ready", h.Re, !0, void 0, void 0);
        f && (h.Ka = Math.max(0, f));
        g && (h.sb = g);
        h.send(a, c, d, e)
    };
O.prototype.Re = function() {
    this.U();
    Ma(kg, this)
};
O.prototype.setTrustToken = function(a) {
    this.Xc = a
};
O.prototype.send = function(a, b, c, d) {
    if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.Jb + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.Jb = a;
    this.Ya = "";
    this.Yd = b;
    this.qc = !1;
    this.fa = !0;
    this.g = this.Zb ? hg(this.Zb) : hg(fg);
    this.Yb = this.Zb ? eg(this.Zb) : eg(fg);
    this.g.onreadystatechange = x(this.fe, this);
    this.Rf && "onprogress" in this.g && (this.g.onprogress = x(function(f) {
        this.ee(f, !0)
    }, this), this.g.upload && (this.g.upload.onprogress = x(this.ee, this)));
    try {
        N(this.m, P(this, "Opening Xhr")),
            this.Ac = !0, this.g.open(b, String(a), !0), this.Ac = !1
    } catch (f) {
        N(this.m, P(this, "Error opening Xhr: " + f.message));
        mg(this, f);
        return
    }
    a = c || "";
    var e = this.headers.clone();
    d && zc(d, function(f, g) {
        e.set(g, f)
    });
    d = La(e.na(), ng);
    c = v.FormData && a instanceof v.FormData;
    !(0 <= Ia(jg, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function(f, g) {
        this.g.setRequestHeader(g, f)
    }, this);
    this.ie && (this.g.responseType = this.ie);
    "withCredentials" in this.g && this.g.withCredentials !== this.sb &&
        (this.g.withCredentials = this.sb);
    if ("setTrustToken" in this.g && this.Xc) try {
        this.g.setTrustToken(this.Xc)
    } catch (f) {
        N(this.m, P(this, "Error SetTrustToken: " + f.message))
    }
    try {
        og(this), 0 < this.Ka && (this.Xb = pg(this.g), N(this.m, P(this, "Will abort after " + this.Ka + "ms if incomplete, xhr2 " + this.Xb)), this.Xb ? (this.g.timeout = this.Ka, this.g.ontimeout = x(this.re, this)) : this.Ub = Ue(this.re, this.Ka, this)), N(this.m, P(this, "Sending request")), this.Fb = !0, this.g.send(a), this.Fb = !1
    } catch (f) {
        N(this.m, P(this, "Send error: " +
            f.message)), mg(this, f)
    }
};
var pg = function(a) {
        return Qb && $b(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
    },
    ng = function(a) {
        return "content-type" == a.toLowerCase()
    };
O.prototype.re = function() {
    "undefined" != typeof qa && this.g && (this.Ya = "Timed out after " + this.Ka + "ms, aborting", N(this.m, P(this, this.Ya)), this.dispatchEvent("timeout"), this.abort(8))
};
var mg = function(a, b) {
        a.fa = !1;
        a.g && (a.pa = !0, a.g.abort(), a.pa = !1);
        a.Ya = b;
        qg(a);
        rg(a)
    },
    qg = function(a) {
        a.qc || (a.qc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
    };
O.prototype.abort = function() {
    this.g && this.fa && (N(this.m, P(this, "Aborting")), this.fa = !1, this.pa = !0, this.g.abort(), this.pa = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), rg(this))
};
O.prototype.ca = function() {
    this.g && (this.fa && (this.fa = !1, this.pa = !0, this.g.abort(), this.pa = !1), rg(this, !0));
    O.ja.ca.call(this)
};
O.prototype.fe = function() {
    this.Ba || (this.Ac || this.Fb || this.pa ? sg(this) : this.Nf())
};
O.prototype.Nf = function() {
    sg(this)
};
var sg = function(a) {
    if (a.fa && "undefined" != typeof qa)
        if (a.Yb[1] && 4 == tg(a) && 2 == ug(a)) N(a.m, P(a, "Local request error detected and ignored"));
        else if (a.Fb && 4 == tg(a)) Ue(a.fe, 0, a);
    else if (a.dispatchEvent("readystatechange"), 4 == tg(a)) {
        N(a.m, P(a, "Request complete"));
        a.fa = !1;
        try {
            if (vg(a)) a.dispatchEvent("complete"), a.dispatchEvent("success");
            else {
                try {
                    var b = 2 < tg(a) ? a.g.statusText : ""
                } catch (c) {
                    N(a.m, "Can not get status: " + c.message), b = ""
                }
                a.Ya = b + " [" + ug(a) + "]";
                qg(a)
            }
        } finally {
            rg(a)
        }
    }
};
O.prototype.ee = function(a, b) {
    A("progress" === a.type, "goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");
    this.dispatchEvent(wg(a, "progress"));
    this.dispatchEvent(wg(a, b ? "downloadprogress" : "uploadprogress"))
};
var wg = function(a, b) {
        return {
            type: b,
            lengthComputable: a.lengthComputable,
            loaded: a.loaded,
            total: a.total
        }
    },
    rg = function(a, b) {
        if (a.g) {
            og(a);
            var c = a.g,
                d = a.Yb[0] ? ra : null;
            a.g = null;
            a.Yb = null;
            b || a.dispatchEvent("ready");
            try {
                c.onreadystatechange = d
            } catch (e) {
                (a = a.m) && $f(a, Lf, "Problem encountered resetting onreadystatechange: " + e.message)
            }
        }
    },
    og = function(a) {
        a.g && a.Xb && (a.g.ontimeout = null);
        a.Ub && (v.clearTimeout(a.Ub), a.Ub = null)
    },
    vg = function(a) {
        var b = ug(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0;
                break a;
            default:
                c = !1
        }
        if (!c) {
            if (b = 0 === b) a = String(a.Jb).match(Ac)[1] || null, !a && v.self && v.self.location && (a = v.self.location.protocol, a = a.substr(0, a.length - 1)), b = !ig.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    },
    tg = function(a) {
        return a.g ? a.g.readyState : 0
    },
    ug = function(a) {
        try {
            return 2 < tg(a) ? a.g.status : -1
        } catch (b) {
            return -1
        }
    };
O.prototype.getResponseHeader = function(a) {
    if (this.g && 4 == tg(this)) return a = this.g.getResponseHeader(a), null === a ? void 0 : a
};
O.prototype.getAllResponseHeaders = function() {
    return this.g && 4 == tg(this) ? this.g.getAllResponseHeaders() || "" : ""
};
var P = function(a, b) {
    return b + " [" + a.Yd + " " + a.Jb + " " + ug(a) + "]"
};

function xg(a, b, c) {
    lg(a.url, function(d) {
        d = d.target;
        if (vg(d)) {
            try {
                var e = d.g ? d.g.responseText : ""
            } catch (f) {
                N(d.m, "Can not get responseText: " + f.message), e = ""
            }
            b(e)
        } else c(ug(d))
    }, a.Vf, a.body, a.Nc, a.rg, a.withCredentials)
};
var yg = function(a) {
    K.call(this);
    L(this, a, -1, null, null)
};
t(yg, K);
var zg = function() {
    var a = new yg,
        b = document.documentElement.getAttribute("lang");
    return M(a, 5, b)
};
yg.prototype.jb = function(a) {
    M(this, 7, a)
};
var Ag = function(a) {
    K.call(this);
    L(this, a, -1, null, null)
};
t(Ag, K);
var Cg = function(a) {
    K.call(this);
    L(this, a, 31, Bg, null)
};
t(Cg, K);
Cg.prototype.kb = function(a) {
    return M(this, 26, a)
};
var Bg = [3, 20, 27];
var Eg = function(a) {
    K.call(this);
    L(this, a, 17, Dg, null)
};
t(Eg, K);
var Fg = function(a, b) {
        return kf(a, 3, b)
    },
    Gg = function(a, b) {
        return M(a, 14, b)
    };
Eg.prototype.me = function(a) {
    jf(this, 13, a)
};
var Dg = [3, 5];
var Ig = function(a) {
    K.call(this);
    L(this, a, 6, Hg, null)
};
t(Ig, K);
var Hg = [5];
var Jg = function(a) {
    K.call(this);
    L(this, a, -1, null, null)
};
t(Jg, K);
var Kg = new function() {
    this.kf = 175237375;
    this.yb = Jg;
    this.Bf = 0
};
var Mg = function(a, b, c, d, e, f, g, h, k, l, r) {
    var q = this;
    J.call(this);
    this.Lb = a;
    this.Db = b || ra;
    this.ua = new Eg;
    this.ha = "";
    this.Hc = d;
    this.Ob = r;
    this.N = [];
    this.Ne = 1E3;
    this.Xd = "";
    this.tg = ya(nc, 0, 1);
    this.ic = e || null;
    this.Ia = c || null;
    this.Ab = g || !1;
    this.Ic = k || null;
    this.pb = this.qb = this.jc = !1;
    this.ce = this.Rc = -1;
    this.pd = !1;
    this.la = null;
    this.m = Yf(Zf(), "playlog.clearcut.ClearcutBase", void 0).$d;
    this.sb = !h;
    this.oa = null;
    this.$a = 0;
    this.bg = 1;
    this.kc = null;
    this.Qd = f || !1;
    this.sg = 0;
    this.Wb = !1;
    this.Pd = !this.Qd && (bc && $b(65) || ac &&
        $b(45) || cc && $b(12) || (Kb() || B("iPad") || B("iPod")) && Lb()) && !!window && !!window.navigator && !!window.navigator.sendBeacon;
    a = M(new Ag, 1, 1);
    f || (f = zg(), jf(a, 11, f));
    jf(this.ua, 1, a);
    M(this.ua, 2, this.Lb);
    this.ma = new bg(1E4);
    this.V = new Te(this.ma.ya);
    kd(this, ya(id, this.V));
    Ad(this.V, "tick", Qa(Lg(this, l)), !1, this);
    this.hc = new Te(6E5);
    kd(this, ya(id, this.hc));
    Ad(this.hc, "tick", Qa(Lg(this, l)), !1, this);
    this.Ab || this.hc.start();
    this.Qd || (Ad(window, "beforeunload", this.Ta, !1, this), Ad(window, "unload", this.Ta, !1, this),
        Ad(document, "visibilitychange", function() {
            "hidden" === document.visibilityState && q.Ta()
        }), Ad(document, "pagehide", this.Ta, !1, this))
};
z(Mg, J);
var Lg = function(a, b) {
    return b ? function() {
        b().then(a.flush.bind(a))
    } : a.flush
};
Mg.prototype.ca = function() {
    this.Ta();
    Mg.ja.ca.call(this)
};
var Ng = function(a) {
    a.ic || (a.ic = .01 > a.tg() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
    return a.ic
};
m = Mg.prototype;
m.Pc = function(a) {
    df(a, 1) || M(a, 1, 1);
    jf(this.ua, 1, a)
};
m.kb = function(a) {
    this.ha = a
};
m.le = function(a) {
    a ? (this.la || (this.la = new nf), a = a.Ha(), M(this.la, 4, a)) : this.la && M(this.la, 4, void 0)
};
m.me = function(a) {
    this.kc = a
};
m.pe = function(a) {
    this.oa = a
};
m.jb = function(a) {
    var b = gf(this.ua, Ag, 1),
        c = gf(b, yg, 11);
    c || (c = new yg);
    c.jb(a);
    jf(b, 11, c);
    this.Pc(b)
};
m.oe = function(a) {
    this.pd = !0;
    Og(this, a)
};
var Og = function(a, b) {
    a.ma = new bg(1 > b ? 1 : b);
    a.V.setInterval(a.ma.ya)
};
Mg.prototype.log = function(a) {
    a = a.clone();
    var b = this.bg++;
    M(a, 21, b);
    this.ha && a.kb(this.ha);
    df(a, 1) || M(a, 1, Date.now().toString());
    null != df(a, 15) || M(a, 15, 60 * (new Date).getTimezoneOffset());
    this.la && (b = this.la.clone(), jf(a, 16, b));
    for (; this.N.length >= this.Ne;) this.N.shift(), ++this.$a;
    this.N.push(a);
    this.dispatchEvent(new Pg(a));
    this.Mb()
};
Mg.prototype.Mb = function() {
    this.Ab || this.V.enabled || this.V.start()
};
Mg.prototype.flush = function(a, b) {
    var c = this;
    if (0 == this.N.length) a && a();
    else if (this.Wb) Qg(this);
    else {
        var d = Date.now();
        if (this.ce > d && this.Rc < d) ag(this.m, "Not flushing because server requested delay."), b && b("throttled");
        else {
            var e = Gg(Fg(M(this.ua.clone(), 4, Date.now().toString()), this.N), this.$a);
            this.kc && e.me(this.kc);
            d = {};
            var f = this.Db();
            f && (d.Authorization = f);
            var g = Ng(this);
            this.Ia && (d["X-Goog-AuthUser"] = this.Ia, g = Fc(g, "authuser", this.Ia));
            this.Ic && (d["X-Goog-PageId"] = this.Ic, g = Fc(g, "pageId", this.Ic));
            if (f && this.Xd == f) ag(this.m, "XHR with unauthorized request not retried"), b && b("stale-auth-token");
            else if (ag(this.m, "Flushing log to clearcut."), this.N = [], this.V.enabled && this.V.stop(), this.$a = 0, this.jc) ag(this.m, e.Ha()), d && ag(this.m, JSON.stringify(d)), a && a();
            else {
                var h = e.Ha(),
                    k;
                this.oa && this.oa.Bg(h.length) && (k = this.oa.yg(h));
                var l = {
                        url: g,
                        body: h,
                        Ke: 1,
                        Nc: d,
                        Vf: "POST",
                        withCredentials: this.sb,
                        rg: this.sg
                    },
                    r = x(function(p) {
                        this.ma.reset();
                        this.V.setInterval(this.ma.ya);
                        if (p) {
                            try {
                                var y = JSON.parse(p.replace(")]}'\n",
                                    ""));
                                var u = new Ig(y)
                            } catch (D) {
                                (p = this.m) && $f(p, Mf, "Response parse failed: " + D)
                            }
                            u && (p = ef(u, "-1"), p = Number(p), 0 < p && (this.Rc = Date.now(), this.ce = this.Rc + p), u = u.getExtension(Kg)) && (u = ef(u, -1), -1 != u && (this.pd || Og(this, u)))
                        }
                        a && a()
                    }, this),
                    q = x(function(p) {
                        e.i || (e.i = {});
                        if (!e.i[3]) {
                            var y = df(e, 3);
                            for (var u = [], D = 0; D < y.length; D++) u[D] = new Cg(y[D]);
                            e.i[3] = u
                        }
                        y = e.i[3];
                        y == af && (y = e.i[3] = []);
                        u = this.ma;
                        u.Pa = Math.min(u.be, u.Pa * u.Ie);
                        u.ya = Math.min(u.be, u.Pa + (u.ge ? Math.round(u.ge * (Math.random() - .5) * 2 * u.Pa) : 0));
                        this.V.setInterval(this.ma.ya);
                        401 == p && f && (this.Xd = f);
                        if (500 <= p && 600 > p || 401 == p || 0 == p) this.N = y.concat(this.N), this.Mb();
                        (y = this.m) && $f(y, Mf, "Flush failed. Status code: " + p);
                        b && b("net-send-failed", p)
                    }, this),
                    w = function() {
                        c.Ob ? c.Ob.send(l, r, q) : c.Hc(l, r, q)
                    };
                k ? k.then(function(p) {
                    l.Nc["Content-Encoding"] = "gzip";
                    l.Nc["Content-Type"] = "application/binary";
                    l.body = p;
                    l.Ke = 2;
                    w()
                }, function() {
                    w()
                }) : w()
            }
        }
    }
};
Mg.prototype.Ta = function() {
    this.jc || (this.qb && Qg(this), this.pb && Rg(this), this.flush())
};
var Qg = function(a) {
        ag(a.m, "Flushing log using sendBeacon.");
        Sg(a, 32, 10, function(b, c) {
            b = Fc(b, "format", "json");
            b = window.navigator.sendBeacon(b, c.Ha());
            a.Wb && !b && (a.Wb = !1);
            return b
        })
    },
    Rg = function(a) {
        ag(a.m, "Flushing log using Image GET.");
        Sg(a, 6, 5, function(b, c) {
            c = c.Ha();
            c = fc(Na(c), 3);
            c = Ec(b, "format", "base64json", "p", c);
            b = new Image;
            var d = Pa(b);
            d && "undefined" != typeof d.HTMLImageElement && (b && (b instanceof d.HTMLImageElement || !(b instanceof d.Location || b instanceof d.Element)) || Da("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                "HTMLImageElement", Oa(b)));
            c = c instanceof kb ? c : qb(c, /^data:image\//i.test(c));
            b.src = lb(c);
            return !0
        })
    },
    Sg = function(a, b, c, d) {
        if (0 != a.N.length) {
            var e = Jc(Ng(a), "format");
            e = Ec(e, "auth", a.Db(), "authuser", a.Ia || "0");
            for (var f = 0; f < c && a.N.length; ++f) {
                var g = a.N.slice(0, b),
                    h = Fg(M(a.ua.clone(), 4, Date.now().toString()), g);
                0 === f && Gg(h, a.$a);
                if (!d(e, h)) break;
                a.N = a.N.slice(g.length)
            }
            a.V.enabled && a.V.stop();
            a.$a = 0
        }
    },
    Pg = function() {
        this.type = "event-logged"
    };
z(Pg, ld);

function Tg(a) {
    this.Lb = a;
    this.Ia = "0";
    this.ud = "https://play.google.com/log?format=json&hasfast=true";
    this.Ab = !1;
    this.Cf = !0;
    this.vd = !1;
    this.Hc = xg;
    this.ha = "";
    this.af = this.pb = this.qb = !1
}
m = Tg.prototype;
m.jb = function(a) {
    this.kd = a
};
m.pe = function(a) {
    this.oa = a
};
m.kb = function(a) {
    this.ha = a;
    return this
};
m.le = function(a) {
    this.nd = a
};
m.Pc = function(a) {
    this.od = a
};
m.oe = function(a) {
    this.zd = Math.max(a, 5E3)
};
var Ug = function() {
    var a = 1609;
    a = void 0 === a ? -1 : a;
    var b = void 0 === b ? "" : b;
    var c = void 0 === c ? "" : c;
    var d = void 0 === d ? !1 : d;
    var e = void 0 === e ? "" : e;
    var f = (new Tg(a)).kb(b);
    "" != c && (f.ud = c);
    d && (f.vd = !0);
    e && f.jb(e);
    c = new Mg(f.Lb, f.Db ? f.Db : yf, f.Ia, f.Hc, f.ud, f.vd, f.Ab, void 0, void 0, void 0, f.Ob ? f.Ob : void 0);
    f.Cf || (c.jc = !0);
    f.od && c.Pc(f.od);
    f.kd && c.jb(f.kd);
    f.oa && c.pe(f.oa);
    f.ha && c.kb(f.ha);
    f.nd && c.le(f.nd);
    f.qb && (c.qb = f.qb && c.Pd);
    f.pb && (c.pb = f.pb);
    f.zd && c.oe(f.zd);
    f.af && (c.Wb = c.Pd);
    this.Lb = a;
    this.ha = b;
    this.se = c
};
Ug.prototype.flush = function(a) {
    var b = a || [];
    if (b.length) {
        a = new If;
        for (var c = [], d = 0; d < b.length; d++) {
            var e = b[d],
                f = e;
            var g = new Af;
            g = M(g, 1, f.Za);
            for (var h = f, k = [], l = 0; l < h.Cb.length; l++) k.push(h.Cb[l].xd);
            g = M(g, 3, k || []);
            h = [];
            k = [];
            l = n(f.va.keys());
            for (var r = l.next(); !r.done; r = l.next()) k.push(r.value.split(","));
            for (l = 0; l < k.length; l++) {
                r = k[l];
                var q = f.Oe;
                for (var w = f.Bd(r) || [], p = [], y = 0; y < w.length; y++) {
                    var u = w[y];
                    u = u && u.md;
                    var D = new Gf;
                    switch (q) {
                        case 3:
                            ff(D, 1, Ff[0], Number(u));
                            break;
                        case 2:
                            ff(D, 2, Ff[0], Number(u))
                    }
                    p.push(D)
                }
                q =
                    p;
                for (w = 0; w < q.length; w++) {
                    p = q[w];
                    y = new Cf;
                    p = jf(y, 2, p);
                    y = r;
                    u = [];
                    D = f;
                    for (var Y = [], V = 0; V < D.Cb.length; V++) Y.push(D.Cb[V].yd);
                    D = Y;
                    for (Y = 0; Y < D.length; Y++) {
                        V = D[Y];
                        var ua = y[Y],
                            ic = new Ef;
                        switch (V) {
                            case 3:
                                ff(ic, 1, Df[0], String(ua));
                                break;
                            case 2:
                                ff(ic, 2, Df[0], Number(ua));
                                break;
                            case 1:
                                ff(ic, 3, Df[0], "true" == ua)
                        }
                        u.push(ic)
                    }
                    kf(p, 1, u);
                    h.push(p)
                }
            }
            kf(g, 4, h);
            c.push(g);
            e.clear()
        }
        kf(a, 1, c);
        b = this.se;
        a instanceof Cg ? b.log(a) : (c = new Cg, a = a.Ha(), a = M(c, 8, a), b.log(a));
        this.se.flush()
    }
};
var Q = {
        vg: {}
    },
    R = R || {};
R.fc = "APISID";
R.ec = "SAPISID";
R.cc = "__Secure-3PAPISID";
R.$ = function(a) {
    a = encodeURIComponent(a);
    var b = R.Cd();
    if (b && (a = b.match("(^|;) ?" + a + "=([^;]*)(;|$)")) && 2 < a.length && (a = a[2])) return decodeURIComponent(a)
};
R.sc = function(a) {
    var b;
    (a = R.$(a)) && (b = String(Vg(a)));
    return b
};
R.Cd = function() {
    return document.cookie
};
R.fg = function(a) {
    document.cookie = a
};
Q = Q || {};
Q.xf = function(a, b, c, d) {
    d = void 0 === d ? !1 : d;
    if (!0 === Q.Cc) a();
    else {
        var e = 2,
            f = function() {
                e--;
                0 == e && (Q.Cc = !0, a())
            },
            g = function(h) {
                b(h)
            };
        switch (Wg()) {
            case "sessionStorage":
                Q.lb = new Xg;
                Q.lb.W(f, g);
                if (c) try {
                    Q.lb.clear()
                } catch (h) {}
                break;
            case "inMemoryStorage":
                Q.lb = new Yg;
                Q.lb.W(f, g);
                break;
            default:
                c = Error("Unsupported storage type: " + Wg());
                b(c);
                return
        }
        switch (Zg()) {
            case "localStorage":
                Q.Fa = new $g;
                Q.Fa.W(f, g);
                break;
            case "indexedDb":
                Q.Fa = new ah;
                Q.Fa.W(f, g);
                break;
            case "cookieStorage":
                Q.Fa = new bh;
                d ? f() : Q.Fa.W(f, g);
                break;
            default:
                c = Error("Unsupported storage type: " + Zg()), b(c)
        }
    }
};
Q.Fd = function() {
    if (!Q.Cc) throw Error("Storages are not initialized yet!");
    return Q.Fa
};
Q.tf = function() {
    if (!Q.Cc) throw Error("Storages are not initialized yet!");
    return Q.lb
};
var $g = function() {};
m = $g.prototype;
m.W = function(a, b) {
    He() ? (this.Ra = window.localStorage, a()) : b && b(Error("localStorage is not available in the current environment."))
};
m.getItem = function(a, b) {
    b(this.Ra.getItem(a))
};
m.setItem = function(a, b, c) {
    void 0 === b || null === b ? this.Ra.removeItem(a) : this.Ra.setItem(a, b);
    c && c()
};
m.removeItem = function(a, b) {
    this.Ra.removeItem(a);
    b && b()
};
m.clear = function(a) {
    this.Ra.clear();
    a && a()
};
var ah = function() {};
m = ah.prototype;
m.W = function(a, b) {
    var c = this,
        d = window.indexedDB.open("oauth");
    d.onsuccess = function(e) {
        c.zb = e.target.result;
        a()
    };
    d.onupgradeneeded = function(e) {
        e.target.result.createObjectStore("oauth")
    };
    d.onerror = function(e) {
        e = e.target.errorCode;
        b && b(Error("IndexedDb initialization failed: " + e))
    }
};
m.getItem = function(a, b) {
    var c = this.zb.transaction("oauth", "readwrite").objectStore("oauth").get(a);
    c.onsuccess = function() {
        b(c.result)
    }
};
m.setItem = function(a, b, c) {
    var d = this.zb.transaction("oauth", "readwrite").objectStore("oauth");
    if (void 0 === b || null === b) d["delete"](a);
    else d.put(b, a);
    d.transaction.oncomplete = function() {
        c && c()
    }
};
m.removeItem = function(a, b) {
    var c = this.zb.transaction("oauth", "readwrite").objectStore("oauth");
    c["delete"](a);
    c.transaction.oncomplete = function() {
        b && b()
    }
};
m.clear = function(a) {
    var b = this.zb.transaction("oauth", "readwrite").objectStore("oauth");
    b.clear();
    b.transaction.oncomplete = function() {
        a && a()
    }
};
var Yg = function() {};
m = Yg.prototype;
m.W = function(a) {
    this.Tb = {};
    a()
};
m.getItem = function(a, b) {
    b(this.Tb[a] || null)
};
m.setItem = function(a, b, c) {
    this.Tb[a] = b;
    c && c()
};
m.removeItem = function(a, b) {
    delete this.Tb[a];
    b && b()
};
m.clear = function(a) {
    this.Tb = {};
    a && a()
};
var Xg = function() {};
m = Xg.prototype;
m.W = function(a, b) {
    He() ? (this.ib = window.sessionStorage, a()) : b && b(Error("sessionStorage is not available in the current environment."))
};
m.getItem = function(a, b) {
    b(this.ib.getItem(a))
};
m.setItem = function(a, b, c) {
    void 0 === b || null === b ? this.ib.removeItem(a) : this.ib.setItem(a, b);
    c && c()
};
m.removeItem = function(a, b) {
    this.ib.removeItem(a);
    b && b()
};
m.clear = function(a) {
    this.ib.clear();
    a && a()
};
var bh = function() {
    this.If = S.we
};
m = bh.prototype;
m.W = function(a, b) {
    navigator.cookieEnabled ? a() : b && b(Error("Cookies are not enabled in current environment."))
};
m.getItem = function(a, b) {
    for (var c = null, d = ch(a), e = 0; e < d.length; e++)
        if (d[e].key == a) {
            c = d[e].value;
            break
        }
    b(c)
};
m.setItem = function(a, b, c) {
    var d = S.tc(a.split(S.A)[0]);
    if (d) {
        var e = dh(d);
        b = {
            key: a,
            value: b
        };
        for (var f = 0; f < e.length; f++)
            if (e[f].key == a) {
                e.splice(f, 1);
                break
            }
        e.push(b);
        eh(this, d, e)
    }
    c && c()
};
m.removeItem = function(a, b) {
    for (var c = ch(a), d = 0; d < c.length; d++)
        if (c[d].key == a) {
            c.splice(d, 1);
            break
        }(a = S.tc(a.split(S.A)[0])) && eh(this, a, c);
    b && b()
};
m.clear = function(a) {
    Q.Te();
    a && a()
};
var ch = function(a) {
        return (a = S.tc(a.split(S.A)[0])) ? dh(a) : []
    },
    dh = function(a) {
        a = R.$(a);
        return Q.We(a || null)
    },
    eh = function(a, b, c) {
        var d = Q.cf(c);
        d.length > a.If ? (c.splice(0, 1), 0 < c.length ? eh(a, b, c) : G("Failed to write Cookie based cache due to the big size.")) : Q.ne(b, d)
    };
Q.Ve = function(a) {
    try {
        return atob(a)
    } catch (b) {
        return a
    }
};
Q.bf = function(a) {
    try {
        return btoa(a)
    } catch (b) {
        return a
    }
};
Q.We = function(a) {
    if (!a) return [];
    a = Q.Ve(a);
    try {
        return I.parse(a).items || []
    } catch (b) {
        return G("Error while parsing items from cookie:" + b.message), []
    }
};
Q.cf = function(a) {
    return Q.bf(I.stringify({
        items: a
    }))
};
Q.ne = function(a, b) {
    var c = window.location.hostname,
        d = window.location.pathname;
    a = encodeURIComponent(a) + "=" + encodeURIComponent(b) + "; domain=" + c + ";"; - 1 != navigator.userAgent.toLowerCase().indexOf("msie") || Je() || (a += " path=" + d + ";");
    "https:" == window.location.protocol && (a += " secure;");
    R.fg(a)
};
Q.Te = function() {
    var a = S.ac,
        b = R.Cd();
    if (b) {
        b = b.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/);
        for (var c = 0; c < b.length; c++) {
            var d = decodeURIComponent(b[c]);
            0 == d.indexOf(a) && Q.ne(d, "")
        }
    }
};
var fh = function(a) {
    this.Td = a;
    Ne.call(this, ["storageValueChanged"])
};
H(fh, Ne);
var gh = function(a, b) {
    Q.Fd().getItem(a.Td, b)
};
fh.prototype.addListener = function(a) {
    this.addEventListener("storageValueChanged", a)
};
fh.prototype.start = function() {
    var a = this;
    gh(this, function(b) {
        a.Pf = b;
        a.de = 0;
        a.Dc = window.setInterval(hh(a), 200)
    })
};
fh.prototype.stop = function() {
    void 0 !== this.Dc && (clearInterval(this.Dc), this.Dc = void 0)
};
var hh = function(a) {
        return function() {
            a.de++;
            gh(a, function(b) {
                b != a.Pf ? (a.dispatchEvent({
                    type: "storageValueChanged",
                    key: a.Td,
                    newValue: b
                }), a.stop()) : 1500 <= a.de && a.stop()
            })
        }
    },
    Vg = function(a) {
        var b = 0,
            c;
        if (a) {
            var d = 0;
            for (c = a.length; d < c; d++) {
                var e = a.charCodeAt(d);
                b = (b << 5) - b + e;
                b |= 0
            }
        }
        return b
    },
    T = function(a) {
        return !!a && 0 <= a.indexOf(S.A)
    },
    ih = function(a, b) {
        if (!a && !b) return !0;
        if (!a || !b) return !1;
        a = a.extraQueryParams;
        b = b.extraQueryParams;
        if (!a && !b) return !0;
        if (!a || !b || Object.keys && Object.keys(a).length != Object.keys(b).length) return !1;
        for (var c in a)
            if (a[c] !== b[c]) return !1;
        if (!Object.keys)
            for (c in b)
                if (a[c] !== b[c]) return !1;
        return !0
    },
    S = S || {};
S.ve = 100;
S.ed = "/oauth2/sessionstate/action/updateState";
S.Zc = "/oauth2/sessionstate/action/checkOrigin";
S.cd = "/oauth2/permission/action/refresh";
S.bd = "/oauth2/permission/action/code";
S.dc = "/oauth2/permission/action/listSessions";
S.Be = "/o/oauth2/revoke";
S.tb = "response_type login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes nonce".split(" ");
S.ye = "login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes".split(" ");
S.ze = "client_id origin scope ss_domain authuser hd enable_serial_consent".split(" ");
S.A = "::";
S.bc = "_ss_";
S.ad = "_tr_";
S.Na = "oauth2_ss";
S.$c = "oauth2_cs";
S.dd = "oauth2_tr";
S.xe = "oauth2_is";
S.Ma = "oauth2_ar";
S.ac = "oauth2c_";
S.we = 1500;
S.ug = function() {
    var a = {
            bc: 1,
            ad: 2,
            Na: 3,
            $c: 4,
            dd: 5,
            Ma: 6
        },
        b;
    for (b in a)
        if (a = S[b], !a || 0 <= a.indexOf(S.A)) throw "Invalid value for 'oauth2.spi." + b + "'.";
};
S.ug();
S.Ae = 512;
S.Fe = function(a) {
    var b;
    (b = void 0 === a.hint) || (b = a.hint, b = ("" === b ? !0 : b ? "string" == typeof b || "object" == typeof b && b.constructor === String : !1) && a.hint.length <= S.Ae);
    return !a.id && b
};
S.rf = function() {
    var a = R.$("https:" == window.location.protocol ? R.ec : R.fc);
    a || (a = R.$(R.cc));
    return a
};
S.tc = function(a) {
    switch (a) {
        case S.Ma:
            return S.ac + S.Ma;
        case S.Na:
            return S.ac + S.Na;
        default:
            return null
    }
};
var Zg = function() {
        return (Me() || Ke()) && !He() || Je() && !window.indexedDB ? "cookieStorage" : Je() ? "indexedDb" : "localStorage"
    },
    Wg = function() {
        return !Me() && !Ke() || He() ? "sessionStorage" : "inMemoryStorage"
    };
R = R || {};
R.$b = "cookieValueChanged";
var jh = function(a) {
    this.yf = a;
    Ne.call(this, [R.$b])
};
H(jh, Ne);
jh.prototype.$ = function() {
    return R.$(R.fc) || R.$(R.ec) || R.$(R.cc)
};
var kh = function() {
    return R.sc(R.fc) || R.sc(R.ec) || R.sc(R.cc)
};
jh.prototype.addListener = function(a) {
    this.addEventListener(R.$b, a)
};
var nh = function(a) {
        lh(a);
        a.Pb = a.$();
        a.G = window.setInterval(mh(a), a.yf);
        G("IDP Session Cookie monitor is started.")
    },
    lh = function(a) {
        void 0 !== a.G && (window.clearInterval(a.G), a.G = void 0, G("IDP Session Cookie monitor is stoped."))
    },
    mh = function(a) {
        return function() {
            var b = a.$();
            if (a.Pb != b) {
                var c = {
                    type: R.$b,
                    newHash: b && Vg(b),
                    oldHash: a.Pb && Vg(a.Pb)
                };
                a.Pb = b;
                a.dispatchEvent(c)
            }
        }
    },
    oh = function(a) {
        this.j = a;
        this.te = void 0
    },
    ph = function(a, b, c) {
        var d = S.Be,
            e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (4 ==
                e.readyState && 200 == e.status) {
                var h;
                e.responseText && (h = I.parse(e.responseText));
                c(h)
            } else 4 == e.readyState && 0 == e.status ? c({
                error: "network_error"
            }) : 4 == e.readyState && c({
                error: "server_error",
                error_subtype: e.responseText
            })
        };
        e.open("POST", d, !0);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var f = "xsrfToken=";
        a.te && (f += a.te);
        if (b)
            for (var g in b) g && b[g] && (f += "&" + g + "=" + encodeURIComponent(b[g]));
        G("Call " + d + " with postData: " + f);
        e.send(f)
    },
    qh = function(a, b, c, d) {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (4 == e.readyState && 200 == e.status) {
                var g;
                if (e.responseText && (g = I.parse(e.responseText))) {
                    var h = g;
                    if (h.error) {
                        h.thrown_by = "server";
                        try {
                            h.error = h.error.toLowerCase()
                        } catch (k) {}
                    }
                }
                d(g)
            } else 4 == e.readyState && 0 == e.status ? d({
                error: "network_error"
            }) : 4 == e.readyState && d({
                error: "server_error",
                error_subtype: e.responseText
            })
        };
        if (b = De(b)) a += 0 > a.indexOf("?") ? "?" : "&", a += b;
        e.open("GET", a, !0);
        e.setRequestHeader("X-Requested-With", "XmlHttpRequest");
        if (c)
            for (var f in c)
                if (c.hasOwnProperty(f)) {
                    b =
                        c[f];
                    if (null === b || void 0 === b) b = "";
                    e.setRequestHeader(f, b)
                }
        G("Call " + a + " with Get method.");
        e.send()
    },
    rh = function(a, b, c) {
        qh(S.Zc, {
            origin: a.j,
            client_id: b
        }, null, c)
    },
    sh = function(a, b, c) {
        b && b.length ? qh(S.ed, {
            login_hint: b.join(" "),
            origin: a.j
        }, null, c) : c({
            activeHints: {}
        })
    },
    uh = function(a, b, c) {
        b.origin = a.j;
        0 > S.tb.indexOf("enable_serial_consent") && S.tb.push("enable_serial_consent");
        b = th(b, S.tb);
        qh(S.cd, b, null, c)
    },
    vh = function(a, b, c) {
        b.origin = a.j;
        b = th(b, S.ye);
        qh(S.bd, b, null, c)
    },
    wh = function(a, b, c) {
        b.origin = a.j;
        b = th(b, S.ze);
        qh(S.dc, b, null, c)
    },
    xh = function(a, b, c) {
        ph(a, {
            token: b
        }, c)
    },
    th = function(a, b) {
        for (var c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            void 0 !== a[e] && null !== a[e] && (c[e] = a[e])
        }
        return c
    };
Q = Q || {};
var yh = function() {};
yh.prototype.M = function() {
    return !1
};
var zh = {};
Q.Sf = function() {
    var a = new Ah;
    if (!a) throw "policy cannot be empty.";
    if (Q.Nd("DEFAULT")) throw "Duplicate policyName [DEFAULT].";
    zh.DEFAULT = a
};
Q.Nd = function(a) {
    for (var b in zh)
        if (a == b) return !0;
    return !1
};
Q.Dd = function(a) {
    return a && Q.Nd(a) ? a : "DEFAULT"
};
Q.nf = function(a) {
    return zh[Q.Dd(a)]
};
Q.M = function(a, b, c, d) {
    return Q.nf(d).M(a, b, c)
};
Q.xg = function(a, b, c, d) {
    if (!Q.M(a, b, c, d)) throw "permission_error";
};
var Bh = function() {};
H(Bh, yh);
Bh.prototype.M = function(a, b, c) {
    a = c ? this.yc(a) : this.zc(a);
    return 0 <= Be(a, b)
};
Bh.prototype.zc = function(a) {
    var b = [];
    if (a && (b.push(a), "http://" == a.substring(0, 7) || "https://" == a.substring(0, 8))) {
        var c = document.createElement("a");
        c.href = a;
        a != c.protocol + "//" + c.hostname && b.push(c.protocol + "//" + c.hostname);
        "https:" == c.protocol && b.push("http://" + c.hostname)
    }
    return b
};
Bh.prototype.yc = function(a) {
    var b = [];
    if (a) {
        b.push(a);
        var c = document.createElement("a");
        c.href = a;
        if ("http:" == c.protocol || "https:" == c.protocol)
            for (a = c.hostname.split("."); 1 < a.length;) b.push(c.protocol + "//" + a.join(".")), "https:" == c.protocol && b.push("http://" + a.join(".")), a.shift()
    }
    return b
};
var Ah = function() {};
H(Ah, yh);
Ah.prototype.M = function(a, b, c) {
    a = c ? this.yc(a) : this.zc(a);
    return 0 <= Be(a, b)
};
Ah.prototype.zc = function(a) {
    var b = [];
    if (a && (b.push(a), "https://" == a.substring(0, 8))) {
        var c = document.createElement("a");
        c.href = a;
        "" != c.port && 0 != c.port && 443 != c.port || b.push("http://" + c.hostname)
    }
    return b
};
Ah.prototype.yc = function(a) {
    var b = [];
    if (a) {
        var c = document.createElement("a");
        c.href = a;
        if ("https:" == c.protocol && ("" == c.port || 0 == c.port || 443 == c.port) || "http:" == c.protocol && ("" == c.port || 0 == c.port || 80 == c.port))
            for (a = c.hostname.split("."); 1 < a.length;) b.push(c.protocol + "//" + a.join(".")), "https:" == c.protocol && b.push("http://" + a.join(".")), a.shift();
        else b.push(a)
    }
    return b
};
Q.Sf();
var Ch = function() {};
Ch.prototype.Fc = function() {
    return !0
};
var U = function(a) {
    return a.Fc() ? Q.tf() : Q.Fd()
};
Ch.prototype.u = function() {
    throw Error("unimplemented abstract method");
};
Ch.prototype.Ca = function() {
    throw Error("unimplemented abstract method");
};
Ch.prototype.J = function() {
    throw Error("unimplemented abstract method");
};
Ch.prototype.K = function() {
    throw Error("unimplemented abstract method");
};
var W = function() {};
H(W, Ch);
W.prototype.J = function(a, b, c) {
    var d = this,
        e = this.u(a);
    U(this).getItem(e, function(f) {
        if (f) try {
            var g = I.parse(f);
            if (g.cookieHash != b) {
                U(d).removeItem(e, function() {
                    c(void 0)
                });
                return
            }
            var h = g && g.cachedValue
        } catch (k) {}
        c(h)
    })
};
W.prototype.K = function(a, b, c, d) {
    a = this.u(a);
    void 0 === b || null === b ? U(this).removeItem(a, d) : (b = I.stringify({
        cookieHash: c,
        cachedValue: b
    }), U(this).setItem(a, b, d))
};
var Dh = function() {};
H(Dh, Ch);
Dh.prototype.J = function(a, b, c) {
    U(this).getItem(this.u(a), function(d) {
        if (d) try {
            var e = I.parse(d);
            var f = e && e.cachedValue
        } catch (g) {}
        c(f)
    })
};
Dh.prototype.K = function(a, b, c, d) {
    a = this.u(a);
    void 0 === b || null === b ? U(this).removeItem(a, d) : (b = I.stringify({
        cachedValue: b
    }), U(this).setItem(a, b, d))
};
var Eh = function() {};
H(Eh, Dh);
Eh.prototype.Fc = function() {
    return !1
};
Eh.prototype.u = function(a) {
    return [S.Ma, a.origin, a.clientId, a.id].join(S.A)
};
Eh.prototype.Ca = function(a) {
    var b = {};
    a && (a = a.split(S.A), 4 == a.length && (b.origin = a[1], b.clientId = a[2], b.id = a[3]));
    return b
};
var Fh = function() {};
H(Fh, W);
Fh.prototype.u = function(a) {
    return [S.$c, a.origin, a.clientId].join(S.A)
};
Fh.prototype.Ca = function(a) {
    a = a.split(S.A);
    var b = {};
    3 == a.length && (b.origin = a[1], b.clientId = a[2]);
    return b
};
var Gh = function() {};
H(Gh, W);
Gh.prototype.u = function(a) {
    return [S.xe, a.origin, a.clientId].join(S.A)
};
Gh.prototype.J = function(a, b, c) {
    var d = this;
    W.prototype.J.call(this, a, b, function(e) {
        e && e.expires_at ? 6E4 > e.expires_at - (new Date).getTime() ? U(d).removeItem(d.u(a), c) : Ge(e.scope, a.scope) && Ge(a.scope, e.scope) ? (e.expires_in = Math.floor((e.expires_at - (new Date).getTime()) / 1E3), c && c(e)) : U(d).removeItem(d.u(a), c) : c && c(void 0)
    })
};
Gh.prototype.K = function(a, b, c, d) {
    var e;
    b && b.expires_at && 18E4 < b.expires_at - (new Date).getTime() && (e = b);
    W.prototype.K.call(this, a, e, c, d)
};
var Hh = function() {};
H(Hh, Dh);
Hh.prototype.Fc = function() {
    return !1
};
Hh.prototype.u = function(a) {
    return [S.Na, a.domain, a.crossSubDomains ? "1" : "0", Q.Dd(a.policy), a.id || S.bc].join(S.A)
};
Hh.prototype.Ca = function(a) {
    a = a.split(S.A);
    var b = {};
    5 == a.length && (b.domain = a[1], b.crossSubDomains = "1" == a[2], b.policy = a[3], b.id = a[4]);
    "DEFAULT" == b.policy && delete b.policy;
    b.id == S.bc && delete b.id;
    return b
};
var Ih = function(a) {
    this.Of = a || S.dd
};
H(Ih, W);
Ih.prototype.u = function(a) {
    return [this.Of, a.origin, a.clientId, a.id || S.ad].join(S.A)
};
Ih.prototype.J = function(a, b, c) {
    var d = this;
    W.prototype.J.call(this, a, b, function(e) {
        e && e.La && e.La.expires_at ? a.loginHint != e.La.login_hint ? U(d).removeItem(d.u(a), c) : 6E4 > e.La.expires_at - (new Date).getTime() ? U(d).removeItem(d.u(a), c) : Ge(e.La.scope, a.scope) ? Ge(e.responseType, a.responseType) ? (e = e.La, e.expires_in = Math.floor((e.expires_at - (new Date).getTime()) / 1E3), c && c(e)) : U(d).removeItem(d.u(a), c) : U(d).removeItem(d.u(a), c) : c && c(void 0)
    })
};
Ih.prototype.K = function(a, b, c, d) {
    var e;
    b && b.expires_at && 18E4 < b.expires_at - (new Date).getTime() && (e = {
        La: b,
        responseType: a.responseType
    });
    W.prototype.K.call(this, a, e, c, d)
};
var Jh = function(a, b) {
        this.j = a;
        this.Oc = b;
        this.pc = !1;
        this.fb = {};
        this.eb = {};
        this.cb = {}
    },
    Kh = function(a, b) {
        if (!b) throw "message object cannot be null.";
        b.rpcToken = a.Oc;
        b = I.stringify(b);
        G("IDP IFrame sends message: " + b);
        window.parent.postMessage(b, a.j)
    },
    X = function(a, b, c) {
        b && Kh(a, {
            id: b,
            result: c
        })
    };
Jh.prototype.Qf = function(a) {
    if (a.source == window.parent && a.origin == this.j) {
        G("IDP Session State IFrame receive message:" + a.data);
        try {
            var b = I.parse(a.data)
        } catch (d) {
            return
        }
        if ((b.rpcToken || this.Oc) && b.rpcToken != this.Oc) G("RPC token mismatch.");
        else if (b && b.method && ("showDialog" == b.method || this.fb[b.method]))
            if ("showDialog" == b.method)
                if (this.pc) Kh(this, {
                    id: b.id,
                    error: "dialog_already_displayed"
                });
                else if (a = b.params, b.id && a && a.dialogType && this.cb[a.dialogType]) {
            var c = this.cb[a.dialogType];
            c.C && !c.C(a) ?
                (G("Bad request."), Kh(this, {
                    id: b.id,
                    error: "bad_request"
                })) : c.l(b)
        } else G("Bad dialog request.");
        else a = this.fb[b.method], a.aa && !b.id ? G("Bad request.") : a.C && !a.C(b) ? (G("Bad request."), Kh(this, {
            id: b.id,
            error: "bad_request"
        })) : a.l(b);
        else G("Bad request.")
    }
};
var Lh = function(a, b) {
        if (b && b.type && a.eb[b.type]) {
            var c = a.eb[b.type].filter;
            c && !c(b) || Kh(a, {
                method: "fireIdpEvent",
                params: b
            })
        } else G("Invalid event type.")
    },
    Mh = function(a) {
        Lh(a, {
            type: "displayIFrame",
            wf: !1,
            options: {
                fullScreen: !0
            }
        });
        a.pc = !0
    },
    Nh = function(a) {
        Lh(a, {
            type: "displayIFrame",
            wf: !0
        });
        a.pc = !1
    },
    Oh = function(a, b) {
        a.fb = {};
        a.eb = {};
        a.cb = {};
        if (b) {
            if (b.I)
                for (var c = 0; c < b.I.length; c++) {
                    var d = b.I[c];
                    if (!d.method || !d.l) throw "Error in RPC policy: method or handler is empty.";
                    if (a.fb[d.method]) throw "Error in RPC policy: duplicate entry for RPC '" +
                        d.method + "'.";
                    var e = d.method;
                    a.fb[e] = {
                        l: d.l,
                        aa: d.aa,
                        C: d.C,
                        method: e
                    }
                }
            if (b.Z)
                for (c = 0; c < b.Z.length; c++) {
                    d = b.Z[c];
                    if (!d.type) throw "Error in Event policy: type is empty.";
                    if (a.eb[d.type]) throw "Error in Event policy: duplicate entry for type '" + d.type + "'.";
                    e = d.type;
                    a.eb[e] = {
                        filter: d.filter,
                        type: e
                    }
                }
            if (b.za)
                for (c = 0; c < b.za.length; c++) {
                    d = b.za[c];
                    if (!d.Aa) throw "Error in Dialog policy: dialogType is empty.";
                    if (a.cb[d.Aa]) throw "Error in Dialog policy: duplicate entry for dialogType '" + d.Aa + "'.";
                    e = d.Aa;
                    a.cb[e] = {
                        Aa: e,
                        l: d.l,
                        C: d.C
                    }
                }
        }
    },
    Ph = function(a, b, c, d) {
        Lh(a, {
            type: "sessionStateChanged",
            clientId: b,
            user: c,
            sessionState: d
        })
    },
    Qh = function(a) {
        var b = new Hh,
            c = S.Na + S.A;
        return function(d) {
            if (d.key && 0 === d.key.indexOf(c)) {
                var e = b.Ca(d.key);
                if (Q.M(a.j, e.domain, e.crossSubDomains, e.policy)) {
                    var f;
                    if (d.newValue) try {
                        var g = I.parse(d.newValue);
                        g && (f = g.cachedValue)
                    } catch (h) {
                        return
                    }
                    Lh(a, {
                        type: "sessionSelectorChanged",
                        newValue: f,
                        crossSubDomains: e.crossSubDomains,
                        domain: e.domain,
                        policy: e.policy,
                        id: e.id
                    })
                }
            }
        }
    },
    Rh = function(a) {
        var b =
            new Eh,
            c = [S.Ma, a.j].join(S.A) + S.A;
        return function(d) {
            if (!d.key && Ie()) {
                var e = null,
                    f = [];
                for (d = 0; d < window.localStorage.length; d++) {
                    var g = window.localStorage.key(d);
                    if (0 === g.indexOf(c))
                        if (e) f.push(g);
                        else {
                            var h = window.localStorage.getItem(g);
                            f.push(g);
                            if (h) {
                                try {
                                    var k = I.parse(h)
                                } catch (l) {
                                    continue
                                }
                                k && k.cachedValue && (e = b.Ca(g), e = {
                                    type: "authResult",
                                    clientId: e.clientId,
                                    id: e.id,
                                    authResult: k.cachedValue
                                })
                            }
                        }
                }
                for (d = 0; d < f.length; d++) window.localStorage.removeItem(f[d]);
                (k = e) && Lh(a, k)
            } else if (d.key && 0 === d.key.indexOf(c) &&
                d.newValue) {
                try {
                    f = I.parse(d.newValue)
                } catch (l) {
                    return
                }
                f && f.cachedValue && (k = b.Ca(d.key), k = {
                    type: "authResult",
                    clientId: k.clientId,
                    id: k.id,
                    authResult: f.cachedValue
                }, Lh(a, k))
            }
        }
    },
    Sh = function(a, b) {
        this.j = a;
        this.ka = b;
        this.qd = new Fh;
        this.ke = new Hh;
        this.Wc = new Ih;
        this.Gd = new Gh
    },
    Th = function(a, b, c, d, e) {
        a.qd.K({
            origin: a.j,
            clientId: b
        }, {
            user: c.Y,
            session: c.Y ? c.ra : void 0
        }, d, e)
    },
    Uh = function(a, b, c) {
        a.qd.J({
            origin: a.j,
            clientId: b
        }, kh(), c)
    },
    Vh = function(a, b, c, d, e, f, g) {
        a.Wc.J({
            loginHint: b,
            origin: a.j,
            clientId: c,
            responseType: d,
            scope: e,
            id: f
        }, kh(), g)
    },
    Wh = function(a, b, c, d, e, f, g) {
        a.Wc.K({
            origin: a.j,
            clientId: c,
            responseType: d,
            id: f
        }, e, b, g)
    },
    Xh = function(a, b, c) {
        var d = a.Wc;
        a = {
            origin: a.j,
            clientId: b
        };
        U(d).removeItem(d.u(a), c)
    },
    Yh = function(a, b, c, d, e, f) {
        if (!a.M(b, c, e)) throw "Permission denied for '" + a.j + "' to read session selector for domain '" + b + "'.";
        a.ke.J({
            domain: b,
            crossSubDomains: c,
            policy: e,
            id: d
        }, void 0, function(g) {
            f && f(g)
        })
    },
    Zh = function(a, b, c, d, e, f, g) {
        if (!a.M(b, c, f)) throw "Permission denied for '" + a.j + "' to write session selector for domain '" +
            b + "'.";
        a.ke.K({
            domain: b,
            crossSubDomains: c,
            policy: f,
            id: e
        }, d, void 0, g)
    };
Sh.prototype.M = function(a, b, c) {
    return Q.M(this.j, a, b, c)
};
var $h = function(a, b, c, d) {
        a.Gd.J({
            origin: a.j,
            clientId: b,
            scope: c
        }, kh(), d)
    },
    ai = function(a, b, c, d, e) {
        a.Gd.K({
            origin: a.j,
            clientId: c
        }, d, b, e)
    },
    bi = function(a, b, c) {
        this.wa = a;
        this.h = b;
        this.s = c
    },
    ci = function(a, b, c) {
        a.Y ? c && void 0 !== c[a.Y] ? (c = c[a.Y], ih(a.ra, c) || (a.ra = c, Th(a.s, a.wa, a, b, function() {
            Ph(a.h, a.wa, a.Y, a.ra)
        }))) : a.ra && (a.ra = void 0, Th(a.s, a.wa, a, b, function() {
            Ph(a.h, a.wa, a.Y, void 0)
        })) : b && Ph(a.h, a.wa, a.Y, void 0)
    },
    ei = function(a, b, c, d) {
        this.ka = a;
        this.h = b;
        this.X = c;
        this.s = d;
        this.ab = void 0;
        this.L = {};
        this.Sc = [];
        var e = this;
        this.ka.addListener(function(f) {
            di(e, f)
        })
    },
    fi = function(a) {
        var b = [],
            c;
        for (c in a.L) {
            var d = a.L[c].Y;
            d && b.push(d)
        }
        return b
    },
    di = function(a, b) {
        if (b.newHash) sh(a.X, fi(a), function(d) {
            for (var e in a.L) ci(a.L[e], b.newHash, d && d.activeHints)
        });
        else
            for (var c in a.L) ci(a.L[c], b.newHash, void 0)
    },
    gi = function(a, b, c, d, e) {
        var f = a.L[b];
        f || (f = new bi(b, a.h, a.s), a.L[b] = f);
        a = f;
        b = c.login_hint;
        c = c.session_state;
        a.Y != b ? (a.Y = b, a.ra = b ? c : void 0, Th(a.s, a.wa, a, d, e)) : e && e()
    },
    hi = function(a, b, c) {
        var d = a.L[b];
        d ? c(!0) : Uh(a.s,
            b,
            function(e) {
                e ? (d = new bi(b, a.h, a.s), a.L[b] = d, d.Y = e.user, d.ra = e.session, c(!0)) : rh(a.X, b, function(f) {
                    f && f.valid ? (f = new bi(b, a.h, a.s), a.L[b] = f, Th(a.s, b, f, kh(), function() {
                        c(!0)
                    })) : c(!1)
                })
            })
    },
    ii = function(a, b) {
        Je() || Le() ? a.Sc.push(b) : Fe(Ie() ? document : window, "storage", b)
    },
    ji = function(a, b, c, d) {
        this.j = a;
        this.Se = c;
        this.pg = void 0 === d ? !1 : d;
        this.h = new Jh(a, b);
        this.ka = new jh(S.ve);
        this.X = new oh(a);
        this.s = new Sh(a, this.ka);
        this.ba = new ei(this.ka, this.h, this.X, this.s)
    };
m = ji.prototype;
m.start = function() {
    var a = this,
        b = function() {
            a.h.Qf.apply(a.h, arguments)
        },
        c = function() {
            Lh(a.h, {
                type: "idpReady",
                cookieDisabled: !navigator.cookieEnabled
            });
            G("Initialize IDP IFrame successfully.")
        },
        d = function(e) {
            var f = window;
            if (f.removeEventListener) f.removeEventListener("message", b, !1);
            else if (f.detachEvent) f.detachEvent("onmessage", b);
            else throw "Remove event handler for message failed.";
            lh(a.ka);
            Lh(a.h, {
                type: "idpError",
                error: e.message
            })
        };
    try {
        Oh(this.h, this.createPolicy()), Fe(window, "message", b), ii(this.ba,
            Qh(this.h)), ii(this.ba, Rh(this.h)), nh(this.ka), Q.xf(c, d, this.Se, this.pg)
    } catch (e) {
        d(e)
    }
};
m.Jf = function(a) {
    var b = this;
    hi(this.ba, (a.params || {}).clientId, function(c) {
        X(b.h, a.id, c)
    })
};
m.jf = function(a) {
    var b = a.params || {},
        c = this,
        d = function(q) {
            X(c.h, a.id, q)
        },
        e = b.clientId,
        f = b.loginHint,
        g = b.request,
        h = b.sessionSelector;
    g.client_id = e;
    g.login_hint = f;
    g.ss_domain = h.domain;
    var k = kh();
    if (k) {
        var l = !!g.enable_serial_consent,
            r = function(q) {
                q && !q.error && q.login_hint ? (q.first_issued_at = (new Date).getTime(), q.expires_at = q.first_issued_at + 1E3 * q.expires_in, q.session_state || (q.session_state = {}), l || q.scope || (q.scope = g.scope), b.skipCache ? gi(c.ba, e, q, k, function() {
                    d(q)
                }) : Wh(c.s, k, e, g.response_type, q, b.id,
                    function() {
                        gi(c.ba, e, q, k, function() {
                            d(q)
                        })
                    })) : (q = q || {}, d(q))
            };
        b.forceRefresh ? uh(this.X, g, r) : Vh(this.s, f, e, g.response_type, g.scope, b.id, function(q) {
            q && 18E4 < q.expires_at - (new Date).getTime() ? gi(c.ba, e, q, k, function() {
                d(q)
            }) : uh(c.X, g, r)
        })
    } else X(c.h, a.id, {
        error: "user_logged_out"
    }), b.userInteracted && (f = ki(), li(f).Bc(), f.flush())
};
m.pf = function(a) {
    var b = this,
        c = function(g) {
            X(b.h, a.id, g)
        };
    if (kh()) {
        var d = a.params || {},
            e = d.request,
            f = d.sessionSelector;
        e.client_id = d.clientId;
        e.login_hint = d.loginHint;
        e.ss_domain = f.domain;
        vh(this.X, e, c)
    } else c({
        error: "user_logged_out"
    })
};
m.Yf = function(a) {
    var b = a.params || {},
        c = b.clientId,
        d = this;
    xh(this.X, b.token, function(e) {
        Xh(d.s, c, function() {
            X(d.h, a.id, e)
        })
    })
};
m.mg = function(a) {
    if (Je() || Le()) {
        var b = a.params || {},
            c = (new Eh).u({
                clientId: b.clientId,
                id: b.id,
                origin: b.origin
            });
        b = this.ba;
        if (Je() || Le()) {
            b.ab && b.ab.stop();
            b.ab = new fh(c);
            for (c = 0; c < b.Sc.length; c++) b.ab.addListener(b.Sc[c]);
            b.ab.start()
        }
    }
    X(this.h, a.id, !0)
};
m.hf = function(a) {
    var b = this,
        c = a.params || {};
    Yh(this.s, c.domain, c.crossSubDomains, c.id, c.policy, function(d) {
        X(b.h, a.id, d)
    })
};
m.gg = function(a) {
    var b = a.params || {},
        c = b.hint,
        d = !!b.disabled,
        e = b.domain,
        f = b.crossSubDomains,
        g = b.id,
        h = b.policy,
        k = this;
    if (c || d) var l = {
        hint: c,
        disabled: d
    };
    Zh(this.s, e, f, l, g, h, function() {
        Lh(k.h, {
            type: "sessionSelectorChanged",
            newValue: l,
            domain: e,
            crossSubDomains: f,
            id: g,
            policy: h
        });
        X(k.h, a.id, !0)
    })
};
m.Ff = function(a) {
    var b = a.params || {},
        c = this,
        d = function(l) {
            X(c.h, a.id, l)
        },
        e = b.clientId,
        f = b.request,
        g = b.sessionSelector;
    f.client_id = e;
    f.response_type = "id_token";
    f.ss_domain = g.domain;
    var h = kh();
    if (h) {
        var k = function(l) {
            l && !l.error ? (l.first_issued_at = (new Date).getTime(), l.expires_at = l.first_issued_at + 1E3 * l.expires_in, l.scope = f.scope, ai(c.s, h, e, l, function() {
                d(l)
            })) : (l = l || {
                error: "No response returned from Server."
            }, d(l))
        };
        b.forceRefresh ? wh(this.X, f, k) : $h(this.s, e, f.scope, function(l) {
            l ? d(l) : wh(c.X, f, k)
        })
    } else d({
        scope: f.scope,
        sessions: []
    })
};
m.Pe = function(a) {
    if (document.hasStorageAccess && Ce(document.hasStorageAccess)) {
        var b = this;
        document.hasStorageAccess().then(function(c) {
            X(b.h, a.id, {
                hasAccess: c
            })
        }, function(c) {
            G("CheckStorageAccess failed: " + c);
            X(b.h, a.id, {
                hasAccess: !1
            })
        })
    } else X(this.h, a.id, {
        hasAccess: !0
    })
};
m.Kf = function(a) {
    a = a && a.params || {};
    return a.clientId && !T(a.clientId)
};
m.uf = function(a) {
    var b = a && a.params || {};
    a = b.loginHint;
    var c = !T(b.id),
        d = b.clientId && !T(b.clientId),
        e = !!b.request,
        f = e && b.request.scope;
    (b = (e = e && b.request.response_type) && 0 <= b.request.response_type.indexOf("code")) && G("Bad request: 'code' response_type is not supported.");
    return a && c && d && f && e && !b
};
m.qf = function(a) {
    a = a && a.params || {};
    var b = !T(a.id),
        c = a.clientId && !T(a.clientId),
        d = !!a.request && a.request.scope;
    return a.loginHint && b && c && d
};
m.sf = function(a) {
    a = a && a.params || {};
    var b = a.domain && !T(a.domain),
        c = !T(a.policy);
    return !T(a.id) && b && c && this.s.M(a.domain, !!a.crossSubDomains, a.policy)
};
m.hg = function(a) {
    a = a && a.params || {};
    var b = a.domain && !T(a.domain),
        c = !T(a.policy);
    return !T(a.id) && b && c && this.s.M(a.domain, !!a.crossSubDomains, a.policy) && S.Fe(a)
};
m.Gf = function(a) {
    a = a && a.params || {};
    var b = a.clientId && !T(a.clientId),
        c = !!a.request && a.request.scope;
    return !T(a.id) && b && c
};
m.Zf = function(a) {
    a = a && a.params || {};
    var b = !!a.token,
        c = a.clientId && !T(a.clientId);
    return !T(a.id) && b && c
};
m.ng = function(a) {
    a = a && a.params || {};
    var b = a.origin && !T(a.origin),
        c = a.id && !T(a.id);
    return a.clientId && !T(a.clientId) && b && c
};
m.dg = function(a) {
    var b;
    if (b = a.clientId) a = a.clientId, b = !(!a || !this.ba.L[a]);
    return b
};
m.He = function(a) {
    var b;
    if (b = a.clientId) b = a.clientId, b = !(!b || !this.ba.L[b]);
    return b && a.id && a.authResult
};
m.$e = function(a) {
    return !!a.hide || !!a.options
};
m.cg = function(a) {
    return a.domain && this.s.M(a.domain, a.crossSubDomains, a.policy)
};
var Z = function(a, b) {
    return function() {
        return b.apply(a, arguments)
    }
};
ji.prototype.createPolicy = function() {
    var a = {
        I: [],
        Z: [],
        za: []
    };
    mi(this, a);
    return a
};
var mi = function(a, b) {
        b.I.push({
            method: "monitorClient",
            l: Z(a, a.Jf),
            aa: !1,
            C: Z(a, a.Kf)
        });
        b.I.push({
            method: "getTokenResponse",
            l: Z(a, a.jf),
            aa: !0,
            C: Z(a, a.uf)
        });
        b.I.push({
            method: "getOnlineCode",
            l: Z(a, a.pf),
            aa: !0,
            C: Z(a, a.qf)
        });
        b.I.push({
            method: "getSessionSelector",
            l: Z(a, a.hf),
            aa: !0,
            C: Z(a, a.sf)
        });
        b.I.push({
            method: "setSessionSelector",
            l: Z(a, a.gg),
            aa: !1,
            C: Z(a, a.hg)
        });
        b.I.push({
            method: "listIdpSessions",
            l: Z(a, a.Ff),
            aa: !0,
            C: Z(a, a.Gf)
        });
        b.I.push({
            method: "revoke",
            l: Z(a, a.Yf),
            C: Z(a, a.Zf)
        });
        b.I.push({
            method: "startPolling",
            l: Z(a, a.mg),
            C: Z(a, a.ng)
        });
        b.Z.push({
            type: "idpReady"
        });
        b.Z.push({
            type: "idpError"
        });
        b.Z.push({
            type: "sessionStateChanged",
            filter: Z(a, a.dg)
        });
        b.Z.push({
            type: "sessionSelectorChanged",
            filter: Z(a, a.cg)
        });
        b.Z.push({
            type: "authResult",
            filter: Z(a, a.He)
        });
        b.Z.push({
            type: "displayIFrame",
            filter: Z(a, a.$e)
        });
        b.I.push({
            method: "checkStorageAccess",
            l: Z(a, a.Pe),
            aa: !0
        })
    },
    ni = function(a) {
        this.je = a
    },
    li = function(a) {
        a = new Xe(a.je);
        return new oi(a)
    };
ni.prototype.flush = function() {
    this.je.Qc()
};
var ki = function() {
        var a = new Ug;
        a = new Ve(a);
        return new ni(a)
    },
    oi = function(a) {
        this.Ue = a;
        this.Me = wb() ? "IE" : vb() ? "Opera" : B("OPR") ? "OPR" : B("Edge") ? "Edge" : B("Edg/") ? "Edg" : !B("Android") || yb() || xb() || vb() || B("Silk") ? yb() ? "Chrome" : xb() ? "Firefox" : !B("iPad") && !B("iPhone") || zb() || yb() || B("Coast") || xb() || !B("AppleWebKit") ? zb() ? "Safari" : "Other" : "iOS Webview" : "Android";
        (a = Bb()) ? (a = a.split("."), a = 2 > a.length ? a[0] : a[0] + "." + a[1]) : a = "N/A";
        this.Le = a
    };
oi.prototype.Bc = function() {
    this.Ue.Bc(this.Me, this.Le)
};
var pi = "client_id origin ss_domain scope privileged authuser".split(" ");
S.tb = "response_type login_hint client_id origin scope ss_domain authuser hd include_granted_scopes nonce spec_compliant".split(" ");
var ri = function(a, b, c) {
    b.origin = a.j;
    b.privileged = !0;
    b = th(b, pi);
    qh(S.dc, b, qi(a.j), function(d) {
        c(d)
    })
};

function qi(a) {
    var b = {},
        c = S.rf();
    if (c) {
        if (!c) throw Error("Session cookie value cannot be empty.");
        c = new hc(new jc, Na(c));
        a = Na(a);
        c.reset();
        c.update(a);
        a = c.digest();
        a = fc(a);
        b["X-Csrf-Token"] = a
    }
    return b
};
var si = function() {};
H(si, W);
si.prototype.u = function(a) {
    a = void 0 === a ? {} : a;
    return ["gsi_gs", void 0 === a.origin ? null : a.origin, void 0 === a.clientId ? null : a.clientId].join(S.A)
};
si.prototype.J = function(a, b, c) {
    var d = this;
    c = void 0 === c ? function() {} : c;
    W.prototype.J.call(this, a, b, function(e) {
        e ? !e.expires_at || e.expires_at <= (new Date).getTime() ? U(d).removeItem(d.u(a), function() {
            return c(null)
        }) : (e.expires_at = void 0, c(e)) : c(null)
    })
};
si.prototype.K = function(a, b, c, d) {
    b && (b.expires_at = (new Date).getTime() + 864E5);
    W.prototype.K.call(this, a, b, c, d)
};
ji.prototype.ff = function(a) {
    var b = this;
    a = void 0 === a ? {} : a;
    var c = a.id,
        d = void 0 === a.params ? {} : a.params,
        e = function(r) {
            r && r.sessions ? (r = ti(f, r.sessions), X(b.h, c, r)) : X(b.h, c, null)
        },
        f = d.loginHint;
    delete d.loginHint;
    var g = kh();
    if (g) {
        a = d.clientId;
        var h = d.request;
        d = d.sessionSelector;
        h.client_id = a;
        h.ss_domain = d.domain;
        var k = new si,
            l = {
                clientId: a,
                origin: this.j
            };
        k.J(l, g, function(r) {
            r ? e(r) : ri(b.X, h, function(q) {
                !q || q.error ? e(null) : k.K(l, q, g, function() {
                    e(q)
                })
            })
        })
    } else e(null)
};

function ti(a, b) {
    if (!b.length) return null;
    var c = a.toLowerCase();
    b = n(b);
    for (var d = b.next(); !d.done; d = b.next())
        if (d = d.value, d.login_hint) {
            if (a === d.obfuscatedGaiaId) return d.login_hint;
            if (d.emails && d.emails.length)
                for (var e = n(d.emails), f = e.next(); !f.done; f = e.next())
                    if (c === f.value.toLowerCase()) return d.login_hint
        }
    return null
}
ji.prototype.kg = function(a) {
    ui(this, a, !1)
};
ji.prototype.lg = function(a) {
    ui(this, a, !0)
};
var ui = function(a, b, c) {
    document.requestStorageAccess && Ce(document.requestStorageAccess) ? document.hasStorageAccess().then(function(d) {
        if (d) X(a.h, b.id, {
            hasAccess: !0
        });
        else {
            d = new Rd({
                origin: a.j
            });
            var e = document.getElementById("container");
            (c ? d.Uf : d.Tf).call(d, e, function() {
                Nh(a.h);
                X(a.h, b.id, {
                    hasAccess: !0
                })
            }, function() {
                Nh(a.h);
                X(a.h, b.id, {
                    hasAccess: !1
                })
            });
            Mh(a.h)
        }
    }, function(d) {
        G("StorageAccess check failed: " + d);
        X(a.h, b.id, {
            hasAccess: !1
        })
    }) : X(a.h, b.id, {
        hasAccess: !0
    })
};
ji.prototype.gf = function(a) {
    a = void 0 === a ? {} : a;
    a = void 0 === a.params ? {} : a.params;
    var b = !!a.clientId && !T(a.clientId),
        c = !!a.request,
        d = !!a.sessionSelector;
    return !!a.loginHint && b && c && d
};
ji.prototype.createPolicy = function() {
    var a = {
        I: [],
        za: [],
        Z: []
    };
    mi(this, a);
    a.I.push({
        method: "gsi:fetchLoginHint",
        l: Z(this, this.ff),
        aa: !0,
        C: Z(this, this.gf)
    });
    a.za.push({
        Aa: "itpNewGrant",
        l: Z(this, this.kg)
    });
    a.za.push({
        Aa: "itpRegrant",
        l: Z(this, this.lg)
    });
    return a
};
S.ed = "/o/oauth2/iframerpc?action=sessionState";
S.Zc = "/o/oauth2/iframerpc?action=checkOrigin";
S.cd = "/o/oauth2/iframerpc?action=issueToken";
S.bd = "/o/oauth2/iframerpc?action=issueOnlineCode";
S.dc = "/o/oauth2/iframerpc?action=listSessions";
var vi = function() {
        var a = Ee("origin"),
            b = !!Ee("supportBlocked3PCookies");
        if (!a) throw "Failed to get parent origin from URL hash!";
        var c = Ee("rpcToken");
        if (!c) throw "Failed to get rpcToken from URL hash!";
        var d = !!Ee("clearCache"),
            e = Ee("debug");
        Ae = "0" != e && !!e;
        (new ji(a, c, d, b)).start()
    },
    wi = ["lso", "startIdpIFrame"],
    xi = v;
wi[0] in xi || "undefined" == typeof xi.execScript || xi.execScript("var " + wi[0]);
for (var yi; wi.length && (yi = wi.shift());) wi.length || void 0 === vi ? xi = xi[yi] && xi[yi] !== Object.prototype[yi] ? xi[yi] : xi[yi] = {} : xi[yi] = vi;