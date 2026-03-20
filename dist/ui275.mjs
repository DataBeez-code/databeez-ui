var e, n;
function t() {
  if (n) return e;
  n = 1;
  function r(a) {
    return {
      name: "Node REPL",
      contains: [
        {
          className: "meta",
          starts: {
            // a space separates the REPL prefix from the actual code
            // this is purely for cleaner HTML output
            end: / |$/,
            starts: {
              end: "$",
              subLanguage: "javascript"
            }
          },
          variants: [
            {
              begin: /^>(?=[ ]|$)/
            },
            {
              begin: /^\.\.\.(?=[ ]|$)/
            }
          ]
        }
      ]
    };
  }
  return e = r, e;
}
export {
  t as __require
};
