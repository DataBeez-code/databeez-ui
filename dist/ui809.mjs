import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui310.mjs";
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
var c = n();
const u = /* @__PURE__ */ f(c), l = /* @__PURE__ */ i({
  __proto__: null,
  default: u
}, [c]);
export {
  u as default,
  l as s
};
