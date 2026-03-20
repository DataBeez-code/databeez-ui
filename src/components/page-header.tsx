import * as React from "react"

import { cn } from "@/lib/utils"

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  actions?: React.ReactNode
  breadcrumb?: React.ReactNode
}

function PageHeader({
  title,
  description,
  actions,
  breadcrumb,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn("bg-surface border-b border-border", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {breadcrumb && <div className="mb-3">{breadcrumb}</div>}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold text-text-base truncate">{title}</h1>
            {description && (
              <p className="mt-1 text-text-muted">{description}</p>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-3 shrink-0">{actions}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export { PageHeader }
