import * as React from "react";
/** `up-is-good`: un aumento è positivo (fatturato). `up-is-bad`: un aumento è negativo (errori). */
export type DeltaPolarity = "up-is-good" | "up-is-bad";
export type DeltaDirection = "up" | "down" | "flat";
export type DeltaTone = "positive" | "negative" | "neutral";
export interface DeltaState {
    direction: DeltaDirection;
    tone: DeltaTone;
}
/**
 * Logica pura di `Delta`: direzione e tono dal valore, dalla polarità e dalla soglia.
 * `|value| <= threshold` (o valore mancante/non finito) → `flat` / `neutral`.
 */
export declare function getDeltaState(value: number | null | undefined, polarity?: DeltaPolarity, threshold?: number): DeltaState;
export interface DeltaProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Variazione numerica; `null`/`undefined` → `—`. */
    value: number | null | undefined;
    /** Default `up-is-good`. */
    polarity?: DeltaPolarity;
    /** `|value| <= threshold` → neutro. Default `0`. */
    threshold?: number;
    /** Formattazione del valore. Default `formatDelta` (segno esplicito, meno vero U+2212). */
    format?: (value: number) => string;
    /** Testo dopo il valore, es. `"%"` o `" pp"`. */
    suffix?: string;
    size?: "sm" | "md";
}
declare function Delta({ value, polarity, threshold, format, suffix, size, className, ...props }: DeltaProps): import("react/jsx-runtime").JSX.Element;
export { Delta };
