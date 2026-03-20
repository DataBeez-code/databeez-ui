import { isAlphabetical as m } from "./ui901.mjs";
import { isDecimal as o } from "./ui883.mjs";
function p(i) {
  return m(i) || o(i);
}
export {
  p as isAlphanumerical
};
