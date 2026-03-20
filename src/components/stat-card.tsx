import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  iconColor?: string
  label: string
  value: React.ReactNode
  trend?: {
    value: string
    positive?: boolean
  }
}

function StatCard({
  icon: Icon,
  iconColor = "#f59e0b",
  label,
  value,
  trend,
  className,
  ...props
}: StatCardProps) {
  return (
    <div
      className={cn(
        "bg-surface rounded-xl shadow-sm border border-border p-4 text-center hover:shadow-md transition-shadow",
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon
          className="h-6 w-6 mx-auto mb-2"
          style={{ color: iconColor }}
        />
      )}
      <div className="text-2xl font-bold text-text-base">{value}</div>
      <div className="text-sm text-text-muted mt-0.5">{label}</div>
      {trend && (
        <div
          className={cn(
            "text-xs font-medium mt-1",
            trend.positive ? "text-green-600" : "text-red-500"
          )}
        >
          {trend.value}
        </div>
      )}
    </div>
  )
}

export { StatCard }
