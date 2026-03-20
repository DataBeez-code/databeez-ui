import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as c } from "./ui333.mjs";
function f(r, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const p = Object.getOwnPropertyDescriptor(e, t);
          p && Object.defineProperty(r, t, p.get ? p : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var i = c();
const n = /* @__PURE__ */ a(i), y = /* @__PURE__ */ f({
  __proto__: null,
  default: n
}, [i]);
export {
  n as default,
  y as t
};
