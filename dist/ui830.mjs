import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui332.mjs";
function g(r, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const i = Object.getOwnPropertyDescriptor(e, t);
          i && Object.defineProperty(r, t, i.get ? i : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var f = s();
const u = /* @__PURE__ */ n(f), l = /* @__PURE__ */ g({
  __proto__: null,
  default: u
}, [f]);
export {
  u as default,
  l as t
};
