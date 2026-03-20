import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as p } from "./ui198.mjs";
function l(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
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
var f = p();
const s = /* @__PURE__ */ n(f), d = /* @__PURE__ */ l({
  __proto__: null,
  default: s
}, [f]);
export {
  d,
  s as default
};
