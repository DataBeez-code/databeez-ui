import { parse as d } from "./ui909.mjs";
import { parse as m } from "./ui910.mjs";
import { parseSelector as A } from "./ui911.mjs";
import { find as N } from "./ui912.mjs";
import { normalize as a } from "./ui913.mjs";
function L(t, r, n) {
  const e = n ? S(n) : void 0;
  function i(o, s, ...p) {
    let f;
    if (o == null) {
      f = { type: "root", children: [] };
      const c = (
        /** @type {Child} */
        s
      );
      p.unshift(c);
    } else {
      f = A(o, r);
      const c = f.tagName.toLowerCase(), l = e ? e.get(c) : void 0;
      if (f.tagName = l || c, g(s))
        p.unshift(s);
      else
        for (const [h, b] of Object.entries(s))
          j(t, f.properties, h, b);
    }
    for (const c of p)
      y(f.children, c);
    return f.type === "element" && f.tagName === "template" && (f.content = { type: "root", children: f.children }, f.children = []), f;
  }
  return i;
}
function g(t) {
  if (t === null || typeof t != "object" || Array.isArray(t))
    return !0;
  if (typeof t.type != "string") return !1;
  const r = (
    /** @type {Record<string, unknown>} */
    t
  ), n = Object.keys(t);
  for (const e of n) {
    const i = r[e];
    if (i && typeof i == "object") {
      if (!Array.isArray(i)) return !0;
      const o = (
        /** @type {ReadonlyArray<unknown>} */
        i
      );
      for (const s of o)
        if (typeof s != "number" && typeof s != "string")
          return !0;
    }
  }
  return !!("children" in t && Array.isArray(t.children));
}
function j(t, r, n, e) {
  const i = N(t, n);
  let o;
  if (e != null) {
    if (typeof e == "number") {
      if (Number.isNaN(e)) return;
      o = e;
    } else typeof e == "boolean" ? o = e : typeof e == "string" ? i.spaceSeparated ? o = m(e) : i.commaSeparated ? o = d(e) : i.commaOrSpaceSeparated ? o = m(d(e).join(" ")) : o = u(i, i.property, e) : Array.isArray(e) ? o = [...e] : o = i.property === "style" ? w(e) : String(e);
    if (Array.isArray(o)) {
      const s = [];
      for (const p of o)
        s.push(
          /** @type {number | string} */
          u(i, i.property, p)
        );
      o = s;
    }
    i.property === "className" && Array.isArray(r.className) && (o = r.className.concat(
      /** @type {Array<number | string> | number | string} */
      o
    )), r[i.property] = o;
  }
}
function y(t, r) {
  if (r != null) if (typeof r == "number" || typeof r == "string")
    t.push({ type: "text", value: String(r) });
  else if (Array.isArray(r))
    for (const n of r)
      y(t, n);
  else if (typeof r == "object" && "type" in r)
    r.type === "root" ? y(t, r.children) : t.push(r);
  else
    throw new Error("Expected node, nodes, or string, got `" + r + "`");
}
function u(t, r, n) {
  if (typeof n == "string") {
    if (t.number && n && !Number.isNaN(Number(n)))
      return Number(n);
    if ((t.boolean || t.overloadedBoolean) && (n === "" || a(n) === a(r)))
      return !0;
  }
  return n;
}
function w(t) {
  const r = [];
  for (const [n, e] of Object.entries(t))
    r.push([n, e].join(": "));
  return r.join("; ");
}
function S(t) {
  const r = /* @__PURE__ */ new Map();
  for (const n of t)
    r.set(n.toLowerCase(), n);
  return r;
}
export {
  L as createH
};
