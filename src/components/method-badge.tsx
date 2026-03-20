import * as React from "react"

import { cn } from "@/lib/utils"

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS"

const methodStyles: Record<HttpMethod, string> = {
  GET:     "bg-green-100 text-green-800 border-green-200",
  POST:    "bg-blue-100 text-blue-800 border-blue-200",
  PUT:     "bg-amber-100 text-amber-800 border-amber-200",
  PATCH:   "bg-purple-100 text-purple-800 border-purple-200",
  DELETE:  "bg-red-100 text-red-800 border-red-200",
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
