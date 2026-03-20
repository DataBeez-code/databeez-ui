import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui221.mjs";
function i(t, c) {
  for (var o = 0; o < c.length; o++) {
    const e = c[o];
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
const g = /* @__PURE__ */ n(f), d = /* @__PURE__ */ i({
  __proto__: null,
  default: g
}, [f]);
export {
  g as default,
  d as g
};
