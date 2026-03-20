import { getDefaultExportFromCjs as f } from "./ui153.mjs";
import { __require as n } from "./ui243.mjs";
function l(t, i) {
  for (var o = 0; o < i.length; o++) {
    const e = i[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const s = Object.getOwnPropertyDescriptor(e, r);
          s && Object.defineProperty(t, r, s.get ? s : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var a = n();
const u = /* @__PURE__ */ f(a), b = /* @__PURE__ */ l({
  __proto__: null,
  default: u
}, [a]);
export {
  u as default,
  b as j
};
