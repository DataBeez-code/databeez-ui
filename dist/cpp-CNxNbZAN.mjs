import { g as a, J as s } from "./index-CqL3bFoY.mjs";
function f(t, c) {
  for (var o = 0; o < c.length; o++) {
    const e = c[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const p = Object.getOwnPropertyDescriptor(e, r);
          p && Object.defineProperty(t, r, p.get ? p : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var n = s();
const i = /* @__PURE__ */ a(n), g = /* @__PURE__ */ f({
  __proto__: null,
  default: i
}, [n]);
export {
  g as c
};
