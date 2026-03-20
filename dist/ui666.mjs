import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui167.mjs";
function p(r, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
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
var c = n();
const i = /* @__PURE__ */ f(c), g = /* @__PURE__ */ p({
  __proto__: null,
  default: i
}, [c]);
export {
  g as a,
  i as default
};
