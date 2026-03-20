import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as f } from "./ui276.mjs";
function u(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(e, r);
          s && Object.defineProperty(t, r, s.get ? s : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var i = f();
const c = /* @__PURE__ */ a(i), g = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [i]);
export {
  c as default,
  g as n
};
