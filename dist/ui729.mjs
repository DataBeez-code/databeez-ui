import { getDefaultExportFromCjs as s } from "./ui153.mjs";
import { __require as i } from "./ui232.mjs";
function u(t, f) {
  for (var o = 0; o < f.length; o++) {
    const e = f[o];
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
var n = i();
const c = /* @__PURE__ */ s(n), g = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [n]);
export {
  c as default,
  g as h
};
