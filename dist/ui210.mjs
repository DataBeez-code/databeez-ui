var t, u;
function S() {
  if (u) return t;
  u = 1;
  function E(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function l(e) {
    return b("(?=", e, ")");
  }
  function b(...e) {
    return e.map((n) => E(n)).join("");
  }
  function R(e) {
    const s = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", n = {
      keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
      built_in: "proc lambda",
      literal: "true false nil"
    }, o = {
      className: "doctag",
      begin: "@[A-Za-z]+"
    }, c = {
      begin: "#<",
      end: ">"
    }, i = [
      e.COMMENT(
        "#",
        "$",
        {
          contains: [o]
        }
      ),
      e.COMMENT(
        "^=begin",
        "^=end",
        {
          contains: [o],
          relevance: 10
        }
      ),
      e.COMMENT("^__END__", "\\n$")
    ], r = {
      className: "subst",
      begin: /#\{/,
      end: /\}/,
      keywords: n
    }, d = {
      className: "string",
      contains: [
        e.BACKSLASH_ESCAPE,
        r
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
          begin: /%[qQwWx]?\(/,
          end: /\)/
        },
        {
          begin: /%[qQwWx]?\[/,
          end: /\]/
        },
        {
          begin: /%[qQwWx]?\{/,
          end: /\}/
        },
        {
          begin: /%[qQwWx]?</,
          end: />/
        },
        {
          begin: /%[qQwWx]?\//,
          end: /\//
        },
        {
          begin: /%[qQwWx]?%/,
          end: /%/
        },
        {
          begin: /%[qQwWx]?-/,
          end: /-/
        },
        {
          begin: /%[qQwWx]?\|/,
          end: /\|/
        },
        // in the following expressions, \B in the beginning suppresses recognition of ?-sequences
        // where ? is the last character of a preceding identifier, as in: `func?4`
        {
          begin: /\B\?(\\\d{1,3})/
        },
        {
          begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/
        },
        {
          begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/
        },
        {
          begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/
        },
        {
          begin: /\B\?\\(c|C-)[\x20-\x7e]/
        },
        {
          begin: /\B\?\\?\S/
        },
        {
          // heredocs
          begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/,
          returnBegin: !0,
          contains: [
            {
              begin: /<<[-~]?'?/
            },
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              contains: [
                e.BACKSLASH_ESCAPE,
                r
              ]
            })
          ]
        }
      ]
    }, N = "[1-9](_?[0-9])*|0", g = "[0-9](_?[0-9])*", A = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal integer/float, optionally exponential or rational, optionally imaginary
        {
          begin: `\\b(${N})(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b`
        },
        // explicit decimal/binary/octal/hexadecimal integer,
        // optionally rational and/or imaginary
        {
          begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
        },
        {
          begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
        },
        {
          begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"
        },
        {
          begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
        },
        // 0-prefixed implicit octal integer, optionally rational and/or imaginary
        {
          begin: "\\b0(_?[0-7])+r?i?\\b"
        }
      ]
    }, _ = {
      className: "params",
      begin: "\\(",
      end: "\\)",
      endsParent: !0,
      keywords: n
    }, a = [
      d,
      {
        className: "class",
        beginKeywords: "class module",
        end: "$|;",
        illegal: /=/,
        contains: [
          e.inherit(e.TITLE_MODE, {
            begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
          }),
          {
            begin: "<\\s*",
            contains: [
              {
                begin: "(" + e.IDENT_RE + "::)?" + e.IDENT_RE,
                // we already get points for <, we don't need poitns
                // for the name also
                relevance: 0
              }
            ]
          }
        ].concat(i)
      },
      {
        className: "function",
        // def method_name(
        // def method_name;
        // def method_name (end of line)
        begin: b(/def\s+/, l(s + "\\s*(\\(|;|$)")),
        relevance: 0,
        // relevance comes from kewords
        keywords: "def",
        end: "$|;",
        contains: [
          e.inherit(e.TITLE_MODE, {
            begin: s
          }),
          _
        ].concat(i)
      },
      {
        // swallow namespace qualifiers before symbols
        begin: e.IDENT_RE + "::"
      },
      {
        className: "symbol",
        begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
        relevance: 0
      },
      {
        className: "symbol",
        begin: ":(?!\\s)",
        contains: [
          d,
          {
            begin: s
          }
        ],
        relevance: 0
      },
      A,
      {
        // negative-look forward attemps to prevent false matches like:
        // @ident@ or $ident$ that might indicate this is not ruby at all
        className: "variable",
        begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
      },
      {
        className: "params",
        begin: /\|/,
        end: /\|/,
        relevance: 0,
        // this could be a lot of things (in other languages) other than params
        keywords: n
      },
      {
        // regexp container
        begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
        keywords: "unless",
        contains: [
          {
            className: "regexp",
            contains: [
              e.BACKSLASH_ESCAPE,
              r
            ],
            illegal: /\n/,
            variants: [
              {
                begin: "/",
                end: "/[a-z]*"
              },
              {
                begin: /%r\{/,
                end: /\}[a-z]*/
              },
              {
                begin: "%r\\(",
                end: "\\)[a-z]*"
              },
              {
                begin: "%r!",
                end: "![a-z]*"
              },
              {
                begin: "%r\\[",
                end: "\\][a-z]*"
              }
            ]
          }
        ].concat(c, i),
        relevance: 0
      }
    ].concat(c, i);
    r.contains = a, _.contains = a;
    const M = [
      {
        begin: /^\s*=>/,
        starts: {
          end: "$",
          contains: a
        }
      },
      {
        className: "meta",
        begin: "^(" + "[>?]>" + "|" + "[\\w#]+\\(\\w+\\):\\d+:\\d+>" + "|" + "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>" + ")(?=[ ])",
        starts: {
          end: "$",
          contains: a
        }
      }
    ];
    return i.unshift(c), {
      name: "Ruby",
      aliases: [
        "rb",
        "gemspec",
        "podspec",
        "thor",
        "irb"
      ],
      keywords: n,
      illegal: /\/\*/,
      contains: [
        e.SHEBANG({
          binary: "ruby"
        })
      ].concat(M).concat(i).concat(a)
    };
  }
  return t = R, t;
}
export {
  S as __require
};
