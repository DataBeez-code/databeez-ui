import { getDefaultExportFromCjs as s } from "./ui153.mjs";
import { __require as f } from "./ui166.mjs";
function n(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const i = Object.getOwnPropertyDescriptor(e, r);
          i && Object.defineProperty(t, r, i.get ? i : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var c = f();
const u = /* @__PURE__ */ s(c), l = /* @__PURE__ */ n({
  __proto__: null,
  default: u
}, [c]);
export {
  l as a,
  u as default
};
