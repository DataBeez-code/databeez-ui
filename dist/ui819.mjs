import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as i } from "./ui320.mjs";
function u(r, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
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
var s = i();
const c = /* @__PURE__ */ f(s), g = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [s]);
export {
  c as default,
  g as s
};
