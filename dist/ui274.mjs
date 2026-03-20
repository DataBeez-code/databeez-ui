var n, s;
function u() {
  if (s) return n;
  s = 1;
  function a(e) {
    const i = {
      keyword: "rec with let in inherit assert if else then",
      literal: "true false or and null",
      built_in: "import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation"
    }, t = {
      className: "subst",
      begin: /\$\{/,
      end: /\}/,
      keywords: i
    }, o = {
      begin: /[a-zA-Z0-9-_]+(\s*=)/,
      returnBegin: !0,
      relevance: 0,
      contains: [
        {
          className: "attr",
          begin: /\S+/
        }
      ]
    }, c = {
      className: "string",
      contains: [t],
      variants: [
        {
          begin: "''",
          end: "''"
        },
        {
          begin: '"',
          end: '"'
        }
      ]
    }, r = [
      e.NUMBER_MODE,
      e.HASH_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      c,
      o
    ];
    return t.contains = r, {
      name: "Nix",
      aliases: ["nixos"],
      keywords: i,
      contains: r
    };
  }
  return n = a, n;
}
export {
  u as __require
};
