import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as f } from "./ui337.mjs";
function n(r, i) {
  for (var o = 0; o < i.length; o++) {
    const t = i[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in r)) {
          const s = Object.getOwnPropertyDescriptor(t, e);
          s && Object.defineProperty(r, e, s.get ? s : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = f();
const p = /* @__PURE__ */ c(a), m = /* @__PURE__ */ n({
  __proto__: null,
  default: p
}, [a]);
export {
  p as default,
  m as v
};
