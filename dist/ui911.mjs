const i = /[#.]/g;
function p(n, o) {
  const l = n || "", s = {};
  let t = 0, r, c;
  for (; t < l.length; ) {
    i.lastIndex = t;
    const a = i.exec(l), e = l.slice(t, a ? a.index : l.length);
    e && (r ? r === "#" ? s.id = e : Array.isArray(s.className) ? s.className.push(e) : s.className = [e] : c = e, t += e.length), a && (r = a[0], t++);
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: c || o || "div",
    properties: s,
    children: []
  };
}
export {
  p as parseSelector
};
