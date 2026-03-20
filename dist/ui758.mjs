import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as m } from "./ui260.mjs";
function n(r, i) {
  for (var a = 0; a < i.length; a++) {
    const e = i[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const o = Object.getOwnPropertyDescriptor(e, t);
          o && Object.defineProperty(r, t, o.get ? o : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var c = m();
const s = /* @__PURE__ */ f(c), l = /* @__PURE__ */ n({
  __proto__: null,
  default: s
}, [c]);
export {
  s as default,
  l as m
};
