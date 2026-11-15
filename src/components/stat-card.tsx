import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Delta, type DeltaProps } from "@/components/delta"

/** Trend strutturato (numerico), reso con `Delta`. */
export interface StatCardDeltaTrend
  extends Pick<DeltaProps, "polarity" | "format" | "suffix" | "threshold"> {
  value: number | null | undefined
}

/** Trend legacy: testo libero e colore positivo/negativo. */
export interface StatCardLegacyTrend {
  value: string
  positive?: boolean
}

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  iconColor?: string
  label: string
  value: React.ReactNode
  trend?: StatCardLegacyTrend | StatCardDeltaTrend
  /** Nota sotto il valore (periodo di confronto, fonte…). */
  hint?: React.ReactNode
  /** `compact`: allineata a sinistra e più densa, per le griglie KPI. */
  size?: "default" | "compact"
}

function StatCard({
  icon: Icon,
  iconColor,
  label,
  value,
  trend,
  hint,
  size = "default",
  className,
  ...props
}: StatCardProps) {
  const compact = size === "compact"

  return (
    <div
      className={cn(
        "bg-surface rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow",
        compact ? "p-3 text-left" : "p-4 text-center",
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className={cn("h-6 w-6 text-primary", compact ? "mb-1" : "mx-auto mb-2")}
          style={iconColor ? { color: iconColor } : undefined}
        />
      )}
      <div className={cn("font-bold tabular-nums text-text-base", compact ? "text-xl" : "text-2xl")}>
        {value}
      </div>
      <div className="text-sm text-text-muted mt-0.5">{label}</div>
      {trend &&
        (typeof trend.value === "string" ? (
          <div
            className={cn(
              "text-xs font-medium mt-1",
              (trend as StatCardLegacyTrend).positive ? "text-trend-positive" : "text-trend-negative"
            )}
          >
            {trend.value}
          </div>
        ) : (
          <div className="mt-1">
            <Delta {...(trend as StatCardDeltaTrend)} />
          </div>
        ))}
      {hint && <div className="text-xs text-text-subtle mt-1">{hint}</div>}
    </div>
  )
}

export { StatCard }
