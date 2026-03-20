import { Schema as c } from "./ui920.mjs";
function s(t, e) {
  const o = {}, n = {};
  for (const r of t)
    Object.assign(o, r.property), Object.assign(n, r.normal);
  return new c(o, n, e);
}
export {
  s as merge
};
