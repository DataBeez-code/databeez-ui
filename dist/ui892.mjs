import { __module as p } from "./ui914.mjs";
(function(e) {
  function r(x, u, c, _) {
    var t = Object.defineProperty;
    try {
      t({}, "", {});
    } catch {
      t = 0;
    }
    e.exports = r = function(n, o, s, i) {
      function a(f, b) {
        r(n, f, function(v) {
          return this._invoke(f, b, v);
        });
      }
      o ? t ? t(n, o, {
        value: s,
        enumerable: !i,
        configurable: !i,
        writable: !i
      }) : n[o] = s : (a("next", 0), a("throw", 1), a("return", 2));
    }, e.exports.__esModule = !0, e.exports.default = e.exports, r(x, u, c, _);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(p);
var h = p.exports;
export {
  h as r
};
