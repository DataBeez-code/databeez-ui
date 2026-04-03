"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  label?: string
  error?: string
  helperText?: string
  disabled?: boolean
  className?: string
  /** Allow clearing the selection */
  clearable?: boolean
}

function Combobox({
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
  clearable = false,
}: ComboboxProps) {
  const id = React.useId()
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const filtered = React.useMemo(() => {
    if (!search) return options
    const lower = search.toLowerCase()
    return options.filter((o) => o.label.toLowerCase().includes(lower))
  }, [options, search])

  const selectedOption = options.find((o) => o.value === value)

  function handleSelect(optionValue: string) {
    onChange?.(optionValue === value ? "" : optionValue)
    setOpen(false)
    setSearch("")
  }

  function handleClear(e: React.MouseEvent) {
    e.stopPropagation()
    onChange?.("")
  }

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-text-base">
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={(o) => { setOpen(o); if (!o) setSearch("") }}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            role="combobox"
            aria-expanded={open}
            disabled={disabled}
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm",
              "focus:outline-none focus:ring-2 focus:ring-databeez-primary focus:border-databeez-primary",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !selectedOption && "text-text-muted",
              error && "border-red-300 focus:ring-red-500 focus:border-red-500",
              className
            )}
          >
            <span className="truncate">
              {selectedOption?.label ?? placeholder}
            </span>
            <div className="flex items-center gap-1 shrink-0">
              {clearable && value && (
                <X
                  className="h-3.5 w-3.5 text-text-muted hover:text-text-base cursor-pointer"
                  onClick={handleClear}
                />
              )}
              <ChevronsUpDown className="h-4 w-4 text-text-muted" />
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
          {/* Search input */}
          <div className="flex items-center border-b border-border px-3">
            <Search className="h-4 w-4 text-text-muted shrink-0" />
            <input
              ref={inputRef}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="flex-1 bg-transparent py-3 pl-2 text-sm outline-none placeholder:text-text-muted"
              autoFocus
            />
          </div>

          {/* Options list */}
          <div className="max-h-60 overflow-y-auto p-1">
            {filtered.length === 0 ? (
              <div className="py-6 text-center text-sm text-text-muted">
                {emptyMessage}
              </div>
            ) : (
              filtered.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  disabled={option.disabled}
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm text-text-base outline-none transition-colors",
                    "hover:bg-subtle focus:bg-subtle",
                    "disabled:pointer-events-none disabled:opacity-50",
                    option.value === value && "font-medium"
                  )}
                >
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    {option.value === value && (
                      <Check className="h-4 w-4 text-databeez-primary" />
                    )}
                  </span>
                  {option.label}
                </button>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
      {error && <p className="text-xs text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="text-xs text-text-muted">{helperText}</p>
      )}
    </div>
  )
}
Combobox.displayName = "Combobox"

export { Combobox }
export type { ComboboxProps, ComboboxOption }
