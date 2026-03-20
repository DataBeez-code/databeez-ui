import c from "./ui350.mjs";
import a from "./ui356.mjs";
const m = function(t, u) {
  return /* @__PURE__ */ function() {
    var o = c(/* @__PURE__ */ a.mark(function n(s) {
      var e;
      return a.wrap(function(r) {
        for (; ; ) switch (r.prev = r.next) {
          case 0:
            return r.next = 1, u();
          case 1:
            e = r.sent, s(t, e.default || e);
          case 2:
          case "end":
            return r.stop();
        }
      }, n);
    }));
    return function(n) {
      return o.apply(this, arguments);
    };
  }();
};
export {
  m as default
};
