import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui206.mjs";
function i(r, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
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
var a = n();
const c = /* @__PURE__ */ f(a), l = /* @__PURE__ */ i({
  __proto__: null,
  default: c
}, [a]);
export {
  l as d,
  c as default
};
