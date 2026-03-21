import { g as f, ak as l } from "./index-CqL3bFoY.mjs";
function c(t, n) {
  for (var a = 0; a < n.length; a++) {
    const e = n[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(t, r, o.get ? o : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var s = l();
const i = /* @__PURE__ */ f(s), u = /* @__PURE__ */ c({
  __proto__: null,
  default: i
}, [s]);
export {
  u as h
};
