import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as f } from "./ui279.mjs";
function p(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(t, r, a.get ? a : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var s = f();
const i = /* @__PURE__ */ c(s), l = /* @__PURE__ */ p({
  __proto__: null,
  default: i
}, [s]);
export {
  i as default,
  l as o
};
