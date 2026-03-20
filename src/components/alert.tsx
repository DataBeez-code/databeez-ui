import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertTriangle, CheckCircle, Info, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
  {
    variants: {
      variant: {
        default: "bg-subtle border-border text-text-base",
        info: "bg-blue-50 border-blue-200 text-blue-800",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
        destructive: "bg-red-50 border-red-200 text-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const iconMap = {
  default: Info,
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  destructive: XCircle,
}

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", title, children, ...props }, ref) => {
    const Icon = iconMap[variant ?? "default"]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        <Icon className="h-4 w-4 mt-0.5 shrink-0" />
        <div className="flex-1 min-w-0">
          {title && <p className="font-semibold mb-0.5">{title}</p>}
          {children && <p className="leading-relaxed">{children}</p>}
        </div>
      </div>
    )
  }
)
Alert.displayName = "Alert"

export { Alert, alertVariants }
