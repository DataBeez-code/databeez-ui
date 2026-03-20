import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as f } from "./ui255.mjs";
function n(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var a = f();
const p = /* @__PURE__ */ c(a), g = /* @__PURE__ */ n({
  __proto__: null,
  default: p
}, [a]);
export {
  p as default,
  g as l
};
