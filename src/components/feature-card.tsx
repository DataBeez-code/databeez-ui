import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  iconColor?: string
  iconBg?: string
  title: string
  description?: string
  action?: React.ReactNode
  horizontal?: boolean
}

function FeatureCard({
  icon: Icon,
  iconColor = "#f59e0b",
  iconBg = "#f59e0b1a",
  title,
  description,
  action,
  horizontal = false,
  className,
  ...props
}: FeatureCardProps) {
  if (horizontal) {
    return (
      <div
        className={cn(
          "bg-surface rounded-xl shadow-sm border border-border p-6",
          "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
          className
        )}
        {...props}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: iconBg }}
          >
            <Icon className="h-6 w-6" style={{ color: iconColor }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-text-base">{title}</h3>
            {description && (
              <p className="mt-1 text-sm text-text-muted">{description}</p>
            )}
            {action && <div className="mt-3">{action}</div>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "bg-surface rounded-xl shadow-sm border border-border p-8 text-center",
        "hover:shadow-lg hover:border-databeez-primary/20 transition-all",
        className
      )}
      {...props}
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="h-8 w-8" style={{ color: iconColor }} />
      </div>
      <h3 className="text-lg font-semibold text-text-base mb-3">{title}</h3>
      {description && (
        <p className="text-text-muted text-sm leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

export { FeatureCard }
