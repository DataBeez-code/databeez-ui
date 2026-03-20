import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui330.mjs";
function u(r, i) {
  for (var o = 0; o < i.length; o++) {
    const t = i[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in r)) {
          const f = Object.getOwnPropertyDescriptor(t, e);
          f && Object.defineProperty(r, e, f.get ? f : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = s();
const c = /* @__PURE__ */ n(a), g = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [a]);
export {
  c as default,
  g as t
};
