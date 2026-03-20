var r, S;
function G() {
  if (S) return r;
  S = 1;
  function o(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function T(e) {
    return t("(", e, ")*");
  }
  function A(e) {
    return t("(", e, ")?");
  }
  function t(...e) {
    return e.map((a) => o(a)).join("");
  }
  function R(...e) {
    return "(" + e.map((a) => o(a)).join("|") + ")";
  }
  function b(e) {
    const n = {
      "builtin-name": [
        "action",
        "bindattr",
        "collection",
        "component",
        "concat",
        "debugger",
        "each",
        "each-in",
        "get",
        "hash",
        "if",
        "in",
        "input",
        "link-to",
        "loc",
        "log",
        "lookup",
        "mut",
        "outlet",
        "partial",
        "query-params",
        "render",
        "template",
        "textarea",
        "unbound",
        "unless",
        "view",
        "with",
        "yield"
      ]
    }, a = {
      literal: [
        "true",
        "false",
        "undefined",
        "null"
      ]
    }, I = /""|"[^"]+"/, O = /''|'[^']+'/, c = /\[\]|\[[^\]]+\]/, _ = /[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/, C = /(\.|\/)/, u = R(
      I,
      O,
      c,
      _
    ), H = t(
      A(/\.|\.\/|\//),
      // relative or absolute path
      u,
      T(t(
        C,
        u
      ))
    ), P = t(
      "(",
      c,
      "|",
      _,
      ")(?==)"
    ), s = {
      begin: H,
      lexemes: /[\w.\/]+/
    }, N = e.inherit(s, {
      keywords: a
    }), i = {
      begin: /\(/,
      end: /\)/
      // the "contains" is added below when all necessary sub-modes are defined
    }, M = {
      // fka "attribute-assignment", parameters of the form 'key=value'
      className: "attr",
      begin: P,
      relevance: 0,
      starts: {
        begin: /=/,
        end: /=/,
        starts: {
          contains: [
            e.NUMBER_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            N,
            i
          ]
        }
      }
    }, L = {
      // parameters of the form '{{#with x as | y |}}...{{/with}}'
      begin: /as\s+\|/,
      keywords: {
        keyword: "as"
      },
      end: /\|/,
      contains: [
        {
          // define sub-mode in order to prevent highlighting of block-parameter named "as"
          begin: /\w+/
        }
      ]
    }, E = {
      contains: [
        e.NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        L,
        M,
        N,
        i
      ],
      returnEnd: !0
      // the property "end" is defined through inheritance when the mode is used. If depends
      // on the surrounding mode, but "endsWithParent" does not work here (i.e. it includes the
      // end-token of the surrounding mode)
    }, p = e.inherit(s, {
      className: "name",
      keywords: n,
      starts: e.inherit(E, {
        end: /\)/
      })
    });
    i.contains = [p];
    const l = e.inherit(s, {
      keywords: n,
      className: "name",
      starts: e.inherit(E, {
        end: /\}\}/
      })
    }), m = e.inherit(s, {
      keywords: n,
      className: "name"
    }), d = e.inherit(s, {
      className: "name",
      keywords: n,
      starts: e.inherit(E, {
        end: /\}\}/
      })
    });
    return {
      name: "Handlebars",
      aliases: [
        "hbs",
        "html.hbs",
        "html.handlebars",
        "htmlbars"
      ],
      case_insensitive: !0,
      subLanguage: "xml",
      contains: [
        {
          begin: /\\\{\{/,
          skip: !0
        },
        {
          begin: /\\\\(?=\{\{)/,
          skip: !0
        },
        e.COMMENT(/\{\{!--/, /--\}\}/),
        e.COMMENT(/\{\{!/, /\}\}/),
        {
          // open raw block "{{{{raw}}}} content not evaluated {{{{/raw}}}}"
          className: "template-tag",
          begin: /\{\{\{\{(?!\/)/,
          end: /\}\}\}\}/,
          contains: [l],
          starts: {
            end: /\{\{\{\{\//,
            returnEnd: !0,
            subLanguage: "xml"
          }
        },
        {
          // close raw block
          className: "template-tag",
          begin: /\{\{\{\{\//,
          end: /\}\}\}\}/,
          contains: [m]
        },
        {
          // open block statement
          className: "template-tag",
          begin: /\{\{#/,
          end: /\}\}/,
          contains: [l]
        },
        {
          className: "template-tag",
          begin: /\{\{(?=else\}\})/,
          end: /\}\}/,
          keywords: "else"
        },
        {
          className: "template-tag",
          begin: /\{\{(?=else if)/,
          end: /\}\}/,
          keywords: "else if"
        },
        {
          // closing block statement
          className: "template-tag",
          begin: /\{\{\//,
          end: /\}\}/,
          contains: [m]
        },
        {
          // template variable or helper-call that is NOT html-escaped
          className: "template-variable",
          begin: /\{\{\{/,
          end: /\}\}\}/,
          contains: [d]
        },
        {
          // template variable or helper-call that is html-escaped
          className: "template-variable",
          begin: /\{\{/,
          end: /\}\}/,
          contains: [d]
        }
      ]
    };
  }
  function g(e) {
    const n = b(e);
    return n.name = "HTMLbars", e.getLanguage("handlebars") && (n.disableAutodetect = !0), n;
  }
  return r = g, r;
}
export {
  G as __require
};
