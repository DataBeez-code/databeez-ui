import { getDefaultExportFromCjs as p } from "./ui153.mjs";
import { __require as s } from "./ui235.mjs";
function i(r, f) {
  for (var o = 0; o < f.length; o++) {
    const t = f[o];
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
var n = s();
const u = /* @__PURE__ */ p(n), g = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [n]);
export {
  u as default,
  g as h
};
