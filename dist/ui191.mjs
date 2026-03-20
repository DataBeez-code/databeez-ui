var _, d;
function f() {
  if (d) return _;
  d = 1;
  function g(e) {
    const i = "(_?[ui](8|16|32|64|128))?", E = "(_?f(32|64))?", u = "[a-zA-Z_]\\w*[!?=]?", s = "[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?", t = "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?", c = {
      $pattern: u,
      keyword: "abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
      literal: "false nil true"
    }, a = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: c
    }, b = {
      className: "template-variable",
      variants: [
        {
          begin: "\\{\\{",
          end: "\\}\\}"
        },
        {
          begin: "\\{%",
          end: "%\\}"
        }
      ],
      keywords: c
    };
    function n(w, A) {
      const o = [
        {
          begin: w,
          end: A
        }
      ];
      return o[0].contains = o, o;
    }
    const l = {
      className: "string",
      contains: [
        e.BACKSLASH_ESCAPE,
        a
      ],
      variants: [
        {
          begin: /'/,
          end: /'/
        },
        {
          begin: /"/,
          end: /"/
        },
        {
          begin: /`/,
          end: /`/
        },
        {
          begin: "%[Qwi]?\\(",
          end: "\\)",
          contains: n("\\(", "\\)")
        },
        {
          begin: "%[Qwi]?\\[",
          end: "\\]",
          contains: n("\\[", "\\]")
        },
        {
          begin: "%[Qwi]?\\{",
          end: /\}/,
          contains: n(/\{/, /\}/)
        },
        {
          begin: "%[Qwi]?<",
          end: ">",
          contains: n("<", ">")
        },
        {
          begin: "%[Qwi]?\\|",
          end: "\\|"
        },
        {
          begin: /<<-\w+$/,
          end: /^\s*\w+$/
        }
      ],
      relevance: 0
    }, T = {
      className: "string",
      variants: [
        {
          begin: "%q\\(",
          end: "\\)",
          contains: n("\\(", "\\)")
        },
        {
          begin: "%q\\[",
          end: "\\]",
          contains: n("\\[", "\\]")
        },
        {
          begin: "%q\\{",
          end: /\}/,
          contains: n(/\{/, /\}/)
        },
        {
          begin: "%q<",
          end: ">",
          contains: n("<", ">")
        },
        {
          begin: "%q\\|",
          end: "\\|"
        },
        {
          begin: /<<-'\w+'$/,
          end: /^\s*\w+$/
        }
      ],
      relevance: 0
    }, N = {
      begin: "(?!%\\})(" + e.RE_STARTERS_RE + "|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
      keywords: "case if select unless until when while",
      contains: [
        {
          className: "regexp",
          contains: [
            e.BACKSLASH_ESCAPE,
            a
          ],
          variants: [
            {
              begin: "//[a-z]*",
              relevance: 0
            },
            {
              begin: "/(?!\\/)",
              end: "/[a-z]*"
            }
          ]
        }
      ],
      relevance: 0
    }, S = {
      className: "regexp",
      contains: [
        e.BACKSLASH_ESCAPE,
        a
      ],
      variants: [
        {
          begin: "%r\\(",
          end: "\\)",
          contains: n("\\(", "\\)")
        },
        {
          begin: "%r\\[",
          end: "\\]",
          contains: n("\\[", "\\]")
        },
        {
          begin: "%r\\{",
          end: /\}/,
          contains: n(/\{/, /\}/)
        },
        {
          begin: "%r<",
          end: ">",
          contains: n("<", ">")
        },
        {
          begin: "%r\\|",
          end: "\\|"
        }
      ],
      relevance: 0
    }, m = {
      className: "meta",
      begin: "@\\[",
      end: "\\]",
      contains: [
        e.inherit(e.QUOTE_STRING_MODE, {
          className: "meta-string"
        })
      ]
    }, r = [
      b,
      l,
      T,
      S,
      N,
      m,
      e.HASH_COMMENT_MODE,
      {
        className: "class",
        beginKeywords: "class module struct",
        end: "$|;",
        illegal: /=/,
        contains: [
          e.HASH_COMMENT_MODE,
          e.inherit(e.TITLE_MODE, {
            begin: t
          }),
          {
            // relevance booster for inheritance
            begin: "<"
          }
        ]
      },
      {
        className: "class",
        beginKeywords: "lib enum union",
        end: "$|;",
        illegal: /=/,
        contains: [
          e.HASH_COMMENT_MODE,
          e.inherit(e.TITLE_MODE, {
            begin: t
          })
        ]
      },
      {
        beginKeywords: "annotation",
        end: "$|;",
        illegal: /=/,
        contains: [
          e.HASH_COMMENT_MODE,
          e.inherit(e.TITLE_MODE, {
            begin: t
          })
        ],
        relevance: 2
      },
      {
        className: "function",
        beginKeywords: "def",
        end: /\B\b/,
        contains: [
          e.inherit(e.TITLE_MODE, {
            begin: s,
            endsParent: !0
          })
        ]
      },
      {
        className: "function",
        beginKeywords: "fun macro",
        end: /\B\b/,
        contains: [
          e.inherit(e.TITLE_MODE, {
            begin: s,
            endsParent: !0
          })
        ],
        relevance: 2
      },
      {
        className: "symbol",
        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      },
      {
        className: "symbol",
        begin: ":",
        contains: [
          l,
          {
            begin: s
          }
        ],
        relevance: 0
      },
      {
        className: "number",
        variants: [
          {
            begin: "\\b0b([01_]+)" + i
          },
          {
            begin: "\\b0o([0-7_]+)" + i
          },
          {
            begin: "\\b0x([A-Fa-f0-9_]+)" + i
          },
          {
            begin: "\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?" + E + "(?!_)"
          },
          {
            begin: "\\b([1-9][0-9_]*|0)" + i
          }
        ],
        relevance: 0
      }
    ];
    return a.contains = r, b.contains = r.slice(1), {
      name: "Crystal",
      aliases: ["cr"],
      keywords: c,
      contains: r
    };
  }
  return _ = g, _;
}
export {
  f as __require
};
