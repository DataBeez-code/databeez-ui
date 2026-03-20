import e from "./ui126.mjs";
import { refractor as t } from "./ui135.mjs";
var a = e(t, {});
a.registerLanguage = function(i, r) {
  return t.register(r);
};
a.alias = function(i, r) {
  return t.alias(i, r);
};
export {
  a as default
};
