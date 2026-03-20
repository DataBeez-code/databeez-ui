import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui343.mjs";
function i(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const u = Object.getOwnPropertyDescriptor(e, r);
          u && Object.defineProperty(t, r, u.get ? u : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var f = s();
const c = /* @__PURE__ */ n(f), y = /* @__PURE__ */ i({
  __proto__: null,
  default: c
}, [f]);
export {
  c as default,
  y as x
};
