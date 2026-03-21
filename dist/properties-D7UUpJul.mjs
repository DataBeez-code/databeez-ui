import { g as n, bj as a } from "./index-CqL3bFoY.mjs";
function f(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
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
var i = a();
const c = /* @__PURE__ */ n(i), g = /* @__PURE__ */ f({
  __proto__: null,
  default: c
}, [i]);
export {
  g as p
};
