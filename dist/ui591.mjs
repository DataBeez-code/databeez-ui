import l from "./ui590.mjs";
import p from "./ui505.mjs";
g.displayName = "tsx";
g.aliases = [];
function g(a) {
  a.register(l), a.register(p), function(e) {
    var s = e.util.clone(e.languages.typescript);
    e.languages.tsx = e.languages.extend("jsx", s), delete e.languages.tsx.parameter, delete e.languages.tsx["literal-property"];
    var t = e.languages.tsx.tag;
    t.pattern = RegExp(
      /(^|[^\w$]|(?=<\/))/.source + "(?:" + t.pattern.source + ")",
      t.pattern.flags
    ), t.lookbehind = !0;
  }(a);
}
export {
  g as default
};
