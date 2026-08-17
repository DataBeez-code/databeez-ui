"use client";
import { jsxs as E, jsx as d, Fragment as Ge } from "react/jsx-runtime";
import * as u from "react";
import T, { forwardRef as Ba, createElement as Ro, useLayoutEffect as La, useState as _e, createContext as $a, useContext as Ya, useCallback as Se, useRef as dt, useEffect as Mt, useMemo as kn, useId as Zl } from "react";
import * as Wn from "react-dom";
import Ql, { createPortal as Jl } from "react-dom";
function Ha(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ha(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ur() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ha(e)) && (r && (r += " "), r += t);
  return r;
}
const Ao = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, _o = Ur, ht = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return _o(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((l) => {
    const f = n == null ? void 0 : n[l], m = a == null ? void 0 : a[l];
    if (f === null) return null;
    const h = Ao(f) || Ao(m);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, f) => {
    let [m, h] = f;
    return h === void 0 || (l[m] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, f) => {
    let { class: m, className: h, ...p } = f;
    return Object.entries(p).every((y) => {
      let [g, b] = y;
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
  return _o(e, s, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var ed = {
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
const td = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), q = (e, t) => {
  const n = Ba(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: a = 2, absoluteStrokeWidth: s, children: i, ...c }, l) => Ro(
      "svg",
      {
        ref: l,
        ...ed,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: s ? Number(a) * 24 / Number(o) : a,
        className: `lucide lucide-${td(e)}`,
        ...c
      },
      [
        ...t.map(([f, m]) => Ro(f, m)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, nd = q("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), rd = q("Banknote", [
  [
    "rect",
    { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }
  ],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]), od = q("Briefcase", [
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
]), qr = q("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]), Va = q("Calendar", [
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
]), ad = q("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]), on = q("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), an = q("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), sd = q("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), ja = q("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), id = q("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), cd = q("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]), Ga = q("Copy", [
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
]), Io = q("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]), ld = q("ExternalLink", [
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }
  ],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]), dd = q("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]), ud = q("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]), fd = q("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Wo = q("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), md = q("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]), hd = q("LayoutGrid", [
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
]), pd = q("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), gd = q("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]), bd = q("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), yd = q("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]), vd = q("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), wd = q("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]), xd = q("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]), kd = q("RefreshCw", [
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
]), Ua = q("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Sd = q("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), Cd = q("ShieldCheck", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]), Fo = q("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]), Nd = q("Store", [
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
]), Md = q("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), Ed = q("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]), Pd = q("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]), en = q("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), Dd = q("Warehouse", [
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
]), Od = q("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]), Fn = q("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Td = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, Rd = (e, t) => ({
  classGroupId: e,
  validator: t
}), qa = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Mn = "-", zo = [], Ad = "arbitrary..", _d = (e) => {
  const t = Wd(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      if (s.startsWith("[") && s.endsWith("]"))
        return Id(s);
      const i = s.split(Mn), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return Xa(i, c, t);
    },
    getConflictingClassGroupIds: (s, i) => {
      if (i) {
        const c = r[s], l = n[s];
        return c ? l ? Td(l, c) : c : l || zo;
      }
      return n[s] || zo;
    }
  };
}, Xa = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], a = n.nextPart.get(o);
  if (a) {
    const l = Xa(e, t + 1, a);
    if (l) return l;
  }
  const s = n.validators;
  if (s === null)
    return;
  const i = t === 0 ? e.join(Mn) : e.slice(t).join(Mn), c = s.length;
  for (let l = 0; l < c; l++) {
    const f = s[l];
    if (f.validator(i))
      return f.classGroupId;
  }
}, Id = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Ad + r : void 0;
})(), Wd = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Fd(n, t);
}, Fd = (e, t) => {
  const n = qa();
  for (const r in e) {
    const o = e[r];
    Xr(o, n, r, t);
  }
  return n;
}, Xr = (e, t, n, r) => {
  const o = e.length;
  for (let a = 0; a < o; a++) {
    const s = e[a];
    zd(s, t, n, r);
  }
}, zd = (e, t, n, r) => {
  if (typeof e == "string") {
    Bd(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Ld(e, t, n, r);
    return;
  }
  $d(e, t, n, r);
}, Bd = (e, t, n) => {
  const r = e === "" ? t : Ka(t, e);
  r.classGroupId = n;
}, Ld = (e, t, n, r) => {
  if (Yd(e)) {
    Xr(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(Rd(n, e));
}, $d = (e, t, n, r) => {
  const o = Object.entries(e), a = o.length;
  for (let s = 0; s < a; s++) {
    const [i, c] = o[s];
    Xr(c, Ka(t, i), n, r);
  }
}, Ka = (e, t) => {
  let n = e;
  const r = t.split(Mn), o = r.length;
  for (let a = 0; a < o; a++) {
    const s = r[a];
    let i = n.nextPart.get(s);
    i || (i = qa(), n.nextPart.set(s, i)), n = i;
  }
  return n;
}, Yd = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Hd = (e) => {
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
}, Tr = "!", Bo = ":", Vd = [], Lo = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), jd = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const a = [];
    let s = 0, i = 0, c = 0, l;
    const f = o.length;
    for (let g = 0; g < f; g++) {
      const b = o[g];
      if (s === 0 && i === 0) {
        if (b === Bo) {
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
    m.endsWith(Tr) ? (h = m.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Tr) && (h = m.slice(1), p = !0)
    );
    const y = l && l > c ? l - c : void 0;
    return Lo(a, p, h, y);
  };
  if (t) {
    const o = t + Bo, a = r;
    r = (s) => s.startsWith(o) ? a(s.slice(o.length)) : Lo(Vd, !1, s, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (a) => n({
      className: a,
      parseClassName: o
    });
  }
  return r;
}, Gd = (e) => {
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
}, Ud = (e) => ({
  cache: Hd(e.cacheSize),
  parseClassName: jd(e),
  sortModifiers: Gd(e),
  ..._d(e)
}), qd = /\s+/, Xd = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: a
  } = t, s = [], i = e.trim().split(qd);
  let c = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const f = i[l], {
      isExternal: m,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: g
    } = n(f);
    if (m) {
      c = f + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!g, x = r(b ? y.substring(0, g) : y);
    if (!x) {
      if (!b) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (x = r(y), !x) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const v = h.length === 0 ? "" : h.length === 1 ? h[0] : a(h).join(":"), w = p ? v + Tr : v, S = w + x;
    if (s.indexOf(S) > -1)
      continue;
    s.push(S);
    const C = o(x, b);
    for (let k = 0; k < C.length; ++k) {
      const M = C[k];
      s.push(w + M);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Kd = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Za(n)) && (o && (o += " "), o += r);
  return o;
}, Za = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Za(e[r])) && (n && (n += " "), n += t);
  return n;
}, Zd = (e, ...t) => {
  let n, r, o, a;
  const s = (c) => {
    const l = t.reduce((f, m) => m(f), e());
    return n = Ud(l), r = n.cache.get, o = n.cache.set, a = i, i(c);
  }, i = (c) => {
    const l = r(c);
    if (l)
      return l;
    const f = Xd(c, n);
    return o(c, f), f;
  };
  return a = s, (...c) => a(Kd(...c));
}, Qd = [], pe = (e) => {
  const t = (n) => n[e] || Qd;
  return t.isThemeGetter = !0, t;
}, Qa = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ja = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Jd = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, eu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ru = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ou = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, st = (e) => Jd.test(e), Z = (e) => !!e && !Number.isNaN(Number(e)), it = (e) => !!e && Number.isInteger(Number(e)), mr = (e) => e.endsWith("%") && Z(e.slice(0, -1)), Ke = (e) => eu.test(e), es = () => !0, au = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tu.test(e) && !nu.test(e)
), Kr = () => !1, su = (e) => ru.test(e), iu = (e) => ou.test(e), cu = (e) => !A(e) && !_(e), lu = (e) => pt(e, rs, Kr), A = (e) => Qa.test(e), xt = (e) => pt(e, os, au), $o = (e) => pt(e, bu, Z), du = (e) => pt(e, ss, es), uu = (e) => pt(e, as, Kr), Yo = (e) => pt(e, ts, Kr), fu = (e) => pt(e, ns, iu), hn = (e) => pt(e, is, su), _ = (e) => Ja.test(e), Zt = (e) => Rt(e, os), mu = (e) => Rt(e, as), Ho = (e) => Rt(e, ts), hu = (e) => Rt(e, rs), pu = (e) => Rt(e, ns), pn = (e) => Rt(e, is, !0), gu = (e) => Rt(e, ss, !0), pt = (e, t, n) => {
  const r = Qa.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Rt = (e, t, n = !1) => {
  const r = Ja.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ts = (e) => e === "position" || e === "percentage", ns = (e) => e === "image" || e === "url", rs = (e) => e === "length" || e === "size" || e === "bg-size", os = (e) => e === "length", bu = (e) => e === "number", as = (e) => e === "family-name", ss = (e) => e === "number" || e === "weight", is = (e) => e === "shadow", yu = () => {
  const e = pe("color"), t = pe("font"), n = pe("text"), r = pe("font-weight"), o = pe("tracking"), a = pe("leading"), s = pe("breakpoint"), i = pe("container"), c = pe("spacing"), l = pe("radius"), f = pe("shadow"), m = pe("inset-shadow"), h = pe("text-shadow"), p = pe("drop-shadow"), y = pe("blur"), g = pe("perspective"), b = pe("aspect"), x = pe("ease"), v = pe("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], C = () => [...S(), _, A], k = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], N = () => [_, A, c], D = () => [st, "full", "auto", ...N()], R = () => [it, "none", "subgrid", _, A], W = () => ["auto", {
    span: ["full", it, _, A]
  }, it, _, A], H = () => [it, "auto", _, A], V = () => ["auto", "min", "max", "fr", _, A], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], K = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...N()], j = () => [st, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], B = () => [st, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], G = () => [st, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], O = () => [e, _, A], fe = () => [...S(), Ho, Yo, {
    position: [_, A]
  }], Pe = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], xe = () => ["auto", "cover", "contain", hu, lu, {
    size: [_, A]
  }], ge = () => [mr, Zt, xt], le = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    _,
    A
  ], de = () => ["", Z, Zt, xt], z = () => ["solid", "dashed", "dotted", "double"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [Z, mr, Ho, Yo], te = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    _,
    A
  ], J = () => ["none", Z, _, A], ee = () => ["none", Z, _, A], he = () => [Z, _, A], be = () => [st, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ke],
      breakpoint: [Ke],
      color: [es],
      container: [Ke],
      "drop-shadow": [Ke],
      ease: ["in", "out", "in-out"],
      font: [cu],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ke],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ke],
      shadow: [Ke],
      spacing: ["px", Z],
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
        columns: [Z, A, _, i]
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
        object: C()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
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
        inset: D()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": D()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": D()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: D()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": D(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: D()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": D()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": D()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: D()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: D()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: D()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: D()
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
        flex: [Z, st, "auto", "initial", "none", A]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Z, _, A]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Z, _, A]
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
        justify: [...L(), "normal"]
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
        content: ["normal", ...L()]
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
        "place-content": L()
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
        block: ["auto", ...G()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...G()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...G()]
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
        text: ["base", n, Zt, xt]
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
        font: [r, gu, du]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mr, A]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [mu, uu, t]
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
        "line-clamp": [Z, "none", _, $o]
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
        decoration: [Z, "from-font", "auto", _, xt]
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
        "underline-offset": [Z, "auto", _, A]
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
        }, pu, fu]
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
        "outline-offset": [Z, _, A]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Z, Zt, xt]
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
          f,
          pn,
          hn
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
        "inset-shadow": ["none", m, pn, hn]
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
        "ring-offset": [Z, xt]
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
        "text-shadow": ["none", h, pn, hn]
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
        opacity: [Z, _, A]
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
        "mask-linear": [Z]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": O()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": O()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": O()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": O()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": O()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": O()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": O()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": O()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": O()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": O()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": O()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": O()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": O()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": O()
      }],
      "mask-image-radial": [{
        "mask-radial": [_, A]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Q()
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
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Z]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Q()
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
        blur: te()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [Z, _, A]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Z, _, A]
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
          pn,
          hn
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
        grayscale: ["", Z, _, A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Z, _, A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Z, _, A]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Z, _, A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Z, _, A]
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
        "backdrop-blur": te()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [Z, _, A]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Z, _, A]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Z, _, A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Z, _, A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Z, _, A]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Z, _, A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Z, _, A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Z, _, A]
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
        duration: [Z, "initial", _, A]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", x, _, A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Z, _, A]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", v, _, A]
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
        rotate: J()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": J()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": J()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": J()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
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
        fill: ["none", ...O()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Z, Zt, xt, $o]
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
}, vu = /* @__PURE__ */ Zd(yu);
function P(...e) {
  return vu(Ur(e));
}
const wu = ht(
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
), xu = {
  default: Wo,
  info: Wo,
  success: ad,
  warning: nd,
  destructive: Od
}, ku = u.forwardRef(
  ({ className: e, variant: t = "default", title: n, children: r, ...o }, a) => {
    const s = xu[t ?? "default"];
    return /* @__PURE__ */ E(
      "div",
      {
        ref: a,
        role: "alert",
        className: P(wu({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ d(s, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ E("div", { className: "flex-1 min-w-0", children: [
            n && /* @__PURE__ */ d("p", { className: "font-semibold mb-0.5", children: n }),
            r && /* @__PURE__ */ d("p", { className: "leading-relaxed", children: r })
          ] })
        ]
      }
    );
  }
);
ku.displayName = "Alert";
function Su({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ d("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ d("ellipse", { cx: "24", cy: "22", rx: "7", ry: "5.5", fill: "#F59E0B" }),
    /* @__PURE__ */ d("rect", { x: "20", y: "19", width: "8", height: "2", rx: "1", fill: "#92400E" }),
    /* @__PURE__ */ d("rect", { x: "20", y: "23", width: "8", height: "2", rx: "1", fill: "#92400E" }),
    /* @__PURE__ */ d("ellipse", { cx: "19", cy: "17", rx: "4", ry: "3", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "0.8", opacity: "0.8" }),
    /* @__PURE__ */ d("ellipse", { cx: "29", cy: "17", rx: "4", ry: "3", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "0.8", opacity: "0.8" }),
    /* @__PURE__ */ d("line", { x1: "22", y1: "17", x2: "19", y2: "12", stroke: "#D97706", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ d("line", { x1: "26", y1: "17", x2: "29", y2: "12", stroke: "#D97706", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ d("circle", { cx: "19", cy: "12", r: "1", fill: "#D97706" }),
    /* @__PURE__ */ d("circle", { cx: "29", cy: "12", r: "1", fill: "#D97706" }),
    /* @__PURE__ */ d("path", { d: "M31 22l4 2-4 2", fill: "#D97706" })
  ] });
}
function Cu({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ d("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ d("circle", { cx: "16", cy: "28", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ d("circle", { cx: "24", cy: "14", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ d("circle", { cx: "32", cy: "24", r: "3", fill: "#F59E0B" }),
    /* @__PURE__ */ d("circle", { cx: "20", cy: "20", r: "2.5", fill: "#D97706" }),
    /* @__PURE__ */ d("circle", { cx: "28", cy: "32", r: "2.5", fill: "#D97706" }),
    /* @__PURE__ */ d("line", { x1: "16", y1: "28", x2: "20", y2: "20", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ d("line", { x1: "20", y1: "20", x2: "24", y2: "14", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ d("line", { x1: "24", y1: "14", x2: "32", y2: "24", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ d("line", { x1: "32", y1: "24", x2: "28", y2: "32", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ d("line", { x1: "28", y1: "32", x2: "16", y2: "28", stroke: "#D97706", strokeWidth: "1.5" }),
    /* @__PURE__ */ d("line", { x1: "20", y1: "20", x2: "32", y2: "24", stroke: "#D97706", strokeWidth: "1", opacity: "0.5" })
  ] });
}
function Nu({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ d("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2.5" }),
    /* @__PURE__ */ d("path", { d: "M24 12c-4.4 0-8 3.6-8 8 0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z", fill: "#F59E0B" }),
    /* @__PURE__ */ d("circle", { cx: "24", cy: "20", r: "3.5", fill: "#FFFBEB" }),
    /* @__PURE__ */ d("line", { x1: "12", y1: "30", x2: "36", y2: "30", stroke: "#D97706", strokeWidth: "1", opacity: "0.4" }),
    /* @__PURE__ */ d("line", { x1: "14", y1: "34", x2: "34", y2: "34", stroke: "#D97706", strokeWidth: "1", opacity: "0.3" }),
    /* @__PURE__ */ d("line", { x1: "18", y1: "30", x2: "16", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" }),
    /* @__PURE__ */ d("line", { x1: "30", y1: "30", x2: "32", y2: "34", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.3" })
  ] });
}
function Mu({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ d("path", { d: "M24 3L41 13v22L24 45 7 35V13z", fill: "#FEF3C7", stroke: "#F59E0B", strokeWidth: "2" }),
    /* @__PURE__ */ d("path", { d: "M24 10l11 6.5v13L24 36l-11-6.5v-13z", fill: "#FFFBEB", stroke: "#F59E0B", strokeWidth: "1", opacity: "0.6" }),
    /* @__PURE__ */ d("circle", { cx: "22", cy: "22", r: "7.5", stroke: "#D97706", strokeWidth: "2.2" }),
    /* @__PURE__ */ d("line", { x1: "27.5", y1: "27.5", x2: "34", y2: "34", stroke: "#D97706", strokeWidth: "2.4", strokeLinecap: "round" }),
    /* @__PURE__ */ d("circle", { cx: "22", cy: "22", r: "2", fill: "#F59E0B" }),
    /* @__PURE__ */ d("line", { x1: "22", y1: "15.5", x2: "22", y2: "18", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ d("line", { x1: "22", y1: "26", x2: "22", y2: "28.5", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ d("line", { x1: "15.5", y1: "22", x2: "18", y2: "22", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" }),
    /* @__PURE__ */ d("line", { x1: "26", y1: "22", x2: "28.5", y2: "22", stroke: "#F59E0B", strokeWidth: "1.2", strokeLinecap: "round" })
  ] });
}
function Eu({ size: e = 48, className: t }) {
  return /* @__PURE__ */ E("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", fill: "none", width: e, height: e, className: t, children: [
    /* @__PURE__ */ d("path", { d: "M24 4L38.7 13v18L24 40 9.3 31V13z", stroke: "#F59E0B", strokeWidth: "2.5", fill: "#FEF3C7" }),
    /* @__PURE__ */ d("path", { d: "M24 12L32.5 17v10L24 32l-8.5-5V17z", stroke: "#F59E0B", strokeWidth: "1.5", fill: "#FFFBEB" }),
    /* @__PURE__ */ d("circle", { cx: "24", cy: "22", r: "3.5", fill: "#F59E0B" }),
    /* @__PURE__ */ d("circle", { cx: "16", cy: "17", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ d("circle", { cx: "32", cy: "17", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ d("circle", { cx: "16", cy: "27", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ d("circle", { cx: "32", cy: "27", r: "2", fill: "#D97706" }),
    /* @__PURE__ */ d("line", { x1: "24", y1: "22", x2: "16", y2: "17", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ d("line", { x1: "24", y1: "22", x2: "32", y2: "17", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ d("line", { x1: "24", y1: "22", x2: "16", y2: "27", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ d("line", { x1: "24", y1: "22", x2: "32", y2: "27", stroke: "#D97706", strokeWidth: "1.2" }),
    /* @__PURE__ */ d("line", { x1: "16", y1: "17", x2: "16", y2: "27", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.5" }),
    /* @__PURE__ */ d("line", { x1: "32", y1: "17", x2: "32", y2: "27", stroke: "#D97706", strokeWidth: "0.8", opacity: "0.5" })
  ] });
}
const cs = {
  swarm: { label: "Swarm", component: Su },
  beegraph: { label: "BeeGraph", component: Cu },
  beemap: { label: "BeeMap", component: Nu },
  beescout: { label: "BeeScout", component: Mu },
  haive: { label: "Haive", component: Eu }
}, iw = Object.keys(cs);
function cw({ slug: e, size: t = 48, className: n, fallback: r }) {
  const o = cs[e];
  if (o) {
    const s = o.component;
    return /* @__PURE__ */ d(s, { size: t, className: n });
  }
  const a = (r ?? e ?? "?").charAt(0).toUpperCase();
  return /* @__PURE__ */ d(
    "div",
    {
      className: `rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-2xl text-amber-600 shrink-0 ${n ?? ""}`,
      style: { width: t, height: t },
      children: a
    }
  );
}
function lw({ label: e, value: t, className: n, ...r }) {
  return /* @__PURE__ */ E("div", { className: P("flex flex-col gap-0.5", n), ...r, children: [
    /* @__PURE__ */ d("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ d("span", { className: "text-sm font-medium break-words text-text-base", children: t ?? "—" })
  ] });
}
function dw({ title: e, children: t, className: n, ...r }) {
  return /* @__PURE__ */ E("div", { className: P("flex flex-col gap-3", n), ...r, children: [
    /* @__PURE__ */ d("h3", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1", children: e }),
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-2", children: t })
  ] });
}
const Pu = ht(
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
function uw({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ d("div", { className: P(Pu({ variant: t }), e), ...n });
}
function Vo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function At(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = Vo(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : Vo(e[o], null);
        }
      };
  };
}
function re(...e) {
  return u.useCallback(At(...e), e);
}
var Du = Symbol.for("react.lazy"), En = u[" use ".trim().toString()];
function Ou(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function ls(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Du && "_payload" in e && Ou(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Tu(e) {
  const t = /* @__PURE__ */ Au(e), n = u.forwardRef((r, o) => {
    let { children: a, ...s } = r;
    ls(a) && typeof En == "function" && (a = En(a._payload));
    const i = u.Children.toArray(a), c = i.find(Iu);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...s, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ru = /* @__PURE__ */ Tu("Slot");
// @__NO_SIDE_EFFECTS__
function Au(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...a } = n;
    if (ls(o) && typeof En == "function" && (o = En(o._payload)), u.isValidElement(o)) {
      const s = Fu(o), i = Wu(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? At(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _u = Symbol("radix.slottable");
function Iu(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _u;
}
function Wu(e, t) {
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
function Fu(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const zu = ht(
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
), ds = u.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => /* @__PURE__ */ d(
    r ? Ru : "button",
    {
      className: P(zu({ variant: t, size: n, className: e })),
      ref: a,
      ...o
    }
  )
);
ds.displayName = "Button";
const Bu = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
Bu.displayName = "Card";
const Lu = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: P("flex flex-col space-y-1.5 p-6", e), ...t }));
Lu.displayName = "CardHeader";
const $u = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "h3",
  {
    ref: n,
    className: P("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
$u.displayName = "CardTitle";
const Yu = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "p",
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
Yu.displayName = "CardDescription";
const Hu = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: P("p-6 pt-0", e), ...t }));
Hu.displayName = "CardContent";
const Vu = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "div",
  {
    ref: n,
    className: P("flex items-center p-6 pt-0", e),
    ...t
  }
));
Vu.displayName = "CardFooter";
const ju = u.forwardRef(
  ({
    onSend: e,
    disabled: t,
    placeholder: n = "Scrivi un messaggio...",
    className: r,
    maxHeight: o = 160
  }, a) => {
    const [s, i] = u.useState(""), c = u.useRef(null), l = a ?? c, f = () => {
      const p = s.trim();
      !p || t || (e(p), i(""), l.current && (l.current.style.height = "auto"));
    }, m = (p) => {
      p.key === "Enter" && !p.shiftKey && (p.preventDefault(), f());
    }, h = () => {
      const p = l.current;
      p && (p.style.height = "auto", p.style.height = `${Math.min(p.scrollHeight, o)}px`);
    };
    return /* @__PURE__ */ E("div", { className: P("border-t border-border bg-surface px-4 py-3", r), children: [
      /* @__PURE__ */ E("div", { className: "max-w-4xl mx-auto flex gap-3 items-end", children: [
        /* @__PURE__ */ d(
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
        /* @__PURE__ */ d(
          ds,
          {
            onClick: f,
            disabled: t || !s.trim(),
            size: "icon",
            className: "h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg",
            children: /* @__PURE__ */ d(Sd, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ d("p", { className: "text-center text-xs text-text-muted mt-2", children: "Invio per inviare · Shift+Invio per andare a capo" })
    ] });
  }
);
ju.displayName = "ChatInput";
const jo = {
  default: "h-4 w-4",
  sm: "h-3.5 w-3.5"
}, Rr = u.forwardRef(
  ({
    className: e,
    indeterminate: t = !1,
    size: n = "default",
    checked: r,
    defaultChecked: o,
    disabled: a,
    onChange: s,
    ...i
  }, c) => {
    const l = u.useRef(null), f = r !== void 0, [m, h] = u.useState(
      o ?? !1
    ), p = f ? !!r : m;
    u.useEffect(() => {
      l.current && (l.current.indeterminate = t);
    }, [t]);
    function y(x) {
      f || h(x.target.checked), s == null || s(x);
    }
    const g = p && !t, b = t;
    return /* @__PURE__ */ E("span", { className: P("relative inline-flex shrink-0", jo[n]), children: [
      /* @__PURE__ */ d(
        "input",
        {
          type: "checkbox",
          checked: p,
          disabled: a,
          onChange: y,
          ref: (x) => {
            l.current = x, typeof c == "function" ? c(x) : c && (c.current = x);
          },
          className: P(
            "peer m-0 shrink-0 cursor-pointer appearance-none rounded border transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            "disabled:cursor-not-allowed disabled:opacity-50",
            g || b ? "border-databeez-primary bg-databeez-primary" : "border-border bg-surface",
            jo[n],
            e
          ),
          ...i
        }
      ),
      /* @__PURE__ */ d(
        on,
        {
          strokeWidth: 3,
          className: P(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            g ? "opacity-100" : "opacity-0"
          )
        }
      ),
      /* @__PURE__ */ d(
        bd,
        {
          strokeWidth: 3,
          className: P(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            b ? "opacity-100" : "opacity-0"
          )
        }
      )
    ] });
  }
);
Rr.displayName = "Checkbox";
function fw({
  label: e,
  checked: t,
  onToggle: n,
  children: r,
  expanded: o,
  onExpandedChange: a,
  size: s = "default",
  className: i
}) {
  const c = r.length > 0, l = c && r.every((y) => !y.checked), f = c && !l && r.some((y) => !y.checked), m = t && !l, h = t && f;
  function p() {
    if (m || h) {
      t && n();
      return;
    }
    if (!t) {
      n();
      return;
    }
    r.forEach((y) => {
      y.checked || y.onToggle();
    });
  }
  return /* @__PURE__ */ E("div", { className: i, children: [
    /* @__PURE__ */ E("div", { className: "flex items-center gap-1.5", children: [
      c ? /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          onClick: () => a(!o),
          "aria-label": o ? "Comprimi" : "Espandi",
          "aria-expanded": o,
          className: "flex shrink-0 items-center justify-center text-text-muted hover:text-text-base",
          children: o ? /* @__PURE__ */ d(an, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ d(sd, { className: "h-3.5 w-3.5" })
        }
      ) : /* @__PURE__ */ d("span", { className: "w-3.5 shrink-0" }),
      /* @__PURE__ */ E("label", { className: "flex cursor-pointer select-none items-center gap-2", children: [
        /* @__PURE__ */ d(
          Rr,
          {
            size: s,
            checked: m,
            indeterminate: h,
            onChange: p
          }
        ),
        /* @__PURE__ */ d(
          "span",
          {
            className: P(
              "text-sm",
              m || h ? "text-text-base" : "text-text-muted"
            ),
            children: e
          }
        )
      ] })
    ] }),
    c && o && /* @__PURE__ */ d("div", { className: "ml-5 mt-1 flex flex-col gap-1", children: r.map((y) => {
      const g = !t || !!y.disabled;
      return /* @__PURE__ */ E(
        "label",
        {
          className: P(
            "flex select-none items-center gap-2",
            g ? "cursor-default opacity-50" : "cursor-pointer"
          ),
          children: [
            /* @__PURE__ */ d(
              Rr,
              {
                size: "sm",
                checked: y.checked,
                disabled: g,
                onChange: y.onToggle
              }
            ),
            /* @__PURE__ */ d("span", { className: "text-xs text-text-base", children: y.label })
          ]
        },
        y.key
      );
    }) })
  ] });
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Gu(e, t) {
  const n = u.createContext(t), r = (a) => {
    const { children: s, ...i } = a, c = u.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ d(n.Provider, { value: c, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = u.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function rt(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = u.createContext(s), c = n.length;
    n = [...n, s];
    const l = (m) => {
      var x;
      const { scope: h, children: p, ...y } = m, g = ((x = h == null ? void 0 : h[e]) == null ? void 0 : x[c]) || i, b = u.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ d(g.Provider, { value: b, children: p });
    };
    l.displayName = a + "Provider";
    function f(m, h) {
      var g;
      const p = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[c]) || i, y = u.useContext(p);
      if (y) return y;
      if (s !== void 0) return s;
      throw new Error(`\`${m}\` must be used within \`${a}\``);
    }
    return [l, f];
  }
  const o = () => {
    const a = n.map((s) => u.createContext(s));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || a;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, Uu(o, ...t)];
}
function Uu(...e) {
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
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function qu(e) {
  const t = /* @__PURE__ */ Xu(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), c = i.find(Zu);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...s, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Xu(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = Ju(o), i = Qu(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? At(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ku = Symbol("radix.slottable");
function Zu(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ku;
}
function Qu(e, t) {
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
function Ju(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ef = [
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
], X = ef.reduce((e, t) => {
  const n = /* @__PURE__ */ qu(`Primitive.${t}`), r = u.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, c = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(c, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function tf(e, t) {
  e && Wn.flushSync(() => e.dispatchEvent(t));
}
function we(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function nf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var rf = "DismissableLayer", Ar = "dismissableLayer.update", of = "dismissableLayer.pointerDownOutside", af = "dismissableLayer.focusOutside", Go, us = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...c
    } = e, l = u.useContext(us), [f, m] = u.useState(null), h = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, p] = u.useState({}), y = re(t, (M) => m(M)), g = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), x = g.indexOf(b), v = f ? g.indexOf(f) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, S = v >= x, C = lf((M) => {
      const N = M.target, D = [...l.branches].some((R) => R.contains(N));
      !S || D || (o == null || o(M), s == null || s(M), M.defaultPrevented || i == null || i());
    }, h), k = df((M) => {
      const N = M.target;
      [...l.branches].some((R) => R.contains(N)) || (a == null || a(M), s == null || s(M), M.defaultPrevented || i == null || i());
    }, h);
    return nf((M) => {
      v === l.layers.size - 1 && (r == null || r(M), !M.defaultPrevented && i && (M.preventDefault(), i()));
    }, h), u.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Go = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), Uo(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Go);
        };
    }, [f, h, n, l]), u.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), Uo());
    }, [f, l]), u.useEffect(() => {
      const M = () => p({});
      return document.addEventListener(Ar, M), () => document.removeEventListener(Ar, M);
    }, []), /* @__PURE__ */ d(
      X.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Y(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: Y(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: Y(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
zn.displayName = rf;
var sf = "DismissableLayerBranch", cf = u.forwardRef((e, t) => {
  const n = u.useContext(us), r = u.useRef(null), o = re(t, r);
  return u.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ d(X.div, { ...e, ref: o });
});
cf.displayName = sf;
function lf(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          fs(
            of,
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
function df(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = we(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && fs(af, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Uo() {
  const e = new CustomEvent(Ar);
  document.dispatchEvent(e);
}
function fs(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? tf(o, a) : o.dispatchEvent(a);
}
var hr = 0;
function Zr() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? qo()), document.body.insertAdjacentElement("beforeend", e[1] ?? qo()), hr++, () => {
      hr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), hr--;
    };
  }, []);
}
function qo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var pr = "focusScope.autoFocusOnMount", gr = "focusScope.autoFocusOnUnmount", Xo = { bubbles: !1, cancelable: !0 }, uf = "FocusScope", Bn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, c] = u.useState(null), l = we(o), f = we(a), m = u.useRef(null), h = re(t, (g) => c(g)), p = u.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  u.useEffect(() => {
    if (r) {
      let g = function(w) {
        if (p.paused || !i) return;
        const S = w.target;
        i.contains(S) ? m.current = S : lt(m.current, { select: !0 });
      }, b = function(w) {
        if (p.paused || !i) return;
        const S = w.relatedTarget;
        S !== null && (i.contains(S) || lt(m.current, { select: !0 }));
      }, x = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && lt(i);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const v = new MutationObserver(x);
      return i && v.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), v.disconnect();
      };
    }
  }, [r, i, p.paused]), u.useEffect(() => {
    if (i) {
      Zo.add(p);
      const g = document.activeElement;
      if (!i.contains(g)) {
        const x = new CustomEvent(pr, Xo);
        i.addEventListener(pr, l), i.dispatchEvent(x), x.defaultPrevented || (ff(bf(ms(i)), { select: !0 }), document.activeElement === g && lt(i));
      }
      return () => {
        i.removeEventListener(pr, l), setTimeout(() => {
          const x = new CustomEvent(gr, Xo);
          i.addEventListener(gr, f), i.dispatchEvent(x), x.defaultPrevented || lt(g ?? document.body, { select: !0 }), i.removeEventListener(gr, f), Zo.remove(p);
        }, 0);
      };
    }
  }, [i, l, f, p]);
  const y = u.useCallback(
    (g) => {
      if (!n && !r || p.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, x = document.activeElement;
      if (b && x) {
        const v = g.currentTarget, [w, S] = mf(v);
        w && S ? !g.shiftKey && x === S ? (g.preventDefault(), n && lt(w, { select: !0 })) : g.shiftKey && x === w && (g.preventDefault(), n && lt(S, { select: !0 })) : x === v && g.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d(X.div, { tabIndex: -1, ...s, ref: h, onKeyDown: y });
});
Bn.displayName = uf;
function ff(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (lt(r, { select: t }), document.activeElement !== n) return;
}
function mf(e) {
  const t = ms(e), n = Ko(t, e), r = Ko(t.reverse(), e);
  return [n, r];
}
function ms(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Ko(e, t) {
  for (const n of e)
    if (!hf(n, { upTo: t })) return n;
}
function hf(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function pf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function lt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && pf(e) && t && e.select();
  }
}
var Zo = gf();
function gf() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Qo(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Qo(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Qo(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function bf(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ye = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, yf = u[" useId ".trim().toString()] || (() => {
}), vf = 0;
function et(e) {
  const [t, n] = u.useState(yf());
  return ye(() => {
    n((r) => r ?? String(vf++));
  }, [e]), t ? `radix-${t}` : "";
}
const wf = ["top", "right", "bottom", "left"], ut = Math.min, Ne = Math.max, Pn = Math.round, gn = Math.floor, je = (e) => ({
  x: e,
  y: e
}), xf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function _r(e, t, n) {
  return Ne(e, ut(t, n));
}
function tt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nt(e) {
  return e.split("-")[0];
}
function qt(e) {
  return e.split("-")[1];
}
function Qr(e) {
  return e === "x" ? "y" : "x";
}
function Jr(e) {
  return e === "y" ? "height" : "width";
}
function He(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function eo(e) {
  return Qr(He(e));
}
function kf(e, t, n) {
  n === void 0 && (n = !1);
  const r = qt(e), o = eo(e), a = Jr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Dn(s)), [s, Dn(s)];
}
function Sf(e) {
  const t = Dn(e);
  return [Ir(e), t, Ir(t)];
}
function Ir(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Jo = ["left", "right"], ea = ["right", "left"], Cf = ["top", "bottom"], Nf = ["bottom", "top"];
function Mf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ea : Jo : t ? Jo : ea;
    case "left":
    case "right":
      return t ? Cf : Nf;
    default:
      return [];
  }
}
function Ef(e, t, n, r) {
  const o = qt(e);
  let a = Mf(nt(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Ir)))), a;
}
function Dn(e) {
  const t = nt(e);
  return xf[t] + e.slice(t.length);
}
function Pf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function hs(e) {
  return typeof e != "number" ? Pf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function On(e) {
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
function ta(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = He(t), s = eo(t), i = Jr(s), c = nt(t), l = a === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: f,
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
  switch (qt(t)) {
    case "start":
      p[s] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[s] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function Df(e, t) {
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
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = tt(t, e), y = hs(p), b = i[h ? m === "floating" ? "reference" : "floating" : m], x = On(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), v = m === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), S = await (a.isElement == null ? void 0 : a.isElement(w)) ? await (a.getScale == null ? void 0 : a.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = On(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: v,
    offsetParent: w,
    strategy: c
  }) : v);
  return {
    top: (x.top - C.top + y.top) / S.y,
    bottom: (C.bottom - x.bottom + y.bottom) / S.y,
    left: (x.left - C.left + y.left) / S.x,
    right: (C.right - x.right + y.right) / S.x
  };
}
const Of = 50, Tf = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = s.detectOverflow ? s : {
    ...s,
    detectOverflow: Df
  }, c = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let l = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = ta(l, r, c), h = r, p = 0;
  const y = {};
  for (let g = 0; g < a.length; g++) {
    const b = a[g];
    if (!b)
      continue;
    const {
      name: x,
      fn: v
    } = b, {
      x: w,
      y: S,
      data: C,
      reset: k
    } = await v({
      x: f,
      y: m,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: y,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = w ?? f, m = S ?? m, y[x] = {
      ...y[x],
      ...C
    }, k && p < Of && (p++, typeof k == "object" && (k.placement && (h = k.placement), k.rects && (l = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: f,
      y: m
    } = ta(l, h, c)), g = -1);
  }
  return {
    x: f,
    y: m,
    placement: h,
    strategy: o,
    middlewareData: y
  };
}, Rf = (e) => ({
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
      padding: f = 0
    } = tt(e, t) || {};
    if (l == null)
      return {};
    const m = hs(f), h = {
      x: n,
      y: r
    }, p = eo(o), y = Jr(p), g = await s.getDimensions(l), b = p === "y", x = b ? "top" : "left", v = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", S = a.reference[y] + a.reference[p] - h[p] - a.floating[y], C = h[p] - a.reference[p], k = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l));
    let M = k ? k[w] : 0;
    (!M || !await (s.isElement == null ? void 0 : s.isElement(k))) && (M = i.floating[w] || a.floating[y]);
    const N = S / 2 - C / 2, D = M / 2 - g[y] / 2 - 1, R = ut(m[x], D), W = ut(m[v], D), H = R, V = M - g[y] - W, L = M / 2 - g[y] / 2 + N, K = _r(H, L, V), I = !c.arrow && qt(o) != null && L !== K && a.reference[y] / 2 - (L < H ? R : W) - g[y] / 2 < 0, j = I ? L < H ? L - H : L - V : 0;
    return {
      [p]: h[p] + j,
      data: {
        [p]: K,
        centerOffset: L - K - j,
        ...I && {
          alignmentOffset: j
        }
      },
      reset: I
    };
  }
}), Af = function(e) {
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
        mainAxis: f = !0,
        crossAxis: m = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: y = "none",
        flipAlignment: g = !0,
        ...b
      } = tt(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const x = nt(o), v = He(i), w = nt(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), C = h || (w || !g ? [Dn(i)] : Sf(i)), k = y !== "none";
      !h && k && C.push(...Ef(i, g, y, S));
      const M = [i, ...C], N = await c.detectOverflow(t, b), D = [];
      let R = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && D.push(N[x]), m) {
        const L = kf(o, s, S);
        D.push(N[L[0]], N[L[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: D
      }], !D.every((L) => L <= 0)) {
        var W, H;
        const L = (((W = a.flip) == null ? void 0 : W.index) || 0) + 1, K = M[L];
        if (K && (!(m === "alignment" ? v !== He(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((B) => He(B.placement) === v ? B.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: R
            },
            reset: {
              placement: K
            }
          };
        let I = (H = R.filter((j) => j.overflows[0] <= 0).sort((j, B) => j.overflows[1] - B.overflows[1])[0]) == null ? void 0 : H.placement;
        if (!I)
          switch (p) {
            case "bestFit": {
              var V;
              const j = (V = R.filter((B) => {
                if (k) {
                  const G = He(B.placement);
                  return G === v || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  G === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((G) => G > 0).reduce((G, O) => G + O, 0)]).sort((B, G) => B[1] - G[1])[0]) == null ? void 0 : V[0];
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
function na(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ra(e) {
  return wf.some((t) => e[t] >= 0);
}
const _f = function(e) {
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
          }), i = na(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: ra(i)
            }
          };
        }
        case "escaped": {
          const s = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), i = na(s, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: ra(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ps = /* @__PURE__ */ new Set(["left", "top"]);
async function If(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = nt(n), i = qt(n), c = He(n) === "y", l = ps.has(s) ? -1 : 1, f = a && c ? -1 : 1, m = tt(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: y
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return i && typeof y == "number" && (p = i === "end" ? y * -1 : y), c ? {
    x: p * f,
    y: h * l
  } : {
    x: h * l,
    y: p * f
  };
}
const Wf = function(e) {
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
      } = t, c = await If(t, e);
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
}, Ff = function(e) {
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
          fn: (x) => {
            let {
              x: v,
              y: w
            } = x;
            return {
              x: v,
              y: w
            };
          }
        },
        ...l
      } = tt(e, t), f = {
        x: n,
        y: r
      }, m = await a.detectOverflow(t, l), h = He(nt(o)), p = Qr(h);
      let y = f[p], g = f[h];
      if (s) {
        const x = p === "y" ? "top" : "left", v = p === "y" ? "bottom" : "right", w = y + m[x], S = y - m[v];
        y = _r(w, y, S);
      }
      if (i) {
        const x = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", w = g + m[x], S = g - m[v];
        g = _r(w, g, S);
      }
      const b = c.fn({
        ...t,
        [p]: y,
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
}, zf = function(e) {
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
      } = tt(e, t), f = {
        x: n,
        y: r
      }, m = He(o), h = Qr(m);
      let p = f[h], y = f[m];
      const g = tt(i, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const w = h === "y" ? "height" : "width", S = a.reference[h] - a.floating[w] + b.mainAxis, C = a.reference[h] + a.reference[w] - b.mainAxis;
        p < S ? p = S : p > C && (p = C);
      }
      if (l) {
        var x, v;
        const w = h === "y" ? "width" : "height", S = ps.has(nt(o)), C = a.reference[m] - a.floating[w] + (S && ((x = s.offset) == null ? void 0 : x[m]) || 0) + (S ? 0 : b.crossAxis), k = a.reference[m] + a.reference[w] + (S ? 0 : ((v = s.offset) == null ? void 0 : v[m]) || 0) - (S ? b.crossAxis : 0);
        y < C ? y = C : y > k && (y = k);
      }
      return {
        [h]: p,
        [m]: y
      };
    }
  };
}, Bf = function(e) {
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
      } = tt(e, t), f = await s.detectOverflow(t, l), m = nt(o), h = qt(o), p = He(o) === "y", {
        width: y,
        height: g
      } = a.floating;
      let b, x;
      m === "top" || m === "bottom" ? (b = m, x = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = m, b = h === "end" ? "top" : "bottom");
      const v = g - f.top - f.bottom, w = y - f.left - f.right, S = ut(g - f[b], v), C = ut(y - f[x], w), k = !t.middlewareData.shift;
      let M = S, N = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = w), (r = t.middlewareData.shift) != null && r.enabled.y && (M = v), k && !h) {
        const R = Ne(f.left, 0), W = Ne(f.right, 0), H = Ne(f.top, 0), V = Ne(f.bottom, 0);
        p ? N = y - 2 * (R !== 0 || W !== 0 ? R + W : Ne(f.left, f.right)) : M = g - 2 * (H !== 0 || V !== 0 ? H + V : Ne(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
        availableHeight: M
      });
      const D = await s.getDimensions(i.floating);
      return y !== D.width || g !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ln() {
  return typeof window < "u";
}
function Xt(e) {
  return gs(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Me(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ue(e) {
  var t;
  return (t = (gs(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function gs(e) {
  return Ln() ? e instanceof Node || e instanceof Me(e).Node : !1;
}
function Ie(e) {
  return Ln() ? e instanceof Element || e instanceof Me(e).Element : !1;
}
function ot(e) {
  return Ln() ? e instanceof HTMLElement || e instanceof Me(e).HTMLElement : !1;
}
function oa(e) {
  return !Ln() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Me(e).ShadowRoot;
}
function sn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = We(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Lf(e) {
  return /^(table|td|th)$/.test(Xt(e));
}
function $n(e) {
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
const $f = /transform|translate|scale|rotate|perspective|filter/, Yf = /paint|layout|strict|content/, kt = (e) => !!e && e !== "none";
let br;
function to(e) {
  const t = Ie(e) ? We(e) : e;
  return kt(t.transform) || kt(t.translate) || kt(t.scale) || kt(t.rotate) || kt(t.perspective) || !no() && (kt(t.backdropFilter) || kt(t.filter)) || $f.test(t.willChange || "") || Yf.test(t.contain || "");
}
function Hf(e) {
  let t = ft(e);
  for (; ot(t) && !jt(t); ) {
    if (to(t))
      return t;
    if ($n(t))
      return null;
    t = ft(t);
  }
  return null;
}
function no() {
  return br == null && (br = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), br;
}
function jt(e) {
  return /^(html|body|#document)$/.test(Xt(e));
}
function We(e) {
  return Me(e).getComputedStyle(e);
}
function Yn(e) {
  return Ie(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ft(e) {
  if (Xt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    oa(e) && e.host || // Fallback.
    Ue(e)
  );
  return oa(t) ? t.host : t;
}
function bs(e) {
  const t = ft(e);
  return jt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ot(t) && sn(t) ? t : bs(t);
}
function tn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = bs(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Me(o);
  if (a) {
    const i = Wr(s);
    return t.concat(s, s.visualViewport || [], sn(o) ? o : [], i && n ? tn(i) : []);
  } else
    return t.concat(o, tn(o, [], n));
}
function Wr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ys(e) {
  const t = We(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ot(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Pn(n) !== a || Pn(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function ro(e) {
  return Ie(e) ? e : e.contextElement;
}
function Yt(e) {
  const t = ro(e);
  if (!ot(t))
    return je(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ys(t);
  let s = (a ? Pn(n.width) : n.width) / r, i = (a ? Pn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Vf = /* @__PURE__ */ je(0);
function vs(e) {
  const t = Me(e);
  return !no() || !t.visualViewport ? Vf : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function jf(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Me(e) ? !1 : t;
}
function Et(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = ro(e);
  let s = je(1);
  t && (r ? Ie(r) && (s = Yt(r)) : s = Yt(e));
  const i = jf(a, n, r) ? vs(a) : je(0);
  let c = (o.left + i.x) / s.x, l = (o.top + i.y) / s.y, f = o.width / s.x, m = o.height / s.y;
  if (a) {
    const h = Me(a), p = r && Ie(r) ? Me(r) : r;
    let y = h, g = Wr(y);
    for (; g && r && p !== y; ) {
      const b = Yt(g), x = g.getBoundingClientRect(), v = We(g), w = x.left + (g.clientLeft + parseFloat(v.paddingLeft)) * b.x, S = x.top + (g.clientTop + parseFloat(v.paddingTop)) * b.y;
      c *= b.x, l *= b.y, f *= b.x, m *= b.y, c += w, l += S, y = Me(g), g = Wr(y);
    }
  }
  return On({
    width: f,
    height: m,
    x: c,
    y: l
  });
}
function Hn(e, t) {
  const n = Yn(e).scrollLeft;
  return t ? t.left + n : Et(Ue(e)).left + n;
}
function ws(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Hn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Gf(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Ue(r), i = t ? $n(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = je(1);
  const f = je(0), m = ot(r);
  if ((m || !m && !a) && ((Xt(r) !== "body" || sn(s)) && (c = Yn(r)), m)) {
    const p = Et(r);
    l = Yt(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = s && !m && !a ? ws(s, c) : je(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y + h.y
  };
}
function Uf(e) {
  return Array.from(e.getClientRects());
}
function qf(e) {
  const t = Ue(e), n = Yn(e), r = e.ownerDocument.body, o = Ne(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Ne(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Hn(e);
  const i = -n.scrollTop;
  return We(r).direction === "rtl" && (s += Ne(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const aa = 25;
function Xf(e, t) {
  const n = Me(e), r = Ue(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, c = 0;
  if (o) {
    a = o.width, s = o.height;
    const f = no();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = Hn(r);
  if (l <= 0) {
    const f = r.ownerDocument, m = f.body, h = getComputedStyle(m), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(r.clientWidth - m.clientWidth - p);
    y <= aa && (a -= y);
  } else l <= aa && (a += l);
  return {
    width: a,
    height: s,
    x: i,
    y: c
  };
}
function Kf(e, t) {
  const n = Et(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ot(e) ? Yt(e) : je(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, c = o * a.x, l = r * a.y;
  return {
    width: s,
    height: i,
    x: c,
    y: l
  };
}
function sa(e, t, n) {
  let r;
  if (t === "viewport")
    r = Xf(e, n);
  else if (t === "document")
    r = qf(Ue(e));
  else if (Ie(t))
    r = Kf(t, n);
  else {
    const o = vs(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return On(r);
}
function xs(e, t) {
  const n = ft(e);
  return n === t || !Ie(n) || jt(n) ? !1 : We(n).position === "fixed" || xs(n, t);
}
function Zf(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = tn(e, [], !1).filter((i) => Ie(i) && Xt(i) !== "body"), o = null;
  const a = We(e).position === "fixed";
  let s = a ? ft(e) : e;
  for (; Ie(s) && !jt(s); ) {
    const i = We(s), c = to(s);
    !c && i.position === "fixed" && (o = null), (a ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || sn(s) && !c && xs(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = ft(s);
  }
  return t.set(e, r), r;
}
function Qf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? $n(t) ? [] : Zf(t, this._c) : [].concat(n), r], i = sa(t, s[0], o);
  let c = i.top, l = i.right, f = i.bottom, m = i.left;
  for (let h = 1; h < s.length; h++) {
    const p = sa(t, s[h], o);
    c = Ne(p.top, c), l = ut(p.right, l), f = ut(p.bottom, f), m = Ne(p.left, m);
  }
  return {
    width: l - m,
    height: f - c,
    x: m,
    y: c
  };
}
function Jf(e) {
  const {
    width: t,
    height: n
  } = ys(e);
  return {
    width: t,
    height: n
  };
}
function em(e, t, n) {
  const r = ot(t), o = Ue(t), a = n === "fixed", s = Et(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = je(0);
  function l() {
    c.x = Hn(o);
  }
  if (r || !r && !a)
    if ((Xt(t) !== "body" || sn(o)) && (i = Yn(t)), r) {
      const p = Et(t, !0, a, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const f = o && !r && !a ? ws(o, i) : je(0), m = s.left + i.scrollLeft - c.x - f.x, h = s.top + i.scrollTop - c.y - f.y;
  return {
    x: m,
    y: h,
    width: s.width,
    height: s.height
  };
}
function yr(e) {
  return We(e).position === "static";
}
function ia(e, t) {
  if (!ot(e) || We(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ue(e) === n && (n = n.ownerDocument.body), n;
}
function ks(e, t) {
  const n = Me(e);
  if ($n(e))
    return n;
  if (!ot(e)) {
    let o = ft(e);
    for (; o && !jt(o); ) {
      if (Ie(o) && !yr(o))
        return o;
      o = ft(o);
    }
    return n;
  }
  let r = ia(e, t);
  for (; r && Lf(r) && yr(r); )
    r = ia(r, t);
  return r && jt(r) && yr(r) && !to(r) ? n : r || Hf(e) || n;
}
const tm = async function(e) {
  const t = this.getOffsetParent || ks, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: em(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function nm(e) {
  return We(e).direction === "rtl";
}
const rm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Gf,
  getDocumentElement: Ue,
  getClippingRect: Qf,
  getOffsetParent: ks,
  getElementRects: tm,
  getClientRects: Uf,
  getDimensions: Jf,
  getScale: Yt,
  isElement: Ie,
  isRTL: nm
};
function Ss(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function om(e, t) {
  let n = null, r;
  const o = Ue(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), a();
    const l = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: h,
      height: p
    } = l;
    if (i || t(), !h || !p)
      return;
    const y = gn(m), g = gn(o.clientWidth - (f + h)), b = gn(o.clientHeight - (m + p)), x = gn(f), w = {
      rootMargin: -y + "px " + -g + "px " + -b + "px " + -x + "px",
      threshold: Ne(0, ut(1, c)) || 1
    };
    let S = !0;
    function C(k) {
      const M = k[0].intersectionRatio;
      if (M !== c) {
        if (!S)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !Ss(l, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function am(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = ro(e), f = o || a ? [...l ? tn(l) : [], ...t ? tn(t) : []] : [];
  f.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const m = l && i ? om(l, n) : null;
  let h = -1, p = null;
  s && (p = new ResizeObserver((x) => {
    let [v] = x;
    v && v.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), l && !c && p.observe(l), t && p.observe(t));
  let y, g = c ? Et(e) : null;
  c && b();
  function b() {
    const x = Et(e);
    g && !Ss(g, x) && n(), g = x, y = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    f.forEach((v) => {
      o && v.removeEventListener("scroll", n), a && v.removeEventListener("resize", n);
    }), m == null || m(), (x = p) == null || x.disconnect(), p = null, c && cancelAnimationFrame(y);
  };
}
const sm = Wf, im = Ff, cm = Af, lm = Bf, dm = _f, ca = Rf, um = zf, fm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: rm,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Tf(e, t, {
    ...o,
    platform: a
  });
};
var mm = typeof document < "u", hm = function() {
}, Sn = mm ? La : hm;
function Tn(e, t) {
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
        if (!Tn(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !Tn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Cs(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function la(e, t) {
  const n = Cs(e);
  return Math.round(t * n) / n;
}
function vr(e) {
  const t = u.useRef(e);
  return Sn(() => {
    t.current = e;
  }), t;
}
function pm(e) {
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
  } = e, [f, m] = u.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = u.useState(r);
  Tn(h, r) || p(r);
  const [y, g] = u.useState(null), [b, x] = u.useState(null), v = u.useCallback((B) => {
    B !== k.current && (k.current = B, g(B));
  }, []), w = u.useCallback((B) => {
    B !== M.current && (M.current = B, x(B));
  }, []), S = a || y, C = s || b, k = u.useRef(null), M = u.useRef(null), N = u.useRef(f), D = c != null, R = vr(c), W = vr(o), H = vr(l), V = u.useCallback(() => {
    if (!k.current || !M.current)
      return;
    const B = {
      placement: t,
      strategy: n,
      middleware: h
    };
    W.current && (B.platform = W.current), fm(k.current, M.current, B).then((G) => {
      const O = {
        ...G,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: H.current !== !1
      };
      L.current && !Tn(N.current, O) && (N.current = O, Wn.flushSync(() => {
        m(O);
      }));
    });
  }, [h, t, n, W, H]);
  Sn(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, m((B) => ({
      ...B,
      isPositioned: !1
    })));
  }, [l]);
  const L = u.useRef(!1);
  Sn(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Sn(() => {
    if (S && (k.current = S), C && (M.current = C), S && C) {
      if (R.current)
        return R.current(S, C, V);
      V();
    }
  }, [S, C, V, R, D]);
  const K = u.useMemo(() => ({
    reference: k,
    floating: M,
    setReference: v,
    setFloating: w
  }), [v, w]), I = u.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), j = u.useMemo(() => {
    const B = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return B;
    const G = la(I.floating, f.x), O = la(I.floating, f.y);
    return i ? {
      ...B,
      transform: "translate(" + G + "px, " + O + "px)",
      ...Cs(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: G,
      top: O
    };
  }, [n, i, I.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: V,
    refs: K,
    elements: I,
    floatingStyles: j
  }), [f, V, K, I, j]);
}
const gm = (e) => {
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
      return r && t(r) ? r.current != null ? ca({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ca({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, bm = (e, t) => {
  const n = sm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, ym = (e, t) => {
  const n = im(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, vm = (e, t) => ({
  fn: um(e).fn,
  options: [e, t]
}), wm = (e, t) => {
  const n = cm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, xm = (e, t) => {
  const n = lm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, km = (e, t) => {
  const n = dm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Sm = (e, t) => {
  const n = gm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Cm = "Arrow", Ns = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ d(
    X.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ns.displayName = Cm;
var Nm = Ns;
function Ms(e) {
  const [t, n] = u.useState(void 0);
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
var oo = "Popper", [Es, Vn] = rt(oo), [Mm, Ps] = Es(oo), Ds = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ d(Mm, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Ds.displayName = oo;
var Os = "PopperAnchor", Ts = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Ps(Os, n), s = u.useRef(null), i = re(t, s), c = u.useRef(null);
    return u.useEffect(() => {
      const l = c.current;
      c.current = (r == null ? void 0 : r.current) || s.current, l !== c.current && a.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ d(X.div, { ...o, ref: i });
  }
);
Ts.displayName = Os;
var ao = "PopperContent", [Em, Pm] = Es(ao), Rs = u.forwardRef(
  (e, t) => {
    var z, ae, Q, te, J, ee;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: y,
      ...g
    } = e, b = Ps(ao, n), [x, v] = u.useState(null), w = re(t, (he) => v(he)), [S, C] = u.useState(null), k = Ms(S), M = (k == null ? void 0 : k.width) ?? 0, N = (k == null ? void 0 : k.height) ?? 0, D = r + (a !== "center" ? "-" + a : ""), R = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, W = Array.isArray(l) ? l : [l], H = W.length > 0, V = {
      padding: R,
      boundary: W.filter(Om),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: H
    }, { refs: L, floatingStyles: K, placement: I, isPositioned: j, middlewareData: B } = pm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...he) => am(...he, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        bm({ mainAxis: o + N, alignmentAxis: s }),
        c && ym({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? vm() : void 0,
          ...V
        }),
        c && wm({ ...V }),
        xm({
          ...V,
          apply: ({ elements: he, rects: be, availableWidth: at, availableHeight: vt }) => {
            const { width: wt, height: cr } = be.reference, It = he.floating.style;
            It.setProperty("--radix-popper-available-width", `${at}px`), It.setProperty("--radix-popper-available-height", `${vt}px`), It.setProperty("--radix-popper-anchor-width", `${wt}px`), It.setProperty("--radix-popper-anchor-height", `${cr}px`);
          }
        }),
        S && Sm({ element: S, padding: i }),
        Tm({ arrowWidth: M, arrowHeight: N }),
        h && km({ strategy: "referenceHidden", ...V })
      ]
    }), [G, O] = Is(I), fe = we(y);
    ye(() => {
      j && (fe == null || fe());
    }, [j, fe]);
    const Pe = (z = B.arrow) == null ? void 0 : z.x, xe = (ae = B.arrow) == null ? void 0 : ae.y, ge = ((Q = B.arrow) == null ? void 0 : Q.centerOffset) !== 0, [le, de] = u.useState();
    return ye(() => {
      x && de(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ d(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: j ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: le,
          "--radix-popper-transform-origin": [
            (te = B.transformOrigin) == null ? void 0 : te.x,
            (J = B.transformOrigin) == null ? void 0 : J.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = B.hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d(
          Em,
          {
            scope: n,
            placedSide: G,
            onArrowChange: C,
            arrowX: Pe,
            arrowY: xe,
            shouldHideArrow: ge,
            children: /* @__PURE__ */ d(
              X.div,
              {
                "data-side": G,
                "data-align": O,
                ...g,
                ref: w,
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
Rs.displayName = ao;
var As = "PopperArrow", Dm = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, _s = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Pm(As, r), s = Dm[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d(
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
        children: /* @__PURE__ */ d(
          Nm,
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
_s.displayName = As;
function Om(e) {
  return e !== null;
}
var Tm = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, x, v;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, c = s ? 0 : e.arrowHeight, [l, f] = Is(n), m = { start: "0%", center: "50%", end: "100%" }[f], h = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + i / 2, p = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + c / 2;
    let y = "", g = "";
    return l === "bottom" ? (y = s ? m : `${h}px`, g = `${-c}px`) : l === "top" ? (y = s ? m : `${h}px`, g = `${r.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, g = s ? m : `${p}px`) : l === "left" && (y = `${r.floating.width + c}px`, g = s ? m : `${p}px`), { data: { x: y, y: g } };
  }
});
function Is(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ws = Ds, so = Ts, Fs = Rs, zs = _s, Rm = "Portal", jn = u.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = u.useState(!1);
  ye(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Ql.createPortal(/* @__PURE__ */ d(X.div, { ...r, ref: t }), s) : null;
});
jn.displayName = Rm;
function Am(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fe = (e) => {
  const { present: t, children: n } = e, r = _m(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), a = re(r.ref, Im(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: a }) : null;
};
Fe.displayName = "Presence";
function _m(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), a = u.useRef("none"), s = e ? "mounted" : "unmounted", [i, c] = Am(s, {
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
  return u.useEffect(() => {
    const l = bn(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [i]), ye(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = a.current, p = bn(l);
      e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ye(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, m = (p) => {
        const g = bn(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (p) => {
        p.target === t && (a.current = bn(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        f.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: u.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function bn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Im(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function Wm(e) {
  const t = /* @__PURE__ */ Fm(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), c = i.find(Bm);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...s, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Fm(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = $m(o), i = Lm(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? At(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var zm = Symbol("radix.slottable");
function Bm(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zm;
}
function Lm(e, t) {
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
function $m(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ym = u[" useInsertionEffect ".trim().toString()] || ye;
function Pt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Hm({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o;
  {
    const f = u.useRef(e !== void 0);
    u.useEffect(() => {
      const m = f.current;
      m !== i && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const l = u.useCallback(
    (f) => {
      var m;
      if (i) {
        const h = Vm(f) ? f(e) : f;
        h !== e && ((m = s.current) == null || m.call(s, h));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [c, l];
}
function Hm({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), a = u.useRef(t);
  return Ym(() => {
    a.current = t;
  }, [t]), u.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Vm(e) {
  return typeof e == "function";
}
var jm = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Wt = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), vn = {}, wr = 0, Bs = function(e) {
  return e && (e.host || Bs(e.parentNode));
}, Gm = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Bs(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Um = function(e, t, n, r) {
  var o = Gm(t, Array.isArray(e) ? e : [e]);
  vn[n] || (vn[n] = /* @__PURE__ */ new WeakMap());
  var a = vn[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(m) {
    !m || i.has(m) || (i.add(m), l(m.parentNode));
  };
  o.forEach(l);
  var f = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), y = p !== null && p !== "false", g = (Wt.get(h) || 0) + 1, b = (a.get(h) || 0) + 1;
          Wt.set(h, g), a.set(h, b), s.push(h), g === 1 && y && yn.set(h, !0), b === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", h, x);
        }
    });
  };
  return f(t), i.clear(), wr++, function() {
    s.forEach(function(m) {
      var h = Wt.get(m) - 1, p = a.get(m) - 1;
      Wt.set(m, h), a.set(m, p), h || (yn.has(m) || m.removeAttribute(r), yn.delete(m)), p || m.removeAttribute(n);
    }), wr--, wr || (Wt = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), yn = /* @__PURE__ */ new WeakMap(), vn = {});
  };
}, io = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = jm(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Um(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Le = function() {
  return Le = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Le.apply(this, arguments);
};
function Ls(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function qm(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Cn = "right-scroll-bar-position", Nn = "width-before-scroll-bar", Xm = "with-scroll-bars-hidden", Km = "--removed-body-scroll-bar-size";
function xr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Zm(e, t) {
  var n = _e(function() {
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
var Qm = typeof window < "u" ? u.useLayoutEffect : u.useEffect, da = /* @__PURE__ */ new WeakMap();
function Jm(e, t) {
  var n = Zm(null, function(r) {
    return e.forEach(function(o) {
      return xr(o, r);
    });
  });
  return Qm(function() {
    var r = da.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || xr(i, null);
      }), a.forEach(function(i) {
        o.has(i) || xr(i, s);
      });
    }
    da.set(n, e);
  }, [e]), n;
}
function eh(e) {
  return e;
}
function th(e, t) {
  t === void 0 && (t = eh);
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
        var f = s;
        s = [], f.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(f) {
          s.push(f), l();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function nh(e) {
  e === void 0 && (e = {});
  var t = th(null);
  return t.options = Le({ async: !0, ssr: !1 }, e), t;
}
var $s = function(e) {
  var t = e.sideCar, n = Ls(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, Le({}, n));
};
$s.isSideCarExport = !0;
function rh(e, t) {
  return e.useMedium(t), $s;
}
var Ys = nh(), kr = function() {
}, Gn = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: kr,
    onWheelCapture: kr,
    onTouchMoveCapture: kr
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, m = e.shards, h = e.sideCar, p = e.noRelative, y = e.noIsolation, g = e.inert, b = e.allowPinchZoom, x = e.as, v = x === void 0 ? "div" : x, w = e.gapMode, S = Ls(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, k = Jm([n, t]), M = Le(Le({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: Ys, removeScrollBar: l, shards: m, noRelative: p, noIsolation: y, inert: g, setCallbacks: a, allowPinchZoom: !!b, lockRef: n, gapMode: w }),
    s ? u.cloneElement(u.Children.only(i), Le(Le({}, M), { ref: k })) : u.createElement(v, Le({}, M, { className: c, ref: k }), i)
  );
});
Gn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Gn.classNames = {
  fullWidth: Nn,
  zeroRight: Cn
};
var oh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ah() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = oh();
  return t && e.setAttribute("nonce", t), e;
}
function sh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ih(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ch = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ah()) && (sh(t, n), ih(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, lh = function() {
  var e = ch();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Hs = function() {
  var e = lh(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, dh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Sr = function(e) {
  return parseInt(e || "", 10) || 0;
}, uh = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Sr(n), Sr(r), Sr(o)];
}, fh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dh;
  var t = uh(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, mh = Hs(), Ht = "data-scroll-locked", hh = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Xm, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Ht, `] {
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
  
  .`).concat(Cn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Nn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Cn, " .").concat(Cn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Nn, " .").concat(Nn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ht, `] {
    `).concat(Km, ": ").concat(i, `px;
  }
`);
}, ua = function() {
  var e = parseInt(document.body.getAttribute(Ht) || "0", 10);
  return isFinite(e) ? e : 0;
}, ph = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Ht, (ua() + 1).toString()), function() {
      var e = ua() - 1;
      e <= 0 ? document.body.removeAttribute(Ht) : document.body.setAttribute(Ht, e.toString());
    };
  }, []);
}, gh = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  ph();
  var a = u.useMemo(function() {
    return fh(o);
  }, [o]);
  return u.createElement(mh, { styles: hh(a, !t, o, n ? "" : "!important") });
}, Fr = !1;
if (typeof window < "u")
  try {
    var wn = Object.defineProperty({}, "passive", {
      get: function() {
        return Fr = !0, !0;
      }
    });
    window.addEventListener("test", wn, wn), window.removeEventListener("test", wn, wn);
  } catch {
    Fr = !1;
  }
var Ft = Fr ? { passive: !1 } : !1, bh = function(e) {
  return e.tagName === "TEXTAREA";
}, Vs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !bh(e) && n[t] === "visible")
  );
}, yh = function(e) {
  return Vs(e, "overflowY");
}, vh = function(e) {
  return Vs(e, "overflowX");
}, fa = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = js(e, r);
    if (o) {
      var a = Gs(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, wh = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, xh = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, js = function(e, t) {
  return e === "v" ? yh(t) : vh(t);
}, Gs = function(e, t) {
  return e === "v" ? wh(t) : xh(t);
}, kh = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Sh = function(e, t, n, r, o) {
  var a = kh(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, f = s > 0, m = 0, h = 0;
  do {
    if (!i)
      break;
    var p = Gs(e, i), y = p[0], g = p[1], b = p[2], x = g - b - a * y;
    (y || x) && js(e, i) && (m += x, h += y);
    var v = i.parentNode;
    i = v && v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? v.host : v;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, xn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ma = function(e) {
  return [e.deltaX, e.deltaY];
}, ha = function(e) {
  return e && "current" in e ? e.current : e;
}, Ch = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Nh = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Mh = 0, zt = [];
function Eh(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(Mh++)[0], a = u.useState(Hs)[0], s = u.useRef(e);
  u.useEffect(function() {
    s.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = qm([e.lockRef.current], (e.shards || []).map(ha), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = u.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2 || g.type === "wheel" && g.ctrlKey)
      return !s.current.allowPinchZoom;
    var x = xn(g), v = n.current, w = "deltaX" in g ? g.deltaX : v[0] - x[0], S = "deltaY" in g ? g.deltaY : v[1] - x[1], C, k = g.target, M = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && M === "h" && k.type === "range")
      return !1;
    var N = window.getSelection(), D = N && N.anchorNode, R = D ? D === k || D.contains(k) : !1;
    if (R)
      return !1;
    var W = fa(M, k);
    if (!W)
      return !0;
    if (W ? C = M : (C = M === "v" ? "h" : "v", W = fa(M, k)), !W)
      return !1;
    if (!r.current && "changedTouches" in g && (w || S) && (r.current = C), !C)
      return !0;
    var H = r.current || C;
    return Sh(H, b, g, H === "h" ? w : S);
  }, []), c = u.useCallback(function(g) {
    var b = g;
    if (!(!zt.length || zt[zt.length - 1] !== a)) {
      var x = "deltaY" in b ? ma(b) : xn(b), v = t.current.filter(function(C) {
        return C.name === b.type && (C.target === b.target || b.target === C.shadowParent) && Ch(C.delta, x);
      })[0];
      if (v && v.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!v) {
        var w = (s.current.shards || []).map(ha).filter(Boolean).filter(function(C) {
          return C.contains(b.target);
        }), S = w.length > 0 ? i(b, w[0]) : !s.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = u.useCallback(function(g, b, x, v) {
    var w = { name: g, delta: b, target: x, should: v, shadowParent: Ph(x) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(g) {
    n.current = xn(g), r.current = void 0;
  }, []), m = u.useCallback(function(g) {
    l(g.type, ma(g), g.target, i(g, e.lockRef.current));
  }, []), h = u.useCallback(function(g) {
    l(g.type, xn(g), g.target, i(g, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return zt.push(a), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Ft), document.addEventListener("touchmove", c, Ft), document.addEventListener("touchstart", f, Ft), function() {
      zt = zt.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", c, Ft), document.removeEventListener("touchmove", c, Ft), document.removeEventListener("touchstart", f, Ft);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    y ? u.createElement(a, { styles: Nh(o) }) : null,
    p ? u.createElement(gh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ph(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Dh = rh(Ys, Eh);
var Un = u.forwardRef(function(e, t) {
  return u.createElement(Gn, Le({}, e, { ref: t, sideCar: Dh }));
});
Un.classNames = Gn.classNames;
var qn = "Popover", [Us] = rt(qn, [
  Vn
]), cn = Vn(), [Oh, gt] = Us(qn), qs = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = cn(t), c = u.useRef(null), [l, f] = u.useState(!1), [m, h] = Pt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: qn
  });
  return /* @__PURE__ */ d(Ws, { ...i, children: /* @__PURE__ */ d(
    Oh,
    {
      scope: t,
      contentId: et(),
      triggerRef: c,
      open: m,
      onOpenChange: h,
      onOpenToggle: u.useCallback(() => h((p) => !p), [h]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: u.useCallback(() => f(!0), []),
      onCustomAnchorRemove: u.useCallback(() => f(!1), []),
      modal: s,
      children: n
    }
  ) });
};
qs.displayName = qn;
var Xs = "PopoverAnchor", Ks = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = gt(Xs, n), a = cn(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ d(so, { ...a, ...r, ref: t });
  }
);
Ks.displayName = Xs;
var Zs = "PopoverTrigger", Qs = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = gt(Zs, n), a = cn(n), s = re(t, o.triggerRef), i = /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ri(o.open),
        ...r,
        ref: s,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ d(so, { asChild: !0, ...a, children: i });
  }
);
Qs.displayName = Zs;
var co = "PopoverPortal", [Th, Rh] = Us(co, {
  forceMount: void 0
}), Js = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = gt(co, t);
  return /* @__PURE__ */ d(Th, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Fe, { present: n || a.open, children: /* @__PURE__ */ d(jn, { asChild: !0, container: o, children: r }) }) });
};
Js.displayName = co;
var Gt = "PopoverContent", ei = u.forwardRef(
  (e, t) => {
    const n = Rh(Gt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = gt(Gt, e.__scopePopover);
    return /* @__PURE__ */ d(Fe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d(_h, { ...o, ref: t }) : /* @__PURE__ */ d(Ih, { ...o, ref: t }) });
  }
);
ei.displayName = Gt;
var Ah = /* @__PURE__ */ Wm("PopoverContent.RemoveScroll"), _h = u.forwardRef(
  (e, t) => {
    const n = gt(Gt, e.__scopePopover), r = u.useRef(null), o = re(t, r), a = u.useRef(!1);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return io(s);
    }, []), /* @__PURE__ */ d(Un, { as: Ah, allowPinchZoom: !0, children: /* @__PURE__ */ d(
      ti,
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
), Ih = u.forwardRef(
  (e, t) => {
    const n = gt(Gt, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d(
      ti,
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
), ti = u.forwardRef(
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
      onInteractOutside: f,
      ...m
    } = e, h = gt(Gt, n), p = cn(n);
    return Zr(), /* @__PURE__ */ d(
      Bn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ d(
          zn,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ d(
              Fs,
              {
                "data-state": ri(h.open),
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
), ni = "PopoverClose", Wh = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = gt(ni, n);
    return /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Wh.displayName = ni;
var Fh = "PopoverArrow", zh = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = cn(n);
    return /* @__PURE__ */ d(zs, { ...o, ...r, ref: t });
  }
);
zh.displayName = Fh;
function ri(e) {
  return e ? "open" : "closed";
}
var Bh = qs, Lh = Ks, $h = Qs, Yh = Js, oi = ei;
const Xn = Bh, Kn = $h, mw = Lh, ln = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d(Yh, { children: /* @__PURE__ */ d(
  oi,
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
ln.displayName = oi.displayName;
const Hh = [
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
function Vh({
  value: e = "#f59e0b",
  onChange: t,
  presets: n = Hh,
  label: r,
  error: o,
  helperText: a,
  disabled: s,
  className: i
}) {
  const c = u.useId(), [l, f] = u.useState(e);
  u.useEffect(() => {
    f(e);
  }, [e]);
  function m(p) {
    const y = p.target.value;
    f(y), /^#[0-9a-fA-F]{6}$/.test(y) && (t == null || t(y));
  }
  function h(p) {
    f(p), t == null || t(p);
  }
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ d("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(Xn, { children: [
      /* @__PURE__ */ d(Kn, { asChild: !0, children: /* @__PURE__ */ E(
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
            /* @__PURE__ */ d(
              "span",
              {
                className: "h-5 w-5 rounded border border-border shrink-0",
                style: { backgroundColor: e }
              }
            ),
            /* @__PURE__ */ d("span", { className: "text-text-base font-mono text-xs uppercase", children: e }),
            /* @__PURE__ */ d(wd, { className: "ml-auto h-4 w-4 text-text-muted shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ d(ln, { className: "w-64", align: "start", children: /* @__PURE__ */ E("div", { className: "space-y-3", children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "h-16 w-full rounded-lg border border-border",
            style: { backgroundColor: e }
          }
        ),
        /* @__PURE__ */ E("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d(
            "input",
            {
              type: "color",
              value: e,
              onChange: (p) => {
                f(p.target.value), t == null || t(p.target.value);
              },
              className: "h-10 w-10 rounded-lg border border-border cursor-pointer bg-transparent p-0.5",
              disabled: s
            }
          ),
          /* @__PURE__ */ d(
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
        n.length > 0 && /* @__PURE__ */ d("div", { className: "grid grid-cols-6 gap-1.5", children: n.map((p) => /* @__PURE__ */ d(
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
    o && /* @__PURE__ */ d("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
Vh.displayName = "ColorPicker";
function jh({
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
  className: f,
  clearable: m = !1
}) {
  const h = u.useId(), [p, y] = u.useState(!1), [g, b] = u.useState(""), x = u.useRef(null), v = u.useMemo(() => {
    if (!g) return e;
    const k = g.toLowerCase();
    return e.filter((M) => M.label.toLowerCase().includes(k));
  }, [e, g]), w = e.find((k) => k.value === t);
  function S(k) {
    n == null || n(k === t ? "" : k), y(!1), b("");
  }
  function C(k) {
    k.stopPropagation(), n == null || n("");
  }
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    s && /* @__PURE__ */ d("label", { htmlFor: h, className: "block text-sm font-medium text-text-base", children: s }),
    /* @__PURE__ */ E(Xn, { open: p, onOpenChange: (k) => {
      y(k), k || b("");
    }, children: [
      /* @__PURE__ */ d(Kn, { asChild: !0, children: /* @__PURE__ */ E(
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
            !w && "text-text-muted",
            i && "border-red-300 focus:ring-red-500 focus:border-red-500",
            f
          ),
          children: [
            /* @__PURE__ */ d("span", { className: "truncate", children: (w == null ? void 0 : w.label) ?? r }),
            /* @__PURE__ */ E("div", { className: "flex items-center gap-1 shrink-0", children: [
              m && t && /* @__PURE__ */ d(
                Fn,
                {
                  className: "h-3.5 w-3.5 text-text-muted hover:text-text-base cursor-pointer",
                  onClick: C
                }
              ),
              /* @__PURE__ */ d(id, { className: "h-4 w-4 text-text-muted" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ E(ln, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
        /* @__PURE__ */ E("div", { className: "flex items-center border-b border-border px-3", children: [
          /* @__PURE__ */ d(Ua, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ d(
            "input",
            {
              ref: x,
              value: g,
              onChange: (k) => b(k.target.value),
              placeholder: o,
              className: "flex-1 bg-transparent py-3 pl-2 text-sm outline-none placeholder:text-text-muted",
              autoFocus: !0
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "max-h-60 overflow-y-auto p-1", children: v.length === 0 ? /* @__PURE__ */ d("div", { className: "py-6 text-center text-sm text-text-muted", children: a }) : v.map((k) => /* @__PURE__ */ E(
          "button",
          {
            type: "button",
            disabled: k.disabled,
            onClick: () => S(k.value),
            className: P(
              "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none transition-colors",
              "hover:bg-subtle focus:bg-subtle",
              "disabled:pointer-events-none disabled:opacity-50",
              k.value === t && "font-medium"
            ),
            children: [
              /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: k.value === t && /* @__PURE__ */ d(on, { className: "h-4 w-4 text-databeez-primary" }) }),
              k.label
            ]
          },
          k.value
        )) })
      ] })
    ] }),
    i && /* @__PURE__ */ d("p", { className: "text-xs text-red-600", children: i }),
    c && !i && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: c })
  ] });
}
jh.displayName = "Combobox";
const Gh = u.lazy(async () => {
  const [{ Prism: e }, { oneDark: t }] = await Promise.all([
    import("./index-CqL3bFoY.mjs").then((n) => n.ca),
    import("./index-CFVSE0Ln.mjs")
  ]);
  return {
    default: ({ children: n, language: r }) => /* @__PURE__ */ d(
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
function hw({
  code: e,
  language: t = "text",
  copyable: n = !0,
  className: r,
  ...o
}) {
  const [a, s] = u.useState(!1), i = async () => {
    await navigator.clipboard.writeText(e), s(!0), setTimeout(() => s(!1), 2e3);
  };
  return /* @__PURE__ */ E(
    "div",
    {
      className: P("relative rounded-xl overflow-hidden text-sm", r),
      ...o,
      children: [
        /* @__PURE__ */ E("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ d("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: t }),
          n && /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              onClick: i,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: a ? /* @__PURE__ */ E(Ge, { children: [
                /* @__PURE__ */ d(on, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ d("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ E(Ge, { children: [
                /* @__PURE__ */ d(Ga, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ d("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ d(u.Suspense, { fallback: /* @__PURE__ */ d("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ d(Gh, { language: t, children: e }) })
      ]
    }
  );
}
function Uh({
  text: e,
  label: t,
  resetDelay: n = 2e3,
  className: r,
  ...o
}) {
  const [a, s] = u.useState(!1);
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
        a ? /* @__PURE__ */ d(on, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ d(Ga, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ d("span", { children: a ? "Copiato!" : t })
      ]
    }
  );
}
const pa = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-600 border border-indigo-200", ga = "text-indigo-600 dark:text-white shrink-0", ba = "text-[9px] font-medium text-indigo-700 dark:text-white leading-none", ya = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-violet-50 dark:bg-violet-600 border border-violet-200", va = "text-violet-600 dark:text-white shrink-0", wa = "text-[9px] font-medium text-violet-700 dark:text-white leading-none";
function pw({ source: e }) {
  return e === "mixed" ? /* @__PURE__ */ E("span", { className: "inline-flex items-center gap-1.5", children: [
    /* @__PURE__ */ E("span", { className: pa, children: [
      /* @__PURE__ */ d(Io, { size: 9, className: ga }),
      /* @__PURE__ */ d("span", { className: ba, children: "Dati reali" })
    ] }),
    /* @__PURE__ */ E("span", { className: ya, children: [
      /* @__PURE__ */ d(Fo, { size: 9, className: va }),
      /* @__PURE__ */ d("span", { className: wa, children: "Simulato" })
    ] })
  ] }) : e === "simulated" ? /* @__PURE__ */ E("span", { className: ya, children: [
    /* @__PURE__ */ d(Fo, { size: 9, className: va }),
    /* @__PURE__ */ d("span", { className: wa, children: "Simulato" })
  ] }) : /* @__PURE__ */ E("span", { className: pa, children: [
    /* @__PURE__ */ d(Io, { size: 9, className: ga }),
    /* @__PURE__ */ d("span", { className: ba, children: "Dati reali" })
  ] });
}
function gw({ width: e, height: t = 48, className: n, variant: r = "color" }) {
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
        /* @__PURE__ */ d("g", { fill: r === "mono" ? "currentColor" : "#363d45", children: /* @__PURE__ */ d("path", { d: "M128.5 314.6 c-22 -12.4 -29.6 -17.5 -31.7 -21.6 -1.5 -2.9 -1.8 -6 -1.8 -19.7 0 -9.9 -0.4 -16.4 -1 -16.8 -0.6 -0.4 -7 2.8 -14.3 7.1 -11.2 6.6 -14 7.8 -18.7 8.1 -5.3 0.4 -6 0.2 -17 -6.2 -6.3 -3.7 -14.8 -8.5 -18.9 -10.8 -9.6 -5.4 -14.6 -10.1 -16 -15.2 -0.6 -2.3 -1.1 -12.8 -1.1 -25 0 -27.6 -0.2 -27.2 16.2 -37 6.5 -3.8 13.2 -7.8 15 -8.8 l3.3 -1.9 -2.3 -1.9 c-1.3 -1 -5.8 -3.7 -10 -6 -22.7 -12.5 -22.1 -11.4 -22.2 -41.2 0 -23.7 0.4 -26.1 5.6 -30.8 1.6 -1.4 11.5 -7.7 21.9 -13.9 15.1 -9 20 -11.4 23.7 -11.8 5 -0.5 4.2 -0.8 24.3 10.7 5 2.8 9.6 5.1 10.3 5.1 0.9 0 1.2 -4 1.2 -16.7 0 -15.6 0.2 -17.1 2.3 -20.5 2.9 -4.9 4.2 -5.8 25.7 -18.4 16.7 -9.7 19 -10.8 23.5 -10.8 5.3 -0.1 5.6 0 33 16.2 18.8 11.1 18.5 10.5 18.5 33.1 0 10.7 0.4 17.2 1 17.6 0.6 0.4 5.4 -1.9 10.8 -5.1 18.9 -11.2 19.4 -11.4 24.7 -11.4 4.6 0 6.5 0.9 22.5 10.4 21.4 12.7 24.8 15.2 27.2 19.6 1.6 3.1 1.8 6 1.8 26.8 0 25.2 -0.2 26.3 -5.7 31.3 -1.5 1.4 -7.4 5.2 -13.1 8.4 -5.7 3.2 -11.3 6.6 -12.4 7.5 l-2.2 1.7 2.5 1.5 c1.3 0.8 7.8 4.7 14.4 8.5 17.1 10 16.5 8.7 16.5 38.7 0 25.7 -0.2 26.6 -5.7 31.8 -1.5 1.4 -11.1 7.5 -21.3 13.4 -24.9 14.4 -23.6 14.3 -43.5 3 -8.2 -4.7 -15.4 -8.5 -16 -8.3 -0.6 0.2 -1.2 8.1 -1.5 19.6 l-0.5 19.2 -4.5 4.2 c-2.5 2.3 -12.7 8.8 -22.6 14.5 -23.3 13.1 -21.8 13.1 -41.9 1.8z m32.5 -17.6 c5.6 -3.3 10.4 -6 10.7 -6 0.2 0 2.4 -1.4 4.9 -3 l4.4 -3.1 0 -17.8 0 -17.8 -6.2 -3.3 c-3.5 -1.9 -8.1 -4.5 -10.3 -5.9 -5.6 -3.6 -6.7 -4.2 -12.9 -7.5 l-5.5 -2.9 -17.1 10.3 -17 10.2 0.2 16.6 0.3 16.7 5 3.3 c2.8 1.8 7 4.3 9.5 5.6 2.5 1.3 7.9 4.5 12 7 5 3.1 8.2 4.4 9.7 4.1 1.2 -0.3 6.7 -3.2 12.3 -6.5z m-91.4 -48.7 c11.8 -6.6 12 -6.7 13.5 -8 0.8 -0.6 4.2 -2.6 7.7 -4.4 14.3 -7.7 15.2 -8.3 15.2 -10.9 0 -1 -2.8 -4.4 -6.2 -7.5 -3.5 -3.1 -6.8 -6.6 -7.5 -7.8 -0.8 -1.5 -1.2 -7.4 -1.3 -17.3 l0 -15 -3.5 -1.7 c-4.2 -2 -9.1 -8.5 -10.6 -14.1 -1.6 -5.7 -0.6 -15.3 2 -20.1 2.9 -5.2 8.5 -10.2 13 -11.5 4.9 -1.4 14.5 -1.3 19.5 0.2 5.7 1.7 13 9.3 14.5 15.2 2.8 11.2 0.4 21.4 -6.6 27.5 -2.5 2.3 -5.2 4.1 -5.9 4.1 -1.1 0 -1.4 2.2 -1.4 9.9 l0 9.9 6.6 5.8 c3.7 3.2 7.2 7 7.8 8.5 l1.1 2.7 4 -2.7 4 -2.7 0.2 -41.9 0.3 -42 -8.8 -5.1 c-4.8 -2.8 -18.1 -10.8 -29.5 -17.7 -11.4 -7 -21 -12.7 -21.2 -12.7 -0.2 0 -3.9 -2.1 -8.2 -4.6 l-7.8 -4.7 -3 1.8 c-1.6 1 -8.8 5.1 -16 9.2 -7.2 4.1 -13.6 8 -14.3 8.5 -0.9 0.8 -1.2 5.4 -1 18.7 l0.3 17.6 9 5.1 c5 2.9 12.3 6.9 16.4 9.1 4.1 2.1 8.9 5.2 10.7 6.9 3.2 2.9 3.4 3.6 3.4 9.5 0 4.6 -0.5 7 -1.8 8.5 -0.9 1.2 -7.5 5.4 -14.7 9.4 -7.2 3.9 -15.4 8.6 -18.3 10.3 l-5.2 3.1 0.2 18.4 0.3 18.4 5 2.9 c2.8 1.6 5.9 3.4 7 3.9 1.1 0.6 2.7 1.5 3.5 2 3.1 2.1 17.5 10 18.2 10 0.5 0 4.7 -2.1 9.4 -4.7z m183.3 -5.7 l15.6 -9.2 0.3 -17.6 0.2 -17.7 -3.3 -2.5 c-1.8 -1.4 -5.6 -3.8 -8.3 -5.2 -28.8 -15.4 -28.4 -15 -28.4 -24.2 0 -6.5 2.3 -10.2 7.7 -12.6 4.2 -1.8 26.5 -14.5 30.1 -17.1 2.1 -1.5 2.2 -2.1 2.2 -19 l0 -17.4 -3.2 -2.4 c-1.8 -1.3 -6.9 -4.4 -11.3 -6.7 -4.4 -2.4 -10.7 -6 -14.1 -8.1 l-6.1 -3.7 -29.9 18 c-16.4 9.9 -33.6 20.2 -38.1 22.9 l-8.3 5 0 41.9 0 41.9 3.7 2.5 c3.9 2.7 5.3 2.6 5.3 -0.4 0 -1.1 3 -4.6 7 -8.1 l7 -6.3 0 -9.6 -0.1 -9.5 -3.7 -2.3 c-2.1 -1.3 -5.1 -4.4 -6.7 -7 -2.8 -4.4 -3 -5.3 -3 -14.7 0 -12 1.7 -15.5 9.7 -20.6 4.4 -2.8 6.1 -3.3 13.2 -3.7 8.9 -0.5 12.9 0.7 19.1 5.4 5.8 4.4 7.7 10 7.3 20.8 -0.3 8.2 -0.6 9.6 -3.3 13.6 -1.7 2.5 -5 5.5 -7.3 6.8 l-4.2 2.3 0 14.5 c0 17 -0.2 17.7 -8.9 25.2 -3.4 3 -6.1 5.9 -6.1 6.7 0 0.7 4.4 3.9 9.8 7 5.3 3.1 15.8 9.2 23.2 13.6 9.1 5.3 14.1 7.7 15.4 7.3 1.1 -0.4 8.9 -4.8 17.5 -9.8z m-148.5 -86.5 c1.9 -2.1 1.4 -4.1 -1.5 -5.9 -1.8 -1.1 -2.4 -1.1 -4 0.4 -2.3 2.1 -2.4 3.2 -0.2 5.6 2.1 2.3 3.6 2.3 5.7 -0.1z m91 -0.3 c1.5 -2.1 1.4 -2.4 -0.9 -4.7 -2.4 -2.4 -2.5 -2.4 -4.5 -0.6 -2.3 2 -2.6 4.5 -0.8 6.3 1.9 1.9 4.5 1.4 6.2 -1z m-36.9 -58.5 c2.8 -1.6 5.7 -3.2 6.5 -3.6 0.8 -0.4 2.9 -1.6 4.5 -2.7 1.7 -1.1 3.7 -2.3 4.5 -2.7 0.8 -0.4 2.7 -1.6 4.3 -2.7 l2.7 -2 0 -17.1 0 -17.1 -3 -2.2 c-1.6 -1.2 -3.2 -2.2 -3.6 -2.2 -0.3 0 -1.9 -0.9 -3.4 -2 -1.5 -1.1 -7.6 -4.7 -13.5 -8 l-10.8 -6 -12.1 7 c-6.7 3.8 -14.3 8.4 -17.1 10.2 l-5 3.3 -0.3 16.7 -0.2 16.7 4.7 2.8 c2.7 1.5 7.7 4.6 11.3 6.9 3.6 2.3 9.4 5.7 13 7.7 6.5 3.5 6.5 3.5 9.5 1.7 1.7 -1 5.3 -3.1 8 -4.7z" }) }),
        /* @__PURE__ */ E("g", { fill: "#f49e09", children: [
          /* @__PURE__ */ d("path", { d: "M137.5 303.3 c-4.9 -3 -11 -6.6 -13.5 -7.9 -2.5 -1.3 -6.7 -3.8 -9.5 -5.6 l-5 -3.3 -0.3 -19.7 -0.2 -19.6 15.7 -9.5 c23.6 -14.1 20.6 -13.2 28.8 -8.6 3.9 2.1 7.7 4.2 8.5 4.6 0.8 0.4 3.3 1.9 5.5 3.4 2.2 1.4 6.8 4.1 10.3 5.9 l6.2 3.3 0 20.8 0 20.8 -4.4 3.1 c-2.5 1.6 -4.7 3 -4.9 3 -0.3 0 -3.8 1.9 -7.9 4.3 -11.4 6.8 -18.6 10.7 -19.5 10.6 -0.4 0 -4.8 -2.5 -9.8 -5.6z" }),
          /* @__PURE__ */ d("path", { d: "M51 252.9 c-4.7 -2.7 -9.4 -5.4 -10.5 -5.9 -1.1 -0.6 -3.3 -1.9 -5 -2.9 -1.6 -1 -5 -3 -7.5 -4.4 l-4.5 -2.5 -0.3 -21.4 -0.2 -21.4 5.2 -3.1 c2.9 -1.7 11.2 -6.4 18.3 -10.3 7.2 -4 13.8 -8.2 14.7 -9.4 1 -1.1 1.8 -3.6 1.8 -5.5 0 -4.3 -4.1 -8.2 -14.1 -13.4 -4.1 -2.2 -11.4 -6.2 -16.4 -9.1 l-9 -5.1 -0.3 -20.6 c-0.2 -15.7 0.1 -20.9 1 -21.7 1.1 -0.8 15.7 -9.4 32.3 -18.8 l4.1 -2.3 9.3 5.4 c5.1 3 9.5 5.5 9.7 5.5 0.2 0 9.7 5.7 21.1 12.7 11.4 6.9 24.7 14.9 29.5 17.7 l8.8 5.1 -0.3 45 -0.2 45 -6.5 4.2 c-3.6 2.4 -6.8 4.3 -7.2 4.3 -0.5 0 -0.8 -1.5 -0.8 -3.2 0 -2.8 -1.1 -4.4 -7.5 -10.3 l-7.5 -7.1 0 -12.7 c0 -10 0.3 -12.7 1.4 -12.7 0.7 0 3.4 -1.8 6 -4.1 6.1 -5.4 8.4 -12.6 6.6 -20.6 -2.1 -9.4 -11.9 -17.3 -21.6 -17.3 -10.2 0 -19.9 8.5 -21.9 19.3 -1.4 7.2 4.3 18.2 11 21.4 l3.5 1.7 0 15 c0.1 9.9 0.5 15.8 1.3 17.3 0.7 1.2 4 4.7 7.5 7.8 6 5.5 6.2 5.9 6.2 10.5 0 5.9 0.5 5.5 -15.2 13.9 -3.5 1.8 -6.9 3.8 -7.7 4.4 -1.6 1.3 -2.1 1.6 -15.4 9 -5.8 3.1 -10.7 5.7 -10.8 5.6 -0.2 0 -4.2 -2.3 -8.9 -5z" }),
          /* @__PURE__ */ d("path", { d: "M227 253.7 c-4.1 -2.4 -11.3 -6.5 -16 -9.1 -4.7 -2.7 -12.7 -7.4 -17.7 -10.4 l-9.3 -5.4 0 -4.3 c0 -4.1 0.4 -4.7 6.1 -9.7 8.7 -7.5 8.9 -8.2 8.9 -25.2 l0 -14.5 4.2 -2.3 c12.7 -7 14.6 -26.6 3.3 -35.2 -8.8 -6.7 -17.7 -7.3 -26.5 -1.6 -7 4.5 -9.4 8.9 -9.4 17.5 -0.1 6.1 0.3 7.6 2.9 11.7 1.6 2.6 4.6 5.7 6.7 7 l3.7 2.3 0.1 12.5 0 12.6 -6.9 6.2 c-5.7 5.1 -7 6.8 -7.6 10.2 -0.4 2.2 -0.8 4 -1.1 4 -0.6 0 -7.8 -4.1 -10.6 -6.2 l-2.8 -1.9 0 -44.9 0 -44.9 9.8 -5.9 c39 -23.5 65.8 -39.5 67.7 -40.4 2 -0.9 3.6 -0.3 10.7 4 4.5 2.7 11.5 6.7 15.3 8.7 3.9 2.1 8.5 4.9 10.3 6.2 l3.2 2.4 0 20.4 c0 20 0 20.4 -2.2 22 -3.6 2.6 -25.9 15.3 -30.1 17.1 -6.6 2.9 -9.3 8.8 -6.4 14.3 1.2 2.4 5.3 4.9 27.1 16.5 2.7 1.4 6.4 3.8 8.3 5.2 l3.3 2.5 -0.2 20.7 -0.3 20.6 -12.5 7.4 c-6.9 4.1 -14.6 8.5 -17.3 9.9 -2.6 1.4 -5 2.9 -5.3 3.4 -0.8 1.4 -1.5 1.2 -9.4 -3.4z" }),
          /* @__PURE__ */ d("path", { d: "M95.9 159.1 c-3.4 -3.5 -3.7 -6.8 -0.8 -10.5 2.9 -3.6 8.6 -3.6 12.3 0 3.6 3.7 3.4 7.5 -0.5 10.8 -4 3.4 -7.4 3.3 -11 -0.3z" }),
          /* @__PURE__ */ d("path", { d: "M186.5 159.5 c-5.1 -5 -1.7 -13.5 5.4 -13.5 4.7 0 8.1 3.3 8.1 7.9 0 4.2 -3.8 8.1 -8 8.1 -1.9 0 -4 -0.9 -5.5 -2.5z" }),
          /* @__PURE__ */ d("path", { d: "M145 107.6 c-0.8 -0.8 -4.2 -2.9 -7.5 -4.6 -3.3 -1.8 -8.9 -5.1 -12.5 -7.4 -3.6 -2.3 -8.6 -5.4 -11.3 -6.9 l-4.7 -2.8 0.2 -19.7 0.3 -19.7 5 -3.3 c10 -6.6 31.2 -18.2 33.2 -18.2 1.2 0 2.5 0.4 2.8 1 0.3 0.5 4.5 3.1 9.3 5.6 4.8 2.6 10.6 6 12.9 7.6 2.3 1.5 4.4 2.8 4.8 2.8 0.3 0 1.9 1 3.5 2.2 l3 2.2 0 20.1 0 20.1 -2.7 2 c-1.6 1.1 -3.5 2.3 -4.3 2.7 -0.8 0.4 -2.8 1.6 -4.5 2.7 -1.6 1.1 -3.7 2.3 -4.5 2.7 -0.8 0.3 -5.9 3.3 -11.2 6.5 -5.4 3.2 -9.9 5.8 -10.1 5.8 -0.1 0 -0.9 -0.6 -1.7 -1.4z" })
        ] })
      ]
    }
  );
}
function qh(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const Cr = {}, Qt = {};
function Nt(e, t) {
  try {
    const r = (Cr[e] || (Cr[e] = new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format))(t).split("GMT")[1];
    return r in Qt ? Qt[r] : xa(r, r.split(":"));
  } catch {
    if (e in Qt) return Qt[e];
    const n = e == null ? void 0 : e.match(Xh);
    return n ? xa(e, n.slice(1)) : NaN;
  }
}
const Xh = /([+-]\d\d):?(\d\d)?/;
function xa(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Qt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Ve extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Nt(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), ai(this), zr(this)) : this.setTime(Date.now());
  }
  static tz(t, ...n) {
    return n.length ? new Ve(...n, t) : new Ve(Date.now(), t);
  }
  //#endregion
  //#region time zone
  withTimeZone(t) {
    return new Ve(+this, t);
  }
  getTimezoneOffset() {
    const t = -Nt(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), zr(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [Symbol.for("constructDateFrom")](t) {
    return new Ve(+new Date(t), this.timeZone);
  }
  //#endregion
}
const ka = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!ka.test(e)) return;
  const t = e.replace(ka, "$1UTC");
  Ve.prototype[t] && (e.startsWith("get") ? Ve.prototype[e] = function() {
    return this.internal[t]();
  } : (Ve.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), Kh(this), +this;
  }, Ve.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), zr(this), +this;
  }));
});
function zr(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Nt(e.timeZone, e) * 60));
}
function Kh(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ai(e);
}
function ai(e) {
  const t = Nt(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), s = o - a, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  s && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + s);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const f = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, m = Math.round(-(Nt(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const h = Nt(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, b = p !== n, x = g - c;
  if (b && x) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + x);
    const v = Nt(e.timeZone, e), w = v > 0 ? Math.floor(v) : Math.ceil(v), S = p - w;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class ve extends Ve {
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
    return `${t} GMT${n}${r}${o} (${qh(this.timeZone, this)})`;
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
const si = 6048e5, Zh = 864e5, Sa = Symbol.for("constructDateFrom");
function me(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Sa in e ? e[Sa](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ce(e, t) {
  return me(t || e, e);
}
function ii(e, t, n) {
  const r = ce(e, n == null ? void 0 : n.in);
  return isNaN(t) ? me(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function ci(e, t, n) {
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
let Qh = {};
function dn() {
  return Qh;
}
function mt(e, t) {
  var i, c, l, f;
  const n = dn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ce(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function nn(e, t) {
  return mt(e, { ...t, weekStartsOn: 1 });
}
function li(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = me(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const a = nn(o), s = me(n, 0);
  s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0);
  const i = nn(s);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Ca(e) {
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
function _t(e, ...t) {
  const n = me.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function rn(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function lo(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = rn(r), s = rn(o), i = +a - Ca(a), c = +s - Ca(s);
  return Math.round((i - c) / Zh);
}
function Jh(e, t) {
  const n = li(e, t), r = me(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), nn(r);
}
function ep(e, t, n) {
  return ii(e, t * 7, n);
}
function tp(e, t, n) {
  return ci(e, t * 12, n);
}
function np(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const a = ce(o, r);
    (!n || n < a || isNaN(+a)) && (n = a);
  }), me(r, n || NaN);
}
function rp(e, t) {
  let n, r = t == null ? void 0 : t.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const a = ce(o, r);
    (!n || n > a || isNaN(+a)) && (n = a);
  }), me(r, n || NaN);
}
function op(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +rn(r) == +rn(o);
}
function di(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ap(e) {
  return !(!di(e) && typeof e != "number" || isNaN(+ce(e)));
}
function ui(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = r.getFullYear() - o.getFullYear(), s = r.getMonth() - o.getMonth();
  return a * 12 + s;
}
function sp(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function fi(e, t) {
  const [n, r] = _t(e, t.start, t.end);
  return { start: n, end: r };
}
function ip(e, t) {
  const { start: n, end: r } = fi(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setDate(1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(me(n, s)), s.setMonth(s.getMonth() + i);
  return o ? c.reverse() : c;
}
function cp(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function lp(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function mi(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function dp(e, t) {
  const { start: n, end: r } = fi(t == null ? void 0 : t.in, e);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0), s.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +s <= a; )
    c.push(me(n, s)), s.setFullYear(s.getFullYear() + i);
  return o ? c.reverse() : c;
}
function hi(e, t) {
  var i, c, l, f;
  const n = dn(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = ce(e, t == null ? void 0 : t.in), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function up(e, t) {
  return hi(e, { ...t, weekStartsOn: 1 });
}
const fp = {
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
}, mp = (e, t, n) => {
  let r;
  const o = fp[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Vt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const hp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pp = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, gp = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, bp = {
  date: Vt({
    formats: hp,
    defaultWidth: "full"
  }),
  time: Vt({
    formats: pp,
    defaultWidth: "full"
  }),
  dateTime: Vt({
    formats: gp,
    defaultWidth: "full"
  })
}, yp = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, vp = (e, t, n, r) => yp[e];
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
const wp = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, xp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, kp = {
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
}, Sp = {
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
}, Cp = {
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
}, Np = {
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
}, Mp = (e, t) => {
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
}, Ep = {
  ordinalNumber: Mp,
  era: $e({
    values: wp,
    defaultWidth: "wide"
  }),
  quarter: $e({
    values: xp,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $e({
    values: kp,
    defaultWidth: "wide"
  }),
  day: $e({
    values: Sp,
    defaultWidth: "wide"
  }),
  dayPeriod: $e({
    values: Cp,
    defaultWidth: "wide",
    formattingValues: Np,
    defaultFormattingWidth: "wide"
  })
};
function Ye(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Dp(i, (m) => m.test(s)) : (
      // [TODO] -- I challenge you to fix the type
      Pp(i, (m) => m.test(s))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const f = t.slice(s.length);
    return { value: l, rest: f };
  };
}
function Pp(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Dp(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function pi(e) {
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
const Op = /^(\d+)(th|st|nd|rd)?/i, Tp = /\d+/i, Rp = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ap = {
  any: [/^b/i, /^(a|c)/i]
}, _p = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Ip = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Wp = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Fp = {
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
}, zp = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Bp = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Lp = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, $p = {
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
}, Yp = {
  ordinalNumber: pi({
    matchPattern: Op,
    parsePattern: Tp,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ye({
    matchPatterns: Rp,
    defaultMatchWidth: "wide",
    parsePatterns: Ap,
    defaultParseWidth: "any"
  }),
  quarter: Ye({
    matchPatterns: _p,
    defaultMatchWidth: "wide",
    parsePatterns: Ip,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ye({
    matchPatterns: Wp,
    defaultMatchWidth: "wide",
    parsePatterns: Fp,
    defaultParseWidth: "any"
  }),
  day: Ye({
    matchPatterns: zp,
    defaultMatchWidth: "wide",
    parsePatterns: Bp,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ye({
    matchPatterns: Lp,
    defaultMatchWidth: "any",
    parsePatterns: $p,
    defaultParseWidth: "any"
  })
}, $t = {
  code: "en-US",
  formatDistance: mp,
  formatLong: bp,
  formatRelative: vp,
  localize: Ep,
  match: Yp,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Hp(e, t) {
  const n = ce(e, t == null ? void 0 : t.in);
  return lo(n, mi(n)) + 1;
}
function uo(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = +nn(n) - +Jh(n);
  return Math.round(r / si) + 1;
}
function gi(e, t) {
  var f, m, h, p;
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = dn(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((m = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = me((t == null ? void 0 : t.in) || e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = mt(s, t), c = me((t == null ? void 0 : t.in) || e, 0);
  c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
  const l = mt(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function Vp(e, t) {
  var i, c, l, f;
  const n = dn(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (l = n.locale) == null ? void 0 : l.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = gi(e, t), a = me((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), mt(a, t);
}
function fo(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = +mt(n, t) - +Vp(n, t);
  return Math.round(r / si) + 1;
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
}, Bt = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Na = {
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
    const o = gi(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return ie(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ie(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = li(e);
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
    const o = fo(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ie(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = uo(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ie(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : ct.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Hp(e);
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
    switch (r === 12 ? o = Bt.noon : r === 0 ? o = Bt.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Bt.evening : r >= 12 ? o = Bt.afternoon : r >= 4 ? o = Bt.morning : o = Bt.night, t) {
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
        return Ea(r);
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
        return Ea(r);
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
        return "GMT" + Ma(r, ":");
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
        return "GMT" + Ma(r, ":");
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
function Ma(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + ie(a, 2);
}
function Ea(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ie(Math.abs(e) / 60, 2) : St(e, t);
}
function St(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ie(Math.trunc(r / 60), 2), a = ie(r % 60, 2);
  return n + o + t + a;
}
const Pa = (e, t) => {
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
}, bi = (e, t) => {
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
}, jp = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Pa(e, t);
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
  return a.replace("{{date}}", Pa(r, t)).replace("{{time}}", bi(o, t));
}, Gp = {
  p: bi,
  P: jp
}, Up = /^D+$/, qp = /^Y+$/, Xp = ["D", "DD", "YY", "YYYY"];
function Kp(e) {
  return Up.test(e);
}
function Zp(e) {
  return qp.test(e);
}
function Qp(e, t, n) {
  const r = Jp(e, t, n);
  if (console.warn(r), Xp.includes(e)) throw new RangeError(r);
}
function Jp(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const eg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, tg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ng = /^'([^]*?)'?$/, rg = /''/g, og = /[a-zA-Z]/;
function Ze(e, t, n) {
  var f, m, h, p, y, g, b, x;
  const r = dn(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? $t, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((m = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : m.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (y = n == null ? void 0 : n.locale) == null ? void 0 : y.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? ((x = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : x.weekStartsOn) ?? 0, i = ce(e, n == null ? void 0 : n.in);
  if (!ap(i))
    throw new RangeError("Invalid time value");
  let c = t.match(tg).map((v) => {
    const w = v[0];
    if (w === "p" || w === "P") {
      const S = Gp[w];
      return S(v, o.formatLong);
    }
    return v;
  }).join("").match(eg).map((v) => {
    if (v === "''")
      return { isToken: !1, value: "'" };
    const w = v[0];
    if (w === "'")
      return { isToken: !1, value: ag(v) };
    if (Na[w])
      return { isToken: !0, value: v };
    if (w.match(og))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + w + "`"
      );
    return { isToken: !1, value: v };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return c.map((v) => {
    if (!v.isToken) return v.value;
    const w = v.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Zp(w) || !(n != null && n.useAdditionalDayOfYearTokens) && Kp(w)) && Qp(w, t, String(e));
    const S = Na[w[0]];
    return S(i, w, o.localize, l);
  }).join("");
}
function ag(e) {
  const t = e.match(ng);
  return t ? t[1].replace(rg, "'") : e;
}
function sg(e, t) {
  const n = ce(e, t == null ? void 0 : t.in), r = n.getFullYear(), o = n.getMonth(), a = me(n, 0);
  return a.setFullYear(r, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function ig(e, t) {
  return ce(e, t == null ? void 0 : t.in).getMonth();
}
function cg(e, t) {
  return ce(e, t == null ? void 0 : t.in).getFullYear();
}
function lg(e, t) {
  return +ce(e) > +ce(t);
}
function dg(e, t) {
  return +ce(e) < +ce(t);
}
function Da(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return +mt(r, n) == +mt(o, n);
}
function ug(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function fg(e, t, n) {
  const [r, o] = _t(
    n == null ? void 0 : n.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function mg(e, t, n) {
  const r = ce(e, n == null ? void 0 : n.in), o = r.getFullYear(), a = r.getDate(), s = me(e, 0);
  s.setFullYear(o, t, 15), s.setHours(0, 0, 0, 0);
  const i = sg(s);
  return r.setMonth(t, Math.min(a, i)), r;
}
function hg(e, t, n) {
  const r = ce(e, n == null ? void 0 : n.in);
  return isNaN(+r) ? me(e, NaN) : (r.setFullYear(t), r);
}
const Oa = 5, pg = 4;
function gg(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), a = t.addDays(o, Oa * 7 - 1);
  return t.getMonth(e) === t.getMonth(a) ? Oa : pg;
}
function yi(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -1 * 6) : t.addDays(n, -1 * (r - 1));
}
function bg(e, t) {
  const n = yi(e, t), r = gg(e, t);
  return t.addDays(n, r * 7 - 1);
}
const yg = {
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
}, vg = (e, t, n) => {
  let r;
  const o = yg[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r;
}, wg = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, xg = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, kg = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Sg = {
  date: Vt({
    formats: wg,
    defaultWidth: "full"
  }),
  time: Vt({
    formats: xg,
    defaultWidth: "full"
  }),
  dateTime: Vt({
    formats: kg,
    defaultWidth: "full"
  })
}, mo = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function Cg(e) {
  switch (e) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + mo[e] + " scorso alle' p";
  }
}
function Ta(e) {
  return "'" + mo[e] + " alle' p";
}
function Ng(e) {
  switch (e) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + mo[e] + " prossimo alle' p";
  }
}
const Mg = {
  lastWeek: (e, t, n) => {
    const r = e.getDay();
    return Da(e, t, n) ? Ta(r) : Cg(r);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, t, n) => {
    const r = e.getDay();
    return Da(e, t, n) ? Ta(r) : Ng(r);
  },
  other: "P"
}, Eg = (e, t, n, r) => {
  const o = Mg[e];
  return typeof o == "function" ? o(t, n, r) : o;
}, Pg = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, Dg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Og = {
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
}, Tg = {
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
}, Rg = {
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
}, Ag = {
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
}, _g = (e, t) => {
  const n = Number(e);
  return String(n);
}, Ig = {
  ordinalNumber: _g,
  era: $e({
    values: Pg,
    defaultWidth: "wide"
  }),
  quarter: $e({
    values: Dg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $e({
    values: Og,
    defaultWidth: "wide"
  }),
  day: $e({
    values: Tg,
    defaultWidth: "wide"
  }),
  dayPeriod: $e({
    values: Rg,
    defaultWidth: "wide",
    formattingValues: Ag,
    defaultFormattingWidth: "wide"
  })
}, Wg = /^(\d+)(º)?/i, Fg = /\d+/i, zg = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, Bg = {
  any: [/^a/i, /^(d|e)/i]
}, Lg = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, $g = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Yg = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, Hg = {
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
}, Vg = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, jg = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, Gg = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, Ug = {
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
}, qg = {
  ordinalNumber: pi({
    matchPattern: Wg,
    parsePattern: Fg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ye({
    matchPatterns: zg,
    defaultMatchWidth: "wide",
    parsePatterns: Bg,
    defaultParseWidth: "any"
  }),
  quarter: Ye({
    matchPatterns: Lg,
    defaultMatchWidth: "wide",
    parsePatterns: $g,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ye({
    matchPatterns: Yg,
    defaultMatchWidth: "wide",
    parsePatterns: Hg,
    defaultParseWidth: "any"
  }),
  day: Ye({
    matchPatterns: Vg,
    defaultMatchWidth: "wide",
    parsePatterns: jg,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ye({
    matchPatterns: Gg,
    defaultMatchWidth: "any",
    parsePatterns: Ug,
    defaultParseWidth: "any"
  })
}, Xg = {
  code: "it",
  formatDistance: vg,
  formatLong: Sg,
  formatRelative: Eg,
  localize: Ig,
  match: qg,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, vi = {
  ...$t,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => Ze(s, i, { locale: $t, ...n });
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
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => Ze(o, a, { locale: $t, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (s, i) => Ze(s, i, { locale: $t, ...n });
      let a = o(e, "PPPP");
      return t != null && t.today && (a = `Today, ${a}`), a;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, a) => Ze(o, a, { locale: $t, ...t }), r(e, "cccc");
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
      return (a = this.overrides) != null && a.addDays ? this.overrides.addDays(r, o) : ii(r, o);
    }, this.addMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addMonths ? this.overrides.addMonths(r, o) : ci(r, o);
    }, this.addWeeks = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addWeeks ? this.overrides.addWeeks(r, o) : ep(r, o);
    }, this.addYears = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.addYears ? this.overrides.addYears(r, o) : tp(r, o);
    }, this.differenceInCalendarDays = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : lo(r, o);
    }, this.differenceInCalendarMonths = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : ui(r, o);
    }, this.eachMonthOfInterval = (r) => {
      var o;
      return (o = this.overrides) != null && o.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : ip(r);
    }, this.eachYearOfInterval = (r) => {
      var i;
      const o = (i = this.overrides) != null && i.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : dp(r), a = new Set(o.map((c) => this.getYear(c)));
      if (a.size === o.length)
        return o;
      const s = [];
      return a.forEach((c) => {
        s.push(new Date(c, 0, 1));
      }), s;
    }, this.endOfBroadcastWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : bg(r, this);
    }, this.endOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfISOWeek ? this.overrides.endOfISOWeek(r) : up(r);
    }, this.endOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfMonth ? this.overrides.endOfMonth(r) : sp(r);
    }, this.endOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.endOfWeek ? this.overrides.endOfWeek(r, o) : hi(r, this.options);
    }, this.endOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.endOfYear ? this.overrides.endOfYear(r) : lp(r);
    }, this.format = (r, o, a) => {
      var i;
      const s = (i = this.overrides) != null && i.format ? this.overrides.format(r, o, this.options) : Ze(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(s) : s;
    }, this.getISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.getISOWeek ? this.overrides.getISOWeek(r) : uo(r);
    }, this.getMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getMonth ? this.overrides.getMonth(r, this.options) : ig(r, this.options);
    }, this.getYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getYear ? this.overrides.getYear(r, this.options) : cg(r, this.options);
    }, this.getWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.getWeek ? this.overrides.getWeek(r, this.options) : fo(r, this.options);
    }, this.isAfter = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isAfter ? this.overrides.isAfter(r, o) : lg(r, o);
    }, this.isBefore = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isBefore ? this.overrides.isBefore(r, o) : dg(r, o);
    }, this.isDate = (r) => {
      var o;
      return (o = this.overrides) != null && o.isDate ? this.overrides.isDate(r) : di(r);
    }, this.isSameDay = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameDay ? this.overrides.isSameDay(r, o) : op(r, o);
    }, this.isSameMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameMonth ? this.overrides.isSameMonth(r, o) : ug(r, o);
    }, this.isSameYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.isSameYear ? this.overrides.isSameYear(r, o) : fg(r, o);
    }, this.max = (r) => {
      var o;
      return (o = this.overrides) != null && o.max ? this.overrides.max(r) : np(r);
    }, this.min = (r) => {
      var o;
      return (o = this.overrides) != null && o.min ? this.overrides.min(r) : rp(r);
    }, this.setMonth = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setMonth ? this.overrides.setMonth(r, o) : mg(r, o);
    }, this.setYear = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.setYear ? this.overrides.setYear(r, o) : hg(r, o);
    }, this.startOfBroadcastWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : yi(r, this);
    }, this.startOfDay = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfDay ? this.overrides.startOfDay(r) : rn(r);
    }, this.startOfISOWeek = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfISOWeek ? this.overrides.startOfISOWeek(r) : nn(r);
    }, this.startOfMonth = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfMonth ? this.overrides.startOfMonth(r) : cp(r);
    }, this.startOfWeek = (r, o) => {
      var a;
      return (a = this.overrides) != null && a.startOfWeek ? this.overrides.startOfWeek(r, this.options) : mt(r, this.options);
    }, this.startOfYear = (r) => {
      var o;
      return (o = this.overrides) != null && o.startOfYear ? this.overrides.startOfYear(r) : mi(r);
    }, this.options = { locale: vi, ...t }, this.overrides = n;
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
class wi {
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
class Kg {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class Zg {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function Qg(e) {
  return T.createElement("button", { ...e });
}
function Jg(e) {
  return T.createElement("span", { ...e });
}
function eb(e) {
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
function tb(e) {
  const { day: t, modifiers: n, ...r } = e;
  return T.createElement("td", { ...r });
}
function nb(e) {
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
function rb(e) {
  const { options: t, className: n, components: r, classNames: o, ...a } = e, s = [o[F.Dropdown], n].join(" "), i = t == null ? void 0 : t.find(({ value: c }) => c === a.value);
  return T.createElement(
    "span",
    { "data-disabled": a.disabled, className: o[F.DropdownRoot] },
    T.createElement(r.Select, { className: s, ...a }, t == null ? void 0 : t.map(({ value: c, label: l, disabled: f }) => T.createElement(r.Option, { key: c, value: c, disabled: f }, l))),
    T.createElement(
      "span",
      { className: o[F.CaptionLabel], "aria-hidden": !0 },
      i == null ? void 0 : i.label,
      T.createElement(r.Chevron, { orientation: "down", size: 18, className: o[F.Chevron] })
    )
  );
}
function ob(e) {
  return T.createElement("div", { ...e });
}
function ab(e) {
  return T.createElement("div", { ...e });
}
function sb(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r }, e.children);
}
function ib(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r });
}
function cb(e) {
  return T.createElement("table", { ...e });
}
function lb(e) {
  return T.createElement("div", { ...e });
}
const xi = $a(void 0);
function un() {
  const e = Ya(xi);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function db(e) {
  const { components: t } = un();
  return T.createElement(t.Dropdown, { ...e });
}
function ub(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...a } = e, { components: s, classNames: i, labels: { labelPrevious: c, labelNext: l } } = un(), f = Se((h) => {
    o && (n == null || n(h));
  }, [o, n]), m = Se((h) => {
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
      { type: "button", className: i[F.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: f },
      T.createElement(s.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[F.Chevron] })
    )
  );
}
function fb(e) {
  const { components: t } = un();
  return T.createElement(t.Button, { ...e });
}
function mb(e) {
  return T.createElement("option", { ...e });
}
function hb(e) {
  const { components: t } = un();
  return T.createElement(t.Button, { ...e });
}
function pb(e) {
  const { rootRef: t, ...n } = e;
  return T.createElement("div", { ...n, ref: t });
}
function gb(e) {
  return T.createElement("select", { ...e });
}
function bb(e) {
  const { week: t, ...n } = e;
  return T.createElement("tr", { ...n });
}
function yb(e) {
  return T.createElement("th", { ...e });
}
function vb(e) {
  return T.createElement(
    "thead",
    { "aria-hidden": !0 },
    T.createElement("tr", { ...e })
  );
}
function wb(e) {
  const { week: t, ...n } = e;
  return T.createElement("th", { ...n });
}
function xb(e) {
  return T.createElement("th", { ...e });
}
function kb(e) {
  return T.createElement("tbody", { ...e });
}
function Sb(e) {
  const { components: t } = un();
  return T.createElement(t.Dropdown, { ...e });
}
const Cb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Qg,
  CaptionLabel: Jg,
  Chevron: eb,
  Day: tb,
  DayButton: nb,
  Dropdown: rb,
  DropdownNav: ob,
  Footer: ab,
  Month: sb,
  MonthCaption: ib,
  MonthGrid: cb,
  Months: lb,
  MonthsDropdown: db,
  Nav: ub,
  NextMonthButton: fb,
  Option: mb,
  PreviousMonthButton: hb,
  Root: pb,
  Select: gb,
  Week: bb,
  WeekNumber: wb,
  WeekNumberHeader: xb,
  Weekday: yb,
  Weekdays: vb,
  Weeks: kb,
  YearsDropdown: Sb
}, Symbol.toStringTag, { value: "Module" }));
function Qe(e, t, n = !1, r = qe) {
  let { from: o, to: a } = e;
  const { differenceInCalendarDays: s, isSameDay: i } = r;
  return o && a ? (s(a, o) < 0 && ([o, a] = [a, o]), s(t, o) >= (n ? 1 : 0) && s(a, t) >= (n ? 1 : 0)) : !n && a ? i(a, t) : !n && o ? i(o, t) : !1;
}
function ho(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Zn(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function po(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function go(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function ki(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function Si(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Je(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: a, isAfter: s } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (Si(i, n))
      return i.some((c) => o(e, c));
    if (Zn(i))
      return Qe(i, e, !1, n);
    if (ki(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (ho(i)) {
      const c = a(i.before, e), l = a(i.after, e), f = c > 0, m = l < 0;
      return s(i.before, i.after) ? m && f : f || m;
    }
    return po(i) ? a(e, i.after) > 0 : go(i) ? a(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function Nb(e, t, n, r, o) {
  const { disabled: a, hidden: s, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: f = o.today() } = t, { isSameDay: m, isSameMonth: h, startOfMonth: p, isBefore: y, endOfMonth: g, isAfter: b } = o, x = n && p(n), v = r && g(r), w = {
    [ue.focused]: [],
    [ue.outside]: [],
    [ue.disabled]: [],
    [ue.hidden]: [],
    [ue.today]: []
  }, S = {};
  for (const C of e) {
    const { date: k, displayMonth: M } = C, N = !!(M && !h(k, M)), D = !!(x && y(k, x)), R = !!(v && b(k, v)), W = !!(a && Je(k, a, o)), H = !!(s && Je(k, s, o)) || D || R || // Broadcast calendar will show outside days as default
    !l && !c && N || l && c === !1 && N, V = m(k, f);
    N && w.outside.push(C), W && w.disabled.push(C), H && w.hidden.push(C), V && w.today.push(C), i && Object.keys(i).forEach((L) => {
      const K = i == null ? void 0 : i[L];
      K && Je(k, K, o) && (S[L] ? S[L].push(C) : S[L] = [C]);
    });
  }
  return (C) => {
    const k = {
      [ue.focused]: !1,
      [ue.disabled]: !1,
      [ue.hidden]: !1,
      [ue.outside]: !1,
      [ue.today]: !1
    }, M = {};
    for (const N in w) {
      const D = w[N];
      k[N] = D.some((R) => R === C);
    }
    for (const N in S)
      M[N] = S[N].some((D) => D === C);
    return {
      ...k,
      // custom modifiers should override all the previous ones
      ...M
    };
  };
}
function Mb(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [a]) => (n[a] ? o.push(n[a]) : t[ue[a]] ? o.push(t[ue[a]]) : t[Ae[a]] && o.push(t[Ae[a]]), o), [t[F.Day]]);
}
function Eb(e) {
  return {
    ...Cb,
    ...e
  };
}
function Pb(e) {
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
function Db() {
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
function Ci(e, t, n) {
  return (n ?? new Ee(t)).formatMonthYear(e);
}
const Ob = Ci;
function Tb(e, t, n) {
  return (n ?? new Ee(t)).format(e, "d");
}
function Rb(e, t = qe) {
  return t.format(e, "LLLL");
}
function Ab(e, t, n) {
  return (n ?? new Ee(t)).format(e, "cccccc");
}
function _b(e, t = qe) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function Ib() {
  return "";
}
function Ni(e, t = qe) {
  return t.format(e, "yyyy");
}
const Wb = Ni, Fb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Ci,
  formatDay: Tb,
  formatMonthCaption: Ob,
  formatMonthDropdown: Rb,
  formatWeekNumber: _b,
  formatWeekNumberHeader: Ib,
  formatWeekdayName: Ab,
  formatYearCaption: Wb,
  formatYearDropdown: Ni
}, Symbol.toStringTag, { value: "Module" }));
function zb(e) {
  return e != null && e.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e != null && e.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...Fb,
    ...e
  };
}
function bo(e, t, n, r) {
  let o = (r ?? new Ee(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const Bb = bo;
function yo(e, t, n) {
  return (n ?? new Ee(t)).formatMonthYear(e);
}
const Lb = yo;
function Mi(e, t, n, r) {
  let o = (r ?? new Ee(n)).format(e, "PPPP");
  return t != null && t.today && (o = `Today, ${o}`), o;
}
function Ei(e) {
  return "Choose the Month";
}
function Pi() {
  return "";
}
const $b = "Go to the Next Month";
function Di(e, t) {
  return $b;
}
function Oi(e) {
  return "Go to the Previous Month";
}
function Ti(e, t, n) {
  return (n ?? new Ee(t)).format(e, "cccc");
}
function Ri(e, t) {
  return `Week ${e}`;
}
function Ai(e) {
  return "Week Number";
}
function _i(e) {
  return "Choose the Year";
}
const Yb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: Lb,
  labelDay: Bb,
  labelDayButton: bo,
  labelGrid: yo,
  labelGridcell: Mi,
  labelMonthDropdown: Ei,
  labelNav: Pi,
  labelNext: Di,
  labelPrevious: Oi,
  labelWeekNumber: Ri,
  labelWeekNumberHeader: Ai,
  labelWeekday: Ti,
  labelYearDropdown: _i
}, Symbol.toStringTag, { value: "Module" })), Te = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function Hb(e, t) {
  var r;
  const n = ((r = t.locale) == null ? void 0 : r.labels) ?? {};
  return {
    ...Yb,
    ...e ?? {},
    labelDayButton: Te(bo, e == null ? void 0 : e.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Te(Ei, e == null ? void 0 : e.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Te(Di, e == null ? void 0 : e.labelNext, n.labelNext),
    labelPrevious: Te(Oi, e == null ? void 0 : e.labelPrevious, n.labelPrevious),
    labelWeekNumber: Te(Ri, e == null ? void 0 : e.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Te(_i, e == null ? void 0 : e.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Te(yo, e == null ? void 0 : e.labelGrid, n.labelGrid),
    labelGridcell: Te(Mi, e == null ? void 0 : e.labelGridcell, n.labelGridcell),
    labelNav: Te(Pi, e == null ? void 0 : e.labelNav, n.labelNav),
    labelWeekNumberHeader: Te(Ai, e == null ? void 0 : e.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Te(Ti, e == null ? void 0 : e.labelWeekday, n.labelWeekday)
  };
}
function Vb(e, t, n, r, o) {
  const { startOfMonth: a, startOfYear: s, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: s(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), y = l(h), g = t && h < a(t) || n && h > a(n) || !1;
    return { value: y, label: p, disabled: g };
  });
}
function jb(e, t = {}, n = {}) {
  let r = { ...t == null ? void 0 : t[F.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n == null ? void 0 : n[o]
    };
  }), r;
}
function Gb(e, t, n, r) {
  const o = r ?? e.today(), a = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), s = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(a, i);
    s.push(c);
  }
  return s;
}
function Ub(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: a, endOfYear: s, eachYearOfInterval: i, getYear: c } = r, l = a(e), f = s(t), m = i({ start: l, end: f });
  return o && m.reverse(), m.map((h) => {
    const p = n.formatYearDropdown(h, r);
    return {
      value: c(h),
      label: p,
      disabled: !1
    };
  });
}
function qb(e, t = {}) {
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
    newDate: (c, l, f) => new ve(c, l, f, 12, 0, 0, e),
    startOfDay: (c) => a(c),
    startOfWeek: (c, l) => {
      const f = a(c), m = (l == null ? void 0 : l.weekStartsOn) ?? o, h = (f.getDay() - m + 7) % 7;
      return f.setDate(f.getDate() - h), f;
    },
    startOfISOWeek: (c) => {
      const l = a(c), f = (l.getDay() - 1 + 7) % 7;
      return l.setDate(l.getDate() - f), l;
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
      const f = a(c), p = ((((l == null ? void 0 : l.weekStartsOn) ?? o) + 6) % 7 - f.getDay() + 7) % 7;
      return f.setDate(f.getDate() + p), f;
    },
    endOfISOWeek: (c) => {
      const l = a(c), f = (7 - l.getDay()) % 7;
      return l.setDate(l.getDate() + f), l;
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
      const l = a(c.start), f = a(c.end), m = [], h = new ve(l.getFullYear(), l.getMonth(), 1, 12, 0, 0, e), p = f.getFullYear() * 12 + f.getMonth();
      for (; h.getFullYear() * 12 + h.getMonth() <= p; )
        m.push(new ve(h, e)), h.setMonth(h.getMonth() + 1, 1);
      return m;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (c, l) => {
      const f = a(c);
      return f.setDate(f.getDate() + l), f;
    },
    addWeeks: (c, l) => {
      const f = a(c);
      return f.setDate(f.getDate() + l * 7), f;
    },
    addMonths: (c, l) => {
      const f = a(c);
      return f.setMonth(f.getMonth() + l), f;
    },
    addYears: (c, l) => {
      const f = a(c);
      return f.setFullYear(f.getFullYear() + l), f;
    },
    eachYearOfInterval: (c) => {
      const l = a(c.start), f = a(c.end), m = [], h = new ve(l.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; h.getFullYear() <= f.getFullYear(); )
        m.push(new ve(h, e)), h.setFullYear(h.getFullYear() + 1, 0, 1);
      return m;
    },
    getWeek: (c, l) => {
      var m;
      const f = s(c);
      return fo(f, {
        weekStartsOn: (l == null ? void 0 : l.weekStartsOn) ?? o,
        firstWeekContainsDate: (l == null ? void 0 : l.firstWeekContainsDate) ?? ((m = r == null ? void 0 : r.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1
      });
    },
    getISOWeek: (c) => {
      const l = s(c);
      return uo(l);
    },
    differenceInCalendarDays: (c, l) => {
      const f = s(c), m = s(l);
      return lo(f, m);
    },
    differenceInCalendarMonths: (c, l) => {
      const f = s(c), m = s(l);
      return ui(f, m);
    }
  };
}
const fn = (e) => e instanceof HTMLElement ? e : null, Nr = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], Xb = (e) => fn(e.querySelector("[data-animated-month]")), Mr = (e) => fn(e.querySelector("[data-animated-caption]")), Er = (e) => fn(e.querySelector("[data-animated-weeks]")), Kb = (e) => fn(e.querySelector("[data-animated-nav]")), Zb = (e) => fn(e.querySelector("[data-animated-weekdays]"));
function Qb(e, t, { classNames: n, months: r, focused: o, dateLib: a }) {
  const s = dt(null), i = dt(r), c = dt(!1);
  La(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const f = a.isSameMonth(r[0].date, l[0].date), m = a.isAfter(r[0].date, l[0].date), h = m ? n[Ce.caption_after_enter] : n[Ce.caption_before_enter], p = m ? n[Ce.weeks_after_enter] : n[Ce.weeks_before_enter], y = s.current, g = e.current.cloneNode(!0);
    if (g instanceof HTMLElement ? (Nr(g).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const S = Xb(w);
      S && w.contains(S) && w.removeChild(S);
      const C = Mr(w);
      C && C.classList.remove(h);
      const k = Er(w);
      k && k.classList.remove(p);
    }), s.current = g) : s.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = y instanceof HTMLElement ? Nr(y) : [], x = Nr(e.current);
    if (x != null && x.every((v) => v instanceof HTMLElement) && b && b.every((v) => v instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const v = Kb(e.current);
      v && (v.style.zIndex = "1"), x.forEach((w, S) => {
        const C = b[S];
        if (!C)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const k = Mr(w);
        k && k.classList.add(h);
        const M = Er(w);
        M && M.classList.add(p);
        const N = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), v && (v.style.zIndex = ""), k && k.classList.remove(h), M && M.classList.remove(p), w.style.position = "", w.style.overflow = "", w.contains(C) && w.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const D = Zb(C);
        D && (D.style.opacity = "0");
        const R = Mr(C);
        R && (R.classList.add(m ? n[Ce.caption_before_exit] : n[Ce.caption_after_exit]), R.addEventListener("animationend", N));
        const W = Er(C);
        W && W.classList.add(m ? n[Ce.weeks_before_exit] : n[Ce.weeks_after_exit]), w.insertBefore(C, w.firstChild);
      });
    }
  });
}
function Jb(e, t, n, r) {
  const o = e[0], a = e[e.length - 1], { ISOWeek: s, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: y, endOfWeek: g, isAfter: b, startOfBroadcastWeek: x, startOfISOWeek: v, startOfWeek: w } = r, S = c ? x(o, r) : s ? v(o) : w(o), C = c ? h(a) : s ? p(y(a)) : g(y(a)), k = t && (c ? h(t) : s ? p(t) : g(t)), M = k && b(C, k) ? k : C, N = f(M, S), D = m(a, o) + 1, R = [];
  for (let V = 0; V <= N; V++) {
    const L = l(S, V);
    R.push(L);
  }
  const H = (c ? 35 : 42) * D;
  if (i && R.length < H) {
    const V = H - R.length;
    for (let L = 0; L < V; L++) {
      const K = l(R[R.length - 1], 1);
      R.push(K);
    }
  }
  return R;
}
function ey(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((a, s) => a.concat(s.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function ty(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, a = [];
  for (let s = 0; s < o; s++) {
    const i = r.addMonths(e, s);
    if (t && i > t)
      break;
    a.push(i);
  }
  return a;
}
function Ra(e, t, n, r) {
  const { month: o, defaultMonth: a, today: s = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || a || s;
  const { differenceInCalendarMonths: l, addMonths: f, startOfMonth: m } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = f(n, h);
  }
  return t && l(c, t) < 0 && (c = t), m(c);
}
function ny(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: a, endOfISOWeek: s, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: h, startOfWeek: p } = r, y = e.reduce((g, b) => {
    const x = n.broadcastCalendar ? m(b, r) : n.ISOWeek ? h(b) : p(b), v = n.broadcastCalendar ? a(b) : n.ISOWeek ? s(i(b)) : c(i(b)), w = t.filter((M) => M >= x && M <= v), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < S) {
      const M = t.filter((N) => {
        const D = S - w.length;
        return N > v && N <= o(v, D);
      });
      w.push(...M);
    }
    const C = w.reduce((M, N) => {
      const D = n.ISOWeek ? l(N) : f(N), R = M.find((H) => H.weekNumber === D), W = new wi(N, b, r);
      return R ? R.days.push(W) : M.push(new Zg(D, [W])), M;
    }, []), k = new Kg(b, C);
    return g.push(k), g;
  }, []);
  return n.reverseMonths ? y.reverse() : y;
}
function ry(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: a, startOfMonth: s, endOfMonth: i, addYears: c, endOfYear: l, newDate: f, today: m } = t, { fromYear: h, toYear: p, fromMonth: y, toMonth: g } = e;
  !n && y && (n = y), !n && h && (n = t.newDate(h, 0, 1)), !r && g && (r = g), !r && p && (r = f(p, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = s(n) : h ? n = f(h, 0, 1) : !n && b && (n = o(c(e.today ?? m(), -100))), r ? r = i(r) : p ? r = f(p, 11, 31) : !r && b && (r = l(e.today ?? m())), [
    n && a(n),
    r && a(r)
  ];
}
function oy(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a = 1 } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a : 1, f = s(e);
  if (!t)
    return i(f, l);
  if (!(c(t, e) < a))
    return i(f, l);
}
function ay(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: a } = n, { startOfMonth: s, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? a ?? 1 : 1, f = s(e);
  if (!t)
    return i(f, -l);
  if (!(c(f, t) <= 0))
    return i(f, -l);
}
function sy(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function Qn(e, t) {
  const [n, r] = _e(e);
  return [t === void 0 ? n : t, r];
}
function iy(e, t) {
  var S;
  const [n, r] = ry(e, t), { startOfMonth: o, endOfMonth: a } = t, s = Ra(e, n, r, t), [i, c] = Qn(
    s,
    // initialMonth is always computed from props.month if provided
    e.month ? s : void 0
  );
  Mt(() => {
    const C = Ra(e, n, r, t);
    c(C);
  }, [e.timeZone]);
  const { months: l, weeks: f, days: m, previousMonth: h, nextMonth: p } = kn(() => {
    const C = ty(i, r, { numberOfMonths: e.numberOfMonths }, t), k = Jb(C, e.endMonth ? a(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), M = ny(C, k, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), N = sy(M), D = ey(M), R = ay(i, n, e, t), W = oy(i, r, e, t);
    return {
      months: M,
      weeks: N,
      days: D,
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
    (S = e.endMonth) == null ? void 0 : S.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: y, onMonthChange: g } = e, b = (C) => f.some((k) => k.days.some((M) => M.isEqualTo(C))), x = (C) => {
    if (y)
      return;
    let k = o(C);
    n && k < o(n) && (k = o(n)), r && k > o(r) && (k = o(r)), c(k), g == null || g(k);
  };
  return {
    months: l,
    weeks: f,
    days: m,
    navStart: n,
    navEnd: r,
    previousMonth: h,
    nextMonth: p,
    goToMonth: x,
    goToDay: (C) => {
      b(C) || x(C.date);
    }
  };
}
var Be;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(Be || (Be = {}));
function Aa(e) {
  return !e[ue.disabled] && !e[ue.hidden] && !e[ue.outside];
}
function cy(e, t, n, r) {
  let o, a = -1;
  for (const s of e) {
    const i = t(s);
    Aa(i) && (i[ue.focused] && a < Be.FocusedModifier ? (o = s, a = Be.FocusedModifier) : r != null && r.isEqualTo(s) && a < Be.LastFocused ? (o = s, a = Be.LastFocused) : n(s.date) && a < Be.Selected ? (o = s, a = Be.Selected) : i[ue.today] && a < Be.Today && (o = s, a = Be.Today));
  }
  return o || (o = e.find((s) => Aa(t(s)))), o;
}
function ly(e, t, n, r, o, a, s) {
  const { ISOWeek: i, broadcastCalendar: c } = a, { addDays: l, addMonths: f, addWeeks: m, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: y, endOfWeek: g, max: b, min: x, startOfBroadcastWeek: v, startOfISOWeek: w, startOfWeek: S } = s;
  let k = {
    day: l,
    week: m,
    month: f,
    year: h,
    startOfWeek: (M) => c ? v(M, s) : i ? w(M) : S(M),
    endOfWeek: (M) => c ? p(M) : i ? y(M) : g(M)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? k = b([r, k]) : t === "after" && o && (k = x([o, k])), k;
}
function Ii(e, t, n, r, o, a, s, i = 0) {
  if (i > 365)
    return;
  const c = ly(e, t, n.date, r, o, a, s), l = !!(a.disabled && Je(c, a.disabled, s)), f = !!(a.hidden && Je(c, a.hidden, s)), m = c, h = new wi(c, m, s);
  return !l && !f ? h : Ii(e, t, h, r, o, a, s, i + 1);
}
function dy(e, t, n, r, o) {
  const { autoFocus: a } = e, [s, i] = _e(), c = cy(t.days, n, r || (() => !1), s), [l, f] = _e(a ? c : void 0);
  return {
    isFocusTarget: (g) => !!(c != null && c.isEqualTo(g)),
    setFocused: f,
    focused: l,
    blur: () => {
      i(l), f(void 0);
    },
    moveFocus: (g, b) => {
      if (!l)
        return;
      const x = Ii(g, b, l, t.navStart, t.navEnd, e, o);
      x && (e.disableNavigation && !t.days.some((w) => w.isEqualTo(x)) || (t.goToDay(x), f(x)));
    }
  };
}
function uy(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Qn(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t, l = (p) => (i == null ? void 0 : i.some((y) => c(y, p))) ?? !1, { min: f, max: m } = e;
  return {
    selected: i,
    select: (p, y, g) => {
      let b = [...i ?? []];
      if (l(p)) {
        if ((i == null ? void 0 : i.length) === f || r && (i == null ? void 0 : i.length) === 1)
          return;
        b = i == null ? void 0 : i.filter((x) => !c(x, p));
      } else
        (i == null ? void 0 : i.length) === m ? b = [p] : b = [...b, p];
      return o || s(b), o == null || o(b, p, y, g), b;
    },
    isSelected: l
  };
}
function fy(e, t, n = 0, r = 0, o = !1, a = qe) {
  const { from: s, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: f } = a;
  let m;
  if (!s && !i)
    m = { from: e, to: n > 0 ? void 0 : e };
  else if (s && !i)
    c(s, e) ? n === 0 ? m = { from: s, to: e } : o ? m = { from: s, to: void 0 } : m = void 0 : f(e, s) ? m = { from: e, to: s } : m = { from: s, to: e };
  else if (s && i)
    if (c(s, e) && c(i, e))
      o ? m = { from: s, to: i } : m = void 0;
    else if (c(s, e))
      m = { from: s, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      m = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, s))
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
function my(e, t, n = qe) {
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
function _a(e, t, n = qe) {
  return Qe(e, t.from, !1, n) || Qe(e, t.to, !1, n) || Qe(t, e.from, !1, n) || Qe(t, e.to, !1, n);
}
function hy(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Qe(e, i, !1, n) : Si(i, n) ? i.some((c) => Qe(e, c, !1, n)) : Zn(i) ? i.from && i.to ? _a(e, { from: i.from, to: i.to }, n) : !1 : ki(i) ? my(e, i.dayOfWeek, n) : ho(i) ? n.isAfter(i.before, i.after) ? _a(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Je(e.from, i, n) || Je(e.to, i, n) : po(i) || go(i) ? Je(e.from, i, n) || Je(e.to, i, n) : !1))
    return !0;
  const s = r.filter((i) => typeof i == "function");
  if (s.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (s.some((f) => f(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function py(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: a, required: s, onSelect: i } = e, [c, l] = Qn(a, i ? a : void 0), f = i ? a : c;
  return {
    selected: f,
    select: (p, y, g) => {
      const { min: b, max: x } = e;
      let v;
      if (p) {
        const w = f == null ? void 0 : f.from, S = f == null ? void 0 : f.to, C = !!w && !!S, k = !!w && !!S && t.isSameDay(w, S) && t.isSameDay(p, w);
        o && (C || !(f != null && f.from)) ? !s && k ? v = void 0 : v = { from: p, to: void 0 } : v = fy(p, f, b, x, s, t);
      }
      return r && n && (v != null && v.from) && v.to && hy({ from: v.from, to: v.to }, n, t) && (v.from = p, v.to = void 0), i || l(v), i == null || i(v, p, y, g), v;
    },
    isSelected: (p) => f && Qe(f, p, !1, t)
  };
}
function gy(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [a, s] = Qn(n, o ? n : void 0), i = o ? n : a, { isSameDay: c } = t;
  return {
    selected: i,
    select: (m, h, p) => {
      let y = m;
      return !r && i && i && c(m, i) && (y = void 0), o || s(y), o == null || o(y, m, h, p), y;
    },
    isSelected: (m) => i ? c(i, m) : !1
  };
}
function by(e, t) {
  const n = gy(e, t), r = uy(e, t), o = py(e, t);
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
function De(e, t) {
  return e instanceof ve && e.timeZone === t ? e : new ve(e, t);
}
function Lt(e, t, n) {
  return De(e, t);
}
function Ia(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Lt(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Lt(r, t) : r) : Zn(e) ? {
    ...e,
    from: e.from ? De(e.from, t) : e.from,
    to: e.to ? De(e.to, t) : e.to
  } : ho(e) ? {
    before: Lt(e.before, t),
    after: Lt(e.after, t)
  } : po(e) ? {
    after: Lt(e.after, t)
  } : go(e) ? {
    before: Lt(e.before, t)
  } : e;
}
function Pr(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Ia(r, t)) : Ia(e, t));
}
function yy(e) {
  var To;
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = De(t.today, n)), t.month && (t.month = De(t.month, n)), t.defaultMonth && (t.defaultMonth = De(t.defaultMonth, n)), t.startMonth && (t.startMonth = De(t.startMonth, n)), t.endMonth && (t.endMonth = De(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = De(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = (To = t.selected) == null ? void 0 : To.map((U) => De(U, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? De(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? De(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Pr(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Pr(t.hidden, n)), t.modifiers)) {
    const U = {};
    Object.keys(t.modifiers).forEach((se) => {
      var $;
      U[se] = Pr(($ = t.modifiers) == null ? void 0 : $[se], n);
    }), t.modifiers = U;
  }
  const { components: r, formatters: o, labels: a, dateLib: s, locale: i, classNames: c } = kn(() => {
    const U = { ...vi, ...t.locale }, se = t.broadcastCalendar ? 1 : t.weekStartsOn, $ = t.noonSafe && t.timeZone ? qb(t.timeZone, {
      weekStartsOn: se,
      locale: U
    }) : void 0, oe = t.dateLib && $ ? { ...$, ...t.dateLib } : t.dateLib ?? $, ke = new Ee({
      locale: U,
      weekStartsOn: se,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, oe);
    return {
      dateLib: ke,
      components: Eb(t.components),
      formatters: zb(t.formatters),
      labels: Hb(t.labels, ke.options),
      locale: U,
      classNames: { ...Db(), ...t.classNames }
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
  const { captionLayout: l, mode: f, navLayout: m, numberOfMonths: h = 1, onDayBlur: p, onDayClick: y, onDayFocus: g, onDayKeyDown: b, onDayMouseEnter: x, onDayMouseLeave: v, onNextClick: w, onPrevClick: S, showWeekNumber: C, styles: k } = t, { formatCaption: M, formatDay: N, formatMonthDropdown: D, formatWeekNumber: R, formatWeekNumberHeader: W, formatWeekdayName: H, formatYearDropdown: V } = o, L = iy(t, s), { days: K, months: I, navStart: j, navEnd: B, previousMonth: G, nextMonth: O, goToMonth: fe } = L, Pe = Nb(K, t, j, B, s), { isSelected: xe, select: ge, selected: le } = by(t, s) ?? {}, { blur: de, focused: z, isFocusTarget: ae, moveFocus: Q, setFocused: te } = dy(t, L, Pe, xe ?? (() => !1), s), { labelDayButton: J, labelGridcell: ee, labelGrid: he, labelMonthDropdown: be, labelNav: at, labelPrevious: vt, labelNext: wt, labelWeekday: cr, labelWeekNumber: It, labelWeekNumberHeader: Al, labelYearDropdown: _l } = a, Il = kn(() => Gb(s, t.ISOWeek, t.broadcastCalendar, t.today), [s, t.ISOWeek, t.broadcastCalendar, t.today]), Do = f !== void 0 || y !== void 0, lr = Se(() => {
    G && (fe(G), S == null || S(G));
  }, [G, fe, S]), dr = Se(() => {
    O && (fe(O), w == null || w(O));
  }, [fe, O, w]), Wl = Se((U, se) => ($) => {
    $.preventDefault(), $.stopPropagation(), te(U), !se.disabled && (ge == null || ge(U.date, se, $), y == null || y(U.date, se, $));
  }, [ge, y, te]), Fl = Se((U, se) => ($) => {
    te(U), g == null || g(U.date, se, $);
  }, [g, te]), zl = Se((U, se) => ($) => {
    de(), p == null || p(U.date, se, $);
  }, [de, p]), Bl = Se((U, se) => ($) => {
    const oe = {
      ArrowLeft: [
        $.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        $.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [$.shiftKey ? "year" : "week", "after"],
      ArrowUp: [$.shiftKey ? "year" : "week", "before"],
      PageUp: [$.shiftKey ? "year" : "month", "before"],
      PageDown: [$.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (oe[$.key]) {
      $.preventDefault(), $.stopPropagation();
      const [ke, ne] = oe[$.key];
      Q(ke, ne);
    }
    b == null || b(U.date, se, $);
  }, [Q, b, t.dir]), Ll = Se((U, se) => ($) => {
    x == null || x(U.date, se, $);
  }, [x]), $l = Se((U, se) => ($) => {
    v == null || v(U.date, se, $);
  }, [v]), Yl = Se((U) => (se) => {
    const $ = Number(se.target.value), oe = s.setMonth(s.startOfMonth(U), $);
    fe(oe);
  }, [s, fe]), Hl = Se((U) => (se) => {
    const $ = Number(se.target.value), oe = s.setYear(s.startOfMonth(U), $);
    fe(oe);
  }, [s, fe]), { className: Vl, style: jl } = kn(() => ({
    className: [c[F.Root], t.className].filter(Boolean).join(" "),
    style: { ...k == null ? void 0 : k[F.Root], ...t.style }
  }), [c, t.className, t.style, k]), Gl = Pb(t), Oo = dt(null);
  Qb(Oo, !!t.animate, {
    classNames: c,
    months: I,
    focused: z,
    dateLib: s
  });
  const Ul = {
    dayPickerProps: t,
    selected: le,
    select: ge,
    isSelected: xe,
    months: I,
    nextMonth: O,
    previousMonth: G,
    goToMonth: fe,
    getModifiers: Pe,
    components: r,
    classNames: c,
    styles: k,
    labels: a,
    formatters: o
  };
  return T.createElement(
    xi.Provider,
    { value: Ul },
    T.createElement(
      r.Root,
      { rootRef: t.animate ? Oo : void 0, className: Vl, style: jl, dir: t.dir, id: t.id, lang: t.lang ?? i.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...Gl },
      T.createElement(
        r.Months,
        { className: c[F.Months], style: k == null ? void 0 : k[F.Months] },
        !t.hideNavigation && !m && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[F.Nav], style: k == null ? void 0 : k[F.Nav], "aria-label": at(), onPreviousClick: lr, onNextClick: dr, previousMonth: G, nextMonth: O }),
        I.map((U, se) => T.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[F.Month],
            style: k == null ? void 0 : k[F.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: se,
            displayIndex: se,
            calendarMonth: U
          },
          m === "around" && !t.hideNavigation && se === 0 && T.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[F.PreviousMonthButton], tabIndex: G ? void 0 : -1, "aria-disabled": G ? void 0 : !0, "aria-label": vt(G), onClick: lr, "data-animated-button": t.animate ? "true" : void 0 },
            T.createElement(r.Chevron, { disabled: G ? void 0 : !0, className: c[F.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          T.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[F.MonthCaption], style: k == null ? void 0 : k[F.MonthCaption], calendarMonth: U, displayIndex: se }, l != null && l.startsWith("dropdown") ? T.createElement(
            r.DropdownNav,
            { className: c[F.Dropdowns], style: k == null ? void 0 : k[F.Dropdowns] },
            (() => {
              const $ = l === "dropdown" || l === "dropdown-months" ? T.createElement(r.MonthsDropdown, { key: "month", className: c[F.MonthsDropdown], "aria-label": be(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: Yl(U.date), options: Vb(U.date, j, B, o, s), style: k == null ? void 0 : k[F.Dropdown], value: s.getMonth(U.date) }) : T.createElement("span", { key: "month" }, D(U.date, s)), oe = l === "dropdown" || l === "dropdown-years" ? T.createElement(r.YearsDropdown, { key: "year", className: c[F.YearsDropdown], "aria-label": _l(s.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: Hl(U.date), options: Ub(j, B, o, s, !!t.reverseYears), style: k == null ? void 0 : k[F.Dropdown], value: s.getYear(U.date) }) : T.createElement("span", { key: "year" }, V(U.date, s));
              return s.getMonthYearOrder() === "year-first" ? [oe, $] : [$, oe];
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
            } }, M(U.date, s.options, s))
          ) : T.createElement(r.CaptionLabel, { className: c[F.CaptionLabel], role: "status", "aria-live": "polite" }, M(U.date, s.options, s))),
          m === "around" && !t.hideNavigation && se === h - 1 && T.createElement(
            r.NextMonthButton,
            { type: "button", className: c[F.NextMonthButton], tabIndex: O ? void 0 : -1, "aria-disabled": O ? void 0 : !0, "aria-label": wt(O), onClick: dr, "data-animated-button": t.animate ? "true" : void 0 },
            T.createElement(r.Chevron, { disabled: O ? void 0 : !0, className: c[F.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          se === h - 1 && m === "after" && !t.hideNavigation && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[F.Nav], style: k == null ? void 0 : k[F.Nav], "aria-label": at(), onPreviousClick: lr, onNextClick: dr, previousMonth: G, nextMonth: O }),
          T.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": f === "multiple" || f === "range", "aria-label": he(U.date, s.options, s) || void 0, className: c[F.MonthGrid], style: k == null ? void 0 : k[F.MonthGrid] },
            !t.hideWeekdays && T.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[F.Weekdays], style: k == null ? void 0 : k[F.Weekdays] },
              C && T.createElement(r.WeekNumberHeader, { "aria-label": Al(s.options), className: c[F.WeekNumberHeader], style: k == null ? void 0 : k[F.WeekNumberHeader], scope: "col" }, W()),
              Il.map(($) => T.createElement(r.Weekday, { "aria-label": cr($, s.options, s), className: c[F.Weekday], key: String($), style: k == null ? void 0 : k[F.Weekday], scope: "col" }, H($, s.options, s)))
            ),
            T.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[F.Weeks], style: k == null ? void 0 : k[F.Weeks] }, U.weeks.map(($) => T.createElement(
              r.Week,
              { className: c[F.Week], key: $.weekNumber, style: k == null ? void 0 : k[F.Week], week: $ },
              C && T.createElement(r.WeekNumber, { week: $, style: k == null ? void 0 : k[F.WeekNumber], "aria-label": It($.weekNumber, {
                locale: i
              }), className: c[F.WeekNumber], scope: "row", role: "rowheader" }, R($.weekNumber, s)),
              $.days.map((oe) => {
                const { date: ke } = oe, ne = Pe(oe);
                if (ne[ue.focused] = !ne.hidden && !!(z != null && z.isEqualTo(oe)), ne[Ae.selected] = (xe == null ? void 0 : xe(ke)) || ne.selected, Zn(le)) {
                  const { from: ur, to: fr } = le;
                  ne[Ae.range_start] = !!(ur && fr && s.isSameDay(ke, ur)), ne[Ae.range_end] = !!(ur && fr && s.isSameDay(ke, fr)), ne[Ae.range_middle] = Qe(le, ke, !0, s);
                }
                const ql = jb(ne, k, t.modifiersStyles), Xl = Mb(ne, c, t.modifiersClassNames), Kl = !Do && !ne.hidden ? ee(ke, ne, s.options, s) : void 0;
                return T.createElement(r.Day, { key: `${oe.isoDate}_${oe.displayMonthId}`, day: oe, modifiers: ne, className: Xl.join(" "), style: ql, role: "gridcell", "aria-selected": ne.selected || void 0, "aria-label": Kl, "data-day": oe.isoDate, "data-month": oe.outside ? oe.dateMonthId : void 0, "data-selected": ne.selected || void 0, "data-disabled": ne.disabled || void 0, "data-hidden": ne.hidden || void 0, "data-outside": oe.outside || void 0, "data-focused": ne.focused || void 0, "data-today": ne.today || void 0 }, !ne.hidden && Do ? T.createElement(r.DayButton, { className: c[F.DayButton], style: k == null ? void 0 : k[F.DayButton], type: "button", day: oe, modifiers: ne, disabled: !ne.focused && ne.disabled || void 0, "aria-disabled": ne.focused && ne.disabled || void 0, tabIndex: ae(oe) ? 0 : -1, "aria-label": J(ke, ne, s.options, s), onClick: Wl(oe, ne), onBlur: zl(oe, ne), onFocus: Fl(oe, ne), onKeyDown: Bl(oe, ne), onMouseEnter: Ll(oe, ne), onMouseLeave: $l(oe, ne) }, N(ke, s.options, s)) : !ne.hidden && N(oe.date, s.options, s));
              })
            )))
          )
        ))
      ),
      t.footer && T.createElement(r.Footer, { className: c[F.Footer], style: k == null ? void 0 : k[F.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function vo({ className: e, classNames: t, ...n }) {
  return /* @__PURE__ */ d(
    yy,
    {
      locale: Xg,
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
vo.displayName = "Calendar";
function vy({
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
  const l = u.useId();
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ d("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(Xn, { children: [
      /* @__PURE__ */ d(Kn, { asChild: !0, children: /* @__PURE__ */ E(
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
            /* @__PURE__ */ d(Va, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ d("span", { className: "truncate", children: e ? Ze(e, c) : n })
          ]
        }
      ) }),
      /* @__PURE__ */ d(ln, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ d(
        vo,
        {
          mode: "single",
          selected: e,
          onSelect: t,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ d("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
vy.displayName = "DatePicker";
function wy({
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
  const f = u.useId(), m = u.useMemo(() => e != null && e.from ? e.to ? `${Ze(e.from, c)} — ${Ze(e.to, c)}` : Ze(e.from, c) : null, [e, c]);
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ d("label", { htmlFor: f, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(Xn, { children: [
      /* @__PURE__ */ d(Kn, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: f,
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
            /* @__PURE__ */ d(Va, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ d("span", { className: "truncate", children: m ?? n })
          ]
        }
      ) }),
      /* @__PURE__ */ d(ln, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ d(
        vo,
        {
          mode: "range",
          selected: e,
          onSelect: t,
          numberOfMonths: l,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ d("p", { className: "text-xs text-red-600", children: o }),
    a && !o && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: a })
  ] });
}
wy.displayName = "DateRangePicker";
// @__NO_SIDE_EFFECTS__
function xy(e) {
  const t = /* @__PURE__ */ ky(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), c = i.find(Cy);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...s, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ky(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = My(o), i = Ny(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? At(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Sy = Symbol("radix.slottable");
function Cy(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sy;
}
function Ny(e, t) {
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
function My(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Jn = "Dialog", [Wi] = rt(Jn), [Ey, ze] = Wi(Jn), Fi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = u.useRef(null), c = u.useRef(null), [l, f] = Pt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Jn
  });
  return /* @__PURE__ */ d(
    Ey,
    {
      scope: t,
      triggerRef: i,
      contentRef: c,
      contentId: et(),
      titleId: et(),
      descriptionId: et(),
      open: l,
      onOpenChange: f,
      onOpenToggle: u.useCallback(() => f((m) => !m), [f]),
      modal: s,
      children: n
    }
  );
};
Fi.displayName = Jn;
var zi = "DialogTrigger", Bi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ze(zi, n), a = re(t, o.triggerRef);
    return /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": ko(o.open),
        ...r,
        ref: a,
        onClick: Y(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Bi.displayName = zi;
var wo = "DialogPortal", [Py, Li] = Wi(wo, {
  forceMount: void 0
}), $i = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = ze(wo, t);
  return /* @__PURE__ */ d(Py, { scope: t, forceMount: n, children: u.Children.map(r, (s) => /* @__PURE__ */ d(Fe, { present: n || a.open, children: /* @__PURE__ */ d(jn, { asChild: !0, container: o, children: s }) })) });
};
$i.displayName = wo;
var Rn = "DialogOverlay", Yi = u.forwardRef(
  (e, t) => {
    const n = Li(Rn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ze(Rn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ d(Fe, { present: r || a.open, children: /* @__PURE__ */ d(Oy, { ...o, ref: t }) }) : null;
  }
);
Yi.displayName = Rn;
var Dy = /* @__PURE__ */ xy("DialogOverlay.RemoveScroll"), Oy = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ze(Rn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(Un, { as: Dy, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d(
        X.div,
        {
          "data-state": ko(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Dt = "DialogContent", Hi = u.forwardRef(
  (e, t) => {
    const n = Li(Dt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = ze(Dt, e.__scopeDialog);
    return /* @__PURE__ */ d(Fe, { present: r || a.open, children: a.modal ? /* @__PURE__ */ d(Ty, { ...o, ref: t }) : /* @__PURE__ */ d(Ry, { ...o, ref: t }) });
  }
);
Hi.displayName = Dt;
var Ty = u.forwardRef(
  (e, t) => {
    const n = ze(Dt, e.__scopeDialog), r = u.useRef(null), o = re(t, n.contentRef, r);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return io(a);
    }, []), /* @__PURE__ */ d(
      Vi,
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
), Ry = u.forwardRef(
  (e, t) => {
    const n = ze(Dt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d(
      Vi,
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
), Vi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = ze(Dt, n), c = u.useRef(null), l = re(t, c);
    return Zr(), /* @__PURE__ */ E(Ge, { children: [
      /* @__PURE__ */ d(
        Bn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ d(
            zn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": ko(i.open),
              ...s,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ E(Ge, { children: [
        /* @__PURE__ */ d(Ay, { titleId: i.titleId }),
        /* @__PURE__ */ d(Iy, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), xo = "DialogTitle", ji = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ze(xo, n);
    return /* @__PURE__ */ d(X.h2, { id: o.titleId, ...r, ref: t });
  }
);
ji.displayName = xo;
var Gi = "DialogDescription", Ui = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ze(Gi, n);
    return /* @__PURE__ */ d(X.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Ui.displayName = Gi;
var qi = "DialogClose", Xi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ze(qi, n);
    return /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Y(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Xi.displayName = qi;
function ko(e) {
  return e ? "open" : "closed";
}
var Ki = "DialogTitleWarning", [bw, Zi] = Gu(Ki, {
  contentName: Dt,
  titleName: xo,
  docsSlug: "dialog"
}), Ay = ({ titleId: e }) => {
  const t = Zi(Ki), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, _y = "DialogDescriptionWarning", Iy = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zi(_y).contentName}}.`;
  return u.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Wy = Fi, Fy = Bi, zy = $i, Qi = Yi, Ji = Hi, ec = ji, tc = Ui, nc = Xi;
const yw = Wy, vw = Fy, By = zy, ww = nc, rc = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Qi,
  {
    ref: n,
    className: P(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
rc.displayName = Qi.displayName;
const Ly = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(By, { children: [
  /* @__PURE__ */ d(rc, {}),
  /* @__PURE__ */ E(
    Ji,
    {
      ref: r,
      className: P(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ E(nc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ d(Fn, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Ly.displayName = Ji.displayName;
const $y = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "div",
  {
    className: P(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
$y.displayName = "DialogHeader";
const Yy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ d(
  "div",
  {
    className: P(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Yy.displayName = "DialogFooter";
const Hy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  ec,
  {
    ref: n,
    className: P(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Hy.displayName = ec.displayName;
const Vy = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  tc,
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
Vy.displayName = tc.displayName;
function xw({
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
        e && /* @__PURE__ */ d("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10", children: /* @__PURE__ */ d(e, { className: "h-6 w-6 text-databeez-primary" }) }),
        /* @__PURE__ */ E("div", { className: "space-y-1", children: [
          /* @__PURE__ */ d("p", { className: "font-semibold text-text-base", children: t }),
          n && /* @__PURE__ */ d("p", { className: "text-sm text-text-muted max-w-sm", children: n })
        ] }),
        r && /* @__PURE__ */ d("div", { children: r })
      ]
    }
  );
}
const jy = [
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
].join(" "), Gy = u.forwardRef(
  ({ children: e, className: t }, n) => /* @__PURE__ */ d("div", { ref: n, className: P(jy, t), children: e })
);
Gy.displayName = "MarkdownContent";
function kw({
  content: e,
  role: t,
  onRegenerate: n,
  onFeedback: r,
  showActions: o,
  children: a,
  className: s
}) {
  const i = t === "user", [c, l] = u.useState(null), f = (m) => {
    const h = c === m ? null : m;
    l(h), r == null || r(h);
  };
  return /* @__PURE__ */ d(
    "div",
    {
      className: P(
        "flex flex-col gap-1",
        i ? "items-end" : "items-start",
        s
      ),
      children: /* @__PURE__ */ E("div", { className: "flex flex-col max-w-[80%]", children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: P(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              i ? "bg-databeez-primary text-white rounded-tr-sm" : "bg-surface border border-border text-text-base rounded-tl-sm"
            ),
            children: i ? /* @__PURE__ */ d("p", { className: "whitespace-pre-wrap", children: e }) : a ?? /* @__PURE__ */ d("p", { className: "whitespace-pre-wrap", children: e })
          }
        ),
        !i && o && /* @__PURE__ */ E("div", { className: "flex items-center gap-1 self-end mt-1", children: [
          /* @__PURE__ */ d(Uh, { text: e }),
          n && /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              onClick: n,
              "aria-label": "Rigenera risposta",
              className: "inline-flex items-center text-text-muted hover:text-text-base transition-colors",
              children: /* @__PURE__ */ d(kd, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              onClick: () => f("up"),
              "aria-label": "Risposta utile",
              className: P(
                "inline-flex items-center transition-colors",
                c === "up" ? "text-green-600" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ d(Pd, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              onClick: () => f("down"),
              "aria-label": "Risposta non utile",
              className: P(
                "inline-flex items-center transition-colors",
                c === "down" ? "text-red-500" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ d(Ed, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
}
function Sw({
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
  return s ? /* @__PURE__ */ d(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-6",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        i
      ),
      ...c,
      children: /* @__PURE__ */ E("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            style: { backgroundColor: n },
            children: /* @__PURE__ */ d(e, { className: "h-6 w-6", style: { color: t } })
          }
        ),
        /* @__PURE__ */ E("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ d("h3", { className: "text-base font-semibold text-text-base", children: r }),
          o && /* @__PURE__ */ d("p", { className: "mt-1 text-sm text-text-muted", children: o }),
          a && /* @__PURE__ */ d("div", { className: "mt-3", children: a })
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
        /* @__PURE__ */ d(
          "div",
          {
            className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
            style: { backgroundColor: n },
            children: /* @__PURE__ */ d(e, { className: "h-8 w-8", style: { color: t } })
          }
        ),
        /* @__PURE__ */ d("h3", { className: "text-lg font-semibold text-text-base mb-3", children: r }),
        o && /* @__PURE__ */ d("p", { className: "text-text-muted text-sm leading-relaxed", children: o }),
        a && /* @__PURE__ */ d("div", { className: "mt-5", children: a })
      ]
    }
  );
}
const Ct = 8, oc = 32, ac = 140;
function Uy(e, t, n) {
  const r = u.useCallback((c) => typeof window > "u" ? c : {
    x: Math.min(
      Math.max(c.x, Ct),
      Math.max(Ct, window.innerWidth - Ct - ac)
    ),
    y: Math.min(
      Math.max(c.y, Ct),
      Math.max(Ct, window.innerHeight - oc - Ct)
    )
  }, []), [o, a] = u.useState(() => {
    if (typeof window > "u") return { x: 100, y: 100 };
    const c = e === "right" ? window.innerWidth - t : t;
    return r({ x: c, y: window.innerHeight - n });
  }), s = u.useRef(o);
  s.current = o, u.useEffect(() => {
    const c = () => a((l) => r(l));
    return window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [r]);
  function i(c) {
    if (c.button !== 0) return;
    c.preventDefault(), c.stopPropagation();
    const l = c.clientX - s.current.x, f = c.clientY - s.current.y, m = (p) => a(r({ x: p.clientX - l, y: p.clientY - f })), h = () => {
      window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", h);
    };
    window.addEventListener("mousemove", m), window.addEventListener("mouseup", h);
  }
  return { pos: o, startDrag: i };
}
function qy(e) {
  return typeof window > "u" ? 400 : Math.max(120, window.innerHeight - e - oc - Ct * 2);
}
function Cw({
  title: e,
  children: t,
  anchor: n = "right",
  offsetX: r = 240,
  offsetY: o = 480,
  collapsible: a = !0,
  collapsed: s,
  defaultCollapsed: i = !1,
  onCollapsedChange: c,
  className: l
}) {
  const [f, m] = u.useState(i), h = s !== void 0, p = h ? !!s : f;
  function y() {
    const x = !p;
    h || m(x), c == null || c(x);
  }
  const { pos: g, startDrag: b } = Uy(n, r, o);
  return /* @__PURE__ */ E(
    "div",
    {
      className: P(
        "fixed z-50 overflow-hidden rounded-md border border-border bg-surface shadow-lg",
        l
      ),
      style: { minWidth: ac, left: g.x, top: g.y },
      onMouseDown: (x) => x.stopPropagation(),
      children: [
        /* @__PURE__ */ E(
          "div",
          {
            onMouseDown: b,
            className: P(
              "flex h-8 cursor-grab items-center gap-1.5 px-2.5 text-text-base",
              !p && "border-b border-border"
            ),
            children: [
              /* @__PURE__ */ d(ud, { className: "h-3 w-3 shrink-0 text-text-muted" }),
              /* @__PURE__ */ d("span", { className: "flex-1 truncate text-[10px] font-semibold uppercase tracking-wide text-text-muted", children: e }),
              a && /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  onClick: (x) => {
                    x.stopPropagation(), y();
                  },
                  "aria-label": p ? "Espandi pannello" : "Comprimi pannello",
                  className: "flex shrink-0 items-center justify-center leading-none text-text-base",
                  children: p ? /* @__PURE__ */ d(an, { className: "h-3 w-3" }) : /* @__PURE__ */ d(ja, { className: "h-3 w-3" })
                }
              )
            ]
          }
        ),
        !p && /* @__PURE__ */ d(
          "div",
          {
            className: "flex flex-col gap-1.5 overflow-y-auto p-2.5",
            style: { maxHeight: qy(g.y) },
            children: t
          }
        )
      ]
    }
  );
}
const Xy = Ba(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...a }, s) => {
    const i = Zl(), c = o || i;
    return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ d("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ d(
        "input",
        {
          id: c,
          className: Ur(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            n && "border-red-300 focus:border-red-500 focus:ring-red-500",
            e
          ),
          ref: s,
          ...a
        }
      ),
      n && /* @__PURE__ */ d("p", { className: "text-sm text-red-600", children: n }),
      r && !n && /* @__PURE__ */ d("p", { className: "text-sm text-text-muted", children: r })
    ] });
  }
);
Xy.displayName = "Input";
const Ky = u.forwardRef(
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
    const l = u.useId(), f = s ?? l;
    return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ d(
        "label",
        {
          htmlFor: f,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ E("div", { className: "relative", children: [
        /* @__PURE__ */ d(e, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
        /* @__PURE__ */ d(
          "input",
          {
            ref: c,
            id: f,
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
        o && /* @__PURE__ */ d("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: o })
      ] }),
      n && /* @__PURE__ */ d("p", { className: "text-xs text-red-600", children: n }),
      r && !n && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: r })
    ] });
  }
);
Ky.displayName = "InputWithIcon";
const Zy = {
  GET: "bg-green-100 text-green-800 border-green-200",
  POST: "bg-blue-100 text-blue-800 border-blue-200",
  PUT: "bg-amber-100 text-amber-800 border-amber-200",
  PATCH: "bg-purple-100 text-purple-800 border-purple-200",
  DELETE: "bg-red-100 text-red-800 border-red-200",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function Nw({ method: e, className: t, ...n }) {
  const r = e.toUpperCase(), o = Zy[r] ?? "bg-subtle text-text-muted border-border";
  return /* @__PURE__ */ d(
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
function Mw({
  title: e,
  description: t,
  actions: n,
  breadcrumb: r,
  className: o,
  ...a
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: P("bg-surface border-b border-border", o),
      ...a,
      children: /* @__PURE__ */ E("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        r && /* @__PURE__ */ d("div", { className: "mb-3", children: r }),
        /* @__PURE__ */ E("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ E("div", { className: "min-w-0", children: [
            /* @__PURE__ */ d("h1", { className: "text-3xl font-bold text-text-base truncate", children: e }),
            t && /* @__PURE__ */ d("p", { className: "mt-1 text-text-muted", children: t })
          ] }),
          n && /* @__PURE__ */ d("div", { className: "flex items-center gap-3 shrink-0", children: n })
        ] })
      ] })
    }
  );
}
var Qy = u.createContext(void 0);
function er(e) {
  const t = u.useContext(Qy);
  return e || t || "ltr";
}
function Br(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Jy(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var So = "ScrollArea", [sc] = rt(So), [ev, Oe] = sc(So), ic = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [i, c] = u.useState(null), [l, f] = u.useState(null), [m, h] = u.useState(null), [p, y] = u.useState(null), [g, b] = u.useState(null), [x, v] = u.useState(0), [w, S] = u.useState(0), [C, k] = u.useState(!1), [M, N] = u.useState(!1), D = re(t, (W) => c(W)), R = er(o);
    return /* @__PURE__ */ d(
      ev,
      {
        scope: n,
        type: r,
        dir: R,
        scrollHideDelay: a,
        scrollArea: i,
        viewport: l,
        onViewportChange: f,
        content: m,
        onContentChange: h,
        scrollbarX: p,
        onScrollbarXChange: y,
        scrollbarXEnabled: C,
        onScrollbarXEnabledChange: k,
        scrollbarY: g,
        onScrollbarYChange: b,
        scrollbarYEnabled: M,
        onScrollbarYEnabledChange: N,
        onCornerWidthChange: v,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ d(
          X.div,
          {
            dir: R,
            ...s,
            ref: D,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": x + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
ic.displayName = So;
var cc = "ScrollAreaViewport", lc = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = Oe(cc, n), i = u.useRef(null), c = re(t, i, s.onViewportChange);
    return /* @__PURE__ */ E(Ge, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ d(
        X.div,
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
          children: /* @__PURE__ */ d("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
lc.displayName = cc;
var Xe = "ScrollAreaScrollbar", Co = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Oe(Xe, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
    return u.useEffect(() => (i ? a(!0) : s(!0), () => {
      i ? a(!1) : s(!1);
    }), [i, a, s]), o.type === "hover" ? /* @__PURE__ */ d(tv, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ d(nv, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ d(dc, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ d(No, { ...r, ref: t }) : null;
  }
);
Co.displayName = Xe;
var tv = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Oe(Xe, e.__scopeScrollArea), [a, s] = u.useState(!1);
  return u.useEffect(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), s(!0);
      }, f = () => {
        c = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", f), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ d(Fe, { present: n || a, children: /* @__PURE__ */ d(
    dc,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), nv = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Oe(Xe, e.__scopeScrollArea), a = e.orientation === "horizontal", s = nr(() => c("SCROLL_END"), 100), [i, c] = Jy("hidden", {
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
  return u.useEffect(() => {
    if (i === "idle") {
      const l = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(l);
    }
  }, [i, o.scrollHideDelay, c]), u.useEffect(() => {
    const l = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (l) {
      let m = l[f];
      const h = () => {
        const p = l[f];
        m !== p && (c("SCROLL"), s()), m = p;
      };
      return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
    }
  }, [o.viewport, a, c, s]), /* @__PURE__ */ d(Fe, { present: n || i !== "hidden", children: /* @__PURE__ */ d(
    No,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: Y(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: Y(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), dc = u.forwardRef((e, t) => {
  const n = Oe(Xe, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = u.useState(!1), i = e.orientation === "horizontal", c = nr(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? l : f);
    }
  }, 10);
  return Ut(n.viewport, c), Ut(n.content, c), /* @__PURE__ */ d(Fe, { present: r || a, children: /* @__PURE__ */ d(
    No,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), No = u.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Oe(Xe, e.__scopeScrollArea), a = u.useRef(null), s = u.useRef(0), [i, c] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = pc(i.viewport, i.content), f = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => a.current = h,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (h) => s.current = h
  };
  function m(h, p) {
    return cv(h, s.current, i, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ d(
    rv,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollLeft, p = Wa(h, i, o.dir);
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
  ) : n === "vertical" ? /* @__PURE__ */ d(
    ov,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollTop, p = Wa(h, i);
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
}), rv = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Oe(Xe, e.__scopeScrollArea), [s, i] = u.useState(), c = u.useRef(null), l = re(t, c, a.onScrollbarXChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ d(
    fc,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": tr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, m) => {
        if (a.viewport) {
          const h = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(h), bc(h, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && s && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: _n(s.paddingLeft),
            paddingEnd: _n(s.paddingRight)
          }
        });
      }
    }
  );
}), ov = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Oe(Xe, e.__scopeScrollArea), [s, i] = u.useState(), c = u.useRef(null), l = re(t, c, a.onScrollbarYChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ d(
    fc,
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
        "--radix-scroll-area-thumb-height": tr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, m) => {
        if (a.viewport) {
          const h = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(h), bc(h, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && a.viewport && s && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: _n(s.paddingTop),
            paddingEnd: _n(s.paddingBottom)
          }
        });
      }
    }
  );
}), [av, uc] = sc(Xe), fc = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: f,
    onResize: m,
    ...h
  } = e, p = Oe(Xe, n), [y, g] = u.useState(null), b = re(t, (D) => g(D)), x = u.useRef(null), v = u.useRef(""), w = p.viewport, S = r.content - r.viewport, C = we(f), k = we(c), M = nr(m, 10);
  function N(D) {
    if (x.current) {
      const R = D.clientX - x.current.left, W = D.clientY - x.current.top;
      l({ x: R, y: W });
    }
  }
  return u.useEffect(() => {
    const D = (R) => {
      const W = R.target;
      (y == null ? void 0 : y.contains(W)) && C(R, S);
    };
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [w, y, S, C]), u.useEffect(k, [r, k]), Ut(y, M), Ut(p.content, M), /* @__PURE__ */ d(
    av,
    {
      scope: n,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: we(a),
      onThumbPointerUp: we(s),
      onThumbPositionChange: k,
      onThumbPointerDown: we(i),
      children: /* @__PURE__ */ d(
        X.div,
        {
          ...h,
          ref: b,
          style: { position: "absolute", ...h.style },
          onPointerDown: Y(e.onPointerDown, (D) => {
            D.button === 0 && (D.target.setPointerCapture(D.pointerId), x.current = y.getBoundingClientRect(), v.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), N(D));
          }),
          onPointerMove: Y(e.onPointerMove, N),
          onPointerUp: Y(e.onPointerUp, (D) => {
            const R = D.target;
            R.hasPointerCapture(D.pointerId) && R.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = v.current, p.viewport && (p.viewport.style.scrollBehavior = ""), x.current = null;
          })
        }
      )
    }
  );
}), An = "ScrollAreaThumb", mc = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = uc(An, e.__scopeScrollArea);
    return /* @__PURE__ */ d(Fe, { present: n || o.hasThumb, children: /* @__PURE__ */ d(sv, { ref: t, ...r }) });
  }
), sv = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Oe(An, n), s = uc(An, n), { onThumbPositionChange: i } = s, c = re(
      t,
      (m) => s.onThumbChange(m)
    ), l = u.useRef(void 0), f = nr(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const m = a.viewport;
      if (m) {
        const h = () => {
          if (f(), !l.current) {
            const p = lv(m, i);
            l.current = p, i();
          }
        };
        return i(), m.addEventListener("scroll", h), () => m.removeEventListener("scroll", h);
      }
    }, [a.viewport, f, i]), /* @__PURE__ */ d(
      X.div,
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
          const p = m.target.getBoundingClientRect(), y = m.clientX - p.left, g = m.clientY - p.top;
          s.onThumbPointerDown({ x: y, y: g });
        }),
        onPointerUp: Y(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
mc.displayName = An;
var Mo = "ScrollAreaCorner", hc = u.forwardRef(
  (e, t) => {
    const n = Oe(Mo, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ d(iv, { ...e, ref: t }) : null;
  }
);
hc.displayName = Mo;
var iv = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Oe(Mo, n), [a, s] = u.useState(0), [i, c] = u.useState(0), l = !!(a && i);
  return Ut(o.scrollbarX, () => {
    var m;
    const f = ((m = o.scrollbarX) == null ? void 0 : m.offsetHeight) || 0;
    o.onCornerHeightChange(f), c(f);
  }), Ut(o.scrollbarY, () => {
    var m;
    const f = ((m = o.scrollbarY) == null ? void 0 : m.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), l ? /* @__PURE__ */ d(
    X.div,
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
function _n(e) {
  return e ? parseInt(e, 10) : 0;
}
function pc(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function tr(e) {
  const t = pc(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function cv(e, t, n, r = "ltr") {
  const o = tr(n), a = o / 2, s = t || a, i = o - s, c = n.scrollbar.paddingStart + s, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, f = n.content - n.viewport, m = r === "ltr" ? [0, f] : [f * -1, 0];
  return gc([c, l], m)(e);
}
function Wa(e, t, n = "ltr") {
  const r = tr(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, c = n === "ltr" ? [0, s] : [s * -1, 0], l = Br(e, c);
  return gc([0, s], [0, i])(l);
}
function gc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function bc(e, t) {
  return e > 0 && e < t;
}
var lv = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function nr(e, t) {
  const n = we(e), r = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
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
var yc = ic, dv = lc, uv = hc;
const fv = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  yc,
  {
    ref: r,
    className: P("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ d(dv, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ d(vc, {}),
      /* @__PURE__ */ d(uv, {})
    ]
  }
));
fv.displayName = yc.displayName;
const vc = u.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ d(
  Co,
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
    children: /* @__PURE__ */ d(mc, { className: "relative flex-1 rounded-full bg-border" })
  }
));
vc.displayName = Co.displayName;
const mv = u.forwardRef(
  ({ value: e, onChange: t, onClear: n, className: r, placeholder: o = "Cerca...", ...a }, s) => {
    const i = () => {
      t(""), n == null || n();
    };
    return /* @__PURE__ */ E("div", { className: P("relative", r), children: [
      /* @__PURE__ */ d(Ua, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ d(
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
      e && /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          onClick: i,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ d(Fn, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
mv.displayName = "SearchInput";
// @__NO_SIDE_EFFECTS__
function Fa(e) {
  const t = /* @__PURE__ */ hv(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), c = i.find(gv);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...s, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function hv(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = yv(o), i = bv(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? At(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var pv = Symbol("radix.slottable");
function gv(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === pv;
}
function bv(e, t) {
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
function yv(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function wc(e) {
  const t = e + "CollectionProvider", [n, r] = rt(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (g) => {
    const { scope: b, children: x } = g, v = T.useRef(null), w = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(o, { scope: b, itemMap: w, collectionRef: v, children: x });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Fa(i), l = T.forwardRef(
    (g, b) => {
      const { scope: x, children: v } = g, w = a(i, x), S = re(b, w.collectionRef);
      return /* @__PURE__ */ d(c, { ref: S, children: v });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", h = /* @__PURE__ */ Fa(f), p = T.forwardRef(
    (g, b) => {
      const { scope: x, children: v, ...w } = g, S = T.useRef(null), C = re(b, S), k = a(f, x);
      return T.useEffect(() => (k.itemMap.set(S, { ref: S, ...w }), () => void k.itemMap.delete(S))), /* @__PURE__ */ d(h, { [m]: "", ref: C, children: v });
    }
  );
  p.displayName = f;
  function y(g) {
    const b = a(e + "CollectionConsumer", g);
    return T.useCallback(() => {
      const v = b.collectionRef.current;
      if (!v) return [];
      const w = Array.from(v.querySelectorAll(`[${m}]`));
      return Array.from(b.itemMap.values()).sort(
        (k, M) => w.indexOf(k.ref.current) - w.indexOf(M.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: s, Slot: l, ItemSlot: p },
    y,
    r
  ];
}
// @__NO_SIDE_EFFECTS__
function vv(e) {
  const t = /* @__PURE__ */ wv(e), n = u.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = u.Children.toArray(a), c = i.find(kv);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...s, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function wv(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (u.isValidElement(o)) {
      const s = Cv(o), i = Sv(a, o.props);
      return o.type !== u.Fragment && (i.ref = r ? At(r, s) : s), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xv = Symbol("radix.slottable");
function kv(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xv;
}
function Sv(e, t) {
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
function Cv(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function xc(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var kc = Object.freeze({
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
}), Nv = "VisuallyHidden", Mv = u.forwardRef(
  (e, t) => /* @__PURE__ */ d(
    X.span,
    {
      ...e,
      ref: t,
      style: { ...kc, ...e.style }
    }
  )
);
Mv.displayName = Nv;
var Ev = [" ", "Enter", "ArrowUp", "ArrowDown"], Pv = [" ", "Enter"], Ot = "Select", [rr, or, Dv] = wc(Ot), [Kt] = rt(Ot, [
  Dv,
  Vn
]), ar = Vn(), [Ov, bt] = Kt(Ot), [Tv, Rv] = Kt(Ot), Sc = (e) => {
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
    name: f,
    autoComplete: m,
    disabled: h,
    required: p,
    form: y
  } = e, g = ar(t), [b, x] = u.useState(null), [v, w] = u.useState(null), [S, C] = u.useState(!1), k = er(l), [M, N] = Pt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Ot
  }), [D, R] = Pt({
    prop: s,
    defaultProp: i,
    onChange: c,
    caller: Ot
  }), W = u.useRef(null), H = b ? y || !!b.closest("form") : !0, [V, L] = u.useState(/* @__PURE__ */ new Set()), K = Array.from(V).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ d(Ws, { ...g, children: /* @__PURE__ */ E(
    Ov,
    {
      required: p,
      scope: t,
      trigger: b,
      onTriggerChange: x,
      valueNode: v,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: et(),
      value: D,
      onValueChange: R,
      open: M,
      onOpenChange: N,
      dir: k,
      triggerPointerDownPosRef: W,
      disabled: h,
      children: [
        /* @__PURE__ */ d(rr.Provider, { scope: t, children: /* @__PURE__ */ d(
          Tv,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((I) => {
              L((j) => new Set(j).add(I));
            }, []),
            onNativeOptionRemove: u.useCallback((I) => {
              L((j) => {
                const B = new Set(j);
                return B.delete(I), B;
              });
            }, []),
            children: n
          }
        ) }),
        H ? /* @__PURE__ */ E(
          qc,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: D,
            onChange: (I) => R(I.target.value),
            disabled: h,
            form: y,
            children: [
              D === void 0 ? /* @__PURE__ */ d("option", { value: "" }) : null,
              Array.from(V)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
Sc.displayName = Ot;
var Cc = "SelectTrigger", Nc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = ar(n), s = bt(Cc, n), i = s.disabled || r, c = re(t, s.onTriggerChange), l = or(n), f = u.useRef("touch"), [m, h, p] = Kc((g) => {
      const b = l().filter((w) => !w.disabled), x = b.find((w) => w.value === s.value), v = Zc(b, g, x);
      v !== void 0 && s.onValueChange(v.value);
    }), y = (g) => {
      i || (s.onOpenChange(!0), p()), g && (s.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ d(so, { asChild: !0, ...a, children: /* @__PURE__ */ d(
      X.button,
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
        "data-placeholder": Xc(s.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: Y(o.onClick, (g) => {
          g.currentTarget.focus(), f.current !== "mouse" && y(g);
        }),
        onPointerDown: Y(o.onPointerDown, (g) => {
          f.current = g.pointerType;
          const b = g.target;
          b.hasPointerCapture(g.pointerId) && b.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (y(g), g.preventDefault());
        }),
        onKeyDown: Y(o.onKeyDown, (g) => {
          const b = m.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && h(g.key), !(b && g.key === " ") && Ev.includes(g.key) && (y(), g.preventDefault());
        })
      }
    ) });
  }
);
Nc.displayName = Cc;
var Mc = "SelectValue", Ec = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, c = bt(Mc, n), { onValueNodeHasChildrenChange: l } = c, f = a !== void 0, m = re(t, c.onValueNodeChange);
    return ye(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ d(
      X.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: Xc(c.value) ? /* @__PURE__ */ d(Ge, { children: s }) : a
      }
    );
  }
);
Ec.displayName = Mc;
var Av = "SelectIcon", Pc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Pc.displayName = Av;
var _v = "SelectPortal", Dc = (e) => /* @__PURE__ */ d(jn, { asChild: !0, ...e });
Dc.displayName = _v;
var Tt = "SelectContent", Oc = u.forwardRef(
  (e, t) => {
    const n = bt(Tt, e.__scopeSelect), [r, o] = u.useState();
    if (ye(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Wn.createPortal(
        /* @__PURE__ */ d(Tc, { scope: e.__scopeSelect, children: /* @__PURE__ */ d(rr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ d(Rc, { ...e, ref: t });
  }
);
Oc.displayName = Tt;
var Re = 10, [Tc, yt] = Kt(Tt), Iv = "SelectContentImpl", Wv = /* @__PURE__ */ vv("SelectContent.RemoveScroll"), Rc = u.forwardRef(
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
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: y,
      hideWhenDetached: g,
      avoidCollisions: b,
      //
      ...x
    } = e, v = bt(Tt, n), [w, S] = u.useState(null), [C, k] = u.useState(null), M = re(t, (z) => S(z)), [N, D] = u.useState(null), [R, W] = u.useState(
      null
    ), H = or(n), [V, L] = u.useState(!1), K = u.useRef(!1);
    u.useEffect(() => {
      if (w) return io(w);
    }, [w]), Zr();
    const I = u.useCallback(
      (z) => {
        const [ae, ...Q] = H().map((ee) => ee.ref.current), [te] = Q.slice(-1), J = document.activeElement;
        for (const ee of z)
          if (ee === J || (ee == null || ee.scrollIntoView({ block: "nearest" }), ee === ae && C && (C.scrollTop = 0), ee === te && C && (C.scrollTop = C.scrollHeight), ee == null || ee.focus(), document.activeElement !== J)) return;
      },
      [H, C]
    ), j = u.useCallback(
      () => I([N, w]),
      [I, N, w]
    );
    u.useEffect(() => {
      V && j();
    }, [V, j]);
    const { onOpenChange: B, triggerPointerDownPosRef: G } = v;
    u.useEffect(() => {
      if (w) {
        let z = { x: 0, y: 0 };
        const ae = (te) => {
          var J, ee;
          z = {
            x: Math.abs(Math.round(te.pageX) - (((J = G.current) == null ? void 0 : J.x) ?? 0)),
            y: Math.abs(Math.round(te.pageY) - (((ee = G.current) == null ? void 0 : ee.y) ?? 0))
          };
        }, Q = (te) => {
          z.x <= 10 && z.y <= 10 ? te.preventDefault() : w.contains(te.target) || B(!1), document.removeEventListener("pointermove", ae), G.current = null;
        };
        return G.current !== null && (document.addEventListener("pointermove", ae), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ae), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [w, B, G]), u.useEffect(() => {
      const z = () => B(!1);
      return window.addEventListener("blur", z), window.addEventListener("resize", z), () => {
        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
      };
    }, [B]);
    const [O, fe] = Kc((z) => {
      const ae = H().filter((J) => !J.disabled), Q = ae.find((J) => J.ref.current === document.activeElement), te = Zc(ae, z, Q);
      te && setTimeout(() => te.ref.current.focus());
    }), Pe = u.useCallback(
      (z, ae, Q) => {
        const te = !K.current && !Q;
        (v.value !== void 0 && v.value === ae || te) && (D(z), te && (K.current = !0));
      },
      [v.value]
    ), xe = u.useCallback(() => w == null ? void 0 : w.focus(), [w]), ge = u.useCallback(
      (z, ae, Q) => {
        const te = !K.current && !Q;
        (v.value !== void 0 && v.value === ae || te) && W(z);
      },
      [v.value]
    ), le = r === "popper" ? Lr : Ac, de = le === Lr ? {
      side: i,
      sideOffset: c,
      align: l,
      alignOffset: f,
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: p,
      sticky: y,
      hideWhenDetached: g,
      avoidCollisions: b
    } : {};
    return /* @__PURE__ */ d(
      Tc,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: k,
        itemRefCallback: Pe,
        selectedItem: N,
        onItemLeave: xe,
        itemTextRefCallback: ge,
        focusSelectedItem: j,
        selectedItemText: R,
        position: r,
        isPositioned: V,
        searchRef: O,
        children: /* @__PURE__ */ d(Un, { as: Wv, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          Bn,
          {
            asChild: !0,
            trapped: v.open,
            onMountAutoFocus: (z) => {
              z.preventDefault();
            },
            onUnmountAutoFocus: Y(o, (z) => {
              var ae;
              (ae = v.trigger) == null || ae.focus({ preventScroll: !0 }), z.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              zn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (z) => z.preventDefault(),
                onDismiss: () => v.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  le,
                  {
                    role: "listbox",
                    id: v.contentId,
                    "data-state": v.open ? "open" : "closed",
                    dir: v.dir,
                    onContextMenu: (z) => z.preventDefault(),
                    ...x,
                    ...de,
                    onPlaced: () => L(!0),
                    ref: M,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: Y(x.onKeyDown, (z) => {
                      const ae = z.ctrlKey || z.altKey || z.metaKey;
                      if (z.key === "Tab" && z.preventDefault(), !ae && z.key.length === 1 && fe(z.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key)) {
                        let te = H().filter((J) => !J.disabled).map((J) => J.ref.current);
                        if (["ArrowUp", "End"].includes(z.key) && (te = te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(z.key)) {
                          const J = z.target, ee = te.indexOf(J);
                          te = te.slice(ee + 1);
                        }
                        setTimeout(() => I(te)), z.preventDefault();
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
Rc.displayName = Iv;
var Fv = "SelectItemAlignedPosition", Ac = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = bt(Tt, n), s = yt(Tt, n), [i, c] = u.useState(null), [l, f] = u.useState(null), m = re(t, (M) => f(M)), h = or(n), p = u.useRef(!1), y = u.useRef(!0), { viewport: g, selectedItem: b, selectedItemText: x, focusSelectedItem: v } = s, w = u.useCallback(() => {
    if (a.trigger && a.valueNode && i && l && g && b && x) {
      const M = a.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), D = a.valueNode.getBoundingClientRect(), R = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const J = R.left - N.left, ee = D.left - J, he = M.left - ee, be = M.width + he, at = Math.max(be, N.width), vt = window.innerWidth - Re, wt = Br(ee, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, vt - at)
        ]);
        i.style.minWidth = be + "px", i.style.left = wt + "px";
      } else {
        const J = N.right - R.right, ee = window.innerWidth - D.right - J, he = window.innerWidth - M.right - ee, be = M.width + he, at = Math.max(be, N.width), vt = window.innerWidth - Re, wt = Br(ee, [
          Re,
          Math.max(Re, vt - at)
        ]);
        i.style.minWidth = be + "px", i.style.right = wt + "px";
      }
      const W = h(), H = window.innerHeight - Re * 2, V = g.scrollHeight, L = window.getComputedStyle(l), K = parseInt(L.borderTopWidth, 10), I = parseInt(L.paddingTop, 10), j = parseInt(L.borderBottomWidth, 10), B = parseInt(L.paddingBottom, 10), G = K + I + V + B + j, O = Math.min(b.offsetHeight * 5, G), fe = window.getComputedStyle(g), Pe = parseInt(fe.paddingTop, 10), xe = parseInt(fe.paddingBottom, 10), ge = M.top + M.height / 2 - Re, le = H - ge, de = b.offsetHeight / 2, z = b.offsetTop + de, ae = K + I + z, Q = G - ae;
      if (ae <= ge) {
        const J = W.length > 0 && b === W[W.length - 1].ref.current;
        i.style.bottom = "0px";
        const ee = l.clientHeight - g.offsetTop - g.offsetHeight, he = Math.max(
          le,
          de + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (J ? xe : 0) + ee + j
        ), be = ae + he;
        i.style.height = be + "px";
      } else {
        const J = W.length > 0 && b === W[0].ref.current;
        i.style.top = "0px";
        const he = Math.max(
          ge,
          K + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (J ? Pe : 0) + de
        ) + Q;
        i.style.height = he + "px", g.scrollTop = ae - ge + g.offsetTop;
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
    x,
    a.dir,
    r
  ]);
  ye(() => w(), [w]);
  const [S, C] = u.useState();
  ye(() => {
    l && C(window.getComputedStyle(l).zIndex);
  }, [l]);
  const k = u.useCallback(
    (M) => {
      M && y.current === !0 && (w(), v == null || v(), y.current = !1);
    },
    [w, v]
  );
  return /* @__PURE__ */ d(
    Bv,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: p,
      onScrollButtonChange: k,
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ d(
            X.div,
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
Ac.displayName = Fv;
var zv = "SelectPopperPosition", Lr = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Re,
    ...a
  } = e, s = ar(n);
  return /* @__PURE__ */ d(
    Fs,
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
Lr.displayName = zv;
var [Bv, Eo] = Kt(Tt, {}), $r = "SelectViewport", _c = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = yt($r, n), s = Eo($r, n), i = re(t, a.onViewportChange), c = u.useRef(0);
    return /* @__PURE__ */ E(Ge, { children: [
      /* @__PURE__ */ d(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ d(rr.Slot, { scope: n, children: /* @__PURE__ */ d(
        X.div,
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
            const f = l.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: h } = s;
            if (h != null && h.current && m) {
              const p = Math.abs(c.current - f.scrollTop);
              if (p > 0) {
                const y = window.innerHeight - Re * 2, g = parseFloat(m.style.minHeight), b = parseFloat(m.style.height), x = Math.max(g, b);
                if (x < y) {
                  const v = x + p, w = Math.min(y, v), S = v - w;
                  m.style.height = w + "px", m.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, m.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
_c.displayName = $r;
var Ic = "SelectGroup", [Lv, $v] = Kt(Ic), Wc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = et();
    return /* @__PURE__ */ d(Lv, { scope: n, id: o, children: /* @__PURE__ */ d(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Wc.displayName = Ic;
var Fc = "SelectLabel", zc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = $v(Fc, n);
    return /* @__PURE__ */ d(X.div, { id: o.id, ...r, ref: t });
  }
);
zc.displayName = Fc;
var In = "SelectItem", [Yv, Bc] = Kt(In), Lc = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = bt(In, n), c = yt(In, n), l = i.value === r, [f, m] = u.useState(a ?? ""), [h, p] = u.useState(!1), y = re(
      t,
      (v) => {
        var w;
        return (w = c.itemRefCallback) == null ? void 0 : w.call(c, v, r, o);
      }
    ), g = et(), b = u.useRef("touch"), x = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d(
      Yv,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: l,
        onItemTextChange: u.useCallback((v) => {
          m((w) => w || ((v == null ? void 0 : v.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d(
          rr.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ d(
              X.div,
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
                ref: y,
                onFocus: Y(s.onFocus, () => p(!0)),
                onBlur: Y(s.onBlur, () => p(!1)),
                onClick: Y(s.onClick, () => {
                  b.current !== "mouse" && x();
                }),
                onPointerUp: Y(s.onPointerUp, () => {
                  b.current === "mouse" && x();
                }),
                onPointerDown: Y(s.onPointerDown, (v) => {
                  b.current = v.pointerType;
                }),
                onPointerMove: Y(s.onPointerMove, (v) => {
                  var w;
                  b.current = v.pointerType, o ? (w = c.onItemLeave) == null || w.call(c) : b.current === "mouse" && v.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: Y(s.onPointerLeave, (v) => {
                  var w;
                  v.currentTarget === document.activeElement && ((w = c.onItemLeave) == null || w.call(c));
                }),
                onKeyDown: Y(s.onKeyDown, (v) => {
                  var S;
                  ((S = c.searchRef) == null ? void 0 : S.current) !== "" && v.key === " " || (Pv.includes(v.key) && x(), v.key === " " && v.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Lc.displayName = In;
var Jt = "SelectItemText", $c = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = bt(Jt, n), i = yt(Jt, n), c = Bc(Jt, n), l = Rv(Jt, n), [f, m] = u.useState(null), h = re(
      t,
      (x) => m(x),
      c.onItemTextChange,
      (x) => {
        var v;
        return (v = i.itemTextRefCallback) == null ? void 0 : v.call(i, x, c.value, c.disabled);
      }
    ), p = f == null ? void 0 : f.textContent, y = u.useMemo(
      () => /* @__PURE__ */ d("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: b } = l;
    return ye(() => (g(y), () => b(y)), [g, b, y]), /* @__PURE__ */ E(Ge, { children: [
      /* @__PURE__ */ d(X.span, { id: c.textId, ...a, ref: h }),
      c.isSelected && s.valueNode && !s.valueNodeHasChildren ? Wn.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
$c.displayName = Jt;
var Yc = "SelectItemIndicator", Hc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Bc(Yc, n).isSelected ? /* @__PURE__ */ d(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Hc.displayName = Yc;
var Yr = "SelectScrollUpButton", Vc = u.forwardRef((e, t) => {
  const n = yt(Yr, e.__scopeSelect), r = Eo(Yr, e.__scopeSelect), [o, a] = u.useState(!1), s = re(t, r.onScrollButtonChange);
  return ye(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        a(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    Gc,
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
Vc.displayName = Yr;
var Hr = "SelectScrollDownButton", jc = u.forwardRef((e, t) => {
  const n = yt(Hr, e.__scopeSelect), r = Eo(Hr, e.__scopeSelect), [o, a] = u.useState(!1), s = re(t, r.onScrollButtonChange);
  return ye(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        a(f);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    Gc,
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
jc.displayName = Hr;
var Gc = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = yt("SelectScrollButton", n), s = u.useRef(null), i = or(n), c = u.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), ye(() => {
    var f;
    const l = i().find((m) => m.ref.current === document.activeElement);
    (f = l == null ? void 0 : l.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d(
    X.div,
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
}), Hv = "SelectSeparator", Uc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d(X.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Uc.displayName = Hv;
var Vr = "SelectArrow", Vv = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = ar(n), a = bt(Vr, n), s = yt(Vr, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ d(zs, { ...o, ...r, ref: t }) : null;
  }
);
Vv.displayName = Vr;
var jv = "SelectBubbleInput", qc = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), a = re(r, o), s = xc(t);
    return u.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (s !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(m);
      }
    }, [s, t]), /* @__PURE__ */ d(
      X.select,
      {
        ...n,
        style: { ...kc, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
qc.displayName = jv;
function Xc(e) {
  return e === "" || e === void 0;
}
function Kc(e) {
  const t = we(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(i);
    },
    [t]
  ), a = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Zc(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Gv(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((l) => l !== n));
  const c = s.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Gv(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Uv = Sc, Qc = Nc, qv = Ec, Xv = Pc, Kv = Dc, Jc = Oc, Zv = _c, Qv = Wc, el = zc, tl = Lc, Jv = $c, e1 = Hc, nl = Vc, rl = jc, ol = Uc;
const Ew = Uv, Pw = Qv, Dw = qv, t1 = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  Qc,
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
      /* @__PURE__ */ d(Xv, { asChild: !0, children: /* @__PURE__ */ d(an, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
t1.displayName = Qc.displayName;
const al = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  nl,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d(ja, { className: "h-4 w-4" })
  }
));
al.displayName = nl.displayName;
const sl = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  rl,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d(an, { className: "h-4 w-4" })
  }
));
sl.displayName = rl.displayName;
const n1 = u.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ d(Kv, { children: /* @__PURE__ */ E(
  Jc,
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
      /* @__PURE__ */ d(al, {}),
      /* @__PURE__ */ d(
        Zv,
        {
          className: P(
            "p-1 overflow-y-auto",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ d(sl, {})
    ]
  }
) }));
n1.displayName = Jc.displayName;
const r1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  el,
  {
    ref: n,
    className: P("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
r1.displayName = el.displayName;
const o1 = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  tl,
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
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(e1, { children: /* @__PURE__ */ d(on, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ d(Jv, { children: t })
    ]
  }
));
o1.displayName = tl.displayName;
const a1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  ol,
  {
    ref: n,
    className: P("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
a1.displayName = ol.displayName;
function Ow({
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
        /* @__PURE__ */ d(
          "button",
          {
            onClick: t,
            className: "absolute top-3 right-3 z-10 rounded-md p-1.5 text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
            "aria-label": "Chiudi pannello",
            children: /* @__PURE__ */ d(Fn, { className: "size-5" })
          }
        ),
        r && /* @__PURE__ */ d("div", { className: "px-4 pt-4 pb-2 pr-10", children: r }),
        /* @__PURE__ */ d("div", { className: P(r ? "" : "pt-4"), children: o })
      ]
    }
  ) : null;
}
function il({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: P("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function s1({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ d("div", { className: P("space-y-2", t), children: Array.from({ length: e }).map((n, r) => /* @__PURE__ */ d(
    il,
    {
      className: P("h-4", r === e - 1 ? "w-2/3" : "w-full")
    },
    r
  )) });
}
function Tw({ className: e }) {
  return /* @__PURE__ */ E("div", { className: P("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ d(il, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ d(s1, { lines: 3 })
  ] });
}
const i1 = ht(
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
function c1({ className: e, size: t, label: n = "Caricamento...", ...r }) {
  return /* @__PURE__ */ E(
    "div",
    {
      role: "status",
      "aria-label": n,
      className: P("inline-flex items-center justify-center", e),
      ...r,
      children: [
        /* @__PURE__ */ d("div", { className: i1({ size: t }) }),
        /* @__PURE__ */ d("span", { className: "sr-only", children: n })
      ]
    }
  );
}
function Rw({ label: e }) {
  return /* @__PURE__ */ E("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ d(c1, { size: "lg", label: e }),
    e && /* @__PURE__ */ d("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
const l1 = ht(
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
), d1 = ht("text-sm transition-colors", {
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
}), u1 = ht("w-8 h-px transition-colors", {
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
function f1(e) {
  return typeof e == "string" ? { label: e } : e;
}
function m1(e, t) {
  return e < t ? "completed" : e === t ? "active" : "upcoming";
}
const h1 = u.forwardRef(
  ({ className: e, steps: t, activeStep: n, completedIcon: r = "✓", ...o }, a) => /* @__PURE__ */ d(
    "div",
    {
      ref: a,
      className: P("flex items-center justify-center gap-2", e),
      role: "navigation",
      "aria-label": "Progresso",
      ...o,
      children: t.map((s, i) => {
        const c = f1(s), l = m1(i, n);
        return /* @__PURE__ */ E("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d(
            "div",
            {
              className: P(l1({ state: l })),
              "aria-current": l === "active" ? "step" : void 0,
              children: c.icon ? c.icon : l === "completed" ? r : i + 1
            }
          ),
          /* @__PURE__ */ d("span", { className: P(d1({ state: l })), children: c.label }),
          i < t.length - 1 && /* @__PURE__ */ d(
            "div",
            {
              className: P(
                u1({ completed: i < n })
              ),
              "aria-hidden": "true"
            }
          )
        ] }, c.label);
      })
    }
  )
);
h1.displayName = "Stepper";
var sr = "Switch", [p1] = rt(sr), [g1, b1] = p1(sr), cl = u.forwardRef(
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
      form: f,
      ...m
    } = e, [h, p] = u.useState(null), y = re(t, (w) => p(w)), g = u.useRef(!1), b = h ? f || !!h.closest("form") : !0, [x, v] = Pt({
      prop: o,
      defaultProp: a ?? !1,
      onChange: l,
      caller: sr
    });
    return /* @__PURE__ */ E(g1, { scope: n, checked: x, disabled: i, children: [
      /* @__PURE__ */ d(
        X.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": s,
          "data-state": fl(x),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...m,
          ref: y,
          onClick: Y(e.onClick, (w) => {
            v((S) => !S), b && (g.current = w.isPropagationStopped(), g.current || w.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d(
        ul,
        {
          control: h,
          bubbles: !g.current,
          name: r,
          value: c,
          checked: x,
          required: s,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
cl.displayName = sr;
var ll = "SwitchThumb", dl = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = b1(ll, n);
    return /* @__PURE__ */ d(
      X.span,
      {
        "data-state": fl(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
dl.displayName = ll;
var y1 = "SwitchBubbleInput", ul = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = u.useRef(null), i = re(s, a), c = xc(n), l = Ms(t);
    return u.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const m = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        m,
        "checked"
      ).set;
      if (c !== n && p) {
        const y = new Event("click", { bubbles: r });
        p.call(f, n), f.dispatchEvent(y);
      }
    }, [c, n, r]), /* @__PURE__ */ d(
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
ul.displayName = y1;
function fl(e) {
  return e ? "checked" : "unchecked";
}
var v1 = cl, w1 = dl;
const x1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  v1,
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
    children: /* @__PURE__ */ d(
      w1,
      {
        className: P(
          "pointer-events-none block h-5 w-5 rounded-full bg-surface shadow-sm ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
x1.displayName = "Switch";
function Aw({
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
        e && /* @__PURE__ */ d(
          e,
          {
            className: "h-6 w-6 mx-auto mb-2",
            style: { color: t }
          }
        ),
        /* @__PURE__ */ d("div", { className: "text-2xl font-bold text-text-base", children: r }),
        /* @__PURE__ */ d("div", { className: "text-sm text-text-muted mt-0.5", children: n }),
        o && /* @__PURE__ */ d(
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
const k1 = ht(
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
), S1 = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-text-muted"
};
function _w({
  variant: e = "neutral",
  label: t,
  dot: n = !0,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ E(
    "span",
    {
      className: P(k1({ variant: e }), r),
      ...o,
      children: [
        n && /* @__PURE__ */ d(
          "span",
          {
            className: P(
              "h-1.5 w-1.5 rounded-full shrink-0",
              S1[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
const C1 = {
  operational: { dot: "bg-green-500", text: "text-green-500 dark:text-green-400", label: "Operational" },
  degraded: { dot: "bg-yellow-500", text: "text-yellow-500 dark:text-yellow-400", label: "Degraded" },
  outage: { dot: "bg-red-500", text: "text-red-500 dark:text-red-400", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function Iw({
  label: e,
  status: t,
  statusLabel: n,
  className: r,
  ...o
}) {
  const a = C1[t];
  return /* @__PURE__ */ E("div", { className: P("flex items-center justify-between", r), ...o, children: [
    /* @__PURE__ */ E("div", { className: "flex items-center", children: [
      /* @__PURE__ */ d("div", { className: P("h-2 w-2 rounded-full mr-3", a.dot) }),
      /* @__PURE__ */ d("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ d("span", { className: P("text-sm", a.text), children: n ?? a.label })
  ] });
}
function Ww({ tabs: e, activeTab: t, onChange: n, className: r }) {
  return /* @__PURE__ */ d("div", { className: P("border-b border-border", r), children: /* @__PURE__ */ d("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
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
          s && /* @__PURE__ */ d(s, { className: "h-4 w-4" }),
          o.label
        ]
      },
      o.id
    );
  }) }) });
}
const N1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ d(
  "table",
  {
    ref: n,
    className: P("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
N1.displayName = "Table";
const M1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("thead", { ref: n, className: P("bg-subtle border-b border-border", e), ...t }));
M1.displayName = "TableHeader";
const E1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tbody",
  {
    ref: n,
    className: P("divide-y divide-border", e),
    ...t
  }
));
E1.displayName = "TableBody";
const P1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tfoot",
  {
    ref: n,
    className: P("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
P1.displayName = "TableFooter";
const D1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
D1.displayName = "TableRow";
const O1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
O1.displayName = "TableHead";
const T1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "td",
  {
    ref: n,
    className: P("px-4 py-3 align-middle text-text-base", e),
    ...t
  }
));
T1.displayName = "TableCell";
const R1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "caption",
  {
    ref: n,
    className: P("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
R1.displayName = "TableCaption";
var Dr = "rovingFocusGroup.onEntryFocus", A1 = { bubbles: !1, cancelable: !0 }, mn = "RovingFocusGroup", [jr, ml, _1] = wc(mn), [I1, hl] = rt(
  mn,
  [_1]
), [W1, F1] = I1(mn), pl = u.forwardRef(
  (e, t) => /* @__PURE__ */ d(jr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(jr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(z1, { ...e, ref: t }) }) })
);
pl.displayName = mn;
var z1 = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, h = u.useRef(null), p = re(t, h), y = er(a), [g, b] = Pt({
    prop: s,
    defaultProp: i ?? null,
    onChange: c,
    caller: mn
  }), [x, v] = u.useState(!1), w = we(l), S = ml(n), C = u.useRef(!1), [k, M] = u.useState(0);
  return u.useEffect(() => {
    const N = h.current;
    if (N)
      return N.addEventListener(Dr, w), () => N.removeEventListener(Dr, w);
  }, [w]), /* @__PURE__ */ d(
    W1,
    {
      scope: n,
      orientation: r,
      dir: y,
      loop: o,
      currentTabStopId: g,
      onItemFocus: u.useCallback(
        (N) => b(N),
        [b]
      ),
      onItemShiftTab: u.useCallback(() => v(!0), []),
      onFocusableItemAdd: u.useCallback(
        () => M((N) => N + 1),
        []
      ),
      onFocusableItemRemove: u.useCallback(
        () => M((N) => N - 1),
        []
      ),
      children: /* @__PURE__ */ d(
        X.div,
        {
          tabIndex: x || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: Y(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: Y(e.onFocus, (N) => {
            const D = !C.current;
            if (N.target === N.currentTarget && D && !x) {
              const R = new CustomEvent(Dr, A1);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const W = S().filter((I) => I.focusable), H = W.find((I) => I.active), V = W.find((I) => I.id === g), K = [H, V, ...W].filter(
                  Boolean
                ).map((I) => I.ref.current);
                yl(K, f);
              }
            }
            C.current = !1;
          }),
          onBlur: Y(e.onBlur, () => v(!1))
        }
      )
    }
  );
}), gl = "RovingFocusGroupItem", bl = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, c = et(), l = a || c, f = F1(gl, n), m = f.currentTabStopId === l, h = ml(n), { onFocusableItemAdd: p, onFocusableItemRemove: y, currentTabStopId: g } = f;
    return u.useEffect(() => {
      if (r)
        return p(), () => y();
    }, [r, p, y]), /* @__PURE__ */ d(
      jr.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ d(
          X.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: Y(e.onMouseDown, (b) => {
              r ? f.onItemFocus(l) : b.preventDefault();
            }),
            onFocus: Y(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: Y(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const x = $1(b, f.orientation, f.dir);
              if (x !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let w = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (x === "last") w.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && w.reverse();
                  const S = w.indexOf(b.currentTarget);
                  w = f.loop ? Y1(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => yl(w));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: m, hasTabStop: g != null }) : s
          }
        )
      }
    );
  }
);
bl.displayName = gl;
var B1 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function L1(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $1(e, t, n) {
  const r = L1(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return B1[r];
}
function yl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Y1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var H1 = pl, V1 = bl, ir = "Tabs", [j1] = rt(ir, [
  hl
]), vl = hl(), [G1, Po] = j1(ir), wl = u.forwardRef(
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
    } = e, f = er(i), [m, h] = Pt({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: ir
    });
    return /* @__PURE__ */ d(
      G1,
      {
        scope: n,
        baseId: et(),
        value: m,
        onValueChange: h,
        orientation: s,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ d(
          X.div,
          {
            dir: f,
            "data-orientation": s,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
wl.displayName = ir;
var xl = "TabsList", kl = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = Po(xl, n), s = vl(n);
    return /* @__PURE__ */ d(
      H1,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ d(
          X.div,
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
kl.displayName = xl;
var Sl = "TabsTrigger", Cl = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = Po(Sl, n), i = vl(n), c = El(s.baseId, r), l = Pl(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ d(
      V1,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ d(
          X.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": l,
            "data-state": f ? "active" : "inactive",
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
              !f && !o && m && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Cl.displayName = Sl;
var Nl = "TabsContent", Ml = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = Po(Nl, n), c = El(i.baseId, r), l = Pl(i.baseId, r), f = r === i.value, m = u.useRef(f);
    return u.useEffect(() => {
      const h = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ d(Fe, { present: o || f, children: ({ present: h }) => /* @__PURE__ */ d(
      X.div,
      {
        "data-state": f ? "active" : "inactive",
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
Ml.displayName = Nl;
function El(e, t) {
  return `${e}-trigger-${t}`;
}
function Pl(e, t) {
  return `${e}-content-${t}`;
}
var U1 = wl, Dl = kl, Ol = Cl, Tl = Ml;
const Fw = U1, q1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Dl,
  {
    ref: n,
    className: P(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
q1.displayName = Dl.displayName;
const X1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Ol,
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
X1.displayName = Ol.displayName;
const K1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Tl,
  {
    ref: n,
    className: P(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
K1.displayName = Tl.displayName;
const Z1 = u.forwardRef(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...a }, s) => {
    const i = o ?? (t == null ? void 0 : t.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ E("div", { className: "w-full space-y-1.5", children: [
      t && /* @__PURE__ */ d(
        "label",
        {
          htmlFor: i,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ d(
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
      n && /* @__PURE__ */ d("p", { id: `${i}-error`, className: "text-xs text-error-500", children: n }),
      !n && r && /* @__PURE__ */ d("p", { id: `${i}-helper`, className: "text-xs text-text-muted", children: r })
    ] });
  }
);
Z1.displayName = "Textarea";
function Q1({
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
  const l = u.useId(), f = u.useMemo(() => {
    const [b = "", x = "", v = ""] = e.split(":");
    return { hours: b, minutes: x, seconds: v };
  }, [e]), m = Array.from({ length: 24 }, (b, x) => String(x).padStart(2, "0")), h = Array.from(
    { length: Math.ceil(60 / i) },
    (b, x) => String(x * i).padStart(2, "0")
  ), p = Array.from({ length: 60 }, (b, x) => String(x).padStart(2, "0"));
  function y(b, x) {
    const v = { ...f, [b]: x };
    v.hours || (v.hours = "00"), v.minutes || (v.minutes = "00");
    const w = c ? `${v.hours}:${v.minutes}:${v.seconds || "00"}` : `${v.hours}:${v.minutes}`;
    t == null || t(w);
  }
  const g = P(
    "h-10 rounded-lg border border-border bg-surface px-2 py-2 text-sm text-text-base appearance-none",
    "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
    "disabled:cursor-not-allowed disabled:opacity-50",
    r && "border-red-300 focus:ring-red-500 focus:border-red-500"
  );
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    n && /* @__PURE__ */ d("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: n }),
    /* @__PURE__ */ E(
      "div",
      {
        className: P("flex items-center gap-2", s),
        children: [
          /* @__PURE__ */ d(cd, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ E(
            "select",
            {
              id: l,
              disabled: a,
              value: f.hours,
              onChange: (b) => y("hours", b.target.value),
              className: g,
              "aria-label": "Ore",
              children: [
                /* @__PURE__ */ d("option", { value: "", disabled: !0, children: "HH" }),
                m.map((b) => /* @__PURE__ */ d("option", { value: b, children: b }, b))
              ]
            }
          ),
          /* @__PURE__ */ d("span", { className: "text-text-muted font-medium", children: ":" }),
          /* @__PURE__ */ E(
            "select",
            {
              disabled: a,
              value: f.minutes,
              onChange: (b) => y("minutes", b.target.value),
              className: g,
              "aria-label": "Minuti",
              children: [
                /* @__PURE__ */ d("option", { value: "", disabled: !0, children: "MM" }),
                h.map((b) => /* @__PURE__ */ d("option", { value: b, children: b }, b))
              ]
            }
          ),
          c && /* @__PURE__ */ E(Ge, { children: [
            /* @__PURE__ */ d("span", { className: "text-text-muted font-medium", children: ":" }),
            /* @__PURE__ */ E(
              "select",
              {
                disabled: a,
                value: f.seconds,
                onChange: (b) => y("seconds", b.target.value),
                className: g,
                "aria-label": "Secondi",
                children: [
                  /* @__PURE__ */ d("option", { value: "", disabled: !0, children: "SS" }),
                  p.map((b) => /* @__PURE__ */ d("option", { value: b, children: b }, b))
                ]
              }
            )
          ] })
        ]
      }
    ),
    r && /* @__PURE__ */ d("p", { className: "text-xs text-red-600", children: r }),
    o && !r && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: o })
  ] });
}
Q1.displayName = "TimePicker";
const Gr = "databeez-theme", zw = `(function(){var t=localStorage.getItem('${Gr}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, Rl = $a({
  theme: "system",
  setTheme: () => {
  }
});
function Bw({ children: e }) {
  const [t, n] = _e("system"), r = (a) => {
    const s = document.documentElement, i = window.matchMedia("(prefers-color-scheme: dark)").matches;
    a === "dark" || a === "system" && i ? s.classList.add("dark") : s.classList.remove("dark");
  };
  Mt(() => {
    const s = localStorage.getItem(Gr) ?? "system";
    n(s), r(s);
  }, []), Mt(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), s = () => r("system");
    return a.addEventListener("change", s), () => a.removeEventListener("change", s);
  }, [t]);
  const o = (a) => {
    n(a), localStorage.setItem(Gr, a), r(a);
  };
  return /* @__PURE__ */ d(Rl.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function J1() {
  return Ya(Rl);
}
const Or = ["light", "dark", "system"];
function Lw() {
  const { theme: e, setTheme: t } = J1(), [n, r] = _e(!1);
  Mt(() => {
    r(!0);
  }, []);
  const o = () => {
    const a = Or.indexOf(e);
    t(Or[(a + 1) % Or.length]);
  };
  return n ? /* @__PURE__ */ d(
    "button",
    {
      onClick: o,
      className: "p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
      "aria-label": `Tema: ${e}`,
      title: `Tema corrente: ${e}`,
      children: e === "dark" ? /* @__PURE__ */ d(vd, { className: "h-4 w-4" }) : e === "system" ? /* @__PURE__ */ d(yd, { className: "h-4 w-4" }) : /* @__PURE__ */ d(Md, { className: "h-4 w-4" })
    }
  ) : null;
}
function $w({ user: e, bumblebeeUrl: t, extraItems: n, onLogout: r, showLaunchpadLink: o = !0 }) {
  const [a, s] = _e(!1), [i, c] = _e({}), l = dt(null), f = dt(null), m = dt(null);
  Mt(() => {
    const y = (g) => {
      l.current && !l.current.contains(g.target) && (!m.current || !m.current.contains(g.target)) && s(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []), Mt(() => {
    if (a && f.current) {
      const y = f.current.getBoundingClientRect();
      c({
        top: y.bottom + 8,
        right: window.innerWidth - y.right
      });
    }
  }, [a]);
  const h = r ?? (() => {
    window.location.href = `${t}/logout`;
  }), p = n && n.length > 0;
  return /* @__PURE__ */ E("div", { className: "relative", ref: l, children: [
    /* @__PURE__ */ E(
      "button",
      {
        ref: f,
        onClick: () => s(!a),
        className: "flex items-center space-x-2 text-text-muted hover:text-databeez-primary px-3 py-2 text-sm font-medium transition-colors",
        children: [
          /* @__PURE__ */ d(en, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "hidden sm:block", children: e.fullname }),
          /* @__PURE__ */ d(an, { className: "h-4 w-4" })
        ]
      }
    ),
    a && Jl(
      /* @__PURE__ */ E(
        "div",
        {
          ref: m,
          style: i,
          className: "fixed w-56 bg-surface border border-border rounded-md shadow-lg py-1 z-[9999]",
          children: [
            /* @__PURE__ */ E("div", { className: "px-4 py-2 border-b border-border", children: [
              /* @__PURE__ */ d("p", { className: "text-sm font-medium text-text-base truncate", children: e.fullname }),
              /* @__PURE__ */ d("p", { className: "text-xs text-text-muted truncate", children: e.email })
            ] }),
            p && /* @__PURE__ */ E(Ge, { children: [
              n.map(
                (y, g) => y.href ? /* @__PURE__ */ E(
                  "a",
                  {
                    href: y.href,
                    className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                    onClick: () => s(!1),
                    children: [
                      y.icon && /* @__PURE__ */ d("span", { className: "mr-2 flex-shrink-0", children: y.icon }),
                      y.label
                    ]
                  },
                  g
                ) : /* @__PURE__ */ E(
                  "button",
                  {
                    onClick: () => {
                      var b;
                      s(!1), (b = y.onClick) == null || b.call(y);
                    },
                    className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
                    children: [
                      y.icon && /* @__PURE__ */ d("span", { className: "mr-2 flex-shrink-0", children: y.icon }),
                      y.label
                    ]
                  },
                  g
                )
              ),
              /* @__PURE__ */ d("div", { className: "border-t border-border my-1" })
            ] }),
            /* @__PURE__ */ E(
              "a",
              {
                href: `${t}/profile`,
                className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                onClick: () => s(!1),
                children: [
                  /* @__PURE__ */ d(ld, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
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
                  /* @__PURE__ */ d(hd, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Torna al LaunchPad"
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "border-t border-border my-1" }),
            /* @__PURE__ */ E(
              "button",
              {
                onClick: () => {
                  s(!1), h();
                },
                className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
                children: [
                  /* @__PURE__ */ d(pd, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Logout"
                ]
              }
            )
          ]
        }
      ),
      document.body
    )
  ] });
}
function Yw(e, t = {}) {
  const { immediate: n = !0 } = t, [r, o] = _e(null), [a, s] = _e(n), [i, c] = _e(null), l = dt(e);
  l.current = e;
  const f = Se(async () => {
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
  return Mt(() => {
    n && f();
  }, t.deps ?? []), { data: r, loading: a, error: i, refetch: f };
}
const za = {
  O: { label: "Organizzazione", icon: qr },
  P: { label: "Persona", icon: en }
};
function Hw(e) {
  return za[e ?? ""] ?? za.O;
}
const ew = {
  F: { label: "Persona fisica", icon: en },
  P: { label: "Professionista", icon: od },
  A: { label: "Altro", icon: en }
};
function Vw(e) {
  return ew[e] ?? { label: "Persona", icon: en };
}
const tw = {
  S: { label: "Società", icon: qr },
  D: { label: "Ditta individuale", icon: Nd },
  E: { label: "Ente pubblico", icon: md },
  X: { label: "Estera", icon: dd },
  P: { label: "PIVA", icon: xd },
  A: { label: "Altro", icon: fd }
}, nw = { label: "Organizzazione", icon: qr };
function jw(e) {
  return tw[e ?? ""] ?? nw;
}
const Gw = {
  label: "Indirizzo",
  icon: gd
}, Uw = {
  label: "Sede",
  icon: Dd
}, rw = {
  banca: { label: "Banca", icon: rd },
  fiduciaria: { label: "Società fiduciaria", icon: Cd }
};
function qw(e) {
  return rw[e];
}
export {
  Gw as ADDRESS_META,
  cs as APP_LOGOS,
  iw as APP_LOGO_SLUGS,
  ku as Alert,
  cw as AppLogo,
  uw as Badge,
  Cu as BeeGraphLogo,
  Nu as BeeMapLogo,
  Mu as BeeScoutLogo,
  ds as Button,
  vo as Calendar,
  Bu as Card,
  Hu as CardContent,
  Yu as CardDescription,
  Vu as CardFooter,
  Lu as CardHeader,
  $u as CardTitle,
  ju as ChatInput,
  Rr as Checkbox,
  fw as CheckboxTree,
  hw as CodeBlock,
  Vh as ColorPicker,
  jh as Combobox,
  Uh as CopyButton,
  Hh as DEFAULT_PRESETS,
  gw as DataBeezLogo,
  pw as DataSourceBadge,
  vy as DatePicker,
  wy as DateRangePicker,
  yw as Dialog,
  ww as DialogClose,
  Ly as DialogContent,
  Vy as DialogDescription,
  Yy as DialogFooter,
  $y as DialogHeader,
  rc as DialogOverlay,
  By as DialogPortal,
  Hy as DialogTitle,
  vw as DialogTrigger,
  xw as EmptyState,
  Sw as FeatureCard,
  Cw as FloatingPanel,
  Eu as HaiveLogo,
  lw as InfoRow,
  Xy as Input,
  Ky as InputWithIcon,
  Uw as LOCATION_META,
  Gy as MarkdownContent,
  kw as MessageBubble,
  Nw as MethodBadge,
  tw as ORG_TYPE_META,
  ew as PERSON_TYPE_META,
  rw as PONTE_META,
  Mw as PageHeader,
  Xn as Popover,
  mw as PopoverAnchor,
  ln as PopoverContent,
  Kn as PopoverTrigger,
  za as SUBJECT_TYPE_META,
  fv as ScrollArea,
  vc as ScrollBar,
  mv as SearchInput,
  dw as Section,
  Ew as Select,
  n1 as SelectContent,
  Pw as SelectGroup,
  o1 as SelectItem,
  r1 as SelectLabel,
  sl as SelectScrollDownButton,
  al as SelectScrollUpButton,
  a1 as SelectSeparator,
  t1 as SelectTrigger,
  Dw as SelectValue,
  Ow as SidePanel,
  il as Skeleton,
  Tw as SkeletonCard,
  s1 as SkeletonText,
  c1 as Spinner,
  Rw as SpinnerOverlay,
  Aw as StatCard,
  _w as StatusBadge,
  Iw as StatusIndicatorRow,
  h1 as Stepper,
  Su as SwarmLogo,
  x1 as Switch,
  zw as THEME_ANTI_FOUC_SCRIPT,
  Gr as THEME_STORAGE_KEY,
  Ww as TabSwitch,
  N1 as Table,
  E1 as TableBody,
  R1 as TableCaption,
  T1 as TableCell,
  P1 as TableFooter,
  O1 as TableHead,
  M1 as TableHeader,
  D1 as TableRow,
  Fw as Tabs,
  K1 as TabsContent,
  q1 as TabsList,
  X1 as TabsTrigger,
  Z1 as Textarea,
  Bw as ThemeProvider,
  Lw as ThemeSwitcher,
  Q1 as TimePicker,
  $w as UserMenu,
  wu as alertVariants,
  Pu as badgeVariants,
  zu as buttonVariants,
  P as cn,
  jw as getOrgMeta,
  Vw as getPersonMeta,
  qw as getPonteMeta,
  Hw as getSubjectMeta,
  i1 as spinnerVariants,
  k1 as statusBadgeVariants,
  l1 as stepCircleVariants,
  u1 as stepConnectorVariants,
  d1 as stepLabelVariants,
  Yw as useAsyncData,
  J1 as useTheme
};
