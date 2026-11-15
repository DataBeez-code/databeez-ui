import { describe, expect, it, vi } from "vitest"

import {
  createToastStore,
  DEFAULT_TOAST_DURATION,
  resolveToastDuration,
  toastAnnouncement,
} from "./toast-store"

describe("resolveToastDuration", () => {
  it("usa il default se non specificata", () => {
    expect(resolveToastDuration(undefined)).toBe(DEFAULT_TOAST_DURATION)
  })
  it("null, Infinity, 0 e negativi disattivano la chiusura automatica", () => {
    expect(resolveToastDuration(null)).toBeNull()
    expect(resolveToastDuration(Infinity)).toBeNull()
    expect(resolveToastDuration(0)).toBeNull()
    expect(resolveToastDuration(-1)).toBeNull()
  })
  it("mantiene una durata valida", () => {
    expect(resolveToastDuration(2000)).toBe(2000)
  })
})

describe("toastAnnouncement", () => {
  it("assertive solo per error e warning", () => {
    expect(toastAnnouncement("error")).toBe("assertive")
    expect(toastAnnouncement("warning")).toBe("assertive")
    expect(toastAnnouncement("success")).toBe("polite")
    expect(toastAnnouncement("info")).toBe("polite")
    expect(toastAnnouncement("neutral")).toBe("polite")
  })
})

describe("createToastStore", () => {
  it("aggiunge con default neutral e id generato", () => {
    const store = createToastStore()
    const id = store.add({ title: "Ciao" })
    const [t] = store.getSnapshot()
    expect(t).toMatchObject({ id, title: "Ciao", variant: "neutral", duration: DEFAULT_TOAST_DURATION })
  })

  it("lo stesso id sostituisce il toast", () => {
    const store = createToastStore()
    store.add({ id: "x", title: "uno" })
    store.add({ id: "x", title: "due" })
    expect(store.getSnapshot()).toHaveLength(1)
    expect(store.getSnapshot()[0].title).toBe("due")
  })

  it("scarta i più vecchi oltre il massimo", () => {
    const store = createToastStore(2)
    store.add({ title: "a" })
    store.add({ title: "b" })
    store.add({ title: "c" })
    expect(store.getSnapshot().map((t) => t.title)).toEqual(["b", "c"])
  })

  it("dismiss per id e dismiss totale", () => {
    const store = createToastStore()
    const a = store.add({ title: "a" })
    store.add({ title: "b" })
    store.dismiss(a)
    expect(store.getSnapshot().map((t) => t.title)).toEqual(["b"])
    store.dismiss()
    expect(store.getSnapshot()).toHaveLength(0)
  })

  it("notifica gli iscritti e rispetta la disiscrizione", () => {
    const store = createToastStore()
    const l = vi.fn()
    const off = store.subscribe(l)
    store.add({ title: "a" })
    expect(l).toHaveBeenCalledTimes(1)
    off()
    store.add({ title: "b" })
    expect(l).toHaveBeenCalledTimes(1)
  })
})
