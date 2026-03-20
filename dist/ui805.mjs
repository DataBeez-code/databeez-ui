import { getDefaultExportFromCjs as l } from "./ui153.mjs";
import { __require as s } from "./ui306.mjs";
function g(t, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
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
var n = s();
const f = /* @__PURE__ */ l(n), p = /* @__PURE__ */ g({
  __proto__: null,
  default: f
}, [n]);
export {
  f as default,
  p as r
};
