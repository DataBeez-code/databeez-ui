import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui245.mjs";
function l(t, i) {
  for (var o = 0; o < i.length; o++) {
    const e = i[o];
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
var u = n();
const s = /* @__PURE__ */ f(u), g = /* @__PURE__ */ l({
  __proto__: null,
  default: s
}, [u]);
export {
  s as default,
  g as j
};
