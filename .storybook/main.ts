import type { StorybookConfig } from "@storybook/react-vite"
import { fileURLToPath } from "url"

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  outputDir: "storybook-static",
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-vitest"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  staticDirs: ["../public"],

  viteFinal(config) {
    // Storybook's MDX plugin uses import.meta.resolve() which returns file:// URLs
    // on Windows. Vite's import-analysis plugin cannot resolve these. Rewrite them
    // to plain filesystem paths so Vite can handle them.
    config.plugins ??= []
    config.plugins.push({
      name: "fix-file-url-imports",
      enforce: "pre",
      resolveId(source) {
        if (source.startsWith("file://")) {
          return fileURLToPath(source)
        }
      },
    })

    // Pre-bundle ESM-only deps so Storybook/Vite can resolve them
    config.optimizeDeps ??= {}
    config.optimizeDeps.include ??= []
    config.optimizeDeps.include.push(
      "react-day-picker",
      "date-fns",
      "date-fns/locale",
      "@radix-ui/react-popover"
    )

    return config
  },
}

export default config
