import { g as p, bd as s } from "./index-CqL3bFoY.mjs";
function f(r, a) {
  for (var o = 0; o < a.length; o++) {
    const e = a[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const t in e)
        if (t !== "default" && !(t in r)) {
          const n = Object.getOwnPropertyDescriptor(e, t);
          n && Object.defineProperty(r, t, n.get ? n : {
            enumerable: !0,
            get: () => e[t]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var i = s();
const l = /* @__PURE__ */ p(i), u = /* @__PURE__ */ f({
  __proto__: null,
  default: l
}, [i]);
export {
  u as p
};
