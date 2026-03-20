import { jsxs as c, jsx as o } from "react/jsx-runtime";
import * as m from "react";
import { cn as x } from "./ui28.mjs";
import h from "./ui37.mjs";
import l from "./ui38.mjs";
function g({
  text: i,
  label: t,
  resetDelay: r = 2e3,
  className: s,
  ...n
}) {
  const [e, a] = m.useState(!1);
  return /* @__PURE__ */ c(
    "button",
    {
      type: "button",
      onClick: async (p) => {
        p.stopPropagation(), await navigator.clipboard.writeText(i), a(!0), setTimeout(() => a(!1), r);
      },
      "aria-label": e ? "Copiato!" : `Copia${t ? ` ${t}` : ""}`,
      className: x(
        "inline-flex items-center gap-1.5 text-sm transition-colors",
        e ? "text-green-600" : "text-text-muted hover:text-text-base",
        s
      ),
      ...n,
      children: [
        e ? /* @__PURE__ */ o(h, { className: "h-4 w-4 shrink-0" }) : /* @__PURE__ */ o(l, { className: "h-4 w-4 shrink-0" }),
        t && /* @__PURE__ */ o("span", { children: e ? "Copiato!" : t })
      ]
    }
  );
}
export {
  g as CopyButton
};
