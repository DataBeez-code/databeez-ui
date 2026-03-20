import { jsx as i } from "react/jsx-runtime";
import * as a from "react";
import { List as n, Trigger as r, Content as l, Root as f } from "./ui46.mjs";
import { cn as o } from "./ui28.mjs";
const g = f, m = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ i(
  n,
  {
    ref: s,
    className: o(
      "inline-flex h-10 items-center justify-center rounded-lg bg-subtle p-1 text-text-muted",
      e
    ),
    ...t
  }
));
m.displayName = n.displayName;
const c = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ i(
  r,
  {
    ref: s,
    className: o(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "data-[state=active]:bg-surface data-[state=active]:text-text-base data-[state=active]:shadow-sm",
      e
    ),
    ...t
  }
));
c.displayName = r.displayName;
const d = a.forwardRef(({ className: e, ...t }, s) => /* @__PURE__ */ i(
  l,
  {
    ref: s,
    className: o(
      "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-databeez-primary focus-visible:ring-offset-2",
      e
    ),
    ...t
  }
));
d.displayName = l.displayName;
export {
  g as Tabs,
  d as TabsContent,
  m as TabsList,
  c as TabsTrigger
};
