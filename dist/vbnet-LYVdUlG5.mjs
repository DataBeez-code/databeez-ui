import { g as f, b_ as c } from "./index-CqL3bFoY.mjs";
function i(r, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var s = c();
const b = /* @__PURE__ */ f(s), u = /* @__PURE__ */ i({
  __proto__: null,
  default: b
}, [s]);
export {
  u as v
};
