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
export declare const FORMAT_PLACEHOLDER = "\u2014";
/**
 * Numero con separatori italiani (migliaia sempre presenti): `1234.5` → `1.234,5`.
 * Con `fractionDigits` i decimali sono fissi (uniformi, per colonne); senza, il numero è
 * mostrato intero (arrotondato). I negativi usano il meno vero U+2212.
 * Valori mancanti → `—`.
 */
export declare function formatNumber(value: number | null | undefined, fractionDigits?: number): string;
export interface FormatEuroOptions {
    /** Mostra i centesimi (`€ 1.234,50`). Default `false`. */
    cents?: boolean;
    /**
     * Forma compatta in milioni dal milione in su (`€ 14,2 mln`). Default `false`:
     * da usare solo in KPI e card, mai nelle colonne numeriche.
     */
    compact?: boolean;
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
export declare function formatEuro(value: number | null | undefined, opts?: FormatEuroOptions): string;
export interface FormatPercentOptions {
    /** Cifre decimali (massime, o fisse con `fixed`). Default `1`. */
    fractionDigits?: number;
    /** Decimali fissi (`12,0%`) invece di massimi (`12%`): per colonne allineate. Default `false`. */
    fixed?: boolean;
}
/**
 * Percentuale; l'input è GIÀ in punti percentuali, non una frazione:
 * `12.5` → `12,5%` (non `0.125`). È la convenzione dei `fmtPct` esistenti nelle app
 * (i dati arrivano dal backend come `*_pct`), così la sostituzione è meccanica.
 * Simbolo attaccato al numero, senza spazio (come nelle app: `12,5%`).
 * `null` / `undefined` / `NaN` → `—`.
 */
export declare function formatPercent(value: number | null | undefined, opts?: FormatPercentOptions): string;
/**
 * Variazione col segno esplicito: `6` → `+6`, `-14` → `−14` (meno U+2212), `0` → `0`.
 * `fractionDigits` fissa i decimali. `null` / `undefined` / `NaN` → `—`.
 */
export declare function formatDelta(value: number | null | undefined, fractionDigits?: number): string;
/**
 * Data breve italiana `gg/mm/aaaa`: `"2026-09-19"` → `19/09/2026`.
 * Accetta stringa ISO o `Date` (fuso locale). Mancante o non valida → `—`.
 */
export declare function formatDate(value: string | Date | null | undefined): string;
/**
 * Data e ora brevi `gg/mm/aaaa, hh:mm` (24 ore, fuso locale).
 * Una stringa solo-data dà `00:00`. Mancante o non valida → `—`.
 */
export declare function formatDateTime(value: string | Date | null | undefined): string;
