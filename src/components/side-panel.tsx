"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  width?: number
  /** Contenuto dell'header (titolo, icona, badge…) */
  header?: React.ReactNode
}

function SidePanel({
  open,
  onClose,
  width = 380,
  header,
  children,
  className,
  ...props
}: SidePanelProps) {
  if (!open) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width,
        height: "100vh",
        zIndex: 50,
        overflowY: "auto",
      }}
      className={cn(
        "bg-surface border-l border-border shadow-2xl",
        className
      )}
      {...props}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 rounded-md p-1.5 text-text-muted hover:text-text-base hover:bg-subtle transition-colors"
        aria-label="Chiudi pannello"
      >
        <X className="size-5" />
      </button>

      {/* Optional header */}
      {header && (
        <div className="px-4 pt-4 pb-2 pr-10">
          {header}
        </div>
      )}

      {/* Content */}
      <div className={cn(header ? "" : "pt-4")}>
        {children}
      </div>
    </div>
  )
}

export { SidePanel }
