var e, s;
function r() {
  if (s) return e;
  s = 1;
  function a(n) {
    return {
      name: "Shell Session",
      aliases: ["console"],
      contains: [
        {
          className: "meta",
          // We cannot add \s (spaces) in the regular expression otherwise it will be too broad and produce unexpected result.
          // For instance, in the following example, it would match "echo /path/to/home >" as a prompt:
          // echo /path/to/home > t.exe
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
          starts: {
            end: /[^\\](?=\s*$)/,
            subLanguage: "bash"
          }
        }
      ]
    };
  }
  return e = a, e;
}
export {
  r as __require
};
