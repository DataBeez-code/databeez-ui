/**
 * Formati italiani standard DataBeez: euro, numeri, percentuali, variazioni, date.
 *
 * Valori mancanti: `null`, `undefined`, `NaN` e `±Infinity` (e date non valide) producono
 * sempre il trattino lungo `—` (U+2014), mai `NaN` o `€ NaN`. Le funzioni non lanciano.
 *
 * Caratteri tipografici: spazio indivisibile U+00A0 fra simbolo e cifre, meno vero U+2212
 * per i negativi (mai il trattino ASCII `-`).
 */

/** Segnaposto per valori mancanti o non validi. */
export const FORMAT_PLACEHOLDER = "—"

const NBSP = " "
const MINUS = "−"

const formatters = new Map<string, Intl.NumberFormat>()

/** Formatter it-IT con raggruppamento sempre attivo (il CLDR non raggruppa sotto 10.000). */
function numberFormat(min: number, max: number): Intl.NumberFormat {
  const key = `${min}-${max}`
  let f = formatters.get(key)
  if (!f) {
    f = new Intl.NumberFormat("it-IT", {
      minimumFractionDigits: min,
      maximumFractionDigits: max,
      useGrouping: "always",
    })
    formatters.set(key, f)
  }
  return f
}

function isValid(value: number | null | undefined): value is number {
  return typeof value === "number" && Number.isFinite(value)
}

/** True se, arrotondato alla precisione data, il valore è zero (evita "− € 0"). */
function roundsToZero(abs: number, digits: number): boolean {
  return Math.round(abs * 10 ** digits) === 0
}

/**
 * Numero con separatori italiani (migliaia sempre presenti): `1234.5` → `1.234,5`.
 * Con `fractionDigits` i decimali sono fissi (uniformi, per colonne); senza, il numero è
 * mostrato intero (arrotondato). I negativi usano il meno vero U+2212.
 * Valori mancanti → `—`.
 */
export function formatNumber(value: number | null | undefined, fractionDigits = 0): string {
  if (!isValid(value)) return FORMAT_PLACEHOLDER
  const abs = Math.abs(value)
  const sign = value < 0 && !roundsToZero(abs, fractionDigits) ? MINUS : ""
  return sign + numberFormat(fractionDigits, fractionDigits).format(abs)
}

export interface FormatEuroOptions {
  /** Mostra i centesimi (`€ 1.234,50`). Default `false`. */
  cents?: boolean
  /**
   * Forma compatta in milioni dal milione in su (`€ 14,2 mln`). Default `false`:
   * da usare solo in KPI e card, mai nelle colonne numeriche.
   */
  compact?: boolean
}

/**
 * Importo in euro, simbolo a sinistra con spazio indivisibile.
 *
 * - `1234` → `€ 1.234` (migliaia sempre separate: `2500` → `€ 2.500`)
 * - `-2500` → `− € 2.500` (meno vero U+2212 davanti al simbolo)
 * - `1234.5, { cents: true }` → `€ 1.234,50`
 * - `14_200_000, { compact: true }` → `€ 14,2 mln`
 * - `null` / `undefined` / `NaN` → `—`
 */
export function formatEuro(value: number | null | undefined, opts: FormatEuroOptions = {}): string {
  if (!isValid(value)) return FORMAT_PLACEHOLDER
  const { cents = false, compact = false } = opts
  const abs = Math.abs(value)
  if (compact && abs >= 1_000_000) {
    const mln = abs / 1_000_000
    const digits = mln >= 100 ? 0 : 1
    const body = numberFormat(digits, digits).format(mln).replace(/,0$/, "")
    return `${value < 0 ? MINUS + NBSP : ""}€${NBSP}${body}${NBSP}mln`
  }
  const digits = cents ? 2 : 0
  const sign = value < 0 && !roundsToZero(abs, digits) ? MINUS + NBSP : ""
  return `${sign}€${NBSP}${numberFormat(digits, digits).format(abs)}`
}

export interface FormatPercentOptions {
  /** Cifre decimali (massime, o fisse con `fixed`). Default `1`. */
  fractionDigits?: number
  /** Decimali fissi (`12,0%`) invece di massimi (`12%`): per colonne allineate. Default `false`. */
  fixed?: boolean
}

/**
 * Percentuale; l'input è GIÀ in punti percentuali, non una frazione:
 * `12.5` → `12,5%` (non `0.125`). È la convenzione dei `fmtPct` esistenti nelle app
 * (i dati arrivano dal backend come `*_pct`), così la sostituzione è meccanica.
 * Simbolo attaccato al numero, senza spazio (come nelle app: `12,5%`).
 * `null` / `undefined` / `NaN` → `—`.
 */
export function formatPercent(value: number | null | undefined, opts: FormatPercentOptions = {}): string {
  if (!isValid(value)) return FORMAT_PLACEHOLDER
  const { fractionDigits = 1, fixed = false } = opts
  const min = fixed ? fractionDigits : 0
  const abs = Math.abs(value)
  const sign = value < 0 && !roundsToZero(abs, fractionDigits) ? MINUS : ""
  return `${sign}${numberFormat(min, fractionDigits).format(abs)}%`
}

/**
 * Variazione col segno esplicito: `6` → `+6`, `-14` → `−14` (meno U+2212), `0` → `0`.
 * `fractionDigits` fissa i decimali. `null` / `undefined` / `NaN` → `—`.
 */
export function formatDelta(value: number | null | undefined, fractionDigits = 0): string {
  if (!isValid(value)) return FORMAT_PLACEHOLDER
  const abs = Math.abs(value)
  const sign = roundsToZero(abs, fractionDigits) ? "" : value > 0 ? "+" : MINUS
  return sign + numberFormat(fractionDigits, fractionDigits).format(abs)
}

const DATE_ONLY = /^(\d{4})-(\d{2})-(\d{2})$/

/** Converte in Date; `null` se mancante o non valida. Le date pure `AAAA-MM-GG` sono locali (niente slittamenti di fuso). */
function toDate(value: string | Date | null | undefined): Date | null {
  if (value == null || value === "") return null
  let d: Date
  if (value instanceof Date) {
    d = value
  } else {
    const m = DATE_ONLY.exec(value)
    d = m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : new Date(value)
    // new Date(2026, 1, 31) slitta al 3 marzo: una data inesistente è non valida
    if (m && (d.getMonth() !== Number(m[2]) - 1 || d.getDate() !== Number(m[3]))) return null
  }
  return Number.isNaN(d.getTime()) ? null : d
}

const pad = (n: number) => String(n).padStart(2, "0")

/**
 * Data breve italiana `gg/mm/aaaa`: `"2026-09-19"` → `19/09/2026`.
 * Accetta stringa ISO o `Date` (fuso locale). Mancante o non valida → `—`.
 */
export function formatDate(value: string | Date | null | undefined): string {
  const d = toDate(value)
  if (!d) return FORMAT_PLACEHOLDER
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`
}

/**
 * Data e ora brevi `gg/mm/aaaa, hh:mm` (24 ore, fuso locale).
 * Una stringa solo-data dà `00:00`. Mancante o non valida → `—`.
 */
export function formatDateTime(value: string | Date | null | undefined): string {
  const d = toDate(value)
  if (!d) return FORMAT_PLACEHOLDER
  return `${formatDate(d)}, ${pad(d.getHours())}:${pad(d.getMinutes())}`
}
