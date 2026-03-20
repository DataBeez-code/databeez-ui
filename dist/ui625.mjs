import a from "./ui622.mjs";
import g from "./ui624.mjs";
e.displayName = "t4-vb";
e.aliases = [];
function e(t) {
  t.register(a), t.register(g), t.languages["t4-vb"] = t.languages["t4-templating"].createT4("vbnet");
}
export {
  e as default
};
