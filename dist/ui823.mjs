import { getDefaultExportFromCjs as i } from "./ui153.mjs";
import { __require as a } from "./ui324.mjs";
function f(r, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const u = Object.getOwnPropertyDescriptor(e, t);
          u && Object.defineProperty(r, t, u.get ? u : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var s = a();
const c = /* @__PURE__ */ i(s), b = /* @__PURE__ */ f({
  __proto__: null,
  default: c
}, [s]);
export {
  c as default,
  b as s
};
