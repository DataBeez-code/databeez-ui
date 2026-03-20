import f from "./ui846.mjs";
function n(r, a) {
  for (var t = 0; t < a.length; t++) {
    var e = a[t];
    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, f(e.key), e);
  }
}
function l(r, a, t) {
  return a && n(r.prototype, a), t && n(r, t), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
export {
  l as default
};
