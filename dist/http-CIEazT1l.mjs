import { g as s, ap as f } from "./index-CqL3bFoY.mjs";
function c(r, n) {
  for (var o = 0; o < n.length; o++) {
    const t = n[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in r)) {
          const a = Object.getOwnPropertyDescriptor(t, e);
          a && Object.defineProperty(r, e, a.get ? a : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var p = f();
const i = /* @__PURE__ */ s(p), g = /* @__PURE__ */ c({
  __proto__: null,
  default: i
}, [p]);
export {
  g as h
};
