import { jsx as r, jsxs as l } from "react/jsx-runtime";
import { cn as n } from "./ui28.mjs";
function o({ className: e, ...a }) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: n("animate-pulse rounded-md bg-subtle", e),
      ...a
    }
  );
}
function t({ lines: e = 3, className: a }) {
  return /* @__PURE__ */ r("div", { className: n("space-y-2", a), children: Array.from({ length: e }).map((c, s) => /* @__PURE__ */ r(
    o,
    {
      className: n("h-4", s === e - 1 ? "w-2/3" : "w-full")
    },
    s
  )) });
}
function u({ className: e }) {
  return /* @__PURE__ */ l("div", { className: n("rounded-xl border border-border bg-surface p-6 space-y-4", e), children: [
    /* @__PURE__ */ r(o, { className: "h-5 w-1/3" }),
    /* @__PURE__ */ r(t, { lines: 3 })
  ] });
}
export {
  o as Skeleton,
  u as SkeletonCard,
  t as SkeletonText
};
