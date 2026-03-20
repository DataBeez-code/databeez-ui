import { getDefaultExportFromCjs as i } from "./ui153.mjs";
import { __require as c } from "./ui159.mjs";
function f(t, n) {
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
var s = c();
const p = /* @__PURE__ */ i(s), u = /* @__PURE__ */ f({
  __proto__: null,
  default: p
}, [s]);
export {
  u as a,
  p as default
};
