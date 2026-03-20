import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as l } from "./ui258.mjs";
function s(t, u) {
  for (var o = 0; o < u.length; o++) {
    const e = u[o];
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
var f = l();
const i = /* @__PURE__ */ n(f), g = /* @__PURE__ */ s({
  __proto__: null,
  default: i
}, [f]);
export {
  i as default,
  g as l
};
