import * as React from "react"
import { type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface InputWithIconProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon
  label?: string
  error?: string
  helperText?: string
  rightElement?: React.ReactNode
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  (
    {
      icon: Icon,
      label,
      error,
      helperText,
      rightElement,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? `input-icon-${Math.random().toString(36).slice(2, 9)}`

    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-base"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
          <input
            ref={ref}
            id={inputId}
            className={cn(
              "block w-full rounded-lg border border-border bg-surface py-2.5 pl-10 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "placeholder:text-text-muted transition-colors",
              rightElement ? "pr-10" : "pr-4",
              error && "border-red-300 focus:ring-red-500 focus:border-red-500",
              className
            )}
            {...props}
          />
          {rightElement && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {rightElement}
            </div>
          )}
        </div>
        {error && <p className="text-xs text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="text-xs text-text-muted">{helperText}</p>
        )}
      </div>
    )
  }
)
InputWithIcon.displayName = "InputWithIcon"

export { InputWithIcon }
