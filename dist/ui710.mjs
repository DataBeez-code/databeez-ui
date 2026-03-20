import { getDefaultExportFromCjs as l } from "./ui153.mjs";
import { __require as s } from "./ui213.mjs";
function i(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
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
var f = s();
const g = /* @__PURE__ */ l(f), p = /* @__PURE__ */ i({
  __proto__: null,
  default: g
}, [f]);
export {
  g as default,
  p as e
};
