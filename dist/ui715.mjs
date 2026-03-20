import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as p } from "./ui218.mjs";
function i(t, f) {
  for (var o = 0; o < f.length; o++) {
    const e = f[o];
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
var s = p();
const u = /* @__PURE__ */ n(s), g = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [s]);
export {
  u as default,
  g as f
};
