import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        success: "bg-success/10 text-success-fg",
        warning: "bg-warning/10 text-warning-fg",
        error:   "bg-error/10 text-error-fg",
        info:    "bg-info/10 text-info-fg",
        neutral: "bg-subtle text-text-muted",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

const dotVariants: Record<string, string> = {
  success: "bg-success",
  warning: "bg-warning",
  error:   "bg-error",
  info:    "bg-info",
  neutral: "bg-text-muted",
}

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  label: string
  dot?: boolean
}

function StatusBadge({
  variant = "neutral",
  label,
  dot = true,
  className,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(statusBadgeVariants({ variant }), className)}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full shrink-0",
            dotVariants[variant ?? "neutral"]
          )}
        />
      )}
      {label}
    </span>
  )
}

export { StatusBadge, statusBadgeVariants }
