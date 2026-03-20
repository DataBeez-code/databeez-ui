import re from "./ui151.mjs";
import J from "./ui152.mjs";
import ae from "./ui140.mjs";
import S from "react";
import le from "./ui79.mjs";
import se from "./ui133.mjs";
var ie = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
function M(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function y(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? M(Object(t), !0).forEach(function(n) {
      ae(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
var oe = /\n/g;
function ue(e) {
  return e.match(oe);
}
function ce(e) {
  var r = e.lines, t = e.startingLineNumber, n = e.style;
  return r.map(function(a, l) {
    var i = l + t;
    return /* @__PURE__ */ S.createElement("span", {
      key: "line-".concat(l),
      className: "react-syntax-highlighter-line-number",
      style: typeof n == "function" ? n(i) : n
    }, "".concat(i, `
`));
  });
}
function ge(e) {
  var r = e.codeString, t = e.codeStyle, n = e.containerStyle, a = n === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : n, l = e.numberStyle, i = l === void 0 ? {} : l, c = e.startingLineNumber;
  return /* @__PURE__ */ S.createElement("code", {
    style: Object.assign({}, t, a)
  }, ce({
    lines: r.replace(/\n$/, "").split(`
`),
    style: i,
    startingLineNumber: c
  }));
}
function me(e) {
  return "".concat(e.toString().length, ".25em");
}
function Q(e, r) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: r
    },
    children: [{
      type: "text",
      value: e
    }]
  };
}
function X(e, r, t) {
  var n = {
    display: "inline-block",
    minWidth: me(t),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, a = typeof e == "function" ? e(r) : e, l = y(y({}, n), a);
  return l;
}
function H(e) {
  var r = e.children, t = e.lineNumber, n = e.lineNumberStyle, a = e.largestLineNumber, l = e.showInlineLineNumbers, i = e.lineProps, c = i === void 0 ? {} : i, f = e.className, p = f === void 0 ? [] : f, u = e.showLineNumbers, g = e.wrapLongLines, v = e.wrapLines, s = v === void 0 ? !1 : v, h = s ? y({}, typeof c == "function" ? c(t) : c) : {};
  if (h.className = h.className ? [].concat(J(h.className.trim().split(/\s+/)), J(p)) : p, t && l) {
    var w = X(n, t, a);
    r.unshift(Q(t, w));
  }
  return g & u && (h.style = y({
    display: "flex"
  }, h.style)), {
    type: "element",
    tagName: "span",
    properties: h,
    children: r
  };
}
function Y(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  e.length === void 0 && (e = [e]);
  for (var n = 0; n < e.length; n++) {
    var a = e[n];
    if (a.type === "text")
      t.push(H({
        children: [a],
        className: J(new Set(r))
      }));
    else if (a.children) {
      var l, i = r.concat(((l = a.properties) === null || l === void 0 ? void 0 : l.className) || []);
      Y(a.children, i).forEach(function(c) {
        return t.push(c);
      });
    }
  }
  return t;
}
function de(e, r, t, n, a, l, i, c, f) {
  var p, u = Y(e.value), g = [], v = -1, s = 0;
  function h(m, o) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return H({
      children: m,
      lineNumber: o,
      lineNumberStyle: c,
      largestLineNumber: i,
      showInlineLineNumbers: a,
      lineProps: t,
      className: d,
      showLineNumbers: n,
      wrapLongLines: f,
      wrapLines: r
    });
  }
  function w(m, o) {
    if (n && o && a) {
      var d = X(c, o, i);
      m.unshift(Q(o, d));
    }
    return m;
  }
  function b(m, o) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return r || d.length > 0 ? h(m, o, d) : w(m, o);
  }
  for (var E = function() {
    var o = u[s], d = o.children[0].value, G = ue(d);
    if (G) {
      var O = d.split(`
`);
      O.forEach(function(T, j) {
        var $ = n && g.length + l, R = {
          type: "text",
          value: "".concat(T, `
`)
        };
        if (j === 0) {
          var x = u.slice(v + 1, s).concat(H({
            children: [R],
            className: o.properties.className
          })), D = b(x, $);
          g.push(D);
        } else if (j === O.length - 1) {
          var W = u[s + 1] && u[s + 1].children && u[s + 1].children[0], I = {
            type: "text",
            value: "".concat(T)
          };
          if (W) {
            var V = H({
              children: [I],
              className: o.properties.className
            });
            u.splice(s + 1, 0, V);
          } else {
            var B = [I], N = b(B, $, o.properties.className);
            g.push(N);
          }
        } else {
          var L = [R], C = b(L, $, o.properties.className);
          g.push(C);
        }
      }), v = s;
    }
    s++;
  }; s < u.length; )
    E();
  if (v !== u.length - 1) {
    var P = u.slice(v + 1, u.length);
    if (P && P.length) {
      var k = n && g.length + l, A = b(P, k);
      g.push(A);
    }
  }
  return r ? g : (p = []).concat.apply(p, g);
}
function pe(e) {
  var r = e.rows, t = e.stylesheet, n = e.useInlineStyles;
  return r.map(function(a, l) {
    return le({
      node: a,
      stylesheet: t,
      useInlineStyles: n,
      key: "code-segment-".concat(l)
    });
  });
}
function Z(e) {
  return e && typeof e.highlightAuto < "u";
}
function he(e) {
  var r = e.astGenerator, t = e.language, n = e.code, a = e.defaultCodeValue;
  if (Z(r)) {
    var l = se(r, t);
    return t === "text" ? {
      value: a,
      language: "text"
    } : l ? r.highlight(t, n) : r.highlightAuto(n);
  }
  try {
    return t && t !== "text" ? {
      value: r.highlight(n, t)
    } : {
      value: a
    };
  } catch {
    return {
      value: a
    };
  }
}
function Se(e, r) {
  return function(n) {
    var a, l, i = n.language, c = n.children, f = n.style, p = f === void 0 ? r : f, u = n.customStyle, g = u === void 0 ? {} : u, v = n.codeTagProps, s = v === void 0 ? {
      className: i ? "language-".concat(i) : void 0,
      style: y(y({}, p['code[class*="language-"]']), p['code[class*="language-'.concat(i, '"]')])
    } : v, h = n.useInlineStyles, w = h === void 0 ? !0 : h, b = n.showLineNumbers, E = b === void 0 ? !1 : b, P = n.showInlineLineNumbers, k = P === void 0 ? !0 : P, A = n.startingLineNumber, m = A === void 0 ? 1 : A, o = n.lineNumberContainerStyle, d = n.lineNumberStyle, G = d === void 0 ? {} : d, O = n.wrapLines, T = n.wrapLongLines, j = T === void 0 ? !1 : T, $ = n.lineProps, R = $ === void 0 ? {} : $, x = n.renderer, D = n.PreTag, W = D === void 0 ? "pre" : D, I = n.CodeTag, V = I === void 0 ? "code" : I, B = n.code, N = B === void 0 ? (Array.isArray(c) ? c[0] : c) || "" : B, L = n.astGenerator, C = re(n, ie);
    L = L || e;
    var K = E ? /* @__PURE__ */ S.createElement(ge, {
      containerStyle: o,
      codeStyle: s.style || {},
      numberStyle: G,
      startingLineNumber: m,
      codeString: N
    }) : null, _ = p.hljs || p['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, U = Z(L) ? "hljs" : "prismjs", q = w ? Object.assign({}, C, {
      style: Object.assign({}, _, g)
    }) : Object.assign({}, C, {
      className: C.className ? "".concat(U, " ").concat(C.className) : U,
      style: Object.assign({}, g)
    });
    if (j ? s.style = y({
      whiteSpace: "pre-wrap"
    }, s.style) : s.style = y({
      whiteSpace: "pre"
    }, s.style), !L)
      return /* @__PURE__ */ S.createElement(W, q, K, /* @__PURE__ */ S.createElement(V, s, N));
    (O === void 0 && x || j) && (O = !0), x = x || pe;
    var z = [{
      type: "text",
      value: N
    }], F = he({
      astGenerator: L,
      language: i,
      code: N,
      defaultCodeValue: z
    });
    F.language === null && (F.value = z);
    var ee = (a = (l = N.match(/\n/g)) === null || l === void 0 ? void 0 : l.length) !== null && a !== void 0 ? a : 0, ne = m + ee, te = de(F, O, R, E, k, m, ne, G, j);
    return /* @__PURE__ */ S.createElement(W, q, /* @__PURE__ */ S.createElement(V, s, !k && K, x({
      rows: te,
      stylesheet: p,
      useInlineStyles: w
    })));
  };
}
export {
  Se as default
};
