import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as p } from "./ui293.mjs";
function s(t, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const f = Object.getOwnPropertyDescriptor(e, r);
          f && Object.defineProperty(t, r, f.get ? f : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var a = p();
const i = /* @__PURE__ */ n(a), b = /* @__PURE__ */ s({
  __proto__: null,
  default: i
}, [a]);
export {
  i as default,
  b as p
};
