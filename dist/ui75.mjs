import a from "./ui131.mjs";
import g from "./ui136.mjs";
const s = a({
  loader: function() {
    return import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-core-import" */
      "./ui135.mjs"
    ).then(function(e) {
      return e.refractor;
    });
  },
  isLanguageRegistered: function(e, t) {
    return e.registered(t);
  },
  languageLoaders: g,
  registerLanguage: function(e, t, n) {
    return e.register(n);
  }
});
export {
  s as default
};
