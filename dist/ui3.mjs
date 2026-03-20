import { jsx as o } from "react/jsx-runtime";
import { cva as n } from "./ui29.mjs";
import { cn as a } from "./ui28.mjs";
const i = n(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function f({ className: r, variant: e, ...t }) {
  return /* @__PURE__ */ o("div", { className: a(i({ variant: e }), r), ...t });
}
export {
  f as Badge,
  i as badgeVariants
};
