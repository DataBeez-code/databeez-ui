import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as p } from "./ui233.mjs";
function i(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(e, r);
          s && Object.defineProperty(t, r, s.get ? s : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var f = p();
const u = /* @__PURE__ */ n(f), g = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [f]);
export {
  u as default,
  g as h
};
