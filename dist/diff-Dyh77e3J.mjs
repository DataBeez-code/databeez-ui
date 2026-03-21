import { g as a, S as s } from "./index-CqL3bFoY.mjs";
function c(t, i) {
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
var n = s();
const p = /* @__PURE__ */ a(n), d = /* @__PURE__ */ c({
  __proto__: null,
  default: p
}, [n]);
export {
  d
};
