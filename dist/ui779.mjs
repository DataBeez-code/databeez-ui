import { getDefaultExportFromCjs as p } from "./ui153.mjs";
import { __require as l } from "./ui267.mjs";
function s(t, f) {
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
var n = l();
const i = /* @__PURE__ */ p(n), g = /* @__PURE__ */ s({
  __proto__: null,
  default: i
}, [n]);
export {
  i as default,
  g as p
};
