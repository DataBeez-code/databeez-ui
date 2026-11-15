import { describe, expect, it } from "vitest"

import { getDeltaState } from "./delta"

describe("getDeltaState", () => {
  it("up-is-good: su = positivo, giù = negativo", () => {
    expect(getDeltaState(5)).toEqual({ direction: "up", tone: "positive" })
    expect(getDeltaState(-5)).toEqual({ direction: "down", tone: "negative" })
  })

  it("up-is-bad inverte il tono ma non la direzione", () => {
    expect(getDeltaState(5, "up-is-bad")).toEqual({ direction: "up", tone: "negative" })
    expect(getDeltaState(-5, "up-is-bad")).toEqual({ direction: "down", tone: "positive" })
  })

  it("zero è neutro con entrambe le polarità", () => {
    expect(getDeltaState(0)).toEqual({ direction: "flat", tone: "neutral" })
    expect(getDeltaState(0, "up-is-bad")).toEqual({ direction: "flat", tone: "neutral" })
  })

  it("|value| <= soglia è neutro, oltre la soglia no", () => {
    expect(getDeltaState(0.5, "up-is-good", 0.5).tone).toBe("neutral")
    expect(getDeltaState(-0.5, "up-is-good", 0.5).direction).toBe("flat")
    expect(getDeltaState(0.51, "up-is-good", 0.5).tone).toBe("positive")
  })

  it("valori mancanti o non finiti sono neutri", () => {
    for (const v of [null, undefined, NaN, Infinity]) {
      expect(getDeltaState(v)).toEqual({ direction: "flat", tone: "neutral" })
    }
  })
})
