import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as p } from "./ui344.mjs";
function s(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var f = p();
const u = /* @__PURE__ */ n(f), g = /* @__PURE__ */ s({
  __proto__: null,
  default: u
}, [f]);
export {
  u as default,
  g as z
};
