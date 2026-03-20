import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as s } from "./ui199.mjs";
function u(t, i) {
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
var a = s();
const c = /* @__PURE__ */ n(a), l = /* @__PURE__ */ u({
  __proto__: null,
  default: c
}, [a]);
export {
  l as d,
  c as default
};
