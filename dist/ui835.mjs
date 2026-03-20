import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as f } from "./ui336.mjs";
function n(t, i) {
  for (var o = 0; o < i.length; o++) {
    const e = i[o];
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
var a = f();
const p = /* @__PURE__ */ c(a), b = /* @__PURE__ */ n({
  __proto__: null,
  default: p
}, [a]);
export {
  p as default,
  b as v
};
