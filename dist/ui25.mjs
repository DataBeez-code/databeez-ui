import { jsxs as m, jsx as s } from "react/jsx-runtime";
import * as n from "react";
import { cn as x } from "./ui28.mjs";
const l = n.forwardRef(
  ({ className: a, label: t, error: e, helperText: o, id: d, ...i }, c) => {
    const r = d ?? (t == null ? void 0 : t.toLowerCase().replace(/\s+/g, "-"));
    return /* @__PURE__ */ m("div", { className: "w-full space-y-1.5", children: [
      t && /* @__PURE__ */ s(
        "label",
        {
          htmlFor: r,
          className: "block text-sm font-medium text-text-base",
          children: t
        }
      ),
      /* @__PURE__ */ s(
        "textarea",
        {
          id: r,
          ref: c,
          className: x(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-base placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-subtle",
            "resize-y min-h-[80px] transition-colors",
            e && "border-error-500 focus:ring-error-500 focus:border-error-500",
            a
          ),
          "aria-invalid": !!e,
          "aria-describedby": e ? `${r}-error` : o ? `${r}-helper` : void 0,
          ...i
        }
      ),
      e && /* @__PURE__ */ s("p", { id: `${r}-error`, className: "text-xs text-error-500", children: e }),
      !e && o && /* @__PURE__ */ s("p", { id: `${r}-helper`, className: "text-xs text-text-muted", children: o })
    ] });
  }
);
l.displayName = "Textarea";
export {
  l as Textarea
};
