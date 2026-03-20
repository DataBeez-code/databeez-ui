import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as s } from "./ui303.mjs";
function i(o, n) {
  for (var t = 0; t < n.length; t++) {
    const e = n[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in o)) {
          const f = Object.getOwnPropertyDescriptor(e, r);
          f && Object.defineProperty(o, r, f.get ? f : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
var a = s();
const u = /* @__PURE__ */ c(a), b = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [a]);
export {
  u as default,
  b as r
};
