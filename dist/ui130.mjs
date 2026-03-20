import { __exports as l } from "./ui134.mjs";
import { c as v } from "./ui345.mjs";
import { f as y } from "./ui346.mjs";
function m(e, t) {
  for (var a = 0; a < t.length; a++) {
    const r = t[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const n = Object.getOwnPropertyDescriptor(r, i);
          n && Object.defineProperty(e, i, n.get ? n : {
            enumerable: !0,
            get: () => r[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var s = v, f = y, x = l.highlight = p, N = l.highlightAuto = k, L = l.registerLanguage = w, _ = l.listLanguages = P, A = l.registerAlias = j;
g.prototype.addText = S;
g.prototype.addKeyword = O;
g.prototype.addSublanguage = E;
g.prototype.openNode = T;
g.prototype.closeNode = z;
g.prototype.closeAllNodes = d;
g.prototype.finalize = d;
g.prototype.toHTML = B;
var b = "hljs-";
function p(e, t, a) {
  var r = s.configure({}), i = a || {}, n = i.prefix, o;
  if (typeof e != "string")
    throw f("Expected `string` for name, got `%s`", e);
  if (!s.getLanguage(e))
    throw f("Unknown language: `%s` is not registered", e);
  if (typeof t != "string")
    throw f("Expected `string` for value, got `%s`", t);
  if (n == null && (n = b), s.configure({ __emitter: g, classPrefix: n }), o = s.highlight(t, { language: e, ignoreIllegals: !0 }), s.configure(r || {}), o.errorRaised)
    throw o.errorRaised;
  return {
    relevance: o.relevance,
    language: o.language,
    value: o.emitter.rootNode.children
  };
}
function k(e, t) {
  var a = t || {}, r = a.subset || s.listLanguages();
  a.prefix;
  var i = r.length, n = -1, o, u, c, h;
  if (typeof e != "string")
    throw f("Expected `string` for value, got `%s`", e);
  for (u = { relevance: 0, language: null, value: [] }, o = { relevance: 0, language: null, value: [] }; ++n < i; )
    h = r[n], s.getLanguage(h) && (c = p(h, e, t), c.language = h, c.relevance > u.relevance && (u = c), c.relevance > o.relevance && (u = o, o = c));
  return u.language && (o.secondBest = u), o;
}
function w(e, t) {
  s.registerLanguage(e, t);
}
function P() {
  return s.listLanguages();
}
function j(e, t) {
  var a = e, r;
  t && (a = {}, a[e] = t);
  for (r in a)
    s.registerAliases(a[r], { languageName: r });
}
function g(e) {
  this.options = e, this.rootNode = { children: [] }, this.stack = [this.rootNode];
}
function O(e, t) {
  this.openNode(t), this.addText(e), this.closeNode();
}
function E(e, t) {
  var a = this.stack, r = a[a.length - 1], i = e.rootNode.children, n = t ? {
    type: "element",
    tagName: "span",
    properties: { className: [t] },
    children: i
  } : i;
  r.children = r.children.concat(n);
}
function S(e) {
  var t = this.stack, a, r;
  e !== "" && (a = t[t.length - 1], r = a.children[a.children.length - 1], r && r.type === "text" ? r.value += e : a.children.push({ type: "text", value: e }));
}
function T(e) {
  var t = this.stack, a = this.options.classPrefix + e, r = t[t.length - 1], i = {
    type: "element",
    tagName: "span",
    properties: { className: [a] },
    children: []
  };
  r.children.push(i), t.push(i);
}
function z() {
  this.stack.pop();
}
function B() {
  return "";
}
function d() {
}
const R = /* @__PURE__ */ m({
  __proto__: null,
  default: l,
  highlight: x,
  highlightAuto: N,
  listLanguages: _,
  registerAlias: A,
  registerLanguage: L
}, [l]);
export {
  R as c,
  l as default,
  x as highlight,
  N as highlightAuto,
  _ as listLanguages,
  A as registerAlias,
  L as registerLanguage
};
