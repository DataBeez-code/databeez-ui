import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as p } from "./ui286.mjs";
function l(r, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(r, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var i = p();
const s = /* @__PURE__ */ f(i), g = /* @__PURE__ */ l({
  __proto__: null,
  default: s
}, [i]);
export {
  s as default,
  g as p
};
