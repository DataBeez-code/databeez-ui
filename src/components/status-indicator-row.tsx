import * as React from "react"
import { cn } from "@/lib/utils"

type StatusVariant = "operational" | "degraded" | "outage" | "maintenance"

const variantConfig: Record<StatusVariant, { dot: string; text: string; label: string }> = {
  operational: { dot: "bg-green-500", text: "text-green-500 dark:text-green-400", label: "Operational" },
  degraded:    { dot: "bg-yellow-500", text: "text-yellow-500 dark:text-yellow-400", label: "Degraded" },
  outage:      { dot: "bg-red-500", text: "text-red-500 dark:text-red-400", label: "Outage" },
  maintenance: { dot: "bg-text-muted", text: "text-text-muted", label: "Maintenance" },
}

export interface StatusIndicatorRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  status: StatusVariant
  statusLabel?: string
}

function StatusIndicatorRow({
  label,
  status,
  statusLabel,
  className,
  ...props
}: StatusIndicatorRowProps) {
  const cfg = variantConfig[status]
  return (
    <div className={cn("flex items-center justify-between", className)} {...props}>
      <div className="flex items-center">
        <div className={cn("h-2 w-2 rounded-full mr-3", cfg.dot)} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className={cn("text-sm", cfg.text)}>{statusLabel ?? cfg.label}</span>
    </div>
  )
}

export { StatusIndicatorRow }
