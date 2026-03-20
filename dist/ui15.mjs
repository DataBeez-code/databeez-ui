import { jsxs as p, jsx as t } from "react/jsx-runtime";
import * as u from "react";
import { cn as o } from "./ui28.mjs";
import d from "./ui42.mjs";
import x from "./ui40.mjs";
const b = u.forwardRef(
  ({ value: r, onChange: a, onClear: e, className: s, placeholder: c = "Cerca...", ...l }, n) => {
    const i = () => {
      a(""), e == null || e();
    };
    return /* @__PURE__ */ p("div", { className: o("relative", s), children: [
      /* @__PURE__ */ t(d, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
      /* @__PURE__ */ t(
        "input",
        {
          ref: n,
          type: "text",
          value: r,
          onChange: (m) => a(m.target.value),
          placeholder: c,
          className: o(
            "w-full pl-10 pr-9 py-2 text-sm border border-border rounded-lg bg-surface",
            "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
            "placeholder:text-text-muted text-text-base transition-colors"
          ),
          ...l
        }
      ),
      r && /* @__PURE__ */ t(
        "button",
        {
          type: "button",
          onClick: i,
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-base transition-colors",
          "aria-label": "Cancella ricerca",
          children: /* @__PURE__ */ t(x, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
b.displayName = "SearchInput";
export {
  b as SearchInput
};
