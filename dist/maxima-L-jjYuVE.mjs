import { g as s, aR as f } from "./index-CqL3bFoY.mjs";
function m(t, i) {
  for (var a = 0; a < i.length; a++) {
    const e = i[a];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const o = Object.getOwnPropertyDescriptor(e, r);
          o && Object.defineProperty(t, r, o.get ? o : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var n = f();
const c = /* @__PURE__ */ s(n), u = /* @__PURE__ */ m({
  __proto__: null,
  default: c
}, [n]);
export {
  u as m
};
