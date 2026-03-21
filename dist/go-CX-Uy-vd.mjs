import { g as s, af as g } from "./index-CqL3bFoY.mjs";
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
var f = g();
const i = /* @__PURE__ */ s(f), u = /* @__PURE__ */ c({
  __proto__: null,
  default: i
}, [f]);
export {
  u as g
};
