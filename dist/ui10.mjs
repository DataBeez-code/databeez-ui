import { jsx as e, jsxs as s } from "react/jsx-runtime";
import { cn as i } from "./ui28.mjs";
function b({
  icon: a,
  iconColor: l = "#f59e0b",
  iconBg: d = "#f59e0b1a",
  title: m,
  description: r,
  action: t,
  horizontal: n = !1,
  className: o,
  ...c
}) {
  return n ? /* @__PURE__ */ e(
    "div",
    {
      className: i(
        "bg-surface rounded-xl shadow-sm border border-border p-6",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        o
      ),
      ...c,
      children: /* @__PURE__ */ s("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
            style: { backgroundColor: d },
            children: /* @__PURE__ */ e(a, { className: "h-6 w-6", style: { color: l } })
          }
        ),
        /* @__PURE__ */ s("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ e("h3", { className: "text-base font-semibold text-text-base", children: m }),
          r && /* @__PURE__ */ e("p", { className: "mt-1 text-sm text-text-muted", children: r }),
          t && /* @__PURE__ */ e("div", { className: "mt-3", children: t })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ s(
    "div",
    {
      className: i(
        "bg-surface rounded-xl shadow-sm border border-border p-8 text-center",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        o
      ),
      ...c,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6",
            style: { backgroundColor: d },
            children: /* @__PURE__ */ e(a, { className: "h-8 w-8", style: { color: l } })
          }
        ),
        /* @__PURE__ */ e("h3", { className: "text-lg font-semibold text-text-base mb-3", children: m }),
        r && /* @__PURE__ */ e("p", { className: "text-text-muted text-sm leading-relaxed", children: r }),
        t && /* @__PURE__ */ e("div", { className: "mt-5", children: t })
      ]
    }
  );
}
export {
  b as FeatureCard
};
