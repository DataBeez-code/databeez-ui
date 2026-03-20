function n(t) {
  const o = typeof t == "string" ? t.charCodeAt(0) : t;
  return o >= 97 && o <= 122 || o >= 65 && o <= 90;
}
export {
  n as isAlphabetical
};
