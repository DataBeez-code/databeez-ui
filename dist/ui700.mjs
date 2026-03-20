import { getDefaultExportFromCjs as c } from "./ui153.mjs";
import { __require as n } from "./ui202.mjs";
function l(t, i) {
  for (var o = 0; o < i.length; o++) {
    const e = i[o];
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
var a = n();
const s = /* @__PURE__ */ c(a), d = /* @__PURE__ */ l({
  __proto__: null,
  default: s
}, [a]);
export {
  d,
  s as default
};
