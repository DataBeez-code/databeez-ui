import { getDefaultExportFromCjs as m } from "./ui153.mjs";
import { __require as n } from "./ui164.mjs";
function i(t, s) {
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
var f = n();
const u = /* @__PURE__ */ m(f), l = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [f]);
export {
  l as a,
  u as default
};
