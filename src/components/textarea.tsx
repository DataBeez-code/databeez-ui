import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-")

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-base"
          >
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          className={cn(
            "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-base placeholder:text-text-muted",
            "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-subtle",
            "resize-y min-h-[80px] transition-colors",
            error && "border-error-500 focus:ring-error-500 focus:border-error-500",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-error-500">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-xs text-text-muted">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
