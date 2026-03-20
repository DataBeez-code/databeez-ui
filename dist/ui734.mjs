import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as s } from "./ui237.mjs";
function u(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const f = Object.getOwnPropertyDescriptor(e, r);
          f && Object.defineProperty(t, r, f.get ? f : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var i = s();
const c = /* @__PURE__ */ a(i), l = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [i]);
export {
  c as default,
  l as i
};
