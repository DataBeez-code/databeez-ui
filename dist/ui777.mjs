import { getDefaultExportFromCjs as s } from "./ui153.mjs";
import { __require as i } from "./ui280.mjs";
function g(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const n = Object.getOwnPropertyDescriptor(e, r);
          n && Object.defineProperty(t, r, n.get ? n : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var f = i();
const u = /* @__PURE__ */ s(f), l = /* @__PURE__ */ g({
  __proto__: null,
  default: u
}, [f]);
export {
  u as default,
  l as o
};
