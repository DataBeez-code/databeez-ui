/** Riporta `width` nell'intervallo [min, max]. Valori non finiti tornano a `min`. */
export declare function clampWidth(width: number, min: number, max: number): number;
/**
 * Nuova larghezza dopo un trascinamento. `edge` e' il bordo su cui sta il pannello:
 * un pannello a destra ("right") si allarga trascinando verso sinistra.
 */
export declare function widthAfterDrag(startWidth: number, startX: number, currentX: number, edge: "left" | "right", min: number, max: number): number;
/**
 * Nuova larghezza dopo un tasto sulla maniglia, o `null` se il tasto non e' gestito.
 * Frecce = +/- `step` (la freccia verso l'interno del pannello lo allarga),
 * Maiusc = passo x5, Home/End = min/max.
 */
export declare function widthAfterKey(key: string, width: number, edge: "left" | "right", min: number, max: number, step?: number, shiftKey?: boolean): number | null;
