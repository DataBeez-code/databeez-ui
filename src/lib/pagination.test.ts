import { describe, expect, it } from "vitest"

import { clampPage, getPageCount } from "./pagination"

describe("getPageCount", () => {
  it("arrotonda per eccesso", () => {
    expect(getPageCount(101, 10)).toBe(11)
    expect(getPageCount(100, 10)).toBe(10)
  })
  it("ha sempre almeno una pagina", () => {
    expect(getPageCount(0, 10)).toBe(1)
    expect(getPageCount(5, 0)).toBe(1)
    expect(getPageCount(NaN, 10)).toBe(1)
  })
})

describe("clampPage", () => {
  it("limita ai bordi", () => {
    expect(clampPage(0, 7)).toBe(1)
    expect(clampPage(9, 7)).toBe(7)
    expect(clampPage(3, 7)).toBe(3)
    expect(clampPage(2.7, 7)).toBe(2)
    expect(clampPage(NaN, 7)).toBe(1)
  })
})
