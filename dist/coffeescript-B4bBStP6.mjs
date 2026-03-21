import { g as i, G as n } from "./index-CqL3bFoY.mjs";
function a(t, c) {
  for (var o = 0; o < c.length; o++) {
    const e = c[o];
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
var s = n();
const p = /* @__PURE__ */ i(s), g = /* @__PURE__ */ a({
  __proto__: null,
  default: p
}, [s]);
export {
  g as c
};
