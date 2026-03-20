import { jsxs as c, jsx as t } from "react/jsx-runtime";
import * as p from "react";
import { cn as u } from "./ui28.mjs";
const x = p.forwardRef(
  ({
    icon: n,
    label: r,
    error: e,
    helperText: a,
    rightElement: s,
    className: d,
    id: i,
    ...l
  }, m) => {
    const o = i ?? `input-icon-${Math.random().toString(36).slice(2, 9)}`;
    return /* @__PURE__ */ c("div", { className: "space-y-1", children: [
      r && /* @__PURE__ */ t(
        "label",
        {
          htmlFor: o,
          className: "block text-sm font-medium text-text-base",
          children: r
        }
      ),
      /* @__PURE__ */ c("div", { className: "relative", children: [
        /* @__PURE__ */ t(n, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" }),
        /* @__PURE__ */ t(
          "input",
          {
            ref: m,
            id: o,
            className: u(
              "block w-full rounded-lg border border-border bg-surface py-2.5 pl-10 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              s ? "pr-10" : "pr-4",
              e && "border-red-300 focus:ring-red-500 focus:border-red-500",
              d
            ),
            ...l
          }
        ),
        s && /* @__PURE__ */ t("div", { className: "absolute right-3 top-1/2 -translate-y-1/2", children: s })
      ] }),
      e && /* @__PURE__ */ t("p", { className: "text-xs text-red-600", children: e }),
      a && !e && /* @__PURE__ */ t("p", { className: "text-xs text-text-muted", children: a })
    ] });
  }
);
x.displayName = "InputWithIcon";
export {
  x as InputWithIcon
};
