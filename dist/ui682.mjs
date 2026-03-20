import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as f } from "./ui184.mjs";
function n(t, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const l = Object.getOwnPropertyDescriptor(e, r);
          l && Object.defineProperty(t, r, l.get ? l : {
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
  g as c,
  p as default
};
