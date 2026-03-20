import r from "./ui359.mjs";
import i from "./ui432.mjs";
import o from "./ui496.mjs";
l.displayName = "latte";
l.aliases = [];
function l(e) {
  e.register(r), e.register(i), e.register(o), function(a) {
    a.languages.latte = {
      comment: /^\{\*[\s\S]*/,
      "latte-tag": {
        // https://latte.nette.org/en/tags
        pattern: /(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,
        lookbehind: !0,
        alias: "important"
      },
      delimiter: {
        pattern: /^\{\/?|\}$/,
        alias: "punctuation"
      },
      php: {
        pattern: /\S(?:[\s\S]*\S)?/,
        alias: "language-php",
        inside: a.languages.php
      }
    };
    var n = a.languages.extend("markup", {});
    a.languages.insertBefore(
      "inside",
      "attr-value",
      {
        "n-attr": {
          pattern: /n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,
          inside: {
            "attr-name": {
              pattern: /^[^\s=]+/,
              alias: "important"
            },
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                punctuation: [
                  /^=/,
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: !0
                  }
                ],
                php: {
                  pattern: /\S(?:[\s\S]*\S)?/,
                  inside: a.languages.php
                }
              }
            }
          }
        }
      },
      n.tag
    ), a.hooks.add("before-tokenize", function(t) {
      if (t.language === "latte") {
        var p = /\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;
        a.languages["markup-templating"].buildPlaceholders(
          t,
          "latte",
          p
        ), t.grammar = n;
      }
    }), a.hooks.add("after-tokenize", function(t) {
      a.languages["markup-templating"].tokenizePlaceholders(t, "latte");
    });
  }(e);
}
export {
  l as default
};
