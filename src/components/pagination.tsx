import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/button"
import { formatNumber } from "@/lib/format"
import { cn } from "@/lib/utils"

export interface PaginationProps extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  /** Pagina corrente, a partire da 1. */
  page: number
  /** Numero totale di pagine. */
  pageCount: number
  /** Chiamata con la nuova pagina (sempre nell'intervallo 1..pageCount). */
  onPageChange: (page: number) => void
  /** Totale elementi: se presente mostra «1.234 risultati». */
  totalItems?: number
  /** Etichetta accessibile del `nav`. Default «Paginazione». */
  "aria-label"?: string
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, page, pageCount, onPageChange, totalItems, "aria-label": ariaLabel = "Paginazione", ...props }, ref) => {
    const last = Math.max(1, pageCount)
    const current = Math.min(Math.max(1, page), last)
    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn("flex items-center justify-between gap-4 text-sm text-text-muted", className)}
        {...props}
      >
        <span>{totalItems !== undefined ? `${formatNumber(totalItems)} ${totalItems === 1 ? "risultato" : "risultati"}` : null}</span>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Pagina precedente"
            disabled={current <= 1}
            onClick={() => onPageChange(current - 1)}
          >
            <ChevronLeft aria-hidden="true" className="h-4 w-4" />
          </Button>
          <span aria-live="polite" className="tabular-nums text-text-base">
            Pagina {formatNumber(current)} di {formatNumber(last)}
          </span>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Pagina successiva"
            disabled={current >= last}
            onClick={() => onPageChange(current + 1)}
          >
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    )
  }
)
Pagination.displayName = "Pagination"

export { Pagination }
