import { normalize as p } from "./ui913.mjs";
import { DefinedInfo as c } from "./ui925.mjs";
import { Schema as a } from "./ui920.mjs";
function l(r) {
  const s = {}, t = {};
  for (const [e, m] of Object.entries(r.properties)) {
    const o = new c(
      e,
      r.transform(r.attributes || {}, e),
      m,
      r.space
    );
    r.mustUseProperty && r.mustUseProperty.includes(e) && (o.mustUseProperty = !0), s[e] = o, t[p(e)] = e, t[p(o.attribute)] = e;
  }
  return new a(s, t, r.space);
}
export {
  l as create
};
