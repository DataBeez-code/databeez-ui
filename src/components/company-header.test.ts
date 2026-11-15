import { describe, expect, it } from "vitest"

import { deriveStatoVariant } from "./company-header"

// Valori reali di honey.stati_attivita (honey-core, migrazione/002_seed_data.sql)
const STATI_HONEY: Array<[codice: string, descrizione: string, atteso: string]> = [
  ["ATTIVA", "Attività in corso", "success"],
  ["CESSATA", "Attività cessata", "error"],
  ["SOSPESA", "Attività sospesa", "warning"],
  ["LIQUIDAZIONE", "In liquidazione", "warning"],
  ["FALLIMENTO", "In fallimento", "error"],
  ["SCIOGLIMENTO", "In scioglimento", "warning"],
  ["INATTIVA", "Inattiva", "warning"],
  ["ALTRO", "Altro stato", "neutral"],
]

describe("deriveStatoVariant", () => {
  it.each(STATI_HONEY)("codice %s → %s", (codice, _descrizione, atteso) => {
    expect(deriveStatoVariant(codice)).toBe(atteso)
  })

  it.each(STATI_HONEY)("descrizione di %s («%s») → %s", (_codice, descrizione, atteso) => {
    expect(deriveStatoVariant(descrizione)).toBe(atteso)
  })

  it("forme brevi usate nelle app", () => {
    expect(deriveStatoVariant("Attiva")).toBe("success")
    expect(deriveStatoVariant("Cessata")).toBe("error")
    expect(deriveStatoVariant("Chiusa")).toBe("error")
    expect(deriveStatoVariant("  ")).toBe("neutral")
  })
})
