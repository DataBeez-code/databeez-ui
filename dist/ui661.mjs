import { getDefaultExportFromCjs as i } from "./ui153.mjs";
import { __require as c } from "./ui161.mjs";
function f(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const p = Object.getOwnPropertyDescriptor(e, r);
          p && Object.defineProperty(t, r, p.get ? p : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var s = c();
const n = /* @__PURE__ */ i(s), g = /* @__PURE__ */ f({
  __proto__: null,
  default: n
}, [s]);
export {
  g as a,
  n as default
};
