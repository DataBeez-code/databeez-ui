import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui307.mjs";
function i(t, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(e, r);
          s && Object.defineProperty(t, r, s.get ? s : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var a = n();
const c = /* @__PURE__ */ f(a), g = /* @__PURE__ */ i({
  __proto__: null,
  default: c
}, [a]);
export {
  c as default,
  g as r
};
