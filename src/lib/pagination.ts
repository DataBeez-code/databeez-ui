/** Numero di pagine per `totalItems` elementi con `pageSize` per pagina (minimo 1). */
export function getPageCount(totalItems: number, pageSize: number): number {
  if (!Number.isFinite(totalItems) || !Number.isFinite(pageSize) || pageSize <= 0) return 1
  return Math.max(1, Math.ceil(totalItems / pageSize))
}

/** Riporta `page` nell'intervallo valido 1..pageCount. */
export function clampPage(page: number, pageCount: number): number {
  if (!Number.isFinite(page)) return 1
  return Math.min(Math.max(1, Math.trunc(page)), Math.max(1, pageCount))
}
