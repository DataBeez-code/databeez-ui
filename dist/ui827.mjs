import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as l } from "./ui329.mjs";
function s(r, c) {
  for (var o = 0; o < c.length; o++) {
    const e = c[o];
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
var f = l();
const i = /* @__PURE__ */ n(f), g = /* @__PURE__ */ s({
  __proto__: null,
  default: i
}, [f]);
export {
  i as default,
  g as t
};
