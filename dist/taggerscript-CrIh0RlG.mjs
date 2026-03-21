import { g as c, bS as i } from "./index-CqL3bFoY.mjs";
function n(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(t, r, a.get ? a : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var g = i();
const p = /* @__PURE__ */ c(g), u = /* @__PURE__ */ n({
  __proto__: null,
  default: p
}, [g]);
export {
  u as t
};
