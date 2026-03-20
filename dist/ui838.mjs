import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui340.mjs";
function u(t, a) {
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
var f = s();
const c = /* @__PURE__ */ n(f), l = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [f]);
export {
  c as default,
  l as v
};
