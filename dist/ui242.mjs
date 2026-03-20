var d, p;
function P() {
  if (p) return d;
  p = 1;
  const _ = "[A-Za-z$_][0-9A-Za-z$_]*", v = [
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
  ], D = [
    "true",
    "false",
    "null",
    "undefined",
    "NaN",
    "Infinity"
  ], C = [
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
  ], w = [
    "EvalError",
    "InternalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError"
  ], L = [
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
  ], x = [
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
  ], B = [].concat(
    L,
    x,
    C,
    w
  );
  function U(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function T(e) {
    return E("(?=", e, ")");
  }
  function E(...e) {
    return e.map((n) => U(n)).join("");
  }
  function $(e) {
    const N = (a, { after: o }) => {
      const g = "</" + a[0].slice(1);
      return a.input.indexOf(g, o) !== -1;
    }, n = _, S = {
      begin: "<>",
      end: "</>"
    }, r = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      /**
       * @param {RegExpMatchArray} match
       * @param {CallbackResponse} response
       */
      isTrulyOpeningTag: (a, o) => {
        const g = a[0].length + a.index, u = a.input[g];
        if (u === "<") {
          o.ignoreMatch();
          return;
        }
        u === ">" && (N(a, { after: g }) || o.ignoreMatch());
      }
    }, t = {
      $pattern: _,
      keyword: v,
      literal: D,
      built_in: B
    }, A = "[0-9](_?[0-9])*", s = `\\.(${A})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", R = {
      className: "number",
      variants: [
        // DecimalLiteral
        { begin: `(\\b(${f})((${s})|\\.)?|(${s}))[eE][+-]?(${A})\\b` },
        { begin: `\\b(${f})\\b((${s})\\b|\\.)?|(${s})\\b` },
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
    }, i = {
      className: "subst",
      begin: "\\$\\{",
      end: "\\}",
      keywords: t,
      contains: []
      // defined later
    }, I = {
      begin: "html`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          e.BACKSLASH_ESCAPE,
          i
        ],
        subLanguage: "xml"
      }
    }, y = {
      begin: "css`",
      end: "",
      starts: {
        end: "`",
        returnEnd: !1,
        contains: [
          e.BACKSLASH_ESCAPE,
          i
        ],
        subLanguage: "css"
      }
    }, M = {
      className: "string",
      begin: "`",
      end: "`",
      contains: [
        e.BACKSLASH_ESCAPE,
        i
      ]
    }, b = {
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
                    begin: n + "(?=\\s*(-)|$)",
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
    }, O = [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      I,
      y,
      M,
      R,
      e.REGEXP_MODE
    ];
    i.contains = O.concat({
      // we need to pair up {} inside our subst to prevent
      // it from ending too early by matching another }
      begin: /\{/,
      end: /\}/,
      keywords: t,
      contains: [
        "self"
      ].concat(O)
    });
    const m = [].concat(b, i.contains), l = m.concat([
      // eat recursive parens in sub expressions
      {
        begin: /\(/,
        end: /\)/,
        keywords: t,
        contains: ["self"].concat(m)
      }
    ]), c = {
      className: "params",
      begin: /\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: t,
      contains: l
    };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: t,
      // this will be extended by TypeScript
      exports: { PARAMS_CONTAINS: l },
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
        I,
        y,
        M,
        b,
        R,
        {
          // object attr container
          begin: E(
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
            T(E(
              // we also need to allow for multiple possible comments inbetween
              // the first key:value pairing
              /(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,
              n + "\\s*:"
            ))
          ),
          relevance: 0,
          contains: [
            {
              className: "attr",
              begin: n + T("\\s*:"),
              relevance: 0
            }
          ]
        },
        {
          // "value" container
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          contains: [
            b,
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
                      keywords: t,
                      contains: l
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
                { begin: S.begin, end: S.end },
                {
                  begin: r.begin,
                  // we carefully check the opening tag to see if it truly
                  // is a tag and not a false positive
                  "on:begin": r.isTrulyOpeningTag,
                  end: r.end
                }
              ],
              subLanguage: "xml",
              contains: [
                {
                  begin: r.begin,
                  end: r.end,
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
          keywords: t,
          contains: [
            "self",
            e.inherit(e.TITLE_MODE, { begin: n }),
            c
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
            c,
            e.inherit(e.TITLE_MODE, { begin: n })
          ]
        },
        // hack: prevents detection of keywords in some circumstances
        // .keyword()
        // $keyword = x
        {
          variants: [
            { begin: "\\." + n },
            { begin: "\\$" + n }
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
            e.inherit(e.TITLE_MODE, { begin: n }),
            "self",
            c
          ]
        },
        {
          begin: "(get|set)\\s+(?=" + n + "\\()",
          end: /\{/,
          keywords: "get set",
          contains: [
            e.inherit(e.TITLE_MODE, { begin: n }),
            { begin: /\(\)/ },
            // eat to avoid empty params
            c
          ]
        },
        {
          begin: /\$[(.]/
          // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
        }
      ]
    };
  }
  return d = $, d;
}
export {
  P as __require
};
