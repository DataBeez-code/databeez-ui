import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as i } from "./ui244.mjs";
function u(t, s) {
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
var a = i();
const c = /* @__PURE__ */ f(a), g = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [a]);
export {
  c as default,
  g as j
};
