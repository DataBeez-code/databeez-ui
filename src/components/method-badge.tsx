import * as React from "react"

import { cn } from "@/lib/utils"

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS"

const methodStyles: Record<HttpMethod, string> = {
  GET:     "bg-success-bg text-success-fg border-success-border",
  POST:    "bg-info-bg text-info-fg border-info-border",
  PUT:     "bg-warning-bg text-warning-fg border-warning-border",
  PATCH:   "bg-warning-bg text-warning-fg border-warning-border",
  DELETE:  "bg-error-bg text-error-fg border-error-border",
  HEAD:    "bg-subtle text-text-muted border-border",
  OPTIONS: "bg-subtle text-text-muted border-border",
}

export interface MethodBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  method: string
}

function MethodBadge({ method, className, ...props }: MethodBadgeProps) {
  const normalized = method.toUpperCase() as HttpMethod
  const style = methodStyles[normalized] ?? "bg-subtle text-text-muted border-border"

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded border text-xs font-mono font-bold tracking-wide",
        style,
        className
      )}
      {...props}
    >
      {normalized}
    </span>
  )
}

export { MethodBadge }
