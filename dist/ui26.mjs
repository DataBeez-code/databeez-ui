import { jsx as h } from "react/jsx-runtime";
import { createContext as l, useState as u, useEffect as a, useContext as f } from "react";
const o = "databeez-theme", k = `(function(){var t=localStorage.getItem('${o}');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();`, c = l({
  theme: "system",
  setTheme: () => {
  }
});
function p({ children: m }) {
  const [s, n] = u("system"), r = (e) => {
    const t = document.documentElement, i = window.matchMedia("(prefers-color-scheme: dark)").matches;
    e === "dark" || e === "system" && i ? t.classList.add("dark") : t.classList.remove("dark");
  };
  a(() => {
    const t = localStorage.getItem(o) ?? "system";
    n(t), r(t);
  }, []), a(() => {
    if (s !== "system") return;
    const e = window.matchMedia("(prefers-color-scheme: dark)"), t = () => r("system");
    return e.addEventListener("change", t), () => e.removeEventListener("change", t);
  }, [s]);
  const d = (e) => {
    n(e), localStorage.setItem(o, e), r(e);
  };
  return /* @__PURE__ */ h(c.Provider, { value: { theme: s, setTheme: d }, children: m });
}
function v() {
  return f(c);
}
export {
  k as THEME_ANTI_FOUC_SCRIPT,
  o as THEME_STORAGE_KEY,
  p as ThemeProvider,
  v as useTheme
};
