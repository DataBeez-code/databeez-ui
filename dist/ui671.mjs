import { getDefaultExportFromCjs as p } from "./ui153.mjs";
import { __require as s } from "./ui172.mjs";
function i(r, f) {
  for (var a = 0; a < f.length; a++) {
    const e = f[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(r, t, o.get ? o : {
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
  g as a,
  u as default
};
