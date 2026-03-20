import { getDefaultExportFromCjs as i } from "./ui153.mjs";
import { __require as u } from "./ui176.mjs";
function c(t, f) {
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
var n = u();
const s = /* @__PURE__ */ i(n), b = /* @__PURE__ */ c({
  __proto__: null,
  default: s
}, [n]);
export {
  b,
  s as default
};
