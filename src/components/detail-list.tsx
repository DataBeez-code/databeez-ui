import * as React from "react"

import { cn } from "@/lib/utils"

// --- InfoRow ---

export interface InfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value?: React.ReactNode
}

function InfoRow({ label, value, className, ...props }: InfoRowProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)} {...props}>
      <span className="text-xs text-text-muted">{label}</span>
      <span className="text-sm font-medium break-words text-text-base">
        {value ?? "—"}
      </span>
    </div>
  )
}

// --- Section ---

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
}

function Section({ title, children, className, ...props }: SectionProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted border-b border-border pb-1">
        {title}
      </h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

export { InfoRow, Section }
