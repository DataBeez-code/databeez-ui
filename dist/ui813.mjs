import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui314.mjs";
function l(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
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
var i = n();
const u = /* @__PURE__ */ f(i), p = /* @__PURE__ */ l({
  __proto__: null,
  default: u
}, [i]);
export {
  u as default,
  p as s
};
