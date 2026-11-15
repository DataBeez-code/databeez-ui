"use client"

import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface FilterChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "type"> {
  label: React.ReactNode
  /** Stato attivo (toggle). Esposto con `aria-pressed`. */
  active?: boolean
  /** Click sul chip: toggle del filtro. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  /** Se presente il chip e' rimovibile: compare il pulsante «Rimuovi <label>». */
  onRemove?: () => void
  /** Testo per l'`aria-label` del pulsante di rimozione quando `label` non e' una stringa. */
  removeLabel?: string
  /** Icona opzionale a sinistra. */
  icon?: React.ReactNode
}

const BASE =
  "inline-flex h-7 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface " +
  "disabled:cursor-not-allowed disabled:opacity-50"

const INACTIVE = "border-border bg-surface text-text-muted hover:bg-subtle hover:text-text-base"
const ACTIVE = "border-primary bg-primary-light text-text-base"

/**
 * Chip di filtro. Senza `onRemove` e' un pulsante toggle (`aria-pressed`);
 * con `onRemove` il chip e' un gruppo: il corpo resta il toggle e accanto
 * c'e' un pulsante separato «Rimuovi <label>».
 */
const FilterChip = React.forwardRef<HTMLButtonElement, FilterChipProps>(
  (
    { label, active = false, onClick, onRemove, removeLabel, icon, className, disabled, ...props },
    ref
  ) => {
    const body = (
      <>
        {icon}
        <span className="truncate">{label}</span>
      </>
    )

    if (!onRemove) {
      return (
        <button
          ref={ref}
          type="button"
          aria-pressed={active}
          disabled={disabled}
          onClick={onClick}
          className={cn(BASE, active ? ACTIVE : INACTIVE, className)}
          {...props}
        >
          {body}
        </button>
      )
    }

    const name = removeLabel ?? (typeof label === "string" ? label : "filtro")
    return (
      <span
        className={cn(
          "inline-flex h-7 items-center rounded-full border text-xs font-medium transition-colors",
          active ? ACTIVE : INACTIVE,
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        {onClick ? (
          <button
            ref={ref}
            type="button"
            aria-pressed={active}
            disabled={disabled}
            onClick={onClick}
            className="inline-flex h-full items-center gap-1.5 rounded-l-full pl-3 pr-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            {...props}
          >
            {body}
          </button>
        ) : (
          // Solo rimovibile: senza onClick un pulsante con aria-pressed non farebbe nulla
          <span className="inline-flex h-full items-center gap-1.5 pl-3 pr-1.5">{body}</span>
        )}
        <button
          type="button"
          disabled={disabled}
          onClick={onRemove}
          aria-label={`Rimuovi ${name}`}
          className="mr-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-text-muted hover:bg-emphasis hover:text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <X className="h-3 w-3" aria-hidden="true" />
        </button>
      </span>
    )
  }
)
FilterChip.displayName = "FilterChip"

export { FilterChip }
