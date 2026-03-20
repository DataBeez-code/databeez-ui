import { jsxs as o, jsx as e } from "react/jsx-runtime";
import * as d from "react";
import { cva as c } from "./ui29.mjs";
import { cn as b } from "./ui28.mjs";
import f from "./ui30.mjs";
import p from "./ui31.mjs";
import u from "./ui32.mjs";
import s from "./ui33.mjs";
const g = c(
  "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-subtle border-border text-text-base",
        info: "bg-blue-50 border-blue-200 text-blue-800",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
        destructive: "bg-red-50 border-red-200 text-red-700"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), x = {
  default: s,
  info: s,
  success: u,
  warning: p,
  destructive: f
}, v = d.forwardRef(
  ({ className: l, variant: r = "default", title: t, children: a, ...i }, m) => {
    const n = x[r ?? "default"];
    return /* @__PURE__ */ o(
      "div",
      {
        ref: m,
        role: "alert",
        className: b(g({ variant: r }), l),
        ...i,
        children: [
          /* @__PURE__ */ e(n, { className: "h-4 w-4 mt-0.5 shrink-0" }),
          /* @__PURE__ */ o("div", { className: "flex-1 min-w-0", children: [
            t && /* @__PURE__ */ e("p", { className: "font-semibold mb-0.5", children: t }),
            a && /* @__PURE__ */ e("p", { className: "leading-relaxed", children: a })
          ] })
        ]
      }
    );
  }
);
v.displayName = "Alert";
export {
  v as Alert,
  g as alertVariants
};
