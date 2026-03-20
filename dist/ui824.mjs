import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as n } from "./ui325.mjs";
function u(r, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const f = Object.getOwnPropertyDescriptor(e, t);
          f && Object.defineProperty(r, t, f.get ? f : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var i = n();
const c = /* @__PURE__ */ a(i), g = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [i]);
export {
  c as default,
  g as s
};
