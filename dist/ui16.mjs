import { jsxs as d, jsx as e } from "react/jsx-runtime";
import * as s from "react";
import { Trigger as c, Icon as w, ScrollUpButton as i, ScrollDownButton as n, Portal as N, Content as m, Viewport as g, Label as p, Item as f, ItemIndicator as S, ItemText as R, Separator as u, Root as v, Group as C, Value as j } from "./ui43.mjs";
import { cn as o } from "./ui28.mjs";
import x from "./ui44.mjs";
import z from "./ui45.mjs";
import I from "./ui37.mjs";
const E = v, F = C, H = j, B = s.forwardRef(({ className: a, children: r, ...t }, l) => /* @__PURE__ */ d(
  c,
  {
    ref: l,
    className: o(
      "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base",
      "placeholder:text-text-muted",
      "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      a
    ),
    ...t,
    children: [
      r,
      /* @__PURE__ */ e(w, { asChild: !0, children: /* @__PURE__ */ e(x, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
B.displayName = c.displayName;
const b = s.forwardRef(({ className: a, ...r }, t) => /* @__PURE__ */ e(
  i,
  {
    ref: t,
    className: o("flex cursor-default items-center justify-center py-1", a),
    ...r,
    children: /* @__PURE__ */ e(z, { className: "h-4 w-4" })
  }
));
b.displayName = i.displayName;
const y = s.forwardRef(({ className: a, ...r }, t) => /* @__PURE__ */ e(
  n,
  {
    ref: t,
    className: o("flex cursor-default items-center justify-center py-1", a),
    ...r,
    children: /* @__PURE__ */ e(x, { className: "h-4 w-4" })
  }
));
y.displayName = n.displayName;
const D = s.forwardRef(({ className: a, children: r, position: t = "popper", ...l }, h) => /* @__PURE__ */ e(N, { children: /* @__PURE__ */ d(
  m,
  {
    ref: h,
    className: o(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-xl border border-border bg-surface text-text-base shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
      t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
      a
    ),
    position: t,
    ...l,
    children: [
      /* @__PURE__ */ e(b, {}),
      /* @__PURE__ */ e(
        g,
        {
          className: o(
            "p-1",
            t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: r
        }
      ),
      /* @__PURE__ */ e(y, {})
    ]
  }
) }));
D.displayName = m.displayName;
const T = s.forwardRef(({ className: a, ...r }, t) => /* @__PURE__ */ e(
  p,
  {
    ref: t,
    className: o("py-1.5 pl-8 pr-2 text-xs font-semibold text-text-muted uppercase tracking-wider", a),
    ...r
  }
));
T.displayName = p.displayName;
const U = s.forwardRef(({ className: a, children: r, ...t }, l) => /* @__PURE__ */ d(
  f,
  {
    ref: l,
    className: o(
      "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none",
      "focus:bg-subtle focus:text-text-base",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      a
    ),
    ...t,
    children: [
      /* @__PURE__ */ e("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ e(S, { children: /* @__PURE__ */ e(I, { className: "h-4 w-4 text-databeez-primary" }) }) }),
      /* @__PURE__ */ e(R, { children: r })
    ]
  }
));
U.displayName = f.displayName;
const V = s.forwardRef(({ className: a, ...r }, t) => /* @__PURE__ */ e(
  u,
  {
    ref: t,
    className: o("-mx-1 my-1 h-px bg-border", a),
    ...r
  }
));
V.displayName = u.displayName;
export {
  E as Select,
  D as SelectContent,
  F as SelectGroup,
  U as SelectItem,
  T as SelectLabel,
  y as SelectScrollDownButton,
  b as SelectScrollUpButton,
  V as SelectSeparator,
  B as SelectTrigger,
  H as SelectValue
};
