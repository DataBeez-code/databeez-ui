import { jsx as t, jsxs as i } from "react/jsx-runtime";
import * as l from "react";
import { Overlay as d, Portal as g, Content as n, Close as r, Title as c, Description as m, Root as u, Trigger as x } from "./ui39.mjs";
import { cn as s } from "./ui28.mjs";
import y from "./ui40.mjs";
const j = u, k = x, N = g, F = r, f = l.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ t(
  d,
  {
    ref: o,
    className: s(
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...a
  }
));
f.displayName = d.displayName;
const b = l.forwardRef(({ className: e, children: a, ...o }, p) => /* @__PURE__ */ i(N, { children: [
  /* @__PURE__ */ t(f, {}),
  /* @__PURE__ */ i(
    n,
    {
      ref: p,
      className: s(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-surface p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        e
      ),
      ...o,
      children: [
        a,
        /* @__PURE__ */ i(r, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-transparent transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-subtle data-[state=open]:text-text-muted text-text-base", children: [
          /* @__PURE__ */ t(y, { className: "h-4 w-4" }),
          /* @__PURE__ */ t("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
b.displayName = n.displayName;
const D = ({
  className: e,
  ...a
}) => /* @__PURE__ */ t(
  "div",
  {
    className: s(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...a
  }
);
D.displayName = "DialogHeader";
const h = ({
  className: e,
  ...a
}) => /* @__PURE__ */ t(
  "div",
  {
    className: s(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...a
  }
);
h.displayName = "DialogFooter";
const w = l.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ t(
  c,
  {
    ref: o,
    className: s(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...a
  }
));
w.displayName = c.displayName;
const v = l.forwardRef(({ className: e, ...a }, o) => /* @__PURE__ */ t(
  m,
  {
    ref: o,
    className: s("text-sm text-text-muted", e),
    ...a
  }
));
v.displayName = m.displayName;
export {
  j as Dialog,
  F as DialogClose,
  b as DialogContent,
  v as DialogDescription,
  h as DialogFooter,
  D as DialogHeader,
  f as DialogOverlay,
  N as DialogPortal,
  w as DialogTitle,
  k as DialogTrigger
};
