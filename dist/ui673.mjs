import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as f } from "./ui174.mjs";
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
const u = /* @__PURE__ */ c(i), b = /* @__PURE__ */ n({
  __proto__: null,
  default: u
}, [i]);
export {
  b,
  u as default
};
