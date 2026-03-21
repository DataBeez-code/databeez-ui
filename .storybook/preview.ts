import type { Preview } from "@storybook/react-vite"
import { databeezeTheme } from "./theme"
import "../globals.css"

const THEME_STORAGE_KEY = 'databeez-theme'

const preview: Preview = {
  parameters: {
    docs: {
      theme: databeezeTheme,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: { name: "light", value: "#f9fafb" },
        dark: { name: "dark", value: "#111827" },
        white: { name: "white", value: "#ffffff" }
      }
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Design Tokens",
          "Theme",
          "Components",
        ],
      },
    },
  },

  globalTypes: {
    theme: {
      description: "Dark mode toggle",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? "light"
      const isDark = theme === "dark"
      document.documentElement.classList.toggle("dark", isDark)
      localStorage.setItem(THEME_STORAGE_KEY, theme)
      return Story()
    },
  ],

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
}

export default preview
