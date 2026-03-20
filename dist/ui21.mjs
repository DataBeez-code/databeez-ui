import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { cn as a } from "./ui28.mjs";
const i = {
  operational: { dot: "bg-green-500", text: "text-green-500 dark:text-green-400", label: "Operational" },
  degraded: { dot: "bg-yellow-500", text: "text-yellow-500 dark:text-yellow-400", label: "Degraded" },
  outage: { dot: "bg-red-500", text: "text-red-500 dark:text-red-400", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" }
};
function m({
  label: n,
  status: r,
  statusLabel: d,
  className: o,
  ...s
}) {
  const e = i[r];
  return /* @__PURE__ */ l("div", { className: a("flex items-center justify-between", o), ...s, children: [
    /* @__PURE__ */ l("div", { className: "flex items-center", children: [
      /* @__PURE__ */ t("div", { className: a("h-2 w-2 rounded-full mr-3", e.dot) }),
      /* @__PURE__ */ t("span", { className: "text-sm font-medium", children: n })
    ] }),
    /* @__PURE__ */ t("span", { className: a("text-sm", e.text), children: d ?? e.label })
  ] });
}
export {
  m as StatusIndicatorRow
};
