import o from "./ui858.mjs";
import i from "./ui862.mjs";
function f(t) {
  var r = i(t, "string");
  return o(r) == "symbol" ? r : r + "";
}
export {
  f as default
};
