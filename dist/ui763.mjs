import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as m } from "./ui265.mjs";
function n(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
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
var i = m();
const p = /* @__PURE__ */ f(i), l = /* @__PURE__ */ n({
  __proto__: null,
  default: p
}, [i]);
export {
  p as default,
  l as m
};
