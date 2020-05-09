/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(g, e) {
    "use strict";
    var t = []
      , v = g.document
      , r = Object.getPrototypeOf
      , s = t.slice
      , y = t.concat
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , m = n.hasOwnProperty
      , a = m.toString
      , l = a.call(Object)
      , b = {}
      , x = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , w = function(e) {
        return null != e && e === e.window
    }
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function C(e, t, n) {
        var r, i, o = (n = n || v).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function T(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector"
      , E = function(e, t) {
        return new E.fn.init(e,t)
    }
      , d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = T(e);
        return !x(e) && !w(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || x(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = m.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            C(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return y.apply([], a)
        },
        guid: 1,
        support: b
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, p, x, o, i, h, f, g, w, u, l, C, T, a, E, v, s, c, y, N = "sizzle" + 1 * new Date, m = n.document, A = 0, r = 0, d = ue(), b = ue(), k = ue(), S = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, L = {}.hasOwnProperty, t = [], j = t.pop, q = t.push, O = t.push, P = t.slice, H = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", B = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + R + "*\\]", W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", $ = new RegExp(R + "+","g"), F = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), z = new RegExp("^" + R + "*," + R + "*"), _ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), U = new RegExp(R + "|>"), V = new RegExp(W), X = new RegExp("^" + B + "$"), Q = {
            ID: new RegExp("^#(" + B + ")"),
            CLASS: new RegExp("^\\.(" + B + ")"),
            TAG: new RegExp("^(" + B + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + I + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, G = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            C()
        }, ae = xe(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            O.apply(t = P.call(m.childNodes), m.childNodes),
            t[m.childNodes.length].nodeType
        } catch (e) {
            O = {
                apply: t.length ? function(e, t) {
                    q.apply(e, P.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, d = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== T && C(e),
            e = e || T,
            E)) {
                if (11 !== d && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === d) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return O.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && p.getElementsByClassName && e.getElementsByClassName)
                            return O.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (p.qsa && !S[t + " "] && (!v || !v.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === d && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = N),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + be(l[o]);
                        c = l.join(","),
                        f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return O.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        S(t, !0)
                    } finally {
                        s === N && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(F, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[N] = !0,
            e
        }
        function ce(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                x.attrHandle[n[r]] = t
        }
        function de(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function pe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in p = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        C = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== T && 9 === r.nodeType && r.documentElement && (a = (T = r).documentElement,
            E = !i(T),
            m !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            p.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = ce(function(e) {
                return e.appendChild(T.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = J.test(T.getElementsByClassName),
            p.getById = ce(function(e) {
                return a.appendChild(e).id = N,
                !T.getElementsByName || !T.getElementsByName(N).length
            }),
            p.getById ? (x.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = p.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            x.find.CLASS = p.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (p.qsa = J.test(T.querySelectorAll)) && (ce(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"),
                e.querySelectorAll("[id~=" + N + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + N + "+*").length || v.push(".#.+[+~]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = T.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (p.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                p.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", W)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = J.test(a.compareDocumentPosition),
            y = t || J.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === m && y(m, e) ? -1 : t === T || t.ownerDocument === m && y(m, t) ? 1 : u ? H(u, e) - H(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === T ? -1 : t === T ? 1 : i ? -1 : o ? 1 : u ? H(u, e) - H(u, t) : 0;
                if (i === o)
                    return de(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? de(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }
            ),
            T
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== T && C(e),
            p.matchesSelector && E && !S[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    S(t, !0)
                }
            return 0 < se(t, T, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== T && C(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== T && C(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : p.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !p.detectDuplicates,
            u = !p.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (x = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = d[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && d(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , b = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = b && e.nodeName.toLowerCase(), d = !n && !b, p = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && d) {
                                p = (s = (r = (i = (o = (a = c)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++p && a === e) {
                                        i[h] = [A, s, p];
                                        break
                                    }
                            } else if (d && (p = s = (r = (i = (o = (a = e)[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === A && r[1]),
                            !1 === p)
                                while (a = ++s && a && a[l] || (p = s = 0) || u.pop())
                                    if ((b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++p && (d && ((i = (o = a[N] || (a[N] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [A, p]),
                                    a === e))
                                        break;
                            return (p -= v) === g || p % g == 0 && 0 <= p / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[N] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = H(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(F, "$1"));
                    return s[N] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return X.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return G.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[e] = pe(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = he(e);
        function me() {}
        function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function xe(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , d = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [A, d];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[N] || (e[N] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === A && r[1] === d)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Ce(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Te(p, h, g, v, y, e) {
            return v && !v[N] && (v = Te(v)),
            y && !y[N] && (y = Te(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !p || !e && h ? c : Ce(c, s, p, n, r), d = g ? y || (e ? p : l || v) ? [] : t : f;
                if (g && g(f, d, n, r),
                v) {
                    i = Ce(d, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (d[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || p) {
                        if (y) {
                            i = [],
                            o = d.length;
                            while (o--)
                                (a = d[o]) && i.push(f[o] = a);
                            y(null, d = [], i, r)
                        }
                        o = d.length;
                        while (o--)
                            (a = d[o]) && -1 < (i = y ? H(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    d = Ce(d === t ? d.splice(l, d.length) : d),
                    y ? y(null, t, d, r) : O.apply(t, d)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = xe(function(e) {
                return e === i
            }, a, !0), l = xe(function(e) {
                return -1 < H(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = x.relative[e[s].type])
                    c = [xe(we(c), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[N]) {
                        for (n = ++s; n < r; n++)
                            if (x.relative[e[n].type])
                                break;
                        return Te(1 < s && we(c), 1 < s && be(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(F, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && be(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = x.filters = x.pseudos,
        x.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = b[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = x.preFilter;
            while (a) {
                for (o in n && !(r = z.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = _.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(F, " ")
                }),
                a = a.slice(n.length)),
                x.filter)
                    !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : b(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, b, r, i = [], o = [], a = k[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[N] ? i.push(a) : o.push(a);
                (a = k(e, (v = o,
                m = 0 < (y = i).length,
                b = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], d = w, p = e || b && x.find.TAG("*", i), h = A += null == d ? 1 : Math.random() || .1, g = p.length;
                    for (i && (w = t === T || t || i); l !== g && null != (o = p[l]); l++) {
                        if (b && o) {
                            a = 0,
                            t || o.ownerDocument === T || (C(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || T, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (A = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = j.call(r));
                            f = Ce(f)
                        }
                        O.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (A = h,
                    w = d),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = Q.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    x.relative[s = a.type])
                        break;
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && be(o)))
                            return O.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = N.split("").sort(D).join("") === N,
        p.detectDuplicates = !!l,
        C(),
        p.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(I, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(g);
    E.find = h,
    E.expr = h.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = h.uniqueSort,
    E.text = h.getText,
    E.isXMLDoc = h.isXML,
    E.contains = h.contains,
    E.escapeSelector = h.escape;
    var N = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && E(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , A = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = E.expr.match.needsContext;
    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function L(e, n, r) {
        return x(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(L(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(L(this, e || [], !0))
        },
        is: function(e) {
            return !!L(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || j,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t,
                E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : v, !0)),
                D.test(r[1]) && E.isPlainObject(t))
                    for (r in t)
                        x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = v.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }
    ).prototype = E.fn,
    j = E(v);
    var O = /^(?:parents|prev(?:Until|All))/
      , P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function H(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return N(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return N(e, "parentNode", n)
        },
        next: function(e) {
            return H(e, "nextSibling")
        },
        prev: function(e) {
            return H(e, "previousSibling")
        },
        nextAll: function(e) {
            return N(e, "nextSibling")
        },
        prevAll: function(e) {
            return N(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return N(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return N(e, "previousSibling", n)
        },
        siblings: function(e) {
            return A((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return A(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (S(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (P[r] || E.uniqueSort(n),
            O.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var I = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function B(e) {
        throw e
    }
    function M(e, t, n, r) {
        var i;
        try {
            e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        E.each(e.match(I) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    E.each(e, function(e, t) {
                        x(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = E.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    E.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return E.Deferred(function(r) {
                        E.each(o, function(e, t) {
                            var n = x(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    x(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, B, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, B, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== B && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()),
                            g.setTimeout(t))
                        }
                    }
                    return E.Deferred(function(e) {
                        o[0][3].add(l(0, e, x(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, x(t) ? t : R)),
                        o[2][3].add(l(0, e, x(n) ? n : B))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, a) : a
                }
            }
              , s = {};
            return E.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = E.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (M(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || x(i[t] && i[t].then)))
                return o.then();
            while (t--)
                M(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        g.console && g.console.warn && e && W.test(e.name) && g.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    E.readyException = function(e) {
        g.setTimeout(function() {
            throw e
        })
    }
    ;
    var $ = E.Deferred();
    function F() {
        v.removeEventListener("DOMContentLoaded", F),
        g.removeEventListener("load", F),
        E.ready()
    }
    E.fn.ready = function(e) {
        return $.then(e)["catch"](function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || $.resolveWith(v, [E])
        }
    }),
    E.ready.then = $.then,
    "complete" === v.readyState || "loading" !== v.readyState && !v.documentElement.doScroll ? g.setTimeout(E.ready) : (v.addEventListener("DOMContentLoaded", F),
    g.addEventListener("load", F));
    var z = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === T(n))
            for (s in i = !0,
            n)
                z(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        x(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(E(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(U, V)
    }
    var Q = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = E.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(I) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var G = new Y
      , K = new Y
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                K.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return K.hasData(e) || G.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return G.access(e, t, n)
        },
        _removeData: function(e, t) {
            G.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = K.get(o),
                1 === o.nodeType && !G.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        ee(o, r, i[r]));
                    G.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                K.set(this, n)
            }) : z(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = K.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    K.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = G.get(e, t),
                n && (!r || Array.isArray(n) ? r = G.access(e, t, E.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                E.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return G.get(e, n) || G.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    G.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = G.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , re = ["Top", "Right", "Bottom", "Left"]
      , ie = v.documentElement
      , oe = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    }
    );
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display")
    }
      , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    var le = {};
    function ce(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = G.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = le[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = E.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            le[s] = u)))) : "none" !== n && (l[c] = "none",
            G.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return ce(this, !0)
        },
        hide: function() {
            return ce(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var fe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , pe = /^$|^module$|\/(?:java|ecma)script/i
      , he = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ge(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && S(e, t) ? E.merge([e], n) : n
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            G.set(e[n], "globalEval", !t || G.get(t[n], "globalEval"))
    }
    he.optgroup = he.option,
    he.tbody = he.tfoot = he.colgroup = he.caption = he.thead,
    he.th = he.td;
    var ye, me, be = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === T(o))
                    E.merge(d, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = he[s] || he._default,
                    a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    E.merge(d, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        f.textContent = "",
        p = 0;
        while (o = d[p++])
            if (r && -1 < E.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
            a = ge(f.appendChild(o), "script"),
            l && ve(a),
            n) {
                c = 0;
                while (o = a[c++])
                    pe.test(o.type || "") && n.push(o)
            }
        return f
    }
    ye = v.createDocumentFragment().appendChild(v.createElement("div")),
    (me = v.createElement("input")).setAttribute("type", "radio"),
    me.setAttribute("checked", "checked"),
    me.setAttribute("name", "t"),
    ye.appendChild(me),
    b.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ye.innerHTML = "<textarea>x</textarea>",
    b.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var we = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Te = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0
    }
    function Ne() {
        return !1
    }
    function Ae(e, t) {
        return e === function() {
            try {
                return v.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Ne;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return E().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    function Se(e, i, o) {
        o ? (G.set(e, i, !1),
        E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = G.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    G.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = G.get(this, i)) || t ? G.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (G.set(this, i, {
                        value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === G.get(e, i) && E.event.add(e, i, Ee)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = G.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && E.find.matchesSelector(ie, i),
                n.guid || (n.guid = E.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(I) || [""]).length;
                while (l--)
                    p = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (f = E.event.special[p] || {},
                    p = (i ? f.delegateType : f.bindType) || p,
                    f = E.event.special[p] || {},
                    c = E.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (d = u[p]) || ((d = u[p] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    E.event.global[p] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, v = G.hasData(e) && G.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(I) || [""]).length;
                while (l--)
                    if (p = g = (s = Te.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        f = E.event.special[p] || {},
                        d = u[p = (r ? f.delegateType : f.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length;
                        while (o--)
                            c = d[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle),
                        delete u[p])
                    } else
                        for (p in u)
                            E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && G.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = E.event.fix(e), u = new Array(arguments.length), l = (G.get(this, "events") || {})[s.type] || [], c = E.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = E.event.handlers.call(this, s, l),
                t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: x(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Se(t, "click", Ee),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return fe.test(t.type) && t.click && S(t, "input") && Se(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return fe.test(t.type) && t.click && S(t, "input") && G.get(t, "click") || S(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ne,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Ne,
        isPropagationStopped: Ne,
        isImmediatePropagationStopped: Ne,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Se(this, e, Ae),
                !1
            },
            trigger: function() {
                return Se(this, e),
                !0
            },
            delegateType: t
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Ne),
            this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Le = /<script|<style|<link/i
      , je = /checked\s*(?:[^=]|=\s*.checked.)/i
      , qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (G.hasData(e) && (o = G.access(e),
            a = G.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        E.event.add(t, i, l[i][n]);
            K.hasData(e) && (s = K.access(e),
            u = E.extend({}, s),
            K.set(t, u))
        }
    }
    function Re(n, r, i, o) {
        r = y.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, d = f - 1, p = r[0], h = x(p);
        if (h || 1 < f && "string" == typeof p && !b.checkClone && je.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = p.call(this, e, t.html())),
                Re(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = E.map(ge(e, "script"), Pe)).length; c < f; c++)
                u = e,
                c !== d && (u = E.clone(u, !0, !0),
                s && E.merge(a, ge(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                E.map(a, He),
                c = 0; c < s; c++)
                    u = a[c],
                    pe.test(u.type || "") && !G.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : C(u.textContent.replace(qe, ""), u, l))
        }
        return n
    }
    function Be(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || E.cleanData(ge(r)),
            r.parentNode && (n && oe(r) && ve(ge(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(De, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(b.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ge(c),
                r = 0,
                i = (o = ge(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && fe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ge(e),
                    a = a || ge(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Ie(o[r], a[r]);
                else
                    Ie(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Q(n)) {
                    if (t = n[G.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[G.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return Be(this, e, !0)
        },
        remove: function(e) {
            return Be(this, e)
        },
        text: function(e) {
            return z(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Re(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Re(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Re(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(ge(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return z(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Le.test(e) && !he[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(ge(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Re(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ge(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                E(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , We = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = g),
        t.getComputedStyle(e)
    }
      , $e = new RegExp(re.join("|"),"i");
    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = E.style(e, t)),
        !b.pixelBoxStyles() && Me.test(a) && $e.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(s).appendChild(u);
                var e = g.getComputedStyle(u);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                u.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                u.style.position = "absolute",
                i = 12 === t(u.offsetWidth / 3),
                ie.removeChild(s),
                u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = v.createElement("div"), u = v.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        b.clearCloneStyle = "content-box" === u.style.backgroundClip,
        E.extend(b, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"]
      , Ue = v.createElement("div").style
      , Ve = {};
    function Xe(e) {
        var t = E.cssProps[e] || Ve[e];
        return t || (e in Ue ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = _e.length;
            while (n--)
                if ((e = _e[n] + t)in Ue)
                    return e
        }(e) || e)
    }
    var Qe, Ye, Ge = /^(none|table(?!-c[ea]).+)/, Ke = /^--/, Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ze = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function et(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function tt(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += E.css(e, n + re[a], !0, i)),
            r ? ("content" === n && (u -= E.css(e, "padding" + re[a], !0, i)),
            "margin" !== n && (u -= E.css(e, "border" + re[a] + "Width", !0, i))) : (u += E.css(e, "padding" + re[a], !0, i),
            "padding" !== n ? u += E.css(e, "border" + re[a] + "Width", !0, i) : s += E.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function nt(e, t, n) {
        var r = We(e)
          , i = (!b.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r)
          , o = i
          , a = Fe(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!b.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + tt(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ke.test(t), l = e.style;
                if (u || (t = Xe(s)),
                a = E.cssHooks[t] || E.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = function(e, t, n, r) {
                    var i, o, a = 20, s = r ? function() {
                        return r.cur()
                    }
                    : function() {
                        return E.css(e, t, "")
                    }
                    , u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && ne.exec(E.css(e, t));
                    if (c && c[3] !== l) {
                        u /= 2,
                        l = l || c[3],
                        c = +u || 1;
                        while (a--)
                            E.style(e, t, c + l),
                            (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                            c /= o;
                        c *= 2,
                        E.style(e, t, c + l),
                        n = n || []
                    }
                    return n && (c = +c || +u || 0,
                    i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
                    r && (r.unit = l,
                    r.start = c,
                    r.end = i)),
                    i
                }(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")),
                b.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Ke.test(t) || (t = Xe(s)),
            (a = E.cssHooks[t] || E.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Fe(e, t, r)),
            "normal" === i && t in Ze && (i = Ze[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    E.each(["height", "width"], function(e, u) {
        E.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, u, n) : ue(e, Je, function() {
                        return nt(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = We(e), o = !b.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i), s = n ? tt(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - tt(e, u, "border", !1, i) - .5)),
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = E.css(e, u)),
                et(0, t, s)
            }
        }
    }),
    E.cssHooks.marginLeft = ze(b.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (E.cssHooks[i + o].set = et)
    }),
    E.fn.extend({
        css: function(e, t) {
            return z(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = We(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = g.setTimeout(e, r);
            t.stop = function() {
                g.clearTimeout(n)
            }
        })
    }
    ,
    Qe = v.createElement("input"),
    Ye = v.createElement("select").appendChild(v.createElement("option")),
    Qe.type = "checkbox",
    b.checkOn = "" !== Qe.value,
    b.optSelected = Ye.selected,
    (Qe = v.createElement("input")).value = "t",
    Qe.type = "radio",
    b.radioValue = "t" === Qe.value;
    var rt, it = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return z(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? rt : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!b.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(I);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    rt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = it[t] || E.find.attr;
        it[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = it[o],
            it[o] = r,
            r = null != a(e, t, n) ? o : null,
            it[o] = i),
            r
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i
      , at = /^(?:a|area)$/i;
    function st(e) {
        return (e.match(I) || []).join(" ")
    }
    function ut(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function lt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return z(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                i = E.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ot.test(e.nodeName) || at.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    b.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (x(t))
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, ut(this)))
                });
            if ((e = lt(t)).length)
                while (n = this[u++])
                    if (i = ut(n),
                    r = 1 === n.nodeType && " " + st(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = st(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (x(t))
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, ut(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = lt(t)).length)
                while (n = this[u++])
                    if (i = ut(n),
                    r = 1 === n.nodeType && " " + st(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = st(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, ut(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = E(this),
                    r = lt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = ut(this)) && G.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : G.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + st(ut(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var ct = /\r/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = x(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(ct, "") : null == e ? "" : e : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : st(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = E.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        b.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    b.focusin = "onfocusin"in g;
    var ft = /^(?:focusinfocus|focusoutblur)$/
      , dt = function(e) {
        e.stopPropagation()
    };
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, d = [n || v], p = m.call(e, "type") ? e.type : e, h = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || v,
            3 !== n.nodeType && 8 !== n.nodeType && !ft.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(),
            h.sort()),
            u = p.indexOf(":") < 0 && "on" + p,
            (e = e[E.expando] ? e : new E.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : E.makeArray(t, [e]),
            c = E.event.special[p] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !w(n)) {
                    for (s = c.delegateType || p,
                    ft.test(s + p) || (o = o.parentNode); o; o = o.parentNode)
                        d.push(o),
                        a = o;
                    a === (n.ownerDocument || v) && d.push(a.defaultView || a.parentWindow || g)
                }
                i = 0;
                while ((o = d[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || p,
                    (l = (G.get(o, "events") || {})[e.type] && G.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && Q(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Q(n) || u && x(n[p]) && !w(n) && ((a = n[u]) && (n[u] = null),
                E.event.triggered = p,
                e.isPropagationStopped() && f.addEventListener(p, dt),
                n[p](),
                e.isPropagationStopped() && f.removeEventListener(p, dt),
                E.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    b.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = G.access(e, r);
                t || e.addEventListener(n, i, !0),
                G.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = G.access(e, r) - 1;
                t ? G.access(e, r, t) : (e.removeEventListener(n, i, !0),
                G.remove(e, r))
            }
        }
    });
    var pt, ht = /\[\]$/, gt = /\r?\n/g, vt = /^(?:submit|button|image|reset|file)$/i, yt = /^(?:input|select|textarea|keygen)/i;
    function mt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            E.each(e, function(e, t) {
                r || ht.test(n) ? i(n, t) : mt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== T(e))
            i(n, e);
        else
            for (t in e)
                mt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = x(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                mt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && yt.test(this.nodeName) && !vt.test(e) && (this.checked || !fe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(gt, "\r\n")
                }
            }).get()
        }
    }),
    E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (x(e) && (e = e.call(this[0])),
            t = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return x(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = x(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    b.createHTMLDocument = ((pt = v.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === pt.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (b.createHTMLDocument ? ((r = (t = v.implementation.createHTMLDocument("")).createElement("base")).href = v.location.href,
        t.head.appendChild(r)) : t = v),
        o = !n && [],
        (i = D.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && E(o).remove(),
        E.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"), c = E(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = E.css(e, "top"),
            u = E.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            x(t) && (t = t.call(e, n, E.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    E.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position"))
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return z(this, function(e, t, n) {
                var r;
                if (w(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = ze(b.pixelPosition, function(e, t) {
            if (t)
                return t = Fe(e, n),
                Me.test(t) ? E(e).position()[n] + "px" : t
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function(e, t, n) {
                    var r;
                    return w(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    E.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        x(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            i
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = S,
    E.isFunction = x,
    E.isWindow = w,
    E.camelCase = X,
    E.type = T,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var bt = g.jQuery
      , xt = g.$;
    return E.noConflict = function(e) {
        return g.$ === E && (g.$ = xt),
        e && g.jQuery === E && (g.jQuery = bt),
        E
    }
    ,
    e || (g.jQuery = g.$ = E),
    E
});

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(this, function(e, p) {
    "use strict";
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function s(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        e
    }
    function t(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, i)
        }
        return n
    }
    function l(o) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(r), !0).forEach(function(e) {
                var t, n, i;
                t = o,
                i = r[n = e],
                n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function(e) {
                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return o
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var n = "transitionend";
    function o(e) {
        var t = this
          , n = !1;
        return p(this).one(m.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || m.triggerTransitionEnd(t)
        }, e),
        this
    }
    var m = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()),
            document.getElementById(e); )
                ;
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e)
                return 0;
            var t = p(e).css("transition-duration")
              , n = p(e).css("transition-delay")
              , i = parseFloat(t)
              , o = parseFloat(n);
            return i || o ? (t = t.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(n)
        },
        supportsTransitionEnd: function() {
            return Boolean(n)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = t[i]
                      , s = r && m.isElement(r) ? "element" : (a = r,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof e.getRootNode)
                return e instanceof ShadowRoot ? e : e.parentNode ? m.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if ("undefined" == typeof p)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    m.jQueryDetection(),
    p.fn.emulateTransitionEnd = o,
    p.event.special[m.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function(e) {
            if (p(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments)
        }
    };
    var r = "alert"
      , a = "bs.alert"
      , c = "." + a
      , h = p.fn[r]
      , u = {
        CLOSE: "close" + c,
        CLOSED: "closed" + c,
        CLICK_DATA_API: "click" + c + ".data-api"
    }
      , f = "alert"
      , d = "fade"
      , g = "show"
      , _ = function() {
        function i(e) {
            this._element = e
        }
        var e = i.prototype;
        return e.close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)),
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, a),
            this._element = null
        }
        ,
        e._getRootElement = function(e) {
            var t = m.getSelectorFromElement(e)
              , n = !1;
            return t && (n = document.querySelector(t)),
            n = n || p(e).closest("." + f)[0]
        }
        ,
        e._triggerCloseEvent = function(e) {
            var t = p.Event(u.CLOSE);
            return p(e).trigger(t),
            t
        }
        ,
        e._removeElement = function(t) {
            var n = this;
            if (p(t).removeClass(g),
            p(t).hasClass(d)) {
                var e = m.getTransitionDurationFromElement(t);
                p(t).one(m.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(e)
            } else
                this._destroyElement(t)
        }
        ,
        e._destroyElement = function(e) {
            p(e).detach().trigger(u.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(a);
                t || (t = new i(this),
                e.data(a, t)),
                "close" === n && t[n](this)
            })
        }
        ,
        i._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        i
    }();
    p(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)),
    p.fn[r] = _._jQueryInterface,
    p.fn[r].Constructor = _,
    p.fn[r].noConflict = function() {
        return p.fn[r] = h,
        _._jQueryInterface
    }
    ;
    var v = "button"
      , y = "bs.button"
      , E = "." + y
      , b = ".data-api"
      , w = p.fn[v]
      , T = "active"
      , C = "btn"
      , S = "focus"
      , D = '[data-toggle^="button"]'
      , I = '[data-toggle="buttons"]'
      , A = '[data-toggle="button"]'
      , O = '[data-toggle="buttons"] .btn'
      , N = 'input:not([type="hidden"])'
      , k = ".active"
      , L = ".btn"
      , P = {
        CLICK_DATA_API: "click" + E + b,
        FOCUS_BLUR_DATA_API: "focus" + E + b + " blur" + E + b,
        LOAD_DATA_API: "load" + E + b
    }
      , x = function() {
        function n(e) {
            this._element = e
        }
        var e = n.prototype;
        return e.toggle = function() {
            var e = !0
              , t = !0
              , n = p(this._element).closest(I)[0];
            if (n) {
                var i = this._element.querySelector(N);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(T))
                            e = !1;
                        else {
                            var o = n.querySelector(k);
                            o && p(o).removeClass(T)
                        }
                    else
                        "checkbox" === i.type ? "LABEL" === this._element.tagName && i.checked === this._element.classList.contains(T) && (e = !1) : e = !1;
                    e && (i.checked = !this._element.classList.contains(T),
                    p(i).trigger("change")),
                    i.focus(),
                    t = !1
                }
            }
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(T)),
            e && p(this._element).toggleClass(T))
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, y),
            this._element = null
        }
        ,
        n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(y);
                e || (e = new n(this),
                p(this).data(y, e)),
                "toggle" === t && e[t]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        n
    }();
    p(document).on(P.CLICK_DATA_API, D, function(e) {
        var t = e.target;
        if (p(t).hasClass(C) || (t = p(t).closest(L)[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
            e.preventDefault();
        else {
            var n = t.querySelector(N);
            if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled")))
                return void e.preventDefault();
            x._jQueryInterface.call(p(t), "toggle")
        }
    }).on(P.FOCUS_BLUR_DATA_API, D, function(e) {
        var t = p(e.target).closest(L)[0];
        p(t).toggleClass(S, /^focus(in)?$/.test(e.type))
    }),
    p(window).on(P.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(O)), t = 0, n = e.length; t < n; t++) {
            var i = e[t]
              , o = i.querySelector(N);
            o.checked || o.hasAttribute("checked") ? i.classList.add(T) : i.classList.remove(T)
        }
        for (var r = 0, s = (e = [].slice.call(document.querySelectorAll(A))).length; r < s; r++) {
            var a = e[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(T) : a.classList.remove(T)
        }
    }),
    p.fn[v] = x._jQueryInterface,
    p.fn[v].Constructor = x,
    p.fn[v].noConflict = function() {
        return p.fn[v] = w,
        x._jQueryInterface
    }
    ;
    var j = "carousel"
      , H = "bs.carousel"
      , R = "." + H
      , F = ".data-api"
      , M = p.fn[j]
      , W = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , B = "next"
      , q = "prev"
      , K = "left"
      , Q = "right"
      , V = {
        SLIDE: "slide" + R,
        SLID: "slid" + R,
        KEYDOWN: "keydown" + R,
        MOUSEENTER: "mouseenter" + R,
        MOUSELEAVE: "mouseleave" + R,
        TOUCHSTART: "touchstart" + R,
        TOUCHMOVE: "touchmove" + R,
        TOUCHEND: "touchend" + R,
        POINTERDOWN: "pointerdown" + R,
        POINTERUP: "pointerup" + R,
        DRAG_START: "dragstart" + R,
        LOAD_DATA_API: "load" + R + F,
        CLICK_DATA_API: "click" + R + F
    }
      , Y = "carousel"
      , z = "active"
      , X = "slide"
      , G = "carousel-item-right"
      , $ = "carousel-item-left"
      , J = "carousel-item-next"
      , Z = "carousel-item-prev"
      , ee = "pointer-event"
      , te = ".active"
      , ne = ".active.carousel-item"
      , ie = ".carousel-item"
      , oe = ".carousel-item img"
      , re = ".carousel-item-next, .carousel-item-prev"
      , se = ".carousel-indicators"
      , ae = "[data-slide], [data-slide-to]"
      , le = '[data-ride="carousel"]'
      , ce = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , he = function() {
        function r(e, t) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(t),
            this._element = e,
            this._indicatorsElement = this._element.querySelector(se),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var e = r.prototype;
        return e.next = function() {
            this._isSliding || this._slide(B)
        }
        ,
        e.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
        }
        ,
        e.prev = function() {
            this._isSliding || this._slide(q)
        }
        ,
        e.pause = function(e) {
            e || (this._isPaused = !0),
            this._element.querySelector(re) && (m.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        e.cycle = function(e) {
            e || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        e.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(ne);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding)
                    p(this._element).one(V.SLID, function() {
                        return t.to(e)
                    });
                else {
                    if (n === e)
                        return this.pause(),
                        void this.cycle();
                    var i = n < e ? B : q;
                    this._slide(i, this._items[e])
                }
        }
        ,
        e.dispose = function() {
            p(this._element).off(R),
            p.removeData(this._element, H),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, W, {}, e),
            m.typeCheckConfig(j, e, U),
            e
        }
        ,
        e._handleSwipe = function() {
            var e = Math.abs(this.touchDeltaX);
            if (!(e <= 40)) {
                var t = e / this.touchDeltaX;
                (this.touchDeltaX = 0) < t && this.prev(),
                t < 0 && this.next()
            }
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            this._config.keyboard && p(this._element).on(V.KEYDOWN, function(e) {
                return t._keydown(e)
            }),
            "hover" === this._config.pause && p(this._element).on(V.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(V.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        e._addTouchEventListeners = function() {
            var t = this;
            if (this._touchSupported) {
                var n = function(e) {
                    t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX)
                }
                  , i = function(e) {
                    t._pointerEvent && ce[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                    t._handleSwipe(),
                    "hover" === t._config.pause && (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    t.touchTimeout = setTimeout(function(e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval))
                };
                p(this._element.querySelectorAll(oe)).on(V.DRAG_START, function(e) {
                    return e.preventDefault()
                }),
                this._pointerEvent ? (p(this._element).on(V.POINTERDOWN, function(e) {
                    return n(e)
                }),
                p(this._element).on(V.POINTERUP, function(e) {
                    return i(e)
                }),
                this._element.classList.add(ee)) : (p(this._element).on(V.TOUCHSTART, function(e) {
                    return n(e)
                }),
                p(this._element).on(V.TOUCHMOVE, function(e) {
                    return function(e) {
                        e.originalEvent.touches && 1 < e.originalEvent.touches.length ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX
                    }(e)
                }),
                p(this._element).on(V.TOUCHEND, function(e) {
                    return i(e)
                }))
            }
        }
        ,
        e._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName))
                switch (e.which) {
                case 37:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    e.preventDefault(),
                    this.next()
                }
        }
        ,
        e._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ie)) : [],
            this._items.indexOf(e)
        }
        ,
        e._getItemByDirection = function(e, t) {
            var n = e === B
              , i = e === q
              , o = this._getItemIndex(t)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return t;
            var s = (o + (e === q ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        e._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e)
              , i = this._getItemIndex(this._element.querySelector(ne))
              , o = p.Event(V.SLIDE, {
                relatedTarget: e,
                direction: t,
                from: i,
                to: n
            });
            return p(this._element).trigger(o),
            o
        }
        ,
        e._setActiveIndicatorElement = function(e) {
            if (this._indicatorsElement) {
                var t = [].slice.call(this._indicatorsElement.querySelectorAll(te));
                p(t).removeClass(z);
                var n = this._indicatorsElement.children[this._getItemIndex(e)];
                n && p(n).addClass(z)
            }
        }
        ,
        e._slide = function(e, t) {
            var n, i, o, r = this, s = this._element.querySelector(ne), a = this._getItemIndex(s), l = t || s && this._getItemByDirection(e, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = e === B ? (n = $,
            i = J,
            K) : (n = G,
            i = Z,
            Q),
            l && p(l).hasClass(z))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(l);
                var u = p.Event(V.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (p(this._element).hasClass(X)) {
                    p(l).addClass(i),
                    m.reflow(l),
                    p(s).addClass(n),
                    p(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                    var d = m.getTransitionDurationFromElement(s);
                    p(s).one(m.TRANSITION_END, function() {
                        p(l).removeClass(n + " " + i).addClass(z),
                        p(s).removeClass(z + " " + i + " " + n),
                        r._isSliding = !1,
                        setTimeout(function() {
                            return p(r._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else
                    p(s).removeClass(z),
                    p(l).addClass(z),
                    this._isSliding = !1,
                    p(this._element).trigger(u);
                h && this.cycle()
            }
        }
        ,
        r._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this).data(H)
                  , t = l({}, W, {}, p(this).data());
                "object" == typeof i && (t = l({}, t, {}, i));
                var n = "string" == typeof i ? i : t.slide;
                if (e || (e = new r(this,t),
                p(this).data(H, e)),
                "number" == typeof i)
                    e.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else
                    t.interval && t.ride && (e.pause(),
                    e.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(e) {
            var t = m.getSelectorFromElement(this);
            if (t) {
                var n = p(t)[0];
                if (n && p(n).hasClass(Y)) {
                    var i = l({}, p(n).data(), {}, p(this).data())
                      , o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1),
                    r._jQueryInterface.call(p(n), i),
                    o && p(n).data(H).to(o),
                    e.preventDefault()
                }
            }
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return W
            }
        }]),
        r
    }();
    p(document).on(V.CLICK_DATA_API, ae, he._dataApiClickHandler),
    p(window).on(V.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(le)), t = 0, n = e.length; t < n; t++) {
            var i = p(e[t]);
            he._jQueryInterface.call(i, i.data())
        }
    }),
    p.fn[j] = he._jQueryInterface,
    p.fn[j].Constructor = he,
    p.fn[j].noConflict = function() {
        return p.fn[j] = M,
        he._jQueryInterface
    }
    ;
    var ue = "collapse"
      , fe = "bs.collapse"
      , de = "." + fe
      , pe = p.fn[ue]
      , me = {
        toggle: !0,
        parent: ""
    }
      , ge = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , _e = {
        SHOW: "show" + de,
        SHOWN: "shown" + de,
        HIDE: "hide" + de,
        HIDDEN: "hidden" + de,
        CLICK_DATA_API: "click" + de + ".data-api"
    }
      , ve = "show"
      , ye = "collapse"
      , Ee = "collapsing"
      , be = "collapsed"
      , we = "width"
      , Te = "height"
      , Ce = ".show, .collapsing"
      , Se = '[data-toggle="collapse"]'
      , De = function() {
        function a(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(Se)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = m.getSelectorFromElement(r)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var e = a.prototype;
        return e.toggle = function() {
            p(this._element).hasClass(ve) ? this.hide() : this.show()
        }
        ,
        e.show = function() {
            var e, t, n = this;
            if (!this._isTransitioning && !p(this._element).hasClass(ve) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(Ce)).filter(function(e) {
                return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(ye)
            })).length && (e = null),
            !(e && (t = p(e).not(this._selector).data(fe)) && t._isTransitioning))) {
                var i = p.Event(_e.SHOW);
                if (p(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    e && (a._jQueryInterface.call(p(e).not(this._selector), "hide"),
                    t || p(e).data(fe, null));
                    var o = this._getDimension();
                    p(this._element).removeClass(ye).addClass(Ee),
                    this._element.style[o] = 0,
                    this._triggerArray.length && p(this._triggerArray).removeClass(be).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                      , s = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function() {
                        p(n._element).removeClass(Ee).addClass(ye).addClass(ve),
                        n._element.style[o] = "",
                        n.setTransitioning(!1),
                        p(n._element).trigger(_e.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[o] = this._element[r] + "px"
                }
            }
        }
        ,
        e.hide = function() {
            var e = this;
            if (!this._isTransitioning && p(this._element).hasClass(ve)) {
                var t = p.Event(_e.HIDE);
                if (p(this._element).trigger(t),
                !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    m.reflow(this._element),
                    p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var o = 0; o < i; o++) {
                            var r = this._triggerArray[o]
                              , s = m.getSelectorFromElement(r);
                            if (null !== s)
                                p([].slice.call(document.querySelectorAll(s))).hasClass(ve) || p(r).addClass(be).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, function() {
                        e.setTransitioning(!1),
                        p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        e.setTransitioning = function(e) {
            this._isTransitioning = e
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, fe),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        e._getConfig = function(e) {
            return (e = l({}, me, {}, e)).toggle = Boolean(e.toggle),
            m.typeCheckConfig(ue, e, ge),
            e
        }
        ,
        e._getDimension = function() {
            return p(this._element).hasClass(we) ? we : Te
        }
        ,
        e._getParent = function() {
            var e, n = this;
            m.isElement(this._config.parent) ? (e = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(e.querySelectorAll(t));
            return p(i).each(function(e, t) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
            }),
            e
        }
        ,
        e._addAriaAndCollapsedClass = function(e, t) {
            var n = p(e).hasClass(ve);
            t.length && p(t).toggleClass(be, !n).attr("aria-expanded", n)
        }
        ,
        a._getTargetFromElement = function(e) {
            var t = m.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(fe)
                  , n = l({}, me, {}, e.data(), {}, "object" == typeof i && i ? i : {});
                if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                t || (t = new a(this,n),
                e.data(fe, t)),
                "string" == typeof i) {
                    if ("undefined" == typeof t[i])
                        throw new TypeError('No method named "' + i + '"');
                    t[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return me
            }
        }]),
        a
    }();
    p(document).on(_e.CLICK_DATA_API, Se, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this)
          , t = m.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(t));
        p(i).each(function() {
            var e = p(this)
              , t = e.data(fe) ? "toggle" : n.data();
            De._jQueryInterface.call(e, t)
        })
    }),
    p.fn[ue] = De._jQueryInterface,
    p.fn[ue].Constructor = De,
    p.fn[ue].noConflict = function() {
        return p.fn[ue] = pe,
        De._jQueryInterface
    }
    ;
    var Ie = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
      , Ae = function() {
        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
            if (Ie && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }();
    var Oe = Ie && window.Promise ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, Ae))
        }
    }
    ;
    function Ne(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }
    function ke(e, t) {
        if (1 !== e.nodeType)
            return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function Le(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }
    function Pe(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case "HTML":
        case "BODY":
            return e.ownerDocument.body;
        case "#document":
            return e.body
        }
        var t = ke(e)
          , n = t.overflow
          , i = t.overflowX
          , o = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? e : Pe(Le(e))
    }
    function xe(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var je = Ie && !(!window.MSInputMethodContext || !document.documentMode)
      , He = Ie && /MSIE 10/.test(navigator.userAgent);
    function Re(e) {
        return 11 === e ? je : 10 === e ? He : je || He
    }
    function Fe(e) {
        if (!e)
            return document.documentElement;
        for (var t = Re(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ke(n, "position") ? Fe(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function Me(e) {
        return null !== e.parentNode ? Me(e.parentNode) : e
    }
    function We(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
            return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , i = n ? e : t
          , o = n ? t : e
          , r = document.createRange();
        r.setStart(i, 0),
        r.setEnd(o, 0);
        var s = r.commonAncestorContainer;
        if (e !== s && t !== s || i.contains(o))
            return function(e) {
                var t = e.nodeName;
                return "BODY" !== t && ("HTML" === t || Fe(e.firstElementChild) === e)
            }(s) ? s : Fe(s);
        var a = Me(e);
        return a.host ? We(a.host, t) : We(e, Me(t).host)
    }
    function Ue(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft"
          , i = e.nodeName;
        if ("BODY" !== i && "HTML" !== i)
            return e[n];
        var o = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || o)[n]
    }
    function Be(e, t) {
        var n = "x" === t ? "Left" : "Top"
          , i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }
    function qe(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Re(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }
    function Ke(e) {
        var t = e.body
          , n = e.documentElement
          , i = Re(10) && getComputedStyle(n);
        return {
            height: qe("Height", t, n, i),
            width: qe("Width", t, n, i)
        }
    }
    var Qe = function(e, t, n) {
        return t && Ve(e.prototype, t),
        n && Ve(e, n),
        e
    };
    function Ve(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function Ye(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    var ze = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ;
    function Xe(e) {
        return ze({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function Ge(e) {
        var t = {};
        try {
            if (Re(10)) {
                t = e.getBoundingClientRect();
                var n = Ue(e, "top")
                  , i = Ue(e, "left");
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i
            } else
                t = e.getBoundingClientRect()
        } catch (e) {}
        var o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        }
          , r = "HTML" === e.nodeName ? Ke(e.ownerDocument) : {}
          , s = r.width || e.clientWidth || o.width
          , a = r.height || e.clientHeight || o.height
          , l = e.offsetWidth - s
          , c = e.offsetHeight - a;
        if (l || c) {
            var h = ke(e);
            l -= Be(h, "x"),
            c -= Be(h, "y"),
            o.width -= l,
            o.height -= c
        }
        return Xe(o)
    }
    function $e(e, t, n) {
        var i = 2 < arguments.length && void 0 !== n && n
          , o = Re(10)
          , r = "HTML" === t.nodeName
          , s = Ge(e)
          , a = Ge(t)
          , l = Pe(e)
          , c = ke(t)
          , h = parseFloat(c.borderTopWidth, 10)
          , u = parseFloat(c.borderLeftWidth, 10);
        i && r && (a.top = Math.max(a.top, 0),
        a.left = Math.max(a.left, 0));
        var f = Xe({
            top: s.top - a.top - h,
            left: s.left - a.left - u,
            width: s.width,
            height: s.height
        });
        if (f.marginTop = 0,
        f.marginLeft = 0,
        !o && r) {
            var d = parseFloat(c.marginTop, 10)
              , p = parseFloat(c.marginLeft, 10);
            f.top -= h - d,
            f.bottom -= h - d,
            f.left -= u - p,
            f.right -= u - p,
            f.marginTop = d,
            f.marginLeft = p
        }
        return (o && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (f = function(e, t, n) {
            var i = 2 < arguments.length && void 0 !== n && n
              , o = Ue(t, "top")
              , r = Ue(t, "left")
              , s = i ? -1 : 1;
            return e.top += o * s,
            e.bottom += o * s,
            e.left += r * s,
            e.right += r * s,
            e
        }(f, t)),
        f
    }
    function Je(e) {
        if (!e || !e.parentElement || Re())
            return document.documentElement;
        for (var t = e.parentElement; t && "none" === ke(t, "transform"); )
            t = t.parentElement;
        return t || document.documentElement
    }
    function Ze(e, t, n, i, o) {
        var r = 4 < arguments.length && void 0 !== o && o
          , s = {
            top: 0,
            left: 0
        }
          , a = r ? Je(e) : We(e, xe(t));
        if ("viewport" === i)
            s = function(e, t) {
                var n = 1 < arguments.length && void 0 !== t && t
                  , i = e.ownerDocument.documentElement
                  , o = $e(e, i)
                  , r = Math.max(i.clientWidth, window.innerWidth || 0)
                  , s = Math.max(i.clientHeight, window.innerHeight || 0)
                  , a = n ? 0 : Ue(i)
                  , l = n ? 0 : Ue(i, "left");
                return Xe({
                    top: a - o.top + o.marginTop,
                    left: l - o.left + o.marginLeft,
                    width: r,
                    height: s
                })
            }(a, r);
        else {
            var l = void 0;
            "scrollParent" === i ? "BODY" === (l = Pe(Le(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
            var c = $e(l, a, r);
            if ("HTML" !== l.nodeName || function e(t) {
                var n = t.nodeName;
                if ("BODY" === n || "HTML" === n)
                    return !1;
                if ("fixed" === ke(t, "position"))
                    return !0;
                var i = Le(t);
                return !!i && e(i)
            }(a))
                s = c;
            else {
                var h = Ke(e.ownerDocument)
                  , u = h.height
                  , f = h.width;
                s.top += c.top - c.marginTop,
                s.bottom = u + c.top,
                s.left += c.left - c.marginLeft,
                s.right = f + c.left
            }
        }
        var d = "number" == typeof (n = n || 0);
        return s.left += d ? n : n.left || 0,
        s.top += d ? n : n.top || 0,
        s.right -= d ? n : n.right || 0,
        s.bottom -= d ? n : n.bottom || 0,
        s
    }
    function et(e, t, i, n, o, r) {
        var s = 5 < arguments.length && void 0 !== r ? r : 0;
        if (-1 === e.indexOf("auto"))
            return e;
        var a = Ze(i, n, s, o)
          , l = {
            top: {
                width: a.width,
                height: t.top - a.top
            },
            right: {
                width: a.right - t.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - t.bottom
            },
            left: {
                width: t.left - a.left,
                height: a.height
            }
        }
          , c = Object.keys(l).map(function(e) {
            return ze({
                key: e
            }, l[e], {
                area: function(e) {
                    return e.width * e.height
                }(l[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , h = c.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        })
          , u = 0 < h.length ? h[0].key : c[0].key
          , f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }
    function tt(e, t, n, i) {
        var o = 3 < arguments.length && void 0 !== i ? i : null;
        return $e(n, o ? Je(t) : We(t, xe(n)), o)
    }
    function nt(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e)
          , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
          , i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }
    function it(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function ot(e, t, n) {
        n = n.split("-")[0];
        var i = nt(e)
          , o = {
            width: i.width,
            height: i.height
        }
          , r = -1 !== ["right", "left"].indexOf(n)
          , s = r ? "top" : "left"
          , a = r ? "left" : "top"
          , l = r ? "height" : "width"
          , c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2,
        o[a] = n === a ? t[a] - i[c] : t[it(a)],
        o
    }
    function rt(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function st(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex)
                return e.findIndex(function(e) {
                    return e[t] === n
                });
            var i = rt(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && Ne(t) && (n.offsets.popper = Xe(n.offsets.popper),
            n.offsets.reference = Xe(n.offsets.reference),
            n = t(n, e))
        }),
        n
    }
    function at(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }
    function lt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i]
              , r = o ? "" + o + n : e;
            if ("undefined" != typeof document.body.style[r])
                return r
        }
        return null
    }
    function ct(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function ht(e, t, n, i) {
        n.updateBound = i,
        ct(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = Pe(e);
        return function e(t, n, i, o) {
            var r = "BODY" === t.nodeName
              , s = r ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }),
            r || e(Pe(s.parentNode), n, i, o),
            o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = o,
        n.eventsEnabled = !0,
        n
    }
    function ut() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = function(e, t) {
            return ct(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t
        }(this.reference, this.state))
    }
    function ft(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function dt(n, i) {
        Object.keys(i).forEach(function(e) {
            var t = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ft(i[e]) && (t = "px"),
            n.style[e] = i[e] + t
        })
    }
    function pt(e, t) {
        function n(e) {
            return e
        }
        var i = e.offsets
          , o = i.popper
          , r = i.reference
          , s = Math.round
          , a = Math.floor
          , l = s(r.width)
          , c = s(o.width)
          , h = -1 !== ["left", "right"].indexOf(e.placement)
          , u = -1 !== e.placement.indexOf("-")
          , f = t ? h || u || l % 2 == c % 2 ? s : a : n
          , d = t ? s : n;
        return {
            left: f(l % 2 == 1 && c % 2 == 1 && !u && t ? o.left - 1 : o.left),
            top: d(o.top),
            bottom: d(o.bottom),
            right: f(o.right)
        }
    }
    var mt = Ie && /Firefox/i.test(navigator.userAgent);
    function gt(e, t, n) {
        var i = rt(e, function(e) {
            return e.name === t
        })
          , o = !!i && e.some(function(e) {
            return e.name === n && e.enabled && e.order < i.order
        });
        if (!o) {
            var r = "`" + t + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var _t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , vt = _t.slice(3);
    function yt(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t
          , i = vt.indexOf(e)
          , o = vt.slice(i + 1).concat(vt.slice(0, i));
        return n ? o.reverse() : o
    }
    var Et = "flip"
      , bt = "clockwise"
      , wt = "counterclockwise";
    function Tt(e, o, r, t) {
        var s = [0, 0]
          , a = -1 !== ["right", "left"].indexOf(t)
          , n = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , i = n.indexOf(rt(n, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/
          , c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function(e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width"
              , i = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                i = !0,
                e) : i ? (e[e.length - 1] += t,
                i = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                      , r = +o[1]
                      , s = o[2];
                    if (!r)
                        return e;
                    if (0 !== s.indexOf("%"))
                        return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    var a = void 0;
                    switch (s) {
                    case "%p":
                        a = n;
                        break;
                    case "%":
                    case "%r":
                    default:
                        a = i
                    }
                    return Xe(a)[t] / 100 * r
                }(e, n, o, r)
            })
        })).forEach(function(n, i) {
            n.forEach(function(e, t) {
                ft(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }),
        s
    }
    var Ct = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = t.split("-")[1];
                    if (i) {
                        var o = e.offsets
                          , r = o.reference
                          , s = o.popper
                          , a = -1 !== ["bottom", "top"].indexOf(n)
                          , l = a ? "left" : "top"
                          , c = a ? "width" : "height"
                          , h = {
                            start: Ye({}, l, r[l]),
                            end: Ye({}, l, r[l] + r[c] - s[c])
                        };
                        e.offsets.popper = ze({}, s, h[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.offset
                      , i = e.placement
                      , o = e.offsets
                      , r = o.popper
                      , s = o.reference
                      , a = i.split("-")[0]
                      , l = void 0;
                    return l = ft(+n) ? [+n, 0] : Tt(n, r, s, a),
                    "left" === a ? (r.top += l[0],
                    r.left -= l[1]) : "right" === a ? (r.top += l[0],
                    r.left += l[1]) : "top" === a ? (r.left += l[0],
                    r.top -= l[1]) : "bottom" === a && (r.left += l[0],
                    r.top += l[1]),
                    e.popper = r,
                    e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, i) {
                    var t = i.boundariesElement || Fe(e.instance.popper);
                    e.instance.reference === t && (t = Fe(t));
                    var n = lt("transform")
                      , o = e.instance.popper.style
                      , r = o.top
                      , s = o.left
                      , a = o[n];
                    o.top = "",
                    o.left = "",
                    o[n] = "";
                    var l = Ze(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                    o.top = r,
                    o.left = s,
                    o[n] = a,
                    i.boundaries = l;
                    var c = i.priority
                      , h = e.offsets.popper
                      , u = {
                        primary: function(e) {
                            var t = h[e];
                            return h[e] < l[e] && !i.escapeWithReference && (t = Math.max(h[e], l[e])),
                            Ye({}, e, t)
                        },
                        secondary: function(e) {
                            var t = "right" === e ? "left" : "top"
                              , n = h[t];
                            return h[e] > l[e] && !i.escapeWithReference && (n = Math.min(h[t], l[e] - ("right" === e ? h.width : h.height))),
                            Ye({}, t, n)
                        }
                    };
                    return c.forEach(function(e) {
                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                        h = ze({}, h, u[t](e))
                    }),
                    e.offsets.popper = h,
                    e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , n = t.popper
                      , i = t.reference
                      , o = e.placement.split("-")[0]
                      , r = Math.floor
                      , s = -1 !== ["top", "bottom"].indexOf(o)
                      , a = s ? "right" : "bottom"
                      , l = s ? "left" : "top"
                      , c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]),
                    n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, t) {
                    var n;
                    if (!gt(e.instance.modifiers, "arrow", "keepTogether"))
                        return e;
                    var i = t.element;
                    if ("string" == typeof i) {
                        if (!(i = e.instance.popper.querySelector(i)))
                            return e
                    } else if (!e.instance.popper.contains(i))
                        return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                        e;
                    var o = e.placement.split("-")[0]
                      , r = e.offsets
                      , s = r.popper
                      , a = r.reference
                      , l = -1 !== ["left", "right"].indexOf(o)
                      , c = l ? "height" : "width"
                      , h = l ? "Top" : "Left"
                      , u = h.toLowerCase()
                      , f = l ? "left" : "top"
                      , d = l ? "bottom" : "right"
                      , p = nt(i)[c];
                    a[d] - p < s[u] && (e.offsets.popper[u] -= s[u] - (a[d] - p)),
                    a[u] + p > s[d] && (e.offsets.popper[u] += a[u] + p - s[d]),
                    e.offsets.popper = Xe(e.offsets.popper);
                    var m = a[u] + a[c] / 2 - p / 2
                      , g = ke(e.instance.popper)
                      , _ = parseFloat(g["margin" + h], 10)
                      , v = parseFloat(g["border" + h + "Width"], 10)
                      , y = m - e.offsets.popper[u] - _ - v;
                    return y = Math.max(Math.min(s[c] - p, y), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (Ye(n = {}, u, Math.round(y)),
                    Ye(n, f, ""),
                    n),
                    e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(m, g) {
                    if (at(m.instance.modifiers, "inner"))
                        return m;
                    if (m.flipped && m.placement === m.originalPlacement)
                        return m;
                    var _ = Ze(m.instance.popper, m.instance.reference, g.padding, g.boundariesElement, m.positionFixed)
                      , v = m.placement.split("-")[0]
                      , y = it(v)
                      , E = m.placement.split("-")[1] || ""
                      , b = [];
                    switch (g.behavior) {
                    case Et:
                        b = [v, y];
                        break;
                    case bt:
                        b = yt(v);
                        break;
                    case wt:
                        b = yt(v, !0);
                        break;
                    default:
                        b = g.behavior
                    }
                    return b.forEach(function(e, t) {
                        if (v !== e || b.length === t + 1)
                            return m;
                        v = m.placement.split("-")[0],
                        y = it(v);
                        var n = m.offsets.popper
                          , i = m.offsets.reference
                          , o = Math.floor
                          , r = "left" === v && o(n.right) > o(i.left) || "right" === v && o(n.left) < o(i.right) || "top" === v && o(n.bottom) > o(i.top) || "bottom" === v && o(n.top) < o(i.bottom)
                          , s = o(n.left) < o(_.left)
                          , a = o(n.right) > o(_.right)
                          , l = o(n.top) < o(_.top)
                          , c = o(n.bottom) > o(_.bottom)
                          , h = "left" === v && s || "right" === v && a || "top" === v && l || "bottom" === v && c
                          , u = -1 !== ["top", "bottom"].indexOf(v)
                          , f = !!g.flipVariations && (u && "start" === E && s || u && "end" === E && a || !u && "start" === E && l || !u && "end" === E && c)
                          , d = !!g.flipVariationsByContent && (u && "start" === E && a || u && "end" === E && s || !u && "start" === E && c || !u && "end" === E && l)
                          , p = f || d;
                        (r || h || p) && (m.flipped = !0,
                        (r || h) && (v = b[t + 1]),
                        p && (E = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(E)),
                        m.placement = v + (E ? "-" + E : ""),
                        m.offsets.popper = ze({}, m.offsets.popper, ot(m.instance.popper, m.offsets.reference, m.placement)),
                        m = st(m.instance.modifiers, m, "flip"))
                    }),
                    m
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , n = t.split("-")[0]
                      , i = e.offsets
                      , o = i.popper
                      , r = i.reference
                      , s = -1 !== ["left", "right"].indexOf(n)
                      , a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0),
                    e.placement = it(t),
                    e.offsets.popper = Xe(o),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!gt(e.instance.modifiers, "hide", "preventOverflow"))
                        return e;
                    var t = e.offsets.reference
                      , n = rt(e.instance.modifiers, function(e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x
                      , i = t.y
                      , o = e.offsets.popper
                      , r = rt(e.instance.modifiers, function(e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s = void 0 !== r ? r : t.gpuAcceleration
                      , a = Fe(e.instance.popper)
                      , l = Ge(a)
                      , c = {
                        position: o.position
                    }
                      , h = pt(e, window.devicePixelRatio < 2 || !mt)
                      , u = "bottom" === n ? "top" : "bottom"
                      , f = "right" === i ? "left" : "right"
                      , d = lt("transform")
                      , p = void 0
                      , m = void 0;
                    if (m = "bottom" == u ? "HTML" === a.nodeName ? -a.clientHeight + h.bottom : -l.height + h.bottom : h.top,
                    p = "right" == f ? "HTML" === a.nodeName ? -a.clientWidth + h.right : -l.width + h.right : h.left,
                    s && d)
                        c[d] = "translate3d(" + p + "px, " + m + "px, 0)",
                        c[u] = 0,
                        c[f] = 0,
                        c.willChange = "transform";
                    else {
                        var g = "bottom" == u ? -1 : 1
                          , _ = "right" == f ? -1 : 1;
                        c[u] = m * g,
                        c[f] = p * _,
                        c.willChange = u + ", " + f
                    }
                    var v = {
                        "x-placement": e.placement
                    };
                    return e.attributes = ze({}, v, e.attributes),
                    e.styles = ze({}, c, e.styles),
                    e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return dt(e.instance.popper, e.styles),
                    function(t, n) {
                        Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        })
                    }(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, n, i, o) {
                    var r = tt(o, t, e, n.positionFixed)
                      , s = et(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s),
                    dt(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }),
                    n
                },
                gpuAcceleration: void 0
            }
        }
    }
      , St = (Qe(Dt, [{
        key: "update",
        value: function() {
            return function() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed),
                    e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                    e.originalPlacement = e.placement,
                    e.positionFixed = this.options.positionFixed,
                    e.offsets.popper = ot(this.popper, e.offsets.reference, e.placement),
                    e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                    e = st(this.modifiers, e),
                    this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e))
                }
            }
            .call(this)
        }
    }, {
        key: "destroy",
        value: function() {
            return function() {
                return this.state.isDestroyed = !0,
                at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                this.popper.style.position = "",
                this.popper.style.top = "",
                this.popper.style.left = "",
                this.popper.style.right = "",
                this.popper.style.bottom = "",
                this.popper.style.willChange = "",
                this.popper.style[lt("transform")] = ""),
                this.disableEventListeners(),
                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                this
            }
            .call(this)
        }
    }, {
        key: "enableEventListeners",
        value: function() {
            return function() {
                this.state.eventsEnabled || (this.state = ht(this.reference, this.options, this.state, this.scheduleUpdate))
            }
            .call(this)
        }
    }, {
        key: "disableEventListeners",
        value: function() {
            return ut.call(this)
        }
    }]),
    Dt);
    function Dt(e, t) {
        var n = this
          , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        !function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }(this, Dt),
        this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }
        ,
        this.update = Oe(this.update.bind(this)),
        this.options = ze({}, Dt.Defaults, i),
        this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        },
        this.reference = e && e.jquery ? e[0] : e,
        this.popper = t && t.jquery ? t[0] : t,
        this.options.modifiers = {},
        Object.keys(ze({}, Dt.Defaults.modifiers, i.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = ze({}, Dt.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
        }),
        this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return ze({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }),
        this.modifiers.forEach(function(e) {
            e.enabled && Ne(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }),
        this.update();
        var o = this.options.eventsEnabled;
        o && this.enableEventListeners(),
        this.state.eventsEnabled = o
    }
    St.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    St.placements = _t,
    St.Defaults = Ct;
    var It = "dropdown"
      , At = "bs.dropdown"
      , Ot = "." + At
      , Nt = ".data-api"
      , kt = p.fn[It]
      , Lt = new RegExp("38|40|27")
      , Pt = {
        HIDE: "hide" + Ot,
        HIDDEN: "hidden" + Ot,
        SHOW: "show" + Ot,
        SHOWN: "shown" + Ot,
        CLICK: "click" + Ot,
        CLICK_DATA_API: "click" + Ot + Nt,
        KEYDOWN_DATA_API: "keydown" + Ot + Nt,
        KEYUP_DATA_API: "keyup" + Ot + Nt
    }
      , xt = "disabled"
      , jt = "show"
      , Ht = "dropup"
      , Rt = "dropright"
      , Ft = "dropleft"
      , Mt = "dropdown-menu-right"
      , Wt = "position-static"
      , Ut = '[data-toggle="dropdown"]'
      , Bt = ".dropdown form"
      , qt = ".dropdown-menu"
      , Kt = ".navbar-nav"
      , Qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , Vt = "top-start"
      , Yt = "top-end"
      , zt = "bottom-start"
      , Xt = "bottom-end"
      , Gt = "right-start"
      , $t = "left-start"
      , Jt = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
    }
      , Zt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
    }
      , en = function() {
        function c(e, t) {
            this._element = e,
            this._popper = null,
            this._config = this._getConfig(t),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var e = c.prototype;
        return e.toggle = function() {
            if (!this._element.disabled && !p(this._element).hasClass(xt)) {
                var e = p(this._menu).hasClass(jt);
                c._clearMenus(),
                e || this.show(!0)
            }
        }
        ,
        e.show = function(e) {
            if (void 0 === e && (e = !1),
            !(this._element.disabled || p(this._element).hasClass(xt) || p(this._menu).hasClass(jt))) {
                var t = {
                    relatedTarget: this._element
                }
                  , n = p.Event(Pt.SHOW, t)
                  , i = c._getParentFromElement(this._element);
                if (p(i).trigger(n),
                !n.isDefaultPrevented()) {
                    if (!this._inNavbar && e) {
                        if ("undefined" == typeof St)
                            throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var o = this._element;
                        "parent" === this._config.reference ? o = i : m.isElement(this._config.reference) && (o = this._config.reference,
                        "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                        "scrollParent" !== this._config.boundary && p(i).addClass(Wt),
                        this._popper = new St(o,this._menu,this._getPopperConfig())
                    }
                    "ontouchstart"in document.documentElement && 0 === p(i).closest(Kt).length && p(document.body).children().on("mouseover", null, p.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    p(this._menu).toggleClass(jt),
                    p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN, t))
                }
            }
        }
        ,
        e.hide = function() {
            if (!this._element.disabled && !p(this._element).hasClass(xt) && p(this._menu).hasClass(jt)) {
                var e = {
                    relatedTarget: this._element
                }
                  , t = p.Event(Pt.HIDE, e)
                  , n = c._getParentFromElement(this._element);
                p(n).trigger(t),
                t.isDefaultPrevented() || (this._popper && this._popper.destroy(),
                p(this._menu).toggleClass(jt),
                p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN, e)))
            }
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, At),
            p(this._element).off(Ot),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        e.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e._addEventListeners = function() {
            var t = this;
            p(this._element).on(Pt.CLICK, function(e) {
                e.preventDefault(),
                e.stopPropagation(),
                t.toggle()
            })
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, this.constructor.Default, {}, p(this._element).data(), {}, e),
            m.typeCheckConfig(It, e, this.constructor.DefaultType),
            e
        }
        ,
        e._getMenuElement = function() {
            if (!this._menu) {
                var e = c._getParentFromElement(this._element);
                e && (this._menu = e.querySelector(qt))
            }
            return this._menu
        }
        ,
        e._getPlacement = function() {
            var e = p(this._element.parentNode)
              , t = zt;
            return e.hasClass(Ht) ? (t = Vt,
            p(this._menu).hasClass(Mt) && (t = Yt)) : e.hasClass(Rt) ? t = Gt : e.hasClass(Ft) ? t = $t : p(this._menu).hasClass(Mt) && (t = Xt),
            t
        }
        ,
        e._detectNavbar = function() {
            return 0 < p(this._element).closest(".navbar").length
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = l({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}),
                e
            }
            : e.offset = this._config.offset,
            e
        }
        ,
        e._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }),
            l({}, e, {}, this._config.popperConfig)
        }
        ,
        c._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(At);
                if (e || (e = new c(this,"object" == typeof t ? t : null),
                p(this).data(At, e)),
                "string" == typeof t) {
                    if ("undefined" == typeof e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }
        ,
        c._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = t.length; n < i; n++) {
                    var o = c._getParentFromElement(t[n])
                      , r = p(t[n]).data(At)
                      , s = {
                        relatedTarget: t[n]
                    };
                    if (e && "click" === e.type && (s.clickEvent = e),
                    r) {
                        var a = r._menu;
                        if (p(o).hasClass(jt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(o, e.target))) {
                            var l = p.Event(Pt.HIDE, s);
                            p(o).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                            t[n].setAttribute("aria-expanded", "false"),
                            r._popper && r._popper.destroy(),
                            p(a).removeClass(jt),
                            p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(e) {
            var t, n = m.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)),
            t || e.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(e) {
            if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(qt).length)) : Lt.test(e.which)) && (e.preventDefault(),
            e.stopPropagation(),
            !this.disabled && !p(this).hasClass(xt))) {
                var t = c._getParentFromElement(this)
                  , n = p(t).hasClass(jt);
                if (n || 27 !== e.which)
                    if (n && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = [].slice.call(t.querySelectorAll(Qt)).filter(function(e) {
                            return p(e).is(":visible")
                        });
                        if (0 !== i.length) {
                            var o = i.indexOf(e.target);
                            38 === e.which && 0 < o && o--,
                            40 === e.which && o < i.length - 1 && o++,
                            o < 0 && (o = 0),
                            i[o].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var r = t.querySelector(Ut);
                            p(r).trigger("focus")
                        }
                        p(this).trigger("click")
                    }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Jt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Zt
            }
        }]),
        c
    }();
    p(document).on(Pt.KEYDOWN_DATA_API, Ut, en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API, qt, en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, en._clearMenus).on(Pt.CLICK_DATA_API, Ut, function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        en._jQueryInterface.call(p(this), "toggle")
    }).on(Pt.CLICK_DATA_API, Bt, function(e) {
        e.stopPropagation()
    }),
    p.fn[It] = en._jQueryInterface,
    p.fn[It].Constructor = en,
    p.fn[It].noConflict = function() {
        return p.fn[It] = kt,
        en._jQueryInterface
    }
    ;
    var tn = "modal"
      , nn = "bs.modal"
      , on = "." + nn
      , rn = p.fn[tn]
      , sn = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , an = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , ln = {
        HIDE: "hide" + on,
        HIDE_PREVENTED: "hidePrevented" + on,
        HIDDEN: "hidden" + on,
        SHOW: "show" + on,
        SHOWN: "shown" + on,
        FOCUSIN: "focusin" + on,
        RESIZE: "resize" + on,
        CLICK_DISMISS: "click.dismiss" + on,
        KEYDOWN_DISMISS: "keydown.dismiss" + on,
        MOUSEUP_DISMISS: "mouseup.dismiss" + on,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + on,
        CLICK_DATA_API: "click" + on + ".data-api"
    }
      , cn = "modal-dialog-scrollable"
      , hn = "modal-scrollbar-measure"
      , un = "modal-backdrop"
      , fn = "modal-open"
      , dn = "fade"
      , pn = "show"
      , mn = "modal-static"
      , gn = ".modal-dialog"
      , _n = ".modal-body"
      , vn = '[data-toggle="modal"]'
      , yn = '[data-dismiss="modal"]'
      , En = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , bn = ".sticky-top"
      , wn = function() {
        function o(e, t) {
            this._config = this._getConfig(t),
            this._element = e,
            this._dialog = e.querySelector(gn),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var e = o.prototype;
        return e.toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        ,
        e.show = function(e) {
            var t = this;
            if (!this._isShown && !this._isTransitioning) {
                p(this._element).hasClass(dn) && (this._isTransitioning = !0);
                var n = p.Event(ln.SHOW, {
                    relatedTarget: e
                });
                p(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                p(this._element).on(ln.CLICK_DISMISS, yn, function(e) {
                    return t.hide(e)
                }),
                p(this._dialog).on(ln.MOUSEDOWN_DISMISS, function() {
                    p(t._element).one(ln.MOUSEUP_DISMISS, function(e) {
                        p(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return t._showElement(e)
                }))
            }
        }
        ,
        e.hide = function(e) {
            var t = this;
            if (e && e.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = p.Event(ln.HIDE);
                if (p(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = p(this._element).hasClass(dn);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    p(document).off(ln.FOCUSIN),
                    p(this._element).removeClass(pn),
                    p(this._element).off(ln.CLICK_DISMISS),
                    p(this._dialog).off(ln.MOUSEDOWN_DISMISS),
                    i) {
                        var o = m.getTransitionDurationFromElement(this._element);
                        p(this._element).one(m.TRANSITION_END, function(e) {
                            return t._hideModal(e)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        e.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return p(e).off(on)
            }),
            p(document).off(ln.FOCUSIN),
            p.removeData(this._element, nn),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        e.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, sn, {}, e),
            m.typeCheckConfig(tn, e, an),
            e
        }
        ,
        e._triggerBackdropTransition = function() {
            var e = this;
            if ("static" === this._config.backdrop) {
                var t = p.Event(ln.HIDE_PREVENTED);
                if (p(this._element).trigger(t),
                t.defaultPrevented)
                    return;
                this._element.classList.add(mn);
                var n = m.getTransitionDurationFromElement(this._element);
                p(this._element).one(m.TRANSITION_END, function() {
                    e._element.classList.remove(mn)
                }).emulateTransitionEnd(n),
                this._element.focus()
            } else
                this.hide()
        }
        ,
        e._showElement = function(e) {
            var t = this
              , n = p(this._element).hasClass(dn)
              , i = this._dialog ? this._dialog.querySelector(_n) : null;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            p(this._dialog).hasClass(cn) && i ? i.scrollTop = 0 : this._element.scrollTop = 0,
            n && m.reflow(this._element),
            p(this._element).addClass(pn),
            this._config.focus && this._enforceFocus();
            function o() {
                t._config.focus && t._element.focus(),
                t._isTransitioning = !1,
                p(t._element).trigger(r)
            }
            var r = p.Event(ln.SHOWN, {
                relatedTarget: e
            });
            if (n) {
                var s = m.getTransitionDurationFromElement(this._dialog);
                p(this._dialog).one(m.TRANSITION_END, o).emulateTransitionEnd(s)
            } else
                o()
        }
        ,
        e._enforceFocus = function() {
            var t = this;
            p(document).off(ln.FOCUSIN).on(ln.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
            })
        }
        ,
        e._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? p(this._element).on(ln.KEYDOWN_DISMISS, function(e) {
                27 === e.which && t._triggerBackdropTransition()
            }) : this._isShown || p(this._element).off(ln.KEYDOWN_DISMISS)
        }
        ,
        e._setResizeEvent = function() {
            var t = this;
            this._isShown ? p(window).on(ln.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : p(window).off(ln.RESIZE)
        }
        ,
        e._hideModal = function() {
            var e = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                p(document.body).removeClass(fn),
                e._resetAdjustments(),
                e._resetScrollbar(),
                p(e._element).trigger(ln.HIDDEN)
            })
        }
        ,
        e._removeBackdrop = function() {
            this._backdrop && (p(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        e._showBackdrop = function(e) {
            var t = this
              , n = p(this._element).hasClass(dn) ? dn : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = un,
                n && this._backdrop.classList.add(n),
                p(this._backdrop).appendTo(document.body),
                p(this._element).on(ln.CLICK_DISMISS, function(e) {
                    t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition()
                }),
                n && m.reflow(this._backdrop),
                p(this._backdrop).addClass(pn),
                !e)
                    return;
                if (!n)
                    return void e();
                var i = m.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop).one(m.TRANSITION_END, e).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                p(this._backdrop).removeClass(pn);
                var o = function() {
                    t._removeBackdrop(),
                    e && e()
                };
                if (p(this._element).hasClass(dn)) {
                    var r = m.getTransitionDurationFromElement(this._backdrop);
                    p(this._backdrop).one(m.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            } else
                e && e()
        }
        ,
        e._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        e._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        e._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        e._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                var e = [].slice.call(document.querySelectorAll(En))
                  , t = [].slice.call(document.querySelectorAll(bn));
                p(e).each(function(e, t) {
                    var n = t.style.paddingRight
                      , i = p(t).css("padding-right");
                    p(t).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }),
                p(t).each(function(e, t) {
                    var n = t.style.marginRight
                      , i = p(t).css("margin-right");
                    p(t).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = p(document.body).css("padding-right");
                p(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            p(document.body).addClass(fn)
        }
        ,
        e._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(En));
            p(e).each(function(e, t) {
                var n = p(t).data("padding-right");
                p(t).removeData("padding-right"),
                t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll("" + bn));
            p(t).each(function(e, t) {
                var n = p(t).data("margin-right");
                "undefined" != typeof n && p(t).css("margin-right", n).removeData("margin-right")
            });
            var n = p(document.body).data("padding-right");
            p(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        e._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = hn,
            document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e),
            t
        }
        ,
        o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var e = p(this).data(nn)
                  , t = l({}, sn, {}, p(this).data(), {}, "object" == typeof n && n ? n : {});
                if (e || (e = new o(this,t),
                p(this).data(nn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](i)
                } else
                    t.show && e.show(i)
            })
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return sn
            }
        }]),
        o
    }();
    p(document).on(ln.CLICK_DATA_API, vn, function(e) {
        var t, n = this, i = m.getSelectorFromElement(this);
        i && (t = document.querySelector(i));
        var o = p(t).data(nn) ? "toggle" : l({}, p(t).data(), {}, p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var r = p(t).one(ln.SHOW, function(e) {
            e.isDefaultPrevented() || r.one(ln.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        wn._jQueryInterface.call(p(t), o, this)
    }),
    p.fn[tn] = wn._jQueryInterface,
    p.fn[tn].Constructor = wn,
    p.fn[tn].noConflict = function() {
        return p.fn[tn] = rn,
        wn._jQueryInterface
    }
    ;
    var Tn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Cn = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , Dn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function In(e, r, t) {
        if (0 === e.length)
            return e;
        if (t && "function" == typeof t)
            return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), i = function(e) {
            var t = a[e]
              , n = t.nodeName.toLowerCase();
            if (-1 === s.indexOf(t.nodeName.toLowerCase()))
                return t.parentNode.removeChild(t),
                "continue";
            var i = [].slice.call(t.attributes)
              , o = [].concat(r["*"] || [], r[n] || []);
            i.forEach(function(e) {
                !function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n))
                        return -1 === Tn.indexOf(n) || Boolean(e.nodeValue.match(Sn) || e.nodeValue.match(Dn));
                    for (var i = t.filter(function(e) {
                        return e instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }(e, o) && t.removeAttribute(e.nodeName)
            })
        }, o = 0, l = a.length; o < l; o++)
            i(o);
        return n.body.innerHTML
    }
    var An = "tooltip"
      , On = "bs.tooltip"
      , Nn = "." + On
      , kn = p.fn[An]
      , Ln = "bs-tooltip"
      , Pn = new RegExp("(^|\\s)" + Ln + "\\S+","g")
      , xn = ["sanitize", "whiteList", "sanitizeFn"]
      , jn = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object",
        popperConfig: "(null|object)"
    }
      , Hn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Rn = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Cn,
        popperConfig: null
    }
      , Fn = "show"
      , Mn = "out"
      , Wn = {
        HIDE: "hide" + Nn,
        HIDDEN: "hidden" + Nn,
        SHOW: "show" + Nn,
        SHOWN: "shown" + Nn,
        INSERTED: "inserted" + Nn,
        CLICK: "click" + Nn,
        FOCUSIN: "focusin" + Nn,
        FOCUSOUT: "focusout" + Nn,
        MOUSEENTER: "mouseenter" + Nn,
        MOUSELEAVE: "mouseleave" + Nn
    }
      , Un = "fade"
      , Bn = "show"
      , qn = ".tooltip-inner"
      , Kn = ".arrow"
      , Qn = "hover"
      , Vn = "focus"
      , Yn = "click"
      , zn = "manual"
      , Xn = function() {
        function i(e, t) {
            if ("undefined" == typeof St)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = e,
            this.config = this._getConfig(t),
            this.tip = null,
            this._setListeners()
        }
        var e = i.prototype;
        return e.enable = function() {
            this._isEnabled = !0
        }
        ,
        e.disable = function() {
            this._isEnabled = !1
        }
        ,
        e.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        e.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY
                      , n = p(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                    p(e.currentTarget).data(t, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (p(this.getTipElement()).hasClass(Bn))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            p.removeData(this.element, this.constructor.DATA_KEY),
            p(this.element).off(this.constructor.EVENT_KEY),
            p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
            this.tip && p(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            this._activeTrigger = null,
            this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        e.show = function() {
            var t = this;
            if ("none" === p(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var e = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                p(this.element).trigger(e);
                var n = m.findShadowRoot(this.element)
                  , i = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !i)
                    return;
                var o = this.getTipElement()
                  , r = m.getUID(this.constructor.NAME);
                o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && p(o).addClass(Un);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                p(o).data(this.constructor.DATA_KEY, this),
                p.contains(this.element.ownerDocument.documentElement, this.tip) || p(o).appendTo(l),
                p(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new St(this.element,o,this._getPopperConfig(a)),
                p(o).addClass(Bn),
                "ontouchstart"in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                var c = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null,
                    p(t.element).trigger(t.constructor.Event.SHOWN),
                    e === Mn && t._leave(null, t)
                };
                if (p(this.tip).hasClass(Un)) {
                    var h = m.getTransitionDurationFromElement(this.tip);
                    p(this.tip).one(m.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        e.hide = function(e) {
            function t() {
                n._hoverState !== Fn && i.parentNode && i.parentNode.removeChild(i),
                n._cleanTipClass(),
                n.element.removeAttribute("aria-describedby"),
                p(n.element).trigger(n.constructor.Event.HIDDEN),
                null !== n._popper && n._popper.destroy(),
                e && e()
            }
            var n = this
              , i = this.getTipElement()
              , o = p.Event(this.constructor.Event.HIDE);
            if (p(this.element).trigger(o),
            !o.isDefaultPrevented()) {
                if (p(i).removeClass(Bn),
                "ontouchstart"in document.documentElement && p(document.body).children().off("mouseover", null, p.noop),
                this._activeTrigger[Yn] = !1,
                this._activeTrigger[Vn] = !1,
                this._activeTrigger[Qn] = !1,
                p(this.tip).hasClass(Un)) {
                    var r = m.getTransitionDurationFromElement(i);
                    p(i).one(m.TRANSITION_END, t).emulateTransitionEnd(r)
                } else
                    t();
                this._hoverState = ""
            }
        }
        ,
        e.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        e.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        e.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(Ln + "-" + e)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(p(e.querySelectorAll(qn)), this.getTitle()),
            p(e).removeClass(Un + " " + Bn)
        }
        ,
        e.setElementContent = function(e, t) {
            "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = In(t, this.config.whiteList, this.config.sanitizeFn)),
            e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
        }
        ,
        e.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e = e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }
        ,
        e._getPopperConfig = function(e) {
            var t = this;
            return l({}, {
                placement: e,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: Kn
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                },
                onUpdate: function(e) {
                    return t._handlePopperPlacementChange(e)
                }
            }, {}, this.config.popperConfig)
        }
        ,
        e._getOffset = function() {
            var t = this
              , e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = l({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}),
                e
            }
            : e.offset = this.config.offset,
            e
        }
        ,
        e._getContainer = function() {
            return !1 === this.config.container ? document.body : m.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
        }
        ,
        e._getAttachment = function(e) {
            return Hn[e.toUpperCase()]
        }
        ,
        e._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(e) {
                if ("click" === e)
                    p(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                        return i.toggle(e)
                    });
                else if (e !== zn) {
                    var t = e === Qn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = e === Qn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    p(i.element).on(t, i.config.selector, function(e) {
                        return i._enter(e)
                    }).on(n, i.config.selector, function(e) {
                        return i._leave(e)
                    })
                }
            }),
            this._hideModalHandler = function() {
                i.element && i.hide()
            }
            ,
            p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        e._fixTitle = function() {
            var e = typeof this.element.getAttribute("data-original-title");
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        e._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusin" === e.type ? Vn : Qn] = !0),
            p(t.getTipElement()).hasClass(Bn) || t._hoverState === Fn ? t._hoverState = Fn : (clearTimeout(t._timeout),
            t._hoverState = Fn,
            t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === Fn && t.show()
            }, t.config.delay.show) : t.show())
        }
        ,
        e._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget,this._getDelegateConfig()),
            p(e.currentTarget).data(n, t)),
            e && (t._activeTrigger["focusout" === e.type ? Vn : Qn] = !1),
            t._isWithActiveTrigger() || (clearTimeout(t._timeout),
            t._hoverState = Mn,
            t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                t._hoverState === Mn && t.hide()
            }, t.config.delay.hide) : t.hide())
        }
        ,
        e._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e])
                    return !0;
            return !1
        }
        ,
        e._getConfig = function(e) {
            var t = p(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== xn.indexOf(e) && delete t[e]
            }),
            "number" == typeof (e = l({}, this.constructor.Default, {}, t, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
            "number" == typeof e.title && (e.title = e.title.toString()),
            "number" == typeof e.content && (e.content = e.content.toString()),
            m.typeCheckConfig(An, e, this.constructor.DefaultType),
            e.sanitize && (e.template = In(e.template, e.whiteList, e.sanitizeFn)),
            e
        }
        ,
        e._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config)
                    this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }
        ,
        e._cleanTipClass = function() {
            var e = p(this.getTipElement())
              , t = e.attr("class").match(Pn);
            null !== t && t.length && e.removeClass(t.join(""))
        }
        ,
        e._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(e.placement))
        }
        ,
        e._fixTransition = function() {
            var e = this.getTipElement()
              , t = this.config.animation;
            null === e.getAttribute("x-placement") && (p(e).removeClass(Un),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = t)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(On)
                  , t = "object" == typeof n && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                p(this).data(On, e)),
                "string" == typeof n)) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Rn
            }
        }, {
            key: "NAME",
            get: function() {
                return An
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return On
            }
        }, {
            key: "Event",
            get: function() {
                return Wn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Nn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return jn
            }
        }]),
        i
    }();
    p.fn[An] = Xn._jQueryInterface,
    p.fn[An].Constructor = Xn,
    p.fn[An].noConflict = function() {
        return p.fn[An] = kn,
        Xn._jQueryInterface
    }
    ;
    var Gn = "popover"
      , $n = "bs.popover"
      , Jn = "." + $n
      , Zn = p.fn[Gn]
      , ei = "bs-popover"
      , ti = new RegExp("(^|\\s)" + ei + "\\S+","g")
      , ni = l({}, Xn.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , ii = l({}, Xn.DefaultType, {
        content: "(string|element|function)"
    })
      , oi = "fade"
      , ri = "show"
      , si = ".popover-header"
      , ai = ".popover-body"
      , li = {
        HIDE: "hide" + Jn,
        HIDDEN: "hidden" + Jn,
        SHOW: "show" + Jn,
        SHOWN: "shown" + Jn,
        INSERTED: "inserted" + Jn,
        CLICK: "click" + Jn,
        FOCUSIN: "focusin" + Jn,
        FOCUSOUT: "focusout" + Jn,
        MOUSEENTER: "mouseenter" + Jn,
        MOUSELEAVE: "mouseleave" + Jn
    }
      , ci = function(e) {
        function i() {
            return e.apply(this, arguments) || this
        }
        !function(e, t) {
            e.prototype = Object.create(t.prototype),
            (e.prototype.constructor = e).__proto__ = t
        }(i, e);
        var t = i.prototype;
        return t.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        t.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(ei + "-" + e)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var e = p(this.getTipElement());
            this.setElementContent(e.find(si), this.getTitle());
            var t = this._getContent();
            "function" == typeof t && (t = t.call(this.element)),
            this.setElementContent(e.find(ai), t),
            e.removeClass(oi + " " + ri)
        }
        ,
        t._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        t._cleanTipClass = function() {
            var e = p(this.getTipElement())
              , t = e.attr("class").match(ti);
            null !== t && 0 < t.length && e.removeClass(t.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data($n)
                  , t = "object" == typeof n ? n : null;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this,t),
                p(this).data($n, e)),
                "string" == typeof n)) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ni
            }
        }, {
            key: "NAME",
            get: function() {
                return Gn
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return $n
            }
        }, {
            key: "Event",
            get: function() {
                return li
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Jn
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ii
            }
        }]),
        i
    }(Xn);
    p.fn[Gn] = ci._jQueryInterface,
    p.fn[Gn].Constructor = ci,
    p.fn[Gn].noConflict = function() {
        return p.fn[Gn] = Zn,
        ci._jQueryInterface
    }
    ;
    var hi = "scrollspy"
      , ui = "bs.scrollspy"
      , fi = "." + ui
      , di = p.fn[hi]
      , pi = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , mi = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , gi = {
        ACTIVATE: "activate" + fi,
        SCROLL: "scroll" + fi,
        LOAD_DATA_API: "load" + fi + ".data-api"
    }
      , _i = "dropdown-item"
      , vi = "active"
      , yi = '[data-spy="scroll"]'
      , Ei = ".nav, .list-group"
      , bi = ".nav-link"
      , wi = ".nav-item"
      , Ti = ".list-group-item"
      , Ci = ".dropdown"
      , Si = ".dropdown-item"
      , Di = ".dropdown-toggle"
      , Ii = "offset"
      , Ai = "position"
      , Oi = function() {
        function n(e, t) {
            var n = this;
            this._element = e,
            this._scrollElement = "BODY" === e.tagName ? window : e,
            this._config = this._getConfig(t),
            this._selector = this._config.target + " " + bi + "," + this._config.target + " " + Ti + "," + this._config.target + " " + Si,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            p(this._scrollElement).on(gi.SCROLL, function(e) {
                return n._process(e)
            }),
            this.refresh(),
            this._process()
        }
        var e = n.prototype;
        return e.refresh = function() {
            var t = this
              , e = this._scrollElement === this._scrollElement.window ? Ii : Ai
              , o = "auto" === this._config.method ? e : this._config.method
              , r = o === Ai ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t, n = m.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)),
                t) {
                    var i = t.getBoundingClientRect();
                    if (i.width || i.height)
                        return [p(t)[o]().top + r, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]),
                t._targets.push(e[1])
            })
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, ui),
            p(this._scrollElement).off(fi),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        e._getConfig = function(e) {
            if ("string" != typeof (e = l({}, pi, {}, "object" == typeof e && e ? e : {})).target) {
                var t = p(e.target).attr("id");
                t || (t = m.getUID(hi),
                p(e.target).attr("id", t)),
                e.target = "#" + t
            }
            return m.typeCheckConfig(hi, e, mi),
            e
        }
        ,
        e._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        e._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        e._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        e._process = function() {
            var e = this._getScrollTop() + this._config.offset
              , t = this._getScrollHeight()
              , n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(),
            n <= e) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && e >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        e._activate = function(t) {
            this._activeTarget = t,
            this._clear();
            var e = this._selector.split(",").map(function(e) {
                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
            })
              , n = p([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass(_i) ? (n.closest(Ci).find(Di).addClass(vi),
            n.addClass(vi)) : (n.addClass(vi),
            n.parents(Ei).prev(bi + ", " + Ti).addClass(vi),
            n.parents(Ei).prev(wi).children(bi).addClass(vi)),
            p(this._scrollElement).trigger(gi.ACTIVATE, {
                relatedTarget: t
            })
        }
        ,
        e._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(vi)
            }).forEach(function(e) {
                return e.classList.remove(vi)
            })
        }
        ,
        n._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(ui);
                if (e || (e = new n(this,"object" == typeof t && t),
                p(this).data(ui, e)),
                "string" == typeof t) {
                    if ("undefined" == typeof e[t])
                        throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return pi
            }
        }]),
        n
    }();
    p(window).on(gi.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(yi)), t = e.length; t--; ) {
            var n = p(e[t]);
            Oi._jQueryInterface.call(n, n.data())
        }
    }),
    p.fn[hi] = Oi._jQueryInterface,
    p.fn[hi].Constructor = Oi,
    p.fn[hi].noConflict = function() {
        return p.fn[hi] = di,
        Oi._jQueryInterface
    }
    ;
    var Ni = "bs.tab"
      , ki = "." + Ni
      , Li = p.fn.tab
      , Pi = {
        HIDE: "hide" + ki,
        HIDDEN: "hidden" + ki,
        SHOW: "show" + ki,
        SHOWN: "shown" + ki,
        CLICK_DATA_API: "click" + ki + ".data-api"
    }
      , xi = "dropdown-menu"
      , ji = "active"
      , Hi = "disabled"
      , Ri = "fade"
      , Fi = "show"
      , Mi = ".dropdown"
      , Wi = ".nav, .list-group"
      , Ui = ".active"
      , Bi = "> li > .active"
      , qi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , Ki = ".dropdown-toggle"
      , Qi = "> .dropdown-menu .active"
      , Vi = function() {
        function i(e) {
            this._element = e
        }
        var e = i.prototype;
        return e.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(ji) || p(this._element).hasClass(Hi))) {
                var e, i, t = p(this._element).closest(Wi)[0], o = m.getSelectorFromElement(this._element);
                if (t) {
                    var r = "UL" === t.nodeName || "OL" === t.nodeName ? Bi : Ui;
                    i = (i = p.makeArray(p(t).find(r)))[i.length - 1]
                }
                var s = p.Event(Pi.HIDE, {
                    relatedTarget: this._element
                })
                  , a = p.Event(Pi.SHOW, {
                    relatedTarget: i
                });
                if (i && p(i).trigger(s),
                p(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (e = document.querySelector(o)),
                    this._activate(this._element, t);
                    var l = function() {
                        var e = p.Event(Pi.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , t = p.Event(Pi.SHOWN, {
                            relatedTarget: i
                        });
                        p(i).trigger(e),
                        p(n._element).trigger(t)
                    };
                    e ? this._activate(e, e.parentNode, l) : l()
                }
            }
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, Ni),
            this._element = null
        }
        ,
        e._activate = function(e, t, n) {
            function i() {
                return o._transitionComplete(e, r, n)
            }
            var o = this
              , r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children(Ui) : p(t).find(Bi))[0]
              , s = n && r && p(r).hasClass(Ri);
            if (r && s) {
                var a = m.getTransitionDurationFromElement(r);
                p(r).removeClass(Fi).one(m.TRANSITION_END, i).emulateTransitionEnd(a)
            } else
                i()
        }
        ,
        e._transitionComplete = function(e, t, n) {
            if (t) {
                p(t).removeClass(ji);
                var i = p(t.parentNode).find(Qi)[0];
                i && p(i).removeClass(ji),
                "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
            }
            if (p(e).addClass(ji),
            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
            m.reflow(e),
            e.classList.contains(Ri) && e.classList.add(Fi),
            e.parentNode && p(e.parentNode).hasClass(xi)) {
                var o = p(e).closest(Mi)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(Ki));
                    p(r).addClass(ji)
                }
                e.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(Ni);
                if (t || (t = new i(this),
                e.data(Ni, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]),
        i
    }();
    p(document).on(Pi.CLICK_DATA_API, qi, function(e) {
        e.preventDefault(),
        Vi._jQueryInterface.call(p(this), "show")
    }),
    p.fn.tab = Vi._jQueryInterface,
    p.fn.tab.Constructor = Vi,
    p.fn.tab.noConflict = function() {
        return p.fn.tab = Li,
        Vi._jQueryInterface
    }
    ;
    var Yi = "toast"
      , zi = "bs.toast"
      , Xi = "." + zi
      , Gi = p.fn[Yi]
      , $i = {
        CLICK_DISMISS: "click.dismiss" + Xi,
        HIDE: "hide" + Xi,
        HIDDEN: "hidden" + Xi,
        SHOW: "show" + Xi,
        SHOWN: "shown" + Xi
    }
      , Ji = "fade"
      , Zi = "hide"
      , eo = "show"
      , to = "showing"
      , no = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , io = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , oo = '[data-dismiss="toast"]'
      , ro = function() {
        function i(e, t) {
            this._element = e,
            this._config = this._getConfig(t),
            this._timeout = null,
            this._setListeners()
        }
        var e = i.prototype;
        return e.show = function() {
            var e = this
              , t = p.Event($i.SHOW);
            if (p(this._element).trigger(t),
            !t.isDefaultPrevented()) {
                this._config.animation && this._element.classList.add(Ji);
                var n = function() {
                    e._element.classList.remove(to),
                    e._element.classList.add(eo),
                    p(e._element).trigger($i.SHOWN),
                    e._config.autohide && (e._timeout = setTimeout(function() {
                        e.hide()
                    }, e._config.delay))
                };
                if (this._element.classList.remove(Zi),
                m.reflow(this._element),
                this._element.classList.add(to),
                this._config.animation) {
                    var i = m.getTransitionDurationFromElement(this._element);
                    p(this._element).one(m.TRANSITION_END, n).emulateTransitionEnd(i)
                } else
                    n()
            }
        }
        ,
        e.hide = function() {
            if (this._element.classList.contains(eo)) {
                var e = p.Event($i.HIDE);
                p(this._element).trigger(e),
                e.isDefaultPrevented() || this._close()
            }
        }
        ,
        e.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(eo) && this._element.classList.remove(eo),
            p(this._element).off($i.CLICK_DISMISS),
            p.removeData(this._element, zi),
            this._element = null,
            this._config = null
        }
        ,
        e._getConfig = function(e) {
            return e = l({}, io, {}, p(this._element).data(), {}, "object" == typeof e && e ? e : {}),
            m.typeCheckConfig(Yi, e, this.constructor.DefaultType),
            e
        }
        ,
        e._setListeners = function() {
            var e = this;
            p(this._element).on($i.CLICK_DISMISS, oo, function() {
                return e.hide()
            })
        }
        ,
        e._close = function() {
            function e() {
                t._element.classList.add(Zi),
                p(t._element).trigger($i.HIDDEN)
            }
            var t = this;
            if (this._element.classList.remove(eo),
            this._config.animation) {
                var n = m.getTransitionDurationFromElement(this._element);
                p(this._element).one(m.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this)
                  , t = e.data(zi);
                if (t || (t = new i(this,"object" == typeof n && n),
                e.data(zi, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](this)
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return no
            }
        }, {
            key: "Default",
            get: function() {
                return io
            }
        }]),
        i
    }();
    p.fn[Yi] = ro._jQueryInterface,
    p.fn[Yi].Constructor = ro,
    p.fn[Yi].noConflict = function() {
        return p.fn[Yi] = Gi,
        ro._jQueryInterface
    }
    ,
    e.Alert = _,
    e.Button = x,
    e.Carousel = he,
    e.Collapse = De,
    e.Dropdown = en,
    e.Modal = wn,
    e.Popover = ci,
    e.Scrollspy = Oi,
    e.Tab = Vi,
    e.Toast = ro,
    e.Tooltip = Xn,
    e.Util = m,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*! docsearch 2.6.3 | © Algolia | github.com/algolia/docsearch */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
    else if (typeof define === "function" && define.amd)
        define([], factory);
    else if (typeof exports === "object")
        exports["docsearch"] = factory();
    else
        root["docsearch"] = factory()
}
)(typeof self !== "undefined" ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                })
            }
        }
        ;
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"]
            }
            : function getModuleExports() {
                return module
            }
            ;
            __webpack_require__.d(getter, "a", getter);
            return getter
        }
        ;
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property)
        }
        ;
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 22)
    }([function(module, exports, __webpack_require__) {
        "use strict";
        var DOM = __webpack_require__(1);
        function escapeRegExp(str) {
            return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        module.exports = {
            isArray: null,
            isFunction: null,
            isObject: null,
            bind: null,
            each: null,
            map: null,
            mixin: null,
            isMsie: function(agentString) {
                if (agentString === undefined) {
                    agentString = navigator.userAgent
                }
                if (/(msie|trident)/i.test(agentString)) {
                    var match = agentString.match(/(msie |rv:)(\d+(.\d+)?)/i);
                    if (match) {
                        return match[2]
                    }
                }
                return false
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isNumber: function(obj) {
                return typeof obj === "number"
            },
            toStr: function toStr(s) {
                return s === undefined || s === null ? "" : s + ""
            },
            cloneDeep: function cloneDeep(obj) {
                var clone = this.mixin({}, obj);
                var self = this;
                this.each(clone, function(value, key) {
                    if (value) {
                        if (self.isArray(value)) {
                            clone[key] = [].concat(value)
                        } else if (self.isObject(value)) {
                            clone[key] = self.cloneDeep(value)
                        }
                    }
                });
                return clone
            },
            error: function(msg) {
                throw new Error(msg)
            },
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result
                }
                this.each(obj, function(val, key) {
                    if (result) {
                        result = test.call(null, val, key, obj) && result
                    }
                });
                return !!result
            },
            any: function(obj, test) {
                var found = false;
                if (!obj) {
                    return found
                }
                this.each(obj, function(val, key) {
                    if (test.call(null, val, key, obj)) {
                        found = true;
                        return false
                    }
                });
                return found
            },
            getUniqueId: function() {
                var counter = 0;
                return function() {
                    return counter++
                }
            }(),
            templatify: function templatify(obj) {
                if (this.isFunction(obj)) {
                    return obj
                }
                var $template = DOM.element(obj);
                if ($template.prop("tagName") === "SCRIPT") {
                    return function template() {
                        return $template.text()
                    }
                }
                return function template() {
                    return String(obj)
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0)
            },
            noop: function() {},
            formatPrefix: function(prefix, noPrefix) {
                return noPrefix ? "" : prefix + "-"
            },
            className: function(prefix, clazz, skipDot) {
                return (skipDot ? "" : ".") + prefix + clazz
            },
            escapeHighlightedString: function(str, highlightPreTag, highlightPostTag) {
                highlightPreTag = highlightPreTag || "<em>";
                var pre = document.createElement("div");
                pre.appendChild(document.createTextNode(highlightPreTag));
                highlightPostTag = highlightPostTag || "</em>";
                var post = document.createElement("div");
                post.appendChild(document.createTextNode(highlightPostTag));
                var div = document.createElement("div");
                div.appendChild(document.createTextNode(str));
                return div.innerHTML.replace(RegExp(escapeRegExp(pre.innerHTML), "g"), highlightPreTag).replace(RegExp(escapeRegExp(post.innerHTML), "g"), highlightPostTag)
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            element: null
        }
    }
    , function(module, exports) {
        var hasOwn = Object.prototype.hasOwnProperty;
        var toString = Object.prototype.toString;
        module.exports = function forEach(obj, fn, ctx) {
            if (toString.call(fn) !== "[object Function]") {
                throw new TypeError("iterator must be a function")
            }
            var l = obj.length;
            if (l === +l) {
                for (var i = 0; i < l; i++) {
                    fn.call(ctx, obj[i], i, obj)
                }
            } else {
                for (var k in obj) {
                    if (hasOwn.call(obj, k)) {
                        fn.call(ctx, obj[k], k, obj)
                    }
                }
            }
        }
    }
    , function(module, exports) {
        module.exports = function clone(obj) {
            return JSON.parse(JSON.stringify(obj))
        }
    }
    , function(module, exports) {
        var g;
        g = function() {
            return this
        }();
        try {
            g = g || Function("return this")() || (1,
            eval)("this")
        } catch (e) {
            if (typeof window === "object")
                g = window
        }
        module.exports = g
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var inherits = __webpack_require__(12);
        function AlgoliaSearchError(message, extraProperties) {
            var forEach = __webpack_require__(2);
            var error = this;
            if (typeof Error.captureStackTrace === "function") {
                Error.captureStackTrace(this, this.constructor)
            } else {
                error.stack = (new Error).stack || "Cannot get a stacktrace, browser is too old"
            }
            this.name = "AlgoliaSearchError";
            this.message = message || "Unknown error";
            if (extraProperties) {
                forEach(extraProperties, function addToErrorObject(value, key) {
                    error[key] = value
                })
            }
        }
        inherits(AlgoliaSearchError, Error);
        function createCustomError(name, message) {
            function AlgoliaSearchCustomError() {
                var args = Array.prototype.slice.call(arguments, 0);
                if (typeof args[0] !== "string") {
                    args.unshift(message)
                }
                AlgoliaSearchError.apply(this, args);
                this.name = "AlgoliaSearch" + name + "Error"
            }
            inherits(AlgoliaSearchCustomError, AlgoliaSearchError);
            return AlgoliaSearchCustomError
        }
        module.exports = {
            AlgoliaSearchError: AlgoliaSearchError,
            UnparsableJSON: createCustomError("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
            RequestTimeout: createCustomError("RequestTimeout", "Request timedout before getting a response"),
            Network: createCustomError("Network", "Network issue, see err.more for details"),
            JSONPScriptFail: createCustomError("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
            JSONPScriptError: createCustomError("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
            Unknown: createCustomError("Unknown", "Unknown error occured")
        }
    }
    , function(module, exports) {
        var toString = {}.toString;
        module.exports = Array.isArray || function(arr) {
            return toString.call(arr) == "[object Array]"
        }
    }
    , function(module, exports, __webpack_require__) {
        var foreach = __webpack_require__(2);
        module.exports = function map(arr, fn) {
            var newArr = [];
            foreach(arr, function(item, itemIndex) {
                newArr.push(fn(item, itemIndex, arr))
            });
            return newArr
        }
    }
    , function(module, exports, __webpack_require__) {
        (function(process) {
            exports = module.exports = __webpack_require__(39);
            exports.log = log;
            exports.formatArgs = formatArgs;
            exports.save = save;
            exports.load = load;
            exports.useColors = useColors;
            exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
            exports.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"];
            function useColors() {
                if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
                    return true
                }
                return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }
            exports.formatters.j = function(v) {
                try {
                    return JSON.stringify(v)
                } catch (err) {
                    return "[UnexpectedJSONParseError]: " + err.message
                }
            }
            ;
            function formatArgs(args) {
                var useColors = this.useColors;
                args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
                if (!useColors)
                    return;
                var c = "color: " + this.color;
                args.splice(1, 0, c, "color: inherit");
                var index = 0;
                var lastC = 0;
                args[0].replace(/%[a-zA-Z%]/g, function(match) {
                    if ("%%" === match)
                        return;
                    index++;
                    if ("%c" === match) {
                        lastC = index
                    }
                });
                args.splice(lastC, 0, c)
            }
            function log() {
                return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
            }
            function save(namespaces) {
                try {
                    if (null == namespaces) {
                        exports.storage.removeItem("debug")
                    } else {
                        exports.storage.debug = namespaces
                    }
                } catch (e) {}
            }
            function load() {
                var r;
                try {
                    r = exports.storage.debug
                } catch (e) {}
                if (!r && typeof process !== "undefined" && "env"in process) {
                    r = Object({
                        NODE_ENV: "production"
                    }).DEBUG
                }
                return r
            }
            exports.enable(load());
            function localstorage() {
                try {
                    return window.localStorage
                } catch (e) {}
            }
        }
        ).call(exports, __webpack_require__(9))
    }
    , function(module, exports) {
        var process = module.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined")
        }
        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined")
        }
        (function() {
            try {
                if (typeof setTimeout === "function") {
                    cachedSetTimeout = setTimeout
                } else {
                    cachedSetTimeout = defaultSetTimout
                }
            } catch (e) {
                cachedSetTimeout = defaultSetTimout
            }
            try {
                if (typeof clearTimeout === "function") {
                    cachedClearTimeout = clearTimeout
                } else {
                    cachedClearTimeout = defaultClearTimeout
                }
            } catch (e) {
                cachedClearTimeout = defaultClearTimeout
            }
        }
        )();
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                return setTimeout(fun, 0)
            }
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0)
            }
            try {
                return cachedSetTimeout(fun, 0)
            } catch (e) {
                try {
                    return cachedSetTimeout.call(null, fun, 0)
                } catch (e) {
                    return cachedSetTimeout.call(this, fun, 0)
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                return clearTimeout(marker)
            }
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker)
            }
            try {
                return cachedClearTimeout(marker)
            } catch (e) {
                try {
                    return cachedClearTimeout.call(null, marker)
                } catch (e) {
                    return cachedClearTimeout.call(this, marker)
                }
            }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue)
            } else {
                queueIndex = -1
            }
            if (queue.length) {
                drainQueue()
            }
        }
        function drainQueue() {
            if (draining) {
                return
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run()
                    }
                }
                queueIndex = -1;
                len = queue.length
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout)
        }
        process.nextTick = function(fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i]
                }
            }
            queue.push(new Item(fun,args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue)
            }
        }
        ;
        function Item(fun, array) {
            this.fun = fun;
            this.array = array
        }
        Item.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ;
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};
        function noop() {}
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
            return []
        }
        ;
        process.binding = function(name) {
            throw new Error("process.binding is not supported")
        }
        ;
        process.cwd = function() {
            return "/"
        }
        ;
        process.chdir = function(dir) {
            throw new Error("process.chdir is not supported")
        }
        ;
        process.umask = function() {
            return 0
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var immediate = __webpack_require__(53);
        var splitter = /\s+/;
        module.exports = {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb)
            }
            return this
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context)
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context)
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type]
            }
            return this
        }
        function trigger(types) {
            var type;
            var callbacks;
            var args;
            var syncFlush;
            var asyncFlush;
            if (!this._callbacks) {
                return this
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [type].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [type].concat(args));
                if (syncFlush()) {
                    immediate(asyncFlush)
                }
            }
            return this
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false
                }
                return !cancelled
            }
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0))
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var _ = __webpack_require__(0);
        var css = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            },
            ltr: {
                left: "0",
                right: "auto"
            },
            rtl: {
                left: "auto",
                right: "0"
            },
            defaultClasses: {
                root: "algolia-autocomplete",
                prefix: "aa",
                noPrefix: false,
                dropdownMenu: "dropdown-menu",
                input: "input",
                hint: "hint",
                suggestions: "suggestions",
                suggestion: "suggestion",
                cursor: "cursor",
                dataset: "dataset",
                empty: "empty"
            },
            appendTo: {
                wrapper: {
                    position: "absolute",
                    zIndex: "100",
                    display: "none"
                },
                input: {},
                inputWithNoHint: {},
                dropdown: {
                    display: "block"
                }
            }
        };
        if (_.isMsie()) {
            _.mixin(css.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            })
        }
        if (_.isMsie() && _.isMsie() <= 7) {
            _.mixin(css.input, {
                marginTop: "-1px"
            })
        }
        module.exports = css
    }
    , function(module, exports) {
        if (typeof Object.create === "function") {
            module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                })
            }
        } else {
            module.exports = function inherits(ctor, superCtor) {
                ctor.super_ = superCtor;
                var TempCtor = function() {};
                TempCtor.prototype = superCtor.prototype;
                ctor.prototype = new TempCtor;
                ctor.prototype.constructor = ctor
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        module.exports = buildSearchMethod;
        var errors = __webpack_require__(5);
        function buildSearchMethod(queryParam, url) {
            return function search(query, args, callback) {
                if (typeof query === "function" && typeof args === "object" || typeof callback === "object") {
                    throw new errors.AlgoliaSearchError("index.search usage is index.search(query, params, cb)")
                }
                if (arguments.length === 0 || typeof query === "function") {
                    callback = query;
                    query = ""
                } else if (arguments.length === 1 || typeof args === "function") {
                    callback = args;
                    args = undefined
                }
                if (typeof query === "object" && query !== null) {
                    args = query;
                    query = undefined
                } else if (query === undefined || query === null) {
                    query = ""
                }
                var params = "";
                if (query !== undefined) {
                    params += queryParam + "=" + encodeURIComponent(query)
                }
                var additionalUA;
                if (args !== undefined) {
                    if (args.additionalUA) {
                        additionalUA = args.additionalUA;
                        delete args.additionalUA
                    }
                    params = this.as._getSearchParams(args, params)
                }
                return this._search(params, url, callback, additionalUA)
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        module.exports = function omit(obj, test) {
            var keys = __webpack_require__(36);
            var foreach = __webpack_require__(2);
            var filtered = {};
            foreach(keys(obj), function doFilter(keyName) {
                if (test(keyName) !== true) {
                    filtered[keyName] = obj[keyName]
                }
            });
            return filtered
        }
    }
    , function(module, exports) {
        (function(global, factory) {
            module.exports = factory(global)
        }
        )(window, function(window) {
            var Zepto = function() {
                var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice, document = window.document, elementDisplay = {}, classCache = {}, cssNumber = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                }, fragmentRE = /^\s*<(\w+|!)[^>]*>/, singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rootNodeRE = /^(?:body|html)$/i, capitalRE = /([A-Z])/g, methodAttributes = ["val", "css", "html", "text", "data", "width", "height", "offset"], adjacencyOperators = ["after", "prepend", "before", "append"], table = document.createElement("table"), tableRow = document.createElement("tr"), containers = {
                    tr: document.createElement("tbody"),
                    tbody: table,
                    thead: table,
                    tfoot: table,
                    td: tableRow,
                    th: tableRow,
                    "*": document.createElement("div")
                }, readyRE = /complete|loaded|interactive/, simpleSelectorRE = /^[\w-]*$/, class2type = {}, toString = class2type.toString, zepto = {}, camelize, uniq, tempParent = document.createElement("div"), propMap = {
                    tabindex: "tabIndex",
                    readonly: "readOnly",
                    for: "htmlFor",
                    class: "className",
                    maxlength: "maxLength",
                    cellspacing: "cellSpacing",
                    cellpadding: "cellPadding",
                    rowspan: "rowSpan",
                    colspan: "colSpan",
                    usemap: "useMap",
                    frameborder: "frameBorder",
                    contenteditable: "contentEditable"
                }, isArray = Array.isArray || function(object) {
                    return object instanceof Array
                }
                ;
                zepto.matches = function(element, selector) {
                    if (!selector || !element || element.nodeType !== 1)
                        return false;
                    var matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
                    if (matchesSelector)
                        return matchesSelector.call(element, selector);
                    var match, parent = element.parentNode, temp = !parent;
                    if (temp)
                        (parent = tempParent).appendChild(element);
                    match = ~zepto.qsa(parent, selector).indexOf(element);
                    temp && tempParent.removeChild(element);
                    return match
                }
                ;
                function type(obj) {
                    return obj == null ? String(obj) : class2type[toString.call(obj)] || "object"
                }
                function isFunction(value) {
                    return type(value) == "function"
                }
                function isWindow(obj) {
                    return obj != null && obj == obj.window
                }
                function isDocument(obj) {
                    return obj != null && obj.nodeType == obj.DOCUMENT_NODE
                }
                function isObject(obj) {
                    return type(obj) == "object"
                }
                function isPlainObject(obj) {
                    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
                }
                function likeArray(obj) {
                    var length = !!obj && "length"in obj && obj.length
                      , type = $.type(obj);
                    return "function" != type && !isWindow(obj) && ("array" == type || length === 0 || typeof length == "number" && length > 0 && length - 1 in obj)
                }
                function compact(array) {
                    return filter.call(array, function(item) {
                        return item != null
                    })
                }
                function flatten(array) {
                    return array.length > 0 ? $.fn.concat.apply([], array) : array
                }
                camelize = function(str) {
                    return str.replace(/-+(.)?/g, function(match, chr) {
                        return chr ? chr.toUpperCase() : ""
                    })
                }
                ;
                function dasherize(str) {
                    return str.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }
                uniq = function(array) {
                    return filter.call(array, function(item, idx) {
                        return array.indexOf(item) == idx
                    })
                }
                ;
                function classRE(name) {
                    return name in classCache ? classCache[name] : classCache[name] = new RegExp("(^|\\s)" + name + "(\\s|$)")
                }
                function maybeAddPx(name, value) {
                    return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value
                }
                function defaultDisplay(nodeName) {
                    var element, display;
                    if (!elementDisplay[nodeName]) {
                        element = document.createElement(nodeName);
                        document.body.appendChild(element);
                        display = getComputedStyle(element, "").getPropertyValue("display");
                        element.parentNode.removeChild(element);
                        display == "none" && (display = "block");
                        elementDisplay[nodeName] = display
                    }
                    return elementDisplay[nodeName]
                }
                function children(element) {
                    return "children"in element ? slice.call(element.children) : $.map(element.childNodes, function(node) {
                        if (node.nodeType == 1)
                            return node
                    })
                }
                function Z(dom, selector) {
                    var i, len = dom ? dom.length : 0;
                    for (i = 0; i < len; i++)
                        this[i] = dom[i];
                    this.length = len;
                    this.selector = selector || ""
                }
                zepto.fragment = function(html, name, properties) {
                    var dom, nodes, container;
                    if (singleTagRE.test(html))
                        dom = $(document.createElement(RegExp.$1));
                    if (!dom) {
                        if (html.replace)
                            html = html.replace(tagExpanderRE, "<$1></$2>");
                        if (name === undefined)
                            name = fragmentRE.test(html) && RegExp.$1;
                        if (!(name in containers))
                            name = "*";
                        container = containers[name];
                        container.innerHTML = "" + html;
                        dom = $.each(slice.call(container.childNodes), function() {
                            container.removeChild(this)
                        })
                    }
                    if (isPlainObject(properties)) {
                        nodes = $(dom);
                        $.each(properties, function(key, value) {
                            if (methodAttributes.indexOf(key) > -1)
                                nodes[key](value);
                            else
                                nodes.attr(key, value)
                        })
                    }
                    return dom
                }
                ;
                zepto.Z = function(dom, selector) {
                    return new Z(dom,selector)
                }
                ;
                zepto.isZ = function(object) {
                    return object instanceof zepto.Z
                }
                ;
                zepto.init = function(selector, context) {
                    var dom;
                    if (!selector)
                        return zepto.Z();
                    else if (typeof selector == "string") {
                        selector = selector.trim();
                        if (selector[0] == "<" && fragmentRE.test(selector))
                            dom = zepto.fragment(selector, RegExp.$1, context),
                            selector = null;
                        else if (context !== undefined)
                            return $(context).find(selector);
                        else
                            dom = zepto.qsa(document, selector)
                    } else if (isFunction(selector))
                        return $(document).ready(selector);
                    else if (zepto.isZ(selector))
                        return selector;
                    else {
                        if (isArray(selector))
                            dom = compact(selector);
                        else if (isObject(selector))
                            dom = [selector],
                            selector = null;
                        else if (fragmentRE.test(selector))
                            dom = zepto.fragment(selector.trim(), RegExp.$1, context),
                            selector = null;
                        else if (context !== undefined)
                            return $(context).find(selector);
                        else
                            dom = zepto.qsa(document, selector)
                    }
                    return zepto.Z(dom, selector)
                }
                ;
                $ = function(selector, context) {
                    return zepto.init(selector, context)
                }
                ;
                function extend(target, source, deep) {
                    for (key in source)
                        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                            if (isPlainObject(source[key]) && !isPlainObject(target[key]))
                                target[key] = {};
                            if (isArray(source[key]) && !isArray(target[key]))
                                target[key] = [];
                            extend(target[key], source[key], deep)
                        } else if (source[key] !== undefined)
                            target[key] = source[key]
                }
                $.extend = function(target) {
                    var deep, args = slice.call(arguments, 1);
                    if (typeof target == "boolean") {
                        deep = target;
                        target = args.shift()
                    }
                    args.forEach(function(arg) {
                        extend(target, arg, deep)
                    });
                    return target
                }
                ;
                zepto.qsa = function(element, selector) {
                    var found, maybeID = selector[0] == "#", maybeClass = !maybeID && selector[0] == ".", nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, isSimple = simpleSelectorRE.test(nameOnly);
                    return element.getElementById && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [found] : [] : element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11 ? [] : slice.call(isSimple && !maybeID && element.getElementsByClassName ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector))
                }
                ;
                function filtered(nodes, selector) {
                    return selector == null ? $(nodes) : $(nodes).filter(selector)
                }
                $.contains = document.documentElement.contains ? function(parent, node) {
                    return parent !== node && parent.contains(node)
                }
                : function(parent, node) {
                    while (node && (node = node.parentNode))
                        if (node === parent)
                            return true;
                    return false
                }
                ;
                function funcArg(context, arg, idx, payload) {
                    return isFunction(arg) ? arg.call(context, idx, payload) : arg
                }
                function setAttribute(node, name, value) {
                    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
                }
                function className(node, value) {
                    var klass = node.className || ""
                      , svg = klass && klass.baseVal !== undefined;
                    if (value === undefined)
                        return svg ? klass.baseVal : klass;
                    svg ? klass.baseVal = value : node.className = value
                }
                function deserializeValue(value) {
                    try {
                        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : +value + "" == value ? +value : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value
                    } catch (e) {
                        return value
                    }
                }
                $.type = type;
                $.isFunction = isFunction;
                $.isWindow = isWindow;
                $.isArray = isArray;
                $.isPlainObject = isPlainObject;
                $.isEmptyObject = function(obj) {
                    var name;
                    for (name in obj)
                        return false;
                    return true
                }
                ;
                $.isNumeric = function(val) {
                    var num = Number(val)
                      , type = typeof val;
                    return val != null && type != "boolean" && (type != "string" || val.length) && !isNaN(num) && isFinite(num) || false
                }
                ;
                $.inArray = function(elem, array, i) {
                    return emptyArray.indexOf.call(array, elem, i)
                }
                ;
                $.camelCase = camelize;
                $.trim = function(str) {
                    return str == null ? "" : String.prototype.trim.call(str)
                }
                ;
                $.uuid = 0;
                $.support = {};
                $.expr = {};
                $.noop = function() {}
                ;
                $.map = function(elements, callback) {
                    var value, values = [], i, key;
                    if (likeArray(elements))
                        for (i = 0; i < elements.length; i++) {
                            value = callback(elements[i], i);
                            if (value != null)
                                values.push(value)
                        }
                    else
                        for (key in elements) {
                            value = callback(elements[key], key);
                            if (value != null)
                                values.push(value)
                        }
                    return flatten(values)
                }
                ;
                $.each = function(elements, callback) {
                    var i, key;
                    if (likeArray(elements)) {
                        for (i = 0; i < elements.length; i++)
                            if (callback.call(elements[i], i, elements[i]) === false)
                                return elements
                    } else {
                        for (key in elements)
                            if (callback.call(elements[key], key, elements[key]) === false)
                                return elements
                    }
                    return elements
                }
                ;
                $.grep = function(elements, callback) {
                    return filter.call(elements, callback)
                }
                ;
                if (window.JSON)
                    $.parseJSON = JSON.parse;
                $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase()
                });
                $.fn = {
                    constructor: zepto.Z,
                    length: 0,
                    forEach: emptyArray.forEach,
                    reduce: emptyArray.reduce,
                    push: emptyArray.push,
                    sort: emptyArray.sort,
                    splice: emptyArray.splice,
                    indexOf: emptyArray.indexOf,
                    concat: function() {
                        var i, value, args = [];
                        for (i = 0; i < arguments.length; i++) {
                            value = arguments[i];
                            args[i] = zepto.isZ(value) ? value.toArray() : value
                        }
                        return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
                    },
                    map: function(fn) {
                        return $($.map(this, function(el, i) {
                            return fn.call(el, i, el)
                        }))
                    },
                    slice: function() {
                        return $(slice.apply(this, arguments))
                    },
                    ready: function(callback) {
                        if (readyRE.test(document.readyState) && document.body)
                            callback($);
                        else
                            document.addEventListener("DOMContentLoaded", function() {
                                callback($)
                            }, false);
                        return this
                    },
                    get: function(idx) {
                        return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
                    },
                    toArray: function() {
                        return this.get()
                    },
                    size: function() {
                        return this.length
                    },
                    remove: function() {
                        return this.each(function() {
                            if (this.parentNode != null)
                                this.parentNode.removeChild(this)
                        })
                    },
                    each: function(callback) {
                        emptyArray.every.call(this, function(el, idx) {
                            return callback.call(el, idx, el) !== false
                        });
                        return this
                    },
                    filter: function(selector) {
                        if (isFunction(selector))
                            return this.not(this.not(selector));
                        return $(filter.call(this, function(element) {
                            return zepto.matches(element, selector)
                        }))
                    },
                    add: function(selector, context) {
                        return $(uniq(this.concat($(selector, context))))
                    },
                    is: function(selector) {
                        return this.length > 0 && zepto.matches(this[0], selector)
                    },
                    not: function(selector) {
                        var nodes = [];
                        if (isFunction(selector) && selector.call !== undefined)
                            this.each(function(idx) {
                                if (!selector.call(this, idx))
                                    nodes.push(this)
                            });
                        else {
                            var excludes = typeof selector == "string" ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? slice.call(selector) : $(selector);
                            this.forEach(function(el) {
                                if (excludes.indexOf(el) < 0)
                                    nodes.push(el)
                            })
                        }
                        return $(nodes)
                    },
                    has: function(selector) {
                        return this.filter(function() {
                            return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size()
                        })
                    },
                    eq: function(idx) {
                        return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1)
                    },
                    first: function() {
                        var el = this[0];
                        return el && !isObject(el) ? el : $(el)
                    },
                    last: function() {
                        var el = this[this.length - 1];
                        return el && !isObject(el) ? el : $(el)
                    },
                    find: function(selector) {
                        var result, $this = this;
                        if (!selector)
                            result = $();
                        else if (typeof selector == "object")
                            result = $(selector).filter(function() {
                                var node = this;
                                return emptyArray.some.call($this, function(parent) {
                                    return $.contains(parent, node)
                                })
                            });
                        else if (this.length == 1)
                            result = $(zepto.qsa(this[0], selector));
                        else
                            result = this.map(function() {
                                return zepto.qsa(this, selector)
                            });
                        return result
                    },
                    closest: function(selector, context) {
                        var nodes = []
                          , collection = typeof selector == "object" && $(selector);
                        this.each(function(_, node) {
                            while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
                                node = node !== context && !isDocument(node) && node.parentNode;
                            if (node && nodes.indexOf(node) < 0)
                                nodes.push(node)
                        });
                        return $(nodes)
                    },
                    parents: function(selector) {
                        var ancestors = []
                          , nodes = this;
                        while (nodes.length > 0)
                            nodes = $.map(nodes, function(node) {
                                if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
                                    ancestors.push(node);
                                    return node
                                }
                            });
                        return filtered(ancestors, selector)
                    },
                    parent: function(selector) {
                        return filtered(uniq(this.pluck("parentNode")), selector)
                    },
                    children: function(selector) {
                        return filtered(this.map(function() {
                            return children(this)
                        }), selector)
                    },
                    contents: function() {
                        return this.map(function() {
                            return this.contentDocument || slice.call(this.childNodes)
                        })
                    },
                    siblings: function(selector) {
                        return filtered(this.map(function(i, el) {
                            return filter.call(children(el.parentNode), function(child) {
                                return child !== el
                            })
                        }), selector)
                    },
                    empty: function() {
                        return this.each(function() {
                            this.innerHTML = ""
                        })
                    },
                    pluck: function(property) {
                        return $.map(this, function(el) {
                            return el[property]
                        })
                    },
                    show: function() {
                        return this.each(function() {
                            this.style.display == "none" && (this.style.display = "");
                            if (getComputedStyle(this, "").getPropertyValue("display") == "none")
                                this.style.display = defaultDisplay(this.nodeName)
                        })
                    },
                    replaceWith: function(newContent) {
                        return this.before(newContent).remove()
                    },
                    wrap: function(structure) {
                        var func = isFunction(structure);
                        if (this[0] && !func)
                            var dom = $(structure).get(0)
                              , clone = dom.parentNode || this.length > 1;
                        return this.each(function(index) {
                            $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom)
                        })
                    },
                    wrapAll: function(structure) {
                        if (this[0]) {
                            $(this[0]).before(structure = $(structure));
                            var children;
                            while ((children = structure.children()).length)
                                structure = children.first();
                            $(structure).append(this)
                        }
                        return this
                    },
                    wrapInner: function(structure) {
                        var func = isFunction(structure);
                        return this.each(function(index) {
                            var self = $(this)
                              , contents = self.contents()
                              , dom = func ? structure.call(this, index) : structure;
                            contents.length ? contents.wrapAll(dom) : self.append(dom)
                        })
                    },
                    unwrap: function() {
                        this.parent().each(function() {
                            $(this).replaceWith($(this).children())
                        });
                        return this
                    },
                    clone: function() {
                        return this.map(function() {
                            return this.cloneNode(true)
                        })
                    },
                    hide: function() {
                        return this.css("display", "none")
                    },
                    toggle: function(setting) {
                        return this.each(function() {
                            var el = $(this);
                            (setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
                        })
                    },
                    prev: function(selector) {
                        return $(this.pluck("previousElementSibling")).filter(selector || "*")
                    },
                    next: function(selector) {
                        return $(this.pluck("nextElementSibling")).filter(selector || "*")
                    },
                    html: function(html) {
                        return 0 in arguments ? this.each(function(idx) {
                            var originHtml = this.innerHTML;
                            $(this).empty().append(funcArg(this, html, idx, originHtml))
                        }) : 0 in this ? this[0].innerHTML : null
                    },
                    text: function(text) {
                        return 0 in arguments ? this.each(function(idx) {
                            var newText = funcArg(this, text, idx, this.textContent);
                            this.textContent = newText == null ? "" : "" + newText
                        }) : 0 in this ? this.pluck("textContent").join("") : null
                    },
                    attr: function(name, value) {
                        var result;
                        return typeof name == "string" && !(1 in arguments) ? 0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined : this.each(function(idx) {
                            if (this.nodeType !== 1)
                                return;
                            if (isObject(name))
                                for (key in name)
                                    setAttribute(this, key, name[key]);
                            else
                                setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
                        })
                    },
                    removeAttr: function(name) {
                        return this.each(function() {
                            this.nodeType === 1 && name.split(" ").forEach(function(attribute) {
                                setAttribute(this, attribute)
                            }, this)
                        })
                    },
                    prop: function(name, value) {
                        name = propMap[name] || name;
                        return 1 in arguments ? this.each(function(idx) {
                            this[name] = funcArg(this, value, idx, this[name])
                        }) : this[0] && this[0][name]
                    },
                    removeProp: function(name) {
                        name = propMap[name] || name;
                        return this.each(function() {
                            delete this[name]
                        })
                    },
                    data: function(name, value) {
                        var attrName = "data-" + name.replace(capitalRE, "-$1").toLowerCase();
                        var data = 1 in arguments ? this.attr(attrName, value) : this.attr(attrName);
                        return data !== null ? deserializeValue(data) : undefined
                    },
                    val: function(value) {
                        if (0 in arguments) {
                            if (value == null)
                                value = "";
                            return this.each(function(idx) {
                                this.value = funcArg(this, value, idx, this.value)
                            })
                        } else {
                            return this[0] && (this[0].multiple ? $(this[0]).find("option").filter(function() {
                                return this.selected
                            }).pluck("value") : this[0].value)
                        }
                    },
                    offset: function(coordinates) {
                        if (coordinates)
                            return this.each(function(index) {
                                var $this = $(this)
                                  , coords = funcArg(this, coordinates, index, $this.offset())
                                  , parentOffset = $this.offsetParent().offset()
                                  , props = {
                                    top: coords.top - parentOffset.top,
                                    left: coords.left - parentOffset.left
                                };
                                if ($this.css("position") == "static")
                                    props["position"] = "relative";
                                $this.css(props)
                            });
                        if (!this.length)
                            return null;
                        if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))
                            return {
                                top: 0,
                                left: 0
                            };
                        var obj = this[0].getBoundingClientRect();
                        return {
                            left: obj.left + window.pageXOffset,
                            top: obj.top + window.pageYOffset,
                            width: Math.round(obj.width),
                            height: Math.round(obj.height)
                        }
                    },
                    css: function(property, value) {
                        if (arguments.length < 2) {
                            var element = this[0];
                            if (typeof property == "string") {
                                if (!element)
                                    return;
                                return element.style[camelize(property)] || getComputedStyle(element, "").getPropertyValue(property)
                            } else if (isArray(property)) {
                                if (!element)
                                    return;
                                var props = {};
                                var computedStyle = getComputedStyle(element, "");
                                $.each(property, function(_, prop) {
                                    props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop)
                                });
                                return props
                            }
                        }
                        var css = "";
                        if (type(property) == "string") {
                            if (!value && value !== 0)
                                this.each(function() {
                                    this.style.removeProperty(dasherize(property))
                                });
                            else
                                css = dasherize(property) + ":" + maybeAddPx(property, value)
                        } else {
                            for (key in property)
                                if (!property[key] && property[key] !== 0)
                                    this.each(function() {
                                        this.style.removeProperty(dasherize(key))
                                    });
                                else
                                    css += dasherize(key) + ":" + maybeAddPx(key, property[key]) + ";"
                        }
                        return this.each(function() {
                            this.style.cssText += ";" + css
                        })
                    },
                    index: function(element) {
                        return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
                    },
                    hasClass: function(name) {
                        if (!name)
                            return false;
                        return emptyArray.some.call(this, function(el) {
                            return this.test(className(el))
                        }, classRE(name))
                    },
                    addClass: function(name) {
                        if (!name)
                            return this;
                        return this.each(function(idx) {
                            if (!("className"in this))
                                return;
                            classList = [];
                            var cls = className(this)
                              , newName = funcArg(this, name, idx, cls);
                            newName.split(/\s+/g).forEach(function(klass) {
                                if (!$(this).hasClass(klass))
                                    classList.push(klass)
                            }, this);
                            classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
                        })
                    },
                    removeClass: function(name) {
                        return this.each(function(idx) {
                            if (!("className"in this))
                                return;
                            if (name === undefined)
                                return className(this, "");
                            classList = className(this);
                            funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass) {
                                classList = classList.replace(classRE(klass), " ")
                            });
                            className(this, classList.trim())
                        })
                    },
                    toggleClass: function(name, when) {
                        if (!name)
                            return this;
                        return this.each(function(idx) {
                            var $this = $(this)
                              , names = funcArg(this, name, idx, className(this));
                            names.split(/\s+/g).forEach(function(klass) {
                                (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass)
                            })
                        })
                    },
                    scrollTop: function(value) {
                        if (!this.length)
                            return;
                        var hasScrollTop = "scrollTop"in this[0];
                        if (value === undefined)
                            return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
                        return this.each(hasScrollTop ? function() {
                            this.scrollTop = value
                        }
                        : function() {
                            this.scrollTo(this.scrollX, value)
                        }
                        )
                    },
                    scrollLeft: function(value) {
                        if (!this.length)
                            return;
                        var hasScrollLeft = "scrollLeft"in this[0];
                        if (value === undefined)
                            return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
                        return this.each(hasScrollLeft ? function() {
                            this.scrollLeft = value
                        }
                        : function() {
                            this.scrollTo(value, this.scrollY)
                        }
                        )
                    },
                    position: function() {
                        if (!this.length)
                            return;
                        var elem = this[0]
                          , offsetParent = this.offsetParent()
                          , offset = this.offset()
                          , parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : offsetParent.offset();
                        offset.top -= parseFloat($(elem).css("margin-top")) || 0;
                        offset.left -= parseFloat($(elem).css("margin-left")) || 0;
                        parentOffset.top += parseFloat($(offsetParent[0]).css("border-top-width")) || 0;
                        parentOffset.left += parseFloat($(offsetParent[0]).css("border-left-width")) || 0;
                        return {
                            top: offset.top - parentOffset.top,
                            left: offset.left - parentOffset.left
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            var parent = this.offsetParent || document.body;
                            while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
                                parent = parent.offsetParent;
                            return parent
                        })
                    }
                };
                $.fn.detach = $.fn.remove;
                ["width", "height"].forEach(function(dimension) {
                    var dimensionProperty = dimension.replace(/./, function(m) {
                        return m[0].toUpperCase()
                    });
                    $.fn[dimension] = function(value) {
                        var offset, el = this[0];
                        if (value === undefined)
                            return isWindow(el) ? el["inner" + dimensionProperty] : isDocument(el) ? el.documentElement["scroll" + dimensionProperty] : (offset = this.offset()) && offset[dimension];
                        else
                            return this.each(function(idx) {
                                el = $(this);
                                el.css(dimension, funcArg(this, value, idx, el[dimension]()))
                            })
                    }
                });
                function traverseNode(node, fun) {
                    fun(node);
                    for (var i = 0, len = node.childNodes.length; i < len; i++)
                        traverseNode(node.childNodes[i], fun)
                }
                adjacencyOperators.forEach(function(operator, operatorIndex) {
                    var inside = operatorIndex % 2;
                    $.fn[operator] = function() {
                        var argType, nodes = $.map(arguments, function(arg) {
                            var arr = [];
                            argType = type(arg);
                            if (argType == "array") {
                                arg.forEach(function(el) {
                                    if (el.nodeType !== undefined)
                                        return arr.push(el);
                                    else if ($.zepto.isZ(el))
                                        return arr = arr.concat(el.get());
                                    arr = arr.concat(zepto.fragment(el))
                                });
                                return arr
                            }
                            return argType == "object" || arg == null ? arg : zepto.fragment(arg)
                        }), parent, copyByClone = this.length > 1;
                        if (nodes.length < 1)
                            return this;
                        return this.each(function(_, target) {
                            parent = inside ? target : target.parentNode;
                            target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;
                            var parentInDocument = $.contains(document.documentElement, parent);
                            nodes.forEach(function(node) {
                                if (copyByClone)
                                    node = node.cloneNode(true);
                                else if (!parent)
                                    return $(node).remove();
                                parent.insertBefore(node, target);
                                if (parentInDocument)
                                    traverseNode(node, function(el) {
                                        if (el.nodeName != null && el.nodeName.toUpperCase() === "SCRIPT" && (!el.type || el.type === "text/javascript") && !el.src) {
                                            var target = el.ownerDocument ? el.ownerDocument.defaultView : window;
                                            target["eval"].call(target, el.innerHTML)
                                        }
                                    })
                            })
                        })
                    }
                    ;
                    $.fn[inside ? operator + "To" : "insert" + (operatorIndex ? "Before" : "After")] = function(html) {
                        $(html)[operator](this);
                        return this
                    }
                });
                zepto.Z.prototype = Z.prototype = $.fn;
                zepto.uniq = uniq;
                zepto.deserializeValue = deserializeValue;
                $.zepto = zepto;
                return $
            }();
            (function($) {
                var _zid = 1, undefined, slice = Array.prototype.slice, isFunction = $.isFunction, isString = function(obj) {
                    return typeof obj == "string"
                }, handlers = {}, specialEvents = {}, focusinSupported = "onfocusin"in window, focus = {
                    focus: "focusin",
                    blur: "focusout"
                }, hover = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };
                specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = "MouseEvents";
                function zid(element) {
                    return element._zid || (element._zid = _zid++)
                }
                function findHandlers(element, event, fn, selector) {
                    event = parse(event);
                    if (event.ns)
                        var matcher = matcherFor(event.ns);
                    return (handlers[zid(element)] || []).filter(function(handler) {
                        return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector)
                    })
                }
                function parse(event) {
                    var parts = ("" + event).split(".");
                    return {
                        e: parts[0],
                        ns: parts.slice(1).sort().join(" ")
                    }
                }
                function matcherFor(ns) {
                    return new RegExp("(?:^| )" + ns.replace(" ", " .* ?") + "(?: |$)")
                }
                function eventCapture(handler, captureSetting) {
                    return handler.del && (!focusinSupported && handler.e in focus) || !!captureSetting
                }
                function realEvent(type) {
                    return hover[type] || focusinSupported && focus[type] || type
                }
                function add(element, events, fn, data, selector, delegator, capture) {
                    var id = zid(element)
                      , set = handlers[id] || (handlers[id] = []);
                    events.split(/\s/).forEach(function(event) {
                        if (event == "ready")
                            return $(document).ready(fn);
                        var handler = parse(event);
                        handler.fn = fn;
                        handler.sel = selector;
                        if (handler.e in hover)
                            fn = function(e) {
                                var related = e.relatedTarget;
                                if (!related || related !== this && !$.contains(this, related))
                                    return handler.fn.apply(this, arguments)
                            }
                            ;
                        handler.del = delegator;
                        var callback = delegator || fn;
                        handler.proxy = function(e) {
                            e = compatible(e);
                            if (e.isImmediatePropagationStopped())
                                return;
                            try {
                                var dataPropDescriptor = Object.getOwnPropertyDescriptor(e, "data");
                                if (!dataPropDescriptor || dataPropDescriptor.writable)
                                    e.data = data
                            } catch (e) {}
                            var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args));
                            if (result === false)
                                e.preventDefault(),
                                e.stopPropagation();
                            return result
                        }
                        ;
                        handler.i = set.length;
                        set.push(handler);
                        if ("addEventListener"in element)
                            element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
                    })
                }
                function remove(element, events, fn, selector, capture) {
                    var id = zid(element);
                    (events || "").split(/\s/).forEach(function(event) {
                        findHandlers(element, event, fn, selector).forEach(function(handler) {
                            delete handlers[id][handler.i];
                            if ("removeEventListener"in element)
                                element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
                        })
                    })
                }
                $.event = {
                    add: add,
                    remove: remove
                };
                $.proxy = function(fn, context) {
                    var args = 2 in arguments && slice.call(arguments, 2);
                    if (isFunction(fn)) {
                        var proxyFn = function() {
                            return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments)
                        };
                        proxyFn._zid = zid(fn);
                        return proxyFn
                    } else if (isString(context)) {
                        if (args) {
                            args.unshift(fn[context], fn);
                            return $.proxy.apply(null, args)
                        } else {
                            return $.proxy(fn[context], fn)
                        }
                    } else {
                        throw new TypeError("expected function")
                    }
                }
                ;
                $.fn.bind = function(event, data, callback) {
                    return this.on(event, data, callback)
                }
                ;
                $.fn.unbind = function(event, callback) {
                    return this.off(event, callback)
                }
                ;
                $.fn.one = function(event, selector, data, callback) {
                    return this.on(event, selector, data, callback, 1)
                }
                ;
                var returnTrue = function() {
                    return true
                }
                  , returnFalse = function() {
                    return false
                }
                  , ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/
                  , eventMethods = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };
                function compatible(event, source) {
                    if (source || !event.isDefaultPrevented) {
                        source || (source = event);
                        $.each(eventMethods, function(name, predicate) {
                            var sourceMethod = source[name];
                            event[name] = function() {
                                this[predicate] = returnTrue;
                                return sourceMethod && sourceMethod.apply(source, arguments)
                            }
                            ;
                            event[predicate] = returnFalse
                        });
                        event.timeStamp || (event.timeStamp = Date.now());
                        if (source.defaultPrevented !== undefined ? source.defaultPrevented : "returnValue"in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault())
                            event.isDefaultPrevented = returnTrue
                    }
                    return event
                }
                function createProxy(event) {
                    var key, proxy = {
                        originalEvent: event
                    };
                    for (key in event)
                        if (!ignoreProperties.test(key) && event[key] !== undefined)
                            proxy[key] = event[key];
                    return compatible(proxy, event)
                }
                $.fn.delegate = function(selector, event, callback) {
                    return this.on(event, selector, callback)
                }
                ;
                $.fn.undelegate = function(selector, event, callback) {
                    return this.off(event, selector, callback)
                }
                ;
                $.fn.live = function(event, callback) {
                    $(document.body).delegate(this.selector, event, callback);
                    return this
                }
                ;
                $.fn.die = function(event, callback) {
                    $(document.body).undelegate(this.selector, event, callback);
                    return this
                }
                ;
                $.fn.on = function(event, selector, data, callback, one) {
                    var autoRemove, delegator, $this = this;
                    if (event && !isString(event)) {
                        $.each(event, function(type, fn) {
                            $this.on(type, selector, data, fn, one)
                        });
                        return $this
                    }
                    if (!isString(selector) && !isFunction(callback) && callback !== false)
                        callback = data,
                        data = selector,
                        selector = undefined;
                    if (callback === undefined || data === false)
                        callback = data,
                        data = undefined;
                    if (callback === false)
                        callback = returnFalse;
                    return $this.each(function(_, element) {
                        if (one)
                            autoRemove = function(e) {
                                remove(element, e.type, callback);
                                return callback.apply(this, arguments)
                            }
                            ;
                        if (selector)
                            delegator = function(e) {
                                var evt, match = $(e.target).closest(selector, element).get(0);
                                if (match && match !== element) {
                                    evt = $.extend(createProxy(e), {
                                        currentTarget: match,
                                        liveFired: element
                                    });
                                    return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
                                }
                            }
                            ;
                        add(element, event, callback, data, selector, delegator || autoRemove)
                    })
                }
                ;
                $.fn.off = function(event, selector, callback) {
                    var $this = this;
                    if (event && !isString(event)) {
                        $.each(event, function(type, fn) {
                            $this.off(type, selector, fn)
                        });
                        return $this
                    }
                    if (!isString(selector) && !isFunction(callback) && callback !== false)
                        callback = selector,
                        selector = undefined;
                    if (callback === false)
                        callback = returnFalse;
                    return $this.each(function() {
                        remove(this, event, callback, selector)
                    })
                }
                ;
                $.fn.trigger = function(event, args) {
                    event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
                    event._args = args;
                    return this.each(function() {
                        if (event.type in focus && typeof this[event.type] == "function")
                            this[event.type]();
                        else if ("dispatchEvent"in this)
                            this.dispatchEvent(event);
                        else
                            $(this).triggerHandler(event, args)
                    })
                }
                ;
                $.fn.triggerHandler = function(event, args) {
                    var e, result;
                    this.each(function(i, element) {
                        e = createProxy(isString(event) ? $.Event(event) : event);
                        e._args = args;
                        e.target = element;
                        $.each(findHandlers(element, event.type || event), function(i, handler) {
                            result = handler.proxy(e);
                            if (e.isImmediatePropagationStopped())
                                return false
                        })
                    });
                    return result
                }
                ;
                ("focusin focusout focus blur load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select keydown keypress keyup error").split(" ").forEach(function(event) {
                    $.fn[event] = function(callback) {
                        return 0 in arguments ? this.bind(event, callback) : this.trigger(event)
                    }
                });
                $.Event = function(type, props) {
                    if (!isString(type))
                        props = type,
                        type = props.type;
                    var event = document.createEvent(specialEvents[type] || "Events")
                      , bubbles = true;
                    if (props)
                        for (var name in props)
                            name == "bubbles" ? bubbles = !!props[name] : event[name] = props[name];
                    event.initEvent(type, bubbles, true);
                    return compatible(event)
                }
            }
            )(Zepto);
            (function($) {
                var cache = [], timeout;
                $.fn.remove = function() {
                    return this.each(function() {
                        if (this.parentNode) {
                            if (this.tagName === "IMG") {
                                cache.push(this);
                                this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                                if (timeout)
                                    clearTimeout(timeout);
                                timeout = setTimeout(function() {
                                    cache = []
                                }, 6e4)
                            }
                            this.parentNode.removeChild(this)
                        }
                    })
                }
            }
            )(Zepto);
            (function($) {
                var data = {}
                  , dataAttr = $.fn.data
                  , camelize = $.camelCase
                  , exp = $.expando = "Zepto" + +new Date
                  , emptyArray = [];
                function getData(node, name) {
                    var id = node[exp]
                      , store = id && data[id];
                    if (name === undefined)
                        return store || setData(node);
                    else {
                        if (store) {
                            if (name in store)
                                return store[name];
                            var camelName = camelize(name);
                            if (camelName in store)
                                return store[camelName]
                        }
                        return dataAttr.call($(node), name)
                    }
                }
                function setData(node, name, value) {
                    var id = node[exp] || (node[exp] = ++$.uuid)
                      , store = data[id] || (data[id] = attributeData(node));
                    if (name !== undefined)
                        store[camelize(name)] = value;
                    return store
                }
                function attributeData(node) {
                    var store = {};
                    $.each(node.attributes || emptyArray, function(i, attr) {
                        if (attr.name.indexOf("data-") == 0)
                            store[camelize(attr.name.replace("data-", ""))] = $.zepto.deserializeValue(attr.value)
                    });
                    return store
                }
                $.fn.data = function(name, value) {
                    return value === undefined ? $.isPlainObject(name) ? this.each(function(i, node) {
                        $.each(name, function(key, value) {
                            setData(node, key, value)
                        })
                    }) : 0 in this ? getData(this[0], name) : undefined : this.each(function() {
                        setData(this, name, value)
                    })
                }
                ;
                $.data = function(elem, name, value) {
                    return $(elem).data(name, value)
                }
                ;
                $.hasData = function(elem) {
                    var id = elem[exp]
                      , store = id && data[id];
                    return store ? !$.isEmptyObject(store) : false
                }
                ;
                $.fn.removeData = function(names) {
                    if (typeof names == "string")
                        names = names.split(/\s+/);
                    return this.each(function() {
                        var id = this[exp]
                          , store = id && data[id];
                        if (store)
                            $.each(names || store, function(key) {
                                delete store[names ? camelize(this) : key]
                            })
                    })
                }
                ;
                ["remove", "empty"].forEach(function(methodName) {
                    var origFn = $.fn[methodName];
                    $.fn[methodName] = function() {
                        var elements = this.find("*");
                        if (methodName === "remove")
                            elements = elements.add(this);
                        elements.removeData();
                        return origFn.call(this)
                    }
                })
            }
            )(Zepto);
            return Zepto
        })
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var namespace = "autocomplete:";
        var _ = __webpack_require__(0);
        var DOM = __webpack_require__(1);
        function EventBus(o) {
            if (!o || !o.el) {
                _.error("EventBus initialized without el")
            }
            this.$el = DOM.element(o.el)
        }
        _.mixin(EventBus.prototype, {
            trigger: function(type, suggestion, dataset, context) {
                var event = _.Event(namespace + type);
                this.$el.trigger(event, [suggestion, dataset, context]);
                return event
            }
        });
        module.exports = EventBus
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            wrapper: '<span class="%ROOT%"></span>',
            dropdown: '<span class="%PREFIX%%DROPDOWN_MENU%"></span>',
            dataset: '<div class="%PREFIX%%DATASET%-%CLASS%"></div>',
            suggestions: '<span class="%PREFIX%%SUGGESTIONS%"></span>',
            suggestion: '<div class="%PREFIX%%SUGGESTION%"></div>'
        }
    }
    , function(module, exports) {
        module.exports = "0.36.0"
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = function parseAlgoliaClientVersion(agent) {
            var parsed = agent.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);
            if (parsed)
                return [parsed[1], parsed[2], parsed[3]];
            return undefined
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _zepto = __webpack_require__(15);
        var _zepto2 = _interopRequireDefault(_zepto);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        exports.default = _zepto2.default
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = "2.6.3"
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var _main = __webpack_require__(23);
        var _main2 = _interopRequireDefault(_main);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        module.exports = _main2.default
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _toFactory = __webpack_require__(24);
        var _toFactory2 = _interopRequireDefault(_toFactory);
        var _DocSearch = __webpack_require__(25);
        var _DocSearch2 = _interopRequireDefault(_DocSearch);
        var _version = __webpack_require__(21);
        var _version2 = _interopRequireDefault(_version);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var docsearch = (0,
        _toFactory2.default)(_DocSearch2.default);
        docsearch.version = _version2.default;
        exports.default = docsearch
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var _bind = Function.prototype.bind;
        function toFactory(Class) {
            var Factory = function Factory() {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key]
                }
                return new (_bind.apply(Class, [null].concat(args)))
            };
            Factory.__proto__ = Class;
            Factory.prototype = Class.prototype;
            return Factory
        }
        module.exports = toFactory
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        }
        ;
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value"in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor)
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor
            }
        }();
        var _hogan = __webpack_require__(26);
        var _hogan2 = _interopRequireDefault(_hogan);
        var _lite = __webpack_require__(29);
        var _lite2 = _interopRequireDefault(_lite);
        var _autocomplete = __webpack_require__(49);
        var _autocomplete2 = _interopRequireDefault(_autocomplete);
        var _templates = __webpack_require__(64);
        var _templates2 = _interopRequireDefault(_templates);
        var _utils = __webpack_require__(65);
        var _utils2 = _interopRequireDefault(_utils);
        var _version = __webpack_require__(21);
        var _version2 = _interopRequireDefault(_version);
        var _zepto = __webpack_require__(20);
        var _zepto2 = _interopRequireDefault(_zepto);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var usage = "Usage:\n  documentationSearch({\n  apiKey,\n  indexName,\n  inputSelector,\n  [ appId ],\n  [ algoliaOptions.{hitsPerPage} ]\n  [ autocompleteOptions.{hint,debug} ]\n})";
        var DocSearch = function() {
            function DocSearch(_ref) {
                var apiKey = _ref.apiKey
                  , indexName = _ref.indexName
                  , inputSelector = _ref.inputSelector
                  , _ref$appId = _ref.appId
                  , appId = _ref$appId === undefined ? "BH4D9OD16A" : _ref$appId
                  , _ref$debug = _ref.debug
                  , debug = _ref$debug === undefined ? false : _ref$debug
                  , _ref$algoliaOptions = _ref.algoliaOptions
                  , algoliaOptions = _ref$algoliaOptions === undefined ? {} : _ref$algoliaOptions
                  , _ref$queryDataCallbac = _ref.queryDataCallback
                  , queryDataCallback = _ref$queryDataCallbac === undefined ? null : _ref$queryDataCallbac
                  , _ref$autocompleteOpti = _ref.autocompleteOptions
                  , autocompleteOptions = _ref$autocompleteOpti === undefined ? {
                    debug: false,
                    hint: false,
                    autoselect: true
                } : _ref$autocompleteOpti
                  , _ref$transformData = _ref.transformData
                  , transformData = _ref$transformData === undefined ? false : _ref$transformData
                  , _ref$queryHook = _ref.queryHook
                  , queryHook = _ref$queryHook === undefined ? false : _ref$queryHook
                  , _ref$handleSelected = _ref.handleSelected
                  , handleSelected = _ref$handleSelected === undefined ? false : _ref$handleSelected
                  , _ref$enhancedSearchIn = _ref.enhancedSearchInput
                  , enhancedSearchInput = _ref$enhancedSearchIn === undefined ? false : _ref$enhancedSearchIn
                  , _ref$layout = _ref.layout
                  , layout = _ref$layout === undefined ? "collumns" : _ref$layout;
                _classCallCheck(this, DocSearch);
                DocSearch.checkArguments({
                    apiKey: apiKey,
                    indexName: indexName,
                    inputSelector: inputSelector,
                    debug: debug,
                    algoliaOptions: algoliaOptions,
                    queryDataCallback: queryDataCallback,
                    autocompleteOptions: autocompleteOptions,
                    transformData: transformData,
                    queryHook: queryHook,
                    handleSelected: handleSelected,
                    enhancedSearchInput: enhancedSearchInput,
                    layout: layout
                });
                this.apiKey = apiKey;
                this.appId = appId;
                this.indexName = indexName;
                this.input = DocSearch.getInputFromSelector(inputSelector);
                this.algoliaOptions = _extends({
                    hitsPerPage: 5
                }, algoliaOptions);
                this.queryDataCallback = queryDataCallback || null;
                var autocompleteOptionsDebug = autocompleteOptions && autocompleteOptions.debug ? autocompleteOptions.debug : false;
                autocompleteOptions.debug = debug || autocompleteOptionsDebug;
                this.autocompleteOptions = autocompleteOptions;
                this.autocompleteOptions.cssClasses = this.autocompleteOptions.cssClasses || {};
                this.autocompleteOptions.cssClasses.prefix = this.autocompleteOptions.cssClasses.prefix || "ds";
                var inputAriaLabel = this.input && typeof this.input.attr === "function" && this.input.attr("aria-label");
                this.autocompleteOptions.ariaLabel = this.autocompleteOptions.ariaLabel || inputAriaLabel || "search input";
                this.isSimpleLayout = layout === "simple";
                this.client = (0,
                _lite2.default)(this.appId, this.apiKey);
                this.client.addAlgoliaAgent("docsearch.js " + _version2.default);
                if (enhancedSearchInput) {
                    this.input = DocSearch.injectSearchBox(this.input)
                }
                this.autocomplete = (0,
                _autocomplete2.default)(this.input, autocompleteOptions, [{
                    source: this.getAutocompleteSource(transformData, queryHook),
                    templates: {
                        suggestion: DocSearch.getSuggestionTemplate(this.isSimpleLayout),
                        footer: _templates2.default.footer,
                        empty: DocSearch.getEmptyTemplate()
                    }
                }]);
                var customHandleSelected = handleSelected;
                this.handleSelected = customHandleSelected || this.handleSelected;
                if (customHandleSelected) {
                    (0,
                    _zepto2.default)(".algolia-autocomplete").on("click", ".ds-suggestions a", function(event) {
                        event.preventDefault()
                    })
                }
                this.autocomplete.on("autocomplete:selected", this.handleSelected.bind(null, this.autocomplete.autocomplete));
                this.autocomplete.on("autocomplete:shown", this.handleShown.bind(null, this.input));
                if (enhancedSearchInput) {
                    DocSearch.bindSearchBoxEvent()
                }
            }
            _createClass(DocSearch, [{
                key: "getAutocompleteSource",
                value: function getAutocompleteSource(transformData, queryHook) {
                    var _this = this;
                    return function(query, callback) {
                        if (queryHook) {
                            query = queryHook(query) || query
                        }
                        _this.client.search([{
                            indexName: _this.indexName,
                            query: query,
                            params: _this.algoliaOptions
                        }]).then(function(data) {
                            if (_this.queryDataCallback && typeof _this.queryDataCallback == "function") {
                                _this.queryDataCallback(data)
                            }
                            var hits = data.results[0].hits;
                            if (transformData) {
                                hits = transformData(hits) || hits
                            }
                            callback(DocSearch.formatHits(hits))
                        })
                    }
                }
            }, {
                key: "handleSelected",
                value: function handleSelected(input, event, suggestion, datasetNumber) {
                    var context = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    if (context.selectionMethod === "click") {
                        return
                    }
                    input.setVal("");
                    window.location.assign(suggestion.url)
                }
            }, {
                key: "handleShown",
                value: function handleShown(input) {
                    var middleOfInput = input.offset().left + input.width() / 2;
                    var middleOfWindow = (0,
                    _zepto2.default)(document).width() / 2;
                    if (isNaN(middleOfWindow)) {
                        middleOfWindow = 900
                    }
                    var alignClass = middleOfInput - middleOfWindow >= 0 ? "algolia-autocomplete-right" : "algolia-autocomplete-left";
                    var otherAlignClass = middleOfInput - middleOfWindow < 0 ? "algolia-autocomplete-right" : "algolia-autocomplete-left";
                    var autocompleteWrapper = (0,
                    _zepto2.default)(".algolia-autocomplete");
                    if (!autocompleteWrapper.hasClass(alignClass)) {
                        autocompleteWrapper.addClass(alignClass)
                    }
                    if (autocompleteWrapper.hasClass(otherAlignClass)) {
                        autocompleteWrapper.removeClass(otherAlignClass)
                    }
                }
            }], [{
                key: "checkArguments",
                value: function checkArguments(args) {
                    if (!args.apiKey || !args.indexName) {
                        throw new Error(usage)
                    }
                    if (typeof args.inputSelector !== "string") {
                        throw new Error("Error: inputSelector:" + args.inputSelector + "  must be a string. Each selector must match only one element and separated by ','")
                    }
                    if (!DocSearch.getInputFromSelector(args.inputSelector)) {
                        throw new Error("Error: No input element in the page matches " + args.inputSelector)
                    }
                }
            }, {
                key: "injectSearchBox",
                value: function injectSearchBox(input) {
                    input.before(_templates2.default.searchBox);
                    var newInput = input.prev().prev().find("input");
                    input.remove();
                    return newInput
                }
            }, {
                key: "bindSearchBoxEvent",
                value: function bindSearchBoxEvent() {
                    (0,
                    _zepto2.default)('.searchbox [type="reset"]').on("click", function() {
                        (0,
                        _zepto2.default)("input#docsearch").focus();
                        (0,
                        _zepto2.default)(this).addClass("hide");
                        _autocomplete2.default.autocomplete.setVal("")
                    });
                    (0,
                    _zepto2.default)("input#docsearch").on("keyup", function() {
                        var searchbox = document.querySelector("input#docsearch");
                        var reset = document.querySelector('.searchbox [type="reset"]');
                        reset.className = "searchbox__reset";
                        if (searchbox.value.length === 0) {
                            reset.className += " hide"
                        }
                    })
                }
            }, {
                key: "getInputFromSelector",
                value: function getInputFromSelector(selector) {
                    var input = (0,
                    _zepto2.default)(selector).filter("input");
                    return input.length ? (0,
                    _zepto2.default)(input[0]) : null
                }
            }, {
                key: "formatHits",
                value: function formatHits(receivedHits) {
                    var clonedHits = _utils2.default.deepClone(receivedHits);
                    var hits = clonedHits.map(function(hit) {
                        if (hit._highlightResult) {
                            hit._highlightResult = _utils2.default.mergeKeyWithParent(hit._highlightResult, "hierarchy")
                        }
                        return _utils2.default.mergeKeyWithParent(hit, "hierarchy")
                    });
                    var groupedHits = _utils2.default.groupBy(hits, "lvl0");
                    _zepto2.default.each(groupedHits, function(level, collection) {
                        var groupedHitsByLvl1 = _utils2.default.groupBy(collection, "lvl1");
                        var flattenedHits = _utils2.default.flattenAndFlagFirst(groupedHitsByLvl1, "isSubCategoryHeader");
                        groupedHits[level] = flattenedHits
                    });
                    groupedHits = _utils2.default.flattenAndFlagFirst(groupedHits, "isCategoryHeader");
                    return groupedHits.map(function(hit) {
                        var url = DocSearch.formatURL(hit);
                        var category = _utils2.default.getHighlightedValue(hit, "lvl0");
                        var subcategory = _utils2.default.getHighlightedValue(hit, "lvl1") || category;
                        var displayTitle = _utils2.default.compact([_utils2.default.getHighlightedValue(hit, "lvl2") || subcategory, _utils2.default.getHighlightedValue(hit, "lvl3"), _utils2.default.getHighlightedValue(hit, "lvl4"), _utils2.default.getHighlightedValue(hit, "lvl5"), _utils2.default.getHighlightedValue(hit, "lvl6")]).join('<span class="aa-suggestion-title-separator" aria-hidden="true"> › </span>');
                        var text = _utils2.default.getSnippetedValue(hit, "content");
                        var isTextOrSubcategoryNonEmpty = subcategory && subcategory !== "" || displayTitle && displayTitle !== "";
                        var isLvl1EmptyOrDuplicate = !subcategory || subcategory === "" || subcategory === category;
                        var isLvl2 = displayTitle && displayTitle !== "" && displayTitle !== subcategory;
                        var isLvl1 = !isLvl2 && subcategory && subcategory !== "" && subcategory !== category;
                        var isLvl0 = !isLvl1 && !isLvl2;
                        return {
                            isLvl0: isLvl0,
                            isLvl1: isLvl1,
                            isLvl2: isLvl2,
                            isLvl1EmptyOrDuplicate: isLvl1EmptyOrDuplicate,
                            isCategoryHeader: hit.isCategoryHeader,
                            isSubCategoryHeader: hit.isSubCategoryHeader,
                            isTextOrSubcategoryNonEmpty: isTextOrSubcategoryNonEmpty,
                            category: category,
                            subcategory: subcategory,
                            title: displayTitle,
                            text: text,
                            url: url
                        }
                    })
                }
            }, {
                key: "formatURL",
                value: function formatURL(hit) {
                    var url = hit.url
                      , anchor = hit.anchor;
                    if (url) {
                        var containsAnchor = url.indexOf("#") !== -1;
                        if (containsAnchor)
                            return url;
                        else if (anchor)
                            return hit.url + "#" + hit.anchor;
                        return url
                    } else if (anchor)
                        return "#" + hit.anchor;
                    console.warn("no anchor nor url for : ", JSON.stringify(hit));
                    return null
                }
            }, {
                key: "getEmptyTemplate",
                value: function getEmptyTemplate() {
                    return function(args) {
                        return _hogan2.default.compile(_templates2.default.empty).render(args)
                    }
                }
            }, {
                key: "getSuggestionTemplate",
                value: function getSuggestionTemplate(isSimpleLayout) {
                    var stringTemplate = isSimpleLayout ? _templates2.default.suggestionSimple : _templates2.default.suggestion;
                    var template = _hogan2.default.compile(stringTemplate);
                    return function(suggestion) {
                        return template.render(suggestion)
                    }
                }
            }]);
            return DocSearch
        }();
        exports.default = DocSearch
    }
    , function(module, exports, __webpack_require__) {
        var Hogan = __webpack_require__(27);
        Hogan.Template = __webpack_require__(28).Template;
        Hogan.template = Hogan.Template;
        module.exports = Hogan
    }
    , function(module, exports, __webpack_require__) {
        (function(Hogan) {
            var rIsWhitespace = /\S/
              , rQuot = /\"/g
              , rNewline = /\n/g
              , rCr = /\r/g
              , rSlash = /\\/g
              , rLineSep = /\u2028/
              , rParagraphSep = /\u2029/;
            Hogan.tags = {
                "#": 1,
                "^": 2,
                "<": 3,
                $: 4,
                "/": 5,
                "!": 6,
                ">": 7,
                "=": 8,
                _v: 9,
                "{": 10,
                "&": 11,
                _t: 12
            };
            Hogan.scan = function scan(text, delimiters) {
                var len = text.length
                  , IN_TEXT = 0
                  , IN_TAG_TYPE = 1
                  , IN_TAG = 2
                  , state = IN_TEXT
                  , tagType = null
                  , tag = null
                  , buf = ""
                  , tokens = []
                  , seenTag = false
                  , i = 0
                  , lineStart = 0
                  , otag = "{{"
                  , ctag = "}}";
                function addBuf() {
                    if (buf.length > 0) {
                        tokens.push({
                            tag: "_t",
                            text: new String(buf)
                        });
                        buf = ""
                    }
                }
                function lineIsWhitespace() {
                    var isAllWhitespace = true;
                    for (var j = lineStart; j < tokens.length; j++) {
                        isAllWhitespace = Hogan.tags[tokens[j].tag] < Hogan.tags["_v"] || tokens[j].tag == "_t" && tokens[j].text.match(rIsWhitespace) === null;
                        if (!isAllWhitespace) {
                            return false
                        }
                    }
                    return isAllWhitespace
                }
                function filterLine(haveSeenTag, noNewLine) {
                    addBuf();
                    if (haveSeenTag && lineIsWhitespace()) {
                        for (var j = lineStart, next; j < tokens.length; j++) {
                            if (tokens[j].text) {
                                if ((next = tokens[j + 1]) && next.tag == ">") {
                                    next.indent = tokens[j].text.toString()
                                }
                                tokens.splice(j, 1)
                            }
                        }
                    } else if (!noNewLine) {
                        tokens.push({
                            tag: "\n"
                        })
                    }
                    seenTag = false;
                    lineStart = tokens.length
                }
                function changeDelimiters(text, index) {
                    var close = "=" + ctag
                      , closeIndex = text.indexOf(close, index)
                      , delimiters = trim(text.substring(text.indexOf("=", index) + 1, closeIndex)).split(" ");
                    otag = delimiters[0];
                    ctag = delimiters[delimiters.length - 1];
                    return closeIndex + close.length - 1
                }
                if (delimiters) {
                    delimiters = delimiters.split(" ");
                    otag = delimiters[0];
                    ctag = delimiters[1]
                }
                for (i = 0; i < len; i++) {
                    if (state == IN_TEXT) {
                        if (tagChange(otag, text, i)) {
                            --i;
                            addBuf();
                            state = IN_TAG_TYPE
                        } else {
                            if (text.charAt(i) == "\n") {
                                filterLine(seenTag)
                            } else {
                                buf += text.charAt(i)
                            }
                        }
                    } else if (state == IN_TAG_TYPE) {
                        i += otag.length - 1;
                        tag = Hogan.tags[text.charAt(i + 1)];
                        tagType = tag ? text.charAt(i + 1) : "_v";
                        if (tagType == "=") {
                            i = changeDelimiters(text, i);
                            state = IN_TEXT
                        } else {
                            if (tag) {
                                i++
                            }
                            state = IN_TAG
                        }
                        seenTag = i
                    } else {
                        if (tagChange(ctag, text, i)) {
                            tokens.push({
                                tag: tagType,
                                n: trim(buf),
                                otag: otag,
                                ctag: ctag,
                                i: tagType == "/" ? seenTag - otag.length : i + ctag.length
                            });
                            buf = "";
                            i += ctag.length - 1;
                            state = IN_TEXT;
                            if (tagType == "{") {
                                if (ctag == "}}") {
                                    i++
                                } else {
                                    cleanTripleStache(tokens[tokens.length - 1])
                                }
                            }
                        } else {
                            buf += text.charAt(i)
                        }
                    }
                }
                filterLine(seenTag, true);
                return tokens
            }
            ;
            function cleanTripleStache(token) {
                if (token.n.substr(token.n.length - 1) === "}") {
                    token.n = token.n.substring(0, token.n.length - 1)
                }
            }
            function trim(s) {
                if (s.trim) {
                    return s.trim()
                }
                return s.replace(/^\s*|\s*$/g, "")
            }
            function tagChange(tag, text, index) {
                if (text.charAt(index) != tag.charAt(0)) {
                    return false
                }
                for (var i = 1, l = tag.length; i < l; i++) {
                    if (text.charAt(index + i) != tag.charAt(i)) {
                        return false
                    }
                }
                return true
            }
            var allowedInSuper = {
                _t: true,
                "\n": true,
                $: true,
                "/": true
            };
            function buildTree(tokens, kind, stack, customTags) {
                var instructions = []
                  , opener = null
                  , tail = null
                  , token = null;
                tail = stack[stack.length - 1];
                while (tokens.length > 0) {
                    token = tokens.shift();
                    if (tail && tail.tag == "<" && !(token.tag in allowedInSuper)) {
                        throw new Error("Illegal content in < super tag.")
                    }
                    if (Hogan.tags[token.tag] <= Hogan.tags["$"] || isOpener(token, customTags)) {
                        stack.push(token);
                        token.nodes = buildTree(tokens, token.tag, stack, customTags)
                    } else if (token.tag == "/") {
                        if (stack.length === 0) {
                            throw new Error("Closing tag without opener: /" + token.n)
                        }
                        opener = stack.pop();
                        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
                            throw new Error("Nesting error: " + opener.n + " vs. " + token.n)
                        }
                        opener.end = token.i;
                        return instructions
                    } else if (token.tag == "\n") {
                        token.last = tokens.length == 0 || tokens[0].tag == "\n"
                    }
                    instructions.push(token)
                }
                if (stack.length > 0) {
                    throw new Error("missing closing tag: " + stack.pop().n)
                }
                return instructions
            }
            function isOpener(token, tags) {
                for (var i = 0, l = tags.length; i < l; i++) {
                    if (tags[i].o == token.n) {
                        token.tag = "#";
                        return true
                    }
                }
            }
            function isCloser(close, open, tags) {
                for (var i = 0, l = tags.length; i < l; i++) {
                    if (tags[i].c == close && tags[i].o == open) {
                        return true
                    }
                }
            }
            function stringifySubstitutions(obj) {
                var items = [];
                for (var key in obj) {
                    items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + "}")
                }
                return "{ " + items.join(",") + " }"
            }
            function stringifyPartials(codeObj) {
                var partials = [];
                for (var key in codeObj.partials) {
                    partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}")
                }
                return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs)
            }
            Hogan.stringify = function(codeObj, text, options) {
                return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}"
            }
            ;
            var serialNo = 0;
            Hogan.generate = function(tree, text, options) {
                serialNo = 0;
                var context = {
                    code: "",
                    subs: {},
                    partials: {}
                };
                Hogan.walk(tree, context);
                if (options.asString) {
                    return this.stringify(context, text, options)
                }
                return this.makeTemplate(context, text, options)
            }
            ;
            Hogan.wrapMain = function(code) {
                return 'var t=this;t.b(i=i||"");' + code + "return t.fl();"
            }
            ;
            Hogan.template = Hogan.Template;
            Hogan.makeTemplate = function(codeObj, text, options) {
                var template = this.makePartials(codeObj);
                template.code = new Function("c","p","i",this.wrapMain(codeObj.code));
                return new this.template(template,text,this,options)
            }
            ;
            Hogan.makePartials = function(codeObj) {
                var key, template = {
                    subs: {},
                    partials: codeObj.partials,
                    name: codeObj.name
                };
                for (key in template.partials) {
                    template.partials[key] = this.makePartials(template.partials[key])
                }
                for (key in codeObj.subs) {
                    template.subs[key] = new Function("c","p","t","i",codeObj.subs[key])
                }
                return template
            }
            ;
            function esc(s) {
                return s.replace(rSlash, "\\\\").replace(rQuot, '\\"').replace(rNewline, "\\n").replace(rCr, "\\r").replace(rLineSep, "\\u2028").replace(rParagraphSep, "\\u2029")
            }
            function chooseMethod(s) {
                return ~s.indexOf(".") ? "d" : "f"
            }
            function createPartial(node, context) {
                var prefix = "<" + (context.prefix || "");
                var sym = prefix + node.n + serialNo++;
                context.partials[sym] = {
                    name: node.n,
                    partials: {}
                };
                context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || "") + '"));';
                return sym
            }
            Hogan.codegen = {
                "#": function(node, context) {
                    context.code += "if(t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' + "c,p,0," + node.i + "," + node.end + ',"' + node.otag + " " + node.ctag + '")){' + "t.rs(c,p," + "function(c,p,t){";
                    Hogan.walk(node.nodes, context);
                    context.code += "});c.pop();}"
                },
                "^": function(node, context) {
                    context.code += "if(!t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
                    Hogan.walk(node.nodes, context);
                    context.code += "};"
                },
                ">": createPartial,
                "<": function(node, context) {
                    var ctx = {
                        partials: {},
                        code: "",
                        subs: {},
                        inPartial: true
                    };
                    Hogan.walk(node.nodes, ctx);
                    var template = context.partials[createPartial(node, context)];
                    template.subs = ctx.subs;
                    template.partials = ctx.partials
                },
                $: function(node, context) {
                    var ctx = {
                        subs: {},
                        code: "",
                        partials: context.partials,
                        prefix: node.n
                    };
                    Hogan.walk(node.nodes, ctx);
                    context.subs[node.n] = ctx.code;
                    if (!context.inPartial) {
                        context.code += 't.sub("' + esc(node.n) + '",c,p,i);'
                    }
                },
                "\n": function(node, context) {
                    context.code += write('"\\n"' + (node.last ? "" : " + i"))
                },
                _v: function(node, context) {
                    context.code += "t.b(t.v(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));'
                },
                _t: function(node, context) {
                    context.code += write('"' + esc(node.text) + '"')
                },
                "{": tripleStache,
                "&": tripleStache
            };
            function tripleStache(node, context) {
                context.code += "t.b(t.t(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));'
            }
            function write(s) {
                return "t.b(" + s + ");"
            }
            Hogan.walk = function(nodelist, context) {
                var func;
                for (var i = 0, l = nodelist.length; i < l; i++) {
                    func = Hogan.codegen[nodelist[i].tag];
                    func && func(nodelist[i], context)
                }
                return context
            }
            ;
            Hogan.parse = function(tokens, text, options) {
                options = options || {};
                return buildTree(tokens, "", [], options.sectionTags || [])
            }
            ;
            Hogan.cache = {};
            Hogan.cacheKey = function(text, options) {
                return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join("||")
            }
            ;
            Hogan.compile = function(text, options) {
                options = options || {};
                var key = Hogan.cacheKey(text, options);
                var template = this.cache[key];
                if (template) {
                    var partials = template.partials;
                    for (var name in partials) {
                        delete partials[name].instance
                    }
                    return template
                }
                template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
                return this.cache[key] = template
            }
        }
        )(true ? exports : Hogan)
    }
    , function(module, exports, __webpack_require__) {
        var Hogan = {};
        (function(Hogan) {
            Hogan.Template = function(codeObj, text, compiler, options) {
                codeObj = codeObj || {};
                this.r = codeObj.code || this.r;
                this.c = compiler;
                this.options = options || {};
                this.text = text || "";
                this.partials = codeObj.partials || {};
                this.subs = codeObj.subs || {};
                this.buf = ""
            }
            ;
            Hogan.Template.prototype = {
                r: function(context, partials, indent) {
                    return ""
                },
                v: hoganEscape,
                t: coerceToString,
                render: function render(context, partials, indent) {
                    return this.ri([context], partials || {}, indent)
                },
                ri: function(context, partials, indent) {
                    return this.r(context, partials, indent)
                },
                ep: function(symbol, partials) {
                    var partial = this.partials[symbol];
                    var template = partials[partial.name];
                    if (partial.instance && partial.base == template) {
                        return partial.instance
                    }
                    if (typeof template == "string") {
                        if (!this.c) {
                            throw new Error("No compiler available.")
                        }
                        template = this.c.compile(template, this.options)
                    }
                    if (!template) {
                        return null
                    }
                    this.partials[symbol].base = template;
                    if (partial.subs) {
                        if (!partials.stackText)
                            partials.stackText = {};
                        for (key in partial.subs) {
                            if (!partials.stackText[key]) {
                                partials.stackText[key] = this.activeSub !== undefined && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text
                            }
                        }
                        template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText)
                    }
                    this.partials[symbol].instance = template;
                    return template
                },
                rp: function(symbol, context, partials, indent) {
                    var partial = this.ep(symbol, partials);
                    if (!partial) {
                        return ""
                    }
                    return partial.ri(context, partials, indent)
                },
                rs: function(context, partials, section) {
                    var tail = context[context.length - 1];
                    if (!isArray(tail)) {
                        section(context, partials, this);
                        return
                    }
                    for (var i = 0; i < tail.length; i++) {
                        context.push(tail[i]);
                        section(context, partials, this);
                        context.pop()
                    }
                },
                s: function(val, ctx, partials, inverted, start, end, tags) {
                    var pass;
                    if (isArray(val) && val.length === 0) {
                        return false
                    }
                    if (typeof val == "function") {
                        val = this.ms(val, ctx, partials, inverted, start, end, tags)
                    }
                    pass = !!val;
                    if (!inverted && pass && ctx) {
                        ctx.push(typeof val == "object" ? val : ctx[ctx.length - 1])
                    }
                    return pass
                },
                d: function(key, ctx, partials, returnFound) {
                    var found, names = key.split("."), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
                    if (key === "." && isArray(ctx[ctx.length - 2])) {
                        val = ctx[ctx.length - 1]
                    } else {
                        for (var i = 1; i < names.length; i++) {
                            found = findInScope(names[i], val, doModelGet);
                            if (found !== undefined) {
                                cx = val;
                                val = found
                            } else {
                                val = ""
                            }
                        }
                    }
                    if (returnFound && !val) {
                        return false
                    }
                    if (!returnFound && typeof val == "function") {
                        ctx.push(cx);
                        val = this.mv(val, ctx, partials);
                        ctx.pop()
                    }
                    return val
                },
                f: function(key, ctx, partials, returnFound) {
                    var val = false
                      , v = null
                      , found = false
                      , doModelGet = this.options.modelGet;
                    for (var i = ctx.length - 1; i >= 0; i--) {
                        v = ctx[i];
                        val = findInScope(key, v, doModelGet);
                        if (val !== undefined) {
                            found = true;
                            break
                        }
                    }
                    if (!found) {
                        return returnFound ? false : ""
                    }
                    if (!returnFound && typeof val == "function") {
                        val = this.mv(val, ctx, partials)
                    }
                    return val
                },
                ls: function(func, cx, partials, text, tags) {
                    var oldTags = this.options.delimiters;
                    this.options.delimiters = tags;
                    this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
                    this.options.delimiters = oldTags;
                    return false
                },
                ct: function(text, cx, partials) {
                    if (this.options.disableLambda) {
                        throw new Error("Lambda features disabled.")
                    }
                    return this.c.compile(text, this.options).render(cx, partials)
                },
                b: function(s) {
                    this.buf += s
                },
                fl: function() {
                    var r = this.buf;
                    this.buf = "";
                    return r
                },
                ms: function(func, ctx, partials, inverted, start, end, tags) {
                    var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
                    if (typeof result == "function") {
                        if (inverted) {
                            return true
                        } else {
                            textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
                            return this.ls(result, cx, partials, textSource.substring(start, end), tags)
                        }
                    }
                    return result
                },
                mv: function(func, ctx, partials) {
                    var cx = ctx[ctx.length - 1];
                    var result = func.call(cx);
                    if (typeof result == "function") {
                        return this.ct(coerceToString(result.call(cx)), cx, partials)
                    }
                    return result
                },
                sub: function(name, context, partials, indent) {
                    var f = this.subs[name];
                    if (f) {
                        this.activeSub = name;
                        f(context, partials, this, indent);
                        this.activeSub = false
                    }
                }
            };
            function findInScope(key, scope, doModelGet) {
                var val;
                if (scope && typeof scope == "object") {
                    if (scope[key] !== undefined) {
                        val = scope[key]
                    } else if (doModelGet && scope.get && typeof scope.get == "function") {
                        val = scope.get(key)
                    }
                }
                return val
            }
            function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
                function PartialTemplate() {}
                PartialTemplate.prototype = instance;
                function Substitutions() {}
                Substitutions.prototype = instance.subs;
                var key;
                var partial = new PartialTemplate;
                partial.subs = new Substitutions;
                partial.subsText = {};
                partial.buf = "";
                stackSubs = stackSubs || {};
                partial.stackSubs = stackSubs;
                partial.subsText = stackText;
                for (key in subs) {
                    if (!stackSubs[key])
                        stackSubs[key] = subs[key]
                }
                for (key in stackSubs) {
                    partial.subs[key] = stackSubs[key]
                }
                stackPartials = stackPartials || {};
                partial.stackPartials = stackPartials;
                for (key in partials) {
                    if (!stackPartials[key])
                        stackPartials[key] = partials[key]
                }
                for (key in stackPartials) {
                    partial.partials[key] = stackPartials[key]
                }
                return partial
            }
            var rAmp = /&/g
              , rLt = /</g
              , rGt = />/g
              , rApos = /\'/g
              , rQuot = /\"/g
              , hChars = /[&<>\"\']/;
            function coerceToString(val) {
                return String(val === null || val === undefined ? "" : val)
            }
            function hoganEscape(str) {
                str = coerceToString(str);
                return hChars.test(str) ? str.replace(rAmp, "&amp;").replace(rLt, "&lt;").replace(rGt, "&gt;").replace(rApos, "&#39;").replace(rQuot, "&quot;") : str
            }
            var isArray = Array.isArray || function(a) {
                return Object.prototype.toString.call(a) === "[object Array]"
            }
        }
        )(true ? exports : Hogan)
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var AlgoliaSearchCore = __webpack_require__(30);
        var createAlgoliasearch = __webpack_require__(41);
        module.exports = createAlgoliasearch(AlgoliaSearchCore, "(lite) ")
    }
    , function(module, exports, __webpack_require__) {
        module.exports = AlgoliaSearchCore;
        var errors = __webpack_require__(5);
        var exitPromise = __webpack_require__(31);
        var IndexCore = __webpack_require__(32);
        var store = __webpack_require__(38);
        var MAX_API_KEY_LENGTH = 500;
        var RESET_APP_DATA_TIMER = Object({
            NODE_ENV: "production"
        }).RESET_APP_DATA_TIMER && parseInt(Object({
            NODE_ENV: "production"
        }).RESET_APP_DATA_TIMER, 10) || 60 * 2 * 1e3;
        function AlgoliaSearchCore(applicationID, apiKey, opts) {
            var debug = __webpack_require__(8)("algoliasearch");
            var clone = __webpack_require__(3);
            var isArray = __webpack_require__(6);
            var map = __webpack_require__(7);
            var usage = "Usage: algoliasearch(applicationID, apiKey, opts)";
            if (opts._allowEmptyCredentials !== true && !applicationID) {
                throw new errors.AlgoliaSearchError("Please provide an application ID. " + usage)
            }
            if (opts._allowEmptyCredentials !== true && !apiKey) {
                throw new errors.AlgoliaSearchError("Please provide an API key. " + usage)
            }
            this.applicationID = applicationID;
            this.apiKey = apiKey;
            this.hosts = {
                read: [],
                write: []
            };
            opts = opts || {};
            this._timeouts = opts.timeouts || {
                connect: 1 * 1e3,
                read: 2 * 1e3,
                write: 30 * 1e3
            };
            if (opts.timeout) {
                this._timeouts.connect = this._timeouts.read = this._timeouts.write = opts.timeout
            }
            var protocol = opts.protocol || "https:";
            if (!/:$/.test(protocol)) {
                protocol = protocol + ":"
            }
            if (protocol !== "http:" && protocol !== "https:") {
                throw new errors.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + opts.protocol + "`)")
            }
            this._checkAppIdData();
            if (!opts.hosts) {
                var defaultHosts = map(this._shuffleResult, function(hostNumber) {
                    return applicationID + "-" + hostNumber + ".algolianet.com"
                });
                var mainSuffix = (opts.dsn === false ? "" : "-dsn") + ".algolia.net";
                this.hosts.read = [this.applicationID + mainSuffix].concat(defaultHosts);
                this.hosts.write = [this.applicationID + ".algolia.net"].concat(defaultHosts)
            } else if (isArray(opts.hosts)) {
                this.hosts.read = clone(opts.hosts);
                this.hosts.write = clone(opts.hosts)
            } else {
                this.hosts.read = clone(opts.hosts.read);
                this.hosts.write = clone(opts.hosts.write)
            }
            this.hosts.read = map(this.hosts.read, prepareHost(protocol));
            this.hosts.write = map(this.hosts.write, prepareHost(protocol));
            this.extraHeaders = {};
            this.cache = opts._cache || {};
            this._ua = opts._ua;
            this._useCache = opts._useCache === undefined || opts._cache ? true : opts._useCache;
            this._useRequestCache = this._useCache && opts._useRequestCache;
            this._useFallback = opts.useFallback === undefined ? true : opts.useFallback;
            this._setTimeout = opts._setTimeout;
            debug("init done, %j", this)
        }
        AlgoliaSearchCore.prototype.initIndex = function(indexName) {
            return new IndexCore(this,indexName)
        }
        ;
        AlgoliaSearchCore.prototype.setExtraHeader = function(name, value) {
            this.extraHeaders[name.toLowerCase()] = value
        }
        ;
        AlgoliaSearchCore.prototype.getExtraHeader = function(name) {
            return this.extraHeaders[name.toLowerCase()]
        }
        ;
        AlgoliaSearchCore.prototype.unsetExtraHeader = function(name) {
            delete this.extraHeaders[name.toLowerCase()]
        }
        ;
        AlgoliaSearchCore.prototype.addAlgoliaAgent = function(algoliaAgent) {
            if (this._ua.indexOf(";" + algoliaAgent) === -1) {
                this._ua += ";" + algoliaAgent
            }
        }
        ;
        AlgoliaSearchCore.prototype._jsonRequest = function(initialOpts) {
            this._checkAppIdData();
            var requestDebug = __webpack_require__(8)("algoliasearch:" + initialOpts.url);
            var body;
            var cacheID;
            var additionalUA = initialOpts.additionalUA || "";
            var cache = initialOpts.cache;
            var client = this;
            var tries = 0;
            var usingFallback = false;
            var hasFallback = client._useFallback && client._request.fallback && initialOpts.fallback;
            var headers;
            if (this.apiKey.length > MAX_API_KEY_LENGTH && initialOpts.body !== undefined && (initialOpts.body.params !== undefined || initialOpts.body.requests !== undefined)) {
                initialOpts.body.apiKey = this.apiKey;
                headers = this._computeRequestHeaders({
                    additionalUA: additionalUA,
                    withApiKey: false,
                    headers: initialOpts.headers
                })
            } else {
                headers = this._computeRequestHeaders({
                    additionalUA: additionalUA,
                    headers: initialOpts.headers
                })
            }
            if (initialOpts.body !== undefined) {
                body = safeJSONStringify(initialOpts.body)
            }
            requestDebug("request start");
            var debugData = [];
            function doRequest(requester, reqOpts) {
                client._checkAppIdData();
                var startTime = new Date;
                if (client._useCache && !client._useRequestCache) {
                    cacheID = initialOpts.url
                }
                if (client._useCache && !client._useRequestCache && body) {
                    cacheID += "_body_" + reqOpts.body
                }
                if (isCacheValidWithCurrentID(!client._useRequestCache, cache, cacheID)) {
                    requestDebug("serving response from cache");
                    var responseText = cache[cacheID];
                    return client._promise.resolve({
                        body: JSON.parse(responseText),
                        responseText: responseText
                    })
                }
                if (tries >= client.hosts[initialOpts.hostType].length) {
                    if (!hasFallback || usingFallback) {
                        requestDebug("could not get any response");
                        return client._promise.reject(new errors.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API." + " Send an email to support@algolia.com to report and resolve the issue." + " Application id was: " + client.applicationID,{
                            debugData: debugData
                        }))
                    }
                    requestDebug("switching to fallback");
                    tries = 0;
                    reqOpts.method = initialOpts.fallback.method;
                    reqOpts.url = initialOpts.fallback.url;
                    reqOpts.jsonBody = initialOpts.fallback.body;
                    if (reqOpts.jsonBody) {
                        reqOpts.body = safeJSONStringify(reqOpts.jsonBody)
                    }
                    headers = client._computeRequestHeaders({
                        additionalUA: additionalUA,
                        headers: initialOpts.headers
                    });
                    reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
                    client._setHostIndexByType(0, initialOpts.hostType);
                    usingFallback = true;
                    return doRequest(client._request.fallback, reqOpts)
                }
                var currentHost = client._getHostByType(initialOpts.hostType);
                var url = currentHost + reqOpts.url;
                var options = {
                    body: reqOpts.body,
                    jsonBody: reqOpts.jsonBody,
                    method: reqOpts.method,
                    headers: headers,
                    timeouts: reqOpts.timeouts,
                    debug: requestDebug,
                    forceAuthHeaders: reqOpts.forceAuthHeaders
                };
                requestDebug("method: %s, url: %s, headers: %j, timeouts: %d", options.method, url, options.headers, options.timeouts);
                if (requester === client._request.fallback) {
                    requestDebug("using fallback")
                }
                return requester.call(client, url, options).then(success, tryFallback);
                function success(httpResponse) {
                    var status = httpResponse && httpResponse.body && httpResponse.body.message && httpResponse.body.status || httpResponse.statusCode || httpResponse && httpResponse.body && 200;
                    requestDebug("received response: statusCode: %s, computed statusCode: %d, headers: %j", httpResponse.statusCode, status, httpResponse.headers);
                    var httpResponseOk = Math.floor(status / 100) === 2;
                    var endTime = new Date;
                    debugData.push({
                        currentHost: currentHost,
                        headers: removeCredentials(headers),
                        content: body || null,
                        contentLength: body !== undefined ? body.length : null,
                        method: reqOpts.method,
                        timeouts: reqOpts.timeouts,
                        url: reqOpts.url,
                        startTime: startTime,
                        endTime: endTime,
                        duration: endTime - startTime,
                        statusCode: status
                    });
                    if (httpResponseOk) {
                        if (client._useCache && !client._useRequestCache && cache) {
                            cache[cacheID] = httpResponse.responseText
                        }
                        return {
                            responseText: httpResponse.responseText,
                            body: httpResponse.body
                        }
                    }
                    var shouldRetry = Math.floor(status / 100) !== 4;
                    if (shouldRetry) {
                        tries += 1;
                        return retryRequest()
                    }
                    requestDebug("unrecoverable error");
                    var unrecoverableError = new errors.AlgoliaSearchError(httpResponse.body && httpResponse.body.message,{
                        debugData: debugData,
                        statusCode: status
                    });
                    return client._promise.reject(unrecoverableError)
                }
                function tryFallback(err) {
                    requestDebug("error: %s, stack: %s", err.message, err.stack);
                    var endTime = new Date;
                    debugData.push({
                        currentHost: currentHost,
                        headers: removeCredentials(headers),
                        content: body || null,
                        contentLength: body !== undefined ? body.length : null,
                        method: reqOpts.method,
                        timeouts: reqOpts.timeouts,
                        url: reqOpts.url,
                        startTime: startTime,
                        endTime: endTime,
                        duration: endTime - startTime
                    });
                    if (!(err instanceof errors.AlgoliaSearchError)) {
                        err = new errors.Unknown(err && err.message,err)
                    }
                    tries += 1;
                    if (err instanceof errors.Unknown || err instanceof errors.UnparsableJSON || tries >= client.hosts[initialOpts.hostType].length && (usingFallback || !hasFallback)) {
                        err.debugData = debugData;
                        return client._promise.reject(err)
                    }
                    if (err instanceof errors.RequestTimeout) {
                        return retryRequestWithHigherTimeout()
                    }
                    return retryRequest()
                }
                function retryRequest() {
                    requestDebug("retrying request");
                    client._incrementHostIndex(initialOpts.hostType);
                    return doRequest(requester, reqOpts)
                }
                function retryRequestWithHigherTimeout() {
                    requestDebug("retrying request with higher timeout");
                    client._incrementHostIndex(initialOpts.hostType);
                    client._incrementTimeoutMultipler();
                    reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
                    return doRequest(requester, reqOpts)
                }
            }
            function isCacheValidWithCurrentID(useRequestCache, currentCache, currentCacheID) {
                return client._useCache && useRequestCache && currentCache && currentCache[currentCacheID] !== undefined
            }
            function interopCallbackReturn(request, callback) {
                if (isCacheValidWithCurrentID(client._useRequestCache, cache, cacheID)) {
                    request.catch(function() {
                        delete cache[cacheID]
                    })
                }
                if (typeof initialOpts.callback === "function") {
                    request.then(function okCb(content) {
                        exitPromise(function() {
                            initialOpts.callback(null, callback(content))
                        }, client._setTimeout || setTimeout)
                    }, function nookCb(err) {
                        exitPromise(function() {
                            initialOpts.callback(err)
                        }, client._setTimeout || setTimeout)
                    })
                } else {
                    return request.then(callback)
                }
            }
            if (client._useCache && client._useRequestCache) {
                cacheID = initialOpts.url
            }
            if (client._useCache && client._useRequestCache && body) {
                cacheID += "_body_" + body
            }
            if (isCacheValidWithCurrentID(client._useRequestCache, cache, cacheID)) {
                requestDebug("serving request from cache");
                var maybePromiseForCache = cache[cacheID];
                var promiseForCache = typeof maybePromiseForCache.then !== "function" ? client._promise.resolve({
                    responseText: maybePromiseForCache
                }) : maybePromiseForCache;
                return interopCallbackReturn(promiseForCache, function(content) {
                    return JSON.parse(content.responseText)
                })
            }
            var request = doRequest(client._request, {
                url: initialOpts.url,
                method: initialOpts.method,
                body: body,
                jsonBody: initialOpts.body,
                timeouts: client._getTimeoutsForRequest(initialOpts.hostType),
                forceAuthHeaders: initialOpts.forceAuthHeaders
            });
            if (client._useCache && client._useRequestCache && cache) {
                cache[cacheID] = request
            }
            return interopCallbackReturn(request, function(content) {
                return content.body
            })
        }
        ;
        AlgoliaSearchCore.prototype._getSearchParams = function(args, params) {
            if (args === undefined || args === null) {
                return params
            }
            for (var key in args) {
                if (key !== null && args[key] !== undefined && args.hasOwnProperty(key)) {
                    params += params === "" ? "" : "&";
                    params += key + "=" + encodeURIComponent(Object.prototype.toString.call(args[key]) === "[object Array]" ? safeJSONStringify(args[key]) : args[key])
                }
            }
            return params
        }
        ;
        AlgoliaSearchCore.prototype._computeRequestHeaders = function(options) {
            var forEach = __webpack_require__(2);
            var ua = options.additionalUA ? this._ua + ";" + options.additionalUA : this._ua;
            var requestHeaders = {
                "x-algolia-agent": ua,
                "x-algolia-application-id": this.applicationID
            };
            if (options.withApiKey !== false) {
                requestHeaders["x-algolia-api-key"] = this.apiKey
            }
            if (this.userToken) {
                requestHeaders["x-algolia-usertoken"] = this.userToken
            }
            if (this.securityTags) {
                requestHeaders["x-algolia-tagfilters"] = this.securityTags
            }
            forEach(this.extraHeaders, function addToRequestHeaders(value, key) {
                requestHeaders[key] = value
            });
            if (options.headers) {
                forEach(options.headers, function addToRequestHeaders(value, key) {
                    requestHeaders[key] = value
                })
            }
            return requestHeaders
        }
        ;
        AlgoliaSearchCore.prototype.search = function(queries, opts, callback) {
            var isArray = __webpack_require__(6);
            var map = __webpack_require__(7);
            var usage = "Usage: client.search(arrayOfQueries[, callback])";
            if (!isArray(queries)) {
                throw new Error(usage)
            }
            if (typeof opts === "function") {
                callback = opts;
                opts = {}
            } else if (opts === undefined) {
                opts = {}
            }
            var client = this;
            var postObj = {
                requests: map(queries, function prepareRequest(query) {
                    var params = "";
                    if (query.query !== undefined) {
                        params += "query=" + encodeURIComponent(query.query)
                    }
                    return {
                        indexName: query.indexName,
                        params: client._getSearchParams(query.params, params)
                    }
                })
            };
            var JSONPParams = map(postObj.requests, function prepareJSONPParams(request, requestId) {
                return requestId + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(request.indexName) + "?" + request.params)
            }).join("&");
            var url = "/1/indexes/*/queries";
            if (opts.strategy !== undefined) {
                postObj.strategy = opts.strategy
            }
            return this._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: url,
                body: postObj,
                hostType: "read",
                fallback: {
                    method: "GET",
                    url: "/1/indexes/*",
                    body: {
                        params: JSONPParams
                    }
                },
                callback: callback
            })
        }
        ;
        AlgoliaSearchCore.prototype.searchForFacetValues = function(queries) {
            var isArray = __webpack_require__(6);
            var map = __webpack_require__(7);
            var usage = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";
            if (!isArray(queries)) {
                throw new Error(usage)
            }
            var client = this;
            return client._promise.all(map(queries, function performQuery(query) {
                if (!query || query.indexName === undefined || query.params.facetName === undefined || query.params.facetQuery === undefined) {
                    throw new Error(usage)
                }
                var clone = __webpack_require__(3);
                var omit = __webpack_require__(14);
                var indexName = query.indexName;
                var params = query.params;
                var facetName = params.facetName;
                var filteredParams = omit(clone(params), function(keyName) {
                    return keyName === "facetName"
                });
                var searchParameters = client._getSearchParams(filteredParams, "");
                return client._jsonRequest({
                    cache: client.cache,
                    method: "POST",
                    url: "/1/indexes/" + encodeURIComponent(indexName) + "/facets/" + encodeURIComponent(facetName) + "/query",
                    hostType: "read",
                    body: {
                        params: searchParameters
                    }
                })
            }))
        }
        ;
        AlgoliaSearchCore.prototype.setSecurityTags = function(tags) {
            if (Object.prototype.toString.call(tags) === "[object Array]") {
                var strTags = [];
                for (var i = 0; i < tags.length; ++i) {
                    if (Object.prototype.toString.call(tags[i]) === "[object Array]") {
                        var oredTags = [];
                        for (var j = 0; j < tags[i].length; ++j) {
                            oredTags.push(tags[i][j])
                        }
                        strTags.push("(" + oredTags.join(",") + ")")
                    } else {
                        strTags.push(tags[i])
                    }
                }
                tags = strTags.join(",")
            }
            this.securityTags = tags
        }
        ;
        AlgoliaSearchCore.prototype.setUserToken = function(userToken) {
            this.userToken = userToken
        }
        ;
        AlgoliaSearchCore.prototype.clearCache = function() {
            this.cache = {}
        }
        ;
        AlgoliaSearchCore.prototype.setRequestTimeout = function(milliseconds) {
            if (milliseconds) {
                this._timeouts.connect = this._timeouts.read = this._timeouts.write = milliseconds
            }
        }
        ;
        AlgoliaSearchCore.prototype.setTimeouts = function(timeouts) {
            this._timeouts = timeouts
        }
        ;
        AlgoliaSearchCore.prototype.getTimeouts = function() {
            return this._timeouts
        }
        ;
        AlgoliaSearchCore.prototype._getAppIdData = function() {
            var data = store.get(this.applicationID);
            if (data !== null)
                this._cacheAppIdData(data);
            return data
        }
        ;
        AlgoliaSearchCore.prototype._setAppIdData = function(data) {
            data.lastChange = (new Date).getTime();
            this._cacheAppIdData(data);
            return store.set(this.applicationID, data)
        }
        ;
        AlgoliaSearchCore.prototype._checkAppIdData = function() {
            var data = this._getAppIdData();
            var now = (new Date).getTime();
            if (data === null || now - data.lastChange > RESET_APP_DATA_TIMER) {
                return this._resetInitialAppIdData(data)
            }
            return data
        }
        ;
        AlgoliaSearchCore.prototype._resetInitialAppIdData = function(data) {
            var newData = data || {};
            newData.hostIndexes = {
                read: 0,
                write: 0
            };
            newData.timeoutMultiplier = 1;
            newData.shuffleResult = newData.shuffleResult || shuffle([1, 2, 3]);
            return this._setAppIdData(newData)
        }
        ;
        AlgoliaSearchCore.prototype._cacheAppIdData = function(data) {
            this._hostIndexes = data.hostIndexes;
            this._timeoutMultiplier = data.timeoutMultiplier;
            this._shuffleResult = data.shuffleResult
        }
        ;
        AlgoliaSearchCore.prototype._partialAppIdDataUpdate = function(newData) {
            var foreach = __webpack_require__(2);
            var currentData = this._getAppIdData();
            foreach(newData, function(value, key) {
                currentData[key] = value
            });
            return this._setAppIdData(currentData)
        }
        ;
        AlgoliaSearchCore.prototype._getHostByType = function(hostType) {
            return this.hosts[hostType][this._getHostIndexByType(hostType)]
        }
        ;
        AlgoliaSearchCore.prototype._getTimeoutMultiplier = function() {
            return this._timeoutMultiplier
        }
        ;
        AlgoliaSearchCore.prototype._getHostIndexByType = function(hostType) {
            return this._hostIndexes[hostType]
        }
        ;
        AlgoliaSearchCore.prototype._setHostIndexByType = function(hostIndex, hostType) {
            var clone = __webpack_require__(3);
            var newHostIndexes = clone(this._hostIndexes);
            newHostIndexes[hostType] = hostIndex;
            this._partialAppIdDataUpdate({
                hostIndexes: newHostIndexes
            });
            return hostIndex
        }
        ;
        AlgoliaSearchCore.prototype._incrementHostIndex = function(hostType) {
            return this._setHostIndexByType((this._getHostIndexByType(hostType) + 1) % this.hosts[hostType].length, hostType)
        }
        ;
        AlgoliaSearchCore.prototype._incrementTimeoutMultipler = function() {
            var timeoutMultiplier = Math.max(this._timeoutMultiplier + 1, 4);
            return this._partialAppIdDataUpdate({
                timeoutMultiplier: timeoutMultiplier
            })
        }
        ;
        AlgoliaSearchCore.prototype._getTimeoutsForRequest = function(hostType) {
            return {
                connect: this._timeouts.connect * this._timeoutMultiplier,
                complete: this._timeouts[hostType] * this._timeoutMultiplier
            }
        }
        ;
        function prepareHost(protocol) {
            return function prepare(host) {
                return protocol + "//" + host.toLowerCase()
            }
        }
        function safeJSONStringify(obj) {
            if (Array.prototype.toJSON === undefined) {
                return JSON.stringify(obj)
            }
            var toJSON = Array.prototype.toJSON;
            delete Array.prototype.toJSON;
            var out = JSON.stringify(obj);
            Array.prototype.toJSON = toJSON;
            return out
        }
        function shuffle(array) {
            var currentIndex = array.length;
            var temporaryValue;
            var randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue
            }
            return array
        }
        function removeCredentials(headers) {
            var newHeaders = {};
            for (var headerName in headers) {
                if (Object.prototype.hasOwnProperty.call(headers, headerName)) {
                    var value;
                    if (headerName === "x-algolia-api-key" || headerName === "x-algolia-application-id") {
                        value = "**hidden for security purposes**"
                    } else {
                        value = headers[headerName]
                    }
                    newHeaders[headerName] = value
                }
            }
            return newHeaders
        }
    }
    , function(module, exports) {
        module.exports = function exitPromise(fn, _setTimeout) {
            _setTimeout(fn, 0)
        }
    }
    , function(module, exports, __webpack_require__) {
        var buildSearchMethod = __webpack_require__(13);
        var deprecate = __webpack_require__(33);
        var deprecatedMessage = __webpack_require__(34);
        module.exports = IndexCore;
        function IndexCore(algoliasearch, indexName) {
            this.indexName = indexName;
            this.as = algoliasearch;
            this.typeAheadArgs = null;
            this.typeAheadValueOption = null;
            this.cache = {}
        }
        IndexCore.prototype.clearCache = function() {
            this.cache = {}
        }
        ;
        IndexCore.prototype.search = buildSearchMethod("query");
        IndexCore.prototype.similarSearch = buildSearchMethod("similarQuery");
        IndexCore.prototype.browse = function(query, queryParameters, callback) {
            var merge = __webpack_require__(35);
            var indexObj = this;
            var page;
            var hitsPerPage;
            if (arguments.length === 0 || arguments.length === 1 && typeof arguments[0] === "function") {
                page = 0;
                callback = arguments[0];
                query = undefined
            } else if (typeof arguments[0] === "number") {
                page = arguments[0];
                if (typeof arguments[1] === "number") {
                    hitsPerPage = arguments[1]
                } else if (typeof arguments[1] === "function") {
                    callback = arguments[1];
                    hitsPerPage = undefined
                }
                query = undefined;
                queryParameters = undefined
            } else if (typeof arguments[0] === "object") {
                if (typeof arguments[1] === "function") {
                    callback = arguments[1]
                }
                queryParameters = arguments[0];
                query = undefined
            } else if (typeof arguments[0] === "string" && typeof arguments[1] === "function") {
                callback = arguments[1];
                queryParameters = undefined
            }
            queryParameters = merge({}, queryParameters || {}, {
                page: page,
                hitsPerPage: hitsPerPage,
                query: query
            });
            var params = this.as._getSearchParams(queryParameters, "");
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/browse",
                body: {
                    params: params
                },
                hostType: "read",
                callback: callback
            })
        }
        ;
        IndexCore.prototype.browseFrom = function(cursor, callback) {
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
                body: {
                    cursor: cursor
                },
                hostType: "read",
                callback: callback
            })
        }
        ;
        IndexCore.prototype.searchForFacetValues = function(params, callback) {
            var clone = __webpack_require__(3);
            var omit = __webpack_require__(14);
            var usage = "Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])";
            if (params.facetName === undefined || params.facetQuery === undefined) {
                throw new Error(usage)
            }
            var facetName = params.facetName;
            var filteredParams = omit(clone(params), function(keyName) {
                return keyName === "facetName"
            });
            var searchParameters = this.as._getSearchParams(filteredParams, "");
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(facetName) + "/query",
                hostType: "read",
                body: {
                    params: searchParameters
                },
                callback: callback
            })
        }
        ;
        IndexCore.prototype.searchFacet = deprecate(function(params, callback) {
            return this.searchForFacetValues(params, callback)
        }, deprecatedMessage("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])"));
        IndexCore.prototype._search = function(params, url, callback, additionalUA) {
            return this.as._jsonRequest({
                cache: this.cache,
                method: "POST",
                url: url || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
                body: {
                    params: params
                },
                hostType: "read",
                fallback: {
                    method: "GET",
                    url: "/1/indexes/" + encodeURIComponent(this.indexName),
                    body: {
                        params: params
                    }
                },
                callback: callback,
                additionalUA: additionalUA
            })
        }
        ;
        IndexCore.prototype.getObject = function(objectID, attrs, callback) {
            var indexObj = this;
            if (arguments.length === 1 || typeof attrs === "function") {
                callback = attrs;
                attrs = undefined
            }
            var params = "";
            if (attrs !== undefined) {
                params = "?attributes=";
                for (var i = 0; i < attrs.length; ++i) {
                    if (i !== 0) {
                        params += ","
                    }
                    params += attrs[i]
                }
            }
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(objectID) + params,
                hostType: "read",
                callback: callback
            })
        }
        ;
        IndexCore.prototype.getObjects = function(objectIDs, attributesToRetrieve, callback) {
            var isArray = __webpack_require__(6);
            var map = __webpack_require__(7);
            var usage = "Usage: index.getObjects(arrayOfObjectIDs[, callback])";
            if (!isArray(objectIDs)) {
                throw new Error(usage)
            }
            var indexObj = this;
            if (arguments.length === 1 || typeof attributesToRetrieve === "function") {
                callback = attributesToRetrieve;
                attributesToRetrieve = undefined
            }
            var body = {
                requests: map(objectIDs, function prepareRequest(objectID) {
                    var request = {
                        indexName: indexObj.indexName,
                        objectID: objectID
                    };
                    if (attributesToRetrieve) {
                        request.attributesToRetrieve = attributesToRetrieve.join(",")
                    }
                    return request
                })
            };
            return this.as._jsonRequest({
                method: "POST",
                url: "/1/indexes/*/objects",
                hostType: "read",
                body: body,
                callback: callback
            })
        }
        ;
        IndexCore.prototype.as = null;
        IndexCore.prototype.indexName = null;
        IndexCore.prototype.typeAheadArgs = null;
        IndexCore.prototype.typeAheadValueOption = null
    }
    , function(module, exports) {
        module.exports = function deprecate(fn, message) {
            var warned = false;
            function deprecated() {
                if (!warned) {
                    console.warn(message);
                    warned = true
                }
                return fn.apply(this, arguments)
            }
            return deprecated
        }
    }
    , function(module, exports) {
        module.exports = function deprecatedMessage(previousUsage, newUsage) {
            var githubAnchorLink = previousUsage.toLowerCase().replace(/[\.\(\)]/g, "");
            return "algoliasearch: `" + previousUsage + "` was replaced by `" + newUsage + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + githubAnchorLink
        }
    }
    , function(module, exports, __webpack_require__) {
        var foreach = __webpack_require__(2);
        module.exports = function merge(destination) {
            var sources = Array.prototype.slice.call(arguments);
            foreach(sources, function(source) {
                for (var keyName in source) {
                    if (source.hasOwnProperty(keyName)) {
                        if (typeof destination[keyName] === "object" && typeof source[keyName] === "object") {
                            destination[keyName] = merge({}, destination[keyName], source[keyName])
                        } else if (source[keyName] !== undefined) {
                            destination[keyName] = source[keyName]
                        }
                    }
                }
            });
            return destination
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var has = Object.prototype.hasOwnProperty;
        var toStr = Object.prototype.toString;
        var slice = Array.prototype.slice;
        var isArgs = __webpack_require__(37);
        var isEnumerable = Object.prototype.propertyIsEnumerable;
        var hasDontEnumBug = !isEnumerable.call({
            toString: null
        }, "toString");
        var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
        var dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
        var equalsConstructorPrototype = function(o) {
            var ctor = o.constructor;
            return ctor && ctor.prototype === o
        };
        var excludedKeys = {
            $applicationCache: true,
            $console: true,
            $external: true,
            $frame: true,
            $frameElement: true,
            $frames: true,
            $innerHeight: true,
            $innerWidth: true,
            $outerHeight: true,
            $outerWidth: true,
            $pageXOffset: true,
            $pageYOffset: true,
            $parent: true,
            $scrollLeft: true,
            $scrollTop: true,
            $scrollX: true,
            $scrollY: true,
            $self: true,
            $webkitIndexedDB: true,
            $webkitStorageInfo: true,
            $window: true
        };
        var hasAutomationEqualityBug = function() {
            if (typeof window === "undefined") {
                return false
            }
            for (var k in window) {
                try {
                    if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
                        try {
                            equalsConstructorPrototype(window[k])
                        } catch (e) {
                            return true
                        }
                    }
                } catch (e) {
                    return true
                }
            }
            return false
        }();
        var equalsConstructorPrototypeIfNotBuggy = function(o) {
            if (typeof window === "undefined" || !hasAutomationEqualityBug) {
                return equalsConstructorPrototype(o)
            }
            try {
                return equalsConstructorPrototype(o)
            } catch (e) {
                return false
            }
        };
        var keysShim = function keys(object) {
            var isObject = object !== null && typeof object === "object";
            var isFunction = toStr.call(object) === "[object Function]";
            var isArguments = isArgs(object);
            var isString = isObject && toStr.call(object) === "[object String]";
            var theKeys = [];
            if (!isObject && !isFunction && !isArguments) {
                throw new TypeError("Object.keys called on a non-object")
            }
            var skipProto = hasProtoEnumBug && isFunction;
            if (isString && object.length > 0 && !has.call(object, 0)) {
                for (var i = 0; i < object.length; ++i) {
                    theKeys.push(String(i))
                }
            }
            if (isArguments && object.length > 0) {
                for (var j = 0; j < object.length; ++j) {
                    theKeys.push(String(j))
                }
            } else {
                for (var name in object) {
                    if (!(skipProto && name === "prototype") && has.call(object, name)) {
                        theKeys.push(String(name))
                    }
                }
            }
            if (hasDontEnumBug) {
                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                for (var k = 0; k < dontEnums.length; ++k) {
                    if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
                        theKeys.push(dontEnums[k])
                    }
                }
            }
            return theKeys
        };
        keysShim.shim = function shimObjectKeys() {
            if (Object.keys) {
                var keysWorksWithArguments = function() {
                    return (Object.keys(arguments) || "").length === 2
                }(1, 2);
                if (!keysWorksWithArguments) {
                    var originalKeys = Object.keys;
                    Object.keys = function keys(object) {
                        if (isArgs(object)) {
                            return originalKeys(slice.call(object))
                        } else {
                            return originalKeys(object)
                        }
                    }
                }
            } else {
                Object.keys = keysShim
            }
            return Object.keys || keysShim
        }
        ;
        module.exports = keysShim
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var toStr = Object.prototype.toString;
        module.exports = function isArguments(value) {
            var str = toStr.call(value);
            var isArgs = str === "[object Arguments]";
            if (!isArgs) {
                isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]"
            }
            return isArgs
        }
    }
    , function(module, exports, __webpack_require__) {
        (function(global) {
            var debug = __webpack_require__(8)("algoliasearch:src/hostIndexState.js");
            var localStorageNamespace = "algoliasearch-client-js";
            var store;
            var moduleStore = {
                state: {},
                set: function(key, data) {
                    this.state[key] = data;
                    return this.state[key]
                },
                get: function(key) {
                    return this.state[key] || null
                }
            };
            var localStorageStore = {
                set: function(key, data) {
                    moduleStore.set(key, data);
                    try {
                        var namespace = JSON.parse(global.localStorage[localStorageNamespace]);
                        namespace[key] = data;
                        global.localStorage[localStorageNamespace] = JSON.stringify(namespace);
                        return namespace[key]
                    } catch (e) {
                        return localStorageFailure(key, e)
                    }
                },
                get: function(key) {
                    try {
                        return JSON.parse(global.localStorage[localStorageNamespace])[key] || null
                    } catch (e) {
                        return localStorageFailure(key, e)
                    }
                }
            };
            function localStorageFailure(key, e) {
                debug("localStorage failed with", e);
                cleanup();
                store = moduleStore;
                return store.get(key)
            }
            store = supportsLocalStorage() ? localStorageStore : moduleStore;
            module.exports = {
                get: getOrSet,
                set: getOrSet,
                supportsLocalStorage: supportsLocalStorage
            };
            function getOrSet(key, data) {
                if (arguments.length === 1) {
                    return store.get(key)
                }
                return store.set(key, data)
            }
            function supportsLocalStorage() {
                try {
                    if ("localStorage"in global && global.localStorage !== null) {
                        if (!global.localStorage[localStorageNamespace]) {
                            global.localStorage.setItem(localStorageNamespace, JSON.stringify({}))
                        }
                        return true
                    }
                    return false
                } catch (_) {
                    return false
                }
            }
            function cleanup() {
                try {
                    global.localStorage.removeItem(localStorageNamespace)
                } catch (_) {}
            }
        }
        ).call(exports, __webpack_require__(4))
    }
    , function(module, exports, __webpack_require__) {
        exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
        exports.coerce = coerce;
        exports.disable = disable;
        exports.enable = enable;
        exports.enabled = enabled;
        exports.humanize = __webpack_require__(40);
        exports.names = [];
        exports.skips = [];
        exports.formatters = {};
        var prevTime;
        function selectColor(namespace) {
            var hash = 0, i;
            for (i in namespace) {
                hash = (hash << 5) - hash + namespace.charCodeAt(i);
                hash |= 0
            }
            return exports.colors[Math.abs(hash) % exports.colors.length]
        }
        function createDebug(namespace) {
            function debug() {
                if (!debug.enabled)
                    return;
                var self = debug;
                var curr = +new Date;
                var ms = curr - (prevTime || curr);
                self.diff = ms;
                self.prev = prevTime;
                self.curr = curr;
                prevTime = curr;
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i]
                }
                args[0] = exports.coerce(args[0]);
                if ("string" !== typeof args[0]) {
                    args.unshift("%O")
                }
                var index = 0;
                args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
                    if (match === "%%")
                        return match;
                    index++;
                    var formatter = exports.formatters[format];
                    if ("function" === typeof formatter) {
                        var val = args[index];
                        match = formatter.call(self, val);
                        args.splice(index, 1);
                        index--
                    }
                    return match
                });
                exports.formatArgs.call(self, args);
                var logFn = debug.log || exports.log || console.log.bind(console);
                logFn.apply(self, args)
            }
            debug.namespace = namespace;
            debug.enabled = exports.enabled(namespace);
            debug.useColors = exports.useColors();
            debug.color = selectColor(namespace);
            if ("function" === typeof exports.init) {
                exports.init(debug)
            }
            return debug
        }
        function enable(namespaces) {
            exports.save(namespaces);
            exports.names = [];
            exports.skips = [];
            var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
            var len = split.length;
            for (var i = 0; i < len; i++) {
                if (!split[i])
                    continue;
                namespaces = split[i].replace(/\*/g, ".*?");
                if (namespaces[0] === "-") {
                    exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"))
                } else {
                    exports.names.push(new RegExp("^" + namespaces + "$"))
                }
            }
        }
        function disable() {
            exports.enable("")
        }
        function enabled(name) {
            var i, len;
            for (i = 0,
            len = exports.skips.length; i < len; i++) {
                if (exports.skips[i].test(name)) {
                    return false
                }
            }
            for (i = 0,
            len = exports.names.length; i < len; i++) {
                if (exports.names[i].test(name)) {
                    return true
                }
            }
            return false
        }
        function coerce(val) {
            if (val instanceof Error)
                return val.stack || val.message;
            return val
        }
    }
    , function(module, exports) {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var y = d * 365.25;
        module.exports = function(val, options) {
            options = options || {};
            var type = typeof val;
            if (type === "string" && val.length > 0) {
                return parse(val)
            } else if (type === "number" && isNaN(val) === false) {
                return options.long ? fmtLong(val) : fmtShort(val)
            }
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val))
        }
        ;
        function parse(str) {
            str = String(str);
            if (str.length > 100) {
                return
            }
            var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
            if (!match) {
                return
            }
            var n = parseFloat(match[1]);
            var type = (match[2] || "ms").toLowerCase();
            switch (type) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
                return n * y;
            case "days":
            case "day":
            case "d":
                return n * d;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
                return n * h;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
                return n * m;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
                return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
                return n;
            default:
                return undefined
            }
        }
        function fmtShort(ms) {
            if (ms >= d) {
                return Math.round(ms / d) + "d"
            }
            if (ms >= h) {
                return Math.round(ms / h) + "h"
            }
            if (ms >= m) {
                return Math.round(ms / m) + "m"
            }
            if (ms >= s) {
                return Math.round(ms / s) + "s"
            }
            return ms + "ms"
        }
        function fmtLong(ms) {
            return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms"
        }
        function plural(ms, n, name) {
            if (ms < n) {
                return
            }
            if (ms < n * 1.5) {
                return Math.floor(ms / n) + " " + name
            }
            return Math.ceil(ms / n) + " " + name + "s"
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var global = __webpack_require__(42);
        var Promise = global.Promise || __webpack_require__(43).Promise;
        module.exports = function createAlgoliasearch(AlgoliaSearch, uaSuffix) {
            var inherits = __webpack_require__(12);
            var errors = __webpack_require__(5);
            var inlineHeaders = __webpack_require__(44);
            var jsonpRequest = __webpack_require__(46);
            var places = __webpack_require__(47);
            uaSuffix = uaSuffix || "";
            if (false) {
                require("debug").enable("algoliasearch*")
            }
            function algoliasearch(applicationID, apiKey, opts) {
                var cloneDeep = __webpack_require__(3);
                opts = cloneDeep(opts || {});
                opts._ua = opts._ua || algoliasearch.ua;
                return new AlgoliaSearchBrowser(applicationID,apiKey,opts)
            }
            algoliasearch.version = __webpack_require__(48);
            algoliasearch.ua = "Algolia for vanilla JavaScript " + uaSuffix + algoliasearch.version;
            algoliasearch.initPlaces = places(algoliasearch);
            global.__algolia = {
                debug: __webpack_require__(8),
                algoliasearch: algoliasearch
            };
            var support = {
                hasXMLHttpRequest: "XMLHttpRequest"in global,
                hasXDomainRequest: "XDomainRequest"in global
            };
            if (support.hasXMLHttpRequest) {
                support.cors = "withCredentials"in new XMLHttpRequest
            }
            function AlgoliaSearchBrowser() {
                AlgoliaSearch.apply(this, arguments)
            }
            inherits(AlgoliaSearchBrowser, AlgoliaSearch);
            AlgoliaSearchBrowser.prototype._request = function request(url, opts) {
                return new Promise(function wrapRequest(resolve, reject) {
                    if (!support.cors && !support.hasXDomainRequest) {
                        reject(new errors.Network("CORS not supported"));
                        return
                    }
                    url = inlineHeaders(url, opts.headers);
                    var body = opts.body;
                    var req = support.cors ? new XMLHttpRequest : new XDomainRequest;
                    var reqTimeout;
                    var timedOut;
                    var connected = false;
                    reqTimeout = setTimeout(onTimeout, opts.timeouts.connect);
                    req.onprogress = onProgress;
                    if ("onreadystatechange"in req)
                        req.onreadystatechange = onReadyStateChange;
                    req.onload = onLoad;
                    req.onerror = onError;
                    if (req instanceof XMLHttpRequest) {
                        req.open(opts.method, url, true);
                        if (opts.forceAuthHeaders) {
                            req.setRequestHeader("x-algolia-application-id", opts.headers["x-algolia-application-id"]);
                            req.setRequestHeader("x-algolia-api-key", opts.headers["x-algolia-api-key"])
                        }
                    } else {
                        req.open(opts.method, url)
                    }
                    if (support.cors) {
                        if (body) {
                            if (opts.method === "POST") {
                                req.setRequestHeader("content-type", "application/x-www-form-urlencoded")
                            } else {
                                req.setRequestHeader("content-type", "application/json")
                            }
                        }
                        req.setRequestHeader("accept", "application/json")
                    }
                    if (body) {
                        req.send(body)
                    } else {
                        req.send()
                    }
                    function onLoad() {
                        if (timedOut) {
                            return
                        }
                        clearTimeout(reqTimeout);
                        var out;
                        try {
                            out = {
                                body: JSON.parse(req.responseText),
                                responseText: req.responseText,
                                statusCode: req.status,
                                headers: req.getAllResponseHeaders && req.getAllResponseHeaders() || {}
                            }
                        } catch (e) {
                            out = new errors.UnparsableJSON({
                                more: req.responseText
                            })
                        }
                        if (out instanceof errors.UnparsableJSON) {
                            reject(out)
                        } else {
                            resolve(out)
                        }
                    }
                    function onError(event) {
                        if (timedOut) {
                            return
                        }
                        clearTimeout(reqTimeout);
                        reject(new errors.Network({
                            more: event
                        }))
                    }
                    function onTimeout() {
                        timedOut = true;
                        req.abort();
                        reject(new errors.RequestTimeout)
                    }
                    function onConnect() {
                        connected = true;
                        clearTimeout(reqTimeout);
                        reqTimeout = setTimeout(onTimeout, opts.timeouts.complete)
                    }
                    function onProgress() {
                        if (!connected)
                            onConnect()
                    }
                    function onReadyStateChange() {
                        if (!connected && req.readyState > 1)
                            onConnect()
                    }
                }
                )
            }
            ;
            AlgoliaSearchBrowser.prototype._request.fallback = function requestFallback(url, opts) {
                url = inlineHeaders(url, opts.headers);
                return new Promise(function wrapJsonpRequest(resolve, reject) {
                    jsonpRequest(url, opts, function jsonpRequestDone(err, content) {
                        if (err) {
                            reject(err);
                            return
                        }
                        resolve(content)
                    })
                }
                )
            }
            ;
            AlgoliaSearchBrowser.prototype._promise = {
                reject: function rejectPromise(val) {
                    return Promise.reject(val)
                },
                resolve: function resolvePromise(val) {
                    return Promise.resolve(val)
                },
                delay: function delayPromise(ms) {
                    return new Promise(function resolveOnTimeout(resolve) {
                        setTimeout(resolve, ms)
                    }
                    )
                },
                all: function all(promises) {
                    return Promise.all(promises)
                }
            };
            return algoliasearch
        }
    }
    , function(module, exports, __webpack_require__) {
        (function(global) {
            var win;
            if (typeof window !== "undefined") {
                win = window
            } else if (typeof global !== "undefined") {
                win = global
            } else if (typeof self !== "undefined") {
                win = self
            } else {
                win = {}
            }
            module.exports = win
        }
        ).call(exports, __webpack_require__(4))
    }
    , function(module, exports, __webpack_require__) {
        (function(process, global) {
            (function(global, factory) {
                true ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global.ES6Promise = factory()
            }
            )(this, function() {
                "use strict";
                function objectOrFunction(x) {
                    var type = typeof x;
                    return x !== null && (type === "object" || type === "function")
                }
                function isFunction(x) {
                    return typeof x === "function"
                }
                var _isArray = void 0;
                if (Array.isArray) {
                    _isArray = Array.isArray
                } else {
                    _isArray = function(x) {
                        return Object.prototype.toString.call(x) === "[object Array]"
                    }
                }
                var isArray = _isArray;
                var len = 0;
                var vertxNext = void 0;
                var customSchedulerFn = void 0;
                var asap = function asap(callback, arg) {
                    queue[len] = callback;
                    queue[len + 1] = arg;
                    len += 2;
                    if (len === 2) {
                        if (customSchedulerFn) {
                            customSchedulerFn(flush)
                        } else {
                            scheduleFlush()
                        }
                    }
                };
                function setScheduler(scheduleFn) {
                    customSchedulerFn = scheduleFn
                }
                function setAsap(asapFn) {
                    asap = asapFn
                }
                var browserWindow = typeof window !== "undefined" ? window : undefined;
                var browserGlobal = browserWindow || {};
                var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
                var isNode = typeof self === "undefined" && typeof process !== "undefined" && {}.toString.call(process) === "[object process]";
                var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
                function useNextTick() {
                    return function() {
                        return process.nextTick(flush)
                    }
                }
                function useVertxTimer() {
                    if (typeof vertxNext !== "undefined") {
                        return function() {
                            vertxNext(flush)
                        }
                    }
                    return useSetTimeout()
                }
                function useMutationObserver() {
                    var iterations = 0;
                    var observer = new BrowserMutationObserver(flush);
                    var node = document.createTextNode("");
                    observer.observe(node, {
                        characterData: true
                    });
                    return function() {
                        node.data = iterations = ++iterations % 2
                    }
                }
                function useMessageChannel() {
                    var channel = new MessageChannel;
                    channel.port1.onmessage = flush;
                    return function() {
                        return channel.port2.postMessage(0)
                    }
                }
                function useSetTimeout() {
                    var globalSetTimeout = setTimeout;
                    return function() {
                        return globalSetTimeout(flush, 1)
                    }
                }
                var queue = new Array(1e3);
                function flush() {
                    for (var i = 0; i < len; i += 2) {
                        var callback = queue[i];
                        var arg = queue[i + 1];
                        callback(arg);
                        queue[i] = undefined;
                        queue[i + 1] = undefined
                    }
                    len = 0
                }
                function attemptVertx() {
                    try {
                        var vertx = Function("return this")().require("vertx");
                        vertxNext = vertx.runOnLoop || vertx.runOnContext;
                        return useVertxTimer()
                    } catch (e) {
                        return useSetTimeout()
                    }
                }
                var scheduleFlush = void 0;
                if (isNode) {
                    scheduleFlush = useNextTick()
                } else if (BrowserMutationObserver) {
                    scheduleFlush = useMutationObserver()
                } else if (isWorker) {
                    scheduleFlush = useMessageChannel()
                } else if (browserWindow === undefined && "function" === "function") {
                    scheduleFlush = attemptVertx()
                } else {
                    scheduleFlush = useSetTimeout()
                }
                function then(onFulfillment, onRejection) {
                    var parent = this;
                    var child = new this.constructor(noop);
                    if (child[PROMISE_ID] === undefined) {
                        makePromise(child)
                    }
                    var _state = parent._state;
                    if (_state) {
                        var callback = arguments[_state - 1];
                        asap(function() {
                            return invokeCallback(_state, child, callback, parent._result)
                        })
                    } else {
                        subscribe(parent, child, onFulfillment, onRejection)
                    }
                    return child
                }
                function resolve$1(object) {
                    var Constructor = this;
                    if (object && typeof object === "object" && object.constructor === Constructor) {
                        return object
                    }
                    var promise = new Constructor(noop);
                    resolve(promise, object);
                    return promise
                }
                var PROMISE_ID = Math.random().toString(36).substring(2);
                function noop() {}
                var PENDING = void 0;
                var FULFILLED = 1;
                var REJECTED = 2;
                var TRY_CATCH_ERROR = {
                    error: null
                };
                function selfFulfillment() {
                    return new TypeError("You cannot resolve a promise with itself")
                }
                function cannotReturnOwn() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }
                function getThen(promise) {
                    try {
                        return promise.then
                    } catch (error) {
                        TRY_CATCH_ERROR.error = error;
                        return TRY_CATCH_ERROR
                    }
                }
                function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
                    try {
                        then$$1.call(value, fulfillmentHandler, rejectionHandler)
                    } catch (e) {
                        return e
                    }
                }
                function handleForeignThenable(promise, thenable, then$$1) {
                    asap(function(promise) {
                        var sealed = false;
                        var error = tryThen(then$$1, thenable, function(value) {
                            if (sealed) {
                                return
                            }
                            sealed = true;
                            if (thenable !== value) {
                                resolve(promise, value)
                            } else {
                                fulfill(promise, value)
                            }
                        }, function(reason) {
                            if (sealed) {
                                return
                            }
                            sealed = true;
                            reject(promise, reason)
                        }, "Settle: " + (promise._label || " unknown promise"));
                        if (!sealed && error) {
                            sealed = true;
                            reject(promise, error)
                        }
                    }, promise)
                }
                function handleOwnThenable(promise, thenable) {
                    if (thenable._state === FULFILLED) {
                        fulfill(promise, thenable._result)
                    } else if (thenable._state === REJECTED) {
                        reject(promise, thenable._result)
                    } else {
                        subscribe(thenable, undefined, function(value) {
                            return resolve(promise, value)
                        }, function(reason) {
                            return reject(promise, reason)
                        })
                    }
                }
                function handleMaybeThenable(promise, maybeThenable, then$$1) {
                    if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
                        handleOwnThenable(promise, maybeThenable)
                    } else {
                        if (then$$1 === TRY_CATCH_ERROR) {
                            reject(promise, TRY_CATCH_ERROR.error);
                            TRY_CATCH_ERROR.error = null
                        } else if (then$$1 === undefined) {
                            fulfill(promise, maybeThenable)
                        } else if (isFunction(then$$1)) {
                            handleForeignThenable(promise, maybeThenable, then$$1)
                        } else {
                            fulfill(promise, maybeThenable)
                        }
                    }
                }
                function resolve(promise, value) {
                    if (promise === value) {
                        reject(promise, selfFulfillment())
                    } else if (objectOrFunction(value)) {
                        handleMaybeThenable(promise, value, getThen(value))
                    } else {
                        fulfill(promise, value)
                    }
                }
                function publishRejection(promise) {
                    if (promise._onerror) {
                        promise._onerror(promise._result)
                    }
                    publish(promise)
                }
                function fulfill(promise, value) {
                    if (promise._state !== PENDING) {
                        return
                    }
                    promise._result = value;
                    promise._state = FULFILLED;
                    if (promise._subscribers.length !== 0) {
                        asap(publish, promise)
                    }
                }
                function reject(promise, reason) {
                    if (promise._state !== PENDING) {
                        return
                    }
                    promise._state = REJECTED;
                    promise._result = reason;
                    asap(publishRejection, promise)
                }
                function subscribe(parent, child, onFulfillment, onRejection) {
                    var _subscribers = parent._subscribers;
                    var length = _subscribers.length;
                    parent._onerror = null;
                    _subscribers[length] = child;
                    _subscribers[length + FULFILLED] = onFulfillment;
                    _subscribers[length + REJECTED] = onRejection;
                    if (length === 0 && parent._state) {
                        asap(publish, parent)
                    }
                }
                function publish(promise) {
                    var subscribers = promise._subscribers;
                    var settled = promise._state;
                    if (subscribers.length === 0) {
                        return
                    }
                    var child = void 0
                      , callback = void 0
                      , detail = promise._result;
                    for (var i = 0; i < subscribers.length; i += 3) {
                        child = subscribers[i];
                        callback = subscribers[i + settled];
                        if (child) {
                            invokeCallback(settled, child, callback, detail)
                        } else {
                            callback(detail)
                        }
                    }
                    promise._subscribers.length = 0
                }
                function tryCatch(callback, detail) {
                    try {
                        return callback(detail)
                    } catch (e) {
                        TRY_CATCH_ERROR.error = e;
                        return TRY_CATCH_ERROR
                    }
                }
                function invokeCallback(settled, promise, callback, detail) {
                    var hasCallback = isFunction(callback)
                      , value = void 0
                      , error = void 0
                      , succeeded = void 0
                      , failed = void 0;
                    if (hasCallback) {
                        value = tryCatch(callback, detail);
                        if (value === TRY_CATCH_ERROR) {
                            failed = true;
                            error = value.error;
                            value.error = null
                        } else {
                            succeeded = true
                        }
                        if (promise === value) {
                            reject(promise, cannotReturnOwn());
                            return
                        }
                    } else {
                        value = detail;
                        succeeded = true
                    }
                    if (promise._state !== PENDING) {} else if (hasCallback && succeeded) {
                        resolve(promise, value)
                    } else if (failed) {
                        reject(promise, error)
                    } else if (settled === FULFILLED) {
                        fulfill(promise, value)
                    } else if (settled === REJECTED) {
                        reject(promise, value)
                    }
                }
                function initializePromise(promise, resolver) {
                    try {
                        resolver(function resolvePromise(value) {
                            resolve(promise, value)
                        }, function rejectPromise(reason) {
                            reject(promise, reason)
                        })
                    } catch (e) {
                        reject(promise, e)
                    }
                }
                var id = 0;
                function nextId() {
                    return id++
                }
                function makePromise(promise) {
                    promise[PROMISE_ID] = id++;
                    promise._state = undefined;
                    promise._result = undefined;
                    promise._subscribers = []
                }
                function validationError() {
                    return new Error("Array Methods must be provided an Array")
                }
                var Enumerator = function() {
                    function Enumerator(Constructor, input) {
                        this._instanceConstructor = Constructor;
                        this.promise = new Constructor(noop);
                        if (!this.promise[PROMISE_ID]) {
                            makePromise(this.promise)
                        }
                        if (isArray(input)) {
                            this.length = input.length;
                            this._remaining = input.length;
                            this._result = new Array(this.length);
                            if (this.length === 0) {
                                fulfill(this.promise, this._result)
                            } else {
                                this.length = this.length || 0;
                                this._enumerate(input);
                                if (this._remaining === 0) {
                                    fulfill(this.promise, this._result)
                                }
                            }
                        } else {
                            reject(this.promise, validationError())
                        }
                    }
                    Enumerator.prototype._enumerate = function _enumerate(input) {
                        for (var i = 0; this._state === PENDING && i < input.length; i++) {
                            this._eachEntry(input[i], i)
                        }
                    }
                    ;
                    Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
                        var c = this._instanceConstructor;
                        var resolve$$1 = c.resolve;
                        if (resolve$$1 === resolve$1) {
                            var _then = getThen(entry);
                            if (_then === then && entry._state !== PENDING) {
                                this._settledAt(entry._state, i, entry._result)
                            } else if (typeof _then !== "function") {
                                this._remaining--;
                                this._result[i] = entry
                            } else if (c === Promise$1) {
                                var promise = new c(noop);
                                handleMaybeThenable(promise, entry, _then);
                                this._willSettleAt(promise, i)
                            } else {
                                this._willSettleAt(new c(function(resolve$$1) {
                                    return resolve$$1(entry)
                                }
                                ), i)
                            }
                        } else {
                            this._willSettleAt(resolve$$1(entry), i)
                        }
                    }
                    ;
                    Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
                        var promise = this.promise;
                        if (promise._state === PENDING) {
                            this._remaining--;
                            if (state === REJECTED) {
                                reject(promise, value)
                            } else {
                                this._result[i] = value
                            }
                        }
                        if (this._remaining === 0) {
                            fulfill(promise, this._result)
                        }
                    }
                    ;
                    Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
                        var enumerator = this;
                        subscribe(promise, undefined, function(value) {
                            return enumerator._settledAt(FULFILLED, i, value)
                        }, function(reason) {
                            return enumerator._settledAt(REJECTED, i, reason)
                        })
                    }
                    ;
                    return Enumerator
                }();
                function all(entries) {
                    return new Enumerator(this,entries).promise
                }
                function race(entries) {
                    var Constructor = this;
                    if (!isArray(entries)) {
                        return new Constructor(function(_, reject) {
                            return reject(new TypeError("You must pass an array to race."))
                        }
                        )
                    } else {
                        return new Constructor(function(resolve, reject) {
                            var length = entries.length;
                            for (var i = 0; i < length; i++) {
                                Constructor.resolve(entries[i]).then(resolve, reject)
                            }
                        }
                        )
                    }
                }
                function reject$1(reason) {
                    var Constructor = this;
                    var promise = new Constructor(noop);
                    reject(promise, reason);
                    return promise
                }
                function needsResolver() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }
                function needsNew() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }
                var Promise$1 = function() {
                    function Promise(resolver) {
                        this[PROMISE_ID] = nextId();
                        this._result = this._state = undefined;
                        this._subscribers = [];
                        if (noop !== resolver) {
                            typeof resolver !== "function" && needsResolver();
                            this instanceof Promise ? initializePromise(this, resolver) : needsNew()
                        }
                    }
                    Promise.prototype.catch = function _catch(onRejection) {
                        return this.then(null, onRejection)
                    }
                    ;
                    Promise.prototype.finally = function _finally(callback) {
                        var promise = this;
                        var constructor = promise.constructor;
                        return promise.then(function(value) {
                            return constructor.resolve(callback()).then(function() {
                                return value
                            })
                        }, function(reason) {
                            return constructor.resolve(callback()).then(function() {
                                throw reason
                            })
                        })
                    }
                    ;
                    return Promise
                }();
                Promise$1.prototype.then = then;
                Promise$1.all = all;
                Promise$1.race = race;
                Promise$1.resolve = resolve$1;
                Promise$1.reject = reject$1;
                Promise$1._setScheduler = setScheduler;
                Promise$1._setAsap = setAsap;
                Promise$1._asap = asap;
                function polyfill() {
                    var local = void 0;
                    if (typeof global !== "undefined") {
                        local = global
                    } else if (typeof self !== "undefined") {
                        local = self
                    } else {
                        try {
                            local = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                    }
                    var P = local.Promise;
                    if (P) {
                        var promiseToString = null;
                        try {
                            promiseToString = Object.prototype.toString.call(P.resolve())
                        } catch (e) {}
                        if (promiseToString === "[object Promise]" && !P.cast) {
                            return
                        }
                    }
                    local.Promise = Promise$1
                }
                Promise$1.polyfill = polyfill;
                Promise$1.Promise = Promise$1;
                return Promise$1
            })
        }
        ).call(exports, __webpack_require__(9), __webpack_require__(4))
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = inlineHeaders;
        var encode = __webpack_require__(45);
        function inlineHeaders(url, headers) {
            if (/\?/.test(url)) {
                url += "&"
            } else {
                url += "?"
            }
            return url + encode(headers)
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var stringifyPrimitive = function(v) {
            switch (typeof v) {
            case "string":
                return v;
            case "boolean":
                return v ? "true" : "false";
            case "number":
                return isFinite(v) ? v : "";
            default:
                return ""
            }
        };
        module.exports = function(obj, sep, eq, name) {
            sep = sep || "&";
            eq = eq || "=";
            if (obj === null) {
                obj = undefined
            }
            if (typeof obj === "object") {
                return map(objectKeys(obj), function(k) {
                    var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
                    if (isArray(obj[k])) {
                        return map(obj[k], function(v) {
                            return ks + encodeURIComponent(stringifyPrimitive(v))
                        }).join(sep)
                    } else {
                        return ks + encodeURIComponent(stringifyPrimitive(obj[k]))
                    }
                }).join(sep)
            }
            if (!name)
                return "";
            return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj))
        }
        ;
        var isArray = Array.isArray || function(xs) {
            return Object.prototype.toString.call(xs) === "[object Array]"
        }
        ;
        function map(xs, f) {
            if (xs.map)
                return xs.map(f);
            var res = [];
            for (var i = 0; i < xs.length; i++) {
                res.push(f(xs[i], i))
            }
            return res
        }
        var objectKeys = Object.keys || function(obj) {
            var res = [];
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                    res.push(key)
            }
            return res
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = jsonpRequest;
        var errors = __webpack_require__(5);
        var JSONPCounter = 0;
        function jsonpRequest(url, opts, cb) {
            if (opts.method !== "GET") {
                cb(new Error("Method " + opts.method + " " + url + " is not supported by JSONP."));
                return
            }
            opts.debug("JSONP: start");
            var cbCalled = false;
            var timedOut = false;
            JSONPCounter += 1;
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            var cbName = "algoliaJSONP_" + JSONPCounter;
            var done = false;
            window[cbName] = function(data) {
                removeGlobals();
                if (timedOut) {
                    opts.debug("JSONP: Late answer, ignoring");
                    return
                }
                cbCalled = true;
                clean();
                cb(null, {
                    body: data,
                    responseText: JSON.stringify(data)
                })
            }
            ;
            url += "&callback=" + cbName;
            if (opts.jsonBody && opts.jsonBody.params) {
                url += "&" + opts.jsonBody.params
            }
            var ontimeout = setTimeout(timeout, opts.timeouts.complete);
            script.onreadystatechange = readystatechange;
            script.onload = success;
            script.onerror = error;
            script.async = true;
            script.defer = true;
            script.src = url;
            head.appendChild(script);
            function success() {
                opts.debug("JSONP: success");
                if (done || timedOut) {
                    return
                }
                done = true;
                if (!cbCalled) {
                    opts.debug("JSONP: Fail. Script loaded but did not call the callback");
                    clean();
                    cb(new errors.JSONPScriptFail)
                }
            }
            function readystatechange() {
                if (this.readyState === "loaded" || this.readyState === "complete") {
                    success()
                }
            }
            function clean() {
                clearTimeout(ontimeout);
                script.onload = null;
                script.onreadystatechange = null;
                script.onerror = null;
                head.removeChild(script)
            }
            function removeGlobals() {
                try {
                    delete window[cbName];
                    delete window[cbName + "_loaded"]
                } catch (e) {
                    window[cbName] = window[cbName + "_loaded"] = undefined
                }
            }
            function timeout() {
                opts.debug("JSONP: Script timeout");
                timedOut = true;
                clean();
                cb(new errors.RequestTimeout)
            }
            function error() {
                opts.debug("JSONP: Script error");
                if (done || timedOut) {
                    return
                }
                clean();
                cb(new errors.JSONPScriptError)
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        module.exports = createPlacesClient;
        var buildSearchMethod = __webpack_require__(13);
        function createPlacesClient(algoliasearch) {
            return function places(appID, apiKey, opts) {
                var cloneDeep = __webpack_require__(3);
                opts = opts && cloneDeep(opts) || {};
                opts.hosts = opts.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"];
                if (arguments.length === 0 || typeof appID === "object" || appID === undefined) {
                    appID = "";
                    apiKey = "";
                    opts._allowEmptyCredentials = true
                }
                var client = algoliasearch(appID, apiKey, opts);
                var index = client.initIndex("places");
                index.search = buildSearchMethod("query", "/1/places/query");
                index.getObject = function(objectID, callback) {
                    return this.as._jsonRequest({
                        method: "GET",
                        url: "/1/places/" + encodeURIComponent(objectID),
                        hostType: "read",
                        callback: callback
                    })
                }
                ;
                return index
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = "3.30.0"
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(50)
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var zepto = __webpack_require__(15);
        var DOM = __webpack_require__(1);
        DOM.element = zepto;
        var _ = __webpack_require__(0);
        _.isArray = zepto.isArray;
        _.isFunction = zepto.isFunction;
        _.isObject = zepto.isPlainObject;
        _.bind = zepto.proxy;
        _.each = function(collection, cb) {
            zepto.each(collection, reverseArgs);
            function reverseArgs(index, value) {
                return cb(value, index)
            }
        }
        ;
        _.map = zepto.map;
        _.mixin = zepto.extend;
        _.Event = zepto.Event;
        var typeaheadKey = "aaAutocomplete";
        var Typeahead = __webpack_require__(51);
        var EventBus = __webpack_require__(16);
        function autocomplete(selector, options, datasets, typeaheadObject) {
            datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 2);
            var inputs = zepto(selector).each(function(i, input) {
                var $input = zepto(input);
                var eventBus = new EventBus({
                    el: $input
                });
                var typeahead = typeaheadObject || new Typeahead({
                    input: $input,
                    eventBus: eventBus,
                    dropdownMenuContainer: options.dropdownMenuContainer,
                    hint: options.hint === undefined ? true : !!options.hint,
                    minLength: options.minLength,
                    autoselect: options.autoselect,
                    autoselectOnBlur: options.autoselectOnBlur,
                    tabAutocomplete: options.tabAutocomplete,
                    openOnFocus: options.openOnFocus,
                    templates: options.templates,
                    debug: options.debug,
                    clearOnSelected: options.clearOnSelected,
                    cssClasses: options.cssClasses,
                    datasets: datasets,
                    keyboardShortcuts: options.keyboardShortcuts,
                    appendTo: options.appendTo,
                    autoWidth: options.autoWidth,
                    ariaLabel: options.ariaLabel || input.getAttribute("aria-label")
                });
                $input.data(typeaheadKey, typeahead)
            });
            inputs.autocomplete = {};
            _.each(["open", "close", "getVal", "setVal", "destroy", "getWrapper"], function(method) {
                inputs.autocomplete[method] = function() {
                    var methodArguments = arguments;
                    var result;
                    inputs.each(function(j, input) {
                        var typeahead = zepto(input).data(typeaheadKey);
                        result = typeahead[method].apply(typeahead, methodArguments)
                    });
                    return result
                }
            });
            return inputs
        }
        autocomplete.sources = Typeahead.sources;
        autocomplete.escapeHighlightedString = _.escapeHighlightedString;
        var wasAutocompleteSet = "autocomplete"in window;
        var oldAutocomplete = window.autocomplete;
        autocomplete.noConflict = function noConflict() {
            if (wasAutocompleteSet) {
                window.autocomplete = oldAutocomplete
            } else {
                delete window.autocomplete
            }
            return autocomplete
        }
        ;
        module.exports = autocomplete
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var attrsKey = "aaAttrs";
        var _ = __webpack_require__(0);
        var DOM = __webpack_require__(1);
        var EventBus = __webpack_require__(16);
        var Input = __webpack_require__(52);
        var Dropdown = __webpack_require__(59);
        var html = __webpack_require__(17);
        var css = __webpack_require__(11);
        function Typeahead(o) {
            var $menu;
            var $hint;
            o = o || {};
            if (!o.input) {
                _.error("missing input")
            }
            this.isActivated = false;
            this.debug = !!o.debug;
            this.autoselect = !!o.autoselect;
            this.autoselectOnBlur = !!o.autoselectOnBlur;
            this.openOnFocus = !!o.openOnFocus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.autoWidth = o.autoWidth === undefined ? true : !!o.autoWidth;
            this.clearOnSelected = !!o.clearOnSelected;
            this.tabAutocomplete = o.tabAutocomplete === undefined ? true : !!o.tabAutocomplete;
            o.hint = !!o.hint;
            if (o.hint && o.appendTo) {
                throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time")
            }
            this.css = o.css = _.mixin({}, css, o.appendTo ? css.appendTo : {});
            this.cssClasses = o.cssClasses = _.mixin({}, css.defaultClasses, o.cssClasses || {});
            this.cssClasses.prefix = o.cssClasses.formattedPrefix = _.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
            this.listboxId = o.listboxId = [this.cssClasses.root, "listbox", _.getUniqueId()].join("-");
            var domElts = buildDom(o);
            this.$node = domElts.wrapper;
            var $input = this.$input = domElts.input;
            $menu = domElts.menu;
            $hint = domElts.hint;
            if (o.dropdownMenuContainer) {
                DOM.element(o.dropdownMenuContainer).css("position", "relative").append($menu.css("top", "0"))
            }
            $input.on("blur.aa", function($e) {
                var active = document.activeElement;
                if (_.isMsie() && ($menu[0] === active || $menu[0].contains(active))) {
                    $e.preventDefault();
                    $e.stopImmediatePropagation();
                    _.defer(function() {
                        $input.focus()
                    })
                }
            });
            $menu.on("mousedown.aa", function($e) {
                $e.preventDefault()
            });
            this.eventBus = o.eventBus || new EventBus({
                el: $input
            });
            this.dropdown = new Typeahead.Dropdown({
                appendTo: o.appendTo,
                wrapper: this.$node,
                menu: $menu,
                datasets: o.datasets,
                templates: o.templates,
                cssClasses: o.cssClasses,
                minLength: this.minLength
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onSync("shown", this._onShown, this).onSync("empty", this._onEmpty, this).onSync("redrawn", this._onRedrawn, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Typeahead.Input({
                input: $input,
                hint: $hint
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._bindKeyboardShortcuts(o);
            this._setLanguageDirection()
        }
        _.mixin(Typeahead.prototype, {
            _bindKeyboardShortcuts: function(options) {
                if (!options.keyboardShortcuts) {
                    return
                }
                var $input = this.$input;
                var keyboardShortcuts = [];
                _.each(options.keyboardShortcuts, function(key) {
                    if (typeof key === "string") {
                        key = key.toUpperCase().charCodeAt(0)
                    }
                    keyboardShortcuts.push(key)
                });
                DOM.element(document).keydown(function(event) {
                    var elt = event.target || event.srcElement;
                    var tagName = elt.tagName;
                    if (elt.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA") {
                        return
                    }
                    var which = event.which || event.keyCode;
                    if (keyboardShortcuts.indexOf(which) === -1) {
                        return
                    }
                    $input.focus();
                    event.stopPropagation();
                    event.preventDefault()
                })
            },
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                var context = {
                    selectionMethod: "click"
                };
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum, context)
                }
            },
            _onCursorMoved: function onCursorMoved(event, updateInput) {
                var datum = this.dropdown.getDatumForCursor();
                var currentCursorId = this.dropdown.getCurrentCursor().attr("id");
                this.input.setActiveDescendant(currentCursorId);
                if (datum) {
                    if (updateInput) {
                        this.input.setInputValue(datum.value, true)
                    }
                    this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName)
                }
            },
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
                this.eventBus.trigger("cursorremoved")
            },
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
                this.eventBus.trigger("updated")
            },
            _onOpened: function onOpened() {
                this._updateHint();
                this.input.expand();
                this.eventBus.trigger("opened")
            },
            _onEmpty: function onEmpty() {
                this.eventBus.trigger("empty")
            },
            _onRedrawn: function onRedrawn() {
                this.$node.css("top", 0 + "px");
                this.$node.css("left", 0 + "px");
                var inputRect = this.$input[0].getBoundingClientRect();
                if (this.autoWidth) {
                    this.$node.css("width", inputRect.width + "px")
                }
                var wrapperRect = this.$node[0].getBoundingClientRect();
                var top = inputRect.bottom - wrapperRect.top;
                this.$node.css("top", top + "px");
                var left = inputRect.left - wrapperRect.left;
                this.$node.css("left", left + "px");
                this.eventBus.trigger("redrawn")
            },
            _onShown: function onShown() {
                this.eventBus.trigger("shown");
                if (this.autoselect) {
                    this.dropdown.cursorTopSuggestion()
                }
            },
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.input.removeActiveDescendant();
                this.input.collapse();
                this.eventBus.trigger("closed")
            },
            _onFocused: function onFocused() {
                this.isActivated = true;
                if (this.openOnFocus) {
                    var query = this.input.getQuery();
                    if (query.length >= this.minLength) {
                        this.dropdown.update(query)
                    } else {
                        this.dropdown.empty()
                    }
                    this.dropdown.open()
                }
            },
            _onBlurred: function onBlurred() {
                var cursorDatum;
                var topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                var context = {
                    selectionMethod: "blur"
                };
                if (!this.debug) {
                    if (this.autoselectOnBlur && cursorDatum) {
                        this._select(cursorDatum, context)
                    } else if (this.autoselectOnBlur && topSuggestionDatum) {
                        this._select(topSuggestionDatum, context)
                    } else {
                        this.isActivated = false;
                        this.dropdown.empty();
                        this.dropdown.close()
                    }
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum;
                var topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                var context = {
                    selectionMethod: "enterKey"
                };
                if (cursorDatum) {
                    this._select(cursorDatum, context);
                    $e.preventDefault()
                } else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum, context);
                    $e.preventDefault()
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                if (!this.tabAutocomplete) {
                    this.dropdown.close();
                    return
                }
                var datum;
                var context = {
                    selectionMethod: "tabKey"
                };
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum, context);
                    $e.preventDefault()
                } else {
                    this._autocomplete(true)
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue()
            },
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                if (this.dropdown.isEmpty && query.length >= this.minLength) {
                    this.dropdown.update(query)
                } else {
                    this.dropdown.moveCursorUp()
                }
                this.dropdown.open()
            },
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                if (this.dropdown.isEmpty && query.length >= this.minLength) {
                    this.dropdown.update(query)
                } else {
                    this.dropdown.moveCursorDown()
                }
                this.dropdown.open()
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl") {
                    this._autocomplete()
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr") {
                    this._autocomplete()
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                if (query.length >= this.minLength) {
                    this.dropdown.update(query)
                } else {
                    this.dropdown.empty()
                }
                this.dropdown.open();
                this._setLanguageDirection()
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open()
            },
            _setLanguageDirection: function setLanguageDirection() {
                var dir = this.input.getLanguageDirection();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir)
                }
            },
            _updateHint: function updateHint() {
                var datum;
                var val;
                var query;
                var escapedQuery;
                var frontMatchRegEx;
                var match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)","i");
                    match = frontMatchRegEx.exec(datum.value);
                    if (match) {
                        this.input.setHint(val + match[1])
                    } else {
                        this.input.clearHint()
                    }
                } else {
                    this.input.clearHint()
                }
            },
            _autocomplete: function autocomplete(laxCursor) {
                var hint;
                var query;
                var isCursorAtEnd;
                var datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    if (datum) {
                        this.input.setInputValue(datum.value)
                    }
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName)
                }
            },
            _select: function select(datum, context) {
                if (typeof datum.value !== "undefined") {
                    this.input.setQuery(datum.value)
                }
                if (this.clearOnSelected) {
                    this.setVal("")
                } else {
                    this.input.setInputValue(datum.value, true)
                }
                this._setLanguageDirection();
                var event = this.eventBus.trigger("selected", datum.raw, datum.datasetName, context);
                if (event.isDefaultPrevented() === false) {
                    this.dropdown.close();
                    _.defer(_.bind(this.dropdown.empty, this.dropdown))
                }
            },
            open: function open() {
                if (!this.isActivated) {
                    var query = this.input.getInputValue();
                    if (query.length >= this.minLength) {
                        this.dropdown.update(query)
                    } else {
                        this.dropdown.empty()
                    }
                }
                this.dropdown.open()
            },
            close: function close() {
                this.dropdown.close()
            },
            setVal: function setVal(val) {
                val = _.toStr(val);
                if (this.isActivated) {
                    this.input.setInputValue(val)
                } else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true)
                }
                this._setLanguageDirection()
            },
            getVal: function getVal() {
                return this.input.getQuery()
            },
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node, this.cssClasses);
                this.$node = null
            },
            getWrapper: function getWrapper() {
                return this.dropdown.$container[0]
            }
        });
        function buildDom(options) {
            var $input;
            var $wrapper;
            var $dropdown;
            var $hint;
            $input = DOM.element(options.input);
            $wrapper = DOM.element(html.wrapper.replace("%ROOT%", options.cssClasses.root)).css(options.css.wrapper);
            if (!options.appendTo && $input.css("display") === "block" && $input.parent().css("display") === "table") {
                $wrapper.css("display", "table-cell")
            }
            var dropdownHtml = html.dropdown.replace("%PREFIX%", options.cssClasses.prefix).replace("%DROPDOWN_MENU%", options.cssClasses.dropdownMenu);
            $dropdown = DOM.element(dropdownHtml).css(options.css.dropdown).attr({
                role: "listbox",
                id: options.listboxId
            });
            if (options.templates && options.templates.dropdownMenu) {
                $dropdown.html(_.templatify(options.templates.dropdownMenu)())
            }
            $hint = $input.clone().css(options.css.hint).css(getBackgroundStyles($input));
            $hint.val("").addClass(_.className(options.cssClasses.prefix, options.cssClasses.hint, true)).removeAttr("id name placeholder required").prop("readonly", true).attr({
                "aria-hidden": "true",
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            });
            if ($hint.removeData) {
                $hint.removeData()
            }
            $input.data(attrsKey, {
                "aria-autocomplete": $input.attr("aria-autocomplete"),
                "aria-expanded": $input.attr("aria-expanded"),
                "aria-owns": $input.attr("aria-owns"),
                autocomplete: $input.attr("autocomplete"),
                dir: $input.attr("dir"),
                role: $input.attr("role"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style"),
                type: $input.attr("type")
            });
            $input.addClass(_.className(options.cssClasses.prefix, options.cssClasses.input, true)).attr({
                autocomplete: "off",
                spellcheck: false,
                role: "combobox",
                "aria-autocomplete": options.datasets && options.datasets[0] && options.datasets[0].displayKey ? "both" : "list",
                "aria-expanded": "false",
                "aria-label": options.ariaLabel,
                "aria-owns": options.listboxId
            }).css(options.hint ? options.css.input : options.css.inputWithNoHint);
            try {
                if (!$input.attr("dir")) {
                    $input.attr("dir", "auto")
                }
            } catch (e) {}
            $wrapper = options.appendTo ? $wrapper.appendTo(DOM.element(options.appendTo).eq(0)).eq(0) : $input.wrap($wrapper).parent();
            $wrapper.prepend(options.hint ? $hint : null).append($dropdown);
            return {
                wrapper: $wrapper,
                input: $input,
                hint: $hint,
                menu: $dropdown
            }
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            }
        }
        function destroyDomStructure($node, cssClasses) {
            var $input = $node.find(_.className(cssClasses.prefix, cssClasses.input));
            _.each($input.data(attrsKey), function(val, key) {
                if (val === undefined) {
                    $input.removeAttr(key)
                } else {
                    $input.attr(key, val)
                }
            });
            $input.detach().removeClass(_.className(cssClasses.prefix, cssClasses.input, true)).insertAfter($node);
            if ($input.removeData) {
                $input.removeData(attrsKey)
            }
            $node.remove()
        }
        Typeahead.Dropdown = Dropdown;
        Typeahead.Input = Input;
        Typeahead.sources = __webpack_require__(61);
        module.exports = Typeahead
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        var _ = __webpack_require__(0);
        var DOM = __webpack_require__(1);
        var EventEmitter = __webpack_require__(10);
        function Input(o) {
            var that = this;
            var onBlur;
            var onFocus;
            var onKeydown;
            var onInput;
            o = o || {};
            if (!o.input) {
                _.error("input is missing")
            }
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = DOM.element(o.hint);
            this.$input = DOM.element(o.input).on("blur.aa", onBlur).on("focus.aa", onFocus).on("keydown.aa", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop
            }
            if (!_.isMsie()) {
                this.$input.on("input.aa", onInput)
            } else {
                this.$input.on("keydown.aa keypress.aa cut.aa paste.aa", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return
                    }
                    _.defer(_.bind(that._onInput, that, $e))
                })
            }
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input)
        }
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }
        ;
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.$input.removeAttr("aria-activedescendant");
                this.trigger("blurred")
            },
            _onFocus: function onFocus() {
                this.trigger("focused")
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e)
                }
            },
            _onInput: function onInput() {
                this._checkInputValue()
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                var hintValue;
                var inputValue;
                switch (keyName) {
                case "tab":
                    hintValue = this.getHint();
                    inputValue = this.getInputValue();
                    preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                    break;
                case "up":
                case "down":
                    preventDefault = !withModifier($e);
                    break;
                default:
                    preventDefault = false
                }
                if (preventDefault) {
                    $e.preventDefault()
                }
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                case "tab":
                    trigger = !withModifier($e);
                    break;
                default:
                    trigger = true
                }
                return trigger
            },
            _checkInputValue: function checkInputValue() {
                var inputValue;
                var areEquivalent;
                var hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent && this.query ? this.query.length !== inputValue.length : false;
                this.query = inputValue;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query)
                } else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query)
                }
            },
            focus: function focus() {
                this.$input.focus()
            },
            blur: function blur() {
                this.$input.blur()
            },
            getQuery: function getQuery() {
                return this.query
            },
            setQuery: function setQuery(query) {
                this.query = query
            },
            getInputValue: function getInputValue() {
                return this.$input.val()
            },
            setInputValue: function setInputValue(value, silent) {
                if (typeof value === "undefined") {
                    value = this.query
                }
                this.$input.val(value);
                if (silent) {
                    this.clearHint()
                } else {
                    this._checkInputValue()
                }
            },
            expand: function expand() {
                this.$input.attr("aria-expanded", "true")
            },
            collapse: function collapse() {
                this.$input.attr("aria-expanded", "false")
            },
            setActiveDescendant: function setActiveDescendant(activedescendantId) {
                this.$input.attr("aria-activedescendant", activedescendantId)
            },
            removeActiveDescendant: function removeActiveDescendant() {
                this.$input.removeAttr("aria-activedescendant")
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true)
            },
            getHint: function getHint() {
                return this.$hint.val()
            },
            setHint: function setHint(value) {
                this.$hint.val(value)
            },
            clearHint: function clearHint() {
                this.setHint("")
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val;
                var hint;
                var valIsPrefixOfHint;
                var isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                if (!isValid) {
                    this.clearHint()
                }
            },
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint
            },
            isCursorAtEnd: function() {
                var valueLength;
                var selectionStart;
                var range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length
                }
                return true
            },
            destroy: function destroy() {
                this.$hint.off(".aa");
                this.$input.off(".aa");
                this.$hint = this.$input = this.$overflowHelper = null
            }
        });
        function buildOverflowHelper($input) {
            return DOM.element('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input)
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b)
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey
        }
        module.exports = Input
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var types = [__webpack_require__(54), __webpack_require__(55), __webpack_require__(56), __webpack_require__(57), __webpack_require__(58)];
        var draining;
        var currentQueue;
        var queueIndex = -1;
        var queue = [];
        var scheduled = false;
        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue)
            } else {
                queueIndex = -1
            }
            if (queue.length) {
                nextTick()
            }
        }
        function nextTick() {
            if (draining) {
                return
            }
            scheduled = false;
            draining = true;
            var len = queue.length;
            var timeout = setTimeout(cleanUpNextTick);
            while (len) {
                currentQueue = queue;
                queue = [];
                while (currentQueue && ++queueIndex < len) {
                    currentQueue[queueIndex].run()
                }
                queueIndex = -1;
                len = queue.length
            }
            currentQueue = null;
            queueIndex = -1;
            draining = false;
            clearTimeout(timeout)
        }
        var scheduleDrain;
        var i = -1;
        var len = types.length;
        while (++i < len) {
            if (types[i] && types[i].test && types[i].test()) {
                scheduleDrain = types[i].install(nextTick);
                break
            }
        }
        function Item(fun, array) {
            this.fun = fun;
            this.array = array
        }
        Item.prototype.run = function() {
            var fun = this.fun;
            var array = this.array;
            switch (array.length) {
            case 0:
                return fun();
            case 1:
                return fun(array[0]);
            case 2:
                return fun(array[0], array[1]);
            case 3:
                return fun(array[0], array[1], array[2]);
            default:
                return fun.apply(null, array)
            }
        }
        ;
        module.exports = immediate;
        function immediate(task) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i]
                }
            }
            queue.push(new Item(task,args));
            if (!scheduled && !draining) {
                scheduled = true;
                scheduleDrain()
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        (function(process) {
            exports.test = function() {
                return typeof process !== "undefined" && !process.browser
            }
            ;
            exports.install = function(func) {
                return function() {
                    process.nextTick(func)
                }
            }
        }
        ).call(exports, __webpack_require__(9))
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        (function(global) {
            var Mutation = global.MutationObserver || global.WebKitMutationObserver;
            exports.test = function() {
                return Mutation
            }
            ;
            exports.install = function(handle) {
                var called = 0;
                var observer = new Mutation(handle);
                var element = global.document.createTextNode("");
                observer.observe(element, {
                    characterData: true
                });
                return function() {
                    element.data = called = ++called % 2
                }
            }
        }
        ).call(exports, __webpack_require__(4))
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        (function(global) {
            exports.test = function() {
                if (global.setImmediate) {
                    return false
                }
                return typeof global.MessageChannel !== "undefined"
            }
            ;
            exports.install = function(func) {
                var channel = new global.MessageChannel;
                channel.port1.onmessage = func;
                return function() {
                    channel.port2.postMessage(0)
                }
            }
        }
        ).call(exports, __webpack_require__(4))
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        (function(global) {
            exports.test = function() {
                return "document"in global && "onreadystatechange"in global.document.createElement("script")
            }
            ;
            exports.install = function(handle) {
                return function() {
                    var scriptEl = global.document.createElement("script");
                    scriptEl.onreadystatechange = function() {
                        handle();
                        scriptEl.onreadystatechange = null;
                        scriptEl.parentNode.removeChild(scriptEl);
                        scriptEl = null
                    }
                    ;
                    global.document.documentElement.appendChild(scriptEl);
                    return handle
                }
            }
        }
        ).call(exports, __webpack_require__(4))
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        exports.test = function() {
            return true
        }
        ;
        exports.install = function(t) {
            return function() {
                setTimeout(t, 0)
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var _ = __webpack_require__(0);
        var DOM = __webpack_require__(1);
        var EventEmitter = __webpack_require__(10);
        var Dataset = __webpack_require__(60);
        var css = __webpack_require__(11);
        function Dropdown(o) {
            var that = this;
            var onSuggestionClick;
            var onSuggestionMouseEnter;
            var onSuggestionMouseLeave;
            o = o || {};
            if (!o.menu) {
                _.error("menu is required")
            }
            if (!_.isArray(o.datasets) && !_.isObject(o.datasets)) {
                _.error("1 or more datasets required")
            }
            if (!o.datasets) {
                _.error("datasets is required")
            }
            this.isOpen = false;
            this.isEmpty = true;
            this.minLength = o.minLength || 0;
            this.templates = {};
            this.appendTo = o.appendTo || false;
            this.css = _.mixin({}, css, o.appendTo ? css.appendTo : {});
            this.cssClasses = o.cssClasses = _.mixin({}, css.defaultClasses, o.cssClasses || {});
            this.cssClasses.prefix = o.cssClasses.formattedPrefix || _.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            var cssClass = _.className(this.cssClasses.prefix, this.cssClasses.suggestion);
            this.$menu = DOM.element(o.menu).on("mouseenter.aa", cssClass, onSuggestionMouseEnter).on("mouseleave.aa", cssClass, onSuggestionMouseLeave).on("click.aa", cssClass, onSuggestionClick);
            this.$container = o.appendTo ? o.wrapper : this.$menu;
            if (o.templates && o.templates.header) {
                this.templates.header = _.templatify(o.templates.header);
                this.$menu.prepend(this.templates.header())
            }
            if (o.templates && o.templates.empty) {
                this.templates.empty = _.templatify(o.templates.empty);
                this.$empty = DOM.element('<div class="' + _.className(this.cssClasses.prefix, this.cssClasses.empty, true) + '">' + "</div>");
                this.$menu.append(this.$empty);
                this.$empty.hide()
            }
            this.datasets = _.map(o.datasets, function(oDataset) {
                return initializeDataset(that.$menu, oDataset, o.cssClasses)
            });
            _.each(this.datasets, function(dataset) {
                var root = dataset.getRoot();
                if (root && root.parent().length === 0) {
                    that.$menu.append(root)
                }
                dataset.onSync("rendered", that._onRendered, that)
            });
            if (o.templates && o.templates.footer) {
                this.templates.footer = _.templatify(o.templates.footer);
                this.$menu.append(this.templates.footer())
            }
            var self = this;
            DOM.element(window).resize(function() {
                self._redraw()
            })
        }
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", DOM.element($e.currentTarget))
            },
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                var elt = DOM.element($e.currentTarget);
                if (elt.hasClass(_.className(this.cssClasses.prefix, this.cssClasses.cursor, true))) {
                    return
                }
                this._removeCursor();
                var suggestion = this;
                setTimeout(function() {
                    suggestion._setCursor(elt, false)
                }, 0)
            },
            _onSuggestionMouseLeave: function onSuggestionMouseLeave($e) {
                if ($e.relatedTarget) {
                    var elt = DOM.element($e.relatedTarget);
                    if (elt.closest("." + _.className(this.cssClasses.prefix, this.cssClasses.cursor, true)).length > 0) {
                        return
                    }
                }
                this._removeCursor();
                this.trigger("cursorRemoved")
            },
            _onRendered: function onRendered(e, query) {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                if (this.isEmpty) {
                    if (query.length >= this.minLength) {
                        this.trigger("empty")
                    }
                    if (this.$empty) {
                        if (query.length < this.minLength) {
                            this._hide()
                        } else {
                            var html = this.templates.empty({
                                query: this.datasets[0] && this.datasets[0].query
                            });
                            this.$empty.html(html);
                            this.$empty.show();
                            this._show()
                        }
                    } else if (_.any(this.datasets, hasEmptyTemplate)) {
                        if (query.length < this.minLength) {
                            this._hide()
                        } else {
                            this._show()
                        }
                    } else {
                        this._hide()
                    }
                } else if (this.isOpen) {
                    if (this.$empty) {
                        this.$empty.empty();
                        this.$empty.hide()
                    }
                    if (query.length >= this.minLength) {
                        this._show()
                    } else {
                        this._hide()
                    }
                }
                this.trigger("datasetRendered");
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty()
                }
                function hasEmptyTemplate(dataset) {
                    return dataset.templates && dataset.templates.empty
                }
            },
            _hide: function() {
                this.$container.hide()
            },
            _show: function() {
                this.$container.css("display", "block");
                this._redraw();
                this.trigger("shown")
            },
            _redraw: function redraw() {
                if (!this.isOpen || !this.appendTo)
                    return;
                this.trigger("redrawn")
            },
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(_.className(this.cssClasses.prefix, this.cssClasses.suggestion))
            },
            _getCursor: function getCursor() {
                return this.$menu.find(_.className(this.cssClasses.prefix, this.cssClasses.cursor)).first()
            },
            _setCursor: function setCursor($el, updateInput) {
                $el.first().addClass(_.className(this.cssClasses.prefix, this.cssClasses.cursor, true)).attr("aria-selected", "true");
                this.trigger("cursorMoved", updateInput)
            },
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass(_.className(this.cssClasses.prefix, this.cssClasses.cursor, true)).removeAttr("aria-selected")
            },
            _moveCursor: function moveCursor(increment) {
                var $suggestions;
                var $oldCursor;
                var newCursorIndex;
                var $newCursor;
                if (!this.isOpen) {
                    return
                }
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return
                } else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1
                }
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex), true);
                this._ensureVisible($newCursor)
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop;
                var elBottom;
                var menuScrollTop;
                var menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.height() + parseInt($el.css("margin-top"), 10) + parseInt($el.css("margin-bottom"), 10);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("padding-top"), 10) + parseInt(this.$menu.css("padding-bottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop)
                } else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight))
                }
            },
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed")
                }
            },
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    if (!this.isEmpty) {
                        this._show()
                    }
                    this.trigger("opened")
                }
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? this.css.ltr : this.css.rtl)
            },
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1)
            },
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1)
            },
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                    }
                }
                return datum
            },
            getCurrentCursor: function getCurrentCursor() {
                return this._getCursor().first()
            },
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first())
            },
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            },
            cursorTopSuggestion: function cursorTopSuggestion() {
                this._setCursor(this._getSuggestions().first(), false)
            },
            update: function update(query) {
                _.each(this.datasets, updateDataset);
                function updateDataset(dataset) {
                    dataset.update(query)
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;
                function clearDataset(dataset) {
                    dataset.clear()
                }
            },
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty
            },
            destroy: function destroy() {
                this.$menu.off(".aa");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy()
                }
            }
        });
        Dropdown.Dataset = Dataset;
        function initializeDataset($menu, oDataset, cssClasses) {
            return new Dropdown.Dataset(_.mixin({
                $menu: $menu,
                cssClasses: cssClasses
            }, oDataset))
        }
        module.exports = Dropdown
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var datasetKey = "aaDataset";
        var valueKey = "aaValue";
        var datumKey = "aaDatum";
        var _ = __webpack_require__(0);
        var DOM = __webpack_require__(1);
        var html = __webpack_require__(17);
        var css = __webpack_require__(11);
        var EventEmitter = __webpack_require__(10);
        function Dataset(o) {
            o = o || {};
            o.templates = o.templates || {};
            if (!o.source) {
                _.error("missing source")
            }
            if (o.name && !isValidName(o.name)) {
                _.error("invalid dataset name: " + o.name)
            }
            this.query = null;
            this._isEmpty = true;
            this.highlight = !!o.highlight;
            this.name = typeof o.name === "undefined" || o.name === null ? _.getUniqueId() : o.name;
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.debounce = o.debounce;
            this.cache = o.cache !== false;
            this.templates = getTemplates(o.templates, this.displayFn);
            this.css = _.mixin({}, css, o.appendTo ? css.appendTo : {});
            this.cssClasses = o.cssClasses = _.mixin({}, css.defaultClasses, o.cssClasses || {});
            this.cssClasses.prefix = o.cssClasses.formattedPrefix || _.formatPrefix(this.cssClasses.prefix, this.cssClasses.noPrefix);
            var clazz = _.className(this.cssClasses.prefix, this.cssClasses.dataset);
            this.$el = o.$menu && o.$menu.find(clazz + "-" + this.name).length > 0 ? DOM.element(o.$menu.find(clazz + "-" + this.name)[0]) : DOM.element(html.dataset.replace("%CLASS%", this.name).replace("%PREFIX%", this.cssClasses.prefix).replace("%DATASET%", this.cssClasses.dataset));
            this.$menu = o.$menu;
            this.clearCachedSuggestions()
        }
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return DOM.element(el).data(datasetKey)
        }
        ;
        Dataset.extractValue = function extractValue(el) {
            return DOM.element(el).data(valueKey)
        }
        ;
        Dataset.extractDatum = function extractDatum(el) {
            var datum = DOM.element(el).data(datumKey);
            if (typeof datum === "string") {
                datum = JSON.parse(datum)
            }
            return datum
        }
        ;
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return
                }
                var that = this;
                var hasSuggestions;
                var renderArgs = [].slice.call(arguments, 2);
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                this._isEmpty = !hasSuggestions;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml.apply(this, renderArgs)).prepend(that.templates.header ? getHeaderHtml.apply(this, renderArgs) : null).append(that.templates.footer ? getFooterHtml.apply(this, renderArgs) : null)
                } else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml.apply(this, renderArgs)).prepend(that.templates.header ? getHeaderHtml.apply(this, renderArgs) : null).append(that.templates.footer ? getFooterHtml.apply(this, renderArgs) : null)
                } else if (suggestions && !Array.isArray(suggestions)) {
                    throw new TypeError("suggestions must be an array")
                }
                if (this.$menu) {
                    this.$menu.addClass(this.cssClasses.prefix + (hasSuggestions ? "with" : "without") + "-" + this.name).removeClass(this.cssClasses.prefix + (hasSuggestions ? "without" : "with") + "-" + this.name)
                }
                this.trigger("rendered", query);
                function getEmptyHtml() {
                    var args = [].slice.call(arguments, 0);
                    args = [{
                        query: query,
                        isEmpty: true
                    }].concat(args);
                    return that.templates.empty.apply(this, args)
                }
                function getSuggestionsHtml() {
                    var args = [].slice.call(arguments, 0);
                    var $suggestions;
                    var nodes;
                    var self = this;
                    var suggestionsHtml = html.suggestions.replace("%PREFIX%", this.cssClasses.prefix).replace("%SUGGESTIONS%", this.cssClasses.suggestions);
                    $suggestions = DOM.element(suggestionsHtml).css(this.css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    return $suggestions;
                    function getSuggestionNode(suggestion) {
                        var $el;
                        var suggestionHtml = html.suggestion.replace("%PREFIX%", self.cssClasses.prefix).replace("%SUGGESTION%", self.cssClasses.suggestion);
                        $el = DOM.element(suggestionHtml).attr({
                            role: "option",
                            id: ["option", Math.floor(Math.random() * 1e8)].join("-")
                        }).append(that.templates.suggestion.apply(this, [suggestion].concat(args)));
                        $el.data(datasetKey, that.name);
                        $el.data(valueKey, that.displayFn(suggestion) || undefined);
                        $el.data(datumKey, JSON.stringify(suggestion));
                        $el.children().each(function() {
                            DOM.element(this).css(self.css.suggestionChild)
                        });
                        return $el
                    }
                }
                function getHeaderHtml() {
                    var args = [].slice.call(arguments, 0);
                    args = [{
                        query: query,
                        isEmpty: !hasSuggestions
                    }].concat(args);
                    return that.templates.header.apply(this, args)
                }
                function getFooterHtml() {
                    var args = [].slice.call(arguments, 0);
                    args = [{
                        query: query,
                        isEmpty: !hasSuggestions
                    }].concat(args);
                    return that.templates.footer.apply(this, args)
                }
            },
            getRoot: function getRoot() {
                return this.$el
            },
            update: function update(query) {
                function handleSuggestions(suggestions) {
                    if (!this.canceled && query === this.query) {
                        var extraArgs = [].slice.call(arguments, 1);
                        this.cacheSuggestions(query, suggestions, extraArgs);
                        this._render.apply(this, [query, suggestions].concat(extraArgs))
                    }
                }
                this.query = query;
                this.canceled = false;
                if (this.shouldFetchFromCache(query)) {
                    handleSuggestions.apply(this, [this.cachedSuggestions].concat(this.cachedRenderExtraArgs))
                } else {
                    var that = this;
                    var execSource = function() {
                        if (!that.canceled) {
                            that.source(query, handleSuggestions.bind(that))
                        }
                    };
                    if (this.debounce) {
                        var later = function() {
                            that.debounceTimeout = null;
                            execSource()
                        };
                        clearTimeout(this.debounceTimeout);
                        this.debounceTimeout = setTimeout(later, this.debounce)
                    } else {
                        execSource()
                    }
                }
            },
            cacheSuggestions: function cacheSuggestions(query, suggestions, extraArgs) {
                this.cachedQuery = query;
                this.cachedSuggestions = suggestions;
                this.cachedRenderExtraArgs = extraArgs
            },
            shouldFetchFromCache: function shouldFetchFromCache(query) {
                return this.cache && this.cachedQuery === query && this.cachedSuggestions && this.cachedSuggestions.length
            },
            clearCachedSuggestions: function clearCachedSuggestions() {
                delete this.cachedQuery;
                delete this.cachedSuggestions;
                delete this.cachedRenderExtraArgs
            },
            cancel: function cancel() {
                this.canceled = true
            },
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered", "")
            },
            isEmpty: function isEmpty() {
                return this._isEmpty
            },
            destroy: function destroy() {
                this.clearCachedSuggestions();
                this.$el = null
            }
        });
        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display]
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
            };
            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>"
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str)
        }
        module.exports = Dataset
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = {
            hits: __webpack_require__(62),
            popularIn: __webpack_require__(63)
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var _ = __webpack_require__(0);
        var version = __webpack_require__(18);
        var parseAlgoliaClientVersion = __webpack_require__(19);
        module.exports = function search(index, params) {
            var algoliaVersion = parseAlgoliaClientVersion(index.as._ua);
            if (algoliaVersion && algoliaVersion[0] >= 3 && algoliaVersion[1] > 20) {
                params = params || {};
                params.additionalUA = "autocomplete.js " + version
            }
            return sourceFn;
            function sourceFn(query, cb) {
                index.search(query, params, function(error, content) {
                    if (error) {
                        _.error(error.message);
                        return
                    }
                    cb(content.hits, content)
                })
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        var _ = __webpack_require__(0);
        var version = __webpack_require__(18);
        var parseAlgoliaClientVersion = __webpack_require__(19);
        module.exports = function popularIn(index, params, details, options) {
            var algoliaVersion = parseAlgoliaClientVersion(index.as._ua);
            if (algoliaVersion && algoliaVersion[0] >= 3 && algoliaVersion[1] > 20) {
                params = params || {};
                params.additionalUA = "autocomplete.js " + version
            }
            if (!details.source) {
                return _.error("Missing 'source' key")
            }
            var source = _.isFunction(details.source) ? details.source : function(hit) {
                return hit[details.source]
            }
            ;
            if (!details.index) {
                return _.error("Missing 'index' key")
            }
            var detailsIndex = details.index;
            options = options || {};
            return sourceFn;
            function sourceFn(query, cb) {
                index.search(query, params, function(error, content) {
                    if (error) {
                        _.error(error.message);
                        return
                    }
                    if (content.hits.length > 0) {
                        var first = content.hits[0];
                        var detailsParams = _.mixin({
                            hitsPerPage: 0
                        }, details);
                        delete detailsParams.source;
                        delete detailsParams.index;
                        var detailsAlgoliaVersion = parseAlgoliaClientVersion(detailsIndex.as._ua);
                        if (detailsAlgoliaVersion && detailsAlgoliaVersion[0] >= 3 && detailsAlgoliaVersion[1] > 20) {
                            params.additionalUA = "autocomplete.js " + version
                        }
                        detailsIndex.search(source(first), detailsParams, function(error2, content2) {
                            if (error2) {
                                _.error(error2.message);
                                return
                            }
                            var suggestions = [];
                            if (options.includeAll) {
                                var label = options.allTitle || "All departments";
                                suggestions.push(_.mixin({
                                    facet: {
                                        value: label,
                                        count: content2.nbHits
                                    }
                                }, _.cloneDeep(first)))
                            }
                            _.each(content2.facets, function(values, facet) {
                                _.each(values, function(count, value) {
                                    suggestions.push(_.mixin({
                                        facet: {
                                            facet: facet,
                                            value: value,
                                            count: count
                                        }
                                    }, _.cloneDeep(first)))
                                })
                            });
                            for (var i = 1; i < content.hits.length; ++i) {
                                suggestions.push(content.hits[i])
                            }
                            cb(suggestions, content)
                        });
                        return
                    }
                    cb([])
                })
            }
        }
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var prefix = "algolia-docsearch";
        var suggestionPrefix = prefix + "-suggestion";
        var footerPrefix = prefix + "-footer";
        var templates = {
            suggestion: '\n  <a class="' + suggestionPrefix + "\n    {{#isCategoryHeader}}" + suggestionPrefix + "__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}" + suggestionPrefix + '__secondary{{/isSubCategoryHeader}}\n    "\n    aria-label="Link to the result"\n    href="{{{url}}}"\n    >\n    <div class="' + suggestionPrefix + '--category-header">\n        <span class="' + suggestionPrefix + '--category-header-lvl0">{{{category}}}</span>\n    </div>\n    <div class="' + suggestionPrefix + '--wrapper">\n      <div class="' + suggestionPrefix + '--subcategory-column">\n        <span class="' + suggestionPrefix + '--subcategory-column-text">{{{subcategory}}}</span>\n      </div>\n      {{#isTextOrSubcategoryNonEmpty}}\n      <div class="' + suggestionPrefix + '--content">\n        <div class="' + suggestionPrefix + '--subcategory-inline">{{{subcategory}}}</div>\n        <div class="' + suggestionPrefix + '--title">{{{title}}}</div>\n        {{#text}}<div class="' + suggestionPrefix + '--text">{{{text}}}</div>{{/text}}\n      </div>\n      {{/isTextOrSubcategoryNonEmpty}}\n    </div>\n  </a>\n  ',
            suggestionSimple: '\n  <div class="' + suggestionPrefix + "\n    {{#isCategoryHeader}}" + suggestionPrefix + "__main{{/isCategoryHeader}}\n    {{#isSubCategoryHeader}}" + suggestionPrefix + '__secondary{{/isSubCategoryHeader}}\n    suggestion-layout-simple\n  ">\n    <div class="' + suggestionPrefix + '--category-header">\n        {{^isLvl0}}\n        <span class="' + suggestionPrefix + "--category-header-lvl0 " + suggestionPrefix + '--category-header-item">{{{category}}}</span>\n          {{^isLvl1}}\n          {{^isLvl1EmptyOrDuplicate}}\n          <span class="' + suggestionPrefix + "--category-header-lvl1 " + suggestionPrefix + '--category-header-item">\n              {{{subcategory}}}\n          </span>\n          {{/isLvl1EmptyOrDuplicate}}\n          {{/isLvl1}}\n        {{/isLvl0}}\n        <div class="' + suggestionPrefix + "--title " + suggestionPrefix + '--category-header-item">\n            {{#isLvl2}}\n                {{{title}}}\n            {{/isLvl2}}\n            {{#isLvl1}}\n                {{{subcategory}}}\n            {{/isLvl1}}\n            {{#isLvl0}}\n                {{{category}}}\n            {{/isLvl0}}\n        </div>\n    </div>\n    <div class="' + suggestionPrefix + '--wrapper">\n      {{#text}}\n      <div class="' + suggestionPrefix + '--content">\n        <div class="' + suggestionPrefix + '--text">{{{text}}}</div>\n      </div>\n      {{/text}}\n    </div>\n  </div>\n  ',
            footer: '\n    <div class="' + footerPrefix + '">\n      Search by <a class="' + footerPrefix + '--logo" href="https://www.algolia.com/docsearch">Algolia</a>\n    </div>\n  ',
            empty: '\n  <div class="' + suggestionPrefix + '">\n    <div class="' + suggestionPrefix + '--wrapper">\n        <div class="' + suggestionPrefix + "--content " + suggestionPrefix + '--no-results">\n            <div class="' + suggestionPrefix + '--title">\n                <div class="' + suggestionPrefix + '--text">\n                    No results found for query <b>"{{query}}"</b>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  ',
            searchBox: '\n  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">\n    <div role="search" class="searchbox__wrapper">\n      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>\n      <button type="submit" title="Submit your search query." class="searchbox__submit" >\n        <svg width=12 height=12 role="img" aria-label="Search">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>\n        </svg>\n      </button>\n      <button type="reset" title="Clear the search query." class="searchbox__reset hide">\n        <svg width=12 height=12 role="img" aria-label="Reset">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>\n        </svg>\n      </button>\n    </div>\n</form>\n\n<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">\n  <svg xmlns="http://www.w3.org/2000/svg">\n    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>\n    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>\n  </svg>\n</div>\n  '
        };
        exports.default = templates
    }
    , function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj
        }
        : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
        ;
        var _zepto = __webpack_require__(20);
        var _zepto2 = _interopRequireDefault(_zepto);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            }
        }
        var utils = {
            mergeKeyWithParent: function mergeKeyWithParent(object, property) {
                if (object[property] === undefined) {
                    return object
                }
                if (_typeof(object[property]) !== "object") {
                    return object
                }
                var newObject = _zepto2.default.extend({}, object, object[property]);
                delete newObject[property];
                return newObject
            },
            groupBy: function groupBy(collection, property) {
                var newCollection = {};
                _zepto2.default.each(collection, function(index, item) {
                    if (item[property] === undefined) {
                        throw new Error("[groupBy]: Object has no key " + property)
                    }
                    var key = item[property];
                    if (typeof key === "string") {
                        key = key.toLowerCase()
                    }
                    if (!Object.prototype.hasOwnProperty.call(newCollection, key)) {
                        newCollection[key] = []
                    }
                    newCollection[key].push(item)
                });
                return newCollection
            },
            values: function values(object) {
                return Object.keys(object).map(function(key) {
                    return object[key]
                })
            },
            flatten: function flatten(array) {
                var results = [];
                array.forEach(function(value) {
                    if (!Array.isArray(value)) {
                        results.push(value);
                        return
                    }
                    value.forEach(function(subvalue) {
                        results.push(subvalue)
                    })
                });
                return results
            },
            flattenAndFlagFirst: function flattenAndFlagFirst(object, flag) {
                var values = this.values(object).map(function(collection) {
                    return collection.map(function(item, index) {
                        item[flag] = index === 0;
                        return item
                    })
                });
                return this.flatten(values)
            },
            compact: function compact(array) {
                var results = [];
                array.forEach(function(value) {
                    if (!value) {
                        return
                    }
                    results.push(value)
                });
                return results
            },
            getHighlightedValue: function getHighlightedValue(object, property) {
                if (object._highlightResult && object._highlightResult.hierarchy_camel && object._highlightResult.hierarchy_camel[property] && object._highlightResult.hierarchy_camel[property].matchLevel && object._highlightResult.hierarchy_camel[property].matchLevel !== "none" && object._highlightResult.hierarchy_camel[property].value) {
                    return object._highlightResult.hierarchy_camel[property].value
                }
                if (object._highlightResult && object._highlightResult && object._highlightResult[property] && object._highlightResult[property].value) {
                    return object._highlightResult[property].value
                }
                return object[property]
            },
            getSnippetedValue: function getSnippetedValue(object, property) {
                if (!object._snippetResult || !object._snippetResult[property] || !object._snippetResult[property].value) {
                    return object[property]
                }
                var snippet = object._snippetResult[property].value;
                if (snippet[0] !== snippet[0].toUpperCase()) {
                    snippet = "…" + snippet
                }
                if ([".", "!", "?"].indexOf(snippet[snippet.length - 1]) === -1) {
                    snippet = snippet + "…"
                }
                return snippet
            },
            deepClone: function deepClone(object) {
                return JSON.parse(JSON.stringify(object))
            }
        };
        exports.default = utils
    }
    ])
});

!function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : (t.AnchorJS = e(),
    t.anchors = new t.AnchorJS)
}(this, function() {
    "use strict";
    return function(t) {
        function d(t) {
            t.icon = t.hasOwnProperty("icon") ? t.icon : "",
            t.visible = t.hasOwnProperty("visible") ? t.visible : "hover",
            t.placement = t.hasOwnProperty("placement") ? t.placement : "right",
            t.ariaLabel = t.hasOwnProperty("ariaLabel") ? t.ariaLabel : "Anchor",
            t.class = t.hasOwnProperty("class") ? t.class : "",
            t.base = t.hasOwnProperty("base") ? t.base : "",
            t.truncate = t.hasOwnProperty("truncate") ? Math.floor(t.truncate) : 64,
            t.titleText = t.hasOwnProperty("titleText") ? t.titleText : ""
        }
        function p(t) {
            var e;
            if ("string" == typeof t || t instanceof String)
                e = [].slice.call(document.querySelectorAll(t));
            else {
                if (!(Array.isArray(t) || t instanceof NodeList))
                    throw new Error("The selector provided to AnchorJS was invalid.");
                e = [].slice.call(t)
            }
            return e
        }
        this.options = t || {},
        this.elements = [],
        d(this.options),
        this.isTouchDevice = function() {
            return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
        }
        ,
        this.add = function(t) {
            var e, n, o, i, r, A, a, l, s, c, u, f, h = [];
            if (d(this.options),
            "touch" === (u = this.options.visible) && (u = this.isTouchDevice() ? "always" : "hover"),
            0 === (e = p(t = t || "h2, h3, h4, h5, h6")).length)
                return this;
            for (!function() {
                if (null !== document.head.querySelector("style.anchorjs"))
                    return;
                var t, e = document.createElement("style");
                e.className = "anchorjs",
                e.appendChild(document.createTextNode("")),
                void 0 === (t = document.head.querySelector('[rel="stylesheet"], style')) ? document.head.appendChild(e) : document.head.insertBefore(e, t);
                e.sheet.insertRule(" .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }", e.sheet.cssRules.length),
                e.sheet.insertRule(" *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }", e.sheet.cssRules.length),
                e.sheet.insertRule(" [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }", e.sheet.cssRules.length),
                e.sheet.insertRule(' @font-face {   font-family: "anchorjs-icons";   src: url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype"); }', e.sheet.cssRules.length)
            }(),
            n = document.querySelectorAll("[id]"),
            o = [].map.call(n, function(t) {
                return t.id
            }),
            r = 0; r < e.length; r++)
                if (this.hasAnchorJSLink(e[r]))
                    h.push(r);
                else {
                    if (e[r].hasAttribute("id"))
                        i = e[r].getAttribute("id");
                    else if (e[r].hasAttribute("data-anchor-id"))
                        i = e[r].getAttribute("data-anchor-id");
                    else {
                        for (s = l = this.urlify(e[r].textContent),
                        a = 0; void 0 !== A && (s = l + "-" + a),
                        a += 1,
                        -1 !== (A = o.indexOf(s)); )
                            ;
                        A = void 0,
                        o.push(s),
                        e[r].setAttribute("id", s),
                        i = s
                    }
                    (c = document.createElement("a")).className = "anchorjs-link " + this.options.class,
                    c.setAttribute("aria-label", this.options.ariaLabel),
                    c.setAttribute("data-anchorjs-icon", this.options.icon),
                    this.options.titleText && (c.title = this.options.titleText),
                    f = document.querySelector("base") ? window.location.pathname + window.location.search : "",
                    f = this.options.base || f,
                    c.href = f + "#" + i,
                    "always" === u && (c.style.opacity = "1"),
                    "" === this.options.icon && (c.style.font = "1em/1 anchorjs-icons",
                    "left" === this.options.placement && (c.style.lineHeight = "inherit")),
                    "left" === this.options.placement ? (c.style.position = "absolute",
                    c.style.marginLeft = "-1em",
                    c.style.paddingRight = "0.5em",
                    e[r].insertBefore(c, e[r].firstChild)) : (c.style.paddingLeft = "0.375em",
                    e[r].appendChild(c))
                }
            for (r = 0; r < h.length; r++)
                e.splice(h[r] - r, 1);
            return this.elements = this.elements.concat(e),
            this
        }
        ,
        this.remove = function(t) {
            for (var e, n, o = p(t), i = 0; i < o.length; i++)
                (n = o[i].querySelector(".anchorjs-link")) && (-1 !== (e = this.elements.indexOf(o[i])) && this.elements.splice(e, 1),
                o[i].removeChild(n));
            return this
        }
        ,
        this.removeAll = function() {
            this.remove(this.elements)
        }
        ,
        this.urlify = function(t) {
            return this.options.truncate || d(this.options),
            t.trim().replace(/\'/gi, "").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g, "-").replace(/-{2,}/g, "-").substring(0, this.options.truncate).replace(/^-+|-+$/gm, "").toLowerCase()
        }
        ,
        this.hasAnchorJSLink = function(t) {
            var e = t.firstChild && -1 < (" " + t.firstChild.className + " ").indexOf(" anchorjs-link ")
              , n = t.lastChild && -1 < (" " + t.lastChild.className + " ").indexOf(" anchorjs-link ");
            return e || n || !1
        }
    }
});
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(n) {
        var o = {};
        function i(t) {
            if (o[t])
                return o[t].exports;
            var e = o[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return n[t].call(e.exports, e, e.exports, i),
            e.l = !0,
            e.exports
        }
        return i.m = n,
        i.c = o,
        i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        i.t = function(e, t) {
            if (1 & t && (e = i(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (i.r(n),
            Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }),
            2 & t && "string" != typeof e)
                for (var o in e)
                    i.d(n, o, function(t) {
                        return e[t]
                    }
                    .bind(null, o));
            return n
        }
        ,
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return i.d(e, "a", e),
            e
        }
        ,
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",
        i(i.s = 0)
    }([function(t, e, n) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
          , r = function() {
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                t
            }
        }()
          , A = o(n(1))
          , a = o(n(3))
          , l = o(n(4));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var s = function(t) {
            function o(t, e) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, o);
                var n = function(t, e) {
                    if (!t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
                return n.resolveOptions(e),
                n.listenClick(t),
                n
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }(o, a.default),
            r(o, [{
                key: "resolveOptions",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                    this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                    this.text = "function" == typeof t.text ? t.text : this.defaultText,
                    this.container = "object" === i(t.container) ? t.container : document.body
                }
            }, {
                key: "listenClick",
                value: function(t) {
                    var e = this;
                    this.listener = (0,
                    l.default)(t, "click", function(t) {
                        return e.onClick(t)
                    })
                }
            }, {
                key: "onClick",
                value: function(t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new A.default({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        container: this.container,
                        trigger: e,
                        emitter: this
                    })
                }
            }, {
                key: "defaultAction",
                value: function(t) {
                    return c("action", t)
                }
            }, {
                key: "defaultTarget",
                value: function(t) {
                    var e = c("target", t);
                    if (e)
                        return document.querySelector(e)
                }
            }, {
                key: "defaultText",
                value: function(t) {
                    return c("text", t)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(),
                    this.clipboardAction = null)
                }
            }], [{
                key: "isSupported",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"]
                      , e = "string" == typeof t ? [t] : t
                      , n = !!document.queryCommandSupported;
                    return e.forEach(function(t) {
                        n = n && !!document.queryCommandSupported(t)
                    }),
                    n
                }
            }]),
            o
        }();
        function c(t, e) {
            var n = "data-clipboard-" + t;
            if (e.hasAttribute(n))
                return e.getAttribute(n)
        }
        t.exports = s
    }
    , function(t, e, n) {
        "use strict";
        var o, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        , r = function() {
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value"in o && (o.writable = !0),
                    Object.defineProperty(t, o.key, o)
                }
            }
            return function(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                t
            }
        }(), A = n(2), a = (o = A) && o.__esModule ? o : {
            default: o
        };
        var l = function() {
            function e(t) {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                this.resolveOptions(t),
                this.initSelection()
            }
            return r(e, [{
                key: "resolveOptions",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    this.action = t.action,
                    this.container = t.container,
                    this.emitter = t.emitter,
                    this.target = t.target,
                    this.text = t.text,
                    this.trigger = t.trigger,
                    this.selectedText = ""
                }
            }, {
                key: "initSelection",
                value: function() {
                    this.text ? this.selectFake() : this.target && this.selectTarget()
                }
            }, {
                key: "selectFake",
                value: function() {
                    var t = this
                      , e = "rtl" == document.documentElement.getAttribute("dir");
                    this.removeFake(),
                    this.fakeHandlerCallback = function() {
                        return t.removeFake()
                    }
                    ,
                    this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                    this.fakeElem = document.createElement("textarea"),
                    this.fakeElem.style.fontSize = "12pt",
                    this.fakeElem.style.border = "0",
                    this.fakeElem.style.padding = "0",
                    this.fakeElem.style.margin = "0",
                    this.fakeElem.style.position = "absolute",
                    this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                    var n = window.pageYOffset || document.documentElement.scrollTop;
                    this.fakeElem.style.top = n + "px",
                    this.fakeElem.setAttribute("readonly", ""),
                    this.fakeElem.value = this.text,
                    this.container.appendChild(this.fakeElem),
                    this.selectedText = (0,
                    a.default)(this.fakeElem),
                    this.copyText()
                }
            }, {
                key: "removeFake",
                value: function() {
                    this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback),
                    this.fakeHandler = null,
                    this.fakeHandlerCallback = null),
                    this.fakeElem && (this.container.removeChild(this.fakeElem),
                    this.fakeElem = null)
                }
            }, {
                key: "selectTarget",
                value: function() {
                    this.selectedText = (0,
                    a.default)(this.target),
                    this.copyText()
                }
            }, {
                key: "copyText",
                value: function() {
                    var e = void 0;
                    try {
                        e = document.execCommand(this.action)
                    } catch (t) {
                        e = !1
                    }
                    this.handleResult(e)
                }
            }, {
                key: "handleResult",
                value: function(t) {
                    this.emitter.emit(t ? "success" : "error", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
            }, {
                key: "clearSelection",
                value: function() {
                    this.trigger && this.trigger.focus(),
                    window.getSelection().removeAllRanges()
                }
            }, {
                key: "destroy",
                value: function() {
                    this.removeFake()
                }
            }, {
                key: "action",
                set: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
                    if (this._action = t,
                    "copy" !== this._action && "cut" !== this._action)
                        throw new Error('Invalid "action" value, use either "copy" or "cut"')
                },
                get: function() {
                    return this._action
                }
            }, {
                key: "target",
                set: function(t) {
                    if (void 0 !== t) {
                        if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType)
                            throw new Error('Invalid "target" value, use a valid Element');
                        if ("copy" === this.action && t.hasAttribute("disabled"))
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        this._target = t
                    }
                },
                get: function() {
                    return this._target
                }
            }]),
            e
        }();
        t.exports = l
    }
    , function(t, e) {
        t.exports = function(t) {
            var e;
            if ("SELECT" === t.nodeName)
                t.focus(),
                e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""),
                t.select(),
                t.setSelectionRange(0, t.value.length),
                n || t.removeAttribute("readonly"),
                e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection()
                  , i = document.createRange();
                i.selectNodeContents(t),
                o.removeAllRanges(),
                o.addRange(i),
                e = o.toString()
            }
            return e
        }
    }
    , function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }),
                this
            },
            once: function(t, e, n) {
                var o = this;
                function i() {
                    o.off(t, i),
                    e.apply(n, arguments)
                }
                return i._ = e,
                this.on(t, i, n)
            },
            emit: function(t) {
                for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, i = n.length; o < i; o++)
                    n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {})
                  , o = n[t]
                  , i = [];
                if (o && e)
                    for (var r = 0, A = o.length; r < A; r++)
                        o[r].fn !== e && o[r].fn._ !== e && i.push(o[r]);
                return i.length ? n[t] = i : delete n[t],
                this
            }
        },
        t.exports = n
    }
    , function(t, e, n) {
        var f = n(5)
          , h = n(6);
        t.exports = function(t, e, n) {
            if (!t && !e && !n)
                throw new Error("Missing required arguments");
            if (!f.string(e))
                throw new TypeError("Second argument must be a String");
            if (!f.fn(n))
                throw new TypeError("Third argument must be a Function");
            if (f.node(t))
                return c = e,
                u = n,
                (s = t).addEventListener(c, u),
                {
                    destroy: function() {
                        s.removeEventListener(c, u)
                    }
                };
            if (f.nodeList(t))
                return A = t,
                a = e,
                l = n,
                Array.prototype.forEach.call(A, function(t) {
                    t.addEventListener(a, l)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(A, function(t) {
                            t.removeEventListener(a, l)
                        })
                    }
                };
            if (f.string(t))
                return o = t,
                i = e,
                r = n,
                h(document.body, o, i, r);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            var o, i, r, A, a, l, s, c, u
        }
    }
    , function(t, n) {
        n.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }
        ,
        n.nodeList = function(t) {
            var e = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
        }
        ,
        n.string = function(t) {
            return "string" == typeof t || t instanceof String
        }
        ,
        n.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }
    , function(t, e, n) {
        var A = n(7);
        function r(t, e, n, o, i) {
            var r = function(e, n, t, o) {
                return function(t) {
                    t.delegateTarget = A(t.target, n),
                    t.delegateTarget && o.call(e, t)
                }
            }
            .apply(this, arguments);
            return t.addEventListener(n, r, i),
            {
                destroy: function() {
                    t.removeEventListener(n, r, i)
                }
            }
        }
        t.exports = function(t, e, n, o, i) {
            return "function" == typeof t.addEventListener ? r.apply(null, arguments) : "function" == typeof n ? r.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)),
            Array.prototype.map.call(t, function(t) {
                return r(t, e, n, o, i)
            }))
        }
    }
    , function(t, e) {
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var n = Element.prototype;
            n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
        }
        t.exports = function(t, e) {
            for (; t && 9 !== t.nodeType; ) {
                if ("function" == typeof t.matches && t.matches(e))
                    return t;
                t = t.parentNode
            }
        }
    }
    ])
});
/*!
 * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).bsCustomFileInput = e()
}(this, function() {
    "use strict";
    var f = {
        CUSTOMFILE: '.custom-file input[type="file"]',
        CUSTOMFILELABEL: ".custom-file-label",
        FORM: "form",
        INPUT: "input"
    }
      , o = function(t) {
        if (0 < t.childNodes.length)
            for (var e = [].slice.call(t.childNodes), n = 0; n < e.length; n++) {
                var o = e[n];
                if (3 !== o.nodeType)
                    return o
            }
        return t
    }
      , a = function(t) {
        var e = t.bsCustomFileInput.defaultText
          , n = t.parentNode.querySelector(f.CUSTOMFILELABEL);
        n && (o(n).innerHTML = e)
    }
      , n = !!window.File
      , i = function(t) {
        if (t.hasAttribute("multiple") && n)
            return [].slice.call(t.files).map(function(t) {
                return t.name
            }).join(", ");
        if (-1 === t.value.indexOf("fakepath"))
            return t.value;
        var e = t.value.split("\\");
        return e[e.length - 1]
    };
    function h() {
        var t = this.parentNode.querySelector(f.CUSTOMFILELABEL);
        if (t) {
            var e = o(t)
              , n = i(this);
            n.length ? e.innerHTML = n : a(this)
        }
    }
    function d() {
        for (var t = [].slice.call(this.querySelectorAll(f.INPUT)).filter(function(t) {
            return !!t.bsCustomFileInput
        }), e = 0, n = t.length; e < n; e++)
            a(t[e])
    }
    var p = "bsCustomFileInput"
      , y = "reset"
      , m = "change";
    return {
        init: function(t, e) {
            void 0 === t && (t = f.CUSTOMFILE),
            void 0 === e && (e = f.FORM);
            for (var n, o, i, r = [].slice.call(document.querySelectorAll(t)), A = [].slice.call(document.querySelectorAll(e)), a = 0, l = r.length; a < l; a++) {
                var s = r[a];
                Object.defineProperty(s, p, {
                    value: {
                        defaultText: (n = s,
                        o = void 0,
                        void 0,
                        o = "",
                        i = n.parentNode.querySelector(f.CUSTOMFILELABEL),
                        i && (o = i.innerHTML),
                        o)
                    },
                    writable: !0
                }),
                h.call(s),
                s.addEventListener(m, h)
            }
            for (var c = 0, u = A.length; c < u; c++)
                A[c].addEventListener(y, d),
                Object.defineProperty(A[c], p, {
                    value: !0,
                    writable: !0
                })
        },
        destroy: function() {
            for (var t = [].slice.call(document.querySelectorAll(f.FORM)).filter(function(t) {
                return !!t.bsCustomFileInput
            }), e = [].slice.call(document.querySelectorAll(f.INPUT)).filter(function(t) {
                return !!t.bsCustomFileInput
            }), n = 0, o = e.length; n < o; n++) {
                var i = e[n];
                a(i),
                i[p] = void 0,
                i.removeEventListener(m, h)
            }
            for (var r = 0, A = t.length; r < A; r++)
                t[r].removeEventListener(y, d),
                t[r][p] = void 0
        }
    }
});
/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */
(function(i) {
    "use strict";
    i(function() {
        i(".tooltip-demo").tooltip({
            selector: '[data-toggle="tooltip"]',
            container: "body"
        });
        i('[data-toggle="popover"]').popover();
        i(".toast").toast({
            autohide: false
        }).toast("show");
        i(".tooltip-test").tooltip();
        i(".popover-test").popover();
        i('.bd-example-indeterminate [type="checkbox"]').prop("indeterminate", true);
        i('.bd-content [href="#"]').click(function(t) {
            t.preventDefault()
        });
        i("#exampleModal").on("show.bs.modal", function(t) {
            var e = i(t.relatedTarget);
            var n = e.data("whatever");
            var o = i(this);
            o.find(".modal-title").text("New message to " + n);
            o.find(".modal-body input").val(n)
        });
        i(".bd-toggle-animated-progress").on("click", function() {
            i(this).siblings(".progress").find(".progress-bar-striped").toggleClass("progress-bar-animated")
        });
        i("figure.highlight, div.highlight").each(function() {
            var t = '<div class="bd-clipboard"><button type="button" class="btn-clipboard" title="Copy to clipboard">Copy</button></div>';
            i(this).before(t);
            i(".btn-clipboard").tooltip().on("mouseleave", function() {
                i(this).tooltip("hide")
            })
        });
        var t = new ClipboardJS(".btn-clipboard",{
            target: function(t) {
                return t.parentNode.nextElementSibling
            }
        });
        t.on("success", function(t) {
            i(t.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle");
            t.clearSelection()
        });
        t.on("error", function(t) {
            var e = /Mac/i.test(navigator.userAgent) ? "⌘" : "Ctrl-";
            var n = "Press " + e + "C to copy";
            i(t.trigger).attr("title", n).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
        });
        anchors.options = {
            icon: "#"
        };
        anchors.add(".bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5");
        i(".bd-content").children("h2, h3, h4, h5").wrapInner('<span class="bd-content-title"></span>');
        bsCustomFileInput.init()
    })
}
)(jQuery);
(function() {
    "use strict";
    function t() {
        var t = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent);
        if (t === null) {
            return null
        }
        var e = parseInt(t[1], 10);
        var n = Math.floor(e);
        return n
    }
    function e() {
        var t = new Function("/*@cc_on return @_jscript_version; @*/")();
        if (typeof t === "undefined") {
            return 11
        }
        if (t < 9) {
            return 8
        }
        return t
    }
    var n = window.navigator.userAgent;
    if (n.indexOf("Opera") > -1 || n.indexOf("Presto") > -1) {
        return
    }
    var o = t();
    if (o === null) {
        return
    }
    var i = e();
    if (o !== i) {
        window.alert("WARNING: You appear to be using IE" + i + " in IE" + o + " emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!")
    }
}
)();
(function() {
    "use strict";
    if (!window.docsearch) {
        return
    }
    var t = document.getElementById("search-input");
    var e = t.getAttribute("data-docs-version");
    function o() {
        var t = window.location;
        var e = t.origin;
        if (!e) {
            var n = t.port ? ":" + t.port : "";
            e = t.protocol + "//" + t.hostname + n
        }
        return e
    }
    window.docsearch({
        apiKey: "5990ad008512000bba2cf951ccf0332f",
        indexName: "bootstrap",
        inputSelector: "#search-input",
        algoliaOptions: {
            facetFilters: ["version:" + e]
        },
        transformData: function(t) {
            return t.map(function(t) {
                var e = o();
                var n = "https://getbootstrap.com";
                t.url = e.indexOf(n) !== -1 ? t.url : t.url.replace(n, "");
                if (t.anchor === "content") {
                    t.url = t.url.replace(/#content$/, "");
                    t.anchor = null
                }
                return t
            })
        },
        debug: false
    })
}
)();
