import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui277.mjs";
function s(r, i) {
  for (var o = 0; o < i.length; o++) {
    const e = i[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const c = Object.getOwnPropertyDescriptor(e, t);
          c && Object.defineProperty(r, t, c.get ? c : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = n();
const u = /* @__PURE__ */ f(a), b = /* @__PURE__ */ s({
  __proto__: null,
  default: u
}, [a]);
export {
  u as default,
  b as o
};
