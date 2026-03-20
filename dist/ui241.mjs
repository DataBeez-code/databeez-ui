var s, _;
function N() {
  if (_) return s;
  _ = 1;
  var a = "[0-9](_*[0-9])*", r = `\\.(${a})`, i = "[0-9a-fA-F](_*[0-9a-fA-F])*", o = {
    className: "number",
    variants: [
      // DecimalFloatingPointLiteral
      // including ExponentPart
      { begin: `(\\b(${a})((${r})|\\.)?|(${r}))[eE][+-]?(${a})[fFdD]?\\b` },
      // excluding ExponentPart
      { begin: `\\b(${a})((${r})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
      { begin: `(${r})[fFdD]?\\b` },
      { begin: `\\b(${a})[fFdD]\\b` },
      // HexadecimalFloatingPointLiteral
      { begin: `\\b0[xX]((${i})\\.?|(${i})?\\.(${i}))[pP][+-]?(${a})[fFdD]?\\b` },
      // DecimalIntegerLiteral
      { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
      // HexIntegerLiteral
      { begin: `\\b0[xX](${i})[lL]?\\b` },
      // OctalIntegerLiteral
      { begin: "\\b0(_*[0-7])*[lL]?\\b" },
      // BinaryIntegerLiteral
      { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
    ],
    relevance: 0
  };
  function b(e) {
    var t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", d = t + "(<" + t + "(\\s*,\\s*" + t + ")*>)?", n = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do", E = {
      className: "meta",
      begin: "@" + t,
      contains: [
        {
          begin: /\(/,
          end: /\)/,
          contains: ["self"]
          // allow nested () inside our annotation
        }
      ]
    };
    const c = o;
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: n,
      illegal: /<\/|#/,
      contains: [
        e.COMMENT(
          "/\\*\\*",
          "\\*/",
          {
            relevance: 0,
            contains: [
              {
                // eat up @'s in emails to prevent them to be recognized as doctags
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: "doctag",
                begin: "@[A-Za-z]+"
              }
            ]
          }
        ),
        // relevance boost
        {
          begin: /import java\.[a-z]+\./,
          keywords: "import",
          relevance: 2
        },
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        {
          className: "class",
          beginKeywords: "class interface enum",
          end: /[{;=]/,
          excludeEnd: !0,
          // TODO: can this be removed somehow?
          // an extra boost because Java is more popular than other languages with
          // this same syntax feature (this is just to preserve our tests passing
          // for now)
          relevance: 1,
          keywords: "class interface enum",
          illegal: /[:"\[\]]/,
          contains: [
            { beginKeywords: "extends implements" },
            e.UNDERSCORE_TITLE_MODE
          ]
        },
        {
          // Expression keywords prevent 'keyword Name(...)' from being
          // recognized as a function definition
          beginKeywords: "new throw return else",
          relevance: 0
        },
        {
          className: "class",
          begin: "record\\s+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          excludeEnd: !0,
          end: /[{;=]/,
          keywords: n,
          contains: [
            { beginKeywords: "record" },
            {
              begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [e.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: n,
              relevance: 0,
              contains: [
                e.C_BLOCK_COMMENT_MODE
              ]
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        {
          className: "function",
          begin: "(" + d + "\\s+)+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
          returnBegin: !0,
          end: /[{;=]/,
          excludeEnd: !0,
          keywords: n,
          contains: [
            {
              begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
              returnBegin: !0,
              relevance: 0,
              contains: [e.UNDERSCORE_TITLE_MODE]
            },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: n,
              relevance: 0,
              contains: [
                E,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                c,
                e.C_BLOCK_COMMENT_MODE
              ]
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE
          ]
        },
        c,
        E
      ]
    };
  }
  return s = b, s;
}
export {
  N as __require
};
