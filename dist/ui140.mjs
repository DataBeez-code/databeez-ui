import o from "./ui846.mjs";
function n(e, r, t) {
  return (r = o(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
export {
  n as default
};
