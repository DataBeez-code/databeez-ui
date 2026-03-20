import { jsxs as x, jsx as e } from "react/jsx-runtime";
import { cn as s } from "./ui28.mjs";
function n({
  icon: r,
  iconColor: o = "#f59e0b",
  label: a,
  value: d,
  trend: t,
  className: m,
  ...i
}) {
  return /* @__PURE__ */ x(
    "div",
    {
      className: s(
        "bg-surface rounded-xl shadow-sm border border-border p-4 text-center hover:shadow-md transition-shadow",
        m
      ),
      ...i,
      children: [
        r && /* @__PURE__ */ e(
          r,
          {
            className: "h-6 w-6 mx-auto mb-2",
            style: { color: o }
          }
        ),
        /* @__PURE__ */ e("div", { className: "text-2xl font-bold text-text-base", children: d }),
        /* @__PURE__ */ e("div", { className: "text-sm text-text-muted mt-0.5", children: a }),
        t && /* @__PURE__ */ e(
          "div",
          {
            className: s(
              "text-xs font-medium mt-1",
              t.positive ? "text-green-600" : "text-red-500"
            ),
            children: t.value
          }
        )
      ]
    }
  );
}
export {
  n as StatCard
};
