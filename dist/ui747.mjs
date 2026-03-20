import { getDefaultExportFromCjs as n } from "./ui153.mjs";
import { __require as l } from "./ui250.mjs";
function s(t, i) {
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
var a = l();
const u = /* @__PURE__ */ n(a), d = /* @__PURE__ */ s({
  __proto__: null,
  default: u
}, [a]);
export {
  u as default,
  d as l
};
