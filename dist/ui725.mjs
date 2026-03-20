import { getDefaultExportFromCjs as s } from "./ui153.mjs";
import { __require as i } from "./ui228.mjs";
function g(t, f) {
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
const u = /* @__PURE__ */ s(n), l = /* @__PURE__ */ g({
  __proto__: null,
  default: u
}, [n]);
export {
  u as default,
  l as g
};
