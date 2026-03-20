import * as e from "react";
import { useLayoutEffect as a } from "./ui69.mjs";
var s = e[" useId ".trim().toString()] || (() => {
}), i = 0;
function d(r) {
  const [t, o] = e.useState(s());
  return a(() => {
    o((u) => u ?? String(i++));
  }, [r]), t ? `radix-${t}` : "";
}
export {
  d as useId
};
