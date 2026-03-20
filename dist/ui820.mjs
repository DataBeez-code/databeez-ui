import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as i } from "./ui321.mjs";
function u(r, s) {
  for (var o = 0; o < s.length; o++) {
    const t = s[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in r)) {
          const a = Object.getOwnPropertyDescriptor(t, e);
          a && Object.defineProperty(r, e, a.get ? a : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var f = i();
const c = /* @__PURE__ */ n(f), g = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [f]);
export {
  c as default,
  g as s
};
