import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as i } from "./ui173.mjs";
function u(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
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
var f = i();
const c = /* @__PURE__ */ n(f), b = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [f]);
export {
  b,
  c as default
};
