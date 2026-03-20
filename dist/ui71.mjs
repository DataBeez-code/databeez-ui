import * as i from "react";
import { Primitive as a } from "./ui52.mjs";
import { jsx as o } from "react/jsx-runtime";
var t = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), d = "VisuallyHidden", l = i.forwardRef(
  (r, e) => /* @__PURE__ */ o(
    a.span,
    {
      ...r,
      ref: e,
      style: { ...t, ...r.style }
    }
  )
);
l.displayName = d;
export {
  t as VISUALLY_HIDDEN_STYLES,
  l as VisuallyHidden
};
