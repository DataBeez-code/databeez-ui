import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { cn as i } from "./ui28.mjs";
function x({
  icon: t,
  title: m,
  description: s,
  action: a,
  className: c,
  ...l
}) {
  return /* @__PURE__ */ r(
    "div",
    {
      className: i(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        c
      ),
      ...l,
      children: [
        t && /* @__PURE__ */ e("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10", children: /* @__PURE__ */ e(t, { className: "h-6 w-6 text-databeez-primary" }) }),
        /* @__PURE__ */ r("div", { className: "space-y-1", children: [
          /* @__PURE__ */ e("p", { className: "font-semibold text-text-base", children: m }),
          s && /* @__PURE__ */ e("p", { className: "text-sm text-text-muted max-w-sm", children: s })
        ] }),
        a && /* @__PURE__ */ e("div", { children: a })
      ]
    }
  );
}
export {
  x as EmptyState
};
