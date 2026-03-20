import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as c } from "./ui268.mjs";
function f(r, s) {
  for (var t = 0; t < s.length; t++) {
    const e = s[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in r)) {
          const i = Object.getOwnPropertyDescriptor(e, o);
          i && Object.defineProperty(r, o, i.get ? i : {
            enumerable: !0,
            get: () => e[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var u = c();
const n = /* @__PURE__ */ a(u), p = /* @__PURE__ */ f({
  __proto__: null,
  default: n
}, [u]);
export {
  n as default,
  p as m
};
