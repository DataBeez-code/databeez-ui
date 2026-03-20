import e from "./ui385.mjs";
import g from "./ui622.mjs";
a.displayName = "t4-cs";
a.aliases = ["t4"];
function a(t) {
  t.register(e), t.register(g), t.languages.t4 = t.languages["t4-cs"] = t.languages["t4-templating"].createT4("csharp");
}
export {
  a as default
};
