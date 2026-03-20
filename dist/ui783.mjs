import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui284.mjs";
function i(t, a) {
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
var f = s();
const u = /* @__PURE__ */ n(f), g = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [f]);
export {
  u as default,
  g as p
};
