import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as l } from "./ui297.mjs";
function s(r, p) {
  for (var o = 0; o < p.length; o++) {
    const e = p[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = l();
const i = /* @__PURE__ */ f(a), y = /* @__PURE__ */ s({
  __proto__: null,
  default: i
}, [a]);
export {
  i as default,
  y as p
};
