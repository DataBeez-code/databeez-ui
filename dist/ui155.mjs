var r, t;
function A() {
  if (t) return r;
  t = 1;
  function o(e) {
    return e ? typeof e == "string" ? e : e.source : null;
  }
  function s(...e) {
    return e.map((a) => o(a)).join("");
  }
  function i(e) {
    const n = {
      ruleDeclaration: /^[a-zA-Z][a-zA-Z0-9-]*/,
      unexpectedChars: /[!@#$^&',?+~`|:]/
    }, a = [
      "ALPHA",
      "BIT",
      "CHAR",
      "CR",
      "CRLF",
      "CTL",
      "DIGIT",
      "DQUOTE",
      "HEXDIG",
      "HTAB",
      "LF",
      "LWSP",
      "OCTET",
      "SP",
      "VCHAR",
      "WSP"
    ], c = e.COMMENT(/;/, /$/), u = {
      className: "symbol",
      begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
    }, l = {
      className: "symbol",
      begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
    }, m = {
      className: "symbol",
      begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/
    }, d = {
      className: "symbol",
      begin: /%[si]/
    }, b = {
      className: "attribute",
      begin: s(n.ruleDeclaration, /(?=\s*=)/)
    };
    return {
      name: "Augmented Backus-Naur Form",
      illegal: n.unexpectedChars,
      keywords: a,
      contains: [
        b,
        c,
        u,
        l,
        m,
        d,
        e.QUOTE_STRING_MODE,
        e.NUMBER_MODE
      ]
    };
  }
  return r = i, r;
}
export {
  A as __require
};
