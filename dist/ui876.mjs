import { styleHookSingleton as o } from "./ui917.mjs";
var s = function() {
  var e = o(), n = function(t) {
    var r = t.styles, l = t.dynamic;
    return e(r, l), null;
  };
  return n;
};
export {
  s as styleSingleton
};
