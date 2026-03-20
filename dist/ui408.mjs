import a from "./ui359.mjs";
import n from "./ui376.mjs";
t.displayName = "chaiscript";
t.aliases = [];
function t(e) {
  e.register(a), e.register(n), e.languages.chaiscript = e.languages.extend("clike", {
    string: {
      pattern: /(^|[^\\])'(?:[^'\\]|\\[\s\S])*'/,
      lookbehind: !0,
      greedy: !0
    },
    "class-name": [
      {
        // e.g. class Rectangle { ... }
        pattern: /(\bclass\s+)\w+/,
        lookbehind: !0
      },
      {
        // e.g. attr Rectangle::height, def Rectangle::area() { ... }
        pattern: /(\b(?:attr|def)\s+)\w+(?=\s*::)/,
        lookbehind: !0
      }
    ],
    keyword: /\b(?:attr|auto|break|case|catch|class|continue|def|default|else|finally|for|fun|global|if|return|switch|this|try|var|while)\b/,
    number: [e.languages.cpp.number, /\b(?:Infinity|NaN)\b/],
    operator: />>=?|<<=?|\|\||&&|:[:=]?|--|\+\+|[=!<>+\-*/%|&^]=?|[?~]|`[^`\r\n]{1,4}`/
  }), e.languages.insertBefore("chaiscript", "operator", {
    "parameter-type": {
      // e.g. def foo(int x, Vector y) {...}
      pattern: /([,(]\s*)\w+(?=\s+\w)/,
      lookbehind: !0,
      alias: "class-name"
    }
  }), e.languages.insertBefore("chaiscript", "string", {
    "string-interpolation": {
      pattern: /(^|[^\\])"(?:[^"$\\]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*"/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\}/,
          lookbehind: !0,
          inside: {
            "interpolation-expression": {
              pattern: /(^\$\{)[\s\S]+(?=\}$)/,
              lookbehind: !0,
              inside: e.languages.chaiscript
            },
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation"
            }
          }
        },
        string: /[\s\S]+/
      }
    }
  });
}
export {
  t as default
};
