import { g as c, aW as n } from "./index-CqL3bFoY.mjs";
function u(r, s) {
  for (var t = 0; t < s.length; t++) {
    const e = s[t];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const o in e)
        if (o !== "default" && !(o in r)) {
          const i = Object.getOwnPropertyDescriptor(e, o);
          i && Object.defineProperty(r, o, i.get ? i : {
            enumerable: !0,
            get: () => e[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
var a = n();
const f = /* @__PURE__ */ c(a), p = /* @__PURE__ */ u({
  __proto__: null,
  default: f
}, [a]);
export {
  p as m
};
