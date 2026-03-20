import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui169.mjs";
function s(r, i) {
  for (var o = 0; o < i.length; o++) {
    const t = i[o];
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
var u = n();
const c = /* @__PURE__ */ f(u), g = /* @__PURE__ */ s({
  __proto__: null,
  default: c
}, [u]);
export {
  g as a,
  c as default
};
