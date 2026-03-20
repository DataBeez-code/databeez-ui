var a, c;
function o() {
  if (c) return a;
  c = 1;
  function l(u) {
    var e = "[ \\t\\f]*", g = "[ \\t\\f]+", t = e + "[:=]" + e, s = g, i = "(" + t + "|" + s + ")", r = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+", n = "([^\\\\:= \\t\\f\\n]|\\\\.)+", v = {
      // skip DELIM
      end: i,
      relevance: 0,
      starts: {
        // value: everything until end of line (again, taking into account backslashes)
        className: "string",
        end: /$/,
        relevance: 0,
        contains: [
          { begin: "\\\\\\\\" },
          { begin: "\\\\\\n" }
        ]
      }
    };
    return {
      name: ".properties",
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        u.COMMENT("^\\s*[!#]", "$"),
        // key: everything until whitespace or = or : (taking into account backslashes)
        // case of a "normal" key
        {
          returnBegin: !0,
          variants: [
            { begin: r + t, relevance: 1 },
            { begin: r + s, relevance: 0 }
          ],
          contains: [
            {
              className: "attr",
              begin: r,
              endsParent: !0,
              relevance: 0
            }
          ],
          starts: v
        },
        // case of key containing non-alphanumeric chars => relevance = 0
        {
          begin: n + i,
          returnBegin: !0,
          relevance: 0,
          contains: [
            {
              className: "meta",
              begin: n,
              endsParent: !0,
              relevance: 0
            }
          ],
          starts: v
        },
        // case of an empty key
        {
          className: "attr",
          relevance: 0,
          begin: n + e + "$"
        }
      ]
    };
  }
  return a = l, a;
}
export {
  o as __require
};
