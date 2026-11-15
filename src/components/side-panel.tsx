"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { clampWidth, widthAfterDrag, widthAfterKey } from "@/lib/resize"

export interface SidePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose: () => void
  width?: number
  /** Contenuto dell'header (titolo, icona, badge…) */
  header?: React.ReactNode
  /** Abilita la maniglia di ridimensionamento sul bordo sinistro. Default: false (comportamento invariato). */
  resizable?: boolean
  /** Larghezza minima in px quando `resizable` (default 280). */
  minWidth?: number
  /** Larghezza massima in px quando `resizable` (default 640). */
  maxWidth?: number
  /** Larghezza iniziale quando `resizable`; se omessa si usa `width`. */
  defaultWidth?: number
  /** Chiamata a ogni variazione di larghezza (trascinamento o tastiera). */
  onWidthChange?: (width: number) => void
}

function SidePanel({
  open,
  onClose,
  width = 380,
  header,
  resizable = false,
  minWidth = 280,
  maxWidth = 640,
  defaultWidth,
  onWidthChange,
  children,
  className,
  ...props
}: SidePanelProps) {
  const [dragWidth, setDragWidth] = React.useState(() =>
    clampWidth(defaultWidth ?? width, minWidth, maxWidth)
  )
  const dragStart = React.useRef<{ x: number; width: number } | null>(null)

  if (!open) return null

  const currentWidth = resizable ? clampWidth(dragWidth, minWidth, maxWidth) : width

  function update(next: number) {
    if (next === currentWidth) return
    setDragWidth(next)
    onWidthChange?.(next)
  }

  const panel = (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: currentWidth,
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

  if (!resizable) return panel

  return (
    <>
      {panel}
      <div
        role="separator"
        aria-orientation="vertical"
        aria-label="Ridimensiona pannello"
        aria-valuenow={currentWidth}
        aria-valuemin={minWidth}
        aria-valuemax={maxWidth}
        tabIndex={0}
        style={{
          position: "fixed",
          top: 0,
          right: currentWidth - 3,
          width: 6,
          height: "100vh",
          zIndex: 50,
          touchAction: "none",
        }}
        className="cursor-col-resize bg-transparent transition-colors hover:bg-primary/40 focus-visible:bg-primary/60 focus-visible:outline-none active:bg-primary/60"
        onPointerDown={(e) => {
          e.preventDefault()
          e.currentTarget.setPointerCapture(e.pointerId)
          dragStart.current = { x: e.clientX, width: currentWidth }
        }}
        onPointerMove={(e) => {
          if (!dragStart.current) return
          update(widthAfterDrag(dragStart.current.width, dragStart.current.x, e.clientX, "right", minWidth, maxWidth))
        }}
        onPointerUp={() => {
          dragStart.current = null
        }}
        onPointerCancel={() => {
          dragStart.current = null
        }}
        onKeyDown={(e) => {
          const next = widthAfterKey(e.key, currentWidth, "right", minWidth, maxWidth, 16, e.shiftKey)
          if (next === null) return
          e.preventDefault()
          update(next)
        }}
      />
    </>
  )
}

export { SidePanel }
