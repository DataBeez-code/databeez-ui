/** Riporta `width` nell'intervallo [min, max]. Valori non finiti tornano a `min`. */
export function clampWidth(width: number, min: number, max: number): number {
  if (!Number.isFinite(width)) return min
  return Math.min(Math.max(width, min), Math.max(min, max))
}

/**
 * Nuova larghezza dopo un trascinamento. `edge` e' il bordo su cui sta il pannello:
 * un pannello a destra ("right") si allarga trascinando verso sinistra.
 */
export function widthAfterDrag(
  startWidth: number,
  startX: number,
  currentX: number,
  edge: "left" | "right",
  min: number,
  max: number
): number {
  const delta = edge === "right" ? startX - currentX : currentX - startX
  return clampWidth(startWidth + delta, min, max)
}

/**
 * Nuova larghezza dopo un tasto sulla maniglia, o `null` se il tasto non e' gestito.
 * Frecce = +/- `step` (la freccia verso l'interno del pannello lo allarga),
 * Maiusc = passo x5, Home/End = min/max.
 */
export function widthAfterKey(
  key: string,
  width: number,
  edge: "left" | "right",
  min: number,
  max: number,
  step = 16,
  shiftKey = false
): number | null {
  const s = shiftKey ? step * 5 : step
  // Per un pannello a destra la maniglia e' sul suo bordo sinistro: ArrowLeft allarga.
  const grow = edge === "right" ? "ArrowLeft" : "ArrowRight"
  const shrink = edge === "right" ? "ArrowRight" : "ArrowLeft"
  if (key === grow) return clampWidth(width + s, min, max)
  if (key === shrink) return clampWidth(width - s, min, max)
  if (key === "Home") return clampWidth(min, min, max)
  if (key === "End") return clampWidth(max, min, max)
  return null
}
