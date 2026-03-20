function o(l) {
  const s = [], e = String(l || "");
  let t = e.indexOf(","), n = 0, i = !1;
  for (; !i; ) {
    t === -1 && (t = e.length, i = !0);
    const r = e.slice(n, t).trim();
    (r || !i) && s.push(r), n = t + 1, t = e.indexOf(",", n);
  }
  return s;
}
export {
  o as parse
};
