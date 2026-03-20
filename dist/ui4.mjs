import { jsx as i } from "react/jsx-runtime";
import * as n from "react";
import { Root as d } from "./ui34.mjs";
import { cva as b } from "./ui29.mjs";
import { cn as l } from "./ui28.mjs";
const u = b(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-databeez-primary text-white hover:bg-databeez-accent shadow-sm",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline: "border border-border bg-surface text-text-base hover:bg-subtle hover:text-text-base",
        secondary: "bg-subtle text-text-base hover:bg-subtle/80",
        ghost: "text-text-base hover:bg-subtle hover:text-text-base",
        link: "text-databeez-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-xl px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), f = n.forwardRef(
  ({ className: e, variant: t, size: o, asChild: r = !1, ...a }, s) => /* @__PURE__ */ i(
    r ? d : "button",
    {
      className: l(u({ variant: t, size: o, className: e })),
      ref: s,
      ...a
    }
  )
);
f.displayName = "Button";
export {
  f as Button,
  u as buttonVariants
};
