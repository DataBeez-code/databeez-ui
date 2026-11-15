import * as React from "react";
export type RiskLevel = "na" | "low" | "med" | "high" | "very-high";
/** Tre soglie in ordine crescente: i punti di taglio fra le quattro bande. */
export type RiskThresholds = readonly [number, number, number];
export interface RiskLevelFromScoreOptions {
    /**
     * `true` (default): punteggio alto = rischio alto (basso < t1 <= medio < t2 <= alto < t3 <= molto alto).
     * `false`: punteggio alto = situazione migliore (es. un investment score 0-100):
     * le bande si invertono, sotto t1 è «molto alto».
     */
    higherIsRiskier?: boolean;
}
/**
 * Traduce un punteggio in un livello. Le soglie le decide l'app (cambiano per prodotto).
 * Convenzione: `thresholds = [t1, t2, t3]` in ORDINE CRESCENTE, ogni soglia appartiene alla
 * banda superiore (score === t1 è già la seconda banda). Con `higherIsRiskier: false` le bande
 * sono lette al contrario. null/undefined/NaN/±Infinity o soglie non valide o non crescenti → "na".
 */
export declare function riskLevelFromScore(score: number | null | undefined, thresholds: RiskThresholds, { higherIsRiskier }?: RiskLevelFromScoreOptions): RiskLevel;
export declare const RISK_LEVEL_LABELS: Record<RiskLevel, string>;
export interface RiskBadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
    level: RiskLevel;
    /** Etichette personalizzate (parziali), es. { high: "Critico" }. */
    labels?: Partial<Record<RiskLevel, string>>;
    /** Valore numerico opzionale mostrato accanto all'etichetta. */
    value?: number | string;
    /** Prefisso dell'aria-label (default «Rischio»), es. «Score». */
    subject?: string;
}
declare function RiskBadge({ level, labels, value, subject, className, ...props }: RiskBadgeProps): import("react/jsx-runtime").JSX.Element;
export { RiskBadge };
