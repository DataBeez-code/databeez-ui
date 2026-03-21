import { g as s, F as f } from "./index-CqL3bFoY.mjs";
function i(t, c) {
  for (var o = 0; o < c.length; o++) {
    const e = c[o];
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
var n = f();
const p = /* @__PURE__ */ s(n), g = /* @__PURE__ */ i({
  __proto__: null,
  default: p
}, [n]);
export {
  g as c
};
