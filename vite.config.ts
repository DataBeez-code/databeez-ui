import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.test.ts"],
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DatabeezUI",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        // Le icone le fornisce l'app (peerDependency): una sola copia di lucide nel bundle finale
        "lucide-react",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        banner: (chunk) => {
          // Add "use client" so Next.js/Turbopack treats every chunk
          // as a client boundary and skips SSR evaluation of browser APIs.
          if (chunk.name === "index") return '"use client";\n'
          return ""
        },
      },
    },
  },
})