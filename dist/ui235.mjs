var t, r;
function l() {
  if (r) return t;
  r = 1;
  function c(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function u(...e) {
    return e.map((a) => c(a)).join("");
  }
  function o(e) {
    const n = "HTTP/(2|1\\.[01])", s = {
      className: "attribute",
      begin: u("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"),
      starts: {
        contains: [
          {
            className: "punctuation",
            begin: /: /,
            relevance: 0,
            starts: {
              end: "$",
              relevance: 0
            }
          }
        ]
      }
    }, i = [
      s,
      {
        begin: "\\n\\n",
        starts: { subLanguage: [], endsWithParent: !0 }
      }
    ];
    return {
      name: "HTTP",
      aliases: ["https"],
      illegal: /\S/,
      contains: [
        // response
        {
          begin: "^(?=" + n + " \\d{3})",
          end: /$/,
          contains: [
            {
              className: "meta",
              begin: n
            },
            {
              className: "number",
              begin: "\\b\\d{3}\\b"
            }
          ],
          starts: {
            end: /\b\B/,
            illegal: /\S/,
            contains: i
          }
        },
        // request
        {
          begin: "(?=^[A-Z]+ (.*?) " + n + "$)",
          end: /$/,
          contains: [
            {
              className: "string",
              begin: " ",
              end: " ",
              excludeBegin: !0,
              excludeEnd: !0
            },
            {
              className: "meta",
              begin: n
            },
            {
              className: "keyword",
              begin: "[A-Z]+"
            }
          ],
          starts: {
            end: /\b\B/,
            illegal: /\S/,
            contains: i
          }
        },
        // to allow headers to work even without a preamble
        e.inherit(s, {
          relevance: 0
        })
      ]
    };
  }
  return t = o, t;
}
export {
  l as __require
};
