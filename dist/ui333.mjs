var m, v;
function K() {
  if (v) return m;
  v = 1;
  const l = "[A-Za-z$_][0-9A-Za-z$_]*", I = [
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
  ], O = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], x = [
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
  ], L = [
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], B = [
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
  ], U = [
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
  ], M = [].concat(
    B,
    U,
    x,
    L
  );
  function $(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function C(e) {
    return A("(?=", e, ")");
  }
  function A(...e) {
    return e.map((t) => $(t)).join("");
  }
  function P(e) {
    const g = (i, { after: f }) => {
      const p = "</" + i[0].slice(1);
      return i.input.indexOf(p, f) !== -1;
    }, t = l, b = {
      begin: "<>",
      end: "</>"
    }, s = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (i, f) => {
        const p = i[0].length + i.index, R = i.input[p];
        if (R === "<") {
          f.ignoreMatch();
          return;
        }
        R === ">" && (g(i, { after: p }) || f.ignoreMatch());
      }
    }, a = {
      $pattern: l,
      keyword: I,
      literal: O,
      built_in: M
    }, u = "[0-9](_?[0-9])*", c = `\\.(${u})`, E = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${E})((${c})|\\.)?|(${c}))[eE][+-]?(${u})\\b` },
        { begin: `\\b(${E})\\b((${c})\\b|\\.)?|(${c})\\b` },
        // DecimalBigIntegerLiteral
        { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
        // NonDecimalIntegerLiteral
        { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
        { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
        { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
        // LegacyOctalIntegerLiteral (does not include underscore separators)
        // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
        { begin: "\\b0[0-7]+n?\\b" }
      ],
      relevance: 0
    }, n = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: a,
      contains: []
      // defined later
    }, _ = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          e.BACKSLASH_ESCAPE,
          n
        ],
        subLanguage: "xml"
      }
    }, r = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          e.BACKSLASH_ESCAPE,
          n
        ],
        subLanguage: "css"
      }
    }, T = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        e.BACKSLASH_ESCAPE,
        n
      ]
    }, o = {
      className: "comment",
      variants: [
        e.COMMENT(
          /\/\*\*(?!\/)/,
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                className: "doctag",
                begin: "@[A-Za-z]+",
                contains: [
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    relevance: 0
                  },
                  {
                    className: "variable",
                    begin: t + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0
                  },
                  // eat spaces (not newlines) so we can find
                  // types or variables
                  {
                    begin: /(?=[^\n])\s/,
                    relevance: 0
                  }
                ]
              }
            ]
          }
        ),
        e.C_BLOCK_COMMENT_MODE,
        e.C_LINE_COMMENT_MODE
      ]
    }, N = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      _,
      r,
      T,
      d,
      e.REGEXP_MODE
    ];
    n.contains = N.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: a,
      contains: [
        "self"
      ].concat(N)
    });
    const D = [].concat(o, n.contains), y = D.concat([
      // eat recursive parens in sub expressions
      {
        begin: /\(/,
        end: /\)/,
        keywords: a,
        contains: ["self"].concat(D)
      }
    ]), S = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: a,
      contains: y
    };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: a,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: y },
      illegal: /#(?![$_A-z])/,
      contains: [
        e.SHEBANG({
          label: "shebang",
          binary: "node",
          relevance: 5
        }),
        {
          label: "use_strict",
          className: "meta",
          relevance: 10,
          begin: /^\s*['"]use (strict|asm)['"]/
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        _,
        r,
        T,
        o,
        d,
        {
          // object attr container
          begin: A(
            /[{,\n]\s*/,
            // we need to look ahead to make sure that we actually have an
            // attribute coming up so we don't steal a comma from a potential
            // "value" container
            //
            // NOTE: this might not work how you think.  We don't actually always
            // enter this mode and stay.  Instead it might merely match `,
            // <comments up next>` and then immediately end after the , because it
            // fails to find any actual attrs. But this still does the job because
            // it prevents the value contain rule from grabbing this instead and
            // prevening this rule from firing when we actually DO have keys.
            C(A(
              // we also need to allow for multiple possible comments inbetween
              // the first key:value pairing
              /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
              t + "\\s*:"
            ))
          ),
          relevance: 0,
          contains: [
            {
              className: "attr",
              begin: t + C("\\s*:"),
              relevance: 0
            }
          ]
        },
        {
          // "value" container
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          contains: [
            o,
            e.REGEXP_MODE,
            {
              className: "function",
              // we have to count the parens to make sure we actually have the
              // correct bounding ( ) before the =>.  There could be any number of
              // sub-expressions inside also surrounded by parens.
              begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    {
                      begin: e.UNDERSCORE_IDENT_RE,
                      relevance: 0
                    },
                    {
                      className: null,
                      begin: /\(\s*\)/,
                      skip: !0
                    },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: a,
                      contains: y
                    }
                  ]
                }
              ]
            },
            {
              // could be a comma delimited list of params to a function call
              begin: /,/,
              relevance: 0
            },
            {
              className: "",
              begin: /\s/,
              end: /\s*/,
              skip: !0
            },
            {
              // JSX
              variants: [
                { begin: b.begin, end: b.end },
                {
                  begin: s.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": s.isTrulyOpeningTag,
                  end: s.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: s.begin,
                  end: s.end,
                  skip: !0,
                  contains: ["self"]
                }
              ]
            }
          ],
          relevance: 0
        },
        {
          className: "function",
          beginKeywords: "function",
          end: /[{;]/,
          excludeEnd: !0,
          keywords: a,
          contains: [
            "self",
            e.inherit(e.TITLE_MODE, { begin: t }),
            S
          ],
          illegal: /%/
        },
        {
          // prevent this from getting swallowed up by function
          // since they appear "function like"
          beginKeywords: "while if switch catch for"
        },
        {
          className: "function",
          // we have to count the parens to make sure we actually have the correct
          // bounding ( ).  There could be any number of sub-expressions inside
          // also surrounded by parens.
          begin: e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          // end parens
          returnBegin: !0,
          contains: [
            S,
            e.inherit(e.TITLE_MODE, { begin: t })
          ]
        },
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          variants: [
            { begin: "\\." + t },
            { begin: "\\$" + t }
          ],
          relevance: 0
        },
        {
          // ES6 class
          className: "class",
          beginKeywords: "class",
          end: /[{;=]/,
          excludeEnd: !0,
          illegal: /[:"[\]]/,
          contains: [
            { beginKeywords: "extends" },
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        {
          begin: /\b(?=constructor)/,
          end: /[{;]/,
          excludeEnd: !0,
          contains: [
            e.inherit(e.TITLE_MODE, { begin: t }),
            "self",
            S
          ]
        },
        {
          begin: "(get|set)\\s+(?=" + t + "\\()",
          end: /\{/,
          keywords: "get set",
          contains: [
            e.inherit(e.TITLE_MODE, { begin: t }),
            { begin: /\(\)/ },
            // eat to avoid empty params
            S
          ]
        },
        {
          begin: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  function k(e) {
    const g = l, t = {
      beginKeywords: "namespace",
      end: /\{/,
      excludeEnd: !0
    }, b = {
      beginKeywords: "interface",
      end: /\{/,
      excludeEnd: !0,
      keywords: "interface extends"
    }, s = {
      className: "meta",
      relevance: 10,
      begin: /^\s*['"]use strict['"]/
    }, a = [
      "any",
      "void",
      "number",
      "boolean",
      "string",
      "object",
      "never",
      "enum"
    ], u = [
      "type",
      "namespace",
      "typedef",
      "interface",
      "public",
      "private",
      "protected",
      "implements",
      "declare",
      "abstract",
      "readonly"
    ], c = {
      $pattern: l,
      keyword: I.concat(u),
      literal: O,
      built_in: M.concat(a)
    }, E = {
      className: "meta",
      begin: "@" + g
    }, d = (r, T, w) => {
      const o = r.contains.findIndex((N) => N.label === T);
      if (o === -1)
        throw new Error("can not find mode to replace");
      r.contains.splice(o, 1, w);
    }, n = P(e);
    Object.assign(n.keywords, c), n.exports.PARAMS_CONTAINS.push(E), n.contains = n.contains.concat([
      E,
      t,
      b
    ]), d(n, "shebang", e.SHEBANG()), d(n, "use_strict", s);
    const _ = n.contains.find((r) => r.className === "function");
    return _.relevance = 0, Object.assign(n, {
      name: "TypeScript",
      aliases: ["ts", "tsx"]
    }), n;
  }
  return m = k, m;
}
export {
  K as __require
};
