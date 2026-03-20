import { getDefaultExportFromCjs as s } from "./ui153.mjs";
import { __require as i } from "./ui217.mjs";
function u(t, f) {
  for (var o = 0; o < f.length; o++) {
    const r = f[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const e in r)
        if (e !== "default" && !(e in t)) {
          const a = Object.getOwnPropertyDescriptor(r, e);
          a && Object.defineProperty(t, e, a.get ? a : {
            enumerable: !0,
            get: () => r[e]
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
  g as f
};
