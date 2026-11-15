"use client"

import * as React from "react"
import { ChevronsUpDown, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Checkbox } from "./checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface MultiSelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface MultiSelectProps {
  options: MultiSelectOption[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  label?: string
  error?: string
  helperText?: string
  disabled?: boolean
  className?: string
  /** Mostra i pulsanti «Seleziona tutto» / «Deseleziona» sopra la lista (agiscono sui risultati filtrati). */
  showBulkActions?: boolean
  selectAllLabel?: string
  clearLabel?: string
  /** Quanti nomi mostrare nel trigger prima di passare a «+N» (default 2). Con 0 mostra sempre il riepilogo numerico. */
  maxVisibleLabels?: number
  /** Riepilogo numerico usato quando `maxVisibleLabels` e' 0. */
  summaryLabel?: (count: number) => string
}

const defaultSummary = (n: number) => (n === 1 ? "1 selezionato" : `${n} selezionati`)

function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Seleziona...",
  searchPlaceholder = "Cerca...",
  emptyMessage = "Nessun risultato.",
  label,
  error,
  helperText,
  disabled,
  className,
  showBulkActions = false,
  selectAllLabel = "Seleziona tutto",
  clearLabel = "Deseleziona",
  maxVisibleLabels = 2,
  summaryLabel = defaultSummary,
}: MultiSelectProps) {
  const id = React.useId()
  const listId = `${id}-list`
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [activeIndex, setActiveIndex] = React.useState(0)

  const filtered = React.useMemo(() => {
    if (!search) return options
    const lower = search.toLowerCase()
    return options.filter((o) => o.label.toLowerCase().includes(lower))
  }, [options, search])

  const selected = React.useMemo(() => new Set(value), [value])
  const selectedOptions = options.filter((o) => selected.has(o.value))

  const optionId = (i: number) => `${id}-opt-${i}`
  const safeIndex = Math.min(activeIndex, Math.max(0, filtered.length - 1))

  React.useEffect(() => {
    if (!open) return
    document.getElementById(optionId(safeIndex))?.scrollIntoView?.({ block: "nearest" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeIndex, open])

  function toggle(option: MultiSelectOption) {
    if (option.disabled) return
    onChange(
      selected.has(option.value)
        ? value.filter((v) => v !== option.value)
        : [...value, option.value]
    )
  }

  function selectAll() {
    const add = filtered.filter((o) => !o.disabled && !selected.has(o.value)).map((o) => o.value)
    onChange([...value, ...add])
  }

  function clearAll() {
    // Deseleziona solo cio' che e' visibile col filtro corrente e non e' disabilitato.
    const remove = new Set(filtered.filter((o) => !o.disabled).map((o) => o.value))
    onChange(value.filter((v) => !remove.has(v)))
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (filtered.length === 0) return
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setActiveIndex((safeIndex + 1) % filtered.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setActiveIndex((safeIndex - 1 + filtered.length) % filtered.length)
        break
      case "Home":
        if (e.ctrlKey) {
          e.preventDefault()
          setActiveIndex(0)
        }
        break
      case "End":
        if (e.ctrlKey) {
          e.preventDefault()
          setActiveIndex(filtered.length - 1)
        }
        break
      case "Enter":
        e.preventDefault()
        toggle(filtered[safeIndex])
        break
    }
  }

  let summary: string | null = null
  if (selectedOptions.length > 0) {
    if (maxVisibleLabels > 0 && selectedOptions.length <= maxVisibleLabels) {
      summary = selectedOptions.map((o) => o.label).join(", ")
    } else if (maxVisibleLabels > 0) {
      const visible = selectedOptions.slice(0, maxVisibleLabels).map((o) => o.label).join(", ")
      summary = `${visible} +${selectedOptions.length - maxVisibleLabels}`
    } else {
      summary = summaryLabel(selectedOptions.length)
    }
  }

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-base">
          {label}
        </label>
      )}
      <Popover
        open={open}
        onOpenChange={(o) => {
          setOpen(o)
          if (!o) setSearch("")
          setActiveIndex(0)
        }}
      >
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={open ? listId : undefined}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${id}-error` : helperText ? `${id}-help` : undefined}
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-base",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !summary && "text-text-muted",
              error && "border-error focus:ring-error focus:border-error",
              className
            )}
          >
            <span className="truncate">{summary ?? placeholder}</span>
            <ChevronsUpDown className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          <div className="flex items-center border-b border-border px-3">
            <Search className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setActiveIndex(0)
              }}
              onKeyDown={handleKeyDown}
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              role="combobox"
              aria-expanded="true"
              aria-autocomplete="list"
              aria-controls={listId}
              aria-activedescendant={filtered.length > 0 ? optionId(safeIndex) : undefined}
              className="flex-1 bg-transparent py-3 pl-2 text-sm text-text-base outline-none placeholder:text-text-muted"
              autoFocus
            />
          </div>

          {showBulkActions && (
            <div className="flex items-center justify-between border-b border-border px-3 py-1.5 text-xs">
              <button
                type="button"
                onClick={selectAll}
                className="rounded px-1 py-0.5 font-medium text-text-base hover:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {selectAllLabel}
              </button>
              <button
                type="button"
                onClick={clearAll}
                className="rounded px-1 py-0.5 text-text-muted hover:bg-subtle hover:text-text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {clearLabel}
              </button>
            </div>
          )}

          <ul
            id={listId}
            role="listbox"
            aria-multiselectable="true"
            aria-label={label ?? placeholder}
            className="max-h-[15rem] overflow-y-auto p-1"
          >
            {filtered.map((option, i) => {
              const isSelected = selected.has(option.value)
              return (
                <li
                  key={option.value}
                  id={optionId(i)}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={option.disabled || undefined}
                  onClick={() => toggle(option)}
                  // il li non è focalizzabile: senza questo il clic toglie il focus alla ricerca
                  // e frecce/Invio smettono di funzionare
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseMove={() => i !== safeIndex && setActiveIndex(i)}
                  className={cn(
                    "flex cursor-default select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm text-text-base",
                    i === safeIndex && "bg-subtle",
                    option.disabled && "pointer-events-none opacity-50",
                    isSelected && "font-medium"
                  )}
                >
                  {/* Solo decorativo: lo stato e' esposto da aria-selected sul li. */}
                  <span aria-hidden="true" className="pointer-events-none inline-flex">
                    <Checkbox tabIndex={-1} checked={isSelected} readOnly onChange={() => {}} />
                  </span>
                  <span className="truncate">{option.label}</span>
                </li>
              )
            })}
          </ul>
          {filtered.length === 0 && (
            <div className="py-6 text-center text-sm text-text-muted" role="status">
              {emptyMessage}
            </div>
          )}
        </PopoverContent>
      </Popover>
      {error && (
        <p id={`${id}-error`} className="text-xs text-error-fg">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${id}-help`} className="text-xs text-text-muted">
          {helperText}
        </p>
      )}
    </div>
  )
}
MultiSelect.displayName = "MultiSelect"

export { MultiSelect }
export type { MultiSelectProps, MultiSelectOption }
