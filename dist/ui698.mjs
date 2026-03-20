import { getDefaultExportFromCjs as s } from "./ui153.mjs";
import { __require as i } from "./ui200.mjs";
function g(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
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
var f = i();
const u = /* @__PURE__ */ s(f), d = /* @__PURE__ */ g({
  __proto__: null,
  default: u
}, [f]);
export {
  d,
  u as default
};
