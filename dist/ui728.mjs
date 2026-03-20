import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui231.mjs";
function i(t, l) {
  for (var o = 0; o < l.length; o++) {
    const e = l[o];
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
var s = n();
const u = /* @__PURE__ */ f(s), g = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [s]);
export {
  u as default,
  g as h
};
