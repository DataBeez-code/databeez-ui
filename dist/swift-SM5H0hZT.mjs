import { g as n, bR as a } from "./index-CqL3bFoY.mjs";
function c(r, f) {
  for (var o = 0; o < f.length; o++) {
    const e = f[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(r, t, s.get ? s : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var i = a();
const p = /* @__PURE__ */ n(i), g = /* @__PURE__ */ c({
  __proto__: null,
  default: p
}, [i]);
export {
  g as s
};
