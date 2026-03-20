import { jsxs as n, jsx as r } from "react/jsx-runtime";
import { cva as i } from "./ui29.mjs";
import { cn as l } from "./ui28.mjs";
const c = i(
  "animate-spin rounded-full border-4 border-databeez-primary border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        default: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function m({ className: e, size: a, label: t = "Caricamento...", ...s }) {
  return /* @__PURE__ */ n(
    "div",
    {
      role: "status",
      "aria-label": t,
      className: l("inline-flex items-center justify-center", e),
      ...s,
      children: [
        /* @__PURE__ */ r("div", { className: c({ size: a }) }),
        /* @__PURE__ */ r("span", { className: "sr-only", children: t })
      ]
    }
  );
}
function p({ label: e }) {
  return /* @__PURE__ */ n("div", { className: "flex flex-col items-center justify-center py-12 gap-3", children: [
    /* @__PURE__ */ r(m, { size: "lg", label: e }),
    e && /* @__PURE__ */ r("p", { className: "text-sm text-text-muted", children: e })
  ] });
}
export {
  m as Spinner,
  p as SpinnerOverlay,
  c as spinnerVariants
};
