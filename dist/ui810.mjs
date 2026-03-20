import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as f } from "./ui311.mjs";
function n(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
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
var i = f();
const l = /* @__PURE__ */ c(i), b = /* @__PURE__ */ n({
  __proto__: null,
  default: l
}, [i]);
export {
  l as default,
  b as s
};
