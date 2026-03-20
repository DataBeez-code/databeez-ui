import { Prism as p } from "./ui347.mjs";
import { h } from "./ui348.mjs";
import { parseEntities as l } from "./ui349.mjs";
function a() {
}
a.prototype = p;
const i = new a();
i.highlight = y;
i.register = w;
i.alias = u;
i.registered = m;
i.listLanguages = d;
i.util.encode = b;
i.Token.stringify = f;
function y(t, e) {
  if (typeof t != "string")
    throw new TypeError("Expected `string` for `value`, got `" + t + "`");
  let n, r;
  if (e && typeof e == "object")
    n = e;
  else {
    if (r = e, typeof r != "string")
      throw new TypeError("Expected `string` for `name`, got `" + r + "`");
    if (Object.hasOwn(i.languages, r))
      n = i.languages[r];
    else
      throw new Error("Unknown language: `" + r + "` is not registered");
  }
  return {
    type: "root",
    // @ts-expect-error: we hacked Prism to accept and return the things we want.
    children: p.highlight.call(i, t, n, r)
  };
}
function w(t) {
  if (typeof t != "function" || !t.displayName)
    throw new Error("Expected `function` for `syntax`, got `" + t + "`");
  Object.hasOwn(i.languages, t.displayName) || t(i);
}
function u(t, e) {
  const n = i.languages;
  let r = {};
  typeof t == "string" ? e && (r[t] = e) : r = t;
  let s;
  for (s in r)
    if (Object.hasOwn(r, s)) {
      const o = r[s], g = typeof o == "string" ? [o] : o;
      let c = -1;
      for (; ++c < g.length; )
        n[g[c]] = n[s];
    }
}
function m(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Expected `string` for `aliasOrLanguage`, got `" + t + "`"
    );
  return Object.hasOwn(i.languages, t);
}
function d() {
  const t = i.languages, e = [];
  let n;
  for (n in t)
    Object.hasOwn(t, n) && typeof t[n] == "object" && e.push(n);
  return e;
}
function f(t, e) {
  if (typeof t == "string")
    return { type: "text", value: t };
  if (Array.isArray(t)) {
    const r = [];
    let s = -1;
    for (; ++s < t.length; )
      t[s] !== null && t[s] !== void 0 && t[s] !== "" && r.push(
        /** @type {Element | Text} */
        f(t[s], e)
      );
    return r;
  }
  const n = {
    attributes: {},
    classes: ["token", t.type],
    content: f(t.content, e),
    language: e,
    tag: "span",
    type: t.type
  };
  return t.alias && n.classes.push(
    ...typeof t.alias == "string" ? [t.alias] : t.alias
  ), i.hooks.run("wrap", n), h(
    n.tag + "." + n.classes.join("."),
    O(n.attributes),
    n.content
  );
}
function b(t) {
  return t;
}
function O(t) {
  let e;
  for (e in t)
    Object.hasOwn(t, e) && (t[e] = l(t[e]));
  return t;
}
export {
  i as refractor
};
