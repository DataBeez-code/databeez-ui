"use client";
import { jsxs as T, jsx as m, Fragment as Je } from "react/jsx-runtime";
import * as d from "react";
import D, { forwardRef as ka, createElement as Mo, useLayoutEffect as Na, useState as ct, createContext as Ma, useContext as Pa, useCallback as Ce, useRef as Kt, useEffect as xn, useMemo as bn, useId as Pl } from "react";
import * as Rn from "react-dom";
import El from "react-dom";
function Ea(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ea(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Lr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ea(e)) && (r && (r += " "), r += t);
  return r;
}
const Po = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Eo = Lr, en = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Eo(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], f = a == null ? void 0 : a[l];
    if (u === null) return null;
    const h = Po(u) || Po(f);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [f, h] = u;
    return h === void 0 || (l[f] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: f, className: h, ...p } = u;
    return Object.entries(p).every((x) => {
      let [g, b] = x;
      return Array.isArray(b) ? b.includes({
        ...a,
        ...i
      }[g]) : {
        ...a,
        ...i
      }[g] === b;
    }) ? [
      ...l,
      f,
      h
    ] : l;
  }, []);
  return Eo(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var Ol = {
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
const Dl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ce = (e, t) => {
  const n = ka(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => Mo(
      "svg",
      {
        ref: l,
        ...Ol,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${Dl(e)}`,
        ...c
      },
      [
        ...t.map(([u, f]) => Mo(u, f)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, Tl = ce("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Rl = ce("Briefcase", [
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
]), Yr = ce("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]), Oa = ce("Calendar", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2",
      ry: "2",
      key: "eu3xkr"
    }
  ],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
]), Al = ce("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]), An = ce("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), Da = ce("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Il = ce("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), _l = ce("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), Wl = ce("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]), Ta = ce("Copy", [
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
]), Fl = ce("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]), zl = ce("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Oo = ce("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), $l = ce("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]), Bl = ce("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]), Ll = ce("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]), Yl = ce("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]), Hl = ce("RefreshCw", [
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
]), Ra = ce("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Vl = ce("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), jl = ce("Store", [
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
]), Ul = ce("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]), Gl = ce("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]), Aa = ce("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), ql = ce("Warehouse", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg"
    }
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }]
]), Xl = ce("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]), In = ce("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Kl = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Zl = (e, t) => ({
  classGroupId: e,
  validator: t
}), Ia = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Sn = "-", Do = [], Ql = "arbitrary..", Jl = (e) => {
  const t = td(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return ed(s);
      const i = s.split(Sn), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return _a(i, c, t);
    },
    getConflictingClassGroupIds: (s, i) => {
      if (i) {
        const c = r[s], l = n[s];
        return c ? l ? Kl(l, c) : c : l || Do;
      }
      return n[s] || Do;
    }
  };
}, _a = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], a = n.nextPart.get(o);
  if (a) {
    const l = _a(e, t + 1, a);
    if (l) return l;
  }
  const s = n.validators;
  if (s === null)
    return;
  const i = t === 0 ? e.join(Sn) : e.slice(t).join(Sn), c = s.length;
  for (let l = 0; l < c; l++) {
    const u = s[l];
    if (u.validator(i))
      return u.classGroupId;
  }
}, ed = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Ql + r : void 0;
})(), td = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return nd(n, t);
}, nd = (e, t) => {
  const n = Ia();
  for (const r in e) {
    const o = e[r];
    Hr(o, n, r, t);
  }
  return n;
}, Hr = (e, t, n, r) => {
  const o = e.length;
  for (let a = 0; a < o; a++) {
    const s = e[a];
    rd(s, t, n, r);
  }
}, rd = (e, t, n, r) => {
  if (typeof e == "string") {
    od(e, t, n);
    return;
  }
  if (typeof e == "function") {
    ad(e, t, n, r);
    return;
  }
  sd(e, t, n, r);
}, od = (e, t, n) => {
  const r = e === "" ? t : Wa(t, e);
  r.classGroupId = n;
}, ad = (e, t, n, r) => {
  if (id(e)) {
    Hr(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Zl(n, e));
}, sd = (e, t, n, r) => {
  const o = Object.entries(e), a = o.length;
  for (let s = 0; s < a; s++) {
    const [i, c] = o[s];
    Hr(c, Wa(t, i), n, r);
  }
}, Wa = (e, t) => {
  let n = e;
  const r = t.split(Sn), o = r.length;
  for (let a = 0; a < o; a++) {
    const s = r[a];
    let i = n.nextPart.get(s);
    i || (i = Ia(), n.nextPart.set(s, i)), n = i;
  }
  return n;
}, id = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, cd = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (a, s) => {
    n[a] = s, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(a) {
      let s = n[a];
      if (s !== void 0)
        return s;
      if ((s = r[a]) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      a in n ? n[a] = s : o(a, s);
    }
  };
}, Mr = "!", To = ":", ld = [], Ro = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), dd = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let s = 0, i = 0, c = 0, l;
    const u = o.length;
    for (let g = 0; g < u; g++) {
      const b = o[g];
      if (s === 0 && i === 0) {
        if (b === To) {
          a.push(o.slice(c, g)), c = g + 1;
          continue;
        }
        if (b === "/") {
          l = g;
          continue;
        }
      }
      b === "[" ? s++ : b === "]" ? s-- : b === "(" ? i++ : b === ")" && i--;
    }
    const f = a.length === 0 ? o : o.slice(c);
    let h = f, p = !1;
    f.endsWith(Mr) ? (h = f.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      f.startsWith(Mr) && (h = f.slice(1), p = !0)
    );
    const x = l && l > c ? l - c : void 0;
    return Ro(a, p, h, x);
  };
  if (t) {
    const o = t + To, a = r;
    r = (s) => s.startsWith(o) ? a(s.slice(o.length)) : Ro(ld, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, ud = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let a = 0; a < n.length; a++) {
      const s = n[a], i = s[0] === "[", c = t.has(s);
      i || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(s)) : o.push(s);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, fd = (e) => ({
  cache: cd(e.cacheSize),
  parseClassName: dd(e),
  sortModifiers: ud(e),
  ...Jl(e)
}), md = /\s+/, hd = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(md);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: x,
      maybePostfixModifierPosition: g
    } = n(u);
    if (f) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!g, S = r(b ? x.substring(0, g) : x);
    if (!S) {
      if (!b) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (S = r(x), !S) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const y = h.length === 0 ? "" : h.length === 1 ? h[0] : a(h).join(":"), v = p ? y + Mr : y, C = v + S;
    if (s.indexOf(C) > -1)
      continue;
    s.push(C);
    const k = o(S, b);
    for (let w = 0; w < k.length; ++w) {
      const M = k[w];
      s.push(v + M);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, pd = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Fa(n)) && (o && (o += " "), o += r);
  return o;
}, Fa = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Fa(e[r])) && (n && (n += " "), n += t);
  return n;
}, gd = (e, ...t) => {
  let n, r, o, a;
  const s = (c) => {
    const l = t.reduce((u, f) => f(u), e());
    return n = fd(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }, i = (c) => {
    const l = r(c);
    if (l)
      return l;
    const u = hd(c, n);
    return o(c, u), u;
  };
  return a = s, (...c) => a(pd(...c));
}, bd = [], pe = (e) => {
  const t = (n) => n[e] || bd;
  return t.isThemeGetter = !0, t;
}, za = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, $a = /^\((?:(\w[\w-]*):)?(.+)\)$/i, yd = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, vd = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, xd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Sd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Cd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ot = (e) => yd.test(e), X = (e) => !!e && !Number.isNaN(Number(e)), at = (e) => !!e && Number.isInteger(Number(e)), lr = (e) => e.endsWith("%") && X(e.slice(0, -1)), qe = (e) => vd.test(e), Ba = () => !0, kd = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wd.test(e) && !xd.test(e)
), Vr = () => !1, Nd = (e) => Sd.test(e), Md = (e) => Cd.test(e), Pd = (e) => !A(e) && !I(e), Ed = (e) => ft(e, Ha, Vr), A = (e) => za.test(e), vt = (e) => ft(e, Va, kd), Ao = (e) => ft(e, Wd, X), Od = (e) => ft(e, Ua, Ba), Dd = (e) => ft(e, ja, Vr), Io = (e) => ft(e, La, Vr), Td = (e) => ft(e, Ya, Md), ln = (e) => ft(e, Ga, Nd), I = (e) => $a.test(e), Gt = (e) => Pt(e, Va), Rd = (e) => Pt(e, ja), _o = (e) => Pt(e, La), Ad = (e) => Pt(e, Ha), Id = (e) => Pt(e, Ya), dn = (e) => Pt(e, Ga, !0), _d = (e) => Pt(e, Ua, !0), ft = (e, t, n) => {
  const r = za.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Pt = (e, t, n = !1) => {
  const r = $a.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, La = (e) => e === "position" || e === "percentage", Ya = (e) => e === "image" || e === "url", Ha = (e) => e === "length" || e === "size" || e === "bg-size", Va = (e) => e === "length", Wd = (e) => e === "number", ja = (e) => e === "family-name", Ua = (e) => e === "number" || e === "weight", Ga = (e) => e === "shadow", Fd = () => {
  const e = pe("color"), t = pe("font"), n = pe("text"), r = pe("font-weight"), o = pe("tracking"), a = pe("leading"), s = pe("breakpoint"), i = pe("container"), c = pe("spacing"), l = pe("radius"), u = pe("shadow"), f = pe("inset-shadow"), h = pe("text-shadow"), p = pe("drop-shadow"), x = pe("blur"), g = pe("perspective"), b = pe("aspect"), S = pe("ease"), y = pe("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], k = () => [...C(), I, A], w = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], N = () => [I, A, c], P = () => [ot, "full", "auto", ...N()], R = () => [at, "none", "subgrid", I, A], W = () => ["auto", {
    span: ["full", at, I, A]
  }, at, I, A], H = () => [at, "auto", I, A], V = () => ["auto", "min", "max", "fr", I, A], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], q = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _ = () => ["auto", ...N()], j = () => [ot, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], $ = () => [ot, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], U = () => [ot, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], O = () => [e, I, A], fe = () => [...C(), _o, Io, {
    position: [I, A]
  }], Ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], xe = () => ["auto", "cover", "contain", Ad, Ed, {
    size: [I, A]
  }], ge = () => [lr, Gt, vt], le = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    I,
    A
  ], de = () => ["", X, Gt, vt], z = () => ["solid", "dashed", "dotted", "double"], re = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [X, lr, _o, Io], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    I,
    A
  ], Q = () => ["none", X, I, A], J = () => ["none", X, I, A], he = () => [X, I, A], be = () => [ot, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [qe],
      breakpoint: [qe],
      color: [Ba],
      container: [qe],
      "drop-shadow": [qe],
      ease: ["in", "out", "in-out"],
      font: [Pd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [qe],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [qe],
      shadow: [qe],
      spacing: ["px", X],
      text: [qe],
      "text-shadow": [qe],
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
        aspect: ["auto", "square", ot, A, I, b]
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
        columns: [X, A, I, i]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": v()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": v()
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
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: w()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": w()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": w()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: M()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": M()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": M()
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
        inset: P()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": P()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": P()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": P(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: P()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": P(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: P()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": P()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": P()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: P()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: P()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: P()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: P()
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
        z: [at, "auto", I, A]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ot, "full", "auto", i, ...N()]
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
        flex: [X, ot, "auto", "initial", "none", A]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", X, I, A]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", X, I, A]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [at, "first", "last", "none", I, A]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": R()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: W()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": R()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: W()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": V()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": V()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...q(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...q()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...q(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...q(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...q()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: N()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: _()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: _()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: _()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: _()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: _()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: _()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: _()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: _()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: _()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: _()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: _()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": N()
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
        "space-y": N()
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
        size: j()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...$()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...$()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...$()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...U()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...U()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...U()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [i, "screen", ...j()]
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
          ...j()
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
            screen: [s]
          },
          ...j()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...j()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...j()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...j()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Gt, vt]
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
        font: [r, _d, Od]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", lr, A]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Rd, Dd, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [A]
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
        tracking: [o, I, A]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [X, "none", I, Ao]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...N()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I, A]
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
        list: ["disc", "decimal", "none", I, A]
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
        placeholder: O()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: O()
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
        decoration: [...z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [X, "from-font", "auto", I, vt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: O()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [X, "auto", I, A]
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
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I, A]
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
        content: ["none", I, A]
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
        bg: fe()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ee()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: xe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, at, I, A],
          radial: ["", I, A],
          conic: [at, I, A]
        }, Id, Td]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: O()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ge()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ge()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ge()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: O()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: O()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: O()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: le()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": le()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": le()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": le()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": le()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": le()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": le()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": le()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": le()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": le()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": le()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": le()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": le()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": le()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": le()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: de()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": de()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": de()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": de()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": de()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": de()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": de()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": de()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": de()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": de()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": de()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": de()
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
        "divide-y": de()
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
        border: [...z(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...z(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: O()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": O()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": O()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": O()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": O()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": O()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": O()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": O()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": O()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": O()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": O()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: O()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...z(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, I, A]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", X, Gt, vt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: O()
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
          dn,
          ln
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: O()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, dn, ln]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": O()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: de()
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
        ring: O()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [X, vt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": O()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": de()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": O()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, dn, ln]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": O()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [X, I, A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...re(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        "mask-linear": [X]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": O()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": O()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": O()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": O()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": O()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": O()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": O()
      }],
      "mask-image-radial": [{
        "mask-radial": [I, A]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": O()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": O()
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
        "mask-radial-at": C()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [X]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": O()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": O()
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
        mask: fe()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ee()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: xe()
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
        mask: ["none", I, A]
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
          A
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ee()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [X, I, A]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [X, I, A]
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
          p,
          dn,
          ln
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": O()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", X, I, A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [X, I, A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", X, I, A]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [X, I, A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", X, I, A]
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
          A
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ee()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [X, I, A]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [X, I, A]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", X, I, A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [X, I, A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", X, I, A]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [X, I, A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X, I, A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", X, I, A]
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", I, A]
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
        duration: [X, "initial", I, A]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, I, A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [X, I, A]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, I, A]
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
        perspective: [g, I, A]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
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
        skew: he()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": he()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": he()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [I, A, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
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
        translate: be()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": be()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": be()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": be()
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
        accent: O()
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
        caret: O()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I, A]
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": N()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": N()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        "will-change": ["auto", "scroll", "contents", "transform", I, A]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...O()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, Gt, vt, Ao]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...O()]
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
}, zd = /* @__PURE__ */ gd(Fd);
function E(...e) {
  return zd(Lr(e));
}
const $d = en(
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
), Bd = {
  default: Oo,
  info: Oo,
  success: Al,
  warning: Tl,
  destructive: Xl
}, Ld = d.forwardRef(
  ({ className: e, variant: t = "default", title: n, children: r, ...o }, a) => {
    const s = Bd[t ?? "default"];
    return /* @__PURE__ */ T(
      "div",
      {
        ref: a,
        role: "alert",
        className: E($d({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ m(s, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ T("div", { className: "flex-1 min-w-0", children: [
            n && /* @__PURE__ */ m("p", { className: "font-semibold mb-0.5", children: n }),
            r && /* @__PURE__ */ m("p", { className: "leading-relaxed", children: r })
          ] })
        ]
      }
    );
  }
);
Ld.displayName = "Alert";
function aw({ label: e, value: t, className: n, ...r }) {
  return /* @__PURE__ */ T("div", { className: E("flex flex-col gap-0.5", n), ...r, children: [
    /* @__PURE__ */ m("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ m("span", { className: "text-sm font-medium break-words text-text-base", children: t ?? "—" })
  ] });
}
function sw({ title: e, children: t, className: n, ...r }) {
  return /* @__PURE__ */ T("div", { className: E("flex flex-col gap-3", n), ...r, children: [
    /* @__PURE__ */ m("h3", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1", children: e }),
    /* @__PURE__ */ m("div", { className: "flex flex-col gap-2", children: t })
  ] });
}
const Yd = en(
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
function iw({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ m("div", { className: E(Yd({ variant: t }), e), ...n });
}
function Wo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Et(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Wo(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Wo(e[o], null);
        }
      };
  };
}
function ae(...e) {
  return d.useCallback(Et(...e), e);
}
var Hd = Symbol.for("react.lazy"), Cn = d[" use ".trim().toString()];
function Vd(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function qa(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Hd && "_payload" in e && Vd(e._payload);
}
// @__NO_SIDE_EFFECTS__
function jd(e) {
  const t = /* @__PURE__ */ Gd(e), n = d.forwardRef((r, o) => {
    let { children: a, ...s } = r;
    qa(a) && typeof Cn == "function" && (a = Cn(a._payload));
    const i = d.Children.toArray(a), c = i.find(Xd);
    if (c) {
      const l = c.props.children, u = i.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ud = /* @__PURE__ */ jd("Slot");
// @__NO_SIDE_EFFECTS__
function Gd(e) {
  const t = d.forwardRef((n, r) => {
    let { children: o, ...a } = n;
    if (qa(o) && typeof Cn == "function" && (o = Cn(o._payload)), d.isValidElement(o)) {
      const s = Zd(o), i = Kd(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Et(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qd = Symbol("radix.slottable");
function Xd(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qd;
}
function Kd(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const c = a(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Zd(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const Qd = en(
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
), Xa = d.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => /* @__PURE__ */ m(
    r ? Ud : "button",
    {
      className: E(Qd({ variant: t, size: n, className: e })),
      ref: a,
      ...o
    }
  )
);
Xa.displayName = "Button";
const Jd = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: E(
      "rounded-xl border border-border bg-surface text-text-base shadow-sm",
      e
    ),
    ...t
  }
));
Jd.displayName = "Card";
const eu = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: E("flex flex-col space-y-1.5 p-6", e), ...t }));
eu.displayName = "CardHeader";
const tu = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "h3",
  {
    ref: n,
    className: E("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
tu.displayName = "CardTitle";
const nu = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "p",
  {
    ref: n,
    className: E("text-sm text-text-muted", e),
    ...t
  }
));
nu.displayName = "CardDescription";
const ru = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { ref: n, className: E("p-6 pt-0", e), ...t }));
ru.displayName = "CardContent";
const ou = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "div",
  {
    ref: n,
    className: E("flex items-center p-6 pt-0", e),
    ...t
  }
));
ou.displayName = "CardFooter";
const au = d.forwardRef(
  ({
    onSend: e,
    disabled: t,
    placeholder: n = "Scrivi un messaggio...",
    className: r,
    maxHeight: o = 160
  }, a) => {
    const [s, i] = d.useState(""), c = d.useRef(null), l = a ?? c, u = () => {
      const p = s.trim();
      !p || t || (e(p), i(""), l.current && (l.current.style.height = "auto"));
    }, f = (p) => {
      p.key === "Enter" && !p.shiftKey && (p.preventDefault(), u());
    }, h = () => {
      const p = l.current;
      p && (p.style.height = "auto", p.style.height = `${Math.min(p.scrollHeight, o)}px`);
    };
    return /* @__PURE__ */ T("div", { className: E("border-t border-border bg-surface px-4 py-3", r), children: [
      /* @__PURE__ */ T("div", { className: "max-w-4xl mx-auto flex gap-3 items-end", children: [
        /* @__PURE__ */ m(
          "textarea",
          {
            ref: l,
            value: s,
            onChange: (p) => i(p.target.value),
            onKeyDown: f,
            onInput: h,
            placeholder: n,
            disabled: t,
            rows: 1,
            className: E(
              "flex-1 resize-none rounded-xl border border-border bg-base px-4 py-3 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "min-h-[44px]"
            ),
            style: { maxHeight: o }
          }
        ),
        /* @__PURE__ */ m(
          Xa,
          {
            onClick: u,
            disabled: t || !s.trim(),
            size: "icon",
            className: "h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg",
            children: /* @__PURE__ */ m(Vl, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ m("p", { className: "text-center text-xs text-text-muted mt-2", children: "Invio per inviare · Shift+Invio per andare a capo" })
    ] });
  }
);
au.displayName = "ChatInput";
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function su(e, t) {
  const n = d.createContext(t), r = (a) => {
    const { children: s, ...i } = a, c = d.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ m(n.Provider, { value: c, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = d.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function mt(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = d.createContext(s), c = n.length;
    n = [...n, s];
    const l = (f) => {
      var S;
      const { scope: h, children: p, ...x } = f, g = ((S = h == null ? void 0 : h[e]) == null ? void 0 : S[c]) || i, b = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ m(g.Provider, { value: b, children: p });
    };
    l.displayName = a + "Provider";
    function u(f, h) {
      var g;
      const p = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || i, x = d.useContext(p);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [l, u];
  }
  const o = () => {
    const a = n.map((s) => d.createContext(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, iu(o, ...t)];
}
function iu(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const f = c(a)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function cu(e) {
  const t = /* @__PURE__ */ lu(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(uu);
    if (c) {
      const l = c.props.children, u = i.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function lu(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = mu(o), i = fu(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Et(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var du = Symbol("radix.slottable");
function uu(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === du;
}
function fu(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const c = a(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function mu(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var hu = [
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
], K = hu.reduce((e, t) => {
  const n = /* @__PURE__ */ cu(`Primitive.${t}`), r = d.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ m(c, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function pu(e, t) {
  e && Rn.flushSync(() => e.dispatchEvent(t));
}
function we(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function gu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var bu = "DismissableLayer", Pr = "dismissableLayer.update", yu = "dismissableLayer.pointerDownOutside", vu = "dismissableLayer.focusOutside", Fo, Ka = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), _n = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...c
    } = e, l = d.useContext(Ka), [u, f] = d.useState(null), h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = d.useState({}), x = ae(t, (M) => f(M)), g = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), S = g.indexOf(b), y = u ? g.indexOf(u) : -1, v = l.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= S, k = Su((M) => {
      const N = M.target, P = [...l.branches].some((R) => R.contains(N));
      !C || P || (o == null || o(M), s == null || s(M), M.defaultPrevented || i == null || i());
    }, h), w = Cu((M) => {
      const N = M.target;
      [...l.branches].some((R) => R.contains(N)) || (a == null || a(M), s == null || s(M), M.defaultPrevented || i == null || i());
    }, h);
    return gu((M) => {
      y === l.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && i && (M.preventDefault(), i()));
    }, h), d.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Fo = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), zo(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Fo);
        };
    }, [u, h, n, l]), d.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), zo());
    }, [u, l]), d.useEffect(() => {
      const M = () => p({});
      return document.addEventListener(Pr, M), () => document.removeEventListener(Pr, M);
    }, []), /* @__PURE__ */ m(
      K.div,
      {
        ...c,
        ref: x,
        style: {
          pointerEvents: v ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, w.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, w.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
_n.displayName = bu;
var wu = "DismissableLayerBranch", xu = d.forwardRef((e, t) => {
  const n = d.useContext(Ka), r = d.useRef(null), o = ae(t, r);
  return d.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ m(K.div, { ...e, ref: o });
});
xu.displayName = wu;
function Su(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          Za(
            yu,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Cu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Za(vu, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function zo() {
  const e = new CustomEvent(Pr);
  document.dispatchEvent(e);
}
function Za(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pu(o, a) : o.dispatchEvent(a);
}
var dr = 0;
function jr() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? $o()), document.body.insertAdjacentElement("beforeend", e[1] ?? $o()), dr++, () => {
      dr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), dr--;
    };
  }, []);
}
function $o() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var ur = "focusScope.autoFocusOnMount", fr = "focusScope.autoFocusOnUnmount", Bo = { bubbles: !1, cancelable: !0 }, ku = "FocusScope", Wn = d.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, c] = d.useState(null), l = we(o), u = we(a), f = d.useRef(null), h = ae(t, (g) => c(g)), p = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
    if (r) {
      let g = function(v) {
        if (p.paused || !i) return;
        const C = v.target;
        i.contains(C) ? f.current = C : it(f.current, { select: !0 });
      }, b = function(v) {
        if (p.paused || !i) return;
        const C = v.relatedTarget;
        C !== null && (i.contains(C) || it(f.current, { select: !0 }));
      }, S = function(v) {
        if (document.activeElement === document.body)
          for (const k of v)
            k.removedNodes.length > 0 && it(i);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const y = new MutationObserver(S);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [r, i, p.paused]), d.useEffect(() => {
    if (i) {
      Yo.add(p);
      const g = document.activeElement;
      if (!i.contains(g)) {
        const S = new CustomEvent(ur, Bo);
        i.addEventListener(ur, l), i.dispatchEvent(S), S.defaultPrevented || (Nu(Du(Qa(i)), { select: !0 }), document.activeElement === g && it(i));
      }
      return () => {
        i.removeEventListener(ur, l), setTimeout(() => {
          const S = new CustomEvent(fr, Bo);
          i.addEventListener(fr, u), i.dispatchEvent(S), S.defaultPrevented || it(g ?? document.body, { select: !0 }), i.removeEventListener(fr, u), Yo.remove(p);
        }, 0);
      };
    }
  }, [i, l, u, p]);
  const x = d.useCallback(
    (g) => {
      if (!n && !r || p.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, S = document.activeElement;
      if (b && S) {
        const y = g.currentTarget, [v, C] = Mu(y);
        v && C ? !g.shiftKey && S === C ? (g.preventDefault(), n && it(v, { select: !0 })) : g.shiftKey && S === v && (g.preventDefault(), n && it(C, { select: !0 })) : S === y && g.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ m(K.div, { tabIndex: -1, ...s, ref: h, onKeyDown: x });
});
Wn.displayName = ku;
function Nu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (it(r, { select: t }), document.activeElement !== n) return;
}
function Mu(e) {
  const t = Qa(e), n = Lo(t, e), r = Lo(t.reverse(), e);
  return [n, r];
}
function Qa(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Lo(e, t) {
  for (const n of e)
    if (!Pu(n, { upTo: t })) return n;
}
function Pu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Eu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function it(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Eu(e) && t && e.select();
  }
}
var Yo = Ou();
function Ou() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Ho(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Ho(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Ho(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Du(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ye = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
}, Tu = d[" useId ".trim().toString()] || (() => {
}), Ru = 0;
function Qe(e) {
  const [t, n] = d.useState(Tu());
  return ye(() => {
    n((r) => r ?? String(Ru++));
  }, [e]), t ? `radix-${t}` : "";
}
const Au = ["top", "right", "bottom", "left"], lt = Math.min, Ne = Math.max, kn = Math.round, un = Math.floor, Ve = (e) => ({
  x: e,
  y: e
}), Iu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Er(e, t, n) {
  return Ne(e, lt(t, n));
}
function et(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tt(e) {
  return e.split("-")[0];
}
function Vt(e) {
  return e.split("-")[1];
}
function Ur(e) {
  return e === "x" ? "y" : "x";
}
function Gr(e) {
  return e === "y" ? "height" : "width";
}
function Ye(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function qr(e) {
  return Ur(Ye(e));
}
function _u(e, t, n) {
  n === void 0 && (n = !1);
  const r = Vt(e), o = qr(e), a = Gr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Nn(s)), [s, Nn(s)];
}
function Wu(e) {
  const t = Nn(e);
  return [Or(e), t, Or(t)];
}
function Or(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Vo = ["left", "right"], jo = ["right", "left"], Fu = ["top", "bottom"], zu = ["bottom", "top"];
function $u(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? jo : Vo : t ? Vo : jo;
    case "left":
    case "right":
      return t ? Fu : zu;
    default:
      return [];
  }
}
function Bu(e, t, n, r) {
  const o = Vt(e);
  let a = $u(tt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Or)))), a;
}
function Nn(e) {
  const t = tt(e);
  return Iu[t] + e.slice(t.length);
}
function Lu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Ja(e) {
  return typeof e != "number" ? Lu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Mn(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Uo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Ye(t), s = qr(t), i = Gr(s), c = tt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Vt(t)) {
    case "start":
      p[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function Yu(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = et(t, e), x = Ja(p), b = i[h ? f === "floating" ? "reference" : "floating" : f], S = Mn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), C = await (a.isElement == null ? void 0 : a.isElement(v)) ? await (a.getScale == null ? void 0 : a.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = Mn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: v,
    strategy: c
  }) : y);
  return {
    top: (S.top - k.top + x.top) / C.y,
    bottom: (k.bottom - S.bottom + x.bottom) / C.y,
    left: (S.left - k.left + x.left) / C.x,
    right: (k.right - S.right + x.right) / C.x
  };
}
const Hu = 50, Vu = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Yu
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: f
  } = Uo(l, r, c), h = r, p = 0;
  const x = {};
  for (let g = 0; g < a.length; g++) {
    const b = a[g];
    if (!b)
      continue;
    const {
      name: S,
      fn: y
    } = b, {
      x: v,
      y: C,
      data: k,
      reset: w
    } = await y({
      x: u,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: x,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = v ?? u, f = C ?? f, x[S] = {
      ...x[S],
      ...k
    }, w && p < Hu && (p++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: u,
      y: f
    } = Uo(l, h, c)), g = -1);
  }
  return {
    x: u,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: x
  };
}, ju = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = et(e, t) || {};
    if (l == null)
      return {};
    const f = Ja(u), h = {
      x: n,
      y: r
    }, p = qr(o), x = Gr(p), g = await s.getDimensions(l), b = p === "y", S = b ? "top" : "left", y = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", C = a.reference[x] + a.reference[p] - h[p] - a.floating[x], k = h[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let M = w ? w[v] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(w))) && (M = i.floating[v] || a.floating[x]);
    const N = C / 2 - k / 2, P = M / 2 - g[x] / 2 - 1, R = lt(f[S], P), W = lt(f[y], P), H = R, V = M - g[x] - W, B = M / 2 - g[x] / 2 + N, q = Er(H, B, V), _ = !c.arrow && Vt(o) != null && B !== q && a.reference[x] / 2 - (B < H ? R : W) - g[x] / 2 < 0, j = _ ? B < H ? B - H : B - V : 0;
    return {
      [p]: h[p] + j,
      data: {
        [p]: q,
        centerOffset: B - q - j,
        ..._ && {
          alignmentOffset: j
        }
      },
      reset: _
    };
  }
}), Uu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: g = !0,
        ...b
      } = et(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const S = tt(o), y = Ye(i), v = tt(i) === i, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), k = h || (v || !g ? [Nn(i)] : Wu(i)), w = x !== "none";
      !h && w && k.push(...Bu(i, g, x, C));
      const M = [i, ...k], N = await c.detectOverflow(t, b), P = [];
      let R = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && P.push(N[S]), f) {
        const B = _u(o, s, C);
        P.push(N[B[0]], N[B[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: P
      }], !P.every((B) => B <= 0)) {
        var W, H;
        const B = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, q = M[B];
        if (q && (!(f === "alignment" ? y !== Ye(q) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every(($) => Ye($.placement) === y ? $.overflows[0] > 0 : !0)))
          return {
            data: {
              index: B,
              overflows: R
            },
            reset: {
              placement: q
            }
          };
        let _ = (H = R.filter((j) => j.overflows[0] <= 0).sort((j, $) => j.overflows[1] - $.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!_)
          switch (p) {
            case "bestFit": {
              var V;
              const j = (V = R.filter(($) => {
                if (w) {
                  const U = Ye($.placement);
                  return U === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map(($) => [$.placement, $.overflows.filter((U) => U > 0).reduce((U, O) => U + O, 0)]).sort(($, U) => $[1] - U[1])[0]) == null ? void 0 : V[0];
              j && (_ = j);
              break;
            }
            case "initialPlacement":
              _ = i;
              break;
          }
        if (o !== _)
          return {
            reset: {
              placement: _
            }
          };
      }
      return {};
    }
  };
};
function Go(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function qo(e) {
  return Au.some((t) => e[t] >= 0);
}
const Gu = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = et(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), i = Go(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: qo(i)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), i = Go(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: qo(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, es = /* @__PURE__ */ new Set(["left", "top"]);
async function qu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = tt(n), i = Vt(n), c = Ye(n) === "y", l = es.has(s) ? -1 : 1, u = a && c ? -1 : 1, f = et(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: x
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof x == "number" && (p = i === "end" ? x * -1 : x), c ? {
    x: p * u,
    y: h * l
  } : {
    x: h * l,
    y: p * u
  };
}
const Xu = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, c = await qu(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: a + c.y,
        data: {
          ...c,
          placement: s
        }
      };
    }
  };
}, Ku = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: a
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (S) => {
            let {
              x: y,
              y: v
            } = S;
            return {
              x: y,
              y: v
            };
          }
        },
        ...l
      } = et(e, t), u = {
        x: n,
        y: r
      }, f = await a.detectOverflow(t, l), h = Ye(tt(o)), p = Ur(h);
      let x = u[p], g = u[h];
      if (s) {
        const S = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", v = x + f[S], C = x - f[y];
        x = Er(v, x, C);
      }
      if (i) {
        const S = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", v = g + f[S], C = g - f[y];
        g = Er(v, g, C);
      }
      const b = c.fn({
        ...t,
        [p]: x,
        [h]: g
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r,
          enabled: {
            [p]: s,
            [h]: i
          }
        }
      };
    }
  };
}, Zu = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = et(e, t), u = {
        x: n,
        y: r
      }, f = Ye(o), h = Ur(f);
      let p = u[h], x = u[f];
      const g = et(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const v = h === "y" ? "height" : "width", C = a.reference[h] - a.floating[v] + b.mainAxis, k = a.reference[h] + a.reference[v] - b.mainAxis;
        p < C ? p = C : p > k && (p = k);
      }
      if (l) {
        var S, y;
        const v = h === "y" ? "width" : "height", C = es.has(tt(o)), k = a.reference[f] - a.floating[v] + (C && ((S = s.offset) == null ? void 0 : S[f]) || 0) + (C ? 0 : b.crossAxis), w = a.reference[f] + a.reference[v] + (C ? 0 : ((y = s.offset) == null ? void 0 : y[f]) || 0) - (C ? b.crossAxis : 0);
        x < k ? x = k : x > w && (x = w);
      }
      return {
        [h]: p,
        [f]: x
      };
    }
  };
}, Qu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = et(e, t), u = await s.detectOverflow(t, l), f = tt(o), h = Vt(o), p = Ye(o) === "y", {
        width: x,
        height: g
      } = a.floating;
      let b, S;
      f === "top" || f === "bottom" ? (b = f, S = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (S = f, b = h === "end" ? "top" : "bottom");
      const y = g - u.top - u.bottom, v = x - u.left - u.right, C = lt(g - u[b], y), k = lt(x - u[S], v), w = !t.middlewareData.shift;
      let M = C, N = k;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = v), (r = t.middlewareData.shift) != null && r.enabled.y && (M = y), w && !h) {
        const R = Ne(u.left, 0), W = Ne(u.right, 0), H = Ne(u.top, 0), V = Ne(u.bottom, 0);
        p ? N = x - 2 * (R !== 0 || W !== 0 ? R + W : Ne(u.left, u.right)) : M = g - 2 * (H !== 0 || V !== 0 ? H + V : Ne(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
        availableHeight: M
      });
      const P = await s.getDimensions(i.floating);
      return x !== P.width || g !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Fn() {
  return typeof window < "u";
}
function jt(e) {
  return ts(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function je(e) {
  var t;
  return (t = (ts(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function ts(e) {
  return Fn() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function Ie(e) {
  return Fn() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function nt(e) {
  return Fn() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function Xo(e) {
  return !Fn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function tn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = _e(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Ju(e) {
  return /^(table|td|th)$/.test(jt(e));
}
function zn(e) {
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
const ef = /transform|translate|scale|rotate|perspective|filter/, tf = /paint|layout|strict|content/, wt = (e) => !!e && e !== "none";
let mr;
function Xr(e) {
  const t = Ie(e) ? _e(e) : e;
  return wt(t.transform) || wt(t.translate) || wt(t.scale) || wt(t.rotate) || wt(t.perspective) || !Kr() && (wt(t.backdropFilter) || wt(t.filter)) || ef.test(t.willChange || "") || tf.test(t.contain || "");
}
function nf(e) {
  let t = dt(e);
  for (; nt(t) && !Bt(t); ) {
    if (Xr(t))
      return t;
    if (zn(t))
      return null;
    t = dt(t);
  }
  return null;
}
function Kr() {
  return mr == null && (mr = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), mr;
}
function Bt(e) {
  return /^(html|body|#document)$/.test(jt(e));
}
function _e(e) {
  return Me(e).getComputedStyle(e);
}
function $n(e) {
  return Ie(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function dt(e) {
  if (jt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Xo(e) && e.host || // Fallback.
    je(e)
  );
  return Xo(t) ? t.host : t;
}
function ns(e) {
  const t = dt(e);
  return Bt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nt(t) && tn(t) ? t : ns(t);
}
function Zt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = ns(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Me(o);
  if (a) {
    const i = Dr(s);
    return t.concat(s, s.visualViewport || [], tn(o) ? o : [], i && n ? Zt(i) : []);
  } else
    return t.concat(o, Zt(o, [], n));
}
function Dr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function rs(e) {
  const t = _e(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = nt(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = kn(n) !== a || kn(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Zr(e) {
  return Ie(e) ? e : e.contextElement;
}
function Ft(e) {
  const t = Zr(e);
  if (!nt(t))
    return Ve(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = rs(t);
  let s = (a ? kn(n.width) : n.width) / r, i = (a ? kn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const rf = /* @__PURE__ */ Ve(0);
function os(e) {
  const t = Me(e);
  return !Kr() || !t.visualViewport ? rf : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function of(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Me(e) ? !1 : t;
}
function Ct(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Zr(e);
  let s = Ve(1);
  t && (r ? Ie(r) && (s = Ft(r)) : s = Ft(e));
  const i = of(a, n, r) ? os(a) : Ve(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, f = o.height / s.y;
  if (a) {
    const h = Me(a), p = r && Ie(r) ? Me(r) : r;
    let x = h, g = Dr(x);
    for (; g && r && p !== x; ) {
      const b = Ft(g), S = g.getBoundingClientRect(), y = _e(g), v = S.left + (g.clientLeft + parseFloat(y.paddingLeft)) * b.x, C = S.top + (g.clientTop + parseFloat(y.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, f *= b.y, c += v, l += C, x = Me(g), g = Dr(x);
    }
  }
  return Mn({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Bn(e, t) {
  const n = $n(e).scrollLeft;
  return t ? t.left + n : Ct(je(e)).left + n;
}
function as(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Bn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function af(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = je(r), i = t ? zn(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Ve(1);
  const u = Ve(0), f = nt(r);
  if ((f || !f && !a) && ((jt(r) !== "body" || tn(s)) && (c = $n(r)), f)) {
    const p = Ct(r);
    l = Ft(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const h = s && !f && !a ? as(s, c) : Ve(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + h.y
  };
}
function sf(e) {
  return Array.from(e.getClientRects());
}
function cf(e) {
  const t = je(e), n = $n(e), r = e.ownerDocument.body, o = Ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Bn(e);
  const i = -n.scrollTop;
  return _e(r).direction === "rtl" && (s += Ne(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Ko = 25;
function lf(e, t) {
  const n = Me(e), r = je(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = Kr();
    (!u || u && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = Bn(r);
  if (l <= 0) {
    const u = r.ownerDocument, f = u.body, h = getComputedStyle(f), p = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, x = Math.abs(r.clientWidth - f.clientWidth - p);
    x <= Ko && (a -= x);
  } else l <= Ko && (a += l);
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function df(e, t) {
  const n = Ct(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = nt(e) ? Ft(e) : Ve(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function Zo(e, t, n) {
  let r;
  if (t === "viewport")
    r = lf(e, n);
  else if (t === "document")
    r = cf(je(e));
  else if (Ie(t))
    r = df(t, n);
  else {
    const o = os(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Mn(r);
}
function ss(e, t) {
  const n = dt(e);
  return n === t || !Ie(n) || Bt(n) ? !1 : _e(n).position === "fixed" || ss(n, t);
}
function uf(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Zt(e, [], !1).filter((i) => Ie(i) && jt(i) !== "body"), o = null;
  const a = _e(e).position === "fixed";
  let s = a ? dt(e) : e;
  for (; Ie(s) && !Bt(s); ) {
    const i = _e(s), c = Xr(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || tn(s) && !c && ss(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = dt(s);
  }
  return t.set(e, r), r;
}
function ff(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? zn(t) ? [] : uf(t, this._c) : [].concat(n), r], i = Zo(t, s[0], o);
  let c = i.top, l = i.right, u = i.bottom, f = i.left;
  for (let h = 1; h < s.length; h++) {
    const p = Zo(t, s[h], o);
    c = Ne(p.top, c), l = lt(p.right, l), u = lt(p.bottom, u), f = Ne(p.left, f);
  }
  return {
    width: l - f,
    height: u - c,
    x: f,
    y: c
  };
}
function mf(e) {
  const {
    width: t,
    height: n
  } = rs(e);
  return {
    width: t,
    height: n
  };
}
function hf(e, t, n) {
  const r = nt(t), o = je(t), a = n === "fixed", s = Ct(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = Ve(0);
  function l() {
    c.x = Bn(o);
  }
  if (r || !r && !a)
    if ((jt(t) !== "body" || tn(o)) && (i = $n(t)), r) {
      const p = Ct(t, !0, a, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? as(o, i) : Ve(0), f = s.left + i.scrollLeft - c.x - u.x, h = s.top + i.scrollTop - c.y - u.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function hr(e) {
  return _e(e).position === "static";
}
function Qo(e, t) {
  if (!nt(e) || _e(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return je(e) === n && (n = n.ownerDocument.body), n;
}
function is(e, t) {
  const n = Me(e);
  if (zn(e))
    return n;
  if (!nt(e)) {
    let o = dt(e);
    for (; o && !Bt(o); ) {
      if (Ie(o) && !hr(o))
        return o;
      o = dt(o);
    }
    return n;
  }
  let r = Qo(e, t);
  for (; r && Ju(r) && hr(r); )
    r = Qo(r, t);
  return r && Bt(r) && hr(r) && !Xr(r) ? n : r || nf(e) || n;
}
const pf = async function(e) {
  const t = this.getOffsetParent || is, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: hf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function gf(e) {
  return _e(e).direction === "rtl";
}
const bf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: af,
  getDocumentElement: je,
  getClippingRect: ff,
  getOffsetParent: is,
  getElementRects: pf,
  getClientRects: sf,
  getDimensions: mf,
  getScale: Ft,
  isElement: Ie,
  isRTL: gf
};
function cs(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function yf(e, t) {
  let n = null, r;
  const o = je(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: h,
      height: p
    } = l;
    if (i || t(), !h || !p)
      return;
    const x = un(f), g = un(o.clientWidth - (u + h)), b = un(o.clientHeight - (f + p)), S = un(u), v = {
      rootMargin: -x + "px " + -g + "px " + -b + "px " + -S + "px",
      threshold: Ne(0, lt(1, c)) || 1
    };
    let C = !0;
    function k(w) {
      const M = w[0].intersectionRatio;
      if (M !== c) {
        if (!C)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !cs(l, e.getBoundingClientRect()) && s(), C = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, v);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function vf(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Zr(e), u = o || a ? [...l ? Zt(l) : [], ...t ? Zt(t) : []] : [];
  u.forEach((S) => {
    o && S.addEventListener("scroll", n, {
      passive: !0
    }), a && S.addEventListener("resize", n);
  });
  const f = l && i ? yf(l, n) : null;
  let h = -1, p = null;
  s && (p = new ResizeObserver((S) => {
    let [y] = S;
    y && y.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var v;
      (v = p) == null || v.observe(t);
    })), n();
  }), l && !c && p.observe(l), t && p.observe(t));
  let x, g = c ? Ct(e) : null;
  c && b();
  function b() {
    const S = Ct(e);
    g && !cs(g, S) && n(), g = S, x = requestAnimationFrame(b);
  }
  return n(), () => {
    var S;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), f == null || f(), (S = p) == null || S.disconnect(), p = null, c && cancelAnimationFrame(x);
  };
}
const wf = Xu, xf = Ku, Sf = Uu, Cf = Qu, kf = Gu, Jo = ju, Nf = Zu, Mf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: bf,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Vu(e, t, {
    ...o,
    platform: a
  });
};
var Pf = typeof document < "u", Ef = function() {
}, yn = Pf ? Na : Ef;
function Pn(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Pn(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Pn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ls(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ea(e, t) {
  const n = ls(e);
  return Math.round(t * n) / n;
}
function pr(e) {
  const t = d.useRef(e);
  return yn(() => {
    t.current = e;
  }), t;
}
function Of(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, f] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = d.useState(r);
  Pn(h, r) || p(r);
  const [x, g] = d.useState(null), [b, S] = d.useState(null), y = d.useCallback(($) => {
    $ !== w.current && (w.current = $, g($));
  }, []), v = d.useCallback(($) => {
    $ !== M.current && (M.current = $, S($));
  }, []), C = a || x, k = s || b, w = d.useRef(null), M = d.useRef(null), N = d.useRef(u), P = c != null, R = pr(c), W = pr(o), H = pr(l), V = d.useCallback(() => {
    if (!w.current || !M.current)
      return;
    const $ = {
      placement: t,
      strategy: n,
      middleware: h
    };
    W.current && ($.platform = W.current), Mf(w.current, M.current, $).then((U) => {
      const O = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      B.current && !Pn(N.current, O) && (N.current = O, Rn.flushSync(() => {
        f(O);
      }));
    });
  }, [h, t, n, W, H]);
  yn(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, f(($) => ({
      ...$,
      isPositioned: !1
    })));
  }, [l]);
  const B = d.useRef(!1);
  yn(() => (B.current = !0, () => {
    B.current = !1;
  }), []), yn(() => {
    if (C && (w.current = C), k && (M.current = k), C && k) {
      if (R.current)
        return R.current(C, k, V);
      V();
    }
  }, [C, k, V, R, P]);
  const q = d.useMemo(() => ({
    reference: w,
    floating: M,
    setReference: y,
    setFloating: v
  }), [y, v]), _ = d.useMemo(() => ({
    reference: C,
    floating: k
  }), [C, k]), j = d.useMemo(() => {
    const $ = {
      position: n,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return $;
    const U = ea(_.floating, u.x), O = ea(_.floating, u.y);
    return i ? {
      ...$,
      transform: "translate(" + U + "px, " + O + "px)",
      ...ls(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: O
    };
  }, [n, i, _.floating, u.x, u.y]);
  return d.useMemo(() => ({
    ...u,
    update: V,
    refs: q,
    elements: _,
    floatingStyles: j
  }), [u, V, q, _, j]);
}
const Df = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Jo({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Jo({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Tf = (e, t) => {
  const n = wf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Rf = (e, t) => {
  const n = xf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Af = (e, t) => ({
  fn: Nf(e).fn,
  options: [e, t]
}), If = (e, t) => {
  const n = Sf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, _f = (e, t) => {
  const n = Cf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Wf = (e, t) => {
  const n = kf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ff = (e, t) => {
  const n = Df(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var zf = "Arrow", ds = d.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ m(
    K.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ m("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ds.displayName = zf;
var $f = ds;
function Bf(e) {
  const [t, n] = d.useState(void 0);
  return ye(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          s = l.inlineSize, i = l.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Qr = "Popper", [us, Ln] = mt(Qr), [Lf, fs] = us(Qr), ms = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ m(Lf, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ms.displayName = Qr;
var hs = "PopperAnchor", ps = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = fs(hs, n), s = d.useRef(null), i = ae(t, s), c = d.useRef(null);
    return d.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, l !== c.current && a.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ m(K.div, { ...o, ref: i });
  }
);
ps.displayName = hs;
var Jr = "PopperContent", [Yf, Hf] = us(Jr), gs = d.forwardRef(
  (e, t) => {
    var z, re, Z, ee, Q, J;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: x,
      ...g
    } = e, b = fs(Jr, n), [S, y] = d.useState(null), v = ae(t, (he) => y(he)), [C, k] = d.useState(null), w = Bf(C), M = (w == null ? void 0 : w.width) ?? 0, N = (w == null ? void 0 : w.height) ?? 0, P = r + (a !== "center" ? "-" + a : ""), R = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, W = Array.isArray(l) ? l : [l], H = W.length > 0, V = {
      padding: R,
      boundary: W.filter(jf),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: B, floatingStyles: q, placement: _, isPositioned: j, middlewareData: $ } = Of({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...he) => vf(...he, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Tf({ mainAxis: o + N, alignmentAxis: s }),
        c && Rf({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Af() : void 0,
          ...V
        }),
        c && If({ ...V }),
        _f({
          ...V,
          apply: ({ elements: he, rects: be, availableWidth: rt, availableHeight: bt }) => {
            const { width: yt, height: or } = be.reference, Dt = he.floating.style;
            Dt.setProperty("--radix-popper-available-width", `${rt}px`), Dt.setProperty("--radix-popper-available-height", `${bt}px`), Dt.setProperty("--radix-popper-anchor-width", `${yt}px`), Dt.setProperty("--radix-popper-anchor-height", `${or}px`);
          }
        }),
        C && Ff({ element: C, padding: i }),
        Uf({ arrowWidth: M, arrowHeight: N }),
        h && Wf({ strategy: "referenceHidden", ...V })
      ]
    }), [U, O] = vs(_), fe = we(x);
    ye(() => {
      j && (fe == null || fe());
    }, [j, fe]);
    const Ee = (z = $.arrow) == null ? void 0 : z.x, xe = (re = $.arrow) == null ? void 0 : re.y, ge = ((Z = $.arrow) == null ? void 0 : Z.centerOffset) !== 0, [le, de] = d.useState();
    return ye(() => {
      S && de(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ m(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...q,
          transform: j ? q.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            (ee = $.transformOrigin) == null ? void 0 : ee.x,
            (Q = $.transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = $.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ m(
          Yf,
          {
            scope: n,
            placedSide: U,
            onArrowChange: k,
            arrowX: Ee,
            arrowY: xe,
            shouldHideArrow: ge,
            children: /* @__PURE__ */ m(
              K.div,
              {
                "data-side": U,
                "data-align": O,
                ...g,
                ref: v,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: j ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
gs.displayName = Jr;
var bs = "PopperArrow", Vf = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ys = d.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Hf(bs, r), s = Vf[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ m(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ m(
          $f,
          {
            ...o,
            ref: n,
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
ys.displayName = bs;
function jf(e) {
  return e !== null;
}
var Uf = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, S, y;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, u] = vs(n), f = { start: "0%", center: "50%", end: "100%" }[u], h = (((S = o.arrow) == null ? void 0 : S.x) ?? 0) + i / 2, p = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let x = "", g = "";
    return l === "bottom" ? (x = s ? f : `${h}px`, g = `${-c}px`) : l === "top" ? (x = s ? f : `${h}px`, g = `${r.floating.height + c}px`) : l === "right" ? (x = `${-c}px`, g = s ? f : `${p}px`) : l === "left" && (x = `${r.floating.width + c}px`, g = s ? f : `${p}px`), { data: { x, y: g } };
  }
});
function vs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ws = ms, eo = ps, xs = gs, Ss = ys, Gf = "Portal", Yn = d.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = d.useState(!1);
  ye(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? El.createPortal(/* @__PURE__ */ m(K.div, { ...r, ref: t }), s) : null;
});
Yn.displayName = Gf;
function qf(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var We = (e) => {
  const { present: t, children: n } = e, r = Xf(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), a = ae(r.ref, Kf(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: a }) : null;
};
We.displayName = "Presence";
function Xf(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), a = d.useRef("none"), s = e ? "mounted" : "unmounted", [i, c] = qf(s, {
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
  return d.useEffect(() => {
    const l = fn(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [i]), ye(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const h = a.current, p = fn(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ye(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, f = (p) => {
        const g = fn(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (p) => {
        p.target === t && (a.current = fn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: d.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function fn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Kf(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function Zf(e) {
  const t = /* @__PURE__ */ Qf(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(em);
    if (c) {
      const l = c.props.children, u = i.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Qf(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = nm(o), i = tm(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Et(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Jf = Symbol("radix.slottable");
function em(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Jf;
}
function tm(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const c = a(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function nm(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var rm = d[" useInsertionEffect ".trim().toString()] || ye;
function Lt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = om({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const u = d.useRef(e !== void 0);
    d.useEffect(() => {
      const f = u.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, r]);
  }
  const l = d.useCallback(
    (u) => {
      var f;
      if (i) {
        const h = am(u) ? u(e) : u;
        h !== e && ((f = s.current) == null || f.call(s, h));
      } else
        a(u);
    },
    [i, e, a, s]
  );
  return [c, l];
}
function om({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), a = d.useRef(t);
  return rm(() => {
    a.current = t;
  }, [t]), d.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function am(e) {
  return typeof e == "function";
}
var sm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Tt = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), hn = {}, gr = 0, Cs = function(e) {
  return e && (e.host || Cs(e.parentNode));
}, im = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Cs(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, cm = function(e, t, n, r) {
  var o = im(t, Array.isArray(e) ? e : [e]);
  hn[n] || (hn[n] = /* @__PURE__ */ new WeakMap());
  var a = hn[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(f) {
    !f || i.has(f) || (i.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var p = h.getAttribute(r), x = p !== null && p !== "false", g = (Tt.get(h) || 0) + 1, b = (a.get(h) || 0) + 1;
          Tt.set(h, g), a.set(h, b), s.push(h), g === 1 && x && mn.set(h, !0), b === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", h, S);
        }
    });
  };
  return u(t), i.clear(), gr++, function() {
    s.forEach(function(f) {
      var h = Tt.get(f) - 1, p = a.get(f) - 1;
      Tt.set(f, h), a.set(f, p), h || (mn.has(f) || f.removeAttribute(r), mn.delete(f)), p || f.removeAttribute(n);
    }), gr--, gr || (Tt = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), hn = {});
  };
}, to = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = sm(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), cm(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, $e = function() {
  return $e = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, $e.apply(this, arguments);
};
function ks(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function lm(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var vn = "right-scroll-bar-position", wn = "width-before-scroll-bar", dm = "with-scroll-bars-hidden", um = "--removed-body-scroll-bar-size";
function br(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function fm(e, t) {
  var n = ct(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var mm = typeof window < "u" ? d.useLayoutEffect : d.useEffect, ta = /* @__PURE__ */ new WeakMap();
function hm(e, t) {
  var n = fm(null, function(r) {
    return e.forEach(function(o) {
      return br(o, r);
    });
  });
  return mm(function() {
    var r = ta.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || br(i, null);
      }), a.forEach(function(i) {
        o.has(i) || br(i, s);
      });
    }
    ta.set(n, e);
  }, [e]), n;
}
function pm(e) {
  return e;
}
function gm(e, t) {
  t === void 0 && (t = pm);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function bm(e) {
  e === void 0 && (e = {});
  var t = gm(null);
  return t.options = $e({ async: !0, ssr: !1 }, e), t;
}
var Ns = function(e) {
  var t = e.sideCar, n = ks(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, $e({}, n));
};
Ns.isSideCarExport = !0;
function ym(e, t) {
  return e.useMedium(t), Ns;
}
var Ms = bm(), yr = function() {
}, Hn = d.forwardRef(function(e, t) {
  var n = d.useRef(null), r = d.useState({
    onScrollCapture: yr,
    onWheelCapture: yr,
    onTouchMoveCapture: yr
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, h = e.sideCar, p = e.noRelative, x = e.noIsolation, g = e.inert, b = e.allowPinchZoom, S = e.as, y = S === void 0 ? "div" : S, v = e.gapMode, C = ks(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = h, w = hm([n, t]), M = $e($e({}, C), o);
  return d.createElement(
    d.Fragment,
    null,
    u && d.createElement(k, { sideCar: Ms, removeScrollBar: l, shards: f, noRelative: p, noIsolation: x, inert: g, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: v }),
    s ? d.cloneElement(d.Children.only(i), $e($e({}, M), { ref: w })) : d.createElement(y, $e({}, M, { className: c, ref: w }), i)
  );
});
Hn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hn.classNames = {
  fullWidth: wn,
  zeroRight: vn
};
var vm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function wm() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vm();
  return t && e.setAttribute("nonce", t), e;
}
function xm(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Sm(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Cm = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = wm()) && (xm(t, n), Sm(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, km = function() {
  var e = Cm();
  return function(t, n) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ps = function() {
  var e = km(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Nm = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, vr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Mm = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [vr(n), vr(r), vr(o)];
}, Pm = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Nm;
  var t = Mm(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Em = Ps(), zt = "data-scroll-locked", Om = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(dm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(zt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(vn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(wn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(vn, " .").concat(vn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(wn, " .").concat(wn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(zt, `] {
    `).concat(um, ": ").concat(i, `px;
  }
`);
}, na = function() {
  var e = parseInt(document.body.getAttribute(zt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Dm = function() {
  d.useEffect(function() {
    return document.body.setAttribute(zt, (na() + 1).toString()), function() {
      var e = na() - 1;
      e <= 0 ? document.body.removeAttribute(zt) : document.body.setAttribute(zt, e.toString());
    };
  }, []);
}, Tm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Dm();
  var a = d.useMemo(function() {
    return Pm(o);
  }, [o]);
  return d.createElement(Em, { styles: Om(a, !t, o, n ? "" : "!important") });
}, Tr = !1;
if (typeof window < "u")
  try {
    var pn = Object.defineProperty({}, "passive", {
      get: function() {
        return Tr = !0, !0;
      }
    });
    window.addEventListener("test", pn, pn), window.removeEventListener("test", pn, pn);
  } catch {
    Tr = !1;
  }
var Rt = Tr ? { passive: !1 } : !1, Rm = function(e) {
  return e.tagName === "TEXTAREA";
}, Es = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Rm(e) && n[t] === "visible")
  );
}, Am = function(e) {
  return Es(e, "overflowY");
}, Im = function(e) {
  return Es(e, "overflowX");
}, ra = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Os(e, r);
    if (o) {
      var a = Ds(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, _m = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Wm = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Os = function(e, t) {
  return e === "v" ? Am(t) : Im(t);
}, Ds = function(e, t) {
  return e === "v" ? _m(t) : Wm(t);
}, Fm = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, zm = function(e, t, n, r, o) {
  var a = Fm(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, f = 0, h = 0;
  do {
    if (!i)
      break;
    var p = Ds(e, i), x = p[0], g = p[1], b = p[2], S = g - b - a * x;
    (x || S) && Os(e, i) && (f += S, h += x);
    var y = i.parentNode;
    i = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(h) < 1) && (l = !0), l;
}, gn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, oa = function(e) {
  return [e.deltaX, e.deltaY];
}, aa = function(e) {
  return e && "current" in e ? e.current : e;
}, $m = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Bm = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Lm = 0, At = [];
function Ym(e) {
  var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), o = d.useState(Lm++)[0], a = d.useState(Ps)[0], s = d.useRef(e);
  d.useEffect(function() {
    s.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = lm([e.lockRef.current], (e.shards || []).map(aa), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = d.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !s.current.allowPinchZoom;
    var S = gn(g), y = n.current, v = "deltaX" in g ? g.deltaX : y[0] - S[0], C = "deltaY" in g ? g.deltaY : y[1] - S[1], k, w = g.target, M = Math.abs(v) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && M === "h" && w.type === "range")
      return !1;
    var N = window.getSelection(), P = N && N.anchorNode, R = P ? P === w || P.contains(w) : !1;
    if (R)
      return !1;
    var W = ra(M, w);
    if (!W)
      return !0;
    if (W ? k = M : (k = M === "v" ? "h" : "v", W = ra(M, w)), !W)
      return !1;
    if (!r.current && "changedTouches" in g && (v || C) && (r.current = k), !k)
      return !0;
    var H = r.current || k;
    return zm(H, b, g, H === "h" ? v : C);
  }, []), c = d.useCallback(function(g) {
    var b = g;
    if (!(!At.length || At[At.length - 1] !== a)) {
      var S = "deltaY" in b ? oa(b) : gn(b), y = t.current.filter(function(k) {
        return k.name === b.type && (k.target === b.target || b.target === k.shadowParent) && $m(k.delta, S);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var v = (s.current.shards || []).map(aa).filter(Boolean).filter(function(k) {
          return k.contains(b.target);
        }), C = v.length > 0 ? i(b, v[0]) : !s.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = d.useCallback(function(g, b, S, y) {
    var v = { name: g, delta: b, target: S, should: y, shadowParent: Hm(S) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== v;
      });
    }, 1);
  }, []), u = d.useCallback(function(g) {
    n.current = gn(g), r.current = void 0;
  }, []), f = d.useCallback(function(g) {
    l(g.type, oa(g), g.target, i(g, e.lockRef.current));
  }, []), h = d.useCallback(function(g) {
    l(g.type, gn(g), g.target, i(g, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return At.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Rt), document.addEventListener("touchmove", c, Rt), document.addEventListener("touchstart", u, Rt), function() {
      At = At.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", c, Rt), document.removeEventListener("touchmove", c, Rt), document.removeEventListener("touchstart", u, Rt);
    };
  }, []);
  var p = e.removeScrollBar, x = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    x ? d.createElement(a, { styles: Bm(o) }) : null,
    p ? d.createElement(Tm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Hm(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Vm = ym(Ms, Ym);
var Vn = d.forwardRef(function(e, t) {
  return d.createElement(Hn, $e({}, e, { ref: t, sideCar: Vm }));
});
Vn.classNames = Hn.classNames;
var jn = "Popover", [Ts] = mt(jn, [
  Ln
]), nn = Ln(), [jm, ht] = Ts(jn), Rs = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = nn(t), c = d.useRef(null), [l, u] = d.useState(!1), [f, h] = Lt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: jn
  });
  return /* @__PURE__ */ m(ws, { ...i, children: /* @__PURE__ */ m(
    jm,
    {
      scope: t,
      contentId: Qe(),
      triggerRef: c,
      open: f,
      onOpenChange: h,
      onOpenToggle: d.useCallback(() => h((p) => !p), [h]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: d.useCallback(() => u(!0), []),
      onCustomAnchorRemove: d.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Rs.displayName = jn;
var As = "PopoverAnchor", Is = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ht(As, n), a = nn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return d.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ m(eo, { ...a, ...r, ref: t });
  }
);
Is.displayName = As;
var _s = "PopoverTrigger", Ws = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ht(_s, n), a = nn(n), s = ae(t, o.triggerRef), i = /* @__PURE__ */ m(
      K.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ls(o.open),
        ...r,
        ref: s,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ m(eo, { asChild: !0, ...a, children: i });
  }
);
Ws.displayName = _s;
var no = "PopoverPortal", [Um, Gm] = Ts(no, {
  forceMount: void 0
}), Fs = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = ht(no, t);
  return /* @__PURE__ */ m(Um, { scope: t, forceMount: n, children: /* @__PURE__ */ m(We, { present: n || a.open, children: /* @__PURE__ */ m(Yn, { asChild: !0, container: o, children: r }) }) });
};
Fs.displayName = no;
var Yt = "PopoverContent", zs = d.forwardRef(
  (e, t) => {
    const n = Gm(Yt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = ht(Yt, e.__scopePopover);
    return /* @__PURE__ */ m(We, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m(Xm, { ...o, ref: t }) : /* @__PURE__ */ m(Km, { ...o, ref: t }) });
  }
);
zs.displayName = Yt;
var qm = /* @__PURE__ */ Zf("PopoverContent.RemoveScroll"), Xm = d.forwardRef(
  (e, t) => {
    const n = ht(Yt, e.__scopePopover), r = d.useRef(null), o = ae(t, r), a = d.useRef(!1);
    return d.useEffect(() => {
      const s = r.current;
      if (s) return to(s);
    }, []), /* @__PURE__ */ m(Vn, { as: qm, allowPinchZoom: !0, children: /* @__PURE__ */ m(
      $s,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Y(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            a.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Y(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Km = d.forwardRef(
  (e, t) => {
    const n = ht(Yt, e.__scopePopover), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ m(
      $s,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), $s = d.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: u,
      ...f
    } = e, h = ht(Yt, n), p = nn(n);
    return jr(), /* @__PURE__ */ m(
      Wn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ m(
          _n,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ m(
              xs,
              {
                "data-state": Ls(h.open),
                role: "dialog",
                id: h.contentId,
                ...p,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), Bs = "PopoverClose", Zm = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = ht(Bs, n);
    return /* @__PURE__ */ m(
      K.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Zm.displayName = Bs;
var Qm = "PopoverArrow", Jm = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = nn(n);
    return /* @__PURE__ */ m(Ss, { ...o, ...r, ref: t });
  }
);
Jm.displayName = Qm;
function Ls(e) {
  return e ? "open" : "closed";
}
var eh = Rs, th = Is, nh = Ws, rh = Fs, Ys = zs;
const Un = eh, Gn = nh, cw = th, rn = d.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ m(rh, { children: /* @__PURE__ */ m(
  Ys,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: E(
      "z-50 rounded-xl border border-border bg-surface p-4 text-text-base shadow-lg outline-none",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
      "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
      e
    ),
    ...r
  }
) }));
rn.displayName = Ys.displayName;
const oh = [
  "#f59e0b",
  // amber-500  (databeez primary)
  "#ef4444",
  // red-500
  "#f97316",
  // orange-500
  "#84cc16",
  // lime-500
  "#10b981",
  // emerald-500
  "#06b6d4",
  // cyan-500
  "#3b82f6",
  // blue-500
  "#8b5cf6",
  // violet-500
  "#ec4899",
  // pink-500
  "#6b7280",
  // gray-500
  "#1f2937",
  // gray-800
  "#ffffff"
  // white
];
function ah({
  value: e = "#f59e0b",
  onChange: t,
  presets: n = oh,
  label: r,
  error: o,
  helperText: a,
  disabled: s,
  className: i
}) {
  const c = d.useId(), [l, u] = d.useState(e);
  d.useEffect(() => {
    u(e);
  }, [e]);
  function f(p) {
    const x = p.target.value;
    u(x), /^#[0-9a-fA-F]{6}$/.test(x) && (t == null || t(x));
  }
  function h(p) {
    u(p), t == null || t(p);
  }
  return /* @__PURE__ */ T("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ m("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ T(Un, { children: [
      /* @__PURE__ */ m(Gn, { asChild: !0, children: /* @__PURE__ */ T(
        "button",
        {
          id: c,
          type: "button",
          disabled: s,
          className: E(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            o && "border-red-300 focus:ring-red-500 focus:border-red-500",
            i
          ),
          children: [
            /* @__PURE__ */ m(
              "span",
              {
                className: "h-5 w-5 rounded border border-border shrink-0",
                style: { backgroundColor: e }
              }
            ),
            /* @__PURE__ */ m("span", { className: "text-text-base font-mono text-xs uppercase", children: e }),
            /* @__PURE__ */ m(Ll, { className: "ml-auto h-4 w-4 text-text-muted shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ m(rn, { className: "w-64", align: "start", children: /* @__PURE__ */ T("div", { className: "space-y-3", children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: "h-16 w-full rounded-lg border border-border",
            style: { backgroundColor: e }
          }
        ),
        /* @__PURE__ */ T("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ m(
            "input",
            {
              type: "color",
              value: e,
              onChange: (p) => {
                u(p.target.value), t == null || t(p.target.value);
              },
              className: "h-10 w-10 rounded-lg border border-border cursor-pointer bg-transparent p-0.5",
              disabled: s
            }
          ),
          /* @__PURE__ */ m(
            "input",
            {
              type: "text",
              value: l,
              onChange: f,
              placeholder: "#000000",
              maxLength: 7,
              className: E(
                "flex-1 h-10 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-mono uppercase",
                "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
                "placeholder:text-text-muted"
              ),
              disabled: s
            }
          )
        ] }),
        n.length > 0 && /* @__PURE__ */ m("div", { className: "grid grid-cols-6 gap-1.5", children: n.map((p) => /* @__PURE__ */ m(
          "button",
          {
            type: "button",
            onClick: () => h(p),
            className: E(
              "h-7 w-full rounded-md border transition-all",
              e === p ? "border-databeez-primary ring-2 ring-databeez-primary/30 scale-110" : "border-border hover:scale-110"
            ),
            style: { backgroundColor: p },
            title: p,
            disabled: s
          },
          p
        )) })
      ] }) })
    ] }),
    o && /* @__PURE__ */ m("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ m("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
ah.displayName = "ColorPicker";
function sh({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Seleziona...",
  searchPlaceholder: o = "Cerca...",
  emptyMessage: a = "Nessun risultato.",
  label: s,
  error: i,
  helperText: c,
  disabled: l,
  className: u,
  clearable: f = !1
}) {
  const h = d.useId(), [p, x] = d.useState(!1), [g, b] = d.useState(""), S = d.useRef(null), y = d.useMemo(() => {
    if (!g) return e;
    const w = g.toLowerCase();
    return e.filter((M) => M.label.toLowerCase().includes(w));
  }, [e, g]), v = e.find((w) => w.value === t);
  function C(w) {
    n == null || n(w === t ? "" : w), x(!1), b("");
  }
  function k(w) {
    w.stopPropagation(), n == null || n("");
  }
  return /* @__PURE__ */ T("div", { className: "space-y-1", children: [
    s && /* @__PURE__ */ m("label", { htmlFor: h, className: "block text-sm font-medium text-text-base", children: s }),
    /* @__PURE__ */ T(Un, { open: p, onOpenChange: (w) => {
      x(w), w || b("");
    }, children: [
      /* @__PURE__ */ m(Gn, { asChild: !0, children: /* @__PURE__ */ T(
        "button",
        {
          id: h,
          type: "button",
          role: "combobox",
          "aria-expanded": p,
          disabled: l,
          className: E(
            "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !v && "text-text-muted",
            i && "border-red-300 focus:ring-red-500 focus:border-red-500",
            u
          ),
          children: [
            /* @__PURE__ */ m("span", { className: "truncate", children: (v == null ? void 0 : v.label) ?? r }),
            /* @__PURE__ */ T("div", { className: "flex items-center gap-1 shrink-0", children: [
              f && t && /* @__PURE__ */ m(
                In,
                {
                  className: "h-3.5 w-3.5 text-text-muted hover:text-text-base cursor-pointer",
                  onClick: k
                }
              ),
              /* @__PURE__ */ m(_l, { className: "h-4 w-4 text-text-muted" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ T(rn, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
        /* @__PURE__ */ T("div", { className: "flex items-center border-b border-border px-3", children: [
          /* @__PURE__ */ m(Ra, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ m(
            "input",
            {
              ref: S,
              value: g,
              onChange: (w) => b(w.target.value),
              placeholder: o,
              className: "flex-1 bg-transparent py-3 pl-2 text-sm outline-none placeholder:text-text-muted",
              autoFocus: !0
            }
          )
        ] }),
        /* @__PURE__ */ m("div", { className: "max-h-60 overflow-y-auto p-1", children: y.length === 0 ? /* @__PURE__ */ m("div", { className: "py-6 text-center text-sm text-text-muted", children: a }) : y.map((w) => /* @__PURE__ */ T(
          "button",
          {
            type: "button",
            disabled: w.disabled,
            onClick: () => C(w.value),
            className: E(
              "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none transition-colors",
              "hover:bg-subtle focus:bg-subtle",
              "disabled:pointer-events-none disabled:opacity-50",
              w.value === t && "font-medium"
            ),
            children: [
              /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: w.value === t && /* @__PURE__ */ m(An, { className: "h-4 w-4 text-databeez-primary" }) }),
              w.label
            ]
          },
          w.value
        )) })
      ] })
    ] }),
    i && /* @__PURE__ */ m("p", { className: "text-xs text-red-600", children: i }),
    c && !i && /* @__PURE__ */ m("p", { className: "text-xs text-text-muted", children: c })
  ] });
}
sh.displayName = "Combobox";
const ih = d.lazy(async () => {
  const [{ Prism: e }, { oneDark: t }] = await Promise.all([
    import("./index-CqL3bFoY.mjs").then((n) => n.ca),
    import("./index-CFVSE0Ln.mjs")
  ]);
  return {
    default: ({ children: n, language: r }) => /* @__PURE__ */ m(
      e,
      {
        language: r,
        style: t,
        customStyle: { margin: 0, borderRadius: 0, fontSize: "0.875rem", lineHeight: "1.6" },
        showLineNumbers: !1,
        children: n
      }
    )
  };
});
function lw({
  code: e,
  language: t = "text",
  copyable: n = !0,
  className: r,
  ...o
}) {
  const [a, s] = d.useState(!1), i = async () => {
    await navigator.clipboard.writeText(e), s(!0), setTimeout(() => s(!1), 2e3);
  };
  return /* @__PURE__ */ T(
    "div",
    {
      className: E("relative rounded-xl overflow-hidden text-sm", r),
      ...o,
      children: [
        /* @__PURE__ */ T("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ m("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: t }),
          n && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: i,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: a ? /* @__PURE__ */ T(Je, { children: [
                /* @__PURE__ */ m(An, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ m("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ T(Je, { children: [
                /* @__PURE__ */ m(Ta, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ m("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ m(d.Suspense, { fallback: /* @__PURE__ */ m("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ m(ih, { language: t, children: e }) })
      ]
    }
  );
}
function ch({
  text: e,
  label: t,
  resetDelay: n = 2e3,
  className: r,
  ...o
}) {
  const [a, s] = d.useState(!1);
  return /* @__PURE__ */ T(
    "button",
    {
      type: "button",
      onClick: async (c) => {
        c.stopPropagation(), await navigator.clipboard.writeText(e), s(!0), setTimeout(() => s(!1), n);
      },
      "aria-label": a ? "Copiato!" : `Copia${t ? ` ${t}` : ""}`,
      className: E(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        a ? "text-green-600" : "text-text-muted hover:text-text-base",
        r
      ),
      ...o,
      children: [
        a ? /* @__PURE__ */ m(An, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ m(Ta, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ m("span", { children: a ? "Copiato!" : t })
      ]
    }
  );
}
function dw({ width: e, height: t = 48, className: n, variant: r = "color" }) {
  return /* @__PURE__ */ T(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 293 328",
      width: e,
      height: t,
      className: n,
      "aria-label": "DataBeez logo",
      role: "img",
      children: [
        /* @__PURE__ */ m("g", { fill: r === "mono" ? "currentColor" : "#363d45", children: /* @__PURE__ */ m("path", { d: "M128.5 314.6 c-22 -12.4 -29.6 -17.5 -31.7 -21.6 -1.5 -2.9 -1.8 -6 -1.8 -19.7 0 -9.9 -0.4 -16.4 -1 -16.8 -0.6 -0.4 -7 2.8 -14.3 7.1 -11.2 6.6 -14 7.8 -18.7 8.1 -5.3 0.4 -6 0.2 -17 -6.2 -6.3 -3.7 -14.8 -8.5 -18.9 -10.8 -9.6 -5.4 -14.6 -10.1 -16 -15.2 -0.6 -2.3 -1.1 -12.8 -1.1 -25 0 -27.6 -0.2 -27.2 16.2 -37 6.5 -3.8 13.2 -7.8 15 -8.8 l3.3 -1.9 -2.3 -1.9 c-1.3 -1 -5.8 -3.7 -10 -6 -22.7 -12.5 -22.1 -11.4 -22.2 -41.2 0 -23.7 0.4 -26.1 5.6 -30.8 1.6 -1.4 11.5 -7.7 21.9 -13.9 15.1 -9 20 -11.4 23.7 -11.8 5 -0.5 4.2 -0.8 24.3 10.7 5 2.8 9.6 5.1 10.3 5.1 0.9 0 1.2 -4 1.2 -16.7 0 -15.6 0.2 -17.1 2.3 -20.5 2.9 -4.9 4.2 -5.8 25.7 -18.4 16.7 -9.7 19 -10.8 23.5 -10.8 5.3 -0.1 5.6 0 33 16.2 18.8 11.1 18.5 10.5 18.5 33.1 0 10.7 0.4 17.2 1 17.6 0.6 0.4 5.4 -1.9 10.8 -5.1 18.9 -11.2 19.4 -11.4 24.7 -11.4 4.6 0 6.5 0.9 22.5 10.4 21.4 12.7 24.8 15.2 27.2 19.6 1.6 3.1 1.8 6 1.8 26.8 0 25.2 -0.2 26.3 -5.7 31.3 -1.5 1.4 -7.4 5.2 -13.1 8.4 -5.7 3.2 -11.3 6.6 -12.4 7.5 l-2.2 1.7 2.5 1.5 c1.3 0.8 7.8 4.7 14.4 8.5 17.1 10 16.5 8.7 16.5 38.7 0 25.7 -0.2 26.6 -5.7 31.8 -1.5 1.4 -11.1 7.5 -21.3 13.4 -24.9 14.4 -23.6 14.3 -43.5 3 -8.2 -4.7 -15.4 -8.5 -16 -8.3 -0.6 0.2 -1.2 8.1 -1.5 19.6 l-0.5 19.2 -4.5 4.2 c-2.5 2.3 -12.7 8.8 -22.6 14.5 -23.3 13.1 -21.8 13.1 -41.9 1.8z m32.5 -17.6 c5.6 -3.3 10.4 -6 10.7 -6 0.2 0 2.4 -1.4 4.9 -3 l4.4 -3.1 0 -17.8 0 -17.8 -6.2 -3.3 c-3.5 -1.9 -8.1 -4.5 -10.3 -5.9 -5.6 -3.6 -6.7 -4.2 -12.9 -7.5 l-5.5 -2.9 -17.1 10.3 -17 10.2 0.2 16.6 0.3 16.7 5 3.3 c2.8 1.8 7 4.3 9.5 5.6 2.5 1.3 7.9 4.5 12 7 5 3.1 8.2 4.4 9.7 4.1 1.2 -0.3 6.7 -3.2 12.3 -6.5z m-91.4 -48.7 c11.8 -6.6 12 -6.7 13.5 -8 0.8 -0.6 4.2 -2.6 7.7 -4.4 14.3 -7.7 15.2 -8.3 15.2 -10.9 0 -1 -2.8 -4.4 -6.2 -7.5 -3.5 -3.1 -6.8 -6.6 -7.5 -7.8 -0.8 -1.5 -1.2 -7.4 -1.3 -17.3 l0 -15 -3.5 -1.7 c-4.2 -2 -9.1 -8.5 -10.6 -14.1 -1.6 -5.7 -0.6 -15.3 2 -20.1 2.9 -5.2 8.5 -10.2 13 -11.5 4.9 -1.4 14.5 -1.3 19.5 0.2 5.7 1.7 13 9.3 14.5 15.2 2.8 11.2 0.4 21.4 -6.6 27.5 -2.5 2.3 -5.2 4.1 -5.9 4.1 -1.1 0 -1.4 2.2 -1.4 9.9 l0 9.9 6.6 5.8 c3.7 3.2 7.2 7 7.8 8.5 l1.1 2.7 4 -2.7 4 -2.7 0.2 -41.9 0.3 -42 -8.8 -5.1 c-4.8 -2.8 -18.1 -10.8 -29.5 -17.7 -11.4 -7 -21 -12.7 -21.2 -12.7 -0.2 0 -3.9 -2.1 -8.2 -4.6 l-7.8 -4.7 -3 1.8 c-1.6 1 -8.8 5.1 -16 9.2 -7.2 4.1 -13.6 8 -14.3 8.5 -0.9 0.8 -1.2 5.4 -1 18.7 l0.3 17.6 9 5.1 c5 2.9 12.3 6.9 16.4 9.1 4.1 2.1 8.9 5.2 10.7 6.9 3.2 2.9 3.4 3.6 3.4 9.5 0 4.6 -0.5 7 -1.8 8.5 -0.9 1.2 -7.5 5.4 -14.7 9.4 -7.2 3.9 -15.4 8.6 -18.3 10.3 l-5.2 3.1 0.2 18.4 0.3 18.4 5 2.9 c2.8 1.6 5.9 3.4 7 3.9 1.1 0.6 2.7 1.5 3.5 2 3.1 2.1 17.5 10 18.2 10 0.5 0 4.7 -2.1 9.4 -4.7z m183.3 -5.7 l15.6 -9.2 0.3 -17.6 0.2 -17.7 -3.3 -2.5 c-1.8 -1.4 -5.6 -3.8 -8.3 -5.2 -28.8 -15.4 -28.4 -15 -28.4 -24.2 0 -6.5 2.3 -10.2 7.7 -12.6 4.2 -1.8 26.5 -14.5 30.1 -17.1 2.1 -1.5 2.2 -2.1 2.2 -19 l0 -17.4 -3.2 -2.4 c-1.8 -1.3 -6.9 -4.4 -11.3 -6.7 -4.4 -2.4 -10.7 -6 -14.1 -8.1 l-6.1 -3.7 -29.9 18 c-16.4 9.9 -33.6 20.2 -38.1 22.9 l-8.3 5 0 41.9 0 41.9 3.7 2.5 c3.9 2.7 5.3 2.6 5.3 -0.4 0 -1.1 3 -4.6 7 -8.1 l7 -6.3 0 -9.6 -0.1 -9.5 -3.7 -2.3 c-2.1 -1.3 -5.1 -4.4 -6.7 -7 -2.8 -4.4 -3 -5.3 -3 -14.7 0 -12 1.7 -15.5 9.7 -20.6 4.4 -2.8 6.1 -3.3 13.2 -3.7 8.9 -0.5 12.9 0.7 19.1 5.4 5.8 4.4 7.7 10 7.3 20.8 -0.3 8.2 -0.6 9.6 -3.3 13.6 -1.7 2.5 -5 5.5 -7.3 6.8 l-4.2 2.3 0 14.5 c0 17 -0.2 17.7 -8.9 25.2 -3.4 3 -6.1 5.9 -6.1 6.7 0 0.7 4.4 3.9 9.8 7 5.3 3.1 15.8 9.2 23.2 13.6 9.1 5.3 14.1 7.7 15.4 7.3 1.1 -0.4 8.9 -4.8 17.5 -9.8z m-148.5 -86.5 c1.9 -2.1 1.4 -4.1 -1.5 -5.9 -1.8 -1.1 -2.4 -1.1 -4 0.4 -2.3 2.1 -2.4 3.2 -0.2 5.6 2.1 2.3 3.6 2.3 5.7 -0.1z m91 -0.3 c1.5 -2.1 1.4 -2.4 -0.9 -4.7 -2.4 -2.4 -2.5 -2.4 -4.5 -0.6 -2.3 2 -2.6 4.5 -0.8 6.3 1.9 1.9 4.5 1.4 6.2 -1z m-36.9 -58.5 c2.8 -1.6 5.7 -3.2 6.5 -3.6 0.8 -0.4 2.9 -1.6 4.5 -2.7 1.7 -1.1 3.7 -2.3 4.5 -2.7 0.8 -0.4 2.7 -1.6 4.3 -2.7 l2.7 -2 0 -17.1 0 -17.1 -3 -2.2 c-1.6 -1.2 -3.2 -2.2 -3.6 -2.2 -0.3 0 -1.9 -0.9 -3.4 -2 -1.5 -1.1 -7.6 -4.7 -13.5 -8 l-10.8 -6 -12.1 7 c-6.7 3.8 -14.3 8.4 -17.1 10.2 l-5 3.3 -0.3 16.7 -0.2 16.7 4.7 2.8 c2.7 1.5 7.7 4.6 11.3 6.9 3.6 2.3 9.4 5.7 13 7.7 6.5 3.5 6.5 3.5 9.5 1.7 1.7 -1 5.3 -3.1 8 -4.7z" }) }),
        /* @__PURE__ */ T("g", { fill: "#f49e09", children: [
          /* @__PURE__ */ m("path", { d: "M137.5 303.3 c-4.9 -3 -11 -6.6 -13.5 -7.9 -2.5 -1.3 -6.7 -3.8 -9.5 -5.6 l-5 -3.3 -0.3 -19.7 -0.2 -19.6 15.7 -9.5 c23.6 -14.1 20.6 -13.2 28.8 -8.6 3.9 2.1 7.7 4.2 8.5 4.6 0.8 0.4 3.3 1.9 5.5 3.4 2.2 1.4 6.8 4.1 10.3 5.9 l6.2 3.3 0 20.8 0 20.8 -4.4 3.1 c-2.5 1.6 -4.7 3 -4.9 3 -0.3 0 -3.8 1.9 -7.9 4.3 -11.4 6.8 -18.6 10.7 -19.5 10.6 -0.4 0 -4.8 -2.5 -9.8 -5.6z" }),
          /* @__PURE__ */ m("path", { d: "M51 252.9 c-4.7 -2.7 -9.4 -5.4 -10.5 -5.9 -1.1 -0.6 -3.3 -1.9 -5 -2.9 -1.6 -1 -5 -3 -7.5 -4.4 l-4.5 -2.5 -0.3 -21.4 -0.2 -21.4 5.2 -3.1 c2.9 -1.7 11.2 -6.4 18.3 -10.3 7.2 -4 13.8 -8.2 14.7 -9.4 1 -1.1 1.8 -3.6 1.8 -5.5 0 -4.3 -4.1 -8.2 -14.1 -13.4 -4.1 -2.2 -11.4 -6.2 -16.4 -9.1 l-9 -5.1 -0.3 -20.6 c-0.2 -15.7 0.1 -20.9 1 -21.7 1.1 -0.8 15.7 -9.4 32.3 -18.8 l4.1 -2.3 9.3 5.4 c5.1 3 9.5 5.5 9.7 5.5 0.2 0 9.7 5.7 21.1 12.7 11.4 6.9 24.7 14.9 29.5 17.7 l8.8 5.1 -0.3 45 -0.2 45 -6.5 4.2 c-3.6 2.4 -6.8 4.3 -7.2 4.3 -0.5 0 -0.8 -1.5 -0.8 -3.2 0 -2.8 -1.1 -4.4 -7.5 -10.3 l-7.5 -7.1 0 -12.7 c0 -10 0.3 -12.7 1.4 -12.7 0.7 0 3.4 -1.8 6 -4.1 6.1 -5.4 8.4 -12.6 6.6 -20.6 -2.1 -9.4 -11.9 -17.3 -21.6 -17.3 -10.2 0 -19.9 8.5 -21.9 19.3 -1.4 7.2 4.3 18.2 11 21.4 l3.5 1.7 0 15 c0.1 9.9 0.5 15.8 1.3 17.3 0.7 1.2 4 4.7 7.5 7.8 6 5.5 6.2 5.9 6.2 10.5 0 5.9 0.5 5.5 -15.2 13.9 -3.5 1.8 -6.9 3.8 -7.7 4.4 -1.6 1.3 -2.1 1.6 -15.4 9 -5.8 3.1 -10.7 5.7 -10.8 5.6 -0.2 0 -4.2 -2.3 -8.9 -5z" }),
          /* @__PURE__ */ m("path", { d: "M227 253.7 c-4.1 -2.4 -11.3 -6.5 -16 -9.1 -4.7 -2.7 -12.7 -7.4 -17.7 -10.4 l-9.3 -5.4 0 -4.3 c0 -4.1 0.4 -4.7 6.1 -9.7 8.7 -7.5 8.9 -8.2 8.9 -25.2 l0 -14.5 4.2 -2.3 c12.7 -7 14.6 -26.6 3.3 -35.2 -8.8 -6.7 -17.7 -7.3 -26.5 -1.6 -7 4.5 -9.4 8.9 -9.4 17.5 -0.1 6.1 0.3 7.6 2.9 11.7 1.6 2.6 4.6 5.7 6.7 7 l3.7 2.3 0.1 12.5 0 12.6 -6.9 6.2 c-5.7 5.1 -7 6.8 -7.6 10.2 -0.4 2.2 -0.8 4 -1.1 4 -0.6 0 -7.8 -4.1 -10.6 -6.2 l-2.8 -1.9 0 -44.9 0 -44.9 9.8 -5.9 c39 -23.5 65.8 -39.5 67.7 -40.4 2 -0.9 3.6 -0.3 10.7 4 4.5 2.7 11.5 6.7 15.3 8.7 3.9 2.1 8.5 4.9 10.3 6.2 l3.2 2.4 0 20.4 c0 20 0 20.4 -2.2 22 -3.6 2.6 -25.9 15.3 -30.1 17.1 -6.6 2.9 -9.3 8.8 -6.4 14.3 1.2 2.4 5.3 4.9 27.1 16.5 2.7 1.4 6.4 3.8 8.3 5.2 l3.3 2.5 -0.2 20.7 -0.3 20.6 -12.5 7.4 c-6.9 4.1 -14.6 8.5 -17.3 9.9 -2.6 1.4 -5 2.9 -5.3 3.4 -0.8 1.4 -1.5 1.2 -9.4 -3.4z" }),
          /* @__PURE__ */ m("path", { d: "M95.9 159.1 c-3.4 -3.5 -3.7 -6.8 -0.8 -10.5 2.9 -3.6 8.6 -3.6 12.3 0 3.6 3.7 3.4 7.5 -0.5 10.8 -4 3.4 -7.4 3.3 -11 -0.3z" }),
          /* @__PURE__ */ m("path", { d: "M186.5 159.5 c-5.1 -5 -1.7 -13.5 5.4 -13.5 4.7 0 8.1 3.3 8.1 7.9 0 4.2 -3.8 8.1 -8 8.1 -1.9 0 -4 -0.9 -5.5 -2.5z" }),
          /* @__PURE__ */ m("path", { d: "M145 107.6 c-0.8 -0.8 -4.2 -2.9 -7.5 -4.6 -3.3 -1.8 -8.9 -5.1 -12.5 -7.4 -3.6 -2.3 -8.6 -5.4 -11.3 -6.9 l-4.7 -2.8 0.2 -19.7 0.3 -19.7 5 -3.3 c10 -6.6 31.2 -18.2 33.2 -18.2 1.2 0 2.5 0.4 2.8 1 0.3 0.5 4.5 3.1 9.3 5.6 4.8 2.6 10.6 6 12.9 7.6 2.3 1.5 4.4 2.8 4.8 2.8 0.3 0 1.9 1 3.5 2.2 l3 2.2 0 20.1 0 20.1 -2.7 2 c-1.6 1.1 -3.5 2.3 -4.3 2.7 -0.8 0.4 -2.8 1.6 -4.5 2.7 -1.6 1.1 -3.7 2.3 -4.5 2.7 -0.8 0.3 -5.9 3.3 -11.2 6.5 -5.4 3.2 -9.9 5.8 -10.1 5.8 -0.1 0 -0.9 -0.6 -1.7 -1.4z" })
        ] })
      ]
    }
  );
}
function lh(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const wr = {}, qt = {};
function St(e, t) {
  try {
    const r = (wr[e] || (wr[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in qt ? qt[r] : sa(r, r.split(":"));
  } catch {
    if (e in qt) return qt[e];
    const n = e == null ? void 0 : e.match(dh);
    return n ? sa(e, n.slice(1)) : NaN;
  }
}
const dh = /([+-]\d\d):?(\d\d)?/;
function sa(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return qt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class He extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(St(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Hs(this), Rr(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new He(...n, t) : new He(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new He(+this, t);
  }
  getTimezoneOffset() {
    const t = -St(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Rr(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new He(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ia = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!ia.test(e)) return;
  const t = e.replace(ia, "$1UTC");
  He.prototype[t] && (e.startsWith("get") ? He.prototype[e] = function() {
    return this.internal[t]();
  } : (He.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), uh(this), +this;
  }, He.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Rr(this), +this;
  }));
});
function Rr(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-St(e.timeZone, e) * 60));
}
function uh(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Hs(e);
}
function Hs(e) {
  const t = St(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const u = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, f = Math.round(-(St(e.timeZone, e) * 60)) % 60;
  (f || u) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + f), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + f + u));
  const h = St(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, b = p !== n, S = g - c;
  if (b && S) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S);
    const y = St(e.timeZone, e), v = y > 0 ? Math.floor(y) : Math.ceil(y), C = p - v;
    C && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + C), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + C));
  }
}
class ve extends He {
  //#region static
  static tz(t, ...n) {
    return n.length ? new ve(...n, t) : new ve(Date.now(), t);
  }
  //#endregion
  //#region representation
  toISOString() {
    const [t, n, r] = this.tzComponents(), o = `${t}${n}:${r}`;
    return this.internal.toISOString().slice(0, -1) + o;
  }
  toString() {
    return `${this.toDateString()} ${this.toTimeString()}`;
  }
  toDateString() {
    const [t, n, r, o] = this.internal.toUTCString().split(" ");
    return `${t == null ? void 0 : t.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${lh(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: (n == null ? void 0 : n.timeZone) || this.timeZone
    });
  }
  //#endregion
  //#region private
  tzComponents() {
    const t = this.getTimezoneOffset(), n = t > 0 ? "-" : "+", r = String(Math.floor(Math.abs(t) / 60)).padStart(2, "0"), o = String(Math.abs(t) % 60).padStart(2, "0");
    return [n, r, o];
  }
  //#endregion
  withTimeZone(t) {
    return new ve(+this, t);
  }
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new ve(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Vs = 6048e5, fh = 864e5, ca = Symbol.for("constructDateFrom");
function me(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && ca in e ? e[ca](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ie(e, t) {
  return me(t || e, e);
}
function js(e, t, n) {
  const r = ie(e, n == null ? void 0 : n.in);
  return isNaN(t) ? me(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Us(e, t, n) {
  const r = ie(e, n == null ? void 0 : n.in);
  if (isNaN(t)) return me(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), a = me(e, r.getTime());
  a.setMonth(r.getMonth() + t + 1, 0);
  const s = a.getDate();
  return o >= s ? a : (r.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    o
  ), r);
}
let mh = {};
function on() {
  return mh;
}
function ut(e, t) {
  var i, c, l, u;
  const n = on(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ie(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function Qt(e, t) {
  return ut(e, { ...t, weekStartsOn: 1 });
}
function Gs(e, t) {
  const n = ie(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = me(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = Qt(o), s = me(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = Qt(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function la(e) {
  const t = ie(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Ot(e, ...t) {
  const n = me.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function Jt(e, t) {
  const n = ie(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ro(e, t, n) {
  const [r, o] = Ot(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = Jt(r), s = Jt(o), i = +a - la(a), c = +s - la(s);
  return Math.round((i - c) / fh);
}
function hh(e, t) {
  const n = Gs(e, t), r = me(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Qt(r);
}
function ph(e, t, n) {
  return js(e, t * 7, n);
}
function gh(e, t, n) {
  return Us(e, t * 12, n);
}
function bh(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const a = ie(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), me(r, n || NaN);
}
function yh(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const a = ie(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), me(r, n || NaN);
}
function vh(e, t, n) {
  const [r, o] = Ot(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +Jt(r) == +Jt(o);
}
function qs(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function wh(e) {
  return !(!qs(e) && typeof e != "number" || isNaN(+ie(e)));
}
function Xs(e, t, n) {
  const [r, o] = Ot(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function xh(e, t) {
  const n = ie(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Ks(e, t) {
  const [n, r] = Ot(e, t.start, t.end);
  return { start: n, end: r };
}
function Sh(e, t) {
  const { start: n, end: r } = Ks(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(me(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function Ch(e, t) {
  const n = ie(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function kh(e, t) {
  const n = ie(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Zs(e, t) {
  const n = ie(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Nh(e, t) {
  const { start: n, end: r } = Ks(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(me(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function Qs(e, t) {
  var i, c, l, u;
  const n = on(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ie(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Mh(e, t) {
  return Qs(e, { ...t, weekStartsOn: 1 });
}
const Ph = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Eh = (e, t, n) => {
  let r;
  const o = Ph[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function $t(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Oh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Dh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Th = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Rh = {
  date: $t({
    formats: Oh,
    defaultWidth: "full"
  }),
  time: $t({
    formats: Dh,
    defaultWidth: "full"
  }),
  dateTime: $t({
    formats: Th,
    defaultWidth: "full"
  })
}, Ah = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ih = (e, t, n, r) => Ah[e];
function Be(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const _h = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Wh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Fh = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, zh = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, $h = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Bh = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Lh = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Yh = {
  ordinalNumber: Lh,
  era: Be({
    values: _h,
    defaultWidth: "wide"
  }),
  quarter: Be({
    values: Wh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Be({
    values: Fh,
    defaultWidth: "wide"
  }),
  day: Be({
    values: zh,
    defaultWidth: "wide"
  }),
  dayPeriod: Be({
    values: $h,
    defaultWidth: "wide",
    formattingValues: Bh,
    defaultFormattingWidth: "wide"
  })
};
function Le(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Vh(i, (f) => f.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Hh(i, (f) => f.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const u = t.slice(s.length);
    return { value: l, rest: u };
  };
}
function Hh(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Vh(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Js(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const jh = /^(\d+)(th|st|nd|rd)?/i, Uh = /\d+/i, Gh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, qh = {
  any: [/^b/i, /^(a|c)/i]
}, Xh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Kh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Zh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Qh = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Jh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ep = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, tp = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, np = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, rp = {
  ordinalNumber: Js({
    matchPattern: jh,
    parsePattern: Uh,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Le({
    matchPatterns: Gh,
    defaultMatchWidth: "wide",
    parsePatterns: qh,
    defaultParseWidth: "any"
  }),
  quarter: Le({
    matchPatterns: Xh,
    defaultMatchWidth: "wide",
    parsePatterns: Kh,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Le({
    matchPatterns: Zh,
    defaultMatchWidth: "wide",
    parsePatterns: Qh,
    defaultParseWidth: "any"
  }),
  day: Le({
    matchPatterns: Jh,
    defaultMatchWidth: "wide",
    parsePatterns: ep,
    defaultParseWidth: "any"
  }),
  dayPeriod: Le({
    matchPatterns: tp,
    defaultMatchWidth: "any",
    parsePatterns: np,
    defaultParseWidth: "any"
  })
}, Wt = {
  code: "en-US",
  formatDistance: Eh,
  formatLong: Rh,
  formatRelative: Ih,
  localize: Yh,
  match: rp,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function op(e, t) {
  const n = ie(e, t == null ? void 0 : t.in);
  return ro(n, Zs(n)) + 1;
}
function oo(e, t) {
  const n = ie(e, t == null ? void 0 : t.in), r = +Qt(n) - +hh(n);
  return Math.round(r / Vs) + 1;
}
function ei(e, t) {
  var u, f, h, p;
  const n = ie(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = on(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = me((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = ut(s, t), c = me((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = ut(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function ap(e, t) {
  var i, c, l, u;
  const n = on(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = ei(e, t), a = me((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), ut(a, t);
}
function ao(e, t) {
  const n = ie(e, t == null ? void 0 : t.in), r = +ut(n, t) - +ap(n, t);
  return Math.round(r / Vs) + 1;
}
function se(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const st = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return se(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : se(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return se(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return se(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return se(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return se(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return se(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return se(o, t.length);
  }
}, It = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, da = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return st.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = ei(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return se(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : se(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Gs(e);
    return se(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return se(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return se(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return se(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return st.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return se(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = ao(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : se(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = oo(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : se(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : st.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = op(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : se(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return se(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return se(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return se(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = It.noon : r === 0 ? o = It.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = It.evening : r >= 12 ? o = It.afternoon : r >= 4 ? o = It.morning : o = It.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return st.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : st.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : se(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : se(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : st.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : st.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return st.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return fa(r);
      case "XXXX":
      case "XX":
        return xt(r);
      case "XXXXX":
      case "XXX":
      default:
        return xt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return fa(r);
      case "xxxx":
      case "xx":
        return xt(r);
      case "xxxxx":
      case "xxx":
      default:
        return xt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + ua(r, ":");
      case "OOOO":
      default:
        return "GMT" + xt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + ua(r, ":");
      case "zzzz":
      default:
        return "GMT" + xt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return se(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return se(+e, t.length);
  }
};
function ua(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + se(a, 2);
}
function fa(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + se(Math.abs(e) / 60, 2) : xt(e, t);
}
function xt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = se(Math.trunc(r / 60), 2), a = se(r % 60, 2);
  return n + o + t + a;
}
const ma = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, ti = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, sp = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return ma(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", ma(r, t)).replace("{{time}}", ti(o, t));
}, ip = {
  p: ti,
  P: sp
}, cp = /^D+$/, lp = /^Y+$/, dp = ["D", "DD", "YY", "YYYY"];
function up(e) {
  return cp.test(e);
}
function fp(e) {
  return lp.test(e);
}
function mp(e, t, n) {
  const r = hp(e, t, n);
  if (console.warn(r), dp.includes(e)) throw new RangeError(r);
}
function hp(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const pp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, gp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, bp = /^'([^]*?)'?$/, yp = /''/g, vp = /[a-zA-Z]/;
function Xe(e, t, n) {
  var u, f, h, p, x, g, b, S;
  const r = on(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Wt, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((S = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : S.weekStartsOn) ?? 0, i = ie(e, n == null ? void 0 : n.in);
  if (!wh(i))
    throw new RangeError("Invalid time value");
  let c = t.match(gp).map((y) => {
    const v = y[0];
    if (v === "p" || v === "P") {
      const C = ip[v];
      return C(y, o.formatLong);
    }
    return y;
  }).join("").match(pp).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const v = y[0];
    if (v === "'")
      return { isToken: !1, value: wp(y) };
    if (da[v])
      return { isToken: !0, value: y };
    if (v.match(vp))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + v + "`"
      );
    return { isToken: !1, value: y };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((y) => {
    if (!y.isToken) return y.value;
    const v = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && fp(v) || !(n != null && n.useAdditionalDayOfYearTokens) && up(v)) && mp(v, t, String(e));
    const C = da[v[0]];
    return C(i, v, o.localize, l);
  }).join("");
}
function wp(e) {
  const t = e.match(bp);
  return t ? t[1].replace(yp, "'") : e;
}
function xp(e, t) {
  const n = ie(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = me(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Sp(e, t) {
  return ie(e, t == null ? void 0 : t.in).getMonth();
}
function Cp(e, t) {
  return ie(e, t == null ? void 0 : t.in).getFullYear();
}
function kp(e, t) {
  return +ie(e) > +ie(t);
}
function Np(e, t) {
  return +ie(e) < +ie(t);
}
function ha(e, t, n) {
  const [r, o] = Ot(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +ut(r, n) == +ut(o, n);
}
function Mp(e, t, n) {
  const [r, o] = Ot(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Pp(e, t, n) {
  const [r, o] = Ot(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Ep(e, t, n) {
  const r = ie(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = me(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = xp(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Op(e, t, n) {
  const r = ie(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? me(e, NaN) : (r.setFullYear(t), r);
}
const pa = 5, Dp = 4;
function Tp(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, pa * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? pa : Dp;
}
function ni(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -1 * 6) : t.addDays(n, -1 * (r - 1));
}
function Rp(e, t) {
  const n = ni(e, t), r = Tp(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Ap = {
  lessThanXSeconds: {
    one: "meno di un secondo",
    other: "meno di {{count}} secondi"
  },
  xSeconds: {
    one: "un secondo",
    other: "{{count}} secondi"
  },
  halfAMinute: "alcuni secondi",
  lessThanXMinutes: {
    one: "meno di un minuto",
    other: "meno di {{count}} minuti"
  },
  xMinutes: {
    one: "un minuto",
    other: "{{count}} minuti"
  },
  aboutXHours: {
    one: "circa un'ora",
    other: "circa {{count}} ore"
  },
  xHours: {
    one: "un'ora",
    other: "{{count}} ore"
  },
  xDays: {
    one: "un giorno",
    other: "{{count}} giorni"
  },
  aboutXWeeks: {
    one: "circa una settimana",
    other: "circa {{count}} settimane"
  },
  xWeeks: {
    one: "una settimana",
    other: "{{count}} settimane"
  },
  aboutXMonths: {
    one: "circa un mese",
    other: "circa {{count}} mesi"
  },
  xMonths: {
    one: "un mese",
    other: "{{count}} mesi"
  },
  aboutXYears: {
    one: "circa un anno",
    other: "circa {{count}} anni"
  },
  xYears: {
    one: "un anno",
    other: "{{count}} anni"
  },
  overXYears: {
    one: "più di un anno",
    other: "più di {{count}} anni"
  },
  almostXYears: {
    one: "quasi un anno",
    other: "quasi {{count}} anni"
  }
}, Ip = (e, t, n) => {
  let r;
  const o = Ap[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r;
}, _p = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Wp = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Fp = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, zp = {
  date: $t({
    formats: _p,
    defaultWidth: "full"
  }),
  time: $t({
    formats: Wp,
    defaultWidth: "full"
  }),
  dateTime: $t({
    formats: Fp,
    defaultWidth: "full"
  })
}, so = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function $p(e) {
  switch (e) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + so[e] + " scorso alle' p";
  }
}
function ga(e) {
  return "'" + so[e] + " alle' p";
}
function Bp(e) {
  switch (e) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + so[e] + " prossimo alle' p";
  }
}
const Lp = {
  lastWeek: (e, t, n) => {
    const r = e.getDay();
    return ha(e, t, n) ? ga(r) : $p(r);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, t, n) => {
    const r = e.getDay();
    return ha(e, t, n) ? ga(r) : Bp(r);
  },
  other: "P"
}, Yp = (e, t, n, r) => {
  const o = Lp[e];
  return typeof o == "function" ? o(t, n, r) : o;
}, Hp = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, Vp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, jp = {
  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
  abbreviated: [
    "gen",
    "feb",
    "mar",
    "apr",
    "mag",
    "giu",
    "lug",
    "ago",
    "set",
    "ott",
    "nov",
    "dic"
  ],
  wide: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
  ]
}, Up = {
  narrow: ["D", "L", "M", "M", "G", "V", "S"],
  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  wide: [
    "domenica",
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato"
  ]
}, Gp = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  }
}, qp = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  }
}, Xp = (e, t) => {
  const n = Number(e);
  return String(n);
}, Kp = {
  ordinalNumber: Xp,
  era: Be({
    values: Hp,
    defaultWidth: "wide"
  }),
  quarter: Be({
    values: Vp,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Be({
    values: jp,
    defaultWidth: "wide"
  }),
  day: Be({
    values: Up,
    defaultWidth: "wide"
  }),
  dayPeriod: Be({
    values: Gp,
    defaultWidth: "wide",
    formattingValues: qp,
    defaultFormattingWidth: "wide"
  })
}, Zp = /^(\d+)(º)?/i, Qp = /\d+/i, Jp = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, eg = {
  any: [/^a/i, /^(d|e)/i]
}, tg = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, ng = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rg = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, og = {
  narrow: [
    /^g/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^g/i,
    /^l/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ge/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mag/i,
    /^gi/i,
    /^l/i,
    /^ag/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ag = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, sg = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, ig = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, cg = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mezza/i,
    noon: /^mezzo/i,
    morning: /mattina/i,
    afternoon: /pomeriggio/i,
    evening: /sera/i,
    night: /notte/i
  }
}, lg = {
  ordinalNumber: Js({
    matchPattern: Zp,
    parsePattern: Qp,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Le({
    matchPatterns: Jp,
    defaultMatchWidth: "wide",
    parsePatterns: eg,
    defaultParseWidth: "any"
  }),
  quarter: Le({
    matchPatterns: tg,
    defaultMatchWidth: "wide",
    parsePatterns: ng,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Le({
    matchPatterns: rg,
    defaultMatchWidth: "wide",
    parsePatterns: og,
    defaultParseWidth: "any"
  }),
  day: Le({
    matchPatterns: ag,
    defaultMatchWidth: "wide",
    parsePatterns: sg,
    defaultParseWidth: "any"
  }),
  dayPeriod: Le({
    matchPatterns: ig,
    defaultMatchWidth: "any",
    parsePatterns: cg,
    defaultParseWidth: "any"
  })
}, dg = {
  code: "it",
  formatDistance: Ip,
  formatLong: zp,
  formatRelative: Yp,
  localize: Kp,
  match: lg,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, ri = {
  ...Wt,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => Xe(s, i, { locale: Wt, ...n });
      let a = o(e, "PPPP");
      return t.today && (a = `Today, ${a}`), t.selected && (a = `${a}, selected`), a;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => Xe(o, a, { locale: Wt, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => Xe(s, i, { locale: Wt, ...n });
      let a = o(e, "PPPP");
      return t != null && t.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => Xe(o, a, { locale: Wt, ...t }), r(e, "cccc");
    }
  }
};
class Pe {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => {
      var r;
      return (r = this.overrides) != null && r.today ? this.overrides.today() : this.options.timeZone ? ve.tz(this.options.timeZone) : new this.Date();
    }, this.newDate = (r, o, a) => {
      var s;
      return (s = this.overrides) != null && s.newDate ? this.overrides.newDate(r, o, a) : this.options.timeZone ? new ve(r, o, a, this.options.timeZone) : new Date(r, o, a);
    }, this.addDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : js(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : Us(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : ph(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : gh(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : ro(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Xs(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Sh(r);
    }, this.eachYearOfInterval = (r) => {
      var i;
      const o = (i = this.overrides) != null && i.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Nh(r), a = new Set(o.map((c) => this.getYear(c)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((c) => {
        s.push(new Date(c, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Rp(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Mh(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : xh(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : Qs(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : kh(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : Xe(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : oo(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : Sp(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : Cp(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : ao(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : kp(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : Np(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : qs(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : vh(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : Mp(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : Pp(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : bh(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : yh(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : Ep(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : Op(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : ni(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : Jt(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : Qt(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Ch(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : ut(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : Zs(r);
    }, this.options = { locale: ri, ...t }, this.overrides = n;
  }
  /**
   * Generates a mapping of Arabic digits (0-9) to the target numbering system
   * digits.
   *
   * @since 9.5.0
   * @returns A record mapping Arabic digits to the target numerals.
   */
  getDigitMap() {
    const { numerals: t = "latn" } = this.options, n = new Intl.NumberFormat("en-US", {
      numberingSystem: t
    }), r = {};
    for (let o = 0; o < 10; o++)
      r[o.toString()] = n.format(o);
    return r;
  }
  /**
   * Replaces Arabic digits in a string with the target numbering system digits.
   *
   * @since 9.5.0
   * @param input The string containing Arabic digits.
   * @returns The string with digits replaced.
   */
  replaceDigits(t) {
    const n = this.getDigitMap();
    return t.replace(/\d/g, (r) => n[r] || r);
  }
  /**
   * Formats a number using the configured numbering system.
   *
   * @since 9.5.0
   * @param value The number to format.
   * @returns The formatted number as a string.
   */
  formatNumber(t) {
    return this.replaceDigits(t.toString());
  }
  /**
   * Returns the preferred ordering for month and year labels for the current
   * locale.
   */
  getMonthYearOrder() {
    var n;
    const t = (n = this.options.locale) == null ? void 0 : n.code;
    return t && Pe.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && Pe.yearFirstLocales.has(a))
      try {
        return new Intl.DateTimeFormat(a, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const s = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, s);
  }
}
Pe.yearFirstLocales = /* @__PURE__ */ new Set([
  "eu",
  "hu",
  "ja",
  "ja-Hira",
  "ja-JP",
  "ko",
  "ko-KR",
  "lt",
  "lt-LT",
  "lv",
  "lv-LV",
  "mn",
  "mn-MN",
  "zh",
  "zh-CN",
  "zh-HK",
  "zh-TW"
]);
const Ue = new Pe();
class oi {
  constructor(t, n, r = Ue) {
    this.date = t, this.displayMonth = n, this.outside = !!(n && !r.isSameMonth(t, n)), this.dateLib = r, this.isoDate = r.format(t, "yyyy-MM-dd"), this.displayMonthId = r.format(n, "yyyy-MM"), this.dateMonthId = r.format(t, "yyyy-MM");
  }
  /**
   * Checks if this day is equal to another `CalendarDay`, considering both the
   * date and the displayed month.
   *
   * @param day The `CalendarDay` to compare with.
   * @returns `true` if the days are equal, otherwise `false`.
   */
  isEqualTo(t) {
    return this.dateLib.isSameDay(t.date, this.date) && this.dateLib.isSameMonth(t.displayMonth, this.displayMonth);
  }
}
class ug {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class fg {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function mg(e) {
  return D.createElement("button", { ...e });
}
function hg(e) {
  return D.createElement("span", { ...e });
}
function pg(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    D.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && D.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && D.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && D.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && D.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function gg(e) {
  const { day: t, modifiers: n, ...r } = e;
  return D.createElement("td", { ...r });
}
function bg(e) {
  const { day: t, modifiers: n, ...r } = e, o = D.useRef(null);
  return D.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), D.createElement("button", { ref: o, ...r });
}
var F;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(F || (F = {}));
var ue;
(function(e) {
  e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(ue || (ue = {}));
var Ae;
(function(e) {
  e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Ae || (Ae = {}));
var ke;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(ke || (ke = {}));
function yg(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[F.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: c }) => c === a.value);
  return D.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[F.DropdownRoot] },
    D.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: u }) => D.createElement(r.Option, { key: c, value: c, disabled: u }, l))),
    D.createElement(
      "span",
      { className: o[F.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      D.createElement(r.Chevron, { orientation: "down", size: 18, className: o[F.Chevron] })
    )
  );
}
function vg(e) {
  return D.createElement("div", { ...e });
}
function wg(e) {
  return D.createElement("div", { ...e });
}
function xg(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return D.createElement("div", { ...r }, e.children);
}
function Sg(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return D.createElement("div", { ...r });
}
function Cg(e) {
  return D.createElement("table", { ...e });
}
function kg(e) {
  return D.createElement("div", { ...e });
}
const ai = Ma(void 0);
function an() {
  const e = Pa(ai);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Ng(e) {
  const { components: t } = an();
  return D.createElement(t.Dropdown, { ...e });
}
function Mg(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: l } } = an(), u = Ce((h) => {
    o && (n == null || n(h));
  }, [o, n]), f = Ce((h) => {
    r && (t == null || t(h));
  }, [r, t]);
  return D.createElement(
    "nav",
    { ...a },
    D.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[F.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: f },
      D.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[F.Chevron], orientation: "left" })
    ),
    D.createElement(
      s.NextMonthButton,
      { type: "button", className: i[F.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: u },
      D.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[F.Chevron] })
    )
  );
}
function Pg(e) {
  const { components: t } = an();
  return D.createElement(t.Button, { ...e });
}
function Eg(e) {
  return D.createElement("option", { ...e });
}
function Og(e) {
  const { components: t } = an();
  return D.createElement(t.Button, { ...e });
}
function Dg(e) {
  const { rootRef: t, ...n } = e;
  return D.createElement("div", { ...n, ref: t });
}
function Tg(e) {
  return D.createElement("select", { ...e });
}
function Rg(e) {
  const { week: t, ...n } = e;
  return D.createElement("tr", { ...n });
}
function Ag(e) {
  return D.createElement("th", { ...e });
}
function Ig(e) {
  return D.createElement(
    "thead",
    { "aria-hidden": !0 },
    D.createElement("tr", { ...e })
  );
}
function _g(e) {
  const { week: t, ...n } = e;
  return D.createElement("th", { ...n });
}
function Wg(e) {
  return D.createElement("th", { ...e });
}
function Fg(e) {
  return D.createElement("tbody", { ...e });
}
function zg(e) {
  const { components: t } = an();
  return D.createElement(t.Dropdown, { ...e });
}
const $g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: mg,
  CaptionLabel: hg,
  Chevron: pg,
  Day: gg,
  DayButton: bg,
  Dropdown: yg,
  DropdownNav: vg,
  Footer: wg,
  Month: xg,
  MonthCaption: Sg,
  MonthGrid: Cg,
  Months: kg,
  MonthsDropdown: Ng,
  Nav: Mg,
  NextMonthButton: Pg,
  Option: Eg,
  PreviousMonthButton: Og,
  Root: Dg,
  Select: Tg,
  Week: Rg,
  WeekNumber: _g,
  WeekNumberHeader: Wg,
  Weekday: Ag,
  Weekdays: Ig,
  Weeks: Fg,
  YearsDropdown: zg
}, Symbol.toStringTag, { value: "Module" }));
function Ke(e, t, n = !1, r = Ue) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function io(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function qn(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function co(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function lo(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function si(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function ii(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Ze(e, t, n = Ue) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (ii(i, n))
      return i.some((c) => o(e, c));
    if (qn(i))
      return Ke(i, e, !1, n);
    if (si(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (io(i)) {
      const c = a(i.before, e), l = a(i.after, e), u = c > 0, f = l < 0;
      return s(i.before, i.after) ? f && u : u || f;
    }
    return co(i) ? a(e, i.after) > 0 : lo(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function Bg(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: u = o.today() } = t, { isSameDay: f, isSameMonth: h, startOfMonth: p, isBefore: x, endOfMonth: g, isAfter: b } = o, S = n && p(n), y = r && g(r), v = {
    [ue.focused]: [],
    [ue.outside]: [],
    [ue.disabled]: [],
    [ue.hidden]: [],
    [ue.today]: []
  }, C = {};
  for (const k of e) {
    const { date: w, displayMonth: M } = k, N = !!(M && !h(w, M)), P = !!(S && x(w, S)), R = !!(y && b(w, y)), W = !!(a && Ze(w, a, o)), H = !!(s && Ze(w, s, o)) || P || R || // Broadcast calendar will show outside days as default
    !l && !c && N || l && c === !1 && N, V = f(w, u);
    N && v.outside.push(k), W && v.disabled.push(k), H && v.hidden.push(k), V && v.today.push(k), i && Object.keys(i).forEach((B) => {
      const q = i == null ? void 0 : i[B];
      q && Ze(w, q, o) && (C[B] ? C[B].push(k) : C[B] = [k]);
    });
  }
  return (k) => {
    const w = {
      [ue.focused]: !1,
      [ue.disabled]: !1,
      [ue.hidden]: !1,
      [ue.outside]: !1,
      [ue.today]: !1
    }, M = {};
    for (const N in v) {
      const P = v[N];
      w[N] = P.some((R) => R === k);
    }
    for (const N in C)
      M[N] = C[N].some((P) => P === k);
    return {
      ...w,
      // custom modifiers should override all the previous ones
      ...M
    };
  };
}
function Lg(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ue[a]] ? o.push(t[ue[a]]) : t[Ae[a]] && o.push(t[Ae[a]]), o), [t[F.Day]]);
}
function Yg(e) {
  return {
    ...$g,
    ...e
  };
}
function Hg(e) {
  const t = {
    "data-mode": e.mode ?? void 0,
    "data-required": "required" in e ? e.required : void 0,
    "data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
    "data-week-numbers": e.showWeekNumber || void 0,
    "data-broadcast-calendar": e.broadcastCalendar || void 0,
    "data-nav-layout": e.navLayout || void 0
  };
  return Object.entries(e).forEach(([n, r]) => {
    n.startsWith("data-") && (t[n] = r);
  }), t;
}
function Vg() {
  const e = {};
  for (const t in F)
    e[F[t]] = `rdp-${F[t]}`;
  for (const t in ue)
    e[ue[t]] = `rdp-${ue[t]}`;
  for (const t in Ae)
    e[Ae[t]] = `rdp-${Ae[t]}`;
  for (const t in ke)
    e[ke[t]] = `rdp-${ke[t]}`;
  return e;
}
function ci(e, t, n) {
  return (n ?? new Pe(t)).formatMonthYear(e);
}
const jg = ci;
function Ug(e, t, n) {
  return (n ?? new Pe(t)).format(e, "d");
}
function Gg(e, t = Ue) {
  return t.format(e, "LLLL");
}
function qg(e, t, n) {
  return (n ?? new Pe(t)).format(e, "cccccc");
}
function Xg(e, t = Ue) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Kg() {
  return "";
}
function li(e, t = Ue) {
  return t.format(e, "yyyy");
}
const Zg = li, Qg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: ci,
  formatDay: Ug,
  formatMonthCaption: jg,
  formatMonthDropdown: Gg,
  formatWeekNumber: Xg,
  formatWeekNumberHeader: Kg,
  formatWeekdayName: qg,
  formatYearCaption: Zg,
  formatYearDropdown: li
}, Symbol.toStringTag, { value: "Module" }));
function Jg(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Qg,
    ...e
  };
}
function uo(e, t, n, r) {
  let o = (r ?? new Pe(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const eb = uo;
function fo(e, t, n) {
  return (n ?? new Pe(t)).formatMonthYear(e);
}
const tb = fo;
function di(e, t, n, r) {
  let o = (r ?? new Pe(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function ui(e) {
  return "Choose the Month";
}
function fi() {
  return "";
}
const nb = "Go to the Next Month";
function mi(e, t) {
  return nb;
}
function hi(e) {
  return "Go to the Previous Month";
}
function pi(e, t, n) {
  return (n ?? new Pe(t)).format(e, "cccc");
}
function gi(e, t) {
  return `Week ${e}`;
}
function bi(e) {
  return "Week Number";
}
function yi(e) {
  return "Choose the Year";
}
const rb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: tb,
  labelDay: eb,
  labelDayButton: uo,
  labelGrid: fo,
  labelGridcell: di,
  labelMonthDropdown: ui,
  labelNav: fi,
  labelNext: mi,
  labelPrevious: hi,
  labelWeekNumber: gi,
  labelWeekNumberHeader: bi,
  labelWeekday: pi,
  labelYearDropdown: yi
}, Symbol.toStringTag, { value: "Module" })), Te = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function ob(e, t) {
  var r;
  const n = ((r = t.locale) == null ? void 0 : r.labels) ?? {};
  return {
    ...rb,
    ...e ?? {},
    labelDayButton: Te(uo, e == null ? void 0 : e.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Te(ui, e == null ? void 0 : e.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Te(mi, e == null ? void 0 : e.labelNext, n.labelNext),
    labelPrevious: Te(hi, e == null ? void 0 : e.labelPrevious, n.labelPrevious),
    labelWeekNumber: Te(gi, e == null ? void 0 : e.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Te(yi, e == null ? void 0 : e.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Te(fo, e == null ? void 0 : e.labelGrid, n.labelGrid),
    labelGridcell: Te(di, e == null ? void 0 : e.labelGridcell, n.labelGridcell),
    labelNav: Te(fi, e == null ? void 0 : e.labelNav, n.labelNav),
    labelWeekNumberHeader: Te(bi, e == null ? void 0 : e.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Te(pi, e == null ? void 0 : e.labelWeekday, n.labelWeekday)
  };
}
function ab(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), x = l(h), g = t && h < a(t) || n && h > a(n) || !1;
    return { value: x, label: p, disabled: g };
  });
}
function sb(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[F.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function ib(e, t, n, r) {
  const o = r ?? e.today(), a = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), s = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(a, i);
    s.push(c);
  }
  return s;
}
function cb(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, eachYearOfInterval: i, getYear: c } = r, l = a(e), u = s(t), f = i({ start: l, end: u });
  return o && f.reverse(), f.map((h) => {
    const p = n.formatYearDropdown(h, r);
    return {
      value: c(h),
      label: p,
      disabled: !1
    };
  });
}
function lb(e, t = {}) {
  var i;
  const { weekStartsOn: n, locale: r } = t, o = n ?? ((i = r == null ? void 0 : r.options) == null ? void 0 : i.weekStartsOn) ?? 0, a = (c) => {
    const l = typeof c == "number" || typeof c == "string" ? new Date(c) : c;
    return new ve(l.getFullYear(), l.getMonth(), l.getDate(), 12, 0, 0, e);
  }, s = (c) => {
    const l = a(c);
    return new Date(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => a(ve.tz(e)),
    newDate: (c, l, u) => new ve(c, l, u, 12, 0, 0, e),
    startOfDay: (c) => a(c),
    startOfWeek: (c, l) => {
      const u = a(c), f = (l == null ? void 0 : l.weekStartsOn) ?? o, h = (u.getDay() - f + 7) % 7;
      return u.setDate(u.getDate() - h), u;
    },
    startOfISOWeek: (c) => {
      const l = a(c), u = (l.getDay() - 1 + 7) % 7;
      return l.setDate(l.getDate() - u), l;
    },
    startOfMonth: (c) => {
      const l = a(c);
      return l.setDate(1), l;
    },
    startOfYear: (c) => {
      const l = a(c);
      return l.setMonth(0, 1), l;
    },
    endOfWeek: (c, l) => {
      const u = a(c), p = ((((l == null ? void 0 : l.weekStartsOn) ?? o) + 6) % 7 - u.getDay() + 7) % 7;
      return u.setDate(u.getDate() + p), u;
    },
    endOfISOWeek: (c) => {
      const l = a(c), u = (7 - l.getDay()) % 7;
      return l.setDate(l.getDate() + u), l;
    },
    endOfMonth: (c) => {
      const l = a(c);
      return l.setMonth(l.getMonth() + 1, 0), l;
    },
    endOfYear: (c) => {
      const l = a(c);
      return l.setMonth(11, 31), l;
    },
    eachMonthOfInterval: (c) => {
      const l = a(c.start), u = a(c.end), f = [], h = new ve(l.getFullYear(), l.getMonth(), 1, 12, 0, 0, e), p = u.getFullYear() * 12 + u.getMonth();
      for (; h.getFullYear() * 12 + h.getMonth() <= p; )
        f.push(new ve(h, e)), h.setMonth(h.getMonth() + 1, 1);
      return f;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (c, l) => {
      const u = a(c);
      return u.setDate(u.getDate() + l), u;
    },
    addWeeks: (c, l) => {
      const u = a(c);
      return u.setDate(u.getDate() + l * 7), u;
    },
    addMonths: (c, l) => {
      const u = a(c);
      return u.setMonth(u.getMonth() + l), u;
    },
    addYears: (c, l) => {
      const u = a(c);
      return u.setFullYear(u.getFullYear() + l), u;
    },
    eachYearOfInterval: (c) => {
      const l = a(c.start), u = a(c.end), f = [], h = new ve(l.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; h.getFullYear() <= u.getFullYear(); )
        f.push(new ve(h, e)), h.setFullYear(h.getFullYear() + 1, 0, 1);
      return f;
    },
    getWeek: (c, l) => {
      var f;
      const u = s(c);
      return ao(u, {
        weekStartsOn: (l == null ? void 0 : l.weekStartsOn) ?? o,
        firstWeekContainsDate: (l == null ? void 0 : l.firstWeekContainsDate) ?? ((f = r == null ? void 0 : r.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1
      });
    },
    getISOWeek: (c) => {
      const l = s(c);
      return oo(l);
    },
    differenceInCalendarDays: (c, l) => {
      const u = s(c), f = s(l);
      return ro(u, f);
    },
    differenceInCalendarMonths: (c, l) => {
      const u = s(c), f = s(l);
      return Xs(u, f);
    }
  };
}
const sn = (e) => e instanceof HTMLElement ? e : null, xr = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], db = (e) => sn(e.querySelector("[data-animated-month]")), Sr = (e) => sn(e.querySelector("[data-animated-caption]")), Cr = (e) => sn(e.querySelector("[data-animated-weeks]")), ub = (e) => sn(e.querySelector("[data-animated-nav]")), fb = (e) => sn(e.querySelector("[data-animated-weekdays]"));
function mb(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Kt(null), i = Kt(r), c = Kt(!1);
  Na(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const u = a.isSameMonth(r[0].date, l[0].date), f = a.isAfter(r[0].date, l[0].date), h = f ? n[ke.caption_after_enter] : n[ke.caption_before_enter], p = f ? n[ke.weeks_after_enter] : n[ke.weeks_before_enter], x = s.current, g = e.current.cloneNode(!0);
    if (g instanceof HTMLElement ? (xr(g).forEach((v) => {
      if (!(v instanceof HTMLElement))
        return;
      const C = db(v);
      C && v.contains(C) && v.removeChild(C);
      const k = Sr(v);
      k && k.classList.remove(h);
      const w = Cr(v);
      w && w.classList.remove(p);
    }), s.current = g) : s.current = null, c.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = x instanceof HTMLElement ? xr(x) : [], S = xr(e.current);
    if (S != null && S.every((y) => y instanceof HTMLElement) && b && b.every((y) => y instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const y = ub(e.current);
      y && (y.style.zIndex = "1"), S.forEach((v, C) => {
        const k = b[C];
        if (!k)
          return;
        v.style.position = "relative", v.style.overflow = "hidden";
        const w = Sr(v);
        w && w.classList.add(h);
        const M = Cr(v);
        M && M.classList.add(p);
        const N = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), y && (y.style.zIndex = ""), w && w.classList.remove(h), M && M.classList.remove(p), v.style.position = "", v.style.overflow = "", v.contains(k) && v.removeChild(k);
        };
        k.style.pointerEvents = "none", k.style.position = "absolute", k.style.overflow = "hidden", k.setAttribute("aria-hidden", "true");
        const P = fb(k);
        P && (P.style.opacity = "0");
        const R = Sr(k);
        R && (R.classList.add(f ? n[ke.caption_before_exit] : n[ke.caption_after_exit]), R.addEventListener("animationend", N));
        const W = Cr(k);
        W && W.classList.add(f ? n[ke.weeks_before_exit] : n[ke.weeks_after_exit]), v.insertBefore(k, v.firstChild);
      });
    }
  });
}
function hb(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: f, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: x, endOfWeek: g, isAfter: b, startOfBroadcastWeek: S, startOfISOWeek: y, startOfWeek: v } = r, C = c ? S(o, r) : s ? y(o) : v(o), k = c ? h(a) : s ? p(x(a)) : g(x(a)), w = t && (c ? h(t) : s ? p(t) : g(t)), M = w && b(k, w) ? w : k, N = u(M, C), P = f(a, o) + 1, R = [];
  for (let V = 0; V <= N; V++) {
    const B = l(C, V);
    R.push(B);
  }
  const H = (c ? 35 : 42) * P;
  if (i && R.length < H) {
    const V = H - R.length;
    for (let B = 0; B < V; B++) {
      const q = l(R[R.length - 1], 1);
      R.push(q);
    }
  }
  return R;
}
function pb(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function gb(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function ba(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || a || s;
  const { differenceInCalendarMonths: l, addMonths: u, startOfMonth: f } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = u(n, h);
  }
  return t && l(c, t) < 0 && (c = t), f(c);
}
function bb(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: f, startOfISOWeek: h, startOfWeek: p } = r, x = e.reduce((g, b) => {
    const S = n.broadcastCalendar ? f(b, r) : n.ISOWeek ? h(b) : p(b), y = n.broadcastCalendar ? a(b) : n.ISOWeek ? s(i(b)) : c(i(b)), v = t.filter((M) => M >= S && M <= y), C = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && v.length < C) {
      const M = t.filter((N) => {
        const P = C - v.length;
        return N > y && N <= o(y, P);
      });
      v.push(...M);
    }
    const k = v.reduce((M, N) => {
      const P = n.ISOWeek ? l(N) : u(N), R = M.find((H) => H.weekNumber === P), W = new oi(N, b, r);
      return R ? R.days.push(W) : M.push(new fg(P, [W])), M;
    }, []), w = new ug(b, k);
    return g.push(w), g;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function yb(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: l, newDate: u, today: f } = t, { fromYear: h, toYear: p, fromMonth: x, toMonth: g } = e;
  !n && x && (n = x), !n && h && (n = t.newDate(h, 0, 1)), !r && g && (r = g), !r && p && (r = u(p, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : h ? n = u(h, 0, 1) : !n && b && (n = o(c(e.today ?? f(), -100))), r ? r = i(r) : p ? r = u(p, 11, 31) : !r && b && (r = l(e.today ?? f())), [
    n && a(n),
    r && a(r)
  ];
}
function vb(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a : 1, u = s(e);
  if (!t)
    return i(u, l);
  if (!(c(t, e) < a))
    return i(u, l);
}
function wb(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, u = s(e);
  if (!t)
    return i(u, -l);
  if (!(c(u, t) <= 0))
    return i(u, -l);
}
function xb(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Xn(e, t) {
  const [n, r] = ct(e);
  return [t === void 0 ? n : t, r];
}
function Sb(e, t) {
  var C;
  const [n, r] = yb(e, t), { startOfMonth: o, endOfMonth: a } = t, s = ba(e, n, r, t), [i, c] = Xn(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  xn(() => {
    const k = ba(e, n, r, t);
    c(k);
  }, [e.timeZone]);
  const { months: l, weeks: u, days: f, previousMonth: h, nextMonth: p } = bn(() => {
    const k = gb(i, r, { numberOfMonths: e.numberOfMonths }, t), w = hb(k, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), M = bb(k, w, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), N = xb(M), P = pb(M), R = wb(i, n, e, t), W = vb(i, r, e, t);
    return {
      months: M,
      weeks: N,
      days: P,
      previousMonth: R,
      nextMonth: W
    };
  }, [
    t,
    i.getTime(),
    r == null ? void 0 : r.getTime(),
    n == null ? void 0 : n.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    (C = e.endMonth) == null ? void 0 : C.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: x, onMonthChange: g } = e, b = (k) => u.some((w) => w.days.some((M) => M.isEqualTo(k))), S = (k) => {
    if (x)
      return;
    let w = o(k);
    n && w < o(n) && (w = o(n)), r && w > o(r) && (w = o(r)), c(w), g == null || g(w);
  };
  return {
    months: l,
    weeks: u,
    days: f,
    navStart: n,
    navEnd: r,
    previousMonth: h,
    nextMonth: p,
    goToMonth: S,
    goToDay: (k) => {
      b(k) || S(k.date);
    }
  };
}
var ze;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(ze || (ze = {}));
function ya(e) {
  return !e[ue.disabled] && !e[ue.hidden] && !e[ue.outside];
}
function Cb(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    ya(i) && (i[ue.focused] && a < ze.FocusedModifier ? (o = s, a = ze.FocusedModifier) : r != null && r.isEqualTo(s) && a < ze.LastFocused ? (o = s, a = ze.LastFocused) : n(s.date) && a < ze.Selected ? (o = s, a = ze.Selected) : i[ue.today] && a < ze.Today && (o = s, a = ze.Today));
  }
  return o || (o = e.find((s) => ya(t(s)))), o;
}
function kb(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: f, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: x, endOfWeek: g, max: b, min: S, startOfBroadcastWeek: y, startOfISOWeek: v, startOfWeek: C } = s;
  let w = {
    day: l,
    week: f,
    month: u,
    year: h,
    startOfWeek: (M) => c ? y(M, s) : i ? v(M) : C(M),
    endOfWeek: (M) => c ? p(M) : i ? x(M) : g(M)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? w = b([r, w]) : t === "after" && o && (w = S([o, w])), w;
}
function vi(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = kb(e, t, n.date, r, o, a, s), l = !!(a.disabled && Ze(c, a.disabled, s)), u = !!(a.hidden && Ze(c, a.hidden, s)), f = c, h = new oi(c, f, s);
  return !l && !u ? h : vi(e, t, h, r, o, a, s, i + 1);
}
function Nb(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = ct(), c = Cb(t.days, n, r || (() => !1), s), [l, u] = ct(a ? c : void 0);
  return {
    isFocusTarget: (g) => !!(c != null && c.isEqualTo(g)),
    setFocused: u,
    focused: l,
    blur: () => {
      i(l), u(void 0);
    },
    moveFocus: (g, b) => {
      if (!l)
        return;
      const S = vi(g, b, l, t.navStart, t.navEnd, e, o);
      S && (e.disableNavigation && !t.days.some((v) => v.isEqualTo(S)) || (t.goToDay(S), u(S)));
    }
  };
}
function Mb(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Xn(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((x) => c(x, p))) ?? !1, { min: u, max: f } = e;
  return {
    selected: i,
    select: (p, x, g) => {
      let b = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === u || r && (i == null ? void 0 : i.length) === 1)
          return;
        b = i == null ? void 0 : i.filter((S) => !c(S, p));
      } else
        (i == null ? void 0 : i.length) === f ? b = [p] : b = [...b, p];
      return o || s(b), o == null || o(b, p, x, g), b;
    },
    isSelected: l
  };
}
function Pb(e, t, n = 0, r = 0, o = !1, a = Ue) {
  const { from: s, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a;
  let f;
  if (!s && !i)
    f = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !i)
    c(s, e) ? n === 0 ? f = { from: s, to: e } : o ? f = { from: s, to: void 0 } : f = void 0 : u(e, s) ? f = { from: e, to: s } : f = { from: s, to: e };
  else if (s && i)
    if (c(s, e) && c(i, e))
      o ? f = { from: s, to: i } : f = void 0;
    else if (c(s, e))
      f = { from: s, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      f = { from: e, to: n > 0 ? void 0 : e };
    else if (u(e, s))
      f = { from: e, to: i };
    else if (l(e, s))
      f = { from: s, to: e };
    else if (l(e, i))
      f = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (f != null && f.from && (f != null && f.to)) {
    const h = a.differenceInCalendarDays(f.to, f.from);
    r > 0 && h > r ? f = { from: e, to: void 0 } : n > 1 && h < n && (f = { from: e, to: void 0 });
  }
  return f;
}
function Eb(e, t, n = Ue) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const a = n.differenceInCalendarDays(e.to, e.from), s = Math.min(a, 6);
  for (let i = 0; i <= s; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function va(e, t, n = Ue) {
  return Ke(e, t.from, !1, n) || Ke(e, t.to, !1, n) || Ke(t, e.from, !1, n) || Ke(t, e.to, !1, n);
}
function Ob(e, t, n = Ue) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Ke(e, i, !1, n) : ii(i, n) ? i.some((c) => Ke(e, c, !1, n)) : qn(i) ? i.from && i.to ? va(e, { from: i.from, to: i.to }, n) : !1 : si(i) ? Eb(e, i.dayOfWeek, n) : io(i) ? n.isAfter(i.before, i.after) ? va(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Ze(e.from, i, n) || Ze(e.to, i, n) : co(i) || lo(i) ? Ze(e.from, i, n) || Ze(e.to, i, n) : !1))
    return !0;
  const s = r.filter((i) => typeof i == "function");
  if (s.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (s.some((u) => u(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function Db(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: a, required: s, onSelect: i } = e, [c, l] = Xn(a, i ? a : void 0), u = i ? a : c;
  return {
    selected: u,
    select: (p, x, g) => {
      const { min: b, max: S } = e;
      let y;
      if (p) {
        const v = u == null ? void 0 : u.from, C = u == null ? void 0 : u.to, k = !!v && !!C, w = !!v && !!C && t.isSameDay(v, C) && t.isSameDay(p, v);
        o && (k || !(u != null && u.from)) ? !s && w ? y = void 0 : y = { from: p, to: void 0 } : y = Pb(p, u, b, S, s, t);
      }
      return r && n && (y != null && y.from) && y.to && Ob({ from: y.from, to: y.to }, n, t) && (y.from = p, y.to = void 0), i || l(y), i == null || i(y, p, x, g), y;
    },
    isSelected: (p) => u && Ke(u, p, !1, t)
  };
}
function Tb(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Xn(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (f, h, p) => {
      let x = f;
      return !r && i && i && c(f, i) && (x = void 0), o || s(x), o == null || o(x, f, h, p), x;
    },
    isSelected: (f) => i ? c(i, f) : !1
  };
}
function Rb(e, t) {
  const n = Tb(e, t), r = Mb(e, t), o = Db(e, t);
  switch (e.mode) {
    case "single":
      return n;
    case "multiple":
      return r;
    case "range":
      return o;
    default:
      return;
  }
}
function Oe(e, t) {
  return e instanceof ve && e.timeZone === t ? e : new ve(e, t);
}
function _t(e, t, n) {
  return Oe(e, t);
}
function wa(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? _t(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? _t(r, t) : r) : qn(e) ? {
    ...e,
    from: e.from ? Oe(e.from, t) : e.from,
    to: e.to ? Oe(e.to, t) : e.to
  } : io(e) ? {
    before: _t(e.before, t),
    after: _t(e.after, t)
  } : co(e) ? {
    after: _t(e.after, t)
  } : lo(e) ? {
    before: _t(e.before, t)
  } : e;
}
function kr(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => wa(r, t)) : wa(e, t));
}
function Ab(e) {
  var No;
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Oe(t.today, n)), t.month && (t.month = Oe(t.month, n)), t.defaultMonth && (t.defaultMonth = Oe(t.defaultMonth, n)), t.startMonth && (t.startMonth = Oe(t.startMonth, n)), t.endMonth && (t.endMonth = Oe(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Oe(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = (No = t.selected) == null ? void 0 : No.map((G) => Oe(G, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Oe(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Oe(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = kr(t.disabled, n)), t.hidden !== void 0 && (t.hidden = kr(t.hidden, n)), t.modifiers)) {
    const G = {};
    Object.keys(t.modifiers).forEach((oe) => {
      var L;
      G[oe] = kr((L = t.modifiers) == null ? void 0 : L[oe], n);
    }), t.modifiers = G;
  }
  const { components: r, formatters: o, labels: a, dateLib: s, locale: i, classNames: c } = bn(() => {
    const G = { ...ri, ...t.locale }, oe = t.broadcastCalendar ? 1 : t.weekStartsOn, L = t.noonSafe && t.timeZone ? lb(t.timeZone, {
      weekStartsOn: oe,
      locale: G
    }) : void 0, ne = t.dateLib && L ? { ...L, ...t.dateLib } : t.dateLib ?? L, Se = new Pe({
      locale: G,
      weekStartsOn: oe,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, ne);
    return {
      dateLib: Se,
      components: Yg(t.components),
      formatters: Jg(t.formatters),
      labels: ob(t.labels, Se.options),
      locale: G,
      classNames: { ...Vg(), ...t.classNames }
    };
  }, [
    t.locale,
    t.broadcastCalendar,
    t.weekStartsOn,
    t.firstWeekContainsDate,
    t.useAdditionalWeekYearTokens,
    t.useAdditionalDayOfYearTokens,
    t.timeZone,
    t.numerals,
    t.dateLib,
    t.noonSafe,
    t.components,
    t.formatters,
    t.labels,
    t.classNames
  ]);
  t.today || (t = { ...t, today: s.today() });
  const { captionLayout: l, mode: u, navLayout: f, numberOfMonths: h = 1, onDayBlur: p, onDayClick: x, onDayFocus: g, onDayKeyDown: b, onDayMouseEnter: S, onDayMouseLeave: y, onNextClick: v, onPrevClick: C, showWeekNumber: k, styles: w } = t, { formatCaption: M, formatDay: N, formatMonthDropdown: P, formatWeekNumber: R, formatWeekNumberHeader: W, formatWeekdayName: H, formatYearDropdown: V } = o, B = Sb(t, s), { days: q, months: _, navStart: j, navEnd: $, previousMonth: U, nextMonth: O, goToMonth: fe } = B, Ee = Bg(q, t, j, $, s), { isSelected: xe, select: ge, selected: le } = Rb(t, s) ?? {}, { blur: de, focused: z, isFocusTarget: re, moveFocus: Z, setFocused: ee } = Nb(t, B, Ee, xe ?? (() => !1), s), { labelDayButton: Q, labelGridcell: J, labelGrid: he, labelMonthDropdown: be, labelNav: rt, labelPrevious: bt, labelNext: yt, labelWeekday: or, labelWeekNumber: Dt, labelWeekNumberHeader: ll, labelYearDropdown: dl } = a, ul = bn(() => ib(s, t.ISOWeek, t.broadcastCalendar, t.today), [s, t.ISOWeek, t.broadcastCalendar, t.today]), Co = u !== void 0 || x !== void 0, ar = Ce(() => {
    U && (fe(U), C == null || C(U));
  }, [U, fe, C]), sr = Ce(() => {
    O && (fe(O), v == null || v(O));
  }, [fe, O, v]), fl = Ce((G, oe) => (L) => {
    L.preventDefault(), L.stopPropagation(), ee(G), !oe.disabled && (ge == null || ge(G.date, oe, L), x == null || x(G.date, oe, L));
  }, [ge, x, ee]), ml = Ce((G, oe) => (L) => {
    ee(G), g == null || g(G.date, oe, L);
  }, [g, ee]), hl = Ce((G, oe) => (L) => {
    de(), p == null || p(G.date, oe, L);
  }, [de, p]), pl = Ce((G, oe) => (L) => {
    const ne = {
      ArrowLeft: [
        L.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        L.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [L.shiftKey ? "year" : "week", "after"],
      ArrowUp: [L.shiftKey ? "year" : "week", "before"],
      PageUp: [L.shiftKey ? "year" : "month", "before"],
      PageDown: [L.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (ne[L.key]) {
      L.preventDefault(), L.stopPropagation();
      const [Se, te] = ne[L.key];
      Z(Se, te);
    }
    b == null || b(G.date, oe, L);
  }, [Z, b, t.dir]), gl = Ce((G, oe) => (L) => {
    S == null || S(G.date, oe, L);
  }, [S]), bl = Ce((G, oe) => (L) => {
    y == null || y(G.date, oe, L);
  }, [y]), yl = Ce((G) => (oe) => {
    const L = Number(oe.target.value), ne = s.setMonth(s.startOfMonth(G), L);
    fe(ne);
  }, [s, fe]), vl = Ce((G) => (oe) => {
    const L = Number(oe.target.value), ne = s.setYear(s.startOfMonth(G), L);
    fe(ne);
  }, [s, fe]), { className: wl, style: xl } = bn(() => ({
    className: [c[F.Root], t.className].filter(Boolean).join(" "),
    style: { ...w == null ? void 0 : w[F.Root], ...t.style }
  }), [c, t.className, t.style, w]), Sl = Hg(t), ko = Kt(null);
  mb(ko, !!t.animate, {
    classNames: c,
    months: _,
    focused: z,
    dateLib: s
  });
  const Cl = {
    dayPickerProps: t,
    selected: le,
    select: ge,
    isSelected: xe,
    months: _,
    nextMonth: O,
    previousMonth: U,
    goToMonth: fe,
    getModifiers: Ee,
    components: r,
    classNames: c,
    styles: w,
    labels: a,
    formatters: o
  };
  return D.createElement(
    ai.Provider,
    { value: Cl },
    D.createElement(
      r.Root,
      { rootRef: t.animate ? ko : void 0, className: wl, style: xl, dir: t.dir, id: t.id, lang: t.lang ?? i.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Sl },
      D.createElement(
        r.Months,
        { className: c[F.Months], style: w == null ? void 0 : w[F.Months] },
        !t.hideNavigation && !f && D.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[F.Nav], style: w == null ? void 0 : w[F.Nav], "aria-label": rt(), onPreviousClick: ar, onNextClick: sr, previousMonth: U, nextMonth: O }),
        _.map((G, oe) => D.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[F.Month],
            style: w == null ? void 0 : w[F.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: oe,
            displayIndex: oe,
            calendarMonth: G
          },
          f === "around" && !t.hideNavigation && oe === 0 && D.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[F.PreviousMonthButton], tabIndex: U ? void 0 : -1, "aria-disabled": U ? void 0 : !0, "aria-label": bt(U), onClick: ar, "data-animated-button": t.animate ? "true" : void 0 },
            D.createElement(r.Chevron, { disabled: U ? void 0 : !0, className: c[F.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          D.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[F.MonthCaption], style: w == null ? void 0 : w[F.MonthCaption], calendarMonth: G, displayIndex: oe }, l != null && l.startsWith("dropdown") ? D.createElement(
            r.DropdownNav,
            { className: c[F.Dropdowns], style: w == null ? void 0 : w[F.Dropdowns] },
            (() => {
              const L = l === "dropdown" || l === "dropdown-months" ? D.createElement(r.MonthsDropdown, { key: "month", className: c[F.MonthsDropdown], "aria-label": be(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: yl(G.date), options: ab(G.date, j, $, o, s), style: w == null ? void 0 : w[F.Dropdown], value: s.getMonth(G.date) }) : D.createElement("span", { key: "month" }, P(G.date, s)), ne = l === "dropdown" || l === "dropdown-years" ? D.createElement(r.YearsDropdown, { key: "year", className: c[F.YearsDropdown], "aria-label": dl(s.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: vl(G.date), options: cb(j, $, o, s, !!t.reverseYears), style: w == null ? void 0 : w[F.Dropdown], value: s.getYear(G.date) }) : D.createElement("span", { key: "year" }, V(G.date, s));
              return s.getMonthYearOrder() === "year-first" ? [ne, L] : [L, ne];
            })(),
            D.createElement("span", { role: "status", "aria-live": "polite", style: {
              border: 0,
              clip: "rect(0 0 0 0)",
              height: "1px",
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: "1px",
              whiteSpace: "nowrap",
              wordWrap: "normal"
            } }, M(G.date, s.options, s))
          ) : D.createElement(r.CaptionLabel, { className: c[F.CaptionLabel], role: "status", "aria-live": "polite" }, M(G.date, s.options, s))),
          f === "around" && !t.hideNavigation && oe === h - 1 && D.createElement(
            r.NextMonthButton,
            { type: "button", className: c[F.NextMonthButton], tabIndex: O ? void 0 : -1, "aria-disabled": O ? void 0 : !0, "aria-label": yt(O), onClick: sr, "data-animated-button": t.animate ? "true" : void 0 },
            D.createElement(r.Chevron, { disabled: O ? void 0 : !0, className: c[F.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          oe === h - 1 && f === "after" && !t.hideNavigation && D.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[F.Nav], style: w == null ? void 0 : w[F.Nav], "aria-label": rt(), onPreviousClick: ar, onNextClick: sr, previousMonth: U, nextMonth: O }),
          D.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": u === "multiple" || u === "range", "aria-label": he(G.date, s.options, s) || void 0, className: c[F.MonthGrid], style: w == null ? void 0 : w[F.MonthGrid] },
            !t.hideWeekdays && D.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[F.Weekdays], style: w == null ? void 0 : w[F.Weekdays] },
              k && D.createElement(r.WeekNumberHeader, { "aria-label": ll(s.options), className: c[F.WeekNumberHeader], style: w == null ? void 0 : w[F.WeekNumberHeader], scope: "col" }, W()),
              ul.map((L) => D.createElement(r.Weekday, { "aria-label": or(L, s.options, s), className: c[F.Weekday], key: String(L), style: w == null ? void 0 : w[F.Weekday], scope: "col" }, H(L, s.options, s)))
            ),
            D.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[F.Weeks], style: w == null ? void 0 : w[F.Weeks] }, G.weeks.map((L) => D.createElement(
              r.Week,
              { className: c[F.Week], key: L.weekNumber, style: w == null ? void 0 : w[F.Week], week: L },
              k && D.createElement(r.WeekNumber, { week: L, style: w == null ? void 0 : w[F.WeekNumber], "aria-label": Dt(L.weekNumber, {
                locale: i
              }), className: c[F.WeekNumber], scope: "row", role: "rowheader" }, R(L.weekNumber, s)),
              L.days.map((ne) => {
                const { date: Se } = ne, te = Ee(ne);
                if (te[ue.focused] = !te.hidden && !!(z != null && z.isEqualTo(ne)), te[Ae.selected] = (xe == null ? void 0 : xe(Se)) || te.selected, qn(le)) {
                  const { from: ir, to: cr } = le;
                  te[Ae.range_start] = !!(ir && cr && s.isSameDay(Se, ir)), te[Ae.range_end] = !!(ir && cr && s.isSameDay(Se, cr)), te[Ae.range_middle] = Ke(le, Se, !0, s);
                }
                const kl = sb(te, w, t.modifiersStyles), Nl = Lg(te, c, t.modifiersClassNames), Ml = !Co && !te.hidden ? J(Se, te, s.options, s) : void 0;
                return D.createElement(r.Day, { key: `${ne.isoDate}_${ne.displayMonthId}`, day: ne, modifiers: te, className: Nl.join(" "), style: kl, role: "gridcell", "aria-selected": te.selected || void 0, "aria-label": Ml, "data-day": ne.isoDate, "data-month": ne.outside ? ne.dateMonthId : void 0, "data-selected": te.selected || void 0, "data-disabled": te.disabled || void 0, "data-hidden": te.hidden || void 0, "data-outside": ne.outside || void 0, "data-focused": te.focused || void 0, "data-today": te.today || void 0 }, !te.hidden && Co ? D.createElement(r.DayButton, { className: c[F.DayButton], style: w == null ? void 0 : w[F.DayButton], type: "button", day: ne, modifiers: te, disabled: !te.focused && te.disabled || void 0, "aria-disabled": te.focused && te.disabled || void 0, tabIndex: re(ne) ? 0 : -1, "aria-label": Q(Se, te, s.options, s), onClick: fl(ne, te), onBlur: hl(ne, te), onFocus: ml(ne, te), onKeyDown: pl(ne, te), onMouseEnter: gl(ne, te), onMouseLeave: bl(ne, te) }, N(Se, s.options, s)) : !te.hidden && N(ne.date, s.options, s));
              })
            )))
          )
        ))
      ),
      t.footer && D.createElement(r.Footer, { className: c[F.Footer], style: w == null ? void 0 : w[F.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function mo({ className: e, classNames: t, ...n }) {
  return /* @__PURE__ */ m(
    Ab,
    {
      locale: dg,
      className: E("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row gap-2",
        month_caption: "flex justify-center pt-1 relative items-center text-sm font-medium text-text-base",
        nav: "flex items-center gap-1",
        button_previous: "absolute left-1 top-0 inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent text-text-muted hover:bg-subtle hover:text-text-base transition-colors",
        button_next: "absolute right-1 top-0 inline-flex items-center justify-center rounded-md h-7 w-7 bg-transparent text-text-muted hover:bg-subtle hover:text-text-base transition-colors",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "text-text-muted rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-1",
        day: "h-9 w-9 text-center text-sm relative flex items-center justify-center rounded-md transition-colors hover:bg-subtle focus-within:relative focus-within:z-20",
        day_button: "h-9 w-9 rounded-md text-sm font-normal aria-selected:opacity-100 cursor-pointer",
        selected: "bg-databeez-primary text-white hover:bg-databeez-primary hover:text-white focus:bg-databeez-primary focus:text-white rounded-md",
        today: "bg-subtle text-text-base font-semibold",
        outside: "text-text-muted opacity-50",
        disabled: "text-text-muted opacity-50 cursor-not-allowed",
        hidden: "invisible",
        range_middle: "bg-databeez-primary/15 text-text-base rounded-none",
        range_start: "rounded-l-md",
        range_end: "rounded-r-md",
        ...t
      },
      ...n
    }
  );
}
mo.displayName = "Calendar";
function Ib({
  value: e,
  onChange: t,
  placeholder: n = "Seleziona data...",
  label: r,
  error: o,
  helperText: a,
  disabled: s,
  className: i,
  displayFormat: c = "dd/MM/yyyy"
}) {
  const l = d.useId();
  return /* @__PURE__ */ T("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ m("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ T(Un, { children: [
      /* @__PURE__ */ m(Gn, { asChild: !0, children: /* @__PURE__ */ T(
        "button",
        {
          id: l,
          type: "button",
          disabled: s,
          className: E(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !e && "text-text-muted",
            o && "border-red-300 focus:ring-red-500 focus:border-red-500",
            i
          ),
          children: [
            /* @__PURE__ */ m(Oa, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ m("span", { className: "truncate", children: e ? Xe(e, c) : n })
          ]
        }
      ) }),
      /* @__PURE__ */ m(rn, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ m(
        mo,
        {
          mode: "single",
          selected: e,
          onSelect: t,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ m("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ m("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
Ib.displayName = "DatePicker";
function _b({
  value: e,
  onChange: t,
  placeholder: n = "Seleziona intervallo...",
  label: r,
  error: o,
  helperText: a,
  disabled: s,
  className: i,
  displayFormat: c = "dd/MM/yyyy",
  numberOfMonths: l = 2
}) {
  const u = d.useId(), f = d.useMemo(() => e != null && e.from ? e.to ? `${Xe(e.from, c)} — ${Xe(e.to, c)}` : Xe(e.from, c) : null, [e, c]);
  return /* @__PURE__ */ T("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ m("label", { htmlFor: u, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ T(Un, { children: [
      /* @__PURE__ */ m(Gn, { asChild: !0, children: /* @__PURE__ */ T(
        "button",
        {
          id: u,
          type: "button",
          disabled: s,
          className: E(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !f && "text-text-muted",
            o && "border-red-300 focus:ring-red-500 focus:border-red-500",
            i
          ),
          children: [
            /* @__PURE__ */ m(Oa, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ m("span", { className: "truncate", children: f ?? n })
          ]
        }
      ) }),
      /* @__PURE__ */ m(rn, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ m(
        mo,
        {
          mode: "range",
          selected: e,
          onSelect: t,
          numberOfMonths: l,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ m("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ m("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
_b.displayName = "DateRangePicker";
// @__NO_SIDE_EFFECTS__
function Wb(e) {
  const t = /* @__PURE__ */ Fb(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find($b);
    if (c) {
      const l = c.props.children, u = i.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Fb(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = Lb(o), i = Bb(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Et(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var zb = Symbol("radix.slottable");
function $b(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zb;
}
function Bb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const c = a(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Lb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Kn = "Dialog", [wi] = mt(Kn), [Yb, Fe] = wi(Kn), xi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = d.useRef(null), c = d.useRef(null), [l, u] = Lt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Kn
  });
  return /* @__PURE__ */ m(
    Yb,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: Qe(),
      titleId: Qe(),
      descriptionId: Qe(),
      open: l,
      onOpenChange: u,
      onOpenToggle: d.useCallback(() => u((f) => !f), [u]),
      modal: s,
      children: n
    }
  );
};
xi.displayName = Kn;
var Si = "DialogTrigger", Ci = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Si, n), a = ae(t, o.triggerRef);
    return /* @__PURE__ */ m(
      K.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": go(o.open),
        ...r,
        ref: a,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ci.displayName = Si;
var ho = "DialogPortal", [Hb, ki] = wi(ho, {
  forceMount: void 0
}), Ni = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Fe(ho, t);
  return /* @__PURE__ */ m(Hb, { scope: t, forceMount: n, children: d.Children.map(r, (s) => /* @__PURE__ */ m(We, { present: n || a.open, children: /* @__PURE__ */ m(Yn, { asChild: !0, container: o, children: s }) })) });
};
Ni.displayName = ho;
var En = "DialogOverlay", Mi = d.forwardRef(
  (e, t) => {
    const n = ki(En, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Fe(En, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ m(We, { present: r || a.open, children: /* @__PURE__ */ m(jb, { ...o, ref: t }) }) : null;
  }
);
Mi.displayName = En;
var Vb = /* @__PURE__ */ Wb("DialogOverlay.RemoveScroll"), jb = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(En, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ m(Vn, { as: Vb, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ m(
        K.div,
        {
          "data-state": go(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), kt = "DialogContent", Pi = d.forwardRef(
  (e, t) => {
    const n = ki(kt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Fe(kt, e.__scopeDialog);
    return /* @__PURE__ */ m(We, { present: r || a.open, children: a.modal ? /* @__PURE__ */ m(Ub, { ...o, ref: t }) : /* @__PURE__ */ m(Gb, { ...o, ref: t }) });
  }
);
Pi.displayName = kt;
var Ub = d.forwardRef(
  (e, t) => {
    const n = Fe(kt, e.__scopeDialog), r = d.useRef(null), o = ae(t, n.contentRef, r);
    return d.useEffect(() => {
      const a = r.current;
      if (a) return to(a);
    }, []), /* @__PURE__ */ m(
      Ei,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Y(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: Y(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: Y(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Gb = d.forwardRef(
  (e, t) => {
    const n = Fe(kt, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ m(
      Ei,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Ei = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Fe(kt, n), c = d.useRef(null), l = ae(t, c);
    return jr(), /* @__PURE__ */ T(Je, { children: [
      /* @__PURE__ */ m(
        Wn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ m(
            _n,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": go(i.open),
              ...s,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ T(Je, { children: [
        /* @__PURE__ */ m(qb, { titleId: i.titleId }),
        /* @__PURE__ */ m(Kb, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), po = "DialogTitle", Oi = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(po, n);
    return /* @__PURE__ */ m(K.h2, { id: o.titleId, ...r, ref: t });
  }
);
Oi.displayName = po;
var Di = "DialogDescription", Ti = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Di, n);
    return /* @__PURE__ */ m(K.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Ti.displayName = Di;
var Ri = "DialogClose", Ai = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Ri, n);
    return /* @__PURE__ */ m(
      K.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Ai.displayName = Ri;
function go(e) {
  return e ? "open" : "closed";
}
var Ii = "DialogTitleWarning", [uw, _i] = su(Ii, {
  contentName: kt,
  titleName: po,
  docsSlug: "dialog"
}), qb = ({ titleId: e }) => {
  const t = _i(Ii), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Xb = "DialogDescriptionWarning", Kb = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_i(Xb).contentName}}.`;
  return d.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Zb = xi, Qb = Ci, Jb = Ni, Wi = Mi, Fi = Pi, zi = Oi, $i = Ti, Bi = Ai;
const fw = Zb, mw = Qb, ey = Jb, hw = Bi, Li = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Wi,
  {
    ref: n,
    className: E(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Li.displayName = Wi.displayName;
const ty = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ T(ey, { children: [
  /* @__PURE__ */ m(Li, {}),
  /* @__PURE__ */ T(
    Fi,
    {
      ref: r,
      className: E(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ T(Bi, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ m(In, { className: "h-4 w-4" }),
          /* @__PURE__ */ m("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ty.displayName = Fi.displayName;
const ny = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: E(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
ny.displayName = "DialogHeader";
const ry = ({
  className: e,
  ...t
}) => /* @__PURE__ */ m(
  "div",
  {
    className: E(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
ry.displayName = "DialogFooter";
const oy = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  zi,
  {
    ref: n,
    className: E(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
oy.displayName = zi.displayName;
const ay = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  $i,
  {
    ref: n,
    className: E("text-sm text-text-muted", e),
    ...t
  }
));
ay.displayName = $i.displayName;
function pw({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: o,
  ...a
}) {
  return /* @__PURE__ */ T(
    "div",
    {
      className: E(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        o
      ),
      ...a,
      children: [
        e && /* @__PURE__ */ m("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10", children: /* @__PURE__ */ m(e, { className: "h-6 w-6 text-databeez-primary" }) }),
        /* @__PURE__ */ T("div", { className: "space-y-1", children: [
          /* @__PURE__ */ m("p", { className: "font-semibold text-text-base", children: t }),
          n && /* @__PURE__ */ m("p", { className: "text-sm text-text-muted max-w-sm", children: n })
        ] }),
        r && /* @__PURE__ */ m("div", { children: r })
      ]
    }
  );
}
const sy = [
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
].join(" "), iy = d.forwardRef(
  ({ children: e, className: t }, n) => /* @__PURE__ */ m("div", { ref: n, className: E(sy, t), children: e })
);
iy.displayName = "MarkdownContent";
function gw({
  content: e,
  role: t,
  onRegenerate: n,
  onFeedback: r,
  showActions: o,
  children: a,
  className: s
}) {
  const i = t === "user", [c, l] = d.useState(null), u = (f) => {
    const h = c === f ? null : f;
    l(h), r == null || r(h);
  };
  return /* @__PURE__ */ m(
    "div",
    {
      className: E(
        "flex flex-col gap-1",
        i ? "items-end" : "items-start",
        s
      ),
      children: /* @__PURE__ */ T("div", { className: "flex flex-col max-w-[80%]", children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: E(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              i ? "bg-databeez-primary text-white rounded-tr-sm" : "bg-surface border border-border text-text-base rounded-tl-sm"
            ),
            children: i ? /* @__PURE__ */ m("p", { className: "whitespace-pre-wrap", children: e }) : a ?? /* @__PURE__ */ m("p", { className: "whitespace-pre-wrap", children: e })
          }
        ),
        !i && o && /* @__PURE__ */ T("div", { className: "flex items-center gap-1 self-end mt-1", children: [
          /* @__PURE__ */ m(ch, { text: e }),
          n && /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: n,
              "aria-label": "Rigenera risposta",
              className: "inline-flex items-center text-text-muted hover:text-text-base transition-colors",
              children: /* @__PURE__ */ m(Hl, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: () => u("up"),
              "aria-label": "Risposta utile",
              className: E(
                "inline-flex items-center transition-colors",
                c === "up" ? "text-green-600" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ m(Gl, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ m(
            "button",
            {
              type: "button",
              onClick: () => u("down"),
              "aria-label": "Risposta non utile",
              className: E(
                "inline-flex items-center transition-colors",
                c === "down" ? "text-red-500" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ m(Ul, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
}
function bw({
  icon: e,
  iconColor: t = "#f59e0b",
  iconBg: n = "#f59e0b1a",
  title: r,
  description: o,
  action: a,
  horizontal: s = !1,
  className: i,
  ...c
}) {
  return s ? /* @__PURE__ */ m(
    "div",
    {
      className: E(
        "bg-surface rounded-xl shadow-sm border border-border p-6",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        i
      ),
      ...c,
      children: /* @__PURE__ */ T("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            style: { backgroundColor: n },
            children: /* @__PURE__ */ m(e, { className: "h-6 w-6", style: { color: t } })
          }
        ),
        /* @__PURE__ */ T("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ m("h3", { className: "text-base font-semibold text-text-base", children: r }),
          o && /* @__PURE__ */ m("p", { className: "mt-1 text-sm text-text-muted", children: o }),
          a && /* @__PURE__ */ m("div", { className: "mt-3", children: a })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ T(
    "div",
    {
      className: E(
        "bg-surface rounded-xl shadow-sm border border-border p-8 text-center",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        i
      ),
      ...c,
      children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
            style: { backgroundColor: n },
            children: /* @__PURE__ */ m(e, { className: "h-8 w-8", style: { color: t } })
          }
        ),
        /* @__PURE__ */ m("h3", { className: "text-lg font-semibold text-text-base mb-3", children: r }),
        o && /* @__PURE__ */ m("p", { className: "text-text-muted text-sm leading-relaxed", children: o }),
        a && /* @__PURE__ */ m("div", { className: "mt-5", children: a })
      ]
    }
  );
}
const cy = ka(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...a }, s) => {
    const i = Pl(), c = o || i;
    return /* @__PURE__ */ T("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ m("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ m(
        "input",
        {
          id: c,
          className: Lr(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            n && "border-red-300 focus:border-red-500 focus:ring-red-500",
            e
          ),
          ref: s,
          ...a
        }
      ),
      n && /* @__PURE__ */ m("p", { className: "text-sm text-red-600", children: n }),
      r && !n && /* @__PURE__ */ m("p", { className: "text-sm text-text-muted", children: r })
    ] });
  }
);
cy.displayName = "Input";
const ly = d.forwardRef(
  ({
    icon: e,
    label: t,
    error: n,
    helperText: r,
    rightElement: o,
    className: a,
    id: s,
    ...i
  }, c) => {
    const l = d.useId(), u = s ?? l;
    return /* @__PURE__ */ T("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: u,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ T("div", { className: "relative", children: [
        /* @__PURE__ */ m(e, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
        /* @__PURE__ */ m(
          "input",
          {
            ref: c,
            id: u,
            className: E(
              "block w-full rounded-lg border border-border bg-surface py-2.5 pl-10 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              o ? "pr-10" : "pr-4",
              n && "border-red-300 focus:ring-red-500 focus:border-red-500",
              a
            ),
            ...i
          }
        ),
        o && /* @__PURE__ */ m("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: o })
      ] }),
      n && /* @__PURE__ */ m("p", { className: "text-xs text-red-600", children: n }),
      r && !n && /* @__PURE__ */ m("p", { className: "text-xs text-text-muted", children: r })
    ] });
  }
);
ly.displayName = "InputWithIcon";
const dy = {
  GET: "bg-green-100 text-green-800 border-green-200",
  POST: "bg-blue-100 text-blue-800 border-blue-200",
  PUT: "bg-amber-100 text-amber-800 border-amber-200",
  PATCH: "bg-purple-100 text-purple-800 border-purple-200",
  DELETE: "bg-red-100 text-red-800 border-red-200",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function yw({ method: e, className: t, ...n }) {
  const r = e.toUpperCase(), o = dy[r] ?? "bg-subtle text-text-muted border-border";
  return /* @__PURE__ */ m(
    "span",
    {
      className: E(
        "inline-flex items-center px-2 py-0.5 rounded border text-xs font-mono font-bold tracking-wide",
        o,
        t
      ),
      ...n,
      children: r
    }
  );
}
function vw({
  title: e,
  description: t,
  actions: n,
  breadcrumb: r,
  className: o,
  ...a
}) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: E("bg-surface border-b border-border", o),
      ...a,
      children: /* @__PURE__ */ T("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        r && /* @__PURE__ */ m("div", { className: "mb-3", children: r }),
        /* @__PURE__ */ T("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ T("div", { className: "min-w-0", children: [
            /* @__PURE__ */ m("h1", { className: "text-3xl font-bold text-text-base truncate", children: e }),
            t && /* @__PURE__ */ m("p", { className: "mt-1 text-text-muted", children: t })
          ] }),
          n && /* @__PURE__ */ m("div", { className: "flex items-center gap-3 shrink-0", children: n })
        ] })
      ] })
    }
  );
}
var uy = d.createContext(void 0);
function Zn(e) {
  const t = d.useContext(uy);
  return e || t || "ltr";
}
function Ar(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function fy(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var bo = "ScrollArea", [Yi] = mt(bo), [my, De] = Yi(bo), Hi = d.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [i, c] = d.useState(null), [l, u] = d.useState(null), [f, h] = d.useState(null), [p, x] = d.useState(null), [g, b] = d.useState(null), [S, y] = d.useState(0), [v, C] = d.useState(0), [k, w] = d.useState(!1), [M, N] = d.useState(!1), P = ae(t, (W) => c(W)), R = Zn(o);
    return /* @__PURE__ */ m(
      my,
      {
        scope: n,
        type: r,
        dir: R,
        scrollHideDelay: a,
        scrollArea: i,
        viewport: l,
        onViewportChange: u,
        content: f,
        onContentChange: h,
        scrollbarX: p,
        onScrollbarXChange: x,
        scrollbarXEnabled: k,
        onScrollbarXEnabledChange: w,
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: M,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: y,
        onCornerHeightChange: C,
        children: /* @__PURE__ */ m(
          K.div,
          {
            dir: R,
            ...s,
            ref: P,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": S + "px",
              "--radix-scroll-area-corner-height": v + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Hi.displayName = bo;
var Vi = "ScrollAreaViewport", ji = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = De(Vi, n), i = d.useRef(null), c = ae(t, i, s.onViewportChange);
    return /* @__PURE__ */ T(Je, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ m(
        K.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
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
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ m("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
ji.displayName = Vi;
var Ge = "ScrollAreaScrollbar", yo = d.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = De(Ge, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
    return d.useEffect(() => (i ? a(!0) : s(!0), () => {
      i ? a(!1) : s(!1);
    }), [i, a, s]), o.type === "hover" ? /* @__PURE__ */ m(hy, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ m(py, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ m(Ui, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ m(vo, { ...r, ref: t }) : null;
  }
);
yo.displayName = Ge;
var hy = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = De(Ge, e.__scopeScrollArea), [a, s] = d.useState(!1);
  return d.useEffect(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, u = () => {
        c = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", u);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ m(We, { present: n || a, children: /* @__PURE__ */ m(
    Ui,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), py = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = De(Ge, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Jn(() => c("SCROLL_END"), 100), [i, c] = fy("hidden", {
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
  return d.useEffect(() => {
    if (i === "idle") {
      const l = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(l);
    }
  }, [i, o.scrollHideDelay, c]), d.useEffect(() => {
    const l = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let f = l[u];
      const h = () => {
        const p = l[u];
        f !== p && (c("SCROLL"), s()), f = p;
      };
      return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
    }
  }, [o.viewport, a, c, s]), /* @__PURE__ */ m(We, { present: n || i !== "hidden", children: /* @__PURE__ */ m(
    vo,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: Y(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: Y(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Ui = d.forwardRef((e, t) => {
  const n = De(Ge, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = d.useState(!1), i = e.orientation === "horizontal", c = Jn(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Ht(n.viewport, c), Ht(n.content, c), /* @__PURE__ */ m(We, { present: r || a, children: /* @__PURE__ */ m(
    vo,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), vo = d.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = De(Ge, e.__scopeScrollArea), a = d.useRef(null), s = d.useRef(0), [i, c] = d.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = Zi(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => a.current = h,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (h) => s.current = h
  };
  function f(h, p) {
    return xy(h, s.current, i, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ m(
    gy,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollLeft, p = xa(h, i, o.dir);
          a.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = f(h, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ m(
    by,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollTop, p = xa(h, i);
          a.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = f(h));
      }
    }
  ) : null;
}), gy = d.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = De(Ge, e.__scopeScrollArea), [s, i] = d.useState(), c = d.useRef(null), l = ae(t, c, a.onScrollbarXChange);
  return d.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ m(
    qi,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Qn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
      onDragScroll: (u) => e.onDragScroll(u.x),
      onWheelScroll: (u, f) => {
        if (a.viewport) {
          const h = a.viewport.scrollLeft + u.deltaX;
          e.onWheelScroll(h), Ji(h, f) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && s && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: Dn(s.paddingLeft),
            paddingEnd: Dn(s.paddingRight)
          }
        });
      }
    }
  );
}), by = d.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = De(Ge, e.__scopeScrollArea), [s, i] = d.useState(), c = d.useRef(null), l = ae(t, c, a.onScrollbarYChange);
  return d.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ m(
    qi,
    {
      "data-orientation": "vertical",
      ...o,
      ref: l,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Qn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
      onDragScroll: (u) => e.onDragScroll(u.y),
      onWheelScroll: (u, f) => {
        if (a.viewport) {
          const h = a.viewport.scrollTop + u.deltaY;
          e.onWheelScroll(h), Ji(h, f) && u.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && s && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: Dn(s.paddingTop),
            paddingEnd: Dn(s.paddingBottom)
          }
        });
      }
    }
  );
}), [yy, Gi] = Yi(Ge), qi = d.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: u,
    onResize: f,
    ...h
  } = e, p = De(Ge, n), [x, g] = d.useState(null), b = ae(t, (P) => g(P)), S = d.useRef(null), y = d.useRef(""), v = p.viewport, C = r.content - r.viewport, k = we(u), w = we(c), M = Jn(f, 10);
  function N(P) {
    if (S.current) {
      const R = P.clientX - S.current.left, W = P.clientY - S.current.top;
      l({ x: R, y: W });
    }
  }
  return d.useEffect(() => {
    const P = (R) => {
      const W = R.target;
      (x == null ? void 0 : x.contains(W)) && k(R, C);
    };
    return document.addEventListener("wheel", P, { passive: !1 }), () => document.removeEventListener("wheel", P, { passive: !1 });
  }, [v, x, C, k]), d.useEffect(w, [r, w]), Ht(x, M), Ht(p.content, M), /* @__PURE__ */ m(
    yy,
    {
      scope: n,
      scrollbar: x,
      hasThumb: o,
      onThumbChange: we(a),
      onThumbPointerUp: we(s),
      onThumbPositionChange: w,
      onThumbPointerDown: we(i),
      children: /* @__PURE__ */ m(
        K.div,
        {
          ...h,
          ref: b,
          style: { position: "absolute", ...h.style },
          onPointerDown: Y(e.onPointerDown, (P) => {
            P.button === 0 && (P.target.setPointerCapture(P.pointerId), S.current = x.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), N(P));
          }),
          onPointerMove: Y(e.onPointerMove, N),
          onPointerUp: Y(e.onPointerUp, (P) => {
            const R = P.target;
            R.hasPointerCapture(P.pointerId) && R.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), S.current = null;
          })
        }
      )
    }
  );
}), On = "ScrollAreaThumb", Xi = d.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Gi(On, e.__scopeScrollArea);
    return /* @__PURE__ */ m(We, { present: n || o.hasThumb, children: /* @__PURE__ */ m(vy, { ref: t, ...r }) });
  }
), vy = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = De(On, n), s = Gi(On, n), { onThumbPositionChange: i } = s, c = ae(
      t,
      (f) => s.onThumbChange(f)
    ), l = d.useRef(void 0), u = Jn(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return d.useEffect(() => {
      const f = a.viewport;
      if (f) {
        const h = () => {
          if (u(), !l.current) {
            const p = Sy(f, i);
            l.current = p, i();
          }
        };
        return i(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
      }
    }, [a.viewport, u, i]), /* @__PURE__ */ m(
      K.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: Y(e.onPointerDownCapture, (f) => {
          const p = f.target.getBoundingClientRect(), x = f.clientX - p.left, g = f.clientY - p.top;
          s.onThumbPointerDown({ x, y: g });
        }),
        onPointerUp: Y(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
Xi.displayName = On;
var wo = "ScrollAreaCorner", Ki = d.forwardRef(
  (e, t) => {
    const n = De(wo, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ m(wy, { ...e, ref: t }) : null;
  }
);
Ki.displayName = wo;
var wy = d.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = De(wo, n), [a, s] = d.useState(0), [i, c] = d.useState(0), l = !!(a && i);
  return Ht(o.scrollbarX, () => {
    var f;
    const u = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), Ht(o.scrollbarY, () => {
    var f;
    const u = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ m(
    K.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
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
function Dn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Zi(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Qn(e) {
  const t = Zi(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function xy(e, t, n, r = "ltr") {
  const o = Qn(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, f = r === "ltr" ? [0, u] : [u * -1, 0];
  return Qi([c, l], f)(e);
}
function xa(e, t, n = "ltr") {
  const r = Qn(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = Ar(e, c);
  return Qi([0, s], [0, i])(l);
}
function Qi(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Ji(e, t) {
  return e > 0 && e < t;
}
var Sy = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Jn(e, t) {
  const n = we(e), r = d.useRef(0);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), d.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Ht(e, t) {
  const n = we(t);
  ye(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var ec = Hi, Cy = ji, ky = Ki;
const Ny = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ T(
  ec,
  {
    ref: r,
    className: E("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ m(Cy, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ m(tc, {}),
      /* @__PURE__ */ m(ky, {})
    ]
  }
));
Ny.displayName = ec.displayName;
const tc = d.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ m(
  yo,
  {
    ref: r,
    orientation: t,
    className: E(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ m(Xi, { className: "relative flex-1 rounded-full bg-border" })
  }
));
tc.displayName = yo.displayName;
const My = d.forwardRef(
  ({ value: e, onChange: t, onClear: n, className: r, placeholder: o = "Cerca...", ...a }, s) => {
    const i = () => {
      t(""), n == null || n();
    };
    return /* @__PURE__ */ T("div", { className: E("relative", r), children: [
      /* @__PURE__ */ m(Ra, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ m(
        "input",
        {
          ref: s,
          type: "text",
          value: e,
          onChange: (c) => t(c.target.value),
          placeholder: o,
          className: E(
            "w-full pl-10 pr-9 py-2 text-sm border border-border rounded-lg bg-surface",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "placeholder:text-text-muted text-text-base transition-colors"
          ),
          ...a
        }
      ),
      e && /* @__PURE__ */ m(
        "button",
        {
          type: "button",
          onClick: i,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ m(In, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
My.displayName = "SearchInput";
// @__NO_SIDE_EFFECTS__
function Sa(e) {
  const t = /* @__PURE__ */ Py(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(Oy);
    if (c) {
      const l = c.props.children, u = i.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Py(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = Ty(o), i = Dy(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Et(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ey = Symbol("radix.slottable");
function Oy(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ey;
}
function Dy(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const c = a(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ty(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function nc(e) {
  const t = e + "CollectionProvider", [n, r] = mt(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (g) => {
    const { scope: b, children: S } = g, y = D.useRef(null), v = D.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ m(o, { scope: b, itemMap: v, collectionRef: y, children: S });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Sa(i), l = D.forwardRef(
    (g, b) => {
      const { scope: S, children: y } = g, v = a(i, S), C = ae(b, v.collectionRef);
      return /* @__PURE__ */ m(c, { ref: C, children: y });
    }
  );
  l.displayName = i;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ Sa(u), p = D.forwardRef(
    (g, b) => {
      const { scope: S, children: y, ...v } = g, C = D.useRef(null), k = ae(b, C), w = a(u, S);
      return D.useEffect(() => (w.itemMap.set(C, { ref: C, ...v }), () => void w.itemMap.delete(C))), /* @__PURE__ */ m(h, { [f]: "", ref: k, children: y });
    }
  );
  p.displayName = u;
  function x(g) {
    const b = a(e + "CollectionConsumer", g);
    return D.useCallback(() => {
      const y = b.collectionRef.current;
      if (!y) return [];
      const v = Array.from(y.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (w, M) => v.indexOf(w.ref.current) - v.indexOf(M.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: s, Slot: l, ItemSlot: p },
    x,
    r
  ];
}
// @__NO_SIDE_EFFECTS__
function Ry(e) {
  const t = /* @__PURE__ */ Ay(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(_y);
    if (c) {
      const l = c.props.children, u = i.map((f) => f === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ m(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ m(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ay(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = Fy(o), i = Wy(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Et(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Iy = Symbol("radix.slottable");
function _y(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Iy;
}
function Wy(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const c = a(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Fy(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function zy(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var rc = Object.freeze({
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
}), $y = "VisuallyHidden", By = d.forwardRef(
  (e, t) => /* @__PURE__ */ m(
    K.span,
    {
      ...e,
      ref: t,
      style: { ...rc, ...e.style }
    }
  )
);
By.displayName = $y;
var Ly = [" ", "Enter", "ArrowUp", "ArrowDown"], Yy = [" ", "Enter"], Nt = "Select", [er, tr, Hy] = nc(Nt), [Ut] = mt(Nt, [
  Hy,
  Ln
]), nr = Ln(), [Vy, pt] = Ut(Nt), [jy, Uy] = Ut(Nt), oc = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: s,
    defaultValue: i,
    onValueChange: c,
    dir: l,
    name: u,
    autoComplete: f,
    disabled: h,
    required: p,
    form: x
  } = e, g = nr(t), [b, S] = d.useState(null), [y, v] = d.useState(null), [C, k] = d.useState(!1), w = Zn(l), [M, N] = Lt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Nt
  }), [P, R] = Lt({
    prop: s,
    defaultProp: i,
    onChange: c,
    caller: Nt
  }), W = d.useRef(null), H = b ? x || !!b.closest("form") : !0, [V, B] = d.useState(/* @__PURE__ */ new Set()), q = Array.from(V).map((_) => _.props.value).join(";");
  return /* @__PURE__ */ m(ws, { ...g, children: /* @__PURE__ */ T(
    Vy,
    {
      required: p,
      scope: t,
      trigger: b,
      onTriggerChange: S,
      valueNode: y,
      onValueNodeChange: v,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: k,
      contentId: Qe(),
      value: P,
      onValueChange: R,
      open: M,
      onOpenChange: N,
      dir: w,
      triggerPointerDownPosRef: W,
      disabled: h,
      children: [
        /* @__PURE__ */ m(er.Provider, { scope: t, children: /* @__PURE__ */ m(
          jy,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback((_) => {
              B((j) => new Set(j).add(_));
            }, []),
            onNativeOptionRemove: d.useCallback((_) => {
              B((j) => {
                const $ = new Set(j);
                return $.delete(_), $;
              });
            }, []),
            children: n
          }
        ) }),
        H ? /* @__PURE__ */ T(
          Oc,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: u,
            autoComplete: f,
            value: P,
            onChange: (_) => R(_.target.value),
            disabled: h,
            form: x,
            children: [
              P === void 0 ? /* @__PURE__ */ m("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          q
        ) : null
      ]
    }
  ) });
};
oc.displayName = Nt;
var ac = "SelectTrigger", sc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = nr(n), s = pt(ac, n), i = s.disabled || r, c = ae(t, s.onTriggerChange), l = tr(n), u = d.useRef("touch"), [f, h, p] = Tc((g) => {
      const b = l().filter((v) => !v.disabled), S = b.find((v) => v.value === s.value), y = Rc(b, g, S);
      y !== void 0 && s.onValueChange(y.value);
    }), x = (g) => {
      i || (s.onOpenChange(!0), p()), g && (s.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ m(eo, { asChild: !0, ...a, children: /* @__PURE__ */ m(
      K.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Dc(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: Y(o.onClick, (g) => {
          g.currentTarget.focus(), u.current !== "mouse" && x(g);
        }),
        onPointerDown: Y(o.onPointerDown, (g) => {
          u.current = g.pointerType;
          const b = g.target;
          b.hasPointerCapture(g.pointerId) && b.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (x(g), g.preventDefault());
        }),
        onKeyDown: Y(o.onKeyDown, (g) => {
          const b = f.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && h(g.key), !(b && g.key === " ") && Ly.includes(g.key) && (x(), g.preventDefault());
        })
      }
    ) });
  }
);
sc.displayName = ac;
var ic = "SelectValue", cc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = pt(ic, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, f = ae(t, c.onValueNodeChange);
    return ye(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ m(
      K.span,
      {
        ...i,
        ref: f,
        style: { pointerEvents: "none" },
        children: Dc(c.value) ? /* @__PURE__ */ m(Je, { children: s }) : a
      }
    );
  }
);
cc.displayName = ic;
var Gy = "SelectIcon", lc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ m(K.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
lc.displayName = Gy;
var qy = "SelectPortal", dc = (e) => /* @__PURE__ */ m(Yn, { asChild: !0, ...e });
dc.displayName = qy;
var Mt = "SelectContent", uc = d.forwardRef(
  (e, t) => {
    const n = pt(Mt, e.__scopeSelect), [r, o] = d.useState();
    if (ye(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Rn.createPortal(
        /* @__PURE__ */ m(fc, { scope: e.__scopeSelect, children: /* @__PURE__ */ m(er.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ m("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ m(mc, { ...e, ref: t });
  }
);
uc.displayName = Mt;
var Re = 10, [fc, gt] = Ut(Mt), Xy = "SelectContentImpl", Ky = /* @__PURE__ */ Ry("SelectContent.RemoveScroll"), mc = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: x,
      hideWhenDetached: g,
      avoidCollisions: b,
      //
      ...S
    } = e, y = pt(Mt, n), [v, C] = d.useState(null), [k, w] = d.useState(null), M = ae(t, (z) => C(z)), [N, P] = d.useState(null), [R, W] = d.useState(
      null
    ), H = tr(n), [V, B] = d.useState(!1), q = d.useRef(!1);
    d.useEffect(() => {
      if (v) return to(v);
    }, [v]), jr();
    const _ = d.useCallback(
      (z) => {
        const [re, ...Z] = H().map((J) => J.ref.current), [ee] = Z.slice(-1), Q = document.activeElement;
        for (const J of z)
          if (J === Q || (J == null || J.scrollIntoView({ block: "nearest" }), J === re && k && (k.scrollTop = 0), J === ee && k && (k.scrollTop = k.scrollHeight), J == null || J.focus(), document.activeElement !== Q)) return;
      },
      [H, k]
    ), j = d.useCallback(
      () => _([N, v]),
      [_, N, v]
    );
    d.useEffect(() => {
      V && j();
    }, [V, j]);
    const { onOpenChange: $, triggerPointerDownPosRef: U } = y;
    d.useEffect(() => {
      if (v) {
        let z = { x: 0, y: 0 };
        const re = (ee) => {
          var Q, J;
          z = {
            x: Math.abs(Math.round(ee.pageX) - (((Q = U.current) == null ? void 0 : Q.x) ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (((J = U.current) == null ? void 0 : J.y) ?? 0))
          };
        }, Z = (ee) => {
          z.x <= 10 && z.y <= 10 ? ee.preventDefault() : v.contains(ee.target) || $(!1), document.removeEventListener("pointermove", re), U.current = null;
        };
        return U.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [v, $, U]), d.useEffect(() => {
      const z = () => $(!1);
      return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
      };
    }, [$]);
    const [O, fe] = Tc((z) => {
      const re = H().filter((Q) => !Q.disabled), Z = re.find((Q) => Q.ref.current === document.activeElement), ee = Rc(re, z, Z);
      ee && setTimeout(() => ee.ref.current.focus());
    }), Ee = d.useCallback(
      (z, re, Z) => {
        const ee = !q.current && !Z;
        (y.value !== void 0 && y.value === re || ee) && (P(z), ee && (q.current = !0));
      },
      [y.value]
    ), xe = d.useCallback(() => v == null ? void 0 : v.focus(), [v]), ge = d.useCallback(
      (z, re, Z) => {
        const ee = !q.current && !Z;
        (y.value !== void 0 && y.value === re || ee) && W(z);
      },
      [y.value]
    ), le = r === "popper" ? Ir : hc, de = le === Ir ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: f,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: x,
      hideWhenDetached: g,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ m(
      fc,
      {
        scope: n,
        content: v,
        viewport: k,
        onViewportChange: w,
        itemRefCallback: Ee,
        selectedItem: N,
        onItemLeave: xe,
        itemTextRefCallback: ge,
        focusSelectedItem: j,
        selectedItemText: R,
        position: r,
        isPositioned: V,
        searchRef: O,
        children: /* @__PURE__ */ m(Vn, { as: Ky, allowPinchZoom: !0, children: /* @__PURE__ */ m(
          Wn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: Y(o, (z) => {
              var re;
              (re = y.trigger) == null || re.focus({ preventScroll: !0 }), z.preventDefault();
            }),
            children: /* @__PURE__ */ m(
              _n,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (z) => z.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ m(
                  le,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (z) => z.preventDefault(),
                    ...S,
                    ...de,
                    onPlaced: () => B(!0),
                    ref: M,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...S.style
                    },
                    onKeyDown: Y(S.onKeyDown, (z) => {
                      const re = z.ctrlKey || z.altKey || z.metaKey;
                      if (z.key === "Tab" && z.preventDefault(), !re && z.key.length === 1 && fe(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let ee = H().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                          const Q = z.target, J = ee.indexOf(Q);
                          ee = ee.slice(J + 1);
                        }
                        setTimeout(() => _(ee)), z.preventDefault();
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
mc.displayName = Xy;
var Zy = "SelectItemAlignedPosition", hc = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = pt(Mt, n), s = gt(Mt, n), [i, c] = d.useState(null), [l, u] = d.useState(null), f = ae(t, (M) => u(M)), h = tr(n), p = d.useRef(!1), x = d.useRef(!0), { viewport: g, selectedItem: b, selectedItemText: S, focusSelectedItem: y } = s, v = d.useCallback(() => {
    if (a.trigger && a.valueNode && i && l && g && b && S) {
      const M = a.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), P = a.valueNode.getBoundingClientRect(), R = S.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const Q = R.left - N.left, J = P.left - Q, he = M.left - J, be = M.width + he, rt = Math.max(be, N.width), bt = window.innerWidth - Re, yt = Ar(J, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, bt - rt)
        ]);
        i.style.minWidth = be + "px", i.style.left = yt + "px";
      } else {
        const Q = N.right - R.right, J = window.innerWidth - P.right - Q, he = window.innerWidth - M.right - J, be = M.width + he, rt = Math.max(be, N.width), bt = window.innerWidth - Re, yt = Ar(J, [
          Re,
          Math.max(Re, bt - rt)
        ]);
        i.style.minWidth = be + "px", i.style.right = yt + "px";
      }
      const W = h(), H = window.innerHeight - Re * 2, V = g.scrollHeight, B = window.getComputedStyle(l), q = parseInt(B.borderTopWidth, 10), _ = parseInt(B.paddingTop, 10), j = parseInt(B.borderBottomWidth, 10), $ = parseInt(B.paddingBottom, 10), U = q + _ + V + $ + j, O = Math.min(b.offsetHeight * 5, U), fe = window.getComputedStyle(g), Ee = parseInt(fe.paddingTop, 10), xe = parseInt(fe.paddingBottom, 10), ge = M.top + M.height / 2 - Re, le = H - ge, de = b.offsetHeight / 2, z = b.offsetTop + de, re = q + _ + z, Z = U - re;
      if (re <= ge) {
        const Q = W.length > 0 && b === W[W.length - 1].ref.current;
        i.style.bottom = "0px";
        const J = l.clientHeight - g.offsetTop - g.offsetHeight, he = Math.max(
          le,
          de + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Q ? xe : 0) + J + j
        ), be = re + he;
        i.style.height = be + "px";
      } else {
        const Q = W.length > 0 && b === W[0].ref.current;
        i.style.top = "0px";
        const he = Math.max(
          ge,
          q + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Q ? Ee : 0) + de
        ) + Z;
        i.style.height = he + "px", g.scrollTop = re - ge + g.offsetTop;
      }
      i.style.margin = `${Re}px 0`, i.style.minHeight = O + "px", i.style.maxHeight = H + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    a.trigger,
    a.valueNode,
    i,
    l,
    g,
    b,
    S,
    a.dir,
    r
  ]);
  ye(() => v(), [v]);
  const [C, k] = d.useState();
  ye(() => {
    l && k(window.getComputedStyle(l).zIndex);
  }, [l]);
  const w = d.useCallback(
    (M) => {
      M && x.current === !0 && (v(), y == null || y(), x.current = !1);
    },
    [v, y]
  );
  return /* @__PURE__ */ m(
    Jy,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: w,
      children: /* @__PURE__ */ m(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ m(
            K.div,
            {
              ...o,
              ref: f,
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
hc.displayName = Zy;
var Qy = "SelectPopperPosition", Ir = d.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Re,
    ...a
  } = e, s = nr(n);
  return /* @__PURE__ */ m(
    xs,
    {
      ...s,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...a.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ir.displayName = Qy;
var [Jy, xo] = Ut(Mt, {}), _r = "SelectViewport", pc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = gt(_r, n), s = xo(_r, n), i = ae(t, a.onViewportChange), c = d.useRef(0);
    return /* @__PURE__ */ T(Je, { children: [
      /* @__PURE__ */ m(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ m(er.Slot, { scope: n, children: /* @__PURE__ */ m(
        K.div,
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
          onScroll: Y(o.onScroll, (l) => {
            const u = l.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && f) {
              const p = Math.abs(c.current - u.scrollTop);
              if (p > 0) {
                const x = window.innerHeight - Re * 2, g = parseFloat(f.style.minHeight), b = parseFloat(f.style.height), S = Math.max(g, b);
                if (S < x) {
                  const y = S + p, v = Math.min(x, y), C = y - v;
                  f.style.height = v + "px", f.style.bottom === "0px" && (u.scrollTop = C > 0 ? C : 0, f.style.justifyContent = "flex-end");
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
pc.displayName = _r;
var gc = "SelectGroup", [ev, tv] = Ut(gc), bc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Qe();
    return /* @__PURE__ */ m(ev, { scope: n, id: o, children: /* @__PURE__ */ m(K.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
bc.displayName = gc;
var yc = "SelectLabel", vc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = tv(yc, n);
    return /* @__PURE__ */ m(K.div, { id: o.id, ...r, ref: t });
  }
);
vc.displayName = yc;
var Tn = "SelectItem", [nv, wc] = Ut(Tn), xc = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = pt(Tn, n), c = gt(Tn, n), l = i.value === r, [u, f] = d.useState(a ?? ""), [h, p] = d.useState(!1), x = ae(
      t,
      (y) => {
        var v;
        return (v = c.itemRefCallback) == null ? void 0 : v.call(c, y, r, o);
      }
    ), g = Qe(), b = d.useRef("touch"), S = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ m(
      nv,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: l,
        onItemTextChange: d.useCallback((y) => {
          f((v) => v || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ m(
          er.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ m(
              K.div,
              {
                role: "option",
                "aria-labelledby": g,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": l && h,
                "data-state": l ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: x,
                onFocus: Y(s.onFocus, () => p(!0)),
                onBlur: Y(s.onBlur, () => p(!1)),
                onClick: Y(s.onClick, () => {
                  b.current !== "mouse" && S();
                }),
                onPointerUp: Y(s.onPointerUp, () => {
                  b.current === "mouse" && S();
                }),
                onPointerDown: Y(s.onPointerDown, (y) => {
                  b.current = y.pointerType;
                }),
                onPointerMove: Y(s.onPointerMove, (y) => {
                  var v;
                  b.current = y.pointerType, o ? (v = c.onItemLeave) == null || v.call(c) : b.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Y(s.onPointerLeave, (y) => {
                  var v;
                  y.currentTarget === document.activeElement && ((v = c.onItemLeave) == null || v.call(c));
                }),
                onKeyDown: Y(s.onKeyDown, (y) => {
                  var C;
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && y.key === " " || (Yy.includes(y.key) && S(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
xc.displayName = Tn;
var Xt = "SelectItemText", Sc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = pt(Xt, n), i = gt(Xt, n), c = wc(Xt, n), l = Uy(Xt, n), [u, f] = d.useState(null), h = ae(
      t,
      (S) => f(S),
      c.onItemTextChange,
      (S) => {
        var y;
        return (y = i.itemTextRefCallback) == null ? void 0 : y.call(i, S, c.value, c.disabled);
      }
    ), p = u == null ? void 0 : u.textContent, x = d.useMemo(
      () => /* @__PURE__ */ m("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: b } = l;
    return ye(() => (g(x), () => b(x)), [g, b, x]), /* @__PURE__ */ T(Je, { children: [
      /* @__PURE__ */ m(K.span, { id: c.textId, ...a, ref: h }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren ? Rn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Sc.displayName = Xt;
var Cc = "SelectItemIndicator", kc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return wc(Cc, n).isSelected ? /* @__PURE__ */ m(K.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
kc.displayName = Cc;
var Wr = "SelectScrollUpButton", Nc = d.forwardRef((e, t) => {
  const n = gt(Wr, e.__scopeSelect), r = xo(Wr, e.__scopeSelect), [o, a] = d.useState(!1), s = ae(t, r.onScrollButtonChange);
  return ye(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    Pc,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Nc.displayName = Wr;
var Fr = "SelectScrollDownButton", Mc = d.forwardRef((e, t) => {
  const n = gt(Fr, e.__scopeSelect), r = xo(Fr, e.__scopeSelect), [o, a] = d.useState(!1), s = ae(t, r.onScrollButtonChange);
  return ye(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        a(u);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ m(
    Pc,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Mc.displayName = Fr;
var Pc = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = gt("SelectScrollButton", n), s = d.useRef(null), i = tr(n), c = d.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return d.useEffect(() => () => c(), [c]), ye(() => {
    var u;
    const l = i().find((f) => f.ref.current === document.activeElement);
    (u = l == null ? void 0 : l.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ m(
    K.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: Y(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: Y(o.onPointerMove, () => {
        var l;
        (l = a.onItemLeave) == null || l.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: Y(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), rv = "SelectSeparator", Ec = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ m(K.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ec.displayName = rv;
var zr = "SelectArrow", ov = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = nr(n), a = pt(zr, n), s = gt(zr, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ m(Ss, { ...o, ...r, ref: t }) : null;
  }
);
ov.displayName = zr;
var av = "SelectBubbleInput", Oc = d.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = d.useRef(null), a = ae(r, o), s = zy(t);
    return d.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (s !== t && u) {
        const f = new Event("change", { bubbles: !0 });
        u.call(i, t), i.dispatchEvent(f);
      }
    }, [s, t]), /* @__PURE__ */ m(
      K.select,
      {
        ...n,
        style: { ...rc, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
Oc.displayName = av;
function Dc(e) {
  return e === "" || e === void 0;
}
function Tc(e) {
  const t = we(e), n = d.useRef(""), r = d.useRef(0), o = d.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(i);
    },
    [t]
  ), a = d.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Rc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = sv(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function sv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var iv = oc, Ac = sc, cv = cc, lv = lc, dv = dc, Ic = uc, uv = pc, fv = bc, _c = vc, Wc = xc, mv = Sc, hv = kc, Fc = Nc, zc = Mc, $c = Ec;
const ww = iv, xw = fv, Sw = cv, pv = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ T(
  Ac,
  {
    ref: r,
    className: E(
      "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base",
      "placeholder:text-text-muted",
      "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ m(lv, { asChild: !0, children: /* @__PURE__ */ m(Da, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
pv.displayName = Ac.displayName;
const Bc = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  Fc,
  {
    ref: n,
    className: E("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(Il, { className: "h-4 w-4" })
  }
));
Bc.displayName = Fc.displayName;
const Lc = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  zc,
  {
    ref: n,
    className: E("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ m(Da, { className: "h-4 w-4" })
  }
));
Lc.displayName = zc.displayName;
const gv = d.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ m(dv, { children: /* @__PURE__ */ T(
  Ic,
  {
    ref: o,
    className: E(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-surface text-text-base shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ m(Bc, {}),
      /* @__PURE__ */ m(
        uv,
        {
          className: E(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ m(Lc, {})
    ]
  }
) }));
gv.displayName = Ic.displayName;
const bv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  _c,
  {
    ref: n,
    className: E("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
bv.displayName = _c.displayName;
const yv = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ T(
  Wc,
  {
    ref: r,
    className: E(
      "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none",
      "focus:bg-subtle focus:text-text-base",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ m("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ m(hv, { children: /* @__PURE__ */ m(An, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ m(mv, { children: t })
    ]
  }
));
yv.displayName = Wc.displayName;
const vv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  $c,
  {
    ref: n,
    className: E("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
vv.displayName = $c.displayName;
function Cw({
  open: e,
  onClose: t,
  width: n = 380,
  header: r,
  children: o,
  className: a,
  ...s
}) {
  return e ? /* @__PURE__ */ T(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        width: n,
        height: "100vh",
        zIndex: 50,
        overflowY: "auto"
      },
      className: E(
        "bg-surface border-l border-border shadow-2xl",
        a
      ),
      ...s,
      children: [
        /* @__PURE__ */ m(
          "button",
          {
            onClick: t,
            className: "absolute top-3 right-3 z-10 rounded-md p-1.5 text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
            "aria-label": "Chiudi pannello",
            children: /* @__PURE__ */ m(In, { className: "size-5" })
          }
        ),
        r && /* @__PURE__ */ m("div", { className: "px-4 pt-4 pb-2 pr-10", children: r }),
        /* @__PURE__ */ m("div", { className: E(r ? "" : "pt-4"), children: o })
      ]
    }
  ) : null;
}
function Yc({ className: e, ...t }) {
  return /* @__PURE__ */ m(
    "div",
    {
      className: E("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function wv({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ m("div", { className: E("space-y-2", t), children: Array.from({ length: e }).map((n, r) => /* @__PURE__ */ m(
    Yc,
    {
      className: E("h-4", r === e - 1 ? "w-2/3" : "w-full")
    },
    r
  )) });
}
function kw({ className: e }) {
  return /* @__PURE__ */ T("div", { className: E("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ m(Yc, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ m(wv, { lines: 3 })
  ] });
}
const xv = en(
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
function Sv({ className: e, size: t, label: n = "Caricamento...", ...r }) {
  return /* @__PURE__ */ T(
    "div",
    {
      role: "status",
      "aria-label": n,
      className: E("inline-flex items-center justify-center", e),
      ...r,
      children: [
        /* @__PURE__ */ m("div", { className: xv({ size: t }) }),
        /* @__PURE__ */ m("span", { className: "sr-only", children: n })
      ]
    }
  );
}
function Nw({ label: e }) {
  return /* @__PURE__ */ T("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ m(Sv, { size: "lg", label: e }),
    e && /* @__PURE__ */ m("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
function Mw({
  icon: e,
  iconColor: t = "#f59e0b",
  label: n,
  value: r,
  trend: o,
  className: a,
  ...s
}) {
  return /* @__PURE__ */ T(
    "div",
    {
      className: E(
        "bg-surface rounded-xl shadow-sm border border-border p-4 text-center hover:shadow-md transition-shadow",
        a
      ),
      ...s,
      children: [
        e && /* @__PURE__ */ m(
          e,
          {
            className: "h-6 w-6 mx-auto mb-2",
            style: { color: t }
          }
        ),
        /* @__PURE__ */ m("div", { className: "text-2xl font-bold text-text-base", children: r }),
        /* @__PURE__ */ m("div", { className: "text-sm text-text-muted mt-0.5", children: n }),
        o && /* @__PURE__ */ m(
          "div",
          {
            className: E(
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
const Cv = en(
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
), kv = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-text-muted"
};
function Pw({
  variant: e = "neutral",
  label: t,
  dot: n = !0,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ T(
    "span",
    {
      className: E(Cv({ variant: e }), r),
      ...o,
      children: [
        n && /* @__PURE__ */ m(
          "span",
          {
            className: E(
              "h-1.5 w-1.5 rounded-full shrink-0",
              kv[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
const Nv = {
  operational: { dot: "bg-green-500", text: "text-green-500 dark:text-green-400", label: "Operational" },
  degraded: { dot: "bg-yellow-500", text: "text-yellow-500 dark:text-yellow-400", label: "Degraded" },
  outage: { dot: "bg-red-500", text: "text-red-500 dark:text-red-400", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function Ew({
  label: e,
  status: t,
  statusLabel: n,
  className: r,
  ...o
}) {
  const a = Nv[t];
  return /* @__PURE__ */ T("div", { className: E("flex items-center justify-between", r), ...o, children: [
    /* @__PURE__ */ T("div", { className: "flex items-center", children: [
      /* @__PURE__ */ m("div", { className: E("h-2 w-2 rounded-full mr-3", a.dot) }),
      /* @__PURE__ */ m("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ m("span", { className: E("text-sm", a.text), children: n ?? a.label })
  ] });
}
function Ow({ tabs: e, activeTab: t, onChange: n, className: r }) {
  return /* @__PURE__ */ m("div", { className: E("border-b border-border", r), children: /* @__PURE__ */ m("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
    const a = t === o.id, s = o.icon;
    return /* @__PURE__ */ T(
      "button",
      {
        role: "tab",
        "aria-selected": a,
        onClick: () => n(o.id),
        className: E(
          "inline-flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
          a ? "border-databeez-primary text-databeez-primary" : "border-transparent text-text-muted hover:text-text-base hover:border-border"
        ),
        children: [
          s && /* @__PURE__ */ m(s, { className: "h-4 w-4" }),
          o.label
        ]
      },
      o.id
    );
  }) }) });
}
const Mv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ m(
  "table",
  {
    ref: n,
    className: E("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Mv.displayName = "Table";
const Pv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m("thead", { ref: n, className: E("bg-subtle border-b border-border", e), ...t }));
Pv.displayName = "TableHeader";
const Ev = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tbody",
  {
    ref: n,
    className: E("divide-y divide-border", e),
    ...t
  }
));
Ev.displayName = "TableBody";
const Ov = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tfoot",
  {
    ref: n,
    className: E("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
Ov.displayName = "TableFooter";
const Dv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "tr",
  {
    ref: n,
    className: E(
      "transition-colors hover:bg-subtle data-[state=selected]:bg-primary-50",
      e
    ),
    ...t
  }
));
Dv.displayName = "TableRow";
const Tv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "th",
  {
    ref: n,
    className: E(
      "h-10 px-4 text-left align-middle font-semibold text-text-muted text-xs uppercase tracking-wider",
      e
    ),
    ...t
  }
));
Tv.displayName = "TableHead";
const Rv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "td",
  {
    ref: n,
    className: E("px-4 py-3 align-middle text-text-base", e),
    ...t
  }
));
Rv.displayName = "TableCell";
const Av = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  "caption",
  {
    ref: n,
    className: E("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
Av.displayName = "TableCaption";
var Nr = "rovingFocusGroup.onEntryFocus", Iv = { bubbles: !1, cancelable: !0 }, cn = "RovingFocusGroup", [$r, Hc, _v] = nc(cn), [Wv, Vc] = mt(
  cn,
  [_v]
), [Fv, zv] = Wv(cn), jc = d.forwardRef(
  (e, t) => /* @__PURE__ */ m($r.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m($r.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ m($v, { ...e, ref: t }) }) })
);
jc.displayName = cn;
var $v = d.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...f
  } = e, h = d.useRef(null), p = ae(t, h), x = Zn(a), [g, b] = Lt({
    prop: s,
    defaultProp: i ?? null,
    onChange: c,
    caller: cn
  }), [S, y] = d.useState(!1), v = we(l), C = Hc(n), k = d.useRef(!1), [w, M] = d.useState(0);
  return d.useEffect(() => {
    const N = h.current;
    if (N)
      return N.addEventListener(Nr, v), () => N.removeEventListener(Nr, v);
  }, [v]), /* @__PURE__ */ m(
    Fv,
    {
      scope: n,
      orientation: r,
      dir: x,
      loop: o,
      currentTabStopId: g,
      onItemFocus: d.useCallback(
        (N) => b(N),
        [b]
      ),
      onItemShiftTab: d.useCallback(() => y(!0), []),
      onFocusableItemAdd: d.useCallback(
        () => M((N) => N + 1),
        []
      ),
      onFocusableItemRemove: d.useCallback(
        () => M((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ m(
        K.div,
        {
          tabIndex: S || w === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: Y(e.onFocus, (N) => {
            const P = !k.current;
            if (N.target === N.currentTarget && P && !S) {
              const R = new CustomEvent(Nr, Iv);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const W = C().filter((_) => _.focusable), H = W.find((_) => _.active), V = W.find((_) => _.id === g), q = [H, V, ...W].filter(
                  Boolean
                ).map((_) => _.ref.current);
                qc(q, u);
              }
            }
            k.current = !1;
          }),
          onBlur: Y(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Uc = "RovingFocusGroupItem", Gc = d.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, c = Qe(), l = a || c, u = zv(Uc, n), f = u.currentTabStopId === l, h = Hc(n), { onFocusableItemAdd: p, onFocusableItemRemove: x, currentTabStopId: g } = u;
    return d.useEffect(() => {
      if (r)
        return p(), () => x();
    }, [r, p, x]), /* @__PURE__ */ m(
      $r.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ m(
          K.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: Y(e.onMouseDown, (b) => {
              r ? u.onItemFocus(l) : b.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: Y(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const S = Yv(b, u.orientation, u.dir);
              if (S !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let v = h().filter((C) => C.focusable).map((C) => C.ref.current);
                if (S === "last") v.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && v.reverse();
                  const C = v.indexOf(b.currentTarget);
                  v = u.loop ? Hv(v, C + 1) : v.slice(C + 1);
                }
                setTimeout(() => qc(v));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: g != null }) : s
          }
        )
      }
    );
  }
);
Gc.displayName = Uc;
var Bv = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Lv(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Yv(e, t, n) {
  const r = Lv(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Bv[r];
}
function qc(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Hv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vv = jc, jv = Gc, rr = "Tabs", [Uv] = mt(rr, [
  Vc
]), Xc = Vc(), [Gv, So] = Uv(rr), Kc = d.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...l
    } = e, u = Zn(i), [f, h] = Lt({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: rr
    });
    return /* @__PURE__ */ m(
      Gv,
      {
        scope: n,
        baseId: Qe(),
        value: f,
        onValueChange: h,
        orientation: s,
        dir: u,
        activationMode: c,
        children: /* @__PURE__ */ m(
          K.div,
          {
            dir: u,
            "data-orientation": s,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
Kc.displayName = rr;
var Zc = "TabsList", Qc = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = So(Zc, n), s = Xc(n);
    return /* @__PURE__ */ m(
      Vv,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ m(
          K.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
Qc.displayName = Zc;
var Jc = "TabsTrigger", el = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = So(Jc, n), i = Xc(n), c = rl(s.baseId, r), l = ol(s.baseId, r), u = r === s.value;
    return /* @__PURE__ */ m(
      jv,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ m(
          K.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": u,
            "aria-controls": l,
            "data-state": u ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: c,
            ...a,
            ref: t,
            onMouseDown: Y(e.onMouseDown, (f) => {
              !o && f.button === 0 && f.ctrlKey === !1 ? s.onValueChange(r) : f.preventDefault();
            }),
            onKeyDown: Y(e.onKeyDown, (f) => {
              [" ", "Enter"].includes(f.key) && s.onValueChange(r);
            }),
            onFocus: Y(e.onFocus, () => {
              const f = s.activationMode !== "manual";
              !u && !o && f && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
el.displayName = Jc;
var tl = "TabsContent", nl = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = So(tl, n), c = rl(i.baseId, r), l = ol(i.baseId, r), u = r === i.value, f = d.useRef(u);
    return d.useEffect(() => {
      const h = requestAnimationFrame(() => f.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ m(We, { present: o || u, children: ({ present: h }) => /* @__PURE__ */ m(
      K.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !h,
        id: l,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: f.current ? "0s" : void 0
        },
        children: h && a
      }
    ) });
  }
);
nl.displayName = tl;
function rl(e, t) {
  return `${e}-trigger-${t}`;
}
function ol(e, t) {
  return `${e}-content-${t}`;
}
var qv = Kc, al = Qc, sl = el, il = nl;
const Dw = qv, Xv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  al,
  {
    ref: n,
    className: E(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
Xv.displayName = al.displayName;
const Kv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  sl,
  {
    ref: n,
    className: E(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-surface data-[state=active]:text-text-base data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
Kv.displayName = sl.displayName;
const Zv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ m(
  il,
  {
    ref: n,
    className: E(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
Zv.displayName = il.displayName;
const Qv = d.forwardRef(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...a }, s) => {
    const i = o ?? (t == null ? void 0 : t.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ T("div", { className: "w-full space-y-1.5", children: [
      t && /* @__PURE__ */ m(
        "label",
        {
          htmlFor: i,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ m(
        "textarea",
        {
          id: i,
          ref: s,
          className: E(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-base placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-subtle",
            "resize-y min-h-[80px] transition-colors",
            n && "border-error-500 focus:ring-error-500 focus:border-error-500",
            e
          ),
          "aria-invalid": !!n,
          "aria-describedby": n ? `${i}-error` : r ? `${i}-helper` : void 0,
          ...a
        }
      ),
      n && /* @__PURE__ */ m("p", { id: `${i}-error`, className: "text-xs text-error-500", children: n }),
      !n && r && /* @__PURE__ */ m("p", { id: `${i}-helper`, className: "text-xs text-text-muted", children: r })
    ] });
  }
);
Qv.displayName = "Textarea";
function Jv({
  value: e = "",
  onChange: t,
  label: n,
  error: r,
  helperText: o,
  disabled: a,
  className: s,
  minuteStep: i = 1,
  showSeconds: c = !1
}) {
  const l = d.useId(), u = d.useMemo(() => {
    const [b = "", S = "", y = ""] = e.split(":");
    return { hours: b, minutes: S, seconds: y };
  }, [e]), f = Array.from({ length: 24 }, (b, S) => String(S).padStart(2, "0")), h = Array.from(
    { length: Math.ceil(60 / i) },
    (b, S) => String(S * i).padStart(2, "0")
  ), p = Array.from({ length: 60 }, (b, S) => String(S).padStart(2, "0"));
  function x(b, S) {
    const y = { ...u, [b]: S };
    y.hours || (y.hours = "00"), y.minutes || (y.minutes = "00");
    const v = c ? `${y.hours}:${y.minutes}:${y.seconds || "00"}` : `${y.hours}:${y.minutes}`;
    t == null || t(v);
  }
  const g = E(
    "h-10 rounded-lg border border-border bg-surface px-2 py-2 text-sm text-text-base appearance-none",
    "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
    "disabled:cursor-not-allowed disabled:opacity-50",
    r && "border-red-300 focus:ring-red-500 focus:border-red-500"
  );
  return /* @__PURE__ */ T("div", { className: "space-y-1", children: [
    n && /* @__PURE__ */ m("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: n }),
    /* @__PURE__ */ T(
      "div",
      {
        className: E("flex items-center gap-2", s),
        children: [
          /* @__PURE__ */ m(Wl, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ T(
            "select",
            {
              id: l,
              disabled: a,
              value: u.hours,
              onChange: (b) => x("hours", b.target.value),
              className: g,
              "aria-label": "Ore",
              children: [
                /* @__PURE__ */ m("option", { value: "", disabled: !0, children: "HH" }),
                f.map((b) => /* @__PURE__ */ m("option", { value: b, children: b }, b))
              ]
            }
          ),
          /* @__PURE__ */ m("span", { className: "text-text-muted font-medium", children: ":" }),
          /* @__PURE__ */ T(
            "select",
            {
              disabled: a,
              value: u.minutes,
              onChange: (b) => x("minutes", b.target.value),
              className: g,
              "aria-label": "Minuti",
              children: [
                /* @__PURE__ */ m("option", { value: "", disabled: !0, children: "MM" }),
                h.map((b) => /* @__PURE__ */ m("option", { value: b, children: b }, b))
              ]
            }
          ),
          c && /* @__PURE__ */ T(Je, { children: [
            /* @__PURE__ */ m("span", { className: "text-text-muted font-medium", children: ":" }),
            /* @__PURE__ */ T(
              "select",
              {
                disabled: a,
                value: u.seconds,
                onChange: (b) => x("seconds", b.target.value),
                className: g,
                "aria-label": "Secondi",
                children: [
                  /* @__PURE__ */ m("option", { value: "", disabled: !0, children: "SS" }),
                  p.map((b) => /* @__PURE__ */ m("option", { value: b, children: b }, b))
                ]
              }
            )
          ] })
        ]
      }
    ),
    r && /* @__PURE__ */ m("p", { className: "text-xs text-red-600", children: r }),
    o && !r && /* @__PURE__ */ m("p", { className: "text-xs text-text-muted", children: o })
  ] });
}
Jv.displayName = "TimePicker";
const Br = "databeez-theme", Tw = `(function(){var t=localStorage.getItem('${Br}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, cl = Ma({
  theme: "system",
  setTheme: () => {
  }
});
function Rw({ children: e }) {
  const [t, n] = ct("system"), r = (a) => {
    const s = document.documentElement, i = window.matchMedia("(prefers-color-scheme: dark)").matches;
    a === "dark" || a === "system" && i ? s.classList.add("dark") : s.classList.remove("dark");
  };
  xn(() => {
    const s = localStorage.getItem(Br) ?? "system";
    n(s), r(s);
  }, []), xn(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), s = () => r("system");
    return a.addEventListener("change", s), () => a.removeEventListener("change", s);
  }, [t]);
  const o = (a) => {
    n(a), localStorage.setItem(Br, a), r(a);
  };
  return /* @__PURE__ */ m(cl.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function Aw() {
  return Pa(cl);
}
function Iw(e, t = {}) {
  const { immediate: n = !0 } = t, [r, o] = ct(null), [a, s] = ct(n), [i, c] = ct(null), l = Kt(e);
  l.current = e;
  const u = Ce(async () => {
    var f;
    s(!0), c(null);
    try {
      const h = await l.current();
      h.success && h.data !== void 0 ? o(h.data) : c(((f = h.error) == null ? void 0 : f.message) ?? "Si è verificato un errore");
    } catch (h) {
      c(h instanceof Error ? h.message : "Si è verificato un errore");
    } finally {
      s(!1);
    }
  }, []);
  return xn(() => {
    n && u();
  }, t.deps ?? []), { data: r, loading: a, error: i, refetch: u };
}
const Ca = {
  O: { label: "Organizzazione", icon: Yr },
  P: { label: "Persona", icon: Aa }
};
function _w(e) {
  return Ca[e ?? ""] ?? Ca.O;
}
function Ww(e) {
  switch (e) {
    case "F":
      return { label: "Professionista", icon: Rl };
    default:
      return { label: "Persona", icon: Aa };
  }
}
const ew = {
  S: { label: "Società", icon: Yr },
  D: { label: "Ditta individuale", icon: jl },
  E: { label: "Ente pubblico", icon: $l },
  X: { label: "Estera", icon: Fl },
  P: { label: "PIVA", icon: Yl },
  A: { label: "Altro", icon: zl }
}, tw = { label: "Organizzazione", icon: Yr };
function Fw(e) {
  return ew[e ?? ""] ?? tw;
}
const zw = {
  label: "Indirizzo",
  icon: Bl
}, $w = {
  label: "Sede",
  icon: ql
};
export {
  zw as ADDRESS_META,
  Ld as Alert,
  iw as Badge,
  Xa as Button,
  mo as Calendar,
  Jd as Card,
  ru as CardContent,
  nu as CardDescription,
  ou as CardFooter,
  eu as CardHeader,
  tu as CardTitle,
  au as ChatInput,
  lw as CodeBlock,
  ah as ColorPicker,
  sh as Combobox,
  ch as CopyButton,
  oh as DEFAULT_PRESETS,
  dw as DataBeezLogo,
  Ib as DatePicker,
  _b as DateRangePicker,
  fw as Dialog,
  hw as DialogClose,
  ty as DialogContent,
  ay as DialogDescription,
  ry as DialogFooter,
  ny as DialogHeader,
  Li as DialogOverlay,
  ey as DialogPortal,
  oy as DialogTitle,
  mw as DialogTrigger,
  pw as EmptyState,
  bw as FeatureCard,
  aw as InfoRow,
  cy as Input,
  ly as InputWithIcon,
  $w as LOCATION_META,
  iy as MarkdownContent,
  gw as MessageBubble,
  yw as MethodBadge,
  ew as ORG_TYPE_META,
  vw as PageHeader,
  Un as Popover,
  cw as PopoverAnchor,
  rn as PopoverContent,
  Gn as PopoverTrigger,
  Ca as SUBJECT_TYPE_META,
  Ny as ScrollArea,
  tc as ScrollBar,
  My as SearchInput,
  sw as Section,
  ww as Select,
  gv as SelectContent,
  xw as SelectGroup,
  yv as SelectItem,
  bv as SelectLabel,
  Lc as SelectScrollDownButton,
  Bc as SelectScrollUpButton,
  vv as SelectSeparator,
  pv as SelectTrigger,
  Sw as SelectValue,
  Cw as SidePanel,
  Yc as Skeleton,
  kw as SkeletonCard,
  wv as SkeletonText,
  Sv as Spinner,
  Nw as SpinnerOverlay,
  Mw as StatCard,
  Pw as StatusBadge,
  Ew as StatusIndicatorRow,
  Tw as THEME_ANTI_FOUC_SCRIPT,
  Br as THEME_STORAGE_KEY,
  Ow as TabSwitch,
  Mv as Table,
  Ev as TableBody,
  Av as TableCaption,
  Rv as TableCell,
  Ov as TableFooter,
  Tv as TableHead,
  Pv as TableHeader,
  Dv as TableRow,
  Dw as Tabs,
  Zv as TabsContent,
  Xv as TabsList,
  Kv as TabsTrigger,
  Qv as Textarea,
  Rw as ThemeProvider,
  Jv as TimePicker,
  $d as alertVariants,
  Yd as badgeVariants,
  Qd as buttonVariants,
  E as cn,
  Fw as getOrgMeta,
  Ww as getPersonMeta,
  _w as getSubjectMeta,
  xv as spinnerVariants,
  Cv as statusBadgeVariants,
  Iw as useAsyncData,
  Aw as useTheme
};
