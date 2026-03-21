import { g as f, aq as c } from "./index-CqL3bFoY.mjs";
function i(t, n) {
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
var s = c();
const p = /* @__PURE__ */ f(s), y = /* @__PURE__ */ i({
  __proto__: null,
  default: p
}, [s]);
export {
  y as h
};
