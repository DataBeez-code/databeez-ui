import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as f } from "./ui292.mjs";
function n(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const p = Object.getOwnPropertyDescriptor(e, r);
          p && Object.defineProperty(t, r, p.get ? p : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var i = f();
const u = /* @__PURE__ */ a(i), g = /* @__PURE__ */ n({
  __proto__: null,
  default: u
}, [i]);
export {
  u as default,
  g as p
};
