import { __module as s } from "./ui896.mjs";
(function(e) {
  function a(f) {
    var o = Object(f), t = [];
    for (var n in o) t.unshift(n);
    return function r() {
      for (; t.length; ) if ((n = t.pop()) in o) return r.value = n, r.done = !1, r;
      return r.done = !0, r;
    };
  }
  e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
})(s);
var u = s.exports;
export {
  u as r
};
