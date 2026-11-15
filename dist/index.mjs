"use client";
import { jsxs as E, jsx as d, Fragment as Ge } from "react/jsx-runtime";
import * as u from "react";
import T, { forwardRef as Gs, createElement as Fo, useLayoutEffect as Us, useState as Ie, createContext as qs, useContext as Xs, useCallback as Se, useRef as lt, useEffect as kt, useMemo as Nn, useId as fd } from "react";
import * as Bn from "react-dom";
import md, { createPortal as hd } from "react-dom";
function Ks(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ks(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Jr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ks(e)) && (r && (r += " "), r += t);
  return r;
}
const Lo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, zo = Jr, mt = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return zo(e, n?.class, n?.className);
  const { variants: o, defaultVariants: s } = t, a = Object.keys(o).map((l) => {
    const f = n?.[l], m = s?.[l];
    if (f === null) return null;
    const h = Lo(f) || Lo(m);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, f) => {
    let [m, h] = f;
    return h === void 0 || (l[m] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, f) => {
    let { class: m, className: h, ...p } = f;
    return Object.entries(p).every((y) => {
      let [g, b] = y;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...i
      }[g]) : {
        ...s,
        ...i
      }[g] === b;
    }) ? [
      ...l,
      m,
      h
    ] : l;
  }, []);
  return zo(e, a, c, n?.class, n?.className);
};
var pd = {
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
const gd = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), V = (e, t) => {
  const n = Gs(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: s = 2, absoluteStrokeWidth: a, children: i, ...c }, l) => Fo(
      "svg",
      {
        ref: l,
        ...pd,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: a ? Number(s) * 24 / Number(o) : s,
        className: `lucide lucide-${gd(e)}`,
        ...c
      },
      [
        ...t.map(([f, m]) => Fo(f, m)),
        ...(Array.isArray(i) ? i : [i]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, bd = V("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Zs = V("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]), Qs = V("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]), yd = V("Banknote", [
  [
    "rect",
    { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }
  ],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]), vd = V("Briefcase", [
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
]), eo = V("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]), Js = V("Calendar", [
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
]), xd = V("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]), cn = V("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), ln = V("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), wd = V("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]), ea = V("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]), ta = V("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), na = V("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]), Sd = V("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]), ra = V("Copy", [
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
]), $o = V("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]), kd = V("ExternalLink", [
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp"
    }
  ],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]), Cd = V("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]), Nd = V("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]), Md = V("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), Bo = V("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), Ed = V("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]), Pd = V("LayoutGrid", [
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
]), Dd = V("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]), Od = V("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]), oa = V("Minus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }]
]), Td = V("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]), Rd = V("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]), Ad = V("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]), Id = V("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]), _d = V("RefreshCw", [
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
]), sa = V("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), Wd = V("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]), Fd = V("ShieldCheck", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]), Ho = V("Sparkles", [
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
]), Ld = V("Store", [
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
]), zd = V("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]), $d = V("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]), Bd = V("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]), tn = V("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]), Hd = V("Warehouse", [
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
]), Yd = V("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]), Hn = V("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Vd = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, jd = (e, t) => ({
  classGroupId: e,
  validator: t
}), aa = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Dn = "-", Yo = [], Gd = "arbitrary..", Ud = (e) => {
  const t = Xd(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return qd(a);
      const i = a.split(Dn), c = i[0] === "" && i.length > 1 ? 1 : 0;
      return ia(i, c, t);
    },
    getConflictingClassGroupIds: (a, i) => {
      if (i) {
        const c = r[a], l = n[a];
        return c ? l ? Vd(l, c) : c : l || Yo;
      }
      return n[a] || Yo;
    }
  };
}, ia = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const l = ia(e, t + 1, s);
    if (l) return l;
  }
  const a = n.validators;
  if (a === null)
    return;
  const i = t === 0 ? e.join(Dn) : e.slice(t).join(Dn), c = a.length;
  for (let l = 0; l < c; l++) {
    const f = a[l];
    if (f.validator(i))
      return f.classGroupId;
  }
}, qd = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? Gd + r : void 0;
})(), Xd = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return Kd(n, t);
}, Kd = (e, t) => {
  const n = aa();
  for (const r in e) {
    const o = e[r];
    to(o, n, r, t);
  }
  return n;
}, to = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const a = e[s];
    Zd(a, t, n, r);
  }
}, Zd = (e, t, n, r) => {
  if (typeof e == "string") {
    Qd(e, t, n);
    return;
  }
  if (typeof e == "function") {
    Jd(e, t, n, r);
    return;
  }
  eu(e, t, n, r);
}, Qd = (e, t, n) => {
  const r = e === "" ? t : ca(t, e);
  r.classGroupId = n;
}, Jd = (e, t, n, r) => {
  if (tu(e)) {
    to(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(jd(n, e));
}, eu = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let a = 0; a < s; a++) {
    const [i, c] = o[a];
    to(c, ca(t, i), n, r);
  }
}, ca = (e, t) => {
  let n = e;
  const r = t.split(Dn), o = r.length;
  for (let s = 0; s < o; s++) {
    const a = r[s];
    let i = n.nextPart.get(a);
    i || (i = aa(), n.nextPart.set(a, i)), n = i;
  }
  return n;
}, tu = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, nu = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, a) => {
    n[s] = a, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let a = n[s];
      if (a !== void 0)
        return a;
      if ((a = r[s]) !== void 0)
        return o(s, a), a;
    },
    set(s, a) {
      s in n ? n[s] = a : o(s, a);
    }
  };
}, Fr = "!", Vo = ":", ru = [], jo = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), ou = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let a = 0, i = 0, c = 0, l;
    const f = o.length;
    for (let g = 0; g < f; g++) {
      const b = o[g];
      if (a === 0 && i === 0) {
        if (b === Vo) {
          s.push(o.slice(c, g)), c = g + 1;
          continue;
        }
        if (b === "/") {
          l = g;
          continue;
        }
      }
      b === "[" ? a++ : b === "]" ? a-- : b === "(" ? i++ : b === ")" && i--;
    }
    const m = s.length === 0 ? o : o.slice(c);
    let h = m, p = !1;
    m.endsWith(Fr) ? (h = m.slice(0, -1), p = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(Fr) && (h = m.slice(1), p = !0)
    );
    const y = l && l > c ? l - c : void 0;
    return jo(s, p, h, y);
  };
  if (t) {
    const o = t + Vo, s = r;
    r = (a) => a.startsWith(o) ? s(a.slice(o.length)) : jo(ru, !1, a, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, su = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const a = n[s], i = a[0] === "[", c = t.has(a);
      i || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(a)) : o.push(a);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, au = (e) => ({
  cache: nu(e.cacheSize),
  parseClassName: ou(e),
  sortModifiers: su(e),
  ...Ud(e)
}), iu = /\s+/, cu = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, a = [], i = e.trim().split(iu);
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
    let b = !!g, v = r(b ? y.substring(0, g) : y);
    if (!v) {
      if (!b) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = r(y), !v) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const x = h.length === 0 ? "" : h.length === 1 ? h[0] : s(h).join(":"), w = p ? x + Fr : x, S = w + v;
    if (a.indexOf(S) > -1)
      continue;
    a.push(S);
    const C = o(v, b);
    for (let k = 0; k < C.length; ++k) {
      const M = C[k];
      a.push(w + M);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
}, lu = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = la(n)) && (o && (o += " "), o += r);
  return o;
}, la = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = la(e[r])) && (n && (n += " "), n += t);
  return n;
}, du = (e, ...t) => {
  let n, r, o, s;
  const a = (c) => {
    const l = t.reduce((f, m) => m(f), e());
    return n = au(l), r = n.cache.get, o = n.cache.set, s = i, i(c);
  }, i = (c) => {
    const l = r(c);
    if (l)
      return l;
    const f = cu(c, n);
    return o(c, f), f;
  };
  return s = a, (...c) => s(lu(...c));
}, uu = [], he = (e) => {
  const t = (n) => n[e] || uu;
  return t.isThemeGetter = !0, t;
}, da = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ua = /^\((?:(\w[\w-]*):)?(.+)\)$/i, fu = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, mu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, hu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, pu = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, gu = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, st = (e) => fu.test(e), Z = (e) => !!e && !Number.isNaN(Number(e)), at = (e) => !!e && Number.isInteger(Number(e)), vr = (e) => e.endsWith("%") && Z(e.slice(0, -1)), Ke = (e) => mu.test(e), fa = () => !0, yu = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  hu.test(e) && !pu.test(e)
), no = () => !1, vu = (e) => gu.test(e), xu = (e) => bu.test(e), wu = (e) => !A(e) && !I(e), Su = (e) => ht(e, pa, no), A = (e) => da.test(e), yt = (e) => ht(e, ga, yu), Go = (e) => ht(e, Ou, Z), ku = (e) => ht(e, ya, fa), Cu = (e) => ht(e, ba, no), Uo = (e) => ht(e, ma, no), Nu = (e) => ht(e, ha, xu), bn = (e) => ht(e, va, vu), I = (e) => ua.test(e), Zt = (e) => Dt(e, ga), Mu = (e) => Dt(e, ba), qo = (e) => Dt(e, ma), Eu = (e) => Dt(e, pa), Pu = (e) => Dt(e, ha), yn = (e) => Dt(e, va, !0), Du = (e) => Dt(e, ya, !0), ht = (e, t, n) => {
  const r = da.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Dt = (e, t, n = !1) => {
  const r = ua.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, ma = (e) => e === "position" || e === "percentage", ha = (e) => e === "image" || e === "url", pa = (e) => e === "length" || e === "size" || e === "bg-size", ga = (e) => e === "length", Ou = (e) => e === "number", ba = (e) => e === "family-name", ya = (e) => e === "number" || e === "weight", va = (e) => e === "shadow", Tu = () => {
  const e = he("color"), t = he("font"), n = he("text"), r = he("font-weight"), o = he("tracking"), s = he("leading"), a = he("breakpoint"), i = he("container"), c = he("spacing"), l = he("radius"), f = he("shadow"), m = he("inset-shadow"), h = he("text-shadow"), p = he("drop-shadow"), y = he("blur"), g = he("perspective"), b = he("aspect"), v = he("ease"), x = he("animate"), w = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
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
  ], C = () => [...S(), I, A], k = () => ["auto", "hidden", "clip", "visible", "scroll"], M = () => ["auto", "contain", "none"], N = () => [I, A, c], D = () => [st, "full", "auto", ...N()], R = () => [at, "none", "subgrid", I, A], F = () => ["auto", {
    span: ["full", at, I, A]
  }, at, I, A], Y = () => [at, "auto", I, A], j = () => ["auto", "min", "max", "fr", I, A], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], K = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], _ = () => ["auto", ...N()], G = () => [st, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], z = () => [st, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], U = () => [st, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], O = () => [e, I, A], fe = () => [...S(), qo, Uo, {
    position: [I, A]
  }], Ee = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Pe = () => ["auto", "cover", "contain", Eu, Su, {
    size: [I, A]
  }], be = () => [vr, Zt, yt], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    I,
    A
  ], de = () => ["", Z, Zt, yt], L = () => ["solid", "dashed", "dotted", "double"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => [Z, vr, qo, Uo], ee = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    y,
    I,
    A
  ], ne = () => ["none", Z, I, A], le = () => ["none", Z, I, A], pe = () => [Z, I, A], xe = () => [st, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ke],
      breakpoint: [Ke],
      color: [fa],
      container: [Ke],
      "drop-shadow": [Ke],
      ease: ["in", "out", "in-out"],
      font: [wu],
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
        aspect: ["auto", "square", st, A, I, b]
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
        columns: [Z, A, I, i]
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
        grow: ["", Z, I, A]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Z, I, A]
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
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Y()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Y()
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
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Y()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Y()
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
        content: ["normal", ...$()]
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
        "place-content": $()
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
        size: G()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...z()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...z()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...z()]
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
        w: [i, "screen", ...G()]
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
          ...G()
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
          ...G()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...G()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...G()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...G()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Zt, yt]
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
        font: [r, Du, ku]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", vr, A]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mu, Cu, t]
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
        "line-clamp": [Z, "none", I, Go]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Z, "from-font", "auto", I, yt]
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
        "underline-offset": [Z, "auto", I, A]
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
          }, at, I, A],
          radial: ["", I, A],
          conic: [at, I, A]
        }, Pu, Nu]
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
        from: be()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: be()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: be()
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
        rounded: ie()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": ie()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": ie()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": ie()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": ie()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": ie()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": ie()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": ie()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": ie()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": ie()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": ie()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": ie()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": ie()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": ie()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": ie()
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
        border: [...L(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...L(), "hidden", "none"]
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
        outline: [...L(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Z, I, A]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Z, Zt, yt]
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
          yn,
          bn
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
        "inset-shadow": ["none", m, yn, bn]
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
        "ring-offset": [Z, yt]
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
        "text-shadow": ["none", h, yn, bn]
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
        opacity: [Z, I, A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
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
        "mask-radial": [I, A]
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
        mask: Ee()
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
        brightness: [Z, I, A]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Z, I, A]
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
          yn,
          bn
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
        grayscale: ["", Z, I, A]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Z, I, A]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Z, I, A]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Z, I, A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Z, I, A]
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
        "backdrop-brightness": [Z, I, A]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Z, I, A]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Z, I, A]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Z, I, A]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Z, I, A]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Z, I, A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Z, I, A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Z, I, A]
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
        duration: [Z, "initial", I, A]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", v, I, A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Z, I, A]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, I, A]
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
        "perspective-origin": C()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ne()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ne()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ne()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ne()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: le()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": le()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": le()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": le()
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
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
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
        translate: xe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": xe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": xe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": xe()
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
        stroke: [Z, Zt, yt, Go]
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
}, Ru = /* @__PURE__ */ du(Tu);
function P(...e) {
  return Ru(Jr(e));
}
const Au = mt(
  "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-subtle border-border text-text-base",
        info: "bg-info-bg border-info-border text-info-fg",
        success: "bg-success-bg border-success-border text-success-fg",
        warning: "bg-warning-bg border-warning-border text-warning-fg",
        destructive: "bg-error-bg border-error-border text-error-fg"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Iu = {
  default: Bo,
  info: Bo,
  success: xd,
  warning: bd,
  destructive: Yd
}, _u = u.forwardRef(
  ({ className: e, variant: t = "default", title: n, children: r, ...o }, s) => {
    const a = Iu[t ?? "default"];
    return /* @__PURE__ */ E(
      "div",
      {
        ref: s,
        role: "alert",
        className: P(Au({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ d(a, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ E("div", { className: "flex-1 min-w-0", children: [
            n && /* @__PURE__ */ d("p", { className: "font-semibold mb-0.5", children: n }),
            r && /* @__PURE__ */ d("p", { className: "leading-relaxed", children: r })
          ] })
        ]
      }
    );
  }
);
_u.displayName = "Alert";
function Wu({ size: e = 48, className: t }) {
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
function Fu({ size: e = 48, className: t }) {
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
function Lu({ size: e = 48, className: t }) {
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
function zu({ size: e = 48, className: t }) {
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
function $u({ size: e = 48, className: t }) {
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
const xa = {
  swarm: { label: "Swarm", component: Wu },
  beegraph: { label: "BeeGraph", component: Fu },
  beemap: { label: "BeeMap", component: Lu },
  beescout: { label: "BeeScout", component: zu },
  haive: { label: "Haive", component: $u }
}, Tx = Object.keys(xa);
function Rx({ slug: e, size: t = 48, className: n, fallback: r }) {
  const o = xa[e];
  if (o) {
    const a = o.component;
    return /* @__PURE__ */ d(a, { size: t, className: n });
  }
  const s = (r ?? e ?? "?").charAt(0).toUpperCase();
  return /* @__PURE__ */ d(
    "div",
    {
      className: `rounded-lg bg-primary/15 flex items-center justify-center text-2xl text-primary shrink-0 ${n ?? ""}`,
      style: { width: t, height: t },
      children: s
    }
  );
}
function Ax({ label: e, value: t, className: n, ...r }) {
  return /* @__PURE__ */ E("div", { className: P("flex flex-col gap-0.5", n), ...r, children: [
    /* @__PURE__ */ d("span", { className: "text-xs text-text-muted", children: e }),
    /* @__PURE__ */ d("span", { className: "text-sm font-medium break-words text-text-base", children: t ?? "—" })
  ] });
}
function Ix({ title: e, children: t, className: n, ...r }) {
  return /* @__PURE__ */ E("div", { className: P("flex flex-col gap-3", n), ...r, children: [
    /* @__PURE__ */ d("h3", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1", children: e }),
    /* @__PURE__ */ d("div", { className: "flex flex-col gap-2", children: t })
  ] });
}
const Bu = mt(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-fg hover:bg-primary/80",
        secondary: "border-transparent bg-subtle text-text-base hover:bg-subtle/80",
        destructive: "border-transparent bg-error-bg text-error-fg hover:bg-error-bg/80",
        outline: "text-text-base",
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
function _x({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ d("div", { className: P(Bu({ variant: t }), e), ...n });
}
function Xo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ot(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Xo(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Xo(e[o], null);
        }
      };
  };
}
function te(...e) {
  return u.useCallback(Ot(...e), e);
}
var Hu = /* @__PURE__ */ Symbol.for("react.lazy"), On = u[" use ".trim().toString()];
function Yu(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function wa(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Hu && "_payload" in e && Yu(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Vu(e) {
  const t = /* @__PURE__ */ Gu(e), n = u.forwardRef((r, o) => {
    let { children: s, ...a } = r;
    wa(s) && typeof On == "function" && (s = On(s._payload));
    const i = u.Children.toArray(s), c = i.find(qu);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var ju = /* @__PURE__ */ Vu("Slot");
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  const t = u.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (wa(o) && typeof On == "function" && (o = On(o._payload)), u.isValidElement(o)) {
      const a = Ku(o), i = Xu(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ot(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Uu = /* @__PURE__ */ Symbol("radix.slottable");
function qu(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Uu;
}
function Xu(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ku(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const Zu = mt(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-databeez-primary text-white hover:bg-databeez-accent shadow-sm",
        destructive: "bg-error-500 text-white hover:bg-error-500/90 shadow-sm",
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
), Tn = u.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => /* @__PURE__ */ d(
    r ? ju : "button",
    {
      className: P(Zu({ variant: t, size: n, className: e })),
      ref: s,
      ...o
    }
  )
);
Tn.displayName = "Button";
const Qu = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
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
Qu.displayName = "Card";
const Ju = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: P("flex flex-col space-y-1.5 p-6", e), ...t }));
Ju.displayName = "CardHeader";
const ef = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "h3",
  {
    ref: n,
    className: P("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
ef.displayName = "CardTitle";
const tf = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "p",
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
tf.displayName = "CardDescription";
const nf = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { ref: n, className: P("p-6 pt-0", e), ...t }));
nf.displayName = "CardContent";
const rf = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "div",
  {
    ref: n,
    className: P("flex items-center p-6 pt-0", e),
    ...t
  }
));
rf.displayName = "CardFooter";
const of = u.forwardRef(
  ({
    onSend: e,
    disabled: t,
    placeholder: n = "Scrivi un messaggio...",
    className: r,
    maxHeight: o = 160
  }, s) => {
    const [a, i] = u.useState(""), c = u.useRef(null), l = s ?? c, f = () => {
      const p = a.trim();
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
            value: a,
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
          Tn,
          {
            onClick: f,
            disabled: t || !a.trim(),
            size: "icon",
            className: "h-11 w-11 rounded-xl flex-shrink-0 shadow-databeez hover:shadow-databeez-lg",
            children: /* @__PURE__ */ d(Wd, { className: "h-4 w-4" })
          }
        )
      ] }),
      /* @__PURE__ */ d("p", { className: "text-center text-xs text-text-muted mt-2", children: "Invio per inviare · Shift+Invio per andare a capo" })
    ] });
  }
);
of.displayName = "ChatInput";
const Ko = {
  default: "h-4 w-4",
  sm: "h-3.5 w-3.5"
}, Lr = u.forwardRef(
  ({
    className: e,
    indeterminate: t = !1,
    size: n = "default",
    checked: r,
    defaultChecked: o,
    disabled: s,
    onChange: a,
    ...i
  }, c) => {
    const l = u.useRef(null), f = r !== void 0, [m, h] = u.useState(
      o ?? !1
    ), p = f ? !!r : m;
    u.useEffect(() => {
      l.current && (l.current.indeterminate = t);
    }, [t]);
    function y(v) {
      f || h(v.target.checked), a?.(v);
    }
    const g = p && !t, b = t;
    return /* @__PURE__ */ E("span", { className: P("relative inline-flex shrink-0", Ko[n]), children: [
      /* @__PURE__ */ d(
        "input",
        {
          type: "checkbox",
          checked: p,
          disabled: s,
          onChange: y,
          ref: (v) => {
            l.current = v, typeof c == "function" ? c(v) : c && (c.current = v);
          },
          className: P(
            "peer m-0 shrink-0 cursor-pointer appearance-none rounded border transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
            "disabled:cursor-not-allowed disabled:opacity-50",
            g || b ? "border-databeez-primary bg-databeez-primary" : "border-border bg-surface",
            Ko[n],
            e
          ),
          ...i
        }
      ),
      /* @__PURE__ */ d(
        cn,
        {
          strokeWidth: 3,
          className: P(
            "pointer-events-none absolute inset-0 h-full w-full p-[2px] text-surface",
            g ? "opacity-100" : "opacity-0"
          )
        }
      ),
      /* @__PURE__ */ d(
        oa,
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
Lr.displayName = "Checkbox";
function Wx({
  label: e,
  checked: t,
  onToggle: n,
  children: r,
  expanded: o,
  onExpandedChange: s,
  size: a = "default",
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
          onClick: () => s(!o),
          "aria-label": o ? "Comprimi" : "Espandi",
          "aria-expanded": o,
          className: "flex shrink-0 items-center justify-center text-text-muted hover:text-text-base",
          children: o ? /* @__PURE__ */ d(ln, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ d(ea, { className: "h-3.5 w-3.5" })
        }
      ) : /* @__PURE__ */ d("span", { className: "w-3.5 shrink-0" }),
      /* @__PURE__ */ E("label", { className: "flex cursor-pointer select-none items-center gap-2", children: [
        /* @__PURE__ */ d(
          Lr,
          {
            size: a,
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
              Lr,
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
function B(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
function sf(e, t) {
  const n = u.createContext(t), r = (s) => {
    const { children: a, ...i } = s, c = u.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ d(n.Provider, { value: c, children: a });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const a = u.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function rt(e, t = []) {
  let n = [];
  function r(s, a) {
    const i = u.createContext(a), c = n.length;
    n = [...n, a];
    const l = (m) => {
      const { scope: h, children: p, ...y } = m, g = h?.[e]?.[c] || i, b = u.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ d(g.Provider, { value: b, children: p });
    };
    l.displayName = s + "Provider";
    function f(m, h) {
      const p = h?.[e]?.[c] || i, y = u.useContext(p);
      if (y) return y;
      if (a !== void 0) return a;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [l, f];
  }
  const o = () => {
    const s = n.map((a) => u.createContext(a));
    return function(i) {
      const c = i?.[e] || s;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: c } }),
        [i, c]
      );
    };
  };
  return o.scopeName = e, [r, af(o, ...t)];
}
function af(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const a = r.reduce((i, { useScope: c, scopeName: l }) => {
        const m = c(s)[`__scope${l}`];
        return { ...i, ...m };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function cf(e) {
  const t = /* @__PURE__ */ lf(e), n = u.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = u.Children.toArray(s), c = i.find(uf);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function lf(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const a = mf(o), i = ff(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ot(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var df = /* @__PURE__ */ Symbol("radix.slottable");
function uf(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === df;
}
function ff(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function mf(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var hf = [
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
], X = hf.reduce((e, t) => {
  const n = /* @__PURE__ */ cf(`Primitive.${t}`), r = u.forwardRef((o, s) => {
    const { asChild: a, ...i } = o, c = a ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ d(c, { ...i, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function pf(e, t) {
  e && Bn.flushSync(() => e.dispatchEvent(t));
}
function ve(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...n) => t.current?.(...n), []);
}
function gf(e, t = globalThis?.document) {
  const n = ve(e);
  u.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var bf = "DismissableLayer", zr = "dismissableLayer.update", yf = "dismissableLayer.pointerDownOutside", vf = "dismissableLayer.focusOutside", Zo, Sa = u.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Yn = u.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: i,
      ...c
    } = e, l = u.useContext(Sa), [f, m] = u.useState(null), h = f?.ownerDocument ?? globalThis?.document, [, p] = u.useState({}), y = te(t, (M) => m(M)), g = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), v = g.indexOf(b), x = f ? g.indexOf(f) : -1, w = l.layersWithOutsidePointerEventsDisabled.size > 0, S = x >= v, C = Sf((M) => {
      const N = M.target, D = [...l.branches].some((R) => R.contains(N));
      !S || D || (o?.(M), a?.(M), M.defaultPrevented || i?.());
    }, h), k = kf((M) => {
      const N = M.target;
      [...l.branches].some((R) => R.contains(N)) || (s?.(M), a?.(M), M.defaultPrevented || i?.());
    }, h);
    return gf((M) => {
      x === l.layers.size - 1 && (r?.(M), !M.defaultPrevented && i && (M.preventDefault(), i()));
    }, h), u.useEffect(() => {
      if (f)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Zo = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), Qo(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Zo);
        };
    }, [f, h, n, l]), u.useEffect(() => () => {
      f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), Qo());
    }, [f, l]), u.useEffect(() => {
      const M = () => p({});
      return document.addEventListener(zr, M), () => document.removeEventListener(zr, M);
    }, []), /* @__PURE__ */ d(
      X.div,
      {
        ...c,
        ref: y,
        style: {
          pointerEvents: w ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: B(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: B(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: B(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        )
      }
    );
  }
);
Yn.displayName = bf;
var xf = "DismissableLayerBranch", wf = u.forwardRef((e, t) => {
  const n = u.useContext(Sa), r = u.useRef(null), o = te(t, r);
  return u.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ d(X.div, { ...e, ref: o });
});
wf.displayName = xf;
function Sf(e, t = globalThis?.document) {
  const n = ve(e), r = u.useRef(!1), o = u.useRef(() => {
  });
  return u.useEffect(() => {
    const s = (i) => {
      if (i.target && !r.current) {
        let c = function() {
          ka(
            yf,
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
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function kf(e, t = globalThis?.document) {
  const n = ve(e), r = u.useRef(!1);
  return u.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && ka(vf, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qo() {
  const e = new CustomEvent(zr);
  document.dispatchEvent(e);
}
function ka(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pf(o, s) : o.dispatchEvent(s);
}
var xr = 0;
function ro() {
  u.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Jo()), document.body.insertAdjacentElement("beforeend", e[1] ?? Jo()), xr++, () => {
      xr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), xr--;
    };
  }, []);
}
function Jo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var wr = "focusScope.autoFocusOnMount", Sr = "focusScope.autoFocusOnUnmount", es = { bubbles: !1, cancelable: !0 }, Cf = "FocusScope", Vn = u.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...a
  } = e, [i, c] = u.useState(null), l = ve(o), f = ve(s), m = u.useRef(null), h = te(t, (g) => c(g)), p = u.useRef({
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
        i.contains(S) ? m.current = S : ct(m.current, { select: !0 });
      }, b = function(w) {
        if (p.paused || !i) return;
        const S = w.relatedTarget;
        S !== null && (i.contains(S) || ct(m.current, { select: !0 }));
      }, v = function(w) {
        if (document.activeElement === document.body)
          for (const C of w)
            C.removedNodes.length > 0 && ct(i);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const x = new MutationObserver(v);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), x.disconnect();
      };
    }
  }, [r, i, p.paused]), u.useEffect(() => {
    if (i) {
      ns.add(p);
      const g = document.activeElement;
      if (!i.contains(g)) {
        const v = new CustomEvent(wr, es);
        i.addEventListener(wr, l), i.dispatchEvent(v), v.defaultPrevented || (Nf(Of(Ca(i)), { select: !0 }), document.activeElement === g && ct(i));
      }
      return () => {
        i.removeEventListener(wr, l), setTimeout(() => {
          const v = new CustomEvent(Sr, es);
          i.addEventListener(Sr, f), i.dispatchEvent(v), v.defaultPrevented || ct(g ?? document.body, { select: !0 }), i.removeEventListener(Sr, f), ns.remove(p);
        }, 0);
      };
    }
  }, [i, l, f, p]);
  const y = u.useCallback(
    (g) => {
      if (!n && !r || p.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, v = document.activeElement;
      if (b && v) {
        const x = g.currentTarget, [w, S] = Mf(x);
        w && S ? !g.shiftKey && v === S ? (g.preventDefault(), n && ct(w, { select: !0 })) : g.shiftKey && v === w && (g.preventDefault(), n && ct(S, { select: !0 })) : v === x && g.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ d(X.div, { tabIndex: -1, ...a, ref: h, onKeyDown: y });
});
Vn.displayName = Cf;
function Nf(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ct(r, { select: t }), document.activeElement !== n) return;
}
function Mf(e) {
  const t = Ca(e), n = ts(t, e), r = ts(t.reverse(), e);
  return [n, r];
}
function Ca(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ts(e, t) {
  for (const n of e)
    if (!Ef(n, { upTo: t })) return n;
}
function Ef(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Pf(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Pf(e) && t && e.select();
  }
}
var ns = Df();
function Df() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = rs(e, t), e.unshift(t);
    },
    remove(t) {
      e = rs(e, t), e[0]?.resume();
    }
  };
}
function rs(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Of(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ge = globalThis?.document ? u.useLayoutEffect : () => {
}, Tf = u[" useId ".trim().toString()] || (() => {
}), Rf = 0;
function et(e) {
  const [t, n] = u.useState(Tf());
  return ge(() => {
    n((r) => r ?? String(Rf++));
  }, [e]), t ? `radix-${t}` : "";
}
const Af = ["top", "right", "bottom", "left"], dt = Math.min, Ce = Math.max, Rn = Math.round, vn = Math.floor, je = (e) => ({
  x: e,
  y: e
}), If = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $r(e, t, n) {
  return Ce(e, dt(t, n));
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
function oo(e) {
  return e === "x" ? "y" : "x";
}
function so(e) {
  return e === "y" ? "height" : "width";
}
function Ye(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function ao(e) {
  return oo(Ye(e));
}
function _f(e, t, n) {
  n === void 0 && (n = !1);
  const r = Gt(e), o = ao(e), s = so(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (a = An(a)), [a, An(a)];
}
function Wf(e) {
  const t = An(e);
  return [Br(e), t, Br(t)];
}
function Br(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const os = ["left", "right"], ss = ["right", "left"], Ff = ["top", "bottom"], Lf = ["bottom", "top"];
function zf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ss : os : t ? os : ss;
    case "left":
    case "right":
      return t ? Ff : Lf;
    default:
      return [];
  }
}
function $f(e, t, n, r) {
  const o = Gt(e);
  let s = zf(nt(e), n === "start", r);
  return o && (s = s.map((a) => a + "-" + o), t && (s = s.concat(s.map(Br)))), s;
}
function An(e) {
  const t = nt(e);
  return If[t] + e.slice(t.length);
}
function Bf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Na(e) {
  return typeof e != "number" ? Bf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function In(e) {
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
function as(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Ye(t), a = ao(t), i = so(a), c = nt(t), l = s === "y", f = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
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
  switch (Gt(t)) {
    case "start":
      p[a] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[a] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
async function Hf(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: a,
    elements: i,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: m = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = tt(t, e), y = Na(p), b = i[h ? m === "floating" ? "reference" : "floating" : m], v = In(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: f,
    strategy: c
  })), x = m === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(i.floating)), S = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = In(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: w,
    strategy: c
  }) : x);
  return {
    top: (v.top - C.top + y.top) / S.y,
    bottom: (C.bottom - v.bottom + y.bottom) / S.y,
    left: (v.left - C.left + y.left) / S.x,
    right: (C.right - v.right + y.right) / S.x
  };
}
const Yf = 50, Vf = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: a
  } = n, i = a.detectOverflow ? a : {
    ...a,
    detectOverflow: Hf
  }, c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: m
  } = as(l, r, c), h = r, p = 0;
  const y = {};
  for (let g = 0; g < s.length; g++) {
    const b = s[g];
    if (!b)
      continue;
    const {
      name: v,
      fn: x
    } = b, {
      x: w,
      y: S,
      data: C,
      reset: k
    } = await x({
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
    f = w ?? f, m = S ?? m, y[v] = {
      ...y[v],
      ...C
    }, k && p < Yf && (p++, typeof k == "object" && (k.placement && (h = k.placement), k.rects && (l = k.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: f,
      y: m
    } = as(l, h, c)), g = -1);
  }
  return {
    x: f,
    y: m,
    placement: h,
    strategy: o,
    middlewareData: y
  };
}, jf = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: a,
      elements: i,
      middlewareData: c
    } = t, {
      element: l,
      padding: f = 0
    } = tt(e, t) || {};
    if (l == null)
      return {};
    const m = Na(f), h = {
      x: n,
      y: r
    }, p = ao(o), y = so(p), g = await a.getDimensions(l), b = p === "y", v = b ? "top" : "left", x = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", S = s.reference[y] + s.reference[p] - h[p] - s.floating[y], C = h[p] - s.reference[p], k = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let M = k ? k[w] : 0;
    (!M || !await (a.isElement == null ? void 0 : a.isElement(k))) && (M = i.floating[w] || s.floating[y]);
    const N = S / 2 - C / 2, D = M / 2 - g[y] / 2 - 1, R = dt(m[v], D), F = dt(m[x], D), Y = R, j = M - g[y] - F, $ = M / 2 - g[y] / 2 + N, K = $r(Y, $, j), _ = !c.arrow && Gt(o) != null && $ !== K && s.reference[y] / 2 - ($ < Y ? R : F) - g[y] / 2 < 0, G = _ ? $ < Y ? $ - Y : $ - j : 0;
    return {
      [p]: h[p] + G,
      data: {
        [p]: K,
        centerOffset: $ - K - G,
        ..._ && {
          alignmentOffset: G
        }
      },
      reset: _
    };
  }
}), Gf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: a,
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
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const v = nt(o), x = Ye(i), w = nt(i) === i, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), C = h || (w || !g ? [An(i)] : Wf(i)), k = y !== "none";
      !h && k && C.push(...$f(i, g, y, S));
      const M = [i, ...C], N = await c.detectOverflow(t, b), D = [];
      let R = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (f && D.push(N[v]), m) {
        const $ = _f(o, a, S);
        D.push(N[$[0]], N[$[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: D
      }], !D.every(($) => $ <= 0)) {
        var F, Y;
        const $ = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1, K = M[$];
        if (K && (!(m === "alignment" ? x !== Ye(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((z) => Ye(z.placement) === x ? z.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: R
            },
            reset: {
              placement: K
            }
          };
        let _ = (Y = R.filter((G) => G.overflows[0] <= 0).sort((G, z) => G.overflows[1] - z.overflows[1])[0]) == null ? void 0 : Y.placement;
        if (!_)
          switch (p) {
            case "bestFit": {
              var j;
              const G = (j = R.filter((z) => {
                if (k) {
                  const U = Ye(z.placement);
                  return U === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((z) => [z.placement, z.overflows.filter((U) => U > 0).reduce((U, O) => U + O, 0)]).sort((z, U) => z[1] - U[1])[0]) == null ? void 0 : j[0];
              G && (_ = G);
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
function is(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function cs(e) {
  return Af.some((t) => e[t] >= 0);
}
const Uf = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...s
      } = tt(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), i = is(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: cs(i)
            }
          };
        }
        case "escaped": {
          const a = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), i = is(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: cs(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ma = /* @__PURE__ */ new Set(["left", "top"]);
async function qf(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = nt(n), i = Gt(n), c = Ye(n) === "y", l = Ma.has(a) ? -1 : 1, f = s && c ? -1 : 1, m = tt(t, e);
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
const Xf = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: a,
        middlewareData: i
      } = t, c = await qf(t, e);
      return a === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, Kf = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: s
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: c = {
          fn: (v) => {
            let {
              x,
              y: w
            } = v;
            return {
              x,
              y: w
            };
          }
        },
        ...l
      } = tt(e, t), f = {
        x: n,
        y: r
      }, m = await s.detectOverflow(t, l), h = Ye(nt(o)), p = oo(h);
      let y = f[p], g = f[h];
      if (a) {
        const v = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", w = y + m[v], S = y - m[x];
        y = $r(w, y, S);
      }
      if (i) {
        const v = h === "y" ? "top" : "left", x = h === "y" ? "bottom" : "right", w = g + m[v], S = g - m[x];
        g = $r(w, g, S);
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
            [p]: a,
            [h]: i
          }
        }
      };
    }
  };
}, Zf = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: a
      } = t, {
        offset: i = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = tt(e, t), f = {
        x: n,
        y: r
      }, m = Ye(o), h = oo(m);
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
        const w = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[w] + b.mainAxis, C = s.reference[h] + s.reference[w] - b.mainAxis;
        p < S ? p = S : p > C && (p = C);
      }
      if (l) {
        var v, x;
        const w = h === "y" ? "width" : "height", S = Ma.has(nt(o)), C = s.reference[m] - s.floating[w] + (S && ((v = a.offset) == null ? void 0 : v[m]) || 0) + (S ? 0 : b.crossAxis), k = s.reference[m] + s.reference[w] + (S ? 0 : ((x = a.offset) == null ? void 0 : x[m]) || 0) - (S ? b.crossAxis : 0);
        y < C ? y = C : y > k && (y = k);
      }
      return {
        [h]: p,
        [m]: y
      };
    }
  };
}, Qf = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: a,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...l
      } = tt(e, t), f = await a.detectOverflow(t, l), m = nt(o), h = Gt(o), p = Ye(o) === "y", {
        width: y,
        height: g
      } = s.floating;
      let b, v;
      m === "top" || m === "bottom" ? (b = m, v = h === (await (a.isRTL == null ? void 0 : a.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (v = m, b = h === "end" ? "top" : "bottom");
      const x = g - f.top - f.bottom, w = y - f.left - f.right, S = dt(g - f[b], x), C = dt(y - f[v], w), k = !t.middlewareData.shift;
      let M = S, N = C;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (N = w), (r = t.middlewareData.shift) != null && r.enabled.y && (M = x), k && !h) {
        const R = Ce(f.left, 0), F = Ce(f.right, 0), Y = Ce(f.top, 0), j = Ce(f.bottom, 0);
        p ? N = y - 2 * (R !== 0 || F !== 0 ? R + F : Ce(f.left, f.right)) : M = g - 2 * (Y !== 0 || j !== 0 ? Y + j : Ce(f.top, f.bottom));
      }
      await c({
        ...t,
        availableWidth: N,
        availableHeight: M
      });
      const D = await a.getDimensions(i.floating);
      return y !== D.width || g !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function jn() {
  return typeof window < "u";
}
function Ut(e) {
  return Ea(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ne(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ue(e) {
  var t;
  return (t = (Ea(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ea(e) {
  return jn() ? e instanceof Node || e instanceof Ne(e).Node : !1;
}
function _e(e) {
  return jn() ? e instanceof Element || e instanceof Ne(e).Element : !1;
}
function ot(e) {
  return jn() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1;
}
function ls(e) {
  return !jn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot;
}
function dn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = We(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Jf(e) {
  return /^(table|td|th)$/.test(Ut(e));
}
function Gn(e) {
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
const em = /transform|translate|scale|rotate|perspective|filter/, tm = /paint|layout|strict|content/, vt = (e) => !!e && e !== "none";
let kr;
function io(e) {
  const t = _e(e) ? We(e) : e;
  return vt(t.transform) || vt(t.translate) || vt(t.scale) || vt(t.rotate) || vt(t.perspective) || !co() && (vt(t.backdropFilter) || vt(t.filter)) || em.test(t.willChange || "") || tm.test(t.contain || "");
}
function nm(e) {
  let t = ut(e);
  for (; ot(t) && !Yt(t); ) {
    if (io(t))
      return t;
    if (Gn(t))
      return null;
    t = ut(t);
  }
  return null;
}
function co() {
  return kr == null && (kr = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), kr;
}
function Yt(e) {
  return /^(html|body|#document)$/.test(Ut(e));
}
function We(e) {
  return Ne(e).getComputedStyle(e);
}
function Un(e) {
  return _e(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ut(e) {
  if (Ut(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ls(e) && e.host || // Fallback.
    Ue(e)
  );
  return ls(t) ? t.host : t;
}
function Pa(e) {
  const t = ut(e);
  return Yt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ot(t) && dn(t) ? t : Pa(t);
}
function nn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Pa(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Ne(o);
  if (s) {
    const i = Hr(a);
    return t.concat(a, a.visualViewport || [], dn(o) ? o : [], i && n ? nn(i) : []);
  } else
    return t.concat(o, nn(o, [], n));
}
function Hr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Da(e) {
  const t = We(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ot(e), s = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, i = Rn(n) !== s || Rn(r) !== a;
  return i && (n = s, r = a), {
    width: n,
    height: r,
    $: i
  };
}
function lo(e) {
  return _e(e) ? e : e.contextElement;
}
function $t(e) {
  const t = lo(e);
  if (!ot(t))
    return je(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Da(t);
  let a = (s ? Rn(n.width) : n.width) / r, i = (s ? Rn(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: a,
    y: i
  };
}
const rm = /* @__PURE__ */ je(0);
function Oa(e) {
  const t = Ne(e);
  return !co() || !t.visualViewport ? rm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function om(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Ne(e) ? !1 : t;
}
function Ct(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = lo(e);
  let a = je(1);
  t && (r ? _e(r) && (a = $t(r)) : a = $t(e));
  const i = om(s, n, r) ? Oa(s) : je(0);
  let c = (o.left + i.x) / a.x, l = (o.top + i.y) / a.y, f = o.width / a.x, m = o.height / a.y;
  if (s) {
    const h = Ne(s), p = r && _e(r) ? Ne(r) : r;
    let y = h, g = Hr(y);
    for (; g && r && p !== y; ) {
      const b = $t(g), v = g.getBoundingClientRect(), x = We(g), w = v.left + (g.clientLeft + parseFloat(x.paddingLeft)) * b.x, S = v.top + (g.clientTop + parseFloat(x.paddingTop)) * b.y;
      c *= b.x, l *= b.y, f *= b.x, m *= b.y, c += w, l += S, y = Ne(g), g = Hr(y);
    }
  }
  return In({
    width: f,
    height: m,
    x: c,
    y: l
  });
}
function qn(e, t) {
  const n = Un(e).scrollLeft;
  return t ? t.left + n : Ct(Ue(e)).left + n;
}
function Ta(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - qn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function sm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", a = Ue(r), i = t ? Gn(t.floating) : !1;
  if (r === a || i && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = je(1);
  const f = je(0), m = ot(r);
  if ((m || !m && !s) && ((Ut(r) !== "body" || dn(a)) && (c = Un(r)), m)) {
    const p = Ct(r);
    l = $t(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop;
  }
  const h = a && !m && !s ? Ta(a, c) : je(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + f.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + f.y + h.y
  };
}
function am(e) {
  return Array.from(e.getClientRects());
}
function im(e) {
  const t = Ue(e), n = Un(e), r = e.ownerDocument.body, o = Ce(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = Ce(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + qn(e);
  const i = -n.scrollTop;
  return We(r).direction === "rtl" && (a += Ce(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: a,
    y: i
  };
}
const ds = 25;
function cm(e, t) {
  const n = Ne(e), r = Ue(e), o = n.visualViewport;
  let s = r.clientWidth, a = r.clientHeight, i = 0, c = 0;
  if (o) {
    s = o.width, a = o.height;
    const f = co();
    (!f || f && t === "fixed") && (i = o.offsetLeft, c = o.offsetTop);
  }
  const l = qn(r);
  if (l <= 0) {
    const f = r.ownerDocument, m = f.body, h = getComputedStyle(m), p = f.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, y = Math.abs(r.clientWidth - m.clientWidth - p);
    y <= ds && (s -= y);
  } else l <= ds && (s += l);
  return {
    width: s,
    height: a,
    x: i,
    y: c
  };
}
function lm(e, t) {
  const n = Ct(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = ot(e) ? $t(e) : je(1), a = e.clientWidth * s.x, i = e.clientHeight * s.y, c = o * s.x, l = r * s.y;
  return {
    width: a,
    height: i,
    x: c,
    y: l
  };
}
function us(e, t, n) {
  let r;
  if (t === "viewport")
    r = cm(e, n);
  else if (t === "document")
    r = im(Ue(e));
  else if (_e(t))
    r = lm(t, n);
  else {
    const o = Oa(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return In(r);
}
function Ra(e, t) {
  const n = ut(e);
  return n === t || !_e(n) || Yt(n) ? !1 : We(n).position === "fixed" || Ra(n, t);
}
function dm(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = nn(e, [], !1).filter((i) => _e(i) && Ut(i) !== "body"), o = null;
  const s = We(e).position === "fixed";
  let a = s ? ut(e) : e;
  for (; _e(a) && !Yt(a); ) {
    const i = We(a), c = io(a);
    !c && i.position === "fixed" && (o = null), (s ? !c && !o : !c && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || dn(a) && !c && Ra(e, a)) ? r = r.filter((f) => f !== a) : o = i, a = ut(a);
  }
  return t.set(e, r), r;
}
function um(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Gn(t) ? [] : dm(t, this._c) : [].concat(n), r], i = us(t, a[0], o);
  let c = i.top, l = i.right, f = i.bottom, m = i.left;
  for (let h = 1; h < a.length; h++) {
    const p = us(t, a[h], o);
    c = Ce(p.top, c), l = dt(p.right, l), f = dt(p.bottom, f), m = Ce(p.left, m);
  }
  return {
    width: l - m,
    height: f - c,
    x: m,
    y: c
  };
}
function fm(e) {
  const {
    width: t,
    height: n
  } = Da(e);
  return {
    width: t,
    height: n
  };
}
function mm(e, t, n) {
  const r = ot(t), o = Ue(t), s = n === "fixed", a = Ct(e, !0, s, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = je(0);
  function l() {
    c.x = qn(o);
  }
  if (r || !r && !s)
    if ((Ut(t) !== "body" || dn(o)) && (i = Un(t)), r) {
      const p = Ct(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else o && l();
  s && !r && o && l();
  const f = o && !r && !s ? Ta(o, i) : je(0), m = a.left + i.scrollLeft - c.x - f.x, h = a.top + i.scrollTop - c.y - f.y;
  return {
    x: m,
    y: h,
    width: a.width,
    height: a.height
  };
}
function Cr(e) {
  return We(e).position === "static";
}
function fs(e, t) {
  if (!ot(e) || We(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ue(e) === n && (n = n.ownerDocument.body), n;
}
function Aa(e, t) {
  const n = Ne(e);
  if (Gn(e))
    return n;
  if (!ot(e)) {
    let o = ut(e);
    for (; o && !Yt(o); ) {
      if (_e(o) && !Cr(o))
        return o;
      o = ut(o);
    }
    return n;
  }
  let r = fs(e, t);
  for (; r && Jf(r) && Cr(r); )
    r = fs(r, t);
  return r && Yt(r) && Cr(r) && !io(r) ? n : r || nm(e) || n;
}
const hm = async function(e) {
  const t = this.getOffsetParent || Aa, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: mm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function pm(e) {
  return We(e).direction === "rtl";
}
const gm = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sm,
  getDocumentElement: Ue,
  getClippingRect: um,
  getOffsetParent: Aa,
  getElementRects: hm,
  getClientRects: am,
  getDimensions: fm,
  getScale: $t,
  isElement: _e,
  isRTL: pm
};
function Ia(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function bm(e, t) {
  let n = null, r;
  const o = Ue(e);
  function s() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function a(i, c) {
    i === void 0 && (i = !1), c === void 0 && (c = 1), s();
    const l = e.getBoundingClientRect(), {
      left: f,
      top: m,
      width: h,
      height: p
    } = l;
    if (i || t(), !h || !p)
      return;
    const y = vn(m), g = vn(o.clientWidth - (f + h)), b = vn(o.clientHeight - (m + p)), v = vn(f), w = {
      rootMargin: -y + "px " + -g + "px " + -b + "px " + -v + "px",
      threshold: Ce(0, dt(1, c)) || 1
    };
    let S = !0;
    function C(k) {
      const M = k[0].intersectionRatio;
      if (M !== c) {
        if (!S)
          return a();
        M ? a(!1, M) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      M === 1 && !Ia(l, e.getBoundingClientRect()) && a(), S = !1;
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
  return a(!0), s;
}
function ym(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = lo(e), f = o || s ? [...l ? nn(l) : [], ...t ? nn(t) : []] : [];
  f.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), s && v.addEventListener("resize", n);
  });
  const m = l && i ? bm(l, n) : null;
  let h = -1, p = null;
  a && (p = new ResizeObserver((v) => {
    let [x] = v;
    x && x.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var w;
      (w = p) == null || w.observe(t);
    })), n();
  }), l && !c && p.observe(l), t && p.observe(t));
  let y, g = c ? Ct(e) : null;
  c && b();
  function b() {
    const v = Ct(e);
    g && !Ia(g, v) && n(), g = v, y = requestAnimationFrame(b);
  }
  return n(), () => {
    var v;
    f.forEach((x) => {
      o && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), m?.(), (v = p) == null || v.disconnect(), p = null, c && cancelAnimationFrame(y);
  };
}
const vm = Xf, xm = Kf, wm = Gf, Sm = Qf, km = Uf, ms = jf, Cm = Zf, Nm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: gm,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Vf(e, t, {
    ...o,
    platform: s
  });
};
var Mm = typeof document < "u", Em = function() {
}, Mn = Mm ? Us : Em;
function _n(e, t) {
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
        if (!_n(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !_n(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function _a(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hs(e, t) {
  const n = _a(e);
  return Math.round(t * n) / n;
}
function Nr(e) {
  const t = u.useRef(e);
  return Mn(() => {
    t.current = e;
  }), t;
}
function Pm(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: a
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
  _n(h, r) || p(r);
  const [y, g] = u.useState(null), [b, v] = u.useState(null), x = u.useCallback((z) => {
    z !== k.current && (k.current = z, g(z));
  }, []), w = u.useCallback((z) => {
    z !== M.current && (M.current = z, v(z));
  }, []), S = s || y, C = a || b, k = u.useRef(null), M = u.useRef(null), N = u.useRef(f), D = c != null, R = Nr(c), F = Nr(o), Y = Nr(l), j = u.useCallback(() => {
    if (!k.current || !M.current)
      return;
    const z = {
      placement: t,
      strategy: n,
      middleware: h
    };
    F.current && (z.platform = F.current), Nm(k.current, M.current, z).then((U) => {
      const O = {
        ...U,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: Y.current !== !1
      };
      $.current && !_n(N.current, O) && (N.current = O, Bn.flushSync(() => {
        m(O);
      }));
    });
  }, [h, t, n, F, Y]);
  Mn(() => {
    l === !1 && N.current.isPositioned && (N.current.isPositioned = !1, m((z) => ({
      ...z,
      isPositioned: !1
    })));
  }, [l]);
  const $ = u.useRef(!1);
  Mn(() => ($.current = !0, () => {
    $.current = !1;
  }), []), Mn(() => {
    if (S && (k.current = S), C && (M.current = C), S && C) {
      if (R.current)
        return R.current(S, C, j);
      j();
    }
  }, [S, C, j, R, D]);
  const K = u.useMemo(() => ({
    reference: k,
    floating: M,
    setReference: x,
    setFloating: w
  }), [x, w]), _ = u.useMemo(() => ({
    reference: S,
    floating: C
  }), [S, C]), G = u.useMemo(() => {
    const z = {
      position: n,
      left: 0,
      top: 0
    };
    if (!_.floating)
      return z;
    const U = hs(_.floating, f.x), O = hs(_.floating, f.y);
    return i ? {
      ...z,
      transform: "translate(" + U + "px, " + O + "px)",
      ..._a(_.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: U,
      top: O
    };
  }, [n, i, _.floating, f.x, f.y]);
  return u.useMemo(() => ({
    ...f,
    update: j,
    refs: K,
    elements: _,
    floatingStyles: G
  }), [f, j, K, _, G]);
}
const Dm = (e) => {
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
      return r && t(r) ? r.current != null ? ms({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? ms({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Om = (e, t) => {
  const n = vm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Tm = (e, t) => {
  const n = xm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Rm = (e, t) => ({
  fn: Cm(e).fn,
  options: [e, t]
}), Am = (e, t) => {
  const n = wm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Im = (e, t) => {
  const n = Sm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, _m = (e, t) => {
  const n = km(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Wm = (e, t) => {
  const n = Dm(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Fm = "Arrow", Wa = u.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ d(
    X.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ d("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Wa.displayName = Fm;
var Lm = Wa;
function Fa(e) {
  const [t, n] = u.useState(void 0);
  return ge(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let a, i;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          a = l.inlineSize, i = l.blockSize;
        } else
          a = e.offsetWidth, i = e.offsetHeight;
        n({ width: a, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var uo = "Popper", [La, Xn] = rt(uo), [zm, za] = La(uo), $a = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = u.useState(null);
  return /* @__PURE__ */ d(zm, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
$a.displayName = uo;
var Ba = "PopperAnchor", Ha = u.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = za(Ba, n), a = u.useRef(null), i = te(t, a), c = u.useRef(null);
    return u.useEffect(() => {
      const l = c.current;
      c.current = r?.current || a.current, l !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ d(X.div, { ...o, ref: i });
  }
);
Ha.displayName = Ba;
var fo = "PopperContent", [$m, Bm] = La(fo), Ya = u.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: a = 0,
      arrowPadding: i = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: f = 0,
      sticky: m = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: y,
      ...g
    } = e, b = za(fo, n), [v, x] = u.useState(null), w = te(t, (L) => x(L)), [S, C] = u.useState(null), k = Fa(S), M = k?.width ?? 0, N = k?.height ?? 0, D = r + (s !== "center" ? "-" + s : ""), R = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, F = Array.isArray(l) ? l : [l], Y = F.length > 0, j = {
      padding: R,
      boundary: F.filter(Ym),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: Y
    }, { refs: $, floatingStyles: K, placement: _, isPositioned: G, middlewareData: z } = Pm({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: D,
      whileElementsMounted: (...L) => ym(...L, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        Om({ mainAxis: o + N, alignmentAxis: a }),
        c && Tm({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? Rm() : void 0,
          ...j
        }),
        c && Am({ ...j }),
        Im({
          ...j,
          apply: ({ elements: L, rects: ce, availableWidth: Q, availableHeight: ee }) => {
            const { width: ne, height: le } = ce.reference, pe = L.floating.style;
            pe.setProperty("--radix-popper-available-width", `${Q}px`), pe.setProperty("--radix-popper-available-height", `${ee}px`), pe.setProperty("--radix-popper-anchor-width", `${ne}px`), pe.setProperty("--radix-popper-anchor-height", `${le}px`);
          }
        }),
        S && Wm({ element: S, padding: i }),
        Vm({ arrowWidth: M, arrowHeight: N }),
        h && _m({ strategy: "referenceHidden", ...j })
      ]
    }), [U, O] = Ga(_), fe = ve(y);
    ge(() => {
      G && fe?.();
    }, [G, fe]);
    const Ee = z.arrow?.x, Pe = z.arrow?.y, be = z.arrow?.centerOffset !== 0, [ie, de] = u.useState();
    return ge(() => {
      v && de(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ d(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: G ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ie,
          "--radix-popper-transform-origin": [
            z.transformOrigin?.x,
            z.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...z.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ d(
          $m,
          {
            scope: n,
            placedSide: U,
            onArrowChange: C,
            arrowX: Ee,
            arrowY: Pe,
            shouldHideArrow: be,
            children: /* @__PURE__ */ d(
              X.div,
              {
                "data-side": U,
                "data-align": O,
                ...g,
                ref: w,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: G ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ya.displayName = fo;
var Va = "PopperArrow", Hm = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ja = u.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Bm(Va, r), a = Hm[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ d(
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
        children: /* @__PURE__ */ d(
          Lm,
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
ja.displayName = Va;
function Ym(e) {
  return e !== null;
}
var Vm = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, a = o.arrow?.centerOffset !== 0, i = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, f] = Ga(n), m = { start: "0%", center: "50%", end: "100%" }[f], h = (o.arrow?.x ?? 0) + i / 2, p = (o.arrow?.y ?? 0) + c / 2;
    let y = "", g = "";
    return l === "bottom" ? (y = a ? m : `${h}px`, g = `${-c}px`) : l === "top" ? (y = a ? m : `${h}px`, g = `${r.floating.height + c}px`) : l === "right" ? (y = `${-c}px`, g = a ? m : `${p}px`) : l === "left" && (y = `${r.floating.width + c}px`, g = a ? m : `${p}px`), { data: { x: y, y: g } };
  }
});
function Ga(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Ua = $a, mo = Ha, qa = Ya, Xa = ja, jm = "Portal", Kn = u.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, s] = u.useState(!1);
  ge(() => s(!0), []);
  const a = n || o && globalThis?.document?.body;
  return a ? md.createPortal(/* @__PURE__ */ d(X.div, { ...r, ref: t }), a) : null;
});
Kn.displayName = jm;
function Gm(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Fe = (e) => {
  const { present: t, children: n } = e, r = Um(t), o = typeof n == "function" ? n({ present: r.isPresent }) : u.Children.only(n), s = te(r.ref, qm(o));
  return typeof n == "function" || r.isPresent ? u.cloneElement(o, { ref: s }) : null;
};
Fe.displayName = "Presence";
function Um(e) {
  const [t, n] = u.useState(), r = u.useRef(null), o = u.useRef(e), s = u.useRef("none"), a = e ? "mounted" : "unmounted", [i, c] = Gm(a, {
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
    const l = xn(r.current);
    s.current = i === "mounted" ? l : "none";
  }, [i]), ge(() => {
    const l = r.current, f = o.current;
    if (f !== e) {
      const h = s.current, p = xn(l);
      e ? c("MOUNT") : p === "none" || l?.display === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), ge(() => {
    if (t) {
      let l;
      const f = t.ownerDocument.defaultView ?? window, m = (p) => {
        const g = xn(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && g && (c("ANIMATION_END"), !o.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = xn(r.current));
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
function xn(e) {
  return e?.animationName || "none";
}
function qm(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function Xm(e) {
  const t = /* @__PURE__ */ Km(e), n = u.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = u.Children.toArray(s), c = i.find(Qm);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Km(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const a = eh(o), i = Jm(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ot(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Zm = /* @__PURE__ */ Symbol("radix.slottable");
function Qm(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Zm;
}
function Jm(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function eh(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var th = u[" useInsertionEffect ".trim().toString()] || ge;
function Nt({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, a] = nh({
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
      if (i) {
        const m = rh(f) ? f(e) : f;
        m !== e && a.current?.(m);
      } else
        s(f);
    },
    [i, e, s, a]
  );
  return [c, l];
}
function nh({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = u.useState(e), o = u.useRef(n), s = u.useRef(t);
  return th(() => {
    s.current = t;
  }, [t]), u.useEffect(() => {
    o.current !== n && (s.current?.(n), o.current = n);
  }, [n, o]), [n, r, s];
}
function rh(e) {
  return typeof e == "function";
}
var oh = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, It = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Sn = {}, Mr = 0, Ka = function(e) {
  return e && (e.host || Ka(e.parentNode));
}, sh = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ka(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ah = function(e, t, n, r) {
  var o = sh(t, Array.isArray(e) ? e : [e]);
  Sn[n] || (Sn[n] = /* @__PURE__ */ new WeakMap());
  var s = Sn[n], a = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(m) {
    !m || i.has(m) || (i.add(m), l(m.parentNode));
  };
  o.forEach(l);
  var f = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (i.has(h))
        f(h);
      else
        try {
          var p = h.getAttribute(r), y = p !== null && p !== "false", g = (It.get(h) || 0) + 1, b = (s.get(h) || 0) + 1;
          It.set(h, g), s.set(h, b), a.push(h), g === 1 && y && wn.set(h, !0), b === 1 && h.setAttribute(n, "true"), y || h.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", h, v);
        }
    });
  };
  return f(t), i.clear(), Mr++, function() {
    a.forEach(function(m) {
      var h = It.get(m) - 1, p = s.get(m) - 1;
      It.set(m, h), s.set(m, p), h || (wn.has(m) || m.removeAttribute(r), wn.delete(m)), p || m.removeAttribute(n);
    }), Mr--, Mr || (It = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), Sn = {});
  };
}, ho = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = oh(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), ah(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, $e = function() {
  return $e = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, $e.apply(this, arguments);
};
function Za(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ih(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var En = "right-scroll-bar-position", Pn = "width-before-scroll-bar", ch = "with-scroll-bars-hidden", lh = "--removed-body-scroll-bar-size";
function Er(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function dh(e, t) {
  var n = Ie(function() {
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
var uh = typeof window < "u" ? u.useLayoutEffect : u.useEffect, ps = /* @__PURE__ */ new WeakMap();
function fh(e, t) {
  var n = dh(null, function(r) {
    return e.forEach(function(o) {
      return Er(o, r);
    });
  });
  return uh(function() {
    var r = ps.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), a = n.current;
      o.forEach(function(i) {
        s.has(i) || Er(i, null);
      }), s.forEach(function(i) {
        o.has(i) || Er(i, a);
      });
    }
    ps.set(n, e);
  }, [e]), n;
}
function mh(e) {
  return e;
}
function hh(e, t) {
  t === void 0 && (t = mh);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, r);
      return n.push(a), function() {
        n = n.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(s);
      }
      n = {
        push: function(i) {
          return s(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var a = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(s), a = n;
      }
      var c = function() {
        var f = a;
        a = [], f.forEach(s);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(f) {
          a.push(f), l();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return o;
}
function ph(e) {
  e === void 0 && (e = {});
  var t = hh(null);
  return t.options = $e({ async: !0, ssr: !1 }, e), t;
}
var Qa = function(e) {
  var t = e.sideCar, n = Za(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return u.createElement(r, $e({}, n));
};
Qa.isSideCarExport = !0;
function gh(e, t) {
  return e.useMedium(t), Qa;
}
var Ja = ph(), Pr = function() {
}, Zn = u.forwardRef(function(e, t) {
  var n = u.useRef(null), r = u.useState({
    onScrollCapture: Pr,
    onWheelCapture: Pr,
    onTouchMoveCapture: Pr
  }), o = r[0], s = r[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, f = e.enabled, m = e.shards, h = e.sideCar, p = e.noRelative, y = e.noIsolation, g = e.inert, b = e.allowPinchZoom, v = e.as, x = v === void 0 ? "div" : v, w = e.gapMode, S = Za(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = h, k = fh([n, t]), M = $e($e({}, S), o);
  return u.createElement(
    u.Fragment,
    null,
    f && u.createElement(C, { sideCar: Ja, removeScrollBar: l, shards: m, noRelative: p, noIsolation: y, inert: g, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: w }),
    a ? u.cloneElement(u.Children.only(i), $e($e({}, M), { ref: k })) : u.createElement(x, $e({}, M, { className: c, ref: k }), i)
  );
});
Zn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Zn.classNames = {
  fullWidth: Pn,
  zeroRight: En
};
var bh = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function yh() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = bh();
  return t && e.setAttribute("nonce", t), e;
}
function vh(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function xh(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var wh = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = yh()) && (vh(t, n), xh(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Sh = function() {
  var e = wh();
  return function(t, n) {
    u.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ei = function() {
  var e = Sh(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, kh = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Dr = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ch = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Dr(n), Dr(r), Dr(o)];
}, Nh = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kh;
  var t = Ch(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Mh = ei(), Bt = "data-scroll-locked", Eh = function(e, t, n, r) {
  var o = e.left, s = e.top, a = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(ch, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Bt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(En, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Pn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(En, " .").concat(En, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Pn, " .").concat(Pn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Bt, `] {
    `).concat(lh, ": ").concat(i, `px;
  }
`);
}, gs = function() {
  var e = parseInt(document.body.getAttribute(Bt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Ph = function() {
  u.useEffect(function() {
    return document.body.setAttribute(Bt, (gs() + 1).toString()), function() {
      var e = gs() - 1;
      e <= 0 ? document.body.removeAttribute(Bt) : document.body.setAttribute(Bt, e.toString());
    };
  }, []);
}, Dh = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Ph();
  var s = u.useMemo(function() {
    return Nh(o);
  }, [o]);
  return u.createElement(Mh, { styles: Eh(s, !t, o, n ? "" : "!important") });
}, Yr = !1;
if (typeof window < "u")
  try {
    var kn = Object.defineProperty({}, "passive", {
      get: function() {
        return Yr = !0, !0;
      }
    });
    window.addEventListener("test", kn, kn), window.removeEventListener("test", kn, kn);
  } catch {
    Yr = !1;
  }
var _t = Yr ? { passive: !1 } : !1, Oh = function(e) {
  return e.tagName === "TEXTAREA";
}, ti = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Oh(e) && n[t] === "visible")
  );
}, Th = function(e) {
  return ti(e, "overflowY");
}, Rh = function(e) {
  return ti(e, "overflowX");
}, bs = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ni(e, r);
    if (o) {
      var s = ri(e, r), a = s[1], i = s[2];
      if (a > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ah = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ih = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ni = function(e, t) {
  return e === "v" ? Th(t) : Rh(t);
}, ri = function(e, t) {
  return e === "v" ? Ah(t) : Ih(t);
}, _h = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Wh = function(e, t, n, r, o) {
  var s = _h(e, window.getComputedStyle(t).direction), a = s * r, i = n.target, c = t.contains(i), l = !1, f = a > 0, m = 0, h = 0;
  do {
    if (!i)
      break;
    var p = ri(e, i), y = p[0], g = p[1], b = p[2], v = g - b - s * y;
    (y || v) && ni(e, i) && (m += v, h += y);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (f && Math.abs(m) < 1 || !f && Math.abs(h) < 1) && (l = !0), l;
}, Cn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ys = function(e) {
  return [e.deltaX, e.deltaY];
}, vs = function(e) {
  return e && "current" in e ? e.current : e;
}, Fh = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Lh = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, zh = 0, Wt = [];
function $h(e) {
  var t = u.useRef([]), n = u.useRef([0, 0]), r = u.useRef(), o = u.useState(zh++)[0], s = u.useState(ei)[0], a = u.useRef(e);
  u.useEffect(function() {
    a.current = e;
  }, [e]), u.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = ih([e.lockRef.current], (e.shards || []).map(vs), !0).filter(Boolean);
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
      return !a.current.allowPinchZoom;
    var v = Cn(g), x = n.current, w = "deltaX" in g ? g.deltaX : x[0] - v[0], S = "deltaY" in g ? g.deltaY : x[1] - v[1], C, k = g.target, M = Math.abs(w) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && M === "h" && k.type === "range")
      return !1;
    var N = window.getSelection(), D = N && N.anchorNode, R = D ? D === k || D.contains(k) : !1;
    if (R)
      return !1;
    var F = bs(M, k);
    if (!F)
      return !0;
    if (F ? C = M : (C = M === "v" ? "h" : "v", F = bs(M, k)), !F)
      return !1;
    if (!r.current && "changedTouches" in g && (w || S) && (r.current = C), !C)
      return !0;
    var Y = r.current || C;
    return Wh(Y, b, g, Y === "h" ? w : S);
  }, []), c = u.useCallback(function(g) {
    var b = g;
    if (!(!Wt.length || Wt[Wt.length - 1] !== s)) {
      var v = "deltaY" in b ? ys(b) : Cn(b), x = t.current.filter(function(C) {
        return C.name === b.type && (C.target === b.target || b.target === C.shadowParent) && Fh(C.delta, v);
      })[0];
      if (x && x.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!x) {
        var w = (a.current.shards || []).map(vs).filter(Boolean).filter(function(C) {
          return C.contains(b.target);
        }), S = w.length > 0 ? i(b, w[0]) : !a.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = u.useCallback(function(g, b, v, x) {
    var w = { name: g, delta: b, target: v, should: x, shadowParent: Bh(v) };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== w;
      });
    }, 1);
  }, []), f = u.useCallback(function(g) {
    n.current = Cn(g), r.current = void 0;
  }, []), m = u.useCallback(function(g) {
    l(g.type, ys(g), g.target, i(g, e.lockRef.current));
  }, []), h = u.useCallback(function(g) {
    l(g.type, Cn(g), g.target, i(g, e.lockRef.current));
  }, []);
  u.useEffect(function() {
    return Wt.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, _t), document.addEventListener("touchmove", c, _t), document.addEventListener("touchstart", f, _t), function() {
      Wt = Wt.filter(function(g) {
        return g !== s;
      }), document.removeEventListener("wheel", c, _t), document.removeEventListener("touchmove", c, _t), document.removeEventListener("touchstart", f, _t);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return u.createElement(
    u.Fragment,
    null,
    y ? u.createElement(s, { styles: Lh(o) }) : null,
    p ? u.createElement(Dh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Bh(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Hh = gh(Ja, $h);
var Qn = u.forwardRef(function(e, t) {
  return u.createElement(Zn, $e({}, e, { ref: t, sideCar: Hh }));
});
Qn.classNames = Zn.classNames;
var Jn = "Popover", [oi] = rt(Jn, [
  Xn
]), un = Xn(), [Yh, pt] = oi(Jn), si = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !1
  } = e, i = un(t), c = u.useRef(null), [l, f] = u.useState(!1), [m, h] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Jn
  });
  return /* @__PURE__ */ d(Ua, { ...i, children: /* @__PURE__ */ d(
    Yh,
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
      modal: a,
      children: n
    }
  ) });
};
si.displayName = Jn;
var ai = "PopoverAnchor", ii = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pt(ai, n), s = un(n), { onCustomAnchorAdd: a, onCustomAnchorRemove: i } = o;
    return u.useEffect(() => (a(), () => i()), [a, i]), /* @__PURE__ */ d(mo, { ...s, ...r, ref: t });
  }
);
ii.displayName = ai;
var ci = "PopoverTrigger", li = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pt(ci, n), s = un(n), a = te(t, o.triggerRef), i = /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": hi(o.open),
        ...r,
        ref: a,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ d(mo, { asChild: !0, ...s, children: i });
  }
);
li.displayName = ci;
var po = "PopoverPortal", [Vh, jh] = oi(po, {
  forceMount: void 0
}), di = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, s = pt(po, t);
  return /* @__PURE__ */ d(Vh, { scope: t, forceMount: n, children: /* @__PURE__ */ d(Fe, { present: n || s.open, children: /* @__PURE__ */ d(Kn, { asChild: !0, container: o, children: r }) }) });
};
di.displayName = po;
var Vt = "PopoverContent", ui = u.forwardRef(
  (e, t) => {
    const n = jh(Vt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, s = pt(Vt, e.__scopePopover);
    return /* @__PURE__ */ d(Fe, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d(Uh, { ...o, ref: t }) : /* @__PURE__ */ d(qh, { ...o, ref: t }) });
  }
);
ui.displayName = Vt;
var Gh = /* @__PURE__ */ Xm("PopoverContent.RemoveScroll"), Uh = u.forwardRef(
  (e, t) => {
    const n = pt(Vt, e.__scopePopover), r = u.useRef(null), o = te(t, r), s = u.useRef(!1);
    return u.useEffect(() => {
      const a = r.current;
      if (a) return ho(a);
    }, []), /* @__PURE__ */ d(Qn, { as: Gh, allowPinchZoom: !0, children: /* @__PURE__ */ d(
      fi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: B(
          e.onPointerDownOutside,
          (a) => {
            const i = a.detail.originalEvent, c = i.button === 0 && i.ctrlKey === !0, l = i.button === 2 || c;
            s.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: B(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), qh = u.forwardRef(
  (e, t) => {
    const n = pt(Vt, e.__scopePopover), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d(
      fi,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), fi = u.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: a,
      onEscapeKeyDown: i,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: f,
      ...m
    } = e, h = pt(Vt, n), p = un(n);
    return ro(), /* @__PURE__ */ d(
      Vn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ d(
          Yn,
          {
            asChild: !0,
            disableOutsidePointerEvents: a,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ d(
              qa,
              {
                "data-state": hi(h.open),
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
), mi = "PopoverClose", Xh = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = pt(mi, n);
    return /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Xh.displayName = mi;
var Kh = "PopoverArrow", Zh = u.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = un(n);
    return /* @__PURE__ */ d(Xa, { ...o, ...r, ref: t });
  }
);
Zh.displayName = Kh;
function hi(e) {
  return e ? "open" : "closed";
}
var Qh = si, Jh = ii, ep = li, tp = di, pi = ui;
const er = Qh, tr = ep, Fx = Jh, fn = u.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ d(tp, { children: /* @__PURE__ */ d(
  pi,
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
fn.displayName = pi.displayName;
const np = [
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
function rp({
  value: e = "#f59e0b",
  onChange: t,
  presets: n = np,
  label: r,
  error: o,
  helperText: s,
  disabled: a,
  className: i
}) {
  const c = u.useId(), [l, f] = u.useState(e);
  u.useEffect(() => {
    f(e);
  }, [e]);
  function m(p) {
    const y = p.target.value;
    f(y), /^#[0-9a-fA-F]{6}$/.test(y) && t?.(y);
  }
  function h(p) {
    f(p), t?.(p);
  }
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ d("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(er, { children: [
      /* @__PURE__ */ d(tr, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: c,
          type: "button",
          disabled: a,
          className: P(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            o && "border-error focus:ring-error focus:border-error",
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
            /* @__PURE__ */ d(Ad, { className: "ml-auto h-4 w-4 text-text-muted shrink-0" })
          ]
        }
      ) }),
      /* @__PURE__ */ d(fn, { className: "w-64", align: "start", children: /* @__PURE__ */ E("div", { className: "space-y-3", children: [
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
                f(p.target.value), t?.(p.target.value);
              },
              className: "h-10 w-10 rounded-lg border border-border cursor-pointer bg-transparent p-0.5",
              disabled: a
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
              disabled: a
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
            disabled: a
          },
          p
        )) })
      ] }) })
    ] }),
    o && /* @__PURE__ */ d("p", { className: "text-xs text-error-fg", children: o }),
    s && !o && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: s })
  ] });
}
rp.displayName = "ColorPicker";
function op({
  options: e,
  value: t,
  onChange: n,
  placeholder: r = "Seleziona...",
  searchPlaceholder: o = "Cerca...",
  emptyMessage: s = "Nessun risultato.",
  label: a,
  error: i,
  helperText: c,
  disabled: l,
  className: f,
  clearable: m = !1
}) {
  const h = u.useId(), [p, y] = u.useState(!1), [g, b] = u.useState(""), v = u.useRef(null), x = u.useMemo(() => {
    if (!g) return e;
    const k = g.toLowerCase();
    return e.filter((M) => M.label.toLowerCase().includes(k));
  }, [e, g]), w = e.find((k) => k.value === t);
  function S(k) {
    n?.(k === t ? "" : k), y(!1), b("");
  }
  function C(k) {
    k.stopPropagation(), n?.("");
  }
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    a && /* @__PURE__ */ d("label", { htmlFor: h, className: "block text-sm font-medium text-text-base", children: a }),
    /* @__PURE__ */ E(er, { open: p, onOpenChange: (k) => {
      y(k), k || b("");
    }, children: [
      /* @__PURE__ */ d(tr, { asChild: !0, children: /* @__PURE__ */ E(
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
            i && "border-error focus:ring-error focus:border-error",
            f
          ),
          children: [
            /* @__PURE__ */ d("span", { className: "truncate", children: w?.label ?? r }),
            /* @__PURE__ */ E("div", { className: "flex items-center gap-1 shrink-0", children: [
              m && t && /* @__PURE__ */ d(
                Hn,
                {
                  className: "h-3.5 w-3.5 text-text-muted hover:text-text-base cursor-pointer",
                  onClick: C
                }
              ),
              /* @__PURE__ */ d(na, { className: "h-4 w-4 text-text-muted" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ E(fn, { className: "w-[var(--radix-popover-trigger-width)] p-0", align: "start", children: [
        /* @__PURE__ */ E("div", { className: "flex items-center border-b border-border px-3", children: [
          /* @__PURE__ */ d(sa, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ d(
            "input",
            {
              ref: v,
              value: g,
              onChange: (k) => b(k.target.value),
              placeholder: o,
              className: "flex-1 bg-transparent py-3 pl-2 text-sm outline-none placeholder:text-text-muted",
              autoFocus: !0
            }
          )
        ] }),
        /* @__PURE__ */ d("div", { className: "max-h-60 overflow-y-auto p-1", children: x.length === 0 ? /* @__PURE__ */ d("div", { className: "py-6 text-center text-sm text-text-muted", children: s }) : x.map((k) => /* @__PURE__ */ E(
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
              /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: k.value === t && /* @__PURE__ */ d(cn, { className: "h-4 w-4 text-databeez-primary" }) }),
              k.label
            ]
          },
          k.value
        )) })
      ] })
    ] }),
    i && /* @__PURE__ */ d("p", { className: "text-xs text-error-fg", children: i }),
    c && !i && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: c })
  ] });
}
op.displayName = "Combobox";
const sp = u.lazy(async () => {
  const [{ Prism: e }, { oneDark: t }] = await Promise.all([
    import("./index-DXRejwmT.mjs").then((n) => n.ca),
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
function Lx({
  code: e,
  language: t = "text",
  copyable: n = !0,
  className: r,
  ...o
}) {
  const [s, a] = u.useState(!1), i = async () => {
    await navigator.clipboard.writeText(e), a(!0), setTimeout(() => a(!1), 2e3);
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
              children: s ? /* @__PURE__ */ E(Ge, { children: [
                /* @__PURE__ */ d(cn, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ d("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ E(Ge, { children: [
                /* @__PURE__ */ d(ra, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ d("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ d(u.Suspense, { fallback: /* @__PURE__ */ d("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ d(sp, { language: t, children: e }) })
      ]
    }
  );
}
function ap({
  text: e,
  label: t,
  resetDelay: n = 2e3,
  className: r,
  ...o
}) {
  const [s, a] = u.useState(!1);
  return /* @__PURE__ */ E(
    "button",
    {
      type: "button",
      onClick: async (c) => {
        c.stopPropagation(), await navigator.clipboard.writeText(e), a(!0), setTimeout(() => a(!1), n);
      },
      "aria-label": s ? "Copiato!" : `Copia${t ? ` ${t}` : ""}`,
      className: P(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        s ? "text-success-fg" : "text-text-muted hover:text-text-base",
        r
      ),
      ...o,
      children: [
        s ? /* @__PURE__ */ d(cn, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ d(ra, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ d("span", { children: s ? "Copiato!" : t })
      ]
    }
  );
}
const xs = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-info-bg border border-info-border", ws = "text-info-fg shrink-0", Ss = "text-[9px] font-medium text-info-fg leading-none", ks = "inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-accent-bg border border-accent-border", Cs = "text-accent-fg shrink-0", Ns = "text-[9px] font-medium text-accent-fg leading-none";
function zx({ source: e }) {
  return e === "mixed" ? /* @__PURE__ */ E("span", { className: "inline-flex items-center gap-1.5", children: [
    /* @__PURE__ */ E("span", { className: xs, children: [
      /* @__PURE__ */ d($o, { size: 9, className: ws }),
      /* @__PURE__ */ d("span", { className: Ss, children: "Dati reali" })
    ] }),
    /* @__PURE__ */ E("span", { className: ks, children: [
      /* @__PURE__ */ d(Ho, { size: 9, className: Cs }),
      /* @__PURE__ */ d("span", { className: Ns, children: "Simulato" })
    ] })
  ] }) : e === "simulated" ? /* @__PURE__ */ E("span", { className: ks, children: [
    /* @__PURE__ */ d(Ho, { size: 9, className: Cs }),
    /* @__PURE__ */ d("span", { className: Ns, children: "Simulato" })
  ] }) : /* @__PURE__ */ E("span", { className: xs, children: [
    /* @__PURE__ */ d($o, { size: 9, className: ws }),
    /* @__PURE__ */ d("span", { className: Ss, children: "Dati reali" })
  ] });
}
const Tt = "—", Qt = " ", rn = "−", Ms = /* @__PURE__ */ new Map();
function on(e, t) {
  const n = `${e}-${t}`;
  let r = Ms.get(n);
  return r || (r = new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    useGrouping: "always"
  }), Ms.set(n, r)), r;
}
function nr(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function rr(e, t) {
  return Math.round(e * 10 ** t) === 0;
}
function Or(e, t = 0) {
  if (!nr(e)) return Tt;
  const n = Math.abs(e);
  return (e < 0 && !rr(n, t) ? rn : "") + on(t, t).format(n);
}
function $x(e, t = {}) {
  if (!nr(e)) return Tt;
  const { cents: n = !1, compact: r = !1 } = t, o = Math.abs(e);
  if (r && o >= 1e6) {
    const i = o / 1e6, c = i >= 100 ? 0 : 1, l = on(c, c).format(i).replace(/,0$/, "");
    return `${e < 0 ? rn + Qt : ""}€${Qt}${l}${Qt}mln`;
  }
  const s = n ? 2 : 0;
  return `${e < 0 && !rr(o, s) ? rn + Qt : ""}€${Qt}${on(s, s).format(o)}`;
}
function Bx(e, t = {}) {
  if (!nr(e)) return Tt;
  const { fractionDigits: n = 1, fixed: r = !1 } = t, o = r ? n : 0, s = Math.abs(e);
  return `${e < 0 && !rr(s, n) ? rn : ""}${on(o, n).format(s)}%`;
}
function ip(e, t = 0) {
  if (!nr(e)) return Tt;
  const n = Math.abs(e);
  return (rr(n, t) ? "" : e > 0 ? "+" : rn) + on(t, t).format(n);
}
const cp = /^(\d{4})-(\d{2})-(\d{2})$/;
function gi(e) {
  if (e == null || e === "") return null;
  let t;
  if (e instanceof Date)
    t = e;
  else {
    const n = cp.exec(e);
    if (t = n ? new Date(Number(n[1]), Number(n[2]) - 1, Number(n[3])) : new Date(e), n && (t.getMonth() !== Number(n[2]) - 1 || t.getDate() !== Number(n[3]))) return null;
  }
  return Number.isNaN(t.getTime()) ? null : t;
}
const Wn = (e) => String(e).padStart(2, "0");
function lp(e) {
  const t = gi(e);
  return t ? `${Wn(t.getDate())}/${Wn(t.getMonth() + 1)}/${t.getFullYear()}` : Tt;
}
function Hx(e) {
  const t = gi(e);
  return t ? `${lp(t)}, ${Wn(t.getHours())}:${Wn(t.getMinutes())}` : Tt;
}
function dp(e, t = "up-is-good", n = 0) {
  if (typeof e != "number" || !Number.isFinite(e) || Math.abs(e) <= n)
    return { direction: "flat", tone: "neutral" };
  const r = e > 0 ? "up" : "down";
  return { direction: r, tone: r === "up" == (t === "up-is-good") ? "positive" : "negative" };
}
const Es = {
  positive: "text-trend-positive",
  negative: "text-trend-negative",
  neutral: "text-trend-neutral"
}, up = {
  up: "in aumento",
  down: "in calo",
  flat: "invariato"
}, fp = { up: Qs, down: Zs, flat: oa };
function mp({
  value: e,
  polarity: t = "up-is-good",
  threshold: n = 0,
  format: r,
  suffix: o = "",
  size: s = "sm",
  className: a,
  ...i
}) {
  const c = P(
    "inline-flex items-center gap-0.5 font-medium tabular-nums",
    s === "sm" ? "text-xs" : "text-sm",
    a
  );
  if (typeof e != "number" || !Number.isFinite(e))
    return /* @__PURE__ */ d("span", { className: P(c, Es.neutral), ...i, children: Tt });
  const l = r ? n : Math.max(n, Math.abs(e) < 0.5 ? Math.abs(e) : 0), { direction: f, tone: m } = dp(e, t, l), h = r ?? ((g) => ip(g)), p = fp[f], y = s === "sm" ? "h-3 w-3" : "h-3.5 w-3.5";
  return /* @__PURE__ */ E("span", { className: P(c, Es[m]), ...i, children: [
    /* @__PURE__ */ d(p, { className: y, "aria-hidden": "true" }),
    /* @__PURE__ */ E("span", { className: "sr-only", children: [
      up[f],
      m === "positive" ? ", positivo" : m === "negative" ? ", negativo" : "",
      ":",
      " "
    ] }),
    /* @__PURE__ */ E("span", { children: [
      h(e),
      o
    ] })
  ] });
}
function Yx({ width: e, height: t = 48, className: n, variant: r = "color" }) {
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
function hp(e, t, n = "long") {
  return new Intl.DateTimeFormat("en-US", {
    // Enforces engine to render the time. Without the option JavaScriptCore omits it.
    hour: "numeric",
    timeZone: e,
    timeZoneName: n
  }).format(t).split(/\s/g).slice(2).join(" ");
}
const pp = {}, Jt = {};
function St(e, t) {
  try {
    const r = (pp[e] ||= new Intl.DateTimeFormat("en-US", {
      timeZone: e,
      timeZoneName: "longOffset"
    }).format)(t).split("GMT")[1];
    return r in Jt ? Jt[r] : Ps(r, r.split(":"));
  } catch {
    if (e in Jt) return Jt[e];
    const n = e?.match(gp);
    return n ? Ps(e, n.slice(1)) : NaN;
  }
}
const gp = /([+-]\d\d):?(\d\d)?/;
function Ps(e, t) {
  const n = +(t[0] || 0), r = +(t[1] || 0), o = +(t[2] || 0) / 60;
  return Jt[e] = n * 60 + r > 0 ? n * 60 + r + o : n * 60 - r - o;
}
class Ve extends Date {
  //#region static
  constructor(...t) {
    super(), t.length > 1 && typeof t[t.length - 1] == "string" && (this.timeZone = t.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(St(this.timeZone, this)) ? this.setTime(NaN) : t.length ? typeof t[0] == "number" && (t.length === 1 || t.length === 2 && typeof t[1] != "number") ? this.setTime(t[0]) : typeof t[0] == "string" ? this.setTime(+new Date(t[0])) : t[0] instanceof Date ? this.setTime(+t[0]) : (this.setTime(+new Date(...t)), bi(this), Vr(this)) : this.setTime(Date.now());
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
    const t = -St(this.timeZone, this);
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  }
  //#endregion
  //#region time
  setTime(t) {
    return Date.prototype.setTime.apply(this, arguments), Vr(this), +this;
  }
  //#endregion
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new Ve(+new Date(t), this.timeZone);
  }
  //#endregion
}
const Ds = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
  if (!Ds.test(e)) return;
  const t = e.replace(Ds, "$1UTC");
  Ve.prototype[t] && (e.startsWith("get") ? Ve.prototype[e] = function() {
    return this.internal[t]();
  } : (Ve.prototype[e] = function() {
    return Date.prototype[t].apply(this.internal, arguments), bp(this), +this;
  }, Ve.prototype[t] = function() {
    return Date.prototype[t].apply(this, arguments), Vr(this), +this;
  }));
});
function Vr(e) {
  e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-St(e.timeZone, e) * 60));
}
function bp(e) {
  Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), bi(e);
}
function bi(e) {
  const t = St(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
  r.setUTCHours(r.getUTCHours() - 1);
  const o = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), s = -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), a = o - s, i = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
  a && i && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
  const c = o - n;
  c && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + c);
  const l = /* @__PURE__ */ new Date(+e);
  l.setUTCSeconds(0);
  const f = o > 0 ? l.getSeconds() : (l.getSeconds() - 60) % 60, m = Math.round(-(St(e.timeZone, e) * 60)) % 60;
  (m || f) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + m), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + m + f));
  const h = St(e.timeZone, e), p = h > 0 ? Math.floor(h) : Math.ceil(h), g = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - p, b = p !== n, v = g - c;
  if (b && v) {
    Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + v);
    const x = St(e.timeZone, e), w = x > 0 ? Math.floor(x) : Math.ceil(x), S = p - w;
    S && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + S), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + S));
  }
}
class ye extends Ve {
  //#region static
  static tz(t, ...n) {
    return n.length ? new ye(...n, t) : new ye(Date.now(), t);
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
    return `${t?.slice(0, -1)} ${r} ${n} ${o}`;
  }
  toTimeString() {
    const t = this.internal.toUTCString().split(" ")[4], [n, r, o] = this.tzComponents();
    return `${t} GMT${n}${r}${o} (${hp(this.timeZone, this)})`;
  }
  toLocaleString(t, n) {
    return Date.prototype.toLocaleString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleDateString(t, n) {
    return Date.prototype.toLocaleDateString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
    });
  }
  toLocaleTimeString(t, n) {
    return Date.prototype.toLocaleTimeString.call(this, t, {
      ...n,
      timeZone: n?.timeZone || this.timeZone
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
    return new ye(+this, t);
  }
  //#region date-fns integration
  [/* @__PURE__ */ Symbol.for("constructDateFrom")](t) {
    return new ye(+new Date(t), this.timeZone);
  }
  //#endregion
}
const yi = 6048e5, yp = 864e5, Os = /* @__PURE__ */ Symbol.for("constructDateFrom");
function me(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && Os in e ? e[Os](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function ae(e, t) {
  return me(t || e, e);
}
function vi(e, t, n) {
  const r = ae(e, n?.in);
  return isNaN(t) ? me(e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
function xi(e, t, n) {
  const r = ae(e, n?.in);
  if (isNaN(t)) return me(e, NaN);
  if (!t)
    return r;
  const o = r.getDate(), s = me(e, r.getTime());
  s.setMonth(r.getMonth() + t + 1, 0);
  const a = s.getDate();
  return o >= a ? s : (r.setFullYear(
    s.getFullYear(),
    s.getMonth(),
    o
  ), r);
}
let vp = {};
function mn() {
  return vp;
}
function ft(e, t) {
  const n = mn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ae(e, t?.in), s = o.getDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - a), o.setHours(0, 0, 0, 0), o;
}
function sn(e, t) {
  return ft(e, { ...t, weekStartsOn: 1 });
}
function wi(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear(), o = me(n, 0);
  o.setFullYear(r + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const s = sn(o), a = me(n, 0);
  a.setFullYear(r, 0, 4), a.setHours(0, 0, 0, 0);
  const i = sn(a);
  return n.getTime() >= s.getTime() ? r + 1 : n.getTime() >= i.getTime() ? r : r - 1;
}
function Ts(e) {
  const t = ae(e), n = new Date(
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
function Rt(e, ...t) {
  const n = me.bind(
    null,
    e || t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function an(e, t) {
  const n = ae(e, t?.in);
  return n.setHours(0, 0, 0, 0), n;
}
function go(e, t, n) {
  const [r, o] = Rt(
    n?.in,
    e,
    t
  ), s = an(r), a = an(o), i = +s - Ts(s), c = +a - Ts(a);
  return Math.round((i - c) / yp);
}
function xp(e, t) {
  const n = wi(e, t), r = me(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), sn(r);
}
function wp(e, t, n) {
  return vi(e, t * 7, n);
}
function Sp(e, t, n) {
  return xi(e, t * 12, n);
}
function kp(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const s = ae(o, r);
    (!n || n < s || isNaN(+s)) && (n = s);
  }), me(r, n || NaN);
}
function Cp(e, t) {
  let n, r = t?.in;
  return e.forEach((o) => {
    !r && typeof o == "object" && (r = me.bind(null, o));
    const s = ae(o, r);
    (!n || n > s || isNaN(+s)) && (n = s);
  }), me(r, n || NaN);
}
function Np(e, t, n) {
  const [r, o] = Rt(
    n?.in,
    e,
    t
  );
  return +an(r) == +an(o);
}
function Si(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Mp(e) {
  return !(!Si(e) && typeof e != "number" || isNaN(+ae(e)));
}
function ki(e, t, n) {
  const [r, o] = Rt(
    n?.in,
    e,
    t
  ), s = r.getFullYear() - o.getFullYear(), a = r.getMonth() - o.getMonth();
  return s * 12 + a;
}
function Ep(e, t) {
  const n = ae(e, t?.in), r = n.getMonth();
  return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
function Ci(e, t) {
  const [n, r] = Rt(e, t.start, t.end);
  return { start: n, end: r };
}
function Pp(e, t) {
  const { start: n, end: r } = Ci(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setDate(1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(me(n, a)), a.setMonth(a.getMonth() + i);
  return o ? c.reverse() : c;
}
function Dp(e, t) {
  const n = ae(e, t?.in);
  return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
function Op(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear();
  return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function Ni(e, t) {
  const n = ae(e, t?.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Tp(e, t) {
  const { start: n, end: r } = Ci(t?.in, e);
  let o = +n > +r;
  const s = o ? +n : +r, a = o ? r : n;
  a.setHours(0, 0, 0, 0), a.setMonth(0, 1);
  let i = 1;
  const c = [];
  for (; +a <= s; )
    c.push(me(n, a)), a.setFullYear(a.getFullYear() + i);
  return o ? c.reverse() : c;
}
function Mi(e, t) {
  const n = mn(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, o = ae(e, t?.in), s = o.getDay(), a = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + a), o.setHours(23, 59, 59, 999), o;
}
function Rp(e, t) {
  return Mi(e, { ...t, weekStartsOn: 1 });
}
const Ap = {
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
}, Ip = (e, t, n) => {
  let r;
  const o = Ap[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ht(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const _p = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Wp = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Fp = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Lp = {
  date: Ht({
    formats: _p,
    defaultWidth: "full"
  }),
  time: Ht({
    formats: Wp,
    defaultWidth: "full"
  }),
  dateTime: Ht({
    formats: Fp,
    defaultWidth: "full"
  })
}, zp = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, $p = (e, t, n, r) => zp[e];
function Be(e) {
  return (t, n) => {
    const r = n?.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, i = n?.width ? String(n.width) : a;
      o = e.formattingValues[i] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, i = n?.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[a];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const Bp = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Hp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Yp = {
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
}, Vp = {
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
}, jp = {
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
}, Gp = {
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
}, Up = (e, t) => {
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
}, qp = {
  ordinalNumber: Up,
  era: Be({
    values: Bp,
    defaultWidth: "wide"
  }),
  quarter: Be({
    values: Hp,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Be({
    values: Yp,
    defaultWidth: "wide"
  }),
  day: Be({
    values: Vp,
    defaultWidth: "wide"
  }),
  dayPeriod: Be({
    values: jp,
    defaultWidth: "wide",
    formattingValues: Gp,
    defaultFormattingWidth: "wide"
  })
};
function He(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const a = s[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(i) ? Kp(i, (m) => m.test(a)) : (
      // [TODO] -- I challenge you to fix the type
      Xp(i, (m) => m.test(a))
    );
    let l;
    l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(l)
    ) : l;
    const f = t.slice(a.length);
    return { value: l, rest: f };
  };
}
function Xp(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Kp(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ei(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let a = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const i = t.slice(o.length);
    return { value: a, rest: i };
  };
}
const Zp = /^(\d+)(th|st|nd|rd)?/i, Qp = /\d+/i, Jp = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, eg = {
  any: [/^b/i, /^(a|c)/i]
}, tg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ng = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, rg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, og = {
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
}, sg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ag = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ig = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, cg = {
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
}, lg = {
  ordinalNumber: Ei({
    matchPattern: Zp,
    parsePattern: Qp,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: He({
    matchPatterns: Jp,
    defaultMatchWidth: "wide",
    parsePatterns: eg,
    defaultParseWidth: "any"
  }),
  quarter: He({
    matchPatterns: tg,
    defaultMatchWidth: "wide",
    parsePatterns: ng,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: He({
    matchPatterns: rg,
    defaultMatchWidth: "wide",
    parsePatterns: og,
    defaultParseWidth: "any"
  }),
  day: He({
    matchPatterns: sg,
    defaultMatchWidth: "wide",
    parsePatterns: ag,
    defaultParseWidth: "any"
  }),
  dayPeriod: He({
    matchPatterns: ig,
    defaultMatchWidth: "any",
    parsePatterns: cg,
    defaultParseWidth: "any"
  })
}, zt = {
  code: "en-US",
  formatDistance: Ip,
  formatLong: Lp,
  formatRelative: $p,
  localize: qp,
  match: lg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function dg(e, t) {
  const n = ae(e, t?.in);
  return go(n, Ni(n)) + 1;
}
function bo(e, t) {
  const n = ae(e, t?.in), r = +sn(n) - +xp(n);
  return Math.round(r / yi) + 1;
}
function Pi(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear(), o = mn(), s = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? o.firstWeekContainsDate ?? o.locale?.options?.firstWeekContainsDate ?? 1, a = me(t?.in || e, 0);
  a.setFullYear(r + 1, 0, s), a.setHours(0, 0, 0, 0);
  const i = ft(a, t), c = me(t?.in || e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const l = ft(c, t);
  return +n >= +i ? r + 1 : +n >= +l ? r : r - 1;
}
function ug(e, t) {
  const n = mn(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, o = Pi(e, t), s = me(t?.in || e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), ft(s, t);
}
function yo(e, t) {
  const n = ae(e, t?.in), r = +ft(n, t) - +ug(n, t);
  return Math.round(r / yi) + 1;
}
function se(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const it = {
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
}, Ft = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Rs = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
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
    return it.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Pi(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const a = s % 100;
      return se(a, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : se(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = wi(e);
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
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return se(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
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
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return se(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
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
        return it.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return se(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = yo(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : se(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = bo(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : se(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : it.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = dg(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : se(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(s);
      // Padded numerical value
      case "ee":
        return se(s, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(s);
      // Padded numerical value
      case "cc":
        return se(s, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
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
      // 2
      case "i":
        return String(o);
      // 02
      case "ii":
        return se(o, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
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
    switch (r === 12 ? o = Ft.noon : r === 0 ? o = Ft.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? o = Ft.evening : r >= 12 ? o = Ft.afternoon : r >= 4 ? o = Ft.morning : o = Ft.night, t) {
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
    return it.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : it.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : it.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : it.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return it.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Is(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return xt(r);
      // Hours and minutes with `:` delimiter
      default:
        return xt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Is(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return xt(r);
      // Hours and minutes with `:` delimiter
      default:
        return xt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + As(r, ":");
      default:
        return "GMT" + xt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + As(r, ":");
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
function As(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + se(s, 2);
}
function Is(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + se(Math.abs(e) / 60, 2) : xt(e, t);
}
function xt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = se(Math.trunc(r / 60), 2), s = se(r % 60, 2);
  return n + o + t + s;
}
const _s = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}, Di = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}, fg = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return _s(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", _s(r, t)).replace("{{time}}", Di(o, t));
}, mg = {
  p: Di,
  P: fg
}, hg = /^D+$/, pg = /^Y+$/, gg = ["D", "DD", "YY", "YYYY"];
function bg(e) {
  return hg.test(e);
}
function yg(e) {
  return pg.test(e);
}
function vg(e, t, n) {
  const r = xg(e, t, n);
  if (console.warn(r), gg.includes(e)) throw new RangeError(r);
}
function xg(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const wg = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sg = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kg = /^'([^]*?)'?$/, Cg = /''/g, Ng = /[a-zA-Z]/;
function Ze(e, t, n) {
  const r = mn(), o = n?.locale ?? r.locale ?? zt, s = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, a = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, i = ae(e, n?.in);
  if (!Mp(i))
    throw new RangeError("Invalid time value");
  let c = t.match(Sg).map((f) => {
    const m = f[0];
    if (m === "p" || m === "P") {
      const h = mg[m];
      return h(f, o.formatLong);
    }
    return f;
  }).join("").match(wg).map((f) => {
    if (f === "''")
      return { isToken: !1, value: "'" };
    const m = f[0];
    if (m === "'")
      return { isToken: !1, value: Mg(f) };
    if (Rs[m])
      return { isToken: !0, value: f };
    if (m.match(Ng))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: f };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(i, c));
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: a,
    locale: o
  };
  return c.map((f) => {
    if (!f.isToken) return f.value;
    const m = f.value;
    (!n?.useAdditionalWeekYearTokens && yg(m) || !n?.useAdditionalDayOfYearTokens && bg(m)) && vg(m, t, String(e));
    const h = Rs[m[0]];
    return h(i, m, o.localize, l);
  }).join("");
}
function Mg(e) {
  const t = e.match(kg);
  return t ? t[1].replace(Cg, "'") : e;
}
function Eg(e, t) {
  const n = ae(e, t?.in), r = n.getFullYear(), o = n.getMonth(), s = me(n, 0);
  return s.setFullYear(r, o + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
}
function Pg(e, t) {
  return ae(e, t?.in).getMonth();
}
function Dg(e, t) {
  return ae(e, t?.in).getFullYear();
}
function Og(e, t) {
  return +ae(e) > +ae(t);
}
function Tg(e, t) {
  return +ae(e) < +ae(t);
}
function Ws(e, t, n) {
  const [r, o] = Rt(
    n?.in,
    e,
    t
  );
  return +ft(r, n) == +ft(o, n);
}
function Rg(e, t, n) {
  const [r, o] = Rt(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
}
function Ag(e, t, n) {
  const [r, o] = Rt(
    n?.in,
    e,
    t
  );
  return r.getFullYear() === o.getFullYear();
}
function Ig(e, t, n) {
  const r = ae(e, n?.in), o = r.getFullYear(), s = r.getDate(), a = me(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = Eg(a);
  return r.setMonth(t, Math.min(s, i)), r;
}
function _g(e, t, n) {
  const r = ae(e, n?.in);
  return isNaN(+r) ? me(e, NaN) : (r.setFullYear(t), r);
}
const Fs = 5, Wg = 4;
function Fg(e, t) {
  const n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, o = t.addDays(e, -r + 1), s = t.addDays(o, Fs * 7 - 1);
  return t.getMonth(e) === t.getMonth(s) ? Fs : Wg;
}
function Oi(e, t) {
  const n = t.startOfMonth(e), r = n.getDay();
  return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
function Lg(e, t) {
  const n = Oi(e, t), r = Fg(e, t);
  return t.addDays(n, r * 7 - 1);
}
const zg = {
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
}, $g = (e, t, n) => {
  let r;
  const o = zg[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "tra " + r : r + " fa" : r;
}, Bg = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Hg = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Yg = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Vg = {
  date: Ht({
    formats: Bg,
    defaultWidth: "full"
  }),
  time: Ht({
    formats: Hg,
    defaultWidth: "full"
  }),
  dateTime: Ht({
    formats: Yg,
    defaultWidth: "full"
  })
}, vo = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function jg(e) {
  return e === 0 ? "'domenica scorsa alle' p" : "'" + vo[e] + " scorso alle' p";
}
function Ls(e) {
  return "'" + vo[e] + " alle' p";
}
function Gg(e) {
  return e === 0 ? "'domenica prossima alle' p" : "'" + vo[e] + " prossimo alle' p";
}
const Ug = {
  lastWeek: (e, t, n) => {
    const r = e.getDay();
    return Ws(e, t, n) ? Ls(r) : jg(r);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, t, n) => {
    const r = e.getDay();
    return Ws(e, t, n) ? Ls(r) : Gg(r);
  },
  other: "P"
}, qg = (e, t, n, r) => {
  const o = Ug[e];
  return typeof o == "function" ? o(t, n, r) : o;
}, Xg = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, Kg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Zg = {
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
}, Qg = {
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
}, Jg = {
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
}, eb = {
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
}, tb = (e, t) => {
  const n = Number(e);
  return String(n);
}, nb = {
  ordinalNumber: tb,
  era: Be({
    values: Xg,
    defaultWidth: "wide"
  }),
  quarter: Be({
    values: Kg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Be({
    values: Zg,
    defaultWidth: "wide"
  }),
  day: Be({
    values: Qg,
    defaultWidth: "wide"
  }),
  dayPeriod: Be({
    values: Jg,
    defaultWidth: "wide",
    formattingValues: eb,
    defaultFormattingWidth: "wide"
  })
}, rb = /^(\d+)(º)?/i, ob = /\d+/i, sb = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, ab = {
  any: [/^a/i, /^(d|e)/i]
}, ib = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, cb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lb = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, db = {
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
}, ub = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, fb = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, mb = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, hb = {
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
}, pb = {
  ordinalNumber: Ei({
    matchPattern: rb,
    parsePattern: ob,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: He({
    matchPatterns: sb,
    defaultMatchWidth: "wide",
    parsePatterns: ab,
    defaultParseWidth: "any"
  }),
  quarter: He({
    matchPatterns: ib,
    defaultMatchWidth: "wide",
    parsePatterns: cb,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: He({
    matchPatterns: lb,
    defaultMatchWidth: "wide",
    parsePatterns: db,
    defaultParseWidth: "any"
  }),
  day: He({
    matchPatterns: ub,
    defaultMatchWidth: "wide",
    parsePatterns: fb,
    defaultParseWidth: "any"
  }),
  dayPeriod: He({
    matchPatterns: mb,
    defaultMatchWidth: "any",
    parsePatterns: hb,
    defaultParseWidth: "any"
  })
}, gb = {
  code: "it",
  formatDistance: $g,
  formatLong: Vg,
  formatRelative: qg,
  localize: nb,
  match: pb,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Ti = {
  ...zt,
  labels: {
    labelDayButton: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => Ze(a, i, { locale: zt, ...n });
      let s = o(e, "PPPP");
      return t.today && (s = `Today, ${s}`), t.selected && (s = `${s}, selected`), s;
    },
    labelMonthDropdown: "Choose the Month",
    labelNext: "Go to the Next Month",
    labelPrevious: "Go to the Previous Month",
    labelWeekNumber: (e) => `Week ${e}`,
    labelYearDropdown: "Choose the Year",
    labelGrid: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Ze(o, s, { locale: zt, ...t }), r(e, "LLLL yyyy");
    },
    labelGridcell: (e, t, n, r) => {
      let o;
      r && typeof r.format == "function" ? o = r.format.bind(r) : o = (a, i) => Ze(a, i, { locale: zt, ...n });
      let s = o(e, "PPPP");
      return t?.today && (s = `Today, ${s}`), s;
    },
    labelNav: "Navigation bar",
    labelWeekNumberHeader: "Week Number",
    labelWeekday: (e, t, n) => {
      let r;
      return n && typeof n.format == "function" ? r = n.format.bind(n) : r = (o, s) => Ze(o, s, { locale: zt, ...t }), r(e, "cccc");
    }
  }
};
class Me {
  /**
   * Creates an instance of `DateLib`.
   *
   * @param options Configuration options for the date library.
   * @param overrides Custom overrides for the date library functions.
   */
  constructor(t, n) {
    this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? ye.tz(this.options.timeZone) : new this.Date(), this.newDate = (r, o, s) => this.overrides?.newDate ? this.overrides.newDate(r, o, s) : this.options.timeZone ? new ye(r, o, s, this.options.timeZone) : new Date(r, o, s), this.addDays = (r, o) => this.overrides?.addDays ? this.overrides.addDays(r, o) : vi(r, o), this.addMonths = (r, o) => this.overrides?.addMonths ? this.overrides.addMonths(r, o) : xi(r, o), this.addWeeks = (r, o) => this.overrides?.addWeeks ? this.overrides.addWeeks(r, o) : wp(r, o), this.addYears = (r, o) => this.overrides?.addYears ? this.overrides.addYears(r, o) : Sp(r, o), this.differenceInCalendarDays = (r, o) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(r, o) : go(r, o), this.differenceInCalendarMonths = (r, o) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(r, o) : ki(r, o), this.eachMonthOfInterval = (r) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(r) : Pp(r), this.eachYearOfInterval = (r) => {
      const o = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(r) : Tp(r), s = new Set(o.map((i) => this.getYear(i)));
      if (s.size === o.length)
        return o;
      const a = [];
      return s.forEach((i) => {
        a.push(new Date(i, 0, 1));
      }), a;
    }, this.endOfBroadcastWeek = (r) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(r) : Lg(r, this), this.endOfISOWeek = (r) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(r) : Rp(r), this.endOfMonth = (r) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(r) : Ep(r), this.endOfWeek = (r, o) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(r, o) : Mi(r, this.options), this.endOfYear = (r) => this.overrides?.endOfYear ? this.overrides.endOfYear(r) : Op(r), this.format = (r, o, s) => {
      const a = this.overrides?.format ? this.overrides.format(r, o, this.options) : Ze(r, o, this.options);
      return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(a) : a;
    }, this.getISOWeek = (r) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(r) : bo(r), this.getMonth = (r, o) => this.overrides?.getMonth ? this.overrides.getMonth(r, this.options) : Pg(r, this.options), this.getYear = (r, o) => this.overrides?.getYear ? this.overrides.getYear(r, this.options) : Dg(r, this.options), this.getWeek = (r, o) => this.overrides?.getWeek ? this.overrides.getWeek(r, this.options) : yo(r, this.options), this.isAfter = (r, o) => this.overrides?.isAfter ? this.overrides.isAfter(r, o) : Og(r, o), this.isBefore = (r, o) => this.overrides?.isBefore ? this.overrides.isBefore(r, o) : Tg(r, o), this.isDate = (r) => this.overrides?.isDate ? this.overrides.isDate(r) : Si(r), this.isSameDay = (r, o) => this.overrides?.isSameDay ? this.overrides.isSameDay(r, o) : Np(r, o), this.isSameMonth = (r, o) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(r, o) : Rg(r, o), this.isSameYear = (r, o) => this.overrides?.isSameYear ? this.overrides.isSameYear(r, o) : Ag(r, o), this.max = (r) => this.overrides?.max ? this.overrides.max(r) : kp(r), this.min = (r) => this.overrides?.min ? this.overrides.min(r) : Cp(r), this.setMonth = (r, o) => this.overrides?.setMonth ? this.overrides.setMonth(r, o) : Ig(r, o), this.setYear = (r, o) => this.overrides?.setYear ? this.overrides.setYear(r, o) : _g(r, o), this.startOfBroadcastWeek = (r, o) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(r, this) : Oi(r, this), this.startOfDay = (r) => this.overrides?.startOfDay ? this.overrides.startOfDay(r) : an(r), this.startOfISOWeek = (r) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(r) : sn(r), this.startOfMonth = (r) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(r) : Dp(r), this.startOfWeek = (r, o) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(r, this.options) : ft(r, this.options), this.startOfYear = (r) => this.overrides?.startOfYear ? this.overrides.startOfYear(r) : Ni(r), this.options = { locale: Ti, ...t }, this.overrides = n;
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
    const t = this.options.locale?.code;
    return t && Me.yearFirstLocales.has(t) ? "year-first" : "month-first";
  }
  /**
   * Formats the month/year pair respecting locale conventions.
   *
   * @since 9.11.0
   */
  formatMonthYear(t) {
    const { locale: n, timeZone: r, numerals: o } = this.options, s = n?.code;
    if (s && Me.yearFirstLocales.has(s))
      try {
        return new Intl.DateTimeFormat(s, {
          month: "long",
          year: "numeric",
          timeZone: r,
          numberingSystem: o
        }).format(t);
      } catch {
      }
    const a = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
    return this.format(t, a);
  }
}
Me.yearFirstLocales = /* @__PURE__ */ new Set([
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
const qe = new Me();
class Ri {
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
class bb {
  constructor(t, n) {
    this.date = t, this.weeks = n;
  }
}
class yb {
  constructor(t, n) {
    this.days = n, this.weekNumber = t;
  }
}
function vb(e) {
  return T.createElement("button", { ...e });
}
function xb(e) {
  return T.createElement("span", { ...e });
}
function wb(e) {
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
function Sb(e) {
  const { day: t, modifiers: n, ...r } = e;
  return T.createElement("td", { ...r });
}
function kb(e) {
  const { day: t, modifiers: n, ...r } = e, o = T.useRef(null);
  return T.useEffect(() => {
    n.focused && o.current?.focus();
  }, [n.focused]), T.createElement("button", { ref: o, ...r });
}
var W;
(function(e) {
  e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(W || (W = {}));
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
function Cb(e) {
  const { options: t, className: n, components: r, classNames: o, ...s } = e, a = [o[W.Dropdown], n].join(" "), i = t?.find(({ value: c }) => c === s.value);
  return T.createElement(
    "span",
    { "data-disabled": s.disabled, className: o[W.DropdownRoot] },
    T.createElement(r.Select, { className: a, ...s }, t?.map(({ value: c, label: l, disabled: f }) => T.createElement(r.Option, { key: c, value: c, disabled: f }, l))),
    T.createElement(
      "span",
      { className: o[W.CaptionLabel], "aria-hidden": !0 },
      i?.label,
      T.createElement(r.Chevron, { orientation: "down", size: 18, className: o[W.Chevron] })
    )
  );
}
function Nb(e) {
  return T.createElement("div", { ...e });
}
function Mb(e) {
  return T.createElement("div", { ...e });
}
function Eb(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r }, e.children);
}
function Pb(e) {
  const { calendarMonth: t, displayIndex: n, ...r } = e;
  return T.createElement("div", { ...r });
}
function Db(e) {
  return T.createElement("table", { ...e });
}
function Ob(e) {
  return T.createElement("div", { ...e });
}
const Ai = qs(void 0);
function hn() {
  const e = Xs(Ai);
  if (e === void 0)
    throw new Error("useDayPicker() must be used within a custom component.");
  return e;
}
function Tb(e) {
  const { components: t } = hn();
  return T.createElement(t.Dropdown, { ...e });
}
function Rb(e) {
  const { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: o, ...s } = e, { components: a, classNames: i, labels: { labelPrevious: c, labelNext: l } } = hn(), f = Se((h) => {
    o && n?.(h);
  }, [o, n]), m = Se((h) => {
    r && t?.(h);
  }, [r, t]);
  return T.createElement(
    "nav",
    { ...s },
    T.createElement(
      a.PreviousMonthButton,
      { type: "button", className: i[W.PreviousMonthButton], tabIndex: r ? void 0 : -1, "aria-disabled": r ? void 0 : !0, "aria-label": c(r), onClick: m },
      T.createElement(a.Chevron, { disabled: r ? void 0 : !0, className: i[W.Chevron], orientation: "left" })
    ),
    T.createElement(
      a.NextMonthButton,
      { type: "button", className: i[W.NextMonthButton], tabIndex: o ? void 0 : -1, "aria-disabled": o ? void 0 : !0, "aria-label": l(o), onClick: f },
      T.createElement(a.Chevron, { disabled: o ? void 0 : !0, orientation: "right", className: i[W.Chevron] })
    )
  );
}
function Ab(e) {
  const { components: t } = hn();
  return T.createElement(t.Button, { ...e });
}
function Ib(e) {
  return T.createElement("option", { ...e });
}
function _b(e) {
  const { components: t } = hn();
  return T.createElement(t.Button, { ...e });
}
function Wb(e) {
  const { rootRef: t, ...n } = e;
  return T.createElement("div", { ...n, ref: t });
}
function Fb(e) {
  return T.createElement("select", { ...e });
}
function Lb(e) {
  const { week: t, ...n } = e;
  return T.createElement("tr", { ...n });
}
function zb(e) {
  return T.createElement("th", { ...e });
}
function $b(e) {
  return T.createElement(
    "thead",
    { "aria-hidden": !0 },
    T.createElement("tr", { ...e })
  );
}
function Bb(e) {
  const { week: t, ...n } = e;
  return T.createElement("th", { ...n });
}
function Hb(e) {
  return T.createElement("th", { ...e });
}
function Yb(e) {
  return T.createElement("tbody", { ...e });
}
function Vb(e) {
  const { components: t } = hn();
  return T.createElement(t.Dropdown, { ...e });
}
const jb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: vb,
  CaptionLabel: xb,
  Chevron: wb,
  Day: Sb,
  DayButton: kb,
  Dropdown: Cb,
  DropdownNav: Nb,
  Footer: Mb,
  Month: Eb,
  MonthCaption: Pb,
  MonthGrid: Db,
  Months: Ob,
  MonthsDropdown: Tb,
  Nav: Rb,
  NextMonthButton: Ab,
  Option: Ib,
  PreviousMonthButton: _b,
  Root: Wb,
  Select: Fb,
  Week: Lb,
  WeekNumber: Bb,
  WeekNumberHeader: Hb,
  Weekday: zb,
  Weekdays: $b,
  Weeks: Yb,
  YearsDropdown: Vb
}, Symbol.toStringTag, { value: "Module" }));
function Qe(e, t, n = !1, r = qe) {
  let { from: o, to: s } = e;
  const { differenceInCalendarDays: a, isSameDay: i } = r;
  return o && s ? (a(s, o) < 0 && ([o, s] = [s, o]), a(t, o) >= (n ? 1 : 0) && a(s, t) >= (n ? 1 : 0)) : !n && s ? i(s, t) : !n && o ? i(o, t) : !1;
}
function xo(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function or(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function wo(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function So(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function Ii(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function _i(e, t) {
  return Array.isArray(e) && e.every(t.isDate);
}
function Je(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t], { isSameDay: o, differenceInCalendarDays: s, isAfter: a } = n;
  return r.some((i) => {
    if (typeof i == "boolean")
      return i;
    if (n.isDate(i))
      return o(e, i);
    if (_i(i, n))
      return i.some((c) => o(e, c));
    if (or(i))
      return Qe(i, e, !1, n);
    if (Ii(i))
      return Array.isArray(i.dayOfWeek) ? i.dayOfWeek.includes(e.getDay()) : i.dayOfWeek === e.getDay();
    if (xo(i)) {
      const c = s(i.before, e), l = s(i.after, e), f = c > 0, m = l < 0;
      return a(i.before, i.after) ? m && f : f || m;
    }
    return wo(i) ? s(e, i.after) > 0 : So(i) ? s(i.before, e) > 0 : typeof i == "function" ? i(e) : !1;
  });
}
function Gb(e, t, n, r, o) {
  const { disabled: s, hidden: a, modifiers: i, showOutsideDays: c, broadcastCalendar: l, today: f = o.today() } = t, { isSameDay: m, isSameMonth: h, startOfMonth: p, isBefore: y, endOfMonth: g, isAfter: b } = o, v = n && p(n), x = r && g(r), w = {
    [ue.focused]: [],
    [ue.outside]: [],
    [ue.disabled]: [],
    [ue.hidden]: [],
    [ue.today]: []
  }, S = {};
  for (const C of e) {
    const { date: k, displayMonth: M } = C, N = !!(M && !h(k, M)), D = !!(v && y(k, v)), R = !!(x && b(k, x)), F = !!(s && Je(k, s, o)), Y = !!(a && Je(k, a, o)) || D || R || // Broadcast calendar will show outside days as default
    !l && !c && N || l && c === !1 && N, j = m(k, f);
    N && w.outside.push(C), F && w.disabled.push(C), Y && w.hidden.push(C), j && w.today.push(C), i && Object.keys(i).forEach(($) => {
      const K = i?.[$];
      K && Je(k, K, o) && (S[$] ? S[$].push(C) : S[$] = [C]);
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
function Ub(e, t, n = {}) {
  return Object.entries(e).filter(([, o]) => o === !0).reduce((o, [s]) => (n[s] ? o.push(n[s]) : t[ue[s]] ? o.push(t[ue[s]]) : t[Ae[s]] && o.push(t[Ae[s]]), o), [t[W.Day]]);
}
function qb(e) {
  return {
    ...jb,
    ...e
  };
}
function Xb(e) {
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
function Kb() {
  const e = {};
  for (const t in W)
    e[W[t]] = `rdp-${W[t]}`;
  for (const t in ue)
    e[ue[t]] = `rdp-${ue[t]}`;
  for (const t in Ae)
    e[Ae[t]] = `rdp-${Ae[t]}`;
  for (const t in ke)
    e[ke[t]] = `rdp-${ke[t]}`;
  return e;
}
function Wi(e, t, n) {
  return (n ?? new Me(t)).formatMonthYear(e);
}
const Zb = Wi;
function Qb(e, t, n) {
  return (n ?? new Me(t)).format(e, "d");
}
function Jb(e, t = qe) {
  return t.format(e, "LLLL");
}
function ey(e, t, n) {
  return (n ?? new Me(t)).format(e, "cccccc");
}
function ty(e, t = qe) {
  return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
function ny() {
  return "";
}
function Fi(e, t = qe) {
  return t.format(e, "yyyy");
}
const ry = Fi, oy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  formatCaption: Wi,
  formatDay: Qb,
  formatMonthCaption: Zb,
  formatMonthDropdown: Jb,
  formatWeekNumber: ty,
  formatWeekNumberHeader: ny,
  formatWeekdayName: ey,
  formatYearCaption: ry,
  formatYearDropdown: Fi
}, Symbol.toStringTag, { value: "Module" }));
function sy(e) {
  return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
    ...oy,
    ...e
  };
}
function ko(e, t, n, r) {
  let o = (r ?? new Me(n)).format(e, "PPPP");
  return t.today && (o = `Today, ${o}`), t.selected && (o = `${o}, selected`), o;
}
const ay = ko;
function Co(e, t, n) {
  return (n ?? new Me(t)).formatMonthYear(e);
}
const iy = Co;
function Li(e, t, n, r) {
  let o = (r ?? new Me(n)).format(e, "PPPP");
  return t?.today && (o = `Today, ${o}`), o;
}
function zi(e) {
  return "Choose the Month";
}
function $i() {
  return "";
}
const cy = "Go to the Next Month";
function Bi(e, t) {
  return cy;
}
function Hi(e) {
  return "Go to the Previous Month";
}
function Yi(e, t, n) {
  return (n ?? new Me(t)).format(e, "cccc");
}
function Vi(e, t) {
  return `Week ${e}`;
}
function ji(e) {
  return "Week Number";
}
function Gi(e) {
  return "Choose the Year";
}
const ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  labelCaption: iy,
  labelDay: ay,
  labelDayButton: ko,
  labelGrid: Co,
  labelGridcell: Li,
  labelMonthDropdown: zi,
  labelNav: $i,
  labelNext: Bi,
  labelPrevious: Hi,
  labelWeekNumber: Vi,
  labelWeekNumberHeader: ji,
  labelWeekday: Yi,
  labelYearDropdown: Gi
}, Symbol.toStringTag, { value: "Module" })), Te = (e, t, n) => t || (n ? typeof n == "function" ? n : (...r) => n : e);
function dy(e, t) {
  const n = t.locale?.labels ?? {};
  return {
    ...ly,
    ...e ?? {},
    labelDayButton: Te(ko, e?.labelDayButton, n.labelDayButton),
    labelMonthDropdown: Te(zi, e?.labelMonthDropdown, n.labelMonthDropdown),
    labelNext: Te(Bi, e?.labelNext, n.labelNext),
    labelPrevious: Te(Hi, e?.labelPrevious, n.labelPrevious),
    labelWeekNumber: Te(Vi, e?.labelWeekNumber, n.labelWeekNumber),
    labelYearDropdown: Te(Gi, e?.labelYearDropdown, n.labelYearDropdown),
    labelGrid: Te(Co, e?.labelGrid, n.labelGrid),
    labelGridcell: Te(Li, e?.labelGridcell, n.labelGridcell),
    labelNav: Te($i, e?.labelNav, n.labelNav),
    labelWeekNumberHeader: Te(ji, e?.labelWeekNumberHeader, n.labelWeekNumberHeader),
    labelWeekday: Te(Yi, e?.labelWeekday, n.labelWeekday)
  };
}
function uy(e, t, n, r, o) {
  const { startOfMonth: s, startOfYear: a, endOfYear: i, eachMonthOfInterval: c, getMonth: l } = o;
  return c({
    start: a(e),
    end: i(e)
  }).map((h) => {
    const p = r.formatMonthDropdown(h, o), y = l(h), g = t && h < s(t) || n && h > s(n) || !1;
    return { value: y, label: p, disabled: g };
  });
}
function fy(e, t = {}, n = {}) {
  let r = { ...t?.[W.Day] };
  return Object.entries(e).filter(([, o]) => o === !0).forEach(([o]) => {
    r = {
      ...r,
      ...n?.[o]
    };
  }), r;
}
function my(e, t, n, r) {
  const o = r ?? e.today(), s = n ? e.startOfBroadcastWeek(o, e) : t ? e.startOfISOWeek(o) : e.startOfWeek(o), a = [];
  for (let i = 0; i < 7; i++) {
    const c = e.addDays(s, i);
    a.push(c);
  }
  return a;
}
function hy(e, t, n, r, o = !1) {
  if (!e || !t)
    return;
  const { startOfYear: s, endOfYear: a, eachYearOfInterval: i, getYear: c } = r, l = s(e), f = a(t), m = i({ start: l, end: f });
  return o && m.reverse(), m.map((h) => {
    const p = n.formatYearDropdown(h, r);
    return {
      value: c(h),
      label: p,
      disabled: !1
    };
  });
}
function py(e, t = {}) {
  const { weekStartsOn: n, locale: r } = t, o = n ?? r?.options?.weekStartsOn ?? 0, s = (i) => {
    const c = typeof i == "number" || typeof i == "string" ? new Date(i) : i;
    return new ye(c.getFullYear(), c.getMonth(), c.getDate(), 12, 0, 0, e);
  }, a = (i) => {
    const c = s(i);
    return new Date(c.getFullYear(), c.getMonth(), c.getDate(), 0, 0, 0, 0);
  };
  return {
    today: () => s(ye.tz(e)),
    newDate: (i, c, l) => new ye(i, c, l, 12, 0, 0, e),
    startOfDay: (i) => s(i),
    startOfWeek: (i, c) => {
      const l = s(i), f = c?.weekStartsOn ?? o, m = (l.getDay() - f + 7) % 7;
      return l.setDate(l.getDate() - m), l;
    },
    startOfISOWeek: (i) => {
      const c = s(i), l = (c.getDay() - 1 + 7) % 7;
      return c.setDate(c.getDate() - l), c;
    },
    startOfMonth: (i) => {
      const c = s(i);
      return c.setDate(1), c;
    },
    startOfYear: (i) => {
      const c = s(i);
      return c.setMonth(0, 1), c;
    },
    endOfWeek: (i, c) => {
      const l = s(i), h = (((c?.weekStartsOn ?? o) + 6) % 7 - l.getDay() + 7) % 7;
      return l.setDate(l.getDate() + h), l;
    },
    endOfISOWeek: (i) => {
      const c = s(i), l = (7 - c.getDay()) % 7;
      return c.setDate(c.getDate() + l), c;
    },
    endOfMonth: (i) => {
      const c = s(i);
      return c.setMonth(c.getMonth() + 1, 0), c;
    },
    endOfYear: (i) => {
      const c = s(i);
      return c.setMonth(11, 31), c;
    },
    eachMonthOfInterval: (i) => {
      const c = s(i.start), l = s(i.end), f = [], m = new ye(c.getFullYear(), c.getMonth(), 1, 12, 0, 0, e), h = l.getFullYear() * 12 + l.getMonth();
      for (; m.getFullYear() * 12 + m.getMonth() <= h; )
        f.push(new ye(m, e)), m.setMonth(m.getMonth() + 1, 1);
      return f;
    },
    // Normalize to noon once before arithmetic (avoid DST/midnight edge cases),
    // mutate the same TZDate, and return it.
    addDays: (i, c) => {
      const l = s(i);
      return l.setDate(l.getDate() + c), l;
    },
    addWeeks: (i, c) => {
      const l = s(i);
      return l.setDate(l.getDate() + c * 7), l;
    },
    addMonths: (i, c) => {
      const l = s(i);
      return l.setMonth(l.getMonth() + c), l;
    },
    addYears: (i, c) => {
      const l = s(i);
      return l.setFullYear(l.getFullYear() + c), l;
    },
    eachYearOfInterval: (i) => {
      const c = s(i.start), l = s(i.end), f = [], m = new ye(c.getFullYear(), 0, 1, 12, 0, 0, e);
      for (; m.getFullYear() <= l.getFullYear(); )
        f.push(new ye(m, e)), m.setFullYear(m.getFullYear() + 1, 0, 1);
      return f;
    },
    getWeek: (i, c) => {
      const l = a(i);
      return yo(l, {
        weekStartsOn: c?.weekStartsOn ?? o,
        firstWeekContainsDate: c?.firstWeekContainsDate ?? r?.options?.firstWeekContainsDate ?? 1
      });
    },
    getISOWeek: (i) => {
      const c = a(i);
      return bo(c);
    },
    differenceInCalendarDays: (i, c) => {
      const l = a(i), f = a(c);
      return go(l, f);
    },
    differenceInCalendarMonths: (i, c) => {
      const l = a(i), f = a(c);
      return ki(l, f);
    }
  };
}
const pn = (e) => e instanceof HTMLElement ? e : null, Tr = (e) => [
  ...e.querySelectorAll("[data-animated-month]") ?? []
], gy = (e) => pn(e.querySelector("[data-animated-month]")), Rr = (e) => pn(e.querySelector("[data-animated-caption]")), Ar = (e) => pn(e.querySelector("[data-animated-weeks]")), by = (e) => pn(e.querySelector("[data-animated-nav]")), yy = (e) => pn(e.querySelector("[data-animated-weekdays]"));
function vy(e, t, { classNames: n, months: r, focused: o, dateLib: s }) {
  const a = lt(null), i = lt(r), c = lt(!1);
  Us(() => {
    const l = i.current;
    if (i.current = r, !t || !e.current || // safety check because the ref can be set to anything by consumers
    !(e.current instanceof HTMLElement) || // validation required for the animation to work as expected
    r.length === 0 || l.length === 0 || r.length !== l.length)
      return;
    const f = s.isSameMonth(r[0].date, l[0].date), m = s.isAfter(r[0].date, l[0].date), h = m ? n[ke.caption_after_enter] : n[ke.caption_before_enter], p = m ? n[ke.weeks_after_enter] : n[ke.weeks_before_enter], y = a.current, g = e.current.cloneNode(!0);
    if (g instanceof HTMLElement ? (Tr(g).forEach((w) => {
      if (!(w instanceof HTMLElement))
        return;
      const S = gy(w);
      S && w.contains(S) && w.removeChild(S);
      const C = Rr(w);
      C && C.classList.remove(h);
      const k = Ar(w);
      k && k.classList.remove(p);
    }), a.current = g) : a.current = null, c.current || f || // skip animation if a day is focused because it can cause issues to the animation and is better for a11y
    o)
      return;
    const b = y instanceof HTMLElement ? Tr(y) : [], v = Tr(e.current);
    if (v?.every((x) => x instanceof HTMLElement) && b && b.every((x) => x instanceof HTMLElement)) {
      c.current = !0, e.current.style.isolation = "isolate";
      const x = by(e.current);
      x && (x.style.zIndex = "1"), v.forEach((w, S) => {
        const C = b[S];
        if (!C)
          return;
        w.style.position = "relative", w.style.overflow = "hidden";
        const k = Rr(w);
        k && k.classList.add(h);
        const M = Ar(w);
        M && M.classList.add(p);
        const N = () => {
          c.current = !1, e.current && (e.current.style.isolation = ""), x && (x.style.zIndex = ""), k && k.classList.remove(h), M && M.classList.remove(p), w.style.position = "", w.style.overflow = "", w.contains(C) && w.removeChild(C);
        };
        C.style.pointerEvents = "none", C.style.position = "absolute", C.style.overflow = "hidden", C.setAttribute("aria-hidden", "true");
        const D = yy(C);
        D && (D.style.opacity = "0");
        const R = Rr(C);
        R && (R.classList.add(m ? n[ke.caption_before_exit] : n[ke.caption_after_exit]), R.addEventListener("animationend", N));
        const F = Ar(C);
        F && F.classList.add(m ? n[ke.weeks_before_exit] : n[ke.weeks_after_exit]), w.insertBefore(C, w.firstChild);
      });
    }
  });
}
function xy(e, t, n, r) {
  const o = e[0], s = e[e.length - 1], { ISOWeek: a, fixedWeeks: i, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: f, differenceInCalendarMonths: m, endOfBroadcastWeek: h, endOfISOWeek: p, endOfMonth: y, endOfWeek: g, isAfter: b, startOfBroadcastWeek: v, startOfISOWeek: x, startOfWeek: w } = r, S = c ? v(o, r) : a ? x(o) : w(o), C = c ? h(s) : a ? p(y(s)) : g(y(s)), k = t && (c ? h(t) : a ? p(t) : g(t)), M = k && b(C, k) ? k : C, N = f(M, S), D = m(s, o) + 1, R = [];
  for (let j = 0; j <= N; j++) {
    const $ = l(S, j);
    R.push($);
  }
  const Y = (c ? 35 : 42) * D;
  if (i && R.length < Y) {
    const j = Y - R.length;
    for (let $ = 0; $ < j; $++) {
      const K = l(R[R.length - 1], 1);
      R.push(K);
    }
  }
  return R;
}
function wy(e) {
  const t = [];
  return e.reduce((n, r) => {
    const o = r.weeks.reduce((s, a) => s.concat(a.days.slice()), t.slice());
    return n.concat(o.slice());
  }, t.slice());
}
function Sy(e, t, n, r) {
  const { numberOfMonths: o = 1 } = n, s = [];
  for (let a = 0; a < o; a++) {
    const i = r.addMonths(e, a);
    if (t && i > t)
      break;
    s.push(i);
  }
  return s;
}
function zs(e, t, n, r) {
  const { month: o, defaultMonth: s, today: a = r.today(), numberOfMonths: i = 1 } = e;
  let c = o || s || a;
  const { differenceInCalendarMonths: l, addMonths: f, startOfMonth: m } = r;
  if (n && l(n, c) < i - 1) {
    const h = -1 * (i - 1);
    c = f(n, h);
  }
  return t && l(c, t) < 0 && (c = t), m(c);
}
function ky(e, t, n, r) {
  const { addDays: o, endOfBroadcastWeek: s, endOfISOWeek: a, endOfMonth: i, endOfWeek: c, getISOWeek: l, getWeek: f, startOfBroadcastWeek: m, startOfISOWeek: h, startOfWeek: p } = r, y = e.reduce((g, b) => {
    const v = n.broadcastCalendar ? m(b, r) : n.ISOWeek ? h(b) : p(b), x = n.broadcastCalendar ? s(b) : n.ISOWeek ? a(i(b)) : c(i(b)), w = t.filter((M) => M >= v && M <= x), S = n.broadcastCalendar ? 35 : 42;
    if (n.fixedWeeks && w.length < S) {
      const M = t.filter((N) => {
        const D = S - w.length;
        return N > x && N <= o(x, D);
      });
      w.push(...M);
    }
    const C = w.reduce((M, N) => {
      const D = n.ISOWeek ? l(N) : f(N), R = M.find((Y) => Y.weekNumber === D), F = new Ri(N, b, r);
      return R ? R.days.push(F) : M.push(new yb(D, [F])), M;
    }, []), k = new bb(b, C);
    return g.push(k), g;
  }, []);
  return n.reverseMonths ? y.reverse() : y;
}
function Cy(e, t) {
  let { startMonth: n, endMonth: r } = e;
  const { startOfYear: o, startOfDay: s, startOfMonth: a, endOfMonth: i, addYears: c, endOfYear: l, newDate: f, today: m } = t, { fromYear: h, toYear: p, fromMonth: y, toMonth: g } = e;
  !n && y && (n = y), !n && h && (n = t.newDate(h, 0, 1)), !r && g && (r = g), !r && p && (r = f(p, 11, 31));
  const b = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
  return n ? n = a(n) : h ? n = f(h, 0, 1) : !n && b && (n = o(c(e.today ?? m(), -100))), r ? r = i(r) : p ? r = f(p, 11, 31) : !r && b && (r = l(e.today ?? m())), [
    n && s(n),
    r && s(r)
  ];
}
function Ny(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s = 1 } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s : 1, f = a(e);
  if (!t)
    return i(f, l);
  if (!(c(t, e) < s))
    return i(f, l);
}
function My(e, t, n, r) {
  if (n.disableNavigation)
    return;
  const { pagedNavigation: o, numberOfMonths: s } = n, { startOfMonth: a, addMonths: i, differenceInCalendarMonths: c } = r, l = o ? s ?? 1 : 1, f = a(e);
  if (!t)
    return i(f, -l);
  if (!(c(f, t) <= 0))
    return i(f, -l);
}
function Ey(e) {
  const t = [];
  return e.reduce((n, r) => n.concat(r.weeks.slice()), t.slice());
}
function sr(e, t) {
  const [n, r] = Ie(e);
  return [t === void 0 ? n : t, r];
}
function Py(e, t) {
  const [n, r] = Cy(e, t), { startOfMonth: o, endOfMonth: s } = t, a = zs(e, n, r, t), [i, c] = sr(
    a,
    // initialMonth is always computed from props.month if provided
    e.month ? a : void 0
  );
  kt(() => {
    const S = zs(e, n, r, t);
    c(S);
  }, [e.timeZone]);
  const { months: l, weeks: f, days: m, previousMonth: h, nextMonth: p } = Nn(() => {
    const S = Sy(i, r, { numberOfMonths: e.numberOfMonths }, t), C = xy(S, e.endMonth ? s(e.endMonth) : void 0, {
      ISOWeek: e.ISOWeek,
      fixedWeeks: e.fixedWeeks,
      broadcastCalendar: e.broadcastCalendar
    }, t), k = ky(S, C, {
      broadcastCalendar: e.broadcastCalendar,
      fixedWeeks: e.fixedWeeks,
      ISOWeek: e.ISOWeek,
      reverseMonths: e.reverseMonths
    }, t), M = Ey(k), N = wy(k), D = My(i, n, e, t), R = Ny(i, r, e, t);
    return {
      months: k,
      weeks: M,
      days: N,
      previousMonth: D,
      nextMonth: R
    };
  }, [
    t,
    i.getTime(),
    r?.getTime(),
    n?.getTime(),
    e.disableNavigation,
    e.broadcastCalendar,
    e.endMonth?.getTime(),
    e.fixedWeeks,
    e.ISOWeek,
    e.numberOfMonths,
    e.pagedNavigation,
    e.reverseMonths
  ]), { disableNavigation: y, onMonthChange: g } = e, b = (S) => f.some((C) => C.days.some((k) => k.isEqualTo(S))), v = (S) => {
    if (y)
      return;
    let C = o(S);
    n && C < o(n) && (C = o(n)), r && C > o(r) && (C = o(r)), c(C), g?.(C);
  };
  return {
    months: l,
    weeks: f,
    days: m,
    navStart: n,
    navEnd: r,
    previousMonth: h,
    nextMonth: p,
    goToMonth: v,
    goToDay: (S) => {
      b(S) || v(S.date);
    }
  };
}
var ze;
(function(e) {
  e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(ze || (ze = {}));
function $s(e) {
  return !e[ue.disabled] && !e[ue.hidden] && !e[ue.outside];
}
function Dy(e, t, n, r) {
  let o, s = -1;
  for (const a of e) {
    const i = t(a);
    $s(i) && (i[ue.focused] && s < ze.FocusedModifier ? (o = a, s = ze.FocusedModifier) : r?.isEqualTo(a) && s < ze.LastFocused ? (o = a, s = ze.LastFocused) : n(a.date) && s < ze.Selected ? (o = a, s = ze.Selected) : i[ue.today] && s < ze.Today && (o = a, s = ze.Today));
  }
  return o || (o = e.find((a) => $s(t(a)))), o;
}
function Oy(e, t, n, r, o, s, a) {
  const { ISOWeek: i, broadcastCalendar: c } = s, { addDays: l, addMonths: f, addWeeks: m, addYears: h, endOfBroadcastWeek: p, endOfISOWeek: y, endOfWeek: g, max: b, min: v, startOfBroadcastWeek: x, startOfISOWeek: w, startOfWeek: S } = a;
  let k = {
    day: l,
    week: m,
    month: f,
    year: h,
    startOfWeek: (M) => c ? x(M, a) : i ? w(M) : S(M),
    endOfWeek: (M) => c ? p(M) : i ? y(M) : g(M)
  }[e](n, t === "after" ? 1 : -1);
  return t === "before" && r ? k = b([r, k]) : t === "after" && o && (k = v([o, k])), k;
}
function Ui(e, t, n, r, o, s, a, i = 0) {
  if (i > 365)
    return;
  const c = Oy(e, t, n.date, r, o, s, a), l = !!(s.disabled && Je(c, s.disabled, a)), f = !!(s.hidden && Je(c, s.hidden, a)), m = c, h = new Ri(c, m, a);
  return !l && !f ? h : Ui(e, t, h, r, o, s, a, i + 1);
}
function Ty(e, t, n, r, o) {
  const { autoFocus: s } = e, [a, i] = Ie(), c = Dy(t.days, n, r || (() => !1), a), [l, f] = Ie(s ? c : void 0);
  return {
    isFocusTarget: (g) => !!c?.isEqualTo(g),
    setFocused: f,
    focused: l,
    blur: () => {
      i(l), f(void 0);
    },
    moveFocus: (g, b) => {
      if (!l)
        return;
      const v = Ui(g, b, l, t.navStart, t.navEnd, e, o);
      v && (e.disableNavigation && !t.days.some((w) => w.isEqualTo(v)) || (t.goToDay(v), f(v)));
    }
  };
}
function Ry(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = sr(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t, l = (p) => i?.some((y) => c(y, p)) ?? !1, { min: f, max: m } = e;
  return {
    selected: i,
    select: (p, y, g) => {
      let b = [...i ?? []];
      if (l(p)) {
        if (i?.length === f || r && i?.length === 1)
          return;
        b = i?.filter((v) => !c(v, p));
      } else
        i?.length === m ? b = [p] : b = [...b, p];
      return o || a(b), o?.(b, p, y, g), b;
    },
    isSelected: l
  };
}
function Ay(e, t, n = 0, r = 0, o = !1, s = qe) {
  const { from: a, to: i } = t || {}, { isSameDay: c, isAfter: l, isBefore: f } = s;
  let m;
  if (!a && !i)
    m = { from: e, to: n > 0 ? void 0 : e };
  else if (a && !i)
    c(a, e) ? n === 0 ? m = { from: a, to: e } : o ? m = { from: a, to: void 0 } : m = void 0 : f(e, a) ? m = { from: e, to: a } : m = { from: a, to: e };
  else if (a && i)
    if (c(a, e) && c(i, e))
      o ? m = { from: a, to: i } : m = void 0;
    else if (c(a, e))
      m = { from: a, to: n > 0 ? void 0 : e };
    else if (c(i, e))
      m = { from: e, to: n > 0 ? void 0 : e };
    else if (f(e, a))
      m = { from: e, to: i };
    else if (l(e, a))
      m = { from: a, to: e };
    else if (l(e, i))
      m = { from: a, to: e };
    else
      throw new Error("Invalid range");
  if (m?.from && m?.to) {
    const h = s.differenceInCalendarDays(m.to, m.from);
    r > 0 && h > r ? m = { from: e, to: void 0 } : n > 1 && h < n && (m = { from: e, to: void 0 });
  }
  return m;
}
function Iy(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t];
  let o = e.from;
  const s = n.differenceInCalendarDays(e.to, e.from), a = Math.min(s, 6);
  for (let i = 0; i <= a; i++) {
    if (r.includes(o.getDay()))
      return !0;
    o = n.addDays(o, 1);
  }
  return !1;
}
function Bs(e, t, n = qe) {
  return Qe(e, t.from, !1, n) || Qe(e, t.to, !1, n) || Qe(t, e.from, !1, n) || Qe(t, e.to, !1, n);
}
function _y(e, t, n = qe) {
  const r = Array.isArray(t) ? t : [t];
  if (r.filter((i) => typeof i != "function").some((i) => typeof i == "boolean" ? i : n.isDate(i) ? Qe(e, i, !1, n) : _i(i, n) ? i.some((c) => Qe(e, c, !1, n)) : or(i) ? i.from && i.to ? Bs(e, { from: i.from, to: i.to }, n) : !1 : Ii(i) ? Iy(e, i.dayOfWeek, n) : xo(i) ? n.isAfter(i.before, i.after) ? Bs(e, {
    from: n.addDays(i.after, 1),
    to: n.addDays(i.before, -1)
  }, n) : Je(e.from, i, n) || Je(e.to, i, n) : wo(i) || So(i) ? Je(e.from, i, n) || Je(e.to, i, n) : !1))
    return !0;
  const a = r.filter((i) => typeof i == "function");
  if (a.length) {
    let i = e.from;
    const c = n.differenceInCalendarDays(e.to, e.from);
    for (let l = 0; l <= c; l++) {
      if (a.some((f) => f(i)))
        return !0;
      i = n.addDays(i, 1);
    }
  }
  return !1;
}
function Wy(e, t) {
  const { disabled: n, excludeDisabled: r, resetOnSelect: o, selected: s, required: a, onSelect: i } = e, [c, l] = sr(s, i ? s : void 0), f = i ? s : c;
  return {
    selected: f,
    select: (p, y, g) => {
      const { min: b, max: v } = e;
      let x;
      if (p) {
        const w = f?.from, S = f?.to, C = !!w && !!S, k = !!w && !!S && t.isSameDay(w, S) && t.isSameDay(p, w);
        o && (C || !f?.from) ? !a && k ? x = void 0 : x = { from: p, to: void 0 } : x = Ay(p, f, b, v, a, t);
      }
      return r && n && x?.from && x.to && _y({ from: x.from, to: x.to }, n, t) && (x.from = p, x.to = void 0), i || l(x), i?.(x, p, y, g), x;
    },
    isSelected: (p) => f && Qe(f, p, !1, t)
  };
}
function Fy(e, t) {
  const { selected: n, required: r, onSelect: o } = e, [s, a] = sr(n, o ? n : void 0), i = o ? n : s, { isSameDay: c } = t;
  return {
    selected: i,
    select: (m, h, p) => {
      let y = m;
      return !r && i && i && c(m, i) && (y = void 0), o || a(y), o?.(y, m, h, p), y;
    },
    isSelected: (m) => i ? c(i, m) : !1
  };
}
function Ly(e, t) {
  const n = Fy(e, t), r = Ry(e, t), o = Wy(e, t);
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
  return e instanceof ye && e.timeZone === t ? e : new ye(e, t);
}
function Lt(e, t, n) {
  return De(e, t);
}
function Hs(e, t, n) {
  return typeof e == "boolean" || typeof e == "function" ? e : e instanceof Date ? Lt(e, t) : Array.isArray(e) ? e.map((r) => r instanceof Date ? Lt(r, t) : r) : or(e) ? {
    ...e,
    from: e.from ? De(e.from, t) : e.from,
    to: e.to ? De(e.to, t) : e.to
  } : xo(e) ? {
    before: Lt(e.before, t),
    after: Lt(e.after, t)
  } : wo(e) ? {
    after: Lt(e.after, t)
  } : So(e) ? {
    before: Lt(e.before, t)
  } : e;
}
function Ir(e, t, n) {
  return e && (Array.isArray(e) ? e.map((r) => Hs(r, t)) : Hs(e, t));
}
function zy(e) {
  let t = e;
  const n = t.timeZone;
  if (n && (t = {
    ...e,
    timeZone: n
  }, t.today && (t.today = De(t.today, n)), t.month && (t.month = De(t.month, n)), t.defaultMonth && (t.defaultMonth = De(t.defaultMonth, n)), t.startMonth && (t.startMonth = De(t.startMonth, n)), t.endMonth && (t.endMonth = De(t.endMonth, n)), t.mode === "single" && t.selected ? t.selected = De(t.selected, n) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((q) => De(q, n)) : t.mode === "range" && t.selected && (t.selected = {
    from: t.selected.from ? De(t.selected.from, n) : t.selected.from,
    to: t.selected.to ? De(t.selected.to, n) : t.selected.to
  }), t.disabled !== void 0 && (t.disabled = Ir(t.disabled, n)), t.hidden !== void 0 && (t.hidden = Ir(t.hidden, n)), t.modifiers)) {
    const q = {};
    Object.keys(t.modifiers).forEach((oe) => {
      q[oe] = Ir(t.modifiers?.[oe], n);
    }), t.modifiers = q;
  }
  const { components: r, formatters: o, labels: s, dateLib: a, locale: i, classNames: c } = Nn(() => {
    const q = { ...Ti, ...t.locale }, oe = t.broadcastCalendar ? 1 : t.weekStartsOn, H = t.noonSafe && t.timeZone ? py(t.timeZone, {
      weekStartsOn: oe,
      locale: q
    }) : void 0, re = t.dateLib && H ? { ...H, ...t.dateLib } : t.dateLib ?? H, we = new Me({
      locale: q,
      weekStartsOn: oe,
      firstWeekContainsDate: t.firstWeekContainsDate,
      useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
      useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
      timeZone: t.timeZone,
      numerals: t.numerals
    }, re);
    return {
      dateLib: we,
      components: qb(t.components),
      formatters: sy(t.formatters),
      labels: dy(t.labels, we.options),
      locale: q,
      classNames: { ...Kb(), ...t.classNames }
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
  t.today || (t = { ...t, today: a.today() });
  const { captionLayout: l, mode: f, navLayout: m, numberOfMonths: h = 1, onDayBlur: p, onDayClick: y, onDayFocus: g, onDayKeyDown: b, onDayMouseEnter: v, onDayMouseLeave: x, onNextClick: w, onPrevClick: S, showWeekNumber: C, styles: k } = t, { formatCaption: M, formatDay: N, formatMonthDropdown: D, formatWeekNumber: R, formatWeekNumberHeader: F, formatWeekdayName: Y, formatYearDropdown: j } = o, $ = Py(t, a), { days: K, months: _, navStart: G, navEnd: z, previousMonth: U, nextMonth: O, goToMonth: fe } = $, Ee = Gb(K, t, G, z, a), { isSelected: Pe, select: be, selected: ie } = Ly(t, a) ?? {}, { blur: de, focused: L, isFocusTarget: ce, moveFocus: Q, setFocused: ee } = Ty(t, $, Ee, Pe ?? (() => !1), a), { labelDayButton: ne, labelGridcell: le, labelGrid: pe, labelMonthDropdown: xe, labelNav: At, labelPrevious: Xt, labelNext: Kt, labelWeekday: Gl, labelWeekNumber: Ul, labelWeekNumberHeader: ql, labelYearDropdown: Xl } = s, Kl = Nn(() => my(a, t.ISOWeek, t.broadcastCalendar, t.today), [a, t.ISOWeek, t.broadcastCalendar, t.today]), _o = f !== void 0 || y !== void 0, pr = Se(() => {
    U && (fe(U), S?.(U));
  }, [U, fe, S]), gr = Se(() => {
    O && (fe(O), w?.(O));
  }, [fe, O, w]), Zl = Se((q, oe) => (H) => {
    H.preventDefault(), H.stopPropagation(), ee(q), !oe.disabled && (be?.(q.date, oe, H), y?.(q.date, oe, H));
  }, [be, y, ee]), Ql = Se((q, oe) => (H) => {
    ee(q), g?.(q.date, oe, H);
  }, [g, ee]), Jl = Se((q, oe) => (H) => {
    de(), p?.(q.date, oe, H);
  }, [de, p]), ed = Se((q, oe) => (H) => {
    const re = {
      ArrowLeft: [
        H.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "after" : "before"
      ],
      ArrowRight: [
        H.shiftKey ? "month" : "day",
        t.dir === "rtl" ? "before" : "after"
      ],
      ArrowDown: [H.shiftKey ? "year" : "week", "after"],
      ArrowUp: [H.shiftKey ? "year" : "week", "before"],
      PageUp: [H.shiftKey ? "year" : "month", "before"],
      PageDown: [H.shiftKey ? "year" : "month", "after"],
      Home: ["startOfWeek", "before"],
      End: ["endOfWeek", "after"]
    };
    if (re[H.key]) {
      H.preventDefault(), H.stopPropagation();
      const [we, J] = re[H.key];
      Q(we, J);
    }
    b?.(q.date, oe, H);
  }, [Q, b, t.dir]), td = Se((q, oe) => (H) => {
    v?.(q.date, oe, H);
  }, [v]), nd = Se((q, oe) => (H) => {
    x?.(q.date, oe, H);
  }, [x]), rd = Se((q) => (oe) => {
    const H = Number(oe.target.value), re = a.setMonth(a.startOfMonth(q), H);
    fe(re);
  }, [a, fe]), od = Se((q) => (oe) => {
    const H = Number(oe.target.value), re = a.setYear(a.startOfMonth(q), H);
    fe(re);
  }, [a, fe]), { className: sd, style: ad } = Nn(() => ({
    className: [c[W.Root], t.className].filter(Boolean).join(" "),
    style: { ...k?.[W.Root], ...t.style }
  }), [c, t.className, t.style, k]), id = Xb(t), Wo = lt(null);
  vy(Wo, !!t.animate, {
    classNames: c,
    months: _,
    focused: L,
    dateLib: a
  });
  const cd = {
    dayPickerProps: t,
    selected: ie,
    select: be,
    isSelected: Pe,
    months: _,
    nextMonth: O,
    previousMonth: U,
    goToMonth: fe,
    getModifiers: Ee,
    components: r,
    classNames: c,
    styles: k,
    labels: s,
    formatters: o
  };
  return T.createElement(
    Ai.Provider,
    { value: cd },
    T.createElement(
      r.Root,
      { rootRef: t.animate ? Wo : void 0, className: sd, style: ad, dir: t.dir, id: t.id, lang: t.lang ?? i.code, nonce: t.nonce, title: t.title, role: t.role, "aria-label": t["aria-label"], "aria-labelledby": t["aria-labelledby"], ...id },
      T.createElement(
        r.Months,
        { className: c[W.Months], style: k?.[W.Months] },
        !t.hideNavigation && !m && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[W.Nav], style: k?.[W.Nav], "aria-label": At(), onPreviousClick: pr, onNextClick: gr, previousMonth: U, nextMonth: O }),
        _.map((q, oe) => T.createElement(
          r.Month,
          {
            "data-animated-month": t.animate ? "true" : void 0,
            className: c[W.Month],
            style: k?.[W.Month],
            // biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
            key: oe,
            displayIndex: oe,
            calendarMonth: q
          },
          m === "around" && !t.hideNavigation && oe === 0 && T.createElement(
            r.PreviousMonthButton,
            { type: "button", className: c[W.PreviousMonthButton], tabIndex: U ? void 0 : -1, "aria-disabled": U ? void 0 : !0, "aria-label": Xt(U), onClick: pr, "data-animated-button": t.animate ? "true" : void 0 },
            T.createElement(r.Chevron, { disabled: U ? void 0 : !0, className: c[W.Chevron], orientation: t.dir === "rtl" ? "right" : "left" })
          ),
          T.createElement(r.MonthCaption, { "data-animated-caption": t.animate ? "true" : void 0, className: c[W.MonthCaption], style: k?.[W.MonthCaption], calendarMonth: q, displayIndex: oe }, l?.startsWith("dropdown") ? T.createElement(
            r.DropdownNav,
            { className: c[W.Dropdowns], style: k?.[W.Dropdowns] },
            (() => {
              const H = l === "dropdown" || l === "dropdown-months" ? T.createElement(r.MonthsDropdown, { key: "month", className: c[W.MonthsDropdown], "aria-label": xe(), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: rd(q.date), options: uy(q.date, G, z, o, a), style: k?.[W.Dropdown], value: a.getMonth(q.date) }) : T.createElement("span", { key: "month" }, D(q.date, a)), re = l === "dropdown" || l === "dropdown-years" ? T.createElement(r.YearsDropdown, { key: "year", className: c[W.YearsDropdown], "aria-label": Xl(a.options), classNames: c, components: r, disabled: !!t.disableNavigation, onChange: od(q.date), options: hy(G, z, o, a, !!t.reverseYears), style: k?.[W.Dropdown], value: a.getYear(q.date) }) : T.createElement("span", { key: "year" }, j(q.date, a));
              return a.getMonthYearOrder() === "year-first" ? [re, H] : [H, re];
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
            } }, M(q.date, a.options, a))
          ) : T.createElement(r.CaptionLabel, { className: c[W.CaptionLabel], role: "status", "aria-live": "polite" }, M(q.date, a.options, a))),
          m === "around" && !t.hideNavigation && oe === h - 1 && T.createElement(
            r.NextMonthButton,
            { type: "button", className: c[W.NextMonthButton], tabIndex: O ? void 0 : -1, "aria-disabled": O ? void 0 : !0, "aria-label": Kt(O), onClick: gr, "data-animated-button": t.animate ? "true" : void 0 },
            T.createElement(r.Chevron, { disabled: O ? void 0 : !0, className: c[W.Chevron], orientation: t.dir === "rtl" ? "left" : "right" })
          ),
          oe === h - 1 && m === "after" && !t.hideNavigation && T.createElement(r.Nav, { "data-animated-nav": t.animate ? "true" : void 0, className: c[W.Nav], style: k?.[W.Nav], "aria-label": At(), onPreviousClick: pr, onNextClick: gr, previousMonth: U, nextMonth: O }),
          T.createElement(
            r.MonthGrid,
            { role: "grid", "aria-multiselectable": f === "multiple" || f === "range", "aria-label": pe(q.date, a.options, a) || void 0, className: c[W.MonthGrid], style: k?.[W.MonthGrid] },
            !t.hideWeekdays && T.createElement(
              r.Weekdays,
              { "data-animated-weekdays": t.animate ? "true" : void 0, className: c[W.Weekdays], style: k?.[W.Weekdays] },
              C && T.createElement(r.WeekNumberHeader, { "aria-label": ql(a.options), className: c[W.WeekNumberHeader], style: k?.[W.WeekNumberHeader], scope: "col" }, F()),
              Kl.map((H) => T.createElement(r.Weekday, { "aria-label": Gl(H, a.options, a), className: c[W.Weekday], key: String(H), style: k?.[W.Weekday], scope: "col" }, Y(H, a.options, a)))
            ),
            T.createElement(r.Weeks, { "data-animated-weeks": t.animate ? "true" : void 0, className: c[W.Weeks], style: k?.[W.Weeks] }, q.weeks.map((H) => T.createElement(
              r.Week,
              { className: c[W.Week], key: H.weekNumber, style: k?.[W.Week], week: H },
              C && T.createElement(r.WeekNumber, { week: H, style: k?.[W.WeekNumber], "aria-label": Ul(H.weekNumber, {
                locale: i
              }), className: c[W.WeekNumber], scope: "row", role: "rowheader" }, R(H.weekNumber, a)),
              H.days.map((re) => {
                const { date: we } = re, J = Ee(re);
                if (J[ue.focused] = !J.hidden && !!L?.isEqualTo(re), J[Ae.selected] = Pe?.(we) || J.selected, or(ie)) {
                  const { from: br, to: yr } = ie;
                  J[Ae.range_start] = !!(br && yr && a.isSameDay(we, br)), J[Ae.range_end] = !!(br && yr && a.isSameDay(we, yr)), J[Ae.range_middle] = Qe(ie, we, !0, a);
                }
                const ld = fy(J, k, t.modifiersStyles), dd = Ub(J, c, t.modifiersClassNames), ud = !_o && !J.hidden ? le(we, J, a.options, a) : void 0;
                return T.createElement(r.Day, { key: `${re.isoDate}_${re.displayMonthId}`, day: re, modifiers: J, className: dd.join(" "), style: ld, role: "gridcell", "aria-selected": J.selected || void 0, "aria-label": ud, "data-day": re.isoDate, "data-month": re.outside ? re.dateMonthId : void 0, "data-selected": J.selected || void 0, "data-disabled": J.disabled || void 0, "data-hidden": J.hidden || void 0, "data-outside": re.outside || void 0, "data-focused": J.focused || void 0, "data-today": J.today || void 0 }, !J.hidden && _o ? T.createElement(r.DayButton, { className: c[W.DayButton], style: k?.[W.DayButton], type: "button", day: re, modifiers: J, disabled: !J.focused && J.disabled || void 0, "aria-disabled": J.focused && J.disabled || void 0, tabIndex: ce(re) ? 0 : -1, "aria-label": ne(we, J, a.options, a), onClick: Zl(re, J), onBlur: Jl(re, J), onFocus: Ql(re, J), onKeyDown: ed(re, J), onMouseEnter: td(re, J), onMouseLeave: nd(re, J) }, N(we, a.options, a)) : !J.hidden && N(re.date, a.options, a));
              })
            )))
          )
        ))
      ),
      t.footer && T.createElement(r.Footer, { className: c[W.Footer], style: k?.[W.Footer], role: "status", "aria-live": "polite" }, t.footer)
    )
  );
}
function No({ className: e, classNames: t, ...n }) {
  return /* @__PURE__ */ d(
    zy,
    {
      locale: gb,
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
No.displayName = "Calendar";
function $y({
  value: e,
  onChange: t,
  placeholder: n = "Seleziona data...",
  label: r,
  error: o,
  helperText: s,
  disabled: a,
  className: i,
  displayFormat: c = "dd/MM/yyyy"
}) {
  const l = u.useId();
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ d("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(er, { children: [
      /* @__PURE__ */ d(tr, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: l,
          type: "button",
          disabled: a,
          className: P(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !e && "text-text-muted",
            o && "border-error focus:ring-error focus:border-error",
            i
          ),
          children: [
            /* @__PURE__ */ d(Js, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ d("span", { className: "truncate", children: e ? Ze(e, c) : n })
          ]
        }
      ) }),
      /* @__PURE__ */ d(fn, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ d(
        No,
        {
          mode: "single",
          selected: e,
          onSelect: t,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ d("p", { className: "text-xs text-error-fg", children: o }),
    s && !o && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: s })
  ] });
}
$y.displayName = "DatePicker";
function By({
  value: e,
  onChange: t,
  placeholder: n = "Seleziona intervallo...",
  label: r,
  error: o,
  helperText: s,
  disabled: a,
  className: i,
  displayFormat: c = "dd/MM/yyyy",
  numberOfMonths: l = 2
}) {
  const f = u.useId(), m = u.useMemo(() => e?.from ? e.to ? `${Ze(e.from, c)} — ${Ze(e.to, c)}` : Ze(e.from, c) : null, [e, c]);
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    r && /* @__PURE__ */ d("label", { htmlFor: f, className: "block text-sm font-medium text-text-base", children: r }),
    /* @__PURE__ */ E(er, { children: [
      /* @__PURE__ */ d(tr, { asChild: !0, children: /* @__PURE__ */ E(
        "button",
        {
          id: f,
          type: "button",
          disabled: a,
          className: P(
            "flex h-10 w-full items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !m && "text-text-muted",
            o && "border-error focus:ring-error focus:border-error",
            i
          ),
          children: [
            /* @__PURE__ */ d(Js, { className: "h-4 w-4 text-text-muted shrink-0" }),
            /* @__PURE__ */ d("span", { className: "truncate", children: m ?? n })
          ]
        }
      ) }),
      /* @__PURE__ */ d(fn, { className: "w-auto p-0", align: "start", children: /* @__PURE__ */ d(
        No,
        {
          mode: "range",
          selected: e,
          onSelect: t,
          numberOfMonths: l,
          autoFocus: !0
        }
      ) })
    ] }),
    o && /* @__PURE__ */ d("p", { className: "text-xs text-error-fg", children: o }),
    s && !o && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: s })
  ] });
}
By.displayName = "DateRangePicker";
// @__NO_SIDE_EFFECTS__
function Hy(e) {
  const t = /* @__PURE__ */ Yy(e), n = u.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = u.Children.toArray(s), c = i.find(jy);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Yy(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const a = Uy(o), i = Gy(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ot(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Vy = /* @__PURE__ */ Symbol("radix.slottable");
function jy(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vy;
}
function Gy(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Uy(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ar = "Dialog", [qi] = rt(ar), [qy, Le] = qi(ar), Xi = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: a = !0
  } = e, i = u.useRef(null), c = u.useRef(null), [l, f] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: ar
  });
  return /* @__PURE__ */ d(
    qy,
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
      modal: a,
      children: n
    }
  );
};
Xi.displayName = ar;
var Ki = "DialogTrigger", Zi = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(Ki, n), s = te(t, o.triggerRef);
    return /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Po(o.open),
        ...r,
        ref: s,
        onClick: B(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Zi.displayName = Ki;
var Mo = "DialogPortal", [Xy, Qi] = qi(Mo, {
  forceMount: void 0
}), Ji = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = Le(Mo, t);
  return /* @__PURE__ */ d(Xy, { scope: t, forceMount: n, children: u.Children.map(r, (a) => /* @__PURE__ */ d(Fe, { present: n || s.open, children: /* @__PURE__ */ d(Kn, { asChild: !0, container: o, children: a }) })) });
};
Ji.displayName = Mo;
var Fn = "DialogOverlay", ec = u.forwardRef(
  (e, t) => {
    const n = Qi(Fn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Le(Fn, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ d(Fe, { present: r || s.open, children: /* @__PURE__ */ d(Zy, { ...o, ref: t }) }) : null;
  }
);
ec.displayName = Fn;
var Ky = /* @__PURE__ */ Hy("DialogOverlay.RemoveScroll"), Zy = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(Fn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ d(Qn, { as: Ky, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ d(
        X.div,
        {
          "data-state": Po(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Mt = "DialogContent", tc = u.forwardRef(
  (e, t) => {
    const n = Qi(Mt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = Le(Mt, e.__scopeDialog);
    return /* @__PURE__ */ d(Fe, { present: r || s.open, children: s.modal ? /* @__PURE__ */ d(Qy, { ...o, ref: t }) : /* @__PURE__ */ d(Jy, { ...o, ref: t }) });
  }
);
tc.displayName = Mt;
var Qy = u.forwardRef(
  (e, t) => {
    const n = Le(Mt, e.__scopeDialog), r = u.useRef(null), o = te(t, n.contentRef, r);
    return u.useEffect(() => {
      const s = r.current;
      if (s) return ho(s);
    }, []), /* @__PURE__ */ d(
      nc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: B(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: B(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || i) && s.preventDefault();
        }),
        onFocusOutside: B(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Jy = u.forwardRef(
  (e, t) => {
    const n = Le(Mt, e.__scopeDialog), r = u.useRef(!1), o = u.useRef(!1);
    return /* @__PURE__ */ d(
      nc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = s.target;
          n.triggerRef.current?.contains(a) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), nc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...a } = e, i = Le(Mt, n), c = u.useRef(null), l = te(t, c);
    return ro(), /* @__PURE__ */ E(Ge, { children: [
      /* @__PURE__ */ d(
        Vn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ d(
            Yn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Po(i.open),
              ...a,
              ref: l,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ E(Ge, { children: [
        /* @__PURE__ */ d(ev, { titleId: i.titleId }),
        /* @__PURE__ */ d(nv, { contentRef: c, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Eo = "DialogTitle", rc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(Eo, n);
    return /* @__PURE__ */ d(X.h2, { id: o.titleId, ...r, ref: t });
  }
);
rc.displayName = Eo;
var oc = "DialogDescription", sc = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(oc, n);
    return /* @__PURE__ */ d(X.p, { id: o.descriptionId, ...r, ref: t });
  }
);
sc.displayName = oc;
var ac = "DialogClose", ic = u.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Le(ac, n);
    return /* @__PURE__ */ d(
      X.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: B(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
ic.displayName = ac;
function Po(e) {
  return e ? "open" : "closed";
}
var cc = "DialogTitleWarning", [Vx, lc] = sf(cc, {
  contentName: Mt,
  titleName: Eo,
  docsSlug: "dialog"
}), ev = ({ titleId: e }) => {
  const t = lc(cc), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return u.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, tv = "DialogDescriptionWarning", nv = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${lc(tv).contentName}}.`;
  return u.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, rv = Xi, ov = Zi, sv = Ji, dc = ec, uc = tc, fc = rc, mc = sc, hc = ic;
const jx = rv, Gx = ov, av = sv, Ux = hc, pc = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  dc,
  {
    ref: n,
    className: P(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
pc.displayName = dc.displayName;
const iv = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(av, { children: [
  /* @__PURE__ */ d(pc, {}),
  /* @__PURE__ */ E(
    uc,
    {
      ref: r,
      className: P(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ E(hc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ d(Hn, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
iv.displayName = uc.displayName;
const cv = ({
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
cv.displayName = "DialogHeader";
const lv = ({
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
lv.displayName = "DialogFooter";
const dv = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  fc,
  {
    ref: n,
    className: P(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
dv.displayName = fc.displayName;
const uv = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  mc,
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
uv.displayName = mc.displayName;
function qx({
  icon: e,
  title: t,
  description: n,
  action: r,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ E(
    "div",
    {
      className: P(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        o
      ),
      ...s,
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
const fv = [
  "prose prose-sm max-w-none",
  "prose-headings:text-text-base",
  "prose-p:text-text-base",
  "prose-strong:text-text-base",
  "prose-li:text-text-base",
  "prose-a:text-databeez-primary",
  "prose-code:text-databeez-primary prose-code:bg-subtle prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs",
  "prose-pre:bg-subtle prose-pre:border prose-pre:border-border prose-pre:rounded-lg",
  "prose-table:text-text-base",
  "prose-th:text-text-base prose-th:border prose-th:border-border prose-th:px-2 prose-th:py-1",
  "prose-td:text-text-base prose-td:border prose-td:border-border prose-td:px-2 prose-td:py-1"
].join(" "), mv = u.forwardRef(
  ({ children: e, className: t }, n) => /* @__PURE__ */ d("div", { ref: n, className: P(fv, t), children: e })
);
mv.displayName = "MarkdownContent";
function Xx({
  content: e,
  role: t,
  onRegenerate: n,
  onFeedback: r,
  showActions: o,
  children: s,
  className: a
}) {
  const i = t === "user", [c, l] = u.useState(null), f = (m) => {
    const h = c === m ? null : m;
    l(h), r?.(h);
  };
  return /* @__PURE__ */ d(
    "div",
    {
      className: P(
        "flex flex-col gap-1",
        i ? "items-end" : "items-start",
        a
      ),
      children: /* @__PURE__ */ E("div", { className: "flex flex-col max-w-[80%]", children: [
        /* @__PURE__ */ d(
          "div",
          {
            className: P(
              "rounded-2xl px-4 py-3 text-sm leading-relaxed",
              i ? "bg-databeez-primary text-white rounded-tr-sm" : "bg-surface border border-border text-text-base rounded-tl-sm"
            ),
            children: i ? /* @__PURE__ */ d("p", { className: "whitespace-pre-wrap", children: e }) : s ?? /* @__PURE__ */ d("p", { className: "whitespace-pre-wrap", children: e })
          }
        ),
        !i && o && /* @__PURE__ */ E("div", { className: "flex items-center gap-1 self-end mt-1", children: [
          /* @__PURE__ */ d(ap, { text: e }),
          n && /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              onClick: n,
              "aria-label": "Rigenera risposta",
              className: "inline-flex items-center text-text-muted hover:text-text-base transition-colors",
              children: /* @__PURE__ */ d(_d, { className: "h-4 w-4" })
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
                c === "up" ? "text-success-fg" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ d(Bd, { className: "h-4 w-4" })
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
                c === "down" ? "text-error-fg" : "text-text-muted hover:text-text-base"
              ),
              children: /* @__PURE__ */ d($d, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    }
  );
}
function Kx({
  icon: e,
  iconColor: t,
  iconBg: n,
  title: r,
  description: o,
  action: s,
  horizontal: a = !1,
  className: i,
  ...c
}) {
  return a ? /* @__PURE__ */ d(
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
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10",
            style: n ? { backgroundColor: n } : void 0,
            children: /* @__PURE__ */ d(e, { className: "h-6 w-6 text-primary", style: t ? { color: t } : void 0 })
          }
        ),
        /* @__PURE__ */ E("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ d("h3", { className: "text-base font-semibold text-text-base", children: r }),
          o && /* @__PURE__ */ d("p", { className: "mt-1 text-sm text-text-muted", children: o }),
          s && /* @__PURE__ */ d("div", { className: "mt-3", children: s })
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
            className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-primary/10",
            style: n ? { backgroundColor: n } : void 0,
            children: /* @__PURE__ */ d(e, { className: "h-8 w-8 text-primary", style: t ? { color: t } : void 0 })
          }
        ),
        /* @__PURE__ */ d("h3", { className: "text-lg font-semibold text-text-base mb-3", children: r }),
        o && /* @__PURE__ */ d("p", { className: "text-text-muted text-sm leading-relaxed", children: o }),
        s && /* @__PURE__ */ d("div", { className: "mt-5", children: s })
      ]
    }
  );
}
const wt = 8, gc = 32, bc = 140;
function hv(e, t, n) {
  const r = u.useCallback((c) => typeof window > "u" ? c : {
    x: Math.min(
      Math.max(c.x, wt),
      Math.max(wt, window.innerWidth - wt - bc)
    ),
    y: Math.min(
      Math.max(c.y, wt),
      Math.max(wt, window.innerHeight - gc - wt)
    )
  }, []), [o, s] = u.useState(() => {
    if (typeof window > "u") return { x: 100, y: 100 };
    const c = e === "right" ? window.innerWidth - t : t;
    return r({ x: c, y: window.innerHeight - n });
  }), a = u.useRef(o);
  a.current = o, u.useEffect(() => {
    const c = () => s((l) => r(l));
    return window.addEventListener("resize", c), () => window.removeEventListener("resize", c);
  }, [r]);
  function i(c) {
    if (c.button !== 0) return;
    c.preventDefault(), c.stopPropagation();
    const l = c.clientX - a.current.x, f = c.clientY - a.current.y, m = (p) => s(r({ x: p.clientX - l, y: p.clientY - f })), h = () => {
      window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", h);
    };
    window.addEventListener("mousemove", m), window.addEventListener("mouseup", h);
  }
  return { pos: o, startDrag: i };
}
function pv(e) {
  return typeof window > "u" ? 400 : Math.max(120, window.innerHeight - e - gc - wt * 2);
}
function Zx({
  title: e,
  children: t,
  anchor: n = "right",
  offsetX: r = 240,
  offsetY: o = 480,
  collapsible: s = !0,
  collapsed: a,
  defaultCollapsed: i = !1,
  onCollapsedChange: c,
  className: l
}) {
  const [f, m] = u.useState(i), h = a !== void 0, p = h ? !!a : f;
  function y() {
    const v = !p;
    h || m(v), c?.(v);
  }
  const { pos: g, startDrag: b } = hv(n, r, o);
  return /* @__PURE__ */ E(
    "div",
    {
      className: P(
        "fixed z-50 overflow-hidden rounded-md border border-border bg-surface shadow-lg",
        l
      ),
      style: { minWidth: bc, left: g.x, top: g.y },
      onMouseDown: (v) => v.stopPropagation(),
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
              /* @__PURE__ */ d(Nd, { className: "h-3 w-3 shrink-0 text-text-muted" }),
              /* @__PURE__ */ d("span", { className: "flex-1 truncate text-[10px] font-semibold uppercase tracking-wide text-text-muted", children: e }),
              s && /* @__PURE__ */ d(
                "button",
                {
                  type: "button",
                  onClick: (v) => {
                    v.stopPropagation(), y();
                  },
                  "aria-label": p ? "Espandi pannello" : "Comprimi pannello",
                  className: "flex shrink-0 items-center justify-center leading-none text-text-base",
                  children: p ? /* @__PURE__ */ d(ln, { className: "h-3 w-3" }) : /* @__PURE__ */ d(ta, { className: "h-3 w-3" })
                }
              )
            ]
          }
        ),
        !p && /* @__PURE__ */ d(
          "div",
          {
            className: "flex flex-col gap-1.5 overflow-y-auto p-2.5",
            style: { maxHeight: pv(g.y) },
            children: t
          }
        )
      ]
    }
  );
}
const gv = Gs(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, a) => {
    const i = fd(), c = o || i;
    return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ d("label", { htmlFor: c, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ d(
        "input",
        {
          id: c,
          className: Jr(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            n && "border-error focus:border-error focus:ring-error",
            e
          ),
          ref: a,
          ...s
        }
      ),
      n && /* @__PURE__ */ d("p", { className: "text-sm text-error-fg", children: n }),
      r && !n && /* @__PURE__ */ d("p", { className: "text-sm text-text-muted", children: r })
    ] });
  }
);
gv.displayName = "Input";
const bv = u.forwardRef(
  ({
    icon: e,
    label: t,
    error: n,
    helperText: r,
    rightElement: o,
    className: s,
    id: a,
    ...i
  }, c) => {
    const l = u.useId(), f = a ?? l;
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
              n && "border-error focus:ring-error focus:border-error",
              s
            ),
            ...i
          }
        ),
        o && /* @__PURE__ */ d("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: o })
      ] }),
      n && /* @__PURE__ */ d("p", { className: "text-xs text-error-fg", children: n }),
      r && !n && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: r })
    ] });
  }
);
bv.displayName = "InputWithIcon";
const yv = {
  GET: "bg-success-bg text-success-fg border-success-border",
  POST: "bg-info-bg text-info-fg border-info-border",
  PUT: "bg-warning-bg text-warning-fg border-warning-border",
  PATCH: "bg-warning-bg text-warning-fg border-warning-border",
  DELETE: "bg-error-bg text-error-fg border-error-border",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function Qx({ method: e, className: t, ...n }) {
  const r = e.toUpperCase(), o = yv[r] ?? "bg-subtle text-text-muted border-border";
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
function Jx({
  title: e,
  description: t,
  actions: n,
  breadcrumb: r,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: P("bg-surface border-b border-border", o),
      ...s,
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
const vv = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  // accent-fg e non accent: in beegraph `bg-accent` è ridefinito dal tema shadcn
  accent: "bg-accent-fg"
};
function ew({
  value: e,
  max: t = 100,
  tone: n = "primary",
  label: r,
  showValue: o = !1,
  className: s,
  "aria-label": a,
  "aria-labelledby": i,
  "aria-valuetext": c,
  ...l
}) {
  const f = t > 0 ? t : 100, m = Number.isFinite(e) ? Math.min(Math.max(e, 0), f) : 0, h = m / f * 100;
  return /* @__PURE__ */ E("div", { className: P("space-y-1", s), ...l, children: [
    (r || o) && /* @__PURE__ */ E("div", { className: "flex items-center justify-between text-xs", children: [
      r && /* @__PURE__ */ d("span", { className: "text-text-muted", children: r }),
      o && /* @__PURE__ */ E("span", { className: "ml-auto font-medium tabular-nums text-text-base", children: [
        Math.round(h),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ d(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": m,
        "aria-valuemin": 0,
        "aria-valuemax": f,
        "aria-valuetext": c,
        "aria-labelledby": i,
        "aria-label": i ? void 0 : a ?? r ?? "Avanzamento",
        className: "h-2 overflow-hidden rounded-full bg-emphasis",
        children: /* @__PURE__ */ d(
          "div",
          {
            className: P("h-full rounded-full transition-all", vv[n]),
            style: { width: `${h}%` }
          }
        )
      }
    )
  ] });
}
var xv = u.createContext(void 0);
function ir(e) {
  const t = u.useContext(xv);
  return e || t || "ltr";
}
function jr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function wv(e, t) {
  return u.useReducer((n, r) => t[n][r] ?? n, e);
}
var Do = "ScrollArea", [yc] = rt(Do), [Sv, Oe] = yc(Do), vc = u.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...a
    } = e, [i, c] = u.useState(null), [l, f] = u.useState(null), [m, h] = u.useState(null), [p, y] = u.useState(null), [g, b] = u.useState(null), [v, x] = u.useState(0), [w, S] = u.useState(0), [C, k] = u.useState(!1), [M, N] = u.useState(!1), D = te(t, (F) => c(F)), R = ir(o);
    return /* @__PURE__ */ d(
      Sv,
      {
        scope: n,
        type: r,
        dir: R,
        scrollHideDelay: s,
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
        onCornerWidthChange: x,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ d(
          X.div,
          {
            dir: R,
            ...a,
            ref: D,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": v + "px",
              "--radix-scroll-area-corner-height": w + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
vc.displayName = Do;
var xc = "ScrollAreaViewport", wc = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, a = Oe(xc, n), i = u.useRef(null), c = te(t, i, a.onViewportChange);
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
          children: /* @__PURE__ */ d("div", { ref: a.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
wc.displayName = xc;
var Xe = "ScrollAreaScrollbar", Oo = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Oe(Xe, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: a } = o, i = e.orientation === "horizontal";
    return u.useEffect(() => (i ? s(!0) : a(!0), () => {
      i ? s(!1) : a(!1);
    }), [i, s, a]), o.type === "hover" ? /* @__PURE__ */ d(kv, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ d(Cv, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ d(Sc, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ d(To, { ...r, ref: t }) : null;
  }
);
Oo.displayName = Xe;
var kv = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Oe(Xe, e.__scopeScrollArea), [s, a] = u.useState(!1);
  return u.useEffect(() => {
    const i = o.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), a(!0);
      }, f = () => {
        c = window.setTimeout(() => a(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", f), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ d(Fe, { present: n || s, children: /* @__PURE__ */ d(
    Sc,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Cv = u.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Oe(Xe, e.__scopeScrollArea), s = e.orientation === "horizontal", a = lr(() => c("SCROLL_END"), 100), [i, c] = wv("hidden", {
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
    const l = o.viewport, f = s ? "scrollLeft" : "scrollTop";
    if (l) {
      let m = l[f];
      const h = () => {
        const p = l[f];
        m !== p && (c("SCROLL"), a()), m = p;
      };
      return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
    }
  }, [o.viewport, s, c, a]), /* @__PURE__ */ d(Fe, { present: n || i !== "hidden", children: /* @__PURE__ */ d(
    To,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: B(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: B(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), Sc = u.forwardRef((e, t) => {
  const n = Oe(Xe, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, a] = u.useState(!1), i = e.orientation === "horizontal", c = lr(() => {
    if (n.viewport) {
      const l = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      a(i ? l : f);
    }
  }, 10);
  return jt(n.viewport, c), jt(n.content, c), /* @__PURE__ */ d(Fe, { present: r || s, children: /* @__PURE__ */ d(
    To,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), To = u.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Oe(Xe, e.__scopeScrollArea), s = u.useRef(null), a = u.useRef(0), [i, c] = u.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), l = Ec(i.viewport, i.content), f = {
    ...r,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => s.current = h,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (h) => a.current = h
  };
  function m(h, p) {
    return Ov(h, a.current, i, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ d(
    Nv,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const h = o.viewport.scrollLeft, p = Ys(h, i, o.dir);
          s.current.style.transform = `translate3d(${p}px, 0, 0)`;
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
    Mv,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const h = o.viewport.scrollTop, p = Ys(h, i);
          s.current.style.transform = `translate3d(0, ${p}px, 0)`;
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
}), Nv = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Oe(Xe, e.__scopeScrollArea), [a, i] = u.useState(), c = u.useRef(null), l = te(t, c, s.onScrollbarXChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ d(
    Cc,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: l,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": cr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, m) => {
        if (s.viewport) {
          const h = s.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(h), Dc(h, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: zn(a.paddingLeft),
            paddingEnd: zn(a.paddingRight)
          }
        });
      }
    }
  );
}), Mv = u.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = Oe(Xe, e.__scopeScrollArea), [a, i] = u.useState(), c = u.useRef(null), l = te(t, c, s.onScrollbarYChange);
  return u.useEffect(() => {
    c.current && i(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ d(
    Cc,
    {
      "data-orientation": "vertical",
      ...o,
      ref: l,
      sizes: n,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": cr(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, m) => {
        if (s.viewport) {
          const h = s.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(h), Dc(h, m) && f.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && a && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: zn(a.paddingTop),
            paddingEnd: zn(a.paddingBottom)
          }
        });
      }
    }
  );
}), [Ev, kc] = yc(Xe), Cc = u.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: s,
    onThumbPointerUp: a,
    onThumbPointerDown: i,
    onThumbPositionChange: c,
    onDragScroll: l,
    onWheelScroll: f,
    onResize: m,
    ...h
  } = e, p = Oe(Xe, n), [y, g] = u.useState(null), b = te(t, (D) => g(D)), v = u.useRef(null), x = u.useRef(""), w = p.viewport, S = r.content - r.viewport, C = ve(f), k = ve(c), M = lr(m, 10);
  function N(D) {
    if (v.current) {
      const R = D.clientX - v.current.left, F = D.clientY - v.current.top;
      l({ x: R, y: F });
    }
  }
  return u.useEffect(() => {
    const D = (R) => {
      const F = R.target;
      y?.contains(F) && C(R, S);
    };
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [w, y, S, C]), u.useEffect(k, [r, k]), jt(y, M), jt(p.content, M), /* @__PURE__ */ d(
    Ev,
    {
      scope: n,
      scrollbar: y,
      hasThumb: o,
      onThumbChange: ve(s),
      onThumbPointerUp: ve(a),
      onThumbPositionChange: k,
      onThumbPointerDown: ve(i),
      children: /* @__PURE__ */ d(
        X.div,
        {
          ...h,
          ref: b,
          style: { position: "absolute", ...h.style },
          onPointerDown: B(e.onPointerDown, (D) => {
            D.button === 0 && (D.target.setPointerCapture(D.pointerId), v.current = y.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), N(D));
          }),
          onPointerMove: B(e.onPointerMove, N),
          onPointerUp: B(e.onPointerUp, (D) => {
            const R = D.target;
            R.hasPointerCapture(D.pointerId) && R.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = x.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null;
          })
        }
      )
    }
  );
}), Ln = "ScrollAreaThumb", Nc = u.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = kc(Ln, e.__scopeScrollArea);
    return /* @__PURE__ */ d(Fe, { present: n || o.hasThumb, children: /* @__PURE__ */ d(Pv, { ref: t, ...r }) });
  }
), Pv = u.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = Oe(Ln, n), a = kc(Ln, n), { onThumbPositionChange: i } = a, c = te(
      t,
      (m) => a.onThumbChange(m)
    ), l = u.useRef(void 0), f = lr(() => {
      l.current && (l.current(), l.current = void 0);
    }, 100);
    return u.useEffect(() => {
      const m = s.viewport;
      if (m) {
        const h = () => {
          if (f(), !l.current) {
            const p = Tv(m, i);
            l.current = p, i();
          }
        };
        return i(), m.addEventListener("scroll", h), () => m.removeEventListener("scroll", h);
      }
    }, [s.viewport, f, i]), /* @__PURE__ */ d(
      X.div,
      {
        "data-state": a.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: B(e.onPointerDownCapture, (m) => {
          const p = m.target.getBoundingClientRect(), y = m.clientX - p.left, g = m.clientY - p.top;
          a.onThumbPointerDown({ x: y, y: g });
        }),
        onPointerUp: B(e.onPointerUp, a.onThumbPointerUp)
      }
    );
  }
);
Nc.displayName = Ln;
var Ro = "ScrollAreaCorner", Mc = u.forwardRef(
  (e, t) => {
    const n = Oe(Ro, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ d(Dv, { ...e, ref: t }) : null;
  }
);
Mc.displayName = Ro;
var Dv = u.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Oe(Ro, n), [s, a] = u.useState(0), [i, c] = u.useState(0), l = !!(s && i);
  return jt(o.scrollbarX, () => {
    const f = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(f), c(f);
  }), jt(o.scrollbarY, () => {
    const f = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(f), a(f);
  }), l ? /* @__PURE__ */ d(
    X.div,
    {
      ...r,
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
function zn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ec(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function cr(e) {
  const t = Ec(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Ov(e, t, n, r = "ltr") {
  const o = cr(n), s = o / 2, a = t || s, i = o - a, c = n.scrollbar.paddingStart + a, l = n.scrollbar.size - n.scrollbar.paddingEnd - i, f = n.content - n.viewport, m = r === "ltr" ? [0, f] : [f * -1, 0];
  return Pc([c, l], m)(e);
}
function Ys(e, t, n = "ltr") {
  const r = cr(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, a = t.content - t.viewport, i = s - r, c = n === "ltr" ? [0, a] : [a * -1, 0], l = jr(e, c);
  return Pc([0, a], [0, i])(l);
}
function Pc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Dc(e, t) {
  return e > 0 && e < t;
}
var Tv = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, a = n.left !== s.left, i = n.top !== s.top;
    (a || i) && t(), n = s, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function lr(e, t) {
  const n = ve(e), r = u.useRef(0);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), u.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function jt(e, t) {
  const n = ve(t);
  ge(() => {
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
var Oc = vc, Rv = wc, Av = Mc;
const Iv = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  Oc,
  {
    ref: r,
    className: P("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ d(Rv, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ d(Tc, {}),
      /* @__PURE__ */ d(Av, {})
    ]
  }
));
Iv.displayName = Oc.displayName;
const Tc = u.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ d(
  Oo,
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
    children: /* @__PURE__ */ d(Nc, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Tc.displayName = Oo.displayName;
const _v = u.forwardRef(
  ({ value: e, onChange: t, onClear: n, className: r, placeholder: o = "Cerca...", ...s }, a) => {
    const i = () => {
      t(""), n?.();
    };
    return /* @__PURE__ */ E("div", { className: P("relative", r), children: [
      /* @__PURE__ */ d(sa, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ d(
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
      e && /* @__PURE__ */ d(
        "button",
        {
          type: "button",
          onClick: i,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ d(Hn, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
_v.displayName = "SearchInput";
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  const t = /* @__PURE__ */ Wv(e), n = u.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = u.Children.toArray(s), c = i.find(Lv);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Wv(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const a = $v(o), i = zv(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ot(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Fv = /* @__PURE__ */ Symbol("radix.slottable");
function Lv(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Fv;
}
function zv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function $v(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Rc(e) {
  const t = e + "CollectionProvider", [n, r] = rt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (g) => {
    const { scope: b, children: v } = g, x = T.useRef(null), w = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ d(o, { scope: b, itemMap: w, collectionRef: x, children: v });
  };
  a.displayName = t;
  const i = e + "CollectionSlot", c = /* @__PURE__ */ Vs(i), l = T.forwardRef(
    (g, b) => {
      const { scope: v, children: x } = g, w = s(i, v), S = te(b, w.collectionRef);
      return /* @__PURE__ */ d(c, { ref: S, children: x });
    }
  );
  l.displayName = i;
  const f = e + "CollectionItemSlot", m = "data-radix-collection-item", h = /* @__PURE__ */ Vs(f), p = T.forwardRef(
    (g, b) => {
      const { scope: v, children: x, ...w } = g, S = T.useRef(null), C = te(b, S), k = s(f, v);
      return T.useEffect(() => (k.itemMap.set(S, { ref: S, ...w }), () => {
        k.itemMap.delete(S);
      })), /* @__PURE__ */ d(h, { [m]: "", ref: C, children: x });
    }
  );
  p.displayName = f;
  function y(g) {
    const b = s(e + "CollectionConsumer", g);
    return T.useCallback(() => {
      const x = b.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${m}]`));
      return Array.from(b.itemMap.values()).sort(
        (k, M) => w.indexOf(k.ref.current) - w.indexOf(M.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: p },
    y,
    r
  ];
}
// @__NO_SIDE_EFFECTS__
function Bv(e) {
  const t = /* @__PURE__ */ Hv(e), n = u.forwardRef((r, o) => {
    const { children: s, ...a } = r, i = u.Children.toArray(s), c = i.find(Vv);
    if (c) {
      const l = c.props.children, f = i.map((m) => m === c ? u.Children.count(l) > 1 ? u.Children.only(null) : u.isValidElement(l) ? l.props.children : null : m);
      return /* @__PURE__ */ d(t, { ...a, ref: o, children: u.isValidElement(l) ? u.cloneElement(l, void 0, f) : null });
    }
    return /* @__PURE__ */ d(t, { ...a, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Hv(e) {
  const t = u.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (u.isValidElement(o)) {
      const a = Gv(o), i = jv(s, o.props);
      return o.type !== u.Fragment && (i.ref = r ? Ot(r, a) : a), u.cloneElement(o, i);
    }
    return u.Children.count(o) > 1 ? u.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Yv = /* @__PURE__ */ Symbol("radix.slottable");
function Vv(e) {
  return u.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Yv;
}
function jv(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...i) => {
      const c = s(...i);
      return o(...i), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gv(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ac(e) {
  const t = u.useRef({ value: e, previous: e });
  return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Ic = Object.freeze({
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
}), Uv = "VisuallyHidden", qv = u.forwardRef(
  (e, t) => /* @__PURE__ */ d(
    X.span,
    {
      ...e,
      ref: t,
      style: { ...Ic, ...e.style }
    }
  )
);
qv.displayName = Uv;
var Xv = [" ", "Enter", "ArrowUp", "ArrowDown"], Kv = [" ", "Enter"], Et = "Select", [dr, ur, Zv] = Rc(Et), [qt] = rt(Et, [
  Zv,
  Xn
]), fr = Xn(), [Qv, gt] = qt(Et), [Jv, e1] = qt(Et), _c = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: a,
    defaultValue: i,
    onValueChange: c,
    dir: l,
    name: f,
    autoComplete: m,
    disabled: h,
    required: p,
    form: y
  } = e, g = fr(t), [b, v] = u.useState(null), [x, w] = u.useState(null), [S, C] = u.useState(!1), k = ir(l), [M, N] = Nt({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: Et
  }), [D, R] = Nt({
    prop: a,
    defaultProp: i,
    onChange: c,
    caller: Et
  }), F = u.useRef(null), Y = b ? y || !!b.closest("form") : !0, [j, $] = u.useState(/* @__PURE__ */ new Set()), K = Array.from(j).map((_) => _.props.value).join(";");
  return /* @__PURE__ */ d(Ua, { ...g, children: /* @__PURE__ */ E(
    Qv,
    {
      required: p,
      scope: t,
      trigger: b,
      onTriggerChange: v,
      valueNode: x,
      onValueNodeChange: w,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: C,
      contentId: et(),
      value: D,
      onValueChange: R,
      open: M,
      onOpenChange: N,
      dir: k,
      triggerPointerDownPosRef: F,
      disabled: h,
      children: [
        /* @__PURE__ */ d(dr.Provider, { scope: t, children: /* @__PURE__ */ d(
          Jv,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: u.useCallback((_) => {
              $((G) => new Set(G).add(_));
            }, []),
            onNativeOptionRemove: u.useCallback((_) => {
              $((G) => {
                const z = new Set(G);
                return z.delete(_), z;
              });
            }, []),
            children: n
          }
        ) }),
        Y ? /* @__PURE__ */ E(
          al,
          {
            "aria-hidden": !0,
            required: p,
            tabIndex: -1,
            name: f,
            autoComplete: m,
            value: D,
            onChange: (_) => R(_.target.value),
            disabled: h,
            form: y,
            children: [
              D === void 0 ? /* @__PURE__ */ d("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
_c.displayName = Et;
var Wc = "SelectTrigger", Fc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = fr(n), a = gt(Wc, n), i = a.disabled || r, c = te(t, a.onTriggerChange), l = ur(n), f = u.useRef("touch"), [m, h, p] = cl((g) => {
      const b = l().filter((w) => !w.disabled), v = b.find((w) => w.value === a.value), x = ll(b, g, v);
      x !== void 0 && a.onValueChange(x.value);
    }), y = (g) => {
      i || (a.onOpenChange(!0), p()), g && (a.triggerPointerDownPosRef.current = {
        x: Math.round(g.pageX),
        y: Math.round(g.pageY)
      });
    };
    return /* @__PURE__ */ d(mo, { asChild: !0, ...s, children: /* @__PURE__ */ d(
      X.button,
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
        "data-placeholder": il(a.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: B(o.onClick, (g) => {
          g.currentTarget.focus(), f.current !== "mouse" && y(g);
        }),
        onPointerDown: B(o.onPointerDown, (g) => {
          f.current = g.pointerType;
          const b = g.target;
          b.hasPointerCapture(g.pointerId) && b.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && g.pointerType === "mouse" && (y(g), g.preventDefault());
        }),
        onKeyDown: B(o.onKeyDown, (g) => {
          const b = m.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && h(g.key), !(b && g.key === " ") && Xv.includes(g.key) && (y(), g.preventDefault());
        })
      }
    ) });
  }
);
Fc.displayName = Wc;
var Lc = "SelectValue", zc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: a = "", ...i } = e, c = gt(Lc, n), { onValueNodeHasChildrenChange: l } = c, f = s !== void 0, m = te(t, c.onValueNodeChange);
    return ge(() => {
      l(f);
    }, [l, f]), /* @__PURE__ */ d(
      X.span,
      {
        ...i,
        ref: m,
        style: { pointerEvents: "none" },
        children: il(c.value) ? /* @__PURE__ */ d(Ge, { children: a }) : s
      }
    );
  }
);
zc.displayName = Lc;
var t1 = "SelectIcon", $c = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ d(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
$c.displayName = t1;
var n1 = "SelectPortal", Bc = (e) => /* @__PURE__ */ d(Kn, { asChild: !0, ...e });
Bc.displayName = n1;
var Pt = "SelectContent", Hc = u.forwardRef(
  (e, t) => {
    const n = gt(Pt, e.__scopeSelect), [r, o] = u.useState();
    if (ge(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Bn.createPortal(
        /* @__PURE__ */ d(Yc, { scope: e.__scopeSelect, children: /* @__PURE__ */ d(dr.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ d("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ d(Vc, { ...e, ref: t });
  }
);
Hc.displayName = Pt;
var Re = 10, [Yc, bt] = qt(Pt), r1 = "SelectContentImpl", o1 = /* @__PURE__ */ Bv("SelectContent.RemoveScroll"), Vc = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: a,
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
      ...v
    } = e, x = gt(Pt, n), [w, S] = u.useState(null), [C, k] = u.useState(null), M = te(t, (L) => S(L)), [N, D] = u.useState(null), [R, F] = u.useState(
      null
    ), Y = ur(n), [j, $] = u.useState(!1), K = u.useRef(!1);
    u.useEffect(() => {
      if (w) return ho(w);
    }, [w]), ro();
    const _ = u.useCallback(
      (L) => {
        const [ce, ...Q] = Y().map((le) => le.ref.current), [ee] = Q.slice(-1), ne = document.activeElement;
        for (const le of L)
          if (le === ne || (le?.scrollIntoView({ block: "nearest" }), le === ce && C && (C.scrollTop = 0), le === ee && C && (C.scrollTop = C.scrollHeight), le?.focus(), document.activeElement !== ne)) return;
      },
      [Y, C]
    ), G = u.useCallback(
      () => _([N, w]),
      [_, N, w]
    );
    u.useEffect(() => {
      j && G();
    }, [j, G]);
    const { onOpenChange: z, triggerPointerDownPosRef: U } = x;
    u.useEffect(() => {
      if (w) {
        let L = { x: 0, y: 0 };
        const ce = (ee) => {
          L = {
            x: Math.abs(Math.round(ee.pageX) - (U.current?.x ?? 0)),
            y: Math.abs(Math.round(ee.pageY) - (U.current?.y ?? 0))
          };
        }, Q = (ee) => {
          L.x <= 10 && L.y <= 10 ? ee.preventDefault() : w.contains(ee.target) || z(!1), document.removeEventListener("pointermove", ce), U.current = null;
        };
        return U.current !== null && (document.addEventListener("pointermove", ce), document.addEventListener("pointerup", Q, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", ce), document.removeEventListener("pointerup", Q, { capture: !0 });
        };
      }
    }, [w, z, U]), u.useEffect(() => {
      const L = () => z(!1);
      return window.addEventListener("blur", L), window.addEventListener("resize", L), () => {
        window.removeEventListener("blur", L), window.removeEventListener("resize", L);
      };
    }, [z]);
    const [O, fe] = cl((L) => {
      const ce = Y().filter((ne) => !ne.disabled), Q = ce.find((ne) => ne.ref.current === document.activeElement), ee = ll(ce, L, Q);
      ee && setTimeout(() => ee.ref.current.focus());
    }), Ee = u.useCallback(
      (L, ce, Q) => {
        const ee = !K.current && !Q;
        (x.value !== void 0 && x.value === ce || ee) && (D(L), ee && (K.current = !0));
      },
      [x.value]
    ), Pe = u.useCallback(() => w?.focus(), [w]), be = u.useCallback(
      (L, ce, Q) => {
        const ee = !K.current && !Q;
        (x.value !== void 0 && x.value === ce || ee) && F(L);
      },
      [x.value]
    ), ie = r === "popper" ? Gr : jc, de = ie === Gr ? {
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
      Yc,
      {
        scope: n,
        content: w,
        viewport: C,
        onViewportChange: k,
        itemRefCallback: Ee,
        selectedItem: N,
        onItemLeave: Pe,
        itemTextRefCallback: be,
        focusSelectedItem: G,
        selectedItemText: R,
        position: r,
        isPositioned: j,
        searchRef: O,
        children: /* @__PURE__ */ d(Qn, { as: o1, allowPinchZoom: !0, children: /* @__PURE__ */ d(
          Vn,
          {
            asChild: !0,
            trapped: x.open,
            onMountAutoFocus: (L) => {
              L.preventDefault();
            },
            onUnmountAutoFocus: B(o, (L) => {
              x.trigger?.focus({ preventScroll: !0 }), L.preventDefault();
            }),
            children: /* @__PURE__ */ d(
              Yn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: a,
                onFocusOutside: (L) => L.preventDefault(),
                onDismiss: () => x.onOpenChange(!1),
                children: /* @__PURE__ */ d(
                  ie,
                  {
                    role: "listbox",
                    id: x.contentId,
                    "data-state": x.open ? "open" : "closed",
                    dir: x.dir,
                    onContextMenu: (L) => L.preventDefault(),
                    ...v,
                    ...de,
                    onPlaced: () => $(!0),
                    ref: M,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: B(v.onKeyDown, (L) => {
                      const ce = L.ctrlKey || L.altKey || L.metaKey;
                      if (L.key === "Tab" && L.preventDefault(), !ce && L.key.length === 1 && fe(L.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key)) {
                        let ee = Y().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(L.key) && (ee = ee.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(L.key)) {
                          const ne = L.target, le = ee.indexOf(ne);
                          ee = ee.slice(le + 1);
                        }
                        setTimeout(() => _(ee)), L.preventDefault();
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
Vc.displayName = r1;
var s1 = "SelectItemAlignedPosition", jc = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = gt(Pt, n), a = bt(Pt, n), [i, c] = u.useState(null), [l, f] = u.useState(null), m = te(t, (M) => f(M)), h = ur(n), p = u.useRef(!1), y = u.useRef(!0), { viewport: g, selectedItem: b, selectedItemText: v, focusSelectedItem: x } = a, w = u.useCallback(() => {
    if (s.trigger && s.valueNode && i && l && g && b && v) {
      const M = s.trigger.getBoundingClientRect(), N = l.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), R = v.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const ne = R.left - N.left, le = D.left - ne, pe = M.left - le, xe = M.width + pe, At = Math.max(xe, N.width), Xt = window.innerWidth - Re, Kt = jr(le, [
          Re,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Re, Xt - At)
        ]);
        i.style.minWidth = xe + "px", i.style.left = Kt + "px";
      } else {
        const ne = N.right - R.right, le = window.innerWidth - D.right - ne, pe = window.innerWidth - M.right - le, xe = M.width + pe, At = Math.max(xe, N.width), Xt = window.innerWidth - Re, Kt = jr(le, [
          Re,
          Math.max(Re, Xt - At)
        ]);
        i.style.minWidth = xe + "px", i.style.right = Kt + "px";
      }
      const F = h(), Y = window.innerHeight - Re * 2, j = g.scrollHeight, $ = window.getComputedStyle(l), K = parseInt($.borderTopWidth, 10), _ = parseInt($.paddingTop, 10), G = parseInt($.borderBottomWidth, 10), z = parseInt($.paddingBottom, 10), U = K + _ + j + z + G, O = Math.min(b.offsetHeight * 5, U), fe = window.getComputedStyle(g), Ee = parseInt(fe.paddingTop, 10), Pe = parseInt(fe.paddingBottom, 10), be = M.top + M.height / 2 - Re, ie = Y - be, de = b.offsetHeight / 2, L = b.offsetTop + de, ce = K + _ + L, Q = U - ce;
      if (ce <= be) {
        const ne = F.length > 0 && b === F[F.length - 1].ref.current;
        i.style.bottom = "0px";
        const le = l.clientHeight - g.offsetTop - g.offsetHeight, pe = Math.max(
          ie,
          de + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? Pe : 0) + le + G
        ), xe = ce + pe;
        i.style.height = xe + "px";
      } else {
        const ne = F.length > 0 && b === F[0].ref.current;
        i.style.top = "0px";
        const pe = Math.max(
          be,
          K + g.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? Ee : 0) + de
        ) + Q;
        i.style.height = pe + "px", g.scrollTop = ce - be + g.offsetTop;
      }
      i.style.margin = `${Re}px 0`, i.style.minHeight = O + "px", i.style.maxHeight = Y + "px", r?.(), requestAnimationFrame(() => p.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    i,
    l,
    g,
    b,
    v,
    s.dir,
    r
  ]);
  ge(() => w(), [w]);
  const [S, C] = u.useState();
  ge(() => {
    l && C(window.getComputedStyle(l).zIndex);
  }, [l]);
  const k = u.useCallback(
    (M) => {
      M && y.current === !0 && (w(), x?.(), y.current = !1);
    },
    [w, x]
  );
  return /* @__PURE__ */ d(
    i1,
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
jc.displayName = s1;
var a1 = "SelectPopperPosition", Gr = u.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Re,
    ...s
  } = e, a = fr(n);
  return /* @__PURE__ */ d(
    qa,
    {
      ...a,
      ...s,
      ref: t,
      align: r,
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
Gr.displayName = a1;
var [i1, Ao] = qt(Pt, {}), Ur = "SelectViewport", Gc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = bt(Ur, n), a = Ao(Ur, n), i = te(t, s.onViewportChange), c = u.useRef(0);
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
      /* @__PURE__ */ d(dr.Slot, { scope: n, children: /* @__PURE__ */ d(
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
          onScroll: B(o.onScroll, (l) => {
            const f = l.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: h } = a;
            if (h?.current && m) {
              const p = Math.abs(c.current - f.scrollTop);
              if (p > 0) {
                const y = window.innerHeight - Re * 2, g = parseFloat(m.style.minHeight), b = parseFloat(m.style.height), v = Math.max(g, b);
                if (v < y) {
                  const x = v + p, w = Math.min(y, x), S = x - w;
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
Gc.displayName = Ur;
var Uc = "SelectGroup", [c1, l1] = qt(Uc), qc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = et();
    return /* @__PURE__ */ d(c1, { scope: n, id: o, children: /* @__PURE__ */ d(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
qc.displayName = Uc;
var Xc = "SelectLabel", Kc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = l1(Xc, n);
    return /* @__PURE__ */ d(X.div, { id: o.id, ...r, ref: t });
  }
);
Kc.displayName = Xc;
var $n = "SelectItem", [d1, Zc] = qt($n), Qc = u.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...a
    } = e, i = gt($n, n), c = bt($n, n), l = i.value === r, [f, m] = u.useState(s ?? ""), [h, p] = u.useState(!1), y = te(
      t,
      (x) => c.itemRefCallback?.(x, r, o)
    ), g = et(), b = u.useRef("touch"), v = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ d(
      d1,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: g,
        isSelected: l,
        onItemTextChange: u.useCallback((x) => {
          m((w) => w || (x?.textContent ?? "").trim());
        }, []),
        children: /* @__PURE__ */ d(
          dr.ItemSlot,
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
                ...a,
                ref: y,
                onFocus: B(a.onFocus, () => p(!0)),
                onBlur: B(a.onBlur, () => p(!1)),
                onClick: B(a.onClick, () => {
                  b.current !== "mouse" && v();
                }),
                onPointerUp: B(a.onPointerUp, () => {
                  b.current === "mouse" && v();
                }),
                onPointerDown: B(a.onPointerDown, (x) => {
                  b.current = x.pointerType;
                }),
                onPointerMove: B(a.onPointerMove, (x) => {
                  b.current = x.pointerType, o ? c.onItemLeave?.() : b.current === "mouse" && x.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: B(a.onPointerLeave, (x) => {
                  x.currentTarget === document.activeElement && c.onItemLeave?.();
                }),
                onKeyDown: B(a.onKeyDown, (x) => {
                  c.searchRef?.current !== "" && x.key === " " || (Kv.includes(x.key) && v(), x.key === " " && x.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Qc.displayName = $n;
var en = "SelectItemText", Jc = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, a = gt(en, n), i = bt(en, n), c = Zc(en, n), l = e1(en, n), [f, m] = u.useState(null), h = te(
      t,
      (v) => m(v),
      c.onItemTextChange,
      (v) => i.itemTextRefCallback?.(v, c.value, c.disabled)
    ), p = f?.textContent, y = u.useMemo(
      () => /* @__PURE__ */ d("option", { value: c.value, disabled: c.disabled, children: p }, c.value),
      [c.disabled, c.value, p]
    ), { onNativeOptionAdd: g, onNativeOptionRemove: b } = l;
    return ge(() => (g(y), () => b(y)), [g, b, y]), /* @__PURE__ */ E(Ge, { children: [
      /* @__PURE__ */ d(X.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && a.valueNode && !a.valueNodeHasChildren ? Bn.createPortal(s.children, a.valueNode) : null
    ] });
  }
);
Jc.displayName = en;
var el = "SelectItemIndicator", tl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Zc(el, n).isSelected ? /* @__PURE__ */ d(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
tl.displayName = el;
var qr = "SelectScrollUpButton", nl = u.forwardRef((e, t) => {
  const n = bt(qr, e.__scopeSelect), r = Ao(qr, e.__scopeSelect), [o, s] = u.useState(!1), a = te(t, r.onScrollButtonChange);
  return ge(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollTop > 0;
        s(l);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    ol,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
nl.displayName = qr;
var Xr = "SelectScrollDownButton", rl = u.forwardRef((e, t) => {
  const n = bt(Xr, e.__scopeSelect), r = Ao(Xr, e.__scopeSelect), [o, s] = u.useState(!1), a = te(t, r.onScrollButtonChange);
  return ge(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const l = c.scrollHeight - c.clientHeight, f = Math.ceil(c.scrollTop) < l;
        s(f);
      };
      const c = n.viewport;
      return i(), c.addEventListener("scroll", i), () => c.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ d(
    ol,
    {
      ...e,
      ref: a,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: c } = n;
        i && c && (i.scrollTop = i.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
rl.displayName = Xr;
var ol = u.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = bt("SelectScrollButton", n), a = u.useRef(null), i = ur(n), c = u.useCallback(() => {
    a.current !== null && (window.clearInterval(a.current), a.current = null);
  }, []);
  return u.useEffect(() => () => c(), [c]), ge(() => {
    i().find((f) => f.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ d(
    X.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: B(o.onPointerDown, () => {
        a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerMove: B(o.onPointerMove, () => {
        s.onItemLeave?.(), a.current === null && (a.current = window.setInterval(r, 50));
      }),
      onPointerLeave: B(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), u1 = "SelectSeparator", sl = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ d(X.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
sl.displayName = u1;
var Kr = "SelectArrow", f1 = u.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = fr(n), s = gt(Kr, n), a = bt(Kr, n);
    return s.open && a.position === "popper" ? /* @__PURE__ */ d(Xa, { ...o, ...r, ref: t }) : null;
  }
);
f1.displayName = Kr;
var m1 = "SelectBubbleInput", al = u.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = u.useRef(null), s = te(r, o), a = Ac(t);
    return u.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const c = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (a !== t && f) {
        const m = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(m);
      }
    }, [a, t]), /* @__PURE__ */ d(
      X.select,
      {
        ...n,
        style: { ...Ic, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
al.displayName = m1;
function il(e) {
  return e === "" || e === void 0;
}
function cl(e) {
  const t = ve(e), n = u.useRef(""), r = u.useRef(0), o = u.useCallback(
    (a) => {
      const i = n.current + a;
      t(i), (function c(l) {
        n.current = l, window.clearTimeout(r.current), l !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      })(i);
    },
    [t]
  ), s = u.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return u.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function ll(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let a = h1(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function h1(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var p1 = _c, dl = Fc, g1 = zc, b1 = $c, y1 = Bc, ul = Hc, v1 = Gc, x1 = qc, fl = Kc, ml = Qc, w1 = Jc, S1 = tl, hl = nl, pl = rl, gl = sl;
const tw = p1, nw = x1, rw = g1, k1 = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  dl,
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
      /* @__PURE__ */ d(b1, { asChild: !0, children: /* @__PURE__ */ d(ln, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
k1.displayName = dl.displayName;
const bl = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  hl,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d(ta, { className: "h-4 w-4" })
  }
));
bl.displayName = hl.displayName;
const yl = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  pl,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ d(ln, { className: "h-4 w-4" })
  }
));
yl.displayName = pl.displayName;
const C1 = u.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ d(y1, { children: /* @__PURE__ */ E(
  ul,
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
      /* @__PURE__ */ d(bl, {}),
      /* @__PURE__ */ d(
        v1,
        {
          className: P(
            "p-1 overflow-y-auto",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ d(yl, {})
    ]
  }
) }));
C1.displayName = ul.displayName;
const N1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  fl,
  {
    ref: n,
    className: P("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
N1.displayName = fl.displayName;
const M1 = u.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ E(
  ml,
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
      /* @__PURE__ */ d("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ d(S1, { children: /* @__PURE__ */ d(cn, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ d(w1, { children: t })
    ]
  }
));
M1.displayName = ml.displayName;
const E1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  gl,
  {
    ref: n,
    className: P("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
E1.displayName = gl.displayName;
function ow({
  open: e,
  onClose: t,
  width: n = 380,
  header: r,
  children: o,
  className: s,
  ...a
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
        s
      ),
      ...a,
      children: [
        /* @__PURE__ */ d(
          "button",
          {
            onClick: t,
            className: "absolute top-3 right-3 z-10 rounded-md p-1.5 text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
            "aria-label": "Chiudi pannello",
            children: /* @__PURE__ */ d(Hn, { className: "size-5" })
          }
        ),
        r && /* @__PURE__ */ d("div", { className: "px-4 pt-4 pb-2 pr-10", children: r }),
        /* @__PURE__ */ d("div", { className: P(r ? "" : "pt-4"), children: o })
      ]
    }
  ) : null;
}
function vl({ className: e, ...t }) {
  return /* @__PURE__ */ d(
    "div",
    {
      className: P("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function P1({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ d("div", { className: P("space-y-2", t), children: Array.from({ length: e }).map((n, r) => /* @__PURE__ */ d(
    vl,
    {
      className: P("h-4", r === e - 1 ? "w-2/3" : "w-full")
    },
    r
  )) });
}
function sw({ className: e }) {
  return /* @__PURE__ */ E("div", { className: P("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ d(vl, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ d(P1, { lines: 3 })
  ] });
}
function aw({
  data: e,
  width: t = 80,
  height: n = 24,
  strokeWidth: r = 1.5,
  area: o = !1,
  className: s,
  "aria-label": a,
  ...i
}) {
  const c = e.filter((y) => Number.isFinite(y)), l = r, f = Math.max(t - 2 * l, 0), m = Math.max(n - 2 * l, 0);
  let h = "", p = "";
  if (c.length > 0) {
    const y = Math.min(...c), b = Math.max(...c) - y, v = (w) => b === 0 ? n / 2 : l + m - (w - y) / b * m;
    let x;
    if (c.length === 1 ? x = [
      [l, v(c[0])],
      [t - l, v(c[0])]
    ] : x = c.map((w, S) => [l + S / (c.length - 1) * f, v(w)]), h = x.map(([w, S], C) => `${C === 0 ? "M" : "L"}${w.toFixed(1)},${S.toFixed(1)}`).join(" "), o) {
      const w = x[x.length - 1];
      p = `${h} L${w[0].toFixed(1)},${n} L${x[0][0].toFixed(1)},${n} Z`;
    }
  }
  return /* @__PURE__ */ E(
    "svg",
    {
      width: t,
      height: n,
      viewBox: `0 0 ${t} ${n}`,
      className: P("text-primary", s),
      role: a ? "img" : void 0,
      "aria-label": a,
      "aria-hidden": a ? void 0 : !0,
      ...i,
      children: [
        p && /* @__PURE__ */ d("path", { d: p, fill: "currentColor", fillOpacity: 0.15, stroke: "none" }),
        h && /* @__PURE__ */ d(
          "path",
          {
            d: h,
            fill: "none",
            stroke: "currentColor",
            strokeWidth: r,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
const D1 = mt(
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
function O1({ className: e, size: t, label: n = "Caricamento...", ...r }) {
  return /* @__PURE__ */ E(
    "div",
    {
      role: "status",
      "aria-label": n,
      className: P("inline-flex items-center justify-center", e),
      ...r,
      children: [
        /* @__PURE__ */ d("div", { className: D1({ size: t }) }),
        /* @__PURE__ */ d("span", { className: "sr-only", children: n })
      ]
    }
  );
}
function iw({ label: e }) {
  return /* @__PURE__ */ E("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ d(O1, { size: "lg", label: e }),
    e && /* @__PURE__ */ d("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
const T1 = mt(
  "flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-colors select-none",
  {
    variants: {
      state: {
        completed: "bg-databeez-primary text-white",
        active: "bg-databeez-primary text-white",
        upcoming: "bg-emphasis text-text-muted"
      }
    },
    defaultVariants: {
      state: "upcoming"
    }
  }
), R1 = mt("text-sm transition-colors", {
  variants: {
    state: {
      completed: "text-text-subtle",
      active: "font-medium text-text-base",
      upcoming: "text-text-subtle"
    }
  },
  defaultVariants: {
    state: "upcoming"
  }
}), A1 = mt("w-8 h-px transition-colors", {
  variants: {
    completed: {
      true: "bg-databeez-primary",
      false: "bg-emphasis"
    }
  },
  defaultVariants: {
    completed: !1
  }
});
function I1(e) {
  return typeof e == "string" ? { label: e } : e;
}
function _1(e, t) {
  return e < t ? "completed" : e === t ? "active" : "upcoming";
}
const W1 = u.forwardRef(
  ({ className: e, steps: t, activeStep: n, completedIcon: r = "✓", ...o }, s) => /* @__PURE__ */ d(
    "div",
    {
      ref: s,
      className: P("flex items-center justify-center gap-2", e),
      role: "navigation",
      "aria-label": "Progresso",
      ...o,
      children: t.map((a, i) => {
        const c = I1(a), l = _1(i, n);
        return /* @__PURE__ */ E("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ d(
            "div",
            {
              className: P(T1({ state: l })),
              "aria-current": l === "active" ? "step" : void 0,
              children: c.icon ? c.icon : l === "completed" ? r : i + 1
            }
          ),
          /* @__PURE__ */ d("span", { className: P(R1({ state: l })), children: c.label }),
          i < t.length - 1 && /* @__PURE__ */ d(
            "div",
            {
              className: P(
                A1({ completed: i < n })
              ),
              "aria-hidden": "true"
            }
          )
        ] }, c.label);
      })
    }
  )
);
W1.displayName = "Stepper";
var mr = "Switch", [F1] = rt(mr), [L1, z1] = F1(mr), xl = u.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: s,
      required: a,
      disabled: i,
      value: c = "on",
      onCheckedChange: l,
      form: f,
      ...m
    } = e, [h, p] = u.useState(null), y = te(t, (w) => p(w)), g = u.useRef(!1), b = h ? f || !!h.closest("form") : !0, [v, x] = Nt({
      prop: o,
      defaultProp: s ?? !1,
      onChange: l,
      caller: mr
    });
    return /* @__PURE__ */ E(L1, { scope: n, checked: v, disabled: i, children: [
      /* @__PURE__ */ d(
        X.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": v,
          "aria-required": a,
          "data-state": Cl(v),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: c,
          ...m,
          ref: y,
          onClick: B(e.onClick, (w) => {
            x((S) => !S), b && (g.current = w.isPropagationStopped(), g.current || w.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ d(
        kl,
        {
          control: h,
          bubbles: !g.current,
          name: r,
          value: c,
          checked: v,
          required: a,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
xl.displayName = mr;
var wl = "SwitchThumb", Sl = u.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = z1(wl, n);
    return /* @__PURE__ */ d(
      X.span,
      {
        "data-state": Cl(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Sl.displayName = wl;
var $1 = "SwitchBubbleInput", kl = u.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, s) => {
    const a = u.useRef(null), i = te(a, s), c = Ac(n), l = Fa(t);
    return u.useEffect(() => {
      const f = a.current;
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
kl.displayName = $1;
function Cl(e) {
  return e ? "checked" : "unchecked";
}
var B1 = xl, H1 = Sl;
const Y1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  B1,
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
      H1,
      {
        className: P(
          "pointer-events-none block h-5 w-5 rounded-full bg-surface shadow-sm ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Y1.displayName = "Switch";
function cw({
  icon: e,
  iconColor: t,
  label: n,
  value: r,
  trend: o,
  hint: s,
  size: a = "default",
  className: i,
  ...c
}) {
  const l = a === "compact";
  return /* @__PURE__ */ E(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow",
        l ? "p-3 text-left" : "p-4 text-center",
        i
      ),
      ...c,
      children: [
        e && /* @__PURE__ */ d(
          e,
          {
            className: P("h-6 w-6 text-primary", l ? "mb-1" : "mx-auto mb-2"),
            style: t ? { color: t } : void 0
          }
        ),
        /* @__PURE__ */ d("div", { className: P("font-bold tabular-nums text-text-base", l ? "text-xl" : "text-2xl"), children: r }),
        /* @__PURE__ */ d("div", { className: "text-sm text-text-muted mt-0.5", children: n }),
        o && (typeof o.value == "string" ? /* @__PURE__ */ d(
          "div",
          {
            className: P(
              "text-xs font-medium mt-1",
              o.positive ? "text-trend-positive" : "text-trend-negative"
            ),
            children: o.value
          }
        ) : /* @__PURE__ */ d("div", { className: "mt-1", children: /* @__PURE__ */ d(mp, { ...o }) })),
        s && /* @__PURE__ */ d("div", { className: "text-xs text-text-muted mt-1", children: s })
      ]
    }
  );
}
const V1 = mt(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        success: "bg-success/10 text-success-fg",
        warning: "bg-warning/10 text-warning-fg",
        error: "bg-error/10 text-error-fg",
        info: "bg-info/10 text-info-fg",
        neutral: "bg-subtle text-text-muted"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
), j1 = {
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  neutral: "bg-text-muted"
};
function lw({
  variant: e = "neutral",
  label: t,
  dot: n = !0,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ E(
    "span",
    {
      className: P(V1({ variant: e }), r),
      ...o,
      children: [
        n && /* @__PURE__ */ d(
          "span",
          {
            className: P(
              "h-1.5 w-1.5 rounded-full shrink-0",
              j1[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
const G1 = {
  operational: { dot: "bg-success", text: "text-success-fg", label: "Operational" },
  degraded: { dot: "bg-warning", text: "text-warning-fg", label: "Degraded" },
  outage: { dot: "bg-error", text: "text-error-fg", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function dw({
  label: e,
  status: t,
  statusLabel: n,
  className: r,
  ...o
}) {
  const s = G1[t];
  return /* @__PURE__ */ E("div", { className: P("flex items-center justify-between", r), ...o, children: [
    /* @__PURE__ */ E("div", { className: "flex items-center", children: [
      /* @__PURE__ */ d("div", { className: P("h-2 w-2 rounded-full mr-3", s.dot) }),
      /* @__PURE__ */ d("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ d("span", { className: P("text-sm", s.text), children: n ?? s.label })
  ] });
}
function uw({ tabs: e, activeTab: t, onChange: n, className: r }) {
  return /* @__PURE__ */ d("div", { className: P("border-b border-border", r), children: /* @__PURE__ */ d("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
    const s = t === o.id, a = o.icon;
    return /* @__PURE__ */ E(
      "button",
      {
        role: "tab",
        "aria-selected": s,
        onClick: () => n(o.id),
        className: P(
          "inline-flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
          s ? "border-databeez-primary text-databeez-primary" : "border-transparent text-text-muted hover:text-text-base hover:border-border"
        ),
        children: [
          a && /* @__PURE__ */ d(a, { className: "h-4 w-4" }),
          o.label
        ]
      },
      o.id
    );
  }) }) });
}
const U1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ d(
  "table",
  {
    ref: n,
    className: P("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
U1.displayName = "Table";
const q1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d("thead", { ref: n, className: P("bg-subtle border-b border-border", e), ...t }));
q1.displayName = "TableHeader";
const X1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tbody",
  {
    ref: n,
    className: P("divide-y divide-border", e),
    ...t
  }
));
X1.displayName = "TableBody";
const K1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tfoot",
  {
    ref: n,
    className: P("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
K1.displayName = "TableFooter";
const Z1 = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "tr",
  {
    ref: n,
    className: P(
      "transition-colors hover:bg-subtle data-[state=selected]:bg-primary-light",
      e
    ),
    ...t
  }
));
Z1.displayName = "TableRow";
const Nl = u.forwardRef(({ className: e, numeric: t, ...n }, r) => /* @__PURE__ */ d(
  "th",
  {
    ref: r,
    className: P(
      "h-10 px-4 text-left align-middle font-semibold text-text-muted text-xs uppercase tracking-wider",
      t && "text-right tabular-nums whitespace-nowrap",
      e
    ),
    ...n
  }
));
Nl.displayName = "TableHead";
const Q1 = { asc: "ascending", desc: "descending" }, J1 = u.forwardRef(
  ({ className: e, numeric: t, direction: n, onSort: r, children: o, ...s }, a) => {
    const i = n === "asc" ? Qs : n === "desc" ? Zs : na;
    return /* @__PURE__ */ d(
      Nl,
      {
        ref: a,
        numeric: t,
        "aria-sort": n ? Q1[n] : "none",
        className: e,
        ...s,
        children: /* @__PURE__ */ E(
          "button",
          {
            type: "button",
            onClick: r,
            className: P(
              "inline-flex items-center gap-1 rounded-sm uppercase tracking-wider hover:text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              n && "text-text-base"
            ),
            children: [
              o,
              /* @__PURE__ */ d(i, { "aria-hidden": "true", className: P("h-3.5 w-3.5 shrink-0", !n && "text-text-subtle") })
            ]
          }
        )
      }
    );
  }
);
J1.displayName = "TableSortHead";
const ex = u.forwardRef(({ className: e, numeric: t, ...n }, r) => /* @__PURE__ */ d(
  "td",
  {
    ref: r,
    className: P(
      "px-4 py-3 align-middle text-text-base",
      t && "text-right tabular-nums whitespace-nowrap",
      e
    ),
    ...n
  }
));
ex.displayName = "TableCell";
const tx = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  "caption",
  {
    ref: n,
    className: P("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
tx.displayName = "TableCaption";
const nx = u.forwardRef(
  ({ className: e, page: t, pageCount: n, onPageChange: r, totalItems: o, "aria-label": s = "Paginazione", ...a }, i) => {
    const c = Math.max(1, n), l = Math.min(Math.max(1, t), c);
    return /* @__PURE__ */ E(
      "nav",
      {
        ref: i,
        "aria-label": s,
        className: P("flex items-center justify-between gap-4 text-sm text-text-muted", e),
        ...a,
        children: [
          /* @__PURE__ */ d("span", { children: o !== void 0 ? `${Or(o)} ${o === 1 ? "risultato" : "risultati"}` : null }),
          /* @__PURE__ */ E("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ d(
              Tn,
              {
                type: "button",
                variant: "outline",
                size: "icon",
                "aria-label": "Pagina precedente",
                disabled: l <= 1,
                onClick: () => r(l - 1),
                children: /* @__PURE__ */ d(wd, { "aria-hidden": "true", className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ E("span", { "aria-live": "polite", className: "tabular-nums text-text-base", children: [
              "Pagina ",
              Or(l),
              " di ",
              Or(c)
            ] }),
            /* @__PURE__ */ d(
              Tn,
              {
                type: "button",
                variant: "outline",
                size: "icon",
                "aria-label": "Pagina successiva",
                disabled: l >= c,
                onClick: () => r(l + 1),
                children: /* @__PURE__ */ d(ea, { "aria-hidden": "true", className: "h-4 w-4" })
              }
            )
          ] })
        ]
      }
    );
  }
);
nx.displayName = "Pagination";
var _r = "rovingFocusGroup.onEntryFocus", rx = { bubbles: !1, cancelable: !0 }, gn = "RovingFocusGroup", [Zr, Ml, ox] = Rc(gn), [sx, El] = rt(
  gn,
  [ox]
), [ax, ix] = sx(gn), Pl = u.forwardRef(
  (e, t) => /* @__PURE__ */ d(Zr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(Zr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ d(cx, { ...e, ref: t }) }) })
);
Pl.displayName = gn;
var cx = u.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: a,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: f = !1,
    ...m
  } = e, h = u.useRef(null), p = te(t, h), y = ir(s), [g, b] = Nt({
    prop: a,
    defaultProp: i ?? null,
    onChange: c,
    caller: gn
  }), [v, x] = u.useState(!1), w = ve(l), S = Ml(n), C = u.useRef(!1), [k, M] = u.useState(0);
  return u.useEffect(() => {
    const N = h.current;
    if (N)
      return N.addEventListener(_r, w), () => N.removeEventListener(_r, w);
  }, [w]), /* @__PURE__ */ d(
    ax,
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
      onItemShiftTab: u.useCallback(() => x(!0), []),
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
          tabIndex: v || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: B(e.onMouseDown, () => {
            C.current = !0;
          }),
          onFocus: B(e.onFocus, (N) => {
            const D = !C.current;
            if (N.target === N.currentTarget && D && !v) {
              const R = new CustomEvent(_r, rx);
              if (N.currentTarget.dispatchEvent(R), !R.defaultPrevented) {
                const F = S().filter((_) => _.focusable), Y = F.find((_) => _.active), j = F.find((_) => _.id === g), K = [Y, j, ...F].filter(
                  Boolean
                ).map((_) => _.ref.current);
                Tl(K, f);
              }
            }
            C.current = !1;
          }),
          onBlur: B(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Dl = "RovingFocusGroupItem", Ol = u.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: a,
      ...i
    } = e, c = et(), l = s || c, f = ix(Dl, n), m = f.currentTabStopId === l, h = Ml(n), { onFocusableItemAdd: p, onFocusableItemRemove: y, currentTabStopId: g } = f;
    return u.useEffect(() => {
      if (r)
        return p(), () => y();
    }, [r, p, y]), /* @__PURE__ */ d(
      Zr.ItemSlot,
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
            onMouseDown: B(e.onMouseDown, (b) => {
              r ? f.onItemFocus(l) : b.preventDefault();
            }),
            onFocus: B(e.onFocus, () => f.onItemFocus(l)),
            onKeyDown: B(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const v = ux(b, f.orientation, f.dir);
              if (v !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let w = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (v === "last") w.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && w.reverse();
                  const S = w.indexOf(b.currentTarget);
                  w = f.loop ? fx(w, S + 1) : w.slice(S + 1);
                }
                setTimeout(() => Tl(w));
              }
            }),
            children: typeof a == "function" ? a({ isCurrentTabStop: m, hasTabStop: g != null }) : a
          }
        )
      }
    );
  }
);
Ol.displayName = Dl;
var lx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function dx(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ux(e, t, n) {
  const r = dx(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return lx[r];
}
function Tl(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function fx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var mx = Pl, hx = Ol, hr = "Tabs", [px] = rt(hr, [
  El
]), Rl = El(), [gx, Io] = px(hr), Al = u.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: a = "horizontal",
      dir: i,
      activationMode: c = "automatic",
      ...l
    } = e, f = ir(i), [m, h] = Nt({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: hr
    });
    return /* @__PURE__ */ d(
      gx,
      {
        scope: n,
        baseId: et(),
        value: m,
        onValueChange: h,
        orientation: a,
        dir: f,
        activationMode: c,
        children: /* @__PURE__ */ d(
          X.div,
          {
            dir: f,
            "data-orientation": a,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
Al.displayName = hr;
var Il = "TabsList", _l = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Io(Il, n), a = Rl(n);
    return /* @__PURE__ */ d(
      mx,
      {
        asChild: !0,
        ...a,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ d(
          X.div,
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
_l.displayName = Il;
var Wl = "TabsTrigger", Fl = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, a = Io(Wl, n), i = Rl(n), c = $l(a.baseId, r), l = Bl(a.baseId, r), f = r === a.value;
    return /* @__PURE__ */ d(
      hx,
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
            ...s,
            ref: t,
            onMouseDown: B(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? a.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: B(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && a.onValueChange(r);
            }),
            onFocus: B(e.onFocus, () => {
              const m = a.activationMode !== "manual";
              !f && !o && m && a.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Fl.displayName = Wl;
var Ll = "TabsContent", zl = u.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...a } = e, i = Io(Ll, n), c = $l(i.baseId, r), l = Bl(i.baseId, r), f = r === i.value, m = u.useRef(f);
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
        ...a,
        ref: t,
        style: {
          ...e.style,
          animationDuration: m.current ? "0s" : void 0
        },
        children: h && s
      }
    ) });
  }
);
zl.displayName = Ll;
function $l(e, t) {
  return `${e}-trigger-${t}`;
}
function Bl(e, t) {
  return `${e}-content-${t}`;
}
var bx = Al, Hl = _l, Yl = Fl, Vl = zl;
const fw = bx, yx = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Hl,
  {
    ref: n,
    className: P(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
yx.displayName = Hl.displayName;
const vx = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Yl,
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
vx.displayName = Yl.displayName;
const xx = u.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ d(
  Vl,
  {
    ref: n,
    className: P(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
xx.displayName = Vl.displayName;
const wx = u.forwardRef(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, a) => {
    const i = o ?? t?.toLowerCase().replace(/\s+/g, "-");
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
          ref: a,
          className: P(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-base placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-subtle",
            "resize-y min-h-[80px] transition-colors",
            n && "border-error focus:ring-error focus:border-error",
            e
          ),
          "aria-invalid": !!n,
          "aria-describedby": n ? `${i}-error` : r ? `${i}-helper` : void 0,
          ...s
        }
      ),
      n && /* @__PURE__ */ d("p", { id: `${i}-error`, className: "text-xs text-error-fg", children: n }),
      !n && r && /* @__PURE__ */ d("p", { id: `${i}-helper`, className: "text-xs text-text-muted", children: r })
    ] });
  }
);
wx.displayName = "Textarea";
function Sx({
  value: e = "",
  onChange: t,
  label: n,
  error: r,
  helperText: o,
  disabled: s,
  className: a,
  minuteStep: i = 1,
  showSeconds: c = !1
}) {
  const l = u.useId(), f = u.useMemo(() => {
    const [b = "", v = "", x = ""] = e.split(":");
    return { hours: b, minutes: v, seconds: x };
  }, [e]), m = Array.from({ length: 24 }, (b, v) => String(v).padStart(2, "0")), h = Array.from(
    { length: Math.ceil(60 / i) },
    (b, v) => String(v * i).padStart(2, "0")
  ), p = Array.from({ length: 60 }, (b, v) => String(v).padStart(2, "0"));
  function y(b, v) {
    const x = { ...f, [b]: v };
    x.hours || (x.hours = "00"), x.minutes || (x.minutes = "00");
    const w = c ? `${x.hours}:${x.minutes}:${x.seconds || "00"}` : `${x.hours}:${x.minutes}`;
    t?.(w);
  }
  const g = P(
    "h-10 rounded-lg border border-border bg-surface px-2 py-2 text-sm text-text-base appearance-none",
    "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
    "disabled:cursor-not-allowed disabled:opacity-50",
    r && "border-error focus:ring-error focus:border-error"
  );
  return /* @__PURE__ */ E("div", { className: "space-y-1", children: [
    n && /* @__PURE__ */ d("label", { htmlFor: l, className: "block text-sm font-medium text-text-base", children: n }),
    /* @__PURE__ */ E(
      "div",
      {
        className: P("flex items-center gap-2", a),
        children: [
          /* @__PURE__ */ d(Sd, { className: "h-4 w-4 text-text-muted shrink-0" }),
          /* @__PURE__ */ E(
            "select",
            {
              id: l,
              disabled: s,
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
              disabled: s,
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
                disabled: s,
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
    r && /* @__PURE__ */ d("p", { className: "text-xs text-error-fg", children: r }),
    o && !r && /* @__PURE__ */ d("p", { className: "text-xs text-text-muted", children: o })
  ] });
}
Sx.displayName = "TimePicker";
const Qr = "databeez-theme", mw = `(function(){var t=localStorage.getItem('${Qr}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, jl = qs({
  theme: "system",
  setTheme: () => {
  }
});
function hw({ children: e }) {
  const [t, n] = Ie("system"), r = (s) => {
    const a = document.documentElement, i = window.matchMedia("(prefers-color-scheme: dark)").matches;
    s === "dark" || s === "system" && i ? a.classList.add("dark") : a.classList.remove("dark");
  };
  kt(() => {
    const a = localStorage.getItem(Qr) ?? "system";
    n(a), r(a);
  }, []), kt(() => {
    if (t !== "system") return;
    const s = window.matchMedia("(prefers-color-scheme: dark)"), a = () => r("system");
    return s.addEventListener("change", a), () => s.removeEventListener("change", a);
  }, [t]);
  const o = (s) => {
    n(s), localStorage.setItem(Qr, s), r(s);
  };
  return /* @__PURE__ */ d(jl.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function kx() {
  return Xs(jl);
}
const Wr = ["light", "dark", "system"];
function pw() {
  const { theme: e, setTheme: t } = kx(), [n, r] = Ie(!1);
  kt(() => {
    r(!0);
  }, []);
  const o = () => {
    const s = Wr.indexOf(e);
    t(Wr[(s + 1) % Wr.length]);
  };
  return n ? /* @__PURE__ */ d(
    "button",
    {
      onClick: o,
      className: "p-2 rounded-lg text-text-muted hover:text-text-base hover:bg-subtle transition-colors",
      "aria-label": `Tema: ${e}`,
      title: `Tema corrente: ${e}`,
      children: e === "dark" ? /* @__PURE__ */ d(Rd, { className: "h-4 w-4" }) : e === "system" ? /* @__PURE__ */ d(Td, { className: "h-4 w-4" }) : /* @__PURE__ */ d(zd, { className: "h-4 w-4" })
    }
  ) : null;
}
function gw({ user: e, bumblebeeUrl: t, extraItems: n, onLogout: r, showLaunchpadLink: o = !0 }) {
  const [s, a] = Ie(!1), [i, c] = Ie({}), l = lt(null), f = lt(null), m = lt(null);
  kt(() => {
    const y = (g) => {
      l.current && !l.current.contains(g.target) && (!m.current || !m.current.contains(g.target)) && a(!1);
    };
    return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, []), kt(() => {
    if (s && f.current) {
      const y = f.current.getBoundingClientRect();
      c({
        top: y.bottom + 8,
        right: window.innerWidth - y.right
      });
    }
  }, [s]);
  const h = r ?? (() => {
    window.location.href = `${t}/logout`;
  }), p = n && n.length > 0;
  return /* @__PURE__ */ E("div", { className: "relative", ref: l, children: [
    /* @__PURE__ */ E(
      "button",
      {
        ref: f,
        onClick: () => a(!s),
        className: "flex items-center space-x-2 text-text-muted hover:text-databeez-primary px-3 py-2 text-sm font-medium transition-colors",
        children: [
          /* @__PURE__ */ d(tn, { className: "h-4 w-4" }),
          /* @__PURE__ */ d("span", { className: "hidden sm:block", children: e.fullname }),
          /* @__PURE__ */ d(ln, { className: "h-4 w-4" })
        ]
      }
    ),
    s && hd(
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
                    onClick: () => a(!1),
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
                      a(!1), y.onClick?.();
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
                onClick: () => a(!1),
                children: [
                  /* @__PURE__ */ d(kd, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Gestione Profilo"
                ]
              }
            ),
            o && /* @__PURE__ */ E(
              "a",
              {
                href: `${t}/launchpad`,
                className: "flex items-center px-4 py-2 text-sm text-text-base hover:bg-subtle",
                onClick: () => a(!1),
                children: [
                  /* @__PURE__ */ d(Pd, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
                  "Torna al LaunchPad"
                ]
              }
            ),
            /* @__PURE__ */ d("div", { className: "border-t border-border my-1" }),
            /* @__PURE__ */ E(
              "button",
              {
                onClick: () => {
                  a(!1), h();
                },
                className: "flex items-center w-full px-4 py-2 text-sm text-text-base hover:bg-subtle",
                children: [
                  /* @__PURE__ */ d(Dd, { className: "h-4 w-4 mr-2 flex-shrink-0" }),
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
function bw(e, t = {}) {
  const { immediate: n = !0 } = t, [r, o] = Ie(null), [s, a] = Ie(n), [i, c] = Ie(null), l = lt(e);
  l.current = e;
  const f = Se(async () => {
    a(!0), c(null);
    try {
      const m = await l.current();
      m.success && m.data !== void 0 ? o(m.data) : c(m.error?.message ?? "Si è verificato un errore");
    } catch (m) {
      c(m instanceof Error ? m.message : "Si è verificato un errore");
    } finally {
      a(!1);
    }
  }, []);
  return kt(() => {
    n && f();
  }, t.deps ?? []), { data: r, loading: s, error: i, refetch: f };
}
function yw(e, t) {
  return !Number.isFinite(e) || !Number.isFinite(t) || t <= 0 ? 1 : Math.max(1, Math.ceil(e / t));
}
function vw(e, t) {
  return Number.isFinite(e) ? Math.min(Math.max(1, Math.trunc(e)), Math.max(1, t)) : 1;
}
const js = {
  O: { label: "Organizzazione", icon: eo },
  P: { label: "Persona", icon: tn }
};
function xw(e) {
  return js[e ?? ""] ?? js.O;
}
const Cx = {
  F: { label: "Persona fisica", icon: tn },
  P: { label: "Professionista", icon: vd },
  A: { label: "Altro", icon: tn }
};
function ww(e) {
  return Cx[e] ?? { label: "Persona", icon: tn };
}
const Nx = {
  S: { label: "Società", icon: eo },
  D: { label: "Ditta individuale", icon: Ld },
  E: { label: "Ente pubblico", icon: Ed },
  X: { label: "Estera", icon: Cd },
  P: { label: "PIVA", icon: Id },
  A: { label: "Altro", icon: Md }
}, Mx = { label: "Organizzazione", icon: eo };
function Sw(e) {
  return Nx[e ?? ""] ?? Mx;
}
const kw = {
  label: "Indirizzo",
  icon: Od
}, Cw = {
  label: "Sede",
  icon: Hd
}, Ex = {
  banca: { label: "Banca", icon: yd },
  fiduciaria: { label: "Società fiduciaria", icon: Fd }
};
function Nw(e) {
  return Ex[e];
}
export {
  kw as ADDRESS_META,
  xa as APP_LOGOS,
  Tx as APP_LOGO_SLUGS,
  _u as Alert,
  Rx as AppLogo,
  _x as Badge,
  Fu as BeeGraphLogo,
  Lu as BeeMapLogo,
  zu as BeeScoutLogo,
  Tn as Button,
  No as Calendar,
  Qu as Card,
  nf as CardContent,
  tf as CardDescription,
  rf as CardFooter,
  Ju as CardHeader,
  ef as CardTitle,
  of as ChatInput,
  Lr as Checkbox,
  Wx as CheckboxTree,
  Lx as CodeBlock,
  rp as ColorPicker,
  op as Combobox,
  ap as CopyButton,
  np as DEFAULT_PRESETS,
  Yx as DataBeezLogo,
  zx as DataSourceBadge,
  $y as DatePicker,
  By as DateRangePicker,
  mp as Delta,
  jx as Dialog,
  Ux as DialogClose,
  iv as DialogContent,
  uv as DialogDescription,
  lv as DialogFooter,
  cv as DialogHeader,
  pc as DialogOverlay,
  av as DialogPortal,
  dv as DialogTitle,
  Gx as DialogTrigger,
  qx as EmptyState,
  Tt as FORMAT_PLACEHOLDER,
  Kx as FeatureCard,
  Zx as FloatingPanel,
  $u as HaiveLogo,
  Ax as InfoRow,
  gv as Input,
  bv as InputWithIcon,
  Cw as LOCATION_META,
  mv as MarkdownContent,
  Xx as MessageBubble,
  Qx as MethodBadge,
  Nx as ORG_TYPE_META,
  Cx as PERSON_TYPE_META,
  Ex as PONTE_META,
  Jx as PageHeader,
  nx as Pagination,
  er as Popover,
  Fx as PopoverAnchor,
  fn as PopoverContent,
  tr as PopoverTrigger,
  ew as ProgressBar,
  js as SUBJECT_TYPE_META,
  Iv as ScrollArea,
  Tc as ScrollBar,
  _v as SearchInput,
  Ix as Section,
  tw as Select,
  C1 as SelectContent,
  nw as SelectGroup,
  M1 as SelectItem,
  N1 as SelectLabel,
  yl as SelectScrollDownButton,
  bl as SelectScrollUpButton,
  E1 as SelectSeparator,
  k1 as SelectTrigger,
  rw as SelectValue,
  ow as SidePanel,
  vl as Skeleton,
  sw as SkeletonCard,
  P1 as SkeletonText,
  aw as Sparkline,
  O1 as Spinner,
  iw as SpinnerOverlay,
  cw as StatCard,
  lw as StatusBadge,
  dw as StatusIndicatorRow,
  W1 as Stepper,
  Wu as SwarmLogo,
  Y1 as Switch,
  mw as THEME_ANTI_FOUC_SCRIPT,
  Qr as THEME_STORAGE_KEY,
  uw as TabSwitch,
  U1 as Table,
  X1 as TableBody,
  tx as TableCaption,
  ex as TableCell,
  K1 as TableFooter,
  Nl as TableHead,
  q1 as TableHeader,
  Z1 as TableRow,
  J1 as TableSortHead,
  fw as Tabs,
  xx as TabsContent,
  yx as TabsList,
  vx as TabsTrigger,
  wx as Textarea,
  hw as ThemeProvider,
  pw as ThemeSwitcher,
  Sx as TimePicker,
  gw as UserMenu,
  Au as alertVariants,
  Bu as badgeVariants,
  Zu as buttonVariants,
  vw as clampPage,
  P as cn,
  lp as formatDate,
  Hx as formatDateTime,
  ip as formatDelta,
  $x as formatEuro,
  Or as formatNumber,
  Bx as formatPercent,
  dp as getDeltaState,
  Sw as getOrgMeta,
  yw as getPageCount,
  ww as getPersonMeta,
  Nw as getPonteMeta,
  xw as getSubjectMeta,
  D1 as spinnerVariants,
  V1 as statusBadgeVariants,
  T1 as stepCircleVariants,
  A1 as stepConnectorVariants,
  R1 as stepLabelVariants,
  bw as useAsyncData,
  kx as useTheme
};
