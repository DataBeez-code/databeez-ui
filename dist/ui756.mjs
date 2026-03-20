import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as l } from "./ui259.mjs";
function s(t, f) {
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
var i = l();
const u = /* @__PURE__ */ n(i), p = /* @__PURE__ */ s({
  __proto__: null,
  default: u
}, [i]);
export {
  u as default,
  p as m
};
