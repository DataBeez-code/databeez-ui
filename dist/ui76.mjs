import e from "./ui131.mjs";
import n from "./ui138.mjs";
const s = e({
  loader: function() {
    return import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-import" */
      "./ui137.mjs"
      // Import all languages from refractor
    ).then(function(r) {
      return r.refractor;
    });
  },
  noAsyncLoadingLanguages: !0,
  supportedLanguages: n
});
export {
  s as default
};
