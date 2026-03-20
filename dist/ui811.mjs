import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui312.mjs";
function i(t, a) {
  for (var s = 0; s < a.length; s++) {
    const e = a[s];
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
var c = n();
const u = /* @__PURE__ */ f(c), g = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [c]);
export {
  u as default,
  g as s
};
