import { getDefaultExportFromCjs as a } from "./ui153.mjs";
import { __require as c } from "./ui289.mjs";
function f(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
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
var i = c();
const p = /* @__PURE__ */ a(i), l = /* @__PURE__ */ f({
  __proto__: null,
  default: p
}, [i]);
export {
  p as default,
  l as p
};
