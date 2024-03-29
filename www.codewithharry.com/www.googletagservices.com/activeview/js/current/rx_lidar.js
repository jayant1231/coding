(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var n, aa = function(a) {
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
            throw Error("a");
        },
        p = ca(this),
        r = function(a, b) {
            if (b) a: {
                var c = p;a = a.split(".");
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
    r("Symbol", function(a) {
        if (a) return a;
        var b = function(f, k) {
            this.Rd = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: k
            })
        };
        b.prototype.toString = function() {
            return this.Rd
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    r("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = p[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this))
                }
            })
        }
        return a
    });
    r("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var da = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        v = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        x = function(a) {
            if (!(a instanceof Array)) {
                a = v(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        fa = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("c`" + a);
            return a
        } : null
    }
    var la = fa,
        y = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.xf = b.prototype
        },
        ma = function() {
            this.ib = !1;
            this.wa = null;
            this.Tc = void 0;
            this.N = 1;
            this.da = this.za = 0;
            this.vc = this.L = null
        },
        na = function(a) {
            if (a.ib) throw new TypeError("e");
            a.ib = !0
        };
    ma.prototype.next_ = function(a) {
        this.Tc = a
    };
    ma.prototype.sb = function(a) {
        this.L = {
            md: a,
            xd: !0
        };
        this.N = this.za || this.da
    };
    ma.prototype.return = function(a) {
        this.L = {
            return: a
        };
        this.N = this.da
    };
    ma.prototype.Da = function(a) {
        this.N = a
    };
    var oa = function(a, b, c) {
            c = a.vc.splice(c || 0)[0];
            (c = a.L = a.L || c) ? c.xd ? a.N = a.za || a.da : void 0 != c.Da && a.da < c.Da ? (a.N = c.Da, a.L = null) : a.N = a.da: a.N = b
        },
        pa = function(a) {
            this.h = new ma;
            this.gf = a
        };
    pa.prototype.next_ = function(a) {
        na(this.h);
        if (this.h.wa) return ra(this, this.h.wa.next, a, this.h.next_);
        this.h.next_(a);
        return sa(this)
    };
    var ta = function(a, b) {
        na(a.h);
        var c = a.h.wa;
        if (c) return ra(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.h.return);
        a.h.return(b);
        return sa(a)
    };
    pa.prototype.sb = function(a) {
        na(this.h);
        if (this.h.wa) return ra(this, this.h.wa["throw"], a, this.h.next_);
        this.h.sb(a);
        return sa(this)
    };
    var ra = function(a, b, c, d) {
            try {
                var e = b.call(a.h.wa, c);
                if (!(e instanceof Object)) throw new TypeError("d`" + e);
                if (!e.done) return a.h.ib = !1, e;
                var f = e.value
            } catch (k) {
                return a.h.wa = null, a.h.sb(k), sa(a)
            }
            a.h.wa = null;
            d.call(a.h, f);
            return sa(a)
        },
        sa = function(a) {
            for (; a.h.N;) try {
                var b = a.gf(a.h);
                if (b) return a.h.ib = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.h.Tc = void 0, a.h.sb(c)
            }
            a.h.ib = !1;
            if (a.h.L) {
                b = a.h.L;
                a.h.L = null;
                if (b.xd) throw b.md;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        ua = function(a) {
            this.next =
                function(b) {
                    return a.next_(b)
                };
            this.throw = function(b) {
                return a.sb(b)
            };
            this.return = function(b) {
                return ta(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        va = function(a, b) {
            b = new ua(new pa(b));
            la && a.prototype && la(b, a.prototype);
            return b
        },
        wa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        xa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) wa(d, e) && (a[e] = d[e])
            }
            return a
        };
    r("Object.assign", function(a) {
        return a || xa
    });
    r("Promise", function(a) {
        function b() {
            this.ra = null
        }

        function c(k) {
            return k instanceof e ? k : new e(function(h) {
                h(k)
            })
        }
        if (a) return a;
        b.prototype.cd = function(k) {
            if (null == this.ra) {
                this.ra = [];
                var h = this;
                this.dd(function() {
                    h.qe()
                })
            }
            this.ra.push(k)
        };
        var d = p.setTimeout;
        b.prototype.dd = function(k) {
            d(k, 0)
        };
        b.prototype.qe = function() {
            for (; this.ra && this.ra.length;) {
                var k = this.ra;
                this.ra = [];
                for (var h = 0; h < k.length; ++h) {
                    var g = k[h];
                    k[h] = null;
                    try {
                        g()
                    } catch (l) {
                        this.ae(l)
                    }
                }
            }
            this.ra = null
        };
        b.prototype.ae = function(k) {
            this.dd(function() {
                throw k;
            })
        };
        var e = function(k) {
            this.Va = 0;
            this.pb = void 0;
            this.Sa = [];
            this.zd = !1;
            var h = this.tc();
            try {
                k(h.resolve, h.reject)
            } catch (g) {
                h.reject(g)
            }
        };
        e.prototype.tc = function() {
            function k(l) {
                return function(m) {
                    g || (g = !0, l.call(h, m))
                }
            }
            var h = this,
                g = !1;
            return {
                resolve: k(this.lf),
                reject: k(this.Qc)
            }
        };
        e.prototype.lf = function(k) {
            if (k === this) this.Qc(new TypeError("f"));
            else if (k instanceof e) this.nf(k);
            else {
                a: switch (typeof k) {
                    case "object":
                        var h = null != k;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.kf(k) : this.pd(k)
            }
        };
        e.prototype.kf = function(k) {
            var h = void 0;
            try {
                h = k.then
            } catch (g) {
                this.Qc(g);
                return
            }
            "function" == typeof h ? this.pf(h, k) : this.pd(k)
        };
        e.prototype.Qc = function(k) {
            this.Nd(2, k)
        };
        e.prototype.pd = function(k) {
            this.Nd(1, k)
        };
        e.prototype.Nd = function(k, h) {
            if (0 != this.Va) throw Error("g`" + k + "`" + h + "`" + this.Va);
            this.Va = k;
            this.pb = h;
            2 === this.Va && this.mf();
            this.re()
        };
        e.prototype.mf = function() {
            var k = this;
            d(function() {
                if (k.Ue()) {
                    var h = p.console;
                    "undefined" !== typeof h && h.error(k.pb)
                }
            }, 1)
        };
        e.prototype.Ue = function() {
            if (this.zd) return !1;
            var k = p.CustomEvent,
                h = p.Event,
                g = p.dispatchEvent;
            if ("undefined" === typeof g) return !0;
            "function" === typeof k ? k = new k("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? k = new h("unhandledrejection", {
                cancelable: !0
            }) : (k = p.document.createEvent("CustomEvent"), k.initCustomEvent("unhandledrejection", !1, !0, k));
            k.promise = this;
            k.reason = this.pb;
            return g(k)
        };
        e.prototype.re = function() {
            if (null != this.Sa) {
                for (var k = 0; k < this.Sa.length; ++k) f.cd(this.Sa[k]);
                this.Sa = null
            }
        };
        var f = new b;
        e.prototype.nf = function(k) {
            var h =
                this.tc();
            k.Bb(h.resolve, h.reject)
        };
        e.prototype.pf = function(k, h) {
            var g = this.tc();
            try {
                k.call(h, g.resolve, g.reject)
            } catch (l) {
                g.reject(l)
            }
        };
        e.prototype.then = function(k, h) {
            function g(t, E) {
                return "function" == typeof t ? function(u) {
                    try {
                        l(t(u))
                    } catch (w) {
                        m(w)
                    }
                } : E
            }
            var l, m, q = new e(function(t, E) {
                l = t;
                m = E
            });
            this.Bb(g(k, l), g(h, m));
            return q
        };
        e.prototype.catch = function(k) {
            return this.then(void 0, k)
        };
        e.prototype.Bb = function(k, h) {
            function g() {
                switch (l.Va) {
                    case 1:
                        k(l.pb);
                        break;
                    case 2:
                        h(l.pb);
                        break;
                    default:
                        throw Error("h`" +
                            l.Va);
                }
            }
            var l = this;
            null == this.Sa ? f.cd(g) : this.Sa.push(g);
            this.zd = !0
        };
        e.resolve = c;
        e.reject = function(k) {
            return new e(function(h, g) {
                g(k)
            })
        };
        e.race = function(k) {
            return new e(function(h, g) {
                for (var l = v(k), m = l.next(); !m.done; m = l.next()) c(m.value).Bb(h, g)
            })
        };
        e.all = function(k) {
            var h = v(k),
                g = h.next();
            return g.done ? c([]) : new e(function(l, m) {
                function q(u) {
                    return function(w) {
                        t[u] = w;
                        E--;
                        0 == E && l(t)
                    }
                }
                var t = [],
                    E = 0;
                do t.push(void 0), E++, c(g.value).Bb(q(t.length - 1), m), g = h.next(); while (!g.done)
            })
        };
        return e
    });
    r("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var l = typeof g;
            return "object" === l && null !== g || "function" === l
        }

        function d(g) {
            if (!wa(g, f)) {
                var l = new b;
                ba(g, f, {
                    value: l
                })
            }
        }

        function e(g) {
            var l = Object[g];
            l && (Object[g] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [g, 2],
                            [l, 3]
                        ]);
                    if (2 != m.get(g) || 3 != m.get(l)) return !1;
                    m.delete(g);
                    m.set(l, 4);
                    return !m.has(g) && 4 == m.get(l)
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var k = 0,
            h = function(g) {
                this.hb = (k += Math.random() + 1).toString();
                if (g) {
                    g = v(g);
                    for (var l; !(l = g.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(g, l) {
            if (!c(g)) throw Error("i");
            d(g);
            if (!wa(g, f)) throw Error("j`" + g);
            g[f][this.hb] = l;
            return this
        };
        h.prototype.get = function(g) {
            return c(g) && wa(g, f) ? g[f][this.hb] : void 0
        };
        h.prototype.has = function(g) {
            return c(g) && wa(g, f) && wa(g[f], this.hb)
        };
        h.prototype.delete = function(g) {
            return c(g) &&
                wa(g, f) && wa(g[f], this.hb) ? delete g[f][this.hb] : !1
        };
        return h
    });
    r("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        g = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != g.get(h) || 1 != g.size || g.get({
                            x: 4
                        }) || g.set({
                            x: 4
                        }, "t") != g || 2 != g.size) return !1;
                    var l = g.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.ab = {};
                this.ea =
                    f();
                this.size = 0;
                if (h) {
                    h = v(h);
                    for (var g; !(g = h.next()).done;) g = g.value, this.set(g[0], g[1])
                }
            };
        c.prototype.set = function(h, g) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.ab[l.id] = []);
            l.F ? l.F.value = g : (l.F = {
                next: this.ea,
                ja: this.ea.ja,
                head: this.ea,
                key: h,
                value: g
            }, l.list.push(l.F), this.ea.ja.next = l.F, this.ea.ja = l.F, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.F && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.ab[h.id], h.F.ja.next = h.F.next, h.F.next.ja = h.F.ja,
                h.F.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.ab = {};
            this.ea = this.ea.ja = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).F
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).F) && h.value
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
        c.prototype.forEach = function(h, g) {
            for (var l = this.entries(),
                    m; !(m = l.next()).done;) m = m.value, h.call(g, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, g) {
                var l = g && typeof g;
                "object" == l || "function" == l ? b.has(g) ? l = b.get(g) : (l = "" + ++k, b.set(g, l)) : l = "p_" + g;
                var m = h.ab[l];
                if (m && wa(h.ab, l))
                    for (h = 0; h < m.length; h++) {
                        var q = m[h];
                        if (g !== g && q.key !== q.key || g === q.key) return {
                            id: l,
                            list: m,
                            index: h,
                            F: q
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    F: void 0
                }
            },
            e = function(h, g) {
                var l = h.ea;
                return da(function() {
                    if (l) {
                        for (; l.head != h.ea;) l = l.ja;
                        for (; l.next != l.head;) return l =
                            l.next, {
                                done: !1,
                                value: g(l)
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
                return h.ja = h.next = h.head = h
            },
            k = 0;
        return c
    });
    var za = function(a, b) {
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
    r("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return za(this, function(b, c) {
                return [b, c]
            })
        }
    });
    r("Array.prototype.values", function(a) {
        return a ? a : function() {
            return za(this, function(b, c) {
                return c
            })
        }
    });
    r("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return za(this, function(b) {
                return b
            })
        }
    });
    r("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (k) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.Z = new Map;
            if (c) {
                c =
                    v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.Z.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.Z.set(c, c);
            this.size = this.Z.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.Z.delete(c);
            this.size = this.Z.size;
            return c
        };
        b.prototype.clear = function() {
            this.Z.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.Z.has(c)
        };
        b.prototype.entries = function() {
            return this.Z.entries()
        };
        b.prototype.values = function() {
            return this.Z.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.Z.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    r("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) wa(b, d) && c.push(b[d]);
            return c
        }
    });
    r("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) wa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    r("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    r("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    r("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("k`includes");
            if (b instanceof RegExp) throw new TypeError("l`includes");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    var Aa = this || self,
        Ba = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ca = function(a) {
            var b = Ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ea = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Fa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.xf = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.jg = function(d, e, f) {
                for (var k = Array(arguments.length - 2), h = 2; h < arguments.length; h++) k[h - 2] = arguments[h];
                return b.prototype[e].apply(d,
                    k)
            }
        };
    var Ga = function(a, b) {
        var c = void 0;
        return new(c || (c = Promise))(function(d, e) {
            function f(g) {
                try {
                    h(b.next(g))
                } catch (l) {
                    e(l)
                }
            }

            function k(g) {
                try {
                    h(b["throw"](g))
                } catch (l) {
                    e(l)
                }
            }

            function h(g) {
                g.done ? d(g.value) : (new c(function(l) {
                    l(g.value)
                })).then(f, k)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };

    function Ha(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ha);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    Fa(Ha, Error);
    Ha.prototype.name = "CustomError";
    var Ia;
    var Ja = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ha.call(this, c + a[d])
    };
    Fa(Ja, Ha);
    Ja.prototype.name = "AssertionError";
    var Ka = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else a && (e += ": " + a, f = b);
            throw new Ja("" + e, f || []);
        },
        La = function(a, b, c) {
            a || Ka("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ma = function(a, b) {
            throw new Ja("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Oa = function(a, b, c) {
            "number" !== typeof a && Ka("Expected number but got %s: %s.", [Ba(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Pa = function(a, b, c) {
            Ea(a) || Ka("Expected object but got %s: %s.", [Ba(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Ra = function(a, b, c, d) {
            a instanceof b || Ka("Expected instanceof %s but got %s.", [Qa(b), Qa(a)], c, Array.prototype.slice.call(arguments, 3))
        },
        Qa = function(a) {
            return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
        };
    var Sa = Array.prototype.forEach ? function(a, b) {
            La(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Ta = Array.prototype.map ? function(a, b, c) {
            La(null != a.length);
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++) k in f && (e[k] = b.call(c, f[k], k, a));
            return e
        },
        Ua = Array.prototype.every ? function(a, b) {
            La(null !=
                a.length);
            return Array.prototype.every.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && !b.call(void 0, d[e], e, a)) return !1;
            return !0
        };

    function Va(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Wa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Xa(a, b, c) {
        if (!Ca(a) || !Ca(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Ya;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function Ya(a, b) {
        return a === b
    }

    function Za(a, b) {
        return Va.apply([], Ta(a, b, void 0))
    };

    function $a(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    var ab = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        bb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var cb;
    a: {
        var db = Aa.navigator;
        if (db) {
            var eb = db.userAgent;
            if (eb) {
                cb = eb;
                break a
            }
        }
        cb = ""
    }
    var z = function(a) {
        return -1 != cb.indexOf(a)
    };
    var hb = function() {
            return z("Safari") && !(fb() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || z("Firefox") || z("FxiOS") || z("Silk") || z("Android"))
        },
        fb = function() {
            return (z("Chrome") || z("CriOS")) && !z("Edge")
        };
    var ib = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };
    var jb = function(a) {
        jb[" "](a);
        return a
    };
    jb[" "] = function() {};
    var kb = function(a, b) {
            try {
                return jb(a[b]), !0
            } catch (c) {}
            return !1
        },
        mb = function(a, b) {
            var c = lb;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var nb = z("Opera"),
        ob = z("Trident") || z("MSIE"),
        pb = z("Edge"),
        qb = z("Gecko") && !(-1 != cb.toLowerCase().indexOf("webkit") && !z("Edge")) && !(z("Trident") || z("MSIE")) && !z("Edge"),
        rb = -1 != cb.toLowerCase().indexOf("webkit") && !z("Edge"),
        sb = function() {
            var a = Aa.document;
            return a ? a.documentMode : void 0
        },
        tb;
    a: {
        var ub = "",
            xb = function() {
                var a = cb;
                if (qb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (pb) return /Edge\/([\d\.]+)/.exec(a);
                if (ob) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (rb) return /WebKit\/(\S+)/.exec(a);
                if (nb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();xb && (ub = xb ? xb[1] : "");
        if (ob) {
            var yb = sb();
            if (null != yb && yb > parseFloat(ub)) {
                tb = String(yb);
                break a
            }
        }
        tb = ub
    }
    var zb = tb,
        lb = {},
        Db = function(a) {
            return mb(a, function() {
                for (var b = 0, c = ab(String(zb)).split("."), d = ab(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var k = c[f] || "",
                        h = d[f] || "";
                    do {
                        k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                        if (0 == k[0].length && 0 == h[0].length) break;
                        b = bb(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || bb(0 == k[2].length, 0 == h[2].length) || bb(k[2], h[2]);
                        k = k[3];
                        h = h[3]
                    } while (0 == b)
                }
                return 0 <= b
            })
        },
        Eb;
    if (Aa.document && ob) {
        var Fb = sb();
        Eb = Fb ? Fb : parseInt(zb, 10) || void 0
    } else Eb = void 0;
    var Gb = Eb;
    var Hb = hb() && !(z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod"));
    var Ib = {},
        Jb = null,
        Kb = qb || rb && !Hb || nb || "function" == typeof Aa.btoa,
        Lb = function(a, b) {
            La(Ca(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            if (!Jb) {
                Jb = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    Ib[e] = f;
                    for (var k = 0; k < f.length; k++) {
                        var h = f[k],
                            g = Jb[h];
                        void 0 === g ? Jb[h] = k : La(g === k)
                    }
                }
            }
            b = Ib[b];
            c = [];
            for (d = 0; d < a.length; d += 3) {
                g = a[d];
                var l = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f =
                    d + 2 < a.length) ? a[d + 2] : 0;
                k = g >> 2;
                g = (g & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[k], b[g], b[l] || "", b[h] || "")
            }
            return c.join("")
        };
    var Mb = "function" === typeof Uint8Array;

    function Nb(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Nb(La(d)) : d)
            }
            return b
        }
        if (Mb && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Nb(La(d)) : d);
        return b
    };
    var A = function() {
            Ra(this, A, "The message constructor should only be used by subclasses");
            La(this.constructor !== A, "Message is an abstract class and cannot be directly constructed")
        },
        Ob, Rb = function(a, b, c) {
            a.D = null;
            Ob && (b || (b = Ob), Ob = null);
            var d = a.constructor.xg,
                e = a.constructor.tg;
            e = d || e;
            b || (b = e ? [d] : []);
            a.Za = e ? 0 : -1;
            a.B = b;
            a: {
                if (b = a.B.length)
                    if (--b, d = a.B[b], !(null === d || "object" != typeof d || Array.isArray(d) || Mb && d instanceof Uint8Array)) {
                        a.lb = b - a.Za;
                        a.J = d;
                        break a
                    }
                a.lb = Number.MAX_VALUE
            }
            a.kg = {};
            if (c)
                for (b = 0; b <
                    c.length; b++) d = c[b], d < a.lb ? (d += a.Za, a.B[d] = a.B[d] || Pb) : (Qb(a), a.J[d] = a.J[d] || Pb)
        },
        Pb = Object.freeze ? Object.freeze([]) : [],
        Qb = function(a) {
            var b = a.lb + a.Za;
            a.B[b] || (a.J = a.B[b] = {})
        },
        Sb = function(a, b) {
            if (b < a.lb) {
                b += a.Za;
                var c = a.B[b];
                return c !== Pb ? c : a.B[b] = []
            }
            if (a.J) return c = a.J[b], c === Pb ? a.J[b] = [] : c
        },
        Tb = function(a, b) {
            a = Sb(a, b);
            return null == a ? 0 : a
        },
        Ub = function(a, b, c) {
            b < a.lb ? a.B[b + a.Za] = c : (Qb(a), a.J[b] = c);
            return a
        },
        Wb = function(a) {
            var b = Vb;
            a.D || (a.D = {});
            if (!a.D[3]) {
                var c = Sb(a, 3);
                c && (a.D[3] = new b(c))
            }
            return a.D[3]
        },
        Xb = function(a) {
            if (a.D)
                for (var b in a.D) {
                    var c = a.D[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Xb(c[d]);
                    else c && Xb(c)
                }
            return a.B
        };
    A.prototype.Ld = Mb ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return Lb(this)
        };
        try {
            return JSON.stringify(this.B && Xb(this), Yb)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.B && Xb(this), Yb)
    };
    var Yb = function(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    };
    A.prototype.toString = function() {
        return Xb(this).toString()
    };
    A.prototype.getExtension = function(a) {
        Qb(this);
        this.D || (this.D = {});
        var b = a.og;
        return a.ug ? a.He() ? (this.D[b] || (this.D[b] = Ta(this.J[b] || [], function(c) {
            return new a.ie(c)
        })), this.D[b]) : this.J[b] = this.J[b] || [] : a.He() ? (!this.D[b] && this.J[b] && (this.D[b] = new a.ie(this.J[b])), this.D[b]) : this.J[b]
    };
    A.prototype.clone = function() {
        var a = Nb(Xb(this));
        Ob = a;
        a = new this.constructor(a);
        Ob = null;
        return a
    };
    var Zb = function() {
        this.Qd = 0
    };
    Zb.prototype.na = function(a, b) {
        var c = this;
        return function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f - 0] = arguments[f];
            c.Qd = a;
            return b.apply(null, x(e))
        }
    };
    var $b = function() {
            this.ma = [];
            this.Y = []
        },
        ac = function(a, b) {
            a.ma.push(b);
            1 === a.ma.length && a.flush()
        },
        bc = function(a, b) {
            a.Y.push(b);
            0 === a.ma.length && 1 === a.Y.length && a.flush()
        };
    $b.prototype.flush = function() {
        try {
            for (; 0 < this.ma.length;) this.ma[0](), this.ma.shift()
        } catch (a) {
            throw this.Y.splice(0, this.Y.length), a;
        } finally {
            this.ma.splice(0, this.ma.length)
        }
        try {
            for (; 0 < this.Y.length;) this.Y[0](), this.Y.shift()
        } finally {
            this.Y.splice(0, this.Y.length)
        }
    };
    p.Object.defineProperties($b.prototype, {
        running: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return 0 < this.ma.length || 0 < this.Y.length
            }
        }
    });
    var cc = function() {
        this.s = new Zb;
        this.queue = new $b;
        this.id = ib()
    };
    p.Object.defineProperties(cc.prototype, {
        Ob: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.id
            }
        }
    });
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var dc = !0,
        ec = {
            set U(a) {
                a ? console.warn("n`" + Error().stack) : dc && console.log("o");
                dc = a
            },
            get U() {
                return dc
            }
        };
    var fc = "function" === typeof Symbol && Symbol.observable || "@@observable";

    function gc(a) {
        setTimeout(function() {
            throw a;
        }, 0)
    };
    var hc = {
        closed: !0,
        next: function() {},
        error: function(a) {
            if (ec.U) throw a;
            gc(a)
        },
        complete: function() {}
    };
    var ic = function() {
        function a(b) {
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var jc = Array.isArray || function(a) {
        return a && "number" === typeof a.length
    };

    function kc(a) {
        return "function" === typeof a
    };
    var B = function(a) {
        this.closed = !1;
        this.Ka = this.pa = null;
        a && (this.qa = a)
    };
    B.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.pa,
                b = this.qa,
                c = this.Ka;
            this.closed = !0;
            this.Ka = this.pa = null;
            if (a instanceof B) a.remove(this);
            else if (null !== a)
                for (var d = 0; d < a.length; ++d) a[d].remove(this);
            if (kc(b)) try {
                b.call(this)
            } catch (h) {
                var e = h instanceof ic ? lc(h.errors) : [h]
            }
            if (jc(c)) {
                d = -1;
                for (var f = c.length; ++d < f;) {
                    var k = c[d];
                    if (null !== k && "object" === typeof k) try {
                        k.unsubscribe()
                    } catch (h) {
                        e = e || [], h instanceof ic ? e = e.concat(lc(h.errors)) : e.push(h)
                    }
                }
            }
            if (e) throw new ic(e);
        }
    };
    B.prototype.add = function(a) {
        var b = a;
        if (!a) return B.EMPTY;
        switch (typeof a) {
            case "function":
                b = new B(a);
            case "object":
                if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
                if (this.closed) return b.unsubscribe(), b;
                b instanceof B || (a = b, b = new B, b.Ka = [a]);
                break;
            default:
                throw Error("p`" + a);
        }
        var c = b.pa;
        if (null === c) b.pa = this;
        else if (c instanceof B) {
            if (c === this) return b;
            b.pa = [c, this]
        } else if (-1 === c.indexOf(this)) c.push(this);
        else return b;
        a = this.Ka;
        null === a ? this.Ka = [b] : a.push(b);
        return b
    };
    B.prototype.remove = function(a) {
        var b = this.Ka;
        b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1))
    };
    var mc = new B;
    mc.closed = !0;
    B.EMPTY = mc;

    function lc(a) {
        return a.reduce(function(b, c) {
            return b.concat(c instanceof ic ? c.errors : c)
        }, [])
    };
    var nc = "function" === typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    var C = function(a, b, c) {
        B.call(this);
        this.Xb = null;
        this.m = this.P = this.Wb = !1;
        switch (arguments.length) {
            case 0:
                this.destination = hc;
                break;
            case 1:
                if (!a) {
                    this.destination = hc;
                    break
                }
                if ("object" === typeof a) {
                    a instanceof C ? (this.P = a.P, this.destination = a, a.add(this)) : (this.P = !0, this.destination = new oc(this, a));
                    break
                }
            default:
                this.P = !0, this.destination = new oc(this, a, b, c)
        }
    };
    y(C, B);
    C.EMPTY = B.EMPTY;
    C.prototype[nc] = function() {
        return this
    };
    C.create = function(a, b, c) {
        a = new C(a, b, c);
        a.P = !1;
        return a
    };
    n = C.prototype;
    n.next = function(a) {
        this.m || this.j(a)
    };
    n.error = function(a) {
        this.m || (this.m = !0, this.K(a))
    };
    n.complete = function() {
        this.m || (this.m = !0, this.u())
    };
    n.unsubscribe = function() {
        this.closed || (this.m = !0, B.prototype.unsubscribe.call(this))
    };
    n.j = function(a) {
        this.destination.next(a)
    };
    n.K = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    n.u = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    n.ad = function() {
        var a = this.pa;
        this.pa = null;
        this.unsubscribe();
        this.m = this.closed = !1;
        this.pa = a;
        return this
    };
    var oc = function(a, b, c, d) {
        C.call(this);
        this.Wa = a;
        var e = this;
        if (kc(b)) var f = b;
        else b && (f = b.next, c = b.error, d = b.complete, b !== hc && (e = Object.create(b), b && "function" === typeof b.add && "function" === typeof b.unsubscribe && b.add(this.unsubscribe.bind(this)), e.unsubscribe = this.unsubscribe.bind(this)));
        this.ca = e;
        this.j = f;
        this.K = c;
        this.u = d
    };
    y(oc, C);
    oc.EMPTY = C.EMPTY;
    oc.create = C.create;
    n = oc.prototype;
    n.next = function(a) {
        if (!this.m && this.j) {
            var b = this.Wa;
            ec.U && b.P ? this.ac(b, this.j, a) && this.unsubscribe() : this.bc(this.j, a)
        }
    };
    n.error = function(a) {
        if (!this.m) {
            var b = this.Wa,
                c = ec.U;
            if (this.K) c && b.P ? this.ac(b, this.K, a) : this.bc(this.K, a), this.unsubscribe();
            else if (b.P) c ? (b.Xb = a, b.Wb = !0) : gc(a), this.unsubscribe();
            else {
                this.unsubscribe();
                if (c) throw a;
                gc(a)
            }
        }
    };
    n.complete = function() {
        var a = this;
        if (!this.m) {
            var b = this.Wa;
            if (this.u) {
                var c = function() {
                    return a.u.call(a.ca)
                };
                ec.U && b.P ? this.ac(b, c) : this.bc(c)
            }
            this.unsubscribe()
        }
    };
    n.bc = function(a, b) {
        try {
            a.call(this.ca, b)
        } catch (c) {
            this.unsubscribe();
            if (ec.U) throw c;
            gc(c)
        }
    };
    n.ac = function(a, b, c) {
        if (!ec.U) throw Error("q");
        try {
            b.call(this.ca, c)
        } catch (d) {
            return ec.U ? (a.Xb = d, a.Wb = !0) : gc(d), !0
        }
        return !1
    };
    n.qa = function() {
        var a = this.Wa;
        this.Wa = this.ca = null;
        a.unsubscribe()
    };

    function pc(a) {
        return a
    };

    function D(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return qc(b)
    }

    function qc(a) {
        return 0 === a.length ? pc : 1 === a.length ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };
    var G = function(a) {
        this.hg = !1;
        a && (this.I = a)
    };
    n = G.prototype;
    n.i = function(a) {
        var b = new G;
        b.source = this;
        b.Nc = a;
        return b
    };
    n.subscribe = function(a, b, c) {
        var d = this.Nc;
        a: {
            if (a) {
                if (a instanceof C) break a;
                if (a[nc]) {
                    a = a[nc]();
                    break a
                }
            }
            a = a || b || c ? new C(a, b, c) : new C(hc)
        }
        d ? a.add(d.call(a, this.source)) : a.add(this.source || ec.U && !a.P ? this.I(a) : this.ic(a));
        if (ec.U && a.P && (a.P = !1, a.Wb)) throw a.Xb;
        return a
    };
    n.ic = function(a) {
        try {
            return this.I(a)
        } catch (e) {
            ec.U && (a.Wb = !0, a.Xb = e);
            var b;
            a: {
                for (b = a; b;) {
                    var c = b.destination,
                        d = b.m;
                    if (b.closed || d) {
                        b = !1;
                        break a
                    }
                    b = c && c instanceof C ? c : null
                }
                b = !0
            }
            b ? a.error(e) : console.warn(e)
        }
    };
    n.forEach = function(a, b) {
        var c = this;
        b = rc(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(k) {
                try {
                    a(k)
                } catch (h) {
                    e(h), f && f.unsubscribe()
                }
            }, e, d)
        })
    };
    n.I = function(a) {
        var b = this.source;
        return b && b.subscribe(a)
    };
    G.prototype[fc] = function() {
        return this
    };
    G.prototype.g = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return 0 === b.length ? this : qc(b)(this)
    };
    G.create = function(a) {
        return new G(a)
    };

    function rc(a) {
        a || (a = Promise);
        if (!a) throw Error("r");
        return a
    };
    var sc = function(a, b) {
        B.call(this);
        this.Pd = a;
        this.Sc = b;
        this.closed = !1
    };
    y(sc, B);
    sc.EMPTY = B.EMPTY;
    sc.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.Pd,
                b = a.ia;
            this.Pd = null;
            !b || 0 === b.length || a.m || a.closed || (a = b.indexOf(this.Sc), -1 !== a && b.splice(a, 1))
        }
    };
    var tc = function() {
        function a() {
            this.message = "object unsubscribed";
            this.name = "ObjectUnsubscribedError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var uc = function(a) {
        C.call(this, a);
        this.destination = a
    };
    y(uc, C);
    uc.EMPTY = C.EMPTY;
    uc.create = C.create;
    var H = function() {
        G.call(this);
        this.ia = [];
        this.eb = this.m = this.closed = !1;
        this.Yb = null
    };
    y(H, G);
    H.prototype[nc] = function() {
        return new uc(this)
    };
    n = H.prototype;
    n.i = function(a) {
        var b = new vc(this, this);
        b.Nc = a;
        return b
    };
    n.next = function(a) {
        if (this.closed) throw new tc;
        if (!this.m) {
            var b = this.ia,
                c = b.length;
            b = b.slice();
            for (var d = 0; d < c; d++) b[d].next(a)
        }
    };
    n.error = function(a) {
        if (this.closed) throw new tc;
        this.eb = !0;
        this.Yb = a;
        this.m = !0;
        var b = this.ia,
            c = b.length;
        b = b.slice();
        for (var d = 0; d < c; d++) b[d].error(a);
        this.ia.length = 0
    };
    n.complete = function() {
        if (this.closed) throw new tc;
        this.m = !0;
        var a = this.ia,
            b = a.length;
        a = a.slice();
        for (var c = 0; c < b; c++) a[c].complete();
        this.ia.length = 0
    };
    n.unsubscribe = function() {
        this.closed = this.m = !0;
        this.ia = null
    };
    n.ic = function(a) {
        if (this.closed) throw new tc;
        return G.prototype.ic.call(this, a)
    };
    n.I = function(a) {
        if (this.closed) throw new tc;
        if (this.eb) return a.error(this.Yb), B.EMPTY;
        if (this.m) return a.complete(), B.EMPTY;
        this.ia.push(a);
        return new sc(this, a)
    };
    H.create = function(a, b) {
        return new vc(a, b)
    };
    var vc = function(a, b) {
        H.call(this);
        this.destination = a;
        this.source = b
    };
    y(vc, H);
    vc.create = H.create;
    vc.prototype.next = function(a) {
        var b = this.destination;
        b && b.next && b.next(a)
    };
    vc.prototype.error = function(a) {
        var b = this.destination;
        b && b.error && this.destination.error(a)
    };
    vc.prototype.complete = function() {
        var a = this.destination;
        a && a.complete && this.destination.complete()
    };
    vc.prototype.I = function(a) {
        return this.source ? this.source.subscribe(a) : B.EMPTY
    };
    var wc = function(a) {
        H.call(this);
        this.jc = a
    };
    y(wc, H);
    wc.create = H.create;
    wc.prototype.I = function(a) {
        var b = H.prototype.I.call(this, a);
        b && !b.closed && a.next(this.jc);
        return b
    };
    wc.prototype.next = function(a) {
        H.prototype.next.call(this, this.jc = a)
    };
    p.Object.defineProperties(wc.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.eb) throw this.Yb;
                if (this.closed) throw new tc;
                return this.jc
            }
        }
    });
    var xc = new G(function(a) {
        return a.complete()
    });

    function yc(a, b) {
        return new G(function(c) {
            var d = new B,
                e = 0;
            d.add(b.l(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.l()))
            }));
            return d
        })
    };
    var zc = function(a) {
        return function(b) {
            for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
            b.complete()
        }
    };

    function Ac(a, b) {
        return b ? yc(a, b) : new G(zc(a))
    };

    function Bc(a) {
        return a && "function" === typeof a.l
    };

    function I(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        c = b[b.length - 1];
        return Bc(c) ? (b.pop(), yc(b, c)) : Ac(b)
    };

    function Cc(a) {
        return new G(function(b) {
            return b.error(a)
        })
    };
    var Dc = function(a, b, c) {
        a = void 0 === a ? Infinity : a;
        b = void 0 === b ? Infinity : b;
        c = void 0 === c ? Date : c;
        H.call(this);
        this.Bf = c;
        this.vb = [];
        this.Zc = !1;
        this.Uc = 1 > a ? 1 : a;
        this.Zd = 1 > b ? 1 : b;
        Infinity === b ? (this.Zc = !0, this.next = this.Qe) : this.next = this.Se
    };
    y(Dc, H);
    Dc.create = H.create;
    n = Dc.prototype;
    n.Qe = function(a) {
        var b = this.vb;
        b.push(a);
        b.length > this.Uc && b.shift();
        H.prototype.next.call(this, a)
    };
    n.Se = function(a) {
        this.vb.push({
            time: this.Xc(),
            value: a
        });
        this.$c();
        H.prototype.next.call(this, a)
    };
    n.I = function(a) {
        var b = this.Zc,
            c = b ? this.vb : this.$c(),
            d = c.length;
        if (this.closed) throw new tc;
        if (this.m || this.eb) var e = B.EMPTY;
        else this.ia.push(a), e = new sc(this, a);
        if (b)
            for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
        else
            for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
        this.eb ? a.error(this.Yb) : this.m && a.complete();
        return e
    };
    n.Xc = function() {
        var a = this.Bf;
        return a ? a.now() : Date.now()
    };
    n.$c = function() {
        for (var a = this.Xc(), b = this.Uc, c = this.Zd, d = this.vb, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
        e > b && (f = Math.max(f, e - b));
        0 < f && d.splice(0, f);
        return d
    };
    var Ec = function(a, b) {
        b = void 0 === b ? Ec.now : b;
        this.Sd = a;
        this.now = b
    };
    Ec.prototype.l = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return (new this.Sd(this, a)).l(c, b)
    };
    Ec.now = function() {
        return Date.now()
    };
    (function() {
        function a() {
            this.message = "no elements in sequence";
            this.name = "EmptyError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();

    function J() {
        return function(a) {
            return a.i(new Fc)
        }
    }
    var Fc = function() {};
    Fc.prototype.call = function(a, b) {
        b.Xa++;
        a = new Gc(a, b);
        var c = b.subscribe(a);
        a.closed || (a.connection = b.connect());
        return c
    };
    var Gc = function(a, b) {
        C.call(this, a);
        this.La = b;
        this.connection = null
    };
    y(Gc, C);
    Gc.EMPTY = C.EMPTY;
    Gc.create = C.create;
    Gc.prototype.qa = function() {
        var a = this.La;
        if (a) {
            this.La = null;
            var b = a.Xa;
            0 >= b ? this.connection = null : (a.Xa = b - 1, 1 < b ? this.connection = null : (b = this.connection, a = a.Ja, this.connection = null, !a || b && a !== b || a.unsubscribe()))
        } else this.connection = null
    };
    var Hc = function(a, b) {
        G.call(this);
        this.source = a;
        this.Vb = b;
        this.Xa = 0;
        this.wb = !1
    };
    y(Hc, G);
    Hc.create = G.create;
    Hc.prototype.I = function(a) {
        return this.Lb().subscribe(a)
    };
    Hc.prototype.Lb = function() {
        var a = this.xb;
        if (!a || a.m) this.xb = this.Vb();
        return this.xb
    };
    Hc.prototype.connect = function() {
        var a = this.Ja;
        a || (this.wb = !1, a = this.Ja = new B, a.add(this.source.subscribe(new Ic(this.Lb(), this))), a.closed && (this.Ja = null, a = B.EMPTY));
        return a
    };
    Hc.prototype.Hd = function() {
        return J()(this)
    };
    var Jc, Kc = Hc.prototype;
    Jc = {
        Nc: {
            value: null
        },
        Xa: {
            value: 0,
            writable: !0
        },
        xb: {
            value: null,
            writable: !0
        },
        Ja: {
            value: null,
            writable: !0
        },
        I: {
            value: Kc.I
        },
        wb: {
            value: Kc.wb,
            writable: !0
        },
        Lb: {
            value: Kc.Lb
        },
        connect: {
            value: Kc.connect
        },
        Hd: {
            value: Kc.Hd
        }
    };
    var Ic = function(a, b) {
        uc.call(this, a);
        this.La = b
    };
    y(Ic, uc);
    Ic.EMPTY = uc.EMPTY;
    Ic.create = uc.create;
    Ic.prototype.K = function(a) {
        this.qa();
        uc.prototype.K.call(this, a)
    };
    Ic.prototype.u = function() {
        this.La.wb = !0;
        this.qa();
        uc.prototype.u.call(this)
    };
    Ic.prototype.qa = function() {
        var a = this.La;
        if (a) {
            this.La = null;
            var b = a.Ja;
            a.Xa = 0;
            a.xb = null;
            a.Ja = null;
            b && b.unsubscribe()
        }
    };

    function K(a) {
        return function(b) {
            if ("function" !== typeof a) throw new TypeError("s");
            return b.i(new Lc(a))
        }
    }
    var Lc = function(a) {
        this.C = a;
        this.R = void 0
    };
    Lc.prototype.call = function(a, b) {
        return b.subscribe(new Mc(a, this.C, this.R))
    };
    var Mc = function(a, b, c) {
        C.call(this, a);
        this.C = b;
        this.count = 0;
        this.R = c || this
    };
    y(Mc, C);
    Mc.EMPTY = C.EMPTY;
    Mc.create = C.create;
    Mc.prototype.j = function(a) {
        try {
            var b = this.C.call(this.R, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var L = function() {
        C.apply(this, arguments)
    };
    y(L, C);
    L.EMPTY = C.EMPTY;
    L.create = C.create;
    L.prototype.$ = function(a, b) {
        this.destination.next(b)
    };
    L.prototype.Ra = function(a) {
        this.destination.error(a)
    };
    L.prototype.H = function() {
        this.destination.complete()
    };
    var Nc = function(a, b, c) {
        C.call(this);
        this.parent = a;
        this.Gd = b;
        this.ef = c;
        this.index = 0
    };
    y(Nc, C);
    Nc.EMPTY = C.EMPTY;
    Nc.create = C.create;
    Nc.prototype.j = function(a) {
        this.parent.$(this.Gd, a, this.ef, this.index++, this)
    };
    Nc.prototype.K = function(a) {
        this.parent.Ra(a, this);
        this.unsubscribe()
    };
    Nc.prototype.u = function() {
        this.parent.H(this);
        this.unsubscribe()
    };
    var Oc = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    var Pc = function(a) {
        return a && "number" === typeof a.length && "function" !== typeof a
    };

    function Qc(a) {
        return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    };

    function Rc(a) {
        return function(b) {
            Sc(a, b).catch(function(c) {
                return b.error(c)
            })
        }
    }

    function Sc(a, b) {
        var c, d, e, f;
        return Ga(this, function h() {
            var g, l;
            return va(h, function(m) {
                switch (m.N) {
                    case 1:
                        m.za = 2;
                        m.da = 3;
                        if (!Symbol.asyncIterator) throw new TypeError("m");
                        var q = a[Symbol.asyncIterator];
                        c = q ? q.call(a) : "function" === typeof __values ? __values(a) : a[Symbol.iterator]();
                    case 5:
                        return q = c.next(), m.N = 8, {
                            value: q
                        };
                    case 8:
                        if (d = m.Tc, d.done) {
                            m.Da(3);
                            break
                        }
                        g = d.value;
                        b.next(g);
                        m.Da(5);
                        break;
                    case 3:
                        m.vc = [m.L];
                        m.za = 0;
                        m.da = 0;
                        m.za = 0;
                        m.da = 9;
                        if (!d || d.done || !(f = c.return)) {
                            m.Da(9);
                            break
                        }
                        q = f.call(c);
                        m.N = 9;
                        return {
                            value: q
                        };
                    case 9:
                        m.vc[1] = m.L;
                        m.za = 0;
                        m.da = 0;
                        if (e) throw e.error;
                        oa(m, 10, 1);
                        break;
                    case 10:
                        oa(m, 4);
                        break;
                    case 2:
                        m.za = 0;
                        q = m.L.md;
                        m.L = null;
                        l = q;
                        e = {
                            error: l
                        };
                        m.Da(3);
                        break;
                    case 4:
                        b.complete(), m.N = 0
                }
            })
        })
    };
    var Tc = function(a) {
        return function(b) {
            var c = a[Oc]();
            do {
                var d = void 0;
                try {
                    d = c.next()
                } catch (e) {
                    b.error(e);
                    return
                }
                if (d.done) {
                    b.complete();
                    break
                }
                b.next(d.value);
                if (b.closed) break
            } while (1);
            "function" === typeof c.return && b.add(function() {
                c.return && c.return()
            });
            return b
        }
    };
    var Uc = function(a) {
        return function(b) {
            var c = a[fc]();
            if ("function" !== typeof c.subscribe) throw new TypeError("t");
            return c.subscribe(b)
        }
    };
    var Vc = function(a) {
        return function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, gc);
            return b
        }
    };
    var Wc = function(a) {
        if (a && "function" === typeof a[fc]) return Uc(a);
        if (Pc(a)) return zc(a);
        if (Qc(a)) return Vc(a);
        if (a && "function" === typeof a[Oc]) return Tc(a);
        if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return Rc(a);
        throw new TypeError("u`" + (null !== a && "object" === typeof a ? "an invalid object" : "'" + a + "'"));
    };

    function Xc(a, b, c, d, e) {
        e = void 0 === e ? new Nc(a, c, d) : e;
        if (!e.closed) return b instanceof G ? b.subscribe(e) : Wc(b)(e)
    };
    var Yc = {};

    function M(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        var d = c = void 0;
        Bc(b[b.length - 1]) && (d = b.pop());
        "function" === typeof b[b.length - 1] && (c = b.pop());
        1 === b.length && jc(b[0]) && (b = b[0]);
        return Ac(b, d).i(new Zc(c))
    }
    var Zc = function(a) {
        this.ka = a
    };
    Zc.prototype.call = function(a, b) {
        return b.subscribe(new $c(a, this.ka))
    };
    var $c = function(a, b) {
        L.call(this, a);
        this.ka = b;
        this.active = 0;
        this.values = [];
        this.ha = []
    };
    y($c, L);
    $c.EMPTY = L.EMPTY;
    $c.create = L.create;
    n = $c.prototype;
    n.j = function(a) {
        this.values.push(Yc);
        this.ha.push(a)
    };
    n.u = function() {
        var a = this.ha,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            this.Ga = this.active = b;
            for (var c = 0; c < b; c++) {
                var d = a[c];
                this.add(Xc(this, d, d, c))
            }
        }
    };
    n.H = function() {
        0 === --this.active && this.destination.complete()
    };
    n.$ = function(a, b, c) {
        a = this.values;
        var d = a[c];
        d = this.Ga ? d === Yc ? --this.Ga : this.Ga : 0;
        a[c] = b;
        0 === d && (this.ka ? this.Vd(a) : this.destination.next(a.slice()))
    };
    n.Vd = function(a) {
        try {
            var b = this.ka.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function ad(a, b) {
        if (!a) throw Error("v");
        return new G(function(c) {
            var d = new B;
            d.add(b.l(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.l(function() {
                    var f = this;
                    e.next().then(function(k) {
                        k.done ? c.complete() : (c.next(k.value), f.l())
                    })
                }))
            }));
            return d
        })
    };

    function bd(a, b) {
        if (!a) throw Error("v");
        return new G(function(c) {
            var d = new B,
                e;
            d.add(function() {
                e && "function" === typeof e.return && e.return()
            });
            d.add(b.l(function() {
                e = a[Oc]();
                d.add(b.l(function() {
                    if (!c.closed) {
                        try {
                            var f = e.next();
                            var k = f.value;
                            var h = f.done
                        } catch (g) {
                            c.error(g);
                            return
                        }
                        h ? c.complete() : (c.next(k), this.l())
                    }
                }))
            }));
            return d
        })
    };

    function cd(a, b) {
        return new G(function(c) {
            var d = new B;
            d.add(b.l(function() {
                var e = a[fc]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.l(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.l(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.l(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function dd(a, b) {
        return new G(function(c) {
            var d = new B;
            d.add(b.l(function() {
                return a.then(function(e) {
                    d.add(b.l(function() {
                        c.next(e);
                        d.add(b.l(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.l(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };

    function ed(a) {
        var b = fd;
        if (null != a) {
            if (a && "function" === typeof a[fc]) return cd(a, b);
            if (Qc(a)) return dd(a, b);
            if (Pc(a)) return yc(a, b);
            if (a && "function" === typeof a[Oc] || "string" === typeof a) return bd(a, b);
            if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return ad(a, b)
        }
        throw new TypeError("w`" + (null !== a && typeof a || a));
    };

    function gd(a) {
        return a instanceof G ? a : new G(Wc(a))
    };

    function hd(a, b) {
        var c = void 0 === c ? Infinity : c;
        if ("function" === typeof b) return function(d) {
            return d.g(hd(function(e, f) {
                return gd(a(e, f)).g(K(function(k, h) {
                    return b(e, k, f, h)
                }))
            }, c))
        };
        "number" === typeof b && (c = b);
        return function(d) {
            return d.i(new id(a, c))
        }
    }
    var id = function(a, b) {
        b = void 0 === b ? Infinity : b;
        this.C = a;
        this.rc = b
    };
    id.prototype.call = function(a, b) {
        return b.subscribe(new jd(a, this.C, this.rc))
    };
    var jd = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        L.call(this, a);
        this.C = b;
        this.rc = c;
        this.Oa = !1;
        this.buffer = [];
        this.index = this.active = 0
    };
    y(jd, L);
    jd.EMPTY = L.EMPTY;
    jd.create = L.create;
    n = jd.prototype;
    n.j = function(a) {
        this.active < this.rc ? this.Td(a) : this.buffer.push(a)
    };
    n.Td = function(a) {
        var b = this.index++;
        try {
            var c = this.C(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }
        this.active++;
        this.cc(c, a, b)
    };
    n.cc = function(a, b, c) {
        b = new Nc(this, b, c);
        this.destination.add(b);
        Xc(this, a, void 0, void 0, b)
    };
    n.u = function() {
        this.Oa = !0;
        0 === this.active && 0 === this.buffer.length && this.destination.complete();
        this.unsubscribe()
    };
    n.$ = function(a, b) {
        this.destination.next(b)
    };
    n.H = function(a) {
        var b = this.buffer;
        this.remove(a);
        this.active--;
        0 < b.length ? this.j(b.shift()) : 0 === this.active && this.Oa && this.destination.complete()
    };

    function kd(a) {
        a = void 0 === a ? Infinity : a;
        return hd(pc, a)
    };

    function ld(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return kd(1)(I.apply(null, x(b)))
    };

    function md(a, b, c) {
        if (kc(c)) {
            var d = c;
            c = void 0
        }
        return d ? md(a, b, c).g(K(function(e) {
            return jc(e) ? d.apply(null, x(e)) : d(e)
        })) : new G(function(e) {
            nd(a, b, function(f) {
                1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f)
            }, e, c)
        })
    }

    function nd(a, b, c, d, e) {
        if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
            a.addEventListener(b, c, e);
            var f = function() {
                return a.removeEventListener(b, c, e)
            }
        } else if (a && "function" === typeof a.Xe && "function" === typeof a.We) a.Xe(b, c), f = function() {
            return a.We(b, c)
        };
        else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = function() {
            return a.removeListener(b, c)
        };
        else if (a && a.length)
            for (var k = 0, h = a.length; k < h; k++) nd(a[k], b,
                c, d, e);
        else throw new TypeError("x");
        d.add(f)
    };
    var od = function() {
        B.call(this)
    };
    y(od, B);
    od.EMPTY = B.EMPTY;
    od.prototype.l = function() {
        return this
    };
    var pd = function(a, b) {
        B.call(this);
        this.O = a;
        this.$b = b;
        this.pending = !1
    };
    y(pd, od);
    pd.EMPTY = od.EMPTY;
    n = pd.prototype;
    n.l = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.O;
        null != a && (this.id = this.nb(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.ob(c, this.id, b);
        return this
    };
    n.ob = function(a, b, c) {
        return setInterval(a.flush.bind(a, this), void 0 === c ? 0 : c)
    };
    n.nb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && this.delay === c && !1 === this.pending) return b;
        clearInterval(b)
    };
    n.execute = function(a, b) {
        if (this.closed) return Error("y");
        this.pending = !1;
        if (a = this.Vc(a, b)) return a;
        !1 === this.pending && null != this.id && (this.id = this.nb(this.O, this.id, null))
    };
    n.Vc = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.$b(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    n.qa = function() {
        var a = this.id,
            b = this.O,
            c = b.actions,
            d = c.indexOf(this);
        this.state = this.$b = null;
        this.pending = !1;
        this.O = null; - 1 !== d && c.splice(d, 1);
        null != a && (this.id = this.nb(b, a, null));
        this.delay = null
    };
    var N = function(a, b) {
        b = void 0 === b ? Ec.now : b;
        Ec.call(this, a, function() {
            return N.cb && N.cb !== c ? N.cb.now() : b()
        });
        var c = this;
        this.actions = [];
        this.active = !1;
        this.Ub = void 0
    };
    y(N, Ec);
    N.now = Ec.now;
    N.prototype.l = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return N.cb && N.cb !== this ? N.cb.l(a, b, c) : Ec.prototype.l.call(this, a, b, c)
    };
    N.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function qd(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        c = Infinity;
        var d = void 0,
            e = b[b.length - 1];
        Bc(e) ? (d = b.pop(), 1 < b.length && "number" === typeof b[b.length - 1] && (c = b.pop())) : "number" === typeof e && (c = b.pop());
        return !d && 1 === b.length && b[0] instanceof G ? b[0] : kd(c)(Ac(b, d))
    };

    function rd() {};
    var sd = new G(rd);

    function O(a) {
        return function(b) {
            return b.i(new td(a))
        }
    }
    var td = function(a) {
        this.G = a;
        this.R = void 0
    };
    td.prototype.call = function(a, b) {
        return b.subscribe(new ud(a, this.G, this.R))
    };
    var ud = function(a, b, c) {
        C.call(this, a);
        this.G = b;
        this.R = c;
        this.count = 0
    };
    y(ud, C);
    ud.EMPTY = C.EMPTY;
    ud.create = C.create;
    ud.prototype.j = function(a) {
        try {
            var b = this.G.call(this.R, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b && this.destination.next(a)
    };

    function vd(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        if (1 === b.length)
            if (jc(b[0])) b = b[0];
            else return gd(b[0]);
        return Ac(b, void 0).i(new wd)
    }
    var wd = function() {};
    wd.prototype.call = function(a, b) {
        return b.subscribe(new xd(a))
    };
    var xd = function(a) {
        L.call(this, a);
        this.fb = !1;
        this.ha = [];
        this.rb = []
    };
    y(xd, L);
    xd.EMPTY = L.EMPTY;
    xd.create = L.create;
    n = xd.prototype;
    n.j = function(a) {
        this.ha.push(a)
    };
    n.u = function() {
        var a = this.ha,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            for (var c = 0; c < b && !this.fb; c++) {
                var d = a[c];
                d = Xc(this, d, d, c);
                this.rb && this.rb.push(d);
                this.add(d)
            }
            this.ha = null
        }
    };
    n.$ = function(a, b, c) {
        if (!this.fb) {
            this.fb = !0;
            for (a = 0; a < this.rb.length; a++)
                if (a !== c) {
                    var d = this.rb[a];
                    d.unsubscribe();
                    this.remove(d)
                }
            this.rb = null
        }
        this.destination.next(b)
    };
    n.H = function(a) {
        this.fb = !0;
        L.prototype.H.call(this, a)
    };
    n.Ra = function(a, b) {
        this.fb = !0;
        L.prototype.Ra.call(this, a, b)
    };

    function yd(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        c = void 0;
        "function" === typeof b[b.length - 1] && (c = b.pop());
        return Ac(b, void 0).i(new zd(c))
    }
    var zd = function(a) {
        this.ka = a
    };
    zd.prototype.call = function(a, b) {
        return b.subscribe(new Ad(a, this.ka))
    };
    var Ad = function(a, b, c) {
        c = void 0 === c ? Object.create(null) : c;
        C.call(this, a);
        this.Fc = [];
        this.active = 0;
        this.ka = b;
        this.values = c
    };
    y(Ad, C);
    Ad.EMPTY = C.EMPTY;
    Ad.create = C.create;
    Ad.prototype.j = function(a) {
        var b = this.Fc;
        jc(a) ? b.push(new Bd(a)) : "function" === typeof a[Oc] ? b.push(new Cd(a[Oc]())) : b.push(new Dd(this.destination, this, a))
    };
    Ad.prototype.u = function() {
        var a = this.Fc,
            b = a.length;
        this.unsubscribe();
        if (0 === b) this.destination.complete();
        else {
            this.active = b;
            for (var c = 0; c < b; c++) {
                var d = a[c];
                d.vf ? this.destination.add(d.subscribe(d, c)) : this.active--
            }
        }
    };
    Ad.prototype.Wd = function(a) {
        try {
            var b = this.ka.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var Cd = function(a) {
        this.iterator = a;
        this.Lc = a.next()
    };
    Cd.prototype.Mb = function() {
        return !0
    };
    Cd.prototype.next = function() {
        var a = this.Lc;
        this.Lc = this.iterator.next();
        return a
    };
    Cd.prototype.Oa = function() {
        var a = this.Lc;
        return a && !!a.done
    };
    var Bd = function(a) {
        this.B = a;
        this.length = this.index = 0;
        this.length = a.length
    };
    Bd.prototype[Oc] = function() {
        return this
    };
    Bd.prototype.next = function() {
        var a = this.index++,
            b = this.B;
        return a < this.length ? {
            value: b[a],
            done: !1
        } : {
            value: null,
            done: !0
        }
    };
    Bd.prototype.Mb = function() {
        return this.B.length > this.index
    };
    Bd.prototype.Oa = function() {
        return this.B.length === this.index
    };
    var Dd = function(a, b, c) {
        L.call(this, a);
        this.parent = b;
        this.observable = c;
        this.vf = !0;
        this.buffer = [];
        this.Cc = !1
    };
    y(Dd, L);
    Dd.EMPTY = L.EMPTY;
    Dd.create = L.create;
    Dd.prototype[Oc] = function() {
        return this
    };
    n = Dd.prototype;
    n.next = function() {
        var a = this.buffer;
        return 0 === a.length && this.Cc ? {
            value: null,
            done: !0
        } : {
            value: a.shift(),
            done: !1
        }
    };
    n.Mb = function() {
        return 0 < this.buffer.length
    };
    n.Oa = function() {
        return 0 === this.buffer.length && this.Cc
    };
    n.H = function() {
        if (0 < this.buffer.length) {
            this.Cc = !0;
            var a = this.parent;
            a.active--;
            0 === a.active && a.destination.complete()
        } else this.destination.complete()
    };
    n.$ = function(a, b) {
        this.buffer.push(b);
        a: {
            a = this.parent;b = a.Fc;
            for (var c = b.length, d = a.destination, e = 0; e < c; e++) {
                var f = b[e];
                if ("function" === typeof f.Mb && !f.Mb()) break a
            }
            e = !1;f = [];
            for (var k = 0; k < c; k++) {
                var h = b[k],
                    g = h.next();
                h.Oa() && (e = !0);
                if (g.done) {
                    d.complete();
                    break a
                }
                f.push(g.value)
            }
            a.ka ? a.Wd(f) : d.next(f);e && d.complete()
        }
    };
    n.subscribe = function(a, b) {
        return Xc(this, this.observable, this, b)
    };
    var Ed = 1,
        Fd, Gd = {};

    function Hd(a) {
        return a in Gd ? (delete Gd[a], !0) : !1
    }
    var Id = function(a) {
        var b = Ed++;
        Gd[b] = !0;
        Fd || (Fd = Promise.resolve());
        Fd.then(function() {
            return Hd(b) && a()
        });
        return b
    };
    var Jd = function(a, b) {
        pd.call(this, a, b);
        this.O = a;
        this.$b = b
    };
    y(Jd, pd);
    Jd.EMPTY = pd.EMPTY;
    Jd.prototype.ob = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c) return pd.prototype.ob.call(this, a, b, c);
        a.actions.push(this);
        return a.Ub || (a.Ub = Id(a.flush.bind(a, void 0)))
    };
    Jd.prototype.nb = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c || null === c && 0 < this.delay) return pd.prototype.nb.call(this, a, b, c);
        0 === a.actions.length && (Hd(b), a.Ub = void 0)
    };
    var Kd = function() {
        N.apply(this, arguments)
    };
    y(Kd, N);
    Kd.now = N.now;
    Kd.prototype.flush = function(a) {
        this.active = !0;
        this.Ub = void 0;
        var b = this.actions,
            c, d = -1;
        a = a || b.shift();
        var e = b.length;
        do
            if (c = a.execute(a.state, a.delay)) break; while (++d < e && (a = b.shift()));
        this.active = !1;
        if (c) {
            for (; ++d < e && (a = b.shift());) a.unsubscribe();
            throw c;
        }
    };
    var Ld = new Kd(Jd);
    var Md = function(a, b) {
        pd.call(this, a, b);
        this.O = a;
        this.$b = b
    };
    y(Md, pd);
    Md.EMPTY = pd.EMPTY;
    Md.prototype.l = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (0 < b) return pd.prototype.l.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.O.flush(this);
        return this
    };
    Md.prototype.execute = function(a, b) {
        return 0 < b || this.closed ? pd.prototype.execute.call(this, a, b) : this.Vc(a, b)
    };
    Md.prototype.ob = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return null !== c && 0 < c || null === c && 0 < this.delay ? pd.prototype.ob.call(this, a, b, c) : a.flush(this)
    };
    var Nd = function() {
        N.apply(this, arguments)
    };
    y(Nd, N);
    Nd.now = N.now;
    var fd = new Nd(Md);
    (function() {
        function a() {
            this.message = "argument out of range";
            this.name = "ArgumentOutOfRangeError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "NotFoundError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "SequenceError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a() {
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();

    function Od(a) {
        return function(b) {
            var c = new Pd(a);
            b = b.i(c);
            return c.qc = b
        }
    }
    var Pd = function(a) {
        this.qb = a
    };
    Pd.prototype.call = function(a, b) {
        return b.subscribe(new Qd(a, this.qb, this.qc))
    };
    var Qd = function(a, b, c) {
        L.call(this, a);
        this.qb = b;
        this.qc = c
    };
    y(Qd, L);
    Qd.EMPTY = L.EMPTY;
    Qd.create = L.create;
    Qd.prototype.error = function(a) {
        if (!this.m) {
            try {
                var b = this.qb(a, this.qc)
            } catch (c) {
                L.prototype.error.call(this, c);
                return
            }
            this.ad();
            a = new Nc(this, void 0, void 0);
            this.add(a);
            Xc(this, b, void 0, void 0, a)
        }
    };

    function Rd(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        var d = b,
            e = void 0;
        "function" === typeof d[d.length - 1] && (e = d.pop());
        1 === d.length && jc(d[0]) && (d = d[0].slice());
        return function(f) {
            return f.i.call(gd([f].concat(x(d))), new Zc(e))
        }
    }

    function Sd(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return Rd.apply(null, x(b))
    };

    function Td(a) {
        return function(b) {
            return b.i(new Ud(a))
        }
    }
    var Ud = function(a) {
        this.uc = a
    };
    Ud.prototype.call = function(a, b) {
        return b.subscribe(new Vd(a, this.uc))
    };
    var Vd = function(a, b) {
        L.call(this, a);
        this.uc = b;
        this.gd = !1;
        this.Hb = [];
        this.index = 0
    };
    y(Vd, L);
    Vd.EMPTY = L.EMPTY;
    Vd.create = L.create;
    n = Vd.prototype;
    n.$ = function(a, b, c, d, e) {
        this.destination.next(a);
        Wd(this, e);
        Xd(this)
    };
    n.Ra = function(a) {
        this.K(a)
    };
    n.H = function(a) {
        (a = Wd(this, a)) && this.destination.next(a);
        Xd(this)
    };
    n.j = function(a) {
        var b = this.index++;
        try {
            var c = this.uc(a, b);
            if (c) {
                var d = Xc(this, c, a);
                d && !d.closed && (this.destination.add(d), this.Hb.push(d))
            }
        } catch (e) {
            this.destination.error(e)
        }
    };
    n.u = function() {
        this.gd = !0;
        Xd(this);
        this.unsubscribe()
    };
    var Wd = function(a, b) {
            b.unsubscribe();
            var c = a.Hb.indexOf(b); - 1 !== c && a.Hb.splice(c, 1);
            return b.Gd
        },
        Xd = function(a) {
            a.gd && 0 === a.Hb.length && a.destination.complete()
        };

    function Yd(a) {
        return function(b) {
            return b.i(new Zd(a))
        }
    }
    var Zd = function(a) {
        this.ua = a;
        this.ue = void 0
    };
    Zd.prototype.call = function(a, b) {
        return b.subscribe(new $d(a, this.ua, this.ue))
    };
    var $d = function(a, b, c) {
        L.call(this, a);
        this.ua = b;
        this.values = new Set;
        c && this.add(Xc(this, c))
    };
    y($d, L);
    $d.EMPTY = L.EMPTY;
    $d.create = L.create;
    n = $d.prototype;
    n.$ = function() {
        this.values.clear()
    };
    n.Ra = function(a) {
        this.K(a)
    };
    n.j = function(a) {
        this.ua ? this.Xd(a) : this.Wc(a, a)
    };
    n.Xd = function(a) {
        var b = this.destination;
        try {
            var c = this.ua(a)
        } catch (d) {
            b.error(d);
            return
        }
        this.Wc(c, a)
    };
    n.Wc = function(a, b) {
        var c = this.values;
        c.has(a) || (c.add(a), this.destination.next(b))
    };

    function P(a) {
        return function(b) {
            return b.i(new ae(a))
        }
    }
    var ae = function(a) {
        this.compare = a;
        this.ua = void 0
    };
    ae.prototype.call = function(a, b) {
        return b.subscribe(new be(a, this.compare, this.ua))
    };
    var be = function(a, b, c) {
        C.call(this, a);
        this.ua = c;
        this.ud = !1;
        "function" === typeof b && (this.compare = b)
    };
    y(be, C);
    be.EMPTY = C.EMPTY;
    be.create = C.create;
    be.prototype.compare = function(a, b) {
        return a === b
    };
    be.prototype.j = function(a) {
        try {
            var b = this.ua;
            var c = b ? b(a) : a
        } catch (e) {
            return this.destination.error(e)
        }
        b = !1;
        if (this.ud) try {
            var d = this.compare;
            b = d(this.key, c)
        } catch (e) {
            return this.destination.error(e)
        } else this.ud = !0;
        b || (this.key = c, this.destination.next(a))
    };

    function Q() {
        if (isNaN(1)) throw new TypeError("z");
        return function(a) {
            return a.i(new ce)
        }
    }
    var ce = function() {
        this.count = 1
    };
    ce.prototype.call = function(a, b) {
        return b.subscribe(new de(a, this.count))
    };
    var de = function(a, b) {
        C.call(this, a);
        this.count = b;
        this.Yd = 0
    };
    y(de, C);
    de.EMPTY = C.EMPTY;
    de.create = C.create;
    de.prototype.j = function(a) {
        var b = this.count,
            c = ++this.Yd;
        c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
    };

    function ee(a) {
        return function(b) {
            return b.i(new fe(a, b))
        }
    }
    var fe = function(a, b) {
        this.G = a;
        this.R = void 0;
        this.source = b
    };
    fe.prototype.call = function(a, b) {
        return b.subscribe(new ge(a, this.G, this.R, this.source))
    };
    var ge = function(a, b, c, d) {
        C.call(this, a);
        this.G = b;
        this.R = c;
        this.source = d;
        this.index = 0;
        this.R = c || this
    };
    y(ge, C);
    ge.EMPTY = C.EMPTY;
    ge.create = C.create;
    ge.prototype.H = function(a) {
        this.destination.next(a);
        this.destination.complete()
    };
    ge.prototype.j = function(a) {
        var b = !1;
        try {
            b = this.G.call(this.R, a, this.index++, this.source)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b || this.H(!1)
    };
    ge.prototype.u = function() {
        this.H(!0)
    };

    function he() {
        if (isNaN(1)) throw new TypeError("z");
        return function(a) {
            return a.i(new me)
        }
    }
    var me = function() {
        this.total = 1
    };
    me.prototype.call = function(a, b) {
        return b.subscribe(new ne(a, this.total))
    };
    var ne = function(a, b) {
        C.call(this, a);
        this.total = b;
        this.Jd = [];
        this.count = 0
    };
    y(ne, C);
    ne.EMPTY = C.EMPTY;
    ne.create = C.create;
    ne.prototype.j = function(a) {
        var b = this.Jd,
            c = this.total,
            d = this.count++;
        b.length < c ? b.push(a) : b[d % c] = a
    };
    ne.prototype.u = function() {
        var a = this.destination,
            b = this.count;
        if (0 < b)
            for (var c = this.count >= this.total ? this.total : this.count, d = this.Jd, e = 0; e < c; e++) {
                var f = b++ % c;
                a.next(d[f])
            }
        a.complete()
    };

    function oe(a) {
        return function(b) {
            return b.i(new pe(a))
        }
    }
    var pe = function(a) {
        this.value = a
    };
    pe.prototype.call = function(a, b) {
        return b.subscribe(new qe(a, this.value))
    };
    var qe = function(a, b) {
        C.call(this, a);
        this.value = b
    };
    y(qe, C);
    qe.EMPTY = C.EMPTY;
    qe.create = C.create;
    qe.prototype.j = function() {
        this.destination.next(this.value)
    };

    function re(a, b) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return function(d) {
            return d.i(new se(a, b, c))
        }
    }
    var se = function(a, b, c) {
        this.kc = a;
        this.seed = b;
        this.Ae = void 0 === c ? !1 : c
    };
    se.prototype.call = function(a, b) {
        return b.subscribe(new te(a, this.kc, this.seed, this.Ae))
    };
    var te = function(a, b, c, d) {
        C.call(this, a);
        this.kc = b;
        this.dc = c;
        this.Yc = d;
        this.index = 0
    };
    y(te, C);
    te.EMPTY = C.EMPTY;
    te.create = C.create;
    te.prototype.j = function(a) {
        var b = this.destination;
        if (this.Yc) {
            var c = this.index++;
            try {
                var d = this.kc(this.dc, a, c)
            } catch (e) {
                b.error(e);
                return
            }
            this.dc = d;
            b.next(d)
        } else this.dc = a, this.Yc = !0, b.next(a)
    };

    function ue(a, b) {
        return function(c) {
            var d = "function" === typeof a ? a : function() {
                return a
            };
            if ("function" === typeof b) return c.i(new ve(d, b));
            var e = Object.create(c, Jc);
            e.source = c;
            e.Vb = d;
            return e
        }
    }
    var ve = function(a, b) {
        this.Vb = a;
        this.qb = b
    };
    ve.prototype.call = function(a, b) {
        var c = this.qb,
            d = this.Vb();
        a = c(d).subscribe(a);
        a.add(b.subscribe(d));
        return a
    };

    function we(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        var d = b;
        1 === d.length && jc(d[0]) && (d = d[0]);
        return function(e) {
            return e.i(new xe(d))
        }
    }
    var xe = function(a) {
        this.Mc = a
    };
    xe.prototype.call = function(a, b) {
        return b.subscribe(new ye(a, this.Mc))
    };
    var ye = function(a, b) {
        L.call(this, a);
        this.destination = a;
        this.Mc = b
    };
    y(ye, L);
    ye.EMPTY = L.EMPTY;
    ye.create = L.create;
    ye.prototype.Ra = function() {
        ze(this)
    };
    ye.prototype.H = function() {
        ze(this)
    };
    ye.prototype.K = function() {
        ze(this);
        this.unsubscribe()
    };
    ye.prototype.u = function() {
        ze(this);
        this.unsubscribe()
    };
    var ze = function(a) {
        var b = a.Mc.shift();
        if (b) {
            var c = new Nc(a, void 0, void 0);
            a.destination.add(c);
            Xc(a, b, void 0, void 0, c)
        } else a.destination.complete()
    };

    function Ae() {
        return ue(new H)
    };

    function Be() {
        var a = new Dc(1, void 0, void 0);
        return function(b) {
            return ue(function() {
                return a
            }, void 0)(b)
        }
    };

    function Ce(a) {
        a = void 0 === a ? -1 : a;
        return function(b) {
            return 0 === a ? xc : 0 > a ? b.i(new De(-1, b)) : b.i(new De(a - 1, b))
        }
    }
    var De = function(a, b) {
        this.count = a;
        this.source = b
    };
    De.prototype.call = function(a, b) {
        return b.subscribe(new Ee(a, this.count, this.source))
    };
    var Ee = function(a, b, c) {
        C.call(this, a);
        this.count = b;
        this.source = c
    };
    y(Ee, C);
    Ee.EMPTY = C.EMPTY;
    Ee.create = C.create;
    Ee.prototype.complete = function() {
        if (!this.m) {
            var a = this.source,
                b = this.count;
            if (0 === b) return C.prototype.complete.call(this); - 1 < b && (this.count = b - 1);
            a.subscribe(this.ad())
        }
    };

    function Fe() {
        return new H
    }

    function Ge() {
        return function(a) {
            return J()(ue(Fe)(a))
        }
    };

    function He(a) {
        return function(b) {
            return b.i(new Ie(a))
        }
    }
    var Ie = function(a) {
        this.G = a
    };
    Ie.prototype.call = function(a, b) {
        return b.subscribe(new Je(a, this.G))
    };
    var Je = function(a, b) {
        C.call(this, a);
        this.G = b;
        this.Rc = !0;
        this.index = 0
    };
    y(Je, C);
    Je.EMPTY = C.EMPTY;
    Je.create = C.create;
    Je.prototype.j = function(a) {
        var b = this.destination;
        if (this.Rc) try {
            this.Rc = !!this.G(a, this.index++)
        } catch (c) {
            this.destination.error(c)
        }
        this.Rc || b.next(a)
    };

    function S(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        var d = b[b.length - 1];
        return Bc(d) ? (b.pop(), function(e) {
            return ld(b, e, d)
        }) : function(e) {
            return ld(b, e)
        }
    };
    var Ke = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? Ld : c;
        G.call(this);
        this.source = a;
        this.delayTime = b;
        this.O = c;
        0 > b && (this.delayTime = 0);
        Bc(c) || (this.O = Ld)
    };
    y(Ke, G);
    Ke.create = G.create;
    Ke.ke = function(a) {
        return this.add(a.source.subscribe(a.Sc))
    };
    Ke.prototype.I = function(a) {
        return this.O.l(Ke.ke, this.delayTime, {
            source: this.source,
            Sc: a
        })
    };

    function Le() {
        var a = void 0 === a ? 0 : a;
        return function(b) {
            return b.i(new Me(a))
        }
    }
    var Me = function(a) {
        this.O = fd;
        this.delay = a
    };
    Me.prototype.call = function(a, b) {
        return (new Ke(b, this.delay, this.O)).subscribe(a)
    };

    function T(a) {
        return function(b) {
            return b.i(new Ne(a))
        }
    }
    var Ne = function(a) {
        this.C = a
    };
    Ne.prototype.call = function(a, b) {
        return b.subscribe(new Oe(a, this.C))
    };
    var Oe = function(a, b) {
        L.call(this, a);
        this.C = b;
        this.index = 0
    };
    y(Oe, L);
    Oe.EMPTY = L.EMPTY;
    Oe.create = L.create;
    n = Oe.prototype;
    n.j = function(a) {
        var b = this.index++;
        try {
            var c = this.C(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }
        this.cc(c, a, b)
    };
    n.cc = function(a, b, c) {
        var d = this.Nb;
        d && d.unsubscribe();
        b = new Nc(this, b, c);
        this.destination.add(b);
        this.Nb = Xc(this, a, void 0, void 0, b)
    };
    n.u = function() {
        var a = this.Nb;
        a && !a.closed || L.prototype.u.call(this);
        this.unsubscribe()
    };
    n.qa = function() {
        this.Nb = null
    };
    n.H = function(a) {
        this.destination.remove(a);
        this.Nb = null;
        this.m && L.prototype.u.call(this)
    };
    n.$ = function(a, b) {
        this.destination.next(b)
    };

    function Pe(a) {
        return function(b) {
            return b.i(new Qe(a))
        }
    }
    var Qe = function(a) {
        this.Te = a
    };
    Qe.prototype.call = function(a, b) {
        a = new Re(a);
        var c = Xc(a, this.Te);
        return c && !a.Kd ? (a.add(c), b.subscribe(a)) : a
    };
    var Re = function(a) {
        L.call(this, a);
        this.Kd = !1
    };
    y(Re, L);
    Re.EMPTY = L.EMPTY;
    Re.create = L.create;
    Re.prototype.$ = function() {
        this.Kd = !0;
        this.complete()
    };
    Re.prototype.H = function() {};

    function Se(a, b) {
        b = void 0 === b ? !1 : b;
        return function(c) {
            return c.i(new Te(a, b))
        }
    }
    var Te = function(a, b) {
        this.G = a;
        this.Ac = b
    };
    Te.prototype.call = function(a, b) {
        return b.subscribe(new Ue(a, this.G, this.Ac))
    };
    var Ue = function(a, b, c) {
        C.call(this, a);
        this.G = b;
        this.Ac = c;
        this.index = 0
    };
    y(Ue, C);
    Ue.EMPTY = C.EMPTY;
    Ue.create = C.create;
    Ue.prototype.j = function(a) {
        var b = this.destination;
        try {
            var c = this.G(a, this.index++)
        } catch (d) {
            b.error(d);
            return
        }
        b = this.destination;
        c ? b.next(a) : (this.Ac && b.next(a), b.complete())
    };

    function Ve(a, b, c) {
        return function(d) {
            return d.i(new We(a, b, c))
        }
    }
    var We = function(a, b, c) {
        this.Re = a;
        this.error = b;
        this.complete = c
    };
    We.prototype.call = function(a, b) {
        return b.subscribe(new Xe(a, this.Re, this.error, this.complete))
    };
    var Xe = function(a, b, c, d) {
        C.call(this, a);
        this.ec = this.fc = this.hc = rd;
        this.fc = c || rd;
        this.ec = d || rd;
        kc(b) ? (this.ca = this, this.hc = b) : b && (this.ca = b, this.hc = b.next || rd, this.fc = b.error || rd, this.ec = b.complete || rd)
    };
    y(Xe, C);
    Xe.EMPTY = C.EMPTY;
    Xe.create = C.create;
    Xe.prototype.j = function(a) {
        try {
            this.hc.call(this.ca, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.next(a)
    };
    Xe.prototype.K = function(a) {
        try {
            this.fc.call(this.ca, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.error(a)
    };
    Xe.prototype.u = function() {
        try {
            this.ec.call(this.ca)
        } catch (a) {
            this.destination.error(a);
            return
        }
        return this.destination.complete()
    };

    function Ye(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return function(d) {
            var e;
            "function" === typeof b[b.length - 1] && (e = b.pop());
            return d.i(new Ze(b, e))
        }
    }
    var Ze = function(a, b) {
        this.ha = a;
        this.C = b
    };
    Ze.prototype.call = function(a, b) {
        return b.subscribe(new $e(a, this.ha, this.C))
    };
    var $e = function(a, b, c) {
        L.call(this, a);
        this.ha = b;
        this.C = c;
        this.Ga = [];
        a = b.length;
        this.values = Array(a);
        for (c = 0; c < a; c++) this.Ga.push(c);
        for (c = 0; c < a; c++) {
            var d = b[c];
            this.add(Xc(this, d, d, c))
        }
    };
    y($e, L);
    $e.EMPTY = L.EMPTY;
    $e.create = L.create;
    $e.prototype.$ = function(a, b, c) {
        this.values[c] = b;
        a = this.Ga;
        0 < a.length && (c = a.indexOf(c), -1 !== c && a.splice(c, 1))
    };
    $e.prototype.H = function() {};
    $e.prototype.j = function(a) {
        0 === this.Ga.length && (a = [a].concat(x(this.values)), this.C ? this.Ud(a) : this.destination.next(a))
    };
    $e.prototype.Ud = function(a) {
        try {
            var b = this.C.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function af(a) {
        return function(b) {
            return b.g(bf(a, Ae()))
        }
    }

    function U(a) {
        return function(b) {
            return b.g(bf(a, Be()))
        }
    }

    function bf(a, b) {
        function c(d) {
            return new G(function(e) {
                return d.subscribe(function(f) {
                    ac(a, function() {
                        return void e.next(f)
                    })
                }, function(f) {
                    ac(a, function() {
                        return void e.error(f)
                    })
                }, function() {
                    ac(a, function() {
                        return void e.complete()
                    })
                })
            })
        }
        return D(c, Le(), b, J(), c)
    };

    function V(a, b) {
        return I(b).g(U(a.queue))
    };

    function cf(a) {
        function b(c) {
            return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
            return "string" === typeof c
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    };
    var df = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    n = df.prototype;
    n.clone = function() {
        return new df(this.x, this.y)
    };
    n.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    n.equals = function(a) {
        return a instanceof df && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    n.translate = function(a, b) {
        a instanceof df ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var ef = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = ef.prototype;
    n.clone = function() {
        return new ef(this.width, this.height)
    };
    n.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var hf = function(a) {
            return a ? new ff(gf(a)) : Ia || (Ia = new ff)
        },
        jf = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : rb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return ob && Db("10") && a.pageYOffset != b.scrollTop ? new df(b.scrollLeft, b.scrollTop) : new df(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        kf = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Ca(f) || Ea(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Ea(f)) {
                                var k = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                k = "function" == typeof f.item;
                                break a
                            }
                        }
                        k = !1
                    }
                    Sa(k ? Wa(f) : f, d)
                }
            }
        },
        gf = function(a) {
            La(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        lf = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                La("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        ff = function(a) {
            this.Ma = a ||
                Aa.document || document
        };
    n = ff.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.Ma).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.Ma;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.Ma.createTextNode(String(a))
    };
    n.appendChild = function(a, b) {
        La(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    n.append = function(a, b) {
        kf(gf(a), a, arguments)
    };
    n.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    n.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var nf = function() {
            return !mf() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))
        },
        mf = function() {
            return z("iPad") || z("Android") && !z("Mobile") || z("Silk")
        };
    var of = function(a) {
        try {
            return !!a && null != a.location.href && kb(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var pf = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    var qf = function() {
            var a = void 0 === a ? Aa : a;
            return (a = a.performance) && a.now ? a.now() : null
        },
        rf = function(a) {
            var b = Aa.performance;
            return b && b.timing && b.timing[a] || 0
        };
    var sf = function(a, b) {
        var c = window;
        return function() {
            var d = qf(),
                e = 3;
            try {
                var f = b.apply(this, arguments)
            } catch (h) {
                throw e = 13, h;
            } finally {
                if (c.google_measure_js_timing && d) {
                    var k = qf() || 0;
                    d = {
                        label: a.toString(),
                        value: d,
                        duration: k - d,
                        type: e
                    };
                    e = c.google_js_reporting_queue = c.google_js_reporting_queue || [];
                    2048 > e.length && e.push(d)
                }
            }
            return f
        }
    };
    var tf = function() {
        Zb.apply(this, arguments)
    };
    y(tf, Zb);
    tf.prototype.na = function(a, b) {
        return Zb.prototype.na.call(this, a, sf(a, b))
    };

    function uf(a, b) {
        return function(c) {
            return new G(function(d) {
                return c.subscribe(function(e) {
                    a.na(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.na(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.na(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };

    function vf(a, b) {
        var c = !1;
        return new G(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var wf = function(a, b) {
        this.A = a;
        this.s = b
    };
    wf.prototype.now = function() {
        return this.A.performance.now()
    };
    wf.prototype.setTimeout = function(a, b) {
        return this.A.setTimeout(this.s.na(734, a), b)
    };
    wf.prototype.clearTimeout = function(a) {
        this.A.clearTimeout(a)
    };
    wf.prototype.interval = function(a) {
        var b = this;
        return new G(function(c) {
            var d = 0,
                e = b.A.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.A.clearInterval(e)
            }
        })
    };

    function xf(a) {
        var b = yf(a);
        return null === b ? V(a, null) : b.g(K(function(c) {
            c = c.Ld();
            if (Kb) c = Aa.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var k = c.charCodeAt(f);
                    255 < k && (d[e++] = k & 255, k >>= 8);
                    d[e++] = k
                }
                c = Lb(d, void 0)
            }
            return c
        }), Q(), U(a.queue))
    };

    function zf(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof Event) return new Event(a, b);
        if ("undefined" !== typeof document) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var Af = ["FRAME", "IMG", "IFRAME"],
        Bf = /^[01](px)?$/;

    function Cf(a, b) {
        var c = !0,
            d = !0,
            e = void 0,
            f = !1;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            e || (e = function(X, vb, wb) {
                X.addEventListener(vb, wb)
            });
            for (var k = !1, h = function(X) {
                    k || (k = !0, b(X))
                }, g, l, m = 0; m < Af.length; ++m)
                if (Af[m] == a.tagName) {
                    l = 3;
                    g = [a];
                    break
                }
            g || (g = a.querySelectorAll(Af.join(",")), l = 2);
            var q = 0,
                t = 0,
                E = a = !1;
            m = {};
            for (var u = 0; u < g.length; m = {
                    ub: m.ub
                }, u++) {
                var w = g[u];
                if (!("IMG" != w.tagName || !w.complete || w.naturalWidth && w.naturalHeight ? Bf.test(w.getAttribute("width")) &&
                        Bf.test(w.getAttribute("height")) : 1)) {
                    if ("IMG" == w.tagName) var R = w.naturalWidth && w.naturalHeight ? !0 : !1;
                    else try {
                        R = "complete" === (w.readyState ? w.readyState : w.contentWindow && w.contentWindow.document && w.contentWindow.document.readyState) ? !0 : !1
                    } catch (X) {
                        R = void 0 === d ? !1 : d
                    }
                    if (R) a = !0;
                    else {
                        q++;
                        m.ub = "IMG" === w.tagName;
                        var qa = function(X) {
                            return function() {
                                q--;
                                q || h(l);
                                X.ub && (t--, !t && E && h(l))
                            }
                        }(m);
                        e(w, "load", qa);
                        m.ub && (t++, e(w, "error", qa))
                    }
                }
            }
            g = null;
            if (0 === q && !a && "complete" === Aa.document.readyState) l = 5;
            else if (q ||
                !a) {
                e(Aa, "load", function() {
                    f && t ? E = !0 : h(4)
                });
                return
            }
            c && h(l)
        }
    };

    function Df(a, b, c) {
        if (a)
            for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a)
    }

    function Ef(a, b) {
        Df(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Ff(a, b) {
        if ("IFRAME" == a.tagName) b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Gf(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Hf(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (k) {}
        if ("object" === typeof d && d && "creativeLoad" === d.type) {
            var e = Gf(a);
            if (c.source && e) {
                var f;
                Ef(c.source, function(k) {
                    try {
                        if (k.parent === e) return f = k, !0
                    } catch (h) {}
                });
                f && Ff(a, function(k) {
                    if (k.contentWindow === f) return b(d), !0
                })
            }
        }
    }
    var If = function(a, b) {
        var c = "string" === typeof a ? document.getElementById(a) : a;
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var k = 0; k < d.length; ++k) try {
                            d[k](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Aa.addEventListener("message", function(f) {
                    Hf(c, e, f)
                })
            }
    };
    var Jf = function(a, b) {
            var c = this;
            this.global = a;
            this.Pc = b;
            this.Fd = this.document ? qd(I(!0), md(this.document, "visibilitychange")).g(uf(this.Pc.s, 748), K(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), P()) : I("visible");
            this.Ze = this.document ? md(this.document, "DOMContentLoaded").g(uf(this.Pc.s, 739), Q()) : I(zf("DOMContentLoaded"))
        },
        Kf = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        Lf = function(a) {
            return null !== a.document && void 0 !== a.document.visibilityState
        };
    Jf.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    Jf.prototype.querySelectorAll = function(a) {
        return this.document ? Wa(this.document.querySelectorAll(a)) : []
    };
    var Mf = function(a) {
        return null !== a.document && "function" === typeof a.document.elementFromPoint
    };
    Jf.prototype.elementFromPoint = function(a, b) {
        return this.document && Mf(this) ? this.document.elementFromPoint(a, b) : null
    };
    var Nf = function(a, b) {
        if (!a.document) return I(b);
        var c = new Dc(1),
            d = function() {
                c.next(b)
            };
        If(b, d);
        Cf(b, d);
        return c.g(uf(a.Pc.s, 749), Q())
    };
    p.Object.defineProperties(Jf.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return kb(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var Of = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function Pf(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function Qf(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function Rf(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var Sf = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    n = Sf.prototype;
    n.yc = function() {
        return this.right - this.left
    };
    n.wc = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new Sf(this.top, this.right, this.bottom, this.left)
    };
    n.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    n.contains = function(a) {
        return this && a ? a instanceof Sf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.expand = function(a, b, c, d) {
        Ea(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    n.translate = function(a, b) {
        a instanceof df ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (Oa(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    n.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Tf = function(a) {
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
    };
    var Vf = function(a) {
        A.call(this);
        Rb(this, a, Uf)
    };
    y(Vf, A);
    var Uf = [6];
    var Wf = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"],
        Xf = function(a) {
            return a.navigator && a.navigator.userAgentData && "function" === typeof a.navigator.userAgentData.getHighEntropyValues ? a.navigator.userAgentData.getHighEntropyValues(Wf).then(function(b) {
                var c = new Vf;
                c = Ub(c, 1, b.platform);
                c = Ub(c, 2, b.platformVersion);
                c = Ub(c, 3, b.architecture);
                c = Ub(c, 4, b.model);
                return Ub(c, 5, b.uaFullVersion)
            }) : null
        };
    var Yf = function(a, b) {
        a = void 0 === a ? window : a;
        b = void 0 === b ? null : b;
        cc.call(this);
        this.global = a;
        this.sa = b;
        this.Ed = md(this.global, "unload").g(uf(this.s, 747), Q());
        this.Ye = md(this.global, "beforeunload").g(uf(this.s, 747), Q());
        this.$e = md(this.global, "pagehide").g(uf(this.s, 747), Q());
        this.Dd = md(this.global, "load").g(uf(this.s, 738), Q());
        this.af = md(this.global, "resize").g(uf(this.s, 741));
        this.onMessage = md(this.global, "message").g(uf(this.s, 740));
        this.document = new Jf(this.global, this);
        this.s = new tf;
        this.o = new wf(this.A,
            this.s)
    };
    y(Yf, cc);
    var Zf = function(a, b) {
        b.start();
        return md(b, "message").g(uf(a.s, 740))
    };
    Yf.prototype.postMessage = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.global.postMessage(a, b, c)
    };
    Yf.prototype.yc = function() {
        return of(this.global) ? this.global.width : 0
    };
    Yf.prototype.wc = function() {
        return of(this.global) ? this.global.height : 0
    };
    var $f = function(a, b) {
        try {
            var c = a.global,
                d = mf() || nf();
            try {
                b && (c = c.top);
                a = c;
                d = void 0 === d ? !1 : d;
                b && null !== a && a != a.top && (a = a.top);
                try {
                    if (void 0 === d ? 0 : d) var e = (new ef(a.innerWidth, a.innerHeight)).round();
                    else {
                        var f = (a || window).document,
                            k = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new ef(k.clientWidth, k.clientHeight)).round()
                    }
                    var h = e
                } catch (t) {
                    h = new ef(-12245933, -12245933)
                }
                b = h;
                var g = jf(hf(c.document).Ma);
                if (-12245933 == b.width) {
                    var l = b.width;
                    var m = new Sf(l, l, l, l)
                } else m = new Sf(g.y, g.x + b.width,
                    g.y + b.height, g.x);
                var q = m
            } catch (t) {
                q = new Sf(-12245933, -12245933, -12245933, -12245933)
            }
            return {
                left: q.left,
                top: q.top,
                width: q.yc(),
                height: q.wc()
            }
        } catch (t) {
            return Of
        }
    };
    Yf.prototype.validate = function() {
        return this.global && !!this.A.setTimeout && !!this.A.performance && !!this.A.clearTimeout && !!this.A.setTimeout && !!this.A.setInterval && !!this.A.clearInterval && (!!this.A.fetch || "undefined" !== typeof XMLHttpRequest)
    };
    Yf.prototype.ping = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        var d = this;
        b = I.apply(null, x(b)).g(hd(function(e) {
            return ag(d, e)
        }), ee(function(e) {
            return e
        }), Be());
        b.connect();
        return b
    };
    var ag = function(a, b) {
            if (a.A.fetch) try {
                return gd(a.A.fetch(b, {
                    method: "GET",
                    cache: "no-cache",
                    keepalive: !0,
                    mode: "no-cors"
                })).g(K(function(c) {
                    return 200 === c.status
                }))
            } catch (c) {}
            try {
                return pf(a.global, b), I(!0)
            } catch (c) {
                return I(!1)
            }
        },
        yf = function(a) {
            return (a = Xf(a.global)) ? gd(a) : null
        };
    p.Object.defineProperties(Yf.prototype, {
        A: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Ca: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return ! of (this.global.top)
            }
        },
        zc: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ca || this.global.top !== this.global
            }
        },
        Ie: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.location.href
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A.ResizeObserver
            }
        },
        Fe: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return ob && Db(8)
            }
        }
    });
    var bg = function() {
        return hd(function(a) {
            return gd(a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass")).g(af(a.queue))
        })
    };
    var cg = !ob && !hb(),
        dg = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (cg && a.dataset) {
                if (!(!z("Android") || fb() || z("Firefox") || z("FxiOS") || z("Opera") || z("Silk") || b in a.dataset)) return null;
                a = a.dataset[b];
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var W = {},
        eg = (W["data-google-av-cxn"] = "_avicxn_", W["data-google-av-cpmav"] = "_cvu_", W["data-google-av-metadata"] = "_avm_", W["data-google-av-adk"] = "_adk_", W["data-google-av-btr"] = void 0, W["data-google-av-override"] = void 0, W["data-google-av-dm"] = void 0, W["data-google-av-immediate"] = void 0, W["data-google-av-aid"] = void 0, W["data-google-av-naid"] = void 0, W["data-google-av-inapp"] = void 0, W["data-google-av-slift"] = void 0, W["data-google-av-itpl"] = void 0, W["data-google-av-ext-cxn"] = void 0, W["data-google-av-rs"] =
            void 0, W["data-google-av-flags"] = void 0, W),
        Y = {},
        fg = (Y["data-google-av-adk"] = "googleAvAdk", Y["data-google-av-btr"] = "googleAvBtr", Y["data-google-av-cpmav"] = "googleAvCpmav", Y["data-google-av-dm"] = "googleAvDm", Y["data-google-av-ext-cxn"] = "googleAvExtCxn", Y["data-google-av-immediate"] = "googleAvImmediate", Y["data-google-av-inapp"] = "googleAvInapp", Y["data-google-av-itpl"] = "googleAvItpl", Y["data-google-av-metadata"] = "googleAvMetadata", Y["data-google-av-naid"] = "googleAvNaid", Y["data-google-av-override"] = "googleAvOverride",
            Y["data-google-av-rs"] = "googleAvRs", Y["data-google-av-slift"] = "googleAvSlift", Y["data-google-av-cxn"] = "googleAvCxn", Y["data-google-av-aid"] = void 0, Y["data-google-av-flags"] = "googleAvFlags", Y);

    function gg(a, b) {
        try {
            var c = a.getAttribute(b);
            if (null !== c) return c
        } catch (f) {}
        try {
            var d = eg[b];
            if (d && (c = a[d], void 0 !== c)) return c
        } catch (f) {}
        try {
            var e = fg[b];
            if (e) return dg(a, e)
        } catch (f) {}
        return null
    }

    function hg(a) {
        return K(function(b) {
            return gg(b, a)
        })
    };

    function ig(a) {
        var b = a.Dd,
            c = a.document.Ze;
        return qd(I({}), c, b).g(K(function() {
            return a
        }))
    };
    var kg = K(jg);

    function jg(a) {
        var b = Number(gg(a, "data-google-av-rs"));
        return isNaN(b) || 0 === b ? (a = a.id) ? 0 == a.lastIndexOf("DfaVisibilityIdentifier", 0) ? 6 : 0 == a.lastIndexOf("YtKevlarVisibilityIdentifier", 0) ? 15 : 0 == a.lastIndexOf("YtSparklesVisibilityIdentifier", 0) ? 17 : 0 : 0 : b
    };

    function mg(a, b) {
        b = void 0 === b ? xc : b;
        return qd(ig(a), b).g(bg(), Yd(), U(a.queue))
    };
    var ng = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = ng.prototype;
        this.name = String(a)
    };
    y(ng, Error);
    var og = function() {
        ng.call(this, 1E3);
        this.__proto__ = og.prototype
    };
    y(og, ng);
    var pg = function() {
        ng.call(this, 1003);
        this.__proto__ = pg.prototype
    };
    y(pg, ng);
    var qg = function() {
        ng.call(this, 1001);
        this.__proto__ = qg.prototype
    };
    y(qg, ng);
    var rg = function(a) {
        ng.call(this, 1004, String(a));
        this.Be = a;
        this.__proto__ = rg.prototype
    };
    y(rg, ng);
    var sg = function(a) {
        ng.call(this, 1005, a);
        this.__proto__ = sg.prototype
    };
    y(sg, ng);

    function tg(a, b) {
        return new G(function(c) {
            var d = !1,
                e = [],
                f = new Set,
                k = new Set,
                h = [];
            b.forEach(function(g, l) {
                h.push(g.subscribe(function(m) {
                    e[l] = m;
                    f.add(l);
                    d || (d = !0, bc(a, function() {
                        d = !1;
                        f.size === b.length && c.next(Wa(e))
                    }));
                    a.running || c.error(new rg(l))
                }, function(m) {
                    k.add(l);
                    f.add(l);
                    bc(a, function() {
                        c.error(m)
                    })
                }, function() {
                    k.add(l);
                    bc(a, function() {
                        k.size === b.length && c.complete()
                    })
                }))
            })
        })
    };

    function ug(a, b, c) {
        function d() {
            if (b.sa) {
                var u = b.sa,
                    w = u.next;
                var R = {
                    lg: c,
                    zg: e,
                    Ag: Object.assign({}, f),
                    rg: k,
                    errorMessage: h,
                    ng: g
                };
                R = {
                    sf: 1,
                    tf: 0,
                    uf: 0,
                    timestamp: b.o.now(),
                    Ob: b.Ob,
                    messageType: 2,
                    mg: R
                };
                w.call(u, R)
            }
        }
        for (var e = Object.keys(a), f = {}, k = !1, h = null, g = null, l = new Set, m = [], q = {}, t = v(e), E = t.next(); !E.done; q = {
                oa: q.oa
            }, E = t.next()) q.oa = E.value, E = a[q.oa].g(P(), K(function(u) {
            return function(w) {
                var R = String(u.oa);
                var qa = cf(w) ? w : String(w);
                f[R] = qa;
                d();
                R = {};
                return R[u.oa] = w, R
            }
        }(q)), Ve(function(u) {
                return function() {
                    l.add(u.oa)
                }
            }(q),
            function(u) {
                return function(w) {
                    g = String(u.oa);
                    h = String(w);
                    d()
                }
            }(q),
            function(u) {
                return function() {
                    l.has(u.oa) || (k = !0, d())
                }
            }(q))), m.push(E);
        return tg(b.queue, m).g(Od(function(u) {
            if (u instanceof rg) throw new sg(e[u.Be]);
            throw u;
        }), K(function(u) {
            return Object.freeze(Object.assign.apply(Object, [{}].concat(x(u))))
        }))
    };

    function vg(a, b, c, d) {
        var e = wg(xg(wg(yg, zg), Ag), Bg, wg(Cg, Dg));
        return a.s.na.bind(a.s)(733, function() {
            function f() {
                if (a.sa) {
                    var l = a.sa,
                        m = l.next;
                    var q = {
                        vg: [].concat(x(h.values())),
                        pg: g
                    };
                    q = {
                        sf: 1,
                        tf: 0,
                        uf: 0,
                        timestamp: a.o.now(),
                        Ob: a.Ob,
                        messageType: 1,
                        sg: q
                    };
                    m.call(l, q)
                }
            }
            var k = {},
                h = new Set,
                g = !1;
            try {
                return b.g(Od(function(l) {
                    d(Object.assign(Object.assign({}, k), {
                        error: l
                    }));
                    return xc
                }), Ve(function() {}, function() {}, function() {
                    g = !0;
                    f()
                }), hd(function(l) {
                    h.add(l.bb);
                    f();
                    try {
                        var m = c(a, l)
                    } catch (t) {
                        return d(Object.assign(Object.assign({},
                            k), {
                            error: t instanceof Error ? t : String(t)
                        })), xc
                    }
                    var q = {};
                    return ug(m, a, l.bb).g(Ve(function(t) {
                        q = t
                    }), Be(), J()).g(e, Od(function(t) {
                        d(Object.assign(Object.assign({}, q), {
                            error: t
                        }));
                        return xc
                    }), O(function(t) {
                        return t
                    }), he(), K(function() {
                        h.delete(l.bb) && f();
                        return !0
                    }))
                })).g(re(function(l) {
                    return l + 1
                }, 0), Od(function(l) {
                    d(Object.assign(Object.assign({}, k), {
                        error: l
                    }));
                    return xc
                }))
            } catch (l) {
                return d(Object.assign(Object.assign({}, k), {
                    error: l
                })), xc
            }
        })()
    };
    var Bg = D(O(function(a) {
        var b = a.Na;
        return a.wd || !!b
    }), K(function(a) {
        var b = a.context,
            c = a.oc;
        a.wd && 0 < c.length && b.ping.apply(b, x(c));
        return !0
    }), Q());

    function Eg(a, b) {
        b = b.g(K(function() {
            return 0
        }));
        var c = a.Ed.g(K(function() {
                return 0
            })),
            d = a.Ye.g(K(function() {
                return 0
            })),
            e = a.$e.g(K(function() {
                return 1
            })),
            f = a.document.Fd.g(O(function(k) {
                return "hidden" === k
            }), K(function() {
                return 1
            }));
        return qd(b, c, d, e, f).g(Se(function(k) {
            return 0 !== k
        }, !0), U(a.queue))
    };
    var Cg = D(Q(), K(function(a) {
        if (0 === a.Aa) return !0;
        var b = a.Ha(Object.assign(Object.assign({}, a), {
            ba: [a.Jb],
            kb: "eos-base",
            tb: 0,
            mb: "v"
        }));
        a.context.ping.apply(a.context, x(b));
        return !0
    }));
    var Dg = D(O(function(a) {
        var b = a.Ib;
        return 0 === a.Aa || 0 === b || 1 === b
    }), Q(), K(function(a) {
        if (0 === a.Aa) return !0;
        var b = a.Ha(Object.assign(Object.assign({}, a), {
            ba: [a.Jb],
            kb: "eos",
            tb: a.Zb ? 4 : 3,
            mb: "u"
        }));
        Fg.apply(null, [a.context, a.Aa].concat(x(b)));
        return !0
    }));

    function Fg(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        var f;
        d = v(d);
        for (e = d.next(); !e.done; e = d.next()) switch (e = e.value, b) {
            case 1:
                if (!a.global.fetch) return;
                try {
                    a.global.fetch(e, {
                        method: "GET",
                        cache: "no-cache",
                        keepalive: !0,
                        mode: "no-cors"
                    })
                } catch (k) {}
                break;
            case 2:
                if (null === (f = a.global.navigator) || void 0 === f || !f.sendBeacon) return;
                try {
                    a.global.navigator.sendBeacon(e)
                } catch (k) {}
                break;
            case 3:
                try {
                    pf(a.global, e)
                } catch (k) {}
        }
    };

    function Gg(a, b) {
        var c = Hg,
            d = Ig,
            e = Jg;
        b = void 0 === b ? .01 : b;
        return function(f) {
            I(Object.assign(Object.assign({}, f), {
                context: a,
                jb: e,
                Ha: d
            })).g(Kg(c, b)).subscribe()
        }
    }

    function Kg(a, b) {
        function c(d) {
            return function(e) {
                try {
                    return d(e)
                } catch (f) {
                    return {}
                }
            }
        }
        b = void 0 === b ? .01 : b;
        return D(O(function(d) {
                return void 0 !== d.error
            }), O(function() {
                return 0 < b ? Math.random() <= b : !1
            }), K(function(d) {
                return Object.assign(Object.assign({}, d), {
                    ba: [a],
                    jb: c(d.jb),
                    errorMessage: d.error instanceof Error && d.error.message ? d.error.message : String(d.error),
                    pe: d.error instanceof Error && d.error.stack ? String(d.error.stack) : null,
                    oe: d.error instanceof Error && d.error.name ? String(d.error.name) : null,
                    ne: String(d.context.s.Qd)
                })
            }),
            K(function(d) {
                var e = d.Ha(d);
                d.context.ping.apply(d.context, x(e));
                return !0
            }))
    };
    var Jg = function(a) {
        return {
            id: a.kb,
            mcvt: a.Ke,
            p: a.Gb,
            asp: a.lc,
            mtos: a.Le,
            tos: a.yf,
            v: a.be,
            bin: a.pc,
            avms: a.Oe,
            bs: a.ce,
            mc: a.Me,
            "if": a.he,
            app: a.fa,
            mse: a.Jc,
            mtop: a.Kc,
            itpl: a.Bc,
            adk: a.Ya,
            exk: a.nc,
            rs: a.Ta,
            met: a.$a,
            la: a.Ge,
            cr: a.Dc,
            osd: a.gb,
            uach: a.Df,
            vs: a.tb,
            eosc: a.Ib,
            eosm: a.Aa,
            rst: a.Ab,
            dlt: a.yb,
            rpt: a.zb,
            isd: a.Pa,
            lsd: a.Gc,
            msd: a.Rb,
            esd: a.me,
            ext: a.Kb,
            r: a.mb,
            context: a.ne,
            msg: a.errorMessage,
            stack: a.pe,
            name: a.oe,
            fum: a.se,
            speed: a.hf
        }
    };

    function wg(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return function(d) {
            var e = d.g(Ae(), J());
            d = b.map(function(f) {
                return e.g(f)
            });
            return M(d).g(K(function(f) {
                return Ua(f, function(k) {
                    return k
                })
            }), O(function(f) {
                return f
            }), Q())
        }
    };

    function xg(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        return function(d) {
            var e = d.g(Ae(), J());
            d = b.map(function(f) {
                return e.g(f)
            });
            return qd.apply(null, x(d)).g(O(function(f) {
                return f
            }), Q())
        }
    };
    var zg = D(O(function(a) {
        var b = a.td;
        return !!a.Na && b
    }), K(function(a) {
        var b = a.Ha(Object.assign(Object.assign({}, a), {
            kb: a.zf,
            tb: a.Zb ? 4 : 3,
            mb: a.Na
        }));
        a.context.ping.apply(a.context, x(b));
        return !0
    }), Q());

    function Lg(a) {
        return function(b) {
            return b.g(K(function(c) {
                a.running || Ma("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function Z(a) {
        return function(b) {
            return new G(function(c) {
                var d = !1,
                    e = b.g(Lg(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                ac(a, function() {
                    d || c.next(null)
                });
                return e
            })
        }
    };

    function Mg(a, b) {
        return function(c) {
            return c.g(T(function(d) {
                return new G(function(e) {
                    var f = a.MutationObserver;
                    if (f) {
                        var k = new f(function(h) {
                            e.next(h)
                        });
                        k.observe(d, b);
                        return function() {
                            k.disconnect()
                        }
                    }
                })
            }))
        }
    };
    var Ng = {
        fg: 0,
        Mf: 1,
        Pf: 2,
        Nf: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function Og(a, b) {
        var c = b.g(Mg(a, {
            attributes: !0
        }), U(a.queue));
        return M([b, c.g(U(a.queue), Z(a.queue))]).g(K(function(d) {
            return v(d).next().value
        }), hg("data-google-av-dm"), K(Pg))
    }

    function Pg(a) {
        return a && a in Ng ? Number(a) : 2
    };
    var Ag = function(a) {
        a = a.g(Ae(), J());
        var b = a.g(O(function(d) {
                return 3 !== d.Cd
            }), O(function(d) {
                return null !== d.Na
            }), K(function(d) {
                return d.fe ? d.td ? null : d.Na : "n"
            }), O(function(d) {
                return null !== d
            }), K(function(d) {
                return d
            })),
            c = a.g(O(function(d) {
                return 3 !== d.Cd
            }), K(function(d) {
                return d.qd instanceof og ? "msf" : d.hd instanceof pg ? "c" : d.ee ? null !== d.qd || null !== d.hd ? "x" : null : "pv"
            }), O(function(d) {
                return null !== d
            }), K(function(d) {
                return d
            }));
        return qd(c, b).g(Ye(a), Q(), K(function(d) {
            var e = v(d);
            d = e.next().value;
            e = e.next().value;
            d = e.Ha(Object.assign(Object.assign({}, e), {
                kb: e.vd,
                tb: 2,
                mb: d
            }));
            e.context.ping.apply(e.context, x(d));
            return !0
        }), Q())
    };

    function Qg(a) {
        return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(Qg).join(",") : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function Rg(a) {
        a = Object.entries(a).map(function(b) {
            var c = v(b);
            b = c.next().value;
            c = c.next().value;
            c = Qg(c);
            return null === c ? "" : b + "=" + c
        }).filter(function(b) {
            return "" !== b
        });
        return a.length ? a.join("&") : ""
    };

    function Ig(a) {
        var b = a.jb(a),
            c = Rg(b);
        return c ? Ta(a.ba, function(d) {
            d = 0 <= d.indexOf("?") ? d : d + "?";
            d = 0 <= "?&".indexOf(d.slice(-1)) ? d : d + "&";
            return d + c
        }) : a.ba
    };
    var Sg = function(a, b) {
        this.name = a;
        this.value = b
    };
    Sg.prototype.toString = function() {
        return this.name
    };
    var Tg = new Sg("OFF", Infinity),
        Ug = new Sg("WARNING", 900),
        Vg = new Sg("INFO", 800),
        Wg = new Sg("CONFIG", 700),
        Xg = function() {
            this.Cb = 0;
            this.clear()
        },
        Yg;
    Xg.prototype.clear = function() {
        this.ed = Array(this.Cb);
        this.jd = -1;
        this.yd = !1
    };
    var Zg = function(a, b, c) {
        this.reset(a || Tg, b, c, void 0, void 0)
    };
    Zg.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.Pe = b
    };
    Zg.prototype.getMessage = function() {
        return this.Pe
    };
    var $g = function(a, b) {
            this.level = null;
            this.ye = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.Je = {
                xc: function() {
                    return a
                }
            }
        },
        ah = function(a) {
            if (a.level) return a.level;
            if (a.parent) return ah(a.parent);
            Ma("Root logger has no level set.");
            return Tg
        },
        bh = function(a, b) {
            for (; a;) a.ye.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        ch = function() {
            this.entries = {};
            var a = new $g("");
            a.level = Wg;
            this.entries[""] = a
        },
        dh, eh = function(a, b, c) {
            var d = a.entries[b];
            if (d) return void 0 !== c && (d.level = c), d;
            d = eh(a, b.substr(0,
                b.lastIndexOf(".")));
            var e = new $g(b, d);
            a.entries[b] = e;
            d.children.push(e);
            void 0 !== c && (e.level = c);
            return e
        },
        fh = function() {
            dh || (dh = new ch);
            return dh
        },
        hh = function(a) {
            var b = gh,
                c = Ug,
                d;
            if (d = b)
                if (d = b && c) {
                    d = c.value;
                    var e = b ? ah(eh(fh(), b.xc())) : Tg;
                    d = d >= e.value
                }
            if (d) {
                c = c || Tg;
                d = eh(fh(), b.xc());
                "function" === typeof a && (a = a());
                Yg || (Yg = new Xg);
                e = Yg;
                b = b.xc();
                if (0 < e.Cb) {
                    var f = (e.jd + 1) % e.Cb;
                    e.jd = f;
                    e.yd ? (e = e.ed[f], e.reset(c, a, b), b = e) : (e.yd = f == e.Cb - 1, b = e.ed[f] = new Zg(c, a, b))
                } else b = new Zg(c, a, b);
                bh(d, b)
            }
        };
    var ih = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        gh = eh(fh(), "ads.common.UrlMacrosSubstitutor", Vg).Je;

    function jh(a, b) {
        return a.replace(ih, function(c, d) {
            try {
                var e = null !== b && d in b ? b[d] : void 0;
                if (null == e) return gh && hh("No value supplied for unsupported macro: " + d), c;
                e = e.toString();
                if ("" == e || !/^[\s\xa0]*$/.test(null == e ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
                gh && hh("Null value supplied for macro: " + d)
            } catch (f) {
                gh && hh("Failed to set macro: " + d)
            }
            return c
        })
    };

    function kh(a) {
        var b = a.jb(a),
            c = Rg(b);
        return Ta(a.ba, function(d) {
            var e = {};
            return jh(d, (e.VIEWABILITY = c, e))
        })
    };
    var yg = D(Se(function(a) {
        return null === a.Na
    }), O(function(a) {
        var b = a.Zb;
        return a.ze && b
    }), K(function(a) {
        var b = a.Ha(Object.assign(Object.assign({}, a), {
                kb: a.vd,
                tb: 4,
                mb: "v"
            })),
            c = a.sc;
        0 < c.length && a.context.ping.apply(a.context, x(c));
        a.context.ping.apply(a.context, x(b));
        return !0
    }), Q());
    var lh = function(a, b) {
        H.call(this);
        this.source = a;
        this.destination = b
    };
    y(lh, H);
    lh.create = H.create;
    lh.prototype.next = function(a) {
        this.destination.next(a)
    };
    lh.prototype.complete = function() {
        this.destination.complete()
    };
    lh.prototype.error = function(a) {
        this.destination.error(a)
    };
    lh.prototype.I = function(a) {
        return this.source.subscribe(a)
    };

    function mh(a) {
        return D(K(function(b) {
            var c;
            return null !== (c = null === b || void 0 === b ? void 0 : nh(b, a)) && void 0 !== c ? c : !1
        }), K(function(b) {
            return b ? !0 : null
        }))
    };

    function oh(a) {
        return D(K(function() {
            return !0
        }), S(!1), U(a))
    };

    function ph(a) {
        return 0 >= a.length ? xc : M(a.map(function(b) {
            var c = 0;
            return b.g(K(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(O(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), K(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function qh(a, b) {
        return D(hg("data-google-av-metadata"), K(function(c) {
            if (null === c) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            return 0 === c.length ? b(void 0) : b(c[0].slice(1).join("="))
        }))
    };
    var rh = {
        If: "asmreq",
        Jf: "asmres"
    };
    var sh = function(a) {
        A.call(this);
        Rb(this, a, null)
    };
    y(sh, A);
    sh.prototype.Md = function(a) {
        Ub(this, 1, a)
    };
    var th = function(a) {
        A.call(this);
        Rb(this, a, null)
    };
    y(th, A);
    th.prototype.Md = function(a) {
        Ub(this, 1, a)
    };
    var Vb = function(a) {
        A.call(this);
        Rb(this, a, null)
    };
    y(Vb, A);

    function uh(a, b) {
        var c = void 0 === c ? new Yf(a.global.top, a.sa) : c;
        var d = new MessageChannel;
        b = b.g(K(function(f) {
            return Number(f)
        }), O(function(f) {
            return !isNaN(f) && 0 !== f
        }), Ve(function(f) {
            var k = new sh;
            k.Md(f);
            f = {
                type: "asmreq",
                payload: k.Ld()
            };
            c.postMessage(f, "*", [d.port2])
        }), Q());
        var e = Zf(a, d.port1).g(O(function(f) {
            return "object" === typeof f.data
        }), K(function(f) {
            var k = f.data,
                h = Object.values(rh).includes(k.type);
            k = "string" === typeof k.payload;
            if (!h || !k || "asmres" !== f.data.type) return null;
            try {
                var g = f.data.payload,
                    l = g ? JSON.parse(g) : null;
                Ob = l;
                var m = new th(l);
                Ob = null;
                Ra(m, A);
                return m
            } catch (q) {
                return null
            }
        }), O(function(f) {
            return null !== f
        }), K(function(f) {
            return f
        }));
        return b.g(T(function(f) {
            return I(f).g(Sd(e))
        }), O(function(f) {
            var k = v(f);
            f = k.next().value;
            k = k.next().value;
            return null != Sb(k, 1) ? Tb(k, 1) === f : !1
        }), K(function(f) {
            f = v(f);
            f.next();
            return f.next().value
        }), af(a.queue))
    };

    function vh(a, b, c, d, e) {
        var f = b.Od,
            k = b.Qb;
        b = e.g(T(function(h) {
            return h ? f.g(O(function(g) {
                return g
            })) : k.g(oe(!0))
        })).g(Q(), T(function() {
            return uh(a, d)
        }), O(function(h) {
            var g = void 0 === g ? !1 : g;
            var l = Sb(h, 2);
            l = null == l ? l : !!l;
            return (null == l ? g : l) && null != Sb(h, 3) && null != Sb(h, 4) && null != Sb(h, 5)
        }), Q(), af(a.queue));
        c = M([c, b]).g(K(function(h) {
            var g = v(h);
            h = g.next().value;
            g = g.next().value;
            g = {
                x: Tb(Wb(g), 2),
                y: Tb(Wb(g), 1)
            };
            return Rf(h, g)
        }), P(Pf), U(a.queue), Z(a.queue));
        e = b.g(K(function(h) {
            return Tb(h, 4)
        }), U(a.queue), Z(a.queue));
        b = b.g(K(function(h) {
            return Tb(h, 5)
        }), U(a.queue), Z(a.queue));
        return {
            Pa: e,
            lc: c,
            Gc: b
        }
    };

    function wh(a) {
        return a.Ca ? function() {
            return sd
        } : D(O(function(b) {
            return null !== b
        }), K(function() {
            return (new Yf(a.global.top, a.sa)).scrollY
        }), Q())
    };

    function xh(a, b) {
        return b.Qb.g(Q(), K(function() {
            return Math.round(a.o.now())
        }))
    };
    var yh = function(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };
    var zh = K(function(a) {
        return [a.value.aa.width, a.value.aa.height]
    });

    function Ah(a, b) {
        return function(c) {
            return ph(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Bh() {
        return D(re(function(a, b) {
            return a.Qa && a.Qa.value ? {
                Qa: b,
                W: Math.max(b.timestamp - a.Qa.timestamp, 0) + a.W
            } : {
                Qa: b,
                W: 0
            }
        }, {
            W: 0
        }), O(function(a) {
            return !!a.Qa
        }), K(function(a) {
            return {
                timestamp: a.Qa.timestamp,
                value: Math.round(a.W)
            }
        }))
    };
    var Ch = {
        V: "ns",
        S: Of,
        aa: Of,
        M: new H,
        ta: "ns",
        X: Of,
        ga: Of
    };

    function Dh(a, b) {
        return Pf(a.aa, b.aa) && Pf(a.X, b.X) && Pf(a.S, b.S) && Pf(a.ga, b.ga) && a.ta === b.ta && a.M === b.M && a.V === b.V
    };

    function Eh(a) {
        return function(b) {
            return function(c) {
                var d = c.g(Ae(), J());
                c = b.element.g(P());
                var e = c.g(kg, P());
                d = d.g(K(function(f) {
                    return f.value
                }));
                return M([c, d, e]).g(K(function(f) {
                    var k = v(f);
                    f = k.next().value;
                    var h = k.next().value;
                    k = k.next().value;
                    var g = f.getBoundingClientRect();
                    var l = a.global,
                        m = new df(0, 0);
                    var q = (q = gf(f)) ? q.parentWindow || q.defaultView : window;
                    if (kb(q, "parent")) {
                        var t = f;
                        do {
                            if (q == l) {
                                var E = t,
                                    u = gf(E);
                                Pa(E, "Parameter is required");
                                var w = new df(0, 0);
                                var R = u ? gf(u) : document;
                                R = !ob || 9 <= Number(Gb) ||
                                    "CSS1Compat" == hf(R).Ma.compatMode ? R.documentElement : R.body;
                                E != R && (E = Tf(E), u = jf(hf(u).Ma), w.x = E.left + u.x, w.y = E.top + u.y)
                            } else w = La(t), w = Tf(w), w = new df(w.left, w.top);
                            m.x += w.x;
                            m.y += w.y
                        } while (q && q != l && q != q.parent && (t = q.frameElement) && (q = q.parent))
                    }
                    g = {
                        top: m.y,
                        left: m.x,
                        width: g.width,
                        height: g.height
                    };
                    l = Qf(g, h.S);
                    m = a.o.now();
                    q = Object;
                    t = q.assign;
                    h = Object.assign({}, h);
                    if (2 !== k || a.Ca || 0 >= l.width || 0 >= l.height) var qa = !1;
                    else try {
                        var X = a.document.elementFromPoint(l.left + l.width / 2, l.top + l.height / 2);
                        qa = X ? !Fh(X, f) :
                            !1
                    } catch (vb) {
                        qa = !1
                    }
                    return {
                        timestamp: m,
                        value: t.call(q, h, {
                            ta: "geo",
                            ga: qa ? Ch.ga : l,
                            X: g
                        })
                    }
                }), af(a.queue))
            }
        }
    }

    function Fh(a, b, c) {
        c = void 0 === c ? 0 : c;
        return a === b || lf(b, function(d) {
            return d === a
        }) ? !0 : b.ownerDocument && b.ownerDocument.defaultView && b.ownerDocument.defaultView === b.ownerDocument.defaultView.top ? !1 : 10 > c && b.ownerDocument && b.ownerDocument.defaultView && b.ownerDocument.defaultView.frameElement ? Fh(a, b.ownerDocument.defaultView.frameElement, c + 1) : !0
    };

    function Gh(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? Hh(a) : Ih(a), Be(), J())
        }
    }

    function Hh(a) {
        return function(b) {
            return b.g(T(function(c) {
                var d = a.ResizeObserver;
                if (!d) return I(Ch.X);
                var e = (new G(function(f) {
                    var k = new d(function(h) {
                        h.forEach(function(g) {
                            f.next(g)
                        })
                    });
                    k.observe(c);
                    return function() {
                        k.disconnect()
                    }
                })).g(uf(a.s, 736), K(function(f) {
                    return f.contentRect
                }));
                return qd(I(c.getBoundingClientRect()), e)
            }), P(Pf))
        }
    }

    function Ih(a) {
        return function(b) {
            var c = b.g(Mg(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.af;
            c = qd(b.g(K(function() {
                return zf("resize")
            })), c, d);
            return M(b, c).g(uf(a.s, 737), K(function(e) {
                return v(e).next().value.getBoundingClientRect()
            }), P(Pf))
        }
    };

    function Jh(a, b) {
        var c = Kh(a, b).g(Be(), J());
        return function(d) {
            d = d.g(T(function(e) {
                return e.element
            }), P());
            return M([c, d]).g(T(function(e) {
                var f = v(e);
                e = f.next().value;
                f = f.next().value;
                return Lh(a, e.De, Gh(a), e.Ve, e.te, f)
            }), af(a.queue))
        }
    }

    function Mh(a) {
        return K(function(b) {
            return "nio" !== b.value.V ? b : Object.assign(Object.assign({}, b), {
                value: Object.assign(Object.assign({}, b.value), {
                    S: $f(a, !0),
                    aa: $f(a, !0)
                })
            })
        })
    }

    function Nh(a, b) {
        return I(b).g(a, K(function() {
            return b
        }))
    }

    function Kh(a, b) {
        return "undefined" !== typeof performance && performance && a.MutationObserver && "undefined" !== typeof IntersectionObserver && IntersectionObserver ? (new G(function(c) {
            var d = new H,
                e = new IntersectionObserver(d.next.bind(d), {
                    threshold: b
                });
            c.next({
                Ve: d.g(uf(a.s, 735)),
                De: e,
                te: function() {
                    var f = e.takeRecords();
                    0 < f.length && d.next(f)
                }
            });
            return function() {
                e.disconnect()
            }
        })).g(Q(), Be(), J()) : Cc(new og)
    }

    function Oh(a) {
        return ed(a.sort(function(b, c) {
            return b.time - c.time
        }))
    }

    function Lh(a, b, c, d, e, f) {
        return new G(function(k) {
            b.observe(f);
            var h = new wc({
                    timestamp: a.o.now(),
                    value: Object.assign(Object.assign({}, Ch), {
                        V: "nio",
                        ta: "nio"
                    })
                }),
                g = d.g(hd(function(t) {
                    return Oh(t)
                }), O(function(t) {
                    return t.target === f
                }), K(function(t) {
                    return {
                        timestamp: t.time,
                        value: {
                            V: "nio",
                            S: t.rootBounds || Of,
                            aa: t.rootBounds || $f(a, !0),
                            M: l,
                            ta: "nio",
                            ga: t.intersectionRect,
                            X: t.boundingClientRect
                        }
                    }
                }), ue(h), J()).subscribe(k),
                l = new H,
                m = l.subscribe(function() {
                    e();
                    k.next({
                        timestamp: a.o.now(),
                        value: h.value.value
                    });
                    b.unobserve(f);
                    b.observe(f)
                }),
                q = Nh(c, f).subscribe(function() {
                    l.next()
                });
            return function() {
                b.unobserve(f);
                g.unsubscribe();
                q.unsubscribe();
                m.unsubscribe()
            }
        })
    };

    function Ph(a, b) {
        b = b.g(K(function() {
            return "t"
        }));
        var c = a.Ed.g(K(function() {
            return "u"
        }));
        return vd(b, c).g(Q(), U(a.queue))
    };

    function Qh(a) {
        return function(b) {
            var c;
            return b.g(Ve(function(d) {
                return void(c = d.timestamp)
            }), K(function(d) {
                return d.value
            }), a, K(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    }

    function Rh(a, b) {
        a.kd && (a.Tb = a.kd);
        a.kd = b;
        a.Tb && a.Tb.value ? a.Tb.value && (b = Math.max(0, b.timestamp - a.Tb.timestamp), a.totalTime += b, a.W += b) : a.W = 0;
        return a
    }

    function Sh() {
        return D(re(Rh, {
            totalTime: 0,
            W: 0
        }), K(function(a) {
            return a.totalTime
        }))
    }

    function Th() {
        return D(re(Rh, {
            totalTime: 0,
            W: 0
        }), K(function(a) {
            return a.W
        }))
    }

    function Uh(a, b, c) {
        c = void 0 === c ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp === b.timestamp && c(a.value, b.value)
    };
    var Vh = Qh(D(K(function(a) {
        return a.ga.width * a.ga.height / (a.X.width * a.X.height)
    }), K(function(a) {
        return isFinite(a) ? a : 0
    })));

    function Wh(a) {
        var b = new og;
        if (1 > a.length) return {
            fd: xc,
            de: xc
        };
        var c = new H;
        return {
            fd: a.slice(1).reduce(function(d, e) {
                return d.g(Od(function(f) {
                    c.next(f);
                    return e
                }))
            }, a[0]).g(Od(function(d) {
                c.next(d);
                return Cc(b)
            }), Ae(), J()),
            de: c
        }
    };

    function Xh(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function Yh(a) {
        if (!a.children) return a;
        for (var b = Wa(a.children); b.length;) {
            var c = b.filter(Xh);
            if (1 === c.length) return c[0];
            if (1 < c.length) break;
            b = Za(b, function(d) {
                return Wa(d.children)
            })
        }
        return a
    }

    function Zh(a, b, c, d) {
        if (c) return {
            Fb: b,
            Ea: I(null)
        };
        c = b.element.g(K(function(e) {
            a: if (Xh(e)) e = {
                    Sb: e,
                    Ea: "mue"
                };
                else {
                    var f = Yh(e);
                    if (Xh(f)) e = {
                        Sb: f,
                        Ea: "ie"
                    };
                    else {
                        if (d || a.zc)
                            if (f = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                e = {
                                    Sb: f,
                                    Ea: "ce"
                                };
                                break a
                            }
                        e = {
                            Sb: e,
                            Ea: "mue"
                        }
                    }
                }return e
        }), Ge());
        return {
            Fb: {
                bb: b.bb,
                element: c.g(K(function(e) {
                    return e.Sb
                }))
            },
            Ea: c.g(K(function(e) {
                return e.Ea
            }))
        }
    };

    function $h(a) {
        return function(b) {
            return b.g(Ye(a), K(function(c) {
                var d = v(c);
                c = d.next().value;
                d = d.next().value;
                var e = c.value;
                return {
                    timestamp: c.timestamp,
                    value: 1 <= e ? !0 : 0 >= e ? !1 : e >= d
                }
            }))
        }
    };
    var ai = K(function(a) {
        return "geo" === a.value.ta ? a.value.V : a.value.ta
    });
    var bi = Qh(D(K(function(a) {
        return a.ga.width * a.ga.height / (a.S.width * a.S.height)
    }), K(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function ci(a, b, c) {
        return a ? M([b, c]).g(O(function(d) {
            var e = v(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp === e.timestamp
        }), K(function(d) {
            var e = v(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function di(a) {
        return function(b) {
            var c = b.g(Vh),
                d = b.g(bi);
            return a.g(T(function(e) {
                return ci(e, c, d)
            }))
        }
    };

    function ei(a, b, c) {
        var d = c.sd,
            e = c.nd,
            f = c.Ef,
            k = c.$d,
            h = c.Ad,
            g = c.Ne;
        c = fi(a, b);
        b = gi(a, b);
        var l = hi(a, d, g, c),
            m = l.g(K(function(u) {
                return u.value
            }), P(), U(a.queue), re(function(u, w) {
                return Math.max(u, w)
            }, 0));
        f = ii(a, c, f, k);
        var q = f.g(S(!1), P(), K(function(u) {
            return u ? h : e
        }));
        k = l.g($h(q), P(), U(a.queue));
        var t = M([k, c]).g(O(function(u) {
            var w = v(u);
            u = w.next().value;
            w = w.next().value;
            return u.timestamp === w.timestamp
        }), K(function(u) {
            var w = v(u);
            u = w.next().value;
            w = w.next().value;
            return {
                visible: u.value,
                rd: w.value.X
            }
        }), re(function(u,
            w) {
            return !w.visible && u.visible ? u : w
        }, {
            visible: !1,
            rd: Of
        }), K(function(u) {
            return u.rd
        }), S(Of), U(a.queue), P(Pf));
        g = g.g(P(), oe(void 0));
        q = M([g, q]).g(oe(void 0));
        a = c.g(O(function(u) {
            return "ns" !== u.value.V && "ns" !== u.value.ta
        }), re(function(u) {
            return u + 1
        }, 0), S(0), U(a.queue));
        var E = b.g(K(function(u) {
            return null !== u
        }));
        return {
            qf: g,
            rf: q,
            we: {
                Oe: c.g(ai),
                Gb: t.g(P(Pf)),
                visible: k.g(P(Uh)),
                Cf: l.g(P(Uh)),
                Me: m,
                ce: c.g(zh, P(Xa)),
                qd: b,
                M: c.g(K(function(u) {
                    return u.value.M
                })),
                Ge: f,
                sd: d,
                xe: E,
                Bg: a
            }
        }
    }

    function gi(a, b) {
        return b.g(O(function() {
            return !1
        }), K(function(c) {
            return c
        }), Od(function() {
            return V(a, new og)
        }), Z(a.queue))
    }

    function fi(a, b) {
        return b.g(we(sd), U(a.queue)).g(P(function(c, d) {
            return Uh(c, d, Dh)
        }), S({
            timestamp: a.o.now(),
            value: Ch
        }), U(a.queue))
    }

    function hi(a, b, c, d) {
        c = d.g(di(c), Qh(K(function(e) {
            var f = Math.pow(10, 2);
            return Math.round(e * f) / f
        })), U(a.queue));
        return M([c, b]).g(K(function(e) {
            var f = v(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: Math.max(f.timestamp, e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), P(Uh), U(a.queue))
    }

    function ii(a, b, c, d) {
        b = b.g(K(function(e) {
            return 242500 <= e.value.X.width * e.value.X.height
        }));
        c = M([b, c]);
        return d ? c.g(K(function(e) {
            return e.some(function(f) {
                return f
            })
        }), S(!1), P(), U(a.queue)) : V(a, !1)
    };
    var ji = D(hg("data-google-av-itpl"), K(function(a) {
        return Number(a)
    }), K(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var ki = {
            Hf: "addEventListener",
            Rf: "getMaxSize",
            Tf: "getScreenSize",
            Uf: "getState",
            Vf: "getVersion",
            bg: "removeEventListener",
            Wf: "isViewable"
        },
        mi = function(a, b) {
            b = void 0 === b ? function(f) {
                return li(f)
            } : b;
            this.T = null;
            this.Ce = new H;
            var c = a.zc,
                d = !a.Ca;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Db = b(e);
                    this.T = e;
                    this.Fa = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Db = b(a), this.T = a, this.Fa = c ? d ? 2 : 1 : 0) : (this.Fa = -1, this.Db = 2)
        };
    mi.prototype.addEventListener = function(a, b) {
        return this.Ua("addEventListener", a, b)
    };
    mi.prototype.removeEventListener = function(a, b) {
        return this.Ua("removeEventListener", a, b)
    };
    var ni = function(a) {
        a = a.Ua("getVersion");
        return "string" === typeof a ? a : ""
    };
    mi.prototype.getState = function() {
        var a = this.Ua("getState");
        return "string" === typeof a ? a : ""
    };
    var oi = function(a) {
            a = a.Ua("isViewable");
            return "boolean" === typeof a ? a : !1
        },
        pi = function(a) {
            if (a.T) return a = a.T.AFMA_LIDAR, "string" === typeof a ? a : void 0
        },
        li = function(a) {
            return a ? a.IS_GMA_SDK ? Object.values(ki).every(function(b) {
                return "function" === typeof a[b]
            }) ? 0 : 1 : 2 : 1
        };
    mi.prototype.Ua = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (this.T) try {
            return this.T[a].apply(this.T, x(c))
        } catch (e) {
            this.Ce.next(a)
        }
    };
    p.Object.defineProperties(mi.prototype, {
        ld: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.T) {
                    var a = this.T.AFMA_LIDAR_EXP_1;
                    return void 0 === a ? void 0 : !!a
                }
            },
            set: function(a) {
                this.T && (this.T.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function qi(a, b) {
        return -1 !== (new mi(a)).Fa ? V(a, !0) : b.g(hg("data-google-av-inapp"), K(function(c) {
            return null !== c
        }), U(a.queue))
    };
    var si = function(a, b) {
            var c = this;
            this.context = a;
            this.Hc = this.Pb = null;
            this.jf = b.g(P()).subscribe(function(d) {
                ri(c);
                c.Hc = d
            })
        },
        ti = function(a, b) {
            ri(a);
            a.Pb = a.context.o.setTimeout(function() {
                var c;
                return void(null === (c = a.Hc) || void 0 === c ? void 0 : c.next())
            }, b)
        },
        ri = function(a) {
            null !== a.Pb && a.context.o.clearTimeout(a.Pb);
            a.Pb = null
        };

    function ui(a, b, c, d, e) {
        var f = void 0 === f ? new si(a, c) : f;
        return (new G(function(k) {
            var h = b.g(S(void 0), T(function() {
                return vi(d)
            })).g(K(function(g) {
                var l = g.timestamp,
                    m = g.value;
                g = m.visible;
                m = m.Eb;
                var q = m >= e;
                q || !g ? ri(f) : (l = Math.max(0, a.o.now() - l), ti(f, Math.max(0, e - m - l)));
                return q
            }), re(function(g, l) {
                return l || g
            }, !1), P()).subscribe(k);
            return function() {
                ri(f);
                f.jf.unsubscribe();
                f.Hc = null;
                h.unsubscribe()
            }
        })).g(Se(function(k) {
            return !k
        }, !0), U(a.queue))
    }

    function vi(a) {
        return yd(a, a.g(Bh())).g(K(function(b) {
            var c = v(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    Eb: c.value
                }
            }
        }), P(function(b, c) {
            return Uh(b, c, function(d, e) {
                return d.Eb === e.Eb && d.visible === e.visible
            })
        }))
    };
    var wi = D(hg("data-google-av-cxn"), K(function(a) {
        if (!a) throw new qg;
        return a.split("|")
    }));

    function xi(a, b) {
        return {
            Ya: b.g(hg("data-google-av-adk")),
            oc: b.g(hg("data-google-av-btr"), P(), K(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            sc: b.g(hg("data-google-av-cpmav"), P(), K(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            je: Og(a, b),
            flags: b.g(hg("data-google-av-flags"), P()),
            fa: qi(a, b),
            Dc: b.g(qh("cr", function(c) {
                return "1" === c
            }), P()),
            Ec: b.g(qh("xdi", function(c) {
                return "1" === c
            })),
            Bc: b.g(ji),
            Ic: b.g(hg("data-google-av-metadata")),
            Ta: b.g(kg),
            ba: b.g(wi),
            Ff: b.g(qh("la", function(c) {
                return "1" === c
            }), P())
        }
    };

    function yi() {
        return D(Th(), re(function(a, b) {
            return Math.max(a, b)
        }, 0), K(function(a) {
            return Math.round(a)
        }))
    }

    function zi(a) {
        return D($h(I(a)), yi())
    };

    function Ai(a, b, c, d, e) {
        c = c.g(K(function() {
            return !1
        }));
        d = M([e, d]).g(T(function(f) {
            f = v(f).next().value;
            return Bi(b, f)
        }));
        return qd(I(!1), c, d).g(P(), U(a.queue))
    }

    function Bi(a, b) {
        return a.g(K(function(c) {
            return b || 0 === c || 2 === c
        }))
    };
    var Ci = [33, 32],
        Di = D(ji, K(function(a) {
            return 0 <= Ci.indexOf(a)
        }), P());

    function Ei(a, b, c, d, e) {
        var f = c.g(K(function(h) {
                return 9 === h
            })),
            k = b.element.g(Di);
        c = e.g(O(function(h) {
            return h
        }), T(function() {
            return M([f, k])
        }), K(function(h) {
            h = v(h);
            var g = h.next().value;
            return !h.next().value || g
        }), P());
        c = M([c, d.g(P())]).g(K(function(h) {
            var g = v(h);
            h = g.next().value;
            g = g.next().value;
            return Zh(a, b, !h, g)
        }), Be(), J());
        d = c.g(K(function(h) {
            return h.Fb
        }));
        c = c.g(T(function(h) {
            return h.Ea
        }), S(null), P(), U(a.queue));
        return {
            va: d,
            $a: c
        }
    };

    function Fi(a) {
        return D(T(function(b) {
            return Nf(a.document, b)
        }), U(a.queue))
    };
    var Gi = function(a, b, c, d, e) {
        this.Qb = b.element.g(Fi(a), U(a.queue));
        this.Od = Ai(a, c, b.element, this.Qb, d);
        a = Ei(a, b, e, d, this.Od);
        b = a.$a;
        this.va = a.va;
        this.$a = b
    };

    function Hi(a, b, c) {
        return b.g(T(function(d) {
            return d && 0 === c || !d && 1 === c ? Cc(new og) : a
        }))
    };
    var Ii = function() {};
    var Ji = function(a, b) {
        this.context = a;
        this.wf = b
    };
    y(Ji, Ii);
    Ji.prototype.ya = function(a, b) {
        var c = this.wf.map(function(d) {
            return d.ya(a, b)
        });
        return {
            Ba: Wh(c.map(function(d) {
                return d.Ba
            })).fd.g(U(this.context.queue)),
            xa: Object.assign.apply(Object, [{}].concat(x(c.map(function(d) {
                return d.xa
            }))))
        }
    };

    function Ki(a, b) {
        var c = a.g(Ae(), J());
        return T(function(d) {
            return c.g(b(d))
        })
    };

    function Li(a, b) {
        var c = void 0 === c ? function() {
            var e = ( of (a.global) ? a.global.innerWidth : 0) || a.yc() || 0,
                f = ( of (a.global) ? a.global.innerHeight : 0) || a.wc() || 0;
            return {
                left: 0,
                top: 0,
                width: e,
                height: f
            }
        } : c;
        if (!(a.Ca && Mf(a.document) && a.Fe)) return Cc(new og);
        var d = new H;
        return qd(I({}), b, d).g(K(function() {
            var e = Mi(a, c);
            return {
                timestamp: a.o.now(),
                value: {
                    V: "iem",
                    S: e,
                    aa: e,
                    M: d
                }
            }
        }), U(a.queue))
    }

    function Mi(a, b) {
        b = b();
        var c = jf(document),
            d = function(t, E) {
                return !!a.document.elementFromPoint(t, E)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            k = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(k, h);
        if (b && c) return {
            top: f,
            left: e,
            width: k - e,
            height: h - f
        };
        var g = d(k, f),
            l = d(e, h);
        if (b) h = Ni(f, h, function(t) {
            return d(e, t)
        }), k = Ni(e, k, function(t) {
            return d(t, f)
        });
        else if (g) h = Ni(f, h, function(t) {
            return d(k, t)
        }), e = Ni(k, e, function(t) {
            return d(t, f)
        });
        else if (l) f = Ni(h, f, function(t) {
            return d(e,
                t)
        }), k = Ni(e, k, function(t) {
            return d(t, h)
        });
        else if (c) f = Ni(h, f, function(t) {
            return d(k, t)
        }), e = Ni(k, e, function(t) {
            return d(t, h)
        });
        else {
            var m = Math.floor((e + k) / 2),
                q = Math.floor((f + h) / 2);
            if (!d(m, q)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Ni(q, f, function(t) {
                return d(m, t)
            });
            h = Ni(q, h, function(t) {
                return d(m, t)
            });
            e = Ni(m, e, function(t) {
                return d(t, q)
            });
            k = Ni(m, k, function(t) {
                return d(t, q)
            })
        }
        return {
            top: f,
            left: e,
            width: k - e,
            height: h - f
        }
    }

    function Ni(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Oi = function(a, b, c) {
        this.le = c = void 0 === c ? Ki(Li(a, b), Eh(a)) : c
    };
    y(Oi, Ii);
    Oi.prototype.ya = function(a, b) {
        return {
            Ba: Hi(a.va.g(this.le), b.fa, 0),
            xa: {}
        }
    };

    function Pi(a, b) {
        if (a.Ca) return Cc(new og);
        var c = new H;
        return qd(I({}), b, c).g(K(function() {
            return {
                timestamp: a.o.now(),
                value: {
                    V: "geo",
                    S: Qi(a),
                    aa: $f(a, !0),
                    M: c
                }
            }
        }), af(a.queue))
    }

    function Qi(a) {
        var b = $f(a, !1);
        if (!a.zc || ! of (a.global.parent) || a.global.parent === a.global) return b;
        var c = Qi(new Yf(a.global.parent, a.sa));
        a = a.global.frameElement.getBoundingClientRect();
        return Qf(Rf(Qf(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Ri = function(a, b, c) {
        this.ve = c = void 0 === c ? Ki(Pi(a, b), Eh(a)) : c
    };
    y(Ri, Ii);
    Ri.prototype.ya = function(a, b) {
        return {
            Ba: Hi(a.va.g(this.ve), b.fa, 0),
            xa: {}
        }
    };
    var Si = function(a, b, c) {
        c = void 0 === c ? Jh(a, b) : c;
        this.context = a;
        this.Ee = c
    };
    y(Si, Ii);
    Si.prototype.ya = function(a, b) {
        return {
            Ba: Hi(a.va.g(this.Ee, Mh(this.context)), b.fa, 0),
            xa: {}
        }
    };
    var Ti = Cc(new og),
        Ui = T(function() {
            return Ti
        });

    function Vi(a, b, c, d, e) {
        var f = void 0 === f ? new mi(a) : f;
        var k = void 0 === k ? vf(a.o, 500) : k;
        var h = void 0 === h ? vf(a.o, 100) : h;
        e = I(f).g(Wi(c), Ve(function(g) {
            d.next(g.Fa)
        }), Xi(a, h), Yi(a), Zi(a, e), Be(), J());
        f = new H;
        b = qd(I({}), b, f);
        return e.g($i(a, f, b, k, c), U(a.queue))
    }

    function Zi(a, b) {
        return D(function(c) {
            return M([c, b])
        }, Td(function(c) {
            c = v(c);
            var d = c.next().value;
            return 9 !== c.next().value || oi(d) ? I(!0) : aj(a, d, "viewableChange").g(O(function(e) {
                return v(e).next().value
            }), Q())
        }), K(function(c) {
            return v(c).next().value
        }))
    }

    function Wi(a) {
        return T(function(b) {
            if (-1 === b.Fa) return a.next("if"), Ti;
            if (0 !== b.Db) {
                switch (b.Db) {
                    case 1:
                        a.next("mm");
                        break;
                    case 2:
                        a.next("ng");
                        break;
                    default:
                        a.next("i")
                }
                return Ti
            }
            return I(b)
        })
    }

    function Xi(a, b) {
        return Td(function() {
            var c = a.Dd;
            return "complete" === Kf(a.document) ? I(!0) : c.g(Td(function() {
                return b
            }))
        })
    }
    var Yi = function(a) {
        return T(function(b) {
            return "loading" !== b.getState() ? I(b) : aj(a, b, "ready").g(K(function() {
                return b
            }))
        })
    };

    function $i(a, b, c, d, e) {
        return T(function(f) {
            var k = pi(f);
            if ("string" !== typeof k) return e.next("nc"), Ti;
            void 0 !== f.ld && (f.ld = !0);
            k = aj(a, f, k, bj);
            var h = {
                version: ni(f),
                Fa: f.Fa
            };
            k = k.g(K(function(l) {
                return cj.apply(null, [a, b, f, h].concat(x(l)))
            }));
            var g = d.g(Ve(function() {
                e.next("mt")
            }), Ui);
            k = vd(k, g);
            return M([k, c]).g(K(function(l) {
                l = v(l).next().value;
                return Object.assign(Object.assign({}, l), {
                    timestamp: a.o.now()
                })
            }))
        })
    }

    function bj(a, b) {
        return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y)
    }

    function cj(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : Of;
        c = c.Ua("getMaxSize");
        var k = null != c && "number" === typeof c.width && "number" === typeof c.height ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (k) {
            var h = Number(String(k.width));
            k = Number(String(k.height));
            c = isNaN(h) || isNaN(k) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: k
            }
        }
        a = {
            value: {
                S: e,
                aa: c,
                V: "mraid",
                M: b
            },
            timestamp: a.o.now()
        };
        return Object.assign(Object.assign(Object.assign({}, a), d), {
            ig: f
        })
    }

    function aj(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        return (new G(function(e) {
            var f = a.s.na(745, function(k) {
                for (var h = [], g = 0; g < arguments.length; ++g) h[g - 0] = arguments[g];
                e.next(h)
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(O(function(e) {
            return d.apply(null, x(e))
        }))
    };
    var dj = function(a, b) {
        this.context = a;
        this.ff = b
    };
    y(dj, Ii);
    dj.prototype.ya = function(a, b) {
        var c = new Dc(1),
            d = new Dc(1),
            e = Ki(Vi(this.context, this.ff, c, d, b.Ta), Eh(this.context));
        return {
            Ba: Hi(a.va.g(e), b.fa, 1),
            xa: {
                Jc: c.g(U(this.context.queue), Z(this.context.queue)),
                Kc: d.g(U(this.context.queue), Z(this.context.queue))
            }
        }
    };

    function ej(a) {
        a = a.global;
        try {
            if (a && a.Goog_AdSense_getAdAdapterInstance) return a
        } catch (c) {}
        for (var b = 0; a && 5 > b++;) {
            try {
                if (a.google_osd_static_frame) return a.google_osd_static_frame
            } catch (c) {}
            try {
                if (a.aswift_0 && a.aswift_0.google_osd_static_frame) return a.aswift_0.google_osd_static_frame
            } catch (c) {}
            try {
                a = a !== a.parent ? a.parent : null
            } catch (c) {
                break
            }
        }
        return null
    };
    var fj = {
        Sf: "goog_get_override",
        Xf: "goog_listener_ready",
        ag: "goog_provide_override",
        Gf: "goog_acknowledge_monitoring",
        Lf: "goog_creative_loaded",
        Of: "goog_dom_content_loaded",
        Qf: "goog_get_mode",
        Zf: "goog_av_measurement_hold_update",
        $f: "goog_provide_mode",
        cg: "goog_request_monitoring",
        dg: "goog_image_request",
        eg: "goog_stop_monitoring",
        gg: "goog_update_data",
        Yf: "goog_listener_status",
        Kf: "goog_adspeed"
    };

    function gj(a, b, c) {
        a = a[b];
        void 0 !== a && (c[b] = "true" == a)
    }

    function hj(a, b, c) {
        a = a[b];
        void 0 !== a && (c[b] = Number(a))
    }

    function ij(a, b, c) {
        a = a[b];
        void 0 !== a && (c[b] = decodeURIComponent(a))
    }

    function jj(a, b, c) {
        a = a[b];
        if ("string" === typeof a && (a = a.split("-"), 4 === a.length)) {
            var d = Number(a[0]),
                e = Number(a[1]);
            c[b] = {
                top: d,
                left: e,
                width: Math.max(0, Number(a[3]) - e),
                height: Math.max(0, Number(a[2]) - d)
            }
        }
    }

    function kj(a, b) {
        var c = [];
        $a(lj(a, b), function(d, e) {
            e = encodeURIComponent(e);
            c.push(e + "=" + d)
        });
        return c.join("\n")
    }

    function lj(a, b) {
        var c = {};
        $a(b, function(d, e) {
            if ("object" === typeof d && "number" === typeof d.left && "number" === typeof d.top && "number" === typeof d.width && "number" === typeof d.height) {
                var f = [];
                f[1] = String(d.left);
                f[3] = String(d.left + d.width);
                f[0] = String(d.top);
                f[2] = String(d.top + d.height);
                d = f.join("-")
            } else d = "string" === typeof d ? encodeURIComponent(d) : d;
            c[e] = d
        });
        c[24] = a.o.now();
        return c
    };

    function mj(a) {
        var b = ej(a);
        return b ? new Yf(b, a.sa) : null
    }

    function nj(a) {
        var b = void 0 === b ? mj : b;
        var c = a.onMessage.g(O(function(e) {
                return e && e.data
            }), K(function(e) {
                var f = e.data;
                if ("string" !== typeof f) e = null;
                else {
                    e = {};
                    f = f.split("\n");
                    for (var k = 0; k !== f.length; ++k) {
                        var h = f[k],
                            g = h.indexOf("=");
                        0 >= g || (e[Number(h.substr(0, g))] = h.substr(g + 1))
                    }(f = decodeURIComponent(e[0])) && Object.values(fj).includes(f) ? (k = {}, f = (k[0] = f, k), gj(e, 36, f), gj(e, 26, f), gj(e, 15, f), gj(e, 8, f), gj(e, 11, f), gj(e, 16, f), gj(e, 5, f), gj(e, 18, f), hj(e, 4, f), hj(e, 33, f), hj(e, 6, f), hj(e, 25, f), hj(e, 28, f), hj(e,
                        29, f), hj(e, 24, f), hj(e, 31, f), hj(e, 30, f), hj(e, 23, f), hj(e, 22, f), hj(e, 7, f), hj(e, 21, f), hj(e, 20, f), ij(e, 19, f), ij(e, 3, f), ij(e, 1, f), jj(e, 9, f), ij(e, 12, f), ij(e, 13, f), ij(e, 32, f), ij(e, 35, f), jj(e, 37, f), jj(e, 38, f), ij(e, 39, f), ij(e, 40, f), e = f) : e = null
                }
                return e
            }), O(function(e) {
                return null !== e
            }), K(function(e) {
                return e
            }), Ae(), J()),
            d = null;
        return new lh(c, {
            next: function(e) {
                if (null === d && (d = b(a), null === d)) return;
                e = kj(a, e);
                d.postMessage(e, "*")
            },
            complete: function() {},
            error: function() {}
        })
    };
    var oj = {
        Ab: null,
        yb: null,
        zb: null,
        Pa: null,
        Rb: null,
        Kb: null
    };

    function pj(a) {
        return void 0 === a ? null : Number(a)
    };
    var qj = {
        bd: oj,
        Ia: null,
        cf: null
    };

    function rj(a, b, c, d, e, f) {
        c = M([c.g(P()), d.g(P()), e.g(P()), f.g(P())]).g(T(function(g) {
            return sj.apply(null, [a, b].concat(x(g)))
        }), af(a.queue));
        var k = new H,
            h = qj;
        d = c.g(K(function(g) {
            var l;
            (l = g[40]) ? (l = JSON.parse(decodeURIComponent(l)), l = "object" !== typeof l ? oj : {
                Ab: pj(l.rst),
                yb: pj(l.dlt),
                zb: pj(l.rpt),
                Pa: pj(l.isd),
                Rb: pj(l.msd),
                Kb: l.ext || null
            }) : l = oj;
            var m;
            var q;
            if ((m = !g[11] && !g[8] && !1 !== g[36]) && !g[9]) m = null;
            else {
                var t = null !== (q = g[9]) && void 0 !== q ? q : Of;
                q = g[38];
                var E = g[30],
                    u = g[31];
                q = q ? q : isNaN(E) || isNaN(u) ? $f(a, !0) : {
                    left: 0,
                    top: 0,
                    width: null !== E && void 0 !== E ? E : 0,
                    height: null !== u && void 0 !== u ? u : 0
                };
                E = g[37];
                u = {
                    x: 0,
                    y: 0
                };
                E && (u = {
                    x: E.left,
                    y: E.top
                });
                m = {
                    M: k,
                    V: "osd",
                    S: t,
                    aa: q,
                    Bd: m,
                    ge: u
                }
            }
            return {
                bd: l,
                Ia: m,
                cf: g[32] || null
            }
        }), Ve(function(g) {
            return void(h = g)
        }), S(qj), Be(), J());
        e = k.g(K(function() {
            return h
        }));
        return {
            Oc: qd(d, e).g(K(function(g) {
                return {
                    timestamp: a.o.now(),
                    value: g
                }
            }), U(a.queue)),
            gb: c.g(oe(!0), Q())
        }
    }

    function sj(a, b, c, d, e, f) {
        return f ? new G(function(k) {
            var h = tj(a, f, b, c, d, e),
                g = f.g(O(function(l) {
                    return null !== d ? l[12] === d : String(l[4]) === c
                }), Ae(), J()).subscribe(k);
            return function() {
                h.unsubscribe();
                g.unsubscribe()
            }
        }) : xc
    }

    function tj(a, b, c, d, e, f) {
        var k = b.g(O(function(l) {
                return null !== e ? l[12] === e : String(l[4]) === d
            }), K(function(l) {
                return l[0]
            }), O(function(l) {
                return "goog_get_mode" === l || "goog_acknowledge_monitoring" === l
            }), Q()),
            h = vf(a.o, 100).g(Ce(9));
        a = vf(a.o, 500).g(Ce(10));
        h = ld(I(0), h, a);
        var g = uj(c, d, e, f);
        return h.g(K(function() {
            return g
        }), Pe(k)).subscribe(b)
    }

    function uj(a, b, c, d) {
        var e = {};
        a = (e[0] = "goog_request_monitoring", e[6] = 4, e[16] = !0, e[33] = rf("domLoading") || -1, e[29] = a, e);
        null !== d && (a[19] = d);
        null !== b && (a[4] = Number(b));
        null !== c && (a[12] = c);
        return a
    };
    var vj = new og,
        wj = function(a) {
            return vf(a.o, 6E3).g(T(function() {
                return Cc(vj)
            }))
        },
        xj = function(a) {
            return D(O(function(b) {
                return null !== b.value.Ia
            }), K(function(b) {
                var c = b.timestamp;
                b = b.value;
                if (!b.Ia.Bd) throw new og;
                return {
                    timestamp: c,
                    value: b.Ia
                }
            }), U(a.queue), function(b) {
                return vd(b, wj(a))
            })
        };
    var yj = function(a) {
        this.context = a
    };
    y(yj, Ii);
    yj.prototype.ya = function(a, b) {
        var c = this,
            d = V(this.context, yh(this.context.Ie)),
            e = V(this.context, nj(this.context));
        e = rj(this.context, b.pc, b.Ya, d, b.Ic.g(Z(this.context.queue), P()), e);
        var f = e.Oc;
        e = e.gb;
        var k = Ki(zj(b.Ec, b.Ta).g(T(function() {
            return f.g(xj(c.context))
        })), Eh(this.context));
        return {
            Ba: Hi(a.va.g(k), b.fa, 0),
            xa: {
                Oc: f,
                gb: e,
                nc: d
            }
        }
    };
    var zj = function(a, b) {
        return M([a, b]).g(K(function(c) {
            var d = v(c);
            c = d.next().value;
            d = d.next().value;
            d = 0 <= [0, 2, 10, 5, 3, 11, 4].indexOf(d);
            if (c || !d) throw new og;
        }))
    };

    function Aj(a) {
        return !!a.value.Ia && a.value.Ia.Bd
    }

    function Bj(a, b, c) {
        c = c.g(af(a.queue));
        var d = c.g(O(Aj), K(function(e) {
            return e.value.Ia.ge
        }), S({
            x: 0,
            y: 0
        }));
        b = M([b, d]).g(K(function(e) {
            var f = v(e);
            e = f.next().value;
            f = f.next().value;
            e = Rf(e, f);
            return {
                left: Math.round(e.left),
                top: Math.round(e.top),
                height: Math.ceil(e.height),
                width: Math.ceil(e.width)
            }
        }), P(Pf), U(a.queue));
        return {
            bf: c.g(He(function(e) {
                return !Aj(e)
            }), K(function(e) {
                return e.value.bd
            }), U(a.queue)),
            df: b
        }
    };

    function Cj(a) {
        return a.document.Fd.g(K(function(b) {
            return "visible" === b
        }), P(), U(a.queue))
    };
    var Dj = function(a) {
            this.key = a
        },
        Ej = function(a, b) {
            this.key = a;
            this.defaultValue = void 0 === b ? !1 : b
        };
    y(Ej, Dj);
    var Fj = function() {
            this.od = {}
        },
        nh = function(a, b) {
            a = a.od[b.key];
            if (b instanceof Ej) return "boolean" === typeof a ? a : b.defaultValue;
            throw Error();
        };
    var Gj = function(a) {
        var b = new Fj;
        return D(K(function(c) {
            if (null === c) return null;
            try {
                var d = JSON.parse(c)[0];
                c = "";
                for (var e = 0; e < d.length; e++) c += String.fromCharCode(d.charCodeAt(e) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(e % 10));
                b.od = JSON.parse(c)
            } catch (f) {}
            return b
        }), U(a.queue))
    };

    function Hj(a, b, c) {
        var d;
        return b.g(P(), T(function(e) {
            return c.g(K(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), S(!1), U(a.queue))
    };

    function Ij(a) {
        return D(Qh(K(function(b) {
            return 1 <= b ? !0 : 0 >= b ? !1 : b >= a
        })), Sh(), K(function(b) {
            return Math.round(b)
        }))
    };

    function Jj(a, b, c, d, e, f) {
        var k = Kj,
            h = Lj.Af;
        if (1 < k.length)
            for (var g = 0; g < k.length - 1; g++)
                if (k[g] < k[g + 1]) throw Error();
        g = e.g(S(void 0), T(function() {
            return c.g(Bh())
        }), P(), U(a.queue));
        var l = e.g(S(void 0), T(function() {
            return c.g(yi())
        }), P(), U(a.queue));
        e = ui(a, e, f, c, h);
        return {
            Le: d.g(S(void 0), T(function() {
                return b.g(Ah(zi, k))
            }), P(Xa), U(a.queue)),
            yf: d.g(S(void 0), T(function() {
                return b.g(Ah(Ij, k), K(function(m) {
                    return m.map(function(q, t) {
                        return 0 < t ? q - m[t - 1] : q
                    })
                }))
            }), P(Xa), U(a.queue)),
            Ke: l,
            Eb: g.g(P(Uh), U(a.queue)),
            Zb: e
        }
    };

    function Mj(a, b, c, d, e) {
        var f = Lj;
        b = b.g(S(!1), P());
        var k = !(mf() || nf());
        c = c.g(P(), T(function(h) {
            return h ? V(a, !1) : d
        }), K(function(h) {
            return {
                value: h,
                timestamp: a.o.now()
            }
        }), P(Uh));
        return Object.assign(Object.assign({}, f), {
            sd: c,
            Ef: e,
            $d: k,
            Ne: b
        })
    };
    var Nj = function() {
        return D(hd(function(a) {
            return a.element.g(wi, Od(function() {
                return I([""])
            })).g(K(function(b) {
                return {
                    ba: b,
                    Fb: a
                }
            }))
        }), Yd(function(a) {
            return a.ba.sort().join(";")
        }), K(function(a) {
            return a.Fb
        }))
    };

    function Oj(a) {
        a = a.global;
        if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if ("number" === typeof b && 0 < b && (a = a.__google_lidar_radf_, "function" === typeof a)) try {
            a()
        } catch (c) {}
        return !0
    }

    function Pj(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (void 0 !== b.__google_lidar_radf_) return xc;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new H;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(uf(a.s, 743))
    };
    var Qj;
    Qj = ["av.key", "js", "20210526"].slice(-1)[0];
    var Rj = new Ej("45350317"),
        Sj = new Ej("45351434"),
        Tj = new Ej("45353040"),
        Uj = new Ej("45353039"),
        Vj = new Ej("45352727");
    var Lj = {
            Af: 1E3,
            nd: .5,
            Ad: .3
        },
        Kj = [1, .75, Lj.nd, Lj.Ad, 0],
        Hg = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + Qj;

    function Wj(a, b, c, d) {
        var e = Oj(a),
            f = Pj(a);
        f = mg(a, f);
        e = e ? xc : f.g(K(function(g) {
            return Object.freeze({
                bb: ib(),
                element: V(a, g)
            })
        }), Nj());
        var k = Cj(a).g(K(function(g) {
                return !g
            })),
            h = new Ji(a, [new Si(a, Kj), new Ri(a, d), new Oi(a, d), new yj(a), new dj(a, d)]);
        return vg(a, e, function(g, l) {
            var m = xi(g, l.element),
                q = m.Ya,
                t = m.oc,
                E = m.sc,
                u = m.je,
                w = m.fa,
                R = m.Bc,
                qa = m.Dc,
                X = m.Ec,
                vb = m.Ic,
                wb = m.Ta,
                Xj = m.ba,
                ha = m.Ff;
            m = m.flags.g(P(), Gj(g));
            var Ab = new Gi(g, l, u, w, wb);
            X = h.ya(Ab, {
                fa: w,
                pc: 7,
                Ya: q,
                Ic: vb,
                Ec: X,
                Ta: wb
            });
            var Na = X.Ba,
                gb = X.xa;
            X = gb.nc;
            vb = gb.gb;
            var ie = gb.Oc,
                Yj = gb.Jc;
            gb = gb.Kc;
            ha = Mj(g, qa, w, k, ha);
            Na = ei(g, Na, ha);
            ha = Na.we;
            Na = Jj(g, ha.Cf, ha.visible, Na.qf, Na.rf, ha.M);
            var Da = Bj(g, ha.Gb, ie);
            ie = Da.df;
            var Bb = Da.bf;
            Da = m.g(K(function(F) {
                return (null === F || void 0 === F ? void 0 : nh(F, Rj)) || (null === F || void 0 === F ? void 0 : nh(F, Sj))
            }), K(function(F) {
                return F ? !0 : null
            }), U(g.queue));
            var je = m.g(mh(Sj), U(g.queue)),
                ke = vh(g, Ab, ha.Gb, q, je);
            je = wb.g(K(function(F) {
                return 17 === F || 15 === F ? kh : Ig
            }), S(Ig), U(g.queue));
            var le = Ph(g, c).g(Z(g.queue)),
                Zj = Hj(g, ha.M, le.g(O(function(F) {
                    return null !==
                        F
                }))),
                ak = V(g, "lidar2"),
                bk = V(g, "lidartos"),
                lg = Ab.va.g(oh(g.queue)),
                ck = M([lg, ha.xe]).g(K(function(F) {
                    var ya = v(F);
                    F = ya.next().value;
                    ya = ya.next().value;
                    return F && !ya
                }), U(g.queue)),
                Cb = dk(g, m, c, Na.Zb, ha.M),
                ek = Cb.Ib,
                fk = Cb.Aa,
                gk = Cb.Jb;
            Cb = Cb.Id;
            return Object.assign(Object.assign(Object.assign(Object.assign({
                context: V(g, g),
                vd: ak,
                zf: bk,
                be: V(g, Qj),
                pc: V(g, 7),
                hd: V(g, g.validate() ? null : new pg),
                ee: V(g, Lf(g.document)),
                jb: V(g, Jg),
                Na: le,
                yg: Zj,
                Aa: fk,
                Jb: gk,
                Id: Cb,
                ze: V(g, !0),
                se: V(g, !0),
                he: V(g, g.Ca ? 1 : void 0),
                fa: w.g(Z(g.queue)),
                Jc: Yj.g(U(g.queue), Z(g.queue)),
                Kc: gb.g(U(g.queue), Z(g.queue)),
                gb: vb.g(Z(g.queue)),
                Ib: ek,
                fe: l.element.g(Z(g.queue), K(function(F) {
                    return null !== F
                })),
                ba: Xj,
                sc: E.g(S([]), U(g.queue)),
                oc: t.g(S([]), U(g.queue)),
                wg: m.g(Z(g.queue)),
                Ya: q,
                nc: X,
                $a: Ab.$a,
                Bc: R.g(S(0), U(g.queue)),
                Cd: u.g(Z(g.queue)),
                Ta: wb.g(S(0), U(g.queue)),
                Ha: je,
                Dc: qa.g(Z(g.queue)),
                wd: Ab.Qb.g(oh(g.queue))
            }, ha), {
                td: ck,
                qg: lg,
                Gb: ie
            }), Na), {
                Ab: Da.g(T(function(F) {
                    return F ? V(g, rf("navigationStart")) : Bb.g(K(function(ya) {
                        return ya.Ab
                    }))
                }), Z(g.queue)),
                yb: Bb.g(K(function(F) {
                        return F.yb
                    }),
                    Z(g.queue)),
                zb: Da.g(T(function(F) {
                    return F ? xh(g, Ab) : Bb.g(K(function(ya) {
                        return ya.zb
                    }))
                }), Z(g.queue)),
                Pa: Da.g(T(function(F) {
                    return F ? ke.Pa : Bb.g(K(function(ya) {
                        return ya.Pa
                    }))
                }), Z(g.queue)),
                Rb: Bb.g(K(function(F) {
                    return F.Rb
                }), Z(g.queue)),
                Kb: Bb.g(K(function(F) {
                    return F.Kb
                }), Z(g.queue)),
                hf: Da,
                lc: Da.g(T(function(F) {
                    return F ? ke.lc : V(g, null)
                }), Z(g.queue)),
                Gc: Da.g(T(function(F) {
                    return F ? ke.Gc : V(g, null)
                }), Z(g.queue)),
                me: le.g(wh(g), Z(g.queue)),
                Df: xf(g).g(Z(g.queue))
            })
        }, Gg(a, b))
    }

    function dk(a, b, c, d, e) {
        var f = V(a, "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=eos}"),
            k = M([d, Eg(a, c)]).g(O(function(h) {
                h = v(h);
                var g = h.next().value;
                return 0 === h.next().value || g
            }), K(function(h) {
                h = v(h);
                h.next();
                return h.next().value
            }), U(a.queue), Z(a.queue));
        c = b.g(mh(Vj));
        d = b.g(mh(Uj));
        b = b.g(mh(Tj));
        b = M([c, d, b]).g(K(function(h) {
            var g = v(h);
            h = g.next().value;
            var l = g.next().value;
            g = g.next().value;
            return l ? 1 : g ? 2 : h ? 3 : 0
        }), P(), U(a.queue));
        a = Hj(a, e, b.g(T(function(h) {
            return 0 !== h ? k : sd
        })));
        return {
            Ib: k,
            Aa: b,
            Jb: f,
            Id: a
        }
    };
    (function(a, b, c, d) {
        b = void 0 === b ? .01 : b;
        c = void 0 === c ? vf(a.o, 36E5) : c;
        d = void 0 === d ? a.o.interval(100).g(U(a.queue)) : d;
        return a.s.na(742, function() {
            return Wj(a, b, c, d)
        })()
    })(new Yf).subscribe();
}).call(this);