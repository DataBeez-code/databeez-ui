import { __module as n } from "./ui897.mjs";
import { _ as i } from "./ui898.mjs";
(function(t) {
  var a = i.default;
  function f(r) {
    if (r != null) {
      var o = r[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], e = 0;
      if (o) return o.call(r);
      if (typeof r.next == "function") return r;
      if (!isNaN(r.length)) return {
        next: function() {
          return r && e >= r.length && (r = void 0), {
            value: r && r[e++],
            done: !r
          };
        }
      };
    }
    throw new TypeError(a(r) + " is not iterable");
  }
  t.exports = f, t.exports.__esModule = !0, t.exports.default = t.exports;
})(n);
var l = n.exports;
export {
  l as r
};
