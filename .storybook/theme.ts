import { create } from "@storybook/theming/create"

export const databeezeTheme = create({
  base: "light",

  // Brand (appare in cima alla sidebar)
  brandTitle: "Databeez UI",
  brandUrl: "https://www.databeez.ai",
  brandImage: "/databeez_logo_esteso.png",
  brandTarget: "_blank",

  // UI
  colorPrimary: "#f59e0b",   // amber-500
  colorSecondary: "#d97706", // amber-600

  // Toolbar
  barTextColor: "#6b7280",
  barSelectedColor: "#f59e0b",
  barBg: "#ffffff",

  // Fonts
  fontBase: "'Inter', system-ui, sans-serif",
  fontCode: "'JetBrains Mono', monospace",
})
