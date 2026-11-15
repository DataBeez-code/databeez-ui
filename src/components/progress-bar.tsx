import * as React from "react"

import { cn } from "@/lib/utils"

export type ProgressBarTone = "primary" | "success" | "warning" | "error" | "info" | "accent"

const TONE_CLASS: Record<ProgressBarTone, string> = {
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  info: "bg-info",
  // accent-fg e non accent: in beegraph `bg-accent` è ridefinito dal tema shadcn
  accent: "bg-accent-fg",
}

export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  value: number
  /** Valore massimo. Default `100`. */
  max?: number
  tone?: ProgressBarTone
  label?: string
  /** Mostra la percentuale (valore/max) accanto all'etichetta. */
  showValue?: boolean
}

function ProgressBar({
  value,
  max = 100,
  tone = "primary",
  label,
  showValue = false,
  className,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-valuetext": ariaValueText,
  ...props
}: ProgressBarProps) {
  const safeMax = max > 0 ? max : 100
  const clamped = Number.isFinite(value) ? Math.min(Math.max(value, 0), safeMax) : 0
  const pct = (clamped / safeMax) * 100

  return (
    <div className={cn("space-y-1", className)} {...props}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs">
          {label && <span className="text-text-muted">{label}</span>}
          {showValue && (
            <span className="ml-auto font-medium tabular-nums text-text-base">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuetext={ariaValueText}
        // Il nome accessibile sta sull'elemento progressbar, non sul contenitore
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabelledBy ? undefined : (ariaLabel ?? label ?? "Avanzamento")}
        className="h-2 overflow-hidden rounded-full bg-emphasis"
      >
        <div
          className={cn("h-full rounded-full transition-all", TONE_CLASS[tone])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export { ProgressBar }
