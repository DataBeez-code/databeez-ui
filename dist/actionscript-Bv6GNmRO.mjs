import { g as a, c as s } from "./index-CqL3bFoY.mjs";
function p(r, i) {
  for (var o = 0; o < i.length; o++) {
    const t = i[o];
    if (typeof t != "string" && !Array.isArray(t)) {
      for (const e in t)
        if (e !== "default" && !(e in r)) {
          const c = Object.getOwnPropertyDescriptor(t, e);
          c && Object.defineProperty(r, e, c.get ? c : {
            enumerable: !0,
            get: () => t[e]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var n = s();
const f = /* @__PURE__ */ a(n), g = /* @__PURE__ */ p({
  __proto__: null,
  default: f
}, [n]);
export {
  g as a
};
