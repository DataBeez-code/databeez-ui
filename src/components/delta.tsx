import * as React from "react"
import { ArrowDown, ArrowUp, Minus } from "lucide-react"

import { cn } from "@/lib/utils"
import { FORMAT_PLACEHOLDER, formatDelta } from "@/lib/format"

/** `up-is-good`: un aumento è positivo (fatturato). `up-is-bad`: un aumento è negativo (errori). */
export type DeltaPolarity = "up-is-good" | "up-is-bad"
export type DeltaDirection = "up" | "down" | "flat"
export type DeltaTone = "positive" | "negative" | "neutral"

export interface DeltaState {
  direction: DeltaDirection
  tone: DeltaTone
}

/**
 * Logica pura di `Delta`: direzione e tono dal valore, dalla polarità e dalla soglia.
 * `|value| <= threshold` (o valore mancante/non finito) → `flat` / `neutral`.
 */
export function getDeltaState(
  value: number | null | undefined,
  polarity: DeltaPolarity = "up-is-good",
  threshold = 0
): DeltaState {
  if (typeof value !== "number" || !Number.isFinite(value) || Math.abs(value) <= threshold) {
    return { direction: "flat", tone: "neutral" }
  }
  const direction: DeltaDirection = value > 0 ? "up" : "down"
  const good = (direction === "up") === (polarity === "up-is-good")
  return { direction, tone: good ? "positive" : "negative" }
}

const TONE_CLASS: Record<DeltaTone, string> = {
  positive: "text-trend-positive",
  negative: "text-trend-negative",
  neutral: "text-trend-neutral",
}

const DIRECTION_LABEL: Record<DeltaDirection, string> = {
  up: "in aumento",
  down: "in calo",
  flat: "invariato",
}

const DIRECTION_ICON = { up: ArrowUp, down: ArrowDown, flat: Minus } as const

export interface DeltaProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Variazione numerica; `null`/`undefined` → `—`. */
  value: number | null | undefined
  /** Default `up-is-good`. */
  polarity?: DeltaPolarity
  /** `|value| <= threshold` → neutro. Default `0`. */
  threshold?: number
  /** Formattazione del valore. Default `formatDelta` (segno esplicito, meno vero U+2212). */
  format?: (value: number) => string
  /** Testo dopo il valore, es. `"%"` o `" pp"`. */
  suffix?: string
  size?: "sm" | "md"
}

function Delta({
  value,
  polarity = "up-is-good",
  threshold = 0,
  format,
  suffix = "",
  size = "sm",
  className,
  ...props
}: DeltaProps) {
  const base = cn(
    "inline-flex items-center gap-0.5 font-medium tabular-nums",
    size === "sm" ? "text-xs" : "text-sm",
    className
  )

  if (typeof value !== "number" || !Number.isFinite(value)) {
    return (
      <span className={cn(base, TONE_CLASS.neutral)} {...props}>
        {FORMAT_PLACEHOLDER}
      </span>
    )
  }

  // Col formato di default (formatDelta, 0 decimali) un valore sotto 0,5 si legge «0»:
  // freccia e colore devono dire «invariato», non «in aumento».
  const effectiveThreshold = format ? threshold : Math.max(threshold, Math.abs(value) < 0.5 ? Math.abs(value) : 0)
  const { direction, tone } = getDeltaState(value, polarity, effectiveThreshold)
  const formatValue = format ?? ((v: number) => formatDelta(v))
  const Icon = DIRECTION_ICON[direction]
  const iconSize = size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"

  return (
    <span className={cn(base, TONE_CLASS[tone])} {...props}>
      <Icon className={iconSize} aria-hidden="true" />
      {/* Il colore da solo non basta: con up-is-bad un aumento è un peggioramento */}
      <span className="sr-only">
        {DIRECTION_LABEL[direction]}
        {tone === "positive" ? ", positivo" : tone === "negative" ? ", negativo" : ""}:{" "}
      </span>
      <span>
        {formatValue(value)}
        {suffix}
      </span>
    </span>
  )
}

export { Delta }
