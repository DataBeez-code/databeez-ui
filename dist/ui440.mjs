import o from "./ui361.mjs";
import g from "./ui432.mjs";
n.displayName = "ejs";
n.aliases = ["eta"];
function n(a) {
  a.register(o), a.register(g), function(e) {
    e.languages.ejs = {
      delimiter: {
        pattern: /^<%[-_=]?|[-_]?%>$/,
        alias: "punctuation"
      },
      comment: /^#[\s\S]*/,
      "language-javascript": {
        pattern: /[\s\S]+/,
        inside: e.languages.javascript
      }
    }, e.hooks.add("before-tokenize", function(t) {
      var s = /<%(?!%)[\s\S]+?%>/g;
      e.languages["markup-templating"].buildPlaceholders(
        t,
        "ejs",
        s
      );
    }), e.hooks.add("after-tokenize", function(t) {
      e.languages["markup-templating"].tokenizePlaceholders(t, "ejs");
    }), e.languages.eta = e.languages.ejs;
  }(a);
}
export {
  n as default
};
