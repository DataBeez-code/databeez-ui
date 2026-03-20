import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui177.mjs";
function s(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var c = n();
const u = /* @__PURE__ */ f(c), g = /* @__PURE__ */ s({
  __proto__: null,
  default: u
}, [c]);
export {
  g as c,
  u as default
};
