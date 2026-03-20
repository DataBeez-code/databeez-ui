import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui189.mjs";
function s(t, a) {
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
var c = n();
const i = /* @__PURE__ */ f(c), g = /* @__PURE__ */ s({
  __proto__: null,
  default: i
}, [c]);
export {
  g as c,
  i as default
};
