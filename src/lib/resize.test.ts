import { describe, expect, it } from "vitest"

import { clampWidth, widthAfterDrag, widthAfterKey } from "./resize"

describe("clampWidth", () => {
  it("limita a min e max", () => {
    expect(clampWidth(100, 200, 500)).toBe(200)
    expect(clampWidth(900, 200, 500)).toBe(500)
    expect(clampWidth(300, 200, 500)).toBe(300)
  })
  it("valore non finito -> min; max < min -> min", () => {
    expect(clampWidth(NaN, 200, 500)).toBe(200)
    expect(clampWidth(300, 400, 100)).toBe(400)
  })
})

describe("widthAfterDrag", () => {
  it("pannello a destra: trascinare a sinistra allarga", () => {
    expect(widthAfterDrag(380, 1000, 900, "right", 280, 640)).toBe(480)
    expect(widthAfterDrag(380, 1000, 1100, "right", 280, 640)).toBe(280)
  })
  it("pannello a sinistra: trascinare a destra allarga", () => {
    expect(widthAfterDrag(300, 300, 400, "left", 200, 500)).toBe(400)
    expect(widthAfterDrag(300, 300, 900, "left", 200, 500)).toBe(500)
  })
})

describe("widthAfterKey", () => {
  it("frecce con passo, rispettando i limiti (pannello a destra)", () => {
    expect(widthAfterKey("ArrowLeft", 380, "right", 280, 640)).toBe(396)
    expect(widthAfterKey("ArrowRight", 380, "right", 280, 640)).toBe(364)
    expect(widthAfterKey("ArrowRight", 285, "right", 280, 640)).toBe(280)
  })
  it("pannello a sinistra inverte le frecce", () => {
    expect(widthAfterKey("ArrowRight", 300, "left", 200, 500)).toBe(316)
  })
  it("Maiusc moltiplica il passo, Home/End vanno ai limiti", () => {
    expect(widthAfterKey("ArrowLeft", 380, "right", 280, 640, 16, true)).toBe(460)
    expect(widthAfterKey("Home", 380, "right", 280, 640)).toBe(280)
    expect(widthAfterKey("End", 380, "right", 280, 640)).toBe(640)
  })
  it("tasto non gestito -> null", () => {
    expect(widthAfterKey("a", 380, "right", 280, 640)).toBeNull()
  })
})
