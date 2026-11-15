import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

import { buildThemeCss, readBlock } from "./build-theme-css.mjs"

// theme.css (Tailwind v4) è generato da globals.css + tailwind.config.js: se qualcuno cambia un token
// e non rigenera il file, questo test fallisce. Rimedio: npm run build:theme
describe("theme.css (Tailwind v4)", () => {
  const committed = readFileSync(new URL("../theme.css", import.meta.url), "utf8").replace(/\r\n/g, "\n")

  // Contenuto di un blocco `selettore { … }` del CSS generato (il primo che compare)
  const blockOf = (selector) => {
    const start = committed.indexOf(`${selector} {`)
    return committed.slice(start, committed.indexOf("}", start))
  }
  const declared = (css) => new Set([...css.matchAll(/(--dbz-[\w-]+)\s*:/g)].map((m) => m[1]))

  it("è allineato a globals.css e tailwind.config.js", () => {
    expect(committed).toBe(buildThemeCss())
  })

  it("non ha cicli: le variabili grezze non usano il namespace --color-", () => {
    expect(committed).not.toMatch(/--color-([\w-]+):\s*rgb\(var\(--color-\1\)/)
    expect(committed).not.toMatch(/^\s*--color-[\w-]+:\s*\d+ \d+ \d+;/m)
  })

  // Il confronto col generatore non vede un token perso dal generatore stesso: questi controlli sì.
  it("ogni --dbz-* usato è dichiarato in :root", () => {
    const root = declared(blockOf(":root"))
    const used = new Set([...committed.matchAll(/var\((--dbz-[\w-]+)\)/g)].map((m) => m[1]))
    const missing = [...used].filter((name) => !root.has(name))
    expect(missing).toEqual([])
  })

  it("i nomi ridefiniti in .dark esistono in :root", () => {
    const root = declared(blockOf(":root"))
    const extra = [...declared(blockOf(".dark"))].filter((name) => !root.has(name))
    expect(extra).toEqual([])
  })

  it("il parser fallisce invece di perdere dichiarazioni scritte su più righe", () => {
    const css = ":root {\n  --color-a: 1 2 3;\n  --color-b:\n    4 5 6;\n}\n"
    expect(() => readBlock(css, ":root")).toThrow(/2 dichiarazioni --color-\* ma solo 1 lette/)
  })
})
