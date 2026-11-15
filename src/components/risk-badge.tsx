import * as React from "react"

import { cn } from "@/lib/utils"

export type RiskLevel = "na" | "low" | "med" | "high" | "very-high"

/** Tre soglie in ordine crescente: i punti di taglio fra le quattro bande. */
export type RiskThresholds = readonly [number, number, number]

export interface RiskLevelFromScoreOptions {
  /**
   * `true` (default): punteggio alto = rischio alto (basso < t1 <= medio < t2 <= alto < t3 <= molto alto).
   * `false`: punteggio alto = situazione migliore (es. un investment score 0-100):
   * le bande si invertono, sotto t1 è «molto alto».
   */
  higherIsRiskier?: boolean
}

/**
 * Traduce un punteggio in un livello. Le soglie le decide l'app (cambiano per prodotto).
 * Convenzione: `thresholds = [t1, t2, t3]` in ORDINE CRESCENTE, ogni soglia appartiene alla
 * banda superiore (score === t1 è già la seconda banda). Con `higherIsRiskier: false` le bande
 * sono lette al contrario. null/undefined/NaN/±Infinity o soglie non valide o non crescenti → "na".
 */
export function riskLevelFromScore(
  score: number | null | undefined,
  thresholds: RiskThresholds,
  { higherIsRiskier = true }: RiskLevelFromScoreOptions = {}
): RiskLevel {
  if (score == null || !Number.isFinite(score)) return "na"
  const [t1, t2, t3] = thresholds
  if (![t1, t2, t3].every(Number.isFinite) || !(t1 <= t2 && t2 <= t3)) return "na"
  const band = score < t1 ? 0 : score < t2 ? 1 : score < t3 ? 2 : 3
  const levels: RiskLevel[] = higherIsRiskier
    ? ["low", "med", "high", "very-high"]
    : ["very-high", "high", "med", "low"]
  return levels[band]
}

export const RISK_LEVEL_LABELS: Record<RiskLevel, string> = {
  na: "n.d.",
  low: "Basso",
  med: "Medio",
  high: "Alto",
  "very-high": "Molto alto",
}

const LEVEL_CLASSES: Record<RiskLevel, string> = {
  na: "text-risk-na-fg bg-risk-na-bg",
  low: "text-risk-low-fg bg-risk-low-bg",
  med: "text-risk-med-fg bg-risk-med-bg",
  high: "text-risk-high-fg bg-risk-high-bg",
  "very-high": "text-risk-very-high-fg bg-risk-very-high-bg",
}

export interface RiskBadgeProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  level: RiskLevel
  /** Etichette personalizzate (parziali), es. { high: "Critico" }. */
  labels?: Partial<Record<RiskLevel, string>>
  /** Valore numerico opzionale mostrato accanto all'etichetta. */
  value?: number | string
  /** Prefisso dell'aria-label (default «Rischio»), es. «Score». */
  subject?: string
}

function RiskBadge({
  level,
  labels,
  value,
  subject = "Rischio",
  className,
  ...props
}: RiskBadgeProps) {
  const label = labels?.[level] ?? RISK_LEVEL_LABELS[level]
  const hasValue = value !== undefined && value !== null && value !== ""
  return (
    <span
      role="img"
      aria-label={`${subject}: ${label}${hasValue ? `, ${value}` : ""}`}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
        LEVEL_CLASSES[level],
        className
      )}
      {...props}
    >
      <span aria-hidden="true" className="inline-flex items-center gap-1.5">
        {label}
        {hasValue && <span className="tabular-nums font-semibold">{value}</span>}
      </span>
    </span>
  )
}

export { RiskBadge }
