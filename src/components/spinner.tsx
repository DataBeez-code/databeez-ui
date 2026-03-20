import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin rounded-full border-4 border-databeez-primary border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        default: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-12 w-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

function Spinner({ className, size, label = "Caricamento...", ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <div className={spinnerVariants({ size })} />
      <span className="sr-only">{label}</span>
    </div>
  )
}

function SpinnerOverlay({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-3">
      <Spinner size="lg" label={label} />
      {label && <p className="text-sm text-text-muted">{label}</p>}
    </div>
  )
}

export { Spinner, SpinnerOverlay, spinnerVariants }
