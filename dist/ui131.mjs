import R from "./ui350.mjs";
import _ from "./ui139.mjs";
import k from "./ui351.mjs";
import w from "./ui352.mjs";
import A from "./ui353.mjs";
import d from "./ui354.mjs";
import C from "./ui355.mjs";
import s from "./ui140.mjs";
import m from "./ui356.mjs";
import L from "react";
import P from "./ui126.mjs";
function x(n, r, f) {
  return r = d(r), A(n, y() ? Reflect.construct(r, f || [], d(n).constructor) : r.apply(n, f));
}
function y() {
  try {
    var n = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (y = function() {
    return !!n;
  })();
}
const N = function(n) {
  var r, f = n.loader, v = n.isLanguageRegistered, g = n.registerLanguage, c = n.languageLoaders, G = n.noAsyncLoadingLanguages, a = /* @__PURE__ */ function(i) {
    function e() {
      return k(this, e), x(this, e, arguments);
    }
    return C(e, i), w(e, [{
      key: "componentDidUpdate",
      value: function() {
        !e.isRegistered(this.props.language) && c && this.loadLanguage();
      }
    }, {
      key: "componentDidMount",
      value: function() {
        var t = this;
        e.astGeneratorPromise || e.loadAstGenerator(), e.astGenerator || e.astGeneratorPromise.then(function() {
          t.forceUpdate();
        }), !e.isRegistered(this.props.language) && c && this.loadLanguage();
      }
    }, {
      key: "loadLanguage",
      value: function() {
        var t = this, u = this.props.language;
        u !== "text" && e.loadLanguage(u).then(function() {
          return t.forceUpdate();
        }).catch(function() {
        });
      }
    }, {
      key: "normalizeLanguage",
      value: function(t) {
        return e.isSupportedLanguage(t) ? t : "text";
      }
    }, {
      key: "render",
      value: function() {
        return /* @__PURE__ */ L.createElement(e.highlightInstance, _({}, this.props, {
          language: this.normalizeLanguage(this.props.language),
          astGenerator: e.astGenerator
        }));
      }
    }], [{
      key: "preload",
      value: function() {
        return e.loadAstGenerator();
      }
    }, {
      key: "loadLanguage",
      value: function() {
        var o = R(/* @__PURE__ */ m.mark(function u(p) {
          var h;
          return m.wrap(function(l) {
            for (; ; ) switch (l.prev = l.next) {
              case 0:
                if (h = c[p], typeof h != "function") {
                  l.next = 1;
                  break;
                }
                return l.abrupt("return", h(e.registerLanguage));
              case 1:
                throw new Error("Language ".concat(p, " not supported"));
              case 2:
              case "end":
                return l.stop();
            }
          }, u);
        }));
        function t(u) {
          return o.apply(this, arguments);
        }
        return t;
      }()
    }, {
      key: "isSupportedLanguage",
      value: function(t) {
        return e.isRegistered(t) || typeof c[t] == "function";
      }
    }, {
      key: "loadAstGenerator",
      value: function() {
        return e.astGeneratorPromise = f().then(function(t) {
          e.astGenerator = t, g && e.languages.forEach(function(u, p) {
            return g(t, p, u);
          });
        }), e.astGeneratorPromise;
      }
    }]);
  }(L.PureComponent);
  return r = a, s(a, "astGenerator", null), s(a, "highlightInstance", P(null, {})), s(a, "astGeneratorPromise", null), s(a, "languages", /* @__PURE__ */ new Map()), s(a, "supportedLanguages", n.supportedLanguages || Object.keys(c || {})), s(a, "isRegistered", function(i) {
    if (G)
      return !0;
    if (!g)
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    return r.astGenerator ? v(r.astGenerator, i) : r.languages.has(i);
  }), s(a, "registerLanguage", function(i, e) {
    if (!g)
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    if (r.astGenerator)
      return g(r.astGenerator, i, e);
    r.languages.set(i, e);
  }), a;
};
export {
  N as default
};
