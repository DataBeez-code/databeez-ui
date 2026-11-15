import * as React from "react"

import { cn } from "@/lib/utils"

export interface SparklineProps extends Omit<React.SVGAttributes<SVGSVGElement>, "width" | "height"> {
  data: number[]
  width?: number
  height?: number
  strokeWidth?: number
  /** Riempimento tenue sotto la linea. */
  area?: boolean
}

/**
 * Sparkline SVG senza dipendenze. Il colore è `currentColor`: si cambia con una classe
 * token (`text-primary` di default, `text-trend-positive`, `text-info`…).
 * Senza `aria-label` è nascosta agli screen reader (`aria-hidden`).
 */
function Sparkline({
  data,
  width = 80,
  height = 24,
  strokeWidth = 1.5,
  area = false,
  className,
  "aria-label": ariaLabel,
  ...props
}: SparklineProps) {
  const values = data.filter((v) => Number.isFinite(v))
  const pad = strokeWidth
  const innerW = Math.max(width - 2 * pad, 0)
  const innerH = Math.max(height - 2 * pad, 0)

  let line = ""
  let fill = ""
  if (values.length > 0) {
    const min = Math.min(...values)
    const max = Math.max(...values)
    const range = max - min
    // Serie costante: linea a metà altezza (niente divisioni per zero)
    const y = (v: number) => (range === 0 ? height / 2 : pad + innerH - ((v - min) / range) * innerH)
    let pts: Array<readonly [number, number]>
    if (values.length === 1) {
      // 1 punto: segmento orizzontale a tutta larghezza
      pts = [
        [pad, y(values[0])],
        [width - pad, y(values[0])],
      ]
    } else {
      pts = values.map((v, i) => [pad + (i / (values.length - 1)) * innerW, y(v)] as const)
    }
    line = pts.map(([px, py], i) => `${i === 0 ? "M" : "L"}${px.toFixed(1)},${py.toFixed(1)}`).join(" ")
    if (area) {
      const last = pts[pts.length - 1]
      fill = `${line} L${last[0].toFixed(1)},${height} L${pts[0][0].toFixed(1)},${height} Z`
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={cn("text-primary", className)}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      {...props}
    >
      {fill && <path d={fill} fill="currentColor" fillOpacity={0.15} stroke="none" />}
      {line && (
        <path
          d={line}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export { Sparkline }
