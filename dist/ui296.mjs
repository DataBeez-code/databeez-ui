var c, u;
function y() {
  if (u) return c;
  u = 1;
  function _(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function g(e) {
    return E("(?=", e, ")");
  }
  function E(...e) {
    return e.map((b) => _(b)).join("");
  }
  function S(e) {
    const i = {
      $pattern: /[A-Za-z]\w+|__\w+__/,
      keyword: [
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "nonlocal|10",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield"
      ],
      built_in: [
        "__import__",
        "abs",
        "all",
        "any",
        "ascii",
        "bin",
        "bool",
        "breakpoint",
        "bytearray",
        "bytes",
        "callable",
        "chr",
        "classmethod",
        "compile",
        "complex",
        "delattr",
        "dict",
        "dir",
        "divmod",
        "enumerate",
        "eval",
        "exec",
        "filter",
        "float",
        "format",
        "frozenset",
        "getattr",
        "globals",
        "hasattr",
        "hash",
        "help",
        "hex",
        "id",
        "input",
        "int",
        "isinstance",
        "issubclass",
        "iter",
        "len",
        "list",
        "locals",
        "map",
        "max",
        "memoryview",
        "min",
        "next",
        "object",
        "oct",
        "open",
        "ord",
        "pow",
        "print",
        "property",
        "range",
        "repr",
        "reversed",
        "round",
        "set",
        "setattr",
        "slice",
        "sorted",
        "staticmethod",
        "str",
        "sum",
        "super",
        "tuple",
        "type",
        "vars",
        "zip"
      ],
      literal: [
        "__debug__",
        "Ellipsis",
        "False",
        "None",
        "NotImplemented",
        "True"
      ],
      type: [
        "Any",
        "Callable",
        "Coroutine",
        "Dict",
        "List",
        "Literal",
        "Generic",
        "Optional",
        "Sequence",
        "Set",
        "Tuple",
        "Type",
        "Union"
      ]
    }, n = {
      className: "meta",
      begin: /^(>>>|\.\.\.) /
    }, a = {
      className: "subst",
      begin: /\{/,
      end: /\}/,
      keywords: i,
      illegal: /#/
    }, r = {
      begin: /\{\{/,
      relevance: 0
    }, s = {
      className: "string",
      contains: [e.BACKSLASH_ESCAPE],
      variants: [
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            n
          ],
          relevance: 10
        },
        {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            n
          ],
          relevance: 10
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [
            e.BACKSLASH_ESCAPE,
            n,
            r,
            a
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [
            e.BACKSLASH_ESCAPE,
            n,
            r,
            a
          ]
        },
        {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        },
        {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        },
        {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [
            e.BACKSLASH_ESCAPE,
            r,
            a
          ]
        },
        {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [
            e.BACKSLASH_ESCAPE,
            r,
            a
          ]
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE
      ]
    }, t = "[0-9](_?[0-9])*", l = `(\\b(${t}))?\\.(${t})|\\b(${t})\\.`, o = {
      className: "number",
      relevance: 0,
      variants: [
        // exponentfloat, pointfloat
        // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
        // optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        // Note: no leading \b because floats can start with a decimal point
        // and we don't want to mishandle e.g. `fn(.5)`,
        // no trailing \b for pointfloat because it can end with a decimal point
        // and we don't want to mishandle e.g. `0..hex()`; this should be safe
        // because both MUST contain a decimal point and so cannot be confused with
        // the interior part of an identifier
        {
          begin: `(\\b(${t})|(${l}))[eE][+-]?(${t})[jJ]?\\b`
        },
        {
          begin: `(${l})[jJ]?`
        },
        // decinteger, bininteger, octinteger, hexinteger
        // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
        // optionally "long" in Python 2
        // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
        // decinteger is optionally imaginary
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"
        },
        {
          begin: "\\b0[bB](_?[01])+[lL]?\\b"
        },
        {
          begin: "\\b0[oO](_?[0-7])+[lL]?\\b"
        },
        {
          begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"
        },
        // imagnumber (digitpart-based)
        // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
        {
          begin: `\\b(${t})[jJ]\\b`
        }
      ]
    }, R = {
      className: "comment",
      begin: g(/# type:/),
      end: /$/,
      keywords: i,
      contains: [
        {
          // prevent keywords from coloring `type`
          begin: /# type:/
        },
        // comment within a datatype comment includes no keywords
        {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }
      ]
    }, d = {
      className: "params",
      variants: [
        // Exclude params in functions without params
        {
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        },
        {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: i,
          contains: [
            "self",
            n,
            o,
            s,
            e.HASH_COMMENT_MODE
          ]
        }
      ]
    };
    return a.contains = [
      s,
      o,
      n
    ], {
      name: "Python",
      aliases: [
        "py",
        "gyp",
        "ipython"
      ],
      keywords: i,
      illegal: /(<\/|->|\?)|=>/,
      contains: [
        n,
        o,
        {
          // very common convention
          begin: /\bself\b/
        },
        {
          // eat "if" prior to string so that it won't accidentally be
          // labeled as an f-string
          beginKeywords: "if",
          relevance: 0
        },
        s,
        R,
        e.HASH_COMMENT_MODE,
        {
          variants: [
            {
              className: "function",
              beginKeywords: "def"
            },
            {
              className: "class",
              beginKeywords: "class"
            }
          ],
          end: /:/,
          illegal: /[${=;\n,]/,
          contains: [
            e.UNDERSCORE_TITLE_MODE,
            d,
            {
              begin: /->/,
              endsWithParent: !0,
              keywords: i
            }
          ]
        },
        {
          className: "meta",
          begin: /^[\t ]*@/,
          end: /(?=#)|$/,
          contains: [
            o,
            d,
            s
          ]
        }
      ]
    };
  }
  return c = S, c;
}
export {
  y as __require
};
