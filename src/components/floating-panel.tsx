"use client"

import * as React from "react"
import { ChevronDown, ChevronUp, GripVertical } from "lucide-react"

import { cn } from "@/lib/utils"

const EDGE_MARGIN = 8
const HEADER_HEIGHT = 32
const MIN_WIDTH = 140

type Position = { x: number; y: number }

/**
 * Ancoraggio iniziale + trascinamento col mouse, generalizzati da
 * `usePanelPosition` in BeeGraph (`panelAnchor.ts`). Due garanzie mantenute:
 * la posizione è sempre raggiungibile (mai calcolata fuori dallo schermo) e
 * segue il ridimensionamento della finestra, riportando dentro il pannello
 * solo se ne è uscito — la posizione scelta dall'utente col trascinamento
 * non viene mai "corretta" a sorpresa.
 */
function useFloatingPanelPosition(
  anchor: "left" | "right",
  offsetX: number,
  offsetY: number
) {
  const clamp = React.useCallback((p: Position): Position => {
    if (typeof window === "undefined") return p
    return {
      x: Math.min(
        Math.max(p.x, EDGE_MARGIN),
        Math.max(EDGE_MARGIN, window.innerWidth - EDGE_MARGIN - MIN_WIDTH)
      ),
      y: Math.min(
        Math.max(p.y, EDGE_MARGIN),
        Math.max(EDGE_MARGIN, window.innerHeight - HEADER_HEIGHT - EDGE_MARGIN)
      ),
    }
  }, [])

  const [pos, setPos] = React.useState<Position>(() => {
    if (typeof window === "undefined") return { x: 100, y: 100 }
    const x = anchor === "right" ? window.innerWidth - offsetX : offsetX
    return clamp({ x, y: window.innerHeight - offsetY })
  })

  const posRef = React.useRef(pos)
  posRef.current = pos

  React.useEffect(() => {
    const onResize = () => setPos((p) => clamp(p))
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [clamp])

  function startDrag(event: React.MouseEvent) {
    if (event.button !== 0) return
    event.preventDefault()
    event.stopPropagation()
    const offsetLeft = event.clientX - posRef.current.x
    const offsetTop = event.clientY - posRef.current.y
    const onMove = (e: MouseEvent) =>
      setPos(clamp({ x: e.clientX - offsetLeft, y: e.clientY - offsetTop }))
    const onUp = () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }

  return { pos, startDrag }
}

function panelBodyMaxHeight(topY: number): number {
  if (typeof window === "undefined") return 400
  return Math.max(120, window.innerHeight - topY - HEADER_HEIGHT - EDGE_MARGIN * 2)
}

export interface FloatingPanelProps {
  title: string
  children: React.ReactNode
  /** Lato di ancoraggio della posizione iniziale. Default `"right"`. */
  anchor?: "left" | "right"
  /** Distanza iniziale, in px, dal bordo di ancoraggio. */
  offsetX?: number
  /** Distanza iniziale, in px, dal bordo inferiore. */
  offsetY?: number
  collapsible?: boolean
  /** Stato collassato controllato. Se omesso, il componente lo gestisce da sé. */
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapsedChange?: (collapsed: boolean) => void
  className?: string
}

/**
 * Pannello flottante trascinabile con intestazione (maniglia + titolo +
 * collapse), `position: fixed` e corpo a scorrimento con altezza massima
 * calcolata. Estratto dai due pannelli di filtro duplicati in BeeGraph
 * (`NodeFilterPanel.tsx` / `EdgeFilterPanel.tsx`) e da `panelAnchor.ts`.
 *
 * Le coordinate di posizionamento restano inline (sono dinamiche, calcolate
 * dal drag); bordi, colori e tipografia passano dai token del design system.
 */
function FloatingPanel({
  title,
  children,
  anchor = "right",
  offsetX = 240,
  offsetY = 480,
  collapsible = true,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  className,
}: FloatingPanelProps) {
  const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed)
  const isControlled = collapsed !== undefined
  const isCollapsed = isControlled ? !!collapsed : internalCollapsed

  function toggleCollapsed() {
    const next = !isCollapsed
    if (!isControlled) setInternalCollapsed(next)
    onCollapsedChange?.(next)
  }

  const { pos, startDrag } = useFloatingPanelPosition(anchor, offsetX, offsetY)

  return (
    <div
      className={cn(
        "fixed z-50 overflow-hidden rounded-md border border-border bg-surface shadow-lg",
        className
      )}
      style={{ minWidth: MIN_WIDTH, left: pos.x, top: pos.y }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div
        onMouseDown={startDrag}
        className={cn(
          "flex h-8 cursor-grab items-center gap-1.5 px-2.5 text-text-base",
          !isCollapsed && "border-b border-border"
        )}
      >
        <GripVertical className="h-3 w-3 shrink-0 text-text-muted" />
        <span className="flex-1 truncate text-[10px] font-semibold uppercase tracking-wide text-text-muted">
          {title}
        </span>
        {collapsible && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              toggleCollapsed()
            }}
            aria-label={isCollapsed ? "Espandi pannello" : "Comprimi pannello"}
            className="flex shrink-0 items-center justify-center leading-none text-text-base"
          >
            {isCollapsed ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronUp className="h-3 w-3" />
            )}
          </button>
        )}
      </div>
      {!isCollapsed && (
        <div
          className="flex flex-col gap-1.5 overflow-y-auto p-2.5"
          style={{ maxHeight: panelBodyMaxHeight(pos.y) }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export { FloatingPanel }
