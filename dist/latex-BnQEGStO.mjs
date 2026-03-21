import { g as f, aD as l } from "./index-CqL3bFoY.mjs";
function c(r, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(r, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var s = l();
const i = /* @__PURE__ */ f(s), u = /* @__PURE__ */ c({
  __proto__: null,
  default: i
}, [s]);
export {
  u as l
};
