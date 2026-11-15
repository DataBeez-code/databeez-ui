import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

import { buildThemeCss } from "./build-theme-css.mjs"

// theme.css (Tailwind v4) è generato da globals.css + tailwind.config.js: se qualcuno cambia un token
// e non rigenera il file, questo test fallisce. Rimedio: npm run build:theme
describe("theme.css (Tailwind v4)", () => {
  const committed = readFileSync(new URL("../theme.css", import.meta.url), "utf8").replace(/\r\n/g, "\n")

  it("è allineato a globals.css e tailwind.config.js", () => {
    expect(committed).toBe(buildThemeCss())
  })

  it("non ha cicli: le variabili grezze non usano il namespace --color-", () => {
    expect(committed).not.toMatch(/--color-([\w-]+):\s*rgb\(var\(--color-\1\)/)
    expect(committed).not.toMatch(/^\s*--color-[\w-]+:\s*\d+ \d+ \d+;/m)
  })
})
