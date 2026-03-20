import { jsx as o } from "react/jsx-runtime";
import * as l from "react";
import { cn as r } from "./ui28.mjs";
const d = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ o(
  "table",
  {
    ref: t,
    className: r("w-full caption-bottom text-sm", e),
    ...a
  }
) }));
d.displayName = "Table";
const s = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o("thead", { ref: t, className: r("bg-subtle border-b border-border", e), ...a }));
s.displayName = "TableHeader";
const b = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  "tbody",
  {
    ref: t,
    className: r("divide-y divide-border", e),
    ...a
  }
));
b.displayName = "TableBody";
const m = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  "tfoot",
  {
    ref: t,
    className: r("bg-subtle border-t border-border font-medium", e),
    ...a
  }
));
m.displayName = "TableFooter";
const i = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  "tr",
  {
    ref: t,
    className: r(
      "transition-colors hover:bg-subtle data-[state=selected]:bg-primary-50",
      e
    ),
    ...a
  }
));
i.displayName = "TableRow";
const c = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  "th",
  {
    ref: t,
    className: r(
      "h-10 px-4 text-left align-middle font-semibold text-text-muted text-xs uppercase tracking-wider",
      e
    ),
    ...a
  }
));
c.displayName = "TableHead";
const f = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  "td",
  {
    ref: t,
    className: r("px-4 py-3 align-middle text-text-base", e),
    ...a
  }
));
f.displayName = "TableCell";
const p = l.forwardRef(({ className: e, ...a }, t) => /* @__PURE__ */ o(
  "caption",
  {
    ref: t,
    className: r("mt-4 text-sm text-text-muted", e),
    ...a
  }
));
p.displayName = "TableCaption";
export {
  d as Table,
  b as TableBody,
  p as TableCaption,
  f as TableCell,
  m as TableFooter,
  c as TableHead,
  s as TableHeader,
  i as TableRow
};
