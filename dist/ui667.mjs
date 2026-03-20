import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui168.mjs";
function i(r, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const a = Object.getOwnPropertyDescriptor(e, t);
          a && Object.defineProperty(r, t, a.get ? a : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var f = s();
const c = /* @__PURE__ */ n(f), y = /* @__PURE__ */ i({
  __proto__: null,
  default: c
}, [f]);
export {
  y as a,
  c as default
};
