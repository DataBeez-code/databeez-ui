import { g as a, D as p } from "./index-CqL3bFoY.mjs";
function s(t, c) {
  for (var o = 0; o < c.length; o++) {
    const e = c[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const l = Object.getOwnPropertyDescriptor(e, r);
          l && Object.defineProperty(t, r, l.get ? l : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var n = p();
const u = /* @__PURE__ */ a(n), i = /* @__PURE__ */ s({
  __proto__: null,
  default: u
}, [n]);
export {
  i as c
};
