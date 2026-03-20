import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as c } from "./ui270.mjs";
function f(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(t, r, n.get ? n : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var i = c();
const p = /* @__PURE__ */ a(i), l = /* @__PURE__ */ f({
  __proto__: null,
  default: p
}, [i]);
export {
  p as default,
  l as m
};
