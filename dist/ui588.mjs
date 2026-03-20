import t from "./ui520.mjs";
a.displayName = "racket";
a.aliases = ["rkt"];
function a(e) {
  e.register(t), e.languages.racket = e.languages.extend("scheme", {
    "lambda-parameter": {
      // the racket lambda syntax is a lot more complex, so we won't even attempt to capture it.
      // this will just prevent false positives of the `function` pattern
      pattern: /([(\[]lambda\s+[(\[])[^()\[\]'\s]+/,
      lookbehind: !0
    }
  }), e.languages.insertBefore("racket", "string", {
    lang: {
      pattern: /^#lang.+/m,
      greedy: !0,
      alias: "keyword"
    }
  }), e.languages.rkt = e.languages.racket;
}
export {
  a as default
};
