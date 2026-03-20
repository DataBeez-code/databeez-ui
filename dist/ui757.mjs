import { getDefaultExportFromCjs as s } from "./ui153.mjs";
import { __require as i } from "./ui196.mjs";
function u(t, n) {
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
var f = i();
const c = /* @__PURE__ */ s(f), d = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [f]);
export {
  c as default,
  d as m
};
