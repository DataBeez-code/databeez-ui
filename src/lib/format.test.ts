import { describe, expect, it } from "vitest"

import { formatDate, formatDateTime, formatDelta, formatEuro, formatNumber, formatPercent } from "./format"

const NBSP = " "
const MINUS = "−"

const codepoints = (s: string) => Array.from(s).map((c) => c.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0"))

describe("formatEuro", () => {
  it("mette il simbolo a sinistra con spazio indivisibile U+00A0", () => {
    const out = formatEuro(1234)
    expect(out).toBe(`€${NBSP}1.234`)
    expect(codepoints(out).slice(0, 3)).toEqual(["20AC", "00A0", "0031"])
    expect(out).not.toContain(" ") // nessuno spazio ASCII
  })

  it("separa le migliaia anche sotto 10.000", () => {
    expect(formatEuro(2500)).toBe(`€${NBSP}2.500`)
    expect(formatEuro(1000)).toBe(`€${NBSP}1.000`)
    expect(formatEuro(9999)).toBe(`€${NBSP}9.999`)
    expect(formatEuro(10000)).toBe(`€${NBSP}10.000`)
  })

  it("gestisce zero e valori sotto 1.000", () => {
    expect(formatEuro(0)).toBe(`€${NBSP}0`)
    expect(formatEuro(999)).toBe(`€${NBSP}999`)
  })

  it("usa il meno vero U+2212 davanti al simbolo", () => {
    const out = formatEuro(-2500)
    expect(out).toBe(`${MINUS}${NBSP}€${NBSP}2.500`)
    expect(codepoints(out).slice(0, 4)).toEqual(["2212", "00A0", "20AC", "00A0"])
    expect(out).not.toContain("-")
  })

  it("non produce un '− € 0' per negativi che arrotondano a zero", () => {
    expect(formatEuro(-0.4)).toBe(`€${NBSP}0`)
    expect(formatEuro(-0)).toBe(`€${NBSP}0`)
  })

  it("centesimi: decimali sempre fissi a due", () => {
    expect(formatEuro(1234.5, { cents: true })).toBe(`€${NBSP}1.234,50`)
    expect(formatEuro(0.05, { cents: true })).toBe(`€${NBSP}0,05`)
    expect(formatEuro(-2500, { cents: true })).toBe(`${MINUS}${NBSP}€${NBSP}2.500,00`)
    expect(formatEuro(1234.56)).toBe(`€${NBSP}1.235`)
  })

  it("forma compatta mai attiva di default", () => {
    expect(formatEuro(14_200_000)).toBe(`€${NBSP}14.200.000`)
    expect(formatEuro(14_200_000, { compact: false })).toBe(`€${NBSP}14.200.000`)
  })

  it("forma compatta in milioni solo se richiesta", () => {
    expect(formatEuro(14_200_000, { compact: true })).toBe(`€${NBSP}14,2${NBSP}mln`)
    expect(formatEuro(1_000_000, { compact: true })).toBe(`€${NBSP}1${NBSP}mln`)
    expect(formatEuro(250_000_000, { compact: true })).toBe(`€${NBSP}250${NBSP}mln`)
    expect(formatEuro(-14_200_000, { compact: true })).toBe(`${MINUS}${NBSP}€${NBSP}14,2${NBSP}mln`)
  })

  it("forma compatta sotto il milione resta piena", () => {
    expect(formatEuro(999_999, { compact: true })).toBe(`€${NBSP}999.999`)
    expect(formatEuro(1234, { compact: true })).toBe(`€${NBSP}1.234`)
  })

  it("milioni in forma piena", () => {
    expect(formatEuro(1_234_567)).toBe(`€${NBSP}1.234.567`)
  })

  it("null, undefined, NaN, Infinity → trattino lungo", () => {
    for (const v of [null, undefined, NaN, Infinity, -Infinity]) {
      expect(formatEuro(v)).toBe("—")
    }
    expect(formatEuro(null).codePointAt(0)).toBe(0x2014)
    expect(formatEuro(NaN, { compact: true, cents: true })).toBe("—")
  })
})

describe("formatNumber", () => {
  it("raggruppa sempre le migliaia", () => {
    expect(formatNumber(0)).toBe("0")
    expect(formatNumber(999)).toBe("999")
    expect(formatNumber(2500)).toBe("2.500")
    expect(formatNumber(1_234_567)).toBe("1.234.567")
  })

  it("decimali fissi", () => {
    expect(formatNumber(1234.5, 2)).toBe("1.234,50")
    expect(formatNumber(3, 1)).toBe("3,0")
  })

  it("negativi col meno U+2212", () => {
    expect(formatNumber(-1500)).toBe(`${MINUS}1.500`)
    expect(codepoints(formatNumber(-5))[0]).toBe("2212")
    expect(formatNumber(-0.2)).toBe("0")
  })

  it("mancanti → trattino", () => {
    expect(formatNumber(null)).toBe("—")
    expect(formatNumber(undefined)).toBe("—")
    expect(formatNumber(NaN)).toBe("—")
  })
})

describe("formatPercent", () => {
  it("l'input è in punti percentuali, non una frazione", () => {
    expect(formatPercent(12.5)).toBe("12,5%")
    expect(formatPercent(0.125)).toBe("0,1%")
    expect(formatPercent(100)).toBe("100%")
  })

  it("decimali massimi di default (1), fissi su richiesta", () => {
    expect(formatPercent(12)).toBe("12%")
    expect(formatPercent(12.34)).toBe("12,3%")
    expect(formatPercent(12, { fixed: true })).toBe("12,0%")
    expect(formatPercent(5.1234, { fractionDigits: 2, fixed: true })).toBe("5,12%")
  })

  it("zero, negativi e migliaia", () => {
    expect(formatPercent(0)).toBe("0%")
    expect(formatPercent(-3.5)).toBe(`${MINUS}3,5%`)
    expect(formatPercent(-0.01)).toBe("0%")
    expect(formatPercent(1500)).toBe("1.500%")
  })

  it("mancanti → trattino", () => {
    expect(formatPercent(null)).toBe("—")
    expect(formatPercent(undefined)).toBe("—")
    expect(formatPercent(NaN)).toBe("—")
  })
})

describe("formatDelta", () => {
  it("segno esplicito", () => {
    expect(formatDelta(6)).toBe("+6")
    expect(formatDelta(0)).toBe("0")
    expect(formatDelta(1500)).toBe("+1.500")
  })

  it("negativi col meno U+2212", () => {
    const out = formatDelta(-14)
    expect(out).toBe(`${MINUS}14`)
    expect(codepoints(out)[0]).toBe("2212")
  })

  it("decimali e arrotondamento a zero senza segno", () => {
    expect(formatDelta(2.5, 1)).toBe("+2,5")
    expect(formatDelta(-0.04, 1)).toBe("0,0")
    expect(formatDelta(0.4)).toBe("0")
  })

  it("mancanti → trattino", () => {
    expect(formatDelta(null)).toBe("—")
    expect(formatDelta(undefined)).toBe("—")
    expect(formatDelta(NaN)).toBe("—")
  })
})

describe("formatDate / formatDateTime", () => {
  it("data valida da stringa ISO e da Date", () => {
    expect(formatDate("2026-09-19")).toBe("19/09/2026")
    expect(formatDate("2026-01-05")).toBe("05/01/2026")
    expect(formatDate(new Date(2026, 8, 19, 23, 59))).toBe("19/09/2026")
    expect(formatDate("2026-09-19T10:30:00")).toBe("19/09/2026")
  })

  it("data-ora breve in 24 ore", () => {
    expect(formatDateTime(new Date(2026, 8, 19, 9, 5))).toBe("19/09/2026, 09:05")
    expect(formatDateTime("2026-09-19T18:30:00")).toBe("19/09/2026, 18:30")
    expect(formatDateTime("2026-09-19")).toBe("19/09/2026, 00:00")
  })

  it("non valide o mancanti → trattino", () => {
    for (const v of ["", "non una data", "2026-02-31", "2026-13-01", null, undefined, new Date("x")]) {
      expect(formatDate(v)).toBe("—")
      expect(formatDateTime(v)).toBe("—")
    }
  })
})
