import { getDefaultExportFromCjs as p } from "./ui153.mjs";
import { __require as s } from "./ui331.mjs";
function i(r, f) {
  for (var o = 0; o < f.length; o++) {
    const e = f[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(r, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
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
  g as t
};
