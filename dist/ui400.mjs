import a from "./ui375.mjs";
n.displayName = "bison";
n.aliases = [];
function n(e) {
  e.register(a), e.languages.bison = e.languages.extend("c", {}), e.languages.insertBefore("bison", "comment", {
    bison: {
      // This should match all the beginning of the file
      // including the prologue(s), the bison declarations and
      // the grammar rules.
      pattern: /^(?:[^%]|%(?!%))*%%[\s\S]*?%%/,
      inside: {
        c: {
          // Allow for one level of nested braces
          pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
          inside: {
            delimiter: {
              pattern: /^%?\{|%?\}$/,
              alias: "punctuation"
            },
            "bison-variable": {
              pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
              alias: "variable",
              inside: {
                punctuation: /<|>/
              }
            },
            rest: e.languages.c
          }
        },
        comment: e.languages.c.comment,
        string: e.languages.c.string,
        property: /\S+(?=:)/,
        keyword: /%\w+/,
        number: {
          pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
          lookbehind: !0
        },
        punctuation: /%[%?]|[|:;\[\]<>]/
      }
    }
  });
}
export {
  n as default
};
