import { g as f, aj as l } from "./index-CqL3bFoY.mjs";
function c(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
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
var s = l();
const i = /* @__PURE__ */ f(s), u = /* @__PURE__ */ c({
  __proto__: null,
  default: i
}, [s]);
export {
  u as h
};
