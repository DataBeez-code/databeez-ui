import S from "./ui139.mjs";
import w from "./ui140.mjs";
import C from "react";
function p(c, t) {
  var n = Object.keys(c);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(c);
    t && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(c, u).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function s(c) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? p(Object(n), !0).forEach(function(o) {
      w(c, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(o) {
      Object.defineProperty(c, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return c;
}
function E(c) {
  var t = c.length;
  if (t === 0 || t === 1) return c;
  if (t === 2)
    return [c[0], c[1], "".concat(c[0], ".").concat(c[1]), "".concat(c[1], ".").concat(c[0])];
  if (t === 3)
    return [c[0], c[1], c[2], "".concat(c[0], ".").concat(c[1]), "".concat(c[0], ".").concat(c[2]), "".concat(c[1], ".").concat(c[0]), "".concat(c[1], ".").concat(c[2]), "".concat(c[2], ".").concat(c[0]), "".concat(c[2], ".").concat(c[1]), "".concat(c[0], ".").concat(c[1], ".").concat(c[2]), "".concat(c[0], ".").concat(c[2], ".").concat(c[1]), "".concat(c[1], ".").concat(c[0], ".").concat(c[2]), "".concat(c[1], ".").concat(c[2], ".").concat(c[0]), "".concat(c[2], ".").concat(c[0], ".").concat(c[1]), "".concat(c[2], ".").concat(c[1], ".").concat(c[0])];
  if (t >= 4)
    return [c[0], c[1], c[2], c[3], "".concat(c[0], ".").concat(c[1]), "".concat(c[0], ".").concat(c[2]), "".concat(c[0], ".").concat(c[3]), "".concat(c[1], ".").concat(c[0]), "".concat(c[1], ".").concat(c[2]), "".concat(c[1], ".").concat(c[3]), "".concat(c[2], ".").concat(c[0]), "".concat(c[2], ".").concat(c[1]), "".concat(c[2], ".").concat(c[3]), "".concat(c[3], ".").concat(c[0]), "".concat(c[3], ".").concat(c[1]), "".concat(c[3], ".").concat(c[2]), "".concat(c[0], ".").concat(c[1], ".").concat(c[2]), "".concat(c[0], ".").concat(c[1], ".").concat(c[3]), "".concat(c[0], ".").concat(c[2], ".").concat(c[1]), "".concat(c[0], ".").concat(c[2], ".").concat(c[3]), "".concat(c[0], ".").concat(c[3], ".").concat(c[1]), "".concat(c[0], ".").concat(c[3], ".").concat(c[2]), "".concat(c[1], ".").concat(c[0], ".").concat(c[2]), "".concat(c[1], ".").concat(c[0], ".").concat(c[3]), "".concat(c[1], ".").concat(c[2], ".").concat(c[0]), "".concat(c[1], ".").concat(c[2], ".").concat(c[3]), "".concat(c[1], ".").concat(c[3], ".").concat(c[0]), "".concat(c[1], ".").concat(c[3], ".").concat(c[2]), "".concat(c[2], ".").concat(c[0], ".").concat(c[1]), "".concat(c[2], ".").concat(c[0], ".").concat(c[3]), "".concat(c[2], ".").concat(c[1], ".").concat(c[0]), "".concat(c[2], ".").concat(c[1], ".").concat(c[3]), "".concat(c[2], ".").concat(c[3], ".").concat(c[0]), "".concat(c[2], ".").concat(c[3], ".").concat(c[1]), "".concat(c[3], ".").concat(c[0], ".").concat(c[1]), "".concat(c[3], ".").concat(c[0], ".").concat(c[2]), "".concat(c[3], ".").concat(c[1], ".").concat(c[0]), "".concat(c[3], ".").concat(c[1], ".").concat(c[2]), "".concat(c[3], ".").concat(c[2], ".").concat(c[0]), "".concat(c[3], ".").concat(c[2], ".").concat(c[1]), "".concat(c[0], ".").concat(c[1], ".").concat(c[2], ".").concat(c[3]), "".concat(c[0], ".").concat(c[1], ".").concat(c[3], ".").concat(c[2]), "".concat(c[0], ".").concat(c[2], ".").concat(c[1], ".").concat(c[3]), "".concat(c[0], ".").concat(c[2], ".").concat(c[3], ".").concat(c[1]), "".concat(c[0], ".").concat(c[3], ".").concat(c[1], ".").concat(c[2]), "".concat(c[0], ".").concat(c[3], ".").concat(c[2], ".").concat(c[1]), "".concat(c[1], ".").concat(c[0], ".").concat(c[2], ".").concat(c[3]), "".concat(c[1], ".").concat(c[0], ".").concat(c[3], ".").concat(c[2]), "".concat(c[1], ".").concat(c[2], ".").concat(c[0], ".").concat(c[3]), "".concat(c[1], ".").concat(c[2], ".").concat(c[3], ".").concat(c[0]), "".concat(c[1], ".").concat(c[3], ".").concat(c[0], ".").concat(c[2]), "".concat(c[1], ".").concat(c[3], ".").concat(c[2], ".").concat(c[0]), "".concat(c[2], ".").concat(c[0], ".").concat(c[1], ".").concat(c[3]), "".concat(c[2], ".").concat(c[0], ".").concat(c[3], ".").concat(c[1]), "".concat(c[2], ".").concat(c[1], ".").concat(c[0], ".").concat(c[3]), "".concat(c[2], ".").concat(c[1], ".").concat(c[3], ".").concat(c[0]), "".concat(c[2], ".").concat(c[3], ".").concat(c[0], ".").concat(c[1]), "".concat(c[2], ".").concat(c[3], ".").concat(c[1], ".").concat(c[0]), "".concat(c[3], ".").concat(c[0], ".").concat(c[1], ".").concat(c[2]), "".concat(c[3], ".").concat(c[0], ".").concat(c[2], ".").concat(c[1]), "".concat(c[3], ".").concat(c[1], ".").concat(c[0], ".").concat(c[2]), "".concat(c[3], ".").concat(c[1], ".").concat(c[2], ".").concat(c[0]), "".concat(c[3], ".").concat(c[2], ".").concat(c[0], ".").concat(c[1]), "".concat(c[3], ".").concat(c[2], ".").concat(c[1], ".").concat(c[0])];
}
var m = {};
function D(c) {
  if (c.length === 0 || c.length === 1) return c;
  var t = c.join(".");
  return m[t] || (m[t] = E(c)), m[t];
}
function x(c) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, o = c.filter(function(i) {
    return i !== "token";
  }), u = D(o);
  return u.reduce(function(i, l) {
    return s(s({}, i), n[l]);
  }, t);
}
function d(c) {
  return c.join(" ");
}
function I(c, t) {
  var n = 0;
  return function(o) {
    return n += 1, o.map(function(u, i) {
      return T({
        node: u,
        stylesheet: c,
        useInlineStyles: t,
        key: "code-segment-".concat(n, "-").concat(i)
      });
    });
  };
}
function T(c) {
  var t = c.node, n = c.stylesheet, o = c.style, u = o === void 0 ? {} : o, i = c.useInlineStyles, l = c.key, e = t.properties, v = t.type, y = t.tagName, b = t.value;
  if (v === "text")
    return b;
  if (y) {
    var O = I(n, i), f;
    if (!i)
      f = s(s({}, e), {}, {
        className: d(e.className)
      });
    else {
      var h = Object.keys(n).reduce(function(a, P) {
        return P.split(".").forEach(function(g) {
          a.includes(g) || a.push(g);
        }), a;
      }, []), j = e.className && e.className.includes("token") ? ["token"] : [], k = e.className && j.concat(e.className.filter(function(a) {
        return !h.includes(a);
      }));
      f = s(s({}, e), {}, {
        className: d(k) || void 0,
        style: x(e.className, Object.assign({}, e.style, u), n)
      });
    }
    var N = O(t.children);
    return /* @__PURE__ */ C.createElement(y, S({
      key: l
    }, f), N);
  }
}
export {
  I as createChildren,
  d as createClassNameString,
  x as createStyleObject,
  T as default
};
