import { addons } from "@storybook/manager-api"
import { databeezeTheme } from "./theme"

addons.setConfig({
  theme: databeezeTheme,
  sidebar: {
    showRoots: true,
  },
})
