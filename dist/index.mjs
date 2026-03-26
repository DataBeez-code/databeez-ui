"use client";
import { jsxs as D, jsx as f, Fragment as Oe } from "react/jsx-runtime";
import * as l from "react";
import ze, { forwardRef as Dn, createElement as Zr, useState as ct, useLayoutEffect as Aa, createContext as Ta, useEffect as cr, useContext as ka, useRef as Ia, useCallback as Oa } from "react";
import * as Ft from "react-dom";
import Ma from "react-dom";
function Ln(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ln(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Er() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ln(e)) && (n && (n += " "), n += t);
  return n;
}
const Qr = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Jr = Er, ft = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Jr(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((d) => {
    const u = r == null ? void 0 : r[d], p = s == null ? void 0 : s[d];
    if (u === null) return null;
    const m = Qr(u) || Qr(p);
    return o[d][m];
  }), i = r && Object.entries(r).reduce((d, u) => {
    let [p, m] = u;
    return m === void 0 || (d[p] = m), d;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, u) => {
    let { class: p, className: m, ...g } = u;
    return Object.entries(g).every((v) => {
      let [h, b] = v;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...i
      }[h]) : {
        ...s,
        ...i
      }[h] === b;
    }) ? [
      ...d,
      p,
      m
    ] : d;
  }, []);
  return Jr(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
var _a = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Da = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ee = (e, t) => {
  const r = Dn(
    ({ color: n = "currentColor", size: o = 24, strokeWidth: s = 2, absoluteStrokeWidth: a, children: i, ...c }, d) => Zr(
      "svg",
      {
        ref: d,
        ..._a,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: a ? Number(s) * 24 / Number(o) : s,
        className: `lucide lucide-${Da(e)}`,
        ...c
      },
      [
        ...t.map(([u, p]) => Zr(u, p)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return r.displayName = `${e}`, r;
}, La = ee("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Fa = ee("Briefcase", [
  [
    "rect",
    {
      width: "20",
      height: "14",
      x: "2",
      y: "7",
      rx: "2",
      ry: "2",
      key: "eto64e"
    }
  ],
  ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }]
]), Rr = ee("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]), za = ee("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]), Nr = ee("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), Fn = ee("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), $a = ee("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), zn = ee("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea"
    }
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf"
    }
  ]
]), Wa = ee("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]), Va = ee("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), en = ee("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), Ba = ee("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]), Ha = ee("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]), Ua = ee("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]), ja = ee("RefreshCw", [
  [
    "path",
    { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }
  ],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  [
    "path",
    { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }
  ],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]), Ga = ee("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Ya = ee("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), Ka = ee("Store", [
  [
    "path",
    {
      d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
      key: "ztvudi"
    }
  ],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]), Xa = ee("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]), qa = ee("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]), $n = ee("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), Za = ee("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]), Pr = ee("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Qa = (e, t) => {
  const r = new Array(e.length + t.length);
  for (let n = 0; n < e.length; n++)
    r[n] = e[n];
  for (let n = 0; n < t.length; n++)
    r[e.length + n] = t[n];
  return r;
}, Ja = (e, t) => ({
  classGroupId: e,
  validator: t
}), Wn = (e = /* @__PURE__ */ new Map(), t = null, r) => ({
  nextPart: e,
  validators: t,
  classGroupId: r
}), Pt = "-", tn = [], ei = "arbitrary..", ti = (e) => {
  const t = ni(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return ri(a);
      const i = a.split(Pt), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return Vn(i, c, t);
    },
    getConflictingClassGroupIds: (a, i) => {
      if (i) {
        const c = n[a], d = r[a];
        return c ? d ? Qa(d, c) : c : d || tn;
      }
      return r[a] || tn;
    }
  };
}, Vn = (e, t, r) => {
  if (e.length - t === 0)
    return r.classGroupId;
  const o = e[t], s = r.nextPart.get(o);
  if (s) {
    const d = Vn(e, t + 1, s);
    if (d) return d;
  }
  const a = r.validators;
  if (a === null)
    return;
  const i = t === 0 ? e.join(Pt) : e.slice(t).join(Pt), c = a.length;
  for (let d = 0; d < c; d++) {
    const u = a[d];
    if (u.validator(i))
      return u.classGroupId;
  }
}, ri = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), r = t.indexOf(":"), n = t.slice(0, r);
  return n ? ei + n : void 0;
})(), ni = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e;
  return oi(r, t);
}, oi = (e, t) => {
  const r = Wn();
  for (const n in e) {
    const o = e[n];
    Ar(o, r, n, t);
  }
  return r;
}, Ar = (e, t, r, n) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const a = e[s];
    si(a, t, r, n);
  }
}, si = (e, t, r, n) => {
  if (typeof e == "string") {
    ai(e, t, r);
    return;
  }
  if (typeof e == "function") {
    ii(e, t, r, n);
    return;
  }
  li(e, t, r, n);
}, ai = (e, t, r) => {
  const n = e === "" ? t : Bn(t, e);
  n.classGroupId = r;
}, ii = (e, t, r, n) => {
  if (ci(e)) {
    Ar(e(n), t, r, n);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Ja(r, e));
}, li = (e, t, r, n) => {
  const o = Object.entries(e), s = o.length;
  for (let a = 0; a < s; a++) {
    const [i, c] = o[a];
    Ar(c, Bn(t, i), r, n);
  }
}, Bn = (e, t) => {
  let r = e;
  const n = t.split(Pt), o = n.length;
  for (let s = 0; s < o; s++) {
    const a = n[s];
    let i = r.nextPart.get(a);
    i || (i = Wn(), r.nextPart.set(a, i)), r = i;
  }
  return r;
}, ci = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, di = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  const o = (s, a) => {
    r[s] = a, t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let a = r[s];
      if (a !== void 0)
        return a;
      if ((a = n[s]) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      s in r ? r[s] = a : o(s, a);
    }
  };
}, dr = "!", rn = ":", ui = [], nn = (e, t, r, n, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: r,
  maybePostfixModifierPosition: n,
  isExternal: o
}), fi = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, d;
    const u = o.length;
    for (let h = 0; h < u; h++) {
      const b = o[h];
      if (a === 0 && i === 0) {
        if (b === rn) {
          s.push(o.slice(c, h)), c = h + 1;
          continue;
        }
        if (b === "/") {
          d = h;
          continue;
        }
      }
      b === "[" ? a++ : b === "]" ? a-- : b === "(" ? i++ : b === ")" && i--;
    }
    const p = s.length === 0 ? o : o.slice(c);
    let m = p, g = !1;
    p.endsWith(dr) ? (m = p.slice(0, -1), g = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      p.startsWith(dr) && (m = p.slice(1), g = !0)
    );
    const v = d && d > c ? d - c : void 0;
    return nn(s, g, m, v);
  };
  if (t) {
    const o = t + rn, s = n;
    n = (a) => a.startsWith(o) ? s(a.slice(o.length)) : nn(ui, !1, a, void 0, !0);
  }
  if (r) {
    const o = n;
    n = (s) => r({
      className: s,
      parseClassName: o
    });
  }
  return n;
}, pi = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((r, n) => {
    t.set(r, 1e6 + n);
  }), (r) => {
    const n = [];
    let o = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], i = a[0] === "[", c = t.has(a);
      i || c ? (o.length > 0 && (o.sort(), n.push(...o), o = []), n.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), n.push(...o)), n;
  };
}, mi = (e) => ({
  cache: di(e.cacheSize),
  parseClassName: fi(e),
  sortModifiers: pi(e),
  ...ti(e)
}), hi = /\s+/, gi = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(hi);
  let c = "";
  for (let d = i.length - 1; d >= 0; d -= 1) {
    const u = i[d], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: v,
      maybePostfixModifierPosition: h
    } = r(u);
    if (p) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!h, y = n(b ? v.substring(0, h) : v);
    if (!y) {
      if (!b) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = n(v), !y) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const x = m.length === 0 ? "" : m.length === 1 ? m[0] : s(m).join(":"), w = g ? x + dr : x, S = w + y;
    if (a.indexOf(S) > -1)
      continue;
    a.push(S);
    const R = o(y, b);
    for (let N = 0; N < R.length; ++N) {
      const E = R[N];
      a.push(w + E);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, bi = (...e) => {
  let t = 0, r, n, o = "";
  for (; t < e.length; )
    (r = e[t++]) && (n = Hn(r)) && (o && (o += " "), o += n);
  return o;
}, Hn = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Hn(e[n])) && (r && (r += " "), r += t);
  return r;
}, vi = (e, ...t) => {
  let r, n, o, s;
  const a = (c) => {
    const d = t.reduce((u, p) => p(u), e());
    return r = mi(d), n = r.cache.get, o = r.cache.set, s = i, i(c);
  }, i = (c) => {
    const d = n(c);
    if (d)
      return d;
    const u = gi(c, r);
    return o(c, u), u;
  };
  return s = a, (...c) => s(bi(...c));
}, yi = [], re = (e) => {
  const t = (r) => r[e] || yi;
  return t.isThemeGetter = !0, t;
}, Un = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, jn = /^\((?:(\w[\w-]*):)?(.+)\)$/i, xi = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, wi = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Si = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ci = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ei = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ri = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ae = (e) => xi.test(e), $ = (e) => !!e && !Number.isNaN(Number(e)), Te = (e) => !!e && Number.isInteger(Number(e)), Zt = (e) => e.endsWith("%") && $(e.slice(0, -1)), we = (e) => wi.test(e), Gn = () => !0, Ni = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Si.test(e) && !Ci.test(e)
), Tr = () => !1, Pi = (e) => Ei.test(e), Ai = (e) => Ri.test(e), Ti = (e) => !k(e) && !I(e), ki = (e) => De(e, Xn, Tr), k = (e) => Un.test(e), $e = (e) => De(e, qn, Ni), on = (e) => De(e, zi, $), Ii = (e) => De(e, Qn, Gn), Oi = (e) => De(e, Zn, Tr), sn = (e) => De(e, Yn, Tr), Mi = (e) => De(e, Kn, Ai), gt = (e) => De(e, Jn, Pi), I = (e) => jn.test(e), it = (e) => je(e, qn), _i = (e) => je(e, Zn), an = (e) => je(e, Yn), Di = (e) => je(e, Xn), Li = (e) => je(e, Kn), bt = (e) => je(e, Jn, !0), Fi = (e) => je(e, Qn, !0), De = (e, t, r) => {
  const n = Un.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, je = (e, t, r = !1) => {
  const n = jn.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, Yn = (e) => e === "position" || e === "percentage", Kn = (e) => e === "image" || e === "url", Xn = (e) => e === "length" || e === "size" || e === "bg-size", qn = (e) => e === "length", zi = (e) => e === "number", Zn = (e) => e === "family-name", Qn = (e) => e === "number" || e === "weight", Jn = (e) => e === "shadow", $i = () => {
  const e = re("color"), t = re("font"), r = re("text"), n = re("font-weight"), o = re("tracking"), s = re("leading"), a = re("breakpoint"), i = re("container"), c = re("spacing"), d = re("radius"), u = re("shadow"), p = re("inset-shadow"), m = re("text-shadow"), g = re("drop-shadow"), v = re("blur"), h = re("perspective"), b = re("aspect"), y = re("ease"), x = re("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], R = () => [...S(), I, k], N = () => ["auto", "hidden", "clip", "visible", "scroll"], E = () => ["auto", "contain", "none"], C = () => [I, k, c], A = () => [Ae, "full", "auto", ...C()], M = () => [Te, "none", "subgrid", I, k], F = () => ["auto", {
    span: ["full", Te, I, k]
  }, Te, I, k], B = () => [Te, "auto", I, k], j = () => ["auto", "min", "max", "fr", I, k], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], K = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], O = () => ["auto", ...C()], W = () => [Ae, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], L = () => [Ae, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...C()], X = () => [Ae, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...C()], T = () => [e, I, k], ce = () => [...S(), an, sn, {
    position: [I, k]
  }], Ne = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Pe = () => ["auto", "cover", "contain", Di, ki, {
    size: [I, k]
  }], de = () => [Zt, it, $e], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    I,
    k
  ], J = () => ["", $, it, $e], _ = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], U = () => [$, Zt, an, sn], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    I,
    k
  ], G = () => ["none", $, I, k], Y = () => ["none", $, I, k], ne = () => [$, I, k], se = () => [Ae, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [we],
      breakpoint: [we],
      color: [Gn],
      container: [we],
      "drop-shadow": [we],
      ease: ["in", "out", "in-out"],
      font: [Ti],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [we],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [we],
      shadow: [we],
      spacing: ["px", $],
      text: [we],
      "text-shadow": [we],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ae, k, I, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [$, k, I, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": w()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": w()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: R()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: N()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": N()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": N()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: E()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": E()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": E()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: A()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": A()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": A()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": A(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: A()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": A(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: A()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": A()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": A()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: A()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: A()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: A()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: A()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Te, "auto", I, k]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ae, "full", "auto", i, ...C()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [$, Ae, "auto", "initial", "none", k]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", $, I, k]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", $, I, k]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Te, "first", "last", "none", I, k]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": M()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": M()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": j()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": j()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...K(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...K()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...K(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...K(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...K(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...K()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: C()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: O()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: O()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: O()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: O()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: O()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: O()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: O()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: O()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: O()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: O()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: O()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": C()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: W()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...L()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...L()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...L()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...X()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...X()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...X()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...W()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          i,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...W()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          i,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, it, $e]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, Fi, Ii]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Zt, k]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_i, Oi, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [k]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [o, I, k]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [$, "none", I, on]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I, k]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", I, k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: T()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: T()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [..._(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [$, "from-font", "auto", I, $e]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: T()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [$, "auto", I, k]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I, k]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", I, k]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ce()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ne()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Pe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Te, I, k],
          radial: ["", I, k],
          conic: [Te, I, k]
        }, Li, Mi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: T()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: de()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: de()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: de()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: T()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: T()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: T()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: te()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": te()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": te()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": te()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": te()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": te()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": te()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": te()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": te()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": te()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": te()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": te()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": te()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": te()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": te()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: J()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": J()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": J()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": J()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": J()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": J()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": J()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": J()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": J()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": J()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": J()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": J()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": J()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [..._(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [..._(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: T()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": T()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": T()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": T()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": T()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": T()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": T()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": T()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": T()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": T()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": T()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: T()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [..._(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [$, I, k]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", $, it, $e]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: T()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          bt,
          gt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: T()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, bt, gt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": T()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: J()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: T()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [$, $e]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": T()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": J()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": T()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, bt, gt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": T()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [$, I, k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [$]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": U()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": U()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": T()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": U()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": U()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": T()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": U()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": U()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": T()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": U()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": U()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": T()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": U()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": U()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": T()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": U()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": U()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": T()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": U()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": U()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": T()
      }],
      "mask-image-radial": [{
        "mask-radial": [I, k]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": U()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": U()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": T()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [$]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": U()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": U()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": T()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ce()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ne()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Pe()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", I, k]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          I,
          k
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [$, I, k]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [$, I, k]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          bt,
          gt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": T()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", $, I, k]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [$, I, k]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", $, I, k]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [$, I, k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", $, I, k]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          I,
          k
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [$, I, k]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [$, I, k]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", $, I, k]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [$, I, k]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", $, I, k]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [$, I, k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [$, I, k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", $, I, k]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", I, k]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [$, "initial", I, k]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, I, k]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [$, I, k]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, I, k]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, I, k]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": R()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: G()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": G()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": G()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": G()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Y()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Y()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Y()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Y()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ne()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ne()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ne()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [I, k, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: R()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: se()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": se()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": se()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": se()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: T()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: T()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I, k]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": C()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": C()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": C()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", I, k]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...T()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [$, it, $e, on]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...T()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Wi = /* @__PURE__ */ vi($i);
function P(...e) {
  return Wi(Er(e));
}
const Vi = ft(
  "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-subtle border-border text-text-base",
        info: "bg-blue-50 border-blue-200 text-blue-800",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
        destructive: "bg-red-50 border-red-200 text-red-700"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Bi = {
  default: en,
  info: en,
  success: za,
  warning: La,
  destructive: Za
}, Hi = l.forwardRef(
  ({ className: e, variant: t = "default", title: r, children: n, ...o }, s) => {
    const a = Bi[t ?? "default"];
    return /* @__PURE__ */ D(
      "div",
      {
        ref: s,
        role: "alert",
        className: P(Vi({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ f(a, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ D("div", { className: "flex-1 min-w-0", children: [
            r && /* @__PURE__ */ f("p", { className: "font-semibold mb-0.5", children: r }),
            n && /* @__PURE__ */ f("p", { className: "leading-relaxed", children: n })
          ] })
        ]
      }
    );
  }
);
Hi.displayName = "Alert";
function hp({ label: e, value: t, className: r, ...n }) {
  return /* @__PURE__ */ D("div", { className: P("flex flex-col gap-0.5", r), ...n, children: [
    /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ f("span", { className: "text-sm font-medium break-words text-text-base", children: t ?? "—" })
  ] });
}
function gp({ title: e, children: t, className: r, ...n }) {
  return /* @__PURE__ */ D("div", { className: P("flex flex-col gap-3", r), ...n, children: [
    /* @__PURE__ */ f("h3", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1", children: e }),
    /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: t })
  ] });
}
const Ui = ft(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        top: "border-transparent bg-category-top/20 text-category-top",
        base: "border-transparent bg-category-base/20 text-category-base",
        vertical: "border-transparent bg-category-vertical/20 text-category-vertical"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function bp({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ f("div", { className: P(Ui({ variant: t }), e), ...r });
}
function ln(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function et(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = ln(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : ln(e[o], null);
        }
      };
  };
}
function Q(...e) {
  return l.useCallback(et(...e), e);
}
var ji = Symbol.for("react.lazy"), At = l[" use ".trim().toString()];
function Gi(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function eo(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ji && "_payload" in e && Gi(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Yi(e) {
  const t = /* @__PURE__ */ Xi(e), r = l.forwardRef((n, o) => {
    let { children: s, ...a } = n;
    eo(s) && typeof At == "function" && (s = At(s._payload));
    const i = l.Children.toArray(s), c = i.find(Zi);
    if (c) {
      const d = c.props.children, u = i.map((p) => p === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...a, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var Ki = /* @__PURE__ */ Yi("Slot");
// @__NO_SIDE_EFFECTS__
function Xi(e) {
  const t = l.forwardRef((r, n) => {
    let { children: o, ...s } = r;
    if (eo(o) && typeof At == "function" && (o = At(o._payload)), l.isValidElement(o)) {
      const a = Ji(o), i = Qi(s, o.props);
      return o.type !== l.Fragment && (i.ref = n ? et(n, a) : a), l.cloneElement(o, i);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qi = Symbol("radix.slottable");
function Zi(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qi;
}
function Qi(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Ji(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const el = ft(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-databeez-primary text-white hover:bg-databeez-accent shadow-sm",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline: "border border-border bg-surface text-text-base hover:bg-subtle hover:text-text-base",
        secondary: "bg-subtle text-text-base hover:bg-subtle/80",
        ghost: "text-text-base hover:bg-subtle hover:text-text-base",
        link: "text-databeez-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), to = l.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...o }, s) => /* @__PURE__ */ f(
    n ? Ki : "button",
    {
      className: P(el({ variant: t, size: r, className: e })),
      ref: s,
      ...o
    }
  )
);
to.displayName = "Button";
const tl = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "div",
  {
    ref: r,
    className: P(
      "rounded-xl border border-border bg-surface text-text-base shadow-sm",
      e
    ),
    ...t
  }
));
tl.displayName = "Card";
const rl = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f("div", { ref: r, className: P("flex flex-col space-y-1.5 p-6", e), ...t }));
rl.displayName = "CardHeader";
const nl = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "h3",
  {
    ref: r,
    className: P("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
nl.displayName = "CardTitle";
const ol = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "p",
  {
    ref: r,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
ol.displayName = "CardDescription";
const sl = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f("div", { ref: r, className: P("p-6 pt-0", e), ...t }));
sl.displayName = "CardContent";
const al = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "div",
  {
    ref: r,
    className: P("flex items-center p-6 pt-0", e),
    ...t
  }
));
al.displayName = "CardFooter";
const il = l.forwardRef(
  ({
    onSend: e,
    disabled: t,
    placeholder: r = "Scrivi un messaggio...",
    className: n,
    maxHeight: o = 160
  }, s) => {
    const [a, i] = l.useState(""), c = l.useRef(null), d = s ?? c, u = () => {
      const g = a.trim();
      !g || t || (e(g), i(""), d.current && (d.current.style.height = "auto"));
    }, p = (g) => {
      g.key === "Enter" && !g.shiftKey && (g.preventDefault(), u());
    }, m = () => {
      const g = d.current;
      g && (g.style.height = "auto", g.style.height = `${Math.min(g.scrollHeight, o)}px`);
    };
    return /* @__PURE__ */ D("div", { className: P("border-t border-border bg-surface px-4 py-3", n), children: [
      /* @__PURE__ */ D("div", { className: "max-w-4xl mx-auto flex gap-3 items-end", children: [
        /* @__PURE__ */ f(
          "textarea",
          {
            ref: d,
            value: a,
            onChange: (g) => i(g.target.value),
            onKeyDown: p,
            onInput: m,
            placeholder: r,
            disabled: t,
            rows: 1,
            className: P(
              "flex-1 resize-none rounded-xl border border-border bg-base px-4 py-3 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "min-h-[44px]"
            ),
            style: { maxHeight: o }
          }
        ),
        /* @__PURE__ */ f(
          to,
          {
            onClick: u,
            disabled: t || !a.trim(),
            size: "icon",
            className: "h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg",
            children: /* @__PURE__ */ f(Ya, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ f("p", { className: "text-center text-xs text-text-muted mt-2", children: "Invio per inviare · Shift+Invio per andare a capo" })
    ] });
  }
);
il.displayName = "ChatInput";
const ll = l.lazy(async () => {
  const [{ Prism: e }, { oneDark: t }] = await Promise.all([
    import("./index-CqL3bFoY.mjs").then((r) => r.ca),
    import("./index-CFVSE0Ln.mjs")
  ]);
  return {
    default: ({ children: r, language: n }) => /* @__PURE__ */ f(
      e,
      {
        language: n,
        style: t,
        customStyle: { margin: 0, borderRadius: 0, fontSize: "0.875rem", lineHeight: "1.6" },
        showLineNumbers: !1,
        children: r
      }
    )
  };
});
function vp({
  code: e,
  language: t = "text",
  copyable: r = !0,
  className: n,
  ...o
}) {
  const [s, a] = l.useState(!1), i = async () => {
    await navigator.clipboard.writeText(e), a(!0), setTimeout(() => a(!1), 2e3);
  };
  return /* @__PURE__ */ D(
    "div",
    {
      className: P("relative rounded-xl overflow-hidden text-sm", n),
      ...o,
      children: [
        /* @__PURE__ */ D("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ f("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: t }),
          r && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: i,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: s ? /* @__PURE__ */ D(Oe, { children: [
                /* @__PURE__ */ f(Nr, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ f("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ D(Oe, { children: [
                /* @__PURE__ */ f(zn, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ f("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ f(l.Suspense, { fallback: /* @__PURE__ */ f("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ f(ll, { language: t, children: e }) })
      ]
    }
  );
}
function cl({
  text: e,
  label: t,
  resetDelay: r = 2e3,
  className: n,
  ...o
}) {
  const [s, a] = l.useState(!1);
  return /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      onClick: async (c) => {
        c.stopPropagation(), await navigator.clipboard.writeText(e), a(!0), setTimeout(() => a(!1), r);
      },
      "aria-label": s ? "Copiato!" : `Copia${t ? ` ${t}` : ""}`,
      className: P(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        s ? "text-green-600" : "text-text-muted hover:text-text-base",
        n
      ),
      ...o,
      children: [
        s ? /* @__PURE__ */ f(Nr, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ f(zn, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ f("span", { children: s ? "Copiato!" : t })
      ]
    }
  );
}
function z(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function dl(e, t) {
  const r = l.createContext(t), n = (s) => {
    const { children: a, ...i } = s, c = l.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ f(r.Provider, { value: c, children: a });
  };
  n.displayName = e + "Provider";
  function o(s) {
    const a = l.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, o];
}
function Ge(e, t = []) {
  let r = [];
  function n(s, a) {
    const i = l.createContext(a), c = r.length;
    r = [...r, a];
    const d = (p) => {
      var y;
      const { scope: m, children: g, ...v } = p, h = ((y = m == null ? void 0 : m[e]) == null ? void 0 : y[c]) || i, b = l.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ f(h.Provider, { value: b, children: g });
    };
    d.displayName = s + "Provider";
    function u(p, m) {
      var h;
      const g = ((h = m == null ? void 0 : m[e]) == null ? void 0 : h[c]) || i, v = l.useContext(g);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [d, u];
  }
  const o = () => {
    const s = r.map((a) => l.createContext(a));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [n, ul(o, ...t)];
}
function ul(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = n.reduce((i, { useScope: c, scopeName: d }) => {
        const p = c(s)[`__scope${d}`];
        return { ...i, ...p };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var oe = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {
}, fl = l[" useId ".trim().toString()] || (() => {
}), pl = 0;
function Ie(e) {
  const [t, r] = l.useState(fl());
  return oe(() => {
    r((n) => n ?? String(pl++));
  }, [e]), t ? `radix-${t}` : "";
}
var ml = l[" useInsertionEffect ".trim().toString()] || oe;
function dt({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, a] = hl({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, c = i ? e : o;
  {
    const u = l.useRef(e !== void 0);
    l.useEffect(() => {
      const p = u.current;
      p !== i && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, n]);
  }
  const d = l.useCallback(
    (u) => {
      var p;
      if (i) {
        const m = gl(u) ? u(e) : u;
        m !== e && ((p = a.current) == null || p.call(a, m));
      } else
        s(u);
    },
    [i, e, s, a]
  );
  return [c, d];
}
function hl({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = l.useState(e), o = l.useRef(r), s = l.useRef(t);
  return ml(() => {
    s.current = t;
  }, [t]), l.useEffect(() => {
    var a;
    o.current !== r && ((a = s.current) == null || a.call(s, r), o.current = r);
  }, [r, o]), [r, n, s];
}
function gl(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function bl(e) {
  const t = /* @__PURE__ */ vl(e), r = l.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = l.Children.toArray(s), c = i.find(xl);
    if (c) {
      const d = c.props.children, u = i.map((p) => p === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...a, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function vl(e) {
  const t = l.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (l.isValidElement(o)) {
      const a = Sl(o), i = wl(s, o.props);
      return o.type !== l.Fragment && (i.ref = n ? et(n, a) : a), l.cloneElement(o, i);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var yl = Symbol("radix.slottable");
function xl(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === yl;
}
function wl(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Sl(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Cl = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], V = Cl.reduce((e, t) => {
  const r = /* @__PURE__ */ bl(`Primitive.${t}`), n = l.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(c, { ...i, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function El(e, t) {
  e && Ft.flushSync(() => e.dispatchEvent(t));
}
function ae(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Rl(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ae(e);
  l.useEffect(() => {
    const n = (o) => {
      o.key === "Escape" && r(o);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Nl = "DismissableLayer", ur = "dismissableLayer.update", Pl = "dismissableLayer.pointerDownOutside", Al = "dismissableLayer.focusOutside", cn, ro = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), kr = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, d = l.useContext(ro), [u, p] = l.useState(null), m = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = l.useState({}), v = Q(t, (E) => p(E)), h = Array.from(d.layers), [b] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = h.indexOf(b), x = u ? h.indexOf(u) : -1, w = d.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= y, R = Il((E) => {
      const C = E.target, A = [...d.branches].some((M) => M.contains(C));
      !S || A || (o == null || o(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, m), N = Ol((E) => {
      const C = E.target;
      [...d.branches].some((M) => M.contains(C)) || (s == null || s(E), a == null || a(E), E.defaultPrevented || i == null || i());
    }, m);
    return Rl((E) => {
      x === d.layers.size - 1 && (n == null || n(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, m), l.useEffect(() => {
      if (u)
        return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (cn = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), dn(), () => {
          r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = cn);
        };
    }, [u, m, r, d]), l.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), dn());
    }, [u, d]), l.useEffect(() => {
      const E = () => g({});
      return document.addEventListener(ur, E), () => document.removeEventListener(ur, E);
    }, []), /* @__PURE__ */ f(
      V.div,
      {
        ...c,
        ref: v,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: z(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: z(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: z(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
kr.displayName = Nl;
var Tl = "DismissableLayerBranch", kl = l.forwardRef((e, t) => {
  const r = l.useContext(ro), n = l.useRef(null), o = Q(t, n);
  return l.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ f(V.div, { ...e, ref: o });
});
kl.displayName = Tl;
function Il(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ae(e), n = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const s = (i) => {
      if (i.target && !n.current) {
        let c = function() {
          no(
            Pl,
            r,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Ol(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = ae(e), n = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !n.current && no(Al, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function dn() {
  const e = new CustomEvent(ur);
  document.dispatchEvent(e);
}
function no(e, t, r, { discrete: n }) {
  const o = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && o.addEventListener(e, t, { once: !0 }), n ? El(o, s) : o.dispatchEvent(s);
}
var Qt = "focusScope.autoFocusOnMount", Jt = "focusScope.autoFocusOnUnmount", un = { bubbles: !1, cancelable: !0 }, Ml = "FocusScope", Ir = l.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = l.useState(null), d = ae(o), u = ae(s), p = l.useRef(null), m = Q(t, (h) => c(h)), g = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (n) {
      let h = function(w) {
        if (g.paused || !i) return;
        const S = w.target;
        i.contains(S) ? p.current = S : ke(p.current, { select: !0 });
      }, b = function(w) {
        if (g.paused || !i) return;
        const S = w.relatedTarget;
        S !== null && (i.contains(S) || ke(p.current, { select: !0 }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (const R of w)
            R.removedNodes.length > 0 && ke(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", b);
      const x = new MutationObserver(y);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", b), x.disconnect();
      };
    }
  }, [n, i, g.paused]), l.useEffect(() => {
    if (i) {
      pn.add(g);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const y = new CustomEvent(Qt, un);
        i.addEventListener(Qt, d), i.dispatchEvent(y), y.defaultPrevented || (_l($l(oo(i)), { select: !0 }), document.activeElement === h && ke(i));
      }
      return () => {
        i.removeEventListener(Qt, d), setTimeout(() => {
          const y = new CustomEvent(Jt, un);
          i.addEventListener(Jt, u), i.dispatchEvent(y), y.defaultPrevented || ke(h ?? document.body, { select: !0 }), i.removeEventListener(Jt, u), pn.remove(g);
        }, 0);
      };
    }
  }, [i, d, u, g]);
  const v = l.useCallback(
    (h) => {
      if (!r && !n || g.paused) return;
      const b = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, y = document.activeElement;
      if (b && y) {
        const x = h.currentTarget, [w, S] = Dl(x);
        w && S ? !h.shiftKey && y === S ? (h.preventDefault(), r && ke(w, { select: !0 })) : h.shiftKey && y === w && (h.preventDefault(), r && ke(S, { select: !0 })) : y === x && h.preventDefault();
      }
    },
    [r, n, g.paused]
  );
  return /* @__PURE__ */ f(V.div, { tabIndex: -1, ...a, ref: m, onKeyDown: v });
});
Ir.displayName = Ml;
function _l(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (ke(n, { select: t }), document.activeElement !== r) return;
}
function Dl(e) {
  const t = oo(e), r = fn(t, e), n = fn(t.reverse(), e);
  return [r, n];
}
function oo(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const o = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || o ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function fn(e, t) {
  for (const r of e)
    if (!Ll(r, { upTo: t })) return r;
}
function Ll(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Fl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ke(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Fl(e) && t && e.select();
  }
}
var pn = zl();
function zl() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = mn(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = mn(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function mn(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function $l(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Wl = "Portal", Or = l.forwardRef((e, t) => {
  var i;
  const { container: r, ...n } = e, [o, s] = l.useState(!1);
  oe(() => s(!0), []);
  const a = r || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return a ? Ma.createPortal(/* @__PURE__ */ f(V.div, { ...n, ref: t }), a) : null;
});
Or.displayName = Wl;
function Vl(e, t) {
  return l.useReducer((r, n) => t[r][n] ?? r, e);
}
var Ee = (e) => {
  const { present: t, children: r } = e, n = Bl(t), o = typeof r == "function" ? r({ present: n.isPresent }) : l.Children.only(r), s = Q(n.ref, Hl(o));
  return typeof r == "function" || n.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
Ee.displayName = "Presence";
function Bl(e) {
  const [t, r] = l.useState(), n = l.useRef(null), o = l.useRef(e), s = l.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = Vl(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return l.useEffect(() => {
    const d = vt(n.current);
    s.current = i === "mounted" ? d : "none";
  }, [i]), oe(() => {
    const d = n.current, u = o.current;
    if (u !== e) {
      const m = s.current, g = vt(d);
      e ? c("MOUNT") : g === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(u && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), oe(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, p = (g) => {
        const h = vt(n.current).includes(CSS.escape(g.animationName));
        if (g.target === t && h && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, m = (g) => {
        g.target === t && (s.current = vt(n.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        u.clearTimeout(d), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: l.useCallback((d) => {
      n.current = d ? getComputedStyle(d) : null, r(d);
    }, [])
  };
}
function vt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Hl(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var er = 0;
function so() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? hn()), document.body.insertAdjacentElement("beforeend", e[1] ?? hn()), er++, () => {
      er === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), er--;
    };
  }, []);
}
function hn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ge = function() {
  return ge = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, ge.apply(this, arguments);
};
function ao(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function Ul(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, s; n < o; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Et = "right-scroll-bar-position", Rt = "width-before-scroll-bar", jl = "with-scroll-bars-hidden", Gl = "--removed-body-scroll-bar-size";
function tr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Yl(e, t) {
  var r = ct(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Kl = typeof window < "u" ? l.useLayoutEffect : l.useEffect, gn = /* @__PURE__ */ new WeakMap();
function Xl(e, t) {
  var r = Yl(null, function(n) {
    return e.forEach(function(o) {
      return tr(o, n);
    });
  });
  return Kl(function() {
    var n = gn.get(r);
    if (n) {
      var o = new Set(n), s = new Set(e), a = r.current;
      o.forEach(function(i) {
        s.has(i) || tr(i, null);
      }), s.forEach(function(i) {
        o.has(i) || tr(i, a);
      });
    }
    gn.set(r, e);
  }, [e]), r;
}
function ql(e) {
  return e;
}
function Zl(e, t) {
  t === void 0 && (t = ql);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, n);
      return r.push(a), function() {
        r = r.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(s);
      }
      r = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var a = [];
      if (r.length) {
        var i = r;
        r = [], i.forEach(s), a = r;
      }
      var c = function() {
        var u = a;
        a = [], u.forEach(s);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), r = {
        push: function(u) {
          a.push(u), d();
        },
        filter: function(u) {
          return a = a.filter(u), r;
        }
      };
    }
  };
  return o;
}
function Ql(e) {
  e === void 0 && (e = {});
  var t = Zl(null);
  return t.options = ge({ async: !0, ssr: !1 }, e), t;
}
var io = function(e) {
  var t = e.sideCar, r = ao(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return l.createElement(n, ge({}, r));
};
io.isSideCarExport = !0;
function Jl(e, t) {
  return e.useMedium(t), io;
}
var lo = Ql(), rr = function() {
}, zt = l.forwardRef(function(e, t) {
  var r = l.useRef(null), n = l.useState({
    onScrollCapture: rr,
    onWheelCapture: rr,
    onTouchMoveCapture: rr
  }), o = n[0], s = n[1], a = e.forwardProps, i = e.children, c = e.className, d = e.removeScrollBar, u = e.enabled, p = e.shards, m = e.sideCar, g = e.noRelative, v = e.noIsolation, h = e.inert, b = e.allowPinchZoom, y = e.as, x = y === void 0 ? "div" : y, w = e.gapMode, S = ao(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = m, N = Xl([r, t]), E = ge(ge({}, S), o);
  return l.createElement(
    l.Fragment,
    null,
    u && l.createElement(R, { sideCar: lo, removeScrollBar: d, shards: p, noRelative: g, noIsolation: v, inert: h, setCallbacks: s, allowPinchZoom: !!b, lockRef: r, gapMode: w }),
    a ? l.cloneElement(l.Children.only(i), ge(ge({}, E), { ref: N })) : l.createElement(x, ge({}, E, { className: c, ref: N }), i)
  );
});
zt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
zt.classNames = {
  fullWidth: Rt,
  zeroRight: Et
};
var ec = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function tc() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ec();
  return t && e.setAttribute("nonce", t), e;
}
function rc(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function nc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var oc = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = tc()) && (rc(t, r), nc(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, sc = function() {
  var e = oc();
  return function(t, r) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, co = function() {
  var e = sc(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, ac = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, nr = function(e) {
  return parseInt(e || "", 10) || 0;
}, ic = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [nr(r), nr(n), nr(o)];
}, lc = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ac;
  var t = ic(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, cc = co(), qe = "data-scroll-locked", dc = function(e, t, r, n) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(jl, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(i, "px ").concat(n, `;
  }
  body[`).concat(qe, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(i, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Et, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(Rt, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(Et, " .").concat(Et, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Rt, " .").concat(Rt, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(qe, `] {
    `).concat(Gl, ": ").concat(i, `px;
  }
`);
}, bn = function() {
  var e = parseInt(document.body.getAttribute(qe) || "0", 10);
  return isFinite(e) ? e : 0;
}, uc = function() {
  l.useEffect(function() {
    return document.body.setAttribute(qe, (bn() + 1).toString()), function() {
      var e = bn() - 1;
      e <= 0 ? document.body.removeAttribute(qe) : document.body.setAttribute(qe, e.toString());
    };
  }, []);
}, fc = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n;
  uc();
  var s = l.useMemo(function() {
    return lc(o);
  }, [o]);
  return l.createElement(cc, { styles: dc(s, !t, o, r ? "" : "!important") });
}, fr = !1;
if (typeof window < "u")
  try {
    var yt = Object.defineProperty({}, "passive", {
      get: function() {
        return fr = !0, !0;
      }
    });
    window.addEventListener("test", yt, yt), window.removeEventListener("test", yt, yt);
  } catch {
    fr = !1;
  }
var Ye = fr ? { passive: !1 } : !1, pc = function(e) {
  return e.tagName === "TEXTAREA";
}, uo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !pc(e) && r[t] === "visible")
  );
}, mc = function(e) {
  return uo(e, "overflowY");
}, hc = function(e) {
  return uo(e, "overflowX");
}, vn = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = fo(e, n);
    if (o) {
      var s = po(e, n), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, gc = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, bc = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, fo = function(e, t) {
  return e === "v" ? mc(t) : hc(t);
}, po = function(e, t) {
  return e === "v" ? gc(t) : bc(t);
}, vc = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, yc = function(e, t, r, n, o) {
  var s = vc(e, window.getComputedStyle(t).direction), a = s * n, i = r.target, c = t.contains(i), d = !1, u = a > 0, p = 0, m = 0;
  do {
    if (!i)
      break;
    var g = po(e, i), v = g[0], h = g[1], b = g[2], y = h - b - s * v;
    (v || y) && fo(e, i) && (p += y, m += v);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && Math.abs(p) < 1 || !u && Math.abs(m) < 1) && (d = !0), d;
}, xt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, yn = function(e) {
  return [e.deltaX, e.deltaY];
}, xn = function(e) {
  return e && "current" in e ? e.current : e;
}, xc = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, wc = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Sc = 0, Ke = [];
function Cc(e) {
  var t = l.useRef([]), r = l.useRef([0, 0]), n = l.useRef(), o = l.useState(Sc++)[0], s = l.useState(co)[0], a = l.useRef(e);
  l.useEffect(function() {
    a.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = Ul([e.lockRef.current], (e.shards || []).map(xn), !0).filter(Boolean);
      return h.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = l.useCallback(function(h, b) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !a.current.allowPinchZoom;
    var y = xt(h), x = r.current, w = "deltaX" in h ? h.deltaX : x[0] - y[0], S = "deltaY" in h ? h.deltaY : x[1] - y[1], R, N = h.target, E = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && E === "h" && N.type === "range")
      return !1;
    var C = window.getSelection(), A = C && C.anchorNode, M = A ? A === N || A.contains(N) : !1;
    if (M)
      return !1;
    var F = vn(E, N);
    if (!F)
      return !0;
    if (F ? R = E : (R = E === "v" ? "h" : "v", F = vn(E, N)), !F)
      return !1;
    if (!n.current && "changedTouches" in h && (w || S) && (n.current = R), !R)
      return !0;
    var B = n.current || R;
    return yc(B, b, h, B === "h" ? w : S);
  }, []), c = l.useCallback(function(h) {
    var b = h;
    if (!(!Ke.length || Ke[Ke.length - 1] !== s)) {
      var y = "deltaY" in b ? yn(b) : xt(b), x = t.current.filter(function(R) {
        return R.name === b.type && (R.target === b.target || b.target === R.shadowParent) && xc(R.delta, y);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var w = (a.current.shards || []).map(xn).filter(Boolean).filter(function(R) {
          return R.contains(b.target);
        }), S = w.length > 0 ? i(b, w[0]) : !a.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), d = l.useCallback(function(h, b, y, x) {
    var w = { name: h, delta: b, target: y, should: x, shadowParent: Ec(y) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), u = l.useCallback(function(h) {
    r.current = xt(h), n.current = void 0;
  }, []), p = l.useCallback(function(h) {
    d(h.type, yn(h), h.target, i(h, e.lockRef.current));
  }, []), m = l.useCallback(function(h) {
    d(h.type, xt(h), h.target, i(h, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return Ke.push(s), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", c, Ye), document.addEventListener("touchmove", c, Ye), document.addEventListener("touchstart", u, Ye), function() {
      Ke = Ke.filter(function(h) {
        return h !== s;
      }), document.removeEventListener("wheel", c, Ye), document.removeEventListener("touchmove", c, Ye), document.removeEventListener("touchstart", u, Ye);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    v ? l.createElement(s, { styles: wc(o) }) : null,
    g ? l.createElement(fc, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ec(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Rc = Jl(lo, Cc);
var Mr = l.forwardRef(function(e, t) {
  return l.createElement(zt, ge({}, e, { ref: t, sideCar: Rc }));
});
Mr.classNames = zt.classNames;
var Nc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Xe = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), St = {}, or = 0, mo = function(e) {
  return e && (e.host || mo(e.parentNode));
}, Pc = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = mo(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Ac = function(e, t, r, n) {
  var o = Pc(t, Array.isArray(e) ? e : [e]);
  St[r] || (St[r] = /* @__PURE__ */ new WeakMap());
  var s = St[r], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), d = function(p) {
    !p || i.has(p) || (i.add(p), d(p.parentNode));
  };
  o.forEach(d);
  var u = function(p) {
    !p || c.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (i.has(m))
        u(m);
      else
        try {
          var g = m.getAttribute(n), v = g !== null && g !== "false", h = (Xe.get(m) || 0) + 1, b = (s.get(m) || 0) + 1;
          Xe.set(m, h), s.set(m, b), a.push(m), h === 1 && v && wt.set(m, !0), b === 1 && m.setAttribute(r, "true"), v || m.setAttribute(n, "true");
        } catch (y) {
          console.error("aria-hidden: cannot operate on ", m, y);
        }
    });
  };
  return u(t), i.clear(), or++, function() {
    a.forEach(function(p) {
      var m = Xe.get(p) - 1, g = s.get(p) - 1;
      Xe.set(p, m), s.set(p, g), m || (wt.has(p) || p.removeAttribute(n), wt.delete(p)), g || p.removeAttribute(r);
    }), or--, or || (Xe = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), St = {});
  };
}, ho = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = Nc(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live], script"))), Ac(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function Tc(e) {
  const t = /* @__PURE__ */ kc(e), r = l.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = l.Children.toArray(s), c = i.find(Oc);
    if (c) {
      const d = c.props.children, u = i.map((p) => p === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...a, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function kc(e) {
  const t = l.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (l.isValidElement(o)) {
      const a = _c(o), i = Mc(s, o.props);
      return o.type !== l.Fragment && (i.ref = n ? et(n, a) : a), l.cloneElement(o, i);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ic = Symbol("radix.slottable");
function Oc(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ic;
}
function Mc(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function _c(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var $t = "Dialog", [go] = Ge($t), [Dc, he] = go($t), bo = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = l.useRef(null), c = l.useRef(null), [d, u] = dt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: $t
  });
  return /* @__PURE__ */ f(
    Dc,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: Ie(),
      titleId: Ie(),
      descriptionId: Ie(),
      open: d,
      onOpenChange: u,
      onOpenToggle: l.useCallback(() => u((p) => !p), [u]),
      modal: a,
      children: r
    }
  );
};
bo.displayName = $t;
var vo = "DialogTrigger", yo = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = he(vo, r), s = Q(t, o.triggerRef);
    return /* @__PURE__ */ f(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Lr(o.open),
        ...n,
        ref: s,
        onClick: z(e.onClick, o.onOpenToggle)
      }
    );
  }
);
yo.displayName = vo;
var _r = "DialogPortal", [Lc, xo] = go(_r, {
  forceMount: void 0
}), wo = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: o } = e, s = he(_r, t);
  return /* @__PURE__ */ f(Lc, { scope: t, forceMount: r, children: l.Children.map(n, (a) => /* @__PURE__ */ f(Ee, { present: r || s.open, children: /* @__PURE__ */ f(Or, { asChild: !0, container: o, children: a }) })) });
};
wo.displayName = _r;
var Tt = "DialogOverlay", So = l.forwardRef(
  (e, t) => {
    const r = xo(Tt, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = he(Tt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ f(Ee, { present: n || s.open, children: /* @__PURE__ */ f(zc, { ...o, ref: t }) }) : null;
  }
);
So.displayName = Tt;
var Fc = /* @__PURE__ */ Tc("DialogOverlay.RemoveScroll"), zc = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = he(Tt, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(Mr, { as: Fc, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        V.div,
        {
          "data-state": Lr(o.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), Ve = "DialogContent", Co = l.forwardRef(
  (e, t) => {
    const r = xo(Ve, e.__scopeDialog), { forceMount: n = r.forceMount, ...o } = e, s = he(Ve, e.__scopeDialog);
    return /* @__PURE__ */ f(Ee, { present: n || s.open, children: s.modal ? /* @__PURE__ */ f($c, { ...o, ref: t }) : /* @__PURE__ */ f(Wc, { ...o, ref: t }) });
  }
);
Co.displayName = Ve;
var $c = l.forwardRef(
  (e, t) => {
    const r = he(Ve, e.__scopeDialog), n = l.useRef(null), o = Q(t, r.contentRef, n);
    return l.useEffect(() => {
      const s = n.current;
      if (s) return ho(s);
    }, []), /* @__PURE__ */ f(
      Eo,
      {
        ...e,
        ref: o,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: z(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = r.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: z(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: z(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Wc = l.forwardRef(
  (e, t) => {
    const r = he(Ve, e.__scopeDialog), n = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ f(
      Eo,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, i;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (n.current || (i = r.triggerRef.current) == null || i.focus(), s.preventDefault()), n.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var c, d;
          (c = e.onInteractOutside) == null || c.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          ((d = r.triggerRef.current) == null ? void 0 : d.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), Eo = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = he(Ve, r), c = l.useRef(null), d = Q(t, c);
    return so(), /* @__PURE__ */ D(Oe, { children: [
      /* @__PURE__ */ f(
        Ir,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ f(
            kr,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Lr(i.open),
              ...a,
              ref: d,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ D(Oe, { children: [
        /* @__PURE__ */ f(Vc, { titleId: i.titleId }),
        /* @__PURE__ */ f(Hc, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Dr = "DialogTitle", Ro = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = he(Dr, r);
    return /* @__PURE__ */ f(V.h2, { id: o.titleId, ...n, ref: t });
  }
);
Ro.displayName = Dr;
var No = "DialogDescription", Po = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = he(No, r);
    return /* @__PURE__ */ f(V.p, { id: o.descriptionId, ...n, ref: t });
  }
);
Po.displayName = No;
var Ao = "DialogClose", To = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, o = he(Ao, r);
    return /* @__PURE__ */ f(
      V.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: z(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
To.displayName = Ao;
function Lr(e) {
  return e ? "open" : "closed";
}
var ko = "DialogTitleWarning", [yp, Io] = dl(ko, {
  contentName: Ve,
  titleName: Dr,
  docsSlug: "dialog"
}), Vc = ({ titleId: e }) => {
  const t = Io(ko), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return l.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, Bc = "DialogDescriptionWarning", Hc = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Io(Bc).contentName}}.`;
  return l.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Uc = bo, jc = yo, Gc = wo, Oo = So, Mo = Co, _o = Ro, Do = Po, Lo = To;
const xp = Uc, wp = jc, Yc = Gc, Sp = Lo, Fo = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  Oo,
  {
    ref: r,
    className: P(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Fo.displayName = Oo.displayName;
const Kc = l.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ D(Yc, { children: [
  /* @__PURE__ */ f(Fo, {}),
  /* @__PURE__ */ D(
    Mo,
    {
      ref: n,
      className: P(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...r,
      children: [
        t,
        /* @__PURE__ */ D(Lo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ f(Pr, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Kc.displayName = Mo.displayName;
const Xc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: P(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Xc.displayName = "DialogHeader";
const qc = ({
  className: e,
  ...t
}) => /* @__PURE__ */ f(
  "div",
  {
    className: P(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
qc.displayName = "DialogFooter";
const Zc = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  _o,
  {
    ref: r,
    className: P(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Zc.displayName = _o.displayName;
const Qc = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  Do,
  {
    ref: r,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
Qc.displayName = Do.displayName;
function Cp({
  icon: e,
  title: t,
  description: r,
  action: n,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      className: P(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        o
      ),
      ...s,
      children: [
        e && /* @__PURE__ */ f("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10", children: /* @__PURE__ */ f(e, { className: "h-6 w-6 text-databeez-primary" }) }),
        /* @__PURE__ */ D("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f("p", { className: "font-semibold text-text-base", children: t }),
          r && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted max-w-sm", children: r })
        ] }),
        n && /* @__PURE__ */ f("div", { children: n })
      ]
    }
  );
}
const Jc = [
  "prose prose-sm max-w-none",
  "prose-headings:text-text-base",
  "prose-p:text-text-base",
  "prose-strong:text-text-base",
  "prose-li:text-text-base",
  "prose-a:text-databeez-primary",
  "prose-code:text-databeez-primary prose-code:bg-background prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs",
  "prose-pre:bg-background prose-pre:border prose-pre:border-border prose-pre:rounded-lg",
  "prose-table:text-text-base",
  "prose-th:text-text-base prose-th:border prose-th:border-border prose-th:px-2 prose-th:py-1",
  "prose-td:text-text-base prose-td:border prose-td:border-border prose-td:px-2 prose-td:py-1"
].join(" "), ed = l.forwardRef(
  ({ children: e, className: t }, r) => /* @__PURE__ */ f("div", { ref: r, className: P(Jc, t), children: e })
);
ed.displayName = "MarkdownContent";
function Ep({
  content: e,
  role: t,
  onRegenerate: r,
  onFeedback: n,
  showActions: o,
  children: s,
  className: a
}) {
  const i = t === "user", [c, d] = l.useState(null), u = (p) => {
    const m = c === p ? null : p;
    d(m), n == null || n(m);
  };
  return /* @__PURE__ */ f(
    "div",
    {
      className: P(
        "flex flex-col gap-1",
        i ? "items-end" : "items-start",
        a
      ),
      children: /* @__PURE__ */ D("div", { className: "flex flex-col max-w-[80%]", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: P(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              i ? "bg-databeez-primary text-white rounded-tr-sm" : "bg-surface border border-border text-text-base rounded-tl-sm"
            ),
            children: i ? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e }) : s ?? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e })
          }
        ),
        !i && o && /* @__PURE__ */ D("div", { className: "flex items-center gap-1 self-end mt-1", children: [
          /* @__PURE__ */ f(cl, { text: e }),
          r && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: r,
              "aria-label": "Rigenera risposta",
              className: "inline-flex items-center text-text-muted hover:text-text-base transition-colors",
              children: /* @__PURE__ */ f(ja, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => u("up"),
              "aria-label": "Risposta utile",
              className: P(
                "inline-flex items-center transition-colors",
                c === "up" ? "text-green-600" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ f(qa, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => u("down"),
              "aria-label": "Risposta non utile",
              className: P(
                "inline-flex items-center transition-colors",
                c === "down" ? "text-red-500" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ f(Xa, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
}
function Rp({
  icon: e,
  iconColor: t = "#f59e0b",
  iconBg: r = "#f59e0b1a",
  title: n,
  description: o,
  action: s,
  horizontal: a = !1,
  className: i,
  ...c
}) {
  return a ? /* @__PURE__ */ f(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-6",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        i
      ),
      ...c,
      children: /* @__PURE__ */ D("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            style: { backgroundColor: r },
            children: /* @__PURE__ */ f(e, { className: "h-6 w-6", style: { color: t } })
          }
        ),
        /* @__PURE__ */ D("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ f("h3", { className: "text-base font-semibold text-text-base", children: n }),
          o && /* @__PURE__ */ f("p", { className: "mt-1 text-sm text-text-muted", children: o }),
          s && /* @__PURE__ */ f("div", { className: "mt-3", children: s })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ D(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-8 text-center",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        i
      ),
      ...c,
      children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
            style: { backgroundColor: r },
            children: /* @__PURE__ */ f(e, { className: "h-8 w-8", style: { color: t } })
          }
        ),
        /* @__PURE__ */ f("h3", { className: "text-lg font-semibold text-text-base mb-3", children: n }),
        o && /* @__PURE__ */ f("p", { className: "text-text-muted text-sm leading-relaxed", children: o }),
        s && /* @__PURE__ */ f("div", { className: "mt-5", children: s })
      ]
    }
  );
}
const td = Dn(
  ({ className: e, label: t, error: r, helperText: n, id: o, ...s }, a) => {
    const i = o || `input-${Math.random().toString(36).substr(2, 9)}`;
    return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f("label", { htmlFor: i, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ f(
        "input",
        {
          id: i,
          className: Er(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            r && "border-red-300 focus:border-red-500 focus:ring-red-500",
            e
          ),
          ref: a,
          ...s
        }
      ),
      r && /* @__PURE__ */ f("p", { className: "text-sm text-red-600", children: r }),
      n && !r && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: n })
    ] });
  }
);
td.displayName = "Input";
const rd = l.forwardRef(
  ({
    icon: e,
    label: t,
    error: r,
    helperText: n,
    rightElement: o,
    className: s,
    id: a,
    ...i
  }, c) => {
    const d = a ?? `input-icon-${Math.random().toString(36).slice(2, 9)}`;
    return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: d,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ D("div", { className: "relative", children: [
        /* @__PURE__ */ f(e, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
        /* @__PURE__ */ f(
          "input",
          {
            ref: c,
            id: d,
            className: P(
              "block w-full rounded-lg border border-border bg-surface py-2.5 pl-10 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              o ? "pr-10" : "pr-4",
              r && "border-red-300 focus:ring-red-500 focus:border-red-500",
              s
            ),
            ...i
          }
        ),
        o && /* @__PURE__ */ f("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: o })
      ] }),
      r && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: r }),
      n && !r && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: n })
    ] });
  }
);
rd.displayName = "InputWithIcon";
const nd = {
  GET: "bg-green-100 text-green-800 border-green-200",
  POST: "bg-blue-100 text-blue-800 border-blue-200",
  PUT: "bg-amber-100 text-amber-800 border-amber-200",
  PATCH: "bg-purple-100 text-purple-800 border-purple-200",
  DELETE: "bg-red-100 text-red-800 border-red-200",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function Np({ method: e, className: t, ...r }) {
  const n = e.toUpperCase(), o = nd[n] ?? "bg-subtle text-text-muted border-border";
  return /* @__PURE__ */ f(
    "span",
    {
      className: P(
        "inline-flex items-center px-2 py-0.5 rounded border text-xs font-mono font-bold tracking-wide",
        o,
        t
      ),
      ...r,
      children: n
    }
  );
}
function Pp({
  title: e,
  description: t,
  actions: r,
  breadcrumb: n,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: P("bg-surface border-b border-border", o),
      ...s,
      children: /* @__PURE__ */ D("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        n && /* @__PURE__ */ f("div", { className: "mb-3", children: n }),
        /* @__PURE__ */ D("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ D("div", { className: "min-w-0", children: [
            /* @__PURE__ */ f("h1", { className: "text-3xl font-bold text-text-base truncate", children: e }),
            t && /* @__PURE__ */ f("p", { className: "mt-1 text-text-muted", children: t })
          ] }),
          r && /* @__PURE__ */ f("div", { className: "flex items-center gap-3 shrink-0", children: r })
        ] })
      ] })
    }
  );
}
var od = l.createContext(void 0);
function Wt(e) {
  const t = l.useContext(od);
  return e || t || "ltr";
}
function pr(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function sd(e, t) {
  return l.useReducer((r, n) => t[r][n] ?? r, e);
}
var Fr = "ScrollArea", [zo] = Ge(Fr), [ad, ue] = zo(Fr), $o = l.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: r,
      type: n = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...a
    } = e, [i, c] = l.useState(null), [d, u] = l.useState(null), [p, m] = l.useState(null), [g, v] = l.useState(null), [h, b] = l.useState(null), [y, x] = l.useState(0), [w, S] = l.useState(0), [R, N] = l.useState(!1), [E, C] = l.useState(!1), A = Q(t, (F) => c(F)), M = Wt(o);
    return /* @__PURE__ */ f(
      ad,
      {
        scope: r,
        type: n,
        dir: M,
        scrollHideDelay: s,
        scrollArea: i,
        viewport: d,
        onViewportChange: u,
        content: p,
        onContentChange: m,
        scrollbarX: g,
        onScrollbarXChange: v,
        scrollbarXEnabled: R,
        onScrollbarXEnabledChange: N,
        scrollbarY: h,
        onScrollbarYChange: b,
        scrollbarYEnabled: E,
        onScrollbarYEnabledChange: C,
        onCornerWidthChange: x,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ f(
          V.div,
          {
            dir: M,
            ...a,
            ref: A,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": y + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
$o.displayName = Fr;
var Wo = "ScrollAreaViewport", Vo = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, children: n, nonce: o, ...s } = e, a = ue(Wo, r), i = l.useRef(null), c = Q(t, i, a.onViewportChange);
    return /* @__PURE__ */ D(Oe, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ f(
        V.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ f("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: n })
        }
      )
    ] });
  }
);
Vo.displayName = Wo;
var ye = "ScrollAreaScrollbar", zr = l.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = ue(ye, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = o, i = e.orientation === "horizontal";
    return l.useEffect(() => (i ? s(!0) : a(!0), () => {
      i ? s(!1) : a(!1);
    }), [i, s, a]), o.type === "hover" ? /* @__PURE__ */ f(id, { ...n, ref: t, forceMount: r }) : o.type === "scroll" ? /* @__PURE__ */ f(ld, { ...n, ref: t, forceMount: r }) : o.type === "auto" ? /* @__PURE__ */ f(Bo, { ...n, ref: t, forceMount: r }) : o.type === "always" ? /* @__PURE__ */ f($r, { ...n, ref: t }) : null;
  }
);
zr.displayName = ye;
var id = l.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = ue(ye, e.__scopeScrollArea), [s, a] = l.useState(!1);
  return l.useEffect(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const d = () => {
        window.clearTimeout(c), a(!0);
      }, u = () => {
        c = window.setTimeout(() => a(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", d), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", d), i.removeEventListener("pointerleave", u);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f(Ee, { present: r || s, children: /* @__PURE__ */ f(
    Bo,
    {
      "data-state": s ? "visible" : "hidden",
      ...n,
      ref: t
    }
  ) });
}), ld = l.forwardRef((e, t) => {
  const { forceMount: r, ...n } = e, o = ue(ye, e.__scopeScrollArea), s = e.orientation === "horizontal", a = Bt(() => c("SCROLL_END"), 100), [i, c] = sd("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return l.useEffect(() => {
    if (i === "idle") {
      const d = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(d);
    }
  }, [i, o.scrollHideDelay, c]), l.useEffect(() => {
    const d = o.viewport, u = s ? "scrollLeft" : "scrollTop";
    if (d) {
      let p = d[u];
      const m = () => {
        const g = d[u];
        p !== g && (c("SCROLL"), a()), p = g;
      };
      return d.addEventListener("scroll", m), () => d.removeEventListener("scroll", m);
    }
  }, [o.viewport, s, c, a]), /* @__PURE__ */ f(Ee, { present: r || i !== "hidden", children: /* @__PURE__ */ f(
    $r,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...n,
      ref: t,
      onPointerEnter: z(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: z(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Bo = l.forwardRef((e, t) => {
  const r = ue(ye, e.__scopeScrollArea), { forceMount: n, ...o } = e, [s, a] = l.useState(!1), i = e.orientation === "horizontal", c = Bt(() => {
    if (r.viewport) {
      const d = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      a(i ? d : u);
    }
  }, 10);
  return Qe(r.viewport, c), Qe(r.content, c), /* @__PURE__ */ f(Ee, { present: n || s, children: /* @__PURE__ */ f(
    $r,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), $r = l.forwardRef((e, t) => {
  const { orientation: r = "vertical", ...n } = e, o = ue(ye, e.__scopeScrollArea), s = l.useRef(null), a = l.useRef(0), [i, c] = l.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), d = Yo(i.viewport, i.content), u = {
    ...n,
    sizes: i,
    onSizesChange: c,
    hasThumb: d > 0 && d < 1,
    onThumbChange: (m) => s.current = m,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (m) => a.current = m
  };
  function p(m, g) {
    return md(m, a.current, i, g);
  }
  return r === "horizontal" ? /* @__PURE__ */ f(
    cd,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const m = o.viewport.scrollLeft, g = wn(m, i, o.dir);
          s.current.style.transform = `translate3d(${g}px, 0, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollLeft = p(m, o.dir));
      }
    }
  ) : r === "vertical" ? /* @__PURE__ */ f(
    dd,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const m = o.viewport.scrollTop, g = wn(m, i);
          s.current.style.transform = `translate3d(0, ${g}px, 0)`;
        }
      },
      onWheelScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = m);
      },
      onDragScroll: (m) => {
        o.viewport && (o.viewport.scrollTop = p(m));
      }
    }
  ) : null;
}), cd = l.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, s = ue(ye, e.__scopeScrollArea), [a, i] = l.useState(), c = l.useRef(null), d = Q(t, c, s.onScrollbarXChange);
  return l.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f(
    Uo,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: d,
      sizes: r,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Vt(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
      onDragScroll: (u) => e.onDragScroll(u.x),
      onWheelScroll: (u, p) => {
        if (s.viewport) {
          const m = s.viewport.scrollLeft + u.deltaX;
          e.onWheelScroll(m), Xo(m, p) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && n({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: It(a.paddingLeft),
            paddingEnd: It(a.paddingRight)
          }
        });
      }
    }
  );
}), dd = l.forwardRef((e, t) => {
  const { sizes: r, onSizesChange: n, ...o } = e, s = ue(ye, e.__scopeScrollArea), [a, i] = l.useState(), c = l.useRef(null), d = Q(t, c, s.onScrollbarYChange);
  return l.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f(
    Uo,
    {
      "data-orientation": "vertical",
      ...o,
      ref: d,
      sizes: r,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Vt(r) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
      onDragScroll: (u) => e.onDragScroll(u.y),
      onWheelScroll: (u, p) => {
        if (s.viewport) {
          const m = s.viewport.scrollTop + u.deltaY;
          e.onWheelScroll(m), Xo(m, p) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && n({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: It(a.paddingTop),
            paddingEnd: It(a.paddingBottom)
          }
        });
      }
    }
  );
}), [ud, Ho] = zo(ye), Uo = l.forwardRef((e, t) => {
  const {
    __scopeScrollArea: r,
    sizes: n,
    hasThumb: o,
    onThumbChange: s,
    onThumbPointerUp: a,
    onThumbPointerDown: i,
    onThumbPositionChange: c,
    onDragScroll: d,
    onWheelScroll: u,
    onResize: p,
    ...m
  } = e, g = ue(ye, r), [v, h] = l.useState(null), b = Q(t, (A) => h(A)), y = l.useRef(null), x = l.useRef(""), w = g.viewport, S = n.content - n.viewport, R = ae(u), N = ae(c), E = Bt(p, 10);
  function C(A) {
    if (y.current) {
      const M = A.clientX - y.current.left, F = A.clientY - y.current.top;
      d({ x: M, y: F });
    }
  }
  return l.useEffect(() => {
    const A = (M) => {
      const F = M.target;
      (v == null ? void 0 : v.contains(F)) && R(M, S);
    };
    return document.addEventListener("wheel", A, { passive: !1 }), () => document.removeEventListener("wheel", A, { passive: !1 });
  }, [w, v, S, R]), l.useEffect(N, [n, N]), Qe(v, E), Qe(g.content, E), /* @__PURE__ */ f(
    ud,
    {
      scope: r,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: ae(s),
      onThumbPointerUp: ae(a),
      onThumbPositionChange: N,
      onThumbPointerDown: ae(i),
      children: /* @__PURE__ */ f(
        V.div,
        {
          ...m,
          ref: b,
          style: { position: "absolute", ...m.style },
          onPointerDown: z(e.onPointerDown, (A) => {
            A.button === 0 && (A.target.setPointerCapture(A.pointerId), y.current = v.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), C(A));
          }),
          onPointerMove: z(e.onPointerMove, C),
          onPointerUp: z(e.onPointerUp, (A) => {
            const M = A.target;
            M.hasPointerCapture(A.pointerId) && M.releasePointerCapture(A.pointerId), document.body.style.webkitUserSelect = x.current, g.viewport && (g.viewport.style.scrollBehavior = ""), y.current = null;
          })
        }
      )
    }
  );
}), kt = "ScrollAreaThumb", jo = l.forwardRef(
  (e, t) => {
    const { forceMount: r, ...n } = e, o = Ho(kt, e.__scopeScrollArea);
    return /* @__PURE__ */ f(Ee, { present: r || o.hasThumb, children: /* @__PURE__ */ f(fd, { ref: t, ...n }) });
  }
), fd = l.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: r, style: n, ...o } = e, s = ue(kt, r), a = Ho(kt, r), { onThumbPositionChange: i } = a, c = Q(
      t,
      (p) => a.onThumbChange(p)
    ), d = l.useRef(void 0), u = Bt(() => {
      d.current && (d.current(), d.current = void 0);
    }, 100);
    return l.useEffect(() => {
      const p = s.viewport;
      if (p) {
        const m = () => {
          if (u(), !d.current) {
            const g = hd(p, i);
            d.current = g, i();
          }
        };
        return i(), p.addEventListener("scroll", m), () => p.removeEventListener("scroll", m);
      }
    }, [s.viewport, u, i]), /* @__PURE__ */ f(
      V.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...n
        },
        onPointerDownCapture: z(e.onPointerDownCapture, (p) => {
          const g = p.target.getBoundingClientRect(), v = p.clientX - g.left, h = p.clientY - g.top;
          a.onThumbPointerDown({ x: v, y: h });
        }),
        onPointerUp: z(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
jo.displayName = kt;
var Wr = "ScrollAreaCorner", Go = l.forwardRef(
  (e, t) => {
    const r = ue(Wr, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
    return r.type !== "scroll" && n ? /* @__PURE__ */ f(pd, { ...e, ref: t }) : null;
  }
);
Go.displayName = Wr;
var pd = l.forwardRef((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, o = ue(Wr, r), [s, a] = l.useState(0), [i, c] = l.useState(0), d = !!(s && i);
  return Qe(o.scrollbarX, () => {
    var p;
    const u = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), Qe(o.scrollbarY, () => {
    var p;
    const u = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(u), a(u);
  }), d ? /* @__PURE__ */ f(
    V.div,
    {
      ...n,
      ref: t,
      style: {
        width: s,
        height: i,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function It(e) {
  return e ? parseInt(e, 10) : 0;
}
function Yo(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Vt(e) {
  const t = Yo(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function md(e, t, r, n = "ltr") {
  const o = Vt(r), s = o / 2, a = t || s, i = o - a, c = r.scrollbar.paddingStart + a, d = r.scrollbar.size - r.scrollbar.paddingEnd - i, u = r.content - r.viewport, p = n === "ltr" ? [0, u] : [u * -1, 0];
  return Ko([c, d], p)(e);
}
function wn(e, t, r = "ltr") {
  const n = Vt(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, a = t.content - t.viewport, i = s - n, c = r === "ltr" ? [0, a] : [a * -1, 0], d = pr(e, c);
  return Ko([0, a], [0, i])(d);
}
function Ko(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Xo(e, t) {
  return e > 0 && e < t;
}
var hd = (e, t = () => {
}) => {
  let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
  return function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, a = r.left !== s.left, i = r.top !== s.top;
    (a || i) && t(), r = s, n = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(n);
};
function Bt(e, t) {
  const r = ae(e), n = l.useRef(0);
  return l.useEffect(() => () => window.clearTimeout(n.current), []), l.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function Qe(e, t) {
  const r = ae(t);
  oe(() => {
    let n = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(n), o.unobserve(e);
      };
    }
  }, [e, r]);
}
var qo = $o, gd = Vo, bd = Go;
const vd = l.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ D(
  qo,
  {
    ref: n,
    className: P("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ f(gd, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f(Zo, {}),
      /* @__PURE__ */ f(bd, {})
    ]
  }
));
vd.displayName = qo.displayName;
const Zo = l.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ f(
  zr,
  {
    ref: n,
    orientation: t,
    className: P(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ f(jo, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Zo.displayName = zr.displayName;
const yd = l.forwardRef(
  ({ value: e, onChange: t, onClear: r, className: n, placeholder: o = "Cerca...", ...s }, a) => {
    const i = () => {
      t(""), r == null || r();
    };
    return /* @__PURE__ */ D("div", { className: P("relative", n), children: [
      /* @__PURE__ */ f(Ga, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ f(
        "input",
        {
          ref: a,
          type: "text",
          value: e,
          onChange: (c) => t(c.target.value),
          placeholder: o,
          className: P(
            "w-full pl-10 pr-9 py-2 text-sm border border-border rounded-lg bg-surface",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "placeholder:text-text-muted text-text-base transition-colors"
          ),
          ...s
        }
      ),
      e && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: i,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ f(Pr, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
yd.displayName = "SearchInput";
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  const t = /* @__PURE__ */ xd(e), r = l.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = l.Children.toArray(s), c = i.find(Sd);
    if (c) {
      const d = c.props.children, u = i.map((p) => p === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...a, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function xd(e) {
  const t = l.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (l.isValidElement(o)) {
      const a = Ed(o), i = Cd(s, o.props);
      return o.type !== l.Fragment && (i.ref = n ? et(n, a) : a), l.cloneElement(o, i);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var wd = Symbol("radix.slottable");
function Sd(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === wd;
}
function Cd(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Ed(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Qo(e) {
  const t = e + "CollectionProvider", [r, n] = Ge(t), [o, s] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: b, children: y } = h, x = ze.useRef(null), w = ze.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: w, collectionRef: x, children: y });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Sn(i), d = ze.forwardRef(
    (h, b) => {
      const { scope: y, children: x } = h, w = s(i, y), S = Q(b, w.collectionRef);
      return /* @__PURE__ */ f(c, { ref: S, children: x });
    }
  );
  d.displayName = i;
  const u = e + "CollectionItemSlot", p = "data-radix-collection-item", m = /* @__PURE__ */ Sn(u), g = ze.forwardRef(
    (h, b) => {
      const { scope: y, children: x, ...w } = h, S = ze.useRef(null), R = Q(b, S), N = s(u, y);
      return ze.useEffect(() => (N.itemMap.set(S, { ref: S, ...w }), () => void N.itemMap.delete(S))), /* @__PURE__ */ f(m, { [p]: "", ref: R, children: x });
    }
  );
  g.displayName = u;
  function v(h) {
    const b = s(e + "CollectionConsumer", h);
    return ze.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${p}]`));
      return Array.from(b.itemMap.values()).sort(
        (N, E) => w.indexOf(N.ref.current) - w.indexOf(E.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: a, Slot: d, ItemSlot: g },
    v,
    n
  ];
}
const Rd = ["top", "right", "bottom", "left"], Me = Math.min, ie = Math.max, Ot = Math.round, Ct = Math.floor, ve = (e) => ({
  x: e,
  y: e
}), Nd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function mr(e, t, r) {
  return ie(e, Me(t, r));
}
function Se(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ce(e) {
  return e.split("-")[0];
}
function tt(e) {
  return e.split("-")[1];
}
function Vr(e) {
  return e === "x" ? "y" : "x";
}
function Br(e) {
  return e === "y" ? "height" : "width";
}
function be(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Hr(e) {
  return Vr(be(e));
}
function Pd(e, t, r) {
  r === void 0 && (r = !1);
  const n = tt(e), o = Hr(e), s = Br(o);
  let a = o === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = Mt(a)), [a, Mt(a)];
}
function Ad(e) {
  const t = Mt(e);
  return [hr(e), t, hr(t)];
}
function hr(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Cn = ["left", "right"], En = ["right", "left"], Td = ["top", "bottom"], kd = ["bottom", "top"];
function Id(e, t, r) {
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? En : Cn : t ? Cn : En;
    case "left":
    case "right":
      return t ? Td : kd;
    default:
      return [];
  }
}
function Od(e, t, r, n) {
  const o = tt(e);
  let s = Id(Ce(e), r === "start", n);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(hr)))), s;
}
function Mt(e) {
  const t = Ce(e);
  return Nd[t] + e.slice(t.length);
}
function Md(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jo(e) {
  return typeof e != "number" ? Md(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function _t(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: o
  } = e;
  return {
    width: n,
    height: o,
    top: r,
    left: t,
    right: t + n,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Rn(e, t, r) {
  let {
    reference: n,
    floating: o
  } = e;
  const s = be(t), a = Hr(t), i = Br(a), c = Ce(t), d = s === "y", u = n.x + n.width / 2 - o.width / 2, p = n.y + n.height / 2 - o.height / 2, m = n[i] / 2 - o[i] / 2;
  let g;
  switch (c) {
    case "top":
      g = {
        x: u,
        y: n.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: n.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch (tt(t)) {
    case "start":
      g[a] -= m * (r && d ? -1 : 1);
      break;
    case "end":
      g[a] += m * (r && d ? -1 : 1);
      break;
  }
  return g;
}
async function _d(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: p = "floating",
    altBoundary: m = !1,
    padding: g = 0
  } = Se(t, e), v = Jo(g), b = i[m ? p === "floating" ? "reference" : "floating" : p], y = _t(await s.getClippingRect({
    element: (r = await (s.isElement == null ? void 0 : s.isElement(b))) == null || r ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: c
  })), x = p === "floating" ? {
    x: n,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = _t(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: w,
    strategy: c
  }) : x);
  return {
    top: (y.top - R.top + v.top) / S.y,
    bottom: (R.bottom - y.bottom + v.bottom) / S.y,
    left: (y.left - R.left + v.left) / S.x,
    right: (R.right - y.right + v.right) / S.x
  };
}
const Dd = 50, Ld = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = r, i = a.detectOverflow ? a : {
    ...a,
    detectOverflow: _d
  }, c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let d = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: p
  } = Rn(d, n, c), m = n, g = 0;
  const v = {};
  for (let h = 0; h < s.length; h++) {
    const b = s[h];
    if (!b)
      continue;
    const {
      name: y,
      fn: x
    } = b, {
      x: w,
      y: S,
      data: R,
      reset: N
    } = await x({
      x: u,
      y: p,
      initialPlacement: n,
      placement: m,
      strategy: o,
      middlewareData: v,
      rects: d,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, p = S ?? p, v[y] = {
      ...v[y],
      ...R
    }, N && g < Dd && (g++, typeof N == "object" && (N.placement && (m = N.placement), N.rects && (d = N.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : N.rects), {
      x: u,
      y: p
    } = Rn(d, m, c)), h = -1);
  }
  return {
    x: u,
    y: p,
    placement: m,
    strategy: o,
    middlewareData: v
  };
}, Fd = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: c
    } = t, {
      element: d,
      padding: u = 0
    } = Se(e, t) || {};
    if (d == null)
      return {};
    const p = Jo(u), m = {
      x: r,
      y: n
    }, g = Hr(o), v = Br(g), h = await a.getDimensions(d), b = g === "y", y = b ? "top" : "left", x = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", S = s.reference[v] + s.reference[g] - m[g] - s.floating[v], R = m[g] - s.reference[g], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(d));
    let E = N ? N[w] : 0;
    (!E || !await (a.isElement == null ? void 0 : a.isElement(N))) && (E = i.floating[w] || s.floating[v]);
    const C = S / 2 - R / 2, A = E / 2 - h[v] / 2 - 1, M = Me(p[y], A), F = Me(p[x], A), B = M, j = E - h[v] - F, H = E / 2 - h[v] / 2 + C, K = mr(B, H, j), O = !c.arrow && tt(o) != null && H !== K && s.reference[v] / 2 - (H < B ? M : F) - h[v] / 2 < 0, W = O ? H < B ? H - B : H - j : 0;
    return {
      [g]: m[g] + W,
      data: {
        [g]: K,
        centerOffset: H - K - W,
        ...O && {
          alignmentOffset: W
        }
      },
      reset: O
    };
  }
}), zd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
        initialPlacement: i,
        platform: c,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: p = !0,
        fallbackPlacements: m,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: h = !0,
        ...b
      } = Se(e, t);
      if ((r = s.arrow) != null && r.alignmentOffset)
        return {};
      const y = Ce(o), x = be(i), w = Ce(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), R = m || (w || !h ? [Mt(i)] : Ad(i)), N = v !== "none";
      !m && N && R.push(...Od(i, h, v, S));
      const E = [i, ...R], C = await c.detectOverflow(t, b), A = [];
      let M = ((n = s.flip) == null ? void 0 : n.overflows) || [];
      if (u && A.push(C[y]), p) {
        const H = Pd(o, a, S);
        A.push(C[H[0]], C[H[1]]);
      }
      if (M = [...M, {
        placement: o,
        overflows: A
      }], !A.every((H) => H <= 0)) {
        var F, B;
        const H = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1, K = E[H];
        if (K && (!(p === "alignment" ? x !== be(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        M.every((L) => be(L.placement) === x ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: M
            },
            reset: {
              placement: K
            }
          };
        let O = (B = M.filter((W) => W.overflows[0] <= 0).sort((W, L) => W.overflows[1] - L.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var j;
              const W = (j = M.filter((L) => {
                if (N) {
                  const X = be(L.placement);
                  return X === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((X) => X > 0).reduce((X, T) => X + T, 0)]).sort((L, X) => L[1] - X[1])[0]) == null ? void 0 : j[0];
              W && (O = W);
              break;
            }
            case "initialPlacement":
              O = i;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Nn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Pn(e) {
  return Rd.some((t) => e[t] >= 0);
}
const $d = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r,
        platform: n
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = Se(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await n.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), i = Nn(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Pn(i)
            }
          };
        }
        case "escaped": {
          const a = await n.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), i = Nn(a, r.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Pn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, es = /* @__PURE__ */ new Set(["left", "top"]);
async function Wd(e, t) {
  const {
    placement: r,
    platform: n,
    elements: o
  } = e, s = await (n.isRTL == null ? void 0 : n.isRTL(o.floating)), a = Ce(r), i = tt(r), c = be(r) === "y", d = es.has(a) ? -1 : 1, u = s && c ? -1 : 1, p = Se(t, e);
  let {
    mainAxis: m,
    crossAxis: g,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof v == "number" && (g = i === "end" ? v * -1 : v), c ? {
    x: g * u,
    y: m * d
  } : {
    x: m * d,
    y: g * u
  };
}
const Vd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, c = await Wd(t, e);
      return a === ((r = i.offset) == null ? void 0 : r.placement) && (n = i.arrow) != null && n.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, Bd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        platform: s
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (y) => {
            let {
              x,
              y: w
            } = y;
            return {
              x,
              y: w
            };
          }
        },
        ...d
      } = Se(e, t), u = {
        x: r,
        y: n
      }, p = await s.detectOverflow(t, d), m = be(Ce(o)), g = Vr(m);
      let v = u[g], h = u[m];
      if (a) {
        const y = g === "y" ? "top" : "left", x = g === "y" ? "bottom" : "right", w = v + p[y], S = v - p[x];
        v = mr(w, v, S);
      }
      if (i) {
        const y = m === "y" ? "top" : "left", x = m === "y" ? "bottom" : "right", w = h + p[y], S = h - p[x];
        h = mr(w, h, S);
      }
      const b = c.fn({
        ...t,
        [g]: v,
        [m]: h
      });
      return {
        ...b,
        data: {
          x: b.x - r,
          y: b.y - n,
          enabled: {
            [g]: a,
            [m]: i
          }
        }
      };
    }
  };
}, Hd = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = Se(e, t), u = {
        x: r,
        y: n
      }, p = be(o), m = Vr(p);
      let g = u[m], v = u[p];
      const h = Se(i, t), b = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (c) {
        const w = m === "y" ? "height" : "width", S = s.reference[m] - s.floating[w] + b.mainAxis, R = s.reference[m] + s.reference[w] - b.mainAxis;
        g < S ? g = S : g > R && (g = R);
      }
      if (d) {
        var y, x;
        const w = m === "y" ? "width" : "height", S = es.has(Ce(o)), R = s.reference[p] - s.floating[w] + (S && ((y = a.offset) == null ? void 0 : y[p]) || 0) + (S ? 0 : b.crossAxis), N = s.reference[p] + s.reference[w] + (S ? 0 : ((x = a.offset) == null ? void 0 : x[p]) || 0) - (S ? b.crossAxis : 0);
        v < R ? v = R : v > N && (v = N);
      }
      return {
        [m]: g,
        [p]: v
      };
    }
  };
}, Ud = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...d
      } = Se(e, t), u = await a.detectOverflow(t, d), p = Ce(o), m = tt(o), g = be(o) === "y", {
        width: v,
        height: h
      } = s.floating;
      let b, y;
      p === "top" || p === "bottom" ? (b = p, y = m === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (y = p, b = m === "end" ? "top" : "bottom");
      const x = h - u.top - u.bottom, w = v - u.left - u.right, S = Me(h - u[b], x), R = Me(v - u[y], w), N = !t.middlewareData.shift;
      let E = S, C = R;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (C = w), (n = t.middlewareData.shift) != null && n.enabled.y && (E = x), N && !m) {
        const M = ie(u.left, 0), F = ie(u.right, 0), B = ie(u.top, 0), j = ie(u.bottom, 0);
        g ? C = v - 2 * (M !== 0 || F !== 0 ? M + F : ie(u.left, u.right)) : E = h - 2 * (B !== 0 || j !== 0 ? B + j : ie(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: C,
        availableHeight: E
      });
      const A = await a.getDimensions(i.floating);
      return v !== A.width || h !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ht() {
  return typeof window < "u";
}
function rt(e) {
  return ts(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function le(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xe(e) {
  var t;
  return (t = (ts(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ts(e) {
  return Ht() ? e instanceof Node || e instanceof le(e).Node : !1;
}
function pe(e) {
  return Ht() ? e instanceof Element || e instanceof le(e).Element : !1;
}
function Re(e) {
  return Ht() ? e instanceof HTMLElement || e instanceof le(e).HTMLElement : !1;
}
function An(e) {
  return !Ht() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof le(e).ShadowRoot;
}
function pt(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: o
  } = me(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && o !== "inline" && o !== "contents";
}
function jd(e) {
  return /^(table|td|th)$/.test(rt(e));
}
function Ut(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Gd = /transform|translate|scale|rotate|perspective|filter/, Yd = /paint|layout|strict|content/, We = (e) => !!e && e !== "none";
let sr;
function Ur(e) {
  const t = pe(e) ? me(e) : e;
  return We(t.transform) || We(t.translate) || We(t.scale) || We(t.rotate) || We(t.perspective) || !jr() && (We(t.backdropFilter) || We(t.filter)) || Gd.test(t.willChange || "") || Yd.test(t.contain || "");
}
function Kd(e) {
  let t = _e(e);
  for (; Re(t) && !Je(t); ) {
    if (Ur(t))
      return t;
    if (Ut(t))
      return null;
    t = _e(t);
  }
  return null;
}
function jr() {
  return sr == null && (sr = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), sr;
}
function Je(e) {
  return /^(html|body|#document)$/.test(rt(e));
}
function me(e) {
  return le(e).getComputedStyle(e);
}
function jt(e) {
  return pe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function _e(e) {
  if (rt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    An(e) && e.host || // Fallback.
    xe(e)
  );
  return An(t) ? t.host : t;
}
function rs(e) {
  const t = _e(e);
  return Je(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Re(t) && pt(t) ? t : rs(t);
}
function ut(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = rs(e), s = o === ((n = e.ownerDocument) == null ? void 0 : n.body), a = le(o);
  if (s) {
    const i = gr(a);
    return t.concat(a, a.visualViewport || [], pt(o) ? o : [], i && r ? ut(i) : []);
  } else
    return t.concat(o, ut(o, [], r));
}
function gr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ns(e) {
  const t = me(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const o = Re(e), s = o ? e.offsetWidth : r, a = o ? e.offsetHeight : n, i = Ot(r) !== s || Ot(n) !== a;
  return i && (r = s, n = a), {
    width: r,
    height: n,
    $: i
  };
}
function Gr(e) {
  return pe(e) ? e : e.contextElement;
}
function Ze(e) {
  const t = Gr(e);
  if (!Re(t))
    return ve(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: o,
    $: s
  } = ns(t);
  let a = (s ? Ot(r.width) : r.width) / n, i = (s ? Ot(r.height) : r.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const Xd = /* @__PURE__ */ ve(0);
function os(e) {
  const t = le(e);
  return !jr() || !t.visualViewport ? Xd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qd(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== le(e) ? !1 : t;
}
function Be(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const o = e.getBoundingClientRect(), s = Gr(e);
  let a = ve(1);
  t && (n ? pe(n) && (a = Ze(n)) : a = Ze(e));
  const i = qd(s, r, n) ? os(s) : ve(0);
  let c = (o.left + i.x) / a.x, d = (o.top + i.y) / a.y, u = o.width / a.x, p = o.height / a.y;
  if (s) {
    const m = le(s), g = n && pe(n) ? le(n) : n;
    let v = m, h = gr(v);
    for (; h && n && g !== v; ) {
      const b = Ze(h), y = h.getBoundingClientRect(), x = me(h), w = y.left + (h.clientLeft + parseFloat(x.paddingLeft)) * b.x, S = y.top + (h.clientTop + parseFloat(x.paddingTop)) * b.y;
      c *= b.x, d *= b.y, u *= b.x, p *= b.y, c += w, d += S, v = le(h), h = gr(v);
    }
  }
  return _t({
    width: u,
    height: p,
    x: c,
    y: d
  });
}
function Gt(e, t) {
  const r = jt(e).scrollLeft;
  return t ? t.left + r : Be(xe(e)).left + r;
}
function ss(e, t) {
  const r = e.getBoundingClientRect(), n = r.left + t.scrollLeft - Gt(e, r), o = r.top + t.scrollTop;
  return {
    x: n,
    y: o
  };
}
function Zd(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: o
  } = e;
  const s = o === "fixed", a = xe(n), i = t ? Ut(t.floating) : !1;
  if (n === a || i && s)
    return r;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = ve(1);
  const u = ve(0), p = Re(n);
  if ((p || !p && !s) && ((rt(n) !== "body" || pt(a)) && (c = jt(n)), p)) {
    const g = Be(n);
    d = Ze(n), u.x = g.x + n.clientLeft, u.y = g.y + n.clientTop;
  }
  const m = a && !p && !s ? ss(a, c) : ve(0);
  return {
    width: r.width * d.x,
    height: r.height * d.y,
    x: r.x * d.x - c.scrollLeft * d.x + u.x + m.x,
    y: r.y * d.y - c.scrollTop * d.y + u.y + m.y
  };
}
function Qd(e) {
  return Array.from(e.getClientRects());
}
function Jd(e) {
  const t = xe(e), r = jt(e), n = e.ownerDocument.body, o = ie(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), s = ie(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let a = -r.scrollLeft + Gt(e);
  const i = -r.scrollTop;
  return me(n).direction === "rtl" && (a += ie(t.clientWidth, n.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const Tn = 25;
function eu(e, t) {
  const r = le(e), n = xe(e), o = r.visualViewport;
  let s = n.clientWidth, a = n.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const u = jr();
    (!u || u && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const d = Gt(n);
  if (d <= 0) {
    const u = n.ownerDocument, p = u.body, m = getComputedStyle(p), g = u.compatMode === "CSS1Compat" && parseFloat(m.marginLeft) + parseFloat(m.marginRight) || 0, v = Math.abs(n.clientWidth - p.clientWidth - g);
    v <= Tn && (s -= v);
  } else d <= Tn && (s += d);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
function tu(e, t) {
  const r = Be(e, !0, t === "fixed"), n = r.top + e.clientTop, o = r.left + e.clientLeft, s = Re(e) ? Ze(e) : ve(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, d = n * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: d
  };
}
function kn(e, t, r) {
  let n;
  if (t === "viewport")
    n = eu(e, r);
  else if (t === "document")
    n = Jd(xe(e));
  else if (pe(t))
    n = tu(t, r);
  else {
    const o = os(e);
    n = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return _t(n);
}
function as(e, t) {
  const r = _e(e);
  return r === t || !pe(r) || Je(r) ? !1 : me(r).position === "fixed" || as(r, t);
}
function ru(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = ut(e, [], !1).filter((i) => pe(i) && rt(i) !== "body"), o = null;
  const s = me(e).position === "fixed";
  let a = s ? _e(e) : e;
  for (; pe(a) && !Je(a); ) {
    const i = me(a), c = Ur(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || pt(a) && !c && as(e, a)) ? n = n.filter((u) => u !== a) : o = i, a = _e(a);
  }
  return t.set(e, n), n;
}
function nu(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: o
  } = e;
  const a = [...r === "clippingAncestors" ? Ut(t) ? [] : ru(t, this._c) : [].concat(r), n], i = kn(t, a[0], o);
  let c = i.top, d = i.right, u = i.bottom, p = i.left;
  for (let m = 1; m < a.length; m++) {
    const g = kn(t, a[m], o);
    c = ie(g.top, c), d = Me(g.right, d), u = Me(g.bottom, u), p = ie(g.left, p);
  }
  return {
    width: d - p,
    height: u - c,
    x: p,
    y: c
  };
}
function ou(e) {
  const {
    width: t,
    height: r
  } = ns(e);
  return {
    width: t,
    height: r
  };
}
function su(e, t, r) {
  const n = Re(t), o = xe(t), s = r === "fixed", a = Be(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = ve(0);
  function d() {
    c.x = Gt(o);
  }
  if (n || !n && !s)
    if ((rt(t) !== "body" || pt(o)) && (i = jt(t)), n) {
      const g = Be(t, !0, s, t);
      c.x = g.x + t.clientLeft, c.y = g.y + t.clientTop;
    } else o && d();
  s && !n && o && d();
  const u = o && !n && !s ? ss(o, i) : ve(0), p = a.left + i.scrollLeft - c.x - u.x, m = a.top + i.scrollTop - c.y - u.y;
  return {
    x: p,
    y: m,
    width: a.width,
    height: a.height
  };
}
function ar(e) {
  return me(e).position === "static";
}
function In(e, t) {
  if (!Re(e) || me(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return xe(e) === r && (r = r.ownerDocument.body), r;
}
function is(e, t) {
  const r = le(e);
  if (Ut(e))
    return r;
  if (!Re(e)) {
    let o = _e(e);
    for (; o && !Je(o); ) {
      if (pe(o) && !ar(o))
        return o;
      o = _e(o);
    }
    return r;
  }
  let n = In(e, t);
  for (; n && jd(n) && ar(n); )
    n = In(n, t);
  return n && Je(n) && ar(n) && !Ur(n) ? r : n || Kd(e) || r;
}
const au = async function(e) {
  const t = this.getOffsetParent || is, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: su(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function iu(e) {
  return me(e).direction === "rtl";
}
const lu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Zd,
  getDocumentElement: xe,
  getClippingRect: nu,
  getOffsetParent: is,
  getElementRects: au,
  getClientRects: Qd,
  getDimensions: ou,
  getScale: Ze,
  isElement: pe,
  isRTL: iu
};
function ls(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function cu(e, t) {
  let r = null, n;
  const o = xe(e);
  function s() {
    var i;
    clearTimeout(n), (i = r) == null || i.disconnect(), r = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const d = e.getBoundingClientRect(), {
      left: u,
      top: p,
      width: m,
      height: g
    } = d;
    if (i || t(), !m || !g)
      return;
    const v = Ct(p), h = Ct(o.clientWidth - (u + m)), b = Ct(o.clientHeight - (p + g)), y = Ct(u), w = {
      rootMargin: -v + "px " + -h + "px " + -b + "px " + -y + "px",
      threshold: ie(0, Me(1, c)) || 1
    };
    let S = !0;
    function R(N) {
      const E = N[0].intersectionRatio;
      if (E !== c) {
        if (!S)
          return a();
        E ? a(!1, E) : n = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !ls(d, e.getBoundingClientRect()) && a(), S = !1;
    }
    try {
      r = new IntersectionObserver(R, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(R, w);
    }
    r.observe(e);
  }
  return a(!0), s;
}
function du(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = n, d = Gr(e), u = o || s ? [...d ? ut(d) : [], ...t ? ut(t) : []] : [];
  u.forEach((y) => {
    o && y.addEventListener("scroll", r, {
      passive: !0
    }), s && y.addEventListener("resize", r);
  });
  const p = d && i ? cu(d, r) : null;
  let m = -1, g = null;
  a && (g = new ResizeObserver((y) => {
    let [x] = y;
    x && x.target === d && g && t && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var w;
      (w = g) == null || w.observe(t);
    })), r();
  }), d && !c && g.observe(d), t && g.observe(t));
  let v, h = c ? Be(e) : null;
  c && b();
  function b() {
    const y = Be(e);
    h && !ls(h, y) && r(), h = y, v = requestAnimationFrame(b);
  }
  return r(), () => {
    var y;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", r), s && x.removeEventListener("resize", r);
    }), p == null || p(), (y = g) == null || y.disconnect(), g = null, c && cancelAnimationFrame(v);
  };
}
const uu = Vd, fu = Bd, pu = zd, mu = Ud, hu = $d, On = Fd, gu = Hd, bu = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), o = {
    platform: lu,
    ...r
  }, s = {
    ...o.platform,
    _c: n
  };
  return Ld(e, t, {
    ...o,
    platform: s
  });
};
var vu = typeof document < "u", yu = function() {
}, Nt = vu ? Aa : yu;
function Dt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Dt(e[n], t[n]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const s = o[n];
      if (!(s === "_owner" && e.$$typeof) && !Dt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function cs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Mn(e, t) {
  const r = cs(e);
  return Math.round(t * r) / r;
}
function ir(e) {
  const t = l.useRef(e);
  return Nt(() => {
    t.current = e;
  }), t;
}
function xu(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: d
  } = e, [u, p] = l.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [m, g] = l.useState(n);
  Dt(m, n) || g(n);
  const [v, h] = l.useState(null), [b, y] = l.useState(null), x = l.useCallback((L) => {
    L !== N.current && (N.current = L, h(L));
  }, []), w = l.useCallback((L) => {
    L !== E.current && (E.current = L, y(L));
  }, []), S = s || v, R = a || b, N = l.useRef(null), E = l.useRef(null), C = l.useRef(u), A = c != null, M = ir(c), F = ir(o), B = ir(d), j = l.useCallback(() => {
    if (!N.current || !E.current)
      return;
    const L = {
      placement: t,
      strategy: r,
      middleware: m
    };
    F.current && (L.platform = F.current), bu(N.current, E.current, L).then((X) => {
      const T = {
        ...X,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      H.current && !Dt(C.current, T) && (C.current = T, Ft.flushSync(() => {
        p(T);
      }));
    });
  }, [m, t, r, F, B]);
  Nt(() => {
    d === !1 && C.current.isPositioned && (C.current.isPositioned = !1, p((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [d]);
  const H = l.useRef(!1);
  Nt(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Nt(() => {
    if (S && (N.current = S), R && (E.current = R), S && R) {
      if (M.current)
        return M.current(S, R, j);
      j();
    }
  }, [S, R, j, M, A]);
  const K = l.useMemo(() => ({
    reference: N,
    floating: E,
    setReference: x,
    setFloating: w
  }), [x, w]), O = l.useMemo(() => ({
    reference: S,
    floating: R
  }), [S, R]), W = l.useMemo(() => {
    const L = {
      position: r,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return L;
    const X = Mn(O.floating, u.x), T = Mn(O.floating, u.y);
    return i ? {
      ...L,
      transform: "translate(" + X + "px, " + T + "px)",
      ...cs(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: X,
      top: T
    };
  }, [r, i, O.floating, u.x, u.y]);
  return l.useMemo(() => ({
    ...u,
    update: j,
    refs: K,
    elements: O,
    floatingStyles: W
  }), [u, j, K, O, W]);
}
const wu = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: o
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? On({
        element: n.current,
        padding: o
      }).fn(r) : {} : n ? On({
        element: n,
        padding: o
      }).fn(r) : {};
    }
  };
}, Su = (e, t) => {
  const r = uu(e);
  return {
    name: r.name,
    fn: r.fn,
    options: [e, t]
  };
}, Cu = (e, t) => {
  const r = fu(e);
  return {
    name: r.name,
    fn: r.fn,
    options: [e, t]
  };
}, Eu = (e, t) => ({
  fn: gu(e).fn,
  options: [e, t]
}), Ru = (e, t) => {
  const r = pu(e);
  return {
    name: r.name,
    fn: r.fn,
    options: [e, t]
  };
}, Nu = (e, t) => {
  const r = mu(e);
  return {
    name: r.name,
    fn: r.fn,
    options: [e, t]
  };
}, Pu = (e, t) => {
  const r = hu(e);
  return {
    name: r.name,
    fn: r.fn,
    options: [e, t]
  };
}, Au = (e, t) => {
  const r = wu(e);
  return {
    name: r.name,
    fn: r.fn,
    options: [e, t]
  };
};
var Tu = "Arrow", ds = l.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ f(
    V.svg,
    {
      ...s,
      ref: t,
      width: n,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ f("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ds.displayName = Tu;
var ku = ds;
function Iu(e) {
  const [t, r] = l.useState(void 0);
  return oe(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          a = d.inlineSize, i = d.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        r({ width: a, height: i });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var Yr = "Popper", [us, fs] = Ge(Yr), [Ou, ps] = us(Yr), ms = (e) => {
  const { __scopePopper: t, children: r } = e, [n, o] = l.useState(null);
  return /* @__PURE__ */ f(Ou, { scope: t, anchor: n, onAnchorChange: o, children: r });
};
ms.displayName = Yr;
var hs = "PopperAnchor", gs = l.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...o } = e, s = ps(hs, r), a = l.useRef(null), i = Q(t, a), c = l.useRef(null);
    return l.useEffect(() => {
      const d = c.current;
      c.current = (n == null ? void 0 : n.current) || a.current, d !== c.current && s.onAnchorChange(c.current);
    }), n ? null : /* @__PURE__ */ f(V.div, { ...o, ref: i });
  }
);
gs.displayName = hs;
var Kr = "PopperContent", [Mu, _u] = us(Kr), bs = l.forwardRef(
  (e, t) => {
    var _, Z, U, q, G, Y;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: u = 0,
      sticky: p = "partial",
      hideWhenDetached: m = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...h
    } = e, b = ps(Kr, r), [y, x] = l.useState(null), w = Q(t, (ne) => x(ne)), [S, R] = l.useState(null), N = Iu(S), E = (N == null ? void 0 : N.width) ?? 0, C = (N == null ? void 0 : N.height) ?? 0, A = n + (s !== "center" ? "-" + s : ""), M = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, F = Array.isArray(d) ? d : [d], B = F.length > 0, j = {
      padding: M,
      boundary: F.filter(Lu),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: H, floatingStyles: K, placement: O, isPositioned: W, middlewareData: L } = xu({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...ne) => du(...ne, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Su({ mainAxis: o + C, alignmentAxis: a }),
        c && Cu({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? Eu() : void 0,
          ...j
        }),
        c && Ru({ ...j }),
        Nu({
          ...j,
          apply: ({ elements: ne, rects: se, availableWidth: ot, availableHeight: st }) => {
            const { width: at, height: Pa } = se.reference, ht = ne.floating.style;
            ht.setProperty("--radix-popper-available-width", `${ot}px`), ht.setProperty("--radix-popper-available-height", `${st}px`), ht.setProperty("--radix-popper-anchor-width", `${at}px`), ht.setProperty("--radix-popper-anchor-height", `${Pa}px`);
          }
        }),
        S && Au({ element: S, padding: i }),
        Fu({ arrowWidth: E, arrowHeight: C }),
        m && Pu({ strategy: "referenceHidden", ...j })
      ]
    }), [X, T] = xs(O), ce = ae(v);
    oe(() => {
      W && (ce == null || ce());
    }, [W, ce]);
    const Ne = (_ = L.arrow) == null ? void 0 : _.x, Pe = (Z = L.arrow) == null ? void 0 : Z.y, de = ((U = L.arrow) == null ? void 0 : U.centerOffset) !== 0, [te, J] = l.useState();
    return oe(() => {
      y && J(window.getComputedStyle(y).zIndex);
    }, [y]), /* @__PURE__ */ f(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: W ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: te,
          "--radix-popper-transform-origin": [
            (q = L.transformOrigin) == null ? void 0 : q.x,
            (G = L.transformOrigin) == null ? void 0 : G.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Y = L.hide) == null ? void 0 : Y.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          Mu,
          {
            scope: r,
            placedSide: X,
            onArrowChange: R,
            arrowX: Ne,
            arrowY: Pe,
            shouldHideArrow: de,
            children: /* @__PURE__ */ f(
              V.div,
              {
                "data-side": X,
                "data-align": T,
                ...h,
                ref: w,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
bs.displayName = Kr;
var vs = "PopperArrow", Du = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ys = l.forwardRef(function(t, r) {
  const { __scopePopper: n, ...o } = t, s = _u(vs, n), a = Du[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ f(
          ku,
          {
            ...o,
            ref: r,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ys.displayName = vs;
function Lu(e) {
  return e !== null;
}
var Fu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, y, x;
    const { placement: r, rects: n, middlewareData: o } = t, a = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [d, u] = xs(r), p = { start: "0%", center: "50%", end: "100%" }[u], m = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + i / 2, g = (((x = o.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let v = "", h = "";
    return d === "bottom" ? (v = a ? p : `${m}px`, h = `${-c}px`) : d === "top" ? (v = a ? p : `${m}px`, h = `${n.floating.height + c}px`) : d === "right" ? (v = `${-c}px`, h = a ? p : `${g}px`) : d === "left" && (v = `${n.floating.width + c}px`, h = a ? p : `${g}px`), { data: { x: v, y: h } };
  }
});
function xs(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var zu = ms, $u = gs, Wu = bs, Vu = ys;
// @__NO_SIDE_EFFECTS__
function Bu(e) {
  const t = /* @__PURE__ */ Hu(e), r = l.forwardRef((n, o) => {
    const { children: s, ...a } = n, i = l.Children.toArray(s), c = i.find(ju);
    if (c) {
      const d = c.props.children, u = i.map((p) => p === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...a, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...a, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Hu(e) {
  const t = l.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (l.isValidElement(o)) {
      const a = Yu(o), i = Gu(s, o.props);
      return o.type !== l.Fragment && (i.ref = n ? et(n, a) : a), l.cloneElement(o, i);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Uu = Symbol("radix.slottable");
function ju(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Uu;
}
function Gu(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Yu(e) {
  var n, o;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function Ku(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var ws = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Xu = "VisuallyHidden", qu = l.forwardRef(
  (e, t) => /* @__PURE__ */ f(
    V.span,
    {
      ...e,
      ref: t,
      style: { ...ws, ...e.style }
    }
  )
);
qu.displayName = Xu;
var Zu = [" ", "Enter", "ArrowUp", "ArrowDown"], Qu = [" ", "Enter"], He = "Select", [Yt, Kt, Ju] = Qo(He), [nt] = Ge(He, [
  Ju,
  fs
]), Xt = fs(), [ef, Le] = nt(He), [tf, rf] = nt(He), Ss = (e) => {
  const {
    __scopeSelect: t,
    children: r,
    open: n,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: d,
    name: u,
    autoComplete: p,
    disabled: m,
    required: g,
    form: v
  } = e, h = Xt(t), [b, y] = l.useState(null), [x, w] = l.useState(null), [S, R] = l.useState(!1), N = Wt(d), [E, C] = dt({
    prop: n,
    defaultProp: o ?? !1,
    onChange: s,
    caller: He
  }), [A, M] = dt({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: He
  }), F = l.useRef(null), B = b ? v || !!b.closest("form") : !0, [j, H] = l.useState(/* @__PURE__ */ new Set()), K = Array.from(j).map((O) => O.props.value).join(";");
  return /* @__PURE__ */ f(zu, { ...h, children: /* @__PURE__ */ D(
    ef,
    {
      required: g,
      scope: t,
      trigger: b,
      onTriggerChange: y,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: R,
      contentId: Ie(),
      value: A,
      onValueChange: M,
      open: E,
      onOpenChange: C,
      dir: N,
      triggerPointerDownPosRef: F,
      disabled: m,
      children: [
        /* @__PURE__ */ f(Yt.Provider, { scope: t, children: /* @__PURE__ */ f(
          tf,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: l.useCallback((O) => {
              H((W) => new Set(W).add(O));
            }, []),
            onNativeOptionRemove: l.useCallback((O) => {
              H((W) => {
                const L = new Set(W);
                return L.delete(O), L;
              });
            }, []),
            children: r
          }
        ) }),
        B ? /* @__PURE__ */ D(
          Ys,
          {
            "aria-hidden": !0,
            required: g,
            tabIndex: -1,
            name: u,
            autoComplete: p,
            value: A,
            onChange: (O) => M(O.target.value),
            disabled: m,
            form: v,
            children: [
              A === void 0 ? /* @__PURE__ */ f("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
Ss.displayName = He;
var Cs = "SelectTrigger", Es = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, disabled: n = !1, ...o } = e, s = Xt(r), a = Le(Cs, r), i = a.disabled || n, c = Q(t, a.onTriggerChange), d = Kt(r), u = l.useRef("touch"), [p, m, g] = Xs((h) => {
      const b = d().filter((w) => !w.disabled), y = b.find((w) => w.value === a.value), x = qs(b, h, y);
      x !== void 0 && a.onValueChange(x.value);
    }), v = (h) => {
      i || (a.onOpenChange(!0), g()), h && (a.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ f($u, { asChild: !0, ...s, children: /* @__PURE__ */ f(
      V.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Ks(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: z(o.onClick, (h) => {
          h.currentTarget.focus(), u.current !== "mouse" && v(h);
        }),
        onPointerDown: z(o.onPointerDown, (h) => {
          u.current = h.pointerType;
          const b = h.target;
          b.hasPointerCapture(h.pointerId) && b.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (v(h), h.preventDefault());
        }),
        onKeyDown: z(o.onKeyDown, (h) => {
          const b = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && m(h.key), !(b && h.key === " ") && Zu.includes(h.key) && (v(), h.preventDefault());
        })
      }
    ) });
  }
);
Es.displayName = Cs;
var Rs = "SelectValue", Ns = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, children: s, placeholder: a = "", ...i } = e, c = Le(Rs, r), { onValueNodeHasChildrenChange: d } = c, u = s !== void 0, p = Q(t, c.onValueNodeChange);
    return oe(() => {
      d(u);
    }, [d, u]), /* @__PURE__ */ f(
      V.span,
      {
        ...i,
        ref: p,
        style: { pointerEvents: "none" },
        children: Ks(c.value) ? /* @__PURE__ */ f(Oe, { children: a }) : s
      }
    );
  }
);
Ns.displayName = Rs;
var nf = "SelectIcon", Ps = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, children: n, ...o } = e;
    return /* @__PURE__ */ f(V.span, { "aria-hidden": !0, ...o, ref: t, children: n || "▼" });
  }
);
Ps.displayName = nf;
var of = "SelectPortal", As = (e) => /* @__PURE__ */ f(Or, { asChild: !0, ...e });
As.displayName = of;
var Ue = "SelectContent", Ts = l.forwardRef(
  (e, t) => {
    const r = Le(Ue, e.__scopeSelect), [n, o] = l.useState();
    if (oe(() => {
      o(new DocumentFragment());
    }, []), !r.open) {
      const s = n;
      return s ? Ft.createPortal(
        /* @__PURE__ */ f(ks, { scope: e.__scopeSelect, children: /* @__PURE__ */ f(Yt.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ f(Is, { ...e, ref: t });
  }
);
Ts.displayName = Ue;
var fe = 10, [ks, Fe] = nt(Ue), sf = "SelectContentImpl", af = /* @__PURE__ */ Bu("SelectContent.RemoveScroll"), Is = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      position: n = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: u,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: b,
      //
      ...y
    } = e, x = Le(Ue, r), [w, S] = l.useState(null), [R, N] = l.useState(null), E = Q(t, (_) => S(_)), [C, A] = l.useState(null), [M, F] = l.useState(
      null
    ), B = Kt(r), [j, H] = l.useState(!1), K = l.useRef(!1);
    l.useEffect(() => {
      if (w) return ho(w);
    }, [w]), so();
    const O = l.useCallback(
      (_) => {
        const [Z, ...U] = B().map((Y) => Y.ref.current), [q] = U.slice(-1), G = document.activeElement;
        for (const Y of _)
          if (Y === G || (Y == null || Y.scrollIntoView({ block: "nearest" }), Y === Z && R && (R.scrollTop = 0), Y === q && R && (R.scrollTop = R.scrollHeight), Y == null || Y.focus(), document.activeElement !== G)) return;
      },
      [B, R]
    ), W = l.useCallback(
      () => O([C, w]),
      [O, C, w]
    );
    l.useEffect(() => {
      j && W();
    }, [j, W]);
    const { onOpenChange: L, triggerPointerDownPosRef: X } = x;
    l.useEffect(() => {
      if (w) {
        let _ = { x: 0, y: 0 };
        const Z = (q) => {
          var G, Y;
          _ = {
            x: Math.abs(Math.round(q.pageX) - (((G = X.current) == null ? void 0 : G.x) ?? 0)),
            y: Math.abs(Math.round(q.pageY) - (((Y = X.current) == null ? void 0 : Y.y) ?? 0))
          };
        }, U = (q) => {
          _.x <= 10 && _.y <= 10 ? q.preventDefault() : w.contains(q.target) || L(!1), document.removeEventListener("pointermove", Z), X.current = null;
        };
        return X.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", U, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", U, { capture: !0 });
        };
      }
    }, [w, L, X]), l.useEffect(() => {
      const _ = () => L(!1);
      return window.addEventListener("blur", _), window.addEventListener("resize", _), () => {
        window.removeEventListener("blur", _), window.removeEventListener("resize", _);
      };
    }, [L]);
    const [T, ce] = Xs((_) => {
      const Z = B().filter((G) => !G.disabled), U = Z.find((G) => G.ref.current === document.activeElement), q = qs(Z, _, U);
      q && setTimeout(() => q.ref.current.focus());
    }), Ne = l.useCallback(
      (_, Z, U) => {
        const q = !K.current && !U;
        (x.value !== void 0 && x.value === Z || q) && (A(_), q && (K.current = !0));
      },
      [x.value]
    ), Pe = l.useCallback(() => w == null ? void 0 : w.focus(), [w]), de = l.useCallback(
      (_, Z, U) => {
        const q = !K.current && !U;
        (x.value !== void 0 && x.value === Z || q) && F(_);
      },
      [x.value]
    ), te = n === "popper" ? br : Os, J = te === br ? {
      side: i,
      sideOffset: c,
      align: d,
      alignOffset: u,
      arrowPadding: p,
      collisionBoundary: m,
      collisionPadding: g,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ f(
      ks,
      {
        scope: r,
        content: w,
        viewport: R,
        onViewportChange: N,
        itemRefCallback: Ne,
        selectedItem: C,
        onItemLeave: Pe,
        itemTextRefCallback: de,
        focusSelectedItem: W,
        selectedItemText: M,
        position: n,
        isPositioned: j,
        searchRef: T,
        children: /* @__PURE__ */ f(Mr, { as: af, allowPinchZoom: !0, children: /* @__PURE__ */ f(
          Ir,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (_) => {
              _.preventDefault();
            },
            onUnmountAutoFocus: z(o, (_) => {
              var Z;
              (Z = x.trigger) == null || Z.focus({ preventScroll: !0 }), _.preventDefault();
            }),
            children: /* @__PURE__ */ f(
              kr,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (_) => _.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ f(
                  te,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (_) => _.preventDefault(),
                    ...y,
                    ...J,
                    onPlaced: () => H(!0),
                    ref: E,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...y.style
                    },
                    onKeyDown: z(y.onKeyDown, (_) => {
                      const Z = _.ctrlKey || _.altKey || _.metaKey;
                      if (_.key === "Tab" && _.preventDefault(), !Z && _.key.length === 1 && ce(_.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(_.key)) {
                        let q = B().filter((G) => !G.disabled).map((G) => G.ref.current);
                        if (["ArrowUp", "End"].includes(_.key) && (q = q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(_.key)) {
                          const G = _.target, Y = q.indexOf(G);
                          q = q.slice(Y + 1);
                        }
                        setTimeout(() => O(q)), _.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Is.displayName = sf;
var lf = "SelectItemAlignedPosition", Os = l.forwardRef((e, t) => {
  const { __scopeSelect: r, onPlaced: n, ...o } = e, s = Le(Ue, r), a = Fe(Ue, r), [i, c] = l.useState(null), [d, u] = l.useState(null), p = Q(t, (E) => u(E)), m = Kt(r), g = l.useRef(!1), v = l.useRef(!0), { viewport: h, selectedItem: b, selectedItemText: y, focusSelectedItem: x } = a, w = l.useCallback(() => {
    if (s.trigger && s.valueNode && i && d && h && b && y) {
      const E = s.trigger.getBoundingClientRect(), C = d.getBoundingClientRect(), A = s.valueNode.getBoundingClientRect(), M = y.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const G = M.left - C.left, Y = A.left - G, ne = E.left - Y, se = E.width + ne, ot = Math.max(se, C.width), st = window.innerWidth - fe, at = pr(Y, [
          fe,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(fe, st - ot)
        ]);
        i.style.minWidth = se + "px", i.style.left = at + "px";
      } else {
        const G = C.right - M.right, Y = window.innerWidth - A.right - G, ne = window.innerWidth - E.right - Y, se = E.width + ne, ot = Math.max(se, C.width), st = window.innerWidth - fe, at = pr(Y, [
          fe,
          Math.max(fe, st - ot)
        ]);
        i.style.minWidth = se + "px", i.style.right = at + "px";
      }
      const F = m(), B = window.innerHeight - fe * 2, j = h.scrollHeight, H = window.getComputedStyle(d), K = parseInt(H.borderTopWidth, 10), O = parseInt(H.paddingTop, 10), W = parseInt(H.borderBottomWidth, 10), L = parseInt(H.paddingBottom, 10), X = K + O + j + L + W, T = Math.min(b.offsetHeight * 5, X), ce = window.getComputedStyle(h), Ne = parseInt(ce.paddingTop, 10), Pe = parseInt(ce.paddingBottom, 10), de = E.top + E.height / 2 - fe, te = B - de, J = b.offsetHeight / 2, _ = b.offsetTop + J, Z = K + O + _, U = X - Z;
      if (Z <= de) {
        const G = F.length > 0 && b === F[F.length - 1].ref.current;
        i.style.bottom = "0px";
        const Y = d.clientHeight - h.offsetTop - h.offsetHeight, ne = Math.max(
          te,
          J + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (G ? Pe : 0) + Y + W
        ), se = Z + ne;
        i.style.height = se + "px";
      } else {
        const G = F.length > 0 && b === F[0].ref.current;
        i.style.top = "0px";
        const ne = Math.max(
          de,
          K + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (G ? Ne : 0) + J
        ) + U;
        i.style.height = ne + "px", h.scrollTop = Z - de + h.offsetTop;
      }
      i.style.margin = `${fe}px 0`, i.style.minHeight = T + "px", i.style.maxHeight = B + "px", n == null || n(), requestAnimationFrame(() => g.current = !0);
    }
  }, [
    m,
    s.trigger,
    s.valueNode,
    i,
    d,
    h,
    b,
    y,
    s.dir,
    n
  ]);
  oe(() => w(), [w]);
  const [S, R] = l.useState();
  oe(() => {
    d && R(window.getComputedStyle(d).zIndex);
  }, [d]);
  const N = l.useCallback(
    (E) => {
      E && v.current === !0 && (w(), x == null || x(), v.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ f(
    df,
    {
      scope: r,
      contentWrapper: i,
      shouldExpandOnScrollRef: g,
      onScrollButtonChange: N,
      children: /* @__PURE__ */ f(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ f(
            V.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Os.displayName = lf;
var cf = "SelectPopperPosition", br = l.forwardRef((e, t) => {
  const {
    __scopeSelect: r,
    align: n = "start",
    collisionPadding: o = fe,
    ...s
  } = e, a = Xt(r);
  return /* @__PURE__ */ f(
    Wu,
    {
      ...a,
      ...s,
      ref: t,
      align: n,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
br.displayName = cf;
var [df, Xr] = nt(Ue, {}), vr = "SelectViewport", Ms = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, nonce: n, ...o } = e, s = Fe(vr, r), a = Xr(vr, r), i = Q(t, s.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ D(Oe, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: n
        }
      ),
      /* @__PURE__ */ f(Yt.Slot, { scope: r, children: /* @__PURE__ */ f(
        V.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: z(o.onScroll, (d) => {
            const u = d.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: m } = a;
            if (m != null && m.current && p) {
              const g = Math.abs(c.current - u.scrollTop);
              if (g > 0) {
                const v = window.innerHeight - fe * 2, h = parseFloat(p.style.minHeight), b = parseFloat(p.style.height), y = Math.max(h, b);
                if (y < v) {
                  const x = y + g, w = Math.min(v, x), S = x - w;
                  p.style.height = w + "px", p.style.bottom === "0px" && (u.scrollTop = S > 0 ? S : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = u.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ms.displayName = vr;
var _s = "SelectGroup", [uf, ff] = nt(_s), Ds = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Ie();
    return /* @__PURE__ */ f(uf, { scope: r, id: o, children: /* @__PURE__ */ f(V.div, { role: "group", "aria-labelledby": o, ...n, ref: t }) });
  }
);
Ds.displayName = _s;
var Ls = "SelectLabel", Fs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = ff(Ls, r);
    return /* @__PURE__ */ f(V.div, { id: o.id, ...n, ref: t });
  }
);
Fs.displayName = Ls;
var Lt = "SelectItem", [pf, zs] = nt(Lt), $s = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: r,
      value: n,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = Le(Lt, r), c = Fe(Lt, r), d = i.value === n, [u, p] = l.useState(s ?? ""), [m, g] = l.useState(!1), v = Q(
      t,
      (x) => {
        var w;
        return (w = c.itemRefCallback) == null ? void 0 : w.call(c, x, n, o);
      }
    ), h = Ie(), b = l.useRef("touch"), y = () => {
      o || (i.onValueChange(n), i.onOpenChange(!1));
    };
    if (n === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f(
      pf,
      {
        scope: r,
        value: n,
        disabled: o,
        textId: h,
        isSelected: d,
        onItemTextChange: l.useCallback((x) => {
          p((w) => w || ((x == null ? void 0 : x.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f(
          Yt.ItemSlot,
          {
            scope: r,
            value: n,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ f(
              V.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": m ? "" : void 0,
                "aria-selected": d && m,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: v,
                onFocus: z(a.onFocus, () => g(!0)),
                onBlur: z(a.onBlur, () => g(!1)),
                onClick: z(a.onClick, () => {
                  b.current !== "mouse" && y();
                }),
                onPointerUp: z(a.onPointerUp, () => {
                  b.current === "mouse" && y();
                }),
                onPointerDown: z(a.onPointerDown, (x) => {
                  b.current = x.pointerType;
                }),
                onPointerMove: z(a.onPointerMove, (x) => {
                  var w;
                  b.current = x.pointerType, o ? (w = c.onItemLeave) == null || w.call(c) : b.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: z(a.onPointerLeave, (x) => {
                  var w;
                  x.currentTarget === document.activeElement && ((w = c.onItemLeave) == null || w.call(c));
                }),
                onKeyDown: z(a.onKeyDown, (x) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && x.key === " " || (Qu.includes(x.key) && y(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
$s.displayName = Lt;
var lt = "SelectItemText", Ws = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, className: n, style: o, ...s } = e, a = Le(lt, r), i = Fe(lt, r), c = zs(lt, r), d = rf(lt, r), [u, p] = l.useState(null), m = Q(
      t,
      (y) => p(y),
      c.onItemTextChange,
      (y) => {
        var x;
        return (x = i.itemTextRefCallback) == null ? void 0 : x.call(i, y, c.value, c.disabled);
      }
    ), g = u == null ? void 0 : u.textContent, v = l.useMemo(
      () => /* @__PURE__ */ f("option", { value: c.value, disabled: c.disabled, children: g }, c.value),
      [c.disabled, c.value, g]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: b } = d;
    return oe(() => (h(v), () => b(v)), [h, b, v]), /* @__PURE__ */ D(Oe, { children: [
      /* @__PURE__ */ f(V.span, { id: c.textId, ...s, ref: m }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Ft.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Ws.displayName = lt;
var Vs = "SelectItemIndicator", Bs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return zs(Vs, r).isSelected ? /* @__PURE__ */ f(V.span, { "aria-hidden": !0, ...n, ref: t }) : null;
  }
);
Bs.displayName = Vs;
var yr = "SelectScrollUpButton", Hs = l.forwardRef((e, t) => {
  const r = Fe(yr, e.__scopeSelect), n = Xr(yr, e.__scopeSelect), [o, s] = l.useState(!1), a = Q(t, n.onScrollButtonChange);
  return oe(() => {
    if (r.viewport && r.isPositioned) {
      let i = function() {
        const d = c.scrollTop > 0;
        s(d);
      };
      const c = r.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ f(
    js,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = r;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Hs.displayName = yr;
var xr = "SelectScrollDownButton", Us = l.forwardRef((e, t) => {
  const r = Fe(xr, e.__scopeSelect), n = Xr(xr, e.__scopeSelect), [o, s] = l.useState(!1), a = Q(t, n.onScrollButtonChange);
  return oe(() => {
    if (r.viewport && r.isPositioned) {
      let i = function() {
        const d = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < d;
        s(u);
      };
      const c = r.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [r.viewport, r.isPositioned]), o ? /* @__PURE__ */ f(
    js,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = r;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Us.displayName = xr;
var js = l.forwardRef((e, t) => {
  const { __scopeSelect: r, onAutoScroll: n, ...o } = e, s = Fe("SelectScrollButton", r), a = l.useRef(null), i = Kt(r), c = l.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return l.useEffect(() => () => c(), [c]), oe(() => {
    var u;
    const d = i().find((p) => p.ref.current === document.activeElement);
    (u = d == null ? void 0 : d.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ f(
    V.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: z(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerMove: z(o.onPointerMove, () => {
        var d;
        (d = s.onItemLeave) == null || d.call(s), a.current === null && (a.current = window.setInterval(n, 50));
      }),
      onPointerLeave: z(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), mf = "SelectSeparator", Gs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e;
    return /* @__PURE__ */ f(V.div, { "aria-hidden": !0, ...n, ref: t });
  }
);
Gs.displayName = mf;
var wr = "SelectArrow", hf = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: r, ...n } = e, o = Xt(r), s = Le(wr, r), a = Fe(wr, r);
    return s.open && a.position === "popper" ? /* @__PURE__ */ f(Vu, { ...o, ...n, ref: t }) : null;
  }
);
hf.displayName = wr;
var gf = "SelectBubbleInput", Ys = l.forwardRef(
  ({ __scopeSelect: e, value: t, ...r }, n) => {
    const o = l.useRef(null), s = Q(n, o), a = Ku(t);
    return l.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && u) {
        const p = new Event("change", { bubbles: !0 });
        u.call(i, t), i.dispatchEvent(p);
      }
    }, [a, t]), /* @__PURE__ */ f(
      V.select,
      {
        ...r,
        style: { ...ws, ...r.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
Ys.displayName = gf;
function Ks(e) {
  return e === "" || e === void 0;
}
function Xs(e) {
  const t = ae(e), r = l.useRef(""), n = l.useRef(0), o = l.useCallback(
    (a) => {
      const i = r.current + a;
      t(i), function c(d) {
        r.current = d, window.clearTimeout(n.current), d !== "" && (n.current = window.setTimeout(() => c(""), 1e3));
      }(i);
    },
    [t]
  ), s = l.useCallback(() => {
    r.current = "", window.clearTimeout(n.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(n.current), []), [r, o, s];
}
function qs(e, t, r) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = r ? e.indexOf(r) : -1;
  let a = bf(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((d) => d !== r));
  const c = a.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== r ? c : void 0;
}
function bf(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var vf = Ss, Zs = Es, yf = Ns, xf = Ps, wf = As, Qs = Ts, Sf = Ms, Cf = Ds, Js = Fs, ea = $s, Ef = Ws, Rf = Bs, ta = Hs, ra = Us, na = Gs;
const Ap = vf, Tp = Cf, kp = yf, Nf = l.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ D(
  Zs,
  {
    ref: n,
    className: P(
      "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base",
      "placeholder:text-text-muted",
      "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      e
    ),
    ...r,
    children: [
      t,
      /* @__PURE__ */ f(xf, { asChild: !0, children: /* @__PURE__ */ f(Fn, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
Nf.displayName = Zs.displayName;
const oa = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  ta,
  {
    ref: r,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f($a, { className: "h-4 w-4" })
  }
));
oa.displayName = ta.displayName;
const sa = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  ra,
  {
    ref: r,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(Fn, { className: "h-4 w-4" })
  }
));
sa.displayName = ra.displayName;
const Pf = l.forwardRef(({ className: e, children: t, position: r = "popper", ...n }, o) => /* @__PURE__ */ f(wf, { children: /* @__PURE__ */ D(
  Qs,
  {
    ref: o,
    className: P(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-surface text-text-base shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
      r === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: r,
    ...n,
    children: [
      /* @__PURE__ */ f(oa, {}),
      /* @__PURE__ */ f(
        Sf,
        {
          className: P(
            "p-1",
            r === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ f(sa, {})
    ]
  }
) }));
Pf.displayName = Qs.displayName;
const Af = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  Js,
  {
    ref: r,
    className: P("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
Af.displayName = Js.displayName;
const Tf = l.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ D(
  ea,
  {
    ref: n,
    className: P(
      "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none",
      "focus:bg-subtle focus:text-text-base",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f(Rf, { children: /* @__PURE__ */ f(Nr, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ f(Ef, { children: t })
    ]
  }
));
Tf.displayName = ea.displayName;
const kf = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  na,
  {
    ref: r,
    className: P("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
kf.displayName = na.displayName;
function Ip({
  open: e,
  onClose: t,
  width: r = 380,
  header: n,
  children: o,
  className: s,
  ...a
}) {
  return e ? /* @__PURE__ */ D(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        width: r,
        height: "100vh",
        zIndex: 50,
        overflowY: "auto"
      },
      className: P(
        "bg-surface border-l border-border shadow-2xl",
        s
      ),
      ...a,
      children: [
        /* @__PURE__ */ f(
          "button",
          {
            onClick: t,
            className: "absolute top-3 right-3 z-10 rounded-md p-1.5 text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
            "aria-label": "Chiudi pannello",
            children: /* @__PURE__ */ f(Pr, { className: "size-5" })
          }
        ),
        n && /* @__PURE__ */ f("div", { className: "px-4 pt-4 pb-2 pr-10", children: n }),
        /* @__PURE__ */ f("div", { className: P(n ? "" : "pt-4"), children: o })
      ]
    }
  ) : null;
}
function aa({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: P("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function If({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ f("div", { className: P("space-y-2", t), children: Array.from({ length: e }).map((r, n) => /* @__PURE__ */ f(
    aa,
    {
      className: P("h-4", n === e - 1 ? "w-2/3" : "w-full")
    },
    n
  )) });
}
function Op({ className: e }) {
  return /* @__PURE__ */ D("div", { className: P("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ f(aa, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ f(If, { lines: 3 })
  ] });
}
const Of = ft(
  "animate-spin rounded-full border-4 border-databeez-primary border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        default: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function Mf({ className: e, size: t, label: r = "Caricamento...", ...n }) {
  return /* @__PURE__ */ D(
    "div",
    {
      role: "status",
      "aria-label": r,
      className: P("inline-flex items-center justify-center", e),
      ...n,
      children: [
        /* @__PURE__ */ f("div", { className: Of({ size: t }) }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: r })
      ]
    }
  );
}
function Mp({ label: e }) {
  return /* @__PURE__ */ D("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ f(Mf, { size: "lg", label: e }),
    e && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
function _p({
  icon: e,
  iconColor: t = "#f59e0b",
  label: r,
  value: n,
  trend: o,
  className: s,
  ...a
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-4 text-center hover:shadow-md transition-shadow",
        s
      ),
      ...a,
      children: [
        e && /* @__PURE__ */ f(
          e,
          {
            className: "h-6 w-6 mx-auto mb-2",
            style: { color: t }
          }
        ),
        /* @__PURE__ */ f("div", { className: "text-2xl font-bold text-text-base", children: n }),
        /* @__PURE__ */ f("div", { className: "text-sm text-text-muted mt-0.5", children: r }),
        o && /* @__PURE__ */ f(
          "div",
          {
            className: P(
              "text-xs font-medium mt-1",
              o.positive ? "text-green-600" : "text-red-500"
            ),
            children: o.value
          }
        )
      ]
    }
  );
}
const _f = ft(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        success: "bg-green-500/10 text-green-600 dark:text-green-400",
        warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        error: "bg-red-500/10 text-red-600 dark:text-red-400",
        info: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        neutral: "bg-subtle text-text-muted"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
), Df = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-text-muted"
};
function Dp({
  variant: e = "neutral",
  label: t,
  dot: r = !0,
  className: n,
  ...o
}) {
  return /* @__PURE__ */ D(
    "span",
    {
      className: P(_f({ variant: e }), n),
      ...o,
      children: [
        r && /* @__PURE__ */ f(
          "span",
          {
            className: P(
              "h-1.5 w-1.5 rounded-full shrink-0",
              Df[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
const Lf = {
  operational: { dot: "bg-green-500", text: "text-green-500 dark:text-green-400", label: "Operational" },
  degraded: { dot: "bg-yellow-500", text: "text-yellow-500 dark:text-yellow-400", label: "Degraded" },
  outage: { dot: "bg-red-500", text: "text-red-500 dark:text-red-400", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function Lp({
  label: e,
  status: t,
  statusLabel: r,
  className: n,
  ...o
}) {
  const s = Lf[t];
  return /* @__PURE__ */ D("div", { className: P("flex items-center justify-between", n), ...o, children: [
    /* @__PURE__ */ D("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f("div", { className: P("h-2 w-2 rounded-full mr-3", s.dot) }),
      /* @__PURE__ */ f("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ f("span", { className: P("text-sm", s.text), children: r ?? s.label })
  ] });
}
function Fp({ tabs: e, activeTab: t, onChange: r, className: n }) {
  return /* @__PURE__ */ f("div", { className: P("border-b border-border", n), children: /* @__PURE__ */ f("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
    const s = t === o.id, a = o.icon;
    return /* @__PURE__ */ D(
      "button",
      {
        role: "tab",
        "aria-selected": s,
        onClick: () => r(o.id),
        className: P(
          "inline-flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
          s ? "border-databeez-primary text-databeez-primary" : "border-transparent text-text-muted hover:text-text-base hover:border-border"
        ),
        children: [
          a && /* @__PURE__ */ f(a, { className: "h-4 w-4" }),
          o.label
        ]
      },
      o.id
    );
  }) }) });
}
const Ff = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f(
  "table",
  {
    ref: r,
    className: P("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ff.displayName = "Table";
const zf = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f("thead", { ref: r, className: P("bg-subtle border-b border-border", e), ...t }));
zf.displayName = "TableHeader";
const $f = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "tbody",
  {
    ref: r,
    className: P("divide-y divide-border", e),
    ...t
  }
));
$f.displayName = "TableBody";
const Wf = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "tfoot",
  {
    ref: r,
    className: P("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
Wf.displayName = "TableFooter";
const Vf = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "tr",
  {
    ref: r,
    className: P(
      "transition-colors hover:bg-subtle data-[state=selected]:bg-primary-50",
      e
    ),
    ...t
  }
));
Vf.displayName = "TableRow";
const Bf = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "th",
  {
    ref: r,
    className: P(
      "h-10 px-4 text-left align-middle font-semibold text-text-muted text-xs uppercase tracking-wider",
      e
    ),
    ...t
  }
));
Bf.displayName = "TableHead";
const Hf = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "td",
  {
    ref: r,
    className: P("px-4 py-3 align-middle text-text-base", e),
    ...t
  }
));
Hf.displayName = "TableCell";
const Uf = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  "caption",
  {
    ref: r,
    className: P("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
Uf.displayName = "TableCaption";
var lr = "rovingFocusGroup.onEntryFocus", jf = { bubbles: !1, cancelable: !0 }, mt = "RovingFocusGroup", [Sr, ia, Gf] = Qo(mt), [Yf, la] = Ge(
  mt,
  [Gf]
), [Kf, Xf] = Yf(mt), ca = l.forwardRef(
  (e, t) => /* @__PURE__ */ f(Sr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Sr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(qf, { ...e, ref: t }) }) })
);
ca.displayName = mt;
var qf = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: d,
    preventScrollOnEntryFocus: u = !1,
    ...p
  } = e, m = l.useRef(null), g = Q(t, m), v = Wt(s), [h, b] = dt({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: mt
  }), [y, x] = l.useState(!1), w = ae(d), S = ia(r), R = l.useRef(!1), [N, E] = l.useState(0);
  return l.useEffect(() => {
    const C = m.current;
    if (C)
      return C.addEventListener(lr, w), () => C.removeEventListener(lr, w);
  }, [w]), /* @__PURE__ */ f(
    Kf,
    {
      scope: r,
      orientation: n,
      dir: v,
      loop: o,
      currentTabStopId: h,
      onItemFocus: l.useCallback(
        (C) => b(C),
        [b]
      ),
      onItemShiftTab: l.useCallback(() => x(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => E((C) => C + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => E((C) => C - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        V.div,
        {
          tabIndex: y || N === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: z(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: z(e.onFocus, (C) => {
            const A = !R.current;
            if (C.target === C.currentTarget && A && !y) {
              const M = new CustomEvent(lr, jf);
              if (C.currentTarget.dispatchEvent(M), !M.defaultPrevented) {
                const F = S().filter((O) => O.focusable), B = F.find((O) => O.active), j = F.find((O) => O.id === h), K = [B, j, ...F].filter(
                  Boolean
                ).map((O) => O.ref.current);
                fa(K, u);
              }
            }
            R.current = !1;
          }),
          onBlur: z(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), da = "RovingFocusGroupItem", ua = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = Ie(), d = s || c, u = Xf(da, r), p = u.currentTabStopId === d, m = ia(r), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: h } = u;
    return l.useEffect(() => {
      if (n)
        return g(), () => v();
    }, [n, g, v]), /* @__PURE__ */ f(
      Sr.ItemSlot,
      {
        scope: r,
        id: d,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ f(
          V.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: z(e.onMouseDown, (b) => {
              n ? u.onItemFocus(d) : b.preventDefault();
            }),
            onFocus: z(e.onFocus, () => u.onItemFocus(d)),
            onKeyDown: z(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const y = Jf(b, u.orientation, u.dir);
              if (y !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let w = m().filter((S) => S.focusable).map((S) => S.ref.current);
                if (y === "last") w.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && w.reverse();
                  const S = w.indexOf(b.currentTarget);
                  w = u.loop ? ep(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => fa(w));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: p, hasTabStop: h != null }) : a
          }
        )
      }
    );
  }
);
ua.displayName = da;
var Zf = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Qf(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Jf(e, t, r) {
  const n = Qf(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Zf[n];
}
function fa(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function ep(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var tp = ca, rp = ua, qt = "Tabs", [np] = Ge(qt, [
  la
]), pa = la(), [op, qr] = np(qt), ma = l.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: r,
      value: n,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...d
    } = e, u = Wt(i), [p, m] = dt({
      prop: n,
      onChange: o,
      defaultProp: s ?? "",
      caller: qt
    });
    return /* @__PURE__ */ f(
      op,
      {
        scope: r,
        baseId: Ie(),
        value: p,
        onValueChange: m,
        orientation: a,
        dir: u,
        activationMode: c,
        children: /* @__PURE__ */ f(
          V.div,
          {
            dir: u,
            "data-orientation": a,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
ma.displayName = qt;
var ha = "TabsList", ga = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, loop: n = !0, ...o } = e, s = qr(ha, r), a = pa(r);
    return /* @__PURE__ */ f(
      tp,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: n,
        children: /* @__PURE__ */ f(
          V.div,
          {
            role: "tablist",
            "aria-orientation": s.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
ga.displayName = ha;
var ba = "TabsTrigger", va = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, disabled: o = !1, ...s } = e, a = qr(ba, r), i = pa(r), c = wa(a.baseId, n), d = Sa(a.baseId, n), u = n === a.value;
    return /* @__PURE__ */ f(
      rp,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ f(
          V.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": d,
            "data-state": u ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...s,
            ref: t,
            onMouseDown: z(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? a.onValueChange(n) : p.preventDefault();
            }),
            onKeyDown: z(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && a.onValueChange(n);
            }),
            onFocus: z(e.onFocus, () => {
              const p = a.activationMode !== "manual";
              !u && !o && p && a.onValueChange(n);
            })
          }
        )
      }
    );
  }
);
va.displayName = ba;
var ya = "TabsContent", xa = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: r, value: n, forceMount: o, children: s, ...a } = e, i = qr(ya, r), c = wa(i.baseId, n), d = Sa(i.baseId, n), u = n === i.value, p = l.useRef(u);
    return l.useEffect(() => {
      const m = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(m);
    }, []), /* @__PURE__ */ f(Ee, { present: o || u, children: ({ present: m }) => /* @__PURE__ */ f(
      V.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !m,
        id: d,
        tabIndex: 0,
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: m && s
      }
    ) });
  }
);
xa.displayName = ya;
function wa(e, t) {
  return `${e}-trigger-${t}`;
}
function Sa(e, t) {
  return `${e}-content-${t}`;
}
var sp = ma, Ca = ga, Ea = va, Ra = xa;
const zp = sp, ap = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  Ca,
  {
    ref: r,
    className: P(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
ap.displayName = Ca.displayName;
const ip = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  Ea,
  {
    ref: r,
    className: P(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-surface data-[state=active]:text-text-base data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
ip.displayName = Ea.displayName;
const lp = l.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f(
  Ra,
  {
    ref: r,
    className: P(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
lp.displayName = Ra.displayName;
const cp = l.forwardRef(
  ({ className: e, label: t, error: r, helperText: n, id: o, ...s }, a) => {
    const i = o ?? (t == null ? void 0 : t.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ D("div", { className: "w-full space-y-1.5", children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: i,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ f(
        "textarea",
        {
          id: i,
          ref: a,
          className: P(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-base placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-subtle",
            "resize-y min-h-[80px] transition-colors",
            r && "border-error-500 focus:ring-error-500 focus:border-error-500",
            e
          ),
          "aria-invalid": !!r,
          "aria-describedby": r ? `${i}-error` : n ? `${i}-helper` : void 0,
          ...s
        }
      ),
      r && /* @__PURE__ */ f("p", { id: `${i}-error`, className: "text-xs text-error-500", children: r }),
      !r && n && /* @__PURE__ */ f("p", { id: `${i}-helper`, className: "text-xs text-text-muted", children: n })
    ] });
  }
);
cp.displayName = "Textarea";
const Cr = "databeez-theme", $p = `(function(){var t=localStorage.getItem('${Cr}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, Na = Ta({
  theme: "system",
  setTheme: () => {
  }
});
function Wp({ children: e }) {
  const [t, r] = ct("system"), n = (s) => {
    const a = document.documentElement, i = window.matchMedia("(prefers-color-scheme: dark)").matches;
    s === "dark" || s === "system" && i ? a.classList.add("dark") : a.classList.remove("dark");
  };
  cr(() => {
    const a = localStorage.getItem(Cr) ?? "system";
    r(a), n(a);
  }, []), cr(() => {
    if (t !== "system") return;
    const s = window.matchMedia("(prefers-color-scheme: dark)"), a = () => n("system");
    return s.addEventListener("change", a), () => s.removeEventListener("change", a);
  }, [t]);
  const o = (s) => {
    r(s), localStorage.setItem(Cr, s), n(s);
  };
  return /* @__PURE__ */ f(Na.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function Vp() {
  return ka(Na);
}
function Bp(e, t = {}) {
  const { immediate: r = !0 } = t, [n, o] = ct(null), [s, a] = ct(r), [i, c] = ct(null), d = Ia(e);
  d.current = e;
  const u = Oa(async () => {
    var p;
    a(!0), c(null);
    try {
      const m = await d.current();
      m.success && m.data !== void 0 ? o(m.data) : c(((p = m.error) == null ? void 0 : p.message) ?? "Si è verificato un errore");
    } catch (m) {
      c(m instanceof Error ? m.message : "Si è verificato un errore");
    } finally {
      a(!1);
    }
  }, []);
  return cr(() => {
    r && u();
  }, t.deps ?? []), { data: n, loading: s, error: i, refetch: u };
}
const _n = {
  A: { label: "Organizzazione", icon: Rr },
  P: { label: "Persona", icon: $n }
};
function Hp(e) {
  return _n[e ?? ""] ?? _n.A;
}
function Up(e) {
  switch (e) {
    case "F":
      return { label: "Professionista", icon: Fa };
    default:
      return { label: "Persona", icon: $n };
  }
}
const dp = {
  S: { label: "Società", icon: Rr },
  D: { label: "Ditta individuale", icon: Ka },
  E: { label: "Ente pubblico", icon: Ba },
  X: { label: "Estera", icon: Wa },
  P: { label: "PIVA", icon: Ua },
  A: { label: "Altro", icon: Va }
}, up = { label: "Organizzazione", icon: Rr };
function jp(e) {
  return dp[e ?? ""] ?? up;
}
const Gp = {
  label: "Indirizzo",
  icon: Ha
};
export {
  Gp as ADDRESS_META,
  Hi as Alert,
  bp as Badge,
  to as Button,
  tl as Card,
  sl as CardContent,
  ol as CardDescription,
  al as CardFooter,
  rl as CardHeader,
  nl as CardTitle,
  il as ChatInput,
  vp as CodeBlock,
  cl as CopyButton,
  xp as Dialog,
  Sp as DialogClose,
  Kc as DialogContent,
  Qc as DialogDescription,
  qc as DialogFooter,
  Xc as DialogHeader,
  Fo as DialogOverlay,
  Yc as DialogPortal,
  Zc as DialogTitle,
  wp as DialogTrigger,
  Cp as EmptyState,
  Rp as FeatureCard,
  hp as InfoRow,
  td as Input,
  rd as InputWithIcon,
  ed as MarkdownContent,
  Ep as MessageBubble,
  Np as MethodBadge,
  dp as ORG_TYPE_META,
  Pp as PageHeader,
  _n as SUBJECT_TYPE_META,
  vd as ScrollArea,
  Zo as ScrollBar,
  yd as SearchInput,
  gp as Section,
  Ap as Select,
  Pf as SelectContent,
  Tp as SelectGroup,
  Tf as SelectItem,
  Af as SelectLabel,
  sa as SelectScrollDownButton,
  oa as SelectScrollUpButton,
  kf as SelectSeparator,
  Nf as SelectTrigger,
  kp as SelectValue,
  Ip as SidePanel,
  aa as Skeleton,
  Op as SkeletonCard,
  If as SkeletonText,
  Mf as Spinner,
  Mp as SpinnerOverlay,
  _p as StatCard,
  Dp as StatusBadge,
  Lp as StatusIndicatorRow,
  $p as THEME_ANTI_FOUC_SCRIPT,
  Cr as THEME_STORAGE_KEY,
  Fp as TabSwitch,
  Ff as Table,
  $f as TableBody,
  Uf as TableCaption,
  Hf as TableCell,
  Wf as TableFooter,
  Bf as TableHead,
  zf as TableHeader,
  Vf as TableRow,
  zp as Tabs,
  lp as TabsContent,
  ap as TabsList,
  ip as TabsTrigger,
  cp as Textarea,
  Wp as ThemeProvider,
  Vi as alertVariants,
  Ui as badgeVariants,
  el as buttonVariants,
  P as cn,
  jp as getOrgMeta,
  Up as getPersonMeta,
  Hp as getSubjectMeta,
  Of as spinnerVariants,
  _f as statusBadgeVariants,
  Bp as useAsyncData,
  Vp as useTheme
};
