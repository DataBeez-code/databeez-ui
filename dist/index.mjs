"use client";
import { jsxs as D, jsx as f, Fragment as Fe } from "react/jsx-runtime";
import * as l from "react";
import _e, { forwardRef as xr, createElement as $n, useState as st, useLayoutEffect as Qs, createContext as Js, useEffect as tn, useContext as ei, useRef as ti, useCallback as ni } from "react";
import * as Ot from "react-dom";
import ri from "react-dom";
function wr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = wr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function gn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = wr(e)) && (r && (r += " "), r += t);
  return r;
}
const zn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Wn = gn, lt = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Wn(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((d) => {
    const u = n == null ? void 0 : n[d], m = s == null ? void 0 : s[d];
    if (u === null) return null;
    const h = zn(u) || zn(m);
    return o[d][h];
  }), a = n && Object.entries(n).reduce((d, u) => {
    let [m, h] = u;
    return h === void 0 || (d[m] = h), d;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((d, u) => {
    let { class: m, className: h, ...b } = u;
    return Object.entries(b).every((w) => {
      let [p, g] = w;
      return Array.isArray(g) ? g.includes({
        ...s,
        ...a
      }[p]) : {
        ...s,
        ...a
      }[p] === g;
    }) ? [
      ...d,
      m,
      h
    ] : d;
  }, []);
  return Wn(e, i, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
var oi = {
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
const si = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ge = (e, t) => {
  const n = xr(
    ({ color: r = "currentColor", size: o = 24, strokeWidth: s = 2, absoluteStrokeWidth: i, children: a, ...c }, d) => $n(
      "svg",
      {
        ref: d,
        ...oi,
        width: o,
        height: o,
        stroke: r,
        strokeWidth: i ? Number(s) * 24 / Number(o) : s,
        className: `lucide lucide-${si(e)}`,
        ...c
      },
      [
        ...t.map(([u, m]) => $n(u, m)),
        ...(Array.isArray(a) ? a : [a]) || []
      ]
    )
  );
  return n.displayName = `${e}`, n;
}, ii = ge("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]), ai = ge("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]), bn = ge("Check", [
  ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]
]), Cr = ge("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), li = ge("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]), Sr = ge("Copy", [
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
]), Vn = ge("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]), ci = ge("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]), di = ge("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]), Nr = ge("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), ui = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let r = 0; r < e.length; r++)
    n[r] = e[r];
  for (let r = 0; r < t.length; r++)
    n[e.length + r] = t[r];
  return n;
}, fi = (e, t) => ({
  classGroupId: e,
  validator: t
}), Er = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Nt = "-", Bn = [], mi = "arbitrary..", pi = (e) => {
  const t = gi(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return hi(i);
      const a = i.split(Nt), c = a[0] === "" && a.length > 1 ? 1 : 0;
      return Rr(a, c, t);
    },
    getConflictingClassGroupIds: (i, a) => {
      if (a) {
        const c = r[i], d = n[i];
        return c ? d ? ui(d, c) : c : d || Bn;
      }
      return n[i] || Bn;
    }
  };
}, Rr = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const o = e[t], s = n.nextPart.get(o);
  if (s) {
    const d = Rr(e, t + 1, s);
    if (d) return d;
  }
  const i = n.validators;
  if (i === null)
    return;
  const a = t === 0 ? e.join(Nt) : e.slice(t).join(Nt), c = i.length;
  for (let d = 0; d < c; d++) {
    const u = i[d];
    if (u.validator(a))
      return u.classGroupId;
  }
}, hi = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
  return r ? mi + r : void 0;
})(), gi = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return bi(n, t);
}, bi = (e, t) => {
  const n = Er();
  for (const r in e) {
    const o = e[r];
    vn(o, n, r, t);
  }
  return n;
}, vn = (e, t, n, r) => {
  const o = e.length;
  for (let s = 0; s < o; s++) {
    const i = e[s];
    vi(i, t, n, r);
  }
}, vi = (e, t, n, r) => {
  if (typeof e == "string") {
    yi(e, t, n);
    return;
  }
  if (typeof e == "function") {
    xi(e, t, n, r);
    return;
  }
  wi(e, t, n, r);
}, yi = (e, t, n) => {
  const r = e === "" ? t : Ar(t, e);
  r.classGroupId = n;
}, xi = (e, t, n, r) => {
  if (Ci(e)) {
    vn(e(r), t, n, r);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(fi(n, e));
}, wi = (e, t, n, r) => {
  const o = Object.entries(e), s = o.length;
  for (let i = 0; i < s; i++) {
    const [a, c] = o[i];
    vn(c, Ar(t, a), n, r);
  }
}, Ar = (e, t) => {
  let n = e;
  const r = t.split(Nt), o = r.length;
  for (let s = 0; s < o; s++) {
    const i = r[s];
    let a = n.nextPart.get(i);
    a || (a = Er(), n.nextPart.set(i, a)), n = a;
  }
  return n;
}, Ci = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Si = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const o = (s, i) => {
    n[s] = i, t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = n[s];
      if (i !== void 0)
        return i;
      if ((i = r[s]) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      s in n ? n[s] = i : o(s, i);
    }
  };
}, nn = "!", Hn = ":", Ni = [], jn = (e, t, n, r, o) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: r,
  isExternal: o
}), Ei = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (o) => {
    const s = [];
    let i = 0, a = 0, c = 0, d;
    const u = o.length;
    for (let p = 0; p < u; p++) {
      const g = o[p];
      if (i === 0 && a === 0) {
        if (g === Hn) {
          s.push(o.slice(c, p)), c = p + 1;
          continue;
        }
        if (g === "/") {
          d = p;
          continue;
        }
      }
      g === "[" ? i++ : g === "]" ? i-- : g === "(" ? a++ : g === ")" && a--;
    }
    const m = s.length === 0 ? o : o.slice(c);
    let h = m, b = !1;
    m.endsWith(nn) ? (h = m.slice(0, -1), b = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      m.startsWith(nn) && (h = m.slice(1), b = !0)
    );
    const w = d && d > c ? d - c : void 0;
    return jn(s, b, h, w);
  };
  if (t) {
    const o = t + Hn, s = r;
    r = (i) => i.startsWith(o) ? s(i.slice(o.length)) : jn(Ni, !1, i, void 0, !0);
  }
  if (n) {
    const o = r;
    r = (s) => n({
      className: s,
      parseClassName: o
    });
  }
  return r;
}, Ri = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, r) => {
    t.set(n, 1e6 + r);
  }), (n) => {
    const r = [];
    let o = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], a = i[0] === "[", c = t.has(i);
      a || c ? (o.length > 0 && (o.sort(), r.push(...o), o = []), r.push(i)) : o.push(i);
    }
    return o.length > 0 && (o.sort(), r.push(...o)), r;
  };
}, Ai = (e) => ({
  cache: Si(e.cacheSize),
  parseClassName: Ei(e),
  sortModifiers: Ri(e),
  ...pi(e)
}), Ti = /\s+/, ki = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o,
    sortModifiers: s
  } = t, i = [], a = e.trim().split(Ti);
  let c = "";
  for (let d = a.length - 1; d >= 0; d -= 1) {
    const u = a[d], {
      isExternal: m,
      modifiers: h,
      hasImportantModifier: b,
      baseClassName: w,
      maybePostfixModifierPosition: p
    } = n(u);
    if (m) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let g = !!p, v = r(g ? w.substring(0, p) : w);
    if (!v) {
      if (!g) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (v = r(w), !v) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      g = !1;
    }
    const y = h.length === 0 ? "" : h.length === 1 ? h[0] : s(h).join(":"), x = b ? y + nn : y, C = x + v;
    if (i.indexOf(C) > -1)
      continue;
    i.push(C);
    const E = o(v, g);
    for (let R = 0; R < E.length; ++R) {
      const N = E[R];
      i.push(x + N);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
}, Pi = (...e) => {
  let t = 0, n, r, o = "";
  for (; t < e.length; )
    (n = e[t++]) && (r = Tr(n)) && (o && (o += " "), o += r);
  return o;
}, Tr = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Tr(e[r])) && (n && (n += " "), n += t);
  return n;
}, Ii = (e, ...t) => {
  let n, r, o, s;
  const i = (c) => {
    const d = t.reduce((u, m) => m(u), e());
    return n = Ai(d), r = n.cache.get, o = n.cache.set, s = a, a(c);
  }, a = (c) => {
    const d = r(c);
    if (d)
      return d;
    const u = ki(c, n);
    return o(c, u), u;
  };
  return s = i, (...c) => s(Pi(...c));
}, Oi = [], te = (e) => {
  const t = (n) => n[e] || Oi;
  return t.isThemeGetter = !0, t;
}, kr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Pr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Mi = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, _i = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Di = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Li = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Fi = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $i = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ne = (e) => Mi.test(e), L = (e) => !!e && !Number.isNaN(Number(e)), Ee = (e) => !!e && Number.isInteger(Number(e)), Ht = (e) => e.endsWith("%") && L(e.slice(0, -1)), ve = (e) => _i.test(e), Ir = () => !0, zi = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Di.test(e) && !Li.test(e)
), yn = () => !1, Wi = (e) => Fi.test(e), Vi = (e) => $i.test(e), Bi = (e) => !T(e) && !k(e), Hi = (e) => Ie(e, _r, yn), T = (e) => kr.test(e), De = (e) => Ie(e, Dr, zi), Un = (e) => Ie(e, Zi, L), ji = (e) => Ie(e, Fr, Ir), Ui = (e) => Ie(e, Lr, yn), Gn = (e) => Ie(e, Or, yn), Gi = (e) => Ie(e, Mr, Vi), mt = (e) => Ie(e, $r, Wi), k = (e) => Pr.test(e), rt = (e) => Be(e, Dr), Ki = (e) => Be(e, Lr), Kn = (e) => Be(e, Or), Yi = (e) => Be(e, _r), Xi = (e) => Be(e, Mr), pt = (e) => Be(e, $r, !0), qi = (e) => Be(e, Fr, !0), Ie = (e, t, n) => {
  const r = kr.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Be = (e, t, n = !1) => {
  const r = Pr.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Or = (e) => e === "position" || e === "percentage", Mr = (e) => e === "image" || e === "url", _r = (e) => e === "length" || e === "size" || e === "bg-size", Dr = (e) => e === "length", Zi = (e) => e === "number", Lr = (e) => e === "family-name", Fr = (e) => e === "number" || e === "weight", $r = (e) => e === "shadow", Qi = () => {
  const e = te("color"), t = te("font"), n = te("text"), r = te("font-weight"), o = te("tracking"), s = te("leading"), i = te("breakpoint"), a = te("container"), c = te("spacing"), d = te("radius"), u = te("shadow"), m = te("inset-shadow"), h = te("text-shadow"), b = te("drop-shadow"), w = te("blur"), p = te("perspective"), g = te("aspect"), v = te("ease"), y = te("animate"), x = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], C = () => [
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
  ], E = () => [...C(), k, T], R = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], S = () => [k, T, c], _ = () => [Ne, "full", "auto", ...S()], F = () => [Ee, "none", "subgrid", k, T], z = () => ["auto", {
    span: ["full", Ee, k, T]
  }, Ee, k, T], V = () => [Ee, "auto", k, T], j = () => ["auto", "min", "max", "fr", k, T], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], K = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], I = () => ["auto", ...S()], $ = () => [Ne, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], M = () => [Ne, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...S()], X = () => [Ne, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...S()], A = () => [e, k, T], ae = () => [...C(), Kn, Gn, {
    position: [k, T]
  }], Ce = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Se = () => ["auto", "cover", "contain", Yi, Hi, {
    size: [k, T]
  }], le = () => [Ht, rt, De], J = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    d,
    k,
    T
  ], Q = () => ["", L, rt, De], O = () => ["solid", "dashed", "dotted", "double"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], B = () => [L, Ht, Kn, Gn], q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    w,
    k,
    T
  ], U = () => ["none", L, k, T], G = () => ["none", L, k, T], ne = () => [L, k, T], oe = () => [Ne, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ve],
      breakpoint: [ve],
      color: [Ir],
      container: [ve],
      "drop-shadow": [ve],
      ease: ["in", "out", "in-out"],
      font: [Bi],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ve],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ve],
      shadow: [ve],
      spacing: ["px", L],
      text: [ve],
      "text-shadow": [ve],
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
        aspect: ["auto", "square", Ne, T, k, g]
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
        columns: [L, T, k, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": x()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": x()
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
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: _()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": _()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": _()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": _(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: _()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": _(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: _()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": _()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": _()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: _()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: _()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: _()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: _()
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
        z: [Ee, "auto", k, T]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ne, "full", "auto", a, ...S()]
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
        flex: [L, Ne, "auto", "initial", "none", T]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", L, k, T]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", L, k, T]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Ee, "first", "last", "none", k, T]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": F()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: z()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": F()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: z()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...W(), "normal"]
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
        content: ["normal", ...W()]
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
        "place-content": W()
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
        p: S()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: S()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
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
        "space-x": S()
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
        "space-y": S()
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
        size: $()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...M()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...M()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...M()]
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
        w: [a, "screen", ...$()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...$()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...$()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...$()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...$()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...$()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, rt, De]
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
        font: [r, qi, ji]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Ht, T]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ki, Ui, t]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [T]
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
        tracking: [o, k, T]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [L, "none", k, Un]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", k, T]
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
        list: ["disc", "decimal", "none", k, T]
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
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
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
        decoration: [...O(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [L, "from-font", "auto", k, De]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [L, "auto", k, T]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k, T]
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
        content: ["none", k, T]
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
        bg: ae()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: Ce()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Se()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Ee, k, T],
          radial: ["", k, T],
          conic: [Ee, k, T]
        }, Xi, Gi]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: le()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: le()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: le()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: J()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": J()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": J()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": J()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": J()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": J()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": J()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": J()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": J()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": J()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": J()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": J()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": J()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": J()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": J()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: Q()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": Q()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": Q()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": Q()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": Q()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": Q()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": Q()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": Q()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": Q()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": Q()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": Q()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": Q()
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
        "divide-y": Q()
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
        border: [...O(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...O(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: A()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": A()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...O(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, k, T]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", L, rt, De]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
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
          pt,
          mt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", m, pt, mt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: Q()
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
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [L, De]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": Q()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, pt, mt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [L, k, T]
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
        "mask-linear": [L]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": B()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": B()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": B()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": B()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": B()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": B()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": B()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": B()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": B()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": B()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": B()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": B()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": B()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": B()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [k, T]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": B()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": B()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
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
        "mask-conic": [L]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": B()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": B()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
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
        mask: ae()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: Ce()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Se()
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
        mask: ["none", k, T]
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
          k,
          T
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
        brightness: [L, k, T]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [L, k, T]
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
          b,
          pt,
          mt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", L, k, T]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [L, k, T]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", L, k, T]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [L, k, T]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", L, k, T]
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
          k,
          T
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
        "backdrop-brightness": [L, k, T]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [L, k, T]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", L, k, T]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [L, k, T]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", L, k, T]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [L, k, T]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [L, k, T]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", L, k, T]
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
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", k, T]
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
        duration: [L, "initial", k, T]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", v, k, T]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [L, k, T]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, k, T]
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
        perspective: [p, k, T]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: U()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": U()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": U()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": U()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: G()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": G()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": G()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": G()
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
        transform: [k, T, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
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
        translate: oe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": oe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": oe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": oe()
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
        accent: A()
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
        caret: A()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", k, T]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": S()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": S()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", k, T]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [L, rt, De, Un]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
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
}, Ji = /* @__PURE__ */ Ii(Qi);
function P(...e) {
  return Ji(gn(e));
}
const ea = lt(
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
), ta = {
  default: Vn,
  info: Vn,
  success: ai,
  warning: ii,
  destructive: di
}, na = l.forwardRef(
  ({ className: e, variant: t = "default", title: n, children: r, ...o }, s) => {
    const i = ta[t ?? "default"];
    return /* @__PURE__ */ D(
      "div",
      {
        ref: s,
        role: "alert",
        className: P(ea({ variant: t }), e),
        ...o,
        children: [
          /* @__PURE__ */ f(i, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ D("div", { className: "flex-1 min-w-0", children: [
            n && /* @__PURE__ */ f("p", { className: "font-semibold mb-0.5", children: n }),
            r && /* @__PURE__ */ f("p", { className: "leading-relaxed", children: r })
          ] })
        ]
      }
    );
  }
);
na.displayName = "Alert";
const ra = lt(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function cf({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ f("div", { className: P(ra({ variant: t }), e), ...n });
}
function Yn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Xe(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Yn(o, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : Yn(e[o], null);
        }
      };
  };
}
function ee(...e) {
  return l.useCallback(Xe(...e), e);
}
var oa = Symbol.for("react.lazy"), Et = l[" use ".trim().toString()];
function sa(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function zr(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === oa && "_payload" in e && sa(e._payload);
}
// @__NO_SIDE_EFFECTS__
function ia(e) {
  const t = /* @__PURE__ */ la(e), n = l.forwardRef((r, o) => {
    let { children: s, ...i } = r;
    zr(s) && typeof Et == "function" && (s = Et(s._payload));
    const a = l.Children.toArray(s), c = a.find(da);
    if (c) {
      const d = c.props.children, u = a.map((m) => m === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var aa = /* @__PURE__ */ ia("Slot");
// @__NO_SIDE_EFFECTS__
function la(e) {
  const t = l.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (zr(o) && typeof Et == "function" && (o = Et(o._payload)), l.isValidElement(o)) {
      const i = fa(o), a = ua(s, o.props);
      return o.type !== l.Fragment && (a.ref = r ? Xe(r, i) : i), l.cloneElement(o, a);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ca = Symbol("radix.slottable");
function da(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ca;
}
function ua(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const c = s(...a);
      return o(...a), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function fa(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const ma = lt(
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
), pa = l.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => /* @__PURE__ */ f(
    r ? aa : "button",
    {
      className: P(ma({ variant: t, size: n, className: e })),
      ref: s,
      ...o
    }
  )
);
pa.displayName = "Button";
const ha = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
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
ha.displayName = "Card";
const ga = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: P("flex flex-col space-y-1.5 p-6", e), ...t }));
ga.displayName = "CardHeader";
const ba = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "h3",
  {
    ref: n,
    className: P("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...t
  }
));
ba.displayName = "CardTitle";
const va = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "p",
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
va.displayName = "CardDescription";
const ya = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { ref: n, className: P("p-6 pt-0", e), ...t }));
ya.displayName = "CardContent";
const xa = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "div",
  {
    ref: n,
    className: P("flex items-center p-6 pt-0", e),
    ...t
  }
));
xa.displayName = "CardFooter";
const wa = l.lazy(async () => {
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
function df({
  code: e,
  language: t = "text",
  copyable: n = !0,
  className: r,
  ...o
}) {
  const [s, i] = l.useState(!1), a = async () => {
    await navigator.clipboard.writeText(e), i(!0), setTimeout(() => i(!1), 2e3);
  };
  return /* @__PURE__ */ D(
    "div",
    {
      className: P("relative rounded-xl overflow-hidden text-sm", r),
      ...o,
      children: [
        /* @__PURE__ */ D("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ f("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: t }),
          n && /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: a,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: s ? /* @__PURE__ */ D(Fe, { children: [
                /* @__PURE__ */ f(bn, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ f("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ D(Fe, { children: [
                /* @__PURE__ */ f(Sr, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ f("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ f(l.Suspense, { fallback: /* @__PURE__ */ f("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: e }), children: /* @__PURE__ */ f(wa, { language: t, children: e }) })
      ]
    }
  );
}
function uf({
  text: e,
  label: t,
  resetDelay: n = 2e3,
  className: r,
  ...o
}) {
  const [s, i] = l.useState(!1);
  return /* @__PURE__ */ D(
    "button",
    {
      type: "button",
      onClick: async (c) => {
        c.stopPropagation(), await navigator.clipboard.writeText(e), i(!0), setTimeout(() => i(!1), n);
      },
      "aria-label": s ? "Copiato!" : `Copia${t ? ` ${t}` : ""}`,
      className: P(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        s ? "text-green-600" : "text-text-muted hover:text-text-base",
        r
      ),
      ...o,
      children: [
        s ? /* @__PURE__ */ f(bn, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ f(Sr, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ f("span", { children: s ? "Copiato!" : t })
      ]
    }
  );
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function Ca(e, t) {
  const n = l.createContext(t), r = (s) => {
    const { children: i, ...a } = s, c = l.useMemo(() => a, Object.values(a));
    return /* @__PURE__ */ f(n.Provider, { value: c, children: i });
  };
  r.displayName = e + "Provider";
  function o(s) {
    const i = l.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function qe(e, t = []) {
  let n = [];
  function r(s, i) {
    const a = l.createContext(i), c = n.length;
    n = [...n, i];
    const d = (m) => {
      var v;
      const { scope: h, children: b, ...w } = m, p = ((v = h == null ? void 0 : h[e]) == null ? void 0 : v[c]) || a, g = l.useMemo(() => w, Object.values(w));
      return /* @__PURE__ */ f(p.Provider, { value: g, children: b });
    };
    d.displayName = s + "Provider";
    function u(m, h) {
      var p;
      const b = ((p = h == null ? void 0 : h[e]) == null ? void 0 : p[c]) || a, w = l.useContext(b);
      if (w) return w;
      if (i !== void 0) return i;
      throw new Error(`\`${m}\` must be used within \`${s}\``);
    }
    return [d, u];
  }
  const o = () => {
    const s = n.map((i) => l.createContext(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return l.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return o.scopeName = e, [r, Sa(o, ...t)];
}
function Sa(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((a, { useScope: c, scopeName: d }) => {
        const m = c(s)[`__scope${d}`];
        return { ...a, ...m };
      }, {});
      return l.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var re = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {
}, Na = l[" useId ".trim().toString()] || (() => {
}), Ea = 0;
function Ae(e) {
  const [t, n] = l.useState(Na());
  return re(() => {
    n((r) => r ?? String(Ea++));
  }, [e]), t ? `radix-${t}` : "";
}
var Ra = l[" useInsertionEffect ".trim().toString()] || re;
function it({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, s, i] = Aa({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : o;
  {
    const u = l.useRef(e !== void 0);
    l.useEffect(() => {
      const m = u.current;
      m !== a && console.warn(
        `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const d = l.useCallback(
    (u) => {
      var m;
      if (a) {
        const h = Ta(u) ? u(e) : u;
        h !== e && ((m = i.current) == null || m.call(i, h));
      } else
        s(u);
    },
    [a, e, s, i]
  );
  return [c, d];
}
function Aa({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = l.useState(e), o = l.useRef(n), s = l.useRef(t);
  return Ra(() => {
    s.current = t;
  }, [t]), l.useEffect(() => {
    var i;
    o.current !== n && ((i = s.current) == null || i.call(s, n), o.current = n);
  }, [n, o]), [n, r, s];
}
function Ta(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
  const t = /* @__PURE__ */ Pa(e), n = l.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = l.Children.toArray(s), c = a.find(Oa);
    if (c) {
      const d = c.props.children, u = a.map((m) => m === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Pa(e) {
  const t = l.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (l.isValidElement(o)) {
      const i = _a(o), a = Ma(s, o.props);
      return o.type !== l.Fragment && (a.ref = r ? Xe(r, i) : i), l.cloneElement(o, a);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Ia = Symbol("radix.slottable");
function Oa(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Ia;
}
function Ma(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const c = s(...a);
      return o(...a), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _a(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Da = [
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
], Y = Da.reduce((e, t) => {
  const n = /* @__PURE__ */ ka(`Primitive.${t}`), r = l.forwardRef((o, s) => {
    const { asChild: i, ...a } = o, c = i ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(c, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function La(e, t) {
  e && Ot.flushSync(() => e.dispatchEvent(t));
}
function Te(e) {
  const t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e;
  }), l.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Fa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e);
  l.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var $a = "DismissableLayer", rn = "dismissableLayer.update", za = "dismissableLayer.pointerDownOutside", Wa = "dismissableLayer.focusOutside", Xn, Wr = l.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), xn = l.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: s,
      onInteractOutside: i,
      onDismiss: a,
      ...c
    } = e, d = l.useContext(Wr), [u, m] = l.useState(null), h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, b] = l.useState({}), w = ee(t, (N) => m(N)), p = Array.from(d.layers), [g] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), v = p.indexOf(g), y = u ? p.indexOf(u) : -1, x = d.layersWithOutsidePointerEventsDisabled.size > 0, C = y >= v, E = Ha((N) => {
      const S = N.target, _ = [...d.branches].some((F) => F.contains(S));
      !C || _ || (o == null || o(N), i == null || i(N), N.defaultPrevented || a == null || a());
    }, h), R = ja((N) => {
      const S = N.target;
      [...d.branches].some((F) => F.contains(S)) || (s == null || s(N), i == null || i(N), N.defaultPrevented || a == null || a());
    }, h);
    return Fa((N) => {
      y === d.layers.size - 1 && (r == null || r(N), !N.defaultPrevented && a && (N.preventDefault(), a()));
    }, h), l.useEffect(() => {
      if (u)
        return n && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Xn = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), qn(), () => {
          n && d.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Xn);
        };
    }, [u, h, n, d]), l.useEffect(() => () => {
      u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), qn());
    }, [u, d]), l.useEffect(() => {
      const N = () => b({});
      return document.addEventListener(rn, N), () => document.removeEventListener(rn, N);
    }, []), /* @__PURE__ */ f(
      Y.div,
      {
        ...c,
        ref: w,
        style: {
          pointerEvents: x ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
xn.displayName = $a;
var Va = "DismissableLayerBranch", Ba = l.forwardRef((e, t) => {
  const n = l.useContext(Wr), r = l.useRef(null), o = ee(t, r);
  return l.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ f(Y.div, { ...e, ref: o });
});
Ba.displayName = Va;
function Ha(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = l.useRef(!1), o = l.useRef(() => {
  });
  return l.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          Vr(
            za,
            n,
            d,
            { discrete: !0 }
          );
        };
        const d = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", s), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function ja(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Te(e), r = l.useRef(!1);
  return l.useEffect(() => {
    const o = (s) => {
      s.target && !r.current && Vr(Wa, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function qn() {
  const e = new CustomEvent(rn);
  document.dispatchEvent(e);
}
function Vr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? La(o, s) : o.dispatchEvent(s);
}
var jt = "focusScope.autoFocusOnMount", Ut = "focusScope.autoFocusOnUnmount", Zn = { bubbles: !1, cancelable: !0 }, Ua = "FocusScope", wn = l.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [a, c] = l.useState(null), d = Te(o), u = Te(s), m = l.useRef(null), h = ee(t, (p) => c(p)), b = l.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  l.useEffect(() => {
    if (r) {
      let p = function(x) {
        if (b.paused || !a) return;
        const C = x.target;
        a.contains(C) ? m.current = C : Re(m.current, { select: !0 });
      }, g = function(x) {
        if (b.paused || !a) return;
        const C = x.relatedTarget;
        C !== null && (a.contains(C) || Re(m.current, { select: !0 }));
      }, v = function(x) {
        if (document.activeElement === document.body)
          for (const E of x)
            E.removedNodes.length > 0 && Re(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", g);
      const y = new MutationObserver(v);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", g), y.disconnect();
      };
    }
  }, [r, a, b.paused]), l.useEffect(() => {
    if (a) {
      Jn.add(b);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const v = new CustomEvent(jt, Zn);
        a.addEventListener(jt, d), a.dispatchEvent(v), v.defaultPrevented || (Ga(Za(Br(a)), { select: !0 }), document.activeElement === p && Re(a));
      }
      return () => {
        a.removeEventListener(jt, d), setTimeout(() => {
          const v = new CustomEvent(Ut, Zn);
          a.addEventListener(Ut, u), a.dispatchEvent(v), v.defaultPrevented || Re(p ?? document.body, { select: !0 }), a.removeEventListener(Ut, u), Jn.remove(b);
        }, 0);
      };
    }
  }, [a, d, u, b]);
  const w = l.useCallback(
    (p) => {
      if (!n && !r || b.paused) return;
      const g = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, v = document.activeElement;
      if (g && v) {
        const y = p.currentTarget, [x, C] = Ka(y);
        x && C ? !p.shiftKey && v === C ? (p.preventDefault(), n && Re(x, { select: !0 })) : p.shiftKey && v === x && (p.preventDefault(), n && Re(C, { select: !0 })) : v === y && p.preventDefault();
      }
    },
    [n, r, b.paused]
  );
  return /* @__PURE__ */ f(Y.div, { tabIndex: -1, ...i, ref: h, onKeyDown: w });
});
wn.displayName = Ua;
function Ga(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Re(r, { select: t }), document.activeElement !== n) return;
}
function Ka(e) {
  const t = Br(e), n = Qn(t, e), r = Qn(t.reverse(), e);
  return [n, r];
}
function Br(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Qn(e, t) {
  for (const n of e)
    if (!Ya(n, { upTo: t })) return n;
}
function Ya(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Xa(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Re(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Xa(e) && t && e.select();
  }
}
var Jn = qa();
function qa() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = er(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = er(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function er(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Za(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Qa = "Portal", Cn = l.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [o, s] = l.useState(!1);
  re(() => s(!0), []);
  const i = n || o && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return i ? ri.createPortal(/* @__PURE__ */ f(Y.div, { ...r, ref: t }), i) : null;
});
Cn.displayName = Qa;
function Ja(e, t) {
  return l.useReducer((n, r) => t[n][r] ?? n, e);
}
var ct = (e) => {
  const { present: t, children: n } = e, r = el(t), o = typeof n == "function" ? n({ present: r.isPresent }) : l.Children.only(n), s = ee(r.ref, tl(o));
  return typeof n == "function" || r.isPresent ? l.cloneElement(o, { ref: s }) : null;
};
ct.displayName = "Presence";
function el(e) {
  const [t, n] = l.useState(), r = l.useRef(null), o = l.useRef(e), s = l.useRef("none"), i = e ? "mounted" : "unmounted", [a, c] = Ja(i, {
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
    const d = ht(r.current);
    s.current = a === "mounted" ? d : "none";
  }, [a]), re(() => {
    const d = r.current, u = o.current;
    if (u !== e) {
      const h = s.current, b = ht(d);
      e ? c("MOUNT") : b === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(u && h !== b ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), re(() => {
    if (t) {
      let d;
      const u = t.ownerDocument.defaultView ?? window, m = (b) => {
        const p = ht(r.current).includes(CSS.escape(b.animationName));
        if (b.target === t && p && (c("ANIMATION_END"), !o.current)) {
          const g = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", d = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = g);
          });
        }
      }, h = (b) => {
        b.target === t && (s.current = ht(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", m), t.addEventListener("animationend", m), () => {
        u.clearTimeout(d), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", m), t.removeEventListener("animationend", m);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: l.useCallback((d) => {
      r.current = d ? getComputedStyle(d) : null, n(d);
    }, [])
  };
}
function ht(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Gt = 0;
function Hr() {
  l.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? tr()), document.body.insertAdjacentElement("beforeend", e[1] ?? tr()), Gt++, () => {
      Gt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Gt--;
    };
  }, []);
}
function tr() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var me = function() {
  return me = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, me.apply(this, arguments);
};
function jr(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function nl(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var wt = "right-scroll-bar-position", Ct = "width-before-scroll-bar", rl = "with-scroll-bars-hidden", ol = "--removed-body-scroll-bar-size";
function Kt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function sl(e, t) {
  var n = st(function() {
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
var il = typeof window < "u" ? l.useLayoutEffect : l.useEffect, nr = /* @__PURE__ */ new WeakMap();
function al(e, t) {
  var n = sl(null, function(r) {
    return e.forEach(function(o) {
      return Kt(o, r);
    });
  });
  return il(function() {
    var r = nr.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(a) {
        s.has(a) || Kt(a, null);
      }), s.forEach(function(a) {
        o.has(a) || Kt(a, i);
      });
    }
    nr.set(n, e);
  }, [e]), n;
}
function ll(e) {
  return e;
}
function cl(e, t) {
  t === void 0 && (t = ll);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(a) {
          return a !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), i = n;
      }
      var c = function() {
        var u = i;
        i = [], u.forEach(s);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(u) {
          i.push(u), d();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return o;
}
function dl(e) {
  e === void 0 && (e = {});
  var t = cl(null);
  return t.options = me({ async: !0, ssr: !1 }, e), t;
}
var Ur = function(e) {
  var t = e.sideCar, n = jr(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return l.createElement(r, me({}, n));
};
Ur.isSideCarExport = !0;
function ul(e, t) {
  return e.useMedium(t), Ur;
}
var Gr = dl(), Yt = function() {
}, Mt = l.forwardRef(function(e, t) {
  var n = l.useRef(null), r = l.useState({
    onScrollCapture: Yt,
    onWheelCapture: Yt,
    onTouchMoveCapture: Yt
  }), o = r[0], s = r[1], i = e.forwardProps, a = e.children, c = e.className, d = e.removeScrollBar, u = e.enabled, m = e.shards, h = e.sideCar, b = e.noRelative, w = e.noIsolation, p = e.inert, g = e.allowPinchZoom, v = e.as, y = v === void 0 ? "div" : v, x = e.gapMode, C = jr(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, R = al([n, t]), N = me(me({}, C), o);
  return l.createElement(
    l.Fragment,
    null,
    u && l.createElement(E, { sideCar: Gr, removeScrollBar: d, shards: m, noRelative: b, noIsolation: w, inert: p, setCallbacks: s, allowPinchZoom: !!g, lockRef: n, gapMode: x }),
    i ? l.cloneElement(l.Children.only(a), me(me({}, N), { ref: R })) : l.createElement(y, me({}, N, { className: c, ref: R }), a)
  );
});
Mt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Mt.classNames = {
  fullWidth: Ct,
  zeroRight: wt
};
var fl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ml() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = fl();
  return t && e.setAttribute("nonce", t), e;
}
function pl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function hl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var gl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ml()) && (pl(t, n), hl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, bl = function() {
  var e = gl();
  return function(t, n) {
    l.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Kr = function() {
  var e = bl(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, vl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Xt = function(e) {
  return parseInt(e || "", 10) || 0;
}, yl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Xt(n), Xt(r), Xt(o)];
}, xl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return vl;
  var t = yl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, wl = Kr(), Ge = "data-scroll-locked", Cl = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(rl, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Ge, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(wt, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Ct, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(wt, " .").concat(wt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ct, " .").concat(Ct, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Ge, `] {
    `).concat(ol, ": ").concat(a, `px;
  }
`);
}, rr = function() {
  var e = parseInt(document.body.getAttribute(Ge) || "0", 10);
  return isFinite(e) ? e : 0;
}, Sl = function() {
  l.useEffect(function() {
    return document.body.setAttribute(Ge, (rr() + 1).toString()), function() {
      var e = rr() - 1;
      e <= 0 ? document.body.removeAttribute(Ge) : document.body.setAttribute(Ge, e.toString());
    };
  }, []);
}, Nl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Sl();
  var s = l.useMemo(function() {
    return xl(o);
  }, [o]);
  return l.createElement(wl, { styles: Cl(s, !t, o, n ? "" : "!important") });
}, on = !1;
if (typeof window < "u")
  try {
    var gt = Object.defineProperty({}, "passive", {
      get: function() {
        return on = !0, !0;
      }
    });
    window.addEventListener("test", gt, gt), window.removeEventListener("test", gt, gt);
  } catch {
    on = !1;
  }
var He = on ? { passive: !1 } : !1, El = function(e) {
  return e.tagName === "TEXTAREA";
}, Yr = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !El(e) && n[t] === "visible")
  );
}, Rl = function(e) {
  return Yr(e, "overflowY");
}, Al = function(e) {
  return Yr(e, "overflowX");
}, or = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Xr(e, r);
    if (o) {
      var s = qr(e, r), i = s[1], a = s[2];
      if (i > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Tl = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, kl = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xr = function(e, t) {
  return e === "v" ? Rl(t) : Al(t);
}, qr = function(e, t) {
  return e === "v" ? Tl(t) : kl(t);
}, Pl = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Il = function(e, t, n, r, o) {
  var s = Pl(e, window.getComputedStyle(t).direction), i = s * r, a = n.target, c = t.contains(a), d = !1, u = i > 0, m = 0, h = 0;
  do {
    if (!a)
      break;
    var b = qr(e, a), w = b[0], p = b[1], g = b[2], v = p - g - s * w;
    (w || v) && Xr(e, a) && (m += v, h += w);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (u && Math.abs(m) < 1 || !u && Math.abs(h) < 1) && (d = !0), d;
}, bt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, sr = function(e) {
  return [e.deltaX, e.deltaY];
}, ir = function(e) {
  return e && "current" in e ? e.current : e;
}, Ol = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Ml = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, _l = 0, je = [];
function Dl(e) {
  var t = l.useRef([]), n = l.useRef([0, 0]), r = l.useRef(), o = l.useState(_l++)[0], s = l.useState(Kr)[0], i = l.useRef(e);
  l.useEffect(function() {
    i.current = e;
  }, [e]), l.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var p = nl([e.lockRef.current], (e.shards || []).map(ir), !0).filter(Boolean);
      return p.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), p.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = l.useCallback(function(p, g) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !i.current.allowPinchZoom;
    var v = bt(p), y = n.current, x = "deltaX" in p ? p.deltaX : y[0] - v[0], C = "deltaY" in p ? p.deltaY : y[1] - v[1], E, R = p.target, N = Math.abs(x) > Math.abs(C) ? "h" : "v";
    if ("touches" in p && N === "h" && R.type === "range")
      return !1;
    var S = window.getSelection(), _ = S && S.anchorNode, F = _ ? _ === R || _.contains(R) : !1;
    if (F)
      return !1;
    var z = or(N, R);
    if (!z)
      return !0;
    if (z ? E = N : (E = N === "v" ? "h" : "v", z = or(N, R)), !z)
      return !1;
    if (!r.current && "changedTouches" in p && (x || C) && (r.current = E), !E)
      return !0;
    var V = r.current || E;
    return Il(V, g, p, V === "h" ? x : C);
  }, []), c = l.useCallback(function(p) {
    var g = p;
    if (!(!je.length || je[je.length - 1] !== s)) {
      var v = "deltaY" in g ? sr(g) : bt(g), y = t.current.filter(function(E) {
        return E.name === g.type && (E.target === g.target || g.target === E.shadowParent) && Ol(E.delta, v);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (i.current.shards || []).map(ir).filter(Boolean).filter(function(E) {
          return E.contains(g.target);
        }), C = x.length > 0 ? a(g, x[0]) : !i.current.noIsolation;
        C && g.cancelable && g.preventDefault();
      }
    }
  }, []), d = l.useCallback(function(p, g, v, y) {
    var x = { name: p, delta: g, target: v, should: y, shadowParent: Ll(v) };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== x;
      });
    }, 1);
  }, []), u = l.useCallback(function(p) {
    n.current = bt(p), r.current = void 0;
  }, []), m = l.useCallback(function(p) {
    d(p.type, sr(p), p.target, a(p, e.lockRef.current));
  }, []), h = l.useCallback(function(p) {
    d(p.type, bt(p), p.target, a(p, e.lockRef.current));
  }, []);
  l.useEffect(function() {
    return je.push(s), e.setCallbacks({
      onScrollCapture: m,
      onWheelCapture: m,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, He), document.addEventListener("touchmove", c, He), document.addEventListener("touchstart", u, He), function() {
      je = je.filter(function(p) {
        return p !== s;
      }), document.removeEventListener("wheel", c, He), document.removeEventListener("touchmove", c, He), document.removeEventListener("touchstart", u, He);
    };
  }, []);
  var b = e.removeScrollBar, w = e.inert;
  return l.createElement(
    l.Fragment,
    null,
    w ? l.createElement(s, { styles: Ml(o) }) : null,
    b ? l.createElement(Nl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ll(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Fl = ul(Gr, Dl);
var Sn = l.forwardRef(function(e, t) {
  return l.createElement(Mt, me({}, e, { ref: t, sideCar: Fl }));
});
Sn.classNames = Mt.classNames;
var $l = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ue = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), yt = {}, qt = 0, Zr = function(e) {
  return e && (e.host || Zr(e.parentNode));
}, zl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Zr(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Wl = function(e, t, n, r) {
  var o = zl(t, Array.isArray(e) ? e : [e]);
  yt[n] || (yt[n] = /* @__PURE__ */ new WeakMap());
  var s = yt[n], i = [], a = /* @__PURE__ */ new Set(), c = new Set(o), d = function(m) {
    !m || a.has(m) || (a.add(m), d(m.parentNode));
  };
  o.forEach(d);
  var u = function(m) {
    !m || c.has(m) || Array.prototype.forEach.call(m.children, function(h) {
      if (a.has(h))
        u(h);
      else
        try {
          var b = h.getAttribute(r), w = b !== null && b !== "false", p = (Ue.get(h) || 0) + 1, g = (s.get(h) || 0) + 1;
          Ue.set(h, p), s.set(h, g), i.push(h), p === 1 && w && vt.set(h, !0), g === 1 && h.setAttribute(n, "true"), w || h.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", h, v);
        }
    });
  };
  return u(t), a.clear(), qt++, function() {
    i.forEach(function(m) {
      var h = Ue.get(m) - 1, b = s.get(m) - 1;
      Ue.set(m, h), s.set(m, b), h || (vt.has(m) || m.removeAttribute(r), vt.delete(m)), b || m.removeAttribute(n);
    }), qt--, qt || (Ue = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), vt = /* @__PURE__ */ new WeakMap(), yt = {});
  };
}, Qr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = $l(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), Wl(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
// @__NO_SIDE_EFFECTS__
function Vl(e) {
  const t = /* @__PURE__ */ Bl(e), n = l.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = l.Children.toArray(s), c = a.find(jl);
    if (c) {
      const d = c.props.children, u = a.map((m) => m === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Bl(e) {
  const t = l.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (l.isValidElement(o)) {
      const i = Gl(o), a = Ul(s, o.props);
      return o.type !== l.Fragment && (a.ref = r ? Xe(r, i) : i), l.cloneElement(o, a);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Hl = Symbol("radix.slottable");
function jl(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Hl;
}
function Ul(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const c = s(...a);
      return o(...a), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gl(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var _t = "Dialog", [Jr] = qe(_t), [Kl, fe] = Jr(_t), eo = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, a = l.useRef(null), c = l.useRef(null), [d, u] = it({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: _t
  });
  return /* @__PURE__ */ f(
    Kl,
    {
      scope: t,
      triggerRef: a,
      contentRef: c,
      contentId: Ae(),
      titleId: Ae(),
      descriptionId: Ae(),
      open: d,
      onOpenChange: u,
      onOpenToggle: l.useCallback(() => u((m) => !m), [u]),
      modal: i,
      children: n
    }
  );
};
eo.displayName = _t;
var to = "DialogTrigger", no = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = fe(to, n), s = ee(t, o.triggerRef);
    return /* @__PURE__ */ f(
      Y.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Rn(o.open),
        ...r,
        ref: s,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
no.displayName = to;
var Nn = "DialogPortal", [Yl, ro] = Jr(Nn, {
  forceMount: void 0
}), oo = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = fe(Nn, t);
  return /* @__PURE__ */ f(Yl, { scope: t, forceMount: n, children: l.Children.map(r, (i) => /* @__PURE__ */ f(ct, { present: n || s.open, children: /* @__PURE__ */ f(Cn, { asChild: !0, container: o, children: i }) })) });
};
oo.displayName = Nn;
var Rt = "DialogOverlay", so = l.forwardRef(
  (e, t) => {
    const n = ro(Rt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = fe(Rt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ f(ct, { present: r || s.open, children: /* @__PURE__ */ f(ql, { ...o, ref: t }) }) : null;
  }
);
so.displayName = Rt;
var Xl = /* @__PURE__ */ Vl("DialogOverlay.RemoveScroll"), ql = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = fe(Rt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ f(Sn, { as: Xl, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ f(
        Y.div,
        {
          "data-state": Rn(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), $e = "DialogContent", io = l.forwardRef(
  (e, t) => {
    const n = ro($e, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = fe($e, e.__scopeDialog);
    return /* @__PURE__ */ f(ct, { present: r || s.open, children: s.modal ? /* @__PURE__ */ f(Zl, { ...o, ref: t }) : /* @__PURE__ */ f(Ql, { ...o, ref: t }) });
  }
);
io.displayName = $e;
var Zl = l.forwardRef(
  (e, t) => {
    const n = fe($e, e.__scopeDialog), r = l.useRef(null), o = ee(t, n.contentRef, r);
    return l.useEffect(() => {
      const s = r.current;
      if (s) return Qr(s);
    }, []), /* @__PURE__ */ f(
      ao,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: H(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, a = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || a) && s.preventDefault();
        }),
        onFocusOutside: H(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Ql = l.forwardRef(
  (e, t) => {
    const n = fe($e, e.__scopeDialog), r = l.useRef(!1), o = l.useRef(!1);
    return /* @__PURE__ */ f(
      ao,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, a;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (r.current || (a = n.triggerRef.current) == null || a.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var c, d;
          (c = e.onInteractOutside) == null || c.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((d = n.triggerRef.current) == null ? void 0 : d.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), ao = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, a = fe($e, n), c = l.useRef(null), d = ee(t, c);
    return Hr(), /* @__PURE__ */ D(Fe, { children: [
      /* @__PURE__ */ f(
        wn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ f(
            xn,
            {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": Rn(a.open),
              ...i,
              ref: d,
              onDismiss: () => a.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ D(Fe, { children: [
        /* @__PURE__ */ f(Jl, { titleId: a.titleId }),
        /* @__PURE__ */ f(tc, { contentRef: c, descriptionId: a.descriptionId })
      ] })
    ] });
  }
), En = "DialogTitle", lo = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = fe(En, n);
    return /* @__PURE__ */ f(Y.h2, { id: o.titleId, ...r, ref: t });
  }
);
lo.displayName = En;
var co = "DialogDescription", uo = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = fe(co, n);
    return /* @__PURE__ */ f(Y.p, { id: o.descriptionId, ...r, ref: t });
  }
);
uo.displayName = co;
var fo = "DialogClose", mo = l.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = fe(fo, n);
    return /* @__PURE__ */ f(
      Y.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
mo.displayName = fo;
function Rn(e) {
  return e ? "open" : "closed";
}
var po = "DialogTitleWarning", [ff, ho] = Ca(po, {
  contentName: $e,
  titleName: En,
  docsSlug: "dialog"
}), Jl = ({ titleId: e }) => {
  const t = ho(po), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return l.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, ec = "DialogDescriptionWarning", tc = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ho(ec).contentName}}.`;
  return l.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, nc = eo, rc = no, oc = oo, go = so, bo = io, vo = lo, yo = uo, xo = mo;
const mf = nc, pf = rc, sc = oc, hf = xo, wo = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  go,
  {
    ref: n,
    className: P(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
wo.displayName = go.displayName;
const ic = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ D(sc, { children: [
  /* @__PURE__ */ f(wo, {}),
  /* @__PURE__ */ D(
    bo,
    {
      ref: r,
      className: P(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ D(xo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ f(Nr, { className: "h-4 w-4" }),
          /* @__PURE__ */ f("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
ic.displayName = bo.displayName;
const ac = ({
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
ac.displayName = "DialogHeader";
const lc = ({
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
lc.displayName = "DialogFooter";
const cc = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  vo,
  {
    ref: n,
    className: P(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
cc.displayName = vo.displayName;
const dc = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  yo,
  {
    ref: n,
    className: P("text-sm text-text-muted", e),
    ...t
  }
));
dc.displayName = yo.displayName;
function gf({
  icon: e,
  title: t,
  description: n,
  action: r,
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
          n && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted max-w-sm", children: n })
        ] }),
        r && /* @__PURE__ */ f("div", { children: r })
      ]
    }
  );
}
function bf({
  icon: e,
  iconColor: t = "#f59e0b",
  iconBg: n = "#f59e0b1a",
  title: r,
  description: o,
  action: s,
  horizontal: i = !1,
  className: a,
  ...c
}) {
  return i ? /* @__PURE__ */ f(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-6",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        a
      ),
      ...c,
      children: /* @__PURE__ */ D("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ f(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            style: { backgroundColor: n },
            children: /* @__PURE__ */ f(e, { className: "h-6 w-6", style: { color: t } })
          }
        ),
        /* @__PURE__ */ D("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ f("h3", { className: "text-base font-semibold text-text-base", children: r }),
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
        a
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
        s && /* @__PURE__ */ f("div", { className: "mt-5", children: s })
      ]
    }
  );
}
const uc = xr(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, i) => {
    const a = o || `input-${Math.random().toString(36).substr(2, 9)}`;
    return /* @__PURE__ */ D("div", { className: "space-y-1", children: [
      t && /* @__PURE__ */ f("label", { htmlFor: a, className: "block text-sm font-medium text-text-base", children: t }),
      /* @__PURE__ */ f(
        "input",
        {
          id: a,
          className: gn(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            n && "border-red-300 focus:border-red-500 focus:ring-red-500",
            e
          ),
          ref: i,
          ...s
        }
      ),
      n && /* @__PURE__ */ f("p", { className: "text-sm text-red-600", children: n }),
      r && !n && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: r })
    ] });
  }
);
uc.displayName = "Input";
const fc = l.forwardRef(
  ({
    icon: e,
    label: t,
    error: n,
    helperText: r,
    rightElement: o,
    className: s,
    id: i,
    ...a
  }, c) => {
    const d = i ?? `input-icon-${Math.random().toString(36).slice(2, 9)}`;
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
              n && "border-red-300 focus:ring-red-500 focus:border-red-500",
              s
            ),
            ...a
          }
        ),
        o && /* @__PURE__ */ f("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: o })
      ] }),
      n && /* @__PURE__ */ f("p", { className: "text-xs text-red-600", children: n }),
      r && !n && /* @__PURE__ */ f("p", { className: "text-xs text-text-muted", children: r })
    ] });
  }
);
fc.displayName = "InputWithIcon";
const mc = {
  GET: "bg-green-100 text-green-800 border-green-200",
  POST: "bg-blue-100 text-blue-800 border-blue-200",
  PUT: "bg-amber-100 text-amber-800 border-amber-200",
  PATCH: "bg-purple-100 text-purple-800 border-purple-200",
  DELETE: "bg-red-100 text-red-800 border-red-200",
  HEAD: "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border"
};
function vf({ method: e, className: t, ...n }) {
  const r = e.toUpperCase(), o = mc[r] ?? "bg-subtle text-text-muted border-border";
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
function yf({
  title: e,
  description: t,
  actions: n,
  breadcrumb: r,
  className: o,
  ...s
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: P("bg-surface border-b border-border", o),
      ...s,
      children: /* @__PURE__ */ D("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        r && /* @__PURE__ */ f("div", { className: "mb-3", children: r }),
        /* @__PURE__ */ D("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ D("div", { className: "min-w-0", children: [
            /* @__PURE__ */ f("h1", { className: "text-3xl font-bold text-text-base truncate", children: e }),
            t && /* @__PURE__ */ f("p", { className: "mt-1 text-text-muted", children: t })
          ] }),
          n && /* @__PURE__ */ f("div", { className: "flex items-center gap-3 shrink-0", children: n })
        ] })
      ] })
    }
  );
}
const pc = l.forwardRef(
  ({ value: e, onChange: t, onClear: n, className: r, placeholder: o = "Cerca...", ...s }, i) => {
    const a = () => {
      t(""), n == null || n();
    };
    return /* @__PURE__ */ D("div", { className: P("relative", r), children: [
      /* @__PURE__ */ f(ci, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ f(
        "input",
        {
          ref: i,
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
          onClick: a,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ f(Nr, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
pc.displayName = "SearchInput";
function ar(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
// @__NO_SIDE_EFFECTS__
function lr(e) {
  const t = /* @__PURE__ */ hc(e), n = l.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = l.Children.toArray(s), c = a.find(bc);
    if (c) {
      const d = c.props.children, u = a.map((m) => m === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function hc(e) {
  const t = l.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (l.isValidElement(o)) {
      const i = yc(o), a = vc(s, o.props);
      return o.type !== l.Fragment && (a.ref = r ? Xe(r, i) : i), l.cloneElement(o, a);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var gc = Symbol("radix.slottable");
function bc(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === gc;
}
function vc(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const c = s(...a);
      return o(...a), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function yc(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Co(e) {
  const t = e + "CollectionProvider", [n, r] = qe(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (p) => {
    const { scope: g, children: v } = p, y = _e.useRef(null), x = _e.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: g, itemMap: x, collectionRef: y, children: v });
  };
  i.displayName = t;
  const a = e + "CollectionSlot", c = /* @__PURE__ */ lr(a), d = _e.forwardRef(
    (p, g) => {
      const { scope: v, children: y } = p, x = s(a, v), C = ee(g, x.collectionRef);
      return /* @__PURE__ */ f(c, { ref: C, children: y });
    }
  );
  d.displayName = a;
  const u = e + "CollectionItemSlot", m = "data-radix-collection-item", h = /* @__PURE__ */ lr(u), b = _e.forwardRef(
    (p, g) => {
      const { scope: v, children: y, ...x } = p, C = _e.useRef(null), E = ee(g, C), R = s(u, v);
      return _e.useEffect(() => (R.itemMap.set(C, { ref: C, ...x }), () => void R.itemMap.delete(C))), /* @__PURE__ */ f(h, { [m]: "", ref: E, children: y });
    }
  );
  b.displayName = u;
  function w(p) {
    const g = s(e + "CollectionConsumer", p);
    return _e.useCallback(() => {
      const y = g.collectionRef.current;
      if (!y) return [];
      const x = Array.from(y.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        (R, N) => x.indexOf(R.ref.current) - x.indexOf(N.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: d, ItemSlot: b },
    w,
    r
  ];
}
var xc = l.createContext(void 0);
function An(e) {
  const t = l.useContext(xc);
  return e || t || "ltr";
}
const wc = ["top", "right", "bottom", "left"], ke = Math.min, se = Math.max, At = Math.round, xt = Math.floor, he = (e) => ({
  x: e,
  y: e
}), Cc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function sn(e, t, n) {
  return se(e, ke(t, n));
}
function ye(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xe(e) {
  return e.split("-")[0];
}
function Ze(e) {
  return e.split("-")[1];
}
function Tn(e) {
  return e === "x" ? "y" : "x";
}
function kn(e) {
  return e === "y" ? "height" : "width";
}
function pe(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Pn(e) {
  return Tn(pe(e));
}
function Sc(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ze(e), o = Pn(e), s = kn(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = Tt(i)), [i, Tt(i)];
}
function Nc(e) {
  const t = Tt(e);
  return [an(e), t, an(t)];
}
function an(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const cr = ["left", "right"], dr = ["right", "left"], Ec = ["top", "bottom"], Rc = ["bottom", "top"];
function Ac(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? dr : cr : t ? cr : dr;
    case "left":
    case "right":
      return t ? Ec : Rc;
    default:
      return [];
  }
}
function Tc(e, t, n, r) {
  const o = Ze(e);
  let s = Ac(xe(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(an)))), s;
}
function Tt(e) {
  const t = xe(e);
  return Cc[t] + e.slice(t.length);
}
function kc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function So(e) {
  return typeof e != "number" ? kc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function kt(e) {
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
function ur(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = pe(t), i = Pn(t), a = kn(i), c = xe(t), d = s === "y", u = r.x + r.width / 2 - o.width / 2, m = r.y + r.height / 2 - o.height / 2, h = r[a] / 2 - o[a] / 2;
  let b;
  switch (c) {
    case "top":
      b = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      b = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      b = {
        x: r.x + r.width,
        y: m
      };
      break;
    case "left":
      b = {
        x: r.x - o.width,
        y: m
      };
      break;
    default:
      b = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ze(t)) {
    case "start":
      b[i] -= h * (n && d ? -1 : 1);
      break;
    case "end":
      b[i] += h * (n && d ? -1 : 1);
      break;
  }
  return b;
}
async function Pc(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: c
  } = e, {
    boundary: d = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: m = "floating",
    altBoundary: h = !1,
    padding: b = 0
  } = ye(t, e), w = So(b), g = a[h ? m === "floating" ? "reference" : "floating" : m], v = kt(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: d,
    rootBoundary: u,
    strategy: c
  })), y = m === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, x = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), C = await (s.isElement == null ? void 0 : s.isElement(x)) ? await (s.getScale == null ? void 0 : s.getScale(x)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = kt(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: x,
    strategy: c
  }) : y);
  return {
    top: (v.top - E.top + w.top) / C.y,
    bottom: (E.bottom - v.bottom + w.bottom) / C.y,
    left: (v.left - E.left + w.left) / C.x,
    right: (E.right - v.right + w.right) / C.x
  };
}
const Ic = 50, Oc = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = i.detectOverflow ? i : {
    ...i,
    detectOverflow: Pc
  }, c = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let d = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: m
  } = ur(d, r, c), h = r, b = 0;
  const w = {};
  for (let p = 0; p < s.length; p++) {
    const g = s[p];
    if (!g)
      continue;
    const {
      name: v,
      fn: y
    } = g, {
      x,
      y: C,
      data: E,
      reset: R
    } = await y({
      x: u,
      y: m,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: w,
      rects: d,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, m = C ?? m, w[v] = {
      ...w[v],
      ...E
    }, R && b < Ic && (b++, typeof R == "object" && (R.placement && (h = R.placement), R.rects && (d = R.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : R.rects), {
      x: u,
      y: m
    } = ur(d, h, c)), p = -1);
  }
  return {
    x: u,
    y: m,
    placement: h,
    strategy: o,
    middlewareData: w
  };
}, Mc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: c
    } = t, {
      element: d,
      padding: u = 0
    } = ye(e, t) || {};
    if (d == null)
      return {};
    const m = So(u), h = {
      x: n,
      y: r
    }, b = Pn(o), w = kn(b), p = await i.getDimensions(d), g = b === "y", v = g ? "top" : "left", y = g ? "bottom" : "right", x = g ? "clientHeight" : "clientWidth", C = s.reference[w] + s.reference[b] - h[b] - s.floating[w], E = h[b] - s.reference[b], R = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(d));
    let N = R ? R[x] : 0;
    (!N || !await (i.isElement == null ? void 0 : i.isElement(R))) && (N = a.floating[x] || s.floating[w]);
    const S = C / 2 - E / 2, _ = N / 2 - p[w] / 2 - 1, F = ke(m[v], _), z = ke(m[y], _), V = F, j = N - p[w] - z, W = N / 2 - p[w] / 2 + S, K = sn(V, W, j), I = !c.arrow && Ze(o) != null && W !== K && s.reference[w] / 2 - (W < V ? F : z) - p[w] / 2 < 0, $ = I ? W < V ? W - V : W - j : 0;
    return {
      [b]: h[b] + $,
      data: {
        [b]: K,
        centerOffset: W - K - $,
        ...I && {
          alignmentOffset: $
        }
      },
      reset: I
    };
  }
}), _c = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: c,
        elements: d
      } = t, {
        mainAxis: u = !0,
        crossAxis: m = !0,
        fallbackPlacements: h,
        fallbackStrategy: b = "bestFit",
        fallbackAxisSideDirection: w = "none",
        flipAlignment: p = !0,
        ...g
      } = ye(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const v = xe(o), y = pe(a), x = xe(a) === a, C = await (c.isRTL == null ? void 0 : c.isRTL(d.floating)), E = h || (x || !p ? [Tt(a)] : Nc(a)), R = w !== "none";
      !h && R && E.push(...Tc(a, p, w, C));
      const N = [a, ...E], S = await c.detectOverflow(t, g), _ = [];
      let F = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && _.push(S[v]), m) {
        const W = Sc(o, i, C);
        _.push(S[W[0]], S[W[1]]);
      }
      if (F = [...F, {
        placement: o,
        overflows: _
      }], !_.every((W) => W <= 0)) {
        var z, V;
        const W = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1, K = N[W];
        if (K && (!(m === "alignment" ? y !== pe(K) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        F.every((M) => pe(M.placement) === y ? M.overflows[0] > 0 : !0)))
          return {
            data: {
              index: W,
              overflows: F
            },
            reset: {
              placement: K
            }
          };
        let I = (V = F.filter(($) => $.overflows[0] <= 0).sort(($, M) => $.overflows[1] - M.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!I)
          switch (b) {
            case "bestFit": {
              var j;
              const $ = (j = F.filter((M) => {
                if (R) {
                  const X = pe(M.placement);
                  return X === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((X) => X > 0).reduce((X, A) => X + A, 0)]).sort((M, X) => M[1] - X[1])[0]) == null ? void 0 : j[0];
              $ && (I = $);
              break;
            }
            case "initialPlacement":
              I = a;
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
function fr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function mr(e) {
  return wc.some((t) => e[t] >= 0);
}
const Dc = function(e) {
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
      } = ye(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await r.detectOverflow(t, {
            ...s,
            elementContext: "reference"
          }), a = fr(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: mr(a)
            }
          };
        }
        case "escaped": {
          const i = await r.detectOverflow(t, {
            ...s,
            altBoundary: !0
          }), a = fr(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: mr(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, No = /* @__PURE__ */ new Set(["left", "top"]);
async function Lc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = xe(n), a = Ze(n), c = pe(n) === "y", d = No.has(i) ? -1 : 1, u = s && c ? -1 : 1, m = ye(t, e);
  let {
    mainAxis: h,
    crossAxis: b,
    alignmentAxis: w
  } = typeof m == "number" ? {
    mainAxis: m,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: m.mainAxis || 0,
    crossAxis: m.crossAxis || 0,
    alignmentAxis: m.alignmentAxis
  };
  return a && typeof w == "number" && (b = a === "end" ? w * -1 : w), c ? {
    x: b * u,
    y: h * d
  } : {
    x: h * d,
    y: b * u
  };
}
const Fc = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = t, c = await Lc(t, e);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: i
        }
      };
    }
  };
}, $c = function(e) {
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
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: c = {
          fn: (v) => {
            let {
              x: y,
              y: x
            } = v;
            return {
              x: y,
              y: x
            };
          }
        },
        ...d
      } = ye(e, t), u = {
        x: n,
        y: r
      }, m = await s.detectOverflow(t, d), h = pe(xe(o)), b = Tn(h);
      let w = u[b], p = u[h];
      if (i) {
        const v = b === "y" ? "top" : "left", y = b === "y" ? "bottom" : "right", x = w + m[v], C = w - m[y];
        w = sn(x, w, C);
      }
      if (a) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", x = p + m[v], C = p - m[y];
        p = sn(x, p, C);
      }
      const g = c.fn({
        ...t,
        [b]: w,
        [h]: p
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r,
          enabled: {
            [b]: i,
            [h]: a
          }
        }
      };
    }
  };
}, zc = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: s,
        middlewareData: i
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: d = !0
      } = ye(e, t), u = {
        x: n,
        y: r
      }, m = pe(o), h = Tn(m);
      let b = u[h], w = u[m];
      const p = ye(a, t), g = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (c) {
        const x = h === "y" ? "height" : "width", C = s.reference[h] - s.floating[x] + g.mainAxis, E = s.reference[h] + s.reference[x] - g.mainAxis;
        b < C ? b = C : b > E && (b = E);
      }
      if (d) {
        var v, y;
        const x = h === "y" ? "width" : "height", C = No.has(xe(o)), E = s.reference[m] - s.floating[x] + (C && ((v = i.offset) == null ? void 0 : v[m]) || 0) + (C ? 0 : g.crossAxis), R = s.reference[m] + s.reference[x] + (C ? 0 : ((y = i.offset) == null ? void 0 : y[m]) || 0) - (C ? g.crossAxis : 0);
        w < E ? w = E : w > R && (w = R);
      }
      return {
        [h]: b,
        [m]: w
      };
    }
  };
}, Wc = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: s,
        platform: i,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...d
      } = ye(e, t), u = await i.detectOverflow(t, d), m = xe(o), h = Ze(o), b = pe(o) === "y", {
        width: w,
        height: p
      } = s.floating;
      let g, v;
      m === "top" || m === "bottom" ? (g = m, v = h === (await (i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = m, g = h === "end" ? "top" : "bottom");
      const y = p - u.top - u.bottom, x = w - u.left - u.right, C = ke(p - u[g], y), E = ke(w - u[v], x), R = !t.middlewareData.shift;
      let N = C, S = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = x), (r = t.middlewareData.shift) != null && r.enabled.y && (N = y), R && !h) {
        const F = se(u.left, 0), z = se(u.right, 0), V = se(u.top, 0), j = se(u.bottom, 0);
        b ? S = w - 2 * (F !== 0 || z !== 0 ? F + z : se(u.left, u.right)) : N = p - 2 * (V !== 0 || j !== 0 ? V + j : se(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: S,
        availableHeight: N
      });
      const _ = await i.getDimensions(a.floating);
      return w !== _.width || p !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Dt() {
  return typeof window < "u";
}
function Qe(e) {
  return Eo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ie(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function be(e) {
  var t;
  return (t = (Eo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Eo(e) {
  return Dt() ? e instanceof Node || e instanceof ie(e).Node : !1;
}
function de(e) {
  return Dt() ? e instanceof Element || e instanceof ie(e).Element : !1;
}
function we(e) {
  return Dt() ? e instanceof HTMLElement || e instanceof ie(e).HTMLElement : !1;
}
function pr(e) {
  return !Dt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ie(e).ShadowRoot;
}
function dt(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ue(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function Vc(e) {
  return /^(table|td|th)$/.test(Qe(e));
}
function Lt(e) {
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
const Bc = /transform|translate|scale|rotate|perspective|filter/, Hc = /paint|layout|strict|content/, Le = (e) => !!e && e !== "none";
let Zt;
function In(e) {
  const t = de(e) ? ue(e) : e;
  return Le(t.transform) || Le(t.translate) || Le(t.scale) || Le(t.rotate) || Le(t.perspective) || !On() && (Le(t.backdropFilter) || Le(t.filter)) || Bc.test(t.willChange || "") || Hc.test(t.contain || "");
}
function jc(e) {
  let t = Pe(e);
  for (; we(t) && !Ye(t); ) {
    if (In(t))
      return t;
    if (Lt(t))
      return null;
    t = Pe(t);
  }
  return null;
}
function On() {
  return Zt == null && (Zt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Zt;
}
function Ye(e) {
  return /^(html|body|#document)$/.test(Qe(e));
}
function ue(e) {
  return ie(e).getComputedStyle(e);
}
function Ft(e) {
  return de(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Pe(e) {
  if (Qe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    pr(e) && e.host || // Fallback.
    be(e)
  );
  return pr(t) ? t.host : t;
}
function Ro(e) {
  const t = Pe(e);
  return Ye(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : we(t) && dt(t) ? t : Ro(t);
}
function at(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ro(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = ie(o);
  if (s) {
    const a = ln(i);
    return t.concat(i, i.visualViewport || [], dt(o) ? o : [], a && n ? at(a) : []);
  } else
    return t.concat(o, at(o, [], n));
}
function ln(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ao(e) {
  const t = ue(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = we(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, a = At(n) !== s || At(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function Mn(e) {
  return de(e) ? e : e.contextElement;
}
function Ke(e) {
  const t = Mn(e);
  if (!we(t))
    return he(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = Ao(t);
  let i = (s ? At(n.width) : n.width) / r, a = (s ? At(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Uc = /* @__PURE__ */ he(0);
function To(e) {
  const t = ie(e);
  return !On() || !t.visualViewport ? Uc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ie(e) ? !1 : t;
}
function ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = Mn(e);
  let i = he(1);
  t && (r ? de(r) && (i = Ke(r)) : i = Ke(e));
  const a = Gc(s, n, r) ? To(s) : he(0);
  let c = (o.left + a.x) / i.x, d = (o.top + a.y) / i.y, u = o.width / i.x, m = o.height / i.y;
  if (s) {
    const h = ie(s), b = r && de(r) ? ie(r) : r;
    let w = h, p = ln(w);
    for (; p && r && b !== w; ) {
      const g = Ke(p), v = p.getBoundingClientRect(), y = ue(p), x = v.left + (p.clientLeft + parseFloat(y.paddingLeft)) * g.x, C = v.top + (p.clientTop + parseFloat(y.paddingTop)) * g.y;
      c *= g.x, d *= g.y, u *= g.x, m *= g.y, c += x, d += C, w = ie(p), p = ln(w);
    }
  }
  return kt({
    width: u,
    height: m,
    x: c,
    y: d
  });
}
function $t(e, t) {
  const n = Ft(e).scrollLeft;
  return t ? t.left + n : ze(be(e)).left + n;
}
function ko(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - $t(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Kc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = be(r), a = t ? Lt(t.floating) : !1;
  if (r === i || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, d = he(1);
  const u = he(0), m = we(r);
  if ((m || !m && !s) && ((Qe(r) !== "body" || dt(i)) && (c = Ft(r)), m)) {
    const b = ze(r);
    d = Ke(r), u.x = b.x + r.clientLeft, u.y = b.y + r.clientTop;
  }
  const h = i && !m && !s ? ko(i, c) : he(0);
  return {
    width: n.width * d.x,
    height: n.height * d.y,
    x: n.x * d.x - c.scrollLeft * d.x + u.x + h.x,
    y: n.y * d.y - c.scrollTop * d.y + u.y + h.y
  };
}
function Yc(e) {
  return Array.from(e.getClientRects());
}
function Xc(e) {
  const t = be(e), n = Ft(e), r = e.ownerDocument.body, o = se(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = se(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + $t(e);
  const a = -n.scrollTop;
  return ue(r).direction === "rtl" && (i += se(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
const hr = 25;
function qc(e, t) {
  const n = ie(e), r = be(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, c = 0;
  if (o) {
    s = o.width, i = o.height;
    const u = On();
    (!u || u && t === "fixed") && (a = o.offsetLeft, c = o.offsetTop);
  }
  const d = $t(r);
  if (d <= 0) {
    const u = r.ownerDocument, m = u.body, h = getComputedStyle(m), b = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, w = Math.abs(r.clientWidth - m.clientWidth - b);
    w <= hr && (s -= w);
  } else d <= hr && (s += d);
  return {
    width: s,
    height: i,
    x: a,
    y: c
  };
}
function Zc(e, t) {
  const n = ze(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = we(e) ? Ke(e) : he(1), i = e.clientWidth * s.x, a = e.clientHeight * s.y, c = o * s.x, d = r * s.y;
  return {
    width: i,
    height: a,
    x: c,
    y: d
  };
}
function gr(e, t, n) {
  let r;
  if (t === "viewport")
    r = qc(e, n);
  else if (t === "document")
    r = Xc(be(e));
  else if (de(t))
    r = Zc(t, n);
  else {
    const o = To(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return kt(r);
}
function Po(e, t) {
  const n = Pe(e);
  return n === t || !de(n) || Ye(n) ? !1 : ue(n).position === "fixed" || Po(n, t);
}
function Qc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = at(e, [], !1).filter((a) => de(a) && Qe(a) !== "body"), o = null;
  const s = ue(e).position === "fixed";
  let i = s ? Pe(e) : e;
  for (; de(i) && !Ye(i); ) {
    const a = ue(i), c = In(i);
    !c && a.position === "fixed" && (o = null), (s ? !c && !o : !c && a.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || dt(i) && !c && Po(e, i)) ? r = r.filter((u) => u !== i) : o = a, i = Pe(i);
  }
  return t.set(e, r), r;
}
function Jc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Lt(t) ? [] : Qc(t, this._c) : [].concat(n), r], a = gr(t, i[0], o);
  let c = a.top, d = a.right, u = a.bottom, m = a.left;
  for (let h = 1; h < i.length; h++) {
    const b = gr(t, i[h], o);
    c = se(b.top, c), d = ke(b.right, d), u = ke(b.bottom, u), m = se(b.left, m);
  }
  return {
    width: d - m,
    height: u - c,
    x: m,
    y: c
  };
}
function ed(e) {
  const {
    width: t,
    height: n
  } = Ao(e);
  return {
    width: t,
    height: n
  };
}
function td(e, t, n) {
  const r = we(t), o = be(t), s = n === "fixed", i = ze(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = he(0);
  function d() {
    c.x = $t(o);
  }
  if (r || !r && !s)
    if ((Qe(t) !== "body" || dt(o)) && (a = Ft(t)), r) {
      const b = ze(t, !0, s, t);
      c.x = b.x + t.clientLeft, c.y = b.y + t.clientTop;
    } else o && d();
  s && !r && o && d();
  const u = o && !r && !s ? ko(o, a) : he(0), m = i.left + a.scrollLeft - c.x - u.x, h = i.top + a.scrollTop - c.y - u.y;
  return {
    x: m,
    y: h,
    width: i.width,
    height: i.height
  };
}
function Qt(e) {
  return ue(e).position === "static";
}
function br(e, t) {
  if (!we(e) || ue(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return be(e) === n && (n = n.ownerDocument.body), n;
}
function Io(e, t) {
  const n = ie(e);
  if (Lt(e))
    return n;
  if (!we(e)) {
    let o = Pe(e);
    for (; o && !Ye(o); ) {
      if (de(o) && !Qt(o))
        return o;
      o = Pe(o);
    }
    return n;
  }
  let r = br(e, t);
  for (; r && Vc(r) && Qt(r); )
    r = br(r, t);
  return r && Ye(r) && Qt(r) && !In(r) ? n : r || jc(e) || n;
}
const nd = async function(e) {
  const t = this.getOffsetParent || Io, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: td(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function rd(e) {
  return ue(e).direction === "rtl";
}
const od = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Kc,
  getDocumentElement: be,
  getClippingRect: Jc,
  getOffsetParent: Io,
  getElementRects: nd,
  getClientRects: Yc,
  getDimensions: ed,
  getScale: Ke,
  isElement: de,
  isRTL: rd
};
function Oo(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function sd(e, t) {
  let n = null, r;
  const o = be(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const d = e.getBoundingClientRect(), {
      left: u,
      top: m,
      width: h,
      height: b
    } = d;
    if (a || t(), !h || !b)
      return;
    const w = xt(m), p = xt(o.clientWidth - (u + h)), g = xt(o.clientHeight - (m + b)), v = xt(u), x = {
      rootMargin: -w + "px " + -p + "px " + -g + "px " + -v + "px",
      threshold: se(0, ke(1, c)) || 1
    };
    let C = !0;
    function E(R) {
      const N = R[0].intersectionRatio;
      if (N !== c) {
        if (!C)
          return i();
        N ? i(!1, N) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      N === 1 && !Oo(d, e.getBoundingClientRect()) && i(), C = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...x,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, x);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function id(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, d = Mn(e), u = o || s ? [...d ? at(d) : [], ...t ? at(t) : []] : [];
  u.forEach((v) => {
    o && v.addEventListener("scroll", n, {
      passive: !0
    }), s && v.addEventListener("resize", n);
  });
  const m = d && a ? sd(d, n) : null;
  let h = -1, b = null;
  i && (b = new ResizeObserver((v) => {
    let [y] = v;
    y && y.target === d && b && t && (b.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var x;
      (x = b) == null || x.observe(t);
    })), n();
  }), d && !c && b.observe(d), t && b.observe(t));
  let w, p = c ? ze(e) : null;
  c && g();
  function g() {
    const v = ze(e);
    p && !Oo(p, v) && n(), p = v, w = requestAnimationFrame(g);
  }
  return n(), () => {
    var v;
    u.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), m == null || m(), (v = b) == null || v.disconnect(), b = null, c && cancelAnimationFrame(w);
  };
}
const ad = Fc, ld = $c, cd = _c, dd = Wc, ud = Dc, vr = Mc, fd = zc, md = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: od,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Oc(e, t, {
    ...o,
    platform: s
  });
};
var pd = typeof document < "u", hd = function() {
}, St = pd ? Qs : hd;
function Pt(e, t) {
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
        if (!Pt(e[r], t[r]))
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
      if (!(s === "_owner" && e.$$typeof) && !Pt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Mo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function yr(e, t) {
  const n = Mo(e);
  return Math.round(t * n) / n;
}
function Jt(e) {
  const t = l.useRef(e);
  return St(() => {
    t.current = e;
  }), t;
}
function gd(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: s,
      floating: i
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: d
  } = e, [u, m] = l.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, b] = l.useState(r);
  Pt(h, r) || b(r);
  const [w, p] = l.useState(null), [g, v] = l.useState(null), y = l.useCallback((M) => {
    M !== R.current && (R.current = M, p(M));
  }, []), x = l.useCallback((M) => {
    M !== N.current && (N.current = M, v(M));
  }, []), C = s || w, E = i || g, R = l.useRef(null), N = l.useRef(null), S = l.useRef(u), _ = c != null, F = Jt(c), z = Jt(o), V = Jt(d), j = l.useCallback(() => {
    if (!R.current || !N.current)
      return;
    const M = {
      placement: t,
      strategy: n,
      middleware: h
    };
    z.current && (M.platform = z.current), md(R.current, N.current, M).then((X) => {
      const A = {
        ...X,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      W.current && !Pt(S.current, A) && (S.current = A, Ot.flushSync(() => {
        m(A);
      }));
    });
  }, [h, t, n, z, V]);
  St(() => {
    d === !1 && S.current.isPositioned && (S.current.isPositioned = !1, m((M) => ({
      ...M,
      isPositioned: !1
    })));
  }, [d]);
  const W = l.useRef(!1);
  St(() => (W.current = !0, () => {
    W.current = !1;
  }), []), St(() => {
    if (C && (R.current = C), E && (N.current = E), C && E) {
      if (F.current)
        return F.current(C, E, j);
      j();
    }
  }, [C, E, j, F, _]);
  const K = l.useMemo(() => ({
    reference: R,
    floating: N,
    setReference: y,
    setFloating: x
  }), [y, x]), I = l.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), $ = l.useMemo(() => {
    const M = {
      position: n,
      left: 0,
      top: 0
    };
    if (!I.floating)
      return M;
    const X = yr(I.floating, u.x), A = yr(I.floating, u.y);
    return a ? {
      ...M,
      transform: "translate(" + X + "px, " + A + "px)",
      ...Mo(I.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: X,
      top: A
    };
  }, [n, a, I.floating, u.x, u.y]);
  return l.useMemo(() => ({
    ...u,
    update: j,
    refs: K,
    elements: I,
    floatingStyles: $
  }), [u, j, K, I, $]);
}
const bd = (e) => {
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
      return r && t(r) ? r.current != null ? vr({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? vr({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, vd = (e, t) => {
  const n = ad(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, yd = (e, t) => {
  const n = ld(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, xd = (e, t) => ({
  fn: fd(e).fn,
  options: [e, t]
}), wd = (e, t) => {
  const n = cd(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Cd = (e, t) => {
  const n = dd(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Sd = (e, t) => {
  const n = ud(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Nd = (e, t) => {
  const n = bd(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Ed = "Arrow", _o = l.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...s } = e;
  return /* @__PURE__ */ f(
    Y.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ f("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
_o.displayName = Ed;
var Rd = _o;
function Ad(e) {
  const [t, n] = l.useState(void 0);
  return re(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, d = Array.isArray(c) ? c[0] : c;
          i = d.inlineSize, a = d.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        n({ width: i, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var _n = "Popper", [Do, Lo] = qe(_n), [Td, Fo] = Do(_n), $o = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = l.useState(null);
  return /* @__PURE__ */ f(Td, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
$o.displayName = _n;
var zo = "PopperAnchor", Wo = l.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, s = Fo(zo, n), i = l.useRef(null), a = ee(t, i), c = l.useRef(null);
    return l.useEffect(() => {
      const d = c.current;
      c.current = (r == null ? void 0 : r.current) || i.current, d !== c.current && s.onAnchorChange(c.current);
    }), r ? null : /* @__PURE__ */ f(Y.div, { ...o, ref: a });
  }
);
Wo.displayName = zo;
var Dn = "PopperContent", [kd, Pd] = Do(Dn), Vo = l.forwardRef(
  (e, t) => {
    var O, Z, B, q, U, G;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: s = "center",
      alignOffset: i = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: d = [],
      collisionPadding: u = 0,
      sticky: m = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: b = "optimized",
      onPlaced: w,
      ...p
    } = e, g = Fo(Dn, n), [v, y] = l.useState(null), x = ee(t, (ne) => y(ne)), [C, E] = l.useState(null), R = Ad(C), N = (R == null ? void 0 : R.width) ?? 0, S = (R == null ? void 0 : R.height) ?? 0, _ = r + (s !== "center" ? "-" + s : ""), F = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, z = Array.isArray(d) ? d : [d], V = z.length > 0, j = {
      padding: F,
      boundary: z.filter(Od),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: W, floatingStyles: K, placement: I, isPositioned: $, middlewareData: M } = gd({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: _,
      whileElementsMounted: (...ne) => id(...ne, {
        animationFrame: b === "always"
      }),
      elements: {
        reference: g.anchor
      },
      middleware: [
        vd({ mainAxis: o + S, alignmentAxis: i }),
        c && yd({
          mainAxis: !0,
          crossAxis: !1,
          limiter: m === "partial" ? xd() : void 0,
          ...j
        }),
        c && wd({ ...j }),
        Cd({
          ...j,
          apply: ({ elements: ne, rects: oe, availableWidth: et, availableHeight: tt }) => {
            const { width: nt, height: Zs } = oe.reference, ft = ne.floating.style;
            ft.setProperty("--radix-popper-available-width", `${et}px`), ft.setProperty("--radix-popper-available-height", `${tt}px`), ft.setProperty("--radix-popper-anchor-width", `${nt}px`), ft.setProperty("--radix-popper-anchor-height", `${Zs}px`);
          }
        }),
        C && Nd({ element: C, padding: a }),
        Md({ arrowWidth: N, arrowHeight: S }),
        h && Sd({ strategy: "referenceHidden", ...j })
      ]
    }), [X, A] = jo(I), ae = Te(w);
    re(() => {
      $ && (ae == null || ae());
    }, [$, ae]);
    const Ce = (O = M.arrow) == null ? void 0 : O.x, Se = (Z = M.arrow) == null ? void 0 : Z.y, le = ((B = M.arrow) == null ? void 0 : B.centerOffset) !== 0, [J, Q] = l.useState();
    return re(() => {
      v && Q(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ f(
      "div",
      {
        ref: W.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...K,
          transform: $ ? K.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: J,
          "--radix-popper-transform-origin": [
            (q = M.transformOrigin) == null ? void 0 : q.x,
            (U = M.transformOrigin) == null ? void 0 : U.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((G = M.hide) == null ? void 0 : G.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ f(
          kd,
          {
            scope: n,
            placedSide: X,
            onArrowChange: E,
            arrowX: Ce,
            arrowY: Se,
            shouldHideArrow: le,
            children: /* @__PURE__ */ f(
              Y.div,
              {
                "data-side": X,
                "data-align": A,
                ...p,
                ref: x,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: $ ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Vo.displayName = Dn;
var Bo = "PopperArrow", Id = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Ho = l.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, s = Pd(Bo, r), i = Id[s.placedSide];
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
          [i]: 0,
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
          Rd,
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
Ho.displayName = Bo;
function Od(e) {
  return e !== null;
}
var Md = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var g, v, y;
    const { placement: n, rects: r, middlewareData: o } = t, i = ((g = o.arrow) == null ? void 0 : g.centerOffset) !== 0, a = i ? 0 : e.arrowWidth, c = i ? 0 : e.arrowHeight, [d, u] = jo(n), m = { start: "0%", center: "50%", end: "100%" }[u], h = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + a / 2, b = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + c / 2;
    let w = "", p = "";
    return d === "bottom" ? (w = i ? m : `${h}px`, p = `${-c}px`) : d === "top" ? (w = i ? m : `${h}px`, p = `${r.floating.height + c}px`) : d === "right" ? (w = `${-c}px`, p = i ? m : `${b}px`) : d === "left" && (w = `${r.floating.width + c}px`, p = i ? m : `${b}px`), { data: { x: w, y: p } };
  }
});
function jo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var _d = $o, Dd = Wo, Ld = Vo, Fd = Ho;
// @__NO_SIDE_EFFECTS__
function $d(e) {
  const t = /* @__PURE__ */ zd(e), n = l.forwardRef((r, o) => {
    const { children: s, ...i } = r, a = l.Children.toArray(s), c = a.find(Vd);
    if (c) {
      const d = c.props.children, u = a.map((m) => m === c ? l.Children.count(d) > 1 ? l.Children.only(null) : l.isValidElement(d) ? d.props.children : null : m);
      return /* @__PURE__ */ f(t, { ...i, ref: o, children: l.isValidElement(d) ? l.cloneElement(d, void 0, u) : null });
    }
    return /* @__PURE__ */ f(t, { ...i, ref: o, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function zd(e) {
  const t = l.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (l.isValidElement(o)) {
      const i = Hd(o), a = Bd(s, o.props);
      return o.type !== l.Fragment && (a.ref = r ? Xe(r, i) : i), l.cloneElement(o, a);
    }
    return l.Children.count(o) > 1 ? l.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Wd = Symbol("radix.slottable");
function Vd(e) {
  return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Wd;
}
function Bd(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? o && s ? n[r] = (...a) => {
      const c = s(...a);
      return o(...a), c;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...s } : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Hd(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function jd(e) {
  const t = l.useRef({ value: e, previous: e });
  return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Uo = Object.freeze({
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
}), Ud = "VisuallyHidden", Gd = l.forwardRef(
  (e, t) => /* @__PURE__ */ f(
    Y.span,
    {
      ...e,
      ref: t,
      style: { ...Uo, ...e.style }
    }
  )
);
Gd.displayName = Ud;
var Kd = [" ", "Enter", "ArrowUp", "ArrowDown"], Yd = [" ", "Enter"], We = "Select", [zt, Wt, Xd] = Co(We), [Je] = qe(We, [
  Xd,
  Lo
]), Vt = Lo(), [qd, Oe] = Je(We), [Zd, Qd] = Je(We), Go = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: a,
    onValueChange: c,
    dir: d,
    name: u,
    autoComplete: m,
    disabled: h,
    required: b,
    form: w
  } = e, p = Vt(t), [g, v] = l.useState(null), [y, x] = l.useState(null), [C, E] = l.useState(!1), R = An(d), [N, S] = it({
    prop: r,
    defaultProp: o ?? !1,
    onChange: s,
    caller: We
  }), [_, F] = it({
    prop: i,
    defaultProp: a,
    onChange: c,
    caller: We
  }), z = l.useRef(null), V = g ? w || !!g.closest("form") : !0, [j, W] = l.useState(/* @__PURE__ */ new Set()), K = Array.from(j).map((I) => I.props.value).join(";");
  return /* @__PURE__ */ f(_d, { ...p, children: /* @__PURE__ */ D(
    qd,
    {
      required: b,
      scope: t,
      trigger: g,
      onTriggerChange: v,
      valueNode: y,
      onValueNodeChange: x,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: E,
      contentId: Ae(),
      value: _,
      onValueChange: F,
      open: N,
      onOpenChange: S,
      dir: R,
      triggerPointerDownPosRef: z,
      disabled: h,
      children: [
        /* @__PURE__ */ f(zt.Provider, { scope: t, children: /* @__PURE__ */ f(
          Zd,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: l.useCallback((I) => {
              W(($) => new Set($).add(I));
            }, []),
            onNativeOptionRemove: l.useCallback((I) => {
              W(($) => {
                const M = new Set($);
                return M.delete(I), M;
              });
            }, []),
            children: n
          }
        ) }),
        V ? /* @__PURE__ */ D(
          bs,
          {
            "aria-hidden": !0,
            required: b,
            tabIndex: -1,
            name: u,
            autoComplete: m,
            value: _,
            onChange: (I) => F(I.target.value),
            disabled: h,
            form: w,
            children: [
              _ === void 0 ? /* @__PURE__ */ f("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          K
        ) : null
      ]
    }
  ) });
};
Go.displayName = We;
var Ko = "SelectTrigger", Yo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = Vt(n), i = Oe(Ko, n), a = i.disabled || r, c = ee(t, i.onTriggerChange), d = Wt(n), u = l.useRef("touch"), [m, h, b] = ys((p) => {
      const g = d().filter((x) => !x.disabled), v = g.find((x) => x.value === i.value), y = xs(g, p, v);
      y !== void 0 && i.onValueChange(y.value);
    }), w = (p) => {
      a || (i.onOpenChange(!0), b()), p && (i.triggerPointerDownPosRef.current = {
        x: Math.round(p.pageX),
        y: Math.round(p.pageY)
      });
    };
    return /* @__PURE__ */ f(Dd, { asChild: !0, ...s, children: /* @__PURE__ */ f(
      Y.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: a,
        "data-disabled": a ? "" : void 0,
        "data-placeholder": vs(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: H(o.onClick, (p) => {
          p.currentTarget.focus(), u.current !== "mouse" && w(p);
        }),
        onPointerDown: H(o.onPointerDown, (p) => {
          u.current = p.pointerType;
          const g = p.target;
          g.hasPointerCapture(p.pointerId) && g.releasePointerCapture(p.pointerId), p.button === 0 && p.ctrlKey === !1 && p.pointerType === "mouse" && (w(p), p.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (p) => {
          const g = m.current !== "";
          !(p.ctrlKey || p.altKey || p.metaKey) && p.key.length === 1 && h(p.key), !(g && p.key === " ") && Kd.includes(p.key) && (w(), p.preventDefault());
        })
      }
    ) });
  }
);
Yo.displayName = Ko;
var Xo = "SelectValue", qo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...a } = e, c = Oe(Xo, n), { onValueNodeHasChildrenChange: d } = c, u = s !== void 0, m = ee(t, c.onValueNodeChange);
    return re(() => {
      d(u);
    }, [d, u]), /* @__PURE__ */ f(
      Y.span,
      {
        ...a,
        ref: m,
        style: { pointerEvents: "none" },
        children: vs(c.value) ? /* @__PURE__ */ f(Fe, { children: i }) : s
      }
    );
  }
);
qo.displayName = Xo;
var Jd = "SelectIcon", Zo = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ f(Y.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Zo.displayName = Jd;
var eu = "SelectPortal", Qo = (e) => /* @__PURE__ */ f(Cn, { asChild: !0, ...e });
Qo.displayName = eu;
var Ve = "SelectContent", Jo = l.forwardRef(
  (e, t) => {
    const n = Oe(Ve, e.__scopeSelect), [r, o] = l.useState();
    if (re(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? Ot.createPortal(
        /* @__PURE__ */ f(es, { scope: e.__scopeSelect, children: /* @__PURE__ */ f(zt.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ f("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ f(ts, { ...e, ref: t });
  }
);
Jo.displayName = Ve;
var ce = 10, [es, Me] = Je(Ve), tu = "SelectContentImpl", nu = /* @__PURE__ */ $d("SelectContent.RemoveScroll"), ts = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: a,
      sideOffset: c,
      align: d,
      alignOffset: u,
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: b,
      sticky: w,
      hideWhenDetached: p,
      avoidCollisions: g,
      //
      ...v
    } = e, y = Oe(Ve, n), [x, C] = l.useState(null), [E, R] = l.useState(null), N = ee(t, (O) => C(O)), [S, _] = l.useState(null), [F, z] = l.useState(
      null
    ), V = Wt(n), [j, W] = l.useState(!1), K = l.useRef(!1);
    l.useEffect(() => {
      if (x) return Qr(x);
    }, [x]), Hr();
    const I = l.useCallback(
      (O) => {
        const [Z, ...B] = V().map((G) => G.ref.current), [q] = B.slice(-1), U = document.activeElement;
        for (const G of O)
          if (G === U || (G == null || G.scrollIntoView({ block: "nearest" }), G === Z && E && (E.scrollTop = 0), G === q && E && (E.scrollTop = E.scrollHeight), G == null || G.focus(), document.activeElement !== U)) return;
      },
      [V, E]
    ), $ = l.useCallback(
      () => I([S, x]),
      [I, S, x]
    );
    l.useEffect(() => {
      j && $();
    }, [j, $]);
    const { onOpenChange: M, triggerPointerDownPosRef: X } = y;
    l.useEffect(() => {
      if (x) {
        let O = { x: 0, y: 0 };
        const Z = (q) => {
          var U, G;
          O = {
            x: Math.abs(Math.round(q.pageX) - (((U = X.current) == null ? void 0 : U.x) ?? 0)),
            y: Math.abs(Math.round(q.pageY) - (((G = X.current) == null ? void 0 : G.y) ?? 0))
          };
        }, B = (q) => {
          O.x <= 10 && O.y <= 10 ? q.preventDefault() : x.contains(q.target) || M(!1), document.removeEventListener("pointermove", Z), X.current = null;
        };
        return X.current !== null && (document.addEventListener("pointermove", Z), document.addEventListener("pointerup", B, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Z), document.removeEventListener("pointerup", B, { capture: !0 });
        };
      }
    }, [x, M, X]), l.useEffect(() => {
      const O = () => M(!1);
      return window.addEventListener("blur", O), window.addEventListener("resize", O), () => {
        window.removeEventListener("blur", O), window.removeEventListener("resize", O);
      };
    }, [M]);
    const [A, ae] = ys((O) => {
      const Z = V().filter((U) => !U.disabled), B = Z.find((U) => U.ref.current === document.activeElement), q = xs(Z, O, B);
      q && setTimeout(() => q.ref.current.focus());
    }), Ce = l.useCallback(
      (O, Z, B) => {
        const q = !K.current && !B;
        (y.value !== void 0 && y.value === Z || q) && (_(O), q && (K.current = !0));
      },
      [y.value]
    ), Se = l.useCallback(() => x == null ? void 0 : x.focus(), [x]), le = l.useCallback(
      (O, Z, B) => {
        const q = !K.current && !B;
        (y.value !== void 0 && y.value === Z || q) && z(O);
      },
      [y.value]
    ), J = r === "popper" ? cn : ns, Q = J === cn ? {
      side: a,
      sideOffset: c,
      align: d,
      alignOffset: u,
      arrowPadding: m,
      collisionBoundary: h,
      collisionPadding: b,
      sticky: w,
      hideWhenDetached: p,
      avoidCollisions: g
    } : {};
    return /* @__PURE__ */ f(
      es,
      {
        scope: n,
        content: x,
        viewport: E,
        onViewportChange: R,
        itemRefCallback: Ce,
        selectedItem: S,
        onItemLeave: Se,
        itemTextRefCallback: le,
        focusSelectedItem: $,
        selectedItemText: F,
        position: r,
        isPositioned: j,
        searchRef: A,
        children: /* @__PURE__ */ f(Sn, { as: nu, allowPinchZoom: !0, children: /* @__PURE__ */ f(
          wn,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (O) => {
              O.preventDefault();
            },
            onUnmountAutoFocus: H(o, (O) => {
              var Z;
              (Z = y.trigger) == null || Z.focus({ preventScroll: !0 }), O.preventDefault();
            }),
            children: /* @__PURE__ */ f(
              xn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (O) => O.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ f(
                  J,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (O) => O.preventDefault(),
                    ...v,
                    ...Q,
                    onPlaced: () => W(!0),
                    ref: N,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...v.style
                    },
                    onKeyDown: H(v.onKeyDown, (O) => {
                      const Z = O.ctrlKey || O.altKey || O.metaKey;
                      if (O.key === "Tab" && O.preventDefault(), !Z && O.key.length === 1 && ae(O.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(O.key)) {
                        let q = V().filter((U) => !U.disabled).map((U) => U.ref.current);
                        if (["ArrowUp", "End"].includes(O.key) && (q = q.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(O.key)) {
                          const U = O.target, G = q.indexOf(U);
                          q = q.slice(G + 1);
                        }
                        setTimeout(() => I(q)), O.preventDefault();
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
ts.displayName = tu;
var ru = "SelectItemAlignedPosition", ns = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = Oe(Ve, n), i = Me(Ve, n), [a, c] = l.useState(null), [d, u] = l.useState(null), m = ee(t, (N) => u(N)), h = Wt(n), b = l.useRef(!1), w = l.useRef(!0), { viewport: p, selectedItem: g, selectedItemText: v, focusSelectedItem: y } = i, x = l.useCallback(() => {
    if (s.trigger && s.valueNode && a && d && p && g && v) {
      const N = s.trigger.getBoundingClientRect(), S = d.getBoundingClientRect(), _ = s.valueNode.getBoundingClientRect(), F = v.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const U = F.left - S.left, G = _.left - U, ne = N.left - G, oe = N.width + ne, et = Math.max(oe, S.width), tt = window.innerWidth - ce, nt = ar(G, [
          ce,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(ce, tt - et)
        ]);
        a.style.minWidth = oe + "px", a.style.left = nt + "px";
      } else {
        const U = S.right - F.right, G = window.innerWidth - _.right - U, ne = window.innerWidth - N.right - G, oe = N.width + ne, et = Math.max(oe, S.width), tt = window.innerWidth - ce, nt = ar(G, [
          ce,
          Math.max(ce, tt - et)
        ]);
        a.style.minWidth = oe + "px", a.style.right = nt + "px";
      }
      const z = h(), V = window.innerHeight - ce * 2, j = p.scrollHeight, W = window.getComputedStyle(d), K = parseInt(W.borderTopWidth, 10), I = parseInt(W.paddingTop, 10), $ = parseInt(W.borderBottomWidth, 10), M = parseInt(W.paddingBottom, 10), X = K + I + j + M + $, A = Math.min(g.offsetHeight * 5, X), ae = window.getComputedStyle(p), Ce = parseInt(ae.paddingTop, 10), Se = parseInt(ae.paddingBottom, 10), le = N.top + N.height / 2 - ce, J = V - le, Q = g.offsetHeight / 2, O = g.offsetTop + Q, Z = K + I + O, B = X - Z;
      if (Z <= le) {
        const U = z.length > 0 && g === z[z.length - 1].ref.current;
        a.style.bottom = "0px";
        const G = d.clientHeight - p.offsetTop - p.offsetHeight, ne = Math.max(
          J,
          Q + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (U ? Se : 0) + G + $
        ), oe = Z + ne;
        a.style.height = oe + "px";
      } else {
        const U = z.length > 0 && g === z[0].ref.current;
        a.style.top = "0px";
        const ne = Math.max(
          le,
          K + p.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (U ? Ce : 0) + Q
        ) + B;
        a.style.height = ne + "px", p.scrollTop = Z - le + p.offsetTop;
      }
      a.style.margin = `${ce}px 0`, a.style.minHeight = A + "px", a.style.maxHeight = V + "px", r == null || r(), requestAnimationFrame(() => b.current = !0);
    }
  }, [
    h,
    s.trigger,
    s.valueNode,
    a,
    d,
    p,
    g,
    v,
    s.dir,
    r
  ]);
  re(() => x(), [x]);
  const [C, E] = l.useState();
  re(() => {
    d && E(window.getComputedStyle(d).zIndex);
  }, [d]);
  const R = l.useCallback(
    (N) => {
      N && w.current === !0 && (x(), y == null || y(), w.current = !1);
    },
    [x, y]
  );
  return /* @__PURE__ */ f(
    su,
    {
      scope: n,
      contentWrapper: a,
      shouldExpandOnScrollRef: b,
      onScrollButtonChange: R,
      children: /* @__PURE__ */ f(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: C
          },
          children: /* @__PURE__ */ f(
            Y.div,
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
ns.displayName = ru;
var ou = "SelectPopperPosition", cn = l.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = ce,
    ...s
  } = e, i = Vt(n);
  return /* @__PURE__ */ f(
    Ld,
    {
      ...i,
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
cn.displayName = ou;
var [su, Ln] = Je(Ve, {}), dn = "SelectViewport", rs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Me(dn, n), i = Ln(dn, n), a = ee(t, s.onViewportChange), c = l.useRef(0);
    return /* @__PURE__ */ D(Fe, { children: [
      /* @__PURE__ */ f(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ f(zt.Slot, { scope: n, children: /* @__PURE__ */ f(
        Y.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: a,
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
          onScroll: H(o.onScroll, (d) => {
            const u = d.currentTarget, { contentWrapper: m, shouldExpandOnScrollRef: h } = i;
            if (h != null && h.current && m) {
              const b = Math.abs(c.current - u.scrollTop);
              if (b > 0) {
                const w = window.innerHeight - ce * 2, p = parseFloat(m.style.minHeight), g = parseFloat(m.style.height), v = Math.max(p, g);
                if (v < w) {
                  const y = v + b, x = Math.min(w, y), C = y - x;
                  m.style.height = x + "px", m.style.bottom === "0px" && (u.scrollTop = C > 0 ? C : 0, m.style.justifyContent = "flex-end");
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
rs.displayName = dn;
var os = "SelectGroup", [iu, au] = Je(os), ss = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ae();
    return /* @__PURE__ */ f(iu, { scope: n, id: o, children: /* @__PURE__ */ f(Y.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
ss.displayName = os;
var is = "SelectLabel", as = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = au(is, n);
    return /* @__PURE__ */ f(Y.div, { id: o.id, ...r, ref: t });
  }
);
as.displayName = is;
var It = "SelectItem", [lu, ls] = Je(It), cs = l.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, a = Oe(It, n), c = Me(It, n), d = a.value === r, [u, m] = l.useState(s ?? ""), [h, b] = l.useState(!1), w = ee(
      t,
      (y) => {
        var x;
        return (x = c.itemRefCallback) == null ? void 0 : x.call(c, y, r, o);
      }
    ), p = Ae(), g = l.useRef("touch"), v = () => {
      o || (a.onValueChange(r), a.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f(
      lu,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: p,
        isSelected: d,
        onItemTextChange: l.useCallback((y) => {
          m((x) => x || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ f(
          zt.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: u,
            children: /* @__PURE__ */ f(
              Y.div,
              {
                role: "option",
                "aria-labelledby": p,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": d && h,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: w,
                onFocus: H(i.onFocus, () => b(!0)),
                onBlur: H(i.onBlur, () => b(!1)),
                onClick: H(i.onClick, () => {
                  g.current !== "mouse" && v();
                }),
                onPointerUp: H(i.onPointerUp, () => {
                  g.current === "mouse" && v();
                }),
                onPointerDown: H(i.onPointerDown, (y) => {
                  g.current = y.pointerType;
                }),
                onPointerMove: H(i.onPointerMove, (y) => {
                  var x;
                  g.current = y.pointerType, o ? (x = c.onItemLeave) == null || x.call(c) : g.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(i.onPointerLeave, (y) => {
                  var x;
                  y.currentTarget === document.activeElement && ((x = c.onItemLeave) == null || x.call(c));
                }),
                onKeyDown: H(i.onKeyDown, (y) => {
                  var C;
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && y.key === " " || (Yd.includes(y.key) && v(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
cs.displayName = It;
var ot = "SelectItemText", ds = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = Oe(ot, n), a = Me(ot, n), c = ls(ot, n), d = Qd(ot, n), [u, m] = l.useState(null), h = ee(
      t,
      (v) => m(v),
      c.onItemTextChange,
      (v) => {
        var y;
        return (y = a.itemTextRefCallback) == null ? void 0 : y.call(a, v, c.value, c.disabled);
      }
    ), b = u == null ? void 0 : u.textContent, w = l.useMemo(
      () => /* @__PURE__ */ f("option", { value: c.value, disabled: c.disabled, children: b }, c.value),
      [c.disabled, c.value, b]
    ), { onNativeOptionAdd: p, onNativeOptionRemove: g } = d;
    return re(() => (p(w), () => g(w)), [p, g, w]), /* @__PURE__ */ D(Fe, { children: [
      /* @__PURE__ */ f(Y.span, { id: c.textId, ...s, ref: h }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? Ot.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
ds.displayName = ot;
var us = "SelectItemIndicator", fs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ls(us, n).isSelected ? /* @__PURE__ */ f(Y.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
fs.displayName = us;
var un = "SelectScrollUpButton", ms = l.forwardRef((e, t) => {
  const n = Me(un, e.__scopeSelect), r = Ln(un, e.__scopeSelect), [o, s] = l.useState(!1), i = ee(t, r.onScrollButtonChange);
  return re(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const d = c.scrollTop > 0;
        s(d);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    hs,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
ms.displayName = un;
var fn = "SelectScrollDownButton", ps = l.forwardRef((e, t) => {
  const n = Me(fn, e.__scopeSelect), r = Ln(fn, e.__scopeSelect), [o, s] = l.useState(!1), i = ee(t, r.onScrollButtonChange);
  return re(() => {
    if (n.viewport && n.isPositioned) {
      let a = function() {
        const d = c.scrollHeight - c.clientHeight, u = Math.ceil(c.scrollTop) < d;
        s(u);
      };
      const c = n.viewport;
      return a(), c.addEventListener("scroll", a), () => c.removeEventListener("scroll", a);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ f(
    hs,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: a, selectedItem: c } = n;
        a && c && (a.scrollTop = a.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
ps.displayName = fn;
var hs = l.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Me("SelectScrollButton", n), i = l.useRef(null), a = Wt(n), c = l.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return l.useEffect(() => () => c(), [c]), re(() => {
    var u;
    const d = a().find((m) => m.ref.current === document.activeElement);
    (u = d == null ? void 0 : d.ref.current) == null || u.scrollIntoView({ block: "nearest" });
  }, [a]), /* @__PURE__ */ f(
    Y.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: H(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: H(o.onPointerMove, () => {
        var d;
        (d = s.onItemLeave) == null || d.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: H(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), cu = "SelectSeparator", gs = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ f(Y.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
gs.displayName = cu;
var mn = "SelectArrow", du = l.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Vt(n), s = Oe(mn, n), i = Me(mn, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ f(Fd, { ...o, ...r, ref: t }) : null;
  }
);
du.displayName = mn;
var uu = "SelectBubbleInput", bs = l.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = l.useRef(null), s = ee(r, o), i = jd(t);
    return l.useEffect(() => {
      const a = o.current;
      if (!a) return;
      const c = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== t && u) {
        const m = new Event("change", { bubbles: !0 });
        u.call(a, t), a.dispatchEvent(m);
      }
    }, [i, t]), /* @__PURE__ */ f(
      Y.select,
      {
        ...n,
        style: { ...Uo, ...n.style },
        ref: s,
        defaultValue: t
      }
    );
  }
);
bs.displayName = uu;
function vs(e) {
  return e === "" || e === void 0;
}
function ys(e) {
  const t = Te(e), n = l.useRef(""), r = l.useRef(0), o = l.useCallback(
    (i) => {
      const a = n.current + i;
      t(a), function c(d) {
        n.current = d, window.clearTimeout(r.current), d !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(a);
    },
    [t]
  ), s = l.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function xs(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = fu(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((d) => d !== n));
  const c = i.find(
    (d) => d.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function fu(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var mu = Go, ws = Yo, pu = qo, hu = Zo, gu = Qo, Cs = Jo, bu = rs, vu = ss, Ss = as, Ns = cs, yu = ds, xu = fs, Es = ms, Rs = ps, As = gs;
const xf = mu, wf = vu, Cf = pu, wu = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ D(
  ws,
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
      /* @__PURE__ */ f(hu, { asChild: !0, children: /* @__PURE__ */ f(Cr, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
wu.displayName = ws.displayName;
const Ts = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Es,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(li, { className: "h-4 w-4" })
  }
));
Ts.displayName = Es.displayName;
const ks = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Rs,
  {
    ref: n,
    className: P("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: /* @__PURE__ */ f(Cr, { className: "h-4 w-4" })
  }
));
ks.displayName = Rs.displayName;
const Cu = l.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ f(gu, { children: /* @__PURE__ */ D(
  Cs,
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
      /* @__PURE__ */ f(Ts, {}),
      /* @__PURE__ */ f(
        bu,
        {
          className: P(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ f(ks, {})
    ]
  }
) }));
Cu.displayName = Cs.displayName;
const Su = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Ss,
  {
    ref: n,
    className: P("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", e),
    ...t
  }
));
Su.displayName = Ss.displayName;
const Nu = l.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ D(
  Ns,
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
      /* @__PURE__ */ f("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ f(xu, { children: /* @__PURE__ */ f(bn, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ f(yu, { children: t })
    ]
  }
));
Nu.displayName = Ns.displayName;
const Eu = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  As,
  {
    ref: n,
    className: P("-mx-1 my-1 h-px bg-border", e),
    ...t
  }
));
Eu.displayName = As.displayName;
function Ps({ className: e, ...t }) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: P("animate-pulse rounded-md bg-subtle", e),
      ...t
    }
  );
}
function Ru({ lines: e = 3, className: t }) {
  return /* @__PURE__ */ f("div", { className: P("space-y-2", t), children: Array.from({ length: e }).map((n, r) => /* @__PURE__ */ f(
    Ps,
    {
      className: P("h-4", r === e - 1 ? "w-2/3" : "w-full")
    },
    r
  )) });
}
function Sf({ className: e }) {
  return /* @__PURE__ */ D("div", { className: P("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ f(Ps, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ f(Ru, { lines: 3 })
  ] });
}
const Au = lt(
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
function Tu({ className: e, size: t, label: n = "Caricamento...", ...r }) {
  return /* @__PURE__ */ D(
    "div",
    {
      role: "status",
      "aria-label": n,
      className: P("inline-flex items-center justify-center", e),
      ...r,
      children: [
        /* @__PURE__ */ f("div", { className: Au({ size: t }) }),
        /* @__PURE__ */ f("span", { className: "sr-only", children: n })
      ]
    }
  );
}
function Nf({ label: e }) {
  return /* @__PURE__ */ D("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ f(Tu, { size: "lg", label: e }),
    e && /* @__PURE__ */ f("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
function Ef({
  icon: e,
  iconColor: t = "#f59e0b",
  label: n,
  value: r,
  trend: o,
  className: s,
  ...i
}) {
  return /* @__PURE__ */ D(
    "div",
    {
      className: P(
        "bg-surface rounded-xl shadow-sm border border-border p-4 text-center hover:shadow-md transition-shadow",
        s
      ),
      ...i,
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
const ku = lt(
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
), Pu = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-text-muted"
};
function Rf({
  variant: e = "neutral",
  label: t,
  dot: n = !0,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ D(
    "span",
    {
      className: P(ku({ variant: e }), r),
      ...o,
      children: [
        n && /* @__PURE__ */ f(
          "span",
          {
            className: P(
              "h-1.5 w-1.5 rounded-full shrink-0",
              Pu[e ?? "neutral"]
            )
          }
        ),
        t
      ]
    }
  );
}
const Iu = {
  operational: { dot: "bg-green-500", text: "text-green-500 dark:text-green-400", label: "Operational" },
  degraded: { dot: "bg-yellow-500", text: "text-yellow-500 dark:text-yellow-400", label: "Degraded" },
  outage: { dot: "bg-red-500", text: "text-red-500 dark:text-red-400", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function Af({
  label: e,
  status: t,
  statusLabel: n,
  className: r,
  ...o
}) {
  const s = Iu[t];
  return /* @__PURE__ */ D("div", { className: P("flex items-center justify-between", r), ...o, children: [
    /* @__PURE__ */ D("div", { className: "flex items-center", children: [
      /* @__PURE__ */ f("div", { className: P("h-2 w-2 rounded-full mr-3", s.dot) }),
      /* @__PURE__ */ f("span", { className: "text-sm font-medium", children: e })
    ] }),
    /* @__PURE__ */ f("span", { className: P("text-sm", s.text), children: n ?? s.label })
  ] });
}
function Tf({ tabs: e, activeTab: t, onChange: n, className: r }) {
  return /* @__PURE__ */ f("div", { className: P("border-b border-border", r), children: /* @__PURE__ */ f("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: e.map((o) => {
    const s = t === o.id, i = o.icon;
    return /* @__PURE__ */ D(
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
          i && /* @__PURE__ */ f(i, { className: "h-4 w-4" }),
          o.label
        ]
      },
      o.id
    );
  }) }) });
}
const Ou = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ f(
  "table",
  {
    ref: n,
    className: P("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ou.displayName = "Table";
const Mu = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f("thead", { ref: n, className: P("bg-subtle border-b border-border", e), ...t }));
Mu.displayName = "TableHeader";
const _u = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tbody",
  {
    ref: n,
    className: P("divide-y divide-border", e),
    ...t
  }
));
_u.displayName = "TableBody";
const Du = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "tfoot",
  {
    ref: n,
    className: P("bg-subtle border-t border-border font-medium", e),
    ...t
  }
));
Du.displayName = "TableFooter";
const Lu = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
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
Lu.displayName = "TableRow";
const Fu = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
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
Fu.displayName = "TableHead";
const $u = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "td",
  {
    ref: n,
    className: P("px-4 py-3 align-middle text-text-base", e),
    ...t
  }
));
$u.displayName = "TableCell";
const zu = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  "caption",
  {
    ref: n,
    className: P("mt-4 text-sm text-text-muted", e),
    ...t
  }
));
zu.displayName = "TableCaption";
var en = "rovingFocusGroup.onEntryFocus", Wu = { bubbles: !1, cancelable: !0 }, ut = "RovingFocusGroup", [pn, Is, Vu] = Co(ut), [Bu, Os] = qe(
  ut,
  [Vu]
), [Hu, ju] = Bu(ut), Ms = l.forwardRef(
  (e, t) => /* @__PURE__ */ f(pn.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(pn.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Uu, { ...e, ref: t }) }) })
);
Ms.displayName = ut;
var Uu = l.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: c,
    onEntryFocus: d,
    preventScrollOnEntryFocus: u = !1,
    ...m
  } = e, h = l.useRef(null), b = ee(t, h), w = An(s), [p, g] = it({
    prop: i,
    defaultProp: a ?? null,
    onChange: c,
    caller: ut
  }), [v, y] = l.useState(!1), x = Te(d), C = Is(n), E = l.useRef(!1), [R, N] = l.useState(0);
  return l.useEffect(() => {
    const S = h.current;
    if (S)
      return S.addEventListener(en, x), () => S.removeEventListener(en, x);
  }, [x]), /* @__PURE__ */ f(
    Hu,
    {
      scope: n,
      orientation: r,
      dir: w,
      loop: o,
      currentTabStopId: p,
      onItemFocus: l.useCallback(
        (S) => g(S),
        [g]
      ),
      onItemShiftTab: l.useCallback(() => y(!0), []),
      onFocusableItemAdd: l.useCallback(
        () => N((S) => S + 1),
        []
      ),
      onFocusableItemRemove: l.useCallback(
        () => N((S) => S - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        Y.div,
        {
          tabIndex: v || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: b,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: H(e.onFocus, (S) => {
            const _ = !E.current;
            if (S.target === S.currentTarget && _ && !v) {
              const F = new CustomEvent(en, Wu);
              if (S.currentTarget.dispatchEvent(F), !F.defaultPrevented) {
                const z = C().filter((I) => I.focusable), V = z.find((I) => I.active), j = z.find((I) => I.id === p), K = [V, j, ...z].filter(
                  Boolean
                ).map((I) => I.ref.current);
                Ls(K, u);
              }
            }
            E.current = !1;
          }),
          onBlur: H(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), _s = "RovingFocusGroupItem", Ds = l.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      children: i,
      ...a
    } = e, c = Ae(), d = s || c, u = ju(_s, n), m = u.currentTabStopId === d, h = Is(n), { onFocusableItemAdd: b, onFocusableItemRemove: w, currentTabStopId: p } = u;
    return l.useEffect(() => {
      if (r)
        return b(), () => w();
    }, [r, b, w]), /* @__PURE__ */ f(
      pn.ItemSlot,
      {
        scope: n,
        id: d,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ f(
          Y.span,
          {
            tabIndex: m ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: H(e.onMouseDown, (g) => {
              r ? u.onItemFocus(d) : g.preventDefault();
            }),
            onFocus: H(e.onFocus, () => u.onItemFocus(d)),
            onKeyDown: H(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const v = Yu(g, u.orientation, u.dir);
              if (v !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let x = h().filter((C) => C.focusable).map((C) => C.ref.current);
                if (v === "last") x.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && x.reverse();
                  const C = x.indexOf(g.currentTarget);
                  x = u.loop ? Xu(x, C + 1) : x.slice(C + 1);
                }
                setTimeout(() => Ls(x));
              }
            }),
            children: typeof i == "function" ? i({ isCurrentTabStop: m, hasTabStop: p != null }) : i
          }
        )
      }
    );
  }
);
Ds.displayName = _s;
var Gu = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Ku(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Yu(e, t, n) {
  const r = Ku(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Gu[r];
}
function Ls(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Xu(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var qu = Ms, Zu = Ds, Bt = "Tabs", [Qu] = qe(Bt, [
  Os
]), Fs = Os(), [Ju, Fn] = Qu(Bt), $s = l.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: i = "horizontal",
      dir: a,
      activationMode: c = "automatic",
      ...d
    } = e, u = An(a), [m, h] = it({
      prop: r,
      onChange: o,
      defaultProp: s ?? "",
      caller: Bt
    });
    return /* @__PURE__ */ f(
      Ju,
      {
        scope: n,
        baseId: Ae(),
        value: m,
        onValueChange: h,
        orientation: i,
        dir: u,
        activationMode: c,
        children: /* @__PURE__ */ f(
          Y.div,
          {
            dir: u,
            "data-orientation": i,
            ...d,
            ref: t
          }
        )
      }
    );
  }
);
$s.displayName = Bt;
var zs = "TabsList", Ws = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, s = Fn(zs, n), i = Fs(n);
    return /* @__PURE__ */ f(
      qu,
      {
        asChild: !0,
        ...i,
        orientation: s.orientation,
        dir: s.dir,
        loop: r,
        children: /* @__PURE__ */ f(
          Y.div,
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
Ws.displayName = zs;
var Vs = "TabsTrigger", Bs = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...s } = e, i = Fn(Vs, n), a = Fs(n), c = Us(i.baseId, r), d = Gs(i.baseId, r), u = r === i.value;
    return /* @__PURE__ */ f(
      Zu,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: u,
        children: /* @__PURE__ */ f(
          Y.button,
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
            onMouseDown: H(e.onMouseDown, (m) => {
              !o && m.button === 0 && m.ctrlKey === !1 ? i.onValueChange(r) : m.preventDefault();
            }),
            onKeyDown: H(e.onKeyDown, (m) => {
              [" ", "Enter"].includes(m.key) && i.onValueChange(r);
            }),
            onFocus: H(e.onFocus, () => {
              const m = i.activationMode !== "manual";
              !u && !o && m && i.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Bs.displayName = Vs;
var Hs = "TabsContent", js = l.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: s, ...i } = e, a = Fn(Hs, n), c = Us(a.baseId, r), d = Gs(a.baseId, r), u = r === a.value, m = l.useRef(u);
    return l.useEffect(() => {
      const h = requestAnimationFrame(() => m.current = !1);
      return () => cancelAnimationFrame(h);
    }, []), /* @__PURE__ */ f(ct, { present: o || u, children: ({ present: h }) => /* @__PURE__ */ f(
      Y.div,
      {
        "data-state": u ? "active" : "inactive",
        "data-orientation": a.orientation,
        role: "tabpanel",
        "aria-labelledby": c,
        hidden: !h,
        id: d,
        tabIndex: 0,
        ...i,
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
js.displayName = Hs;
function Us(e, t) {
  return `${e}-trigger-${t}`;
}
function Gs(e, t) {
  return `${e}-content-${t}`;
}
var ef = $s, Ks = Ws, Ys = Bs, Xs = js;
const kf = ef, tf = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Ks,
  {
    ref: n,
    className: P(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
tf.displayName = Ks.displayName;
const nf = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Ys,
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
nf.displayName = Ys.displayName;
const rf = l.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ f(
  Xs,
  {
    ref: n,
    className: P(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
rf.displayName = Xs.displayName;
const of = l.forwardRef(
  ({ className: e, label: t, error: n, helperText: r, id: o, ...s }, i) => {
    const a = o ?? (t == null ? void 0 : t.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ D("div", { className: "w-full space-y-1.5", children: [
      t && /* @__PURE__ */ f(
        "label",
        {
          htmlFor: a,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ f(
        "textarea",
        {
          id: a,
          ref: i,
          className: P(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-base placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-subtle",
            "resize-y min-h-[80px] transition-colors",
            n && "border-error-500 focus:ring-error-500 focus:border-error-500",
            e
          ),
          "aria-invalid": !!n,
          "aria-describedby": n ? `${a}-error` : r ? `${a}-helper` : void 0,
          ...s
        }
      ),
      n && /* @__PURE__ */ f("p", { id: `${a}-error`, className: "text-xs text-error-500", children: n }),
      !n && r && /* @__PURE__ */ f("p", { id: `${a}-helper`, className: "text-xs text-text-muted", children: r })
    ] });
  }
);
of.displayName = "Textarea";
const hn = "databeez-theme", Pf = `(function(){var t=localStorage.getItem('${hn}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, qs = Js({
  theme: "system",
  setTheme: () => {
  }
});
function If({ children: e }) {
  const [t, n] = st("system"), r = (s) => {
    const i = document.documentElement, a = window.matchMedia("(prefers-color-scheme: dark)").matches;
    s === "dark" || s === "system" && a ? i.classList.add("dark") : i.classList.remove("dark");
  };
  tn(() => {
    const i = localStorage.getItem(hn) ?? "system";
    n(i), r(i);
  }, []), tn(() => {
    if (t !== "system") return;
    const s = window.matchMedia("(prefers-color-scheme: dark)"), i = () => r("system");
    return s.addEventListener("change", i), () => s.removeEventListener("change", i);
  }, [t]);
  const o = (s) => {
    n(s), localStorage.setItem(hn, s), r(s);
  };
  return /* @__PURE__ */ f(qs.Provider, { value: { theme: t, setTheme: o }, children: e });
}
function Of() {
  return ei(qs);
}
function Mf(e, t = {}) {
  const { immediate: n = !0 } = t, [r, o] = st(null), [s, i] = st(n), [a, c] = st(null), d = ti(e);
  d.current = e;
  const u = ni(async () => {
    var m;
    i(!0), c(null);
    try {
      const h = await d.current();
      h.success && h.data !== void 0 ? o(h.data) : c(((m = h.error) == null ? void 0 : m.message) ?? "Si è verificato un errore");
    } catch (h) {
      c(h instanceof Error ? h.message : "Si è verificato un errore");
    } finally {
      i(!1);
    }
  }, []);
  return tn(() => {
    n && u();
  }, t.deps ?? []), { data: r, loading: s, error: a, refetch: u };
}
export {
  na as Alert,
  cf as Badge,
  pa as Button,
  ha as Card,
  ya as CardContent,
  va as CardDescription,
  xa as CardFooter,
  ga as CardHeader,
  ba as CardTitle,
  df as CodeBlock,
  uf as CopyButton,
  mf as Dialog,
  hf as DialogClose,
  ic as DialogContent,
  dc as DialogDescription,
  lc as DialogFooter,
  ac as DialogHeader,
  wo as DialogOverlay,
  sc as DialogPortal,
  cc as DialogTitle,
  pf as DialogTrigger,
  gf as EmptyState,
  bf as FeatureCard,
  uc as Input,
  fc as InputWithIcon,
  vf as MethodBadge,
  yf as PageHeader,
  pc as SearchInput,
  xf as Select,
  Cu as SelectContent,
  wf as SelectGroup,
  Nu as SelectItem,
  Su as SelectLabel,
  ks as SelectScrollDownButton,
  Ts as SelectScrollUpButton,
  Eu as SelectSeparator,
  wu as SelectTrigger,
  Cf as SelectValue,
  Ps as Skeleton,
  Sf as SkeletonCard,
  Ru as SkeletonText,
  Tu as Spinner,
  Nf as SpinnerOverlay,
  Ef as StatCard,
  Rf as StatusBadge,
  Af as StatusIndicatorRow,
  Pf as THEME_ANTI_FOUC_SCRIPT,
  hn as THEME_STORAGE_KEY,
  Tf as TabSwitch,
  Ou as Table,
  _u as TableBody,
  zu as TableCaption,
  $u as TableCell,
  Du as TableFooter,
  Fu as TableHead,
  Mu as TableHeader,
  Lu as TableRow,
  kf as Tabs,
  rf as TabsContent,
  tf as TabsList,
  nf as TabsTrigger,
  of as Textarea,
  If as ThemeProvider,
  ea as alertVariants,
  ra as badgeVariants,
  ma as buttonVariants,
  P as cn,
  Au as spinnerVariants,
  ku as statusBadgeVariants,
  Mf as useAsyncData,
  Of as useTheme
};
