import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui157.mjs";
function f(r, a) {
  for (var o = 0; o < a.length; o++) {
    const t = a[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in r)) {
          const i = Object.getOwnPropertyDescriptor(t, e);
          i && Object.defineProperty(r, e, i.get ? i : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var c = s();
const p = /* @__PURE__ */ n(c), g = /* @__PURE__ */ f({
  __proto__: null,
  default: p
}, [c]);
export {
  g as a,
  p as default
};
