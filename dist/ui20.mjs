import { jsxs as u, jsx as d } from "react/jsx-runtime";
import { cva as l } from "./ui29.mjs";
import { cn as t } from "./ui28.mjs";
const b = l(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        success: "bg-green-500/10 text-green-600 dark:text-green-400",
        warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        error: "bg-red-500/10 text-red-600 dark:text-red-400",
        info: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        neutral: "bg-subtle text-text-muted"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
), g = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  neutral: "bg-text-muted"
};
function m({
  variant: e = "neutral",
  label: r,
  dot: a = !0,
  className: n,
  ...s
}) {
  return /* @__PURE__ */ u(
    "span",
    {
      className: t(b({ variant: e }), n),
      ...s,
      children: [
        a && /* @__PURE__ */ d(
          "span",
          {
            className: t(
              "h-1.5 w-1.5 rounded-full shrink-0",
              g[e ?? "neutral"]
            )
          }
        ),
        r
      ]
    }
  );
}
export {
  m as StatusBadge,
  b as statusBadgeVariants
};
