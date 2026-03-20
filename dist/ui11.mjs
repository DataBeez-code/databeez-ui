import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as i } from "react";
import { clsx as u } from "./ui41.mjs";
const l = i(
  ({ className: d, label: r, error: t, helperText: s, id: a, ...m }, c) => {
    const o = a || `input-${Math.random().toString(36).substr(2, 9)}`;
    return /* @__PURE__ */ n("div", { className: "space-y-1", children: [
      r && /* @__PURE__ */ e("label", { htmlFor: o, className: "block text-sm font-medium text-text-base", children: r }),
      /* @__PURE__ */ e(
        "input",
        {
          id: o,
          className: u(
            "block w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base shadow-sm focus:border-databeez-primary focus:ring-2 focus:ring-databeez-primary focus:outline-none placeholder:text-text-muted",
            t && "border-red-300 focus:border-red-500 focus:ring-red-500",
            d
          ),
          ref: c,
          ...m
        }
      ),
      t && /* @__PURE__ */ e("p", { className: "text-sm text-red-600", children: t }),
      s && !t && /* @__PURE__ */ e("p", { className: "text-sm text-text-muted", children: s })
    ] });
  }
);
l.displayName = "Input";
export {
  l as Input
};
