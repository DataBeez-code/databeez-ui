import { jsx as t } from "react/jsx-runtime";
import * as d from "react";
import { cn as s } from "./ui28.mjs";
const o = d.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s(
      "rounded-xl border border-border bg-surface text-text-base shadow-sm",
      e
    ),
    ...a
  }
));
o.displayName = "Card";
const i = d.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t("div", { ref: r, className: s("flex flex-col space-y-1.5 p-6", e), ...a }));
i.displayName = "CardHeader";
const m = d.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "h3",
  {
    ref: r,
    className: s("text-lg font-semibold leading-none tracking-tight text-text-base", e),
    ...a
  }
));
m.displayName = "CardTitle";
const l = d.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "p",
  {
    ref: r,
    className: s("text-sm text-text-muted", e),
    ...a
  }
));
l.displayName = "CardDescription";
const c = d.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t("div", { ref: r, className: s("p-6 pt-0", e), ...a }));
c.displayName = "CardContent";
const f = d.forwardRef(({ className: e, ...a }, r) => /* @__PURE__ */ t(
  "div",
  {
    ref: r,
    className: s("flex items-center p-6 pt-0", e),
    ...a
  }
));
f.displayName = "CardFooter";
export {
  o as Card,
  c as CardContent,
  l as CardDescription,
  f as CardFooter,
  i as CardHeader,
  m as CardTitle
};
