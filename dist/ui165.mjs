var c, _;
function E() {
  if (_) return c;
  _ = 1;
  function o(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function l(e) {
    return n("(?=", e, ")");
  }
  function d(e) {
    return n("(", e, ")?");
  }
  function n(...e) {
    return e.map((s) => o(s)).join("");
  }
  function b(...e) {
    return "(" + e.map((s) => o(s)).join("|") + ")";
  }
  function N(e) {
    const a = n(/[A-Z_]/, d(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/), s = /[A-Za-z0-9._:-]+/, t = {
      className: "symbol",
      begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
    }, i = {
      begin: /\s/,
      contains: [
        {
          className: "meta-keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }
      ]
    }, m = e.inherit(i, {
      begin: /\(/,
      end: /\)/
    }), g = e.inherit(e.APOS_STRING_MODE, {
      className: "meta-string"
    }), u = e.inherit(e.QUOTE_STRING_MODE, {
      className: "meta-string"
    }), r = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: s,
          relevance: 0
        },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: "string",
              endsParent: !0,
              variants: [
                {
                  begin: /"/,
                  end: /"/,
                  contains: [t]
                },
                {
                  begin: /'/,
                  end: /'/,
                  contains: [t]
                },
                {
                  begin: /[^\s"'=<>`]+/
                }
              ]
            }
          ]
        }
      ]
    };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg"
      ],
      case_insensitive: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            i,
            u,
            g,
            m,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [
                    i,
                    m,
                    u,
                    g
                  ]
                }
              ]
            }
          ]
        },
        e.COMMENT(
          /<!--/,
          /-->/,
          {
            relevance: 10
          }
        ),
        {
          begin: /<!\[CDATA\[/,
          end: /\]\]>/,
          relevance: 10
        },
        t,
        {
          className: "meta",
          begin: /<\?xml/,
          end: /\?>/,
          relevance: 10
        },
        {
          className: "tag",
          /*
          The lookahead pattern (?=...) ensures that 'begin' only matches
          '<style' as a single word, followed by a whitespace or an
          ending braket. The '$' is needed for the lexeme to be recognized
          by hljs.subMode() that tests lexemes outside the stream.
          */
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: {
            name: "style"
          },
          contains: [r],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: [
              "css",
              "xml"
            ]
          }
        },
        {
          className: "tag",
          // See the comment in the <style tag about the lookahead pattern
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: {
            name: "script"
          },
          contains: [r],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: [
              "javascript",
              "handlebars",
              "xml"
            ]
          }
        },
        // we need this for now for jSX
        {
          className: "tag",
          begin: /<>|<\/>/
        },
        // open tag
        {
          className: "tag",
          begin: n(
            /</,
            l(n(
              a,
              // <tag/>
              // <tag>
              // <tag ...
              b(/\/>/, />/, /\s/)
            ))
          ),
          end: /\/?>/,
          contains: [
            {
              className: "name",
              begin: a,
              relevance: 0,
              starts: r
            }
          ]
        },
        // close tag
        {
          className: "tag",
          begin: n(
            /<\//,
            l(n(
              a,
              />/
            ))
          ),
          contains: [
            {
              className: "name",
              begin: a,
              relevance: 0
            },
            {
              begin: />/,
              relevance: 0,
              endsParent: !0
            }
          ]
        }
      ]
    };
  }
  return c = N, c;
}
export {
  E as __require
};
