function r(n) {
  const t = String(n || "").trim();
  return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
export {
  r as parse
};
