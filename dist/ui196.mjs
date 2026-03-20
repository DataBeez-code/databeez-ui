var c, o;
function L() {
  if (o) return c;
  o = 1;
  function u(n) {
    return n ? typeof n == "string" ? n : n.source : null;
  }
  function d(...n) {
    return n.map((s) => u(s)).join("");
  }
  function l(n) {
    const i = {
      begin: /<\/?[A-Za-z_]/,
      end: ">",
      subLanguage: "xml",
      relevance: 0
    }, s = {
      begin: "^[-\\*]{3,}",
      end: "$"
    }, g = {
      className: "code",
      variants: [
        // TODO: fix to allow these to work with sublanguage also
        {
          begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"
        },
        {
          begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
        },
        // needed to allow markdown as a sublanguage to work
        {
          begin: "```",
          end: "```+[ ]*$"
        },
        {
          begin: "~~~",
          end: "~~~+[ ]*$"
        },
        {
          begin: "`.+?`"
        },
        {
          begin: "(?=^( {4}|\\t))",
          // use contains to gobble up multiple lines to allow the block to be whatever size
          // but only have a single open/close tag vs one per line
          contains: [
            {
              begin: "^( {4}|\\t)",
              end: "(\\n)$"
            }
          ],
          relevance: 0
        }
      ]
    }, b = {
      className: "bullet",
      begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
      end: "\\s+",
      excludeEnd: !0
    }, m = {
      begin: /^\[[^\n]+\]:/,
      returnBegin: !0,
      contains: [
        {
          className: "symbol",
          begin: /\[/,
          end: /\]/,
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "link",
          begin: /:\s*/,
          end: /$/,
          excludeBegin: !0
        }
      ]
    }, r = {
      variants: [
        // too much like nested array access in so many languages
        // to have any real relevance
        {
          begin: /\[.+?\]\[.*?\]/,
          relevance: 0
        },
        // popular internet URLs
        {
          begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
          relevance: 2
        },
        {
          begin: d(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
          relevance: 2
        },
        // relative urls
        {
          begin: /\[.+?\]\([./?&#].*?\)/,
          relevance: 1
        },
        // whatever else, lower relevance (might not be a link at all)
        {
          begin: /\[.+?\]\(.*?\)/,
          relevance: 0
        }
      ],
      returnBegin: !0,
      contains: [
        {
          className: "string",
          relevance: 0,
          begin: "\\[",
          end: "\\]",
          excludeBegin: !0,
          returnEnd: !0
        },
        {
          className: "link",
          relevance: 0,
          begin: "\\]\\(",
          end: "\\)",
          excludeBegin: !0,
          excludeEnd: !0
        },
        {
          className: "symbol",
          relevance: 0,
          begin: "\\]\\[",
          end: "\\]",
          excludeBegin: !0,
          excludeEnd: !0
        }
      ]
    }, a = {
      className: "strong",
      contains: [],
      // defined later
      variants: [
        {
          begin: /_{2}/,
          end: /_{2}/
        },
        {
          begin: /\*{2}/,
          end: /\*{2}/
        }
      ]
    }, t = {
      className: "emphasis",
      contains: [],
      // defined later
      variants: [
        {
          begin: /\*(?!\*)/,
          end: /\*/
        },
        {
          begin: /_(?!_)/,
          end: /_/,
          relevance: 0
        }
      ]
    };
    a.contains.push(t), t.contains.push(a);
    let e = [
      i,
      r
    ];
    return a.contains = a.contains.concat(e), t.contains = t.contains.concat(e), e = e.concat(a, t), {
      name: "Markdown",
      aliases: [
        "md",
        "mkdown",
        "mkd"
      ],
      contains: [
        {
          className: "section",
          variants: [
            {
              begin: "^#{1,6}",
              end: "$",
              contains: e
            },
            {
              begin: "(?=^.+?\\n[=-]{2,}$)",
              contains: [
                {
                  begin: "^[=-]*$"
                },
                {
                  begin: "^",
                  end: "\\n",
                  contains: e
                }
              ]
            }
          ]
        },
        i,
        b,
        a,
        t,
        {
          className: "quote",
          begin: "^>\\s+",
          contains: e,
          end: "$"
        },
        g,
        s,
        r,
        m
      ]
    };
  }
  return c = l, c;
}
export {
  L as __require
};
