import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui288.mjs";
function p(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const l = Object.getOwnPropertyDescriptor(e, r);
          l && Object.defineProperty(t, r, l.get ? l : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var a = n();
const i = /* @__PURE__ */ f(a), g = /* @__PURE__ */ p({
  __proto__: null,
  default: i
}, [a]);
export {
  i as default,
  g as p
};
