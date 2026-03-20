import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui315.mjs";
function i(r, l) {
  for (var o = 0; o < l.length; o++) {
    const e = l[o];
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
var s = n();
const u = /* @__PURE__ */ f(s), p = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [s]);
export {
  u as default,
  p as s
};
