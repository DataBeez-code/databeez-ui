import { __module as n } from "./ui893.mjs";
import { r as f } from "./ui868.mjs";
(function(r) {
  var o = f;
  function s(a, p, x, c, u) {
    var e = o(a, p, x, c, u);
    return e.next().then(function(t) {
      return t.done ? t.value : e.next();
    });
  }
  r.exports = s, r.exports.__esModule = !0, r.exports.default = r.exports;
})(n);
var y = n.exports;
export {
  y as r
};
