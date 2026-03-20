var C, q;
function he() {
  if (q) return C;
  q = 1;
  function g(t) {
    return t ? typeof t == "string" ? t : t.source : null;
  }
  function i(t) {
    return e("(?=", t, ")");
  }
  function e(...t) {
    return t.map((d) => g(d)).join("");
  }
  function a(...t) {
    return "(" + t.map((d) => g(d)).join("|") + ")";
  }
  const T = (t) => e(
    /\b/,
    t,
    /\w$/.test(t) ? /\b/ : /\B/
  ), O = [
    "Protocol",
    // contextual
    "Type"
    // contextual
  ].map(T), h = [
    "init",
    "self"
  ].map(T), H = [
    "Any",
    "Self"
  ], w = [
    // strings below will be fed into the regular `keywords` engine while regex
    // will result in additional modes being created to scan for those keywords to
    // avoid conflicts with other rules
    "associatedtype",
    "async",
    "await",
    /as\?/,
    // operator
    /as!/,
    // operator
    "as",
    // operator
    "break",
    "case",
    "catch",
    "class",
    "continue",
    "convenience",
    // contextual
    "default",
    "defer",
    "deinit",
    "didSet",
    // contextual
    "do",
    "dynamic",
    // contextual
    "else",
    "enum",
    "extension",
    "fallthrough",
    /fileprivate\(set\)/,
    "fileprivate",
    "final",
    // contextual
    "for",
    "func",
    "get",
    // contextual
    "guard",
    "if",
    "import",
    "indirect",
    // contextual
    "infix",
    // contextual
    /init\?/,
    /init!/,
    "inout",
    /internal\(set\)/,
    "internal",
    "in",
    "is",
    // operator
    "lazy",
    // contextual
    "let",
    "mutating",
    // contextual
    "nonmutating",
    // contextual
    /open\(set\)/,
    // contextual
    "open",
    // contextual
    "operator",
    "optional",
    // contextual
    "override",
    // contextual
    "postfix",
    // contextual
    "precedencegroup",
    "prefix",
    // contextual
    /private\(set\)/,
    "private",
    "protocol",
    /public\(set\)/,
    "public",
    "repeat",
    "required",
    // contextual
    "rethrows",
    "return",
    "set",
    // contextual
    "some",
    // contextual
    "static",
    "struct",
    "subscript",
    "super",
    "switch",
    "throws",
    "throw",
    /try\?/,
    // operator
    /try!/,
    // operator
    "try",
    // operator
    "typealias",
    /unowned\(safe\)/,
    // contextual
    /unowned\(unsafe\)/,
    // contextual
    "unowned",
    // contextual
    "var",
    "weak",
    // contextual
    "where",
    "while",
    "willSet"
    // contextual
  ], S = [
    "false",
    "nil",
    "true"
  ], z = [
    "assignment",
    "associativity",
    "higherThan",
    "left",
    "lowerThan",
    "none",
    "right"
  ], j = [
    "#colorLiteral",
    "#column",
    "#dsohandle",
    "#else",
    "#elseif",
    "#endif",
    "#error",
    "#file",
    "#fileID",
    "#fileLiteral",
    "#filePath",
    "#function",
    "#if",
    "#imageLiteral",
    "#keyPath",
    "#line",
    "#selector",
    "#sourceLocation",
    "#warn_unqualified_access",
    "#warning"
  ], v = [
    "abs",
    "all",
    "any",
    "assert",
    "assertionFailure",
    "debugPrint",
    "dump",
    "fatalError",
    "getVaList",
    "isKnownUniquelyReferenced",
    "max",
    "min",
    "numericCast",
    "pointwiseMax",
    "pointwiseMin",
    "precondition",
    "preconditionFailure",
    "print",
    "readLine",
    "repeatElement",
    "sequence",
    "stride",
    "swap",
    "swift_unboxFromSwiftValueWithType",
    "transcode",
    "type",
    "unsafeBitCast",
    "unsafeDowncast",
    "withExtendedLifetime",
    "withUnsafeMutablePointer",
    "withUnsafePointer",
    "withVaList",
    "withoutActuallyEscaping",
    "zip"
  ], D = a(
    /[/=\-+!*%<>&|^~?]/,
    /[\u00A1-\u00A7]/,
    /[\u00A9\u00AB]/,
    /[\u00AC\u00AE]/,
    /[\u00B0\u00B1]/,
    /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
    /[\u2016-\u2017]/,
    /[\u2020-\u2027]/,
    /[\u2030-\u203E]/,
    /[\u2041-\u2053]/,
    /[\u2055-\u205E]/,
    /[\u2190-\u23FF]/,
    /[\u2500-\u2775]/,
    /[\u2794-\u2BFF]/,
    /[\u2E00-\u2E7F]/,
    /[\u3001-\u3003]/,
    /[\u3008-\u3020]/,
    /[\u3030]/
  ), P = a(
    D,
    /[\u0300-\u036F]/,
    /[\u1DC0-\u1DFF]/,
    /[\u20D0-\u20FF]/,
    /[\uFE00-\uFE0F]/,
    /[\uFE20-\uFE2F]/
    // TODO: The following characters are also allowed, but the regex isn't supported yet.
    // /[\u{E0100}-\u{E01EF}]/u
  ), _ = e(D, P, "*"), M = a(
    /[a-zA-Z_]/,
    /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
    /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
    /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
    /[\u1E00-\u1FFF]/,
    /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
    /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
    /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
    /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
    /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
    /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    // Should be /[\uFE47-\uFFFD]/, but we have to exclude FEFF.
    // The following characters are also allowed, but the regexes aren't supported yet.
    // /[\u{10000}-\u{1FFFD}\u{20000-\u{2FFFD}\u{30000}-\u{3FFFD}\u{40000}-\u{4FFFD}]/u,
    // /[\u{50000}-\u{5FFFD}\u{60000-\u{6FFFD}\u{70000}-\u{7FFFD}\u{80000}-\u{8FFFD}]/u,
    // /[\u{90000}-\u{9FFFD}\u{A0000-\u{AFFFD}\u{B0000}-\u{BFFFD}\u{C0000}-\u{CFFFD}]/u,
    // /[\u{D0000}-\u{DFFFD}\u{E0000-\u{EFFFD}]/u
  ), F = a(
    M,
    /\d/,
    /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/
  ), s = e(M, F, "*"), y = e(/[A-Z]/, F, "*"), V = [
    "autoclosure",
    e(/convention\(/, a("swift", "block", "c"), /\)/),
    "discardableResult",
    "dynamicCallable",
    "dynamicMemberLookup",
    "escaping",
    "frozen",
    "GKInspectable",
    "IBAction",
    "IBDesignable",
    "IBInspectable",
    "IBOutlet",
    "IBSegueAction",
    "inlinable",
    "main",
    "nonobjc",
    "NSApplicationMain",
    "NSCopying",
    "NSManaged",
    e(/objc\(/, s, /\)/),
    "objc",
    "objcMembers",
    "propertyWrapper",
    "requires_stored_property_inits",
    "testable",
    "UIApplicationMain",
    "unknown",
    "usableFromInline"
  ], Z = [
    "iOS",
    "iOSApplicationExtension",
    "macOS",
    "macOSApplicationExtension",
    "macCatalyst",
    "macCatalystApplicationExtension",
    "watchOS",
    "watchOSApplicationExtension",
    "tvOS",
    "tvOSApplicationExtension",
    "swift"
  ];
  function X(t) {
    const E = {
      match: /\s+/,
      relevance: 0
    }, d = t.COMMENT(
      "/\\*",
      "\\*/",
      {
        contains: ["self"]
      }
    ), o = [
      t.C_LINE_COMMENT_MODE,
      d
    ], J = {
      className: "keyword",
      begin: e(/\./, i(a(...O, ...h))),
      end: a(...O, ...h),
      excludeBegin: !0
    }, Q = {
      // Consume .keyword to prevent highlighting properties and methods as keywords.
      match: e(/\./, a(...w)),
      relevance: 0
    }, ee = w.filter((n) => typeof n == "string").concat(["_|0"]), ne = w.filter((n) => typeof n != "string").concat(H).map(T), te = {
      variants: [
        {
          className: "keyword",
          match: a(...ne, ...h)
        }
      ]
    }, u = {
      $pattern: a(
        /\b\w+/,
        // regular keywords
        /#\w+/
        // number keywords
      ),
      keyword: ee.concat(j),
      literal: S
    }, r = [
      J,
      Q,
      te
    ], ae = {
      // Consume .built_in to prevent highlighting properties and methods.
      match: e(/\./, a(...v)),
      relevance: 0
    }, se = {
      className: "built_in",
      match: e(/\b/, a(...v), /(?=\()/)
    }, I = [
      ae,
      se
    ], B = {
      // Prevent -> from being highlighting as an operator.
      match: /->/,
      relevance: 0
    }, ce = {
      className: "operator",
      relevance: 0,
      variants: [
        {
          match: _
        },
        {
          // dot-operator: only operators that start with a dot are allowed to use dots as
          // characters (..., ...<, .*, etc). So there rule here is: a dot followed by one or more
          // characters that may also include dots.
          match: `\\.(\\.|${P})+`
        }
      ]
    }, p = [
      B,
      ce
    ], b = "([0-9]_*)+", L = "([0-9a-fA-F]_*)+", m = {
      className: "number",
      relevance: 0,
      variants: [
        // decimal floating-point-literal (subsumes decimal-literal)
        {
          match: `\\b(${b})(\\.(${b}))?([eE][+-]?(${b}))?\\b`
        },
        // hexadecimal floating-point-literal (subsumes hexadecimal-literal)
        {
          match: `\\b0x(${L})(\\.(${L}))?([pP][+-]?(${b}))?\\b`
        },
        // octal-literal
        {
          match: /\b0o([0-7]_*)+\b/
        },
        // binary-literal
        {
          match: /\b0b([01]_*)+\b/
        }
      ]
    }, U = (n = "") => ({
      className: "subst",
      variants: [
        {
          match: e(/\\/, n, /[0\\tnr"']/)
        },
        {
          match: e(/\\/, n, /u\{[0-9a-fA-F]{1,8}\}/)
        }
      ]
    }), ie = (n = "") => ({
      className: "subst",
      match: e(/\\/, n, /[\t ]*(?:[\r\n]|\r\n)/)
    }), k = (n = "") => ({
      className: "subst",
      label: "interpol",
      begin: e(/\\/, n, /\(/),
      end: /\)/
    }), f = (n = "") => ({
      begin: e(n, /"""/),
      end: e(/"""/, n),
      contains: [
        U(n),
        ie(n),
        k(n)
      ]
    }), N = (n = "") => ({
      begin: e(n, /"/),
      end: e(/"/, n),
      contains: [
        U(n),
        k(n)
      ]
    }), l = {
      className: "string",
      variants: [
        f(),
        f("#"),
        f("##"),
        f("###"),
        N(),
        N("#"),
        N("##"),
        N("###")
      ]
    }, K = {
      match: e(/`/, s, /`/)
    }, oe = {
      className: "variable",
      match: /\$\d+/
    }, ue = {
      className: "variable",
      match: `\\$${F}+`
    }, R = [
      K,
      oe,
      ue
    ], re = {
      match: /(@|#)available/,
      className: "keyword",
      starts: {
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            keywords: Z,
            contains: [
              ...p,
              m,
              l
            ]
          }
        ]
      }
    }, le = {
      className: "keyword",
      match: e(/@/, a(...V))
    }, Ee = {
      className: "meta",
      match: e(/@/, s)
    }, A = [
      re,
      le,
      Ee
    ], c = {
      match: i(/\b[A-Z]/),
      relevance: 0,
      contains: [
        {
          // Common Apple frameworks, for relevance boost
          className: "type",
          match: e(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, F, "+")
        },
        {
          // Type identifier
          className: "type",
          match: y,
          relevance: 0
        },
        {
          // Optional type
          match: /[?!]+/,
          relevance: 0
        },
        {
          // Variadic parameter
          match: /\.\.\./,
          relevance: 0
        },
        {
          // Protocol composition
          match: e(/\s+&\s+/, i(y)),
          relevance: 0
        }
      ]
    }, de = {
      begin: /</,
      end: />/,
      keywords: u,
      contains: [
        ...o,
        ...r,
        ...A,
        B,
        c
      ]
    };
    c.contains.push(de);
    const pe = {
      match: e(s, /\s*:/),
      keywords: "_|0",
      relevance: 0
    }, x = {
      begin: /\(/,
      end: /\)/,
      relevance: 0,
      keywords: u,
      contains: [
        "self",
        pe,
        ...o,
        ...r,
        ...I,
        ...p,
        m,
        l,
        ...R,
        ...A,
        c
      ]
    }, me = {
      beginKeywords: "func",
      contains: [
        {
          className: "title",
          match: a(K.match, s, _),
          // Required to make sure the opening < of the generic parameter clause
          // isn't parsed as a second title.
          endsParent: !0,
          relevance: 0
        },
        E
      ]
    }, G = {
      begin: /</,
      end: />/,
      contains: [
        ...o,
        c
      ]
    }, Fe = {
      begin: a(
        i(e(s, /\s*:/)),
        i(e(s, /\s+/, s, /\s*:/))
      ),
      end: /:/,
      relevance: 0,
      contains: [
        {
          className: "keyword",
          match: /\b_\b/
        },
        {
          className: "params",
          match: s
        }
      ]
    }, $ = {
      begin: /\(/,
      end: /\)/,
      keywords: u,
      contains: [
        Fe,
        ...o,
        ...r,
        ...p,
        m,
        l,
        ...A,
        c,
        x
      ],
      endsParent: !0,
      illegal: /["']/
    }, be = {
      className: "function",
      match: i(/\bfunc\b/),
      contains: [
        me,
        G,
        $,
        E
      ],
      illegal: [
        /\[/,
        /%/
      ]
    }, fe = {
      className: "function",
      match: /\b(subscript|init[?!]?)\s*(?=[<(])/,
      keywords: {
        keyword: "subscript init init? init!",
        $pattern: /\w+[?!]?/
      },
      contains: [
        G,
        $,
        E
      ],
      illegal: /\[|%/
    }, Ne = {
      beginKeywords: "operator",
      end: t.MATCH_NOTHING_RE,
      contains: [
        {
          className: "title",
          match: _,
          endsParent: !0,
          relevance: 0
        }
      ]
    }, Ae = {
      beginKeywords: "precedencegroup",
      end: t.MATCH_NOTHING_RE,
      contains: [
        {
          className: "title",
          match: y,
          relevance: 0
        },
        {
          begin: /{/,
          end: /}/,
          relevance: 0,
          endsParent: !0,
          keywords: [
            ...z,
            ...S
          ],
          contains: [c]
        }
      ]
    };
    for (const n of l.variants) {
      const W = n.contains.find((Te) => Te.label === "interpol");
      W.keywords = u;
      const Y = [
        ...r,
        ...I,
        ...p,
        m,
        l,
        ...R
      ];
      W.contains = [
        ...Y,
        {
          begin: /\(/,
          end: /\)/,
          contains: [
            "self",
            ...Y
          ]
        }
      ];
    }
    return {
      name: "Swift",
      keywords: u,
      contains: [
        ...o,
        be,
        fe,
        {
          className: "class",
          beginKeywords: "struct protocol class extension enum",
          end: "\\{",
          excludeEnd: !0,
          keywords: u,
          contains: [
            t.inherit(t.TITLE_MODE, {
              begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
            }),
            ...r
          ]
        },
        Ne,
        Ae,
        {
          beginKeywords: "import",
          end: /$/,
          contains: [...o],
          relevance: 0
        },
        ...r,
        ...I,
        ...p,
        m,
        l,
        ...R,
        ...A,
        c,
        x
      ]
    };
  }
  return C = X, C;
}
export {
  he as __require
};
