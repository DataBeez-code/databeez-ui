import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        success: "bg-green-500/10 text-green-600 dark:text-green-400",
        warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        error:   "bg-red-500/10 text-red-600 dark:text-red-400",
        info:    "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        neutral: "bg-subtle text-text-muted",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

const dotVariants: Record<string, string> = {
  success: "bg-green-500",
  warning: "bg-amber-500",
  error:   "bg-red-500",
  info:    "bg-blue-500",
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
