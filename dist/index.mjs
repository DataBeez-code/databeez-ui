"use client";
import { jsxs as E, jsx as f, Fragment as Ue } from "react/jsx-runtime";
import * as d from "react";
import T, { forwardRef as Pa, createElement as Do, useLayoutEffect as Oa, useState as Ve, createContext as Da, useContext as Ta, useCallback as ke, useRef as Bt, useEffect as Ht, useMemo as yn, useId as Fl } from "react";
import * as Rn from "react-dom";
import zl from "react-dom";
function Ra(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ra(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Hr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ra(e)) && (r && (r += " "), r += t);
  return r;
}
const To = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Ro = Hr, mt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Ro(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], m = a == null ? void 0 : a[l];
    if (u === null) return null;
    const h = To(u) || To(m);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [m, h] = u;
    return h === void 0 || (l[m] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: m, className: h, ...p } = u;
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
      m,
      h
    ] : l;
  }, []);
  return Ro(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var Bl = {
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
const $l = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ne = (e, t) => {
  const n = Pa(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => Do(
      "svg",
      {
        ref: l,
        ...Bl,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${$l(e)}`,
        ...c
      },
      [
        ...t.map(([u, m]) => Do(u, m)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, Ll = ne("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Yl = ne("Briefcase", [
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
]), Vr = ne("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]), Aa = ne("Calendar", [
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
]), Hl = ne("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]), An = ne("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), jr = ne("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), Vl = ne("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), jl = ne("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), Ul = ne("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]), _a = ne("Copy", [
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
]), Gl = ne("ExternalLink", [
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }
  ],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]), ql = ne("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]), Xl = ne("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Ao = ne("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), Kl = ne("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]), Zl = ne("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }
  ]
]), Ql = ne("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), Jl = ne("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]), ed = ne("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]), td = ne("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), nd = ne("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]), rd = ne("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]), od = ne("RefreshCw", [
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
]), Ia = ne("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), ad = ne("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), sd = ne("Store", [
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
]), id = ne("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), cd = ne("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]), ld = ne("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]), Ur = ne("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), dd = ne("Warehouse", [
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
]), ud = ne("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]), _n = ne("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), fd = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, md = (e, t) => ({
  classGroupId: e,
  validator: t
}), Wa = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Sn = "-", _o = [], hd = "arbitrary..", pd = (e) => {
  const t = bd(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return gd(s);
      const i = s.split(Sn), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return Fa(i, c, t);
    },
    getConflictingClassGroupIds: (s, i) => {
      if (i) {
        const c = r[s], l = n[s];
        return c ? l ? fd(l, c) : c : l || _o;
      }
      return n[s] || _o;
    }
  };
}, Fa = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], a = n.nextPart.get(o);
  if (a) {
    const l = Fa(e, t + 1, a);
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
}, gd = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? hd + r : void 0;
})(), bd = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return yd(n, t);
}, yd = (e, t) => {
  const n = Wa();
  for (const r in e) {
    const o = e[r];
    Gr(o, n, r, t);
  }
  return n;
}, Gr = (e, t, n, r) => {
  const o = e.length;
  for (let a = 0; a < o; a++) {
    const s = e[a];
    vd(s, t, n, r);
  }
}, vd = (e, t, n, r) => {
  if (typeof e == "string") {
    wd(e, t, n);
    return;
  }
  if (typeof e == "function") {
    xd(e, t, n, r);
    return;
  }
  Sd(e, t, n, r);
}, wd = (e, t, n) => {
  const r = e === "" ? t : za(t, e);
  r.classGroupId = n;
}, xd = (e, t, n, r) => {
  if (kd(e)) {
    Gr(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(md(n, e));
}, Sd = (e, t, n, r) => {
  const o = Object.entries(e), a = o.length;
  for (let s = 0; s < a; s++) {
    const [i, c] = o[s];
    Gr(c, za(t, i), n, r);
  }
}, za = (e, t) => {
  let n = e;
  const r = t.split(Sn), o = r.length;
  for (let a = 0; a < o; a++) {
    const s = r[a];
    let i = n.nextPart.get(s);
    i || (i = Wa(), n.nextPart.set(s, i)), n = i;
  }
  return n;
}, kd = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Cd = (e) => {
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
}, Pr = "!", Io = ":", Nd = [], Wo = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Md = (e) => {
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
        if (b === Io) {
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
    const m = a.length === 0 ? o : o.slice(c);
    let h = m, p = !1;
    m.endsWith(Pr) ? (h = m.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Pr) && (h = m.slice(1), p = !0)
    );
    const x = l && l > c ? l - c : void 0;
    return Wo(a, p, h, x);
  };
  if (t) {
    const o = t + Io, a = r;
    r = (s) => s.startsWith(o) ? a(s.slice(o.length)) : Wo(Nd, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, Ed = (e) => {
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
}, Pd = (e) => ({
  cache: Cd(e.cacheSize),
  parseClassName: Md(e),
  sortModifiers: Ed(e),
  ...pd(e)
}), Od = /\s+/, Dd = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(Od);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const u = i[l], {
      isExternal: m,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: x,
      maybePostfixModifierPosition: g
    } = n(u);
    if (m) {
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
    const y = h.length === 0 ? "" : h.length === 1 ? h[0] : a(h).join(":"), v = p ? y + Pr : y, k = v + S;
    if (s.indexOf(k) > -1)
      continue;
    s.push(k);
    const C = o(S, b);
    for (let w = 0; w < C.length; ++w) {
      const M = C[w];
      s.push(v + M);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Td = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Ba(n)) && (o && (o += " "), o += r);
  return o;
}, Ba = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ba(e[r])) && (n && (n += " "), n += t);
  return n;
}, Rd = (e, ...t) => {
  let n, r, o, a;
  const s = (c) => {
    const l = t.reduce((u, m) => m(u), e());
    return n = Pd(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }, i = (c) => {
    const l = r(c);
    if (l)
      return l;
    const u = Dd(c, n);
    return o(c, u), u;
  };
  return a = s, (...c) => a(Td(...c));
}, Ad = [], pe = (e) => {
  const t = (n) => n[e] || Ad;
  return t.isThemeGetter = !0, t;
}, $a = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, La = /^\((?:(\w[\w-]*):)?(.+)\)$/i, _d = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Id = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wd = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fd = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, zd = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Bd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, st = (e) => _d.test(e), K = (e) => !!e && !Number.isNaN(Number(e)), it = (e) => !!e && Number.isInteger(Number(e)), dr = (e) => e.endsWith("%") && K(e.slice(0, -1)), Ke = (e) => Id.test(e), Ya = () => !0, $d = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Wd.test(e) && !Fd.test(e)
), qr = () => !1, Ld = (e) => zd.test(e), Yd = (e) => Bd.test(e), Hd = (e) => !A(e) && !_(e), Vd = (e) => ht(e, ja, qr), A = (e) => $a.test(e), wt = (e) => ht(e, Ua, $d), Fo = (e) => ht(e, Qd, K), jd = (e) => ht(e, qa, Ya), Ud = (e) => ht(e, Ga, qr), zo = (e) => ht(e, Ha, qr), Gd = (e) => ht(e, Va, Yd), dn = (e) => ht(e, Xa, Ld), _ = (e) => La.test(e), Kt = (e) => Ot(e, Ua), qd = (e) => Ot(e, Ga), Bo = (e) => Ot(e, Ha), Xd = (e) => Ot(e, ja), Kd = (e) => Ot(e, Va), un = (e) => Ot(e, Xa, !0), Zd = (e) => Ot(e, qa, !0), ht = (e, t, n) => {
  const r = $a.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ot = (e, t, n = !1) => {
  const r = La.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Ha = (e) => e === "position" || e === "percentage", Va = (e) => e === "image" || e === "url", ja = (e) => e === "length" || e === "size" || e === "bg-size", Ua = (e) => e === "length", Qd = (e) => e === "number", Ga = (e) => e === "family-name", qa = (e) => e === "number" || e === "weight", Xa = (e) => e === "shadow", Jd = () => {
  const e = pe("color"), t = pe("font"), n = pe("text"), r = pe("font-weight"), o = pe("tracking"), a = pe("leading"), s = pe("breakpoint"), i = pe("container"), c = pe("spacing"), l = pe("radius"), u = pe("shadow"), m = pe("inset-shadow"), h = pe("text-shadow"), p = pe("drop-shadow"), x = pe("blur"), g = pe("perspective"), b = pe("aspect"), S = pe("ease"), y = pe("animate"), v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
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
  ], C = () => [...k(), _, A], w = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], N = () => [_, A, c], O = () => [st, "full", "auto", ...N()], R = () => [it, "none", "subgrid", _, A], W = () => ["auto", {
    span: ["full", it, _, A]
  }, it, _, A], H = () => [it, "auto", _, A], V = () => ["auto", "min", "max", "fr", _, A], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], X = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...N()], j = () => [st, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], B = () => [st, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], U = () => [st, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], D = () => [e, _, A], fe = () => [...k(), Bo, zo, {
    position: [_, A]
  }], Pe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], xe = () => ["auto", "cover", "contain", Xd, Vd, {
    size: [_, A]
  }], ge = () => [dr, Kt, wt], le = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    _,
    A
  ], de = () => ["", K, Kt, wt], z = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [K, dr, Bo, zo], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    x,
    _,
    A
  ], Q = () => ["none", K, _, A], J = () => ["none", K, _, A], he = () => [K, _, A], be = () => [st, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ke],
      breakpoint: [Ke],
      color: [Ya],
      container: [Ke],
      "drop-shadow": [Ke],
      ease: ["in", "out", "in-out"],
      font: [Hd],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ke],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ke],
      shadow: [Ke],
      spacing: ["px", K],
      text: [Ke],
      "text-shadow": [Ke],
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
        aspect: ["auto", "square", st, A, _, b]
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
        columns: [K, A, _, i]
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
        object: C()
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
        inset: O()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": O()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": O()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": O(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: O()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": O(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: O()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": O()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": O()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: O()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: O()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: O()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: O()
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
        z: [it, "auto", _, A]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [st, "full", "auto", i, ...N()]
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
        flex: [K, st, "auto", "initial", "none", A]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", K, _, A]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", K, _, A]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [it, "first", "last", "none", _, A]
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
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...X(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...X()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...X(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...X(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...X()]
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
        m: I()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: I()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: I()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: I()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: I()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: I()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: I()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: I()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: I()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: I()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: I()
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
        inline: ["auto", ...B()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...B()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...B()]
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
        text: ["base", n, Kt, wt]
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
        font: [r, Zd, jd]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", dr, A]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qd, Ud, t]
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
        tracking: [o, _, A]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [K, "none", _, Fo]
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
        "list-image": ["none", _, A]
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
        list: ["disc", "decimal", "none", _, A]
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
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
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
        decoration: [K, "from-font", "auto", _, wt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [K, "auto", _, A]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _, A]
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
        content: ["none", _, A]
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
        bg: Pe()
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
          }, it, _, A],
          radial: ["", _, A],
          conic: [it, _, A]
        }, Kd, Gd]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
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
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
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
        border: D()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": D()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
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
        "outline-offset": [K, _, A]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", K, Kt, wt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
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
          un,
          dn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, un, dn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
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
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [K, wt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
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
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, un, dn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [K, _, A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ae(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        "mask-linear": [K]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [_, A]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
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
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [K]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
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
        mask: Pe()
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
        mask: ["none", _, A]
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
          _,
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
        brightness: [K, _, A]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [K, _, A]
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
          un,
          dn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", K, _, A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [K, _, A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", K, _, A]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [K, _, A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", K, _, A]
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
          _,
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
        "backdrop-brightness": [K, _, A]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [K, _, A]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", K, _, A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [K, _, A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", K, _, A]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [K, _, A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [K, _, A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", K, _, A]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", _, A]
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
        duration: [K, "initial", _, A]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", S, _, A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [K, _, A]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, _, A]
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
        perspective: [g, _, A]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": C()
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
        transform: [_, A, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: C()
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
        accent: D()
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
        caret: D()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _, A]
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
        "will-change": ["auto", "scroll", "contents", "transform", _, A]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [K, Kt, wt, Fo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
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
}, eu = /* @__PURE__ */ Rd(Jd);
function P(...e) {
  return eu(Hr(e));
}
const tu = mt(
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
), nu = {
  default: Ao,
  info: Ao,
  success: Hl,
  warning: Ll,
  destructive: ud
}, ru = d.forwardRef(
  ({ className: e, variant: t = "default", title: n, children: r, ...o }, a) => {
    const s = nu[t ?? "default"];
    return /* @__PURE__ */ E(
      "div",
      {
        ref: a,
        role: "alert",
        className: P(tu({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ f(s, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ E("div", { className: "flex-1 min-w-0", children: [
            n && /* @__PURE__ */ f("p", { className: "font-semibold mb-0.5", children: n }),
            r && /* @__PURE__ */ f("p", { className: "leading-relaxed", children: r })
          ] })
        ]
      }
    );
  }
);
ru.displayName = "Alert";
function ou({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ f("ellipse", { cx: "24", cy: "22", rx: "7", ry: "5.5", fill: "#F59E0B" }),
    /* @__PURE__ */ f("rect", { x: "20", y: "19", width: "8", height: "2", rx: "1", fill: "#92400E" }),
    /* @__PURE__ */ f("rect", { x: "20", y: "23", width: "8", height: "2", rx: "1", fill: "#92400E" }),
    /* @__PURE__ */ f("ellipse", { cx: "19", cy: "17", rx: "4", ry: "3", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "0.8", opacity: "0.8" }),
    /* @__PURE__ */ f("ellipse", { cx: "29", cy: "17", rx: "4", ry: "3", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "0.8", opacity: "0.8" }),
    /* @__PURE__ */ f("line", { x1: "22", y1: "17", x2: "19", y2: "12", stroke: "#D97706", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "26", y1: "17", x2: "29", y2: "12", stroke: "#D97706", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("circle", { cx: "19", cy: "12", r: "1", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "29", cy: "12", r: "1", fill: "#D97706" }),
    /* @__PURE__ */ f("path", { d: "M31 22l4 2-4 2", fill: "#D97706" })
  ] });
}
function au({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ f("circle", { cx: "16", cy: "28", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "24", cy: "14", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "32", cy: "24", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "20", cy: "20", r: "2.5", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "28", cy: "32", r: "2.5", fill: "#D97706" }),
    /* @__PURE__ */ f("line", { x1: "16", y1: "28", x2: "20", y2: "20", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "20", y1: "20", x2: "24", y2: "14", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "14", x2: "32", y2: "24", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "32", y1: "24", x2: "28", y2: "32", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "28", y1: "32", x2: "16", y2: "28", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ f("line", { x1: "20", y1: "20", x2: "32", y2: "24", stroke: "#D97706", strokeWidth: "1", opacity: "0.5" })
  ] });
}
function su({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ f("path", { d: "M24 12c-4.4 0-8 3.6-8 8 0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "24", cy: "20", r: "3.5", fill: "#FFFBEB" }),
    /* @__PURE__ */ f("line", { x1: "12", y1: "30", x2: "36", y2: "30", stroke: "#D97706", strokeWidth: "1", opacity: "0.4" }),
    /* @__PURE__ */ f("line", { x1: "14", y1: "34", x2: "34", y2: "34", stroke: "#D97706", strokeWidth: "1", opacity: "0.3" }),
    /* @__PURE__ */ f("line", { x1: "18", y1: "30", x2: "16", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" }),
    /* @__PURE__ */ f("line", { x1: "30", y1: "30", x2: "32", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" })
  ] });
}
function iu({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 3L41 13v22L24 45 7 35V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2" }),
    /* @__PURE__ */ f("path", { d: "M24 10l11 6.5v13L24 36l-11-6.5v-13z", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "1", opacity: "0.6" }),
    /* @__PURE__ */ f("circle", { cx: "22", cy: "22", r: "7.5", stroke: "#D97706", strokeWidth: "2.2" }),
    /* @__PURE__ */ f("line", { x1: "27.5", y1: "27.5", x2: "34", y2: "34", stroke: "#D97706", strokeWidth: "2.4", strokeLinecap: "round" }),
    /* @__PURE__ */ f("circle", { cx: "22", cy: "22", r: "2", fill: "#F59E0B" }),
    /* @__PURE__ */ f("line", { x1: "22", y1: "15.5", x2: "22", y2: "18", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "22", y1: "26", x2: "22", y2: "28.5", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "15.5", y1: "22", x2: "18", y2: "22", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ f("line", { x1: "26", y1: "22", x2: "28.5", y2: "22", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" })
  ] });
}
function cu({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ f("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", stroke: "#F59E0B", strokeWidth: "2.5", fill: "#FEF3C7" }),
    /* @__PURE__ */ f("path", { d: "M24 12L32.5 17v10L24 32l-8.5-5V17z", stroke: "#F59E0B", strokeWidth: "1.5", fill: "#FFFBEB" }),
    /* @__PURE__ */ f("circle", { cx: "24", cy: "22", r: "3.5", fill: "#F59E0B" }),
    /* @__PURE__ */ f("circle", { cx: "16", cy: "17", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "32", cy: "17", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "16", cy: "27", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("circle", { cx: "32", cy: "27", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "16", y2: "17", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "32", y2: "17", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "16", y2: "27", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "24", y1: "22", x2: "32", y2: "27", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ f("line", { x1: "16", y1: "17", x2: "16", y2: "27", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.5" }),
    /* @__PURE__ */ f("line", { x1: "32", y1: "17", x2: "32", y2: "27", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.5" })
  ] });
}
const Ka = {
  swarm: { label: "Swarm", component: ou },
  beegraph: { label: "BeeGraph", component: au },
  beemap: { label: "BeeMap", component: su },
  beescout: { label: "BeeScout", component: iu },
  haive: { label: "Haive", component: cu }
}, z1 = Object.keys(Ka);
function B1({ slug: e, size: t = 48, className: n, fallback: r }) {
  const o = Ka[e];
  if (o) {
    const s = o.component;
    return /* @__PURE__ */ f(s, { size: t, className: n });
  }
  const a = (r ?? e ?? "?").charAt(0).toUpperCase();
  return /* @__PURE__ */ f(
    "div",
    {
      className: `rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-2xl text-amber-600 shrink-0 ${n ?? ""}`,
      style: { width: t, height: t },
      children: a
    }
  );
}
function $1({ label: e, value: t, className: n, ...r }) {
  return /* @__PURE__ */ E("div", { className: P("flex flex-col gap-0.5", n), ...r, children: [
    /* @__PURE__ */ f("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ f("span", { className: "text-sm font-medium break-words text-text-base", children: t ?? "—" })
  ] });
}
function L1({ title: e, children: t, className: n, ...r }) {
  return /* @__PURE__ */ E("div", { className: P("flex flex-col gap-3", n), ...r, children: [
    /* @__PURE__ */ f("h3", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1", children: e }),
    /* @__PURE__ */ f("div", { className: "flex flex-col gap-2", children: t })
  ] });
}
const lu = mt(
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
function Y1({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f("div", { className: P(lu({ variant: t }), e), ...n });
}
function $o(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Dt(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = $o(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : $o(e[o], null);
        }
      };
  };
}
function re(...e) {
  return d.useCallback(Dt(...e), e);
}
var du = Symbol.for("react.lazy"), kn = d[" use ".trim().toString()];
function uu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Za(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === du && "_payload" in e && uu(e._payload);
}
// @__NO_SIDE_EFFECTS__
function fu(e) {
  const t = /* @__PURE__ */ hu(e), n = d.forwardRef((r, o) => {
    let { children: a, ...s } = r;
    Za(a) && typeof kn == "function" && (a = kn(a._payload));
    const i = d.Children.toArray(a), c = i.find(gu);
    if (c) {
      const l = c.props.children, u = i.map((m) => m === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var mu = /* @__PURE__ */ fu("Slot");
// @__NO_SIDE_EFFECTS__
function hu(e) {
  const t = d.forwardRef((n, r) => {
    let { children: o, ...a } = n;
    if (Za(o) && typeof kn == "function" && (o = kn(o._payload)), d.isValidElement(o)) {
      const s = yu(o), i = bu(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Dt(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var pu = Symbol("radix.slottable");
function gu(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === pu;
}
function bu(e, t) {
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
function yu(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const vu = mt(
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
), Qa = d.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => /* @__PURE__ */ f(
    r ? mu : "button",
    {
      className: P(vu({ variant: t, size: n, className: e })),
      ref: a,
      ...o
    }
  )
);
Qa.displayName = "Button";
const wu = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "div",
  {
    ref: n,
    className: P(
      "rounded-xl border border-border bg-surface text-text-base shadow-sm",
      e
    ),
    ...t
  }
));
wu.displayName = "Card";
const xu = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: P("flex flex-col space-y-1.5 p-6", e), ...t }));
xu.displayName = "CardHeader";
const Su = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "h3",
  {
    ref: n,
    className: P("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
Su.displayName = "CardTitle";
const ku = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "p",
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
ku.displayName = "CardDescription";
const Cu = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: P("p-6 pt-0", e), ...t }));
Cu.displayName = "CardContent";
const Nu = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "div",
  {
    ref: n,
    className: P("flex items-center p-6 pt-0", e),
    ...t
  }
));
Nu.displayName = "CardFooter";
const Mu = d.forwardRef(
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
    }, m = (p) => {
      p.key === "Enter" && !p.shiftKey && (p.preventDefault(), u());
    }, h = () => {
      const p = l.current;
      p && (p.style.height = "auto", p.style.height = `${Math.min(p.scrollHeight, o)}px`);
    };
    return /* @__PURE__ */ E("div", { className: P("border-t border-border bg-surface px-4 py-3", r), children: [
      /* @__PURE__ */ E("div", { className: "max-w-4xl mx-auto flex gap-3 items-end", children: [
        /* @__PURE__ */ f(
          "textarea",
          {
            ref: l,
            value: s,
            onChange: (p) => i(p.target.value),
            onKeyDown: m,
            onInput: h,
            placeholder: n,
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
          Qa,
          {
            onClick: u,
            disabled: t || !s.trim(),
            size: "icon",
            className: "h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg",
            children: /* @__PURE__ */ f(ad, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ f("p", { className: "text-center text-xs text-text-muted mt-2", children: "Invio per inviare · Shift+Invio per andare a capo" })
    ] });
  }
);
Mu.displayName = "ChatInput";
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Eu(e, t) {
  const n = d.createContext(t), r = (a) => {
    const { children: s, ...i } = a, c = d.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ f(n.Provider, { value: c, children: s });
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
function rt(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = d.createContext(s), c = n.length;
    n = [...n, s];
    const l = (m) => {
      var S;
      const { scope: h, children: p, ...x } = m, g = ((S = h == null ? void 0 : h[e]) == null ? void 0 : S[c]) || i, b = d.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ f(g.Provider, { value: b, children: p });
    };
    l.displayName = a + "Provider";
    function u(m, h) {
      var g;
      const p = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || i, x = d.useContext(p);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
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
  return o.scopeName = e, [r, Pu(o, ...t)];
}
function Pu(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: c, scopeName: l }) => {
        const m = c(a)[`__scope${l}`];
        return { ...i, ...m };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function Ou(e) {
  const t = /* @__PURE__ */ Du(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(Ru);
    if (c) {
      const l = c.props.children, u = i.map((m) => m === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Du(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = _u(o), i = Au(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Dt(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Tu = Symbol("radix.slottable");
function Ru(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Tu;
}
function Au(e, t) {
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
function _u(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Iu = [
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
], q = Iu.reduce((e, t) => {
  const n = /* @__PURE__ */ Ou(`Primitive.${t}`), r = d.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(c, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Wu(e, t) {
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
function Fu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var zu = "DismissableLayer", Or = "dismissableLayer.update", Bu = "dismissableLayer.pointerDownOutside", $u = "dismissableLayer.focusOutside", Lo, Ja = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), In = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...c
    } = e, l = d.useContext(Ja), [u, m] = d.useState(null), h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = d.useState({}), x = re(t, (M) => m(M)), g = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), S = g.indexOf(b), y = u ? g.indexOf(u) : -1, v = l.layersWithOutsidePointerEventsDisabled.size > 0, k = y >= S, C = Hu((M) => {
      const N = M.target, O = [...l.branches].some((R) => R.contains(N));
      !k || O || (o == null || o(M), s == null || s(M), M.defaultPrevented || i == null || i());
    }, h), w = Vu((M) => {
      const N = M.target;
      [...l.branches].some((R) => R.contains(N)) || (a == null || a(M), s == null || s(M), M.defaultPrevented || i == null || i());
    }, h);
    return Fu((M) => {
      y === l.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && i && (M.preventDefault(), i()));
    }, h), d.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Lo = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Yo(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Lo);
        };
    }, [u, h, n, l]), d.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Yo());
    }, [u, l]), d.useEffect(() => {
      const M = () => p({});
      return document.addEventListener(Or, M), () => document.removeEventListener(Or, M);
    }, []), /* @__PURE__ */ f(
      q.div,
      {
        ...c,
        ref: x,
        style: {
          pointerEvents: v ? k ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, w.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, w.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
In.displayName = zu;
var Lu = "DismissableLayerBranch", Yu = d.forwardRef((e, t) => {
  const n = d.useContext(Ja), r = d.useRef(null), o = re(t, r);
  return d.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ f(q.div, { ...e, ref: o });
});
Yu.displayName = Lu;
function Hu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          es(
            Bu,
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
function Vu(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && es($u, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Yo() {
  const e = new CustomEvent(Or);
  document.dispatchEvent(e);
}
function es(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Wu(o, a) : o.dispatchEvent(a);
}
var ur = 0;
function Xr() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Ho()), document.body.insertAdjacentElement("beforeend", e[1] ?? Ho()), ur++, () => {
      ur === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ur--;
    };
  }, []);
}
function Ho() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var fr = "focusScope.autoFocusOnMount", mr = "focusScope.autoFocusOnUnmount", Vo = { bubbles: !1, cancelable: !0 }, ju = "FocusScope", Wn = d.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, c] = d.useState(null), l = we(o), u = we(a), m = d.useRef(null), h = re(t, (g) => c(g)), p = d.useRef({
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
        const k = v.target;
        i.contains(k) ? m.current = k : lt(m.current, { select: !0 });
      }, b = function(v) {
        if (p.paused || !i) return;
        const k = v.relatedTarget;
        k !== null && (i.contains(k) || lt(m.current, { select: !0 }));
      }, S = function(v) {
        if (document.activeElement === document.body)
          for (const C of v)
            C.removedNodes.length > 0 && lt(i);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const y = new MutationObserver(S);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), y.disconnect();
      };
    }
  }, [r, i, p.paused]), d.useEffect(() => {
    if (i) {
      Uo.add(p);
      const g = document.activeElement;
      if (!i.contains(g)) {
        const S = new CustomEvent(fr, Vo);
        i.addEventListener(fr, l), i.dispatchEvent(S), S.defaultPrevented || (Uu(Zu(ts(i)), { select: !0 }), document.activeElement === g && lt(i));
      }
      return () => {
        i.removeEventListener(fr, l), setTimeout(() => {
          const S = new CustomEvent(mr, Vo);
          i.addEventListener(mr, u), i.dispatchEvent(S), S.defaultPrevented || lt(g ?? document.body, { select: !0 }), i.removeEventListener(mr, u), Uo.remove(p);
        }, 0);
      };
    }
  }, [i, l, u, p]);
  const x = d.useCallback(
    (g) => {
      if (!n && !r || p.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, S = document.activeElement;
      if (b && S) {
        const y = g.currentTarget, [v, k] = Gu(y);
        v && k ? !g.shiftKey && S === k ? (g.preventDefault(), n && lt(v, { select: !0 })) : g.shiftKey && S === v && (g.preventDefault(), n && lt(k, { select: !0 })) : S === y && g.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ f(q.div, { tabIndex: -1, ...s, ref: h, onKeyDown: x });
});
Wn.displayName = ju;
function Uu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (lt(r, { select: t }), document.activeElement !== n) return;
}
function Gu(e) {
  const t = ts(e), n = jo(t, e), r = jo(t.reverse(), e);
  return [n, r];
}
function ts(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function jo(e, t) {
  for (const n of e)
    if (!qu(n, { upTo: t })) return n;
}
function qu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Xu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function lt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Xu(e) && t && e.select();
  }
}
var Uo = Ku();
function Ku() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Go(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Go(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Go(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Zu(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ye = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
}, Qu = d[" useId ".trim().toString()] || (() => {
}), Ju = 0;
function et(e) {
  const [t, n] = d.useState(Qu());
  return ye(() => {
    n((r) => r ?? String(Ju++));
  }, [e]), t ? `radix-${t}` : "";
}
const ef = ["top", "right", "bottom", "left"], dt = Math.min, Ne = Math.max, Cn = Math.round, fn = Math.floor, je = (e) => ({
  x: e,
  y: e
}), tf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dr(e, t, n) {
  return Ne(e, dt(t, n));
}
function tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nt(e) {
  return e.split("-")[0];
}
function Gt(e) {
  return e.split("-")[1];
}
function Kr(e) {
  return e === "x" ? "y" : "x";
}
function Zr(e) {
  return e === "y" ? "height" : "width";
}
function Ye(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Qr(e) {
  return Kr(Ye(e));
}
function nf(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gt(e), o = Qr(e), a = Zr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Nn(s)), [s, Nn(s)];
}
function rf(e) {
  const t = Nn(e);
  return [Tr(e), t, Tr(t)];
}
function Tr(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const qo = ["left", "right"], Xo = ["right", "left"], of = ["top", "bottom"], af = ["bottom", "top"];
function sf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Xo : qo : t ? qo : Xo;
    case "left":
    case "right":
      return t ? of : af;
    default:
      return [];
  }
}
function cf(e, t, n, r) {
  const o = Gt(e);
  let a = sf(nt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Tr)))), a;
}
function Nn(e) {
  const t = nt(e);
  return tf[t] + e.slice(t.length);
}
function lf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ns(e) {
  return typeof e != "number" ? lf(e) : {
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
function Ko(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = Ye(t), s = Qr(t), i = Zr(s), c = nt(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
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
        y: m
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Gt(t)) {
    case "start":
      p[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function df(e, t) {
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
    elementContext: m = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = tt(t, e), x = ns(p), b = i[h ? m === "floating" ? "reference" : "floating" : m], S = Mn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), y = m === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), k = await (a.isElement == null ? void 0 : a.isElement(v)) ? await (a.getScale == null ? void 0 : a.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Mn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: v,
    strategy: c
  }) : y);
  return {
    top: (S.top - C.top + x.top) / k.y,
    bottom: (C.bottom - S.bottom + x.bottom) / k.y,
    left: (S.left - C.left + x.left) / k.x,
    right: (C.right - S.right + x.right) / k.x
  };
}
const uf = 50, ff = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = s.detectOverflow ? s : {
    ...s,
    detectOverflow: df
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: m
  } = Ko(l, r, c), h = r, p = 0;
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
      y: k,
      data: C,
      reset: w
    } = await y({
      x: u,
      y: m,
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
    u = v ?? u, m = k ?? m, x[S] = {
      ...x[S],
      ...C
    }, w && p < uf && (p++, typeof w == "object" && (w.placement && (h = w.placement), w.rects && (l = w.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : w.rects), {
      x: u,
      y: m
    } = Ko(l, h, c)), g = -1);
  }
  return {
    x: u,
    y: m,
    placement: h,
    strategy: o,
    middlewareData: x
  };
}, mf = (e) => ({
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
    } = tt(e, t) || {};
    if (l == null)
      return {};
    const m = ns(u), h = {
      x: n,
      y: r
    }, p = Qr(o), x = Zr(p), g = await s.getDimensions(l), b = p === "y", S = b ? "top" : "left", y = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", k = a.reference[x] + a.reference[p] - h[p] - a.floating[x], C = h[p] - a.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let M = w ? w[v] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(w))) && (M = i.floating[v] || a.floating[x]);
    const N = k / 2 - C / 2, O = M / 2 - g[x] / 2 - 1, R = dt(m[S], O), W = dt(m[y], O), H = R, V = M - g[x] - W, $ = M / 2 - g[x] / 2 + N, X = Dr(H, $, V), I = !c.arrow && Gt(o) != null && $ !== X && a.reference[x] / 2 - ($ < H ? R : W) - g[x] / 2 < 0, j = I ? $ < H ? $ - H : $ - V : 0;
    return {
      [p]: h[p] + j,
      data: {
        [p]: X,
        centerOffset: $ - X - j,
        ...I && {
          alignmentOffset: j
        }
      },
      reset: I
    };
  }
}), hf = function(e) {
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
        crossAxis: m = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: g = !0,
        ...b
      } = tt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const S = nt(o), y = Ye(i), v = nt(i) === i, k = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), C = h || (v || !g ? [Nn(i)] : rf(i)), w = x !== "none";
      !h && w && C.push(...cf(i, g, x, k));
      const M = [i, ...C], N = await c.detectOverflow(t, b), O = [];
      let R = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(N[S]), m) {
        const $ = nf(o, s, k);
        O.push(N[$[0]], N[$[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: O
      }], !O.every(($) => $ <= 0)) {
        var W, H;
        const $ = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, X = M[$];
        if (X && (!(m === "alignment" ? y !== Ye(X) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((B) => Ye(B.placement) === y ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: R
            },
            reset: {
              placement: X
            }
          };
        let I = (H = R.filter((j) => j.overflows[0] <= 0).sort((j, B) => j.overflows[1] - B.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!I)
          switch (p) {
            case "bestFit": {
              var V;
              const j = (V = R.filter((B) => {
                if (w) {
                  const U = Ye(B.placement);
                  return U === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((U) => U > 0).reduce((U, D) => U + D, 0)]).sort((B, U) => B[1] - U[1])[0]) == null ? void 0 : V[0];
              j && (I = j);
              break;
            }
            case "initialPlacement":
              I = i;
              break;
          }
        if (o !== I)
          return {
            reset: {
              placement: I
            }
          };
      }
      return {};
    }
  };
};
function Zo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Qo(e) {
  return ef.some((t) => e[t] >= 0);
}
const pf = function(e) {
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
      } = tt(e, t);
      switch (o) {
        case "referenceHidden": {
          const s = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), i = Zo(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Qo(i)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), i = Zo(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Qo(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, rs = /* @__PURE__ */ new Set(["left", "top"]);
async function gf(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = nt(n), i = Gt(n), c = Ye(n) === "y", l = rs.has(s) ? -1 : 1, u = a && c ? -1 : 1, m = tt(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: x
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return i && typeof x == "number" && (p = i === "end" ? x * -1 : x), c ? {
    x: p * u,
    y: h * l
  } : {
    x: h * l,
    y: p * u
  };
}
const bf = function(e) {
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
      } = t, c = await gf(t, e);
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
}, yf = function(e) {
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
      } = tt(e, t), u = {
        x: n,
        y: r
      }, m = await a.detectOverflow(t, l), h = Ye(nt(o)), p = Kr(h);
      let x = u[p], g = u[h];
      if (s) {
        const S = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", v = x + m[S], k = x - m[y];
        x = Dr(v, x, k);
      }
      if (i) {
        const S = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", v = g + m[S], k = g - m[y];
        g = Dr(v, g, k);
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
}, vf = function(e) {
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
      } = tt(e, t), u = {
        x: n,
        y: r
      }, m = Ye(o), h = Kr(m);
      let p = u[h], x = u[m];
      const g = tt(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const v = h === "y" ? "height" : "width", k = a.reference[h] - a.floating[v] + b.mainAxis, C = a.reference[h] + a.reference[v] - b.mainAxis;
        p < k ? p = k : p > C && (p = C);
      }
      if (l) {
        var S, y;
        const v = h === "y" ? "width" : "height", k = rs.has(nt(o)), C = a.reference[m] - a.floating[v] + (k && ((S = s.offset) == null ? void 0 : S[m]) || 0) + (k ? 0 : b.crossAxis), w = a.reference[m] + a.reference[v] + (k ? 0 : ((y = s.offset) == null ? void 0 : y[m]) || 0) - (k ? b.crossAxis : 0);
        x < C ? x = C : x > w && (x = w);
      }
      return {
        [h]: p,
        [m]: x
      };
    }
  };
}, wf = function(e) {
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
      } = tt(e, t), u = await s.detectOverflow(t, l), m = nt(o), h = Gt(o), p = Ye(o) === "y", {
        width: x,
        height: g
      } = a.floating;
      let b, S;
      m === "top" || m === "bottom" ? (b = m, S = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (S = m, b = h === "end" ? "top" : "bottom");
      const y = g - u.top - u.bottom, v = x - u.left - u.right, k = dt(g - u[b], y), C = dt(x - u[S], v), w = !t.middlewareData.shift;
      let M = k, N = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = v), (r = t.middlewareData.shift) != null && r.enabled.y && (M = y), w && !h) {
        const R = Ne(u.left, 0), W = Ne(u.right, 0), H = Ne(u.top, 0), V = Ne(u.bottom, 0);
        p ? N = x - 2 * (R !== 0 || W !== 0 ? R + W : Ne(u.left, u.right)) : M = g - 2 * (H !== 0 || V !== 0 ? H + V : Ne(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
        availableHeight: M
      });
      const O = await s.getDimensions(i.floating);
      return x !== O.width || g !== O.height ? {
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
function qt(e) {
  return os(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ge(e) {
  var t;
  return (t = (os(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function os(e) {
  return Fn() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function _e(e) {
  return Fn() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function ot(e) {
  return Fn() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function Jo(e) {
  return !Fn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function nn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function xf(e) {
  return /^(table|td|th)$/.test(qt(e));
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
const Sf = /transform|translate|scale|rotate|perspective|filter/, kf = /paint|layout|strict|content/, xt = (e) => !!e && e !== "none";
let hr;
function Jr(e) {
  const t = _e(e) ? Ie(e) : e;
  return xt(t.transform) || xt(t.translate) || xt(t.scale) || xt(t.rotate) || xt(t.perspective) || !eo() && (xt(t.backdropFilter) || xt(t.filter)) || Sf.test(t.willChange || "") || kf.test(t.contain || "");
}
function Cf(e) {
  let t = ut(e);
  for (; ot(t) && !Vt(t); ) {
    if (Jr(t))
      return t;
    if (zn(t))
      return null;
    t = ut(t);
  }
  return null;
}
function eo() {
  return hr == null && (hr = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), hr;
}
function Vt(e) {
  return /^(html|body|#document)$/.test(qt(e));
}
function Ie(e) {
  return Me(e).getComputedStyle(e);
}
function Bn(e) {
  return _e(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ut(e) {
  if (qt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jo(e) && e.host || // Fallback.
    Ge(e)
  );
  return Jo(t) ? t.host : t;
}
function as(e) {
  const t = ut(e);
  return Vt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ot(t) && nn(t) ? t : as(t);
}
function Jt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = as(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Me(o);
  if (a) {
    const i = Rr(s);
    return t.concat(s, s.visualViewport || [], nn(o) ? o : [], i && n ? Jt(i) : []);
  } else
    return t.concat(o, Jt(o, [], n));
}
function Rr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ss(e) {
  const t = Ie(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ot(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Cn(n) !== a || Cn(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function to(e) {
  return _e(e) ? e : e.contextElement;
}
function $t(e) {
  const t = to(e);
  if (!ot(t))
    return je(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ss(t);
  let s = (a ? Cn(n.width) : n.width) / r, i = (a ? Cn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Nf = /* @__PURE__ */ je(0);
function is(e) {
  const t = Me(e);
  return !eo() || !t.visualViewport ? Nf : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Mf(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Me(e) ? !1 : t;
}
function Ct(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = to(e);
  let s = je(1);
  t && (r ? _e(r) && (s = $t(r)) : s = $t(e));
  const i = Mf(a, n, r) ? is(a) : je(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, u = o.width / s.x, m = o.height / s.y;
  if (a) {
    const h = Me(a), p = r && _e(r) ? Me(r) : r;
    let x = h, g = Rr(x);
    for (; g && r && p !== x; ) {
      const b = $t(g), S = g.getBoundingClientRect(), y = Ie(g), v = S.left + (g.clientLeft + parseFloat(y.paddingLeft)) * b.x, k = S.top + (g.clientTop + parseFloat(y.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, m *= b.y, c += v, l += k, x = Me(g), g = Rr(x);
    }
  }
  return Mn({
    width: u,
    height: m,
    x: c,
    y: l
  });
}
function $n(e, t) {
  const n = Bn(e).scrollLeft;
  return t ? t.left + n : Ct(Ge(e)).left + n;
}
function cs(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - $n(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Ef(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Ge(r), i = t ? zn(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = je(1);
  const u = je(0), m = ot(r);
  if ((m || !m && !a) && ((qt(r) !== "body" || nn(s)) && (c = Bn(r)), m)) {
    const p = Ct(r);
    l = $t(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const h = s && !m && !a ? cs(s, c) : je(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + h.y
  };
}
function Pf(e) {
  return Array.from(e.getClientRects());
}
function Of(e) {
  const t = Ge(e), n = Bn(e), r = e.ownerDocument.body, o = Ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + $n(e);
  const i = -n.scrollTop;
  return Ie(r).direction === "rtl" && (s += Ne(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const ea = 25;
function Df(e, t) {
  const n = Me(e), r = Ge(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = eo();
    (!u || u && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = $n(r);
  if (l <= 0) {
    const u = r.ownerDocument, m = u.body, h = getComputedStyle(m), p = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, x = Math.abs(r.clientWidth - m.clientWidth - p);
    x <= ea && (a -= x);
  } else l <= ea && (a += l);
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function Tf(e, t) {
  const n = Ct(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ot(e) ? $t(e) : je(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function ta(e, t, n) {
  let r;
  if (t === "viewport")
    r = Df(e, n);
  else if (t === "document")
    r = Of(Ge(e));
  else if (_e(t))
    r = Tf(t, n);
  else {
    const o = is(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Mn(r);
}
function ls(e, t) {
  const n = ut(e);
  return n === t || !_e(n) || Vt(n) ? !1 : Ie(n).position === "fixed" || ls(n, t);
}
function Rf(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Jt(e, [], !1).filter((i) => _e(i) && qt(i) !== "body"), o = null;
  const a = Ie(e).position === "fixed";
  let s = a ? ut(e) : e;
  for (; _e(s) && !Vt(s); ) {
    const i = Ie(s), c = Jr(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || nn(s) && !c && ls(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = ut(s);
  }
  return t.set(e, r), r;
}
function Af(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? zn(t) ? [] : Rf(t, this._c) : [].concat(n), r], i = ta(t, s[0], o);
  let c = i.top, l = i.right, u = i.bottom, m = i.left;
  for (let h = 1; h < s.length; h++) {
    const p = ta(t, s[h], o);
    c = Ne(p.top, c), l = dt(p.right, l), u = dt(p.bottom, u), m = Ne(p.left, m);
  }
  return {
    width: l - m,
    height: u - c,
    x: m,
    y: c
  };
}
function _f(e) {
  const {
    width: t,
    height: n
  } = ss(e);
  return {
    width: t,
    height: n
  };
}
function If(e, t, n) {
  const r = ot(t), o = Ge(t), a = n === "fixed", s = Ct(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = je(0);
  function l() {
    c.x = $n(o);
  }
  if (r || !r && !a)
    if ((qt(t) !== "body" || nn(o)) && (i = Bn(t)), r) {
      const p = Ct(t, !0, a, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? cs(o, i) : je(0), m = s.left + i.scrollLeft - c.x - u.x, h = s.top + i.scrollTop - c.y - u.y;
  return {
    x: m,
    y: h,
    width: s.width,
    height: s.height
  };
}
function pr(e) {
  return Ie(e).position === "static";
}
function na(e, t) {
  if (!ot(e) || Ie(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ge(e) === n && (n = n.ownerDocument.body), n;
}
function ds(e, t) {
  const n = Me(e);
  if (zn(e))
    return n;
  if (!ot(e)) {
    let o = ut(e);
    for (; o && !Vt(o); ) {
      if (_e(o) && !pr(o))
        return o;
      o = ut(o);
    }
    return n;
  }
  let r = na(e, t);
  for (; r && xf(r) && pr(r); )
    r = na(r, t);
  return r && Vt(r) && pr(r) && !Jr(r) ? n : r || Cf(e) || n;
}
const Wf = async function(e) {
  const t = this.getOffsetParent || ds, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: If(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Ff(e) {
  return Ie(e).direction === "rtl";
}
const zf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ef,
  getDocumentElement: Ge,
  getClippingRect: Af,
  getOffsetParent: ds,
  getElementRects: Wf,
  getClientRects: Pf,
  getDimensions: _f,
  getScale: $t,
  isElement: _e,
  isRTL: Ff
};
function us(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Bf(e, t) {
  let n = null, r;
  const o = Ge(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: m,
      width: h,
      height: p
    } = l;
    if (i || t(), !h || !p)
      return;
    const x = fn(m), g = fn(o.clientWidth - (u + h)), b = fn(o.clientHeight - (m + p)), S = fn(u), v = {
      rootMargin: -x + "px " + -g + "px " + -b + "px " + -S + "px",
      threshold: Ne(0, dt(1, c)) || 1
    };
    let k = !0;
    function C(w) {
      const M = w[0].intersectionRatio;
      if (M !== c) {
        if (!k)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !us(l, e.getBoundingClientRect()) && s(), k = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...v,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, v);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function $f(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = to(e), u = o || a ? [...l ? Jt(l) : [], ...t ? Jt(t) : []] : [];
  u.forEach((S) => {
    o && S.addEventListener("scroll", n, {
      passive: !0
    }), a && S.addEventListener("resize", n);
  });
  const m = l && i ? Bf(l, n) : null;
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
    g && !us(g, S) && n(), g = S, x = requestAnimationFrame(b);
  }
  return n(), () => {
    var S;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), m == null || m(), (S = p) == null || S.disconnect(), p = null, c && cancelAnimationFrame(x);
  };
}
const Lf = bf, Yf = yf, Hf = hf, Vf = wf, jf = pf, ra = mf, Uf = vf, Gf = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: zf,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return ff(e, t, {
    ...o,
    platform: a
  });
};
var qf = typeof document < "u", Xf = function() {
}, vn = qf ? Oa : Xf;
function En(e, t) {
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
        if (!En(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !En(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function fs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function oa(e, t) {
  const n = fs(e);
  return Math.round(t * n) / n;
}
function gr(e) {
  const t = d.useRef(e);
  return vn(() => {
    t.current = e;
  }), t;
}
function Kf(e) {
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
  } = e, [u, m] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = d.useState(r);
  En(h, r) || p(r);
  const [x, g] = d.useState(null), [b, S] = d.useState(null), y = d.useCallback((B) => {
    B !== w.current && (w.current = B, g(B));
  }, []), v = d.useCallback((B) => {
    B !== M.current && (M.current = B, S(B));
  }, []), k = a || x, C = s || b, w = d.useRef(null), M = d.useRef(null), N = d.useRef(u), O = c != null, R = gr(c), W = gr(o), H = gr(l), V = d.useCallback(() => {
    if (!w.current || !M.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: h
    };
    W.current && (B.platform = W.current), Gf(w.current, M.current, B).then((U) => {
      const D = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      $.current && !En(N.current, D) && (N.current = D, Rn.flushSync(() => {
        m(D);
      }));
    });
  }, [h, t, n, W, H]);
  vn(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, m((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [l]);
  const $ = d.useRef(!1);
  vn(() => ($.current = !0, () => {
    $.current = !1;
  }), []), vn(() => {
    if (k && (w.current = k), C && (M.current = C), k && C) {
      if (R.current)
        return R.current(k, C, V);
      V();
    }
  }, [k, C, V, R, O]);
  const X = d.useMemo(() => ({
    reference: w,
    floating: M,
    setReference: y,
    setFloating: v
  }), [y, v]), I = d.useMemo(() => ({
    reference: k,
    floating: C
  }), [k, C]), j = d.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return B;
    const U = oa(I.floating, u.x), D = oa(I.floating, u.y);
    return i ? {
      ...B,
      transform: "translate(" + U + "px, " + D + "px)",
      ...fs(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: D
    };
  }, [n, i, I.floating, u.x, u.y]);
  return d.useMemo(() => ({
    ...u,
    update: V,
    refs: X,
    elements: I,
    floatingStyles: j
  }), [u, V, X, I, j]);
}
const Zf = (e) => {
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
      return r && t(r) ? r.current != null ? ra({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ra({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Qf = (e, t) => {
  const n = Lf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Jf = (e, t) => {
  const n = Yf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, em = (e, t) => ({
  fn: Uf(e).fn,
  options: [e, t]
}), tm = (e, t) => {
  const n = Hf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, nm = (e, t) => {
  const n = Vf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, rm = (e, t) => {
  const n = jf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, om = (e, t) => {
  const n = Zf(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var am = "Arrow", ms = d.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ f(
    q.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
ms.displayName = am;
var sm = ms;
function hs(e) {
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
var no = "Popper", [ps, Ln] = rt(no), [im, gs] = ps(no), bs = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ f(im, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
bs.displayName = no;
var ys = "PopperAnchor", vs = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = gs(ys, n), s = d.useRef(null), i = re(t, s), c = d.useRef(null);
    return d.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, l !== c.current && a.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ f(q.div, { ...o, ref: i });
  }
);
vs.displayName = ys;
var ro = "PopperContent", [cm, lm] = ps(ro), ws = d.forwardRef(
  (e, t) => {
    var z, ae, Z, ee, Q, J;
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
      sticky: m = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: x,
      ...g
    } = e, b = gs(ro, n), [S, y] = d.useState(null), v = re(t, (he) => y(he)), [k, C] = d.useState(null), w = hs(k), M = (w == null ? void 0 : w.width) ?? 0, N = (w == null ? void 0 : w.height) ?? 0, O = r + (a !== "center" ? "-" + a : ""), R = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, W = Array.isArray(l) ? l : [l], H = W.length > 0, V = {
      padding: R,
      boundary: W.filter(um),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: $, floatingStyles: X, placement: I, isPositioned: j, middlewareData: B } = Kf({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...he) => $f(...he, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Qf({ mainAxis: o + N, alignmentAxis: s }),
        c && Jf({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? em() : void 0,
          ...V
        }),
        c && tm({ ...V }),
        nm({
          ...V,
          apply: ({ elements: he, rects: be, availableWidth: at, availableHeight: yt }) => {
            const { width: vt, height: ar } = be.reference, Rt = he.floating.style;
            Rt.setProperty("--radix-popper-available-width", `${at}px`), Rt.setProperty("--radix-popper-available-height", `${yt}px`), Rt.setProperty("--radix-popper-anchor-width", `${vt}px`), Rt.setProperty("--radix-popper-anchor-height", `${ar}px`);
          }
        }),
        k && om({ element: k, padding: i }),
        fm({ arrowWidth: M, arrowHeight: N }),
        h && rm({ strategy: "referenceHidden", ...V })
      ]
    }), [U, D] = ks(I), fe = we(x);
    ye(() => {
      j && (fe == null || fe());
    }, [j, fe]);
    const Pe = (z = B.arrow) == null ? void 0 : z.x, xe = (ae = B.arrow) == null ? void 0 : ae.y, ge = ((Z = B.arrow) == null ? void 0 : Z.centerOffset) !== 0, [le, de] = d.useState();
    return ye(() => {
      S && de(window.getComputedStyle(S).zIndex);
    }, [S]), /* @__PURE__ */ f(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...X,
          transform: j ? X.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            (ee = B.transformOrigin) == null ? void 0 : ee.x,
            (Q = B.transformOrigin) == null ? void 0 : Q.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((J = B.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          cm,
          {
            scope: n,
            placedSide: U,
            onArrowChange: C,
            arrowX: Pe,
            arrowY: xe,
            shouldHideArrow: ge,
            children: /* @__PURE__ */ f(
              q.div,
              {
                "data-side": U,
                "data-align": D,
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
ws.displayName = ro;
var xs = "PopperArrow", dm = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ss = d.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = lm(xs, r), s = dm[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ f(
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
        children: /* @__PURE__ */ f(
          sm,
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
Ss.displayName = xs;
function um(e) {
  return e !== null;
}
var fm = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, S, y;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, u] = ks(n), m = { start: "0%", center: "50%", end: "100%" }[u], h = (((S = o.arrow) == null ? void 0 : S.x) ?? 0) + i / 2, p = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let x = "", g = "";
    return l === "bottom" ? (x = s ? m : `${h}px`, g = `${-c}px`) : l === "top" ? (x = s ? m : `${h}px`, g = `${r.floating.height + c}px`) : l === "right" ? (x = `${-c}px`, g = s ? m : `${p}px`) : l === "left" && (x = `${r.floating.width + c}px`, g = s ? m : `${p}px`), { data: { x, y: g } };
  }
});
function ks(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Cs = bs, oo = vs, Ns = ws, Ms = Ss, mm = "Portal", Yn = d.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = d.useState(!1);
  ye(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? zl.createPortal(/* @__PURE__ */ f(q.div, { ...r, ref: t }), s) : null;
});
Yn.displayName = mm;
function hm(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var We = (e) => {
  const { present: t, children: n } = e, r = pm(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), a = re(r.ref, gm(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: a }) : null;
};
We.displayName = "Presence";
function pm(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), a = d.useRef("none"), s = e ? "mounted" : "unmounted", [i, c] = hm(s, {
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
    const l = mn(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [i]), ye(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const h = a.current, p = mn(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ye(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, m = (p) => {
        const g = mn(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (p) => {
        p.target === t && (a.current = mn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
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
function mn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function gm(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function bm(e) {
  const t = /* @__PURE__ */ ym(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(wm);
    if (c) {
      const l = c.props.children, u = i.map((m) => m === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ym(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = Sm(o), i = xm(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Dt(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var vm = Symbol("radix.slottable");
function wm(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vm;
}
function xm(e, t) {
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
function Sm(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var km = d[" useInsertionEffect ".trim().toString()] || ye;
function Nt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Cm({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const u = d.useRef(e !== void 0);
    d.useEffect(() => {
      const m = u.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, r]);
  }
  const l = d.useCallback(
    (u) => {
      var m;
      if (i) {
        const h = Nm(u) ? u(e) : u;
        h !== e && ((m = s.current) == null || m.call(s, h));
      } else
        a(u);
    },
    [i, e, a, s]
  );
  return [c, l];
}
function Cm({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), a = d.useRef(t);
  return km(() => {
    a.current = t;
  }, [t]), d.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Nm(e) {
  return typeof e == "function";
}
var Mm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, At = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), pn = {}, br = 0, Es = function(e) {
  return e && (e.host || Es(e.parentNode));
}, Em = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Es(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Pm = function(e, t, n, r) {
  var o = Em(t, Array.isArray(e) ? e : [e]);
  pn[n] || (pn[n] = /* @__PURE__ */ new WeakMap());
  var a = pn[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(m) {
    !m || i.has(m) || (i.add(m), l(m.parentNode));
  };
  o.forEach(l);
  var u = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var p = h.getAttribute(r), x = p !== null && p !== "false", g = (At.get(h) || 0) + 1, b = (a.get(h) || 0) + 1;
          At.set(h, g), a.set(h, b), s.push(h), g === 1 && x && hn.set(h, !0), b === 1 && h.setAttribute(n, "true"), x || h.setAttribute(r, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", h, S);
        }
    });
  };
  return u(t), i.clear(), br++, function() {
    s.forEach(function(m) {
      var h = At.get(m) - 1, p = a.get(m) - 1;
      At.set(m, h), a.set(m, p), h || (hn.has(m) || m.removeAttribute(r), hn.delete(m)), p || m.removeAttribute(n);
    }), br--, br || (At = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap(), pn = {});
  };
}, ao = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Mm(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Pm(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Be = function() {
  return Be = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Be.apply(this, arguments);
};
function Ps(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Om(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var wn = "right-scroll-bar-position", xn = "width-before-scroll-bar", Dm = "with-scroll-bars-hidden", Tm = "--removed-body-scroll-bar-size";
function yr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Rm(e, t) {
  var n = Ve(function() {
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
var Am = typeof window < "u" ? d.useLayoutEffect : d.useEffect, aa = /* @__PURE__ */ new WeakMap();
function _m(e, t) {
  var n = Rm(null, function(r) {
    return e.forEach(function(o) {
      return yr(o, r);
    });
  });
  return Am(function() {
    var r = aa.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || yr(i, null);
      }), a.forEach(function(i) {
        o.has(i) || yr(i, s);
      });
    }
    aa.set(n, e);
  }, [e]), n;
}
function Im(e) {
  return e;
}
function Wm(e, t) {
  t === void 0 && (t = Im);
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
function Fm(e) {
  e === void 0 && (e = {});
  var t = Wm(null);
  return t.options = Be({ async: !0, ssr: !1 }, e), t;
}
var Os = function(e) {
  var t = e.sideCar, n = Ps(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, Be({}, n));
};
Os.isSideCarExport = !0;
function zm(e, t) {
  return e.useMedium(t), Os;
}
var Ds = Fm(), vr = function() {
}, Hn = d.forwardRef(function(e, t) {
  var n = d.useRef(null), r = d.useState({
    onScrollCapture: vr,
    onWheelCapture: vr,
    onTouchMoveCapture: vr
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, m = e.shards, h = e.sideCar, p = e.noRelative, x = e.noIsolation, g = e.inert, b = e.allowPinchZoom, S = e.as, y = S === void 0 ? "div" : S, v = e.gapMode, k = Ps(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, w = _m([n, t]), M = Be(Be({}, k), o);
  return d.createElement(
    d.Fragment,
    null,
    u && d.createElement(C, { sideCar: Ds, removeScrollBar: l, shards: m, noRelative: p, noIsolation: x, inert: g, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: v }),
    s ? d.cloneElement(d.Children.only(i), Be(Be({}, M), { ref: w })) : d.createElement(y, Be({}, M, { className: c, ref: w }), i)
  );
});
Hn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hn.classNames = {
  fullWidth: xn,
  zeroRight: wn
};
var Bm = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $m() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Bm();
  return t && e.setAttribute("nonce", t), e;
}
function Lm(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ym(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Hm = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = $m()) && (Lm(t, n), Ym(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Vm = function() {
  var e = Hm();
  return function(t, n) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ts = function() {
  var e = Vm(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, jm = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, wr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Um = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [wr(n), wr(r), wr(o)];
}, Gm = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return jm;
  var t = Um(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, qm = Ts(), Lt = "data-scroll-locked", Xm = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Dm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Lt, `] {
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
  
  .`).concat(wn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(xn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(wn, " .").concat(wn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(xn, " .").concat(xn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Lt, `] {
    `).concat(Tm, ": ").concat(i, `px;
  }
`);
}, sa = function() {
  var e = parseInt(document.body.getAttribute(Lt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Km = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Lt, (sa() + 1).toString()), function() {
      var e = sa() - 1;
      e <= 0 ? document.body.removeAttribute(Lt) : document.body.setAttribute(Lt, e.toString());
    };
  }, []);
}, Zm = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Km();
  var a = d.useMemo(function() {
    return Gm(o);
  }, [o]);
  return d.createElement(qm, { styles: Xm(a, !t, o, n ? "" : "!important") });
}, Ar = !1;
if (typeof window < "u")
  try {
    var gn = Object.defineProperty({}, "passive", {
      get: function() {
        return Ar = !0, !0;
      }
    });
    window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn);
  } catch {
    Ar = !1;
  }
var _t = Ar ? { passive: !1 } : !1, Qm = function(e) {
  return e.tagName === "TEXTAREA";
}, Rs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Qm(e) && n[t] === "visible")
  );
}, Jm = function(e) {
  return Rs(e, "overflowY");
}, eh = function(e) {
  return Rs(e, "overflowX");
}, ia = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = As(e, r);
    if (o) {
      var a = _s(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, th = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, nh = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, As = function(e, t) {
  return e === "v" ? Jm(t) : eh(t);
}, _s = function(e, t) {
  return e === "v" ? th(t) : nh(t);
}, rh = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, oh = function(e, t, n, r, o) {
  var a = rh(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, m = 0, h = 0;
  do {
    if (!i)
      break;
    var p = _s(e, i), x = p[0], g = p[1], b = p[2], S = g - b - a * x;
    (x || S) && As(e, i) && (m += S, h += x);
    var y = i.parentNode;
    i = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && Math.abs(m) < 1 || !u && Math.abs(h) < 1) && (l = !0), l;
}, bn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ca = function(e) {
  return [e.deltaX, e.deltaY];
}, la = function(e) {
  return e && "current" in e ? e.current : e;
}, ah = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sh = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ih = 0, It = [];
function ch(e) {
  var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), o = d.useState(ih++)[0], a = d.useState(Ts)[0], s = d.useRef(e);
  d.useEffect(function() {
    s.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = Om([e.lockRef.current], (e.shards || []).map(la), !0).filter(Boolean);
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
    var S = bn(g), y = n.current, v = "deltaX" in g ? g.deltaX : y[0] - S[0], k = "deltaY" in g ? g.deltaY : y[1] - S[1], C, w = g.target, M = Math.abs(v) > Math.abs(k) ? "h" : "v";
    if ("touches" in g && M === "h" && w.type === "range")
      return !1;
    var N = window.getSelection(), O = N && N.anchorNode, R = O ? O === w || O.contains(w) : !1;
    if (R)
      return !1;
    var W = ia(M, w);
    if (!W)
      return !0;
    if (W ? C = M : (C = M === "v" ? "h" : "v", W = ia(M, w)), !W)
      return !1;
    if (!r.current && "changedTouches" in g && (v || k) && (r.current = C), !C)
      return !0;
    var H = r.current || C;
    return oh(H, b, g, H === "h" ? v : k);
  }, []), c = d.useCallback(function(g) {
    var b = g;
    if (!(!It.length || It[It.length - 1] !== a)) {
      var S = "deltaY" in b ? ca(b) : bn(b), y = t.current.filter(function(C) {
        return C.name === b.type && (C.target === b.target || b.target === C.shadowParent) && ah(C.delta, S);
      })[0];
      if (y && y.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!y) {
        var v = (s.current.shards || []).map(la).filter(Boolean).filter(function(C) {
          return C.contains(b.target);
        }), k = v.length > 0 ? i(b, v[0]) : !s.current.noIsolation;
        k && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = d.useCallback(function(g, b, S, y) {
    var v = { name: g, delta: b, target: S, should: y, shadowParent: lh(S) };
    t.current.push(v), setTimeout(function() {
      t.current = t.current.filter(function(k) {
        return k !== v;
      });
    }, 1);
  }, []), u = d.useCallback(function(g) {
    n.current = bn(g), r.current = void 0;
  }, []), m = d.useCallback(function(g) {
    l(g.type, ca(g), g.target, i(g, e.lockRef.current));
  }, []), h = d.useCallback(function(g) {
    l(g.type, bn(g), g.target, i(g, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return It.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, _t), document.addEventListener("touchmove", c, _t), document.addEventListener("touchstart", u, _t), function() {
      It = It.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", c, _t), document.removeEventListener("touchmove", c, _t), document.removeEventListener("touchstart", u, _t);
    };
  }, []);
  var p = e.removeScrollBar, x = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    x ? d.createElement(a, { styles: sh(o) }) : null,
    p ? d.createElement(Zm, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function lh(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const dh = zm(Ds, ch);
var Vn = d.forwardRef(function(e, t) {
  return d.createElement(Hn, Be({}, e, { ref: t, sideCar: dh }));
});
Vn.classNames = Hn.classNames;
var jn = "Popover", [Is] = rt(jn, [
  Ln
]), rn = Ln(), [uh, pt] = Is(jn), Ws = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = rn(t), c = d.useRef(null), [l, u] = d.useState(!1), [m, h] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: jn
  });
  return /* @__PURE__ */ f(Cs, { ...i, children: /* @__PURE__ */ f(
    uh,
    {
      scope: t,
      contentId: et(),
      triggerRef: c,
      open: m,
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
Ws.displayName = jn;
var Fs = "PopoverAnchor", zs = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pt(Fs, n), a = rn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return d.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ f(oo, { ...a, ...r, ref: t });
  }
);
zs.displayName = Fs;
var Bs = "PopoverTrigger", $s = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pt(Bs, n), a = rn(n), s = re(t, o.triggerRef), i = /* @__PURE__ */ f(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": js(o.open),
        ...r,
        ref: s,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ f(oo, { asChild: !0, ...a, children: i });
  }
);
$s.displayName = Bs;
var so = "PopoverPortal", [fh, mh] = Is(so, {
  forceMount: void 0
}), Ls = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = pt(so, t);
  return /* @__PURE__ */ f(fh, { scope: t, forceMount: n, children: /* @__PURE__ */ f(We, { present: n || a.open, children: /* @__PURE__ */ f(Yn, { asChild: !0, container: o, children: r }) }) });
};
Ls.displayName = so;
var jt = "PopoverContent", Ys = d.forwardRef(
  (e, t) => {
    const n = mh(jt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = pt(jt, e.__scopePopover);
    return /* @__PURE__ */ f(We, { present: r || a.open, children: a.modal ? /* @__PURE__ */ f(ph, { ...o, ref: t }) : /* @__PURE__ */ f(gh, { ...o, ref: t }) });
  }
);
Ys.displayName = jt;
var hh = /* @__PURE__ */ bm("PopoverContent.RemoveScroll"), ph = d.forwardRef(
  (e, t) => {
    const n = pt(jt, e.__scopePopover), r = d.useRef(null), o = re(t, r), a = d.useRef(!1);
    return d.useEffect(() => {
      const s = r.current;
      if (s) return ao(s);
    }, []), /* @__PURE__ */ f(Vn, { as: hh, allowPinchZoom: !0, children: /* @__PURE__ */ f(
      Hs,
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
), gh = d.forwardRef(
  (e, t) => {
    const n = pt(jt, e.__scopePopover), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ f(
      Hs,
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
), Hs = d.forwardRef(
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
      ...m
    } = e, h = pt(jt, n), p = rn(n);
    return Xr(), /* @__PURE__ */ f(
      Wn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ f(
          In,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ f(
              Ns,
              {
                "data-state": js(h.open),
                role: "dialog",
                id: h.contentId,
                ...p,
                ...m,
                ref: t,
                style: {
                  ...m.style,
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
), Vs = "PopoverClose", bh = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pt(Vs, n);
    return /* @__PURE__ */ f(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
bh.displayName = Vs;
var yh = "PopoverArrow", vh = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = rn(n);
    return /* @__PURE__ */ f(Ms, { ...o, ...r, ref: t });
  }
);
vh.displayName = yh;
function js(e) {
  return e ? "open" : "closed";
}
var wh = Ws, xh = zs, Sh = $s, kh = Ls, Us = Ys;
const Un = wh, Gn = Sh, H1 = xh, on = d.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ f(kh, { children: /* @__PURE__ */ f(
  Us,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: P(
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
on.displayName = Us.displayName;
const Ch = [
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
function Nh({
  value: e = "#f59e0b",
  onChange: t,
  presets: n = Ch,
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
  function m(p) {
    const x = p.target.value;
    u(x), /^#[0-9a-fA-F]{6}$/.test(x) && (t == null || t(x));
  }
  function h(p) {
    u(p), t == null || t(p);
  }
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(Un, { children: [
      /* @__PURE__ */ f(Gn, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: c,
          type: "button",
          disabled: s,
          className: P(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            o && "border-red-300 focus:ring-red-500 focus:border-red-500",
            i
          ),
          children: [
            /* @__PURE__ */ f(
              "span",
              {
                className: "h-5 w-5 rounded border border-border shrink-0",
                style: { backgroundColor: e }
              }
            ),
            /* @__PURE__ */ f("span", { className: "text-text-base font-mono text-xs uppercase", children: e }),
            /* @__PURE__ */ f(nd, { className: "ml-auto h-4 w-4 text-text-muted shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ f(on, { className: "w-64", align: "start", children: /* @__PURE__ */ E("div", { className: "space-y-3", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "h-16 w-full rounded-lg border border-border",
            style: { backgroundColor: e }
          }
        ),
        /* @__PURE__ */ E("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f(
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
          /* @__PURE__ */ f(
            "input",
            {
              type: "text",
              value: l,
              onChange: m,
              placeholder: "#000000",
              maxLength: 7,
              className: P(
                "flex-1 h-10 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-mono uppercase",
                "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
                "placeholder:text-text-muted"
              ),
              disabled: s
            }
          )
        ] }),
        n.length > 0 && /* @__PURE__ */ f("div", { className: "grid grid-cols-6 gap-1.5", children: n.map((p) => /* @__PURE__ */ f(
          "button",
          {
            type: "button",
            onClick: () => h(p),
            className: P(
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
    o && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
Nh.displayName = "ColorPicker";
function Mh({
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
  clearable: m = !1
}) {
  const h = d.useId(), [p, x] = d.useState(!1), [g, b] = d.useState(""), S = d.useRef(null), y = d.useMemo(() => {
    if (!g) return e;
    const w = g.toLowerCase();
    return e.filter((M) => M.label.toLowerCase().includes(w));
  }, [e, g]), v = e.find((w) => w.value === t);
  function k(w) {
    n == null || n(w === t ? "" : w), x(!1), b("");
  }
  function C(w) {
    w.stopPropagation(), n == null || n("");
  }
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    s && /* @__PURE__ */ f("label", { htmlFor: h, className: "block text-sm font-medium text-text-base", children: s }),
    /* @__PURE__ */ E(Un, { open: p, onOpenChange: (w) => {
      x(w), w || b("");
    }, children: [
      /* @__PURE__ */ f(Gn, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: h,
          type: "button",
          role: "combobox",
          "aria-expanded": p,
          disabled: l,
          className: P(
            "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !v && "text-text-muted",
            i && "border-red-300 focus:ring-red-500 focus:border-red-500",
            u
          ),
          children: [
            /* @__PURE__ */ f("span", { className: "truncate", children: (v == null ? void 0 : v.label) ?? r }),
            /* @__PURE__ */ E("div", { className: "flex items-center gap-1 shrink-0", children: [
              m && t && /* @__PURE__ */ f(
                _n,
                {
                  className: "h-3.5 w-3.5 text-text-muted hover:text-text-base cursor-pointer",
                  onClick: C
                }
              ),
              /* @__PURE__ */ f(jl, { className: "h-4 w-4 text-text-muted" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ E(on, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
        /* @__PURE__ */ E("div", { className: "flex items-center border-b border-border px-3", children: [
          /* @__PURE__ */ f(Ia, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ f(
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
        /* @__PURE__ */ f("div", { className: "max-h-60 overflow-y-auto p-1", children: y.length === 0 ? /* @__PURE__ */ f("div", { className: "py-6 text-center text-sm text-text-muted", children: a }) : y.map((w) => /* @__PURE__ */ E(
          "button",
          {
            type: "button",
            disabled: w.disabled,
            onClick: () => k(w.value),
            className: P(
              "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none transition-colors",
              "hover:bg-subtle focus:bg-subtle",
              "disabled:pointer-events-none disabled:opacity-50",
              w.value === t && "font-medium"
            ),
            children: [
              /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: w.value === t && /* @__PURE__ */ f(An, { className: "h-4 w-4 text-databeez-primary" }) }),
              w.label
            ]
          },
          w.value
        )) })
      ] })
    ] }),
    i && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: i }),
    c && !i && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: c })
  ] });
}
Mh.displayName = "Combobox";
const Eh = d.lazy(async () => {
  const [{ Prism: e }, { oneDark: t }] = await Promise.all([
    import("./index-CqL3bFoY.mjs").then((n) => n.ca),
    import("./index-CFVSE0Ln.mjs")
  ]);
  return {
    default: ({ children: n, language: r }) => /* @__PURE__ */ f(
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
function V1({
  code: e,
  language: t = "text",
  copyable: n = !0,
  className: r,
  ...o
}) {
  const [a, s] = d.useState(!1), i = async () => {
    await navigator.clipboard.writeText(e), s(!0), setTimeout(() => s(!1), 2e3);
  };
  return /* @__PURE__ */ E(
    "div",
    {
      className: P("relative rounded-xl overflow-hidden text-sm", r),
      ...o,
      children: [
        /* @__PURE__ */ E("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ f("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: t }),
          n && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: i,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: a ? /* @__PURE__ */ E(Ue, { children: [
                /* @__PURE__ */ f(An, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ f("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ E(Ue, { children: [
                /* @__PURE__ */ f(_a, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ f("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ f(d.Suspense, { fallback: /* @__PURE__ */ f("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ f(Eh, { language: t, children: e }) })
      ]
    }
  );
}
function Ph({
  text: e,
  label: t,
  resetDelay: n = 2e3,
  className: r,
  ...o
}) {
  const [a, s] = d.useState(!1);
  return /* @__PURE__ */ E(
    "button",
    {
      type: "button",
      onClick: async (c) => {
        c.stopPropagation(), await navigator.clipboard.writeText(e), s(!0), setTimeout(() => s(!1), n);
      },
      "aria-label": a ? "Copiato!" : `Copia${t ? ` ${t}` : ""}`,
      className: P(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        a ? "text-green-600" : "text-text-muted hover:text-text-base",
        r
      ),
      ...o,
      children: [
        a ? /* @__PURE__ */ f(An, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ f(_a, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ f("span", { children: a ? "Copiato!" : t })
      ]
    }
  );
}
function j1({ width: e, height: t = 48, className: n, variant: r = "color" }) {
  return /* @__PURE__ */ E(
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
        /* @__PURE__ */ f("g", { fill: r === "mono" ? "currentColor" : "#363d45", children: /* @__PURE__ */ f("path", { d: "M128.5 314.6 c-22 -12.4 -29.6 -17.5 -31.7 -21.6 -1.5 -2.9 -1.8 -6 -1.8 -19.7 0 -9.9 -0.4 -16.4 -1 -16.8 -0.6 -0.4 -7 2.8 -14.3 7.1 -11.2 6.6 -14 7.8 -18.7 8.1 -5.3 0.4 -6 0.2 -17 -6.2 -6.3 -3.7 -14.8 -8.5 -18.9 -10.8 -9.6 -5.4 -14.6 -10.1 -16 -15.2 -0.6 -2.3 -1.1 -12.8 -1.1 -25 0 -27.6 -0.2 -27.2 16.2 -37 6.5 -3.8 13.2 -7.8 15 -8.8 l3.3 -1.9 -2.3 -1.9 c-1.3 -1 -5.8 -3.7 -10 -6 -22.7 -12.5 -22.1 -11.4 -22.2 -41.2 0 -23.7 0.4 -26.1 5.6 -30.8 1.6 -1.4 11.5 -7.7 21.9 -13.9 15.1 -9 20 -11.4 23.7 -11.8 5 -0.5 4.2 -0.8 24.3 10.7 5 2.8 9.6 5.1 10.3 5.1 0.9 0 1.2 -4 1.2 -16.7 0 -15.6 0.2 -17.1 2.3 -20.5 2.9 -4.9 4.2 -5.8 25.7 -18.4 16.7 -9.7 19 -10.8 23.5 -10.8 5.3 -0.1 5.6 0 33 16.2 18.8 11.1 18.5 10.5 18.5 33.1 0 10.7 0.4 17.2 1 17.6 0.6 0.4 5.4 -1.9 10.8 -5.1 18.9 -11.2 19.4 -11.4 24.7 -11.4 4.6 0 6.5 0.9 22.5 10.4 21.4 12.7 24.8 15.2 27.2 19.6 1.6 3.1 1.8 6 1.8 26.8 0 25.2 -0.2 26.3 -5.7 31.3 -1.5 1.4 -7.4 5.2 -13.1 8.4 -5.7 3.2 -11.3 6.6 -12.4 7.5 l-2.2 1.7 2.5 1.5 c1.3 0.8 7.8 4.7 14.4 8.5 17.1 10 16.5 8.7 16.5 38.7 0 25.7 -0.2 26.6 -5.7 31.8 -1.5 1.4 -11.1 7.5 -21.3 13.4 -24.9 14.4 -23.6 14.3 -43.5 3 -8.2 -4.7 -15.4 -8.5 -16 -8.3 -0.6 0.2 -1.2 8.1 -1.5 19.6 l-0.5 19.2 -4.5 4.2 c-2.5 2.3 -12.7 8.8 -22.6 14.5 -23.3 13.1 -21.8 13.1 -41.9 1.8z m32.5 -17.6 c5.6 -3.3 10.4 -6 10.7 -6 0.2 0 2.4 -1.4 4.9 -3 l4.4 -3.1 0 -17.8 0 -17.8 -6.2 -3.3 c-3.5 -1.9 -8.1 -4.5 -10.3 -5.9 -5.6 -3.6 -6.7 -4.2 -12.9 -7.5 l-5.5 -2.9 -17.1 10.3 -17 10.2 0.2 16.6 0.3 16.7 5 3.3 c2.8 1.8 7 4.3 9.5 5.6 2.5 1.3 7.9 4.5 12 7 5 3.1 8.2 4.4 9.7 4.1 1.2 -0.3 6.7 -3.2 12.3 -6.5z m-91.4 -48.7 c11.8 -6.6 12 -6.7 13.5 -8 0.8 -0.6 4.2 -2.6 7.7 -4.4 14.3 -7.7 15.2 -8.3 15.2 -10.9 0 -1 -2.8 -4.4 -6.2 -7.5 -3.5 -3.1 -6.8 -6.6 -7.5 -7.8 -0.8 -1.5 -1.2 -7.4 -1.3 -17.3 l0 -15 -3.5 -1.7 c-4.2 -2 -9.1 -8.5 -10.6 -14.1 -1.6 -5.7 -0.6 -15.3 2 -20.1 2.9 -5.2 8.5 -10.2 13 -11.5 4.9 -1.4 14.5 -1.3 19.5 0.2 5.7 1.7 13 9.3 14.5 15.2 2.8 11.2 0.4 21.4 -6.6 27.5 -2.5 2.3 -5.2 4.1 -5.9 4.1 -1.1 0 -1.4 2.2 -1.4 9.9 l0 9.9 6.6 5.8 c3.7 3.2 7.2 7 7.8 8.5 l1.1 2.7 4 -2.7 4 -2.7 0.2 -41.9 0.3 -42 -8.8 -5.1 c-4.8 -2.8 -18.1 -10.8 -29.5 -17.7 -11.4 -7 -21 -12.7 -21.2 -12.7 -0.2 0 -3.9 -2.1 -8.2 -4.6 l-7.8 -4.7 -3 1.8 c-1.6 1 -8.8 5.1 -16 9.2 -7.2 4.1 -13.6 8 -14.3 8.5 -0.9 0.8 -1.2 5.4 -1 18.7 l0.3 17.6 9 5.1 c5 2.9 12.3 6.9 16.4 9.1 4.1 2.1 8.9 5.2 10.7 6.9 3.2 2.9 3.4 3.6 3.4 9.5 0 4.6 -0.5 7 -1.8 8.5 -0.9 1.2 -7.5 5.4 -14.7 9.4 -7.2 3.9 -15.4 8.6 -18.3 10.3 l-5.2 3.1 0.2 18.4 0.3 18.4 5 2.9 c2.8 1.6 5.9 3.4 7 3.9 1.1 0.6 2.7 1.5 3.5 2 3.1 2.1 17.5 10 18.2 10 0.5 0 4.7 -2.1 9.4 -4.7z m183.3 -5.7 l15.6 -9.2 0.3 -17.6 0.2 -17.7 -3.3 -2.5 c-1.8 -1.4 -5.6 -3.8 -8.3 -5.2 -28.8 -15.4 -28.4 -15 -28.4 -24.2 0 -6.5 2.3 -10.2 7.7 -12.6 4.2 -1.8 26.5 -14.5 30.1 -17.1 2.1 -1.5 2.2 -2.1 2.2 -19 l0 -17.4 -3.2 -2.4 c-1.8 -1.3 -6.9 -4.4 -11.3 -6.7 -4.4 -2.4 -10.7 -6 -14.1 -8.1 l-6.1 -3.7 -29.9 18 c-16.4 9.9 -33.6 20.2 -38.1 22.9 l-8.3 5 0 41.9 0 41.9 3.7 2.5 c3.9 2.7 5.3 2.6 5.3 -0.4 0 -1.1 3 -4.6 7 -8.1 l7 -6.3 0 -9.6 -0.1 -9.5 -3.7 -2.3 c-2.1 -1.3 -5.1 -4.4 -6.7 -7 -2.8 -4.4 -3 -5.3 -3 -14.7 0 -12 1.7 -15.5 9.7 -20.6 4.4 -2.8 6.1 -3.3 13.2 -3.7 8.9 -0.5 12.9 0.7 19.1 5.4 5.8 4.4 7.7 10 7.3 20.8 -0.3 8.2 -0.6 9.6 -3.3 13.6 -1.7 2.5 -5 5.5 -7.3 6.8 l-4.2 2.3 0 14.5 c0 17 -0.2 17.7 -8.9 25.2 -3.4 3 -6.1 5.9 -6.1 6.7 0 0.7 4.4 3.9 9.8 7 5.3 3.1 15.8 9.2 23.2 13.6 9.1 5.3 14.1 7.7 15.4 7.3 1.1 -0.4 8.9 -4.8 17.5 -9.8z m-148.5 -86.5 c1.9 -2.1 1.4 -4.1 -1.5 -5.9 -1.8 -1.1 -2.4 -1.1 -4 0.4 -2.3 2.1 -2.4 3.2 -0.2 5.6 2.1 2.3 3.6 2.3 5.7 -0.1z m91 -0.3 c1.5 -2.1 1.4 -2.4 -0.9 -4.7 -2.4 -2.4 -2.5 -2.4 -4.5 -0.6 -2.3 2 -2.6 4.5 -0.8 6.3 1.9 1.9 4.5 1.4 6.2 -1z m-36.9 -58.5 c2.8 -1.6 5.7 -3.2 6.5 -3.6 0.8 -0.4 2.9 -1.6 4.5 -2.7 1.7 -1.1 3.7 -2.3 4.5 -2.7 0.8 -0.4 2.7 -1.6 4.3 -2.7 l2.7 -2 0 -17.1 0 -17.1 -3 -2.2 c-1.6 -1.2 -3.2 -2.2 -3.6 -2.2 -0.3 0 -1.9 -0.9 -3.4 -2 -1.5 -1.1 -7.6 -4.7 -13.5 -8 l-10.8 -6 -12.1 7 c-6.7 3.8 -14.3 8.4 -17.1 10.2 l-5 3.3 -0.3 16.7 -0.2 16.7 4.7 2.8 c2.7 1.5 7.7 4.6 11.3 6.9 3.6 2.3 9.4 5.7 13 7.7 6.5 3.5 6.5 3.5 9.5 1.7 1.7 -1 5.3 -3.1 8 -4.7z" }) }),
        /* @__PURE__ */ E("g", { fill: "#f49e09", children: [
          /* @__PURE__ */ f("path", { d: "M137.5 303.3 c-4.9 -3 -11 -6.6 -13.5 -7.9 -2.5 -1.3 -6.7 -3.8 -9.5 -5.6 l-5 -3.3 -0.3 -19.7 -0.2 -19.6 15.7 -9.5 c23.6 -14.1 20.6 -13.2 28.8 -8.6 3.9 2.1 7.7 4.2 8.5 4.6 0.8 0.4 3.3 1.9 5.5 3.4 2.2 1.4 6.8 4.1 10.3 5.9 l6.2 3.3 0 20.8 0 20.8 -4.4 3.1 c-2.5 1.6 -4.7 3 -4.9 3 -0.3 0 -3.8 1.9 -7.9 4.3 -11.4 6.8 -18.6 10.7 -19.5 10.6 -0.4 0 -4.8 -2.5 -9.8 -5.6z" }),
          /* @__PURE__ */ f("path", { d: "M51 252.9 c-4.7 -2.7 -9.4 -5.4 -10.5 -5.9 -1.1 -0.6 -3.3 -1.9 -5 -2.9 -1.6 -1 -5 -3 -7.5 -4.4 l-4.5 -2.5 -0.3 -21.4 -0.2 -21.4 5.2 -3.1 c2.9 -1.7 11.2 -6.4 18.3 -10.3 7.2 -4 13.8 -8.2 14.7 -9.4 1 -1.1 1.8 -3.6 1.8 -5.5 0 -4.3 -4.1 -8.2 -14.1 -13.4 -4.1 -2.2 -11.4 -6.2 -16.4 -9.1 l-9 -5.1 -0.3 -20.6 c-0.2 -15.7 0.1 -20.9 1 -21.7 1.1 -0.8 15.7 -9.4 32.3 -18.8 l4.1 -2.3 9.3 5.4 c5.1 3 9.5 5.5 9.7 5.5 0.2 0 9.7 5.7 21.1 12.7 11.4 6.9 24.7 14.9 29.5 17.7 l8.8 5.1 -0.3 45 -0.2 45 -6.5 4.2 c-3.6 2.4 -6.8 4.3 -7.2 4.3 -0.5 0 -0.8 -1.5 -0.8 -3.2 0 -2.8 -1.1 -4.4 -7.5 -10.3 l-7.5 -7.1 0 -12.7 c0 -10 0.3 -12.7 1.4 -12.7 0.7 0 3.4 -1.8 6 -4.1 6.1 -5.4 8.4 -12.6 6.6 -20.6 -2.1 -9.4 -11.9 -17.3 -21.6 -17.3 -10.2 0 -19.9 8.5 -21.9 19.3 -1.4 7.2 4.3 18.2 11 21.4 l3.5 1.7 0 15 c0.1 9.9 0.5 15.8 1.3 17.3 0.7 1.2 4 4.7 7.5 7.8 6 5.5 6.2 5.9 6.2 10.5 0 5.9 0.5 5.5 -15.2 13.9 -3.5 1.8 -6.9 3.8 -7.7 4.4 -1.6 1.3 -2.1 1.6 -15.4 9 -5.8 3.1 -10.7 5.7 -10.8 5.6 -0.2 0 -4.2 -2.3 -8.9 -5z" }),
          /* @__PURE__ */ f("path", { d: "M227 253.7 c-4.1 -2.4 -11.3 -6.5 -16 -9.1 -4.7 -2.7 -12.7 -7.4 -17.7 -10.4 l-9.3 -5.4 0 -4.3 c0 -4.1 0.4 -4.7 6.1 -9.7 8.7 -7.5 8.9 -8.2 8.9 -25.2 l0 -14.5 4.2 -2.3 c12.7 -7 14.6 -26.6 3.3 -35.2 -8.8 -6.7 -17.7 -7.3 -26.5 -1.6 -7 4.5 -9.4 8.9 -9.4 17.5 -0.1 6.1 0.3 7.6 2.9 11.7 1.6 2.6 4.6 5.7 6.7 7 l3.7 2.3 0.1 12.5 0 12.6 -6.9 6.2 c-5.7 5.1 -7 6.8 -7.6 10.2 -0.4 2.2 -0.8 4 -1.1 4 -0.6 0 -7.8 -4.1 -10.6 -6.2 l-2.8 -1.9 0 -44.9 0 -44.9 9.8 -5.9 c39 -23.5 65.8 -39.5 67.7 -40.4 2 -0.9 3.6 -0.3 10.7 4 4.5 2.7 11.5 6.7 15.3 8.7 3.9 2.1 8.5 4.9 10.3 6.2 l3.2 2.4 0 20.4 c0 20 0 20.4 -2.2 22 -3.6 2.6 -25.9 15.3 -30.1 17.1 -6.6 2.9 -9.3 8.8 -6.4 14.3 1.2 2.4 5.3 4.9 27.1 16.5 2.7 1.4 6.4 3.8 8.3 5.2 l3.3 2.5 -0.2 20.7 -0.3 20.6 -12.5 7.4 c-6.9 4.1 -14.6 8.5 -17.3 9.9 -2.6 1.4 -5 2.9 -5.3 3.4 -0.8 1.4 -1.5 1.2 -9.4 -3.4z" }),
          /* @__PURE__ */ f("path", { d: "M95.9 159.1 c-3.4 -3.5 -3.7 -6.8 -0.8 -10.5 2.9 -3.6 8.6 -3.6 12.3 0 3.6 3.7 3.4 7.5 -0.5 10.8 -4 3.4 -7.4 3.3 -11 -0.3z" }),
          /* @__PURE__ */ f("path", { d: "M186.5 159.5 c-5.1 -5 -1.7 -13.5 5.4 -13.5 4.7 0 8.1 3.3 8.1 7.9 0 4.2 -3.8 8.1 -8 8.1 -1.9 0 -4 -0.9 -5.5 -2.5z" }),
          /* @__PURE__ */ f("path", { d: "M145 107.6 c-0.8 -0.8 -4.2 -2.9 -7.5 -4.6 -3.3 -1.8 -8.9 -5.1 -12.5 -7.4 -3.6 -2.3 -8.6 -5.4 -11.3 -6.9 l-4.7 -2.8 0.2 -19.7 0.3 -19.7 5 -3.3 c10 -6.6 31.2 -18.2 33.2 -18.2 1.2 0 2.5 0.4 2.8 1 0.3 0.5 4.5 3.1 9.3 5.6 4.8 2.6 10.6 6 12.9 7.6 2.3 1.5 4.4 2.8 4.8 2.8 0.3 0 1.9 1 3.5 2.2 l3 2.2 0 20.1 0 20.1 -2.7 2 c-1.6 1.1 -3.5 2.3 -4.3 2.7 -0.8 0.4 -2.8 1.6 -4.5 2.7 -1.6 1.1 -3.7 2.3 -4.5 2.7 -0.8 0.3 -5.9 3.3 -11.2 6.5 -5.4 3.2 -9.9 5.8 -10.1 5.8 -0.1 0 -0.9 -0.6 -1.7 -1.4z" })
        ] })
      ]
    }
  );
}
function Oh(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const xr = {}, Zt = {};
function kt(e, t) {
  try {
    const r = (xr[e] || (xr[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in Zt ? Zt[r] : da(r, r.split(":"));
  } catch {
    if (e in Zt) return Zt[e];
    const n = e == null ? void 0 : e.match(Dh);
    return n ? da(e, n.slice(1)) : NaN;
  }
}
const Dh = /([+-]\d\d):?(\d\d)?/;
function da(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Zt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class He extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(kt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), Gs(this), _r(this)) : this.setTime(Date.now());
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
    const t = -kt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), _r(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new He(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ua = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!ua.test(e)) return;
  const t = e.replace(ua, "$1UTC");
  He.prototype[t] && (e.startsWith("get") ? He.prototype[e] = function() {
    return this.internal[t]();
  } : (He.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Th(this), +this;
  }, He.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), _r(this), +this;
  }));
});
function _r(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-kt(e.timeZone, e) * 60));
}
function Th(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Gs(e);
}
function Gs(e) {
  const t = kt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const u = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, m = Math.round(-(kt(e.timeZone, e) * 60)) % 60;
  (m || u) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + u));
  const h = kt(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, b = p !== n, S = g - c;
  if (b && S) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S);
    const y = kt(e.timeZone, e), v = y > 0 ? Math.floor(y) : Math.ceil(y), k = p - v;
    k && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + k), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + k));
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
    return `${t} GMT${n}${r}${o} (${Oh(this.timeZone, this)})`;
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
const qs = 6048e5, Rh = 864e5, fa = Symbol.for("constructDateFrom");
function me(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && fa in e ? e[fa](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ce(e, t) {
  return me(t || e, e);
}
function Xs(e, t, n) {
  const r = ce(e, n == null ? void 0 : n.in);
  return isNaN(t) ? me(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function Ks(e, t, n) {
  const r = ce(e, n == null ? void 0 : n.in);
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
let Ah = {};
function an() {
  return Ah;
}
function ft(e, t) {
  var i, c, l, u;
  const n = an(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ce(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function en(e, t) {
  return ft(e, { ...t, weekStartsOn: 1 });
}
function Zs(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = me(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = en(o), s = me(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = en(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function ma(e) {
  const t = ce(e), n = new Date(
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
function Tt(e, ...t) {
  const n = me.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function tn(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function io(e, t, n) {
  const [r, o] = Tt(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = tn(r), s = tn(o), i = +a - ma(a), c = +s - ma(s);
  return Math.round((i - c) / Rh);
}
function _h(e, t) {
  const n = Zs(e, t), r = me(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), en(r);
}
function Ih(e, t, n) {
  return Xs(e, t * 7, n);
}
function Wh(e, t, n) {
  return Ks(e, t * 12, n);
}
function Fh(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const a = ce(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), me(r, n || NaN);
}
function zh(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const a = ce(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), me(r, n || NaN);
}
function Bh(e, t, n) {
  const [r, o] = Tt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +tn(r) == +tn(o);
}
function Qs(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function $h(e) {
  return !(!Qs(e) && typeof e != "number" || isNaN(+ce(e)));
}
function Js(e, t, n) {
  const [r, o] = Tt(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function Lh(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function ei(e, t) {
  const [n, r] = Tt(e, t.start, t.end);
  return { start: n, end: r };
}
function Yh(e, t) {
  const { start: n, end: r } = ei(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(me(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function Hh(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Vh(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function ti(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function jh(e, t) {
  const { start: n, end: r } = ei(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(me(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function ni(e, t) {
  var i, c, l, u;
  const n = an(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.weekStartsOn) ?? 0, o = ce(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Uh(e, t) {
  return ni(e, { ...t, weekStartsOn: 1 });
}
const Gh = {
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
}, qh = (e, t, n) => {
  let r;
  const o = Gh[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Yt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Xh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Kh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Zh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Qh = {
  date: Yt({
    formats: Xh,
    defaultWidth: "full"
  }),
  time: Yt({
    formats: Kh,
    defaultWidth: "full"
  }),
  dateTime: Yt({
    formats: Zh,
    defaultWidth: "full"
  })
}, Jh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ep = (e, t, n, r) => Jh[e];
function $e(e) {
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
const tp = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, np = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, rp = {
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
}, op = {
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
}, ap = {
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
}, sp = {
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
}, ip = (e, t) => {
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
}, cp = {
  ordinalNumber: ip,
  era: $e({
    values: tp,
    defaultWidth: "wide"
  }),
  quarter: $e({
    values: np,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $e({
    values: rp,
    defaultWidth: "wide"
  }),
  day: $e({
    values: op,
    defaultWidth: "wide"
  }),
  dayPeriod: $e({
    values: ap,
    defaultWidth: "wide",
    formattingValues: sp,
    defaultFormattingWidth: "wide"
  })
};
function Le(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? dp(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      lp(i, (m) => m.test(s))
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
function lp(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function dp(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function ri(e) {
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
const up = /^(\d+)(th|st|nd|rd)?/i, fp = /\d+/i, mp = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, hp = {
  any: [/^b/i, /^(a|c)/i]
}, pp = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, gp = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, bp = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, yp = {
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
}, vp = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, wp = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xp = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Sp = {
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
}, kp = {
  ordinalNumber: ri({
    matchPattern: up,
    parsePattern: fp,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Le({
    matchPatterns: mp,
    defaultMatchWidth: "wide",
    parsePatterns: hp,
    defaultParseWidth: "any"
  }),
  quarter: Le({
    matchPatterns: pp,
    defaultMatchWidth: "wide",
    parsePatterns: gp,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Le({
    matchPatterns: bp,
    defaultMatchWidth: "wide",
    parsePatterns: yp,
    defaultParseWidth: "any"
  }),
  day: Le({
    matchPatterns: vp,
    defaultMatchWidth: "wide",
    parsePatterns: wp,
    defaultParseWidth: "any"
  }),
  dayPeriod: Le({
    matchPatterns: xp,
    defaultMatchWidth: "any",
    parsePatterns: Sp,
    defaultParseWidth: "any"
  })
}, zt = {
  code: "en-US",
  formatDistance: qh,
  formatLong: Qh,
  formatRelative: ep,
  localize: cp,
  match: kp,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Cp(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return io(n, ti(n)) + 1;
}
function co(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = +en(n) - +_h(n);
  return Math.round(r / qs) + 1;
}
function oi(e, t) {
  var u, m, h, p;
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = an(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = me((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = ft(s, t), c = me((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = ft(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function Np(e, t) {
  var i, c, l, u;
  const n = an(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, o = oi(e, t), a = me((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), ft(a, t);
}
function lo(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = +ft(n, t) - +Np(n, t);
  return Math.round(r / qs) + 1;
}
function ie(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const ct = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ie(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ie(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ie(e.getDate(), t.length);
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
    return ie(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ie(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ie(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ie(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ie(o, t.length);
  }
}, Wt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, ha = {
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
    return ct.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = oi(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return ie(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ie(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Zs(e);
    return ie(n, t.length);
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
    return ie(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ie(r, 2);
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
        return ie(r, 2);
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
        return ct.M(e, t);
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
        return ie(r + 1, 2);
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
    const o = lo(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ie(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = co(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ie(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : ct.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Cp(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ie(r, t.length);
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
        return ie(a, 2);
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
        return ie(a, t.length);
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
        return ie(o, t.length);
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
    switch (r === 12 ? o = Wt.noon : r === 0 ? o = Wt.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Wt.evening : r >= 12 ? o = Wt.afternoon : r >= 4 ? o = Wt.morning : o = Wt.night, t) {
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
    return ct.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : ct.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ie(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ie(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : ct.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : ct.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return ct.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return ga(r);
      case "XXXX":
      case "XX":
        return St(r);
      case "XXXXX":
      case "XXX":
      default:
        return St(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return ga(r);
      case "xxxx":
      case "xx":
        return St(r);
      case "xxxxx":
      case "xxx":
      default:
        return St(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + pa(r, ":");
      case "OOOO":
      default:
        return "GMT" + St(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + pa(r, ":");
      case "zzzz":
      default:
        return "GMT" + St(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return ie(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return ie(+e, t.length);
  }
};
function pa(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + ie(a, 2);
}
function ga(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ie(Math.abs(e) / 60, 2) : St(e, t);
}
function St(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ie(Math.trunc(r / 60), 2), a = ie(r % 60, 2);
  return n + o + t + a;
}
const ba = (e, t) => {
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
}, ai = (e, t) => {
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
}, Mp = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return ba(e, t);
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
  return a.replace("{{date}}", ba(r, t)).replace("{{time}}", ai(o, t));
}, Ep = {
  p: ai,
  P: Mp
}, Pp = /^D+$/, Op = /^Y+$/, Dp = ["D", "DD", "YY", "YYYY"];
function Tp(e) {
  return Pp.test(e);
}
function Rp(e) {
  return Op.test(e);
}
function Ap(e, t, n) {
  const r = _p(e, t, n);
  if (console.warn(r), Dp.includes(e)) throw new RangeError(r);
}
function _p(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Ip = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Wp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Fp = /^'([^]*?)'?$/, zp = /''/g, Bp = /[a-zA-Z]/;
function Ze(e, t, n) {
  var u, m, h, p, x, g, b, S;
  const r = an(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? zt, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (x = n == null ? void 0 : n.locale) == null ? void 0 : x.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((S = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : S.weekStartsOn) ?? 0, i = ce(e, n == null ? void 0 : n.in);
  if (!$h(i))
    throw new RangeError("Invalid time value");
  let c = t.match(Wp).map((y) => {
    const v = y[0];
    if (v === "p" || v === "P") {
      const k = Ep[v];
      return k(y, o.formatLong);
    }
    return y;
  }).join("").match(Ip).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const v = y[0];
    if (v === "'")
      return { isToken: !1, value: $p(y) };
    if (ha[v])
      return { isToken: !0, value: y };
    if (v.match(Bp))
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
    (!(n != null && n.useAdditionalWeekYearTokens) && Rp(v) || !(n != null && n.useAdditionalDayOfYearTokens) && Tp(v)) && Ap(v, t, String(e));
    const k = ha[v[0]];
    return k(i, v, o.localize, l);
  }).join("");
}
function $p(e) {
  const t = e.match(Fp);
  return t ? t[1].replace(zp, "'") : e;
}
function Lp(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = me(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function Yp(e, t) {
  return ce(e, t == null ? void 0 : t.in).getMonth();
}
function Hp(e, t) {
  return ce(e, t == null ? void 0 : t.in).getFullYear();
}
function Vp(e, t) {
  return +ce(e) > +ce(t);
}
function jp(e, t) {
  return +ce(e) < +ce(t);
}
function ya(e, t, n) {
  const [r, o] = Tt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +ft(r, n) == +ft(o, n);
}
function Up(e, t, n) {
  const [r, o] = Tt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Gp(e, t, n) {
  const [r, o] = Tt(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function qp(e, t, n) {
  const r = ce(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = me(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = Lp(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function Xp(e, t, n) {
  const r = ce(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? me(e, NaN) : (r.setFullYear(t), r);
}
const va = 5, Kp = 4;
function Zp(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, va * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? va : Kp;
}
function si(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -1 * 6) : t.addDays(n, -1 * (r - 1));
}
function Qp(e, t) {
  const n = si(e, t), r = Zp(e, t);
  return t.addDays(n, r * 7 - 1);
}
const Jp = {
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
}, eg = (e, t, n) => {
  let r;
  const o = Jp[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r;
}, tg = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, ng = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, rg = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, og = {
  date: Yt({
    formats: tg,
    defaultWidth: "full"
  }),
  time: Yt({
    formats: ng,
    defaultWidth: "full"
  }),
  dateTime: Yt({
    formats: rg,
    defaultWidth: "full"
  })
}, uo = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function ag(e) {
  switch (e) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + uo[e] + " scorso alle' p";
  }
}
function wa(e) {
  return "'" + uo[e] + " alle' p";
}
function sg(e) {
  switch (e) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + uo[e] + " prossimo alle' p";
  }
}
const ig = {
  lastWeek: (e, t, n) => {
    const r = e.getDay();
    return ya(e, t, n) ? wa(r) : ag(r);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, t, n) => {
    const r = e.getDay();
    return ya(e, t, n) ? wa(r) : sg(r);
  },
  other: "P"
}, cg = (e, t, n, r) => {
  const o = ig[e];
  return typeof o == "function" ? o(t, n, r) : o;
}, lg = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, dg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, ug = {
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
}, fg = {
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
}, mg = {
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
}, hg = {
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
}, pg = (e, t) => {
  const n = Number(e);
  return String(n);
}, gg = {
  ordinalNumber: pg,
  era: $e({
    values: lg,
    defaultWidth: "wide"
  }),
  quarter: $e({
    values: dg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $e({
    values: ug,
    defaultWidth: "wide"
  }),
  day: $e({
    values: fg,
    defaultWidth: "wide"
  }),
  dayPeriod: $e({
    values: mg,
    defaultWidth: "wide",
    formattingValues: hg,
    defaultFormattingWidth: "wide"
  })
}, bg = /^(\d+)(º)?/i, yg = /\d+/i, vg = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, wg = {
  any: [/^a/i, /^(d|e)/i]
}, xg = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Sg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kg = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, Cg = {
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
}, Ng = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, Mg = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, Eg = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, Pg = {
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
}, Og = {
  ordinalNumber: ri({
    matchPattern: bg,
    parsePattern: yg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Le({
    matchPatterns: vg,
    defaultMatchWidth: "wide",
    parsePatterns: wg,
    defaultParseWidth: "any"
  }),
  quarter: Le({
    matchPatterns: xg,
    defaultMatchWidth: "wide",
    parsePatterns: Sg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Le({
    matchPatterns: kg,
    defaultMatchWidth: "wide",
    parsePatterns: Cg,
    defaultParseWidth: "any"
  }),
  day: Le({
    matchPatterns: Ng,
    defaultMatchWidth: "wide",
    parsePatterns: Mg,
    defaultParseWidth: "any"
  }),
  dayPeriod: Le({
    matchPatterns: Eg,
    defaultMatchWidth: "any",
    parsePatterns: Pg,
    defaultParseWidth: "any"
  })
}, Dg = {
  code: "it",
  formatDistance: eg,
  formatLong: og,
  formatRelative: cg,
  localize: gg,
  match: Og,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, ii = {
  ...zt,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => Ze(s, i, { locale: zt, ...n });
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
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => Ze(o, a, { locale: zt, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => Ze(s, i, { locale: zt, ...n });
      let a = o(e, "PPPP");
      return t != null && t.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => Ze(o, a, { locale: zt, ...t }), r(e, "cccc");
    }
  }
};
class Ee {
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
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : Xs(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : Ks(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : Ih(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : Wh(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : io(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : Js(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Yh(r);
    }, this.eachYearOfInterval = (r) => {
      var i;
      const o = (i = this.overrides) != null && i.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : jh(r), a = new Set(o.map((c) => this.getYear(c)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((c) => {
        s.push(new Date(c, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Qp(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Uh(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : Lh(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : ni(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : Vh(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : Ze(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : co(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : Yp(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : Hp(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : lo(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : Vp(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : jp(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : Qs(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : Bh(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : Up(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : Gp(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : Fh(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : zh(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : qp(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : Xp(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : si(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : tn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : en(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : Hh(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : ft(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : ti(r);
    }, this.options = { locale: ii, ...t }, this.overrides = n;
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
    return t && Ee.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, a = n == null ? void 0 : n.code;
    if (a && Ee.yearFirstLocales.has(a))
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
Ee.yearFirstLocales = /* @__PURE__ */ new Set([
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
const qe = new Ee();
class ci {
  constructor(t, n, r = qe) {
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
class Tg {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class Rg {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Ag(e) {
  return T.createElement("button", { ...e });
}
function _g(e) {
  return T.createElement("span", { ...e });
}
function Ig(e) {
  const { size: t = 24, orientation: n = "left", className: r } = e;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
    T.createElement(
      "svg",
      { className: r, width: t, height: t, viewBox: "0 0 24 24" },
      n === "up" && T.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }),
      n === "down" && T.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }),
      n === "left" && T.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }),
      n === "right" && T.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" })
    )
  );
}
function Wg(e) {
  const { day: t, modifiers: n, ...r } = e;
  return T.createElement("td", { ...r });
}
function Fg(e) {
  const { day: t, modifiers: n, ...r } = e, o = T.useRef(null);
  return T.useEffect(() => {
    var a;
    n.focused && ((a = o.current) == null || a.focus());
  }, [n.focused]), T.createElement("button", { ref: o, ...r });
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
var Ce;
(function(e) {
  e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(Ce || (Ce = {}));
function zg(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[F.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: c }) => c === a.value);
  return T.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[F.DropdownRoot] },
    T.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: u }) => T.createElement(r.Option, { key: c, value: c, disabled: u }, l))),
    T.createElement(
      "span",
      { className: o[F.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      T.createElement(r.Chevron, { orientation: "down", size: 18, className: o[F.Chevron] })
    )
  );
}
function Bg(e) {
  return T.createElement("div", { ...e });
}
function $g(e) {
  return T.createElement("div", { ...e });
}
function Lg(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r }, e.children);
}
function Yg(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r });
}
function Hg(e) {
  return T.createElement("table", { ...e });
}
function Vg(e) {
  return T.createElement("div", { ...e });
}
const li = Da(void 0);
function sn() {
  const e = Ta(li);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function jg(e) {
  const { components: t } = sn();
  return T.createElement(t.Dropdown, { ...e });
}
function Ug(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: l } } = sn(), u = ke((h) => {
    o && (n == null || n(h));
  }, [o, n]), m = ke((h) => {
    r && (t == null || t(h));
  }, [r, t]);
  return T.createElement(
    "nav",
    { ...a },
    T.createElement(
      s.PreviousMonthButton,
      { type: "button", className: i[F.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: m },
      T.createElement(s.Chevron, { disabled: r ? void 0 : !0, className: i[F.Chevron], orientation: "left" })
    ),
    T.createElement(
      s.NextMonthButton,
      { type: "button", className: i[F.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: u },
      T.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[F.Chevron] })
    )
  );
}
function Gg(e) {
  const { components: t } = sn();
  return T.createElement(t.Button, { ...e });
}
function qg(e) {
  return T.createElement("option", { ...e });
}
function Xg(e) {
  const { components: t } = sn();
  return T.createElement(t.Button, { ...e });
}
function Kg(e) {
  const { rootRef: t, ...n } = e;
  return T.createElement("div", { ...n, ref: t });
}
function Zg(e) {
  return T.createElement("select", { ...e });
}
function Qg(e) {
  const { week: t, ...n } = e;
  return T.createElement("tr", { ...n });
}
function Jg(e) {
  return T.createElement("th", { ...e });
}
function eb(e) {
  return T.createElement(
    "thead",
    { "aria-hidden": !0 },
    T.createElement("tr", { ...e })
  );
}
function tb(e) {
  const { week: t, ...n } = e;
  return T.createElement("th", { ...n });
}
function nb(e) {
  return T.createElement("th", { ...e });
}
function rb(e) {
  return T.createElement("tbody", { ...e });
}
function ob(e) {
  const { components: t } = sn();
  return T.createElement(t.Dropdown, { ...e });
}
const ab = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Ag,
  CaptionLabel: _g,
  Chevron: Ig,
  Day: Wg,
  DayButton: Fg,
  Dropdown: zg,
  DropdownNav: Bg,
  Footer: $g,
  Month: Lg,
  MonthCaption: Yg,
  MonthGrid: Hg,
  Months: Vg,
  MonthsDropdown: jg,
  Nav: Ug,
  NextMonthButton: Gg,
  Option: qg,
  PreviousMonthButton: Xg,
  Root: Kg,
  Select: Zg,
  Week: Qg,
  WeekNumber: tb,
  WeekNumberHeader: nb,
  Weekday: Jg,
  Weekdays: eb,
  Weeks: rb,
  YearsDropdown: ob
}, Symbol.toStringTag, { value: "Module" }));
function Qe(e, t, n = !1, r = qe) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function fo(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function qn(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function mo(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function ho(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function di(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function ui(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Je(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (ui(i, n))
      return i.some((c) => o(e, c));
    if (qn(i))
      return Qe(i, e, !1, n);
    if (di(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (fo(i)) {
      const c = a(i.before, e), l = a(i.after, e), u = c > 0, m = l < 0;
      return s(i.before, i.after) ? m && u : u || m;
    }
    return mo(i) ? a(e, i.after) > 0 : ho(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function sb(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: u = o.today() } = t, { isSameDay: m, isSameMonth: h, startOfMonth: p, isBefore: x, endOfMonth: g, isAfter: b } = o, S = n && p(n), y = r && g(r), v = {
    [ue.focused]: [],
    [ue.outside]: [],
    [ue.disabled]: [],
    [ue.hidden]: [],
    [ue.today]: []
  }, k = {};
  for (const C of e) {
    const { date: w, displayMonth: M } = C, N = !!(M && !h(w, M)), O = !!(S && x(w, S)), R = !!(y && b(w, y)), W = !!(a && Je(w, a, o)), H = !!(s && Je(w, s, o)) || O || R || // Broadcast calendar will show outside days as default
    !l && !c && N || l && c === !1 && N, V = m(w, u);
    N && v.outside.push(C), W && v.disabled.push(C), H && v.hidden.push(C), V && v.today.push(C), i && Object.keys(i).forEach(($) => {
      const X = i == null ? void 0 : i[$];
      X && Je(w, X, o) && (k[$] ? k[$].push(C) : k[$] = [C]);
    });
  }
  return (C) => {
    const w = {
      [ue.focused]: !1,
      [ue.disabled]: !1,
      [ue.hidden]: !1,
      [ue.outside]: !1,
      [ue.today]: !1
    }, M = {};
    for (const N in v) {
      const O = v[N];
      w[N] = O.some((R) => R === C);
    }
    for (const N in k)
      M[N] = k[N].some((O) => O === C);
    return {
      ...w,
      // custom modifiers should override all the previous ones
      ...M
    };
  };
}
function ib(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ue[a]] ? o.push(t[ue[a]]) : t[Ae[a]] && o.push(t[Ae[a]]), o), [t[F.Day]]);
}
function cb(e) {
  return {
    ...ab,
    ...e
  };
}
function lb(e) {
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
function db() {
  const e = {};
  for (const t in F)
    e[F[t]] = `rdp-${F[t]}`;
  for (const t in ue)
    e[ue[t]] = `rdp-${ue[t]}`;
  for (const t in Ae)
    e[Ae[t]] = `rdp-${Ae[t]}`;
  for (const t in Ce)
    e[Ce[t]] = `rdp-${Ce[t]}`;
  return e;
}
function fi(e, t, n) {
  return (n ?? new Ee(t)).formatMonthYear(e);
}
const ub = fi;
function fb(e, t, n) {
  return (n ?? new Ee(t)).format(e, "d");
}
function mb(e, t = qe) {
  return t.format(e, "LLLL");
}
function hb(e, t, n) {
  return (n ?? new Ee(t)).format(e, "cccccc");
}
function pb(e, t = qe) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function gb() {
  return "";
}
function mi(e, t = qe) {
  return t.format(e, "yyyy");
}
const bb = mi, yb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: fi,
  formatDay: fb,
  formatMonthCaption: ub,
  formatMonthDropdown: mb,
  formatWeekNumber: pb,
  formatWeekNumberHeader: gb,
  formatWeekdayName: hb,
  formatYearCaption: bb,
  formatYearDropdown: mi
}, Symbol.toStringTag, { value: "Module" }));
function vb(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...yb,
    ...e
  };
}
function po(e, t, n, r) {
  let o = (r ?? new Ee(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const wb = po;
function go(e, t, n) {
  return (n ?? new Ee(t)).formatMonthYear(e);
}
const xb = go;
function hi(e, t, n, r) {
  let o = (r ?? new Ee(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function pi(e) {
  return "Choose the Month";
}
function gi() {
  return "";
}
const Sb = "Go to the Next Month";
function bi(e, t) {
  return Sb;
}
function yi(e) {
  return "Go to the Previous Month";
}
function vi(e, t, n) {
  return (n ?? new Ee(t)).format(e, "cccc");
}
function wi(e, t) {
  return `Week ${e}`;
}
function xi(e) {
  return "Week Number";
}
function Si(e) {
  return "Choose the Year";
}
const kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: xb,
  labelDay: wb,
  labelDayButton: po,
  labelGrid: go,
  labelGridcell: hi,
  labelMonthDropdown: pi,
  labelNav: gi,
  labelNext: bi,
  labelPrevious: yi,
  labelWeekNumber: wi,
  labelWeekNumberHeader: xi,
  labelWeekday: vi,
  labelYearDropdown: Si
}, Symbol.toStringTag, { value: "Module" })), Te = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function Cb(e, t) {
  var r;
  const n = ((r = t.locale) == null ? void 0 : r.labels) ?? {};
  return {
    ...kb,
    ...e ?? {},
    labelDayButton: Te(po, e == null ? void 0 : e.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Te(pi, e == null ? void 0 : e.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Te(bi, e == null ? void 0 : e.labelNext, n.labelNext),
    labelPrevious: Te(yi, e == null ? void 0 : e.labelPrevious, n.labelPrevious),
    labelWeekNumber: Te(wi, e == null ? void 0 : e.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Te(Si, e == null ? void 0 : e.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Te(go, e == null ? void 0 : e.labelGrid, n.labelGrid),
    labelGridcell: Te(hi, e == null ? void 0 : e.labelGridcell, n.labelGridcell),
    labelNav: Te(gi, e == null ? void 0 : e.labelNav, n.labelNav),
    labelWeekNumberHeader: Te(xi, e == null ? void 0 : e.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Te(vi, e == null ? void 0 : e.labelWeekday, n.labelWeekday)
  };
}
function Nb(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), x = l(h), g = t && h < a(t) || n && h > a(n) || !1;
    return { value: x, label: p, disabled: g };
  });
}
function Mb(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[F.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function Eb(e, t, n, r) {
  const o = r ?? e.today(), a = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), s = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(a, i);
    s.push(c);
  }
  return s;
}
function Pb(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, eachYearOfInterval: i, getYear: c } = r, l = a(e), u = s(t), m = i({ start: l, end: u });
  return o && m.reverse(), m.map((h) => {
    const p = n.formatYearDropdown(h, r);
    return {
      value: c(h),
      label: p,
      disabled: !1
    };
  });
}
function Ob(e, t = {}) {
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
      const u = a(c), m = (l == null ? void 0 : l.weekStartsOn) ?? o, h = (u.getDay() - m + 7) % 7;
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
      const l = a(c.start), u = a(c.end), m = [], h = new ve(l.getFullYear(), l.getMonth(), 1, 12, 0, 0, e), p = u.getFullYear() * 12 + u.getMonth();
      for (; h.getFullYear() * 12 + h.getMonth() <= p; )
        m.push(new ve(h, e)), h.setMonth(h.getMonth() + 1, 1);
      return m;
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
      const l = a(c.start), u = a(c.end), m = [], h = new ve(l.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; h.getFullYear() <= u.getFullYear(); )
        m.push(new ve(h, e)), h.setFullYear(h.getFullYear() + 1, 0, 1);
      return m;
    },
    getWeek: (c, l) => {
      var m;
      const u = s(c);
      return lo(u, {
        weekStartsOn: (l == null ? void 0 : l.weekStartsOn) ?? o,
        firstWeekContainsDate: (l == null ? void 0 : l.firstWeekContainsDate) ?? ((m = r == null ? void 0 : r.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1
      });
    },
    getISOWeek: (c) => {
      const l = s(c);
      return co(l);
    },
    differenceInCalendarDays: (c, l) => {
      const u = s(c), m = s(l);
      return io(u, m);
    },
    differenceInCalendarMonths: (c, l) => {
      const u = s(c), m = s(l);
      return Js(u, m);
    }
  };
}
const cn = (e) => e instanceof HTMLElement ? e : null, Sr = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Db = (e) => cn(e.querySelector("[data-animated-month]")), kr = (e) => cn(e.querySelector("[data-animated-caption]")), Cr = (e) => cn(e.querySelector("[data-animated-weeks]")), Tb = (e) => cn(e.querySelector("[data-animated-nav]")), Rb = (e) => cn(e.querySelector("[data-animated-weekdays]"));
function Ab(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = Bt(null), i = Bt(r), c = Bt(!1);
  Oa(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const u = a.isSameMonth(r[0].date, l[0].date), m = a.isAfter(r[0].date, l[0].date), h = m ? n[Ce.caption_after_enter] : n[Ce.caption_before_enter], p = m ? n[Ce.weeks_after_enter] : n[Ce.weeks_before_enter], x = s.current, g = e.current.cloneNode(!0);
    if (g instanceof HTMLElement ? (Sr(g).forEach((v) => {
      if (!(v instanceof HTMLElement))
        return;
      const k = Db(v);
      k && v.contains(k) && v.removeChild(k);
      const C = kr(v);
      C && C.classList.remove(h);
      const w = Cr(v);
      w && w.classList.remove(p);
    }), s.current = g) : s.current = null, c.current || u || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = x instanceof HTMLElement ? Sr(x) : [], S = Sr(e.current);
    if (S != null && S.every((y) => y instanceof HTMLElement) && b && b.every((y) => y instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const y = Tb(e.current);
      y && (y.style.zIndex = "1"), S.forEach((v, k) => {
        const C = b[k];
        if (!C)
          return;
        v.style.position = "relative", v.style.overflow = "hidden";
        const w = kr(v);
        w && w.classList.add(h);
        const M = Cr(v);
        M && M.classList.add(p);
        const N = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), y && (y.style.zIndex = ""), w && w.classList.remove(h), M && M.classList.remove(p), v.style.position = "", v.style.overflow = "", v.contains(C) && v.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const O = Rb(C);
        O && (O.style.opacity = "0");
        const R = kr(C);
        R && (R.classList.add(m ? n[Ce.caption_before_exit] : n[Ce.caption_after_exit]), R.addEventListener("animationend", N));
        const W = Cr(C);
        W && W.classList.add(m ? n[Ce.weeks_before_exit] : n[Ce.weeks_after_exit]), v.insertBefore(C, v.firstChild);
      });
    }
  });
}
function _b(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: m, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: x, endOfWeek: g, isAfter: b, startOfBroadcastWeek: S, startOfISOWeek: y, startOfWeek: v } = r, k = c ? S(o, r) : s ? y(o) : v(o), C = c ? h(a) : s ? p(x(a)) : g(x(a)), w = t && (c ? h(t) : s ? p(t) : g(t)), M = w && b(C, w) ? w : C, N = u(M, k), O = m(a, o) + 1, R = [];
  for (let V = 0; V <= N; V++) {
    const $ = l(k, V);
    R.push($);
  }
  const H = (c ? 35 : 42) * O;
  if (i && R.length < H) {
    const V = H - R.length;
    for (let $ = 0; $ < V; $++) {
      const X = l(R[R.length - 1], 1);
      R.push(X);
    }
  }
  return R;
}
function Ib(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function Wb(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function xa(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || a || s;
  const { differenceInCalendarMonths: l, addMonths: u, startOfMonth: m } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = u(n, h);
  }
  return t && l(c, t) < 0 && (c = t), m(c);
}
function Fb(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: m, startOfISOWeek: h, startOfWeek: p } = r, x = e.reduce((g, b) => {
    const S = n.broadcastCalendar ? m(b, r) : n.ISOWeek ? h(b) : p(b), y = n.broadcastCalendar ? a(b) : n.ISOWeek ? s(i(b)) : c(i(b)), v = t.filter((M) => M >= S && M <= y), k = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && v.length < k) {
      const M = t.filter((N) => {
        const O = k - v.length;
        return N > y && N <= o(y, O);
      });
      v.push(...M);
    }
    const C = v.reduce((M, N) => {
      const O = n.ISOWeek ? l(N) : u(N), R = M.find((H) => H.weekNumber === O), W = new ci(N, b, r);
      return R ? R.days.push(W) : M.push(new Rg(O, [W])), M;
    }, []), w = new Tg(b, C);
    return g.push(w), g;
  }, []);
  return n.reverseMonths ? x.reverse() : x;
}
function zb(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: l, newDate: u, today: m } = t, { fromYear: h, toYear: p, fromMonth: x, toMonth: g } = e;
  !n && x && (n = x), !n && h && (n = t.newDate(h, 0, 1)), !r && g && (r = g), !r && p && (r = u(p, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : h ? n = u(h, 0, 1) : !n && b && (n = o(c(e.today ?? m(), -100))), r ? r = i(r) : p ? r = u(p, 11, 31) : !r && b && (r = l(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function Bb(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a : 1, u = s(e);
  if (!t)
    return i(u, l);
  if (!(c(t, e) < a))
    return i(u, l);
}
function $b(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, u = s(e);
  if (!t)
    return i(u, -l);
  if (!(c(u, t) <= 0))
    return i(u, -l);
}
function Lb(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Xn(e, t) {
  const [n, r] = Ve(e);
  return [t === void 0 ? n : t, r];
}
function Yb(e, t) {
  var k;
  const [n, r] = zb(e, t), { startOfMonth: o, endOfMonth: a } = t, s = xa(e, n, r, t), [i, c] = Xn(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Ht(() => {
    const C = xa(e, n, r, t);
    c(C);
  }, [e.timeZone]);
  const { months: l, weeks: u, days: m, previousMonth: h, nextMonth: p } = yn(() => {
    const C = Wb(i, r, { numberOfMonths: e.numberOfMonths }, t), w = _b(C, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), M = Fb(C, w, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), N = Lb(M), O = Ib(M), R = $b(i, n, e, t), W = Bb(i, r, e, t);
    return {
      months: M,
      weeks: N,
      days: O,
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
    (k = e.endMonth) == null ? void 0 : k.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: x, onMonthChange: g } = e, b = (C) => u.some((w) => w.days.some((M) => M.isEqualTo(C))), S = (C) => {
    if (x)
      return;
    let w = o(C);
    n && w < o(n) && (w = o(n)), r && w > o(r) && (w = o(r)), c(w), g == null || g(w);
  };
  return {
    months: l,
    weeks: u,
    days: m,
    navStart: n,
    navEnd: r,
    previousMonth: h,
    nextMonth: p,
    goToMonth: S,
    goToDay: (C) => {
      b(C) || S(C.date);
    }
  };
}
var ze;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(ze || (ze = {}));
function Sa(e) {
  return !e[ue.disabled] && !e[ue.hidden] && !e[ue.outside];
}
function Hb(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Sa(i) && (i[ue.focused] && a < ze.FocusedModifier ? (o = s, a = ze.FocusedModifier) : r != null && r.isEqualTo(s) && a < ze.LastFocused ? (o = s, a = ze.LastFocused) : n(s.date) && a < ze.Selected ? (o = s, a = ze.Selected) : i[ue.today] && a < ze.Today && (o = s, a = ze.Today));
  }
  return o || (o = e.find((s) => Sa(t(s)))), o;
}
function Vb(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: m, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: x, endOfWeek: g, max: b, min: S, startOfBroadcastWeek: y, startOfISOWeek: v, startOfWeek: k } = s;
  let w = {
    day: l,
    week: m,
    month: u,
    year: h,
    startOfWeek: (M) => c ? y(M, s) : i ? v(M) : k(M),
    endOfWeek: (M) => c ? p(M) : i ? x(M) : g(M)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? w = b([r, w]) : t === "after" && o && (w = S([o, w])), w;
}
function ki(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = Vb(e, t, n.date, r, o, a, s), l = !!(a.disabled && Je(c, a.disabled, s)), u = !!(a.hidden && Je(c, a.hidden, s)), m = c, h = new ci(c, m, s);
  return !l && !u ? h : ki(e, t, h, r, o, a, s, i + 1);
}
function jb(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = Ve(), c = Hb(t.days, n, r || (() => !1), s), [l, u] = Ve(a ? c : void 0);
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
      const S = ki(g, b, l, t.navStart, t.navEnd, e, o);
      S && (e.disableNavigation && !t.days.some((v) => v.isEqualTo(S)) || (t.goToDay(S), u(S)));
    }
  };
}
function Ub(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Xn(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((x) => c(x, p))) ?? !1, { min: u, max: m } = e;
  return {
    selected: i,
    select: (p, x, g) => {
      let b = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === u || r && (i == null ? void 0 : i.length) === 1)
          return;
        b = i == null ? void 0 : i.filter((S) => !c(S, p));
      } else
        (i == null ? void 0 : i.length) === m ? b = [p] : b = [...b, p];
      return o || s(b), o == null || o(b, p, x, g), b;
    },
    isSelected: l
  };
}
function Gb(e, t, n = 0, r = 0, o = !1, a = qe) {
  const { from: s, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a;
  let m;
  if (!s && !i)
    m = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !i)
    c(s, e) ? n === 0 ? m = { from: s, to: e } : o ? m = { from: s, to: void 0 } : m = void 0 : u(e, s) ? m = { from: e, to: s } : m = { from: s, to: e };
  else if (s && i)
    if (c(s, e) && c(i, e))
      o ? m = { from: s, to: i } : m = void 0;
    else if (c(s, e))
      m = { from: s, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      m = { from: e, to: n > 0 ? void 0 : e };
    else if (u(e, s))
      m = { from: e, to: i };
    else if (l(e, s))
      m = { from: s, to: e };
    else if (l(e, i))
      m = { from: s, to: e };
    else
      throw new Error("Invalid range");
  if (m != null && m.from && (m != null && m.to)) {
    const h = a.differenceInCalendarDays(m.to, m.from);
    r > 0 && h > r ? m = { from: e, to: void 0 } : n > 1 && h < n && (m = { from: e, to: void 0 });
  }
  return m;
}
function qb(e, t, n = qe) {
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
function ka(e, t, n = qe) {
  return Qe(e, t.from, !1, n) || Qe(e, t.to, !1, n) || Qe(t, e.from, !1, n) || Qe(t, e.to, !1, n);
}
function Xb(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Qe(e, i, !1, n) : ui(i, n) ? i.some((c) => Qe(e, c, !1, n)) : qn(i) ? i.from && i.to ? ka(e, { from: i.from, to: i.to }, n) : !1 : di(i) ? qb(e, i.dayOfWeek, n) : fo(i) ? n.isAfter(i.before, i.after) ? ka(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Je(e.from, i, n) || Je(e.to, i, n) : mo(i) || ho(i) ? Je(e.from, i, n) || Je(e.to, i, n) : !1))
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
function Kb(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: a, required: s, onSelect: i } = e, [c, l] = Xn(a, i ? a : void 0), u = i ? a : c;
  return {
    selected: u,
    select: (p, x, g) => {
      const { min: b, max: S } = e;
      let y;
      if (p) {
        const v = u == null ? void 0 : u.from, k = u == null ? void 0 : u.to, C = !!v && !!k, w = !!v && !!k && t.isSameDay(v, k) && t.isSameDay(p, v);
        o && (C || !(u != null && u.from)) ? !s && w ? y = void 0 : y = { from: p, to: void 0 } : y = Gb(p, u, b, S, s, t);
      }
      return r && n && (y != null && y.from) && y.to && Xb({ from: y.from, to: y.to }, n, t) && (y.from = p, y.to = void 0), i || l(y), i == null || i(y, p, x, g), y;
    },
    isSelected: (p) => u && Qe(u, p, !1, t)
  };
}
function Zb(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Xn(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (m, h, p) => {
      let x = m;
      return !r && i && i && c(m, i) && (x = void 0), o || s(x), o == null || o(x, m, h, p), x;
    },
    isSelected: (m) => i ? c(i, m) : !1
  };
}
function Qb(e, t) {
  const n = Zb(e, t), r = Ub(e, t), o = Kb(e, t);
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
function Ft(e, t, n) {
  return Oe(e, t);
}
function Ca(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Ft(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Ft(r, t) : r) : qn(e) ? {
    ...e,
    from: e.from ? Oe(e.from, t) : e.from,
    to: e.to ? Oe(e.to, t) : e.to
  } : fo(e) ? {
    before: Ft(e.before, t),
    after: Ft(e.after, t)
  } : mo(e) ? {
    after: Ft(e.after, t)
  } : ho(e) ? {
    before: Ft(e.before, t)
  } : e;
}
function Nr(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Ca(r, t)) : Ca(e, t));
}
function Jb(e) {
  var Oo;
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = Oe(t.today, n)), t.month && (t.month = Oe(t.month, n)), t.defaultMonth && (t.defaultMonth = Oe(t.defaultMonth, n)), t.startMonth && (t.startMonth = Oe(t.startMonth, n)), t.endMonth && (t.endMonth = Oe(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = Oe(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = (Oo = t.selected) == null ? void 0 : Oo.map((G) => Oe(G, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? Oe(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? Oe(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Nr(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Nr(t.hidden, n)), t.modifiers)) {
    const G = {};
    Object.keys(t.modifiers).forEach((se) => {
      var L;
      G[se] = Nr((L = t.modifiers) == null ? void 0 : L[se], n);
    }), t.modifiers = G;
  }
  const { components: r, formatters: o, labels: a, dateLib: s, locale: i, classNames: c } = yn(() => {
    const G = { ...ii, ...t.locale }, se = t.broadcastCalendar ? 1 : t.weekStartsOn, L = t.noonSafe && t.timeZone ? Ob(t.timeZone, {
      weekStartsOn: se,
      locale: G
    }) : void 0, oe = t.dateLib && L ? { ...L, ...t.dateLib } : t.dateLib ?? L, Se = new Ee({
      locale: G,
      weekStartsOn: se,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, oe);
    return {
      dateLib: Se,
      components: cb(t.components),
      formatters: vb(t.formatters),
      labels: Cb(t.labels, Se.options),
      locale: G,
      classNames: { ...db(), ...t.classNames }
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
  const { captionLayout: l, mode: u, navLayout: m, numberOfMonths: h = 1, onDayBlur: p, onDayClick: x, onDayFocus: g, onDayKeyDown: b, onDayMouseEnter: S, onDayMouseLeave: y, onNextClick: v, onPrevClick: k, showWeekNumber: C, styles: w } = t, { formatCaption: M, formatDay: N, formatMonthDropdown: O, formatWeekNumber: R, formatWeekNumberHeader: W, formatWeekdayName: H, formatYearDropdown: V } = o, $ = Yb(t, s), { days: X, months: I, navStart: j, navEnd: B, previousMonth: U, nextMonth: D, goToMonth: fe } = $, Pe = sb(X, t, j, B, s), { isSelected: xe, select: ge, selected: le } = Qb(t, s) ?? {}, { blur: de, focused: z, isFocusTarget: ae, moveFocus: Z, setFocused: ee } = jb(t, $, Pe, xe ?? (() => !1), s), { labelDayButton: Q, labelGridcell: J, labelGrid: he, labelMonthDropdown: be, labelNav: at, labelPrevious: yt, labelNext: vt, labelWeekday: ar, labelWeekNumber: Rt, labelWeekNumberHeader: vl, labelYearDropdown: wl } = a, xl = yn(() => Eb(s, t.ISOWeek, t.broadcastCalendar, t.today), [s, t.ISOWeek, t.broadcastCalendar, t.today]), Eo = u !== void 0 || x !== void 0, sr = ke(() => {
    U && (fe(U), k == null || k(U));
  }, [U, fe, k]), ir = ke(() => {
    D && (fe(D), v == null || v(D));
  }, [fe, D, v]), Sl = ke((G, se) => (L) => {
    L.preventDefault(), L.stopPropagation(), ee(G), !se.disabled && (ge == null || ge(G.date, se, L), x == null || x(G.date, se, L));
  }, [ge, x, ee]), kl = ke((G, se) => (L) => {
    ee(G), g == null || g(G.date, se, L);
  }, [g, ee]), Cl = ke((G, se) => (L) => {
    de(), p == null || p(G.date, se, L);
  }, [de, p]), Nl = ke((G, se) => (L) => {
    const oe = {
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
    if (oe[L.key]) {
      L.preventDefault(), L.stopPropagation();
      const [Se, te] = oe[L.key];
      Z(Se, te);
    }
    b == null || b(G.date, se, L);
  }, [Z, b, t.dir]), Ml = ke((G, se) => (L) => {
    S == null || S(G.date, se, L);
  }, [S]), El = ke((G, se) => (L) => {
    y == null || y(G.date, se, L);
  }, [y]), Pl = ke((G) => (se) => {
    const L = Number(se.target.value), oe = s.setMonth(s.startOfMonth(G), L);
    fe(oe);
  }, [s, fe]), Ol = ke((G) => (se) => {
    const L = Number(se.target.value), oe = s.setYear(s.startOfMonth(G), L);
    fe(oe);
  }, [s, fe]), { className: Dl, style: Tl } = yn(() => ({
    className: [c[F.Root], t.className].filter(Boolean).join(" "),
    style: { ...w == null ? void 0 : w[F.Root], ...t.style }
  }), [c, t.className, t.style, w]), Rl = lb(t), Po = Bt(null);
  Ab(Po, !!t.animate, {
    classNames: c,
    months: I,
    focused: z,
    dateLib: s
  });
  const Al = {
    dayPickerProps: t,
    selected: le,
    select: ge,
    isSelected: xe,
    months: I,
    nextMonth: D,
    previousMonth: U,
    goToMonth: fe,
    getModifiers: Pe,
    components: r,
    classNames: c,
    styles: w,
    labels: a,
    formatters: o
  };
  return T.createElement(
    li.Provider,
    { value: Al },
    T.createElement(
      r.Root,
      { rootRef: t.animate ? Po : void 0, className: Dl, style: Tl, dir: t.dir, id: t.id, lang: t.lang ?? i.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Rl },
      T.createElement(
        r.Months,
        { className: c[F.Months], style: w == null ? void 0 : w[F.Months] },
        !t.hideNavigation && !m && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[F.Nav], style: w == null ? void 0 : w[F.Nav], "aria-label": at(), onPreviousClick: sr, onNextClick: ir, previousMonth: U, nextMonth: D }),
        I.map((G, se) => T.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[F.Month],
            style: w == null ? void 0 : w[F.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: se,
            displayIndex: se,
            calendarMonth: G
          },
          m === "around" && !t.hideNavigation && se === 0 && T.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[F.PreviousMonthButton], tabIndex: U ? void 0 : -1, "aria-disabled": U ? void 0 : !0, "aria-label": yt(U), onClick: sr, "data-animated-button": t.animate ? "true" : void 0 },
            T.createElement(r.Chevron, { disabled: U ? void 0 : !0, className: c[F.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          T.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[F.MonthCaption], style: w == null ? void 0 : w[F.MonthCaption], calendarMonth: G, displayIndex: se }, l != null && l.startsWith("dropdown") ? T.createElement(
            r.DropdownNav,
            { className: c[F.Dropdowns], style: w == null ? void 0 : w[F.Dropdowns] },
            (() => {
              const L = l === "dropdown" || l === "dropdown-months" ? T.createElement(r.MonthsDropdown, { key: "month", className: c[F.MonthsDropdown], "aria-label": be(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: Pl(G.date), options: Nb(G.date, j, B, o, s), style: w == null ? void 0 : w[F.Dropdown], value: s.getMonth(G.date) }) : T.createElement("span", { key: "month" }, O(G.date, s)), oe = l === "dropdown" || l === "dropdown-years" ? T.createElement(r.YearsDropdown, { key: "year", className: c[F.YearsDropdown], "aria-label": wl(s.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: Ol(G.date), options: Pb(j, B, o, s, !!t.reverseYears), style: w == null ? void 0 : w[F.Dropdown], value: s.getYear(G.date) }) : T.createElement("span", { key: "year" }, V(G.date, s));
              return s.getMonthYearOrder() === "year-first" ? [oe, L] : [L, oe];
            })(),
            T.createElement("span", { role: "status", "aria-live": "polite", style: {
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
          ) : T.createElement(r.CaptionLabel, { className: c[F.CaptionLabel], role: "status", "aria-live": "polite" }, M(G.date, s.options, s))),
          m === "around" && !t.hideNavigation && se === h - 1 && T.createElement(
            r.NextMonthButton,
            { type: "button", className: c[F.NextMonthButton], tabIndex: D ? void 0 : -1, "aria-disabled": D ? void 0 : !0, "aria-label": vt(D), onClick: ir, "data-animated-button": t.animate ? "true" : void 0 },
            T.createElement(r.Chevron, { disabled: D ? void 0 : !0, className: c[F.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          se === h - 1 && m === "after" && !t.hideNavigation && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[F.Nav], style: w == null ? void 0 : w[F.Nav], "aria-label": at(), onPreviousClick: sr, onNextClick: ir, previousMonth: U, nextMonth: D }),
          T.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": u === "multiple" || u === "range", "aria-label": he(G.date, s.options, s) || void 0, className: c[F.MonthGrid], style: w == null ? void 0 : w[F.MonthGrid] },
            !t.hideWeekdays && T.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[F.Weekdays], style: w == null ? void 0 : w[F.Weekdays] },
              C && T.createElement(r.WeekNumberHeader, { "aria-label": vl(s.options), className: c[F.WeekNumberHeader], style: w == null ? void 0 : w[F.WeekNumberHeader], scope: "col" }, W()),
              xl.map((L) => T.createElement(r.Weekday, { "aria-label": ar(L, s.options, s), className: c[F.Weekday], key: String(L), style: w == null ? void 0 : w[F.Weekday], scope: "col" }, H(L, s.options, s)))
            ),
            T.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[F.Weeks], style: w == null ? void 0 : w[F.Weeks] }, G.weeks.map((L) => T.createElement(
              r.Week,
              { className: c[F.Week], key: L.weekNumber, style: w == null ? void 0 : w[F.Week], week: L },
              C && T.createElement(r.WeekNumber, { week: L, style: w == null ? void 0 : w[F.WeekNumber], "aria-label": Rt(L.weekNumber, {
                locale: i
              }), className: c[F.WeekNumber], scope: "row", role: "rowheader" }, R(L.weekNumber, s)),
              L.days.map((oe) => {
                const { date: Se } = oe, te = Pe(oe);
                if (te[ue.focused] = !te.hidden && !!(z != null && z.isEqualTo(oe)), te[Ae.selected] = (xe == null ? void 0 : xe(Se)) || te.selected, qn(le)) {
                  const { from: cr, to: lr } = le;
                  te[Ae.range_start] = !!(cr && lr && s.isSameDay(Se, cr)), te[Ae.range_end] = !!(cr && lr && s.isSameDay(Se, lr)), te[Ae.range_middle] = Qe(le, Se, !0, s);
                }
                const _l = Mb(te, w, t.modifiersStyles), Il = ib(te, c, t.modifiersClassNames), Wl = !Eo && !te.hidden ? J(Se, te, s.options, s) : void 0;
                return T.createElement(r.Day, { key: `${oe.isoDate}_${oe.displayMonthId}`, day: oe, modifiers: te, className: Il.join(" "), style: _l, role: "gridcell", "aria-selected": te.selected || void 0, "aria-label": Wl, "data-day": oe.isoDate, "data-month": oe.outside ? oe.dateMonthId : void 0, "data-selected": te.selected || void 0, "data-disabled": te.disabled || void 0, "data-hidden": te.hidden || void 0, "data-outside": oe.outside || void 0, "data-focused": te.focused || void 0, "data-today": te.today || void 0 }, !te.hidden && Eo ? T.createElement(r.DayButton, { className: c[F.DayButton], style: w == null ? void 0 : w[F.DayButton], type: "button", day: oe, modifiers: te, disabled: !te.focused && te.disabled || void 0, "aria-disabled": te.focused && te.disabled || void 0, tabIndex: ae(oe) ? 0 : -1, "aria-label": Q(Se, te, s.options, s), onClick: Sl(oe, te), onBlur: Cl(oe, te), onFocus: kl(oe, te), onKeyDown: Nl(oe, te), onMouseEnter: Ml(oe, te), onMouseLeave: El(oe, te) }, N(Se, s.options, s)) : !te.hidden && N(oe.date, s.options, s));
              })
            )))
          )
        ))
      ),
      t.footer && T.createElement(r.Footer, { className: c[F.Footer], style: w == null ? void 0 : w[F.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function bo({ className: e, classNames: t, ...n }) {
  return /* @__PURE__ */ f(
    Jb,
    {
      locale: Dg,
      className: P("p-3", e),
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
bo.displayName = "Calendar";
function ey({
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
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(Un, { children: [
      /* @__PURE__ */ f(Gn, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: l,
          type: "button",
          disabled: s,
          className: P(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !e && "text-text-muted",
            o && "border-red-300 focus:ring-red-500 focus:border-red-500",
            i
          ),
          children: [
            /* @__PURE__ */ f(Aa, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ f("span", { className: "truncate", children: e ? Ze(e, c) : n })
          ]
        }
      ) }),
      /* @__PURE__ */ f(on, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ f(
        bo,
        {
          mode: "single",
          selected: e,
          onSelect: t,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
ey.displayName = "DatePicker";
function ty({
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
  const u = d.useId(), m = d.useMemo(() => e != null && e.from ? e.to ? `${Ze(e.from, c)} — ${Ze(e.to, c)}` : Ze(e.from, c) : null, [e, c]);
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ f("label", { htmlFor: u, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(Un, { children: [
      /* @__PURE__ */ f(Gn, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: u,
          type: "button",
          disabled: s,
          className: P(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !m && "text-text-muted",
            o && "border-red-300 focus:ring-red-500 focus:border-red-500",
            i
          ),
          children: [
            /* @__PURE__ */ f(Aa, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ f("span", { className: "truncate", children: m ?? n })
          ]
        }
      ) }),
      /* @__PURE__ */ f(on, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ f(
        bo,
        {
          mode: "range",
          selected: e,
          onSelect: t,
          numberOfMonths: l,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
ty.displayName = "DateRangePicker";
// @__NO_SIDE_EFFECTS__
function ny(e) {
  const t = /* @__PURE__ */ ry(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(ay);
    if (c) {
      const l = c.props.children, u = i.map((m) => m === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ry(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = iy(o), i = sy(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Dt(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var oy = Symbol("radix.slottable");
function ay(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === oy;
}
function sy(e, t) {
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
function iy(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Kn = "Dialog", [Ci] = rt(Kn), [cy, Fe] = Ci(Kn), Ni = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = d.useRef(null), c = d.useRef(null), [l, u] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Kn
  });
  return /* @__PURE__ */ f(
    cy,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: et(),
      titleId: et(),
      descriptionId: et(),
      open: l,
      onOpenChange: u,
      onOpenToggle: d.useCallback(() => u((m) => !m), [u]),
      modal: s,
      children: n
    }
  );
};
Ni.displayName = Kn;
var Mi = "DialogTrigger", Ei = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Mi, n), a = re(t, o.triggerRef);
    return /* @__PURE__ */ f(
      q.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": wo(o.open),
        ...r,
        ref: a,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ei.displayName = Mi;
var yo = "DialogPortal", [ly, Pi] = Ci(yo, {
  forceMount: void 0
}), Oi = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Fe(yo, t);
  return /* @__PURE__ */ f(ly, { scope: t, forceMount: n, children: d.Children.map(r, (s) => /* @__PURE__ */ f(We, { present: n || a.open, children: /* @__PURE__ */ f(Yn, { asChild: !0, container: o, children: s }) })) });
};
Oi.displayName = yo;
var Pn = "DialogOverlay", Di = d.forwardRef(
  (e, t) => {
    const n = Pi(Pn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Fe(Pn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ f(We, { present: r || a.open, children: /* @__PURE__ */ f(uy, { ...o, ref: t }) }) : null;
  }
);
Di.displayName = Pn;
var dy = /* @__PURE__ */ ny("DialogOverlay.RemoveScroll"), uy = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Pn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(Vn, { as: dy, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        q.div,
        {
          "data-state": wo(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Mt = "DialogContent", Ti = d.forwardRef(
  (e, t) => {
    const n = Pi(Mt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Fe(Mt, e.__scopeDialog);
    return /* @__PURE__ */ f(We, { present: r || a.open, children: a.modal ? /* @__PURE__ */ f(fy, { ...o, ref: t }) : /* @__PURE__ */ f(my, { ...o, ref: t }) });
  }
);
Ti.displayName = Mt;
var fy = d.forwardRef(
  (e, t) => {
    const n = Fe(Mt, e.__scopeDialog), r = d.useRef(null), o = re(t, n.contentRef, r);
    return d.useEffect(() => {
      const a = r.current;
      if (a) return ao(a);
    }, []), /* @__PURE__ */ f(
      Ri,
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
), my = d.forwardRef(
  (e, t) => {
    const n = Fe(Mt, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ f(
      Ri,
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
), Ri = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Fe(Mt, n), c = d.useRef(null), l = re(t, c);
    return Xr(), /* @__PURE__ */ E(Ue, { children: [
      /* @__PURE__ */ f(
        Wn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ f(
            In,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": wo(i.open),
              ...s,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ E(Ue, { children: [
        /* @__PURE__ */ f(hy, { titleId: i.titleId }),
        /* @__PURE__ */ f(gy, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), vo = "DialogTitle", Ai = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(vo, n);
    return /* @__PURE__ */ f(q.h2, { id: o.titleId, ...r, ref: t });
  }
);
Ai.displayName = vo;
var _i = "DialogDescription", Ii = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(_i, n);
    return /* @__PURE__ */ f(q.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Ii.displayName = _i;
var Wi = "DialogClose", Fi = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Fe(Wi, n);
    return /* @__PURE__ */ f(
      q.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Fi.displayName = Wi;
function wo(e) {
  return e ? "open" : "closed";
}
var zi = "DialogTitleWarning", [U1, Bi] = Eu(zi, {
  contentName: Mt,
  titleName: vo,
  docsSlug: "dialog"
}), hy = ({ titleId: e }) => {
  const t = Bi(zi), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, py = "DialogDescriptionWarning", gy = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Bi(py).contentName}}.`;
  return d.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, by = Ni, yy = Ei, vy = Oi, $i = Di, Li = Ti, Yi = Ai, Hi = Ii, Vi = Fi;
const G1 = by, q1 = yy, wy = vy, X1 = Vi, ji = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  $i,
  {
    ref: n,
    className: P(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ji.displayName = $i.displayName;
const xy = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(wy, { children: [
  /* @__PURE__ */ f(ji, {}),
  /* @__PURE__ */ E(
    Li,
    {
      ref: r,
      className: P(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ E(Vi, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ f(_n, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
xy.displayName = Li.displayName;
const Sy = ({
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
Sy.displayName = "DialogHeader";
const ky = ({
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
ky.displayName = "DialogFooter";
const Cy = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Yi,
  {
    ref: n,
    className: P(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Cy.displayName = Yi.displayName;
const Ny = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Hi,
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
Ny.displayName = Hi.displayName;
function K1({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: o,
  ...a
}) {
  return /* @__PURE__ */ E(
    "div",
    {
      className: P(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        o
      ),
      ...a,
      children: [
        e && /* @__PURE__ */ f("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10", children: /* @__PURE__ */ f(e, { className: "h-6 w-6 text-databeez-primary" }) }),
        /* @__PURE__ */ E("div", { className: "space-y-1", children: [
          /* @__PURE__ */ f("p", { className: "font-semibold text-text-base", children: t }),
          n && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted max-w-sm", children: n })
        ] }),
        r && /* @__PURE__ */ f("div", { children: r })
      ]
    }
  );
}
const My = [
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
].join(" "), Ey = d.forwardRef(
  ({ children: e, className: t }, n) => /* @__PURE__ */ f("div", { ref: n, className: P(My, t), children: e })
);
Ey.displayName = "MarkdownContent";
function Z1({
  content: e,
  role: t,
  onRegenerate: n,
  onFeedback: r,
  showActions: o,
  children: a,
  className: s
}) {
  const i = t === "user", [c, l] = d.useState(null), u = (m) => {
    const h = c === m ? null : m;
    l(h), r == null || r(h);
  };
  return /* @__PURE__ */ f(
    "div",
    {
      className: P(
        "flex flex-col gap-1",
        i ? "items-end" : "items-start",
        s
      ),
      children: /* @__PURE__ */ E("div", { className: "flex flex-col max-w-[80%]", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: P(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              i ? "bg-databeez-primary text-white rounded-tr-sm" : "bg-surface border border-border text-text-base rounded-tl-sm"
            ),
            children: i ? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e }) : a ?? /* @__PURE__ */ f("p", { className: "whitespace-pre-wrap", children: e })
          }
        ),
        !i && o && /* @__PURE__ */ E("div", { className: "flex items-center gap-1 self-end mt-1", children: [
          /* @__PURE__ */ f(Ph, { text: e }),
          n && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: n,
              "aria-label": "Rigenera risposta",
              className: "inline-flex items-center text-text-muted hover:text-text-base transition-colors",
              children: /* @__PURE__ */ f(od, { className: "h-4 w-4" })
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
              children: /* @__PURE__ */ f(ld, { className: "h-4 w-4" })
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
              children: /* @__PURE__ */ f(cd, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
}
function Q1({
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
  return s ? /* @__PURE__ */ f(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-6",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        i
      ),
      ...c,
      children: /* @__PURE__ */ E("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            style: { backgroundColor: n },
            children: /* @__PURE__ */ f(e, { className: "h-6 w-6", style: { color: t } })
          }
        ),
        /* @__PURE__ */ E("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ f("h3", { className: "text-base font-semibold text-text-base", children: r }),
          o && /* @__PURE__ */ f("p", { className: "mt-1 text-sm text-text-muted", children: o }),
          a && /* @__PURE__ */ f("div", { className: "mt-3", children: a })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ E(
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
            style: { backgroundColor: n },
            children: /* @__PURE__ */ f(e, { className: "h-8 w-8", style: { color: t } })
          }
        ),
        /* @__PURE__ */ f("h3", { className: "text-lg font-semibold text-text-base mb-3", children: r }),
        o && /* @__PURE__ */ f("p", { className: "text-text-muted text-sm leading-relaxed", children: o }),
        a && /* @__PURE__ */ f("div", { className: "mt-5", children: a })
      ]
    }
  );
}
const Py = Pa(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...a }, s) => {
    const i = Fl(), c = o || i;
    return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ f(
        "input",
        {
          id: c,
          className: Hr(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            n && "border-red-300 focus:border-red-500 focus:ring-red-500",
            e
          ),
          ref: s,
          ...a
        }
      ),
      n && /* @__PURE__ */ f("p", { className: "text-sm text-red-600", children: n }),
      r && !n && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: r })
    ] });
  }
);
Py.displayName = "Input";
const Oy = d.forwardRef(
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
    return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: u,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ E("div", { className: "relative", children: [
        /* @__PURE__ */ f(e, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
        /* @__PURE__ */ f(
          "input",
          {
            ref: c,
            id: u,
            className: P(
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
        o && /* @__PURE__ */ f("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: o })
      ] }),
      n && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: n }),
      r && !n && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: r })
    ] });
  }
);
Oy.displayName = "InputWithIcon";
const Dy = {
  GET: "bg-green-100 text-green-800 border-green-200",
  POST: "bg-blue-100 text-blue-800 border-blue-200",
  PUT: "bg-amber-100 text-amber-800 border-amber-200",
  PATCH: "bg-purple-100 text-purple-800 border-purple-200",
  DELETE: "bg-red-100 text-red-800 border-red-200",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function J1({ method: e, className: t, ...n }) {
  const r = e.toUpperCase(), o = Dy[r] ?? "bg-subtle text-text-muted border-border";
  return /* @__PURE__ */ f(
    "span",
    {
      className: P(
        "inline-flex items-center px-2 py-0.5 rounded border text-xs font-mono font-bold tracking-wide",
        o,
        t
      ),
      ...n,
      children: r
    }
  );
}
function ew({
  title: e,
  description: t,
  actions: n,
  breadcrumb: r,
  className: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: P("bg-surface border-b border-border", o),
      ...a,
      children: /* @__PURE__ */ E("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        r && /* @__PURE__ */ f("div", { className: "mb-3", children: r }),
        /* @__PURE__ */ E("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ E("div", { className: "min-w-0", children: [
            /* @__PURE__ */ f("h1", { className: "text-3xl font-bold text-text-base truncate", children: e }),
            t && /* @__PURE__ */ f("p", { className: "mt-1 text-text-muted", children: t })
          ] }),
          n && /* @__PURE__ */ f("div", { className: "flex items-center gap-3 shrink-0", children: n })
        ] })
      ] })
    }
  );
}
var Ty = d.createContext(void 0);
function Zn(e) {
  const t = d.useContext(Ty);
  return e || t || "ltr";
}
function Ir(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Ry(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var xo = "ScrollArea", [Ui] = rt(xo), [Ay, De] = Ui(xo), Gi = d.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [i, c] = d.useState(null), [l, u] = d.useState(null), [m, h] = d.useState(null), [p, x] = d.useState(null), [g, b] = d.useState(null), [S, y] = d.useState(0), [v, k] = d.useState(0), [C, w] = d.useState(!1), [M, N] = d.useState(!1), O = re(t, (W) => c(W)), R = Zn(o);
    return /* @__PURE__ */ f(
      Ay,
      {
        scope: n,
        type: r,
        dir: R,
        scrollHideDelay: a,
        scrollArea: i,
        viewport: l,
        onViewportChange: u,
        content: m,
        onContentChange: h,
        scrollbarX: p,
        onScrollbarXChange: x,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: w,
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: M,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: y,
        onCornerHeightChange: k,
        children: /* @__PURE__ */ f(
          q.div,
          {
            dir: R,
            ...s,
            ref: O,
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
Gi.displayName = xo;
var qi = "ScrollAreaViewport", Xi = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = De(qi, n), i = d.useRef(null), c = re(t, i, s.onViewportChange);
    return /* @__PURE__ */ E(Ue, { children: [
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
        q.div,
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
          children: /* @__PURE__ */ f("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Xi.displayName = qi;
var Xe = "ScrollAreaScrollbar", So = d.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = De(Xe, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
    return d.useEffect(() => (i ? a(!0) : s(!0), () => {
      i ? a(!1) : s(!1);
    }), [i, a, s]), o.type === "hover" ? /* @__PURE__ */ f(_y, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ f(Iy, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ f(Ki, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ f(ko, { ...r, ref: t }) : null;
  }
);
So.displayName = Xe;
var _y = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = De(Xe, e.__scopeScrollArea), [a, s] = d.useState(!1);
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
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ f(We, { present: n || a, children: /* @__PURE__ */ f(
    Ki,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Iy = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = De(Xe, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Jn(() => c("SCROLL_END"), 100), [i, c] = Ry("hidden", {
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
      let m = l[u];
      const h = () => {
        const p = l[u];
        m !== p && (c("SCROLL"), s()), m = p;
      };
      return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
    }
  }, [o.viewport, a, c, s]), /* @__PURE__ */ f(We, { present: n || i !== "hidden", children: /* @__PURE__ */ f(
    ko,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: Y(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: Y(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Ki = d.forwardRef((e, t) => {
  const n = De(Xe, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = d.useState(!1), i = e.orientation === "horizontal", c = Jn(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : u);
    }
  }, 10);
  return Ut(n.viewport, c), Ut(n.content, c), /* @__PURE__ */ f(We, { present: r || a, children: /* @__PURE__ */ f(
    ko,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), ko = d.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = De(Xe, e.__scopeScrollArea), a = d.useRef(null), s = d.useRef(0), [i, c] = d.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = tc(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => a.current = h,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (h) => s.current = h
  };
  function m(h, p) {
    return Ly(h, s.current, i, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ f(
    Wy,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollLeft, p = Na(h, i, o.dir);
          a.current.style.transform = `translate3d(${p}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = m(h, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ f(
    Fy,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollTop, p = Na(h, i);
          a.current.style.transform = `translate3d(0, ${p}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = m(h));
      }
    }
  ) : null;
}), Wy = d.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = De(Xe, e.__scopeScrollArea), [s, i] = d.useState(), c = d.useRef(null), l = re(t, c, a.onScrollbarXChange);
  return d.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f(
    Qi,
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
      onWheelScroll: (u, m) => {
        if (a.viewport) {
          const h = a.viewport.scrollLeft + u.deltaX;
          e.onWheelScroll(h), rc(h, m) && u.preventDefault();
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
}), Fy = d.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = De(Xe, e.__scopeScrollArea), [s, i] = d.useState(), c = d.useRef(null), l = re(t, c, a.onScrollbarYChange);
  return d.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ f(
    Qi,
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
      onWheelScroll: (u, m) => {
        if (a.viewport) {
          const h = a.viewport.scrollTop + u.deltaY;
          e.onWheelScroll(h), rc(h, m) && u.preventDefault();
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
}), [zy, Zi] = Ui(Xe), Qi = d.forwardRef((e, t) => {
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
    onResize: m,
    ...h
  } = e, p = De(Xe, n), [x, g] = d.useState(null), b = re(t, (O) => g(O)), S = d.useRef(null), y = d.useRef(""), v = p.viewport, k = r.content - r.viewport, C = we(u), w = we(c), M = Jn(m, 10);
  function N(O) {
    if (S.current) {
      const R = O.clientX - S.current.left, W = O.clientY - S.current.top;
      l({ x: R, y: W });
    }
  }
  return d.useEffect(() => {
    const O = (R) => {
      const W = R.target;
      (x == null ? void 0 : x.contains(W)) && C(R, k);
    };
    return document.addEventListener("wheel", O, { passive: !1 }), () => document.removeEventListener("wheel", O, { passive: !1 });
  }, [v, x, k, C]), d.useEffect(w, [r, w]), Ut(x, M), Ut(p.content, M), /* @__PURE__ */ f(
    zy,
    {
      scope: n,
      scrollbar: x,
      hasThumb: o,
      onThumbChange: we(a),
      onThumbPointerUp: we(s),
      onThumbPositionChange: w,
      onThumbPointerDown: we(i),
      children: /* @__PURE__ */ f(
        q.div,
        {
          ...h,
          ref: b,
          style: { position: "absolute", ...h.style },
          onPointerDown: Y(e.onPointerDown, (O) => {
            O.button === 0 && (O.target.setPointerCapture(O.pointerId), S.current = x.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), N(O));
          }),
          onPointerMove: Y(e.onPointerMove, N),
          onPointerUp: Y(e.onPointerUp, (O) => {
            const R = O.target;
            R.hasPointerCapture(O.pointerId) && R.releasePointerCapture(O.pointerId), document.body.style.webkitUserSelect = y.current, p.viewport && (p.viewport.style.scrollBehavior = ""), S.current = null;
          })
        }
      )
    }
  );
}), On = "ScrollAreaThumb", Ji = d.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Zi(On, e.__scopeScrollArea);
    return /* @__PURE__ */ f(We, { present: n || o.hasThumb, children: /* @__PURE__ */ f(By, { ref: t, ...r }) });
  }
), By = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = De(On, n), s = Zi(On, n), { onThumbPositionChange: i } = s, c = re(
      t,
      (m) => s.onThumbChange(m)
    ), l = d.useRef(void 0), u = Jn(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return d.useEffect(() => {
      const m = a.viewport;
      if (m) {
        const h = () => {
          if (u(), !l.current) {
            const p = Yy(m, i);
            l.current = p, i();
          }
        };
        return i(), m.addEventListener("scroll", h), () => m.removeEventListener("scroll", h);
      }
    }, [a.viewport, u, i]), /* @__PURE__ */ f(
      q.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: Y(e.onPointerDownCapture, (m) => {
          const p = m.target.getBoundingClientRect(), x = m.clientX - p.left, g = m.clientY - p.top;
          s.onThumbPointerDown({ x, y: g });
        }),
        onPointerUp: Y(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
Ji.displayName = On;
var Co = "ScrollAreaCorner", ec = d.forwardRef(
  (e, t) => {
    const n = De(Co, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ f($y, { ...e, ref: t }) : null;
  }
);
ec.displayName = Co;
var $y = d.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = De(Co, n), [a, s] = d.useState(0), [i, c] = d.useState(0), l = !!(a && i);
  return Ut(o.scrollbarX, () => {
    var m;
    const u = ((m = o.scrollbarX) == null ? void 0 : m.offsetHeight) || 0;
    o.onCornerHeightChange(u), c(u);
  }), Ut(o.scrollbarY, () => {
    var m;
    const u = ((m = o.scrollbarY) == null ? void 0 : m.offsetWidth) || 0;
    o.onCornerWidthChange(u), s(u);
  }), l ? /* @__PURE__ */ f(
    q.div,
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
function tc(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Qn(e) {
  const t = tc(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Ly(e, t, n, r = "ltr") {
  const o = Qn(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, m = r === "ltr" ? [0, u] : [u * -1, 0];
  return nc([c, l], m)(e);
}
function Na(e, t, n = "ltr") {
  const r = Qn(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = Ir(e, c);
  return nc([0, s], [0, i])(l);
}
function nc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function rc(e, t) {
  return e > 0 && e < t;
}
var Yy = (e, t = () => {
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
function Ut(e, t) {
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
var oc = Gi, Hy = Xi, Vy = ec;
const jy = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  oc,
  {
    ref: r,
    className: P("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ f(Hy, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f(ac, {}),
      /* @__PURE__ */ f(Vy, {})
    ]
  }
));
jy.displayName = oc.displayName;
const ac = d.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ f(
  So,
  {
    ref: r,
    orientation: t,
    className: P(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ f(Ji, { className: "relative flex-1 rounded-full bg-border" })
  }
));
ac.displayName = So.displayName;
const Uy = d.forwardRef(
  ({ value: e, onChange: t, onClear: n, className: r, placeholder: o = "Cerca...", ...a }, s) => {
    const i = () => {
      t(""), n == null || n();
    };
    return /* @__PURE__ */ E("div", { className: P("relative", r), children: [
      /* @__PURE__ */ f(Ia, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ f(
        "input",
        {
          ref: s,
          type: "text",
          value: e,
          onChange: (c) => t(c.target.value),
          placeholder: o,
          className: P(
            "w-full pl-10 pr-9 py-2 text-sm border border-border rounded-lg bg-surface",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "placeholder:text-text-muted text-text-base transition-colors"
          ),
          ...a
        }
      ),
      e && /* @__PURE__ */ f(
        "button",
        {
          type: "button",
          onClick: i,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ f(_n, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
Uy.displayName = "SearchInput";
// @__NO_SIDE_EFFECTS__
function Ma(e) {
  const t = /* @__PURE__ */ Gy(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(Xy);
    if (c) {
      const l = c.props.children, u = i.map((m) => m === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Gy(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = Zy(o), i = Ky(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Dt(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qy = Symbol("radix.slottable");
function Xy(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qy;
}
function Ky(e, t) {
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
function Zy(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function sc(e) {
  const t = e + "CollectionProvider", [n, r] = rt(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (g) => {
    const { scope: b, children: S } = g, y = T.useRef(null), v = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: b, itemMap: v, collectionRef: y, children: S });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Ma(i), l = T.forwardRef(
    (g, b) => {
      const { scope: S, children: y } = g, v = a(i, S), k = re(b, v.collectionRef);
      return /* @__PURE__ */ f(c, { ref: k, children: y });
    }
  );
  l.displayName = i;
  const u = e + "CollectionItemSlot", m = "data-radix-collection-item", h = /* @__PURE__ */ Ma(u), p = T.forwardRef(
    (g, b) => {
      const { scope: S, children: y, ...v } = g, k = T.useRef(null), C = re(b, k), w = a(u, S);
      return T.useEffect(() => (w.itemMap.set(k, { ref: k, ...v }), () => void w.itemMap.delete(k))), /* @__PURE__ */ f(h, { [m]: "", ref: C, children: y });
    }
  );
  p.displayName = u;
  function x(g) {
    const b = a(e + "CollectionConsumer", g);
    return T.useCallback(() => {
      const y = b.collectionRef.current;
      if (!y) return [];
      const v = Array.from(y.querySelectorAll(`[${m}]`));
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
function Qy(e) {
  const t = /* @__PURE__ */ Jy(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), c = i.find(tv);
    if (c) {
      const l = c.props.children, u = i.map((m) => m === c ? d.Children.count(l) > 1 ? d.Children.only(null) : d.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...s, ref: o, children: d.isValidElement(l) ? d.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Jy(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = rv(o), i = nv(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? Dt(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ev = Symbol("radix.slottable");
function tv(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ev;
}
function nv(e, t) {
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
function rv(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function ic(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var cc = Object.freeze({
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
}), ov = "VisuallyHidden", av = d.forwardRef(
  (e, t) => /* @__PURE__ */ f(
    q.span,
    {
      ...e,
      ref: t,
      style: { ...cc, ...e.style }
    }
  )
);
av.displayName = ov;
var sv = [" ", "Enter", "ArrowUp", "ArrowDown"], iv = [" ", "Enter"], Et = "Select", [er, tr, cv] = sc(Et), [Xt] = rt(Et, [
  cv,
  Ln
]), nr = Ln(), [lv, gt] = Xt(Et), [dv, uv] = Xt(Et), lc = (e) => {
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
    autoComplete: m,
    disabled: h,
    required: p,
    form: x
  } = e, g = nr(t), [b, S] = d.useState(null), [y, v] = d.useState(null), [k, C] = d.useState(!1), w = Zn(l), [M, N] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Et
  }), [O, R] = Nt({
    prop: s,
    defaultProp: i,
    onChange: c,
    caller: Et
  }), W = d.useRef(null), H = b ? x || !!b.closest("form") : !0, [V, $] = d.useState(/* @__PURE__ */ new Set()), X = Array.from(V).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ f(Cs, { ...g, children: /* @__PURE__ */ E(
    lv,
    {
      required: p,
      scope: t,
      trigger: b,
      onTriggerChange: S,
      valueNode: y,
      onValueNodeChange: v,
      valueNodeHasChildren: k,
      onValueNodeHasChildrenChange: C,
      contentId: et(),
      value: O,
      onValueChange: R,
      open: M,
      onOpenChange: N,
      dir: w,
      triggerPointerDownPosRef: W,
      disabled: h,
      children: [
        /* @__PURE__ */ f(er.Provider, { scope: t, children: /* @__PURE__ */ f(
          dv,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback((I) => {
              $((j) => new Set(j).add(I));
            }, []),
            onNativeOptionRemove: d.useCallback((I) => {
              $((j) => {
                const B = new Set(j);
                return B.delete(I), B;
              });
            }, []),
            children: n
          }
        ) }),
        H ? /* @__PURE__ */ E(
          _c,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: u,
            autoComplete: m,
            value: O,
            onChange: (I) => R(I.target.value),
            disabled: h,
            form: x,
            children: [
              O === void 0 ? /* @__PURE__ */ f("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          X
        ) : null
      ]
    }
  ) });
};
lc.displayName = Et;
var dc = "SelectTrigger", uc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = nr(n), s = gt(dc, n), i = s.disabled || r, c = re(t, s.onTriggerChange), l = tr(n), u = d.useRef("touch"), [m, h, p] = Wc((g) => {
      const b = l().filter((v) => !v.disabled), S = b.find((v) => v.value === s.value), y = Fc(b, g, S);
      y !== void 0 && s.onValueChange(y.value);
    }), x = (g) => {
      i || (s.onOpenChange(!0), p()), g && (s.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ f(oo, { asChild: !0, ...a, children: /* @__PURE__ */ f(
      q.button,
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
        "data-placeholder": Ic(s.value) ? "" : void 0,
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
          const b = m.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && h(g.key), !(b && g.key === " ") && sv.includes(g.key) && (x(), g.preventDefault());
        })
      }
    ) });
  }
);
uc.displayName = dc;
var fc = "SelectValue", mc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = gt(fc, n), { onValueNodeHasChildrenChange: l } = c, u = a !== void 0, m = re(t, c.onValueNodeChange);
    return ye(() => {
      l(u);
    }, [l, u]), /* @__PURE__ */ f(
      q.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: Ic(c.value) ? /* @__PURE__ */ f(Ue, { children: s }) : a
      }
    );
  }
);
mc.displayName = fc;
var fv = "SelectIcon", hc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ f(q.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
hc.displayName = fv;
var mv = "SelectPortal", pc = (e) => /* @__PURE__ */ f(Yn, { asChild: !0, ...e });
pc.displayName = mv;
var Pt = "SelectContent", gc = d.forwardRef(
  (e, t) => {
    const n = gt(Pt, e.__scopeSelect), [r, o] = d.useState();
    if (ye(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Rn.createPortal(
        /* @__PURE__ */ f(bc, { scope: e.__scopeSelect, children: /* @__PURE__ */ f(er.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ f(yc, { ...e, ref: t });
  }
);
gc.displayName = Pt;
var Re = 10, [bc, bt] = Xt(Pt), hv = "SelectContentImpl", pv = /* @__PURE__ */ Qy("SelectContent.RemoveScroll"), yc = d.forwardRef(
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
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: x,
      hideWhenDetached: g,
      avoidCollisions: b,
      //
      ...S
    } = e, y = gt(Pt, n), [v, k] = d.useState(null), [C, w] = d.useState(null), M = re(t, (z) => k(z)), [N, O] = d.useState(null), [R, W] = d.useState(
      null
    ), H = tr(n), [V, $] = d.useState(!1), X = d.useRef(!1);
    d.useEffect(() => {
      if (v) return ao(v);
    }, [v]), Xr();
    const I = d.useCallback(
      (z) => {
        const [ae, ...Z] = H().map((J) => J.ref.current), [ee] = Z.slice(-1), Q = document.activeElement;
        for (const J of z)
          if (J === Q || (J == null || J.scrollIntoView({ block: "nearest" }), J === ae && C && (C.scrollTop = 0), J === ee && C && (C.scrollTop = C.scrollHeight), J == null || J.focus(), document.activeElement !== Q)) return;
      },
      [H, C]
    ), j = d.useCallback(
      () => I([N, v]),
      [I, N, v]
    );
    d.useEffect(() => {
      V && j();
    }, [V, j]);
    const { onOpenChange: B, triggerPointerDownPosRef: U } = y;
    d.useEffect(() => {
      if (v) {
        let z = { x: 0, y: 0 };
        const ae = (ee) => {
          var Q, J;
          z = {
            x: Math.abs(Math.round(ee.pageX) - (((Q = U.current) == null ? void 0 : Q.x) ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (((J = U.current) == null ? void 0 : J.y) ?? 0))
          };
        }, Z = (ee) => {
          z.x <= 10 && z.y <= 10 ? ee.preventDefault() : v.contains(ee.target) || B(!1), document.removeEventListener("pointermove", ae), U.current = null;
        };
        return U.current !== null && (document.addEventListener("pointermove", ae), document.addEventListener("pointerup", Z, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ae), document.removeEventListener("pointerup", Z, { capture: !0 });
        };
      }
    }, [v, B, U]), d.useEffect(() => {
      const z = () => B(!1);
      return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
      };
    }, [B]);
    const [D, fe] = Wc((z) => {
      const ae = H().filter((Q) => !Q.disabled), Z = ae.find((Q) => Q.ref.current === document.activeElement), ee = Fc(ae, z, Z);
      ee && setTimeout(() => ee.ref.current.focus());
    }), Pe = d.useCallback(
      (z, ae, Z) => {
        const ee = !X.current && !Z;
        (y.value !== void 0 && y.value === ae || ee) && (O(z), ee && (X.current = !0));
      },
      [y.value]
    ), xe = d.useCallback(() => v == null ? void 0 : v.focus(), [v]), ge = d.useCallback(
      (z, ae, Z) => {
        const ee = !X.current && !Z;
        (y.value !== void 0 && y.value === ae || ee) && W(z);
      },
      [y.value]
    ), le = r === "popper" ? Wr : vc, de = le === Wr ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: u,
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: x,
      hideWhenDetached: g,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ f(
      bc,
      {
        scope: n,
        content: v,
        viewport: C,
        onViewportChange: w,
        itemRefCallback: Pe,
        selectedItem: N,
        onItemLeave: xe,
        itemTextRefCallback: ge,
        focusSelectedItem: j,
        selectedItemText: R,
        position: r,
        isPositioned: V,
        searchRef: D,
        children: /* @__PURE__ */ f(Vn, { as: pv, allowPinchZoom: !0, children: /* @__PURE__ */ f(
          Wn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: Y(o, (z) => {
              var ae;
              (ae = y.trigger) == null || ae.focus({ preventScroll: !0 }), z.preventDefault();
            }),
            children: /* @__PURE__ */ f(
              In,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (z) => z.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ f(
                  le,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (z) => z.preventDefault(),
                    ...S,
                    ...de,
                    onPlaced: () => $(!0),
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
                      const ae = z.ctrlKey || z.altKey || z.metaKey;
                      if (z.key === "Tab" && z.preventDefault(), !ae && z.key.length === 1 && fe(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let ee = H().filter((Q) => !Q.disabled).map((Q) => Q.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                          const Q = z.target, J = ee.indexOf(Q);
                          ee = ee.slice(J + 1);
                        }
                        setTimeout(() => I(ee)), z.preventDefault();
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
yc.displayName = hv;
var gv = "SelectItemAlignedPosition", vc = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = gt(Pt, n), s = bt(Pt, n), [i, c] = d.useState(null), [l, u] = d.useState(null), m = re(t, (M) => u(M)), h = tr(n), p = d.useRef(!1), x = d.useRef(!0), { viewport: g, selectedItem: b, selectedItemText: S, focusSelectedItem: y } = s, v = d.useCallback(() => {
    if (a.trigger && a.valueNode && i && l && g && b && S) {
      const M = a.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), O = a.valueNode.getBoundingClientRect(), R = S.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const Q = R.left - N.left, J = O.left - Q, he = M.left - J, be = M.width + he, at = Math.max(be, N.width), yt = window.innerWidth - Re, vt = Ir(J, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, yt - at)
        ]);
        i.style.minWidth = be + "px", i.style.left = vt + "px";
      } else {
        const Q = N.right - R.right, J = window.innerWidth - O.right - Q, he = window.innerWidth - M.right - J, be = M.width + he, at = Math.max(be, N.width), yt = window.innerWidth - Re, vt = Ir(J, [
          Re,
          Math.max(Re, yt - at)
        ]);
        i.style.minWidth = be + "px", i.style.right = vt + "px";
      }
      const W = h(), H = window.innerHeight - Re * 2, V = g.scrollHeight, $ = window.getComputedStyle(l), X = parseInt($.borderTopWidth, 10), I = parseInt($.paddingTop, 10), j = parseInt($.borderBottomWidth, 10), B = parseInt($.paddingBottom, 10), U = X + I + V + B + j, D = Math.min(b.offsetHeight * 5, U), fe = window.getComputedStyle(g), Pe = parseInt(fe.paddingTop, 10), xe = parseInt(fe.paddingBottom, 10), ge = M.top + M.height / 2 - Re, le = H - ge, de = b.offsetHeight / 2, z = b.offsetTop + de, ae = X + I + z, Z = U - ae;
      if (ae <= ge) {
        const Q = W.length > 0 && b === W[W.length - 1].ref.current;
        i.style.bottom = "0px";
        const J = l.clientHeight - g.offsetTop - g.offsetHeight, he = Math.max(
          le,
          de + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (Q ? xe : 0) + J + j
        ), be = ae + he;
        i.style.height = be + "px";
      } else {
        const Q = W.length > 0 && b === W[0].ref.current;
        i.style.top = "0px";
        const he = Math.max(
          ge,
          X + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (Q ? Pe : 0) + de
        ) + Z;
        i.style.height = he + "px", g.scrollTop = ae - ge + g.offsetTop;
      }
      i.style.margin = `${Re}px 0`, i.style.minHeight = D + "px", i.style.maxHeight = H + "px", r == null || r(), requestAnimationFrame(() => p.current = !0);
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
  const [k, C] = d.useState();
  ye(() => {
    l && C(window.getComputedStyle(l).zIndex);
  }, [l]);
  const w = d.useCallback(
    (M) => {
      M && x.current === !0 && (v(), y == null || y(), x.current = !1);
    },
    [v, y]
  );
  return /* @__PURE__ */ f(
    yv,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: w,
      children: /* @__PURE__ */ f(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: k
          },
          children: /* @__PURE__ */ f(
            q.div,
            {
              ...o,
              ref: m,
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
vc.displayName = gv;
var bv = "SelectPopperPosition", Wr = d.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Re,
    ...a
  } = e, s = nr(n);
  return /* @__PURE__ */ f(
    Ns,
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
Wr.displayName = bv;
var [yv, No] = Xt(Pt, {}), Fr = "SelectViewport", wc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = bt(Fr, n), s = No(Fr, n), i = re(t, a.onViewportChange), c = d.useRef(0);
    return /* @__PURE__ */ E(Ue, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ f(er.Slot, { scope: n, children: /* @__PURE__ */ f(
        q.div,
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
            const u = l.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && m) {
              const p = Math.abs(c.current - u.scrollTop);
              if (p > 0) {
                const x = window.innerHeight - Re * 2, g = parseFloat(m.style.minHeight), b = parseFloat(m.style.height), S = Math.max(g, b);
                if (S < x) {
                  const y = S + p, v = Math.min(x, y), k = y - v;
                  m.style.height = v + "px", m.style.bottom === "0px" && (u.scrollTop = k > 0 ? k : 0, m.style.justifyContent = "flex-end");
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
wc.displayName = Fr;
var xc = "SelectGroup", [vv, wv] = Xt(xc), Sc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = et();
    return /* @__PURE__ */ f(vv, { scope: n, id: o, children: /* @__PURE__ */ f(q.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Sc.displayName = xc;
var kc = "SelectLabel", Cc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = wv(kc, n);
    return /* @__PURE__ */ f(q.div, { id: o.id, ...r, ref: t });
  }
);
Cc.displayName = kc;
var Tn = "SelectItem", [xv, Nc] = Xt(Tn), Mc = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = gt(Tn, n), c = bt(Tn, n), l = i.value === r, [u, m] = d.useState(a ?? ""), [h, p] = d.useState(!1), x = re(
      t,
      (y) => {
        var v;
        return (v = c.itemRefCallback) == null ? void 0 : v.call(c, y, r, o);
      }
    ), g = et(), b = d.useRef("touch"), S = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f(
      xv,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: l,
        onItemTextChange: d.useCallback((y) => {
          m((v) => v || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f(
          er.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ f(
              q.div,
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
                  var k;
                  ((k = c.searchRef) == null ? void 0 : k.current) !== "" && y.key === " " || (iv.includes(y.key) && S(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Mc.displayName = Tn;
var Qt = "SelectItemText", Ec = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = gt(Qt, n), i = bt(Qt, n), c = Nc(Qt, n), l = uv(Qt, n), [u, m] = d.useState(null), h = re(
      t,
      (S) => m(S),
      c.onItemTextChange,
      (S) => {
        var y;
        return (y = i.itemTextRefCallback) == null ? void 0 : y.call(i, S, c.value, c.disabled);
      }
    ), p = u == null ? void 0 : u.textContent, x = d.useMemo(
      () => /* @__PURE__ */ f("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: b } = l;
    return ye(() => (g(x), () => b(x)), [g, b, x]), /* @__PURE__ */ E(Ue, { children: [
      /* @__PURE__ */ f(q.span, { id: c.textId, ...a, ref: h }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren ? Rn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
Ec.displayName = Qt;
var Pc = "SelectItemIndicator", Oc = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Nc(Pc, n).isSelected ? /* @__PURE__ */ f(q.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Oc.displayName = Pc;
var zr = "SelectScrollUpButton", Dc = d.forwardRef((e, t) => {
  const n = bt(zr, e.__scopeSelect), r = No(zr, e.__scopeSelect), [o, a] = d.useState(!1), s = re(t, r.onScrollButtonChange);
  return ye(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    Rc,
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
Dc.displayName = zr;
var Br = "SelectScrollDownButton", Tc = d.forwardRef((e, t) => {
  const n = bt(Br, e.__scopeSelect), r = No(Br, e.__scopeSelect), [o, a] = d.useState(!1), s = re(t, r.onScrollButtonChange);
  return ye(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < l;
        a(u);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    Rc,
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
Tc.displayName = Br;
var Rc = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = bt("SelectScrollButton", n), s = d.useRef(null), i = tr(n), c = d.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return d.useEffect(() => () => c(), [c]), ye(() => {
    var u;
    const l = i().find((m) => m.ref.current === document.activeElement);
    (u = l == null ? void 0 : l.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ f(
    q.div,
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
}), Sv = "SelectSeparator", Ac = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ f(q.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ac.displayName = Sv;
var $r = "SelectArrow", kv = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = nr(n), a = gt($r, n), s = bt($r, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ f(Ms, { ...o, ...r, ref: t }) : null;
  }
);
kv.displayName = $r;
var Cv = "SelectBubbleInput", _c = d.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = d.useRef(null), a = re(r, o), s = ic(t);
    return d.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (s !== t && u) {
        const m = new Event("change", { bubbles: !0 });
        u.call(i, t), i.dispatchEvent(m);
      }
    }, [s, t]), /* @__PURE__ */ f(
      q.select,
      {
        ...n,
        style: { ...cc, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
_c.displayName = Cv;
function Ic(e) {
  return e === "" || e === void 0;
}
function Wc(e) {
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
function Fc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Nv(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Nv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Mv = lc, zc = uc, Ev = mc, Pv = hc, Ov = pc, Bc = gc, Dv = wc, Tv = Sc, $c = Cc, Lc = Mc, Rv = Ec, Av = Oc, Yc = Dc, Hc = Tc, Vc = Ac;
const tw = Mv, nw = Tv, rw = Ev, _v = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  zc,
  {
    ref: r,
    className: P(
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
      /* @__PURE__ */ f(Pv, { asChild: !0, children: /* @__PURE__ */ f(jr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
_v.displayName = zc.displayName;
const jc = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Yc,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(Vl, { className: "h-4 w-4" })
  }
));
jc.displayName = Yc.displayName;
const Uc = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Hc,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(jr, { className: "h-4 w-4" })
  }
));
Uc.displayName = Hc.displayName;
const Iv = d.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f(Ov, { children: /* @__PURE__ */ E(
  Bc,
  {
    ref: o,
    className: P(
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
      /* @__PURE__ */ f(jc, {}),
      /* @__PURE__ */ f(
        Dv,
        {
          className: P(
            "p-1 overflow-y-auto",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ f(Uc, {})
    ]
  }
) }));
Iv.displayName = Bc.displayName;
const Wv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  $c,
  {
    ref: n,
    className: P("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
Wv.displayName = $c.displayName;
const Fv = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  Lc,
  {
    ref: r,
    className: P(
      "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none",
      "focus:bg-subtle focus:text-text-base",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f(Av, { children: /* @__PURE__ */ f(An, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ f(Rv, { children: t })
    ]
  }
));
Fv.displayName = Lc.displayName;
const zv = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Vc,
  {
    ref: n,
    className: P("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
zv.displayName = Vc.displayName;
function ow({
  open: e,
  onClose: t,
  width: n = 380,
  header: r,
  children: o,
  className: a,
  ...s
}) {
  return e ? /* @__PURE__ */ E(
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
      className: P(
        "bg-surface border-l border-border shadow-2xl",
        a
      ),
      ...s,
      children: [
        /* @__PURE__ */ f(
          "button",
          {
            onClick: t,
            className: "absolute top-3 right-3 z-10 rounded-md p-1.5 text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
            "aria-label": "Chiudi pannello",
            children: /* @__PURE__ */ f(_n, { className: "size-5" })
          }
        ),
        r && /* @__PURE__ */ f("div", { className: "px-4 pt-4 pb-2 pr-10", children: r }),
        /* @__PURE__ */ f("div", { className: P(r ? "" : "pt-4"), children: o })
      ]
    }
  ) : null;
}
function Gc({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: P("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function Bv({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ f("div", { className: P("space-y-2", t), children: Array.from({ length: e }).map((n, r) => /* @__PURE__ */ f(
    Gc,
    {
      className: P("h-4", r === e - 1 ? "w-2/3" : "w-full")
    },
    r
  )) });
}
function aw({ className: e }) {
  return /* @__PURE__ */ E("div", { className: P("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ f(Gc, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ f(Bv, { lines: 3 })
  ] });
}
const $v = mt(
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
function Lv({ className: e, size: t, label: n = "Caricamento...", ...r }) {
  return /* @__PURE__ */ E(
    "div",
    {
      role: "status",
      "aria-label": n,
      className: P("inline-flex items-center justify-center", e),
      ...r,
      children: [
        /* @__PURE__ */ f("div", { className: $v({ size: t }) }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: n })
      ]
    }
  );
}
function sw({ label: e }) {
  return /* @__PURE__ */ E("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ f(Lv, { size: "lg", label: e }),
    e && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
const Yv = mt(
  "flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors select-none",
  {
    variants: {
      state: {
        completed: "bg-databeez-primary text-white",
        active: "bg-databeez-primary text-white",
        upcoming: "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
      }
    },
    defaultVariants: {
      state: "upcoming"
    }
  }
), Hv = mt("text-sm transition-colors", {
  variants: {
    state: {
      completed: "text-gray-400 dark:text-gray-500",
      active: "font-medium text-gray-900 dark:text-white",
      upcoming: "text-gray-400 dark:text-gray-500"
    }
  },
  defaultVariants: {
    state: "upcoming"
  }
}), Vv = mt("w-8 h-px transition-colors", {
  variants: {
    completed: {
      true: "bg-databeez-primary",
      false: "bg-gray-200 dark:bg-gray-700"
    }
  },
  defaultVariants: {
    completed: !1
  }
});
function jv(e) {
  return typeof e == "string" ? { label: e } : e;
}
function Uv(e, t) {
  return e < t ? "completed" : e === t ? "active" : "upcoming";
}
const Gv = d.forwardRef(
  ({ className: e, steps: t, activeStep: n, completedIcon: r = "✓", ...o }, a) => /* @__PURE__ */ f(
    "div",
    {
      ref: a,
      className: P("flex items-center justify-center gap-2", e),
      role: "navigation",
      "aria-label": "Progresso",
      ...o,
      children: t.map((s, i) => {
        const c = jv(s), l = Uv(i, n);
        return /* @__PURE__ */ E("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ f(
            "div",
            {
              className: P(Yv({ state: l })),
              "aria-current": l === "active" ? "step" : void 0,
              children: c.icon ? c.icon : l === "completed" ? r : i + 1
            }
          ),
          /* @__PURE__ */ f("span", { className: P(Hv({ state: l })), children: c.label }),
          i < t.length - 1 && /* @__PURE__ */ f(
            "div",
            {
              className: P(
                Vv({ completed: i < n })
              ),
              "aria-hidden": "true"
            }
          )
        ] }, c.label);
      })
    }
  )
);
Gv.displayName = "Stepper";
var rr = "Switch", [qv] = rt(rr), [Xv, Kv] = qv(rr), qc = d.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: c = "on",
      onCheckedChange: l,
      form: u,
      ...m
    } = e, [h, p] = d.useState(null), x = re(t, (v) => p(v)), g = d.useRef(!1), b = h ? u || !!h.closest("form") : !0, [S, y] = Nt({
      prop: o,
      defaultProp: a ?? !1,
      onChange: l,
      caller: rr
    });
    return /* @__PURE__ */ E(Xv, { scope: n, checked: S, disabled: i, children: [
      /* @__PURE__ */ f(
        q.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": S,
          "aria-required": s,
          "data-state": Qc(S),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...m,
          ref: x,
          onClick: Y(e.onClick, (v) => {
            y((k) => !k), b && (g.current = v.isPropagationStopped(), g.current || v.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ f(
        Zc,
        {
          control: h,
          bubbles: !g.current,
          name: r,
          value: c,
          checked: S,
          required: s,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
qc.displayName = rr;
var Xc = "SwitchThumb", Kc = d.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Kv(Xc, n);
    return /* @__PURE__ */ f(
      q.span,
      {
        "data-state": Qc(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Kc.displayName = Xc;
var Zv = "SwitchBubbleInput", Zc = d.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = d.useRef(null), i = re(s, a), c = ic(n), l = hs(t);
    return d.useEffect(() => {
      const u = s.current;
      if (!u) return;
      const m = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (c !== n && p) {
        const x = new Event("click", { bubbles: r });
        p.call(u, n), u.dispatchEvent(x);
      }
    }, [c, n, r]), /* @__PURE__ */ f(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Zc.displayName = Zv;
function Qc(e) {
  return e ? "checked" : "unchecked";
}
var Qv = qc, Jv = Kc;
const e1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Qv,
  {
    className: P(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-databeez-primary data-[state=unchecked]:bg-subtle",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ f(
      Jv,
      {
        className: P(
          "pointer-events-none block h-5 w-5 rounded-full bg-surface shadow-sm ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
e1.displayName = "Switch";
function iw({
  icon: e,
  iconColor: t = "#f59e0b",
  label: n,
  value: r,
  trend: o,
  className: a,
  ...s
}) {
  return /* @__PURE__ */ E(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-4 text-center hover:shadow-md transition-shadow",
        a
      ),
      ...s,
      children: [
        e && /* @__PURE__ */ f(
          e,
          {
            className: "h-6 w-6 mx-auto mb-2",
            style: { color: t }
          }
        ),
        /* @__PURE__ */ f("div", { className: "text-2xl font-bold text-text-base", children: r }),
        /* @__PURE__ */ f("div", { className: "text-sm text-text-muted mt-0.5", children: n }),
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
const t1 = mt(
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
), n1 = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-text-muted"
};
function cw({
  variant: e = "neutral",
  label: t,
  dot: n = !0,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ E(
    "span",
    {
      className: P(t1({ variant: e }), r),
      ...o,
      children: [
        n && /* @__PURE__ */ f(
          "span",
          {
            className: P(
              "h-1.5 w-1.5 rounded-full shrink-0",
              n1[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
const r1 = {
  operational: { dot: "bg-green-500", text: "text-green-500 dark:text-green-400", label: "Operational" },
  degraded: { dot: "bg-yellow-500", text: "text-yellow-500 dark:text-yellow-400", label: "Degraded" },
  outage: { dot: "bg-red-500", text: "text-red-500 dark:text-red-400", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function lw({
  label: e,
  status: t,
  statusLabel: n,
  className: r,
  ...o
}) {
  const a = r1[t];
  return /* @__PURE__ */ E("div", { className: P("flex items-center justify-between", r), ...o, children: [
    /* @__PURE__ */ E("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f("div", { className: P("h-2 w-2 rounded-full mr-3", a.dot) }),
      /* @__PURE__ */ f("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ f("span", { className: P("text-sm", a.text), children: n ?? a.label })
  ] });
}
function dw({ tabs: e, activeTab: t, onChange: n, className: r }) {
  return /* @__PURE__ */ f("div", { className: P("border-b border-border", r), children: /* @__PURE__ */ f("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
    const a = t === o.id, s = o.icon;
    return /* @__PURE__ */ E(
      "button",
      {
        role: "tab",
        "aria-selected": a,
        onClick: () => n(o.id),
        className: P(
          "inline-flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
          a ? "border-databeez-primary text-databeez-primary" : "border-transparent text-text-muted hover:text-text-base hover:border-border"
        ),
        children: [
          s && /* @__PURE__ */ f(s, { className: "h-4 w-4" }),
          o.label
        ]
      },
      o.id
    );
  }) }) });
}
const o1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f(
  "table",
  {
    ref: n,
    className: P("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
o1.displayName = "Table";
const a1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("thead", { ref: n, className: P("bg-subtle border-b border-border", e), ...t }));
a1.displayName = "TableHeader";
const s1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tbody",
  {
    ref: n,
    className: P("divide-y divide-border", e),
    ...t
  }
));
s1.displayName = "TableBody";
const i1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tfoot",
  {
    ref: n,
    className: P("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
i1.displayName = "TableFooter";
const c1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tr",
  {
    ref: n,
    className: P(
      "transition-colors hover:bg-subtle data-[state=selected]:bg-primary-50",
      e
    ),
    ...t
  }
));
c1.displayName = "TableRow";
const l1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "th",
  {
    ref: n,
    className: P(
      "h-10 px-4 text-left align-middle font-semibold text-text-muted text-xs uppercase tracking-wider",
      e
    ),
    ...t
  }
));
l1.displayName = "TableHead";
const d1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "td",
  {
    ref: n,
    className: P("px-4 py-3 align-middle text-text-base", e),
    ...t
  }
));
d1.displayName = "TableCell";
const u1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "caption",
  {
    ref: n,
    className: P("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
u1.displayName = "TableCaption";
var Mr = "rovingFocusGroup.onEntryFocus", f1 = { bubbles: !1, cancelable: !0 }, ln = "RovingFocusGroup", [Lr, Jc, m1] = sc(ln), [h1, el] = rt(
  ln,
  [m1]
), [p1, g1] = h1(ln), tl = d.forwardRef(
  (e, t) => /* @__PURE__ */ f(Lr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Lr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(b1, { ...e, ref: t }) }) })
);
tl.displayName = ln;
var b1 = d.forwardRef((e, t) => {
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
    ...m
  } = e, h = d.useRef(null), p = re(t, h), x = Zn(a), [g, b] = Nt({
    prop: s,
    defaultProp: i ?? null,
    onChange: c,
    caller: ln
  }), [S, y] = d.useState(!1), v = we(l), k = Jc(n), C = d.useRef(!1), [w, M] = d.useState(0);
  return d.useEffect(() => {
    const N = h.current;
    if (N)
      return N.addEventListener(Mr, v), () => N.removeEventListener(Mr, v);
  }, [v]), /* @__PURE__ */ f(
    p1,
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
      children: /* @__PURE__ */ f(
        q.div,
        {
          tabIndex: S || w === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: Y(e.onFocus, (N) => {
            const O = !C.current;
            if (N.target === N.currentTarget && O && !S) {
              const R = new CustomEvent(Mr, f1);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const W = k().filter((I) => I.focusable), H = W.find((I) => I.active), V = W.find((I) => I.id === g), X = [H, V, ...W].filter(
                  Boolean
                ).map((I) => I.ref.current);
                ol(X, u);
              }
            }
            C.current = !1;
          }),
          onBlur: Y(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), nl = "RovingFocusGroupItem", rl = d.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, c = et(), l = a || c, u = g1(nl, n), m = u.currentTabStopId === l, h = Jc(n), { onFocusableItemAdd: p, onFocusableItemRemove: x, currentTabStopId: g } = u;
    return d.useEffect(() => {
      if (r)
        return p(), () => x();
    }, [r, p, x]), /* @__PURE__ */ f(
      Lr.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f(
          q.span,
          {
            tabIndex: m ? 0 : -1,
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
              const S = w1(b, u.orientation, u.dir);
              if (S !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let v = h().filter((k) => k.focusable).map((k) => k.ref.current);
                if (S === "last") v.reverse();
                else if (S === "prev" || S === "next") {
                  S === "prev" && v.reverse();
                  const k = v.indexOf(b.currentTarget);
                  v = u.loop ? x1(v, k + 1) : v.slice(k + 1);
                }
                setTimeout(() => ol(v));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: g != null }) : s
          }
        )
      }
    );
  }
);
rl.displayName = nl;
var y1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function v1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function w1(e, t, n) {
  const r = v1(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return y1[r];
}
function ol(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function x1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var S1 = tl, k1 = rl, or = "Tabs", [C1] = rt(or, [
  el
]), al = el(), [N1, Mo] = C1(or), sl = d.forwardRef(
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
    } = e, u = Zn(i), [m, h] = Nt({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: or
    });
    return /* @__PURE__ */ f(
      N1,
      {
        scope: n,
        baseId: et(),
        value: m,
        onValueChange: h,
        orientation: s,
        dir: u,
        activationMode: c,
        children: /* @__PURE__ */ f(
          q.div,
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
sl.displayName = or;
var il = "TabsList", cl = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Mo(il, n), s = al(n);
    return /* @__PURE__ */ f(
      S1,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ f(
          q.div,
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
cl.displayName = il;
var ll = "TabsTrigger", dl = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Mo(ll, n), i = al(n), c = ml(s.baseId, r), l = hl(s.baseId, r), u = r === s.value;
    return /* @__PURE__ */ f(
      k1,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ f(
          q.button,
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
            onMouseDown: Y(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? s.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: Y(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && s.onValueChange(r);
            }),
            onFocus: Y(e.onFocus, () => {
              const m = s.activationMode !== "manual";
              !u && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
dl.displayName = ll;
var ul = "TabsContent", fl = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Mo(ul, n), c = ml(i.baseId, r), l = hl(i.baseId, r), u = r === i.value, m = d.useRef(u);
    return d.useEffect(() => {
      const h = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ f(We, { present: o || u, children: ({ present: h }) => /* @__PURE__ */ f(
      q.div,
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
          animationDuration: m.current ? "0s" : void 0
        },
        children: h && a
      }
    ) });
  }
);
fl.displayName = ul;
function ml(e, t) {
  return `${e}-trigger-${t}`;
}
function hl(e, t) {
  return `${e}-content-${t}`;
}
var M1 = sl, pl = cl, gl = dl, bl = fl;
const uw = M1, E1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  pl,
  {
    ref: n,
    className: P(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
E1.displayName = pl.displayName;
const P1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  gl,
  {
    ref: n,
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
P1.displayName = gl.displayName;
const O1 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  bl,
  {
    ref: n,
    className: P(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
O1.displayName = bl.displayName;
const D1 = d.forwardRef(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...a }, s) => {
    const i = o ?? (t == null ? void 0 : t.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ E("div", { className: "w-full space-y-1.5", children: [
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
          ref: s,
          className: P(
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
      n && /* @__PURE__ */ f("p", { id: `${i}-error`, className: "text-xs text-error-500", children: n }),
      !n && r && /* @__PURE__ */ f("p", { id: `${i}-helper`, className: "text-xs text-text-muted", children: r })
    ] });
  }
);
D1.displayName = "Textarea";
function T1({
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
  }, [e]), m = Array.from({ length: 24 }, (b, S) => String(S).padStart(2, "0")), h = Array.from(
    { length: Math.ceil(60 / i) },
    (b, S) => String(S * i).padStart(2, "0")
  ), p = Array.from({ length: 60 }, (b, S) => String(S).padStart(2, "0"));
  function x(b, S) {
    const y = { ...u, [b]: S };
    y.hours || (y.hours = "00"), y.minutes || (y.minutes = "00");
    const v = c ? `${y.hours}:${y.minutes}:${y.seconds || "00"}` : `${y.hours}:${y.minutes}`;
    t == null || t(v);
  }
  const g = P(
    "h-10 rounded-lg border border-border bg-surface px-2 py-2 text-sm text-text-base appearance-none",
    "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
    "disabled:cursor-not-allowed disabled:opacity-50",
    r && "border-red-300 focus:ring-red-500 focus:border-red-500"
  );
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    n && /* @__PURE__ */ f("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: n }),
    /* @__PURE__ */ E(
      "div",
      {
        className: P("flex items-center gap-2", s),
        children: [
          /* @__PURE__ */ f(Ul, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ E(
            "select",
            {
              id: l,
              disabled: a,
              value: u.hours,
              onChange: (b) => x("hours", b.target.value),
              className: g,
              "aria-label": "Ore",
              children: [
                /* @__PURE__ */ f("option", { value: "", disabled: !0, children: "HH" }),
                m.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
              ]
            }
          ),
          /* @__PURE__ */ f("span", { className: "text-text-muted font-medium", children: ":" }),
          /* @__PURE__ */ E(
            "select",
            {
              disabled: a,
              value: u.minutes,
              onChange: (b) => x("minutes", b.target.value),
              className: g,
              "aria-label": "Minuti",
              children: [
                /* @__PURE__ */ f("option", { value: "", disabled: !0, children: "MM" }),
                h.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
              ]
            }
          ),
          c && /* @__PURE__ */ E(Ue, { children: [
            /* @__PURE__ */ f("span", { className: "text-text-muted font-medium", children: ":" }),
            /* @__PURE__ */ E(
              "select",
              {
                disabled: a,
                value: u.seconds,
                onChange: (b) => x("seconds", b.target.value),
                className: g,
                "aria-label": "Secondi",
                children: [
                  /* @__PURE__ */ f("option", { value: "", disabled: !0, children: "SS" }),
                  p.map((b) => /* @__PURE__ */ f("option", { value: b, children: b }, b))
                ]
              }
            )
          ] })
        ]
      }
    ),
    r && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: r }),
    o && !r && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: o })
  ] });
}
T1.displayName = "TimePicker";
const Yr = "databeez-theme", fw = `(function(){var t=localStorage.getItem('${Yr}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, yl = Da({
  theme: "system",
  setTheme: () => {
  }
});
function mw({ children: e }) {
  const [t, n] = Ve("system"), r = (a) => {
    const s = document.documentElement, i = window.matchMedia("(prefers-color-scheme: dark)").matches;
    a === "dark" || a === "system" && i ? s.classList.add("dark") : s.classList.remove("dark");
  };
  Ht(() => {
    const s = localStorage.getItem(Yr) ?? "system";
    n(s), r(s);
  }, []), Ht(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), s = () => r("system");
    return a.addEventListener("change", s), () => a.removeEventListener("change", s);
  }, [t]);
  const o = (a) => {
    n(a), localStorage.setItem(Yr, a), r(a);
  };
  return /* @__PURE__ */ f(yl.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function R1() {
  return Ta(yl);
}
const Er = ["light", "dark", "system"];
function hw() {
  const { theme: e, setTheme: t } = R1(), [n, r] = Ve(!1);
  Ht(() => {
    r(!0);
  }, []);
  const o = () => {
    const a = Er.indexOf(e);
    t(Er[(a + 1) % Er.length]);
  };
  return n ? /* @__PURE__ */ f(
    "button",
    {
      onClick: o,
      className: "p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
      "aria-label": `Tema: ${e}`,
      title: `Tema corrente: ${e}`,
      children: e === "dark" ? /* @__PURE__ */ f(td, { className: "h-4 w-4" }) : e === "system" ? /* @__PURE__ */ f(ed, { className: "h-4 w-4" }) : /* @__PURE__ */ f(id, { className: "h-4 w-4" })
    }
  ) : null;
}
function pw({ user: e, bumblebeeUrl: t, extraItems: n, onLogout: r, showLaunchpadLink: o = !0 }) {
  const [a, s] = Ve(!1), i = Bt(null);
  Ht(() => {
    const u = (m) => {
      i.current && !i.current.contains(m.target) && s(!1);
    };
    return document.addEventListener("mousedown", u), () => document.removeEventListener("mousedown", u);
  }, []);
  const c = r ?? (() => {
    window.location.href = `${t}/logout`;
  }), l = n && n.length > 0;
  return /* @__PURE__ */ E("div", { className: "relative", ref: i, children: [
    /* @__PURE__ */ E(
      "button",
      {
        onClick: () => s(!a),
        className: "flex items-center space-x-2 text-text-muted hover:text-databeez-primary px-3 py-2 text-sm font-medium transition-colors",
        children: [
          /* @__PURE__ */ f(Ur, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "hidden sm:block", children: e.fullname }),
          /* @__PURE__ */ f(jr, { className: "h-4 w-4" })
        ]
      }
    ),
    a && /* @__PURE__ */ E("div", { className: "absolute right-0 mt-2 w-56 bg-surface border border-border rounded-md shadow-lg py-1 z-50", children: [
      /* @__PURE__ */ E("div", { className: "px-4 py-2 border-b border-border", children: [
        /* @__PURE__ */ f("p", { className: "text-sm font-medium text-text-base truncate", children: e.fullname }),
        /* @__PURE__ */ f("p", { className: "text-xs text-text-muted truncate", children: e.email })
      ] }),
      l && /* @__PURE__ */ E(Ue, { children: [
        n.map(
          (u, m) => u.href ? /* @__PURE__ */ E(
            "a",
            {
              href: u.href,
              className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
              onClick: () => s(!1),
              children: [
                u.icon && /* @__PURE__ */ f("span", { className: "mr-2 flex-shrink-0", children: u.icon }),
                u.label
              ]
            },
            m
          ) : /* @__PURE__ */ E(
            "button",
            {
              onClick: () => {
                var h;
                s(!1), (h = u.onClick) == null || h.call(u);
              },
              className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
              children: [
                u.icon && /* @__PURE__ */ f("span", { className: "mr-2 flex-shrink-0", children: u.icon }),
                u.label
              ]
            },
            m
          )
        ),
        /* @__PURE__ */ f("div", { className: "border-t border-border my-1" })
      ] }),
      /* @__PURE__ */ E(
        "a",
        {
          href: `${t}/profile`,
          className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
          onClick: () => s(!1),
          children: [
            /* @__PURE__ */ f(Gl, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
            "Gestione Profilo"
          ]
        }
      ),
      o && /* @__PURE__ */ E(
        "a",
        {
          href: `${t}/launchpad`,
          className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
          onClick: () => s(!1),
          children: [
            /* @__PURE__ */ f(Zl, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
            "Torna al LaunchPad"
          ]
        }
      ),
      /* @__PURE__ */ f("div", { className: "border-t border-border my-1" }),
      /* @__PURE__ */ E(
        "button",
        {
          onClick: () => {
            s(!1), c();
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
          children: [
            /* @__PURE__ */ f(Ql, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
            "Logout"
          ]
        }
      )
    ] })
  ] });
}
function gw(e, t = {}) {
  const { immediate: n = !0 } = t, [r, o] = Ve(null), [a, s] = Ve(n), [i, c] = Ve(null), l = Bt(e);
  l.current = e;
  const u = ke(async () => {
    var m;
    s(!0), c(null);
    try {
      const h = await l.current();
      h.success && h.data !== void 0 ? o(h.data) : c(((m = h.error) == null ? void 0 : m.message) ?? "Si è verificato un errore");
    } catch (h) {
      c(h instanceof Error ? h.message : "Si è verificato un errore");
    } finally {
      s(!1);
    }
  }, []);
  return Ht(() => {
    n && u();
  }, t.deps ?? []), { data: r, loading: a, error: i, refetch: u };
}
const Ea = {
  O: { label: "Organizzazione", icon: Vr },
  P: { label: "Persona", icon: Ur }
};
function bw(e) {
  return Ea[e ?? ""] ?? Ea.O;
}
function yw(e) {
  switch (e) {
    case "F":
      return { label: "Professionista", icon: Yl };
    default:
      return { label: "Persona", icon: Ur };
  }
}
const A1 = {
  S: { label: "Società", icon: Vr },
  D: { label: "Ditta individuale", icon: sd },
  E: { label: "Ente pubblico", icon: Kl },
  X: { label: "Estera", icon: ql },
  P: { label: "PIVA", icon: rd },
  A: { label: "Altro", icon: Xl }
}, _1 = { label: "Organizzazione", icon: Vr };
function vw(e) {
  return A1[e ?? ""] ?? _1;
}
const ww = {
  label: "Indirizzo",
  icon: Jl
}, xw = {
  label: "Sede",
  icon: dd
};
export {
  ww as ADDRESS_META,
  Ka as APP_LOGOS,
  z1 as APP_LOGO_SLUGS,
  ru as Alert,
  B1 as AppLogo,
  Y1 as Badge,
  au as BeeGraphLogo,
  su as BeeMapLogo,
  iu as BeeScoutLogo,
  Qa as Button,
  bo as Calendar,
  wu as Card,
  Cu as CardContent,
  ku as CardDescription,
  Nu as CardFooter,
  xu as CardHeader,
  Su as CardTitle,
  Mu as ChatInput,
  V1 as CodeBlock,
  Nh as ColorPicker,
  Mh as Combobox,
  Ph as CopyButton,
  Ch as DEFAULT_PRESETS,
  j1 as DataBeezLogo,
  ey as DatePicker,
  ty as DateRangePicker,
  G1 as Dialog,
  X1 as DialogClose,
  xy as DialogContent,
  Ny as DialogDescription,
  ky as DialogFooter,
  Sy as DialogHeader,
  ji as DialogOverlay,
  wy as DialogPortal,
  Cy as DialogTitle,
  q1 as DialogTrigger,
  K1 as EmptyState,
  Q1 as FeatureCard,
  cu as HaiveLogo,
  $1 as InfoRow,
  Py as Input,
  Oy as InputWithIcon,
  xw as LOCATION_META,
  Ey as MarkdownContent,
  Z1 as MessageBubble,
  J1 as MethodBadge,
  A1 as ORG_TYPE_META,
  ew as PageHeader,
  Un as Popover,
  H1 as PopoverAnchor,
  on as PopoverContent,
  Gn as PopoverTrigger,
  Ea as SUBJECT_TYPE_META,
  jy as ScrollArea,
  ac as ScrollBar,
  Uy as SearchInput,
  L1 as Section,
  tw as Select,
  Iv as SelectContent,
  nw as SelectGroup,
  Fv as SelectItem,
  Wv as SelectLabel,
  Uc as SelectScrollDownButton,
  jc as SelectScrollUpButton,
  zv as SelectSeparator,
  _v as SelectTrigger,
  rw as SelectValue,
  ow as SidePanel,
  Gc as Skeleton,
  aw as SkeletonCard,
  Bv as SkeletonText,
  Lv as Spinner,
  sw as SpinnerOverlay,
  iw as StatCard,
  cw as StatusBadge,
  lw as StatusIndicatorRow,
  Gv as Stepper,
  ou as SwarmLogo,
  e1 as Switch,
  fw as THEME_ANTI_FOUC_SCRIPT,
  Yr as THEME_STORAGE_KEY,
  dw as TabSwitch,
  o1 as Table,
  s1 as TableBody,
  u1 as TableCaption,
  d1 as TableCell,
  i1 as TableFooter,
  l1 as TableHead,
  a1 as TableHeader,
  c1 as TableRow,
  uw as Tabs,
  O1 as TabsContent,
  E1 as TabsList,
  P1 as TabsTrigger,
  D1 as Textarea,
  mw as ThemeProvider,
  hw as ThemeSwitcher,
  T1 as TimePicker,
  pw as UserMenu,
  tu as alertVariants,
  lu as badgeVariants,
  vu as buttonVariants,
  P as cn,
  vw as getOrgMeta,
  yw as getPersonMeta,
  bw as getSubjectMeta,
  $v as spinnerVariants,
  t1 as statusBadgeVariants,
  Yv as stepCircleVariants,
  Vv as stepConnectorVariants,
  Hv as stepLabelVariants,
  gw as useAsyncData,
  R1 as useTheme
};
