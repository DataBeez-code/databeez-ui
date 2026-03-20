import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: LucideIcon
  title: string
  description?: string
  action?: React.ReactNode
}

function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-12 px-6 gap-4",
        className
      )}
      {...props}
    >
      {Icon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-databeez-primary/10">
          <Icon className="h-6 w-6 text-databeez-primary" />
        </div>
      )}
      <div className="space-y-1">
        <p className="font-semibold text-text-base">{title}</p>
        {description && (
          <p className="text-sm text-text-muted max-w-sm">{description}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  )
}

export { EmptyState }
