import * as React from "react"
import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("bg-subtle border-b border-border", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("divide-y divide-border", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("bg-subtle border-t border-border font-medium", className)}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "transition-colors hover:bg-subtle data-[state=selected]:bg-primary-light",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

interface NumericProps {
  /** Colonna numerica: allineata a destra, cifre tabulari, importi su una riga. */
  numeric?: boolean
}

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & NumericProps
>(({ className, numeric, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-4 text-left align-middle font-semibold text-text-muted text-xs uppercase tracking-wider",
      numeric && "text-right tabular-nums whitespace-nowrap",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

export type SortDirection = "asc" | "desc"

export interface TableSortHeadProps
  extends Omit<React.ThHTMLAttributes<HTMLTableCellElement>, "onClick">,
    NumericProps {
  /** Direzione di ordinamento corrente di questa colonna; `null` se la tabella non è ordinata per essa. */
  direction: SortDirection | null
  /** Chiamata all'attivazione (clic, Invio, Spazio): l'ordinamento dei dati è a carico dell'app. */
  onSort: () => void
}

const SORT_ARIA = { asc: "ascending", desc: "descending" } as const

const TableSortHead = React.forwardRef<HTMLTableCellElement, TableSortHeadProps>(
  ({ className, numeric, direction, onSort, children, ...props }, ref) => {
    const Icon = direction === "asc" ? ArrowUp : direction === "desc" ? ArrowDown : ChevronsUpDown
    return (
      <TableHead
        ref={ref}
        numeric={numeric}
        aria-sort={direction ? SORT_ARIA[direction] : "none"}
        className={className}
        {...props}
      >
        <button
          type="button"
          onClick={onSort}
          className={cn(
            "inline-flex items-center gap-1 rounded-sm uppercase tracking-wider hover:text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            direction && "text-text-base"
          )}
        >
          {children}
          <Icon aria-hidden="true" className={cn("h-3.5 w-3.5 shrink-0", !direction && "text-text-subtle")} />
        </button>
      </TableHead>
    )
  }
)
TableSortHead.displayName = "TableSortHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & NumericProps
>(({ className, numeric, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-4 py-3 align-middle text-text-base",
      numeric && "text-right tabular-nums whitespace-nowrap",
      className
    )}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-text-muted", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableSortHead,
  TableRow,
  TableCell,
  TableCaption,
}
