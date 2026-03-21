import { g as c, h as i } from "./index-CqL3bFoY.mjs";
function n(t, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const p = Object.getOwnPropertyDescriptor(e, r);
          p && Object.defineProperty(t, r, p.get ? p : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var s = i();
const f = /* @__PURE__ */ c(s), u = /* @__PURE__ */ n({
  __proto__: null,
  default: f
}, [s]);
export {
  u as a
};
