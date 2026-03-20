import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as i } from "./ui203.mjs";
function u(t, a) {
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
var f = i();
const c = /* @__PURE__ */ n(f), l = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [f]);
export {
  l as d,
  c as default
};
