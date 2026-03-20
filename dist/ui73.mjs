import a from "./ui131.mjs";
import g from "./ui132.mjs";
import i from "./ui133.mjs";
const c = a({
  loader: function() {
    return import(
      /* webpackChunkName:"react-syntax-highlighter/lowlight-import" */
      "./ui130.mjs"
    ).then((e) => e.c).then(function(e) {
      return e.default || e;
    });
  },
  isLanguageRegistered: function(e, r) {
    return !!i(e, r);
  },
  languageLoaders: g,
  registerLanguage: function(e, r, n) {
    return e.registerLanguage(r, n);
  }
});
export {
  c as default
};
