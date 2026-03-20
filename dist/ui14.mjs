import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { cn as c } from "./ui28.mjs";
function n({
  title: l,
  description: s,
  actions: a,
  breadcrumb: r,
  className: m,
  ...i
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: c("bg-surface border-b border-border", m),
      ...i,
      children: /* @__PURE__ */ t("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6", children: [
        r && /* @__PURE__ */ e("div", { className: "mb-3", children: r }),
        /* @__PURE__ */ t("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ t("div", { className: "min-w-0", children: [
            /* @__PURE__ */ e("h1", { className: "text-3xl font-bold text-text-base truncate", children: l }),
            s && /* @__PURE__ */ e("p", { className: "mt-1 text-text-muted", children: s })
          ] }),
          a && /* @__PURE__ */ e("div", { className: "flex items-center gap-3 shrink-0", children: a })
        ] })
      ] })
    }
  );
}
export {
  n as PageHeader
};
