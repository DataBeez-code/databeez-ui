import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { cn as a } from "./ui28.mjs";
function b({ tabs: i, activeTab: n, onChange: s, className: c }) {
  return /* @__PURE__ */ r("div", { className: a("border-b border-border", c), children: /* @__PURE__ */ r("nav", { className: "-mb-px flex space-x-1", role: "tablist", children: i.map((e) => {
    const t = n === e.id, o = e.icon;
    return /* @__PURE__ */ d(
      "button",
      {
        role: "tab",
        "aria-selected": t,
        onClick: () => s(e.id),
        className: a(
          "inline-flex items-center gap-2 px-4 py-3 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
          t ? "border-databeez-primary text-databeez-primary" : "border-transparent text-text-muted hover:text-text-base hover:border-border"
        ),
        children: [
          o && /* @__PURE__ */ r(o, { className: "h-4 w-4" }),
          e.label
        ]
      },
      e.id
    );
  }) }) });
}
export {
  b as TabSwitch
};
