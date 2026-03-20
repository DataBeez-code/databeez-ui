import s from "./ui358.mjs";
n.displayName = "sass";
n.aliases = [];
function n(t) {
  t.register(s), function(e) {
    e.languages.sass = e.languages.extend("css", {
      // Sass comments don't need to be closed, only indented
      comment: {
        pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
        lookbehind: !0,
        greedy: !0
      }
    }), e.languages.insertBefore("sass", "atrule", {
      // We want to consume the whole line
      "atrule-line": {
        // Includes support for = and + shortcuts
        pattern: /^(?:[ \t]*)[@+=].+/m,
        greedy: !0,
        inside: {
          atrule: /(?:@[\w-]+|[+=])/
        }
      }
    }), delete e.languages.sass.atrule;
    var a = /\$[-\w]+|#\{\$[-\w]+\}/, r = [
      /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
      {
        pattern: /(\s)-(?=\s)/,
        lookbehind: !0
      }
    ];
    e.languages.insertBefore("sass", "property", {
      // We want to consume the whole line
      "variable-line": {
        pattern: /^[ \t]*\$.+/m,
        greedy: !0,
        inside: {
          punctuation: /:/,
          variable: a,
          operator: r
        }
      },
      // We want to consume the whole line
      "property-line": {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
        greedy: !0,
        inside: {
          property: [
            /[^:\s]+(?=\s*:)/,
            {
              pattern: /(:)[^:\s]+/,
              lookbehind: !0
            }
          ],
          punctuation: /:/,
          variable: a,
          operator: r,
          important: e.languages.sass.important
        }
      }
    }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
      selector: {
        pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
        lookbehind: !0,
        greedy: !0
      }
    });
  }(t);
}
export {
  n as default
};
