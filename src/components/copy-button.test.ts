import { createElement } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { CopyButton } from "./copy-button"

describe("CopyButton", () => {
  it("ha una regione live fuori dal pulsante, presente prima della copia", () => {
    const html = renderToStaticMarkup(createElement(CopyButton, { text: "IT123" }))
    const status = html.indexOf('role="status"')
    expect(status).toBeGreaterThan(html.indexOf("</button>"))
    expect(html).toContain('aria-live="polite"')
  })

  it("un aria-label dell'app non sostituisce la regione live", () => {
    const html = renderToStaticMarkup(
      createElement(CopyButton, { text: "IT123", "aria-label": "Copia la partita IVA" }),
    )
    expect(html).toContain('aria-label="Copia la partita IVA"')
    expect(html).toContain('role="status"')
  })
})
