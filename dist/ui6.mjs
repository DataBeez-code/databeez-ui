import { jsx as e, jsxs as o, Fragment as l } from "react/jsx-runtime";
import * as s from "react";
import { cn as p } from "./ui28.mjs";
import x from "./ui37.mjs";
import h from "./ui38.mjs";
const f = s.lazy(async () => {
  const [{ Prism: t }, { oneDark: r }] = await Promise.all([
    import("./ui35.mjs"),
    import("./ui36.mjs")
  ]);
  return {
    default: ({ children: a, language: i }) => /* @__PURE__ */ e(
      t,
      {
        language: i,
        style: r,
        customStyle: { margin: 0, borderRadius: 0, fontSize: "0.875rem", lineHeight: "1.6" },
        showLineNumbers: !1,
        children: a
      }
    )
  };
});
function w({
  code: t,
  language: r = "text",
  copyable: a = !0,
  className: i,
  ...c
}) {
  const [m, n] = s.useState(!1), d = async () => {
    await navigator.clipboard.writeText(t), n(!0), setTimeout(() => n(!1), 2e3);
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: p("relative rounded-xl overflow-hidden text-sm", i),
      ...c,
      children: [
        /* @__PURE__ */ o("div", { className: "flex items-center justify-between px-4 py-2 bg-[#282c34] border-b border-border", children: [
          /* @__PURE__ */ e("span", { className: "text-xs font-mono text-text-muted uppercase tracking-wider", children: r }),
          a && /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              onClick: d,
              className: "flex items-center gap-1.5 text-xs text-text-muted hover:text-white/80 transition-colors",
              "aria-label": "Copia codice",
              children: m ? /* @__PURE__ */ o(l, { children: [
                /* @__PURE__ */ e(x, { className: "h-3.5 w-3.5 text-green-400" }),
                /* @__PURE__ */ e("span", { className: "text-green-400", children: "Copiato" })
              ] }) : /* @__PURE__ */ o(l, { children: [
                /* @__PURE__ */ e(h, { className: "h-3.5 w-3.5" }),
                /* @__PURE__ */ e("span", { children: "Copia" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ e(s.Suspense, { fallback: /* @__PURE__ */ e("pre", { className: "m-0 p-4 bg-[#282c34] text-gray-300 text-sm font-mono overflow-x-auto", children: t }), children: /* @__PURE__ */ e(f, { language: r, children: t }) })
      ]
    }
  );
}
export {
  w as CodeBlock
};
