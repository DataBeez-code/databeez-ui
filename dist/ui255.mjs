var s, c;
function f() {
  if (c) return s;
  c = 1;
  const d = [
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
  ], l = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], u = [
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
  ], _ = [
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], E = [
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
  ], S = [
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
  ], g = [].concat(
    E,
    S,
    u,
    _
  );
  function A(e) {
    const I = [
      "npm",
      "print"
    ], b = [
      "yes",
      "no",
      "on",
      "off",
      "it",
      "that",
      "void"
    ], y = [
      "then",
      "unless",
      "until",
      "loop",
      "of",
      "by",
      "when",
      "and",
      "or",
      "is",
      "isnt",
      "not",
      "it",
      "that",
      "otherwise",
      "from",
      "to",
      "til",
      "fallthrough",
      "case",
      "enum",
      "native",
      "list",
      "map",
      "__hasProp",
      "__extends",
      "__slice",
      "__bind",
      "__indexOf"
    ], t = {
      keyword: d.concat(y),
      literal: l.concat(b),
      built_in: g.concat(I)
    }, n = "[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*", a = e.inherit(e.TITLE_MODE, {
      begin: n
    }), r = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: t
    }, o = {
      className: "subst",
      begin: /#[A-Za-z$_]/,
      end: /(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
      keywords: t
    }, i = [
      e.BINARY_NUMBER_MODE,
      {
        className: "number",
        begin: "(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",
        relevance: 0,
        starts: {
          end: "(\\s*/)?",
          relevance: 0
        }
        // a number tries to eat the following slash to prevent treating it as a regexp
      },
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
              r,
              o
            ]
          },
          {
            begin: /"/,
            end: /"/,
            contains: [
              e.BACKSLASH_ESCAPE,
              r,
              o
            ]
          },
          {
            begin: /\\/,
            end: /(\s|$)/,
            excludeEnd: !0
          }
        ]
      },
      {
        className: "regexp",
        variants: [
          {
            begin: "//",
            end: "//[gim]*",
            contains: [
              r,
              e.HASH_COMMENT_MODE
            ]
          },
          {
            // regex can't start with space to parse x / 2 / 3 as two divisions
            // regex can't start with *, and it supports an "illegal" in the main mode
            begin: /\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/
          }
        ]
      },
      {
        begin: "@" + n
      },
      {
        begin: "``",
        end: "``",
        excludeBegin: !0,
        excludeEnd: !0,
        subLanguage: "javascript"
      }
    ];
    r.contains = i;
    const m = {
      className: "params",
      begin: "\\(",
      returnBegin: !0,
      /* We need another contained nameless mode to not have every nested
      pair of parens to be called "params" */
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          keywords: t,
          contains: ["self"].concat(i)
        }
      ]
    }, p = {
      begin: "(#=>|=>|\\|>>|-?->|!->)"
    };
    return {
      name: "LiveScript",
      aliases: ["ls"],
      keywords: t,
      illegal: /\/\*/,
      contains: i.concat([
        e.COMMENT("\\/\\*", "\\*\\/"),
        e.HASH_COMMENT_MODE,
        p,
        // relevance booster
        {
          className: "function",
          contains: [
            a,
            m
          ],
          returnBegin: !0,
          variants: [
            {
              begin: "(" + n + "\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?",
              end: "->\\*?"
            },
            {
              begin: "(" + n + "\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?",
              end: "[-~]{1,2}>\\*?"
            },
            {
              begin: "(" + n + "\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?",
              end: "!?[-~]{1,2}>\\*?"
            }
          ]
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
              contains: [a]
            },
            a
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
  return s = A, s;
}
export {
  f as __require
};
