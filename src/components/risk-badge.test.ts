import { describe, expect, it } from "vitest"

import { riskLevelFromScore } from "./risk-badge"

const T = [30, 60, 80] as const

describe("riskLevelFromScore", () => {
  it("valori mancanti o non finiti → na", () => {
    expect(riskLevelFromScore(null, T)).toBe("na")
    expect(riskLevelFromScore(undefined, T)).toBe("na")
    expect(riskLevelFromScore(NaN, T)).toBe("na")
    expect(riskLevelFromScore(Infinity, T)).toBe("na")
  })

  it("punteggio alto = rischio alto (default), soglie nella banda superiore", () => {
    expect(riskLevelFromScore(0, T)).toBe("low")
    expect(riskLevelFromScore(29.9, T)).toBe("low")
    expect(riskLevelFromScore(30, T)).toBe("med")
    expect(riskLevelFromScore(59.9, T)).toBe("med")
    expect(riskLevelFromScore(60, T)).toBe("high")
    expect(riskLevelFromScore(79.9, T)).toBe("high")
    expect(riskLevelFromScore(80, T)).toBe("very-high")
    expect(riskLevelFromScore(1000, T)).toBe("very-high")
    expect(riskLevelFromScore(-5, T)).toBe("low")
  })

  it("higherIsRiskier=false inverte le bande", () => {
    const o = { higherIsRiskier: false }
    expect(riskLevelFromScore(10, T, o)).toBe("very-high")
    expect(riskLevelFromScore(30, T, o)).toBe("high")
    expect(riskLevelFromScore(60, T, o)).toBe("med")
    expect(riskLevelFromScore(80, T, o)).toBe("low")
    expect(riskLevelFromScore(null, T, o)).toBe("na")
  })

  it("soglie non valide o non crescenti → na", () => {
    expect(riskLevelFromScore(50, [80, 60, 30])).toBe("na")
    expect(riskLevelFromScore(50, [30, NaN, 80])).toBe("na")
  })

  it("soglie uguali: la banda intermedia si salta", () => {
    expect(riskLevelFromScore(50, [50, 50, 80])).toBe("high")
  })
})
