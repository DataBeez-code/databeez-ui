var o, l;
function m() {
  if (l) return o;
  l = 1;
  const E = [
    "as",
    // for exports
    "in",
    "of",
    "if",
    "for",
    "while",
    "finally",
    "var",
    "new",
    "function",
    "do",
    "return",
    "void",
    "else",
    "break",
    "catch",
    "instanceof",
    "with",
    "throw",
    "case",
    "default",
    "try",
    "switch",
    "continue",
    "typeof",
    "delete",
    "let",
    "yield",
    "const",
    "class",
    // JS handles these with a special rule
    // "get",
    // "set",
    "debugger",
    "async",
    "await",
    "static",
    "import",
    "from",
    "export",
    "extends"
  ], u = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], d = [
    "Intl",
    "DataView",
    "Number",
    "Math",
    "Date",
    "String",
    "RegExp",
    "Object",
    "Function",
    "Boolean",
    "Error",
    "Symbol",
    "Set",
    "Map",
    "WeakSet",
    "WeakMap",
    "Proxy",
    "Reflect",
    "JSON",
    "Promise",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Float32Array",
    "Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "ArrayBuffer",
    "BigInt64Array",
    "BigUint64Array",
    "BigInt"
  ], g = [
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], S = [
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "require",
    "exports",
    "eval",
    "isFinite",
    "isNaN",
    "parseFloat",
    "parseInt",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape"
  ], A = [
    "arguments",
    "this",
    "super",
    "console",
    "window",
    "document",
    "localStorage",
    "module",
    "global"
    // Node.js
  ], f = [].concat(
    S,
    A,
    d,
    g
  );
  function _(e) {
    const I = [
      "npm",
      "print"
    ], y = [
      "yes",
      "no",
      "on",
      "off"
    ], b = [
      "then",
      "unless",
      "until",
      "loop",
      "by",
      "when",
      "and",
      "or",
      "is",
      "isnt",
      "not"
    ], p = [
      "var",
      "const",
      "let",
      "function",
      "static"
    ], R = (B) => (N) => !B.includes(N), r = {
      keyword: E.concat(b).filter(R(p)),
      literal: u.concat(y),
      built_in: f.concat(I)
    }, n = "[A-Za-z$_][0-9A-Za-z$_]*", t = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: r
    }, a = [
      e.BINARY_NUMBER_MODE,
      e.inherit(e.C_NUMBER_MODE, {
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
      }),
      // a number tries to eat the following slash to prevent treating it as a regexp
      {
        className: "string",
        variants: [
          {
            begin: /'''/,
            end: /'''/,
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: /'/,
            end: /'/,
            contains: [e.BACKSLASH_ESCAPE]
          },
          {
            begin: /"""/,
            end: /"""/,
            contains: [
              e.BACKSLASH_ESCAPE,
              t
            ]
          },
          {
            begin: /"/,
            end: /"/,
            contains: [
              e.BACKSLASH_ESCAPE,
              t
            ]
          }
        ]
      },
      {
        className: "regexp",
        variants: [
          {
            begin: "///",
            end: "///",
            contains: [
              t,
              e.HASH_COMMENT_MODE
            ]
          },
          {
            begin: "//[gim]{0,3}(?=\\W)",
            relevance: 0
          },
          {
            // regex can't start with space to parse x / 2 / 3 as two divisions
            // regex can't start with *, and it supports an "illegal" in the main mode
            begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
          }
        ]
      },
      {
        begin: "@" + n
        // relevance booster
      },
      {
        subLanguage: "javascript",
        excludeBegin: !0,
        excludeEnd: !0,
        variants: [
          {
            begin: "```",
            end: "```"
          },
          {
            begin: "`",
            end: "`"
          }
        ]
      }
    ];
    t.contains = a;
    const i = e.inherit(e.TITLE_MODE, {
      begin: n
    }), s = "(\\(.*\\)\\s*)?\\B[-=]>", c = {
      className: "params",
      begin: "\\([^\\(]",
      returnBegin: !0,
      /* We need another contained nameless mode to not have every nested
      pair of parens to be called "params" */
      contains: [{
        begin: /\(/,
        end: /\)/,
        keywords: r,
        contains: ["self"].concat(a)
      }]
    };
    return {
      name: "CoffeeScript",
      aliases: [
        "coffee",
        "cson",
        "iced"
      ],
      keywords: r,
      illegal: /\/\*/,
      contains: a.concat([
        e.COMMENT("###", "###"),
        e.HASH_COMMENT_MODE,
        {
          className: "function",
          begin: "^\\s*" + n + "\\s*=\\s*" + s,
          end: "[-=]>",
          returnBegin: !0,
          contains: [
            i,
            c
          ]
        },
        {
          // anonymous function start
          begin: /[:\(,=]\s*/,
          relevance: 0,
          contains: [{
            className: "function",
            begin: s,
            end: "[-=]>",
            returnBegin: !0,
            contains: [c]
          }]
        },
        {
          className: "class",
          beginKeywords: "class",
          end: "$",
          illegal: /[:="\[\]]/,
          contains: [
            {
              beginKeywords: "extends",
              endsWithParent: !0,
              illegal: /[:="\[\]]/,
              contains: [i]
            },
            i
          ]
        },
        {
          begin: n + ":",
          end: ":",
          returnBegin: !0,
          returnEnd: !0,
          relevance: 0
        }
      ])
    };
  }
  return o = _, o;
}
export {
  m as __require
};
