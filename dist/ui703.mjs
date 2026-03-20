import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as i } from "./ui205.mjs";
function u(r, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const s = Object.getOwnPropertyDescriptor(e, t);
          s && Object.defineProperty(r, t, s.get ? s : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
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
