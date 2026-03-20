import { getDefaultExportFromCjs as i } from "./ui153.mjs";
import { __require as a } from "./ui204.mjs";
function c(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const f = Object.getOwnPropertyDescriptor(e, r);
          f && Object.defineProperty(t, r, f.get ? f : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var s = a();
const g = /* @__PURE__ */ i(s), d = /* @__PURE__ */ c({
  __proto__: null,
  default: g
}, [s]);
export {
  d,
  g as default
};
