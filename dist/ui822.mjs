import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui323.mjs";
function l(r, u) {
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
const i = /* @__PURE__ */ f(a), y = /* @__PURE__ */ l({
  __proto__: null,
  default: i
}, [a]);
export {
  i as default,
  y as s
};
